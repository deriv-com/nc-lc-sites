define("tradershub.MainFlowBlocks.LoggedOutBanner.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.Numbers.Rating.mvc$model", "tradershub.model$ST_d9250f167f0b0818f60ee73b22ec1a06Structure"], function(OSRuntimeCore, tradershubModel, OutSystemsUI_Numbers_Rating_mvcModel) {
    var OS = OSRuntimeCore;

    {
        class TrustPilotDataActRecInner extends
        OS.Model.DataSourceRecord {
            static attributesToDeclare() {
                return [
                    this.attr("TrustPilotOutput", "trustPilotOutputOut", "TrustPilotOutput", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_d9250f167f0b0818f60ee73b22ec1a06Structure());
                    }, true, tradershubModel.ST_d9250f167f0b0818f60ee73b22ec1a06Structure)
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
                    this.attr("TrustPilot", "trustPilotDataAct", "TrustPilot", true, true, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new TrustPilotDataActRec());
                    }, true, TrustPilotDataActRec)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new VariablesRecord(new VariablesRecord.RecordClass({
                    trustPilotDataAct: OS.DataTypes.ImmutableBase.getData(str)
                }));
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
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.MainFlowBlocks.LoggedOutBanner.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.MainFlowBlocks.LoggedOutBanner.mvc$model", "tradershub.MainFlowBlocks.LoggedOutBanner.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Numbers.Rating.mvc$view", "tradershub.model$ST_d9250f167f0b0818f60ee73b22ec1a06Structure"], function(OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_MainFlowBlocks_LoggedOutBanner_mvc_model, tradershub_MainFlowBlocks_LoggedOutBanner_mvc_controller, tradershubClientVariables, OSWidgets, OutSystemsUI_Numbers_Rating_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "MainFlowBlocks.LoggedOutBanner";
        }

        static getAttributes() {
            return {
                codeFunction: "LoggedOutBanner",
                functionKey: "1dce0a0a-5e93-4c2f-a406-be2d0f5dd393",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.MainFlowBlocks.LoggedOutBanner.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Numbers_Rating_mvc_view];
        }

        get modelFactory() {
            return tradershub_MainFlowBlocks_LoggedOutBanner_mvc_model;
        }

        get controllerFactory() {
            return tradershub_MainFlowBlocks_LoggedOutBanner_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier())), false, this, function() {
                return [];
            }, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
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
                        try {
                            OS.Navigation.navigateTo(OS.Navigation.generateScreenURL((((OS.BuiltinFunctions.index(tradershubClientVariables.getURL(), "green", 0, false, false) > -1)) ? (("https://oauth.deriv.com/oauth2/authorize?app_id=" + tradershubClientVariables.getAppId())) : (((("https://" + tradershubClientVariables.getURL()) + "/oauth2/authorize?app_id=") + tradershubClientVariables.getAppId()))), {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), null, true);
                        } catch (ex) {
                            if (((ex.name) !== ("RedirectOccurredException"))) {
                                throw ex;
                            }

                        };
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
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.LoggedOutBannerCoinsDesktop.svg"),
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
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.LoggedOutBannerCoinsResponsive.svg"),
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
                    transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                    url: OS.Navigation.generateScreenURL("https://www.trustpilot.com/review/deriv.com", {}),
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
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.trustpilot_star.svg"),
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
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.trustpilot_half_star.svg"),
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
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.trustpilot_start_empty.svg"),
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
                    value: model.getCachedValue(idService.getId("a8pnSUb5+kmNBQ5rSTWnAw.Value"), function() {
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
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.trustpilot.svg"),
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
define("tradershub.MainFlowBlocks.LoggedOutBanner.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.model$ST_d9250f167f0b0818f60ee73b22ec1a06Structure"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables) {
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
                            return controller.callDataAction("DataActionTrustPilot", "screenservices/tradershub/MainFlowBlocks/LoggedOutBanner/DataActionTrustPilot", "CSzIWZjEeCvW3TyFIxjWfw", function(b) {
                                model.variables.trustPilotDataAct.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.trustPilotDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.trustPilotDataAct.constructor));
                            }, undefined, undefined, undefined, callContext, undefined, false);
                        }.bind(this);
                        return OS.Logger.startActiveSpan("TrustPilot", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "TrustPilot");
                                span.setAttribute("outsystems.function.key", "8967933a-d26e-4e12-8962-6aac7447d4d2");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
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