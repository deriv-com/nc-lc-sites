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
        frontendBuildWorkerVersion: "vv18.35.0",
        buildSDKVersion: "v17.1688.1.0",
        clientRuntimeVersion: "6.16.5",
        useESM: false,
        appVersion: "335"
    };
});