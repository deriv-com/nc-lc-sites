define("tradershub.MainFlow.Options.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "SharedUtilities.controller", "tradershub.controller", "tradershub.Layouts.MainLayout.mvc$model", "tradershub.MainFlowBlocks.LoggedOutBanner.mvc$model", "OutSystemsUI.Content.Tooltip.mvc$model", "tradershub.MainFlowBlocks.RealDemoSwitcher.mvc$model", "tradershub.Common.BalanceSkeletonLoader.mvc$model", "tradershub.MainFlowBlocks.InlineMessage.mvc$model", "tradershub.MainFlowBlocks.OptionsProductCard.mvc$model", "tradershub.MainFlowBlocks.EmptyPlatformModal.mvc$model", "tradershub.model$ST_6c16f90c70691372df90a55aa5e72bd7Structure", "tradershub.model$RL_5ab9438d98871a1f612419941cad5407", "tradershub.model$ST_43e221b4a9439e2ea71501e5244dde34Structure", "tradershub.model$ST_0a3b9035d8da0d7db249ce5f6a01e8b3Structure", "SharedUtilities.controller$GetPlatformFromURL", "tradershub.referencesHealth", "tradershub.referencesHealth$SharedUtilities", "SharedUtilities.controller$GetURL", "tradershub.controller$GetAvailableAccounts", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure", "tradershub.controller$SendAuthorize", "SharedUtilities.controller$FormatMoney", "tradershub.controller$FeatureFlagValueByName", "tradershub.controller$SetTokenByLoginId", "tradershub.controller$TradingPlatformProductListing", "tradershub.controller$GetWebsiteStatus", "tradershub.controller$GetAllAccountsBalance", "tradershub.controller$GetCurrencyIcon", "tradershub.model$RC_6a44851bc01e80a885c4aa0ae740b8fc", "tradershub.model$RL_5ee36d8deb03b51810340e621ea66d4b", "tradershub.model$ST_a9a623c261c1ffe1c25d512e5c56df69Structure", "tradershub.model$RL_b34647d303b62dd6376f5a3a6702fe40", "tradershub.controller$GetBackOfficeLocks"], function(OSRuntimeCore, tradershubModel, SharedUtilitiesController, tradershubController, tradershub_Layouts_MainLayout_mvcModel, tradershub_MainFlowBlocks_LoggedOutBanner_mvcModel, OutSystemsUI_Content_Tooltip_mvcModel, tradershub_MainFlowBlocks_RealDemoSwitcher_mvcModel, tradershub_Common_BalanceSkeletonLoader_mvcModel, tradershub_MainFlowBlocks_InlineMessage_mvcModel, tradershub_MainFlowBlocks_OptionsProductCard_mvcModel, tradershub_MainFlowBlocks_EmptyPlatformModal_mvcModel) {
    var OS = OSRuntimeCore; {
        class GetCurrenciesAggrRecInner extends
        OS.Model.AggregateRecord {
            static attributesToDeclare() {
                return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new GetCurrenciesAggrRec(new GetCurrenciesAggrRec.RecordClass({
                    RecordListType: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        GetCurrenciesAggrRecInner.RecordListType = tradershubModel.RL_5ee36d8deb03b51810340e621ea66d4b;
        var GetCurrenciesAggrRec = GetCurrenciesAggrRecInner;
        GetCurrenciesAggrRec.init();
    }


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IsDerivGoModalVisible", "isDerivGoModalVisibleVar", "IsDerivGoModalVisible", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("FilteredAccountList", "filteredAccountListVar", "FilteredAccountList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_5ab9438d98871a1f612419941cad5407());
                    }, false, tradershubModel.RL_5ab9438d98871a1f612419941cad5407),
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
                        return true;
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
                    this.attr("ShowAddMoreAccount", "showAddMoreAccountVar", "ShowAddMoreAccount", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, false),
                    this.attr("BackOfficeLocks", "backOfficeLocksVar", "BackOfficeLocks", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_0a3b9035d8da0d7db249ce5f6a01e8b3Structure());
                    }, false, tradershubModel.ST_0a3b9035d8da0d7db249ce5f6a01e8b3Structure),
                    this.attr("GetCurrencies", "getCurrenciesAggr", "GetCurrencies", true, true, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new GetCurrenciesAggrRec());
                    }, true, GetCurrenciesAggrRec)
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
                Model._hasValidationWidgetsValue = (((((((tradershub_Layouts_MainLayout_mvcModel.hasValidationWidgets || tradershub_MainFlowBlocks_LoggedOutBanner_mvcModel.hasValidationWidgets) || OutSystemsUI_Content_Tooltip_mvcModel.hasValidationWidgets) || tradershub_MainFlowBlocks_RealDemoSwitcher_mvcModel.hasValidationWidgets) || tradershub_Common_BalanceSkeletonLoader_mvcModel.hasValidationWidgets) || tradershub_MainFlowBlocks_InlineMessage_mvcModel.hasValidationWidgets) || tradershub_MainFlowBlocks_OptionsProductCard_mvcModel.hasValidationWidgets) || tradershub_MainFlowBlocks_EmptyPlatformModal_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.MainFlow.Options.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "SharedUtilities.controller", "react", "@outsystems/runtime-view-js", "tradershub.MainFlow.Options.mvc$model", "tradershub.MainFlow.Options.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.MainLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.MainFlowBlocks.LoggedOutBanner.mvc$view", "OutSystemsUI.Content.Tooltip.mvc$view", "tradershub.MainFlowBlocks.RealDemoSwitcher.mvc$view", "tradershub.Common.BalanceSkeletonLoader.mvc$view", "tradershub.MainFlowBlocks.InlineMessage.mvc$view", "tradershub.MainFlowBlocks.OptionsProductCard.mvc$view", "tradershub.MainFlowBlocks.EmptyPlatformModal.mvc$view", "tradershub.model$ST_6c16f90c70691372df90a55aa5e72bd7Structure", "tradershub.model$RL_5ab9438d98871a1f612419941cad5407", "tradershub.model$ST_43e221b4a9439e2ea71501e5244dde34Structure", "tradershub.model$ST_0a3b9035d8da0d7db249ce5f6a01e8b3Structure", "SharedUtilities.controller$GetPlatformFromURL", "tradershub.referencesHealth", "tradershub.referencesHealth$SharedUtilities", "SharedUtilities.controller$GetURL", "tradershub.controller$GetAvailableAccounts", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure", "tradershub.controller$SendAuthorize", "SharedUtilities.controller$FormatMoney", "tradershub.controller$FeatureFlagValueByName", "tradershub.controller$SetTokenByLoginId", "tradershub.controller$TradingPlatformProductListing", "tradershub.controller$GetWebsiteStatus", "tradershub.controller$GetAllAccountsBalance", "tradershub.controller$GetCurrencyIcon", "tradershub.model$RC_6a44851bc01e80a885c4aa0ae740b8fc", "tradershub.model$RL_5ee36d8deb03b51810340e621ea66d4b", "tradershub.model$ST_a9a623c261c1ffe1c25d512e5c56df69Structure", "tradershub.model$RL_b34647d303b62dd6376f5a3a6702fe40", "tradershub.controller$GetBackOfficeLocks"], function(OSRuntimeCore, tradershubModel, tradershubController, SharedUtilitiesController, React, OSView, tradershub_MainFlow_Options_mvc_model, tradershub_MainFlow_Options_mvc_controller, tradershubClientVariables, tradershub_Layouts_MainLayout_mvc_view, OSWidgets, tradershub_MainFlowBlocks_LoggedOutBanner_mvc_view, OutSystemsUI_Content_Tooltip_mvc_view, tradershub_MainFlowBlocks_RealDemoSwitcher_mvc_view, tradershub_Common_BalanceSkeletonLoader_mvc_view, tradershub_MainFlowBlocks_InlineMessage_mvc_view, tradershub_MainFlowBlocks_OptionsProductCard_mvc_view, tradershub_MainFlowBlocks_EmptyPlatformModal_mvc_view) {
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
            return [tradershub_Layouts_MainLayout_mvc_view, tradershub_MainFlowBlocks_LoggedOutBanner_mvc_view, OutSystemsUI_Content_Tooltip_mvc_view, tradershub_MainFlowBlocks_RealDemoSwitcher_mvc_view, tradershub_Common_BalanceSkeletonLoader_mvc_view, tradershub_MainFlowBlocks_InlineMessage_mvc_view, tradershub_MainFlowBlocks_OptionsProductCard_mvc_view, tradershub_MainFlowBlocks_EmptyPlatformModal_mvc_view];
        }

        get modelFactory() {
            return tradershub_MainFlow_Options_mvc_model;
        }

        get controllerFactory() {
            return tradershub_MainFlow_Options_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("S0cFRi0TMUONLLNn0PN+nw#Title", "Options");
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
                        }, $if(((((tradershubClientVariables.getAccountType() === "demo") && ((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier()))) && !(model.variables.hasRealAccountVar)) && !(model.variables.isLoadingVar)), false, this, function() {
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
                                text: [$text(getTranslation("fQyJTO5UMUWyDTxHyiY_eA#Value", "Fill in your account details to make your first deposit."))],
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
                            text: [$text(getTranslation("EfSaScn+JkC6q6ZXjwuaGA#Value", "Options trading"))],
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
                                    return [$text(getTranslation("87UEjCWKgEyDAveDBC6OOw#Value", "Predict the market; profit if you’re right; risk only what you put in."))];
                                })
                            },
                            _dependencies: []
                        })), React.createElement(tradershub_MainFlowBlocks_RealDemoSwitcher_mvc_view, {
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
                                realClickEvent$Action: function() {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return controller.setRealValue$Action(controller.callContext(eventHandlerContext));
                                    });;
                                },
                                demoClickEvent$Action: function() {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return controller.setDemoValue$Action(controller.callContext(eventHandlerContext));
                                    });;
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "14",
                                alias: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })), $if(((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier())), false, this, function() {
                            return [$if((tradershubClientVariables.getAccountType() === "real"), true, this, function() {
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
                                        uuid: "15"
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
                                    text: [$text(getTranslation("Q2gQOo4Ojke_T+XVGnIdUg#Value", "Balance:"))],
                                    _idProps: {
                                        service: idService,
                                        uuid: "18"
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
                                            uuid: "19",
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
                                            uuid: "20"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Expression, {
                                        extendedProperties: {
                                            style: "color: #101213; font-size: 16px; font-weight: 700;"
                                        },
                                        value: ((model.variables.selectedAccountBalanceVar + " ") + model.variables.selectedAccountCurrencyVar),
                                        _idProps: {
                                            service: idService,
                                            uuid: "21"
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
                                            uuid: "22"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Image, {
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevrondownsm.svg"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "23"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })))];
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
                                    text: [$text(getTranslation("G5zUJP31nEWIo2MFWeEVcg#Value", "Balance:"))],
                                    _idProps: {
                                        service: idService,
                                        uuid: "25"
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
                                            uuid: "26",
                                            alias: "6"
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
                                            uuid: "27"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Expression, {
                                        extendedProperties: {
                                            style: "color: #101213; font-size: 16px; font-weight: 700;"
                                        },
                                        value: ((model.variables.selectedAccountBalanceVar + " ") + model.variables.selectedAccountCurrencyVar),
                                        _idProps: {
                                            service: idService,
                                            uuid: "28"
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
                                            uuid: "29"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Image, {
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevrondownsm.svg"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "30"
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
                                        uuid: "31"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Button, {
                                    enabled: model.variables.backOfficeLocksVar.isTransferAllowedAttr,
                                    isDefault: false,
                                    onClick: function() {
                                        try {
                                            OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "wallets", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), null, true);
                                        } catch (ex) {
                                            if (((ex.name) !== ("RedirectOccurredException"))) {
                                                throw ex;
                                            }

                                        };
                                    },
                                    style: model.getCachedValue(idService.getId("XEUvLFudNUyYj2v1WJRpqA.Style"), function() {
                                        return ((model.variables.backOfficeLocksVar.isTransferAllowedAttr) ? ("transactions-button") : ("disabled transactions-button"));
                                    }, function() {
                                        return model.variables.backOfficeLocksVar.isTransferAllowedAttr;
                                    }),
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "32"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Image, {
                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.transfer.svg"),
                                    type: /*Static*/ 0,
                                    _idProps: {
                                        service: idService,
                                        uuid: "33"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }), React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "font-size: 14px; margin-left: 8px;"
                                    },
                                    style: "hide-mobile",
                                    text: [$text(getTranslation("pkbvuSgiW0iS0ssRLDRjzg#Value", "Transfer"))],
                                    _idProps: {
                                        service: idService,
                                        uuid: "34"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })), React.createElement(OSWidgets.Link, {
                                    enabled: model.variables.backOfficeLocksVar.isTransferAllowedAttr,
                                    gridProperties: {
                                        classes: "ThemeGrid_MarginGutter"
                                    },
                                    style: model.getCachedValue(idService.getId("qKzVFp3FLkWeytdtYrIW3A.Style"), function() {
                                        return ((model.variables.backOfficeLocksVar.isTransferAllowedAttr) ? ("remove-hover") : ("disabled remove-hover"));
                                    }, function() {
                                        return model.variables.backOfficeLocksVar.isTransferAllowedAttr;
                                    }),
                                    transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                                    url: OS.Navigation.generateScreenURL("tradershub", "wallets", {}),
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "35"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "color: #FF444F; font-size: 12px; font-weight: 700; margin-top: 4px;"
                                    },
                                    style: "hide-desktop",
                                    text: [$text(getTranslation("9ow+XnQp9EeyxEVPpTo5ng#Value", "Transfer"))],
                                    _idProps: {
                                        service: idService,
                                        uuid: "36"
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
                                        text: [$text(getTranslation("jG6VFun4h0Wswi+EwOVi7A#Value", "Select account"))],
                                        _idProps: {
                                            service: idService,
                                            uuid: "39"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "padding: 10px 10px 0px 10px;"
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
                                        style: "list list-group account-list-container",
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
                                                                    uuid: "43"
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
                                                                    uuid: "45"
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
                                            }, callContext, idService, "1")
                                        },
                                        _dependencies: [asPrimitiveValue(tradershubClientVariables.getActiveLoginId())]
                                    })), $if(model.variables.showAddMoreAccountVar, false, this, function() {
                                        return [React.createElement(OSWidgets.Link, {
                                            enabled: true,
                                            style: "remove-hover",
                                            transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                                            url: OS.Navigation.generateScreenURL("tradershub", "add-account", {}),
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "49"
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
                                            text: [$text(getTranslation("daVfdbga4USTPBVggSsdgw#Value", "Add more accounts"))],
                                            _idProps: {
                                                service: idService,
                                                uuid: "51"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }), React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            style: "display-flex align-items-center justify-content-center",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "52"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Image, {
                                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                                            type: /*Static*/ 0,
                                            _idProps: {
                                                service: idService,
                                                uuid: "53"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))))];
                                    }, function() {
                                        return [];
                                    }))];
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
                                        uuid: "55"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "color: #101213; min-width: 135px;"
                                    },
                                    text: [$text(getTranslation("W31RGGIUvkWN5r9647mLfg#Value", "Balance:"))],
                                    _idProps: {
                                        service: idService,
                                        uuid: "56"
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
                                            uuid: "57",
                                            alias: "7"
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
                                            uuid: "58"
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
                                    extendedProperties: {
                                        style: "min-width: 79.5px;"
                                    },
                                    style: "display-flex align-items-center justify-content-center flex-direction-column cursor-pointer",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "60"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Button, {
                                    enabled: model.variables.backOfficeLocksVar.isTransferAllowedAttr,
                                    isDefault: false,
                                    onClick: function() {
                                        try {
                                            OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "wallets", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), null, true);
                                        } catch (ex) {
                                            if (((ex.name) !== ("RedirectOccurredException"))) {
                                                throw ex;
                                            }

                                        };
                                    },
                                    style: model.getCachedValue(idService.getId("yrB_28txQUyFT5CuIXP1KQ.Style"), function() {
                                        return ((model.variables.backOfficeLocksVar.isTransferAllowedAttr) ? ("transactions-button") : ("disabled transactions-button"));
                                    }, function() {
                                        return model.variables.backOfficeLocksVar.isTransferAllowedAttr;
                                    }),
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "61"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Image, {
                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.transfer.svg"),
                                    type: /*Static*/ 0,
                                    _idProps: {
                                        service: idService,
                                        uuid: "62"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }), React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "font-size: 14px; margin-left: 8px;"
                                    },
                                    style: "hide-mobile",
                                    text: [$text(getTranslation("DB7Uc9hKmESFIqDzmlZT5g#Value", "Transfer"))],
                                    _idProps: {
                                        service: idService,
                                        uuid: "63"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })), React.createElement(OSWidgets.Link, {
                                    enabled: model.variables.backOfficeLocksVar.isTransferAllowedAttr,
                                    gridProperties: {
                                        classes: "ThemeGrid_MarginGutter"
                                    },
                                    style: model.getCachedValue(idService.getId("TM4bJQqIg0enzmtsZPz1Iw.Style"), function() {
                                        return ((model.variables.backOfficeLocksVar.isTransferAllowedAttr) ? ("remove-hover") : ("disabled remove-hover"));
                                    }, function() {
                                        return model.variables.backOfficeLocksVar.isTransferAllowedAttr;
                                    }),
                                    transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                                    url: OS.Navigation.generateScreenURL("tradershub", "wallets", {}),
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "64"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "color: #FF444F; font-size: 12px; font-weight: 700; margin-top: 4px;"
                                    },
                                    style: "hide-desktop",
                                    text: [$text(getTranslation("tYBywluJ6kmvLSoG3Awuqw#Value", "Transfer"))],
                                    _idProps: {
                                        service: idService,
                                        uuid: "65"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }))))];
                            })];
                        }, function() {
                            return [];
                        })), $if((model.variables.backOfficeLocksVar.isTradingDisabledAttr || !(model.variables.backOfficeLocksVar.isTransferAllowedAttr)), false, this, function() {
                            return [React.createElement(tradershub_MainFlowBlocks_InlineMessage_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    Currency: model.variables.selectedAccountCurrencyVar
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
                                    uuid: "66",
                                    alias: "8"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [];
                        }), $if(model.variables.isLoadingVar, false, this, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "skeleton dtrader-loader",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "67"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }, function() {
                            return [$if(model.variables.tradingPlatformProductListingResponseVar.shouldShowDTraderAttr, false, this, function() {
                                return [React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    style: model.getCachedValue(idService.getId("DTraderContainer.Style"), function() {
                                        return ((model.variables.backOfficeLocksVar.isTradingDisabledAttr) ? ("dtrader-container disabled") : ("dtrader-container"));
                                    }, function() {
                                        return model.variables.backOfficeLocksVar.isTradingDisabledAttr;
                                    }),
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        name: "DTraderContainer"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Link, {
                                    enabled: !(model.variables.backOfficeLocksVar.isTradingDisabledAttr),
                                    onClick: function() {
                                        var eventHandlerContext = callContext.clone();
                                        controller.dTraderRedirection$Action(controller.callContext(eventHandlerContext));

                                        ;
                                    },
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "69"
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
                                        uuid: "71"
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
                                        uuid: "72"
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
                                        uuid: "73"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "font-weight: bold;"
                                    },
                                    text: [$text(getTranslation("Wql9gnhE6EOluO0PGRlRRA#Value", "Deriv Trader"))],
                                    _idProps: {
                                        service: idService,
                                        uuid: "74"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }), React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "font-size: 12px; margin-top: 4px;"
                                    },
                                    text: [$text(getTranslation("bnRuapxJ7kWBxK7gVOOlTg#Value", "Diverse trading options, low-entry costs."))],
                                    _idProps: {
                                        service: idService,
                                        uuid: "75"
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
                                            uuid: "76"
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
                                }, $text(getTranslation("+sT2nYtfGkmU4Q8tbnfa4Q#Value", "Trade types:"))), React.createElement(OSWidgets.Container, {
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
                                    enabled: !(model.variables.backOfficeLocksVar.isTradingDisabledAttr),
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                                    url: OS.Navigation.generateScreenURL("https://app.deriv.com/dtrader?symbol=1HZ100V&trade_type=accumulator", {}),
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "79"
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
                                        uuid: "80"
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
                                        uuid: "81"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Image, {
                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.accumulators.svg"),
                                    style: "display-block",
                                    type: /*Static*/ 0,
                                    _idProps: {
                                        service: idService,
                                        uuid: "82"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })), $text(getTranslation("K+kpK2OSDEK0gOrMsWOSMA#Value", "Accumulators")))), React.createElement(OSWidgets.Link, {
                                    enabled: !(model.variables.backOfficeLocksVar.isTradingDisabledAttr),
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                                    url: OS.Navigation.generateScreenURL("https://app.deriv.com/dtrader?symbol=1HZ100V&trade_type=turboslong", {}),
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "83"
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
                                        uuid: "84"
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
                                        uuid: "85"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Image, {
                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.turbos.svg"),
                                    style: "display-block",
                                    type: /*Static*/ 0,
                                    _idProps: {
                                        service: idService,
                                        uuid: "86"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })), $text(getTranslation("SBTSUnEXHUu9K6Q+gHiVyQ#Value", "Turbos")))), React.createElement(OSWidgets.Link, {
                                    enabled: !(model.variables.backOfficeLocksVar.isTradingDisabledAttr),
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                                    url: OS.Navigation.generateScreenURL("https://app.deriv.com/dtrader?symbol=1HZ100V&trade_type=vanillalongcall", {}),
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "87"
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
                                        uuid: "88"
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
                                        uuid: "89"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Image, {
                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.vanilla_options.svg"),
                                    style: "display-block",
                                    type: /*Static*/ 0,
                                    _idProps: {
                                        service: idService,
                                        uuid: "90"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })), $text(getTranslation("zCSyKfNfN0ySBwkI7fzobQ#Value", "Vanilla options")))), React.createElement(OSWidgets.Link, {
                                    enabled: !(model.variables.backOfficeLocksVar.isTradingDisabledAttr),
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                                    url: OS.Navigation.generateScreenURL("https://app.deriv.com/dtrader?symbol=1HZ100V&trade_type=multiplier", {}),
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "91"
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
                                        uuid: "92"
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
                                        uuid: "93"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Image, {
                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.multipliers.svg"),
                                    style: "display-block",
                                    type: /*Static*/ 0,
                                    _idProps: {
                                        service: idService,
                                        uuid: "94"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })), $text(getTranslation("nVSJowR5Kkir1L0PrqiNiQ#Value", "Multipliers"))))), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    style: "hide-desktop",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "95"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Button, {
                                    enabled: !(model.variables.backOfficeLocksVar.isTradingDisabledAttr),
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
                                }, $text(getTranslation("GgRGDuCYjUW1MzilRbh91w#Value", "Trade")))))];
                            }, function() {
                                return [];
                            })];
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
                                IsLoading: model.variables.isLoadingVar,
                                Title: "Deriv Bot",
                                IsDisabled: model.variables.backOfficeLocksVar.isTradingDisabledAttr
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
                                uuid: "98",
                                alias: "9"
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
                                IsDisabled: model.variables.backOfficeLocksVar.isTradingDisabledAttr,
                                IsLoading: model.variables.isLoadingVar,
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
                                uuid: "99",
                                alias: "10"
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
                            text: [$text(getTranslation("b02H41d_uUCdlwJgsUp1XA#Value", "Download our mobile app:"))],
                            _idProps: {
                                service: idService,
                                uuid: "101"
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
                                Title: "Deriv GO",
                                IsLoading: model.variables.isLoadingVar,
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
                                uuid: "102",
                                alias: "11"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), React.createElement(OSWidgets.Popup, {
                            showPopup: model.variables.isDerivGoModalVisibleVar,
                            style: "popup-dialog full-height-popup",
                            _idProps: {
                                service: idService,
                                name: "DerivGoTradeModal"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "border-color: #DEE2E6; border-style: none none solid none; border-width: 0px 0px 2px 0px; padding: 11px 16px;"
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
                                style: "color: #272B30; font-size: 20px; font-weight: bold;"
                            },
                            text: [$text(getTranslation("BzyRc_7WbESj95bM9dHedA#Value", "Trade with Deriv GO"))],
                            _idProps: {
                                service: idService,
                                uuid: "105"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.closeDerivGoModal$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            gridProperties: {
                                marginLeft: "8px"
                            },
                            style: "display-flex align-items-center justify-content-center",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "CloseBtn"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.toggleDerivGoModal$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "107"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
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
                                style: "padding: 16px;"
                            },
                            style: "display-flex align-items-center justify-content-center",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "DerivGOLogo"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-right: 8px;"
                            },
                            style: "display-flex align-items-center justify-content-center",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "Logo"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.dgo.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "111"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "color: #101213; font-size: 16px; font-weight: bold;"
                            },
                            text: [$text(getTranslation("GZdd9NxHHEm3_2N4R_F7qw#Value", "Deriv GO"))],
                            _idProps: {
                                service: idService,
                                uuid: "112"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "Baner"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.dgobanner.jpg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "114"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin: 40px 55px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "ContentContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "color: #101213; font-weight: 400; line-height: 22px;"
                            },
                            text: [$text(getTranslation("HQNXzJrDnUW_Y_u7n_JGYw#Value", "Download Deriv GO and dive into trading on your mobile."))],
                            _idProps: {
                                service: idService,
                                uuid: "116"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 8px; text-align: center;"
                            },
                            style: "display-flex",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "DownloadCenter"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "border-color: #E6E9E9; border-radius: 4px; border-style: solid; border-width: 1px; margin-right: 16px; padding: 8px;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "50%"
                            },
                            style: "",
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
                                style: "margin-bottom: 8px; margin-right: auto;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "80px",
                                marginLeft: "auto"
                            },
                            style: "display-flex align-items-center justify-content-center",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "119"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.DerivGoQRCode.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "120"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "color: #333333; font-size: 12px;"
                            },
                            text: [$text(getTranslation("uKyrCzscnka86elWTeXYXg#Value", "Scan the QR code to download Deriv GO"))],
                            _idProps: {
                                service: idService,
                                uuid: "121"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            gridProperties: {
                                classes: "OSInline",
                                width: "50%"
                            },
                            style: "display-flex flex-direction-column align-items-center justify-content-space-between",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "DownloadLinks"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Link, {
                            enabled: true,
                            extendedProperties: {
                                target: "_blank"
                            },
                            transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade),
                            url: OS.Navigation.generateScreenURL("https://play.google.com/store/apps/details?id=com.deriv.app&pli=1", {}),
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "123"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.GooglePlayBadge.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                name: "GooglePlay"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Link, {
                            enabled: true,
                            extendedProperties: {
                                target: "_blank"
                            },
                            transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade),
                            url: OS.Navigation.generateScreenURL("https://apps.apple.com/my/app/deriv-go-online-trading-app/id1550561298", {}),
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "125"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.AppstoreBadge.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                name: "AppStore"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Link, {
                            enabled: true,
                            extendedProperties: {
                                target: "_blank"
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade),
                            url: OS.Navigation.generateScreenURL("https://appgallery.huawei.com/app/C103801913", {}),
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "127"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.AppGalleryBadge.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                name: "AppGallery"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))))))), React.createElement(tradershub_MainFlowBlocks_EmptyPlatformModal_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                IsVisible: model.variables.shouldShowWarningPopupVar
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                onCloseClick$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.confirmedNotResidentOnClick$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "129",
                                alias: "12"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), React.createElement(OSWidgets.Popup, {
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
                                    uuid: "133"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.arrowleft.svg"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "134"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "color: #272B30; font-size: 18px; font-weight: 700;"
                                },
                                text: [$text(getTranslation("NONZJt0gW0+sZ4IXAPIq4Q#Value", "Select account"))],
                                _idProps: {
                                    service: idService,
                                    uuid: "135"
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
                                                            uuid: "139"
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
                                                            uuid: "141"
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
                                    }, callContext, idService, "2")
                                },
                                _dependencies: [asPrimitiveValue(tradershubClientVariables.getActiveLoginId())]
                            }), $if(model.variables.showAddMoreAccountVar, false, this, function() {
                                return [React.createElement(OSWidgets.Link, {
                                    enabled: true,
                                    style: "remove-hover",
                                    transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade),
                                    url: OS.Navigation.generateScreenURL("tradershub", "add-account", {}),
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "145"
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
                                    text: [$text(getTranslation("7v6bg5YzEEaO0ja23TEysA#Value", "Add more accounts"))],
                                    _idProps: {
                                        service: idService,
                                        uuid: "147"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    style: "display-flex align-items-center justify-content-center",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "148"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Image, {
                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                                    type: /*Static*/ 0,
                                    _idProps: {
                                        service: idService,
                                        uuid: "149"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }))))];
                            }, function() {
                                return [];
                            })))];
                        }, function() {
                            return [];
                        })))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.openAccountSwitcherModalVar), asPrimitiveValue(model.variables.shouldShowWarningPopupVar), asPrimitiveValue(model.variables.isDerivGoModalVisibleVar), asPrimitiveValue(model.variables.tradingPlatformProductListingResponseVar.shouldShowDerivGoAttr), asPrimitiveValue(model.variables.tradingPlatformProductListingResponseVar.shouldShowSmartTraderAttr), asPrimitiveValue(model.variables.tradingPlatformProductListingResponseVar.shouldShowDBotAttr), asPrimitiveValue(model.variables.tradingPlatformProductListingResponseVar.shouldShowDTraderAttr), asPrimitiveValue(model.variables.showAddMoreAccountVar), asPrimitiveValue(tradershubClientVariables.getActiveLoginId()), asPrimitiveValue(model.variables.filteredAccountListVar), asPrimitiveValue(model.variables.isAccountSwitcherOpenVar), asPrimitiveValue(model.variables.backOfficeLocksVar.isTradingDisabledAttr), asPrimitiveValue(model.variables.backOfficeLocksVar.isTransferAllowedAttr), asPrimitiveValue(model.variables.selectedAccountCurrencyVar), asPrimitiveValue(model.variables.selectedAccountBalanceVar), asPrimitiveValue(model.variables.isBalanceLoadingVar), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.hasRealAccountVar), asPrimitiveValue(tradershubClientVariables.getAuthToken()), asPrimitiveValue(tradershubClientVariables.getAccountType())]
            }));
        }
    }

    return View;
});
define("tradershub.MainFlow.Options.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "SharedUtilities.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.MainFlow.Options.mvc$translationsResources", "tradershub.MainFlow.controller", "tradershub.MainFlow.Options.mvc$controller.BotRedirection.GenerateRedirectURLJS", "tradershub.MainFlow.Options.mvc$controller.CheckShowAddMoreAccount.CheckShowAddMoreAccountJS", "tradershub.MainFlow.Options.mvc$controller.SetDemoValue.GenerateDemoAccountTokenJS", "tradershub.MainFlow.Options.mvc$controller.SmarttraderRedirection.GenerateRedirectURLJS", "tradershub.MainFlow.Options.mvc$controller.DTraderRedirection.GenerateRedirectURLJS", "tradershub.MainFlow.Options.mvc$controller.OnAfterFetch.FilterAccountListJS", "tradershub.model$ST_6c16f90c70691372df90a55aa5e72bd7Structure", "tradershub.model$RL_5ab9438d98871a1f612419941cad5407", "tradershub.model$ST_43e221b4a9439e2ea71501e5244dde34Structure", "tradershub.model$ST_0a3b9035d8da0d7db249ce5f6a01e8b3Structure", "SharedUtilities.controller$GetPlatformFromURL", "tradershub.referencesHealth", "tradershub.referencesHealth$SharedUtilities", "SharedUtilities.controller$GetURL", "tradershub.controller$GetAvailableAccounts", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure", "tradershub.controller$SendAuthorize", "SharedUtilities.controller$FormatMoney", "tradershub.controller$FeatureFlagValueByName", "tradershub.controller$SetTokenByLoginId", "tradershub.controller$TradingPlatformProductListing", "tradershub.controller$GetWebsiteStatus", "tradershub.controller$GetAllAccountsBalance", "tradershub.controller$GetCurrencyIcon", "tradershub.model$RC_6a44851bc01e80a885c4aa0ae740b8fc", "tradershub.model$RL_5ee36d8deb03b51810340e621ea66d4b", "tradershub.model$ST_a9a623c261c1ffe1c25d512e5c56df69Structure", "tradershub.model$RL_b34647d303b62dd6376f5a3a6702fe40", "tradershub.controller$GetBackOfficeLocks"], function(OSRuntimeCore, tradershubModel, tradershubController, SharedUtilitiesController, tradershubLanguageResources, tradershubClientVariables, tradershub_MainFlow_Options_mvc_TranslationsResources, tradershub_MainFlowController, tradershub_MainFlow_Options_mvc_controller_BotRedirection_GenerateRedirectURLJS, tradershub_MainFlow_Options_mvc_controller_CheckShowAddMoreAccount_CheckShowAddMoreAccountJS, tradershub_MainFlow_Options_mvc_controller_SetDemoValue_GenerateDemoAccountTokenJS, tradershub_MainFlow_Options_mvc_controller_SmarttraderRedirection_GenerateRedirectURLJS, tradershub_MainFlow_Options_mvc_controller_DTraderRedirection_GenerateRedirectURLJS, tradershub_MainFlow_Options_mvc_controller_OnAfterFetch_FilterAccountListJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, tradershub_MainFlow_Options_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {
                    getCurrencies$AggrRefresh: 0
                };
                this.dataFetchDependentsGraph = {
                    getCurrencies$AggrRefresh: []
                };
                this.shouldSendClientVarsToDataSources = false;
            }

            // Server Actions - Methods

            // Aggregates and Data Actions
            get getCurrencies$AggrRefresh() {
                if (!(this.hasOwnProperty("_getCurrencies$AggrRefresh"))) {
                    this._getCurrencies$AggrRefresh = function() {
                        var innerBody = function(maxRecords, startIndex, callContext) {
                            var model = this.model;
                            var controller = this.controller;
                            var callContext = controller.callContext(callContext);
                            return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetCurrencies", "screenservices/tradershub/MainFlow/Options/ScreenDataSetGetCurrencies", "npjMYW44GFvhkxw14gO3vA", maxRecords, startIndex, function(b) {
                                model.variables.getCurrenciesAggr.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.getCurrenciesAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getCurrenciesAggr.constructor));
                            }, undefined, undefined, undefined, callContext, undefined, true).then(function() {
                                return controller._onAfterFetch$Action(controller.callContext(callContext));
                            });
                        }.bind(this);
                        return OS.Logger.startActiveSpan("GetCurrencies", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetCurrencies");
                                span.setAttribute("outsystems.function.key", "5ca5553a-205a-4b9f-9f91-b0cfa26538cc");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
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

                return this._getCurrencies$AggrRefresh;
            }
            set getCurrencies$AggrRefresh(value) {
                this._getCurrencies$AggrRefresh = value;
            }


            get dataFetchActionNames() {
                if (!(this.hasOwnProperty("_dataFetchActionNames"))) {
                    this._dataFetchActionNames = ["getCurrencies$AggrRefresh"];
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
                                if ((!(model.variables.backOfficeLocksVar.isTradingDisabledAttr))) {
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
                                }

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

            get _checkShowAddMoreAccount$Action() {
                if (!(this.hasOwnProperty("__checkShowAddMoreAccount$Action"))) {
                    this.__checkShowAddMoreAccount$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("CheckShowAddMoreAccount", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "CheckShowAddMoreAccount");
                                span.setAttribute("outsystems.function.key", "2f09bd65-eb6e-43fb-ba87-3f604bedecd4");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("CheckShowAddMoreAccount");
                                callContext = controller.callContext(callContext);
                                var getAvailableAccountsVar = new OS.DataTypes.VariableHolder();
                                var checkShowAddMoreAccountJSResult = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: GetAvailableAccounts
                                    model.flush();
                                    return tradershubController.default.getAvailableAccounts$Action(callContext).then(function(value) {
                                        getAvailableAccountsVar.value = value;
                                    }).then(function() {
                                        checkShowAddMoreAccountJSResult.value = OS.Logger.startActiveSpan("CheckShowAddMoreAccount", function(span) {
                                            if (span) {
                                                span.setAttribute("code.function", "CheckShowAddMoreAccount");
                                                span.setAttribute("outsystems.function.key", "ffcdd2cc-cdab-49df-8312-3e3c2ebabb19");
                                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                            }

                                            try {
                                                return controller.safeExecuteJSNode(tradershub_MainFlow_Options_mvc_controller_CheckShowAddMoreAccount_CheckShowAddMoreAccountJS, "CheckShowAddMoreAccount", "CheckShowAddMoreAccount", {
                                                    AvailableAccounts: OS.DataConversion.JSNodeParamConverter.to(getAvailableAccountsVar.value.responseOut, OS.DataTypes.DataTypes.Text),
                                                    ShowAddMoreAccount: OS.DataConversion.JSNodeParamConverter.to(true, OS.DataTypes.DataTypes.Boolean)
                                                }, function($parameters) {
                                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.MainFlow.Options.CheckShowAddMoreAccount$checkShowAddMoreAccountJSResult"))();
                                                    jsNodeResult.showAddMoreAccountOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ShowAddMoreAccount, OS.DataTypes.DataTypes.Boolean);
                                                    return jsNodeResult;
                                                }, {}, {});
                                            } finally {
                                                if (span) {
                                                    span.end();
                                                }

                                            }

                                        }, 1);
                                        // ShowAddMoreAccount = CheckShowAddMoreAccount.ShowAddMoreAccount
                                        model.variables.showAddMoreAccountVar = checkShowAddMoreAccountJSResult.value.showAddMoreAccountOut;
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

                return this.__checkShowAddMoreAccount$Action;
            }
            set _checkShowAddMoreAccount$Action(value) {
                this.__checkShowAddMoreAccount$Action = value;
            }

            get _closeDerivGoModal$Action() {
                if (!(this.hasOwnProperty("__closeDerivGoModal$Action"))) {
                    this.__closeDerivGoModal$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("CloseDerivGoModal", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "CloseDerivGoModal");
                                span.setAttribute("outsystems.function.key", "63d65366-894e-4940-8ca4-b9c0b3839019");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("CloseDerivGoModal");
                                callContext = controller.callContext(callContext);
                                // IsDerivGoModalVisible = False
                                model.variables.isDerivGoModalVisibleVar = false;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__closeDerivGoModal$Action;
            }
            set _closeDerivGoModal$Action(value) {
                this.__closeDerivGoModal$Action = value;
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
                                    return OS.Flow.executeSequence(function() {
                                        if ((!((tradershubClientVariables.getAccountType() === "demo")))) {
                                            // AccountType = "demo"
                                            tradershubClientVariables.setAccountType("demo");
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

                                                // Execute Action: GetBOLocks
                                                return controller._getBOLocks$Action(callContext);
                                            }).then(function() {
                                                // SelectedAccountCurrency = SendAuthorize.Response.Authorize.Currency
                                                model.variables.selectedAccountCurrencyVar = sendAuthorizeVar.value.responseOut.authorizeAttr.currencyAttr;
                                                // SelectedAccountBalance = FormatMoney.FormattedNumber
                                                model.variables.selectedAccountBalanceVar = formatMoneyVar.value.formattedNumberOut;
                                                // IsBalanceLoading = False
                                                model.variables.isBalanceLoadingVar = false;
                                                // DemoLoginId = SendAuthorize.Response.Authorize.Loginid
                                                tradershubClientVariables.setDemoLoginId(sendAuthorizeVar.value.responseOut.authorizeAttr.loginidAttr);
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

                return this.__setDemoValue$Action;
            }
            set _setDemoValue$Action(value) {
                this.__setDemoValue$Action = value;
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
                                var formatMoneyVar = new OS.DataTypes.VariableHolder();
                                var setTokenByLoginIdVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    return OS.Flow.executeSequence(function() {
                                        if ((!((tradershubClientVariables.getAccountType() === "real")))) {
                                            return OS.Flow.executeSequence(function() {
                                                if ((model.variables.hasRealAccountVar)) {
                                                    // AccountType = "real"
                                                    tradershubClientVariables.setAccountType("real");
                                                    // IsBalanceLoading = True
                                                    model.variables.isBalanceLoadingVar = true;
                                                    // DemoLoginId = ""
                                                    tradershubClientVariables.setDemoLoginId("");
                                                    // Execute Action: SetTokenByLoginId
                                                    model.flush();
                                                    return tradershubController.default.setTokenByLoginId$Action(tradershubClientVariables.getActiveLoginId(), callContext).then(function(value) {
                                                        setTokenByLoginIdVar.value = value;
                                                    }).then(function() {
                                                        // Execute Action: FormatMoney
                                                        formatMoneyVar.value = SharedUtilitiesController.default.formatMoney$Action(setTokenByLoginIdVar.value.responseOut.authorizeAttr.balanceAttr, setTokenByLoginIdVar.value.responseOut.authorizeAttr.currencyAttr, "en-US", "", callContext);

                                                        // Execute Action: GetBOLocks
                                                        return controller._getBOLocks$Action(callContext);
                                                    }).then(function() {
                                                        // SelectedAccountCurrency = SetTokenByLoginId.Response.Authorize.Currency
                                                        model.variables.selectedAccountCurrencyVar = setTokenByLoginIdVar.value.responseOut.authorizeAttr.currencyAttr;
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
                                if ((!(model.variables.backOfficeLocksVar.isTradingDisabledAttr))) {
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
                                }

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
                                if ((!(model.variables.backOfficeLocksVar.isTradingDisabledAttr))) {
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
                                }

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

            get _onAfterFetch$Action() {
                if (!(this.hasOwnProperty("__onAfterFetch$Action"))) {
                    this.__onAfterFetch$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnAfterFetch", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnAfterFetch");
                                span.setAttribute("outsystems.function.key", "c8ca48b3-64fd-4078-b6ca-984ca31166a3");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnAfterFetch");
                                callContext = controller.callContext(callContext);
                                var formatMoneyVar = new OS.DataTypes.VariableHolder();
                                var tradingPlatformProductListingIDVar = new OS.DataTypes.VariableHolder();
                                var setTokenByLoginIdVar = new OS.DataTypes.VariableHolder();
                                var tradingPlatformProductListingVar = new OS.DataTypes.VariableHolder();
                                var getAllAccountsBalanceVar = new OS.DataTypes.VariableHolder();
                                var filterAccountListJSResult = new OS.DataTypes.VariableHolder();
                                var jSONSerializeAuthorizeVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONSerializeCurrenciesVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONDeserializeFilteredAccountListListVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_5ab9438d98871a1f612419941cad5407))());
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
                                        // HasToken
                                        return OS.Flow.executeSequence(function() {
                                            if ((((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
                                                // Execute Action: GetBOLocks
                                                return controller._getBOLocks$Action(callContext).then(function() {
                                                    // Execute Action: SetTokenByLoginId
                                                    model.flush();
                                                    return tradershubController.default.setTokenByLoginId$Action((((tradershubClientVariables.getDemoLoginId() === "")) ? (tradershubClientVariables.getActiveLoginId()) : (tradershubClientVariables.getDemoLoginId())), callContext).then(function(value) {
                                                        setTokenByLoginIdVar.value = value;
                                                    });
                                                }).then(function() {
                                                    // Execute Action: FormatMoney
                                                    formatMoneyVar.value = SharedUtilitiesController.default.formatMoney$Action(setTokenByLoginIdVar.value.responseOut.authorizeAttr.balanceAttr, setTokenByLoginIdVar.value.responseOut.authorizeAttr.currencyAttr, "en-US", "", callContext);

                                                    // SelectedAccountCurrency = SetTokenByLoginId.Response.Authorize.Currency
                                                    model.variables.selectedAccountCurrencyVar = setTokenByLoginIdVar.value.responseOut.authorizeAttr.currencyAttr;
                                                    // SelectedAccountBalance = FormatMoney.FormattedNumber
                                                    model.variables.selectedAccountBalanceVar = formatMoneyVar.value.formattedNumberOut;
                                                    // JSON Serialize: JSONSerializeAuthorize
                                                    jSONSerializeAuthorizeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(setTokenByLoginIdVar.value.responseOut, true, false);
                                                    // Execute Action: GetAllAccountsBalance
                                                    model.flush();
                                                    return tradershubController.default.getAllAccountsBalance$Action(callContext).then(function(value) {
                                                        getAllAccountsBalanceVar.value = value;
                                                    });
                                                }).then(function() {
                                                    // JSON Serialize: JSONSerializeCurrencies
                                                    jSONSerializeCurrenciesVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.getCurrenciesAggr.listOut, false, false);
                                                    filterAccountListJSResult.value = OS.Logger.startActiveSpan("FilterAccountList", function(span) {
                                                        if (span) {
                                                            span.setAttribute("code.function", "FilterAccountList");
                                                            span.setAttribute("outsystems.function.key", "67a17f15-b3e2-47ab-b230-c06052743047");
                                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                                        }

                                                        try {
                                                            return controller.safeExecuteJSNode(tradershub_MainFlow_Options_mvc_controller_OnAfterFetch_FilterAccountListJS, "FilterAccountList", "OnAfterFetch", {
                                                                AllAccountsBalance: OS.DataConversion.JSNodeParamConverter.to(getAllAccountsBalanceVar.value.responseOut, OS.DataTypes.DataTypes.Text),
                                                                CurrenciesList: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeCurrenciesVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                                AuthorizeResponse: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeAuthorizeVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                                modifiedAccountList: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                                                HasRealAccount: OS.DataConversion.JSNodeParamConverter.to(true, OS.DataTypes.DataTypes.Boolean)
                                                            }, function($parameters) {
                                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.MainFlow.Options.OnAfterFetch$filterAccountListJSResult"))();
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
                                                    jSONDeserializeFilteredAccountListListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(filterAccountListJSResult.value.modifiedAccountListOut, tradershubModel.RL_5ab9438d98871a1f612419941cad5407, false);
                                                    // FilteredAccountList = JSONDeserializeFilteredAccountListList.Data
                                                    model.variables.filteredAccountListVar = jSONDeserializeFilteredAccountListListVar.value.dataOut;
                                                    // HasRealAccount = FilterAccountList.HasRealAccount
                                                    model.variables.hasRealAccountVar = filterAccountListJSResult.value.hasRealAccountOut;
                                                    // AccountType = If
                                                    tradershubClientVariables.setAccountType((((filterAccountListJSResult.value.hasRealAccountOut && (tradershubClientVariables.getDemoLoginId() === ""))) ? ("real") : ("demo")));
                                                    // ClientCountry = SetTokenByLoginId.Response.Authorize.Country
                                                    tradershubClientVariables.setClientCountry(setTokenByLoginIdVar.value.responseOut.authorizeAttr.countryAttr);
                                                    // Execute Action: CheckShowAddMoreAccount
                                                    return controller._checkShowAddMoreAccount$Action(callContext);
                                                });
                                            }

                                        });
                                    }).then(function() {
                                        // Execute Action: TradingPlatformProductListing
                                        model.flush();
                                        return tradershubController.default.tradingPlatformProductListing$Action(tradershubClientVariables.getClientCountry(), callContext).then(function(value) {
                                            tradingPlatformProductListingVar.value = value;
                                        });
                                    }).then(function() {
                                        // IsTradingAllowed
                                        return OS.Flow.executeSequence(function() {
                                            if ((tradingPlatformProductListingVar.value.responseOut.isTradingAllowedAttr)) {
                                                // TradingPlatformProductListingResponse = TradingPlatformProductListing.Response
                                                model.variables.tradingPlatformProductListingResponseVar = tradingPlatformProductListingVar.value.responseOut;
                                            } else {
                                                if ((!(tradershubClientVariables.getConfirmedNotResident()))) {
                                                    // ShouldShowWarningPopup = True
                                                    model.variables.shouldShowWarningPopupVar = true;
                                                }

                                                // TempClientCountry = "id"
                                                tradershubClientVariables.setTempClientCountry("id");
                                                // Execute Action: TradingPlatformProductListingID
                                                model.flush();
                                                return tradershubController.default.tradingPlatformProductListing$Action(tradershubClientVariables.getClientCountry(), callContext).then(function(value) {
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

                return this.__onAfterFetch$Action;
            }
            set _onAfterFetch$Action(value) {
                this.__onAfterFetch$Action = value;
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
                                var setTokenByLoginIdVar = new OS.DataTypes.VariableHolder();
                                var formatMoneyVar = new OS.DataTypes.VariableHolder();
                                var jSONSerializeCurrentLinkedToVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                return OS.Flow.executeAsyncFlow(function() {
                                    return OS.Flow.executeSequence(function() {
                                        if (((((tradershubClientVariables.getActiveLoginId() === model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).loginidAttr)) ? (false) : (true)))) {
                                            // IsAccountSwitcherOpen = False
                                            model.variables.isAccountSwitcherOpenVar = false;
                                            // OpenAccountSwitcherModal = False
                                            model.variables.openAccountSwitcherModalVar = false;
                                            // Execute Action: SetTokenByLoginId
                                            model.flush();
                                            return tradershubController.default.setTokenByLoginId$Action(model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).loginidAttr, callContext).then(function(value) {
                                                setTokenByLoginIdVar.value = value;
                                            }).then(function() {
                                                // IsBalanceLoading = True
                                                model.variables.isBalanceLoadingVar = true;
                                            }).then(function() {
                                                if ((setTokenByLoginIdVar.value.isErrorOut)) {
                                                    // IsBalanceLoading = False
                                                    model.variables.isBalanceLoadingVar = false;
                                                } else {
                                                    // Execute Action: FormatMoney
                                                    formatMoneyVar.value = SharedUtilitiesController.default.formatMoney$Action(setTokenByLoginIdVar.value.responseOut.authorizeAttr.balanceAttr, setTokenByLoginIdVar.value.responseOut.authorizeAttr.currencyAttr, "en-US", "", callContext);

                                                    // JSON Serialize: JSONSerializeCurrentLinkedTo
                                                    jSONSerializeCurrentLinkedToVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).linkedToAttr, false, false);
                                                    // SelectedAccountCurrency = SetTokenByLoginId.Response.Authorize.Currency
                                                    model.variables.selectedAccountCurrencyVar = setTokenByLoginIdVar.value.responseOut.authorizeAttr.currencyAttr;
                                                    // SelectedAccountBalance = FormatMoney.FormattedNumber
                                                    model.variables.selectedAccountBalanceVar = formatMoneyVar.value.formattedNumberOut;
                                                    // ActiveLoginId = FilteredAccountList.Current.Loginid
                                                    tradershubClientVariables.setActiveLoginId(model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).loginidAttr);
                                                    // IsBalanceLoading = False
                                                    model.variables.isBalanceLoadingVar = false;
                                                    // LinkedTo = JSONSerializeCurrentLinkedTo.JSON
                                                    tradershubClientVariables.setLinkedTo(jSONSerializeCurrentLinkedToVar.value.jSONOut);
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

            get _getBOLocks$Action() {
                if (!(this.hasOwnProperty("__getBOLocks$Action"))) {
                    this.__getBOLocks$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("GetBOLocks", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetBOLocks");
                                span.setAttribute("outsystems.function.key", "f6e83c42-f57b-4248-99a1-ac5dd7b8eb1f");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("GetBOLocks");
                                callContext = controller.callContext(callContext);
                                var getBackOfficeLocksVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: GetBackOfficeLocks
                                    model.flush();
                                    return tradershubController.default.getBackOfficeLocks$Action(callContext).then(function(value) {
                                        getBackOfficeLocksVar.value = value;
                                    }).then(function() {
                                        // BackOfficeLocks = GetBackOfficeLocks.Response
                                        model.variables.backOfficeLocksVar = getBackOfficeLocksVar.value.responseOut;
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

                return this.__getBOLocks$Action;
            }
            set _getBOLocks$Action(value) {
                this.__getBOLocks$Action = value;
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
                                // ConfirmedNotResident = True
                                tradershubClientVariables.setConfirmedNotResident(true);
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

            checkShowAddMoreAccount$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("CheckShowAddMoreAccount__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "CheckShowAddMoreAccount");
                        span.setAttribute("outsystems.function.key", "2f09bd65-eb6e-43fb-ba87-3f604bedecd4");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._checkShowAddMoreAccount$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            closeDerivGoModal$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("CloseDerivGoModal__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "CloseDerivGoModal");
                        span.setAttribute("outsystems.function.key", "63d65366-894e-4940-8ca4-b9c0b3839019");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._closeDerivGoModal$Action, callContext);
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

            onAfterFetch$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnAfterFetch__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnAfterFetch");
                        span.setAttribute("outsystems.function.key", "c8ca48b3-64fd-4078-b6ca-984ca31166a3");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onAfterFetch$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
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

            getBOLocks$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("GetBOLocks__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "GetBOLocks");
                        span.setAttribute("outsystems.function.key", "f6e83c42-f57b-4248-99a1-ac5dd7b8eb1f");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._getBOLocks$Action, callContext);
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
                    this._onReadyEventHandler = null;
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
        Controller.registerVariableGroupType("tradershub.MainFlow.Options.CheckShowAddMoreAccount$checkShowAddMoreAccountJSResult", [{
            name: "ShowAddMoreAccount",
            attrName: "showAddMoreAccountOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return true;
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
        Controller.registerVariableGroupType("tradershub.MainFlow.Options.OnAfterFetch$filterAccountListJSResult", [{
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

define("tradershub.MainFlow.Options.mvc$controller.CheckShowAddMoreAccount.CheckShowAddMoreAccountJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const availableAccounts = JSON.parse($parameters.AvailableAccounts);

        if (availableAccounts?.available_accounts?.trading.length > 0) {
            $parameters.ShowAddMoreAccount = true;
        } else {
            $parameters.ShowAddMoreAccount = false;
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

define("tradershub.MainFlow.Options.mvc$controller.OnAfterFetch.FilterAccountListJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const authorize = JSON.parse($parameters.AuthorizeResponse);
        const accountList = authorize?.authorize?.account_list;
        const allAccountsBalance = JSON.parse($parameters.AllAccountsBalance);

        if (accountList.length > 1) {
            $parameters.HasRealAccount = true;
        } else {
            $parameters.HasRealAccount = false;
        }

        const filterAccountList = accountList?.filter(
            (account) => account.broker !== "CRW" && account.broker !== "VRW" && account.broker !== "VRTC"
        );

        const modifiedAccountList = filterAccountList?.map((account) => {
            const currency = account.currency;
            const icon = $actions.GetCurrencyIcon(currency, $parameters.CurrenciesList)?.CurrencyIcon;
            const loginid = account.loginid;
            const balanceObj = allAccountsBalance?.balance?.accounts;
            const formattedBalance = $actions.FormatMoney(balanceObj[loginid]?.balance, currency)?.FormattedNumber;

            return {
                icon,
                is_disabled: account.is_disabled,
                loginid,
                currency,
                balance: formattedBalance,
                linkedTo: account.linked_to
            };
        });

        $parameters.modifiedAccountList = JSON.stringify(modifiedAccountList);

    };
});


define("tradershub.MainFlow.Options.mvc$translationsResources.fr-FR", [], function() {
    return {
        "7v6bg5YzEEaO0ja23TEysA#Value": "Ajouter plus de comptes",
        "NONZJt0gW0+sZ4IXAPIq4Q#Value": "Sélectionner un compte",
        "uKyrCzscnka86elWTeXYXg#Value": "Scannez le code QR pour télécharger Deriv GO",
        "HQNXzJrDnUW_Y_u7n_JGYw#Value": "Téléchargez Deriv GO et plongez dans le trading sur votre mobile.",
        "GZdd9NxHHEm3_2N4R_F7qw#Value": "Deriv GO",
        "BzyRc_7WbESj95bM9dHedA#Value": "Trade with Deriv GO",
        "b02H41d_uUCdlwJgsUp1XA#Value": "Téléchargez notre application mobile :",
        "GgRGDuCYjUW1MzilRbh91w#Value": "Trader",
        "nVSJowR5Kkir1L0PrqiNiQ#Value": "Multiplicateurs",
        "zCSyKfNfN0ySBwkI7fzobQ#Value": "Options vanille",
        "SBTSUnEXHUu9K6Q+gHiVyQ#Value": "Turbos",
        "K+kpK2OSDEK0gOrMsWOSMA#Value": "Accumulateurs",
        "+sT2nYtfGkmU4Q8tbnfa4Q#Value": "Types de trading :",
        "bnRuapxJ7kWBxK7gVOOlTg#Value": "Options de trading diversifiées, faibles coûts d\'entrée.",
        "Wql9gnhE6EOluO0PGRlRRA#Value": "Deriv Trader",
        "tYBywluJ6kmvLSoG3Awuqw#Value": "Transfert",
        "DB7Uc9hKmESFIqDzmlZT5g#Value": "Transfert",
        "W31RGGIUvkWN5r9647mLfg#Value": "Solde",
        "daVfdbga4USTPBVggSsdgw#Value": "Ajouter plus de comptes",
        "jG6VFun4h0Wswi+EwOVi7A#Value": "Sélectionner le compte",
        "9ow+XnQp9EeyxEVPpTo5ng#Value": "Transférer",
        "pkbvuSgiW0iS0ssRLDRjzg#Value": "Transfert",
        "G5zUJP31nEWIo2MFWeEVcg#Value": "Solde",
        "Q2gQOo4Ojke_T+XVGnIdUg#Value": "Solde",
        "87UEjCWKgEyDAveDBC6OOw#Value": "Prévoyez le marché ; profitez si vous avez raison ; ne risquez que ce que vous investissez.",
        "EfSaScn+JkC6q6ZXjwuaGA#Value": "Trading d\'options",
        "fQyJTO5UMUWyDTxHyiY_eA#Value": "Remplissez vos informations de compte pour effectuer votre premier dépôt."
    };
});

define("tradershub.MainFlow.Options.mvc$translationsResources", ["exports", "tradershub.MainFlow.Options.mvc$translationsResources.fr-FR"], function(exports, tradershub_MainFlow_Options_mvc_translationsResources_frFR) {
    return {
        "fr-FR": {
            "translations": tradershub_MainFlow_Options_mvc_translationsResources_frFR,
            "isRTL": false
        }
    };
});