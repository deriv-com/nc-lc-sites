define("tradershub.Signup.CountryOfResidence2.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.model", "tradershub.controller", "tradershub.Layouts.SignupLayoutTopMenu.mvc$model", "tradershub.Common.LoaderBlock.mvc$model", "OutSystemsUI.Interaction.DropdownSearch.mvc$model", "CustomComponentsOfficial.FullScreenMobileModal.FullScreenMobileModal.mvc$model", "tradershub.Common.ResidenceSelector.mvc$model", "tradershub.model$ST_3d5602677826d8c01775c21c1065c8ceStructure", "tradershub.model$ST_268c8bb28743388aadc6c4f1ff502e41Structure", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$RL_c0f17d75c546075264f5d075e00ba65b", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure", "tradershub.model$RL_10436c71a703b5c08e6ed74c34052e0a", "tradershub.model$ST_f41b21ee1ca377ae619742cd5408a376Structure", "tradershub.model$ST_0690f5116aa54a9a733230ed909c87fbStructure", "tradershub.model$ST_d0797dfc77615b3a25728769b9f01e76Structure", "tradershub.model$ST_87555d90f21aa57fd03a9d7e779d31e3Structure", "tradershub.model$ST_739ced57b6317085dd90ed93a3159f3eStructure", "tradershub.model$ST_81244dbb8e72a05a708e9a449198444eStructure", "tradershub.model$RL_f95d89703009688d0282052da4de0dc3", "tradershub.model$ST_2848cd79cb87a073a52246b673b32b79Structure", "tradershub.model$ST_8e51c0579a0eeb9a2bb60e1b5bc699e3Structure", "tradershub.model$ST_1a4f07e6c8d6ea2e2ddfeb34b9b7a3c8Structure", "tradershub.model$ST_25b9b327f0c66aea511dc5895e377c2eStructure", "tradershub.model$ST_7ec9f9f71a508e65d3bd48bc2778f754Structure", "tradershub.model$ST_2dae613205bb81a0382059f7840afedcStructure", "tradershub.model$ST_152f791bd12ecebe98c991a448719621Structure", "tradershub.model$ST_9040ff9a31163603cbfef38781e8f440Structure", "tradershub.model$ST_d48988cf8eae8d40a2245d672da18414Structure", "tradershub.model$ST_c698a3174b73fffa916cca14f10645acStructure", "tradershub.model$ST_4090eb1c8cd075ebe26f8bb290f1ff93Structure", "tradershub.model$ST_c73d23121ed7b75585394958b5922504Structure", "tradershub.model$ST_258259badb7b79699a67a1a8307ba86dStructure", "tradershub.model$ST_30e2edd642322834fde0261ac531b663Structure", "tradershub.model$ST_6460f355981e1f253edfbd5d857d76bdStructure", "tradershub.model$RL_12a53b3c28725edc5745777d2ebb8a76", "tradershub.model$ST_c9354c8209eb9723d55bc21a92e84a3aStructure", "tradershub.model$ST_aed452511cf537505102a57a65fea54cStructure", "tradershub.controller$RudderstackIdentifyEvent", "tradershub.controller$DerivApiSendMessage"], function(OSRuntimeCore, tradershubModel, OutSystemsUIModel, tradershubController, tradershub_Layouts_SignupLayoutTopMenu_mvcModel, tradershub_Common_LoaderBlock_mvcModel, OutSystemsUI_Interaction_DropdownSearch_mvcModel, CustomComponentsOfficial_FullScreenMobileModal_FullScreenMobileModal_mvcModel, tradershub_Common_ResidenceSelector_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("SelectedResidence", "selectedResidenceVar", "SelectedResidence", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("ResidenceListResponse", "residenceListResponseVar", "ResidenceListResponse", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_3d5602677826d8c01775c21c1065c8ceStructure());
                    }, false, tradershubModel.ST_3d5602677826d8c01775c21c1065c8ceStructure),
                    this.attr("WebsiteStatusResponse", "websiteStatusResponseVar", "WebsiteStatusResponse", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_268c8bb28743388aadc6c4f1ff502e41Structure());
                    }, false, tradershubModel.ST_268c8bb28743388aadc6c4f1ff502e41Structure),
                    this.attr("WebsiteStatusClientCountry", "websiteStatusClientCountryVar", "WebsiteStatusClientCountry", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_c0f17d75c546075264f5d075e00ba65b());
                    }, false, tradershubModel.RL_c0f17d75c546075264f5d075e00ba65b),
                    this.attr("IsCountrySelected", "isCountrySelectedVar", "IsCountrySelected", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("IsBrazil", "isBrazilVar", "IsBrazil", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("ShowPopup", "showPopupVar", "ShowPopup", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("ShowError", "showErrorVar", "ShowError", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("HasUserInteracted", "hasUserInteractedVar", "HasUserInteracted", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("ShowUnavailableServiceError", "showUnavailableServiceErrorVar", "ShowUnavailableServiceError", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("SelectedResidenceLabel", "selectedResidenceLabelVar", "SelectedResidenceLabel", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
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
                Model._hasValidationWidgetsValue = ((((tradershub_Layouts_SignupLayoutTopMenu_mvcModel.hasValidationWidgets || tradershub_Common_LoaderBlock_mvcModel.hasValidationWidgets) || OutSystemsUI_Interaction_DropdownSearch_mvcModel.hasValidationWidgets) || CustomComponentsOfficial_FullScreenMobileModal_FullScreenMobileModal_mvcModel.hasValidationWidgets) || tradershub_Common_ResidenceSelector_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.Signup.CountryOfResidence2.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.model", "react", "@outsystems/runtime-view-js", "tradershub.Signup.CountryOfResidence2.mvc$model", "tradershub.Signup.CountryOfResidence2.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.SignupLayoutTopMenu.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.Common.LoaderBlock.mvc$view", "OutSystemsUI.Interaction.DropdownSearch.mvc$view", "CustomComponentsOfficial.FullScreenMobileModal.FullScreenMobileModal.mvc$view", "tradershub.Common.ResidenceSelector.mvc$view", "tradershub.model$ST_3d5602677826d8c01775c21c1065c8ceStructure", "tradershub.model$ST_268c8bb28743388aadc6c4f1ff502e41Structure", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$RL_c0f17d75c546075264f5d075e00ba65b", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure", "tradershub.model$RL_10436c71a703b5c08e6ed74c34052e0a", "tradershub.model$ST_f41b21ee1ca377ae619742cd5408a376Structure", "tradershub.model$ST_0690f5116aa54a9a733230ed909c87fbStructure", "tradershub.model$ST_d0797dfc77615b3a25728769b9f01e76Structure", "tradershub.model$ST_87555d90f21aa57fd03a9d7e779d31e3Structure", "tradershub.model$ST_739ced57b6317085dd90ed93a3159f3eStructure", "tradershub.model$ST_81244dbb8e72a05a708e9a449198444eStructure", "tradershub.model$RL_f95d89703009688d0282052da4de0dc3", "tradershub.model$ST_2848cd79cb87a073a52246b673b32b79Structure", "tradershub.model$ST_8e51c0579a0eeb9a2bb60e1b5bc699e3Structure", "tradershub.model$ST_1a4f07e6c8d6ea2e2ddfeb34b9b7a3c8Structure", "tradershub.model$ST_25b9b327f0c66aea511dc5895e377c2eStructure", "tradershub.model$ST_7ec9f9f71a508e65d3bd48bc2778f754Structure", "tradershub.model$ST_2dae613205bb81a0382059f7840afedcStructure", "tradershub.model$ST_152f791bd12ecebe98c991a448719621Structure", "tradershub.model$ST_9040ff9a31163603cbfef38781e8f440Structure", "tradershub.model$ST_d48988cf8eae8d40a2245d672da18414Structure", "tradershub.model$ST_c698a3174b73fffa916cca14f10645acStructure", "tradershub.model$ST_4090eb1c8cd075ebe26f8bb290f1ff93Structure", "tradershub.model$ST_c73d23121ed7b75585394958b5922504Structure", "tradershub.model$ST_258259badb7b79699a67a1a8307ba86dStructure", "tradershub.model$ST_30e2edd642322834fde0261ac531b663Structure", "tradershub.model$ST_6460f355981e1f253edfbd5d857d76bdStructure", "tradershub.model$RL_12a53b3c28725edc5745777d2ebb8a76", "tradershub.model$ST_c9354c8209eb9723d55bc21a92e84a3aStructure", "tradershub.model$ST_aed452511cf537505102a57a65fea54cStructure", "tradershub.controller$RudderstackIdentifyEvent", "tradershub.controller$DerivApiSendMessage"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIModel, React, OSView, tradershub_Signup_CountryOfResidence2_mvc_model, tradershub_Signup_CountryOfResidence2_mvc_controller, tradershubClientVariables, tradershub_Layouts_SignupLayoutTopMenu_mvc_view, OSWidgets, tradershub_Common_LoaderBlock_mvc_view, OutSystemsUI_Interaction_DropdownSearch_mvc_view, CustomComponentsOfficial_FullScreenMobileModal_FullScreenMobileModal_mvc_view, tradershub_Common_ResidenceSelector_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "Signup.CountryOfResidence2";
        }

        static getAttributes() {
            return {
                codeFunction: "CountryOfResidence2",
                functionKey: "16f4f725-38a5-4717-8399-55444140dd23",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.Signup.CountryOfResidence2.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_SignupLayoutTopMenu_mvc_view, tradershub_Common_LoaderBlock_mvc_view, OutSystemsUI_Interaction_DropdownSearch_mvc_view, CustomComponentsOfficial_FullScreenMobileModal_FullScreenMobileModal_mvc_view, tradershub_Common_ResidenceSelector_mvc_view];
        }

        get modelFactory() {
            return tradershub_Signup_CountryOfResidence2_mvc_model;
        }

        get controllerFactory() {
            return tradershub_Signup_CountryOfResidence2_mvc_controller;
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


            return "Country of residence | Deriv";
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
                        return [$if(model.variables.isLoadingVar, false, this, function() {
                            return [React.createElement(tradershub_Common_LoaderBlock_mvc_view, {
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
                        }, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "main-container",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "deriv-25years-logo-container",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "LeftSideContainer"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.deriv25years.svg"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "country-of-residence-container",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "RightSideContainer"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "display: flex; flex-direction: column; gap: 24px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "352px"
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
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "HeaderContainer"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-size: 28px; font-weight: bold; margin-top: 0px;"
                                },
                                text: ["Country of residence"],
                                _idProps: {
                                    service: idService,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "padding: 0px;"
                                },
                                style: "",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "9"
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
                                    OptionalConfigs: model.getCachedValue(idService.getId("ti5l9nPyNkG05hKkI9Fl+g.OptionalConfigs"), function() {
                                        return function() {
                                            var rec = new OutSystemsUIModel.ST_4e53cb8815b86020ced1d2f2652c9b1dStructure();
                                            rec.allowMultipleSelectionAttr = false;
                                            rec.isDisabledAttr = false;
                                            rec.noResultsTextAttr = "No result was found";
                                            rec.noOptionsTextAttr = "There are no options to show";
                                            return rec;
                                        }();
                                    }),
                                    ExtendedClass: model.getCachedValue(idService.getId("ti5l9nPyNkG05hKkI9Fl+g.ExtendedClass"), function() {
                                        return (((model.variables.showErrorVar || model.variables.showUnavailableServiceErrorVar)) ? ("not-valid") : (""));
                                    }, function() {
                                        return model.variables.showErrorVar;
                                    }, function() {
                                        return model.variables.showUnavailableServiceErrorVar;
                                    }),
                                    Prompt: "Select your country of residence",
                                    StartingSelection: model.getCachedValue(idService.getId("ti5l9nPyNkG05hKkI9Fl+g.StartingSelection"), function() {
                                        return function() {
                                            var list = new tradershubModel.RL_c0f17d75c546075264f5d075e00ba65b();
                                            list.pushAll([function() {
                                                var rec = new OutSystemsUIModel.ST_60f22bd2e9b10a22278b8afe6d7f601aStructure();
                                                rec.valueAttr = ((((model.variables.selectedResidenceVar) !== (""))) ? (model.variables.selectedResidenceVar) : (model.variables.websiteStatusClientCountryVar.getCurrent(callContext.iterationContext).valueAttr));
                                                rec.labelAttr = ((((model.variables.selectedResidenceVar) !== (""))) ? (model.variables.selectedResidenceVar) : (model.variables.websiteStatusClientCountryVar.getCurrent(callContext.iterationContext).labelAttr));
                                                return rec;
                                            }()]);
                                            return list;
                                        }();
                                    }, function() {
                                        return model.variables.selectedResidenceVar;
                                    }, function() {
                                        return model.variables.websiteStatusClientCountryVar.getCurrent(callContext.iterationContext).valueAttr;
                                    }, function() {
                                        return model.variables.websiteStatusClientCountryVar.getCurrent(callContext.iterationContext).labelAttr;
                                    }),
                                    OptionsList: model.getCachedValue(idService.getId("ti5l9nPyNkG05hKkI9Fl+g.OptionsList"), function() {
                                        return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.residenceListResponseVar.residence_listAttr, new tradershubModel.RL_c0f17d75c546075264f5d075e00ba65b(), function(source, target) {
                                            target.valueAttr = source.valueAttr;
                                            target.labelAttr = source.textAttr;
                                            target.descriptionAttr = (((source.disabledAttr === "DISABLED")) ? ("Services not available") : (""));
                                            return target;
                                        });
                                    }, function() {
                                        return model.variables.residenceListResponseVar.residence_listAttr;
                                    })
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    onChanged$Action: function(dropdownSearchIdIn, selectedOptionListIn) {
                                        var eventHandlerContext = callContext.clone();
                                        controller.dropdownSearchOnChanged$Action(selectedOptionListIn, selectedOptionListIn.getCurrent(callContext.iterationContext).valueAttr, controller.callContext(eventHandlerContext));

                                        ;
                                    }
                                },
                                _validationProps: {
                                    validationService: validationService
                                },
                                _idProps: {
                                    service: idService,
                                    uuid: "10",
                                    alias: "3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            }), $if(model.variables.showUnavailableServiceErrorVar, false, this, function() {
                                return [React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    extendedProperties: {
                                        style: "margin-top: 8px;"
                                    },
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "11"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "color: #DC2020; font-size: 12px;"
                                    },
                                    text: ["Services not available"],
                                    _idProps: {
                                        service: idService,
                                        uuid: "12"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }))];
                            }, function() {
                                return [$if(model.variables.showErrorVar, false, this, function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "margin-top: 8px;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "13"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "color: #DC2020; font-size: 12px;"
                                        },
                                        text: ["Country of residence is required."],
                                        _idProps: {
                                            service: idService,
                                            uuid: "14"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))];
                                }, function() {
                                    return [];
                                })];
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "padding: 0px;"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "15"
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
                                    uuid: "16"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-size: 16px;"
                                },
                                text: ["Next"],
                                _idProps: {
                                    service: idService,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })))))), React.createElement(OSWidgets.Popup, {
                                extendedProperties: {
                                    style: "border-radius: 8px; padding: 16px;"
                                },
                                showPopup: model.variables.showPopupVar,
                                style: "popup-dialog",
                                _idProps: {
                                    service: idService,
                                    uuid: "18"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "popup-container",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "19"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "font-size: 16px;"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "Header"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-weight: bold;"
                                },
                                text: ["Confirmation"],
                                _idProps: {
                                    service: idService,
                                    uuid: "21"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "22"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "line-height: 22px;"
                                },
                                style: "",
                                text: ["I confirm that I initiated the request to open an account with Deriv to trade OTC products issued and offered exclusively outside Brazil. I understand that Deriv is not regulated by the CVM, and I am establishing a relationship with a foreign company.", React.createElement("br"), "Confirmation is required."],
                                _idProps: {
                                    service: idService,
                                    uuid: "23"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "border-radius: 0px;"
                                },
                                style: "button-container",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "24"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Button, {
                                enabled: true,
                                extendedProperties: {
                                    style: "border-radius: 100px; color: #FF444F; height: 32px; padding: 0px 8px 0px 8px;"
                                },
                                gridProperties: {
                                    width: "76px",
                                    marginLeft: "0"
                                },
                                isDefault: false,
                                onClick: function() {
                                    _this.validateWidget("");
                                    var eventHandlerContext = callContext.clone();
                                    controller.onCancelClick$Action(controller.callContext(eventHandlerContext));


                                    ;
                                },
                                style: "btn",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "CancelButton"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "color: #FF444F; font-size: 12px;"
                                },
                                text: ["Cancel"],
                                _idProps: {
                                    service: idService,
                                    uuid: "26"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Button, {
                                enabled: true,
                                extendedProperties: {
                                    style: "border-radius: 100px; height: 32px; padding: 0px 8px 0px 8px;"
                                },
                                gridProperties: {
                                    width: "76px",
                                    marginLeft: "8px"
                                },
                                isDefault: false,
                                onClick: function() {
                                    try {
                                        OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "signup/citizenship", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade), null, true);
                                    } catch (ex) {
                                        if (((ex.name) !== ("RedirectOccurredException"))) {
                                            throw ex;
                                        }

                                    };
                                },
                                style: "btn-primary btn",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "ConfirmButton"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "border-style: solid; border-width: 0px; font-size: 12px; font-weight: 500;"
                                },
                                text: ["Confirm"],
                                _idProps: {
                                    service: idService,
                                    uuid: "28"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }))))), React.createElement(CustomComponentsOfficial_FullScreenMobileModal_FullScreenMobileModal_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    HasCloseIcon: false,
                                    Title: "Country of residence",
                                    HasBackButton: false
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
                                    uuid: "29",
                                    alias: "4"
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
                                            style: "",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "30"
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
                                                WebsiteStatus: model.variables.websiteStatusResponseVar.website_statusAttr,
                                                ShouldShowUnaviableMessage: true,
                                                ResidenceList: model.variables.residenceListResponseVar.residence_listAttr
                                            },
                                            events: {
                                                _handleError: function(ex) {
                                                    controller.handleError(ex);
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
                                                uuid: "31",
                                                alias: "5"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        }))];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(model.variables.residenceListResponseVar.residence_listAttr), asPrimitiveValue(model.variables.websiteStatusResponseVar.website_statusAttr)]
                            })];
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.websiteStatusResponseVar.website_statusAttr), asPrimitiveValue(model.variables.showPopupVar), asPrimitiveValue(model.variables.residenceListResponseVar.residence_listAttr), asPrimitiveValue(model.variables.websiteStatusClientCountryVar.getCurrent(callContext.iterationContext).labelAttr), asPrimitiveValue(model.variables.websiteStatusClientCountryVar.getCurrent(callContext.iterationContext).valueAttr), asPrimitiveValue(model.variables.selectedResidenceVar), asPrimitiveValue(model.variables.showUnavailableServiceErrorVar), asPrimitiveValue(model.variables.showErrorVar), asPrimitiveValue(model.variables.isLoadingVar)]
            }));
        }
    }

    return View;
});
define("tradershub.Signup.CountryOfResidence2.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.model", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.Signup.controller", "tradershub.Signup.CountryOfResidence2.mvc$controller.OnCancelClick.RudderStackJS", "tradershub.Signup.CountryOfResidence2.mvc$controller.DropdownSearchOnChanged.JavaScript1JS", "tradershub.Signup.CountryOfResidence2.mvc$controller.OnReady.GetCurrentResidenceBasedOnWebsiteStatus2JS", "tradershub.Signup.CountryOfResidence2.mvc$controller.OnReady.RudderStackJS", "tradershub.model$ST_3d5602677826d8c01775c21c1065c8ceStructure", "tradershub.model$ST_268c8bb28743388aadc6c4f1ff502e41Structure", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$RL_c0f17d75c546075264f5d075e00ba65b", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure", "tradershub.model$RL_10436c71a703b5c08e6ed74c34052e0a", "tradershub.model$ST_f41b21ee1ca377ae619742cd5408a376Structure", "tradershub.model$ST_0690f5116aa54a9a733230ed909c87fbStructure", "tradershub.model$ST_d0797dfc77615b3a25728769b9f01e76Structure", "tradershub.model$ST_87555d90f21aa57fd03a9d7e779d31e3Structure", "tradershub.model$ST_739ced57b6317085dd90ed93a3159f3eStructure", "tradershub.model$ST_81244dbb8e72a05a708e9a449198444eStructure", "tradershub.model$RL_f95d89703009688d0282052da4de0dc3", "tradershub.model$ST_2848cd79cb87a073a52246b673b32b79Structure", "tradershub.model$ST_8e51c0579a0eeb9a2bb60e1b5bc699e3Structure", "tradershub.model$ST_1a4f07e6c8d6ea2e2ddfeb34b9b7a3c8Structure", "tradershub.model$ST_25b9b327f0c66aea511dc5895e377c2eStructure", "tradershub.model$ST_7ec9f9f71a508e65d3bd48bc2778f754Structure", "tradershub.model$ST_2dae613205bb81a0382059f7840afedcStructure", "tradershub.model$ST_152f791bd12ecebe98c991a448719621Structure", "tradershub.model$ST_9040ff9a31163603cbfef38781e8f440Structure", "tradershub.model$ST_d48988cf8eae8d40a2245d672da18414Structure", "tradershub.model$ST_c698a3174b73fffa916cca14f10645acStructure", "tradershub.model$ST_4090eb1c8cd075ebe26f8bb290f1ff93Structure", "tradershub.model$ST_c73d23121ed7b75585394958b5922504Structure", "tradershub.model$ST_258259badb7b79699a67a1a8307ba86dStructure", "tradershub.model$ST_30e2edd642322834fde0261ac531b663Structure", "tradershub.model$ST_6460f355981e1f253edfbd5d857d76bdStructure", "tradershub.model$RL_12a53b3c28725edc5745777d2ebb8a76", "tradershub.model$ST_c9354c8209eb9723d55bc21a92e84a3aStructure", "tradershub.model$ST_aed452511cf537505102a57a65fea54cStructure", "tradershub.controller$RudderstackIdentifyEvent", "tradershub.controller$DerivApiSendMessage"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIModel, tradershubLanguageResources, tradershubClientVariables, tradershub_SignupController, tradershub_Signup_CountryOfResidence2_mvc_controller_OnCancelClick_RudderStackJS, tradershub_Signup_CountryOfResidence2_mvc_controller_DropdownSearchOnChanged_JavaScript1JS, tradershub_Signup_CountryOfResidence2_mvc_controller_OnReady_GetCurrentResidenceBasedOnWebsiteStatus2JS, tradershub_Signup_CountryOfResidence2_mvc_controller_OnReady_RudderStackJS) {
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
            get _onNextButtonClick$Action() {
                if (!(this.hasOwnProperty("__onNextButtonClick$Action"))) {
                    this.__onNextButtonClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnNextButtonClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnNextButtonClick");
                                span.setAttribute("outsystems.function.key", "2f132623-cebb-41a2-ad6f-e6b3c0f5f29a");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnNextButtonClick");
                                callContext = controller.callContext(callContext);
                                if (((model.variables.isBrazilVar === true))) {
                                    // ShowPopup = True
                                    model.variables.showPopupVar = true;
                                } else {
                                    if ((((model.variables.isCountrySelectedVar && (OS.BuiltinFunctions.length(model.variables.selectedResidenceVar) > 0)) && !(model.variables.showUnavailableServiceErrorVar)))) {
                                        // SelectedResidence = SelectedResidence
                                        tradershubClientVariables.setSelectedResidence(model.variables.selectedResidenceVar);
                                        // SelectedResidenceLabel = SelectedResidenceLabel
                                        tradershubClientVariables.setSelectedResidenceLabel(model.variables.selectedResidenceLabelVar);
                                        // SelectedCitizenship = If
                                        tradershubClientVariables.setSelectedCitizenship(((((tradershubClientVariables.getSelectedCitizenship()) !== (""))) ? (tradershubClientVariables.getSelectedCitizenship()) : (model.variables.selectedResidenceVar)));
                                        // Destination: /tradershub/Citizenship2
                                        return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "signup/citizenship", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromRight), callContext, true);
                                    } else {
                                        // ShowError = If
                                        model.variables.showErrorVar = (((model.variables.isCountrySelectedVar && (OS.BuiltinFunctions.length(model.variables.selectedResidenceVar) > 0))) ? (false) : (true));
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

                return this.__onNextButtonClick$Action;
            }
            set _onNextButtonClick$Action(value) {
                this.__onNextButtonClick$Action = value;
            }

            get _onCancelClick$Action() {
                if (!(this.hasOwnProperty("__onCancelClick$Action"))) {
                    this.__onCancelClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnCancelClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnCancelClick");
                                span.setAttribute("outsystems.function.key", "58d67e92-f051-4c80-abec-e74ddcba0192");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnCancelClick");
                                callContext = controller.callContext(callContext);
                                OS.Logger.startActiveSpan("RudderStack", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "RudderStack");
                                        span.setAttribute("outsystems.function.key", "c8904180-b6a1-45b7-bfd7-e01b166085ad");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_Signup_CountryOfResidence2_mvc_controller_OnCancelClick_RudderStackJS, "RudderStack", "OnCancelClick", null, function($parameters) {}, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // ShowPopup = False
                                model.variables.showPopupVar = false;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onCancelClick$Action;
            }
            set _onCancelClick$Action(value) {
                this.__onCancelClick$Action = value;
            }

            get _onClickCountry$Action() {
                if (!(this.hasOwnProperty("__onClickCountry$Action"))) {
                    this.__onClickCountry$Action = function(mobileSelectedResidenceIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickCountry", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickCountry");
                                span.setAttribute("outsystems.function.key", "602d242d-271f-4d4c-b6b3-b85c9ae3a1cf");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickCountry");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.Signup.CountryOfResidence2.OnClickCountry$vars"))());
                                vars.value.mobileSelectedResidenceInLocal = mobileSelectedResidenceIn;
                                // SelectedResidence = MobileSelectedResidence
                                tradershubClientVariables.setSelectedResidence(vars.value.mobileSelectedResidenceInLocal);
                                // SelectedResidence = MobileSelectedResidence
                                model.variables.selectedResidenceVar = vars.value.mobileSelectedResidenceInLocal;
                                // IsBrazil = MobileSelectedResidence = "br"
                                model.variables.isBrazilVar = (vars.value.mobileSelectedResidenceInLocal === "br");
                                if (((model.variables.isBrazilVar === true))) {
                                    // ShowPopup = True
                                    model.variables.showPopupVar = true;
                                } else {
                                    // Destination: /tradershub/Citizenship2
                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "signup/citizenship", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                }

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

            get _dropdownSearchOnChanged$Action() {
                if (!(this.hasOwnProperty("__dropdownSearchOnChanged$Action"))) {
                    this.__dropdownSearchOnChanged$Action = function(selectedOptionListIn, selectedCountryIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("DropdownSearchOnChanged", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "DropdownSearchOnChanged");
                                span.setAttribute("outsystems.function.key", "81e5674e-cf89-4ebe-8e52-1b40ed733a6b");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("DropdownSearchOnChanged");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.Signup.CountryOfResidence2.DropdownSearchOnChanged$vars"))());
                                vars.value.selectedOptionListInLocal = selectedOptionListIn.clone();
                                vars.value.selectedCountryInLocal = selectedCountryIn;
                                var javaScript1JSResult = new OS.DataTypes.VariableHolder();
                                var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                // JSON Serialize: JSONSerialize1
                                jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.residenceListResponseVar, false, false);
                                javaScript1JSResult.value = OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "JavaScript1");
                                        span.setAttribute("outsystems.function.key", "e4a60f5b-ac90-4887-8107-93e935a157aa");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_Signup_CountryOfResidence2_mvc_controller_DropdownSearchOnChanged_JavaScript1JS, "JavaScript1", "DropdownSearchOnChanged", {
                                            SelectedCountry: OS.DataConversion.JSNodeParamConverter.to(vars.value.selectedOptionListInLocal.getCurrent(callContext.iterationContext).valueAttr, OS.DataTypes.DataTypes.Text),
                                            ResidenceList: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize1Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                            IsDisabledCountry: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.Signup.CountryOfResidence2.DropdownSearchOnChanged$javaScript1JSResult"))();
                                            jsNodeResult.isDisabledCountryOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsDisabledCountry, OS.DataTypes.DataTypes.Boolean);
                                            return jsNodeResult;
                                        }, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // SelectedResidence = SelectedOptionList.Current.Value
                                tradershubClientVariables.setSelectedResidence(vars.value.selectedOptionListInLocal.getCurrent(callContext.iterationContext).valueAttr);
                                // SelectedResidence = SelectedOptionList.Current.Value
                                model.variables.selectedResidenceVar = vars.value.selectedOptionListInLocal.getCurrent(callContext.iterationContext).valueAttr;
                                // IsCountrySelected = If
                                model.variables.isCountrySelectedVar = (((OS.BuiltinFunctions.length(model.variables.selectedResidenceVar) === 0)) ? (false) : (true));
                                // ShowError = If
                                model.variables.showErrorVar = (((model.variables.isCountrySelectedVar && (OS.BuiltinFunctions.length(model.variables.selectedResidenceVar) > 0))) ? (false) : (true));
                                // IsBrazil = SelectedCountry = "br"
                                model.variables.isBrazilVar = (vars.value.selectedCountryInLocal === "br");
                                // HasUserInteracted = True
                                model.variables.hasUserInteractedVar = true;
                                // ShowUnavailableServiceError = JavaScript1.IsDisabledCountry
                                model.variables.showUnavailableServiceErrorVar = javaScript1JSResult.value.isDisabledCountryOut;
                                // SelectedResidenceLabel = SelectedOptionList.Current.Label
                                model.variables.selectedResidenceLabelVar = vars.value.selectedOptionListInLocal.getCurrent(callContext.iterationContext).labelAttr;
                                // IsSpain = SelectedCountry = "es"
                                tradershubClientVariables.setIsSpain((vars.value.selectedCountryInLocal === "es"));
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

            get _onReady$Action() {
                if (!(this.hasOwnProperty("__onReady$Action"))) {
                    this.__onReady$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnReady", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnReady");
                                span.setAttribute("outsystems.function.key", "9eb2d29d-89e1-4c7e-9b39-0f528b0de5b5");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var getWebsiteStatusVar = new OS.DataTypes.VariableHolder();
                                var getResidenceListVar = new OS.DataTypes.VariableHolder();
                                var getResidenceList2Var = new OS.DataTypes.VariableHolder();
                                var getCurrentResidenceBasedOnWebsiteStatus2JSResult = new OS.DataTypes.VariableHolder();
                                var jSONDeserializeGetResidenceListResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_3d5602677826d8c01775c21c1065c8ceStructure))());
                                var jSONDeserializeResidenceVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_c0f17d75c546075264f5d075e00ba65b))());
                                var jSONDeserializeWebsiteStatusVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_268c8bb28743388aadc6c4f1ff502e41Structure))());
                                return OS.Flow.executeAsyncFlow(function() {
                                    return OS.Flow.executeSequence(function() {
                                        if (((OS.BuiltinFunctions.length(tradershubClientVariables.getRawWebsiteStatusResponse()) === 0))) {
                                            // Execute Action: GetWebsiteStatus
                                            model.flush();
                                            return tradershubController.default.derivApiSendMessage$Action("", "website_status", false, callContext).then(function(value) {
                                                getWebsiteStatusVar.value = value;
                                            }).then(function() {
                                                // Execute Action: GetResidenceList2
                                                model.flush();
                                                return tradershubController.default.derivApiSendMessage$Action("", "residence_list", false, callContext).then(function(value) {
                                                    getResidenceList2Var.value = value;
                                                });
                                            }).then(function() {
                                                // RawWebsiteStatusResponse = GetWebsiteStatus.Response
                                                tradershubClientVariables.setRawWebsiteStatusResponse(getWebsiteStatusVar.value.responseOut);
                                                // RawResidenceListResponse = GetResidenceList2.Response
                                                tradershubClientVariables.setRawResidenceListResponse(getResidenceList2Var.value.responseOut);
                                            });
                                        } else {
                                            return OS.Flow.executeSequence(function() {
                                                if (((OS.BuiltinFunctions.length(tradershubClientVariables.getRawResidenceListResponse()) === 0))) {
                                                    // Execute Action: GetResidenceList
                                                    model.flush();
                                                    return tradershubController.default.derivApiSendMessage$Action("", "residence_list", false, callContext).then(function(value) {
                                                        getResidenceListVar.value = value;
                                                    }).then(function() {
                                                        // RawResidenceListResponse = GetResidenceList.Response
                                                        tradershubClientVariables.setRawResidenceListResponse(getResidenceListVar.value.responseOut);
                                                    });
                                                }

                                            });
                                        }

                                    }).then(function() {
                                        // JSON Deserialize: JSONDeserializeWebsiteStatus
                                        jSONDeserializeWebsiteStatusVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(tradershubClientVariables.getRawWebsiteStatusResponse(), tradershubModel.ST_268c8bb28743388aadc6c4f1ff502e41Structure, false);
                                        // Execute Action: RudderstackIdentifyEvent
                                        tradershubController.default.rudderstackIdentifyEvent$Action("", callContext);
                                        getCurrentResidenceBasedOnWebsiteStatus2JSResult.value = OS.Logger.startActiveSpan("GetCurrentResidenceBasedOnWebsiteStatus2", function(span) {
                                            if (span) {
                                                span.setAttribute("code.function", "GetCurrentResidenceBasedOnWebsiteStatus2");
                                                span.setAttribute("outsystems.function.key", "628589c8-dfc9-46fc-bd1d-75f197482e8f");
                                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                            }

                                            try {
                                                return controller.safeExecuteJSNode(tradershub_Signup_CountryOfResidence2_mvc_controller_OnReady_GetCurrentResidenceBasedOnWebsiteStatus2JS, "GetCurrentResidenceBasedOnWebsiteStatus2", "OnReady", {
                                                    SelectedResidence: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getSelectedResidence(), OS.DataTypes.DataTypes.Text),
                                                    ClientCountry: OS.DataConversion.JSNodeParamConverter.to(jSONDeserializeWebsiteStatusVar.value.dataOut.website_statusAttr.clients_countryAttr, OS.DataTypes.DataTypes.Text),
                                                    ResidenceList: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRawResidenceListResponse(), OS.DataTypes.DataTypes.Text),
                                                    CurrentResidence: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                                    IsServiceNotAvailable: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                                                }, function($parameters) {
                                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.Signup.CountryOfResidence2.OnReady$getCurrentResidenceBasedOnWebsiteStatus2JSResult"))();
                                                    jsNodeResult.currentResidenceOut = OS.DataConversion.JSNodeParamConverter.from($parameters.CurrentResidence, OS.DataTypes.DataTypes.Text);
                                                    jsNodeResult.isServiceNotAvailableOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsServiceNotAvailable, OS.DataTypes.DataTypes.Boolean);
                                                    return jsNodeResult;
                                                }, {}, {});
                                            } finally {
                                                if (span) {
                                                    span.end();
                                                }

                                            }

                                        }, 1);
                                        // JSON Deserialize: JSONDeserializeGetResidenceListResponse
                                        jSONDeserializeGetResidenceListResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(tradershubClientVariables.getRawResidenceListResponse(), tradershubModel.ST_3d5602677826d8c01775c21c1065c8ceStructure, false);
                                        // JSON Deserialize: JSONDeserializeResidence
                                        jSONDeserializeResidenceVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(getCurrentResidenceBasedOnWebsiteStatus2JSResult.value.currentResidenceOut, tradershubModel.RL_c0f17d75c546075264f5d075e00ba65b, false);
                                        // WebsiteStatusClientCountry = JSONDeserializeResidence.Data
                                        model.variables.websiteStatusClientCountryVar = jSONDeserializeResidenceVar.value.dataOut;
                                        // SelectedResidence = If
                                        tradershubClientVariables.setSelectedResidence((((OS.BuiltinFunctions.length(tradershubClientVariables.getSelectedResidence()) > 0)) ? (tradershubClientVariables.getSelectedResidence()) : (jSONDeserializeResidenceVar.value.dataOut.getCurrent(callContext.iterationContext).valueAttr)));
                                        // SelectedResidence = If
                                        model.variables.selectedResidenceVar = (((OS.BuiltinFunctions.length(tradershubClientVariables.getSelectedResidence()) > 0)) ? (tradershubClientVariables.getSelectedResidence()) : (jSONDeserializeResidenceVar.value.dataOut.getCurrent(callContext.iterationContext).valueAttr));
                                        // IsCountrySelected = True
                                        model.variables.isCountrySelectedVar = true;
                                        // SelectedResidenceLabel = If
                                        tradershubClientVariables.setSelectedResidenceLabel((((OS.BuiltinFunctions.length(tradershubClientVariables.getSelectedResidenceLabel()) > 0)) ? (tradershubClientVariables.getSelectedResidenceLabel()) : (jSONDeserializeResidenceVar.value.dataOut.getCurrent(callContext.iterationContext).labelAttr)));
                                        // SelectedResidenceLabel = If
                                        model.variables.selectedResidenceLabelVar = (((OS.BuiltinFunctions.length(tradershubClientVariables.getSelectedResidenceLabel()) > 0)) ? (tradershubClientVariables.getSelectedResidenceLabel()) : (jSONDeserializeResidenceVar.value.dataOut.getCurrent(callContext.iterationContext).labelAttr));
                                        // IsLoading = False
                                        model.variables.isLoadingVar = false;
                                        // ResidenceListResponse = JSONDeserializeGetResidenceListResponse.Data
                                        model.variables.residenceListResponseVar = jSONDeserializeGetResidenceListResponseVar.value.dataOut;
                                        // ShowUnavailableServiceError = GetCurrentResidenceBasedOnWebsiteStatus2.IsServiceNotAvailable
                                        model.variables.showUnavailableServiceErrorVar = getCurrentResidenceBasedOnWebsiteStatus2JSResult.value.isServiceNotAvailableOut;
                                        OS.Logger.startActiveSpan("RudderStack", function(span) {
                                            if (span) {
                                                span.setAttribute("code.function", "RudderStack");
                                                span.setAttribute("outsystems.function.key", "b6d595bb-b2cf-434a-98ab-8ba4af531222");
                                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                            }

                                            try {
                                                return controller.safeExecuteJSNode(tradershub_Signup_CountryOfResidence2_mvc_controller_OnReady_RudderStackJS, "RudderStack", "OnReady", null, function($parameters) {}, {}, {});
                                            } finally {
                                                if (span) {
                                                    span.end();
                                                }

                                            }

                                        }, 1);
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


            onNextButtonClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnNextButtonClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnNextButtonClick");
                        span.setAttribute("outsystems.function.key", "2f132623-cebb-41a2-ad6f-e6b3c0f5f29a");
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

            onCancelClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnCancelClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnCancelClick");
                        span.setAttribute("outsystems.function.key", "58d67e92-f051-4c80-abec-e74ddcba0192");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onCancelClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onClickCountry$Action(mobileSelectedResidenceIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickCountry__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickCountry");
                        span.setAttribute("outsystems.function.key", "602d242d-271f-4d4c-b6b3-b85c9ae3a1cf");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickCountry$Action, callContext, mobileSelectedResidenceIn);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            dropdownSearchOnChanged$Action(selectedOptionListIn, selectedCountryIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("DropdownSearchOnChanged__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "DropdownSearchOnChanged");
                        span.setAttribute("outsystems.function.key", "81e5674e-cf89-4ebe-8e52-1b40ed733a6b");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._dropdownSearchOnChanged$Action, callContext, selectedOptionListIn, selectedCountryIn);
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
                        span.setAttribute("outsystems.function.key", "9eb2d29d-89e1-4c7e-9b39-0f528b0de5b5");
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
        Controller.registerVariableGroupType("tradershub.Signup.CountryOfResidence2.OnClickCountry$vars", [{
            name: "MobileSelectedResidence",
            attrName: "mobileSelectedResidenceInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.Signup.CountryOfResidence2.DropdownSearchOnChanged$vars", [{
            name: "SelectedOptionList",
            attrName: "selectedOptionListInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.RecordList,
            defaultValue: function() {
                return new tradershubModel.RL_c0f17d75c546075264f5d075e00ba65b();
            },
            complexType: tradershubModel.RL_c0f17d75c546075264f5d075e00ba65b
        }, {
            name: "SelectedCountry",
            attrName: "selectedCountryInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.Signup.CountryOfResidence2.DropdownSearchOnChanged$javaScript1JSResult", [{
            name: "IsDisabledCountry",
            attrName: "isDisabledCountryOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.registerVariableGroupType("tradershub.Signup.CountryOfResidence2.OnReady$getCurrentResidenceBasedOnWebsiteStatus2JSResult", [{
            name: "CurrentResidence",
            attrName: "currentResidenceOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "IsServiceNotAvailable",
            attrName: "isServiceNotAvailableOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.Signup.CountryOfResidence2.mvc$controller.OnCancelClick.RudderStackJS", [], function() {
    return function($actions, $roles, $public) {
        cacheTrackEvents.track({
            name: "ce_virtual_signup_form",
            properties: {
                action: "country_selection_screen_back_button_os",
            }
        });
    };
});

define("tradershub.Signup.CountryOfResidence2.mvc$controller.DropdownSearchOnChanged.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const residenceList = JSON.parse($parameters.ResidenceList)

        const residence = residenceList.residence_list.find(residence => residence.value == $parameters.SelectedCountry)

        $parameters.IsDisabledCountry = Boolean(residence && residence.disabled)


    };
});

define("tradershub.Signup.CountryOfResidence2.mvc$controller.OnReady.GetCurrentResidenceBasedOnWebsiteStatus2JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const residenceList = JSON.parse($parameters.ResidenceList ?? '{}')
        let residence = residenceList?.residence_list?.filter(residence => residence.value == $parameters.ClientCountry && !residence.disabled)

        if ($parameters.SelectedResidence) {
            residence = residenceList?.residence_list?.filter(residence => residence.value == $parameters.SelectedResidence) ?? {}
            $parameters.IsServiceNotAvailable = Boolean(residence && residence[0]?.disabled)
        }

        $parameters.CurrentResidence = JSON.stringify(residence)
    };
});

define("tradershub.Signup.CountryOfResidence2.mvc$controller.OnReady.RudderStackJS", [], function() {
    return function($actions, $roles, $public) {
        cacheTrackEvents.track({
            name: "ce_virtual_signup_form",
            properties: {
                action: "country_selection_screen_opened",
                form_name: "virtual_signup_form_outsystems"
            }
        });
    };
});