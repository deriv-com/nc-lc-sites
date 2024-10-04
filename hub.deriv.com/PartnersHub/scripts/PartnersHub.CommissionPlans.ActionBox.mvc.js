define("PartnersHub.CommissionPlans.ActionBox.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.Common.SkeletonLoader.mvc$model", "PartnersHub.model$EN_dcf7678da69441705db7a0b29acff19dEntityRecord", "PartnersHub.model$RC_c9b451e33f0b1f65b4c84c971f12b1d0", "PartnersHub.model$RL_d33f26f168193562dc76ee2abb116b7d"], function(OSRuntimeCore, PartnersHubModel, PartnersHub_Common_SkeletonLoader_mvcModel) {
    var OS = OSRuntimeCore; {
        class GetCFDsAllPlansByTabIDAggrRecInner extends
        OS.Model.AggregateRecord {
            static attributesToDeclare() {
                return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new GetCFDsAllPlansByTabIDAggrRec(new GetCFDsAllPlansByTabIDAggrRec.RecordClass({
                    RecordListType: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        GetCFDsAllPlansByTabIDAggrRecInner.RecordListType = PartnersHubModel.RL_d33f26f168193562dc76ee2abb116b7d;
        var GetCFDsAllPlansByTabIDAggrRec = GetCFDsAllPlansByTabIDAggrRecInner;
        GetCFDsAllPlansByTabIDAggrRec.init();
    }


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, false),
                    this.attr("PlanId", "planIdIn", "PlanId", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, false),
                    this.attr("_planIdInDataFetchStatus", "_planIdInDataFetchStatus", "_planIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("GetCFDsAllPlansByTabID", "getCFDsAllPlansByTabIDAggr", "GetCFDsAllPlansByTabID", true, true, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new GetCFDsAllPlansByTabIDAggrRec());
                    }, true, GetCFDsAllPlansByTabIDAggrRec)
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

define("PartnersHub.CommissionPlans.ActionBox.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.CommissionPlans.ActionBox.mvc$model", "PartnersHub.CommissionPlans.ActionBox.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Common.SkeletonLoader.mvc$view", "@outsystems/runtime-widgets-js", "PartnersHub.model$EN_dcf7678da69441705db7a0b29acff19dEntityRecord", "PartnersHub.model$RC_c9b451e33f0b1f65b4c84c971f12b1d0", "PartnersHub.model$RL_d33f26f168193562dc76ee2abb116b7d"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_CommissionPlans_ActionBox_mvc_model, PartnersHub_CommissionPlans_ActionBox_mvc_controller, PartnersHubClientVariables, PartnersHub_Common_SkeletonLoader_mvc_view, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "CommissionPlans.ActionBox";
        }

        static getAttributes() {
            return {
                codeFunction: "ActionBox",
                functionKey: "88f652fd-95fb-453a-9def-ea33366203da",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.CommissionPlans.ActionBox.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [PartnersHub_Common_SkeletonLoader_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_CommissionPlans_ActionBox_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_CommissionPlans_ActionBox_mvc_controller;
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
                        return [React.createElement(OSWidgets.List, {
                            animateItems: true,
                            extendedProperties: {
                                "disable-virtualization": "True"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mode: /*Default*/ 0,
                            source: model.variables.getCFDsAllPlansByTabIDAggr.listOut,
                            style: model.getCachedValue(idService.getId("xsTaDLEKWkmI+RtY3oLfQg.Style"), function() {
                                return (("action-box-container" + " ") + (((model.variables.getCFDsAllPlansByTabIDAggr.listOut.length <= 4)) ? ("two-column-container") : ("three-column-container")));
                            }, function() {
                                return model.variables.getCFDsAllPlansByTabIDAggr.listOut.length;
                            }),
                            tag: "div",
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCFDsAllPlansByTabIDAggr.dataFetchStatusAttr),
                            style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCFDsAllPlansByTabIDAggr.dataFetchStatusAttr),
                            placeholders: {
                                content: new IteratorPlaceholderContent(function(idService, callContext) {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedEvents: {
                                            onClick: function() {
                                                var eventHandlerContext = callContext.clone();
                                                controller.onClickActionBox$Action(model.variables.getCFDsAllPlansByTabIDAggr.listOut.getCurrent(callContext.iterationContext).cFDsAllPlansAttr, controller.callContext(eventHandlerContext));

                                                ;
                                            }
                                        },
                                        style: "action-box",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "2"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: [asPrimitiveValue(model.variables.getCFDsAllPlansByTabIDAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getCFDsAllPlansByTabIDAggr.listOut.getCurrent(callContext.iterationContext).cFDsAllPlansAttr.labelAttr)]
                                    }, React.createElement(OSWidgets.Expression, {
                                        value: model.variables.getCFDsAllPlansByTabIDAggr.listOut.getCurrent(callContext.iterationContext).cFDsAllPlansAttr.labelAttr,
                                        _idProps: {
                                            service: idService,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCFDsAllPlansByTabIDAggr.dataFetchStatusAttr)
                                    }), React.createElement(OSWidgets.Icon, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        icon: "angle-right",
                                        iconSize: /*Twotimes*/ 1,
                                        style: "icon",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))];
                                }, callContext, idService, "1")
                            },
                            _dependencies: [asPrimitiveValue(model.variables.getCFDsAllPlansByTabIDAggr.dataFetchStatusAttr)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.getCFDsAllPlansByTabIDAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getCFDsAllPlansByTabIDAggr.listOut)]
            }));
        }
    }

    return View;
});
define("PartnersHub.CommissionPlans.ActionBox.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.CommissionPlans.ActionBox.mvc$translationsResources", "PartnersHub.model$EN_dcf7678da69441705db7a0b29acff19dEntityRecord", "PartnersHub.model$RC_c9b451e33f0b1f65b4c84c971f12b1d0", "PartnersHub.model$RL_d33f26f168193562dc76ee2abb116b7d"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_CommissionPlans_ActionBox_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_CommissionPlans_ActionBox_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {
                    getCFDsAllPlansByTabID$AggrRefresh: 0
                };
                this.dataFetchDependentsGraph = {
                    getCFDsAllPlansByTabID$AggrRefresh: []
                };
                this.shouldSendClientVarsToDataSources = false;
            }

            // Server Actions - Methods

            // Aggregates and Data Actions
            get getCFDsAllPlansByTabID$AggrRefresh() {
                if (!(this.hasOwnProperty("_getCFDsAllPlansByTabID$AggrRefresh"))) {
                    this._getCFDsAllPlansByTabID$AggrRefresh = function() {
                        var innerBody = function(maxRecords, startIndex, callContext) {
                            var model = this.model;
                            var controller = this.controller;
                            var callContext = controller.callContext(callContext);
                            return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetCFDsAllPlansByTabID", "screenservices/PartnersHub/CommissionPlans/ActionBox/ScreenDataSetGetCFDsAllPlansByTabID", "vodODdryIVet8me3wa5N_A", maxRecords, startIndex, function(b) {
                                model.variables.getCFDsAllPlansByTabIDAggr.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.getCFDsAllPlansByTabIDAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getCFDsAllPlansByTabIDAggr.constructor));
                            }, undefined, undefined, undefined, callContext, undefined, true).then(function() {
                                controller._onAfterFetchPlans$Action(controller.callContext(callContext));
                            });
                        }.bind(this);
                        return OS.Logger.startActiveSpan("GetCFDsAllPlansByTabID", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetCFDsAllPlansByTabID");
                                span.setAttribute("outsystems.function.key", "775ef1c1-5809-4945-b63f-e8a6b510dd74");
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

                return this._getCFDsAllPlansByTabID$AggrRefresh;
            }
            set getCFDsAllPlansByTabID$AggrRefresh(value) {
                this._getCFDsAllPlansByTabID$AggrRefresh = value;
            }


            get dataFetchActionNames() {
                if (!(this.hasOwnProperty("_dataFetchActionNames"))) {
                    this._dataFetchActionNames = ["getCFDsAllPlansByTabID$AggrRefresh"];
                }

                return this._dataFetchActionNames;
            }
            set dataFetchActionNames(value) {
                this._dataFetchActionNames = value;
            }

            // Client Actions - Methods
            get _onClickActionBox$Action() {
                if (!(this.hasOwnProperty("__onClickActionBox$Action"))) {
                    this.__onClickActionBox$Action = function(plansDataIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickActionBox", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickActionBox");
                                span.setAttribute("outsystems.function.key", "28951d0e-d68a-4ff5-9876-bc293d81fbde");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickActionBox");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.CommissionPlans.ActionBox.OnClickActionBox$vars"))());
                                vars.value.plansDataInLocal = plansDataIn.clone();
                                if (((model.variables.getCFDsAllPlansByTabIDAggr.listOut.getCurrent(callContext.iterationContext).cFDsAllPlansAttr.commissionTypesIdAttr === OS.BuiltinFunctions.nullIdentifier()))) {
                                    // Destination: /PartnersHub/Plans
                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "Plans/:Title/:PlanId", {
                                        PlanId: OS.DataConversion.ServerDataConverter.to(vars.value.plansDataInLocal.idAttr, OS.DataTypes.DataTypes.Integer),
                                        Title: OS.DataConversion.ServerDataConverter.to(vars.value.plansDataInLocal.labelAttr, OS.DataTypes.DataTypes.Text)
                                    }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                } else {
                                    // Destination: /PartnersHub/PlanDetails
                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "PlanDetails", {
                                        Note: OS.DataConversion.ServerDataConverter.to(vars.value.plansDataInLocal.noteAttr, OS.DataTypes.DataTypes.Text),
                                        PlanId: OS.DataConversion.ServerDataConverter.to(vars.value.plansDataInLocal.idAttr, OS.DataTypes.DataTypes.Integer),
                                        Title: OS.DataConversion.ServerDataConverter.to(vars.value.plansDataInLocal.labelAttr, OS.DataTypes.DataTypes.Text),
                                        IsSubPlan: OS.DataConversion.ServerDataConverter.to(false, OS.DataTypes.DataTypes.Boolean),
                                        CommissionType: OS.DataConversion.ServerDataConverter.to(model.variables.getCFDsAllPlansByTabIDAggr.listOut.getCurrent(callContext.iterationContext).commissionTypeAttr.typeAttr, OS.DataTypes.DataTypes.Text)
                                    }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickActionBox$Action;
            }
            set _onClickActionBox$Action(value) {
                this.__onClickActionBox$Action = value;
            }

            get _onAfterFetchPlans$Action() {
                if (!(this.hasOwnProperty("__onAfterFetchPlans$Action"))) {
                    this.__onAfterFetchPlans$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnAfterFetchPlans", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnAfterFetchPlans");
                                span.setAttribute("outsystems.function.key", "5802910c-ca8c-49da-8ff1-210c987fcb5a");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnAfterFetchPlans");
                                callContext = controller.callContext(callContext);
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

                return this.__onAfterFetchPlans$Action;
            }
            set _onAfterFetchPlans$Action(value) {
                this.__onAfterFetchPlans$Action = value;
            }

            get _onParametersChanged$Action() {
                if (!(this.hasOwnProperty("__onParametersChanged$Action"))) {
                    this.__onParametersChanged$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnParametersChanged", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnParametersChanged");
                                span.setAttribute("outsystems.function.key", "8add6b6c-55b9-422d-a894-bf3c479fd73a");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnParametersChanged");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Refresh Query: GetCFDsAllPlansByTabID
                                    var result = controller.getCFDsAllPlansByTabID$AggrRefresh(50, 0, callContext);
                                    model.flush();
                                    return result;
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


            onClickActionBox$Action(plansDataIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickActionBox__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickActionBox");
                        span.setAttribute("outsystems.function.key", "28951d0e-d68a-4ff5-9876-bc293d81fbde");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickActionBox$Action, callContext, plansDataIn);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onAfterFetchPlans$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnAfterFetchPlans__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnAfterFetchPlans");
                        span.setAttribute("outsystems.function.key", "5802910c-ca8c-49da-8ff1-210c987fcb5a");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onAfterFetchPlans$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onParametersChanged$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnParametersChanged__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnParametersChanged");
                        span.setAttribute("outsystems.function.key", "8add6b6c-55b9-422d-a894-bf3c479fd73a");
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
        Controller.registerVariableGroupType("PartnersHub.CommissionPlans.ActionBox.OnClickActionBox$vars", [{
            name: "PlansData",
            attrName: "plansDataInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new PartnersHubModel.EN_dcf7678da69441705db7a0b29acff19dEntityRecord();
            },
            complexType: PartnersHubModel.EN_dcf7678da69441705db7a0b29acff19dEntityRecord
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});


define("PartnersHub.CommissionPlans.ActionBox.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});