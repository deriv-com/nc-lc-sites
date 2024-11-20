define("PartnersHub.RealAccountCreation.PlaceOfBirthBlock.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "PartnersHub.controller", "RESTAPIWebsocketOfficial.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure", "RESTAPIWebsocketOfficial.controller$ResidenceList", "PartnersHub.controller$GetToken", "RESTAPIWebsocketOfficial.controller$GetSettings", "PartnersHub.model$ST_0bf22241d1cbe538c3a6a5d88308ad6cStructure", "PartnersHub.model$ST_0838c962fcebffa0995cc58090869a8eStructure", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.model$RC_ce6ceb3fc0996999c0afa122cb74649e", "PartnersHub.model$RL_301842845c94a0162dda3fccbf6857b2"], function(OSRuntimeCore, PartnersHubModel, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, PartnersHubController) {
    var OS = OSRuntimeCore; {
        class GetAccountPurposesAggrRecInner extends
        OS.Model.AggregateRecord {
            static attributesToDeclare() {
                return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new GetAccountPurposesAggrRec(new GetAccountPurposesAggrRec.RecordClass({
                    RecordListType: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        GetAccountPurposesAggrRecInner.RecordListType = PartnersHubModel.RL_301842845c94a0162dda3fccbf6857b2;
        var GetAccountPurposesAggrRec = GetAccountPurposesAggrRecInner;
        GetAccountPurposesAggrRec.init();
    }


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("GetSettingsResponse", "getSettingsResponseVar", "GetSettingsResponse", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure());
                    }, false, RESTAPIWebsocketOfficialModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure),
                    this.attr("ResidenceListResponse", "residenceListResponseVar", "ResidenceListResponse", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_63a473e932ef99f5271718b62399e682Structure());
                    }, false, RESTAPIWebsocketOfficialModel.ST_63a473e932ef99f5271718b62399e682Structure),
                    this.attr("GetAccountPurposes", "getAccountPurposesAggr", "GetAccountPurposes", true, true, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new GetAccountPurposesAggrRec());
                    }, true, GetAccountPurposesAggrRec)
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
                PlaceOfBirthFormDesktop: OS.Model.ValidationWidgetRecord,
                PlaceOfBirthDropdownDesktop: OS.Model.ValidationWidgetRecord,
                PhoneNumberDesktop: OS.Model.ValidationWidgetRecord,
                AccountPurposeDropdown: OS.Model.ValidationWidgetRecord,
                Form1: OS.Model.ValidationWidgetRecord,
                PlaceofBirth: OS.Model.ValidationWidgetRecord,
                PhoneNumber: OS.Model.ValidationWidgetRecord
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

define("PartnersHub.RealAccountCreation.PlaceOfBirthBlock.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreation.PlaceOfBirthBlock.mvc$model", "PartnersHub.RealAccountCreation.PlaceOfBirthBlock.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Layouts.DeviceLayout.mvc$view", "@outsystems/runtime-widgets-js", "OutSystemsUI.Interaction.InputWithIcon.mvc$view", "RESTAPIWebsocketOfficial.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure", "RESTAPIWebsocketOfficial.controller$ResidenceList", "PartnersHub.controller$GetToken", "RESTAPIWebsocketOfficial.controller$GetSettings", "PartnersHub.model$ST_0bf22241d1cbe538c3a6a5d88308ad6cStructure", "PartnersHub.model$ST_0838c962fcebffa0995cc58090869a8eStructure", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.model$RC_ce6ceb3fc0996999c0afa122cb74649e", "PartnersHub.model$RL_301842845c94a0162dda3fccbf6857b2"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, React, OSView, PartnersHub_RealAccountCreation_PlaceOfBirthBlock_mvc_model, PartnersHub_RealAccountCreation_PlaceOfBirthBlock_mvc_controller, PartnersHubClientVariables, PartnersHub_Layouts_DeviceLayout_mvc_view, OSWidgets, OutSystemsUI_Interaction_InputWithIcon_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreation.PlaceOfBirthBlock";
        }

        static getAttributes() {
            return {
                codeFunction: "PlaceOfBirthBlock",
                functionKey: "d641b133-445b-4245-b7ba-6463776f329b",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.RealAccountCreation.PlaceOfBirthBlock.css"];
        }

        static getJsDependencies() {
            return ["scripts/PartnersHub.yupumd.js"];
        }

        static getBlocks() {
            return [PartnersHub_Layouts_DeviceLayout_mvc_view, OutSystemsUI_Interaction_InputWithIcon_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreation_PlaceOfBirthBlock_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreation_PlaceOfBirthBlock_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(PartnersHub_Layouts_DeviceLayout_mvc_view, {
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    desktopContent: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Form, {
                            _validationProps: {
                                validationService: validationService
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "display-flex flex-direction-column gap-m",
                            _idProps: {
                                service: idService,
                                name: "PlaceOfBirthFormDesktop"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex flex-direction-column gap-s",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Place of birth"), React.createElement(OSWidgets.Dropdown, {
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("PlaceOfBirthFormDesktop")
                            },
                            dropdownMode: /*Custom*/ 1,
                            emptyValue: "-- Select your place of birth --",
                            enabled: true,
                            list: model.variables.residenceListResponseVar.residence_listAttr,
                            mandatory: true,
                            style: "dropdown",
                            values: function(elem) {
                                return elem.valueAttr;
                            },
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupPlaceOfBirth(), function(value) {
                                PartnersHubClientVariables.setRealSignupPlaceOfBirth(value);
                            }),
                            _idProps: {
                                service: idService,
                                name: "PlaceOfBirthDropdownDesktop"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new IteratorPlaceholderContent(function(idService, callContext) {
                                    return [React.createElement(OSWidgets.Expression, {
                                        value: model.variables.residenceListResponseVar.residence_listAttr.getCurrent(callContext.iterationContext).textAttr,
                                        _idProps: {
                                            service: idService,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })];
                                }, callContext, idService, "1")
                            },
                            _dependencies: []
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex flex-direction-column gap-s",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: idService,
                                uuid: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Phone number"), React.createElement(OSWidgets.Input, {
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("PlaceOfBirthFormDesktop")
                            },
                            enabled: true,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: /*Text*/ 0,
                            mandatory: true,
                            maxLength: 50,
                            prompt: "Enter your phone number",
                            style: "form-control",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupPhoneNumber(), function(value) {
                                PartnersHubClientVariables.setRealSignupPhoneNumber(value);
                            }),
                            _idProps: {
                                service: idService,
                                name: "PhoneNumberDesktop"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex flex-direction-column gap-s",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "9"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: idService,
                                uuid: "10"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Account purpose"), React.createElement(OSWidgets.Dropdown, {
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("PlaceOfBirthFormDesktop")
                            },
                            dropdownMode: /*Custom*/ 1,
                            emptyValue: "-- Select your account purpose --",
                            enabled: true,
                            list: model.variables.getAccountPurposesAggr.listOut,
                            mandatory: true,
                            style: "dropdown",
                            values: function(elem) {
                                return elem.accountPurposeAttr.purposeAttr;
                            },
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupAccountPurpose(), function(value) {
                                PartnersHubClientVariables.setRealSignupAccountPurpose(value);
                            }),
                            _idProps: {
                                service: idService,
                                name: "AccountPurposeDropdown"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            list_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getAccountPurposesAggr.dataFetchStatusAttr),
                            placeholders: {
                                content: new IteratorPlaceholderContent(function(idService, callContext) {
                                    return [React.createElement(OSWidgets.Expression, {
                                        value: model.variables.getAccountPurposesAggr.listOut.getCurrent(callContext.iterationContext).accountPurposeAttr.purposeAttr,
                                        _idProps: {
                                            service: idService,
                                            uuid: "12"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getAccountPurposesAggr.dataFetchStatusAttr),
                                        _dependencies: []
                                    })];
                                }, callContext, idService, "2")
                            },
                            _dependencies: [asPrimitiveValue(model.variables.getAccountPurposesAggr.dataFetchStatusAttr)]
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "display: flex; justify-content: flex-end;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "13"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Button, {
                            enabled: true,
                            extendedProperties: {
                                style: "align-items: center; background: var(--Brand-Primary-Base, #FF444F); border-radius: 100px; display: flex; flex-shrink: 0; gap: 8px; height: 40px; justify-content: center; padding: 0px 16px;"
                            },
                            gridProperties: {
                                width: "100px"
                            },
                            isDefault: true,
                            onClick: function() {
                                _this.validateWidget(idService.getId("PlaceOfBirthFormDesktop"));
                                var eventHandlerContext = callContext.clone();
                                controller.nextOnDesktopClick$Action(controller.callContext(eventHandlerContext));


                                ;
                            },
                            style: "btn btn-primary",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "14"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Next")))];
                    }),
                    tabletContent: PlaceholderContent.Empty,
                    mobileContent: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "15"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Form, {
                            _validationProps: {
                                validationService: validationService
                            },
                            extendedProperties: {
                                style: "display: flex; flex-direction: column; gap: 16px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "",
                            _idProps: {
                                service: idService,
                                name: "Form1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "display: flex; flex-direction: column; gap: 4px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "17"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: idService,
                                uuid: "18"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $text(getTranslation("aOVm+6dYPEOLimJsr6MTnA#Value", "Place of birth"))), React.createElement(OutSystemsUI_Interaction_InputWithIcon_mvc_view, {
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
                                uuid: "19",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                icon: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Icon, {
                                        extendedProperties: {
                                            style: "font-size: 18px;"
                                        },
                                        icon: "angle-down",
                                        iconSize: /*FontSize*/ 0,
                                        style: "icon",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "20"
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
                                        enabled: ((model.variables.getSettingsResponseVar.get_settingsAttr.residenceAttr) !== ("")),
                                        extendedEvents: {
                                            onClick: function() {
                                                var eventHandlerContext = callContext.clone();
                                                controller.placeofBirthOnClick$Action(controller.callContext(eventHandlerContext));

                                                ;
                                            }
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        inputType: /*Text*/ 0,
                                        mandatory: true,
                                        maxLength: 50,
                                        prompt: "Select your place of birth",
                                        style: "form-control",
                                        variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupPlaceOfBirth(), function(value) {
                                            PartnersHubClientVariables.setRealSignupPlaceOfBirth(value);
                                        }),
                                        _idProps: {
                                            service: idService,
                                            name: "PlaceofBirth"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.getSettingsResponseVar.get_settingsAttr.residenceAttr), asPrimitiveValue(PartnersHubClientVariables.getRealSignupPlaceOfBirth())]
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "display: flex; flex-direction: column; gap: 4px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "22"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: idService,
                                uuid: "23"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $text(getTranslation("mssLs6g36EiTQt7fqwX0vw#Value", "Phone Number"))), React.createElement(OSWidgets.Input, {
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
                            prompt: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("137P56u6BkOnlCSmWIEvxw#ValueExpression.1223038368.1", "Enter your phone number"),
                            style: "form-control",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupPhoneNumber(), function(value) {
                                PartnersHubClientVariables.setRealSignupPhoneNumber(value);
                            }),
                            _idProps: {
                                service: idService,
                                name: "PhoneNumber"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Button, {
                            enabled: true,
                            extendedProperties: {
                                style: "align-items: center; align-self: stretch; background: var(--core-color-solid-coral-700, #FF444F); border: none; border-radius: 100px; cursor: pointer; display: flex; gap: 8px; height: 48px; justify-content: center; padding: 0px 16px;"
                            },
                            isDefault: false,
                            onClick: function() {
                                _this.validateWidget(idService.getId("Form1"));
                                var eventHandlerContext = callContext.clone();
                                controller.nextOnClick$Action(controller.callContext(eventHandlerContext));


                                ;
                            },
                            style: "\"btn\"",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "25"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "color: #f3f6f8; font-size: 16px; font-weight: bold;"
                            },
                            text: [$text(getTranslation("2MhLcH4qik+EF8IIu68K5w#Value", "Next"))],
                            _idProps: {
                                service: idService,
                                uuid: "26"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.getSettingsResponseVar.get_settingsAttr.residenceAttr), asPrimitiveValue(model.variables.getAccountPurposesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getAccountPurposesAggr.listOut), asPrimitiveValue(PartnersHubClientVariables.getRealSignupAccountPurpose()), asPrimitiveValue(PartnersHubClientVariables.getRealSignupPhoneNumber()), asPrimitiveValue(model.variables.residenceListResponseVar.residence_listAttr), asPrimitiveValue(PartnersHubClientVariables.getRealSignupPlaceOfBirth())]
            }));
        }
    }

    return View;
});
define("PartnersHub.RealAccountCreation.PlaceOfBirthBlock.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreation.PlaceOfBirthBlock.mvc$translationsResources", "PartnersHub.RealAccountCreation.PlaceOfBirthBlock.mvc$controller.NextOnClick.ValidateJS", "PartnersHub.RealAccountCreation.PlaceOfBirthBlock.mvc$controller.NextOnDesktopClick.ValidateJS", "RESTAPIWebsocketOfficial.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure", "RESTAPIWebsocketOfficial.controller$ResidenceList", "PartnersHub.controller$GetToken", "RESTAPIWebsocketOfficial.controller$GetSettings", "PartnersHub.model$ST_0bf22241d1cbe538c3a6a5d88308ad6cStructure", "PartnersHub.model$ST_0838c962fcebffa0995cc58090869a8eStructure", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.model$RC_ce6ceb3fc0996999c0afa122cb74649e", "PartnersHub.model$RL_301842845c94a0162dda3fccbf6857b2"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreation_PlaceOfBirthBlock_mvc_TranslationsResources, PartnersHub_RealAccountCreation_PlaceOfBirthBlock_mvc_controller_NextOnClick_ValidateJS, PartnersHub_RealAccountCreation_PlaceOfBirthBlock_mvc_controller_NextOnDesktopClick_ValidateJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_RealAccountCreation_PlaceOfBirthBlock_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {
                    getAccountPurposes$AggrRefresh: 0
                };
                this.dataFetchDependentsGraph = {
                    getAccountPurposes$AggrRefresh: []
                };
                this.shouldSendClientVarsToDataSources = true;
            }

            // Server Actions - Methods

            // Aggregates and Data Actions
            get getAccountPurposes$AggrRefresh() {
                if (!(this.hasOwnProperty("_getAccountPurposes$AggrRefresh"))) {
                    this._getAccountPurposes$AggrRefresh = function() {
                        var innerBody = function(maxRecords, startIndex, callContext) {
                            var model = this.model;
                            var controller = this.controller;
                            var callContext = controller.callContext(callContext);
                            return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetAccountPurposes", "screenservices/PartnersHub/RealAccountCreation/PlaceOfBirthBlock/ScreenDataSetGetAccountPurposes", "syYKVD1+RbIc9NlZCoKJ2A", maxRecords, startIndex, function(b) {
                                model.variables.getAccountPurposesAggr.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.getAccountPurposesAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getAccountPurposesAggr.constructor));
                            }, undefined, undefined, undefined, callContext, PartnersHubClientVariables, true);
                        }.bind(this);
                        return OS.Logger.startActiveSpan("GetAccountPurposes", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetAccountPurposes");
                                span.setAttribute("outsystems.function.key", "7675e9f2-feb9-4095-9be1-286447b2d42d");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL");
                            }

                            return OS.Flow.tryFinally(function() {
                                return innerBody();
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 0);

                    };
                }

                return this._getAccountPurposes$AggrRefresh;
            }
            set getAccountPurposes$AggrRefresh(value) {
                this._getAccountPurposes$AggrRefresh = value;
            }


            get dataFetchActionNames() {
                if (!(this.hasOwnProperty("_dataFetchActionNames"))) {
                    this._dataFetchActionNames = ["getAccountPurposes$AggrRefresh"];
                }

                return this._dataFetchActionNames;
            }
            set dataFetchActionNames(value) {
                this._dataFetchActionNames = value;
            }

            // Client Actions - Methods
            get _placeofBirthOnClick$Action() {
                if (!(this.hasOwnProperty("__placeofBirthOnClick$Action"))) {
                    this.__placeofBirthOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("PlaceofBirthOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "PlaceofBirthOnClick");
                                span.setAttribute("outsystems.function.key", "1d00b347-a45c-4e68-a3b1-dbf96b79dfc6");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("PlaceofBirthOnClick");
                                callContext = controller.callContext(callContext);
                                // Destination: /PartnersHub/PlaceOfBirthCountrySelector
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "PlaceOfBirthCountrySelector", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__placeofBirthOnClick$Action;
            }
            set _placeofBirthOnClick$Action(value) {
                this.__placeofBirthOnClick$Action = value;
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
                                span.setAttribute("outsystems.function.key", "6e758c59-ec01-4f05-97ad-6d099913c317");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var residenceListVar = new OS.DataTypes.VariableHolder();
                                var getTokenVar = new OS.DataTypes.VariableHolder();
                                var getSettingsVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: ResidenceList
                                    model.flush();
                                    return RESTAPIWebsocketOfficialController.default.residenceList$Action(PartnersHubClientVariables.getServer(), "1", "en", callContext).then(function(value) {
                                        residenceListVar.value = value;
                                    }).then(function() {
                                        // Execute Action: GetToken
                                        getTokenVar.value = PartnersHubController.default.getToken$Action(callContext);

                                        // Execute Action: GetSettings
                                        model.flush();
                                        return RESTAPIWebsocketOfficialController.default.getSettings$Action(PartnersHubClientVariables.getServer(), getTokenVar.value.tokenOut, "1", "en", callContext).then(function(value) {
                                            getSettingsVar.value = value;
                                        });
                                    }).then(function() {
                                        // GetSettingsResponse = GetSettings.Response
                                        model.variables.getSettingsResponseVar = getSettingsVar.value.responseOut;
                                        // ResidenceListResponse = ResidenceList.Response
                                        model.variables.residenceListResponseVar = residenceListVar.value.responseOut;
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

            get _nextOnClick$Action() {
                if (!(this.hasOwnProperty("__nextOnClick$Action"))) {
                    this.__nextOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("NextOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "NextOnClick");
                                span.setAttribute("outsystems.function.key", "85283310-ee0b-435a-9c9c-304c9f46f840");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("NextOnClick");
                                callContext = controller.callContext(callContext);
                                var validateJSResult = new OS.DataTypes.VariableHolder();
                                var jSONDeserializePersonalDetailsValidFieldsVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_0bf22241d1cbe538c3a6a5d88308ad6cStructure))());
                                var jSONDeserializePersonalDetailsValidationErrorVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_0838c962fcebffa0995cc58090869a8eStructure))());
                                validateJSResult.value = OS.Logger.startActiveSpan("Validate", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "Validate");
                                        span.setAttribute("outsystems.function.key", "e8a9ce66-2adb-47c1-a602-e2e440ef71c1");
                                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(PartnersHub_RealAccountCreation_PlaceOfBirthBlock_mvc_controller_NextOnClick_ValidateJS, "Validate", "NextOnClick", {
                                            PlaceOfBirth: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getRealSignupPlaceOfBirth(), OS.DataTypes.DataTypes.Text),
                                            PhoneNumber: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getRealSignupPhoneNumber(), OS.DataTypes.DataTypes.Text),
                                            ValidationErrors: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                            ValidFields: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.PlaceOfBirthBlock.NextOnClick$validateJSResult"))();
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
                                jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateJSResult.value.validationErrorsOut, PartnersHubModel.ST_0838c962fcebffa0995cc58090869a8eStructure, false);
                                // JSON Deserialize: JSONDeserializePersonalDetailsValidFields
                                jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateJSResult.value.validFieldsOut, PartnersHubModel.ST_0bf22241d1cbe538c3a6a5d88308ad6cStructure, false);
                                // PlaceofBirth.Valid = JSONDeserializePersonalDetailsValidFields.Data.PlaceOfBirth
                                model.widgets.get(idService.getId("PlaceofBirth")).validAttr = jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut.placeOfBirthAttr;
                                // PhoneNumber.Valid = JSONDeserializePersonalDetailsValidFields.Data.PhoneNumber
                                model.widgets.get(idService.getId("PhoneNumber")).validAttr = jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut.phoneNumberAttr;
                                // PlaceofBirth.ValidationMessage = JSONDeserializePersonalDetailsValidationError.Data.PlaceOfBirth
                                model.widgets.get(idService.getId("PlaceofBirth")).validationMessageAttr = jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut.placeOfBirthAttr;
                                // PhoneNumber.ValidationMessage = JSONDeserializePersonalDetailsValidationError.Data.PhoneNumber
                                model.widgets.get(idService.getId("PhoneNumber")).validationMessageAttr = jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut.phoneNumberAttr;
                                if ((model.widgets.get(idService.getId("Form1")).validAttr)) {
                                    // Destination: /PartnersHub/AccountPurposeScreen
                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "AccountPurposeScreen", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
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

            get _nextOnDesktopClick$Action() {
                if (!(this.hasOwnProperty("__nextOnDesktopClick$Action"))) {
                    this.__nextOnDesktopClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("NextOnDesktopClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "NextOnDesktopClick");
                                span.setAttribute("outsystems.function.key", "8ea645cd-1b4a-414f-b74f-53edf7032cc0");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("NextOnDesktopClick");
                                callContext = controller.callContext(callContext);
                                var validateJSResult = new OS.DataTypes.VariableHolder();
                                var jSONDeserializePersonalDetailsValidFieldsVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_0bf22241d1cbe538c3a6a5d88308ad6cStructure))());
                                var jSONDeserializePersonalDetailsValidationErrorVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_0838c962fcebffa0995cc58090869a8eStructure))());
                                validateJSResult.value = OS.Logger.startActiveSpan("Validate", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "Validate");
                                        span.setAttribute("outsystems.function.key", "07f071e5-3c48-44ef-81a6-54cf3c8aa392");
                                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(PartnersHub_RealAccountCreation_PlaceOfBirthBlock_mvc_controller_NextOnDesktopClick_ValidateJS, "Validate", "NextOnDesktopClick", {
                                            PlaceOfBirth: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getRealSignupPlaceOfBirth(), OS.DataTypes.DataTypes.Text),
                                            PhoneNumber: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getRealSignupPhoneNumber(), OS.DataTypes.DataTypes.Text),
                                            ValidationErrors: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                            ValidFields: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.PlaceOfBirthBlock.NextOnDesktopClick$validateJSResult"))();
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
                                jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateJSResult.value.validationErrorsOut, PartnersHubModel.ST_0838c962fcebffa0995cc58090869a8eStructure, false);
                                // JSON Deserialize: JSONDeserializePersonalDetailsValidFields
                                jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateJSResult.value.validFieldsOut, PartnersHubModel.ST_0bf22241d1cbe538c3a6a5d88308ad6cStructure, false);
                                // AccountPurposeDropdown.Valid = JSONDeserializePersonalDetailsValidFields.Data.PlaceOfBirth
                                model.widgets.get(idService.getId("AccountPurposeDropdown")).validAttr = jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut.placeOfBirthAttr;
                                // PhoneNumberDesktop.Valid = JSONDeserializePersonalDetailsValidFields.Data.PhoneNumber
                                model.widgets.get(idService.getId("PhoneNumberDesktop")).validAttr = jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut.phoneNumberAttr;
                                // PlaceOfBirthDropdownDesktop.ValidationMessage = JSONDeserializePersonalDetailsValidationError.Data.PlaceOfBirth
                                model.widgets.get(idService.getId("PlaceOfBirthDropdownDesktop")).validationMessageAttr = jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut.placeOfBirthAttr;
                                // PhoneNumberDesktop.ValidationMessage = JSONDeserializePersonalDetailsValidationError.Data.PhoneNumber
                                model.widgets.get(idService.getId("PhoneNumberDesktop")).validationMessageAttr = jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut.phoneNumberAttr;
                                if ((model.widgets.get(idService.getId("PlaceOfBirthFormDesktop")).validAttr)) {
                                    // Execute Action: RealSignupNextStep
                                    PartnersHubController.default.realSignupNextStep$Action(1, callContext);
                                    // Execute Action: GetHeaderTitle
                                    PartnersHubController.default.getHeaderTitle$Action(callContext);
                                    if ((PartnersHubClientVariables.getRealSignupIsIDVSupported())) {
                                        // Destination: /PartnersHub/IDVScreen
                                        return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "IDVScreen", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                    } else {
                                        // Destination: /PartnersHub/AddressDetailsScreen
                                        return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "AddressDetailsScreen", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
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

                return this.__nextOnDesktopClick$Action;
            }
            set _nextOnDesktopClick$Action(value) {
                this.__nextOnDesktopClick$Action = value;
            }


            placeofBirthOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("PlaceofBirthOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "PlaceofBirthOnClick");
                        span.setAttribute("outsystems.function.key", "1d00b347-a45c-4e68-a3b1-dbf96b79dfc6");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._placeofBirthOnClick$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "6e758c59-ec01-4f05-97ad-6d099913c317");
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

            nextOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("NextOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "NextOnClick");
                        span.setAttribute("outsystems.function.key", "85283310-ee0b-435a-9c9c-304c9f46f840");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
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

            nextOnDesktopClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("NextOnDesktopClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "NextOnDesktopClick");
                        span.setAttribute("outsystems.function.key", "8ea645cd-1b4a-414f-b74f-53edf7032cc0");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._nextOnDesktopClick$Action, callContext);
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
        Controller.registerVariableGroupType("PartnersHub.RealAccountCreation.PlaceOfBirthBlock.NextOnClick$validateJSResult", [{
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
        Controller.registerVariableGroupType("PartnersHub.RealAccountCreation.PlaceOfBirthBlock.NextOnDesktopClick$validateJSResult", [{
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

define("PartnersHub.RealAccountCreation.PlaceOfBirthBlock.mvc$controller.NextOnClick.ValidateJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const payload = {
            PlaceOfBirth: $parameters.PlaceOfBirth,
            PhoneNumber: $parameters.PhoneNumber,
        }

        const validationSchema = yup.object().shape({
            PlaceOfBirth: yup.string()
                .noConsecutiveSpaces('Place of birth must not contain consecutive spaces.')
                .validCharacters('Place of birth can only include letters, spaces, apostrophes, periods, and hyphens.')
                .max(50, 'Place of birth must be at most 50 characters long.')
                .required('Place of birth is required.'),
            PhoneNumber: yup.string()
                .required('Phone number is required.')
                .matches(/^[0-9()+\-]+$/, 'Phone number can only include numbers, parentheses, dashes, and plus signs, without spaces.')
                .max(15, 'Phone number must be at most 15 characters long.')
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

define("PartnersHub.RealAccountCreation.PlaceOfBirthBlock.mvc$controller.NextOnDesktopClick.ValidateJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const payload = {
            PlaceOfBirth: $parameters.PlaceOfBirth,
            PhoneNumber: $parameters.PhoneNumber,
        }

        const validationSchema = yup.object().shape({
            PlaceOfBirth: yup.string()
                .noConsecutiveSpaces('Place of birth must not contain consecutive spaces.')
                .validCharacters('Place of birth can only include letters, spaces, apostrophes, periods, and hyphens.')
                .max(50, 'Place of birth must be at most 50 characters long.')
                .required('Place of birth is required.'),
            PhoneNumber: yup.string()
                .required('Phone number is required.')
                .matches(/^[0-9()+\-]+$/, 'Phone number can only include numbers, parentheses, dashes, and plus signs, without spaces.')
                .max(15, 'Phone number must be at most 15 characters long.')
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


define("PartnersHub.RealAccountCreation.PlaceOfBirthBlock.mvc$translationsResources.ar-001", [], function() {
    return {
        "2MhLcH4qik+EF8IIu68K5w#Value": "التالي",
        "137P56u6BkOnlCSmWIEvxw#ValueExpression.1223038368.1": "أدخل اسم العائلة",
        "mssLs6g36EiTQt7fqwX0vw#Value": "اسم العائلة",
        "aOVm+6dYPEOLimJsr6MTnA#Value": "الدولة / المحافظة (اختياري)"
    };
});

define("PartnersHub.RealAccountCreation.PlaceOfBirthBlock.mvc$translationsResources.de-DE", [], function() {
    return {
        "2MhLcH4qik+EF8IIu68K5w#Value": "Nächste",
        "137P56u6BkOnlCSmWIEvxw#ValueExpression.1223038368.1": "Geben Sie Ihren Nachnamen ein",
        "mssLs6g36EiTQt7fqwX0vw#Value": "Nachname",
        "aOVm+6dYPEOLimJsr6MTnA#Value": "Bundesland (optional)"
    };
});

define("PartnersHub.RealAccountCreation.PlaceOfBirthBlock.mvc$translationsResources.es-ES", [], function() {
    return {
        "2MhLcH4qik+EF8IIu68K5w#Value": "Siguiente",
        "137P56u6BkOnlCSmWIEvxw#ValueExpression.1223038368.1": "Introduce tu apellido",
        "mssLs6g36EiTQt7fqwX0vw#Value": "Apellido",
        "aOVm+6dYPEOLimJsr6MTnA#Value": "Estado/Provincia (opcional)"
    };
});

define("PartnersHub.RealAccountCreation.PlaceOfBirthBlock.mvc$translationsResources.fr-FR", [], function() {
    return {
        "2MhLcH4qik+EF8IIu68K5w#Value": "Suivant",
        "137P56u6BkOnlCSmWIEvxw#ValueExpression.1223038368.1": "Entrez votre nom de famille",
        "mssLs6g36EiTQt7fqwX0vw#Value": "Nom de famille",
        "aOVm+6dYPEOLimJsr6MTnA#Value": "État/Province (optionnel)"
    };
});

define("PartnersHub.RealAccountCreation.PlaceOfBirthBlock.mvc$translationsResources.it-IT", [], function() {
    return {
        "2MhLcH4qik+EF8IIu68K5w#Value": "Prossimo",
        "137P56u6BkOnlCSmWIEvxw#ValueExpression.1223038368.1": "Inserisci il tuo cognome",
        "mssLs6g36EiTQt7fqwX0vw#Value": "Cognome",
        "aOVm+6dYPEOLimJsr6MTnA#Value": "Stato/Provincia (opzionale)"
    };
});

define("PartnersHub.RealAccountCreation.PlaceOfBirthBlock.mvc$translationsResources.pl-PL", [], function() {
    return {
        "2MhLcH4qik+EF8IIu68K5w#Value": "Następny",
        "137P56u6BkOnlCSmWIEvxw#ValueExpression.1223038368.1": "Wprowadź swoje nazwisko",
        "mssLs6g36EiTQt7fqwX0vw#Value": "Nazwisko",
        "aOVm+6dYPEOLimJsr6MTnA#Value": "Stan/Województwo (opcjonalnie)"
    };
});

define("PartnersHub.RealAccountCreation.PlaceOfBirthBlock.mvc$translationsResources.pt-PT", [], function() {
    return {
        "2MhLcH4qik+EF8IIu68K5w#Value": "Próximo",
        "137P56u6BkOnlCSmWIEvxw#ValueExpression.1223038368.1": "Insira o seu apelido",
        "mssLs6g36EiTQt7fqwX0vw#Value": "Sobrenome",
        "aOVm+6dYPEOLimJsr6MTnA#Value": "Estado/Província (opcional)"
    };
});

define("PartnersHub.RealAccountCreation.PlaceOfBirthBlock.mvc$translationsResources.ru-RU", [], function() {
    return {
        "2MhLcH4qik+EF8IIu68K5w#Value": "Следующий",
        "137P56u6BkOnlCSmWIEvxw#ValueExpression.1223038368.1": "Введите вашу фамилию",
        "mssLs6g36EiTQt7fqwX0vw#Value": "Фамилия",
        "aOVm+6dYPEOLimJsr6MTnA#Value": "Штат/Провинция (по желанию)"
    };
});

define("PartnersHub.RealAccountCreation.PlaceOfBirthBlock.mvc$translationsResources", ["exports", "PartnersHub.RealAccountCreation.PlaceOfBirthBlock.mvc$translationsResources.ar-001", "PartnersHub.RealAccountCreation.PlaceOfBirthBlock.mvc$translationsResources.de-DE", "PartnersHub.RealAccountCreation.PlaceOfBirthBlock.mvc$translationsResources.es-ES", "PartnersHub.RealAccountCreation.PlaceOfBirthBlock.mvc$translationsResources.fr-FR", "PartnersHub.RealAccountCreation.PlaceOfBirthBlock.mvc$translationsResources.it-IT", "PartnersHub.RealAccountCreation.PlaceOfBirthBlock.mvc$translationsResources.pl-PL", "PartnersHub.RealAccountCreation.PlaceOfBirthBlock.mvc$translationsResources.pt-PT", "PartnersHub.RealAccountCreation.PlaceOfBirthBlock.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_RealAccountCreation_PlaceOfBirthBlock_mvc_translationsResources_ar001, PartnersHub_RealAccountCreation_PlaceOfBirthBlock_mvc_translationsResources_deDE, PartnersHub_RealAccountCreation_PlaceOfBirthBlock_mvc_translationsResources_esES, PartnersHub_RealAccountCreation_PlaceOfBirthBlock_mvc_translationsResources_frFR, PartnersHub_RealAccountCreation_PlaceOfBirthBlock_mvc_translationsResources_itIT, PartnersHub_RealAccountCreation_PlaceOfBirthBlock_mvc_translationsResources_plPL, PartnersHub_RealAccountCreation_PlaceOfBirthBlock_mvc_translationsResources_ptPT, PartnersHub_RealAccountCreation_PlaceOfBirthBlock_mvc_translationsResources_ruRU) {
    return {
        "ar-001": {
            "translations": PartnersHub_RealAccountCreation_PlaceOfBirthBlock_mvc_translationsResources_ar001,
            "isRTL": true
        },
        "de-DE": {
            "translations": PartnersHub_RealAccountCreation_PlaceOfBirthBlock_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_RealAccountCreation_PlaceOfBirthBlock_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_RealAccountCreation_PlaceOfBirthBlock_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_RealAccountCreation_PlaceOfBirthBlock_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_RealAccountCreation_PlaceOfBirthBlock_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_RealAccountCreation_PlaceOfBirthBlock_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_RealAccountCreation_PlaceOfBirthBlock_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});