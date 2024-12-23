define("tradershub.RealAccountCreationMobile.PersonalDetailsDateOfBirth.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.Layouts.RealAccountCreationLayout.mvc$model", "tradershub.RealAccountCreationBlocks.PersonalDetailsMobileDOBForm.mvc$model", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure"], function(OSRuntimeCore, tradershubModel, tradershub_Layouts_RealAccountCreationLayout_mvcModel, tradershub_RealAccountCreationBlocks_PersonalDetailsMobileDOBForm_mvcModel) {
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
                Model._hasValidationWidgetsValue = (tradershub_Layouts_RealAccountCreationLayout_mvcModel.hasValidationWidgets || tradershub_RealAccountCreationBlocks_PersonalDetailsMobileDOBForm_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.RealAccountCreationMobile.PersonalDetailsDateOfBirth.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.RealAccountCreationMobile.PersonalDetailsDateOfBirth.mvc$model", "tradershub.RealAccountCreationMobile.PersonalDetailsDateOfBirth.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.RealAccountCreationLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.RealAccountCreationBlocks.PersonalDetailsMobileDOBForm.mvc$view", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure"], function(OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_RealAccountCreationMobile_PersonalDetailsDateOfBirth_mvc_model, tradershub_RealAccountCreationMobile_PersonalDetailsDateOfBirth_mvc_controller, tradershubClientVariables, tradershub_Layouts_RealAccountCreationLayout_mvc_view, OSWidgets, tradershub_RealAccountCreationBlocks_PersonalDetailsMobileDOBForm_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreationMobile.PersonalDetailsDateOfBirth";
        }

        static getAttributes() {
            return {
                codeFunction: "PersonalDetailsDateOfBirth",
                functionKey: "994ebea7-c4e9-47ec-9a00-6c82c5510a1f",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.RealAccountCreationMobile.PersonalDetailsDateOfBirth.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_RealAccountCreationLayout_mvc_view, tradershub_RealAccountCreationBlocks_PersonalDetailsMobileDOBForm_mvc_view];
        }

        get modelFactory() {
            return tradershub_RealAccountCreationMobile_PersonalDetailsDateOfBirth_mvc_model;
        }

        get controllerFactory() {
            return tradershub_RealAccountCreationMobile_PersonalDetailsDateOfBirth_mvc_controller;
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


            return OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("p75OmenE7EeaAGyCxVEKHw#TitleExpression.-545367396.1", "Personal details | Deriv");
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
                    Title: "Personal details",
                    Analytics: model.getCachedValue(idService.getId("DGx2YQYde02QgC4Jz6W3NQ.Analytics"), function() {
                        return function() {
                            var rec = new tradershubModel.ST_0dd6e149ce474591a764bb53175023a1Structure();
                            rec.stepCodenameAttr = "personal_details_2";
                            rec.stepNumberAttr = "0.5";
                            return rec;
                        }();
                    })
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
                        return [React.createElement(tradershub_RealAccountCreationBlocks_PersonalDetailsMobileDOBForm_mvc_view, {
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
define("tradershub.RealAccountCreationMobile.PersonalDetailsDateOfBirth.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.RealAccountCreationMobile.PersonalDetailsDateOfBirth.mvc$translationsResources", "tradershub.RealAccountCreationMobile.controller", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_RealAccountCreationMobile_PersonalDetailsDateOfBirth_mvc_TranslationsResources, tradershub_RealAccountCreationMobileController) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, tradershub_RealAccountCreationMobile_PersonalDetailsDateOfBirth_mvc_TranslationsResources);
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
                        return tradershub_RealAccountCreationMobileController.default.handleError(ex, this.callContext());
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


define("tradershub.RealAccountCreationMobile.PersonalDetailsDateOfBirth.mvc$translationsResources.fr-FR", [], function() {
    return {
        "p75OmenE7EeaAGyCxVEKHw#Title": "Détails personnels | Deriv",
        "p75OmenE7EeaAGyCxVEKHw#TitleExpression.-545367396.1": "Détails personnels | Deriv"
    };
});

define("tradershub.RealAccountCreationMobile.PersonalDetailsDateOfBirth.mvc$translationsResources", ["exports", "tradershub.RealAccountCreationMobile.PersonalDetailsDateOfBirth.mvc$translationsResources.fr-FR"], function(exports, tradershub_RealAccountCreationMobile_PersonalDetailsDateOfBirth_mvc_translationsResources_frFR) {
    return {
        "fr-FR": {
            "translations": tradershub_RealAccountCreationMobile_PersonalDetailsDateOfBirth_mvc_translationsResources_frFR,
            "isRTL": false
        }
    };
});