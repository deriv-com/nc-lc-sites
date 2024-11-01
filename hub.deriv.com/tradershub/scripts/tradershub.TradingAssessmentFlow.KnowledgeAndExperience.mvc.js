define("tradershub.TradingAssessmentFlow.KnowledgeAndExperience.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.controller", "OutSystemsUI.controller$IsPhone", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure"], function(OSRuntimeCore, tradershubModel, OutSystemsUIController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IsRequired", "isRequiredVar", "IsRequired", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new VariablesRecord(new VariablesRecord.RecordClass({
                    isRequiredVar: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        var VariablesRecord = VariablesRecordInner;
        VariablesRecord.init();
    }
    class WidgetsRecord extends
    OS.Model.BaseWidgetRecordMap {
        static getWidgetsType() {
            return {
                RadioGroupTwo: OS.Model.ValidationWidgetRecord
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

define("tradershub.TradingAssessmentFlow.KnowledgeAndExperience.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "tradershub.TradingAssessmentFlow.KnowledgeAndExperience.mvc$model", "tradershub.TradingAssessmentFlow.KnowledgeAndExperience.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.RealAccountCreationLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.TradingAssessmentFlow.TradingAssessmentTitleBar.mvc$view", "OutSystemsUI.controller$IsPhone", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, React, OSView, tradershub_TradingAssessmentFlow_KnowledgeAndExperience_mvc_model, tradershub_TradingAssessmentFlow_KnowledgeAndExperience_mvc_controller, tradershubClientVariables, tradershub_Layouts_RealAccountCreationLayout_mvc_view, OSWidgets, tradershub_TradingAssessmentFlow_TradingAssessmentTitleBar_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "TradingAssessmentFlow.KnowledgeAndExperience";
        }

        static getAttributes() {
            return {
                codeFunction: "KnowledgeAndExperience",
                functionKey: "abfb21b9-f8f5-44e0-8542-599c4cb92ee9",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.TradingAssessmentFlow.KnowledgeAndExperience.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_RealAccountCreationLayout_mvc_view, tradershub_TradingAssessmentFlow_TradingAssessmentTitleBar_mvc_view];
        }

        get modelFactory() {
            return tradershub_TradingAssessmentFlow_KnowledgeAndExperience_mvc_model;
        }

        get controllerFactory() {
            return tradershub_TradingAssessmentFlow_KnowledgeAndExperience_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("uSH7q_X44ESFQlmcTLku6Q#Title", "KnowledgeAndExperience");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(tradershub_Layouts_RealAccountCreationLayout_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    HideTitle: model.getCachedValue(idService.getId("tYtGIsurj0aphpIeSyccRw.HideTitle"), function() {
                        return OutSystemsUIController.default.isPhone$Action(callContext).isPhoneOut;
                    }),
                    Title: "Trading Assesment"
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
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: model.getCachedValue(idService.getId("Hw8iGMOgg0eKgzb4Ybgz2A.Style"), function() {
                                return ("display-flex flex-direction-column " + ((OutSystemsUIController.default.isPhone$Action(callContext).isPhoneOut) ? ("gap-base") : ("gap-m")));
                            }),
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(tradershub_TradingAssessmentFlow_TradingAssessmentTitleBar_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                Step: "2"
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
                                uuid: "2",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex align-items-center justify-content-space-between trading-assessment-steps__desktop",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-weight: bold;"
                            },
                            style: "trading-assessment-steps__desktop",
                            text: [$text(getTranslation("8VJ81VpJ_Eq+tv2UEhZ3+g#Value", "2/10"))],
                            _idProps: {
                                service: idService,
                                uuid: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $if(model.variables.isRequiredVar, false, this, function() {
                            return [React.createElement(OSWidgets.Text, {
                                style: "text-error display-block",
                                text: [$text(getTranslation("cizIPtCQWkm763_wpzyEbA#Value", "* This is required."))],
                                _idProps: {
                                    service: idService,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }, function() {
                            return [];
                        }), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [$text(getTranslation("5pVkQZgBDE6kx+kb9XGmdQ#Value", "How much knowledge and experience do you have in relation to online trading?"))],
                            _idProps: {
                                service: idService,
                                uuid: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "8"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.RadioGroup, {
                            _validationProps: {
                                validationService: validationService
                            },
                            enabled: true,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: false,
                            style: "radio-group",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getKnowledgeAnExperience(), function(value) {
                                tradershubClientVariables.setKnowledgeAnExperience(value);
                            }),
                            _idProps: {
                                service: idService,
                                name: "RadioGroupTwo"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.RadioButton, {
                            enabled: true,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "I have an academic degree, professional certification, and/or work experience related to financial services.",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "A"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $text(getTranslation("9FpGVDsgmUORhWcCtnlktw#Value", "I have an academic degree, professional certification, and/or work experience related to financial services."))), React.createElement(OSWidgets.RadioButton, {
                            enabled: true,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "I trade forex CFDs and other complex financial instruments regularly on other platforms.",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "B"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $text(getTranslation("szxSrhoPBkiV5cirwIf+RQ#Value", "I trade forex CFDs and other complex financial instruments regularly on other platforms."))), React.createElement(OSWidgets.RadioButton, {
                            enabled: true,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "I have attended seminars, training, and/or workshops related to trading.",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "C"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $text(getTranslation("e87vR5cZ4kKs1LnOgCl6KQ#Value", "I have attended seminars, training, and/or workshops related to trading."))), React.createElement(OSWidgets.RadioButton, {
                            enabled: true,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "I am interested in trading but have very little experience.",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "D"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $text(getTranslation("2JI3JF+6dEWqVn4Ajxiy_A#Value", "I am interested in trading but have very little experience."))), React.createElement(OSWidgets.RadioButton, {
                            enabled: true,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "I have no knowledge and experience in trading at all.",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "E"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $text(getTranslation("tOVawln2DkmldN9+eMjcXg#Value", "I have no knowledge and experience in trading at all."))))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: right;"
                            },
                            style: "btn-container",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "15"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Button, {
                            enabled: true,
                            isDefault: false,
                            onClick: function() {
                                var eventHandlerContext = callContext.clone();
                                controller.nextOnClick$Action(controller.callContext(eventHandlerContext));

                                ;
                            },
                            style: "btn btn-primary",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "16"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-family: \"Roboto\", sans-serif; font-weight: 500;"
                            },
                            style: "roboto-medium",
                            text: [$text(getTranslation("OSYAkKbxmkSP61DAdyA6mQ#Value", "Next"))],
                            _idProps: {
                                service: idService,
                                uuid: "17"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))))];
                    })
                },
                _dependencies: [asPrimitiveValue(tradershubClientVariables.getKnowledgeAnExperience()), asPrimitiveValue(model.variables.isRequiredVar)]
            }));
        }
    }

    return View;
});
define("tradershub.TradingAssessmentFlow.KnowledgeAndExperience.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.TradingAssessmentFlow.KnowledgeAndExperience.mvc$translationsResources", "tradershub.TradingAssessmentFlow.controller", "OutSystemsUI.controller$IsPhone", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, tradershubLanguageResources, tradershubClientVariables, tradershub_TradingAssessmentFlow_KnowledgeAndExperience_mvc_TranslationsResources, tradershub_TradingAssessmentFlowController) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, tradershub_TradingAssessmentFlow_KnowledgeAndExperience_mvc_TranslationsResources);
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
            get _nextOnClick$Action() {
                if (!(this.hasOwnProperty("__nextOnClick$Action"))) {
                    this.__nextOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("NextOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "NextOnClick");
                                span.setAttribute("outsystems.function.key", "0fa0fcc9-c681-4ff8-995d-15ec18641d25");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("NextOnClick");
                                callContext = controller.callContext(callContext);
                                if (((tradershubClientVariables.getKnowledgeAnExperience() === OS.BuiltinFunctions.nullTextIdentifier()))) {
                                    // IsRequired = True
                                    model.variables.isRequiredVar = true;
                                } else {
                                    // Destination: /tradershub/CFDTradingExperience
                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "trading-assessment/step-three", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__nextOnClick$Action;
            }
            set _nextOnClick$Action(value) {
                this.__nextOnClick$Action = value;
            }


            nextOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("NextOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "NextOnClick");
                        span.setAttribute("outsystems.function.key", "0fa0fcc9-c681-4ff8-995d-15ec18641d25");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._nextOnClick$Action, callContext);
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
                        return tradershub_TradingAssessmentFlowController.default.handleError(ex, this.callContext());
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


define("tradershub.TradingAssessmentFlow.KnowledgeAndExperience.mvc$translationsResources.fr-FR", [], function() {
    return {
        "OSYAkKbxmkSP61DAdyA6mQ#Value": "Suivant",
        "tOVawln2DkmldN9+eMjcXg#Value": "Je n\'ai aucune connaissance ni expérience dans le trading.",
        "2JI3JF+6dEWqVn4Ajxiy_A#Value": "Je m\'intéresse au trading mais j\'ai très peu d\'expérience.",
        "e87vR5cZ4kKs1LnOgCl6KQ#Value": "J\'ai assisté à des séminaires, des formations et/ou des ateliers liés au trading.",
        "szxSrhoPBkiV5cirwIf+RQ#Value": "Je trade régulièrement des CFDs forex et d\'autres instruments financiers complexes sur d\'autres plateformes.",
        "9FpGVDsgmUORhWcCtnlktw#Value": "J\'ai un diplôme universitaire, une certification professionnelle et/ou une expérience professionnelle liée aux services financiers.",
        "5pVkQZgBDE6kx+kb9XGmdQ#Value": "Quelle est votre connaissance et votre expérience en matière de trading en ligne ?",
        "cizIPtCQWkm763_wpzyEbA#Value": "Cela est requis.",
        "8VJ81VpJ_Eq+tv2UEhZ3+g#Value": "Sam 10 févr. 2024 16:00:00 GMT+0800 (heure normale de Singapour)"
    };
});

define("tradershub.TradingAssessmentFlow.KnowledgeAndExperience.mvc$translationsResources", ["exports", "tradershub.TradingAssessmentFlow.KnowledgeAndExperience.mvc$translationsResources.fr-FR"], function(exports, tradershub_TradingAssessmentFlow_KnowledgeAndExperience_mvc_translationsResources_frFR) {
    return {
        "fr-FR": {
            "translations": tradershub_TradingAssessmentFlow_KnowledgeAndExperience_mvc_translationsResources_frFR,
            "isRTL": false
        }
    };
});