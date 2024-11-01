define("TimezoneUtils.model", ["exports", "@outsystems/runtime-core-js"], function(exports, OSRuntimeCore) {
    var OS = OSRuntimeCore;
    var TimezoneUtilsModel = exports;
    Object.defineProperty(TimezoneUtilsModel, "module", {
        get: function() {
            return OS.ApplicationInfo.getModules()["a7d4bd5d-980d-4938-8921-5b4da6a74293"];
        }
    });

    TimezoneUtilsModel.staticEntities = {};
});