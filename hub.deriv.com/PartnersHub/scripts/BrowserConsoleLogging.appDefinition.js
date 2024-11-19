define("BrowserConsoleLogging.appDefinition", ["@outsystems/runtime-core-js"], function (OSRuntimeCore) {
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
frontendBuildWorkerVersion: "v18.40.0",
buildSDKVersion: "v18.0.11.0",
clientRuntimeVersion: "6.16.7",
useESM: false,
appVersion: "1"
};
});

