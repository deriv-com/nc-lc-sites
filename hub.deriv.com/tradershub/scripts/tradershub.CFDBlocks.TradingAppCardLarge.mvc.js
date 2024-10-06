define("tradershub.CFDBlocks.TradingAppCardLarge.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model"], function(OSRuntimeCore, tradershubModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Name", "nameIn", "Name", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_nameInDataFetchStatus", "_nameInDataFetchStatus", "_nameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("ProductDescription", "productDescriptionIn", "ProductDescription", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_productDescriptionInDataFetchStatus", "_productDescriptionInDataFetchStatus", "_productDescriptionInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("ProductIcon", "productIconIn", "ProductIcon", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_productIconInDataFetchStatus", "_productIconInDataFetchStatus", "_productIconInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ("Name" in inputs) {
                this.variables.nameIn = inputs.Name;
                if ("_nameInDataFetchStatus" in inputs) {
                    this.variables._nameInDataFetchStatus = inputs._nameInDataFetchStatus;
                }

            }

            if ("ProductDescription" in inputs) {
                this.variables.productDescriptionIn = inputs.ProductDescription;
                if ("_productDescriptionInDataFetchStatus" in inputs) {
                    this.variables._productDescriptionInDataFetchStatus = inputs._productDescriptionInDataFetchStatus;
                }

            }

            if ("ProductIcon" in inputs) {
                this.variables.productIconIn = inputs.ProductIcon;
                if ("_productIconInDataFetchStatus" in inputs) {
                    this.variables._productIconInDataFetchStatus = inputs._productIconInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.CFDBlocks.TradingAppCardLarge.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.CFDBlocks.TradingAppCardLarge.mvc$model", "tradershub.CFDBlocks.TradingAppCardLarge.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js"], function(OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_CFDBlocks_TradingAppCardLarge_mvc_model, tradershub_CFDBlocks_TradingAppCardLarge_mvc_controller, tradershubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "CFDBlocks.TradingAppCardLarge";
        }

        static getAttributes() {
            return {
                codeFunction: "TradingAppCardLarge",
                functionKey: "1a2c0e7d-7ed7-4b30-9b41-340459f6b962",
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
            return [];
        }

        get modelFactory() {
            return tradershub_CFDBlocks_TradingAppCardLarge_mvc_model;
        }

        get controllerFactory() {
            return tradershub_CFDBlocks_TradingAppCardLarge_mvc_controller;
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
                    style: "border-color: #DEE2E6; border-radius: 8px; border-style: solid; border-width: 1px; height: 138px; margin-bottom: 0px; margin-right: 0px; margin-top: 0px; padding: 16px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                style: "display-flex flex-direction-column justify-content-space-between",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Container"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    name: "ProductIconContainer"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Image, {
                extendedProperties: {
                    style: "height: 40px; margin-right: 16px;"
                },
                gridProperties: {
                    width: "40px"
                },
                style: "display-flex ",
                type: /*External*/ 1,
                url: model.variables.productIconIn,
                _idProps: {
                    service: idService,
                    name: "Icon"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                url_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._productIconInDataFetchStatus)
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "display-flex justify-content-space-between",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "DescriptionContainer"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "display-block",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "TextContainer"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    name: "ProductName"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                extendedProperties: {
                    style: "font-weight: bold;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: model.variables.nameIn,
                _idProps: {
                    service: idService,
                    name: "Product"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._nameInDataFetchStatus)
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    name: "AccountBalance"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                gridProperties: {
                    marginLeft: "0"
                },
                value: model.variables.productDescriptionIn,
                _idProps: {
                    service: idService,
                    name: "Description"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._productDescriptionInDataFetchStatus)
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    name: "IconRightContainer"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Icon, {
                extendedProperties: {
                    style: "font-size: 32px;"
                },
                icon: "angle-right",
                iconSize: /*Twotimes*/ 1,
                style: "icon align-self-center",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "10"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })))));
        }
    }

    return View;
});
define("tradershub.CFDBlocks.TradingAppCardLarge.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables) {
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