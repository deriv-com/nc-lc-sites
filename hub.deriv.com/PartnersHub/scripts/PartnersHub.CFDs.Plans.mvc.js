define("PartnersHub.CFDs.Plans.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.Layouts.LayoutDashboard.mvc$model", "PartnersHub.Common.TitleBlock.mvc$model", "PartnersHub.Common.SkeletonLoader.mvc$model", "PartnersHub.CFDs.PlanDetailsTable.mvc$model", "PartnersHub.controller$IFrameLogout", "PartnersHub.controller$HandleRedirectOnLogin", "PartnersHub.model$RC_553aeb2ab8137242084047bfd76bf592", "PartnersHub.model$RL_3fe2b81fb8157cd749809684cb1997db"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHub_Layouts_LayoutDashboard_mvcModel, PartnersHub_Common_TitleBlock_mvcModel, PartnersHub_Common_SkeletonLoader_mvcModel, PartnersHub_CFDs_PlanDetailsTable_mvcModel) {
    var OS = OSRuntimeCore; {
        class GetCFDsAllSubPlansByCFDsAllPlanIdAggrRecInner extends
        OS.Model.AggregateRecord {
            static attributesToDeclare() {
                return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new GetCFDsAllSubPlansByCFDsAllPlanIdAggrRec(new GetCFDsAllSubPlansByCFDsAllPlanIdAggrRec.RecordClass({
                    RecordListType: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        GetCFDsAllSubPlansByCFDsAllPlanIdAggrRecInner.RecordListType = PartnersHubModel.RL_3fe2b81fb8157cd749809684cb1997db;
        var GetCFDsAllSubPlansByCFDsAllPlanIdAggrRec = GetCFDsAllSubPlansByCFDsAllPlanIdAggrRecInner;
        GetCFDsAllSubPlansByCFDsAllPlanIdAggrRec.init();
    }


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, false),
                    this.attr("Title", "titleIn", "Title", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("PlanId", "planIdIn", "PlanId", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, false),
                    this.attr("_planIdInDataFetchStatus", "_planIdInDataFetchStatus", "_planIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("GetCFDsAllSubPlansByCFDsAllPlanId", "getCFDsAllSubPlansByCFDsAllPlanIdAggr", "GetCFDsAllSubPlansByCFDsAllPlanId", true, true, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new GetCFDsAllSubPlansByCFDsAllPlanIdAggrRec());
                    }, true, GetCFDsAllSubPlansByCFDsAllPlanIdAggrRec)
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
                Model._hasValidationWidgetsValue = (((PartnersHub_Layouts_LayoutDashboard_mvcModel.hasValidationWidgets || PartnersHub_Common_TitleBlock_mvcModel.hasValidationWidgets) || PartnersHub_Common_SkeletonLoader_mvcModel.hasValidationWidgets) || PartnersHub_CFDs_PlanDetailsTable_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {
            if ("Title" in inputs) {
                this.variables.titleIn = OS.DataConversion.ServerDataConverter.from(inputs.Title, OS.DataTypes.DataTypes.Text);
            }

            if ("PlanId" in inputs) {
                this.variables.planIdIn = OS.DataConversion.ServerDataConverter.from(inputs.PlanId, OS.DataTypes.DataTypes.Integer);
            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.CFDs.Plans.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.CFDs.Plans.mvc$model", "PartnersHub.CFDs.Plans.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Layouts.LayoutDashboard.mvc$view", "@outsystems/runtime-widgets-js", "PartnersHub.Common.TitleBlock.mvc$view", "PartnersHub.Common.SkeletonLoader.mvc$view", "PartnersHub.CFDs.PlanDetailsTable.mvc$view", "PartnersHub.controller$IFrameLogout", "PartnersHub.controller$HandleRedirectOnLogin", "PartnersHub.model$RC_553aeb2ab8137242084047bfd76bf592", "PartnersHub.model$RL_3fe2b81fb8157cd749809684cb1997db"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_CFDs_Plans_mvc_model, PartnersHub_CFDs_Plans_mvc_controller, PartnersHubClientVariables, PartnersHub_Layouts_LayoutDashboard_mvc_view, OSWidgets, PartnersHub_Common_TitleBlock_mvc_view, PartnersHub_Common_SkeletonLoader_mvc_view, PartnersHub_CFDs_PlanDetailsTable_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "CFDs.Plans";
        }

        static getAttributes() {
            return {
                codeFunction: "Plans",
                functionKey: "1608bde4-be09-4000-9bb7-3da3bae7fc7c",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.CFDs.Plans.css", "css/PartnersHub.PHubTest.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [PartnersHub_Layouts_LayoutDashboard_mvc_view, PartnersHub_Common_TitleBlock_mvc_view, PartnersHub_Common_SkeletonLoader_mvc_view, PartnersHub_CFDs_PlanDetailsTable_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_CFDs_Plans_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_CFDs_Plans_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("5L0IFgm+AECbtz2juuf8fA#Title", "Plans");
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
                            extendedProperties: {
                                className: "partners-hub-dashboard"
                            },
                            gridProperties: {
                                classes: "OSInline"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(PartnersHub_Common_TitleBlock_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                ShowPreviousButton: true,
                                Title: model.variables.titleIn
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                closeButtonAction$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.onClickCloseButton$Action(controller.callContext(eventHandlerContext));

                                    ;
                                },
                                backButtonAction$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.onClickBackButton$Action(controller.callContext(eventHandlerContext));

                                    ;
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
                            _dependencies: []
                        }), React.createElement(PartnersHub_Common_SkeletonLoader_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                IsLoading: model.variables.isLoadingVar,
                                ClassName: "gap"
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
                                content: new PlaceholderContent(function() {
                                    return [$if((model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut.length > 2), false, this, function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "display: flex; flex-direction: column; gap: 16px;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "4"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: center;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "5"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Expression, {
                                            style: "to-description",
                                            value: (("Earn when your clients trade on a " + model.variables.titleIn) + " account."),
                                            _idProps: {
                                                service: idService,
                                                uuid: "6"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))), React.createElement(OSWidgets.List, {
                                            animateItems: false,
                                            extendedProperties: {
                                                "disable-virtualization": "True"
                                            },
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            mode: /*Default*/ 0,
                                            source: model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut,
                                            style: model.getCachedValue(idService.getId("8YmvIp3dGUua+oSKT8ESwA.Style"), function() {
                                                return (("action-box-container" + " ") + (((model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut.length <= 4)) ? ("two-column-container") : ("three-column-container")));
                                            }, function() {
                                                return model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut.length;
                                            }),
                                            tag: "div",
                                            _idProps: {
                                                service: idService,
                                                uuid: "7"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.dataFetchStatusAttr),
                                            style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.dataFetchStatusAttr),
                                            placeholders: {
                                                content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                    return [React.createElement(OSWidgets.Container, {
                                                        align: /*Default*/ 0,
                                                        animate: false,
                                                        extendedEvents: {
                                                            onClick: function() {
                                                                var eventHandlerContext = callContext.clone();
                                                                controller.onClickActionBox$Action(model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut.getCurrent(callContext.iterationContext).cFDsAllSubPlansAttr.idAttr, model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut.getCurrent(callContext.iterationContext).commissionTypeAttr.typeAttr, model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut.getCurrent(callContext.iterationContext).cFDsAllSubPlansAttr.nameAttr, controller.callContext(eventHandlerContext));

                                                                ;
                                                            }
                                                        },
                                                        style: "action-box",
                                                        visible: true,
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "8"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        _dependencies: [asPrimitiveValue(model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut.getCurrent(callContext.iterationContext).cFDsAllSubPlansAttr.nameAttr)]
                                                    }, React.createElement(OSWidgets.Expression, {
                                                        value: model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut.getCurrent(callContext.iterationContext).cFDsAllSubPlansAttr.nameAttr,
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "9"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.dataFetchStatusAttr)
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
                                                            uuid: "10"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    }))];
                                                }, callContext, idService, "1")
                                            },
                                            _dependencies: [asPrimitiveValue(model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.dataFetchStatusAttr)]
                                        })];
                                    }, function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "11"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Expression, {
                                            style: "to-description",
                                            value: "All commission rates are quoted in USD, per round trade.",
                                            _idProps: {
                                                service: idService,
                                                uuid: "12"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        })), React.createElement(OSWidgets.List, {
                                            animateItems: true,
                                            extendedProperties: {
                                                "disable-virtualization": "True",
                                                style: "display: flex; flex-direction: column; gap: 16px;"
                                            },
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            mode: /*Default*/ 0,
                                            source: model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut,
                                            style: "list list-group",
                                            tag: "div",
                                            _idProps: {
                                                service: idService,
                                                uuid: "13"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.dataFetchStatusAttr),
                                            placeholders: {
                                                content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                    return [React.createElement(OSWidgets.Container, {
                                                        align: /*Default*/ 0,
                                                        animate: false,
                                                        extendedProperties: {
                                                            style: "display: flex; flex-direction: column; gap: 16px;"
                                                        },
                                                        visible: true,
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "14"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        _dependencies: [asPrimitiveValue(model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut.getCurrent(callContext.iterationContext).commissionTypeAttr.typeAttr), asPrimitiveValue(model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut.getCurrent(callContext.iterationContext).cFDsAllSubPlansAttr.idAttr), asPrimitiveValue(model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut.getCurrent(callContext.iterationContext).cFDsAllSubPlansAttr.nameAttr)]
                                                    }, React.createElement(OSWidgets.Expression, {
                                                        style: "sub-title",
                                                        value: model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut.getCurrent(callContext.iterationContext).cFDsAllSubPlansAttr.nameAttr,
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "15"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.dataFetchStatusAttr)
                                                    }), React.createElement(PartnersHub_CFDs_PlanDetailsTable_mvc_view, {
                                                        getOwnerSpan: function() {
                                                            return _this.getChildSpan("render");
                                                        },
                                                        getOwnerDisposeSpan: function() {
                                                            return _this.getChildSpan("destroy");
                                                        },
                                                        inputs: {
                                                            PlanId: model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut.getCurrent(callContext.iterationContext).cFDsAllSubPlansAttr.idAttr,
                                                            _planIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.dataFetchStatusAttr),
                                                            CommissionType: model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut.getCurrent(callContext.iterationContext).commissionTypeAttr.typeAttr,
                                                            _commissionTypeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.dataFetchStatusAttr),
                                                            IsSubPlan: true
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
                                                            uuid: "16",
                                                            alias: "4"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        _dependencies: []
                                                    }))];
                                                }, callContext, idService, "2")
                                            },
                                            _dependencies: [asPrimitiveValue(model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.dataFetchStatusAttr)]
                                        })];
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.titleIn), asPrimitiveValue(model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut)]
                        }))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.titleIn)]
            }));
        }
    }

    return View;
});
define("PartnersHub.CFDs.Plans.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.CFDs.Plans.mvc$translationsResources", "PartnersHub.CFDs.controller", "PartnersHub.controller$IFrameLogout", "PartnersHub.controller$HandleRedirectOnLogin", "PartnersHub.model$RC_553aeb2ab8137242084047bfd76bf592", "PartnersHub.model$RL_3fe2b81fb8157cd749809684cb1997db"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_CFDs_Plans_mvc_TranslationsResources, PartnersHub_CFDsController) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_CFDs_Plans_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {
                    getCFDsAllSubPlansByCFDsAllPlanId$AggrRefresh: 0
                };
                this.dataFetchDependentsGraph = {
                    getCFDsAllSubPlansByCFDsAllPlanId$AggrRefresh: []
                };
                this.shouldSendClientVarsToDataSources = false;
            }

            // Server Actions - Methods

            // Aggregates and Data Actions
            get getCFDsAllSubPlansByCFDsAllPlanId$AggrRefresh() {
                if (!(this.hasOwnProperty("_getCFDsAllSubPlansByCFDsAllPlanId$AggrRefresh"))) {
                    this._getCFDsAllSubPlansByCFDsAllPlanId$AggrRefresh = function() {
                        var innerBody = function(maxRecords, startIndex, callContext) {
                            var model = this.model;
                            var controller = this.controller;
                            var callContext = controller.callContext(callContext);
                            return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetCFDsAllSubPlansByCFDsAllPlanId", "screenservices/PartnersHub/CFDs/Plans/ScreenDataSetGetCFDsAllSubPlansByCFDsAllPlanId", "Aepkhmoz7BEtmX8wsLy8Ew", maxRecords, startIndex, function(b) {
                                model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.constructor));
                            }, undefined, undefined, undefined, callContext, undefined, true).then(function() {
                                controller._onAfterFetchTable$Action(controller.callContext(callContext));
                            });
                        }.bind(this);
                        return OS.Logger.startActiveSpan("GetCFDsAllSubPlansByCFDsAllPlanId", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetCFDsAllSubPlansByCFDsAllPlanId");
                                span.setAttribute("outsystems.function.key", "e77dd589-9547-4032-97e7-c1ae2f588ee0");
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

                return this._getCFDsAllSubPlansByCFDsAllPlanId$AggrRefresh;
            }
            set getCFDsAllSubPlansByCFDsAllPlanId$AggrRefresh(value) {
                this._getCFDsAllSubPlansByCFDsAllPlanId$AggrRefresh = value;
            }


            get dataFetchActionNames() {
                if (!(this.hasOwnProperty("_dataFetchActionNames"))) {
                    this._dataFetchActionNames = ["getCFDsAllSubPlansByCFDsAllPlanId$AggrRefresh"];
                }

                return this._dataFetchActionNames;
            }
            set dataFetchActionNames(value) {
                this._dataFetchActionNames = value;
            }

            // Client Actions - Methods
            get _onAfterFetchTable$Action() {
                if (!(this.hasOwnProperty("__onAfterFetchTable$Action"))) {
                    this.__onAfterFetchTable$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnAfterFetchTable", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnAfterFetchTable");
                                span.setAttribute("outsystems.function.key", "3bab3de3-6567-499a-95a0-88aaf72aa3b7");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnAfterFetchTable");
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

                return this.__onAfterFetchTable$Action;
            }
            set _onAfterFetchTable$Action(value) {
                this.__onAfterFetchTable$Action = value;
            }

            get _onClickBackButton$Action() {
                if (!(this.hasOwnProperty("__onClickBackButton$Action"))) {
                    this.__onClickBackButton$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickBackButton", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickBackButton");
                                span.setAttribute("outsystems.function.key", "5dfa4f4c-d173-4984-9650-fb3c254207b5");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickBackButton");
                                callContext = controller.callContext(callContext);
                                // Destination: /PartnersHub/CFDs
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "CFDs", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickBackButton$Action;
            }
            set _onClickBackButton$Action(value) {
                this.__onClickBackButton$Action = value;
            }

            get _onClickCloseButton$Action() {
                if (!(this.hasOwnProperty("__onClickCloseButton$Action"))) {
                    this.__onClickCloseButton$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickCloseButton", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickCloseButton");
                                span.setAttribute("outsystems.function.key", "7f511a58-0e2c-4623-bcd4-a453203f17af");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickCloseButton");
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

                return this.__onClickCloseButton$Action;
            }
            set _onClickCloseButton$Action(value) {
                this.__onClickCloseButton$Action = value;
            }

            get _onClickActionBox$Action() {
                if (!(this.hasOwnProperty("__onClickActionBox$Action"))) {
                    this.__onClickActionBox$Action = function(subPlanIdIn, commissionTypeIn, planDetailsTitleIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickActionBox", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickActionBox");
                                span.setAttribute("outsystems.function.key", "8a42bdcf-a423-40e7-852f-5dae4d8d8d2e");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickActionBox");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.CFDs.Plans.OnClickActionBox$vars"))());
                                vars.value.subPlanIdInLocal = subPlanIdIn;
                                vars.value.commissionTypeInLocal = commissionTypeIn;
                                vars.value.planDetailsTitleInLocal = planDetailsTitleIn;
                                // Destination: /PartnersHub/PlanDetails
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "PlanDetails", {
                                    Note: OS.DataConversion.ServerDataConverter.to(model.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut.getCurrent(callContext.iterationContext).cFDsAllSubPlansAttr.noteAttr, OS.DataTypes.DataTypes.Text),
                                    IsSubPlan: OS.DataConversion.ServerDataConverter.to(true, OS.DataTypes.DataTypes.Boolean),
                                    Title: OS.DataConversion.ServerDataConverter.to(vars.value.planDetailsTitleInLocal, OS.DataTypes.DataTypes.Text),
                                    CommissionType: OS.DataConversion.ServerDataConverter.to(vars.value.commissionTypeInLocal, OS.DataTypes.DataTypes.Text),
                                    PlanId: OS.DataConversion.ServerDataConverter.to(vars.value.subPlanIdInLocal, OS.DataTypes.DataTypes.Integer)
                                }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
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

            get _onReady$Action() {
                if (!(this.hasOwnProperty("__onReady$Action"))) {
                    this.__onReady$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnReady", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnReady");
                                span.setAttribute("outsystems.function.key", "a0568cd3-d0a7-45b7-92ac-ba1ae03e4d15");
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


            onAfterFetchTable$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnAfterFetchTable__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnAfterFetchTable");
                        span.setAttribute("outsystems.function.key", "3bab3de3-6567-499a-95a0-88aaf72aa3b7");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onAfterFetchTable$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onClickBackButton$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickBackButton__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickBackButton");
                        span.setAttribute("outsystems.function.key", "5dfa4f4c-d173-4984-9650-fb3c254207b5");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickBackButton$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onClickCloseButton$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickCloseButton__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickCloseButton");
                        span.setAttribute("outsystems.function.key", "7f511a58-0e2c-4623-bcd4-a453203f17af");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickCloseButton$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onClickActionBox$Action(subPlanIdIn, commissionTypeIn, planDetailsTitleIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickActionBox__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickActionBox");
                        span.setAttribute("outsystems.function.key", "8a42bdcf-a423-40e7-852f-5dae4d8d8d2e");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickActionBox$Action, callContext, subPlanIdIn, commissionTypeIn, planDetailsTitleIn);
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
                        span.setAttribute("outsystems.function.key", "a0568cd3-d0a7-45b7-92ac-ba1ae03e4d15");
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
                        return PartnersHub_CFDsController.default.handleError(ex, this.callContext());
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
        Controller.registerVariableGroupType("PartnersHub.CFDs.Plans.OnClickActionBox$vars", [{
            name: "SubPlanId",
            attrName: "subPlanIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }, {
            name: "CommissionType",
            attrName: "commissionTypeInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "PlanDetailsTitle",
            attrName: "planDetailsTitleInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});


define("PartnersHub.CFDs.Plans.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});