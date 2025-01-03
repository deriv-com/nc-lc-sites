define("tradershub.WalletFlows.WalletNoBalanceWithdrawal.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.controller", "tradershub.Layouts.MainLayout.mvc$model", "tradershub.WalletBlocks.WalletOverlayPage.mvc$model", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function(OSRuntimeCore, tradershubModel, OutSystemsUIController, tradershub_Layouts_MainLayout_mvcModel, tradershub_WalletBlocks_WalletOverlayPage_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IsFiat", "isFiatIn", "IsFiat", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_isFiatInDataFetchStatus", "_isFiatInDataFetchStatus", "_isFiatInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
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
        setInputs(inputs) {
            if ("IsFiat" in inputs) {
                this.variables.isFiatIn = OS.DataConversion.ServerDataConverter.from(inputs.IsFiat, OS.DataTypes.DataTypes.Boolean);
            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.WalletFlows.WalletNoBalanceWithdrawal.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "tradershub.WalletFlows.WalletNoBalanceWithdrawal.mvc$model", "tradershub.WalletFlows.WalletNoBalanceWithdrawal.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.MainLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.WalletBlocks.WalletOverlayPage.mvc$view", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, React, OSView, tradershub_WalletFlows_WalletNoBalanceWithdrawal_mvc_model, tradershub_WalletFlows_WalletNoBalanceWithdrawal_mvc_controller, tradershubClientVariables, tradershub_Layouts_MainLayout_mvc_view, OSWidgets, tradershub_WalletBlocks_WalletOverlayPage_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "WalletFlows.WalletNoBalanceWithdrawal";
        }

        static getAttributes() {
            return {
                codeFunction: "WalletNoBalanceWithdrawal",
                functionKey: "2136784c-8c96-49e1-b417-7fd27e2badce",
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
            return [tradershub_Layouts_MainLayout_mvc_view, tradershub_WalletBlocks_WalletOverlayPage_mvc_view];
        }

        get modelFactory() {
            return tradershub_WalletFlows_WalletNoBalanceWithdrawal_mvc_model;
        }

        get controllerFactory() {
            return tradershub_WalletFlows_WalletNoBalanceWithdrawal_mvc_controller;
        }

        get title() {


            return "WalletNoBalanceWithdrawal";
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
                    ActiveTab: 4
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
                                HideBackButton: true,
                                HideWalletHeader: false,
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
                                        style: "display-flex flex-direction-column justify-content-center align-items-center full-width gap-m",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "2"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Image, {
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.Wallets_no_funds.svg"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "display-flex flex-direction-column gap-s text-align-center",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        style: model.getCachedValue(idService.getId("Nns+JaALTUi4i4cdCikCRw.Style"), function() {
                                            return ("font-bold " + ((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut) ? ("heading5") : ("heading4")));
                                        }),
                                        text: ["You have no funds in your wallet!"],
                                        _idProps: {
                                            service: idService,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), "Make a deposit or transfer funds from another account."), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: model.getCachedValue(idService.getId("Q574o7VrvEegS0fxHmmDLA.Style"), function() {
                                            return ("display-flex gap-s " + ((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut) ? ("flex-direction-row") : ("flex-direction-column full-width")));
                                        }),
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Button, {
                                        enabled: true,
                                        isDefault: false,
                                        onClick: function() {
                                            try {
                                                OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "zero-balance/:IsFiat", {
                                                    IsFiat: OS.DataConversion.ServerDataConverter.to(model.variables.isFiatIn, OS.DataTypes.DataTypes.Boolean)
                                                }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), null, true);
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
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "font-size: 14px;"
                                        },
                                        text: ["Transfer funds"],
                                        _idProps: {
                                            service: idService,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })), React.createElement(OSWidgets.Button, {
                                        enabled: true,
                                        gridProperties: {
                                            marginLeft: "0"
                                        },
                                        isDefault: false,
                                        onClick: function() {
                                            var eventHandlerContext = callContext.clone();
                                            controller.makeADepositOnClick$Action(controller.callContext(eventHandlerContext));

                                            ;
                                        },
                                        style: model.getCachedValue(idService.getId("WbyhlQgtG0KWY27lb3vTOA.Style"), function() {
                                            return ("btn btn-primary " + ((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut) ? ("") : ("full-width")));
                                        }),
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "font-size: 14px;"
                                        },
                                        text: ["Make a deposit"],
                                        _idProps: {
                                            service: idService,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))))];
                                })
                            },
                            _dependencies: []
                        })];
                    })
                },
                _dependencies: []
            }));
        }
    }

    return View;
});
define("tradershub.WalletFlows.WalletNoBalanceWithdrawal.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.WalletFlows.controller", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, tradershubLanguageResources, tradershubClientVariables, tradershub_WalletFlowsController) {
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
            get _makeADepositOnClick$Action() {
                if (!(this.hasOwnProperty("__makeADepositOnClick$Action"))) {
                    this.__makeADepositOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("MakeADepositOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "MakeADepositOnClick");
                                span.setAttribute("outsystems.function.key", "ef8c6ead-2ca0-43f1-a8db-389cec02b4ef");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("MakeADepositOnClick");
                                callContext = controller.callContext(callContext);
                                if ((model.variables.isFiatIn)) {
                                    // Destination: /tradershub/WalletFiatDeposit
                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "deposit/fiat", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                } else {
                                    // Destination: /tradershub/WalletCryptoDeposit
                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "deposit/deposit-crypto", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__makeADepositOnClick$Action;
            }
            set _makeADepositOnClick$Action(value) {
                this.__makeADepositOnClick$Action = value;
            }


            makeADepositOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("MakeADepositOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "MakeADepositOnClick");
                        span.setAttribute("outsystems.function.key", "ef8c6ead-2ca0-43f1-a8db-389cec02b4ef");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._makeADepositOnClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

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