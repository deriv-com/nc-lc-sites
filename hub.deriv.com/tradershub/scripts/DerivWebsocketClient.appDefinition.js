define("DerivWebsocketClient.appDefinition", ["@outsystems/runtime-core-js"], function (OSRuntimeCore) {
var OS = OSRuntimeCore;
return {
applicationKey: "ccff153e-36bc-40c3-8607-ee97fafdba62",
applicationName: "Deriv Websocket Client",
userProviderName: "Users",
debugEnabled: false,
debugUseWebSockets: true,
homeModuleName: "DerivWebsocketClient",
homeModuleKey: "ccff153e-36bc-40c3-8607-ee97fafdba62",
homeModuleControllerName: "DerivWebsocketClient.controller",
homeModuleLanguageResourcesName: "DerivWebsocketClient.languageResources",
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
appVersion: "29"
};
});

