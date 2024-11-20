try {
    require(["tslib"], function(tslib) {
        require(["@outsystems/runtime-core-js", "TimezoneUtils.appDefinition"], function(OSRuntimeCore, TimezoneUtilsAppDefinition) {
            var OS = OSRuntimeCore;
            OS.ErrorScreen.initializeErrorPage(TimezoneUtilsAppDefinition, OS.Application.default);
        });
    });
} catch (ex) {
    console.error(ex);
}