define("PartnersHub.RealAccountCreation.AddressDetails.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "RESTAPIWebsocketOfficial.model", "PartnersHub.controller", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_cab7386b3f457cedb5cb6bb7db56df4eStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.model$ST_e091544222b72cbcabfeb8a6a6d57003Structure", "PartnersHub.model$ST_def7c79af49a7a6d484362f09eb0f690Structure", "PartnersHub.controller$UseDevice", "RESTAPIWebsocketOfficial.model$ST_a67c544d9efb2ed7a818e6289b80fd02Structure", "RESTAPIWebsocketOfficial.controller$GetStatesList", "PartnersHub.controller$GetToken", "RESTAPIWebsocketOfficial.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "RESTAPIWebsocketOfficial.controller$GetSettings"], function(OSRuntimeCore, PartnersHubModel, RESTAPIWebsocketOfficialModel, PartnersHubController, RESTAPIWebsocketOfficialController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("StatesListResponse", "statesListResponseVar", "StatesListResponse", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_cab7386b3f457cedb5cb6bb7db56df4eStructure());
                    }, false, RESTAPIWebsocketOfficialModel.ST_cab7386b3f457cedb5cb6bb7db56df4eStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new VariablesRecord(new VariablesRecord.RecordClass({
                    statesListResponseVar: OS.DataTypes.ImmutableBase.getData(str)
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
                Form1: OS.Model.ValidationWidgetRecord,
                Address: OS.Model.ValidationWidgetRecord,
                TownCity: OS.Model.ValidationWidgetRecord,
                StateProvinceDropdown: OS.Model.ValidationWidgetRecord,
                StateProvinceInput: OS.Model.ValidationWidgetRecord,
                PostalZipCode: OS.Model.ValidationWidgetRecord
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

define("PartnersHub.RealAccountCreation.AddressDetails.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreation.AddressDetails.mvc$model", "PartnersHub.RealAccountCreation.AddressDetails.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Interaction.InputWithIcon.mvc$view", "RESTAPIWebsocketOfficial.model$ST_cab7386b3f457cedb5cb6bb7db56df4eStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.model$ST_e091544222b72cbcabfeb8a6a6d57003Structure", "PartnersHub.model$ST_def7c79af49a7a6d484362f09eb0f690Structure", "PartnersHub.controller$UseDevice", "RESTAPIWebsocketOfficial.model$ST_a67c544d9efb2ed7a818e6289b80fd02Structure", "RESTAPIWebsocketOfficial.controller$GetStatesList", "PartnersHub.controller$GetToken", "RESTAPIWebsocketOfficial.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "RESTAPIWebsocketOfficial.controller$GetSettings"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, React, OSView, PartnersHub_RealAccountCreation_AddressDetails_mvc_model, PartnersHub_RealAccountCreation_AddressDetails_mvc_controller, PartnersHubClientVariables, OSWidgets, OutSystemsUI_Interaction_InputWithIcon_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreation.AddressDetails";
        }

        static getAttributes() {
            return {
                codeFunction: "AddressDetails",
                functionKey: "640f4427-f624-4566-9d0c-d96f1fc724b9",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.RealAccountCreation.AddressDetails.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Interaction_InputWithIcon_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreation_AddressDetails_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreation_AddressDetails_mvc_controller;
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
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Form, {
                _validationProps: {
                    validationService: validationService
                },
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 24px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: "\"form card\"",
                _idProps: {
                    service: idService,
                    name: "Form1"
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
            }, React.createElement(OSWidgets.Label, {
                extendedProperties: {
                    style: "margin-bottom: 6px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("db3FyA4BiE6BJQNWvsYK7g#Value", "Address"))), React.createElement(OSWidgets.Input, {
                _validationProps: {
                    validationService: validationService,
                    validationParentId: idService.getId("Form1")
                },
                enabled: true,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: /*Text*/ 0,
                mandatory: true,
                maxLength: 50,
                prompt: "Enter your address",
                style: "form-control",
                variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupAddress(), function(value) {
                    PartnersHubClientVariables.setRealSignupAddress(value);
                }),
                _idProps: {
                    service: idService,
                    name: "Address"
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
            }, React.createElement(OSWidgets.Label, {
                extendedProperties: {
                    style: "margin-bottom: 6px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: idService,
                    uuid: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("XRpLGBPibE+psgFbyH4JUQ#Value", "Town/City"))), React.createElement(OSWidgets.Input, {
                _validationProps: {
                    validationService: validationService,
                    validationParentId: idService.getId("Form1")
                },
                enabled: true,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: /*Text*/ 0,
                mandatory: true,
                maxLength: 50,
                prompt: "Enter your town/city",
                style: "form-control",
                variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupTownCity(), function(value) {
                    PartnersHubClientVariables.setRealSignupTownCity(value);
                }),
                _idProps: {
                    service: idService,
                    name: "TownCity"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), $if(PartnersHubClientVariables.getIsDesktop(), false, this, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "8"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Label, {
                    extendedProperties: {
                        style: "margin-bottom: 6px;"
                    },
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: idService,
                        uuid: "9"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, $text(getTranslation("ZXNZjeW9FE67D8TZCImywg#Value", "State/Province (optional)"))), React.createElement(OSWidgets.Dropdown, {
                    _validationProps: {
                        validationService: validationService,
                        validationParentId: idService.getId("Form1")
                    },
                    dropdownMode: /*Custom*/ 1,
                    emptyValue: "Select your state/province",
                    enabled: (model.variables.statesListResponseVar.states_listAttr.length > 0),
                    list: model.variables.statesListResponseVar.states_listAttr,
                    mandatory: false,
                    style: "dropdown",
                    values: function(elem) {
                        return elem.textAttr;
                    },
                    variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupStateProvince(), function(value) {
                        PartnersHubClientVariables.setRealSignupStateProvince(value);
                    }),
                    _idProps: {
                        service: idService,
                        name: "StateProvinceDropdown"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    placeholders: {
                        content: new IteratorPlaceholderContent(function(idService, callContext) {
                            return [React.createElement(OSWidgets.Expression, {
                                value: model.variables.statesListResponseVar.states_listAttr.getCurrent(callContext.iterationContext).textAttr,
                                _idProps: {
                                    service: idService,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, callContext, idService, "1")
                    },
                    _dependencies: []
                }))];
            }, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "12"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Label, {
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: idService,
                        uuid: "13"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, $text(getTranslation("8Bsp_7DTdUC_JPWguYteWg#Value", "State/Province (optional)"))), React.createElement(OutSystemsUI_Interaction_InputWithIcon_mvc_view, {
                    getOwnerSpan: function() {
                        return _this.getChildSpan("render");
                    },
                    getOwnerDisposeSpan: function() {
                        return _this.getChildSpan("destroy");
                    },
                    inputs: {
                        AlignIconRight: true
                    },
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        }
                    },
                    _validationProps: {
                        validationService: validationService,
                        validationParentId: idService.getId("Form1")
                    },
                    _idProps: {
                        service: idService,
                        uuid: "14",
                        alias: "1"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    placeholders: {
                        icon: new PlaceholderContent(function() {
                            return [React.createElement(OSWidgets.Icon, {
                                icon: "angle-down",
                                iconSize: /*FontSize*/ 0,
                                style: "icon",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "15"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }),
                        input: new PlaceholderContent(function() {
                            return [React.createElement(OSWidgets.Input, {
                                _validationProps: {
                                    validationService: validationService,
                                    validationParentId: idService.getId("Form1")
                                },
                                enabled: true,
                                extendedEvents: {
                                    onClick: function() {
                                        var eventHandlerContext = callContext.clone();
                                        controller.input2OnClick$Action(controller.callContext(eventHandlerContext));

                                        ;
                                    }
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                inputType: /*Text*/ 0,
                                mandatory: false,
                                maxLength: 50,
                                prompt: "Select your state/province",
                                style: "form-control",
                                variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupStateProvince(), function(value) {
                                    PartnersHubClientVariables.setRealSignupStateProvince(value);
                                }),
                                _idProps: {
                                    service: idService,
                                    name: "StateProvinceInput"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        })
                    },
                    _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupStateProvince())]
                }))];
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "17"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Label, {
                extendedProperties: {
                    style: "margin-bottom: 6px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: idService,
                    uuid: "18"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("8YfBrjVzRE2gJIBr5uJfrg#Value", "Postal/ZIP code (optional)"))), React.createElement(OSWidgets.Input, {
                _validationProps: {
                    validationService: validationService,
                    validationParentId: idService.getId("Form1")
                },
                enabled: true,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: /*Text*/ 0,
                mandatory: false,
                maxLength: 50,
                prompt: "Enter your postal/ZIP code",
                style: "form-control",
                variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupPostalZip(), function(value) {
                    PartnersHubClientVariables.setRealSignupPostalZip(value);
                }),
                _idProps: {
                    service: idService,
                    name: "PostalZipCode"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "display: flex; justify-content: flex-end;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "20"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Button, {
                enabled: true,
                isDefault: true,
                onClick: function() {
                    _this.validateWidget(idService.getId("Form1"));
                    var eventHandlerContext = callContext.clone();
                    controller.saveOnClick$Action(controller.callContext(eventHandlerContext));


                    ;
                },
                style: "next-step-button",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "21"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "color: #f3f6f8; font-weight: bold;"
                },
                text: [$text(getTranslation("Mf5sdFXXy0GiES+duSSgzA#Value", "Next"))],
                _idProps: {
                    service: idService,
                    uuid: "22"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))))));
        }
    }

    return View;
});
define("PartnersHub.RealAccountCreation.AddressDetails.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreation.AddressDetails.mvc$translationsResources", "PartnersHub.RealAccountCreation.AddressDetails.mvc$controller.SaveOnClick.ValidateJS", "RESTAPIWebsocketOfficial.model$ST_cab7386b3f457cedb5cb6bb7db56df4eStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.model$ST_e091544222b72cbcabfeb8a6a6d57003Structure", "PartnersHub.model$ST_def7c79af49a7a6d484362f09eb0f690Structure", "PartnersHub.controller$UseDevice", "RESTAPIWebsocketOfficial.model$ST_a67c544d9efb2ed7a818e6289b80fd02Structure", "RESTAPIWebsocketOfficial.controller$GetStatesList", "PartnersHub.controller$GetToken", "RESTAPIWebsocketOfficial.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "RESTAPIWebsocketOfficial.controller$GetSettings"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreation_AddressDetails_mvc_TranslationsResources, PartnersHub_RealAccountCreation_AddressDetails_mvc_controller_SaveOnClick_ValidateJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_RealAccountCreation_AddressDetails_mvc_TranslationsResources);
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
            get _input2OnClick$Action() {
                if (!(this.hasOwnProperty("__input2OnClick$Action"))) {
                    this.__input2OnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("Input2OnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "Input2OnClick");
                                span.setAttribute("outsystems.function.key", "35d6e8bf-ca7e-41af-9488-5ef8290f3ba0");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("Input2OnClick");
                                callContext = controller.callContext(callContext);
                                // Destination: /PartnersHub/StatesListScreenMobile
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "StatesListScreenMobile", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__input2OnClick$Action;
            }
            set _input2OnClick$Action(value) {
                this.__input2OnClick$Action = value;
            }

            get _saveOnClick$Action() {
                if (!(this.hasOwnProperty("__saveOnClick$Action"))) {
                    this.__saveOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SaveOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SaveOnClick");
                                span.setAttribute("outsystems.function.key", "7e171380-b99f-4a84-950e-8727e3416c15");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SaveOnClick");
                                callContext = controller.callContext(callContext);
                                var validateJSResult = new OS.DataTypes.VariableHolder();
                                var jSONDeserializePersonalDetailsValidFieldsVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_e091544222b72cbcabfeb8a6a6d57003Structure))());
                                var jSONDeserializePersonalDetailsValidationErrorVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_def7c79af49a7a6d484362f09eb0f690Structure))());
                                validateJSResult.value = OS.Logger.startActiveSpan("Validate", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "Validate");
                                        span.setAttribute("outsystems.function.key", "092b84ef-3e55-4cb2-a92e-1cb7b6280ab6");
                                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(PartnersHub_RealAccountCreation_AddressDetails_mvc_controller_SaveOnClick_ValidateJS, "Validate", "SaveOnClick", {
                                            TownCity: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getRealSignupTownCity(), OS.DataTypes.DataTypes.Text),
                                            Address: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getRealSignupAddress(), OS.DataTypes.DataTypes.Text),
                                            ValidationErrors: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                            ValidFields: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.AddressDetails.SaveOnClick$validateJSResult"))();
                                            jsNodeResult.validationErrorsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ValidationErrors, OS.DataTypes.DataTypes.Text);
                                            jsNodeResult.validFieldsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ValidFields, OS.DataTypes.DataTypes.Text);
                                            return jsNodeResult;
                                        }, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // JSON Deserialize: JSONDeserializePersonalDetailsValidationError
                                jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateJSResult.value.validationErrorsOut, PartnersHubModel.ST_def7c79af49a7a6d484362f09eb0f690Structure, false);
                                // JSON Deserialize: JSONDeserializePersonalDetailsValidFields
                                jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateJSResult.value.validFieldsOut, PartnersHubModel.ST_e091544222b72cbcabfeb8a6a6d57003Structure, false);
                                // Address.Valid = JSONDeserializePersonalDetailsValidFields.Data.Address
                                model.widgets.get(idService.getId("Address")).validAttr = jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut.addressAttr;
                                // Address.ValidationMessage = JSONDeserializePersonalDetailsValidationError.Data.Address
                                model.widgets.get(idService.getId("Address")).validationMessageAttr = jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut.addressAttr;
                                // TownCity.Valid = JSONDeserializePersonalDetailsValidFields.Data.TownCity
                                model.widgets.get(idService.getId("TownCity")).validAttr = jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut.townCityAttr;
                                // TownCity.ValidationMessage = JSONDeserializePersonalDetailsValidationError.Data.TownCity
                                model.widgets.get(idService.getId("TownCity")).validationMessageAttr = jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut.townCityAttr;
                                if ((model.widgets.get(idService.getId("Form1")).validAttr)) {
                                    // Execute Action: RealSignupNextStep
                                    PartnersHubController.default.realSignupNextStep$Action(1, callContext);
                                    if (((PartnersHubClientVariables.getSelectedAccountType() === "Individual"))) {
                                        // Destination: /PartnersHub/IndividualAccountScreen
                                        return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "IndividualAccountScreen", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                    } else {
                                        // Destination: /PartnersHub/CompanyAccountScreen
                                        return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "CompanyAccountScreen", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
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

                return this.__saveOnClick$Action;
            }
            set _saveOnClick$Action(value) {
                this.__saveOnClick$Action = value;
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
                                span.setAttribute("outsystems.function.key", "b315464e-44ba-48b3-82df-b14cf6e3c158");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var getSatetListVar = new OS.DataTypes.VariableHolder();
                                var getTokenVar = new OS.DataTypes.VariableHolder();
                                var getSettingsVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: GetToken
                                    getTokenVar.value = PartnersHubController.default.getToken$Action(callContext);

                                    // Execute Action: UseDevice
                                    PartnersHubController.default.useDevice$Action(callContext);
                                    // Execute Action: GetSettings
                                    model.flush();
                                    return RESTAPIWebsocketOfficialController.default.getSettings$Action(PartnersHubClientVariables.getServer(), getTokenVar.value.tokenOut, "1", "en", callContext).then(function(value) {
                                        getSettingsVar.value = value;
                                    }).then(function() {
                                        // Execute Action: GetSatetList
                                        model.flush();
                                        return RESTAPIWebsocketOfficialController.default.getStatesList$Action(PartnersHubClientVariables.getServer(), "1", "en", function() {
                                            var rec = new RESTAPIWebsocketOfficialModel.ST_a67c544d9efb2ed7a818e6289b80fd02Structure();
                                            rec.states_listAttr = getSettingsVar.value.responseOut.get_settingsAttr.country_codeAttr;
                                            return rec;
                                        }(), callContext).then(function(value) {
                                            getSatetListVar.value = value;
                                        });
                                    }).then(function() {
                                        // StatesListResponse = GetSatetList.Response
                                        model.variables.statesListResponseVar = getSatetListVar.value.responseOut;
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


            input2OnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("Input2OnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "Input2OnClick");
                        span.setAttribute("outsystems.function.key", "35d6e8bf-ca7e-41af-9488-5ef8290f3ba0");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._input2OnClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            saveOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SaveOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SaveOnClick");
                        span.setAttribute("outsystems.function.key", "7e171380-b99f-4a84-950e-8727e3416c15");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._saveOnClick$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "b315464e-44ba-48b3-82df-b14cf6e3c158");
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
        Controller.registerVariableGroupType("PartnersHub.RealAccountCreation.AddressDetails.SaveOnClick$validateJSResult", [{
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

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.RealAccountCreation.AddressDetails.mvc$controller.SaveOnClick.ValidateJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const payload = {
            Address: $parameters.Address,
            TownCity: $parameters.TownCity,
        }

        const validationSchema = yup.object().shape({
            Address: yup.string()
                .required('Address is required.')
                .noConsecutiveSpaces('Address must not contain consecutive spaces.')
                .validCharacters('Address can only include letters, numbers, spaces, commas, apostrophes, periods, and hyphens.')
                .max(100, 'Address must be at most 100 characters long.'),
            TownCity: yup.string()
                .required('Town/City is required.')
                .noConsecutiveSpaces('Town/City must not contain consecutive spaces.')
                .validCharacters('Town/City can only include letters, spaces, apostrophes, periods, and hyphens.')
                .max(50, 'Town/City must be at most 50 characters long.'),
        });

        // Assuming validate is a function that validates
        const {
            errors,
            validFields
        } = validate(validationSchema, payload)

        $parameters.ValidationErrors = JSON.stringify(errors)
        $parameters.ValidFields = JSON.stringify(validFields)
    };
});


define("PartnersHub.RealAccountCreation.AddressDetails.mvc$translationsResources.ar-001", [], function() {
    return {
        "Mf5sdFXXy0GiES+duSSgzA#Value": "التالي",
        "8YfBrjVzRE2gJIBr5uJfrg#Value": "الرمز البريدي (اختياري)",
        "8Bsp_7DTdUC_JPWguYteWg#Value": "الدولة / المحافظة (اختياري)",
        "ZXNZjeW9FE67D8TZCImywg#Value": "الدولة / المحافظة (اختياري)",
        "XRpLGBPibE+psgFbyH4JUQ#Value": "المدينة/ البلدة",
        "db3FyA4BiE6BJQNWvsYK7g#Value": "العنوان"
    };
});

define("PartnersHub.RealAccountCreation.AddressDetails.mvc$translationsResources.de-DE", [], function() {
    return {
        "Mf5sdFXXy0GiES+duSSgzA#Value": "Nächste",
        "8YfBrjVzRE2gJIBr5uJfrg#Value": "Postleitzahl (optional)",
        "8Bsp_7DTdUC_JPWguYteWg#Value": "Bundesland (optional)",
        "ZXNZjeW9FE67D8TZCImywg#Value": "Bundesland (optional)",
        "XRpLGBPibE+psgFbyH4JUQ#Value": "Stadt",
        "db3FyA4BiE6BJQNWvsYK7g#Value": "Adresse"
    };
});

define("PartnersHub.RealAccountCreation.AddressDetails.mvc$translationsResources.es-ES", [], function() {
    return {
        "Mf5sdFXXy0GiES+duSSgzA#Value": "Siguiente",
        "8YfBrjVzRE2gJIBr5uJfrg#Value": "Código postal (opcional)",
        "8Bsp_7DTdUC_JPWguYteWg#Value": "Estado/Provincia (opcional)",
        "ZXNZjeW9FE67D8TZCImywg#Value": "Estado/Provincia (opcional)",
        "XRpLGBPibE+psgFbyH4JUQ#Value": "Ciudad",
        "db3FyA4BiE6BJQNWvsYK7g#Value": "Dirección"
    };
});

define("PartnersHub.RealAccountCreation.AddressDetails.mvc$translationsResources.fr-FR", [], function() {
    return {
        "Mf5sdFXXy0GiES+duSSgzA#Value": "Suivant",
        "8YfBrjVzRE2gJIBr5uJfrg#Value": "Code postal (facultatif)",
        "8Bsp_7DTdUC_JPWguYteWg#Value": "État/Province (optionnel)",
        "ZXNZjeW9FE67D8TZCImywg#Value": "État/Province (optionnel)",
        "XRpLGBPibE+psgFbyH4JUQ#Value": "Ville",
        "db3FyA4BiE6BJQNWvsYK7g#Value": "Adresse"
    };
});

define("PartnersHub.RealAccountCreation.AddressDetails.mvc$translationsResources.it-IT", [], function() {
    return {
        "Mf5sdFXXy0GiES+duSSgzA#Value": "Successivo",
        "8YfBrjVzRE2gJIBr5uJfrg#Value": "Codice postale (opzionale)",
        "8Bsp_7DTdUC_JPWguYteWg#Value": "Stato/Provincia (opzionale)",
        "ZXNZjeW9FE67D8TZCImywg#Value": "Stato/Provincia (opzionale)",
        "XRpLGBPibE+psgFbyH4JUQ#Value": "Città",
        "db3FyA4BiE6BJQNWvsYK7g#Value": "Indirizzo"
    };
});

define("PartnersHub.RealAccountCreation.AddressDetails.mvc$translationsResources.pl-PL", [], function() {
    return {
        "Mf5sdFXXy0GiES+duSSgzA#Value": "Następny",
        "8YfBrjVzRE2gJIBr5uJfrg#Value": "Kod pocztowy (opcjonalnie)",
        "8Bsp_7DTdUC_JPWguYteWg#Value": "Stan/Województwo (opcjonalnie)",
        "ZXNZjeW9FE67D8TZCImywg#Value": "Stan/Provincia (opcjonalnie)",
        "XRpLGBPibE+psgFbyH4JUQ#Value": "Miasto",
        "db3FyA4BiE6BJQNWvsYK7g#Value": "Adres"
    };
});

define("PartnersHub.RealAccountCreation.AddressDetails.mvc$translationsResources.pt-PT", [], function() {
    return {
        "Mf5sdFXXy0GiES+duSSgzA#Value": "Próximo",
        "8YfBrjVzRE2gJIBr5uJfrg#Value": "Código postal (opcional)",
        "8Bsp_7DTdUC_JPWguYteWg#Value": "Estado/Província (opcional)",
        "ZXNZjeW9FE67D8TZCImywg#Value": "Estado/Província (opcional)",
        "XRpLGBPibE+psgFbyH4JUQ#Value": "Cidade",
        "db3FyA4BiE6BJQNWvsYK7g#Value": "Endereço"
    };
});

define("PartnersHub.RealAccountCreation.AddressDetails.mvc$translationsResources.ru-RU", [], function() {
    return {
        "Mf5sdFXXy0GiES+duSSgzA#Value": "Далее",
        "8YfBrjVzRE2gJIBr5uJfrg#Value": "Почтовый индекс (по желанию)",
        "8Bsp_7DTdUC_JPWguYteWg#Value": "Штат/Провинция (по желанию)",
        "ZXNZjeW9FE67D8TZCImywg#Value": "Штат/Провинция (необязательно)",
        "XRpLGBPibE+psgFbyH4JUQ#Value": "Город",
        "db3FyA4BiE6BJQNWvsYK7g#Value": "Адрес"
    };
});

define("PartnersHub.RealAccountCreation.AddressDetails.mvc$translationsResources", ["exports", "PartnersHub.RealAccountCreation.AddressDetails.mvc$translationsResources.ar-001", "PartnersHub.RealAccountCreation.AddressDetails.mvc$translationsResources.de-DE", "PartnersHub.RealAccountCreation.AddressDetails.mvc$translationsResources.es-ES", "PartnersHub.RealAccountCreation.AddressDetails.mvc$translationsResources.fr-FR", "PartnersHub.RealAccountCreation.AddressDetails.mvc$translationsResources.it-IT", "PartnersHub.RealAccountCreation.AddressDetails.mvc$translationsResources.pl-PL", "PartnersHub.RealAccountCreation.AddressDetails.mvc$translationsResources.pt-PT", "PartnersHub.RealAccountCreation.AddressDetails.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_RealAccountCreation_AddressDetails_mvc_translationsResources_ar001, PartnersHub_RealAccountCreation_AddressDetails_mvc_translationsResources_deDE, PartnersHub_RealAccountCreation_AddressDetails_mvc_translationsResources_esES, PartnersHub_RealAccountCreation_AddressDetails_mvc_translationsResources_frFR, PartnersHub_RealAccountCreation_AddressDetails_mvc_translationsResources_itIT, PartnersHub_RealAccountCreation_AddressDetails_mvc_translationsResources_plPL, PartnersHub_RealAccountCreation_AddressDetails_mvc_translationsResources_ptPT, PartnersHub_RealAccountCreation_AddressDetails_mvc_translationsResources_ruRU) {
    return {
        "ar-001": {
            "translations": PartnersHub_RealAccountCreation_AddressDetails_mvc_translationsResources_ar001,
            "isRTL": true
        },
        "de-DE": {
            "translations": PartnersHub_RealAccountCreation_AddressDetails_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_RealAccountCreation_AddressDetails_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_RealAccountCreation_AddressDetails_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_RealAccountCreation_AddressDetails_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_RealAccountCreation_AddressDetails_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_RealAccountCreation_AddressDetails_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_RealAccountCreation_AddressDetails_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});