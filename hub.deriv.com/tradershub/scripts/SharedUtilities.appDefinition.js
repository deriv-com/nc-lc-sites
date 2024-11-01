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
        frontendBuildWorkerVersion: "vv18.35.0",
        buildSDKVersion: "v17.1688.1.0",
        clientRuntimeVersion: "6.16.5",
        useESM: false,
        appVersion: "24"
    };
});