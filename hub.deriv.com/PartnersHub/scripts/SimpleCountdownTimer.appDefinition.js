define("SimpleCountdownTimer.appDefinition", ["@outsystems/runtime-core-js"], function (OSRuntimeCore) {
var OS = OSRuntimeCore;
return {
applicationKey: "7c686586-be98-4be4-b619-24e0e0505e97",
applicationName: "Simple Countdown Timer",
userProviderName: "Users",
debugEnabled: false,
debugUseWebSockets: true,
homeModuleName: "SimpleCountdownTimer",
homeModuleKey: "7c686586-be98-4be4-b619-24e0e0505e97",
homeModuleControllerName: "SimpleCountdownTimer.controller",
homeModuleLanguageResourcesName: "SimpleCountdownTimer.languageResources",
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

