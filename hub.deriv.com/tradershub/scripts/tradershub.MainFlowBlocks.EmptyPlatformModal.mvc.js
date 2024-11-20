define("tradershub.MainFlowBlocks.EmptyPlatformModal.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "SharedUtilities.controller", "SharedUtilities.controller$GetURL", "tradershub.referencesHealth", "tradershub.referencesHealth$SharedUtilities"], function(OSRuntimeCore, tradershubModel, SharedUtilitiesController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IsNotResident", "isNotResidentVar", "IsNotResident", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("IsVisible", "isVisibleIn", "IsVisible", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            return {
                CheckIcon2: OS.Model.ValidationWidgetRecord
            };
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
            return true;
        }
        setInputs(inputs) {
            if ("IsVisible" in inputs) {
                this.variables.isVisibleIn = inputs.IsVisible;
                if ("_isVisibleInDataFetchStatus" in inputs) {
                    this.variables._isVisibleInDataFetchStatus = inputs._isVisibleInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.MainFlowBlocks.EmptyPlatformModal.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "SharedUtilities.controller", "react", "@outsystems/runtime-view-js", "tradershub.MainFlowBlocks.EmptyPlatformModal.mvc$model", "tradershub.MainFlowBlocks.EmptyPlatformModal.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js", "SharedUtilities.controller$GetURL", "tradershub.referencesHealth", "tradershub.referencesHealth$SharedUtilities"], function(OSRuntimeCore, tradershubModel, tradershubController, SharedUtilitiesController, React, OSView, tradershub_MainFlowBlocks_EmptyPlatformModal_mvc_model, tradershub_MainFlowBlocks_EmptyPlatformModal_mvc_controller, tradershubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "MainFlowBlocks.EmptyPlatformModal";
        }

        static getAttributes() {
            return {
                codeFunction: "EmptyPlatformModal",
                functionKey: "dc896ad6-cd1f-435c-b7c6-619c689b851f",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.MainFlowBlocks.EmptyPlatformModal.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return tradershub_MainFlowBlocks_EmptyPlatformModal_mvc_model;
        }

        get controllerFactory() {
            return tradershub_MainFlowBlocks_EmptyPlatformModal_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Popup, {
                extendedProperties: {
                    style: "padding: 0px; width: 368px;"
                },
                showPopup: model.variables.isVisibleIn,
                style: "\"popup-dialog\"",
                _idProps: {
                    service: idService,
                    name: "EmptyPlatformModal"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                showPopup_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isVisibleInDataFetchStatus)
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "padding: 24px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                style: "restricted-country-popup-dialog",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "display-flex align-items-center justify-content-space-between",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "ModalHeader"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "color: #101213; font-size: 18px; font-weight: bold;"
                },
                text: [$text(getTranslation("qGjnvT+9xUuk9yM3JkK5SA#Value", "Warning"))],
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.derivComRedirection$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                style: "display-flex align-items-center justify-content-center",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Image, {
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "margin: 16px 0;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    name: "content3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                extendedProperties: {
                    style: "color: #101213; font-size: 16px;"
                },
                value: ((("According to our policy, we do not provide services to residents or entities based in" + " ") + tradershubClientVariables.getClientCountryText()) + "."),
                _idProps: {
                    service: idService,
                    name: "FirstParagraph3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "margin-top: 24px;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    name: "SecondParagraph3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                extendedProperties: {
                    style: "color: #101213; font-size: 16px;"
                },
                value: (("If you are not a resident of " + tradershubClientVariables.getClientCountryText()) + ", you may proceed."),
                _idProps: {
                    service: idService,
                    name: "paragraph3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "display-flex align-items-center gap-s checkbox-container",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Checkbox2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Checkbox, {
                _validationProps: {
                    validationService: validationService
                },
                enabled: true,
                style: "checkbox",
                variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, model.variables.isNotResidentVar, function(value) {
                    model.variables.isNotResidentVar = value;
                }),
                _idProps: {
                    service: idService,
                    name: "CheckIcon2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Label, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: "cursor-pointer",
                targetWidget: "CheckIcon2",
                _idProps: {
                    service: idService,
                    uuid: "12"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                extendedProperties: {
                    style: "color: #272B30;"
                },
                value: (("I confirm that I am not a resident of " + tradershubClientVariables.getClientCountryText()) + "."),
                _idProps: {
                    service: idService,
                    uuid: "13"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), React.createElement(OSWidgets.Button, {
                enabled: model.variables.isNotResidentVar,
                extendedProperties: {
                    style: "margin-top: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                isDefault: false,
                onClick: function() {
                    return Promise.resolve().then(function() {
                        var eventHandlerContext = callContext.clone();
                        return controller.triggerCloseEvent$Action(controller.callContext(eventHandlerContext));
                    });;
                },
                style: "btn btn-primary",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "14"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 14px;"
                },
                text: [$text(getTranslation("+ueTxt0iAUm452+bk52Vpg#Value", "Proceed"))],
                _idProps: {
                    service: idService,
                    uuid: "15"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })))));
        }
    }

    return View;
});
define("tradershub.MainFlowBlocks.EmptyPlatformModal.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "SharedUtilities.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.MainFlowBlocks.EmptyPlatformModal.mvc$translationsResources", "SharedUtilities.controller$GetURL", "tradershub.referencesHealth", "tradershub.referencesHealth$SharedUtilities"], function(OSRuntimeCore, tradershubModel, tradershubController, SharedUtilitiesController, tradershubLanguageResources, tradershubClientVariables, tradershub_MainFlowBlocks_EmptyPlatformModal_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, tradershub_MainFlowBlocks_EmptyPlatformModal_mvc_TranslationsResources);
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
            get _triggerCloseEvent$Action() {
                if (!(this.hasOwnProperty("__triggerCloseEvent$Action"))) {
                    this.__triggerCloseEvent$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("TriggerCloseEvent", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "TriggerCloseEvent");
                                span.setAttribute("outsystems.function.key", "74c7e7bb-ca6f-420e-8702-dc2dc05d3440");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("TriggerCloseEvent");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Trigger Event: OnCloseClick
                                    return controller.onCloseClick$Action(callContext);
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    };
                }

                return this.__triggerCloseEvent$Action;
            }
            set _triggerCloseEvent$Action(value) {
                this.__triggerCloseEvent$Action = value;
            }

            get _derivComRedirection$Action() {
                if (!(this.hasOwnProperty("__derivComRedirection$Action"))) {
                    this.__derivComRedirection$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("DerivComRedirection", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "DerivComRedirection");
                                span.setAttribute("outsystems.function.key", "f98a86ee-9b31-485b-9794-af1be9cdb7a4");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("DerivComRedirection");
                                callContext = controller.callContext(callContext);
                                var getURLVar = new OS.DataTypes.VariableHolder();
                                // Execute Action: GetURL
                                getURLVar.value = SharedUtilitiesController.default.getURL$Action(callContext);

                                // Destination: /tradershub/
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(getURLVar.value.derivComProductionOut, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__derivComRedirection$Action;
            }
            set _derivComRedirection$Action(value) {
                this.__derivComRedirection$Action = value;
            }


            triggerCloseEvent$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("TriggerCloseEvent__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "TriggerCloseEvent");
                        span.setAttribute("outsystems.function.key", "74c7e7bb-ca6f-420e-8702-dc2dc05d3440");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._triggerCloseEvent$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            derivComRedirection$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("DerivComRedirection__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "DerivComRedirection");
                        span.setAttribute("outsystems.function.key", "f98a86ee-9b31-485b-9794-af1be9cdb7a4");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._derivComRedirection$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            get onCloseClick$Action() {
                if (!(this.hasOwnProperty("_onCloseClick$Action"))) {
                    this._onCloseClick$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._onCloseClick$Action;
            }
            set onCloseClick$Action(value) {
                this._onCloseClick$Action = value;
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


define("tradershub.MainFlowBlocks.EmptyPlatformModal.mvc$translationsResources.fr-FR", [], function() {
    return {
        "+ueTxt0iAUm452+bk52Vpg#Value": "Procéder",
        "qGjnvT+9xUuk9yM3JkK5SA#Value": "Avertissement"
    };
});

define("tradershub.MainFlowBlocks.EmptyPlatformModal.mvc$translationsResources", ["exports", "tradershub.MainFlowBlocks.EmptyPlatformModal.mvc$translationsResources.fr-FR"], function(exports, tradershub_MainFlowBlocks_EmptyPlatformModal_mvc_translationsResources_frFR) {
    return {
        "fr-FR": {
            "translations": tradershub_MainFlowBlocks_EmptyPlatformModal_mvc_translationsResources_frFR,
            "isRTL": false
        }
    };
});