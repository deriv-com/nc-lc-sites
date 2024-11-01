define("BrowserConsoleLogging.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        applicationKey: "7f7c3cd2-279d-4fb8-b978-c1ee91ff0d4f",
        applicationName: "Browser Console Logging",
        userProviderName: "Users",
        debugEnabled: false,
        debugUseWebSockets: true,
        homeModuleName: "BrowserConsoleLogging",
        homeModuleKey: "7f7c3cd2-279d-4fb8-b978-c1ee91ff0d4f",
        homeModuleControllerName: "BrowserConsoleLogging.controller",
        homeModuleLanguageResourcesName: "BrowserConsoleLogging.languageResources",
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
        appVersion: "1"
    };
});