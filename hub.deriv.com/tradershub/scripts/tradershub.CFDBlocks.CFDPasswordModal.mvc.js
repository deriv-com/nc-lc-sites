define("tradershub.CFDBlocks.CFDPasswordModal.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model"], function(OSRuntimeCore, tradershubModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PasswordInput", "passwordInputVar", "PasswordInput", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("IsVisible", "isVisibleIn", "IsVisible", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("SelectedPlatform", "selectedPlatformIn", "SelectedPlatform", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_selectedPlatformInDataFetchStatus", "_selectedPlatformInDataFetchStatus", "_selectedPlatformInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("isPasswordSet", "isPasswordSetIn", "isPasswordSet", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_isPasswordSetInDataFetchStatus", "_isPasswordSetInDataFetchStatus", "_isPasswordSetInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            return {
                PasswordInput4: OS.Model.ValidationWidgetRecord,
                PasswordInput7: OS.Model.ValidationWidgetRecord
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
        setInputs(inputs) {
            if ("IsVisible" in inputs) {
                this.variables.isVisibleIn = inputs.IsVisible;
                if ("_isVisibleInDataFetchStatus" in inputs) {
                    this.variables._isVisibleInDataFetchStatus = inputs._isVisibleInDataFetchStatus;
                }

            }

            if ("SelectedPlatform" in inputs) {
                this.variables.selectedPlatformIn = inputs.SelectedPlatform;
                if ("_selectedPlatformInDataFetchStatus" in inputs) {
                    this.variables._selectedPlatformInDataFetchStatus = inputs._selectedPlatformInDataFetchStatus;
                }

            }

            if ("isPasswordSet" in inputs) {
                this.variables.isPasswordSetIn = inputs.isPasswordSet;
                if ("_isPasswordSetInDataFetchStatus" in inputs) {
                    this.variables._isPasswordSetInDataFetchStatus = inputs._isPasswordSetInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.CFDBlocks.CFDPasswordModal.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.CFDBlocks.CFDPasswordModal.mvc$model", "tradershub.CFDBlocks.CFDPasswordModal.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js", "CustomComponentsOfficial.PasswordPolicy.PasswordPolicy.mvc$view"], function(OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_CFDBlocks_CFDPasswordModal_mvc_model, tradershub_CFDBlocks_CFDPasswordModal_mvc_controller, tradershubClientVariables, OSWidgets, CustomComponentsOfficial_PasswordPolicy_PasswordPolicy_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "CFDBlocks.CFDPasswordModal";
        }

        static getAttributes() {
            return {
                codeFunction: "CFDPasswordModal",
                functionKey: "53e37419-74a6-48a1-868f-55c9df17f185",
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
            return [CustomComponentsOfficial_PasswordPolicy_PasswordPolicy_mvc_view];
        }

        get modelFactory() {
            return tradershub_CFDBlocks_CFDPasswordModal_mvc_model;
        }

        get controllerFactory() {
            return tradershub_CFDBlocks_CFDPasswordModal_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Popup, {
                extendedProperties: {
                    style: "height: 100%; margin-top: 0px; padding: 16px;"
                },
                showPopup: model.variables.isVisibleIn,
                style: "full-height-popup display-flex flex-direction-column gap-m",
                _idProps: {
                    service: idService,
                    name: "PopupWrapper"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                showPopup_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isVisibleInDataFetchStatus)
            }, $if(model.variables.isPasswordSetIn, false, this, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "padding: 16px;"
                    },
                    style: "display-flex justify-content-space-between align-items-center",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "ModalHeader"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Expression, {
                    extendedProperties: {
                        style: "font-size: 18px; font-weight: bold;"
                    },
                    value: model.getCachedValue(idService.getId("AddAnAccount.Value"), function() {
                        return (("Add " + (((model.variables.selectedPlatformIn === "dxtrade")) ? ("a DerivX") : ("an MT5"))) + " account");
                    }, function() {
                        return model.variables.selectedPlatformIn;
                    }),
                    _idProps: {
                        service: idService,
                        name: "AddAnAccount"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._selectedPlatformInDataFetchStatus)
                }), React.createElement(OSWidgets.Icon, {
                    extendedEvents: {
                        onClick: function() {
                            return Promise.resolve().then(function() {
                                var eventHandlerContext = callContext.clone();
                                return controller.triggerCloseEvent$Action(controller.callContext(eventHandlerContext));
                            });;
                        }
                    },
                    extendedProperties: {
                        style: "font-size: 18px;"
                    },
                    gridProperties: {
                        classes: "ThemeGrid_MarginGutter"
                    },
                    icon: "times",
                    iconSize: /*FontSize*/ 0,
                    style: "icon",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "3"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "padding: 16px;"
                    },
                    style: "display-flex flex-direction-column display-flex flex-1 gap-m",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "ModalContent"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "display-flex flex-direction-column display-flex gap-m",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "EnterPasswordContent"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "PasswordDescription2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Expression, {
                    value: model.getCachedValue(idService.getId("lAhMpHS1NUSusA9UhXq8Tw.Value"), function() {
                        return (((("Enter your Deriv " + (((model.variables.selectedPlatformIn === "dxtrade")) ? ("DerivX") : (model.variables.selectedPlatformIn))) + " password to enable your ") + tradershubClientVariables.getAccountType()) + " account.");
                    }, function() {
                        return model.variables.selectedPlatformIn;
                    }, function() {
                        return tradershubClientVariables.getAccountType();
                    }),
                    _idProps: {
                        service: idService,
                        uuid: "7"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._selectedPlatformInDataFetchStatus)
                })), React.createElement(OSWidgets.Input, {
                    _validationProps: {
                        validationService: validationService
                    },
                    enabled: true,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    inputType: /*Password*/ 1,
                    mandatory: false,
                    maxLength: 16,
                    prompt: "Enter your password",
                    style: "form-control",
                    variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.passwordInputVar, function(value) {
                        model.variables.passwordInputVar = value;
                    }),
                    _idProps: {
                        service: idService,
                        name: "PasswordInput4"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }))), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "padding: 16px;"
                    },
                    style: "cfd-modal-sticky-footer",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "ModalFooter"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Button, {
                    enabled: true,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    isDefault: false,
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.addAccountOnClick$Action(controller.callContext(eventHandlerContext));

                        ;
                    },
                    style: "btn btn-primary",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "AddAccount"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Expression, {
                    value: "Add account",
                    _idProps: {
                        service: idService,
                        uuid: "11"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })))];
            }, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "padding: 16px;"
                    },
                    style: "display-flex justify-content-space-between align-items-center",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "ModalHeader2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Expression, {
                    extendedProperties: {
                        style: "font-size: 18px; font-weight: bold;"
                    },
                    value: model.getCachedValue(idService.getId("SetUpPassword2.Value"), function() {
                        return (("Set up your " + (((model.variables.selectedPlatformIn === "dxtrade")) ? ("DerivX") : (model.variables.selectedPlatformIn))) + " password");
                    }, function() {
                        return model.variables.selectedPlatformIn;
                    }),
                    _idProps: {
                        service: idService,
                        name: "SetUpPassword2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._selectedPlatformInDataFetchStatus)
                }), React.createElement(OSWidgets.Icon, {
                    extendedEvents: {
                        onClick: function() {
                            return Promise.resolve().then(function() {
                                var eventHandlerContext = callContext.clone();
                                return controller.triggerCloseEvent$Action(controller.callContext(eventHandlerContext));
                            });;
                        }
                    },
                    extendedProperties: {
                        style: "font-size: 18px;"
                    },
                    gridProperties: {
                        classes: "ThemeGrid_MarginGutter"
                    },
                    icon: "times",
                    iconSize: /*FontSize*/ 0,
                    style: "icon",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "14"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "padding: 16px;"
                    },
                    style: "display-flex flex-direction-column display-flex flex-1 gap-m",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "ModalContent2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "display-flex flex-direction-column display-flex gap-m",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "CreatePasswordContent3"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "DescriptionContainer4"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Expression, {
                    value: model.getCachedValue(idService.getId("ei9H59R3SU+ml6YEaXH0Vw.Value"), function() {
                        return (((("Enable your Deriv " + (((model.variables.selectedPlatformIn === "dxtrade")) ? ("X") : (model.variables.selectedPlatformIn))) + " account by setting a password. Use this password for all your ") + (((model.variables.selectedPlatformIn === "dxtrade")) ? ("DerivX") : (model.variables.selectedPlatformIn))) + " accounts.");
                    }, function() {
                        return model.variables.selectedPlatformIn;
                    }),
                    _idProps: {
                        service: idService,
                        uuid: "18"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._selectedPlatformInDataFetchStatus)
                })), React.createElement(OSWidgets.Input, {
                    _validationProps: {
                        validationService: validationService
                    },
                    enabled: true,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    inputType: /*Password*/ 1,
                    mandatory: false,
                    maxLength: 16,
                    prompt: "Enter your password",
                    style: "form-control",
                    variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.passwordInputVar, function(value) {
                        model.variables.passwordInputVar = value;
                    }),
                    _idProps: {
                        service: idService,
                        name: "PasswordInput7"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "display-flex flex-direction-column",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "LiveCheckboxContainer5"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(CustomComponentsOfficial_PasswordPolicy_PasswordPolicy_mvc_view, {
                    getOwnerSpan: function() {
                        return _this.getChildSpan("render");
                    },
                    getOwnerDisposeSpan: function() {
                        return _this.getChildSpan("destroy");
                    },
                    inputs: {
                        Password: model.variables.passwordInputVar,
                        Length: 8
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
                        uuid: "21",
                        alias: "1"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                })))), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "padding: 16px;"
                    },
                    style: "cfd-modal-sticky-footer",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "ModalFooter2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "border-radius: 5px; padding: 10px;"
                    },
                    style: "background-blue-lightest",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "RegulatoryInfoContainer5"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Icon, {
                    extendedProperties: {
                        style: "height: 10px; width: 10px;"
                    },
                    icon: "info-circle",
                    iconSize: /*FontSize*/ 0,
                    style: "icon",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "24"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }), React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "padding: 10px;"
                    },
                    text: [$text(getTranslation("_UjyCtccVEq7882_iga5gQ#Value", "[placeholder for regulatory information]"))],
                    _idProps: {
                        service: idService,
                        uuid: "25"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "TncContainer5"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, $text(getTranslation("G3CAkpQ1zUeC9vdNadk9IA#Value", "By clicking \"Set up password\", I accept Deriv [Jurisdiction] Ltd\'s terms and conditions."))), React.createElement(OSWidgets.Button, {
                    enabled: true,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    isDefault: false,
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.setPasswordOnClick$Action(controller.callContext(eventHandlerContext));

                        ;
                    },
                    style: "btn btn-primary",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "SetUpPassword"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Expression, {
                    value: "Set up password",
                    _idProps: {
                        service: idService,
                        uuid: "28"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })))];
            })));
        }
    }

    return View;
});
define("tradershub.CFDBlocks.CFDPasswordModal.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.CFDBlocks.CFDPasswordModal.mvc$translationsResources"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_CFDBlocks_CFDPasswordModal_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, tradershub_CFDBlocks_CFDPasswordModal_mvc_TranslationsResources);
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
            get _addAccountOnClick$Action() {
                if (!(this.hasOwnProperty("__addAccountOnClick$Action"))) {
                    this.__addAccountOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("AddAccountOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AddAccountOnClick");
                                span.setAttribute("outsystems.function.key", "38705109-adbe-4569-b38f-367b31b71405");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("AddAccountOnClick");
                                callContext = controller.callContext(callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__addAccountOnClick$Action;
            }
            set _addAccountOnClick$Action(value) {
                this.__addAccountOnClick$Action = value;
            }

            get _setPasswordOnClick$Action() {
                if (!(this.hasOwnProperty("__setPasswordOnClick$Action"))) {
                    this.__setPasswordOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SetPasswordOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SetPasswordOnClick");
                                span.setAttribute("outsystems.function.key", "45cc1744-92ff-4c58-8c38-be10958c7543");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SetPasswordOnClick");
                                callContext = controller.callContext(callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__setPasswordOnClick$Action;
            }
            set _setPasswordOnClick$Action(value) {
                this.__setPasswordOnClick$Action = value;
            }

            get _triggerCloseEvent$Action() {
                if (!(this.hasOwnProperty("__triggerCloseEvent$Action"))) {
                    this.__triggerCloseEvent$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("TriggerCloseEvent", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "TriggerCloseEvent");
                                span.setAttribute("outsystems.function.key", "98b33e72-ea9f-4fc5-94c7-b779de152e50");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("TriggerCloseEvent");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Trigger Event: OnCloseClick
                                    return controller.onCloseClick$Action(callContext);
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    };
                }

                return this.__triggerCloseEvent$Action;
            }
            set _triggerCloseEvent$Action(value) {
                this.__triggerCloseEvent$Action = value;
            }


            addAccountOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("AddAccountOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "AddAccountOnClick");
                        span.setAttribute("outsystems.function.key", "38705109-adbe-4569-b38f-367b31b71405");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._addAccountOnClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            setPasswordOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SetPasswordOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SetPasswordOnClick");
                        span.setAttribute("outsystems.function.key", "45cc1744-92ff-4c58-8c38-be10958c7543");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._setPasswordOnClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            triggerCloseEvent$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("TriggerCloseEvent__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "TriggerCloseEvent");
                        span.setAttribute("outsystems.function.key", "98b33e72-ea9f-4fc5-94c7-b779de152e50");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._triggerCloseEvent$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            get onCloseClick$Action() {
                if (!(this.hasOwnProperty("_onCloseClick$Action"))) {
                    this._onCloseClick$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._onCloseClick$Action;
            }
            set onCloseClick$Action(value) {
                this._onCloseClick$Action = value;
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


define("tradershub.CFDBlocks.CFDPasswordModal.mvc$translationsResources.fr-FR", [], function() {
    return {
        "G3CAkpQ1zUeC9vdNadk9IA#Value": "En cliquant sur \"Configurer le mot de passe\", j\'accepte les termes et conditions de Deriv [Jurisdiction] Ltd.",
        "_UjyCtccVEq7882_iga5gQ#Value": "[espace réservé pour les informations réglementaires]"
    };
});

define("tradershub.CFDBlocks.CFDPasswordModal.mvc$translationsResources", ["exports", "tradershub.CFDBlocks.CFDPasswordModal.mvc$translationsResources.fr-FR"], function(exports, tradershub_CFDBlocks_CFDPasswordModal_mvc_translationsResources_frFR) {
    return {
        "fr-FR": {
            "translations": tradershub_CFDBlocks_CFDPasswordModal_mvc_translationsResources_frFR,
            "isRTL": false
        }
    };
});