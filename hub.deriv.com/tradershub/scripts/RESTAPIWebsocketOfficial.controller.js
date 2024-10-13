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
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    // Try to parse the response as JSON
                    const data = await response.json();
                    // Here you can handle the parsed data as needed
                    return data;
                } catch (error) {
                    throw new Error("Errors: " + error)
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
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "GET", "get_settings", "", callContext).then(function(value) {
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


define("RESTAPIWebsocketOfficial.controller$PartnerSettings", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.model$ST_e89429535bbc3a843fdfa9ff6a750a5fStructure", "RESTAPIWebsocketOfficial.controller$ServerAction.PartnerSettings", "RESTAPIWebsocketOfficial.controller$CheckHost"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.partnerSettings$Action = function(hostIn, authTokenIn, appIdIn, languageIn, callContext) {
        return OS.Logger.startActiveSpan("PartnerSettings", function(span) {
            if (span) {
                span.setAttribute("code.function", "PartnerSettings");
                span.setAttribute("outsystems.function.key", "98f632af-cd1b-433a-b1e8-bd3b4f60f246");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PartnerSettings$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var partnerSettingsVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_e89429535bbc3a843fdfa9ff6a750a5fStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PartnerSettings$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    // IsGreen
                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PartnerSettings
                            return controller.partnerSettings$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.authTokenInLocal, callContext).then(function(value) {
                                partnerSettingsVar.value = value;
                            }).then(function() {
                                // Response = PartnerSettings.Response
                                outVars.value.responseOut = partnerSettingsVar.value.responseOut;
                            });
                        } else {
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "GET", "partner_settings", vars.value.authTokenInLocal, callContext).then(function(value) {
                                fetchDataVar.value = value;
                            }).then(function() {
                                // JSON Deserialize: ResponseDeserialize
                                responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketOfficialModel.ST_e89429535bbc3a843fdfa9ff6a750a5fStructure, false);
                                // Response = ResponseDeserialize.Data
                                outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("PartnerSettings.PartnerSettings", OS.Exceptions.getMessage(ex));
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
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PartnerSettings$vars", [{
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
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PartnerSettings$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_e89429535bbc3a843fdfa9ff6a750a5fStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_e89429535bbc3a843fdfa9ff6a750a5fStructure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketOfficialController.default.clientActionProxies.partnerSettings$Action = function(hostIn, authTokenIn, appIdIn, languageIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.partnerSettings$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
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


define("RESTAPIWebsocketOfficial.controller$PostVerifyEmail", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$FetchData", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.model$ST_89d14f8b4008cb2b12eb9082eeeb95a6Structure", "RESTAPIWebsocketOfficial.model$ST_b5532fbd5672db40752d556a46e96eaeStructure", "RESTAPIWebsocketOfficial.controller$ServerAction.PostVerifyEmail", "RESTAPIWebsocketOfficial.model$ST_c864353821feed79663806f3e445d40eStructure", "RESTAPIWebsocketOfficial.model$ST_66a31b6dc85d7150aaf5da4cc4b359a4Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
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
                            // Execute Action: FetchData
                            return RESTAPIWebsocketOfficialController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "POST", "verify_email", "", callContext).then(function(value) {
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


define("RESTAPIWebsocketOfficial.controller$TradingPlatformPasswordChange", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.controller$CheckHost", "RESTAPIWebsocketOfficial.model$ST_d1246d83c419f598cf8e4e18d5276097Structure", "RESTAPIWebsocketOfficial.model$ST_e184b5e893ff6633d3c7357dd29941faStructure", "RESTAPIWebsocketOfficial.controller$ServerAction.PostTradingPlatformPasswordChange", "RESTAPIWebsocketOfficial.controller$FetchData"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.tradingPlatformPasswordChange$Action = function(hostIn, requestIn, authTokenIn, appIdIn, languageIn, callContext) {
        return OS.Logger.startActiveSpan("TradingPlatformPasswordChange", function(span) {
            if (span) {
                span.setAttribute("code.function", "TradingPlatformPasswordChange");
                span.setAttribute("outsystems.function.key", "6804ba22-7664-40fe-9b1b-993020605e3f");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformPasswordChange$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.requestInLocal = requestIn.clone();
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postTradingPlatformPasswordChangeVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_e184b5e893ff6633d3c7357dd29941faStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformPasswordChange$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketOfficialController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PostTradingPlatformPasswordChange
                            return controller.postTradingPlatformPasswordChange$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.authTokenInLocal, vars.value.requestInLocal, "application/json", callContext).then(function(value) {
                                postTradingPlatformPasswordChangeVar.value = value;
                            }).then(function() {
                                // Response = PostTradingPlatformPasswordChange.Response
                                outVars.value.responseOut = postTradingPlatformPasswordChangeVar.value.responseOut;
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
                    OS.Logger.debug("TradingPlatformPasswordChange.TradingPlatformPasswordChange", OS.Exceptions.getMessage(ex));
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
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformPasswordChange$vars", [{
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
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformPasswordChange$outVars", [{
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
    RESTAPIWebsocketOfficialController.default.clientActionProxies.tradingPlatformPasswordChange$Action = function(hostIn, requestIn, authTokenIn, appIdIn, languageIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketOfficialModel.ST_d1246d83c419f598cf8e4e18d5276097Structure() : requestIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketOfficialController.default.tradingPlatformPasswordChange$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), requestIn, OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean),
                Response: actionResults.responseOut
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
                return controller.callServerAction("Authorize", "screenservices/RESTAPIWebsocketOfficial/ActionAuthorize", "fw_fXvyGmAzxR6vbYtWcwQ", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
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
                return controller.callServerAction("GetAccountStatus", "screenservices/RESTAPIWebsocketOfficial/ActionGetAccountStatus", "SFKLg0amRxTugfWZ2Pfbgw", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
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
                return controller.callServerAction("GetAssetIndex", "screenservices/RESTAPIWebsocketOfficial/ActionGetAssetIndex", "ZvORfN6dIF11Bwv5006etg", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
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
                return controller.callServerAction("GetKYCAuthStatus", "screenservices/RESTAPIWebsocketOfficial/ActionGetKYCAuthStatus", "0e9I_lLo7vg6fnUAWl8e5g", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
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
                return controller.callServerAction("GetLandingCompany", "screenservices/RESTAPIWebsocketOfficial/ActionGetLandingCompany", "eUhRyoWBPEyVO4CRBxQFuA", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
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
                return controller.callServerAction("GetMT5LoginList", "screenservices/RESTAPIWebsocketOfficial/ActionGetMT5LoginList", "yQgvRbwaB6p2Ri+l7BUdVw", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
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
                return controller.callServerAction("GetResidenceList", "screenservices/RESTAPIWebsocketOfficial/ActionGetResidenceList", "mllTzvWGXf0KAIYih4QtVg", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
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
                return controller.callServerAction("GetSettings", "screenservices/RESTAPIWebsocketOfficial/ActionGetSettings", "Pgrcc0fZhwwUs+qRg7Cmig", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
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
                return controller.callServerAction("GetTradingPlatformStatus", "screenservices/RESTAPIWebsocketOfficial/ActionGetTradingPlatformStatus", "rwFbSRk04vhDd0UEBPfuhw", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
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
                return controller.callServerAction("GetWebsiteStatus", "screenservices/RESTAPIWebsocketOfficial/ActionGetWebsiteStatus", "cDFRrG0PlDFBAxVy+H0afg", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
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

define("RESTAPIWebsocketOfficial.controller$ServerAction.PartnerSettings", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_e89429535bbc3a843fdfa9ff6a750a5fStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.partnerSettings$ServerAction = function(appIdIn, languageIn, authTokenIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PartnerSettings", function(span) {
            if (span) {
                span.setAttribute("code.function", "PartnerSettings");
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
                return controller.callServerAction("PartnerSettings", "screenservices/RESTAPIWebsocketOfficial/ActionPartnerSettings", "VVp0IyoKdlFGsAAN+qJiEg", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPartnerSettings"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_e89429535bbc3a843fdfa9ff6a750a5fStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPartnerSettings", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_e89429535bbc3a843fdfa9ff6a750a5fStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_e89429535bbc3a843fdfa9ff6a750a5fStructure
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
                return controller.callServerAction("PostAccountList", "screenservices/RESTAPIWebsocketOfficial/ActionPostAccountList", "lrPehVZpWg5MzphmmVMa9Q", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
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
                return controller.callServerAction("PostCashierCrypto", "screenservices/RESTAPIWebsocketOfficial/ActionPostCashierCrypto", "g4_sP13JkMlBG1fe398FPQ", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
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
                return controller.callServerAction("PostCashierFiat", "screenservices/RESTAPIWebsocketOfficial/ActionPostCashierFiat", "bLnyJ1lNmk67UIaLIsW7MQ", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
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
                return controller.callServerAction("PostLogout", "screenservices/RESTAPIWebsocketOfficial/ActionPostLogout", "hwSkA9nz2dkT3Btvj0tDPQ", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
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
                return controller.callServerAction("PostNewAccountVirtual", "screenservices/RESTAPIWebsocketOfficial/ActionPostNewAccountVirtual", "63hLwwwK8hB+NwVosegBWg", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
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
                return controller.callServerAction("PostResetPassword", "screenservices/RESTAPIWebsocketOfficial/ActionPostResetPassword", "RffSpuTKSfWNQlZCUZUHVA", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
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
                return controller.callServerAction("PostTradingPlatformAccounts", "screenservices/RESTAPIWebsocketOfficial/ActionPostTradingPlatformAccounts", "keOSxv_FAyHBJf_YAf86qA", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
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
                return controller.callServerAction("PostTradingPlatformAvailableAccountsCtrader", "screenservices/RESTAPIWebsocketOfficial/ActionPostTradingPlatformAvailableAccountsCtrader", "VX8lG_3oGJsujpwI9X0Pmw", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
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
                return controller.callServerAction("PostTradingPlatformAvailableAccountsMt5", "screenservices/RESTAPIWebsocketOfficial/ActionPostTradingPlatformAvailableAccountsMt5", "+Wd6XScB6CHi5V_RkawW8Q", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
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

define("RESTAPIWebsocketOfficial.controller$ServerAction.PostTradingPlatformPasswordChange", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_e184b5e893ff6633d3c7357dd29941faStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketOfficialController.default.postTradingPlatformPasswordChange$ServerAction = function(appIdIn, languageIn, xtokenIn, requestIn, contentTypeIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostTradingPlatformPasswordChange", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostTradingPlatformPasswordChange");
                span.setAttribute("outsystems.function.key", "025eb13d-dcd9-42bc-b20a-926aa7ca3a63");
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
                return controller.callServerAction("PostTradingPlatformPasswordChange", "screenservices/RESTAPIWebsocketOfficial/ActionPostTradingPlatformPasswordChange", "fc9qxNtWY1nu3xbOpJRyjQ", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostTradingPlatformPasswordChange"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketOfficialModel.ST_e184b5e893ff6633d3c7357dd29941faStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketOfficialController.default.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostTradingPlatformPasswordChange", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketOfficialModel.ST_e184b5e893ff6633d3c7357dd29941faStructure();
        },
        complexType: RESTAPIWebsocketOfficialModel.ST_e184b5e893ff6633d3c7357dd29941faStructure
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
                return controller.callServerAction("PostTradingPlatformPasswordReset", "screenservices/RESTAPIWebsocketOfficial/ActionPostTradingPlatformPasswordReset", "X4RMyXDx5dQ_Qwd8PW7zGw", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
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
                return controller.callServerAction("PostVerifyEmail", "screenservices/RESTAPIWebsocketOfficial/ActionPostVerifyEmail", "v+jLjUimCCotxqWbG0KMVg", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
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