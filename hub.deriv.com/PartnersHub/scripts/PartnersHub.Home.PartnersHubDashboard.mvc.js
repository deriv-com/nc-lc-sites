define("PartnersHub.Home.PartnersHubDashboard.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "RESTAPIWebsocket.model", "PartnersHub.controller", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocket", "RESTAPIWebsocket.model$ST_c864353821feed79663806f3e445d40eStructure", "PartnersHub.controller$HandleRedirectOnLogin", "RESTAPIWebsocket.controller$GetSettings", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "RESTAPIWebsocket.model$ST_e89429535bbc3a843fdfa9ff6a750a5fStructure", "RESTAPIWebsocket.controller$PartnerSettings", "PartnersHub.controller$MountLiveChat", "PartnersHub.controller$RudderstackIdentifyEvent", "PartnersHub.controller$IFrameLogout", "PartnersHub.model$RC_1a05c904c294f37e92db8f7002105183", "PartnersHub.model$RL_1a5cf00c92b0ec1b5c534af85d952dbc"], function(OSRuntimeCore, PartnersHubModel, RESTAPIWebsocketModel, PartnersHubController, RESTAPIWebsocketController) {
    var OS = OSRuntimeCore; {
        class GetLanguagesAggrRecInner extends
        OS.Model.AggregateRecord {
            static attributesToDeclare() {
                return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new GetLanguagesAggrRec(new GetLanguagesAggrRec.RecordClass({
                    RecordListType: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        GetLanguagesAggrRecInner.RecordListType = PartnersHubModel.RL_1a5cf00c92b0ec1b5c534af85d952dbc;
        var GetLanguagesAggrRec = GetLanguagesAggrRecInner;
        GetLanguagesAggrRec.init();
    }


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("GetSettingsResponse", "getSettingsResponseVar", "GetSettingsResponse", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure());
                    }, false, RESTAPIWebsocketModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure),
                    this.attr("isPhoneNumberVerified", "isPhoneNumberVerifiedVar", "isPhoneNumberVerified", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, false),
                    this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, false),
                    this.attr("WebsiteStatusResponse", "websiteStatusResponseVar", "WebsiteStatusResponse", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_c864353821feed79663806f3e445d40eStructure());
                    }, false, RESTAPIWebsocketModel.ST_c864353821feed79663806f3e445d40eStructure),
                    this.attr("isNotAPartner", "isNotAPartnerVar", "isNotAPartner", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("website_platform_url", "website_platform_urlVar", "website_platform_url", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("EnableWhatsappBanner", "enableWhatsappBannerVar", "EnableWhatsappBanner", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("GetLanguages", "getLanguagesAggr", "GetLanguages", true, true, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new GetLanguagesAggrRec());
                    }, true, GetLanguagesAggrRec)
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

define("PartnersHub.Home.PartnersHubDashboard.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Home.PartnersHubDashboard.mvc$model", "PartnersHub.Home.PartnersHubDashboard.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Layouts.LayoutDashboard.mvc$view", "@outsystems/runtime-widgets-js", "CustomComponentsOfficial.ButtonVariants.PrimaryButton.mvc$view", "CustomComponentsOfficial.ButtonVariants.SecondaryButton.mvc$view", "PartnersHub.Common.SkeletonLoader.mvc$view", "PartnersHub.Home.ReferralLinksReports.mvc$view", "PartnersHub.Home.CompleteMyProfile.mvc$view", "PartnersHub.Home.CommissionPlans.mvc$view", "PartnersHub.Home.CommissionBanner.mvc$view", "PartnersHub.Home.PartnersAcademy.mvc$view", "PartnersHub.Home.AffiliateProgramme.mvc$view", "PartnersHub.Home.WhatsAppBanner.mvc$view", "RESTAPIWebsocket.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocket", "RESTAPIWebsocket.model$ST_c864353821feed79663806f3e445d40eStructure", "PartnersHub.controller$HandleRedirectOnLogin", "RESTAPIWebsocket.controller$GetSettings", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "RESTAPIWebsocket.model$ST_e89429535bbc3a843fdfa9ff6a750a5fStructure", "RESTAPIWebsocket.controller$PartnerSettings", "PartnersHub.controller$MountLiveChat", "PartnersHub.controller$RudderstackIdentifyEvent", "PartnersHub.controller$IFrameLogout", "PartnersHub.model$RC_1a05c904c294f37e92db8f7002105183", "PartnersHub.model$RL_1a5cf00c92b0ec1b5c534af85d952dbc"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketModel, RESTAPIWebsocketController, React, OSView, PartnersHub_Home_PartnersHubDashboard_mvc_model, PartnersHub_Home_PartnersHubDashboard_mvc_controller, PartnersHubClientVariables, PartnersHub_Layouts_LayoutDashboard_mvc_view, OSWidgets, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view, CustomComponentsOfficial_ButtonVariants_SecondaryButton_mvc_view, PartnersHub_Common_SkeletonLoader_mvc_view, PartnersHub_Home_ReferralLinksReports_mvc_view, PartnersHub_Home_CompleteMyProfile_mvc_view, PartnersHub_Home_CommissionPlans_mvc_view, PartnersHub_Home_CommissionBanner_mvc_view, PartnersHub_Home_PartnersAcademy_mvc_view, PartnersHub_Home_AffiliateProgramme_mvc_view, PartnersHub_Home_WhatsAppBanner_mvc_view) {
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
            return [PartnersHub_Layouts_LayoutDashboard_mvc_view, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view, CustomComponentsOfficial_ButtonVariants_SecondaryButton_mvc_view, PartnersHub_Common_SkeletonLoader_mvc_view, PartnersHub_Home_ReferralLinksReports_mvc_view, PartnersHub_Home_CompleteMyProfile_mvc_view, PartnersHub_Home_CommissionPlans_mvc_view, PartnersHub_Home_CommissionBanner_mvc_view, PartnersHub_Home_PartnersAcademy_mvc_view, PartnersHub_Home_AffiliateProgramme_mvc_view, PartnersHub_Home_WhatsAppBanner_mvc_view];
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(PartnersHub_Layouts_LayoutDashboard_mvc_view, {
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
                    },
                    showLoaderEvent$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.showLoader$Action(controller.callContext(eventHandlerContext));

                        ;
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
                        return [React.createElement(OSWidgets.Popup, {
                            extendedProperties: {
                                style: "border-radius: 8px; padding: 20px;"
                            },
                            showPopup: model.variables.isNotAPartnerVar,
                            style: "popup-dialog",
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            extendedProperties: {
                                style: "display: flex; flex-direction: column; gap: 16px;"
                            },
                            visible: !(model.variables.isLoadingVar),
                            _idProps: {
                                service: idService,
                                uuid: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: ["Welcome to the Partner Hub!"],
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), "It looks like you haven\'t signed up as a partner yet. To access our partner dashboard, please continue with your signup process.", React.createElement(OSWidgets.Container, {
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
                        }, React.createElement(PartnersHub_Common_SkeletonLoader_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                IsLoading: (model.variables.isLoadingVar || model.variables.isNotAPartnerVar)
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
                                name: "PartnersHubTitle",
                                alias: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "display: flex;"
                                        },
                                        style: "partners-hub-title-container",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "9"
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
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "color: #222; font-size: 24px; font-weight: bold;"
                                        },
                                        text: [$text(getTranslation("NvCwF2fBDUmmXQJ5qQjFvg#Value", "Partner\'s Hub"))],
                                        _idProps: {
                                            service: idService,
                                            uuid: "11"
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
                                            list: model.variables.getLanguagesAggr.listOut,
                                            mandatory: false,
                                            onChange: function() {
                                                var eventHandlerContext = callContext.clone();
                                                controller.onSwitchLanguage$Action(controller.callContext(eventHandlerContext));

                                                ;
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
                                            list_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLanguagesAggr.dataFetchStatusAttr),
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
                                                            uuid: "14"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        _dependencies: [asPrimitiveValue(model.variables.getLanguagesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLanguagesAggr.listOut.getCurrent(callContext.iterationContext).languagesAttr.nameAttr), asPrimitiveValue(model.variables.getLanguagesAggr.listOut.getCurrent(callContext.iterationContext).languagesAttr.iconAttr)]
                                                    }, React.createElement(OSWidgets.Image, {
                                                        gridProperties: {
                                                            width: "30px"
                                                        },
                                                        type: /*External*/ 1,
                                                        url: model.variables.getLanguagesAggr.listOut.getCurrent(callContext.iterationContext).languagesAttr.iconAttr,
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "15"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        url_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLanguagesAggr.dataFetchStatusAttr)
                                                    }), React.createElement(OSWidgets.Expression, {
                                                        gridProperties: {
                                                            classes: "ThemeGrid_MarginGutter"
                                                        },
                                                        value: model.variables.getLanguagesAggr.listOut.getCurrent(callContext.iterationContext).languagesAttr.nameAttr,
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "16"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLanguagesAggr.dataFetchStatusAttr)
                                                    }))];
                                                }, callContext, idService, "1")
                                            },
                                            _dependencies: [asPrimitiveValue(model.variables.getLanguagesAggr.dataFetchStatusAttr)]
                                        }))];
                                    }, function() {
                                        return [];
                                    }))];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.getLanguagesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLanguagesAggr.listOut), asPrimitiveValue(PartnersHubClientVariables.getLanguage()), asPrimitiveValue(PartnersHubClientVariables.getisLanguageSwitcherEnabledFF())]
                        }), React.createElement(PartnersHub_Common_SkeletonLoader_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                IsLoading: (model.variables.isLoadingVar || model.variables.isNotAPartnerVar)
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
                                name: "DashboarSection",
                                alias: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "display: flex; gap: 16px;"
                                        },
                                        style: "referral-links-reports-whatsapp",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "18"
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
                                        inputs: {
                                            website_platform_url: model.variables.website_platform_urlVar
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
                                            uuid: "20",
                                            alias: "6"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })))];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.website_platform_urlVar)]
                        }), React.createElement(PartnersHub_Common_SkeletonLoader_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                IsLoading: (model.variables.isLoadingVar || model.variables.isNotAPartnerVar),
                                SkeletonHeight: "200px"
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
                                name: "LesgoBanner",
                                alias: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Container, {
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
                                            uuid: "22"
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
                                            uuid: "23"
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
                                            uuid: "24",
                                            alias: "8"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })), $if(PartnersHubClientVariables.getisCommisionsPlansEnabledFF(), false, this, function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            gridProperties: {
                                                classes: "OSInline",
                                                width: "100%"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "25"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(PartnersHub_Home_CommissionPlans_mvc_view, {
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
                                                alias: "9"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        }))];
                                    }, function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            gridProperties: {
                                                classes: "OSInline",
                                                width: "100%"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "27"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(PartnersHub_Home_CommissionBanner_mvc_view, {
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
                                                uuid: "28",
                                                alias: "10"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        }))];
                                    }))];
                                })
                            },
                            _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getisCommisionsPlansEnabledFF())]
                        }), React.createElement(PartnersHub_Common_SkeletonLoader_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                IsLoading: (model.variables.isLoadingVar || model.variables.isNotAPartnerVar),
                                SkeletonHeight: "250px"
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
                                name: "PartnersAcademy",
                                alias: "11"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(PartnersHub_Home_PartnersAcademy_mvc_view, {
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
                                            alias: "12"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })];
                                })
                            },
                            _dependencies: []
                        }), React.createElement(PartnersHub_Common_SkeletonLoader_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                SkeletonHeight: "300px",
                                IsLoading: (model.variables.isLoadingVar || model.variables.isNotAPartnerVar)
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
                                name: "AffiliateProgramme",
                                alias: "13"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "affiliate-programme-block",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "32"
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
                                            uuid: "33",
                                            alias: "14"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    }))];
                                })
                            },
                            _dependencies: []
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            visible: model.variables.enableWhatsappBannerVar,
                            _idProps: {
                                service: idService,
                                name: "WhatsappBanner"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(PartnersHub_Common_SkeletonLoader_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                IsLoading: (model.variables.isLoadingVar || model.variables.isNotAPartnerVar)
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
                                uuid: "35",
                                alias: "15"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(PartnersHub_Home_WhatsAppBanner_mvc_view, {
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
                                            uuid: "36",
                                            alias: "16"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })];
                                })
                            },
                            _dependencies: []
                        })))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.enableWhatsappBannerVar), asPrimitiveValue(PartnersHubClientVariables.getisCommisionsPlansEnabledFF()), asPrimitiveValue(model.variables.website_platform_urlVar), asPrimitiveValue(model.variables.getLanguagesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLanguagesAggr.listOut), asPrimitiveValue(PartnersHubClientVariables.getLanguage()), asPrimitiveValue(PartnersHubClientVariables.getisLanguageSwitcherEnabledFF()), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.isNotAPartnerVar)]
            }));
        }
    }

    return View;
});
define("PartnersHub.Home.PartnersHubDashboard.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources", "PartnersHub.Home.controller", "PartnersHub.Home.PartnersHubDashboard.mvc$controller.OnReady.ParsePlatformURLJS", "PartnersHub.Home.PartnersHubDashboard.mvc$controller.OnReady.GetAuthTokenJS", "RESTAPIWebsocket.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocket", "RESTAPIWebsocket.model$ST_c864353821feed79663806f3e445d40eStructure", "PartnersHub.controller$HandleRedirectOnLogin", "RESTAPIWebsocket.controller$GetSettings", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "RESTAPIWebsocket.model$ST_e89429535bbc3a843fdfa9ff6a750a5fStructure", "RESTAPIWebsocket.controller$PartnerSettings", "PartnersHub.controller$MountLiveChat", "PartnersHub.controller$RudderstackIdentifyEvent", "PartnersHub.controller$IFrameLogout", "PartnersHub.model$RC_1a05c904c294f37e92db8f7002105183", "PartnersHub.model$RL_1a5cf00c92b0ec1b5c534af85d952dbc"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketModel, RESTAPIWebsocketController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Home_PartnersHubDashboard_mvc_TranslationsResources, PartnersHub_HomeController, PartnersHub_Home_PartnersHubDashboard_mvc_controller_OnReady_ParsePlatformURLJS, PartnersHub_Home_PartnersHubDashboard_mvc_controller_OnReady_GetAuthTokenJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Home_PartnersHubDashboard_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {
                    getLanguages$AggrRefresh: 0
                };
                this.dataFetchDependentsGraph = {
                    getLanguages$AggrRefresh: []
                };
                this.shouldSendClientVarsToDataSources = false;
            }

            // Server Actions - Methods
            get getAllBDEnable$ServerAction() {
                if (!(this.hasOwnProperty("_getAllBDEnable$ServerAction"))) {
                    this._getAllBDEnable$ServerAction = function(callContext) {
                        var controller = this.controller;
                        return OS.Logger.startActiveSpan("GetAllBDEnable", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetAllBDEnable");
                                span.setAttribute("outsystems.function.key", "329b71ce-54ea-4245-8c81-097712850424");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
                            }

                            return OS.Flow.tryFinally(function() {
                                return controller.callServerAction("GetAllBDEnable", "screenservices/PartnersHub/Home/PartnersHubDashboard/ActionGetAllBDEnable", "KEkLAwfQYzbZxOQ+CUjVuw", {}, controller.callContext(callContext), undefined, undefined, true).then(function(outputs) {
                                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("PartnersHub.Home.PartnersHubDashboard$ActionGetAllBDEnable"))();
                                    executeServerActionResult.enableWhatsappBannerOut = OS.DataConversion.ServerDataConverter.from(outputs.EnableWhatsappBanner, OS.DataTypes.DataTypes.Boolean);
                                    executeServerActionResult.enablePartnerAccountOut = OS.DataConversion.ServerDataConverter.from(outputs.EnablePartnerAccount, OS.DataTypes.DataTypes.Boolean);
                                    executeServerActionResult.enableCFDsScreensOut = OS.DataConversion.ServerDataConverter.from(outputs.EnableCFDsScreens, OS.DataTypes.DataTypes.Boolean);
                                    executeServerActionResult.enableLanguageSwitcherOut = OS.DataConversion.ServerDataConverter.from(outputs.EnableLanguageSwitcher, OS.DataTypes.DataTypes.Boolean);
                                    return executeServerActionResult;
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 0);
                    };
                }

                return this._getAllBDEnable$ServerAction;
            }
            set getAllBDEnable$ServerAction(value) {
                this._getAllBDEnable$ServerAction = value;
            }


            // Aggregates and Data Actions
            get getLanguages$AggrRefresh() {
                if (!(this.hasOwnProperty("_getLanguages$AggrRefresh"))) {
                    this._getLanguages$AggrRefresh = function() {
                        var innerBody = function(maxRecords, startIndex, callContext) {
                            var model = this.model;
                            var controller = this.controller;
                            var callContext = controller.callContext(callContext);
                            return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetLanguages", "screenservices/PartnersHub/Home/PartnersHubDashboard/ScreenDataSetGetLanguages", "YP20JwBEMRoaiRCqa1qOvA", maxRecords, startIndex, function(b) {
                                model.variables.getLanguagesAggr.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.getLanguagesAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getLanguagesAggr.constructor));
                            }, undefined, undefined, undefined, callContext, undefined, true);
                        }.bind(this);
                        return OS.Logger.startActiveSpan("GetLanguages", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetLanguages");
                                span.setAttribute("outsystems.function.key", "922d161e-3a7e-4d2a-b45d-248a65da8def");
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

                return this._getLanguages$AggrRefresh;
            }
            set getLanguages$AggrRefresh(value) {
                this._getLanguages$AggrRefresh = value;
            }


            get dataFetchActionNames() {
                if (!(this.hasOwnProperty("_dataFetchActionNames"))) {
                    this._dataFetchActionNames = ["getLanguages$AggrRefresh"];
                }

                return this._dataFetchActionNames;
            }
            set dataFetchActionNames(value) {
                this._dataFetchActionNames = value;
            }

            // Client Actions - Methods
            get _continueSignupOnClick$Action() {
                if (!(this.hasOwnProperty("__continueSignupOnClick$Action"))) {
                    this.__continueSignupOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ContinueSignupOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ContinueSignupOnClick");
                                span.setAttribute("outsystems.function.key", "1c95d980-0c46-4ecf-9bf8-4683d9c580f2");
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

            get _onReady$Action() {
                if (!(this.hasOwnProperty("__onReady$Action"))) {
                    this.__onReady$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnReady", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnReady");
                                span.setAttribute("outsystems.function.key", "671fe1a7-8029-4e40-a953-874338147259");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var getAllBDEnableVar = new OS.DataTypes.VariableHolder();
                                var handleRedirectOnLoginVar = new OS.DataTypes.VariableHolder();
                                var getSettingsVar = new OS.DataTypes.VariableHolder();
                                var partnerSettingsVar = new OS.DataTypes.VariableHolder();
                                var parsePlatformURLJSResult = new OS.DataTypes.VariableHolder();
                                var getAuthTokenJSResult = new OS.DataTypes.VariableHolder();
                                var jSONDeserializeGetWebsiteStatusResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketModel.ST_c864353821feed79663806f3e445d40eStructure))());
                                return OS.Flow.executeAsyncFlow(function() {
                                    // IsLoading = True
                                    model.variables.isLoadingVar = true;
                                    // Execute Action: GetAllBDEnable
                                    model.flush();
                                    return controller.getAllBDEnable$ServerAction(callContext).then(function(value) {
                                        getAllBDEnableVar.value = value;
                                    }).then(function() {
                                        // Execute Action: HandleRedirectOnLogin
                                        model.flush();
                                        return PartnersHubController.default.handleRedirectOnLogin$Action(callContext).then(function(value) {
                                            handleRedirectOnLoginVar.value = value;
                                        });
                                    }).then(function() {
                                        return OS.Flow.executeSequence(function() {
                                            if ((handleRedirectOnLoginVar.value.isLoggedInOut)) {
                                                // Execute Action: RudderstackIdentifyEvent
                                                PartnersHubController.default.rudderstackIdentifyEvent$Action(callContext);
                                                getAuthTokenJSResult.value = OS.Logger.startActiveSpan("GetAuthToken", function(span) {
                                                    if (span) {
                                                        span.setAttribute("code.function", "GetAuthToken");
                                                        span.setAttribute("outsystems.function.key", "f0b3b508-9cd5-4137-9da2-9ff94757b9f8");
                                                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                                    }

                                                    try {
                                                        return controller.safeExecuteJSNode(PartnersHub_Home_PartnersHubDashboard_mvc_controller_OnReady_GetAuthTokenJS, "GetAuthToken", "OnReady", {
                                                            Token: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                                        }, function($parameters) {
                                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.Home.PartnersHubDashboard.OnReady$getAuthTokenJSResult"))();
                                                            jsNodeResult.tokenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Token, OS.DataTypes.DataTypes.Text);
                                                            return jsNodeResult;
                                                        }, {}, {});
                                                    } finally {
                                                        if (span) {
                                                            span.end();
                                                        }

                                                    }

                                                }, 1);
                                                return OS.Flow.executeSequence(function() {
                                                    if ((!(getAllBDEnableVar.value.enablePartnerAccountOut))) {
                                                        // Execute Action: PartnerSettings
                                                        model.flush();
                                                        return RESTAPIWebsocketController.default.partnerSettings$Action(PartnersHubClientVariables.getServer(), getAuthTokenJSResult.value.tokenOut, PartnersHubClientVariables.getAppId(), "EN", callContext).then(function(value) {
                                                            partnerSettingsVar.value = value;
                                                        }).then(function() {
                                                            if (((partnerSettingsVar.value.responseOut.errorAttr.codeAttr === "InputValidationFailed"))) {
                                                                // Destination: /PartnersHub/NonPartnerAccount
                                                                return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "NonPartnerAccount", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                                            } else {
                                                                parsePlatformURLJSResult.value = OS.Logger.startActiveSpan("ParsePlatformURL", function(span) {
                                                                    if (span) {
                                                                        span.setAttribute("code.function", "ParsePlatformURL");
                                                                        span.setAttribute("outsystems.function.key", "b12c2602-ae1b-4bb2-b4ae-d7fdf2040bce");
                                                                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                                                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                                                    }

                                                                    try {
                                                                        return controller.safeExecuteJSNode(PartnersHub_Home_PartnersHubDashboard_mvc_controller_OnReady_ParsePlatformURLJS, "ParsePlatformURL", "OnReady", {
                                                                            platform_url: OS.DataConversion.JSNodeParamConverter.to(partnerSettingsVar.value.responseOut.partner_settingsAttr.platform_urlAttr, OS.DataTypes.DataTypes.Text),
                                                                            provider: OS.DataConversion.JSNodeParamConverter.to(partnerSettingsVar.value.responseOut.partner_settingsAttr.providerAttr, OS.DataTypes.DataTypes.Text),
                                                                            website_platform_url: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                                                        }, function($parameters) {
                                                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.Home.PartnersHubDashboard.OnReady$parsePlatformURLJSResult"))();
                                                                            jsNodeResult.website_platform_urlOut = OS.DataConversion.JSNodeParamConverter.from($parameters.website_platform_url, OS.DataTypes.DataTypes.Text);
                                                                            return jsNodeResult;
                                                                        }, {}, {});
                                                                    } finally {
                                                                        if (span) {
                                                                            span.end();
                                                                        }

                                                                    }

                                                                }, 1);
                                                                // website_platform_url = ParsePlatformURL.website_platform_url
                                                                model.variables.website_platform_urlVar = parsePlatformURLJSResult.value.website_platform_urlOut;
                                                                // isNotAPartner = False
                                                                model.variables.isNotAPartnerVar = false;
                                                            }

                                                        });
                                                    }

                                                }).then(function() {
                                                    // Execute Action: GetSettings
                                                    model.flush();
                                                    return RESTAPIWebsocketController.default.getSettings$Action(PartnersHubClientVariables.getServer(), getAuthTokenJSResult.value.tokenOut, PartnersHubClientVariables.getAppId(), "EN", callContext).then(function(value) {
                                                        getSettingsVar.value = value;
                                                    }).then(function() {
                                                        // Execute Action: MountLiveChat
                                                        PartnersHubController.default.mountLiveChat$Action(getSettingsVar.value.responseOut, callContext);
                                                        // Execute Action: RudderstackTrackEvent
                                                        PartnersHubController.default.rudderstackTrackEvent$Action(function() {
                                                            var rec = new PartnersHubModel.ST_23ff1d290ec4691b1c668ad437100cd0Structure();
                                                            rec.actionAttr = "homepage_open";
                                                            return rec;
                                                        }(), "ce_partnershub_form", callContext);
                                                        // JSON Deserialize: JSONDeserializeGetWebsiteStatusResponse
                                                        jSONDeserializeGetWebsiteStatusResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(PartnersHubClientVariables.getWebsiteStatusResponse(), RESTAPIWebsocketModel.ST_c864353821feed79663806f3e445d40eStructure, false);
                                                        // InitialGetSettingsEmail = GetSettings.Response.Get_settings.Email
                                                        PartnersHubClientVariables.setInitialGetSettingsEmail(getSettingsVar.value.responseOut.get_settingsAttr.emailAttr);
                                                        // isPhoneNumberVerified = GetSettings.Response.Get_settings.Phone_number_verification.Verified
                                                        model.variables.isPhoneNumberVerifiedVar = getSettingsVar.value.responseOut.get_settingsAttr.phone_number_verificationAttr.verifiedAttr;
                                                        // WebsiteStatusResponse = JSONDeserializeGetWebsiteStatusResponse.Data
                                                        model.variables.websiteStatusResponseVar = jSONDeserializeGetWebsiteStatusResponseVar.value.dataOut;
                                                        // GetSettingsResponse = GetSettings.Response
                                                        model.variables.getSettingsResponseVar = getSettingsVar.value.responseOut;
                                                        // EnableWhatsappBanner = GetAllBDEnable.EnableWhatsappBanner
                                                        model.variables.enableWhatsappBannerVar = getAllBDEnableVar.value.enableWhatsappBannerOut;
                                                        // IsLoading = False
                                                        model.variables.isLoadingVar = false;
                                                    });
                                                });
                                            } else {
                                                // Execute Action: OnClickLogout
                                                return controller._onClickLogout$Action(callContext);
                                            }

                                        });
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

            get _onClickLogout$Action() {
                if (!(this.hasOwnProperty("__onClickLogout$Action"))) {
                    this.__onClickLogout$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickLogout", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickLogout");
                                span.setAttribute("outsystems.function.key", "d0f7bbb5-2ebf-4ea9-869b-cae2b990f028");
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

            get _onSwitchLanguage$Action() {
                if (!(this.hasOwnProperty("__onSwitchLanguage$Action"))) {
                    this.__onSwitchLanguage$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnSwitchLanguage", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnSwitchLanguage");
                                span.setAttribute("outsystems.function.key", "de7987cd-5ac9-4590-b8c9-398180426cbf");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnSwitchLanguage");
                                callContext = controller.callContext(callContext);
                                // Execute Action: SetCurrentLocale
                                OS.SystemActions.setCurrentLocale(PartnersHubClientVariables.getLanguage(), callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onSwitchLanguage$Action;
            }
            set _onSwitchLanguage$Action(value) {
                this.__onSwitchLanguage$Action = value;
            }

            get _showLoader$Action() {
                if (!(this.hasOwnProperty("__showLoader$Action"))) {
                    this.__showLoader$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ShowLoader", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ShowLoader");
                                span.setAttribute("outsystems.function.key", "e4608d01-35c8-4d57-85e3-62ee0720597e");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("ShowLoader");
                                callContext = controller.callContext(callContext);
                                // IsLoading = True
                                model.variables.isLoadingVar = true;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__showLoader$Action;
            }
            set _showLoader$Action(value) {
                this.__showLoader$Action = value;
            }


            continueSignupOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ContinueSignupOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ContinueSignupOnClick");
                        span.setAttribute("outsystems.function.key", "1c95d980-0c46-4ecf-9bf8-4683d9c580f2");
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

            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "671fe1a7-8029-4e40-a953-874338147259");
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

            onClickLogout$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickLogout__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickLogout");
                        span.setAttribute("outsystems.function.key", "d0f7bbb5-2ebf-4ea9-869b-cae2b990f028");
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

            onSwitchLanguage$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnSwitchLanguage__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnSwitchLanguage");
                        span.setAttribute("outsystems.function.key", "de7987cd-5ac9-4590-b8c9-398180426cbf");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onSwitchLanguage$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            showLoader$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ShowLoader__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ShowLoader");
                        span.setAttribute("outsystems.function.key", "e4608d01-35c8-4d57-85e3-62ee0720597e");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._showLoader$Action, callContext);
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
        Controller.registerVariableGroupType("PartnersHub.Home.PartnersHubDashboard$ActionGetAllBDEnable", [{
            name: "EnableWhatsappBanner",
            attrName: "enableWhatsappBannerOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "EnablePartnerAccount",
            attrName: "enablePartnerAccountOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "EnableCFDsScreens",
            attrName: "enableCFDsScreensOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "EnableLanguageSwitcher",
            attrName: "enableLanguageSwitcherOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);

        // Client Actions - Variables
        Controller.registerVariableGroupType("PartnersHub.Home.PartnersHubDashboard.OnReady$parsePlatformURLJSResult", [{
            name: "website_platform_url",
            attrName: "website_platform_urlOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("PartnersHub.Home.PartnersHubDashboard.OnReady$getAuthTokenJSResult", [{
            name: "Token",
            attrName: "tokenOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.Home.PartnersHubDashboard.mvc$controller.OnReady.ParsePlatformURLJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const default_url = {
            myaffiliates: 'https://login.deriv.com/signin.php?lang=0',
            dynamicworks: 'https://partners.deriv.com/login?brd=1'
        }
        const platform_url_obj = $parameters.platform_url ? JSON.parse($parameters.platform_url) : default_url
        const provider = $parameters.provider || 'myaffiliates'

        $parameters.website_platform_url = platform_url_obj[provider]
    };
});

define("PartnersHub.Home.PartnersHubDashboard.mvc$controller.OnReady.GetAuthTokenJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const token = localStorage.getItem('token')

        $parameters.Token = token
    };
});


define("PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.de-DE", [], function() {
    return {
        "NvCwF2fBDUmmXQJ5qQjFvg#Value": "Partner-Hub"
    };
});

define("PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.es-ES", [], function() {
    return {
        "NvCwF2fBDUmmXQJ5qQjFvg#Value": "Hub del Socio"
    };
});

define("PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.fr-FR", [], function() {
    return {
        "NvCwF2fBDUmmXQJ5qQjFvg#Value": "Hub Partenaire"
    };
});

define("PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.it-IT", [], function() {
    return {
        "NvCwF2fBDUmmXQJ5qQjFvg#Value": "Hub del Partner"
    };
});

define("PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.pl-PL", [], function() {
    return {
        "NvCwF2fBDUmmXQJ5qQjFvg#Value": "Hub Partnera"
    };
});

define("PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.pt-PT", [], function() {
    return {
        "NvCwF2fBDUmmXQJ5qQjFvg#Value": "Hub do Parceiro"
    };
});

define("PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.ru-RU", [], function() {
    return {
        "NvCwF2fBDUmmXQJ5qQjFvg#Value": "Хаб Партнера"
    };
});

define("PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources", ["exports", "PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.de-DE", "PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.es-ES", "PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.fr-FR", "PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.it-IT", "PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.pl-PL", "PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.pt-PT", "PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_Home_PartnersHubDashboard_mvc_translationsResources_deDE, PartnersHub_Home_PartnersHubDashboard_mvc_translationsResources_esES, PartnersHub_Home_PartnersHubDashboard_mvc_translationsResources_frFR, PartnersHub_Home_PartnersHubDashboard_mvc_translationsResources_itIT, PartnersHub_Home_PartnersHubDashboard_mvc_translationsResources_plPL, PartnersHub_Home_PartnersHubDashboard_mvc_translationsResources_ptPT, PartnersHub_Home_PartnersHubDashboard_mvc_translationsResources_ruRU) {
    return {
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