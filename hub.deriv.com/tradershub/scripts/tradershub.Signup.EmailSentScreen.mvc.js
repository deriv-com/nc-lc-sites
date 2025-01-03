define("tradershub.Signup.EmailSentScreen.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.Layouts.SignupLayoutTopMenu.mvc$model", "tradershub.controller$DerivApiSendMessage"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershub_Layouts_SignupLayoutTopMenu_mvcModel) {
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
                Model._hasValidationWidgetsValue = tradershub_Layouts_SignupLayoutTopMenu_mvcModel.hasValidationWidgets;
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.Signup.EmailSentScreen.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.Signup.EmailSentScreen.mvc$model", "tradershub.Signup.EmailSentScreen.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.SignupLayoutTopMenu.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.controller$DerivApiSendMessage"], function(OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_Signup_EmailSentScreen_mvc_model, tradershub_Signup_EmailSentScreen_mvc_controller, tradershubClientVariables, tradershub_Layouts_SignupLayoutTopMenu_mvc_view, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "Signup.EmailSentScreen";
        }

        static getAttributes() {
            return {
                codeFunction: "EmailSentScreen",
                functionKey: "3146f3bd-5d42-4ed3-9262-8aba7f98e312",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.Signup.EmailSentScreen.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_SignupLayoutTopMenu_mvc_view];
        }

        get modelFactory() {
            return tradershub_Signup_EmailSentScreen_mvc_model;
        }

        get controllerFactory() {
            return tradershub_Signup_EmailSentScreen_mvc_controller;
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


            return OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("vfNGMUJd006SYoq6f5jjEg#TitleExpression.-1132290137.1", "Check your email");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(tradershub_Layouts_SignupLayoutTopMenu_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    NoContentMiddle: true,
                    HasLink: true
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
                    mainContent: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "height: auto; margin-bottom: 0px; padding: 16px;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "auto"
                            },
                            style: "email-sent-container",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            gridProperties: {
                                width: "96px"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.email.png"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "352px"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Expression, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: 700; line-height: 24px; text-align: center;"
                            },
                            style: "break-word",
                            value: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("i5X5nJsCMk+a7Z3SQ9IFSQ#ValueExpression.-1309903677.1", "We’ve sent a verification link to "),
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Expression, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: 700; line-height: 24px; text-align: center;"
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            style: "break-word",
                            value: tradershubClientVariables.getSignupEmail(),
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "352px"
                            },
                            style: "",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $text(getTranslation("OlUhS96640KlAujAwJX3GQ#Value", "Didn\'t get an email? ")), React.createElement(OSWidgets.Link, {
                            enabled: true,
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            onClick: function() {
                                return Promise.resolve().then(function() {
                                    var eventHandlerContext = callContext.clone();
                                    return controller.resendVerifyEmail$Action(tradershubClientVariables.getSignupEmail(), controller.callContext(eventHandlerContext));
                                });;
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "8"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "color: #101213; font-weight: 700; line-height: 22px; text-decoration: underline;"
                            },
                            text: [$text(getTranslation("sPGv4u2Vf0GhWnR2F+88Lg#Value", "Resend email"))],
                            _idProps: {
                                service: idService,
                                name: "Resendemaillink"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: left;"
                            },
                            gridProperties: {
                                marginLeft: "0px"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "10"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.AdvancedHtml, {
                            tag: "ul",
                            _idProps: {
                                service: idService,
                                uuid: "11"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.AdvancedHtml, {
                            tag: "li",
                            _idProps: {
                                service: idService,
                                uuid: "12"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 12px;"
                            },
                            text: [$text(getTranslation("61zNHxNu502gHhifmmz4IA#Value", "Make sure you’ve entered your email correctly."))],
                            _idProps: {
                                service: idService,
                                uuid: "13"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.AdvancedHtml, {
                            tag: "li",
                            _idProps: {
                                service: idService,
                                uuid: "14"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 12px;"
                            },
                            text: [$text(getTranslation("oemHAbU4pUWSudfKsqyVzg#Value", "Check your spam folder."))],
                            _idProps: {
                                service: idService,
                                uuid: "15"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.AdvancedHtml, {
                            tag: "li",
                            _idProps: {
                                service: idService,
                                uuid: "16"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 12px;"
                            },
                            text: [$text(getTranslation("z31ULyxXE0iDZK+ggzIy7w#Value", "Make sure the email isn’t blocked by firewalls or filters."))],
                            _idProps: {
                                service: idService,
                                uuid: "17"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))))))];
                    })
                },
                _dependencies: [asPrimitiveValue(tradershubClientVariables.getSignupEmail())]
            }));
        }
    }

    return View;
});
define("tradershub.Signup.EmailSentScreen.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.Signup.EmailSentScreen.mvc$translationsResources", "tradershub.Signup.controller", "tradershub.Signup.EmailSentScreen.mvc$controller.ResendVerifyEmail.VerifyEmailPayloadJS", "tradershub.controller$DerivApiSendMessage"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_Signup_EmailSentScreen_mvc_TranslationsResources, tradershub_SignupController, tradershub_Signup_EmailSentScreen_mvc_controller_ResendVerifyEmail_VerifyEmailPayloadJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, tradershub_Signup_EmailSentScreen_mvc_TranslationsResources);
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
            get _resendVerifyEmail$Action() {
                if (!(this.hasOwnProperty("__resendVerifyEmail$Action"))) {
                    this.__resendVerifyEmail$Action = function(userEmailIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ResendVerifyEmail", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ResendVerifyEmail");
                                span.setAttribute("outsystems.function.key", "1f9835ca-7ad9-41b3-b913-f4026bd32abf");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("ResendVerifyEmail");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.Signup.EmailSentScreen.ResendVerifyEmail$vars"))());
                                vars.value.userEmailInLocal = userEmailIn;
                                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                                var verifyEmailPayloadJSResult = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    verifyEmailPayloadJSResult.value = OS.Logger.startActiveSpan("VerifyEmailPayload", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "VerifyEmailPayload");
                                            span.setAttribute("outsystems.function.key", "a828f095-21c6-4066-98e3-6a0abeac17da");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(tradershub_Signup_EmailSentScreen_mvc_controller_ResendVerifyEmail_VerifyEmailPayloadJS, "VerifyEmailPayload", "ResendVerifyEmail", {
                                                UserEmail: OS.DataConversion.JSNodeParamConverter.to(vars.value.userEmailInLocal, OS.DataTypes.DataTypes.Email),
                                                Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {
                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.Signup.EmailSentScreen.ResendVerifyEmail$verifyEmailPayloadJSResult"))();
                                                jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                                return jsNodeResult;
                                            }, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                    // Execute Action: DerivApiSendMessage
                                    model.flush();
                                    return tradershubController.default.derivApiSendMessage$Action(verifyEmailPayloadJSResult.value.payloadOut, "", false, callContext).then(function(value) {
                                        derivApiSendMessageVar.value = value;
                                    }).then(function() {
                                        if ((derivApiSendMessageVar.value.isErrorOut)) {
                                            OS.FeedbackMessageService.showFeedbackMessage((((derivApiSendMessageVar.value.errorCodeOut === "RateLimit")) ? ("Maximum resend attempts reached. Try again in a few minutes.") : ("Something went wrong. Please try reloading the page!")), /*Error*/ 3);
                                        } else {
                                            OS.FeedbackMessageService.showFeedbackMessage(OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("uSJHx7RPj0mqvF6f8n4__w#Message.-1041026628.1", "Email sent"), /*Success*/ 1);
                                        }

                                    });
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    };
                }

                return this.__resendVerifyEmail$Action;
            }
            set _resendVerifyEmail$Action(value) {
                this.__resendVerifyEmail$Action = value;
            }

            get _onInitialize$Action() {
                if (!(this.hasOwnProperty("__onInitialize$Action"))) {
                    this.__onInitialize$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnInitialize", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnInitialize");
                                span.setAttribute("outsystems.function.key", "a4e22616-a39a-4e8b-8871-a7bb42b96c53");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                if (((tradershubClientVariables.getSignupEmail() === OS.BuiltinFunctions.nullTextIdentifier()))) {
                                    // Destination: /tradershub/signup
                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "signup", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                }

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


            resendVerifyEmail$Action(userEmailIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ResendVerifyEmail__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ResendVerifyEmail");
                        span.setAttribute("outsystems.function.key", "1f9835ca-7ad9-41b3-b913-f4026bd32abf");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._resendVerifyEmail$Action, callContext, userEmailIn);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "a4e22616-a39a-4e8b-8871-a7bb42b96c53");
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
                        return tradershub_SignupController.default.handleError(ex, this.callContext());
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
        Controller.registerVariableGroupType("tradershub.Signup.EmailSentScreen.ResendVerifyEmail$vars", [{
            name: "UserEmail",
            attrName: "userEmailInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Email,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.Signup.EmailSentScreen.ResendVerifyEmail$verifyEmailPayloadJSResult", [{
            name: "Payload",
            attrName: "payloadOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.Signup.EmailSentScreen.mvc$controller.ResendVerifyEmail.VerifyEmailPayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const cookies = window.getCookiesFields()
        const cookies_objects = window.getCookiesObject(cookies)
        const cookies_value = window.getDataObjFromCookies(cookies_objects, cookies)
        const affiliate_token = window.getCookieValue('affiliate_tracking')

        $parameters.Payload = JSON.stringify({
            verify_email: $parameters.UserEmail,
            type: 'account_opening',
            url_parameters: {
                ...cookies_value,
                affiliate_token,
            }
        })

    };
});


define("tradershub.Signup.EmailSentScreen.mvc$translationsResources.fr-FR", [], function() {
    return {
        "z31ULyxXE0iDZK+ggzIy7w#Value": "Assurez-vous que l\'email n\'est pas bloqué par des pare-feu ou des filtres.",
        "oemHAbU4pUWSudfKsqyVzg#Value": "Vérifiez votre dossier de spam.",
        "61zNHxNu502gHhifmmz4IA#Value": "Assurez-vous d\'avoir correctement saisi votre adresse e-mail.",
        "sPGv4u2Vf0GhWnR2F+88Lg#Value": "Renvoi de l\'email",
        "OlUhS96640KlAujAwJX3GQ#Value": "Vous n\'avez pas reçu d\'email ?",
        "i5X5nJsCMk+a7Z3SQ9IFSQ#ValueExpression.-1309903677.1": "Nous avons envoyé un lien de vérification à",
        "uSJHx7RPj0mqvF6f8n4__w#Message.-1041026628.1": "Email envoyé",
        "vfNGMUJd006SYoq6f5jjEg#Title": "Vérifiez votre e-mail",
        "vfNGMUJd006SYoq6f5jjEg#TitleExpression.-1132290137.1": "Vérifiez votre e-mail"
    };
});

define("tradershub.Signup.EmailSentScreen.mvc$translationsResources", ["exports", "tradershub.Signup.EmailSentScreen.mvc$translationsResources.fr-FR"], function(exports, tradershub_Signup_EmailSentScreen_mvc_translationsResources_frFR) {
    return {
        "fr-FR": {
            "translations": tradershub_Signup_EmailSentScreen_mvc_translationsResources_frFR,
            "isRTL": false
        }
    };
});