define("System_.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        applicationKey: "478870b9-2d60-4f73-9eb3-7cd8b994a737",
        applicationName: "(System)",
        userProviderName: "System_",
        debugEnabled: false,
        debugUseWebSockets: true,
        homeModuleName: "System_",
        homeModuleKey: "478870b9-2d60-4f73-9eb3-7cd8b994a737",
        homeModuleControllerName: "System_.controller",
        homeModuleLanguageResourcesName: "System_.languageResources",
        defaultScreenName: "",
        defaultTransition: "None",
        errorPageConfig: {
            showExceptionStack: false
        },
        isWeb: true,
        frontendBuildWorkerVersion: "v18.40.0",
        buildSDKVersion: "v18.0.11.0",
        clientRuntimeVersion: "6.16.7",
        useESM: false,
        appVersion: "6"
    };
});