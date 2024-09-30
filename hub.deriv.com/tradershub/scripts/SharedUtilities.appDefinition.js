define("SharedUtilities.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        environmentKey: "DUMMY_KEY",
        environmentName: "DUMMY_NAME",
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
        personalArea: null,
        showWatermark: false,
        buildServiceVersion: "v17.1637.0.0",
        clientRuntimeVersion: "6.13.2",
        useESM: false,
        appVersion: "22"
    };
});