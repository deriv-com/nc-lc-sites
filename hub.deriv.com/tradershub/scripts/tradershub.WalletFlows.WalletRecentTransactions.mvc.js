define("tradershub.WalletFlows.WalletRecentTransactions.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "SharedUtilities.controller", "RESTAPIWebsocketOfficial.model", "tradershub.controller", "tradershub.Layouts.MainLayout.mvc$model", "tradershub.WalletBlocks.WalletOverlayPage.mvc$model", "SharedUtilities.controller$FormatMoney", "tradershub.referencesHealth", "tradershub.referencesHealth$SharedUtilities", "RESTAPIWebsocketOfficial.model$ST_bf8a7e4d5139901f795596a5fbda1b90Structure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.model$RL_1fe22685e54a8e74085b50df987ed7fb", "RESTAPIWebsocketOfficial.model$ST_857e70f98678e5b68f53de5829bd685aStructure", "tradershub.controller$Statement"], function(OSRuntimeCore, tradershubModel, SharedUtilitiesController, RESTAPIWebsocketOfficialModel, tradershubController, tradershub_Layouts_MainLayout_mvcModel, tradershub_WalletBlocks_WalletOverlayPage_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("TransactionItem", "transactionItemVar", "TransactionItem", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_1fe22685e54a8e74085b50df987ed7fb());
                    }, false, tradershubModel.RL_1fe22685e54a8e74085b50df987ed7fb)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new VariablesRecord(new VariablesRecord.RecordClass({
                    transactionItemVar: OS.DataTypes.ImmutableBase.getData(str)
                }));
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
                Model._hasValidationWidgetsValue = (tradershub_Layouts_MainLayout_mvcModel.hasValidationWidgets || tradershub_WalletBlocks_WalletOverlayPage_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.WalletFlows.WalletRecentTransactions.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "SharedUtilities.controller", "RESTAPIWebsocketOfficial.model", "react", "@outsystems/runtime-view-js", "tradershub.WalletFlows.WalletRecentTransactions.mvc$model", "tradershub.WalletFlows.WalletRecentTransactions.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.MainLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.WalletBlocks.WalletOverlayPage.mvc$view", "SharedUtilities.controller$FormatMoney", "tradershub.referencesHealth", "tradershub.referencesHealth$SharedUtilities", "RESTAPIWebsocketOfficial.model$ST_bf8a7e4d5139901f795596a5fbda1b90Structure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.model$RL_1fe22685e54a8e74085b50df987ed7fb", "RESTAPIWebsocketOfficial.model$ST_857e70f98678e5b68f53de5829bd685aStructure", "tradershub.controller$Statement"], function(OSRuntimeCore, tradershubModel, tradershubController, SharedUtilitiesController, RESTAPIWebsocketOfficialModel, React, OSView, tradershub_WalletFlows_WalletRecentTransactions_mvc_model, tradershub_WalletFlows_WalletRecentTransactions_mvc_controller, tradershubClientVariables, tradershub_Layouts_MainLayout_mvc_view, OSWidgets, tradershub_WalletBlocks_WalletOverlayPage_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "WalletFlows.WalletRecentTransactions";
        }

        static getAttributes() {
            return {
                codeFunction: "WalletRecentTransactions",
                functionKey: "035747a7-df9a-41dc-b635-462b6bb04fdf",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.WalletFlows.WalletRecentTransactions.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_MainLayout_mvc_view, tradershub_WalletBlocks_WalletOverlayPage_mvc_view];
        }

        get modelFactory() {
            return tradershub_WalletFlows_WalletRecentTransactions_mvc_model;
        }

        get controllerFactory() {
            return tradershub_WalletFlows_WalletRecentTransactions_mvc_controller;
        }

        get title() {


            return "WalletRecentTransactions";
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
                    content: new PlaceholderContent(function() {
                        return [React.createElement(tradershub_WalletBlocks_WalletOverlayPage_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                PageTitle: "Recent Transactions"
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
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                walletOverlayPageContent: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "display-flex flex-direction-column gap-base",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "2"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "font-size: 16px; font-weight: bold;"
                                        },
                                        text: ["Transactions"],
                                        _idProps: {
                                            service: idService,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.List, {
                                        animateItems: true,
                                        extendedProperties: {
                                            style: "border-radius: 8px;"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mode: /*Default*/ 0,
                                        source: model.variables.transactionItemVar,
                                        style: "wallet-transactions-list",
                                        tag: "div",
                                        _idProps: {
                                            service: idService,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                return [React.createElement(OSWidgets.ListItem, {
                                                    style: "wallet-transaction-item",
                                                    triggerActionOnFullSwipeLeft: true,
                                                    triggerActionOnFullSwipeRight: true,
                                                    _idProps: {
                                                        service: idService,
                                                        name: "ListItem1"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    placeholders: {
                                                        leftActions: PlaceholderContent.Empty,
                                                        content: new PlaceholderContent(function() {
                                                            return [React.createElement(OSWidgets.Container, {
                                                                align: /*Default*/ 0,
                                                                animate: false,
                                                                style: "display-flex flex-direction-column",
                                                                visible: true,
                                                                _idProps: {
                                                                    service: idService,
                                                                    uuid: "7"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            }, React.createElement(OSWidgets.Container, {
                                                                align: /*Default*/ 0,
                                                                animate: false,
                                                                style: "display-flex justify-content-space-between full-width",
                                                                visible: true,
                                                                _idProps: {
                                                                    service: idService,
                                                                    uuid: "8"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            }, React.createElement(OSWidgets.Expression, {
                                                                extendedProperties: {
                                                                    style: "font-size: 12px;"
                                                                },
                                                                style: "wallet-transaction-action-type",
                                                                value: model.variables.transactionItemVar.getCurrent(callContext.iterationContext).action_typeAttr,
                                                                _idProps: {
                                                                    service: idService,
                                                                    uuid: "9"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            })), React.createElement(OSWidgets.Container, {
                                                                align: /*Default*/ 0,
                                                                animate: false,
                                                                style: "display-flex justify-content-space-between full-width",
                                                                visible: true,
                                                                _idProps: {
                                                                    service: idService,
                                                                    uuid: "10"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            }, React.createElement(OSWidgets.Expression, {
                                                                value: (model.variables.transactionItemVar.getCurrent(callContext.iterationContext).feesAttr.currencyAttr + " Wallets"),
                                                                _idProps: {
                                                                    service: idService,
                                                                    uuid: "11"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            }), React.createElement(OSWidgets.Expression, {
                                                                extendedProperties: {
                                                                    style: "font-weight: bold;"
                                                                },
                                                                gridProperties: {
                                                                    classes: "ThemeGrid_MarginGutter"
                                                                },
                                                                value: model.getCachedValue(idService.getId("7L9HyHGXO0GtjDu4IC5Mig.Value"), function() {
                                                                    return SharedUtilitiesController.default.formatMoney$Action(OS.BuiltinFunctions.decimalToText(model.variables.transactionItemVar.getCurrent(callContext.iterationContext).amountAttr), model.variables.transactionItemVar.getCurrent(callContext.iterationContext).feesAttr.currencyAttr, "en-US", "", callContext).formattedNumberOut;
                                                                }, function() {
                                                                    return model.variables.transactionItemVar.getCurrent(callContext.iterationContext).amountAttr;
                                                                }, function() {
                                                                    return model.variables.transactionItemVar.getCurrent(callContext.iterationContext).feesAttr.currencyAttr;
                                                                }),
                                                                _idProps: {
                                                                    service: idService,
                                                                    uuid: "12"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            })))];
                                                        }),
                                                        rightActions: PlaceholderContent.Empty
                                                    },
                                                    _dependencies: [asPrimitiveValue(model.variables.transactionItemVar.getCurrent(callContext.iterationContext).amountAttr), asPrimitiveValue(model.variables.transactionItemVar.getCurrent(callContext.iterationContext).feesAttr.currencyAttr), asPrimitiveValue(model.variables.transactionItemVar.getCurrent(callContext.iterationContext).action_typeAttr)]
                                                })];
                                            }, callContext, idService, "1")
                                        },
                                        _dependencies: []
                                    })))];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.transactionItemVar)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.transactionItemVar)]
            }));
        }
    }

    return View;
});
define("tradershub.WalletFlows.WalletRecentTransactions.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "SharedUtilities.controller", "RESTAPIWebsocketOfficial.model", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.WalletFlows.controller", "SharedUtilities.controller$FormatMoney", "tradershub.referencesHealth", "tradershub.referencesHealth$SharedUtilities", "RESTAPIWebsocketOfficial.model$ST_bf8a7e4d5139901f795596a5fbda1b90Structure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.model$RL_1fe22685e54a8e74085b50df987ed7fb", "RESTAPIWebsocketOfficial.model$ST_857e70f98678e5b68f53de5829bd685aStructure", "tradershub.controller$Statement"], function(OSRuntimeCore, tradershubModel, tradershubController, SharedUtilitiesController, RESTAPIWebsocketOfficialModel, tradershubLanguageResources, tradershubClientVariables, tradershub_WalletFlowsController) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {};
                this.dataFetchDependentsGraph = {};
                this.shouldSendClientVarsToDataSources = false;
            }

            // Server Actions - Methods

            // Aggregates and Data Actions

            get dataFetchActionNames() {
                if (!(this.hasOwnProperty("_dataFetchActionNames"))) {
                    this._dataFetchActionNames = [];
                }

                return this._dataFetchActionNames;
            }
            set dataFetchActionNames(value) {
                this._dataFetchActionNames = value;
            }

            // Client Actions - Methods
            get _onReady$Action() {
                if (!(this.hasOwnProperty("__onReady$Action"))) {
                    this.__onReady$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnReady", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnReady");
                                span.setAttribute("outsystems.function.key", "74f1f199-4a46-47af-bdd7-4903701e6e4c");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var statementVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: Statement
                                    model.flush();
                                    return tradershubController.default.statement$Action("", callContext).then(function(value) {
                                        statementVar.value = value;
                                    }).then(function() {
                                        // TransactionItem = Statement.Response.Statement.Transactions
                                        model.variables.transactionItemVar = statementVar.value.responseOut.statementAttr.transactionsAttr;
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

                return this.__onReady$Action;
            }
            set _onReady$Action(value) {
                this.__onReady$Action = value;
            }


            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "74f1f199-4a46-47af-bdd7-4903701e6e4c");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onReady$Action, callContext);
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
                    this._onReadyEventHandler = function(callContext) {
                        var controller = this.controller;
                        var model = this.model;
                        var idService = this.idService;

                        return controller.onReady$Action(callContext);

                    };
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