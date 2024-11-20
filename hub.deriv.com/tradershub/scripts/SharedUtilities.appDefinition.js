define("SharedUtilities.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        applicationKey: "7c6899bc-58cf-4ca1-ae7a-761245ed915a",
        applicationName: "SharedUtilities",
        userProviderName: "Users",
        debugEnabled: false,
        debugUseWebSockets: true,
        homeModuleName: "SharedUtilities",
        homeModuleKey: "7c6899bc-58cf-4ca1-ae7a-761245ed915a",
        homeModuleControllerName: "SharedUtilities.controller",
        homeModuleLanguageResourcesName: "SharedUtilities.languageResources",
        defaultScreenName: "",
        defaultTransition: "SlideFromRight",
        errorPageConfig: {
            showExceptionStack: false
        },
        isWeb: true,
        frontendBuildWorkerVersion: "v18.37.1",
        buildSDKVersion: "v18.0.6.0",
        clientRuntimeVersion: "6.16.6",
        useESM: false,
        appVersion: "24"
    };
});