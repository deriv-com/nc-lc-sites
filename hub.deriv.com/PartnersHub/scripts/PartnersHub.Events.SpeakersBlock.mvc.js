define("PartnersHub.Events.SpeakersBlock.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.model$RC_0ba7e979e12fa40c2f5555de45482f78", "PartnersHub.model$RL_39fb6dc5ee04c0d26b88d36ed39f3ebe"], function(OSRuntimeCore, PartnersHubModel) {
    var OS = OSRuntimeCore; {
        class GetEventSpeakerMappingsByEventIdAggrRecInner extends
        OS.Model.AggregateRecord {
            static attributesToDeclare() {
                return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new GetEventSpeakerMappingsByEventIdAggrRec(new GetEventSpeakerMappingsByEventIdAggrRec.RecordClass({
                    RecordListType: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        GetEventSpeakerMappingsByEventIdAggrRecInner.RecordListType = PartnersHubModel.RL_39fb6dc5ee04c0d26b88d36ed39f3ebe;
        var GetEventSpeakerMappingsByEventIdAggrRec = GetEventSpeakerMappingsByEventIdAggrRecInner;
        GetEventSpeakerMappingsByEventIdAggrRec.init();
    }


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("EventId", "eventIdIn", "EventId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, false),
                    this.attr("_eventIdInDataFetchStatus", "_eventIdInDataFetchStatus", "_eventIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("GetEventSpeakerMappingsByEventId", "getEventSpeakerMappingsByEventIdAggr", "GetEventSpeakerMappingsByEventId", true, true, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new GetEventSpeakerMappingsByEventIdAggrRec());
                    }, true, GetEventSpeakerMappingsByEventIdAggrRec)
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
            return false;
        }
        setInputs(inputs) {
            if ("EventId" in inputs) {
                this.variables.eventIdIn = inputs.EventId;
                if ("_eventIdInDataFetchStatus" in inputs) {
                    this.variables._eventIdInDataFetchStatus = inputs._eventIdInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Events.SpeakersBlock.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Events.SpeakersBlock.mvc$model", "PartnersHub.Events.SpeakersBlock.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "PartnersHub.model$RC_0ba7e979e12fa40c2f5555de45482f78", "PartnersHub.model$RL_39fb6dc5ee04c0d26b88d36ed39f3ebe"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_Events_SpeakersBlock_mvc_model, PartnersHub_Events_SpeakersBlock_mvc_controller, PartnersHubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Events.SpeakersBlock";
        }

        static getAttributes() {
            return {
                codeFunction: "SpeakersBlock",
                functionKey: "98cdfca2-8e3f-4e3f-b414-47012db7f7f1",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Events.SpeakersBlock.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return PartnersHub_Events_SpeakersBlock_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Events_SpeakersBlock_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "display-flex flex-direction-column gap-base",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                style: "ph-section-subtitle",
                text: ["Speakers"],
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.List, {
                animateItems: true,
                extendedProperties: {
                    "disable-virtualization": "True",
                    style: "gap: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                mode: /*Default*/ 0,
                source: model.variables.getEventSpeakerMappingsByEventIdAggr.listOut,
                style: "display-flex flex-direction-column",
                tag: "div",
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventSpeakerMappingsByEventIdAggr.dataFetchStatusAttr),
                placeholders: {
                    content: new IteratorPlaceholderContent(function(idService, callContext) {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "align-items: center; display: flex; gap: 16px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: [asPrimitiveValue(model.variables.getEventSpeakerMappingsByEventIdAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getEventSpeakerMappingsByEventIdAggr.listOut.getCurrent(callContext.iterationContext).speakerRoleAttr.roleAttr), asPrimitiveValue(model.variables.getEventSpeakerMappingsByEventIdAggr.listOut.getCurrent(callContext.iterationContext).eventSpeakersAttr.nameAttr), asPrimitiveValue(model.variables.getEventSpeakerMappingsByEventIdAggr.listOut.getCurrent(callContext.iterationContext).eventSpeakersAttr.imageAttr)]
                        }, React.createElement(OSWidgets.Image, {
                            extendedProperties: {
                                style: "border-radius: 100%; height: 66px;"
                            },
                            gridProperties: {
                                width: "66px"
                            },
                            imageContent: model.variables.getEventSpeakerMappingsByEventIdAggr.listOut.getCurrent(callContext.iterationContext).eventSpeakersAttr.imageAttr,
                            type: /*Binary*/ 2,
                            _idProps: {
                                service: idService,
                                uuid: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            imageContent_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventSpeakerMappingsByEventIdAggr.dataFetchStatusAttr)
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "gap: 4px;"
                            },
                            style: "display-flex flex-direction-column",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Expression, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "ph-speaker-name",
                            value: model.variables.getEventSpeakerMappingsByEventIdAggr.listOut.getCurrent(callContext.iterationContext).eventSpeakersAttr.nameAttr,
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventSpeakerMappingsByEventIdAggr.dataFetchStatusAttr)
                        }), React.createElement(OSWidgets.Expression, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "ph-section-text",
                            value: model.variables.getEventSpeakerMappingsByEventIdAggr.listOut.getCurrent(callContext.iterationContext).speakerRoleAttr.roleAttr,
                            _idProps: {
                                service: idService,
                                uuid: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventSpeakerMappingsByEventIdAggr.dataFetchStatusAttr)
                        })))];
                    }, callContext, idService, "1")
                },
                _dependencies: [asPrimitiveValue(model.variables.getEventSpeakerMappingsByEventIdAggr.dataFetchStatusAttr)]
            })));
        }
    }

    return View;
});
define("PartnersHub.Events.SpeakersBlock.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Events.SpeakersBlock.mvc$translationsResources", "PartnersHub.model$RC_0ba7e979e12fa40c2f5555de45482f78", "PartnersHub.model$RL_39fb6dc5ee04c0d26b88d36ed39f3ebe"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Events_SpeakersBlock_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Events_SpeakersBlock_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {
                    getEventSpeakerMappingsByEventId$AggrRefresh: 0
                };
                this.dataFetchDependentsGraph = {
                    getEventSpeakerMappingsByEventId$AggrRefresh: []
                };
                this.shouldSendClientVarsToDataSources = false;
            }

            // Server Actions - Methods

            // Aggregates and Data Actions
            get getEventSpeakerMappingsByEventId$AggrRefresh() {
                if (!(this.hasOwnProperty("_getEventSpeakerMappingsByEventId$AggrRefresh"))) {
                    this._getEventSpeakerMappingsByEventId$AggrRefresh = function() {
                        var innerBody = function(maxRecords, startIndex, callContext) {
                            var model = this.model;
                            var controller = this.controller;
                            var callContext = controller.callContext(callContext);
                            return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetEventSpeakerMappingsByEventId", "screenservices/PartnersHub/Events/SpeakersBlock/ScreenDataSetGetEventSpeakerMappingsByEventId", "rK4Ka4PsqWgntVj+8z8dlQ", maxRecords, startIndex, function(b) {
                                model.variables.getEventSpeakerMappingsByEventIdAggr.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.getEventSpeakerMappingsByEventIdAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getEventSpeakerMappingsByEventIdAggr.constructor));
                            }, undefined, undefined, undefined, callContext, undefined, true);
                        }.bind(this);
                        return OS.Logger.startActiveSpan("GetEventSpeakerMappingsByEventId", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetEventSpeakerMappingsByEventId");
                                span.setAttribute("outsystems.function.key", "7560cc89-0ac2-41fd-aa26-40842c7a091c");
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

                return this._getEventSpeakerMappingsByEventId$AggrRefresh;
            }
            set getEventSpeakerMappingsByEventId$AggrRefresh(value) {
                this._getEventSpeakerMappingsByEventId$AggrRefresh = value;
            }


            get dataFetchActionNames() {
                if (!(this.hasOwnProperty("_dataFetchActionNames"))) {
                    this._dataFetchActionNames = ["getEventSpeakerMappingsByEventId$AggrRefresh"];
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
                                span.setAttribute("outsystems.function.key", "bc24ef44-c69d-415e-a0f0-ef1a44c00ce4");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnParametersChanged");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Refresh Query: GetEventSpeakerMappingsByEventId
                                    var result = controller.getEventSpeakerMappingsByEventId$AggrRefresh(50, 0, callContext);
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


            onParametersChanged$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnParametersChanged__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnParametersChanged");
                        span.setAttribute("outsystems.function.key", "bc24ef44-c69d-415e-a0f0-ef1a44c00ce4");
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

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});


define("PartnersHub.Events.SpeakersBlock.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});