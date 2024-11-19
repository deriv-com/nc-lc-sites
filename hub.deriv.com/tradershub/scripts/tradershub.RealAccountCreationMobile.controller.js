define("tradershub.RealAccountCreationMobile.controller", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.Common.controller", "tradershub.clientVariables", "tradershub.RealAccountCreationMobile.controller.OnException.ReloadWindowJS", "tradershub.RealAccountCreationMobile.controller$translationsResources"], function (exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_CommonController, tradershubClientVariables, tradershub_RealAccountCreationMobile_controller_OnException_ReloadWindowJS, tradershub_RealAccountCreationMobile_Controller_translationsResources) {
var OS = OSRuntimeCore;
var tradershub_RealAccountCreationMobileController = exports;
class Controller extends 
OS.Controller.BaseController {
getDefaultTimeout() {
return tradershubController.default.defaultTimeout;
}

get handleError() {if(!(this.hasOwnProperty("_handleError"))) {
this._handleError = function (ex, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnException", function (span) {
if(span) {
span.setAttribute("code.function", "OnException");
span.setAttribute("outsystems.function.key", "b5b6ef3a-3588-4eee-a332-e490d5ffcd42.#FlowExceptionHandler");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
}

try {var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
try {OS.Logger.debug("RealAccountCreationMobile.OnException", OS.Exceptions.getMessage(ex));
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex, null, null, 1);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Logger.startActiveSpan("CommunicationException", function (span) {
if(span) {
span.setAttribute("code.function", "CommunicationException");
span.setAttribute("outsystems.function.key", "b93f01e3-b3ed-4b9f-a5a2-844fd24c5735");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
}

try {OS.Logger.startActiveSpan("ReloadWindow", function (span) {
if(span) {
span.setAttribute("code.function", "ReloadWindow");
span.setAttribute("outsystems.function.key", "51a64457-5636-4130-b3e5-8a6f3f5be3eb");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_RealAccountCreationMobile_controller_OnException_ReloadWindowJS, "ReloadWindow", "OnException", null, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
return ;

} finally {
if(span) {
span.end();
}

}

}, 1);
}

throw ex;
} catch (unhandledEx) {
var globalExceptionHandle = OS.Injector.resolve(OS.ServiceNames.GlobalExceptionHandler);
return globalExceptionHandle(unhandledEx, callContext);
}

} finally {
if(span) {
span.end();
}

}

}, 1);


};
}

return this._handleError;
}set handleError(value) {this._handleError = value;
}

}



tradershub_RealAccountCreationMobileController.default = new Controller(tradershub_RealAccountCreationMobile_Controller_translationsResources);
});

define("tradershub.RealAccountCreationMobile.controller.OnException.ReloadWindowJS", [], function () {
return function ($actions, $roles, $public) {
window.location.reload()
};
});


define("tradershub.RealAccountCreationMobile.controller$translationsResources", ["exports"], function (exports) {
return {};
});

