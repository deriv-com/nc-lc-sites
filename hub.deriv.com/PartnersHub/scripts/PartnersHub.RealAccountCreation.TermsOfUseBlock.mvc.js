define("PartnersHub.RealAccountCreation.TermsOfUseBlock.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.model$ST_c68ca2b5352eede25365718c29283667Structure", "PartnersHub.controller$SendTncApproval", "PartnersHub.controller$UseDevice"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IsTermsOfUseButtonDisabled", "isTermsOfUseButtonDisabledVar", "IsTermsOfUseButtonDisabled", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, false),
                    this.attr("PEPCheckbox", "pEPCheckboxVar", "PEPCheckbox", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("AffiliateTermandConditions", "affiliateTermandConditionsVar", "AffiliateTermandConditions", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("ConsentPromotional", "consentPromotionalVar", "ConsentPromotional", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("TermsandConditions", "termsandConditionsVar", "TermsandConditions", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
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
                Checkbox1: OS.Model.ValidationWidgetRecord,
                Checkbox2: OS.Model.ValidationWidgetRecord,
                Checkbox3: OS.Model.ValidationWidgetRecord,
                Checkbox4: OS.Model.ValidationWidgetRecord
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

define("PartnersHub.RealAccountCreation.TermsOfUseBlock.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreation.TermsOfUseBlock.mvc$model", "PartnersHub.RealAccountCreation.TermsOfUseBlock.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "CustomComponentsOfficial.ButtonVariants.PrimaryButton.mvc$view", "PartnersHub.model$ST_c68ca2b5352eede25365718c29283667Structure", "PartnersHub.controller$SendTncApproval", "PartnersHub.controller$UseDevice"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_RealAccountCreation_TermsOfUseBlock_mvc_model, PartnersHub_RealAccountCreation_TermsOfUseBlock_mvc_controller, PartnersHubClientVariables, OSWidgets, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreation.TermsOfUseBlock";
        }

        static getAttributes() {
            return {
                codeFunction: "TermsOfUseBlock",
                functionKey: "c48a262e-b895-4931-b746-4935f2a7b9d4",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.RealAccountCreation.TermsOfUseBlock.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreation_TermsOfUseBlock_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreation_TermsOfUseBlock_mvc_controller;
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
                    style: "max-width: 800px;"
                },
                style: "display-flex flex-direction-column gap-m",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 14px;"
                },
                text: [$text(getTranslation("tJXp+wAnrkO4VEMtWiWhSw#Value", "By pressing \"Create account\", I confirm the following:"))],
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "align-items: center; display: flex;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Checkbox, {
                _validationProps: {
                    validationService: validationService
                },
                enabled: true,
                onChange: function() {
                    var eventHandlerContext = callContext.clone();
                    controller.termsOfUseOnChange$Action(controller.callContext(eventHandlerContext));

                    ;
                },
                style: "checkbox",
                variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, model.variables.pEPCheckboxVar, function(value) {
                    model.variables.pEPCheckboxVar = value;
                }),
                _idProps: {
                    service: idService,
                    name: "Checkbox1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 14px; margin-left: 10px;"
                },
                text: [$text(getTranslation("_BN_vk8_EU+buE+NaAlSFQ#Value", "I am not a politically exposed person (PEP)."))],
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "align-items: center; display: flex;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Checkbox, {
                _validationProps: {
                    validationService: validationService
                },
                enabled: true,
                gridProperties: {
                    marginLeft: "0"
                },
                onChange: function() {
                    var eventHandlerContext = callContext.clone();
                    controller.termsOfUseOnChange$Action(controller.callContext(eventHandlerContext));

                    ;
                },
                style: "checkbox",
                variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, model.variables.termsandConditionsVar, function(value) {
                    model.variables.termsandConditionsVar = value;
                }),
                _idProps: {
                    service: idService,
                    name: "Checkbox2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                gridProperties: {
                    marginLeft: "10px"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "8"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Label, {
                extendedProperties: {
                    style: "---comment-3: /* Phone / Body / S */; ---comment-8: /* 150% */; color: var(--Neutral-Neutral-10, #101213); font-feature-settings: \'clig\' off, \'liga\' off; font-size: 14px; font-style: normal; font-weight: 400; line-height: 21px;"
                },
                _idProps: {
                    service: idService,
                    uuid: "9"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 14px;"
                },
                text: [$text(getTranslation("fScee3X5XE6skZ6GxRKQeg#Value", "I have read and accepted"))],
                _idProps: {
                    service: idService,
                    uuid: "10"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Link, {
                enabled: true,
                extendedProperties: {
                    target: "_blank",
                    rel: "noopener",
                    style: "color: black; font-weight: bold;"
                },
                gridProperties: {
                    marginLeft: "5px"
                },
                transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                url: OS.Navigation.generateScreenURL("https://docs.deriv.com/tnc/general-terms.pdf", {}),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "11"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("hr0t6KEnski7461kHfc6pA#Value", "Deriv’s terms and conditions for clients."))))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "align-items: center; display: flex;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "12"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Checkbox, {
                _validationProps: {
                    validationService: validationService
                },
                enabled: true,
                gridProperties: {
                    marginLeft: "0"
                },
                onChange: function() {
                    var eventHandlerContext = callContext.clone();
                    controller.termsOfUseOnChange$Action(controller.callContext(eventHandlerContext));

                    ;
                },
                style: "checkbox",
                variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, model.variables.affiliateTermandConditionsVar, function(value) {
                    model.variables.affiliateTermandConditionsVar = value;
                }),
                _idProps: {
                    service: idService,
                    name: "Checkbox3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                gridProperties: {
                    marginLeft: "10px"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "14"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Label, {
                extendedProperties: {
                    style: "---comment-3: /* Phone / Body / S */; ---comment-8: /* 150% */; color: var(--Neutral-Neutral-10, #101213); font-feature-settings: \'clig\' off, \'liga\' off; font-size: 14px; font-style: normal; font-weight: 400; line-height: 21px;"
                },
                _idProps: {
                    service: idService,
                    uuid: "15"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 14px;"
                },
                text: [$text(getTranslation("iwaZ4r+2UkuYeFi3sps7Yg#Value", "I have read and accepted"))],
                _idProps: {
                    service: idService,
                    uuid: "16"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Link, {
                enabled: true,
                extendedProperties: {
                    target: "_blank",
                    rel: "noopener",
                    style: "color: black; font-weight: bold;"
                },
                gridProperties: {
                    marginLeft: "5px"
                },
                transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                url: OS.Navigation.generateScreenURL("https://docs.deriv.com/tnc/business-partners-general-terms.pdf", {}),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "17"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("uneBl4ShEU25UAam2EZ0Hw#Value", "Deriv\'s General terms for business partners"))), $text(getTranslation("B6xJd08tSUmjsAC86fR85w#Value", " and ")), React.createElement(OSWidgets.Link, {
                enabled: true,
                extendedProperties: {
                    target: "_blank",
                    rel: "noopener",
                    style: "color: black; font-weight: bold;"
                },
                transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                url: OS.Navigation.generateScreenURL("https://docs.deriv.com/tnc/business-partners-affiliates-and-introducing-brokers-row.pdf", {}),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "18"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("vb4ytmHevkOJGgR2XauIDg#Value", "Affiliates and introducing brokers’ terms and conditions."))))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "align-items: center; display: flex;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "19"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Checkbox, {
                _validationProps: {
                    validationService: validationService
                },
                enabled: true,
                gridProperties: {
                    marginLeft: "0"
                },
                onChange: function() {
                    var eventHandlerContext = callContext.clone();
                    controller.termsOfUseOnChange$Action(controller.callContext(eventHandlerContext));

                    ;
                },
                style: "checkbox",
                variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, model.variables.consentPromotionalVar, function(value) {
                    model.variables.consentPromotionalVar = value;
                }),
                _idProps: {
                    service: idService,
                    name: "Checkbox4"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 14px; margin-left: 10px;"
                },
                text: [$text(getTranslation("Lci8ZHjR1UieV4T+IxrfqQ#Value", "I consent to receive promotional materials and notifications regarding Deriv partnership programme."))],
                _idProps: {
                    service: idService,
                    uuid: "21"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "margin-top: 24px;"
                },
                style: model.getCachedValue(idService.getId("Qg6ZsJpn6k2gL8gLaGBVrg.Style"), function() {
                    return ((!(PartnersHubClientVariables.getIsMobile())) ? ("tnc-button-container tnc-button-container__desktop") : (""));
                }, function() {
                    return PartnersHubClientVariables.getIsMobile();
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "22"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    borderRadius: "100px",
                    isLoading: PartnersHubClientVariables.getisRealAccountCreationLoading(),
                    Width: model.getCachedValue(idService.getId("Ds+LfEl0M0yaFIbuTMQ32g.Width"), function() {
                        return ((PartnersHubClientVariables.getIsMobile()) ? ("100%") : ("fit-content"));
                    }, function() {
                        return PartnersHubClientVariables.getIsMobile();
                    }),
                    class: model.getCachedValue(idService.getId("Ds+LfEl0M0yaFIbuTMQ32g.class"), function() {
                        return ((model.variables.isTermsOfUseButtonDisabledVar) ? ("primary-button-disabled") : ("primary-button"));
                    }, function() {
                        return model.variables.isTermsOfUseButtonDisabledVar;
                    }),
                    enabled: !(model.variables.isTermsOfUseButtonDisabledVar),
                    title: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("urccu1lLRk6cMunZdR6JzQ#Value.-1386031319.1", "Create account")
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onClick$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return controller.termsOfUseButtonAction$Action(controller.callContext(eventHandlerContext));
                        });;
                    }
                },
                _validationProps: {
                    validationService: validationService
                },
                _idProps: {
                    service: idService,
                    uuid: "23",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            })));
        }
    }

    return View;
});
define("PartnersHub.RealAccountCreation.TermsOfUseBlock.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreation.TermsOfUseBlock.mvc$translationsResources", "PartnersHub.model$ST_c68ca2b5352eede25365718c29283667Structure", "PartnersHub.controller$SendTncApproval", "PartnersHub.controller$UseDevice"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreation_TermsOfUseBlock_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_RealAccountCreation_TermsOfUseBlock_mvc_TranslationsResources);
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
            get _termsOfUseOnChange$Action() {
                if (!(this.hasOwnProperty("__termsOfUseOnChange$Action"))) {
                    this.__termsOfUseOnChange$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("TermsOfUseOnChange", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "TermsOfUseOnChange");
                                span.setAttribute("outsystems.function.key", "0f966bd8-cf0b-4cbd-8f40-31e6bc998363");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("TermsOfUseOnChange");
                                callContext = controller.callContext(callContext);
                                // IsTermsOfUseButtonDisabled = notPEPCheckbox and AffiliateTermandConditions and ConsentPromotional and TermsandConditions
                                model.variables.isTermsOfUseButtonDisabledVar = !((((model.variables.pEPCheckboxVar && model.variables.affiliateTermandConditionsVar) && model.variables.consentPromotionalVar) && model.variables.termsandConditionsVar));
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__termsOfUseOnChange$Action;
            }
            set _termsOfUseOnChange$Action(value) {
                this.__termsOfUseOnChange$Action = value;
            }

            get _termsOfUseButtonAction$Action() {
                if (!(this.hasOwnProperty("__termsOfUseButtonAction$Action"))) {
                    this.__termsOfUseButtonAction$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("TermsOfUseButtonAction", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "TermsOfUseButtonAction");
                                span.setAttribute("outsystems.function.key", "2cec7942-bf4d-4214-9abc-c421d4d43a8b");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("TermsOfUseButtonAction");
                                callContext = controller.callContext(callContext);
                                var sendTncApprovalVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    return OS.Flow.executeSequence(function() {
                                        if ((!(model.variables.isTermsOfUseButtonDisabledVar))) {
                                            // isRealAccountCreationLoading = True
                                            PartnersHubClientVariables.setisRealAccountCreationLoading(true);
                                            // Execute Action: SendTncApproval
                                            model.flush();
                                            return PartnersHubController.default.sendTncApproval$Action(callContext).then(function(value) {
                                                sendTncApprovalVar.value = value;
                                            }).then(function() {
                                                // isRealAccountCreationLoading = False
                                                PartnersHubClientVariables.setisRealAccountCreationLoading(false);
                                            });
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

                return this.__termsOfUseButtonAction$Action;
            }
            set _termsOfUseButtonAction$Action(value) {
                this.__termsOfUseButtonAction$Action = value;
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
                                span.setAttribute("outsystems.function.key", "99594184-1b59-4db4-8a02-75441204ee40");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                // Execute Action: UseDevice
                                PartnersHubController.default.useDevice$Action(callContext);
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


            termsOfUseOnChange$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("TermsOfUseOnChange__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "TermsOfUseOnChange");
                        span.setAttribute("outsystems.function.key", "0f966bd8-cf0b-4cbd-8f40-31e6bc998363");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._termsOfUseOnChange$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            termsOfUseButtonAction$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("TermsOfUseButtonAction__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "TermsOfUseButtonAction");
                        span.setAttribute("outsystems.function.key", "2cec7942-bf4d-4214-9abc-c421d4d43a8b");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._termsOfUseButtonAction$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "99594184-1b59-4db4-8a02-75441204ee40");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
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
                    this._onInitializeEventHandler = null;
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


define("PartnersHub.RealAccountCreation.TermsOfUseBlock.mvc$translationsResources.ar-001", [], function() {
    return {
        "urccu1lLRk6cMunZdR6JzQ#Value.-1386031319.1": "إنشاء حساب",
        "Lci8ZHjR1UieV4T+IxrfqQ#Value": "أوافق على تلقي المواد الترويجية والإشعارات المتعلقة ببرنامج الشراكة مع Deriv.",
        "vb4ytmHevkOJGgR2XauIDg#Value": "الشروط والأحكام للشركاء التابعين والوسطاء المعرفين",
        "B6xJd08tSUmjsAC86fR85w#Value": "و",
        "uneBl4ShEU25UAam2EZ0Hw#Value": "الشروط العامة لشركاء Deriv",
        "iwaZ4r+2UkuYeFi3sps7Yg#Value": "لقد قمت بالقراءة والموافقة",
        "hr0t6KEnski7461kHfc6pA#Value": "شروط وأحكام Deriv للعملاء.",
        "fScee3X5XE6skZ6GxRKQeg#Value": "لقد قمت بالقراءة والموافقة",
        "_BN_vk8_EU+buE+NaAlSFQ#Value": "أنا لست شخصًا مكشوفًا سياسيًا (PEP).",
        "tJXp+wAnrkO4VEMtWiWhSw#Value": "بالضغط على \"إنشاء حساب\"، أؤكد ما يلي:"
    };
});

define("PartnersHub.RealAccountCreation.TermsOfUseBlock.mvc$translationsResources.de-DE", [], function() {
    return {
        "urccu1lLRk6cMunZdR6JzQ#Value.-1386031319.1": "Konto erstellen",
        "Lci8ZHjR1UieV4T+IxrfqQ#Value": "Ich stimme zu, Werbematerialien und Benachrichtigungen über das Deriv-Partnerschaftsprogramm zu erhalten.",
        "vb4ytmHevkOJGgR2XauIDg#Value": "Geschäftsbedingungen für Affiliates und einführende Broker",
        "B6xJd08tSUmjsAC86fR85w#Value": "und",
        "uneBl4ShEU25UAam2EZ0Hw#Value": "Allgemeine Geschäftsbedingungen für Geschäftspartner von Deriv",
        "iwaZ4r+2UkuYeFi3sps7Yg#Value": "Ich habe gelesen und akzeptiert",
        "hr0t6KEnski7461kHfc6pA#Value": "Die Allgemeinen Geschäftsbedingungen von Deriv für Kunden.",
        "fScee3X5XE6skZ6GxRKQeg#Value": "Ich habe gelesen und akzeptiert",
        "_BN_vk8_EU+buE+NaAlSFQ#Value": "Ich bin keine politisch exponierte Person (PEP).",
        "tJXp+wAnrkO4VEMtWiWhSw#Value": "Durch Drücken von \"Konto erstellen\" bestätige ich Folgendes:"
    };
});

define("PartnersHub.RealAccountCreation.TermsOfUseBlock.mvc$translationsResources.es-ES", [], function() {
    return {
        "urccu1lLRk6cMunZdR6JzQ#Value.-1386031319.1": "crear cuenta",
        "Lci8ZHjR1UieV4T+IxrfqQ#Value": "Consiento en recibir materiales promocionales y notificaciones sobre el programa de asociación de Deriv.",
        "vb4ytmHevkOJGgR2XauIDg#Value": "Términos y condiciones para afiliados e introductores de bróker.",
        "B6xJd08tSUmjsAC86fR85w#Value": "y",
        "uneBl4ShEU25UAam2EZ0Hw#Value": "Términos generales de Deriv para socios comerciales",
        "iwaZ4r+2UkuYeFi3sps7Yg#Value": "He leído y aceptado",
        "hr0t6KEnski7461kHfc6pA#Value": "Términos y condiciones de Deriv para clientes.",
        "fScee3X5XE6skZ6GxRKQeg#Value": "He leído y aceptado",
        "_BN_vk8_EU+buE+NaAlSFQ#Value": "No soy una persona políticamente expuesta (PEP).",
        "tJXp+wAnrkO4VEMtWiWhSw#Value": "Al presionar \"Crear cuenta\", confirmo lo siguiente:"
    };
});

define("PartnersHub.RealAccountCreation.TermsOfUseBlock.mvc$translationsResources.fr-FR", [], function() {
    return {
        "urccu1lLRk6cMunZdR6JzQ#Value.-1386031319.1": "créer un compte",
        "Lci8ZHjR1UieV4T+IxrfqQ#Value": "Je consens à recevoir des supports promotionnels et des notifications concernant le programme de partenariat Deriv.",
        "vb4ytmHevkOJGgR2XauIDg#Value": "Conditions générales pour les affiliés et les brokers introducteurs.",
        "B6xJd08tSUmjsAC86fR85w#Value": "et",
        "uneBl4ShEU25UAam2EZ0Hw#Value": "Conditions générales de Deriv pour les partenaires commerciaux",
        "iwaZ4r+2UkuYeFi3sps7Yg#Value": "J\'ai lu et accepté",
        "hr0t6KEnski7461kHfc6pA#Value": "Conditions générales de Deriv pour les clients.",
        "fScee3X5XE6skZ6GxRKQeg#Value": "J\'ai lu et accepté",
        "_BN_vk8_EU+buE+NaAlSFQ#Value": "Je ne suis pas une personne politiquement exposée (PEP).",
        "tJXp+wAnrkO4VEMtWiWhSw#Value": "En appuyant sur \"Créer un compte\", je confirme ce qui suit :"
    };
});

define("PartnersHub.RealAccountCreation.TermsOfUseBlock.mvc$translationsResources.it-IT", [], function() {
    return {
        "urccu1lLRk6cMunZdR6JzQ#Value.-1386031319.1": "crea account",
        "Lci8ZHjR1UieV4T+IxrfqQ#Value": "Acconsento a ricevere materiali promozionali e notifiche riguardanti il programma di partnership Deriv.",
        "vb4ytmHevkOJGgR2XauIDg#Value": "Termini e condizioni per affiliati e broker introduttori.",
        "B6xJd08tSUmjsAC86fR85w#Value": "e",
        "uneBl4ShEU25UAam2EZ0Hw#Value": "Termini generali di Deriv per partner commerciali",
        "iwaZ4r+2UkuYeFi3sps7Yg#Value": "Ho letto e accettato",
        "hr0t6KEnski7461kHfc6pA#Value": "Termini e condizioni di Deriv per i clienti.",
        "fScee3X5XE6skZ6GxRKQeg#Value": "Ho letto e accettato",
        "_BN_vk8_EU+buE+NaAlSFQ#Value": "Non sono una persona politicamente esposta (PEP).",
        "tJXp+wAnrkO4VEMtWiWhSw#Value": "Premendo \"Crea account\", confermo quanto segue:"
    };
});

define("PartnersHub.RealAccountCreation.TermsOfUseBlock.mvc$translationsResources.pl-PL", [], function() {
    return {
        "urccu1lLRk6cMunZdR6JzQ#Value.-1386031319.1": "utwórz konto",
        "Lci8ZHjR1UieV4T+IxrfqQ#Value": "Wyrażam zgodę na otrzymywanie materiałów promocyjnych i powiadomień dotyczących programu partnerskiego Deriv.",
        "vb4ytmHevkOJGgR2XauIDg#Value": "Warunki i zasady dla partnerów i brokerów wprowadzających.",
        "B6xJd08tSUmjsAC86fR85w#Value": "i",
        "uneBl4ShEU25UAam2EZ0Hw#Value": "Ogólny regulamin Deriv dla partnerów biznesowych",
        "iwaZ4r+2UkuYeFi3sps7Yg#Value": "Przeczytałem i akceptuję",
        "hr0t6KEnski7461kHfc6pA#Value": "Regulamin Deriv dla klientów.",
        "fScee3X5XE6skZ6GxRKQeg#Value": "Przeczytałem i akceptuję",
        "_BN_vk8_EU+buE+NaAlSFQ#Value": "Nie jestem osobą politcznie eksponowaną (PEP).",
        "tJXp+wAnrkO4VEMtWiWhSw#Value": "Naciskając „Utwórz konto”, potwierdzam, że:"
    };
});

define("PartnersHub.RealAccountCreation.TermsOfUseBlock.mvc$translationsResources.pt-PT", [], function() {
    return {
        "urccu1lLRk6cMunZdR6JzQ#Value.-1386031319.1": "Criar conta",
        "Lci8ZHjR1UieV4T+IxrfqQ#Value": "Concordo em receber materiais promocionais e notificações sobre o programa de parceria Deriv.",
        "vb4ytmHevkOJGgR2XauIDg#Value": "Termos e condições para Afiliados e Introducing Brokers.",
        "B6xJd08tSUmjsAC86fR85w#Value": "e",
        "uneBl4ShEU25UAam2EZ0Hw#Value": "Termos gerais da Deriv para parceiros",
        "iwaZ4r+2UkuYeFi3sps7Yg#Value": "Li e aceitei",
        "hr0t6KEnski7461kHfc6pA#Value": "Termos e condições da Deriv para clientes.",
        "fScee3X5XE6skZ6GxRKQeg#Value": "Li e aceitei",
        "_BN_vk8_EU+buE+NaAlSFQ#Value": "Não sou uma pessoa politicamente exposta (PEP).",
        "tJXp+wAnrkO4VEMtWiWhSw#Value": "Ao pressionar \"Criar conta\", confirmo o seguinte:"
    };
});

define("PartnersHub.RealAccountCreation.TermsOfUseBlock.mvc$translationsResources.ru-RU", [], function() {
    return {
        "urccu1lLRk6cMunZdR6JzQ#Value.-1386031319.1": "открыть счет",
        "Lci8ZHjR1UieV4T+IxrfqQ#Value": "Я даю согласие на получение рекламных материалов и уведомлений о программе партнерства Deriv.",
        "vb4ytmHevkOJGgR2XauIDg#Value": "Условия для партнеров и представляющих брокеров.",
        "B6xJd08tSUmjsAC86fR85w#Value": "и",
        "uneBl4ShEU25UAam2EZ0Hw#Value": "Общие условия Deriv для бизнес-партнеров",
        "iwaZ4r+2UkuYeFi3sps7Yg#Value": "Я принимаю",
        "hr0t6KEnski7461kHfc6pA#Value": "Условия и положения Deriv для клиентов.",
        "fScee3X5XE6skZ6GxRKQeg#Value": "Я принимаю",
        "_BN_vk8_EU+buE+NaAlSFQ#Value": "Я не являюсь политически значимой персоной (PEP).",
        "tJXp+wAnrkO4VEMtWiWhSw#Value": "Нажимая \"Создать аккаунт\", я подтверждаю следующее:"
    };
});

define("PartnersHub.RealAccountCreation.TermsOfUseBlock.mvc$translationsResources", ["exports", "PartnersHub.RealAccountCreation.TermsOfUseBlock.mvc$translationsResources.ar-001", "PartnersHub.RealAccountCreation.TermsOfUseBlock.mvc$translationsResources.de-DE", "PartnersHub.RealAccountCreation.TermsOfUseBlock.mvc$translationsResources.es-ES", "PartnersHub.RealAccountCreation.TermsOfUseBlock.mvc$translationsResources.fr-FR", "PartnersHub.RealAccountCreation.TermsOfUseBlock.mvc$translationsResources.it-IT", "PartnersHub.RealAccountCreation.TermsOfUseBlock.mvc$translationsResources.pl-PL", "PartnersHub.RealAccountCreation.TermsOfUseBlock.mvc$translationsResources.pt-PT", "PartnersHub.RealAccountCreation.TermsOfUseBlock.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_RealAccountCreation_TermsOfUseBlock_mvc_translationsResources_ar001, PartnersHub_RealAccountCreation_TermsOfUseBlock_mvc_translationsResources_deDE, PartnersHub_RealAccountCreation_TermsOfUseBlock_mvc_translationsResources_esES, PartnersHub_RealAccountCreation_TermsOfUseBlock_mvc_translationsResources_frFR, PartnersHub_RealAccountCreation_TermsOfUseBlock_mvc_translationsResources_itIT, PartnersHub_RealAccountCreation_TermsOfUseBlock_mvc_translationsResources_plPL, PartnersHub_RealAccountCreation_TermsOfUseBlock_mvc_translationsResources_ptPT, PartnersHub_RealAccountCreation_TermsOfUseBlock_mvc_translationsResources_ruRU) {
    return {
        "ar-001": {
            "translations": PartnersHub_RealAccountCreation_TermsOfUseBlock_mvc_translationsResources_ar001,
            "isRTL": true
        },
        "de-DE": {
            "translations": PartnersHub_RealAccountCreation_TermsOfUseBlock_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_RealAccountCreation_TermsOfUseBlock_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_RealAccountCreation_TermsOfUseBlock_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_RealAccountCreation_TermsOfUseBlock_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_RealAccountCreation_TermsOfUseBlock_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_RealAccountCreation_TermsOfUseBlock_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_RealAccountCreation_TermsOfUseBlock_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});