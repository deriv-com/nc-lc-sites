try {
    require(["tslib"], function(tslib) {
        require(["@outsystems/runtime-core-js", "TestOption.appDefinition"], function(OSRuntimeCore, TestOptionAppDefinition) {
            var OS = OSRuntimeCore;
            OS.ErrorScreen.initializeErrorPage(TestOptionAppDefinition, OS.Application.default);
        });
    });
} catch (ex) {
    console.error(ex);
}