try {
    require(["tslib"], function(tslib) {
        require(["@outsystems/runtime-core-js", "CloneAWSSignatureVersion4.appDefinition"], function(OSRuntimeCore, CloneAWSSignatureVersion4AppDefinition) {
            var OS = OSRuntimeCore;
            OS.ErrorScreen.initializeErrorPage(CloneAWSSignatureVersion4AppDefinition, OS.Application.default);
        });
    });
} catch (ex) {
    console.error(ex);
}