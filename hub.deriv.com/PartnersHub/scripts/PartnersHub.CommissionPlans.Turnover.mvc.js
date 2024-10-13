define("PartnersHub.CommissionPlans.Turnover.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.Layouts.LayoutDashboard.mvc$model", "PartnersHub.Common.SkeletonLoader.mvc$model", "PartnersHub.controller$IFrameLogout", "PartnersHub.controller$HandleRedirectOnLogin", "PartnersHub.model$RC_a67f16d1367e48674c0278c0312479e0", "PartnersHub.model$RL_ca06e5bf8b5ed2faf11935e078ed0bf5", "PartnersHub.model$RC_500d6affd752292b92c8cddd9b92f7b9", "PartnersHub.model$RL_232c89a2d5038d57a9042dc25af9b70b"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHub_Layouts_LayoutDashboard_mvcModel, PartnersHub_Common_SkeletonLoader_mvcModel) {
    var OS = OSRuntimeCore; {
        class GetDigitalOptionsAggrRecInner extends
        OS.Model.AggregateRecord {
            static attributesToDeclare() {
                return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new GetDigitalOptionsAggrRec(new GetDigitalOptionsAggrRec.RecordClass({
                    RecordListType: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        GetDigitalOptionsAggrRecInner.RecordListType = PartnersHubModel.RL_ca06e5bf8b5ed2faf11935e078ed0bf5;
        var GetDigitalOptionsAggrRec = GetDigitalOptionsAggrRecInner;
        GetDigitalOptionsAggrRec.init();
    } {
        class GetOptionsAggrRecInner extends
        OS.Model.AggregateRecord {
            static attributesToDeclare() {
                return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new GetOptionsAggrRec(new GetOptionsAggrRec.RecordClass({
                    RecordListType: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        GetOptionsAggrRecInner.RecordListType = PartnersHubModel.RL_232c89a2d5038d57a9042dc25af9b70b;
        var GetOptionsAggrRec = GetOptionsAggrRecInner;
        GetOptionsAggrRec.init();
    }


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, false),
                    this.attr("IsFetchingDigitalOptions", "isFetchingDigitalOptionsVar", "IsFetchingDigitalOptions", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, false),
                    this.attr("IsFetchingOptions", "isFetchingOptionsVar", "IsFetchingOptions", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, false),
                    this.attr("GetDigitalOptions", "getDigitalOptionsAggr", "GetDigitalOptions", true, true, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new GetDigitalOptionsAggrRec());
                    }, true, GetDigitalOptionsAggrRec),
                    this.attr("GetOptions", "getOptionsAggr", "GetOptions", true, true, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new GetOptionsAggrRec());
                    }, true, GetOptionsAggrRec)
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
                Model._hasValidationWidgetsValue = (PartnersHub_Layouts_LayoutDashboard_mvcModel.hasValidationWidgets || PartnersHub_Common_SkeletonLoader_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.CommissionPlans.Turnover.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.CommissionPlans.Turnover.mvc$model", "PartnersHub.CommissionPlans.Turnover.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Layouts.LayoutDashboard.mvc$view", "@outsystems/runtime-widgets-js", "PartnersHub.Common.SkeletonLoader.mvc$view", "PartnersHub.controller$IFrameLogout", "PartnersHub.controller$HandleRedirectOnLogin", "PartnersHub.model$RC_a67f16d1367e48674c0278c0312479e0", "PartnersHub.model$RL_ca06e5bf8b5ed2faf11935e078ed0bf5", "PartnersHub.model$RC_500d6affd752292b92c8cddd9b92f7b9", "PartnersHub.model$RL_232c89a2d5038d57a9042dc25af9b70b"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_CommissionPlans_Turnover_mvc_model, PartnersHub_CommissionPlans_Turnover_mvc_controller, PartnersHubClientVariables, PartnersHub_Layouts_LayoutDashboard_mvc_view, OSWidgets, PartnersHub_Common_SkeletonLoader_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "CommissionPlans.Turnover";
        }

        static getAttributes() {
            return {
                codeFunction: "Turnover",
                functionKey: "0a878630-745b-41d9-a638-56cd8748905d",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.CommissionPlans.Turnover.css", "css/PartnersHub.PHubTest.extra.css"];
        }

        static getJsDependencies() {
            return ["scripts/PartnersHub.DerivAnalytics.js"];
        }

        static getBlocks() {
            return [PartnersHub_Layouts_LayoutDashboard_mvc_view, PartnersHub_Common_SkeletonLoader_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_CommissionPlans_Turnover_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_CommissionPlans_Turnover_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("MIaHClt02UGmOFbNh0iQXQ#Title", "Turnover");
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
                    uuid: "0",
                    alias: "1"
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
                                uuid: "1"
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
                                    uuid: "2",
                                    alias: "2"
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
                                    uuid: "4"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                style: "cp-title",
                                text: [$text(getTranslation("A1DuyLR4y0mdPlILWVXagw#Value", "Turnover"))],
                                _idProps: {
                                    service: idService,
                                    uuid: "5"
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
                                    uuid: "6"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.closenormal.png"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "7"
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
                                    uuid: "8"
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
                                    uuid: "9"
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
                                    uuid: "10"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                style: "to-description",
                                text: [$text(getTranslation("eGwk0H7ekEyPl6poGuYuTg#Value", "If your Turnover plan isn\'t activated, contact your account manager."))],
                                _idProps: {
                                    service: idService,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }))), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "display: flex; flex-direction: column; gap: 8px;"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "12"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: bold;"
                                },
                                style: "to-subtitle",
                                text: [$text(getTranslation("US_t93jy0UebCcJfDNx4AA#Value", "Options"))],
                                _idProps: {
                                    service: idService,
                                    uuid: "13"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-weight: 400; line-height: 22px;"
                                },
                                text: [$text(getTranslation("A6wn7d_MUU+llc7W9Xa93g#Value", "Earn based on the type of Option your clients trade."))],
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
                                source: model.variables.getOptionsAggr.listOut,
                                style: "table",
                                styleHeader: "table-header",
                                styleRow: "table-row to-description",
                                _idProps: {
                                    service: idService,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getOptionsAggr.dataFetchStatusAttr),
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
                                            text: [$text(getTranslation("8nKHLthtAUayRQNXxfL6SA#Value", "Type of Option"))],
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
                                            text: [$text(getTranslation("PjoOFwE_rEe6ie8ttKOsjg#Value", "Commission"))],
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
                                            _dependencies: [asPrimitiveValue(model.variables.getOptionsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getOptionsAggr.listOut.getCurrent(callContext.iterationContext).optionsAttr.typeoOptionAttr)]
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
                                            value: model.variables.getOptionsAggr.listOut.getCurrent(callContext.iterationContext).optionsAttr.typeoOptionAttr,
                                            _idProps: {
                                                service: idService,
                                                uuid: "25"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getOptionsAggr.dataFetchStatusAttr)
                                        }))), React.createElement(OSWidgets.RowCell, {
                                            style: "table-row",
                                            _idProps: {
                                                service: idService,
                                                uuid: "26"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: [asPrimitiveValue(model.variables.getOptionsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getOptionsAggr.listOut.getCurrent(callContext.iterationContext).optionsAttr.commissionAttr)]
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
                                            value: model.variables.getOptionsAggr.listOut.getCurrent(callContext.iterationContext).optionsAttr.commissionAttr,
                                            _idProps: {
                                                service: idService,
                                                uuid: "28"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getOptionsAggr.dataFetchStatusAttr)
                                        })))];
                                    }, callContext, idService, "1_0")
                                },
                                _dependencies: [asPrimitiveValue(model.variables.getOptionsAggr.dataFetchStatusAttr)]
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "display: flex; flex-direction: column; gap: 8px;"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "29"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: bold;"
                                },
                                style: "to-subtitle",
                                text: [$text(getTranslation("LlaMe90rzUel37W43FUgOA#Value", "Digital Options"))],
                                _idProps: {
                                    service: idService,
                                    uuid: "30"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-weight: 400; line-height: 22px;"
                                },
                                text: [$text(getTranslation("hzplZFUS8ke0JVnfI5ux2Q#Value", "Earn based on the payout probability of your clients contracts."))],
                                _idProps: {
                                    service: idService,
                                    uuid: "31"
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
                                    uuid: "32"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.TableRecords, {
                                showHeader: true,
                                source: model.variables.getDigitalOptionsAggr.listOut,
                                style: "table",
                                styleHeader: "table-header",
                                styleRow: "table-row to-description",
                                _idProps: {
                                    service: idService,
                                    uuid: "33"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getDigitalOptionsAggr.dataFetchStatusAttr),
                                placeholders: {
                                    headerRow: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.HeaderCell, {
                                            extendedProperties: {
                                                style: "color: #222; text-align: center;"
                                            },
                                            sortAttribute: "DigitalOptions.Probability",
                                            style: "header-color",
                                            _idProps: {
                                                service: idService,
                                                uuid: "34"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        }, $text(getTranslation("NsZ0QQ9IvEKCCneAeCC5bQ#Value", "Probability"))), React.createElement(OSWidgets.HeaderCell, {
                                            extendedProperties: {
                                                style: "text-align: center;"
                                            },
                                            sortAttribute: "DigitalOptions.Commission",
                                            style: "header-color",
                                            _idProps: {
                                                service: idService,
                                                uuid: "35"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        }, React.createElement(OSWidgets.Text, {
                                            extendedProperties: {
                                                style: "color: #222;"
                                            },
                                            text: [$text(getTranslation("aS2fUHXwJUK3Z52v40WzNw#Value", "Commission"))],
                                            _idProps: {
                                                service: idService,
                                                uuid: "36"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))];
                                    }),
                                    row: new IteratorPlaceholderContent(function(idService, callContext) {
                                        return [React.createElement(OSWidgets.RowCell, {
                                            _idProps: {
                                                service: idService,
                                                uuid: "37"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: [asPrimitiveValue(model.variables.getDigitalOptionsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getDigitalOptionsAggr.listOut.getCurrent(callContext.iterationContext).digitalOptionsAttr.probabilityAttr)]
                                        }, React.createElement(OSWidgets.Expression, {
                                            value: model.variables.getDigitalOptionsAggr.listOut.getCurrent(callContext.iterationContext).digitalOptionsAttr.probabilityAttr,
                                            _idProps: {
                                                service: idService,
                                                uuid: "38"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getDigitalOptionsAggr.dataFetchStatusAttr)
                                        })), React.createElement(OSWidgets.RowCell, {
                                            _idProps: {
                                                service: idService,
                                                uuid: "39"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: [asPrimitiveValue(model.variables.getDigitalOptionsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getDigitalOptionsAggr.listOut.getCurrent(callContext.iterationContext).digitalOptionsAttr.commissionAttr)]
                                        }, React.createElement(OSWidgets.Expression, {
                                            value: model.variables.getDigitalOptionsAggr.listOut.getCurrent(callContext.iterationContext).digitalOptionsAttr.commissionAttr,
                                            _idProps: {
                                                service: idService,
                                                uuid: "40"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getDigitalOptionsAggr.dataFetchStatusAttr)
                                        }))];
                                    }, callContext, idService, "2_0")
                                },
                                _dependencies: [asPrimitiveValue(model.variables.getDigitalOptionsAggr.dataFetchStatusAttr)]
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
                                    uuid: "41"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                style: "to-subtitle",
                                text: [$text(getTranslation("H1Oo5_queUqiCIZ0kB33Uw#Value", "Disclaimer: "))],
                                _idProps: {
                                    service: idService,
                                    uuid: "42"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.AdvancedHtml, {
                                extendedProperties: {
                                    style: "padding-inline-start: 30px"
                                },
                                tag: "ul",
                                _idProps: {
                                    service: idService,
                                    uuid: "43"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.AdvancedHtml, {
                                tag: "li",
                                _idProps: {
                                    service: idService,
                                    uuid: "44"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, $text(getTranslation("bVJekF_M1UKmdCHZbar+Ig#Value", "Affiliates residing in the EU can sign up for the Turnover plan but can only refer clients residing outside the EU.")))))];
                        }))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.getDigitalOptionsAggr.listOut), asPrimitiveValue(model.variables.getDigitalOptionsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getOptionsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getOptionsAggr.listOut), asPrimitiveValue(model.variables.isLoadingVar)]
            }));
        }
    }

    return View;
});
define("PartnersHub.CommissionPlans.Turnover.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.CommissionPlans.Turnover.mvc$translationsResources", "PartnersHub.CommissionPlans.controller", "PartnersHub.CommissionPlans.Turnover.mvc$controller.OnReady.JavaScript1JS", "PartnersHub.controller$IFrameLogout", "PartnersHub.controller$HandleRedirectOnLogin", "PartnersHub.model$RC_a67f16d1367e48674c0278c0312479e0", "PartnersHub.model$RL_ca06e5bf8b5ed2faf11935e078ed0bf5", "PartnersHub.model$RC_500d6affd752292b92c8cddd9b92f7b9", "PartnersHub.model$RL_232c89a2d5038d57a9042dc25af9b70b"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_CommissionPlans_Turnover_mvc_TranslationsResources, PartnersHub_CommissionPlansController, PartnersHub_CommissionPlans_Turnover_mvc_controller_OnReady_JavaScript1JS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_CommissionPlans_Turnover_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {
                    getDigitalOptions$AggrRefresh: 0,
                    getOptions$AggrRefresh: 0
                };
                this.dataFetchDependentsGraph = {
                    getDigitalOptions$AggrRefresh: [],
                    getOptions$AggrRefresh: []
                };
                this.shouldSendClientVarsToDataSources = false;
            }

            // Server Actions - Methods

            // Aggregates and Data Actions
            get getDigitalOptions$AggrRefresh() {
                if (!(this.hasOwnProperty("_getDigitalOptions$AggrRefresh"))) {
                    this._getDigitalOptions$AggrRefresh = function() {
                        var innerBody = function(maxRecords, startIndex, callContext) {
                            var model = this.model;
                            var controller = this.controller;
                            var callContext = controller.callContext(callContext);
                            return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetDigitalOptions", "screenservices/PartnersHub/CommissionPlans/Turnover/ScreenDataSetGetDigitalOptions", "8QcyFwVSF_ICq5+BXN_SGw", maxRecords, startIndex, function(b) {
                                model.variables.getDigitalOptionsAggr.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.getDigitalOptionsAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getDigitalOptionsAggr.constructor));
                            }, undefined, undefined, undefined, callContext, undefined, true).then(function() {
                                controller._onReadyDigitalOptions$Action(controller.callContext(callContext));
                            });
                        }.bind(this);
                        return OS.Logger.startActiveSpan("GetDigitalOptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetDigitalOptions");
                                span.setAttribute("outsystems.function.key", "b2abc34e-d7f0-4a96-ba25-25191dcebbc0");
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

                return this._getDigitalOptions$AggrRefresh;
            }
            set getDigitalOptions$AggrRefresh(value) {
                this._getDigitalOptions$AggrRefresh = value;
            }

            get getOptions$AggrRefresh() {
                if (!(this.hasOwnProperty("_getOptions$AggrRefresh"))) {
                    this._getOptions$AggrRefresh = function() {
                        var innerBody = function(maxRecords, startIndex, callContext) {
                            var model = this.model;
                            var controller = this.controller;
                            var callContext = controller.callContext(callContext);
                            return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetOptions", "screenservices/PartnersHub/CommissionPlans/Turnover/ScreenDataSetGetOptions", "x_JnGq+XhOCXJGW+pr9Skg", maxRecords, startIndex, function(b) {
                                model.variables.getOptionsAggr.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.getOptionsAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getOptionsAggr.constructor));
                            }, undefined, undefined, undefined, callContext, undefined, true).then(function() {
                                controller._onReadyOptions$Action(controller.callContext(callContext));
                            });
                        }.bind(this);
                        return OS.Logger.startActiveSpan("GetOptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetOptions");
                                span.setAttribute("outsystems.function.key", "bf92f1d5-fa4d-4e7b-9080-071c69c4c8dd");
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

                return this._getOptions$AggrRefresh;
            }
            set getOptions$AggrRefresh(value) {
                this._getOptions$AggrRefresh = value;
            }


            get dataFetchActionNames() {
                if (!(this.hasOwnProperty("_dataFetchActionNames"))) {
                    this._dataFetchActionNames = ["getDigitalOptions$AggrRefresh", "getOptions$AggrRefresh"];
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
                                span.setAttribute("outsystems.function.key", "3426d687-e7db-4cfd-97ed-8dbac2b1b116");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var handleRedirectOnLoginVar = new OS.DataTypes.VariableHolder();
                                var javaScript1JSResult = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    javaScript1JSResult.value = OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "JavaScript1");
                                            span.setAttribute("outsystems.function.key", "4af20208-4247-434c-b50d-5365b9c84853");
                                            span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                            span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(PartnersHub_CommissionPlans_Turnover_mvc_controller_OnReady_JavaScript1JS, "JavaScript1", "OnReady", {
                                                IsFetchingDigitalOptions: OS.DataConversion.JSNodeParamConverter.to(model.variables.isFetchingDigitalOptionsVar, OS.DataTypes.DataTypes.Boolean),
                                                IsFetchingOptions: OS.DataConversion.JSNodeParamConverter.to(model.variables.isFetchingOptionsVar, OS.DataTypes.DataTypes.Boolean),
                                                DoneFetching: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                                            }, function($parameters) {
                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.CommissionPlans.Turnover.OnReady$javaScript1JSResult"))();
                                                jsNodeResult.doneFetchingOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DoneFetching, OS.DataTypes.DataTypes.Boolean);
                                                return jsNodeResult;
                                            }, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                    // Execute Action: HandleRedirectOnLogin
                                    model.flush();
                                    return PartnersHubController.default.handleRedirectOnLogin$Action(callContext).then(function(value) {
                                        handleRedirectOnLoginVar.value = value;
                                    }).then(function() {
                                        return OS.Flow.executeSequence(function() {
                                            if ((handleRedirectOnLoginVar.value.isLoggedInOut)) {
                                                // IsLoading = JavaScript1.DoneFetching
                                                model.variables.isLoadingVar = javaScript1JSResult.value.doneFetchingOut;
                                            } else {
                                                // Execute Action: IFrameLogout
                                                model.flush();
                                                return PartnersHubController.default.iFrameLogout$Action(callContext);
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

            get _onClick$Action() {
                if (!(this.hasOwnProperty("__onClick$Action"))) {
                    this.__onClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClick");
                                span.setAttribute("outsystems.function.key", "403c5fe9-2f18-4148-804d-914ec3f33684");
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

            get _onReadyOptions$Action() {
                if (!(this.hasOwnProperty("__onReadyOptions$Action"))) {
                    this.__onReadyOptions$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnReadyOptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnReadyOptions");
                                span.setAttribute("outsystems.function.key", "a04d20a2-c0a5-46a3-b720-f7f9a162c3cc");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReadyOptions");
                                callContext = controller.callContext(callContext);
                                // IsFetchingOptions = False
                                model.variables.isFetchingOptionsVar = false;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onReadyOptions$Action;
            }
            set _onReadyOptions$Action(value) {
                this.__onReadyOptions$Action = value;
            }

            get _onReadyDigitalOptions$Action() {
                if (!(this.hasOwnProperty("__onReadyDigitalOptions$Action"))) {
                    this.__onReadyDigitalOptions$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnReadyDigitalOptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnReadyDigitalOptions");
                                span.setAttribute("outsystems.function.key", "b9081cc5-6567-424e-90b2-0c11e0d78197");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReadyDigitalOptions");
                                callContext = controller.callContext(callContext);
                                // IsFetchingDigitalOptions = False
                                model.variables.isFetchingDigitalOptionsVar = false;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onReadyDigitalOptions$Action;
            }
            set _onReadyDigitalOptions$Action(value) {
                this.__onReadyDigitalOptions$Action = value;
            }


            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "3426d687-e7db-4cfd-97ed-8dbac2b1b116");
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
                        span.setAttribute("outsystems.function.key", "403c5fe9-2f18-4148-804d-914ec3f33684");
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

            onReadyOptions$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReadyOptions__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReadyOptions");
                        span.setAttribute("outsystems.function.key", "a04d20a2-c0a5-46a3-b720-f7f9a162c3cc");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onReadyOptions$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onReadyDigitalOptions$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReadyDigitalOptions__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReadyDigitalOptions");
                        span.setAttribute("outsystems.function.key", "b9081cc5-6567-424e-90b2-0c11e0d78197");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onReadyDigitalOptions$Action, callContext);
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
        Controller.registerVariableGroupType("PartnersHub.CommissionPlans.Turnover.OnReady$javaScript1JSResult", [{
            name: "DoneFetching",
            attrName: "doneFetchingOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.CommissionPlans.Turnover.mvc$controller.OnReady.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if (!$parameters.IsFetchingDigitalOptions && !$parameters.IsFetchingOptions) {
            $parameters.DoneFetching = true
        }
    };
});


define("PartnersHub.CommissionPlans.Turnover.mvc$translationsResources.ar-001", [], function() {
    return {
        "bVJekF_M1UKmdCHZbar+Ig#Value": "يمكن للشركاء المقيمين في الاتحاد الأوروبي التسجيل في خطة الدوران ولكن يمكنهم فقط إحالة عملاء يقيمون خارج الاتحاد الأوروبي.",
        "H1Oo5_queUqiCIZ0kB33Uw#Value": "إخلاء المسؤولية:",
        "aS2fUHXwJUK3Z52v40WzNw#Value": "عمولة",
        "NsZ0QQ9IvEKCCneAeCC5bQ#Value": "احتمال",
        "hzplZFUS8ke0JVnfI5ux2Q#Value": "اربح بناءً على احتمال دفع عقود عملائك.",
        "LlaMe90rzUel37W43FUgOA#Value": "الخيارات الرقمية",
        "PjoOFwE_rEe6ie8ttKOsjg#Value": "عمولة",
        "8nKHLthtAUayRQNXxfL6SA#Value": "نوع الخيار",
        "A6wn7d_MUU+llc7W9Xa93g#Value": "اربح بناءً على نوع الخيار الذي يتداوله عملاؤك.",
        "US_t93jy0UebCcJfDNx4AA#Value": "خيارات",
        "eGwk0H7ekEyPl6poGuYuTg#Value": "إذا لم يكن خطة دورانك مفعلة، اتصل بمدير حسابك.",
        "A1DuyLR4y0mdPlILWVXagw#Value": "دوران"
    };
});

define("PartnersHub.CommissionPlans.Turnover.mvc$translationsResources.de-DE", [], function() {
    return {
        "bVJekF_M1UKmdCHZbar+Ig#Value": "Affiliates, die in der EU ansässig sind, können sich für den Umsatzplan anmelden, dürfen jedoch nur Kunden außerhalb der EU werben.",
        "H1Oo5_queUqiCIZ0kB33Uw#Value": "Haftungsausschluss:",
        "aS2fUHXwJUK3Z52v40WzNw#Value": "Provision",
        "NsZ0QQ9IvEKCCneAeCC5bQ#Value": "Wahrscheinlichkeit",
        "hzplZFUS8ke0JVnfI5ux2Q#Value": "Verdienen Sie basierend auf der Auszahlungswahrscheinlichkeit der Verträge Ihrer Kunden.",
        "LlaMe90rzUel37W43FUgOA#Value": "Digitale Optionen",
        "PjoOFwE_rEe6ie8ttKOsjg#Value": "Provision",
        "8nKHLthtAUayRQNXxfL6SA#Value": "Art der Option",
        "A6wn7d_MUU+llc7W9Xa93g#Value": "Verdienen Sie basierend auf der Art der Option, die Ihre Kunden handeln.",
        "US_t93jy0UebCcJfDNx4AA#Value": "Optionen",
        "eGwk0H7ekEyPl6poGuYuTg#Value": "Wenn Ihr Turnover-Plan nicht aktiviert ist, kontaktieren Sie Ihren Kontomanager.",
        "A1DuyLR4y0mdPlILWVXagw#Value": "Umsatz"
    };
});

define("PartnersHub.CommissionPlans.Turnover.mvc$translationsResources.es-ES", [], function() {
    return {
        "bVJekF_M1UKmdCHZbar+Ig#Value": "Los afiliados que residen en la UE pueden registrarse en el plan de volumen, pero solo pueden referir a clientes que residan fuera de la UE.",
        "H1Oo5_queUqiCIZ0kB33Uw#Value": "Descargo de responsabilidad:",
        "aS2fUHXwJUK3Z52v40WzNw#Value": "Comisión",
        "NsZ0QQ9IvEKCCneAeCC5bQ#Value": "Probabilidad",
        "hzplZFUS8ke0JVnfI5ux2Q#Value": "Gana en función de la probabilidad de pago de los contratos de tus clientes.",
        "LlaMe90rzUel37W43FUgOA#Value": "Opciones digitales",
        "PjoOFwE_rEe6ie8ttKOsjg#Value": "Comisión",
        "8nKHLthtAUayRQNXxfL6SA#Value": "Tipo de Opción",
        "A6wn7d_MUU+llc7W9Xa93g#Value": "Gane según el tipo de Opción que negocien sus clientes.",
        "US_t93jy0UebCcJfDNx4AA#Value": "Opciones",
        "eGwk0H7ekEyPl6poGuYuTg#Value": "Si su plan de Turnover no está activado, contacte a su gerente de cuenta.",
        "A1DuyLR4y0mdPlILWVXagw#Value": "Volumen de negocios"
    };
});

define("PartnersHub.CommissionPlans.Turnover.mvc$translationsResources.fr-FR", [], function() {
    return {
        "bVJekF_M1UKmdCHZbar+Ig#Value": "Les affiliés résidant dans l\'UE peuvent s\'inscrire au plan de chiffre d\'affaires, mais ne peuvent référer que des clients résidant en dehors de l\'UE.",
        "H1Oo5_queUqiCIZ0kB33Uw#Value": "Avertissement :",
        "aS2fUHXwJUK3Z52v40WzNw#Value": "Commission",
        "NsZ0QQ9IvEKCCneAeCC5bQ#Value": "Probabilité",
        "hzplZFUS8ke0JVnfI5ux2Q#Value": "Gagnez en fonction de la probabilité de paiement des contrats de vos clients.",
        "LlaMe90rzUel37W43FUgOA#Value": "Options numériques",
        "PjoOFwE_rEe6ie8ttKOsjg#Value": "Commission",
        "8nKHLthtAUayRQNXxfL6SA#Value": "Type d\'Option",
        "A6wn7d_MUU+llc7W9Xa93g#Value": "Gagnez en fonction du type d\'Option que négocient vos clients.",
        "US_t93jy0UebCcJfDNx4AA#Value": "Options",
        "eGwk0H7ekEyPl6poGuYuTg#Value": "Si votre plan de Turnover n\'est pas activé, contactez votre gestionnaire de compte.",
        "A1DuyLR4y0mdPlILWVXagw#Value": "Chiffre d\'affaires"
    };
});

define("PartnersHub.CommissionPlans.Turnover.mvc$translationsResources.it-IT", [], function() {
    return {
        "bVJekF_M1UKmdCHZbar+Ig#Value": "Gli affiliati residenti nell\'UE possono iscriversi al piano di fatturato, ma possono riferire solo clienti residenti al di fuori dell\'UE.",
        "H1Oo5_queUqiCIZ0kB33Uw#Value": "Dichiarazione di non responsabilità:",
        "aS2fUHXwJUK3Z52v40WzNw#Value": "Commissione",
        "NsZ0QQ9IvEKCCneAeCC5bQ#Value": "Probabilità",
        "hzplZFUS8ke0JVnfI5ux2Q#Value": "Guadagna in base alla probabilità di pagamento dei contratti dei tuoi clienti.",
        "LlaMe90rzUel37W43FUgOA#Value": "Opzioni digitali",
        "PjoOFwE_rEe6ie8ttKOsjg#Value": "Commissione",
        "8nKHLthtAUayRQNXxfL6SA#Value": "Tipo di Opzione",
        "A6wn7d_MUU+llc7W9Xa93g#Value": "Guadagna in base al tipo di Opzione che i tuoi clienti scambiano.",
        "US_t93jy0UebCcJfDNx4AA#Value": "Opzioni",
        "eGwk0H7ekEyPl6poGuYuTg#Value": "Se il tuo piano di Turnover non è attivato, contatta il tuo account manager.",
        "A1DuyLR4y0mdPlILWVXagw#Value": "Fatturato"
    };
});

define("PartnersHub.CommissionPlans.Turnover.mvc$translationsResources.pl-PL", [], function() {
    return {
        "bVJekF_M1UKmdCHZbar+Ig#Value": "Partnerzy mieszkający w UE mogą zarejestrować się w planie obrotu, ale mogą polecać tylko klientów mieszkających poza UE.",
        "H1Oo5_queUqiCIZ0kB33Uw#Value": "Zastrzeżenie:",
        "aS2fUHXwJUK3Z52v40WzNw#Value": "Prowizja",
        "NsZ0QQ9IvEKCCneAeCC5bQ#Value": "Prawdopodobieństwo",
        "hzplZFUS8ke0JVnfI5ux2Q#Value": "Zarabiaj w oparciu o prawdopodobieństwo wypłaty kontraktów twoich klientów.",
        "LlaMe90rzUel37W43FUgOA#Value": "Opcje cyfrowe",
        "PjoOFwE_rEe6ie8ttKOsjg#Value": "Prowizja",
        "8nKHLthtAUayRQNXxfL6SA#Value": "Rodzaj Opcji",
        "A6wn7d_MUU+llc7W9Xa93g#Value": "Zarabiaj w zależności od rodzaju Opcji, którymi handlują Twoi klienci.",
        "US_t93jy0UebCcJfDNx4AA#Value": "Opcje",
        "eGwk0H7ekEyPl6poGuYuTg#Value": "Jeśli Twój plan Turnover nie jest aktywowany, skontaktuj się ze swoim menedżerem konta.",
        "A1DuyLR4y0mdPlILWVXagw#Value": "Obrót"
    };
});

define("PartnersHub.CommissionPlans.Turnover.mvc$translationsResources.pt-PT", [], function() {
    return {
        "bVJekF_M1UKmdCHZbar+Ig#Value": "Os afiliados residentes na UE podem inscrever-se no plano de volume, mas só podem referir clientes que residam fora da UE.",
        "H1Oo5_queUqiCIZ0kB33Uw#Value": "Isenção de responsabilidade:",
        "aS2fUHXwJUK3Z52v40WzNw#Value": "Comissão",
        "NsZ0QQ9IvEKCCneAeCC5bQ#Value": "Probabilidade",
        "hzplZFUS8ke0JVnfI5ux2Q#Value": "Ganhe com base na probabilidade de pagamento dos contratos dos seus clientes.",
        "LlaMe90rzUel37W43FUgOA#Value": "Opções digitais",
        "PjoOFwE_rEe6ie8ttKOsjg#Value": "Comissão",
        "8nKHLthtAUayRQNXxfL6SA#Value": "Tipo de Opção",
        "A6wn7d_MUU+llc7W9Xa93g#Value": "Ganhe com base no tipo de Opção que os seus clientes negociam.",
        "US_t93jy0UebCcJfDNx4AA#Value": "Opções",
        "eGwk0H7ekEyPl6poGuYuTg#Value": "Se o seu plano de Turnover não estiver ativado, entre em contacto com o seu gestor de conta.",
        "A1DuyLR4y0mdPlILWVXagw#Value": "Volume de negócios"
    };
});

define("PartnersHub.CommissionPlans.Turnover.mvc$translationsResources.ru-RU", [], function() {
    return {
        "bVJekF_M1UKmdCHZbar+Ig#Value": "Партнеры, проживающие в ЕС, могут зарегистрироваться в плане оборота, но могут рекомендовать клиентов, проживающих за пределами ЕС.",
        "H1Oo5_queUqiCIZ0kB33Uw#Value": "Отказ от ответственности:",
        "aS2fUHXwJUK3Z52v40WzNw#Value": "Комиссия",
        "NsZ0QQ9IvEKCCneAeCC5bQ#Value": "Вероятность",
        "hzplZFUS8ke0JVnfI5ux2Q#Value": "Зарабатывайте на основе вероятности выплаты контрактов ваших клиентов.",
        "LlaMe90rzUel37W43FUgOA#Value": "Цифровые опционы",
        "PjoOFwE_rEe6ie8ttKOsjg#Value": "Комиссия",
        "8nKHLthtAUayRQNXxfL6SA#Value": "Тип Опции",
        "A6wn7d_MUU+llc7W9Xa93g#Value": "Зарабатывайте в зависимости от типа Опции, которую торгуют ваши клиенты.",
        "US_t93jy0UebCcJfDNx4AA#Value": "Опции",
        "eGwk0H7ekEyPl6poGuYuTg#Value": "Если ваш план Turnover не активирован, свяжитесь с вашим менеджером по аккаунту.",
        "A1DuyLR4y0mdPlILWVXagw#Value": "Оборот"
    };
});

define("PartnersHub.CommissionPlans.Turnover.mvc$translationsResources", ["exports", "PartnersHub.CommissionPlans.Turnover.mvc$translationsResources.ar-001", "PartnersHub.CommissionPlans.Turnover.mvc$translationsResources.de-DE", "PartnersHub.CommissionPlans.Turnover.mvc$translationsResources.es-ES", "PartnersHub.CommissionPlans.Turnover.mvc$translationsResources.fr-FR", "PartnersHub.CommissionPlans.Turnover.mvc$translationsResources.it-IT", "PartnersHub.CommissionPlans.Turnover.mvc$translationsResources.pl-PL", "PartnersHub.CommissionPlans.Turnover.mvc$translationsResources.pt-PT", "PartnersHub.CommissionPlans.Turnover.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_CommissionPlans_Turnover_mvc_translationsResources_ar001, PartnersHub_CommissionPlans_Turnover_mvc_translationsResources_deDE, PartnersHub_CommissionPlans_Turnover_mvc_translationsResources_esES, PartnersHub_CommissionPlans_Turnover_mvc_translationsResources_frFR, PartnersHub_CommissionPlans_Turnover_mvc_translationsResources_itIT, PartnersHub_CommissionPlans_Turnover_mvc_translationsResources_plPL, PartnersHub_CommissionPlans_Turnover_mvc_translationsResources_ptPT, PartnersHub_CommissionPlans_Turnover_mvc_translationsResources_ruRU) {
    return {
        "ar-001": {
            "translations": PartnersHub_CommissionPlans_Turnover_mvc_translationsResources_ar001,
            "isRTL": true
        },
        "de-DE": {
            "translations": PartnersHub_CommissionPlans_Turnover_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_CommissionPlans_Turnover_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_CommissionPlans_Turnover_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_CommissionPlans_Turnover_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_CommissionPlans_Turnover_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_CommissionPlans_Turnover_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_CommissionPlans_Turnover_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});