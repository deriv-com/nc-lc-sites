require(["tslib"], function (tslib) {
require(["@outsystems/runtime-core-js", "tradershub.appDefinition", "@outsystems/runtime-core-js/debugger"], function (OSRuntimeCore, tradershubAppDefinition, NullDebugger) {
var OS = OSRuntimeCore;
if(OS.Navigation.ensureRequestSecurity()) {
return;
}

Promise.all([OS.Application.default.initialize(tradershubAppDefinition, OS.Interfaces.Application.InitializationType.Full, new OS.Format.DateTimeFormatInfo("yyyy-MM-dd", "HH:mm:ss"), new OS.Format.NumberFormatInfo(".", ""), function () {
return Promise.all(["scripts/tradershub.FeatureFlags.js", "scripts/tradershub.DerivUTM.js", "scripts/tradershub.ReconnectingWebsocket.js", "scripts/tradershub.DerivAPIBasic.js", "scripts/tradershub.CachingScript.js", "scripts/tradershub.DerivAnalytics.js"].map(function (script) {
return OS.SystemActions.requireScript(script);
}));
}).then(function (success) {
if(success) {
function initGlobalExceptionHandler() {
return new Promise(function (resolve) {
require(["tradershub.Common.controller"], function (exceptionModule) {
OS.Application.default.registerDefaultErrorHandler(function () {
return function (error, callContext) {
return exceptionModule.default.handleError(error, callContext);
};
});
resolve();
});
});
}
function initView() {
return OS.Flow.promise(function (resolve, reject) {
require(["@outsystems/runtime-view-js"], function (OSView) {
try {OSView.Router.load(OS.Application.default);
resolve();
} catch (error) {
reject(error);
}

});
});
}
return initGlobalExceptionHandler().then(initView);
}

})]).catch(function (error) {
OS.ErrorHandling.handleError(error);
});
});
});
