define("tradershub.WalletBlocks.OverlayTitleBar.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.controller", "OutSystemsUI.Utilities.Separator.mvc$model", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function(OSRuntimeCore, tradershubModel, OutSystemsUIController, OutSystemsUI_Utilities_Separator_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Title", "titleIn", "Title", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "Deposit";
                    }, false),
                    this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("HideBackButton", "hideBackButtonIn", "HideBackButton", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_hideBackButtonInDataFetchStatus", "_hideBackButtonInDataFetchStatus", "_hideBackButtonInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                Model._hasValidationWidgetsValue = OutSystemsUI_Utilities_Separator_mvcModel.hasValidationWidgets;
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {
            if ("Title" in inputs) {
                this.variables.titleIn = inputs.Title;
                if ("_titleInDataFetchStatus" in inputs) {
                    this.variables._titleInDataFetchStatus = inputs._titleInDataFetchStatus;
                }

            }

            if ("HideBackButton" in inputs) {
                this.variables.hideBackButtonIn = inputs.HideBackButton;
                if ("_hideBackButtonInDataFetchStatus" in inputs) {
                    this.variables._hideBackButtonInDataFetchStatus = inputs._hideBackButtonInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.WalletBlocks.OverlayTitleBar.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "tradershub.WalletBlocks.OverlayTitleBar.mvc$model", "tradershub.WalletBlocks.OverlayTitleBar.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Utilities.Separator.mvc$view", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, React, OSView, tradershub_WalletBlocks_OverlayTitleBar_mvc_model, tradershub_WalletBlocks_OverlayTitleBar_mvc_controller, tradershubClientVariables, OSWidgets, OutSystemsUI_Utilities_Separator_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "WalletBlocks.OverlayTitleBar";
        }

        static getAttributes() {
            return {
                codeFunction: "OverlayTitleBar",
                functionKey: "6a639521-9016-4bb6-bcfa-4612cc50b2f9",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Utilities_Separator_mvc_view];
        }

        get modelFactory() {
            return tradershub_WalletBlocks_OverlayTitleBar_mvc_model;
        }

        get controllerFactory() {
            return tradershub_WalletBlocks_OverlayTitleBar_mvc_controller;
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
                    style: "border-color: #F1F3F5; border-style: solid; border-width: 0px; margin-bottom: 0px; margin-right: 0px; padding: 0px;"
                },
                gridProperties: {
                    marginLeft: "px"
                },
                style: model.getCachedValue(idService.getId("MainWrapper.Style"), function() {
                    return ("display-flex align-items-center justify-content-space-between padding-y-xs" + ((!(OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut)) ? (" margin-x-base") : ("")));
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    name: "MainWrapper"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $if(model.variables.hideBackButtonIn, false, this, function() {
                return [];
            }, function() {
                return [React.createElement(OSWidgets.Image, {
                    extendedProperties: {
                        style: "font-size: 16px;"
                    },
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.backicon2.png"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        name: "BackBtn"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                gridProperties: {
                    classes: "ThemeGrid_Width1 ThemeGrid_MarginGutter"
                },
                style: "flex-1",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "TitleContainer"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                value: model.variables.titleIn,
                _idProps: {
                    service: idService,
                    name: "OverlayTItle"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleInDataFetchStatus)
            })), React.createElement(OSWidgets.Image, {
                extendedProperties: {
                    style: "font-size: 16px; padding: 0px 6px 0px 0px;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.close.png"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    name: "CloseBtn"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: model.getCachedValue(idService.getId("Y4aJ1uVf9UqYxCVnhv6usw.Visible"), function() {
                    return !(OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut);
                }),
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OutSystemsUI_Utilities_Separator_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    Space: tradershubModel.staticEntities.space.small
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
                    uuid: "6",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            })));
        }
    }

    return View;
});
define("tradershub.WalletBlocks.OverlayTitleBar.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "tradershub.languageResources", "tradershub.clientVariables", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, tradershubLanguageResources, tradershubClientVariables) {
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