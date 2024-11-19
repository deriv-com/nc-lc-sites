define("AppVersionCheck.appDefinition", ["@outsystems/runtime-core-js"], function (OSRuntimeCore) {
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
frontendBuildWorkerVersion: "v18.40.0",
buildSDKVersion: "v18.0.11.0",
clientRuntimeVersion: "6.16.7",
useESM: false,
appVersion: "1"
};
});

