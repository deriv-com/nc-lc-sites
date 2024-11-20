try {
    require(["tslib"], function(tslib) {
        require(["@outsystems/runtime-core-js", "CustomComponentsOfficial.appDefinition"], function(OSRuntimeCore, CustomComponentsOfficialAppDefinition) {
            var OS = OSRuntimeCore;
            OS.ErrorScreen.initializeErrorPage(CustomComponentsOfficialAppDefinition, OS.Application.default);
        });
    });
} catch (ex) {
    console.error(ex);
}