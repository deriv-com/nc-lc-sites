define("PartnersHub.RealAccountCreation.EmploymentDetailsScreen.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.mvc$model", "PartnersHub.RealAccountCreation.EmploymentDetailsList.mvc$model", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.controller$RealSignupPreviousStep"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvcModel, PartnersHub_RealAccountCreation_EmploymentDetailsList_mvcModel) {
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
                Model._hasValidationWidgetsValue = (PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvcModel.hasValidationWidgets || PartnersHub_RealAccountCreation_EmploymentDetailsList_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.RealAccountCreation.EmploymentDetailsScreen.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreation.EmploymentDetailsScreen.mvc$model", "PartnersHub.RealAccountCreation.EmploymentDetailsScreen.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.mvc$view", "@outsystems/runtime-widgets-js", "PartnersHub.RealAccountCreation.EmploymentDetailsList.mvc$view", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.controller$RealSignupPreviousStep"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_RealAccountCreation_EmploymentDetailsScreen_mvc_model, PartnersHub_RealAccountCreation_EmploymentDetailsScreen_mvc_controller, PartnersHubClientVariables, PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvc_view, OSWidgets, PartnersHub_RealAccountCreation_EmploymentDetailsList_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreation.EmploymentDetailsScreen";
        }

        static getAttributes() {
            return {
                codeFunction: "EmploymentDetailsScreen",
                functionKey: "89acc739-b391-4d85-9271-1005e2382133",
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
            return [PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvc_view, PartnersHub_RealAccountCreation_EmploymentDetailsList_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreation_EmploymentDetailsScreen_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreation_EmploymentDetailsScreen_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("OcesiZGzhU2ScRAF4jghMw#Title", "EmploymentDetailsScreen");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvc_view, {
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
                    onClickBack2$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.realAccountCreationLayoutScreenBasedonClickBack2$Action(controller.callContext(eventHandlerContext));

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
                        return [React.createElement(PartnersHub_RealAccountCreation_EmploymentDetailsList_mvc_view, {
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
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
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
define("PartnersHub.RealAccountCreation.EmploymentDetailsScreen.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreation.EmploymentDetailsScreen.mvc$translationsResources", "PartnersHub.RealAccountCreation.controller", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.controller$RealSignupPreviousStep"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreation_EmploymentDetailsScreen_mvc_TranslationsResources, PartnersHub_RealAccountCreationController) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_RealAccountCreation_EmploymentDetailsScreen_mvc_TranslationsResources);
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
            get _realAccountCreationLayoutScreenBasedonClickBack2$Action() {
                if (!(this.hasOwnProperty("__realAccountCreationLayoutScreenBasedonClickBack2$Action"))) {
                    this.__realAccountCreationLayoutScreenBasedonClickBack2$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("RealAccountCreationLayoutScreenBasedonClickBack2", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "RealAccountCreationLayoutScreenBasedonClickBack2");
                                span.setAttribute("outsystems.function.key", "9cdbf01d-7c48-4e73-a8b5-2c5483afcc4c");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("RealAccountCreationLayoutScreenBasedonClickBack2");
                                callContext = controller.callContext(callContext);
                                if ((PartnersHubClientVariables.getRealSignupIsIDVSupported())) {
                                    // Execute Action: RealSignupPreviousStep
                                    PartnersHubController.default.realSignupPreviousStep$Action(1, callContext);
                                    // Execute Action: GetHeaderTitle
                                    PartnersHubController.default.getHeaderTitle$Action(callContext);
                                    // Destination: /PartnersHub/IDVScreen
                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "IDVScreen", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                } else {
                                    // Execute Action: RealSignupPreviousStep2
                                    PartnersHubController.default.realSignupPreviousStep$Action(1, callContext);
                                    // Execute Action: GetHeaderTitle2
                                    PartnersHubController.default.getHeaderTitle$Action(callContext);
                                    // Destination: /PartnersHub/AccountPurposeScreen
                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "AccountPurposeScreen", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__realAccountCreationLayoutScreenBasedonClickBack2$Action;
            }
            set _realAccountCreationLayoutScreenBasedonClickBack2$Action(value) {
                this.__realAccountCreationLayoutScreenBasedonClickBack2$Action = value;
            }


            realAccountCreationLayoutScreenBasedonClickBack2$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("RealAccountCreationLayoutScreenBasedonClickBack2__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "RealAccountCreationLayoutScreenBasedonClickBack2");
                        span.setAttribute("outsystems.function.key", "9cdbf01d-7c48-4e73-a8b5-2c5483afcc4c");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._realAccountCreationLayoutScreenBasedonClickBack2$Action, callContext);
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

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});


define("PartnersHub.RealAccountCreation.EmploymentDetailsScreen.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});