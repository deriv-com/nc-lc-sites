define("SharedUtilities.model", ["exports", "@outsystems/runtime-core-js"], function(exports, OSRuntimeCore) {
    var OS = OSRuntimeCore;
    var SharedUtilitiesModel = exports;
    Object.defineProperty(SharedUtilitiesModel, "module", {
        get: function() {
            return OS.ApplicationInfo.getModules()["7c6899bc-58cf-4ca1-ae7a-761245ed915a"];
        }
    });

    SharedUtilitiesModel.staticEntities = {};
});