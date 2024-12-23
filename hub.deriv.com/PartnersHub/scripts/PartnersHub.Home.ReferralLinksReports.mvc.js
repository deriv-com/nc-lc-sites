define("PartnersHub.Home.ReferralLinksReports.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "CustomComponentsOfficial.ButtonVariants.PrimaryButton.mvc$model", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvcModel) {
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
                Model._hasValidationWidgetsValue = CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvcModel.hasValidationWidgets;
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Home.ReferralLinksReports.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Home.ReferralLinksReports.mvc$model", "PartnersHub.Home.ReferralLinksReports.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "CustomComponentsOfficial.ButtonVariants.PrimaryButton.mvc$view", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_Home_ReferralLinksReports_mvc_model, PartnersHub_Home_ReferralLinksReports_mvc_controller, PartnersHubClientVariables, OSWidgets, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Home.ReferralLinksReports";
        }

        static getAttributes() {
            return {
                codeFunction: "ReferralLinksReports",
                functionKey: "14185b0f-a933-423b-ae2c-38067830aa85",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Home.ReferralLinksReports.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Home_ReferralLinksReports_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Home_ReferralLinksReports_mvc_controller;
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
                    style: "background: var(--Neutral-Neutral-1, #F8F9FA); border: 1px solid var(--Neutral-Neutral-2, #F1F3F5); border-radius: 8px; display: flex; gap: 16px; padding: 16px;"
                },
                style: "referral-links-reports",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: bold; padding: 0px 10px 0px 0px;"
                },
                text: [$text(getTranslation("J5lNcrQnik2aXzdyKncEuA#Value", "Access your referral links and reports"))],
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    borderRadius: "100px",
                    class: "referral-links-reports__button",
                    title: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("sVTo9kryAEepay7RxEd2MA#Value.1524116574.1", "Open dashboard")
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onClick$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.openDashboardOnClick$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                _validationProps: {
                    validationService: validationService
                },
                _idProps: {
                    service: idService,
                    uuid: "3",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }))));
        }
    }

    return View;
});
define("PartnersHub.Home.ReferralLinksReports.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Home.ReferralLinksReports.mvc$translationsResources", "PartnersHub.Home.ReferralLinksReports.mvc$controller.OpenDashboardOnClick.JavaScript1JS", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Home_ReferralLinksReports_mvc_TranslationsResources, PartnersHub_Home_ReferralLinksReports_mvc_controller_OpenDashboardOnClick_JavaScript1JS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Home_ReferralLinksReports_mvc_TranslationsResources);
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
            get _openDashboardOnClick$Action() {
                if (!(this.hasOwnProperty("__openDashboardOnClick$Action"))) {
                    this.__openDashboardOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OpenDashboardOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OpenDashboardOnClick");
                                span.setAttribute("outsystems.function.key", "488cfb74-db54-422f-af82-92748ec9c8ec");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OpenDashboardOnClick");
                                callContext = controller.callContext(callContext);
                                // Execute Action: RudderstackTrackEvent
                                PartnersHubController.default.rudderstackTrackEvent$Action(function() {
                                    var rec = new PartnersHubModel.ST_23ff1d290ec4691b1c668ad437100cd0Structure();
                                    rec.actionAttr = "click_cta";
                                    rec.cta_nameAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("lpEobJwz70WribG+jUqf7g#Value.1524116574.1", "Open dashboard");
                                    rec.cta_placementAttr = "referral link report section";
                                    return rec;
                                }(), "ce_partnershub_form", callContext);
                                OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "JavaScript1");
                                        span.setAttribute("outsystems.function.key", "e3701746-0dc3-495a-a017-76f77ceee82f");
                                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(PartnersHub_Home_ReferralLinksReports_mvc_controller_OpenDashboardOnClick_JavaScript1JS, "JavaScript1", "OpenDashboardOnClick", {
                                            website_platform_url: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getWebsitePlatformUrl(), OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {}, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__openDashboardOnClick$Action;
            }
            set _openDashboardOnClick$Action(value) {
                this.__openDashboardOnClick$Action = value;
            }


            openDashboardOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OpenDashboardOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OpenDashboardOnClick");
                        span.setAttribute("outsystems.function.key", "488cfb74-db54-422f-af82-92748ec9c8ec");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._openDashboardOnClick$Action, callContext);
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

define("PartnersHub.Home.ReferralLinksReports.mvc$controller.OpenDashboardOnClick.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        window.open($parameters.website_platform_url, '_blank')
    };
});


define("PartnersHub.Home.ReferralLinksReports.mvc$translationsResources.ar-001", [], function() {
    return {
        "sVTo9kryAEepay7RxEd2MA#Value.1524116574.1": "افتح لوحة التحكم",
        "J5lNcrQnik2aXzdyKncEuA#Value": "الوصول إلى روابط الإحالة والتقارير",
        "lpEobJwz70WribG+jUqf7g#Value.1524116574.1": "افتح لوحة التحكم"
    };
});

define("PartnersHub.Home.ReferralLinksReports.mvc$translationsResources.de-DE", [], function() {
    return {
        "sVTo9kryAEepay7RxEd2MA#Value.1524116574.1": "Dashboard öffnen",
        "J5lNcrQnik2aXzdyKncEuA#Value": "Zugriff auf Ihre Empfehlungslinks und Berichte",
        "lpEobJwz70WribG+jUqf7g#Value.1524116574.1": "Dashboard öffnen"
    };
});

define("PartnersHub.Home.ReferralLinksReports.mvc$translationsResources.es-ES", [], function() {
    return {
        "sVTo9kryAEepay7RxEd2MA#Value.1524116574.1": "Abrir el panel",
        "J5lNcrQnik2aXzdyKncEuA#Value": "Mis enlaces de referencia y reportes",
        "lpEobJwz70WribG+jUqf7g#Value.1524116574.1": "Abrir el panel"
    };
});

define("PartnersHub.Home.ReferralLinksReports.mvc$translationsResources.fr-FR", [], function() {
    return {
        "sVTo9kryAEepay7RxEd2MA#Value.1524116574.1": "Ouvrir le tableau de bord",
        "J5lNcrQnik2aXzdyKncEuA#Value": "Accéder à vos liens de parrainage et rapports",
        "lpEobJwz70WribG+jUqf7g#Value.1524116574.1": "Ouvrir le tableau de bord"
    };
});

define("PartnersHub.Home.ReferralLinksReports.mvc$translationsResources.it-IT", [], function() {
    return {
        "sVTo9kryAEepay7RxEd2MA#Value.1524116574.1": "Apri la dashboard",
        "J5lNcrQnik2aXzdyKncEuA#Value": "I miei link di referral e report",
        "lpEobJwz70WribG+jUqf7g#Value.1524116574.1": "Apri la dashboard"
    };
});

define("PartnersHub.Home.ReferralLinksReports.mvc$translationsResources.pl-PL", [], function() {
    return {
        "sVTo9kryAEepay7RxEd2MA#Value.1524116574.1": "Otwórz pulpit",
        "J5lNcrQnik2aXzdyKncEuA#Value": "Moje linki polecające i raporty",
        "lpEobJwz70WribG+jUqf7g#Value.1524116574.1": "Otwórz pulpit"
    };
});

define("PartnersHub.Home.ReferralLinksReports.mvc$translationsResources.pt-PT", [], function() {
    return {
        "sVTo9kryAEepay7RxEd2MA#Value.1524116574.1": "Abrir o painel",
        "J5lNcrQnik2aXzdyKncEuA#Value": "Os meus links de referência e relatórios",
        "lpEobJwz70WribG+jUqf7g#Value.1524116574.1": "Abrir o painel"
    };
});

define("PartnersHub.Home.ReferralLinksReports.mvc$translationsResources.ru-RU", [], function() {
    return {
        "sVTo9kryAEepay7RxEd2MA#Value.1524116574.1": "Открыть кабинет",
        "J5lNcrQnik2aXzdyKncEuA#Value": "Доступ к вашим реферальным ссылкам и отчетам",
        "lpEobJwz70WribG+jUqf7g#Value.1524116574.1": "Открыть кабинет"
    };
});

define("PartnersHub.Home.ReferralLinksReports.mvc$translationsResources", ["exports", "PartnersHub.Home.ReferralLinksReports.mvc$translationsResources.ar-001", "PartnersHub.Home.ReferralLinksReports.mvc$translationsResources.de-DE", "PartnersHub.Home.ReferralLinksReports.mvc$translationsResources.es-ES", "PartnersHub.Home.ReferralLinksReports.mvc$translationsResources.fr-FR", "PartnersHub.Home.ReferralLinksReports.mvc$translationsResources.it-IT", "PartnersHub.Home.ReferralLinksReports.mvc$translationsResources.pl-PL", "PartnersHub.Home.ReferralLinksReports.mvc$translationsResources.pt-PT", "PartnersHub.Home.ReferralLinksReports.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_Home_ReferralLinksReports_mvc_translationsResources_ar001, PartnersHub_Home_ReferralLinksReports_mvc_translationsResources_deDE, PartnersHub_Home_ReferralLinksReports_mvc_translationsResources_esES, PartnersHub_Home_ReferralLinksReports_mvc_translationsResources_frFR, PartnersHub_Home_ReferralLinksReports_mvc_translationsResources_itIT, PartnersHub_Home_ReferralLinksReports_mvc_translationsResources_plPL, PartnersHub_Home_ReferralLinksReports_mvc_translationsResources_ptPT, PartnersHub_Home_ReferralLinksReports_mvc_translationsResources_ruRU) {
    return {
        "ar-001": {
            "translations": PartnersHub_Home_ReferralLinksReports_mvc_translationsResources_ar001,
            "isRTL": true
        },
        "de-DE": {
            "translations": PartnersHub_Home_ReferralLinksReports_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_Home_ReferralLinksReports_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_Home_ReferralLinksReports_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_Home_ReferralLinksReports_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_Home_ReferralLinksReports_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_Home_ReferralLinksReports_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_Home_ReferralLinksReports_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});