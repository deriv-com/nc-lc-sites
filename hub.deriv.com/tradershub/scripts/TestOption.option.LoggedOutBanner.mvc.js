define("TestOption.option.LoggedOutBanner.mvc$model", ["@outsystems/runtime-core-js", "TestOption.model", "TestOption.controller", "OutSystemsUI.Numbers.Rating.mvc$model", "TestOption.controller$DerivApiSendMessage", "TestOption.model$ST_c17e2a53c59b5eb4fe40f073c24160f5Structure"], function(OSRuntimeCore, TestOptionModel, TestOptionController, OutSystemsUI_Numbers_Rating_mvcModel) {
    var OS = OSRuntimeCore;

    {
        class TrustPilotDataActRecInner extends
        OS.Model.DataSourceRecord {
            static attributesToDeclare() {
                return [
                    this.attr("TrustPilotOutput", "trustPilotOutputOut", "TrustPilotOutput", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new TestOptionModel.ST_c17e2a53c59b5eb4fe40f073c24160f5Structure());
                    }, true, TestOptionModel.ST_c17e2a53c59b5eb4fe40f073c24160f5Structure)
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
                    this.attr("AuthToken", "authTokenIn", "AuthToken", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_authTokenInDataFetchStatus", "_authTokenInDataFetchStatus", "_authTokenInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
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
                Model._hasValidationWidgetsValue = OutSystemsUI_Numbers_Rating_mvcModel.hasValidationWidgets;
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {
            if ("AuthToken" in inputs) {
                this.variables.authTokenIn = inputs.AuthToken;
                if ("_authTokenInDataFetchStatus" in inputs) {
                    this.variables._authTokenInDataFetchStatus = inputs._authTokenInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("TestOption.option.LoggedOutBanner.mvc$view", ["@outsystems/runtime-core-js", "TestOption.model", "TestOption.controller", "react", "@outsystems/runtime-view-js", "TestOption.option.LoggedOutBanner.mvc$model", "TestOption.option.LoggedOutBanner.mvc$controller", "@outsystems/runtime-widgets-js", "OutSystemsUI.Numbers.Rating.mvc$view", "TestOption.controller$DerivApiSendMessage", "TestOption.model$ST_c17e2a53c59b5eb4fe40f073c24160f5Structure"], function(OSRuntimeCore, TestOptionModel, TestOptionController, React, OSView, TestOption_option_LoggedOutBanner_mvc_model, TestOption_option_LoggedOutBanner_mvc_controller, OSWidgets, OutSystemsUI_Numbers_Rating_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "option.LoggedOutBanner";
        }

        static getAttributes() {
            return {
                codeFunction: "LoggedOutBanner",
                functionKey: "8cd04956-430f-4832-aa29-7e54431552b5",
                functionOwnerName: "TestOption",
                functionOwnerKey: "95c8cd0d-e615-4470-a689-ff1a80162972",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/TestOption.option.LoggedOutBanner.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Numbers_Rating_mvc_view];
        }

        get modelFactory() {
            return TestOption_option_LoggedOutBanner_mvc_model;
        }

        get controllerFactory() {
            return TestOption_option_LoggedOutBanner_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(((model.variables.authTokenIn) !== (OS.BuiltinFunctions.nullTextIdentifier())), false, this, function() {
                return [];
            }, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "banner-container",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "Container"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "banner",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "Banner"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "banner-content",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "BannerContent"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Text, {
                    style: "banner-title",
                    text: ["Join over 2.5 million traders"],
                    _idProps: {
                        service: idService,
                        uuid: "3"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }), React.createElement(OSWidgets.Button, {
                    enabled: true,
                    isDefault: false,
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.getStartedButtonClick$Action(controller.callContext(eventHandlerContext));

                        ;
                    },
                    style: "get-started-btn",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "4"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, "Get started")), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "hide-mobile",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "ImageContainerDesktop"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Image, {
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/TestOption.LoggedOutBannerCoinsDesktop.svg"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "6"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "banner-img-responsive",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "ImageContainerResponsive"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Image, {
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/TestOption.LoggedOutBannerCoinsResponsive.svg"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "8"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }))), React.createElement(OSWidgets.Link, {
                    enabled: true,
                    extendedProperties: {
                        target: "_blank",
                        style: "text-decoration: none;"
                    },
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.redirectionToTrustPilot$Action(controller.callContext(eventHandlerContext));

                        ;
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "TrustpilotLink"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "trustpilot",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "10"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Text, {
                    style: "hide-mobile",
                    text: ["Our customer say"],
                    _idProps: {
                        service: idService,
                        uuid: "11"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "margin: 0 24px;"
                    },
                    style: "hide-mobile",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "Excellent"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "font-weight: bold;"
                    },
                    text: ["Excellent"],
                    _idProps: {
                        service: idService,
                        uuid: "13"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "RatingContainer"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OutSystemsUI_Numbers_Rating_mvc_view, {
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
                        uuid: "15",
                        alias: "1"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    placeholders: {
                        filledState: new PlaceholderContent(function() {
                            return [React.createElement(OSWidgets.Image, {
                                gridProperties: {
                                    width: "24px"
                                },
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/TestOption.trustpilot_star.svg"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }),
                        halfState: new PlaceholderContent(function() {
                            return [React.createElement(OSWidgets.Image, {
                                gridProperties: {
                                    width: "24px"
                                },
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/TestOption.trustpilot_half_star.svg"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }),
                        emptyState: new PlaceholderContent(function() {
                            return [React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/TestOption.trustpilot_start_empty.svg"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "18"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        })
                    },
                    _dependencies: []
                })), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "margin: 0 24px;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "hide-mobile",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "19"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Expression, {
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    value: model.getCachedValue(idService.getId("PFWWUhRT8UWzk2zRRJAUbQ.Value"), function() {
                        return (((OS.BuiltinFunctions.formatDecimal(model.variables.trustPilotDataAct.trustPilotOutputOut.scoreAttr.trustScoreAttr, 2, ".", ",") + " out of 5 based on ") + OS.BuiltinFunctions.formatDecimal(OS.BuiltinFunctions.longIntegerToDecimal(model.variables.trustPilotDataAct.trustPilotOutputOut.numberOfReviewsAttr.totalAttr), 0, ",", ",")) + " reviews");
                    }, function() {
                        return model.variables.trustPilotDataAct.trustPilotOutputOut.scoreAttr.trustScoreAttr;
                    }, function() {
                        return model.variables.trustPilotDataAct.trustPilotOutputOut.numberOfReviewsAttr.totalAttr;
                    }),
                    _idProps: {
                        service: idService,
                        uuid: "20"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.trustPilotDataAct.dataFetchStatusAttr)
                })), React.createElement(OSWidgets.Image, {
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/TestOption.trustpilot.svg"),
                    style: "trustpilot-text",
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "21"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }))))];
            }));
        }
    }

    return View;
});
define("TestOption.option.LoggedOutBanner.mvc$controller", ["@outsystems/runtime-core-js", "TestOption.model", "TestOption.controller", "TestOption.languageResources", "TestOption.controller$DerivApiSendMessage", "TestOption.model$ST_c17e2a53c59b5eb4fe40f073c24160f5Structure"], function(OSRuntimeCore, TestOptionModel, TestOptionController, TestOptionLanguageResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {
                    trustPilot$DataActRefresh: 0
                };
                this.dataFetchDependentsGraph = {
                    trustPilot$DataActRefresh: []
                };
                this.shouldSendClientVarsToDataSources = false;
            }

            // Server Actions - Methods

            // Aggregates and Data Actions
            get trustPilot$DataActRefresh() {
                if (!(this.hasOwnProperty("_trustPilot$DataActRefresh"))) {
                    this._trustPilot$DataActRefresh = function() {
                        var innerBody = function(callContext) {
                            var model = this.model;
                            var controller = this.controller;
                            var callContext = controller.callContext(callContext);
                            return controller.callDataAction("DataActionTrustPilot", "screenservices/TestOption/option/LoggedOutBanner/DataActionTrustPilot", "0ynS5E8TmgBMq5W2dqCxHw", function(b) {
                                model.variables.trustPilotDataAct.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.trustPilotDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.trustPilotDataAct.constructor));
                            }, undefined, undefined, undefined, callContext, undefined, false);
                        }.bind(this);
                        return OS.Logger.startActiveSpan("TrustPilot", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "TrustPilot");
                                span.setAttribute("outsystems.function.key", "450e7f9f-20e9-4010-9bf3-1691b0043051");
                                span.setAttribute("outsystems.function.owner.name", "TestOption");
                                span.setAttribute("outsystems.function.owner.key", "95c8cd0d-e615-4470-a689-ff1a80162972");
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
                    this._dataFetchActionNames = ["trustPilot$DataActRefresh"];
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
                                span.setAttribute("outsystems.function.key", "83250c89-2d86-4020-84e1-1b39ef3f765a");
                                span.setAttribute("outsystems.function.owner.name", "TestOption");
                                span.setAttribute("outsystems.function.owner.key", "95c8cd0d-e615-4470-a689-ff1a80162972");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: DerivApiSendMessage
                                    model.flush();
                                    return TestOptionController.default.derivApiSendMessage$Action("", "ping", false, model.variables.authTokenIn, callContext).then(function(value) {
                                        derivApiSendMessageVar.value = value;
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
                        span.setAttribute("outsystems.function.key", "83250c89-2d86-4020-84e1-1b39ef3f765a");
                        span.setAttribute("outsystems.function.owner.name", "TestOption");
                        span.setAttribute("outsystems.function.owner.key", "95c8cd0d-e615-4470-a689-ff1a80162972");
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

            get getStartedButtonClick$Action() {
                if (!(this.hasOwnProperty("_getStartedButtonClick$Action"))) {
                    this._getStartedButtonClick$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._getStartedButtonClick$Action;
            }
            set getStartedButtonClick$Action(value) {
                this._getStartedButtonClick$Action = value;
            }

            get redirectionToTrustPilot$Action() {
                if (!(this.hasOwnProperty("_redirectionToTrustPilot$Action"))) {
                    this._redirectionToTrustPilot$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._redirectionToTrustPilot$Action;
            }
            set redirectionToTrustPilot$Action(value) {
                this._redirectionToTrustPilot$Action = value;
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
                return TestOptionController.default.defaultTimeout;
            }

        }

        var Controller = ControllerInner;
        // Server Actions - Variables

        // Client Actions - Variables

    }
    return new OS.Controller.ControllerFactory(Controller, TestOptionLanguageResources);
});