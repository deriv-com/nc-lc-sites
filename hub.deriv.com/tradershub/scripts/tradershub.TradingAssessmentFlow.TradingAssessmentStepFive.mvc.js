define("tradershub.TradingAssessmentFlow.TradingAssessmentStepFive.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.controller", "OutSystemsUI.controller$IsPhone", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure"], function(OSRuntimeCore, tradershubModel, OutSystemsUIController) {
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
                RadioGroup: OS.Model.ValidationWidgetRecord
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

define("tradershub.TradingAssessmentFlow.TradingAssessmentStepFive.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "tradershub.TradingAssessmentFlow.TradingAssessmentStepFive.mvc$model", "tradershub.TradingAssessmentFlow.TradingAssessmentStepFive.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.RealAccountCreationLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.TradingAssessmentFlow.TradingAssessmentTitleBar.mvc$view", "OutSystemsUI.controller$IsPhone", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, React, OSView, tradershub_TradingAssessmentFlow_TradingAssessmentStepFive_mvc_model, tradershub_TradingAssessmentFlow_TradingAssessmentStepFive_mvc_controller, tradershubClientVariables, tradershub_Layouts_RealAccountCreationLayout_mvc_view, OSWidgets, tradershub_TradingAssessmentFlow_TradingAssessmentTitleBar_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "TradingAssessmentFlow.TradingAssessmentStepFive";
        }

        static getAttributes() {
            return {
                codeFunction: "TradingAssessmentStepFive",
                functionKey: "a5eb5168-831e-415d-8ee9-b8935b0f91bc",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.TradingAssessmentFlow.TradingAssessmentStepFive.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_RealAccountCreationLayout_mvc_view, tradershub_TradingAssessmentFlow_TradingAssessmentTitleBar_mvc_view];
        }

        get modelFactory() {
            return tradershub_TradingAssessmentFlow_TradingAssessmentStepFive_mvc_model;
        }

        get controllerFactory() {
            return tradershub_TradingAssessmentFlow_TradingAssessmentStepFive_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("aFHrpR6DXUGO6biTWw+RvA#Title", "TradingAssessmentStepFive");
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
                    HideTitle: model.getCachedValue(idService.getId("dqiHv27FiE6LUmQMUe9ZRA.HideTitle"), function() {
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
                            style: model.getCachedValue(idService.getId("6OHdZcClKUKvXGubDhLOPQ.Style"), function() {
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
                                Step: "5"
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
                            text: [$text(getTranslation("l_K2NVVy10SBQTje4vADng#Value", "5/10"))],
                            _idProps: {
                                service: idService,
                                uuid: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: model.getCachedValue(idService.getId("gU6f_Bb69kmJmx8EeG6oDg.Style"), function() {
                                return ("display-flex flex-direction-column " + ((OutSystemsUIController.default.isPhone$Action(callContext).isPhoneOut) ? ("gap-base") : ("gap-m")));
                            }),
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $if(model.variables.isRequiredVar, false, this, function() {
                            return [React.createElement(OSWidgets.Text, {
                                style: "text-error display-block",
                                text: [$text(getTranslation("TJUDXv98ekG+VZ34iKZN3g#Value", "* This is required."))],
                                _idProps: {
                                    service: idService,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }, function() {
                            return [];
                        }), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [$text(getTranslation("+xKtXzp84Uus79ghdp1rOA#Value", "How many CFD trades have you placed in the past 12 months?"))],
                            _idProps: {
                                service: idService,
                                uuid: "8"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "9"
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
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getCFDTradePastYear(), function(value) {
                                tradershubClientVariables.setCFDTradePastYear(value);
                            }),
                            _idProps: {
                                service: idService,
                                name: "RadioGroup"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.RadioButton, {
                            enabled: true,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "None",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "A"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $text(getTranslation("0EzdZkEGF0Kcc_l9uPrUoQ#Value", "None"))), React.createElement(OSWidgets.RadioButton, {
                            enabled: true,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "1 - 5",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "B"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "1 - 5"), React.createElement(OSWidgets.RadioButton, {
                            enabled: true,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "6 - 10",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "C"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $text(getTranslation("3RnL1ukG4US4QHLWWJmreA#Value", "6 - 10"))), React.createElement(OSWidgets.RadioButton, {
                            enabled: true,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "11 - 39",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "D"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $text(getTranslation("RFhmFHIVVU259oBw_X964Q#Value", "11 - 39"))), React.createElement(OSWidgets.RadioButton, {
                            enabled: true,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "40 or more",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "E"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $text(getTranslation("0KovP9HIxEmkHReDYdmJ1Q#Value", "40 or more"))))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: right;"
                            },
                            style: "btn-container",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "16"
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
                                uuid: "17"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-family: \"Roboto\", sans-serif; font-weight: 500;"
                            },
                            style: "roboto-medium",
                            text: [$text(getTranslation("3Ebq8ThUQ0+M9DW+uQdVew#Value", "Next"))],
                            _idProps: {
                                service: idService,
                                uuid: "18"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })))))];
                    })
                },
                _dependencies: [asPrimitiveValue(tradershubClientVariables.getCFDTradePastYear()), asPrimitiveValue(model.variables.isRequiredVar)]
            }));
        }
    }

    return View;
});
define("tradershub.TradingAssessmentFlow.TradingAssessmentStepFive.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.TradingAssessmentFlow.TradingAssessmentStepFive.mvc$translationsResources", "tradershub.TradingAssessmentFlow.controller", "OutSystemsUI.controller$IsPhone", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, tradershubLanguageResources, tradershubClientVariables, tradershub_TradingAssessmentFlow_TradingAssessmentStepFive_mvc_TranslationsResources, tradershub_TradingAssessmentFlowController) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, tradershub_TradingAssessmentFlow_TradingAssessmentStepFive_mvc_TranslationsResources);
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
                                span.setAttribute("outsystems.function.key", "01d3ce2f-f675-4c55-8b01-5768df45fac4");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("NextOnClick");
                                callContext = controller.callContext(callContext);
                                if (((tradershubClientVariables.getCFDTradePastYear() === OS.BuiltinFunctions.nullTextIdentifier()))) {
                                    // IsRequired = True
                                    model.variables.isRequiredVar = true;
                                } else {
                                    // Destination: /tradershub/TradingAssessmentStepSix
                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "trading-assessment/step-six", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
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
                        span.setAttribute("outsystems.function.key", "01d3ce2f-f675-4c55-8b01-5768df45fac4");
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


define("tradershub.TradingAssessmentFlow.TradingAssessmentStepFive.mvc$translationsResources.fr-FR", [], function() {
    return {
        "3Ebq8ThUQ0+M9DW+uQdVew#Value": "Suivant",
        "0KovP9HIxEmkHReDYdmJ1Q#Value": "40 ou plus",
        "RFhmFHIVVU259oBw_X964Q#Value": "11 - 39",
        "3RnL1ukG4US4QHLWWJmreA#Value": "6 - 10",
        "0EzdZkEGF0Kcc_l9uPrUoQ#Value": "Rien",
        "+xKtXzp84Uus79ghdp1rOA#Value": "Combien de trades CFD avez-vous effectués au cours des 12 derniers mois ?",
        "TJUDXv98ekG+VZ34iKZN3g#Value": "Cela est requis.",
        "l_K2NVVy10SBQTje4vADng#Value": "Ven 10 mai 2024 15:00:00 GMT+0800 (heure normale de Singapour)"
    };
});

define("tradershub.TradingAssessmentFlow.TradingAssessmentStepFive.mvc$translationsResources", ["exports", "tradershub.TradingAssessmentFlow.TradingAssessmentStepFive.mvc$translationsResources.fr-FR"], function(exports, tradershub_TradingAssessmentFlow_TradingAssessmentStepFive_mvc_translationsResources_frFR) {
    return {
        "fr-FR": {
            "translations": tradershub_TradingAssessmentFlow_TradingAssessmentStepFive_mvc_translationsResources_frFR,
            "isRTL": false
        }
    };
});