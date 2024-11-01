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
        buildServiceVersion: "v17.1668.2.0",
        clientRuntimeVersion: "6.16.1",
        useESM: false,
        appVersion: "4"
    };
});