define("tradershub.MainFlowBlocks.OptionsProductCard.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model"], function(OSRuntimeCore, tradershubModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Icon", "iconIn", "Icon", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_iconInDataFetchStatus", "_iconInDataFetchStatus", "_iconInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("Title", "titleIn", "Title", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("Description", "descriptionIn", "Description", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_descriptionInDataFetchStatus", "_descriptionInDataFetchStatus", "_descriptionInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("ShouldShowProduct", "shouldShowProductIn", "ShouldShowProduct", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_shouldShowProductInDataFetchStatus", "_shouldShowProductInDataFetchStatus", "_shouldShowProductInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("IsDisabled", "isDisabledIn", "IsDisabled", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_isDisabledInDataFetchStatus", "_isDisabledInDataFetchStatus", "_isDisabledInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
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
            return false;
        }
        setInputs(inputs) {
            if ("Icon" in inputs) {
                this.variables.iconIn = inputs.Icon;
                if ("_iconInDataFetchStatus" in inputs) {
                    this.variables._iconInDataFetchStatus = inputs._iconInDataFetchStatus;
                }

            }

            if ("Title" in inputs) {
                this.variables.titleIn = inputs.Title;
                if ("_titleInDataFetchStatus" in inputs) {
                    this.variables._titleInDataFetchStatus = inputs._titleInDataFetchStatus;
                }

            }

            if ("Description" in inputs) {
                this.variables.descriptionIn = inputs.Description;
                if ("_descriptionInDataFetchStatus" in inputs) {
                    this.variables._descriptionInDataFetchStatus = inputs._descriptionInDataFetchStatus;
                }

            }

            if ("ShouldShowProduct" in inputs) {
                this.variables.shouldShowProductIn = inputs.ShouldShowProduct;
                if ("_shouldShowProductInDataFetchStatus" in inputs) {
                    this.variables._shouldShowProductInDataFetchStatus = inputs._shouldShowProductInDataFetchStatus;
                }

            }

            if ("IsDisabled" in inputs) {
                this.variables.isDisabledIn = inputs.IsDisabled;
                if ("_isDisabledInDataFetchStatus" in inputs) {
                    this.variables._isDisabledInDataFetchStatus = inputs._isDisabledInDataFetchStatus;
                }

            }

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

define("tradershub.MainFlowBlocks.OptionsProductCard.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.MainFlowBlocks.OptionsProductCard.mvc$model", "tradershub.MainFlowBlocks.OptionsProductCard.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js"], function(OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_MainFlowBlocks_OptionsProductCard_mvc_model, tradershub_MainFlowBlocks_OptionsProductCard_mvc_controller, tradershubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "MainFlowBlocks.OptionsProductCard";
        }

        static getAttributes() {
            return {
                codeFunction: "OptionsProductCard",
                functionKey: "fb176809-3da9-47c2-9e15-176de7a20ab9",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.MainFlowBlocks.OptionsProductCard.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return tradershub_MainFlowBlocks_OptionsProductCard_mvc_model;
        }

        get controllerFactory() {
            return tradershub_MainFlowBlocks_OptionsProductCard_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(model.variables.isLoadingIn, false, this, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "skeleton loader",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "0"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }, function() {
                return [$if(model.variables.shouldShowProductIn, true, this, function() {
                    return [React.createElement(OSWidgets.Link, {
                        enabled: true,
                        onClick: function() {
                            var eventHandlerContext = callContext.clone();
                            controller.redirectionLink$Action(controller.callContext(eventHandlerContext));

                            ;
                        },
                        visible: true,
                        _idProps: {
                            service: idService,
                            uuid: "1"
                        },
                        _widgetRecordProvider: widgetsRecordProvider
                    }, React.createElement(OSWidgets.Container, {
                        align: /*Default*/ 0,
                        animate: false,
                        extendedProperties: {
                            style: "color: #222;"
                        },
                        gridProperties: {
                            classes: "ThemeGrid_Width4"
                        },
                        style: model.getCachedValue(idService.getId("ProductContainer.Style"), function() {
                            return ((model.variables.isDisabledIn) ? ("product-card product-card-disabled") : ("product-card"));
                        }, function() {
                            return model.variables.isDisabledIn;
                        }),
                        visible: true,
                        _idProps: {
                            service: idService,
                            name: "ProductContainer"
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isDisabledInDataFetchStatus)
                    }, React.createElement(OSWidgets.Image, {
                        type: /*External*/ 1,
                        url: model.variables.iconIn,
                        _idProps: {
                            service: idService,
                            name: "ProductIcon"
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        url_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._iconInDataFetchStatus)
                    }), React.createElement(OSWidgets.Container, {
                        align: /*Default*/ 0,
                        animate: false,
                        extendedProperties: {
                            style: "margin-top: 8px;"
                        },
                        style: "display-flex justify-content-space-between align-items-center",
                        visible: true,
                        _idProps: {
                            service: idService,
                            uuid: "4"
                        },
                        _widgetRecordProvider: widgetsRecordProvider
                    }, React.createElement(OSWidgets.Container, {
                        align: /*Default*/ 0,
                        animate: false,
                        style: "display-flex flex-direction-column",
                        visible: true,
                        _idProps: {
                            service: idService,
                            uuid: "5"
                        },
                        _widgetRecordProvider: widgetsRecordProvider
                    }, React.createElement(OSWidgets.Expression, {
                        extendedProperties: {
                            style: "color: #101213; font-weight: bold;"
                        },
                        value: model.variables.titleIn,
                        _idProps: {
                            service: idService,
                            name: "TitleExpression"
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleInDataFetchStatus)
                    }), React.createElement(OSWidgets.Expression, {
                        extendedProperties: {
                            style: "color: #101213; font-size: 12px; margin-top: 4px;"
                        },
                        value: model.variables.descriptionIn,
                        _idProps: {
                            service: idService,
                            name: "DescriptionExpression"
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._descriptionInDataFetchStatus)
                    })), React.createElement(OSWidgets.Image, {
                        extendedProperties: {
                            style: "height: 32px; margin-bottom: 0px; padding: 0px;"
                        },
                        gridProperties: {
                            width: "32px"
                        },
                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                        type: /*Static*/ 0,
                        _idProps: {
                            service: idService,
                            uuid: "8"
                        },
                        _widgetRecordProvider: widgetsRecordProvider
                    }))))];
                }, function() {
                    return [];
                })];
            }));
        }
    }

    return View;
});
define("tradershub.MainFlowBlocks.OptionsProductCard.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.MainFlowBlocks.OptionsProductCard.mvc$translationsResources"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_MainFlowBlocks_OptionsProductCard_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, tradershub_MainFlowBlocks_OptionsProductCard_mvc_TranslationsResources);
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

            get redirectionLink$Action() {
                if (!(this.hasOwnProperty("_redirectionLink$Action"))) {
                    this._redirectionLink$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._redirectionLink$Action;
            }
            set redirectionLink$Action(value) {
                this._redirectionLink$Action = value;
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


define("tradershub.MainFlowBlocks.OptionsProductCard.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});