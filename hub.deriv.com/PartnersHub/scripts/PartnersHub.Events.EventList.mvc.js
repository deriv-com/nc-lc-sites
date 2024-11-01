define("PartnersHub.Events.EventList.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.Common.SkeletonLoader.mvc$model", "OutSystemsUI.Utilities.InlineSVG.mvc$model", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "PartnersHub.model$RC_74fba7fb18697339da88244fa3fc5435", "PartnersHub.model$RL_c442eae242b2b02d93575027f6e75422"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHub_Common_SkeletonLoader_mvcModel, OutSystemsUI_Utilities_InlineSVG_mvcModel) {
    var OS = OSRuntimeCore; {
        class GetEventsAggrRecInner extends
        OS.Model.AggregateRecord {
            static attributesToDeclare() {
                return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new GetEventsAggrRec(new GetEventsAggrRec.RecordClass({
                    RecordListType: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        GetEventsAggrRecInner.RecordListType = PartnersHubModel.RL_c442eae242b2b02d93575027f6e75422;
        var GetEventsAggrRec = GetEventsAggrRecInner;
        GetEventsAggrRec.init();
    }


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, false),
                    this.attr("MaxEvents", "maxEventsIn", "MaxEvents", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 3;
                    }, false),
                    this.attr("_maxEventsInDataFetchStatus", "_maxEventsInDataFetchStatus", "_maxEventsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("GetEvents", "getEventsAggr", "GetEvents", true, true, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new GetEventsAggrRec());
                    }, true, GetEventsAggrRec)
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
                Model._hasValidationWidgetsValue = (PartnersHub_Common_SkeletonLoader_mvcModel.hasValidationWidgets || OutSystemsUI_Utilities_InlineSVG_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {
            if ("MaxEvents" in inputs) {
                this.variables.maxEventsIn = inputs.MaxEvents;
                if ("_maxEventsInDataFetchStatus" in inputs) {
                    this.variables._maxEventsInDataFetchStatus = inputs._maxEventsInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Events.EventList.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Events.EventList.mvc$model", "PartnersHub.Events.EventList.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Common.SkeletonLoader.mvc$view", "@outsystems/runtime-widgets-js", "OutSystemsUI.Utilities.InlineSVG.mvc$view", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "PartnersHub.model$RC_74fba7fb18697339da88244fa3fc5435", "PartnersHub.model$RL_c442eae242b2b02d93575027f6e75422"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_Events_EventList_mvc_model, PartnersHub_Events_EventList_mvc_controller, PartnersHubClientVariables, PartnersHub_Common_SkeletonLoader_mvc_view, OSWidgets, OutSystemsUI_Utilities_InlineSVG_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Events.EventList";
        }

        static getAttributes() {
            return {
                codeFunction: "EventList",
                functionKey: "6e033614-d09f-4d02-bd9b-6a0d49e4cb7f",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Events.EventList.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [PartnersHub_Common_SkeletonLoader_mvc_view, OutSystemsUI_Utilities_InlineSVG_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Events_EventList_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Events_EventList_mvc_controller;
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
                        return [$if(model.variables.getEventsAggr.listOut.isEmpty, false, this, function() {
                            return [React.createElement(OSWidgets.Text, {
                                style: "ph-text",
                                text: ["There are no events scheduled at the moment."],
                                _idProps: {
                                    service: idService,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }, function() {
                            return [$if((model.variables.getEventsAggr.listOut.length > 1), false, this, function() {
                                return [React.createElement(OSWidgets.List, {
                                    animateItems: true,
                                    extendedProperties: {
                                        "disable-virtualization": "True"
                                    },
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mode: /*Default*/ 0,
                                    source: model.variables.getEventsAggr.listOut,
                                    style: model.getCachedValue(idService.getId("EventList.Style"), function() {
                                        return (("ph-event-list" + " ") + (((model.variables.getEventsAggr.listOut.length > 2)) ? ("ph-event-grid-three") : ("ph-event-grid-two")));
                                    }, function() {
                                        return model.variables.getEventsAggr.listOut.length;
                                    }),
                                    tag: "div",
                                    _idProps: {
                                        service: idService,
                                        name: "EventList"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventsAggr.dataFetchStatusAttr),
                                    style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventsAggr.dataFetchStatusAttr),
                                    placeholders: {
                                        content: new IteratorPlaceholderContent(function(idService, callContext) {
                                            return [React.createElement(OSWidgets.Container, {
                                                align: /*Default*/ 0,
                                                animate: false,
                                                extendedEvents: {
                                                    onClick: function() {
                                                        var eventHandlerContext = callContext.clone();
                                                        controller.onClickEvent$Action(controller.callContext(eventHandlerContext));

                                                        ;
                                                    }
                                                },
                                                style: "ph-event-card-container",
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "3"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider,
                                                _dependencies: [asPrimitiveValue(model.variables.getEventsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getEventsAggr.listOut.getCurrent(callContext.iterationContext).countryAttr.nameAttr), asPrimitiveValue(model.variables.getEventsAggr.listOut.getCurrent(callContext.iterationContext).countryAttr.timeZoneAttr), asPrimitiveValue(model.variables.getEventsAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.dateTimeAttr), asPrimitiveValue(model.variables.getEventsAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.titleAttr), asPrimitiveValue(model.variables.getEventsAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.bannerImageAttr)]
                                            }, React.createElement(OSWidgets.Image, {
                                                imageContent: model.variables.getEventsAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.bannerImageAttr,
                                                style: "ph-event-card-image",
                                                type: /*Binary*/ 2,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "4"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider,
                                                imageContent_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventsAggr.dataFetchStatusAttr)
                                            }), React.createElement(OSWidgets.Container, {
                                                align: /*Default*/ 0,
                                                animate: false,
                                                style: "ph-event-card-info padding-base",
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "5"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            }, React.createElement(OSWidgets.Container, {
                                                align: /*Default*/ 0,
                                                animate: false,
                                                style: "display-flex flex-direction-column",
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "6"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            }, React.createElement(OSWidgets.Expression, {
                                                extendedProperties: {
                                                    style: "color: var(--Neutral-Neutral-10, #101213); font-size: 14px; font-weight: 700; line-height: 22px; margin-bottom: 4px;"
                                                },
                                                value: model.getCachedValue(idService.getId("_C9emkrC2km3ZNgWMI6Uuw.Value"), function() {
                                                    return ((model.variables.getEventsAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.titleAttr + ", ") + (OS.BuiltinFunctions.year(OS.BuiltinFunctions.textToDateTime(model.variables.getEventsAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.dateTimeAttr))).toString());
                                                }, function() {
                                                    return model.variables.getEventsAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.titleAttr;
                                                }, function() {
                                                    return model.variables.getEventsAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.dateTimeAttr;
                                                }),
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "7"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider,
                                                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventsAggr.dataFetchStatusAttr)
                                            }), React.createElement(OSWidgets.Expression, {
                                                extendedProperties: {
                                                    style: "color: var(--Neutral-Neutral-10, #101213); font-size: 12px; font-weight: 400; line-height: 18px;"
                                                },
                                                gridProperties: {
                                                    marginLeft: "0"
                                                },
                                                value: model.getCachedValue(idService.getId("HwkZm2eup0q6igsG0Lv8xQ.Value"), function() {
                                                    return ((OS.BuiltinFunctions.formatDateTime(OS.BuiltinFunctions.textToDateTime(model.variables.getEventsAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.dateTimeAttr), "d MMM, HH:mm") + " ") + model.variables.getEventsAggr.listOut.getCurrent(callContext.iterationContext).countryAttr.timeZoneAttr);
                                                }, function() {
                                                    return model.variables.getEventsAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.dateTimeAttr;
                                                }, function() {
                                                    return model.variables.getEventsAggr.listOut.getCurrent(callContext.iterationContext).countryAttr.timeZoneAttr;
                                                }),
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "8"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider,
                                                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventsAggr.dataFetchStatusAttr)
                                            }), React.createElement(OSWidgets.Expression, {
                                                extendedProperties: {
                                                    style: "color: var(--Neutral-Neutral-10, #101213); font-size: 12px; font-weight: 400; line-height: 18px;"
                                                },
                                                gridProperties: {
                                                    marginLeft: "0"
                                                },
                                                value: model.variables.getEventsAggr.listOut.getCurrent(callContext.iterationContext).countryAttr.nameAttr,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "9"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider,
                                                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventsAggr.dataFetchStatusAttr)
                                            })), React.createElement(OutSystemsUI_Utilities_InlineSVG_mvc_view, {
                                                getOwnerSpan: function() {
                                                    return _this.getChildSpan("render");
                                                },
                                                getOwnerDisposeSpan: function() {
                                                    return _this.getChildSpan("destroy");
                                                },
                                                inputs: {
                                                    SVGCode: "<svg width=\"8\" height=\"14\" viewBox=\"0 0 8 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M7.34375 6.65625C7.53125 6.84375 7.53125 7.1875 7.34375 7.375L1.34375 13.375C1.15625 13.5625 0.8125 13.5625 0.625 13.375C0.4375 13.1875 0.4375 12.8438 0.625 12.6562L6.28125 7L0.625 1.375C0.4375 1.1875 0.4375 0.84375 0.625 0.65625C0.8125 0.46875 1.15625 0.46875 1.34375 0.65625L7.34375 6.65625Z\" fill=\"#101213\"/>\r\n</svg>"
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
                                                    uuid: "10",
                                                    alias: "2"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider,
                                                _dependencies: []
                                            })))];
                                        }, callContext, idService, "1")
                                    },
                                    _dependencies: [asPrimitiveValue(model.variables.getEventsAggr.dataFetchStatusAttr)]
                                })];
                            }, function() {
                                return [React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    extendedEvents: {
                                        onClick: function() {
                                            var eventHandlerContext = callContext.clone();
                                            controller.onClickEvent$Action(controller.callContext(eventHandlerContext));

                                            ;
                                        }
                                    },
                                    style: "ph-event-card-container ph-one-event-card-container",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "11"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Image, {
                                    imageContent: model.variables.getEventsAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.bannerImageAttr,
                                    style: "ph-event-card-image",
                                    type: /*Binary*/ 2,
                                    _idProps: {
                                        service: idService,
                                        uuid: "12"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    imageContent_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventsAggr.dataFetchStatusAttr)
                                }), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    style: "ph-event-card-info ph-one-event-card-info",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "13"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    extendedProperties: {
                                        style: "flex-grow: 1;"
                                    },
                                    style: "display-flex flex-direction-column",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "14"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Expression, {
                                    extendedProperties: {
                                        style: "color: var(--Neutral-Neutral-10, #101213); font-size: 14px; font-weight: 700; line-height: 22px; margin-bottom: 4px;"
                                    },
                                    value: model.getCachedValue(idService.getId("Bj40UThxkUeS9BGg1QFjyQ.Value"), function() {
                                        return ((model.variables.getEventsAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.titleAttr + ", ") + (OS.BuiltinFunctions.year(OS.BuiltinFunctions.textToDateTime(model.variables.getEventsAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.dateTimeAttr))).toString());
                                    }, function() {
                                        return model.variables.getEventsAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.titleAttr;
                                    }, function() {
                                        return model.variables.getEventsAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.dateTimeAttr;
                                    }),
                                    _idProps: {
                                        service: idService,
                                        uuid: "15"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventsAggr.dataFetchStatusAttr)
                                }), React.createElement(OSWidgets.Expression, {
                                    extendedProperties: {
                                        style: "color: var(--Neutral-Neutral-10, #101213); font-size: 12px; font-weight: 400; line-height: 18px;"
                                    },
                                    gridProperties: {
                                        marginLeft: "0"
                                    },
                                    value: model.getCachedValue(idService.getId("WsUiitjqnEO1_AGgEtXukw.Value"), function() {
                                        return ((OS.BuiltinFunctions.formatDateTime(OS.BuiltinFunctions.textToDateTime(model.variables.getEventsAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.dateTimeAttr), "d MMM, HH:mm") + " ") + model.variables.getEventsAggr.listOut.getCurrent(callContext.iterationContext).countryAttr.timeZoneAttr);
                                    }, function() {
                                        return model.variables.getEventsAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.dateTimeAttr;
                                    }, function() {
                                        return model.variables.getEventsAggr.listOut.getCurrent(callContext.iterationContext).countryAttr.timeZoneAttr;
                                    }),
                                    _idProps: {
                                        service: idService,
                                        uuid: "16"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventsAggr.dataFetchStatusAttr)
                                }), React.createElement(OSWidgets.Expression, {
                                    extendedProperties: {
                                        style: "color: var(--Neutral-Neutral-10, #101213); font-size: 12px; font-weight: 400; line-height: 18px;"
                                    },
                                    gridProperties: {
                                        marginLeft: "0"
                                    },
                                    value: model.variables.getEventsAggr.listOut.getCurrent(callContext.iterationContext).countryAttr.nameAttr,
                                    _idProps: {
                                        service: idService,
                                        uuid: "17"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventsAggr.dataFetchStatusAttr)
                                })), React.createElement(OutSystemsUI_Utilities_InlineSVG_mvc_view, {
                                    getOwnerSpan: function() {
                                        return _this.getChildSpan("render");
                                    },
                                    getOwnerDisposeSpan: function() {
                                        return _this.getChildSpan("destroy");
                                    },
                                    inputs: {
                                        SVGCode: "<svg width=\"8\" height=\"14\" viewBox=\"0 0 8 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M7.34375 6.65625C7.53125 6.84375 7.53125 7.1875 7.34375 7.375L1.34375 13.375C1.15625 13.5625 0.8125 13.5625 0.625 13.375C0.4375 13.1875 0.4375 12.8438 0.625 12.6562L6.28125 7L0.625 1.375C0.4375 1.1875 0.4375 0.84375 0.625 0.65625C0.8125 0.46875 1.15625 0.46875 1.34375 0.65625L7.34375 6.65625Z\" fill=\"#101213\"/>\r\n</svg>"
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
                                        uuid: "18",
                                        alias: "3"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    _dependencies: []
                                })))];
                            })];
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.getEventsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getEventsAggr.listOut)]
            }));
        }
    }

    return View;
});
define("PartnersHub.Events.EventList.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Events.EventList.mvc$translationsResources", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "PartnersHub.model$RC_74fba7fb18697339da88244fa3fc5435", "PartnersHub.model$RL_c442eae242b2b02d93575027f6e75422"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Events_EventList_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Events_EventList_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {
                    getEvents$AggrRefresh: 0
                };
                this.dataFetchDependentsGraph = {
                    getEvents$AggrRefresh: []
                };
                this.shouldSendClientVarsToDataSources = false;
            }

            // Server Actions - Methods

            // Aggregates and Data Actions
            get getEvents$AggrRefresh() {
                if (!(this.hasOwnProperty("_getEvents$AggrRefresh"))) {
                    this._getEvents$AggrRefresh = function() {
                        var innerBody = function(maxRecords, startIndex, callContext) {
                            var model = this.model;
                            var controller = this.controller;
                            var callContext = controller.callContext(callContext);
                            return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetEvents", "screenservices/PartnersHub/Events/EventList/ScreenDataSetGetEvents", "gxakZDcx9dEwRJipxjY56g", maxRecords, startIndex, function(b) {
                                model.variables.getEventsAggr.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.getEventsAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getEventsAggr.constructor));
                            }, undefined, undefined, undefined, callContext, undefined, true).then(function() {
                                controller._getEventsOnAfterFetch$Action(controller.callContext(callContext));
                            });
                        }.bind(this);
                        return OS.Logger.startActiveSpan("GetEvents", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetEvents");
                                span.setAttribute("outsystems.function.key", "30a51a6b-7320-4f44-8e88-5270e578d5cb");
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

                return this._getEvents$AggrRefresh;
            }
            set getEvents$AggrRefresh(value) {
                this._getEvents$AggrRefresh = value;
            }


            get dataFetchActionNames() {
                if (!(this.hasOwnProperty("_dataFetchActionNames"))) {
                    this._dataFetchActionNames = ["getEvents$AggrRefresh"];
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
                                span.setAttribute("outsystems.function.key", "0450cfb4-fd3d-48b1-8d3d-3eee243d9842");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnParametersChanged");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Refresh Query: GetEvents
                                    var result = controller.getEvents$AggrRefresh(model.variables.maxEventsIn, 0, callContext);
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

            get _getEventsOnAfterFetch$Action() {
                if (!(this.hasOwnProperty("__getEventsOnAfterFetch$Action"))) {
                    this.__getEventsOnAfterFetch$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("GetEventsOnAfterFetch", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetEventsOnAfterFetch");
                                span.setAttribute("outsystems.function.key", "93025021-0e45-46a7-82f9-5c679672e504");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("GetEventsOnAfterFetch");
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

                return this.__getEventsOnAfterFetch$Action;
            }
            set _getEventsOnAfterFetch$Action(value) {
                this.__getEventsOnAfterFetch$Action = value;
            }

            get _onClickEvent$Action() {
                if (!(this.hasOwnProperty("__onClickEvent$Action"))) {
                    this.__onClickEvent$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickEvent", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickEvent");
                                span.setAttribute("outsystems.function.key", "f94b253d-c72c-466c-94bd-7269718689ee");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickEvent");
                                callContext = controller.callContext(callContext);
                                // Execute Action: RudderstackTrackEvent
                                PartnersHubController.default.rudderstackTrackEvent$Action(function() {
                                    var rec = new PartnersHubModel.ST_23ff1d290ec4691b1c668ad437100cd0Structure();
                                    rec.actionAttr = "click_cta";
                                    rec.cta_nameAttr = (model.variables.getEventsAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.titleAttr + " event");
                                    rec.cta_placementAttr = "event card in event section";
                                    return rec;
                                }(), "ce_partnershub_form", callContext);
                                // Destination: /PartnersHub/EventDetails
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "EventDetails", {
                                    EventId: OS.DataConversion.ServerDataConverter.to(model.variables.getEventsAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.idAttr, OS.DataTypes.DataTypes.LongInteger)
                                }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.None), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickEvent$Action;
            }
            set _onClickEvent$Action(value) {
                this.__onClickEvent$Action = value;
            }


            onParametersChanged$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnParametersChanged__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnParametersChanged");
                        span.setAttribute("outsystems.function.key", "0450cfb4-fd3d-48b1-8d3d-3eee243d9842");
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

            getEventsOnAfterFetch$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("GetEventsOnAfterFetch__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "GetEventsOnAfterFetch");
                        span.setAttribute("outsystems.function.key", "93025021-0e45-46a7-82f9-5c679672e504");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._getEventsOnAfterFetch$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onClickEvent$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickEvent__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickEvent");
                        span.setAttribute("outsystems.function.key", "f94b253d-c72c-466c-94bd-7269718689ee");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickEvent$Action, callContext);
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


define("PartnersHub.Events.EventList.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});