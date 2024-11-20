define("ReleaseSlackIntegrationOfficial.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        applicationKey: "a2d61d89-2946-438d-b8c1-955f6fecdf83",
        applicationName: "ReleaseSlackIntegration Official",
        userProviderName: "Users",
        debugEnabled: false,
        debugUseWebSockets: true,
        homeModuleName: "ReleaseSlackIntegrationOfficial",
        homeModuleKey: "a2d61d89-2946-438d-b8c1-955f6fecdf83",
        homeModuleControllerName: "ReleaseSlackIntegrationOfficial.controller",
        homeModuleLanguageResourcesName: "ReleaseSlackIntegrationOfficial.languageResources",
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
        appVersion: "8"
    };
});