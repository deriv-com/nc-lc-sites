define("tradershub.MainFlow.Options.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "SharedUtilities.controller", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "tradershub.model$ST_dda3674fb618c7350645a460f303a303Structure", "tradershub.model$RL_5efabb620fce6e69244e61944ef4417d", "tradershub.model$ST_43e221b4a9439e2ea71501e5244dde34Structure", "SharedUtilities.controller$GetPlatformFromURL", "tradershub.referencesHealth", "tradershub.referencesHealth$SharedUtilities", "SharedUtilities.controller$GetURL", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure", "tradershub.controller$SendAuthorize", "SharedUtilities.controller$FormatMoney", "tradershub.controller$TradingPlatformProductListing", "tradershub.controller$GetWebsiteStatus", "RESTAPIWebsocketOfficial.model$ST_bf5d4ab423fae3ff38a977653adc8398Structure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.model$RL_071a5687136a6dbeecb0a0d193c188a2", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure", "tradershub.controller$FeatureFlagValueByName", "tradershub.model$ST_52667a49e65b5175f66dacecb12f345fStructure", "tradershub.controller$GetAccountByLoginId", "tradershub.controller$TopupVirtualAccount", "tradershub.model$EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecord", "tradershub.model$RL_7f0ff0d0a70a4e41424efbf5ef899b8d", "tradershub.controller$GetAllAccountsBalance", "tradershub.controller$GetCurrencyIcon"], function(OSRuntimeCore, tradershubModel, SharedUtilitiesController, tradershubController, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IsDerivGoModalVisible", "isDerivGoModalVisibleVar", "IsDerivGoModalVisible", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("AccountType", "accountTypeVar", "AccountType", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "demo";
                    }, false),
                    this.attr("FilteredAccountList", "filteredAccountListVar", "FilteredAccountList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_5efabb620fce6e69244e61944ef4417d());
                    }, false, tradershubModel.RL_5efabb620fce6e69244e61944ef4417d),
                    this.attr("IsAccountSwitcherOpen", "isAccountSwitcherOpenVar", "IsAccountSwitcherOpen", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("HasRealAccount", "hasRealAccountVar", "HasRealAccount", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("SelectedAccountCurrency", "selectedAccountCurrencyVar", "SelectedAccountCurrency", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("SelectedAccountBalance", "selectedAccountBalanceVar", "SelectedAccountBalance", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("ShouldShowWarningPopup", "shouldShowWarningPopupVar", "ShouldShowWarningPopup", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("OpenAccountSwitcherModal", "openAccountSwitcherModalVar", "OpenAccountSwitcherModal", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("IsBalanceLoading", "isBalanceLoadingVar", "IsBalanceLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("TradingPlatformProductListingResponse", "tradingPlatformProductListingResponseVar", "TradingPlatformProductListingResponse", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_43e221b4a9439e2ea71501e5244dde34Structure());
                    }, false, tradershubModel.ST_43e221b4a9439e2ea71501e5244dde34Structure),
                    this.attr("ClientCountryText", "clientCountryTextVar", "ClientCountryText", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("IsNotResident", "isNotResidentVar", "IsNotResident", true, false, OS.DataTypes.DataTypes.Boolean, function() {
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
            return {
                RealDemoSwitcher: OS.Model.ValidationWidgetRecord,
                CheckIcon: OS.Model.ValidationWidgetRecord
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

define("tradershub.MainFlow.Options.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "SharedUtilities.controller", "RESTAPIWebsocketOfficial.model", "react", "@outsystems/runtime-view-js", "tradershub.MainFlow.Options.mvc$model", "tradershub.MainFlow.Options.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.MainLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.MainFlowBlocks.LoggedOutBanner.mvc$view", "OutSystemsUI.Content.Tooltip.mvc$view", "tradershub.Common.BalanceSkeletonLoader.mvc$view", "tradershub.MainFlowBlocks.OptionsProductCard.mvc$view", "OutSystemsUI.Utilities.Separator.mvc$view", "tradershub.model$ST_dda3674fb618c7350645a460f303a303Structure", "tradershub.model$RL_5efabb620fce6e69244e61944ef4417d", "tradershub.model$ST_43e221b4a9439e2ea71501e5244dde34Structure", "SharedUtilities.controller$GetPlatformFromURL", "tradershub.referencesHealth", "tradershub.referencesHealth$SharedUtilities", "SharedUtilities.controller$GetURL", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure", "tradershub.controller$SendAuthorize", "SharedUtilities.controller$FormatMoney", "tradershub.controller$TradingPlatformProductListing", "tradershub.controller$GetWebsiteStatus", "RESTAPIWebsocketOfficial.model$ST_bf5d4ab423fae3ff38a977653adc8398Structure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.model$RL_071a5687136a6dbeecb0a0d193c188a2", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure", "tradershub.controller$FeatureFlagValueByName", "tradershub.model$ST_52667a49e65b5175f66dacecb12f345fStructure", "tradershub.controller$GetAccountByLoginId", "tradershub.controller$TopupVirtualAccount", "tradershub.model$EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecord", "tradershub.model$RL_7f0ff0d0a70a4e41424efbf5ef899b8d", "tradershub.controller$GetAllAccountsBalance", "tradershub.controller$GetCurrencyIcon"], function(OSRuntimeCore, tradershubModel, tradershubController, SharedUtilitiesController, RESTAPIWebsocketOfficialModel, React, OSView, tradershub_MainFlow_Options_mvc_model, tradershub_MainFlow_Options_mvc_controller, tradershubClientVariables, tradershub_Layouts_MainLayout_mvc_view, OSWidgets, tradershub_MainFlowBlocks_LoggedOutBanner_mvc_view, OutSystemsUI_Content_Tooltip_mvc_view, tradershub_Common_BalanceSkeletonLoader_mvc_view, tradershub_MainFlowBlocks_OptionsProductCard_mvc_view, OutSystemsUI_Utilities_Separator_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "MainFlow.Options";
        }

        static getAttributes() {
            return {
                codeFunction: "Options",
                functionKey: "4605474b-132d-4331-8d2c-b367d0f37e9f",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.MainFlow.Options.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_MainLayout_mvc_view, tradershub_MainFlowBlocks_LoggedOutBanner_mvc_view, OutSystemsUI_Content_Tooltip_mvc_view, tradershub_Common_BalanceSkeletonLoader_mvc_view, tradershub_MainFlowBlocks_OptionsProductCard_mvc_view, OutSystemsUI_Utilities_Separator_mvc_view];
        }

        get modelFactory() {
            return tradershub_MainFlow_Options_mvc_model;
        }

        get controllerFactory() {
            return tradershub_MainFlow_Options_mvc_controller;
        }

        get title() {


            return "Options";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(tradershub_Layouts_MainLayout_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    IsLoading: model.variables.isLoadingVar,
                    ActiveTab: 2
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
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $if((((model.variables.accountTypeVar === "demo") && ((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier()))) && !(model.variables.hasRealAccountVar)), false, this, function() {
                            return [React.createElement(OSWidgets.Link, {
                                enabled: true,
                                extendedProperties: {
                                    style: "text-decoration: none;"
                                },
                                transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                                url: OS.Navigation.generateScreenURL("tradershub", "currency-selection", {}),
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "demo-blue-container",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "BlueContainer"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "color: #101213; font-weight: 400;"
                                },
                                text: ["Fill in your account details to make your first deposit."],
                                _idProps: {
                                    service: idService,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "padding: 0 11px;"
                                },
                                gridProperties: {
                                    marginLeft: "4px"
                                },
                                style: "display-flex align-items-center justify-content-center",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "ChevronIcon"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_sm.svg"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }))))];
                        }, function() {
                            return [];
                        }), $if(false, false, this, function() {
                            return [];
                        }, function() {
                            return [];
                        }), $if(false, false, this, function() {
                            return [];
                        }, function() {
                            return [];
                        }), React.createElement(tradershub_MainFlowBlocks_LoggedOutBanner_mvc_view, {
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
                                uuid: "7",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "options-header",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "OptionsHeader"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "options-header__left",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "LeftContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex align-items-center",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "10"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            style: "main-title",
                            text: ["Options trading"],
                            _idProps: {
                                service: idService,
                                uuid: "11"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OutSystemsUI_Content_Tooltip_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                Trigger: tradershubModel.staticEntities.trigger.onClick
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
                                uuid: "12",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Image, {
                                        extendedProperties: {
                                            style: "margin-top: 10px;"
                                        },
                                        gridProperties: {
                                            marginLeft: "8px"
                                        },
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info.svg"),
                                        style: "display-flex align-center",
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "13"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })];
                                }),
                                tooltip: new PlaceholderContent(function() {
                                    return ["Predict the market; profit if you’re right; risk only what you put in."];
                                })
                            },
                            _dependencies: []
                        })), $if(((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier())), false, this, function() {
                            return [React.createElement(OSWidgets.ButtonGroup, {
                                _validationProps: {
                                    validationService: validationService
                                },
                                enabled: true,
                                mandatory: true,
                                style: "real-demo-switcher",
                                variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.accountTypeVar, function(value) {
                                    model.variables.accountTypeVar = value;
                                }),
                                _idProps: {
                                    service: idService,
                                    name: "RealDemoSwitcher"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.ButtonGroupItem, {
                                enabled: true,
                                extendedEvents: {
                                    onClick: function() {
                                        return Promise.resolve().then(function() {
                                            var eventHandlerContext = callContext.clone();
                                            return controller.setDemoValue$Action(controller.callContext(eventHandlerContext));
                                        });;
                                    }
                                },
                                style: "real-demo-switcher-item",
                                value: "demo",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "demo"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, "Demo"), React.createElement(OSWidgets.ButtonGroupItem, {
                                enabled: true,
                                extendedEvents: {
                                    onClick: function() {
                                        return Promise.resolve().then(function() {
                                            var eventHandlerContext = callContext.clone();
                                            return controller.setRealValue$Action(controller.callContext(eventHandlerContext));
                                        });;
                                    }
                                },
                                style: "real-demo-switcher-item",
                                value: "real",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "real"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, "Real"))];
                        }, function() {
                            return [];
                        })), $if(((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier())), false, this, function() {
                            return [$if((model.variables.accountTypeVar === "real"), true, this, function() {
                                return [React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    gridProperties: {
                                        classes: "OSInline"
                                    },
                                    style: "real-account-dropdown-container",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "17"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    style: "account-switcher",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        name: "RealContainer"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    extendedEvents: {
                                        onClick: function() {
                                            var eventHandlerContext = callContext.clone();
                                            controller.mobileAccountSwitcherOnClick$Action(controller.callContext(eventHandlerContext));

                                            ;
                                        }
                                    },
                                    extendedProperties: {
                                        style: "margin-right: 16px;"
                                    },
                                    style: "hide-desktop flex-direction-column",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        name: "MobileAccountSwitcher"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "color: #101213; min-width: 135px;"
                                    },
                                    text: ["Balance:"],
                                    _idProps: {
                                        service: idService,
                                        uuid: "20"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }), $if(model.variables.isAccountSwitcherOpenVar, true, this, function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "account-switcher__dropdown hide-mobile",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "Dropdown2"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "border-color: #E9ECEF; border-style: none none solid none; border-width: 0px 0px 1px 0px; padding: 10px;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "TitleContainer2"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "color: #101213; font-weight: 700;"
                                        },
                                        text: ["Select account"],
                                        _idProps: {
                                            service: idService,
                                            uuid: "23"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "padding: 10px;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "AccountListContainer2"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.List, {
                                        animateItems: true,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mode: /*Default*/ 0,
                                        source: model.variables.filteredAccountListVar,
                                        style: "list list-group",
                                        tag: "div",
                                        _idProps: {
                                            service: idService,
                                            name: "AccountList3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                return [React.createElement(OSWidgets.ListItem, {
                                                    onClick: function() {
                                                        return Promise.resolve().then(function() {
                                                            var eventHandlerContext = callContext.clone();
                                                            return controller.accountListItemOnClick$Action(controller.callContext(eventHandlerContext));
                                                        });;
                                                    },
                                                    style: "list-item",
                                                    triggerActionOnFullSwipeLeft: true,
                                                    triggerActionOnFullSwipeRight: true,
                                                    _idProps: {
                                                        service: idService,
                                                        name: "ListItem3"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    placeholders: {
                                                        leftActions: PlaceholderContent.Empty,
                                                        content: new PlaceholderContent(function() {
                                                            return [React.createElement(OSWidgets.Container, {
                                                                align: /*Default*/ 0,
                                                                animate: false,
                                                                style: model.getCachedValue(idService.getId("69vichJKzkazcOCBgU9wsQ.Style"), function() {
                                                                    return (((tradershubClientVariables.getActiveLoginId() === model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).loginidAttr)) ? ("account-list-item active-account") : ("account-list-item"));
                                                                }, function() {
                                                                    return tradershubClientVariables.getActiveLoginId();
                                                                }, function() {
                                                                    return model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).loginidAttr;
                                                                }),
                                                                visible: true,
                                                                _idProps: {
                                                                    service: idService,
                                                                    uuid: "27"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            }, React.createElement(OSWidgets.Container, {
                                                                align: /*Default*/ 0,
                                                                animate: false,
                                                                extendedProperties: {
                                                                    style: "border-radius: 100%; height: 24px; overflow: hidden;"
                                                                },
                                                                gridProperties: {
                                                                    classes: "OSInline",
                                                                    width: "24px"
                                                                },
                                                                style: "display-flex align-items-center justify-content-center",
                                                                visible: true,
                                                                _idProps: {
                                                                    service: idService,
                                                                    name: "Icon3"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            }, React.createElement(OSWidgets.Image, {
                                                                type: /*External*/ 1,
                                                                url: model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).iconAttr,
                                                                _idProps: {
                                                                    service: idService,
                                                                    uuid: "29"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            })), React.createElement(OSWidgets.Container, {
                                                                align: /*Default*/ 0,
                                                                animate: false,
                                                                gridProperties: {
                                                                    marginLeft: "8px"
                                                                },
                                                                style: "display-flex align-items-center",
                                                                visible: true,
                                                                _idProps: {
                                                                    service: idService,
                                                                    name: "text3"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            }, React.createElement(OSWidgets.Expression, {
                                                                style: "account-list-item__text",
                                                                value: model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).balanceAttr,
                                                                _idProps: {
                                                                    service: idService,
                                                                    name: "AccountBalance3"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            }), React.createElement(OSWidgets.Expression, {
                                                                gridProperties: {
                                                                    marginLeft: "5px"
                                                                },
                                                                style: "account-list-item__text",
                                                                value: model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).currencyAttr,
                                                                _idProps: {
                                                                    service: idService,
                                                                    name: "AccountCurrency3"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            })))];
                                                        }),
                                                        rightActions: PlaceholderContent.Empty
                                                    },
                                                    _dependencies: [asPrimitiveValue(model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).currencyAttr), asPrimitiveValue(model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).balanceAttr), asPrimitiveValue(model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).iconAttr), asPrimitiveValue(model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).loginidAttr), asPrimitiveValue(tradershubClientVariables.getActiveLoginId())]
                                                })];
                                            }, callContext, idService, "1")
                                        },
                                        _dependencies: [asPrimitiveValue(tradershubClientVariables.getActiveLoginId())]
                                    }), React.createElement(OSWidgets.Link, {
                                        enabled: true,
                                        style: "remove-hover",
                                        transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                                        url: OS.Navigation.generateScreenURL("tradershub", "AddMoreAccount", {}),
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "33"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "border-color: #DEE2E6; border-style: solid; border-width: 1px 0px 0px 0px; padding: 8px;"
                                        },
                                        style: "display-flex align-items-center justify-content-space-between",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "AddMoreAccountContainer3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "color: #272B30; font-weight: 700;"
                                        },
                                        text: ["Add more accounts"],
                                        _idProps: {
                                            service: idService,
                                            uuid: "35"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "display-flex align-items-center justify-content-center",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "36"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Image, {
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "37"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))))))];
                                }, function() {
                                    return [$if(model.variables.isBalanceLoadingVar, false, this, function() {
                                        return [React.createElement(tradershub_Common_BalanceSkeletonLoader_mvc_view, {
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
                                                uuid: "38",
                                                alias: "4"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        })];
                                    }, function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            style: "display-flex align-items-center",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "39"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Expression, {
                                            extendedProperties: {
                                                style: "color: #101213; font-size: 16px; font-weight: 700;"
                                            },
                                            value: ((model.variables.selectedAccountBalanceVar + " ") + model.variables.selectedAccountCurrencyVar),
                                            _idProps: {
                                                service: idService,
                                                uuid: "40"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }), React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            gridProperties: {
                                                marginLeft: "8px"
                                            },
                                            style: "display-flex align-items-center justify-content-center",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "41"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Image, {
                                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevrondownsm.svg"),
                                            type: /*Static*/ 0,
                                            _idProps: {
                                                service: idService,
                                                uuid: "42"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        })))];
                                    })];
                                })), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    extendedEvents: {
                                        onClick: function() {
                                            var eventHandlerContext = callContext.clone();
                                            controller.openAccountSwitcherOnClick$Action(controller.callContext(eventHandlerContext));

                                            ;
                                        }
                                    },
                                    extendedProperties: {
                                        style: "margin-right: 16px;"
                                    },
                                    style: "hide-mobile",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        name: "DesktopAccountSwitcher"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "color: #101213; min-width: 135px;"
                                    },
                                    text: ["Balance:"],
                                    _idProps: {
                                        service: idService,
                                        uuid: "44"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }), $if(model.variables.isBalanceLoadingVar, false, this, function() {
                                    return [React.createElement(tradershub_Common_BalanceSkeletonLoader_mvc_view, {
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
                                            uuid: "45",
                                            alias: "5"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })];
                                }, function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "display-flex align-items-center",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "46"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Expression, {
                                        extendedProperties: {
                                            style: "color: #101213; font-size: 16px; font-weight: 700;"
                                        },
                                        value: ((model.variables.selectedAccountBalanceVar + " ") + model.variables.selectedAccountCurrencyVar),
                                        _idProps: {
                                            service: idService,
                                            uuid: "47"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        gridProperties: {
                                            marginLeft: "8px"
                                        },
                                        style: "display-flex align-items-center justify-content-center",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "48"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Image, {
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevrondownsm.svg"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "49"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })))];
                                })), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    extendedProperties: {
                                        style: "min-width: 79.5px;"
                                    },
                                    style: "display-flex align-items-center justify-content-center flex-direction-column cursor-pointer",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "50"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Button, {
                                    enabled: true,
                                    isDefault: false,
                                    onClick: function() {
                                        try {
                                            OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "Wallets", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), null, true);
                                        } catch (ex) {
                                            if (((ex.name) !== ("RedirectOccurredException"))) {
                                                throw ex;
                                            }

                                        };
                                    },
                                    style: "transactions-button",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "51"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Image, {
                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.transfer.svg"),
                                    type: /*Static*/ 0,
                                    _idProps: {
                                        service: idService,
                                        uuid: "52"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }), React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "font-size: 14px; margin-left: 8px;"
                                    },
                                    style: "hide-mobile",
                                    text: ["Transfer"],
                                    _idProps: {
                                        service: idService,
                                        uuid: "53"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })), React.createElement(OSWidgets.Link, {
                                    enabled: true,
                                    gridProperties: {
                                        classes: "ThemeGrid_MarginGutter"
                                    },
                                    style: "remove-hover",
                                    transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                                    url: OS.Navigation.generateScreenURL("tradershub", "Wallets", {}),
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "54"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "color: #FF444F; font-size: 12px; font-weight: 700; margin-top: 4px;"
                                    },
                                    style: "hide-desktop",
                                    text: ["Transfer"],
                                    _idProps: {
                                        service: idService,
                                        uuid: "55"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })))), $if(model.variables.isAccountSwitcherOpenVar, true, this, function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "account-switcher__dropdown hide-mobile",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "Dropdown"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "border-color: #E9ECEF; border-style: none none solid none; border-width: 0px 0px 1px 0px; padding: 10px;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "TitleContainer"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "color: #101213; font-weight: 700;"
                                        },
                                        text: ["Select account"],
                                        _idProps: {
                                            service: idService,
                                            uuid: "58"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "padding: 10px;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "AccountListContainer"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.List, {
                                        animateItems: true,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mode: /*Default*/ 0,
                                        source: model.variables.filteredAccountListVar,
                                        style: "list list-group",
                                        tag: "div",
                                        _idProps: {
                                            service: idService,
                                            name: "AccountList"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                return [React.createElement(OSWidgets.ListItem, {
                                                    onClick: function() {
                                                        return Promise.resolve().then(function() {
                                                            var eventHandlerContext = callContext.clone();
                                                            return controller.accountListItemOnClick$Action(controller.callContext(eventHandlerContext));
                                                        });;
                                                    },
                                                    style: "list-item",
                                                    triggerActionOnFullSwipeLeft: true,
                                                    triggerActionOnFullSwipeRight: true,
                                                    _idProps: {
                                                        service: idService,
                                                        name: "ListItem"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    placeholders: {
                                                        leftActions: PlaceholderContent.Empty,
                                                        content: new PlaceholderContent(function() {
                                                            return [React.createElement(OSWidgets.Container, {
                                                                align: /*Default*/ 0,
                                                                animate: false,
                                                                style: model.getCachedValue(idService.getId("PwOMKu_PA0mpuv3GmZ0fqw.Style"), function() {
                                                                    return (((tradershubClientVariables.getActiveLoginId() === model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).loginidAttr)) ? ("account-list-item active-account") : ("account-list-item"));
                                                                }, function() {
                                                                    return tradershubClientVariables.getActiveLoginId();
                                                                }, function() {
                                                                    return model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).loginidAttr;
                                                                }),
                                                                visible: true,
                                                                _idProps: {
                                                                    service: idService,
                                                                    uuid: "62"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            }, React.createElement(OSWidgets.Container, {
                                                                align: /*Default*/ 0,
                                                                animate: false,
                                                                extendedProperties: {
                                                                    style: "border-radius: 100%; height: 24px; overflow: hidden;"
                                                                },
                                                                gridProperties: {
                                                                    classes: "OSInline",
                                                                    width: "24px"
                                                                },
                                                                style: "display-flex align-items-center justify-content-center",
                                                                visible: true,
                                                                _idProps: {
                                                                    service: idService,
                                                                    name: "Icon"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            }, React.createElement(OSWidgets.Image, {
                                                                type: /*External*/ 1,
                                                                url: model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).iconAttr,
                                                                _idProps: {
                                                                    service: idService,
                                                                    uuid: "64"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            })), React.createElement(OSWidgets.Container, {
                                                                align: /*Default*/ 0,
                                                                animate: false,
                                                                gridProperties: {
                                                                    marginLeft: "8px"
                                                                },
                                                                style: "display-flex align-items-center",
                                                                visible: true,
                                                                _idProps: {
                                                                    service: idService,
                                                                    name: "text"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            }, React.createElement(OSWidgets.Expression, {
                                                                style: "account-list-item__text",
                                                                value: model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).balanceAttr,
                                                                _idProps: {
                                                                    service: idService,
                                                                    name: "AccountBalance"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            }), React.createElement(OSWidgets.Expression, {
                                                                gridProperties: {
                                                                    marginLeft: "5px"
                                                                },
                                                                style: "account-list-item__text",
                                                                value: model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).currencyAttr,
                                                                _idProps: {
                                                                    service: idService,
                                                                    name: "AccountCurrency"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            })))];
                                                        }),
                                                        rightActions: PlaceholderContent.Empty
                                                    },
                                                    _dependencies: [asPrimitiveValue(model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).currencyAttr), asPrimitiveValue(model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).balanceAttr), asPrimitiveValue(model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).iconAttr), asPrimitiveValue(model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).loginidAttr), asPrimitiveValue(tradershubClientVariables.getActiveLoginId())]
                                                })];
                                            }, callContext, idService, "2")
                                        },
                                        _dependencies: [asPrimitiveValue(tradershubClientVariables.getActiveLoginId())]
                                    }), React.createElement(OSWidgets.Link, {
                                        enabled: true,
                                        style: "remove-hover",
                                        transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                                        url: OS.Navigation.generateScreenURL("tradershub", "AddMoreAccount", {}),
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "68"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "border-color: #DEE2E6; border-style: solid; border-width: 1px 0px 0px 0px; padding: 8px;"
                                        },
                                        style: "display-flex align-items-center justify-content-space-between",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "AddMoreAccountContainer"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "color: #272B30; font-weight: 700;"
                                        },
                                        text: ["Add more accounts"],
                                        _idProps: {
                                            service: idService,
                                            uuid: "70"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "display-flex align-items-center justify-content-center",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "71"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Image, {
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "72"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))))))];
                                }, function() {
                                    return [];
                                }))];
                            }, function() {
                                return [React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    style: "demo-account-container",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        name: "DemoContainer"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    extendedProperties: {
                                        style: "margin-right: 16px;"
                                    },
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "74"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "color: #101213; min-width: 135px;"
                                    },
                                    text: ["Balance:"],
                                    _idProps: {
                                        service: idService,
                                        uuid: "75"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }), $if(model.variables.isBalanceLoadingVar, false, this, function() {
                                    return [React.createElement(tradershub_Common_BalanceSkeletonLoader_mvc_view, {
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
                                            uuid: "76",
                                            alias: "6"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })];
                                }, function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "77"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Expression, {
                                        extendedProperties: {
                                            style: "color: #101213; font-size: 16px; font-weight: 700;"
                                        },
                                        value: ((model.variables.selectedAccountBalanceVar + " ") + model.variables.selectedAccountCurrencyVar),
                                        _idProps: {
                                            service: idService,
                                            name: "DemoBalance"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))];
                                })), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    extendedEvents: {
                                        onClick: function() {
                                            return Promise.resolve().then(function() {
                                                var eventHandlerContext = callContext.clone();
                                                return controller.topupDemoAccount$Action(controller.callContext(eventHandlerContext));
                                            });;
                                        }
                                    },
                                    extendedProperties: {
                                        style: "min-width: 79.5px;"
                                    },
                                    style: "display-flex align-items-center justify-content-center flex-direction-column cursor-pointer",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        name: "ResetBalanceButton"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Button, {
                                    enabled: true,
                                    isDefault: false,
                                    onClick: function() {
                                        return Promise.resolve().then(function() {
                                            var eventHandlerContext = callContext.clone();
                                            return controller.topupDemoAccount$Action(controller.callContext(eventHandlerContext));
                                        });;
                                    },
                                    style: "transactions-button",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "80"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Image, {
                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.resetbalance.svg"),
                                    type: /*Static*/ 0,
                                    _idProps: {
                                        service: idService,
                                        uuid: "81"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }), React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "font-size: 14px; margin-left: 8px;"
                                    },
                                    style: "hide-mobile",
                                    text: ["Reset balance"],
                                    _idProps: {
                                        service: idService,
                                        uuid: "82"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })), React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "color: #FF444F; font-size: 12px; font-weight: 700; margin-top: 4px;"
                                    },
                                    style: "hide-desktop",
                                    text: ["Reset balance"],
                                    _idProps: {
                                        service: idService,
                                        uuid: "83"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })))];
                            })];
                        }, function() {
                            return [];
                        })), $if(model.variables.tradingPlatformProductListingResponseVar.shouldShowDTraderAttr, false, this, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "dtrader-container",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "DTraderContainer"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Link, {
                                enabled: true,
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.dTraderRedirection$Action(controller.callContext(eventHandlerContext));

                                    ;
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "85"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "color: #222;"
                                },
                                style: "display-flex align-items-center justify-content-space-between",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "DTrader"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "display-flex align-items-center",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "87"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                extendedProperties: {
                                    style: "height: 32px;"
                                },
                                gridProperties: {
                                    width: "32px"
                                },
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.dtrader.svg"),
                                style: "",
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "88"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                gridProperties: {
                                    marginLeft: "16"
                                },
                                style: "display-flex flex-direction-column",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "89"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-weight: bold;"
                                },
                                text: ["Deriv Trader"],
                                _idProps: {
                                    service: idService,
                                    uuid: "90"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-size: 12px; margin-top: 4px;"
                                },
                                text: ["Diverse trading options, low-entry costs."],
                                _idProps: {
                                    service: idService,
                                    uuid: "91"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }))), $if(((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier())), false, this, function() {
                                return [];
                            }, function() {
                                return [React.createElement(OSWidgets.Image, {
                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                                    style: "cursor-pointer",
                                    type: /*Static*/ 0,
                                    _idProps: {
                                        service: idService,
                                        uuid: "92"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })];
                            }))), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "trade-types-header",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "TraderTypesHeader"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, "Trade types:"), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "trade-types-body",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "TradeTypesBody"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Link, {
                                enabled: true,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                                url: OS.Navigation.generateScreenURL("https://app.deriv.com/dtrader?trade_type=accumulator", {}),
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "95"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "color: #222;"
                                },
                                style: "trade-type-item",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "96"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "margin-bottom: 4px;"
                                },
                                style: "display-flex align-items-center",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "97"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.accumulators.svg"),
                                style: "display-block",
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "98"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), "Accumulators")), React.createElement(OSWidgets.Link, {
                                enabled: true,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                                url: OS.Navigation.generateScreenURL("https://app.deriv.com/dtrader?trade_type=turboslong", {}),
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "99"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "color: #222;"
                                },
                                style: "trade-type-item",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "100"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "margin-bottom: 4px;"
                                },
                                style: "display-flex align-items-center",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "101"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.turbos.svg"),
                                style: "display-block",
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "102"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), "Turbos")), React.createElement(OSWidgets.Link, {
                                enabled: true,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                                url: OS.Navigation.generateScreenURL("https://app.deriv.com/dtrader?trade_type=vanillalongcall", {}),
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "103"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "color: #222;"
                                },
                                style: "trade-type-item",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "104"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "margin-bottom: 4px;"
                                },
                                style: "display-flex align-items-center",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "105"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.vanilla_options.svg"),
                                style: "display-block",
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "106"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), "Vanilla options")), React.createElement(OSWidgets.Link, {
                                enabled: true,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                                url: OS.Navigation.generateScreenURL("https://app.deriv.com/dtrader?trade_type=multiplier", {}),
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "107"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "color: #222;"
                                },
                                style: "trade-type-item",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "108"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "margin-bottom: 4px;"
                                },
                                style: "display-flex align-items-center",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "109"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.multipliers.svg"),
                                style: "display-block",
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "110"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), "Multipliers"))), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "hide-desktop",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "111"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Button, {
                                enabled: true,
                                extendedProperties: {
                                    style: "height: 40px; margin-top: 16px; padding: 16px 0;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                isDefault: false,
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.dTraderRedirection$Action(controller.callContext(eventHandlerContext));

                                    ;
                                },
                                style: "btn btn-primary",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "ResponsiveTradeButton2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, "Trade")))];
                        }, function() {
                            return [];
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "rest-of-platforms",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "RestOfPlatforms"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(tradershub_MainFlowBlocks_OptionsProductCard_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                ShouldShowProduct: model.variables.tradingPlatformProductListingResponseVar.shouldShowDBotAttr,
                                Description: "Automated trading with custom bots.",
                                Icon: "/tradershub/img/tradershub.dbot.svg",
                                Title: "Deriv Bot"
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                redirectionLink$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.botRedirection$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "114",
                                alias: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), React.createElement(tradershub_MainFlowBlocks_OptionsProductCard_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                Icon: "/tradershub/img/tradershub.smart_trader.svg",
                                ShouldShowProduct: model.variables.tradingPlatformProductListingResponseVar.shouldShowSmartTraderAttr,
                                Description: "Simple interface for traders of all levels.",
                                Title: "SmartTrader"
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                redirectionLink$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.smarttraderRedirection$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "115",
                                alias: "8"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "deriv-go-section",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "DerivGoHeader"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold; margin-top: 20px;"
                            },
                            text: ["Download our mobile app:"],
                            _idProps: {
                                service: idService,
                                uuid: "117"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(tradershub_MainFlowBlocks_OptionsProductCard_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                ShouldShowProduct: model.variables.tradingPlatformProductListingResponseVar.shouldShowDerivGoAttr,
                                Icon: "/tradershub/img/tradershub.dgo.svg",
                                Title: "Deriv Go",
                                Description: "Mobile trading on-the-go."
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                redirectionLink$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.toggleDerivGoModal$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "118",
                                alias: "9"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "DerivGoModal"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Popup, {
                            extendedProperties: {
                                style: "height: 100%; margin-bottom: 0px; margin-left: auto; margin-right: 0px; margin-top: 0px; overflow-y: scroll; padding: 10px;"
                            },
                            showPopup: model.variables.isDerivGoModalVisibleVar,
                            style: "\"popup-dialog\"",
                            _idProps: {
                                service: idService,
                                name: "DerivGoTradeModal"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 10%;"
                            },
                            style: "display-flex align-items-center justify-content-space-between",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "Header"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-weight: bold; margin-left: 0px; padding: 0px;"
                            },
                            text: ["Trade with Deriv Go"],
                            _idProps: {
                                service: idService,
                                uuid: "122"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Image, {
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.toggleDerivGoModal$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            extendedProperties: {
                                style: "padding: 0px;"
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.closeicon.svg"),
                            style: "cursor-pointer",
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "123"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OutSystemsUI_Utilities_Separator_mvc_view, {
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
                                uuid: "124",
                                alias: "10"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "padding: 10px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "MainContentOfModal"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            style: "display-flex align-items-center justify-content-center",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "126"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.dgo.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "127"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-weight: bold; margin-left: 10px;"
                            },
                            text: ["Deriv GO"],
                            _idProps: {
                                service: idService,
                                uuid: "128"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Image, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.dgobanner.jpg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "129"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: left;"
                            },
                            style: "display-flex align-items-center justify-content-center",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "Description"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "margin-bottom: 10px; margin-top: 10px;"
                            },
                            text: ["Download Deriv GO and dive into trading on your mobile."],
                            _idProps: {
                                service: idService,
                                uuid: "131"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            style: "display-flex justify-content-center",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "DownloadCenter"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            gridProperties: {
                                classes: "ThemeGrid_Width4"
                            },
                            style: "display-flex flex-direction-column justify-content-center product-container",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "QRCode"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "134"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            extendedProperties: {
                                style: "height: 80px;"
                            },
                            gridProperties: {
                                width: "80px"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.derivgoonelink.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "135"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "136"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 14px; width: 400px;"
                            },
                            text: ["Scan the QR code to download Deriv GO"],
                            _idProps: {
                                service: idService,
                                uuid: "137"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            gridProperties: {
                                classes: "ThemeGrid_Width4 ThemeGrid_MarginGutter"
                            },
                            style: "display-flex flex-direction-column justify-content-center",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "DownloadLinks"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.androidDGoRedirection$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            extendedProperties: {
                                style: "margin-bottom: 10px;"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.googleplay.svg"),
                            style: "cursor-pointer",
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "139"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Image, {
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.iOSDGoRedirection$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.appstore.svg"),
                            style: "cursor-pointer",
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "140"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 10px; text-align: center;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            style: "display-flex justify-content-center",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "Note"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            gridProperties: {
                                classes: "ThemeGrid_Width8"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "142"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-weight: bold;"
                            },
                            text: ["Note: "],
                            _idProps: {
                                service: idService,
                                uuid: "143"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), "Already have Deriv GO? Open the app and trade now."))))), React.createElement(OSWidgets.Popup, {
                            showPopup: model.variables.shouldShowWarningPopupVar,
                            style: "popup-dialog restricted-country-popup-dialog",
                            _idProps: {
                                service: idService,
                                name: "EmptyPlatformModal"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "warning-modal",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "145"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "color: #101213; font-size: 18px; font-weight: bold;"
                            },
                            text: ["Warning"],
                            _idProps: {
                                service: idService,
                                uuid: "146"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin: 16px 0;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "content"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Expression, {
                            extendedProperties: {
                                style: "color: #101213; font-size: 16px;"
                            },
                            value: ((("According to our policy, we do not provide services to residents or entities based in" + " ") + model.variables.clientCountryTextVar) + "."),
                            _idProps: {
                                service: idService,
                                name: "FirstParagraph"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "SecondParagraph"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Expression, {
                            extendedProperties: {
                                style: "color: #101213; font-size: 16px;"
                            },
                            value: (("If you are not a resident of " + model.variables.clientCountryTextVar) + ", you may proceed."),
                            _idProps: {
                                service: idService,
                                name: "paragraph"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex align-items-center gap-s checkbox-container",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "Checkbox"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Checkbox, {
                            _validationProps: {
                                validationService: validationService
                            },
                            enabled: true,
                            style: "checkbox",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, model.variables.isNotResidentVar, function(value) {
                                model.variables.isNotResidentVar = value;
                            }),
                            _idProps: {
                                service: idService,
                                name: "CheckIcon"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Label, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "cursor-pointer",
                            targetWidget: "CheckIcon",
                            _idProps: {
                                service: idService,
                                uuid: "153"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Expression, {
                            extendedProperties: {
                                style: "color: #272B30;"
                            },
                            value: (("I confirm that I am not a resident of " + model.variables.clientCountryTextVar) + "."),
                            _idProps: {
                                service: idService,
                                uuid: "154"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), React.createElement(OSWidgets.Button, {
                            enabled: model.variables.isNotResidentVar,
                            extendedProperties: {
                                style: "margin-top: 16px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            isDefault: false,
                            onClick: function() {
                                var eventHandlerContext = callContext.clone();
                                controller.confirmedNotResidentOnClick$Action(controller.callContext(eventHandlerContext));

                                ;
                            },
                            style: "btn btn-primary",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "155"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 14px;"
                            },
                            text: ["Proceed"],
                            _idProps: {
                                service: idService,
                                uuid: "156"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })))), React.createElement(OSWidgets.Popup, {
                            showPopup: model.variables.openAccountSwitcherModalVar,
                            style: "popup-dialog popup-dialog__mobile",
                            _idProps: {
                                service: idService,
                                name: "AccountSwitcherModal"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $if(model.variables.openAccountSwitcherModalVar, true, this, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "container"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedEvents: {
                                    onClick: function() {
                                        var eventHandlerContext = callContext.clone();
                                        controller.titleContainerMobileOnClick$Action(controller.callContext(eventHandlerContext));

                                        ;
                                    }
                                },
                                extendedProperties: {
                                    style: "border-color: #E9ECEF; border-style: none none solid none; border-width: 0px 0px 2px 0px; height: 52px; padding: 0 16px;"
                                },
                                style: "display-flex align-items-center",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "TitleContainerMobile"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "margin-right: 16px;"
                                },
                                style: "display-flex align-items-center justify-content-center",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "160"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.arrowleft.svg"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "161"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "color: #272B30; font-size: 18px; font-weight: 700;"
                                },
                                text: ["Select account"],
                                _idProps: {
                                    service: idService,
                                    uuid: "162"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "padding: 16px;"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "AccountListContainerMobile"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.List, {
                                animateItems: true,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: /*Default*/ 0,
                                source: model.variables.filteredAccountListVar,
                                style: "list list-group",
                                tag: "div",
                                _idProps: {
                                    service: idService,
                                    name: "AccountList2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    content: new IteratorPlaceholderContent(function(idService, callContext) {
                                        return [React.createElement(OSWidgets.ListItem, {
                                            onClick: function() {
                                                return Promise.resolve().then(function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    return controller.accountListItemOnClick$Action(controller.callContext(eventHandlerContext));
                                                });;
                                            },
                                            style: "list-item",
                                            triggerActionOnFullSwipeLeft: true,
                                            triggerActionOnFullSwipeRight: true,
                                            _idProps: {
                                                service: idService,
                                                name: "ListItem2"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            placeholders: {
                                                leftActions: PlaceholderContent.Empty,
                                                content: new PlaceholderContent(function() {
                                                    return [React.createElement(OSWidgets.Container, {
                                                        align: /*Default*/ 0,
                                                        animate: false,
                                                        style: model.getCachedValue(idService.getId("6lHPxqZkekWMIx7jR8mQ4g.Style"), function() {
                                                            return (((tradershubClientVariables.getActiveLoginId() === model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).loginidAttr)) ? ("account-list-item active-account") : ("account-list-item"));
                                                        }, function() {
                                                            return tradershubClientVariables.getActiveLoginId();
                                                        }, function() {
                                                            return model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).loginidAttr;
                                                        }),
                                                        visible: true,
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "166"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    }, React.createElement(OSWidgets.Container, {
                                                        align: /*Default*/ 0,
                                                        animate: false,
                                                        extendedProperties: {
                                                            style: "border-radius: 100%; height: 24px; overflow: hidden;"
                                                        },
                                                        gridProperties: {
                                                            classes: "OSInline",
                                                            width: "24px"
                                                        },
                                                        style: "display-flex align-items-center justify-content-center",
                                                        visible: true,
                                                        _idProps: {
                                                            service: idService,
                                                            name: "Icon2"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    }, React.createElement(OSWidgets.Image, {
                                                        type: /*External*/ 1,
                                                        url: model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).iconAttr,
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "168"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    })), React.createElement(OSWidgets.Container, {
                                                        align: /*Default*/ 0,
                                                        animate: false,
                                                        gridProperties: {
                                                            marginLeft: "8px"
                                                        },
                                                        style: "display-flex align-items-center",
                                                        visible: true,
                                                        _idProps: {
                                                            service: idService,
                                                            name: "text2"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    }, React.createElement(OSWidgets.Expression, {
                                                        style: "account-list-item__text",
                                                        value: model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).balanceAttr,
                                                        _idProps: {
                                                            service: idService,
                                                            name: "AccountBalance2"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    }), React.createElement(OSWidgets.Expression, {
                                                        gridProperties: {
                                                            marginLeft: "5px"
                                                        },
                                                        style: "account-list-item__text",
                                                        value: model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).currencyAttr,
                                                        _idProps: {
                                                            service: idService,
                                                            name: "AccountCurrency2"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    })))];
                                                }),
                                                rightActions: PlaceholderContent.Empty
                                            },
                                            _dependencies: [asPrimitiveValue(model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).currencyAttr), asPrimitiveValue(model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).balanceAttr), asPrimitiveValue(model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).iconAttr), asPrimitiveValue(model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).loginidAttr), asPrimitiveValue(tradershubClientVariables.getActiveLoginId())]
                                        })];
                                    }, callContext, idService, "3")
                                },
                                _dependencies: [asPrimitiveValue(tradershubClientVariables.getActiveLoginId())]
                            }), React.createElement(OSWidgets.Link, {
                                enabled: true,
                                style: "remove-hover",
                                transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade),
                                url: OS.Navigation.generateScreenURL("tradershub", "AddMoreAccount", {}),
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "172"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "border-color: #DEE2E6; border-style: solid; border-width: 1px 0px 0px 0px; padding: 8px;"
                                },
                                style: "display-flex align-items-center justify-content-space-between",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "AddMoreAccountContainer2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "color: #272B30; font-weight: 700;"
                                },
                                text: ["Add more accounts"],
                                _idProps: {
                                    service: idService,
                                    uuid: "174"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "display-flex align-items-center justify-content-center",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "175"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "176"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }))))))];
                        }, function() {
                            return [];
                        })))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.openAccountSwitcherModalVar), asPrimitiveValue(model.variables.isNotResidentVar), asPrimitiveValue(model.variables.clientCountryTextVar), asPrimitiveValue(model.variables.shouldShowWarningPopupVar), asPrimitiveValue(model.variables.isDerivGoModalVisibleVar), asPrimitiveValue(model.variables.tradingPlatformProductListingResponseVar.shouldShowDerivGoAttr), asPrimitiveValue(model.variables.tradingPlatformProductListingResponseVar.shouldShowSmartTraderAttr), asPrimitiveValue(model.variables.tradingPlatformProductListingResponseVar.shouldShowDBotAttr), asPrimitiveValue(model.variables.tradingPlatformProductListingResponseVar.shouldShowDTraderAttr), asPrimitiveValue(model.variables.selectedAccountCurrencyVar), asPrimitiveValue(model.variables.selectedAccountBalanceVar), asPrimitiveValue(model.variables.isBalanceLoadingVar), asPrimitiveValue(tradershubClientVariables.getActiveLoginId()), asPrimitiveValue(model.variables.filteredAccountListVar), asPrimitiveValue(model.variables.isAccountSwitcherOpenVar), asPrimitiveValue(model.variables.hasRealAccountVar), asPrimitiveValue(tradershubClientVariables.getAuthToken()), asPrimitiveValue(model.variables.accountTypeVar)]
            }));
        }
    }

    return View;
});
define("tradershub.MainFlow.Options.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "SharedUtilities.controller", "RESTAPIWebsocketOfficial.model", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.MainFlow.controller", "tradershub.MainFlow.Options.mvc$controller.BotRedirection.GenerateRedirectURLJS", "tradershub.MainFlow.Options.mvc$controller.SetDemoValue.GenerateDemoAccountTokenJS", "tradershub.MainFlow.Options.mvc$controller.SmarttraderRedirection.GenerateRedirectURLJS", "tradershub.MainFlow.Options.mvc$controller.DTraderRedirection.GenerateRedirectURLJS", "tradershub.MainFlow.Options.mvc$controller.FilterAccountListAction.FilterAccountListJS", "tradershub.model$ST_dda3674fb618c7350645a460f303a303Structure", "tradershub.model$RL_5efabb620fce6e69244e61944ef4417d", "tradershub.model$ST_43e221b4a9439e2ea71501e5244dde34Structure", "SharedUtilities.controller$GetPlatformFromURL", "tradershub.referencesHealth", "tradershub.referencesHealth$SharedUtilities", "SharedUtilities.controller$GetURL", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure", "tradershub.controller$SendAuthorize", "SharedUtilities.controller$FormatMoney", "tradershub.controller$TradingPlatformProductListing", "tradershub.controller$GetWebsiteStatus", "RESTAPIWebsocketOfficial.model$ST_bf5d4ab423fae3ff38a977653adc8398Structure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.model$RL_071a5687136a6dbeecb0a0d193c188a2", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure", "tradershub.controller$FeatureFlagValueByName", "tradershub.model$ST_52667a49e65b5175f66dacecb12f345fStructure", "tradershub.controller$GetAccountByLoginId", "tradershub.controller$TopupVirtualAccount", "tradershub.model$EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecord", "tradershub.model$RL_7f0ff0d0a70a4e41424efbf5ef899b8d", "tradershub.controller$GetAllAccountsBalance", "tradershub.controller$GetCurrencyIcon"], function(OSRuntimeCore, tradershubModel, tradershubController, SharedUtilitiesController, RESTAPIWebsocketOfficialModel, tradershubLanguageResources, tradershubClientVariables, tradershub_MainFlowController, tradershub_MainFlow_Options_mvc_controller_BotRedirection_GenerateRedirectURLJS, tradershub_MainFlow_Options_mvc_controller_SetDemoValue_GenerateDemoAccountTokenJS, tradershub_MainFlow_Options_mvc_controller_SmarttraderRedirection_GenerateRedirectURLJS, tradershub_MainFlow_Options_mvc_controller_DTraderRedirection_GenerateRedirectURLJS, tradershub_MainFlow_Options_mvc_controller_FilterAccountListAction_FilterAccountListJS) {
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
            get currenciesList$ServerAction() {
                if (!(this.hasOwnProperty("_currenciesList$ServerAction"))) {
                    this._currenciesList$ServerAction = function(callContext) {
                        var controller = this.controller;
                        return OS.Logger.startActiveSpan("CurrenciesList", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "CurrenciesList");
                                span.setAttribute("outsystems.function.key", "f15c4591-9739-418f-bc8d-14d275e849d1");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
                            }

                            return OS.Flow.tryFinally(function() {
                                return controller.callServerAction("CurrenciesList", "screenservices/tradershub/MainFlow/Options/ActionCurrenciesList", "mfqCJ8dyBBlp7VBala4nSQ", {}, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("tradershub.MainFlow.Options$ActionCurrenciesList"))();
                                    executeServerActionResult.currenciesListOut = OS.DataConversion.ServerDataConverter.from(outputs.CurrenciesList, tradershubModel.RL_7f0ff0d0a70a4e41424efbf5ef899b8d);
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

                return this._currenciesList$ServerAction;
            }
            set currenciesList$ServerAction(value) {
                this._currenciesList$ServerAction = value;
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
            get _botRedirection$Action() {
                if (!(this.hasOwnProperty("__botRedirection$Action"))) {
                    this.__botRedirection$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("BotRedirection", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "BotRedirection");
                                span.setAttribute("outsystems.function.key", "1de9b0e4-a8a4-4569-bb42-e8965f6c3559");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("BotRedirection");
                                callContext = controller.callContext(callContext);
                                var getPlatformFromURLVar = new OS.DataTypes.VariableHolder();
                                var getURLVar = new OS.DataTypes.VariableHolder();
                                var generateRedirectURLJSResult = new OS.DataTypes.VariableHolder();
                                // Execute Action: GetPlatformFromURL
                                getPlatformFromURLVar.value = SharedUtilitiesController.default.getPlatformFromURL$Action("", callContext);

                                // Execute Action: GetURL
                                getURLVar.value = SharedUtilitiesController.default.getURL$Action(callContext);

                                generateRedirectURLJSResult.value = OS.Logger.startActiveSpan("GenerateRedirectURL", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "GenerateRedirectURL");
                                        span.setAttribute("outsystems.function.key", "0b4ff3b1-bf3e-4954-8862-feb5da9a63b5");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_MainFlow_Options_mvc_controller_BotRedirection_GenerateRedirectURLJS, "GenerateRedirectURL", "BotRedirection", {
                                            BotStaging: OS.DataConversion.JSNodeParamConverter.to(getURLVar.value.binaryBotStagingOut, OS.DataTypes.DataTypes.Text),
                                            IsStaging: OS.DataConversion.JSNodeParamConverter.to(getPlatformFromURLVar.value.isStagingOut, OS.DataTypes.DataTypes.Boolean),
                                            BotProduction: OS.DataConversion.JSNodeParamConverter.to(getURLVar.value.binaryBotProductionOut, OS.DataTypes.DataTypes.Text),
                                            BotURL: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.MainFlow.Options.BotRedirection$generateRedirectURLJSResult"))();
                                            jsNodeResult.botURLOut = OS.DataConversion.JSNodeParamConverter.from($parameters.BotURL, OS.DataTypes.DataTypes.Text);
                                            return jsNodeResult;
                                        }, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // Destination: /tradershub/
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(generateRedirectURLJSResult.value.botURLOut, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__botRedirection$Action;
            }
            set _botRedirection$Action(value) {
                this.__botRedirection$Action = value;
            }

            get _setDemoValue$Action() {
                if (!(this.hasOwnProperty("__setDemoValue$Action"))) {
                    this.__setDemoValue$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SetDemoValue", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SetDemoValue");
                                span.setAttribute("outsystems.function.key", "6d23b402-d193-433a-92ee-91b0fe0415cb");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("SetDemoValue");
                                callContext = controller.callContext(callContext);
                                var sendAuthorizeVar = new OS.DataTypes.VariableHolder();
                                var formatMoneyVar = new OS.DataTypes.VariableHolder();
                                var generateDemoAccountTokenJSResult = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // AccountType = "demo"
                                    model.variables.accountTypeVar = "demo";
                                    generateDemoAccountTokenJSResult.value = OS.Logger.startActiveSpan("GenerateDemoAccountToken", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "GenerateDemoAccountToken");
                                            span.setAttribute("outsystems.function.key", "9ede4f3f-ba3a-4921-b749-af69f8b99121");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(tradershub_MainFlow_Options_mvc_controller_SetDemoValue_GenerateDemoAccountTokenJS, "GenerateDemoAccountToken", "SetDemoValue", {
                                                Token: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {
                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.MainFlow.Options.SetDemoValue$generateDemoAccountTokenJSResult"))();
                                                jsNodeResult.tokenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Token, OS.DataTypes.DataTypes.Text);
                                                return jsNodeResult;
                                            }, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                    // AuthToken = GenerateDemoAccountToken.Token
                                    tradershubClientVariables.setAuthToken(generateDemoAccountTokenJSResult.value.tokenOut);
                                    // IsBalanceLoading = True
                                    model.variables.isBalanceLoadingVar = true;
                                    // Execute Action: SendAuthorize
                                    model.flush();
                                    return tradershubController.default.sendAuthorize$Action(false, callContext).then(function(value) {
                                        sendAuthorizeVar.value = value;
                                    }).then(function() {
                                        // Execute Action: FormatMoney
                                        formatMoneyVar.value = SharedUtilitiesController.default.formatMoney$Action(sendAuthorizeVar.value.responseOut.authorizeAttr.balanceAttr, sendAuthorizeVar.value.responseOut.authorizeAttr.currencyAttr, "en-US", "", callContext);

                                        // SelectedAccountCurrency = SendAuthorize.Response.Authorize.Currency
                                        model.variables.selectedAccountCurrencyVar = sendAuthorizeVar.value.responseOut.authorizeAttr.currencyAttr;
                                        // SelectedAccountBalance = FormatMoney.FormattedNumber
                                        model.variables.selectedAccountBalanceVar = formatMoneyVar.value.formattedNumberOut;
                                        // IsBalanceLoading = False
                                        model.variables.isBalanceLoadingVar = false;
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

                return this.__setDemoValue$Action;
            }
            set _setDemoValue$Action(value) {
                this.__setDemoValue$Action = value;
            }

            get _androidDGoRedirection$Action() {
                if (!(this.hasOwnProperty("__androidDGoRedirection$Action"))) {
                    this.__androidDGoRedirection$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("AndroidDGoRedirection", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AndroidDGoRedirection");
                                span.setAttribute("outsystems.function.key", "79e5f91a-6c9a-402a-8928-277a43d4ff43");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("AndroidDGoRedirection");
                                callContext = controller.callContext(callContext);
                                // Destination: /tradershub/
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://play.google.com/store/apps/details?id=com.deriv.app", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__androidDGoRedirection$Action;
            }
            set _androidDGoRedirection$Action(value) {
                this.__androidDGoRedirection$Action = value;
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
                                span.setAttribute("outsystems.function.key", "7afdb3bf-4125-4448-a985-c79d43a16650");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var tradingPlatformProductListingIDVar = new OS.DataTypes.VariableHolder();
                                var currentClientCountryVar = new OS.DataTypes.VariableHolder();
                                var tradingPlatformProductListingVar = new OS.DataTypes.VariableHolder();
                                var jSONDeserializeResidenceListResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_63a473e932ef99f5271718b62399e682Structure))());
                                return OS.Flow.executeAsyncFlow(function() {
                                    // IsLoading = True
                                    model.variables.isLoadingVar = true;
                                    // IsBalanceLoading = True
                                    model.variables.isBalanceLoadingVar = true;
                                    // TempClientCountry = ""
                                    tradershubClientVariables.setTempClientCountry("");
                                    // Execute Action: GetWebsiteStatus
                                    model.flush();
                                    return tradershubController.default.getWebsiteStatus$Action(callContext).then(function() {
                                        // JSON Deserialize: JSONDeserializeResidenceListResponse
                                        jSONDeserializeResidenceListResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(tradershubClientVariables.getRawResidenceListResponse(), RESTAPIWebsocketOfficialModel.ST_63a473e932ef99f5271718b62399e682Structure, false);
                                        // Execute Action: currentClientCountry
                                        currentClientCountryVar.value = OS.SystemActions.listFilter(jSONDeserializeResidenceListResponseVar.value.dataOut.residence_listAttr, function(p) {
                                            return (tradershubClientVariables.getClientCountry() === p.valueAttr);
                                        }, callContext);

                                    }).then(function() {
                                        // HasToken
                                        return OS.Flow.executeSequence(function() {
                                            if ((((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
                                                // Execute Action: FilterAccountListAction
                                                return controller._filterAccountListAction$Action(callContext);
                                            }

                                        });
                                    }).then(function() {
                                        // Execute Action: TradingPlatformProductListing
                                        model.flush();
                                        return tradershubController.default.tradingPlatformProductListing$Action(callContext).then(function(value) {
                                            tradingPlatformProductListingVar.value = value;
                                        });
                                    }).then(function() {
                                        // IsTradingAllowed
                                        return OS.Flow.executeSequence(function() {
                                            if ((tradingPlatformProductListingVar.value.responseOut.isTradingAllowedAttr)) {
                                                // TradingPlatformProductListingResponse = TradingPlatformProductListing.Response
                                                model.variables.tradingPlatformProductListingResponseVar = tradingPlatformProductListingVar.value.responseOut;
                                            } else {
                                                if ((!(tradershubClientVariables.getconfirmedNotResident()))) {
                                                    // ShouldShowWarningPopup = True
                                                    model.variables.shouldShowWarningPopupVar = true;
                                                }

                                                // TempClientCountry = "id"
                                                tradershubClientVariables.setTempClientCountry("id");
                                                // Execute Action: TradingPlatformProductListingID
                                                model.flush();
                                                return tradershubController.default.tradingPlatformProductListing$Action(callContext).then(function(value) {
                                                    tradingPlatformProductListingIDVar.value = value;
                                                }).then(function() {
                                                    // TradingPlatformProductListingResponse = TradingPlatformProductListingID.Response
                                                    model.variables.tradingPlatformProductListingResponseVar = tradingPlatformProductListingIDVar.value.responseOut;
                                                });
                                            }

                                        });
                                    }).then(function() {
                                        // IsLoading = False
                                        model.variables.isLoadingVar = false;
                                        // IsBalanceLoading = False
                                        model.variables.isBalanceLoadingVar = false;
                                        // ClientCountryText = currentClientCountry.FilteredList.Current.Text
                                        model.variables.clientCountryTextVar = currentClientCountryVar.value.filteredListOut.getCurrent(callContext.iterationContext).textAttr;
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

            get _titleContainerMobileOnClick$Action() {
                if (!(this.hasOwnProperty("__titleContainerMobileOnClick$Action"))) {
                    this.__titleContainerMobileOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("TitleContainerMobileOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "TitleContainerMobileOnClick");
                                span.setAttribute("outsystems.function.key", "914be576-b183-4eb7-9117-3dd64799a0e9");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("TitleContainerMobileOnClick");
                                callContext = controller.callContext(callContext);
                                // OpenAccountSwitcherModal = False
                                model.variables.openAccountSwitcherModalVar = false;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__titleContainerMobileOnClick$Action;
            }
            set _titleContainerMobileOnClick$Action(value) {
                this.__titleContainerMobileOnClick$Action = value;
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
                                span.setAttribute("outsystems.function.key", "b762faea-95cc-488e-b6cd-93dedfe33962");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                var featureFlagValueByNameVar = new OS.DataTypes.VariableHolder();
                                // Execute Action: FeatureFlagValueByName
                                featureFlagValueByNameVar.value = tradershubController.default.featureFlagValueByName$Action("Options", callContext);

                                if ((featureFlagValueByNameVar.value.isEnabledOut)) {
                                    // IsAccountSwitcherOpen = False
                                    model.variables.isAccountSwitcherOpenVar = false;
                                    // OpenAccountSwitcherModal = False
                                    model.variables.openAccountSwitcherModalVar = false;
                                } else {
                                    // Destination: /tradershub/
                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://app.deriv.com", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
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

            get _setRealValue$Action() {
                if (!(this.hasOwnProperty("__setRealValue$Action"))) {
                    this.__setRealValue$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SetRealValue", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SetRealValue");
                                span.setAttribute("outsystems.function.key", "b8147e75-d97a-4bc7-b4e3-ae175ee9f3a0");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("SetRealValue");
                                callContext = controller.callContext(callContext);
                                var getTokenByLoginIdVar = new OS.DataTypes.VariableHolder();
                                var formatMoneyVar = new OS.DataTypes.VariableHolder();
                                var sendAuthorizeVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    return OS.Flow.executeSequence(function() {
                                        if ((model.variables.hasRealAccountVar)) {
                                            // AccountType = "real"
                                            model.variables.accountTypeVar = "real";
                                            // Execute Action: GetTokenByLoginId
                                            getTokenByLoginIdVar.value = tradershubController.default.getAccountByLoginId$Action(tradershubClientVariables.getActiveLoginId(), callContext);

                                            // AuthToken = GetTokenByLoginId.Token
                                            tradershubClientVariables.setAuthToken(getTokenByLoginIdVar.value.tokenOut);
                                            // IsBalanceLoading = True
                                            model.variables.isBalanceLoadingVar = true;
                                            // Execute Action: SendAuthorize
                                            model.flush();
                                            return tradershubController.default.sendAuthorize$Action(false, callContext).then(function(value) {
                                                sendAuthorizeVar.value = value;
                                            }).then(function() {
                                                // Execute Action: FormatMoney
                                                formatMoneyVar.value = SharedUtilitiesController.default.formatMoney$Action(sendAuthorizeVar.value.responseOut.authorizeAttr.balanceAttr, sendAuthorizeVar.value.responseOut.authorizeAttr.currencyAttr, "en-US", "", callContext);

                                                // SelectedAccountCurrency = SendAuthorize.Response.Authorize.Currency
                                                model.variables.selectedAccountCurrencyVar = sendAuthorizeVar.value.responseOut.authorizeAttr.currencyAttr;
                                                // SelectedAccountBalance = FormatMoney.FormattedNumber
                                                model.variables.selectedAccountBalanceVar = formatMoneyVar.value.formattedNumberOut;
                                                // IsBalanceLoading = False
                                                model.variables.isBalanceLoadingVar = false;
                                            });
                                        } else {
                                            // InitializeRealSignup = True
                                            tradershubClientVariables.setInitializeRealSignup(true);
                                            // Destination: /tradershub/CurrencySelection
                                            return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "currency-selection", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
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

                return this.__setRealValue$Action;
            }
            set _setRealValue$Action(value) {
                this.__setRealValue$Action = value;
            }

            get _toggleDerivGoModal$Action() {
                if (!(this.hasOwnProperty("__toggleDerivGoModal$Action"))) {
                    this.__toggleDerivGoModal$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ToggleDerivGoModal", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ToggleDerivGoModal");
                                span.setAttribute("outsystems.function.key", "c5b4eb28-605c-46d0-ac5f-cad5bd5f50e8");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("ToggleDerivGoModal");
                                callContext = controller.callContext(callContext);
                                if ((model.variables.isDerivGoModalVisibleVar)) {
                                    // IsDerivGoModalVisible = False
                                    model.variables.isDerivGoModalVisibleVar = false;
                                } else {
                                    // OpenModal
                                    // IsDerivGoModalVisible = True
                                    model.variables.isDerivGoModalVisibleVar = true;
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__toggleDerivGoModal$Action;
            }
            set _toggleDerivGoModal$Action(value) {
                this.__toggleDerivGoModal$Action = value;
            }

            get _smarttraderRedirection$Action() {
                if (!(this.hasOwnProperty("__smarttraderRedirection$Action"))) {
                    this.__smarttraderRedirection$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SmarttraderRedirection", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SmarttraderRedirection");
                                span.setAttribute("outsystems.function.key", "c6b3987a-000b-4194-931b-a693602e19fc");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SmarttraderRedirection");
                                callContext = controller.callContext(callContext);
                                var getURLVar = new OS.DataTypes.VariableHolder();
                                var getPlatformFromURLVar = new OS.DataTypes.VariableHolder();
                                var generateRedirectURLJSResult = new OS.DataTypes.VariableHolder();
                                // Execute Action: GetPlatformFromURL
                                getPlatformFromURLVar.value = SharedUtilitiesController.default.getPlatformFromURL$Action("", callContext);

                                // Execute Action: GetURL
                                getURLVar.value = SharedUtilitiesController.default.getURL$Action(callContext);

                                generateRedirectURLJSResult.value = OS.Logger.startActiveSpan("GenerateRedirectURL", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "GenerateRedirectURL");
                                        span.setAttribute("outsystems.function.key", "a6a19897-89cd-4d4c-8c86-58b20f617e2d");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_MainFlow_Options_mvc_controller_SmarttraderRedirection_GenerateRedirectURLJS, "GenerateRedirectURL", "SmarttraderRedirection", {
                                            IsStaging: OS.DataConversion.JSNodeParamConverter.to(getPlatformFromURLVar.value.isStagingOut, OS.DataTypes.DataTypes.Boolean),
                                            Language: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getLang(), OS.DataTypes.DataTypes.Text),
                                            SmartTraderStaging: OS.DataConversion.JSNodeParamConverter.to(getURLVar.value.smartTraderStagingOut, OS.DataTypes.DataTypes.Text),
                                            SmartTraderProduction: OS.DataConversion.JSNodeParamConverter.to(getURLVar.value.smartTraderProductionOut, OS.DataTypes.DataTypes.Text),
                                            SmartTraderURL: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.MainFlow.Options.SmarttraderRedirection$generateRedirectURLJSResult"))();
                                            jsNodeResult.smartTraderURLOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SmartTraderURL, OS.DataTypes.DataTypes.Text);
                                            return jsNodeResult;
                                        }, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // Destination: /tradershub/
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(generateRedirectURLJSResult.value.smartTraderURLOut, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__smarttraderRedirection$Action;
            }
            set _smarttraderRedirection$Action(value) {
                this.__smarttraderRedirection$Action = value;
            }

            get _dTraderRedirection$Action() {
                if (!(this.hasOwnProperty("__dTraderRedirection$Action"))) {
                    this.__dTraderRedirection$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("DTraderRedirection", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "DTraderRedirection");
                                span.setAttribute("outsystems.function.key", "c7004687-ecb0-439f-882d-5e8665d0b80a");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("DTraderRedirection");
                                callContext = controller.callContext(callContext);
                                var getURLVar = new OS.DataTypes.VariableHolder();
                                var getPlatformFromURLVar = new OS.DataTypes.VariableHolder();
                                var generateRedirectURLJSResult = new OS.DataTypes.VariableHolder();
                                // Execute Action: GetPlatformFromURL
                                getPlatformFromURLVar.value = SharedUtilitiesController.default.getPlatformFromURL$Action("", callContext);

                                // Execute Action: GetURL
                                getURLVar.value = SharedUtilitiesController.default.getURL$Action(callContext);

                                generateRedirectURLJSResult.value = OS.Logger.startActiveSpan("GenerateRedirectURL", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "GenerateRedirectURL");
                                        span.setAttribute("outsystems.function.key", "e7a5bc8a-073b-4f06-97be-53ddb87bd860");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_MainFlow_Options_mvc_controller_DTraderRedirection_GenerateRedirectURLJS, "GenerateRedirectURL", "DTraderRedirection", {
                                            IsStaging: OS.DataConversion.JSNodeParamConverter.to(getPlatformFromURLVar.value.isStagingOut, OS.DataTypes.DataTypes.Boolean),
                                            DerivAppProduction: OS.DataConversion.JSNodeParamConverter.to(getURLVar.value.derivAppProductionOut, OS.DataTypes.DataTypes.Text),
                                            DerivAppStaging: OS.DataConversion.JSNodeParamConverter.to(getURLVar.value.derivAppStagingOut, OS.DataTypes.DataTypes.Text),
                                            DTraderURL: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.MainFlow.Options.DTraderRedirection$generateRedirectURLJSResult"))();
                                            jsNodeResult.dTraderURLOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DTraderURL, OS.DataTypes.DataTypes.Text);
                                            return jsNodeResult;
                                        }, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // Destination: /tradershub/
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(generateRedirectURLJSResult.value.dTraderURLOut, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__dTraderRedirection$Action;
            }
            set _dTraderRedirection$Action(value) {
                this.__dTraderRedirection$Action = value;
            }

            get _iOSDGoRedirection$Action() {
                if (!(this.hasOwnProperty("__iOSDGoRedirection$Action"))) {
                    this.__iOSDGoRedirection$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("IOSDGoRedirection", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "IOSDGoRedirection");
                                span.setAttribute("outsystems.function.key", "cef242ee-2c2a-4c36-a247-3143e7d2120d");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("IOSDGoRedirection");
                                callContext = controller.callContext(callContext);
                                // Destination: /tradershub/
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://apps.apple.com/my/app/deriv-go-online-trading-app/id1550561298", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__iOSDGoRedirection$Action;
            }
            set _iOSDGoRedirection$Action(value) {
                this.__iOSDGoRedirection$Action = value;
            }

            get _mobileAccountSwitcherOnClick$Action() {
                if (!(this.hasOwnProperty("__mobileAccountSwitcherOnClick$Action"))) {
                    this.__mobileAccountSwitcherOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("MobileAccountSwitcherOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "MobileAccountSwitcherOnClick");
                                span.setAttribute("outsystems.function.key", "d1da44cc-b8ee-42c7-9e9b-9a28108531a6");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("MobileAccountSwitcherOnClick");
                                callContext = controller.callContext(callContext);
                                // OpenAccountSwitcherModal = notIsAccountSwitcherOpen
                                model.variables.openAccountSwitcherModalVar = !(model.variables.isAccountSwitcherOpenVar);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__mobileAccountSwitcherOnClick$Action;
            }
            set _mobileAccountSwitcherOnClick$Action(value) {
                this.__mobileAccountSwitcherOnClick$Action = value;
            }

            get _accountListItemOnClick$Action() {
                if (!(this.hasOwnProperty("__accountListItemOnClick$Action"))) {
                    this.__accountListItemOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("AccountListItemOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AccountListItemOnClick");
                                span.setAttribute("outsystems.function.key", "df02d2d7-eabb-4d17-b734-90a01240b10c");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("AccountListItemOnClick");
                                callContext = controller.callContext(callContext);
                                var sendAuthorizeVar = new OS.DataTypes.VariableHolder();
                                var formatMoneyVar = new OS.DataTypes.VariableHolder();
                                var getTokenByLoginIdVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    return OS.Flow.executeSequence(function() {
                                        if (((((tradershubClientVariables.getActiveLoginId() === model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).loginidAttr)) ? (false) : (true)))) {
                                            // IsAccountSwitcherOpen = False
                                            model.variables.isAccountSwitcherOpenVar = false;
                                            // OpenAccountSwitcherModal = False
                                            model.variables.openAccountSwitcherModalVar = false;
                                            // Execute Action: GetTokenByLoginId
                                            getTokenByLoginIdVar.value = tradershubController.default.getAccountByLoginId$Action(model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).loginidAttr, callContext);

                                            // AuthToken = GetTokenByLoginId.Token
                                            tradershubClientVariables.setAuthToken(getTokenByLoginIdVar.value.tokenOut);
                                            // Execute Action: SendAuthorize
                                            model.flush();
                                            return tradershubController.default.sendAuthorize$Action(false, callContext).then(function(value) {
                                                sendAuthorizeVar.value = value;
                                            }).then(function() {
                                                // IsBalanceLoading = True
                                                model.variables.isBalanceLoadingVar = true;
                                            }).then(function() {
                                                if ((sendAuthorizeVar.value.isErrorOut)) {
                                                    // IsBalanceLoading = False
                                                    model.variables.isBalanceLoadingVar = false;
                                                } else {
                                                    // Execute Action: FormatMoney
                                                    formatMoneyVar.value = SharedUtilitiesController.default.formatMoney$Action(sendAuthorizeVar.value.responseOut.authorizeAttr.balanceAttr, sendAuthorizeVar.value.responseOut.authorizeAttr.currencyAttr, "en-US", "", callContext);

                                                    // SelectedAccountCurrency = SendAuthorize.Response.Authorize.Currency
                                                    model.variables.selectedAccountCurrencyVar = sendAuthorizeVar.value.responseOut.authorizeAttr.currencyAttr;
                                                    // SelectedAccountBalance = FormatMoney.FormattedNumber
                                                    model.variables.selectedAccountBalanceVar = formatMoneyVar.value.formattedNumberOut;
                                                    // ActiveLoginId = FilteredAccountList.Current.Loginid
                                                    tradershubClientVariables.setActiveLoginId(model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).loginidAttr);
                                                    // IsBalanceLoading = False
                                                    model.variables.isBalanceLoadingVar = false;
                                                }

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

                return this.__accountListItemOnClick$Action;
            }
            set _accountListItemOnClick$Action(value) {
                this.__accountListItemOnClick$Action = value;
            }

            get _openAccountSwitcherOnClick$Action() {
                if (!(this.hasOwnProperty("__openAccountSwitcherOnClick$Action"))) {
                    this.__openAccountSwitcherOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OpenAccountSwitcherOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OpenAccountSwitcherOnClick");
                                span.setAttribute("outsystems.function.key", "e39b3dc6-6a25-4cab-88f7-0d9c911c931a");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OpenAccountSwitcherOnClick");
                                callContext = controller.callContext(callContext);
                                // IsAccountSwitcherOpen = notIsAccountSwitcherOpen
                                model.variables.isAccountSwitcherOpenVar = !(model.variables.isAccountSwitcherOpenVar);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__openAccountSwitcherOnClick$Action;
            }
            set _openAccountSwitcherOnClick$Action(value) {
                this.__openAccountSwitcherOnClick$Action = value;
            }

            get _topupDemoAccount$Action() {
                if (!(this.hasOwnProperty("__topupDemoAccount$Action"))) {
                    this.__topupDemoAccount$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("TopupDemoAccount", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "TopupDemoAccount");
                                span.setAttribute("outsystems.function.key", "e522a808-6967-48f8-8027-bea735f76085");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("TopupDemoAccount");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: TopupVirtualAccount
                                    model.flush();
                                    return tradershubController.default.topupVirtualAccount$Action(callContext).then(function() {
                                        OS.FeedbackMessageService.showFeedbackMessage("You\'ve reset your demo account balance to USD 10,000.", /*Success*/ 1);
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

                return this.__topupDemoAccount$Action;
            }
            set _topupDemoAccount$Action(value) {
                this.__topupDemoAccount$Action = value;
            }

            get _filterAccountListAction$Action() {
                if (!(this.hasOwnProperty("__filterAccountListAction$Action"))) {
                    this.__filterAccountListAction$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("FilterAccountListAction", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "FilterAccountListAction");
                                span.setAttribute("outsystems.function.key", "e7aa87d1-d38e-4107-800f-a9b9daabb919");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("FilterAccountListAction");
                                callContext = controller.callContext(callContext);
                                var currenciesListVar = new OS.DataTypes.VariableHolder();
                                var formatMoneyVar = new OS.DataTypes.VariableHolder();
                                var getAllAccountsBalanceVar = new OS.DataTypes.VariableHolder();
                                var sendAuthorizeVar = new OS.DataTypes.VariableHolder();
                                var filterAccountListJSResult = new OS.DataTypes.VariableHolder();
                                var jSONSerializeCurrenciesListVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONSerializeAuthorizeVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONDeserializeFilteredAccountListListVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_5efabb620fce6e69244e61944ef4417d))());
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: SendAuthorize
                                    model.flush();
                                    return tradershubController.default.sendAuthorize$Action(false, callContext).then(function(value) {
                                        sendAuthorizeVar.value = value;
                                    }).then(function() {
                                        // Execute Action: FormatMoney
                                        formatMoneyVar.value = SharedUtilitiesController.default.formatMoney$Action(sendAuthorizeVar.value.responseOut.authorizeAttr.balanceAttr, sendAuthorizeVar.value.responseOut.authorizeAttr.currencyAttr, "en-US", "", callContext);

                                        // SelectedAccountCurrency = SendAuthorize.Response.Authorize.Currency
                                        model.variables.selectedAccountCurrencyVar = sendAuthorizeVar.value.responseOut.authorizeAttr.currencyAttr;
                                        // SelectedAccountBalance = FormatMoney.FormattedNumber
                                        model.variables.selectedAccountBalanceVar = formatMoneyVar.value.formattedNumberOut;
                                        // JSON Serialize: JSONSerializeAuthorize
                                        jSONSerializeAuthorizeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(sendAuthorizeVar.value.responseOut, true, false);
                                        // Execute Action: GetAllAccountsBalance
                                        model.flush();
                                        return tradershubController.default.getAllAccountsBalance$Action(callContext).then(function(value) {
                                            getAllAccountsBalanceVar.value = value;
                                        });
                                    }).then(function() {
                                        // Execute Action: CurrenciesList
                                        model.flush();
                                        return controller.currenciesList$ServerAction(callContext).then(function(value) {
                                            currenciesListVar.value = value;
                                        });
                                    }).then(function() {
                                        // JSON Serialize: JSONSerializeCurrenciesList
                                        jSONSerializeCurrenciesListVar.value.jSONOut = OS.JSONUtils.serializeToJSON(currenciesListVar.value.currenciesListOut, false, false);
                                        filterAccountListJSResult.value = OS.Logger.startActiveSpan("FilterAccountList", function(span) {
                                            if (span) {
                                                span.setAttribute("code.function", "FilterAccountList");
                                                span.setAttribute("outsystems.function.key", "ce6b6c20-1c58-4401-979c-504cab78b6c0");
                                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                            }

                                            try {
                                                return controller.safeExecuteJSNode(tradershub_MainFlow_Options_mvc_controller_FilterAccountListAction_FilterAccountListJS, "FilterAccountList", "FilterAccountListAction", {
                                                    CurrenciesList: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeCurrenciesListVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                    AllAccountsBalance: OS.DataConversion.JSNodeParamConverter.to(getAllAccountsBalanceVar.value.responseOut, OS.DataTypes.DataTypes.Text),
                                                    AuthorizeResponse: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeAuthorizeVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                    modifiedAccountList: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                                    HasRealAccount: OS.DataConversion.JSNodeParamConverter.to(true, OS.DataTypes.DataTypes.Boolean)
                                                }, function($parameters) {
                                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.MainFlow.Options.FilterAccountListAction$filterAccountListJSResult"))();
                                                    jsNodeResult.modifiedAccountListOut = OS.DataConversion.JSNodeParamConverter.from($parameters.modifiedAccountList, OS.DataTypes.DataTypes.Text);
                                                    jsNodeResult.hasRealAccountOut = OS.DataConversion.JSNodeParamConverter.from($parameters.HasRealAccount, OS.DataTypes.DataTypes.Boolean);
                                                    return jsNodeResult;
                                                }, {
                                                    GetCurrencyIcon: tradershubController.default.clientActionProxies.getCurrencyIcon$Action,
                                                    FormatMoney: SharedUtilitiesController.default.clientActionProxies.formatMoney$Action
                                                }, {});
                                            } finally {
                                                if (span) {
                                                    span.end();
                                                }

                                            }

                                        }, 1);
                                        // JSON Deserialize: JSONDeserializeFilteredAccountListList
                                        jSONDeserializeFilteredAccountListListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(filterAccountListJSResult.value.modifiedAccountListOut, tradershubModel.RL_5efabb620fce6e69244e61944ef4417d, false);
                                        // FilteredAccountList = JSONDeserializeFilteredAccountListList.Data
                                        model.variables.filteredAccountListVar = jSONDeserializeFilteredAccountListListVar.value.dataOut;
                                        // HasRealAccount = FilterAccountList.HasRealAccount
                                        model.variables.hasRealAccountVar = filterAccountListJSResult.value.hasRealAccountOut;
                                        // AccountType = If
                                        model.variables.accountTypeVar = ((filterAccountListJSResult.value.hasRealAccountOut) ? ("real") : ("demo"));
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

                return this.__filterAccountListAction$Action;
            }
            set _filterAccountListAction$Action(value) {
                this.__filterAccountListAction$Action = value;
            }

            get _confirmedNotResidentOnClick$Action() {
                if (!(this.hasOwnProperty("__confirmedNotResidentOnClick$Action"))) {
                    this.__confirmedNotResidentOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("confirmedNotResidentOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "confirmedNotResidentOnClick");
                                span.setAttribute("outsystems.function.key", "fae9c095-fd91-4443-82bc-66e2f1ffcae4");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("confirmedNotResidentOnClick");
                                callContext = controller.callContext(callContext);
                                // confirmedNotResident = True
                                tradershubClientVariables.setconfirmedNotResident(true);
                                // ShouldShowWarningPopup = False
                                model.variables.shouldShowWarningPopupVar = false;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__confirmedNotResidentOnClick$Action;
            }
            set _confirmedNotResidentOnClick$Action(value) {
                this.__confirmedNotResidentOnClick$Action = value;
            }


            botRedirection$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("BotRedirection__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "BotRedirection");
                        span.setAttribute("outsystems.function.key", "1de9b0e4-a8a4-4569-bb42-e8965f6c3559");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._botRedirection$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            setDemoValue$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SetDemoValue__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SetDemoValue");
                        span.setAttribute("outsystems.function.key", "6d23b402-d193-433a-92ee-91b0fe0415cb");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._setDemoValue$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            androidDGoRedirection$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("AndroidDGoRedirection__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "AndroidDGoRedirection");
                        span.setAttribute("outsystems.function.key", "79e5f91a-6c9a-402a-8928-277a43d4ff43");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._androidDGoRedirection$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "7afdb3bf-4125-4448-a985-c79d43a16650");
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

            titleContainerMobileOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("TitleContainerMobileOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "TitleContainerMobileOnClick");
                        span.setAttribute("outsystems.function.key", "914be576-b183-4eb7-9117-3dd64799a0e9");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._titleContainerMobileOnClick$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "b762faea-95cc-488e-b6cd-93dedfe33962");
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

            setRealValue$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SetRealValue__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SetRealValue");
                        span.setAttribute("outsystems.function.key", "b8147e75-d97a-4bc7-b4e3-ae175ee9f3a0");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._setRealValue$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            toggleDerivGoModal$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ToggleDerivGoModal__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ToggleDerivGoModal");
                        span.setAttribute("outsystems.function.key", "c5b4eb28-605c-46d0-ac5f-cad5bd5f50e8");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._toggleDerivGoModal$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            smarttraderRedirection$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SmarttraderRedirection__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SmarttraderRedirection");
                        span.setAttribute("outsystems.function.key", "c6b3987a-000b-4194-931b-a693602e19fc");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._smarttraderRedirection$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            dTraderRedirection$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("DTraderRedirection__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "DTraderRedirection");
                        span.setAttribute("outsystems.function.key", "c7004687-ecb0-439f-882d-5e8665d0b80a");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._dTraderRedirection$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            iOSDGoRedirection$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("IOSDGoRedirection__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "IOSDGoRedirection");
                        span.setAttribute("outsystems.function.key", "cef242ee-2c2a-4c36-a247-3143e7d2120d");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._iOSDGoRedirection$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            mobileAccountSwitcherOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("MobileAccountSwitcherOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "MobileAccountSwitcherOnClick");
                        span.setAttribute("outsystems.function.key", "d1da44cc-b8ee-42c7-9e9b-9a28108531a6");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._mobileAccountSwitcherOnClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            accountListItemOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("AccountListItemOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "AccountListItemOnClick");
                        span.setAttribute("outsystems.function.key", "df02d2d7-eabb-4d17-b734-90a01240b10c");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._accountListItemOnClick$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            openAccountSwitcherOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OpenAccountSwitcherOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OpenAccountSwitcherOnClick");
                        span.setAttribute("outsystems.function.key", "e39b3dc6-6a25-4cab-88f7-0d9c911c931a");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._openAccountSwitcherOnClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            topupDemoAccount$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("TopupDemoAccount__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "TopupDemoAccount");
                        span.setAttribute("outsystems.function.key", "e522a808-6967-48f8-8027-bea735f76085");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._topupDemoAccount$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            filterAccountListAction$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("FilterAccountListAction__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "FilterAccountListAction");
                        span.setAttribute("outsystems.function.key", "e7aa87d1-d38e-4107-800f-a9b9daabb919");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._filterAccountListAction$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            confirmedNotResidentOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("confirmedNotResidentOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "confirmedNotResidentOnClick");
                        span.setAttribute("outsystems.function.key", "fae9c095-fd91-4443-82bc-66e2f1ffcae4");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._confirmedNotResidentOnClick$Action, callContext);
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
                        return tradershub_MainFlowController.default.handleError(ex, this.callContext());
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
        Controller.registerVariableGroupType("tradershub.MainFlow.Options$ActionCurrenciesList", [{
            name: "CurrenciesList",
            attrName: "currenciesListOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.RecordList,
            defaultValue: function() {
                return new tradershubModel.RL_7f0ff0d0a70a4e41424efbf5ef899b8d();
            },
            complexType: tradershubModel.RL_7f0ff0d0a70a4e41424efbf5ef899b8d
        }]);

        // Client Actions - Variables
        Controller.registerVariableGroupType("tradershub.MainFlow.Options.BotRedirection$generateRedirectURLJSResult", [{
            name: "BotURL",
            attrName: "botURLOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.MainFlow.Options.SetDemoValue$generateDemoAccountTokenJSResult", [{
            name: "Token",
            attrName: "tokenOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.MainFlow.Options.SmarttraderRedirection$generateRedirectURLJSResult", [{
            name: "SmartTraderURL",
            attrName: "smartTraderURLOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.MainFlow.Options.DTraderRedirection$generateRedirectURLJSResult", [{
            name: "DTraderURL",
            attrName: "dTraderURLOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.MainFlow.Options.FilterAccountListAction$filterAccountListJSResult", [{
            name: "modifiedAccountList",
            attrName: "modifiedAccountListOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "HasRealAccount",
            attrName: "hasRealAccountOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return true;
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.MainFlow.Options.mvc$controller.BotRedirection.GenerateRedirectURLJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if ($parameters.IsStaging) {
            $parameters.BotURL = `${$parameters.BotStaging}/bot`
        } else {
            $parameters.BotURL = `${$parameters.BotProduction}/bot`
        }

    };
});

define("tradershub.MainFlow.Options.mvc$controller.SetDemoValue.GenerateDemoAccountTokenJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const data = JSON.parse(localStorage.accountsList);
        const VRTCAccount = Object.keys(data).find(key => key.startsWith('VRTC'));

        $parameters.Token = data[VRTCAccount]?.token;

    };
});

define("tradershub.MainFlow.Options.mvc$controller.SmarttraderRedirection.GenerateRedirectURLJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        let baseLink = "";

        if ($parameters.IsStaging) {
            baseLink = $parameters.SmartTraderStaging;
        } else {
            baseLink = $parameters.SmartTraderProduction;
        }

        $parameters.SmartTraderURL = `${baseLink}/${$parameters.Language.toLowerCase()}/trading`

    };
});

define("tradershub.MainFlow.Options.mvc$controller.DTraderRedirection.GenerateRedirectURLJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if ($parameters.IsStaging) {
            $parameters.DTraderURL = `${$parameters.DerivAppStaging}/dtrader`
        } else {
            $parameters.DTraderURL = `${$parameters.DerivAppProduction}/dtrader`
        }

    };
});

define("tradershub.MainFlow.Options.mvc$controller.FilterAccountListAction.FilterAccountListJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const authorize = JSON.parse($parameters.AuthorizeResponse);
        const accountList = authorize?.authorize?.account_list;
        const allAccountsBalance = JSON.parse($parameters.AllAccountsBalance);

        if (accountList.length > 1) {
            $parameters.HasRealAccount = true;
        } else {
            $parameters.HasRealAccount = false;
        }

        const filterAccountList = accountList?.filter((account) => !account.is_virtual);

        const modifiedAccountList = filterAccountList?.map((account) => {
            const currency = account.currency;
            const icon = $actions.GetCurrencyIcon(currency || "USD", $parameters.CurrenciesList)?.CurrencyIcon;
            const loginid = account.loginid;
            const balanceObj = allAccountsBalance?.balance?.accounts;
            const formattedBalance = $actions.FormatMoney(balanceObj[loginid]?.balance, currency)?.FormattedNumber;

            return {
                icon,
                is_disabled: account.is_disabled,
                loginid,
                currency,
                balance: formattedBalance
            };
        });

        $parameters.modifiedAccountList = JSON.stringify(modifiedAccountList);

    };
});