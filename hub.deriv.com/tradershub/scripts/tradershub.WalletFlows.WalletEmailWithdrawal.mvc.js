define("tradershub.WalletFlows.WalletEmailWithdrawal.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.controller", "RESTAPIWebsocketOfficial.model", "tradershub.controller", "tradershub.Layouts.MainLayout.mvc$model", "tradershub.WalletBlocks.WalletOverlayPage.mvc$model", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "RESTAPIWebsocketOfficial.model$ST_b5532fbd5672db40752d556a46e96eaeStructure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$VerifyEmail"], function(OSRuntimeCore, tradershubModel, OutSystemsUIController, RESTAPIWebsocketOfficialModel, tradershubController, tradershub_Layouts_MainLayout_mvcModel, tradershub_WalletBlocks_WalletOverlayPage_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Email", "emailIn", "Email", true, false, OS.DataTypes.DataTypes.Email, function() {
                        return "";
                    }, false),
                    this.attr("_emailInDataFetchStatus", "_emailInDataFetchStatus", "_emailInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ((Model._hasValidationWidgetsValue === undefined)) {
                Model._hasValidationWidgetsValue = (tradershub_Layouts_MainLayout_mvcModel.hasValidationWidgets || tradershub_WalletBlocks_WalletOverlayPage_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {
            if ("Email" in inputs) {
                this.variables.emailIn = OS.DataConversion.ServerDataConverter.from(inputs.Email, OS.DataTypes.DataTypes.Email);
            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.WalletFlows.WalletEmailWithdrawal.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "RESTAPIWebsocketOfficial.model", "react", "@outsystems/runtime-view-js", "tradershub.WalletFlows.WalletEmailWithdrawal.mvc$model", "tradershub.WalletFlows.WalletEmailWithdrawal.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.MainLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.WalletBlocks.WalletOverlayPage.mvc$view", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "RESTAPIWebsocketOfficial.model$ST_b5532fbd5672db40752d556a46e96eaeStructure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$VerifyEmail"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, RESTAPIWebsocketOfficialModel, React, OSView, tradershub_WalletFlows_WalletEmailWithdrawal_mvc_model, tradershub_WalletFlows_WalletEmailWithdrawal_mvc_controller, tradershubClientVariables, tradershub_Layouts_MainLayout_mvc_view, OSWidgets, tradershub_WalletBlocks_WalletOverlayPage_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "WalletFlows.WalletEmailWithdrawal";
        }

        static getAttributes() {
            return {
                codeFunction: "WalletEmailWithdrawal",
                functionKey: "7be9d81c-fb20-4385-b04b-eeb8c2b2bc72",
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
            return [tradershub_Layouts_MainLayout_mvc_view, tradershub_WalletBlocks_WalletOverlayPage_mvc_view];
        }

        get modelFactory() {
            return tradershub_WalletFlows_WalletEmailWithdrawal_mvc_model;
        }

        get controllerFactory() {
            return tradershub_WalletFlows_WalletEmailWithdrawal_mvc_controller;
        }

        get title() {


            return "WalletEmailWithdrawal";
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
                        return [React.createElement(tradershub_WalletBlocks_WalletOverlayPage_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                HideWalletHeader: false,
                                HideBackButton: true,
                                PageTitle: "Withdraw"
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
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.Wallets_email_open.svg"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Expression, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        style: model.getCachedValue(idService.getId("Iz5nyG_jGkeyZHnfgrn1yw.Style"), function() {
                                            return ("font-bold text-align-center " + ((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut) ? ("heading5") : ("heading4")));
                                        }),
                                        value: ("We’ve sent a verification link to " + model.variables.emailIn),
                                        _idProps: {
                                            service: idService,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "border-radius: 8px;"
                                        },
                                        style: model.getCachedValue(idService.getId("DisclaimerMessage.Style"), function() {
                                            return ("display-flex align-items-flex-start gap-s background-info-light full-width " + ((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut) ? ("padding-base") : ("padding-s")));
                                        }),
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "DisclaimerMessage"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Image, {
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_blue.svg"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "display-flex flex-direction-column",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "font-weight: normal;"
                                        },
                                        style: model.getCachedValue(idService.getId("Rj9fSnF3Ek2PIFSLbXxjGw.Style"), function() {
                                            return ((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut) ? ("font-size-s") : ("font-size-xs"));
                                        }),
                                        text: ["Didn\'t get an email? "],
                                        _idProps: {
                                            service: idService,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.AdvancedHtml, {
                                        tag: "ul",
                                        _idProps: {
                                            service: idService,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.AdvancedHtml, {
                                        tag: "li",
                                        _idProps: {
                                            service: idService,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        style: model.getCachedValue(idService.getId("Dv0LQ+_vjEuyrhPF3OPU3A.Style"), function() {
                                            return ((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut) ? ("font-size-s") : ("font-size-xs"));
                                        }),
                                        text: ["Make sure you’ve entered your email correctly."],
                                        _idProps: {
                                            service: idService,
                                            uuid: "11"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })), React.createElement(OSWidgets.AdvancedHtml, {
                                        tag: "li",
                                        _idProps: {
                                            service: idService,
                                            uuid: "12"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        style: model.getCachedValue(idService.getId("bhP43Gmcg02BjGIpFLA4Ww.Style"), function() {
                                            return ((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut) ? ("font-size-s") : ("font-size-xs"));
                                        }),
                                        text: ["Check your spam folder."],
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
                                        style: model.getCachedValue(idService.getId("_MVQsNtRUE2otk9_J0pw4w.Style"), function() {
                                            return ((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut) ? ("font-size-s") : ("font-size-xs"));
                                        }),
                                        text: ["Make sure the email isn’t blocked by firewalls or filters."],
                                        _idProps: {
                                            service: idService,
                                            uuid: "15"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))))), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: true,
                                        style: model.getCachedValue(idService.getId("zYxVMrX1u0e3gQ+MYurPzA.Style"), function() {
                                            return ("display-flex gap-s " + ((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut) ? ("flex-direction-row") : ("flex-direction-column full-width")));
                                        }),
                                        visible: model.getCachedValue(idService.getId("zYxVMrX1u0e3gQ+MYurPzA.Visible"), function() {
                                            return OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut;
                                        }),
                                        _idProps: {
                                            service: idService,
                                            uuid: "16"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Button, {
                                        enabled: true,
                                        isDefault: false,
                                        onClick: function() {
                                            return Promise.resolve().then(function() {
                                                var eventHandlerContext = callContext.clone();
                                                return controller.resendEmailOnClick$Action(model.variables.emailIn, controller.callContext(eventHandlerContext));
                                            });;
                                        },
                                        style: "btn btn-large",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "17"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "font-size: 14px;"
                                        },
                                        text: ["Resend email"],
                                        _idProps: {
                                            service: idService,
                                            uuid: "18"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))))];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.emailIn)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.emailIn)]
            }));
        }
    }

    return View;
});
define("tradershub.WalletFlows.WalletEmailWithdrawal.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "RESTAPIWebsocketOfficial.model", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.WalletFlows.controller", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "RESTAPIWebsocketOfficial.model$ST_b5532fbd5672db40752d556a46e96eaeStructure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$VerifyEmail"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, RESTAPIWebsocketOfficialModel, tradershubLanguageResources, tradershubClientVariables, tradershub_WalletFlowsController) {
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
            get _resendEmailOnClick$Action() {
                if (!(this.hasOwnProperty("__resendEmailOnClick$Action"))) {
                    this.__resendEmailOnClick$Action = function(email2In, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ResendEmailOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ResendEmailOnClick");
                                span.setAttribute("outsystems.function.key", "76fc34a8-d749-4b98-9318-1123078146b7");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("ResendEmailOnClick");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.WalletFlows.WalletEmailWithdrawal.ResendEmailOnClick$vars"))());
                                vars.value.email2InLocal = email2In;
                                var verifyEmailVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: VerifyEmail
                                    model.flush();
                                    return tradershubController.default.verifyEmail$Action("payment_withdraw", model.variables.emailIn, callContext).then(function(value) {
                                        verifyEmailVar.value = value;
                                    }).then(function() {
                                        if ((verifyEmailVar.value.isErrorOut)) {
                                            OS.FeedbackMessageService.showFeedbackMessage("Please try again.", /*Error*/ 3);
                                        } else {
                                            OS.FeedbackMessageService.showFeedbackMessage("Email sent.", /*Success*/ 1);
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

                return this.__resendEmailOnClick$Action;
            }
            set _resendEmailOnClick$Action(value) {
                this.__resendEmailOnClick$Action = value;
            }


            resendEmailOnClick$Action(email2In, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ResendEmailOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ResendEmailOnClick");
                        span.setAttribute("outsystems.function.key", "76fc34a8-d749-4b98-9318-1123078146b7");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._resendEmailOnClick$Action, callContext, email2In);
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
        Controller.registerVariableGroupType("tradershub.WalletFlows.WalletEmailWithdrawal.ResendEmailOnClick$vars", [{
            name: "Email2",
            attrName: "email2InLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Email,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});