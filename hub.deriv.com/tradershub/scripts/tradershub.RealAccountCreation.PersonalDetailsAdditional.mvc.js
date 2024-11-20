define("tradershub.RealAccountCreation.PersonalDetailsAdditional.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.controller", "OutSystemsUI.model", "tradershub.controller", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure", "tradershub.model$RL_10436c71a703b5c08e6ed74c34052e0a", "tradershub.model$EN_3e32e8f97f4a30dd16a3843f28450f43EntityRecord", "tradershub.model$RL_dd299c02eac5eb3e7ba5132848a21b2a", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "tradershub.model$RL_c0f17d75c546075264f5d075e00ba65b", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure", "tradershub.model$ST_f41b21ee1ca377ae619742cd5408a376Structure", "tradershub.model$ST_0690f5116aa54a9a733230ed909c87fbStructure", "tradershub.model$ST_d0797dfc77615b3a25728769b9f01e76Structure", "tradershub.model$ST_87555d90f21aa57fd03a9d7e779d31e3Structure", "tradershub.model$ST_739ced57b6317085dd90ed93a3159f3eStructure", "tradershub.model$ST_81244dbb8e72a05a708e9a449198444eStructure", "tradershub.model$RL_f95d89703009688d0282052da4de0dc3", "tradershub.model$ST_2848cd79cb87a073a52246b673b32b79Structure", "tradershub.model$ST_8e51c0579a0eeb9a2bb60e1b5bc699e3Structure", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "OutSystemsUI.controller$FocusFirstInvalidInput", "tradershub.model$ST_f196b2bf03fb028fc7e9ccfdf5bcd25fStructure", "tradershub.model$ST_330a68ea16ade2addf77a21e8231421fStructure", "tradershub.controller$FetchAccountPurposeList", "OutSystemsUI.controller$SetFocus", "tradershub.model$ST_3d5602677826d8c01775c21c1065c8ceStructure"], function(OSRuntimeCore, tradershubModel, OutSystemsUIController, OutSystemsUIModel, tradershubController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ResidenceList", "residenceListVar", "ResidenceList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_10436c71a703b5c08e6ed74c34052e0a());
                    }, false, tradershubModel.RL_10436c71a703b5c08e6ed74c34052e0a),
                    this.attr("CurrentResidence", "currentResidenceVar", "CurrentResidence", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_1eac13b44db3d2db577291973f4a7e96Structure());
                    }, false, tradershubModel.ST_1eac13b44db3d2db577291973f4a7e96Structure),
                    this.attr("IsCountrySelectorPopupOpen", "isCountrySelectorPopupOpenVar", "IsCountrySelectorPopupOpen", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("SelectedPlaceOfBirth_Mobile", "selectedPlaceOfBirth_MobileVar", "SelectedPlaceOfBirth_Mobile", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("AccountPurposeList", "accountPurposeListVar", "AccountPurposeList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_dd299c02eac5eb3e7ba5132848a21b2a());
                    }, false, tradershubModel.RL_dd299c02eac5eb3e7ba5132848a21b2a)
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
                DesktopForm: OS.Model.ValidationWidgetRecord,
                Input_PlaceOfBirth: OS.Model.ValidationWidgetRecord,
                Input_Phonenumber: OS.Model.ValidationWidgetRecord,
                Dropdown_AccountPurpose: OS.Model.ValidationWidgetRecord
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

define("tradershub.RealAccountCreation.PersonalDetailsAdditional.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "OutSystemsUI.model", "react", "@outsystems/runtime-view-js", "tradershub.RealAccountCreation.PersonalDetailsAdditional.mvc$model", "tradershub.RealAccountCreation.PersonalDetailsAdditional.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.RealAccountCreationLayout.mvc$view", "@outsystems/runtime-widgets-js", "OutSystemsUI.Interaction.DropdownSearch.mvc$view", "OutSystemsUI.Interaction.InputWithIcon.mvc$view", "tradershub.Common.CountryOfTaxResidenceSelector.mvc$view", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure", "tradershub.model$RL_10436c71a703b5c08e6ed74c34052e0a", "tradershub.model$EN_3e32e8f97f4a30dd16a3843f28450f43EntityRecord", "tradershub.model$RL_dd299c02eac5eb3e7ba5132848a21b2a", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "tradershub.model$RL_c0f17d75c546075264f5d075e00ba65b", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure", "tradershub.model$ST_f41b21ee1ca377ae619742cd5408a376Structure", "tradershub.model$ST_0690f5116aa54a9a733230ed909c87fbStructure", "tradershub.model$ST_d0797dfc77615b3a25728769b9f01e76Structure", "tradershub.model$ST_87555d90f21aa57fd03a9d7e779d31e3Structure", "tradershub.model$ST_739ced57b6317085dd90ed93a3159f3eStructure", "tradershub.model$ST_81244dbb8e72a05a708e9a449198444eStructure", "tradershub.model$RL_f95d89703009688d0282052da4de0dc3", "tradershub.model$ST_2848cd79cb87a073a52246b673b32b79Structure", "tradershub.model$ST_8e51c0579a0eeb9a2bb60e1b5bc699e3Structure", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "OutSystemsUI.controller$FocusFirstInvalidInput", "tradershub.model$ST_f196b2bf03fb028fc7e9ccfdf5bcd25fStructure", "tradershub.model$ST_330a68ea16ade2addf77a21e8231421fStructure", "tradershub.controller$FetchAccountPurposeList", "OutSystemsUI.controller$SetFocus", "tradershub.model$ST_3d5602677826d8c01775c21c1065c8ceStructure"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, OutSystemsUIModel, React, OSView, tradershub_RealAccountCreation_PersonalDetailsAdditional_mvc_model, tradershub_RealAccountCreation_PersonalDetailsAdditional_mvc_controller, tradershubClientVariables, tradershub_Layouts_RealAccountCreationLayout_mvc_view, OSWidgets, OutSystemsUI_Interaction_DropdownSearch_mvc_view, OutSystemsUI_Interaction_InputWithIcon_mvc_view, tradershub_Common_CountryOfTaxResidenceSelector_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreation.PersonalDetailsAdditional";
        }

        static getAttributes() {
            return {
                codeFunction: "PersonalDetailsAdditional",
                functionKey: "d5ec31a8-36fc-44e7-89e0-1d6cf9910ecc",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.RealAccountCreation.PersonalDetailsAdditional.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_RealAccountCreationLayout_mvc_view, OutSystemsUI_Interaction_DropdownSearch_mvc_view, OutSystemsUI_Interaction_InputWithIcon_mvc_view, tradershub_Common_CountryOfTaxResidenceSelector_mvc_view];
        }

        get modelFactory() {
            return tradershub_RealAccountCreation_PersonalDetailsAdditional_mvc_model;
        }

        get controllerFactory() {
            return tradershub_RealAccountCreation_PersonalDetailsAdditional_mvc_controller;
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


            return OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("qDHs1fw250SJ4B1s+ZEOzA#TitleExpression.-545367396.1", "Personal details | Deriv");
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
                    Analytics: model.getCachedValue(idService.getId("7MOohYur40+aBXzcHTPYkQ.Analytics"), function() {
                        return function() {
                            var rec = new tradershubModel.ST_0dd6e149ce474591a764bb53175023a1Structure();
                            rec.stepCodenameAttr = ((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut) ? ("personal_details") : ("personal_details_3"));
                            rec.stepNumberAttr = OS.BuiltinFunctions.decimalToText(((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut) ? (OS.BuiltinFunctions.integerToDecimal(1)) : ((new OS.DataTypes.Decimal("0.75")))));
                            return rec;
                        }();
                    }),
                    Title: "Personal details"
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
                        return [React.createElement(OSWidgets.Form, {
                            _validationProps: {
                                validationService: validationService
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "",
                            _idProps: {
                                service: idService,
                                name: "DesktopForm"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex align-items-center justify-content-space-between",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "Form"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "gap: 16px;"
                            },
                            style: "display-flex flex-direction-column flex-1",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "PlaceOfBirth"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            extendedProperties: {
                                style: "margin-bottom: 8px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [$text(getTranslation("EHR40idFyUC47faET5+B_w#Value", "Place of birth"))],
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            visible: model.getCachedValue(idService.getId("sTkhBx4csEigJzTvlNLTgQ.Visible"), function() {
                                return OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut;
                            }),
                            _idProps: {
                                service: idService,
                                uuid: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OutSystemsUI_Interaction_DropdownSearch_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                StartingSelection: model.getCachedValue(idService.getId("Search_PlaceOfBirth.StartingSelection"), function() {
                                    return function() {
                                        var list = new tradershubModel.RL_c0f17d75c546075264f5d075e00ba65b();
                                        list.pushAll([function() {
                                            var rec = new OutSystemsUIModel.ST_60f22bd2e9b10a22278b8afe6d7f601aStructure();
                                            rec.valueAttr = model.variables.currentResidenceVar.valueAttr;
                                            rec.labelAttr = model.variables.currentResidenceVar.textAttr;
                                            return rec;
                                        }()]);
                                        return list;
                                    }();
                                }, function() {
                                    return model.variables.currentResidenceVar.valueAttr;
                                }, function() {
                                    return model.variables.currentResidenceVar.textAttr;
                                }),
                                OptionsList: model.getCachedValue(idService.getId("Search_PlaceOfBirth.OptionsList"), function() {
                                    return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.residenceListVar, new tradershubModel.RL_c0f17d75c546075264f5d075e00ba65b(), function(source, target) {
                                        target.valueAttr = source.valueAttr;
                                        target.labelAttr = source.textAttr;
                                        return target;
                                    });
                                }, function() {
                                    return model.variables.residenceListVar;
                                }),
                                OptionalConfigs: model.getCachedValue(idService.getId("Search_PlaceOfBirth.OptionalConfigs"), function() {
                                    return function() {
                                        var rec = new OutSystemsUIModel.ST_4e53cb8815b86020ced1d2f2652c9b1dStructure();
                                        rec.allowMultipleSelectionAttr = false;
                                        rec.isDisabledAttr = false;
                                        rec.noResultsTextAttr = "No results found";
                                        rec.searchPromptAttr = "Search";
                                        rec.noOptionsTextAttr = "There are no options to show";
                                        return rec;
                                    }();
                                }),
                                Prompt: "Choose your place of birth"
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                onChanged$Action: function(dropdownSearchIdIn, selectedOptionListIn) {
                                    var eventHandlerContext = callContext.clone();
                                    controller.dropdownSearchOnChanged$Action(selectedOptionListIn, controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("DesktopForm")
                            },
                            _idProps: {
                                service: idService,
                                name: "Search_PlaceOfBirth",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            visible: model.getCachedValue(idService.getId("TL9Dse6e_EOMMwWYDkMCsg.Visible"), function() {
                                return !(OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut);
                            }),
                            _idProps: {
                                service: idService,
                                uuid: "9"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OutSystemsUI_Interaction_InputWithIcon_mvc_view, {
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
                                validationParentId: idService.getId("DesktopForm")
                            },
                            _idProps: {
                                service: idService,
                                uuid: "10",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                icon: PlaceholderContent.Empty,
                                input: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Input, {
                                        _validationProps: {
                                            validationService: validationService,
                                            validationParentId: idService.getId("DesktopForm")
                                        },
                                        enabled: true,
                                        extendedEvents: {
                                            onClick: function() {
                                                var eventHandlerContext = callContext.clone();
                                                controller.openCountrySelectorPopup$Action(controller.callContext(eventHandlerContext));

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
                                        variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.selectedPlaceOfBirth_MobileVar, function(value) {
                                            model.variables.selectedPlaceOfBirth_MobileVar = value;
                                        }),
                                        _idProps: {
                                            service: idService,
                                            name: "Input_PlaceOfBirth"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Image, {
                                        extendedEvents: {
                                            onClick: function() {
                                                var eventHandlerContext = callContext.clone();
                                                controller.openCountrySelectorPopup$Action(controller.callContext(eventHandlerContext));

                                                ;
                                            }
                                        },
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.arrowdown.svg"),
                                        style: "cursor-pointer",
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "12"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.selectedPlaceOfBirth_MobileVar)]
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 0px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "Phone"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: true,
                            targetWidget: "Input_Phonenumber",
                            _idProps: {
                                service: idService,
                                uuid: "14"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [$text(getTranslation("A7lrn7aDcUmg6dqEz_HCsA#Value", "Phone number"))],
                            _idProps: {
                                service: idService,
                                uuid: "15"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Input, {
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("DesktopForm")
                            },
                            enabled: true,
                            extendedProperties: {
                                style: "font-size: 16px; height: 48px; margin-top: 8px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: /*Text*/ 0,
                            mandatory: true,
                            maxLength: 50,
                            prompt: "Enter your phone number",
                            style: "form-control",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getRealSignupPhone(), function(value) {
                                tradershubClientVariables.setRealSignupPhone(value);
                            }),
                            _idProps: {
                                service: idService,
                                name: "Input_Phonenumber"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            extendedProperties: {
                                style: "margin-top: 0px;"
                            },
                            style: "display-flex flex-direction-column gap-s position-relative date-input",
                            visible: model.getCachedValue(idService.getId("AccountPurposeDesktop.Visible"), function() {
                                return OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut;
                            }),
                            _idProps: {
                                service: idService,
                                name: "AccountPurposeDesktop"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: true,
                            targetWidget: "Dropdown_AccountPurpose",
                            _idProps: {
                                service: idService,
                                uuid: "18"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [$text(getTranslation("PIW+CcE_v0K9LPp3h3klkA#Value", "Account purpose"))],
                            _idProps: {
                                service: idService,
                                uuid: "19"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Dropdown, {
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("DesktopForm")
                            },
                            dropdownMode: /*Custom*/ 1,
                            emptyValue: "Choose your account purpose",
                            enabled: true,
                            list: model.variables.accountPurposeListVar,
                            mandatory: true,
                            style: "dropdown",
                            values: function(elem) {
                                return elem.valueAttr;
                            },
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getRealSignupAccountOpeningReason(), function(value) {
                                tradershubClientVariables.setRealSignupAccountOpeningReason(value);
                            }),
                            _idProps: {
                                service: idService,
                                name: "Dropdown_AccountPurpose"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new IteratorPlaceholderContent(function(idService, callContext) {
                                    return [React.createElement(OSWidgets.Expression, {
                                        value: model.variables.accountPurposeListVar.getCurrent(callContext.iterationContext).labelAttr,
                                        _idProps: {
                                            service: idService,
                                            uuid: "21"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })];
                                }, callContext, idService, "1")
                            },
                            _dependencies: []
                        })))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            style: "display-flex justify-content-flex-end btn-container",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "22"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Button, {
                            enabled: true,
                            extendedProperties: {
                                style: "border-radius: 100px; border-width: 0px;"
                            },
                            isDefault: true,
                            onClick: function() {
                                _this.validateWidget(idService.getId("DesktopForm"));
                                var eventHandlerContext = callContext.clone();
                                controller.saveOnClick$Action(controller.callContext(eventHandlerContext));


                                ;
                            },
                            style: "btn btn-primary",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "23"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $text(getTranslation("+k9kMWO1RUGw6xs5GGMd3A#Value", "Next"))))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            visible: model.getCachedValue(idService.getId("TvVcIyb1gE6yQkhdWSKxcQ.Visible"), function() {
                                return !(OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut);
                            }),
                            _idProps: {
                                service: idService,
                                uuid: "24"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Popup, {
                            showPopup: model.variables.isCountrySelectorPopupOpenVar,
                            style: "popup-dialog popup-dialog__mobile",
                            _idProps: {
                                service: idService,
                                name: "PlaceOfBirthSelector_MobilePopup"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex align-items-center justify-content-space-between",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "26"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "27"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Link, {
                            enabled: true,
                            onClick: function() {
                                var eventHandlerContext = callContext.clone();
                                controller.closeStateSelectionPopupOnClick$Action(controller.callContext(eventHandlerContext));

                                ;
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "28"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.arrowleft.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "29"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 18px; font-weight: bold;"
                            },
                            style: "margin-left-base",
                            text: [$text(getTranslation("4HG04M3yyUCexTUnbew7iQ#Value", "Place of birth"))],
                            _idProps: {
                                service: idService,
                                uuid: "30"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Link, {
                            enabled: true,
                            onClick: function() {
                                var eventHandlerContext = callContext.clone();
                                controller.closeStateSelectionPopupOnClick$Action(controller.callContext(eventHandlerContext));

                                ;
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "31"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.closeicon.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "32"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), React.createElement(tradershub_Common_CountryOfTaxResidenceSelector_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                ResidenceList: model.variables.residenceListVar
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                onClickCountry$Action: function(residenceIn, labelIn) {
                                    var eventHandlerContext = callContext.clone();
                                    controller.placeofBirthSelectorOnClickCountry$Action(residenceIn, labelIn, controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                name: "PlaceOfBirthSelector_Mobile",
                                alias: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.isCountrySelectorPopupOpenVar), asPrimitiveValue(model.variables.accountPurposeListVar), asPrimitiveValue(tradershubClientVariables.getRealSignupAccountOpeningReason()), asPrimitiveValue(tradershubClientVariables.getRealSignupPhone()), asPrimitiveValue(model.variables.selectedPlaceOfBirth_MobileVar), asPrimitiveValue(model.variables.residenceListVar), asPrimitiveValue(model.variables.currentResidenceVar.textAttr), asPrimitiveValue(model.variables.currentResidenceVar.valueAttr)]
            }));
        }
    }

    return View;
});
define("tradershub.RealAccountCreation.PersonalDetailsAdditional.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "OutSystemsUI.model", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.RealAccountCreation.PersonalDetailsAdditional.mvc$translationsResources", "tradershub.RealAccountCreation.controller", "tradershub.RealAccountCreation.PersonalDetailsAdditional.mvc$controller.SaveOnClick.RudderStackJS", "tradershub.RealAccountCreation.PersonalDetailsAdditional.mvc$controller.SaveOnClick.ValidateJS", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure", "tradershub.model$RL_10436c71a703b5c08e6ed74c34052e0a", "tradershub.model$EN_3e32e8f97f4a30dd16a3843f28450f43EntityRecord", "tradershub.model$RL_dd299c02eac5eb3e7ba5132848a21b2a", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "tradershub.model$RL_c0f17d75c546075264f5d075e00ba65b", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure", "tradershub.model$ST_f41b21ee1ca377ae619742cd5408a376Structure", "tradershub.model$ST_0690f5116aa54a9a733230ed909c87fbStructure", "tradershub.model$ST_d0797dfc77615b3a25728769b9f01e76Structure", "tradershub.model$ST_87555d90f21aa57fd03a9d7e779d31e3Structure", "tradershub.model$ST_739ced57b6317085dd90ed93a3159f3eStructure", "tradershub.model$ST_81244dbb8e72a05a708e9a449198444eStructure", "tradershub.model$RL_f95d89703009688d0282052da4de0dc3", "tradershub.model$ST_2848cd79cb87a073a52246b673b32b79Structure", "tradershub.model$ST_8e51c0579a0eeb9a2bb60e1b5bc699e3Structure", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "OutSystemsUI.controller$FocusFirstInvalidInput", "tradershub.model$ST_f196b2bf03fb028fc7e9ccfdf5bcd25fStructure", "tradershub.model$ST_330a68ea16ade2addf77a21e8231421fStructure", "tradershub.controller$FetchAccountPurposeList", "OutSystemsUI.controller$SetFocus", "tradershub.model$ST_3d5602677826d8c01775c21c1065c8ceStructure"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, OutSystemsUIModel, tradershubLanguageResources, tradershubClientVariables, tradershub_RealAccountCreation_PersonalDetailsAdditional_mvc_TranslationsResources, tradershub_RealAccountCreationController, tradershub_RealAccountCreation_PersonalDetailsAdditional_mvc_controller_SaveOnClick_RudderStackJS, tradershub_RealAccountCreation_PersonalDetailsAdditional_mvc_controller_SaveOnClick_ValidateJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, tradershub_RealAccountCreation_PersonalDetailsAdditional_mvc_TranslationsResources);
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
            get _openCountrySelectorPopup$Action() {
                if (!(this.hasOwnProperty("__openCountrySelectorPopup$Action"))) {
                    this.__openCountrySelectorPopup$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OpenCountrySelectorPopup", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OpenCountrySelectorPopup");
                                span.setAttribute("outsystems.function.key", "194280fd-32ba-4e31-b25f-157e7c2f87fa");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OpenCountrySelectorPopup");
                                callContext = controller.callContext(callContext);
                                // IsCountrySelectorPopupOpen = True
                                model.variables.isCountrySelectorPopupOpenVar = true;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__openCountrySelectorPopup$Action;
            }
            set _openCountrySelectorPopup$Action(value) {
                this.__openCountrySelectorPopup$Action = value;
            }

            get _dropdownSearchOnChanged$Action() {
                if (!(this.hasOwnProperty("__dropdownSearchOnChanged$Action"))) {
                    this.__dropdownSearchOnChanged$Action = function(selectedOptionListIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("DropdownSearchOnChanged", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "DropdownSearchOnChanged");
                                span.setAttribute("outsystems.function.key", "34ea8ac3-6502-4236-b1d2-e31d6acb6c5e");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("DropdownSearchOnChanged");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.RealAccountCreation.PersonalDetailsAdditional.DropdownSearchOnChanged$vars"))());
                                vars.value.selectedOptionListInLocal = selectedOptionListIn.clone();
                                var listFilterVar = new OS.DataTypes.VariableHolder();
                                // Execute Action: ListFilter
                                listFilterVar.value = OS.SystemActions.listFilter(model.variables.residenceListVar, function(p) {
                                    return (p.valueAttr === vars.value.selectedOptionListInLocal.getCurrent(callContext.iterationContext).valueAttr);
                                }, callContext);

                                // SelectedPlaceOfBirth_Mobile = SelectedOptionList.Current.Label
                                model.variables.selectedPlaceOfBirth_MobileVar = vars.value.selectedOptionListInLocal.getCurrent(callContext.iterationContext).labelAttr;
                                // IsCountrySelectorPopupOpen = False
                                model.variables.isCountrySelectorPopupOpenVar = false;
                                // RealSignupPlaceOfBirth = SelectedOptionList.Current.Value
                                tradershubClientVariables.setRealSignupPlaceOfBirth(vars.value.selectedOptionListInLocal.getCurrent(callContext.iterationContext).valueAttr);
                                // RealSignupPhone = If
                                tradershubClientVariables.setRealSignupPhone((((OS.BuiltinFunctions.length(tradershubClientVariables.getRealSignupPhone()) > 1)) ? (tradershubClientVariables.getRealSignupPhone()) : (("+" + listFilterVar.value.filteredListOut.getCurrent(callContext.iterationContext).phone_iddAttr))));
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__dropdownSearchOnChanged$Action;
            }
            set _dropdownSearchOnChanged$Action(value) {
                this.__dropdownSearchOnChanged$Action = value;
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
                                span.setAttribute("outsystems.function.key", "43df2115-a17d-4a23-8e9e-be11d81eebab");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SaveOnClick");
                                callContext = controller.callContext(callContext);
                                var focusFirstInvalidInputVar = new OS.DataTypes.VariableHolder();
                                var validateJSResult = new OS.DataTypes.VariableHolder();
                                var jSONDeserializePersonalDetailsValidFieldsVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_f196b2bf03fb028fc7e9ccfdf5bcd25fStructure))());
                                var jSONDeserializePersonalDetailsValidationErrorVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_330a68ea16ade2addf77a21e8231421fStructure))());
                                validateJSResult.value = OS.Logger.startActiveSpan("Validate", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "Validate");
                                        span.setAttribute("outsystems.function.key", "a85d97fa-173b-418c-87ad-f3731134858e");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_RealAccountCreation_PersonalDetailsAdditional_mvc_controller_SaveOnClick_ValidateJS, "Validate", "SaveOnClick", {
                                            Phone: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupPhone(), OS.DataTypes.DataTypes.Text),
                                            AccountOpeningReason: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupAccountOpeningReason(), OS.DataTypes.DataTypes.Text),
                                            IsDesktop: OS.DataConversion.JSNodeParamConverter.to(OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut, OS.DataTypes.DataTypes.Boolean),
                                            PlaceOfBirth: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupPlaceOfBirth(), OS.DataTypes.DataTypes.Text),
                                            ValidationErrors: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                            ValidFields: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.RealAccountCreation.PersonalDetailsAdditional.SaveOnClick$validateJSResult"))();
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
                                jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateJSResult.value.validationErrorsOut, tradershubModel.ST_330a68ea16ade2addf77a21e8231421fStructure, false);
                                // JSON Deserialize: JSONDeserializePersonalDetailsValidFields
                                jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateJSResult.value.validFieldsOut, tradershubModel.ST_f196b2bf03fb028fc7e9ccfdf5bcd25fStructure, false);
                                // Input_PlaceOfBirth.Valid = JSONDeserializePersonalDetailsValidFields.Data.PlaceOfBirth
                                model.widgets.get(idService.getId("Input_PlaceOfBirth")).validAttr = jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut.placeOfBirthAttr;
                                // Input_PlaceOfBirth.ValidationMessage = JSONDeserializePersonalDetailsValidationError.Data.PlaceOfBirth
                                model.widgets.get(idService.getId("Input_PlaceOfBirth")).validationMessageAttr = jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut.placeOfBirthAttr;
                                // Input_Phonenumber.Valid = JSONDeserializePersonalDetailsValidFields.Data.Phone
                                model.widgets.get(idService.getId("Input_Phonenumber")).validAttr = jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut.phoneAttr;
                                // Input_Phonenumber.ValidationMessage = JSONDeserializePersonalDetailsValidationError.Data.Phone
                                model.widgets.get(idService.getId("Input_Phonenumber")).validationMessageAttr = jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut.phoneAttr;
                                // Dropdown_AccountPurpose.Valid = JSONDeserializePersonalDetailsValidFields.Data.AccountOpeningReason
                                model.widgets.get(idService.getId("Dropdown_AccountPurpose")).validAttr = jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut.accountOpeningReasonAttr;
                                // Dropdown_AccountPurpose.ValidationMessage = JSONDeserializePersonalDetailsValidationError.Data.AccountOpeningReason
                                model.widgets.get(idService.getId("Dropdown_AccountPurpose")).validationMessageAttr = jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut.accountOpeningReasonAttr;
                                if ((model.widgets.get(idService.getId("DesktopForm")).validAttr)) {
                                    OS.Logger.startActiveSpan("RudderStack", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "RudderStack");
                                            span.setAttribute("outsystems.function.key", "2ac7b053-e643-4da8-8263-a19432556260");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(tradershub_RealAccountCreation_PersonalDetailsAdditional_mvc_controller_SaveOnClick_RudderStackJS, "RudderStack", "SaveOnClick", null, function($parameters) {}, {
                                                IsDesktop: OutSystemsUIController.default.clientActionProxies.isDesktop$Action
                                            }, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                    // RealSignupPassedStepCount = 2
                                    tradershubClientVariables.setRealSignupPassedStepCount(2);
                                    if ((!(OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut))) {
                                        // Destination: /tradershub/PersonalDetailsAccountPurpose
                                        return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "personal-details/account-purpose", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                    } else {
                                        if ((tradershubClientVariables.getRealSignupIsIDVSupported())) {
                                            // Destination: /tradershub/IdentityVerification
                                            return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "identity-verification", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                        } else {
                                            // Destination: /tradershub/EmploymentDetails
                                            return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "employment-details", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                        }

                                    }

                                } else {
                                    // Execute Action: FocusFirstInvalidInput
                                    focusFirstInvalidInputVar.value = OutSystemsUIController.default.focusFirstInvalidInput$Action(idService.getId("DesktopForm"), true, "real-account-signup-layout__placeholder", callContext);

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

            get _onInitialize$Action() {
                if (!(this.hasOwnProperty("__onInitialize$Action"))) {
                    this.__onInitialize$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnInitialize", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnInitialize");
                                span.setAttribute("outsystems.function.key", "7000d486-e19b-41c5-8d8d-a6dd0dc2ccd8");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                // RealSignupCurrentStep = 2
                                tradershubClientVariables.setRealSignupCurrentStep(2);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onInitialize$Action;
            }
            set _onInitialize$Action(value) {
                this.__onInitialize$Action = value;
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
                                span.setAttribute("outsystems.function.key", "ad92a466-5ae2-48e2-a6ad-6fbae909100c");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var fetchAccountPurposeListVar = new OS.DataTypes.VariableHolder();
                                var listFilterVar = new OS.DataTypes.VariableHolder();
                                var setFocusVar = new OS.DataTypes.VariableHolder();
                                var jSONDeserializeResidenceListResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_3d5602677826d8c01775c21c1065c8ceStructure))());
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: SetFocus
                                    setFocusVar.value = OutSystemsUIController.default.setFocus$Action(idService.getId("Input_Phonenumber"), callContext);

                                    // JSON Deserialize: JSONDeserializeResidenceListResponse
                                    jSONDeserializeResidenceListResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(tradershubClientVariables.getRawResidenceListResponse(), tradershubModel.ST_3d5602677826d8c01775c21c1065c8ceStructure, false);
                                    // Execute Action: ListFilter
                                    listFilterVar.value = OS.SystemActions.listFilter(jSONDeserializeResidenceListResponseVar.value.dataOut.residence_listAttr, function(p) {
                                        return ((((tradershubClientVariables.getRealSignupPlaceOfBirth()) !== (OS.BuiltinFunctions.nullTextIdentifier()))) ? ((p.valueAttr === tradershubClientVariables.getRealSignupPlaceOfBirth())) : ((p.valueAttr === tradershubClientVariables.getSelectedResidence())));
                                    }, callContext);

                                    // ResidenceList = JSONDeserializeResidenceListResponse.Data.Residence_list
                                    model.variables.residenceListVar = jSONDeserializeResidenceListResponseVar.value.dataOut.residence_listAttr;
                                    // RealSignupPhone = If
                                    tradershubClientVariables.setRealSignupPhone((((OS.BuiltinFunctions.length(tradershubClientVariables.getRealSignupPhone()) > 1)) ? (tradershubClientVariables.getRealSignupPhone()) : (("+" + listFilterVar.value.filteredListOut.getCurrent(callContext.iterationContext).phone_iddAttr))));
                                    // CurrentResidence = ListFilter.FilteredList.Current
                                    model.variables.currentResidenceVar = listFilterVar.value.filteredListOut.getCurrent(callContext.iterationContext);
                                    // SelectedPlaceOfBirth_Mobile = ListFilter.FilteredList.Current.Text
                                    model.variables.selectedPlaceOfBirth_MobileVar = listFilterVar.value.filteredListOut.getCurrent(callContext.iterationContext).textAttr;
                                    // RealSignupPlaceOfBirth = ListFilter.FilteredList.Current.Value
                                    tradershubClientVariables.setRealSignupPlaceOfBirth(listFilterVar.value.filteredListOut.getCurrent(callContext.iterationContext).valueAttr);
                                    return OS.Flow.executeSequence(function() {
                                        if ((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut)) {
                                            // Execute Action: FetchAccountPurposeList
                                            model.flush();
                                            return tradershubController.default.fetchAccountPurposeList$Action(callContext).then(function(value) {
                                                fetchAccountPurposeListVar.value = value;
                                            }).then(function() {
                                                // AccountPurposeList = FetchAccountPurposeList.AccontPurposeList
                                                model.variables.accountPurposeListVar = fetchAccountPurposeListVar.value.accontPurposeListOut;
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

                return this.__onReady$Action;
            }
            set _onReady$Action(value) {
                this.__onReady$Action = value;
            }

            get _closeStateSelectionPopupOnClick$Action() {
                if (!(this.hasOwnProperty("__closeStateSelectionPopupOnClick$Action"))) {
                    this.__closeStateSelectionPopupOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("CloseStateSelectionPopupOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "CloseStateSelectionPopupOnClick");
                                span.setAttribute("outsystems.function.key", "cd8d00cd-5695-42cf-a926-5b029b8e97bd");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("CloseStateSelectionPopupOnClick");
                                callContext = controller.callContext(callContext);
                                // IsCountrySelectorPopupOpen = False
                                model.variables.isCountrySelectorPopupOpenVar = false;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__closeStateSelectionPopupOnClick$Action;
            }
            set _closeStateSelectionPopupOnClick$Action(value) {
                this.__closeStateSelectionPopupOnClick$Action = value;
            }

            get _placeofBirthSelectorOnClickCountry$Action() {
                if (!(this.hasOwnProperty("__placeofBirthSelectorOnClickCountry$Action"))) {
                    this.__placeofBirthSelectorOnClickCountry$Action = function(placeValueIn, labelIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("PlaceofBirthSelectorOnClickCountry", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "PlaceofBirthSelectorOnClickCountry");
                                span.setAttribute("outsystems.function.key", "e5cc2d79-f3f1-4be5-91f9-0bab03d6c3f1");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("PlaceofBirthSelectorOnClickCountry");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.RealAccountCreation.PersonalDetailsAdditional.PlaceofBirthSelectorOnClickCountry$vars"))());
                                vars.value.placeValueInLocal = placeValueIn;
                                vars.value.labelInLocal = labelIn;
                                var listFilterVar = new OS.DataTypes.VariableHolder();
                                // Execute Action: ListFilter
                                listFilterVar.value = OS.SystemActions.listFilter(model.variables.residenceListVar, function(p) {
                                    return (p.valueAttr === vars.value.placeValueInLocal);
                                }, callContext);

                                // SelectedPlaceOfBirth_Mobile = Label
                                model.variables.selectedPlaceOfBirth_MobileVar = vars.value.labelInLocal;
                                // IsCountrySelectorPopupOpen = False
                                model.variables.isCountrySelectorPopupOpenVar = false;
                                // RealSignupPlaceOfBirth = PlaceValue
                                tradershubClientVariables.setRealSignupPlaceOfBirth(vars.value.placeValueInLocal);
                                // RealSignupPhone = If
                                tradershubClientVariables.setRealSignupPhone((((OS.BuiltinFunctions.length(tradershubClientVariables.getRealSignupPhone()) > 1)) ? (tradershubClientVariables.getRealSignupPhone()) : (("+" + listFilterVar.value.filteredListOut.getCurrent(callContext.iterationContext).phone_iddAttr))));
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__placeofBirthSelectorOnClickCountry$Action;
            }
            set _placeofBirthSelectorOnClickCountry$Action(value) {
                this.__placeofBirthSelectorOnClickCountry$Action = value;
            }


            openCountrySelectorPopup$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OpenCountrySelectorPopup__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OpenCountrySelectorPopup");
                        span.setAttribute("outsystems.function.key", "194280fd-32ba-4e31-b25f-157e7c2f87fa");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._openCountrySelectorPopup$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            dropdownSearchOnChanged$Action(selectedOptionListIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("DropdownSearchOnChanged__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "DropdownSearchOnChanged");
                        span.setAttribute("outsystems.function.key", "34ea8ac3-6502-4236-b1d2-e31d6acb6c5e");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._dropdownSearchOnChanged$Action, callContext, selectedOptionListIn);
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
                        span.setAttribute("outsystems.function.key", "43df2115-a17d-4a23-8e9e-be11d81eebab");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
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

            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "7000d486-e19b-41c5-8d8d-a6dd0dc2ccd8");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "ad92a466-5ae2-48e2-a6ad-6fbae909100c");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
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

            closeStateSelectionPopupOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("CloseStateSelectionPopupOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "CloseStateSelectionPopupOnClick");
                        span.setAttribute("outsystems.function.key", "cd8d00cd-5695-42cf-a926-5b029b8e97bd");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._closeStateSelectionPopupOnClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            placeofBirthSelectorOnClickCountry$Action(placeValueIn, labelIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("PlaceofBirthSelectorOnClickCountry__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "PlaceofBirthSelectorOnClickCountry");
                        span.setAttribute("outsystems.function.key", "e5cc2d79-f3f1-4be5-91f9-0bab03d6c3f1");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._placeofBirthSelectorOnClickCountry$Action, callContext, placeValueIn, labelIn);
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
                    this._onInitializeEventHandler = function(callContext) {
                        var controller = this.controller;
                        var model = this.model;
                        var idService = this.idService;

                        return controller.onInitialize$Action(callContext);

                    };
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
                        return tradershub_RealAccountCreationController.default.handleError(ex, this.callContext());
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
        Controller.registerVariableGroupType("tradershub.RealAccountCreation.PersonalDetailsAdditional.DropdownSearchOnChanged$vars", [{
            name: "SelectedOptionList",
            attrName: "selectedOptionListInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.RecordList,
            defaultValue: function() {
                return new tradershubModel.RL_c0f17d75c546075264f5d075e00ba65b();
            },
            complexType: tradershubModel.RL_c0f17d75c546075264f5d075e00ba65b
        }]);
        Controller.registerVariableGroupType("tradershub.RealAccountCreation.PersonalDetailsAdditional.SaveOnClick$validateJSResult", [{
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
        Controller.registerVariableGroupType("tradershub.RealAccountCreation.PersonalDetailsAdditional.PlaceofBirthSelectorOnClickCountry$vars", [{
            name: "PlaceValue",
            attrName: "placeValueInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "Label",
            attrName: "labelInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.RealAccountCreation.PersonalDetailsAdditional.mvc$controller.SaveOnClick.RudderStackJS", [], function() {
    return function($actions, $roles, $public) {
        cacheTrackEvents.track({
            name: "ce_real_account_signup_form",
            properties: {
                action: "step_passed",
                step_num: $actions.IsDesktop().IsDesktop ? 1 : 0.75,
                step_codename: $actions.IsDesktop().IsDesktop ? "personal_details" : "personal_details_3",
                form_name: "real_account_signup_form_outsystems"
            }
        });
    };
});

define("tradershub.RealAccountCreation.PersonalDetailsAdditional.mvc$controller.SaveOnClick.ValidateJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        function mergeSchema(...schemas) {
            const [first, ...rest] = schemas;

            const merged = rest.reduce(
                (mergedSchemas, schema) => mergedSchemas.concat(schema),
                first
            );

            return merged;
        }

        const payload = {
            PlaceOfBirth: $parameters.PlaceOfBirth,
            Phone: $parameters.Phone,
        }

        if ($parameters.IsDesktop) {
            payload.AccountOpeningReason = $parameters.AccountOpeningReason
        }

        const phoneNumberRegex = /^\+\d{9,20}$/;

        const validationSchema = yup.object().shape({
            PlaceOfBirth: yup.string()
                .required('Place of birth is required.'),
            Phone: yup.string()
                .trim()
                .required('Phone number is required.')
                .matches(phoneNumberRegex, "Enter 9-20 digits, starting with '+'.")
        });

        const validationSchemaAccountOpeningReason = yup.object().shape({
            AccountOpeningReason: yup.string().required('Account purpose is required.')
        });



        const {
            errors,
            validFields
        } = validate($parameters.IsDesktop ? mergeSchema(validationSchema, validationSchemaAccountOpeningReason) : validationSchema, payload)

        $parameters.ValidationErrors = JSON.stringify(errors)

        $parameters.ValidFields = JSON.stringify(validFields)
    };
});


define("tradershub.RealAccountCreation.PersonalDetailsAdditional.mvc$translationsResources.fr-FR", [], function() {
    return {
        "4HG04M3yyUCexTUnbew7iQ#Value": "Lieu de naissance",
        "+k9kMWO1RUGw6xs5GGMd3A#Value": "Suivant",
        "PIW+CcE_v0K9LPp3h3klkA#Value": "Object du compte",
        "A7lrn7aDcUmg6dqEz_HCsA#Value": "Numéro de téléphone",
        "EHR40idFyUC47faET5+B_w#Value": "Lieu de naissance",
        "qDHs1fw250SJ4B1s+ZEOzA#Title": "Détails personnels | Deriv",
        "qDHs1fw250SJ4B1s+ZEOzA#TitleExpression.-545367396.1": "Détails personnels | Deriv"
    };
});

define("tradershub.RealAccountCreation.PersonalDetailsAdditional.mvc$translationsResources", ["exports", "tradershub.RealAccountCreation.PersonalDetailsAdditional.mvc$translationsResources.fr-FR"], function(exports, tradershub_RealAccountCreation_PersonalDetailsAdditional_mvc_translationsResources_frFR) {
    return {
        "fr-FR": {
            "translations": tradershub_RealAccountCreation_PersonalDetailsAdditional_mvc_translationsResources_frFR,
            "isRTL": false
        }
    };
});