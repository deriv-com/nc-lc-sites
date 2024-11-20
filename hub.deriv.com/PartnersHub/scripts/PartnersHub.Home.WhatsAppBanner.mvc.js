define("PartnersHub.Home.WhatsAppBanner.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "CustomComponentsOfficial.ButtonVariants.PrimaryButton.mvc$model", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "PartnersHub.controller$RedirectToExternalNewTab"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvcModel) {
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

define("PartnersHub.Home.WhatsAppBanner.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Home.WhatsAppBanner.mvc$model", "PartnersHub.Home.WhatsAppBanner.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "CustomComponentsOfficial.ButtonVariants.PrimaryButton.mvc$view", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "PartnersHub.controller$RedirectToExternalNewTab"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_Home_WhatsAppBanner_mvc_model, PartnersHub_Home_WhatsAppBanner_mvc_controller, PartnersHubClientVariables, OSWidgets, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view) {
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
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Home.WhatsAppBanner.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view];
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
                animate: false,
                gridProperties: {
                    classes: "OSInline"
                },
                style: "whatsapp-banner-container",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "WhatsappSection"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                style: "banner-description",
                text: [$text(getTranslation("KglJHT9r9U+AN_RNe7PMbw#Value", "WhatsApp updates exclusively for Partners"))],
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Image, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.phone2501.png"),
                style: "phone-image",
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    title: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1", "Join Now")
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onClick$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.onClickJoinNow$Action(controller.callContext(eventHandlerContext));

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
            })));
        }
    }

    return View;
});
define("PartnersHub.Home.WhatsAppBanner.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Home.WhatsAppBanner.mvc$translationsResources", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "PartnersHub.controller$RedirectToExternalNewTab"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Home_WhatsAppBanner_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Home_WhatsAppBanner_mvc_TranslationsResources);
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
            get _onClickJoinNow$Action() {
                if (!(this.hasOwnProperty("__onClickJoinNow$Action"))) {
                    this.__onClickJoinNow$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickJoinNow", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickJoinNow");
                                span.setAttribute("outsystems.function.key", "e524bd03-1380-4a32-a549-a330b0d629f1");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickJoinNow");
                                callContext = controller.callContext(callContext);
                                // Execute Action: RudderstackTrackEvent
                                PartnersHubController.default.rudderstackTrackEvent$Action(function() {
                                    var rec = new PartnersHubModel.ST_23ff1d290ec4691b1c668ad437100cd0Structure();
                                    rec.actionAttr = "click_cta";
                                    rec.cta_nameAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1", "Join Now");
                                    rec.cta_placementAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("xmmB3QXapky_a843OQSiSw#Value.582033868.1", "whatsapp banner join now button");
                                    return rec;
                                }(), "ce_partnershub_form", callContext);
                                // Execute Action: RedirectToExternalNewTab
                                PartnersHubController.default.redirectToExternalNewTab$Action("https://www.whatsapp.com/channel/0029VajV7cY8fewr35BOkF06", callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickJoinNow$Action;
            }
            set _onClickJoinNow$Action(value) {
                this.__onClickJoinNow$Action = value;
            }


            onClickJoinNow$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickJoinNow__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickJoinNow");
                        span.setAttribute("outsystems.function.key", "e524bd03-1380-4a32-a549-a330b0d629f1");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickJoinNow$Action, callContext);
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


define("PartnersHub.Home.WhatsAppBanner.mvc$translationsResources.ar-001", [], function() {
    return {
        "hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1": "انضم الآن",
        "KglJHT9r9U+AN_RNe7PMbw#Value": "تحديثات حصرية للشركاء على الواتساب",
        "xmmB3QXapky_a843OQSiSw#Value.582033868.1": "زر الانضمام الآن في لافتة واتساب",
        "PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1": "انضم الآن"
    };
});

define("PartnersHub.Home.WhatsAppBanner.mvc$translationsResources.de-DE", [], function() {
    return {
        "hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1": "Jetzt beitreten",
        "KglJHT9r9U+AN_RNe7PMbw#Value": "WhatsApp-Updates exklusiv für Partner",
        "xmmB3QXapky_a843OQSiSw#Value.582033868.1": "WhatsApp-Banner Jetzt beitreten Button",
        "PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1": "Jetzt beitreten"
    };
});

define("PartnersHub.Home.WhatsAppBanner.mvc$translationsResources.es-ES", [], function() {
    return {
        "hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1": "Únete ahora",
        "KglJHT9r9U+AN_RNe7PMbw#Value": "Actualizaciones de WhatsApp exclusivamente para socios",
        "xmmB3QXapky_a843OQSiSw#Value.582033868.1": "Banner de WhatsApp Botón de unirse ahora",
        "PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1": "Únete ahora"
    };
});

define("PartnersHub.Home.WhatsAppBanner.mvc$translationsResources.fr-FR", [], function() {
    return {
        "hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1": "Rejoindre maintenant",
        "KglJHT9r9U+AN_RNe7PMbw#Value": "Mises à jour WhatsApp réservées aux partenaires",
        "xmmB3QXapky_a843OQSiSw#Value.582033868.1": "bouton rejoindre maintenant de de bannière WhatsApp",
        "PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1": "Rejoindre maintenant"
    };
});

define("PartnersHub.Home.WhatsAppBanner.mvc$translationsResources.it-IT", [], function() {
    return {
        "hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1": "Iscriviti ora",
        "KglJHT9r9U+AN_RNe7PMbw#Value": "Aggiornamenti WhatsApp esclusivamente per i partner",
        "xmmB3QXapky_a843OQSiSw#Value.582033868.1": "Banner di WhatsApp pulsante \"Unisciti ora\"",
        "PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1": "Iscriviti ora"
    };
});

define("PartnersHub.Home.WhatsAppBanner.mvc$translationsResources.pl-PL", [], function() {
    return {
        "hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1": "Dołącz teraz",
        "KglJHT9r9U+AN_RNe7PMbw#Value": "Aktualizacje WhatsApp wyłącznie dla partnerów",
        "xmmB3QXapky_a843OQSiSw#Value.582033868.1": "Baner WhatsApp Przycisk dołącz teraz",
        "PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1": "Dołącz teraz"
    };
});

define("PartnersHub.Home.WhatsAppBanner.mvc$translationsResources.pt-PT", [], function() {
    return {
        "hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1": "Adira já",
        "KglJHT9r9U+AN_RNe7PMbw#Value": "Atualizações do WhatsApp exclusivamente para parceiros",
        "xmmB3QXapky_a843OQSiSw#Value.582033868.1": "Banner do WhatsApp:Botão \"Adira já\"",
        "PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1": "Adira já"
    };
});

define("PartnersHub.Home.WhatsAppBanner.mvc$translationsResources.ru-RU", [], function() {
    return {
        "hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1": "Присоединиться сейчас",
        "KglJHT9r9U+AN_RNe7PMbw#Value": "Новости в WhatsApp только для партнеров",
        "xmmB3QXapky_a843OQSiSw#Value.582033868.1": "баннер WhatsApp кнопка присоединиться сейчас",
        "PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1": "Присоединиться сейчас"
    };
});

define("PartnersHub.Home.WhatsAppBanner.mvc$translationsResources", ["exports", "PartnersHub.Home.WhatsAppBanner.mvc$translationsResources.ar-001", "PartnersHub.Home.WhatsAppBanner.mvc$translationsResources.de-DE", "PartnersHub.Home.WhatsAppBanner.mvc$translationsResources.es-ES", "PartnersHub.Home.WhatsAppBanner.mvc$translationsResources.fr-FR", "PartnersHub.Home.WhatsAppBanner.mvc$translationsResources.it-IT", "PartnersHub.Home.WhatsAppBanner.mvc$translationsResources.pl-PL", "PartnersHub.Home.WhatsAppBanner.mvc$translationsResources.pt-PT", "PartnersHub.Home.WhatsAppBanner.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_Home_WhatsAppBanner_mvc_translationsResources_ar001, PartnersHub_Home_WhatsAppBanner_mvc_translationsResources_deDE, PartnersHub_Home_WhatsAppBanner_mvc_translationsResources_esES, PartnersHub_Home_WhatsAppBanner_mvc_translationsResources_frFR, PartnersHub_Home_WhatsAppBanner_mvc_translationsResources_itIT, PartnersHub_Home_WhatsAppBanner_mvc_translationsResources_plPL, PartnersHub_Home_WhatsAppBanner_mvc_translationsResources_ptPT, PartnersHub_Home_WhatsAppBanner_mvc_translationsResources_ruRU) {
    return {
        "ar-001": {
            "translations": PartnersHub_Home_WhatsAppBanner_mvc_translationsResources_ar001,
            "isRTL": true
        },
        "de-DE": {
            "translations": PartnersHub_Home_WhatsAppBanner_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_Home_WhatsAppBanner_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_Home_WhatsAppBanner_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_Home_WhatsAppBanner_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_Home_WhatsAppBanner_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_Home_WhatsAppBanner_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_Home_WhatsAppBanner_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});