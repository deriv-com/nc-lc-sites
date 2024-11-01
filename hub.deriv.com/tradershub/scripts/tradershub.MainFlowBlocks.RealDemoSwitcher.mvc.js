define("tradershub.MainFlowBlocks.RealDemoSwitcher.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model"], function(OSRuntimeCore, tradershubModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        var VariablesRecord = VariablesRecordInner;
        VariablesRecord.init();
    }
    class WidgetsRecord extends
    OS.Model.BaseWidgetRecordMap {
        static getWidgetsType() {
            return {
                RealDemoSwitcher: OS.Model.ValidationWidgetRecord
            };
        }

    }

    class Model extends
    OS.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return VariablesRecord;
        }

        static getWidgetsRecordConstructor() {
            return WidgetsRecord;
        }

        static get hasValidationWidgets() {
            return true;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.MainFlowBlocks.RealDemoSwitcher.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.MainFlowBlocks.RealDemoSwitcher.mvc$model", "tradershub.MainFlowBlocks.RealDemoSwitcher.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js"], function(OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_MainFlowBlocks_RealDemoSwitcher_mvc_model, tradershub_MainFlowBlocks_RealDemoSwitcher_mvc_controller, tradershubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "MainFlowBlocks.RealDemoSwitcher";
        }

        static getAttributes() {
            return {
                codeFunction: "RealDemoSwitcher",
                functionKey: "ab7c8517-98d5-4615-b795-4a857fd3d6a4",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.MainFlowBlocks.RealDemoSwitcher.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return tradershub_MainFlowBlocks_RealDemoSwitcher_mvc_model;
        }

        get controllerFactory() {
            return tradershub_MainFlowBlocks_RealDemoSwitcher_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier())), true, this, function() {
                return [React.createElement(OSWidgets.ButtonGroup, {
                    _validationProps: {
                        validationService: validationService
                    },
                    enabled: true,
                    mandatory: true,
                    style: "real-demo-switcher",
                    variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getAccountType(), function(value) {
                        tradershubClientVariables.setAccountType(value);
                    }),
                    _idProps: {
                        service: idService,
                        name: "RealDemoSwitcher"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.ButtonGroupItem, {
                    enabled: true,
                    extendedEvents: {
                        onClick: function() {
                            return Promise.resolve().then(function() {
                                var eventHandlerContext = callContext.clone();
                                return controller.demoClick$Action(controller.callContext(eventHandlerContext));
                            });;
                        }
                    },
                    style: "real-demo-switcher-item",
                    value: "demo",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "demo"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, $text(getTranslation("Iu0uTGMV2U+scsffftluAw#Value", "Demo"))), React.createElement(OSWidgets.ButtonGroupItem, {
                    enabled: true,
                    extendedEvents: {
                        onClick: function() {
                            return Promise.resolve().then(function() {
                                var eventHandlerContext = callContext.clone();
                                return controller.realClick$Action(controller.callContext(eventHandlerContext));
                            });;
                        }
                    },
                    style: "real-demo-switcher-item",
                    value: "real",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "real"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, $text(getTranslation("ggfnr5HPPUCxE3D9mz+sbw#Value", "Real"))))];
            }, function() {
                return [];
            }));
        }
    }

    return View;
});
define("tradershub.MainFlowBlocks.RealDemoSwitcher.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.MainFlowBlocks.RealDemoSwitcher.mvc$translationsResources"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_MainFlowBlocks_RealDemoSwitcher_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, tradershub_MainFlowBlocks_RealDemoSwitcher_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {};
                this.dataFetchDependentsGraph = {};
                this.shouldSendClientVarsToDataSources = false;
            }

            // Server Actions - Methods

            // Aggregates and Data Actions

            get dataFetchActionNames() {
                if (!(this.hasOwnProperty("_dataFetchActionNames"))) {
                    this._dataFetchActionNames = [];
                }

                return this._dataFetchActionNames;
            }
            set dataFetchActionNames(value) {
                this._dataFetchActionNames = value;
            }

            // Client Actions - Methods
            get _realClick$Action() {
                if (!(this.hasOwnProperty("__realClick$Action"))) {
                    this.__realClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("RealClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "RealClick");
                                span.setAttribute("outsystems.function.key", "bcc0d613-a6c1-4533-ac9e-b52fe59572a4");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("RealClick");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Trigger Event: RealClickEvent
                                    return controller.realClickEvent$Action(callContext);
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    };
                }

                return this.__realClick$Action;
            }
            set _realClick$Action(value) {
                this.__realClick$Action = value;
            }

            get _demoClick$Action() {
                if (!(this.hasOwnProperty("__demoClick$Action"))) {
                    this.__demoClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("DemoClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "DemoClick");
                                span.setAttribute("outsystems.function.key", "bcf439d6-84b8-4342-90bd-94f65263ab26");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("DemoClick");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Trigger Event: DemoClick
                                    return controller.demoClickEvent$Action(callContext);
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    };
                }

                return this.__demoClick$Action;
            }
            set _demoClick$Action(value) {
                this.__demoClick$Action = value;
            }


            realClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("RealClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "RealClick");
                        span.setAttribute("outsystems.function.key", "bcc0d613-a6c1-4533-ac9e-b52fe59572a4");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._realClick$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            demoClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("DemoClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "DemoClick");
                        span.setAttribute("outsystems.function.key", "bcf439d6-84b8-4342-90bd-94f65263ab26");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._demoClick$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            get demoClickEvent$Action() {
                if (!(this.hasOwnProperty("_demoClickEvent$Action"))) {
                    this._demoClickEvent$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._demoClickEvent$Action;
            }
            set demoClickEvent$Action(value) {
                this._demoClickEvent$Action = value;
            }

            get realClickEvent$Action() {
                if (!(this.hasOwnProperty("_realClickEvent$Action"))) {
                    this._realClickEvent$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._realClickEvent$Action;
            }
            set realClickEvent$Action(value) {
                this._realClickEvent$Action = value;
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
                return tradershubController.default.defaultTimeout;
            }

        }

        var Controller = ControllerInner;
        // Server Actions - Variables

        // Client Actions - Variables

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});


define("tradershub.MainFlowBlocks.RealDemoSwitcher.mvc$translationsResources.fr-FR", [], function() {
    return {
        "ggfnr5HPPUCxE3D9mz+sbw#Value": "Réel",
        "Iu0uTGMV2U+scsffftluAw#Value": "Démo"
    };
});

define("tradershub.MainFlowBlocks.RealDemoSwitcher.mvc$translationsResources", ["exports", "tradershub.MainFlowBlocks.RealDemoSwitcher.mvc$translationsResources.fr-FR"], function(exports, tradershub_MainFlowBlocks_RealDemoSwitcher_mvc_translationsResources_frFR) {
    return {
        "fr-FR": {
            "translations": tradershub_MainFlowBlocks_RealDemoSwitcher_mvc_translationsResources_frFR,
            "isRTL": false
        }
    };
});