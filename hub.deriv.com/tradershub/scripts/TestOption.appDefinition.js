define("TestOption.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        environmentKey: "DUMMY_KEY",
        environmentName: "DUMMY_NAME",
        applicationKey: "95c8cd0d-e615-4470-a689-ff1a80162972",
        applicationName: "TestOption",
        userProviderName: "Users",
        debugEnabled: false,
        debugUseWebSockets: true,
        homeModuleName: "TestOption",
        homeModuleKey: "95c8cd0d-e615-4470-a689-ff1a80162972",
        homeModuleControllerName: "TestOption.controller",
        homeModuleLanguageResourcesName: "TestOption.languageResources",
        defaultScreenName: "",
        defaultTransition: "SlideFromRight",
        errorPageConfig: {
            showExceptionStack: false
        },
        isWeb: true,
        personalArea: null,
        showWatermark: false,
        buildServiceVersion: "v17.1637.0.0",
        clientRuntimeVersion: "6.13.2",
        useESM: false,
        appVersion: "5"
    };
});