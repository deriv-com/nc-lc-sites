define("tradershub.MainFlow.Redirect.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.Common.LoaderBlock.mvc$model"], function(OSRuntimeCore, tradershubModel, tradershub_Common_LoaderBlock_mvcModel) {
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
                Model._hasValidationWidgetsValue = tradershub_Common_LoaderBlock_mvcModel.hasValidationWidgets;
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.MainFlow.Redirect.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.MainFlow.Redirect.mvc$model", "tradershub.MainFlow.Redirect.mvc$controller", "tradershub.clientVariables", "tradershub.Common.LoaderBlock.mvc$view", "@outsystems/runtime-widgets-js"], function(OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_MainFlow_Redirect_mvc_model, tradershub_MainFlow_Redirect_mvc_controller, tradershubClientVariables, tradershub_Common_LoaderBlock_mvc_view, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "MainFlow.Redirect";
        }

        static getAttributes() {
            return {
                codeFunction: "Redirect",
                functionKey: "6a8e0613-4971-4362-bac0-cb2c96573e78",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.MainFlow.Redirect.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Common_LoaderBlock_mvc_view];
        }

        get modelFactory() {
            return tradershub_MainFlow_Redirect_mvc_model;
        }

        get controllerFactory() {
            return tradershub_MainFlow_Redirect_mvc_controller;
        }

        get title() {

            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            var validationService = controller.validationService;
            var callContext = controller.callContext();
            var asPrimitiveValue = View.asPrimitiveValue;
            var getTranslation = View.getTranslation;
            var _this = this;


            return OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("EwaOanFJYkO6wMssllc+eA#TitleExpression.-708286336.1", "Redirecting | Deriv");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(tradershub_Common_LoaderBlock_mvc_view, {
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }));
        }
    }

    return View;
});
define("tradershub.MainFlow.Redirect.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.MainFlow.Redirect.mvc$translationsResources", "tradershub.MainFlow.controller", "tradershub.MainFlow.Redirect.mvc$controller.OnReady.GetURLParamsJS", "tradershub.MainFlow.Redirect.mvc$controller.OnReady.RedirectURLWithQueryParamJS"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_MainFlow_Redirect_mvc_TranslationsResources, tradershub_MainFlowController, tradershub_MainFlow_Redirect_mvc_controller_OnReady_GetURLParamsJS, tradershub_MainFlow_Redirect_mvc_controller_OnReady_RedirectURLWithQueryParamJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, tradershub_MainFlow_Redirect_mvc_TranslationsResources);
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
            get _onInitialize$Action() {
                if (!(this.hasOwnProperty("__onInitialize$Action"))) {
                    this.__onInitialize$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnInitialize", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnInitialize");
                                span.setAttribute("outsystems.function.key", "7c1970e4-645f-43bf-a222-5abac6b217e6");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onInitialize$Action;
            }
            set _onInitialize$Action(value) {
                this.__onInitialize$Action = value;
            }

            get _onReady$Action() {
                if (!(this.hasOwnProperty("__onReady$Action"))) {
                    this.__onReady$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnReady", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnReady");
                                span.setAttribute("outsystems.function.key", "91f3ee53-09b2-4379-bce5-2c8c139c42a9");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var getURLParamsJSResult = new OS.DataTypes.VariableHolder();
                                getURLParamsJSResult.value = OS.Logger.startActiveSpan("GetURLParams", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "GetURLParams");
                                        span.setAttribute("outsystems.function.key", "5aa2b169-5162-4466-800d-5453884090fa");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_MainFlow_Redirect_mvc_controller_OnReady_GetURLParamsJS, "GetURLParams", "OnReady", {
                                            Code: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                            Action: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                            Lang: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                            Token: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.MainFlow.Redirect.OnReady$getURLParamsJSResult"))();
                                            jsNodeResult.codeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Code, OS.DataTypes.DataTypes.Text);
                                            jsNodeResult.actionOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Action, OS.DataTypes.DataTypes.Text);
                                            jsNodeResult.langOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Lang, OS.DataTypes.DataTypes.Text);
                                            jsNodeResult.tokenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Token, OS.DataTypes.DataTypes.Text);
                                            return jsNodeResult;
                                        }, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // Code = GetURLParams.Code
                                tradershubClientVariables.setCode(getURLParamsJSResult.value.codeOut);
                                // Action = GetURLParams.Action
                                tradershubClientVariables.setAction(getURLParamsJSResult.value.actionOut);
                                // Lang = GetURLParams.Lang
                                tradershubClientVariables.setLang(getURLParamsJSResult.value.langOut);
                                // Token = GetURLParams.Token
                                tradershubClientVariables.setToken(getURLParamsJSResult.value.tokenOut);
                                if (((getURLParamsJSResult.value.actionOut === "reset_password"))) {
                                    // Destination: /tradershub/ResetPassword
                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "reset-password", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                } else {
                                    if (((getURLParamsJSResult.value.actionOut === "payment_withdraw"))) {
                                        // Destination: /tradershub/WalletsWithdrawal
                                        return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "wallets/withdrawal", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                    } else {
                                        if ((((getURLParamsJSResult.value.tokenOut) !== ("")))) {
                                            // Destination: /tradershub/Options
                                            return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "options", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                        } else {
                                            // AuthToken = NullTextIdentifier
                                            tradershubClientVariables.setAuthToken(OS.BuiltinFunctions.nullTextIdentifier());
                                            // SelectedResidence = NullTextIdentifier
                                            tradershubClientVariables.setSelectedResidence(OS.BuiltinFunctions.nullTextIdentifier());
                                            // SelectedResidenceLabel = NullTextIdentifier
                                            tradershubClientVariables.setSelectedResidenceLabel(OS.BuiltinFunctions.nullTextIdentifier());
                                            // SelectedCitizenship = NullTextIdentifier
                                            tradershubClientVariables.setSelectedCitizenship(OS.BuiltinFunctions.nullTextIdentifier());
                                            OS.Logger.startActiveSpan("RedirectURLWithQueryParam", function(span) {
                                                if (span) {
                                                    span.setAttribute("code.function", "RedirectURLWithQueryParam");
                                                    span.setAttribute("outsystems.function.key", "fd858047-b79b-4d15-9725-831de69ae67c");
                                                    span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                    span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                                }

                                                try {
                                                    return controller.safeExecuteJSNode(tradershub_MainFlow_Redirect_mvc_controller_OnReady_RedirectURLWithQueryParamJS, "RedirectURLWithQueryParam", "OnReady", null, function($parameters) {}, {}, {});
                                                } finally {
                                                    if (span) {
                                                        span.end();
                                                    }

                                                }

                                            }, 1);
                                        }

                                    }

                                }

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


            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "7c1970e4-645f-43bf-a222-5abac6b217e6");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "91f3ee53-09b2-4379-bce5-2c8c139c42a9");
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
                    this._onInitializeEventHandler = function(callContext) {
                        var controller = this.controller;
                        var model = this.model;
                        var idService = this.idService;

                        return controller.onInitialize$Action(callContext);

                    };
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
                        return tradershub_MainFlowController.default.handleError(ex, this.callContext());
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
        Controller.registerVariableGroupType("tradershub.MainFlow.Redirect.OnReady$getURLParamsJSResult", [{
            name: "Code",
            attrName: "codeOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "Action",
            attrName: "actionOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "Lang",
            attrName: "langOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "Token",
            attrName: "tokenOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.MainFlow.Redirect.mvc$controller.OnReady.GetURLParamsJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);


        $parameters.Code = urlParams.get('code') || ""
        $parameters.Action = urlParams.get('action') || ""
        $parameters.Lang = urlParams.get('lang') || ""
        $parameters.Token = urlParams.get('token1') || ""
    };
});

define("tradershub.MainFlow.Redirect.mvc$controller.OnReady.RedirectURLWithQueryParamJS", [], function() {
    return function($actions, $roles, $public) {
        const params = new URLSearchParams(window.location.search)
        params.delete('code')

        const countryOfResidenceURL = "signup/country-of-residence?" + params.toString()

        window.location.replace(countryOfResidenceURL)
    };
});


define("tradershub.MainFlow.Redirect.mvc$translationsResources.fr-FR", [], function() {
    return {
        "EwaOanFJYkO6wMssllc+eA#Title": "Redirection | Deriv",
        "EwaOanFJYkO6wMssllc+eA#TitleExpression.-708286336.1": "Redirection | Deriv"
    };
});

define("tradershub.MainFlow.Redirect.mvc$translationsResources", ["exports", "tradershub.MainFlow.Redirect.mvc$translationsResources.fr-FR"], function(exports, tradershub_MainFlow_Redirect_mvc_translationsResources_frFR) {
    return {
        "fr-FR": {
            "translations": tradershub_MainFlow_Redirect_mvc_translationsResources_frFR,
            "isRTL": false
        }
    };
});