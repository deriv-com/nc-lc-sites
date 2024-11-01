define("CustomComponentsOfficial.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        applicationKey: "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69",
        applicationName: "Custom Components Official",
        userProviderName: "Users",
        debugEnabled: false,
        debugUseWebSockets: true,
        homeModuleName: "CustomComponentsOfficial",
        homeModuleKey: "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69",
        homeModuleControllerName: "CustomComponentsOfficial.controller",
        homeModuleLanguageResourcesName: "CustomComponentsOfficial.languageResources",
        defaultScreenName: "",
        defaultTransition: "SlideFromRight",
        errorPageConfig: {
            showExceptionStack: false
        },
        isWeb: true,
        buildServiceVersion: "v17.1668.2.0",
        clientRuntimeVersion: "6.16.1",
        useESM: false,
        appVersion: "142"
    };
});