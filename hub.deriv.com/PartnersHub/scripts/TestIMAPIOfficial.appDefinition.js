define("TestIMAPIOfficial.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        applicationKey: "d057c5c0-3714-4dc5-bf74-99334c71bf1f",
        applicationName: "TestIM API Official",
        userProviderName: "Users",
        debugEnabled: false,
        debugUseWebSockets: true,
        homeModuleName: "TestIMAPIOfficial",
        homeModuleKey: "d057c5c0-3714-4dc5-bf74-99334c71bf1f",
        homeModuleControllerName: "TestIMAPIOfficial.controller",
        homeModuleLanguageResourcesName: "TestIMAPIOfficial.languageResources",
        defaultScreenName: "",
        defaultTransition: "SlideFromRight",
        errorPageConfig: {
            showExceptionStack: false
        },
        isWeb: true,
        buildServiceVersion: "v17.1668.2.0",
        clientRuntimeVersion: "6.16.1",
        useESM: false,
        appVersion: "2"
    };
});