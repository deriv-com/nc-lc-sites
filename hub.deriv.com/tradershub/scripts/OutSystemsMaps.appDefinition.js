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
        frontendBuildWorkerVersion: "vv18.35.0",
        buildSDKVersion: "v17.1688.1.0",
        clientRuntimeVersion: "6.16.5",
        useESM: false,
        appVersion: "2"
    };
});