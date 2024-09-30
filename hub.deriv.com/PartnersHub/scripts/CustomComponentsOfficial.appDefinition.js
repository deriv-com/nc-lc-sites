define("CustomComponentsOfficial.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        environmentKey: "DUMMY_KEY",
        environmentName: "DUMMY_NAME",
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
        personalArea: null,
        showWatermark: false,
        buildServiceVersion: "v17.1626.0.0",
        clientRuntimeVersion: "6.12.1",
        useESM: false,
        appVersion: "142"
    };
});