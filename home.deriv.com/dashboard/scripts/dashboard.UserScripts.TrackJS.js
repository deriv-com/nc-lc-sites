function loadScript(url, callback) {
    var script = document.createElement('script');
    script.onload = function() {
        if (callback) callback();
    };
    script.src = url;
    script.async = true;
    document.head.appendChild(script);
}

// Helpers for PII redaction
(function() {
    // Luhn check for credit card candidates
    function luhnCheck(num) {
        var sum = 0,
            shouldDouble = false;
        for (var i = num.length - 1; i >= 0; i--) {
            var digit = num.charCodeAt(i) - 48; // fast parseInt
            if (digit < 0 || digit > 9) return false;
            if (shouldDouble) {
                digit *= 2;
                if (digit > 9) digit -= 9;
            }
            sum += digit;
            shouldDouble = !shouldDouble;
        }
        return (sum % 10) === 0;
    }

    function redactString(str) {
        if (typeof str !== "string" || !str) return str;

        // Email addresses
        // Simple, robust pattern; avoids matching URLs by requiring a word boundary
        str = str.replace(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi, "REDACTED_EMAIL");

        // SSNs (###-##-#### or #########), with digit boundaries
        str = str.replace(/(?<!\d)\d{3}-?\d{2}-?\d{4}(?!\d)/g, "REDACTED_SSN");

        // Credit cards (13–19 digits, with spaces/dashes). Verify with Luhn to reduce false positives.
        str = str.replace(/\b(?:\d[ -]?){13,19}\b/g, function(m) {
            var digits = m.replace(/[^\d]/g, "");
            if (digits.length >= 13 && digits.length <= 19 && luhnCheck(digits)) {
                return "REDACTED_CC";
            }
            return m;
        });

        // Phone numbers (intl-ish). Keep moderate strictness: 10–15 digits total after stripping.
        str = str.replace(/\+?\d[\d(). -]{7,}\d/g, function(m) {
            var digits = m.replace(/[^\d]/g, "");
            // Avoid redacting CCs again; we already handled them above with Luhn.
            if (digits.length >= 10 && digits.length <= 15) {
                return "REDACTED_PHONE";
            }
            return m;
        });

        return str;
    }

    // Walk any payload object/array and redact string fields in-place
    function deepRedact(value, seen) {
        if (!value || typeof value !== "object") {
            return typeof value === "string" ? redactString(value) : value;
        }
        if (!seen) seen = new WeakSet();
        if (seen.has(value)) return value;
        seen.add(value);

        if (Array.isArray(value)) {
            for (var i = 0; i < value.length; i++) {
                value[i] = deepRedact(value[i], seen);
            }
            return value;
        }

        for (var k in value) {
            if (!Object.prototype.hasOwnProperty.call(value, k)) continue;
            value[k] = deepRedact(value[k], seen);
        }
        return value;
    }

    // Expose helpers to window scope in case you want to reuse
    window.__piiRedaction = {
        redactString,
        deepRedact
    };
})();

// Load TrackJS and install with PII redaction
loadScript("https://cdn.trackjs.com/agent/v3/latest/t.js", function() {
    if (window.TrackJS) {
        TrackJS.install({
            token: "346262e7ffef497d85874322fff3bbf8",
            application: "deriv-home",
            dedupe: true,
            onError: function(payload) {
                try {
                    // Redact across the entire payload object (console items, messages, URLs, metadata, etc.)
                    window.__piiRedaction.deepRedact(payload);

                    // If you specifically want to ensure console messages are handled (already covered by deepRedact)
                    if (payload.console && Array.isArray(payload.console)) {
                        for (var i = 0; i < payload.console.length; i++) {
                            var item = payload.console[i];
                            if (item && typeof item.message === "string") {
                                item.message = window.__piiRedaction.redactString(item.message);
                            }
                        }
                    }
                } catch (e) {
                    // Fail-safe: never block error reporting due to redaction errors
                }
                // Return true to allow TrackJS to send the (sanitized) error
                return true;
            }
        });
    }

    const hostname = window.location.hostname;
    const isProductionHub = [
        "home.deriv.com",
        "home.deriv.me",
        "home.deriv.be",
        "staging-home.deriv.com"
    ].includes(hostname);

    if (isProductionHub && !window._getFeatureFlagValueByName("ENABLE_CONSOLE_LOG")) {
        if (window.console?.log) {
            window.console.log = function() {};
        }
        if (window.TrackJS?.console?.log) {
            window.TrackJS.console.log = function() {};
        }
    }
});