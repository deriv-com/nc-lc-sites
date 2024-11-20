define("tradershub.CFDBlocks.MT5TradeModal.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.controller", "tradershub.CFDBlocks.MaintenanceMessage.mvc$model", "OutSystemsUI.controller$IsPhone", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$IsDesktop", "tradershub.model$ST_148480cbe068b64f08f2cd9823941166Structure"], function(OSRuntimeCore, tradershubModel, OutSystemsUIController, tradershub_CFDBlocks_MaintenanceMessage_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DisplayLogin", "displayLoginVar", "DisplayLogin", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("IsVisible", "isVisibleIn", "IsVisible", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("SelectedAccount", "selectedAccountIn", "SelectedAccount", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_148480cbe068b64f08f2cd9823941166Structure());
                    }, false, tradershubModel.ST_148480cbe068b64f08f2cd9823941166Structure),
                    this.attr("_selectedAccountInDataFetchStatus", "_selectedAccountInDataFetchStatus", "_selectedAccountInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                Model._hasValidationWidgetsValue = tradershub_CFDBlocks_MaintenanceMessage_mvcModel.hasValidationWidgets;
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {
            if ("IsVisible" in inputs) {
                this.variables.isVisibleIn = inputs.IsVisible;
                if ("_isVisibleInDataFetchStatus" in inputs) {
                    this.variables._isVisibleInDataFetchStatus = inputs._isVisibleInDataFetchStatus;
                }

            }

            if ("SelectedAccount" in inputs) {
                this.variables.selectedAccountIn = inputs.SelectedAccount;
                if ("_selectedAccountInDataFetchStatus" in inputs) {
                    this.variables._selectedAccountInDataFetchStatus = inputs._selectedAccountInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.CFDBlocks.MT5TradeModal.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "tradershub.CFDBlocks.MT5TradeModal.mvc$model", "tradershub.CFDBlocks.MT5TradeModal.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js", "tradershub.CFDBlocks.MaintenanceMessage.mvc$view", "OutSystemsUI.controller$IsPhone", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$IsDesktop", "tradershub.model$ST_148480cbe068b64f08f2cd9823941166Structure"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, React, OSView, tradershub_CFDBlocks_MT5TradeModal_mvc_model, tradershub_CFDBlocks_MT5TradeModal_mvc_controller, tradershubClientVariables, OSWidgets, tradershub_CFDBlocks_MaintenanceMessage_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "CFDBlocks.MT5TradeModal";
        }

        static getAttributes() {
            return {
                codeFunction: "MT5TradeModal",
                functionKey: "83dddc5f-f2ca-4f25-9c74-643d50dd600a",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"];
        }

        static getJsDependencies() {
            return ["scripts/tradershub.QRCodeJS.js"];
        }

        static getBlocks() {
            return [tradershub_CFDBlocks_MaintenanceMessage_mvc_view];
        }

        get modelFactory() {
            return tradershub_CFDBlocks_MT5TradeModal_mvc_model;
        }

        get controllerFactory() {
            return tradershub_CFDBlocks_MT5TradeModal_mvc_controller;
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
                    style: ("height: 100vh; padding: 16px;" + ((OutSystemsUIController.default.isPhone$Action(callContext).isPhoneOut) ? ("") : ("overflow:scroll")))
                },
                showPopup: model.variables.isVisibleIn,
                style: "full-height-popup",
                _idProps: {
                    service: idService,
                    name: "PopupWrapper"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                showPopup_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isVisibleInDataFetchStatus)
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "border-color: #E9ECEF; border-style: none none solid none; border-width: 0px 0px 1px 0px; padding: 14px 16px;"
                },
                style: "display-flex align-items-center justify-content-space-between",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Mt5TradeModalHeader"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                text: ["Account details"],
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Image, {
                extendedEvents: {
                    onClick: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return controller.closeOnClick$Action(controller.callContext(eventHandlerContext));
                        });;
                    }
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    name: "CloseIcon2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: ("padding: 16px;" + ((OutSystemsUIController.default.isPhone$Action(callContext).isPhoneOut) ? ("overflow: scroll; height: calc(100vh - 200px);") : ("")))
                },
                style: "display-flex flex-direction-column display-flex flex-1 gap-m",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Mt5TradeModalContent"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "border-color: #dee2e6; border-radius: 8px; border-style: solid; border-width: 0px; padding: 0px;"
                },
                style: "display-flex justify-content-space-between align-items-center",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "ProductRow2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "display-flex align-items-center flex-1",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "IconAndText2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Image, {
                extendedProperties: {
                    style: "height: 40px; margin-right: 16px;"
                },
                gridProperties: {
                    width: "40px"
                },
                style: "display-flex ",
                type: /*External*/ 1,
                url: model.variables.selectedAccountIn.iconAttr,
                _idProps: {
                    service: idService,
                    name: "ProductIcon2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                url_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._selectedAccountInDataFetchStatus)
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    name: "ProductNameBalanceContainer2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: bold;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: model.variables.selectedAccountIn.labelAttr,
                _idProps: {
                    service: idService,
                    name: "ProductName2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._selectedAccountInDataFetchStatus)
            }), React.createElement(OSWidgets.Label, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: idService,
                    name: "ProductBalanceLabel2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                gridProperties: {
                    marginLeft: "0"
                },
                value: model.variables.selectedAccountIn.display_balanceAttr,
                _idProps: {
                    service: idService,
                    name: "ProductBalance2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._selectedAccountInDataFetchStatus)
            }), React.createElement(OSWidgets.Expression, {
                gridProperties: {
                    marginLeft: "0"
                },
                value: model.variables.selectedAccountIn.currencyAttr,
                _idProps: {
                    service: idService,
                    name: "ProductCurrency2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._selectedAccountInDataFetchStatus)
            })))), React.createElement(OSWidgets.Button, {
                enabled: true,
                extendedProperties: {
                    style: "background-color: #ff4450;"
                },
                isDefault: false,
                onClick: function() {
                    return Promise.resolve().then(function() {
                        var eventHandlerContext = callContext.clone();
                        return controller.closeOnClick$Action(controller.callContext(eventHandlerContext));
                    });;
                },
                style: "btn gap-s",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "TransferButton2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Icon, {
                extendedProperties: {
                    style: "color: #f3f6f8; font-style: normal; font-weight: normal; margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                },
                gridProperties: {
                    marginLeft: "0px"
                },
                icon: "exchange",
                iconSize: /*FontSize*/ 0,
                style: "icon",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "14"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "color: #f3f6f8; font-size: 12px; font-weight: bold;"
                },
                text: [$text(getTranslation("stfUk9qHTUuvEO+Qfaqcig#Value", "Transfer"))],
                _idProps: {
                    service: idService,
                    name: "TransferText2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "display-flex flex-direction-column gap-s",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "AccountInfoRow2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "background-color: #f3f6f8; border-color: #dee2e6; border-radius: 8px; border-style: solid; border-width: 0px; height: 42px; padding: 16px;"
                },
                style: "display-flex justify-content-space-between align-items-center",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "MtBrokerRow2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                gridProperties: {
                    classes: "ThemeGrid_Width4"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "18"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: "Broker",
                _idProps: {
                    service: idService,
                    name: "BrokerLabel2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "text-align: right;"
                },
                gridProperties: {
                    classes: "ThemeGrid_Width8"
                },
                style: "display-flex align-items-center justify-content-flex-end",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "20"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: model.variables.selectedAccountIn.landing_companyAttr,
                _idProps: {
                    service: idService,
                    name: "DynamicBrokerLabel2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._selectedAccountInDataFetchStatus)
            }), React.createElement(OSWidgets.Icon, {
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.copyToClipboard$Action(model.variables.selectedAccountIn.landing_companyAttr, controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                icon: "clone",
                iconSize: /*FontSize*/ 0,
                style: "icon cursor-pointer",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "22"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "background-color: #f3f6f8; border-color: #dee2e6; border-radius: 8px; border-style: solid; border-width: 0px; height: 42px; padding: 16px;"
                },
                style: "display-flex justify-content-space-between align-items-center",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "MtServerRow2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                gridProperties: {
                    classes: "ThemeGrid_Width4"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "24"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: "Server",
                _idProps: {
                    service: idService,
                    name: "ServerLabel2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "text-align: right;"
                },
                gridProperties: {
                    classes: "ThemeGrid_Width8"
                },
                style: "display-flex align-items-center justify-content-flex-end",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "26"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: model.variables.selectedAccountIn.server_infoAttr.environmentAttr,
                _idProps: {
                    service: idService,
                    name: "DynamicServerLabel2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._selectedAccountInDataFetchStatus)
            }), React.createElement(OSWidgets.Icon, {
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.copyToClipboard$Action(model.variables.selectedAccountIn.server_infoAttr.environmentAttr, controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                icon: "clone",
                iconSize: /*FontSize*/ 0,
                style: "icon cursor-pointer",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "28"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "background-color: #f3f6f8; border-color: #dee2e6; border-radius: 8px; border-style: solid; border-width: 0px; height: 42px; padding: 16px;"
                },
                style: "display-flex justify-content-space-between align-items-center",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "MtLoginIdRow2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                gridProperties: {
                    classes: "ThemeGrid_Width4"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "30"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: "Login ID",
                _idProps: {
                    service: idService,
                    name: "LoginIdLabel2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "text-align: right;"
                },
                gridProperties: {
                    classes: "ThemeGrid_Width8"
                },
                style: "display-flex align-items-center justify-content-flex-end",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "32"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: model.variables.displayLoginVar,
                _idProps: {
                    service: idService,
                    name: "DynamicLoginIdLabel2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Icon, {
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.copyToClipboard$Action(model.variables.selectedAccountIn.loginAttr, controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                icon: "clone",
                iconSize: /*FontSize*/ 0,
                style: "icon cursor-pointer",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "34"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "text-align: right;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    name: "ForgotPasswordRow2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedEvents: {
                    onClick: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return controller.forgotPasswordOnClick$Action(controller.callContext(eventHandlerContext));
                        });;
                    }
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "auto"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    name: "ForgotPasswordContainer"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: bold; text-decoration: underline;"
                },
                style: "cursor-pointer",
                text: [$text(getTranslation("kbdHtooVbUi8Rr8jct4z_A#Value", "Forgot password?"))],
                _idProps: {
                    service: idService,
                    uuid: "37"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), React.createElement(tradershub_CFDBlocks_MaintenanceMessage_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    InfoMessage: "Weekly maintenance: Sundays at 01:00 GMT for up to 2 hours. Service may be affected."
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
                    uuid: "38",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    className: model.getCachedValue(idService.getId("Mt5TradeModalFooter.class"), function() {
                        return ((OutSystemsUIController.default.isPhone$Action(callContext).isPhoneOut) ? ("cfd-modal-sticky-footer") : (""));
                    }),
                    style: "font-weight: bold; padding: 16px; text-align: center;"
                },
                gridProperties: {
                    classes: "ThemeGrid_Width12"
                },
                style: "display-flex flex-direction-column align-items-center justify-content-space-between gap-m",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Mt5TradeModalFooter"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "display-flex flex-direction-column gap-s",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "CTAButtonsContainer2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Button, {
                enabled: true,
                extendedProperties: {
                    style: "background-color: #1a78cb; color: #f3f6f8; font-weight: normal; height: 48px; padding: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0"
                },
                isDefault: false,
                onClick: function() {
                    return Promise.resolve().then(function() {
                        var eventHandlerContext = callContext.clone();
                        return controller.closeOnClick$Action(controller.callContext(eventHandlerContext));
                    });;
                },
                style: "btn btn-primary",
                visible: model.getCachedValue(idService.getId("MobileDownloadAppLink2.Visible"), function() {
                    return OutSystemsUIController.default.isPhone$Action(callContext).isPhoneOut;
                }),
                _idProps: {
                    service: idService,
                    name: "MobileDownloadAppLink2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Icon, {
                icon: "mobile",
                iconSize: /*FontSize*/ 0,
                style: "icon",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "42"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Expression, {
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter",
                    width: "auto"
                },
                value: "MetaTrader 5 app",
                _idProps: {
                    service: idService,
                    uuid: "43"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Button, {
                enabled: true,
                extendedProperties: {
                    style: ("border-radius: 100px; font-weight: normal; height: 48px; padding: 16px;" + ((OutSystemsUIController.default.isPhone$Action(callContext).isPhoneOut) ? ("background:#f3f6f8") : ("background:#1a78cb")))
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0"
                },
                isDefault: false,
                onClick: function() {
                    return Promise.resolve().then(function() {
                        var eventHandlerContext = callContext.clone();
                        return controller.closeOnClick$Action(controller.callContext(eventHandlerContext));
                    });;
                },
                style: "btn btn-primary",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "WebTerminalLink2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Icon, {
                extendedProperties: {
                    style: model.getCachedValue(idService.getId("ruZVukZi8Ee4oehk0bQhGA.style"), function() {
                        return ((OutSystemsUIController.default.isPhone$Action(callContext).isPhoneOut) ? ("color:black") : ("color:white"));
                    })
                },
                icon: "globe",
                iconSize: /*FontSize*/ 0,
                style: "\"icon\"",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "45"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Expression, {
                extendedProperties: {
                    style: ("font-size: 16px;" + ((OutSystemsUIController.default.isPhone$Action(callContext).isPhoneOut) ? ("color:black") : ("color:white")))
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter",
                    width: "auto"
                },
                value: "MetaTrader 5 web terminal",
                _idProps: {
                    service: idService,
                    uuid: "46"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Button, {
                enabled: true,
                extendedProperties: {
                    style: "background-color: #f3f6f8; color: #222; font-weight: normal; height: 48px; padding: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0"
                },
                isDefault: false,
                onClick: function() {
                    return Promise.resolve().then(function() {
                        var eventHandlerContext = callContext.clone();
                        return controller.closeOnClick$Action(controller.callContext(eventHandlerContext));
                    });;
                },
                style: "btn btn-primary",
                visible: model.getCachedValue(idService.getId("DesktopDownloadAppLink2.Visible"), function() {
                    return OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut;
                }),
                _idProps: {
                    service: idService,
                    name: "DesktopDownloadAppLink2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Icon, {
                icon: "desktop",
                iconSize: /*FontSize*/ 0,
                style: "icon",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "48"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Expression, {
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter",
                    width: "auto"
                },
                value: "MetaTrader 5 app",
                _idProps: {
                    service: idService,
                    uuid: "49"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: true,
                extendedProperties: {
                    style: "margin-bottom: 16px; margin-top: 16px; text-align: center;"
                },
                style: "display-flex justify-content-center column-gap-xs align-items-baseline",
                visible: model.getCachedValue(idService.getId("AvailableForMacOSAndLinuxText2.Visible"), function() {
                    return OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut;
                }),
                _idProps: {
                    service: idService,
                    name: "AvailableForMacOSAndLinuxText2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: normal;"
                },
                text: [$text(getTranslation("bnNmCWFI7kujP2WEB9S+gg#Value", "Available for"))],
                _idProps: {
                    service: idService,
                    uuid: "51"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Link, {
                enabled: true,
                gridProperties: {
                    marginLeft: "0"
                },
                onClick: function() {
                    var eventHandlerContext = callContext.clone();
                    controller.closeEvent$Action(controller.callContext(eventHandlerContext));

                    ;
                },
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Macos"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "color: #222; font-size: 12px; font-weight: normal; text-decoration: underline;"
                },
                style: "cursor-pointer",
                text: [$text(getTranslation("hhSi2lXZ5EmBT0C3f0FdmA#Value", "macOS"))],
                _idProps: {
                    service: idService,
                    uuid: "53"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: normal;"
                },
                text: [$text(getTranslation("S3d3t1eSmUm5WVx_6xyWnw#Value", " and "))],
                _idProps: {
                    service: idService,
                    uuid: "54"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Link, {
                enabled: true,
                gridProperties: {
                    marginLeft: "0"
                },
                onClick: function() {
                    var eventHandlerContext = callContext.clone();
                    controller.closeEvent$Action(controller.callContext(eventHandlerContext));

                    ;
                },
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Linux"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "color: #222; font-size: 12px; font-weight: normal; text-decoration: underline;"
                },
                style: " cursor-pointer",
                text: [$text(getTranslation("W+jT0mrHXU2hO1rL8ZXtCQ#Value", "Linux."))],
                _idProps: {
                    service: idService,
                    uuid: "56"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: true,
                extendedProperties: {
                    style: "border-color: #f3f6f8; border-radius: 4px; border-style: solid; border-width: 1px; margin-right: auto; padding: 8px; text-align: center;"
                },
                gridProperties: {
                    classes: "ThemeGrid_Width8",
                    marginLeft: "auto"
                },
                style: "display-flex flex-direction-column justify-content-center align-items-center align-self-center gap-s",
                visible: model.getCachedValue(idService.getId("ScanToDownloadContainer.Visible"), function() {
                    return OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut;
                }),
                _idProps: {
                    service: idService,
                    name: "ScanToDownloadContainer"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Image, {
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.mt5Onelink.png"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "58"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: normal;"
                },
                text: [$text(getTranslation("jaHw+m0lXEyM3mg6fxY1lw#Value", "Scan to download the mobile app."))],
                _idProps: {
                    service: idService,
                    name: "ScanToDownloadText2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })))));
        }
    }

    return View;
});
define("tradershub.CFDBlocks.MT5TradeModal.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.CFDBlocks.MT5TradeModal.mvc$translationsResources", "tradershub.CFDBlocks.MT5TradeModal.mvc$controller.OnParametersChanged.FormatDynamicLoginJS", "tradershub.CFDBlocks.MT5TradeModal.mvc$controller.CopyToClipboard.JavaScript1JS", "OutSystemsUI.controller$IsPhone", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$IsDesktop", "tradershub.model$ST_148480cbe068b64f08f2cd9823941166Structure"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, tradershubLanguageResources, tradershubClientVariables, tradershub_CFDBlocks_MT5TradeModal_mvc_TranslationsResources, tradershub_CFDBlocks_MT5TradeModal_mvc_controller_OnParametersChanged_FormatDynamicLoginJS, tradershub_CFDBlocks_MT5TradeModal_mvc_controller_CopyToClipboard_JavaScript1JS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, tradershub_CFDBlocks_MT5TradeModal_mvc_TranslationsResources);
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
            get _closeOnClick$Action() {
                if (!(this.hasOwnProperty("__closeOnClick$Action"))) {
                    this.__closeOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("CloseOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "CloseOnClick");
                                span.setAttribute("outsystems.function.key", "06987c87-2cc1-4c9e-aa7d-095631afc545");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("CloseOnClick");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Trigger Event: CloseEvent
                                    return controller.closeEvent$Action(callContext);
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    };
                }

                return this.__closeOnClick$Action;
            }
            set _closeOnClick$Action(value) {
                this.__closeOnClick$Action = value;
            }

            get _onParametersChanged$Action() {
                if (!(this.hasOwnProperty("__onParametersChanged$Action"))) {
                    this.__onParametersChanged$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnParametersChanged", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnParametersChanged");
                                span.setAttribute("outsystems.function.key", "6af7ff83-ca6b-4cc8-a542-281db4b76684");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnParametersChanged");
                                callContext = controller.callContext(callContext);
                                var formatDynamicLoginJSResult = new OS.DataTypes.VariableHolder();
                                formatDynamicLoginJSResult.value = OS.Logger.startActiveSpan("FormatDynamicLogin", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "FormatDynamicLogin");
                                        span.setAttribute("outsystems.function.key", "9cff8aa6-5c38-466f-9b25-9407fcd47bf5");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_CFDBlocks_MT5TradeModal_mvc_controller_OnParametersChanged_FormatDynamicLoginJS, "FormatDynamicLogin", "OnParametersChanged", {
                                            SelectedAccountLogin: OS.DataConversion.JSNodeParamConverter.to(model.variables.selectedAccountIn.loginAttr, OS.DataTypes.DataTypes.Text),
                                            FormattedLogin: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.CFDBlocks.MT5TradeModal.OnParametersChanged$formatDynamicLoginJSResult"))();
                                            jsNodeResult.formattedLoginOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FormattedLogin, OS.DataTypes.DataTypes.Text);
                                            return jsNodeResult;
                                        }, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // DisplayLogin = FormatDynamicLogin.FormattedLogin
                                model.variables.displayLoginVar = formatDynamicLoginJSResult.value.formattedLoginOut;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onParametersChanged$Action;
            }
            set _onParametersChanged$Action(value) {
                this.__onParametersChanged$Action = value;
            }

            get _copyToClipboard$Action() {
                if (!(this.hasOwnProperty("__copyToClipboard$Action"))) {
                    this.__copyToClipboard$Action = function(textToCopyIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("CopyToClipboard", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "CopyToClipboard");
                                span.setAttribute("outsystems.function.key", "d0fb12b9-2f36-4c33-ae28-fed40afb51dd");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("CopyToClipboard");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.CFDBlocks.MT5TradeModal.CopyToClipboard$vars"))());
                                vars.value.textToCopyInLocal = textToCopyIn;
                                OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "JavaScript1");
                                        span.setAttribute("outsystems.function.key", "f3bd06ff-fdb9-4475-aac5-755e9d375a61");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_CFDBlocks_MT5TradeModal_mvc_controller_CopyToClipboard_JavaScript1JS, "JavaScript1", "CopyToClipboard", {
                                            TextToCopy: OS.DataConversion.JSNodeParamConverter.to(vars.value.textToCopyInLocal, OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {}, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                OS.FeedbackMessageService.showFeedbackMessage("Copied!", /*Info*/ 0);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__copyToClipboard$Action;
            }
            set _copyToClipboard$Action(value) {
                this.__copyToClipboard$Action = value;
            }

            get _forgotPasswordOnClick$Action() {
                if (!(this.hasOwnProperty("__forgotPasswordOnClick$Action"))) {
                    this.__forgotPasswordOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ForgotPasswordOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ForgotPasswordOnClick");
                                span.setAttribute("outsystems.function.key", "e945c4b7-3c28-4023-807f-cabc84ad4981");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("ForgotPasswordOnClick");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Trigger Event: ForgotPasswordEvent
                                    return controller.forgotPasswordEvent$Action(callContext);
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    };
                }

                return this.__forgotPasswordOnClick$Action;
            }
            set _forgotPasswordOnClick$Action(value) {
                this.__forgotPasswordOnClick$Action = value;
            }


            closeOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("CloseOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "CloseOnClick");
                        span.setAttribute("outsystems.function.key", "06987c87-2cc1-4c9e-aa7d-095631afc545");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._closeOnClick$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            onParametersChanged$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnParametersChanged__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnParametersChanged");
                        span.setAttribute("outsystems.function.key", "6af7ff83-ca6b-4cc8-a542-281db4b76684");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            copyToClipboard$Action(textToCopyIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("CopyToClipboard__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "CopyToClipboard");
                        span.setAttribute("outsystems.function.key", "d0fb12b9-2f36-4c33-ae28-fed40afb51dd");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._copyToClipboard$Action, callContext, textToCopyIn);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            forgotPasswordOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ForgotPasswordOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ForgotPasswordOnClick");
                        span.setAttribute("outsystems.function.key", "e945c4b7-3c28-4023-807f-cabc84ad4981");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._forgotPasswordOnClick$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            get forgotPasswordEvent$Action() {
                if (!(this.hasOwnProperty("_forgotPasswordEvent$Action"))) {
                    this._forgotPasswordEvent$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._forgotPasswordEvent$Action;
            }
            set forgotPasswordEvent$Action(value) {
                this._forgotPasswordEvent$Action = value;
            }

            get closeEvent$Action() {
                if (!(this.hasOwnProperty("_closeEvent$Action"))) {
                    this._closeEvent$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._closeEvent$Action;
            }
            set closeEvent$Action(value) {
                this._closeEvent$Action = value;
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
                    this._onParametersChangedEventHandler = function(callContext) {
                        var controller = this.controller;
                        var model = this.model;
                        var idService = this.idService;

                        return controller.onParametersChanged$Action(callContext);

                    };
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
        Controller.registerVariableGroupType("tradershub.CFDBlocks.MT5TradeModal.OnParametersChanged$formatDynamicLoginJSResult", [{
            name: "FormattedLogin",
            attrName: "formattedLoginOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.CFDBlocks.MT5TradeModal.CopyToClipboard$vars", [{
            name: "TextToCopy",
            attrName: "textToCopyInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.CFDBlocks.MT5TradeModal.mvc$controller.OnParametersChanged.FormatDynamicLoginJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.FormattedLogin = $parameters.SelectedAccountLogin.slice(3);
    };
});

define("tradershub.CFDBlocks.MT5TradeModal.mvc$controller.CopyToClipboard.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        navigator.clipboard.writeText($parameters.TextToCopy);
    };
});


define("tradershub.CFDBlocks.MT5TradeModal.mvc$translationsResources.fr-FR", [], function() {
    return {
        "jaHw+m0lXEyM3mg6fxY1lw#Value": "Scannez pour télécharger l\'application mobile.",
        "W+jT0mrHXU2hO1rL8ZXtCQ#Value": "Linux",
        "S3d3t1eSmUm5WVx_6xyWnw#Value": "et",
        "hhSi2lXZ5EmBT0C3f0FdmA#Value": "macOS",
        "bnNmCWFI7kujP2WEB9S+gg#Value": "Disponible pour",
        "kbdHtooVbUi8Rr8jct4z_A#Value": "Mot de passe oublié ?",
        "stfUk9qHTUuvEO+Qfaqcig#Value": "Transfert"
    };
});

define("tradershub.CFDBlocks.MT5TradeModal.mvc$translationsResources", ["exports", "tradershub.CFDBlocks.MT5TradeModal.mvc$translationsResources.fr-FR"], function(exports, tradershub_CFDBlocks_MT5TradeModal_mvc_translationsResources_frFR) {
    return {
        "fr-FR": {
            "translations": tradershub_CFDBlocks_MT5TradeModal_mvc_translationsResources_frFR,
            "isRTL": false
        }
    };
});