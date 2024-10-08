define("tradershub.MainFlow.CFDs.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "tradershub.Layouts.MainLayout.mvc$model", "tradershub.MainFlowBlocks.LoggedOutBanner.mvc$model", "tradershub.Common.LoaderBlock.mvc$model", "OutSystemsUI.Content.Tooltip.mvc$model", "tradershub.CFDBlocks.TradingAppCardLarge.mvc$model", "tradershub.CFDBlocks.TradingAppCardSmall.mvc$model", "tradershub.model$EN_8212284ed6913c62a123b32716b72fbaEntityRecord", "tradershub.model$RL_9eb97ad6cb81943972e368260e0cb936", "tradershub.controller$FeatureFlagValueByName", "RESTAPIWebsocketOfficial.model$ST_75725e65d106c1568a850780233a08baStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$TradingPlatformAccounts", "RESTAPIWebsocketOfficial.model$ST_2f457e0a5b13526850516eea23ae0e9aStructure", "tradershub.controller$MT5LoginList", "tradershub.model$RC_07be8d7193ba16b1cc9d953b8fa48e9d", "tradershub.model$RL_ee1664da44e6893a731536d754684359", "tradershub.model$ST_8907948f85abfce9f41b7aac6149d55eStructure", "tradershub.controller$MT5TradingPlatformAvailableAccounts", "tradershub.model$ST_3c6ba624991ba71a1d179d7c7ef27261Structure", "tradershub.controller$CtraderTradingPlatformAvailableAccounts"], function(OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, tradershub_Layouts_MainLayout_mvcModel, tradershub_MainFlowBlocks_LoggedOutBanner_mvcModel, tradershub_Common_LoaderBlock_mvcModel, OutSystemsUI_Content_Tooltip_mvcModel, tradershub_CFDBlocks_TradingAppCardLarge_mvcModel, tradershub_CFDBlocks_TradingAppCardSmall_mvcModel) {
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
                    this.attr("isLoading", "isLoadingVar", "isLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
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
                Model._hasValidationWidgetsValue = (((((tradershub_Layouts_MainLayout_mvcModel.hasValidationWidgets || tradershub_MainFlowBlocks_LoggedOutBanner_mvcModel.hasValidationWidgets) || tradershub_Common_LoaderBlock_mvcModel.hasValidationWidgets) || OutSystemsUI_Content_Tooltip_mvcModel.hasValidationWidgets) || tradershub_CFDBlocks_TradingAppCardLarge_mvcModel.hasValidationWidgets) || tradershub_CFDBlocks_TradingAppCardSmall_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.MainFlow.CFDs.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "react", "@outsystems/runtime-view-js", "tradershub.MainFlow.CFDs.mvc$model", "tradershub.MainFlow.CFDs.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.MainLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.MainFlowBlocks.LoggedOutBanner.mvc$view", "tradershub.Common.LoaderBlock.mvc$view", "OutSystemsUI.Content.Tooltip.mvc$view", "tradershub.CFDBlocks.TradingAppCardLarge.mvc$view", "tradershub.CFDBlocks.TradingAppCardSmall.mvc$view", "tradershub.model$EN_8212284ed6913c62a123b32716b72fbaEntityRecord", "tradershub.model$RL_9eb97ad6cb81943972e368260e0cb936", "tradershub.controller$FeatureFlagValueByName", "RESTAPIWebsocketOfficial.model$ST_75725e65d106c1568a850780233a08baStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$TradingPlatformAccounts", "RESTAPIWebsocketOfficial.model$ST_2f457e0a5b13526850516eea23ae0e9aStructure", "tradershub.controller$MT5LoginList", "tradershub.model$RC_07be8d7193ba16b1cc9d953b8fa48e9d", "tradershub.model$RL_ee1664da44e6893a731536d754684359", "tradershub.model$ST_8907948f85abfce9f41b7aac6149d55eStructure", "tradershub.controller$MT5TradingPlatformAvailableAccounts", "tradershub.model$ST_3c6ba624991ba71a1d179d7c7ef27261Structure", "tradershub.controller$CtraderTradingPlatformAvailableAccounts"], function(OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, React, OSView, tradershub_MainFlow_CFDs_mvc_model, tradershub_MainFlow_CFDs_mvc_controller, tradershubClientVariables, tradershub_Layouts_MainLayout_mvc_view, OSWidgets, tradershub_MainFlowBlocks_LoggedOutBanner_mvc_view, tradershub_Common_LoaderBlock_mvc_view, OutSystemsUI_Content_Tooltip_mvc_view, tradershub_CFDBlocks_TradingAppCardLarge_mvc_view, tradershub_CFDBlocks_TradingAppCardSmall_mvc_view) {
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
            return [tradershub_Layouts_MainLayout_mvc_view, tradershub_MainFlowBlocks_LoggedOutBanner_mvc_view, tradershub_Common_LoaderBlock_mvc_view, OutSystemsUI_Content_Tooltip_mvc_view, tradershub_CFDBlocks_TradingAppCardLarge_mvc_view, tradershub_CFDBlocks_TradingAppCardSmall_mvc_view];
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
                        }), $if(model.variables.isLoadingVar, false, this, function() {
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
                                    uuid: "2",
                                    alias: "3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [React.createElement(OSWidgets.Container, {
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
                                    uuid: "6",
                                    alias: "4"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    content: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Image, {
                                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info.svg"),
                                            type: /*Static*/ 0,
                                            _idProps: {
                                                service: idService,
                                                uuid: "7"
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
                                    uuid: "9"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "height: auto; margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                                },
                                gridProperties: {
                                    marginLeft: "0px"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "MyAccountsSection"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, $if((model.variables.createdCFDAccountsVar.length > 0), false, this, function() {
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
                                        name: "MyAccountsHeader"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "font-size: 16px; font-weight: bold; margin-top: 0px;"
                                    },
                                    text: ["My accounts"],
                                    _idProps: {
                                        service: idService,
                                        uuid: "12"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        name: "MyAccountsCardContainer"
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
                                    source: model.variables.createdCFDAccountsVar,
                                    style: "",
                                    tag: "div",
                                    _idProps: {
                                        service: idService,
                                        name: "MyAccountsCardsList"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    placeholders: {
                                        content: new IteratorPlaceholderContent(function(idService, callContext) {
                                            return [React.createElement(tradershub_CFDBlocks_TradingAppCardLarge_mvc_view, {
                                                getOwnerSpan: function() {
                                                    return _this.getChildSpan("render");
                                                },
                                                getOwnerDisposeSpan: function() {
                                                    return _this.getChildSpan("destroy");
                                                },
                                                inputs: {
                                                    ProductIcon: model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).iconAttr,
                                                    ProductDescription: model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).descriptionAttr,
                                                    Name: model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).titleAttr
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
                                                    uuid: "15",
                                                    alias: "5"
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
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "height: auto; margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
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
                                        uuid: "18"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        name: "AvailableAccountsCardContainer"
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
                                                    ProductDescription: model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).descriptionAttr,
                                                    Name: model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).titleAttr,
                                                    ProductIcon: model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).iconAttr
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
                                                    uuid: "21",
                                                    alias: "6"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider,
                                                _dependencies: []
                                            })];
                                        }, callContext, idService, "2")
                                    },
                                    _dependencies: []
                                }))];
                            }, function() {
                                return [];
                            })))];
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.availableCFDAccountsVar), asPrimitiveValue(model.variables.createdCFDAccountsVar), asPrimitiveValue(model.variables.isLoadingVar)]
            }));
        }
    }

    return View;
});
define("tradershub.MainFlow.CFDs.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.MainFlow.controller", "tradershub.MainFlow.CFDs.mvc$controller.GetCreatedCFDAccounts.AggregateJS", "tradershub.MainFlow.CFDs.mvc$controller.GetAvailableCFDAccounts.AggregateJS", "tradershub.model$EN_8212284ed6913c62a123b32716b72fbaEntityRecord", "tradershub.model$RL_9eb97ad6cb81943972e368260e0cb936", "tradershub.controller$FeatureFlagValueByName", "RESTAPIWebsocketOfficial.model$ST_75725e65d106c1568a850780233a08baStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$TradingPlatformAccounts", "RESTAPIWebsocketOfficial.model$ST_2f457e0a5b13526850516eea23ae0e9aStructure", "tradershub.controller$MT5LoginList", "tradershub.model$RC_07be8d7193ba16b1cc9d953b8fa48e9d", "tradershub.model$RL_ee1664da44e6893a731536d754684359", "tradershub.model$ST_8907948f85abfce9f41b7aac6149d55eStructure", "tradershub.controller$MT5TradingPlatformAvailableAccounts", "tradershub.model$ST_3c6ba624991ba71a1d179d7c7ef27261Structure", "tradershub.controller$CtraderTradingPlatformAvailableAccounts"], function(OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, tradershubLanguageResources, tradershubClientVariables, tradershub_MainFlowController, tradershub_MainFlow_CFDs_mvc_controller_GetCreatedCFDAccounts_AggregateJS, tradershub_MainFlow_CFDs_mvc_controller_GetAvailableCFDAccounts_AggregateJS) {
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
                                        // JSON Serialize: MT5ResJSONSerialize
                                        mT5ResJSONSerializeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(mT5LoginListVar.value.responseOut, false, false);
                                        // JSON Serialize: CtraderResJSONSerialize
                                        ctraderResJSONSerializeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(ctraderTradingPlatformAccountsVar.value.responseOut, false, false);
                                        // JSON Serialize: DxtradeResJSONSerialize
                                        dxtradeResJSONSerializeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(dxtradeTradingPlatformAccountsVar.value.responseOut, false, false);
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
                                        return tradershubController.default.ctraderTradingPlatformAvailableAccounts$Action(true, callContext).then(function(value) {
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
                                    // isLoggedIn
                                    return OS.Flow.executeSequence(function() {
                                        if ((((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
                                            // Execute Action: GetCreatedCFDAccounts
                                            return controller._getCreatedCFDAccounts$Action(callContext);
                                        }

                                    }).then(function() {
                                        // Execute Action: GetAvailableCFDAccounts
                                        return controller._getAvailableCFDAccounts$Action(callContext).then(function() {
                                            // isLoading = False
                                            model.variables.isLoadingVar = false;
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

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._getCreatedCFDAccounts$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
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

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.MainFlow.CFDs.mvc$controller.GetCreatedCFDAccounts.AggregateJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const mt5Res = JSON.parse($parameters.MT5Res);
        const ctraderRes = JSON.parse($parameters.CtraderRes);
        const dxtradeRes = JSON.parse($parameters.DxtradeRes);

        const cfdConfig = JSON.parse($parameters.CfdConfig);

        // add 'identifier' property for mapping purpose (derived from platform+product)
        const modifiedMt5Res = mt5Res.mt5_login_list.map(account => {
            return {
                ...account,
                identifier: 'mt5_' + account.product
            }; // mt5_standard | mt5_financial | mt5_swap_free
        });

        const modifiedCtraderRes = ctraderRes.trading_platform_accounts.map(account => {
            return {
                ...account,
                identifier: account.platform + '_standard'
            }; // ctrader_standard
        });

        const modifiedDxtradeRes = dxtradeRes.trading_platform_accounts.map(account => {
            return {
                ...account,
                identifier: account.platform + '_standard'
            }; // dxtrade_standard 
        });

        // Combine platforms from all responses
        const combinedPlatforms = [
            ...modifiedMt5Res,
            ...modifiedCtraderRes,
            ...modifiedDxtradeRes
        ];


        // Remove duplicates based on ProductIdentifier (due to multiple accounts from different jurisdiction: )
        const mappedResult = combinedPlatforms.reduce((acc, item) => {
            const matchedConfig = cfdConfig.find(c => c.CfdProductConfig.ProductIdentifier === item.identifier);

            if (matchedConfig && !acc.some(result => result.ProductIdentifier === matchedConfig.CfdProductConfig.ProductIdentifier)) {
                acc.push(matchedConfig.CfdProductConfig);
            }

            return acc;
        }, []);

        return $parameters.mappedResult = JSON.stringify(mappedResult)

    };
});

define("tradershub.MainFlow.CFDs.mvc$controller.GetAvailableCFDAccounts.AggregateJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const mt5Res = JSON.parse($parameters.MT5Res);
        const ctraderRes = JSON.parse($parameters.CtraderRes);
        const cfdConfig = JSON.parse($parameters.CfdConfig);
        const createdAccounts = JSON.parse($parameters.CreatedAccounts);

        // add 'identifier' property for mapping purpose (derived from platform+product)
        const modifiedCtraderRes = ctraderRes.trading_platform_available_accounts.map(account => {
            return {
                ...account,
                identifier: 'ctrader_standard'
            }; // ctrader_standard
        });

        const modifiedMt5Res = mt5Res.trading_platform_available_accounts.map(account => {
            return {
                ...account,
                identifier: 'mt5_' + account.product
            }; // mt5_standard | mt5_financial | mt5_swap_free
        });

        const modifiedDxtradeRes = ctraderRes.trading_platform_available_accounts.map(account => {
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

        // Remove duplicates based on ProductIdentifier (due to multiple accounts from different jurisdiction: )
        const mappedResult = combinedPlatforms.reduce((acc, item) => {
            const matchedConfig = cfdConfig.find(c => c.CfdProductConfig.ProductIdentifier === item.identifier);

            if (matchedConfig && !acc.some(result => result.ProductIdentifier === matchedConfig.CfdProductConfig.ProductIdentifier)) {
                acc.push(matchedConfig.CfdProductConfig);
            }

            return acc;
        }, []);

        // Remove from result when it's also existing in CreatedAccount
        const filteredAvailableAccounts = mappedResult.filter(availableAccount =>
            !createdAccounts.some(createdAccount => createdAccount.ProductIdentifier === availableAccount.ProductIdentifier)
        );



        return $parameters.filteredAvailableAccounts = JSON.stringify(filteredAvailableAccounts)

    };
});