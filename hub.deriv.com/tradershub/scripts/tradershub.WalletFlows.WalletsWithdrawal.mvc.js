define("tradershub.WalletFlows.WalletsWithdrawal.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "YupValidationsOfficial.controller", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "tradershub.model$ST_3425849bb816196585dd6f07dbf2721dStructure", "tradershub.model$ST_a2aeee4ca5ab4ed88d1373d8beda118bStructure", "YupValidationsOfficial.controller$YupValidate", "tradershub.referencesHealth", "tradershub.referencesHealth$YupValidationsOfficial", "tradershub.model$RL_caf4f8b8680e835a8e4e4bea133e8365", "tradershub.controller$GetWalletsList", "tradershub.controller$CryptoConfig", "RESTAPIWebsocketOfficial.model$ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$PostCashierFiat", "RESTAPIWebsocketOfficial.model$ST_2f46c6fecf81fe9d91763f789141eec9Structure", "tradershub.controller$PostCashierCryptoWithdraw", "tradershub.controller$GetExchangeRates", "tradershub.controller$CryptoEstimations", "tradershub.model$ST_3d0fa871a667e2d1bb232a28767c1e1fStructure"], function(OSRuntimeCore, tradershubModel, YupValidationsOfficialController, tradershubController, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ActiveWallet", "activeWalletVar", "ActiveWallet", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_3425849bb816196585dd6f07dbf2721dStructure());
                    }, false, tradershubModel.ST_3425849bb816196585dd6f07dbf2721dStructure),
                    this.attr("IframeUrl", "iframeUrlVar", "IframeUrl", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("CryptoAddress", "cryptoAddressVar", "CryptoAddress", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("CryptoAmount", "cryptoAmountVar", "CryptoAmount", true, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return (OS.DataTypes.Decimal.defaultValue);
                    }, false),
                    this.attr("CryptoPriorityWithdrawal", "cryptoPriorityWithdrawalVar", "CryptoPriorityWithdrawal", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("CryptoMinimumWthdrawalAmount", "cryptoMinimumWthdrawalAmountVar", "CryptoMinimumWthdrawalAmount", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("CryptoAmountPercentage", "cryptoAmountPercentageVar", "CryptoAmountPercentage", true, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, false),
                    this.attr("ConvertedAmount", "convertedAmountVar", "ConvertedAmount", true, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return (OS.DataTypes.Decimal.defaultValue);
                    }, false),
                    this.attr("ExchangeRates", "exchangeRatesVar", "ExchangeRates", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("PriorityWithdrawalInfo", "priorityWithdrawalInfoVar", "PriorityWithdrawalInfo", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_a2aeee4ca5ab4ed88d1373d8beda118bStructure());
                    }, false, tradershubModel.ST_a2aeee4ca5ab4ed88d1373d8beda118bStructure)
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
                Form1: OS.Model.ValidationWidgetRecord,
                Input_CryptoAddress: OS.Model.ValidationWidgetRecord,
                ButtonGroup: OS.Model.ValidationWidgetRecord,
                Input_CryptoAmount: OS.Model.ValidationWidgetRecord,
                Checkbox1: OS.Model.ValidationWidgetRecord
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
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.WalletFlows.WalletsWithdrawal.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "YupValidationsOfficial.controller", "RESTAPIWebsocketOfficial.model", "react", "@outsystems/runtime-view-js", "tradershub.WalletFlows.WalletsWithdrawal.mvc$model", "tradershub.WalletFlows.WalletsWithdrawal.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.MainLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.WalletBlocks.WalletsOverlayPageWithPopup.mvc$view", "OutSystemsUI.Utilities.Separator.mvc$view", "tradershub.model$ST_3425849bb816196585dd6f07dbf2721dStructure", "tradershub.model$ST_a2aeee4ca5ab4ed88d1373d8beda118bStructure", "YupValidationsOfficial.controller$YupValidate", "tradershub.referencesHealth", "tradershub.referencesHealth$YupValidationsOfficial", "tradershub.model$RL_caf4f8b8680e835a8e4e4bea133e8365", "tradershub.controller$GetWalletsList", "tradershub.controller$CryptoConfig", "RESTAPIWebsocketOfficial.model$ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$PostCashierFiat", "RESTAPIWebsocketOfficial.model$ST_2f46c6fecf81fe9d91763f789141eec9Structure", "tradershub.controller$PostCashierCryptoWithdraw", "tradershub.controller$GetExchangeRates", "tradershub.controller$CryptoEstimations", "tradershub.model$ST_3d0fa871a667e2d1bb232a28767c1e1fStructure"], function(OSRuntimeCore, tradershubModel, tradershubController, YupValidationsOfficialController, RESTAPIWebsocketOfficialModel, React, OSView, tradershub_WalletFlows_WalletsWithdrawal_mvc_model, tradershub_WalletFlows_WalletsWithdrawal_mvc_controller, tradershubClientVariables, tradershub_Layouts_MainLayout_mvc_view, OSWidgets, tradershub_WalletBlocks_WalletsOverlayPageWithPopup_mvc_view, OutSystemsUI_Utilities_Separator_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "WalletFlows.WalletsWithdrawal";
        }

        static getAttributes() {
            return {
                codeFunction: "WalletsWithdrawal",
                functionKey: "97bad0a0-2ffc-4c16-9cd0-e3e220356024",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.WalletFlows.WalletsWithdrawal.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return ["scripts/tradershub.yupumd.js"];
        }

        static getBlocks() {
            return [tradershub_Layouts_MainLayout_mvc_view, tradershub_WalletBlocks_WalletsOverlayPageWithPopup_mvc_view, OutSystemsUI_Utilities_Separator_mvc_view];
        }

        get modelFactory() {
            return tradershub_WalletFlows_WalletsWithdrawal_mvc_model;
        }

        get controllerFactory() {
            return tradershub_WalletFlows_WalletsWithdrawal_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("oNC6l_wvFkyc0OPiIDVgJA#Title", "WalletsWithdrawal");
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
                        return [React.createElement(tradershub_WalletBlocks_WalletsOverlayPageWithPopup_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                PageTitle: "Withdraw"
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
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                walletOverlayPageContent: new PlaceholderContent(function() {
                                    return [$if(model.variables.activeWalletVar.isCrpytoAttr, false, this, function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            style: "display-flex flex-direction-column",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                name: "WithdrawalCryptoContainer"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "border-radius: 8px;"
                                            },
                                            style: "padding-base background-warning-light display-flex gap-s align-items-flex-start",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                name: "WithdrawalDisclaimerMessage"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Image, {
                                            gridProperties: {
                                                width: "24px"
                                            },
                                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.WarningLight.svg"),
                                            type: /*Static*/ 0,
                                            _idProps: {
                                                service: idService,
                                                uuid: "4"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }), React.createElement(OSWidgets.Text, {
                                            extendedProperties: {
                                                style: "font-size: 12px;"
                                            },
                                            text: ["Do not use initial coin offering (ICO) linked addresses. ICO tokens will not be credited to this wallet."],
                                            _idProps: {
                                                service: idService,
                                                uuid: "5"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        })), React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            style: "margin-top-m",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                name: "WithdrawalCryptoForm"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Form, {
                                            _validationProps: {
                                                validationService: validationService
                                            },
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            style: "display-flex flex-direction-column gap-m",
                                            _idProps: {
                                                service: idService,
                                                name: "Form1"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                name: "CryptoAddressContainer"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Label, {
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            mandatory: false,
                                            style: "margin-bottom-s",
                                            targetWidget: "Input_CryptoAddress",
                                            _idProps: {
                                                service: idService,
                                                uuid: "9"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Expression, {
                                            extendedProperties: {
                                                style: "font-size: 16px;"
                                            },
                                            value: (("Your " + model.variables.activeWalletVar.currencyAttr) + " wallet address"),
                                            _idProps: {
                                                service: idService,
                                                uuid: "10"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        })), React.createElement(OSWidgets.Input, {
                                            _validationProps: {
                                                validationService: validationService,
                                                validationParentId: idService.getId("Form1")
                                            },
                                            enabled: true,
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            inputType: /*Text*/ 0,
                                            mandatory: false,
                                            maxLength: 50,
                                            onChange: function() {
                                                var eventHandlerContext = callContext.clone();
                                                controller.onChangeAddressInput$Action(controller.callContext(eventHandlerContext));

                                                ;
                                            },
                                            prompt: "Enter the address",
                                            style: "form-control",
                                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.cryptoAddressVar, function(value) {
                                                model.variables.cryptoAddressVar = value;
                                            }),
                                            _idProps: {
                                                service: idService,
                                                name: "Input_CryptoAddress"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        })), React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "margin-top: 10px;"
                                            },
                                            style: "display-flex flex-direction-column",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                name: "CryptoAmountContainer"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Label, {
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            mandatory: false,
                                            targetWidget: "Input_CryptoAmount",
                                            _idProps: {
                                                service: idService,
                                                uuid: "13"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Text, {
                                            extendedProperties: {
                                                style: "font-size: 16px;"
                                            },
                                            text: ["Amount"],
                                            _idProps: {
                                                service: idService,
                                                uuid: "14"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        })), React.createElement(OSWidgets.ButtonGroup, {
                                            _validationProps: {
                                                validationService: validationService,
                                                validationParentId: idService.getId("Form1")
                                            },
                                            enabled: true,
                                            mandatory: false,
                                            onChange: function() {
                                                var eventHandlerContext = callContext.clone();
                                                controller.onClick$Action(controller.callContext(eventHandlerContext));

                                                ;
                                            },
                                            style: "margin-y-base",
                                            variable: model.createVariable(OS.DataTypes.DataTypes.Decimal, model.variables.cryptoAmountPercentageVar, function(value) {
                                                model.variables.cryptoAmountPercentageVar = value;
                                            }),
                                            _idProps: {
                                                service: idService,
                                                name: "ButtonGroup"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.ButtonGroupItem, {
                                            enabled: true,
                                            style: "wallets-crypto-amount-btn",
                                            value: (new OS.DataTypes.Decimal("0.25")),
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                name: "ButtonGroupItem1"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, "25%"), React.createElement(OSWidgets.ButtonGroupItem, {
                                            enabled: true,
                                            style: "wallets-crypto-amount-btn margin-left-s",
                                            value: (new OS.DataTypes.Decimal("0.50")),
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                name: "ButtonGroupItem2"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, "50%"), React.createElement(OSWidgets.ButtonGroupItem, {
                                            enabled: true,
                                            style: "wallets-crypto-amount-btn margin-left-s",
                                            value: (new OS.DataTypes.Decimal("0.75")),
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                name: "ButtonGroupItem3"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, "75%"), React.createElement(OSWidgets.ButtonGroupItem, {
                                            enabled: true,
                                            style: "wallets-crypto-amount-btn margin-left-s",
                                            value: (new OS.DataTypes.Decimal("1.0")),
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                name: "ButtonGroupItem4"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, "100%")), React.createElement(OSWidgets.Input, {
                                            _validationProps: {
                                                validationService: validationService,
                                                validationParentId: idService.getId("Form1")
                                            },
                                            enabled: true,
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            inputType: /*Number*/ 2,
                                            mandatory: false,
                                            maxLength: 0,
                                            onChange: function() {
                                                var eventHandlerContext = callContext.clone();
                                                controller.onChangeAmountInput$Action(controller.callContext(eventHandlerContext));

                                                ;
                                            },
                                            prompt: OS.BuiltinFunctions.decimalToText(model.variables.cryptoAmountVar),
                                            style: "form-control",
                                            variable: model.createVariable(OS.DataTypes.DataTypes.Decimal, model.variables.cryptoAmountVar, function(value) {
                                                model.variables.cryptoAmountVar = value;
                                            }),
                                            _idProps: {
                                                service: idService,
                                                name: "Input_CryptoAmount"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        })), React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            style: "display-flex align-items-center",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                name: "CheckboxContainer"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Checkbox, {
                                            _validationProps: {
                                                validationService: validationService,
                                                validationParentId: idService.getId("Form1")
                                            },
                                            enabled: true,
                                            extendedProperties: {
                                                style: "height: 24px; width: 24px;"
                                            },
                                            gridProperties: {
                                                marginLeft: "0px"
                                            },
                                            onChange: function() {
                                                return Promise.resolve().then(function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    return controller.onPriorityCheck$Action(controller.callContext(eventHandlerContext));
                                                });;
                                            },
                                            style: "checkbox",
                                            variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, model.variables.cryptoPriorityWithdrawalVar, function(value) {
                                                model.variables.cryptoPriorityWithdrawalVar = value;
                                            }),
                                            _idProps: {
                                                service: idService,
                                                name: "Checkbox1"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }), React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            style: "margin-left-s",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                name: "CheckboxLabel"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Label, {
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            _idProps: {
                                                service: idService,
                                                uuid: "24"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, "Priority withdrawal"))), React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            style: "display-flex flex-direction-column gap-base margin-y-base",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                name: "BottomContainer"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            style: "display-flex justify-content-space-between",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                name: "WithdrawalTextContainer"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Text, {
                                            style: "text-neutral-8",
                                            text: ["Withdrawal amount"],
                                            _idProps: {
                                                service: idService,
                                                uuid: "27"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }), React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "28"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Expression, {
                                            style: "margin-right-s",
                                            value: ((((OS.BuiltinFunctions.decimalToText(model.variables.cryptoAmountVar) + " ") + model.variables.activeWalletVar.currencyAttr) + " ≈ $") + OS.BuiltinFunctions.decimalToText(model.variables.convertedAmountVar)),
                                            _idProps: {
                                                service: idService,
                                                uuid: "29"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }), React.createElement(OSWidgets.Text, {
                                            extendedProperties: {
                                                style: "font-size: 12px;"
                                            },
                                            style: "text-neutral-6-darker",
                                            text: ["(59s)"],
                                            _idProps: {
                                                service: idService,
                                                uuid: "30"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))), React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            style: "display-flex justify-content-space-between",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                name: "PriorityWithdrawalFee"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Text, {
                                            style: "text-neutral-8",
                                            text: ["Transaction fee"],
                                            _idProps: {
                                                service: idService,
                                                uuid: "32"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }), React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "33"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Expression, {
                                            style: "margin-right-s",
                                            value: ((("- " + OS.BuiltinFunctions.decimalToText(model.variables.priorityWithdrawalInfoVar.valueAttr)) + " ") + model.variables.activeWalletVar.currencyAttr),
                                            _idProps: {
                                                service: idService,
                                                uuid: "34"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))), React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "35"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OutSystemsUI_Utilities_Separator_mvc_view, {
                                            getOwnerSpan: function() {
                                                return _this.getChildSpan("render");
                                            },
                                            getOwnerDisposeSpan: function() {
                                                return _this.getChildSpan("destroy");
                                            },
                                            inputs: {
                                                Color: tradershubModel.staticEntities.color.neutral2,
                                                Space: tradershubModel.staticEntities.space.small
                                            },
                                            events: {
                                                _handleError: function(ex) {
                                                    controller.handleError(ex);
                                                }
                                            },
                                            _validationProps: {
                                                validationService: validationService,
                                                validationParentId: idService.getId("Form1")
                                            },
                                            _idProps: {
                                                service: idService,
                                                uuid: "36",
                                                alias: "3"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        })), React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            style: "display-flex justify-content-space-between",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                name: "FinalWithdrawalAmount"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Text, {
                                            style: "text-neutral-8",
                                            text: ["Amount received"],
                                            _idProps: {
                                                service: idService,
                                                uuid: "38"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }), React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "39"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Expression, {
                                            style: "margin-right-s",
                                            value: ((((OS.BuiltinFunctions.decimalToText(model.variables.cryptoAmountVar) + " ") + model.variables.activeWalletVar.currencyAttr) + " ≈ $") + OS.BuiltinFunctions.decimalToText(model.variables.convertedAmountVar)),
                                            _idProps: {
                                                service: idService,
                                                uuid: "40"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }), React.createElement(OSWidgets.Text, {
                                            extendedProperties: {
                                                style: "font-size: 12px;"
                                            },
                                            style: "text-neutral-6-darker",
                                            text: ["(59s)"],
                                            _idProps: {
                                                service: idService,
                                                uuid: "41"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))), React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            gridProperties: {
                                                marginLeft: "Auto"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                name: "WithdrawalButtonContainer"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Button, {
                                            enabled: true,
                                            isDefault: true,
                                            onClick: function() {
                                                _this.validateWidget(idService.getId("Form1"));
                                                return Promise.resolve().then(function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    return controller.withdrawOnClick$Action(controller.callContext(eventHandlerContext));
                                                });

                                                ;
                                            },
                                            style: "btn btn-primary",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "43"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, "Withdraw"))))))];
                                    }, function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            style: "full-width",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                name: "IframeContainer"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.AdvancedHtml, {
                                            extendedProperties: {
                                                src: model.variables.iframeUrlVar
                                            },
                                            tag: "iframe",
                                            _idProps: {
                                                service: idService,
                                                name: "WithdrawalIframe"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))];
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.iframeUrlVar), asPrimitiveValue(model.variables.priorityWithdrawalInfoVar.valueAttr), asPrimitiveValue(model.variables.convertedAmountVar), asPrimitiveValue(model.variables.cryptoPriorityWithdrawalVar), asPrimitiveValue(model.variables.cryptoAmountVar), asPrimitiveValue(model.variables.cryptoAmountPercentageVar), asPrimitiveValue(model.variables.cryptoAddressVar), asPrimitiveValue(model.variables.activeWalletVar.currencyAttr), asPrimitiveValue(model.variables.activeWalletVar.isCrpytoAttr)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.iframeUrlVar), asPrimitiveValue(model.variables.priorityWithdrawalInfoVar.valueAttr), asPrimitiveValue(model.variables.convertedAmountVar), asPrimitiveValue(model.variables.cryptoPriorityWithdrawalVar), asPrimitiveValue(model.variables.cryptoAmountVar), asPrimitiveValue(model.variables.cryptoAmountPercentageVar), asPrimitiveValue(model.variables.cryptoAddressVar), asPrimitiveValue(model.variables.activeWalletVar.currencyAttr), asPrimitiveValue(model.variables.activeWalletVar.isCrpytoAttr)]
            }));
        }
    }

    return View;
});
define("tradershub.WalletFlows.WalletsWithdrawal.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "YupValidationsOfficial.controller", "RESTAPIWebsocketOfficial.model", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.WalletFlows.WalletsWithdrawal.mvc$translationsResources", "tradershub.WalletFlows.controller", "tradershub.WalletFlows.WalletsWithdrawal.mvc$controller.OnChangeAddressInput.CryptoAddressValidationJS", "tradershub.WalletFlows.WalletsWithdrawal.mvc$controller.OnClick.ReturnAmountJS", "tradershub.WalletFlows.WalletsWithdrawal.mvc$controller.OnChangeAmountInput.CryptoAmountValidationJS", "tradershub.WalletFlows.WalletsWithdrawal.mvc$controller.OnReady.SortConfigJS", "tradershub.WalletFlows.WalletsWithdrawal.mvc$controller.ConvertCryptoToFiat.ConvertCryptoToFiatJS", "tradershub.model$ST_3425849bb816196585dd6f07dbf2721dStructure", "tradershub.model$ST_a2aeee4ca5ab4ed88d1373d8beda118bStructure", "YupValidationsOfficial.controller$YupValidate", "tradershub.referencesHealth", "tradershub.referencesHealth$YupValidationsOfficial", "tradershub.model$RL_caf4f8b8680e835a8e4e4bea133e8365", "tradershub.controller$GetWalletsList", "tradershub.controller$CryptoConfig", "RESTAPIWebsocketOfficial.model$ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$PostCashierFiat", "RESTAPIWebsocketOfficial.model$ST_2f46c6fecf81fe9d91763f789141eec9Structure", "tradershub.controller$PostCashierCryptoWithdraw", "tradershub.controller$GetExchangeRates", "tradershub.controller$CryptoEstimations", "tradershub.model$ST_3d0fa871a667e2d1bb232a28767c1e1fStructure"], function(OSRuntimeCore, tradershubModel, tradershubController, YupValidationsOfficialController, RESTAPIWebsocketOfficialModel, tradershubLanguageResources, tradershubClientVariables, tradershub_WalletFlows_WalletsWithdrawal_mvc_TranslationsResources, tradershub_WalletFlowsController, tradershub_WalletFlows_WalletsWithdrawal_mvc_controller_OnChangeAddressInput_CryptoAddressValidationJS, tradershub_WalletFlows_WalletsWithdrawal_mvc_controller_OnClick_ReturnAmountJS, tradershub_WalletFlows_WalletsWithdrawal_mvc_controller_OnChangeAmountInput_CryptoAmountValidationJS, tradershub_WalletFlows_WalletsWithdrawal_mvc_controller_OnReady_SortConfigJS, tradershub_WalletFlows_WalletsWithdrawal_mvc_controller_ConvertCryptoToFiat_ConvertCryptoToFiatJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, tradershub_WalletFlows_WalletsWithdrawal_mvc_TranslationsResources);
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
            get _onChangeAddressInput$Action() {
                if (!(this.hasOwnProperty("__onChangeAddressInput$Action"))) {
                    this.__onChangeAddressInput$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnChangeAddressInput", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnChangeAddressInput");
                                span.setAttribute("outsystems.function.key", "0a476f32-b4f0-41a5-bc08-13a5e21440c9");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnChangeAddressInput");
                                callContext = controller.callContext(callContext);
                                OS.Logger.startActiveSpan("CryptoAddressValidation", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "CryptoAddressValidation");
                                        span.setAttribute("outsystems.function.key", "664f2905-e8d5-4848-80ea-da4067c19955");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_WalletFlows_WalletsWithdrawal_mvc_controller_OnChangeAddressInput_CryptoAddressValidationJS, "CryptoAddressValidation", "OnChangeAddressInput", {
                                            WidgetId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Input_CryptoAddress"), OS.DataTypes.DataTypes.Text),
                                            CryptoAddress: OS.DataConversion.JSNodeParamConverter.to(model.variables.cryptoAddressVar, OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {}, {
                                            YupValidate: YupValidationsOfficialController.default.clientActionProxies.yupValidate$Action
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

                return this.__onChangeAddressInput$Action;
            }
            set _onChangeAddressInput$Action(value) {
                this.__onChangeAddressInput$Action = value;
            }

            get _onClick$Action() {
                if (!(this.hasOwnProperty("__onClick$Action"))) {
                    this.__onClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClick");
                                span.setAttribute("outsystems.function.key", "23537431-581a-428c-b048-a49edf9e431c");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClick");
                                callContext = controller.callContext(callContext);
                                var returnAmountJSResult = new OS.DataTypes.VariableHolder();
                                returnAmountJSResult.value = OS.Logger.startActiveSpan("ReturnAmount", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "ReturnAmount");
                                        span.setAttribute("outsystems.function.key", "299f1b00-cd62-4d23-aa1a-246fadeb8b15");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_WalletFlows_WalletsWithdrawal_mvc_controller_OnClick_ReturnAmountJS, "ReturnAmount", "OnClick", {
                                            AmountPercentage: OS.DataConversion.JSNodeParamConverter.to(model.variables.cryptoAmountPercentageVar, OS.DataTypes.DataTypes.Decimal),
                                            WalletBalance: OS.DataConversion.JSNodeParamConverter.to(model.variables.activeWalletVar.balanceAttr, OS.DataTypes.DataTypes.Decimal),
                                            CryptoAmount: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.Decimal.defaultValue, OS.DataTypes.DataTypes.Decimal)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.OnClick$returnAmountJSResult"))();
                                            jsNodeResult.cryptoAmountOut = OS.DataConversion.JSNodeParamConverter.from($parameters.CryptoAmount, OS.DataTypes.DataTypes.Decimal);
                                            return jsNodeResult;
                                        }, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // CryptoAmount = ReturnAmount.CryptoAmount
                                model.variables.cryptoAmountVar = returnAmountJSResult.value.cryptoAmountOut;
                                // Execute Action: ConvertCryptoToFiat
                                controller._convertCryptoToFiat$Action(callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClick$Action;
            }
            set _onClick$Action(value) {
                this.__onClick$Action = value;
            }

            get _onChangeAmountInput$Action() {
                if (!(this.hasOwnProperty("__onChangeAmountInput$Action"))) {
                    this.__onChangeAmountInput$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnChangeAmountInput", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnChangeAmountInput");
                                span.setAttribute("outsystems.function.key", "408025f4-061f-4a09-9523-263ca04340df");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnChangeAmountInput");
                                callContext = controller.callContext(callContext);
                                // Execute Action: ConvertCryptoToFiat
                                controller._convertCryptoToFiat$Action(callContext);
                                OS.Logger.startActiveSpan("CryptoAmountValidation", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "CryptoAmountValidation");
                                        span.setAttribute("outsystems.function.key", "ad5e806d-dbdf-4d11-9a47-3ecc98450efa");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_WalletFlows_WalletsWithdrawal_mvc_controller_OnChangeAmountInput_CryptoAmountValidationJS, "CryptoAmountValidation", "OnChangeAmountInput", {
                                            WalletBalance: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.decimalToText(model.variables.activeWalletVar.balanceAttr), OS.DataTypes.DataTypes.Text),
                                            MinimumWithdrawal: OS.DataConversion.JSNodeParamConverter.to(model.variables.cryptoMinimumWthdrawalAmountVar, OS.DataTypes.DataTypes.Text),
                                            CryptoAmount: OS.DataConversion.JSNodeParamConverter.to(model.variables.cryptoAmountVar, OS.DataTypes.DataTypes.Decimal),
                                            Currency: OS.DataConversion.JSNodeParamConverter.to(model.variables.activeWalletVar.currencyAttr, OS.DataTypes.DataTypes.Text),
                                            WidgetId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Input_CryptoAmount"), OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {}, {
                                            YupValidate: YupValidationsOfficialController.default.clientActionProxies.yupValidate$Action
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

                return this.__onChangeAmountInput$Action;
            }
            set _onChangeAmountInput$Action(value) {
                this.__onChangeAmountInput$Action = value;
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
                                span.setAttribute("outsystems.function.key", "ab26ba76-7de9-4941-8bf7-73bde8185cd0");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var listFilterVar = new OS.DataTypes.VariableHolder();
                                var getWalletsListVar = new OS.DataTypes.VariableHolder();
                                var cryptoConfigVar = new OS.DataTypes.VariableHolder();
                                var postCashierFiatVar = new OS.DataTypes.VariableHolder();
                                var postCashierCryptoWithdrawVar = new OS.DataTypes.VariableHolder();
                                var getExchangeRatesVar = new OS.DataTypes.VariableHolder();
                                var sortConfigJSResult = new OS.DataTypes.VariableHolder();
                                var jSONSerializeActiveWalletVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: GetWalletsList
                                    model.flush();
                                    return tradershubController.default.getWalletsList$Action(callContext).then(function(value) {
                                        getWalletsListVar.value = value;
                                    }).then(function() {
                                        // Execute Action: ListFilter
                                        listFilterVar.value = OS.SystemActions.listFilter(getWalletsListVar.value.walletsListOut, function(p) {
                                            return p.is_selectedAttr;
                                        }, callContext);

                                        // ActiveWallet = ListFilter.FilteredList.Current
                                        model.variables.activeWalletVar = listFilterVar.value.filteredListOut.getCurrent(callContext.iterationContext);
                                        // JSON Serialize: JSONSerializeActiveWallet
                                        jSONSerializeActiveWalletVar.value.jSONOut = OS.JSONUtils.serializeToJSON(listFilterVar.value.filteredListOut, false, false);
                                        // ActiveWallet = JSONSerializeActiveWallet.JSON
                                        tradershubClientVariables.setActiveWallet(jSONSerializeActiveWalletVar.value.jSONOut);
                                    }).then(function() {
                                        return OS.Flow.executeSequence(function() {
                                            if ((model.variables.activeWalletVar.isCrpytoAttr)) {
                                                // Execute Action: PostCashierCryptoWithdraw
                                                model.flush();
                                                return tradershubController.default.postCashierCryptoWithdraw$Action(tradershubClientVariables.getCode(), "", OS.DataTypes.Decimal.defaultValue, "", callContext).then(function(value) {
                                                    postCashierCryptoWithdrawVar.value = value;
                                                }).then(function() {
                                                    return OS.Flow.executeSequence(function() {
                                                        if (((postCashierCryptoWithdrawVar.value.responseOut.errorAttr.codeAttr === "InvalidToken"))) {
                                                            // Destination: /tradershub/Wallets
                                                            return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "wallets", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                                        } else {
                                                            // Execute Action: CryptoConfig
                                                            model.flush();
                                                            return tradershubController.default.cryptoConfig$Action(callContext).then(function(value) {
                                                                cryptoConfigVar.value = value;
                                                            }).then(function() {
                                                                // Execute Action: GetExchangeRates
                                                                model.flush();
                                                                return tradershubController.default.getExchangeRates$Action("USD", callContext).then(function(value) {
                                                                    getExchangeRatesVar.value = value;
                                                                });
                                                            }).then(function() {
                                                                sortConfigJSResult.value = OS.Logger.startActiveSpan("SortConfig", function(span) {
                                                                    if (span) {
                                                                        span.setAttribute("code.function", "SortConfig");
                                                                        span.setAttribute("outsystems.function.key", "53b3ef5a-0563-4841-b1c9-918d88a2aa43");
                                                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                                                    }

                                                                    try {
                                                                        return controller.safeExecuteJSNode(tradershub_WalletFlows_WalletsWithdrawal_mvc_controller_OnReady_SortConfigJS, "SortConfig", "OnReady", {
                                                                            ActiveWalletCrypto: OS.DataConversion.JSNodeParamConverter.to(model.variables.activeWalletVar.currencyAttr, OS.DataTypes.DataTypes.Text),
                                                                            CryptoConfigList: OS.DataConversion.JSNodeParamConverter.to(cryptoConfigVar.value.responseOut, OS.DataTypes.DataTypes.Text),
                                                                            MinimumWithdrawal: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                                                        }, function($parameters) {
                                                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.OnReady$sortConfigJSResult"))();
                                                                            jsNodeResult.minimumWithdrawalOut = OS.DataConversion.JSNodeParamConverter.from($parameters.MinimumWithdrawal, OS.DataTypes.DataTypes.Text);
                                                                            return jsNodeResult;
                                                                        }, {}, {});
                                                                    } finally {
                                                                        if (span) {
                                                                            span.end();
                                                                        }

                                                                    }

                                                                }, 1);
                                                                // CryptoMinimumWthdrawalAmount = SortConfig.MinimumWithdrawal
                                                                model.variables.cryptoMinimumWthdrawalAmountVar = sortConfigJSResult.value.minimumWithdrawalOut;
                                                                // ExchangeRates = GetExchangeRates.Response
                                                                model.variables.exchangeRatesVar = getExchangeRatesVar.value.responseOut;
                                                            });
                                                        }

                                                    });
                                                });
                                            } else {
                                                // Execute Action: PostCashierFiat
                                                model.flush();
                                                return tradershubController.default.postCashierFiat$Action("withdraw", tradershubClientVariables.getCode(), callContext).then(function(value) {
                                                    postCashierFiatVar.value = value;
                                                }).then(function() {
                                                    // IframeUrl = PostCashierFiat.Response.Cashier
                                                    model.variables.iframeUrlVar = postCashierFiatVar.value.responseOut.cashierAttr;
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

                return this.__onReady$Action;
            }
            set _onReady$Action(value) {
                this.__onReady$Action = value;
            }

            get _onPriorityCheck$Action() {
                if (!(this.hasOwnProperty("__onPriorityCheck$Action"))) {
                    this.__onPriorityCheck$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnPriorityCheck", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnPriorityCheck");
                                span.setAttribute("outsystems.function.key", "c414b116-f0be-4c8b-822e-eb4563dbef67");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnPriorityCheck");
                                callContext = controller.callContext(callContext);
                                var cryptoEstimationsVar = new OS.DataTypes.VariableHolder();
                                var jSONDeserializeCryptoEstimationsVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_3d0fa871a667e2d1bb232a28767c1e1fStructure))());
                                return OS.Flow.executeAsyncFlow(function() {
                                    return OS.Flow.executeSequence(function() {
                                        if ((model.variables.cryptoPriorityWithdrawalVar)) {
                                            // Execute Action: CryptoEstimations
                                            model.flush();
                                            return tradershubController.default.cryptoEstimations$Action(model.variables.activeWalletVar.currencyAttr, callContext).then(function(value) {
                                                cryptoEstimationsVar.value = value;
                                            }).then(function() {
                                                // JSON Deserialize: JSONDeserializeCryptoEstimations
                                                jSONDeserializeCryptoEstimationsVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(cryptoEstimationsVar.value.responseOut, tradershubModel.ST_3d0fa871a667e2d1bb232a28767c1e1fStructure, false);
                                                // PriorityWithdrawalInfo = JSONDeserializeCryptoEstimations.Data.Crypto_Estimations.Crypto.Withdrawal_fee
                                                model.variables.priorityWithdrawalInfoVar = jSONDeserializeCryptoEstimationsVar.value.dataOut.crypto_EstimationsAttr.cryptoAttr.withdrawal_feeAttr;
                                            });
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

                return this.__onPriorityCheck$Action;
            }
            set _onPriorityCheck$Action(value) {
                this.__onPriorityCheck$Action = value;
            }

            get _withdrawOnClick$Action() {
                if (!(this.hasOwnProperty("__withdrawOnClick$Action"))) {
                    this.__withdrawOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("WithdrawOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "WithdrawOnClick");
                                span.setAttribute("outsystems.function.key", "c4a029a2-74f4-4056-8f09-3e6837f1ec30");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("WithdrawOnClick");
                                callContext = controller.callContext(callContext);
                                var postCashierCryptoWithdrawVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    return OS.Flow.executeSequence(function() {
                                        if ((model.widgets.get(idService.getId("Form1")).validAttr)) {
                                            // Execute Action: PostCashierCryptoWithdraw
                                            model.flush();
                                            return tradershubController.default.postCashierCryptoWithdraw$Action(tradershubClientVariables.getCode(), model.variables.cryptoAddressVar, model.variables.cryptoAmountVar, "", callContext).then(function(value) {
                                                postCashierCryptoWithdrawVar.value = value;
                                            });
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

                return this.__withdrawOnClick$Action;
            }
            set _withdrawOnClick$Action(value) {
                this.__withdrawOnClick$Action = value;
            }

            get _convertCryptoToFiat$Action() {
                if (!(this.hasOwnProperty("__convertCryptoToFiat$Action"))) {
                    this.__convertCryptoToFiat$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ConvertCryptoToFiat", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ConvertCryptoToFiat");
                                span.setAttribute("outsystems.function.key", "fa4703a4-bd69-4e87-a64d-f00be92b104c");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("ConvertCryptoToFiat");
                                callContext = controller.callContext(callContext);
                                var convertCryptoToFiatJSResult = new OS.DataTypes.VariableHolder();
                                convertCryptoToFiatJSResult.value = OS.Logger.startActiveSpan("ConvertCryptoToFiat", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "ConvertCryptoToFiat");
                                        span.setAttribute("outsystems.function.key", "14787770-22d8-4b42-845d-508db203d99a");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_WalletFlows_WalletsWithdrawal_mvc_controller_ConvertCryptoToFiat_ConvertCryptoToFiatJS, "ConvertCryptoToFiat", "ConvertCryptoToFiat", {
                                            BaseCurrency: OS.DataConversion.JSNodeParamConverter.to(model.variables.activeWalletVar.currencyAttr, OS.DataTypes.DataTypes.Text),
                                            ExchangeRates: OS.DataConversion.JSNodeParamConverter.to(model.variables.exchangeRatesVar, OS.DataTypes.DataTypes.Text),
                                            CryptoAmount: OS.DataConversion.JSNodeParamConverter.to(model.variables.cryptoAmountVar, OS.DataTypes.DataTypes.Decimal),
                                            ConvertedAmount: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.Decimal.defaultValue, OS.DataTypes.DataTypes.Decimal)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.ConvertCryptoToFiat$convertCryptoToFiatJSResult"))();
                                            jsNodeResult.convertedAmountOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ConvertedAmount, OS.DataTypes.DataTypes.Decimal);
                                            return jsNodeResult;
                                        }, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // ConvertedAmount = ConvertCryptoToFiat.ConvertedAmount
                                model.variables.convertedAmountVar = convertCryptoToFiatJSResult.value.convertedAmountOut;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__convertCryptoToFiat$Action;
            }
            set _convertCryptoToFiat$Action(value) {
                this.__convertCryptoToFiat$Action = value;
            }


            onChangeAddressInput$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnChangeAddressInput__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnChangeAddressInput");
                        span.setAttribute("outsystems.function.key", "0a476f32-b4f0-41a5-bc08-13a5e21440c9");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onChangeAddressInput$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClick");
                        span.setAttribute("outsystems.function.key", "23537431-581a-428c-b048-a49edf9e431c");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onChangeAmountInput$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnChangeAmountInput__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnChangeAmountInput");
                        span.setAttribute("outsystems.function.key", "408025f4-061f-4a09-9523-263ca04340df");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onChangeAmountInput$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "ab26ba76-7de9-4941-8bf7-73bde8185cd0");
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

            onPriorityCheck$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnPriorityCheck__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnPriorityCheck");
                        span.setAttribute("outsystems.function.key", "c414b116-f0be-4c8b-822e-eb4563dbef67");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onPriorityCheck$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            withdrawOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("WithdrawOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "WithdrawOnClick");
                        span.setAttribute("outsystems.function.key", "c4a029a2-74f4-4056-8f09-3e6837f1ec30");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._withdrawOnClick$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            convertCryptoToFiat$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ConvertCryptoToFiat__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ConvertCryptoToFiat");
                        span.setAttribute("outsystems.function.key", "fa4703a4-bd69-4e87-a64d-f00be92b104c");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._convertCryptoToFiat$Action, callContext);
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
        Controller.registerVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.OnClick$returnAmountJSResult", [{
            name: "CryptoAmount",
            attrName: "cryptoAmountOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Decimal,
            defaultValue: function() {
                return OS.DataTypes.Decimal.defaultValue;
            }
        }]);
        Controller.registerVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.OnReady$sortConfigJSResult", [{
            name: "MinimumWithdrawal",
            attrName: "minimumWithdrawalOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.ConvertCryptoToFiat$convertCryptoToFiatJSResult", [{
            name: "ConvertedAmount",
            attrName: "convertedAmountOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Decimal,
            defaultValue: function() {
                return OS.DataTypes.Decimal.defaultValue;
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.WalletFlows.WalletsWithdrawal.mvc$controller.OnChangeAddressInput.CryptoAddressValidationJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const payload = {
            CryptoAddress: $parameters.CryptoAddress
        }

        const CryptoAddressSchema = yup.object().shape({
            CryptoAddress: yup
                .string()
                .matches(/^[A-Za-z0-9]{25,64}$/, "Enter 25 to 64 letters and numbers. No spaces or special characters.")
        });

        const errors = $actions.YupValidate(CryptoAddressSchema, payload).Errors;

        errors.CryptoAddress != "" ? $public.Validation.setWidgetAsInvalid($parameters.WidgetId, errors.CryptoAddress) : $public.Validation.setWidgetAsValid($parameters.WidgetId)
    };
});

define("tradershub.WalletFlows.WalletsWithdrawal.mvc$controller.OnClick.ReturnAmountJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.CryptoAmount = parseFloat(($parameters.WalletBalance * $parameters.AmountPercentage).toFixed(7));

    };
});

define("tradershub.WalletFlows.WalletsWithdrawal.mvc$controller.OnChangeAmountInput.CryptoAmountValidationJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const payload = {
            CryptoAmount: $parameters.CryptoAmount
        };

        const minWithdrawalAmount = parseFloat($parameters.MinimumWithdrawal);
        const currency = $parameters.Currency

        const CryptoAmountSchema = yup.object().shape({
            CryptoAmount: yup.number()
                .test(
                    "exceed-balance",
                    "Insufficient funds",
                    function(value) {
                        return value <= $parameters.WalletBalance;
                    }
                )
                .test(
                    "min-withdrawal",
                    `Minimum withdrawal amount is ${minWithdrawalAmount} ${currency}`,
                    function(value) {
                        return value >= minWithdrawalAmount;
                    }
                )
        });

        const errors = $actions.YupValidate(CryptoAmountSchema, payload).Errors;

        errors.CryptoAmount != "" ? $public.Validation.setWidgetAsInvalid($parameters.WidgetId, errors.CryptoAmount) : $public.Validation.setWidgetAsValid($parameters.WidgetId)

    };
});

define("tradershub.WalletFlows.WalletsWithdrawal.mvc$controller.OnReady.SortConfigJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const cryptoConfigList = JSON.parse($parameters.CryptoConfigList);
        const currency = $parameters.ActiveWalletCrypto;
        const currencyConfig = cryptoConfigList.crypto_config.currencies_config;
        $parameters.MinimumWithdrawal = JSON.stringify(currencyConfig[currency].minimum_withdrawal)

    };
});

define("tradershub.WalletFlows.WalletsWithdrawal.mvc$controller.ConvertCryptoToFiat.ConvertCryptoToFiatJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const exchangeRatesList = JSON.parse($parameters.ExchangeRates);
        const exchangeRates = exchangeRatesList.exchange_rates.rates[$parameters.BaseCurrency];
        const cryptoAmount = $parameters.CryptoAmount

        const getConvertedFiatAmount = (cryptoInput) => {
            const value = typeof cryptoInput === 'string' ? parseFloat(cryptoInput) : cryptoInput;
            const convertedValue = !Number.isNaN(value) && exchangeRates ? (value / exchangeRates).toFixed(2) : '';
            return parseFloat(convertedValue);
        };


        $parameters.ConvertedAmount = getConvertedFiatAmount(cryptoAmount);
    };
});


define("tradershub.WalletFlows.WalletsWithdrawal.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});