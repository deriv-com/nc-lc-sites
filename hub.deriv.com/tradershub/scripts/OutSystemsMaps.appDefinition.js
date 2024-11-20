define("OutSystemsMaps.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        applicationKey: "95bb31d1-f079-4fd6-ab2e-5c8326855aaa",
        applicationName: "OutSystems Maps",
        userProviderName: "Users",
        debugEnabled: false,
        debugUseWebSockets: true,
        homeModuleName: "OutSystemsMaps",
        homeModuleKey: "95bb31d1-f079-4fd6-ab2e-5c8326855aaa",
        homeModuleControllerName: "OutSystemsMaps.controller",
        homeModuleLanguageResourcesName: "OutSystemsMaps.languageResources",
        defaultScreenName: "",
        defaultTransition: "Fade",
        errorPageConfig: {
            showExceptionStack: false
        },
        isWeb: true,
        frontendBuildWorkerVersion: "v18.37.1",
        buildSDKVersion: "v18.0.6.0",
        clientRuntimeVersion: "6.16.6",
        useESM: false,
        appVersion: "2"
    };
});