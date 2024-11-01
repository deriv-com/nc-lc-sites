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
        buildServiceVersion: "v17.1668.2.0",
        clientRuntimeVersion: "6.16.1",
        useESM: false,
        appVersion: "6480"
    };
});