define("PartnersHub.Home.PartnersHubDashboard.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.controller$IFrameLogout", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "PartnersHub.model$RC_a19cc9055121ac1f2503af4a7a4ef0bf", "PartnersHub.model$RL_8c597fb6cd4a582ba849bd4dfae97586"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController) {
    var OS = OSRuntimeCore; {
        class GetLanguagesByEnabledAggrRecInner extends
        OS.Model.AggregateRecord {
            static attributesToDeclare() {
                return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new GetLanguagesByEnabledAggrRec(new GetLanguagesByEnabledAggrRec.RecordClass({
                    RecordListType: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        GetLanguagesByEnabledAggrRecInner.RecordListType = PartnersHubModel.RL_8c597fb6cd4a582ba849bd4dfae97586;
        var GetLanguagesByEnabledAggrRec = GetLanguagesByEnabledAggrRecInner;
        GetLanguagesByEnabledAggrRec.init();
    }


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("GetLanguagesByEnabled", "getLanguagesByEnabledAggr", "GetLanguagesByEnabled", true, true, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new GetLanguagesByEnabledAggrRec());
                    }, true, GetLanguagesByEnabledAggrRec)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new VariablesRecord(new VariablesRecord.RecordClass({
                    getLanguagesByEnabledAggr: OS.DataTypes.ImmutableBase.getData(str)
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
                LanguageSwitcherDropdown: OS.Model.ValidationWidgetRecord
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

define("PartnersHub.Home.PartnersHubDashboard.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Home.PartnersHubDashboard.mvc$model", "PartnersHub.Home.PartnersHubDashboard.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Layouts.LayoutWithLoaderBlock.mvc$view", "@outsystems/runtime-widgets-js", "CustomComponentsOfficial.ButtonVariants.PrimaryButton.mvc$view", "CustomComponentsOfficial.ButtonVariants.SecondaryButton.mvc$view", "PartnersHub.Home.EnableCFDCommissionBanner.mvc$view", "PartnersHub.Home.ReferralLinksReports.mvc$view", "PartnersHub.Home.CompleteMyProfile.mvc$view", "PartnersHub.Home.CommissionPlans.mvc$view", "PartnersHub.Events.EventListSection.mvc$view", "PartnersHub.Home.PartnersAcademy.mvc$view", "PartnersHub.Home.AffiliateProgramme.mvc$view", "PartnersHub.Home.WhatsAppBanner.mvc$view", "PartnersHub.Common.CFDCommissionsModal.mvc$view", "PartnersHub.controller$IFrameLogout", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "PartnersHub.model$RC_a19cc9055121ac1f2503af4a7a4ef0bf", "PartnersHub.model$RL_8c597fb6cd4a582ba849bd4dfae97586"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_Home_PartnersHubDashboard_mvc_model, PartnersHub_Home_PartnersHubDashboard_mvc_controller, PartnersHubClientVariables, PartnersHub_Layouts_LayoutWithLoaderBlock_mvc_view, OSWidgets, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view, CustomComponentsOfficial_ButtonVariants_SecondaryButton_mvc_view, PartnersHub_Home_EnableCFDCommissionBanner_mvc_view, PartnersHub_Home_ReferralLinksReports_mvc_view, PartnersHub_Home_CompleteMyProfile_mvc_view, PartnersHub_Home_CommissionPlans_mvc_view, PartnersHub_Events_EventListSection_mvc_view, PartnersHub_Home_PartnersAcademy_mvc_view, PartnersHub_Home_AffiliateProgramme_mvc_view, PartnersHub_Home_WhatsAppBanner_mvc_view, PartnersHub_Common_CFDCommissionsModal_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "Home.PartnersHubDashboard";
        }

        static getAttributes() {
            return {
                codeFunction: "PartnersHubDashboard",
                functionKey: "c31f116a-8af3-4faf-90b7-67d384e710b4",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.Home.PartnersHubDashboard.css", "css/PartnersHub.PHubTest.extra.css"];
        }

        static getJsDependencies() {
            return ["scripts/PartnersHub.DerivAnalytics.js"];
        }

        static getBlocks() {
            return [PartnersHub_Layouts_LayoutWithLoaderBlock_mvc_view, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view, CustomComponentsOfficial_ButtonVariants_SecondaryButton_mvc_view, PartnersHub_Home_EnableCFDCommissionBanner_mvc_view, PartnersHub_Home_ReferralLinksReports_mvc_view, PartnersHub_Home_CompleteMyProfile_mvc_view, PartnersHub_Home_CommissionPlans_mvc_view, PartnersHub_Events_EventListSection_mvc_view, PartnersHub_Home_PartnersAcademy_mvc_view, PartnersHub_Home_AffiliateProgramme_mvc_view, PartnersHub_Home_WhatsAppBanner_mvc_view, PartnersHub_Common_CFDCommissionsModal_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Home_PartnersHubDashboard_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Home_PartnersHubDashboard_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("ahEfw_OKr0+Qt2fThOcQtA#Title", "PartnersHubDashboard");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(PartnersHub_Layouts_LayoutWithLoaderBlock_mvc_view, {
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
                    placeholder: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Popup, {
                            extendedProperties: {
                                style: "border-radius: 8px; padding: 20px;"
                            },
                            showPopup: PartnersHubClientVariables.getIsNotAPartner(),
                            style: "popup-dialog",
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
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: [$text(getTranslation("+cMjKEMeO0+xPg0MYrxs_Q#Value", "Welcome to the Partner Hub!"))],
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), $text(getTranslation("VM1sYo9Hq065DYlD1_+8Jw#Value", "It looks like you haven\'t signed up as a partner yet. To access our partner dashboard, please continue with your signup process.")), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "display: flex; gap: 16px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "4"
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
                                title: "Continue signup"
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                onClick$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.continueSignupOnClick$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "5",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), React.createElement(CustomComponentsOfficial_ButtonVariants_SecondaryButton_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                title: "Log out"
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                onClick$Action: function() {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return controller.onClickLogout$Action(controller.callContext(eventHandlerContext));
                                    });;
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "6",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            gridProperties: {
                                classes: "OSInline"
                            },
                            style: "partners-hub-dashboard",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "display: flex;"
                            },
                            style: "partners-hub-title-container",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "PartnersHubTitle"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "align-items: center; display: flex; gap: 24px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "9"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "color: #222; font-size: 24px; font-weight: bold;"
                            },
                            text: ["Partner\'s Hub"],
                            _idProps: {
                                service: idService,
                                uuid: "10"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), $if(PartnersHubClientVariables.getisLanguageSwitcherEnabledFF(), false, this, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "display: flex;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "300px"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "LanguageSwitcher"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Dropdown, {
                                _validationProps: {
                                    validationService: validationService
                                },
                                dropdownMode: /*Custom*/ 1,
                                enabled: true,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                list: model.variables.getLanguagesByEnabledAggr.listOut,
                                mandatory: false,
                                onChange: function() {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return controller.onSwitchLanguage$Action(controller.callContext(eventHandlerContext));
                                    });;
                                },
                                style: "dropdown",
                                values: function(elem) {
                                    return elem.languagesAttr.codeAttr;
                                },
                                variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getLanguage(), function(value) {
                                    PartnersHubClientVariables.setLanguage(value);
                                }),
                                _idProps: {
                                    service: idService,
                                    name: "LanguageSwitcherDropdown"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                list_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr),
                                placeholders: {
                                    content: new IteratorPlaceholderContent(function(idService, callContext) {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "align-items: center; display: flex; gap: 10px;"
                                            },
                                            style: "",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "13"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: [asPrimitiveValue(model.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLanguagesByEnabledAggr.listOut.getCurrent(callContext.iterationContext).languagesAttr.nameAttr), asPrimitiveValue(model.variables.getLanguagesByEnabledAggr.listOut.getCurrent(callContext.iterationContext).languagesAttr.iconAttr)]
                                        }, React.createElement(OSWidgets.Image, {
                                            gridProperties: {
                                                width: "30px"
                                            },
                                            type: /*External*/ 1,
                                            url: model.variables.getLanguagesByEnabledAggr.listOut.getCurrent(callContext.iterationContext).languagesAttr.iconAttr,
                                            _idProps: {
                                                service: idService,
                                                uuid: "14"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            url_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr)
                                        }), React.createElement(OSWidgets.Expression, {
                                            extendedProperties: {
                                                style: "overflow: visible; text-overflow: unset;"
                                            },
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            value: model.variables.getLanguagesByEnabledAggr.listOut.getCurrent(callContext.iterationContext).languagesAttr.nameAttr,
                                            _idProps: {
                                                service: idService,
                                                uuid: "15"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr)
                                        }))];
                                    }, callContext, idService, "1")
                                },
                                _dependencies: [asPrimitiveValue(model.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr)]
                            }))];
                        }, function() {
                            return [];
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            visible: (PartnersHubClientVariables.getisCFDCommissionsPlanFormEnabledFF() && PartnersHubClientVariables.getshowCFDCommisionBanner()),
                            _idProps: {
                                service: idService,
                                name: "CFDBanner"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(PartnersHub_Home_EnableCFDCommissionBanner_mvc_view, {
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
                                name: "EnableCFDCommissionBanner",
                                alias: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "display: flex; gap: 16px;"
                            },
                            style: "referral-links-reports-whatsapp",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "DashboarSection"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "19"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(PartnersHub_Home_ReferralLinksReports_mvc_view, {
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
                                uuid: "20",
                                alias: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            style: "complete-profile-commission-banner",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "LesgoBanner"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            visible: false,
                            _idProps: {
                                service: idService,
                                uuid: "22"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(PartnersHub_Home_CompleteMyProfile_mvc_view, {
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
                                uuid: "23",
                                alias: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })), React.createElement(PartnersHub_Home_CommissionPlans_mvc_view, {
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
                                uuid: "24",
                                alias: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            visible: PartnersHubClientVariables.getisEventSectionEnabledFF(),
                            _idProps: {
                                service: idService,
                                name: "EventSection"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(PartnersHub_Events_EventListSection_mvc_view, {
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
                                uuid: "26",
                                alias: "8"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })), React.createElement(PartnersHub_Home_PartnersAcademy_mvc_view, {
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
                                uuid: "27",
                                alias: "9"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "affiliate-programme-block",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "AffiliateProgramme"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(PartnersHub_Home_AffiliateProgramme_mvc_view, {
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
                                uuid: "29",
                                alias: "10"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })), React.createElement(PartnersHub_Home_WhatsAppBanner_mvc_view, {
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
                                uuid: "30",
                                alias: "11"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })), React.createElement(PartnersHub_Common_CFDCommissionsModal_mvc_view, {
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
                                name: "CFDCommissionsModal",
                                alias: "12"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getisEventSectionEnabledFF()), asPrimitiveValue(PartnersHubClientVariables.getshowCFDCommisionBanner()), asPrimitiveValue(PartnersHubClientVariables.getisCFDCommissionsPlanFormEnabledFF()), asPrimitiveValue(model.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLanguagesByEnabledAggr.listOut), asPrimitiveValue(PartnersHubClientVariables.getLanguage()), asPrimitiveValue(PartnersHubClientVariables.getisLanguageSwitcherEnabledFF()), asPrimitiveValue(PartnersHubClientVariables.getIsNotAPartner())]
            }));
        }
    }

    return View;
});
define("PartnersHub.Home.PartnersHubDashboard.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources", "PartnersHub.Home.controller", "PartnersHub.controller$IFrameLogout", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "PartnersHub.model$RC_a19cc9055121ac1f2503af4a7a4ef0bf", "PartnersHub.model$RL_8c597fb6cd4a582ba849bd4dfae97586"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Home_PartnersHubDashboard_mvc_TranslationsResources, PartnersHub_HomeController) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Home_PartnersHubDashboard_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {
                    getLanguagesByEnabled$AggrRefresh: 0
                };
                this.dataFetchDependentsGraph = {
                    getLanguagesByEnabled$AggrRefresh: []
                };
                this.shouldSendClientVarsToDataSources = true;
            }

            // Server Actions - Methods

            // Aggregates and Data Actions
            get getLanguagesByEnabled$AggrRefresh() {
                if (!(this.hasOwnProperty("_getLanguagesByEnabled$AggrRefresh"))) {
                    this._getLanguagesByEnabled$AggrRefresh = function() {
                        var innerBody = function(maxRecords, startIndex, callContext) {
                            var model = this.model;
                            var controller = this.controller;
                            var callContext = controller.callContext(callContext);
                            return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetLanguagesByEnabled", "screenservices/PartnersHub/Home/PartnersHubDashboard/ScreenDataSetGetLanguagesByEnabled", "PpoCpZnNgkTl90fuHzsEPA", maxRecords, startIndex, function(b) {
                                model.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.getLanguagesByEnabledAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getLanguagesByEnabledAggr.constructor));
                            }, undefined, undefined, undefined, callContext, PartnersHubClientVariables, true);
                        }.bind(this);
                        return OS.Logger.startActiveSpan("GetLanguagesByEnabled", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetLanguagesByEnabled");
                                span.setAttribute("outsystems.function.key", "6dbd848d-a8c0-4816-acf2-77b315e5af6b");
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

                return this._getLanguagesByEnabled$AggrRefresh;
            }
            set getLanguagesByEnabled$AggrRefresh(value) {
                this._getLanguagesByEnabled$AggrRefresh = value;
            }


            get dataFetchActionNames() {
                if (!(this.hasOwnProperty("_dataFetchActionNames"))) {
                    this._dataFetchActionNames = ["getLanguagesByEnabled$AggrRefresh"];
                }

                return this._dataFetchActionNames;
            }
            set dataFetchActionNames(value) {
                this._dataFetchActionNames = value;
            }

            // Client Actions - Methods
            get _onClickLogout$Action() {
                if (!(this.hasOwnProperty("__onClickLogout$Action"))) {
                    this.__onClickLogout$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickLogout", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickLogout");
                                span.setAttribute("outsystems.function.key", "2ad4ccae-1490-4434-bcb8-a2eaa2a8659d");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnClickLogout");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: IFrameLogout
                                    model.flush();
                                    return PartnersHubController.default.iFrameLogout$Action(callContext);
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    };
                }

                return this.__onClickLogout$Action;
            }
            set _onClickLogout$Action(value) {
                this.__onClickLogout$Action = value;
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
                                span.setAttribute("outsystems.function.key", "6f4e55b7-9dc8-4ff7-93c2-413003e19445");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                // Execute Action: RudderstackTrackEvent
                                PartnersHubController.default.rudderstackTrackEvent$Action(function() {
                                    var rec = new PartnersHubModel.ST_23ff1d290ec4691b1c668ad437100cd0Structure();
                                    rec.actionAttr = "homepage_open";
                                    return rec;
                                }(), "ce_partnershub_form", callContext);
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

            get _continueSignupOnClick$Action() {
                if (!(this.hasOwnProperty("__continueSignupOnClick$Action"))) {
                    this.__continueSignupOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ContinueSignupOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ContinueSignupOnClick");
                                span.setAttribute("outsystems.function.key", "7faa76fb-7055-4209-8e29-dcb269ffdfaa");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("ContinueSignupOnClick");
                                callContext = controller.callContext(callContext);
                                // Destination: /PartnersHub/
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://signup.deriv.com/signup-affiliates", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__continueSignupOnClick$Action;
            }
            set _continueSignupOnClick$Action(value) {
                this.__continueSignupOnClick$Action = value;
            }

            get _onSwitchLanguage$Action() {
                if (!(this.hasOwnProperty("__onSwitchLanguage$Action"))) {
                    this.__onSwitchLanguage$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnSwitchLanguage", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnSwitchLanguage");
                                span.setAttribute("outsystems.function.key", "8ea2c90e-3ddd-4d7e-9528-479d591dbba3");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnSwitchLanguage");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: SetCurrentLocale
                                    OS.SystemActions.setCurrentLocale(PartnersHubClientVariables.getLanguage(), callContext);
                                    // Refresh Query: GetLanguagesByEnabled
                                    var result = controller.getLanguagesByEnabled$AggrRefresh(50, 0, callContext);
                                    model.flush();
                                    return result;
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    };
                }

                return this.__onSwitchLanguage$Action;
            }
            set _onSwitchLanguage$Action(value) {
                this.__onSwitchLanguage$Action = value;
            }


            onClickLogout$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickLogout__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickLogout");
                        span.setAttribute("outsystems.function.key", "2ad4ccae-1490-4434-bcb8-a2eaa2a8659d");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onClickLogout$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "6f4e55b7-9dc8-4ff7-93c2-413003e19445");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
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

            continueSignupOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ContinueSignupOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ContinueSignupOnClick");
                        span.setAttribute("outsystems.function.key", "7faa76fb-7055-4209-8e29-dcb269ffdfaa");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._continueSignupOnClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onSwitchLanguage$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnSwitchLanguage__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnSwitchLanguage");
                        span.setAttribute("outsystems.function.key", "8ea2c90e-3ddd-4d7e-9528-479d591dbba3");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onSwitchLanguage$Action, callContext);
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
                        return PartnersHub_HomeController.default.handleError(ex, this.callContext());
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


define("PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.ar-001", [], function() {
    return {
        "VM1sYo9Hq065DYlD1_+8Jw#Value": "يبدو أنك لم تقم بالتسجيل كشريك بعد. للوصول إلى لوحة التحكم الخاصة بالشركاء، يرجى متابعة عملية التسجيل.",
        "+cMjKEMeO0+xPg0MYrxs_Q#Value": "مرحبًا بك في Partner Hub!"
    };
});

define("PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.de-DE", [], function() {
    return {
        "VM1sYo9Hq065DYlD1_+8Jw#Value": "Es sieht so aus, als hätten Sie sich noch nicht als Partner angemeldet. Um auf unser Partner-Dashboard zuzugreifen, fahren Sie bitte mit Ihrem Anmeldeprozess fort.",
        "+cMjKEMeO0+xPg0MYrxs_Q#Value": "Willkommen im Partner Hub!"
    };
});

define("PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.es-ES", [], function() {
    return {
        "VM1sYo9Hq065DYlD1_+8Jw#Value": "Parece que aún no te has registrado como socio. Para acceder a nuestro panel de socios, por favor continúa con tu proceso de registro.",
        "+cMjKEMeO0+xPg0MYrxs_Q#Value": "¡Bienvenido al Centro de Socios!"
    };
});

define("PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.fr-FR", [], function() {
    return {
        "VM1sYo9Hq065DYlD1_+8Jw#Value": "Il semble que vous n\'ayez pas encore de compte en tant que partenaire. Pour accéder au tableau de bord des partenaires, veuillez poursuivre le processus d\'inscription.",
        "+cMjKEMeO0+xPg0MYrxs_Q#Value": "Bienvenue sur Partner Hub !"
    };
});

define("PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.it-IT", [], function() {
    return {
        "VM1sYo9Hq065DYlD1_+8Jw#Value": "Sembra che tu non ti sia ancora registrato come partner. Per accedere al nostro pannello partner, ti preghiamo di continuare con il tuo processo di registrazione.",
        "+cMjKEMeO0+xPg0MYrxs_Q#Value": "Benvenuto nel Partner Hub!"
    };
});

define("PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.pl-PL", [], function() {
    return {
        "VM1sYo9Hq065DYlD1_+8Jw#Value": "Wygląda na to, że jeszcze nie zarejestrowałeś się jako partner. Aby uzyskać dostęp do naszego pulpitu partnera, kontynuuj proces rejestracji.",
        "+cMjKEMeO0+xPg0MYrxs_Q#Value": "Witaj w Partner Hub!"
    };
});

define("PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.pt-PT", [], function() {
    return {
        "VM1sYo9Hq065DYlD1_+8Jw#Value": "Parece que ainda não se registou como parceiro. Para aceder ao nosso painel de parceiros, por favor, continue com o seu processo de registo.",
        "+cMjKEMeO0+xPg0MYrxs_Q#Value": "Bem-vindo ao Partner Hub!"
    };
});

define("PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.ru-RU", [], function() {
    return {
        "VM1sYo9Hq065DYlD1_+8Jw#Value": "Похоже, вы еще не зарегистрировались как партнер. Чтобы получить доступ к партнерскому кабинету, пожалуйста, продолжите процесс регистрации.",
        "+cMjKEMeO0+xPg0MYrxs_Q#Value": "Добро пожаловать в Partner\'s Hub!"
    };
});

define("PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources", ["exports", "PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.ar-001", "PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.de-DE", "PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.es-ES", "PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.fr-FR", "PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.it-IT", "PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.pl-PL", "PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.pt-PT", "PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_Home_PartnersHubDashboard_mvc_translationsResources_ar001, PartnersHub_Home_PartnersHubDashboard_mvc_translationsResources_deDE, PartnersHub_Home_PartnersHubDashboard_mvc_translationsResources_esES, PartnersHub_Home_PartnersHubDashboard_mvc_translationsResources_frFR, PartnersHub_Home_PartnersHubDashboard_mvc_translationsResources_itIT, PartnersHub_Home_PartnersHubDashboard_mvc_translationsResources_plPL, PartnersHub_Home_PartnersHubDashboard_mvc_translationsResources_ptPT, PartnersHub_Home_PartnersHubDashboard_mvc_translationsResources_ruRU) {
    return {
        "ar-001": {
            "translations": PartnersHub_Home_PartnersHubDashboard_mvc_translationsResources_ar001,
            "isRTL": true
        },
        "de-DE": {
            "translations": PartnersHub_Home_PartnersHubDashboard_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_Home_PartnersHubDashboard_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_Home_PartnersHubDashboard_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_Home_PartnersHubDashboard_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_Home_PartnersHubDashboard_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_Home_PartnersHubDashboard_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_Home_PartnersHubDashboard_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});