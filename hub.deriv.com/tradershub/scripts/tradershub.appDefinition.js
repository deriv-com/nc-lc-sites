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
        frontendBuildWorkerVersion: "vv18.35.0",
        buildSDKVersion: "v17.1688.1.0",
        clientRuntimeVersion: "6.16.5",
        useESM: false,
        appVersion: "8476"
    };
});