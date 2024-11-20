define("PartnersHub.RealAccountCreationFlow.TermsOfUseBlock.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.model$ST_c68ca2b5352eede25365718c29283667Structure", "PartnersHub.controller$SendTncApproval"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController) {
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
                    this.attr("TermsandConditions", "termsandConditionsVar", "TermsandConditions", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("AffiliateTermandConditions", "affiliateTermandConditionsVar", "AffiliateTermandConditions", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("ConsentPromotional", "consentPromotionalVar", "ConsentPromotional", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("isMobileLayout", "isMobileLayoutIn", "isMobileLayout", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_isMobileLayoutInDataFetchStatus", "_isMobileLayoutInDataFetchStatus", "_isMobileLayoutInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
        setInputs(inputs) {
            if ("isMobileLayout" in inputs) {
                this.variables.isMobileLayoutIn = inputs.isMobileLayout;
                if ("_isMobileLayoutInDataFetchStatus" in inputs) {
                    this.variables._isMobileLayoutInDataFetchStatus = inputs._isMobileLayoutInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.RealAccountCreationFlow.TermsOfUseBlock.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreationFlow.TermsOfUseBlock.mvc$model", "PartnersHub.RealAccountCreationFlow.TermsOfUseBlock.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "CustomComponentsOfficial.ButtonVariants.PrimaryButton.mvc$view", "PartnersHub.model$ST_c68ca2b5352eede25365718c29283667Structure", "PartnersHub.controller$SendTncApproval"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvc_model, PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvc_controller, PartnersHubClientVariables, OSWidgets, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreationFlow.TermsOfUseBlock";
        }

        static getAttributes() {
            return {
                codeFunction: "TermsOfUseBlock",
                functionKey: "5e3d53aa-9bbb-40cd-9dce-aadb8aa917db",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.RealAccountCreationFlow.TermsOfUseBlock.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvc_controller;
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
                    style: model.getCachedValue(idService.getId("6hk3cyRZ_EOWcmgm8ixiYA.style"), function() {
                        return ((model.variables.isMobileLayoutIn) ? ("\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 16px;\r\n") : ("\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 24px;\r\n"));
                    }, function() {
                        return model.variables.isMobileLayoutIn;
                    })
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: model.getCachedValue(idService.getId("IHhmYv3+_UWQylRGJJQycA.style"), function() {
                        return ((model.variables.isMobileLayoutIn) ? ("margin-top: 8px;") : ("margin-top: 24px;"));
                    }, function() {
                        return model.variables.isMobileLayoutIn;
                    })
                },
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
                text: [$text(getTranslation("rFYmz96HiEWPg06uCEFWdg#Value", "By pressing \"Create account\", I confirm the following:"))],
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
                text: [$text(getTranslation("RLfb3cSw8UaqOgw46uRbbw#Value", "I am not a politically exposed person (PEP)."))],
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
                text: [$text(getTranslation("xhbd6R06F069qBPrmfmluQ#Value", "I have read and accepted"))],
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
            }, $text(getTranslation("4BRK3oZyVUi+KPRCJ4PBGQ#Value", "Deriv’s terms and conditions for clients."))))), React.createElement(OSWidgets.Container, {
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
                text: [$text(getTranslation("YZOevNXwRkiD5NJ9YA7JtQ#Value", "I have read and accepted"))],
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
            }, $text(getTranslation("kHOr63YB0EeIo+eENGyzQQ#Value", "Deriv\'s General terms for business partners"))), $text(getTranslation("tv_vYBYcz0+UfN5UFzWZkA#Value", " and ")), React.createElement(OSWidgets.Link, {
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
            }, $text(getTranslation("u1wyVqIdrUu2AoUzziFrog#Value", "Affiliates and introducing brokers’ terms and conditions."))))), React.createElement(OSWidgets.Container, {
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
                text: [$text(getTranslation("LUFf5NOc9k+rogAz0AOq2g#Value", "I consent to receive promotional materials and notifications regarding Deriv partnership programme."))],
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
                style: model.getCachedValue(idService.getId("JK47o2w430WZurNKW9wLIg.Style"), function() {
                    return ((!(model.variables.isMobileLayoutIn)) ? ("tnc-button-container tnc-button-container__desktop") : (""));
                }, function() {
                    return model.variables.isMobileLayoutIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "22"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isMobileLayoutInDataFetchStatus)
            }, React.createElement(CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    isLoading: PartnersHubClientVariables.getisRealAccountCreationLoading(),
                    Width: model.getCachedValue(idService.getId("4DdP8DIuo06cNE6TIbJArg.Width"), function() {
                        return ((model.variables.isMobileLayoutIn) ? ("100%") : ("fit-content"));
                    }, function() {
                        return model.variables.isMobileLayoutIn;
                    }),
                    _widthInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isMobileLayoutInDataFetchStatus),
                    borderRadius: "100px",
                    class: model.getCachedValue(idService.getId("4DdP8DIuo06cNE6TIbJArg.class"), function() {
                        return ((model.variables.isTermsOfUseButtonDisabledVar) ? ("primary-button-disabled") : ("primary-button"));
                    }, function() {
                        return model.variables.isTermsOfUseButtonDisabledVar;
                    }),
                    enabled: !(model.variables.isTermsOfUseButtonDisabledVar),
                    title: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("W4P53UwMR0ubJI1MKmvjzw#Value.-1386031319.1", "Create account")
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
define("PartnersHub.RealAccountCreationFlow.TermsOfUseBlock.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreationFlow.TermsOfUseBlock.mvc$translationsResources", "PartnersHub.model$ST_c68ca2b5352eede25365718c29283667Structure", "PartnersHub.controller$SendTncApproval"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvc_TranslationsResources);
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
            get _termsOfUseButtonAction$Action() {
                if (!(this.hasOwnProperty("__termsOfUseButtonAction$Action"))) {
                    this.__termsOfUseButtonAction$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("TermsOfUseButtonAction", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "TermsOfUseButtonAction");
                                span.setAttribute("outsystems.function.key", "49382beb-70ed-4f20-b254-63f302d9d47b");
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

            get _termsOfUseOnChange$Action() {
                if (!(this.hasOwnProperty("__termsOfUseOnChange$Action"))) {
                    this.__termsOfUseOnChange$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("TermsOfUseOnChange", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "TermsOfUseOnChange");
                                span.setAttribute("outsystems.function.key", "7769cc9c-88db-4153-8d02-76567ba2eb44");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("TermsOfUseOnChange");
                                callContext = controller.callContext(callContext);
                                // IsTermsOfUseButtonDisabled = notPEPCheckbox and TermsandConditions and AffiliateTermandConditions and ConsentPromotional
                                model.variables.isTermsOfUseButtonDisabledVar = !((((model.variables.pEPCheckboxVar && model.variables.termsandConditionsVar) && model.variables.affiliateTermandConditionsVar) && model.variables.consentPromotionalVar));
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


            termsOfUseButtonAction$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("TermsOfUseButtonAction__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "TermsOfUseButtonAction");
                        span.setAttribute("outsystems.function.key", "49382beb-70ed-4f20-b254-63f302d9d47b");
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

            termsOfUseOnChange$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("TermsOfUseOnChange__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "TermsOfUseOnChange");
                        span.setAttribute("outsystems.function.key", "7769cc9c-88db-4153-8d02-76567ba2eb44");
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


define("PartnersHub.RealAccountCreationFlow.TermsOfUseBlock.mvc$translationsResources.ar-001", [], function() {
    return {
        "W4P53UwMR0ubJI1MKmvjzw#Value.-1386031319.1": "إنشاء حساب",
        "LUFf5NOc9k+rogAz0AOq2g#Value": "أوافق على تلقي المواد الترويجية والإشعارات المتعلقة ببرنامج الشراكة مع Deriv.",
        "u1wyVqIdrUu2AoUzziFrog#Value": "الشروط والأحكام للشركاء التابعين والوسطاء المعرفين",
        "tv_vYBYcz0+UfN5UFzWZkA#Value": "و",
        "kHOr63YB0EeIo+eENGyzQQ#Value": "الشروط العامة لشركاء Deriv",
        "YZOevNXwRkiD5NJ9YA7JtQ#Value": "لقد قمت بالقراءة والموافقة",
        "4BRK3oZyVUi+KPRCJ4PBGQ#Value": "شروط وأحكام Deriv للعملاء.",
        "xhbd6R06F069qBPrmfmluQ#Value": "لقد قمت بالقراءة والموافقة",
        "RLfb3cSw8UaqOgw46uRbbw#Value": "أنا لست شخصًا مكشوفًا سياسيًا (PEP).",
        "rFYmz96HiEWPg06uCEFWdg#Value": "بالضغط على \"إنشاء حساب\"، أؤكد ما يلي:"
    };
});

define("PartnersHub.RealAccountCreationFlow.TermsOfUseBlock.mvc$translationsResources.de-DE", [], function() {
    return {
        "W4P53UwMR0ubJI1MKmvjzw#Value.-1386031319.1": "Konto erstellen",
        "LUFf5NOc9k+rogAz0AOq2g#Value": "Ich bin damit einverstanden, Werbematerialien und Benachrichtigungen über das Deriv-Partnerschaftsprogramm zu erhalten.",
        "u1wyVqIdrUu2AoUzziFrog#Value": "Geschäftsbedingungen für Affiliates und einführende Broker",
        "tv_vYBYcz0+UfN5UFzWZkA#Value": "und",
        "kHOr63YB0EeIo+eENGyzQQ#Value": "Allgemeine Geschäftsbedingungen für Geschäftspartner von Deriv",
        "YZOevNXwRkiD5NJ9YA7JtQ#Value": "Ich habe gelesen und akzeptiert",
        "4BRK3oZyVUi+KPRCJ4PBGQ#Value": "Die Allgemeinen Geschäftsbedingungen von Deriv für Kunden.",
        "xhbd6R06F069qBPrmfmluQ#Value": "Ich habe gelesen und akzeptiert",
        "RLfb3cSw8UaqOgw46uRbbw#Value": "Ich bin keine politisch exponierte Person (PEP).",
        "rFYmz96HiEWPg06uCEFWdg#Value": "Durch Klicken von \"Konto erstellen\" bestätige ich Folgendes:"
    };
});

define("PartnersHub.RealAccountCreationFlow.TermsOfUseBlock.mvc$translationsResources.es-ES", [], function() {
    return {
        "W4P53UwMR0ubJI1MKmvjzw#Value.-1386031319.1": "crear cuenta",
        "LUFf5NOc9k+rogAz0AOq2g#Value": "Consiento en recibir materiales promocionales y notificaciones sobre el programa de asociación de Deriv.",
        "u1wyVqIdrUu2AoUzziFrog#Value": "Términos y condiciones para afiliados e introductores de bróker.",
        "tv_vYBYcz0+UfN5UFzWZkA#Value": "y",
        "kHOr63YB0EeIo+eENGyzQQ#Value": "Términos generales de Deriv para socios comerciales",
        "YZOevNXwRkiD5NJ9YA7JtQ#Value": "He leído y aceptado",
        "4BRK3oZyVUi+KPRCJ4PBGQ#Value": "Términos y condiciones de Deriv para clientes.",
        "xhbd6R06F069qBPrmfmluQ#Value": "He leído y aceptado",
        "RLfb3cSw8UaqOgw46uRbbw#Value": "No soy una persona políticamente expuesta (PEP).",
        "rFYmz96HiEWPg06uCEFWdg#Value": "Al presionar \"Crear cuenta\", confirmo lo siguiente:"
    };
});

define("PartnersHub.RealAccountCreationFlow.TermsOfUseBlock.mvc$translationsResources.fr-FR", [], function() {
    return {
        "W4P53UwMR0ubJI1MKmvjzw#Value.-1386031319.1": "créer un compte",
        "LUFf5NOc9k+rogAz0AOq2g#Value": "Je consens à recevoir des supports promotionnels et des notifications concernant le programme de partenariat Deriv.",
        "u1wyVqIdrUu2AoUzziFrog#Value": "Conditions générales pour les affiliés et les brokers introducteurs.",
        "tv_vYBYcz0+UfN5UFzWZkA#Value": "et",
        "kHOr63YB0EeIo+eENGyzQQ#Value": "Conditions générales de Deriv pour les partenaires commerciaux",
        "YZOevNXwRkiD5NJ9YA7JtQ#Value": "J\'ai lu et accepté",
        "4BRK3oZyVUi+KPRCJ4PBGQ#Value": "Conditions générales de Deriv pour les clients.",
        "xhbd6R06F069qBPrmfmluQ#Value": "J\'ai lu et accepté",
        "RLfb3cSw8UaqOgw46uRbbw#Value": "Je ne suis pas une personne politiquement exposée (PPE).",
        "rFYmz96HiEWPg06uCEFWdg#Value": "En appuyant sur « Créer un compte », je confirme ce qui suit :"
    };
});

define("PartnersHub.RealAccountCreationFlow.TermsOfUseBlock.mvc$translationsResources.it-IT", [], function() {
    return {
        "W4P53UwMR0ubJI1MKmvjzw#Value.-1386031319.1": "crea account",
        "LUFf5NOc9k+rogAz0AOq2g#Value": "Acconsento a ricevere materiali promozionali e notifiche riguardanti il programma di partnership Deriv.",
        "u1wyVqIdrUu2AoUzziFrog#Value": "Termini e condizioni per affiliati e broker introduttori.",
        "tv_vYBYcz0+UfN5UFzWZkA#Value": "e",
        "kHOr63YB0EeIo+eENGyzQQ#Value": "Termini generali di Deriv per partner commerciali",
        "YZOevNXwRkiD5NJ9YA7JtQ#Value": "Ho letto e accettato",
        "4BRK3oZyVUi+KPRCJ4PBGQ#Value": "Termini e condizioni di Deriv per i clienti.",
        "xhbd6R06F069qBPrmfmluQ#Value": "Ho letto e accettato",
        "RLfb3cSw8UaqOgw46uRbbw#Value": "Non sono una persona politicamente esposta (PEP).",
        "rFYmz96HiEWPg06uCEFWdg#Value": "Premendo \"Crea account\", confermo quanto segue:"
    };
});

define("PartnersHub.RealAccountCreationFlow.TermsOfUseBlock.mvc$translationsResources.pl-PL", [], function() {
    return {
        "W4P53UwMR0ubJI1MKmvjzw#Value.-1386031319.1": "utwórz konto",
        "LUFf5NOc9k+rogAz0AOq2g#Value": "Wyrażam zgodę na otrzymywanie materiałów promocyjnych i powiadomień dotyczących programu partnerskiego Deriv.",
        "u1wyVqIdrUu2AoUzziFrog#Value": "Warunki i zasady dla partnerów i brokerów wprowadzających.",
        "tv_vYBYcz0+UfN5UFzWZkA#Value": "i",
        "kHOr63YB0EeIo+eENGyzQQ#Value": "Ogólny regulamin Deriv dla partnerów biznesowych",
        "YZOevNXwRkiD5NJ9YA7JtQ#Value": "Przeczytałem i akceptuję",
        "4BRK3oZyVUi+KPRCJ4PBGQ#Value": "Regulamin Deriv dla klientów.",
        "xhbd6R06F069qBPrmfmluQ#Value": "Przeczytałem i akceptuję",
        "RLfb3cSw8UaqOgw46uRbbw#Value": "Nie jestem osobą zajmującą eksponowane stanowisko publiczne (PEP).",
        "rFYmz96HiEWPg06uCEFWdg#Value": "Naciskając „Utwórz konto”, potwierdzam, że:"
    };
});

define("PartnersHub.RealAccountCreationFlow.TermsOfUseBlock.mvc$translationsResources.pt-PT", [], function() {
    return {
        "W4P53UwMR0ubJI1MKmvjzw#Value.-1386031319.1": "Criar conta",
        "LUFf5NOc9k+rogAz0AOq2g#Value": "Concordo em receber materiais promocionais e notificações sobre os programas de parceria da Deriv.",
        "u1wyVqIdrUu2AoUzziFrog#Value": "Termos e condições para Afiliados e Introducing Brokers.",
        "tv_vYBYcz0+UfN5UFzWZkA#Value": "e",
        "kHOr63YB0EeIo+eENGyzQQ#Value": "Termos gerais da Deriv para parceiros",
        "YZOevNXwRkiD5NJ9YA7JtQ#Value": "Li e aceitei",
        "4BRK3oZyVUi+KPRCJ4PBGQ#Value": "Termos e condições da Deriv para clientes.",
        "xhbd6R06F069qBPrmfmluQ#Value": "Li e aceitei",
        "RLfb3cSw8UaqOgw46uRbbw#Value": "Não sou uma Pessoa Politicamente Exposta (PEP).",
        "rFYmz96HiEWPg06uCEFWdg#Value": "Ao pressionar \"Criar conta\", confirmo o seguinte:"
    };
});

define("PartnersHub.RealAccountCreationFlow.TermsOfUseBlock.mvc$translationsResources.ru-RU", [], function() {
    return {
        "W4P53UwMR0ubJI1MKmvjzw#Value.-1386031319.1": "открыть счет",
        "LUFf5NOc9k+rogAz0AOq2g#Value": "Я даю согласие на получение рекламных материалов и уведомлений о партнерской программе Deriv.",
        "u1wyVqIdrUu2AoUzziFrog#Value": "Условия для партнеров и представляющих брокеров.",
        "tv_vYBYcz0+UfN5UFzWZkA#Value": "и",
        "kHOr63YB0EeIo+eENGyzQQ#Value": "Общие условия Deriv для бизнес-партнеров",
        "YZOevNXwRkiD5NJ9YA7JtQ#Value": "Я принимаю",
        "4BRK3oZyVUi+KPRCJ4PBGQ#Value": "Условия и положения Deriv для клиентов.",
        "xhbd6R06F069qBPrmfmluQ#Value": "Я принимаю",
        "RLfb3cSw8UaqOgw46uRbbw#Value": "Я не являюсь политически значимой персоной (PEP).",
        "rFYmz96HiEWPg06uCEFWdg#Value": "Нажимая «Создать аккаунт», я подтверждаю следующее:"
    };
});

define("PartnersHub.RealAccountCreationFlow.TermsOfUseBlock.mvc$translationsResources", ["exports", "PartnersHub.RealAccountCreationFlow.TermsOfUseBlock.mvc$translationsResources.ar-001", "PartnersHub.RealAccountCreationFlow.TermsOfUseBlock.mvc$translationsResources.de-DE", "PartnersHub.RealAccountCreationFlow.TermsOfUseBlock.mvc$translationsResources.es-ES", "PartnersHub.RealAccountCreationFlow.TermsOfUseBlock.mvc$translationsResources.fr-FR", "PartnersHub.RealAccountCreationFlow.TermsOfUseBlock.mvc$translationsResources.it-IT", "PartnersHub.RealAccountCreationFlow.TermsOfUseBlock.mvc$translationsResources.pl-PL", "PartnersHub.RealAccountCreationFlow.TermsOfUseBlock.mvc$translationsResources.pt-PT", "PartnersHub.RealAccountCreationFlow.TermsOfUseBlock.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvc_translationsResources_ar001, PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvc_translationsResources_deDE, PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvc_translationsResources_esES, PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvc_translationsResources_frFR, PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvc_translationsResources_itIT, PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvc_translationsResources_plPL, PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvc_translationsResources_ptPT, PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvc_translationsResources_ruRU) {
    return {
        "ar-001": {
            "translations": PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvc_translationsResources_ar001,
            "isRTL": true
        },
        "de-DE": {
            "translations": PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});