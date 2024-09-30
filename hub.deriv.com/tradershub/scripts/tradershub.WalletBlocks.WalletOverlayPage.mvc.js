define("tradershub.WalletBlocks.WalletOverlayPage.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.controller", "tradershub.WalletBlocks.OverlayTitleBar.mvc$model", "tradershub.WalletBlocks.WalletCashierHeader.mvc$model", "tradershub.Common.LoaderBlock.mvc$model", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function(OSRuntimeCore, tradershubModel, OutSystemsUIController, tradershub_WalletBlocks_OverlayTitleBar_mvcModel, tradershub_WalletBlocks_WalletCashierHeader_mvcModel, tradershub_Common_LoaderBlock_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IsLoading", "isLoadingIn", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                Model._hasValidationWidgetsValue = ((tradershub_WalletBlocks_OverlayTitleBar_mvcModel.hasValidationWidgets || tradershub_WalletBlocks_WalletCashierHeader_mvcModel.hasValidationWidgets) || tradershub_Common_LoaderBlock_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {
            if ("IsLoading" in inputs) {
                this.variables.isLoadingIn = inputs.IsLoading;
                if ("_isLoadingInDataFetchStatus" in inputs) {
                    this.variables._isLoadingInDataFetchStatus = inputs._isLoadingInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.WalletBlocks.WalletOverlayPage.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "tradershub.WalletBlocks.WalletOverlayPage.mvc$model", "tradershub.WalletBlocks.WalletOverlayPage.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js", "tradershub.WalletBlocks.OverlayTitleBar.mvc$view", "tradershub.WalletBlocks.WalletCashierHeader.mvc$view", "tradershub.Common.LoaderBlock.mvc$view", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, React, OSView, tradershub_WalletBlocks_WalletOverlayPage_mvc_model, tradershub_WalletBlocks_WalletOverlayPage_mvc_controller, tradershubClientVariables, OSWidgets, tradershub_WalletBlocks_OverlayTitleBar_mvc_view, tradershub_WalletBlocks_WalletCashierHeader_mvc_view, tradershub_Common_LoaderBlock_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "WalletBlocks.WalletOverlayPage";
        }

        static getAttributes() {
            return {
                codeFunction: "WalletOverlayPage",
                functionKey: "932c55d3-3f02-4046-9648-043994771643",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.WalletBlocks.WalletOverlayPage.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_WalletBlocks_OverlayTitleBar_mvc_view, tradershub_WalletBlocks_WalletCashierHeader_mvc_view, tradershub_Common_LoaderBlock_mvc_view];
        }

        get modelFactory() {
            return tradershub_WalletBlocks_WalletOverlayPage_mvc_model;
        }

        get controllerFactory() {
            return tradershub_WalletBlocks_WalletOverlayPage_mvc_controller;
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
                style: "wallet-overlay-container",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "PageWrapper"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(tradershub_WalletBlocks_OverlayTitleBar_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    Title: "Deposit"
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
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "margin-right: (Auto);"
                },
                style: "wallet-overlay-content",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "ContentWrapper"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(tradershub_WalletBlocks_WalletCashierHeader_mvc_view, {
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
                    alias: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), $if(model.variables.isLoadingIn, false, this, function() {
                return [React.createElement(tradershub_Common_LoaderBlock_mvc_view, {
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
                        uuid: "4",
                        alias: "3"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                })];
            }, function() {
                return [React.createElement(OSWidgets.Placeholder, {
                    align: /*Default*/ 0,
                    content: _this.props.placeholders.walletOverlayPageContent,
                    style: model.getCachedValue(idService.getId("WalletOverlayPageContent.Style"), function() {
                        return ("full-width" + ((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut) ? (" margin-top-m") : (" margin-top-xs")));
                    }),
                    _idProps: {
                        service: idService,
                        name: "WalletOverlayPageContent"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }))));
        }
    }

    return View;
});
define("tradershub.WalletBlocks.WalletOverlayPage.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "tradershub.languageResources", "tradershub.clientVariables", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, tradershubLanguageResources, tradershubClientVariables) {
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