define("YupValidationsOfficial.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        applicationKey: "e0162685-1b92-40fe-8f15-36b54a7b8361",
        applicationName: "Yup Validations Official",
        userProviderName: "Users",
        debugEnabled: false,
        debugUseWebSockets: true,
        homeModuleName: "YupValidationsOfficial",
        homeModuleKey: "e0162685-1b92-40fe-8f15-36b54a7b8361",
        homeModuleControllerName: "YupValidationsOfficial.controller",
        homeModuleLanguageResourcesName: "YupValidationsOfficial.languageResources",
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
        appVersion: "15"
    };
});