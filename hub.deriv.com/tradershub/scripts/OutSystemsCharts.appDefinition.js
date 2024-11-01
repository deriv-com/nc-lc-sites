define("OutSystemsCharts.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        applicationKey: "38b70e23-50fc-4710-80cf-3682a9dc998a",
        applicationName: "OutSystems Charts",
        userProviderName: "Users",
        debugEnabled: false,
        debugUseWebSockets: true,
        homeModuleName: "OutSystemsCharts",
        homeModuleKey: "38b70e23-50fc-4710-80cf-3682a9dc998a",
        homeModuleControllerName: "OutSystemsCharts.controller",
        homeModuleLanguageResourcesName: "OutSystemsCharts.languageResources",
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
        appVersion: "4"
    };
});