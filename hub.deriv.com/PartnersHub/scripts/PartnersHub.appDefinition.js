define("PartnersHub.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        applicationKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
        applicationName: "Partners Hub",
        userProviderName: "Users",
        debugEnabled: false,
        debugUseWebSockets: true,
        homeModuleName: "PartnersHub",
        homeModuleKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
        homeModuleControllerName: "PartnersHub.controller",
        homeModuleLanguageResourcesName: "PartnersHub.languageResources",
        defaultScreenName: "PartnersHubDashboard",
        defaultTransition: "Fade",
        errorPageConfig: {
            showExceptionStack: false
        },
        isWeb: true,
        frontendBuildWorkerVersion: "v18.40.0",
        buildSDKVersion: "v18.0.11.0",
        clientRuntimeVersion: "6.16.7",
        useESM: false,
        appVersion: "7192"
    };
});