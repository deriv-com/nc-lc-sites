define("tradershub.controller$AvailableCTraderAccounts", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.clientVariables", "tradershub.model$EN_951592e59194625ab2f46e72a884ba99EntityRecord", "tradershub.model$RL_f704dd0f97cbebb5d4f4586f373fbb9b", "tradershub.controller$TradingPlatformAvailableAccounts2"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.availableCTraderAccounts$Action = function(cFDAccountsIn, callContext) {
        return OS.Logger.startActiveSpan("AvailableCTraderAccounts", function(span) {
            if (span) {
                span.setAttribute("code.function", "AvailableCTraderAccounts");
                span.setAttribute("outsystems.function.key", "33c4c7dd-25b5-42e0-b3eb-9ea48a4309fb");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.AvailableCTraderAccounts$vars"))());
                vars.value.cFDAccountsInLocal = cFDAccountsIn.clone();
                var tradingPlatformAvailableAccounts2Var = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.AvailableCTraderAccounts$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: TradingPlatformAvailableAccounts2
                    return tradershubController.default.tradingPlatformAvailableAccounts2$Action("ctrader", vars.value.cFDAccountsInLocal, callContext).then(function(value) {
                        tradingPlatformAvailableAccounts2Var.value = value;
                    }).then(function() {
                        // Response = TradingPlatformAvailableAccounts2.Response
                        outVars.value.responseOut = tradingPlatformAvailableAccounts2Var.value.responseOut;
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
    tradershubController.default.constructor.registerVariableGroupType("tradershub.AvailableCTraderAccounts$vars", [{
        name: "CFDAccounts",
        attrName: "cFDAccountsInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.RecordList,
        defaultValue: function() {
            return new tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b();
        },
        complexType: tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.AvailableCTraderAccounts$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.availableCTraderAccounts$Action = function(cFDAccountsIn) {
        cFDAccountsIn = (cFDAccountsIn === undefined) ? new tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b() : cFDAccountsIn;
        return controller.executeActionInsideJSNode(tradershubController.default.availableCTraderAccounts$Action.bind(controller, cFDAccountsIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: OS.DataConversion.JSNodeParamConverter.to(actionResults.responseOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});


define("tradershub.controller$AvailableDxtradeAccounts", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.clientVariables", "tradershub.model$EN_951592e59194625ab2f46e72a884ba99EntityRecord", "tradershub.model$RL_f704dd0f97cbebb5d4f4586f373fbb9b", "tradershub.controller$TradingPlatformAvailableAccounts2"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.availableDxtradeAccounts$Action = function(cFDAccountsIn, callContext) {
        return OS.Logger.startActiveSpan("AvailableDxtradeAccounts", function(span) {
            if (span) {
                span.setAttribute("code.function", "AvailableDxtradeAccounts");
                span.setAttribute("outsystems.function.key", "4c03482c-3d22-4905-b21f-714d9b06d281");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.AvailableDxtradeAccounts$vars"))());
                vars.value.cFDAccountsInLocal = cFDAccountsIn.clone();
                var tradingPlatformAvailableAccounts2Var = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.AvailableDxtradeAccounts$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: TradingPlatformAvailableAccounts2
                    return tradershubController.default.tradingPlatformAvailableAccounts2$Action("dxtrade", vars.value.cFDAccountsInLocal, callContext).then(function(value) {
                        tradingPlatformAvailableAccounts2Var.value = value;
                    }).then(function() {
                        // Response = TradingPlatformAvailableAccounts2.Response
                        outVars.value.responseOut = tradingPlatformAvailableAccounts2Var.value.responseOut;
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
    tradershubController.default.constructor.registerVariableGroupType("tradershub.AvailableDxtradeAccounts$vars", [{
        name: "CFDAccounts",
        attrName: "cFDAccountsInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.RecordList,
        defaultValue: function() {
            return new tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b();
        },
        complexType: tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.AvailableDxtradeAccounts$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.availableDxtradeAccounts$Action = function(cFDAccountsIn) {
        cFDAccountsIn = (cFDAccountsIn === undefined) ? new tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b() : cFDAccountsIn;
        return controller.executeActionInsideJSNode(tradershubController.default.availableDxtradeAccounts$Action.bind(controller, cFDAccountsIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: OS.DataConversion.JSNodeParamConverter.to(actionResults.responseOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});


define("tradershub.controller$AvailableMT5Accounts", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.clientVariables", "tradershub.model$EN_951592e59194625ab2f46e72a884ba99EntityRecord", "tradershub.model$RL_f704dd0f97cbebb5d4f4586f373fbb9b", "tradershub.controller$TradingPlatformAvailableAccounts2"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.availableMT5Accounts$Action = function(cFDAccountsIn, callContext) {
        return OS.Logger.startActiveSpan("AvailableMT5Accounts", function(span) {
            if (span) {
                span.setAttribute("code.function", "AvailableMT5Accounts");
                span.setAttribute("outsystems.function.key", "0231342f-f86b-4a7c-a5fb-779590765537");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.AvailableMT5Accounts$vars"))());
                vars.value.cFDAccountsInLocal = cFDAccountsIn.clone();
                var tradingPlatformAvailableAccounts2Var = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.AvailableMT5Accounts$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: TradingPlatformAvailableAccounts2
                    return tradershubController.default.tradingPlatformAvailableAccounts2$Action("mt5", vars.value.cFDAccountsInLocal, callContext).then(function(value) {
                        tradingPlatformAvailableAccounts2Var.value = value;
                    }).then(function() {
                        // Response = TradingPlatformAvailableAccounts2.Response
                        outVars.value.responseOut = tradingPlatformAvailableAccounts2Var.value.responseOut;
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
    tradershubController.default.constructor.registerVariableGroupType("tradershub.AvailableMT5Accounts$vars", [{
        name: "CFDAccounts",
        attrName: "cFDAccountsInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.RecordList,
        defaultValue: function() {
            return new tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b();
        },
        complexType: tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.AvailableMT5Accounts$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.availableMT5Accounts$Action = function(cFDAccountsIn) {
        cFDAccountsIn = (cFDAccountsIn === undefined) ? new tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b() : cFDAccountsIn;
        return controller.executeActionInsideJSNode(tradershubController.default.availableMT5Accounts$Action.bind(controller, cFDAccountsIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: OS.DataConversion.JSNodeParamConverter.to(actionResults.responseOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});


define("tradershub.controller$CheckEUTrackingCookies", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$CheckEUTrackingCookies.CheckCookiesJS", "tradershub.clientVariables"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_CheckEUTrackingCookies_CheckCookiesJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.checkEUTrackingCookies$Action = function(callContext) {
        return OS.Logger.startActiveSpan("CheckEUTrackingCookies", function(span) {
            if (span) {
                span.setAttribute("code.function", "CheckEUTrackingCookies");
                span.setAttribute("outsystems.function.key", "bc91dfbd-09b4-4843-9256-02fb73eec6d9");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var checkCookiesJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.CheckEUTrackingCookies$outVars"))());
                checkCookiesJSResult.value = OS.Logger.startActiveSpan("CheckCookies", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "CheckCookies");
                        span.setAttribute("outsystems.function.key", "fba30719-c99c-4de1-af24-672c85b7b011");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(tradershub_controller_CheckEUTrackingCookies_CheckCookiesJS, "CheckCookies", "CheckEUTrackingCookies", {
                            IsAvailable: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                        }, function($parameters) {
                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.CheckEUTrackingCookies$checkCookiesJSResult"))();
                            jsNodeResult.isAvailableOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsAvailable, OS.DataTypes.DataTypes.Boolean);
                            return jsNodeResult;
                        }, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                // IsAvailable = CheckCookies.IsAvailable
                outVars.value.isAvailableOut = checkCookiesJSResult.value.isAvailableOut;
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.CheckEUTrackingCookies$checkCookiesJSResult", [{
        name: "IsAvailable",
        attrName: "isAvailableOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.CheckEUTrackingCookies$outVars", [{
        name: "IsAvailable",
        attrName: "isAvailableOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.clientActionProxies.checkEUTrackingCookies$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.checkEUTrackingCookies$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                IsAvailable: OS.DataConversion.JSNodeParamConverter.to(actionResults.isAvailableOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});

define("tradershub.controller$CheckEUTrackingCookies.CheckCookiesJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.IsAvailable = window?.JSCookies?.get("tracking_status") != undefined
    };
});


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
                // RealSignupNoTaxInformation = False
                tradershubClientVariables.setRealSignupNoTaxInformation(false);
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
                // Action = NullTextIdentifier
                tradershubClientVariables.setAction(OS.BuiltinFunctions.nullTextIdentifier());
                // Code = NullTextIdentifier
                tradershubClientVariables.setCode(OS.BuiltinFunctions.nullTextIdentifier());
                // SignupEmail = NullTextIdentifier
                tradershubClientVariables.setSignupEmail(OS.BuiltinFunctions.nullTextIdentifier());
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


define("tradershub.controller$CombineAvailableAccounts", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$CombineAvailableAccounts.CombineListJS", "tradershub.clientVariables", "tradershub.model$ST_872baf372e9fd7dec6105127915f0c6fStructure", "tradershub.model$RL_c5ae9e9ecf45b4babee4b8a8438d3faa"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_CombineAvailableAccounts_CombineListJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.combineAvailableAccounts$Action = function(mT5AccountsIn, cTraderAccountsIn, dXTradeAccountsIn, callContext) {
        return OS.Logger.startActiveSpan("CombineAvailableAccounts", function(span) {
            if (span) {
                span.setAttribute("code.function", "CombineAvailableAccounts");
                span.setAttribute("outsystems.function.key", "fab9c125-264b-4eeb-8520-efbfd7bc6f8e");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.CombineAvailableAccounts$vars"))());
                vars.value.mT5AccountsInLocal = mT5AccountsIn.clone();
                vars.value.cTraderAccountsInLocal = cTraderAccountsIn.clone();
                vars.value.dXTradeAccountsInLocal = dXTradeAccountsIn.clone();
                var combineListJSResult = new OS.DataTypes.VariableHolder();
                var jSONSerializeMT5Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var jSONSerializeCTraderVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var jSONSerializeDXTradeVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var jSONDeserializeCombinedListVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.CombineAvailableAccounts$outVars"))());
                // JSON Serialize: JSONSerializeMT5
                jSONSerializeMT5Var.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.mT5AccountsInLocal, false, false);
                // JSON Serialize: JSONSerializeCTrader
                jSONSerializeCTraderVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.cTraderAccountsInLocal, false, false);
                // JSON Serialize: JSONSerializeDXTrade
                jSONSerializeDXTradeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.dXTradeAccountsInLocal, false, false);
                combineListJSResult.value = OS.Logger.startActiveSpan("CombineList", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "CombineList");
                        span.setAttribute("outsystems.function.key", "2e874911-3220-424f-810b-34f63579e762");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(tradershub_controller_CombineAvailableAccounts_CombineListJS, "CombineList", "CombineAvailableAccounts", {
                            MT5Accounts: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeMT5Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
                            DXTradeAccounts: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeDXTradeVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                            CTraderAccounts: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeCTraderVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                            CombinedList: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {
                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.CombineAvailableAccounts$combineListJSResult"))();
                            jsNodeResult.combinedListOut = OS.DataConversion.JSNodeParamConverter.from($parameters.CombinedList, OS.DataTypes.DataTypes.Text);
                            return jsNodeResult;
                        }, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                // JSON Deserialize: JSONDeserializeCombinedList
                jSONDeserializeCombinedListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(combineListJSResult.value.combinedListOut, tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa, false);
                // CombinedList = JSONDeserializeCombinedList.Data
                outVars.value.combinedListOut = jSONDeserializeCombinedListVar.value.dataOut;
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.CombineAvailableAccounts$vars", [{
        name: "MT5Accounts",
        attrName: "mT5AccountsInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.RecordList,
        defaultValue: function() {
            return new tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa();
        },
        complexType: tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa
    }, {
        name: "CTraderAccounts",
        attrName: "cTraderAccountsInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.RecordList,
        defaultValue: function() {
            return new tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa();
        },
        complexType: tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa
    }, {
        name: "DXTradeAccounts",
        attrName: "dXTradeAccountsInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.RecordList,
        defaultValue: function() {
            return new tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa();
        },
        complexType: tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.CombineAvailableAccounts$combineListJSResult", [{
        name: "CombinedList",
        attrName: "combinedListOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.CombineAvailableAccounts$outVars", [{
        name: "CombinedList",
        attrName: "combinedListOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.RecordList,
        defaultValue: function() {
            return new tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa();
        },
        complexType: tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa
    }]);
    tradershubController.default.clientActionProxies.combineAvailableAccounts$Action = function(mT5AccountsIn, cTraderAccountsIn, dXTradeAccountsIn) {
        mT5AccountsIn = (mT5AccountsIn === undefined) ? new tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa() : mT5AccountsIn;
        cTraderAccountsIn = (cTraderAccountsIn === undefined) ? new tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa() : cTraderAccountsIn;
        dXTradeAccountsIn = (dXTradeAccountsIn === undefined) ? new tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa() : dXTradeAccountsIn;
        return controller.executeActionInsideJSNode(tradershubController.default.combineAvailableAccounts$Action.bind(controller, mT5AccountsIn, cTraderAccountsIn, dXTradeAccountsIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                CombinedList: actionResults.combinedListOut
            };
        });
    };
});

define("tradershub.controller$CombineAvailableAccounts.CombineListJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const mt5Accounts = JSON.parse($parameters.MT5Accounts);
        const cTraderAccounts = JSON.parse($parameters.CTraderAccounts);
        const dXTradeAccounts = JSON.parse($parameters.DXTradeAccounts);

        $parameters.CombinedList = JSON.stringify([...mt5Accounts, ...cTraderAccounts, ...dXTradeAccounts]);

    };
});


define("tradershub.controller$CombineCreatedAccounts", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$CombineCreatedAccounts.CombineListJS", "tradershub.clientVariables", "tradershub.model$ST_148480cbe068b64f08f2cd9823941166Structure", "tradershub.model$RL_e90069e21a2026ded56bf74f4fa37235"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_CombineCreatedAccounts_CombineListJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.combineCreatedAccounts$Action = function(mT5AccountsIn, cTraderAccountsIn, dXTradeAccountsIn, callContext) {
        return OS.Logger.startActiveSpan("CombineCreatedAccounts", function(span) {
            if (span) {
                span.setAttribute("code.function", "CombineCreatedAccounts");
                span.setAttribute("outsystems.function.key", "2b644053-a8b7-4b62-9f83-d85867ad9988");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.CombineCreatedAccounts$vars"))());
                vars.value.mT5AccountsInLocal = mT5AccountsIn.clone();
                vars.value.cTraderAccountsInLocal = cTraderAccountsIn.clone();
                vars.value.dXTradeAccountsInLocal = dXTradeAccountsIn.clone();
                var combineListJSResult = new OS.DataTypes.VariableHolder();
                var jSONSerializeCTraderVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var jSONSerializeMT5Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var jSONSerializeDXTradeVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var jSONDeserializeCombinedListVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_e90069e21a2026ded56bf74f4fa37235))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.CombineCreatedAccounts$outVars"))());
                // JSON Serialize: JSONSerializeMT5
                jSONSerializeMT5Var.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.mT5AccountsInLocal, false, false);
                // JSON Serialize: JSONSerializeCTrader
                jSONSerializeCTraderVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.cTraderAccountsInLocal, false, false);
                // JSON Serialize: JSONSerializeDXTrade
                jSONSerializeDXTradeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.dXTradeAccountsInLocal, false, false);
                combineListJSResult.value = OS.Logger.startActiveSpan("CombineList", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "CombineList");
                        span.setAttribute("outsystems.function.key", "803b8c94-ffe7-431d-b345-238ae78ac61b");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(tradershub_controller_CombineCreatedAccounts_CombineListJS, "CombineList", "CombineCreatedAccounts", {
                            CTraderAccounts: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeCTraderVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                            MT5Accounts: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeMT5Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
                            DXTradeAccounts: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeDXTradeVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                            CombinedList: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {
                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.CombineCreatedAccounts$combineListJSResult"))();
                            jsNodeResult.combinedListOut = OS.DataConversion.JSNodeParamConverter.from($parameters.CombinedList, OS.DataTypes.DataTypes.Text);
                            return jsNodeResult;
                        }, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                // JSON Deserialize: JSONDeserializeCombinedList
                jSONDeserializeCombinedListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(combineListJSResult.value.combinedListOut, tradershubModel.RL_e90069e21a2026ded56bf74f4fa37235, false);
                // CombinedList = JSONDeserializeCombinedList.Data
                outVars.value.combinedListOut = jSONDeserializeCombinedListVar.value.dataOut;
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.CombineCreatedAccounts$vars", [{
        name: "MT5Accounts",
        attrName: "mT5AccountsInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.RecordList,
        defaultValue: function() {
            return new tradershubModel.RL_e90069e21a2026ded56bf74f4fa37235();
        },
        complexType: tradershubModel.RL_e90069e21a2026ded56bf74f4fa37235
    }, {
        name: "CTraderAccounts",
        attrName: "cTraderAccountsInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.RecordList,
        defaultValue: function() {
            return new tradershubModel.RL_e90069e21a2026ded56bf74f4fa37235();
        },
        complexType: tradershubModel.RL_e90069e21a2026ded56bf74f4fa37235
    }, {
        name: "DXTradeAccounts",
        attrName: "dXTradeAccountsInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.RecordList,
        defaultValue: function() {
            return new tradershubModel.RL_e90069e21a2026ded56bf74f4fa37235();
        },
        complexType: tradershubModel.RL_e90069e21a2026ded56bf74f4fa37235
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.CombineCreatedAccounts$combineListJSResult", [{
        name: "CombinedList",
        attrName: "combinedListOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.CombineCreatedAccounts$outVars", [{
        name: "CombinedList",
        attrName: "combinedListOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.RecordList,
        defaultValue: function() {
            return new tradershubModel.RL_e90069e21a2026ded56bf74f4fa37235();
        },
        complexType: tradershubModel.RL_e90069e21a2026ded56bf74f4fa37235
    }]);
    tradershubController.default.clientActionProxies.combineCreatedAccounts$Action = function(mT5AccountsIn, cTraderAccountsIn, dXTradeAccountsIn) {
        mT5AccountsIn = (mT5AccountsIn === undefined) ? new tradershubModel.RL_e90069e21a2026ded56bf74f4fa37235() : mT5AccountsIn;
        cTraderAccountsIn = (cTraderAccountsIn === undefined) ? new tradershubModel.RL_e90069e21a2026ded56bf74f4fa37235() : cTraderAccountsIn;
        dXTradeAccountsIn = (dXTradeAccountsIn === undefined) ? new tradershubModel.RL_e90069e21a2026ded56bf74f4fa37235() : dXTradeAccountsIn;
        return controller.executeActionInsideJSNode(tradershubController.default.combineCreatedAccounts$Action.bind(controller, mT5AccountsIn, cTraderAccountsIn, dXTradeAccountsIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                CombinedList: actionResults.combinedListOut
            };
        });
    };
});

define("tradershub.controller$CombineCreatedAccounts.CombineListJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const mt5Accounts = JSON.parse($parameters.MT5Accounts);
        const cTraderAccounts = JSON.parse($parameters.CTraderAccounts);
        const dXTradeAccounts = JSON.parse($parameters.DXTradeAccounts);

        const combinedList = [
            ...mt5Accounts,
            ...(cTraderAccounts.length > 0 ? [cTraderAccounts[0]] : []),
            ...dXTradeAccounts
        ];

        $parameters.CombinedList = JSON.stringify(combinedList);

    };
});


define("tradershub.controller$CreatedCTraderAccounts", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "SharedUtilities.controller", "tradershub.controller$CreatedCTraderAccounts.GenerateTotalBalanceJS", "tradershub.clientVariables", "tradershub.model$EN_951592e59194625ab2f46e72a884ba99EntityRecord", "tradershub.model$RL_f704dd0f97cbebb5d4f4586f373fbb9b", "tradershub.controller$TradingPlatformAccounts", "SharedUtilities.controller$FormatMoney", "tradershub.referencesHealth", "tradershub.referencesHealth$SharedUtilities"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, SharedUtilitiesController, tradershub_controller_CreatedCTraderAccounts_GenerateTotalBalanceJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.createdCTraderAccounts$Action = function(cFDAccountsIn, accountTypeIn, callContext) {
        return OS.Logger.startActiveSpan("CreatedCTraderAccounts", function(span) {
            if (span) {
                span.setAttribute("code.function", "CreatedCTraderAccounts");
                span.setAttribute("outsystems.function.key", "26f22670-3998-48de-b1f3-a7dce1554fbd");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.CreatedCTraderAccounts$vars"))());
                vars.value.cFDAccountsInLocal = cFDAccountsIn.clone();
                vars.value.accountTypeInLocal = accountTypeIn;
                var tradingPlatformAccountsVar = new OS.DataTypes.VariableHolder();
                var generateTotalBalanceJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.CreatedCTraderAccounts$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: TradingPlatformAccounts
                    return tradershubController.default.tradingPlatformAccounts$Action("ctrader", vars.value.cFDAccountsInLocal, vars.value.accountTypeInLocal, callContext).then(function(value) {
                        tradingPlatformAccountsVar.value = value;
                    }).then(function() {
                        generateTotalBalanceJSResult.value = OS.Logger.startActiveSpan("GenerateTotalBalance", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GenerateTotalBalance");
                                span.setAttribute("outsystems.function.key", "eb2d545f-b6f4-4703-a7b3-c6a0b63e0e51");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                            }

                            try {
                                return controller.safeExecuteJSNode(tradershub_controller_CreatedCTraderAccounts_GenerateTotalBalanceJS, "GenerateTotalBalance", "CreatedCTraderAccounts", {
                                    Data: OS.DataConversion.JSNodeParamConverter.to(tradingPlatformAccountsVar.value.responseOut, OS.DataTypes.DataTypes.Text),
                                    TotalBalance: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                }, function($parameters) {
                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.CreatedCTraderAccounts$generateTotalBalanceJSResult"))();
                                    jsNodeResult.totalBalanceOut = OS.DataConversion.JSNodeParamConverter.from($parameters.TotalBalance, OS.DataTypes.DataTypes.Text);
                                    return jsNodeResult;
                                }, {
                                    FormatMoney: SharedUtilitiesController.default.clientActionProxies.formatMoney$Action
                                }, {});
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                        // Response = TradingPlatformAccounts.Response
                        outVars.value.responseOut = tradingPlatformAccountsVar.value.responseOut;
                        // TotalCTraderBalance = GenerateTotalBalance.TotalBalance
                        outVars.value.totalCTraderBalanceOut = generateTotalBalanceJSResult.value.totalBalanceOut;
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
    tradershubController.default.constructor.registerVariableGroupType("tradershub.CreatedCTraderAccounts$vars", [{
        name: "CFDAccounts",
        attrName: "cFDAccountsInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.RecordList,
        defaultValue: function() {
            return new tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b();
        },
        complexType: tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b
    }, {
        name: "AccountType",
        attrName: "accountTypeInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.CreatedCTraderAccounts$generateTotalBalanceJSResult", [{
        name: "TotalBalance",
        attrName: "totalBalanceOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.CreatedCTraderAccounts$outVars", [{
        name: "TotalCTraderBalance",
        attrName: "totalCTraderBalanceOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.createdCTraderAccounts$Action = function(cFDAccountsIn, accountTypeIn) {
        cFDAccountsIn = (cFDAccountsIn === undefined) ? new tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b() : cFDAccountsIn;
        accountTypeIn = (accountTypeIn === undefined) ? "" : accountTypeIn;
        return controller.executeActionInsideJSNode(tradershubController.default.createdCTraderAccounts$Action.bind(controller, cFDAccountsIn, OS.DataConversion.JSNodeParamConverter.from(accountTypeIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                TotalCTraderBalance: OS.DataConversion.JSNodeParamConverter.to(actionResults.totalCTraderBalanceOut, OS.DataTypes.DataTypes.Text),
                Response: OS.DataConversion.JSNodeParamConverter.to(actionResults.responseOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("tradershub.controller$CreatedCTraderAccounts.GenerateTotalBalanceJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const data = JSON.parse($parameters.Data);
        let totalBalance = 0;
        let currency;

        data?.map(account => {
            if (account.account_type === 'real') {
                totalBalance += account.balance;
            } else {
                totalBalance = account.balance;
            }

            currency = account.currency;
        });

        const formatTotalBalance = $actions.FormatMoney(totalBalance, currency)?.FormattedNumber;

        $parameters.TotalBalance = `${formatTotalBalance} ${currency}`;

    };
});


define("tradershub.controller$CreatedDxTradeAccounts", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.clientVariables", "tradershub.model$EN_951592e59194625ab2f46e72a884ba99EntityRecord", "tradershub.model$RL_f704dd0f97cbebb5d4f4586f373fbb9b", "tradershub.controller$TradingPlatformAccounts"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.createdDxTradeAccounts$Action = function(cFDAccountsIn, accountTypeIn, callContext) {
        return OS.Logger.startActiveSpan("CreatedDxTradeAccounts", function(span) {
            if (span) {
                span.setAttribute("code.function", "CreatedDxTradeAccounts");
                span.setAttribute("outsystems.function.key", "6586794d-2ea8-4ba0-a3dd-57c4a80f6374");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.CreatedDxTradeAccounts$vars"))());
                vars.value.cFDAccountsInLocal = cFDAccountsIn.clone();
                vars.value.accountTypeInLocal = accountTypeIn;
                var tradingPlatformAccountsVar = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.CreatedDxTradeAccounts$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: TradingPlatformAccounts
                    return tradershubController.default.tradingPlatformAccounts$Action("dxtrade", vars.value.cFDAccountsInLocal, vars.value.accountTypeInLocal, callContext).then(function(value) {
                        tradingPlatformAccountsVar.value = value;
                    }).then(function() {
                        // Response = TradingPlatformAccounts.Response
                        outVars.value.responseOut = tradingPlatformAccountsVar.value.responseOut;
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
    tradershubController.default.constructor.registerVariableGroupType("tradershub.CreatedDxTradeAccounts$vars", [{
        name: "CFDAccounts",
        attrName: "cFDAccountsInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.RecordList,
        defaultValue: function() {
            return new tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b();
        },
        complexType: tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b
    }, {
        name: "AccountType",
        attrName: "accountTypeInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.CreatedDxTradeAccounts$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.createdDxTradeAccounts$Action = function(cFDAccountsIn, accountTypeIn) {
        cFDAccountsIn = (cFDAccountsIn === undefined) ? new tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b() : cFDAccountsIn;
        accountTypeIn = (accountTypeIn === undefined) ? "" : accountTypeIn;
        return controller.executeActionInsideJSNode(tradershubController.default.createdDxTradeAccounts$Action.bind(controller, cFDAccountsIn, OS.DataConversion.JSNodeParamConverter.from(accountTypeIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: OS.DataConversion.JSNodeParamConverter.to(actionResults.responseOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});


define("tradershub.controller$CreatedMT5Accounts", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$CreatedMT5Accounts.ModifyDataJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "tradershub.model$EN_951592e59194625ab2f46e72a884ba99EntityRecord", "tradershub.model$RL_f704dd0f97cbebb5d4f4586f373fbb9b"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_CreatedMT5Accounts_ModifyDataJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.createdMT5Accounts$Action = function(cFDAccountsIn, accountTypeIn, callContext) {
        return OS.Logger.startActiveSpan("CreatedMT5Accounts", function(span) {
            if (span) {
                span.setAttribute("code.function", "CreatedMT5Accounts");
                span.setAttribute("outsystems.function.key", "4fe3eef6-9fc1-4afd-8a7a-53033d9e2ee7");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.CreatedMT5Accounts$vars"))());
                vars.value.cFDAccountsInLocal = cFDAccountsIn.clone();
                vars.value.accountTypeInLocal = accountTypeIn;
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var modifyDataJSResult = new OS.DataTypes.VariableHolder();
                var jSONSerializeCFDAccountsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.CreatedMT5Accounts$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: DerivApiSendMessage
                    return tradershubController.default.derivApiSendMessage$Action("", "mt5_login_list", true, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    }).then(function() {
                        if ((derivApiSendMessageVar.value.isErrorOut)) {
                            OS.FeedbackMessageService.showFeedbackMessage(derivApiSendMessageVar.value.errorMessageOut, /*Error*/ 3);
                        } else {
                            // JSON Serialize: JSONSerializeCFDAccounts
                            jSONSerializeCFDAccountsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.cFDAccountsInLocal, false, false);
                            modifyDataJSResult.value = OS.Logger.startActiveSpan("ModifyData", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "ModifyData");
                                    span.setAttribute("outsystems.function.key", "f54523fc-9574-4b91-8430-f974868e8e17");
                                    span.setAttribute("outsystems.function.owner.name", "tradershub");
                                    span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                }

                                try {
                                    return controller.safeExecuteJSNode(tradershub_controller_CreatedMT5Accounts_ModifyDataJS, "ModifyData", "CreatedMT5Accounts", {
                                        CFDAccounts: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeCFDAccountsVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                        Data: OS.DataConversion.JSNodeParamConverter.to(derivApiSendMessageVar.value.responseOut, OS.DataTypes.DataTypes.Text),
                                        DemoAccounts: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                        RealAccounts: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                    }, function($parameters) {
                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.CreatedMT5Accounts$modifyDataJSResult"))();
                                        jsNodeResult.demoAccountsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DemoAccounts, OS.DataTypes.DataTypes.Text);
                                        jsNodeResult.realAccountsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.RealAccounts, OS.DataTypes.DataTypes.Text);
                                        return jsNodeResult;
                                    }, {}, {});
                                } finally {
                                    if (span) {
                                        span.end();
                                    }

                                }

                            }, 1);
                            // IsDemoAccount
                            if (((vars.value.accountTypeInLocal === "demo"))) {
                                // Response = ModifyData.DemoAccounts
                                outVars.value.responseOut = modifyDataJSResult.value.demoAccountsOut;
                            } else {
                                // Response = ModifyData.RealAccounts
                                outVars.value.responseOut = modifyDataJSResult.value.realAccountsOut;
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
    tradershubController.default.constructor.registerVariableGroupType("tradershub.CreatedMT5Accounts$vars", [{
        name: "CFDAccounts",
        attrName: "cFDAccountsInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.RecordList,
        defaultValue: function() {
            return new tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b();
        },
        complexType: tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b
    }, {
        name: "AccountType",
        attrName: "accountTypeInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.CreatedMT5Accounts$modifyDataJSResult", [{
        name: "DemoAccounts",
        attrName: "demoAccountsOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "RealAccounts",
        attrName: "realAccountsOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.CreatedMT5Accounts$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.createdMT5Accounts$Action = function(cFDAccountsIn, accountTypeIn) {
        cFDAccountsIn = (cFDAccountsIn === undefined) ? new tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b() : cFDAccountsIn;
        accountTypeIn = (accountTypeIn === undefined) ? "" : accountTypeIn;
        return controller.executeActionInsideJSNode(tradershubController.default.createdMT5Accounts$Action.bind(controller, cFDAccountsIn, OS.DataConversion.JSNodeParamConverter.from(accountTypeIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: OS.DataConversion.JSNodeParamConverter.to(actionResults.responseOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("tradershub.controller$CreatedMT5Accounts.ModifyDataJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const data = JSON.parse($parameters.Data);
        const mt5LoginList = data?.mt5_login_list || [];
        const cfdAccounts = JSON.parse($parameters.CFDAccounts) || [];

        const filteredAccounts = mt5LoginList?.map(account => {
            const identifier = `mt5_${account.product || 'standard'}`;
            const matchedConfig = cfdAccounts.find(config => config.ProductIdentifier === identifier) || {};

            return {
                ...account,
                identifier,
                icon: matchedConfig.Icon || '',
                label: matchedConfig.Label || '',
                description: matchedConfig.Description || ''
            };
        });

        const demoAccounts = filteredAccounts.filter(({
            account_type
        }) => account_type === 'demo');
        const realAccounts = filteredAccounts.filter(({
            account_type
        }) => account_type === 'real');

        $parameters.DemoAccounts = JSON.stringify(demoAccounts);
        $parameters.RealAccounts = JSON.stringify(realAccounts);

    };
});


define("tradershub.controller$CryptoConfig", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.cryptoConfig$Action = function(callContext) {
        return OS.Logger.startActiveSpan("CryptoConfig", function(span) {
            if (span) {
                span.setAttribute("code.function", "CryptoConfig");
                span.setAttribute("outsystems.function.key", "fa3ae9fc-f75c-4e0b-b22b-86b64d9c61a9");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.CryptoConfig$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: DerivApiSendMessage
                    return tradershubController.default.derivApiSendMessage$Action("", "crypto_config", true, callContext).then(function(value) {
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
    tradershubController.default.constructor.registerVariableGroupType("tradershub.CryptoConfig$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.cryptoConfig$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.cryptoConfig$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: OS.DataConversion.JSNodeParamConverter.to(actionResults.responseOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});


define("tradershub.controller$CryptoEstimations", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$CryptoEstimations.PayloadJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_CryptoEstimations_PayloadJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.cryptoEstimations$Action = function(currencyIn, callContext) {
        return OS.Logger.startActiveSpan("CryptoEstimations", function(span) {
            if (span) {
                span.setAttribute("code.function", "CryptoEstimations");
                span.setAttribute("outsystems.function.key", "cf1b3298-82d8-4e52-bd22-9c58a434b6e1");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.CryptoEstimations$vars"))());
                vars.value.currencyInLocal = currencyIn;
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var payloadJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.CryptoEstimations$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    payloadJSResult.value = OS.Logger.startActiveSpan("Payload", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "Payload");
                            span.setAttribute("outsystems.function.key", "b3c5e1f9-ba5d-4337-9179-de5254965b74");
                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteJSNode(tradershub_controller_CryptoEstimations_PayloadJS, "Payload", "CryptoEstimations", {
                                Currency: OS.DataConversion.JSNodeParamConverter.to(vars.value.currencyInLocal, OS.DataTypes.DataTypes.Text),
                                Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.CryptoEstimations$payloadJSResult"))();
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
                    return tradershubController.default.derivApiSendMessage$Action(payloadJSResult.value.payloadOut, "crypto_estimations", true, callContext).then(function(value) {
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
    tradershubController.default.constructor.registerVariableGroupType("tradershub.CryptoEstimations$vars", [{
        name: "Currency",
        attrName: "currencyInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.CryptoEstimations$payloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.CryptoEstimations$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.cryptoEstimations$Action = function(currencyIn) {
        currencyIn = (currencyIn === undefined) ? "" : currencyIn;
        return controller.executeActionInsideJSNode(tradershubController.default.cryptoEstimations$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(currencyIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: OS.DataConversion.JSNodeParamConverter.to(actionResults.responseOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("tradershub.controller$CryptoEstimations.PayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Payload = JSON.stringify({
            currency_code: $parameters.Currency
        });

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


define("tradershub.controller$ExchangeRates", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$ExchangeRates.PayloadJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_ExchangeRates_PayloadJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.exchangeRates$Action = function(baseCurrencyIn, targetCurrencyIn, loginIdIn, callContext) {
        return OS.Logger.startActiveSpan("ExchangeRates", function(span) {
            if (span) {
                span.setAttribute("code.function", "ExchangeRates");
                span.setAttribute("outsystems.function.key", "a6d5851e-1041-4f5f-b6fc-37bc1c1112dc");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.ExchangeRates$vars"))());
                vars.value.baseCurrencyInLocal = baseCurrencyIn;
                vars.value.targetCurrencyInLocal = targetCurrencyIn;
                vars.value.loginIdInLocal = loginIdIn;
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var payloadJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.ExchangeRates$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    payloadJSResult.value = OS.Logger.startActiveSpan("Payload", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "Payload");
                            span.setAttribute("outsystems.function.key", "d7505d7d-32c5-4f12-ac30-12fa36a5f958");
                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteJSNode(tradershub_controller_ExchangeRates_PayloadJS, "Payload", "ExchangeRates", {
                                TargetCurrency: OS.DataConversion.JSNodeParamConverter.to(vars.value.targetCurrencyInLocal, OS.DataTypes.DataTypes.Text),
                                LoginId: OS.DataConversion.JSNodeParamConverter.to(vars.value.loginIdInLocal, OS.DataTypes.DataTypes.Text),
                                BaseCurrency: OS.DataConversion.JSNodeParamConverter.to(vars.value.baseCurrencyInLocal, OS.DataTypes.DataTypes.Text),
                                Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.ExchangeRates$payloadJSResult"))();
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
                    return tradershubController.default.derivApiSendMessage$Action(payloadJSResult.value.payloadOut, "exchange_rates", false, callContext).then(function(value) {
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
    tradershubController.default.constructor.registerVariableGroupType("tradershub.ExchangeRates$vars", [{
        name: "BaseCurrency",
        attrName: "baseCurrencyInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "TargetCurrency",
        attrName: "targetCurrencyInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "LoginId",
        attrName: "loginIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.ExchangeRates$payloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.ExchangeRates$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.exchangeRates$Action = function(baseCurrencyIn, targetCurrencyIn, loginIdIn) {
        baseCurrencyIn = (baseCurrencyIn === undefined) ? "" : baseCurrencyIn;
        targetCurrencyIn = (targetCurrencyIn === undefined) ? "" : targetCurrencyIn;
        loginIdIn = (loginIdIn === undefined) ? "" : loginIdIn;
        return controller.executeActionInsideJSNode(tradershubController.default.exchangeRates$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(baseCurrencyIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(targetCurrencyIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(loginIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: OS.DataConversion.JSNodeParamConverter.to(actionResults.responseOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("tradershub.controller$ExchangeRates.PayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Payload = JSON.stringify({
            base_currency: $parameters.BaseCurrency,
            loginid: $parameters.LoginId,
            target_currency: $parameters.TargetCurrency,
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


define("tradershub.controller$FetchAccountPurposeList", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.clientVariables", "tradershub.model$EN_3e32e8f97f4a30dd16a3843f28450f43EntityRecord", "tradershub.model$RL_dd299c02eac5eb3e7ba5132848a21b2a", "tradershub.controller$ServerAction.GetAccountPurposeAction"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.fetchAccountPurposeList$Action = function(callContext) {
        return OS.Logger.startActiveSpan("FetchAccountPurposeList", function(span) {
            if (span) {
                span.setAttribute("code.function", "FetchAccountPurposeList");
                span.setAttribute("outsystems.function.key", "2215df33-c1a8-4454-9ea1-837705090efe");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var getAccountPurposeActionVar = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.FetchAccountPurposeList$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: GetAccountPurposeAction
                    return controller.getAccountPurposeAction$ServerAction(callContext).then(function(value) {
                        getAccountPurposeActionVar.value = value;
                    }).then(function() {
                        // AccontPurposeList = GetAccountPurposeAction.AccountPurposeList
                        outVars.value.accontPurposeListOut = getAccountPurposeActionVar.value.accountPurposeListOut;
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
    tradershubController.default.constructor.registerVariableGroupType("tradershub.FetchAccountPurposeList$outVars", [{
        name: "AccontPurposeList",
        attrName: "accontPurposeListOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.RecordList,
        defaultValue: function() {
            return new tradershubModel.RL_dd299c02eac5eb3e7ba5132848a21b2a();
        },
        complexType: tradershubModel.RL_dd299c02eac5eb3e7ba5132848a21b2a
    }]);
    tradershubController.default.clientActionProxies.fetchAccountPurposeList$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.fetchAccountPurposeList$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                AccontPurposeList: actionResults.accontPurposeListOut
            };
        });
    };
});


define("tradershub.controller$FetchEmploymentStatusList", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.clientVariables", "tradershub.model$EN_772522d7b54f56f59fb8e1e743f444ecEntityRecord", "tradershub.model$RL_af98e667e22024fcd3f4c2355613ad7f", "tradershub.controller$ServerAction.GetEmploymentStatusList"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.fetchEmploymentStatusList$Action = function(callContext) {
        return OS.Logger.startActiveSpan("FetchEmploymentStatusList", function(span) {
            if (span) {
                span.setAttribute("code.function", "FetchEmploymentStatusList");
                span.setAttribute("outsystems.function.key", "d4eb735e-8cd5-4177-8c12-5e852911ecbd");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var getEmploymentStatusListVar = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.FetchEmploymentStatusList$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: GetEmploymentStatusList
                    return controller.getEmploymentStatusList$ServerAction(callContext).then(function(value) {
                        getEmploymentStatusListVar.value = value;
                    }).then(function() {
                        // EmploymentStatusList = GetEmploymentStatusList.EmploymentStatusList
                        outVars.value.employmentStatusListOut = getEmploymentStatusListVar.value.employmentStatusListOut;
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
    tradershubController.default.constructor.registerVariableGroupType("tradershub.FetchEmploymentStatusList$outVars", [{
        name: "EmploymentStatusList",
        attrName: "employmentStatusListOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.RecordList,
        defaultValue: function() {
            return new tradershubModel.RL_af98e667e22024fcd3f4c2355613ad7f();
        },
        complexType: tradershubModel.RL_af98e667e22024fcd3f4c2355613ad7f
    }]);
    tradershubController.default.clientActionProxies.fetchEmploymentStatusList$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.fetchEmploymentStatusList$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                EmploymentStatusList: actionResults.employmentStatusListOut
            };
        });
    };
});


define("tradershub.controller$FilterAvailableAccounts", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$FilterAvailableAccounts.FilterDataJS", "tradershub.clientVariables", "tradershub.model$ST_872baf372e9fd7dec6105127915f0c6fStructure", "tradershub.model$RL_c5ae9e9ecf45b4babee4b8a8438d3faa"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_FilterAvailableAccounts_FilterDataJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.filterAvailableAccounts$Action = function(availableAccountsIn, createdAccountsIn, callContext) {
        return OS.Logger.startActiveSpan("FilterAvailableAccounts", function(span) {
            if (span) {
                span.setAttribute("code.function", "FilterAvailableAccounts");
                span.setAttribute("outsystems.function.key", "af8a8643-b247-47d4-a0f1-7ef4708632e4");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.FilterAvailableAccounts$vars"))());
                vars.value.availableAccountsInLocal = availableAccountsIn;
                vars.value.createdAccountsInLocal = createdAccountsIn;
                var filterDataJSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializeFilteredAvailableAccountsVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.FilterAvailableAccounts$outVars"))());
                filterDataJSResult.value = OS.Logger.startActiveSpan("FilterData", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "FilterData");
                        span.setAttribute("outsystems.function.key", "e3add474-f258-4787-9f95-00f40e8c1e65");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(tradershub_controller_FilterAvailableAccounts_FilterDataJS, "FilterData", "FilterAvailableAccounts", {
                            AvailableAccounts: OS.DataConversion.JSNodeParamConverter.to(vars.value.availableAccountsInLocal, OS.DataTypes.DataTypes.Text),
                            CreatedAccounts: OS.DataConversion.JSNodeParamConverter.to(vars.value.createdAccountsInLocal, OS.DataTypes.DataTypes.Text),
                            FilteredAvailableAccounts: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {
                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.FilterAvailableAccounts$filterDataJSResult"))();
                            jsNodeResult.filteredAvailableAccountsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FilteredAvailableAccounts, OS.DataTypes.DataTypes.Text);
                            return jsNodeResult;
                        }, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                // JSON Deserialize: JSONDeserializeFilteredAvailableAccounts
                jSONDeserializeFilteredAvailableAccountsVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(filterDataJSResult.value.filteredAvailableAccountsOut, tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa, false);
                // FilteredAvailableAccounts = JSONDeserializeFilteredAvailableAccounts.Data
                outVars.value.filteredAvailableAccountsOut = jSONDeserializeFilteredAvailableAccountsVar.value.dataOut;
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.FilterAvailableAccounts$vars", [{
        name: "AvailableAccounts",
        attrName: "availableAccountsInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "CreatedAccounts",
        attrName: "createdAccountsInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.FilterAvailableAccounts$filterDataJSResult", [{
        name: "FilteredAvailableAccounts",
        attrName: "filteredAvailableAccountsOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.FilterAvailableAccounts$outVars", [{
        name: "FilteredAvailableAccounts",
        attrName: "filteredAvailableAccountsOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.RecordList,
        defaultValue: function() {
            return new tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa();
        },
        complexType: tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa
    }]);
    tradershubController.default.clientActionProxies.filterAvailableAccounts$Action = function(availableAccountsIn, createdAccountsIn) {
        availableAccountsIn = (availableAccountsIn === undefined) ? "" : availableAccountsIn;
        createdAccountsIn = (createdAccountsIn === undefined) ? "" : createdAccountsIn;
        return controller.executeActionInsideJSNode(tradershubController.default.filterAvailableAccounts$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(availableAccountsIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(createdAccountsIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                FilteredAvailableAccounts: actionResults.filteredAvailableAccountsOut
            };
        });
    };
});

define("tradershub.controller$FilterAvailableAccounts.FilterDataJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const availableAccounts = JSON.parse($parameters.AvailableAccounts);
        const createdAccounts = JSON.parse($parameters.CreatedAccounts);

        const filteredData = availableAccounts.filter(account =>
            !createdAccounts.some(createdAccount => createdAccount.identifier === account.identifier)
        );

        $parameters.FilteredAvailableAccounts = JSON.stringify(filteredData);

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
            $parameters.IsEnabled = Analytics?.Analytics?.getFeatureValue($parameters.FeatureFlagName) ?? false
        }
    };
});


define("tradershub.controller$GenerateAvailableAccountsPayload", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$GenerateAvailableAccountsPayload.CreatePayloadJS", "tradershub.clientVariables"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_GenerateAvailableAccountsPayload_CreatePayloadJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.generateAvailableAccountsPayload$Action = function(platformIn, callContext) {
        return OS.Logger.startActiveSpan("GenerateAvailableAccountsPayload", function(span) {
            if (span) {
                span.setAttribute("code.function", "GenerateAvailableAccountsPayload");
                span.setAttribute("outsystems.function.key", "c66fb5d7-1a24-474f-aebe-aeb36ab41bf8");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.GenerateAvailableAccountsPayload$vars"))());
                vars.value.platformInLocal = platformIn;
                var createPayloadJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.GenerateAvailableAccountsPayload$outVars"))());
                createPayloadJSResult.value = OS.Logger.startActiveSpan("CreatePayload", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "CreatePayload");
                        span.setAttribute("outsystems.function.key", "4a5ca629-ee6b-4a8a-9db4-6d261ea1ba27");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(tradershub_controller_GenerateAvailableAccountsPayload_CreatePayloadJS, "CreatePayload", "GenerateAvailableAccountsPayload", {
                            CountryCode: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getClientCountry(), OS.DataTypes.DataTypes.Text),
                            Platform: OS.DataConversion.JSNodeParamConverter.to(vars.value.platformInLocal, OS.DataTypes.DataTypes.Text),
                            HasToken: OS.DataConversion.JSNodeParamConverter.to(((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier())), OS.DataTypes.DataTypes.Boolean),
                            Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {
                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.GenerateAvailableAccountsPayload$createPayloadJSResult"))();
                            jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                            return jsNodeResult;
                        }, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                // Payload = CreatePayload.Payload
                outVars.value.payloadOut = createPayloadJSResult.value.payloadOut;
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GenerateAvailableAccountsPayload$vars", [{
        name: "Platform",
        attrName: "platformInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GenerateAvailableAccountsPayload$createPayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GenerateAvailableAccountsPayload$outVars", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.generateAvailableAccountsPayload$Action = function(platformIn) {
        platformIn = (platformIn === undefined) ? "" : platformIn;
        return controller.executeActionInsideJSNode(tradershubController.default.generateAvailableAccountsPayload$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(platformIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Payload: OS.DataConversion.JSNodeParamConverter.to(actionResults.payloadOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("tradershub.controller$GenerateAvailableAccountsPayload.CreatePayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        let payload;

        if ($parameters.HasToken) {
            payload = {
                "platform": $parameters.Platform
            };
        } else {
            payload = {
                "country_code": $parameters.CountryCode,
                "platform": $parameters.Platform,
            }
        }

        $parameters.Payload = JSON.stringify(payload);

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


define("tradershub.controller$GetAvailableAccounts", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$GetAvailableAccounts.AvailableAccountsPayloadJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_GetAvailableAccounts_AvailableAccountsPayloadJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.getAvailableAccounts$Action = function(callContext) {
        return OS.Logger.startActiveSpan("GetAvailableAccounts", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetAvailableAccounts");
                span.setAttribute("outsystems.function.key", "b0e44dc8-bedd-4dbf-9abc-ebb884f9a21a");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var availableAccountsPayloadJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.GetAvailableAccounts$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    availableAccountsPayloadJSResult.value = OS.Logger.startActiveSpan("AvailableAccountsPayload", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "AvailableAccountsPayload");
                            span.setAttribute("outsystems.function.key", "84c39bfe-f9d1-43e1-a888-354056cc6cd8");
                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteJSNode(tradershub_controller_GetAvailableAccounts_AvailableAccountsPayloadJS, "AvailableAccountsPayload", "GetAvailableAccounts", {
                                Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.GetAvailableAccounts$availableAccountsPayloadJSResult"))();
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
                    return tradershubController.default.derivApiSendMessage$Action(availableAccountsPayloadJSResult.value.payloadOut, "available_accounts", true, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    }).then(function() {
                        // Response = DerivApiSendMessage.Response
                        outVars.value.responseOut = derivApiSendMessageVar.value.responseOut;
                        // ErrorMessage = DerivApiSendMessage.ErrorMessage
                        outVars.value.errorMessageOut = derivApiSendMessageVar.value.errorMessageOut;
                        // ErrorCode = DerivApiSendMessage.ErrorCode
                        outVars.value.errorCodeOut = derivApiSendMessageVar.value.errorCodeOut;
                        // IsError = DerivApiSendMessage.IsError
                        outVars.value.isErrorOut = derivApiSendMessageVar.value.isErrorOut;
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
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GetAvailableAccounts$availableAccountsPayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GetAvailableAccounts$outVars", [{
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
    tradershubController.default.clientActionProxies.getAvailableAccounts$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.getAvailableAccounts$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: OS.DataConversion.JSNodeParamConverter.to(actionResults.responseOut, OS.DataTypes.DataTypes.Text),
                IsError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isErrorOut, OS.DataTypes.DataTypes.Boolean),
                ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text),
                ErrorCode: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorCodeOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("tradershub.controller$GetAvailableAccounts.AvailableAccountsPayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Payload = JSON.stringify({
            "categories": ["trading"]
        });

    };
});


define("tradershub.controller$GetAvailableWallets", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$GetAvailableWallets.PayloadJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "tradershub.model$ST_c58953efaabdf6619bd81be5e0e0ec33Structure"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_GetAvailableWallets_PayloadJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.getAvailableWallets$Action = function(callContext) {
        return OS.Logger.startActiveSpan("GetAvailableWallets", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetAvailableWallets");
                span.setAttribute("outsystems.function.key", "7cb5f9a5-259d-4a29-b89e-ca4aa3a7303f");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var payloadJSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializeAddMoreWalletsVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_c58953efaabdf6619bd81be5e0e0ec33Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.GetAvailableWallets$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    payloadJSResult.value = OS.Logger.startActiveSpan("Payload", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "Payload");
                            span.setAttribute("outsystems.function.key", "528ae6ff-1bbe-4a87-8c91-bbb0217a2c78");
                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteJSNode(tradershub_controller_GetAvailableWallets_PayloadJS, "Payload", "GetAvailableWallets", {
                                Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.GetAvailableWallets$payloadJSResult"))();
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
                    return tradershubController.default.derivApiSendMessage$Action(payloadJSResult.value.payloadOut, "available_accounts", true, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    }).then(function() {
                        if ((!(derivApiSendMessageVar.value.isErrorOut))) {
                            // JSON Deserialize: JSONDeserializeAddMoreWallets
                            jSONDeserializeAddMoreWalletsVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(derivApiSendMessageVar.value.responseOut, tradershubModel.ST_c58953efaabdf6619bd81be5e0e0ec33Structure, false);
                            // Response = JSONDeserializeAddMoreWallets.Data
                            outVars.value.responseOut = jSONDeserializeAddMoreWalletsVar.value.dataOut;
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
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GetAvailableWallets$payloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GetAvailableWallets$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new tradershubModel.ST_c58953efaabdf6619bd81be5e0e0ec33Structure();
        },
        complexType: tradershubModel.ST_c58953efaabdf6619bd81be5e0e0ec33Structure
    }]);
    tradershubController.default.clientActionProxies.getAvailableWallets$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.getAvailableWallets$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut
            };
        });
    };
});

define("tradershub.controller$GetAvailableWallets.PayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Payload = JSON.stringify({
            categories: ["wallet"]
        });

    };
});


define("tradershub.controller$GetBackOfficeLocks", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$GetBackOfficeLocks.JavaScript1JS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "tradershub.model$ST_0a3b9035d8da0d7db249ce5f6a01e8b3Structure"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_GetBackOfficeLocks_JavaScript1JS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.getBackOfficeLocks$Action = function(callContext) {
        return OS.Logger.startActiveSpan("GetBackOfficeLocks", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetBackOfficeLocks");
                span.setAttribute("outsystems.function.key", "58aaf94a-cdef-4a0d-b817-77347dbaea81");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var getAccountStatusVar = new OS.DataTypes.VariableHolder();
                var javaScript1JSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializeBackOfficeLockVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_0a3b9035d8da0d7db249ce5f6a01e8b3Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.GetBackOfficeLocks$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: GetAccountStatus
                    return tradershubController.default.derivApiSendMessage$Action("", "get_account_status", true, callContext).then(function(value) {
                        getAccountStatusVar.value = value;
                    }).then(function() {
                        if ((!(getAccountStatusVar.value.isErrorOut))) {
                            javaScript1JSResult.value = OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "JavaScript1");
                                    span.setAttribute("outsystems.function.key", "44eb25f7-7aee-4337-bad7-4ab403f3ae6f");
                                    span.setAttribute("outsystems.function.owner.name", "tradershub");
                                    span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                }

                                try {
                                    return controller.safeExecuteJSNode(tradershub_controller_GetBackOfficeLocks_JavaScript1JS, "JavaScript1", "GetBackOfficeLocks", {
                                        Data: OS.DataConversion.JSNodeParamConverter.to(getAccountStatusVar.value.responseOut, OS.DataTypes.DataTypes.Text),
                                        Response: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                    }, function($parameters) {
                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.GetBackOfficeLocks$javaScript1JSResult"))();
                                        jsNodeResult.responseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Response, OS.DataTypes.DataTypes.Text);
                                        return jsNodeResult;
                                    }, {}, {});
                                } finally {
                                    if (span) {
                                        span.end();
                                    }

                                }

                            }, 1);
                            // JSON Deserialize: JSONDeserializeBackOfficeLock
                            jSONDeserializeBackOfficeLockVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(javaScript1JSResult.value.responseOut, tradershubModel.ST_0a3b9035d8da0d7db249ce5f6a01e8b3Structure, false);
                            // Response = JSONDeserializeBackOfficeLock.Data
                            outVars.value.responseOut = jSONDeserializeBackOfficeLockVar.value.dataOut;
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
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GetBackOfficeLocks$javaScript1JSResult", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GetBackOfficeLocks$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new tradershubModel.ST_0a3b9035d8da0d7db249ce5f6a01e8b3Structure();
        },
        complexType: tradershubModel.ST_0a3b9035d8da0d7db249ce5f6a01e8b3Structure
    }]);
    tradershubController.default.clientActionProxies.getBackOfficeLocks$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.getBackOfficeLocks$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut
            };
        });
    };
});

define("tradershub.controller$GetBackOfficeLocks.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const data = JSON.parse($parameters.Data).get_account_status;
        const statuses = data?.status;

        $parameters.Response = JSON.stringify({
            isTradingDisabled: statuses.some(status => status === "no_trading"),
            isTransferAllowed: !statuses.some(status => status === "sibling_transfers_blocked")
        })

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
        $parameters.Icon = currenciesList.find(currency => currency?.Currencies?.Code === $parameters.CurrencyCode)?.Currencies?.Icon ?? ""

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


define("tradershub.controller$GetWalletsList", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "SharedUtilities.controller", "tradershub.controller$GetWalletsList.WalletListsJS", "tradershub.controller$GetWalletsList.GetFirstWalletIndexJS", "tradershub.clientVariables", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure", "tradershub.controller$SetTokenByLoginId", "tradershub.model$ST_c58953efaabdf6619bd81be5e0e0ec33Structure", "tradershub.controller$GetAvailableWallets", "tradershub.controller$GetAllAccountsBalance", "SharedUtilities.controller$FormatMoney", "tradershub.referencesHealth", "tradershub.referencesHealth$SharedUtilities", "tradershub.model$ST_52667a49e65b5175f66dacecb12f345fStructure", "tradershub.model$RL_93aac6f383f04a9d0a0e078d2dec0d9f", "tradershub.model$ST_3425849bb816196585dd6f07dbf2721dStructure", "tradershub.model$RL_caf4f8b8680e835a8e4e4bea133e8365", "tradershub.model$ST_a9a623c261c1ffe1c25d512e5c56df69Structure", "tradershub.model$RL_b34647d303b62dd6376f5a3a6702fe40"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, SharedUtilitiesController, tradershub_controller_GetWalletsList_WalletListsJS, tradershub_controller_GetWalletsList_GetFirstWalletIndexJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.getWalletsList$Action = function(callContext) {
        return OS.Logger.startActiveSpan("GetWalletsList", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetWalletsList");
                span.setAttribute("outsystems.function.key", "a0e42294-c9ce-4d9e-a0e2-5646f5105a66");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.GetWalletsList$vars"))());
                var listFilterVar = new OS.DataTypes.VariableHolder();
                var setTokenByLoginIdVar = new OS.DataTypes.VariableHolder();
                var getAvailableWalletsVar = new OS.DataTypes.VariableHolder();
                var getAllAccountsBalanceVar = new OS.DataTypes.VariableHolder();
                var walletListsJSResult = new OS.DataTypes.VariableHolder();
                var getFirstWalletIndexJSResult = new OS.DataTypes.VariableHolder();
                var jSONSerializeAuthorizeVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var jSONSerializeAvailableWalletsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var jSONDeserializeLinkedToItemListVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_b34647d303b62dd6376f5a3a6702fe40))());
                var jSONDeserializeWalletsAccountListVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_caf4f8b8680e835a8e4e4bea133e8365))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.GetWalletsList$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // JSON Deserialize: JSONDeserializeLinkedToItemList
                    jSONDeserializeLinkedToItemListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(tradershubClientVariables.getLinkedTo(), tradershubModel.RL_b34647d303b62dd6376f5a3a6702fe40, false);
                    if ((jSONDeserializeLinkedToItemListVar.value.dataOut.isEmpty)) {
                        getFirstWalletIndexJSResult.value = OS.Logger.startActiveSpan("GetFirstWalletIndex", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetFirstWalletIndex");
                                span.setAttribute("outsystems.function.key", "0453839b-e7d3-4d49-b060-a7c89898df85");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                            }

                            try {
                                return controller.safeExecuteJSNode(tradershub_controller_GetWalletsList_GetFirstWalletIndexJS, "GetFirstWalletIndex", "GetWalletsList", {
                                    ActiveWalletLoginId: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                }, function($parameters) {
                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.GetWalletsList$getFirstWalletIndexJSResult"))();
                                    jsNodeResult.activeWalletLoginIdOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ActiveWalletLoginId, OS.DataTypes.DataTypes.Text);
                                    return jsNodeResult;
                                }, {}, {});
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                        // ActiveWalletLoginId = GetFirstWalletIndex.ActiveWalletLoginId
                        vars.value.activeWalletLoginIdVar = getFirstWalletIndexJSResult.value.activeWalletLoginIdOut;
                    } else {
                        // ActiveWalletLoginId = JSONDeserializeLinkedToItemList.Data.Current.Loginid
                        vars.value.activeWalletLoginIdVar = jSONDeserializeLinkedToItemListVar.value.dataOut.getCurrent(callContext.iterationContext).loginidAttr;
                    }

                    // Execute Action: SetTokenByLoginId
                    return tradershubController.default.setTokenByLoginId$Action(vars.value.activeWalletLoginIdVar, callContext).then(function(value) {
                        setTokenByLoginIdVar.value = value;
                    }).then(function() {
                        // Execute Action: GetAvailableWallets
                        return tradershubController.default.getAvailableWallets$Action(callContext).then(function(value) {
                            getAvailableWalletsVar.value = value;
                        });
                    }).then(function() {
                        // Execute Action: ListFilter
                        listFilterVar.value = OS.SystemActions.listFilter(setTokenByLoginIdVar.value.responseOut.authorizeAttr.account_listAttr, function(p) {
                            return ((p.account_categoryAttr === "wallet") && ((p.is_virtualAttr) !== (1)));
                        }, callContext);

                        // JSON Serialize: JSONSerializeAuthorize
                        jSONSerializeAuthorizeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(listFilterVar.value.filteredListOut, false, false);
                        // JSON Serialize: JSONSerializeAvailableWallets
                        jSONSerializeAvailableWalletsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(getAvailableWalletsVar.value.responseOut, false, false);
                        // Execute Action: GetAllAccountsBalance
                        return tradershubController.default.getAllAccountsBalance$Action(callContext).then(function(value) {
                            getAllAccountsBalanceVar.value = value;
                        });
                    }).then(function() {
                        walletListsJSResult.value = OS.Logger.startActiveSpan("WalletLists", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "WalletLists");
                                span.setAttribute("outsystems.function.key", "0295ffbb-256a-4aa7-bc55-ec4443551b0f");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                            }

                            try {
                                return controller.safeExecuteJSNode(tradershub_controller_GetWalletsList_WalletListsJS, "WalletLists", "GetWalletsList", {
                                    Balance: OS.DataConversion.JSNodeParamConverter.to(getAllAccountsBalanceVar.value.responseOut, OS.DataTypes.DataTypes.Text),
                                    AvailableWallets: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeAvailableWalletsVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                    LoginId: OS.DataConversion.JSNodeParamConverter.to(vars.value.activeWalletLoginIdVar, OS.DataTypes.DataTypes.Text),
                                    AccountLists: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeAuthorizeVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                    WalletList: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                }, function($parameters) {
                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.GetWalletsList$walletListsJSResult"))();
                                    jsNodeResult.walletListOut = OS.DataConversion.JSNodeParamConverter.from($parameters.WalletList, OS.DataTypes.DataTypes.Text);
                                    return jsNodeResult;
                                }, {
                                    FormatMoney: SharedUtilitiesController.default.clientActionProxies.formatMoney$Action
                                }, {});
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                        // JSON Deserialize: JSONDeserializeWalletsAccountList
                        jSONDeserializeWalletsAccountListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(walletListsJSResult.value.walletListOut, tradershubModel.RL_caf4f8b8680e835a8e4e4bea133e8365, false);
                        // Set WalletsList
                        // WalletsList = JSONDeserializeWalletsAccountList.Data
                        outVars.value.walletsListOut = jSONDeserializeWalletsAccountListVar.value.dataOut;
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
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GetWalletsList$vars", [{
        name: "ActiveWalletLoginId",
        attrName: "activeWalletLoginIdVar",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GetWalletsList$walletListsJSResult", [{
        name: "WalletList",
        attrName: "walletListOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GetWalletsList$getFirstWalletIndexJSResult", [{
        name: "ActiveWalletLoginId",
        attrName: "activeWalletLoginIdOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GetWalletsList$outVars", [{
        name: "WalletsList",
        attrName: "walletsListOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.RecordList,
        defaultValue: function() {
            return new tradershubModel.RL_caf4f8b8680e835a8e4e4bea133e8365();
        },
        complexType: tradershubModel.RL_caf4f8b8680e835a8e4e4bea133e8365
    }]);
    tradershubController.default.clientActionProxies.getWalletsList$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.getWalletsList$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                WalletsList: actionResults.walletsListOut
            };
        });
    };
});

define("tradershub.controller$GetWalletsList.WalletListsJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const addedWalletList = JSON.parse($parameters.AccountLists);
        const balanceData = JSON.parse($parameters.Balance);
        const unAddedWalletList = JSON.parse($parameters.AvailableWallets);

        const combinedWalletList = [
            ...addedWalletList.map(wallet => {
                const currency = wallet.currency;
                const loginid = wallet.loginid;
                const balanceObj = balanceData?.balance?.accounts;
                const formattedBalance = $actions.FormatMoney(balanceObj?.[loginid]?.balance, currency)?.FormattedNumber;

                return {
                    ...wallet,
                    is_selected: $parameters.LoginId === wallet.loginid,
                    name: `${currency} Wallet`,
                    formatted_balance: formattedBalance ? `${formattedBalance} ${currency}` : `0 ${currency}`,
                    balance: balanceObj?.[loginid]?.balance || 0,
                    is_added: true,
                    is_crypto: wallet.account_type === "crypto",
                };
            }),
            ...(unAddedWalletList?.available_accounts?.wallets || []).map(wallet => {
                const currency = wallet.currency;

                return {
                    ...wallet,
                    name: `${currency} Wallet`,
                    is_added: false,
                    is_crypto: wallet.account_type === "crypto",
                };
            })
        ];

        $parameters.WalletList = JSON.stringify(combinedWalletList);

    };
});

define("tradershub.controller$GetWalletsList.GetFirstWalletIndexJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const AccountList = JSON.parse(localStorage.getItem('accountsList'))

        function getFirstWallet(accountList) {
            for (let key in accountList) {
                if (key.startsWith("CRW")) {
                    return key;
                }
            }
            return null;
        }

        $parameters.ActiveWalletLoginId = getFirstWallet(AccountList);


    };
});


define("tradershub.controller$GetWebsiteStatus", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "RESTAPIWebsocketOfficial.model$ST_bf5d4ab423fae3ff38a977653adc8398Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.model$RL_071a5687136a6dbeecb0a0d193c188a2", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure", "RESTAPIWebsocketOfficial.model$ST_c864353821feed79663806f3e445d40eStructure"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, tradershubClientVariables) {
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
                var currentClientCountryVar = new OS.DataTypes.VariableHolder();
                var jSONDeserializeResidenceListResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_63a473e932ef99f5271718b62399e682Structure))());
                var jSONDeserializeGetWebsiteStatusResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_c864353821feed79663806f3e445d40eStructure))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: DerivApiSendMessage
                    return tradershubController.default.derivApiSendMessage$Action("", "website_status", false, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    }).then(function() {
                        if ((!(derivApiSendMessageVar.value.isErrorOut))) {
                            // JSON Deserialize: JSONDeserializeGetWebsiteStatusResponse
                            jSONDeserializeGetWebsiteStatusResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(derivApiSendMessageVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_c864353821feed79663806f3e445d40eStructure, false);
                            // JSON Deserialize: JSONDeserializeResidenceListResponse
                            jSONDeserializeResidenceListResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(tradershubClientVariables.getRawResidenceListResponse(), RESTAPIWebsocketOfficialModel.ST_63a473e932ef99f5271718b62399e682Structure, false);
                            // Execute Action: currentClientCountry
                            currentClientCountryVar.value = OS.SystemActions.listFilter(jSONDeserializeResidenceListResponseVar.value.dataOut.residence_listAttr, function(p) {
                                return (tradershubClientVariables.getClientCountry() === p.valueAttr);
                            }, callContext);

                            // RawWebsiteStatusResponse = DerivApiSendMessage.Response
                            tradershubClientVariables.setRawWebsiteStatusResponse(derivApiSendMessageVar.value.responseOut);
                            // ClientCountry = JSONDeserializeGetWebsiteStatusResponse.Data.Website_status.Clients_country
                            tradershubClientVariables.setClientCountry(jSONDeserializeGetWebsiteStatusResponseVar.value.dataOut.website_statusAttr.clients_countryAttr);
                            // ClientCountryText = currentClientCountry.FilteredList.Current.Text
                            tradershubClientVariables.setClientCountryText(currentClientCountryVar.value.filteredListOut.getCurrent(callContext.iterationContext).textAttr);
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
                                loggedIn: $parameters.IS_AUTHORIZED,
                                network_type: navigator.connection?.effectiveType,
                                network_rtt: navigator.connection?.rtt,
                                network_downlink: navigator.connection?.downlink,

                            }
                        },
                        // disableRudderstackAMD: true,
                    };
                    try {
                        Analytics.initialise(initialiseConfig)
                        resolve()
                    } catch (error) {
                        console.error('Error during initialisation:', error);
                        reject()
                    }
                }
            })

            initAnalytics().then(() => {
                $resolve()
            }).catch((error) => {
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


define("tradershub.controller$LoadScriptsAsync", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$LoadScriptsAsync.LoadScriptsAsyncJS", "tradershub.clientVariables"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_LoadScriptsAsync_LoadScriptsAsyncJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.loadScriptsAsync$Action = function(uRLIn, callContext) {
        return OS.Logger.startActiveSpan("LoadScriptsAsync", function(span) {
            if (span) {
                span.setAttribute("code.function", "LoadScriptsAsync");
                span.setAttribute("outsystems.function.key", "0d62446b-891b-40d9-bbde-107f1b07505e");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.LoadScriptsAsync$vars"))());
                vars.value.uRLInLocal = uRLIn;
                OS.Logger.startActiveSpan("LoadScriptsAsync", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "LoadScriptsAsync");
                        span.setAttribute("outsystems.function.key", "31f6defc-ff4d-4cfb-be26-571eec9a897f");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(tradershub_controller_LoadScriptsAsync_LoadScriptsAsyncJS, "LoadScriptsAsync", "LoadScriptsAsync", {
                            URL: OS.DataConversion.JSNodeParamConverter.to(vars.value.uRLInLocal, OS.DataTypes.DataTypes.Text)
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
    tradershubController.default.constructor.registerVariableGroupType("tradershub.LoadScriptsAsync$vars", [{
        name: "URL",
        attrName: "uRLInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.loadScriptsAsync$Action = function(uRLIn) {
        uRLIn = (uRLIn === undefined) ? "" : uRLIn;
        return controller.executeActionInsideJSNode(tradershubController.default.loadScriptsAsync$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uRLIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("tradershub.controller$LoadScriptsAsync.LoadScriptsAsyncJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        function loadScript(url, callback) {
            const script = document.createElement('script')
            script.onload = function() {
                if (callback) callback()
            }
            script.src = url;
            script.async = true;
            document.body.appendChild(script)
        }

        loadScript($parameters.URL)
    };
});


define("tradershub.controller$MT5NewAccount", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "tradershub.controller$MT5NewAccount.PayloadJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "RESTAPIWebsocketOfficial.model$ST_78c818dad6d0af8d67b898e33e5a3dfbStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.model$ST_9aff8863a6e9bf91c18ba9445f806cc7Structure", "RESTAPIWebsocketOfficial.model$ST_f1644d81fb90e6f4882b198c996831d1Structure", "RESTAPIWebsocketOfficial.model$ST_c7e48234a44c41827c7b70f1ea8aa0b1Structure"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, tradershub_controller_MT5NewAccount_PayloadJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.mT5NewAccount$Action = function(passwordIn, emailIn, nameIn, productIn, callContext) {
        return OS.Logger.startActiveSpan("MT5NewAccount", function(span) {
            if (span) {
                span.setAttribute("code.function", "MT5NewAccount");
                span.setAttribute("outsystems.function.key", "25649aa5-7821-4c3c-bbef-ed52f755193c");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.MT5NewAccount$vars"))());
                vars.value.passwordInLocal = passwordIn;
                vars.value.emailInLocal = emailIn;
                vars.value.nameInLocal = nameIn;
                vars.value.productInLocal = productIn;
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var payloadJSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializeResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_78c818dad6d0af8d67b898e33e5a3dfbStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.MT5NewAccount$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    payloadJSResult.value = OS.Logger.startActiveSpan("Payload", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "Payload");
                            span.setAttribute("outsystems.function.key", "24546f6a-3f6a-4633-8995-302083192ecc");
                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteJSNode(tradershub_controller_MT5NewAccount_PayloadJS, "Payload", "MT5NewAccount", {
                                Email: OS.DataConversion.JSNodeParamConverter.to((((vars.value.emailInLocal === "")) ? ("test@gmail.com") : (vars.value.emailInLocal)), OS.DataTypes.DataTypes.Email),
                                Name: OS.DataConversion.JSNodeParamConverter.to((((vars.value.nameInLocal === "")) ? ("John Abc") : (vars.value.nameInLocal)), OS.DataTypes.DataTypes.Text),
                                Product: OS.DataConversion.JSNodeParamConverter.to(vars.value.productInLocal, OS.DataTypes.DataTypes.Text),
                                Leverage: OS.DataConversion.JSNodeParamConverter.to("100", OS.DataTypes.DataTypes.Text),
                                AccountType: OS.DataConversion.JSNodeParamConverter.to((((tradershubClientVariables.getAccountType() === "demo")) ? (tradershubClientVariables.getAccountType()) : (((((vars.value.productInLocal === "swap_free") || (vars.value.productInLocal === "zero_spread"))) ? ("all") : ((((vars.value.productInLocal === "standard")) ? ("gaming") : ("financial")))))), OS.DataTypes.DataTypes.Text),
                                Password: OS.DataConversion.JSNodeParamConverter.to(vars.value.passwordInLocal, OS.DataTypes.DataTypes.Text),
                                Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.MT5NewAccount$payloadJSResult"))();
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
                    return tradershubController.default.derivApiSendMessage$Action(payloadJSResult.value.payloadOut, "mt5_new_account", true, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    }).then(function() {
                        if ((derivApiSendMessageVar.value.isErrorOut)) {
                            OS.FeedbackMessageService.showFeedbackMessage(derivApiSendMessageVar.value.errorMessageOut, /*Error*/ 3);
                        } else {
                            // JSON Deserialize: JSONDeserializeResponse
                            jSONDeserializeResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(derivApiSendMessageVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_78c818dad6d0af8d67b898e33e5a3dfbStructure, false);
                            // Response = JSONDeserializeResponse.Data
                            outVars.value.responseOut = OS.DataConversion.JSConversions.typeConvertRecord(jSONDeserializeResponseVar.value.dataOut, new tradershubModel.ST_9aff8863a6e9bf91c18ba9445f806cc7Structure(), function(source, target) {
                                target.echo_reqAttr = source.echo_reqAttr;
                                target.msg_typeAttr = source.msg_typeAttr;
                                target.mt5NewAccountItemAttr.balanceAttr = source.mt5_new_accountAttr.balanceAttr;
                                target.mt5NewAccountItemAttr.currencyAttr = source.mt5_new_accountAttr.currencyAttr;
                                target.mt5NewAccountItemAttr.display_balanceAttr = source.mt5_new_accountAttr.display_balanceAttr;
                                target.mt5NewAccountItemAttr.loginAttr = source.mt5_new_accountAttr.loginAttr;
                                target.mt5NewAccountItemAttr.sub_account_typeAttr = source.mt5_new_accountAttr.sub_account_typeAttr;
                                return target;
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
    tradershubController.default.constructor.registerVariableGroupType("tradershub.MT5NewAccount$vars", [{
        name: "Password",
        attrName: "passwordInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Email",
        attrName: "emailInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Email,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Name",
        attrName: "nameInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Product",
        attrName: "productInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.MT5NewAccount$payloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.MT5NewAccount$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new tradershubModel.ST_9aff8863a6e9bf91c18ba9445f806cc7Structure();
        },
        complexType: tradershubModel.ST_9aff8863a6e9bf91c18ba9445f806cc7Structure
    }]);
    tradershubController.default.clientActionProxies.mT5NewAccount$Action = function(passwordIn, emailIn, nameIn, productIn) {
        passwordIn = (passwordIn === undefined) ? "" : passwordIn;
        emailIn = (emailIn === undefined) ? "" : emailIn;
        nameIn = (nameIn === undefined) ? "" : nameIn;
        productIn = (productIn === undefined) ? "" : productIn;
        return controller.executeActionInsideJSNode(tradershubController.default.mT5NewAccount$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(passwordIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(emailIn, OS.DataTypes.DataTypes.Email), OS.DataConversion.JSNodeParamConverter.from(nameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(productIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut
            };
        });
    };
});

define("tradershub.controller$MT5NewAccount.PayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const payload = {
            mt5_new_account: 1,
            account_type: $parameters.AccountType,
            email: $parameters.Email,
            leverage: $parameters.Leverage,
            mainPassword: $parameters.Password,
            product: $parameters.Product,
            name: $parameters.Name
        };

        if ($parameters.Product === "stp") {
            payload.mt5_account_type = "financial_stp";
        }

        if ($parameters.Product === "financial") {
            payload.mt5_account_type = "financial";
        }

        $parameters.Payload = JSON.stringify(payload);

    };
});


define("tradershub.controller$NewAccountReal", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$NewAccountReal.RudderStackSuccessJS", "tradershub.controller$NewAccountReal.AuthorizePayloadJS", "tradershub.controller$NewAccountReal.SyncLocalStorageJS", "tradershub.controller$NewAccountReal.NewAccountRealPayloadJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "tradershub.controller$CleanupAfterRealSignup", "tradershub.controller$SendIDVDocumentDetails", "tradershub.model$ST_bd2236af041a218c8fde06ca0065cfd9Structure", "tradershub.controller$SendGetSetting", "tradershub.model$ST_1a99e1302699632bd3158595a2dd8d57Structure"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_NewAccountReal_RudderStackSuccessJS, tradershub_controller_NewAccountReal_AuthorizePayloadJS, tradershub_controller_NewAccountReal_SyncLocalStorageJS, tradershub_controller_NewAccountReal_NewAccountRealPayloadJS, tradershubClientVariables) {
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
                                    SkippedEmploymentDetails: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupNoTaxInformation(), OS.DataTypes.DataTypes.Boolean),
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
                                    EmploymentStatus: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupEmployementStatus(), OS.DataTypes.DataTypes.Text),
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
                                // ErrorMessage = DerivApiSendMessage.ErrorMessage
                                outVars.value.errorMessageOut = derivApiSendMessageVar.value.errorMessageOut;
                            } else {
                                OS.FeedbackMessageService.showFeedbackMessage("Account created successfully.", /*Success*/ 1);
                                OS.Logger.startActiveSpan("RudderStackSuccess", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "RudderStackSuccess");
                                        span.setAttribute("outsystems.function.key", "27135403-6d00-48c8-9f36-82c36d15dde0");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_controller_NewAccountReal_RudderStackSuccessJS, "RudderStackSuccess", "NewAccountReal", null, function($parameters) {}, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
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
    }, {
        name: "ErrorMessage",
        attrName: "errorMessageOut",
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
                ErrorCode: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorCodeOut, OS.DataTypes.DataTypes.Text),
                ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("tradershub.controller$NewAccountReal.RudderStackSuccessJS", [], function() {
    return function($actions, $roles, $public) {
        cacheTrackEvents.track({
            name: "ce_real_account_signup_form",
            properties: {
                action: "real_signup_finished",
                form_name: "real_account_signup_form_outsystems"
            }
        });
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
                return window.location.href = `https://app.deriv.com/redirect`
            }
            return window.location.href = `https://staging-app.deriv.com/redirect`
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
            tax_residence: $parameters.TaxResidence,
            employment_status: $parameters.EmploymentStatus,
            tnc_acceptance: 1
        }

        if (affiliate_token) {
            payload.affiliate_token = affiliate_token
        }

        if ($parameters.SkippedEmploymentDetails) {
            payload.tin_skipped = 1
        } else {
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


define("tradershub.controller$NewAccountRealEU", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$NewAccountRealEU.NewAccountRealEUPayloadJS", "tradershub.controller$NewAccountRealEU.AuthorizePayloadJS", "tradershub.controller$NewAccountRealEU.SyncLocalStorageJS", "tradershub.controller$NewAccountRealEU.RudderStackSuccessJS", "tradershub.clientVariables", "tradershub.model$ST_bd2236af041a218c8fde06ca0065cfd9Structure", "tradershub.controller$SendGetSetting", "tradershub.controller$DerivApiSendMessage", "tradershub.controller$CleanupAfterRealSignup", "tradershub.controller$SendIDVDocumentDetails", "tradershub.model$ST_1a99e1302699632bd3158595a2dd8d57Structure"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_NewAccountRealEU_NewAccountRealEUPayloadJS, tradershub_controller_NewAccountRealEU_AuthorizePayloadJS, tradershub_controller_NewAccountRealEU_SyncLocalStorageJS, tradershub_controller_NewAccountRealEU_RudderStackSuccessJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.newAccountRealEU$Action = function(callContext) {
        return OS.Logger.startActiveSpan("NewAccountRealEU", function(span) {
            if (span) {
                span.setAttribute("code.function", "NewAccountRealEU");
                span.setAttribute("outsystems.function.key", "c1b451d1-2f0b-42fb-b00b-e407df5361e3");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var sendGetSettingVar = new OS.DataTypes.VariableHolder();
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var derivApiSendAuthorizeVar = new OS.DataTypes.VariableHolder();
                var newAccountRealEUPayloadJSResult = new OS.DataTypes.VariableHolder();
                var authorizePayloadJSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializeNewAccountRealResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_1a99e1302699632bd3158595a2dd8d57Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.NewAccountRealEU$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: SendGetSetting
                    return tradershubController.default.sendGetSetting$Action(callContext).then(function(value) {
                        sendGetSettingVar.value = value;
                    }).then(function() {
                        newAccountRealEUPayloadJSResult.value = OS.Logger.startActiveSpan("NewAccountRealEUPayload", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "NewAccountRealEUPayload");
                                span.setAttribute("outsystems.function.key", "204c52fd-bd8e-454a-83c7-3a8589f007c5");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                            }

                            try {
                                return controller.safeExecuteJSNode(tradershub_controller_NewAccountRealEU_NewAccountRealEUPayloadJS, "NewAccountRealEUPayload", "NewAccountRealEU", {
                                    LeverageImpactTrading: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getCFDLeverage(), OS.DataTypes.DataTypes.Text),
                                    EmploymentIndustry: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getFinancialAssessmentEmploymentIndustry(), OS.DataTypes.DataTypes.Text),
                                    LastName: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupLastName(), OS.DataTypes.DataTypes.Text),
                                    Residence: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getSelectedResidence(), OS.DataTypes.DataTypes.Text),
                                    PlaceOfBirth: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupPlaceOfBirth(), OS.DataTypes.DataTypes.Text),
                                    EstimatedWorth: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getFinancialAssessmentEstimatedWorth(), OS.DataTypes.DataTypes.Text),
                                    CFDTradingDefinition: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getCFDAllow(), OS.DataTypes.DataTypes.Text),
                                    DateOfBirth: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupDateofBirth(), OS.DataTypes.DataTypes.Text),
                                    PostCode: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupAddressPostCode(), OS.DataTypes.DataTypes.Text),
                                    RequiredInitialMargin: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getInitialMargin(), OS.DataTypes.DataTypes.Text),
                                    TIN: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupTIDNumber(), OS.DataTypes.DataTypes.Text),
                                    Address: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupAddress(), OS.DataTypes.DataTypes.Text),
                                    AccountOpeningReason: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupAccountOpeningReason(), OS.DataTypes.DataTypes.Text),
                                    Citizen: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getSelectedCitizenship(), OS.DataTypes.DataTypes.Text),
                                    Phone: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupPhone(), OS.DataTypes.DataTypes.Text),
                                    TradingFrequencyFinancialInstruments: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getFinancialTradePastYear(), OS.DataTypes.DataTypes.Text),
                                    FirstName: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupFirstName(), OS.DataTypes.DataTypes.Text),
                                    EmploymentStatus: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupEmployementStatus(), OS.DataTypes.DataTypes.Text),
                                    Salutation: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getSalutation(), OS.DataTypes.DataTypes.Text),
                                    City: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupAddressTown(), OS.DataTypes.DataTypes.Text),
                                    Occupation: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getFinancialAssessmentOccupation(), OS.DataTypes.DataTypes.Text),
                                    State: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupAddressState(), OS.DataTypes.DataTypes.Text),
                                    TaxResidence: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupTaxResidence(), OS.DataTypes.DataTypes.Text),
                                    SourceOfWealth: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getFinancialAssessmentSourceOfWealth(), OS.DataTypes.DataTypes.Text),
                                    NetIncome: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getFinancialAssessmentNetIncome(), OS.DataTypes.DataTypes.Text),
                                    CFDFrequency: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getCFDTradePastYear(), OS.DataTypes.DataTypes.Text),
                                    SourceOfExperience: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getFinancialExperience(), OS.DataTypes.DataTypes.Text),
                                    AccountTurnover: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getFinancialAssessmentAccountTurnover(), OS.DataTypes.DataTypes.Text),
                                    LeverageTradingHighRiskStopLoss: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRiskManagement(), OS.DataTypes.DataTypes.Text),
                                    CFDExperience: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getCFDTradingExperience(), OS.DataTypes.DataTypes.Text),
                                    RiskTolerance: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getPotentialLost(), OS.DataTypes.DataTypes.Text),
                                    FatcaDeclaration: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupFatcaDeclaration(), OS.DataTypes.DataTypes.Text),
                                    EducationLevel: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getFinancialAssessmentEducationLevel(), OS.DataTypes.DataTypes.Text),
                                    IncomeSource: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getFinancialAssessmentIncomeSource(), OS.DataTypes.DataTypes.Text),
                                    Currency: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getClientCurrency(), OS.DataTypes.DataTypes.Text),
                                    TradingExperienceFinancialInstruments: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getFinancialExperience(), OS.DataTypes.DataTypes.Text),
                                    SkippedEmploymentDetails: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupNoTaxInformation(), OS.DataTypes.DataTypes.Boolean),
                                    Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                }, function($parameters) {
                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.NewAccountRealEU$newAccountRealEUPayloadJSResult"))();
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
                        return tradershubController.default.derivApiSendMessage$Action(newAccountRealEUPayloadJSResult.value.payloadOut, "", true, callContext).then(function(value) {
                            derivApiSendMessageVar.value = value;
                        });
                    }).then(function() {
                        return OS.Flow.executeSequence(function() {
                            if ((derivApiSendMessageVar.value.isErrorOut)) {
                                // ErrorCode = DerivApiSendMessage.ErrorCode
                                outVars.value.errorCodeOut = derivApiSendMessageVar.value.errorCodeOut;
                                // ErrorMessage = DerivApiSendMessage.ErrorMessage
                                outVars.value.errorMessageOut = derivApiSendMessageVar.value.errorMessageOut;
                            } else {
                                OS.FeedbackMessageService.showFeedbackMessage("Account created successfully.", /*Success*/ 1);
                                OS.Logger.startActiveSpan("RudderStackSuccess", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "RudderStackSuccess");
                                        span.setAttribute("outsystems.function.key", "fcea7a71-b5fe-4d01-a399-0c459433702f");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_controller_NewAccountRealEU_RudderStackSuccessJS, "RudderStackSuccess", "NewAccountRealEU", null, function($parameters) {}, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // JSON Deserialize: JSONDeserializeNewAccountRealResponse
                                jSONDeserializeNewAccountRealResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(derivApiSendMessageVar.value.responseOut, tradershubModel.ST_1a99e1302699632bd3158595a2dd8d57Structure, false);
                                // AuthToken = JSONDeserializeNewAccountRealResponse.Data.New_account_real.Oauth_token
                                tradershubClientVariables.setAuthToken(jSONDeserializeNewAccountRealResponseVar.value.dataOut.new_account_realAttr.oauth_tokenAttr);
                                // ActiveLoginId = JSONDeserializeNewAccountRealResponse.Data.New_account_real.Client_id
                                tradershubClientVariables.setActiveLoginId(jSONDeserializeNewAccountRealResponseVar.value.dataOut.new_account_realAttr.client_idAttr);
                                authorizePayloadJSResult.value = OS.Logger.startActiveSpan("AuthorizePayload", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "AuthorizePayload");
                                        span.setAttribute("outsystems.function.key", "75398b4e-8b8b-444c-8c7a-f8bb80210bdf");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_controller_NewAccountRealEU_AuthorizePayloadJS, "AuthorizePayload", "NewAccountRealEU", {
                                            AuthToken: OS.DataConversion.JSNodeParamConverter.to(jSONDeserializeNewAccountRealResponseVar.value.dataOut.new_account_realAttr.oauth_tokenAttr, OS.DataTypes.DataTypes.Text),
                                            Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.NewAccountRealEU$authorizePayloadJSResult"))();
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
                                            span.setAttribute("outsystems.function.key", "b1f28c39-1367-4990-9cf4-dd5e1db4443a");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(tradershub_controller_NewAccountRealEU_SyncLocalStorageJS, "SyncLocalStorage", "NewAccountRealEU", {
                                                Token: OS.DataConversion.JSNodeParamConverter.to(jSONDeserializeNewAccountRealResponseVar.value.dataOut.new_account_realAttr.oauth_tokenAttr, OS.DataTypes.DataTypes.Text),
                                                Response: OS.DataConversion.JSNodeParamConverter.to(derivApiSendAuthorizeVar.value.responseOut, OS.DataTypes.DataTypes.Text)
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
    tradershubController.default.constructor.registerVariableGroupType("tradershub.NewAccountRealEU$newAccountRealEUPayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.NewAccountRealEU$authorizePayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.NewAccountRealEU$outVars", [{
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
    }, {
        name: "ErrorMessage",
        attrName: "errorMessageOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.newAccountRealEU$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.newAccountRealEU$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                IsSuccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.isSuccessOut, OS.DataTypes.DataTypes.Boolean),
                ErrorCode: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorCodeOut, OS.DataTypes.DataTypes.Text),
                ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("tradershub.controller$NewAccountRealEU.NewAccountRealEUPayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const affiliate_token = getCookieValue('affiliate_tracking');

        function parseDateFromDDMMYYYY() {
            const [day, month, year] = String($parameters.DateOfBirth ?? "01/01/1999").split('/');
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
        }

        const payload = {
            new_account_maltainvest: 1,
            account_opening_reason: $parameters.AccountOpeningReason,
            account_turnover: $parameters.AccountTurnover,
            address_city: $parameters.City,
            address_line_1: $parameters.Address,
            address_postcode: $parameters.PostCode,
            address_state: $parameters.State,
            cfd_experience: $parameters.CFDExperience,
            cfd_frequency: $parameters.CFDFrequency,
            cfd_trading_definition: $parameters.CFDTradingDefinition,
            citizen: $parameters.Citizen,
            currency: $parameters.Currency,
            date_of_birth: parseDateFromDDMMYYYY(),
            education_level: $parameters.EducationLevel,
            employment_industry: $parameters.EmploymentIndustry,
            employment_status: $parameters.EmploymentStatus,
            estimated_worth: $parameters.EstimatedWorth,
            fatca_declaration: Number($parameters.FatcaDeclaration),
            first_name: $parameters.FirstName,
            income_source: $parameters.IncomeSource,
            last_name: $parameters.LastName,
            leverage_impact_trading: $parameters.LeverageImpactTrading,
            leverage_trading_high_risk_stop_loss: $parameters.LeverageTradingHighRiskStopLoss,
            net_income: $parameters.NetIncome,
            occupation: $parameters.Occupation,
            phone: $parameters.Phone,
            place_of_birth: $parameters.PlaceOfBirth,
            required_initial_margin: $parameters.RequiredInitialMargin,
            residence: $parameters.Residence,
            resident_self_declaration: 1,
            risk_tolerance: $parameters.RiskTolerance,
            salutation: $parameters.Salutation,
            source_of_experience: $parameters.SourceOfExperience,
            source_of_wealth: $parameters.SourceOfWealth,
            tax_residence: $parameters.TaxResidence,
            tnc_acceptance: 1,
            trading_experience_financial_instruments: $parameters.$parameters.TradingExperienceFinancialInstruments,
            trading_frequency_financial_instruments: $parameters.TradingFrequencyFinancialInstruments
        };


        if (affiliate_token) {
            payload.affiliate_token = affiliate_token;
        }

        if ($parameters.SkippedEmploymentDetails) {
            payload.tin_skipped = 1;
        } else {
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

define("tradershub.controller$NewAccountRealEU.AuthorizePayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Payload = JSON.stringify({
            authorize: $parameters.AuthToken
        })
    };
});

define("tradershub.controller$NewAccountRealEU.SyncLocalStorageJS", [], function() {
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

define("tradershub.controller$NewAccountRealEU.RudderStackSuccessJS", [], function() {
    return function($actions, $roles, $public) {
        cacheTrackEvents.track({
            name: "ce_real_account_signup_form",
            properties: {
                action: "real_signup_finished",
                form_name: "real_account_signup_form_outsystems"
            }
        });
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
                    // CheckExcludedRoutes
                    return OS.Flow.executeSequence(function() {
                        if ((!((((OS.BuiltinFunctions.index(OS.BuiltinFunctions.getBookmarkableURL(), "preload-helper", 0, false, true) > -1)) ? (true) : (false))))) {
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
                                        AppId: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                        Lang: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                    }, function($parameters) {
                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.OnApplicationReady$getConfigJSResult"))();
                                        jsNodeResult.uRLOut = OS.DataConversion.JSNodeParamConverter.from($parameters.URL, OS.DataTypes.DataTypes.Text);
                                        jsNodeResult.appIdOut = OS.DataConversion.JSNodeParamConverter.from($parameters.AppId, OS.DataTypes.DataTypes.Text);
                                        jsNodeResult.langOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Lang, OS.DataTypes.DataTypes.Text);
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
                            }).then(function() {
                                // Execute Action: RequireScriptGTM
                                return OS.SystemActions.requireScript(OS.Navigation.VersionedURL.getVersionedUrl("scripts/tradershub.GTM.js"), callContext);
                            }).then(function() {
                                if ((((getConfigJSResult.value.langOut) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
                                    // Execute Action: SetCurrentLocale
                                    OS.SystemActions.setCurrentLocale(getConfigJSResult.value.langOut, callContext);
                                }

                            });
                        }

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
    }, {
        name: "Lang",
        attrName: "langOut",
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
            $parameters.Lang = new URLSearchParams(window.location.search).get('locale') ?? ""

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


define("tradershub.controller$PostCashierCryptoDeposit", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "tradershub.controller$PostCashierCryptoDeposit.ModifyDataJS", "tradershub.controller$PostCashierCryptoDeposit.PayloadJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "RESTAPIWebsocketOfficial.model$ST_2f46c6fecf81fe9d91763f789141eec9Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, tradershub_controller_PostCashierCryptoDeposit_ModifyDataJS, tradershub_controller_PostCashierCryptoDeposit_PayloadJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.postCashierCryptoDeposit$Action = function(cashierIn, callContext) {
        return OS.Logger.startActiveSpan("PostCashierCryptoDeposit", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostCashierCryptoDeposit");
                span.setAttribute("outsystems.function.key", "3061ec0b-8375-4676-bd2e-6a395f30ec72");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.PostCashierCryptoDeposit$vars"))());
                vars.value.cashierInLocal = cashierIn;
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var modifyDataJSResult = new OS.DataTypes.VariableHolder();
                var payloadJSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializeGetSettingsResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_2f46c6fecf81fe9d91763f789141eec9Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.PostCashierCryptoDeposit$outVars"))());
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
                            return controller.safeExecuteJSNode(tradershub_controller_PostCashierCryptoDeposit_PayloadJS, "Payload", "PostCashierCryptoDeposit", {
                                Cashier: OS.DataConversion.JSNodeParamConverter.to(vars.value.cashierInLocal, OS.DataTypes.DataTypes.Text),
                                Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.PostCashierCryptoDeposit$payloadJSResult"))();
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
                                    return controller.safeExecuteJSNode(tradershub_controller_PostCashierCryptoDeposit_ModifyDataJS, "ModifyData", "PostCashierCryptoDeposit", {
                                        Data: OS.DataConversion.JSNodeParamConverter.to(derivApiSendMessageVar.value.responseOut, OS.DataTypes.DataTypes.Text),
                                        Response: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                    }, function($parameters) {
                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.PostCashierCryptoDeposit$modifyDataJSResult"))();
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
    tradershubController.default.constructor.registerVariableGroupType("tradershub.PostCashierCryptoDeposit$vars", [{
        name: "Cashier",
        attrName: "cashierInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "deposit";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.PostCashierCryptoDeposit$modifyDataJSResult", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.PostCashierCryptoDeposit$payloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.PostCashierCryptoDeposit$outVars", [{
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
    tradershubController.default.clientActionProxies.postCashierCryptoDeposit$Action = function(cashierIn) {
        cashierIn = (cashierIn === undefined) ? "deposit" : cashierIn;
        return controller.executeActionInsideJSNode(tradershubController.default.postCashierCryptoDeposit$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(cashierIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                IsError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});

define("tradershub.controller$PostCashierCryptoDeposit.ModifyDataJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const data = JSON.parse($parameters.Data);

        $parameters.Response = JSON.stringify(data)

    };
});

define("tradershub.controller$PostCashierCryptoDeposit.PayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const payload = {
            "cashier": $parameters.Cashier,
            "provider": "crypto",
            "type": "api",
        }

        $parameters.Payload = JSON.stringify(payload);
    };
});


define("tradershub.controller$PostCashierCryptoWithdraw", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "tradershub.controller$PostCashierCryptoWithdraw.ModifyDataJS", "tradershub.controller$PostCashierCryptoWithdraw.PayloadJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "RESTAPIWebsocketOfficial.model$ST_2f46c6fecf81fe9d91763f789141eec9Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, tradershub_controller_PostCashierCryptoWithdraw_ModifyDataJS, tradershub_controller_PostCashierCryptoWithdraw_PayloadJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.postCashierCryptoWithdraw$Action = function(verificationCodeIn, addressIn, amountIn, estimatedFeeUniqueIdIn, dryRunIn, callContext) {
        return OS.Logger.startActiveSpan("PostCashierCryptoWithdraw", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostCashierCryptoWithdraw");
                span.setAttribute("outsystems.function.key", "1951ef44-74f9-4696-97f2-4fbeeadc8632");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.PostCashierCryptoWithdraw$vars"))());
                vars.value.verificationCodeInLocal = verificationCodeIn;
                vars.value.addressInLocal = addressIn;
                vars.value.amountInLocal = amountIn;
                vars.value.estimatedFeeUniqueIdInLocal = estimatedFeeUniqueIdIn;
                vars.value.dryRunInLocal = dryRunIn;
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var modifyDataJSResult = new OS.DataTypes.VariableHolder();
                var payloadJSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializeGetSettingsResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_2f46c6fecf81fe9d91763f789141eec9Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.PostCashierCryptoWithdraw$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    payloadJSResult.value = OS.Logger.startActiveSpan("Payload", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "Payload");
                            span.setAttribute("outsystems.function.key", "ffb1f414-fd4a-4963-b6b6-d431aa42ded5");
                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteJSNode(tradershub_controller_PostCashierCryptoWithdraw_PayloadJS, "Payload", "PostCashierCryptoWithdraw", {
                                Amount: OS.DataConversion.JSNodeParamConverter.to(vars.value.amountInLocal, OS.DataTypes.DataTypes.Decimal),
                                EstimatedFeeUniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.estimatedFeeUniqueIdInLocal, OS.DataTypes.DataTypes.Text),
                                VerificationCode: OS.DataConversion.JSNodeParamConverter.to(vars.value.verificationCodeInLocal, OS.DataTypes.DataTypes.Text),
                                Address: OS.DataConversion.JSNodeParamConverter.to(vars.value.addressInLocal, OS.DataTypes.DataTypes.Text),
                                DryRun: OS.DataConversion.JSNodeParamConverter.to(vars.value.dryRunInLocal, OS.DataTypes.DataTypes.Boolean),
                                Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.PostCashierCryptoWithdraw$payloadJSResult"))();
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
                                    span.setAttribute("outsystems.function.key", "8bbef8c1-a457-4182-9167-ecf3facf8eee");
                                    span.setAttribute("outsystems.function.owner.name", "tradershub");
                                    span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                }

                                try {
                                    return controller.safeExecuteJSNode(tradershub_controller_PostCashierCryptoWithdraw_ModifyDataJS, "ModifyData", "PostCashierCryptoWithdraw", {
                                        Data: OS.DataConversion.JSNodeParamConverter.to(derivApiSendMessageVar.value.responseOut, OS.DataTypes.DataTypes.Text),
                                        Response: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                    }, function($parameters) {
                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.PostCashierCryptoWithdraw$modifyDataJSResult"))();
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
    tradershubController.default.constructor.registerVariableGroupType("tradershub.PostCashierCryptoWithdraw$vars", [{
        name: "VerificationCode",
        attrName: "verificationCodeInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Address",
        attrName: "addressInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Amount",
        attrName: "amountInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Decimal,
        defaultValue: function() {
            return OS.DataTypes.Decimal.defaultValue;
        }
    }, {
        name: "EstimatedFeeUniqueId",
        attrName: "estimatedFeeUniqueIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "DryRun",
        attrName: "dryRunInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.PostCashierCryptoWithdraw$modifyDataJSResult", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.PostCashierCryptoWithdraw$payloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.PostCashierCryptoWithdraw$outVars", [{
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
    tradershubController.default.clientActionProxies.postCashierCryptoWithdraw$Action = function(verificationCodeIn, addressIn, amountIn, estimatedFeeUniqueIdIn, dryRunIn) {
        verificationCodeIn = (verificationCodeIn === undefined) ? "" : verificationCodeIn;
        addressIn = (addressIn === undefined) ? "" : addressIn;
        amountIn = (amountIn === undefined) ? OS.DataTypes.Decimal.defaultValue : amountIn;
        estimatedFeeUniqueIdIn = (estimatedFeeUniqueIdIn === undefined) ? "" : estimatedFeeUniqueIdIn;
        dryRunIn = (dryRunIn === undefined) ? false : dryRunIn;
        return controller.executeActionInsideJSNode(tradershubController.default.postCashierCryptoWithdraw$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(verificationCodeIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(addressIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(amountIn, OS.DataTypes.DataTypes.Decimal), OS.DataConversion.JSNodeParamConverter.from(estimatedFeeUniqueIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(dryRunIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                IsError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});

define("tradershub.controller$PostCashierCryptoWithdraw.ModifyDataJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const data = JSON.parse($parameters.Data);

        $parameters.Response = JSON.stringify(data)

    };
});

define("tradershub.controller$PostCashierCryptoWithdraw.PayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const payload = {
            "cashier": "withdraw",
            "provider": "crypto",
            "type": "api",
        }

        if ($parameters.DryRun) {
            payload.dry_run = 1
        }

        if ($parameters.VerificationCode) {
            payload.verification_code = $parameters.VerificationCode
        }

        if ($parameters.Address) {
            payload.address = $parameters.Address
        }

        if ($parameters.Amount) {
            payload.amount = $parameters.Amount
        }

        if ($parameters.EstimatedFeeUniqueId) {
            estimated_fee_unique_id = $parameters.EstimatedFeeUniqueId
        }

        $parameters.Payload = JSON.stringify(payload);
    };
});


define("tradershub.controller$PostCashierFiat", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "tradershub.controller$PostCashierFiat.PayloadJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "RESTAPIWebsocketOfficial.model$ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, tradershub_controller_PostCashierFiat_PayloadJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.postCashierFiat$Action = function(cashierIn, verificationCodeIn, callContext) {
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
                vars.value.verificationCodeInLocal = verificationCodeIn;
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
                                verification_code: OS.DataConversion.JSNodeParamConverter.to(vars.value.verificationCodeInLocal, OS.DataTypes.DataTypes.Text),
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
    }, {
        name: "VerificationCode",
        attrName: "verificationCodeInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
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
    tradershubController.default.clientActionProxies.postCashierFiat$Action = function(cashierIn, verificationCodeIn) {
        cashierIn = (cashierIn === undefined) ? "deposit" : cashierIn;
        verificationCodeIn = (verificationCodeIn === undefined) ? "" : verificationCodeIn;
        return controller.executeActionInsideJSNode(tradershubController.default.postCashierFiat$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(cashierIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(verificationCodeIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
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

        if ($parameters.verification_code) {
            payload.verification_code = $parameters.verification_code
        }

        $parameters.Payload = JSON.stringify(payload);
    };
});


define("tradershub.controller$PostSignupActions", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$PostSignupActions.AuthorizePayloadJS", "tradershub.controller$PostSignupActions.SetAccountSettingsPayloadJS", "tradershub.controller$PostSignupActions.GetIDVCountryJS", "tradershub.controller$PostSignupActions.SyncLocalStorageJS", "tradershub.controller$PostSignupActions.CheckLandingCompanyJS", "tradershub.clientVariables", "tradershub.controller$FeatureFlagValueByName", "tradershub.controller$SetAccountSettings", "tradershub.controller$RudderstackIdentifyEvent", "tradershub.controller$DerivApiSendMessage", "tradershub.controller$CleanupAfterSignup", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_PostSignupActions_AuthorizePayloadJS, tradershub_controller_PostSignupActions_SetAccountSettingsPayloadJS, tradershub_controller_PostSignupActions_GetIDVCountryJS, tradershub_controller_PostSignupActions_SyncLocalStorageJS, tradershub_controller_PostSignupActions_CheckLandingCompanyJS, tradershubClientVariables) {
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
                var eU_RAC_FFVar = new OS.DataTypes.VariableHolder();
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
                        // Execute Action: EU_RAC_FF
                        eU_RAC_FFVar.value = tradershubController.default.featureFlagValueByName$Action("EURealAccountCreation", callContext);

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
                                    ContinueEURealAccountCreation: OS.DataConversion.JSNodeParamConverter.to(eU_RAC_FFVar.value.isEnabledOut, OS.DataTypes.DataTypes.Boolean),
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

        if (!$parameters.ContinueEURealAccountCreation) {
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
                        window.location.href = `https://staging-app.deriv.com/redirect?action=add_account_multiplier&ext_platform_url=https%3A%2F%2F${hostname}%2Ftradershub`
                    } else {
                        window.location.href = `https://staging-app.deriv.com/redirect?action=add_account&ext_platform_url=https%3A%2F%2F${hostname}%2Ftradershub`
                    }
                }, 100)
            }
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
                                    // Raise Error: InvalidLogin
                                    throw new OS.Exceptions.Exceptions.InvalidLoginException("Invalid Token");
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
                                    // ClientCurrency = JSONDeserializeAuthorizeResponse.Data.Authorize.Currency
                                    tradershubClientVariables.setClientCurrency(jSONDeserializeAuthorizeResponseVar.value.dataOut.authorizeAttr.currencyAttr);
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
                            return tradershubController.default.derivApiSendMessage$Action(iDVPayloadJSResult.value.payloadOut, "identity_verification_document_add", false, callContext).then(function(value) {
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


define("tradershub.controller$SetEUTrackingCookies", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$SetEUTrackingCookies.SetCookieJS", "tradershub.clientVariables"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_SetEUTrackingCookies_SetCookieJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.setEUTrackingCookies$Action = function(isAcceptedIn, callContext) {
        return OS.Logger.startActiveSpan("SetEUTrackingCookies", function(span) {
            if (span) {
                span.setAttribute("code.function", "SetEUTrackingCookies");
                span.setAttribute("outsystems.function.key", "61d90ccb-c40b-4d76-8417-cf04d714c987");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.SetEUTrackingCookies$vars"))());
                vars.value.isAcceptedInLocal = isAcceptedIn;
                OS.Logger.startActiveSpan("SetCookie", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SetCookie");
                        span.setAttribute("outsystems.function.key", "21acd9db-b4b4-4536-b9c4-8ba2ac6f45bf");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(tradershub_controller_SetEUTrackingCookies_SetCookieJS, "SetCookie", "SetEUTrackingCookies", {
                            IsAccepted: OS.DataConversion.JSNodeParamConverter.to(vars.value.isAcceptedInLocal, OS.DataTypes.DataTypes.Boolean)
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
    tradershubController.default.constructor.registerVariableGroupType("tradershub.SetEUTrackingCookies$vars", [{
        name: "IsAccepted",
        attrName: "isAcceptedInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.clientActionProxies.setEUTrackingCookies$Action = function(isAcceptedIn) {
        isAcceptedIn = (isAcceptedIn === undefined) ? false : isAcceptedIn;
        return controller.executeActionInsideJSNode(tradershubController.default.setEUTrackingCookies$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(isAcceptedIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("tradershub.controller$SetEUTrackingCookies.SetCookieJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const domain = "deriv.com"

        window?.JSCookies?.set("tracking_status", $parameters.IsAccepted ? true : "", {
            domain
        })

        if (!$parameters.IsAccepted) {
            window?.JSCookies?.set("tracking_status_decline", true, {
                domain
            })
        }

    };
});


define("tradershub.controller$SetTokenByLoginId", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.clientVariables", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure", "tradershub.controller$SendAuthorize", "tradershub.model$ST_52667a49e65b5175f66dacecb12f345fStructure", "tradershub.controller$GetAccountByLoginId"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.setTokenByLoginId$Action = function(loginIdIn, callContext) {
        return OS.Logger.startActiveSpan("SetTokenByLoginId", function(span) {
            if (span) {
                span.setAttribute("code.function", "SetTokenByLoginId");
                span.setAttribute("outsystems.function.key", "e2859ae0-1557-404d-897d-1b182b9f9c7e");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.SetTokenByLoginId$vars"))());
                vars.value.loginIdInLocal = loginIdIn;
                var sendAuthorizeVar = new OS.DataTypes.VariableHolder();
                var getTokenByLoginIdVar = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.SetTokenByLoginId$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: GetTokenByLoginId
                    getTokenByLoginIdVar.value = tradershubController.default.getAccountByLoginId$Action(vars.value.loginIdInLocal, callContext);

                    // AuthToken = GetTokenByLoginId.Token
                    tradershubClientVariables.setAuthToken(getTokenByLoginIdVar.value.tokenOut);
                    // Execute Action: SendAuthorize
                    return tradershubController.default.sendAuthorize$Action(false, callContext).then(function(value) {
                        sendAuthorizeVar.value = value;
                    }).then(function() {
                        // ErrorMessage = SendAuthorize.ErrorMessage
                        outVars.value.errorMessageOut = sendAuthorizeVar.value.errorMessageOut;
                        // IsError = SendAuthorize.IsError
                        outVars.value.isErrorOut = sendAuthorizeVar.value.isErrorOut;
                        // Response = SendAuthorize.Response
                        outVars.value.responseOut = sendAuthorizeVar.value.responseOut;
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
    tradershubController.default.constructor.registerVariableGroupType("tradershub.SetTokenByLoginId$vars", [{
        name: "LoginId",
        attrName: "loginIdInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.SetTokenByLoginId$outVars", [{
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
    tradershubController.default.clientActionProxies.setTokenByLoginId$Action = function(loginIdIn) {
        loginIdIn = (loginIdIn === undefined) ? "" : loginIdIn;
        return controller.executeActionInsideJSNode(tradershubController.default.setTokenByLoginId$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(loginIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                IsError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isErrorOut, OS.DataTypes.DataTypes.Boolean),
                ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});


define("tradershub.controller$Statement", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$Statement.PayloadJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "tradershub.model$ST_290a67dab0570e5bf53bc562ec0f2742Structure"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_Statement_PayloadJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.statement$Action = function(actionTypeIn, limitIn, callContext) {
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
                vars.value.limitInLocal = limitIn;
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var payloadJSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializeGetSettingsResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_290a67dab0570e5bf53bc562ec0f2742Structure))());
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
                                Limit: OS.DataConversion.JSNodeParamConverter.to(vars.value.limitInLocal, OS.DataTypes.DataTypes.Text),
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
                            jSONDeserializeGetSettingsResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(derivApiSendMessageVar.value.responseOut, tradershubModel.ST_290a67dab0570e5bf53bc562ec0f2742Structure, false);
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
    }, {
        name: "Limit",
        attrName: "limitInLocal",
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
            return new tradershubModel.ST_290a67dab0570e5bf53bc562ec0f2742Structure();
        },
        complexType: tradershubModel.ST_290a67dab0570e5bf53bc562ec0f2742Structure
    }, {
        name: "IsError",
        attrName: "isErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.clientActionProxies.statement$Action = function(actionTypeIn, limitIn) {
        actionTypeIn = (actionTypeIn === undefined) ? "" : actionTypeIn;
        limitIn = (limitIn === undefined) ? "" : limitIn;
        return controller.executeActionInsideJSNode(tradershubController.default.statement$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(actionTypeIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(limitIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                IsError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});

define("tradershub.controller$Statement.PayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const payload = {
            description: 1
        };

        if ($parameters.ActionType) {
            payload.action_type = $parameters.ActionType;
        }

        if ($parameters.Limit) {
            payload.limit = $parameters.Limit;
        }

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


define("tradershub.controller$TextToBoolean", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.clientVariables"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.textToBoolean$Action = function(textIn, trimIn, callContext) {
        return OS.Logger.startActiveSpan("TextToBoolean", function(span) {
            if (span) {
                span.setAttribute("code.function", "TextToBoolean");
                span.setAttribute("outsystems.function.key", "f3b493d5-ee9f-4656-b884-0ccbd2d6ce3d");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.TextToBoolean$vars"))());
                vars.value.textInLocal = textIn;
                vars.value.trimInLocal = trimIn;
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.TextToBoolean$outVars"))());
                // Result = If
                outVars.value.resultOut = (((OS.BuiltinFunctions.length(((vars.value.trimInLocal) ? (OS.BuiltinFunctions.trim(vars.value.textInLocal)) : (vars.value.textInLocal))) > 0)) ? (true) : (false));
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.TextToBoolean$vars", [{
        name: "Text",
        attrName: "textInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Trim",
        attrName: "trimInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return true;
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.TextToBoolean$outVars", [{
        name: "Result",
        attrName: "resultOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.clientActionProxies.textToBoolean$Action = function(textIn, trimIn) {
        textIn = (textIn === undefined) ? "" : textIn;
        trimIn = (trimIn === undefined) ? true : trimIn;
        return controller.executeActionInsideJSNode(tradershubController.default.textToBoolean$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(textIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(trimIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Result: OS.DataConversion.JSNodeParamConverter.to(actionResults.resultOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("tradershub.controller$TINValidations", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$TINValidations.PayloadJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "tradershub.model$ST_8011e4cc4d4f7bb6f204cedde99885f1Structure"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_TINValidations_PayloadJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.tINValidations$Action = function(residenceIn, callContext) {
        return OS.Logger.startActiveSpan("TINValidations", function(span) {
            if (span) {
                span.setAttribute("code.function", "TINValidations");
                span.setAttribute("outsystems.function.key", "0b96e989-e6c6-41f5-a5d8-9ef95640b888");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.TINValidations$vars"))());
                vars.value.residenceInLocal = residenceIn;
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var payloadJSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializeTINValidationsResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_8011e4cc4d4f7bb6f204cedde99885f1Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.TINValidations$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    payloadJSResult.value = OS.Logger.startActiveSpan("Payload", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "Payload");
                            span.setAttribute("outsystems.function.key", "020485cc-83c0-49a1-b6fa-5c09efd9d4b7");
                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteJSNode(tradershub_controller_TINValidations_PayloadJS, "Payload", "TINValidations", {
                                Residence: OS.DataConversion.JSNodeParamConverter.to(vars.value.residenceInLocal, OS.DataTypes.DataTypes.Text),
                                Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.TINValidations$payloadJSResult"))();
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
                    return tradershubController.default.derivApiSendMessage$Action(payloadJSResult.value.payloadOut, "", false, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    }).then(function() {
                        // JSON Deserialize: JSONDeserializeTINValidationsResponse
                        jSONDeserializeTINValidationsResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(derivApiSendMessageVar.value.responseOut, tradershubModel.ST_8011e4cc4d4f7bb6f204cedde99885f1Structure, false);
                        // Response = JSONDeserializeTINValidationsResponse.Data
                        outVars.value.responseOut = jSONDeserializeTINValidationsResponseVar.value.dataOut;
                        // IsError = DerivApiSendMessage.IsError
                        outVars.value.isErrorOut = derivApiSendMessageVar.value.isErrorOut;
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
    tradershubController.default.constructor.registerVariableGroupType("tradershub.TINValidations$vars", [{
        name: "Residence",
        attrName: "residenceInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.TINValidations$payloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.TINValidations$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new tradershubModel.ST_8011e4cc4d4f7bb6f204cedde99885f1Structure();
        },
        complexType: tradershubModel.ST_8011e4cc4d4f7bb6f204cedde99885f1Structure
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
    tradershubController.default.clientActionProxies.tINValidations$Action = function(residenceIn) {
        residenceIn = (residenceIn === undefined) ? "" : residenceIn;
        return controller.executeActionInsideJSNode(tradershubController.default.tINValidations$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(residenceIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                IsError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isErrorOut, OS.DataTypes.DataTypes.Boolean),
                ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("tradershub.controller$TINValidations.PayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Payload = JSON.stringify({
            "tin_validations": 1,
            "tax_residence": $parameters.Residence
        })
    };
});


define("tradershub.controller$TradingPlatformAccounts", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$TradingPlatformAccounts.ModifyDataJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "tradershub.controller$GenerateAvailableAccountsPayload", "tradershub.model$EN_951592e59194625ab2f46e72a884ba99EntityRecord", "tradershub.model$RL_f704dd0f97cbebb5d4f4586f373fbb9b"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_TradingPlatformAccounts_ModifyDataJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.tradingPlatformAccounts$Action = function(platformIn, cFDAccountsIn, accountTypeIn, callContext) {
        return OS.Logger.startActiveSpan("TradingPlatformAccounts", function(span) {
            if (span) {
                span.setAttribute("code.function", "TradingPlatformAccounts");
                span.setAttribute("outsystems.function.key", "684fd4a6-e9d0-4790-ae6a-e6dc9094751c");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.TradingPlatformAccounts$vars"))());
                vars.value.platformInLocal = platformIn;
                vars.value.cFDAccountsInLocal = cFDAccountsIn.clone();
                vars.value.accountTypeInLocal = accountTypeIn;
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var generateAvailableAccountsPayloadVar = new OS.DataTypes.VariableHolder();
                var modifyDataJSResult = new OS.DataTypes.VariableHolder();
                var jSONSerializeCFDAccountsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.TradingPlatformAccounts$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: GenerateAvailableAccountsPayload
                    generateAvailableAccountsPayloadVar.value = tradershubController.default.generateAvailableAccountsPayload$Action(vars.value.platformInLocal, callContext);

                    // Execute Action: DerivApiSendMessage
                    return tradershubController.default.derivApiSendMessage$Action(generateAvailableAccountsPayloadVar.value.payloadOut, "trading_platform_accounts", true, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    }).then(function() {
                        if ((derivApiSendMessageVar.value.isErrorOut)) {
                            OS.FeedbackMessageService.showFeedbackMessage(derivApiSendMessageVar.value.errorMessageOut, /*Error*/ 3);
                        } else {
                            // JSON Serialize: JSONSerializeCFDAccounts
                            jSONSerializeCFDAccountsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.cFDAccountsInLocal, false, false);
                            modifyDataJSResult.value = OS.Logger.startActiveSpan("ModifyData", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "ModifyData");
                                    span.setAttribute("outsystems.function.key", "105b3d59-7f67-4257-b140-f86b5966e78d");
                                    span.setAttribute("outsystems.function.owner.name", "tradershub");
                                    span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                }

                                try {
                                    return controller.safeExecuteJSNode(tradershub_controller_TradingPlatformAccounts_ModifyDataJS, "ModifyData", "TradingPlatformAccounts", {
                                        Data: OS.DataConversion.JSNodeParamConverter.to(derivApiSendMessageVar.value.responseOut, OS.DataTypes.DataTypes.Text),
                                        CFDAccounts: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeCFDAccountsVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                        Platform: OS.DataConversion.JSNodeParamConverter.to(vars.value.platformInLocal, OS.DataTypes.DataTypes.Text),
                                        DemoAccounts: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                        RealAccounts: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                    }, function($parameters) {
                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.TradingPlatformAccounts$modifyDataJSResult"))();
                                        jsNodeResult.demoAccountsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DemoAccounts, OS.DataTypes.DataTypes.Text);
                                        jsNodeResult.realAccountsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.RealAccounts, OS.DataTypes.DataTypes.Text);
                                        return jsNodeResult;
                                    }, {}, {});
                                } finally {
                                    if (span) {
                                        span.end();
                                    }

                                }

                            }, 1);
                            // IsDemoAccount
                            if (((vars.value.accountTypeInLocal === "demo"))) {
                                // Response = ModifyData.DemoAccounts
                                outVars.value.responseOut = modifyDataJSResult.value.demoAccountsOut;
                            } else {
                                // Response = ModifyData.RealAccounts
                                outVars.value.responseOut = modifyDataJSResult.value.realAccountsOut;
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
    tradershubController.default.constructor.registerVariableGroupType("tradershub.TradingPlatformAccounts$vars", [{
        name: "Platform",
        attrName: "platformInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "CFDAccounts",
        attrName: "cFDAccountsInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.RecordList,
        defaultValue: function() {
            return new tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b();
        },
        complexType: tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b
    }, {
        name: "AccountType",
        attrName: "accountTypeInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.TradingPlatformAccounts$modifyDataJSResult", [{
        name: "DemoAccounts",
        attrName: "demoAccountsOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "RealAccounts",
        attrName: "realAccountsOut",
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
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.tradingPlatformAccounts$Action = function(platformIn, cFDAccountsIn, accountTypeIn) {
        platformIn = (platformIn === undefined) ? "" : platformIn;
        cFDAccountsIn = (cFDAccountsIn === undefined) ? new tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b() : cFDAccountsIn;
        accountTypeIn = (accountTypeIn === undefined) ? "" : accountTypeIn;
        return controller.executeActionInsideJSNode(tradershubController.default.tradingPlatformAccounts$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(platformIn, OS.DataTypes.DataTypes.Text), cFDAccountsIn, OS.DataConversion.JSNodeParamConverter.from(accountTypeIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: OS.DataConversion.JSNodeParamConverter.to(actionResults.responseOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("tradershub.controller$TradingPlatformAccounts.ModifyDataJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const data = JSON.parse($parameters.Data);
        const tradingPlatformAccounts = data?.trading_platform_accounts || [];
        const cfdAccounts = JSON.parse($parameters.CFDAccounts) || [];

        const filteredAccounts = tradingPlatformAccounts?.map(account => {
            const identifier = `${$parameters.Platform}_${account.product || 'standard'}`;
            const matchedConfig = cfdAccounts.find(config => config.ProductIdentifier === identifier) || {};

            return {
                ...account,
                identifier,
                icon: matchedConfig.Icon || '',
                label: matchedConfig.Label || '',
                description: matchedConfig.Description || ''
            };
        });

        const demoAccounts = filteredAccounts.filter(({
            account_type
        }) => account_type === 'demo');
        const realAccounts = filteredAccounts.filter(({
            account_type
        }) => account_type === 'real');

        $parameters.DemoAccounts = JSON.stringify(demoAccounts);
        $parameters.RealAccounts = JSON.stringify(realAccounts);

    };
});


define("tradershub.controller$TradingPlatformAvailableAccounts2", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$TradingPlatformAvailableAccounts2.ModifyDataJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "tradershub.controller$GenerateAvailableAccountsPayload", "tradershub.model$EN_951592e59194625ab2f46e72a884ba99EntityRecord", "tradershub.model$RL_f704dd0f97cbebb5d4f4586f373fbb9b"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_TradingPlatformAvailableAccounts2_ModifyDataJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.tradingPlatformAvailableAccounts2$Action = function(platformIn, cFDAccountsIn, callContext) {
        return OS.Logger.startActiveSpan("TradingPlatformAvailableAccounts2", function(span) {
            if (span) {
                span.setAttribute("code.function", "TradingPlatformAvailableAccounts2");
                span.setAttribute("outsystems.function.key", "01d5a153-7eb8-45bd-94b5-01a831412f28");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.TradingPlatformAvailableAccounts2$vars"))());
                vars.value.platformInLocal = platformIn;
                vars.value.cFDAccountsInLocal = cFDAccountsIn.clone();
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var generateAvailableAccountsPayloadVar = new OS.DataTypes.VariableHolder();
                var modifyDataJSResult = new OS.DataTypes.VariableHolder();
                var jSONSerializeCFDAccountsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.TradingPlatformAvailableAccounts2$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: GenerateAvailableAccountsPayload
                    generateAvailableAccountsPayloadVar.value = tradershubController.default.generateAvailableAccountsPayload$Action(vars.value.platformInLocal, callContext);

                    // Execute Action: DerivApiSendMessage
                    return tradershubController.default.derivApiSendMessage$Action(generateAvailableAccountsPayloadVar.value.payloadOut, "trading_platform_available_accounts", ((((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier()))) ? (true) : (false)), callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    }).then(function() {
                        if ((derivApiSendMessageVar.value.isErrorOut)) {
                            OS.FeedbackMessageService.showFeedbackMessage(derivApiSendMessageVar.value.errorMessageOut, /*Error*/ 3);
                        } else {
                            // JSON Serialize: JSONSerializeCFDAccounts
                            jSONSerializeCFDAccountsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.cFDAccountsInLocal, false, false);
                            modifyDataJSResult.value = OS.Logger.startActiveSpan("ModifyData", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "ModifyData");
                                    span.setAttribute("outsystems.function.key", "02962c22-2333-4243-b3dd-2be508c00e84");
                                    span.setAttribute("outsystems.function.owner.name", "tradershub");
                                    span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                }

                                try {
                                    return controller.safeExecuteJSNode(tradershub_controller_TradingPlatformAvailableAccounts2_ModifyDataJS, "ModifyData", "TradingPlatformAvailableAccounts2", {
                                        Data: OS.DataConversion.JSNodeParamConverter.to(derivApiSendMessageVar.value.responseOut, OS.DataTypes.DataTypes.Text),
                                        CFDAccounts: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeCFDAccountsVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                        Response: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                    }, function($parameters) {
                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.TradingPlatformAvailableAccounts2$modifyDataJSResult"))();
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
    tradershubController.default.constructor.registerVariableGroupType("tradershub.TradingPlatformAvailableAccounts2$vars", [{
        name: "Platform",
        attrName: "platformInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "CFDAccounts",
        attrName: "cFDAccountsInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.RecordList,
        defaultValue: function() {
            return new tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b();
        },
        complexType: tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.TradingPlatformAvailableAccounts2$modifyDataJSResult", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.TradingPlatformAvailableAccounts2$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.tradingPlatformAvailableAccounts2$Action = function(platformIn, cFDAccountsIn) {
        platformIn = (platformIn === undefined) ? "" : platformIn;
        cFDAccountsIn = (cFDAccountsIn === undefined) ? new tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b() : cFDAccountsIn;
        return controller.executeActionInsideJSNode(tradershubController.default.tradingPlatformAvailableAccounts2$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(platformIn, OS.DataTypes.DataTypes.Text), cFDAccountsIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: OS.DataConversion.JSNodeParamConverter.to(actionResults.responseOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("tradershub.controller$TradingPlatformAvailableAccounts2.ModifyDataJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const data = JSON.parse($parameters.Data);
        const availableAccounts = data.trading_platform_available_accounts || [];
        const cfdAccounts = JSON.parse($parameters.CFDAccounts) || [];

        const accountsWithIdentifiers = availableAccounts.map(account => {
            const identifier = `${account.platform}_${account.product}`;
            const matchedConfig = cfdAccounts.find(config => config.ProductIdentifier === identifier);

            return {
                ...account,
                identifier,
                icon: matchedConfig?.Icon || '',
                label: matchedConfig?.Label || '',
                description: matchedConfig?.Description || ''
            }
        });

        const uniqueAvailableAccounts = accountsWithIdentifiers.filter(account => {
            if (account.platform === "mt5") {
                return account.is_default_jurisdiction === "true";
            } else {
                return account;
            }
        });

        $parameters.Response = JSON.stringify(uniqueAvailableAccounts);

    };
});


define("tradershub.controller$TradingPlatformNewAccount", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$TradingPlatformNewAccount.PayloadJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "tradershub.model$ST_7c6f1aa8afe53291591b30baa5b69641Structure"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_TradingPlatformNewAccount_PayloadJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.tradingPlatformNewAccount$Action = function(marketTypeIn, passwordIn, platformIn, callContext) {
        return OS.Logger.startActiveSpan("TradingPlatformNewAccount", function(span) {
            if (span) {
                span.setAttribute("code.function", "TradingPlatformNewAccount");
                span.setAttribute("outsystems.function.key", "31026782-50e0-4bf6-83ec-a45c6f6d0819");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.TradingPlatformNewAccount$vars"))());
                vars.value.marketTypeInLocal = marketTypeIn;
                vars.value.passwordInLocal = passwordIn;
                vars.value.platformInLocal = platformIn;
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var payloadJSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializeResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_7c6f1aa8afe53291591b30baa5b69641Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.TradingPlatformNewAccount$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    payloadJSResult.value = OS.Logger.startActiveSpan("Payload", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "Payload");
                            span.setAttribute("outsystems.function.key", "d238539d-28e8-4d50-8461-eb1f4ebf7e50");
                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteJSNode(tradershub_controller_TradingPlatformNewAccount_PayloadJS, "Payload", "TradingPlatformNewAccount", {
                                MarketType: OS.DataConversion.JSNodeParamConverter.to(vars.value.marketTypeInLocal, OS.DataTypes.DataTypes.Text),
                                Password: OS.DataConversion.JSNodeParamConverter.to(vars.value.passwordInLocal, OS.DataTypes.DataTypes.Text),
                                AccountType: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getAccountType(), OS.DataTypes.DataTypes.Text),
                                Platform: OS.DataConversion.JSNodeParamConverter.to(vars.value.platformInLocal, OS.DataTypes.DataTypes.Text),
                                Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.TradingPlatformNewAccount$payloadJSResult"))();
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
                    return tradershubController.default.derivApiSendMessage$Action(payloadJSResult.value.payloadOut, "trading_platform_new_account", true, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    }).then(function() {
                        if ((derivApiSendMessageVar.value.isErrorOut)) {
                            OS.FeedbackMessageService.showFeedbackMessage(derivApiSendMessageVar.value.errorMessageOut, /*Error*/ 3);
                        } else {
                            // JSON Deserialize: JSONDeserializeResponse
                            jSONDeserializeResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(derivApiSendMessageVar.value.responseOut, tradershubModel.ST_7c6f1aa8afe53291591b30baa5b69641Structure, false);
                            // Response = JSONDeserializeResponse.Data
                            outVars.value.responseOut = jSONDeserializeResponseVar.value.dataOut;
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
    tradershubController.default.constructor.registerVariableGroupType("tradershub.TradingPlatformNewAccount$vars", [{
        name: "MarketType",
        attrName: "marketTypeInLocal",
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
    }, {
        name: "Platform",
        attrName: "platformInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.TradingPlatformNewAccount$payloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.TradingPlatformNewAccount$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new tradershubModel.ST_7c6f1aa8afe53291591b30baa5b69641Structure();
        },
        complexType: tradershubModel.ST_7c6f1aa8afe53291591b30baa5b69641Structure
    }]);
    tradershubController.default.clientActionProxies.tradingPlatformNewAccount$Action = function(marketTypeIn, passwordIn, platformIn) {
        marketTypeIn = (marketTypeIn === undefined) ? "" : marketTypeIn;
        passwordIn = (passwordIn === undefined) ? "" : passwordIn;
        platformIn = (platformIn === undefined) ? "" : platformIn;
        return controller.executeActionInsideJSNode(tradershubController.default.tradingPlatformNewAccount$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(marketTypeIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(passwordIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(platformIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut
            };
        });
    };
});

define("tradershub.controller$TradingPlatformNewAccount.PayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Payload = JSON.stringify({
            "trading_platform_new_account": 1,
            "account_type": $parameters.AccountType,
            "market_type": $parameters.MarketType,
            "password": $parameters.Password,
            "platform": $parameters.Platform,
        })
    };
});


define("tradershub.controller$TradingPlatformPasswordChange", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$TradingPlatformPasswordChange.PayloadJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "tradershub.model$ST_5ac3ea1985fc9113c0222eb9ee2fcb49Structure"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_TradingPlatformPasswordChange_PayloadJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.tradingPlatformPasswordChange$Action = function(oldPasswordIn, platformIn, newPasswordIn, callContext) {
        return OS.Logger.startActiveSpan("TradingPlatformPasswordChange", function(span) {
            if (span) {
                span.setAttribute("code.function", "TradingPlatformPasswordChange");
                span.setAttribute("outsystems.function.key", "2943f009-f5bf-4ca4-971a-b2f5fcf19171");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.TradingPlatformPasswordChange$vars"))());
                vars.value.oldPasswordInLocal = oldPasswordIn;
                vars.value.platformInLocal = platformIn;
                vars.value.newPasswordInLocal = newPasswordIn;
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var payloadJSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializeResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_5ac3ea1985fc9113c0222eb9ee2fcb49Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.TradingPlatformPasswordChange$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Change the Trading Platform password OR sets password for the first time
                    payloadJSResult.value = OS.Logger.startActiveSpan("Payload", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "Payload");
                            span.setAttribute("outsystems.function.key", "14431308-7489-4303-89d2-cfd65281edbb");
                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteJSNode(tradershub_controller_TradingPlatformPasswordChange_PayloadJS, "Payload", "TradingPlatformPasswordChange", {
                                NewPassword: OS.DataConversion.JSNodeParamConverter.to(vars.value.newPasswordInLocal, OS.DataTypes.DataTypes.Text),
                                OldPassword: OS.DataConversion.JSNodeParamConverter.to(vars.value.oldPasswordInLocal, OS.DataTypes.DataTypes.Text),
                                Platform: OS.DataConversion.JSNodeParamConverter.to(vars.value.platformInLocal, OS.DataTypes.DataTypes.Text),
                                Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.TradingPlatformPasswordChange$payloadJSResult"))();
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
                    return tradershubController.default.derivApiSendMessage$Action(payloadJSResult.value.payloadOut, "trading_platform_password_change", true, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    }).then(function() {
                        if ((derivApiSendMessageVar.value.isErrorOut)) {
                            OS.FeedbackMessageService.showFeedbackMessage(derivApiSendMessageVar.value.errorMessageOut, /*Error*/ 3);
                        } else {
                            // JSON Deserialize: JSONDeserializeResponse
                            jSONDeserializeResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(derivApiSendMessageVar.value.responseOut, tradershubModel.ST_5ac3ea1985fc9113c0222eb9ee2fcb49Structure, false);
                            // Response = JSONDeserializeResponse.Data
                            outVars.value.responseOut = jSONDeserializeResponseVar.value.dataOut;
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
    tradershubController.default.constructor.registerVariableGroupType("tradershub.TradingPlatformPasswordChange$vars", [{
        name: "OldPassword",
        attrName: "oldPasswordInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Platform",
        attrName: "platformInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "NewPassword",
        attrName: "newPasswordInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.TradingPlatformPasswordChange$payloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.TradingPlatformPasswordChange$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new tradershubModel.ST_5ac3ea1985fc9113c0222eb9ee2fcb49Structure();
        },
        complexType: tradershubModel.ST_5ac3ea1985fc9113c0222eb9ee2fcb49Structure
    }]);
    tradershubController.default.clientActionProxies.tradingPlatformPasswordChange$Action = function(oldPasswordIn, platformIn, newPasswordIn) {
        oldPasswordIn = (oldPasswordIn === undefined) ? "" : oldPasswordIn;
        platformIn = (platformIn === undefined) ? "" : platformIn;
        newPasswordIn = (newPasswordIn === undefined) ? "" : newPasswordIn;
        return controller.executeActionInsideJSNode(tradershubController.default.tradingPlatformPasswordChange$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(oldPasswordIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(platformIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(newPasswordIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut
            };
        });
    };
});

define("tradershub.controller$TradingPlatformPasswordChange.PayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Payload = JSON.stringify({
            "trading_platform_password_change": 1,
            "new_password": $parameters.NewPassword,
            "old_password": $parameters.OldPassword,
            "platform": $parameters.Platform,
        })
    };
});


define("tradershub.controller$TradingPlatformProductListing", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$TradingPlatformProductListing.TradingPlatformPayloadJS", "tradershub.controller$TradingPlatformProductListing.ModifyDataJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "tradershub.model$ST_43e221b4a9439e2ea71501e5244dde34Structure"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_TradingPlatformProductListing_TradingPlatformPayloadJS, tradershub_controller_TradingPlatformProductListing_ModifyDataJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.tradingPlatformProductListing$Action = function(countryCodeIn, callContext) {
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
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.TradingPlatformProductListing$vars"))());
                vars.value.countryCodeInLocal = countryCodeIn;
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
                                ClientCountry: OS.DataConversion.JSNodeParamConverter.to(vars.value.countryCodeInLocal, OS.DataTypes.DataTypes.Text),
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
    tradershubController.default.constructor.registerVariableGroupType("tradershub.TradingPlatformProductListing$vars", [{
        name: "CountryCode",
        attrName: "countryCodeInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
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
    tradershubController.default.clientActionProxies.tradingPlatformProductListing$Action = function(countryCodeIn) {
        countryCodeIn = (countryCodeIn === undefined) ? "" : countryCodeIn;
        return controller.executeActionInsideJSNode(tradershubController.default.tradingPlatformProductListing$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(countryCodeIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
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


define("tradershub.controller$ServerAction.GetAccountPurposeAction", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.model$EN_3e32e8f97f4a30dd16a3843f28450f43EntityRecord", "tradershub.model$RL_dd299c02eac5eb3e7ba5132848a21b2a"], function(exports, OSRuntimeCore, tradershubModel, tradershubController) {
    var OS = OSRuntimeCore;
    tradershubController.default.getAccountPurposeAction$ServerAction = function(callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("GetAccountPurposeAction", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetAccountPurposeAction");
                span.setAttribute("outsystems.function.key", "752d59d0-4e90-4b49-9aa3-94169f658d05");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                return controller.callServerAction("GetAccountPurposeAction", "screenservices/tradershub/ActionGetAccountPurposeAction", "nlXm9eiYtZeC+guhVFgzPA", {}, controller.callContext(callContext), undefined, undefined, true).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("tradershub$ActionGetAccountPurposeAction"))();
                    executeServerActionResult.accountPurposeListOut = OS.DataConversion.ServerDataConverter.from(outputs.AccountPurposeList, tradershubModel.RL_dd299c02eac5eb3e7ba5132848a21b2a);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    tradershubController.default.constructor.registerVariableGroupType("tradershub$ActionGetAccountPurposeAction", [{
        name: "AccountPurposeList",
        attrName: "accountPurposeListOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.RecordList,
        defaultValue: function() {
            return new tradershubModel.RL_dd299c02eac5eb3e7ba5132848a21b2a();
        },
        complexType: tradershubModel.RL_dd299c02eac5eb3e7ba5132848a21b2a
    }]);
});

define("tradershub.controller$ServerAction.GetEmploymentStatusList", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.model$EN_772522d7b54f56f59fb8e1e743f444ecEntityRecord", "tradershub.model$RL_af98e667e22024fcd3f4c2355613ad7f"], function(exports, OSRuntimeCore, tradershubModel, tradershubController) {
    var OS = OSRuntimeCore;
    tradershubController.default.getEmploymentStatusList$ServerAction = function(callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("GetEmploymentStatusList", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetEmploymentStatusList");
                span.setAttribute("outsystems.function.key", "b5171021-f65d-4e82-9f90-a92a1d408eac");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                return controller.callServerAction("GetEmploymentStatusList", "screenservices/tradershub/ActionGetEmploymentStatusList", "b0wIu9JXTNiviy1IS5ibvg", {}, controller.callContext(callContext), undefined, undefined, true).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("tradershub$ActionGetEmploymentStatusList"))();
                    executeServerActionResult.employmentStatusListOut = OS.DataConversion.ServerDataConverter.from(outputs.EmploymentStatusList, tradershubModel.RL_af98e667e22024fcd3f4c2355613ad7f);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    tradershubController.default.constructor.registerVariableGroupType("tradershub$ActionGetEmploymentStatusList", [{
        name: "EmploymentStatusList",
        attrName: "employmentStatusListOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.RecordList,
        defaultValue: function() {
            return new tradershubModel.RL_af98e667e22024fcd3f4c2355613ad7f();
        },
        complexType: tradershubModel.RL_af98e667e22024fcd3f4c2355613ad7f
    }]);
});

define("tradershub.controller", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller$translationsResources"], function(exports, OSRuntimeCore, tradershubModel, tradershub_Controller_translationsResources) {
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

    tradershubController.default = new Controller(tradershub_Controller_translationsResources);
});

define("tradershub.controller$translationsResources", ["exports"], function(exports) {
    return {};
});