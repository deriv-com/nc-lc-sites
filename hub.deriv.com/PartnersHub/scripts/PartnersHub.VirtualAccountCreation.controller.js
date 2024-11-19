﻿define("PartnersHub.VirtualAccountCreation.controller", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.Common.controller", "PartnersHub.clientVariables", "PartnersHub.VirtualAccountCreation.controller$translationsResources"], function (exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHub_CommonController, PartnersHubClientVariables, PartnersHub_VirtualAccountCreation_Controller_translationsResources) {
var OS = OSRuntimeCore;
var PartnersHub_VirtualAccountCreationController = exports;
class Controller extends 
OS.Controller.BaseController {
getDefaultTimeout() {
return PartnersHubController.default.defaultTimeout;
}

get handleError() {if(!(this.hasOwnProperty("_handleError"))) {
this._handleError = function (ex, callContext) {
var controller = this.controller;
OS.Logger.debug("VirtualAccountCreation", OS.Exceptions.getMessage(ex));
var globalExceptionHandle = OS.Injector.resolve(OS.ServiceNames.GlobalExceptionHandler);
globalExceptionHandle(ex, callContext);
return OS.ErrorHandling.UNHANDLED_ERROR_RESULT;


};
}

return this._handleError;
}set handleError(value) {this._handleError = value;
}

}



PartnersHub_VirtualAccountCreationController.default = new Controller(PartnersHub_VirtualAccountCreation_Controller_translationsResources);
});


define("PartnersHub.VirtualAccountCreation.controller$translationsResources", ["exports"], function (exports) {
return {};
});

