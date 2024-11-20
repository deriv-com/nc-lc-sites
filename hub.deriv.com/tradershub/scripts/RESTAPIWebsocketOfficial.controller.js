define("RESTAPIWebsocketOfficial.controller$AccountList", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.model$ST_42e091eee706086ba45ab77d0ef6821fStructure", "RESTAPIWebsocketOfficial.controller$ServerAction.PostAccountList", "RESTAPIWebsocketOfficial.controller$FetchData"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.accountList$Action = function(appIdIn, languageIn, authorizeTokenIn, hostIn, callContext) {
        return OS.Logger.startActiveSpan("AccountList", function(span) {
            if (span) {
                span.setAttribute("code.function", "AccountList");
                span.setAttribute("outsystems.function.key", "f56c9e06-ce5f-4221-81a4-40ffce3bb9b4");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.AccountList$vars"))());
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.authorizeTokenInLocal = authorizeTokenIn;
                vars.value.hostInLocal = hostIn;
                var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postAccountListVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var requestBodyVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var fetchResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_42e091eee706086ba45ab77d0ef6821fStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.AccountList$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    // IsGreen
                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PostAccountList
                            return controller.postAccountList$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.authorizeTokenInLocal, callContext).then(function(value) {
                                postAccountListVar.value = value;
                            }).then(function() {
                                // Response = PostAccountList.Response
                                outVars.value.responseOut = postAccountListVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: RequestBody
                            requestBodyVar.value.jSONOut = OS.JSONUtils.serializeToJSON(outVars.value.responseOut, false, false);
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, requestBodyVar.value.jSONOut, vars.value.hostInLocal, "POST", "account_list", "", callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: FetchResponse
                                fetchResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_42e091eee706086ba45ab77d0ef6821fStructure, false);
                                // Response = FetchResponse.Data
                                outVars.value.responseOut = fetchResponseVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("AccountList.AccountList", OS.Exceptions.getMessage(ex));
                    // Handle Error: CommunicationException
                    if (OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
                        OS.Logger.error(null, ex, null, null, 1);
                        communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("CommunicationException", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "CommunicationException");
                                span.setAttribute("outsystems.function.key", "505a36b2-55a5-4204-af9b-e943a420e7a9");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.AccountList$vars", [{
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }, {
        name: "AuthorizeToken",
        attrName: "authorizeTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.AccountList$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_42e091eee706086ba45ab77d0ef6821fStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_42e091eee706086ba45ab77d0ef6821fStructure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.accountList$Action = function(appIdIn, languageIn, authorizeTokenIn, hostIn) {
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        authorizeTokenIn = (authorizeTokenIn === undefined) ? "" : authorizeTokenIn;
        hostIn = (hostIn === undefined) ? "" : hostIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.accountList$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authorizeTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$AssetIndex", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.model$ST_870defcbb5bf4a58a2a009971edc7d07Structure", "RESTAPIWebsocketOfficial.controller$ServerAction.GetAssetIndex"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.assetIndex$Action = function(hostIn, appIdIn, languageIn, callContext) {
        return OS.Logger.startActiveSpan("AssetIndex", function(span) {
            if (span) {
                span.setAttribute("code.function", "AssetIndex");
                span.setAttribute("outsystems.function.key", "7c17fad8-1027-47f6-8f4c-72c039662d3b");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.AssetIndex$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var getAssetIndexVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var fetchResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_870defcbb5bf4a58a2a009971edc7d07Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.AssetIndex$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    // IsGreen
                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: GetAssetIndex
                            return controller.getAssetIndex$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, callContext).then(function(value) {
                                getAssetIndexVar.value = value;
                            }).then(function() {
                                // Response = GetAssetIndex.Response
                                outVars.value.responseOut = getAssetIndexVar.value.responseOut;
                            });
                        } else {
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "GET", "get_settings", "", callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: FetchResponse
                                fetchResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_870defcbb5bf4a58a2a009971edc7d07Structure, false);
                                // Response = FetchResponse.Data
                                outVars.value.responseOut = fetchResponseVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("AssetIndex.AssetIndex", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "571385a5-9f7b-478b-9204-9bdef995fb94");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.AssetIndex$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.AssetIndex$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_870defcbb5bf4a58a2a009971edc7d07Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_870defcbb5bf4a58a2a009971edc7d07Structure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.assetIndex$Action = function(hostIn, appIdIn, languageIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.assetIndex$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$Authorize", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_450f06937a42e6bd68832beac9fd4297Structure", "RESTAPIWebsocketOfficial.model$ST_f502318fbe2f943e6cfbba125766780aStructure", "RESTAPIWebsocketOfficial.controller$ServerAction.Authorize", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.controller$FetchData"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.authorize$Action = function(requestIn, hostIn, appIdIn, languageIn, callContext) {
        return OS.Logger.startActiveSpan("Authorize", function(span) {
            if (span) {
                span.setAttribute("code.function", "Authorize");
                span.setAttribute("outsystems.function.key", "ca75e3f6-bdd2-4188-9963-d3e5b700ea32");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.Authorize$vars"))());
                vars.value.requestInLocal = requestIn.clone();
                vars.value.hostInLocal = hostIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var authorizeVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var authorizeRequestBodyVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_f502318fbe2f943e6cfbba125766780aStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.Authorize$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: Authorize
                            return controller.authorize$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.requestInLocal, callContext).then(function(value) {
                                authorizeVar.value = value;
                            }).then(function() {
                                // Response = Authorize.Response
                                outVars.value.responseOut = authorizeVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: AuthorizeRequestBody
                            authorizeRequestBodyVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.requestInLocal, false, false);
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, authorizeRequestBodyVar.value.jSONOut, vars.value.hostInLocal, "POST", "authorize", "", callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_f502318fbe2f943e6cfbba125766780aStructure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("Authorize.Authorize", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "d80958c6-7d1d-4277-b4e0-6ab8428a6d24");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.Authorize$vars", [{
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_450f06937a42e6bd68832beac9fd4297Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_450f06937a42e6bd68832beac9fd4297Structure
    }, {
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.Authorize$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_f502318fbe2f943e6cfbba125766780aStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_f502318fbe2f943e6cfbba125766780aStructure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.authorize$Action = function(requestIn, hostIn, appIdIn, languageIn) {
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_450f06937a42e6bd68832beac9fd4297Structure() : requestIn;
        hostIn = (hostIn === undefined) ? "" : hostIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.authorize$Action.bind(controller, requestIn, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$CashierCrypto", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.model$ST_a61a52fb9a0db4861b8e2b8110ef16c4Structure", "RESTAPIWebsocketOfficial.model$ST_2f46c6fecf81fe9d91763f789141eec9Structure", "RESTAPIWebsocketOfficial.controller$ServerAction.PostCashierCrypto", "RESTAPIWebsocketOfficial.controller$FetchData"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.cashierCrypto$Action = function(hostIn, appIdIn, languageIn, authTokenIn, requestIn, callContext) {
        return OS.Logger.startActiveSpan("CashierCrypto", function(span) {
            if (span) {
                span.setAttribute("code.function", "CashierCrypto");
                span.setAttribute("outsystems.function.key", "83086d82-6a3b-47aa-afc6-4473dac85368");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.CashierCrypto$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.requestInLocal = requestIn.clone();
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postCashierCryptoVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var fetchResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_2f46c6fecf81fe9d91763f789141eec9Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.CashierCrypto$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    // IsGreen
                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PostCashierCrypto
                            return controller.postCashierCrypto$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.authTokenInLocal, vars.value.requestInLocal, callContext).then(function(value) {
                                postCashierCryptoVar.value = value;
                            }).then(function() {
                                // Response = PostCashierCrypto.Response
                                outVars.value.responseOut = postCashierCryptoVar.value.responseOut;
                            });
                        } else {
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "POST", "cashier", "", callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: FetchResponse
                                fetchResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_2f46c6fecf81fe9d91763f789141eec9Structure, false);
                                // Response = FetchResponse.Data
                                outVars.value.responseOut = fetchResponseVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("CashierCrypto.CashierCrypto", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "e5e689c4-5e2a-44fc-afed-6677daac8c4d");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.CashierCrypto$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_a61a52fb9a0db4861b8e2b8110ef16c4Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_a61a52fb9a0db4861b8e2b8110ef16c4Structure
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.CashierCrypto$outVars", [{
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }, {
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_2f46c6fecf81fe9d91763f789141eec9Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_2f46c6fecf81fe9d91763f789141eec9Structure
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.cashierCrypto$Action = function(hostIn, appIdIn, languageIn, authTokenIn, requestIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_a61a52fb9a0db4861b8e2b8110ef16c4Structure() : requestIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.cashierCrypto$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), requestIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean),
                Response: actionResults.responseOut
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$CashierFIAT", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.model$ST_a61a52fb9a0db4861b8e2b8110ef16c4Structure", "RESTAPIWebsocketOfficial.model$ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure", "RESTAPIWebsocketOfficial.controller$ServerAction.PostCashierFiat", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.model$ST_2f46c6fecf81fe9d91763f789141eec9Structure", "RESTAPIWebsocketOfficial.model$ST_8517d9c8b73e866553a1a7b806af5079Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.cashierFIAT$Action = function(hostIn, appIdIn, languageIn, authTokenIn, requestIn, callContext) {
        return OS.Logger.startActiveSpan("CashierFIAT", function(span) {
            if (span) {
                span.setAttribute("code.function", "CashierFIAT");
                span.setAttribute("outsystems.function.key", "2c0521d7-ed3d-4025-b8ec-6985d22e2e58");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.CashierFIAT$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.requestInLocal = requestIn.clone();
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postCashierFiatVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var fetchResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_2f46c6fecf81fe9d91763f789141eec9Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.CashierFIAT$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    // IsGreen
                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PostCashierFiat
                            return controller.postCashierFiat$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.authTokenInLocal, vars.value.requestInLocal, callContext).then(function(value) {
                                postCashierFiatVar.value = value;
                            }).then(function() {
                                // Response = PostCashierFiat.Response
                                outVars.value.responseOut = postCashierFiatVar.value.responseOut;
                            });
                        } else {
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "POST", "cashier", "", callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: FetchResponse
                                fetchResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_2f46c6fecf81fe9d91763f789141eec9Structure, false);
                                // Response = FetchResponse.Data
                                outVars.value.responseOut = OS.DataConversion.JSConversions.typeConvertRecord(fetchResponseVar.value.dataOut, new RESTAPIWebsocketOfficialModel.ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure(), function(source, target) {
                                    target.cashierAttr = source.echo_reqAttr.cashierAttr;
                                    target.echo_reqAttr = source.echo_reqAttr;
                                    target.msg_typeAttr = source.msg_typeAttr;
                                    target.errorAttr = source.errorAttr;
                                    return target;
                                });
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("CashierFIAT.CashierFIAT", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "402fc91c-42fe-4728-a6f6-6f156a518627");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.CashierFIAT$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_a61a52fb9a0db4861b8e2b8110ef16c4Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_a61a52fb9a0db4861b8e2b8110ef16c4Structure
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.CashierFIAT$outVars", [{
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }, {
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.cashierFIAT$Action = function(hostIn, appIdIn, languageIn, authTokenIn, requestIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_a61a52fb9a0db4861b8e2b8110ef16c4Structure() : requestIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.cashierFIAT$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), requestIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean),
                Response: actionResults.responseOut
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$CheckHost", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.checkHost$Action = function(hostIn, callContext) {
        return OS.Logger.startActiveSpan("CheckHost", function(span) {
            if (span) {
                span.setAttribute("code.function", "CheckHost");
                span.setAttribute("outsystems.function.key", "00c7c9fc-93e6-4532-a9d6-a1fbe8c30ede");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.CheckHost$vars"))());
                vars.value.hostInLocal = hostIn;
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.CheckHost$outVars"))());
                // Check Host
                if (((((vars.value.hostInLocal === "green.derivws.com")) ? (true) : (false)))) {
                    // Set IsGreen
                    // IsGreen = True
                    outVars.value.isGreenOut = true;
                } else {
                    // Set IsGreen
                    // IsGreen = False
                    outVars.value.isGreenOut = false;
                }

                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.CheckHost$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.CheckHost$outVars", [{
        name: "IsGreen",
        attrName: "isGreenOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.checkHost$Action = function(hostIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.checkHost$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                IsGreen: OS.DataConversion.JSNodeParamConverter.to(actionResults.isGreenOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$FetchData", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$FetchData.FetchJS"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, RESTAPIWebsocketOfficial_controller_FetchData_FetchJS) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.fetchData$Action = function(appIdIn, languageIn, requestBodyIn, hostIn, methodIn, aPINameIn, authTokenIn, callContext) {
        return OS.Logger.startActiveSpan("FetchData", function(span) {
            if (span) {
                span.setAttribute("code.function", "FetchData");
                span.setAttribute("outsystems.function.key", "609da849-9d35-475b-a2a5-a06f1c7be78c");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.FetchData$vars"))());
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.requestBodyInLocal = requestBodyIn;
                vars.value.hostInLocal = hostIn;
                vars.value.methodInLocal = methodIn;
                vars.value.aPINameInLocal = aPINameIn;
                vars.value.authTokenInLocal = authTokenIn;
                var fetchJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.FetchData$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    return OS.Logger.startActiveSpan("Fetch", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "Fetch");
                            span.setAttribute("outsystems.function.key", "78a698e2-c952-415a-bb6d-d1198adb66b2");
                            span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                            span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteAsyncJSNode(RESTAPIWebsocketOfficial_controller_FetchData_FetchJS, "Fetch", "FetchData", {
                                APIName: OS.DataConversion.JSNodeParamConverter.to(vars.value.aPINameInLocal, OS.DataTypes.DataTypes.Text),
                                Method: OS.DataConversion.JSNodeParamConverter.to(vars.value.methodInLocal, OS.DataTypes.DataTypes.Text),
                                RequestBody: OS.DataConversion.JSNodeParamConverter.to(vars.value.requestBodyInLocal, OS.DataTypes.DataTypes.Text),
                                AuthToken: OS.DataConversion.JSNodeParamConverter.to(vars.value.authTokenInLocal, OS.DataTypes.DataTypes.Text),
                                Host: OS.DataConversion.JSNodeParamConverter.to(vars.value.hostInLocal, OS.DataTypes.DataTypes.Text),
                                Language: OS.DataConversion.JSNodeParamConverter.to(vars.value.languageInLocal, OS.DataTypes.DataTypes.Text),
                                AppId: OS.DataConversion.JSNodeParamConverter.to(vars.value.appIdInLocal, OS.DataTypes.DataTypes.Text),
                                Response: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.FetchData$fetchJSResult"))();
                                jsNodeResult.responseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Response, OS.DataTypes.DataTypes.Text);
                                return jsNodeResult;
                            }, {}, {});
                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1).then(function(results) {
                        fetchJSResult.value = results;
                    }).then(function() {
                        // Response = Fetch.Response
                        outVars.value.responseOut = fetchJSResult.value.responseOut;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.FetchData$vars", [{
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "EN";
        }
    }, {
        name: "RequestBody",
        attrName: "requestBodyInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Method",
        attrName: "methodInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "APIName",
        attrName: "aPINameInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.FetchData$fetchJSResult", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.FetchData$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.fetchData$Action = function(appIdIn, languageIn, requestBodyIn, hostIn, methodIn, aPINameIn, authTokenIn) {
        appIdIn = (appIdIn === undefined) ? "" : appIdIn;
        languageIn = (languageIn === undefined) ? "EN" : languageIn;
        requestBodyIn = (requestBodyIn === undefined) ? "" : requestBodyIn;
        hostIn = (hostIn === undefined) ? "" : hostIn;
        methodIn = (methodIn === undefined) ? "" : methodIn;
        aPINameIn = (aPINameIn === undefined) ? "" : aPINameIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.fetchData$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(requestBodyIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(methodIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(aPINameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: OS.DataConversion.JSNodeParamConverter.to(actionResults.responseOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("RESTAPIWebsocketOfficial.controller$FetchData.FetchJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        return new Promise(function($resolve, $reject) {
            async function fetchHandler(url, options = {}) {
                try {
                    const response = await fetch(url, options);
                    // Check if the response status is 2xx (successful)
                    if (!response.ok) {
                        console.error(new Error(`HTTP error! Status: ${response.status}`));
                        $resolve()
                    }
                    // Try to parse the response as JSON
                    const data = await response.json();
                    // Here you can handle the parsed data as needed
                    return data;
                } catch (error) {
                    console.error(new Error("Errors: " + error))
                }
            }

            // Fetching the data
            const fetchData = async () => {
                const host = $parameters.Host;
                const appId = $parameters.AppId;
                const language = $parameters.Language;
                const apiName = $parameters.APIName;

                const url = `https://${host}/websockets/${apiName}?app_id=${appId}&l=${language}&brand=deriv`;

                try {
                    const headers = new Headers();
                    headers.append("Content-Type", "application/json");
                    if ($parameters.AuthToken) {
                        headers.append("X-Token", $parameters.AuthToken);
                    }
                    const options = {
                        headers,
                        method: $parameters.Method,
                        ...(!!$parameters.RequestBody && {
                            body: $parameters.RequestBody
                        })
                    };
                    const result = await fetchHandler(url, options);
                    console.log({
                        result
                    })
                    $parameters.Response = JSON.stringify(result);
                    $resolve()
                } catch (error) {
                    console.error(error)
                    $resolve()
                }

            };

            fetchData();
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$FetchServiceToken", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.model$ST_eaa015e1f32bcbf45e00f7d814d7249aStructure", "RESTAPIWebsocketOfficial.model$ST_2ffa7d64546da67e71986ee16644bc99Structure", "RESTAPIWebsocketOfficial.controller$ServerAction.FetchServiceToken"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.fetchServiceToken$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn, callContext) {
        return OS.Logger.startActiveSpan("FetchServiceToken", function(span) {
            if (span) {
                span.setAttribute("code.function", "FetchServiceToken");
                span.setAttribute("outsystems.function.key", "d48c223b-94f3-426f-a7cc-2f5a5f28b8da");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.FetchServiceToken$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.requestInLocal = requestIn.clone();
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var fetchServiceTokenVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var generatePayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_2ffa7d64546da67e71986ee16644bc99Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.FetchServiceToken$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: FetchServiceToken
                            return controller.fetchServiceToken$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.requestInLocal, vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchServiceTokenVar.value = value;
                            }).then(function() {
                                // Response = FetchServiceToken.Response
                                outVars.value.responseOut = fetchServiceTokenVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: GeneratePayload
                            generatePayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.requestInLocal, false, false);
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, generatePayloadVar.value.jSONOut, vars.value.hostInLocal, "POST", "service_token", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_2ffa7d64546da67e71986ee16644bc99Structure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("FetchServiceToken.FetchServiceToken", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "47f501e3-a057-414a-b091-5e391a3987f1");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.FetchServiceToken$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }, {
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_eaa015e1f32bcbf45e00f7d814d7249aStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_eaa015e1f32bcbf45e00f7d814d7249aStructure
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.FetchServiceToken$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_2ffa7d64546da67e71986ee16644bc99Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_2ffa7d64546da67e71986ee16644bc99Structure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.fetchServiceToken$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_eaa015e1f32bcbf45e00f7d814d7249aStructure() : requestIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.fetchServiceToken$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), requestIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$GetAccountStatus", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_746d074ddcc08e0df3b269ffb1933d5aStructure", "RESTAPIWebsocketOfficial.controller$ServerAction.GetAccountStatus", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.controller$CheckHost"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getAccountStatus$Action = function(hostIn, authTokenIn, appIdIn, languageIn, callContext) {
        return OS.Logger.startActiveSpan("GetAccountStatus", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetAccountStatus");
                span.setAttribute("outsystems.function.key", "1a5ea6f7-dfb8-42e1-a995-9c5e2b5c4367");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetAccountStatus$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var getAccountStatusVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_746d074ddcc08e0df3b269ffb1933d5aStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetAccountStatus$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: GetAccountStatus
                            return controller.getAccountStatus$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.authTokenInLocal, callContext).then(function(value) {
                                getAccountStatusVar.value = value;
                            }).then(function() {
                                // Response = GetAccountStatus.Response
                                outVars.value.responseOut = getAccountStatusVar.value.responseOut;
                            });
                        } else {
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "GET", "get_account_status", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_746d074ddcc08e0df3b269ffb1933d5aStructure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("GetAccountStatus.GetAccountStatus", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "02987aae-11f1-4075-a0a3-8cd18ea7acde");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetAccountStatus$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetAccountStatus$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_746d074ddcc08e0df3b269ffb1933d5aStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_746d074ddcc08e0df3b269ffb1933d5aStructure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.getAccountStatus$Action = function(hostIn, authTokenIn, appIdIn, languageIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.getAccountStatus$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$GetMt5LoginList", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.model$ST_2f457e0a5b13526850516eea23ae0e9aStructure", "RESTAPIWebsocketOfficial.controller$ServerAction.GetMT5LoginList", "RESTAPIWebsocketOfficial.model$ST_f502318fbe2f943e6cfbba125766780aStructure", "RESTAPIWebsocketOfficial.model$ST_2361699202fda01d7c8ade7cab583650Structure", "RESTAPIWebsocketOfficial.model$RL_d214456dc511920f517885542ecb318a"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getMt5LoginList$Action = function(hostIn, authTokenIn, appIdIn, languageIn, callContext) {
        return OS.Logger.startActiveSpan("GetMt5LoginList", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetMt5LoginList");
                span.setAttribute("outsystems.function.key", "117b3aa6-4772-4586-8615-7354e8063167");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetMt5LoginList$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postMt5LoginListVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_f502318fbe2f943e6cfbba125766780aStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetMt5LoginList$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PostMt5LoginList
                            return controller.getMT5LoginList$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.authTokenInLocal, callContext).then(function(value) {
                                postMt5LoginListVar.value = value;
                            }).then(function() {
                                // Response = PostMt5LoginList.Response
                                outVars.value.responseOut = postMt5LoginListVar.value.responseOut;
                            });
                        } else {
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "GET", "mt5_login_list", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_f502318fbe2f943e6cfbba125766780aStructure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = OS.DataConversion.JSConversions.typeConvertRecord(responseDeserializeVar.value.dataOut, new RESTAPIWebsocketOfficialModel.ST_2f457e0a5b13526850516eea23ae0e9aStructure(), function(source, target) {
                                    target.msg_typeAttr = source.msg_typeAttr;
                                    return target;
                                });
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("GetMt5LoginList.GetMt5LoginList", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "481ebedc-ca57-4c8a-8a01-e6c1527985e5");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetMt5LoginList$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetMt5LoginList$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_2f457e0a5b13526850516eea23ae0e9aStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_2f457e0a5b13526850516eea23ae0e9aStructure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.getMt5LoginList$Action = function(hostIn, authTokenIn, appIdIn, languageIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.getMt5LoginList$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$GetP2pAdvertInfo", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.model$ST_aaf5fb010d4587166eb3dd80473d736dStructure", "RESTAPIWebsocketOfficial.model$ST_d7788a11837ccb63472925e3f2cd934fStructure", "RESTAPIWebsocketOfficial.controller$ServerAction.GetP2pAdvertInfo"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getP2pAdvertInfo$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn, callContext) {
        return OS.Logger.startActiveSpan("GetP2pAdvertInfo", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetP2pAdvertInfo");
                span.setAttribute("outsystems.function.key", "43774149-4139-4b35-8b5c-e9d9692a680e");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertInfo$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.requestInLocal = requestIn.clone();
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var getP2pAdvertInfoVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var generatePayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_d7788a11837ccb63472925e3f2cd934fStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertInfo$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: GetP2pAdvertInfo
                            return controller.getP2pAdvertInfo$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.requestInLocal, callContext).then(function(value) {
                                getP2pAdvertInfoVar.value = value;
                            }).then(function() {
                                // Response = GetP2pAdvertInfo.Response
                                outVars.value.responseOut = getP2pAdvertInfoVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: GeneratePayload
                            generatePayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.requestInLocal, false, false);
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, generatePayloadVar.value.jSONOut, vars.value.hostInLocal, "POST", "p2p_advert_info", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_d7788a11837ccb63472925e3f2cd934fStructure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("GetP2pAdvertInfo.GetP2pAdvertInfo", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "0ace2493-1cfb-4ce4-a138-af27437bf5c4");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertInfo$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }, {
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_aaf5fb010d4587166eb3dd80473d736dStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_aaf5fb010d4587166eb3dd80473d736dStructure
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertInfo$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_d7788a11837ccb63472925e3f2cd934fStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_d7788a11837ccb63472925e3f2cd934fStructure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.getP2pAdvertInfo$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_aaf5fb010d4587166eb3dd80473d736dStructure() : requestIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.getP2pAdvertInfo$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), requestIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$GetP2pAdvertiserAdverts", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.model$ST_8adbe420d80a0b7b8c828a81a654f9e3Structure", "RESTAPIWebsocketOfficial.controller$ServerAction.GetP2pAdvertiserAdverts"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getP2pAdvertiserAdverts$Action = function(hostIn, authTokenIn, appIdIn, languageIn, callContext) {
        return OS.Logger.startActiveSpan("GetP2pAdvertiserAdverts", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetP2pAdvertiserAdverts");
                span.setAttribute("outsystems.function.key", "715d7081-b741-4e5a-af4c-304e4482bb19");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertiserAdverts$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var getP2pAdvertiserAdvertsVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_8adbe420d80a0b7b8c828a81a654f9e3Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertiserAdverts$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: GetP2pAdvertiserAdverts
                            return controller.getP2pAdvertiserAdverts$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, callContext).then(function(value) {
                                getP2pAdvertiserAdvertsVar.value = value;
                            }).then(function() {
                                // Response = GetP2pAdvertiserAdverts.Response
                                outVars.value.responseOut = getP2pAdvertiserAdvertsVar.value.responseOut;
                            });
                        } else {
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "POST", "p2p_advertiser_adverts", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_8adbe420d80a0b7b8c828a81a654f9e3Structure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("GetP2pAdvertiserAdverts.GetP2pAdvertiserAdverts", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "7ff60e09-1ea9-4e29-a5de-d95c346088ea");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertiserAdverts$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertiserAdverts$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_8adbe420d80a0b7b8c828a81a654f9e3Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_8adbe420d80a0b7b8c828a81a654f9e3Structure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.getP2pAdvertiserAdverts$Action = function(hostIn, authTokenIn, appIdIn, languageIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.getP2pAdvertiserAdverts$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$GetP2pAdvertiserInfo", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_3d1a46622c09608d98a230622b852106Structure", "RESTAPIWebsocketOfficial.model$ST_254a95af2bb66abb401551d01686c0a6Structure", "RESTAPIWebsocketOfficial.controller$ServerAction.GetP2pAdvertiserInfo", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.controller$FetchData"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getP2pAdvertiserInfo$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn, callContext) {
        return OS.Logger.startActiveSpan("GetP2pAdvertiserInfo", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetP2pAdvertiserInfo");
                span.setAttribute("outsystems.function.key", "6834ebd6-5041-4bc4-a3e2-cd732b79ef87");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertiserInfo$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.requestInLocal = requestIn.clone();
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var getP2pAdvertiserInfoVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var generatePayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_254a95af2bb66abb401551d01686c0a6Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertiserInfo$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: GetP2pAdvertiserInfo
                            return controller.getP2pAdvertiserInfo$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.requestInLocal, callContext).then(function(value) {
                                getP2pAdvertiserInfoVar.value = value;
                            }).then(function() {
                                // Response = GetP2pAdvertiserInfo.Response
                                outVars.value.responseOut = getP2pAdvertiserInfoVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: GeneratePayload
                            generatePayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.requestInLocal, false, false);
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, generatePayloadVar.value.jSONOut, vars.value.hostInLocal, "POST", "p2p_advertiser_info", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_254a95af2bb66abb401551d01686c0a6Structure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("GetP2pAdvertiserInfo.GetP2pAdvertiserInfo", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "14abeaec-af14-41ce-9fd6-65b3491fe935");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertiserInfo$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }, {
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_3d1a46622c09608d98a230622b852106Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_3d1a46622c09608d98a230622b852106Structure
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertiserInfo$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_254a95af2bb66abb401551d01686c0a6Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_254a95af2bb66abb401551d01686c0a6Structure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.getP2pAdvertiserInfo$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_3d1a46622c09608d98a230622b852106Structure() : requestIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.getP2pAdvertiserInfo$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), requestIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$GetP2pAdvertiserList", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_1eaff43aca523f2e537db1085abb9969Structure", "RESTAPIWebsocketOfficial.controller$ServerAction.GetP2pAdvertiserList", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.controller$FetchData"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getP2pAdvertiserList$Action = function(hostIn, authTokenIn, appIdIn, languageIn, callContext) {
        return OS.Logger.startActiveSpan("GetP2pAdvertiserList", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetP2pAdvertiserList");
                span.setAttribute("outsystems.function.key", "0071cda5-9bec-477c-bdab-435a30275c2e");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertiserList$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var getP2pAdvertiserListVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_1eaff43aca523f2e537db1085abb9969Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertiserList$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: GetP2pAdvertiserList
                            return controller.getP2pAdvertiserList$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, callContext).then(function(value) {
                                getP2pAdvertiserListVar.value = value;
                            }).then(function() {
                                // Response = GetP2pAdvertiserList.Response
                                outVars.value.responseOut = getP2pAdvertiserListVar.value.responseOut;
                            });
                        } else {
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "POST", "p2p_advertiser_list", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_1eaff43aca523f2e537db1085abb9969Structure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("GetP2pAdvertiserList.GetP2pAdvertiserList", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "e31af192-0428-4dd1-8be6-162606a7a1a6");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertiserList$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertiserList$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_1eaff43aca523f2e537db1085abb9969Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_1eaff43aca523f2e537db1085abb9969Structure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.getP2pAdvertiserList$Action = function(hostIn, authTokenIn, appIdIn, languageIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.getP2pAdvertiserList$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$GetP2pAdvertList", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.model$ST_d4e039bbd70c593954382df471fdac2aStructure", "RESTAPIWebsocketOfficial.controller$ServerAction.GetP2pAdvertList"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getP2pAdvertList$Action = function(hostIn, authTokenIn, appIdIn, languageIn, callContext) {
        return OS.Logger.startActiveSpan("GetP2pAdvertList", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetP2pAdvertList");
                span.setAttribute("outsystems.function.key", "2df80b92-4a5b-4e29-8d2f-98e85cf094a8");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertList$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var getP2pAdvertListVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_d4e039bbd70c593954382df471fdac2aStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertList$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: GetP2pAdvertList
                            return controller.getP2pAdvertList$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, callContext).then(function(value) {
                                getP2pAdvertListVar.value = value;
                            }).then(function() {
                                // Response = GetP2pAdvertList.Response
                                outVars.value.responseOut = getP2pAdvertListVar.value.responseOut;
                            });
                        } else {
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "POST", "p2p_advert_list", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_d4e039bbd70c593954382df471fdac2aStructure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("GetP2pAdvertList.GetP2pAdvertList", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "28059899-0d2a-4ac3-b7c1-9a1173b03f52");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertList$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertList$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_d4e039bbd70c593954382df471fdac2aStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_d4e039bbd70c593954382df471fdac2aStructure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.getP2pAdvertList$Action = function(hostIn, authTokenIn, appIdIn, languageIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.getP2pAdvertList$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$GetP2pCountryList", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.model$ST_b12d67ef17b1896a838b57ca02b5f67dStructure", "RESTAPIWebsocketOfficial.controller$ServerAction.GetP2pCountryList"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getP2pCountryList$Action = function(hostIn, authTokenIn, appIdIn, languageIn, callContext) {
        return OS.Logger.startActiveSpan("GetP2pCountryList", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetP2pCountryList");
                span.setAttribute("outsystems.function.key", "0bd34a40-0a06-4fd4-b82c-dc2256fd41e5");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pCountryList$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var getP2pCountryListVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_b12d67ef17b1896a838b57ca02b5f67dStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pCountryList$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: GetP2pCountryList
                            return controller.getP2pCountryList$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, callContext).then(function(value) {
                                getP2pCountryListVar.value = value;
                            }).then(function() {
                                // Response = GetP2pCountryList.Response
                                outVars.value.responseOut = getP2pCountryListVar.value.responseOut;
                            });
                        } else {
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "POST", "p2p_country_list", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_b12d67ef17b1896a838b57ca02b5f67dStructure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("GetP2pCountryList.GetP2pCountryList", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "0da79e36-6883-44ab-a2ac-6a6b1a85bf29");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pCountryList$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pCountryList$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_b12d67ef17b1896a838b57ca02b5f67dStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_b12d67ef17b1896a838b57ca02b5f67dStructure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.getP2pCountryList$Action = function(hostIn, authTokenIn, appIdIn, languageIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.getP2pCountryList$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$GetP2pOrderInfo", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.model$ST_a138c9d86955bf2ced1c92c23da39091Structure", "RESTAPIWebsocketOfficial.model$ST_019dc1f94c4673ed88c9dc3f4cd5419bStructure", "RESTAPIWebsocketOfficial.controller$ServerAction.GetP2pOrderInfo", "RESTAPIWebsocketOfficial.controller$CheckHost"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getP2pOrderInfo$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn, callContext) {
        return OS.Logger.startActiveSpan("GetP2pOrderInfo", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetP2pOrderInfo");
                span.setAttribute("outsystems.function.key", "923f0db9-180a-4536-ad97-fdc020cd41a2");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pOrderInfo$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.requestInLocal = requestIn.clone();
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var getP2pOrderInfoVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var generatePayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_019dc1f94c4673ed88c9dc3f4cd5419bStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pOrderInfo$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: GetP2pOrderInfo
                            return controller.getP2pOrderInfo$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.requestInLocal, callContext).then(function(value) {
                                getP2pOrderInfoVar.value = value;
                            }).then(function() {
                                // Response = GetP2pOrderInfo.Response
                                outVars.value.responseOut = getP2pOrderInfoVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: GeneratePayload
                            generatePayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.requestInLocal, false, false);
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, generatePayloadVar.value.jSONOut, vars.value.hostInLocal, "POST", "p2p_order_info", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_019dc1f94c4673ed88c9dc3f4cd5419bStructure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("GetP2pOrderInfo.GetP2pOrderInfo", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "0384af5e-a8b1-4a46-a4b6-542f1e5a29b9");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pOrderInfo$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }, {
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_a138c9d86955bf2ced1c92c23da39091Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_a138c9d86955bf2ced1c92c23da39091Structure
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pOrderInfo$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_019dc1f94c4673ed88c9dc3f4cd5419bStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_019dc1f94c4673ed88c9dc3f4cd5419bStructure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.getP2pOrderInfo$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_a138c9d86955bf2ced1c92c23da39091Structure() : requestIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.getP2pOrderInfo$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), requestIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$GetP2pOrderList", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.model$ST_d48bf8d95ece559f969e94f01654ff6bStructure", "RESTAPIWebsocketOfficial.controller$ServerAction.GetP2pOrderList", "RESTAPIWebsocketOfficial.controller$FetchData"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getP2pOrderList$Action = function(hostIn, authTokenIn, appIdIn, languageIn, callContext) {
        return OS.Logger.startActiveSpan("GetP2pOrderList", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetP2pOrderList");
                span.setAttribute("outsystems.function.key", "e896894b-01e8-47b7-b237-373e07e8c4ce");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pOrderList$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var getP2pOrderListVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_d48bf8d95ece559f969e94f01654ff6bStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pOrderList$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: GetP2pOrderList
                            return controller.getP2pOrderList$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, callContext).then(function(value) {
                                getP2pOrderListVar.value = value;
                            }).then(function() {
                                // Response = GetP2pOrderList.Response
                                outVars.value.responseOut = getP2pOrderListVar.value.responseOut;
                            });
                        } else {
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "POST", "p2p_order_list", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_d48bf8d95ece559f969e94f01654ff6bStructure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("GetP2pOrderList.GetP2pOrderList", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "9aee0d2a-2c84-4acc-bb0b-b650ab5273e6");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pOrderList$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pOrderList$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_d48bf8d95ece559f969e94f01654ff6bStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_d48bf8d95ece559f969e94f01654ff6bStructure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.getP2pOrderList$Action = function(hostIn, authTokenIn, appIdIn, languageIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.getP2pOrderList$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$GetP2pPaymentMethods", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.model$ST_b08a5be4fd4ca77058e6256ff8f39643Structure", "RESTAPIWebsocketOfficial.controller$ServerAction.GetP2pPaymentMethods", "RESTAPIWebsocketOfficial.controller$FetchData"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getP2pPaymentMethods$Action = function(hostIn, authTokenIn, appIdIn, languageIn, callContext) {
        return OS.Logger.startActiveSpan("GetP2pPaymentMethods", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetP2pPaymentMethods");
                span.setAttribute("outsystems.function.key", "9abc3630-5b4a-4d56-9fa2-ce5878c38e12");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pPaymentMethods$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var getP2pPaymentMethodsVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_b08a5be4fd4ca77058e6256ff8f39643Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pPaymentMethods$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: GetP2pPaymentMethods
                            return controller.getP2pPaymentMethods$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, callContext).then(function(value) {
                                getP2pPaymentMethodsVar.value = value;
                            }).then(function() {
                                // Response = GetP2pPaymentMethods.Response
                                outVars.value.responseOut = getP2pPaymentMethodsVar.value.responseOut;
                            });
                        } else {
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "POST", "p2p_payment_methods", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_b08a5be4fd4ca77058e6256ff8f39643Structure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("GetP2pPaymentMethods.GetP2pPaymentMethods", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "ae2ac83a-06fb-4556-b257-1e693a41e08b");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pPaymentMethods$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pPaymentMethods$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_b08a5be4fd4ca77058e6256ff8f39643Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_b08a5be4fd4ca77058e6256ff8f39643Structure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.getP2pPaymentMethods$Action = function(hostIn, authTokenIn, appIdIn, languageIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.getP2pPaymentMethods$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$GetP2pSettings", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_370fde1db6758aa39a364a98c4d26988Structure", "RESTAPIWebsocketOfficial.controller$ServerAction.GetP2pSettings", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.controller$FetchData"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getP2pSettings$Action = function(hostIn, authTokenIn, appIdIn, languageIn, callContext) {
        return OS.Logger.startActiveSpan("GetP2pSettings", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetP2pSettings");
                span.setAttribute("outsystems.function.key", "f6b943ca-6027-41fa-b033-cfd63d7594ab");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pSettings$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var getP2pSettingsVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_370fde1db6758aa39a364a98c4d26988Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pSettings$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: GetP2pSettings
                            return controller.getP2pSettings$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, callContext).then(function(value) {
                                getP2pSettingsVar.value = value;
                            }).then(function() {
                                // Response = GetP2pSettings.Response
                                outVars.value.responseOut = getP2pSettingsVar.value.responseOut;
                            });
                        } else {
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "POST", "p2p_settings", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_370fde1db6758aa39a364a98c4d26988Structure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("GetP2pSettings.GetP2pSettings", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "b4695201-e0c0-4ec9-99e0-60281fd8a75b");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pSettings$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pSettings$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_370fde1db6758aa39a364a98c4d26988Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_370fde1db6758aa39a364a98c4d26988Structure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.getP2pSettings$Action = function(hostIn, authTokenIn, appIdIn, languageIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.getP2pSettings$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$GetSatetList", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.model$ST_a4800a0232074a24c4afcdc4d2e852b0Structure", "RESTAPIWebsocketOfficial.model$ST_26ee026d8929d280bd686ae6efaa64faStructure", "RESTAPIWebsocketOfficial.controller$ServerAction.FetchStateList", "RESTAPIWebsocketOfficial.controller$FetchData"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getSatetList$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn, callContext) {
        return OS.Logger.startActiveSpan("GetSatetList", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetSatetList");
                span.setAttribute("outsystems.function.key", "abf2ab9b-5700-4caa-9b02-7bf051ca43af");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetSatetList$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.requestInLocal = requestIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var fetchStateListVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_26ee026d8929d280bd686ae6efaa64faStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetSatetList$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: FetchStateList
                            return controller.fetchStateList$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, function() {
                                var rec = new RESTAPIWebsocketOfficialModel.ST_a4800a0232074a24c4afcdc4d2e852b0Structure();
                                rec.userCountryAttr = vars.value.requestInLocal;
                                return rec;
                            }(), callContext).then(function(value) {
                                fetchStateListVar.value = value;
                            }).then(function() {
                                // Response = FetchStateList.Response
                                outVars.value.responseOut = fetchStateListVar.value.responseOut;
                            });
                        } else {
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "POST", "state_list", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_26ee026d8929d280bd686ae6efaa64faStructure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("GetSatetList.GetSatetList", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "8eb0a522-9da5-455b-9020-b98d5867a0e0");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetSatetList$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }, {
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetSatetList$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_26ee026d8929d280bd686ae6efaa64faStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_26ee026d8929d280bd686ae6efaa64faStructure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.getSatetList$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        requestIn = (requestIn === undefined) ? "" : requestIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.getSatetList$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(requestIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$GetSettings", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "RESTAPIWebsocketOfficial.controller$ServerAction.GetSettings", "RESTAPIWebsocketOfficial.controller$CheckHost"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getSettings$Action = function(hostIn, authTokenIn, appIdIn, languageIn, callContext) {
        return OS.Logger.startActiveSpan("GetSettings", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetSettings");
                span.setAttribute("outsystems.function.key", "0fa4225e-5367-4fbf-b85e-87a5f0ca0e54");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetSettings$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var getSettingsVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var fetchResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetSettings$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    // IsGreen
                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: GetSettings
                            return controller.getSettings$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.authTokenInLocal, callContext).then(function(value) {
                                getSettingsVar.value = value;
                            }).then(function() {
                                // Response = GetSettings.Response
                                outVars.value.responseOut = getSettingsVar.value.responseOut;
                            });
                        } else {
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "GET", "get_settings", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: FetchResponse
                                fetchResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure, false);
                                // Response = FetchResponse.Data
                                outVars.value.responseOut = fetchResponseVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("GetSettings.GetSettings", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "a0f43956-c791-4f0c-8b7b-3442bb6ca6c5");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetSettings$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetSettings$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.getSettings$Action = function(hostIn, authTokenIn, appIdIn, languageIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.getSettings$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$GetVerifyEmail", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.model$ST_b5532fbd5672db40752d556a46e96eaeStructure", "RESTAPIWebsocketOfficial.model$ST_89d14f8b4008cb2b12eb9082eeeb95a6Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getVerifyEmail$Action = function(requestIn, hostIn, appIdIn, languageIn, callContext) {
        return OS.Logger.startActiveSpan("GetVerifyEmail", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetVerifyEmail");
                span.setAttribute("outsystems.function.key", "67863067-9852-4e97-82d7-5cc48f4c431f");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetVerifyEmail$vars"))());
                vars.value.requestInLocal = requestIn.clone();
                vars.value.hostInLocal = hostIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var requestBodyVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var fetchResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_b5532fbd5672db40752d556a46e96eaeStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetVerifyEmail$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // JSON Serialize: RequestBody
                    requestBodyVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.requestInLocal, false, false);
                    // Execute Action: FetchData
                    return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, requestBodyVar.value.jSONOut, vars.value.hostInLocal, "POST", "verify_email", "", callContext).then(function(value) {
                        fetchDataVar.value = value;
                    }).then(function() {
                        // JSON Deserialize: FetchResponse
                        fetchResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_b5532fbd5672db40752d556a46e96eaeStructure, false);
                        // Response = FetchResponse.Data
                        outVars.value.responseOut = fetchResponseVar.value.dataOut;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetVerifyEmail$vars", [{
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_89d14f8b4008cb2b12eb9082eeeb95a6Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_89d14f8b4008cb2b12eb9082eeeb95a6Structure
    }, {
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetVerifyEmail$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_b5532fbd5672db40752d556a46e96eaeStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_b5532fbd5672db40752d556a46e96eaeStructure
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.getVerifyEmail$Action = function(requestIn, hostIn, appIdIn, languageIn) {
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_89d14f8b4008cb2b12eb9082eeeb95a6Structure() : requestIn;
        hostIn = (hostIn === undefined) ? "" : hostIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.getVerifyEmail$Action.bind(controller, requestIn, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$GetWebsiteStatus", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.model$ST_c864353821feed79663806f3e445d40eStructure", "RESTAPIWebsocketOfficial.controller$ServerAction.GetWebsiteStatus", "RESTAPIWebsocketOfficial.controller$CheckHost"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getWebsiteStatus$Action = function(hostIn, appIdIn, languageIn, callContext) {
        return OS.Logger.startActiveSpan("GetWebsiteStatus", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetWebsiteStatus");
                span.setAttribute("outsystems.function.key", "dd3cfa93-6782-4c32-ba93-15448b31f9f1");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetWebsiteStatus$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var getWebsiteStatusVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var jSONDeserializeResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_c864353821feed79663806f3e445d40eStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetWebsiteStatus$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: GetWebsiteStatus
                            return controller.getWebsiteStatus$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, callContext).then(function(value) {
                                getWebsiteStatusVar.value = value;
                            }).then(function() {
                                // Response = GetWebsiteStatus.Response
                                outVars.value.responseOut = getWebsiteStatusVar.value.responseOut;
                            });
                        } else {
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "GET", "website_status", "", callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: JSONDeserializeResponse
                                jSONDeserializeResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_c864353821feed79663806f3e445d40eStructure, false);
                                // Response = JSONDeserializeResponse.Data
                                outVars.value.responseOut = jSONDeserializeResponseVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("GetWebsiteStatus.GetWebsiteStatus", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "ca2e85d5-dec5-4248-8736-203fc102fb86");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetWebsiteStatus$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetWebsiteStatus$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_c864353821feed79663806f3e445d40eStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_c864353821feed79663806f3e445d40eStructure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.getWebsiteStatus$Action = function(hostIn, appIdIn, languageIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.getWebsiteStatus$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$IDVDocumentAdd", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.model$ST_a6721f8f6846d021b1c635da9bdd2e8cStructure", "RESTAPIWebsocketOfficial.model$ST_7e69cc84f253f5c0a2cdd55aa624238cStructure", "RESTAPIWebsocketOfficial.controller$ServerAction.IDVDocumentAdd"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.iDVDocumentAdd$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn, callContext) {
        return OS.Logger.startActiveSpan("IDVDocumentAdd", function(span) {
            if (span) {
                span.setAttribute("code.function", "IDVDocumentAdd");
                span.setAttribute("outsystems.function.key", "62bab220-3c6d-4647-907e-7160f9696af7");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.IDVDocumentAdd$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.requestInLocal = requestIn.clone();
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var fetchKYCAuthStatusVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var generatePayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_7e69cc84f253f5c0a2cdd55aa624238cStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.IDVDocumentAdd$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: FetchKYCAuthStatus
                            return controller.iDVDocumentAdd$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.requestInLocal, vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchKYCAuthStatusVar.value = value;
                            }).then(function() {
                                // Response = FetchKYCAuthStatus.Response
                                outVars.value.responseOut = fetchKYCAuthStatusVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: GeneratePayload
                            generatePayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.requestInLocal, false, false);
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, generatePayloadVar.value.jSONOut, vars.value.hostInLocal, "POST", "identity_verification_document_add", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_7e69cc84f253f5c0a2cdd55aa624238cStructure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("IDVDocumentAdd.IDVDocumentAdd", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "9735440e-a02b-46ff-80ed-f79aa071c5c0");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.IDVDocumentAdd$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }, {
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_a6721f8f6846d021b1c635da9bdd2e8cStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_a6721f8f6846d021b1c635da9bdd2e8cStructure
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.IDVDocumentAdd$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_7e69cc84f253f5c0a2cdd55aa624238cStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_7e69cc84f253f5c0a2cdd55aa624238cStructure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.iDVDocumentAdd$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_a6721f8f6846d021b1c635da9bdd2e8cStructure() : requestIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.iDVDocumentAdd$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), requestIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$KYCAuthStatus", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_b5731219a4e422dad77e0fd7d6ee0cdfStructure", "RESTAPIWebsocketOfficial.model$ST_4820561c523dc84c471446a46147a065Structure", "RESTAPIWebsocketOfficial.controller$ServerAction.GetKYCAuthStatus", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.controller$FetchData"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.kYCAuthStatus$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn, callContext) {
        return OS.Logger.startActiveSpan("KYCAuthStatus", function(span) {
            if (span) {
                span.setAttribute("code.function", "KYCAuthStatus");
                span.setAttribute("outsystems.function.key", "8c350f3a-3893-4d71-b7de-fcdba5c439ce");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.KYCAuthStatus$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.requestInLocal = requestIn.clone();
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var fetchKYCAuthStatusVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var generatePayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_4820561c523dc84c471446a46147a065Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.KYCAuthStatus$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: FetchKYCAuthStatus
                            return controller.getKYCAuthStatus$ServerAction(vars.value.authTokenInLocal, vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.requestInLocal, callContext).then(function(value) {
                                fetchKYCAuthStatusVar.value = value;
                            }).then(function() {
                                // Response = FetchKYCAuthStatus.Response
                                outVars.value.responseOut = fetchKYCAuthStatusVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: GeneratePayload
                            generatePayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.requestInLocal, false, false);
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, generatePayloadVar.value.jSONOut, vars.value.hostInLocal, "POST", "kyc_auth_status", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_4820561c523dc84c471446a46147a065Structure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("KYCAuthStatus.KYCAuthStatus", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "d604933a-e1fc-481c-9210-5b97482f9206");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.KYCAuthStatus$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }, {
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_b5731219a4e422dad77e0fd7d6ee0cdfStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_b5731219a4e422dad77e0fd7d6ee0cdfStructure
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.KYCAuthStatus$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_4820561c523dc84c471446a46147a065Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_4820561c523dc84c471446a46147a065Structure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.kYCAuthStatus$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_b5731219a4e422dad77e0fd7d6ee0cdfStructure() : requestIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.kYCAuthStatus$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), requestIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$LandingCompany", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.model$ST_2aa6b158772e078b381113da0ab825f8Structure", "RESTAPIWebsocketOfficial.model$ST_55477c48be760e041c4dbfa365f63009Structure", "RESTAPIWebsocketOfficial.controller$ServerAction.GetLandingCompany", "RESTAPIWebsocketOfficial.controller$CheckHost"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.landingCompany$Action = function(landingCompanyRequestIn, hostIn, appIdIn, languageIn, callContext) {
        return OS.Logger.startActiveSpan("LandingCompany", function(span) {
            if (span) {
                span.setAttribute("code.function", "LandingCompany");
                span.setAttribute("outsystems.function.key", "c0d48f63-deca-48f5-bfe3-2cf8d70902dd");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.LandingCompany$vars"))());
                vars.value.landingCompanyRequestInLocal = landingCompanyRequestIn.clone();
                vars.value.hostInLocal = hostIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var getLandingCompanyVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var requestBodyVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var fetchResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_55477c48be760e041c4dbfa365f63009Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.LandingCompany$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    // IsGreen
                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: GetLandingCompany
                            return controller.getLandingCompany$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.landingCompanyRequestInLocal, callContext).then(function(value) {
                                getLandingCompanyVar.value = value;
                            }).then(function() {
                                // Response = GetLandingCompany.Response
                                outVars.value.responseOut = getLandingCompanyVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: RequestBody
                            requestBodyVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.landingCompanyRequestInLocal, false, false);
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, requestBodyVar.value.jSONOut, vars.value.hostInLocal, "GET", "landing_company", "", callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: FetchResponse
                                fetchResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_55477c48be760e041c4dbfa365f63009Structure, false);
                                // Response = FetchResponse.Data
                                outVars.value.responseOut = fetchResponseVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("LandingCompany.LandingCompany", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "1a2aaafd-a2bf-4e13-9861-75c4282efc9b");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.LandingCompany$vars", [{
        name: "LandingCompanyRequest",
        attrName: "landingCompanyRequestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_2aa6b158772e078b381113da0ab825f8Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_2aa6b158772e078b381113da0ab825f8Structure
    }, {
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "1";
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.LandingCompany$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_55477c48be760e041c4dbfa365f63009Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_55477c48be760e041c4dbfa365f63009Structure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.landingCompany$Action = function(landingCompanyRequestIn, hostIn, appIdIn, languageIn) {
        landingCompanyRequestIn = (landingCompanyRequestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_2aa6b158772e078b381113da0ab825f8Structure() : landingCompanyRequestIn;
        hostIn = (hostIn === undefined) ? "" : hostIn;
        appIdIn = (appIdIn === undefined) ? "1" : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.landingCompany$Action.bind(controller, landingCompanyRequestIn, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$NewAccountVirtual", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_d4ed48681c55954edc02f19b0ed492e7Structure", "RESTAPIWebsocketOfficial.model$ST_72900159fa859d96c9b5e8531e637a4cStructure", "RESTAPIWebsocketOfficial.controller$ServerAction.PostNewAccountVirtual", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.controller$CheckHost"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.newAccountVirtual$Action = function(newAccountVirtualRequestIn, hostIn, appIdIn, languageIn, callContext) {
        return OS.Logger.startActiveSpan("NewAccountVirtual", function(span) {
            if (span) {
                span.setAttribute("code.function", "NewAccountVirtual");
                span.setAttribute("outsystems.function.key", "7ffbfda9-1620-414c-ae12-08510cf908ec");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.NewAccountVirtual$vars"))());
                vars.value.newAccountVirtualRequestInLocal = newAccountVirtualRequestIn.clone();
                vars.value.hostInLocal = hostIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postNewAccountVirtualVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var requestBodyVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var fetchResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_72900159fa859d96c9b5e8531e637a4cStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.NewAccountVirtual$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    // IsGreen
                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PostNewAccountVirtual
                            return controller.postNewAccountVirtual$ServerAction(vars.value.appIdInLocal, vars.value.newAccountVirtualRequestInLocal, vars.value.languageInLocal, callContext).then(function(value) {
                                postNewAccountVirtualVar.value = value;
                            }).then(function() {
                                // Response = PostNewAccountVirtual.Response
                                outVars.value.responseOut = postNewAccountVirtualVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: RequestBody
                            requestBodyVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.newAccountVirtualRequestInLocal, false, false);
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, requestBodyVar.value.jSONOut, vars.value.hostInLocal, "POST", "new_account_virtual", "", callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: FetchResponse
                                fetchResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_72900159fa859d96c9b5e8531e637a4cStructure, false);
                                // Response = FetchResponse.Data
                                outVars.value.responseOut = fetchResponseVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("NewAccountVirtual.NewAccountVirtual", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "29458d22-ea3d-4c10-ad92-5bfd690d0db8");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.NewAccountVirtual$vars", [{
        name: "NewAccountVirtualRequest",
        attrName: "newAccountVirtualRequestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_d4ed48681c55954edc02f19b0ed492e7Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_d4ed48681c55954edc02f19b0ed492e7Structure
    }, {
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.NewAccountVirtual$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_72900159fa859d96c9b5e8531e637a4cStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_72900159fa859d96c9b5e8531e637a4cStructure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.newAccountVirtual$Action = function(newAccountVirtualRequestIn, hostIn, appIdIn, languageIn) {
        newAccountVirtualRequestIn = (newAccountVirtualRequestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_d4ed48681c55954edc02f19b0ed492e7Structure() : newAccountVirtualRequestIn;
        hostIn = (hostIn === undefined) ? "" : hostIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.newAccountVirtual$Action.bind(controller, newAccountVirtualRequestIn, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$PartnerAccounts", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "BrowserConsoleLogging.controller", "BrowserConsoleLogging.controller$ConsoleLog", "RESTAPIWebsocketOfficial.referencesHealth", "RESTAPIWebsocketOfficial.referencesHealth$BrowserConsoleLogging", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.model$ST_f98977622822548114c6901450f9dfcdStructure", "RESTAPIWebsocketOfficial.controller$ServerAction.PartnerAccounts", "RESTAPIWebsocketOfficial.controller$CheckHost"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, BrowserConsoleLoggingController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.partnerAccounts$Action = function(hostIn, authTokenIn, appIdIn, languageIn, callContext) {
        return OS.Logger.startActiveSpan("PartnerAccounts", function(span) {
            if (span) {
                span.setAttribute("code.function", "PartnerAccounts");
                span.setAttribute("outsystems.function.key", "98f632af-cd1b-433a-b1e8-bd3b4f60f246");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PartnerAccounts$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var partnerAccountsVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_f98977622822548114c6901450f9dfcdStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PartnerAccounts$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    // IsGreen
                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PartnerAccounts
                            return controller.partnerAccounts$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.authTokenInLocal, callContext).then(function(value) {
                                partnerAccountsVar.value = value;
                            }).then(function() {
                                // Response = PartnerAccounts.Response
                                outVars.value.responseOut = partnerAccountsVar.value.responseOut;
                            });
                        } else {
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "GET", "partner_accounts", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_f98977622822548114c6901450f9dfcdStructure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("PartnerAccounts.PartnerAccounts", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "3c7c30c9-6445-4f73-bbd0-c65b17a9e155");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: ConsoleLog
                                    BrowserConsoleLoggingController.default.consoleLog$Action(allExceptionsVar.value.exceptionMessageAttr, RESTAPIWebsocketOfficialModel.staticEntities.consoleErrorType.error, callContext);
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PartnerAccounts$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PartnerAccounts$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_f98977622822548114c6901450f9dfcdStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_f98977622822548114c6901450f9dfcdStructure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.partnerAccounts$Action = function(hostIn, authTokenIn, appIdIn, languageIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.partnerAccounts$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$PostMT5NewAccount", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.model$ST_c7e48234a44c41827c7b70f1ea8aa0b1Structure", "RESTAPIWebsocketOfficial.model$ST_78c818dad6d0af8d67b898e33e5a3dfbStructure", "RESTAPIWebsocketOfficial.controller$ServerAction.PostMT5NewAccount", "RESTAPIWebsocketOfficial.model$ST_e184b5e893ff6633d3c7357dd29941faStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postMT5NewAccount$Action = function(hostIn, requestIn, authTokenIn, appIdIn, languageIn, callContext) {
        return OS.Logger.startActiveSpan("PostMT5NewAccount", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostMT5NewAccount");
                span.setAttribute("outsystems.function.key", "765a1df6-4fdd-4eca-bec6-6007f32b8ad0");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostMT5NewAccount$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.requestInLocal = requestIn.clone();
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postMT5NewAccountVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_e184b5e893ff6633d3c7357dd29941faStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostMT5NewAccount$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PostMT5NewAccount
                            return controller.postMT5NewAccount$ServerAction(vars.value.appIdInLocal, "EN", vars.value.authTokenInLocal, function() {
                                var rec = new RESTAPIWebsocketOfficialModel.ST_c7e48234a44c41827c7b70f1ea8aa0b1Structure();
                                rec.mt5_new_accountAttr = "1";
                                rec.account_typeAttr = vars.value.requestInLocal.account_typeAttr;
                                rec.nameAttr = vars.value.requestInLocal.nameAttr;
                                rec.emailAttr = vars.value.requestInLocal.emailAttr;
                                rec.leverageAttr = vars.value.requestInLocal.leverageAttr;
                                rec.mainPasswordAttr = vars.value.requestInLocal.mainPasswordAttr;
                                rec.productAttr = vars.value.requestInLocal.productAttr;
                                return rec;
                            }(), callContext).then(function(value) {
                                postMT5NewAccountVar.value = value;
                            }).then(function() {
                                // Response = PostMT5NewAccount.Response
                                outVars.value.responseOut = postMT5NewAccountVar.value.responseOut;
                            });
                        } else {
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "POST", "trading_platform_password_change", "", callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_e184b5e893ff6633d3c7357dd29941faStructure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = OS.DataConversion.JSConversions.typeConvertRecord(responseDeserializeVar.value.dataOut, new RESTAPIWebsocketOfficialModel.ST_78c818dad6d0af8d67b898e33e5a3dfbStructure(), function(source, target) {
                                    target.msg_typeAttr = source.msg_typeAttr;
                                    return target;
                                });
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("PostMT5NewAccount.PostMT5NewAccount", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "13e8f3a4-8c34-43b9-8713-9bd40501cca4");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostMT5NewAccount$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_c7e48234a44c41827c7b70f1ea8aa0b1Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_c7e48234a44c41827c7b70f1ea8aa0b1Structure
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostMT5NewAccount$outVars", [{
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }, {
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_78c818dad6d0af8d67b898e33e5a3dfbStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_78c818dad6d0af8d67b898e33e5a3dfbStructure
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.postMT5NewAccount$Action = function(hostIn, requestIn, authTokenIn, appIdIn, languageIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_c7e48234a44c41827c7b70f1ea8aa0b1Structure() : requestIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.postMT5NewAccount$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), requestIn, OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean),
                Response: actionResults.responseOut
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$PostNotificationEvents", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.model$ST_776bbd191df189ae2b5f20c613dc695aStructure", "RESTAPIWebsocketOfficial.model$ST_dd93278b2756b05a5d284868241cc3d7Structure", "RESTAPIWebsocketOfficial.controller$ServerAction.PostNotificationEvents"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postNotificationEvents$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn, callContext) {
        return OS.Logger.startActiveSpan("PostNotificationEvents", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostNotificationEvents");
                span.setAttribute("outsystems.function.key", "ea1d3dbd-65b8-4712-a9dd-5df1b7c79ab2");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostNotificationEvents$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.requestInLocal = requestIn.clone();
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postNotificationEventsVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var generatePayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_dd93278b2756b05a5d284868241cc3d7Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostNotificationEvents$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PostNotificationEvents
                            return controller.postNotificationEvents$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.requestInLocal, vars.value.authTokenInLocal, callContext).then(function(value) {
                                postNotificationEventsVar.value = value;
                            }).then(function() {
                                // Response = PostNotificationEvents.Response
                                outVars.value.responseOut = postNotificationEventsVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: GeneratePayload
                            generatePayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.requestInLocal, false, false);
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, generatePayloadVar.value.jSONOut, vars.value.hostInLocal, "POST", "notification_event", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_dd93278b2756b05a5d284868241cc3d7Structure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("PostNotificationEvents.PostNotificationEvents", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "42549d3f-0d7e-494d-9302-308f15c007f2");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostNotificationEvents$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }, {
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_776bbd191df189ae2b5f20c613dc695aStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_776bbd191df189ae2b5f20c613dc695aStructure
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostNotificationEvents$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_dd93278b2756b05a5d284868241cc3d7Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_dd93278b2756b05a5d284868241cc3d7Structure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.postNotificationEvents$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_776bbd191df189ae2b5f20c613dc695aStructure() : requestIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.postNotificationEvents$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), requestIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$PostP2pAdvertCreate", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.model$ST_506e59df587c990463d9332a4a38f192Structure", "RESTAPIWebsocketOfficial.model$ST_0879f01858a2bc3ad7b4670abe9d0a7cStructure", "RESTAPIWebsocketOfficial.controller$ServerAction.PostP2pAdvertCreate", "RESTAPIWebsocketOfficial.controller$CheckHost"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postP2pAdvertCreate$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn, callContext) {
        return OS.Logger.startActiveSpan("PostP2pAdvertCreate", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostP2pAdvertCreate");
                span.setAttribute("outsystems.function.key", "e33f5eed-d169-4363-b18f-197e0a05af70");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertCreate$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.requestInLocal = requestIn.clone();
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postP2pAdvertCreateVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var generatePayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_0879f01858a2bc3ad7b4670abe9d0a7cStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertCreate$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PostP2pAdvertCreate
                            return controller.postP2pAdvertCreate$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.requestInLocal, callContext).then(function(value) {
                                postP2pAdvertCreateVar.value = value;
                            }).then(function() {
                                // Response = PostP2pAdvertCreate.Response
                                outVars.value.responseOut = postP2pAdvertCreateVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: GeneratePayload
                            generatePayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.requestInLocal, false, false);
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, generatePayloadVar.value.jSONOut, vars.value.hostInLocal, "POST", "p2p_advert_create", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_0879f01858a2bc3ad7b4670abe9d0a7cStructure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("PostP2pAdvertCreate.PostP2pAdvertCreate", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "0662e33d-1b28-4758-a72f-978184908dab");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertCreate$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }, {
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_506e59df587c990463d9332a4a38f192Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_506e59df587c990463d9332a4a38f192Structure
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertCreate$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_0879f01858a2bc3ad7b4670abe9d0a7cStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_0879f01858a2bc3ad7b4670abe9d0a7cStructure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.postP2pAdvertCreate$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_506e59df587c990463d9332a4a38f192Structure() : requestIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.postP2pAdvertCreate$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), requestIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$PostP2pAdvertiserCreate", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.model$ST_18ad6961998d53ee63bc4d04b91a9152Structure", "RESTAPIWebsocketOfficial.model$ST_ae6a01bb8adb6c18fb3b2d01ca300b15Structure", "RESTAPIWebsocketOfficial.controller$ServerAction.PostP2pAdvertiserCreate", "RESTAPIWebsocketOfficial.model$ST_741b22262e1abaa71c2c6102c32e5868Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postP2pAdvertiserCreate$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn, callContext) {
        return OS.Logger.startActiveSpan("PostP2pAdvertiserCreate", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostP2pAdvertiserCreate");
                span.setAttribute("outsystems.function.key", "1666a8e1-537e-4a9f-9756-031bef0a6880");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertiserCreate$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.requestInLocal = requestIn.clone();
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postP2pAdvertiserCreateVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_741b22262e1abaa71c2c6102c32e5868Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertiserCreate$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PostP2pAdvertiserCreate
                            return controller.postP2pAdvertiserCreate$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.requestInLocal, callContext).then(function(value) {
                                postP2pAdvertiserCreateVar.value = value;
                            }).then(function() {
                                // Response = PostP2pAdvertiserCreate.Response
                                outVars.value.responseOut = postP2pAdvertiserCreateVar.value.responseOut;
                            });
                        } else {
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "POST", "p2p_advertiser_create", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_741b22262e1abaa71c2c6102c32e5868Structure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = OS.DataConversion.JSConversions.typeConvertRecord(responseDeserializeVar.value.dataOut, new RESTAPIWebsocketOfficialModel.ST_ae6a01bb8adb6c18fb3b2d01ca300b15Structure(), function(source, target) {
                                    target.msg_typeAttr = source.msg_typeAttr;
                                    return target;
                                });
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("PostP2pAdvertiserCreate.PostP2pAdvertiserCreate", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "9603a430-4264-4dbb-91fe-f18ce7644e4b");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertiserCreate$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }, {
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_18ad6961998d53ee63bc4d04b91a9152Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_18ad6961998d53ee63bc4d04b91a9152Structure
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertiserCreate$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_ae6a01bb8adb6c18fb3b2d01ca300b15Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_ae6a01bb8adb6c18fb3b2d01ca300b15Structure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.postP2pAdvertiserCreate$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_18ad6961998d53ee63bc4d04b91a9152Structure() : requestIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.postP2pAdvertiserCreate$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), requestIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$PostP2pAdvertiserPaymentMethods", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.model$ST_741b22262e1abaa71c2c6102c32e5868Structure", "RESTAPIWebsocketOfficial.controller$ServerAction.PostP2pAdvertiserPaymentMethods", "RESTAPIWebsocketOfficial.controller$FetchData"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postP2pAdvertiserPaymentMethods$Action = function(hostIn, authTokenIn, appIdIn, languageIn, callContext) {
        return OS.Logger.startActiveSpan("PostP2pAdvertiserPaymentMethods", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostP2pAdvertiserPaymentMethods");
                span.setAttribute("outsystems.function.key", "61cc178c-7fb6-4848-abe2-f742c4bd9087");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertiserPaymentMethods$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postP2pAdvertiserPaymentMethodsVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_741b22262e1abaa71c2c6102c32e5868Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertiserPaymentMethods$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PostP2pAdvertiserPaymentMethods
                            return controller.postP2pAdvertiserPaymentMethods$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, callContext).then(function(value) {
                                postP2pAdvertiserPaymentMethodsVar.value = value;
                            }).then(function() {
                                // Response = PostP2pAdvertiserPaymentMethods.Response
                                outVars.value.responseOut = postP2pAdvertiserPaymentMethodsVar.value.responseOut;
                            });
                        } else {
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "POST", "p2p_advertiser_payment_methods", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_741b22262e1abaa71c2c6102c32e5868Structure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("PostP2pAdvertiserPaymentMethods.PostP2pAdvertiserPaymentMethods", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "53d63144-f09d-46ba-a8e9-224f5a766ed1");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertiserPaymentMethods$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertiserPaymentMethods$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_741b22262e1abaa71c2c6102c32e5868Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_741b22262e1abaa71c2c6102c32e5868Structure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.postP2pAdvertiserPaymentMethods$Action = function(hostIn, authTokenIn, appIdIn, languageIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.postP2pAdvertiserPaymentMethods$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$PostP2pAdvertiserRelations", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.model$ST_43e34b530185a530d10be78dff4ece45Structure", "RESTAPIWebsocketOfficial.model$ST_417bf9c3f6ce648dc8e6f005a5b6ba26Structure", "RESTAPIWebsocketOfficial.controller$ServerAction.PostP2pAdvertiserRelations"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postP2pAdvertiserRelations$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn, callContext) {
        return OS.Logger.startActiveSpan("PostP2pAdvertiserRelations", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostP2pAdvertiserRelations");
                span.setAttribute("outsystems.function.key", "1dac4fad-7a09-44cf-9b35-acfd95f19cf9");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertiserRelations$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.requestInLocal = requestIn.clone();
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postP2pAdvertiserRelationsVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var generatePayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_417bf9c3f6ce648dc8e6f005a5b6ba26Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertiserRelations$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PostP2pAdvertiserRelations
                            return controller.postP2pAdvertiserRelations$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.requestInLocal, callContext).then(function(value) {
                                postP2pAdvertiserRelationsVar.value = value;
                            }).then(function() {
                                // Response = PostP2pAdvertiserRelations.Response
                                outVars.value.responseOut = postP2pAdvertiserRelationsVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: GeneratePayload
                            generatePayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.requestInLocal, false, false);
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, generatePayloadVar.value.jSONOut, vars.value.hostInLocal, "POST", "p2p_advertiser_relations", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_417bf9c3f6ce648dc8e6f005a5b6ba26Structure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("PostP2pAdvertiserRelations.PostP2pAdvertiserRelations", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "a2296fc8-9f6c-4ce4-9184-15d6f4e6d17d");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertiserRelations$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }, {
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_43e34b530185a530d10be78dff4ece45Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_43e34b530185a530d10be78dff4ece45Structure
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertiserRelations$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_417bf9c3f6ce648dc8e6f005a5b6ba26Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_417bf9c3f6ce648dc8e6f005a5b6ba26Structure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.postP2pAdvertiserRelations$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_43e34b530185a530d10be78dff4ece45Structure() : requestIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.postP2pAdvertiserRelations$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), requestIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$PostP2pAdvertiserUpdate", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.model$ST_1402e2338dff154debadf7b72803a581Structure", "RESTAPIWebsocketOfficial.model$ST_a0e3ec28876716cff2e8393c0a8d7e49Structure", "RESTAPIWebsocketOfficial.controller$ServerAction.PostP2pAdvertiserUpdate"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postP2pAdvertiserUpdate$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn, callContext) {
        return OS.Logger.startActiveSpan("PostP2pAdvertiserUpdate", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostP2pAdvertiserUpdate");
                span.setAttribute("outsystems.function.key", "eeaaf802-96b5-45db-a16a-7479755d02a5");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertiserUpdate$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.requestInLocal = requestIn.clone();
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postP2pAdvertiserUpdateVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var generatePayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_a0e3ec28876716cff2e8393c0a8d7e49Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertiserUpdate$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PostP2pAdvertiserUpdate
                            return controller.postP2pAdvertiserUpdate$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.requestInLocal, callContext).then(function(value) {
                                postP2pAdvertiserUpdateVar.value = value;
                            }).then(function() {
                                // Response = PostP2pAdvertiserUpdate.Response
                                outVars.value.responseOut = postP2pAdvertiserUpdateVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: GeneratePayload
                            generatePayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.requestInLocal, false, false);
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, generatePayloadVar.value.jSONOut, vars.value.hostInLocal, "POST", "p2p_advertiser_update", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_a0e3ec28876716cff2e8393c0a8d7e49Structure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("PostP2pAdvertiserUpdate.PostP2pAdvertiserUpdate", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "c04434de-293b-4349-84bb-671130875c58");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertiserUpdate$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }, {
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_1402e2338dff154debadf7b72803a581Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_1402e2338dff154debadf7b72803a581Structure
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertiserUpdate$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_a0e3ec28876716cff2e8393c0a8d7e49Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_a0e3ec28876716cff2e8393c0a8d7e49Structure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.postP2pAdvertiserUpdate$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_1402e2338dff154debadf7b72803a581Structure() : requestIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.postP2pAdvertiserUpdate$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), requestIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$PostP2pAdvertUpdate", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.model$ST_8e422363b5a82bdaf5e61cc1198b7e5dStructure", "RESTAPIWebsocketOfficial.model$ST_5c66d0ce00d79562a27920db6fb2bbf3Structure", "RESTAPIWebsocketOfficial.controller$ServerAction.PostP2pAdvertUpdate", "RESTAPIWebsocketOfficial.model$ST_d7788a11837ccb63472925e3f2cd934fStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postP2pAdvertUpdate$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn, callContext) {
        return OS.Logger.startActiveSpan("PostP2pAdvertUpdate", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostP2pAdvertUpdate");
                span.setAttribute("outsystems.function.key", "839bf6e9-5ae4-4b26-be39-80c0386e87ab");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertUpdate$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.requestInLocal = requestIn.clone();
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postP2pAdvertUpdateVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var generatePayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_5c66d0ce00d79562a27920db6fb2bbf3Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertUpdate$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PostP2pAdvertUpdate
                            return controller.postP2pAdvertUpdate$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.requestInLocal, callContext).then(function(value) {
                                postP2pAdvertUpdateVar.value = value;
                            }).then(function() {
                                // Response = PostP2pAdvertUpdate.Response
                                outVars.value.responseOut = OS.DataConversion.JSConversions.typeConvertRecord(postP2pAdvertUpdateVar.value.responseOut, new RESTAPIWebsocketOfficialModel.ST_d7788a11837ccb63472925e3f2cd934fStructure(), function(source, target) {
                                    target.msg_typeAttr = source.msg_typeAttr;
                                    return target;
                                });
                            });
                        } else {
                            // JSON Serialize: GeneratePayload
                            generatePayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.requestInLocal, false, false);
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, generatePayloadVar.value.jSONOut, vars.value.hostInLocal, "POST", "p2p_advert_update", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_5c66d0ce00d79562a27920db6fb2bbf3Structure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = OS.DataConversion.JSConversions.typeConvertRecord(responseDeserializeVar.value.dataOut, new RESTAPIWebsocketOfficialModel.ST_d7788a11837ccb63472925e3f2cd934fStructure(), function(source, target) {
                                    target.msg_typeAttr = source.msg_typeAttr;
                                    return target;
                                });
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("PostP2pAdvertUpdate.PostP2pAdvertUpdate", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "ae3610de-a0c5-44ef-99a5-70529c650e81");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertUpdate$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }, {
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_8e422363b5a82bdaf5e61cc1198b7e5dStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_8e422363b5a82bdaf5e61cc1198b7e5dStructure
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertUpdate$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_d7788a11837ccb63472925e3f2cd934fStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_d7788a11837ccb63472925e3f2cd934fStructure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.postP2pAdvertUpdate$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_8e422363b5a82bdaf5e61cc1198b7e5dStructure() : requestIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.postP2pAdvertUpdate$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), requestIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$PostP2pChatCreate", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.model$ST_8f98c50b947141d1bd6783e2abc5e9e4Structure", "RESTAPIWebsocketOfficial.model$ST_e6b7ce3d1a8480717883f29f3bf1ccf8Structure", "RESTAPIWebsocketOfficial.controller$ServerAction.PostP2pChatCreate", "RESTAPIWebsocketOfficial.controller$CheckHost"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postP2pChatCreate$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn, callContext) {
        return OS.Logger.startActiveSpan("PostP2pChatCreate", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostP2pChatCreate");
                span.setAttribute("outsystems.function.key", "d3f906c2-98ad-4b3d-a82d-319795aa328a");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pChatCreate$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.requestInLocal = requestIn.clone();
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postP2pChatCreateVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var generatePayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_e6b7ce3d1a8480717883f29f3bf1ccf8Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pChatCreate$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PostP2pChatCreate
                            return controller.postP2pChatCreate$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.requestInLocal, callContext).then(function(value) {
                                postP2pChatCreateVar.value = value;
                            }).then(function() {
                                // Response = PostP2pChatCreate.Response
                                outVars.value.responseOut = postP2pChatCreateVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: GeneratePayload
                            generatePayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.requestInLocal, false, false);
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, generatePayloadVar.value.jSONOut, vars.value.hostInLocal, "POST", "p2p_chat_create", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_e6b7ce3d1a8480717883f29f3bf1ccf8Structure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("PostP2pChatCreate.PostP2pChatCreate", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "791711bc-6393-41a9-9376-c28cf196541a");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pChatCreate$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }, {
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_8f98c50b947141d1bd6783e2abc5e9e4Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_8f98c50b947141d1bd6783e2abc5e9e4Structure
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pChatCreate$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_e6b7ce3d1a8480717883f29f3bf1ccf8Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_e6b7ce3d1a8480717883f29f3bf1ccf8Structure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.postP2pChatCreate$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_8f98c50b947141d1bd6783e2abc5e9e4Structure() : requestIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.postP2pChatCreate$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), requestIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$PostP2pOrderCancel", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_9737eba44981be7e1e2e600a29fca443Structure", "RESTAPIWebsocketOfficial.model$ST_c4bad47c2be3dee614048e4005e9f85dStructure", "RESTAPIWebsocketOfficial.controller$ServerAction.PostP2pOrderCancel", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.controller$FetchData"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postP2pOrderCancel$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn, callContext) {
        return OS.Logger.startActiveSpan("PostP2pOrderCancel", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostP2pOrderCancel");
                span.setAttribute("outsystems.function.key", "5a5c4e73-518e-4856-8bc7-277baeadfb47");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pOrderCancel$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.requestInLocal = requestIn.clone();
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postP2pOrderCancelVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var generatePayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_c4bad47c2be3dee614048e4005e9f85dStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pOrderCancel$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PostP2pOrderCancel
                            return controller.postP2pOrderCancel$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.requestInLocal, callContext).then(function(value) {
                                postP2pOrderCancelVar.value = value;
                            }).then(function() {
                                // Response = PostP2pOrderCancel.Response
                                outVars.value.responseOut = postP2pOrderCancelVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: GeneratePayload
                            generatePayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.requestInLocal, false, false);
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, generatePayloadVar.value.jSONOut, vars.value.hostInLocal, "POST", "p2p_order_cancel", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_c4bad47c2be3dee614048e4005e9f85dStructure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("PostP2pOrderCancel.PostP2pOrderCancel", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "20d88a49-67e6-4e16-bdb8-755199518015");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pOrderCancel$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }, {
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_9737eba44981be7e1e2e600a29fca443Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_9737eba44981be7e1e2e600a29fca443Structure
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pOrderCancel$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_c4bad47c2be3dee614048e4005e9f85dStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_c4bad47c2be3dee614048e4005e9f85dStructure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.postP2pOrderCancel$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_9737eba44981be7e1e2e600a29fca443Structure() : requestIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.postP2pOrderCancel$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), requestIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$PostP2pOrderConfirm", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.model$ST_c9c05587514bf40891ef7d6e333dc809Structure", "RESTAPIWebsocketOfficial.model$ST_7bb5c8caef220d73a9d6936569f73c53Structure", "RESTAPIWebsocketOfficial.controller$ServerAction.PostP2pOrderConfirm"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postP2pOrderConfirm$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn, callContext) {
        return OS.Logger.startActiveSpan("PostP2pOrderConfirm", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostP2pOrderConfirm");
                span.setAttribute("outsystems.function.key", "d25647fb-9cee-47aa-aac8-cbdca3a11976");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pOrderConfirm$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.requestInLocal = requestIn.clone();
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postP2pOrderConfirmVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var generatePayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_7bb5c8caef220d73a9d6936569f73c53Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pOrderConfirm$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PostP2pOrderConfirm
                            return controller.postP2pOrderConfirm$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.requestInLocal, callContext).then(function(value) {
                                postP2pOrderConfirmVar.value = value;
                            }).then(function() {
                                // Response = PostP2pOrderConfirm.Response
                                outVars.value.responseOut = postP2pOrderConfirmVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: GeneratePayload
                            generatePayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.requestInLocal, false, false);
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, generatePayloadVar.value.jSONOut, vars.value.hostInLocal, "POST", "p2p_order_confirm", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_7bb5c8caef220d73a9d6936569f73c53Structure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("PostP2pOrderConfirm.PostP2pOrderConfirm", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "67929772-33df-4261-90cd-6ae2e9cac1d8");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pOrderConfirm$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }, {
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_c9c05587514bf40891ef7d6e333dc809Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_c9c05587514bf40891ef7d6e333dc809Structure
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pOrderConfirm$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_7bb5c8caef220d73a9d6936569f73c53Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_7bb5c8caef220d73a9d6936569f73c53Structure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.postP2pOrderConfirm$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_c9c05587514bf40891ef7d6e333dc809Structure() : requestIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.postP2pOrderConfirm$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), requestIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$PostP2pOrderCreate", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.model$ST_1480f374773845f8188d81a5e43451f4Structure", "RESTAPIWebsocketOfficial.model$ST_7db1e9bcd0fe59811889d8b408745096Structure", "RESTAPIWebsocketOfficial.controller$ServerAction.PostP2pOrderCreate", "RESTAPIWebsocketOfficial.controller$CheckHost"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postP2pOrderCreate$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn, callContext) {
        return OS.Logger.startActiveSpan("PostP2pOrderCreate", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostP2pOrderCreate");
                span.setAttribute("outsystems.function.key", "eaecebdc-2c04-4b72-8f04-6b180e79ca26");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pOrderCreate$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.requestInLocal = requestIn.clone();
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postP2pOrderCreateVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var generatePayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_7db1e9bcd0fe59811889d8b408745096Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pOrderCreate$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PostP2pOrderCreate
                            return controller.postP2pOrderCreate$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.requestInLocal, callContext).then(function(value) {
                                postP2pOrderCreateVar.value = value;
                            }).then(function() {
                                // Response = PostP2pOrderCreate.Response
                                outVars.value.responseOut = postP2pOrderCreateVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: GeneratePayload
                            generatePayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.requestInLocal, false, false);
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, generatePayloadVar.value.jSONOut, vars.value.hostInLocal, "POST", "p2p_order_create", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_7db1e9bcd0fe59811889d8b408745096Structure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("PostP2pOrderCreate.PostP2pOrderCreate", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "beade141-b798-4b94-b7a6-91cccbe414be");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pOrderCreate$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }, {
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_1480f374773845f8188d81a5e43451f4Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_1480f374773845f8188d81a5e43451f4Structure
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pOrderCreate$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_7db1e9bcd0fe59811889d8b408745096Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_7db1e9bcd0fe59811889d8b408745096Structure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.postP2pOrderCreate$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_1480f374773845f8188d81a5e43451f4Structure() : requestIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.postP2pOrderCreate$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), requestIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$PostP2pOrderDispute", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.model$ST_7b4d691c1393b5e9e9f74d1c61904866Structure", "RESTAPIWebsocketOfficial.model$ST_14af92e1255335a1e3d4bd8d827598f2Structure", "RESTAPIWebsocketOfficial.controller$ServerAction.PostP2pOrderDispute", "RESTAPIWebsocketOfficial.controller$CheckHost"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postP2pOrderDispute$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn, callContext) {
        return OS.Logger.startActiveSpan("PostP2pOrderDispute", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostP2pOrderDispute");
                span.setAttribute("outsystems.function.key", "33695815-0c6c-4993-92bc-e09211db0c15");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pOrderDispute$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.requestInLocal = requestIn.clone();
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postP2pOrderDisputeVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var generatePayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_14af92e1255335a1e3d4bd8d827598f2Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pOrderDispute$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PostP2pOrderDispute
                            return controller.postP2pOrderDispute$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.requestInLocal, callContext).then(function(value) {
                                postP2pOrderDisputeVar.value = value;
                            }).then(function() {
                                // Response = PostP2pOrderDispute.Response
                                outVars.value.responseOut = postP2pOrderDisputeVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: GeneratePayload
                            generatePayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.requestInLocal, false, false);
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, generatePayloadVar.value.jSONOut, vars.value.hostInLocal, "POST", "p2p_order_dispute", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_14af92e1255335a1e3d4bd8d827598f2Structure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("PostP2pOrderDispute.PostP2pOrderDispute", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "002de8d0-0d0b-4365-a985-ee08ab25c638");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pOrderDispute$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }, {
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_7b4d691c1393b5e9e9f74d1c61904866Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_7b4d691c1393b5e9e9f74d1c61904866Structure
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pOrderDispute$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_14af92e1255335a1e3d4bd8d827598f2Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_14af92e1255335a1e3d4bd8d827598f2Structure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.postP2pOrderDispute$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_7b4d691c1393b5e9e9f74d1c61904866Structure() : requestIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.postP2pOrderDispute$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), requestIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$PostP2POrderReview", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.model$ST_e9841f58336063558acf37c980346e02Structure", "RESTAPIWebsocketOfficial.model$ST_f0117a9263a599e510e75f4e61b79c85Structure", "RESTAPIWebsocketOfficial.controller$ServerAction.PostP2pOrderReview", "RESTAPIWebsocketOfficial.controller$FetchData"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postP2POrderReview$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn, callContext) {
        return OS.Logger.startActiveSpan("PostP2POrderReview", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostP2POrderReview");
                span.setAttribute("outsystems.function.key", "f83bda43-ac96-42e6-aa36-04b2f2705a0d");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2POrderReview$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.requestInLocal = requestIn.clone();
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postP2pOrderReviewVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var generatePayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_f0117a9263a599e510e75f4e61b79c85Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2POrderReview$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PostP2pOrderReview
                            return controller.postP2pOrderReview$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.requestInLocal, callContext).then(function(value) {
                                postP2pOrderReviewVar.value = value;
                            }).then(function() {
                                // Response = PostP2pOrderReview.Response
                                outVars.value.responseOut = postP2pOrderReviewVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: GeneratePayload
                            generatePayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.requestInLocal, false, false);
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, generatePayloadVar.value.jSONOut, vars.value.hostInLocal, "POST", "p2p_order_review", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_f0117a9263a599e510e75f4e61b79c85Structure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("PostP2POrderReview.PostP2POrderReview", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "04bfad6f-27b8-4220-8be8-1a80a3894472");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2POrderReview$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }, {
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_e9841f58336063558acf37c980346e02Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_e9841f58336063558acf37c980346e02Structure
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2POrderReview$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_f0117a9263a599e510e75f4e61b79c85Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_f0117a9263a599e510e75f4e61b79c85Structure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.postP2POrderReview$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_e9841f58336063558acf37c980346e02Structure() : requestIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.postP2POrderReview$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), requestIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$PostTradingPlatformAccounts", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_091b86786925fd05b892541280481403Structure", "RESTAPIWebsocketOfficial.model$ST_711f7ad16da273bf9e6563303a17ad00Structure", "RESTAPIWebsocketOfficial.controller$ServerAction.PostTradingPlatformAccounts", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.model$ST_75725e65d106c1568a850780233a08baStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postTradingPlatformAccounts$Action = function(hostIn, authTokenIn, appIdIn, languageIn, platformIn, callContext) {
        return OS.Logger.startActiveSpan("PostTradingPlatformAccounts", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostTradingPlatformAccounts");
                span.setAttribute("outsystems.function.key", "071ec432-55f0-4936-ad93-a77edf7641dd");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostTradingPlatformAccounts$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.platformInLocal = platformIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postTradingPlatformAccountsVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_75725e65d106c1568a850780233a08baStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostTradingPlatformAccounts$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PostTradingPlatformAccounts
                            return controller.postTradingPlatformAccounts$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, function() {
                                var rec = new RESTAPIWebsocketOfficialModel.ST_091b86786925fd05b892541280481403Structure();
                                rec.platformAttr = vars.value.platformInLocal;
                                return rec;
                            }(), vars.value.authTokenInLocal, "application/json", callContext).then(function(value) {
                                postTradingPlatformAccountsVar.value = value;
                            });
                        } else {
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "POST", "trading_platform_accounts", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_75725e65d106c1568a850780233a08baStructure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("PostTradingPlatformAccounts.PostTradingPlatformAccounts", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "86bfe18e-7764-4afe-ad93-e36dd03c5393");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostTradingPlatformAccounts$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
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
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostTradingPlatformAccounts$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_75725e65d106c1568a850780233a08baStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_75725e65d106c1568a850780233a08baStructure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.postTradingPlatformAccounts$Action = function(hostIn, authTokenIn, appIdIn, languageIn, platformIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        platformIn = (platformIn === undefined) ? "" : platformIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.postTradingPlatformAccounts$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(platformIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$PostTradingPlatformPasswordChange", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.model$ST_0f7be4ac68673923b2b4b44ce40dcec1Structure", "RESTAPIWebsocketOfficial.model$ST_17a41c5de85fc25b7713c6576534b176Structure", "RESTAPIWebsocketOfficial.controller$ServerAction.PostTradingPlatformNewAccount", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.model$ST_e184b5e893ff6633d3c7357dd29941faStructure", "RESTAPIWebsocketOfficial.model$ST_8517d9c8b73e866553a1a7b806af5079Structure", "RESTAPIWebsocketOfficial.model$ST_d1246d83c419f598cf8e4e18d5276097Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postTradingPlatformPasswordChange$Action = function(hostIn, requestIn, authTokenIn, appIdIn, languageIn, callContext) {
        return OS.Logger.startActiveSpan("PostTradingPlatformPasswordChange", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostTradingPlatformPasswordChange");
                span.setAttribute("outsystems.function.key", "6804ba22-7664-40fe-9b1b-993020605e3f");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostTradingPlatformPasswordChange$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.requestInLocal = requestIn.clone();
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postTradingPlatformNewAccountVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_e184b5e893ff6633d3c7357dd29941faStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostTradingPlatformPasswordChange$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PostTradingPlatformNewAccount
                            return controller.postTradingPlatformNewAccount$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.authTokenInLocal, function() {
                                var rec = new RESTAPIWebsocketOfficialModel.ST_0f7be4ac68673923b2b4b44ce40dcec1Structure();
                                return rec;
                            }(), "application/json", callContext).then(function(value) {
                                postTradingPlatformNewAccountVar.value = value;
                            }).then(function() {
                                // Response = PostTradingPlatformNewAccount.Response
                                outVars.value.responseOut = OS.DataConversion.JSConversions.typeConvertRecord(postTradingPlatformNewAccountVar.value.responseOut, new RESTAPIWebsocketOfficialModel.ST_e184b5e893ff6633d3c7357dd29941faStructure(), function(source, target) {
                                    target.echo_reqAttr.platformAttr = source.echo_reqAttr.platformAttr;
                                    target.errorAttr = source.errorAttr;
                                    target.msg_typeAttr = source.msg_typeAttr;
                                    return target;
                                });
                            });
                        } else {
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "POST", "trading_platform_password_change", "", callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_e184b5e893ff6633d3c7357dd29941faStructure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("PostTradingPlatformPasswordChange.PostTradingPlatformPasswordChange", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "07aac954-855e-45aa-959d-2b496fad2468");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostTradingPlatformPasswordChange$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_d1246d83c419f598cf8e4e18d5276097Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_d1246d83c419f598cf8e4e18d5276097Structure
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostTradingPlatformPasswordChange$outVars", [{
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }, {
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_e184b5e893ff6633d3c7357dd29941faStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_e184b5e893ff6633d3c7357dd29941faStructure
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.postTradingPlatformPasswordChange$Action = function(hostIn, requestIn, authTokenIn, appIdIn, languageIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_d1246d83c419f598cf8e4e18d5276097Structure() : requestIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.postTradingPlatformPasswordChange$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), requestIn, OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean),
                Response: actionResults.responseOut
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$PostVerifyEmail", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.model$ST_89d14f8b4008cb2b12eb9082eeeb95a6Structure", "RESTAPIWebsocketOfficial.model$ST_b5532fbd5672db40752d556a46e96eaeStructure", "RESTAPIWebsocketOfficial.controller$ServerAction.PostVerifyEmail", "RESTAPIWebsocketOfficial.model$ST_c864353821feed79663806f3e445d40eStructure", "RESTAPIWebsocketOfficial.model$ST_f1644d81fb90e6f4882b198c996831d1Structure", "RESTAPIWebsocketOfficial.model$ST_66a31b6dc85d7150aaf5da4cc4b359a4Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postVerifyEmail$Action = function(requestIn, hostIn, appIdIn, languageIn, callContext) {
        return OS.Logger.startActiveSpan("PostVerifyEmail", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostVerifyEmail");
                span.setAttribute("outsystems.function.key", "d3d62953-6b58-44e5-a02e-9584c5169d5d");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostVerifyEmail$vars"))());
                vars.value.requestInLocal = requestIn.clone();
                vars.value.hostInLocal = hostIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var postVerifyEmailVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var requestBodyVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var jSONDeserializeResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_c864353821feed79663806f3e445d40eStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostVerifyEmail$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PostVerifyEmail
                            return controller.postVerifyEmail$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.requestInLocal, callContext).then(function(value) {
                                postVerifyEmailVar.value = value;
                            }).then(function() {
                                // Response = PostVerifyEmail.Response
                                outVars.value.responseOut = postVerifyEmailVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: RequestBody
                            requestBodyVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.requestInLocal, false, false);
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, requestBodyVar.value.jSONOut, vars.value.hostInLocal, "POST", "verify_email", "", callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: JSONDeserializeResponse
                                jSONDeserializeResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_c864353821feed79663806f3e445d40eStructure, false);
                                // Response = JSONDeserializeResponse.Data
                                outVars.value.responseOut = OS.DataConversion.JSConversions.typeConvertRecord(jSONDeserializeResponseVar.value.dataOut, new RESTAPIWebsocketOfficialModel.ST_b5532fbd5672db40752d556a46e96eaeStructure(), function(source, target) {
                                    target.msg_typeAttr = source.msg_typeAttr;
                                    return target;
                                });
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostVerifyEmail$vars", [{
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_89d14f8b4008cb2b12eb9082eeeb95a6Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_89d14f8b4008cb2b12eb9082eeeb95a6Structure
    }, {
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostVerifyEmail$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_b5532fbd5672db40752d556a46e96eaeStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_b5532fbd5672db40752d556a46e96eaeStructure
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.postVerifyEmail$Action = function(requestIn, hostIn, appIdIn, languageIn) {
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_89d14f8b4008cb2b12eb9082eeeb95a6Structure() : requestIn;
        hostIn = (hostIn === undefined) ? "" : hostIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.postVerifyEmail$Action.bind(controller, requestIn, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$ResetPassword", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.model$ST_24b97ac8060a9349e09da2d88e1dea00Structure", "RESTAPIWebsocketOfficial.model$ST_b8e1602bee02fb2422c9742384775a7bStructure", "RESTAPIWebsocketOfficial.controller$ServerAction.PostResetPassword"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.resetPassword$Action = function(requestIn, hostIn, appIdIn, languageIn, callContext) {
        return OS.Logger.startActiveSpan("ResetPassword", function(span) {
            if (span) {
                span.setAttribute("code.function", "ResetPassword");
                span.setAttribute("outsystems.function.key", "7eb7952d-cd4f-4e4b-8862-07037e0acfb3");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.ResetPassword$vars"))());
                vars.value.requestInLocal = requestIn.clone();
                vars.value.hostInLocal = hostIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postResetPasswordVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var bodyRequestVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_b8e1602bee02fb2422c9742384775a7bStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.ResetPassword$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    // IsGreen
                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PostResetPassword
                            return controller.postResetPassword$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.requestInLocal, callContext).then(function(value) {
                                postResetPasswordVar.value = value;
                            }).then(function() {
                                // Response = PostResetPassword.Response
                                outVars.value.responseOut = postResetPasswordVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: BodyRequest
                            bodyRequestVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.requestInLocal, false, false);
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, bodyRequestVar.value.jSONOut, vars.value.hostInLocal, "POST", "reset_password", "", callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_b8e1602bee02fb2422c9742384775a7bStructure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("ResetPassword.ResetPassword", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "9e33b41d-1aa3-422e-9b5b-76578be5581d");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.ResetPassword$vars", [{
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_24b97ac8060a9349e09da2d88e1dea00Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_24b97ac8060a9349e09da2d88e1dea00Structure
    }, {
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.ResetPassword$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_b8e1602bee02fb2422c9742384775a7bStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_b8e1602bee02fb2422c9742384775a7bStructure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.resetPassword$Action = function(requestIn, hostIn, appIdIn, languageIn) {
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_24b97ac8060a9349e09da2d88e1dea00Structure() : requestIn;
        hostIn = (hostIn === undefined) ? "" : hostIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.resetPassword$Action.bind(controller, requestIn, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$ResidenceList", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure", "RESTAPIWebsocketOfficial.controller$ServerAction.GetResidenceList", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.controller$FetchData"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.residenceList$Action = function(hostIn, appIdIn, languageIn, callContext) {
        return OS.Logger.startActiveSpan("ResidenceList", function(span) {
            if (span) {
                span.setAttribute("code.function", "ResidenceList");
                span.setAttribute("outsystems.function.key", "c055e2ed-1519-4726-8d98-9d18058b0fbd");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.ResidenceList$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var getResidenceListVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var fetchResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_63a473e932ef99f5271718b62399e682Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.ResidenceList$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    // IsGreen
                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: GetResidenceList
                            return controller.getResidenceList$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, callContext).then(function(value) {
                                getResidenceListVar.value = value;
                            }).then(function() {
                                // Response = GetResidenceList.Response
                                outVars.value.responseOut = getResidenceListVar.value.responseOut;
                            });
                        } else {
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "GET", "residence_list", "", callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: FetchResponse
                                fetchResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_63a473e932ef99f5271718b62399e682Structure, false);
                                // Response = FetchResponse.Data
                                outVars.value.responseOut = fetchResponseVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("ResidenceList.ResidenceList", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "f53eb755-5870-4a99-a0b3-99f2880036b0");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.ResidenceList$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.ResidenceList$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_63a473e932ef99f5271718b62399e682Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_63a473e932ef99f5271718b62399e682Structure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.residenceList$Action = function(hostIn, appIdIn, languageIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.residenceList$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$SetSettings", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.model$ST_0f5a50b395c52c47c6da386a52aa5b06Structure", "RESTAPIWebsocketOfficial.model$ST_0a41599a3a2ec3b22722247f2d2affffStructure", "RESTAPIWebsocketOfficial.controller$ServerAction.PostSetSettings", "RESTAPIWebsocketOfficial.controller$FetchData"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.setSettings$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn, callContext) {
        return OS.Logger.startActiveSpan("SetSettings", function(span) {
            if (span) {
                span.setAttribute("code.function", "SetSettings");
                span.setAttribute("outsystems.function.key", "90909ab1-6d57-4853-8a73-21e1a85ab1fb");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.SetSettings$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.requestInLocal = requestIn.clone();
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var setSettingsVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var generatePayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_0a41599a3a2ec3b22722247f2d2affffStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.SetSettings$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: SetSettings
                            return controller.postSetSettings$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.requestInLocal, vars.value.authTokenInLocal, callContext).then(function(value) {
                                setSettingsVar.value = value;
                            }).then(function() {
                                // Response = SetSettings.Response
                                outVars.value.responseOut = setSettingsVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: GeneratePayload
                            generatePayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.requestInLocal, false, false);
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, generatePayloadVar.value.jSONOut, vars.value.hostInLocal, "POST", "set_settings", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_0a41599a3a2ec3b22722247f2d2affffStructure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("SetSettings.SetSettings", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "2df83cba-f8b8-4c72-8f92-c4d183b1772a");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.SetSettings$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }, {
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_0f5a50b395c52c47c6da386a52aa5b06Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_0f5a50b395c52c47c6da386a52aa5b06Structure
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.SetSettings$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_0a41599a3a2ec3b22722247f2d2affffStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_0a41599a3a2ec3b22722247f2d2affffStructure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.setSettings$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_0f5a50b395c52c47c6da386a52aa5b06Structure() : requestIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.setSettings$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), requestIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$TradingPlatformAvailableAccounts", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.model$ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure", "RESTAPIWebsocketOfficial.model$ST_7a752455e27bb9ea87d724bbb902dd16Structure", "RESTAPIWebsocketOfficial.controller$ServerAction.PostTradingPlatformAvailableAccountsMt5", "RESTAPIWebsocketOfficial.model$ST_a6a60f46ebdfbc286beab7fb13984df8Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.tradingPlatformAvailableAccounts$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn, callContext) {
        return OS.Logger.startActiveSpan("TradingPlatformAvailableAccounts", function(span) {
            if (span) {
                span.setAttribute("code.function", "TradingPlatformAvailableAccounts");
                span.setAttribute("outsystems.function.key", "f99dd5bc-3409-4627-a70d-9c93cca98124");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformAvailableAccounts$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.requestInLocal = requestIn.clone();
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postTradingPlatformAvailableAccountsMt5Var = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var responseMT5DeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_7a752455e27bb9ea87d724bbb902dd16Structure))());
                var responseCtraderDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_a6a60f46ebdfbc286beab7fb13984df8Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformAvailableAccounts$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PostTradingPlatformAvailableAccountsMt5
                            return controller.postTradingPlatformAvailableAccountsMt5$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.authTokenInLocal, function() {
                                var rec = new RESTAPIWebsocketOfficialModel.ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure();
                                rec.platformAttr = vars.value.requestInLocal.platformAttr;
                                rec.country_codeAttr = vars.value.requestInLocal.country_codeAttr;
                                return rec;
                            }(), callContext).then(function(value) {
                                postTradingPlatformAvailableAccountsMt5Var.value = value;
                            });
                        } else {
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "POST", "trading_platform_available_accounts", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                if (((vars.value.requestInLocal.platformAttr === "mt5"))) {
                                    // JSON Deserialize: ResponseMT5Deserialize
                                    responseMT5DeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_7a752455e27bb9ea87d724bbb902dd16Structure, false);
                                    // ResponseMT5 = ResponseMT5Deserialize.Data
                                    outVars.value.responseMT5Out = responseMT5DeserializeVar.value.dataOut;
                                } else {
                                    // JSON Deserialize: ResponseCtraderDeserialize
                                    responseCtraderDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_a6a60f46ebdfbc286beab7fb13984df8Structure, false);
                                    // ResponseCtrader = ResponseCtraderDeserialize.Data
                                    outVars.value.responseCtraderOut = responseCtraderDeserializeVar.value.dataOut;
                                }

                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("TradingPlatformAvailableAccounts.TradingPlatformAvailableAccounts", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "ec55ee31-21a4-4213-834f-e59a543a254a");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformAvailableAccounts$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }, {
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformAvailableAccounts$outVars", [{
        name: "ResponseMT5",
        attrName: "responseMT5Out",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_7a752455e27bb9ea87d724bbb902dd16Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_7a752455e27bb9ea87d724bbb902dd16Structure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }, {
        name: "ResponseCtrader",
        attrName: "responseCtraderOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_a6a60f46ebdfbc286beab7fb13984df8Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_a6a60f46ebdfbc286beab7fb13984df8Structure
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.tradingPlatformAvailableAccounts$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure() : requestIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.tradingPlatformAvailableAccounts$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), requestIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                ResponseMT5: actionResults.responseMT5Out,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean),
                ResponseCtrader: actionResults.responseCtraderOut
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$TradingPlatformAvailableAccountsCtrader", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$TradingPlatformAvailableAccountsCtrader.JavaScript2JS", "RESTAPIWebsocketOfficial.controller$TradingPlatformAvailableAccountsCtrader.JavaScript1JS", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.model$ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure", "RESTAPIWebsocketOfficial.model$ST_a6a60f46ebdfbc286beab7fb13984df8Structure", "RESTAPIWebsocketOfficial.controller$ServerAction.PostTradingPlatformAvailableAccountsCtrader", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.model$ST_ae15e885fd6defd7e40491664a35bff0Structure", "RESTAPIWebsocketOfficial.model$RL_e615c73f7c49d5c9a1b81b0e5505c2d5"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, RESTAPIWebsocketOfficial_controller_TradingPlatformAvailableAccountsCtrader_JavaScript2JS, RESTAPIWebsocketOfficial_controller_TradingPlatformAvailableAccountsCtrader_JavaScript1JS) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.tradingPlatformAvailableAccountsCtrader$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn, callContext) {
        return OS.Logger.startActiveSpan("TradingPlatformAvailableAccountsCtrader", function(span) {
            if (span) {
                span.setAttribute("code.function", "TradingPlatformAvailableAccountsCtrader");
                span.setAttribute("outsystems.function.key", "af107889-871a-4605-aef2-a06568f78f49");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformAvailableAccountsCtrader$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.requestInLocal = requestIn.clone();
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postTradingPlatformAvailableAccountsCtraderVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var jSONSerialize2Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var responseCtraderDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_a6a60f46ebdfbc286beab7fb13984df8Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformAvailableAccountsCtrader$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PostTradingPlatformAvailableAccountsCtrader
                            return controller.postTradingPlatformAvailableAccountsCtrader$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.authTokenInLocal, function() {
                                var rec = new RESTAPIWebsocketOfficialModel.ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure();
                                rec.platformAttr = vars.value.requestInLocal.platformAttr;
                                rec.country_codeAttr = vars.value.requestInLocal.country_codeAttr;
                                return rec;
                            }(), callContext).then(function(value) {
                                postTradingPlatformAvailableAccountsCtraderVar.value = value;
                            }).then(function() {
                                // JSON Serialize: JSONSerialize1
                                jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(postTradingPlatformAvailableAccountsCtraderVar.value.responseOut, false, false);
                                OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "JavaScript1");
                                        span.setAttribute("outsystems.function.key", "ce87cb83-8827-41c6-94aa-4275b7107c9c");
                                        span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                        span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(RESTAPIWebsocketOfficial_controller_TradingPlatformAvailableAccountsCtrader_JavaScript1JS, "JavaScript1", "TradingPlatformAvailableAccountsCtrader", {
                                            In1: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize1Var.value.jSONOut, OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {}, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // Set ResponseCtrader
                                // ResponseCtrader = PostTradingPlatformAvailableAccountsCtrader.Response.trading_platform_available_accounts
                                outVars.value.responseCtraderOut = postTradingPlatformAvailableAccountsCtraderVar.value.responseOut.trading_platform_available_accountsAttr;
                                // JSON Serialize: JSONSerialize2
                                jSONSerialize2Var.value.jSONOut = OS.JSONUtils.serializeToJSON(outVars.value.responseCtraderOut, false, false);
                                OS.Logger.startActiveSpan("JavaScript2", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "JavaScript2");
                                        span.setAttribute("outsystems.function.key", "cd7e76ce-ac76-4461-8480-1f13161fd0f9");
                                        span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                        span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(RESTAPIWebsocketOfficial_controller_TradingPlatformAvailableAccountsCtrader_JavaScript2JS, "JavaScript2", "TradingPlatformAvailableAccountsCtrader", {
                                            In1: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize2Var.value.jSONOut, OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {}, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                            });
                        } else {
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "POST", "trading_platform_available_accounts", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseCtraderDeserialize
                                responseCtraderDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_a6a60f46ebdfbc286beab7fb13984df8Structure, false);
                                // ResponseCtrader = ResponseCtraderDeserialize.Data.trading_platform_available_accounts
                                outVars.value.responseCtraderOut = responseCtraderDeserializeVar.value.dataOut.trading_platform_available_accountsAttr;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("TradingPlatformAvailableAccountsCtrader.TradingPlatformAvailableAccountsCtrader", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "7d4c275b-7cb5-4509-a80c-ef03d6a7ef33");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformAvailableAccountsCtrader$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }, {
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformAvailableAccountsCtrader$outVars", [{
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }, {
        name: "ResponseCtrader",
        attrName: "responseCtraderOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.RecordList,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.RL_e615c73f7c49d5c9a1b81b0e5505c2d5();
        },
        complexType: RESTAPIWebsocketOfficialModel.RL_e615c73f7c49d5c9a1b81b0e5505c2d5
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.tradingPlatformAvailableAccountsCtrader$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure() : requestIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.tradingPlatformAvailableAccountsCtrader$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), requestIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean),
                ResponseCtrader: actionResults.responseCtraderOut
            };
        });
    };
});

define("RESTAPIWebsocketOfficial.controller$TradingPlatformAvailableAccountsCtrader.JavaScript2JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        console.log($parameters.In1)
    };
});

define("RESTAPIWebsocketOfficial.controller$TradingPlatformAvailableAccountsCtrader.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        console.log($parameters.In1)
    };
});


define("RESTAPIWebsocketOfficial.controller$TradingPlatformAvailableAccountsMt5", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.model$ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure", "RESTAPIWebsocketOfficial.model$ST_7a752455e27bb9ea87d724bbb902dd16Structure", "RESTAPIWebsocketOfficial.controller$ServerAction.PostTradingPlatformAvailableAccountsMt5"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.tradingPlatformAvailableAccountsMt5$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn, callContext) {
        return OS.Logger.startActiveSpan("TradingPlatformAvailableAccountsMt5", function(span) {
            if (span) {
                span.setAttribute("code.function", "TradingPlatformAvailableAccountsMt5");
                span.setAttribute("outsystems.function.key", "e8e62775-314d-4423-9081-983a59129193");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformAvailableAccountsMt5$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.requestInLocal = requestIn.clone();
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postTradingPlatformAvailableAccountsVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var responseMT5DeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_7a752455e27bb9ea87d724bbb902dd16Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformAvailableAccountsMt5$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PostTradingPlatformAvailableAccounts
                            return controller.postTradingPlatformAvailableAccountsMt5$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.authTokenInLocal, function() {
                                var rec = new RESTAPIWebsocketOfficialModel.ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure();
                                rec.platformAttr = vars.value.requestInLocal.platformAttr;
                                rec.country_codeAttr = vars.value.requestInLocal.country_codeAttr;
                                return rec;
                            }(), callContext).then(function(value) {
                                postTradingPlatformAvailableAccountsVar.value = value;
                            }).then(function() {
                                // Set ResponseMT5
                                // ResponseMT5 = PostTradingPlatformAvailableAccounts.Response
                                outVars.value.responseMT5Out = postTradingPlatformAvailableAccountsVar.value.responseOut;
                            });
                        } else {
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "POST", "trading_platform_available_accounts", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseMT5Deserialize
                                responseMT5DeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_7a752455e27bb9ea87d724bbb902dd16Structure, false);
                                // ResponseMT5 = ResponseMT5Deserialize.Data
                                outVars.value.responseMT5Out = responseMT5DeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("TradingPlatformAvailableAccountsMt5.TradingPlatformAvailableAccountsMt5", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "f9523870-00d9-4e7a-8803-9cece360d41a");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformAvailableAccountsMt5$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }, {
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformAvailableAccountsMt5$outVars", [{
        name: "ResponseMT5",
        attrName: "responseMT5Out",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_7a752455e27bb9ea87d724bbb902dd16Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_7a752455e27bb9ea87d724bbb902dd16Structure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.tradingPlatformAvailableAccountsMt5$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure() : requestIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.tradingPlatformAvailableAccountsMt5$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), requestIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                ResponseMT5: actionResults.responseMT5Out,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$TradingPlatformPasswordReset", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.model$ST_cef0b20847ad169551dbf51efb01e613Structure", "RESTAPIWebsocketOfficial.model$ST_07c55c1e5241bcf8a9665901701e0dbfStructure", "RESTAPIWebsocketOfficial.controller$ServerAction.PostTradingPlatformPasswordReset"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.tradingPlatformPasswordReset$Action = function(hostIn, appIdIn, languageIn, callContext) {
        return OS.Logger.startActiveSpan("TradingPlatformPasswordReset", function(span) {
            if (span) {
                span.setAttribute("code.function", "TradingPlatformPasswordReset");
                span.setAttribute("outsystems.function.key", "55d3f82d-c76a-44bf-9e52-67b98fe24e20");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformPasswordReset$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postTradingPlatformPasswordResetVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_07c55c1e5241bcf8a9665901701e0dbfStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformPasswordReset$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PostTradingPlatformPasswordReset
                            return controller.postTradingPlatformPasswordReset$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, function() {
                                var rec = new RESTAPIWebsocketOfficialModel.ST_cef0b20847ad169551dbf51efb01e613Structure();
                                return rec;
                            }(), callContext).then(function(value) {
                                postTradingPlatformPasswordResetVar.value = value;
                            }).then(function() {
                                // Response = PostTradingPlatformPasswordReset.Response
                                outVars.value.responseOut = postTradingPlatformPasswordResetVar.value.responseOut;
                            });
                        } else {
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "POST", "trading_platform_password_reset", "", callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_07c55c1e5241bcf8a9665901701e0dbfStructure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("TradingPlatformPasswordReset.TradingPlatformPasswordReset", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "663efc9c-2393-4195-afcf-7e88c8ad5e5b");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformPasswordReset$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformPasswordReset$outVars", [{
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }, {
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_07c55c1e5241bcf8a9665901701e0dbfStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_07c55c1e5241bcf8a9665901701e0dbfStructure
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.tradingPlatformPasswordReset$Action = function(hostIn, appIdIn, languageIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.tradingPlatformPasswordReset$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean),
                Response: actionResults.responseOut
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$TradingPlatformStatus", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.model$ST_e3b9823599cdef8012785f8875d8da38Structure", "RESTAPIWebsocketOfficial.controller$ServerAction.GetTradingPlatformStatus"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.tradingPlatformStatus$Action = function(hostIn, authTokenIn, appIdIn, languageIn, callContext) {
        return OS.Logger.startActiveSpan("TradingPlatformStatus", function(span) {
            if (span) {
                span.setAttribute("code.function", "TradingPlatformStatus");
                span.setAttribute("outsystems.function.key", "f0e28096-fa5a-4c0c-b746-782cb78ec899");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformStatus$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var getTradingPlatformStatusVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var jSONDeserializeResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_e3b9823599cdef8012785f8875d8da38Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformStatus$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: GetTradingPlatformStatus
                            return controller.getTradingPlatformStatus$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.authTokenInLocal, callContext).then(function(value) {
                                getTradingPlatformStatusVar.value = value;
                            }).then(function() {
                                // Response = GetTradingPlatformStatus.Response
                                outVars.value.responseOut = getTradingPlatformStatusVar.value.responseOut;
                            });
                        } else {
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "GET", "trading_platform_status", "", callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: JSONDeserializeResponse
                                jSONDeserializeResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_e3b9823599cdef8012785f8875d8da38Structure, false);
                                // Response = JSONDeserializeResponse.Data
                                outVars.value.responseOut = jSONDeserializeResponseVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("TradingPlatformStatus.TradingPlatformStatus", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "69eae721-72eb-4d0c-b2ec-e8a365fee6c4");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformStatus$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformStatus$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_e3b9823599cdef8012785f8875d8da38Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_e3b9823599cdef8012785f8875d8da38Structure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.tradingPlatformStatus$Action = function(hostIn, authTokenIn, appIdIn, languageIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.tradingPlatformStatus$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$UploadDocument", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.model$ST_5b50423d811eb7c792dd37d3d80886a3Structure", "RESTAPIWebsocketOfficial.model$ST_8298e25b4ee60f76d22250711b4bff2eStructure", "RESTAPIWebsocketOfficial.controller$ServerAction.UploadDocument", "RESTAPIWebsocketOfficial.controller$CheckHost"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.uploadDocument$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn, callContext) {
        return OS.Logger.startActiveSpan("UploadDocument", function(span) {
            if (span) {
                span.setAttribute("code.function", "UploadDocument");
                span.setAttribute("outsystems.function.key", "ea4c6f5e-6358-432e-b534-cfe3cfe12625");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.UploadDocument$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.requestInLocal = requestIn.clone();
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var uploadDocumentVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var generatePayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_8298e25b4ee60f76d22250711b4bff2eStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.UploadDocument$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: UploadDocument
                            return controller.uploadDocument$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.requestInLocal, vars.value.authTokenInLocal, callContext).then(function(value) {
                                uploadDocumentVar.value = value;
                            }).then(function() {
                                // Response = UploadDocument.Response
                                outVars.value.responseOut = uploadDocumentVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: GeneratePayload
                            generatePayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.requestInLocal, false, false);
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, generatePayloadVar.value.jSONOut, vars.value.hostInLocal, "POST", "document_upload", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_8298e25b4ee60f76d22250711b4bff2eStructure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("UploadDocument.UploadDocument", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "1095d67c-de54-4cb7-84b2-640db164d96d");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.UploadDocument$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }, {
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_5b50423d811eb7c792dd37d3d80886a3Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_5b50423d811eb7c792dd37d3d80886a3Structure
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.UploadDocument$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_8298e25b4ee60f76d22250711b4bff2eStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_8298e25b4ee60f76d22250711b4bff2eStructure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.uploadDocument$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_5b50423d811eb7c792dd37d3d80886a3Structure() : requestIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.uploadDocument$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), requestIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$WebsocketLogout", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.model$ST_bc9f0cd5cd952aeeadf59ee9a5dfb79aStructure", "RESTAPIWebsocketOfficial.controller$ServerAction.PostLogout", "RESTAPIWebsocketOfficial.controller$FetchData"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.websocketLogout$Action = function(hostIn, appIdIn, languageIn, authTokenIn, callContext) {
        return OS.Logger.startActiveSpan("WebsocketLogout", function(span) {
            if (span) {
                span.setAttribute("code.function", "WebsocketLogout");
                span.setAttribute("outsystems.function.key", "8c887304-99a1-4885-a288-0265539f3ed8");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.WebsocketLogout$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.authTokenInLocal = authTokenIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postLogoutVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_bc9f0cd5cd952aeeadf59ee9a5dfb79aStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.WebsocketLogout$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PostLogout
                            return controller.postLogout$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.authTokenInLocal, callContext).then(function(value) {
                                postLogoutVar.value = value;
                            }).then(function() {
                                // Response = PostLogout.Response
                                outVars.value.responseOut = postLogoutVar.value.responseOut;
                            });
                        } else {
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "GET", "logout", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_bc9f0cd5cd952aeeadf59ee9a5dfb79aStructure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("WebsocketLogout.WebsocketLogout", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "277c59fd-49c6-4d19-b6ba-66d8e305cc7b");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketOfficialController.default;
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.WebsocketLogout$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }, {
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.WebsocketLogout$outVars", [{
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }, {
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_bc9f0cd5cd952aeeadf59ee9a5dfb79aStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_bc9f0cd5cd952aeeadf59ee9a5dfb79aStructure
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.websocketLogout$Action = function(hostIn, appIdIn, languageIn, authTokenIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.websocketLogout$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean),
                Response: actionResults.responseOut
            };
        });
    };
});


define("RESTAPIWebsocketOfficial.controller$ServerAction.Authorize", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_f502318fbe2f943e6cfbba125766780aStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.authorize$ServerAction = function(appIdIn, languageIn, requestIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("Authorize", function(span) {
            if (span) {
                span.setAttribute("code.function", "Authorize");
                span.setAttribute("outsystems.function.key", "7cbda02f-f943-4782-912c-ed335770551a");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                };
                return controller.callServerAction("Authorize", "screenservices/RESTAPIWebsocketOfficial/ActionAuthorize", "ayeEGuh6_S_4Uizq5ExNHg", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionAuthorize"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_f502318fbe2f943e6cfbba125766780aStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionAuthorize", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_f502318fbe2f943e6cfbba125766780aStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_f502318fbe2f943e6cfbba125766780aStructure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.FetchServiceToken", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_2ffa7d64546da67e71986ee16644bc99Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.fetchServiceToken$ServerAction = function(appIdIn, languageIn, requestIn, xTokenIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("FetchServiceToken", function(span) {
            if (span) {
                span.setAttribute("code.function", "FetchServiceToken");
                span.setAttribute("outsystems.function.key", "ab32ddab-485b-43eb-ac26-66aa83dd005a");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record),
                    XToken: OS.DataConversion.ServerDataConverter.to(xTokenIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("FetchServiceToken", "screenservices/RESTAPIWebsocketOfficial/ActionFetchServiceToken", "g7FwnaiKsQpGybuuWYO1zg", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionFetchServiceToken"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_2ffa7d64546da67e71986ee16644bc99Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionFetchServiceToken", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_2ffa7d64546da67e71986ee16644bc99Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_2ffa7d64546da67e71986ee16644bc99Structure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.FetchStateList", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_26ee026d8929d280bd686ae6efaa64faStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.fetchStateList$ServerAction = function(appIdIn, languageIn, requestIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("FetchStateList", function(span) {
            if (span) {
                span.setAttribute("code.function", "FetchStateList");
                span.setAttribute("outsystems.function.key", "19b70e4c-e7bd-40f4-bb80-55f8259dec90");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                };
                return controller.callServerAction("FetchStateList", "screenservices/RESTAPIWebsocketOfficial/ActionFetchStateList", "qq5Ip1YlP_7WggU3KnW7dQ", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionFetchStateList"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_26ee026d8929d280bd686ae6efaa64faStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionFetchStateList", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_26ee026d8929d280bd686ae6efaa64faStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_26ee026d8929d280bd686ae6efaa64faStructure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.GetAccountStatus", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_746d074ddcc08e0df3b269ffb1933d5aStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getAccountStatus$ServerAction = function(appIdIn, languageIn, authTokenIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("GetAccountStatus", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetAccountStatus");
                span.setAttribute("outsystems.function.key", "6c15520c-1a30-44a4-9c45-61e8c4084c59");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    AuthToken: OS.DataConversion.ServerDataConverter.to(authTokenIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("GetAccountStatus", "screenservices/RESTAPIWebsocketOfficial/ActionGetAccountStatus", "yMYJC1GM7tROLhVvgBberQ", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetAccountStatus"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_746d074ddcc08e0df3b269ffb1933d5aStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetAccountStatus", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_746d074ddcc08e0df3b269ffb1933d5aStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_746d074ddcc08e0df3b269ffb1933d5aStructure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.GetAssetIndex", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_870defcbb5bf4a58a2a009971edc7d07Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getAssetIndex$ServerAction = function(appIdIn, languageIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("GetAssetIndex", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetAssetIndex");
                span.setAttribute("outsystems.function.key", "288c5241-f103-4a6d-ae56-6df8bf4176ac");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("GetAssetIndex", "screenservices/RESTAPIWebsocketOfficial/ActionGetAssetIndex", "oO7i9vseE3+Gf0I_0V3ypA", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetAssetIndex"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_870defcbb5bf4a58a2a009971edc7d07Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetAssetIndex", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_870defcbb5bf4a58a2a009971edc7d07Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_870defcbb5bf4a58a2a009971edc7d07Structure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.GetKYCAuthStatus", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_4820561c523dc84c471446a46147a065Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getKYCAuthStatus$ServerAction = function(authTokenIn, appIdIn, languageIn, requestIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("GetKYCAuthStatus", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetKYCAuthStatus");
                span.setAttribute("outsystems.function.key", "e304136f-94fa-4111-b150-32708b9c5c8d");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AuthToken: OS.DataConversion.ServerDataConverter.to(authTokenIn, OS.DataTypes.DataTypes.Text),
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                };
                return controller.callServerAction("GetKYCAuthStatus", "screenservices/RESTAPIWebsocketOfficial/ActionGetKYCAuthStatus", "vMNskYYofGyC+i2bwy79GQ", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetKYCAuthStatus"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_4820561c523dc84c471446a46147a065Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetKYCAuthStatus", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_4820561c523dc84c471446a46147a065Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_4820561c523dc84c471446a46147a065Structure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.GetLandingCompany", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_55477c48be760e041c4dbfa365f63009Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getLandingCompany$ServerAction = function(appIdIn, languageIn, requestIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("GetLandingCompany", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetLandingCompany");
                span.setAttribute("outsystems.function.key", "2afa81a6-9312-47c9-8f1f-024e35c0121d");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                };
                return controller.callServerAction("GetLandingCompany", "screenservices/RESTAPIWebsocketOfficial/ActionGetLandingCompany", "ykPFA87m7a6oaENZBtbxog", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetLandingCompany"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_55477c48be760e041c4dbfa365f63009Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetLandingCompany", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_55477c48be760e041c4dbfa365f63009Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_55477c48be760e041c4dbfa365f63009Structure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.GetMT5LoginList", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_2f457e0a5b13526850516eea23ae0e9aStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getMT5LoginList$ServerAction = function(appIdIn, languageIn, xTokenIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("GetMT5LoginList", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetMT5LoginList");
                span.setAttribute("outsystems.function.key", "066791a7-277c-441b-b2c6-4e2f9a36e3a9");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    XToken: OS.DataConversion.ServerDataConverter.to(xTokenIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("GetMT5LoginList", "screenservices/RESTAPIWebsocketOfficial/ActionGetMT5LoginList", "DFxgHjqzq8ClbkygjsHyyA", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetMT5LoginList"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_2f457e0a5b13526850516eea23ae0e9aStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetMT5LoginList", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_2f457e0a5b13526850516eea23ae0e9aStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_2f457e0a5b13526850516eea23ae0e9aStructure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.GetP2pAdvertInfo", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_d7788a11837ccb63472925e3f2cd934fStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getP2pAdvertInfo$ServerAction = function(appIdIn, languageIn, requestIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("GetP2pAdvertInfo", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetP2pAdvertInfo");
                span.setAttribute("outsystems.function.key", "2c062866-af7e-404c-914d-77e6dacea060");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                };
                return controller.callServerAction("GetP2pAdvertInfo", "screenservices/RESTAPIWebsocketOfficial/ActionGetP2pAdvertInfo", "uRIVHgB+YuEfViD2x6WmQQ", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pAdvertInfo"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_d7788a11837ccb63472925e3f2cd934fStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pAdvertInfo", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_d7788a11837ccb63472925e3f2cd934fStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_d7788a11837ccb63472925e3f2cd934fStructure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.GetP2pAdvertiserAdverts", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_8adbe420d80a0b7b8c828a81a654f9e3Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getP2pAdvertiserAdverts$ServerAction = function(appIdIn, languageIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("GetP2pAdvertiserAdverts", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetP2pAdvertiserAdverts");
                span.setAttribute("outsystems.function.key", "4925f8bc-0f09-4520-9eb9-1b32d1a29f9e");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("GetP2pAdvertiserAdverts", "screenservices/RESTAPIWebsocketOfficial/ActionGetP2pAdvertiserAdverts", "5keA3DuzI2coStbT5qhnAg", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pAdvertiserAdverts"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_8adbe420d80a0b7b8c828a81a654f9e3Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pAdvertiserAdverts", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_8adbe420d80a0b7b8c828a81a654f9e3Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_8adbe420d80a0b7b8c828a81a654f9e3Structure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.GetP2pAdvertiserInfo", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_254a95af2bb66abb401551d01686c0a6Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getP2pAdvertiserInfo$ServerAction = function(appIdIn, languageIn, requestIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("GetP2pAdvertiserInfo", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetP2pAdvertiserInfo");
                span.setAttribute("outsystems.function.key", "4dcb3aa1-edef-4345-9763-83489de27bcb");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                };
                return controller.callServerAction("GetP2pAdvertiserInfo", "screenservices/RESTAPIWebsocketOfficial/ActionGetP2pAdvertiserInfo", "TT9vXRRIvIEfcamxllRhnw", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pAdvertiserInfo"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_254a95af2bb66abb401551d01686c0a6Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pAdvertiserInfo", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_254a95af2bb66abb401551d01686c0a6Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_254a95af2bb66abb401551d01686c0a6Structure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.GetP2pAdvertiserList", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_1eaff43aca523f2e537db1085abb9969Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getP2pAdvertiserList$ServerAction = function(appIdIn, languageIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("GetP2pAdvertiserList", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetP2pAdvertiserList");
                span.setAttribute("outsystems.function.key", "d30b4f91-db4a-4657-b28c-f1d3dcc03ca8");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("GetP2pAdvertiserList", "screenservices/RESTAPIWebsocketOfficial/ActionGetP2pAdvertiserList", "Tt4n7gQWbH9oo29tmGt0KA", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pAdvertiserList"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_1eaff43aca523f2e537db1085abb9969Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pAdvertiserList", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_1eaff43aca523f2e537db1085abb9969Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_1eaff43aca523f2e537db1085abb9969Structure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.GetP2pAdvertList", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_d4e039bbd70c593954382df471fdac2aStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getP2pAdvertList$ServerAction = function(appIdIn, languageIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("GetP2pAdvertList", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetP2pAdvertList");
                span.setAttribute("outsystems.function.key", "d0ce1bff-7aed-47ec-af00-07bcf739eacf");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("GetP2pAdvertList", "screenservices/RESTAPIWebsocketOfficial/ActionGetP2pAdvertList", "R6DZoQ1jgqDvzNwBi0mS9Q", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pAdvertList"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_d4e039bbd70c593954382df471fdac2aStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pAdvertList", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_d4e039bbd70c593954382df471fdac2aStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_d4e039bbd70c593954382df471fdac2aStructure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.GetP2pCountryList", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_b12d67ef17b1896a838b57ca02b5f67dStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getP2pCountryList$ServerAction = function(appIdIn, languageIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("GetP2pCountryList", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetP2pCountryList");
                span.setAttribute("outsystems.function.key", "3b7ec1f2-ca0e-40a3-9f0e-cdd280c76c87");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("GetP2pCountryList", "screenservices/RESTAPIWebsocketOfficial/ActionGetP2pCountryList", "y2APZWdN7v7qj4rpT5wDmQ", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pCountryList"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_b12d67ef17b1896a838b57ca02b5f67dStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pCountryList", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_b12d67ef17b1896a838b57ca02b5f67dStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_b12d67ef17b1896a838b57ca02b5f67dStructure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.GetP2pOrderInfo", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_019dc1f94c4673ed88c9dc3f4cd5419bStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getP2pOrderInfo$ServerAction = function(appIdIn, languageIn, requestIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("GetP2pOrderInfo", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetP2pOrderInfo");
                span.setAttribute("outsystems.function.key", "d7e4959e-6c5e-4274-9e3e-5af9149d17b1");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                };
                return controller.callServerAction("GetP2pOrderInfo", "screenservices/RESTAPIWebsocketOfficial/ActionGetP2pOrderInfo", "b1UeB2OmLs84wavA_9HU7A", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pOrderInfo"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_019dc1f94c4673ed88c9dc3f4cd5419bStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pOrderInfo", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_019dc1f94c4673ed88c9dc3f4cd5419bStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_019dc1f94c4673ed88c9dc3f4cd5419bStructure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.GetP2pOrderList", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_d48bf8d95ece559f969e94f01654ff6bStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getP2pOrderList$ServerAction = function(appIdIn, languageIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("GetP2pOrderList", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetP2pOrderList");
                span.setAttribute("outsystems.function.key", "84cecca6-7662-460c-94bb-5a53d6395ad6");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("GetP2pOrderList", "screenservices/RESTAPIWebsocketOfficial/ActionGetP2pOrderList", "1NeRSC1mgCpq3Euxq9_aIg", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pOrderList"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_d48bf8d95ece559f969e94f01654ff6bStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pOrderList", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_d48bf8d95ece559f969e94f01654ff6bStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_d48bf8d95ece559f969e94f01654ff6bStructure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.GetP2pPaymentMethods", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_b08a5be4fd4ca77058e6256ff8f39643Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getP2pPaymentMethods$ServerAction = function(appIdIn, languageIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("GetP2pPaymentMethods", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetP2pPaymentMethods");
                span.setAttribute("outsystems.function.key", "30b4a88a-d53d-486e-bf89-d1d1280dd230");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("GetP2pPaymentMethods", "screenservices/RESTAPIWebsocketOfficial/ActionGetP2pPaymentMethods", "Keq1B4kMggbs3bbMfinN5w", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pPaymentMethods"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_b08a5be4fd4ca77058e6256ff8f39643Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pPaymentMethods", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_b08a5be4fd4ca77058e6256ff8f39643Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_b08a5be4fd4ca77058e6256ff8f39643Structure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.GetP2pSettings", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_370fde1db6758aa39a364a98c4d26988Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getP2pSettings$ServerAction = function(appIdIn, languageIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("GetP2pSettings", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetP2pSettings");
                span.setAttribute("outsystems.function.key", "e7c13628-d07b-44d2-8895-94bc6c7ea7f2");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("GetP2pSettings", "screenservices/RESTAPIWebsocketOfficial/ActionGetP2pSettings", "F9j_vY2e+Iwesfad75IRSw", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pSettings"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_370fde1db6758aa39a364a98c4d26988Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pSettings", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_370fde1db6758aa39a364a98c4d26988Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_370fde1db6758aa39a364a98c4d26988Structure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.GetResidenceList", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getResidenceList$ServerAction = function(appIdIn, languageIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("GetResidenceList", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetResidenceList");
                span.setAttribute("outsystems.function.key", "8c19c48f-d810-43dd-9ec4-ffb170bba99a");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("GetResidenceList", "screenservices/RESTAPIWebsocketOfficial/ActionGetResidenceList", "w2ji5BzkTIEjWiGCSTJzyw", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetResidenceList"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_63a473e932ef99f5271718b62399e682Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetResidenceList", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_63a473e932ef99f5271718b62399e682Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_63a473e932ef99f5271718b62399e682Structure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.GetSettings", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getSettings$ServerAction = function(appIdIn, languageIn, authTokenIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("GetSettings", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetSettings");
                span.setAttribute("outsystems.function.key", "26276e4b-083d-4411-99d7-ca6d86b2e9e2");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    AuthToken: OS.DataConversion.ServerDataConverter.to(authTokenIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("GetSettings", "screenservices/RESTAPIWebsocketOfficial/ActionGetSettings", "UDG+2b3Mb9tFV5wa1L03KA", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetSettings"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetSettings", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.GetTradingPlatformStatus", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_e3b9823599cdef8012785f8875d8da38Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getTradingPlatformStatus$ServerAction = function(appIdIn, languageIn, xTokenIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("GetTradingPlatformStatus", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetTradingPlatformStatus");
                span.setAttribute("outsystems.function.key", "6792e1ab-e429-4d13-9a5f-c08bed222ad6");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    XToken: OS.DataConversion.ServerDataConverter.to(xTokenIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("GetTradingPlatformStatus", "screenservices/RESTAPIWebsocketOfficial/ActionGetTradingPlatformStatus", "Rb6t3mXCMHcnCWn4r+xZ+g", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetTradingPlatformStatus"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_e3b9823599cdef8012785f8875d8da38Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetTradingPlatformStatus", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_e3b9823599cdef8012785f8875d8da38Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_e3b9823599cdef8012785f8875d8da38Structure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.GetWebsiteStatus", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_c864353821feed79663806f3e445d40eStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.getWebsiteStatus$ServerAction = function(appIdIn, languageIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("GetWebsiteStatus", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetWebsiteStatus");
                span.setAttribute("outsystems.function.key", "56cefcb5-f65e-4296-82bc-70df55499da4");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("GetWebsiteStatus", "screenservices/RESTAPIWebsocketOfficial/ActionGetWebsiteStatus", "dWXBOowIHWSKvNOIalx2sQ", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetWebsiteStatus"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_c864353821feed79663806f3e445d40eStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetWebsiteStatus", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_c864353821feed79663806f3e445d40eStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_c864353821feed79663806f3e445d40eStructure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.IDVDocumentAdd", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_7e69cc84f253f5c0a2cdd55aa624238cStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.iDVDocumentAdd$ServerAction = function(appIdIn, languageIn, requestIn, xTokenIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("IDVDocumentAdd", function(span) {
            if (span) {
                span.setAttribute("code.function", "IDVDocumentAdd");
                span.setAttribute("outsystems.function.key", "b5218152-d1fa-485e-85b7-c89ae2da1825");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record),
                    XToken: OS.DataConversion.ServerDataConverter.to(xTokenIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("IDVDocumentAdd", "screenservices/RESTAPIWebsocketOfficial/ActionIDVDocumentAdd", "IsJjcVCH5nzZPCuAKE92_Q", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionIDVDocumentAdd"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_7e69cc84f253f5c0a2cdd55aa624238cStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionIDVDocumentAdd", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_7e69cc84f253f5c0a2cdd55aa624238cStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_7e69cc84f253f5c0a2cdd55aa624238cStructure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.PartnerAccounts", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_f98977622822548114c6901450f9dfcdStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.partnerAccounts$ServerAction = function(appIdIn, languageIn, authTokenIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PartnerAccounts", function(span) {
            if (span) {
                span.setAttribute("code.function", "PartnerAccounts");
                span.setAttribute("outsystems.function.key", "be3b6932-c587-4fd1-88f8-978f71890c57");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    AuthToken: OS.DataConversion.ServerDataConverter.to(authTokenIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("PartnerAccounts", "screenservices/RESTAPIWebsocketOfficial/ActionPartnerAccounts", "ebX6IieZVEWias93+Dbfzw", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPartnerAccounts"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_f98977622822548114c6901450f9dfcdStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPartnerAccounts", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_f98977622822548114c6901450f9dfcdStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_f98977622822548114c6901450f9dfcdStructure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.PostAccountList", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_42e091eee706086ba45ab77d0ef6821fStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postAccountList$ServerAction = function(appIdIn, languageIn, xtokenIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostAccountList", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostAccountList");
                span.setAttribute("outsystems.function.key", "3cc84d5e-492a-4e65-98d6-d0d5a3c81037");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Xtoken: OS.DataConversion.ServerDataConverter.to(xtokenIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("PostAccountList", "screenservices/RESTAPIWebsocketOfficial/ActionPostAccountList", "ztMd43RevYXBo5sYh0d8Aw", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostAccountList"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_42e091eee706086ba45ab77d0ef6821fStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostAccountList", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_42e091eee706086ba45ab77d0ef6821fStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_42e091eee706086ba45ab77d0ef6821fStructure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.PostCashierCrypto", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_2f46c6fecf81fe9d91763f789141eec9Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postCashierCrypto$ServerAction = function(appIdIn, languageIn, xTokenIn, requestIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostCashierCrypto", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostCashierCrypto");
                span.setAttribute("outsystems.function.key", "3eae3dd1-78ab-4d29-8608-fea61ad3ffb5");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    XToken: OS.DataConversion.ServerDataConverter.to(xTokenIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                };
                return controller.callServerAction("PostCashierCrypto", "screenservices/RESTAPIWebsocketOfficial/ActionPostCashierCrypto", "nvw+dhchpetNPSuMbGCN2Q", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostCashierCrypto"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_2f46c6fecf81fe9d91763f789141eec9Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostCashierCrypto", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_2f46c6fecf81fe9d91763f789141eec9Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_2f46c6fecf81fe9d91763f789141eec9Structure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.PostCashierFiat", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postCashierFiat$ServerAction = function(appIdIn, languageIn, xTokenIn, requestIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostCashierFiat", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostCashierFiat");
                span.setAttribute("outsystems.function.key", "c01a4e81-9a04-40fb-9c3d-bd84d65bd21e");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    XToken: OS.DataConversion.ServerDataConverter.to(xTokenIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                };
                return controller.callServerAction("PostCashierFiat", "screenservices/RESTAPIWebsocketOfficial/ActionPostCashierFiat", "_n8909SLcEe3iUxOaAVdDg", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostCashierFiat"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostCashierFiat", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.PostLogout", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_bc9f0cd5cd952aeeadf59ee9a5dfb79aStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postLogout$ServerAction = function(appIdIn, languageIn, xtokenIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostLogout", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostLogout");
                span.setAttribute("outsystems.function.key", "3e20ea78-d706-47eb-8972-b68e7d0ea2b7");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Xtoken: OS.DataConversion.ServerDataConverter.to(xtokenIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("PostLogout", "screenservices/RESTAPIWebsocketOfficial/ActionPostLogout", "y_awOrmrH7vGdeJnrhH7Uw", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostLogout"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_bc9f0cd5cd952aeeadf59ee9a5dfb79aStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostLogout", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_bc9f0cd5cd952aeeadf59ee9a5dfb79aStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_bc9f0cd5cd952aeeadf59ee9a5dfb79aStructure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.PostMT5NewAccount", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_78c818dad6d0af8d67b898e33e5a3dfbStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postMT5NewAccount$ServerAction = function(appIdIn, languageIn, xtokenIn, requestIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostMT5NewAccount", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostMT5NewAccount");
                span.setAttribute("outsystems.function.key", "ab549bab-1f22-4b5c-8a1d-09750811b1dc");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Xtoken: OS.DataConversion.ServerDataConverter.to(xtokenIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                };
                return controller.callServerAction("PostMT5NewAccount", "screenservices/RESTAPIWebsocketOfficial/ActionPostMT5NewAccount", "95+Vb_Z_VhGJboTv_YQ77A", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostMT5NewAccount"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_78c818dad6d0af8d67b898e33e5a3dfbStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostMT5NewAccount", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_78c818dad6d0af8d67b898e33e5a3dfbStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_78c818dad6d0af8d67b898e33e5a3dfbStructure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.PostNewAccountVirtual", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_72900159fa859d96c9b5e8531e637a4cStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postNewAccountVirtual$ServerAction = function(appIdIn, requestIn, languageIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostNewAccountVirtual", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostNewAccountVirtual");
                span.setAttribute("outsystems.function.key", "51842f76-c323-4e2e-b4a4-38f1dc1e0842");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("PostNewAccountVirtual", "screenservices/RESTAPIWebsocketOfficial/ActionPostNewAccountVirtual", "B0q2VCY_EkROShtp3fFVHg", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostNewAccountVirtual"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_72900159fa859d96c9b5e8531e637a4cStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostNewAccountVirtual", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_72900159fa859d96c9b5e8531e637a4cStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_72900159fa859d96c9b5e8531e637a4cStructure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.PostNotificationEvents", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_dd93278b2756b05a5d284868241cc3d7Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postNotificationEvents$ServerAction = function(appIdIn, languageIn, requestIn, xTokenIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostNotificationEvents", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostNotificationEvents");
                span.setAttribute("outsystems.function.key", "dd9f25b1-5da1-4be0-be96-ac2f1369d587");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record),
                    XToken: OS.DataConversion.ServerDataConverter.to(xTokenIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("PostNotificationEvents", "screenservices/RESTAPIWebsocketOfficial/ActionPostNotificationEvents", "XNf5TPCR+HDhoAgY+699dg", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostNotificationEvents"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_dd93278b2756b05a5d284868241cc3d7Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostNotificationEvents", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_dd93278b2756b05a5d284868241cc3d7Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_dd93278b2756b05a5d284868241cc3d7Structure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.PostP2pAdvertCreate", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_0879f01858a2bc3ad7b4670abe9d0a7cStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postP2pAdvertCreate$ServerAction = function(appIdIn, languageIn, requestIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostP2pAdvertCreate", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostP2pAdvertCreate");
                span.setAttribute("outsystems.function.key", "7e56cb3d-edb0-4759-9689-1d38c1e47373");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                };
                return controller.callServerAction("PostP2pAdvertCreate", "screenservices/RESTAPIWebsocketOfficial/ActionPostP2pAdvertCreate", "u6rtltaBD1O29LINzye3ag", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pAdvertCreate"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_0879f01858a2bc3ad7b4670abe9d0a7cStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pAdvertCreate", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_0879f01858a2bc3ad7b4670abe9d0a7cStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_0879f01858a2bc3ad7b4670abe9d0a7cStructure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.PostP2pAdvertiserCreate", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_ae6a01bb8adb6c18fb3b2d01ca300b15Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postP2pAdvertiserCreate$ServerAction = function(appIdIn, languageIn, requestIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostP2pAdvertiserCreate", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostP2pAdvertiserCreate");
                span.setAttribute("outsystems.function.key", "8276f352-ed73-4ef0-9a6a-bf5c5b6c8cc5");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                };
                return controller.callServerAction("PostP2pAdvertiserCreate", "screenservices/RESTAPIWebsocketOfficial/ActionPostP2pAdvertiserCreate", "XFyuuPv8Ejtm4UabumQcaw", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pAdvertiserCreate"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_ae6a01bb8adb6c18fb3b2d01ca300b15Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pAdvertiserCreate", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_ae6a01bb8adb6c18fb3b2d01ca300b15Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_ae6a01bb8adb6c18fb3b2d01ca300b15Structure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.PostP2pAdvertiserPaymentMethods", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_741b22262e1abaa71c2c6102c32e5868Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postP2pAdvertiserPaymentMethods$ServerAction = function(appIdIn, languageIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostP2pAdvertiserPaymentMethods", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostP2pAdvertiserPaymentMethods");
                span.setAttribute("outsystems.function.key", "77a2a90e-503b-4f08-81c2-0255cb842be4");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("PostP2pAdvertiserPaymentMethods", "screenservices/RESTAPIWebsocketOfficial/ActionPostP2pAdvertiserPaymentMethods", "kkTXeXlfqpan+cTIh3LG+A", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pAdvertiserPaymentMethods"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_741b22262e1abaa71c2c6102c32e5868Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pAdvertiserPaymentMethods", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_741b22262e1abaa71c2c6102c32e5868Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_741b22262e1abaa71c2c6102c32e5868Structure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.PostP2pAdvertiserRelations", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_417bf9c3f6ce648dc8e6f005a5b6ba26Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postP2pAdvertiserRelations$ServerAction = function(appIdIn, languageIn, requestIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostP2pAdvertiserRelations", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostP2pAdvertiserRelations");
                span.setAttribute("outsystems.function.key", "06d70b96-e543-4b8b-a310-4a921aadb630");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                };
                return controller.callServerAction("PostP2pAdvertiserRelations", "screenservices/RESTAPIWebsocketOfficial/ActionPostP2pAdvertiserRelations", "9WjRI5SiA1iYddcKL2n7oQ", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pAdvertiserRelations"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_417bf9c3f6ce648dc8e6f005a5b6ba26Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pAdvertiserRelations", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_417bf9c3f6ce648dc8e6f005a5b6ba26Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_417bf9c3f6ce648dc8e6f005a5b6ba26Structure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.PostP2pAdvertiserUpdate", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_a0e3ec28876716cff2e8393c0a8d7e49Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postP2pAdvertiserUpdate$ServerAction = function(appIdIn, languageIn, requestIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostP2pAdvertiserUpdate", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostP2pAdvertiserUpdate");
                span.setAttribute("outsystems.function.key", "121f02bd-8de0-4ab8-b2fa-e567c73ee7d2");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                };
                return controller.callServerAction("PostP2pAdvertiserUpdate", "screenservices/RESTAPIWebsocketOfficial/ActionPostP2pAdvertiserUpdate", "jV+AZgrUmgdmot81Zr0g7w", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pAdvertiserUpdate"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_a0e3ec28876716cff2e8393c0a8d7e49Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pAdvertiserUpdate", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_a0e3ec28876716cff2e8393c0a8d7e49Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_a0e3ec28876716cff2e8393c0a8d7e49Structure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.PostP2pAdvertUpdate", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_5c66d0ce00d79562a27920db6fb2bbf3Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postP2pAdvertUpdate$ServerAction = function(appIdIn, languageIn, requestIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostP2pAdvertUpdate", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostP2pAdvertUpdate");
                span.setAttribute("outsystems.function.key", "f3100a8f-ebae-48f9-a062-63a0c583cc1b");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                };
                return controller.callServerAction("PostP2pAdvertUpdate", "screenservices/RESTAPIWebsocketOfficial/ActionPostP2pAdvertUpdate", "suim__Ee9DfAO41aAK16Ag", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pAdvertUpdate"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_5c66d0ce00d79562a27920db6fb2bbf3Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pAdvertUpdate", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_5c66d0ce00d79562a27920db6fb2bbf3Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_5c66d0ce00d79562a27920db6fb2bbf3Structure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.PostP2pChatCreate", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_e6b7ce3d1a8480717883f29f3bf1ccf8Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postP2pChatCreate$ServerAction = function(appIdIn, languageIn, requestIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostP2pChatCreate", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostP2pChatCreate");
                span.setAttribute("outsystems.function.key", "f0098f00-25d2-469f-bbfe-0650eb21d57b");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                };
                return controller.callServerAction("PostP2pChatCreate", "screenservices/RESTAPIWebsocketOfficial/ActionPostP2pChatCreate", "dORZN_JVWKyGu51JTmgezQ", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pChatCreate"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_e6b7ce3d1a8480717883f29f3bf1ccf8Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pChatCreate", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_e6b7ce3d1a8480717883f29f3bf1ccf8Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_e6b7ce3d1a8480717883f29f3bf1ccf8Structure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.PostP2pOrderCancel", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_c4bad47c2be3dee614048e4005e9f85dStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postP2pOrderCancel$ServerAction = function(appIdIn, languageIn, requestIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostP2pOrderCancel", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostP2pOrderCancel");
                span.setAttribute("outsystems.function.key", "83c1a2df-37c0-4285-978a-3eafc92004ce");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                };
                return controller.callServerAction("PostP2pOrderCancel", "screenservices/RESTAPIWebsocketOfficial/ActionPostP2pOrderCancel", "NT04WNOk_Zr02gfZ1rVlxw", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pOrderCancel"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_c4bad47c2be3dee614048e4005e9f85dStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pOrderCancel", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_c4bad47c2be3dee614048e4005e9f85dStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_c4bad47c2be3dee614048e4005e9f85dStructure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.PostP2pOrderConfirm", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_7bb5c8caef220d73a9d6936569f73c53Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postP2pOrderConfirm$ServerAction = function(appIdIn, languageIn, requestIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostP2pOrderConfirm", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostP2pOrderConfirm");
                span.setAttribute("outsystems.function.key", "de151021-7c9b-49ef-a50e-bdc95c7ccbf6");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                };
                return controller.callServerAction("PostP2pOrderConfirm", "screenservices/RESTAPIWebsocketOfficial/ActionPostP2pOrderConfirm", "7+Nnk4gWybyAOvcOX8V32Q", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pOrderConfirm"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_7bb5c8caef220d73a9d6936569f73c53Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pOrderConfirm", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_7bb5c8caef220d73a9d6936569f73c53Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_7bb5c8caef220d73a9d6936569f73c53Structure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.PostP2pOrderCreate", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_7db1e9bcd0fe59811889d8b408745096Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postP2pOrderCreate$ServerAction = function(appIdIn, languageIn, requestIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostP2pOrderCreate", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostP2pOrderCreate");
                span.setAttribute("outsystems.function.key", "f11f6472-594f-4b59-9174-c7a93c688779");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                };
                return controller.callServerAction("PostP2pOrderCreate", "screenservices/RESTAPIWebsocketOfficial/ActionPostP2pOrderCreate", "9FqxpRg84QOkRBEnWrs79g", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pOrderCreate"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_7db1e9bcd0fe59811889d8b408745096Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pOrderCreate", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_7db1e9bcd0fe59811889d8b408745096Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_7db1e9bcd0fe59811889d8b408745096Structure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.PostP2pOrderDispute", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_14af92e1255335a1e3d4bd8d827598f2Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postP2pOrderDispute$ServerAction = function(appIdIn, languageIn, requestIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostP2pOrderDispute", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostP2pOrderDispute");
                span.setAttribute("outsystems.function.key", "c439aff0-123f-48ee-b093-f1e3581c76f1");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                };
                return controller.callServerAction("PostP2pOrderDispute", "screenservices/RESTAPIWebsocketOfficial/ActionPostP2pOrderDispute", "xSu8L1V_ISqsMyJaCDLgxg", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pOrderDispute"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_14af92e1255335a1e3d4bd8d827598f2Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pOrderDispute", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_14af92e1255335a1e3d4bd8d827598f2Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_14af92e1255335a1e3d4bd8d827598f2Structure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.PostP2pOrderReview", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_f0117a9263a599e510e75f4e61b79c85Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postP2pOrderReview$ServerAction = function(appIdIn, languageIn, requestIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostP2pOrderReview", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostP2pOrderReview");
                span.setAttribute("outsystems.function.key", "61c12d6f-3077-4b4e-8b9e-3aa8fbbfa3db");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                };
                return controller.callServerAction("PostP2pOrderReview", "screenservices/RESTAPIWebsocketOfficial/ActionPostP2pOrderReview", "E85YPYi8gDYsoHIJ10NBxQ", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pOrderReview"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_f0117a9263a599e510e75f4e61b79c85Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pOrderReview", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_f0117a9263a599e510e75f4e61b79c85Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_f0117a9263a599e510e75f4e61b79c85Structure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.PostResetPassword", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_b8e1602bee02fb2422c9742384775a7bStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postResetPassword$ServerAction = function(appIdIn, languageIn, requestIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostResetPassword", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostResetPassword");
                span.setAttribute("outsystems.function.key", "c22736a7-1e6e-49bd-bfbf-bf68e02c715f");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                };
                return controller.callServerAction("PostResetPassword", "screenservices/RESTAPIWebsocketOfficial/ActionPostResetPassword", "3B1p2XUaMhGz6oYZDRip1w", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostResetPassword"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_b8e1602bee02fb2422c9742384775a7bStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostResetPassword", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_b8e1602bee02fb2422c9742384775a7bStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_b8e1602bee02fb2422c9742384775a7bStructure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.PostSetSettings", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_0a41599a3a2ec3b22722247f2d2affffStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postSetSettings$ServerAction = function(appIdIn, languageIn, requestIn, xTokenIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostSetSettings", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostSetSettings");
                span.setAttribute("outsystems.function.key", "3c1776c3-2ae3-412b-b542-35d09cadec3f");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record),
                    XToken: OS.DataConversion.ServerDataConverter.to(xTokenIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("PostSetSettings", "screenservices/RESTAPIWebsocketOfficial/ActionPostSetSettings", "OtJ_P7raBmB3PEUZfYAYhQ", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostSetSettings"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_0a41599a3a2ec3b22722247f2d2affffStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostSetSettings", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_0a41599a3a2ec3b22722247f2d2affffStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_0a41599a3a2ec3b22722247f2d2affffStructure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.PostTradingPlatformAccounts", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_711f7ad16da273bf9e6563303a17ad00Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postTradingPlatformAccounts$ServerAction = function(appIdIn, languageIn, requestIn, xtokenIn, contentTypeIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostTradingPlatformAccounts", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostTradingPlatformAccounts");
                span.setAttribute("outsystems.function.key", "f45a72fc-b40f-4e92-a802-e485ce1f7330");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record),
                    Xtoken: OS.DataConversion.ServerDataConverter.to(xtokenIn, OS.DataTypes.DataTypes.Text),
                    ContentType: OS.DataConversion.ServerDataConverter.to(contentTypeIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("PostTradingPlatformAccounts", "screenservices/RESTAPIWebsocketOfficial/ActionPostTradingPlatformAccounts", "dp7lVoDon8mWlLwosCYR7g", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostTradingPlatformAccounts"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_711f7ad16da273bf9e6563303a17ad00Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostTradingPlatformAccounts", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_711f7ad16da273bf9e6563303a17ad00Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_711f7ad16da273bf9e6563303a17ad00Structure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.PostTradingPlatformAvailableAccountsCtrader", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_a6a60f46ebdfbc286beab7fb13984df8Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postTradingPlatformAvailableAccountsCtrader$ServerAction = function(appIdIn, languageIn, xtokenIn, requestIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostTradingPlatformAvailableAccountsCtrader", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostTradingPlatformAvailableAccountsCtrader");
                span.setAttribute("outsystems.function.key", "90147649-4680-4e2b-82ab-e3f49fe031db");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Xtoken: OS.DataConversion.ServerDataConverter.to(xtokenIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                };
                return controller.callServerAction("PostTradingPlatformAvailableAccountsCtrader", "screenservices/RESTAPIWebsocketOfficial/ActionPostTradingPlatformAvailableAccountsCtrader", "chQNj9m5tTBh_3KiFNyJhw", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostTradingPlatformAvailableAccountsCtrader"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_a6a60f46ebdfbc286beab7fb13984df8Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostTradingPlatformAvailableAccountsCtrader", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_a6a60f46ebdfbc286beab7fb13984df8Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_a6a60f46ebdfbc286beab7fb13984df8Structure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.PostTradingPlatformAvailableAccountsMt5", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_7a752455e27bb9ea87d724bbb902dd16Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postTradingPlatformAvailableAccountsMt5$ServerAction = function(appIdIn, languageIn, xtokenIn, requestIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostTradingPlatformAvailableAccountsMt5", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostTradingPlatformAvailableAccountsMt5");
                span.setAttribute("outsystems.function.key", "cc39bb68-b9ab-4d98-8f3b-f953e5865894");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Xtoken: OS.DataConversion.ServerDataConverter.to(xtokenIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                };
                return controller.callServerAction("PostTradingPlatformAvailableAccountsMt5", "screenservices/RESTAPIWebsocketOfficial/ActionPostTradingPlatformAvailableAccountsMt5", "y_YT9+HYYI7YfdYuMv48kg", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostTradingPlatformAvailableAccountsMt5"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_7a752455e27bb9ea87d724bbb902dd16Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostTradingPlatformAvailableAccountsMt5", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_7a752455e27bb9ea87d724bbb902dd16Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_7a752455e27bb9ea87d724bbb902dd16Structure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.PostTradingPlatformNewAccount", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_17a41c5de85fc25b7713c6576534b176Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postTradingPlatformNewAccount$ServerAction = function(appIdIn, languageIn, xtokenIn, requestIn, contentTypeIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostTradingPlatformNewAccount", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostTradingPlatformNewAccount");
                span.setAttribute("outsystems.function.key", "0d02e7e6-a018-4b75-9300-e970932b8260");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Xtoken: OS.DataConversion.ServerDataConverter.to(xtokenIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record),
                    ContentType: OS.DataConversion.ServerDataConverter.to(contentTypeIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("PostTradingPlatformNewAccount", "screenservices/RESTAPIWebsocketOfficial/ActionPostTradingPlatformNewAccount", "v4AwO3X63yFBHPA_Z3qAwA", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostTradingPlatformNewAccount"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_17a41c5de85fc25b7713c6576534b176Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostTradingPlatformNewAccount", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_17a41c5de85fc25b7713c6576534b176Structure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_17a41c5de85fc25b7713c6576534b176Structure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.PostTradingPlatformPasswordReset", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_07c55c1e5241bcf8a9665901701e0dbfStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postTradingPlatformPasswordReset$ServerAction = function(appIdIn, languageIn, requestIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostTradingPlatformPasswordReset", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostTradingPlatformPasswordReset");
                span.setAttribute("outsystems.function.key", "5656afeb-9c6d-4d21-ab74-2ca3acee0362");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                };
                return controller.callServerAction("PostTradingPlatformPasswordReset", "screenservices/RESTAPIWebsocketOfficial/ActionPostTradingPlatformPasswordReset", "QjQg3u11c5gb9H9pHl+9zA", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostTradingPlatformPasswordReset"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_07c55c1e5241bcf8a9665901701e0dbfStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostTradingPlatformPasswordReset", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_07c55c1e5241bcf8a9665901701e0dbfStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_07c55c1e5241bcf8a9665901701e0dbfStructure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.PostVerifyEmail", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_b5532fbd5672db40752d556a46e96eaeStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postVerifyEmail$ServerAction = function(appIdIn, languageIn, requestIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostVerifyEmail", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostVerifyEmail");
                span.setAttribute("outsystems.function.key", "415b5de1-68fd-4d46-b7b1-6e83ec77e4e9");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                };
                return controller.callServerAction("PostVerifyEmail", "screenservices/RESTAPIWebsocketOfficial/ActionPostVerifyEmail", "lDT_7JHLjxDggHCYXm5hXw", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostVerifyEmail"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_b5532fbd5672db40752d556a46e96eaeStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostVerifyEmail", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_b5532fbd5672db40752d556a46e96eaeStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_b5532fbd5672db40752d556a46e96eaeStructure
    }]);
});

define("RESTAPIWebsocketOfficial.controller$ServerAction.UploadDocument", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_8298e25b4ee60f76d22250711b4bff2eStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.uploadDocument$ServerAction = function(appIdIn, languageIn, requestIn, xTokenIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("UploadDocument", function(span) {
            if (span) {
                span.setAttribute("code.function", "UploadDocument");
                span.setAttribute("outsystems.function.key", "b5d0a4ce-8ba6-44e1-b60a-036ce7bb4242");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record),
                    XToken: OS.DataConversion.ServerDataConverter.to(xTokenIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("UploadDocument", "screenservices/RESTAPIWebsocketOfficial/ActionUploadDocument", "XNyO1cARTOsJgXs9Uuz1hg", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionUploadDocument"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_8298e25b4ee60f76d22250711b4bff2eStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionUploadDocument", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_8298e25b4ee60f76d22250711b4bff2eStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_8298e25b4ee60f76d22250711b4bff2eStructure
    }]);
});

define("RESTAPIWebsocketOfficial.controller", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    var RESTAPIWebsocketOfficialController = exports;
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
            return RESTAPIWebsocketOfficialController.default.defaultTimeout;
        }

    }

    RESTAPIWebsocketOfficialController.default = new Controller();
});