define("tradershub.WalletFlows.WalletDeposit.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "RESTAPIWebsocketOfficial.model", "tradershub.controller", "tradershub.Layouts.MainLayout.mvc$model", "RESTAPIWebsocketOfficial.model$ST_746d074ddcc08e0df3b269ffb1933d5aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$GetAccountStatus2", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure", "tradershub.controller$SendAuthorize", "tradershub.model$RC_6a44851bc01e80a885c4aa0ae740b8fc", "tradershub.model$RL_5ee36d8deb03b51810340e621ea66d4b"], function(OSRuntimeCore, tradershubModel, RESTAPIWebsocketOfficialModel, tradershubController, tradershub_Layouts_MainLayout_mvcModel) {
    var OS = OSRuntimeCore; {
        class GetCurrenciesAggrRecInner extends
        OS.Model.AggregateRecord {
            static attributesToDeclare() {
                return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new GetCurrenciesAggrRec(new GetCurrenciesAggrRec.RecordClass({
                    RecordListType: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        GetCurrenciesAggrRecInner.RecordListType = tradershubModel.RL_5ee36d8deb03b51810340e621ea66d4b;
        var GetCurrenciesAggrRec = GetCurrenciesAggrRecInner;
        GetCurrenciesAggrRec.init();
    }


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("GetCurrencies", "getCurrenciesAggr", "GetCurrencies", true, true, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new GetCurrenciesAggrRec());
                    }, true, GetCurrenciesAggrRec)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        var VariablesRecord = VariablesRecordInner;
        VariablesRecord.init();
    }
    class WidgetsRecord extends
    OS.Model.BaseWidgetRecordMap {
        static getWidgetsType() {
            return {};
        }

    }

    class Model extends
    OS.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return VariablesRecord;
        }

        static getWidgetsRecordConstructor() {
            return WidgetsRecord;
        }

        static get hasValidationWidgets() {
            if ((Model._hasValidationWidgetsValue === undefined)) {
                Model._hasValidationWidgetsValue = tradershub_Layouts_MainLayout_mvcModel.hasValidationWidgets;
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.WalletFlows.WalletDeposit.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "react", "@outsystems/runtime-view-js", "tradershub.WalletFlows.WalletDeposit.mvc$model", "tradershub.WalletFlows.WalletDeposit.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.MainLayout.mvc$view", "@outsystems/runtime-widgets-js", "RESTAPIWebsocketOfficial.model$ST_746d074ddcc08e0df3b269ffb1933d5aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$GetAccountStatus2", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure", "tradershub.controller$SendAuthorize", "tradershub.model$RC_6a44851bc01e80a885c4aa0ae740b8fc", "tradershub.model$RL_5ee36d8deb03b51810340e621ea66d4b"], function(OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, React, OSView, tradershub_WalletFlows_WalletDeposit_mvc_model, tradershub_WalletFlows_WalletDeposit_mvc_controller, tradershubClientVariables, tradershub_Layouts_MainLayout_mvc_view, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "WalletFlows.WalletDeposit";
        }

        static getAttributes() {
            return {
                codeFunction: "WalletDeposit",
                functionKey: "e96c37b3-46ac-474d-a998-b487e3707c2e",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_MainLayout_mvc_view];
        }

        get modelFactory() {
            return tradershub_WalletFlows_WalletDeposit_mvc_model;
        }

        get controllerFactory() {
            return tradershub_WalletFlows_WalletDeposit_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("szds6axGTUepmLSH43B8Lg#Title", "WalletDeposit");
        }

        internalRender() {
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            var validationService = controller.validationService;
            var widgetsRecordProvider = this.widgetsRecordProvider;
            var callContext = controller.callContext();
            var $if = View.ifWidget;
            var $text = View.textWidget;
            var asPrimitiveValue = View.asPrimitiveValue;
            var getTranslation = View.getTranslation;
            var _this = this;

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(tradershub_Layouts_MainLayout_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    ActiveTab: 3
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    }
                },
                _validationProps: {
                    validationService: validationService
                },
                _idProps: {
                    service: idService,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: PlaceholderContent.Empty
                },
                _dependencies: []
            }));
        }
    }

    return View;
});
define("tradershub.WalletFlows.WalletDeposit.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.WalletFlows.WalletDeposit.mvc$translationsResources", "tradershub.WalletFlows.controller", "RESTAPIWebsocketOfficial.model$ST_746d074ddcc08e0df3b269ffb1933d5aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$GetAccountStatus2", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure", "tradershub.controller$SendAuthorize", "tradershub.model$RC_6a44851bc01e80a885c4aa0ae740b8fc", "tradershub.model$RL_5ee36d8deb03b51810340e621ea66d4b"], function(OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, tradershubLanguageResources, tradershubClientVariables, tradershub_WalletFlows_WalletDeposit_mvc_TranslationsResources, tradershub_WalletFlowsController) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, tradershub_WalletFlows_WalletDeposit_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {
                    getCurrencies$AggrRefresh: 0
                };
                this.dataFetchDependentsGraph = {
                    getCurrencies$AggrRefresh: []
                };
                this.shouldSendClientVarsToDataSources = true;
            }

            // Server Actions - Methods

            // Aggregates and Data Actions
            get getCurrencies$AggrRefresh() {
                if (!(this.hasOwnProperty("_getCurrencies$AggrRefresh"))) {
                    this._getCurrencies$AggrRefresh = function() {
                        var innerBody = function(maxRecords, startIndex, callContext) {
                            var model = this.model;
                            var controller = this.controller;
                            var callContext = controller.callContext(callContext);
                            return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetCurrencies", "screenservices/tradershub/WalletFlows/WalletDeposit/ScreenDataSetGetCurrencies", "7ZDQVZcK1tWZhNuYKqZ8hQ", maxRecords, startIndex, function(b) {
                                model.variables.getCurrenciesAggr.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.getCurrenciesAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getCurrenciesAggr.constructor));
                            }, undefined, undefined, undefined, callContext, tradershubClientVariables, true).then(function() {
                                return controller._getCurrenciesOnAfterFetch$Action(controller.callContext(callContext));
                            });
                        }.bind(this);
                        return OS.Logger.startActiveSpan("GetCurrencies", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetCurrencies");
                                span.setAttribute("outsystems.function.key", "bf0803f1-05f3-4f74-b52c-dd61c7b16881");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL");
                            }

                            return OS.Flow.tryFinally(function() {
                                return innerBody();
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 0);

                    };
                }

                return this._getCurrencies$AggrRefresh;
            }
            set getCurrencies$AggrRefresh(value) {
                this._getCurrencies$AggrRefresh = value;
            }


            get dataFetchActionNames() {
                if (!(this.hasOwnProperty("_dataFetchActionNames"))) {
                    this._dataFetchActionNames = ["getCurrencies$AggrRefresh"];
                }

                return this._dataFetchActionNames;
            }
            set dataFetchActionNames(value) {
                this._dataFetchActionNames = value;
            }

            // Client Actions - Methods
            get _getCurrenciesOnAfterFetch$Action() {
                if (!(this.hasOwnProperty("__getCurrenciesOnAfterFetch$Action"))) {
                    this.__getCurrenciesOnAfterFetch$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("GetCurrenciesOnAfterFetch", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetCurrenciesOnAfterFetch");
                                span.setAttribute("outsystems.function.key", "e825c11d-f614-4202-a525-63ad6ccaf86e");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("GetCurrenciesOnAfterFetch");
                                callContext = controller.callContext(callContext);
                                var getAccountStatus2Var = new OS.DataTypes.VariableHolder();
                                var sendAuthorizeVar = new OS.DataTypes.VariableHolder();
                                var currencyListVar = new OS.DataTypes.VariableHolder();
                                var accountStatusVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // IsLoading = True
                                    model.variables.isLoadingVar = true;
                                    // Execute Action: SendAuthorize
                                    model.flush();
                                    return tradershubController.default.sendAuthorize$Action(false, callContext).then(function(value) {
                                        sendAuthorizeVar.value = value;
                                    }).then(function() {
                                        // Execute Action: CurrencyList
                                        currencyListVar.value = OS.SystemActions.listFilter(model.variables.getCurrenciesAggr.listOut, function(p) {
                                            return (sendAuthorizeVar.value.responseOut.authorizeAttr.currencyAttr === p.currenciesAttr.codeAttr);
                                        }, callContext);

                                        // Execute Action: GetAccountStatus2
                                        model.flush();
                                        return tradershubController.default.getAccountStatus2$Action(callContext).then(function(value) {
                                            getAccountStatus2Var.value = value;
                                        });
                                    }).then(function() {
                                        // Execute Action: AccountStatus
                                        accountStatusVar.value = OS.SystemActions.listFilter(getAccountStatus2Var.value.responseOut.getAccountStatusAttr.statusAttr, function(p) {
                                            return (p === "cashier_locked");
                                        }, callContext);

                                    }).then(function() {
                                        if (((accountStatusVar.value.filteredListOut.length > 0))) {
                                            // IsLoading = False
                                            model.variables.isLoadingVar = false;
                                            // Destination: /tradershub/WalletDisableDeposit
                                            return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "wallets/deposit/disable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                        } else {
                                            if ((currencyListVar.value.filteredListOut.getCurrent(callContext.iterationContext).currenciesAttr.isFiatAttr)) {
                                                // Set IsLoading
                                                // IsLoading = False
                                                model.variables.isLoadingVar = false;
                                                // Destination: /tradershub/WalletsFiatDeposit
                                                return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "wallets/deposit/fiat", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                            } else {
                                                // Set IsLoading
                                                // IsLoading = False
                                                model.variables.isLoadingVar = false;
                                                // Destination: /tradershub/WalletsCryptoOptionDeposit
                                                return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "wallets/deposit/crypto", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                            }

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
                }

                return this.__getCurrenciesOnAfterFetch$Action;
            }
            set _getCurrenciesOnAfterFetch$Action(value) {
                this.__getCurrenciesOnAfterFetch$Action = value;
            }


            getCurrenciesOnAfterFetch$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("GetCurrenciesOnAfterFetch__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "GetCurrenciesOnAfterFetch");
                        span.setAttribute("outsystems.function.key", "e825c11d-f614-4202-a525-63ad6ccaf86e");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._getCurrenciesOnAfterFetch$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }


            // Event Handler Actions
            get onInitializeEventHandler() {
                if (!(this.hasOwnProperty("_onInitializeEventHandler"))) {
                    this._onInitializeEventHandler = null;
                }

                return this._onInitializeEventHandler;
            }
            set onInitializeEventHandler(value) {
                this._onInitializeEventHandler = value;
            }

            get onReadyEventHandler() {
                if (!(this.hasOwnProperty("_onReadyEventHandler"))) {
                    this._onReadyEventHandler = null;
                }

                return this._onReadyEventHandler;
            }
            set onReadyEventHandler(value) {
                this._onReadyEventHandler = value;
            }

            get onRenderEventHandler() {
                if (!(this.hasOwnProperty("_onRenderEventHandler"))) {
                    this._onRenderEventHandler = null;
                }

                return this._onRenderEventHandler;
            }
            set onRenderEventHandler(value) {
                this._onRenderEventHandler = value;
            }

            get onDestroyEventHandler() {
                if (!(this.hasOwnProperty("_onDestroyEventHandler"))) {
                    this._onDestroyEventHandler = null;
                }

                return this._onDestroyEventHandler;
            }
            set onDestroyEventHandler(value) {
                this._onDestroyEventHandler = value;
            }

            get onParametersChangedEventHandler() {
                if (!(this.hasOwnProperty("_onParametersChangedEventHandler"))) {
                    this._onParametersChangedEventHandler = null;
                }

                return this._onParametersChangedEventHandler;
            }
            set onParametersChangedEventHandler(value) {
                this._onParametersChangedEventHandler = value;
            }

            get handleError() {
                if (!(this.hasOwnProperty("_handleError"))) {
                    this._handleError = function(ex) {
                        return tradershub_WalletFlowsController.default.handleError(ex, this.callContext());
                    };
                }

                return this._handleError;
            }
            set handleError(value) {
                this._handleError = value;
            }

            static checkPermissions() {}

            getDefaultTimeout() {
                return tradershubController.default.defaultTimeout;
            }

        }

        var Controller = ControllerInner;
        // Server Actions - Variables

        // Client Actions - Variables

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});


define("tradershub.WalletFlows.WalletDeposit.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});