define("PartnersHub.Home.WhatsAppBanner.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model"], function(OSRuntimeCore, PartnersHubModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("EnableWhatsappBanner", "enableWhatsappBannerVar", "EnableWhatsappBanner", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new VariablesRecord(new VariablesRecord.RecordClass({
                    enableWhatsappBannerVar: OS.DataTypes.ImmutableBase.getData(str)
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
            return false;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Home.WhatsAppBanner.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Home.WhatsAppBanner.mvc$model", "PartnersHub.Home.WhatsAppBanner.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_Home_WhatsAppBanner_mvc_model, PartnersHub_Home_WhatsAppBanner_mvc_controller, PartnersHubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Home.WhatsAppBanner";
        }

        static getAttributes() {
            return {
                codeFunction: "WhatsAppBanner",
                functionKey: "7faebb1e-157d-40a8-b3ae-58cda0cd0dff",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return PartnersHub_Home_WhatsAppBanner_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Home_WhatsAppBanner_mvc_controller;
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
                animate: true,
                extendedProperties: {
                    style: "align-items: flex-start; background: url(/PartnersHub/img/PartnersHub.whatsapp_banner_bg.jpg) lightgray 50% / cover no-repeat; border-radius: 8px; display: flex; flex-direction: column; gap: 16px; padding: 24px 36px;"
                },
                gridProperties: {
                    classes: "OSInline"
                },
                visible: model.variables.enableWhatsappBannerVar,
                _idProps: {
                    service: idService,
                    name: "WhatsappSection"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "color: var(--Neutral-Neutral-0, #FFF); font-size: 24px; font-style: normal; font-weight: 700; line-height: normal;"
                },
                text: ["WhatsApp updates exclusively for Partners"],
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Image, {
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.phone2501.png"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })));
        }
    }

    return View;
});
define("PartnersHub.Home.WhatsAppBanner.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Home.WhatsAppBanner.mvc$translationsResources"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Home_WhatsAppBanner_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Home_WhatsAppBanner_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {};
                this.dataFetchDependentsGraph = {};
                this.shouldSendClientVarsToDataSources = false;
            }

            // Server Actions - Methods
            get getEnableWhatsappBanner$ServerAction() {
                if (!(this.hasOwnProperty("_getEnableWhatsappBanner$ServerAction"))) {
                    this._getEnableWhatsappBanner$ServerAction = function(callContext) {
                        var controller = this.controller;
                        return OS.Logger.startActiveSpan("GetEnableWhatsappBanner", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetEnableWhatsappBanner");
                                span.setAttribute("outsystems.function.key", "8a6aeaba-8069-42c2-a58f-7251d0854dc0");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
                            }

                            return OS.Flow.tryFinally(function() {
                                return controller.callServerAction("GetEnableWhatsappBanner", "screenservices/PartnersHub/Home/WhatsAppBanner/ActionGetEnableWhatsappBanner", "pYv1IrVU1PoFUzQaOoL6AA", {}, controller.callContext(callContext), undefined, undefined, true).then(function(outputs) {
                                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("PartnersHub.Home.WhatsAppBanner$ActionGetEnableWhatsappBanner"))();
                                    executeServerActionResult.enableWhatsappBannerOut = OS.DataConversion.ServerDataConverter.from(outputs.EnableWhatsappBanner, OS.DataTypes.DataTypes.Boolean);
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

                return this._getEnableWhatsappBanner$ServerAction;
            }
            set getEnableWhatsappBanner$ServerAction(value) {
                this._getEnableWhatsappBanner$ServerAction = value;
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
                                span.setAttribute("outsystems.function.key", "52c48816-847b-47c5-85c6-5321a66c4743");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var getEnableWhatsappBannerVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: GetEnableWhatsappBanner
                                    model.flush();
                                    return controller.getEnableWhatsappBanner$ServerAction(callContext).then(function(value) {
                                        getEnableWhatsappBannerVar.value = value;
                                    }).then(function() {
                                        // EnableWhatsappBanner = GetEnableWhatsappBanner.EnableWhatsappBanner
                                        model.variables.enableWhatsappBannerVar = getEnableWhatsappBannerVar.value.enableWhatsappBannerOut;
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
                        span.setAttribute("outsystems.function.key", "52c48816-847b-47c5-85c6-5321a66c4743");
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
        Controller.registerVariableGroupType("PartnersHub.Home.WhatsAppBanner$ActionGetEnableWhatsappBanner", [{
            name: "EnableWhatsappBanner",
            attrName: "enableWhatsappBannerOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);

        // Client Actions - Variables

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});


define("PartnersHub.Home.WhatsAppBanner.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});