define("tradershub.WalletFlows.WalletsUserVerificationWithdrawal.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.controller", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "tradershub.Layouts.MainLayout.mvc$model", "tradershub.WalletBlocks.WalletsOverlayPage.mvc$model", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_bd2236af041a218c8fde06ca0065cfd9Structure", "tradershub.controller$SendGetSetting", "RESTAPIWebsocketOfficial.model$ST_b5532fbd5672db40752d556a46e96eaeStructure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$VerifyEmail"], function(OSRuntimeCore, tradershubModel, OutSystemsUIController, tradershubController, RESTAPIWebsocketOfficialModel, tradershub_Layouts_MainLayout_mvcModel, tradershub_WalletBlocks_WalletsOverlayPage_mvcModel) {
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
                Model._hasValidationWidgetsValue = (tradershub_Layouts_MainLayout_mvcModel.hasValidationWidgets || tradershub_WalletBlocks_WalletsOverlayPage_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.WalletFlows.WalletsUserVerificationWithdrawal.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "RESTAPIWebsocketOfficial.model", "react", "@outsystems/runtime-view-js", "tradershub.WalletFlows.WalletsUserVerificationWithdrawal.mvc$model", "tradershub.WalletFlows.WalletsUserVerificationWithdrawal.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.MainLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.WalletBlocks.WalletsOverlayPage.mvc$view", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_bd2236af041a218c8fde06ca0065cfd9Structure", "tradershub.controller$SendGetSetting", "RESTAPIWebsocketOfficial.model$ST_b5532fbd5672db40752d556a46e96eaeStructure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$VerifyEmail"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, RESTAPIWebsocketOfficialModel, React, OSView, tradershub_WalletFlows_WalletsUserVerificationWithdrawal_mvc_model, tradershub_WalletFlows_WalletsUserVerificationWithdrawal_mvc_controller, tradershubClientVariables, tradershub_Layouts_MainLayout_mvc_view, OSWidgets, tradershub_WalletBlocks_WalletsOverlayPage_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "WalletFlows.WalletsUserVerificationWithdrawal";
        }

        static getAttributes() {
            return {
                codeFunction: "WalletsUserVerificationWithdrawal",
                functionKey: "2baa4064-11b7-4a6c-93a0-c28329db64fe",
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
            return [tradershub_Layouts_MainLayout_mvc_view, tradershub_WalletBlocks_WalletsOverlayPage_mvc_view];
        }

        get modelFactory() {
            return tradershub_WalletFlows_WalletsUserVerificationWithdrawal_mvc_model;
        }

        get controllerFactory() {
            return tradershub_WalletFlows_WalletsUserVerificationWithdrawal_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("ZECqK7cRbEqToMKDKdtk_g#Title", "WalletsUserVerificationWithdrawal");
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
                    ActiveTab: 3
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
                        return [React.createElement(tradershub_WalletBlocks_WalletsOverlayPage_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                PageTitle: "Withdraw",
                                HideBackButton: true,
                                HideWalletHeader: false
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
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                walletOverlayPageContent: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "display-flex flex-direction-column justify-content-center align-items-center full-width gap-m",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "2"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Image, {
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.Wallets_user_verification.svg"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "display-flex flex-direction-column gap-s text-align-center",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        style: model.getCachedValue(idService.getId("bhEAekWznEu_tgMpgMiy7A.Style"), function() {
                                            return ("font-bold " + ((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut) ? ("heading5") : ("heading4")));
                                        }),
                                        text: [$text(getTranslation("bhEAekWznEu_tgMpgMiy7A#Value", "Confirm your identity to make a withdrawal"))],
                                        _idProps: {
                                            service: idService,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), $text(getTranslation("L7Jue7DdRke6vhvwuAbF6g#Value", "To confirm that it’s you making the withdrawal request, we will email you a verification link."))), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: model.getCachedValue(idService.getId("l7eaxGYMjkqNiofa5_BZ6w.Style"), function() {
                                            return ("display-flex gap-s " + ((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut) ? ("flex-direction-row") : ("flex-direction-column full-width")));
                                        }),
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Button, {
                                        enabled: true,
                                        gridProperties: {
                                            marginLeft: "0"
                                        },
                                        isDefault: false,
                                        onClick: function() {
                                            return Promise.resolve().then(function() {
                                                var eventHandlerContext = callContext.clone();
                                                return controller.sendEmailOnClick$Action(controller.callContext(eventHandlerContext));
                                            });;
                                        },
                                        style: model.getCachedValue(idService.getId("4tRygbqinEust6ILZUug+Q.Style"), function() {
                                            return ("btn btn-primary " + ((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut) ? ("") : ("full-width")));
                                        }),
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "font-size: 14px;"
                                        },
                                        text: [$text(getTranslation("cId6qicaTEiKqrbRcL2VhQ#Value", "Send Email"))],
                                        _idProps: {
                                            service: idService,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))))];
                                })
                            },
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
define("tradershub.WalletFlows.WalletsUserVerificationWithdrawal.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "RESTAPIWebsocketOfficial.model", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.WalletFlows.WalletsUserVerificationWithdrawal.mvc$translationsResources", "tradershub.WalletFlows.controller", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_bd2236af041a218c8fde06ca0065cfd9Structure", "tradershub.controller$SendGetSetting", "RESTAPIWebsocketOfficial.model$ST_b5532fbd5672db40752d556a46e96eaeStructure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$VerifyEmail"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, RESTAPIWebsocketOfficialModel, tradershubLanguageResources, tradershubClientVariables, tradershub_WalletFlows_WalletsUserVerificationWithdrawal_mvc_TranslationsResources, tradershub_WalletFlowsController) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, tradershub_WalletFlows_WalletsUserVerificationWithdrawal_mvc_TranslationsResources);
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
            get _sendEmailOnClick$Action() {
                if (!(this.hasOwnProperty("__sendEmailOnClick$Action"))) {
                    this.__sendEmailOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SendEmailOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SendEmailOnClick");
                                span.setAttribute("outsystems.function.key", "ec47b6fd-a134-48c3-be96-d3f2ef1eb6c1");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("SendEmailOnClick");
                                callContext = controller.callContext(callContext);
                                var sendGetSettingVar = new OS.DataTypes.VariableHolder();
                                var verifyEmailVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: SendGetSetting
                                    model.flush();
                                    return tradershubController.default.sendGetSetting$Action(callContext).then(function(value) {
                                        sendGetSettingVar.value = value;
                                    }).then(function() {
                                        // SignupEmail = SendGetSetting.GetSettingResponse.Email
                                        tradershubClientVariables.setSignupEmail(sendGetSettingVar.value.getSettingResponseOut.emailAttr);
                                        // Execute Action: VerifyEmail
                                        model.flush();
                                        return tradershubController.default.verifyEmail$Action("payment_withdraw", tradershubClientVariables.getSignupEmail(), callContext).then(function(value) {
                                            verifyEmailVar.value = value;
                                        });
                                    }).then(function() {
                                        if ((verifyEmailVar.value.isErrorOut)) {
                                            // Destination: /tradershub/WalletsEmailFailedVerificationWithdrawal
                                            return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "wallets/withdrawal/failed-verification/:Email?", {
                                                Email: OS.DataConversion.ServerDataConverter.to(sendGetSettingVar.value.getSettingResponseOut.emailAttr, OS.DataTypes.DataTypes.Email)
                                            }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                        } else {
                                            // Destination: /tradershub/WalletEmailWithdrawal
                                            return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "wallets/withdrawal/email-verification-confirmation", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
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

                return this.__sendEmailOnClick$Action;
            }
            set _sendEmailOnClick$Action(value) {
                this.__sendEmailOnClick$Action = value;
            }


            sendEmailOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SendEmailOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SendEmailOnClick");
                        span.setAttribute("outsystems.function.key", "ec47b6fd-a134-48c3-be96-d3f2ef1eb6c1");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._sendEmailOnClick$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
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
                        return tradershub_WalletFlowsController.default.handleError(ex, this.callContext());
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


define("tradershub.WalletFlows.WalletsUserVerificationWithdrawal.mvc$translationsResources.fr-FR", [], function() {
    return {
        "cId6qicaTEiKqrbRcL2VhQ#Value": "Envoyer un e-mail",
        "L7Jue7DdRke6vhvwuAbF6g#Value": "Pour confirmer que c\'est vous qui faites la demande de retrait, nous vous enverrons par e-mail un lien de vérification.",
        "bhEAekWznEu_tgMpgMiy7A#Value": "Confirmez votre identité pour effectuer un retrait"
    };
});

define("tradershub.WalletFlows.WalletsUserVerificationWithdrawal.mvc$translationsResources", ["exports", "tradershub.WalletFlows.WalletsUserVerificationWithdrawal.mvc$translationsResources.fr-FR"], function(exports, tradershub_WalletFlows_WalletsUserVerificationWithdrawal_mvc_translationsResources_frFR) {
    return {
        "fr-FR": {
            "translations": tradershub_WalletFlows_WalletsUserVerificationWithdrawal_mvc_translationsResources_frFR,
            "isRTL": false
        }
    };
});