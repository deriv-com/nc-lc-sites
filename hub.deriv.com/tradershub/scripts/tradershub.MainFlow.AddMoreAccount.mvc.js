define("tradershub.MainFlow.AddMoreAccount.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.Layouts.MainLayout.mvc$model", "tradershub.model$EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecord", "tradershub.model$RL_7f0ff0d0a70a4e41424efbf5ef899b8d", "tradershub.controller$GetAvailableAccounts", "tradershub.model$RC_6a44851bc01e80a885c4aa0ae740b8fc", "tradershub.model$RL_5ee36d8deb03b51810340e621ea66d4b", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure", "tradershub.controller$SendAuthorize", "tradershub.controller$DerivApiSendMessage", "tradershub.model$ST_bd2236af041a218c8fde06ca0065cfd9Structure", "tradershub.controller$SendGetSetting", "tradershub.model$ST_1a99e1302699632bd3158595a2dd8d57Structure"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershub_Layouts_MainLayout_mvcModel) {
    var OS = OSRuntimeCore; {
        class GetCurrenciesAggrRecInner extends
        OS.Model.AggregateRecord {
            static attributesToDeclare() {
                return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new GetCurrenciesAggrRec(new GetCurrenciesAggrRec.RecordClass({
                    RecordListType: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        GetCurrenciesAggrRecInner.RecordListType = tradershubModel.RL_5ee36d8deb03b51810340e621ea66d4b;
        var GetCurrenciesAggrRec = GetCurrenciesAggrRecInner;
        GetCurrenciesAggrRec.init();
    }


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, false),
                    this.attr("AvailableAccounts", "availableAccountsVar", "AvailableAccounts", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_7f0ff0d0a70a4e41424efbf5ef899b8d());
                    }, false, tradershubModel.RL_7f0ff0d0a70a4e41424efbf5ef899b8d),
                    this.attr("GetCurrencies", "getCurrenciesAggr", "GetCurrencies", true, true, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new GetCurrenciesAggrRec());
                    }, true, GetCurrenciesAggrRec)
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
                Model._hasValidationWidgetsValue = tradershub_Layouts_MainLayout_mvcModel.hasValidationWidgets;
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.MainFlow.AddMoreAccount.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.MainFlow.AddMoreAccount.mvc$model", "tradershub.MainFlow.AddMoreAccount.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.MainLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.model$EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecord", "tradershub.model$RL_7f0ff0d0a70a4e41424efbf5ef899b8d", "tradershub.controller$GetAvailableAccounts", "tradershub.model$RC_6a44851bc01e80a885c4aa0ae740b8fc", "tradershub.model$RL_5ee36d8deb03b51810340e621ea66d4b", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure", "tradershub.controller$SendAuthorize", "tradershub.controller$DerivApiSendMessage", "tradershub.model$ST_bd2236af041a218c8fde06ca0065cfd9Structure", "tradershub.controller$SendGetSetting", "tradershub.model$ST_1a99e1302699632bd3158595a2dd8d57Structure"], function(OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_MainFlow_AddMoreAccount_mvc_model, tradershub_MainFlow_AddMoreAccount_mvc_controller, tradershubClientVariables, tradershub_Layouts_MainLayout_mvc_view, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "MainFlow.AddMoreAccount";
        }

        static getAttributes() {
            return {
                codeFunction: "AddMoreAccount",
                functionKey: "de40aa49-71ae-4f57-98a5-28fc3207d7a0",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.MainFlow.AddMoreAccount.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_MainLayout_mvc_view];
        }

        get modelFactory() {
            return tradershub_MainFlow_AddMoreAccount_mvc_model;
        }

        get controllerFactory() {
            return tradershub_MainFlow_AddMoreAccount_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("SapA3q5xV0+YpSj8MgfXoA#Title", "AddMoreAccount");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(tradershub_Layouts_MainLayout_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    ActiveTab: 2
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
                    content: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "add-more-accounts_header",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "HeaderContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Link, {
                            enabled: true,
                            onClick: function() {
                                try {
                                    OS.Navigation.navigateBack(null, null, true);
                                } catch (ex) {
                                    if (((ex.name) !== ("RedirectOccurredException"))) {
                                        throw ex;
                                    }

                                };
                            },
                            style: "",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex align-items-center justify-content-space-between",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "Header"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex align-items-center",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "Left"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-right: 16px;"
                            },
                            style: "display-flex align-items-center justify-content-center",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "Arrow"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.arrowleft.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "color: #272B30; font-size: 18px; font-weight: bold;"
                            },
                            text: [$text(getTranslation("F0t1v8lfSECi5gyVgpCp5A#Value", "Add more accounts"))],
                            _idProps: {
                                service: idService,
                                uuid: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "show-close-icon",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "Right"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "9"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "add-more-accounts_content",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "CurrenciesContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $if(model.variables.isLoadingVar, false, this, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "add-more-accounts_item skeleton",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }, function() {
                            return [React.createElement(OSWidgets.List, {
                                animateItems: true,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: /*Default*/ 0,
                                source: model.variables.availableAccountsVar,
                                style: "list list-group",
                                tag: "div",
                                _idProps: {
                                    service: idService,
                                    uuid: "12"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    content: new IteratorPlaceholderContent(function(idService, callContext) {
                                        return [React.createElement(OSWidgets.ListItem, {
                                            onClick: function() {
                                                return Promise.resolve().then(function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    return controller.addNewAccountAction$Action(controller.callContext(eventHandlerContext));
                                                });;
                                            },
                                            style: "\"list-item\"",
                                            triggerActionOnFullSwipeLeft: true,
                                            triggerActionOnFullSwipeRight: true,
                                            _idProps: {
                                                service: idService,
                                                name: "ListItem1"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            placeholders: {
                                                leftActions: PlaceholderContent.Empty,
                                                content: new PlaceholderContent(function() {
                                                    return [React.createElement(OSWidgets.Container, {
                                                        align: /*Default*/ 0,
                                                        animate: false,
                                                        gridProperties: {
                                                            classes: "OSInline"
                                                        },
                                                        style: "add-more-accounts_item",
                                                        visible: true,
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "14"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    }, React.createElement(OSWidgets.Container, {
                                                        align: /*Default*/ 0,
                                                        animate: false,
                                                        style: "display-flex align-items-center",
                                                        visible: true,
                                                        _idProps: {
                                                            service: idService,
                                                            name: "LeftSide"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    }, React.createElement(OSWidgets.Container, {
                                                        align: /*Default*/ 0,
                                                        animate: false,
                                                        extendedProperties: {
                                                            style: "border-radius: 100%; height: 24px; margin-right: 8px; overflow: hidden;"
                                                        },
                                                        gridProperties: {
                                                            classes: "OSInline",
                                                            width: "24px"
                                                        },
                                                        visible: true,
                                                        _idProps: {
                                                            service: idService,
                                                            name: "IconContainer"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    }, React.createElement(OSWidgets.Image, {
                                                        type: /*External*/ 1,
                                                        url: model.variables.availableAccountsVar.getCurrent(callContext.iterationContext).iconAttr,
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "17"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    })), React.createElement(OSWidgets.Expression, {
                                                        extendedProperties: {
                                                            style: "color: #101213; font-size: 14px;"
                                                        },
                                                        value: (((model.variables.availableAccountsVar.getCurrent(callContext.iterationContext).nameAttr + " (") + model.variables.availableAccountsVar.getCurrent(callContext.iterationContext).codeAttr) + ")"),
                                                        _idProps: {
                                                            service: idService,
                                                            name: "CurrencyName"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    })), React.createElement(OSWidgets.Container, {
                                                        align: /*Default*/ 0,
                                                        animate: false,
                                                        gridProperties: {
                                                            marginLeft: "8px"
                                                        },
                                                        style: "display-flex align-items-center justify-content-center",
                                                        visible: true,
                                                        _idProps: {
                                                            service: idService,
                                                            name: "RightSide"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    }, React.createElement(OSWidgets.Image, {
                                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.CirclePlusMd2.svg"),
                                                        type: /*Static*/ 0,
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "20"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    })))];
                                                }),
                                                rightActions: PlaceholderContent.Empty
                                            },
                                            _dependencies: [asPrimitiveValue(model.variables.availableAccountsVar.getCurrent(callContext.iterationContext).codeAttr), asPrimitiveValue(model.variables.availableAccountsVar.getCurrent(callContext.iterationContext).nameAttr), asPrimitiveValue(model.variables.availableAccountsVar.getCurrent(callContext.iterationContext).iconAttr)]
                                        })];
                                    }, callContext, idService, "1")
                                },
                                _dependencies: []
                            })];
                        }))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.availableAccountsVar), asPrimitiveValue(model.variables.isLoadingVar)]
            }));
        }
    }

    return View;
});
define("tradershub.MainFlow.AddMoreAccount.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.MainFlow.AddMoreAccount.mvc$translationsResources", "tradershub.MainFlow.controller", "tradershub.MainFlow.AddMoreAccount.mvc$controller.OnAfterFetch.ModifyDataJS", "tradershub.MainFlow.AddMoreAccount.mvc$controller.AddNewAccountAction.NewAccountRealPayloadJS", "tradershub.MainFlow.AddMoreAccount.mvc$controller.AddNewAccountAction.UpdateAccountListJS", "tradershub.MainFlow.AddMoreAccount.mvc$controller.AddNewAccountAction.RemoveSelectedAccountJS", "tradershub.model$EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecord", "tradershub.model$RL_7f0ff0d0a70a4e41424efbf5ef899b8d", "tradershub.controller$GetAvailableAccounts", "tradershub.model$RC_6a44851bc01e80a885c4aa0ae740b8fc", "tradershub.model$RL_5ee36d8deb03b51810340e621ea66d4b", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure", "tradershub.controller$SendAuthorize", "tradershub.controller$DerivApiSendMessage", "tradershub.model$ST_bd2236af041a218c8fde06ca0065cfd9Structure", "tradershub.controller$SendGetSetting", "tradershub.model$ST_1a99e1302699632bd3158595a2dd8d57Structure"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_MainFlow_AddMoreAccount_mvc_TranslationsResources, tradershub_MainFlowController, tradershub_MainFlow_AddMoreAccount_mvc_controller_OnAfterFetch_ModifyDataJS, tradershub_MainFlow_AddMoreAccount_mvc_controller_AddNewAccountAction_NewAccountRealPayloadJS, tradershub_MainFlow_AddMoreAccount_mvc_controller_AddNewAccountAction_UpdateAccountListJS, tradershub_MainFlow_AddMoreAccount_mvc_controller_AddNewAccountAction_RemoveSelectedAccountJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, tradershub_MainFlow_AddMoreAccount_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {
                    getCurrencies$AggrRefresh: 0
                };
                this.dataFetchDependentsGraph = {
                    getCurrencies$AggrRefresh: []
                };
                this.shouldSendClientVarsToDataSources = false;
            }

            // Server Actions - Methods

            // Aggregates and Data Actions
            get getCurrencies$AggrRefresh() {
                if (!(this.hasOwnProperty("_getCurrencies$AggrRefresh"))) {
                    this._getCurrencies$AggrRefresh = function() {
                        var innerBody = function(maxRecords, startIndex, callContext) {
                            var model = this.model;
                            var controller = this.controller;
                            var callContext = controller.callContext(callContext);
                            return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetCurrencies", "screenservices/tradershub/MainFlow/AddMoreAccount/ScreenDataSetGetCurrencies", "npjMYW44GFvhkxw14gO3vA", maxRecords, startIndex, function(b) {
                                model.variables.getCurrenciesAggr.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.getCurrenciesAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getCurrenciesAggr.constructor));
                            }, undefined, undefined, undefined, callContext, undefined, true).then(function() {
                                return controller._onAfterFetch$Action(controller.callContext(callContext));
                            });
                        }.bind(this);
                        return OS.Logger.startActiveSpan("GetCurrencies", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetCurrencies");
                                span.setAttribute("outsystems.function.key", "e98bf6f8-4bd0-4468-bbc4-fe8d9d5e50ee");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL");
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

                return this._getCurrencies$AggrRefresh;
            }
            set getCurrencies$AggrRefresh(value) {
                this._getCurrencies$AggrRefresh = value;
            }


            get dataFetchActionNames() {
                if (!(this.hasOwnProperty("_dataFetchActionNames"))) {
                    this._dataFetchActionNames = ["getCurrencies$AggrRefresh"];
                }

                return this._dataFetchActionNames;
            }
            set dataFetchActionNames(value) {
                this._dataFetchActionNames = value;
            }

            // Client Actions - Methods
            get _onAfterFetch$Action() {
                if (!(this.hasOwnProperty("__onAfterFetch$Action"))) {
                    this.__onAfterFetch$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnAfterFetch", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnAfterFetch");
                                span.setAttribute("outsystems.function.key", "9244253b-2dd9-42c4-8e37-402229dd80b5");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnAfterFetch");
                                callContext = controller.callContext(callContext);
                                var getAvailableAccountsVar = new OS.DataTypes.VariableHolder();
                                var modifyDataJSResult = new OS.DataTypes.VariableHolder();
                                var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONDeserializeResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_7f0ff0d0a70a4e41424efbf5ef899b8d))());
                                return OS.Flow.executeAsyncFlow(function() {
                                    // IsLoading = True
                                    model.variables.isLoadingVar = true;
                                    // Execute Action: GetAvailableAccounts
                                    model.flush();
                                    return tradershubController.default.getAvailableAccounts$Action(callContext).then(function(value) {
                                        getAvailableAccountsVar.value = value;
                                    }).then(function() {
                                        if ((getAvailableAccountsVar.value.isErrorOut)) {
                                            OS.FeedbackMessageService.showFeedbackMessage(getAvailableAccountsVar.value.errorMessageOut, /*Error*/ 3);
                                            // IsLoading = False
                                            model.variables.isLoadingVar = false;
                                        } else {
                                            // JSON Serialize: JSONSerialize1
                                            jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.getCurrenciesAggr.listOut, false, false);
                                            modifyDataJSResult.value = OS.Logger.startActiveSpan("ModifyData", function(span) {
                                                if (span) {
                                                    span.setAttribute("code.function", "ModifyData");
                                                    span.setAttribute("outsystems.function.key", "089da623-7864-402f-9972-c9d1e1684b68");
                                                    span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                    span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                                }

                                                try {
                                                    return controller.safeExecuteJSNode(tradershub_MainFlow_AddMoreAccount_mvc_controller_OnAfterFetch_ModifyDataJS, "ModifyData", "OnAfterFetch", {
                                                        AvailableAccounts: OS.DataConversion.JSNodeParamConverter.to(getAvailableAccountsVar.value.responseOut, OS.DataTypes.DataTypes.Text),
                                                        CurrenciesList: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize1Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                        Response: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                                    }, function($parameters) {
                                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.MainFlow.AddMoreAccount.OnAfterFetch$modifyDataJSResult"))();
                                                        jsNodeResult.responseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Response, OS.DataTypes.DataTypes.Text);
                                                        return jsNodeResult;
                                                    }, {}, {});
                                                } finally {
                                                    if (span) {
                                                        span.end();
                                                    }

                                                }

                                            }, 1);
                                            // JSON Deserialize: JSONDeserializeResponse
                                            jSONDeserializeResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(modifyDataJSResult.value.responseOut, tradershubModel.RL_7f0ff0d0a70a4e41424efbf5ef899b8d, false);
                                            // AvailableAccounts = JSONDeserializeResponse.Data
                                            model.variables.availableAccountsVar = jSONDeserializeResponseVar.value.dataOut;
                                            // IsLoading = False
                                            model.variables.isLoadingVar = false;
                                        }

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

                return this.__onAfterFetch$Action;
            }
            set _onAfterFetch$Action(value) {
                this.__onAfterFetch$Action = value;
            }

            get _addNewAccountAction$Action() {
                if (!(this.hasOwnProperty("__addNewAccountAction$Action"))) {
                    this.__addNewAccountAction$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("AddNewAccountAction", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AddNewAccountAction");
                                span.setAttribute("outsystems.function.key", "e0569aa3-17c3-4191-93e7-575846474ce1");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("AddNewAccountAction");
                                callContext = controller.callContext(callContext);
                                var sendAuthorizeVar = new OS.DataTypes.VariableHolder();
                                var derivApiSendMessageNewAccountVar = new OS.DataTypes.VariableHolder();
                                var sendGetSettingVar = new OS.DataTypes.VariableHolder();
                                var newAccountRealPayloadJSResult = new OS.DataTypes.VariableHolder();
                                var removeSelectedAccountJSResult = new OS.DataTypes.VariableHolder();
                                var jSONSerializeGetSettingVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONSerializeAvailableAccountsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONDeserializeCurrenciesListVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_7f0ff0d0a70a4e41424efbf5ef899b8d))());
                                var jSONDeserializeNewAccountVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_1a99e1302699632bd3158595a2dd8d57Structure))());
                                return OS.Flow.executeAsyncFlow(function() {
                                    // IsLoading = True
                                    model.variables.isLoadingVar = true;
                                    // Execute Action: SendGetSetting
                                    model.flush();
                                    return tradershubController.default.sendGetSetting$Action(callContext).then(function(value) {
                                        sendGetSettingVar.value = value;
                                    }).then(function() {
                                        return OS.Flow.executeSequence(function() {
                                            if ((sendGetSettingVar.value.isErrorOut)) {
                                                OS.FeedbackMessageService.showFeedbackMessage(sendGetSettingVar.value.errorMessageOut, /*Error*/ 3);
                                                // IsLoading = False
                                                model.variables.isLoadingVar = false;
                                            } else {
                                                // JSON Serialize: JSONSerializeGetSetting
                                                jSONSerializeGetSettingVar.value.jSONOut = OS.JSONUtils.serializeToJSON(sendGetSettingVar.value.getSettingResponseOut, false, false);
                                                newAccountRealPayloadJSResult.value = OS.Logger.startActiveSpan("NewAccountRealPayload", function(span) {
                                                    if (span) {
                                                        span.setAttribute("code.function", "NewAccountRealPayload");
                                                        span.setAttribute("outsystems.function.key", "15f8e1c8-6dbc-4b60-88b8-d9a686178fd6");
                                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                                    }

                                                    try {
                                                        return controller.safeExecuteJSNode(tradershub_MainFlow_AddMoreAccount_mvc_controller_AddNewAccountAction_NewAccountRealPayloadJS, "NewAccountRealPayload", "AddNewAccountAction", {
                                                            GetSettings: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeGetSettingVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                            SelectedCurrency: OS.DataConversion.JSNodeParamConverter.to(model.variables.availableAccountsVar.getCurrent(callContext.iterationContext).codeAttr, OS.DataTypes.DataTypes.Text),
                                                            Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                                        }, function($parameters) {
                                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.MainFlow.AddMoreAccount.AddNewAccountAction$newAccountRealPayloadJSResult"))();
                                                            jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                                            return jsNodeResult;
                                                        }, {}, {});
                                                    } finally {
                                                        if (span) {
                                                            span.end();
                                                        }

                                                    }

                                                }, 1);
                                                // Execute Action: DerivApiSendMessageNewAccount
                                                model.flush();
                                                return tradershubController.default.derivApiSendMessage$Action(newAccountRealPayloadJSResult.value.payloadOut, "new_account_real", true, callContext).then(function(value) {
                                                    derivApiSendMessageNewAccountVar.value = value;
                                                }).then(function() {
                                                    return OS.Flow.executeSequence(function() {
                                                        if ((derivApiSendMessageNewAccountVar.value.isErrorOut)) {
                                                            OS.FeedbackMessageService.showFeedbackMessage(derivApiSendMessageNewAccountVar.value.errorMessageOut, /*Error*/ 3);
                                                            // IsLoading = False
                                                            model.variables.isLoadingVar = false;
                                                        } else {
                                                            // JSON Deserialize: JSONDeserializeNewAccount
                                                            jSONDeserializeNewAccountVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(derivApiSendMessageNewAccountVar.value.responseOut, tradershubModel.ST_1a99e1302699632bd3158595a2dd8d57Structure, false);
                                                            // AuthToken = JSONDeserializeNewAccount.Data.New_account_real.Oauth_token
                                                            tradershubClientVariables.setAuthToken(jSONDeserializeNewAccountVar.value.dataOut.new_account_realAttr.oauth_tokenAttr);
                                                            OS.Logger.startActiveSpan("UpdateAccountList", function(span) {
                                                                if (span) {
                                                                    span.setAttribute("code.function", "UpdateAccountList");
                                                                    span.setAttribute("outsystems.function.key", "7d5918dd-f633-4fd1-b6e8-ed3dee2c36da");
                                                                    span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                                    span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                                                }

                                                                try {
                                                                    return controller.safeExecuteJSNode(tradershub_MainFlow_AddMoreAccount_mvc_controller_AddNewAccountAction_UpdateAccountListJS, "UpdateAccountList", "AddNewAccountAction", {
                                                                        Token: OS.DataConversion.JSNodeParamConverter.to(jSONDeserializeNewAccountVar.value.dataOut.new_account_realAttr.oauth_tokenAttr, OS.DataTypes.DataTypes.Text),
                                                                        LoginId: OS.DataConversion.JSNodeParamConverter.to(jSONDeserializeNewAccountVar.value.dataOut.new_account_realAttr.client_idAttr, OS.DataTypes.DataTypes.Text)
                                                                    }, function($parameters) {}, {}, {});
                                                                } finally {
                                                                    if (span) {
                                                                        span.end();
                                                                    }

                                                                }

                                                            }, 1);
                                                            // Execute Action: SendAuthorize
                                                            model.flush();
                                                            return tradershubController.default.sendAuthorize$Action(true, callContext).then(function(value) {
                                                                sendAuthorizeVar.value = value;
                                                            }).then(function() {
                                                                // JSON Serialize: JSONSerializeAvailableAccounts
                                                                jSONSerializeAvailableAccountsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.availableAccountsVar, false, false);
                                                                removeSelectedAccountJSResult.value = OS.Logger.startActiveSpan("RemoveSelectedAccount", function(span) {
                                                                    if (span) {
                                                                        span.setAttribute("code.function", "RemoveSelectedAccount");
                                                                        span.setAttribute("outsystems.function.key", "84744806-5ab6-4654-8b81-8fbdc959e15a");
                                                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                                                    }

                                                                    try {
                                                                        return controller.safeExecuteJSNode(tradershub_MainFlow_AddMoreAccount_mvc_controller_AddNewAccountAction_RemoveSelectedAccountJS, "RemoveSelectedAccount", "AddNewAccountAction", {
                                                                            SelectedCurrency: OS.DataConversion.JSNodeParamConverter.to(model.variables.availableAccountsVar.getCurrent(callContext.iterationContext).codeAttr, OS.DataTypes.DataTypes.Text),
                                                                            AvailableAccounts: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeAvailableAccountsVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                                            Response: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                                                            ShouldRedirectToOptions: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                                                                        }, function($parameters) {
                                                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.MainFlow.AddMoreAccount.AddNewAccountAction$removeSelectedAccountJSResult"))();
                                                                            jsNodeResult.responseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Response, OS.DataTypes.DataTypes.Text);
                                                                            jsNodeResult.shouldRedirectToOptionsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ShouldRedirectToOptions, OS.DataTypes.DataTypes.Boolean);
                                                                            return jsNodeResult;
                                                                        }, {}, {});
                                                                    } finally {
                                                                        if (span) {
                                                                            span.end();
                                                                        }

                                                                    }

                                                                }, 1);
                                                                // JSON Deserialize: JSONDeserializeCurrenciesList
                                                                jSONDeserializeCurrenciesListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(removeSelectedAccountJSResult.value.responseOut, tradershubModel.RL_7f0ff0d0a70a4e41424efbf5ef899b8d, false);
                                                                // ActiveLoginId = SendAuthorize.Response.Authorize.Loginid
                                                                tradershubClientVariables.setActiveLoginId(sendAuthorizeVar.value.responseOut.authorizeAttr.loginidAttr);
                                                                // IsLoading = False
                                                                model.variables.isLoadingVar = false;
                                                                // AvailableAccounts = JSONDeserializeCurrenciesList.Data
                                                                model.variables.availableAccountsVar = jSONDeserializeCurrenciesListVar.value.dataOut;
                                                                OS.FeedbackMessageService.showFeedbackMessage((sendAuthorizeVar.value.responseOut.authorizeAttr.currencyAttr + " options trading account added."), /*Success*/ 1);
                                                            }).then(function() {
                                                                if ((removeSelectedAccountJSResult.value.shouldRedirectToOptionsOut)) {
                                                                    // Destination: /tradershub/Options
                                                                    return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "options", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                                                }

                                                            });
                                                        }

                                                    });
                                                });
                                            }

                                        });
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

                return this.__addNewAccountAction$Action;
            }
            set _addNewAccountAction$Action(value) {
                this.__addNewAccountAction$Action = value;
            }


            onAfterFetch$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnAfterFetch__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnAfterFetch");
                        span.setAttribute("outsystems.function.key", "9244253b-2dd9-42c4-8e37-402229dd80b5");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onAfterFetch$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            addNewAccountAction$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("AddNewAccountAction__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "AddNewAccountAction");
                        span.setAttribute("outsystems.function.key", "e0569aa3-17c3-4191-93e7-575846474ce1");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._addNewAccountAction$Action, callContext);
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
                        return tradershub_MainFlowController.default.handleError(ex, this.callContext());
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
        Controller.registerVariableGroupType("tradershub.MainFlow.AddMoreAccount.OnAfterFetch$modifyDataJSResult", [{
            name: "Response",
            attrName: "responseOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.MainFlow.AddMoreAccount.AddNewAccountAction$newAccountRealPayloadJSResult", [{
            name: "Payload",
            attrName: "payloadOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.MainFlow.AddMoreAccount.AddNewAccountAction$removeSelectedAccountJSResult", [{
            name: "Response",
            attrName: "responseOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "ShouldRedirectToOptions",
            attrName: "shouldRedirectToOptionsOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.MainFlow.AddMoreAccount.mvc$controller.OnAfterFetch.ModifyDataJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const currenciesList = JSON.parse($parameters.CurrenciesList);
        const availableAccounts = JSON.parse($parameters.AvailableAccounts);

        const filteredResponse = currenciesList.filter(currency => {
            const data = availableAccounts?.available_accounts?.trading?.filter(account => account.currency === currency.Currencies.Code);
            return data.length > 0;
        }).map(currency => currency.Currencies)

        $parameters.Response = JSON.stringify(filteredResponse);

    };
});

define("tradershub.MainFlow.AddMoreAccount.mvc$controller.AddNewAccountAction.NewAccountRealPayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const settings = JSON.parse($parameters.GetSettings);

        function formatTimestampToDate(timestamp) {
            const date = new Date(timestamp * 1000);

            const year = date.getUTCFullYear();
            const month = String(date.getUTCMonth() + 1).padStart(2, '0');
            const day = String(date.getUTCDate()).padStart(2, '0');

            return `${year}-${month}-${day}`;
        }

        $parameters.Payload = JSON.stringify({
            currency: $parameters.SelectedCurrency,
            date_of_birth: formatTimestampToDate(settings.date_of_birth),
            first_name: settings.first_name,
            last_name: settings.last_name,
            residence: settings.country_code
        });

    };
});

define("tradershub.MainFlow.AddMoreAccount.mvc$controller.AddNewAccountAction.UpdateAccountListJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        let accountsList = JSON.parse(localStorage.getItem("accountsList"));
        accountsList[$parameters.LoginId] = {
            token: $parameters.Token
        };

        localStorage.setItem("accountsList", JSON.stringify(accountsList));
        localStorage.setItem("client.accounts", JSON.stringify(accountsList));

    };
});

define("tradershub.MainFlow.AddMoreAccount.mvc$controller.AddNewAccountAction.RemoveSelectedAccountJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const availableAccounts = JSON.parse($parameters.AvailableAccounts);
        const newAvailableAccounts = availableAccounts.filter(acc => acc.Code !== $parameters.SelectedCurrency);

        if (newAvailableAccounts.length > 1) {
            $parameters.ShouldRedirectToOptions = false;
            $parameters.Response = JSON.stringify(newAvailableAccounts);
        } else {
            $parameters.ShouldRedirectToOptions = true;
        }

    };
});


define("tradershub.MainFlow.AddMoreAccount.mvc$translationsResources.fr-FR", [], function() {
    return {
        "F0t1v8lfSECi5gyVgpCp5A#Value": "Ajouter plus de comptes"
    };
});

define("tradershub.MainFlow.AddMoreAccount.mvc$translationsResources", ["exports", "tradershub.MainFlow.AddMoreAccount.mvc$translationsResources.fr-FR"], function(exports, tradershub_MainFlow_AddMoreAccount_mvc_translationsResources_frFR) {
    return {
        "fr-FR": {
            "translations": tradershub_MainFlow_AddMoreAccount_mvc_translationsResources_frFR,
            "isRTL": false
        }
    };
});