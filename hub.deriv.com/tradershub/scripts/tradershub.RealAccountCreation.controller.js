define("tradershub.RealAccountCreation.controller", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.Common.controller", "tradershub.clientVariables", "tradershub.RealAccountCreation.controller.OnException.ReloadWindowJS", "tradershub.RealAccountCreation.controller$translationsResources"], function (exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_CommonController, tradershubClientVariables, tradershub_RealAccountCreation_controller_OnException_ReloadWindowJS, tradershub_RealAccountCreation_Controller_translationsResources) {
var OS = OSRuntimeCore;
var tradershub_RealAccountCreationController = exports;
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
span.setAttribute("outsystems.function.key", "d95c2a12-d861-41fd-95f7-d2d139a2cef3.#FlowExceptionHandler");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
}

try {var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
try {OS.Logger.debug("RealAccountCreation.OnException", OS.Exceptions.getMessage(ex));
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex, null, null, 1);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Logger.startActiveSpan("CommunicationException", function (span) {
if(span) {
span.setAttribute("code.function", "CommunicationException");
span.setAttribute("outsystems.function.key", "929b1aa9-7083-4ade-83e0-b06300a0835e");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
}

try {OS.Logger.startActiveSpan("ReloadWindow", function (span) {
if(span) {
span.setAttribute("code.function", "ReloadWindow");
span.setAttribute("outsystems.function.key", "7e4e5db9-27d3-4bfe-a2b3-1280925fab72");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_RealAccountCreation_controller_OnException_ReloadWindowJS, "ReloadWindow", "OnException", null, function ($parameters) {
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



tradershub_RealAccountCreationController.default = new Controller(tradershub_RealAccountCreation_Controller_translationsResources);
});

define("tradershub.RealAccountCreation.controller.OnException.ReloadWindowJS", [], function () {
return function ($actions, $roles, $public) {
window.location.reload()
};
});


define("tradershub.RealAccountCreation.controller$translationsResources", ["exports"], function (exports) {
return {};
});

