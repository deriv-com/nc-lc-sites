define("tradershub.Signup.Citizenship.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.model", "tradershub.Layouts.SignupLayoutTopMenu.mvc$model", "OutSystemsUI.Interaction.DropdownSearch.mvc$model", "CustomComponents.FullScreenMobileModal.FullScreenMobileModal.mvc$model", "tradershub.Common.ResidenceSelector.mvc$model", "tradershub.model$ST_3d5602677826d8c01775c21c1065c8ceStructure", "tradershub.model$ST_268c8bb28743388aadc6c4f1ff502e41Structure", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$RL_c0f17d75c546075264f5d075e00ba65b", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure", "tradershub.model$RL_10436c71a703b5c08e6ed74c34052e0a", "tradershub.model$ST_f41b21ee1ca377ae619742cd5408a376Structure", "tradershub.model$ST_0690f5116aa54a9a733230ed909c87fbStructure", "tradershub.model$ST_d0797dfc77615b3a25728769b9f01e76Structure", "tradershub.model$ST_87555d90f21aa57fd03a9d7e779d31e3Structure", "tradershub.model$ST_739ced57b6317085dd90ed93a3159f3eStructure", "tradershub.model$ST_81244dbb8e72a05a708e9a449198444eStructure", "tradershub.model$RL_f95d89703009688d0282052da4de0dc3", "tradershub.model$ST_2848cd79cb87a073a52246b673b32b79Structure", "tradershub.model$ST_8e51c0579a0eeb9a2bb60e1b5bc699e3Structure", "tradershub.model$ST_1a4f07e6c8d6ea2e2ddfeb34b9b7a3c8Structure", "tradershub.model$ST_25b9b327f0c66aea511dc5895e377c2eStructure", "tradershub.model$ST_7ec9f9f71a508e65d3bd48bc2778f754Structure", "tradershub.model$ST_2dae613205bb81a0382059f7840afedcStructure", "tradershub.model$ST_152f791bd12ecebe98c991a448719621Structure", "tradershub.model$ST_9040ff9a31163603cbfef38781e8f440Structure", "tradershub.model$ST_d48988cf8eae8d40a2245d672da18414Structure", "tradershub.model$ST_c698a3174b73fffa916cca14f10645acStructure", "tradershub.model$ST_4090eb1c8cd075ebe26f8bb290f1ff93Structure", "tradershub.model$ST_c73d23121ed7b75585394958b5922504Structure", "tradershub.model$ST_258259badb7b79699a67a1a8307ba86dStructure", "tradershub.model$ST_30e2edd642322834fde0261ac531b663Structure", "tradershub.model$ST_6460f355981e1f253edfbd5d857d76bdStructure", "tradershub.model$RL_12a53b3c28725edc5745777d2ebb8a76", "tradershub.model$ST_c9354c8209eb9723d55bc21a92e84a3aStructure", "tradershub.model$ST_aed452511cf537505102a57a65fea54cStructure"], function(OSRuntimeCore, tradershubModel, OutSystemsUIModel, tradershub_Layouts_SignupLayoutTopMenu_mvcModel, OutSystemsUI_Interaction_DropdownSearch_mvcModel, CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvcModel, tradershub_Common_ResidenceSelector_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ResidenceListResponse", "residenceListResponseVar", "ResidenceListResponse", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_3d5602677826d8c01775c21c1065c8ceStructure());
                    }, false, tradershubModel.ST_3d5602677826d8c01775c21c1065c8ceStructure),
                    this.attr("WebsiteStatusResponse", "websiteStatusResponseVar", "WebsiteStatusResponse", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_268c8bb28743388aadc6c4f1ff502e41Structure());
                    }, false, tradershubModel.ST_268c8bb28743388aadc6c4f1ff502e41Structure),
                    this.attr("HasUserInteracted", "hasUserInteractedVar", "HasUserInteracted", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("IsCountrySelected", "isCountrySelectedVar", "IsCountrySelected", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("ShowError", "showErrorVar", "ShowError", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("SelectedCitizenship", "selectedCitizenshipVar", "SelectedCitizenship", true, false, OS.DataTypes.DataTypes.Text, function() {
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
                Model._hasValidationWidgetsValue = (((tradershub_Layouts_SignupLayoutTopMenu_mvcModel.hasValidationWidgets || OutSystemsUI_Interaction_DropdownSearch_mvcModel.hasValidationWidgets) || CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvcModel.hasValidationWidgets) || tradershub_Common_ResidenceSelector_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.Signup.Citizenship.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.model", "react", "@outsystems/runtime-view-js", "tradershub.Signup.Citizenship.mvc$model", "tradershub.Signup.Citizenship.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.SignupLayoutTopMenu.mvc$view", "@outsystems/runtime-widgets-js", "OutSystemsUI.Interaction.DropdownSearch.mvc$view", "CustomComponents.FullScreenMobileModal.FullScreenMobileModal.mvc$view", "tradershub.Common.ResidenceSelector.mvc$view", "tradershub.model$ST_3d5602677826d8c01775c21c1065c8ceStructure", "tradershub.model$ST_268c8bb28743388aadc6c4f1ff502e41Structure", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$RL_c0f17d75c546075264f5d075e00ba65b", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure", "tradershub.model$RL_10436c71a703b5c08e6ed74c34052e0a", "tradershub.model$ST_f41b21ee1ca377ae619742cd5408a376Structure", "tradershub.model$ST_0690f5116aa54a9a733230ed909c87fbStructure", "tradershub.model$ST_d0797dfc77615b3a25728769b9f01e76Structure", "tradershub.model$ST_87555d90f21aa57fd03a9d7e779d31e3Structure", "tradershub.model$ST_739ced57b6317085dd90ed93a3159f3eStructure", "tradershub.model$ST_81244dbb8e72a05a708e9a449198444eStructure", "tradershub.model$RL_f95d89703009688d0282052da4de0dc3", "tradershub.model$ST_2848cd79cb87a073a52246b673b32b79Structure", "tradershub.model$ST_8e51c0579a0eeb9a2bb60e1b5bc699e3Structure", "tradershub.model$ST_1a4f07e6c8d6ea2e2ddfeb34b9b7a3c8Structure", "tradershub.model$ST_25b9b327f0c66aea511dc5895e377c2eStructure", "tradershub.model$ST_7ec9f9f71a508e65d3bd48bc2778f754Structure", "tradershub.model$ST_2dae613205bb81a0382059f7840afedcStructure", "tradershub.model$ST_152f791bd12ecebe98c991a448719621Structure", "tradershub.model$ST_9040ff9a31163603cbfef38781e8f440Structure", "tradershub.model$ST_d48988cf8eae8d40a2245d672da18414Structure", "tradershub.model$ST_c698a3174b73fffa916cca14f10645acStructure", "tradershub.model$ST_4090eb1c8cd075ebe26f8bb290f1ff93Structure", "tradershub.model$ST_c73d23121ed7b75585394958b5922504Structure", "tradershub.model$ST_258259badb7b79699a67a1a8307ba86dStructure", "tradershub.model$ST_30e2edd642322834fde0261ac531b663Structure", "tradershub.model$ST_6460f355981e1f253edfbd5d857d76bdStructure", "tradershub.model$RL_12a53b3c28725edc5745777d2ebb8a76", "tradershub.model$ST_c9354c8209eb9723d55bc21a92e84a3aStructure", "tradershub.model$ST_aed452511cf537505102a57a65fea54cStructure"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIModel, React, OSView, tradershub_Signup_Citizenship_mvc_model, tradershub_Signup_Citizenship_mvc_controller, tradershubClientVariables, tradershub_Layouts_SignupLayoutTopMenu_mvc_view, OSWidgets, OutSystemsUI_Interaction_DropdownSearch_mvc_view, CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvc_view, tradershub_Common_ResidenceSelector_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "Signup.Citizenship";
        }

        static getAttributes() {
            return {
                codeFunction: "Citizenship",
                functionKey: "d31c2955-5737-4408-9302-d991126a8254",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.Signup.Citizenship.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return ["scripts/tradershub.TrackEvent.js"];
        }

        static getBlocks() {
            return [tradershub_Layouts_SignupLayoutTopMenu_mvc_view, OutSystemsUI_Interaction_DropdownSearch_mvc_view, CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvc_view, tradershub_Common_ResidenceSelector_mvc_view];
        }

        get modelFactory() {
            return tradershub_Signup_Citizenship_mvc_model;
        }

        get controllerFactory() {
            return tradershub_Signup_Citizenship_mvc_controller;
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


            return "Citizenship | Deriv";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(tradershub_Layouts_SignupLayoutTopMenu_mvc_view, {
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
                    mainContent: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "padding: 0px;"
                            },
                            gridProperties: {
                                classes: "OSInline"
                            },
                            style: "country-of-residence",
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
                                style: "background-color: white; border-radius: 8px; display: flex; flex-direction: column; height: auto; padding: 24px;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "400px"
                            },
                            style: "country-of-residence-dropdown",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "MainContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "align-items: center; display: flex; gap: 8px; height: auto; margin-bottom: 16px; padding: 0px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "HeaderContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Link, {
                            enabled: true,
                            extendedProperties: {
                                style: "height: 20px;"
                            },
                            transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                            url: OS.Navigation.generateScreenURL("tradershub", "country-of-residence", {}),
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            extendedProperties: {
                                style: "height: 24px;"
                            },
                            gridProperties: {
                                width: "20px"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.leftArrow.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 20px; font-weight: bold; margin-top: 0px; width: ;"
                            },
                            text: ["Citizenship"],
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-bottom: 8px; padding: 0px;"
                            },
                            visible: true,
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
                                ExtendedClass: model.getCachedValue(idService.getId("kZd9G4JsR0ixnwaQYTeIIQ.ExtendedClass"), function() {
                                    return ((((model.variables.hasUserInteractedVar && (OS.BuiltinFunctions.length(model.variables.selectedCitizenshipVar) === 0)) || (!(model.variables.hasUserInteractedVar) && model.variables.showErrorVar))) ? ("not-valid") : (""));
                                }, function() {
                                    return model.variables.hasUserInteractedVar;
                                }, function() {
                                    return model.variables.selectedCitizenshipVar;
                                }, function() {
                                    return model.variables.showErrorVar;
                                }),
                                StartingSelection: model.getCachedValue(idService.getId("kZd9G4JsR0ixnwaQYTeIIQ.StartingSelection"), function() {
                                    return function() {
                                        var list = new tradershubModel.RL_c0f17d75c546075264f5d075e00ba65b();
                                        list.pushAll([function() {
                                            var rec = new OutSystemsUIModel.ST_60f22bd2e9b10a22278b8afe6d7f601aStructure();
                                            rec.valueAttr = ((((tradershubClientVariables.getSelectedCitizenship()) !== (""))) ? (tradershubClientVariables.getSelectedCitizenship()) : (tradershubClientVariables.getSelectedResidence()));
                                            rec.labelAttr = tradershubClientVariables.getSelectedResidenceLabel();
                                            return rec;
                                        }()]);
                                        return list;
                                    }();
                                }, function() {
                                    return tradershubClientVariables.getSelectedCitizenship();
                                }, function() {
                                    return tradershubClientVariables.getSelectedResidence();
                                }, function() {
                                    return tradershubClientVariables.getSelectedResidenceLabel();
                                }),
                                OptionsList: model.getCachedValue(idService.getId("kZd9G4JsR0ixnwaQYTeIIQ.OptionsList"), function() {
                                    return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.residenceListResponseVar.residence_listAttr, new tradershubModel.RL_c0f17d75c546075264f5d075e00ba65b(), function(source, target) {
                                        target.valueAttr = source.valueAttr;
                                        target.labelAttr = source.textAttr;
                                        return target;
                                    });
                                }, function() {
                                    return model.variables.residenceListResponseVar.residence_listAttr;
                                }),
                                OptionalConfigs: model.getCachedValue(idService.getId("kZd9G4JsR0ixnwaQYTeIIQ.OptionalConfigs"), function() {
                                    return function() {
                                        var rec = new OutSystemsUIModel.ST_4e53cb8815b86020ced1d2f2652c9b1dStructure();
                                        rec.allowMultipleSelectionAttr = false;
                                        rec.noResultsTextAttr = "Services not available";
                                        rec.noOptionsTextAttr = "Services not available";
                                        return rec;
                                    }();
                                }),
                                Prompt: "Select your citizenship"
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
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "8",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), $if(model.variables.showErrorVar, false, this, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "margin-bottom: 24px; margin-top: 8px;"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "9"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "color: #DC2020; font-size: 12px;"
                                },
                                text: ["Citizenship is required."],
                                _idProps: {
                                    service: idService,
                                    uuid: "10"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }))];
                        }, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "margin-bottom: 24px;"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "color: #6A7178; font-size: 12px;"
                                },
                                text: ["Choose the citizenship/nationality shown on your official ID."],
                                _idProps: {
                                    service: idService,
                                    uuid: "12"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }))];
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "padding: 0px;"
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
                                style: "border-radius: 100px; height: 40px; margin-top: 0px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            isDefault: false,
                            onClick: function() {
                                _this.validateWidget("");
                                var eventHandlerContext = callContext.clone();
                                controller.onNextButtonClick$Action(controller.callContext(eventHandlerContext));


                                ;
                            },
                            style: "btn btn-primary ",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "14"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 14px;"
                            },
                            text: ["Next"],
                            _idProps: {
                                service: idService,
                                uuid: "15"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))))), React.createElement(CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                HasCloseIcon: false,
                                HasBackButton: true,
                                Title: "Citizenship"
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                onBack$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.residenceSelectorOnClickBack$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "16",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "background-color: white; border-radius: 8px; display: flex; flex-direction: column; margin-bottom: 0px; padding: 0 16px;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "17"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(tradershub_Common_ResidenceSelector_mvc_view, {
                                        getOwnerSpan: function() {
                                            return _this.getChildSpan("render");
                                        },
                                        getOwnerDisposeSpan: function() {
                                            return _this.getChildSpan("destroy");
                                        },
                                        inputs: {
                                            ShouldShowCitizenshipLabel: true,
                                            ResidenceList: model.variables.residenceListResponseVar.residence_listAttr,
                                            WebsiteStatus: model.variables.websiteStatusResponseVar.website_statusAttr
                                        },
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            },
                                            onClickBack$Action: function() {
                                                var eventHandlerContext = callContext.clone();
                                                controller.residenceSelectorOnClickBack$Action(controller.callContext(eventHandlerContext));

                                                ;
                                            },
                                            onClickCountry$Action: function(residenceIn) {
                                                var eventHandlerContext = callContext.clone();
                                                controller.onClickCountry$Action(residenceIn, controller.callContext(eventHandlerContext));

                                                ;
                                            }
                                        },
                                        _validationProps: {
                                            validationService: validationService
                                        },
                                        _idProps: {
                                            service: idService,
                                            uuid: "18",
                                            alias: "4"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    }))];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.websiteStatusResponseVar.website_statusAttr), asPrimitiveValue(model.variables.residenceListResponseVar.residence_listAttr)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.websiteStatusResponseVar.website_statusAttr), asPrimitiveValue(model.variables.residenceListResponseVar.residence_listAttr), asPrimitiveValue(tradershubClientVariables.getSelectedResidenceLabel()), asPrimitiveValue(tradershubClientVariables.getSelectedResidence()), asPrimitiveValue(model.variables.showErrorVar), asPrimitiveValue(model.variables.selectedCitizenshipVar), asPrimitiveValue(model.variables.hasUserInteractedVar)]
            }));
        }
    }

    return View;
});
define("tradershub.Signup.Citizenship.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.model", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.Signup.controller", "tradershub.Signup.Citizenship.mvc$controller.OnReady.RudderStackJS", "tradershub.model$ST_3d5602677826d8c01775c21c1065c8ceStructure", "tradershub.model$ST_268c8bb28743388aadc6c4f1ff502e41Structure", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$RL_c0f17d75c546075264f5d075e00ba65b", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure", "tradershub.model$RL_10436c71a703b5c08e6ed74c34052e0a", "tradershub.model$ST_f41b21ee1ca377ae619742cd5408a376Structure", "tradershub.model$ST_0690f5116aa54a9a733230ed909c87fbStructure", "tradershub.model$ST_d0797dfc77615b3a25728769b9f01e76Structure", "tradershub.model$ST_87555d90f21aa57fd03a9d7e779d31e3Structure", "tradershub.model$ST_739ced57b6317085dd90ed93a3159f3eStructure", "tradershub.model$ST_81244dbb8e72a05a708e9a449198444eStructure", "tradershub.model$RL_f95d89703009688d0282052da4de0dc3", "tradershub.model$ST_2848cd79cb87a073a52246b673b32b79Structure", "tradershub.model$ST_8e51c0579a0eeb9a2bb60e1b5bc699e3Structure", "tradershub.model$ST_1a4f07e6c8d6ea2e2ddfeb34b9b7a3c8Structure", "tradershub.model$ST_25b9b327f0c66aea511dc5895e377c2eStructure", "tradershub.model$ST_7ec9f9f71a508e65d3bd48bc2778f754Structure", "tradershub.model$ST_2dae613205bb81a0382059f7840afedcStructure", "tradershub.model$ST_152f791bd12ecebe98c991a448719621Structure", "tradershub.model$ST_9040ff9a31163603cbfef38781e8f440Structure", "tradershub.model$ST_d48988cf8eae8d40a2245d672da18414Structure", "tradershub.model$ST_c698a3174b73fffa916cca14f10645acStructure", "tradershub.model$ST_4090eb1c8cd075ebe26f8bb290f1ff93Structure", "tradershub.model$ST_c73d23121ed7b75585394958b5922504Structure", "tradershub.model$ST_258259badb7b79699a67a1a8307ba86dStructure", "tradershub.model$ST_30e2edd642322834fde0261ac531b663Structure", "tradershub.model$ST_6460f355981e1f253edfbd5d857d76bdStructure", "tradershub.model$RL_12a53b3c28725edc5745777d2ebb8a76", "tradershub.model$ST_c9354c8209eb9723d55bc21a92e84a3aStructure", "tradershub.model$ST_aed452511cf537505102a57a65fea54cStructure"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIModel, tradershubLanguageResources, tradershubClientVariables, tradershub_SignupController, tradershub_Signup_Citizenship_mvc_controller_OnReady_RudderStackJS) {
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
            get _residenceSelectorOnClickBack$Action() {
                if (!(this.hasOwnProperty("__residenceSelectorOnClickBack$Action"))) {
                    this.__residenceSelectorOnClickBack$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ResidenceSelectorOnClickBack", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ResidenceSelectorOnClickBack");
                                span.setAttribute("outsystems.function.key", "19f86cc4-0bc4-465c-974a-fbdcb68123f4");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("ResidenceSelectorOnClickBack");
                                callContext = controller.callContext(callContext);
                                // Destination: /tradershub/CountryOfResidence
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "country-of-residence", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__residenceSelectorOnClickBack$Action;
            }
            set _residenceSelectorOnClickBack$Action(value) {
                this.__residenceSelectorOnClickBack$Action = value;
            }

            get _onNextButtonClick$Action() {
                if (!(this.hasOwnProperty("__onNextButtonClick$Action"))) {
                    this.__onNextButtonClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnNextButtonClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnNextButtonClick");
                                span.setAttribute("outsystems.function.key", "487ae59f-5a44-4151-bf8f-386a43f64b04");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnNextButtonClick");
                                callContext = controller.callContext(callContext);
                                if ((((model.variables.isCountrySelectedVar && (OS.BuiltinFunctions.length(model.variables.selectedCitizenshipVar) > 0)) || ((OS.BuiltinFunctions.length(tradershubClientVariables.getSelectedResidence()) > 0) && !(model.variables.showErrorVar))))) {
                                    // SelectedCitizenship = SelectedCitizenship
                                    tradershubClientVariables.setSelectedCitizenship(model.variables.selectedCitizenshipVar);
                                    // Destination: /tradershub/CreatePassword
                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "create-password", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                } else {
                                    // ShowError = True
                                    model.variables.showErrorVar = true;
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onNextButtonClick$Action;
            }
            set _onNextButtonClick$Action(value) {
                this.__onNextButtonClick$Action = value;
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
                                span.setAttribute("outsystems.function.key", "6c7ef6be-d018-4716-bd7d-13510891e673");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                var jSONDeserializeWebsiteStatusResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_268c8bb28743388aadc6c4f1ff502e41Structure))());
                                var jSONDeserializeResidenceListResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_3d5602677826d8c01775c21c1065c8ceStructure))());
                                // SelectedCitizenship = SelectedCitizenship
                                model.variables.selectedCitizenshipVar = tradershubClientVariables.getSelectedCitizenship();
                                if (((OS.BuiltinFunctions.length(tradershubClientVariables.getRawResidenceListResponse()) > 0))) {
                                    // JSON Deserialize: JSONDeserializeResidenceListResponse
                                    jSONDeserializeResidenceListResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(tradershubClientVariables.getRawResidenceListResponse(), tradershubModel.ST_3d5602677826d8c01775c21c1065c8ceStructure, false);
                                    // ResidenceListResponse = JSONDeserializeResidenceListResponse.Data
                                    model.variables.residenceListResponseVar = jSONDeserializeResidenceListResponseVar.value.dataOut;
                                } else {
                                    if (((OS.BuiltinFunctions.length(tradershubClientVariables.getRawWebsiteStatusResponse()) > 0))) {
                                        // JSON Deserialize: JSONDeserializeWebsiteStatusResponse
                                        jSONDeserializeWebsiteStatusResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(tradershubClientVariables.getRawWebsiteStatusResponse(), tradershubModel.ST_268c8bb28743388aadc6c4f1ff502e41Structure, false);
                                        // WebsiteStatusResponse = JSONDeserializeWebsiteStatusResponse.Data
                                        model.variables.websiteStatusResponseVar = jSONDeserializeWebsiteStatusResponseVar.value.dataOut;
                                    } else {
                                        // SelectedCitizenship = SelectedResidence
                                        tradershubClientVariables.setSelectedCitizenship(tradershubClientVariables.getSelectedResidence());
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

                return this.__onInitialize$Action;
            }
            set _onInitialize$Action(value) {
                this.__onInitialize$Action = value;
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
                                span.setAttribute("outsystems.function.key", "a571ec10-d94c-4471-ae2a-e8d35d9f2488");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("DropdownSearchOnChanged");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.Signup.Citizenship.DropdownSearchOnChanged$vars"))());
                                vars.value.selectedOptionListInLocal = selectedOptionListIn.clone();
                                // SelectedCitizenship = SelectedOptionList.Current.Value
                                tradershubClientVariables.setSelectedCitizenship(vars.value.selectedOptionListInLocal.getCurrent(callContext.iterationContext).valueAttr);
                                // SelectedCitizenship = SelectedOptionList.Current.Value
                                model.variables.selectedCitizenshipVar = vars.value.selectedOptionListInLocal.getCurrent(callContext.iterationContext).valueAttr;
                                // HasUserInteracted = True
                                model.variables.hasUserInteractedVar = true;
                                // IsCountrySelected = If
                                model.variables.isCountrySelectedVar = ((((model.variables.selectedCitizenshipVar === "") || (tradershubClientVariables.getSelectedResidence() === ""))) ? (false) : (true));
                                // ShowError = If
                                model.variables.showErrorVar = ((model.variables.isCountrySelectedVar) ? (false) : (true));
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

            get _onClickCountry$Action() {
                if (!(this.hasOwnProperty("__onClickCountry$Action"))) {
                    this.__onClickCountry$Action = function(residenceIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickCountry", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickCountry");
                                span.setAttribute("outsystems.function.key", "e8732363-dd98-41b3-9e22-eb580486dd81");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickCountry");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.Signup.Citizenship.OnClickCountry$vars"))());
                                vars.value.residenceInLocal = residenceIn;
                                // SelectedCitizenship = Residence
                                tradershubClientVariables.setSelectedCitizenship(vars.value.residenceInLocal);
                                // Destination: /tradershub/CreatePassword
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "create-password", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickCountry$Action;
            }
            set _onClickCountry$Action(value) {
                this.__onClickCountry$Action = value;
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
                                span.setAttribute("outsystems.function.key", "eb147fde-a433-4f0d-bc82-2047bdbe53c4");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                OS.Logger.startActiveSpan("RudderStack", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "RudderStack");
                                        span.setAttribute("outsystems.function.key", "b1295f74-cfe6-43a3-a9a8-a03efbbf3f62");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_Signup_Citizenship_mvc_controller_OnReady_RudderStackJS, "RudderStack", "OnReady", null, function($parameters) {}, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
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


            residenceSelectorOnClickBack$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ResidenceSelectorOnClickBack__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ResidenceSelectorOnClickBack");
                        span.setAttribute("outsystems.function.key", "19f86cc4-0bc4-465c-974a-fbdcb68123f4");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._residenceSelectorOnClickBack$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onNextButtonClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnNextButtonClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnNextButtonClick");
                        span.setAttribute("outsystems.function.key", "487ae59f-5a44-4151-bf8f-386a43f64b04");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onNextButtonClick$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "6c7ef6be-d018-4716-bd7d-13510891e673");
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

            dropdownSearchOnChanged$Action(selectedOptionListIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("DropdownSearchOnChanged__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "DropdownSearchOnChanged");
                        span.setAttribute("outsystems.function.key", "a571ec10-d94c-4471-ae2a-e8d35d9f2488");
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

            onClickCountry$Action(residenceIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickCountry__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickCountry");
                        span.setAttribute("outsystems.function.key", "e8732363-dd98-41b3-9e22-eb580486dd81");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickCountry$Action, callContext, residenceIn);
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
                        span.setAttribute("outsystems.function.key", "eb147fde-a433-4f0d-bc82-2047bdbe53c4");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
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
                        return tradershub_SignupController.default.handleError(ex, this.callContext());
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
        Controller.registerVariableGroupType("tradershub.Signup.Citizenship.DropdownSearchOnChanged$vars", [{
            name: "SelectedOptionList",
            attrName: "selectedOptionListInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.RecordList,
            defaultValue: function() {
                return new tradershubModel.RL_c0f17d75c546075264f5d075e00ba65b();
            },
            complexType: tradershubModel.RL_c0f17d75c546075264f5d075e00ba65b
        }]);
        Controller.registerVariableGroupType("tradershub.Signup.Citizenship.OnClickCountry$vars", [{
            name: "Residence",
            attrName: "residenceInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.Signup.Citizenship.mvc$controller.OnReady.RudderStackJS", [], function() {
    return function($actions, $roles, $public) {
        setTimeout(() => {
            Analytics.Analytics.trackEvent("ce_virtual_signup_form", {
                action: "citizenship_selection_screen_opened",
                form_name: "virtual_signup_form_outsystems"
            })
        }, 100);
    };
});