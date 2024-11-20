try {
    require(["tslib"], function(tslib) {
        require(["@outsystems/runtime-core-js", "SharedUtilities.appDefinition"], function(OSRuntimeCore, SharedUtilitiesAppDefinition) {
            var OS = OSRuntimeCore;
            OS.ErrorScreen.initializeErrorPage(SharedUtilitiesAppDefinition, OS.Application.default);
        });
    });
} catch (ex) {
    console.error(ex);
}