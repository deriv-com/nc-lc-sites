define("tradershub.controller$CleanupAfterRealSignup", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.clientVariables"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.cleanupAfterRealSignup$Action = function(callContext) {
        return OS.Logger.startActiveSpan("CleanupAfterRealSignup", function(span) {
            if (span) {
                span.setAttribute("code.function", "CleanupAfterRealSignup");
                span.setAttribute("outsystems.function.key", "b78f35fb-90c4-4f04-8cff-cd956979b3e7");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                // RealSignupTaxResidence = NullTextIdentifier
                tradershubClientVariables.setRealSignupTaxResidence(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupAddress = NullTextIdentifier
                tradershubClientVariables.setRealSignupAddress(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupAddressPostCode = NullTextIdentifier
                tradershubClientVariables.setRealSignupAddressPostCode(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupAddressState = NullTextIdentifier
                tradershubClientVariables.setRealSignupAddressState(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupAddressTown = NullTextIdentifier
                tradershubClientVariables.setRealSignupAddressTown(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupDateofBirth = NullTextIdentifier
                tradershubClientVariables.setRealSignupDateofBirth(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupFatcaDeclaration = NullTextIdentifier
                tradershubClientVariables.setRealSignupFatcaDeclaration(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupFirstName = NullTextIdentifier
                tradershubClientVariables.setRealSignupFirstName(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupIDVDocumentName = NullTextIdentifier
                tradershubClientVariables.setRealSignupIDVDocumentName(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupIDVDocumentNumber = NullTextIdentifier
                tradershubClientVariables.setRealSignupIDVDocumentNumber(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupLastName = NullTextIdentifier
                tradershubClientVariables.setRealSignupLastName(OS.BuiltinFunctions.nullTextIdentifier());
                // SelectedCurrencyCode = NullTextIdentifier
                tradershubClientVariables.setSelectedCurrencyCode(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupEmployementStatus = NullTextIdentifier
                tradershubClientVariables.setRealSignupEmployementStatus(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupTIDNumber = NullTextIdentifier
                tradershubClientVariables.setRealSignupTIDNumber(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupTaxIDConfirmation = False
                tradershubClientVariables.setRealSignupTaxIDConfirmation(false);
                // RealSignupTaxResidenceLabel = NullTextIdentifier
                tradershubClientVariables.setRealSignupTaxResidenceLabel(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupIsIDVSupported = False
                tradershubClientVariables.setRealSignupIsIDVSupported(false);
                // RealSignupSkippedIDV = False
                tradershubClientVariables.setRealSignupSkippedIDV(false);
                // InitializeRealSignup = False
                tradershubClientVariables.setInitializeRealSignup(false);
                // RealSignupAccountOpeningReason = NullTextIdentifier
                tradershubClientVariables.setRealSignupAccountOpeningReason(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupAddressStateLabel = NullTextIdentifier
                tradershubClientVariables.setRealSignupAddressStateLabel(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupIDVAdditionalDocumentNumber = NullTextIdentifier
                tradershubClientVariables.setRealSignupIDVAdditionalDocumentNumber(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupIDVAdditionalDocumentNumberLabel = NullTextIdentifier
                tradershubClientVariables.setRealSignupIDVAdditionalDocumentNumberLabel(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupPhone = NullTextIdentifier
                tradershubClientVariables.setRealSignupPhone(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupPlaceOfBirth = NullTextIdentifier
                tradershubClientVariables.setRealSignupPlaceOfBirth(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupSkippedEmploymentTaxDetails = False
                tradershubClientVariables.setRealSignupSkippedEmploymentTaxDetails(false);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = tradershubController.default;
    tradershubController.default.clientActionProxies.cleanupAfterRealSignup$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.cleanupAfterRealSignup$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});


define("tradershub.controller$CleanupAfterResetPassword", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.clientVariables"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.cleanupAfterResetPassword$Action = function(callContext) {
        return OS.Logger.startActiveSpan("CleanupAfterResetPassword", function(span) {
            if (span) {
                span.setAttribute("code.function", "CleanupAfterResetPassword");
                span.setAttribute("outsystems.function.key", "79c1592d-7563-4154-8a77-0f2e1d944bf3");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                // Action = NullTextIdentifier
                tradershubClientVariables.setAction(OS.BuiltinFunctions.nullTextIdentifier());
                // Code = NullTextIdentifier
                tradershubClientVariables.setCode(OS.BuiltinFunctions.nullTextIdentifier());
                // Lang = NullTextIdentifier
                tradershubClientVariables.setLang(OS.BuiltinFunctions.nullTextIdentifier());
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = tradershubController.default;
    tradershubController.default.clientActionProxies.cleanupAfterResetPassword$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.cleanupAfterResetPassword$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});


define("tradershub.controller$CleanupAfterSignup", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.clientVariables"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.cleanupAfterSignup$Action = function(callContext) {
        return OS.Logger.startActiveSpan("CleanupAfterSignup", function(span) {
            if (span) {
                span.setAttribute("code.function", "CleanupAfterSignup");
                span.setAttribute("outsystems.function.key", "d79f7a78-9d51-4173-9cad-5e7e9870332d");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                // Action = ""
                tradershubClientVariables.setAction("");
                // Code = ""
                tradershubClientVariables.setCode("");
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = tradershubController.default;
    tradershubController.default.clientActionProxies.cleanupAfterSignup$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.cleanupAfterSignup$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});


define("tradershub.controller$CtraderTradingPlatformAvailableAccounts", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$CtraderTradingPlatformAvailableAccounts.PayloadJS", "tradershub.controller$CtraderTradingPlatformAvailableAccounts.ModifyDataJS", "tradershub.clientVariables", "tradershub.controller$GetWebsiteStatus", "tradershub.controller$DerivApiSendMessage", "tradershub.model$ST_3c6ba624991ba71a1d179d7c7ef27261Structure"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_CtraderTradingPlatformAvailableAccounts_PayloadJS, tradershub_controller_CtraderTradingPlatformAvailableAccounts_ModifyDataJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.ctraderTradingPlatformAvailableAccounts$Action = function(authorizeIn, platformIn, callContext) {
        return OS.Logger.startActiveSpan("CtraderTradingPlatformAvailableAccounts", function(span) {
            if (span) {
                span.setAttribute("code.function", "CtraderTradingPlatformAvailableAccounts");
                span.setAttribute("outsystems.function.key", "ce9d545b-45be-4db6-9cd4-c76176e6c93c");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.CtraderTradingPlatformAvailableAccounts$vars"))());
                vars.value.authorizeInLocal = authorizeIn;
                vars.value.platformInLocal = platformIn;
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var payloadJSResult = new OS.DataTypes.VariableHolder();
                var modifyDataJSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_3c6ba624991ba71a1d179d7c7ef27261Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.CtraderTradingPlatformAvailableAccounts$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: GetWebsiteStatus
                    return tradershubController.default.getWebsiteStatus$Action(callContext).then(function() {
                        payloadJSResult.value = OS.Logger.startActiveSpan("Payload", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "Payload");
                                span.setAttribute("outsystems.function.key", "4d756cd8-7310-4524-b2ed-ca9bafa6e02a");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                            }

                            try {
                                return controller.safeExecuteJSNode(tradershub_controller_CtraderTradingPlatformAvailableAccounts_PayloadJS, "Payload", "CtraderTradingPlatformAvailableAccounts", {
                                    ClientCountry: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getClientCountry(), OS.DataTypes.DataTypes.Text),
                                    Platform: OS.DataConversion.JSNodeParamConverter.to(vars.value.platformInLocal, OS.DataTypes.DataTypes.Text),
                                    isLoggedIn: OS.DataConversion.JSNodeParamConverter.to(((tradershubClientVariables.getAuthToken()) !== ("")), OS.DataTypes.DataTypes.Boolean),
                                    Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                }, function($parameters) {
                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.CtraderTradingPlatformAvailableAccounts$payloadJSResult"))();
                                    jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                    return jsNodeResult;
                                }, {}, {});
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                        // Execute Action: DerivApiSendMessage
                        return tradershubController.default.derivApiSendMessage$Action(payloadJSResult.value.payloadOut, "trading_platform_available_accounts", vars.value.authorizeInLocal, callContext).then(function(value) {
                            derivApiSendMessageVar.value = value;
                        });
                    }).then(function() {
                        if ((!(derivApiSendMessageVar.value.isErrorOut))) {
                            modifyDataJSResult.value = OS.Logger.startActiveSpan("ModifyData", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "ModifyData");
                                    span.setAttribute("outsystems.function.key", "dfa7b178-dcb1-4ab3-9323-406808e1df1e");
                                    span.setAttribute("outsystems.function.owner.name", "tradershub");
                                    span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                }

                                try {
                                    return controller.safeExecuteJSNode(tradershub_controller_CtraderTradingPlatformAvailableAccounts_ModifyDataJS, "ModifyData", "CtraderTradingPlatformAvailableAccounts", {
                                        Data: OS.DataConversion.JSNodeParamConverter.to(derivApiSendMessageVar.value.responseOut, OS.DataTypes.DataTypes.Text),
                                        Response: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                    }, function($parameters) {
                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.CtraderTradingPlatformAvailableAccounts$modifyDataJSResult"))();
                                        jsNodeResult.responseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Response, OS.DataTypes.DataTypes.Text);
                                        return jsNodeResult;
                                    }, {}, {});
                                } finally {
                                    if (span) {
                                        span.end();
                                    }

                                }

                            }, 1);
                            // JSON Deserialize: JSONDeserialize
                            jSONDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(modifyDataJSResult.value.responseOut, tradershubModel.ST_3c6ba624991ba71a1d179d7c7ef27261Structure, false);
                            // Response = JSONDeserialize.Data
                            outVars.value.responseOut = jSONDeserializeVar.value.dataOut;
                        }

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
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.CtraderTradingPlatformAvailableAccounts$vars", [{
        name: "Authorize",
        attrName: "authorizeInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return true;
        }
    }, {
        name: "Platform",
        attrName: "platformInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.CtraderTradingPlatformAvailableAccounts$payloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.CtraderTradingPlatformAvailableAccounts$modifyDataJSResult", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.CtraderTradingPlatformAvailableAccounts$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new tradershubModel.ST_3c6ba624991ba71a1d179d7c7ef27261Structure();
        },
        complexType: tradershubModel.ST_3c6ba624991ba71a1d179d7c7ef27261Structure
    }]);
    tradershubController.default.clientActionProxies.ctraderTradingPlatformAvailableAccounts$Action = function(authorizeIn, platformIn) {
        authorizeIn = (authorizeIn === undefined) ? true : authorizeIn;
        platformIn = (platformIn === undefined) ? "" : platformIn;
        return controller.executeActionInsideJSNode(tradershubController.default.ctraderTradingPlatformAvailableAccounts$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(authorizeIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(platformIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut
            };
        });
    };
});

define("tradershub.controller$CtraderTradingPlatformAvailableAccounts.PayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const payload = {
            "platform": $parameters.Platform,
        };

        // pass client_country as additional payload if client is not logged in
        if (!$parameters.isLoggedIn) {
            payload["client_country"] = $parameters.ClientCountry;
        }

        $parameters.Payload = JSON.stringify(payload);

    };
});

define("tradershub.controller$CtraderTradingPlatformAvailableAccounts.ModifyDataJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const data = JSON.parse($parameters.Data);

        $parameters.Response = JSON.stringify(data)
    };
});


define("tradershub.controller$DerivApiSendMessage", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$DerivApiSendMessage.SendApiCallJS", "tradershub.clientVariables"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_DerivApiSendMessage_SendApiCallJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.derivApiSendMessage$Action = function(payloadIn, endpointIn, authorizeIn, callContext) {
        return OS.Logger.startActiveSpan("DerivApiSendMessage", function(span) {
            if (span) {
                span.setAttribute("code.function", "DerivApiSendMessage");
                span.setAttribute("outsystems.function.key", "c0dce4e6-a508-461d-b6bf-99ab076e4629");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.DerivApiSendMessage$vars"))());
                vars.value.payloadInLocal = payloadIn;
                vars.value.endpointInLocal = endpointIn;
                vars.value.authorizeInLocal = authorizeIn;
                var sendApiCallJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.DerivApiSendMessage$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    return OS.Logger.startActiveSpan("SendApiCall", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "SendApiCall");
                            span.setAttribute("outsystems.function.key", "cc9421a5-0b57-4156-86f9-1ebe6391c2a1");
                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteAsyncJSNode(tradershub_controller_DerivApiSendMessage_SendApiCallJS, "SendApiCall", "DerivApiSendMessage", {
                                Endpoint: OS.DataConversion.JSNodeParamConverter.to(vars.value.endpointInLocal, OS.DataTypes.DataTypes.Text),
                                payload: OS.DataConversion.JSNodeParamConverter.to(vars.value.payloadInLocal, OS.DataTypes.DataTypes.Text),
                                Token: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getAuthToken(), OS.DataTypes.DataTypes.Text),
                                Authorize: OS.DataConversion.JSNodeParamConverter.to(vars.value.authorizeInLocal, OS.DataTypes.DataTypes.Boolean),
                                response: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                IsError: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
                                ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.DerivApiSendMessage$sendApiCallJSResult"))();
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
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.DerivApiSendMessage$vars", [{
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
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.DerivApiSendMessage$sendApiCallJSResult", [{
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
    tradershubController.default.constructor.registerVariableGroupType("tradershub.DerivApiSendMessage$outVars", [{
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
    tradershubController.default.clientActionProxies.derivApiSendMessage$Action = function(payloadIn, endpointIn, authorizeIn) {
        payloadIn = (payloadIn === undefined) ? "" : payloadIn;
        endpointIn = (endpointIn === undefined) ? "" : endpointIn;
        authorizeIn = (authorizeIn === undefined) ? false : authorizeIn;
        return controller.executeActionInsideJSNode(tradershubController.default.derivApiSendMessage$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(payloadIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(endpointIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authorizeIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: OS.DataConversion.JSNodeParamConverter.to(actionResults.responseOut, OS.DataTypes.DataTypes.Text),
                IsError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isErrorOut, OS.DataTypes.DataTypes.Boolean),
                ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text),
                ErrorCode: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorCodeOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("tradershub.controller$DerivApiSendMessage.SendApiCallJS", [], function() {
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


define("tradershub.controller$DoLogin", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "System_.model", "tradershub.clientVariables", "System_.model$UserLoginResultRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, System_Model, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.doLogin$Action = function(usernameIn, passwordIn, callContext) {
        return OS.Logger.startActiveSpan("DoLogin", function(span) {
            if (span) {
                span.setAttribute("code.function", "DoLogin");
                span.setAttribute("outsystems.function.key", "c45e4ea0-ddd3-4e73-abfc-ba43af7d5ab7");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.DoLogin$vars"))());
                vars.value.usernameInLocal = usernameIn;
                vars.value.passwordInLocal = passwordIn;
                var loginVar = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.DoLogin$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: Login
                    return OS.SystemActions.login(vars.value.usernameInLocal, vars.value.passwordInLocal, callContext).then(function(value) {
                        loginVar.value = value;
                    }).then(function() {
                        // Success?
                        if ((loginVar.value.userLoginResultOut.successAttr)) {
                            // Success = True
                            // Success = True
                            outVars.value.successOut = true;
                        } else {
                            // Invalid credentials?
                            if ((loginVar.value.userLoginResultOut.userLoginFailureReasonAttr.invalidCredentialsAttr)) {
                                // Set error message
                                // ErrorMessage = "Invalid credentials."
                                outVars.value.errorMessageOut = "Invalid credentials.";
                            } else {
                                // Too many failed login attempts?
                                if ((loginVar.value.userLoginResultOut.userLoginFailureReasonAttr.tooManyFailedLoginAttemptsAttr)) {
                                    // Set error message
                                    // ErrorMessage = "Too many failed login attempts. Please try again in " + Login.UserLoginResult.RetryAfterSeconds + " seconds."
                                    outVars.value.errorMessageOut = (("Too many failed login attempts. Please try again in " + (loginVar.value.userLoginResultOut.retryAfterSecondsAttr).toString()) + " seconds.");
                                } else {
                                    // Set error message
                                    // ErrorMessage = "Login operation failed."
                                    outVars.value.errorMessageOut = "Login operation failed.";
                                }

                            }

                        }

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
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.DoLogin$vars", [{
        name: "Username",
        attrName: "usernameInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Password",
        attrName: "passwordInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.DoLogin$outVars", [{
        name: "Success",
        attrName: "successOut",
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
    }]);
    tradershubController.default.clientActionProxies.doLogin$Action = function(usernameIn, passwordIn) {
        usernameIn = (usernameIn === undefined) ? "" : usernameIn;
        passwordIn = (passwordIn === undefined) ? "" : passwordIn;
        return controller.executeActionInsideJSNode(tradershubController.default.doLogin$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(usernameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(passwordIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
                ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});


define("tradershub.controller$FeatureFlagValueByName", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$FeatureFlagValueByName.GetFeatureFlagValueByNameJS", "tradershub.clientVariables"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_FeatureFlagValueByName_GetFeatureFlagValueByNameJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.featureFlagValueByName$Action = function(nameIn, callContext) {
        return OS.Logger.startActiveSpan("FeatureFlagValueByName", function(span) {
            if (span) {
                span.setAttribute("code.function", "FeatureFlagValueByName");
                span.setAttribute("outsystems.function.key", "0e4d40fb-5602-4513-bce4-8ab7d1fd80b2");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.FeatureFlagValueByName$vars"))());
                vars.value.nameInLocal = nameIn;
                var getFeatureFlagValueByNameJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.FeatureFlagValueByName$outVars"))());
                getFeatureFlagValueByNameJSResult.value = OS.Logger.startActiveSpan("GetFeatureFlagValueByName", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "GetFeatureFlagValueByName");
                        span.setAttribute("outsystems.function.key", "acef3fff-9694-4a07-9f1f-9a6295ba7e00");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(tradershub_controller_FeatureFlagValueByName_GetFeatureFlagValueByNameJS, "GetFeatureFlagValueByName", "FeatureFlagValueByName", {
                            Name: OS.DataConversion.JSNodeParamConverter.to(vars.value.nameInLocal, OS.DataTypes.DataTypes.Text),
                            IsEnabled: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                        }, function($parameters) {
                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.FeatureFlagValueByName$getFeatureFlagValueByNameJSResult"))();
                            jsNodeResult.isEnabledOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsEnabled, OS.DataTypes.DataTypes.Boolean);
                            return jsNodeResult;
                        }, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                // IsEnabled = GetFeatureFlagValueByName.IsEnabled
                outVars.value.isEnabledOut = getFeatureFlagValueByNameJSResult.value.isEnabledOut;
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.FeatureFlagValueByName$vars", [{
        name: "Name",
        attrName: "nameInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.FeatureFlagValueByName$getFeatureFlagValueByNameJSResult", [{
        name: "IsEnabled",
        attrName: "isEnabledOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.FeatureFlagValueByName$outVars", [{
        name: "IsEnabled",
        attrName: "isEnabledOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.clientActionProxies.featureFlagValueByName$Action = function(nameIn) {
        nameIn = (nameIn === undefined) ? "" : nameIn;
        return controller.executeActionInsideJSNode(tradershubController.default.featureFlagValueByName$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(nameIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                IsEnabled: OS.DataConversion.JSNodeParamConverter.to(actionResults.isEnabledOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});

define("tradershub.controller$FeatureFlagValueByName.GetFeatureFlagValueByNameJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const featureFlags = localStorage.getItem("featureFlags");
        if (featureFlags) {
            const parsedFeatureFlags = JSON.parse(featureFlags);
            const flag = parsedFeatureFlags.find(flag => flag.name === $parameters.Name);
            if (flag) {
                $parameters.IsEnabled = flag.enabled;
            } else {
                $parameters.IsEnabled = false;
            }
        }
    };
});


define("tradershub.controller$GBFeatureFlagValue", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$GBFeatureFlagValue.GetFeatureFlagValueJS", "tradershub.clientVariables"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_GBFeatureFlagValue_GetFeatureFlagValueJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.gBFeatureFlagValue$Action = function(featureFlagNameIn, callContext) {
        return OS.Logger.startActiveSpan("GBFeatureFlagValue", function(span) {
            if (span) {
                span.setAttribute("code.function", "GBFeatureFlagValue");
                span.setAttribute("outsystems.function.key", "38df811d-05d9-4ee7-9c26-fb5975787628");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.GBFeatureFlagValue$vars"))());
                vars.value.featureFlagNameInLocal = featureFlagNameIn;
                var getFeatureFlagValueJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.GBFeatureFlagValue$outVars"))());
                getFeatureFlagValueJSResult.value = OS.Logger.startActiveSpan("GetFeatureFlagValue", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "GetFeatureFlagValue");
                        span.setAttribute("outsystems.function.key", "03e49048-d8cd-499d-9ff6-dd561d86ebba");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(tradershub_controller_GBFeatureFlagValue_GetFeatureFlagValueJS, "GetFeatureFlagValue", "GBFeatureFlagValue", {
                            FeatureFlagName: OS.DataConversion.JSNodeParamConverter.to(vars.value.featureFlagNameInLocal, OS.DataTypes.DataTypes.Text),
                            IsEnabled: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                        }, function($parameters) {
                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.GBFeatureFlagValue$getFeatureFlagValueJSResult"))();
                            jsNodeResult.isEnabledOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsEnabled, OS.DataTypes.DataTypes.Boolean);
                            return jsNodeResult;
                        }, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                // IsEnabled = GetFeatureFlagValue.IsEnabled
                outVars.value.isEnabledOut = getFeatureFlagValueJSResult.value.isEnabledOut;
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GBFeatureFlagValue$vars", [{
        name: "FeatureFlagName",
        attrName: "featureFlagNameInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GBFeatureFlagValue$getFeatureFlagValueJSResult", [{
        name: "IsEnabled",
        attrName: "isEnabledOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GBFeatureFlagValue$outVars", [{
        name: "IsEnabled",
        attrName: "isEnabledOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.clientActionProxies.gBFeatureFlagValue$Action = function(featureFlagNameIn) {
        featureFlagNameIn = (featureFlagNameIn === undefined) ? "" : featureFlagNameIn;
        return controller.executeActionInsideJSNode(tradershubController.default.gBFeatureFlagValue$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(featureFlagNameIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                IsEnabled: OS.DataConversion.JSNodeParamConverter.to(actionResults.isEnabledOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});

define("tradershub.controller$GBFeatureFlagValue.GetFeatureFlagValueJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if (window.Analytics) {
            $parameters.IsEnabled = Analytics?.Analytics?.getFeatureValue($parameters.FeatureFlagName)
        }
    };
});


define("tradershub.controller$GetAccountByLoginId", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$GetAccountByLoginId.GetAccountJS", "tradershub.clientVariables", "tradershub.model$ST_52667a49e65b5175f66dacecb12f345fStructure"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_GetAccountByLoginId_GetAccountJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.getAccountByLoginId$Action = function(loginIdIn, callContext) {
        return OS.Logger.startActiveSpan("GetAccountByLoginId", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetAccountByLoginId");
                span.setAttribute("outsystems.function.key", "53b4b606-34d1-4f46-9cc9-e8784d97bd83");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.GetAccountByLoginId$vars"))());
                vars.value.loginIdInLocal = loginIdIn;
                var getAccountJSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializeAccount_listItemVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_52667a49e65b5175f66dacecb12f345fStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.GetAccountByLoginId$outVars"))());
                getAccountJSResult.value = OS.Logger.startActiveSpan("GetAccount", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "GetAccount");
                        span.setAttribute("outsystems.function.key", "6fba624e-1eb7-4ec1-8727-ac2f7d357432");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(tradershub_controller_GetAccountByLoginId_GetAccountJS, "GetAccount", "GetAccountByLoginId", {
                            LoginId: OS.DataConversion.JSNodeParamConverter.to(vars.value.loginIdInLocal, OS.DataTypes.DataTypes.Text),
                            AuthToken: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                            Account: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {
                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.GetAccountByLoginId$getAccountJSResult"))();
                            jsNodeResult.authTokenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.AuthToken, OS.DataTypes.DataTypes.Text);
                            jsNodeResult.accountOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Account, OS.DataTypes.DataTypes.Text);
                            return jsNodeResult;
                        }, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                // JSON Deserialize: JSONDeserializeAccount_listItem
                jSONDeserializeAccount_listItemVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(getAccountJSResult.value.accountOut, tradershubModel.ST_52667a49e65b5175f66dacecb12f345fStructure, false);
                // Token = GetAccount.AuthToken
                outVars.value.tokenOut = getAccountJSResult.value.authTokenOut;
                // Account = JSONDeserializeAccount_listItem.Data
                outVars.value.accountOut = jSONDeserializeAccount_listItemVar.value.dataOut;
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GetAccountByLoginId$vars", [{
        name: "LoginId",
        attrName: "loginIdInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GetAccountByLoginId$getAccountJSResult", [{
        name: "AuthToken",
        attrName: "authTokenOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Account",
        attrName: "accountOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GetAccountByLoginId$outVars", [{
        name: "Token",
        attrName: "tokenOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Account",
        attrName: "accountOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new tradershubModel.ST_52667a49e65b5175f66dacecb12f345fStructure();
        },
        complexType: tradershubModel.ST_52667a49e65b5175f66dacecb12f345fStructure
    }]);
    tradershubController.default.clientActionProxies.getAccountByLoginId$Action = function(loginIdIn) {
        loginIdIn = (loginIdIn === undefined) ? "" : loginIdIn;
        return controller.executeActionInsideJSNode(tradershubController.default.getAccountByLoginId$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(loginIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Token: OS.DataConversion.JSNodeParamConverter.to(actionResults.tokenOut, OS.DataTypes.DataTypes.Text),
                Account: actionResults.accountOut
            };
        });
    };
});

define("tradershub.controller$GetAccountByLoginId.GetAccountJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const list = localStorage.getItem("accountsList")

        if (list) {
            const accountsList = JSON.parse(list)
            $parameters.AuthToken = accountsList[$parameters.LoginId]?.token
            $parameters.Account = JSON.stringify(accountsList[$parameters.LoginId])
        }
    };
});


define("tradershub.controller$GetAccountStatus2", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "RESTAPIWebsocketOfficial.model$ST_746d074ddcc08e0df3b269ffb1933d5aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.getAccountStatus2$Action = function(callContext) {
        return OS.Logger.startActiveSpan("GetAccountStatus2", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetAccountStatus2");
                span.setAttribute("outsystems.function.key", "a1fed692-cdf6-4538-b0fb-4b9ffd00d9df");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var jSONDeserializeGetWebsiteStatusResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_746d074ddcc08e0df3b269ffb1933d5aStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.GetAccountStatus2$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: DerivApiSendMessage
                    return tradershubController.default.derivApiSendMessage$Action("", "get_account_status", false, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    }).then(function() {
                        if ((!(derivApiSendMessageVar.value.isErrorOut))) {
                            // JSON Deserialize: JSONDeserializeGetWebsiteStatusResponse
                            jSONDeserializeGetWebsiteStatusResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(derivApiSendMessageVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_746d074ddcc08e0df3b269ffb1933d5aStructure, false);
                            // Response = JSONDeserializeGetWebsiteStatusResponse.Data
                            outVars.value.responseOut = jSONDeserializeGetWebsiteStatusResponseVar.value.dataOut;
                        }

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
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GetAccountStatus2$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_746d074ddcc08e0df3b269ffb1933d5aStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_746d074ddcc08e0df3b269ffb1933d5aStructure
    }]);
    tradershubController.default.clientActionProxies.getAccountStatus2$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.getAccountStatus2$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut
            };
        });
    };
});


define("tradershub.controller$GetAllAccountsBalance", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$GetAllAccountsBalance.PayloadJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_GetAllAccountsBalance_PayloadJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.getAllAccountsBalance$Action = function(callContext) {
        return OS.Logger.startActiveSpan("GetAllAccountsBalance", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetAllAccountsBalance");
                span.setAttribute("outsystems.function.key", "7d0e824c-fff7-4dc4-9306-391e1d97d3b0");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var payloadJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.GetAllAccountsBalance$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    payloadJSResult.value = OS.Logger.startActiveSpan("Payload", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "Payload");
                            span.setAttribute("outsystems.function.key", "e7c0b57e-8444-4bbd-837a-ca9d046b7813");
                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteJSNode(tradershub_controller_GetAllAccountsBalance_PayloadJS, "Payload", "GetAllAccountsBalance", {
                                Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.GetAllAccountsBalance$payloadJSResult"))();
                                jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                return jsNodeResult;
                            }, {}, {});
                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1);
                    // Execute Action: DerivApiSendMessage
                    return tradershubController.default.derivApiSendMessage$Action(payloadJSResult.value.payloadOut, "balance", false, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    }).then(function() {
                        if ((!(derivApiSendMessageVar.value.isErrorOut))) {
                            // Response = DerivApiSendMessage.Response
                            outVars.value.responseOut = derivApiSendMessageVar.value.responseOut;
                        }

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
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GetAllAccountsBalance$payloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GetAllAccountsBalance$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.getAllAccountsBalance$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.getAllAccountsBalance$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: OS.DataConversion.JSNodeParamConverter.to(actionResults.responseOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("tradershub.controller$GetAllAccountsBalance.PayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Payload = JSON.stringify({
            account: "all"
        });

    };
});


define("tradershub.controller$GetCurrencyIcon", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$GetCurrencyIcon.FilterCurrenciesListJS", "tradershub.clientVariables"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_GetCurrencyIcon_FilterCurrenciesListJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.getCurrencyIcon$Action = function(currencyCodeIn, currenciesListIn, callContext) {
        return OS.Logger.startActiveSpan("GetCurrencyIcon", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetCurrencyIcon");
                span.setAttribute("outsystems.function.key", "20c23a84-49b2-448f-8983-9ea514673572");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.GetCurrencyIcon$vars"))());
                vars.value.currencyCodeInLocal = currencyCodeIn;
                vars.value.currenciesListInLocal = currenciesListIn;
                var filterCurrenciesListJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.GetCurrencyIcon$outVars"))());
                filterCurrenciesListJSResult.value = OS.Logger.startActiveSpan("FilterCurrenciesList", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "FilterCurrenciesList");
                        span.setAttribute("outsystems.function.key", "af330295-3514-4a61-86db-58380d2430d7");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(tradershub_controller_GetCurrencyIcon_FilterCurrenciesListJS, "FilterCurrenciesList", "GetCurrencyIcon", {
                            CurrencyCode: OS.DataConversion.JSNodeParamConverter.to(vars.value.currencyCodeInLocal, OS.DataTypes.DataTypes.Text),
                            CurrenciesList: OS.DataConversion.JSNodeParamConverter.to(vars.value.currenciesListInLocal, OS.DataTypes.DataTypes.Text),
                            Icon: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {
                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.GetCurrencyIcon$filterCurrenciesListJSResult"))();
                            jsNodeResult.iconOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Icon, OS.DataTypes.DataTypes.Text);
                            return jsNodeResult;
                        }, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                // CurrencyIcon = FilterCurrenciesList.Icon
                outVars.value.currencyIconOut = filterCurrenciesListJSResult.value.iconOut;
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GetCurrencyIcon$vars", [{
        name: "CurrencyCode",
        attrName: "currencyCodeInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "CurrenciesList",
        attrName: "currenciesListInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GetCurrencyIcon$filterCurrenciesListJSResult", [{
        name: "Icon",
        attrName: "iconOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GetCurrencyIcon$outVars", [{
        name: "CurrencyIcon",
        attrName: "currencyIconOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.getCurrencyIcon$Action = function(currencyCodeIn, currenciesListIn) {
        currencyCodeIn = (currencyCodeIn === undefined) ? "" : currencyCodeIn;
        currenciesListIn = (currenciesListIn === undefined) ? "" : currenciesListIn;
        return controller.executeActionInsideJSNode(tradershubController.default.getCurrencyIcon$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(currencyCodeIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(currenciesListIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                CurrencyIcon: OS.DataConversion.JSNodeParamConverter.to(actionResults.currencyIconOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("tradershub.controller$GetCurrencyIcon.FilterCurrenciesListJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const currenciesList = JSON.parse($parameters.CurrenciesList)
        $parameters.Icon = currenciesList.find(currency => currency.Code === $parameters.CurrencyCode)?.Icon ?? ""

    };
});


define("tradershub.controller$GetSocialLoginRedirectURL", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$GetSocialLoginRedirectURL.AffiliateUTMJS", "tradershub.clientVariables"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_GetSocialLoginRedirectURL_AffiliateUTMJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.getSocialLoginRedirectURL$Action = function(providerIn, callContext) {
        return OS.Logger.startActiveSpan("GetSocialLoginRedirectURL", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetSocialLoginRedirectURL");
                span.setAttribute("outsystems.function.key", "1d5c0f88-75f1-4fea-ac30-629b7e38d258");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.GetSocialLoginRedirectURL$vars"))());
                vars.value.providerInLocal = providerIn;
                var affiliateUTMJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.GetSocialLoginRedirectURL$outVars"))());
                affiliateUTMJSResult.value = OS.Logger.startActiveSpan("AffiliateUTM", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "AffiliateUTM");
                        span.setAttribute("outsystems.function.key", "499fe2f1-e396-471e-8d66-17eaeb41c84b");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(tradershub_controller_GetSocialLoginRedirectURL_AffiliateUTMJS, "AffiliateUTM", "GetSocialLoginRedirectURL", {
                            ServerURL: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getURL(), OS.DataTypes.DataTypes.Text),
                            Provider: OS.DataConversion.JSNodeParamConverter.to(vars.value.providerInLocal, OS.DataTypes.DataTypes.Text),
                            AppId: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getAppId(), OS.DataTypes.DataTypes.Text),
                            RedirectURL: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {
                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.GetSocialLoginRedirectURL$affiliateUTMJSResult"))();
                            jsNodeResult.redirectURLOut = OS.DataConversion.JSNodeParamConverter.from($parameters.RedirectURL, OS.DataTypes.DataTypes.Text);
                            return jsNodeResult;
                        }, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                // RedirectURL = AffiliateUTM.RedirectURL
                outVars.value.redirectURLOut = affiliateUTMJSResult.value.redirectURLOut;
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GetSocialLoginRedirectURL$vars", [{
        name: "Provider",
        attrName: "providerInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GetSocialLoginRedirectURL$affiliateUTMJSResult", [{
        name: "RedirectURL",
        attrName: "redirectURLOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GetSocialLoginRedirectURL$outVars", [{
        name: "RedirectURL",
        attrName: "redirectURLOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.getSocialLoginRedirectURL$Action = function(providerIn) {
        providerIn = (providerIn === undefined) ? "" : providerIn;
        return controller.executeActionInsideJSNode(tradershubController.default.getSocialLoginRedirectURL$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(providerIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                RedirectURL: OS.DataConversion.JSNodeParamConverter.to(actionResults.redirectURLOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("tradershub.controller$GetSocialLoginRedirectURL.AffiliateUTMJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const cookies = getCookiesFields()
        const cookiesObjects = getCookiesObject(cookies)

        const affiliateToken = getCookieValue('affiliate_tracking')

        const searchParams = getDataObjFromCookies(cookiesObjects, cookies)
        searchParams.social_signup = $parameters.Provider

        if (affiliateToken) {
            searchParams.affiliate_token = affiliateToken;
        }

        let redirectURL;

        if (String($parameters.ServerURL).includes("green")) {
            redirectURL = "https://oauth.deriv.com/oauth2/authorize?"
            // AppID for app.deriv.com
            searchParams.app_id = window.location.hostname.includes("staging-hub") ? "16303" : "16929"
        } else {
            redirectURL = String("https://" + $parameters.ServerURL) + "/oauth2/authorize?"
            searchParams.app_id = $parameters.AppId
        }

        redirectURL = redirectURL + new URLSearchParams(searchParams).toString()

        $parameters.RedirectURL = redirectURL
    };
});


define("tradershub.controller$GetWebsiteStatus", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "RESTAPIWebsocketOfficial.model$ST_c864353821feed79663806f3e445d40eStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.getWebsiteStatus$Action = function(callContext) {
        return OS.Logger.startActiveSpan("GetWebsiteStatus", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetWebsiteStatus");
                span.setAttribute("outsystems.function.key", "39ad24ea-0783-4e1f-b60b-0bfe07b17421");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var jSONDeserializeGetWebsiteStatusResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_c864353821feed79663806f3e445d40eStructure))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: DerivApiSendMessage
                    return tradershubController.default.derivApiSendMessage$Action("", "website_status", false, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    }).then(function() {
                        if ((!(derivApiSendMessageVar.value.isErrorOut))) {
                            // JSON Deserialize: JSONDeserializeGetWebsiteStatusResponse
                            jSONDeserializeGetWebsiteStatusResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(derivApiSendMessageVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_c864353821feed79663806f3e445d40eStructure, false);
                            // RawWebsiteStatusResponse = DerivApiSendMessage.Response
                            tradershubClientVariables.setRawWebsiteStatusResponse(derivApiSendMessageVar.value.responseOut);
                            // ClientCountry = JSONDeserializeGetWebsiteStatusResponse.Data.Website_status.Clients_country
                            tradershubClientVariables.setClientCountry(jSONDeserializeGetWebsiteStatusResponseVar.value.dataOut.website_statusAttr.clients_countryAttr);
                        }

                    });
                }).then(function() {
                    return;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 1);
    };
    var controller = tradershubController.default;
    tradershubController.default.clientActionProxies.getWebsiteStatus$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.getWebsiteStatus$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});


define("tradershub.controller$InitGrowthbookAndRudderStack", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$InitGrowthbookAndRudderStack.InitAnalyticsJS", "tradershub.clientVariables"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_InitGrowthbookAndRudderStack_InitAnalyticsJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.initGrowthbookAndRudderStack$Action = function(callContext) {
        return OS.Logger.startActiveSpan("InitGrowthbookAndRudderStack", function(span) {
            if (span) {
                span.setAttribute("code.function", "InitGrowthbookAndRudderStack");
                span.setAttribute("outsystems.function.key", "db966529-7a98-4ff2-98aa-4b6701575cdd");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                return OS.Flow.executeAsyncFlow(function() {
                    return OS.Logger.startActiveSpan("InitAnalytics", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "InitAnalytics");
                            span.setAttribute("outsystems.function.key", "25b1b963-0c44-4b92-bfec-f05d8383344a");
                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteAsyncJSNode(tradershub_controller_InitGrowthbookAndRudderStack_InitAnalyticsJS, "InitAnalytics", "InitGrowthbookAndRudderStack", {
                                STAGING_HOSTNAME: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getStagingHostName(), OS.DataTypes.DataTypes.Text),
                                RUDDERSTACK_STAGING_KEY: OS.DataConversion.JSNodeParamConverter.to("2kxsAsC6mmbYhzD0dXAd9gIlvzC", OS.DataTypes.DataTypes.Text),
                                IS_AUTHORIZED: OS.DataConversion.JSNodeParamConverter.to(((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier())), OS.DataTypes.DataTypes.Boolean),
                                RUDDERSTACK_PRODUCTION_KEY: OS.DataConversion.JSNodeParamConverter.to("2kxJ1vuvgwx3jXTNURuk7IbxFoW", OS.DataTypes.DataTypes.Text),
                                GROWTHBOOK_DEVELOPMENT_DECRYPTION_KEY: OS.DataConversion.JSNodeParamConverter.to("vZhhadh108cXmYDuZ5dFJQ==", OS.DataTypes.DataTypes.Text),
                                PRODUCTION_HOSTNAME: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getProductionHostName(), OS.DataTypes.DataTypes.Text),
                                GROWTHBOOK_STAGING_CLIENT_KEY: OS.DataConversion.JSNodeParamConverter.to("sdk-WrcJdZQomk0uzatG", OS.DataTypes.DataTypes.Text),
                                GROWTHBOOK_PRODUCTION_CLIENT_KEY: OS.DataConversion.JSNodeParamConverter.to("sdk-0kY5GMkZT2BfvS1t", OS.DataTypes.DataTypes.Text),
                                GROWTHBOOK_DEVELOPMENT_CLIENT_KEY: OS.DataConversion.JSNodeParamConverter.to("sdk-ukdKPzIqjCEnbAv", OS.DataTypes.DataTypes.Text),
                                GROWTHBOOK_STAGING_DECRYPTION_KEY: OS.DataConversion.JSNodeParamConverter.to("+zayLeqj1tNv5ve/eTJIGQ==", OS.DataTypes.DataTypes.Text),
                                GROWTHBOOK_PRODUCTION_DECRYPTION_KEY: OS.DataConversion.JSNodeParamConverter.to("iQ9jnBWrCocmt/5LPogGfw==", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {}, {}, {});
                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1);
                }).then(function() {
                    return;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 1);
    };
    var controller = tradershubController.default;
    tradershubController.default.clientActionProxies.initGrowthbookAndRudderStack$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.initGrowthbookAndRudderStack$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("tradershub.controller$InitGrowthbookAndRudderStack.InitAnalyticsJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        return new Promise(function($resolve, $reject) {
            const isProduction = window.location.hostname === $parameters.PRODUCTION_HOSTNAME
            const isStaging = window.location.hostname === $parameters.STAGING_HOSTNAME

            const country = JSON.parse(Cookies.get("website_status") ?? '{}')?.clients_country ?? null
            const signupDevice = JSON.parse(Cookies.get("signup_device") ?? '{}')?.signup_device ?? null

            const deviceLanguage = window.navigator.userLanguage || window.navigator.language;

            const cookies = getCookiesFields()
            const cookiesObjects = getCookiesObject(cookies)
            const cookiesValue = getDataObjFromCookies(cookiesObjects, cookies)

            const initAnalytics = () => new Promise((resolve, reject) => {
                const Analytics = window?.Analytics?.Analytics
                if (Analytics) {
                    let credentials = {};

                    if (isProduction) {
                        credentials = {
                            growthbookKey: $parameters.GROWTHBOOK_PRODUCTION_CLIENT_KEY,
                            growthbookDecryptionKey: $parameters.GROWTHBOOK_PRODUCTION_DECRYPTION_KEY,
                            rudderstackKey: $parameters.RUDDERSTACK_PRODUCTION_KEY
                        }
                    } else if (isStaging) {
                        credentials = {
                            growthbookKey: $parameters.GROWTHBOOK_STAGING_CLIENT_KEY,
                            growthbookDecryptionKey: $parameters.GROWTHBOOK_STAGING_DECRYPTION_KEY,
                            rudderstackKey: $parameters.RUDDERSTACK_STAGING_KEY
                        }
                    } else {
                        credentials = {
                            growthbookKey: $parameters.GROWTHBOOK_DEVELOPMENT_CLIENT_KEY,
                            growthbookDecryptionKey: $parameters.GROWTHBOOK_DEVELOPMENT_DECRYPTION_KEY,
                            rudderstackKey: $parameters.RUDDERSTACK_STAGING_KEY
                        }
                    }

                    const initialiseConfig = {
                        ...credentials,
                        growthbookOptions: {
                            navigate: (url) => console.log(`Navigating to ${url}`),
                            antiFlicker: false,
                            navigateDelay: 0,
                            attributes: {
                                country,
                                device_type: signupDevice,
                                user_language: "en",
                                device_language: deviceLanguage,
                                utm_source: cookiesValue?.['utm_source'],
                                utm_medium: cookiesValue?.utm_medium,
                                utm_campaign: cookiesValue?.utm_campaign,
                                url: window.location.href,
                                is_authorized: $parameters.IS_AUTHORIZED,
                                loggedIn: $parameters.IS_AUTHORIZED
                            }
                        },
                        // disableRudderstackAMD: true,
                    };
                    try {
                        Analytics.initialise(initialiseConfig);
                        resolve()
                    } catch (error) {
                        console.error('Error during initialisation:', error);
                        reject()
                    }
                }
            })

            initAnalytics().then(() => $resolve()).catch((error) => {
                console.error(error)
                $resolve()
            })

        });
    };
});


define("tradershub.controller$InitizalizeDerivApi", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$InitizalizeDerivApi.InitializeDerivApiJS", "tradershub.clientVariables", "tradershub.controller$GetWebsiteStatus", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure", "tradershub.controller$SendResidenceList", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure", "tradershub.controller$SendAuthorize"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_InitizalizeDerivApi_InitializeDerivApiJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.initizalizeDerivApi$Action = function(callContext) {
        return OS.Logger.startActiveSpan("InitizalizeDerivApi", function(span) {
            if (span) {
                span.setAttribute("code.function", "InitizalizeDerivApi");
                span.setAttribute("outsystems.function.key", "d74abbbb-8450-4f49-b362-dd2e8c1e7c50");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                OS.Logger.startActiveSpan("InitializeDerivApi", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "InitializeDerivApi");
                        span.setAttribute("outsystems.function.key", "b0c52184-c6a5-4064-840e-3ed8f885b369");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(tradershub_controller_InitizalizeDerivApi_InitializeDerivApiJS, "InitializeDerivApi", "InitizalizeDerivApi", {
                            WebsocketURL: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getWebsocketURL(), OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {}, {
                            GetWebsiteStatus: tradershubController.default.clientActionProxies.getWebsiteStatus$Action,
                            SendResidenceList: tradershubController.default.clientActionProxies.sendResidenceList$Action,
                            SendAuthorize: tradershubController.default.clientActionProxies.sendAuthorize$Action
                        }, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = tradershubController.default;
    tradershubController.default.clientActionProxies.initizalizeDerivApi$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.initizalizeDerivApi$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("tradershub.controller$InitizalizeDerivApi.InitializeDerivApiJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        window.connectionAliveInterval;
        (function initializeDerivAPIBasic() {
            if (!window.DerivAPI) {
                let socketUrl = window.location.host == "hub.deriv.com" ? String($parameters.WebsocketURL).replace("53503", "61554") : $parameters.WebsocketURL;
                if (window.location.host.includes("dev-hub")) {
                    socketUrl = socketUrl.replace("53503", "15438")
                }
                const socket = new ReconnectingWebSocket(localStorage.getItem('ws-url') || socketUrl);
                socket.reconnectInterval = 1000;
                socket.timeoutInterval = 15000;
                socket.maxReconnectAttempts = 10
                window.DerivAPI = new DerivAPIBasic({
                    connection: socket
                });
                socket.readyState === 1 && DerivAPI.send({
                    ping: 1
                });
                window.___socket = socket;

                socket.addEventListener('open', () => {
                    window.___socket.readyState === 1 && DerivAPI.send({
                        ping: 1
                    });

                    $actions.GetWebsiteStatus()
                    $actions.SendResidenceList()

                    window.connectionAliveInterval = setInterval(() => {
                        window.___socket.readyState === 1 && DerivAPI.send({
                            ping: 1
                        });
                    }, 25 * 1000)

                    /**
                     * Don't send authorize on the following pathnames as these will block verification email to be sent
                     * These pathnamea are related to signup
                     */
                    const pathname = location.pathname.toLowerCase()
                    const pathnameList = ["/tradershub/", "/tradershub", "/tradershub/signup", "/tradershub/email-verification"]
                    if (!pathnameList.includes(pathname)) {
                        $actions.SendAuthorize()
                    }
                })

                socket.addEventListener('close', () => {
                    clearInterval(window.connectionAliveInterval)
                })
            }
        })();

    };
});


define("tradershub.controller$MT5LoginList", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "tradershub.controller$MT5LoginList.OutputJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "RESTAPIWebsocketOfficial.model$ST_2f457e0a5b13526850516eea23ae0e9aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, tradershub_controller_MT5LoginList_OutputJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.mT5LoginList$Action = function(authorizeIn, callContext) {
        return OS.Logger.startActiveSpan("MT5LoginList", function(span) {
            if (span) {
                span.setAttribute("code.function", "MT5LoginList");
                span.setAttribute("outsystems.function.key", "f5fd247c-527e-4c5e-be99-0439655c4c2d");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.MT5LoginList$vars"))());
                vars.value.authorizeInLocal = authorizeIn;
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var outputJSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_2f457e0a5b13526850516eea23ae0e9aStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.MT5LoginList$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: DerivApiSendMessage
                    return tradershubController.default.derivApiSendMessage$Action("", "mt5_login_list", vars.value.authorizeInLocal, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    }).then(function() {
                        if ((!(derivApiSendMessageVar.value.isErrorOut))) {
                            outputJSResult.value = OS.Logger.startActiveSpan("Output", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "Output");
                                    span.setAttribute("outsystems.function.key", "5c47d1ac-69b3-4e4b-a696-0508ac469af8");
                                    span.setAttribute("outsystems.function.owner.name", "tradershub");
                                    span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                }

                                try {
                                    return controller.safeExecuteJSNode(tradershub_controller_MT5LoginList_OutputJS, "Output", "MT5LoginList", {
                                        Data: OS.DataConversion.JSNodeParamConverter.to(derivApiSendMessageVar.value.responseOut, OS.DataTypes.DataTypes.Text),
                                        Response: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                    }, function($parameters) {
                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.MT5LoginList$outputJSResult"))();
                                        jsNodeResult.responseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Response, OS.DataTypes.DataTypes.Text);
                                        return jsNodeResult;
                                    }, {}, {});
                                } finally {
                                    if (span) {
                                        span.end();
                                    }

                                }

                            }, 1);
                            // JSON Deserialize: JSONDeserialize
                            jSONDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(outputJSResult.value.responseOut, RESTAPIWebsocketOfficialModel.ST_2f457e0a5b13526850516eea23ae0e9aStructure, false);
                            // Response = JSONDeserialize.Data
                            outVars.value.responseOut = jSONDeserializeVar.value.dataOut;
                        }

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
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.MT5LoginList$vars", [{
        name: "Authorize",
        attrName: "authorizeInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return true;
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.MT5LoginList$outputJSResult", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.MT5LoginList$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_2f457e0a5b13526850516eea23ae0e9aStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_2f457e0a5b13526850516eea23ae0e9aStructure
    }]);
    tradershubController.default.clientActionProxies.mT5LoginList$Action = function(authorizeIn) {
        authorizeIn = (authorizeIn === undefined) ? true : authorizeIn;
        return controller.executeActionInsideJSNode(tradershubController.default.mT5LoginList$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(authorizeIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut
            };
        });
    };
});

define("tradershub.controller$MT5LoginList.OutputJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const data = JSON.parse($parameters.Data);
        $parameters.Response = JSON.stringify(data)

    };
});


define("tradershub.controller$MT5TradingPlatformAvailableAccounts", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$MT5TradingPlatformAvailableAccounts.ModifyDataJS", "tradershub.controller$MT5TradingPlatformAvailableAccounts.PayloadJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "tradershub.controller$GetWebsiteStatus", "tradershub.model$ST_8907948f85abfce9f41b7aac6149d55eStructure"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_MT5TradingPlatformAvailableAccounts_ModifyDataJS, tradershub_controller_MT5TradingPlatformAvailableAccounts_PayloadJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.mT5TradingPlatformAvailableAccounts$Action = function(authorizeIn, callContext) {
        return OS.Logger.startActiveSpan("MT5TradingPlatformAvailableAccounts", function(span) {
            if (span) {
                span.setAttribute("code.function", "MT5TradingPlatformAvailableAccounts");
                span.setAttribute("outsystems.function.key", "3be3f738-ce12-438a-8f0b-a694da922483");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.MT5TradingPlatformAvailableAccounts$vars"))());
                vars.value.authorizeInLocal = authorizeIn;
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var modifyDataJSResult = new OS.DataTypes.VariableHolder();
                var payloadJSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_8907948f85abfce9f41b7aac6149d55eStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.MT5TradingPlatformAvailableAccounts$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: GetWebsiteStatus
                    return tradershubController.default.getWebsiteStatus$Action(callContext).then(function() {
                        payloadJSResult.value = OS.Logger.startActiveSpan("Payload", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "Payload");
                                span.setAttribute("outsystems.function.key", "d0a6177f-e1e8-48b5-9427-2fe80fb7a36f");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                            }

                            try {
                                return controller.safeExecuteJSNode(tradershub_controller_MT5TradingPlatformAvailableAccounts_PayloadJS, "Payload", "MT5TradingPlatformAvailableAccounts", {
                                    ClientCountry: OS.DataConversion.JSNodeParamConverter.to((((tradershubClientVariables.getAuthToken() === "")) ? (tradershubClientVariables.getClientCountry()) : ("")), OS.DataTypes.DataTypes.Text),
                                    Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                }, function($parameters) {
                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.MT5TradingPlatformAvailableAccounts$payloadJSResult"))();
                                    jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                    return jsNodeResult;
                                }, {}, {});
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                        // Execute Action: DerivApiSendMessage
                        return tradershubController.default.derivApiSendMessage$Action(payloadJSResult.value.payloadOut, "trading_platform_available_accounts", vars.value.authorizeInLocal, callContext).then(function(value) {
                            derivApiSendMessageVar.value = value;
                        });
                    }).then(function() {
                        if ((!(derivApiSendMessageVar.value.isErrorOut))) {
                            modifyDataJSResult.value = OS.Logger.startActiveSpan("ModifyData", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "ModifyData");
                                    span.setAttribute("outsystems.function.key", "25323503-8495-4de8-9b72-98d0c43f2cf9");
                                    span.setAttribute("outsystems.function.owner.name", "tradershub");
                                    span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                }

                                try {
                                    return controller.safeExecuteJSNode(tradershub_controller_MT5TradingPlatformAvailableAccounts_ModifyDataJS, "ModifyData", "MT5TradingPlatformAvailableAccounts", {
                                        Data: OS.DataConversion.JSNodeParamConverter.to(derivApiSendMessageVar.value.responseOut, OS.DataTypes.DataTypes.Text),
                                        Response: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                    }, function($parameters) {
                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.MT5TradingPlatformAvailableAccounts$modifyDataJSResult"))();
                                        jsNodeResult.responseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Response, OS.DataTypes.DataTypes.Text);
                                        return jsNodeResult;
                                    }, {}, {});
                                } finally {
                                    if (span) {
                                        span.end();
                                    }

                                }

                            }, 1);
                            // JSON Deserialize: JSONDeserialize
                            jSONDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(modifyDataJSResult.value.responseOut, tradershubModel.ST_8907948f85abfce9f41b7aac6149d55eStructure, false);
                            // Response = JSONDeserialize.Data
                            outVars.value.responseOut = jSONDeserializeVar.value.dataOut;
                        }

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
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.MT5TradingPlatformAvailableAccounts$vars", [{
        name: "Authorize",
        attrName: "authorizeInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return true;
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.MT5TradingPlatformAvailableAccounts$modifyDataJSResult", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.MT5TradingPlatformAvailableAccounts$payloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.MT5TradingPlatformAvailableAccounts$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new tradershubModel.ST_8907948f85abfce9f41b7aac6149d55eStructure();
        },
        complexType: tradershubModel.ST_8907948f85abfce9f41b7aac6149d55eStructure
    }]);
    tradershubController.default.clientActionProxies.mT5TradingPlatformAvailableAccounts$Action = function(authorizeIn) {
        authorizeIn = (authorizeIn === undefined) ? true : authorizeIn;
        return controller.executeActionInsideJSNode(tradershubController.default.mT5TradingPlatformAvailableAccounts$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(authorizeIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut
            };
        });
    };
});

define("tradershub.controller$MT5TradingPlatformAvailableAccounts.ModifyDataJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const data = JSON.parse($parameters.Data);

        $parameters.Response = JSON.stringify(data)

    };
});

define("tradershub.controller$MT5TradingPlatformAvailableAccounts.PayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const payload = {
            // "country_code":$parameters.ClientCountry,
            "platform": "mt5",
        }

        $parameters.Payload = JSON.stringify(payload);

    };
});


define("tradershub.controller$NewAccountReal", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$NewAccountReal.SetAccountSettingsPayloadJS", "tradershub.controller$NewAccountReal.AuthorizePayloadJS", "tradershub.controller$NewAccountReal.SyncLocalStorageJS", "tradershub.controller$NewAccountReal.NewAccountRealPayloadJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "tradershub.controller$CleanupAfterRealSignup", "tradershub.controller$SendIDVDocumentDetails", "tradershub.controller$SetAccountSettings", "tradershub.model$ST_bd2236af041a218c8fde06ca0065cfd9Structure", "tradershub.controller$SendGetSetting", "tradershub.model$ST_1a99e1302699632bd3158595a2dd8d57Structure"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_NewAccountReal_SetAccountSettingsPayloadJS, tradershub_controller_NewAccountReal_AuthorizePayloadJS, tradershub_controller_NewAccountReal_SyncLocalStorageJS, tradershub_controller_NewAccountReal_NewAccountRealPayloadJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.newAccountReal$Action = function(callContext) {
        return OS.Logger.startActiveSpan("NewAccountReal", function(span) {
            if (span) {
                span.setAttribute("code.function", "NewAccountReal");
                span.setAttribute("outsystems.function.key", "4d379ae3-5e33-48c0-8ef3-d0d8ff724c2e");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var derivApiSendAuthorizeVar = new OS.DataTypes.VariableHolder();
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var sendGetSettingVar = new OS.DataTypes.VariableHolder();
                var setAccountSettingsPayloadJSResult = new OS.DataTypes.VariableHolder();
                var authorizePayloadJSResult = new OS.DataTypes.VariableHolder();
                var newAccountRealPayloadJSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializeNewAccountRealResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_1a99e1302699632bd3158595a2dd8d57Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.NewAccountReal$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: SendGetSetting
                    return tradershubController.default.sendGetSetting$Action(callContext).then(function(value) {
                        sendGetSettingVar.value = value;
                    }).then(function() {
                        newAccountRealPayloadJSResult.value = OS.Logger.startActiveSpan("NewAccountRealPayload", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "NewAccountRealPayload");
                                span.setAttribute("outsystems.function.key", "f4571a52-e724-40ee-a1c0-dacba9c4c4a8");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                            }

                            try {
                                return controller.safeExecuteJSNode(tradershub_controller_NewAccountReal_NewAccountRealPayloadJS, "NewAccountRealPayload", "NewAccountReal", {
                                    FirstName: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupFirstName(), OS.DataTypes.DataTypes.Text),
                                    FatcaDeclaration: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupFatcaDeclaration(), OS.DataTypes.DataTypes.Text),
                                    TIN: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupTIDNumber(), OS.DataTypes.DataTypes.Text),
                                    Residence: OS.DataConversion.JSNodeParamConverter.to(sendGetSettingVar.value.getSettingResponseOut.country_codeAttr, OS.DataTypes.DataTypes.Text),
                                    City: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupAddressTown(), OS.DataTypes.DataTypes.Text),
                                    Address: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupAddress(), OS.DataTypes.DataTypes.Text),
                                    SkippedEmploymentDetails: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupSkippedEmploymentTaxDetails(), OS.DataTypes.DataTypes.Boolean),
                                    State: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupAddressState(), OS.DataTypes.DataTypes.Text),
                                    Citizen: OS.DataConversion.JSNodeParamConverter.to(sendGetSettingVar.value.getSettingResponseOut.citizenAttr, OS.DataTypes.DataTypes.Text),
                                    Currency: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getSelectedCurrencyCode(), OS.DataTypes.DataTypes.Text),
                                    TaxResidence: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupTaxResidence(), OS.DataTypes.DataTypes.Text),
                                    Phone: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupPhone(), OS.DataTypes.DataTypes.Text),
                                    DateOfBirth: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupDateofBirth(), OS.DataTypes.DataTypes.Text),
                                    PlaceOfBirth: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupPlaceOfBirth(), OS.DataTypes.DataTypes.Text),
                                    LastName: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupLastName(), OS.DataTypes.DataTypes.Text),
                                    PostCode: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupAddressPostCode(), OS.DataTypes.DataTypes.Text),
                                    AccountOpeningReason: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupAccountOpeningReason(), OS.DataTypes.DataTypes.Text),
                                    Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                }, function($parameters) {
                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.NewAccountReal$newAccountRealPayloadJSResult"))();
                                    jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                    return jsNodeResult;
                                }, {}, {});
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                        // Execute Action: DerivApiSendMessage
                        return tradershubController.default.derivApiSendMessage$Action(newAccountRealPayloadJSResult.value.payloadOut, "", true, callContext).then(function(value) {
                            derivApiSendMessageVar.value = value;
                        });
                    }).then(function() {
                        return OS.Flow.executeSequence(function() {
                            if ((derivApiSendMessageVar.value.isErrorOut)) {
                                // ErrorCode = DerivApiSendMessage.ErrorCode
                                outVars.value.errorCodeOut = derivApiSendMessageVar.value.errorCodeOut;
                            } else {
                                OS.FeedbackMessageService.showFeedbackMessage("Account created successfully.", /*Success*/ 1);
                                // JSON Deserialize: JSONDeserializeNewAccountRealResponse
                                jSONDeserializeNewAccountRealResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(derivApiSendMessageVar.value.responseOut, tradershubModel.ST_1a99e1302699632bd3158595a2dd8d57Structure, false);
                                // AuthToken = JSONDeserializeNewAccountRealResponse.Data.New_account_real.Oauth_token
                                tradershubClientVariables.setAuthToken(jSONDeserializeNewAccountRealResponseVar.value.dataOut.new_account_realAttr.oauth_tokenAttr);
                                // ActiveLoginId = JSONDeserializeNewAccountRealResponse.Data.New_account_real.Client_id
                                tradershubClientVariables.setActiveLoginId(jSONDeserializeNewAccountRealResponseVar.value.dataOut.new_account_realAttr.client_idAttr);
                                authorizePayloadJSResult.value = OS.Logger.startActiveSpan("AuthorizePayload", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "AuthorizePayload");
                                        span.setAttribute("outsystems.function.key", "58b4974c-e331-48db-91e5-c6543dea54d7");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_controller_NewAccountReal_AuthorizePayloadJS, "AuthorizePayload", "NewAccountReal", {
                                            AuthToken: OS.DataConversion.JSNodeParamConverter.to(jSONDeserializeNewAccountRealResponseVar.value.dataOut.new_account_realAttr.oauth_tokenAttr, OS.DataTypes.DataTypes.Text),
                                            Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.NewAccountReal$authorizePayloadJSResult"))();
                                            jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                            return jsNodeResult;
                                        }, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // Execute Action: DerivApiSendAuthorize
                                return tradershubController.default.derivApiSendMessage$Action(authorizePayloadJSResult.value.payloadOut, "", false, callContext).then(function(value) {
                                    derivApiSendAuthorizeVar.value = value;
                                }).then(function() {
                                    setAccountSettingsPayloadJSResult.value = OS.Logger.startActiveSpan("SetAccountSettingsPayload", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "SetAccountSettingsPayload");
                                            span.setAttribute("outsystems.function.key", "33dda72a-d4cc-4054-891a-279ddf3a94ae");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(tradershub_controller_NewAccountReal_SetAccountSettingsPayloadJS, "SetAccountSettingsPayload", "NewAccountReal", {
                                                EmploymentStatus: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupEmployementStatus(), OS.DataTypes.DataTypes.Text),
                                                Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {
                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.NewAccountReal$setAccountSettingsPayloadJSResult"))();
                                                jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                                return jsNodeResult;
                                            }, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                    // Execute Action: SetAccountSettings
                                    return tradershubController.default.setAccountSettings$Action(setAccountSettingsPayloadJSResult.value.payloadOut, callContext);
                                }).then(function() {
                                    // Execute Action: SendIDVDocumentDetails
                                    return tradershubController.default.sendIDVDocumentDetails$Action(callContext);
                                }).then(function() {
                                    // Execute Action: CleanupAfterRealSignup
                                    tradershubController.default.cleanupAfterRealSignup$Action(callContext);
                                    // IsSuccess = True
                                    outVars.value.isSuccessOut = true;
                                    OS.Logger.startActiveSpan("SyncLocalStorage", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "SyncLocalStorage");
                                            span.setAttribute("outsystems.function.key", "7ec10959-2f71-4bea-b5d7-91a42e42d043");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(tradershub_controller_NewAccountReal_SyncLocalStorageJS, "SyncLocalStorage", "NewAccountReal", {
                                                Response: OS.DataConversion.JSNodeParamConverter.to(derivApiSendAuthorizeVar.value.responseOut, OS.DataTypes.DataTypes.Text),
                                                Token: OS.DataConversion.JSNodeParamConverter.to(jSONDeserializeNewAccountRealResponseVar.value.dataOut.new_account_realAttr.oauth_tokenAttr, OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {}, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                });
                            }

                        });
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
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.NewAccountReal$setAccountSettingsPayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.NewAccountReal$authorizePayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.NewAccountReal$newAccountRealPayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.NewAccountReal$outVars", [{
        name: "IsSuccess",
        attrName: "isSuccessOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
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
    tradershubController.default.clientActionProxies.newAccountReal$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.newAccountReal$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                IsSuccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.isSuccessOut, OS.DataTypes.DataTypes.Boolean),
                ErrorCode: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorCodeOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("tradershub.controller$NewAccountReal.SetAccountSettingsPayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Payload = JSON.stringify({
            employment_status: $parameters.EmploymentStatus
        })
    };
});

define("tradershub.controller$NewAccountReal.AuthorizePayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Payload = JSON.stringify({
            authorize: $parameters.AuthToken
        })
    };
});

define("tradershub.controller$NewAccountReal.SyncLocalStorageJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const accountList = JSON.parse(localStorage.getItem('client.accounts') || JSON.stringify({}))
        const response = JSON.parse($parameters.Response)
        const newRealAccount = response.authorize.account_list.find(acc => acc.loginid === response.authorize.loginid)

        const accounts = {
            ...accountList,
            [response.authorize.loginid]: {
                ...newRealAccount,
                token: $parameters.Token,
                email: response.authorize.email,
                session_start: new Date().getTime(),
                excluded_until: "",
                landing_company_name: response.authorize.landing_company_name,
                residence: response.authorize.country,
                balance: response.authorize.balance,
                accepted_bch: 0
            }
        }
        const activeLoginId = response.authorize.loginid

        let origin = `https://app.deriv.com`

        if (window.location.hostname !== "hub.deriv.com") {
            origin = `https://staging-app.deriv.com`
        }

        localStorage.setItem('client.accounts', JSON.stringify(accounts));
        localStorage.setItem('accountsList', JSON.stringify(accounts));

        const iframe = document.getElementById('localstorage-sync');
        if (iframe) {
            iframe?.contentWindow.postMessage({
                    key: 'client.accounts',
                    value: JSON.stringify(accounts),
                },
                origin
            );

            iframe?.contentWindow.postMessage({
                    key: 'active_loginid',
                    value: activeLoginId,
                },
                origin
            );
        }


        if (window.JSCookies) {
            // expiry time in minutes
            const inOneMinute = new Date(new Date().getTime() + 1 * 60 * 1000);

            JSCookies.set('client.accounts', JSON.stringify(accounts), {
                domain: ".deriv.com",
                expires: inOneMinute,
                secure: true
            })
            JSCookies.set('active_loginid', activeLoginId, {
                domain: ".deriv.com",
                expires: inOneMinute,
                secure: true
            })
        }

        setTimeout(() => {
            const hostname = window.location.hostname;
            if (hostname === "hub.deriv.com") {
                return window.location.href = `https://app.deriv.com/redirect?one_time_deposit=true`
            }
            return window.location.href = `https://staging-app.deriv.com/redirect?one_time_deposit=true`
        }, 100)



    };
});

define("tradershub.controller$NewAccountReal.NewAccountRealPayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const affiliate_token = getCookieValue('affiliate_tracking')

        function parseDateFromDDMMYYYY() {
            const [day, month, year] = String($parameters.DateOfBirth ?? "01/01/1999").split('/');

            // Return the date string in the format 'yyyy-mm-dd'
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
        }

        const payload = {
            new_account_real: 1,
            currency: $parameters.Currency,
            first_name: $parameters.FirstName,
            last_name: $parameters.LastName,
            date_of_birth: parseDateFromDDMMYYYY(),
            address_line_1: $parameters.Address,
            address_city: $parameters.City,
            address_state: $parameters.State,
            address_postcode: $parameters.PostCode,
            fatca_declaration: Number($parameters.FatcaDeclaration),
            residence: $parameters.Residence,
            non_pep_declaration: 1,
            citizen: $parameters.Citizen,
            phone: $parameters.Phone,
            place_of_birth: $parameters.PlaceOfBirth,
            account_opening_reason: $parameters.AccountOpeningReason,
            tnc_acceptance: 1
        }

        if (affiliate_token) {
            payload.affiliate_token = affiliate_token
        }

        if (!$parameters.SkippedEmploymentDetails) {
            payload.tax_residence = $parameters.TaxResidence;
            payload.tax_identification_number = $parameters.TIN;
        }

        Object.keys(payload).forEach(key => {
            if (typeof payload[key] === 'string') {
                payload[key] = payload[key].trim();
            }
            if (payload[key] === "") {
                delete payload[key];
            }
        });

        $parameters.Payload = JSON.stringify(payload)
    };
});


define("tradershub.controller$OnApplicationReady", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "tradershub.controller$OnApplicationReady.GetConfigJS", "tradershub.clientVariables", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$AddFavicon", "tradershub.controller$RudderstackIdentifyEvent", "tradershub.controller$InitGrowthbookAndRudderStack", "tradershub.controller$InitizalizeDerivApi"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIModel, OutSystemsUIController, tradershub_controller_OnApplicationReady_GetConfigJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.onApplicationReady$Action = function(callContext) {
        var model = this.model;
        var controller = this.controller;
        var idService = this.idService;
        return OS.Logger.startActiveSpan("OnApplicationReady", function(span) {
            if (span) {
                span.setAttribute("code.function", "OnApplicationReady");
                span.setAttribute("outsystems.function.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc.#OnApplicationReady");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "SYSTEM_EVENT");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var addFaviconVar = new OS.DataTypes.VariableHolder();
                var getConfigJSResult = new OS.DataTypes.VariableHolder();
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: AddFavicon
                    addFaviconVar.value = OutSystemsUIController.default.addFavicon$Action("/tradershub/favicon.png", callContext);

                    return OS.Logger.startActiveSpan("GetConfig", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "GetConfig");
                            span.setAttribute("outsystems.function.key", "e75ac88b-c8c0-48f9-92a5-db97155c7216");
                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteAsyncJSNode(tradershub_controller_OnApplicationReady_GetConfigJS, "GetConfig", "On Application Ready", {
                                URL: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                AppId: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.OnApplicationReady$getConfigJSResult"))();
                                jsNodeResult.uRLOut = OS.DataConversion.JSNodeParamConverter.from($parameters.URL, OS.DataTypes.DataTypes.Text);
                                jsNodeResult.appIdOut = OS.DataConversion.JSNodeParamConverter.from($parameters.AppId, OS.DataTypes.DataTypes.Text);
                                return jsNodeResult;
                            }, {}, {});
                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1).then(function(results) {
                        getConfigJSResult.value = results;
                    }).then(function() {
                        // AppId = GetConfig.AppId
                        tradershubClientVariables.setAppId(getConfigJSResult.value.appIdOut);
                        // URL = GetConfig.URL
                        tradershubClientVariables.setURL(getConfigJSResult.value.uRLOut);
                        // Execute Action: InitizalizeDerivApi
                        tradershubController.default.initizalizeDerivApi$Action(callContext);
                        // Execute Action: InitGrowthbookAndRudderStack
                        return tradershubController.default.initGrowthbookAndRudderStack$Action(callContext);
                    }).then(function() {
                        // Execute Action: RudderstackIdentifyEvent
                        tradershubController.default.rudderstackIdentifyEvent$Action("", callContext);
                        // Execute Action: RequireScriptLoadFonts
                        return OS.SystemActions.requireScript(OS.Navigation.VersionedURL.getVersionedUrl("scripts/tradershub.LoadFonts.js"), callContext);
                    }).then(function() {
                        // Execute Action: RequireScriptDatadog
                        return OS.SystemActions.requireScript(OS.Navigation.VersionedURL.getVersionedUrl("scripts/tradershub.DerivDatadog.js"), callContext);
                    }).then(function() {
                        // Execute Action: RequireScriptTrackJS
                        return OS.SystemActions.requireScript(OS.Navigation.VersionedURL.getVersionedUrl("scripts/tradershub.TrackJS.js"), callContext);
                    });
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 1);
    };
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.OnApplicationReady$getConfigJSResult", [{
        name: "URL",
        attrName: "uRLOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.onApplicationReady$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.onApplicationReady$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("tradershub.controller$OnApplicationReady.GetConfigJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        return new Promise(function($resolve, $reject) {
            const url = localStorage.getItem('config.server_url')
            const appid = localStorage.getItem('config.app_id')

            if (url && appid) {
                $parameters.URL = url;
                $parameters.AppId = appid;
            } else {
                $parameters.URL = "green.derivws.com";
                $parameters.AppId = location.hostname === "hub.deriv.com" ? "61554" : location.hostname.includes("dev-hub") ? "15438" : "53503";
            }

            $resolve()
        });
    };
});


define("tradershub.controller$PostCashierCrypto", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "tradershub.controller$PostCashierCrypto.ModifyDataJS", "tradershub.controller$PostCashierCrypto.PayloadJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "RESTAPIWebsocketOfficial.model$ST_2f46c6fecf81fe9d91763f789141eec9Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, tradershub_controller_PostCashierCrypto_ModifyDataJS, tradershub_controller_PostCashierCrypto_PayloadJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.postCashierCrypto$Action = function(cashierIn, callContext) {
        return OS.Logger.startActiveSpan("PostCashierCrypto", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostCashierCrypto");
                span.setAttribute("outsystems.function.key", "3061ec0b-8375-4676-bd2e-6a395f30ec72");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.PostCashierCrypto$vars"))());
                vars.value.cashierInLocal = cashierIn;
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var modifyDataJSResult = new OS.DataTypes.VariableHolder();
                var payloadJSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializeGetSettingsResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_2f46c6fecf81fe9d91763f789141eec9Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.PostCashierCrypto$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    payloadJSResult.value = OS.Logger.startActiveSpan("Payload", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "Payload");
                            span.setAttribute("outsystems.function.key", "8e79ae7b-fdc8-4052-b60c-ffedff1e967c");
                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteJSNode(tradershub_controller_PostCashierCrypto_PayloadJS, "Payload", "PostCashierCrypto", {
                                Cashier: OS.DataConversion.JSNodeParamConverter.to(vars.value.cashierInLocal, OS.DataTypes.DataTypes.Text),
                                Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.PostCashierCrypto$payloadJSResult"))();
                                jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                return jsNodeResult;
                            }, {}, {});
                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1);
                    // Execute Action: DerivApiSendMessage
                    return tradershubController.default.derivApiSendMessage$Action(payloadJSResult.value.payloadOut, "cashier", true, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    }).then(function() {
                        if ((derivApiSendMessageVar.value.isErrorOut)) {
                            // IsError = True
                            outVars.value.isErrorOut = true;
                        } else {
                            modifyDataJSResult.value = OS.Logger.startActiveSpan("ModifyData", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "ModifyData");
                                    span.setAttribute("outsystems.function.key", "7c70cf90-f94e-470b-97ba-b58962bb5b06");
                                    span.setAttribute("outsystems.function.owner.name", "tradershub");
                                    span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                }

                                try {
                                    return controller.safeExecuteJSNode(tradershub_controller_PostCashierCrypto_ModifyDataJS, "ModifyData", "PostCashierCrypto", {
                                        Data: OS.DataConversion.JSNodeParamConverter.to(derivApiSendMessageVar.value.responseOut, OS.DataTypes.DataTypes.Text),
                                        Response: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                    }, function($parameters) {
                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.PostCashierCrypto$modifyDataJSResult"))();
                                        jsNodeResult.responseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Response, OS.DataTypes.DataTypes.Text);
                                        return jsNodeResult;
                                    }, {}, {});
                                } finally {
                                    if (span) {
                                        span.end();
                                    }

                                }

                            }, 1);
                            // JSON Deserialize: JSONDeserializeGetSettingsResponse
                            jSONDeserializeGetSettingsResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(modifyDataJSResult.value.responseOut, RESTAPIWebsocketOfficialModel.ST_2f46c6fecf81fe9d91763f789141eec9Structure, false);
                            // Response = JSONDeserializeGetSettingsResponse.Data
                            outVars.value.responseOut = jSONDeserializeGetSettingsResponseVar.value.dataOut;
                        }

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
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.PostCashierCrypto$vars", [{
        name: "Cashier",
        attrName: "cashierInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "deposit";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.PostCashierCrypto$modifyDataJSResult", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.PostCashierCrypto$payloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.PostCashierCrypto$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_2f46c6fecf81fe9d91763f789141eec9Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_2f46c6fecf81fe9d91763f789141eec9Structure
    }, {
        name: "IsError",
        attrName: "isErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.clientActionProxies.postCashierCrypto$Action = function(cashierIn) {
        cashierIn = (cashierIn === undefined) ? "deposit" : cashierIn;
        return controller.executeActionInsideJSNode(tradershubController.default.postCashierCrypto$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(cashierIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                IsError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});

define("tradershub.controller$PostCashierCrypto.ModifyDataJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const data = JSON.parse($parameters.Data);

        $parameters.Response = JSON.stringify(data)

    };
});

define("tradershub.controller$PostCashierCrypto.PayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const payload = {
            "cashier": $parameters.Cashier,
            "provider": "crypto",
            "type": "api",
        }

        $parameters.Payload = JSON.stringify(payload);
    };
});


define("tradershub.controller$PostCashierFiat", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "tradershub.controller$PostCashierFiat.PayloadJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "RESTAPIWebsocketOfficial.model$ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, tradershub_controller_PostCashierFiat_PayloadJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.postCashierFiat$Action = function(cashierIn, callContext) {
        return OS.Logger.startActiveSpan("PostCashierFiat", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostCashierFiat");
                span.setAttribute("outsystems.function.key", "feb9f7d1-319e-4c2a-a44a-3da22288c570");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.PostCashierFiat$vars"))());
                vars.value.cashierInLocal = cashierIn;
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var payloadJSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializeGetSettingsResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.PostCashierFiat$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    payloadJSResult.value = OS.Logger.startActiveSpan("Payload", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "Payload");
                            span.setAttribute("outsystems.function.key", "1dce43d8-3a6b-4999-b802-35554769a553");
                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteJSNode(tradershub_controller_PostCashierFiat_PayloadJS, "Payload", "PostCashierFiat", {
                                Cashier: OS.DataConversion.JSNodeParamConverter.to(vars.value.cashierInLocal, OS.DataTypes.DataTypes.Text),
                                Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.PostCashierFiat$payloadJSResult"))();
                                jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                return jsNodeResult;
                            }, {}, {});
                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1);
                    // Execute Action: DerivApiSendMessage
                    return tradershubController.default.derivApiSendMessage$Action(payloadJSResult.value.payloadOut, "cashier", true, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    }).then(function() {
                        // JSON Deserialize: JSONDeserializeGetSettingsResponse
                        jSONDeserializeGetSettingsResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(derivApiSendMessageVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure, false);
                        // Response = JSONDeserializeGetSettingsResponse.Data
                        outVars.value.responseOut = jSONDeserializeGetSettingsResponseVar.value.dataOut;
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
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.PostCashierFiat$vars", [{
        name: "Cashier",
        attrName: "cashierInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "deposit";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.PostCashierFiat$payloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.PostCashierFiat$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure
    }]);
    tradershubController.default.clientActionProxies.postCashierFiat$Action = function(cashierIn) {
        cashierIn = (cashierIn === undefined) ? "deposit" : cashierIn;
        return controller.executeActionInsideJSNode(tradershubController.default.postCashierFiat$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(cashierIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut
            };
        });
    };
});

define("tradershub.controller$PostCashierFiat.PayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const payload = {
            "cashier": $parameters.Cashier,
            "provider": "doughflow"
        }

        $parameters.Payload = JSON.stringify(payload);
    };
});


define("tradershub.controller$PostSignupActions", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$PostSignupActions.AuthorizePayloadJS", "tradershub.controller$PostSignupActions.SetAccountSettingsPayloadJS", "tradershub.controller$PostSignupActions.GetIDVCountryJS", "tradershub.controller$PostSignupActions.SyncLocalStorageJS", "tradershub.controller$PostSignupActions.CheckLandingCompanyJS", "tradershub.clientVariables", "tradershub.controller$SetAccountSettings", "tradershub.controller$RudderstackIdentifyEvent", "tradershub.controller$DerivApiSendMessage", "tradershub.controller$CleanupAfterSignup", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_PostSignupActions_AuthorizePayloadJS, tradershub_controller_PostSignupActions_SetAccountSettingsPayloadJS, tradershub_controller_PostSignupActions_GetIDVCountryJS, tradershub_controller_PostSignupActions_SyncLocalStorageJS, tradershub_controller_PostSignupActions_CheckLandingCompanyJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.postSignupActions$Action = function(redirectToDerivAppIn, callContext) {
        return OS.Logger.startActiveSpan("PostSignupActions", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostSignupActions");
                span.setAttribute("outsystems.function.key", "3ad98d2f-6ab2-4c90-979b-0c5fd51945bf");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.PostSignupActions$vars"))());
                vars.value.redirectToDerivAppInLocal = redirectToDerivAppIn;
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var authorizePayloadJSResult = new OS.DataTypes.VariableHolder();
                var setAccountSettingsPayloadJSResult = new OS.DataTypes.VariableHolder();
                var getIDVCountryJSResult = new OS.DataTypes.VariableHolder();
                var checkLandingCompanyJSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializeAuthorizeResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_2b68b61da9b8f6db8463a60cc48350faStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.PostSignupActions$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CleanupAfterSignup
                    tradershubController.default.cleanupAfterSignup$Action(callContext);
                    authorizePayloadJSResult.value = OS.Logger.startActiveSpan("AuthorizePayload", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "AuthorizePayload");
                            span.setAttribute("outsystems.function.key", "13afd588-1954-4224-b0e7-0027c8897db4");
                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteJSNode(tradershub_controller_PostSignupActions_AuthorizePayloadJS, "AuthorizePayload", "PostSignupActions", {
                                AuthToken: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getAuthToken(), OS.DataTypes.DataTypes.Text),
                                Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.PostSignupActions$authorizePayloadJSResult"))();
                                jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                return jsNodeResult;
                            }, {}, {});
                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1);
                    // Execute Action: DerivApiSendMessage
                    return tradershubController.default.derivApiSendMessage$Action(authorizePayloadJSResult.value.payloadOut, "", false, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    }).then(function() {
                        // JSON Deserialize: JSONDeserializeAuthorizeResponse
                        jSONDeserializeAuthorizeResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(derivApiSendMessageVar.value.responseOut, tradershubModel.ST_2b68b61da9b8f6db8463a60cc48350faStructure, false);
                        // Execute Action: RudderstackIdentifyEvent
                        tradershubController.default.rudderstackIdentifyEvent$Action(OS.BuiltinFunctions.longIntegerToText(jSONDeserializeAuthorizeResponseVar.value.dataOut.authorizeAttr.user_idAttr), callContext);
                        checkLandingCompanyJSResult.value = OS.Logger.startActiveSpan("CheckLandingCompany", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "CheckLandingCompany");
                                span.setAttribute("outsystems.function.key", "ae4d93d6-d0d4-430c-9506-a777252df7d4");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                            }

                            try {
                                return controller.safeExecuteJSNode(tradershub_controller_PostSignupActions_CheckLandingCompanyJS, "CheckLandingCompany", "PostSignupActions", {
                                    Response: OS.DataConversion.JSNodeParamConverter.to(derivApiSendMessageVar.value.responseOut, OS.DataTypes.DataTypes.Text),
                                    IsEU: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                                }, function($parameters) {
                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.PostSignupActions$checkLandingCompanyJSResult"))();
                                    jsNodeResult.isEUOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsEU, OS.DataTypes.DataTypes.Boolean);
                                    return jsNodeResult;
                                }, {}, {});
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                        // IsEuUser = CheckLandingCompany.IsEU
                        tradershubClientVariables.setIsEuUser(checkLandingCompanyJSResult.value.isEUOut);
                        setAccountSettingsPayloadJSResult.value = OS.Logger.startActiveSpan("SetAccountSettingsPayload", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SetAccountSettingsPayload");
                                span.setAttribute("outsystems.function.key", "384afeea-b668-416a-9351-9223f20c1281");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                            }

                            try {
                                return controller.safeExecuteJSNode(tradershub_controller_PostSignupActions_SetAccountSettingsPayloadJS, "SetAccountSettingsPayload", "PostSignupActions", {
                                    Citizen: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getSelectedCitizenship(), OS.DataTypes.DataTypes.Text),
                                    Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                }, function($parameters) {
                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.PostSignupActions$setAccountSettingsPayloadJSResult"))();
                                    jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                    return jsNodeResult;
                                }, {}, {});
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                        // Execute Action: SetAccountSettings
                        return tradershubController.default.setAccountSettings$Action(setAccountSettingsPayloadJSResult.value.payloadOut, callContext);
                    }).then(function() {
                        OS.Logger.startActiveSpan("SyncLocalStorage", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SyncLocalStorage");
                                span.setAttribute("outsystems.function.key", "a1df1b67-e680-436e-b1b2-02f91d1441d8");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                            }

                            try {
                                return controller.safeExecuteJSNode(tradershub_controller_PostSignupActions_SyncLocalStorageJS, "SyncLocalStorage", "PostSignupActions", {
                                    RedirectToDerivApp: OS.DataConversion.JSNodeParamConverter.to(vars.value.redirectToDerivAppInLocal, OS.DataTypes.DataTypes.Boolean),
                                    IsEU: OS.DataConversion.JSNodeParamConverter.to(checkLandingCompanyJSResult.value.isEUOut, OS.DataTypes.DataTypes.Boolean),
                                    Token: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getAuthToken(), OS.DataTypes.DataTypes.Text),
                                    Response: OS.DataConversion.JSNodeParamConverter.to(derivApiSendMessageVar.value.responseOut, OS.DataTypes.DataTypes.Text)
                                }, function($parameters) {}, {}, {});
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                        getIDVCountryJSResult.value = OS.Logger.startActiveSpan("GetIDVCountry", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetIDVCountry");
                                span.setAttribute("outsystems.function.key", "a11001ce-bb5f-42d5-929e-056986b91a65");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                            }

                            try {
                                return controller.safeExecuteJSNode(tradershub_controller_PostSignupActions_GetIDVCountryJS, "GetIDVCountry", "PostSignupActions", {
                                    ResidenceList: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRawResidenceListResponse(), OS.DataTypes.DataTypes.Text),
                                    Residence: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getSelectedResidence(), OS.DataTypes.DataTypes.Text),
                                    IsIDVSupported: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                                }, function($parameters) {
                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.PostSignupActions$getIDVCountryJSResult"))();
                                    jsNodeResult.isIDVSupportedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsIDVSupported, OS.DataTypes.DataTypes.Boolean);
                                    return jsNodeResult;
                                }, {}, {});
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                        // RealSignupIsIDVSupported = GetIDVCountry.IsIDVSupported
                        tradershubClientVariables.setRealSignupIsIDVSupported(getIDVCountryJSResult.value.isIDVSupportedOut);
                        // IsEU = CheckLandingCompany.IsEU
                        outVars.value.isEUOut = checkLandingCompanyJSResult.value.isEUOut;
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
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.PostSignupActions$vars", [{
        name: "RedirectToDerivApp",
        attrName: "redirectToDerivAppInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.PostSignupActions$authorizePayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.PostSignupActions$setAccountSettingsPayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.PostSignupActions$getIDVCountryJSResult", [{
        name: "IsIDVSupported",
        attrName: "isIDVSupportedOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.PostSignupActions$checkLandingCompanyJSResult", [{
        name: "IsEU",
        attrName: "isEUOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.PostSignupActions$outVars", [{
        name: "IsEU",
        attrName: "isEUOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.clientActionProxies.postSignupActions$Action = function(redirectToDerivAppIn) {
        redirectToDerivAppIn = (redirectToDerivAppIn === undefined) ? false : redirectToDerivAppIn;
        return controller.executeActionInsideJSNode(tradershubController.default.postSignupActions$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(redirectToDerivAppIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                IsEU: OS.DataConversion.JSNodeParamConverter.to(actionResults.isEUOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});

define("tradershub.controller$PostSignupActions.AuthorizePayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Payload = JSON.stringify({
            authorize: $parameters.AuthToken
        })
    };
});

define("tradershub.controller$PostSignupActions.SetAccountSettingsPayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Payload = JSON.stringify({
            citizen: $parameters.Citizen
        })
    };
});

define("tradershub.controller$PostSignupActions.GetIDVCountryJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const country = JSON.parse($parameters.ResidenceList || JSON.stringify([])).residence_list.find(c => c.value == $parameters.Residence)

        $parameters.IsIDVSupported = Boolean(country?.identity?.services?.idv?.is_country_supported)
    };
});

define("tradershub.controller$PostSignupActions.SyncLocalStorageJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const response = JSON.parse($parameters.Response)

        const activeLoginId = response.authorize.loginid
        const accounts = {
            [activeLoginId]: {
                ...response.authorize.account_list[0],
                token: $parameters.Token,
                email: response.authorize.email,
                session_start: new Date().getTime(),
                excluded_until: "",
                landing_company_name: response.authorize.landing_company_name,
                residence: response.authorize.country,
                balance: response.authorize.balance,
                accepted_bch: 0
            }
        }

        let origin = `https://app.deriv.com`

        if (window.location.hostname !== "hub.deriv.com") {
            origin = `https://staging-app.deriv.com`
        }

        localStorage.setItem('client.accounts', JSON.stringify(accounts));
        localStorage.setItem('accountsList', JSON.stringify(accounts));


        const iframe = document.getElementById('localstorage-sync');
        if (iframe) {
            iframe?.contentWindow.postMessage({
                    key: 'client.accounts',
                    value: JSON.stringify(accounts),
                },
                origin
            );

            iframe?.contentWindow.postMessage({
                    key: 'active_loginid',
                    value: activeLoginId,
                },
                origin
            );
        }




        if (window.JSCookies) {
            // expiry time in minutes
            const inOneMinute = new Date(new Date().getTime() + 1 * 60 * 1000);

            JSCookies.set('client.accounts', JSON.stringify(accounts), {
                domain: ".deriv.com",
                expires: inOneMinute,
                secure: true
            })
            JSCookies.set('active_loginid', activeLoginId, {
                domain: ".deriv.com",
                expires: inOneMinute,
                secure: true
            })
        }


        if ($parameters.RedirectToDerivApp || $parameters.IsEU) {
            setTimeout(() => {
                const hostname = window.location.hostname;
                if (hostname === "hub.deriv.com") {
                    if ($parameters.IsEU) {
                        return window.location.href = `https://app.deriv.com/redirect?action=add_account_multiplier&ext_platform_url=https%3A%2F%2F${hostname}%2Ftradershub`
                    } else {
                        return window.location.href = `https://app.deriv.com/redirect?action=add_account&ext_platform_url=https%3A%2F%2F${hostname}%2Ftradershub`
                    }
                }

                if ($parameters.IsEU) {
                    window.location.href = `https://staging-app.deriv.com/redirect?action=add_account_multiplier&ext_platform_url=https%3A%2F%2F${window.location.hostname}%2Ftradershub`
                } else {
                    window.location.href = `https://staging-app.deriv.com/redirect?action=add_account&ext_platform_url=https%3A%2F%2F${window.location.hostname}%2Ftradershub`
                }
            }, 100)
        }


    };
});

define("tradershub.controller$PostSignupActions.CheckLandingCompanyJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const authorizeResponse = JSON.parse($parameters.Response)

        $parameters.IsEU = authorizeResponse.authorize.upgradeable_landing_companies.includes("maltainvest") && authorizeResponse.authorize.upgradeable_landing_companies.length === 1
    };
});


define("tradershub.controller$RedirectToExternalURL", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$RedirectToExternalURL.RedirectJS", "tradershub.clientVariables"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_RedirectToExternalURL_RedirectJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.redirectToExternalURL$Action = function(uRLIn, openInNewTabIn, callContext) {
        return OS.Logger.startActiveSpan("RedirectToExternalURL", function(span) {
            if (span) {
                span.setAttribute("code.function", "RedirectToExternalURL");
                span.setAttribute("outsystems.function.key", "d109cb8f-87ed-4036-a166-535e83c2c7b6");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.RedirectToExternalURL$vars"))());
                vars.value.uRLInLocal = uRLIn;
                vars.value.openInNewTabInLocal = openInNewTabIn;
                // Redirect the user to the given URL possibly in a new tab.
                OS.Logger.startActiveSpan("Redirect", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "Redirect");
                        span.setAttribute("outsystems.function.key", "91f79fef-b000-4488-8cd3-3793d40c806f");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(tradershub_controller_RedirectToExternalURL_RedirectJS, "Redirect", "RedirectToExternalURL", {
                            URL: OS.DataConversion.JSNodeParamConverter.to(vars.value.uRLInLocal, OS.DataTypes.DataTypes.Text),
                            OpenInNewTab: OS.DataConversion.JSNodeParamConverter.to(vars.value.openInNewTabInLocal, OS.DataTypes.DataTypes.Boolean)
                        }, function($parameters) {}, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.RedirectToExternalURL$vars", [{
        name: "URL",
        attrName: "uRLInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "OpenInNewTab",
        attrName: "openInNewTabInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.clientActionProxies.redirectToExternalURL$Action = function(uRLIn, openInNewTabIn) {
        uRLIn = (uRLIn === undefined) ? "" : uRLIn;
        openInNewTabIn = (openInNewTabIn === undefined) ? false : openInNewTabIn;
        return controller.executeActionInsideJSNode(tradershubController.default.redirectToExternalURL$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uRLIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(openInNewTabIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("tradershub.controller$RedirectToExternalURL.RedirectJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.OpenInNewTab ? window.open($parameters.URL, "_blank") : window.location.href = $parameters.URL
    };
});


define("tradershub.controller$RudderstackIdentifyEvent", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$RudderstackIdentifyEvent.JavaScript1JS", "tradershub.clientVariables"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_RudderstackIdentifyEvent_JavaScript1JS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.rudderstackIdentifyEvent$Action = function(userIdIn, callContext) {
        return OS.Logger.startActiveSpan("RudderstackIdentifyEvent", function(span) {
            if (span) {
                span.setAttribute("code.function", "RudderstackIdentifyEvent");
                span.setAttribute("outsystems.function.key", "fc638f56-ebf5-4d97-b98b-9c11fd8958b6");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.RudderstackIdentifyEvent$vars"))());
                vars.value.userIdInLocal = userIdIn;
                OS.Logger.startActiveSpan("JavaScript1", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "JavaScript1");
                        span.setAttribute("outsystems.function.key", "ba887a5d-7907-4a7f-8ec9-8f90c9fe5cda");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(tradershub_controller_RudderstackIdentifyEvent_JavaScript1JS, "JavaScript1", "RudderstackIdentifyEvent", {
                            UserId: OS.DataConversion.JSNodeParamConverter.to(vars.value.userIdInLocal, OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {}, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.RudderstackIdentifyEvent$vars", [{
        name: "UserId",
        attrName: "userIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.rudderstackIdentifyEvent$Action = function(userIdIn) {
        userIdIn = (userIdIn === undefined) ? "" : userIdIn;
        return controller.executeActionInsideJSNode(tradershubController.default.rudderstackIdentifyEvent$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(userIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("tradershub.controller$RudderstackIdentifyEvent.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const Analytics = window.Analytics?.Analytics

        if (Analytics) {
            Analytics.identifyEvent($parameters.UserId)
        }
    };
});


define("tradershub.controller$SendAuthorize", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$SendAuthorize.AuthorizePayloadJS", "tradershub.controller$SendAuthorize.SeAccountsListJS", "tradershub.clientVariables", "tradershub.controller$RudderstackIdentifyEvent", "tradershub.controller$DerivApiSendMessage", "tradershub.model$ST_52667a49e65b5175f66dacecb12f345fStructure", "tradershub.model$RL_93aac6f383f04a9d0a0e078d2dec0d9f", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_SendAuthorize_AuthorizePayloadJS, tradershub_controller_SendAuthorize_SeAccountsListJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.sendAuthorize$Action = function(setAccountsListIn, callContext) {
        return OS.Logger.startActiveSpan("SendAuthorize", function(span) {
            if (span) {
                span.setAttribute("code.function", "SendAuthorize");
                span.setAttribute("outsystems.function.key", "455be5e4-1117-4d84-99cc-decf8bfb75aa");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.SendAuthorize$vars"))());
                vars.value.setAccountsListInLocal = setAccountsListIn;
                var listFilterVar = new OS.DataTypes.VariableHolder();
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var authorizePayloadJSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializeAuthorizeResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_2b68b61da9b8f6db8463a60cc48350faStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.SendAuthorize$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    return OS.Flow.executeSequence(function() {
                        if ((!((tradershubClientVariables.getAuthToken() === OS.BuiltinFunctions.nullTextIdentifier())))) {
                            authorizePayloadJSResult.value = OS.Logger.startActiveSpan("AuthorizePayload", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "AuthorizePayload");
                                    span.setAttribute("outsystems.function.key", "595fd88c-7a31-4f7e-af15-bfcf1efff8ba");
                                    span.setAttribute("outsystems.function.owner.name", "tradershub");
                                    span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                }

                                try {
                                    return controller.safeExecuteJSNode(tradershub_controller_SendAuthorize_AuthorizePayloadJS, "AuthorizePayload", "SendAuthorize", {
                                        AuthToken: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getAuthToken(), OS.DataTypes.DataTypes.Text),
                                        Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                    }, function($parameters) {
                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.SendAuthorize$authorizePayloadJSResult"))();
                                        jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                        return jsNodeResult;
                                    }, {}, {});
                                } finally {
                                    if (span) {
                                        span.end();
                                    }

                                }

                            }, 1);
                            // Execute Action: DerivApiSendMessage
                            return tradershubController.default.derivApiSendMessage$Action(authorizePayloadJSResult.value.payloadOut, "authorize", false, callContext).then(function(value) {
                                derivApiSendMessageVar.value = value;
                            }).then(function() {
                                if ((derivApiSendMessageVar.value.isErrorOut)) {
                                    // IsError = DerivApiSendMessage.IsError
                                    outVars.value.isErrorOut = derivApiSendMessageVar.value.isErrorOut;
                                    // ErrorMessage = DerivApiSendMessage.ErrorMessage
                                    outVars.value.errorMessageOut = derivApiSendMessageVar.value.errorMessageOut;
                                    // AuthToken = NullTextIdentifier
                                    tradershubClientVariables.setAuthToken(OS.BuiltinFunctions.nullTextIdentifier());
                                    // ActiveLoginId = NullTextIdentifier
                                    tradershubClientVariables.setActiveLoginId(OS.BuiltinFunctions.nullTextIdentifier());
                                } else {
                                    // JSON Deserialize: JSONDeserializeAuthorizeResponse
                                    jSONDeserializeAuthorizeResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(derivApiSendMessageVar.value.responseOut, tradershubModel.ST_2b68b61da9b8f6db8463a60cc48350faStructure, false);
                                    // Execute Action: RudderstackIdentifyEvent
                                    tradershubController.default.rudderstackIdentifyEvent$Action(OS.BuiltinFunctions.longIntegerToText(jSONDeserializeAuthorizeResponseVar.value.dataOut.authorizeAttr.user_idAttr), callContext);
                                    // Execute Action: ListFilter
                                    listFilterVar.value = OS.SystemActions.listFilter(jSONDeserializeAuthorizeResponseVar.value.dataOut.authorizeAttr.account_listAttr, function(p) {
                                        return (p.is_disabledAttr === 0);
                                    }, callContext);

                                    // Response = JSONDeserializeAuthorizeResponse.Data
                                    outVars.value.responseOut = jSONDeserializeAuthorizeResponseVar.value.dataOut;
                                    // Response.Authorize.Account_list = ListFilter.FilteredList
                                    outVars.value.responseOut.authorizeAttr.account_listAttr = listFilterVar.value.filteredListOut;
                                    if ((vars.value.setAccountsListInLocal)) {
                                        OS.Logger.startActiveSpan("SeAccountsList", function(span) {
                                            if (span) {
                                                span.setAttribute("code.function", "SeAccountsList");
                                                span.setAttribute("outsystems.function.key", "f3f9ef33-e1b1-4b3f-8b64-1740df2d2164");
                                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                            }

                                            try {
                                                return controller.safeExecuteJSNode(tradershub_controller_SendAuthorize_SeAccountsListJS, "SeAccountsList", "SendAuthorize", {
                                                    AuthorizeResponse: OS.DataConversion.JSNodeParamConverter.to(derivApiSendMessageVar.value.responseOut, OS.DataTypes.DataTypes.Text)
                                                }, function($parameters) {}, {}, {});
                                            } finally {
                                                if (span) {
                                                    span.end();
                                                }

                                            }

                                        }, 1);
                                    }

                                }

                            });
                        }

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
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.SendAuthorize$vars", [{
        name: "SetAccountsList",
        attrName: "setAccountsListInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.SendAuthorize$authorizePayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.SendAuthorize$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new tradershubModel.ST_2b68b61da9b8f6db8463a60cc48350faStructure();
        },
        complexType: tradershubModel.ST_2b68b61da9b8f6db8463a60cc48350faStructure
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
    }]);
    tradershubController.default.clientActionProxies.sendAuthorize$Action = function(setAccountsListIn) {
        setAccountsListIn = (setAccountsListIn === undefined) ? false : setAccountsListIn;
        return controller.executeActionInsideJSNode(tradershubController.default.sendAuthorize$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(setAccountsListIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                IsError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isErrorOut, OS.DataTypes.DataTypes.Boolean),
                ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("tradershub.controller$SendAuthorize.AuthorizePayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Payload = JSON.stringify({
            authorize: $parameters.AuthToken
        })
    };
});

define("tradershub.controller$SendAuthorize.SeAccountsListJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const response = JSON.parse($parameters.AuthorizeResponse)
        const authAccountsList = response?.authorize?.account_list ?? []
        const accountTokens = JSON.parse(localStorage.getItem('accountsList'))

        const accountsList = {}

        authAccountsList.forEach(account => {
            if (account.is_disabled) return;
            accountsList[account.loginid] = Object.assign({}, account, {
                token: accountTokens[account.loginid]?.token ?? ""
            })
        })
        localStorage.setItem('accountsList', JSON.stringify(accountsList))
        localStorage.setItem('client.accounts', JSON.stringify(accountsList))

    };
});


define("tradershub.controller$SendGetSetting", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "tradershub.model$ST_34132650bf66478c56079f24e67e094cStructure", "tradershub.model$ST_bd2236af041a218c8fde06ca0065cfd9Structure"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.sendGetSetting$Action = function(callContext) {
        return OS.Logger.startActiveSpan("SendGetSetting", function(span) {
            if (span) {
                span.setAttribute("code.function", "SendGetSetting");
                span.setAttribute("outsystems.function.key", "5c009e7b-61f7-49d8-82fc-68203484a77c");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var jSONDeserializeGetSettingsResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_34132650bf66478c56079f24e67e094cStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.SendGetSetting$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: DerivApiSendMessage
                    return tradershubController.default.derivApiSendMessage$Action("", "get_settings", true, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    }).then(function() {
                        // JSON Deserialize: JSONDeserializeGetSettingsResponse
                        jSONDeserializeGetSettingsResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(derivApiSendMessageVar.value.responseOut, tradershubModel.ST_34132650bf66478c56079f24e67e094cStructure, false);
                        // GetSettingResponse = JSONDeserializeGetSettingsResponse.Data
                        outVars.value.getSettingResponseOut = OS.DataConversion.JSConversions.typeConvertRecord(jSONDeserializeGetSettingsResponseVar.value.dataOut, new tradershubModel.ST_bd2236af041a218c8fde06ca0065cfd9Structure(), function(source, target) {
                            target = source.get_settingsAttr;
                            return target;
                        });
                        // IsError = DerivApiSendMessage.IsError
                        outVars.value.isErrorOut = derivApiSendMessageVar.value.isErrorOut;
                        // ErrorCode = DerivApiSendMessage.ErrorCode
                        outVars.value.errorCodeOut = derivApiSendMessageVar.value.errorCodeOut;
                        // ErrorMessage = DerivApiSendMessage.ErrorMessage
                        outVars.value.errorMessageOut = derivApiSendMessageVar.value.errorMessageOut;
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
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.SendGetSetting$outVars", [{
        name: "GetSettingResponse",
        attrName: "getSettingResponseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new tradershubModel.ST_bd2236af041a218c8fde06ca0065cfd9Structure();
        },
        complexType: tradershubModel.ST_bd2236af041a218c8fde06ca0065cfd9Structure
    }, {
        name: "IsError",
        attrName: "isErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }, {
        name: "ErrorCode",
        attrName: "errorCodeOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "ErrorMessage",
        attrName: "errorMessageOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.sendGetSetting$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.sendGetSetting$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                GetSettingResponse: actionResults.getSettingResponseOut,
                IsError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isErrorOut, OS.DataTypes.DataTypes.Boolean),
                ErrorCode: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorCodeOut, OS.DataTypes.DataTypes.Text),
                ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});


define("tradershub.controller$SendIDVDocumentDetails", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$SendIDVDocumentDetails.IDVPayloadJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_SendIDVDocumentDetails_IDVPayloadJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.sendIDVDocumentDetails$Action = function(callContext) {
        return OS.Logger.startActiveSpan("SendIDVDocumentDetails", function(span) {
            if (span) {
                span.setAttribute("code.function", "SendIDVDocumentDetails");
                span.setAttribute("outsystems.function.key", "d6132fde-386e-457a-943b-1661a68800e3");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var iDVPayloadJSResult = new OS.DataTypes.VariableHolder();
                return OS.Flow.executeAsyncFlow(function() {
                    return OS.Flow.executeSequence(function() {
                        if (((tradershubClientVariables.getRealSignupIsIDVSupported() && !(tradershubClientVariables.getRealSignupSkippedIDV())))) {
                            iDVPayloadJSResult.value = OS.Logger.startActiveSpan("IDVPayload", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "IDVPayload");
                                    span.setAttribute("outsystems.function.key", "297f9739-be7a-49c5-b1de-95740e4b26ae");
                                    span.setAttribute("outsystems.function.owner.name", "tradershub");
                                    span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                }

                                try {
                                    return controller.safeExecuteJSNode(tradershub_controller_SendIDVDocumentDetails_IDVPayloadJS, "IDVPayload", "SendIDVDocumentDetails", {
                                        DocumentName: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupIDVDocumentName(), OS.DataTypes.DataTypes.Text),
                                        DocumentNumber: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupIDVDocumentNumber(), OS.DataTypes.DataTypes.Text),
                                        AdditionalDocumentNumber: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupIDVAdditionalDocumentNumber(), OS.DataTypes.DataTypes.Text),
                                        Citizen: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getSelectedCitizenship(), OS.DataTypes.DataTypes.Text),
                                        ResidenceList: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRawResidenceListResponse(), OS.DataTypes.DataTypes.Text),
                                        Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                    }, function($parameters) {
                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.SendIDVDocumentDetails$iDVPayloadJSResult"))();
                                        jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                        return jsNodeResult;
                                    }, {}, {});
                                } finally {
                                    if (span) {
                                        span.end();
                                    }

                                }

                            }, 1);
                            // Execute Action: DerivApiSendMessage
                            return tradershubController.default.derivApiSendMessage$Action(iDVPayloadJSResult.value.payloadOut, "identity_verification_document_add", true, callContext).then(function(value) {
                                derivApiSendMessageVar.value = value;
                            });
                        }

                    });
                }).then(function() {
                    return;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 1);
    };
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.SendIDVDocumentDetails$iDVPayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.sendIDVDocumentDetails$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.sendIDVDocumentDetails$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("tradershub.controller$SendIDVDocumentDetails.IDVPayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const supportedDocuments = JSON.parse($parameters.ResidenceList)?.residence_list?.find(c => c.value == $parameters.Citizen)?.identity?.services?.idv?.documents_supported ?? {}

        function findKeyByDisplayName(displayName) {
            for (const [key, value] of Object.entries(supportedDocuments)) {
                if (value.display_name === displayName ||
                    (value.additional && value.additional.display_name === displayName)) {
                    return key;
                }
            }
            return null; // Return null if no matching display_name is found
        }




        const payload = {
            "document_number": $parameters.DocumentNumber,
            "document_type": findKeyByDisplayName($parameters.DocumentName),
            "issuing_country": $parameters.Citizen,
        }

        if ($parameters.AdditionalDocumentNumber) {
            payload.document_additional = $parameters.AdditionalDocumentNumber
        }

        $parameters.Payload = JSON.stringify(payload)
    };
});


define("tradershub.controller$SendResidenceList", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.sendResidenceList$Action = function(authorizeIn, callContext) {
        return OS.Logger.startActiveSpan("SendResidenceList", function(span) {
            if (span) {
                span.setAttribute("code.function", "SendResidenceList");
                span.setAttribute("outsystems.function.key", "4c696ebb-bc26-4609-9f8a-ba5b6dec9873");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.SendResidenceList$vars"))());
                vars.value.authorizeInLocal = authorizeIn;
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.SendResidenceList$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: DerivApiSendMessage
                    return tradershubController.default.derivApiSendMessage$Action("", "residence_list", vars.value.authorizeInLocal, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    }).then(function() {
                        if ((!(derivApiSendMessageVar.value.isErrorOut))) {
                            // RawResidenceListResponse = DerivApiSendMessage.Response
                            tradershubClientVariables.setRawResidenceListResponse(derivApiSendMessageVar.value.responseOut);
                        }

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
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.SendResidenceList$vars", [{
        name: "Authorize",
        attrName: "authorizeInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.SendResidenceList$outVars", [{
        name: "ResidentListResponse",
        attrName: "residentListResponseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new tradershubModel.ST_1eac13b44db3d2db577291973f4a7e96Structure();
        },
        complexType: tradershubModel.ST_1eac13b44db3d2db577291973f4a7e96Structure
    }]);
    tradershubController.default.clientActionProxies.sendResidenceList$Action = function(authorizeIn) {
        authorizeIn = (authorizeIn === undefined) ? false : authorizeIn;
        return controller.executeActionInsideJSNode(tradershubController.default.sendResidenceList$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(authorizeIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                ResidentListResponse: actionResults.residentListResponseOut
            };
        });
    };
});


define("tradershub.controller$ServiceToken", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$ServiceToken.PayloadJS", "tradershub.controller$ServiceToken.ModifyDataJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_ServiceToken_PayloadJS, tradershub_controller_ServiceToken_ModifyDataJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.serviceToken$Action = function(callContext) {
        return OS.Logger.startActiveSpan("ServiceToken", function(span) {
            if (span) {
                span.setAttribute("code.function", "ServiceToken");
                span.setAttribute("outsystems.function.key", "3de37f07-95cf-48e2-add1-348f51dec94d");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var payloadJSResult = new OS.DataTypes.VariableHolder();
                var modifyDataJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.ServiceToken$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    payloadJSResult.value = OS.Logger.startActiveSpan("Payload", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "Payload");
                            span.setAttribute("outsystems.function.key", "88531467-6c34-4883-bf3b-ce2537800492");
                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteJSNode(tradershub_controller_ServiceToken_PayloadJS, "Payload", "ServiceToken", {
                                service: OS.DataConversion.JSNodeParamConverter.to("banxa", OS.DataTypes.DataTypes.Text),
                                Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.ServiceToken$payloadJSResult"))();
                                jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                return jsNodeResult;
                            }, {}, {});
                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1);
                    // Execute Action: DerivApiSendMessage
                    return tradershubController.default.derivApiSendMessage$Action(payloadJSResult.value.payloadOut, "service_token", true, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    }).then(function() {
                        modifyDataJSResult.value = OS.Logger.startActiveSpan("ModifyData", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ModifyData");
                                span.setAttribute("outsystems.function.key", "baab04ad-d514-40cc-93cb-20e7bdfa3f9c");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                            }

                            try {
                                return controller.safeExecuteJSNode(tradershub_controller_ServiceToken_ModifyDataJS, "ModifyData", "ServiceToken", {
                                    Data: OS.DataConversion.JSNodeParamConverter.to(derivApiSendMessageVar.value.responseOut, OS.DataTypes.DataTypes.Text),
                                    Response: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                }, function($parameters) {
                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.ServiceToken$modifyDataJSResult"))();
                                    jsNodeResult.responseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Response, OS.DataTypes.DataTypes.Text);
                                    return jsNodeResult;
                                }, {}, {});
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                        // Response = ModifyData.Response
                        outVars.value.responseOut = modifyDataJSResult.value.responseOut;
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
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.ServiceToken$payloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.ServiceToken$modifyDataJSResult", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.ServiceToken$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.serviceToken$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.serviceToken$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: OS.DataConversion.JSNodeParamConverter.to(actionResults.responseOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("tradershub.controller$ServiceToken.PayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const payload = {
            referrer: "https://app.deriv.com/cashier/on-ramp",
            service: $parameters.service
        }

        $parameters.Payload = JSON.stringify(payload);
    };
});

define("tradershub.controller$ServiceToken.ModifyDataJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const data = JSON.parse($parameters.Data);

        $parameters.Response = JSON.stringify(data)

    };
});


define("tradershub.controller$SetAccountSettings", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.setAccountSettings$Action = function(payloadIn, callContext) {
        return OS.Logger.startActiveSpan("SetAccountSettings", function(span) {
            if (span) {
                span.setAttribute("code.function", "SetAccountSettings");
                span.setAttribute("outsystems.function.key", "003c208d-6036-4c7a-8bd8-03fe9b246835");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.SetAccountSettings$vars"))());
                vars.value.payloadInLocal = payloadIn;
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: DerivApiSendMessage
                    return tradershubController.default.derivApiSendMessage$Action(vars.value.payloadInLocal, "set_settings", false, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    });
                }).then(function() {
                    return;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 1);
    };
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.SetAccountSettings$vars", [{
        name: "Payload",
        attrName: "payloadInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.setAccountSettings$Action = function(payloadIn) {
        payloadIn = (payloadIn === undefined) ? "" : payloadIn;
        return controller.executeActionInsideJSNode(tradershubController.default.setAccountSettings$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(payloadIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});


define("tradershub.controller$Statement", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "tradershub.controller$Statement.PayloadJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "RESTAPIWebsocketOfficial.model$ST_857e70f98678e5b68f53de5829bd685aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, tradershub_controller_Statement_PayloadJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.statement$Action = function(actionTypeIn, callContext) {
        return OS.Logger.startActiveSpan("Statement", function(span) {
            if (span) {
                span.setAttribute("code.function", "Statement");
                span.setAttribute("outsystems.function.key", "e69de0aa-df58-4553-8734-27f52cc8be2a");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.Statement$vars"))());
                vars.value.actionTypeInLocal = actionTypeIn;
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var payloadJSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializeGetSettingsResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_857e70f98678e5b68f53de5829bd685aStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.Statement$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    payloadJSResult.value = OS.Logger.startActiveSpan("Payload", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "Payload");
                            span.setAttribute("outsystems.function.key", "8f2379ca-0b56-4c42-9245-f85efb5f601e");
                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteJSNode(tradershub_controller_Statement_PayloadJS, "Payload", "Statement", {
                                ActionType: OS.DataConversion.JSNodeParamConverter.to(vars.value.actionTypeInLocal, OS.DataTypes.DataTypes.Text),
                                Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.Statement$payloadJSResult"))();
                                jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                return jsNodeResult;
                            }, {}, {});
                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1);
                    // Execute Action: DerivApiSendMessage
                    return tradershubController.default.derivApiSendMessage$Action(payloadJSResult.value.payloadOut, "statement", true, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    }).then(function() {
                        if ((derivApiSendMessageVar.value.isErrorOut)) {
                            // IsError = True
                            outVars.value.isErrorOut = true;
                        } else {
                            // JSON Deserialize: JSONDeserializeGetSettingsResponse
                            jSONDeserializeGetSettingsResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(derivApiSendMessageVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_857e70f98678e5b68f53de5829bd685aStructure, false);
                            // Response = JSONDeserializeGetSettingsResponse.Data
                            outVars.value.responseOut = jSONDeserializeGetSettingsResponseVar.value.dataOut;
                        }

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
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.Statement$vars", [{
        name: "ActionType",
        attrName: "actionTypeInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.Statement$payloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.Statement$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_857e70f98678e5b68f53de5829bd685aStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_857e70f98678e5b68f53de5829bd685aStructure
    }, {
        name: "IsError",
        attrName: "isErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.clientActionProxies.statement$Action = function(actionTypeIn) {
        actionTypeIn = (actionTypeIn === undefined) ? "" : actionTypeIn;
        return controller.executeActionInsideJSNode(tradershubController.default.statement$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(actionTypeIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                IsError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});

define("tradershub.controller$Statement.PayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const payload = $parameters.ActionType ? {
            action_type: $parameters.ActionType,
            description: 1
        } : {
            description: 1
        };

        $parameters.Payload = JSON.stringify(payload);
    };
});


define("tradershub.controller$SyncAccountInfo", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$SyncAccountInfo.SyncLocalStorageJS", "tradershub.clientVariables"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_SyncAccountInfo_SyncLocalStorageJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.syncAccountInfo$Action = function(callContext) {
        return OS.Logger.startActiveSpan("SyncAccountInfo", function(span) {
            if (span) {
                span.setAttribute("code.function", "SyncAccountInfo");
                span.setAttribute("outsystems.function.key", "4f9700a2-fd8c-4f80-86d5-acfe5b6a40ec");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                OS.Logger.startActiveSpan("SyncLocalStorage", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SyncLocalStorage");
                        span.setAttribute("outsystems.function.key", "7703b8db-e711-48ef-a5ac-5582f694d3f4");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(tradershub_controller_SyncAccountInfo_SyncLocalStorageJS, "SyncLocalStorage", "SyncAccountInfo", {
                            ActiveLoginId: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getActiveLoginId(), OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {}, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = tradershubController.default;
    tradershubController.default.clientActionProxies.syncAccountInfo$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.syncAccountInfo$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("tradershub.controller$SyncAccountInfo.SyncLocalStorageJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        let origin = `https://app.deriv.com`

        if (window.location.hostname !== "hub.deriv.com") {
            origin = `https://staging-app.deriv.com`
        }

        const iframe = document.getElementById('localstorage-sync');
        if (iframe) {
            iframe?.contentWindow.postMessage({
                    key: 'client.accounts',
                    value: localStorage.getItem('client.accounts'),
                },
                origin
            );

            iframe?.contentWindow.postMessage({
                    key: 'active_loginid',
                    value: $parameters.ActiveLoginId,
                },
                origin
            );
        }


        if (window.JSCookies) {
            // expiry time in minutes
            const inOneMinute = new Date(new Date().getTime() + 1 * 60 * 1000);

            JSCookies.set('client.accounts', localStorage.getItem('client.accounts'), {
                domain: ".deriv.com",
                expires: inOneMinute,
                secure: true
            })
            JSCookies.set('active_loginid', $parameters.ActiveLoginId, {
                domain: ".deriv.com",
                expires: inOneMinute,
                secure: true
            })
        }

        setTimeout(() => {
            const hostname = window.location.hostname;
            if (hostname === "hub.deriv.com") {
                return window.location.href = `https://app.deriv.com/redirect`
            }

            window.location.href = `https://staging-app.deriv.com/redirect`
        }, 100)


    };
});


define("tradershub.controller$TopupVirtualAccount", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.topupVirtualAccount$Action = function(callContext) {
        return OS.Logger.startActiveSpan("TopupVirtualAccount", function(span) {
            if (span) {
                span.setAttribute("code.function", "TopupVirtualAccount");
                span.setAttribute("outsystems.function.key", "3a19e4cc-4945-41e3-a476-eb239c4e6e99");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: DerivApiSendMessage
                    return tradershubController.default.derivApiSendMessage$Action("", "topup_virtual", false, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    }).then(function() {
                        if ((derivApiSendMessageVar.value.isErrorOut)) {
                            OS.FeedbackMessageService.showFeedbackMessage("You\'ve reset your demo account balance to USD 10,000.", /*Success*/ 1);
                        }

                    });
                }).then(function() {
                    return;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 1);
    };
    var controller = tradershubController.default;
    tradershubController.default.clientActionProxies.topupVirtualAccount$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.topupVirtualAccount$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});


define("tradershub.controller$TradingPlatformAccounts", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "tradershub.controller$TradingPlatformAccounts.PayloadJS", "tradershub.controller$TradingPlatformAccounts.OutputJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "RESTAPIWebsocketOfficial.model$ST_75725e65d106c1568a850780233a08baStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, tradershub_controller_TradingPlatformAccounts_PayloadJS, tradershub_controller_TradingPlatformAccounts_OutputJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.tradingPlatformAccounts$Action = function(platformIn, authorizeIn, callContext) {
        return OS.Logger.startActiveSpan("TradingPlatformAccounts", function(span) {
            if (span) {
                span.setAttribute("code.function", "TradingPlatformAccounts");
                span.setAttribute("outsystems.function.key", "3598ac36-5f0e-4fca-b0ec-7dfbab53058d");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.TradingPlatformAccounts$vars"))());
                vars.value.platformInLocal = platformIn;
                vars.value.authorizeInLocal = authorizeIn;
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var payloadJSResult = new OS.DataTypes.VariableHolder();
                var outputJSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_75725e65d106c1568a850780233a08baStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.TradingPlatformAccounts$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    payloadJSResult.value = OS.Logger.startActiveSpan("Payload", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "Payload");
                            span.setAttribute("outsystems.function.key", "248a6fac-34ec-40a6-a09a-7eb43261f6f3");
                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteJSNode(tradershub_controller_TradingPlatformAccounts_PayloadJS, "Payload", "TradingPlatformAccounts", {
                                platform: OS.DataConversion.JSNodeParamConverter.to(vars.value.platformInLocal, OS.DataTypes.DataTypes.Text),
                                Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.TradingPlatformAccounts$payloadJSResult"))();
                                jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                return jsNodeResult;
                            }, {}, {});
                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1);
                    // Execute Action: DerivApiSendMessage
                    return tradershubController.default.derivApiSendMessage$Action(payloadJSResult.value.payloadOut, "trading_platform_accounts", vars.value.authorizeInLocal, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    }).then(function() {
                        if ((!(derivApiSendMessageVar.value.isErrorOut))) {
                            outputJSResult.value = OS.Logger.startActiveSpan("Output", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "Output");
                                    span.setAttribute("outsystems.function.key", "874fb566-2e00-4657-adc6-86359826ac84");
                                    span.setAttribute("outsystems.function.owner.name", "tradershub");
                                    span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                }

                                try {
                                    return controller.safeExecuteJSNode(tradershub_controller_TradingPlatformAccounts_OutputJS, "Output", "TradingPlatformAccounts", {
                                        Data: OS.DataConversion.JSNodeParamConverter.to(derivApiSendMessageVar.value.responseOut, OS.DataTypes.DataTypes.Text),
                                        Response: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                    }, function($parameters) {
                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.TradingPlatformAccounts$outputJSResult"))();
                                        jsNodeResult.responseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Response, OS.DataTypes.DataTypes.Text);
                                        return jsNodeResult;
                                    }, {}, {});
                                } finally {
                                    if (span) {
                                        span.end();
                                    }

                                }

                            }, 1);
                            // JSON Deserialize: JSONDeserialize
                            jSONDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(outputJSResult.value.responseOut, RESTAPIWebsocketOfficialModel.ST_75725e65d106c1568a850780233a08baStructure, false);
                            // Response = JSONDeserialize.Data
                            outVars.value.responseOut = jSONDeserializeVar.value.dataOut;
                        }

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
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.TradingPlatformAccounts$vars", [{
        name: "Platform",
        attrName: "platformInLocal",
        mandatory: true,
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
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.TradingPlatformAccounts$payloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.TradingPlatformAccounts$outputJSResult", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.TradingPlatformAccounts$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_75725e65d106c1568a850780233a08baStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_75725e65d106c1568a850780233a08baStructure
    }]);
    tradershubController.default.clientActionProxies.tradingPlatformAccounts$Action = function(platformIn, authorizeIn) {
        platformIn = (platformIn === undefined) ? "" : platformIn;
        authorizeIn = (authorizeIn === undefined) ? false : authorizeIn;
        return controller.executeActionInsideJSNode(tradershubController.default.tradingPlatformAccounts$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(platformIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authorizeIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut
            };
        });
    };
});

define("tradershub.controller$TradingPlatformAccounts.PayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const payload = {
            "platform": $parameters.platform,
        }

        $parameters.Payload = JSON.stringify(payload);

    };
});

define("tradershub.controller$TradingPlatformAccounts.OutputJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const data = JSON.parse($parameters.Data);

        $parameters.Response = JSON.stringify(data)

    };
});


define("tradershub.controller$TradingPlatformProductListing", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$TradingPlatformProductListing.TradingPlatformPayloadJS", "tradershub.controller$TradingPlatformProductListing.ModifyDataJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "tradershub.model$ST_43e221b4a9439e2ea71501e5244dde34Structure"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_TradingPlatformProductListing_TradingPlatformPayloadJS, tradershub_controller_TradingPlatformProductListing_ModifyDataJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.tradingPlatformProductListing$Action = function(callContext) {
        return OS.Logger.startActiveSpan("TradingPlatformProductListing", function(span) {
            if (span) {
                span.setAttribute("code.function", "TradingPlatformProductListing");
                span.setAttribute("outsystems.function.key", "7a57ee9e-a715-4b64-9e4e-14523f23e4e7");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var tradingPlatformPayloadJSResult = new OS.DataTypes.VariableHolder();
                var modifyDataJSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializeTradingPlatformProductListingResponVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_43e221b4a9439e2ea71501e5244dde34Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.TradingPlatformProductListing$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    tradingPlatformPayloadJSResult.value = OS.Logger.startActiveSpan("TradingPlatformPayload", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "TradingPlatformPayload");
                            span.setAttribute("outsystems.function.key", "1dfe2961-e737-4b94-b007-6c107a5f4912");
                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteJSNode(tradershub_controller_TradingPlatformProductListing_TradingPlatformPayloadJS, "TradingPlatformPayload", "TradingPlatformProductListing", {
                                ClientCountry: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getClientCountry(), OS.DataTypes.DataTypes.Text),
                                TempClientCountry: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getTempClientCountry(), OS.DataTypes.DataTypes.Text),
                                Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.TradingPlatformProductListing$tradingPlatformPayloadJSResult"))();
                                jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                return jsNodeResult;
                            }, {}, {});
                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1);
                    // Execute Action: DerivApiSendMessage
                    return tradershubController.default.derivApiSendMessage$Action(tradingPlatformPayloadJSResult.value.payloadOut, "trading_platform_product_listing", false, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    }).then(function() {
                        if ((!(derivApiSendMessageVar.value.isErrorOut))) {
                            modifyDataJSResult.value = OS.Logger.startActiveSpan("ModifyData", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "ModifyData");
                                    span.setAttribute("outsystems.function.key", "9c5be832-2cf3-4a33-996d-b3a8e2bf6ef3");
                                    span.setAttribute("outsystems.function.owner.name", "tradershub");
                                    span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                }

                                try {
                                    return controller.safeExecuteJSNode(tradershub_controller_TradingPlatformProductListing_ModifyDataJS, "ModifyData", "TradingPlatformProductListing", {
                                        Data: OS.DataConversion.JSNodeParamConverter.to(derivApiSendMessageVar.value.responseOut, OS.DataTypes.DataTypes.Text),
                                        Response: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                    }, function($parameters) {
                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.TradingPlatformProductListing$modifyDataJSResult"))();
                                        jsNodeResult.responseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Response, OS.DataTypes.DataTypes.Text);
                                        return jsNodeResult;
                                    }, {}, {});
                                } finally {
                                    if (span) {
                                        span.end();
                                    }

                                }

                            }, 1);
                            // JSON Deserialize: JSONDeserializeTradingPlatformProductListingRespon
                            jSONDeserializeTradingPlatformProductListingResponVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(modifyDataJSResult.value.responseOut, tradershubModel.ST_43e221b4a9439e2ea71501e5244dde34Structure, false);
                            // Response = JSONDeserializeTradingPlatformProductListingRespon.Data
                            outVars.value.responseOut = jSONDeserializeTradingPlatformProductListingResponVar.value.dataOut;
                        }

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
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.TradingPlatformProductListing$tradingPlatformPayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.TradingPlatformProductListing$modifyDataJSResult", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.TradingPlatformProductListing$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new tradershubModel.ST_43e221b4a9439e2ea71501e5244dde34Structure();
        },
        complexType: tradershubModel.ST_43e221b4a9439e2ea71501e5244dde34Structure
    }]);
    tradershubController.default.clientActionProxies.tradingPlatformProductListing$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.tradingPlatformProductListing$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut
            };
        });
    };
});

define("tradershub.controller$TradingPlatformProductListing.TradingPlatformPayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const payload = {
            "country_code": $parameters.TempClientCountry ? $parameters.TempClientCountry : $parameters.ClientCountry,
            "app_id": [30767, 19111, 22168, 23789],
            "query": ["name", "available_markets", "available_trade_types"]
        }

        $parameters.Payload = JSON.stringify(payload);

    };
});

define("tradershub.controller$TradingPlatformProductListing.ModifyDataJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const data = JSON.parse($parameters.Data);
        const tradingPlatformProductListing = data?.trading_platform_product_listing;

        const DTraderData = tradingPlatformProductListing['30767'];
        const DBotData = tradingPlatformProductListing['19111'];
        const SmartTraderData = tradingPlatformProductListing['22168'];
        const DerivGoData = tradingPlatformProductListing['23789'];

        $parameters.Response = JSON.stringify({
            ShouldShowDBot: Boolean(DBotData?.name),
            ShouldShowSmartTrader: Boolean(SmartTraderData?.name),
            ShouldShowDerivGo: Boolean(DerivGoData?.name),
            ShouldShowDTrader: Boolean(DTraderData?.name),
            DTraderAvailableTradeTypes: DTraderData.available_trade_types,
            IsTradingAllowed: Boolean(DerivGoData?.name) || Boolean(DTraderData?.name) || Boolean(DBotData?.name) || Boolean(SmartTraderData?.name)
        })

    };
});


define("tradershub.controller$VerifyEmail", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "tradershub.controller$VerifyEmail.VerifyEmailPayloadJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "RESTAPIWebsocketOfficial.model$ST_b5532fbd5672db40752d556a46e96eaeStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, tradershub_controller_VerifyEmail_VerifyEmailPayloadJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.verifyEmail$Action = function(typeIn, userEmailIn, callContext) {
        return OS.Logger.startActiveSpan("VerifyEmail", function(span) {
            if (span) {
                span.setAttribute("code.function", "VerifyEmail");
                span.setAttribute("outsystems.function.key", "0ecaa83f-a500-4b3e-955a-83512e461f11");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.VerifyEmail$vars"))());
                vars.value.typeInLocal = typeIn;
                vars.value.userEmailInLocal = userEmailIn;
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var verifyEmailPayloadJSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializePostVerifyEmailResponse2Var = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_b5532fbd5672db40752d556a46e96eaeStructure))());
                var jSONDeserializePostVerifyEmailResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_b5532fbd5672db40752d556a46e96eaeStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.VerifyEmail$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    verifyEmailPayloadJSResult.value = OS.Logger.startActiveSpan("VerifyEmailPayload", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "VerifyEmailPayload");
                            span.setAttribute("outsystems.function.key", "fdadca14-7a7e-4da4-a2cd-8ece16702e2c");
                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteJSNode(tradershub_controller_VerifyEmail_VerifyEmailPayloadJS, "VerifyEmailPayload", "VerifyEmail", {
                                Type: OS.DataConversion.JSNodeParamConverter.to(vars.value.typeInLocal, OS.DataTypes.DataTypes.Text),
                                UserEmail: OS.DataConversion.JSNodeParamConverter.to(vars.value.userEmailInLocal, OS.DataTypes.DataTypes.Email),
                                Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.VerifyEmail$verifyEmailPayloadJSResult"))();
                                jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                return jsNodeResult;
                            }, {}, {});
                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1);
                    // Execute Action: DerivApiSendMessage
                    return tradershubController.default.derivApiSendMessage$Action(verifyEmailPayloadJSResult.value.payloadOut, "verify_email", false, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    }).then(function() {
                        if ((derivApiSendMessageVar.value.isErrorOut)) {
                            // JSON Deserialize: JSONDeserializePostVerifyEmailResponse2
                            jSONDeserializePostVerifyEmailResponse2Var.value.dataOut = OS.JSONUtils.deserializeFromJSON(derivApiSendMessageVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_b5532fbd5672db40752d556a46e96eaeStructure, false);
                            // Response = JSONDeserializePostVerifyEmailResponse2.Data
                            outVars.value.responseOut = jSONDeserializePostVerifyEmailResponse2Var.value.dataOut;
                            // IsError = DerivApiSendMessage.IsError
                            outVars.value.isErrorOut = derivApiSendMessageVar.value.isErrorOut;
                        } else {
                            // JSON Deserialize: JSONDeserializePostVerifyEmailResponse
                            jSONDeserializePostVerifyEmailResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(derivApiSendMessageVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_b5532fbd5672db40752d556a46e96eaeStructure, false);
                            // Response = JSONDeserializePostVerifyEmailResponse.Data
                            outVars.value.responseOut = jSONDeserializePostVerifyEmailResponseVar.value.dataOut;
                        }

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
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.VerifyEmail$vars", [{
        name: "Type",
        attrName: "typeInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "UserEmail",
        attrName: "userEmailInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Email,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.VerifyEmail$verifyEmailPayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.VerifyEmail$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_b5532fbd5672db40752d556a46e96eaeStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_b5532fbd5672db40752d556a46e96eaeStructure
    }, {
        name: "IsError",
        attrName: "isErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.clientActionProxies.verifyEmail$Action = function(typeIn, userEmailIn) {
        typeIn = (typeIn === undefined) ? "" : typeIn;
        userEmailIn = (userEmailIn === undefined) ? "" : userEmailIn;
        return controller.executeActionInsideJSNode(tradershubController.default.verifyEmail$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(typeIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(userEmailIn, OS.DataTypes.DataTypes.Email)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                IsError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});

define("tradershub.controller$VerifyEmail.VerifyEmailPayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Payload = JSON.stringify({
            verify_email: $parameters.UserEmail,
            type: $parameters.Type,
        })

    };
});


define("tradershub.controller", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function(exports, OSRuntimeCore, tradershubModel) {
    var OS = OSRuntimeCore;
    var tradershubController = exports;
    class Controller extends
    OS.Controller.BaseModuleController {
        constructor(model, messagesProvider, idService, translationResources) {
            super(model, messagesProvider, idService, translationResources);
            this.registerOnApplicationReadyHandler("tradershub.controller$OnApplicationReady", "onApplicationReady$Action");
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

        checktradershubRole$Action(callContext) {
            var outVars = new OS.SystemStructures.HasRoleResultRec();
            outVars.hasRoleOut = OS.Authorization.hasRole({
                roleKey: this.roles.tradershub.roleKey
            });
            return outVars;

        }


        get roles() {
            if (!(this.hasOwnProperty("_roles"))) {
                this._roles = {
                    tradershub: {
                        roleKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc.ab2a6b39-1f30-4f20-a069-cf5d18b076f4",
                        roleException: new OS.Exceptions.Exceptions.NotRegisteredException("tradershub.Nottradershub", "tradershub role required")
                    }
                };
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
            return tradershubController.default.defaultTimeout;
        }

    }

    tradershubController.default = new Controller();
});