define("tradershub.MainFlow.controller", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "BrowserConsoleLogging.controller", "tradershub.Common.controller", "tradershub.clientVariables", "BrowserConsoleLogging.controller$ConsoleLog", "tradershub.referencesHealth", "tradershub.referencesHealth$BrowserConsoleLogging"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, BrowserConsoleLoggingController, tradershub_CommonController, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    var tradershub_MainFlowController = exports;
    class Controller extends
    OS.Controller.BaseController {
        getDefaultTimeout() {
            return tradershubController.default.defaultTimeout;
        }

        get handleError() {
            if (!(this.hasOwnProperty("_handleError"))) {
                this._handleError = function(ex, callContext) {
                    var controller = this.controller;
                    return OS.Logger.startActiveSpan("OnException", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "OnException");
                            span.setAttribute("outsystems.function.key", "b3496b7d-e59e-4a23-824e-5c24703a310c.#FlowExceptionHandler");
                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                            span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                        }

                        try {
                            var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                            try {
                                OS.Logger.debug("MainFlow.OnException", OS.Exceptions.getMessage(ex));
                                // Handle Error: CommunicationException
                                if (OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
                                    OS.Logger.error(null, ex, null, null, 1);
                                    communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                                    return OS.Logger.startActiveSpan("CommunicationException", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "CommunicationException");
                                            span.setAttribute("outsystems.function.key", "be69fff7-4715-4621-ab0b-9d02cb2d371e");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                                        }

                                        try { // Execute Action: ConsoleLog
                                            BrowserConsoleLoggingController.default.consoleLog$Action(communicationExceptionVar.value.exceptionMessageAttr, 0, callContext);
                                            return;

                                        } finally {
                                            if (span) {
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
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1);


                };
            }

            return this._handleError;
        }
        set handleError(value) {
            this._handleError = value;
        }

    }



    tradershub_MainFlowController.default = new Controller();
});