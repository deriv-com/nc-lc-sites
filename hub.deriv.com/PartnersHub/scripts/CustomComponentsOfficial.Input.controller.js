﻿define("CustomComponentsOfficial.Input.controller", ["exports", "@outsystems/runtime-core-js", "CustomComponentsOfficial.model", "CustomComponentsOfficial.controller"], function (exports, OSRuntimeCore, CustomComponentsOfficialModel, CustomComponentsOfficialController) {
var OS = OSRuntimeCore;
var CustomComponentsOfficial_InputController = exports;
class Controller extends 
OS.Controller.BaseController {
getDefaultTimeout() {
return CustomComponentsOfficialController.default.defaultTimeout;
}

get handleError() {if(!(this.hasOwnProperty("_handleError"))) {
this._handleError = function (ex, callContext) {
var controller = this.controller;
OS.Logger.debug("Input", OS.Exceptions.getMessage(ex));
var globalExceptionHandle = OS.Injector.resolve(OS.ServiceNames.GlobalExceptionHandler);
globalExceptionHandle(ex, callContext);
return OS.ErrorHandling.UNHANDLED_ERROR_RESULT;


};
}

return this._handleError;
}set handleError(value) {this._handleError = value;
}

}



CustomComponentsOfficial_InputController.default = new Controller();
});


