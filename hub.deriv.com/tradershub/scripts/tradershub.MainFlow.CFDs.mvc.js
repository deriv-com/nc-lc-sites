define("tradershub.MainFlow.CFDs.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "tradershub.Layouts.MainLayout.mvc$model", "OutSystemsUI.Numbers.Rating.mvc$model", "OutSystemsUI.Content.Tooltip.mvc$model", "tradershub.CFDBlocks.TradingAppCard.mvc$model", "tradershub.model$EN_8212284ed6913c62a123b32716b72fbaEntityRecord", "tradershub.model$RL_9eb97ad6cb81943972e368260e0cb936", "tradershub.controller$FeatureFlagValueByName", "RESTAPIWebsocket.model$ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket", "RESTAPIWebsocket.model$ST_7a752455e27bb9ea87d724bbb902dd16Structure", "RESTAPIWebsocket.controller$TradingPlatformAvailableAccounts", "RESTAPIWebsocket.model$ST_9b3eaf42648c2b28591e8ee92b7ce159Structure", "tradershub.model$RL_016ebe8f15c3060e53dd56f2fea28791", "tradershub.model$RC_07be8d7193ba16b1cc9d953b8fa48e9d", "tradershub.model$RL_ee1664da44e6893a731536d754684359", "tradershub.model$ST_d9250f167f0b0818f60ee73b22ec1a06Structure"], function(OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketModel, RESTAPIWebsocketController, tradershub_Layouts_MainLayout_mvcModel, OutSystemsUI_Numbers_Rating_mvcModel, OutSystemsUI_Content_Tooltip_mvcModel, tradershub_CFDBlocks_TradingAppCard_mvcModel) {
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
        class TrustPilotDataActRecInner extends
        OS.Model.DataSourceRecord {
            static attributesToDeclare() {
                return [
                    this.attr("TrustPilotOutput", "trustPilotOutputOut", "TrustPilotOutput", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_d9250f167f0b0818f60ee73b22ec1a06Structure());
                    }, true, tradershubModel.ST_d9250f167f0b0818f60ee73b22ec1a06Structure)
                ].concat(OS.Model.DataSourceRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new TrustPilotDataActRec(new TrustPilotDataActRec.RecordClass({
                    trustPilotOutputOut: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        var TrustPilotDataActRec = TrustPilotDataActRecInner;
        TrustPilotDataActRec.init();
    }

    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("authToken", "authTokenVar", "authToken", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "a1-D1r9tSkjLvDLkcAyTeJECKx2xZaTY";
                    }, false),
                    this.attr("AvailableCFDAccounts", "availableCFDAccountsVar", "AvailableCFDAccounts", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936());
                    }, false, tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936),
                    this.attr("GetCfdProductConfigs", "getCfdProductConfigsAggr", "GetCfdProductConfigs", true, true, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new GetCfdProductConfigsAggrRec());
                    }, true, GetCfdProductConfigsAggrRec),
                    this.attr("TrustPilot", "trustPilotDataAct", "TrustPilot", true, true, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new TrustPilotDataActRec());
                    }, true, TrustPilotDataActRec)
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
                Model._hasValidationWidgetsValue = (((tradershub_Layouts_MainLayout_mvcModel.hasValidationWidgets || OutSystemsUI_Numbers_Rating_mvcModel.hasValidationWidgets) || OutSystemsUI_Content_Tooltip_mvcModel.hasValidationWidgets) || tradershub_CFDBlocks_TradingAppCard_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.MainFlow.CFDs.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "react", "@outsystems/runtime-view-js", "tradershub.MainFlow.CFDs.mvc$model", "tradershub.MainFlow.CFDs.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.MainLayout.mvc$view", "@outsystems/runtime-widgets-js", "OutSystemsUI.Numbers.Rating.mvc$view", "OutSystemsUI.Content.Tooltip.mvc$view", "tradershub.CFDBlocks.TradingAppCard.mvc$view", "tradershub.model$EN_8212284ed6913c62a123b32716b72fbaEntityRecord", "tradershub.model$RL_9eb97ad6cb81943972e368260e0cb936", "tradershub.controller$FeatureFlagValueByName", "RESTAPIWebsocket.model$ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket", "RESTAPIWebsocket.model$ST_7a752455e27bb9ea87d724bbb902dd16Structure", "RESTAPIWebsocket.controller$TradingPlatformAvailableAccounts", "RESTAPIWebsocket.model$ST_9b3eaf42648c2b28591e8ee92b7ce159Structure", "tradershub.model$RL_016ebe8f15c3060e53dd56f2fea28791", "tradershub.model$RC_07be8d7193ba16b1cc9d953b8fa48e9d", "tradershub.model$RL_ee1664da44e6893a731536d754684359", "tradershub.model$ST_d9250f167f0b0818f60ee73b22ec1a06Structure"], function(OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketModel, RESTAPIWebsocketController, React, OSView, tradershub_MainFlow_CFDs_mvc_model, tradershub_MainFlow_CFDs_mvc_controller, tradershubClientVariables, tradershub_Layouts_MainLayout_mvc_view, OSWidgets, OutSystemsUI_Numbers_Rating_mvc_view, OutSystemsUI_Content_Tooltip_mvc_view, tradershub_CFDBlocks_TradingAppCard_mvc_view) {
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
            return [tradershub_Layouts_MainLayout_mvc_view, OutSystemsUI_Numbers_Rating_mvc_view, OutSystemsUI_Content_Tooltip_mvc_view, tradershub_CFDBlocks_TradingAppCard_mvc_view];
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
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "border: 1px solid #E6E9E9; border-radius: 16px; border-top: none;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "CFDsBanner"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            extendedProperties: {
                                style: "margin-bottom: 10px; margin-top: 10px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent",
                                marginLeft: "0"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.banner.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "height: 50px; margin-top: 0px; padding: 16px; text-align: left;"
                            },
                            style: "display-flex justify-content-space-evenly",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "margin-left: 20px;"
                            },
                            style: "customer-feedback",
                            text: ["Our customer say"],
                            _idProps: {
                                service: idService,
                                uuid: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-weight: bold;"
                            },
                            style: "customer-feedback",
                            text: ["Excellent"],
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OutSystemsUI_Numbers_Rating_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                RatingValue: model.variables.trustPilotDataAct.trustPilotOutputOut.scoreAttr.starsAttr,
                                _ratingValueInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.trustPilotDataAct.dataFetchStatusAttr)
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
                                uuid: "6",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                filledState: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Icon, {
                                        icon: "star",
                                        iconSize: /*FontSize*/ 0,
                                        style: "icon text-primary",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })];
                                }),
                                halfState: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Icon, {
                                        icon: "star-half",
                                        iconSize: /*FontSize*/ 0,
                                        style: "icon text-primary",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })];
                                }),
                                emptyState: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Icon, {
                                        icon: "star",
                                        iconSize: /*FontSize*/ 0,
                                        style: "icon text-neutral-5",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })];
                                })
                            },
                            _dependencies: []
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            gridProperties: {
                                classes: "ThemeGrid_Width4 ThemeGrid_MarginGutter"
                            },
                            style: "customer-feedback",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "10"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Expression, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            value: model.getCachedValue(idService.getId("pPOyIA4x8EqpaCjv0nZNxQ.Value"), function() {
                                return (((OS.BuiltinFunctions.formatDecimal(model.variables.trustPilotDataAct.trustPilotOutputOut.scoreAttr.trustScoreAttr, 2, ".", ",") + " out of 5 based on ") + OS.BuiltinFunctions.longIntegerToText(model.variables.trustPilotDataAct.trustPilotOutputOut.numberOfReviewsAttr.totalAttr)) + " reviews");
                            }, function() {
                                return model.variables.trustPilotDataAct.trustPilotOutputOut.scoreAttr.trustScoreAttr;
                            }, function() {
                                return model.variables.trustPilotDataAct.trustPilotOutputOut.numberOfReviewsAttr.totalAttr;
                            }),
                            _idProps: {
                                service: idService,
                                uuid: "11"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.trustPilotDataAct.dataFetchStatusAttr)
                        })), React.createElement(OSWidgets.Link, {
                            enabled: true,
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                            url: OS.Navigation.generateScreenURL("https://www.trustpilot.com/review/deriv.com", {}),
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "12"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.trustpilot.svg"),
                            style: "cursor-pointer",
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "13"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 10px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "CFDsHeader"
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
                                uuid: "16",
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
                                            uuid: "17"
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
                                    uuid: "20"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "products-container",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "AccountsCardsContainer2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "product-container",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "StandardAccountCard2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                gridProperties: {
                                    width: "32px"
                                },
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.dmt5standard.svg"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "23"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "display-flex justify-content-space-between",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "24"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-weight: bold; margin-bottom: 10px; margin-top: 10px;"
                                },
                                text: ["Standard"],
                                _idProps: {
                                    service: idService,
                                    uuid: "25"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Image, {
                                gridProperties: {
                                    classes: "ThemeGrid_MarginGutter",
                                    width: "32px"
                                },
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.circleplusmd.svg"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "26"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), "Diverse financial and derived instruments."))];
                        }, function() {
                            return [];
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
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
                                    uuid: "29"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.List, {
                                animateItems: true,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: /*Default*/ 0,
                                source: model.variables.availableCFDAccountsVar,
                                style: "display-flex list justify-content-space-between flex-wrap",
                                tag: "div",
                                _idProps: {
                                    service: idService,
                                    name: "AccountsCardsContainer"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    content: new IteratorPlaceholderContent(function(idService, callContext) {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "height: 130px; margin-bottom: 16px; minWidth: 33%; padding: 0px; text-align: left;"
                                            },
                                            style: "",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                name: "AccountsCardsItem"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: [asPrimitiveValue(model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).titleAttr), asPrimitiveValue(model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).descriptionAttr), asPrimitiveValue(model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).iconAttr)]
                                        }, React.createElement(tradershub_CFDBlocks_TradingAppCard_mvc_view, {
                                            getOwnerSpan: function() {
                                                return _this.getChildSpan("render");
                                            },
                                            getOwnerDisposeSpan: function() {
                                                return _this.getChildSpan("destroy");
                                            },
                                            inputs: {
                                                ProductIcon: model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).iconAttr,
                                                ProductDescription: model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).descriptionAttr,
                                                Name: model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).titleAttr
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
                                                uuid: "32",
                                                alias: "4"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        }))];
                                    }, callContext, idService, "1")
                                },
                                _dependencies: []
                            })];
                        }, function() {
                            return [];
                        }))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.availableCFDAccountsVar), asPrimitiveValue(model.variables.trustPilotDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.trustPilotDataAct.trustPilotOutputOut.numberOfReviewsAttr.totalAttr), asPrimitiveValue(model.variables.trustPilotDataAct.trustPilotOutputOut.scoreAttr.trustScoreAttr), asPrimitiveValue(model.variables.trustPilotDataAct.trustPilotOutputOut.scoreAttr.starsAttr)]
            }));
        }
    }

    return View;
});
define("tradershub.MainFlow.CFDs.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.MainFlow.controller", "tradershub.MainFlow.CFDs.mvc$controller.OnReady.mappingJS", "tradershub.model$EN_8212284ed6913c62a123b32716b72fbaEntityRecord", "tradershub.model$RL_9eb97ad6cb81943972e368260e0cb936", "tradershub.controller$FeatureFlagValueByName", "RESTAPIWebsocket.model$ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket", "RESTAPIWebsocket.model$ST_7a752455e27bb9ea87d724bbb902dd16Structure", "RESTAPIWebsocket.controller$TradingPlatformAvailableAccounts", "RESTAPIWebsocket.model$ST_9b3eaf42648c2b28591e8ee92b7ce159Structure", "tradershub.model$RL_016ebe8f15c3060e53dd56f2fea28791", "tradershub.model$RC_07be8d7193ba16b1cc9d953b8fa48e9d", "tradershub.model$RL_ee1664da44e6893a731536d754684359", "tradershub.model$ST_d9250f167f0b0818f60ee73b22ec1a06Structure"], function(OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketModel, RESTAPIWebsocketController, tradershubLanguageResources, tradershubClientVariables, tradershub_MainFlowController, tradershub_MainFlow_CFDs_mvc_controller_OnReady_mappingJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {
                    getCfdProductConfigs$AggrRefresh: 0,
                    trustPilot$DataActRefresh: 0
                };
                this.dataFetchDependentsGraph = {
                    getCfdProductConfigs$AggrRefresh: [],
                    trustPilot$DataActRefresh: []
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

            get trustPilot$DataActRefresh() {
                if (!(this.hasOwnProperty("_trustPilot$DataActRefresh"))) {
                    this._trustPilot$DataActRefresh = function() {
                        var innerBody = function(callContext) {
                            var model = this.model;
                            var controller = this.controller;
                            var callContext = controller.callContext(callContext);
                            return controller.callDataAction("DataActionTrustPilot", "screenservices/tradershub/MainFlow/CFDs/DataActionTrustPilot", "CSzIWZjEeCvW3TyFIxjWfw", function(b) {
                                model.variables.trustPilotDataAct.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.trustPilotDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.trustPilotDataAct.constructor));
                            }, undefined, undefined, undefined, callContext, undefined, false);
                        }.bind(this);
                        return OS.Logger.startActiveSpan("TrustPilot", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "TrustPilot");
                                span.setAttribute("outsystems.function.key", "5ee80f80-55d8-4069-83e9-7f814d925fa4");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_DATA_ACTION_CALL");
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

                return this._trustPilot$DataActRefresh;
            }
            set trustPilot$DataActRefresh(value) {
                this._trustPilot$DataActRefresh = value;
            }


            get dataFetchActionNames() {
                if (!(this.hasOwnProperty("_dataFetchActionNames"))) {
                    this._dataFetchActionNames = ["getCfdProductConfigs$AggrRefresh", "trustPilot$DataActRefresh"];
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
                                var dxtradeAvailableAccountsVar = new OS.DataTypes.VariableHolder();
                                var mT5AvailableAccountsVar = new OS.DataTypes.VariableHolder();
                                var ctraderAvailableAccountsVar = new OS.DataTypes.VariableHolder();
                                var mappingJSResult = new OS.DataTypes.VariableHolder();
                                var dxtradeAvailableAccountVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var ctraderAvailableAccountVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var cfdProductConfigsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var mT5AvailableAccountVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONDeserializeCfdProductConfigListVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936))());
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: MT5AvailableAccounts
                                    model.flush();
                                    return RESTAPIWebsocketController.default.tradingPlatformAvailableAccounts$Action("green.derivws.com", model.variables.authTokenVar, "1", "en", function() {
                                        var rec = new RESTAPIWebsocketModel.ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure();
                                        rec.platformAttr = "mt5";
                                        rec.country_codeAttr = "za";
                                        return rec;
                                    }(), callContext).then(function(value) {
                                        mT5AvailableAccountsVar.value = value;
                                    }).then(function() {
                                        // Execute Action: CtraderAvailableAccounts
                                        model.flush();
                                        return RESTAPIWebsocketController.default.tradingPlatformAvailableAccounts$Action("green.derivws.com", model.variables.authTokenVar, "1", "en", function() {
                                            var rec = new RESTAPIWebsocketModel.ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure();
                                            rec.platformAttr = "ctrader";
                                            rec.country_codeAttr = "za";
                                            return rec;
                                        }(), callContext).then(function(value) {
                                            ctraderAvailableAccountsVar.value = value;
                                        });
                                    }).then(function() {
                                        // Execute Action: DxtradeAvailableAccounts
                                        model.flush();
                                        return RESTAPIWebsocketController.default.tradingPlatformAvailableAccounts$Action("green.derivws.com", model.variables.authTokenVar, "1", "en", function() {
                                            var rec = new RESTAPIWebsocketModel.ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure();
                                            rec.platformAttr = "dxtrade";
                                            rec.country_codeAttr = "za";
                                            return rec;
                                        }(), callContext).then(function(value) {
                                            dxtradeAvailableAccountsVar.value = value;
                                        });
                                    }).then(function() {
                                        // JSON Serialize: MT5AvailableAccount
                                        mT5AvailableAccountVar.value.jSONOut = OS.JSONUtils.serializeToJSON(mT5AvailableAccountsVar.value.responseOut.trading_platform_available_accountsAttr, false, false);
                                        // JSON Serialize: CtraderAvailableAccount
                                        ctraderAvailableAccountVar.value.jSONOut = OS.JSONUtils.serializeToJSON(ctraderAvailableAccountsVar.value.responseOut.trading_platform_available_accountsAttr, false, false);
                                        // JSON Serialize: DxtradeAvailableAccount
                                        dxtradeAvailableAccountVar.value.jSONOut = OS.JSONUtils.serializeToJSON(dxtradeAvailableAccountsVar.value.responseOut.trading_platform_available_accountsAttr, false, false);
                                        // JSON Serialize: CfdProductConfigs
                                        cfdProductConfigsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.getCfdProductConfigsAggr.listOut, false, false);
                                        mappingJSResult.value = OS.Logger.startActiveSpan("mapping", function(span) {
                                            if (span) {
                                                span.setAttribute("code.function", "mapping");
                                                span.setAttribute("outsystems.function.key", "33b7fd1b-b2d3-4dac-a535-44e54e7dd182");
                                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                            }

                                            try {
                                                return controller.safeExecuteJSNode(tradershub_MainFlow_CFDs_mvc_controller_OnReady_mappingJS, "mapping", "OnReady", {
                                                    CtraderAccountsList: OS.DataConversion.JSNodeParamConverter.to(ctraderAvailableAccountVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                    DxtradeAccountsList: OS.DataConversion.JSNodeParamConverter.to(dxtradeAvailableAccountVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                    AccountsConfig: OS.DataConversion.JSNodeParamConverter.to(cfdProductConfigsVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                    MT5AccountsList: OS.DataConversion.JSNodeParamConverter.to(mT5AvailableAccountVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                    AvailableCfdAccounts: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                                }, function($parameters) {
                                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.MainFlow.CFDs.OnReady$mappingJSResult"))();
                                                    jsNodeResult.availableCfdAccountsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.AvailableCfdAccounts, OS.DataTypes.DataTypes.Text);
                                                    return jsNodeResult;
                                                }, {}, {});
                                            } finally {
                                                if (span) {
                                                    span.end();
                                                }

                                            }

                                        }, 1);
                                        // JSON Deserialize: JSONDeserializeCfdProductConfigList
                                        jSONDeserializeCfdProductConfigListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(mappingJSResult.value.availableCfdAccountsOut, tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936, false);
                                        // AvailableCFDAccounts = JSONDeserializeCfdProductConfigList.Data
                                        model.variables.availableCFDAccountsVar = jSONDeserializeCfdProductConfigListVar.value.dataOut;
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
        Controller.registerVariableGroupType("tradershub.MainFlow.CFDs.OnReady$mappingJSResult", [{
            name: "AvailableCfdAccounts",
            attrName: "availableCfdAccountsOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.MainFlow.CFDs.mvc$controller.OnReady.mappingJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const accountsConfig = JSON.parse($parameters.AccountsConfig);
        const mt5AccountsList = JSON.parse($parameters.MT5AccountsList);
        const ctraderAccountsList = JSON.parse($parameters.CtraderAccountsList);
        const dxtradeAccountsList = JSON.parse($parameters.DxtradeAccountsList);

        // Combine all account lists into one
        const allAccountsList = [...mt5AccountsList, ...ctraderAccountsList, ...dxtradeAccountsList];

        // Filter the accountsConfig based on matching product identifier across all platforms
        const result = accountsConfig.filter(account =>
            !!allAccountsList.find(acc => acc.product === account.CfdProductConfig.ProductIdentifier)
        );

        // Map through the filtered results and return only the CfdProductConfig part
        $parameters.AvailableCfdAccounts = JSON.stringify(result.map(acc => ({
            ...acc.CfdProductConfig
        })));

        console.log("mt5", mt5AccountsList);
        console.log("ctrader", ctraderAccountsList);
        console.log("dxtrade", dxtradeAccountsList);
        console.log("config", accountsConfig);
        console.log("result", result);

    };
});