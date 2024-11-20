define("PartnersHub.RealAccountCreation.IdentityVerificationDetailsBlock.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "RESTAPIWebsocketOfficial.model", "PartnersHub.controller", "RESTAPIWebsocketOfficial.controller", "PartnersHub.model$ST_9a29ef26037f71a833a7717922f3c172Structure", "PartnersHub.model$RL_d9adde0b03f648d52095292753e14389", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.model$ST_fd472dd876adddab32395354eb83b1e8Structure", "PartnersHub.model$ST_3b8f7a9e49bbec7ed0ab55bd440bab7dStructure", "PartnersHub.controller$GetToken", "RESTAPIWebsocketOfficial.controller$GetSettings", "RESTAPIWebsocketOfficial.controller$ResidenceList"], function(OSRuntimeCore, PartnersHubModel, RESTAPIWebsocketOfficialModel, PartnersHubController, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("SupportedDocuments", "supportedDocumentsVar", "SupportedDocuments", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.RL_d9adde0b03f648d52095292753e14389());
                    }, false, PartnersHubModel.RL_d9adde0b03f648d52095292753e14389),
                    this.attr("ResidenceListResponse", "residenceListResponseVar", "ResidenceListResponse", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_63a473e932ef99f5271718b62399e682Structure());
                    }, false, RESTAPIWebsocketOfficialModel.ST_63a473e932ef99f5271718b62399e682Structure),
                    this.attr("GetSettingsResponse", "getSettingsResponseVar", "GetSettingsResponse", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure());
                    }, false, RESTAPIWebsocketOfficialModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure),
                    this.attr("AdditionalDocumentLabel", "additionalDocumentLabelVar", "AdditionalDocumentLabel", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
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
                MobileNumberForm: OS.Model.ValidationWidgetRecord,
                Input_DocumentNumber3: OS.Model.ValidationWidgetRecord,
                Input_DocumentNumber4: OS.Model.ValidationWidgetRecord
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

define("PartnersHub.RealAccountCreation.IdentityVerificationDetailsBlock.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreation.IdentityVerificationDetailsBlock.mvc$model", "PartnersHub.RealAccountCreation.IdentityVerificationDetailsBlock.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "CustomComponentsOfficial.ButtonVariants.PrimaryButton.mvc$view", "PartnersHub.model$ST_9a29ef26037f71a833a7717922f3c172Structure", "PartnersHub.model$RL_d9adde0b03f648d52095292753e14389", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.model$ST_fd472dd876adddab32395354eb83b1e8Structure", "PartnersHub.model$ST_3b8f7a9e49bbec7ed0ab55bd440bab7dStructure", "PartnersHub.controller$GetToken", "RESTAPIWebsocketOfficial.controller$GetSettings", "RESTAPIWebsocketOfficial.controller$ResidenceList"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, React, OSView, PartnersHub_RealAccountCreation_IdentityVerificationDetailsBlock_mvc_model, PartnersHub_RealAccountCreation_IdentityVerificationDetailsBlock_mvc_controller, PartnersHubClientVariables, OSWidgets, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreation.IdentityVerificationDetailsBlock";
        }

        static getAttributes() {
            return {
                codeFunction: "IdentityVerificationDetailsBlock",
                functionKey: "da6eff2a-c26e-4928-81ea-d9b56157826d",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreation_IdentityVerificationDetailsBlock_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreation_IdentityVerificationDetailsBlock_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Form, {
                _validationProps: {
                    validationService: validationService
                },
                extendedProperties: {
                    style: "margin-top: 10px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: "\"form card\"",
                _idProps: {
                    service: idService,
                    name: "MobileNumberForm"
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
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 16px;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "margin-top: 0px;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Label, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                mandatory: true,
                targetWidget: "Input_DocumentNumber3",
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                value: model.getCachedValue(idService.getId("uH_jmFfiP0esmbvjrxUK+w.Value"), function() {
                    return (((OS.BuiltinFunctions.length(PartnersHubClientVariables.getRealSignupIDVDocumentName()) > 0)) ? ((PartnersHubClientVariables.getRealSignupIDVDocumentName() + " number")) : ("Document number"));
                }, function() {
                    return PartnersHubClientVariables.getRealSignupIDVDocumentName();
                }),
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Input, {
                _validationProps: {
                    validationService: validationService,
                    validationParentId: idService.getId("MobileNumberForm")
                },
                enabled: true,
                extendedProperties: {
                    style: "margin-top: 10px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: /*Text*/ 0,
                mandatory: true,
                maxLength: 50,
                prompt: model.getCachedValue(idService.getId("Input_DocumentNumber3.Prompt"), function() {
                    return (((OS.BuiltinFunctions.length(PartnersHubClientVariables.getRealSignupIDVDocumentName()) > 0)) ? ((("Enter your " + PartnersHubClientVariables.getRealSignupIDVDocumentName()) + " number")) : ("Enter your document number"));
                }, function() {
                    return PartnersHubClientVariables.getRealSignupIDVDocumentName();
                }),
                style: "form-control",
                variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupIDVDocumentNumber(), function(value) {
                    PartnersHubClientVariables.setRealSignupIDVDocumentNumber(value);
                }),
                _idProps: {
                    service: idService,
                    name: "Input_DocumentNumber3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: true,
                extendedProperties: {
                    style: "margin-top: 0px;"
                },
                style: model.getCachedValue(idService.getId("J1R3Su8ZdUqEZeDWvxEiCA.Style"), function() {
                    return ((model.widgets.get(idService.getId("Input_DocumentNumber4")).validAttr) ? (OS.BuiltinFunctions.nullTextIdentifier()) : ("margin-bottom-l"));
                }, function() {
                    return model.widgets.get(idService.getId("Input_DocumentNumber4")).validAttr;
                }),
                visible: model.getCachedValue(idService.getId("J1R3Su8ZdUqEZeDWvxEiCA.Visible"), function() {
                    return (OS.BuiltinFunctions.length(model.variables.additionalDocumentLabelVar) > 0);
                }, function() {
                    return model.variables.additionalDocumentLabelVar;
                }),
                _idProps: {
                    service: idService,
                    uuid: "7"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Label, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                mandatory: true,
                targetWidget: "Input_DocumentNumber4",
                _idProps: {
                    service: idService,
                    uuid: "8"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                value: (model.variables.additionalDocumentLabelVar + " number"),
                _idProps: {
                    service: idService,
                    uuid: "9"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Input, {
                _validationProps: {
                    validationService: validationService,
                    validationParentId: idService.getId("MobileNumberForm")
                },
                enabled: true,
                extendedProperties: {
                    style: "margin-top: 10px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: /*Text*/ 0,
                mandatory: true,
                maxLength: 0,
                prompt: (("Enter your " + model.variables.additionalDocumentLabelVar) + " number"),
                style: "form-control",
                variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupIDVAdditionalDocumentNumber(), function(value) {
                    PartnersHubClientVariables.setRealSignupIDVAdditionalDocumentNumber(value);
                }),
                _idProps: {
                    service: idService,
                    name: "Input_DocumentNumber4"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "11"
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
                    Width: "100%",
                    title: "Next",
                    enabled: true
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onClick$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return controller.mobileOnClick$Action(controller.callContext(eventHandlerContext));
                        });;
                    }
                },
                _validationProps: {
                    validationService: validationService,
                    validationParentId: idService.getId("MobileNumberForm")
                },
                _idProps: {
                    service: idService,
                    uuid: "12",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }))))));
        }
    }

    return View;
});
define("PartnersHub.RealAccountCreation.IdentityVerificationDetailsBlock.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreation.IdentityVerificationDetailsBlock.mvc$translationsResources", "PartnersHub.RealAccountCreation.IdentityVerificationDetailsBlock.mvc$controller.MobileOnClick.ValidateTheIDVJS", "PartnersHub.RealAccountCreation.IdentityVerificationDetailsBlock.mvc$controller.OnReady.JavaScript1JS", "PartnersHub.model$ST_9a29ef26037f71a833a7717922f3c172Structure", "PartnersHub.model$RL_d9adde0b03f648d52095292753e14389", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.model$ST_fd472dd876adddab32395354eb83b1e8Structure", "PartnersHub.model$ST_3b8f7a9e49bbec7ed0ab55bd440bab7dStructure", "PartnersHub.controller$GetToken", "RESTAPIWebsocketOfficial.controller$GetSettings", "RESTAPIWebsocketOfficial.controller$ResidenceList"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreation_IdentityVerificationDetailsBlock_mvc_TranslationsResources, PartnersHub_RealAccountCreation_IdentityVerificationDetailsBlock_mvc_controller_MobileOnClick_ValidateTheIDVJS, PartnersHub_RealAccountCreation_IdentityVerificationDetailsBlock_mvc_controller_OnReady_JavaScript1JS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_RealAccountCreation_IdentityVerificationDetailsBlock_mvc_TranslationsResources);
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
            get _mobileOnClick$Action() {
                if (!(this.hasOwnProperty("__mobileOnClick$Action"))) {
                    this.__mobileOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("MobileOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "MobileOnClick");
                                span.setAttribute("outsystems.function.key", "5aa11fbd-03ec-4962-a667-2994442996e6");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("MobileOnClick");
                                callContext = controller.callContext(callContext);
                                var validateTheIDVJSResult = new OS.DataTypes.VariableHolder();
                                var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONDeserializeIDVValidationErrorVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_fd472dd876adddab32395354eb83b1e8Structure))());
                                var jSONDeserializeIDVValidFieldsVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_3b8f7a9e49bbec7ed0ab55bd440bab7dStructure))());
                                return OS.Flow.executeAsyncFlow(function() {
                                    // JSON Serialize: JSONSerialize1
                                    jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.supportedDocumentsVar, false, false);
                                    return OS.Logger.startActiveSpan("ValidateTheIDV", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "ValidateTheIDV");
                                            span.setAttribute("outsystems.function.key", "ac9c0ec8-79c2-4e6e-a8bf-7c3f2ddd90a0");
                                            span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                            span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteAsyncJSNode(PartnersHub_RealAccountCreation_IdentityVerificationDetailsBlock_mvc_controller_MobileOnClick_ValidateTheIDVJS, "ValidateTheIDV", "MobileOnClick", {
                                                SupportedDocuments: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize1Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                SelectedDocument: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getRealSignupIDVDocumentName(), OS.DataTypes.DataTypes.Text),
                                                AdditionalDocumentNumber: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getRealSignupIDVAdditionalDocumentNumber(), OS.DataTypes.DataTypes.Text),
                                                DocumentNumber: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getRealSignupIDVDocumentNumber(), OS.DataTypes.DataTypes.Text),
                                                ValidationErrors: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                                ValidFields: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {
                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.IdentityVerificationDetailsBlock.MobileOnClick$validateTheIDVJSResult"))();
                                                jsNodeResult.validationErrorsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ValidationErrors, OS.DataTypes.DataTypes.Text);
                                                jsNodeResult.validFieldsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ValidFields, OS.DataTypes.DataTypes.Text);
                                                return jsNodeResult;
                                            }, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1).then(function(results) {
                                        validateTheIDVJSResult.value = results;
                                    }).then(function() {
                                        // JSON Deserialize: JSONDeserializeIDVValidationError
                                        jSONDeserializeIDVValidationErrorVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateTheIDVJSResult.value.validationErrorsOut, PartnersHubModel.ST_fd472dd876adddab32395354eb83b1e8Structure, false);
                                        // JSON Deserialize: JSONDeserializeIDVValidFields
                                        jSONDeserializeIDVValidFieldsVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateTheIDVJSResult.value.validFieldsOut, PartnersHubModel.ST_3b8f7a9e49bbec7ed0ab55bd440bab7dStructure, false);
                                        // Input_DocumentNumber3.Valid = JSONDeserializeIDVValidFields.Data.DocumentNumber
                                        model.widgets.get(idService.getId("Input_DocumentNumber3")).validAttr = jSONDeserializeIDVValidFieldsVar.value.dataOut.documentNumberAttr;
                                        // Input_DocumentNumber3.ValidationMessage = JSONDeserializeIDVValidationError.Data.DocumentNumber
                                        model.widgets.get(idService.getId("Input_DocumentNumber3")).validationMessageAttr = jSONDeserializeIDVValidationErrorVar.value.dataOut.documentNumberAttr;
                                        // Input_DocumentNumber4.Valid = JSONDeserializeIDVValidFields.Data.AdditionalDocumentNumber
                                        model.widgets.get(idService.getId("Input_DocumentNumber4")).validAttr = jSONDeserializeIDVValidFieldsVar.value.dataOut.additionalDocumentNumberAttr;
                                        // Input_DocumentNumber4.ValidationMessage = JSONDeserializeIDVValidationError.Data.AdditionalDocumentNumber
                                        model.widgets.get(idService.getId("Input_DocumentNumber4")).validationMessageAttr = jSONDeserializeIDVValidationErrorVar.value.dataOut.additionalDocumentNumberAttr;
                                    }).then(function() {
                                        if ((model.widgets.get(idService.getId("MobileNumberForm")).validAttr)) {
                                            // Execute Action: RealSignupNextStep
                                            PartnersHubController.default.realSignupNextStep$Action(1, callContext);
                                            // Execute Action: GetHeaderTitle
                                            PartnersHubController.default.getHeaderTitle$Action(callContext);
                                            // Destination: /PartnersHub/EmploymentDetailsScreen
                                            return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "EmploymentDetailsScreen", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
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

                return this.__mobileOnClick$Action;
            }
            set _mobileOnClick$Action(value) {
                this.__mobileOnClick$Action = value;
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
                                span.setAttribute("outsystems.function.key", "609c2955-655e-41f8-84a1-826e05476f73");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var getTokenVar = new OS.DataTypes.VariableHolder();
                                var getSettingsVar = new OS.DataTypes.VariableHolder();
                                var residenceListVar = new OS.DataTypes.VariableHolder();
                                var javaScript1JSResult = new OS.DataTypes.VariableHolder();
                                var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONDeserializeDocumentWithAdditionalDocumentsListVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.RL_d9adde0b03f648d52095292753e14389))());
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: GetToken
                                    getTokenVar.value = PartnersHubController.default.getToken$Action(callContext);

                                    // Execute Action: GetSettings
                                    model.flush();
                                    return RESTAPIWebsocketOfficialController.default.getSettings$Action(PartnersHubClientVariables.getServer(), getTokenVar.value.tokenOut, "1", "en", callContext).then(function(value) {
                                        getSettingsVar.value = value;
                                    }).then(function() {
                                        // Execute Action: ResidenceList
                                        model.flush();
                                        return RESTAPIWebsocketOfficialController.default.residenceList$Action(PartnersHubClientVariables.getServer(), "1", "en", callContext).then(function(value) {
                                            residenceListVar.value = value;
                                        });
                                    }).then(function() {
                                        // ResidenceListResponse = ResidenceList.Response
                                        model.variables.residenceListResponseVar = residenceListVar.value.responseOut;
                                        // GetSettingsResponse = GetSettings.Response
                                        model.variables.getSettingsResponseVar = getSettingsVar.value.responseOut;
                                        // JSON Serialize: JSONSerialize1
                                        jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(residenceListVar.value.responseOut, false, false);
                                        javaScript1JSResult.value = OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                            if (span) {
                                                span.setAttribute("code.function", "JavaScript1");
                                                span.setAttribute("outsystems.function.key", "0e472a2e-cab1-4a97-be20-b37032577e82");
                                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                            }

                                            try {
                                                return controller.safeExecuteJSNode(PartnersHub_RealAccountCreation_IdentityVerificationDetailsBlock_mvc_controller_OnReady_JavaScript1JS, "JavaScript1", "OnReady", {
                                                    ResidenceList: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize1Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                    Citizenship: OS.DataConversion.JSNodeParamConverter.to(getSettingsVar.value.responseOut.get_settingsAttr.citizenAttr, OS.DataTypes.DataTypes.Text),
                                                    supportedDocuments: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                                }, function($parameters) {
                                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.IdentityVerificationDetailsBlock.OnReady$javaScript1JSResult"))();
                                                    jsNodeResult.supportedDocumentsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.supportedDocuments, OS.DataTypes.DataTypes.Text);
                                                    return jsNodeResult;
                                                }, {}, {});
                                            } finally {
                                                if (span) {
                                                    span.end();
                                                }

                                            }

                                        }, 1);
                                        // JSON Deserialize: JSONDeserializeDocumentWithAdditionalDocumentsList
                                        jSONDeserializeDocumentWithAdditionalDocumentsListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(javaScript1JSResult.value.supportedDocumentsOut, PartnersHubModel.RL_d9adde0b03f648d52095292753e14389, false);
                                        // SupportedDocuments = JSONDeserializeDocumentWithAdditionalDocumentsList.Data
                                        model.variables.supportedDocumentsVar = jSONDeserializeDocumentWithAdditionalDocumentsListVar.value.dataOut;
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

                return this.__onReady$Action;
            }
            set _onReady$Action(value) {
                this.__onReady$Action = value;
            }


            mobileOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("MobileOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "MobileOnClick");
                        span.setAttribute("outsystems.function.key", "5aa11fbd-03ec-4962-a667-2994442996e6");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._mobileOnClick$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "609c2955-655e-41f8-84a1-826e05476f73");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onReady$Action, callContext);
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
        Controller.registerVariableGroupType("PartnersHub.RealAccountCreation.IdentityVerificationDetailsBlock.MobileOnClick$validateTheIDVJSResult", [{
            name: "ValidationErrors",
            attrName: "validationErrorsOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "ValidFields",
            attrName: "validFieldsOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("PartnersHub.RealAccountCreation.IdentityVerificationDetailsBlock.OnReady$javaScript1JSResult", [{
            name: "supportedDocuments",
            attrName: "supportedDocumentsOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.RealAccountCreation.IdentityVerificationDetailsBlock.mvc$controller.MobileOnClick.ValidateTheIDVJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        return new Promise(function($resolve, $reject) {
            function mergeSchema(...schemas) {
                const [first, ...rest] = schemas;

                const merged = rest.reduce(
                    (mergedSchemas, schema) => mergedSchemas.concat(schema),
                    first
                );

                return merged;
            }

            // Transform the flags to supported pattern (i.e "^(?i)G[a-zA-Z0-9]{7,9}$")
            function transformedRegex(pattern) {
                const caseInsensitiveRegex = /\(\?i\)/i;
                const isCaseInsensitive = caseInsensitiveRegex.test(pattern);
                const transformedPattern = pattern.replace(caseInsensitiveRegex, '');
                const flags = isCaseInsensitive ? 'i' : '';

                return new RegExp(transformedPattern, flags);
            }

            let validationSchema;
            let isAdditionalDocumentRequired;
            let additionalDocumentValidationSchema;


            if ($parameters.SelectedDocument) {
                const document = JSON.parse($parameters.SupportedDocuments ?? JSON.stringify([])).find(doc => doc.display_name === $parameters.SelectedDocument)

                validationSchema = yup.object().shape({
                    DocumentType: yup.string().required("Document type is required."),
                    DocumentNumber: yup.string().required(document.display_name + " number is requried.").matches(transformedRegex(document.format), document.display_name + " format is incorrect."),
                })
                isAdditionalDocumentRequired = Boolean(document?.additional)
                additionalDocumentValidationSchema = yup.object().shape({
                    AdditionalDocumentNumber: yup.string().required(document?.additional?.display_name + " number is requried.").matches(transformedRegex(document?.additional?.format ?? ''), document?.additional?.display_name + " format is incorrect."),
                })
            } else {
                validationSchema = yup.object().shape({
                    DocumentType: yup.string().required("Document type is required."),
                    DocumentNumber: yup.string().required("Document number is required.")
                })
            }


            const payload = {
                DocumentType: $parameters.SelectedDocument,
                DocumentNumber: $parameters.DocumentNumber
            }

            if (isAdditionalDocumentRequired) {
                payload.AdditionalDocumentNumber = $parameters.AdditionalDocumentNumber
            }

            const {
                errors,
                validFields
            } = validate(isAdditionalDocumentRequired ? mergeSchema(validationSchema, additionalDocumentValidationSchema) : validationSchema, payload)

            $parameters.ValidationErrors = JSON.stringify(errors)

            $parameters.ValidFields = JSON.stringify(validFields)
            $resolve()
        });
    };
});

define("PartnersHub.RealAccountCreation.IdentityVerificationDetailsBlock.mvc$controller.OnReady.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const currentCountry = JSON.parse($parameters.ResidenceList).residence_list.find(c => c.value === $parameters.Citizenship)

        const supportedDocuments = Object.values(currentCountry.identity.services.idv.documents_supported)

        $parameters.supportedDocuments = JSON.stringify(supportedDocuments)

    };
});


define("PartnersHub.RealAccountCreation.IdentityVerificationDetailsBlock.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});