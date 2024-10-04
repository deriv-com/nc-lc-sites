define("tradershub.WalletBlocks.WalletCashierHeader.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "SharedUtilities.controller", "tradershub.controller", "SharedUtilities.controller$FormatMoney", "tradershub.referencesHealth", "tradershub.referencesHealth$SharedUtilities", "tradershub.model$EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecord", "tradershub.model$RL_7f0ff0d0a70a4e41424efbf5ef899b8d", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure", "tradershub.controller$SendAuthorize", "tradershub.controller$GetCurrencyIcon"], function(OSRuntimeCore, tradershubModel, SharedUtilitiesController, tradershubController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Icon", "iconVar", "Icon", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("Currency", "currencyVar", "Currency", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("Balance", "balanceVar", "Balance", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
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
            return false;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.WalletBlocks.WalletCashierHeader.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "SharedUtilities.controller", "react", "@outsystems/runtime-view-js", "tradershub.WalletBlocks.WalletCashierHeader.mvc$model", "tradershub.WalletBlocks.WalletCashierHeader.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js", "SharedUtilities.controller$FormatMoney", "tradershub.referencesHealth", "tradershub.referencesHealth$SharedUtilities", "tradershub.model$EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecord", "tradershub.model$RL_7f0ff0d0a70a4e41424efbf5ef899b8d", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure", "tradershub.controller$SendAuthorize", "tradershub.controller$GetCurrencyIcon"], function(OSRuntimeCore, tradershubModel, tradershubController, SharedUtilitiesController, React, OSView, tradershub_WalletBlocks_WalletCashierHeader_mvc_model, tradershub_WalletBlocks_WalletCashierHeader_mvc_controller, tradershubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "WalletBlocks.WalletCashierHeader";
        }

        static getAttributes() {
            return {
                codeFunction: "WalletCashierHeader",
                functionKey: "db31b58d-787e-4a06-ae6d-6087868a7467",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
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
            return tradershub_WalletBlocks_WalletCashierHeader_mvc_model;
        }

        get controllerFactory() {
            return tradershub_WalletBlocks_WalletCashierHeader_mvc_controller;
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
                    style: "border-radius: 8px; padding-bottom: 12px; padding-left: var(--space-base); padding-right: var(--space-base); padding-top: 12px;"
                },
                style: "display-flex align-items-center justify-content-space-between gap-s full-width background-neutral-1",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "MainContainer"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Image, {
                gridProperties: {
                    width: "32px"
                },
                type: /*External*/ 1,
                url: model.variables.iconVar,
                _idProps: {
                    service: idService,
                    name: "WalletCashierHeaderIcon"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Expression, {
                gridProperties: {
                    marginLeft: "0"
                },
                style: "font-bold font-size-s",
                value: (model.variables.currencyVar + " Wallet"),
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Expression, {
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                style: "font-size-s font-bold flex-1 text-align-right",
                value: model.variables.balanceVar,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })));
        }
    }

    return View;
});
define("tradershub.WalletBlocks.WalletCashierHeader.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "SharedUtilities.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.WalletBlocks.WalletCashierHeader.mvc$controller.OnReady.GetIconJS", "SharedUtilities.controller$FormatMoney", "tradershub.referencesHealth", "tradershub.referencesHealth$SharedUtilities", "tradershub.model$EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecord", "tradershub.model$RL_7f0ff0d0a70a4e41424efbf5ef899b8d", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure", "tradershub.controller$SendAuthorize", "tradershub.controller$GetCurrencyIcon"], function(OSRuntimeCore, tradershubModel, tradershubController, SharedUtilitiesController, tradershubLanguageResources, tradershubClientVariables, tradershub_WalletBlocks_WalletCashierHeader_mvc_controller_OnReady_GetIconJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {};
                this.dataFetchDependentsGraph = {};
                this.shouldSendClientVarsToDataSources = false;
            }

            // Server Actions - Methods
            get currenciesList$ServerAction() {
                if (!(this.hasOwnProperty("_currenciesList$ServerAction"))) {
                    this._currenciesList$ServerAction = function(callContext) {
                        var controller = this.controller;
                        return OS.Logger.startActiveSpan("CurrenciesList", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "CurrenciesList");
                                span.setAttribute("outsystems.function.key", "f15c4591-9739-418f-bc8d-14d275e849d1");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
                            }

                            return OS.Flow.tryFinally(function() {
                                return controller.callServerAction("CurrenciesList", "screenservices/tradershub/WalletBlocks/WalletCashierHeader/ActionCurrenciesList", "psznQM4XSL63xbToINuQZw", {}, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("tradershub.WalletBlocks.WalletCashierHeader$ActionCurrenciesList"))();
                                    executeServerActionResult.currenciesListOut = OS.DataConversion.ServerDataConverter.from(outputs.CurrenciesList, tradershubModel.RL_7f0ff0d0a70a4e41424efbf5ef899b8d);
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

                return this._currenciesList$ServerAction;
            }
            set currenciesList$ServerAction(value) {
                this._currenciesList$ServerAction = value;
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
                                span.setAttribute("outsystems.function.key", "aa315fdb-b60f-4e25-80e8-48027bd62ba6");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var currenciesListVar = new OS.DataTypes.VariableHolder();
                                var formatMoneyVar = new OS.DataTypes.VariableHolder();
                                var sendAuthorizeVar = new OS.DataTypes.VariableHolder();
                                var getIconJSResult = new OS.DataTypes.VariableHolder();
                                var jSONSerializeCurrenciesListVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: SendAuthorize
                                    model.flush();
                                    return tradershubController.default.sendAuthorize$Action(false, callContext).then(function(value) {
                                        sendAuthorizeVar.value = value;
                                    }).then(function() {
                                        // Execute Action: FormatMoney
                                        formatMoneyVar.value = SharedUtilitiesController.default.formatMoney$Action(OS.BuiltinFunctions.longIntegerToText(sendAuthorizeVar.value.responseOut.authorizeAttr.balanceAttr), sendAuthorizeVar.value.responseOut.authorizeAttr.currencyAttr, "en-US", "", callContext);

                                        // Execute Action: CurrenciesList
                                        model.flush();
                                        return controller.currenciesList$ServerAction(callContext).then(function(value) {
                                            currenciesListVar.value = value;
                                        });
                                    }).then(function() {
                                        // JSON Serialize: JSONSerializeCurrenciesList
                                        jSONSerializeCurrenciesListVar.value.jSONOut = OS.JSONUtils.serializeToJSON(currenciesListVar.value.currenciesListOut, false, false);
                                        getIconJSResult.value = OS.Logger.startActiveSpan("GetIcon", function(span) {
                                            if (span) {
                                                span.setAttribute("code.function", "GetIcon");
                                                span.setAttribute("outsystems.function.key", "29bba0fe-f615-4442-a0f8-1284a1bce55a");
                                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                            }

                                            try {
                                                return controller.safeExecuteJSNode(tradershub_WalletBlocks_WalletCashierHeader_mvc_controller_OnReady_GetIconJS, "GetIcon", "OnReady", {
                                                    CurrencyList: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeCurrenciesListVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                    Currency: OS.DataConversion.JSNodeParamConverter.to(sendAuthorizeVar.value.responseOut.authorizeAttr.currencyAttr, OS.DataTypes.DataTypes.Text),
                                                    Icon: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                                }, function($parameters) {
                                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.WalletBlocks.WalletCashierHeader.OnReady$getIconJSResult"))();
                                                    jsNodeResult.iconOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Icon, OS.DataTypes.DataTypes.Text);
                                                    return jsNodeResult;
                                                }, {
                                                    GetCurrencyIcon: tradershubController.default.clientActionProxies.getCurrencyIcon$Action
                                                }, {});
                                            } finally {
                                                if (span) {
                                                    span.end();
                                                }

                                            }

                                        }, 1);
                                        // Icon = GetIcon.Icon
                                        model.variables.iconVar = getIconJSResult.value.iconOut;
                                        // Balance = FormatMoney.FormattedNumber
                                        model.variables.balanceVar = formatMoneyVar.value.formattedNumberOut;
                                        // Currency = SendAuthorize.Response.Authorize.Currency
                                        model.variables.currencyVar = sendAuthorizeVar.value.responseOut.authorizeAttr.currencyAttr;
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
                        span.setAttribute("outsystems.function.key", "aa315fdb-b60f-4e25-80e8-48027bd62ba6");
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
        Controller.registerVariableGroupType("tradershub.WalletBlocks.WalletCashierHeader$ActionCurrenciesList", [{
            name: "CurrenciesList",
            attrName: "currenciesListOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.RecordList,
            defaultValue: function() {
                return new tradershubModel.RL_7f0ff0d0a70a4e41424efbf5ef899b8d();
            },
            complexType: tradershubModel.RL_7f0ff0d0a70a4e41424efbf5ef899b8d
        }]);

        // Client Actions - Variables
        Controller.registerVariableGroupType("tradershub.WalletBlocks.WalletCashierHeader.OnReady$getIconJSResult", [{
            name: "Icon",
            attrName: "iconOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.WalletBlocks.WalletCashierHeader.mvc$controller.OnReady.GetIconJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Icon = $actions.GetCurrencyIcon($parameters.Currency, $parameters.CurrencyList)?.CurrencyIcon;

        console.log("$parameters.Currency")
    };
});