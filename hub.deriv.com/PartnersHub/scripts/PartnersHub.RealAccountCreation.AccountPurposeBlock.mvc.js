define("PartnersHub.RealAccountCreation.AccountPurposeBlock.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.model$RC_ce6ceb3fc0996999c0afa122cb74649e", "PartnersHub.model$RL_301842845c94a0162dda3fccbf6857b2"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController) {
    var OS = OSRuntimeCore; {
        class GetAccountPurposesAggrRecInner extends
        OS.Model.AggregateRecord {
            static attributesToDeclare() {
                return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new GetAccountPurposesAggrRec(new GetAccountPurposesAggrRec.RecordClass({
                    RecordListType: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        GetAccountPurposesAggrRecInner.RecordListType = PartnersHubModel.RL_301842845c94a0162dda3fccbf6857b2;
        var GetAccountPurposesAggrRec = GetAccountPurposesAggrRecInner;
        GetAccountPurposesAggrRec.init();
    }


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("GetAccountPurposes", "getAccountPurposesAggr", "GetAccountPurposes", true, true, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new GetAccountPurposesAggrRec());
                    }, true, GetAccountPurposesAggrRec)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new VariablesRecord(new VariablesRecord.RecordClass({
                    getAccountPurposesAggr: OS.DataTypes.ImmutableBase.getData(str)
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

define("PartnersHub.RealAccountCreation.AccountPurposeBlock.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreation.AccountPurposeBlock.mvc$model", "PartnersHub.RealAccountCreation.AccountPurposeBlock.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.model$RC_ce6ceb3fc0996999c0afa122cb74649e", "PartnersHub.model$RL_301842845c94a0162dda3fccbf6857b2"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_RealAccountCreation_AccountPurposeBlock_mvc_model, PartnersHub_RealAccountCreation_AccountPurposeBlock_mvc_controller, PartnersHubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreation.AccountPurposeBlock";
        }

        static getAttributes() {
            return {
                codeFunction: "AccountPurposeBlock",
                functionKey: "70054fee-4f7b-4269-84b1-2dd12ef1a95e",
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
            return PartnersHub_RealAccountCreation_AccountPurposeBlock_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreation_AccountPurposeBlock_mvc_controller;
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
                    style: "display: flex; flex-direction: column;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "color: #4F575E; font-size: 16px;"
                },
                text: ["Select your account purpose"],
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.List, {
                animateItems: true,
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                mode: /*Default*/ 0,
                source: model.variables.getAccountPurposesAggr.listOut,
                style: "list list-group",
                tag: "div",
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getAccountPurposesAggr.dataFetchStatusAttr),
                placeholders: {
                    content: new IteratorPlaceholderContent(function(idService, callContext) {
                        return [React.createElement(OSWidgets.ListItem, {
                            extendedProperties: {
                                style: "align-items: center; background: var(--Neutral-Neutral-1, #F8F9FA); border: 1px solid var(--Neutral-Neutral-2, #F1F3F5); border-radius: 4px; cursor: pointer; display: flex; padding: 16px; width: 100%;"
                            },
                            onClick: function() {
                                var eventHandlerContext = callContext.clone();
                                controller.listItem2OnClick$Action(model.variables.getAccountPurposesAggr.listOut.getCurrent(callContext.iterationContext).accountPurposeAttr.purposeAttr, controller.callContext(eventHandlerContext));

                                ;
                            },
                            style: "",
                            triggerActionOnFullSwipeLeft: true,
                            triggerActionOnFullSwipeRight: true,
                            _idProps: {
                                service: idService,
                                name: "ListItem2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                leftActions: PlaceholderContent.Empty,
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "align-items: center; display: flex; justify-content: space-between;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "100%"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Expression, {
                                        extendedProperties: {
                                            style: "color: #101213; font-size: 14px; font-style: normal; font-weight: 500px; line-height: 21px;"
                                        },
                                        value: model.variables.getAccountPurposesAggr.listOut.getCurrent(callContext.iterationContext).accountPurposeAttr.purposeAttr,
                                        _idProps: {
                                            service: idService,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getAccountPurposesAggr.dataFetchStatusAttr)
                                    }), React.createElement(OSWidgets.Image, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.rightIcon.png"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))];
                                }),
                                rightActions: PlaceholderContent.Empty
                            },
                            _dependencies: [asPrimitiveValue(model.variables.getAccountPurposesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getAccountPurposesAggr.listOut.getCurrent(callContext.iterationContext).accountPurposeAttr.purposeAttr)]
                        })];
                    }, callContext, idService, "1")
                },
                _dependencies: [asPrimitiveValue(model.variables.getAccountPurposesAggr.dataFetchStatusAttr)]
            }))));
        }
    }

    return View;
});
define("PartnersHub.RealAccountCreation.AccountPurposeBlock.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreation.AccountPurposeBlock.mvc$translationsResources", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.model$RC_ce6ceb3fc0996999c0afa122cb74649e", "PartnersHub.model$RL_301842845c94a0162dda3fccbf6857b2"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreation_AccountPurposeBlock_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_RealAccountCreation_AccountPurposeBlock_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {
                    getAccountPurposes$AggrRefresh: 0
                };
                this.dataFetchDependentsGraph = {
                    getAccountPurposes$AggrRefresh: []
                };
                this.shouldSendClientVarsToDataSources = true;
            }

            // Server Actions - Methods

            // Aggregates and Data Actions
            get getAccountPurposes$AggrRefresh() {
                if (!(this.hasOwnProperty("_getAccountPurposes$AggrRefresh"))) {
                    this._getAccountPurposes$AggrRefresh = function() {
                        var innerBody = function(maxRecords, startIndex, callContext) {
                            var model = this.model;
                            var controller = this.controller;
                            var callContext = controller.callContext(callContext);
                            return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetAccountPurposes", "screenservices/PartnersHub/RealAccountCreation/AccountPurposeBlock/ScreenDataSetGetAccountPurposes", "syYKVD1+RbIc9NlZCoKJ2A", maxRecords, startIndex, function(b) {
                                model.variables.getAccountPurposesAggr.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.getAccountPurposesAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getAccountPurposesAggr.constructor));
                            }, undefined, undefined, undefined, callContext, PartnersHubClientVariables, true);
                        }.bind(this);
                        return OS.Logger.startActiveSpan("GetAccountPurposes", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetAccountPurposes");
                                span.setAttribute("outsystems.function.key", "703a25a0-f07a-4d65-92e1-5f0eb1fd2781");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
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

                return this._getAccountPurposes$AggrRefresh;
            }
            set getAccountPurposes$AggrRefresh(value) {
                this._getAccountPurposes$AggrRefresh = value;
            }


            get dataFetchActionNames() {
                if (!(this.hasOwnProperty("_dataFetchActionNames"))) {
                    this._dataFetchActionNames = ["getAccountPurposes$AggrRefresh"];
                }

                return this._dataFetchActionNames;
            }
            set dataFetchActionNames(value) {
                this._dataFetchActionNames = value;
            }

            // Client Actions - Methods
            get _listItem2OnClick$Action() {
                if (!(this.hasOwnProperty("__listItem2OnClick$Action"))) {
                    this.__listItem2OnClick$Action = function(purposeIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ListItem2OnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ListItem2OnClick");
                                span.setAttribute("outsystems.function.key", "50478ceb-f248-44d0-9551-3d14e00f95e0");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("ListItem2OnClick");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.AccountPurposeBlock.ListItem2OnClick$vars"))());
                                vars.value.purposeInLocal = purposeIn;
                                // RealSignupAccountPurpose = Purpose
                                PartnersHubClientVariables.setRealSignupAccountPurpose(vars.value.purposeInLocal);
                                if ((PartnersHubClientVariables.getRealSignupIsIDVSupported())) {
                                    // Execute Action: RealSignupNextStep
                                    PartnersHubController.default.realSignupNextStep$Action(1, callContext);
                                    // Destination: /PartnersHub/IDVScreen
                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "IDVScreen", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__listItem2OnClick$Action;
            }
            set _listItem2OnClick$Action(value) {
                this.__listItem2OnClick$Action = value;
            }


            listItem2OnClick$Action(purposeIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ListItem2OnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ListItem2OnClick");
                        span.setAttribute("outsystems.function.key", "50478ceb-f248-44d0-9551-3d14e00f95e0");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._listItem2OnClick$Action, callContext, purposeIn);
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
        Controller.registerVariableGroupType("PartnersHub.RealAccountCreation.AccountPurposeBlock.ListItem2OnClick$vars", [{
            name: "Purpose",
            attrName: "purposeInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});


define("PartnersHub.RealAccountCreation.AccountPurposeBlock.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});