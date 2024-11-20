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
        frontendBuildWorkerVersion: "v18.40.0",
        buildSDKVersion: "v18.0.11.0",
        clientRuntimeVersion: "6.16.7",
        useESM: false,
        appVersion: "2"
    };
});