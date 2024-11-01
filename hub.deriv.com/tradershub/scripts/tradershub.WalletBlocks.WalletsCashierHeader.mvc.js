define("tradershub.WalletBlocks.WalletsCashierHeader.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.Common.BalanceSkeletonLoader.mvc$model", "tradershub.model$ST_3425849bb816196585dd6f07dbf2721dStructure"], function(OSRuntimeCore, tradershubModel, tradershub_Common_BalanceSkeletonLoader_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("isLoading", "isLoadingVar", "isLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("ActiveWallet", "activeWalletVar", "ActiveWallet", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_3425849bb816196585dd6f07dbf2721dStructure());
                    }, false, tradershubModel.ST_3425849bb816196585dd6f07dbf2721dStructure)
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
                Model._hasValidationWidgetsValue = tradershub_Common_BalanceSkeletonLoader_mvcModel.hasValidationWidgets;
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.WalletBlocks.WalletsCashierHeader.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.WalletBlocks.WalletsCashierHeader.mvc$model", "tradershub.WalletBlocks.WalletsCashierHeader.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js", "tradershub.Common.BalanceSkeletonLoader.mvc$view", "tradershub.model$ST_3425849bb816196585dd6f07dbf2721dStructure"], function(OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_WalletBlocks_WalletsCashierHeader_mvc_model, tradershub_WalletBlocks_WalletsCashierHeader_mvc_controller, tradershubClientVariables, OSWidgets, tradershub_Common_BalanceSkeletonLoader_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "WalletBlocks.WalletsCashierHeader";
        }

        static getAttributes() {
            return {
                codeFunction: "WalletsCashierHeader",
                functionKey: "db31b58d-787e-4a06-ae6d-6087868a7467",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.WalletBlocks.WalletsCashierHeader.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Common_BalanceSkeletonLoader_mvc_view];
        }

        get modelFactory() {
            return tradershub_WalletBlocks_WalletsCashierHeader_mvc_model;
        }

        get controllerFactory() {
            return tradershub_WalletBlocks_WalletsCashierHeader_mvc_controller;
        }

        get title() {


            return "";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "border-radius: 8px; padding-bottom: 12px; padding-left: var(--space-base); padding-right: var(--space-base); padding-top: 12px;"
                },
                style: "display-flex align-items-center justify-content-space-between gap-s full-width background-neutral-1",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "MainContainer"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $if(model.variables.isLoadingVar, false, this, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "currency-icon-skeleton",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "1"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }, function() {
                return [React.createElement(OSWidgets.Image, {
                    gridProperties: {
                        width: "32px"
                    },
                    type: /*External*/ 1,
                    url: model.variables.activeWalletVar.iconAttr,
                    _idProps: {
                        service: idService,
                        name: "WalletCashierHeaderIcon"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }), $if(model.variables.isLoadingVar, false, this, function() {
                return [React.createElement(tradershub_Common_BalanceSkeletonLoader_mvc_view, {
                    getOwnerSpan: function() {
                        return _this.getChildSpan("render");
                    },
                    getOwnerDisposeSpan: function() {
                        return _this.getChildSpan("destroy");
                    },
                    inputs: {},
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
                        uuid: "3",
                        alias: "1"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                })];
            }, function() {
                return [React.createElement(OSWidgets.Expression, {
                    gridProperties: {
                        marginLeft: "0"
                    },
                    style: "font-bold font-size-s",
                    value: model.variables.activeWalletVar.nameAttr,
                    _idProps: {
                        service: idService,
                        uuid: "4"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "flex-1 text-align-right",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $if(model.variables.isLoadingVar, false, this, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "display-flex justify-content-flex-end",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "6"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(tradershub_Common_BalanceSkeletonLoader_mvc_view, {
                    getOwnerSpan: function() {
                        return _this.getChildSpan("render");
                    },
                    getOwnerDisposeSpan: function() {
                        return _this.getChildSpan("destroy");
                    },
                    inputs: {},
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
                        uuid: "7",
                        alias: "2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                }))];
            }, function() {
                return [React.createElement(OSWidgets.Expression, {
                    style: "font-size-s font-bold",
                    value: model.variables.activeWalletVar.formattedBalanceAttr,
                    _idProps: {
                        service: idService,
                        uuid: "8"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }))));
        }
    }

    return View;
});
define("tradershub.WalletBlocks.WalletsCashierHeader.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.WalletBlocks.WalletsCashierHeader.mvc$translationsResources", "tradershub.model$ST_3425849bb816196585dd6f07dbf2721dStructure"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_WalletBlocks_WalletsCashierHeader_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, tradershub_WalletBlocks_WalletsCashierHeader_mvc_TranslationsResources);
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
                                span.setAttribute("outsystems.function.key", "0d4e3418-97da-44ba-a575-43f06206830e");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var jSONDeserializeWalletsAccountVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_3425849bb816196585dd6f07dbf2721dStructure))());
                                // isLoading = True
                                model.variables.isLoadingVar = true;
                                // JSON Deserialize: JSONDeserializeWalletsAccount
                                jSONDeserializeWalletsAccountVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(tradershubClientVariables.getActiveWallet(), tradershubModel.ST_3425849bb816196585dd6f07dbf2721dStructure, false);
                                // ActiveWallet = JSONDeserializeWalletsAccount.Data
                                model.variables.activeWalletVar = jSONDeserializeWalletsAccountVar.value.dataOut;
                                // isLoading = False
                                model.variables.isLoadingVar = false;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

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
                        span.setAttribute("outsystems.function.key", "0d4e3418-97da-44ba-a575-43f06206830e");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onReady$Action, callContext);
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
                        return controller.handleError(ex);
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


define("tradershub.WalletBlocks.WalletsCashierHeader.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});