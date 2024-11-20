try {
    require(["tslib"], function(tslib) {
        require(["@outsystems/runtime-core-js", "DerivWebsocketClient.appDefinition"], function(OSRuntimeCore, DerivWebsocketClientAppDefinition) {
            var OS = OSRuntimeCore;
            OS.ErrorScreen.initializeErrorPage(DerivWebsocketClientAppDefinition, OS.Application.default);
        });
    });
} catch (ex) {
    console.error(ex);
}