define("TestOption.option.controller", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.controller"], function(exports, OSRuntimeCore, TestOptionModel, TestOptionController) {
    var OS = OSRuntimeCore;
    var TestOption_optionController = exports;
    class Controller extends
    OS.Controller.BaseController {
        getDefaultTimeout() {
            return TestOptionController.default.defaultTimeout;
        }

        get handleError() {
            if (!(this.hasOwnProperty("_handleError"))) {
                this._handleError = function(ex, callContext) {
                    var controller = this.controller;
                    OS.Logger.debug("option", OS.Exceptions.getMessage(ex));
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



    TestOption_optionController.default = new Controller();
});