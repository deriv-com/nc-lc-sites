define("tradershub.WalletFlows.WalletsFiatWithdrawal.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "RESTAPIWebsocketOfficial.model", "tradershub.controller", "tradershub.Layouts.MainLayout.mvc$model", "tradershub.WalletBlocks.WalletsOverlayPageWithPopup.mvc$model", "RESTAPIWebsocketOfficial.model$ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$PostCashierFiat"], function(OSRuntimeCore, tradershubModel, RESTAPIWebsocketOfficialModel, tradershubController, tradershub_Layouts_MainLayout_mvcModel, tradershub_WalletBlocks_WalletsOverlayPageWithPopup_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("isLoading", "isLoadingVar", "isLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("iFrameUrl", "iFrameUrlVar", "iFrameUrl", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false)
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
                Model._hasValidationWidgetsValue = (tradershub_Layouts_MainLayout_mvcModel.hasValidationWidgets || tradershub_WalletBlocks_WalletsOverlayPageWithPopup_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.WalletFlows.WalletsFiatWithdrawal.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "react", "@outsystems/runtime-view-js", "tradershub.WalletFlows.WalletsFiatWithdrawal.mvc$model", "tradershub.WalletFlows.WalletsFiatWithdrawal.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.MainLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.WalletBlocks.WalletsOverlayPageWithPopup.mvc$view", "RESTAPIWebsocketOfficial.model$ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$PostCashierFiat"], function(OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, React, OSView, tradershub_WalletFlows_WalletsFiatWithdrawal_mvc_model, tradershub_WalletFlows_WalletsFiatWithdrawal_mvc_controller, tradershubClientVariables, tradershub_Layouts_MainLayout_mvc_view, OSWidgets, tradershub_WalletBlocks_WalletsOverlayPageWithPopup_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "WalletFlows.WalletsFiatWithdrawal";
        }

        static getAttributes() {
            return {
                codeFunction: "WalletsFiatWithdrawal",
                functionKey: "9af530f4-563f-4f8f-9328-b463e4bf8126",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.WalletFlows.WalletsFiatWithdrawal.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_MainLayout_mvc_view, tradershub_WalletBlocks_WalletsOverlayPageWithPopup_mvc_view];
        }

        get modelFactory() {
            return tradershub_WalletFlows_WalletsFiatWithdrawal_mvc_model;
        }

        get controllerFactory() {
            return tradershub_WalletFlows_WalletsFiatWithdrawal_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("9DD1mj9Wj0+TKLRj5L+BJg#Title", "WalletsFiatWithdrawal");
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
                        return [React.createElement(tradershub_WalletBlocks_WalletsOverlayPageWithPopup_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                PageTitle: "Withdraw"
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
                                        style: "full-width",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "IframeContainer"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.AdvancedHtml, {
                                        extendedProperties: {
                                            src: model.variables.iFrameUrlVar
                                        },
                                        tag: "iframe",
                                        _idProps: {
                                            service: idService,
                                            name: "WithdrawalIframe"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.iFrameUrlVar)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.iFrameUrlVar)]
            }));
        }
    }

    return View;
});
define("tradershub.WalletFlows.WalletsFiatWithdrawal.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.WalletFlows.WalletsFiatWithdrawal.mvc$translationsResources", "tradershub.WalletFlows.controller", "RESTAPIWebsocketOfficial.model$ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$PostCashierFiat"], function(OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, tradershubLanguageResources, tradershubClientVariables, tradershub_WalletFlows_WalletsFiatWithdrawal_mvc_TranslationsResources, tradershub_WalletFlowsController) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, tradershub_WalletFlows_WalletsFiatWithdrawal_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {};
                this.dataFetchDependentsGraph = {};
                this.shouldSendClientVarsToDataSources = true;
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
                                span.setAttribute("outsystems.function.key", "4ad03c0a-d2f0-4451-8194-c3d9f899aa60");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var postCashierFiatVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // isLoading = True
                                    model.variables.isLoadingVar = true;
                                    // Execute Action: PostCashierFiat
                                    model.flush();
                                    return tradershubController.default.postCashierFiat$Action("withdraw", tradershubClientVariables.getCode(), callContext).then(function(value) {
                                        postCashierFiatVar.value = value;
                                    }).then(function() {
                                        // iFrameUrl = PostCashierFiat.Response.Cashier
                                        model.variables.iFrameUrlVar = postCashierFiatVar.value.responseOut.cashierAttr;
                                        // isLoading = False
                                        model.variables.isLoadingVar = false;
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
                        span.setAttribute("outsystems.function.key", "4ad03c0a-d2f0-4451-8194-c3d9f899aa60");
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


define("tradershub.WalletFlows.WalletsFiatWithdrawal.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});