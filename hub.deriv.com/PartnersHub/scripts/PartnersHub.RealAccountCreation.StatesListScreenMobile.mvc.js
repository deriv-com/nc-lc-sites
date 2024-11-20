define("PartnersHub.RealAccountCreation.StatesListScreenMobile.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "CustomComponentsOfficial.FullScreenMobileModal.FullScreenMobileModal.mvc$model", "PartnersHub.Common.StatesList.mvc$model"], function(OSRuntimeCore, PartnersHubModel, CustomComponentsOfficial_FullScreenMobileModal_FullScreenMobileModal_mvcModel, PartnersHub_Common_StatesList_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
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
    OS.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return VariablesRecord;
        }

        static getWidgetsRecordConstructor() {
            return WidgetsRecord;
        }

        static get hasValidationWidgets() {
            if ((Model._hasValidationWidgetsValue === undefined)) {
                Model._hasValidationWidgetsValue = (CustomComponentsOfficial_FullScreenMobileModal_FullScreenMobileModal_mvcModel.hasValidationWidgets || PartnersHub_Common_StatesList_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.RealAccountCreation.StatesListScreenMobile.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreation.StatesListScreenMobile.mvc$model", "PartnersHub.RealAccountCreation.StatesListScreenMobile.mvc$controller", "PartnersHub.clientVariables", "CustomComponentsOfficial.FullScreenMobileModal.FullScreenMobileModal.mvc$view", "@outsystems/runtime-widgets-js", "PartnersHub.Common.StatesList.mvc$view"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_RealAccountCreation_StatesListScreenMobile_mvc_model, PartnersHub_RealAccountCreation_StatesListScreenMobile_mvc_controller, PartnersHubClientVariables, CustomComponentsOfficial_FullScreenMobileModal_FullScreenMobileModal_mvc_view, OSWidgets, PartnersHub_Common_StatesList_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreation.StatesListScreenMobile";
        }

        static getAttributes() {
            return {
                codeFunction: "StatesListScreenMobile",
                functionKey: "3f9ff1ef-c312-4875-ad26-73ca318bc818",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.PHubTest.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [CustomComponentsOfficial_FullScreenMobileModal_FullScreenMobileModal_mvc_view, PartnersHub_Common_StatesList_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreation_StatesListScreenMobile_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreation_StatesListScreenMobile_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("7_GfPxLDdUitJnPKMYvIGA#Title", "StatesListScreenMobile");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(CustomComponentsOfficial_FullScreenMobileModal_FullScreenMobileModal_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    Title: "State/Province",
                    HasBackButton: true
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onBack$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.fullScreenMobileModalOnBack$Action(controller.callContext(eventHandlerContext));

                        ;
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
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 10px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(PartnersHub_Common_StatesList_mvc_view, {
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
                                },
                                onClickState$Action: function(selectedStateIn) {
                                    var eventHandlerContext = callContext.clone();
                                    controller.statesListOnClickCountry$Action(selectedStateIn, controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "2",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }))];
                    })
                },
                _dependencies: []
            }));
        }
    }

    return View;
});
define("PartnersHub.RealAccountCreation.StatesListScreenMobile.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreation.StatesListScreenMobile.mvc$translationsResources", "PartnersHub.RealAccountCreation.controller"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreation_StatesListScreenMobile_mvc_TranslationsResources, PartnersHub_RealAccountCreationController) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_RealAccountCreation_StatesListScreenMobile_mvc_TranslationsResources);
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
            get _statesListOnClickCountry$Action() {
                if (!(this.hasOwnProperty("__statesListOnClickCountry$Action"))) {
                    this.__statesListOnClickCountry$Action = function(selectedStateIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("StatesListOnClickCountry", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "StatesListOnClickCountry");
                                span.setAttribute("outsystems.function.key", "43480fd5-9c96-466d-af25-77c2b7f1ac9c");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("StatesListOnClickCountry");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.StatesListScreenMobile.StatesListOnClickCountry$vars"))());
                                vars.value.selectedStateInLocal = selectedStateIn;
                                // RealSignupStateProvince = SelectedState
                                PartnersHubClientVariables.setRealSignupStateProvince(vars.value.selectedStateInLocal);
                                // Destination: /PartnersHub/AddressDetailsScreen
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "AddressDetailsScreen", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__statesListOnClickCountry$Action;
            }
            set _statesListOnClickCountry$Action(value) {
                this.__statesListOnClickCountry$Action = value;
            }

            get _fullScreenMobileModalOnBack$Action() {
                if (!(this.hasOwnProperty("__fullScreenMobileModalOnBack$Action"))) {
                    this.__fullScreenMobileModalOnBack$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("FullScreenMobileModalOnBack", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "FullScreenMobileModalOnBack");
                                span.setAttribute("outsystems.function.key", "7283c098-7dd2-4c7b-ae04-fab61558dbca");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("FullScreenMobileModalOnBack");
                                callContext = controller.callContext(callContext);
                                // Destination: /PartnersHub/AddressDetailsScreen
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "AddressDetailsScreen", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__fullScreenMobileModalOnBack$Action;
            }
            set _fullScreenMobileModalOnBack$Action(value) {
                this.__fullScreenMobileModalOnBack$Action = value;
            }


            statesListOnClickCountry$Action(selectedStateIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("StatesListOnClickCountry__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "StatesListOnClickCountry");
                        span.setAttribute("outsystems.function.key", "43480fd5-9c96-466d-af25-77c2b7f1ac9c");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._statesListOnClickCountry$Action, callContext, selectedStateIn);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            fullScreenMobileModalOnBack$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("FullScreenMobileModalOnBack__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "FullScreenMobileModalOnBack");
                        span.setAttribute("outsystems.function.key", "7283c098-7dd2-4c7b-ae04-fab61558dbca");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._fullScreenMobileModalOnBack$Action, callContext);
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
                        return PartnersHub_RealAccountCreationController.default.handleError(ex, this.callContext());
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
        Controller.registerVariableGroupType("PartnersHub.RealAccountCreation.StatesListScreenMobile.StatesListOnClickCountry$vars", [{
            name: "SelectedState",
            attrName: "selectedStateInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});


define("PartnersHub.RealAccountCreation.StatesListScreenMobile.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});