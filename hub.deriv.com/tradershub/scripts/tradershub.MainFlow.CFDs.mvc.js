define("tradershub.MainFlow.CFDs.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "BrowserConsoleLogging.controller", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "tradershub.Layouts.MainLayout.mvc$model", "tradershub.MainFlowBlocks.LoggedOutBanner.mvc$model", "OutSystemsUI.Content.Tooltip.mvc$model", "tradershub.CFDBlocks.TradingAppCardLarge.mvc$model", "tradershub.CFDBlocks.TradingAppCardSmall.mvc$model", "tradershub.model$EN_8212284ed6913c62a123b32716b72fbaEntityRecord", "tradershub.model$RL_9eb97ad6cb81943972e368260e0cb936", "tradershub.controller$FeatureFlagValueByName", "BrowserConsoleLogging.controller$ConsoleLog", "tradershub.referencesHealth", "tradershub.referencesHealth$BrowserConsoleLogging", "RESTAPIWebsocketOfficial.model$ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_7a752455e27bb9ea87d724bbb902dd16Structure", "RESTAPIWebsocketOfficial.controller$TradingPlatformAvailableAccountsMt5", "RESTAPIWebsocketOfficial.model$ST_a6a60f46ebdfbc286beab7fb13984df8Structure", "RESTAPIWebsocketOfficial.controller$TradingPlatformAvailableAccountsCtrader", "RESTAPIWebsocketOfficial.model$ST_ae15e885fd6defd7e40491664a35bff0Structure", "tradershub.model$RL_e615c73f7c49d5c9a1b81b0e5505c2d5", "RESTAPIWebsocketOfficial.model$ST_9b3eaf42648c2b28591e8ee92b7ce159Structure", "tradershub.model$RL_016ebe8f15c3060e53dd56f2fea28791", "tradershub.model$RC_07be8d7193ba16b1cc9d953b8fa48e9d", "tradershub.model$RL_ee1664da44e6893a731536d754684359"], function(OSRuntimeCore, tradershubModel, tradershubController, BrowserConsoleLoggingController, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, tradershub_Layouts_MainLayout_mvcModel, tradershub_MainFlowBlocks_LoggedOutBanner_mvcModel, OutSystemsUI_Content_Tooltip_mvcModel, tradershub_CFDBlocks_TradingAppCardLarge_mvcModel, tradershub_CFDBlocks_TradingAppCardSmall_mvcModel) {
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
                    this.attr("AuthToken", "authTokenVar", "AuthToken", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "a1-e08MVLrCEBvfaxReubwv0feKjiEYs";
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
                Model._hasValidationWidgetsValue = ((((tradershub_Layouts_MainLayout_mvcModel.hasValidationWidgets || tradershub_MainFlowBlocks_LoggedOutBanner_mvcModel.hasValidationWidgets) || OutSystemsUI_Content_Tooltip_mvcModel.hasValidationWidgets) || tradershub_CFDBlocks_TradingAppCardLarge_mvcModel.hasValidationWidgets) || tradershub_CFDBlocks_TradingAppCardSmall_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.MainFlow.CFDs.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "BrowserConsoleLogging.controller", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "react", "@outsystems/runtime-view-js", "tradershub.MainFlow.CFDs.mvc$model", "tradershub.MainFlow.CFDs.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.MainLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.MainFlowBlocks.LoggedOutBanner.mvc$view", "OutSystemsUI.Content.Tooltip.mvc$view", "tradershub.CFDBlocks.TradingAppCardLarge.mvc$view", "tradershub.CFDBlocks.TradingAppCardSmall.mvc$view", "tradershub.model$EN_8212284ed6913c62a123b32716b72fbaEntityRecord", "tradershub.model$RL_9eb97ad6cb81943972e368260e0cb936", "tradershub.controller$FeatureFlagValueByName", "BrowserConsoleLogging.controller$ConsoleLog", "tradershub.referencesHealth", "tradershub.referencesHealth$BrowserConsoleLogging", "RESTAPIWebsocketOfficial.model$ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_7a752455e27bb9ea87d724bbb902dd16Structure", "RESTAPIWebsocketOfficial.controller$TradingPlatformAvailableAccountsMt5", "RESTAPIWebsocketOfficial.model$ST_a6a60f46ebdfbc286beab7fb13984df8Structure", "RESTAPIWebsocketOfficial.controller$TradingPlatformAvailableAccountsCtrader", "RESTAPIWebsocketOfficial.model$ST_ae15e885fd6defd7e40491664a35bff0Structure", "tradershub.model$RL_e615c73f7c49d5c9a1b81b0e5505c2d5", "RESTAPIWebsocketOfficial.model$ST_9b3eaf42648c2b28591e8ee92b7ce159Structure", "tradershub.model$RL_016ebe8f15c3060e53dd56f2fea28791", "tradershub.model$RC_07be8d7193ba16b1cc9d953b8fa48e9d", "tradershub.model$RL_ee1664da44e6893a731536d754684359"], function(OSRuntimeCore, tradershubModel, tradershubController, BrowserConsoleLoggingController, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, React, OSView, tradershub_MainFlow_CFDs_mvc_model, tradershub_MainFlow_CFDs_mvc_controller, tradershubClientVariables, tradershub_Layouts_MainLayout_mvc_view, OSWidgets, tradershub_MainFlowBlocks_LoggedOutBanner_mvc_view, OutSystemsUI_Content_Tooltip_mvc_view, tradershub_CFDBlocks_TradingAppCardLarge_mvc_view, tradershub_CFDBlocks_TradingAppCardSmall_mvc_view) {
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
            return [tradershub_Layouts_MainLayout_mvc_view, tradershub_MainFlowBlocks_LoggedOutBanner_mvc_view, OutSystemsUI_Content_Tooltip_mvc_view, tradershub_CFDBlocks_TradingAppCardLarge_mvc_view, tradershub_CFDBlocks_TradingAppCardSmall_mvc_view];
        }

        get modelFactory() {
            return tradershub_MainFlow_CFDs_mvc_model;
        }

        get controllerFactory() {
            return tradershub_MainFlow_CFDs_mvc_controller;
        }

        get title() {


            return "CFDs";
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
                                style: "margin-top: 10px;"
                            },
                            style: "display-flex justify-content-flex-start",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "CFDsHeader"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "TitleAndTooltip"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 24px; font-weight: bold;"
                            },
                            text: ["CFDs trading"],
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
                                    return [React.createElement(OSWidgets.Image, {
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info.svg"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })];
                                }),
                                tooltip: new PlaceholderContent(function() {
                                    return ["Trade bigger positions with less capital on a wide range of global markets."];
                                })
                            },
                            _dependencies: []
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            gridProperties: {
                                classes: "ThemeGrid_Width2"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "DemoRealSwitcher"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "display: flex; flex-direction: column; gap: 16px; height: 100vh;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "8"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "height: Fill;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "MyAccountsSection"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $if((model.variables.availableCFDAccountsVar.length > 0), false, this, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "margin-bottom: 20px; margin-top: 20px;"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "ExistingAccountsHeader"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: bold; margin-top: 0px;"
                                },
                                text: ["My accounts"],
                                _idProps: {
                                    service: idService,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "height: Auto; margin-bottom: 10px; margin-right: 0px; margin-top: 0px;"
                                },
                                gridProperties: {
                                    marginLeft: "0px"
                                },
                                style: "display-flex gap-s flex-wrap justify-content-space-between",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "ExistingAccountsCardsList"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                gridProperties: {
                                    classes: "ThemeGrid_Width4"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "ListItem"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(tradershub_CFDBlocks_TradingAppCardLarge_mvc_view, {
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
                                    alias: "4"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                gridProperties: {
                                    classes: "ThemeGrid_Width4"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "ListItem2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(tradershub_CFDBlocks_TradingAppCardLarge_mvc_view, {
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
                                    alias: "5"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                gridProperties: {
                                    classes: "ThemeGrid_Width4"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "ListItem3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(tradershub_CFDBlocks_TradingAppCardLarge_mvc_view, {
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
                                    alias: "6"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })))];
                        }, function() {
                            return [];
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "height: 100; margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                            },
                            gridProperties: {
                                marginLeft: "0px"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "AvailableAccountsSection"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $if((model.variables.availableCFDAccountsVar.length > 0), false, this, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "margin-bottom: 20px; margin-top: 20px;"
                                },
                                style: "",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "AvailableAccountsHeader"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: bold; margin-top: 0px;"
                                },
                                text: ["Available accounts"],
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
                                    name: "pedo"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.List, {
                                animateItems: false,
                                extendedProperties: {
                                    "disable-virtualization": "True",
                                    style: "display: grid; gap: 16px; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); height: 100%;"
                                },
                                gridProperties: {
                                    width: "100%"
                                },
                                mode: /*Default*/ 0,
                                source: model.variables.availableCFDAccountsVar,
                                style: "",
                                tag: "div",
                                _idProps: {
                                    service: idService,
                                    name: "AvailableAccountsCardsList"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    content: new IteratorPlaceholderContent(function(idService, callContext) {
                                        return [React.createElement(tradershub_CFDBlocks_TradingAppCardSmall_mvc_view, {
                                            getOwnerSpan: function() {
                                                return _this.getChildSpan("render");
                                            },
                                            getOwnerDisposeSpan: function() {
                                                return _this.getChildSpan("destroy");
                                            },
                                            inputs: {
                                                ProductIcon: model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).iconAttr,
                                                Name: model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).titleAttr,
                                                ProductDescription: model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).descriptionAttr
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
                                                uuid: "24",
                                                alias: "7"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        })];
                                    }, callContext, idService, "1")
                                },
                                _dependencies: []
                            }))];
                        }, function() {
                            return [];
                        })))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.availableCFDAccountsVar)]
            }));
        }
    }

    return View;
});
define("tradershub.MainFlow.CFDs.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "BrowserConsoleLogging.controller", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.MainFlow.controller", "tradershub.model$EN_8212284ed6913c62a123b32716b72fbaEntityRecord", "tradershub.model$RL_9eb97ad6cb81943972e368260e0cb936", "tradershub.controller$FeatureFlagValueByName", "BrowserConsoleLogging.controller$ConsoleLog", "tradershub.referencesHealth", "tradershub.referencesHealth$BrowserConsoleLogging", "RESTAPIWebsocketOfficial.model$ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_7a752455e27bb9ea87d724bbb902dd16Structure", "RESTAPIWebsocketOfficial.controller$TradingPlatformAvailableAccountsMt5", "RESTAPIWebsocketOfficial.model$ST_a6a60f46ebdfbc286beab7fb13984df8Structure", "RESTAPIWebsocketOfficial.controller$TradingPlatformAvailableAccountsCtrader", "RESTAPIWebsocketOfficial.model$ST_ae15e885fd6defd7e40491664a35bff0Structure", "tradershub.model$RL_e615c73f7c49d5c9a1b81b0e5505c2d5", "RESTAPIWebsocketOfficial.model$ST_9b3eaf42648c2b28591e8ee92b7ce159Structure", "tradershub.model$RL_016ebe8f15c3060e53dd56f2fea28791", "tradershub.model$RC_07be8d7193ba16b1cc9d953b8fa48e9d", "tradershub.model$RL_ee1664da44e6893a731536d754684359"], function(OSRuntimeCore, tradershubModel, tradershubController, BrowserConsoleLoggingController, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, tradershubLanguageResources, tradershubClientVariables, tradershub_MainFlowController) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService);
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
                            return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetCfdProductConfigs", "screenservices/tradershub/MainFlow/CFDs/ScreenDataSetGetCfdProductConfigs", "y8ma744H5qZFLk_qQdS6IA", maxRecords, startIndex, function(b) {
                                model.variables.getCfdProductConfigsAggr.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.getCfdProductConfigsAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getCfdProductConfigsAggr.constructor));
                            }, undefined, undefined, undefined, callContext, undefined, false).then(function() {
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

                            try {
                                controller.ensureControllerAlive("GetCreatedCFDAccounts");
                                callContext = controller.callContext(callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__getCreatedCFDAccounts$Action;
            }
            set _getCreatedCFDAccounts$Action(value) {
                this.__getCreatedCFDAccounts$Action = value;
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
                                var mt5TradingPlatformAvailableAccountsVar = new OS.DataTypes.VariableHolder();
                                var cTraderTradingPlatformAvailableAccountsVar = new OS.DataTypes.VariableHolder();
                                var ctraderAvailableAccountVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var mT5AvailableAccountVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var cfdProductConfigsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: cTraderTradingPlatformAvailableAccounts
                                    model.flush();
                                    return RESTAPIWebsocketOfficialController.default.tradingPlatformAvailableAccountsCtrader$Action("green.derivws.com", model.variables.authTokenVar, "1", "en", function() {
                                        var rec = new RESTAPIWebsocketOfficialModel.ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure();
                                        rec.platformAttr = "ctrader";
                                        return rec;
                                    }(), callContext).then(function(value) {
                                        cTraderTradingPlatformAvailableAccountsVar.value = value;
                                    }).then(function() {
                                        // Execute Action: Mt5TradingPlatformAvailableAccounts
                                        model.flush();
                                        return RESTAPIWebsocketOfficialController.default.tradingPlatformAvailableAccountsMt5$Action("green.derivws.com", model.variables.authTokenVar, "1", "en", function() {
                                            var rec = new RESTAPIWebsocketOfficialModel.ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure();
                                            rec.platformAttr = "mt5";
                                            return rec;
                                        }(), callContext).then(function(value) {
                                            mt5TradingPlatformAvailableAccountsVar.value = value;
                                        });
                                    }).then(function() {
                                        // JSON Serialize: MT5AvailableAccount
                                        mT5AvailableAccountVar.value.jSONOut = OS.JSONUtils.serializeToJSON(mt5TradingPlatformAvailableAccountsVar.value.responseMT5Out.trading_platform_available_accountsAttr, false, false);
                                        // JSON Serialize: CtraderAvailableAccount
                                        ctraderAvailableAccountVar.value.jSONOut = OS.JSONUtils.serializeToJSON(cTraderTradingPlatformAvailableAccountsVar.value.responseCtraderOut.trading_platform_available_accountsAttr, false, false);
                                        // JSON Serialize: CfdProductConfigs
                                        cfdProductConfigsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.getCfdProductConfigsAggr.listOut, false, false);
                                        // Execute Action: ConsoleLog
                                        BrowserConsoleLoggingController.default.consoleLog$Action(mt5TradingPlatformAvailableAccountsVar.value.responseMT5Out.errorAttr.messageAttr, 0, callContext);
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
                                    // Execute Action: GetCreatedCFDAccounts
                                    controller._getCreatedCFDAccounts$Action(callContext);
                                    // Execute Action: GetAvailableCFDAccounts
                                    return controller._getAvailableCFDAccounts$Action(callContext);
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

                    try {
                        return controller.safeExecuteClientAction(controller._getCreatedCFDAccounts$Action, callContext);
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

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});