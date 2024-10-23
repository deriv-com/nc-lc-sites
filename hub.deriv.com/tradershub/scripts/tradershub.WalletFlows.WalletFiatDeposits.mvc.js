define("tradershub.WalletFlows.WalletFiatDeposits.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "tradershub.Layouts.MainLayout.mvc$model", "tradershub.WalletBlocks.WalletOverlayPage.mvc$model", "RESTAPIWebsocketOfficial.model$ST_a61a52fb9a0db4861b8e2b8110ef16c4Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure", "RESTAPIWebsocketOfficial.controller$CashierFIAT"], function(OSRuntimeCore, tradershubModel, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, tradershub_Layouts_MainLayout_mvcModel, tradershub_WalletBlocks_WalletOverlayPage_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("iFrameURL", "iFrameURLVar", "iFrameURL", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("isLoading", "isLoadingVar", "isLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("HasError", "hasErrorVar", "HasError", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("ErrorMessage", "errorMessageVar", "ErrorMessage", true, false, OS.DataTypes.DataTypes.Text, function() {
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
                Model._hasValidationWidgetsValue = (tradershub_Layouts_MainLayout_mvcModel.hasValidationWidgets || tradershub_WalletBlocks_WalletOverlayPage_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.WalletFlows.WalletFiatDeposits.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "react", "@outsystems/runtime-view-js", "tradershub.WalletFlows.WalletFiatDeposits.mvc$model", "tradershub.WalletFlows.WalletFiatDeposits.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.MainLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.WalletBlocks.WalletOverlayPage.mvc$view", "RESTAPIWebsocketOfficial.model$ST_a61a52fb9a0db4861b8e2b8110ef16c4Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure", "RESTAPIWebsocketOfficial.controller$CashierFIAT"], function(OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, React, OSView, tradershub_WalletFlows_WalletFiatDeposits_mvc_model, tradershub_WalletFlows_WalletFiatDeposits_mvc_controller, tradershubClientVariables, tradershub_Layouts_MainLayout_mvc_view, OSWidgets, tradershub_WalletBlocks_WalletOverlayPage_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "WalletFlows.WalletFiatDeposits";
        }

        static getAttributes() {
            return {
                codeFunction: "WalletFiatDeposits",
                functionKey: "625a13c9-6ece-450c-87b5-6482a1def74b",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.WalletFlows.WalletFiatDeposits.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_MainLayout_mvc_view, tradershub_WalletBlocks_WalletOverlayPage_mvc_view];
        }

        get modelFactory() {
            return tradershub_WalletFlows_WalletFiatDeposits_mvc_model;
        }

        get controllerFactory() {
            return tradershub_WalletFlows_WalletFiatDeposits_mvc_controller;
        }

        get title() {


            return "WalletFiatDeposits";
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
                        return [React.createElement(OSWidgets.Popup, {
                            showPopup: model.variables.hasErrorVar,
                            style: "popup-dialog",
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            style: "font-bold font-size-h3 margin-bottom-s",
                            text: ["Error"],
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Expression, {
                            gridProperties: {
                                marginLeft: "0px"
                            },
                            style: "display-flex flex-direction-column margin-bottom-base",
                            value: model.variables.errorMessageVar,
                            _idProps: {
                                service: idService,
                                uuid: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "full-width display-flex justify-content-flex-end",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Button, {
                            enabled: true,
                            extendedProperties: {
                                style: "border-color: #222;"
                            },
                            isDefault: false,
                            onClick: function() {
                                try {
                                    OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "options", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade), null, true);
                                } catch (ex) {
                                    if (((ex.name) !== ("RedirectOccurredException"))) {
                                        throw ex;
                                    }

                                };
                            },
                            style: "btn",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "color: #222;"
                            },
                            text: ["Go back"],
                            _idProps: {
                                service: idService,
                                uuid: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })))), React.createElement(tradershub_WalletBlocks_WalletOverlayPage_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                IsLoading: model.variables.isLoadingVar
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
                                uuid: "8",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                walletOverlayPageContent: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "full-width full-height",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.AdvancedHtml, {
                                        extendedProperties: {
                                            src: model.variables.iFrameURLVar
                                        },
                                        tag: "iframe",
                                        _idProps: {
                                            service: idService,
                                            name: "DepositIframe"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.iFrameURLVar)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.iFrameURLVar), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.errorMessageVar), asPrimitiveValue(model.variables.hasErrorVar)]
            }));
        }
    }

    return View;
});
define("tradershub.WalletFlows.WalletFiatDeposits.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.WalletFlows.controller", "RESTAPIWebsocketOfficial.model$ST_a61a52fb9a0db4861b8e2b8110ef16c4Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure", "RESTAPIWebsocketOfficial.controller$CashierFIAT"], function(OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, tradershubLanguageResources, tradershubClientVariables, tradershub_WalletFlowsController) {
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
                                span.setAttribute("outsystems.function.key", "b6a06f12-151c-470b-95a6-467977f36c10");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var cashierFIATVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // isLoading = True
                                    model.variables.isLoadingVar = true;
                                    // Execute Action: CashierFIAT
                                    model.flush();
                                    return RESTAPIWebsocketOfficialController.default.cashierFIAT$Action(tradershubClientVariables.getURL(), tradershubClientVariables.getAppId(), tradershubClientVariables.getLang(), tradershubClientVariables.getAuthToken(), function() {
                                        var rec = new RESTAPIWebsocketOfficialModel.ST_a61a52fb9a0db4861b8e2b8110ef16c4Structure();
                                        rec.cashierAttr = "deposit";
                                        rec.providerAttr = "doughflow";
                                        return rec;
                                    }(), callContext).then(function(value) {
                                        cashierFIATVar.value = value;
                                    }).then(function() {
                                        if ((((cashierFIATVar.value.responseOut.errorAttr.messageAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
                                            // HasError = True
                                            model.variables.hasErrorVar = true;
                                            // ErrorMessage = CashierFIAT.Response.Error.Message
                                            model.variables.errorMessageVar = cashierFIATVar.value.responseOut.errorAttr.messageAttr;
                                        } else {
                                            // iFrameURL = CashierFIAT.Response.Cashier
                                            model.variables.iFrameURLVar = cashierFIATVar.value.responseOut.cashierAttr;
                                            // isLoading = False
                                            model.variables.isLoadingVar = false;
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
                        span.setAttribute("outsystems.function.key", "b6a06f12-151c-470b-95a6-467977f36c10");
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