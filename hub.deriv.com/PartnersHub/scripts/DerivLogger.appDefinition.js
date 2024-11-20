define("DerivLogger.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        applicationKey: "f82f9453-1490-4d2f-af92-09c673f6ed5c",
        applicationName: "DerivLogger",
        userProviderName: "Users",
        debugEnabled: false,
        debugUseWebSockets: true,
        homeModuleName: "DerivLogger",
        homeModuleKey: "f82f9453-1490-4d2f-af92-09c673f6ed5c",
        homeModuleControllerName: "DerivLogger.controller",
        homeModuleLanguageResourcesName: "DerivLogger.languageResources",
        defaultScreenName: "",
        defaultTransition: "SlideFromRight",
        errorPageConfig: {
            showExceptionStack: false
        },
        isWeb: true,
        frontendBuildWorkerVersion: "v18.40.0",
        buildSDKVersion: "v18.0.11.0",
        clientRuntimeVersion: "6.16.7",
        useESM: false,
        appVersion: "1"
    };
});