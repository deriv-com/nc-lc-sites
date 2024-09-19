define("CustomComponents.ButtonVariants.controller", ["exports", "@outsystems/runtime-core-js", "CustomComponents.model", "CustomComponents.controller"], function(exports, OSRuntimeCore, CustomComponentsModel, CustomComponentsController) {
    var OS = OSRuntimeCore;
    var CustomComponents_ButtonVariantsController = exports;
    class Controller extends
    OS.Controller.BaseController {
        getDefaultTimeout() {
            return CustomComponentsController.default.defaultTimeout;
        }

        get handleError() {
            if (!(this.hasOwnProperty("_handleError"))) {
                this._handleError = function(ex, callContext) {
                    var controller = this.controller;
                    OS.Logger.debug("ButtonVariants", OS.Exceptions.getMessage(ex));
                    var globalExceptionHandle = OS.Injector.resolve(OS.ServiceNames.GlobalExceptionHandler);
                    globalExceptionHandle(ex, callContext);
                    return OS.ErrorHandling.UNHANDLED_ERROR_RESULT;


                };
            }

            return this._handleError;
        }
        set handleError(value) {
            this._handleError = value;
        }

    }



    CustomComponents_ButtonVariantsController.default = new Controller();
});