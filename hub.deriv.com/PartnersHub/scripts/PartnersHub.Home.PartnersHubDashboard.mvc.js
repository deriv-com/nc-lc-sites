define("PartnersHub.Home.PartnersHubDashboard.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "RESTAPIWebsocket.model", "PartnersHub.controller", "RESTAPIWebsocket.controller", "PartnersHub.Layouts.LayoutDashboard.mvc$model", "PartnersHub.Common.LoaderBlock.mvc$model", "PartnersHub.Home.ReferralLinksReports.mvc$model", "PartnersHub.Home.CompleteMyProfile.mvc$model", "PartnersHub.Home.CommissionPlans.mvc$model", "PartnersHub.Home.CommissionBanner.mvc$model", "PartnersHub.Home.PartnersAcademy.mvc$model", "PartnersHub.Home.AffiliateProgramme.mvc$model", "PartnersHub.Home.WhatsAppBanner.mvc$model", "RESTAPIWebsocket.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocket", "RESTAPIWebsocket.model$ST_c864353821feed79663806f3e445d40eStructure", "PartnersHub.controller$RudderstackIdentifyEvent", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "RESTAPIWebsocket.model$ST_e89429535bbc3a843fdfa9ff6a750a5fStructure", "RESTAPIWebsocket.controller$PartnerSettings", "PartnersHub.controller$MountLiveChat", "RESTAPIWebsocket.controller$GetSettings", "PartnersHub.controller$HandleRedirectOnLogin", "PartnersHub.controller$IFrameLogout"], function(OSRuntimeCore, PartnersHubModel, RESTAPIWebsocketModel, PartnersHubController, RESTAPIWebsocketController, PartnersHub_Layouts_LayoutDashboard_mvcModel, PartnersHub_Common_LoaderBlock_mvcModel, PartnersHub_Home_ReferralLinksReports_mvcModel, PartnersHub_Home_CompleteMyProfile_mvcModel, PartnersHub_Home_CommissionPlans_mvcModel, PartnersHub_Home_CommissionBanner_mvcModel, PartnersHub_Home_PartnersAcademy_mvcModel, PartnersHub_Home_AffiliateProgramme_mvcModel, PartnersHub_Home_WhatsAppBanner_mvcModel) {
    var OS = OSRuntimeCore;


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
                    this.attr("website_platform_url", "website_platform_urlVar", "website_platform_url", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("EnableWhatsappBanner", "enableWhatsappBannerVar", "EnableWhatsappBanner", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("isNotAPartner", "isNotAPartnerVar", "isNotAPartner", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
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
                Model._hasValidationWidgetsValue = ((((((((PartnersHub_Layouts_LayoutDashboard_mvcModel.hasValidationWidgets || PartnersHub_Common_LoaderBlock_mvcModel.hasValidationWidgets) || PartnersHub_Home_ReferralLinksReports_mvcModel.hasValidationWidgets) || PartnersHub_Home_CompleteMyProfile_mvcModel.hasValidationWidgets) || PartnersHub_Home_CommissionPlans_mvcModel.hasValidationWidgets) || PartnersHub_Home_CommissionBanner_mvcModel.hasValidationWidgets) || PartnersHub_Home_PartnersAcademy_mvcModel.hasValidationWidgets) || PartnersHub_Home_AffiliateProgramme_mvcModel.hasValidationWidgets) || PartnersHub_Home_WhatsAppBanner_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Home.PartnersHubDashboard.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Home.PartnersHubDashboard.mvc$model", "PartnersHub.Home.PartnersHubDashboard.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Layouts.LayoutDashboard.mvc$view", "@outsystems/runtime-widgets-js", "PartnersHub.Common.LoaderBlock.mvc$view", "PartnersHub.Home.ReferralLinksReports.mvc$view", "PartnersHub.Home.CompleteMyProfile.mvc$view", "PartnersHub.Home.CommissionPlans.mvc$view", "PartnersHub.Home.CommissionBanner.mvc$view", "PartnersHub.Home.PartnersAcademy.mvc$view", "PartnersHub.Home.AffiliateProgramme.mvc$view", "PartnersHub.Home.WhatsAppBanner.mvc$view", "RESTAPIWebsocket.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocket", "RESTAPIWebsocket.model$ST_c864353821feed79663806f3e445d40eStructure", "PartnersHub.controller$RudderstackIdentifyEvent", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "RESTAPIWebsocket.model$ST_e89429535bbc3a843fdfa9ff6a750a5fStructure", "RESTAPIWebsocket.controller$PartnerSettings", "PartnersHub.controller$MountLiveChat", "RESTAPIWebsocket.controller$GetSettings", "PartnersHub.controller$HandleRedirectOnLogin", "PartnersHub.controller$IFrameLogout"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketModel, RESTAPIWebsocketController, React, OSView, PartnersHub_Home_PartnersHubDashboard_mvc_model, PartnersHub_Home_PartnersHubDashboard_mvc_controller, PartnersHubClientVariables, PartnersHub_Layouts_LayoutDashboard_mvc_view, OSWidgets, PartnersHub_Common_LoaderBlock_mvc_view, PartnersHub_Home_ReferralLinksReports_mvc_view, PartnersHub_Home_CompleteMyProfile_mvc_view, PartnersHub_Home_CommissionPlans_mvc_view, PartnersHub_Home_CommissionBanner_mvc_view, PartnersHub_Home_PartnersAcademy_mvc_view, PartnersHub_Home_AffiliateProgramme_mvc_view, PartnersHub_Home_WhatsAppBanner_mvc_view) {
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
            return [PartnersHub_Layouts_LayoutDashboard_mvc_view, PartnersHub_Common_LoaderBlock_mvc_view, PartnersHub_Home_ReferralLinksReports_mvc_view, PartnersHub_Home_CompleteMyProfile_mvc_view, PartnersHub_Home_CommissionPlans_mvc_view, PartnersHub_Home_CommissionBanner_mvc_view, PartnersHub_Home_PartnersAcademy_mvc_view, PartnersHub_Home_AffiliateProgramme_mvc_view, PartnersHub_Home_WhatsAppBanner_mvc_view];
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
                        return [$if((model.variables.isLoadingVar || model.variables.isNotAPartnerVar), false, this, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "height: 100%;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(PartnersHub_Common_LoaderBlock_mvc_view, {
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
                                    uuid: "2",
                                    alias: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            }))];
                        }, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "partners-hub-dashboard",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
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
                                    uuid: "5"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "color: #222; font-size: 24px; font-weight: bold;"
                                },
                                text: [$text(getTranslation("6QftVDCBCUOUp+OG1UYZ_A#Value", "Partner\'s Hub"))],
                                _idProps: {
                                    service: idService,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }))), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "display: flex; gap: 16px;"
                                },
                                style: "referral-links-reports-whatsapp",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "7"
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
                                    uuid: "8"
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
                                    uuid: "9",
                                    alias: "3"
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
                                    uuid: "11"
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
                                    uuid: "12",
                                    alias: "4"
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
                                        uuid: "13"
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
                                        uuid: "14",
                                        alias: "5"
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
                                        uuid: "15"
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
                                        uuid: "16",
                                        alias: "6"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    _dependencies: []
                                }))];
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "border: 1px solid #DEE2E6; border-radius: 8px; padding: 16px;"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "PartnersAcademy"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(PartnersHub_Home_PartnersAcademy_mvc_view, {
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
                                    uuid: "18",
                                    alias: "7"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "border: 1px solid #DEE2E6; border-radius: 8px; padding: 16px;"
                                },
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
                                    uuid: "20",
                                    alias: "8"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "WhatsappBanner"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(PartnersHub_Home_WhatsAppBanner_mvc_view, {
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
                                    uuid: "22",
                                    alias: "9"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })))];
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getisCommisionsPlansEnabledFF()), asPrimitiveValue(model.variables.website_platform_urlVar), asPrimitiveValue(model.variables.isNotAPartnerVar), asPrimitiveValue(model.variables.isLoadingVar)]
            }));
        }
    }

    return View;
});
define("PartnersHub.Home.PartnersHubDashboard.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources", "PartnersHub.Home.controller", "PartnersHub.Home.PartnersHubDashboard.mvc$controller.OnReady.GetAuthTokenJS", "PartnersHub.Home.PartnersHubDashboard.mvc$controller.OnReady.ParsePlatformURLJS", "RESTAPIWebsocket.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocket", "RESTAPIWebsocket.model$ST_c864353821feed79663806f3e445d40eStructure", "PartnersHub.controller$RudderstackIdentifyEvent", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "RESTAPIWebsocket.model$ST_e89429535bbc3a843fdfa9ff6a750a5fStructure", "RESTAPIWebsocket.controller$PartnerSettings", "PartnersHub.controller$MountLiveChat", "RESTAPIWebsocket.controller$GetSettings", "PartnersHub.controller$HandleRedirectOnLogin", "PartnersHub.controller$IFrameLogout"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketModel, RESTAPIWebsocketController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Home_PartnersHubDashboard_mvc_TranslationsResources, PartnersHub_HomeController, PartnersHub_Home_PartnersHubDashboard_mvc_controller_OnReady_GetAuthTokenJS, PartnersHub_Home_PartnersHubDashboard_mvc_controller_OnReady_ParsePlatformURLJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Home_PartnersHubDashboard_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {};
                this.dataFetchDependentsGraph = {};
                this.shouldSendClientVarsToDataSources = false;
            }

            // Server Actions - Methods
            get getBDEnablePartnerAccount$ServerAction() {
                if (!(this.hasOwnProperty("_getBDEnablePartnerAccount$ServerAction"))) {
                    this._getBDEnablePartnerAccount$ServerAction = function(callContext) {
                        var controller = this.controller;
                        return OS.Logger.startActiveSpan("GetBDEnablePartnerAccount", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetBDEnablePartnerAccount");
                                span.setAttribute("outsystems.function.key", "5d7be442-8e46-4df7-b36d-1de79ae5c83f");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
                            }

                            return OS.Flow.tryFinally(function() {
                                return controller.callServerAction("GetBDEnablePartnerAccount", "screenservices/PartnersHub/Home/PartnersHubDashboard/ActionGetBDEnablePartnerAccount", "xAiHTtR3nnJI6XYuIrZWyA", {}, controller.callContext(callContext), undefined, undefined, true).then(function(outputs) {
                                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("PartnersHub.Home.PartnersHubDashboard$ActionGetBDEnablePartnerAccount"))();
                                    executeServerActionResult.enablePartnerAccountOut = OS.DataConversion.ServerDataConverter.from(outputs.EnablePartnerAccount, OS.DataTypes.DataTypes.Boolean);
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

                return this._getBDEnablePartnerAccount$ServerAction;
            }
            set getBDEnablePartnerAccount$ServerAction(value) {
                this._getBDEnablePartnerAccount$ServerAction = value;
            }

            get getEnableWhatsappBanner$ServerAction() {
                if (!(this.hasOwnProperty("_getEnableWhatsappBanner$ServerAction"))) {
                    this._getEnableWhatsappBanner$ServerAction = function(callContext) {
                        var controller = this.controller;
                        return OS.Logger.startActiveSpan("GetEnableWhatsappBanner", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetEnableWhatsappBanner");
                                span.setAttribute("outsystems.function.key", "8a6aeaba-8069-42c2-a58f-7251d0854dc0");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
                            }

                            return OS.Flow.tryFinally(function() {
                                return controller.callServerAction("GetEnableWhatsappBanner", "screenservices/PartnersHub/Home/PartnersHubDashboard/ActionGetEnableWhatsappBanner", "pYv1IrVU1PoFUzQaOoL6AA", {}, controller.callContext(callContext), undefined, undefined, true).then(function(outputs) {
                                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("PartnersHub.Home.PartnersHubDashboard$ActionGetEnableWhatsappBanner"))();
                                    executeServerActionResult.enableWhatsappBannerOut = OS.DataConversion.ServerDataConverter.from(outputs.EnableWhatsappBanner, OS.DataTypes.DataTypes.Boolean);
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

                return this._getEnableWhatsappBanner$ServerAction;
            }
            set getEnableWhatsappBanner$ServerAction(value) {
                this._getEnableWhatsappBanner$ServerAction = value;
            }


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
            get _onReady$Action() {
                if (!(this.hasOwnProperty("__onReady$Action"))) {
                    this.__onReady$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnReady", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnReady");
                                span.setAttribute("outsystems.function.key", "8c4ae32d-9ef6-460e-84a3-871cfdd7a45f");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var getBDEnablePartnerAccountVar = new OS.DataTypes.VariableHolder();
                                var getEnableWhatsappBannerVar = new OS.DataTypes.VariableHolder();
                                var partnerSettingsVar = new OS.DataTypes.VariableHolder();
                                var getSettingsVar = new OS.DataTypes.VariableHolder();
                                var handleRedirectOnLoginVar = new OS.DataTypes.VariableHolder();
                                var getAuthTokenJSResult = new OS.DataTypes.VariableHolder();
                                var parsePlatformURLJSResult = new OS.DataTypes.VariableHolder();
                                var jSONDeserializeGetWebsiteStatusResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketModel.ST_c864353821feed79663806f3e445d40eStructure))());
                                return OS.Flow.executeAsyncFlow(function() {
                                    // IsLoading = True
                                    model.variables.isLoadingVar = true;
                                    // Execute Action: GetEnableWhatsappBanner
                                    model.flush();
                                    return controller.getEnableWhatsappBanner$ServerAction(callContext).then(function(value) {
                                        getEnableWhatsappBannerVar.value = value;
                                    }).then(function() {
                                        // Execute Action: GetBDEnablePartnerAccount
                                        model.flush();
                                        return controller.getBDEnablePartnerAccount$ServerAction(callContext).then(function(value) {
                                            getBDEnablePartnerAccountVar.value = value;
                                        });
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
                                                        span.setAttribute("outsystems.function.key", "0493bfc5-739f-406c-978c-d154b26d228c");
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
                                                    if ((!(getBDEnablePartnerAccountVar.value.enablePartnerAccountOut))) {
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
                                                                        span.setAttribute("outsystems.function.key", "2e6b08f5-f80c-45f6-8716-9c62f621de7a");
                                                                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                                                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                                                    }

                                                                    try {
                                                                        return controller.safeExecuteJSNode(PartnersHub_Home_PartnersHubDashboard_mvc_controller_OnReady_ParsePlatformURLJS, "ParsePlatformURL", "OnReady", {
                                                                            provider: OS.DataConversion.JSNodeParamConverter.to(partnerSettingsVar.value.responseOut.partner_settingsAttr.providerAttr, OS.DataTypes.DataTypes.Text),
                                                                            platform_url: OS.DataConversion.JSNodeParamConverter.to(partnerSettingsVar.value.responseOut.partner_settingsAttr.platform_urlAttr, OS.DataTypes.DataTypes.Text),
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
                                                        // EnableWhatsappBanner = GetEnableWhatsappBanner.EnableWhatsappBanner
                                                        model.variables.enableWhatsappBannerVar = getEnableWhatsappBannerVar.value.enableWhatsappBannerOut;
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

            get _onRender$Action() {
                if (!(this.hasOwnProperty("__onRender$Action"))) {
                    this.__onRender$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnRender", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnRender");
                                span.setAttribute("outsystems.function.key", "9ade71bd-e602-415b-89d9-1681dcbb90c2");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnRender");
                                callContext = controller.callContext(callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onRender$Action;
            }
            set _onRender$Action(value) {
                this.__onRender$Action = value;
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


            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "8c4ae32d-9ef6-460e-84a3-871cfdd7a45f");
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

            onRender$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnRender__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnRender");
                        span.setAttribute("outsystems.function.key", "9ade71bd-e602-415b-89d9-1681dcbb90c2");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onRender$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

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
                    this._onRenderEventHandler = function(callContext) {
                        var controller = this.controller;
                        var model = this.model;
                        var idService = this.idService;

                        return controller.onRender$Action(callContext);

                    };
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
        Controller.registerVariableGroupType("PartnersHub.Home.PartnersHubDashboard$ActionGetBDEnablePartnerAccount", [{
            name: "EnablePartnerAccount",
            attrName: "enablePartnerAccountOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.registerVariableGroupType("PartnersHub.Home.PartnersHubDashboard$ActionGetEnableWhatsappBanner", [{
            name: "EnableWhatsappBanner",
            attrName: "enableWhatsappBannerOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);

        // Client Actions - Variables
        Controller.registerVariableGroupType("PartnersHub.Home.PartnersHubDashboard.OnReady$getAuthTokenJSResult", [{
            name: "Token",
            attrName: "tokenOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("PartnersHub.Home.PartnersHubDashboard.OnReady$parsePlatformURLJSResult", [{
            name: "website_platform_url",
            attrName: "website_platform_urlOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.Home.PartnersHubDashboard.mvc$controller.OnReady.GetAuthTokenJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const token = localStorage.getItem('token')

        $parameters.Token = token
    };
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


define("PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.de-DE", [], function() {
    return {
        "6QftVDCBCUOUp+OG1UYZ_A#Value": "Partner-Hub"
    };
});

define("PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.es-ES", [], function() {
    return {
        "6QftVDCBCUOUp+OG1UYZ_A#Value": "Hub del Socio"
    };
});

define("PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.fr-FR", [], function() {
    return {
        "6QftVDCBCUOUp+OG1UYZ_A#Value": "Hub Partenaire"
    };
});

define("PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.it-IT", [], function() {
    return {
        "6QftVDCBCUOUp+OG1UYZ_A#Value": "Hub del Partner"
    };
});

define("PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.pl-PL", [], function() {
    return {
        "6QftVDCBCUOUp+OG1UYZ_A#Value": "Hub Partnera"
    };
});

define("PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.pt-PT", [], function() {
    return {
        "6QftVDCBCUOUp+OG1UYZ_A#Value": "Hub do Parceiro"
    };
});

define("PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.ru-RU", [], function() {
    return {
        "6QftVDCBCUOUp+OG1UYZ_A#Value": "Хаб Партнера"
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