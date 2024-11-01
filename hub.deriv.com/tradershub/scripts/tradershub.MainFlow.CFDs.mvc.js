define("tradershub.MainFlow.CFDs.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "RESTAPIWebsocketOfficial.model", "tradershub.controller", "BrowserConsoleLogging.controller", "tradershub.Layouts.MainLayout.mvc$model", "tradershub.MainFlowBlocks.LoggedOutBanner.mvc$model", "OutSystemsUI.Content.Tooltip.mvc$model", "tradershub.MainFlowBlocks.RealDemoSwitcher.mvc$model", "tradershub.CFDBlocks.CFDTradingAppCard.mvc$model", "tradershub.CFDBlocks.CFDTradeModal.mvc$model", "tradershub.CFDBlocks.CFDPasswordModal.mvc$model", "tradershub.MainFlowBlocks.EmptyPlatformModal.mvc$model", "tradershub.model$EN_8212284ed6913c62a123b32716b72fbaEntityRecord", "tradershub.model$RL_9eb97ad6cb81943972e368260e0cb936", "RESTAPIWebsocketOfficial.model$ST_2f457e0a5b13526850516eea23ae0e9aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_75725e65d106c1568a850780233a08baStructure", "RESTAPIWebsocketOfficial.model$ST_1e4e8e93f82bd7d0c82446a55ed8dee2Structure", "RESTAPIWebsocketOfficial.model$ST_2361699202fda01d7c8ade7cab583650Structure", "tradershub.model$RL_d214456dc511920f517885542ecb318a", "RESTAPIWebsocketOfficial.model$ST_605da9a1009ce00d8c64718f9c13e284Structure", "RESTAPIWebsocketOfficial.model$ST_b3b8308da7c5dcdc42b3f87ca949eb8cStructure", "RESTAPIWebsocketOfficial.model$ST_13505e54da5ba49238f8f2a40834f63fStructure", "RESTAPIWebsocketOfficial.model$ST_b96e8d04448b693f79e4aebf0b6ee4fbStructure", "RESTAPIWebsocketOfficial.model$ST_4dc58b9edb8582c76248b762d6650913Structure", "RESTAPIWebsocketOfficial.model$ST_8517d9c8b73e866553a1a7b806af5079Structure", "RESTAPIWebsocketOfficial.model$ST_f1644d81fb90e6f4882b198c996831d1Structure", "RESTAPIWebsocketOfficial.model$ST_a64a97da9ee822b4b21c919739567011Structure", "tradershub.model$RL_d2e8d01cb1d1df6bef4310379df28149", "tradershub.controller$FeatureFlagValueByName", "BrowserConsoleLogging.controller$ConsoleLog", "tradershub.referencesHealth$BrowserConsoleLogging", "RESTAPIWebsocketOfficial.model$ST_746d074ddcc08e0df3b269ffb1933d5aStructure", "tradershub.controller$GetAccountStatus2", "tradershub.controller$TradingPlatformAccounts", "tradershub.controller$MT5LoginList", "tradershub.model$RC_07be8d7193ba16b1cc9d953b8fa48e9d", "tradershub.model$RL_ee1664da44e6893a731536d754684359", "tradershub.model$ST_8907948f85abfce9f41b7aac6149d55eStructure", "tradershub.controller$MT5TradingPlatformAvailableAccounts", "tradershub.model$ST_3c6ba624991ba71a1d179d7c7ef27261Structure", "tradershub.controller$CtraderTradingPlatformAvailableAccounts"], function(OSRuntimeCore, tradershubModel, RESTAPIWebsocketOfficialModel, tradershubController, BrowserConsoleLoggingController, tradershub_Layouts_MainLayout_mvcModel, tradershub_MainFlowBlocks_LoggedOutBanner_mvcModel, OutSystemsUI_Content_Tooltip_mvcModel, tradershub_MainFlowBlocks_RealDemoSwitcher_mvcModel, tradershub_CFDBlocks_CFDTradingAppCard_mvcModel, tradershub_CFDBlocks_CFDTradeModal_mvcModel, tradershub_CFDBlocks_CFDPasswordModal_mvcModel, tradershub_MainFlowBlocks_EmptyPlatformModal_mvcModel) {
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
                    this.attr("CreatedMt5Accounts", "createdMt5AccountsVar", "CreatedMt5Accounts", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_2f457e0a5b13526850516eea23ae0e9aStructure());
                    }, false, RESTAPIWebsocketOfficialModel.ST_2f457e0a5b13526850516eea23ae0e9aStructure),
                    this.attr("CreatedCtraderAccounts", "createdCtraderAccountsVar", "CreatedCtraderAccounts", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_75725e65d106c1568a850780233a08baStructure());
                    }, false, RESTAPIWebsocketOfficialModel.ST_75725e65d106c1568a850780233a08baStructure),
                    this.attr("CreatedDxtradeAccounts", "createdDxtradeAccountsVar", "CreatedDxtradeAccounts", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_75725e65d106c1568a850780233a08baStructure());
                    }, false, RESTAPIWebsocketOfficialModel.ST_75725e65d106c1568a850780233a08baStructure),
                    this.attr("isLoading", "isLoadingVar", "isLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("ShouldShowWarningPopup", "shouldShowWarningPopupVar", "ShouldShowWarningPopup", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("ShouldShowPasswordModal", "shouldShowPasswordModalVar", "ShouldShowPasswordModal", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("ShouldShowTradeModal", "shouldShowTradeModalVar", "ShouldShowTradeModal", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("SelectedProduct", "selectedProductVar", "SelectedProduct", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("isPasswordSet", "isPasswordSetVar", "isPasswordSet", true, false, OS.DataTypes.DataTypes.Boolean, function() {
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

define("tradershub.MainFlow.CFDs.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "BrowserConsoleLogging.controller", "react", "@outsystems/runtime-view-js", "tradershub.MainFlow.CFDs.mvc$model", "tradershub.MainFlow.CFDs.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.MainLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.MainFlowBlocks.LoggedOutBanner.mvc$view", "OutSystemsUI.Content.Tooltip.mvc$view", "tradershub.MainFlowBlocks.RealDemoSwitcher.mvc$view", "tradershub.CFDBlocks.CFDTradingAppCard.mvc$view", "tradershub.CFDBlocks.CFDTradeModal.mvc$view", "tradershub.CFDBlocks.CFDPasswordModal.mvc$view", "tradershub.MainFlowBlocks.EmptyPlatformModal.mvc$view", "tradershub.model$EN_8212284ed6913c62a123b32716b72fbaEntityRecord", "tradershub.model$RL_9eb97ad6cb81943972e368260e0cb936", "RESTAPIWebsocketOfficial.model$ST_2f457e0a5b13526850516eea23ae0e9aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_75725e65d106c1568a850780233a08baStructure", "RESTAPIWebsocketOfficial.model$ST_1e4e8e93f82bd7d0c82446a55ed8dee2Structure", "RESTAPIWebsocketOfficial.model$ST_2361699202fda01d7c8ade7cab583650Structure", "tradershub.model$RL_d214456dc511920f517885542ecb318a", "RESTAPIWebsocketOfficial.model$ST_605da9a1009ce00d8c64718f9c13e284Structure", "RESTAPIWebsocketOfficial.model$ST_b3b8308da7c5dcdc42b3f87ca949eb8cStructure", "RESTAPIWebsocketOfficial.model$ST_13505e54da5ba49238f8f2a40834f63fStructure", "RESTAPIWebsocketOfficial.model$ST_b96e8d04448b693f79e4aebf0b6ee4fbStructure", "RESTAPIWebsocketOfficial.model$ST_4dc58b9edb8582c76248b762d6650913Structure", "RESTAPIWebsocketOfficial.model$ST_8517d9c8b73e866553a1a7b806af5079Structure", "RESTAPIWebsocketOfficial.model$ST_f1644d81fb90e6f4882b198c996831d1Structure", "RESTAPIWebsocketOfficial.model$ST_a64a97da9ee822b4b21c919739567011Structure", "tradershub.model$RL_d2e8d01cb1d1df6bef4310379df28149", "tradershub.controller$FeatureFlagValueByName", "BrowserConsoleLogging.controller$ConsoleLog", "tradershub.referencesHealth$BrowserConsoleLogging", "RESTAPIWebsocketOfficial.model$ST_746d074ddcc08e0df3b269ffb1933d5aStructure", "tradershub.controller$GetAccountStatus2", "tradershub.controller$TradingPlatformAccounts", "tradershub.controller$MT5LoginList", "tradershub.model$RC_07be8d7193ba16b1cc9d953b8fa48e9d", "tradershub.model$RL_ee1664da44e6893a731536d754684359", "tradershub.model$ST_8907948f85abfce9f41b7aac6149d55eStructure", "tradershub.controller$MT5TradingPlatformAvailableAccounts", "tradershub.model$ST_3c6ba624991ba71a1d179d7c7ef27261Structure", "tradershub.controller$CtraderTradingPlatformAvailableAccounts"], function(OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, BrowserConsoleLoggingController, React, OSView, tradershub_MainFlow_CFDs_mvc_model, tradershub_MainFlow_CFDs_mvc_controller, tradershubClientVariables, tradershub_Layouts_MainLayout_mvc_view, OSWidgets, tradershub_MainFlowBlocks_LoggedOutBanner_mvc_view, OutSystemsUI_Content_Tooltip_mvc_view, tradershub_MainFlowBlocks_RealDemoSwitcher_mvc_view, tradershub_CFDBlocks_CFDTradingAppCard_mvc_view, tradershub_CFDBlocks_CFDTradeModal_mvc_view, tradershub_CFDBlocks_CFDPasswordModal_mvc_view, tradershub_MainFlowBlocks_EmptyPlatformModal_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "MainFlow.CFDs";
        }

        static getAttributes() {
            return {
                codeFunction: "CFDs",
                functionKey: "cb02e196-17b9-4e2b-8ab5-d8b95fec2c86",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.MainFlow.CFDs.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_MainLayout_mvc_view, tradershub_MainFlowBlocks_LoggedOutBanner_mvc_view, OutSystemsUI_Content_Tooltip_mvc_view, tradershub_MainFlowBlocks_RealDemoSwitcher_mvc_view, tradershub_CFDBlocks_CFDTradingAppCard_mvc_view, tradershub_CFDBlocks_CFDTradeModal_mvc_view, tradershub_CFDBlocks_CFDPasswordModal_mvc_view, tradershub_MainFlowBlocks_EmptyPlatformModal_mvc_view];
        }

        get modelFactory() {
            return tradershub_MainFlow_CFDs_mvc_model;
        }

        get controllerFactory() {
            return tradershub_MainFlow_CFDs_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("luECy7kXK06Ktdi5X+wshg#Title", "CFDs");
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
                            text: [$text(getTranslation("BwB0FjyCoUK_kc0XmYEm0g#Value", "CFDs trading"))],
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
                                        text: [$text(getTranslation("wLYrIPyvu02yxEVVxSQKaA#Value", "Trade bigger positions with less capital on a wide range of global markets."))],
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
                            inputs: {
                                Variable: tradershubClientVariables.getAccountType()
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                demoClickEvent$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.setDemoValue$Action(controller.callContext(eventHandlerContext));

                                    ;
                                },
                                realClickEvent$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.setRealValue$Action(controller.callContext(eventHandlerContext));

                                    ;
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
                                style: "height: auto; margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                            },
                            gridProperties: {
                                marginLeft: "0px"
                            },
                            visible: (model.variables.createdCFDAccountsVar.length > 0),
                            _idProps: {
                                service: idService,
                                name: "MyAccountsSection"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-bottom: 20px; margin-top: 20px;"
                            },
                            style: "",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "MyAccountsHeader"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold; margin-top: 0px;"
                            },
                            text: [$text(getTranslation("zN2pTqe+b0Cy7Y8pcFO24Q#Value", "My accounts"))],
                            _idProps: {
                                service: idService,
                                uuid: "12"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.List, {
                            animateItems: false,
                            extendedProperties: {
                                "disable-virtualization": "True",
                                style: "column-gap: 16px; display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); height: 100%;"
                            },
                            gridProperties: {
                                width: "100%"
                            },
                            mode: /*Default*/ 0,
                            source: model.variables.createdCFDAccountsVar,
                            style: "row-gap-s",
                            tag: "div",
                            _idProps: {
                                service: idService,
                                name: "MyAccountsCardsList"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new IteratorPlaceholderContent(function(idService, callContext) {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedEvents: {
                                            onClick: function() {
                                                var eventHandlerContext = callContext.clone();
                                                controller.onClickCreatedAccount$Action(model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).productIdentifierAttr, controller.callContext(eventHandlerContext));

                                                ;
                                            }
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "14"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: [asPrimitiveValue(model.variables.createdMt5AccountsVar), asPrimitiveValue(model.variables.createdDxtradeAccountsVar), asPrimitiveValue(model.variables.createdCtraderAccountsVar), asPrimitiveValue(model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).descriptionAttr), asPrimitiveValue(model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).titleAttr), asPrimitiveValue(model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).iconAttr), asPrimitiveValue(model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).productIdentifierAttr)]
                                    }, React.createElement(tradershub_CFDBlocks_CFDTradingAppCard_mvc_view, {
                                        getOwnerSpan: function() {
                                            return _this.getChildSpan("render");
                                        },
                                        getOwnerDisposeSpan: function() {
                                            return _this.getChildSpan("destroy");
                                        },
                                        inputs: {
                                            SelectedProductArg: model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).productIdentifierAttr,
                                            Variant: "Large",
                                            ProductIcon: model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).iconAttr,
                                            CreatedCtraderAccounts: model.variables.createdCtraderAccountsVar,
                                            Name: model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).titleAttr,
                                            CreatedDxtradeAccounts: model.variables.createdDxtradeAccountsVar,
                                            ProductDescription: model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).descriptionAttr,
                                            CreatedMt5Accounts: model.variables.createdMt5AccountsVar
                                        },
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            },
                                            onClick$Action: function() {
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
                                            uuid: "15",
                                            alias: "5"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    }))];
                                }, callContext, idService, "1")
                            },
                            _dependencies: [asPrimitiveValue(model.variables.createdMt5AccountsVar), asPrimitiveValue(model.variables.createdDxtradeAccountsVar), asPrimitiveValue(model.variables.createdCtraderAccountsVar)]
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            extendedProperties: {
                                style: "height: auto; margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                            },
                            gridProperties: {
                                marginLeft: "0px"
                            },
                            visible: (model.variables.availableCFDAccountsVar.length > 0),
                            _idProps: {
                                service: idService,
                                name: "AvailableAccountsSection"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-bottom: 20px; margin-top: 20px; text-align: right;"
                            },
                            style: "display-flex justify-content-space-between",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "AvailableAccountsHeader"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: left;"
                            },
                            gridProperties: {
                                classes: "ThemeGrid_Width6"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "AvailableAccounts"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold; margin-top: 0px;"
                            },
                            text: [$text(getTranslation("GuYO+RgE7EC7uwcXy6+7og#Value", "Available accounts"))],
                            _idProps: {
                                service: idService,
                                uuid: "19"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
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
                                style: "font-size: 12px; width: fill;"
                            },
                            text: [$text(getTranslation("qJy91w_tAU6SSkSpIQko3w#Value", "View specifications"))],
                            _idProps: {
                                service: idService,
                                uuid: "21"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Icon, {
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            icon: "angle-right",
                            iconSize: /*FontSize*/ 0,
                            style: "icon",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "22"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), React.createElement(OSWidgets.List, {
                            animateItems: false,
                            extendedProperties: {
                                "disable-virtualization": "True",
                                style: "column-gap: 16px; display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); height: 100%;"
                            },
                            gridProperties: {
                                width: "100%"
                            },
                            mode: /*Default*/ 0,
                            source: model.variables.availableCFDAccountsVar,
                            style: "row-gap-s",
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
                                        extendedEvents: {
                                            onClick: function() {
                                                return Promise.resolve().then(function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    return controller.onClickAvailableAccount$Action(model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).productIdentifierAttr, controller.callContext(eventHandlerContext));
                                                });;
                                            }
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "24"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: [asPrimitiveValue(model.variables.selectedProductVar), asPrimitiveValue(model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).productIdentifierAttr), asPrimitiveValue(model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).titleAttr), asPrimitiveValue(model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).iconAttr), asPrimitiveValue(model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).descriptionAttr)]
                                    }, React.createElement(tradershub_CFDBlocks_CFDTradingAppCard_mvc_view, {
                                        getOwnerSpan: function() {
                                            return _this.getChildSpan("render");
                                        },
                                        getOwnerDisposeSpan: function() {
                                            return _this.getChildSpan("destroy");
                                        },
                                        inputs: {
                                            ProductDescription: model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).descriptionAttr,
                                            Variant: "Small",
                                            ProductIcon: model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).iconAttr,
                                            Name: model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).titleAttr,
                                            SelectedProductArg: model.variables.selectedProductVar
                                        },
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            },
                                            onClick$Action: function() {
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
                                            uuid: "25",
                                            alias: "6"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    }))];
                                }, callContext, idService, "2")
                            },
                            _dependencies: [asPrimitiveValue(model.variables.selectedProductVar)]
                        })), React.createElement(tradershub_CFDBlocks_CFDTradeModal_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                SelectedProductArg: tradershubClientVariables.getSelectedProduct(),
                                CreatedCtraderAccounts: model.variables.createdCtraderAccountsVar,
                                CreatedDxtradeAccounts: model.variables.createdDxtradeAccountsVar,
                                IsVisible: (((tradershubClientVariables.getSelectedProduct()) !== ("")) && model.variables.shouldShowTradeModalVar),
                                CreatedMt5Accounts: model.variables.createdMt5AccountsVar
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
                                uuid: "26",
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
                                isPasswordSet: model.variables.isPasswordSetVar,
                                SelectedPlatform: model.variables.selectedProductVar,
                                IsVisible: model.variables.shouldShowPasswordModalVar
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
                                uuid: "27",
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
                                IsVisible: model.variables.shouldShowWarningPopupVar
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                onCloseClick$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.toggleWarningPopup$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "28",
                                alias: "9"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.shouldShowWarningPopupVar), asPrimitiveValue(model.variables.shouldShowPasswordModalVar), asPrimitiveValue(model.variables.isPasswordSetVar), asPrimitiveValue(model.variables.shouldShowTradeModalVar), asPrimitiveValue(model.variables.selectedProductVar), asPrimitiveValue(model.variables.availableCFDAccountsVar), asPrimitiveValue(model.variables.createdMt5AccountsVar), asPrimitiveValue(model.variables.createdDxtradeAccountsVar), asPrimitiveValue(model.variables.createdCtraderAccountsVar), asPrimitiveValue(model.variables.createdCFDAccountsVar), asPrimitiveValue(tradershubClientVariables.getAccountType())]
            }));
        }
    }

    return View;
});
define("tradershub.MainFlow.CFDs.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "BrowserConsoleLogging.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.MainFlow.CFDs.mvc$translationsResources", "tradershub.MainFlow.controller", "tradershub.MainFlow.CFDs.mvc$controller.OnClickAvailableAccount.CheckIsPasswordSetJS", "tradershub.MainFlow.CFDs.mvc$controller.OnClickAvailableAccount.GetSelectedPlatformJS", "tradershub.MainFlow.CFDs.mvc$controller.GetCreatedCFDAccounts.AggregateJS", "tradershub.MainFlow.CFDs.mvc$controller.GetAvailableCFDAccounts.AggregateJS", "tradershub.model$EN_8212284ed6913c62a123b32716b72fbaEntityRecord", "tradershub.model$RL_9eb97ad6cb81943972e368260e0cb936", "RESTAPIWebsocketOfficial.model$ST_2f457e0a5b13526850516eea23ae0e9aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_75725e65d106c1568a850780233a08baStructure", "RESTAPIWebsocketOfficial.model$ST_1e4e8e93f82bd7d0c82446a55ed8dee2Structure", "RESTAPIWebsocketOfficial.model$ST_2361699202fda01d7c8ade7cab583650Structure", "tradershub.model$RL_d214456dc511920f517885542ecb318a", "RESTAPIWebsocketOfficial.model$ST_605da9a1009ce00d8c64718f9c13e284Structure", "RESTAPIWebsocketOfficial.model$ST_b3b8308da7c5dcdc42b3f87ca949eb8cStructure", "RESTAPIWebsocketOfficial.model$ST_13505e54da5ba49238f8f2a40834f63fStructure", "RESTAPIWebsocketOfficial.model$ST_b96e8d04448b693f79e4aebf0b6ee4fbStructure", "RESTAPIWebsocketOfficial.model$ST_4dc58b9edb8582c76248b762d6650913Structure", "RESTAPIWebsocketOfficial.model$ST_8517d9c8b73e866553a1a7b806af5079Structure", "RESTAPIWebsocketOfficial.model$ST_f1644d81fb90e6f4882b198c996831d1Structure", "RESTAPIWebsocketOfficial.model$ST_a64a97da9ee822b4b21c919739567011Structure", "tradershub.model$RL_d2e8d01cb1d1df6bef4310379df28149", "tradershub.controller$FeatureFlagValueByName", "BrowserConsoleLogging.controller$ConsoleLog", "tradershub.referencesHealth$BrowserConsoleLogging", "RESTAPIWebsocketOfficial.model$ST_746d074ddcc08e0df3b269ffb1933d5aStructure", "tradershub.controller$GetAccountStatus2", "tradershub.controller$TradingPlatformAccounts", "tradershub.controller$MT5LoginList", "tradershub.model$RC_07be8d7193ba16b1cc9d953b8fa48e9d", "tradershub.model$RL_ee1664da44e6893a731536d754684359", "tradershub.model$ST_8907948f85abfce9f41b7aac6149d55eStructure", "tradershub.controller$MT5TradingPlatformAvailableAccounts", "tradershub.model$ST_3c6ba624991ba71a1d179d7c7ef27261Structure", "tradershub.controller$CtraderTradingPlatformAvailableAccounts"], function(OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, BrowserConsoleLoggingController, tradershubLanguageResources, tradershubClientVariables, tradershub_MainFlow_CFDs_mvc_TranslationsResources, tradershub_MainFlowController, tradershub_MainFlow_CFDs_mvc_controller_OnClickAvailableAccount_CheckIsPasswordSetJS, tradershub_MainFlow_CFDs_mvc_controller_OnClickAvailableAccount_GetSelectedPlatformJS, tradershub_MainFlow_CFDs_mvc_controller_GetCreatedCFDAccounts_AggregateJS, tradershub_MainFlow_CFDs_mvc_controller_GetAvailableCFDAccounts_AggregateJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, tradershub_MainFlow_CFDs_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {
                    getCfdProductConfigs$AggrRefresh: 0
                };
                this.dataFetchDependentsGraph = {
                    getCfdProductConfigs$AggrRefresh: []
                };
                this.shouldSendClientVarsToDataSources = true;
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
                            return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetCfdProductConfigs", "screenservices/tradershub/MainFlow/CFDs/ScreenDataSetGetCfdProductConfigs", "OJ345lbHhJUSdp5Q3Ln7QA", maxRecords, startIndex, function(b) {
                                model.variables.getCfdProductConfigsAggr.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.getCfdProductConfigsAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getCfdProductConfigsAggr.constructor));
                            }, undefined, undefined, undefined, callContext, tradershubClientVariables, true).then(function() {
                                return controller._onReady$Action(controller.callContext(callContext));
                            });
                        }.bind(this);
                        return OS.Logger.startActiveSpan("GetCfdProductConfigs", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetCfdProductConfigs");
                                span.setAttribute("outsystems.function.key", "bc4e4163-1900-4cdc-8000-43a379434e12");
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
            get _onInitialize$Action() {
                if (!(this.hasOwnProperty("__onInitialize$Action"))) {
                    this.__onInitialize$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnInitialize", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnInitialize");
                                span.setAttribute("outsystems.function.key", "10e51eeb-255c-4af4-a956-0cb856f4be0a");
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

            get _onClickAvailableAccount$Action() {
                if (!(this.hasOwnProperty("__onClickAvailableAccount$Action"))) {
                    this.__onClickAvailableAccount$Action = function(selectedProductPropIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickAvailableAccount", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickAvailableAccount");
                                span.setAttribute("outsystems.function.key", "14314a1c-dc5b-4731-b91c-3f4447a00188");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnClickAvailableAccount");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.MainFlow.CFDs.OnClickAvailableAccount$vars"))());
                                vars.value.selectedProductPropInLocal = selectedProductPropIn;
                                var getAccountStatus2Var = new OS.DataTypes.VariableHolder();
                                var checkIsPasswordSetJSResult = new OS.DataTypes.VariableHolder();
                                var getSelectedPlatformJSResult = new OS.DataTypes.VariableHolder();
                                var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONSerializeCreatedAccountsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONSerializeAvailableAccountsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                return OS.Flow.executeAsyncFlow(function() {
                                    // isLoggedIn
                                    return OS.Flow.executeSequence(function() {
                                        if ((((tradershubClientVariables.getAuthToken()) !== ("")))) {
                                            // Execute Action: GetAccountStatus2
                                            model.flush();
                                            return tradershubController.default.getAccountStatus2$Action(callContext).then(function(value) {
                                                getAccountStatus2Var.value = value;
                                            }).then(function() {
                                                // JSON Serialize: JSONSerialize1
                                                jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(getAccountStatus2Var.value.responseOut, false, false);
                                                checkIsPasswordSetJSResult.value = OS.Logger.startActiveSpan("CheckIsPasswordSet", function(span) {
                                                    if (span) {
                                                        span.setAttribute("code.function", "CheckIsPasswordSet");
                                                        span.setAttribute("outsystems.function.key", "b35418e1-b6fc-413d-b0cb-ad376661cfc8");
                                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                                    }

                                                    try {
                                                        return controller.safeExecuteJSNode(tradershub_MainFlow_CFDs_mvc_controller_OnClickAvailableAccount_CheckIsPasswordSetJS, "CheckIsPasswordSet", "OnClickAvailableAccount", {
                                                            SelectedPlatform: OS.DataConversion.JSNodeParamConverter.to(model.variables.selectedProductVar, OS.DataTypes.DataTypes.Text),
                                                            AccountStatusRes: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize1Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                            isMt5PasswordSet: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
                                                            isDxtradePasswordSet: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
                                                            isPasswordSet: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                                                        }, function($parameters) {
                                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.MainFlow.CFDs.OnClickAvailableAccount$checkIsPasswordSetJSResult"))();
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
                                                        span.setAttribute("outsystems.function.key", "e728406e-d684-4a69-be4d-de7b9bf52d73");
                                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                                    }

                                                    try {
                                                        return controller.safeExecuteJSNode(tradershub_MainFlow_CFDs_mvc_controller_OnClickAvailableAccount_GetSelectedPlatformJS, "GetSelectedPlatform", "OnClickAvailableAccount", {
                                                            SelectedPlatformInput: OS.DataConversion.JSNodeParamConverter.to(vars.value.selectedProductPropInLocal, OS.DataTypes.DataTypes.Text),
                                                            Platform: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                                        }, function($parameters) {
                                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.MainFlow.CFDs.OnClickAvailableAccount$getSelectedPlatformJSResult"))();
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
                                                // isPasswordSet = If
                                                model.variables.isPasswordSetVar = (((model.variables.selectedProductVar === "mt5")) ? (checkIsPasswordSetJSResult.value.isMt5PasswordSetOut) : (checkIsPasswordSetJSResult.value.isDxtradePasswordSetOut));
                                            }).then(function() {
                                                // isCtrader?
                                                if (((getSelectedPlatformJSResult.value.platformOut === "ctrader"))) {
                                                    OS.FeedbackMessageService.showFeedbackMessage("ctrader no password modal, just create account", /*Info*/ 0);
                                                } else {
                                                    // TogglePasswordModal
                                                    // ShouldShowPasswordModal = notShouldShowPasswordModal
                                                    model.variables.shouldShowPasswordModalVar = !(model.variables.shouldShowPasswordModalVar);
                                                    // Execute Action: ConsoleLog2
                                                    BrowserConsoleLoggingController.default.consoleLog$Action("mt5 and dxtrade need to go through password modal to create account", 0, callContext);
                                                }

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

            get _getCreatedCFDAccounts$Action() {
                if (!(this.hasOwnProperty("__getCreatedCFDAccounts$Action"))) {
                    this.__getCreatedCFDAccounts$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("GetCreatedCFDAccounts", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetCreatedCFDAccounts");
                                span.setAttribute("outsystems.function.key", "153b43cd-1e58-4596-a2c0-d758a1c32efb");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("GetCreatedCFDAccounts");
                                callContext = controller.callContext(callContext);
                                var ctraderTradingPlatformAccountsVar = new OS.DataTypes.VariableHolder();
                                var dxtradeTradingPlatformAccountsVar = new OS.DataTypes.VariableHolder();
                                var mT5LoginListVar = new OS.DataTypes.VariableHolder();
                                var aggregateJSResult = new OS.DataTypes.VariableHolder();
                                var ctraderResJSONSerializeVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var cfdConfigJSONSerializeVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var mT5ResJSONSerializeVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var dxtradeResJSONSerializeVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONDeserializeAggregatedResultVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936))());
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: MT5LoginList
                                    model.flush();
                                    return tradershubController.default.mT5LoginList$Action(true, callContext).then(function(value) {
                                        mT5LoginListVar.value = value;
                                    }).then(function() {
                                        // Execute Action: CtraderTradingPlatformAccounts
                                        model.flush();
                                        return tradershubController.default.tradingPlatformAccounts$Action("ctrader", true, callContext).then(function(value) {
                                            ctraderTradingPlatformAccountsVar.value = value;
                                        });
                                    }).then(function() {
                                        // Execute Action: DxtradeTradingPlatformAccounts
                                        model.flush();
                                        return tradershubController.default.tradingPlatformAccounts$Action("dxtrade", true, callContext).then(function(value) {
                                            dxtradeTradingPlatformAccountsVar.value = value;
                                        });
                                    }).then(function() {
                                        // CreatedCfdAccounts
                                        // CreatedMt5Accounts = MT5LoginList.Response
                                        model.variables.createdMt5AccountsVar = mT5LoginListVar.value.responseOut;
                                        // CreatedCtraderAccounts = CtraderTradingPlatformAccounts.Response
                                        model.variables.createdCtraderAccountsVar = ctraderTradingPlatformAccountsVar.value.responseOut;
                                        // CreatedDxtradeAccounts = DxtradeTradingPlatformAccounts.Response
                                        model.variables.createdDxtradeAccountsVar = dxtradeTradingPlatformAccountsVar.value.responseOut;
                                        // JSON Serialize: MT5ResJSONSerialize
                                        mT5ResJSONSerializeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.createdMt5AccountsVar, false, false);
                                        // JSON Serialize: CtraderResJSONSerialize
                                        ctraderResJSONSerializeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.createdCtraderAccountsVar, false, false);
                                        // JSON Serialize: DxtradeResJSONSerialize
                                        dxtradeResJSONSerializeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.createdDxtradeAccountsVar, false, false);
                                        // JSON Serialize: CfdConfigJSONSerialize
                                        cfdConfigJSONSerializeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.getCfdProductConfigsAggr.listOut, false, false);
                                        aggregateJSResult.value = OS.Logger.startActiveSpan("Aggregate", function(span) {
                                            if (span) {
                                                span.setAttribute("code.function", "Aggregate");
                                                span.setAttribute("outsystems.function.key", "38eb2eaf-edef-437e-8a2b-37e29ce9f09e");
                                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                            }

                                            try {
                                                return controller.safeExecuteJSNode(tradershub_MainFlow_CFDs_mvc_controller_GetCreatedCFDAccounts_AggregateJS, "Aggregate", "GetCreatedCFDAccounts", {
                                                    CfdConfig: OS.DataConversion.JSNodeParamConverter.to(cfdConfigJSONSerializeVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                    CtraderRes: OS.DataConversion.JSNodeParamConverter.to(ctraderResJSONSerializeVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                    MT5Res: OS.DataConversion.JSNodeParamConverter.to(mT5ResJSONSerializeVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                    AccountType: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getAccountType(), OS.DataTypes.DataTypes.Text),
                                                    DxtradeRes: OS.DataConversion.JSNodeParamConverter.to(dxtradeResJSONSerializeVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                    mappedResult: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                                }, function($parameters) {
                                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.MainFlow.CFDs.GetCreatedCFDAccounts$aggregateJSResult"))();
                                                    jsNodeResult.mappedResultOut = OS.DataConversion.JSNodeParamConverter.from($parameters.mappedResult, OS.DataTypes.DataTypes.Text);
                                                    return jsNodeResult;
                                                }, {}, {});
                                            } finally {
                                                if (span) {
                                                    span.end();
                                                }

                                            }

                                        }, 1);
                                        // JSON Deserialize: JSONDeserializeAggregatedResult
                                        jSONDeserializeAggregatedResultVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(aggregateJSResult.value.mappedResultOut, tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936, false);
                                        // CreatedCFDAccounts = JSONDeserializeAggregatedResult.Data
                                        model.variables.createdCFDAccountsVar = jSONDeserializeAggregatedResultVar.value.dataOut;
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

            get _setDemoValue$Action() {
                if (!(this.hasOwnProperty("__setDemoValue$Action"))) {
                    this.__setDemoValue$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SetDemoValue", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SetDemoValue");
                                span.setAttribute("outsystems.function.key", "33b8b3d7-eb99-46dd-a073-abe88a3fe7d1");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SetDemoValue");
                                callContext = controller.callContext(callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__setDemoValue$Action;
            }
            set _setDemoValue$Action(value) {
                this.__setDemoValue$Action = value;
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
                                span.setAttribute("outsystems.function.key", "52b65f8d-219b-4cac-9f36-30abbfd4594e");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("GetAvailableCFDAccounts");
                                callContext = controller.callContext(callContext);
                                var mT5TradingPlatformAvailableAccountsVar = new OS.DataTypes.VariableHolder();
                                var ctraderTradingPlatformAvailableAccountsVar = new OS.DataTypes.VariableHolder();
                                var aggregateJSResult = new OS.DataTypes.VariableHolder();
                                var cfdProductConfigsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var mT5AvailableAccountVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var ctraderAvailableAccountVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var createdCFDAccountVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONDeserializeAggregatedResultVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936))());
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: MT5TradingPlatformAvailableAccounts
                                    model.flush();
                                    return tradershubController.default.mT5TradingPlatformAvailableAccounts$Action(true, callContext).then(function(value) {
                                        mT5TradingPlatformAvailableAccountsVar.value = value;
                                    }).then(function() {
                                        // Execute Action: CtraderTradingPlatformAvailableAccounts
                                        model.flush();
                                        return tradershubController.default.ctraderTradingPlatformAvailableAccounts$Action(true, "ctrader", callContext).then(function(value) {
                                            ctraderTradingPlatformAvailableAccountsVar.value = value;
                                        });
                                    }).then(function() {
                                        // JSON Serialize: MT5AvailableAccount
                                        mT5AvailableAccountVar.value.jSONOut = OS.JSONUtils.serializeToJSON(mT5TradingPlatformAvailableAccountsVar.value.responseOut, false, false);
                                        // JSON Serialize: CtraderAvailableAccount
                                        ctraderAvailableAccountVar.value.jSONOut = OS.JSONUtils.serializeToJSON(ctraderTradingPlatformAvailableAccountsVar.value.responseOut, false, false);
                                        // JSON Serialize: CfdProductConfigs
                                        cfdProductConfigsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.getCfdProductConfigsAggr.listOut, false, false);
                                        // JSON Serialize: CreatedCFDAccount
                                        createdCFDAccountVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.createdCFDAccountsVar, false, false);
                                        aggregateJSResult.value = OS.Logger.startActiveSpan("Aggregate", function(span) {
                                            if (span) {
                                                span.setAttribute("code.function", "Aggregate");
                                                span.setAttribute("outsystems.function.key", "2c48e1db-9f50-4122-8a0e-a4e3daa89328");
                                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                            }

                                            try {
                                                return controller.safeExecuteJSNode(tradershub_MainFlow_CFDs_mvc_controller_GetAvailableCFDAccounts_AggregateJS, "Aggregate", "GetAvailableCFDAccounts", {
                                                    CreatedAccounts: OS.DataConversion.JSNodeParamConverter.to(createdCFDAccountVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                    CfdConfig: OS.DataConversion.JSNodeParamConverter.to(cfdProductConfigsVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                    MT5Res: OS.DataConversion.JSNodeParamConverter.to(mT5AvailableAccountVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                    CtraderRes: OS.DataConversion.JSNodeParamConverter.to(ctraderAvailableAccountVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                    filteredAvailableAccounts: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                                }, function($parameters) {
                                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.MainFlow.CFDs.GetAvailableCFDAccounts$aggregateJSResult"))();
                                                    jsNodeResult.filteredAvailableAccountsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.filteredAvailableAccounts, OS.DataTypes.DataTypes.Text);
                                                    return jsNodeResult;
                                                }, {}, {});
                                            } finally {
                                                if (span) {
                                                    span.end();
                                                }

                                            }

                                        }, 1);
                                        // JSON Deserialize: JSONDeserializeAggregatedResult
                                        jSONDeserializeAggregatedResultVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(aggregateJSResult.value.filteredAvailableAccountsOut, tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936, false);
                                        // AvailableCFDAccounts = JSONDeserializeAggregatedResult.Data
                                        model.variables.availableCFDAccountsVar = jSONDeserializeAggregatedResultVar.value.dataOut;
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

            get _setRealValue$Action() {
                if (!(this.hasOwnProperty("__setRealValue$Action"))) {
                    this.__setRealValue$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SetRealValue", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SetRealValue");
                                span.setAttribute("outsystems.function.key", "7ed7ac65-8bbf-4759-a783-615eb38bb0e8");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SetRealValue");
                                callContext = controller.callContext(callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__setRealValue$Action;
            }
            set _setRealValue$Action(value) {
                this.__setRealValue$Action = value;
            }

            get _toggleWarningPopup$Action() {
                if (!(this.hasOwnProperty("__toggleWarningPopup$Action"))) {
                    this.__toggleWarningPopup$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ToggleWarningPopup", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ToggleWarningPopup");
                                span.setAttribute("outsystems.function.key", "97a72a8d-356f-440c-9333-53e71d198492");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("ToggleWarningPopup");
                                callContext = controller.callContext(callContext);
                                // ShouldShowWarningPopup = notShouldShowWarningPopup
                                model.variables.shouldShowWarningPopupVar = !(model.variables.shouldShowWarningPopupVar);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__toggleWarningPopup$Action;
            }
            set _toggleWarningPopup$Action(value) {
                this.__toggleWarningPopup$Action = value;
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
                                span.setAttribute("outsystems.function.key", "ac50326e-f4e4-4698-9892-49e8636054d3");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("CFDTradeModalOnCloseClick");
                                callContext = controller.callContext(callContext);
                                // ShouldShowTradeModal = notShouldShowTradeModal
                                model.variables.shouldShowTradeModalVar = !(model.variables.shouldShowTradeModalVar);
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

            get _viewSpecificationsOnClick$Action() {
                if (!(this.hasOwnProperty("__viewSpecificationsOnClick$Action"))) {
                    this.__viewSpecificationsOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ViewSpecificationsOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ViewSpecificationsOnClick");
                                span.setAttribute("outsystems.function.key", "b7da7600-317d-44ee-9d24-62f0d81b5ab3");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("ViewSpecificationsOnClick");
                                callContext = controller.callContext(callContext);
                                var jSONSerialize2Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                // JSON Serialize: JSONSerialize1
                                jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.availableCFDAccountsVar, false, false);
                                // JSON Serialize: JSONSerialize2
                                jSONSerialize2Var.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.createdCFDAccountsVar, false, false);
                                // Destination: /tradershub/TradingSpecification
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "TradingSpecification", {
                                    AvailableCFDAccounts: OS.DataConversion.ServerDataConverter.to(jSONSerialize1Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                    CreatedCFDAccounts: OS.DataConversion.ServerDataConverter.to(jSONSerialize2Var.value.jSONOut, OS.DataTypes.DataTypes.Text)
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

            get _onClickCreatedAccount$Action() {
                if (!(this.hasOwnProperty("__onClickCreatedAccount$Action"))) {
                    this.__onClickCreatedAccount$Action = function(selectedProductPropIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickCreatedAccount", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickCreatedAccount");
                                span.setAttribute("outsystems.function.key", "c0064aec-b060-4602-8bf4-e66860476de9");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickCreatedAccount");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.MainFlow.CFDs.OnClickCreatedAccount$vars"))());
                                vars.value.selectedProductPropInLocal = selectedProductPropIn;
                                // SetSelectedProduct
                                // SelectedProduct = SelectedProductProp
                                model.variables.selectedProductVar = vars.value.selectedProductPropInLocal;
                                // SelectedProduct = SelectedProductProp
                                tradershubClientVariables.setSelectedProduct(vars.value.selectedProductPropInLocal);
                                // ToggleTradeModal
                                // ShouldShowTradeModal = True
                                model.variables.shouldShowTradeModalVar = true;
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

            get _onReady$Action() {
                if (!(this.hasOwnProperty("__onReady$Action"))) {
                    this.__onReady$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnReady", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnReady");
                                span.setAttribute("outsystems.function.key", "d8a53e35-feca-40cb-80de-d0314624e459");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    // isLoading = True
                                    model.variables.isLoadingVar = true;
                                    // AccountType = "real"
                                    tradershubClientVariables.setAccountType("real");
                                    // isLoggedIn
                                    return OS.Flow.executeSequence(function() {
                                        if ((((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
                                            // Execute Action: GetCreatedCFDAccounts
                                            return controller._getCreatedCFDAccounts$Action(callContext).then(function() {
                                                // Execute Action: GetAvailableCFDAccounts2
                                                return controller._getAvailableCFDAccounts$Action(callContext);
                                            });
                                        } else {
                                            // Execute Action: GetAvailableCFDAccounts
                                            return controller._getAvailableCFDAccounts$Action(callContext).then(function() {
                                                if ((model.variables.availableCFDAccountsVar.isEmpty)) {
                                                    // ShouldShowWarningPopup = True
                                                    model.variables.shouldShowWarningPopupVar = true;
                                                    // AvailableCFDAccounts = GetCfdProductConfigs.List
                                                    model.variables.availableCFDAccountsVar = OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getCfdProductConfigsAggr.listOut, new tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936(), function(source, target) {
                                                        target = source.cfdProductConfigAttr;
                                                        return target;
                                                    });
                                                }

                                            });
                                        }

                                    }).then(function() {
                                        // isLoading = False
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

                return this.__onReady$Action;
            }
            set _onReady$Action(value) {
                this.__onReady$Action = value;
            }


            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "10e51eeb-255c-4af4-a956-0cb856f4be0a");
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

            onClickAvailableAccount$Action(selectedProductPropIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickAvailableAccount__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickAvailableAccount");
                        span.setAttribute("outsystems.function.key", "14314a1c-dc5b-4731-b91c-3f4447a00188");
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

            getCreatedCFDAccounts$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("GetCreatedCFDAccounts__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "GetCreatedCFDAccounts");
                        span.setAttribute("outsystems.function.key", "153b43cd-1e58-4596-a2c0-d758a1c32efb");
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

            setDemoValue$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SetDemoValue__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SetDemoValue");
                        span.setAttribute("outsystems.function.key", "33b8b3d7-eb99-46dd-a073-abe88a3fe7d1");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._setDemoValue$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "52b65f8d-219b-4cac-9f36-30abbfd4594e");
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

            setRealValue$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SetRealValue__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SetRealValue");
                        span.setAttribute("outsystems.function.key", "7ed7ac65-8bbf-4759-a783-615eb38bb0e8");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._setRealValue$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            toggleWarningPopup$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ToggleWarningPopup__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ToggleWarningPopup");
                        span.setAttribute("outsystems.function.key", "97a72a8d-356f-440c-9333-53e71d198492");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._toggleWarningPopup$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            cFDTradeModalOnCloseClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("CFDTradeModalOnCloseClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "CFDTradeModalOnCloseClick");
                        span.setAttribute("outsystems.function.key", "ac50326e-f4e4-4698-9892-49e8636054d3");
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

            viewSpecificationsOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ViewSpecificationsOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ViewSpecificationsOnClick");
                        span.setAttribute("outsystems.function.key", "b7da7600-317d-44ee-9d24-62f0d81b5ab3");
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

            onClickCreatedAccount$Action(selectedProductPropIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickCreatedAccount__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickCreatedAccount");
                        span.setAttribute("outsystems.function.key", "c0064aec-b060-4602-8bf4-e66860476de9");
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

            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "d8a53e35-feca-40cb-80de-d0314624e459");
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
        Controller.registerVariableGroupType("tradershub.MainFlow.CFDs.OnClickAvailableAccount$vars", [{
            name: "SelectedProductProp",
            attrName: "selectedProductPropInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.MainFlow.CFDs.OnClickAvailableAccount$checkIsPasswordSetJSResult", [{
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
        Controller.registerVariableGroupType("tradershub.MainFlow.CFDs.OnClickAvailableAccount$getSelectedPlatformJSResult", [{
            name: "Platform",
            attrName: "platformOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.MainFlow.CFDs.GetCreatedCFDAccounts$aggregateJSResult", [{
            name: "mappedResult",
            attrName: "mappedResultOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.MainFlow.CFDs.GetAvailableCFDAccounts$aggregateJSResult", [{
            name: "filteredAvailableAccounts",
            attrName: "filteredAvailableAccountsOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.MainFlow.CFDs.OnClickCreatedAccount$vars", [{
            name: "SelectedProductProp",
            attrName: "selectedProductPropInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.MainFlow.CFDs.mvc$controller.OnClickAvailableAccount.CheckIsPasswordSetJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const AccStatus = JSON.parse($parameters.AccountStatusRes);
        const StatusArr = AccStatus.get_account_status.status;

        $parameters.isMt5PasswordSet = !StatusArr.includes("mt5_password_not_set");
        $parameters.isDxtradePasswordSet = !StatusArr.includes("dxtrade_password_not_set");
    };
});

define("tradershub.MainFlow.CFDs.mvc$controller.OnClickAvailableAccount.GetSelectedPlatformJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Platform = $parameters.SelectedPlatformInput.split('_')[0]
    };
});

define("tradershub.MainFlow.CFDs.mvc$controller.GetCreatedCFDAccounts.AggregateJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const mt5Res = JSON.parse($parameters.MT5Res);
        const ctraderRes = JSON.parse($parameters.CtraderRes);
        const dxtradeRes = JSON.parse($parameters.DxtradeRes);
        const cfdConfig = JSON.parse($parameters.CfdConfig);
        const accountType = $parameters.AccountType; // 'real' or 'demo'

        // Early return to avoid "error: cannot read properties of undefined (reading map)"
        const mt5Accounts = mt5Res.mt5_login_list || [];
        const ctraderAccounts = ctraderRes.trading_platform_accounts || [];
        const dxtradeAccounts = dxtradeRes.trading_platform_accounts || []; // Assuming dxtrade is in the same response as cTrader

        // Add 'identifier' property for mapping purpose (derived from platform+product)
        const modifiedMt5Res = mt5Accounts.filter(account => account.account_type === accountType).map(account => {
            return {
                ...account,
                identifier: 'mt5_' + account.product
            }; // mt5_standard | mt5_financial | mt5_swap_free
        });

        // Calculate total balance for cTrader accounts where account_type matches
        const totalCtraderBalance = ctraderAccounts.reduce((sum, account) => {
            return account.account_type === accountType ?
                sum + (account.balance || 0) :
                sum;
        }, 0);

        // Filter and map cTrader accounts where account_type matches
        const modifiedCtraderRes = ctraderAccounts.filter(account => account.account_type === accountType).map(account => {
            return {
                ...account,
                identifier: account.platform + '_standard',
                total_balance: totalCtraderBalance
            };
        });

        // Filter and map dxTrade accounts where account_type matches
        const modifiedDxtradeRes = dxtradeAccounts.filter(account => account.account_type === accountType).map(account => {
            return {
                ...account,
                identifier: account.platform + '_standard'
            }; // dxtrade_standard 
        });

        // Combine platforms from all filtered and modified responses
        const combinedPlatforms = [
            ...modifiedMt5Res,
            ...modifiedCtraderRes,
            ...modifiedDxtradeRes
        ];

        // Remove duplicates based on ProductIdentifier
        const mappedResult = combinedPlatforms.reduce((acc, item) => {
            const matchedConfig = cfdConfig.find(c => c.CfdProductConfig.ProductIdentifier === item.identifier);

            if (matchedConfig && !acc.some(result => result.ProductIdentifier === matchedConfig.CfdProductConfig.ProductIdentifier)) {
                acc.push({
                    ...matchedConfig.CfdProductConfig,
                });
            }

            return acc;
        }, []);

        return $parameters.mappedResult = JSON.stringify(mappedResult);

    };
});

define("tradershub.MainFlow.CFDs.mvc$controller.GetAvailableCFDAccounts.AggregateJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const mt5Res = JSON.parse($parameters.MT5Res);
        const ctraderRes = JSON.parse($parameters.CtraderRes);
        const cfdConfig = JSON.parse($parameters.CfdConfig);
        const createdAccounts = JSON.parse($parameters.CreatedAccounts);

        // Set trading_platform_available_accounts to an empty array if it's null or undefined (i.e. logged-out users)
        const mt5Accounts = mt5Res.trading_platform_available_accounts || [];
        const ctraderAccounts = ctraderRes.trading_platform_available_accounts || [];
        const dxtradeAccounts = ctraderRes.trading_platform_available_accounts || []; // Assuming dxtrade is in the same response as cTrader

        // add 'identifier' property for mapping purpose (derived from platform+product)
        const modifiedCtraderRes = ctraderAccounts.map(account => {
            return {
                ...account,
                identifier: 'ctrader_standard'
            }; // ctrader_standard
        });

        const modifiedMt5Res = mt5Accounts.map(account => {
            return {
                ...account,
                identifier: 'mt5_' + account.product
            }; // mt5_standard | mt5_financial | mt5_swap_free
        });

        const modifiedDxtradeRes = dxtradeAccounts.map(account => {
            return {
                ...account,
                identifier: 'dxtrade_standard'
            }; // dxtrade_standard
        });

        // Combine platforms from all responses
        const combinedPlatforms = [
            ...modifiedMt5Res,
            ...modifiedCtraderRes,
            ...modifiedDxtradeRes
        ];

        // Remove duplicates based on ProductIdentifier (due to multiple accounts from different jurisdiction)
        const mappedResult = combinedPlatforms.reduce((acc, item) => {
            const matchedConfig = cfdConfig.find(c => c.CfdProductConfig.ProductIdentifier === item.identifier);

            if (matchedConfig && !acc.some(result => result.ProductIdentifier === matchedConfig.CfdProductConfig.ProductIdentifier)) {
                acc.push(matchedConfig.CfdProductConfig);
            }

            return acc;
        }, []);

        // Remove from result when it's also existing in CreatedAccount (TEMP: BE card will filter for us)
        const filteredAvailableAccounts = mappedResult.filter(availableAccount =>
            !createdAccounts.some(createdAccount => createdAccount.ProductIdentifier === availableAccount.ProductIdentifier)
        );

        return $parameters.filteredAvailableAccounts = JSON.stringify(filteredAvailableAccounts);

    };
});


define("tradershub.MainFlow.CFDs.mvc$translationsResources.fr-FR", [], function() {
    return {
        "qJy91w_tAU6SSkSpIQko3w#Value": "Voir les spécifications",
        "GuYO+RgE7EC7uwcXy6+7og#Value": "Comptes disponibles",
        "zN2pTqe+b0Cy7Y8pcFO24Q#Value": "Mes comptes",
        "wLYrIPyvu02yxEVVxSQKaA#Value": "Tradez des positions plus importantes avec moins de capital sur un large éventail de marchés mondiaux.",
        "BwB0FjyCoUK_kc0XmYEm0g#Value": "trading de CFD"
    };
});

define("tradershub.MainFlow.CFDs.mvc$translationsResources", ["exports", "tradershub.MainFlow.CFDs.mvc$translationsResources.fr-FR"], function(exports, tradershub_MainFlow_CFDs_mvc_translationsResources_frFR) {
    return {
        "fr-FR": {
            "translations": tradershub_MainFlow_CFDs_mvc_translationsResources_frFR,
            "isRTL": false
        }
    };
});