define("OutSystemsUI.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        applicationKey: "8be17f2a-431c-4958-b894-c77b988a7271",
        applicationName: "OutSystems UI",
        userProviderName: "Users",
        debugEnabled: false,
        debugUseWebSockets: true,
        homeModuleName: "OutSystemsUI",
        homeModuleKey: "8be17f2a-431c-4958-b894-c77b988a7271",
        homeModuleControllerName: "OutSystemsUI.controller",
        homeModuleLanguageResourcesName: "OutSystemsUI.languageResources",
        defaultScreenName: "",
        defaultTransition: "SlideFromRight",
        errorPageConfig: {
            showExceptionStack: false
        },
        isWeb: true,
        buildServiceVersion: "v17.1668.2.0",
        clientRuntimeVersion: "6.16.1",
        useESM: false,
        appVersion: "6"
    };
});