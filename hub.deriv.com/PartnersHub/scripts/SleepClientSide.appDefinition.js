define("SleepClientSide.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        applicationKey: "3d61746a-11af-4a48-8f6c-ad4a5143a923",
        applicationName: "Sleep Client Side",
        userProviderName: "Users",
        debugEnabled: false,
        debugUseWebSockets: true,
        homeModuleName: "SleepClientSide",
        homeModuleKey: "3d61746a-11af-4a48-8f6c-ad4a5143a923",
        homeModuleControllerName: "SleepClientSide.controller",
        homeModuleLanguageResourcesName: "SleepClientSide.languageResources",
        defaultScreenName: "",
        defaultTransition: "SlideFromRight",
        errorPageConfig: {
            showExceptionStack: false
        },
        isWeb: true,
        buildServiceVersion: "v17.1668.2.0",
        clientRuntimeVersion: "6.16.1",
        useESM: false,
        appVersion: "1"
    };
});