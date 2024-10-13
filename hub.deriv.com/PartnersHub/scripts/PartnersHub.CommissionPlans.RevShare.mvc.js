define("PartnersHub.CommissionPlans.RevShare.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.Common.LoaderBlock.mvc$model", "PartnersHub.Layouts.LayoutDashboard.mvc$model", "PartnersHub.Common.SkeletonLoader.mvc$model", "PartnersHub.controller$HandleRedirectOnLogin", "PartnersHub.controller$IFrameLogout", "PartnersHub.model$RC_6f106c951dc697db2b84044542653e21", "PartnersHub.model$RL_c7f6e3aeb0c29b42f5c7f4e8a4d38c61"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHub_Common_LoaderBlock_mvcModel, PartnersHub_Layouts_LayoutDashboard_mvcModel, PartnersHub_Common_SkeletonLoader_mvcModel) {
    var OS = OSRuntimeCore; {
        class GetRevShareInfoTablesAggrRecInner extends
        OS.Model.AggregateRecord {
            static attributesToDeclare() {
                return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new GetRevShareInfoTablesAggrRec(new GetRevShareInfoTablesAggrRec.RecordClass({
                    RecordListType: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        GetRevShareInfoTablesAggrRecInner.RecordListType = PartnersHubModel.RL_c7f6e3aeb0c29b42f5c7f4e8a4d38c61;
        var GetRevShareInfoTablesAggrRec = GetRevShareInfoTablesAggrRecInner;
        GetRevShareInfoTablesAggrRec.init();
    }


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, false),
                    this.attr("GetRevShareInfoTables", "getRevShareInfoTablesAggr", "GetRevShareInfoTables", true, true, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new GetRevShareInfoTablesAggrRec());
                    }, true, GetRevShareInfoTablesAggrRec)
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
                Model._hasValidationWidgetsValue = ((PartnersHub_Common_LoaderBlock_mvcModel.hasValidationWidgets || PartnersHub_Layouts_LayoutDashboard_mvcModel.hasValidationWidgets) || PartnersHub_Common_SkeletonLoader_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.CommissionPlans.RevShare.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.CommissionPlans.RevShare.mvc$model", "PartnersHub.CommissionPlans.RevShare.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Common.LoaderBlock.mvc$view", "@outsystems/runtime-widgets-js", "PartnersHub.Layouts.LayoutDashboard.mvc$view", "PartnersHub.Common.SkeletonLoader.mvc$view", "PartnersHub.controller$HandleRedirectOnLogin", "PartnersHub.controller$IFrameLogout", "PartnersHub.model$RC_6f106c951dc697db2b84044542653e21", "PartnersHub.model$RL_c7f6e3aeb0c29b42f5c7f4e8a4d38c61"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_CommissionPlans_RevShare_mvc_model, PartnersHub_CommissionPlans_RevShare_mvc_controller, PartnersHubClientVariables, PartnersHub_Common_LoaderBlock_mvc_view, OSWidgets, PartnersHub_Layouts_LayoutDashboard_mvc_view, PartnersHub_Common_SkeletonLoader_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "CommissionPlans.RevShare";
        }

        static getAttributes() {
            return {
                codeFunction: "RevShare",
                functionKey: "a2764afc-e820-4bf9-bca5-c0c8db44f699",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.CommissionPlans.RevShare.css", "css/PartnersHub.PHubTest.extra.css"];
        }

        static getJsDependencies() {
            return ["scripts/PartnersHub.DerivAnalytics.js"];
        }

        static getBlocks() {
            return [PartnersHub_Common_LoaderBlock_mvc_view, PartnersHub_Layouts_LayoutDashboard_mvc_view, PartnersHub_Common_SkeletonLoader_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_CommissionPlans_RevShare_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_CommissionPlans_RevShare_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("_Ep2oiDo+Uu8pcDI20T2mQ#Title", "RevShare");
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

            return React.createElement("div", this.getRootNodeProperties(), $if(!(PartnersHubClientVariables.getIsAppReady()), false, this, function() {
                return [React.createElement(PartnersHub_Common_LoaderBlock_mvc_view, {
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
                    _dependencies: []
                })];
            }, function() {
                return [React.createElement(PartnersHub_Layouts_LayoutDashboard_mvc_view, {
                    getOwnerSpan: function() {
                        return _this.getChildSpan("render");
                    },
                    getOwnerDisposeSpan: function() {
                        return _this.getChildSpan("destroy");
                    },
                    inputs: {
                        HasFixedHeader: true
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
                        uuid: "1",
                        alias: "2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    placeholders: {
                        mainContent: new PlaceholderContent(function() {
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
                                    uuid: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, $if(model.variables.isLoadingVar, false, this, function() {
                                return [React.createElement(PartnersHub_Common_SkeletonLoader_mvc_view, {
                                    getOwnerSpan: function() {
                                        return _this.getChildSpan("render");
                                    },
                                    getOwnerDisposeSpan: function() {
                                        return _this.getChildSpan("destroy");
                                    },
                                    inputs: {
                                        IsLoading: model.variables.isLoadingVar
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
                                        uuid: "3",
                                        alias: "3"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    placeholders: {
                                        content: PlaceholderContent.Empty
                                    },
                                    _dependencies: []
                                })];
                            }, function() {
                                return [React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    style: "partners-hub-title-container",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        name: "TurnoverTitle"
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
                                    style: "cp-title",
                                    text: [$text(getTranslation("oOL6hG8L806drtGAZ328Hw#Value", "RevShare"))],
                                    _idProps: {
                                        service: idService,
                                        uuid: "6"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    extendedEvents: {
                                        onClick: function() {
                                            var eventHandlerContext = callContext.clone();
                                            controller.onClick$Action(controller.callContext(eventHandlerContext));

                                            ;
                                        }
                                    },
                                    extendedProperties: {
                                        style: "cursor: pointer;"
                                    },
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "7"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Image, {
                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.closenormal.png"),
                                    type: /*Static*/ 0,
                                    _idProps: {
                                        service: idService,
                                        uuid: "8"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }))), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    gridProperties: {
                                        classes: "OSInline"
                                    },
                                    style: "notification-banner",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "9"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Image, {
                                    extendedProperties: {
                                        style: "color: #3c33bf; font-size: 8px;"
                                    },
                                    gridProperties: {
                                        width: "20px"
                                    },
                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.info_black.svg"),
                                    type: /*Static*/ 0,
                                    _idProps: {
                                        service: idService,
                                        uuid: "10"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }), React.createElement(OSWidgets.Label, {
                                    extendedProperties: {
                                        style: "font-size: 12px;"
                                    },
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    _idProps: {
                                        service: idService,
                                        uuid: "11"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Text, {
                                    style: "to-description",
                                    text: [$text(getTranslation("0HhloJzYSESXxM8JPAEEhQ#Value", "If your RevShare plan isn\'t activated, contact your account manager."))],
                                    _idProps: {
                                        service: idService,
                                        uuid: "12"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }))), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    extendedProperties: {
                                        style: "display: flex; flex-direction: column; gap: 6px;"
                                    },
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "13"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "font-weight: 400; line-height: 22px;"
                                    },
                                    text: [$text(getTranslation("YkVCnz_UIku6cUqRLoNIOQ#Value", "Earn based on the monthly net revenue generated by your clients."))],
                                    _idProps: {
                                        service: idService,
                                        uuid: "14"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "15"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.TableRecords, {
                                    showHeader: true,
                                    source: model.variables.getRevShareInfoTablesAggr.listOut,
                                    style: "table",
                                    styleHeader: "table-header",
                                    styleRow: "table-row to-description",
                                    _idProps: {
                                        service: idService,
                                        uuid: "16"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getRevShareInfoTablesAggr.dataFetchStatusAttr),
                                    placeholders: {
                                        headerRow: new PlaceholderContent(function() {
                                            return [React.createElement(OSWidgets.HeaderCell, {
                                                style: "header-color",
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "17"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider,
                                                _dependencies: []
                                            }, React.createElement(OSWidgets.Container, {
                                                align: /*Default*/ 0,
                                                animate: false,
                                                extendedProperties: {
                                                    style: "text-align: center;"
                                                },
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "18"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            }, React.createElement(OSWidgets.Text, {
                                                extendedProperties: {
                                                    style: "color: #222;"
                                                },
                                                text: [$text(getTranslation("mRWuvFYduUmNAePoamXKug#Value", "Type of Rev Share Info Table"))],
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "19"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            }))), React.createElement(OSWidgets.HeaderCell, {
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "20"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider,
                                                _dependencies: []
                                            }, React.createElement(OSWidgets.Container, {
                                                align: /*Default*/ 0,
                                                animate: false,
                                                extendedProperties: {
                                                    style: "text-align: center;"
                                                },
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "21"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            }, React.createElement(OSWidgets.Text, {
                                                extendedProperties: {
                                                    style: "color: #222;"
                                                },
                                                text: [$text(getTranslation("QZboeWfl4EmsOb2da3Gj4w#Value", "Commission"))],
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "22"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })))];
                                        }),
                                        row: new IteratorPlaceholderContent(function(idService, callContext) {
                                            return [React.createElement(OSWidgets.RowCell, {
                                                style: "table-row-even",
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "23"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider,
                                                _dependencies: [asPrimitiveValue(model.variables.getRevShareInfoTablesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getRevShareInfoTablesAggr.listOut.getCurrent(callContext.iterationContext).revShareInfoTableAttr.netRevenueAttr)]
                                            }, React.createElement(OSWidgets.Container, {
                                                align: /*Default*/ 0,
                                                animate: false,
                                                extendedProperties: {
                                                    style: "text-align: center;"
                                                },
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "24"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            }, React.createElement(OSWidgets.Expression, {
                                                value: model.variables.getRevShareInfoTablesAggr.listOut.getCurrent(callContext.iterationContext).revShareInfoTableAttr.netRevenueAttr,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "25"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider,
                                                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getRevShareInfoTablesAggr.dataFetchStatusAttr)
                                            }))), React.createElement(OSWidgets.RowCell, {
                                                style: "table-row",
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "26"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider,
                                                _dependencies: [asPrimitiveValue(model.variables.getRevShareInfoTablesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getRevShareInfoTablesAggr.listOut.getCurrent(callContext.iterationContext).revShareInfoTableAttr.commissionAttr)]
                                            }, React.createElement(OSWidgets.Container, {
                                                align: /*Default*/ 0,
                                                animate: false,
                                                extendedProperties: {
                                                    style: "text-align: center;"
                                                },
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "27"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            }, React.createElement(OSWidgets.Expression, {
                                                value: model.variables.getRevShareInfoTablesAggr.listOut.getCurrent(callContext.iterationContext).revShareInfoTableAttr.commissionAttr,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "28"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider,
                                                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getRevShareInfoTablesAggr.dataFetchStatusAttr)
                                            })))];
                                        }, callContext, idService, "1_0")
                                    },
                                    _dependencies: [asPrimitiveValue(model.variables.getRevShareInfoTablesAggr.dataFetchStatusAttr)]
                                })), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    extendedProperties: {
                                        style: "display: flex; flex-direction: column;"
                                    },
                                    gridProperties: {
                                        classes: "OSInline"
                                    },
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "29"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Text, {
                                    style: "to-subtitle",
                                    text: [$text(getTranslation("VjSXi_XJcEKOUbBlRDR72A#Value", "Disclaimer: "))],
                                    _idProps: {
                                        service: idService,
                                        uuid: "30"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }), React.createElement(OSWidgets.AdvancedHtml, {
                                    extendedProperties: {
                                        style: "padding-inline-start: 30px",
                                        className: "disclaimer-container"
                                    },
                                    tag: "ul",
                                    _idProps: {
                                        service: idService,
                                        uuid: "31"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.AdvancedHtml, {
                                    tag: "li",
                                    _idProps: {
                                        service: idService,
                                        uuid: "32"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, $text(getTranslation("JTUNCZw9CkGlBIOiw8z_eA#Value", "Affiliates residing in the EU can sign up for the Revenue Share plan but can only refer clients residing outside the EU."))), React.createElement(OSWidgets.AdvancedHtml, {
                                    tag: "li",
                                    _idProps: {
                                        service: idService,
                                        uuid: "33"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, $text(getTranslation("qNIlOIiakk6sx8FEX7ITvw#Value", "Affiliates will earn commission from clients who trade on both official Deriv platforms (Deriv Trader, SmartTrader, Deriv Bot, etc) and third-party platforms via Deriv API."))), React.createElement(OSWidgets.AdvancedHtml, {
                                    tag: "li",
                                    _idProps: {
                                        service: idService,
                                        uuid: "34"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, $text(getTranslation("c1MxLXCzzk2WnIlkDTW5zw#Value", "All products are entitled to generate commission except Multiplier Financials.")))))];
                            }))];
                        })
                    },
                    _dependencies: [asPrimitiveValue(model.variables.getRevShareInfoTablesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getRevShareInfoTablesAggr.listOut), asPrimitiveValue(model.variables.isLoadingVar)]
                })];
            }));
        }
    }

    return View;
});
define("PartnersHub.CommissionPlans.RevShare.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.CommissionPlans.RevShare.mvc$translationsResources", "PartnersHub.CommissionPlans.controller", "PartnersHub.controller$HandleRedirectOnLogin", "PartnersHub.controller$IFrameLogout", "PartnersHub.model$RC_6f106c951dc697db2b84044542653e21", "PartnersHub.model$RL_c7f6e3aeb0c29b42f5c7f4e8a4d38c61"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_CommissionPlans_RevShare_mvc_TranslationsResources, PartnersHub_CommissionPlansController) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_CommissionPlans_RevShare_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {
                    getRevShareInfoTables$AggrRefresh: 0
                };
                this.dataFetchDependentsGraph = {
                    getRevShareInfoTables$AggrRefresh: []
                };
                this.shouldSendClientVarsToDataSources = false;
            }

            // Server Actions - Methods

            // Aggregates and Data Actions
            get getRevShareInfoTables$AggrRefresh() {
                if (!(this.hasOwnProperty("_getRevShareInfoTables$AggrRefresh"))) {
                    this._getRevShareInfoTables$AggrRefresh = function() {
                        var innerBody = function(maxRecords, startIndex, callContext) {
                            var model = this.model;
                            var controller = this.controller;
                            var callContext = controller.callContext(callContext);
                            return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetRevShareInfoTables", "screenservices/PartnersHub/CommissionPlans/RevShare/ScreenDataSetGetRevShareInfoTables", "tQ1DadNEDCiSjIyHldlUxQ", maxRecords, startIndex, function(b) {
                                model.variables.getRevShareInfoTablesAggr.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.getRevShareInfoTablesAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getRevShareInfoTablesAggr.constructor));
                            }, undefined, undefined, undefined, callContext, undefined, true).then(function() {
                                return controller._onReady$Action(controller.callContext(callContext));
                            });
                        }.bind(this);
                        return OS.Logger.startActiveSpan("GetRevShareInfoTables", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetRevShareInfoTables");
                                span.setAttribute("outsystems.function.key", "bc0f4c3c-3ed7-4d8c-96ac-568f5942e8fa");
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

                return this._getRevShareInfoTables$AggrRefresh;
            }
            set getRevShareInfoTables$AggrRefresh(value) {
                this._getRevShareInfoTables$AggrRefresh = value;
            }


            get dataFetchActionNames() {
                if (!(this.hasOwnProperty("_dataFetchActionNames"))) {
                    this._dataFetchActionNames = ["getRevShareInfoTables$AggrRefresh"];
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
                                span.setAttribute("outsystems.function.key", "97468aeb-7f16-47f1-9459-16d3f7a9e692");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var handleRedirectOnLoginVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: HandleRedirectOnLogin
                                    model.flush();
                                    return PartnersHubController.default.handleRedirectOnLogin$Action(callContext).then(function(value) {
                                        handleRedirectOnLoginVar.value = value;
                                    }).then(function() {
                                        return OS.Flow.executeSequence(function() {
                                            if ((!(handleRedirectOnLoginVar.value.isLoggedInOut))) {
                                                // Execute Action: IFrameLogout
                                                model.flush();
                                                return PartnersHubController.default.iFrameLogout$Action(callContext);
                                            }

                                        });
                                    }).then(function() {
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

                return this.__onReady$Action;
            }
            set _onReady$Action(value) {
                this.__onReady$Action = value;
            }

            get _onClick$Action() {
                if (!(this.hasOwnProperty("__onClick$Action"))) {
                    this.__onClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClick");
                                span.setAttribute("outsystems.function.key", "de2c2f41-0759-4393-8a14-5a7ecec4769a");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClick");
                                callContext = controller.callContext(callContext);
                                // Destination: /PartnersHub/PartnersHubDashboard
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "PartnersHubDashboard", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClick$Action;
            }
            set _onClick$Action(value) {
                this.__onClick$Action = value;
            }


            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "97468aeb-7f16-47f1-9459-16d3f7a9e692");
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

            onClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClick");
                        span.setAttribute("outsystems.function.key", "de2c2f41-0759-4393-8a14-5a7ecec4769a");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClick$Action, callContext);
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
                        return PartnersHub_CommissionPlansController.default.handleError(ex, this.callContext());
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


define("PartnersHub.CommissionPlans.RevShare.mvc$translationsResources.ar-001", [], function() {
    return {
        "c1MxLXCzzk2WnIlkDTW5zw#Value": "جميع المنتجات لها الحق في توليد عمولة باستثناء Multiplier Financials.",
        "qNIlOIiakk6sx8FEX7ITvw#Value": "سيكسب الشركاء عمولة من العملاء الذين يتداولون على كلا المنصتين الرسميتين لـ Deriv (Deriv Trader، SmartTrader، Deriv Bot، إلخ) ومنصات الطرف الثالث عبر واجهة برمجة التطبيقات الخاصة بـ Deriv.",
        "JTUNCZw9CkGlBIOiw8z_eA#Value": "يمكن للمنتسبين المقيمين في الاتحاد الأوروبي التسجيل في خطة مشاركة الإيرادات ولكن يمكنهم فقط إحالة العملاء المقيمين خارج الاتحاد الأوروبي.",
        "VjSXi_XJcEKOUbBlRDR72A#Value": "إخلاء المسؤولية:",
        "QZboeWfl4EmsOb2da3Gj4w#Value": "عمولة",
        "mRWuvFYduUmNAePoamXKug#Value": "نوع معلومات جدول مشاركة الإيرادات",
        "YkVCnz_UIku6cUqRLoNIOQ#Value": "اكسب بناءً على الإيرادات الصافية الشهرية التي يحققها عملاؤك.",
        "0HhloJzYSESXxM8JPAEEhQ#Value": "إذا لم يتم تفعيل خطة RevShare الخاصة بك، اتصل بمدير حسابك.",
        "oOL6hG8L806drtGAZ328Hw#Value": "ريفشير"
    };
});

define("PartnersHub.CommissionPlans.RevShare.mvc$translationsResources.de-DE", [], function() {
    return {
        "c1MxLXCzzk2WnIlkDTW5zw#Value": "Alle Produkte haben Anspruch auf die Generierung von Provisionen, außer Multiplier Financials.",
        "qNIlOIiakk6sx8FEX7ITvw#Value": "Affiliates erhalten eine Provision von Kunden, die auf beiden offiziellen Deriv-Plattformen (Deriv Trader, SmartTrader, Deriv Bot usw.) und auf Drittanbieter-Plattformen über die Deriv API handeln.",
        "JTUNCZw9CkGlBIOiw8z_eA#Value": "Affiliates, die in der EU ansässig sind, können sich für den Revenue Share-Plan anmelden, dürfen jedoch nur Kunden außerhalb der EU werben.",
        "VjSXi_XJcEKOUbBlRDR72A#Value": "Haftungsausschluss:",
        "QZboeWfl4EmsOb2da3Gj4w#Value": "Provision",
        "mRWuvFYduUmNAePoamXKug#Value": "Art der Option",
        "YkVCnz_UIku6cUqRLoNIOQ#Value": "Verdienen Sie basierend auf der Art der Option, die Ihre Kunden handeln.",
        "0HhloJzYSESXxM8JPAEEhQ#Value": "Wenn Ihr Turnover-Plan nicht aktiviert ist, kontaktieren Sie Ihren Kontomanager.",
        "oOL6hG8L806drtGAZ328Hw#Value": "Umsatz"
    };
});

define("PartnersHub.CommissionPlans.RevShare.mvc$translationsResources.es-ES", [], function() {
    return {
        "c1MxLXCzzk2WnIlkDTW5zw#Value": "Todos los productos tienen derecho a generar comisiones, excepto Multiplier Financials.",
        "qNIlOIiakk6sx8FEX7ITvw#Value": "Los afiliados ganarán comisiones de los clientes que operen en ambas plataformas oficiales de Deriv (Deriv Trader, SmartTrader, Deriv Bot, etc.) y en plataformas de terceros a través de la API de Deriv.",
        "JTUNCZw9CkGlBIOiw8z_eA#Value": "Los afiliados que residen en la UE pueden registrarse en el plan de Revenue Share, pero solo pueden referir clientes que residan fuera de la UE.",
        "VjSXi_XJcEKOUbBlRDR72A#Value": "Descargo de responsabilidad:",
        "QZboeWfl4EmsOb2da3Gj4w#Value": "Comisión",
        "mRWuvFYduUmNAePoamXKug#Value": "Tipo de Opción",
        "YkVCnz_UIku6cUqRLoNIOQ#Value": "Gane según el tipo de Opción que negocien sus clientes.",
        "0HhloJzYSESXxM8JPAEEhQ#Value": "Si su plan de Turnover no está activado, contacte a su gerente de cuenta.",
        "oOL6hG8L806drtGAZ328Hw#Value": "Volumen de negocios"
    };
});

define("PartnersHub.CommissionPlans.RevShare.mvc$translationsResources.fr-FR", [], function() {
    return {
        "c1MxLXCzzk2WnIlkDTW5zw#Value": "Tous les produits ont droit de générer des commissions, sauf Multiplier Financials.",
        "qNIlOIiakk6sx8FEX7ITvw#Value": "Les affiliés gagneront des commissions sur les clients qui tradent à la fois sur les plateformes officielles de Deriv (Deriv Trader, SmartTrader, Deriv Bot, etc.) et sur des plateformes tierces via l\'API de Deriv.",
        "JTUNCZw9CkGlBIOiw8z_eA#Value": "Les affiliés résidant dans l\'UE peuvent s\'inscrire au plan de Revenue Share, mais ne peuvent référer que des clients résidant en dehors de l\'UE.",
        "VjSXi_XJcEKOUbBlRDR72A#Value": "Avertissement :",
        "QZboeWfl4EmsOb2da3Gj4w#Value": "Commission",
        "mRWuvFYduUmNAePoamXKug#Value": "Type d\'Option",
        "YkVCnz_UIku6cUqRLoNIOQ#Value": "Gagnez en fonction du type d\'Option que négocient vos clients.",
        "0HhloJzYSESXxM8JPAEEhQ#Value": "Si votre plan de Turnover n\'est pas activé, contactez votre gestionnaire de compte.",
        "oOL6hG8L806drtGAZ328Hw#Value": "Chiffre d\'affaires"
    };
});

define("PartnersHub.CommissionPlans.RevShare.mvc$translationsResources.it-IT", [], function() {
    return {
        "c1MxLXCzzk2WnIlkDTW5zw#Value": "Tutti i prodotti hanno diritto a generare commissioni, eccetto Multiplier Financials.",
        "qNIlOIiakk6sx8FEX7ITvw#Value": "Gli affiliati guadagneranno commissioni dai clienti che operano sia sulle piattaforme ufficiali di Deriv (Deriv Trader, SmartTrader, Deriv Bot, ecc.) che su piattaforme di terze parti tramite l\'API di Deriv.",
        "JTUNCZw9CkGlBIOiw8z_eA#Value": "Gli affiliati residenti nell\'UE possono iscriversi al piano Revenue Share, ma possono riferire solo clienti residenti al di fuori dell\'UE.",
        "VjSXi_XJcEKOUbBlRDR72A#Value": "Dichiarazione di non responsabilità:",
        "QZboeWfl4EmsOb2da3Gj4w#Value": "Commissione",
        "mRWuvFYduUmNAePoamXKug#Value": "Tipo di Opzione",
        "YkVCnz_UIku6cUqRLoNIOQ#Value": "Guadagna in base al tipo di Opzione che i tuoi clienti scambiano.",
        "0HhloJzYSESXxM8JPAEEhQ#Value": "Se il tuo piano di Turnover non è attivato, contatta il tuo account manager.",
        "oOL6hG8L806drtGAZ328Hw#Value": "Fatturato"
    };
});

define("PartnersHub.CommissionPlans.RevShare.mvc$translationsResources.pl-PL", [], function() {
    return {
        "c1MxLXCzzk2WnIlkDTW5zw#Value": "Wszystkie produkty mają prawo do generowania prowizji, z wyjątkiem Multiplier Financials.",
        "qNIlOIiakk6sx8FEX7ITvw#Value": "Partnerzy będą otrzymywać prowizję od klientów, którzy handlują zarówno na oficjalnych platformach Deriv (Deriv Trader, SmartTrader, Deriv Bot itp.), jak i na platformach zewnętrznych za pośrednictwem API Deriv.",
        "JTUNCZw9CkGlBIOiw8z_eA#Value": "Partnerzy mieszkający w UE mogą zarejestrować się w planie Revenue Share, ale mogą polecać tylko klientów mieszkających poza UE.",
        "VjSXi_XJcEKOUbBlRDR72A#Value": "Zastrzeżenie:",
        "QZboeWfl4EmsOb2da3Gj4w#Value": "Prowizja",
        "mRWuvFYduUmNAePoamXKug#Value": "Rodzaj Opcji",
        "YkVCnz_UIku6cUqRLoNIOQ#Value": "Zarabiaj w zależności od rodzaju Opcji, którymi handlują Twoi klienci.",
        "0HhloJzYSESXxM8JPAEEhQ#Value": "Jeśli Twój plan Turnover nie jest aktywowany, skontaktuj się ze swoim menedżerem konta.",
        "oOL6hG8L806drtGAZ328Hw#Value": "Obrót"
    };
});

define("PartnersHub.CommissionPlans.RevShare.mvc$translationsResources.pt-PT", [], function() {
    return {
        "c1MxLXCzzk2WnIlkDTW5zw#Value": "Todos os produtos têm direito a gerar comissões, exceto Multiplier Financials.",
        "qNIlOIiakk6sx8FEX7ITvw#Value": "Os afiliados ganharão comissões de clientes que negociam tanto nas plataformas oficiais da Deriv (Deriv Trader, SmartTrader, Deriv Bot, etc.) quanto em plataformas de terceiros através da API da Deriv.",
        "JTUNCZw9CkGlBIOiw8z_eA#Value": "Os afiliados que residem na UE podem inscrever-se no plano Revenue Share, mas podem apenas referir clientes que residam fora da UE.",
        "VjSXi_XJcEKOUbBlRDR72A#Value": "Isenção de responsabilidade:",
        "QZboeWfl4EmsOb2da3Gj4w#Value": "Comissão",
        "mRWuvFYduUmNAePoamXKug#Value": "Tipo de Opção",
        "YkVCnz_UIku6cUqRLoNIOQ#Value": "Ganhe com base no tipo de Opção que os seus clientes negociam.",
        "0HhloJzYSESXxM8JPAEEhQ#Value": "Se o seu plano de Turnover não estiver ativado, entre em contacto com o seu gestor de conta.",
        "oOL6hG8L806drtGAZ328Hw#Value": "Volume de negócios"
    };
});

define("PartnersHub.CommissionPlans.RevShare.mvc$translationsResources.ru-RU", [], function() {
    return {
        "c1MxLXCzzk2WnIlkDTW5zw#Value": "Все продукты имеют право на получение комиссии, кроме Multiplier Financials.",
        "qNIlOIiakk6sx8FEX7ITvw#Value": "Партнеры будут зарабатывать комиссионные от клиентов, которые торгуют как на официальных платформах Deriv (Deriv Trader, SmartTrader, Deriv Bot и т.д.), так и на сторонних платформах через API Deriv.",
        "JTUNCZw9CkGlBIOiw8z_eA#Value": "Партнеры, проживающие в ЕС, могут зарегистрироваться в плане Revenue Share, но могут рекомендовать клиентов, проживающих за пределами ЕС.",
        "VjSXi_XJcEKOUbBlRDR72A#Value": "Отказ от ответственности:",
        "QZboeWfl4EmsOb2da3Gj4w#Value": "Комиссия",
        "mRWuvFYduUmNAePoamXKug#Value": "Тип Опции",
        "YkVCnz_UIku6cUqRLoNIOQ#Value": "Зарабатывайте в зависимости от типа Опции, которую торгуют ваши клиенты.",
        "0HhloJzYSESXxM8JPAEEhQ#Value": "Если ваш план Turnover не активирован, свяжитесь с вашим менеджером по аккаунту.",
        "oOL6hG8L806drtGAZ328Hw#Value": "Оборот"
    };
});

define("PartnersHub.CommissionPlans.RevShare.mvc$translationsResources", ["exports", "PartnersHub.CommissionPlans.RevShare.mvc$translationsResources.ar-001", "PartnersHub.CommissionPlans.RevShare.mvc$translationsResources.de-DE", "PartnersHub.CommissionPlans.RevShare.mvc$translationsResources.es-ES", "PartnersHub.CommissionPlans.RevShare.mvc$translationsResources.fr-FR", "PartnersHub.CommissionPlans.RevShare.mvc$translationsResources.it-IT", "PartnersHub.CommissionPlans.RevShare.mvc$translationsResources.pl-PL", "PartnersHub.CommissionPlans.RevShare.mvc$translationsResources.pt-PT", "PartnersHub.CommissionPlans.RevShare.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_CommissionPlans_RevShare_mvc_translationsResources_ar001, PartnersHub_CommissionPlans_RevShare_mvc_translationsResources_deDE, PartnersHub_CommissionPlans_RevShare_mvc_translationsResources_esES, PartnersHub_CommissionPlans_RevShare_mvc_translationsResources_frFR, PartnersHub_CommissionPlans_RevShare_mvc_translationsResources_itIT, PartnersHub_CommissionPlans_RevShare_mvc_translationsResources_plPL, PartnersHub_CommissionPlans_RevShare_mvc_translationsResources_ptPT, PartnersHub_CommissionPlans_RevShare_mvc_translationsResources_ruRU) {
    return {
        "ar-001": {
            "translations": PartnersHub_CommissionPlans_RevShare_mvc_translationsResources_ar001,
            "isRTL": true
        },
        "de-DE": {
            "translations": PartnersHub_CommissionPlans_RevShare_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_CommissionPlans_RevShare_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_CommissionPlans_RevShare_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_CommissionPlans_RevShare_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_CommissionPlans_RevShare_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_CommissionPlans_RevShare_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_CommissionPlans_RevShare_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});