(function(global, factory) {
    if (typeof define === "function" && define.amd) {
        define("@outsystems/settings-js", ["exports"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.outsystemsSettingsJs = mod.exports;
    }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function(_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.Version = _exports.FeaturesManager = _exports.FeatureKeys = void 0;
    var e;
    ! function(e) {
        e.WebHttpClientForNative = "WebHttpClientForNative", e.NoInstrumentationFactoryLogs = "NoInstrumentationFactoryLogs", e.WriteLogsOnConsoles = "WriteLogsOnConsoles", e.ServiceWorkerTraces = "ServiceWorkerTraces", e.EnableOTLV2TraceFormat = "EnableOTLV2TraceFormat";
    }(e || (_exports.FeatureKeys = e = {}));
    const t = {
        ServiceWorkerTraces: "true",
        EnableOTLV2TraceFormat: "true"
    };
    const r = function() {
            if ("undefined" != typeof window) return window;
            if ("undefined" != typeof global) return global;
            if ("undefined" != typeof globalThis) return globalThis;
            if ("undefined" != typeof self) return self;
            throw new Error("unable to locate global object");
        }().sessionStorage,
        o = [];
    class n {
        static readValue(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : r;
            var o;
            return null !== (o = null == t ? void 0 : t.getItem(this.getFeatureKey(e))) && void 0 !== o ? o : void 0;
        }
        static isEnabled(e) {
            let {
                featuresStorage: n = r,
                features: a = o,
                defaultValues: i = t
            } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var l;
            const s = i[e],
                u = null !== (l = this.readValue(e, n)) && void 0 !== l ? l : s,
                c = "true" === (null == u ? void 0 : u.toLowerCase()),
                d = c !== ("true" === (null == s ? void 0 : s.toLowerCase()));
            return d && !a.includes(e) ? (console.warn(`FeaturesManager: Experimental flag "${e}" is overridden with value "${u}"`), a.push(e)) : !d && a.includes(e) && a.splice(a.indexOf(e), 1), c;
        }
    }
    _exports.FeaturesManager = n;
    n.getFeatureKey = e => `ft-${e}`;
    const a = _exports.Version = "1.0.0";
});