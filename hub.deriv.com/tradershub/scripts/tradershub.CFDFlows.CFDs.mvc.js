define("tradershub.CFDFlows.CFDs.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "RESTAPIWebsocketOfficial.model", "tradershub.controller", "BrowserConsoleLogging.controller", "tradershub.Layouts.MainLayout.mvc$model", "tradershub.MainFlowBlocks.LoggedOutBanner.mvc$model", "OutSystemsUI.Content.Tooltip.mvc$model", "tradershub.MainFlowBlocks.RealDemoSwitcher.mvc$model", "tradershub.CFDBlocks.CFDTradingAppCard.mvc$model", "tradershub.CFDBlocks.CFDTradeModal.mvc$model", "tradershub.CFDBlocks.CFDPasswordModal.mvc$model", "tradershub.MainFlowBlocks.EmptyPlatformModal.mvc$model", "tradershub.model$EN_8212284ed6913c62a123b32716b72fbaEntityRecord", "tradershub.model$RL_9eb97ad6cb81943972e368260e0cb936", "RESTAPIWebsocketOfficial.model$ST_2f457e0a5b13526850516eea23ae0e9aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_75725e65d106c1568a850780233a08baStructure", "RESTAPIWebsocketOfficial.model$ST_1e4e8e93f82bd7d0c82446a55ed8dee2Structure", "RESTAPIWebsocketOfficial.model$ST_2361699202fda01d7c8ade7cab583650Structure", "tradershub.model$RL_d214456dc511920f517885542ecb318a", "RESTAPIWebsocketOfficial.model$ST_605da9a1009ce00d8c64718f9c13e284Structure", "RESTAPIWebsocketOfficial.model$ST_b3b8308da7c5dcdc42b3f87ca949eb8cStructure", "RESTAPIWebsocketOfficial.model$ST_13505e54da5ba49238f8f2a40834f63fStructure", "RESTAPIWebsocketOfficial.model$ST_b96e8d04448b693f79e4aebf0b6ee4fbStructure", "RESTAPIWebsocketOfficial.model$ST_4dc58b9edb8582c76248b762d6650913Structure", "RESTAPIWebsocketOfficial.model$ST_8517d9c8b73e866553a1a7b806af5079Structure", "RESTAPIWebsocketOfficial.model$ST_f1644d81fb90e6f4882b198c996831d1Structure", "RESTAPIWebsocketOfficial.model$ST_a64a97da9ee822b4b21c919739567011Structure", "tradershub.model$RL_d2e8d01cb1d1df6bef4310379df28149", "tradershub.controller$GetWebsiteStatus", "tradershub.model$RC_07be8d7193ba16b1cc9d953b8fa48e9d", "tradershub.model$RL_ee1664da44e6893a731536d754684359", "BrowserConsoleLogging.controller$ConsoleLog", "tradershub.referencesHealth$BrowserConsoleLogging", "RESTAPIWebsocketOfficial.model$ST_746d074ddcc08e0df3b269ffb1933d5aStructure", "tradershub.controller$GetAccountStatus2", "tradershub.controller$TradingPlatformAccounts", "tradershub.controller$MT5LoginList", "tradershub.controller$DerivApiSendMessage", "tradershub.controller$FeatureFlagValueByName", "tradershub.model$ST_8907948f85abfce9f41b7aac6149d55eStructure", "tradershub.controller$MT5AvailableAccounts", "tradershub.model$ST_3c6ba624991ba71a1d179d7c7ef27261Structure", "tradershub.controller$DxtradeAvailableAccounts", "tradershub.controller$CTraderAvailableAccounts"], function(OSRuntimeCore, tradershubModel, RESTAPIWebsocketOfficialModel, tradershubController, BrowserConsoleLoggingController, tradershub_Layouts_MainLayout_mvcModel, tradershub_MainFlowBlocks_LoggedOutBanner_mvcModel, OutSystemsUI_Content_Tooltip_mvcModel, tradershub_MainFlowBlocks_RealDemoSwitcher_mvcModel, tradershub_CFDBlocks_CFDTradingAppCard_mvcModel, tradershub_CFDBlocks_CFDTradeModal_mvcModel, tradershub_CFDBlocks_CFDPasswordModal_mvcModel, tradershub_MainFlowBlocks_EmptyPlatformModal_mvcModel) {
    var OS = OSRuntimeCore; {
        class GetCfdProductConfigsAggrRecInner extends
        OS.Model.AggregateRecord {
            static attributesToDeclare() {
                return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new GetCfdProductConfigsAggrRec(new GetCfdProductConfigsAggrRec.RecordClass({
                    RecordListType: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        GetCfdProductConfigsAggrRecInner.RecordListType = tradershubModel.RL_ee1664da44e6893a731536d754684359;
        var GetCfdProductConfigsAggrRec = GetCfdProductConfigsAggrRecInner;
        GetCfdProductConfigsAggrRec.init();
    }


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("AvailableCFDAccounts", "availableCFDAccountsVar", "AvailableCFDAccounts", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936());
                    }, false, tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936),
                    this.attr("CreatedCFDAccounts", "createdCFDAccountsVar", "CreatedCFDAccounts", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936());
                    }, false, tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936),
                    this.attr("CreatedMT5Accounts", "createdMT5AccountsVar", "CreatedMT5Accounts", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_2f457e0a5b13526850516eea23ae0e9aStructure());
                    }, false, RESTAPIWebsocketOfficialModel.ST_2f457e0a5b13526850516eea23ae0e9aStructure),
                    this.attr("CreatedCTraderAccounts", "createdCTraderAccountsVar", "CreatedCTraderAccounts", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_75725e65d106c1568a850780233a08baStructure());
                    }, false, RESTAPIWebsocketOfficialModel.ST_75725e65d106c1568a850780233a08baStructure),
                    this.attr("CreatedDXTradeAccounts", "createdDXTradeAccountsVar", "CreatedDXTradeAccounts", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_75725e65d106c1568a850780233a08baStructure());
                    }, false, RESTAPIWebsocketOfficialModel.ST_75725e65d106c1568a850780233a08baStructure),
                    this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("ShowWarningPopup", "showWarningPopupVar", "ShowWarningPopup", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("ShowPasswordPopup", "showPasswordPopupVar", "ShowPasswordPopup", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("ShowTradePopup", "showTradePopupVar", "ShowTradePopup", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, false),
                    this.attr("SelectedProduct", "selectedProductVar", "SelectedProduct", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("IsPasswordSet", "isPasswordSetVar", "IsPasswordSet", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("GetCfdProductConfigs", "getCfdProductConfigsAggr", "GetCfdProductConfigs", true, true, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new GetCfdProductConfigsAggrRec());
                    }, true, GetCfdProductConfigsAggrRec)
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
                Model._hasValidationWidgetsValue = (((((((tradershub_Layouts_MainLayout_mvcModel.hasValidationWidgets || tradershub_MainFlowBlocks_LoggedOutBanner_mvcModel.hasValidationWidgets) || OutSystemsUI_Content_Tooltip_mvcModel.hasValidationWidgets) || tradershub_MainFlowBlocks_RealDemoSwitcher_mvcModel.hasValidationWidgets) || tradershub_CFDBlocks_CFDTradingAppCard_mvcModel.hasValidationWidgets) || tradershub_CFDBlocks_CFDTradeModal_mvcModel.hasValidationWidgets) || tradershub_CFDBlocks_CFDPasswordModal_mvcModel.hasValidationWidgets) || tradershub_MainFlowBlocks_EmptyPlatformModal_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.CFDFlows.CFDs.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "BrowserConsoleLogging.controller", "react", "@outsystems/runtime-view-js", "tradershub.CFDFlows.CFDs.mvc$model", "tradershub.CFDFlows.CFDs.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.MainLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.MainFlowBlocks.LoggedOutBanner.mvc$view", "OutSystemsUI.Content.Tooltip.mvc$view", "tradershub.MainFlowBlocks.RealDemoSwitcher.mvc$view", "tradershub.CFDBlocks.CFDTradingAppCard.mvc$view", "tradershub.CFDBlocks.CFDTradeModal.mvc$view", "tradershub.CFDBlocks.CFDPasswordModal.mvc$view", "tradershub.MainFlowBlocks.EmptyPlatformModal.mvc$view", "tradershub.model$EN_8212284ed6913c62a123b32716b72fbaEntityRecord", "tradershub.model$RL_9eb97ad6cb81943972e368260e0cb936", "RESTAPIWebsocketOfficial.model$ST_2f457e0a5b13526850516eea23ae0e9aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_75725e65d106c1568a850780233a08baStructure", "RESTAPIWebsocketOfficial.model$ST_1e4e8e93f82bd7d0c82446a55ed8dee2Structure", "RESTAPIWebsocketOfficial.model$ST_2361699202fda01d7c8ade7cab583650Structure", "tradershub.model$RL_d214456dc511920f517885542ecb318a", "RESTAPIWebsocketOfficial.model$ST_605da9a1009ce00d8c64718f9c13e284Structure", "RESTAPIWebsocketOfficial.model$ST_b3b8308da7c5dcdc42b3f87ca949eb8cStructure", "RESTAPIWebsocketOfficial.model$ST_13505e54da5ba49238f8f2a40834f63fStructure", "RESTAPIWebsocketOfficial.model$ST_b96e8d04448b693f79e4aebf0b6ee4fbStructure", "RESTAPIWebsocketOfficial.model$ST_4dc58b9edb8582c76248b762d6650913Structure", "RESTAPIWebsocketOfficial.model$ST_8517d9c8b73e866553a1a7b806af5079Structure", "RESTAPIWebsocketOfficial.model$ST_f1644d81fb90e6f4882b198c996831d1Structure", "RESTAPIWebsocketOfficial.model$ST_a64a97da9ee822b4b21c919739567011Structure", "tradershub.model$RL_d2e8d01cb1d1df6bef4310379df28149", "tradershub.controller$GetWebsiteStatus", "tradershub.model$RC_07be8d7193ba16b1cc9d953b8fa48e9d", "tradershub.model$RL_ee1664da44e6893a731536d754684359", "BrowserConsoleLogging.controller$ConsoleLog", "tradershub.referencesHealth$BrowserConsoleLogging", "RESTAPIWebsocketOfficial.model$ST_746d074ddcc08e0df3b269ffb1933d5aStructure", "tradershub.controller$GetAccountStatus2", "tradershub.controller$TradingPlatformAccounts", "tradershub.controller$MT5LoginList", "tradershub.controller$DerivApiSendMessage", "tradershub.controller$FeatureFlagValueByName", "tradershub.model$ST_8907948f85abfce9f41b7aac6149d55eStructure", "tradershub.controller$MT5AvailableAccounts", "tradershub.model$ST_3c6ba624991ba71a1d179d7c7ef27261Structure", "tradershub.controller$DxtradeAvailableAccounts", "tradershub.controller$CTraderAvailableAccounts"], function(OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, BrowserConsoleLoggingController, React, OSView, tradershub_CFDFlows_CFDs_mvc_model, tradershub_CFDFlows_CFDs_mvc_controller, tradershubClientVariables, tradershub_Layouts_MainLayout_mvc_view, OSWidgets, tradershub_MainFlowBlocks_LoggedOutBanner_mvc_view, OutSystemsUI_Content_Tooltip_mvc_view, tradershub_MainFlowBlocks_RealDemoSwitcher_mvc_view, tradershub_CFDBlocks_CFDTradingAppCard_mvc_view, tradershub_CFDBlocks_CFDTradeModal_mvc_view, tradershub_CFDBlocks_CFDPasswordModal_mvc_view, tradershub_MainFlowBlocks_EmptyPlatformModal_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "CFDFlows.CFDs";
        }

        static getAttributes() {
            return {
                codeFunction: "CFDs",
                functionKey: "fbf7d1b9-f76f-4b1f-bad1-5f8f38e21344",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.CFDFlows.CFDs.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_MainLayout_mvc_view, tradershub_MainFlowBlocks_LoggedOutBanner_mvc_view, OutSystemsUI_Content_Tooltip_mvc_view, tradershub_MainFlowBlocks_RealDemoSwitcher_mvc_view, tradershub_CFDBlocks_CFDTradingAppCard_mvc_view, tradershub_CFDBlocks_CFDTradeModal_mvc_view, tradershub_CFDBlocks_CFDPasswordModal_mvc_view, tradershub_MainFlowBlocks_EmptyPlatformModal_mvc_view];
        }

        get modelFactory() {
            return tradershub_CFDFlows_CFDs_mvc_model;
        }

        get controllerFactory() {
            return tradershub_CFDFlows_CFDs_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("udH3+2_3H0u60V+POOITRA#Title", "CFDs");
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
                    ActiveTab: 1
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
                        return [React.createElement(tradershub_MainFlowBlocks_LoggedOutBanner_mvc_view, {
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
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-bottom: 0px;"
                            },
                            style: "header-container",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "Header"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex align-items-center",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "Title"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            style: "main-title",
                            text: [$text(getTranslation("wDlKcbQEL0SpHAWlCti6Kw#Value", "CFDs trading"))],
                            _idProps: {
                                service: idService,
                                name: "CFDsTrading"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OutSystemsUI_Content_Tooltip_mvc_view, {
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
                                uuid: "5",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "margin-top: 8px;"
                                        },
                                        gridProperties: {
                                            marginLeft: "8px"
                                        },
                                        style: "display-flex align-items-center justify-content-center",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Image, {
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info.svg"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))];
                                }),
                                tooltip: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "line-height: 21px;"
                                        },
                                        text: [$text(getTranslation("gcgQSS26UkK60r3pOIaf5g#Value", "Trade bigger positions with less capital on a wide range of global markets."))],
                                        _idProps: {
                                            service: idService,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })];
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
                                uuid: "9",
                                alias: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            visible: model.getCachedValue(idService.getId("MyAccountsContainer.Visible"), function() {
                                return (((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier())) && (model.variables.createdCFDAccountsVar.length > 0));
                            }, function() {
                                return tradershubClientVariables.getAuthToken();
                            }, function() {
                                return model.variables.createdCFDAccountsVar.length;
                            }),
                            _idProps: {
                                service: idService,
                                name: "MyAccountsContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: [$text(getTranslation("K34fG267aE23l2enpmqezA#Value", "My accounts"))],
                            _idProps: {
                                service: idService,
                                uuid: "11"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.List, {
                            animateItems: false,
                            extendedProperties: {
                                "disable-virtualization": "True"
                            },
                            mode: /*Default*/ 0,
                            source: model.variables.createdCFDAccountsVar,
                            style: "available-accounts__container",
                            tag: "div",
                            _idProps: {
                                service: idService,
                                name: "MyAccountsCardsList"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new IteratorPlaceholderContent(function(idService, callContext) {
                                    return [React.createElement(tradershub_CFDBlocks_CFDTradingAppCard_mvc_view, {
                                        getOwnerSpan: function() {
                                            return _this.getChildSpan("render");
                                        },
                                        getOwnerDisposeSpan: function() {
                                            return _this.getChildSpan("destroy");
                                        },
                                        inputs: {
                                            CreatedMt5Accounts: model.variables.createdMT5AccountsVar,
                                            SelectedProductArg: model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).productIdentifierAttr,
                                            ProductIcon: model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).iconAttr,
                                            CreatedCtraderAccounts: model.variables.createdCTraderAccountsVar,
                                            Name: model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).titleAttr,
                                            ProductDescription: model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).descriptionAttr,
                                            CreatedDxtradeAccounts: model.variables.createdDXTradeAccountsVar,
                                            Variant: "Large"
                                        },
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            },
                                            onClickCreatedAccount$Action: function() {
                                                var eventHandlerContext = callContext.clone();
                                                controller.onClickCreatedAccount$Action(model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).productIdentifierAttr, controller.callContext(eventHandlerContext));

                                                ;
                                            },
                                            onClickAvailableAccount$Action: function() {
                                                return Promise.resolve().then(function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    return controller.onClickAvailableAccount$Action(model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).productIdentifierAttr, controller.callContext(eventHandlerContext));
                                                });;
                                            }
                                        },
                                        _validationProps: {
                                            validationService: validationService
                                        },
                                        _idProps: {
                                            service: idService,
                                            uuid: "13",
                                            alias: "5"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })];
                                }, callContext, idService, "1")
                            },
                            _dependencies: [asPrimitiveValue(model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).productIdentifierAttr), asPrimitiveValue(model.variables.createdDXTradeAccountsVar), asPrimitiveValue(model.variables.createdCTraderAccountsVar), asPrimitiveValue(model.variables.createdMT5AccountsVar)]
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            style: "display-flex align-items-center justify-content-space-between",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "AvailableAccountsHeader"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: [$text(getTranslation("6IiGdsEYP06nsIpsfm4H7Q#Value", "Available accounts"))],
                            _idProps: {
                                service: idService,
                                uuid: "15"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.viewSpecificationsOnClick$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            gridProperties: {
                                classes: "ThemeGrid_Width6"
                            },
                            style: "display-flex align-items-center justify-content-flex-end cursor-pointer",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "ViewSpecifications"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 12px;"
                            },
                            text: [$text(getTranslation("9BsPulIcxkWQTPWK3dNX0A#Value", "View specifications"))],
                            _idProps: {
                                service: idService,
                                uuid: "17"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Icon, {
                            gridProperties: {
                                marginLeft: "4.5px"
                            },
                            icon: "angle-right",
                            iconSize: /*FontSize*/ 0,
                            style: "icon",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "18"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), React.createElement(OSWidgets.List, {
                            animateItems: false,
                            extendedProperties: {
                                "disable-virtualization": "True"
                            },
                            mode: /*Default*/ 0,
                            source: model.variables.availableCFDAccountsVar,
                            style: "available-accounts__container",
                            tag: "div",
                            _idProps: {
                                service: idService,
                                name: "AvailableAccountsCardsList"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new IteratorPlaceholderContent(function(idService, callContext) {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "20"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: [asPrimitiveValue(model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).productIdentifierAttr), asPrimitiveValue(model.variables.selectedProductVar), asPrimitiveValue(model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).productIdentifierAttr), asPrimitiveValue(model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).titleAttr), asPrimitiveValue(model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).descriptionAttr), asPrimitiveValue(model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).iconAttr), asPrimitiveValue(model.variables.isLoadingVar)]
                                    }, $if(model.variables.isLoadingVar, false, this, function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            style: "skeleton available-accounts-loader",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "21"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        })];
                                    }, function() {
                                        return [React.createElement(tradershub_CFDBlocks_CFDTradingAppCard_mvc_view, {
                                            getOwnerSpan: function() {
                                                return _this.getChildSpan("render");
                                            },
                                            getOwnerDisposeSpan: function() {
                                                return _this.getChildSpan("destroy");
                                            },
                                            inputs: {
                                                ProductIcon: model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).iconAttr,
                                                ProductDescription: model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).descriptionAttr,
                                                Name: model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).titleAttr,
                                                SelectedProductArg: model.variables.selectedProductVar,
                                                Variant: "Small"
                                            },
                                            events: {
                                                _handleError: function(ex) {
                                                    controller.handleError(ex);
                                                },
                                                onClickAvailableAccount$Action: function() {
                                                    return Promise.resolve().then(function() {
                                                        var eventHandlerContext = callContext.clone();
                                                        return controller.onClickAvailableAccount$Action(model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).productIdentifierAttr, controller.callContext(eventHandlerContext));
                                                    });;
                                                },
                                                onClickCreatedAccount$Action: function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    controller.onClickCreatedAccount$Action(model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).productIdentifierAttr, controller.callContext(eventHandlerContext));

                                                    ;
                                                }
                                            },
                                            _validationProps: {
                                                validationService: validationService
                                            },
                                            _idProps: {
                                                service: idService,
                                                uuid: "22",
                                                alias: "6"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        })];
                                    }))];
                                }, callContext, idService, "2")
                            },
                            _dependencies: [asPrimitiveValue(model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).productIdentifierAttr), asPrimitiveValue(model.variables.selectedProductVar), asPrimitiveValue(model.variables.isLoadingVar)]
                        }), React.createElement(tradershub_CFDBlocks_CFDTradeModal_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                CreatedDxtradeAccounts: model.variables.createdDXTradeAccountsVar,
                                CreatedCtraderAccounts: model.variables.createdCTraderAccountsVar,
                                SelectedProductArg: tradershubClientVariables.getSelectedProduct(),
                                IsVisible: (((tradershubClientVariables.getSelectedProduct()) !== ("")) && model.variables.showTradePopupVar),
                                CreatedMt5Accounts: model.variables.createdMT5AccountsVar
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                onCloseClick$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.cFDTradeModalOnCloseClick$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "23",
                                alias: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), React.createElement(tradershub_CFDBlocks_CFDPasswordModal_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                IsVisible: model.variables.showPasswordPopupVar,
                                isPasswordSet: model.variables.isPasswordSetVar,
                                SelectedPlatform: model.variables.selectedProductVar
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                onCloseClick$Action: function() {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return controller.onClickAvailableAccount$Action(model.variables.selectedProductVar, controller.callContext(eventHandlerContext));
                                    });;
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
                        }), React.createElement(tradershub_MainFlowBlocks_EmptyPlatformModal_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                IsVisible: model.variables.showWarningPopupVar
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
                                uuid: "25",
                                alias: "9"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.showWarningPopupVar), asPrimitiveValue(model.variables.isPasswordSetVar), asPrimitiveValue(model.variables.showPasswordPopupVar), asPrimitiveValue(model.variables.showTradePopupVar), asPrimitiveValue(model.variables.selectedProductVar), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.availableCFDAccountsVar), asPrimitiveValue(model.variables.createdDXTradeAccountsVar), asPrimitiveValue(model.variables.createdCTraderAccountsVar), asPrimitiveValue(model.variables.createdMT5AccountsVar), asPrimitiveValue(model.variables.createdCFDAccountsVar), asPrimitiveValue(tradershubClientVariables.getAuthToken())]
            }));
        }
    }

    return View;
});
define("tradershub.CFDFlows.CFDs.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "BrowserConsoleLogging.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.CFDFlows.CFDs.mvc$translationsResources", "tradershub.CFDFlows.controller", "tradershub.CFDFlows.CFDs.mvc$controller.OnClickAvailableAccount.GetSelectedPlatformJS", "tradershub.CFDFlows.CFDs.mvc$controller.OnClickAvailableAccount.CheckIsPasswordSetJS", "tradershub.CFDFlows.CFDs.mvc$controller.GetCreatedCFDAccounts.ModifyDataJS", "tradershub.CFDFlows.CFDs.mvc$controller.CTraderAccountCreation.PayloadJS", "tradershub.CFDFlows.CFDs.mvc$controller.GetAvailableCFDAccounts.ModifyDataJS", "tradershub.model$EN_8212284ed6913c62a123b32716b72fbaEntityRecord", "tradershub.model$RL_9eb97ad6cb81943972e368260e0cb936", "RESTAPIWebsocketOfficial.model$ST_2f457e0a5b13526850516eea23ae0e9aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_75725e65d106c1568a850780233a08baStructure", "RESTAPIWebsocketOfficial.model$ST_1e4e8e93f82bd7d0c82446a55ed8dee2Structure", "RESTAPIWebsocketOfficial.model$ST_2361699202fda01d7c8ade7cab583650Structure", "tradershub.model$RL_d214456dc511920f517885542ecb318a", "RESTAPIWebsocketOfficial.model$ST_605da9a1009ce00d8c64718f9c13e284Structure", "RESTAPIWebsocketOfficial.model$ST_b3b8308da7c5dcdc42b3f87ca949eb8cStructure", "RESTAPIWebsocketOfficial.model$ST_13505e54da5ba49238f8f2a40834f63fStructure", "RESTAPIWebsocketOfficial.model$ST_b96e8d04448b693f79e4aebf0b6ee4fbStructure", "RESTAPIWebsocketOfficial.model$ST_4dc58b9edb8582c76248b762d6650913Structure", "RESTAPIWebsocketOfficial.model$ST_8517d9c8b73e866553a1a7b806af5079Structure", "RESTAPIWebsocketOfficial.model$ST_f1644d81fb90e6f4882b198c996831d1Structure", "RESTAPIWebsocketOfficial.model$ST_a64a97da9ee822b4b21c919739567011Structure", "tradershub.model$RL_d2e8d01cb1d1df6bef4310379df28149", "tradershub.controller$GetWebsiteStatus", "tradershub.model$RC_07be8d7193ba16b1cc9d953b8fa48e9d", "tradershub.model$RL_ee1664da44e6893a731536d754684359", "BrowserConsoleLogging.controller$ConsoleLog", "tradershub.referencesHealth$BrowserConsoleLogging", "RESTAPIWebsocketOfficial.model$ST_746d074ddcc08e0df3b269ffb1933d5aStructure", "tradershub.controller$GetAccountStatus2", "tradershub.controller$TradingPlatformAccounts", "tradershub.controller$MT5LoginList", "tradershub.controller$DerivApiSendMessage", "tradershub.controller$FeatureFlagValueByName", "tradershub.model$ST_8907948f85abfce9f41b7aac6149d55eStructure", "tradershub.controller$MT5AvailableAccounts", "tradershub.model$ST_3c6ba624991ba71a1d179d7c7ef27261Structure", "tradershub.controller$DxtradeAvailableAccounts", "tradershub.controller$CTraderAvailableAccounts"], function(OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, BrowserConsoleLoggingController, tradershubLanguageResources, tradershubClientVariables, tradershub_CFDFlows_CFDs_mvc_TranslationsResources, tradershub_CFDFlowsController, tradershub_CFDFlows_CFDs_mvc_controller_OnClickAvailableAccount_GetSelectedPlatformJS, tradershub_CFDFlows_CFDs_mvc_controller_OnClickAvailableAccount_CheckIsPasswordSetJS, tradershub_CFDFlows_CFDs_mvc_controller_GetCreatedCFDAccounts_ModifyDataJS, tradershub_CFDFlows_CFDs_mvc_controller_CTraderAccountCreation_PayloadJS, tradershub_CFDFlows_CFDs_mvc_controller_GetAvailableCFDAccounts_ModifyDataJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, tradershub_CFDFlows_CFDs_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {
                    getCfdProductConfigs$AggrRefresh: 0
                };
                this.dataFetchDependentsGraph = {
                    getCfdProductConfigs$AggrRefresh: []
                };
                this.shouldSendClientVarsToDataSources = false;
            }

            // Server Actions - Methods

            // Aggregates and Data Actions
            get getCfdProductConfigs$AggrRefresh() {
                if (!(this.hasOwnProperty("_getCfdProductConfigs$AggrRefresh"))) {
                    this._getCfdProductConfigs$AggrRefresh = function() {
                        var innerBody = function(maxRecords, startIndex, callContext) {
                            var model = this.model;
                            var controller = this.controller;
                            var callContext = controller.callContext(callContext);
                            return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetCfdProductConfigs", "screenservices/tradershub/CFDFlows/CFDs/ScreenDataSetGetCfdProductConfigs", "bDB0nbNBDtJBnQRqX4xwyQ", maxRecords, startIndex, function(b) {
                                model.variables.getCfdProductConfigsAggr.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.getCfdProductConfigsAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getCfdProductConfigsAggr.constructor));
                            }, undefined, undefined, undefined, callContext, undefined, true).then(function() {
                                return controller._onAfterFetch$Action(controller.callContext(callContext));
                            });
                        }.bind(this);
                        return OS.Logger.startActiveSpan("GetCfdProductConfigs", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetCfdProductConfigs");
                                span.setAttribute("outsystems.function.key", "4275344c-a827-4e2f-b845-c479008f53c8");
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

                return this._getCfdProductConfigs$AggrRefresh;
            }
            set getCfdProductConfigs$AggrRefresh(value) {
                this._getCfdProductConfigs$AggrRefresh = value;
            }


            get dataFetchActionNames() {
                if (!(this.hasOwnProperty("_dataFetchActionNames"))) {
                    this._dataFetchActionNames = ["getCfdProductConfigs$AggrRefresh"];
                }

                return this._dataFetchActionNames;
            }
            set dataFetchActionNames(value) {
                this._dataFetchActionNames = value;
            }

            // Client Actions - Methods
            get _onAfterFetch$Action() {
                if (!(this.hasOwnProperty("__onAfterFetch$Action"))) {
                    this.__onAfterFetch$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnAfterFetch", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnAfterFetch");
                                span.setAttribute("outsystems.function.key", "090e2e30-16a7-4f2b-a90e-66b3c27a341c");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnAfterFetch");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    // IsLoading = True
                                    model.variables.isLoadingVar = true;
                                    // AvailableCFDAccounts = GetCfdProductConfigs.List
                                    model.variables.availableCFDAccountsVar = OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getCfdProductConfigsAggr.listOut, new tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936(), function(source, target) {
                                        target = source.cfdProductConfigAttr;
                                        return target;
                                    });
                                    // HasToken
                                    return OS.Flow.executeSequence(function() {
                                        if ((((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
                                            // Execute Action: GetCreatedCFDAccounts
                                            return controller._getCreatedCFDAccounts$Action(callContext);
                                        } else {
                                            // Execute Action: GetWebsiteStatus
                                            model.flush();
                                            return tradershubController.default.getWebsiteStatus$Action(callContext);
                                        }

                                    }).then(function() {
                                        // Execute Action: GetAvailableCFDAccounts
                                        return controller._getAvailableCFDAccounts$Action(callContext);
                                    }).then(function() {
                                        if (((model.variables.availableCFDAccountsVar.isEmpty && (tradershubClientVariables.getAuthToken() === OS.BuiltinFunctions.nullTextIdentifier())))) {
                                            // AvailableCFDAccounts = GetCfdProductConfigs.List
                                            model.variables.availableCFDAccountsVar = OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getCfdProductConfigsAggr.listOut, new tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936(), function(source, target) {
                                                target = source.cfdProductConfigAttr;
                                                return target;
                                            });
                                            if ((!(tradershubClientVariables.getConfirmedNotResident()))) {
                                                // ShowWarningPopup = True
                                                model.variables.showWarningPopupVar = true;
                                            }

                                            // IsLoading = False
                                            model.variables.isLoadingVar = false;
                                        } else {
                                            // IsLoading = False
                                            model.variables.isLoadingVar = false;
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

                return this.__onAfterFetch$Action;
            }
            set _onAfterFetch$Action(value) {
                this.__onAfterFetch$Action = value;
            }

            get _cFDTradeModalOnCloseClick$Action() {
                if (!(this.hasOwnProperty("__cFDTradeModalOnCloseClick$Action"))) {
                    this.__cFDTradeModalOnCloseClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("CFDTradeModalOnCloseClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "CFDTradeModalOnCloseClick");
                                span.setAttribute("outsystems.function.key", "17b39b9c-ca7a-43c9-83db-0cc7b7d4eb1b");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("CFDTradeModalOnCloseClick");
                                callContext = controller.callContext(callContext);
                                // ShowTradePopup = notShowTradePopup
                                model.variables.showTradePopupVar = !(model.variables.showTradePopupVar);
                                // SelectedProduct = ""
                                model.variables.selectedProductVar = "";
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__cFDTradeModalOnCloseClick$Action;
            }
            set _cFDTradeModalOnCloseClick$Action(value) {
                this.__cFDTradeModalOnCloseClick$Action = value;
            }

            get _onClickAvailableAccount$Action() {
                if (!(this.hasOwnProperty("__onClickAvailableAccount$Action"))) {
                    this.__onClickAvailableAccount$Action = function(selectedProductPropIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickAvailableAccount", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickAvailableAccount");
                                span.setAttribute("outsystems.function.key", "1ba8e006-660e-4c99-9e0b-36382638d2ca");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnClickAvailableAccount");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.CFDFlows.CFDs.OnClickAvailableAccount$vars"))());
                                vars.value.selectedProductPropInLocal = selectedProductPropIn;
                                var getAccountStatusVar = new OS.DataTypes.VariableHolder();
                                var getSelectedPlatformJSResult = new OS.DataTypes.VariableHolder();
                                var checkIsPasswordSetJSResult = new OS.DataTypes.VariableHolder();
                                var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONSerializeAvailableAccountsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONSerializeCreatedAccountsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                return OS.Flow.executeAsyncFlow(function() {
                                    // isLoggedIn
                                    return OS.Flow.executeSequence(function() {
                                        if ((((tradershubClientVariables.getAuthToken()) !== ("")))) {
                                            // Execute Action: GetAccountStatus
                                            model.flush();
                                            return tradershubController.default.getAccountStatus2$Action(callContext).then(function(value) {
                                                getAccountStatusVar.value = value;
                                            }).then(function() {
                                                // JSON Serialize: JSONSerialize1
                                                jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(getAccountStatusVar.value.responseOut, false, false);
                                                checkIsPasswordSetJSResult.value = OS.Logger.startActiveSpan("CheckIsPasswordSet", function(span) {
                                                    if (span) {
                                                        span.setAttribute("code.function", "CheckIsPasswordSet");
                                                        span.setAttribute("outsystems.function.key", "e41550e7-1f1e-478e-86af-62ffe51535f6");
                                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                                    }

                                                    try {
                                                        return controller.safeExecuteJSNode(tradershub_CFDFlows_CFDs_mvc_controller_OnClickAvailableAccount_CheckIsPasswordSetJS, "CheckIsPasswordSet", "OnClickAvailableAccount", {
                                                            SelectedPlatform: OS.DataConversion.JSNodeParamConverter.to(model.variables.selectedProductVar, OS.DataTypes.DataTypes.Text),
                                                            AccountStatusRes: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize1Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                            isMt5PasswordSet: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
                                                            isDxtradePasswordSet: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
                                                            isPasswordSet: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                                                        }, function($parameters) {
                                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.CFDFlows.CFDs.OnClickAvailableAccount$checkIsPasswordSetJSResult"))();
                                                            jsNodeResult.isMt5PasswordSetOut = OS.DataConversion.JSNodeParamConverter.from($parameters.isMt5PasswordSet, OS.DataTypes.DataTypes.Boolean);
                                                            jsNodeResult.isDxtradePasswordSetOut = OS.DataConversion.JSNodeParamConverter.from($parameters.isDxtradePasswordSet, OS.DataTypes.DataTypes.Boolean);
                                                            jsNodeResult.isPasswordSetOut = OS.DataConversion.JSNodeParamConverter.from($parameters.isPasswordSet, OS.DataTypes.DataTypes.Boolean);
                                                            return jsNodeResult;
                                                        }, {}, {});
                                                    } finally {
                                                        if (span) {
                                                            span.end();
                                                        }

                                                    }

                                                }, 1);
                                                getSelectedPlatformJSResult.value = OS.Logger.startActiveSpan("GetSelectedPlatform", function(span) {
                                                    if (span) {
                                                        span.setAttribute("code.function", "GetSelectedPlatform");
                                                        span.setAttribute("outsystems.function.key", "42c0a0d0-acad-4f79-bd70-8ed73acedb0a");
                                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                                    }

                                                    try {
                                                        return controller.safeExecuteJSNode(tradershub_CFDFlows_CFDs_mvc_controller_OnClickAvailableAccount_GetSelectedPlatformJS, "GetSelectedPlatform", "OnClickAvailableAccount", {
                                                            SelectedPlatformInput: OS.DataConversion.JSNodeParamConverter.to(vars.value.selectedProductPropInLocal, OS.DataTypes.DataTypes.Text),
                                                            Platform: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                                        }, function($parameters) {
                                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.CFDFlows.CFDs.OnClickAvailableAccount$getSelectedPlatformJSResult"))();
                                                            jsNodeResult.platformOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Platform, OS.DataTypes.DataTypes.Text);
                                                            return jsNodeResult;
                                                        }, {}, {});
                                                    } finally {
                                                        if (span) {
                                                            span.end();
                                                        }

                                                    }

                                                }, 1);
                                                // SetSelectedPatform
                                                // SelectedProduct = GetSelectedPlatform.Platform
                                                model.variables.selectedProductVar = getSelectedPlatformJSResult.value.platformOut;
                                                // IsPasswordSet = If
                                                model.variables.isPasswordSetVar = (((model.variables.selectedProductVar === "mt5")) ? (checkIsPasswordSetJSResult.value.isMt5PasswordSetOut) : (checkIsPasswordSetJSResult.value.isDxtradePasswordSetOut));
                                            }).then(function() {
                                                // isCtrader?
                                                return OS.Flow.executeSequence(function() {
                                                    if (((getSelectedPlatformJSResult.value.platformOut === "ctrader"))) {
                                                        // Execute Action: CTraderAccountCreation
                                                        return controller._cTraderAccountCreation$Action(callContext).then(function() {
                                                            OS.FeedbackMessageService.showFeedbackMessage("ctrader no password modal, just create account", /*Info*/ 0);
                                                        });
                                                    } else {
                                                        // TogglePasswordModal
                                                        // ShowPasswordPopup = notShowPasswordPopup
                                                        model.variables.showPasswordPopupVar = !(model.variables.showPasswordPopupVar);
                                                        // Execute Action: ConsoleLog2
                                                        BrowserConsoleLoggingController.default.consoleLog$Action("mt5 and dxtrade need to go through password modal to create account", 0, callContext);
                                                    }

                                                });
                                            });
                                        } else {
                                            // JSON Serialize: JSONSerializeAvailableAccounts
                                            jSONSerializeAvailableAccountsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.availableCFDAccountsVar, false, false);
                                            // JSON Serialize: JSONSerializeCreatedAccounts
                                            jSONSerializeCreatedAccountsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.createdCFDAccountsVar, false, false);
                                            // Destination: /tradershub/TradingSpecification
                                            return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "TradingSpecification", {
                                                CreatedCFDAccounts: OS.DataConversion.ServerDataConverter.to(jSONSerializeCreatedAccountsVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                AvailableCFDAccounts: OS.DataConversion.ServerDataConverter.to(jSONSerializeAvailableAccountsVar.value.jSONOut, OS.DataTypes.DataTypes.Text)
                                            }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
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

                return this.__onClickAvailableAccount$Action;
            }
            set _onClickAvailableAccount$Action(value) {
                this.__onClickAvailableAccount$Action = value;
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
                                span.setAttribute("outsystems.function.key", "1e5e72a5-2776-4577-ba80-d672429fa1b8");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("SetRealValue");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    // AccountType = "real"
                                    tradershubClientVariables.setAccountType("real");
                                    // DemoLoginId = ""
                                    tradershubClientVariables.setDemoLoginId("");
                                    // IsLoading = True
                                    model.variables.isLoadingVar = true;
                                    // Execute Action: SetCreatedCFDAccounts
                                    controller._setCreatedCFDAccounts$Action(callContext);
                                    // Execute Action: GetAvailableCFDAccounts
                                    return controller._getAvailableCFDAccounts$Action(callContext).then(function() {
                                        // IsLoading = False
                                        model.variables.isLoadingVar = false;
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

            get _setDemoValue$Action() {
                if (!(this.hasOwnProperty("__setDemoValue$Action"))) {
                    this.__setDemoValue$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SetDemoValue", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SetDemoValue");
                                span.setAttribute("outsystems.function.key", "32d24107-eabc-4567-ac09-5e6965a9b15a");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("SetDemoValue");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    // AccountType = "demo"
                                    tradershubClientVariables.setAccountType("demo");
                                    // IsLoading = True
                                    model.variables.isLoadingVar = true;
                                    // Execute Action: SetCreatedCFDAccounts
                                    controller._setCreatedCFDAccounts$Action(callContext);
                                    // Execute Action: GetAvailableCFDAccounts
                                    return controller._getAvailableCFDAccounts$Action(callContext).then(function() {
                                        // IsLoading = False
                                        model.variables.isLoadingVar = false;
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

            get _onClickCreatedAccount$Action() {
                if (!(this.hasOwnProperty("__onClickCreatedAccount$Action"))) {
                    this.__onClickCreatedAccount$Action = function(selectedProductPropIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickCreatedAccount", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickCreatedAccount");
                                span.setAttribute("outsystems.function.key", "3e1c8e4d-a595-4d0e-8434-8b0cfb23a30b");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickCreatedAccount");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.CFDFlows.CFDs.OnClickCreatedAccount$vars"))());
                                vars.value.selectedProductPropInLocal = selectedProductPropIn;
                                // SetSelectedProduct
                                // SelectedProduct = SelectedProductProp
                                model.variables.selectedProductVar = vars.value.selectedProductPropInLocal;
                                // SelectedProduct = SelectedProductProp
                                tradershubClientVariables.setSelectedProduct(vars.value.selectedProductPropInLocal);
                                // ToggleTradeModal
                                // ShowTradePopup = True
                                model.variables.showTradePopupVar = true;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickCreatedAccount$Action;
            }
            set _onClickCreatedAccount$Action(value) {
                this.__onClickCreatedAccount$Action = value;
            }

            get _getCreatedCFDAccounts$Action() {
                if (!(this.hasOwnProperty("__getCreatedCFDAccounts$Action"))) {
                    this.__getCreatedCFDAccounts$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("GetCreatedCFDAccounts", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetCreatedCFDAccounts");
                                span.setAttribute("outsystems.function.key", "59ceace1-7209-46c3-9fd7-76c2659d1fef");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("GetCreatedCFDAccounts");
                                callContext = controller.callContext(callContext);
                                var cTraderTradingPlatformAccountsVar = new OS.DataTypes.VariableHolder();
                                var dxtradeTradingPlatformAccountsVar = new OS.DataTypes.VariableHolder();
                                var mT5LoginListVar = new OS.DataTypes.VariableHolder();
                                var modifyDataJSResult = new OS.DataTypes.VariableHolder();
                                var jSONSerializeDXTradingVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONSerializeCTraderVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONSerializeMT5LoginListVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONSerializeCFDConfigVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: MT5LoginList
                                    model.flush();
                                    return tradershubController.default.mT5LoginList$Action(callContext).then(function(value) {
                                        mT5LoginListVar.value = value;
                                    }).then(function() {
                                        // JSON Serialize: JSONSerializeMT5LoginList
                                        jSONSerializeMT5LoginListVar.value.jSONOut = OS.JSONUtils.serializeToJSON(mT5LoginListVar.value.responseOut, false, false);
                                        // Execute Action: CTraderTradingPlatformAccounts
                                        model.flush();
                                        return tradershubController.default.tradingPlatformAccounts$Action("ctrader", callContext).then(function(value) {
                                            cTraderTradingPlatformAccountsVar.value = value;
                                        });
                                    }).then(function() {
                                        // JSON Serialize: JSONSerializeCTrader
                                        jSONSerializeCTraderVar.value.jSONOut = OS.JSONUtils.serializeToJSON(cTraderTradingPlatformAccountsVar.value.responseOut, false, false);
                                        // Execute Action: DxtradeTradingPlatformAccounts
                                        model.flush();
                                        return tradershubController.default.tradingPlatformAccounts$Action("dxtrade", callContext).then(function(value) {
                                            dxtradeTradingPlatformAccountsVar.value = value;
                                        });
                                    }).then(function() {
                                        // JSON Serialize: JSONSerializeDXTrading
                                        jSONSerializeDXTradingVar.value.jSONOut = OS.JSONUtils.serializeToJSON(dxtradeTradingPlatformAccountsVar.value.responseOut, false, false);
                                        // CreatedMT5Accounts = MT5LoginList.Response
                                        model.variables.createdMT5AccountsVar = mT5LoginListVar.value.responseOut;
                                        // CreatedCTraderAccounts = CTraderTradingPlatformAccounts.Response
                                        model.variables.createdCTraderAccountsVar = cTraderTradingPlatformAccountsVar.value.responseOut;
                                        // CreatedDXTradeAccounts = DxtradeTradingPlatformAccounts.Response
                                        model.variables.createdDXTradeAccountsVar = dxtradeTradingPlatformAccountsVar.value.responseOut;
                                        // JSON Serialize: JSONSerializeCFDConfig
                                        jSONSerializeCFDConfigVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.getCfdProductConfigsAggr.listOut, false, false);
                                        modifyDataJSResult.value = OS.Logger.startActiveSpan("ModifyData", function(span) {
                                            if (span) {
                                                span.setAttribute("code.function", "ModifyData");
                                                span.setAttribute("outsystems.function.key", "7593922f-5e59-4f5d-991b-ac3825b47db4");
                                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                            }

                                            try {
                                                return controller.safeExecuteJSNode(tradershub_CFDFlows_CFDs_mvc_controller_GetCreatedCFDAccounts_ModifyDataJS, "ModifyData", "GetCreatedCFDAccounts", {
                                                    DXTradeResponse: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeDXTradingVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                    CFDConfig: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeCFDConfigVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                    MT5Response: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeMT5LoginListVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                    CTraderResponse: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeCTraderVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                    RealResponse: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                                    DemoResponse: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                                }, function($parameters) {
                                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.CFDFlows.CFDs.GetCreatedCFDAccounts$modifyDataJSResult"))();
                                                    jsNodeResult.realResponseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.RealResponse, OS.DataTypes.DataTypes.Text);
                                                    jsNodeResult.demoResponseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DemoResponse, OS.DataTypes.DataTypes.Text);
                                                    return jsNodeResult;
                                                }, {}, {});
                                            } finally {
                                                if (span) {
                                                    span.end();
                                                }

                                            }

                                        }, 1);
                                        // CreatedCFDRealAccounts = ModifyData.RealResponse
                                        tradershubClientVariables.setCreatedCFDRealAccounts(modifyDataJSResult.value.realResponseOut);
                                        // CreatedCFDDemoAccounts = ModifyData.DemoResponse
                                        tradershubClientVariables.setCreatedCFDDemoAccounts(modifyDataJSResult.value.demoResponseOut);
                                        // Execute Action: SetCreatedCFDAccounts
                                        controller._setCreatedCFDAccounts$Action(callContext);
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

                return this.__getCreatedCFDAccounts$Action;
            }
            set _getCreatedCFDAccounts$Action(value) {
                this.__getCreatedCFDAccounts$Action = value;
            }

            get _setCreatedCFDAccounts$Action() {
                if (!(this.hasOwnProperty("__setCreatedCFDAccounts$Action"))) {
                    this.__setCreatedCFDAccounts$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SetCreatedCFDAccounts", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SetCreatedCFDAccounts");
                                span.setAttribute("outsystems.function.key", "8289199c-b9c5-4714-a486-6351274119d6");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SetCreatedCFDAccounts");
                                callContext = controller.callContext(callContext);
                                var jSONDeserializeRealResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936))());
                                var jSONDeserializeDemoResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936))());
                                // JSON Deserialize: JSONDeserializeRealResponse
                                jSONDeserializeRealResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(tradershubClientVariables.getCreatedCFDRealAccounts(), tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936, false);
                                // JSON Deserialize: JSONDeserializeDemoResponse
                                jSONDeserializeDemoResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(tradershubClientVariables.getCreatedCFDDemoAccounts(), tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936, false);
                                // IsRealAccount
                                if (((tradershubClientVariables.getAccountType() === "real"))) {
                                    // CreatedCFDAccounts = JSONDeserializeRealResponse.Data
                                    model.variables.createdCFDAccountsVar = jSONDeserializeRealResponseVar.value.dataOut;
                                } else {
                                    // CreatedCFDAccounts = JSONDeserializeDemoResponse.Data
                                    model.variables.createdCFDAccountsVar = jSONDeserializeDemoResponseVar.value.dataOut;
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__setCreatedCFDAccounts$Action;
            }
            set _setCreatedCFDAccounts$Action(value) {
                this.__setCreatedCFDAccounts$Action = value;
            }

            get _cTraderAccountCreation$Action() {
                if (!(this.hasOwnProperty("__cTraderAccountCreation$Action"))) {
                    this.__cTraderAccountCreation$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("CTraderAccountCreation", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "CTraderAccountCreation");
                                span.setAttribute("outsystems.function.key", "8e5a6d75-d480-4161-aaac-c8aace38be01");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("CTraderAccountCreation");
                                callContext = controller.callContext(callContext);
                                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                                var payloadJSResult = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    payloadJSResult.value = OS.Logger.startActiveSpan("Payload", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "Payload");
                                            span.setAttribute("outsystems.function.key", "16e360f4-e4c8-4cfa-9395-14b0448ffb72");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(tradershub_CFDFlows_CFDs_mvc_controller_CTraderAccountCreation_PayloadJS, "Payload", "CTraderAccountCreation", {
                                                AccountType: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getAccountType(), OS.DataTypes.DataTypes.Text),
                                                Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {
                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.CFDFlows.CFDs.CTraderAccountCreation$payloadJSResult"))();
                                                jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                                return jsNodeResult;
                                            }, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                    // Execute Action: DerivApiSendMessage
                                    model.flush();
                                    return tradershubController.default.derivApiSendMessage$Action(payloadJSResult.value.payloadOut, "trading_platform_new_account", true, callContext).then(function(value) {
                                        derivApiSendMessageVar.value = value;
                                    }).then(function() {
                                        // Execute Action: ConsoleLog
                                        BrowserConsoleLoggingController.default.consoleLog$Action(derivApiSendMessageVar.value.responseOut, 0, callContext);
                                        // ShowTradePopup = True
                                        model.variables.showTradePopupVar = true;
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

                return this.__cTraderAccountCreation$Action;
            }
            set _cTraderAccountCreation$Action(value) {
                this.__cTraderAccountCreation$Action = value;
            }

            get _viewSpecificationsOnClick$Action() {
                if (!(this.hasOwnProperty("__viewSpecificationsOnClick$Action"))) {
                    this.__viewSpecificationsOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ViewSpecificationsOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ViewSpecificationsOnClick");
                                span.setAttribute("outsystems.function.key", "a1f185b0-132c-4779-8f19-68f682455a91");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("ViewSpecificationsOnClick");
                                callContext = controller.callContext(callContext);
                                var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONSerialize2Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                // JSON Serialize: JSONSerialize1
                                jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.availableCFDAccountsVar, false, false);
                                // JSON Serialize: JSONSerialize2
                                jSONSerialize2Var.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.createdCFDAccountsVar, false, false);
                                // Destination: /tradershub/TradingSpecification
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "TradingSpecification", {
                                    CreatedCFDAccounts: OS.DataConversion.ServerDataConverter.to(jSONSerialize2Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                    AvailableCFDAccounts: OS.DataConversion.ServerDataConverter.to(jSONSerialize1Var.value.jSONOut, OS.DataTypes.DataTypes.Text)
                                }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__viewSpecificationsOnClick$Action;
            }
            set _viewSpecificationsOnClick$Action(value) {
                this.__viewSpecificationsOnClick$Action = value;
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
                                span.setAttribute("outsystems.function.key", "cbd5168b-3bc2-43c6-b28d-49c1706f772f");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("confirmedNotResidentOnClick");
                                callContext = controller.callContext(callContext);
                                // ConfirmedNotResident = True
                                tradershubClientVariables.setConfirmedNotResident(true);
                                // ShowWarningPopup = False
                                model.variables.showWarningPopupVar = false;
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

            get _onInitialize$Action() {
                if (!(this.hasOwnProperty("__onInitialize$Action"))) {
                    this.__onInitialize$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnInitialize", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnInitialize");
                                span.setAttribute("outsystems.function.key", "f45d0f6c-4310-4e19-a1f7-9505f68addb0");
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

                                if ((!(featureFlagValueByNameVar.value.isEnabledOut))) {
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

            get _getAvailableCFDAccounts$Action() {
                if (!(this.hasOwnProperty("__getAvailableCFDAccounts$Action"))) {
                    this.__getAvailableCFDAccounts$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("GetAvailableCFDAccounts", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetAvailableCFDAccounts");
                                span.setAttribute("outsystems.function.key", "ff601baa-7dfc-4ecd-9a47-136422be6576");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("GetAvailableCFDAccounts");
                                callContext = controller.callContext(callContext);
                                var mT5AvailableAccountsVar = new OS.DataTypes.VariableHolder();
                                var dxtradeAvailableAccountsVar = new OS.DataTypes.VariableHolder();
                                var cTraderAvailableAccountsVar = new OS.DataTypes.VariableHolder();
                                var modifyDataJSResult = new OS.DataTypes.VariableHolder();
                                var cfdProductConfigsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var createdCFDAccountVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONSerializeMT5Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONSerializeCTraderVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONSerializeDxtradeVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONDeserializeModifyDataVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936))());
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: MT5AvailableAccounts
                                    model.flush();
                                    return tradershubController.default.mT5AvailableAccounts$Action(callContext).then(function(value) {
                                        mT5AvailableAccountsVar.value = value;
                                    }).then(function() {
                                        // JSON Serialize: JSONSerializeMT5
                                        jSONSerializeMT5Var.value.jSONOut = OS.JSONUtils.serializeToJSON(mT5AvailableAccountsVar.value.responseOut, false, false);
                                        // Execute Action: CTraderAvailableAccounts
                                        model.flush();
                                        return tradershubController.default.cTraderAvailableAccounts$Action(callContext).then(function(value) {
                                            cTraderAvailableAccountsVar.value = value;
                                        });
                                    }).then(function() {
                                        // JSON Serialize: JSONSerializeCTrader
                                        jSONSerializeCTraderVar.value.jSONOut = OS.JSONUtils.serializeToJSON(cTraderAvailableAccountsVar.value.responseOut, false, false);
                                        // Execute Action: DxtradeAvailableAccounts
                                        model.flush();
                                        return tradershubController.default.dxtradeAvailableAccounts$Action(callContext).then(function(value) {
                                            dxtradeAvailableAccountsVar.value = value;
                                        });
                                    }).then(function() {
                                        // JSON Serialize: JSONSerializeDxtrade
                                        jSONSerializeDxtradeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(dxtradeAvailableAccountsVar.value.responseOut, false, false);
                                        // JSON Serialize: CfdProductConfigs
                                        cfdProductConfigsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.getCfdProductConfigsAggr.listOut, false, false);
                                        // JSON Serialize: CreatedCFDAccount
                                        createdCFDAccountVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.createdCFDAccountsVar, false, false);
                                        modifyDataJSResult.value = OS.Logger.startActiveSpan("ModifyData", function(span) {
                                            if (span) {
                                                span.setAttribute("code.function", "ModifyData");
                                                span.setAttribute("outsystems.function.key", "eb1e3c27-ff49-4a75-8a49-e19c1dc1601e");
                                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                            }

                                            try {
                                                return controller.safeExecuteJSNode(tradershub_CFDFlows_CFDs_mvc_controller_GetAvailableCFDAccounts_ModifyDataJS, "ModifyData", "GetAvailableCFDAccounts", {
                                                    CTraderResponse: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeCTraderVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                    DxtradeResponse: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeDxtradeVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                    MT5Response: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeMT5Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                    CreatedAccounts: OS.DataConversion.JSNodeParamConverter.to(createdCFDAccountVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                    CFDConfig: OS.DataConversion.JSNodeParamConverter.to(cfdProductConfigsVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                    FilteredAvailableAccounts: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                                }, function($parameters) {
                                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.CFDFlows.CFDs.GetAvailableCFDAccounts$modifyDataJSResult"))();
                                                    jsNodeResult.filteredAvailableAccountsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FilteredAvailableAccounts, OS.DataTypes.DataTypes.Text);
                                                    return jsNodeResult;
                                                }, {}, {});
                                            } finally {
                                                if (span) {
                                                    span.end();
                                                }

                                            }

                                        }, 1);
                                        // JSON Deserialize: JSONDeserializeModifyData
                                        jSONDeserializeModifyDataVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(modifyDataJSResult.value.filteredAvailableAccountsOut, tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936, false);
                                        // AvailableCFDAccounts = JSONDeserializeModifyData.Data
                                        model.variables.availableCFDAccountsVar = jSONDeserializeModifyDataVar.value.dataOut;
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

                return this.__getAvailableCFDAccounts$Action;
            }
            set _getAvailableCFDAccounts$Action(value) {
                this.__getAvailableCFDAccounts$Action = value;
            }


            onAfterFetch$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnAfterFetch__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnAfterFetch");
                        span.setAttribute("outsystems.function.key", "090e2e30-16a7-4f2b-a90e-66b3c27a341c");
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

            cFDTradeModalOnCloseClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("CFDTradeModalOnCloseClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "CFDTradeModalOnCloseClick");
                        span.setAttribute("outsystems.function.key", "17b39b9c-ca7a-43c9-83db-0cc7b7d4eb1b");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._cFDTradeModalOnCloseClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onClickAvailableAccount$Action(selectedProductPropIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickAvailableAccount__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickAvailableAccount");
                        span.setAttribute("outsystems.function.key", "1ba8e006-660e-4c99-9e0b-36382638d2ca");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onClickAvailableAccount$Action, callContext, selectedProductPropIn);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            setRealValue$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SetRealValue__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SetRealValue");
                        span.setAttribute("outsystems.function.key", "1e5e72a5-2776-4577-ba80-d672429fa1b8");
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

            setDemoValue$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SetDemoValue__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SetDemoValue");
                        span.setAttribute("outsystems.function.key", "32d24107-eabc-4567-ac09-5e6965a9b15a");
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

            onClickCreatedAccount$Action(selectedProductPropIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickCreatedAccount__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickCreatedAccount");
                        span.setAttribute("outsystems.function.key", "3e1c8e4d-a595-4d0e-8434-8b0cfb23a30b");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickCreatedAccount$Action, callContext, selectedProductPropIn);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            getCreatedCFDAccounts$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("GetCreatedCFDAccounts__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "GetCreatedCFDAccounts");
                        span.setAttribute("outsystems.function.key", "59ceace1-7209-46c3-9fd7-76c2659d1fef");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._getCreatedCFDAccounts$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            setCreatedCFDAccounts$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SetCreatedCFDAccounts__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SetCreatedCFDAccounts");
                        span.setAttribute("outsystems.function.key", "8289199c-b9c5-4714-a486-6351274119d6");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._setCreatedCFDAccounts$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            cTraderAccountCreation$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("CTraderAccountCreation__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "CTraderAccountCreation");
                        span.setAttribute("outsystems.function.key", "8e5a6d75-d480-4161-aaac-c8aace38be01");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._cTraderAccountCreation$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            viewSpecificationsOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ViewSpecificationsOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ViewSpecificationsOnClick");
                        span.setAttribute("outsystems.function.key", "a1f185b0-132c-4779-8f19-68f682455a91");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._viewSpecificationsOnClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            confirmedNotResidentOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("confirmedNotResidentOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "confirmedNotResidentOnClick");
                        span.setAttribute("outsystems.function.key", "cbd5168b-3bc2-43c6-b28d-49c1706f772f");
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

            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "f45d0f6c-4310-4e19-a1f7-9505f68addb0");
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

            getAvailableCFDAccounts$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("GetAvailableCFDAccounts__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "GetAvailableCFDAccounts");
                        span.setAttribute("outsystems.function.key", "ff601baa-7dfc-4ecd-9a47-136422be6576");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._getAvailableCFDAccounts$Action, callContext);
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
                        return tradershub_CFDFlowsController.default.handleError(ex, this.callContext());
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
        Controller.registerVariableGroupType("tradershub.CFDFlows.CFDs.OnClickAvailableAccount$vars", [{
            name: "SelectedProductProp",
            attrName: "selectedProductPropInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.CFDFlows.CFDs.OnClickAvailableAccount$getSelectedPlatformJSResult", [{
            name: "Platform",
            attrName: "platformOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.CFDFlows.CFDs.OnClickAvailableAccount$checkIsPasswordSetJSResult", [{
            name: "isMt5PasswordSet",
            attrName: "isMt5PasswordSetOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "isDxtradePasswordSet",
            attrName: "isDxtradePasswordSetOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "isPasswordSet",
            attrName: "isPasswordSetOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.registerVariableGroupType("tradershub.CFDFlows.CFDs.OnClickCreatedAccount$vars", [{
            name: "SelectedProductProp",
            attrName: "selectedProductPropInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.CFDFlows.CFDs.GetCreatedCFDAccounts$modifyDataJSResult", [{
            name: "RealResponse",
            attrName: "realResponseOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "DemoResponse",
            attrName: "demoResponseOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.CFDFlows.CFDs.CTraderAccountCreation$payloadJSResult", [{
            name: "Payload",
            attrName: "payloadOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.CFDFlows.CFDs.GetAvailableCFDAccounts$modifyDataJSResult", [{
            name: "FilteredAvailableAccounts",
            attrName: "filteredAvailableAccountsOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.CFDFlows.CFDs.mvc$controller.OnClickAvailableAccount.GetSelectedPlatformJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Platform = $parameters.SelectedPlatformInput.split('_')[0]
    };
});

define("tradershub.CFDFlows.CFDs.mvc$controller.OnClickAvailableAccount.CheckIsPasswordSetJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const AccStatus = JSON.parse($parameters.AccountStatusRes);
        const StatusArr = AccStatus.get_account_status.status;

        $parameters.isMt5PasswordSet = !StatusArr.includes("mt5_password_not_set");
        $parameters.isDxtradePasswordSet = !StatusArr.includes("dxtrade_password_not_set");
    };
});

define("tradershub.CFDFlows.CFDs.mvc$controller.GetCreatedCFDAccounts.ModifyDataJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const mt5Accounts = JSON.parse($parameters.MT5Response).mt5_login_list || [];
        const cTraderAccounts = JSON.parse($parameters.CTraderResponse).trading_platform_accounts || [];
        const dxTradeAccounts = JSON.parse($parameters.DXTradeResponse).trading_platform_accounts || [];
        const cfdConfig = JSON.parse($parameters.CFDConfig);

        function modifyAccounts(accounts, type, platform) {
            return accounts.filter(account => account.account_type === type).map(account => {
                return {
                    ...account,
                    identifier: platform + '_' + (account.product || 'standard')
                };
            });
        }

        function calculateCTraderBalance(accounts, type) {
            return accounts.reduce((sum, account) => {
                return account.account_type === type ?
                    sum + (account.balance || 0) :
                    sum;
            }, 0);
        }

        const totalCTraderBalanceReal = calculateCTraderBalance(cTraderAccounts, 'real');
        const totalCTraderBalanceDemo = calculateCTraderBalance(cTraderAccounts, 'demo');

        const realAccounts = [
            ...modifyAccounts(mt5Accounts, 'real', 'mt5'),
            ...modifyAccounts(cTraderAccounts, 'real', 'ctrader').map(account => ({
                ...account,
                total_balance: totalCTraderBalanceReal
            })),
            ...modifyAccounts(dxTradeAccounts, 'real', 'dxtrade')
        ];

        const demoAccounts = [
            ...modifyAccounts(mt5Accounts, 'demo', 'mt5'),
            ...modifyAccounts(cTraderAccounts, 'demo', 'ctrader').map(account => ({
                ...account,
                total_balance: totalCTraderBalanceDemo
            })),
            ...modifyAccounts(dxTradeAccounts, 'demo', 'dxtrade')
        ];

        function aggregateAccounts(accounts) {
            return accounts.reduce((acc, item) => {
                const matchedConfig = cfdConfig.find(c => c.CfdProductConfig.ProductIdentifier === item.identifier);

                if (matchedConfig && !acc.some(result => result.ProductIdentifier === matchedConfig.CfdProductConfig.ProductIdentifier)) {
                    acc.push({
                        ...matchedConfig.CfdProductConfig,
                    });
                }
                return acc;
            }, []);
        }

        const realAccountsResponse = aggregateAccounts(realAccounts);
        const demoAccountsResponse = aggregateAccounts(demoAccounts);

        $parameters.RealResponse = JSON.stringify(realAccountsResponse);
        $parameters.DemoResponse = JSON.stringify(demoAccountsResponse);

    };
});

define("tradershub.CFDFlows.CFDs.mvc$controller.CTraderAccountCreation.PayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Payload = JSON.stringify({
            "platform": "ctrader",
            "account_type": $parameters.AccountType,
            "market_type": "all",
            "company": "svg"
        })

    };
});

define("tradershub.CFDFlows.CFDs.mvc$controller.GetAvailableCFDAccounts.ModifyDataJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const mt5Accounts = JSON.parse($parameters.MT5Response).trading_platform_available_accounts || [];
        const cTraderAccounts = JSON.parse($parameters.CTraderResponse).trading_platform_available_accounts || [];
        const dxtradeAccounts = JSON.parse($parameters.DxtradeResponse).trading_platform_available_accounts || [];

        const cfdConfig = JSON.parse($parameters.CFDConfig);
        const createdAccounts = JSON.parse($parameters.CreatedAccounts);

        const modifyAccounts = (accounts) => accounts.map(account => ({
            ...account,
            identifier: `${account.platform}_${account.product}`
        }));

        const combinedPlatforms = [
            ...modifyAccounts(mt5Accounts),
            ...modifyAccounts(cTraderAccounts),
            ...modifyAccounts(dxtradeAccounts)
        ];

        console.log('combinedPlatforms: ', combinedPlatforms)

        const availableCFDAccounts = combinedPlatforms.reduce((acc, item) => {
            console.log('acc: ', acc)
            const matchedConfig = cfdConfig.find(c => c.CfdProductConfig.ProductIdentifier === item.identifier);

            if (matchedConfig && !acc.some(result => result.ProductIdentifier === matchedConfig.CfdProductConfig.ProductIdentifier)) {
                acc.push(matchedConfig.CfdProductConfig);
            }

            return acc;
        }, []);

        console.log('result: ', availableCFDAccounts.filter(availableAccount =>
            !createdAccounts.some(createdAccount => createdAccount.ProductIdentifier === availableAccount.ProductIdentifier)
        ))

        $parameters.FilteredAvailableAccounts = JSON.stringify(availableCFDAccounts.filter(availableAccount =>
            !createdAccounts.some(createdAccount => createdAccount.ProductIdentifier === availableAccount.ProductIdentifier)
        ));

    };
});


define("tradershub.CFDFlows.CFDs.mvc$translationsResources.fr-FR", [], function() {
    return {
        "9BsPulIcxkWQTPWK3dNX0A#Value": "Voir les spécifications",
        "6IiGdsEYP06nsIpsfm4H7Q#Value": "Comptes disponibles",
        "K34fG267aE23l2enpmqezA#Value": "Mes comptes",
        "gcgQSS26UkK60r3pOIaf5g#Value": "Tradez des positions plus importantes avec moins de capital sur un large éventail de marchés mondiaux.",
        "wDlKcbQEL0SpHAWlCti6Kw#Value": "trading de CFD"
    };
});

define("tradershub.CFDFlows.CFDs.mvc$translationsResources", ["exports", "tradershub.CFDFlows.CFDs.mvc$translationsResources.fr-FR"], function(exports, tradershub_CFDFlows_CFDs_mvc_translationsResources_frFR) {
    return {
        "fr-FR": {
            "translations": tradershub_CFDFlows_CFDs_mvc_translationsResources_frFR,
            "isRTL": false
        }
    };
});