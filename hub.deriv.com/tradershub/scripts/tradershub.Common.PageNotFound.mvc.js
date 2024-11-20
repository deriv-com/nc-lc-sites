define("tradershub.Common.PageNotFound.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.Layouts.LayoutBlank.mvc$model", "tradershub.Layouts.SignupLayoutTopMenu.mvc$model"], function(OSRuntimeCore, tradershubModel, tradershub_Layouts_LayoutBlank_mvcModel, tradershub_Layouts_SignupLayoutTopMenu_mvcModel) {
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
                Model._hasValidationWidgetsValue = (tradershub_Layouts_LayoutBlank_mvcModel.hasValidationWidgets || tradershub_Layouts_SignupLayoutTopMenu_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.Common.PageNotFound.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.Common.PageNotFound.mvc$model", "tradershub.Common.PageNotFound.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.LayoutBlank.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.Layouts.SignupLayoutTopMenu.mvc$view"], function(OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_Common_PageNotFound_mvc_model, tradershub_Common_PageNotFound_mvc_controller, tradershubClientVariables, tradershub_Layouts_LayoutBlank_mvc_view, OSWidgets, tradershub_Layouts_SignupLayoutTopMenu_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "Common.PageNotFound";
        }

        static getAttributes() {
            return {
                codeFunction: "PageNotFound",
                functionKey: "aa94d450-66c1-4d97-9e1f-f7e02b9cea78",
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
            return [tradershub_Layouts_LayoutBlank_mvc_view, tradershub_Layouts_SignupLayoutTopMenu_mvc_view];
        }

        get modelFactory() {
            return tradershub_Common_PageNotFound_mvc_model;
        }

        get controllerFactory() {
            return tradershub_Common_PageNotFound_mvc_controller;
        }

        get title() {

            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            var validationService = controller.validationService;
            var callContext = controller.callContext();
            var asPrimitiveValue = View.asPrimitiveValue;
            var getTranslation = View.getTranslation;
            var _this = this;


            return OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("UNSUqsFml02eH_fgK5zqeA#TitleExpression.1091591615.1", "404 - Page Not Found");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(tradershub_Layouts_LayoutBlank_mvc_view, {
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(tradershub_Layouts_SignupLayoutTopMenu_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                HasLink: true
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
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                mainContent: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "color: #414652; font-size: 14px; margin-bottom: 0px; margin-right: 0px; margin-top: 0px; padding: 16px; text-align: center;"
                                        },
                                        gridProperties: {
                                            marginLeft: "0"
                                        },
                                        style: "main-container full-width",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "MainContainer"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "font-size: 24px; font-weight: bold;"
                                        },
                                        text: [$text(getTranslation("stOWzv_CDkKd6Bu+k37e7w#Value", "\n\nWe couldn’t find that page\n"))],
                                        _idProps: {
                                            service: idService,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), $text(getTranslation("Og0eU7daFE28e51Sg0JB6w#Value", "It may not be available in your country, or a broken link has brought you here.")), $text(getTranslation("qP+gusWZAEy3JrN6qtLweQ#Value", "We couldn’t find that page\nIt may not be available in your country, or a broken link has brought you here.\n\n")))];
                                })
                            },
                            _dependencies: []
                        })];
                    })
                },
                _dependencies: []
            }), $text(getTranslation("EzNNGKNDJkS1g44eYuUg0A#Value", "ton")));
        }
    }

    return View;
});
define("tradershub.Common.PageNotFound.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.Common.PageNotFound.mvc$translationsResources", "tradershub.Common.controller"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_Common_PageNotFound_mvc_TranslationsResources, tradershub_CommonController) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, tradershub_Common_PageNotFound_mvc_TranslationsResources);
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
                        return tradershub_CommonController.default.handleError(ex, this.callContext());
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


define("tradershub.Common.PageNotFound.mvc$translationsResources.fr-FR", [], function() {
    return {
        "EzNNGKNDJkS1g44eYuUg0A#Value": "ton",
        "qP+gusWZAEy3JrN6qtLweQ#Value": "Nous n\'avons pas pu trouver cette page. Elle n\'est peut-être pas disponible dans votre pays, ou un lien brisé vous a amené ici.",
        "Og0eU7daFE28e51Sg0JB6w#Value": "Il se peut qu\'il ne soit pas disponible dans votre pays, ou qu\'un lien brisé vous ait amené ici.",
        "stOWzv_CDkKd6Bu+k37e7w#Value": "Nous n\'avons pas pu trouver cette page",
        "UNSUqsFml02eH_fgK5zqeA#Title": "404 - Page non trouvée",
        "UNSUqsFml02eH_fgK5zqeA#TitleExpression.1091591615.1": "404 - Page non trouvée"
    };
});

define("tradershub.Common.PageNotFound.mvc$translationsResources", ["exports", "tradershub.Common.PageNotFound.mvc$translationsResources.fr-FR"], function(exports, tradershub_Common_PageNotFound_mvc_translationsResources_frFR) {
    return {
        "fr-FR": {
            "translations": tradershub_Common_PageNotFound_mvc_translationsResources_frFR,
            "isRTL": false
        }
    };
});