define("tradershub.MainFlowBlocks.controller", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.Common.controller", "tradershub.clientVariables", "tradershub.MainFlowBlocks.controller$translationsResources"], function (exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_CommonController, tradershubClientVariables, tradershub_MainFlowBlocks_Controller_translationsResources) {
var OS = OSRuntimeCore;
var tradershub_MainFlowBlocksController = exports;
class Controller extends 
OS.Controller.BaseController {
getDefaultTimeout() {
return tradershubController.default.defaultTimeout;
}

get handleError() {if(!(this.hasOwnProperty("_handleError"))) {
this._handleError = function (ex, callContext) {
var controller = this.controller;
OS.Logger.debug("MainFlowBlocks", OS.Exceptions.getMessage(ex));
var globalExceptionHandle = OS.Injector.resolve(OS.ServiceNames.GlobalExceptionHandler);
globalExceptionHandle(ex, callContext);
return OS.ErrorHandling.UNHANDLED_ERROR_RESULT;


};
}

return this._handleError;
}set handleError(value) {this._handleError = value;
}

}



tradershub_MainFlowBlocksController.default = new Controller(tradershub_MainFlowBlocks_Controller_translationsResources);
});


define("tradershub.MainFlowBlocks.controller$translationsResources", ["exports"], function (exports) {
return {};
});

