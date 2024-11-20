try {
    require(["tslib"], function(tslib) {
        require(["@outsystems/runtime-core-js", "CKEditor5.appDefinition"], function(OSRuntimeCore, CKEditor5AppDefinition) {
            var OS = OSRuntimeCore;
            OS.ErrorScreen.initializeErrorPage(CKEditor5AppDefinition, OS.Application.default);
        });
    });
} catch (ex) {
    console.error(ex);
}