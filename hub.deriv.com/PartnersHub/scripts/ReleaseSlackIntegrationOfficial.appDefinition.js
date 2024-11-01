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
        buildServiceVersion: "v17.1668.2.0",
        clientRuntimeVersion: "6.16.1",
        useESM: false,
        appVersion: "8"
    };
});