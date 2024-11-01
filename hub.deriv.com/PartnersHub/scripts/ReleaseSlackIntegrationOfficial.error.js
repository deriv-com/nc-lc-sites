try {
    require(["tslib"], function(tslib) {
        require(["@outsystems/runtime-core-js", "ReleaseSlackIntegrationOfficial.appDefinition"], function(OSRuntimeCore, ReleaseSlackIntegrationOfficialAppDefinition) {
            var OS = OSRuntimeCore;
            OS.ErrorScreen.initializeErrorPage(ReleaseSlackIntegrationOfficialAppDefinition, OS.Application.default);
        });
    });
} catch (ex) {
    console.error(ex);
}