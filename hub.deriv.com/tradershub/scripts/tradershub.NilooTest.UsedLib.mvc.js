define("tradershub.NilooTest.UsedLib.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.Layouts.MainLayout.mvc$model", "TestOption.option.LoggedOutBanner.mvc$model", "tradershub.controller$RedirectToExternalURL"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershub_Layouts_MainLayout_mvcModel, TestOption_option_LoggedOutBanner_mvcModel) {
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
                Model._hasValidationWidgetsValue = (tradershub_Layouts_MainLayout_mvcModel.hasValidationWidgets || TestOption_option_LoggedOutBanner_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.NilooTest.UsedLib.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.NilooTest.UsedLib.mvc$model", "tradershub.NilooTest.UsedLib.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.MainLayout.mvc$view", "@outsystems/runtime-widgets-js", "TestOption.option.LoggedOutBanner.mvc$view", "tradershub.controller$RedirectToExternalURL"], function(OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_NilooTest_UsedLib_mvc_model, tradershub_NilooTest_UsedLib_mvc_controller, tradershubClientVariables, tradershub_Layouts_MainLayout_mvc_view, OSWidgets, TestOption_option_LoggedOutBanner_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "NilooTest.UsedLib";
        }

        static getAttributes() {
            return {
                codeFunction: "UsedLib",
                functionKey: "bd91f8ff-da1f-4d8b-949e-24ee70c3ce88",
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
            return [tradershub_Layouts_MainLayout_mvc_view, TestOption_option_LoggedOutBanner_mvc_view];
        }

        get modelFactory() {
            return tradershub_NilooTest_UsedLib_mvc_model;
        }

        get controllerFactory() {
            return tradershub_NilooTest_UsedLib_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("__iRvR_ai02UniTucMPOiA#Title", "UsedLib");
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
                    ActiveTab: 2
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
                        return [React.createElement(TestOption_option_LoggedOutBanner_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                AuthToken: tradershubClientVariables.getAuthToken()
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                redirectionToTrustPilot$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.loggedOutBannerRedirectionToTrustPilot$Action(controller.callContext(eventHandlerContext));

                                    ;
                                },
                                getStartedButtonClick$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.loggedOutBannerGetStartedButtonClick$Action(controller.callContext(eventHandlerContext));

                                    ;
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
                _dependencies: [asPrimitiveValue(tradershubClientVariables.getAuthToken())]
            }));
        }
    }

    return View;
});
define("tradershub.NilooTest.UsedLib.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.NilooTest.UsedLib.mvc$translationsResources", "tradershub.NilooTest.controller", "tradershub.controller$RedirectToExternalURL"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_NilooTest_UsedLib_mvc_TranslationsResources, tradershub_NilooTestController) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, tradershub_NilooTest_UsedLib_mvc_TranslationsResources);
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
            get _loggedOutBannerRedirectionToTrustPilot$Action() {
                if (!(this.hasOwnProperty("__loggedOutBannerRedirectionToTrustPilot$Action"))) {
                    this.__loggedOutBannerRedirectionToTrustPilot$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("LoggedOutBannerRedirectionToTrustPilot", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "LoggedOutBannerRedirectionToTrustPilot");
                                span.setAttribute("outsystems.function.key", "c068aad5-abe6-4bdb-b087-3a137010dc96");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("LoggedOutBannerRedirectionToTrustPilot");
                                callContext = controller.callContext(callContext);
                                // Execute Action: RedirectToExternalURL
                                tradershubController.default.redirectToExternalURL$Action("https://www.trustpilot.com/review/deriv.com", false, callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__loggedOutBannerRedirectionToTrustPilot$Action;
            }
            set _loggedOutBannerRedirectionToTrustPilot$Action(value) {
                this.__loggedOutBannerRedirectionToTrustPilot$Action = value;
            }

            get _loggedOutBannerGetStartedButtonClick$Action() {
                if (!(this.hasOwnProperty("__loggedOutBannerGetStartedButtonClick$Action"))) {
                    this.__loggedOutBannerGetStartedButtonClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("LoggedOutBannerGetStartedButtonClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "LoggedOutBannerGetStartedButtonClick");
                                span.setAttribute("outsystems.function.key", "ca9331b0-fd1d-4aac-a5d1-7a3fed7fcd03");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("LoggedOutBannerGetStartedButtonClick");
                                callContext = controller.callContext(callContext);
                                // Destination: /tradershub/signup
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "signup", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__loggedOutBannerGetStartedButtonClick$Action;
            }
            set _loggedOutBannerGetStartedButtonClick$Action(value) {
                this.__loggedOutBannerGetStartedButtonClick$Action = value;
            }


            loggedOutBannerRedirectionToTrustPilot$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("LoggedOutBannerRedirectionToTrustPilot__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "LoggedOutBannerRedirectionToTrustPilot");
                        span.setAttribute("outsystems.function.key", "c068aad5-abe6-4bdb-b087-3a137010dc96");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._loggedOutBannerRedirectionToTrustPilot$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            loggedOutBannerGetStartedButtonClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("LoggedOutBannerGetStartedButtonClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "LoggedOutBannerGetStartedButtonClick");
                        span.setAttribute("outsystems.function.key", "ca9331b0-fd1d-4aac-a5d1-7a3fed7fcd03");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._loggedOutBannerGetStartedButtonClick$Action, callContext);
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
                        return tradershub_NilooTestController.default.handleError(ex, this.callContext());
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


define("tradershub.NilooTest.UsedLib.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});