const hostname = window.location.hostname;
const isProductionHub = ["home.deriv.com", "home.deriv.me", "home.deriv.be"].includes(hostname);

if (isProductionHub && window._getFeatureFlagValueByName && !window._getFeatureFlagValueByName("ENABLE_CONSOLE_LOGS")) {
    if (window.console?.log) {
        window.console.log = function() {};
    }

    if (window.TrackJS?.console?.log) {
        window.TrackJS.console.log = function() {};
    }
}