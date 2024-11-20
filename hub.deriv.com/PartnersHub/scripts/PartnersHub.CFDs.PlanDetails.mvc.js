define("PartnersHub.CFDs.PlanDetails.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.Layouts.LayoutDashboard.mvc$model", "PartnersHub.Common.TitleBlock.mvc$model", "PartnersHub.CFDs.PlanDetailsTable.mvc$model"], function(OSRuntimeCore, PartnersHubModel, PartnersHub_Layouts_LayoutDashboard_mvcModel, PartnersHub_Common_TitleBlock_mvcModel, PartnersHub_CFDs_PlanDetailsTable_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Title", "titleIn", "Title", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("CommissionType", "commissionTypeIn", "CommissionType", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_commissionTypeInDataFetchStatus", "_commissionTypeInDataFetchStatus", "_commissionTypeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("PlanId", "planIdIn", "PlanId", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, false),
                    this.attr("_planIdInDataFetchStatus", "_planIdInDataFetchStatus", "_planIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("Note", "noteIn", "Note", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_noteInDataFetchStatus", "_noteInDataFetchStatus", "_noteInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("IsSubPlan", "isSubPlanIn", "IsSubPlan", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_isSubPlanInDataFetchStatus", "_isSubPlanInDataFetchStatus", "_isSubPlanInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false)
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
                Model._hasValidationWidgetsValue = ((PartnersHub_Layouts_LayoutDashboard_mvcModel.hasValidationWidgets || PartnersHub_Common_TitleBlock_mvcModel.hasValidationWidgets) || PartnersHub_CFDs_PlanDetailsTable_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {
            if ("Title" in inputs) {
                this.variables.titleIn = OS.DataConversion.ServerDataConverter.from(inputs.Title, OS.DataTypes.DataTypes.Text);
            }

            if ("CommissionType" in inputs) {
                this.variables.commissionTypeIn = OS.DataConversion.ServerDataConverter.from(inputs.CommissionType, OS.DataTypes.DataTypes.Text);
            }

            if ("PlanId" in inputs) {
                this.variables.planIdIn = OS.DataConversion.ServerDataConverter.from(inputs.PlanId, OS.DataTypes.DataTypes.Integer);
            }

            if ("Note" in inputs) {
                this.variables.noteIn = OS.DataConversion.ServerDataConverter.from(inputs.Note, OS.DataTypes.DataTypes.Text);
            }

            if ("IsSubPlan" in inputs) {
                this.variables.isSubPlanIn = OS.DataConversion.ServerDataConverter.from(inputs.IsSubPlan, OS.DataTypes.DataTypes.Boolean);
            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.CFDs.PlanDetails.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.CFDs.PlanDetails.mvc$model", "PartnersHub.CFDs.PlanDetails.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Layouts.LayoutDashboard.mvc$view", "@outsystems/runtime-widgets-js", "PartnersHub.Common.TitleBlock.mvc$view", "PartnersHub.CFDs.PlanDetailsTable.mvc$view"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_CFDs_PlanDetails_mvc_model, PartnersHub_CFDs_PlanDetails_mvc_controller, PartnersHubClientVariables, PartnersHub_Layouts_LayoutDashboard_mvc_view, OSWidgets, PartnersHub_Common_TitleBlock_mvc_view, PartnersHub_CFDs_PlanDetailsTable_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "CFDs.PlanDetails";
        }

        static getAttributes() {
            return {
                codeFunction: "PlanDetails",
                functionKey: "e1e7a077-5e8d-42ff-8c6b-8f67c70de48d",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.CFDs.PlanDetails.css", "css/PartnersHub.PHubTest.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [PartnersHub_Layouts_LayoutDashboard_mvc_view, PartnersHub_Common_TitleBlock_mvc_view, PartnersHub_CFDs_PlanDetailsTable_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_CFDs_PlanDetails_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_CFDs_PlanDetails_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("d6Dn4Y1e_0KMa49nxw3kjQ#Title", "PlanDetails");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(PartnersHub_Layouts_LayoutDashboard_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    HasFixedHeader: true
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
                    mainContent: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                className: "partners-hub-dashboard"
                            },
                            gridProperties: {
                                classes: "OSInline"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(PartnersHub_Common_TitleBlock_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                Title: model.variables.titleIn,
                                ShowPreviousButton: true
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                closeButtonAction$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.onClickCloseButton$Action(controller.callContext(eventHandlerContext));

                                    ;
                                },
                                backButtonAction$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.onClickBackButton$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "2",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: left;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Expression, {
                            style: "to-description",
                            value: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("aC4kQT+wFEeu8+08_0GxHw#ValueExpression.-1076200185.1", "All commission rates are quoted in USD, per round trade."),
                            _idProps: {
                                service: idService,
                                uuid: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(PartnersHub_CFDs_PlanDetailsTable_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                IsSubPlan: model.variables.isSubPlanIn,
                                CommissionType: model.variables.commissionTypeIn,
                                PlanId: model.variables.planIdIn
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
                                uuid: "5",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), React.createElement(OSWidgets.Expression, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "to-description",
                            value: model.variables.noteIn,
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.noteIn), asPrimitiveValue(model.variables.planIdIn), asPrimitiveValue(model.variables.commissionTypeIn), asPrimitiveValue(model.variables.isSubPlanIn), asPrimitiveValue(model.variables.titleIn)]
            }));
        }
    }

    return View;
});
define("PartnersHub.CFDs.PlanDetails.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.CFDs.PlanDetails.mvc$translationsResources", "PartnersHub.CFDs.controller"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_CFDs_PlanDetails_mvc_TranslationsResources, PartnersHub_CFDsController) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_CFDs_PlanDetails_mvc_TranslationsResources);
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
            get _onClickBackButton$Action() {
                if (!(this.hasOwnProperty("__onClickBackButton$Action"))) {
                    this.__onClickBackButton$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickBackButton", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickBackButton");
                                span.setAttribute("outsystems.function.key", "38bd2f3f-1c7f-4fb6-949c-e0cc5067fa9a");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickBackButton");
                                callContext = controller.callContext(callContext);
                                // Destination: (PreviousScreen)
                                return OS.Navigation.navigateBack(OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.None), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickBackButton$Action;
            }
            set _onClickBackButton$Action(value) {
                this.__onClickBackButton$Action = value;
            }

            get _onClickCloseButton$Action() {
                if (!(this.hasOwnProperty("__onClickCloseButton$Action"))) {
                    this.__onClickCloseButton$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickCloseButton", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickCloseButton");
                                span.setAttribute("outsystems.function.key", "a37f280f-a34d-4717-839f-994f1555bfd3");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickCloseButton");
                                callContext = controller.callContext(callContext);
                                // Destination: /PartnersHub/PartnersHubDashboard
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "PartnersHubDashboard", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.None), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickCloseButton$Action;
            }
            set _onClickCloseButton$Action(value) {
                this.__onClickCloseButton$Action = value;
            }


            onClickBackButton$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickBackButton__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickBackButton");
                        span.setAttribute("outsystems.function.key", "38bd2f3f-1c7f-4fb6-949c-e0cc5067fa9a");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickBackButton$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onClickCloseButton$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickCloseButton__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickCloseButton");
                        span.setAttribute("outsystems.function.key", "a37f280f-a34d-4717-839f-994f1555bfd3");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickCloseButton$Action, callContext);
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
                        return PartnersHub_CFDsController.default.handleError(ex, this.callContext());
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


define("PartnersHub.CFDs.PlanDetails.mvc$translationsResources.ar-001", [], function() {
    return {
        "aC4kQT+wFEeu8+08_0GxHw#ValueExpression.-1076200185.1": "يتم عرض جميع معدلات العمولة بالدولار الأمريكي لكل صفقة كاملة"
    };
});

define("PartnersHub.CFDs.PlanDetails.mvc$translationsResources.de-DE", [], function() {
    return {
        "aC4kQT+wFEeu8+08_0GxHw#ValueExpression.-1076200185.1": "Alle Provisionssätze werden in USD pro Round-Trade angegeben"
    };
});

define("PartnersHub.CFDs.PlanDetails.mvc$translationsResources.es-ES", [], function() {
    return {
        "aC4kQT+wFEeu8+08_0GxHw#ValueExpression.-1076200185.1": "Todas las tasas de comisión se cotizan en USD, por operación redonda"
    };
});

define("PartnersHub.CFDs.PlanDetails.mvc$translationsResources.fr-FR", [], function() {
    return {
        "aC4kQT+wFEeu8+08_0GxHw#ValueExpression.-1076200185.1": "Tous les taux de commission sont indiqués en USD, par transaction aller-retour"
    };
});

define("PartnersHub.CFDs.PlanDetails.mvc$translationsResources.it-IT", [], function() {
    return {
        "aC4kQT+wFEeu8+08_0GxHw#ValueExpression.-1076200185.1": "Tutte le commissioni sono espresse in USD, per operazione completa"
    };
});

define("PartnersHub.CFDs.PlanDetails.mvc$translationsResources.pl-PL", [], function() {
    return {
        "aC4kQT+wFEeu8+08_0GxHw#ValueExpression.-1076200185.1": "Wszystkie stawki prowizji są podane w USD za ukończoną operację"
    };
});

define("PartnersHub.CFDs.PlanDetails.mvc$translationsResources.pt-PT", [], function() {
    return {
        "aC4kQT+wFEeu8+08_0GxHw#ValueExpression.-1076200185.1": "Todas as taxas de comissão são cotadas em USD, por transação completa"
    };
});

define("PartnersHub.CFDs.PlanDetails.mvc$translationsResources.ru-RU", [], function() {
    return {
        "aC4kQT+wFEeu8+08_0GxHw#ValueExpression.-1076200185.1": "Все комиссии указаны в USD за полный цикл сделки."
    };
});

define("PartnersHub.CFDs.PlanDetails.mvc$translationsResources", ["exports", "PartnersHub.CFDs.PlanDetails.mvc$translationsResources.ar-001", "PartnersHub.CFDs.PlanDetails.mvc$translationsResources.de-DE", "PartnersHub.CFDs.PlanDetails.mvc$translationsResources.es-ES", "PartnersHub.CFDs.PlanDetails.mvc$translationsResources.fr-FR", "PartnersHub.CFDs.PlanDetails.mvc$translationsResources.it-IT", "PartnersHub.CFDs.PlanDetails.mvc$translationsResources.pl-PL", "PartnersHub.CFDs.PlanDetails.mvc$translationsResources.pt-PT", "PartnersHub.CFDs.PlanDetails.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_CFDs_PlanDetails_mvc_translationsResources_ar001, PartnersHub_CFDs_PlanDetails_mvc_translationsResources_deDE, PartnersHub_CFDs_PlanDetails_mvc_translationsResources_esES, PartnersHub_CFDs_PlanDetails_mvc_translationsResources_frFR, PartnersHub_CFDs_PlanDetails_mvc_translationsResources_itIT, PartnersHub_CFDs_PlanDetails_mvc_translationsResources_plPL, PartnersHub_CFDs_PlanDetails_mvc_translationsResources_ptPT, PartnersHub_CFDs_PlanDetails_mvc_translationsResources_ruRU) {
    return {
        "ar-001": {
            "translations": PartnersHub_CFDs_PlanDetails_mvc_translationsResources_ar001,
            "isRTL": true
        },
        "de-DE": {
            "translations": PartnersHub_CFDs_PlanDetails_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_CFDs_PlanDetails_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_CFDs_PlanDetails_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_CFDs_PlanDetails_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_CFDs_PlanDetails_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_CFDs_PlanDetails_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_CFDs_PlanDetails_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});