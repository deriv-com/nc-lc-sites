define("tradershub.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        applicationKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
        applicationName: "tradershub",
        userProviderName: "Users",
        debugEnabled: false,
        debugUseWebSockets: true,
        homeModuleName: "tradershub",
        homeModuleKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
        homeModuleControllerName: "tradershub.controller",
        homeModuleLanguageResourcesName: "tradershub.languageResources",
        defaultScreenName: "signup",
        defaultTransition: "None",
        errorPageConfig: {
            showExceptionStack: false
        },
        isWeb: true,
        frontendBuildWorkerVersion: "v18.37.1",
        buildSDKVersion: "v18.0.6.0",
        clientRuntimeVersion: "6.16.6",
        useESM: false,
        appVersion: "9713"
    };
});