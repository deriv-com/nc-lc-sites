define("PartnersHub.Common.CFDCommissionsModalDesktop.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.model$ST_0314d78ca6806dcc3e7ca8803a68ff6aStructure"], function(OSRuntimeCore, PartnersHubModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("userInput", "userInputVar", "userInput", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("cfdCommissionsPasswordErrors", "cfdCommissionsPasswordErrorsVar", "cfdCommissionsPasswordErrors", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.ST_0314d78ca6806dcc3e7ca8803a68ff6aStructure());
                    }, false, PartnersHubModel.ST_0314d78ca6806dcc3e7ca8803a68ff6aStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        var VariablesRecord = VariablesRecordInner;
        VariablesRecord.init();
    }
    class WidgetsRecord extends
    OS.Model.BaseWidgetRecordMap {
        static getWidgetsType() {
            return {
                CFDPasswordInput: OS.Model.ValidationWidgetRecord
            };
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
            return true;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Common.CFDCommissionsModalDesktop.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Common.CFDCommissionsModalDesktop.mvc$model", "PartnersHub.Common.CFDCommissionsModalDesktop.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Utilities.InlineSVG.mvc$view", "OutSystemsUI.Interaction.InputWithIcon.mvc$view", "PartnersHub.model$ST_0314d78ca6806dcc3e7ca8803a68ff6aStructure"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_Common_CFDCommissionsModalDesktop_mvc_model, PartnersHub_Common_CFDCommissionsModalDesktop_mvc_controller, PartnersHubClientVariables, OSWidgets, OutSystemsUI_Utilities_InlineSVG_mvc_view, OutSystemsUI_Interaction_InputWithIcon_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Common.CFDCommissionsModalDesktop";
        }

        static getAttributes() {
            return {
                codeFunction: "CFDCommissionsModalDesktop",
                functionKey: "79f7b6d0-e884-4e66-8e61-7fa9de160bf1",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Common.CFDCommissionsModalDesktop.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Utilities_InlineSVG_mvc_view, OutSystemsUI_Interaction_InputWithIcon_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Common_CFDCommissionsModalDesktop_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Common_CFDCommissionsModalDesktop_mvc_controller;
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
                style: "absolute-left absolute-top fixed full-width-vw full-height-vh popup-backdrop cfd-commissions-modal",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "cfd-commissions-modal-dialog",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "dialog"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "cfd-commissions-modal-header",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "header"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                style: "ph-section-title",
                text: ["Enable CFDs commissions"],
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OutSystemsUI_Utilities_InlineSVG_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    SVGCode: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M16.125 16.875L12 12.7188L7.84375 16.875C7.65625 17.0625 7.34375 17.0625 7.125 16.875C6.9375 16.6562 6.9375 16.3438 7.125 16.1562L11.2812 12L7.15625 7.875C6.9375 7.6875 6.9375 7.375 7.15625 7.15625C7.34375 6.96875 7.65625 6.96875 7.84375 7.15625L12 11.3125L16.125 7.15625C16.3125 6.96875 16.625 6.96875 16.8438 7.15625C17.0312 7.375 17.0312 7.6875 16.8438 7.875L12.6875 12L16.8438 16.1562C17.0312 16.3438 17.0312 16.6562 16.8438 16.875C16.625 17.0625 16.3125 17.0625 16.125 16.875Z\" fill=\"black\" fill-opacity=\"0.72\"/>\r\n</svg>"
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
                    uuid: "4",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "cfd-commissions-modal-body",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "body"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "cfd-commissions-modal-content",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "content"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                style: "margin-bottom-m font-size-s display-block",
                text: ["Your MT5 account is ready for receiving commissions. Set a password to enable it."],
                _idProps: {
                    service: idService,
                    uuid: "7"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OutSystemsUI_Interaction_InputWithIcon_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    AlignIconRight: true
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
                    icon: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Icon, {
                            icon: "rocket",
                            iconSize: /*FontSize*/ 0,
                            style: "icon",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "9"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    input: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Input, {
                            _validationProps: {
                                validationService: validationService
                            },
                            enabled: true,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: /*Password*/ 1,
                            mandatory: true,
                            maxLength: 25,
                            onChange: function() {
                                var eventHandlerContext = callContext.clone();
                                controller.cFDPasswordInputOnChange$Action(controller.callContext(eventHandlerContext));

                                ;
                            },
                            prompt: "Enter your password",
                            style: "form-control",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.userInputVar, function(value) {
                                model.variables.userInputVar = value;
                            }),
                            _idProps: {
                                service: idService,
                                name: "CFDPasswordInput"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.userInputVar)]
            }), React.createElement(OSWidgets.AdvancedHtml, {
                tag: "ul",
                _idProps: {
                    service: idService,
                    name: "Validations"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.AdvancedHtml, {
                tag: "li",
                _idProps: {
                    service: idService,
                    uuid: "12"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OutSystemsUI_Utilities_InlineSVG_mvc_view, {
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
                    uuid: "13",
                    alias: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), "8–25 characters long"), React.createElement(OSWidgets.AdvancedHtml, {
                tag: "li",
                _idProps: {
                    service: idService,
                    uuid: "14"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OutSystemsUI_Utilities_InlineSVG_mvc_view, {
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
                    uuid: "15",
                    alias: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), "8–25 characters long"), React.createElement(OSWidgets.AdvancedHtml, {
                tag: "li",
                _idProps: {
                    service: idService,
                    uuid: "16"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OutSystemsUI_Utilities_InlineSVG_mvc_view, {
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
                    uuid: "17",
                    alias: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), "8–25 characters long"), React.createElement(OSWidgets.AdvancedHtml, {
                tag: "li",
                _idProps: {
                    service: idService,
                    uuid: "18"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OutSystemsUI_Utilities_InlineSVG_mvc_view, {
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
                    uuid: "19",
                    alias: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), "8–25 characters long")))))));
        }
    }

    return View;
});
define("PartnersHub.Common.CFDCommissionsModalDesktop.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Common.CFDCommissionsModalDesktop.mvc$translationsResources", "PartnersHub.model$ST_0314d78ca6806dcc3e7ca8803a68ff6aStructure"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Common_CFDCommissionsModalDesktop_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Common_CFDCommissionsModalDesktop_mvc_TranslationsResources);
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
            get _cFDPasswordInputOnChange$Action() {
                if (!(this.hasOwnProperty("__cFDPasswordInputOnChange$Action"))) {
                    this.__cFDPasswordInputOnChange$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("CFDPasswordInputOnChange", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "CFDPasswordInputOnChange");
                                span.setAttribute("outsystems.function.key", "a1c2f66b-5af9-4a2a-90ff-56857ca61b6c");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("CFDPasswordInputOnChange");
                                callContext = controller.callContext(callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__cFDPasswordInputOnChange$Action;
            }
            set _cFDPasswordInputOnChange$Action(value) {
                this.__cFDPasswordInputOnChange$Action = value;
            }


            cFDPasswordInputOnChange$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("CFDPasswordInputOnChange__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "CFDPasswordInputOnChange");
                        span.setAttribute("outsystems.function.key", "a1c2f66b-5af9-4a2a-90ff-56857ca61b6c");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._cFDPasswordInputOnChange$Action, callContext);
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
                return PartnersHubController.default.defaultTimeout;
            }

        }

        var Controller = ControllerInner;
        // Server Actions - Variables

        // Client Actions - Variables

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});


define("PartnersHub.Common.CFDCommissionsModalDesktop.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});