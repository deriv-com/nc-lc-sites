define("TestOption.controller$DerivApiSendMessage", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.controller", "TestOption.controller$DerivApiSendMessage.SendApiCallJS"], function(exports, OSRuntimeCore, TestOptionModel, TestOptionController, TestOption_controller_DerivApiSendMessage_SendApiCallJS) {
    var OS = OSRuntimeCore;
    TestOptionController.default.derivApiSendMessage$Action = function(payloadIn, endpointIn, authorizeIn, tokenIn, callContext) {
        return OS.Logger.startActiveSpan("DerivApiSendMessage", function(span) {
            if (span) {
                span.setAttribute("code.function", "DerivApiSendMessage");
                span.setAttribute("outsystems.function.key", "77379cd5-0f99-4ed7-85ff-15d803cb25fb");
                span.setAttribute("outsystems.function.owner.name", "TestOption");
                span.setAttribute("outsystems.function.owner.key", "95c8cd0d-e615-4470-a689-ff1a80162972");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("TestOption.DerivApiSendMessage$vars"))());
                vars.value.payloadInLocal = payloadIn;
                vars.value.endpointInLocal = endpointIn;
                vars.value.authorizeInLocal = authorizeIn;
                vars.value.tokenInLocal = tokenIn;
                var sendApiCallJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("TestOption.DerivApiSendMessage$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    return OS.Logger.startActiveSpan("SendApiCall", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "SendApiCall");
                            span.setAttribute("outsystems.function.key", "90ecd330-0909-4719-b7cb-aaef19cd22c5");
                            span.setAttribute("outsystems.function.owner.name", "TestOption");
                            span.setAttribute("outsystems.function.owner.key", "95c8cd0d-e615-4470-a689-ff1a80162972");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteAsyncJSNode(TestOption_controller_DerivApiSendMessage_SendApiCallJS, "SendApiCall", "DerivApiSendMessage", {
                                Endpoint: OS.DataConversion.JSNodeParamConverter.to(vars.value.endpointInLocal, OS.DataTypes.DataTypes.Text),
                                Authorize: OS.DataConversion.JSNodeParamConverter.to(vars.value.authorizeInLocal, OS.DataTypes.DataTypes.Boolean),
                                Token: OS.DataConversion.JSNodeParamConverter.to(vars.value.tokenInLocal, OS.DataTypes.DataTypes.Text),
                                payload: OS.DataConversion.JSNodeParamConverter.to(vars.value.payloadInLocal, OS.DataTypes.DataTypes.Text),
                                response: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                IsError: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
                                ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("TestOption.DerivApiSendMessage$sendApiCallJSResult"))();
                                jsNodeResult.responseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.response, OS.DataTypes.DataTypes.Text);
                                jsNodeResult.isErrorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsError, OS.DataTypes.DataTypes.Boolean);
                                jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
                                jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
                                return jsNodeResult;
                            }, {}, {});
                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1).then(function(results) {
                        sendApiCallJSResult.value = results;
                    }).then(function() {
                        // Response = SendApiCall.response
                        outVars.value.responseOut = sendApiCallJSResult.value.responseOut;
                        // ErrorMessage = SendApiCall.ErrorMessage
                        outVars.value.errorMessageOut = sendApiCallJSResult.value.errorMessageOut;
                        // ErrorCode = SendApiCall.ErrorCode
                        outVars.value.errorCodeOut = sendApiCallJSResult.value.errorCodeOut;
                        // IsError = SendApiCall.IsError
                        outVars.value.isErrorOut = sendApiCallJSResult.value.isErrorOut;
                    });
                }).then(function() {
                    return outVars.value;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 1);
    };
    var controller = TestOptionController.default;
    TestOptionController.default.constructor.registerVariableGroupType("TestOption.DerivApiSendMessage$vars", [{
        name: "Payload",
        attrName: "payloadInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Endpoint",
        attrName: "endpointInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Authorize",
        attrName: "authorizeInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }, {
        name: "Token",
        attrName: "tokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    TestOptionController.default.constructor.registerVariableGroupType("TestOption.DerivApiSendMessage$sendApiCallJSResult", [{
        name: "response",
        attrName: "responseOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "IsError",
        attrName: "isErrorOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }, {
        name: "ErrorMessage",
        attrName: "errorMessageOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "ErrorCode",
        attrName: "errorCodeOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    TestOptionController.default.constructor.registerVariableGroupType("TestOption.DerivApiSendMessage$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "IsError",
        attrName: "isErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }, {
        name: "ErrorMessage",
        attrName: "errorMessageOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "ErrorCode",
        attrName: "errorCodeOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    TestOptionController.default.clientActionProxies.derivApiSendMessage$Action = function(payloadIn, endpointIn, authorizeIn, tokenIn) {
        payloadIn = (payloadIn === undefined) ? "" : payloadIn;
        endpointIn = (endpointIn === undefined) ? "" : endpointIn;
        authorizeIn = (authorizeIn === undefined) ? false : authorizeIn;
        tokenIn = (tokenIn === undefined) ? "" : tokenIn;
        return controller.executeActionInsideJSNode(TestOptionController.default.derivApiSendMessage$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(payloadIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(endpointIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authorizeIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(tokenIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: OS.DataConversion.JSNodeParamConverter.to(actionResults.responseOut, OS.DataTypes.DataTypes.Text),
                IsError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isErrorOut, OS.DataTypes.DataTypes.Boolean),
                ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text),
                ErrorCode: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorCodeOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("TestOption.controller$DerivApiSendMessage.SendApiCallJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        return new Promise(function($resolve, $reject) {
            let request = {};

            if ($parameters.Endpoint) {
                request[$parameters.Endpoint] = 1;
            }

            if ($parameters.payload) {
                Object.assign(request, JSON.parse($parameters.payload))
            }

            function sendRequest() {
                DerivAPI.send(request).then(response => {
                    $parameters.response = JSON.stringify(response);
                    $parameters.IsError = false;
                    $resolve();
                }).catch(error => {
                    $parameters.IsError = true;
                    $parameters.response = JSON.stringify(error?.error);

                    $parameters.ErrorMessage = error?.error?.message || "";
                    $parameters.ErrorCode = error?.error?.code || "";
                    $resolve();
                });
            }

            if (DerivAPI) {
                if ($parameters.Authorize && $parameters.Token) {
                    DerivAPI.send({
                        authorize: $parameters.Token
                    }).then(() => sendRequest())
                } else {
                    sendRequest();
                }

            }


        });
    };
});


define("TestOption.controller", ["exports", "@outsystems/runtime-core-js", "TestOption.model"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    var TestOptionController = exports;
    class Controller extends
    OS.Controller.BaseModuleController {
        constructor(model, messagesProvider, idService, translationResources) {
            super(model, messagesProvider, idService, translationResources);
        }

        get clientActionProxies() {
            if (!(this.hasOwnProperty("_clientActionProxies"))) {
                this._clientActionProxies = {};
            }

            return this._clientActionProxies;
        }
        set clientActionProxies(value) {
            this._clientActionProxies = value;
        }


        get roles() {
            if (!(this.hasOwnProperty("_roles"))) {
                this._roles = {};
            }

            return this._roles;
        }
        set roles(value) {
            this._roles = value;
        }

        get defaultTimeout() {
            if (!(this.hasOwnProperty("_defaultTimeout"))) {
                this._defaultTimeout = 10;
            }

            return this._defaultTimeout;
        }
        set defaultTimeout(value) {
            this._defaultTimeout = value;
        }

        getDefaultTimeout() {
            return TestOptionController.default.defaultTimeout;
        }

    }

    TestOptionController.default = new Controller();
});