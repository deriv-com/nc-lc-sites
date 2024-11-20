define("PartnersHub.Home.EnableCFDCommissionBanner.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "OutSystemsUI.controller", "CustomComponentsOfficial.ButtonVariants.SecondaryButton.mvc$model", "OutSystemsUI.controller$IsDesktop", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI"], function(OSRuntimeCore, PartnersHubModel, OutSystemsUIController, CustomComponentsOfficial_ButtonVariants_SecondaryButton_mvcModel) {
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
                Model._hasValidationWidgetsValue = CustomComponentsOfficial_ButtonVariants_SecondaryButton_mvcModel.hasValidationWidgets;
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Home.EnableCFDCommissionBanner.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Home.EnableCFDCommissionBanner.mvc$model", "PartnersHub.Home.EnableCFDCommissionBanner.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "CustomComponentsOfficial.ButtonVariants.SecondaryButton.mvc$view", "OutSystemsUI.controller$IsDesktop", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIController, React, OSView, PartnersHub_Home_EnableCFDCommissionBanner_mvc_model, PartnersHub_Home_EnableCFDCommissionBanner_mvc_controller, PartnersHubClientVariables, OSWidgets, CustomComponentsOfficial_ButtonVariants_SecondaryButton_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Home.EnableCFDCommissionBanner";
        }

        static getAttributes() {
            return {
                codeFunction: "EnableCFDCommissionBanner",
                functionKey: "ee13d23b-3a63-4aac-8e2c-e43343ae9feb",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Home.EnableCFDCommissionBanner.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [CustomComponentsOfficial_ButtonVariants_SecondaryButton_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Home_EnableCFDCommissionBanner_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Home_EnableCFDCommissionBanner_mvc_controller;
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
                extendedProperties: {
                    className: "cfd-commission-banner"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                style: "cfd-commission-banner-title",
                text: ["Enable CFD commissions now!"],
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(CustomComponentsOfficial_ButtonVariants_SecondaryButton_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    height: model.getCachedValue(idService.getId("AzKAjvjr3ES5OznIMnmvpw.height"), function() {
                        return ((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut) ? ("48px") : ("32px"));
                    }),
                    borderRadius: "35px",
                    Width: model.getCachedValue(idService.getId("AzKAjvjr3ES5OznIMnmvpw.Width"), function() {
                        return ((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut) ? ("136px") : ("78px"));
                    }),
                    BorderColor: "#FF444F",
                    title: "Let’s go",
                    TextColor: "#FF444F"
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onClick$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.secondaryButtononClick$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                _validationProps: {
                    validationService: validationService
                },
                _idProps: {
                    service: idService,
                    uuid: "2",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            })));
        }
    }

    return View;
});
define("PartnersHub.Home.EnableCFDCommissionBanner.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Home.EnableCFDCommissionBanner.mvc$translationsResources", "OutSystemsUI.controller$IsDesktop", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Home_EnableCFDCommissionBanner_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Home_EnableCFDCommissionBanner_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {};
                this.dataFetchDependentsGraph = {};
                this.shouldSendClientVarsToDataSources = true;
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
            get _secondaryButtononClick$Action() {
                if (!(this.hasOwnProperty("__secondaryButtononClick$Action"))) {
                    this.__secondaryButtononClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SecondaryButtononClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SecondaryButtononClick");
                                span.setAttribute("outsystems.function.key", "85847702-398c-43ad-9623-8dd03380c9b8");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SecondaryButtononClick");
                                callContext = controller.callContext(callContext);
                                // showCFDCommissionModal = True
                                PartnersHubClientVariables.setshowCFDCommissionModal(true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__secondaryButtononClick$Action;
            }
            set _secondaryButtononClick$Action(value) {
                this.__secondaryButtononClick$Action = value;
            }


            secondaryButtononClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SecondaryButtononClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SecondaryButtononClick");
                        span.setAttribute("outsystems.function.key", "85847702-398c-43ad-9623-8dd03380c9b8");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._secondaryButtononClick$Action, callContext);
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

        // Client Actions - Variables

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});


define("PartnersHub.Home.EnableCFDCommissionBanner.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});