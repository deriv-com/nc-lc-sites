define("tradershub.NilooTest.WithoutLib.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.Layouts.MainLayout.mvc$model", "tradershub.MainFlowBlocks.LoggedOutBanner.mvc$model", "tradershub.model$ST_a355a6f7310dccf995714154ff091036Structure", "tradershub.model$ST_7bd4dc678bb68fc98ad7de28721d6fb5Structure"], function(OSRuntimeCore, tradershubModel, tradershub_Layouts_MainLayout_mvcModel, tradershub_MainFlowBlocks_LoggedOutBanner_mvcModel) {
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
            return {};
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
            if ((Model._hasValidationWidgetsValue === undefined)) {
                Model._hasValidationWidgetsValue = (tradershub_Layouts_MainLayout_mvcModel.hasValidationWidgets || tradershub_MainFlowBlocks_LoggedOutBanner_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.NilooTest.WithoutLib.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.NilooTest.WithoutLib.mvc$model", "tradershub.NilooTest.WithoutLib.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.MainLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.MainFlowBlocks.LoggedOutBanner.mvc$view", "tradershub.model$ST_a355a6f7310dccf995714154ff091036Structure", "tradershub.model$ST_7bd4dc678bb68fc98ad7de28721d6fb5Structure"], function(OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_NilooTest_WithoutLib_mvc_model, tradershub_NilooTest_WithoutLib_mvc_controller, tradershubClientVariables, tradershub_Layouts_MainLayout_mvc_view, OSWidgets, tradershub_MainFlowBlocks_LoggedOutBanner_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "NilooTest.WithoutLib";
        }

        static getAttributes() {
            return {
                codeFunction: "WithoutLib",
                functionKey: "80e8daa3-fc45-4fe8-b46d-fc0be0fc568d",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_MainLayout_mvc_view, tradershub_MainFlowBlocks_LoggedOutBanner_mvc_view];
        }

        get modelFactory() {
            return tradershub_NilooTest_WithoutLib_mvc_model;
        }

        get controllerFactory() {
            return tradershub_NilooTest_WithoutLib_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("o9rogEX86E+0bfwL4PxWjQ#Title", "WithoutLib");
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
                    ActiveTab: 2
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
                        })];
                    })
                },
                _dependencies: []
            }));
        }
    }

    return View;
});
define("tradershub.NilooTest.WithoutLib.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.NilooTest.WithoutLib.mvc$translationsResources", "tradershub.NilooTest.controller", "tradershub.model$ST_a355a6f7310dccf995714154ff091036Structure", "tradershub.model$ST_7bd4dc678bb68fc98ad7de28721d6fb5Structure"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_NilooTest_WithoutLib_mvc_TranslationsResources, tradershub_NilooTestController) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, tradershub_NilooTest_WithoutLib_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {};
                this.dataFetchDependentsGraph = {};
                this.shouldSendClientVarsToDataSources = true;
            }

            // Server Actions - Methods
            get postCashier$ServerAction() {
                if (!(this.hasOwnProperty("_postCashier$ServerAction"))) {
                    this._postCashier$ServerAction = function(appIdIn, languageIn, xTokenIn, requestIn, callContext) {
                        var controller = this.controller;
                        return OS.Logger.startActiveSpan("PostCashier", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "PostCashier");
                                span.setAttribute("outsystems.function.key", "cc64be41-e3f2-40a5-835a-c37347ee0c2f");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
                            }

                            return OS.Flow.tryFinally(function() {
                                var inputs = {
                                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                                    XToken: OS.DataConversion.ServerDataConverter.to(xTokenIn, OS.DataTypes.DataTypes.Text),
                                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                                };
                                return controller.callServerAction("PostCashier", "screenservices/tradershub/NilooTest/WithoutLib/ActionPostCashier", "cBBHBTh4liI_hTPMyGaeKA", inputs, controller.callContext(callContext), undefined, undefined, true).then(function(outputs) {
                                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("tradershub.NilooTest.WithoutLib$ActionPostCashier"))();
                                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, tradershubModel.ST_7bd4dc678bb68fc98ad7de28721d6fb5Structure);
                                    return executeServerActionResult;
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 0);
                    };
                }

                return this._postCashier$ServerAction;
            }
            set postCashier$ServerAction(value) {
                this._postCashier$ServerAction = value;
            }


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
            get _onReady$Action() {
                if (!(this.hasOwnProperty("__onReady$Action"))) {
                    this.__onReady$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnReady", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnReady");
                                span.setAttribute("outsystems.function.key", "62139753-4052-4d0a-8474-7a667b21578c");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var postCashierVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: PostCashier
                                    model.flush();
                                    return controller.postCashier$ServerAction("", "", "a1-GWfL1p1t1IpEda3EKNJUepZ4ekXPo", function() {
                                        var rec = new tradershubModel.ST_a355a6f7310dccf995714154ff091036Structure();
                                        rec.cashierAttr = "deposit";
                                        rec.providerAttr = "doughflow";
                                        return rec;
                                    }(), callContext).then(function(value) {
                                        postCashierVar.value = value;
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


            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "62139753-4052-4d0a-8474-7a667b21578c");
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
                        return tradershub_NilooTestController.default.handleError(ex, this.callContext());
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
        Controller.registerVariableGroupType("tradershub.NilooTest.WithoutLib$ActionPostCashier", [{
            name: "Response",
            attrName: "responseOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new tradershubModel.ST_7bd4dc678bb68fc98ad7de28721d6fb5Structure();
            },
            complexType: tradershubModel.ST_7bd4dc678bb68fc98ad7de28721d6fb5Structure
        }]);

        // Client Actions - Variables

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});


define("tradershub.NilooTest.WithoutLib.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});