try {
    require(["tslib"], function(tslib) {
        require(["@outsystems/runtime-core-js", "TestIMAPIOfficial.appDefinition"], function(OSRuntimeCore, TestIMAPIOfficialAppDefinition) {
            var OS = OSRuntimeCore;
            OS.ErrorScreen.initializeErrorPage(TestIMAPIOfficialAppDefinition, OS.Application.default);
        });
    });
} catch (ex) {
    console.error(ex);
}