define("tradershub.WalletFlows.WalletCryptoDeposit.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.controller", "RESTAPIWebsocketOfficial.model", "tradershub.controller", "OutSystemsUI.model", "tradershub.Layouts.MainLayout.mvc$model", "tradershub.WalletBlocks.WalletOverlayPage.mvc$model", "OutSystemsUI.Content.Tooltip.mvc$model", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecord", "RESTAPIWebsocketOfficial.model$ST_2f46c6fecf81fe9d91763f789141eec9Structure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$PostCashierCrypto", "tradershub.model$ST_52667a49e65b5175f66dacecb12f345fStructure", "tradershub.controller$GetAccountByLoginId", "tradershub.model$RC_6a44851bc01e80a885c4aa0ae740b8fc", "tradershub.model$RL_5ee36d8deb03b51810340e621ea66d4b", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "OutSystemsUI.controller$TooltipOpen", "OutSystemsUI.controller$TooltipClose"], function(OSRuntimeCore, tradershubModel, OutSystemsUIController, RESTAPIWebsocketOfficialModel, tradershubController, OutSystemsUIModel, tradershub_Layouts_MainLayout_mvcModel, tradershub_WalletBlocks_WalletOverlayPage_mvcModel, OutSystemsUI_Content_Tooltip_mvcModel) {
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
                    this.attr("CryptoAddress", "cryptoAddressVar", "CryptoAddress", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("HasError", "hasErrorVar", "HasError", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("ErrorMessage", "errorMessageVar", "ErrorMessage", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("Currency", "currencyVar", "Currency", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecord());
                    }, false, tradershubModel.EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecord),
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
                Model._hasValidationWidgetsValue = ((tradershub_Layouts_MainLayout_mvcModel.hasValidationWidgets || tradershub_WalletBlocks_WalletOverlayPage_mvcModel.hasValidationWidgets) || OutSystemsUI_Content_Tooltip_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.WalletFlows.WalletCryptoDeposit.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "RESTAPIWebsocketOfficial.model", "OutSystemsUI.model", "react", "@outsystems/runtime-view-js", "tradershub.WalletFlows.WalletCryptoDeposit.mvc$model", "tradershub.WalletFlows.WalletCryptoDeposit.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.MainLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.WalletBlocks.WalletOverlayPage.mvc$view", "OutSystemsUI.Content.Tooltip.mvc$view", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecord", "RESTAPIWebsocketOfficial.model$ST_2f46c6fecf81fe9d91763f789141eec9Structure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$PostCashierCrypto", "tradershub.model$ST_52667a49e65b5175f66dacecb12f345fStructure", "tradershub.controller$GetAccountByLoginId", "tradershub.model$RC_6a44851bc01e80a885c4aa0ae740b8fc", "tradershub.model$RL_5ee36d8deb03b51810340e621ea66d4b", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "OutSystemsUI.controller$TooltipOpen", "OutSystemsUI.controller$TooltipClose"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, RESTAPIWebsocketOfficialModel, OutSystemsUIModel, React, OSView, tradershub_WalletFlows_WalletCryptoDeposit_mvc_model, tradershub_WalletFlows_WalletCryptoDeposit_mvc_controller, tradershubClientVariables, tradershub_Layouts_MainLayout_mvc_view, OSWidgets, tradershub_WalletBlocks_WalletOverlayPage_mvc_view, OutSystemsUI_Content_Tooltip_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "WalletFlows.WalletCryptoDeposit";
        }

        static getAttributes() {
            return {
                codeFunction: "WalletCryptoDeposit",
                functionKey: "8d6b7376-5aa9-48d7-b544-f630d5049791",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.WalletFlows.WalletCryptoDeposit.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return ["scripts/tradershub.QRCodeJS.js"];
        }

        static getBlocks() {
            return [tradershub_Layouts_MainLayout_mvc_view, tradershub_WalletBlocks_WalletOverlayPage_mvc_view, OutSystemsUI_Content_Tooltip_mvc_view];
        }

        get modelFactory() {
            return tradershub_WalletFlows_WalletCryptoDeposit_mvc_model;
        }

        get controllerFactory() {
            return tradershub_WalletFlows_WalletCryptoDeposit_mvc_controller;
        }

        get title() {


            return "WalletCryptoDeposit";
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
                    ActiveTab: 3
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
                        return [React.createElement(OSWidgets.Popup, {
                            showPopup: model.variables.hasErrorVar,
                            style: "popup-dialog",
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex flex-direction-column margin-bottom-base",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 24px; padding: 0px 0px 16px 0px;"
                            },
                            style: "font-bold",
                            text: ["Error"],
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Expression, {
                            gridProperties: {
                                marginLeft: "0"
                            },
                            value: model.variables.errorMessageVar,
                            _idProps: {
                                service: idService,
                                uuid: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "full-width display-flex justify-content-flex-end",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Button, {
                            enabled: true,
                            extendedProperties: {
                                style: "border-color: #222;"
                            },
                            isDefault: false,
                            onClick: function() {
                                try {
                                    OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "options", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade), null, true);
                                } catch (ex) {
                                    if (((ex.name) !== ("RedirectOccurredException"))) {
                                        throw ex;
                                    }

                                };
                            },
                            style: "btn",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "color: #222; margin-left: Auto;"
                            },
                            text: ["Go back"],
                            _idProps: {
                                service: idService,
                                uuid: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })))), React.createElement(tradershub_WalletBlocks_WalletOverlayPage_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                IsLoading: model.variables.isLoadingVar,
                                PageTitle: "Deposits"
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
                                uuid: "8",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                walletOverlayPageContent: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: model.getCachedValue(idService.getId("Mc6TfgfTXUqFzyWlAridrw.Style"), function() {
                                            return ("display-flex justify-content-space-between align-items-center flex-direction-column gap-m " + ((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut) ? ("margin-top-m") : ("margin-top-base")));
                                        }),
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Expression, {
                                        extendedProperties: {
                                            style: "font-size: 16px;"
                                        },
                                        style: "font-bold",
                                        value: (((("Send only " + model.variables.currencyVar.nameAttr) + " (") + model.variables.currencyVar.codeAttr) + ") to this address"),
                                        _idProps: {
                                            service: idService,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "height: 156px;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "156px"
                                        },
                                        style: "QRContainer",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "QRCode"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "border-color: #CED4DA; border-style: solid; border-width: 1px; padding-bottom: 9.5px; padding-left: var(--space-base); padding-right: var(--space-base); padding-top: 9.5px; text-align: left;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "full",
                                            marginLeft: "0px"
                                        },
                                        style: "padding-x-base display-flex align-items-center border-radius-soft full-width crypto-address-container",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "CryptoAddressContainer"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Expression, {
                                        style: "flex-1 font-size-s crypto-address-input",
                                        value: model.variables.cryptoAddressVar,
                                        _idProps: {
                                            service: idService,
                                            uuid: "13"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OutSystemsUI_Content_Tooltip_mvc_view, {
                                        getOwnerSpan: function() {
                                            return _this.getChildSpan("render");
                                        },
                                        getOwnerDisposeSpan: function() {
                                            return _this.getChildSpan("destroy");
                                        },
                                        inputs: {
                                            Position: tradershubModel.staticEntities.position.topRight,
                                            Trigger: tradershubModel.staticEntities.trigger.onClick
                                        },
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            },
                                            onToggle$Action: function(tooltipIdIn, isOpenedIn) {
                                                var eventHandlerContext = callContext.clone();
                                                controller.toggleTooltip$Action(controller.callContext(eventHandlerContext));

                                                ;
                                            }
                                        },
                                        _validationProps: {
                                            validationService: validationService
                                        },
                                        _idProps: {
                                            service: idService,
                                            name: "ClipboardTooltip",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            content: new PlaceholderContent(function() {
                                                return [React.createElement(OSWidgets.Button, {
                                                    enabled: true,
                                                    extendedProperties: {
                                                        style: "background-color: #fff; border-width: 0px;"
                                                    },
                                                    isDefault: false,
                                                    onClick: function() {
                                                        var eventHandlerContext = callContext.clone();
                                                        controller.clipboardAction$Action(controller.callContext(eventHandlerContext));

                                                        ;
                                                    },
                                                    style: "cursor-pointer",
                                                    visible: true,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "15"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }, React.createElement(OSWidgets.Image, {
                                                    extendedProperties: {
                                                        style: "font-size: 16px;"
                                                    },
                                                    gridProperties: {
                                                        width: "14px"
                                                    },
                                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.clipboard_bold.svg"),
                                                    type: /*Static*/ 0,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "16"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }))];
                                            }),
                                            tooltip: new PlaceholderContent(function() {
                                                return ["Copied"];
                                            })
                                        },
                                        _dependencies: []
                                    })), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "border-radius: 8px;"
                                        },
                                        style: model.getCachedValue(idService.getId("DisclaimerMessage.Style"), function() {
                                            return (" display-flex align-items-flex-start gap-s background-warning-light " + ((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut) ? ("padding-base") : ("padding-s")));
                                        }),
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "DisclaimerMessage"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Image, {
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.caution.svg"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "18"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "display-flex flex-direction-column",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "19"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "font-weight: bold;"
                                        },
                                        style: model.getCachedValue(idService.getId("ZtOd9uYc1UOO3qNrfxQlnA.Style"), function() {
                                            return ((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut) ? ("font-size-s") : ("font-size-xs"));
                                        }),
                                        text: ["To avoid loss of funds:"],
                                        _idProps: {
                                            service: idService,
                                            uuid: "20"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.AdvancedHtml, {
                                        tag: "ul",
                                        _idProps: {
                                            service: idService,
                                            uuid: "21"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.AdvancedHtml, {
                                        tag: "li",
                                        _idProps: {
                                            service: idService,
                                            uuid: "22"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Expression, {
                                        style: model.getCachedValue(idService.getId("CYOuNT1u_ESRS+iFD5O3JQ.Style"), function() {
                                            return ((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut) ? ("font-size-s") : ("font-size-xs"));
                                        }),
                                        value: ((((("Only send " + model.variables.currencyVar.nameAttr) + " (") + model.variables.currencyVar.codeAttr) + ") ") + " to this address."),
                                        _idProps: {
                                            service: idService,
                                            uuid: "23"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })), React.createElement(OSWidgets.AdvancedHtml, {
                                        tag: "li",
                                        _idProps: {
                                            service: idService,
                                            uuid: "24"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Expression, {
                                        style: model.getCachedValue(idService.getId("S6nAczhyqUu2NHtZ1_s2vg.Style"), function() {
                                            return ((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut) ? ("font-size-s") : ("font-size-xs"));
                                        }),
                                        value: (("Make sure to copy the Deriv " + model.variables.currencyVar.codeAttr) + " Wallet address to your crypto wallet."),
                                        _idProps: {
                                            service: idService,
                                            uuid: "25"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })), React.createElement(OSWidgets.AdvancedHtml, {
                                        tag: "li",
                                        _idProps: {
                                            service: idService,
                                            uuid: "26"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Expression, {
                                        style: model.getCachedValue(idService.getId("nPxpqu58uEuW8b__Szyk_w.Style"), function() {
                                            return ((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut) ? ("font-size-s") : ("font-size-xs"));
                                        }),
                                        value: (((("In your crypto wallet, select the " + model.variables.currencyVar.nameAttr) + " (") + model.variables.currencyVar.codeAttr) + ") network when transferring to Deriv. Incorrect transfers may result in loss of funds."),
                                        _idProps: {
                                            service: idService,
                                            uuid: "27"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))))), React.createElement(OSWidgets.Button, {
                                        enabled: true,
                                        extendedProperties: {
                                            style: "border-color: #272B30; font-size: 14px;"
                                        },
                                        isDefault: false,
                                        onClick: function() {
                                            try {
                                                OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "deposit-crypto", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), null, true);
                                            } catch (ex) {
                                                if (((ex.name) !== ("RedirectOccurredException"))) {
                                                    throw ex;
                                                }

                                            };
                                        },
                                        style: "btn btn-cancel",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "28"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "color: #101213; font-size: 14px;"
                                        },
                                        text: ["View transactions"],
                                        _idProps: {
                                            service: idService,
                                            uuid: "29"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })))];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.cryptoAddressVar), asPrimitiveValue(model.variables.currencyVar.codeAttr), asPrimitiveValue(model.variables.currencyVar.nameAttr)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.cryptoAddressVar), asPrimitiveValue(model.variables.currencyVar.codeAttr), asPrimitiveValue(model.variables.currencyVar.nameAttr), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.errorMessageVar), asPrimitiveValue(model.variables.hasErrorVar)]
            }));
        }
    }

    return View;
});
define("tradershub.WalletFlows.WalletCryptoDeposit.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "RESTAPIWebsocketOfficial.model", "OutSystemsUI.model", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.WalletFlows.controller", "tradershub.WalletFlows.WalletCryptoDeposit.mvc$controller.ClipboardAction.ClipboardActionJS", "tradershub.WalletFlows.WalletCryptoDeposit.mvc$controller.OnRender.InitQRJS", "tradershub.WalletFlows.WalletCryptoDeposit.mvc$controller.ToggleTooltip.JavaScript1JS", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecord", "RESTAPIWebsocketOfficial.model$ST_2f46c6fecf81fe9d91763f789141eec9Structure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$PostCashierCrypto", "tradershub.model$ST_52667a49e65b5175f66dacecb12f345fStructure", "tradershub.controller$GetAccountByLoginId", "tradershub.model$RC_6a44851bc01e80a885c4aa0ae740b8fc", "tradershub.model$RL_5ee36d8deb03b51810340e621ea66d4b", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "OutSystemsUI.controller$TooltipOpen", "OutSystemsUI.controller$TooltipClose"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, RESTAPIWebsocketOfficialModel, OutSystemsUIModel, tradershubLanguageResources, tradershubClientVariables, tradershub_WalletFlowsController, tradershub_WalletFlows_WalletCryptoDeposit_mvc_controller_ClipboardAction_ClipboardActionJS, tradershub_WalletFlows_WalletCryptoDeposit_mvc_controller_OnRender_InitQRJS, tradershub_WalletFlows_WalletCryptoDeposit_mvc_controller_ToggleTooltip_JavaScript1JS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService);
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
                            return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetCurrencies", "screenservices/tradershub/WalletFlows/WalletCryptoDeposit/ScreenDataSetGetCurrencies", "7ZDQVZcK1tWZhNuYKqZ8hQ", maxRecords, startIndex, function(b) {
                                model.variables.getCurrenciesAggr.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.getCurrenciesAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getCurrenciesAggr.constructor));
                            }, undefined, undefined, undefined, callContext, undefined, false).then(function() {
                                controller._getCurrenciesOnAfterFetch$Action(controller.callContext(callContext));
                            });
                        }.bind(this);
                        return OS.Logger.startActiveSpan("GetCurrencies", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetCurrencies");
                                span.setAttribute("outsystems.function.key", "692abfde-a25b-4da4-8efd-c16df055b0b0");
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
            get _onReady$Action() {
                if (!(this.hasOwnProperty("__onReady$Action"))) {
                    this.__onReady$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnReady", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnReady");
                                span.setAttribute("outsystems.function.key", "28416295-2fd0-495f-92de-652db6e904ad");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var postCashierCryptoVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // IsLoading = True
                                    model.variables.isLoadingVar = true;
                                    // Execute Action: PostCashierCrypto
                                    model.flush();
                                    return tradershubController.default.postCashierCrypto$Action("deposit", callContext).then(function(value) {
                                        postCashierCryptoVar.value = value;
                                    }).then(function() {
                                        // CryptoAddress = PostCashierCrypto.Response.Cashier.Deposit.Address
                                        model.variables.cryptoAddressVar = postCashierCryptoVar.value.responseOut.cashierAttr.depositAttr.addressAttr;
                                        // IsLoading = False
                                        model.variables.isLoadingVar = false;
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

            get _getCurrenciesOnAfterFetch$Action() {
                if (!(this.hasOwnProperty("__getCurrenciesOnAfterFetch$Action"))) {
                    this.__getCurrenciesOnAfterFetch$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("GetCurrenciesOnAfterFetch", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetCurrenciesOnAfterFetch");
                                span.setAttribute("outsystems.function.key", "66161f2d-22c4-4737-983c-1361ef43aed8");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("GetCurrenciesOnAfterFetch");
                                callContext = controller.callContext(callContext);
                                var listFilterVar = new OS.DataTypes.VariableHolder();
                                var getAccountByLoginIdVar = new OS.DataTypes.VariableHolder();
                                // Execute Action: GetAccountByLoginId
                                getAccountByLoginIdVar.value = tradershubController.default.getAccountByLoginId$Action(tradershubClientVariables.getActiveLoginId(), callContext);

                                // Execute Action: ListFilter
                                listFilterVar.value = OS.SystemActions.listFilter(model.variables.getCurrenciesAggr.listOut, function(p) {
                                    return (p.currenciesAttr.codeAttr === getAccountByLoginIdVar.value.accountOut.currencyAttr);
                                }, callContext);

                                // Currency = ListFilter.FilteredList.Current
                                model.variables.currencyVar = listFilterVar.value.filteredListOut.getCurrent(callContext.iterationContext).currenciesAttr;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__getCurrenciesOnAfterFetch$Action;
            }
            set _getCurrenciesOnAfterFetch$Action(value) {
                this.__getCurrenciesOnAfterFetch$Action = value;
            }

            get _clipboardAction$Action() {
                if (!(this.hasOwnProperty("__clipboardAction$Action"))) {
                    this.__clipboardAction$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ClipboardAction", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ClipboardAction");
                                span.setAttribute("outsystems.function.key", "6dba5fea-499a-47be-a472-5fde952c6c27");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("ClipboardAction");
                                callContext = controller.callContext(callContext);
                                OS.Logger.startActiveSpan("ClipboardAction", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "ClipboardAction");
                                        span.setAttribute("outsystems.function.key", "9d81bf5b-63a1-4a10-8e0a-f4e863272ee5");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_WalletFlows_WalletCryptoDeposit_mvc_controller_ClipboardAction_ClipboardActionJS, "ClipboardAction", "ClipboardAction", null, function($parameters) {}, {}, {});
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

                return this.__clipboardAction$Action;
            }
            set _clipboardAction$Action(value) {
                this.__clipboardAction$Action = value;
            }

            get _onRender$Action() {
                if (!(this.hasOwnProperty("__onRender$Action"))) {
                    this.__onRender$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnRender", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnRender");
                                span.setAttribute("outsystems.function.key", "8d559dbf-56d7-4900-bfe5-fd522eeca08b");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnRender");
                                callContext = controller.callContext(callContext);
                                OS.Logger.startActiveSpan("InitQR", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "InitQR");
                                        span.setAttribute("outsystems.function.key", "5d91dacb-ae52-41e3-a82d-42b564d42217");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_WalletFlows_WalletCryptoDeposit_mvc_controller_OnRender_InitQRJS, "InitQR", "OnRender", {
                                            CryptoAddress: OS.DataConversion.JSNodeParamConverter.to(model.variables.cryptoAddressVar, OS.DataTypes.DataTypes.Text)
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

                return this.__onRender$Action;
            }
            set _onRender$Action(value) {
                this.__onRender$Action = value;
            }

            get _toggleTooltip$Action() {
                if (!(this.hasOwnProperty("__toggleTooltip$Action"))) {
                    this.__toggleTooltip$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ToggleTooltip", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ToggleTooltip");
                                span.setAttribute("outsystems.function.key", "96e6fc3b-0ec0-4d57-b906-1c17c80bbb31");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("ToggleTooltip");
                                callContext = controller.callContext(callContext);
                                OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "JavaScript1");
                                        span.setAttribute("outsystems.function.key", "35b8c396-5819-4ca4-841c-add7be354241");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_WalletFlows_WalletCryptoDeposit_mvc_controller_ToggleTooltip_JavaScript1JS, "JavaScript1", "ToggleTooltip", null, function($parameters) {}, {
                                            TooltipOpen: OutSystemsUIController.default.clientActionProxies.tooltipOpen$Action,
                                            TooltipClose: OutSystemsUIController.default.clientActionProxies.tooltipClose$Action
                                        }, {});
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

                return this.__toggleTooltip$Action;
            }
            set _toggleTooltip$Action(value) {
                this.__toggleTooltip$Action = value;
            }


            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "28416295-2fd0-495f-92de-652db6e904ad");
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

            getCurrenciesOnAfterFetch$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("GetCurrenciesOnAfterFetch__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "GetCurrenciesOnAfterFetch");
                        span.setAttribute("outsystems.function.key", "66161f2d-22c4-4737-983c-1361ef43aed8");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._getCurrenciesOnAfterFetch$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            clipboardAction$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ClipboardAction__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ClipboardAction");
                        span.setAttribute("outsystems.function.key", "6dba5fea-499a-47be-a472-5fde952c6c27");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._clipboardAction$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onRender$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnRender__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnRender");
                        span.setAttribute("outsystems.function.key", "8d559dbf-56d7-4900-bfe5-fd522eeca08b");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onRender$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            toggleTooltip$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ToggleTooltip__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ToggleTooltip");
                        span.setAttribute("outsystems.function.key", "96e6fc3b-0ec0-4d57-b906-1c17c80bbb31");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._toggleTooltip$Action, callContext);
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
                    this._onRenderEventHandler = function(callContext) {
                        var controller = this.controller;
                        var model = this.model;
                        var idService = this.idService;

                        return controller.onRender$Action(callContext);

                    };
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
                        return tradershub_WalletFlowsController.default.handleError(ex, this.callContext());
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

define("tradershub.WalletFlows.WalletCryptoDeposit.mvc$controller.ClipboardAction.ClipboardActionJS", [], function() {
    return function($actions, $roles, $public) {
        var copiedTextElement = document.getElementsByClassName("cypto-address-container")[0];

        if (copiedTextElement) {
            var copiedText = copiedTextElement.textContent;

            // Copy the text to the clipboard
            navigator.clipboard.writeText(copiedText)
                .catch(err => {
                    console.error('Failed to copy text: ', err);
                });
        }
    };
});

define("tradershub.WalletFlows.WalletCryptoDeposit.mvc$controller.OnRender.InitQRJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const qrCodeElement = document.getElementById('QRCode');
        if (qrCodeElement && window.QRCode) {
            // Check if the QR code has already been rendered
            if (qrCodeElement.childNodes.length === 0) {
                new QRCode(qrCodeElement, {
                    text: $parameters.CryptoAddress,
                    width: 156,
                    height: 156,
                });
            }
        }

    };
});

define("tradershub.WalletFlows.WalletCryptoDeposit.mvc$controller.ToggleTooltip.JavaScript1JS", [], function() {
    return function($actions, $roles, $public) {
        if ($actions.TooltipOpen(ClipboardTooltip.id)) {
            setTimeout(() => {
                $actions.TooltipClose(ClipboardTooltip.id)
            }, 3000);
        }
    };
});