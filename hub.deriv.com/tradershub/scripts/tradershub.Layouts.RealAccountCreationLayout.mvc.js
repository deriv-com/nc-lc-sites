define("tradershub.Layouts.RealAccountCreationLayout.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.model", "OutSystemsUI.controller", "tradershub.controller", "OutSystemsUI.Navigation.Wizard.mvc$model", "OutSystemsUI.Navigation.WizardItem.mvc$model", "OutSystemsUI.Numbers.ProgressBar.mvc$model", "tradershub.Common.LoaderBlock.mvc$model", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "OutSystemsUI.controller$ScrollToElement", "tradershub.controller$SyncAccountInfo"], function(OSRuntimeCore, tradershubModel, OutSystemsUIModel, OutSystemsUIController, tradershubController, OutSystemsUI_Navigation_Wizard_mvcModel, OutSystemsUI_Navigation_WizardItem_mvcModel, OutSystemsUI_Numbers_ProgressBar_mvcModel, tradershub_Common_LoaderBlock_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ShowCloseModal", "showCloseModalVar", "ShowCloseModal", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("Title", "titleIn", "Title", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("HideTitle", "hideTitleIn", "HideTitle", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_hideTitleInDataFetchStatus", "_hideTitleInDataFetchStatus", "_hideTitleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("Analytics", "analyticsIn", "Analytics", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_0dd6e149ce474591a764bb53175023a1Structure());
                    }, false, tradershubModel.ST_0dd6e149ce474591a764bb53175023a1Structure),
                    this.attr("_analyticsInDataFetchStatus", "_analyticsInDataFetchStatus", "_analyticsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                Model._hasValidationWidgetsValue = (((OutSystemsUI_Navigation_Wizard_mvcModel.hasValidationWidgets || OutSystemsUI_Navigation_WizardItem_mvcModel.hasValidationWidgets) || OutSystemsUI_Numbers_ProgressBar_mvcModel.hasValidationWidgets) || tradershub_Common_LoaderBlock_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {
            if ("Title" in inputs) {
                this.variables.titleIn = inputs.Title;
                if ("_titleInDataFetchStatus" in inputs) {
                    this.variables._titleInDataFetchStatus = inputs._titleInDataFetchStatus;
                }

            }

            if ("HideTitle" in inputs) {
                this.variables.hideTitleIn = inputs.HideTitle;
                if ("_hideTitleInDataFetchStatus" in inputs) {
                    this.variables._hideTitleInDataFetchStatus = inputs._hideTitleInDataFetchStatus;
                }

            }

            if ("Analytics" in inputs) {
                this.variables.analyticsIn = inputs.Analytics;
                if ("_analyticsInDataFetchStatus" in inputs) {
                    this.variables._analyticsInDataFetchStatus = inputs._analyticsInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.Layouts.RealAccountCreationLayout.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "tradershub.Layouts.RealAccountCreationLayout.mvc$model", "tradershub.Layouts.RealAccountCreationLayout.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Navigation.Wizard.mvc$view", "OutSystemsUI.Navigation.WizardItem.mvc$view", "OutSystemsUI.Numbers.ProgressBar.mvc$view", "tradershub.Common.LoaderBlock.mvc$view", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "OutSystemsUI.controller$ScrollToElement", "tradershub.controller$SyncAccountInfo"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIModel, OutSystemsUIController, React, OSView, tradershub_Layouts_RealAccountCreationLayout_mvc_model, tradershub_Layouts_RealAccountCreationLayout_mvc_controller, tradershubClientVariables, OSWidgets, OutSystemsUI_Navigation_Wizard_mvc_view, OutSystemsUI_Navigation_WizardItem_mvc_view, OutSystemsUI_Numbers_ProgressBar_mvc_view, tradershub_Common_LoaderBlock_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Layouts.RealAccountCreationLayout";
        }

        static getAttributes() {
            return {
                codeFunction: "RealAccountCreationLayout",
                functionKey: "78975d16-4c73-48c5-9852-90b30675abc7",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.Layouts.RealAccountCreationLayout.css"];
        }

        static getJsDependencies() {
            return ["scripts/tradershub.Flatpickr.js", "scripts/tradershub.JSCookie.js", "scripts/tradershub.yupumd.js"];
        }

        static getBlocks() {
            return [OutSystemsUI_Navigation_Wizard_mvc_view, OutSystemsUI_Navigation_WizardItem_mvc_view, OutSystemsUI_Numbers_ProgressBar_mvc_view, tradershub_Common_LoaderBlock_mvc_view];
        }

        get modelFactory() {
            return tradershub_Layouts_RealAccountCreationLayout_mvc_model;
        }

        get controllerFactory() {
            return tradershub_Layouts_RealAccountCreationLayout_mvc_controller;
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
                style: "display-flex",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Container"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "real-account-signup-layout__sidebar",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "SidebarMenu"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Label, {
                extendedProperties: {
                    style: "margin-bottom: 24px; margin-right: 0px; margin-top: 0px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0px"
                },
                _idProps: {
                    service: idService,
                    name: "AddRealAccount"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "color: #333333; font-size: 20px; font-weight: bold;"
                },
                text: [$text(getTranslation("00Hg9JXhFU+VYKs5xFdaZg#Value", "Add a real account"))],
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OutSystemsUI_Navigation_Wizard_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    IsVertical: true
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
                    uuid: "4",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: new PlaceholderContent(function() {
                        return [$if(tradershubClientVariables.getRealSignupIsIDVSupported(), false, this, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    Status: model.getCachedValue(idService.getId("AccountCurrency.Status"), function() {
                                        return (((tradershubClientVariables.getRealSignupCurrentStep() === 1)) ? (tradershubModel.staticEntities.steps.active) : ((((tradershubClientVariables.getRealSignupCurrentStep() < 1)) ? (tradershubModel.staticEntities.steps.next) : (tradershubModel.staticEntities.steps.past))));
                                    }, function() {
                                        return tradershubClientVariables.getRealSignupCurrentStep();
                                    })
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
                                    name: "AccountCurrency",
                                    alias: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    icon: new PlaceholderContent(function() {
                                        return [$if((tradershubClientVariables.getRealSignupCurrentStep() > 1), false, this, function() {
                                            return [React.createElement(OSWidgets.Icon, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                icon: "check",
                                                iconSize: /*Twotimes*/ 1,
                                                style: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("SOfKJ5_BB0OpkR2bFQGiPQ#ValueExpression.3226745.1", "icon"),
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "7"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        }, function() {
                                            return [];
                                        })];
                                    }),
                                    label: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "8"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Text, {
                                            extendedProperties: {
                                                style: "color: #101213;"
                                            },
                                            text: [$text(getTranslation("NFfRCmwYtkyXwItR0dgtAw#Value", "Account currency"))],
                                            _idProps: {
                                                service: idService,
                                                uuid: "9"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(tradershubClientVariables.getRealSignupCurrentStep())]
                            }), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    Status: model.getCachedValue(idService.getId("PersonalDetails.Status"), function() {
                                        return (((tradershubClientVariables.getRealSignupCurrentStep() === 2)) ? (tradershubModel.staticEntities.steps.active) : ((((tradershubClientVariables.getRealSignupCurrentStep() < 2)) ? (tradershubModel.staticEntities.steps.next) : (tradershubModel.staticEntities.steps.past))));
                                    }, function() {
                                        return tradershubClientVariables.getRealSignupCurrentStep();
                                    })
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
                                    name: "PersonalDetails",
                                    alias: "3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    icon: new PlaceholderContent(function() {
                                        return [$if((tradershubClientVariables.getRealSignupCurrentStep() > 2), false, this, function() {
                                            return [React.createElement(OSWidgets.Icon, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                icon: "check",
                                                iconSize: /*Twotimes*/ 1,
                                                style: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("w2KrMBCITEuwkvTmK27h9Q#ValueExpression.3226745.1", "icon"),
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "11"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        }, function() {
                                            return [];
                                        })];
                                    }),
                                    label: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "12"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Text, {
                                            extendedProperties: {
                                                style: "color: #101213;"
                                            },
                                            text: [$text(getTranslation("HSuugJpXv0yhQKBD_yZzRA#Value", "Personal details"))],
                                            _idProps: {
                                                service: idService,
                                                uuid: "13"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(tradershubClientVariables.getRealSignupCurrentStep())]
                            }), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    Status: model.getCachedValue(idService.getId("IdentityVerification.Status"), function() {
                                        return (((tradershubClientVariables.getRealSignupCurrentStep() === 3)) ? (tradershubModel.staticEntities.steps.active) : ((((tradershubClientVariables.getRealSignupCurrentStep() < 3)) ? (tradershubModel.staticEntities.steps.next) : (tradershubModel.staticEntities.steps.past))));
                                    }, function() {
                                        return tradershubClientVariables.getRealSignupCurrentStep();
                                    })
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
                                    name: "IdentityVerification",
                                    alias: "4"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    icon: new PlaceholderContent(function() {
                                        return [$if((tradershubClientVariables.getRealSignupCurrentStep() > 3), false, this, function() {
                                            return [React.createElement(OSWidgets.Icon, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                icon: "check",
                                                iconSize: /*Twotimes*/ 1,
                                                style: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("2EEIVitDwkelS+H9TRyCmQ#ValueExpression.3226745.1", "icon"),
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "15"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        }, function() {
                                            return [];
                                        })];
                                    }),
                                    label: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "16"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Text, {
                                            extendedProperties: {
                                                style: "color: #101213;"
                                            },
                                            text: [$text(getTranslation("WnNWxB+9Qk6Fll_MJQySwg#Value", "Identity verification"))],
                                            _idProps: {
                                                service: idService,
                                                uuid: "17"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(tradershubClientVariables.getRealSignupCurrentStep())]
                            }), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    Status: model.getCachedValue(idService.getId("EmploymentDetails.Status"), function() {
                                        return (((tradershubClientVariables.getRealSignupCurrentStep() === 4)) ? (tradershubModel.staticEntities.steps.active) : ((((tradershubClientVariables.getRealSignupCurrentStep() < 4)) ? (tradershubModel.staticEntities.steps.next) : (tradershubModel.staticEntities.steps.past))));
                                    }, function() {
                                        return tradershubClientVariables.getRealSignupCurrentStep();
                                    })
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
                                    name: "EmploymentDetails",
                                    alias: "5"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    icon: new PlaceholderContent(function() {
                                        return [$if((tradershubClientVariables.getRealSignupCurrentStep() > 4), false, this, function() {
                                            return [React.createElement(OSWidgets.Icon, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                icon: "check",
                                                iconSize: /*Twotimes*/ 1,
                                                style: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("LHEnYOw__ECNBkNAfVUV1g#ValueExpression.3226745.1", "icon"),
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "19"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        }, function() {
                                            return [];
                                        })];
                                    }),
                                    label: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "20"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Text, {
                                            extendedProperties: {
                                                style: "color: #101213;"
                                            },
                                            text: [$text(getTranslation("vw6lScPcw0+Fmxkmet36Cg#Value", "Employment details"))],
                                            _idProps: {
                                                service: idService,
                                                uuid: "21"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(tradershubClientVariables.getRealSignupCurrentStep())]
                            }), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    Status: model.getCachedValue(idService.getId("AddressDetails.Status"), function() {
                                        return (((tradershubClientVariables.getRealSignupCurrentStep() === 5)) ? (tradershubModel.staticEntities.steps.active) : ((((tradershubClientVariables.getRealSignupCurrentStep() < 5)) ? (tradershubModel.staticEntities.steps.next) : (tradershubModel.staticEntities.steps.past))));
                                    }, function() {
                                        return tradershubClientVariables.getRealSignupCurrentStep();
                                    })
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
                                    name: "AddressDetails",
                                    alias: "6"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    icon: new PlaceholderContent(function() {
                                        return [$if((tradershubClientVariables.getRealSignupCurrentStep() > 5), false, this, function() {
                                            return [React.createElement(OSWidgets.Icon, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                icon: "check",
                                                iconSize: /*Twotimes*/ 1,
                                                style: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("L59znZgIrUGZoNRU38+OJg#ValueExpression.3226745.1", "icon"),
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "23"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        }, function() {
                                            return [];
                                        })];
                                    }),
                                    label: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "24"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Text, {
                                            extendedProperties: {
                                                style: "color: #101213;"
                                            },
                                            text: [$text(getTranslation("gi313ljLuU6jS8TOtY5r2w#Value", "Address details"))],
                                            _idProps: {
                                                service: idService,
                                                uuid: "25"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(tradershubClientVariables.getRealSignupCurrentStep())]
                            }), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    Status: model.getCachedValue(idService.getId("TermsOfUse.Status"), function() {
                                        return (((tradershubClientVariables.getRealSignupCurrentStep() === 6)) ? (tradershubModel.staticEntities.steps.active) : ((((tradershubClientVariables.getRealSignupCurrentStep() < 6)) ? (tradershubModel.staticEntities.steps.next) : (tradershubModel.staticEntities.steps.past))));
                                    }, function() {
                                        return tradershubClientVariables.getRealSignupCurrentStep();
                                    })
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
                                    name: "TermsOfUse",
                                    alias: "7"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    icon: new PlaceholderContent(function() {
                                        return [$if((tradershubClientVariables.getRealSignupCurrentStep() > 6), false, this, function() {
                                            return [React.createElement(OSWidgets.Icon, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                icon: "check",
                                                iconSize: /*Twotimes*/ 1,
                                                style: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("toj9jrU0oUKtEIi32OKkUA#ValueExpression.3226745.1", "icon"),
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "27"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        }, function() {
                                            return [];
                                        })];
                                    }),
                                    label: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "28"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Text, {
                                            extendedProperties: {
                                                style: "color: #101213;"
                                            },
                                            text: [$text(getTranslation("GUwJJeampkGR2XUJyILgfw#Value", "Terms of use"))],
                                            _idProps: {
                                                service: idService,
                                                uuid: "29"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(tradershubClientVariables.getRealSignupCurrentStep())]
                            }))];
                        }, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "30"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    Status: model.getCachedValue(idService.getId("AccountCurrency2.Status"), function() {
                                        return (((tradershubClientVariables.getRealSignupCurrentStep() === 1)) ? (tradershubModel.staticEntities.steps.active) : ((((tradershubClientVariables.getRealSignupCurrentStep() < 1)) ? (tradershubModel.staticEntities.steps.next) : (tradershubModel.staticEntities.steps.past))));
                                    }, function() {
                                        return tradershubClientVariables.getRealSignupCurrentStep();
                                    })
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
                                    name: "AccountCurrency2",
                                    alias: "8"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    icon: new PlaceholderContent(function() {
                                        return [$if((tradershubClientVariables.getRealSignupCurrentStep() > 1), false, this, function() {
                                            return [React.createElement(OSWidgets.Icon, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                icon: "check",
                                                iconSize: /*Twotimes*/ 1,
                                                style: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("ccC24elit0qGUu+syfqRew#ValueExpression.3226745.1", "icon"),
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "32"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        }, function() {
                                            return [];
                                        })];
                                    }),
                                    label: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "33"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Text, {
                                            extendedProperties: {
                                                style: "color: #101213;"
                                            },
                                            text: [$text(getTranslation("6yiEe7NMmkakyBhPZlCDsw#Value", "Account currency"))],
                                            _idProps: {
                                                service: idService,
                                                uuid: "34"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(tradershubClientVariables.getRealSignupCurrentStep())]
                            }), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    Status: model.getCachedValue(idService.getId("PersonalDetails2.Status"), function() {
                                        return (((tradershubClientVariables.getRealSignupCurrentStep() === 2)) ? (tradershubModel.staticEntities.steps.active) : ((((tradershubClientVariables.getRealSignupCurrentStep() < 2)) ? (tradershubModel.staticEntities.steps.next) : (tradershubModel.staticEntities.steps.past))));
                                    }, function() {
                                        return tradershubClientVariables.getRealSignupCurrentStep();
                                    })
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
                                    name: "PersonalDetails2",
                                    alias: "9"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    icon: new PlaceholderContent(function() {
                                        return [$if((tradershubClientVariables.getRealSignupCurrentStep() > 2), false, this, function() {
                                            return [React.createElement(OSWidgets.Icon, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                icon: "check",
                                                iconSize: /*Twotimes*/ 1,
                                                style: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("wozlCeYWpkiG21u4kFpNeg#ValueExpression.3226745.1", "icon"),
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "36"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        }, function() {
                                            return [];
                                        })];
                                    }),
                                    label: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "37"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Text, {
                                            extendedProperties: {
                                                style: "color: #101213;"
                                            },
                                            text: [$text(getTranslation("HprxTZESnEm1dWrnbactIg#Value", "Personal details"))],
                                            _idProps: {
                                                service: idService,
                                                uuid: "38"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(tradershubClientVariables.getRealSignupCurrentStep())]
                            }), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    Status: model.getCachedValue(idService.getId("EmploymentDetails2.Status"), function() {
                                        return (((tradershubClientVariables.getRealSignupCurrentStep() === 3)) ? (tradershubModel.staticEntities.steps.active) : ((((tradershubClientVariables.getRealSignupCurrentStep() < 3)) ? (tradershubModel.staticEntities.steps.next) : (tradershubModel.staticEntities.steps.past))));
                                    }, function() {
                                        return tradershubClientVariables.getRealSignupCurrentStep();
                                    })
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
                                    name: "EmploymentDetails2",
                                    alias: "10"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    icon: new PlaceholderContent(function() {
                                        return [$if((tradershubClientVariables.getRealSignupCurrentStep() > 3), false, this, function() {
                                            return [React.createElement(OSWidgets.Icon, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                icon: "check",
                                                iconSize: /*Twotimes*/ 1,
                                                style: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("60LJWhUtjU6YkEOpQXty5w#ValueExpression.3226745.1", "icon"),
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "40"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        }, function() {
                                            return [];
                                        })];
                                    }),
                                    label: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "41"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Text, {
                                            extendedProperties: {
                                                style: "color: #101213;"
                                            },
                                            text: [$text(getTranslation("uUJ9gobL1E6Hjki9Ek_z2g#Value", "Employment details"))],
                                            _idProps: {
                                                service: idService,
                                                uuid: "42"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(tradershubClientVariables.getRealSignupCurrentStep())]
                            }), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    Status: model.getCachedValue(idService.getId("AddressDetails2.Status"), function() {
                                        return (((tradershubClientVariables.getRealSignupCurrentStep() === 4)) ? (tradershubModel.staticEntities.steps.active) : ((((tradershubClientVariables.getRealSignupCurrentStep() < 4)) ? (tradershubModel.staticEntities.steps.next) : (tradershubModel.staticEntities.steps.past))));
                                    }, function() {
                                        return tradershubClientVariables.getRealSignupCurrentStep();
                                    })
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
                                    name: "AddressDetails2",
                                    alias: "11"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    icon: new PlaceholderContent(function() {
                                        return [$if((tradershubClientVariables.getRealSignupCurrentStep() > 4), false, this, function() {
                                            return [React.createElement(OSWidgets.Icon, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                icon: "check",
                                                iconSize: /*Twotimes*/ 1,
                                                style: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("A82oAB7jTk+u34awc1ClTQ#ValueExpression.3226745.1", "icon"),
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "44"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        }, function() {
                                            return [];
                                        })];
                                    }),
                                    label: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "45"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Text, {
                                            extendedProperties: {
                                                style: "color: #101213;"
                                            },
                                            text: [$text(getTranslation("XaX07m9utEqz4IFCKHk1IQ#Value", "Address details"))],
                                            _idProps: {
                                                service: idService,
                                                uuid: "46"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(tradershubClientVariables.getRealSignupCurrentStep())]
                            }), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    Status: model.getCachedValue(idService.getId("TermsOfUse2.Status"), function() {
                                        return (((tradershubClientVariables.getRealSignupCurrentStep() === 5)) ? (tradershubModel.staticEntities.steps.active) : ((((tradershubClientVariables.getRealSignupCurrentStep() < 5)) ? (tradershubModel.staticEntities.steps.next) : (tradershubModel.staticEntities.steps.past))));
                                    }, function() {
                                        return tradershubClientVariables.getRealSignupCurrentStep();
                                    })
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
                                    name: "TermsOfUse2",
                                    alias: "12"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    icon: new PlaceholderContent(function() {
                                        return [$if((tradershubClientVariables.getRealSignupCurrentStep() > 5), false, this, function() {
                                            return [React.createElement(OSWidgets.Icon, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                icon: "check",
                                                iconSize: /*Twotimes*/ 1,
                                                style: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("4eWbPfLxhkyA4QexdkCLug#ValueExpression.3226745.1", "icon"),
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "48"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        }, function() {
                                            return [];
                                        })];
                                    }),
                                    label: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "49"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Text, {
                                            extendedProperties: {
                                                style: "color: #101213;"
                                            },
                                            text: [$text(getTranslation("97AJAO2p1UKJAmK3_cOxHA#Value", "Terms of use"))],
                                            _idProps: {
                                                service: idService,
                                                uuid: "50"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(tradershubClientVariables.getRealSignupCurrentStep())]
                            }))];
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(tradershubClientVariables.getRealSignupCurrentStep()), asPrimitiveValue(tradershubClientVariables.getRealSignupIsIDVSupported())]
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                gridProperties: {
                    classes: "OSInline"
                },
                style: "real-account-signup-layout__main-content",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "MainContent"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                gridProperties: {
                    classes: "OSInline"
                },
                style: "real-account-signup-layout__content",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "52"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "real-account-signup-layout__header-mobile",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "MobileHeader"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "border-color: #F1F3F5; border-style: solid; border-width: 0px 0px 2px 0px; padding: 20px 16px;"
                },
                style: "display-flex align-items-center justify-content-space-between",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "HeaderContainerMobile"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "display-flex",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "LeftArrowContainer"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $if((tradershubClientVariables.getRealSignupCurrentStep() > 1), false, this, function() {
                return [React.createElement(OSWidgets.Link, {
                    enabled: true,
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.previousScreen$Action(controller.callContext(eventHandlerContext));

                        ;
                    },
                    style: "display-flex",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "56"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Image, {
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneArrowLeftSM.svg"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "57"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }))];
            }, function() {
                return [];
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "padding: 0px 16px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    name: "ProgressBarContainer"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OutSystemsUI_Numbers_ProgressBar_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    ProgressColor: tradershubModel.staticEntities.color.primary,
                    Progress: OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(OS.BuiltinFunctions.integerToDecimal(tradershubClientVariables.getRealSignupCurrentStep()).div(OS.BuiltinFunctions.integerToDecimal(6)).times(OS.BuiltinFunctions.integerToDecimal(100)))),
                    Thickness: 8
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
                    uuid: "59",
                    alias: "13"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: PlaceholderContent.Empty
                },
                _dependencies: []
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.onOpenModal$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                visible: true,
                _idProps: {
                    service: idService,
                    name: "CloseContainer"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Image, {
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneMDClose.svg"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "61"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), $if(model.variables.hideTitleIn, false, this, function() {
                return [];
            }, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "padding: 16px; padding-bottom: 0;"
                    },
                    style: "display-flex align-items-center justify-content-space-between",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "TitleContainerMobile"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Expression, {
                    extendedProperties: {
                        style: "color: #101213; font-size: 18px; font-weight: bold;"
                    },
                    value: model.variables.titleIn,
                    _idProps: {
                        service: idService,
                        uuid: "63"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleInDataFetchStatus)
                }))];
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "real-account-signup-layout__header-desktop",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "DesktopHeader"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $if((tradershubClientVariables.getRealSignupCurrentStep() > 1), false, this, function() {
                return [React.createElement(OSWidgets.Link, {
                    enabled: true,
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.previousScreen$Action(controller.callContext(eventHandlerContext));

                        ;
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "65"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Image, {
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.StandaloneArrowLeft.svg"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "66"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }))];
            }, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "67"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }), React.createElement(OSWidgets.Expression, {
                extendedProperties: {
                    style: "color: #333333; font-size: 20px; font-weight: bold;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: model.variables.titleIn,
                _idProps: {
                    service: idService,
                    uuid: "68"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleInDataFetchStatus)
            }), React.createElement(OSWidgets.Image, {
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.onOpenModal$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.closenormal.png"),
                style: "cursor-pointer",
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "69"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), $if(model.variables.isLoadingVar, false, this, function() {
                return [React.createElement(tradershub_Common_LoaderBlock_mvc_view, {
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
                        uuid: "70",
                        alias: "14"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                })];
            }, function() {
                return [React.createElement(OSWidgets.Placeholder, {
                    align: /*Default*/ 0,
                    content: _this.props.placeholders.content,
                    style: "real-account-signup-layout__placeholder",
                    _idProps: {
                        service: idService,
                        name: "Content"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }))), React.createElement(OSWidgets.Popup, {
                extendedProperties: {
                    style: "border-radius: 8px; padding: 16px;"
                },
                showPopup: model.variables.showCloseModalVar,
                style: "popup-dialog",
                _idProps: {
                    service: idService,
                    uuid: "72"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "display-flex align-items-center justify-content-space-between",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "HeaderContainer"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "color: #101213; font-size: 16px; font-weight: bold;"
                },
                text: [$text(getTranslation("wFdeBW5220eorYzALA2eOA#Value", "Exit profile setup"))],
                _idProps: {
                    service: idService,
                    uuid: "74"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Image, {
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.onCloseModal$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                style: "cursor-pointer",
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "75"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "padding: 16px 0px 0px 0px;"
                },
                style: "confirmation-popup__content",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "ContentContainer"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "color: #101213;"
                },
                text: [$text(getTranslation("NPlnceVpDk+tMW25I6omMA#Value", "You will lose your progress."))],
                _idProps: {
                    service: idService,
                    uuid: "77"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Button, {
                enabled: true,
                extendedProperties: {
                    style: "height: 32px; margin-top: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0"
                },
                isDefault: false,
                onClick: function() {
                    var eventHandlerContext = callContext.clone();
                    controller.onCloseModal$Action(controller.callContext(eventHandlerContext));

                    ;
                },
                style: "btn btn-primary",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "78"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                text: [$text(getTranslation("dfo3eZPJdEadIldymCRAug#Value", "Continue setup"))],
                _idProps: {
                    service: idService,
                    uuid: "79"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Button, {
                enabled: true,
                extendedProperties: {
                    style: "height: 32px; margin-top: 8px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0"
                },
                isDefault: false,
                onClick: function() {
                    return Promise.resolve().then(function() {
                        var eventHandlerContext = callContext.clone();
                        return controller.goToDemoOnClick$Action(controller.callContext(eventHandlerContext));
                    });;
                },
                style: "btn",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "80"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                text: [$text(getTranslation("TGotkGwAd0mP+Rfg+z+ejQ#Value", "Go to demo"))],
                _idProps: {
                    service: idService,
                    uuid: "81"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))))));
        }
    }

    return View;
});
define("tradershub.Layouts.RealAccountCreationLayout.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.Layouts.RealAccountCreationLayout.mvc$translationsResources", "tradershub.Layouts.RealAccountCreationLayout.mvc$controller.OnReady.FlatpickrJS", "tradershub.Layouts.RealAccountCreationLayout.mvc$controller.GoToDemoOnClick.RudderStackJS", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "OutSystemsUI.controller$ScrollToElement", "tradershub.controller$SyncAccountInfo"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIModel, OutSystemsUIController, tradershubLanguageResources, tradershubClientVariables, tradershub_Layouts_RealAccountCreationLayout_mvc_TranslationsResources, tradershub_Layouts_RealAccountCreationLayout_mvc_controller_OnReady_FlatpickrJS, tradershub_Layouts_RealAccountCreationLayout_mvc_controller_GoToDemoOnClick_RudderStackJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, tradershub_Layouts_RealAccountCreationLayout_mvc_TranslationsResources);
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
            get _onCloseModal$Action() {
                if (!(this.hasOwnProperty("__onCloseModal$Action"))) {
                    this.__onCloseModal$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnCloseModal", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnCloseModal");
                                span.setAttribute("outsystems.function.key", "3fa93052-da0f-4ec6-84c6-68bdc9fe298c");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnCloseModal");
                                callContext = controller.callContext(callContext);
                                // ShowCloseModal = False
                                model.variables.showCloseModalVar = false;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onCloseModal$Action;
            }
            set _onCloseModal$Action(value) {
                this.__onCloseModal$Action = value;
            }

            get _onReady$Action() {
                if (!(this.hasOwnProperty("__onReady$Action"))) {
                    this.__onReady$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnReady", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnReady");
                                span.setAttribute("outsystems.function.key", "61a8c98a-1ffb-4382-9765-e71faa59f643");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var scrollToElementVar = new OS.DataTypes.VariableHolder();
                                // Execute Action: ScrollToElement
                                scrollToElementVar.value = OutSystemsUIController.default.scrollToElement$Action(idService.getId("HeaderContainer"), true, 0, model.variables.titleIn, 0, callContext);

                                OS.Logger.startActiveSpan("Flatpickr", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "Flatpickr");
                                        span.setAttribute("outsystems.function.key", "92d30d69-810f-455a-b4c5-973528316133");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_Layouts_RealAccountCreationLayout_mvc_controller_OnReady_FlatpickrJS, "Flatpickr", "OnReady", null, function($parameters) {}, {}, {});
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

                return this.__onReady$Action;
            }
            set _onReady$Action(value) {
                this.__onReady$Action = value;
            }

            get _onDestroy$Action() {
                if (!(this.hasOwnProperty("__onDestroy$Action"))) {
                    this.__onDestroy$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnDestroy", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnDestroy");
                                span.setAttribute("outsystems.function.key", "8e01303b-543f-4139-aed4-8049b3b0c73c");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnDestroy");
                                callContext = controller.callContext(callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onDestroy$Action;
            }
            set _onDestroy$Action(value) {
                this.__onDestroy$Action = value;
            }

            get _goToDemoOnClick$Action() {
                if (!(this.hasOwnProperty("__goToDemoOnClick$Action"))) {
                    this.__goToDemoOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("GoToDemoOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GoToDemoOnClick");
                                span.setAttribute("outsystems.function.key", "90bca2f7-c283-42a3-bc22-e018b7b45819");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("GoToDemoOnClick");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    return OS.Logger.startActiveSpan("RudderStack", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "RudderStack");
                                            span.setAttribute("outsystems.function.key", "90b982d7-4bbd-4e22-94c6-0964d0ee3563");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteAsyncJSNode(tradershub_Layouts_RealAccountCreationLayout_mvc_controller_GoToDemoOnClick_RudderStackJS, "RudderStack", "GoToDemoOnClick", {
                                                StepNumber: OS.DataConversion.JSNodeParamConverter.to(model.variables.analyticsIn.stepNumberAttr, OS.DataTypes.DataTypes.Text),
                                                StepCodename: OS.DataConversion.JSNodeParamConverter.to(model.variables.analyticsIn.stepCodenameAttr, OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {}, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1).then(function() {
                                        // Execute Action: SyncAccountInfoWithRedirect
                                        tradershubController.default.syncAccountInfo$Action(callContext);
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

                return this.__goToDemoOnClick$Action;
            }
            set _goToDemoOnClick$Action(value) {
                this.__goToDemoOnClick$Action = value;
            }

            get _onInitialize$Action() {
                if (!(this.hasOwnProperty("__onInitialize$Action"))) {
                    this.__onInitialize$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnInitialize", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnInitialize");
                                span.setAttribute("outsystems.function.key", "91980ee4-5c5c-4cbb-b7ad-b52efdb573ff");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                // IsLoading = True
                                model.variables.isLoadingVar = true;
                                if ((((tradershubClientVariables.getAuthToken() === OS.BuiltinFunctions.nullTextIdentifier()) || (tradershubClientVariables.getActiveLoginId() === (OS.BuiltinFunctions.nullIdentifier()).toString())))) {
                                    // Destination: /tradershub/
                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://app.deriv.com", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                } else {
                                    if ((((OS.BuiltinFunctions.index(tradershubClientVariables.getActiveLoginId(), "VRTC", 0, false, true) === -1) || !(tradershubClientVariables.getInitializeRealSignup())))) {
                                        // Execute Action: SyncAccountInfo
                                        tradershubController.default.syncAccountInfo$Action(callContext);
                                    } else {
                                        // IsLoading = False
                                        model.variables.isLoadingVar = false;
                                    }

                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onInitialize$Action;
            }
            set _onInitialize$Action(value) {
                this.__onInitialize$Action = value;
            }

            get _onOpenModal$Action() {
                if (!(this.hasOwnProperty("__onOpenModal$Action"))) {
                    this.__onOpenModal$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnOpenModal", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnOpenModal");
                                span.setAttribute("outsystems.function.key", "bc753c43-7c5e-4f8b-a20d-c61dcd7f55cb");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnOpenModal");
                                callContext = controller.callContext(callContext);
                                // ShowCloseModal = True
                                model.variables.showCloseModalVar = true;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onOpenModal$Action;
            }
            set _onOpenModal$Action(value) {
                this.__onOpenModal$Action = value;
            }

            get _previousScreen$Action() {
                if (!(this.hasOwnProperty("__previousScreen$Action"))) {
                    this.__previousScreen$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("PreviousScreen", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "PreviousScreen");
                                span.setAttribute("outsystems.function.key", "d76b8eda-0191-4207-84af-7d33624c28ee");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("PreviousScreen");
                                callContext = controller.callContext(callContext);
                                // Destination: (PreviousScreen)
                                return OS.Navigation.navigateBack(null, callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__previousScreen$Action;
            }
            set _previousScreen$Action(value) {
                this.__previousScreen$Action = value;
            }


            onCloseModal$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnCloseModal__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnCloseModal");
                        span.setAttribute("outsystems.function.key", "3fa93052-da0f-4ec6-84c6-68bdc9fe298c");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onCloseModal$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "61a8c98a-1ffb-4382-9765-e71faa59f643");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onReady$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onDestroy$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnDestroy__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnDestroy");
                        span.setAttribute("outsystems.function.key", "8e01303b-543f-4139-aed4-8049b3b0c73c");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            goToDemoOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("GoToDemoOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "GoToDemoOnClick");
                        span.setAttribute("outsystems.function.key", "90bca2f7-c283-42a3-bc22-e018b7b45819");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._goToDemoOnClick$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "91980ee4-5c5c-4cbb-b7ad-b52efdb573ff");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onOpenModal$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnOpenModal__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnOpenModal");
                        span.setAttribute("outsystems.function.key", "bc753c43-7c5e-4f8b-a20d-c61dcd7f55cb");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onOpenModal$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            previousScreen$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("PreviousScreen__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "PreviousScreen");
                        span.setAttribute("outsystems.function.key", "d76b8eda-0191-4207-84af-7d33624c28ee");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._previousScreen$Action, callContext);
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
                    this._onInitializeEventHandler = function(callContext) {
                        var controller = this.controller;
                        var model = this.model;
                        var idService = this.idService;

                        return controller.onInitialize$Action(callContext);

                    };
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
                    this._onDestroyEventHandler = function(callContext) {
                        var controller = this.controller;
                        var model = this.model;
                        var idService = this.idService;

                        return controller.onDestroy$Action(callContext);

                    };
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

define("tradershub.Layouts.RealAccountCreationLayout.mvc$controller.OnReady.FlatpickrJS", [], function() {
    return function($actions, $roles, $public) {
        if (!window.flatpickr) {
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css';

            document.head.appendChild(link);
        }


    };
});

define("tradershub.Layouts.RealAccountCreationLayout.mvc$controller.GoToDemoOnClick.RudderStackJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        return new Promise(function($resolve, $reject) {
            cacheTrackEvents.track({
                name: "ce_real_account_signup_form",
                properties: {
                    action: "close",
                    step_num: Number($parameters.StepNumber),
                    step_codename: $parameters.StepCodename,
                    form_name: "real_account_signup_form_outsystems"
                }
            });
            $resolve()
        });
    };
});


define("tradershub.Layouts.RealAccountCreationLayout.mvc$translationsResources.fr-FR", [], function() {
    return {
        "TGotkGwAd0mP+Rfg+z+ejQ#Value": "Aller à la démo",
        "dfo3eZPJdEadIldymCRAug#Value": "Continuer la configuration",
        "NPlnceVpDk+tMW25I6omMA#Value": "Vous allez perdre vos progrès.",
        "wFdeBW5220eorYzALA2eOA#Value": "Configuration du profil de sortie",
        "97AJAO2p1UKJAmK3_cOxHA#Value": "Conditions d\'utilisation",
        "4eWbPfLxhkyA4QexdkCLug#ValueExpression.3226745.1": "icon",
        "XaX07m9utEqz4IFCKHk1IQ#Value": "Détails de l\'adresse",
        "A82oAB7jTk+u34awc1ClTQ#ValueExpression.3226745.1": "icon",
        "uUJ9gobL1E6Hjki9Ek_z2g#Value": "Détails de l\'emploi",
        "60LJWhUtjU6YkEOpQXty5w#ValueExpression.3226745.1": "icon",
        "HprxTZESnEm1dWrnbactIg#Value": "Détails personnels",
        "wozlCeYWpkiG21u4kFpNeg#ValueExpression.3226745.1": "icon",
        "6yiEe7NMmkakyBhPZlCDsw#Value": "Devise du compte",
        "ccC24elit0qGUu+syfqRew#ValueExpression.3226745.1": "icon",
        "GUwJJeampkGR2XUJyILgfw#Value": "Conditions d\'utilisation",
        "toj9jrU0oUKtEIi32OKkUA#ValueExpression.3226745.1": "icon",
        "gi313ljLuU6jS8TOtY5r2w#Value": "Détails de l\'adresse",
        "L59znZgIrUGZoNRU38+OJg#ValueExpression.3226745.1": "icon",
        "vw6lScPcw0+Fmxkmet36Cg#Value": "Détails de l\'emploi",
        "LHEnYOw__ECNBkNAfVUV1g#ValueExpression.3226745.1": "icon",
        "WnNWxB+9Qk6Fll_MJQySwg#Value": "Vérification d\'identité",
        "2EEIVitDwkelS+H9TRyCmQ#ValueExpression.3226745.1": "icon",
        "HSuugJpXv0yhQKBD_yZzRA#Value": "Détails personnels",
        "w2KrMBCITEuwkvTmK27h9Q#ValueExpression.3226745.1": "icon",
        "NFfRCmwYtkyXwItR0dgtAw#Value": "Devise du compte",
        "SOfKJ5_BB0OpkR2bFQGiPQ#ValueExpression.3226745.1": "icon",
        "00Hg9JXhFU+VYKs5xFdaZg#Value": "Ajouter un compte réel"
    };
});

define("tradershub.Layouts.RealAccountCreationLayout.mvc$translationsResources", ["exports", "tradershub.Layouts.RealAccountCreationLayout.mvc$translationsResources.fr-FR"], function(exports, tradershub_Layouts_RealAccountCreationLayout_mvc_translationsResources_frFR) {
    return {
        "fr-FR": {
            "translations": tradershub_Layouts_RealAccountCreationLayout_mvc_translationsResources_frFR,
            "isRTL": false
        }
    };
});