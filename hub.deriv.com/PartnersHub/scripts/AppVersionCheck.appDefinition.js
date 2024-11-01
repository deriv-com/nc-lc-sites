define("AppVersionCheck.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        applicationKey: "36906aa4-e5d6-405a-90a9-2bfa6f35ea1b",
        applicationName: "AppVersionCheck",
        userProviderName: "Users",
        debugEnabled: false,
        debugUseWebSockets: true,
        homeModuleName: "AppVersionCheck",
        homeModuleKey: "36906aa4-e5d6-405a-90a9-2bfa6f35ea1b",
        homeModuleControllerName: "AppVersionCheck.controller",
        homeModuleLanguageResourcesName: "AppVersionCheck.languageResources",
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