define("CKEditor5.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        applicationKey: "7420e1a7-3bd0-4404-a272-0fa858992a2b",
        applicationName: "CKEditor 5",
        userProviderName: "Users",
        debugEnabled: false,
        debugUseWebSockets: true,
        homeModuleName: "CKEditor5",
        homeModuleKey: "7420e1a7-3bd0-4404-a272-0fa858992a2b",
        homeModuleControllerName: "CKEditor5.controller",
        homeModuleLanguageResourcesName: "CKEditor5.languageResources",
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
        appVersion: "1"
    };
});