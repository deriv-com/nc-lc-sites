define("CommonPlugin.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        applicationKey: "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472",
        applicationName: "Common Plugin",
        userProviderName: "Users",
        debugEnabled: false,
        debugUseWebSockets: true,
        homeModuleName: "CommonPlugin",
        homeModuleKey: "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472",
        homeModuleControllerName: "CommonPlugin.controller",
        homeModuleLanguageResourcesName: "CommonPlugin.languageResources",
        defaultScreenName: "",
        defaultTransition: "SlideFromRight",
        errorPageConfig: {
            showExceptionStack: false
        },
        isWeb: true,
        frontendBuildWorkerVersion: "vv18.35.0",
        buildSDKVersion: "v17.1688.1.0",
        clientRuntimeVersion: "6.16.5",
        useESM: false,
        appVersion: "3"
    };
});