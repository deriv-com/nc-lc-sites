define("PartnersHub.CFDs.PlanDetailsTable.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.Common.SkeletonLoader.mvc$model", "PartnersHub.model$EN_0f6fdd9309a44b721498902bfa87efe5EntityRecord", "PartnersHub.model$RL_67489198c39fbcf1ac201784c943f33a", "PartnersHub.model$RC_d2c76d3d06245dbac20cf9f0e0b899cf", "PartnersHub.model$RL_f06dcc4aac1888d5c11e768ee5c77cb8", "PartnersHub.model$RC_68ac16d52444e5992cfc1456c72a3eb3", "PartnersHub.model$RL_5fc243903ae10beb07a4a2c827ee50d1"], function(OSRuntimeCore, PartnersHubModel, PartnersHub_Common_SkeletonLoader_mvcModel) {
    var OS = OSRuntimeCore; {
        class GetCFDsPlansTableDataByCFDsAllSubPlanIdAggrRecInner extends
        OS.Model.AggregateRecord {
            static attributesToDeclare() {
                return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new GetCFDsPlansTableDataByCFDsAllSubPlanIdAggrRec(new GetCFDsPlansTableDataByCFDsAllSubPlanIdAggrRec.RecordClass({
                    RecordListType: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        GetCFDsPlansTableDataByCFDsAllSubPlanIdAggrRecInner.RecordListType = PartnersHubModel.RL_f06dcc4aac1888d5c11e768ee5c77cb8;
        var GetCFDsPlansTableDataByCFDsAllSubPlanIdAggrRec = GetCFDsPlansTableDataByCFDsAllSubPlanIdAggrRecInner;
        GetCFDsPlansTableDataByCFDsAllSubPlanIdAggrRec.init();
    } {
        class GetCFDsPlansTableDataByCFDsAllPlanIdAggrRecInner extends
        OS.Model.AggregateRecord {
            static attributesToDeclare() {
                return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new GetCFDsPlansTableDataByCFDsAllPlanIdAggrRec(new GetCFDsPlansTableDataByCFDsAllPlanIdAggrRec.RecordClass({
                    RecordListType: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        GetCFDsPlansTableDataByCFDsAllPlanIdAggrRecInner.RecordListType = PartnersHubModel.RL_5fc243903ae10beb07a4a2c827ee50d1;
        var GetCFDsPlansTableDataByCFDsAllPlanIdAggrRec = GetCFDsPlansTableDataByCFDsAllPlanIdAggrRecInner;
        GetCFDsPlansTableDataByCFDsAllPlanIdAggrRec.init();
    }


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Data", "dataVar", "Data", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.RL_67489198c39fbcf1ac201784c943f33a());
                    }, false, PartnersHubModel.RL_67489198c39fbcf1ac201784c943f33a),
                    this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, false),
                    this.attr("CommissionType", "commissionTypeIn", "CommissionType", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_commissionTypeInDataFetchStatus", "_commissionTypeInDataFetchStatus", "_commissionTypeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("IsSubPlan", "isSubPlanIn", "IsSubPlan", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_isSubPlanInDataFetchStatus", "_isSubPlanInDataFetchStatus", "_isSubPlanInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("PlanId", "planIdIn", "PlanId", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, false),
                    this.attr("_planIdInDataFetchStatus", "_planIdInDataFetchStatus", "_planIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("GetCFDsPlansTableDataByCFDsAllSubPlanId", "getCFDsPlansTableDataByCFDsAllSubPlanIdAggr", "GetCFDsPlansTableDataByCFDsAllSubPlanId", true, true, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new GetCFDsPlansTableDataByCFDsAllSubPlanIdAggrRec());
                    }, true, GetCFDsPlansTableDataByCFDsAllSubPlanIdAggrRec),
                    this.attr("GetCFDsPlansTableDataByCFDsAllPlanId", "getCFDsPlansTableDataByCFDsAllPlanIdAggr", "GetCFDsPlansTableDataByCFDsAllPlanId", true, true, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new GetCFDsPlansTableDataByCFDsAllPlanIdAggrRec());
                    }, true, GetCFDsPlansTableDataByCFDsAllPlanIdAggrRec)
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
                Model._hasValidationWidgetsValue = PartnersHub_Common_SkeletonLoader_mvcModel.hasValidationWidgets;
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {
            if ("CommissionType" in inputs) {
                this.variables.commissionTypeIn = inputs.CommissionType;
                if ("_commissionTypeInDataFetchStatus" in inputs) {
                    this.variables._commissionTypeInDataFetchStatus = inputs._commissionTypeInDataFetchStatus;
                }

            }

            if ("IsSubPlan" in inputs) {
                this.variables.isSubPlanIn = inputs.IsSubPlan;
                if ("_isSubPlanInDataFetchStatus" in inputs) {
                    this.variables._isSubPlanInDataFetchStatus = inputs._isSubPlanInDataFetchStatus;
                }

            }

            if ("PlanId" in inputs) {
                this.variables.planIdIn = inputs.PlanId;
                if ("_planIdInDataFetchStatus" in inputs) {
                    this.variables._planIdInDataFetchStatus = inputs._planIdInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.CFDs.PlanDetailsTable.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.CFDs.PlanDetailsTable.mvc$model", "PartnersHub.CFDs.PlanDetailsTable.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Common.SkeletonLoader.mvc$view", "@outsystems/runtime-widgets-js", "PartnersHub.model$EN_0f6fdd9309a44b721498902bfa87efe5EntityRecord", "PartnersHub.model$RL_67489198c39fbcf1ac201784c943f33a", "PartnersHub.model$RC_d2c76d3d06245dbac20cf9f0e0b899cf", "PartnersHub.model$RL_f06dcc4aac1888d5c11e768ee5c77cb8", "PartnersHub.model$RC_68ac16d52444e5992cfc1456c72a3eb3", "PartnersHub.model$RL_5fc243903ae10beb07a4a2c827ee50d1"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_CFDs_PlanDetailsTable_mvc_model, PartnersHub_CFDs_PlanDetailsTable_mvc_controller, PartnersHubClientVariables, PartnersHub_Common_SkeletonLoader_mvc_view, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "CFDs.PlanDetailsTable";
        }

        static getAttributes() {
            return {
                codeFunction: "PlanDetailsTable",
                functionKey: "6b4795a8-34a7-46cd-95e9-60a753a1af43",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.CFDs.PlanDetailsTable.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [PartnersHub_Common_SkeletonLoader_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_CFDs_PlanDetailsTable_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_CFDs_PlanDetailsTable_mvc_controller;
        }

        get title() {


            return "";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(PartnersHub_Common_SkeletonLoader_mvc_view, {
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.TableRecords, {
                            showHeader: true,
                            source: model.variables.dataVar,
                            style: "table",
                            styleHeader: "table-header",
                            styleRow: "table-row to-description",
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                headerRow: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.HeaderCell, {
                                        style: "header-color",
                                        _idProps: {
                                            service: idService,
                                            uuid: "2"
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
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "color: #222;"
                                        },
                                        text: [$text(getTranslation("AiMBRsM2QEmookT5xpWXPg#Value", "Asset"))],
                                        _idProps: {
                                            service: idService,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))), React.createElement(OSWidgets.HeaderCell, {
                                        _idProps: {
                                            service: idService,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: [asPrimitiveValue(model.variables._commissionTypeInDataFetchStatus), asPrimitiveValue(model.variables.commissionTypeIn)]
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "text-align: center;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Expression, {
                                        extendedProperties: {
                                            style: "color: #222;"
                                        },
                                        value: model.variables.commissionTypeIn,
                                        _idProps: {
                                            service: idService,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._commissionTypeInDataFetchStatus)
                                    })))];
                                }),
                                row: new IteratorPlaceholderContent(function(idService, callContext) {
                                    return [React.createElement(OSWidgets.RowCell, {
                                        style: "table-row-even",
                                        _idProps: {
                                            service: idService,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: [asPrimitiveValue(model.variables.dataVar.getCurrent(callContext.iterationContext).assetAttr)]
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "text-align: center;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Expression, {
                                        value: model.variables.dataVar.getCurrent(callContext.iterationContext).assetAttr,
                                        _idProps: {
                                            service: idService,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))), React.createElement(OSWidgets.RowCell, {
                                        style: "table-row",
                                        _idProps: {
                                            service: idService,
                                            uuid: "11"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: [asPrimitiveValue(model.variables.dataVar.getCurrent(callContext.iterationContext).commissionAttr)]
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "text-align: center;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "12"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Expression, {
                                        value: model.variables.dataVar.getCurrent(callContext.iterationContext).commissionAttr,
                                        _idProps: {
                                            service: idService,
                                            uuid: "13"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })))];
                                }, callContext, idService, "1_0")
                            },
                            _dependencies: [asPrimitiveValue(model.variables._commissionTypeInDataFetchStatus), asPrimitiveValue(model.variables.commissionTypeIn)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables._commissionTypeInDataFetchStatus), asPrimitiveValue(model.variables.commissionTypeIn), asPrimitiveValue(model.variables.dataVar)]
            }));
        }
    }

    return View;
});
define("PartnersHub.CFDs.PlanDetailsTable.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.CFDs.PlanDetailsTable.mvc$translationsResources", "PartnersHub.model$EN_0f6fdd9309a44b721498902bfa87efe5EntityRecord", "PartnersHub.model$RL_67489198c39fbcf1ac201784c943f33a", "PartnersHub.model$RC_d2c76d3d06245dbac20cf9f0e0b899cf", "PartnersHub.model$RL_f06dcc4aac1888d5c11e768ee5c77cb8", "PartnersHub.model$RC_68ac16d52444e5992cfc1456c72a3eb3", "PartnersHub.model$RL_5fc243903ae10beb07a4a2c827ee50d1"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_CFDs_PlanDetailsTable_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_CFDs_PlanDetailsTable_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {
                    getCFDsPlansTableDataByCFDsAllSubPlanId$AggrRefresh: -1,
                    getCFDsPlansTableDataByCFDsAllPlanId$AggrRefresh: 0
                };
                this.dataFetchDependentsGraph = {
                    getCFDsPlansTableDataByCFDsAllSubPlanId$AggrRefresh: [],
                    getCFDsPlansTableDataByCFDsAllPlanId$AggrRefresh: []
                };
                this.shouldSendClientVarsToDataSources = false;
            }

            // Server Actions - Methods

            // Aggregates and Data Actions
            get getCFDsPlansTableDataByCFDsAllSubPlanId$AggrRefresh() {
                if (!(this.hasOwnProperty("_getCFDsPlansTableDataByCFDsAllSubPlanId$AggrRefresh"))) {
                    this._getCFDsPlansTableDataByCFDsAllSubPlanId$AggrRefresh = function() {
                        var innerBody = function(maxRecords, startIndex, callContext) {
                            var model = this.model;
                            var controller = this.controller;
                            var callContext = controller.callContext(callContext);
                            return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetCFDsPlansTableDataByCFDsAllSubPlanId", "screenservices/PartnersHub/CFDs/PlanDetailsTable/ScreenDataSetGetCFDsPlansTableDataByCFDsAllSubPlanId", "loLIe5JEKYIrmp278twNnw", maxRecords, startIndex, function(b) {
                                model.variables.getCFDsPlansTableDataByCFDsAllSubPlanIdAggr.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.getCFDsPlansTableDataByCFDsAllSubPlanIdAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getCFDsPlansTableDataByCFDsAllSubPlanIdAggr.constructor));
                            }, undefined, undefined, undefined, callContext, undefined, true).then(function() {
                                controller._onAfterFetchSubPlan$Action(controller.callContext(callContext));
                            });
                        }.bind(this);
                        return OS.Logger.startActiveSpan("GetCFDsPlansTableDataByCFDsAllSubPlanId", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetCFDsPlansTableDataByCFDsAllSubPlanId");
                                span.setAttribute("outsystems.function.key", "1509782f-a37a-4813-a46e-b7b91c092c47");
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

                return this._getCFDsPlansTableDataByCFDsAllSubPlanId$AggrRefresh;
            }
            set getCFDsPlansTableDataByCFDsAllSubPlanId$AggrRefresh(value) {
                this._getCFDsPlansTableDataByCFDsAllSubPlanId$AggrRefresh = value;
            }

            get getCFDsPlansTableDataByCFDsAllPlanId$AggrRefresh() {
                if (!(this.hasOwnProperty("_getCFDsPlansTableDataByCFDsAllPlanId$AggrRefresh"))) {
                    this._getCFDsPlansTableDataByCFDsAllPlanId$AggrRefresh = function() {
                        var innerBody = function(maxRecords, startIndex, callContext) {
                            var model = this.model;
                            var controller = this.controller;
                            var callContext = controller.callContext(callContext);
                            return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetCFDsPlansTableDataByCFDsAllPlanId", "screenservices/PartnersHub/CFDs/PlanDetailsTable/ScreenDataSetGetCFDsPlansTableDataByCFDsAllPlanId", "MXLFQfrLREAGPDL9oIBz+g", maxRecords, startIndex, function(b) {
                                model.variables.getCFDsPlansTableDataByCFDsAllPlanIdAggr.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.getCFDsPlansTableDataByCFDsAllPlanIdAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getCFDsPlansTableDataByCFDsAllPlanIdAggr.constructor));
                            }, undefined, undefined, undefined, callContext, undefined, true).then(function() {
                                return controller._onAfterFetchAllPlan$Action(controller.callContext(callContext));
                            });
                        }.bind(this);
                        return OS.Logger.startActiveSpan("GetCFDsPlansTableDataByCFDsAllPlanId", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetCFDsPlansTableDataByCFDsAllPlanId");
                                span.setAttribute("outsystems.function.key", "ae77d259-63cd-423f-96bd-d8ce2eae05ba");
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

                return this._getCFDsPlansTableDataByCFDsAllPlanId$AggrRefresh;
            }
            set getCFDsPlansTableDataByCFDsAllPlanId$AggrRefresh(value) {
                this._getCFDsPlansTableDataByCFDsAllPlanId$AggrRefresh = value;
            }


            get dataFetchActionNames() {
                if (!(this.hasOwnProperty("_dataFetchActionNames"))) {
                    this._dataFetchActionNames = ["getCFDsPlansTableDataByCFDsAllSubPlanId$AggrRefresh", "getCFDsPlansTableDataByCFDsAllPlanId$AggrRefresh"];
                }

                return this._dataFetchActionNames;
            }
            set dataFetchActionNames(value) {
                this._dataFetchActionNames = value;
            }

            // Client Actions - Methods
            get _onParametersChanged$Action() {
                if (!(this.hasOwnProperty("__onParametersChanged$Action"))) {
                    this.__onParametersChanged$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnParametersChanged", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnParametersChanged");
                                span.setAttribute("outsystems.function.key", "1bb88eaa-297f-452b-a5ee-2b9f8fe07d36");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnParametersChanged");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    return OS.Flow.executeSequence(function() {
                                        if ((model.variables.isSubPlanIn)) {
                                            // Refresh Query: GetCFDsPlansTableDataByCFDsAllSubPlanId
                                            var result = controller.getCFDsPlansTableDataByCFDsAllSubPlanId$AggrRefresh(50, 0, callContext);
                                            model.flush();
                                            return result;
                                        } else {
                                            // Refresh Query: GetCFDsPlansTableDataByCFDsAllPlanId
                                            var result = controller.getCFDsPlansTableDataByCFDsAllPlanId$AggrRefresh(50, 0, callContext);
                                            model.flush();
                                            return result;
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

                return this.__onParametersChanged$Action;
            }
            set _onParametersChanged$Action(value) {
                this.__onParametersChanged$Action = value;
            }

            get _onAfterFetchSubPlan$Action() {
                if (!(this.hasOwnProperty("__onAfterFetchSubPlan$Action"))) {
                    this.__onAfterFetchSubPlan$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnAfterFetchSubPlan", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnAfterFetchSubPlan");
                                span.setAttribute("outsystems.function.key", "8952edfb-4d36-47c1-922a-05257e467452");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnAfterFetchSubPlan");
                                callContext = controller.callContext(callContext);
                                // Data = GetCFDsPlansTableDataByCFDsAllSubPlanId.List
                                model.variables.dataVar = OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getCFDsPlansTableDataByCFDsAllSubPlanIdAggr.listOut, new PartnersHubModel.RL_67489198c39fbcf1ac201784c943f33a(), function(source, target) {
                                    target = source.cFDsPlansTableDataAttr;
                                    return target;
                                });
                                // IsLoading = False
                                model.variables.isLoadingVar = false;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onAfterFetchSubPlan$Action;
            }
            set _onAfterFetchSubPlan$Action(value) {
                this.__onAfterFetchSubPlan$Action = value;
            }

            get _onAfterFetchAllPlan$Action() {
                if (!(this.hasOwnProperty("__onAfterFetchAllPlan$Action"))) {
                    this.__onAfterFetchAllPlan$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnAfterFetchAllPlan", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnAfterFetchAllPlan");
                                span.setAttribute("outsystems.function.key", "c84c0f9e-798b-492a-a1e6-18415501bed6");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnAfterFetchAllPlan");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    return OS.Flow.executeSequence(function() {
                                        if ((model.variables.isSubPlanIn)) {
                                            // Refresh Query: GetCFDsPlansTableDataByCFDsAllSubPlanId
                                            var result = controller.getCFDsPlansTableDataByCFDsAllSubPlanId$AggrRefresh(50, 0, callContext);
                                            model.flush();
                                            return result;
                                        } else {
                                            // Data = GetCFDsPlansTableDataByCFDsAllPlanId.List
                                            model.variables.dataVar = OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getCFDsPlansTableDataByCFDsAllPlanIdAggr.listOut, new PartnersHubModel.RL_67489198c39fbcf1ac201784c943f33a(), function(source, target) {
                                                target = source.cFDsPlansTableDataAttr;
                                                return target;
                                            });
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

                return this.__onAfterFetchAllPlan$Action;
            }
            set _onAfterFetchAllPlan$Action(value) {
                this.__onAfterFetchAllPlan$Action = value;
            }


            onParametersChanged$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnParametersChanged__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnParametersChanged");
                        span.setAttribute("outsystems.function.key", "1bb88eaa-297f-452b-a5ee-2b9f8fe07d36");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            onAfterFetchSubPlan$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnAfterFetchSubPlan__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnAfterFetchSubPlan");
                        span.setAttribute("outsystems.function.key", "8952edfb-4d36-47c1-922a-05257e467452");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onAfterFetchSubPlan$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onAfterFetchAllPlan$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnAfterFetchAllPlan__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnAfterFetchAllPlan");
                        span.setAttribute("outsystems.function.key", "c84c0f9e-798b-492a-a1e6-18415501bed6");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onAfterFetchAllPlan$Action, callContext);
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
                    this._onParametersChangedEventHandler = function(callContext) {
                        var controller = this.controller;
                        var model = this.model;
                        var idService = this.idService;

                        return controller.onParametersChanged$Action(callContext);

                    };
                }

                return this._onParametersChangedEventHandler;
            }
            set onParametersChangedEventHandler(value) {
                this._onParametersChangedEventHandler = value;
            }

            get handleError() {
                if (!(this.hasOwnProperty("_handleError"))) {
                    this._handleError = function(ex) {
                        return controller.handleError(ex);
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


define("PartnersHub.CFDs.PlanDetailsTable.mvc$translationsResources.ar-001", [], function() {
    return {
        "AiMBRsM2QEmookT5xpWXPg#Value": "الأصل"
    };
});

define("PartnersHub.CFDs.PlanDetailsTable.mvc$translationsResources.de-DE", [], function() {
    return {
        "AiMBRsM2QEmookT5xpWXPg#Value": "Art der Option"
    };
});

define("PartnersHub.CFDs.PlanDetailsTable.mvc$translationsResources.es-ES", [], function() {
    return {
        "AiMBRsM2QEmookT5xpWXPg#Value": "Tipo de Opción"
    };
});

define("PartnersHub.CFDs.PlanDetailsTable.mvc$translationsResources.fr-FR", [], function() {
    return {
        "AiMBRsM2QEmookT5xpWXPg#Value": "Type d\'Option"
    };
});

define("PartnersHub.CFDs.PlanDetailsTable.mvc$translationsResources.it-IT", [], function() {
    return {
        "AiMBRsM2QEmookT5xpWXPg#Value": "Tipo di Opzione"
    };
});

define("PartnersHub.CFDs.PlanDetailsTable.mvc$translationsResources.pl-PL", [], function() {
    return {
        "AiMBRsM2QEmookT5xpWXPg#Value": "Rodzaj Opcji"
    };
});

define("PartnersHub.CFDs.PlanDetailsTable.mvc$translationsResources.pt-PT", [], function() {
    return {
        "AiMBRsM2QEmookT5xpWXPg#Value": "Tipo de Opção"
    };
});

define("PartnersHub.CFDs.PlanDetailsTable.mvc$translationsResources.ru-RU", [], function() {
    return {
        "AiMBRsM2QEmookT5xpWXPg#Value": "Тип Опции"
    };
});

define("PartnersHub.CFDs.PlanDetailsTable.mvc$translationsResources", ["exports", "PartnersHub.CFDs.PlanDetailsTable.mvc$translationsResources.ar-001", "PartnersHub.CFDs.PlanDetailsTable.mvc$translationsResources.de-DE", "PartnersHub.CFDs.PlanDetailsTable.mvc$translationsResources.es-ES", "PartnersHub.CFDs.PlanDetailsTable.mvc$translationsResources.fr-FR", "PartnersHub.CFDs.PlanDetailsTable.mvc$translationsResources.it-IT", "PartnersHub.CFDs.PlanDetailsTable.mvc$translationsResources.pl-PL", "PartnersHub.CFDs.PlanDetailsTable.mvc$translationsResources.pt-PT", "PartnersHub.CFDs.PlanDetailsTable.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_CFDs_PlanDetailsTable_mvc_translationsResources_ar001, PartnersHub_CFDs_PlanDetailsTable_mvc_translationsResources_deDE, PartnersHub_CFDs_PlanDetailsTable_mvc_translationsResources_esES, PartnersHub_CFDs_PlanDetailsTable_mvc_translationsResources_frFR, PartnersHub_CFDs_PlanDetailsTable_mvc_translationsResources_itIT, PartnersHub_CFDs_PlanDetailsTable_mvc_translationsResources_plPL, PartnersHub_CFDs_PlanDetailsTable_mvc_translationsResources_ptPT, PartnersHub_CFDs_PlanDetailsTable_mvc_translationsResources_ruRU) {
    return {
        "ar-001": {
            "translations": PartnersHub_CFDs_PlanDetailsTable_mvc_translationsResources_ar001,
            "isRTL": true
        },
        "de-DE": {
            "translations": PartnersHub_CFDs_PlanDetailsTable_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_CFDs_PlanDetailsTable_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_CFDs_PlanDetailsTable_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_CFDs_PlanDetailsTable_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_CFDs_PlanDetailsTable_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_CFDs_PlanDetailsTable_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_CFDs_PlanDetailsTable_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});