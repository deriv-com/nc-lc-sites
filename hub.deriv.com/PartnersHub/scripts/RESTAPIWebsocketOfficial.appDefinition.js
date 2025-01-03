define("RESTAPIWebsocketOfficial.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        applicationKey: "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017",
        applicationName: "REST API Websocket Official",
        userProviderName: "Users",
        debugEnabled: false,
        debugUseWebSockets: true,
        homeModuleName: "RESTAPIWebsocketOfficial",
        homeModuleKey: "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017",
        homeModuleControllerName: "RESTAPIWebsocketOfficial.controller",
        homeModuleLanguageResourcesName: "RESTAPIWebsocketOfficial.languageResources",
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
        appVersion: "405"
    };
});