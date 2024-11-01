define("tradershub.WalletFlows.WalletsRecentTransactions.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.controller", "RESTAPIWebsocketOfficial.model", "tradershub.controller", "tradershub.Layouts.MainLayout.mvc$model", "tradershub.WalletBlocks.WalletsOverlayPage.mvc$model", "tradershub.WalletBlocks.WalletsTransaction.mvc$model", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_98879cbf153f8de2b881b6fbde3b59bdStructure", "tradershub.model$RL_88c19a254c0070e215d8cb4352d11d8e", "tradershub.model$ST_3425849bb816196585dd6f07dbf2721dStructure", "tradershub.model$ST_fdf7cabb83e72ffff66e8d7681355660Structure", "RESTAPIWebsocketOfficial.model$ST_746d074ddcc08e0df3b269ffb1933d5aStructure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$GetAccountStatus2", "tradershub.model$RL_caf4f8b8680e835a8e4e4bea133e8365", "tradershub.controller$GetWalletsList", "tradershub.model$ST_290a67dab0570e5bf53bc562ec0f2742Structure", "tradershub.controller$Statement"], function(OSRuntimeCore, tradershubModel, OutSystemsUIController, RESTAPIWebsocketOfficialModel, tradershubController, tradershub_Layouts_MainLayout_mvcModel, tradershub_WalletBlocks_WalletsOverlayPage_mvcModel, tradershub_WalletBlocks_WalletsTransaction_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Transactions", "transactionsVar", "Transactions", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_88c19a254c0070e215d8cb4352d11d8e());
                    }, false, tradershubModel.RL_88c19a254c0070e215d8cb4352d11d8e),
                    this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("ActiveWallet", "activeWalletVar", "ActiveWallet", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_3425849bb816196585dd6f07dbf2721dStructure());
                    }, false, tradershubModel.ST_3425849bb816196585dd6f07dbf2721dStructure)
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
                Model._hasValidationWidgetsValue = ((tradershub_Layouts_MainLayout_mvcModel.hasValidationWidgets || tradershub_WalletBlocks_WalletsOverlayPage_mvcModel.hasValidationWidgets) || tradershub_WalletBlocks_WalletsTransaction_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.WalletFlows.WalletsRecentTransactions.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "RESTAPIWebsocketOfficial.model", "react", "@outsystems/runtime-view-js", "tradershub.WalletFlows.WalletsRecentTransactions.mvc$model", "tradershub.WalletFlows.WalletsRecentTransactions.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.MainLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.WalletBlocks.WalletsOverlayPage.mvc$view", "tradershub.WalletBlocks.WalletsTransaction.mvc$view", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_98879cbf153f8de2b881b6fbde3b59bdStructure", "tradershub.model$RL_88c19a254c0070e215d8cb4352d11d8e", "tradershub.model$ST_3425849bb816196585dd6f07dbf2721dStructure", "tradershub.model$ST_fdf7cabb83e72ffff66e8d7681355660Structure", "RESTAPIWebsocketOfficial.model$ST_746d074ddcc08e0df3b269ffb1933d5aStructure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$GetAccountStatus2", "tradershub.model$RL_caf4f8b8680e835a8e4e4bea133e8365", "tradershub.controller$GetWalletsList", "tradershub.model$ST_290a67dab0570e5bf53bc562ec0f2742Structure", "tradershub.controller$Statement"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, RESTAPIWebsocketOfficialModel, React, OSView, tradershub_WalletFlows_WalletsRecentTransactions_mvc_model, tradershub_WalletFlows_WalletsRecentTransactions_mvc_controller, tradershubClientVariables, tradershub_Layouts_MainLayout_mvc_view, OSWidgets, tradershub_WalletBlocks_WalletsOverlayPage_mvc_view, tradershub_WalletBlocks_WalletsTransaction_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "WalletFlows.WalletsRecentTransactions";
        }

        static getAttributes() {
            return {
                codeFunction: "WalletsRecentTransactions",
                functionKey: "cbb4d6ff-b419-485f-9940-81c40e1fbae3",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.WalletFlows.WalletsRecentTransactions.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_MainLayout_mvc_view, tradershub_WalletBlocks_WalletsOverlayPage_mvc_view, tradershub_WalletBlocks_WalletsTransaction_mvc_view];
        }

        get modelFactory() {
            return tradershub_WalletFlows_WalletsRecentTransactions_mvc_model;
        }

        get controllerFactory() {
            return tradershub_WalletFlows_WalletsRecentTransactions_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("_9a0yxm0X0iZQIHEDh+64w#Title", "WalletsRecentTransactions");
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
                        return [React.createElement(tradershub_WalletBlocks_WalletsOverlayPage_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                HideCloseButton: true,
                                PageTitle: model.variables.activeWalletVar.nameAttr,
                                HideWalletHeader: true
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
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "ContentWrapper"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "wallets-transaction-header margin-bottom-m",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "WalletTransactionHeader"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "wallets-transaction-currency",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Image, {
                                        extendedProperties: {
                                            style: "height: 32px;"
                                        },
                                        gridProperties: {
                                            width: "32px"
                                        },
                                        type: /*External*/ 1,
                                        url: model.variables.activeWalletVar.iconAttr,
                                        _idProps: {
                                            service: idService,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "wallets-transaction-info",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Expression, {
                                        extendedProperties: {
                                            style: "font-size: 12px;"
                                        },
                                        style: model.getCachedValue(idService.getId("TrtjDSdAG0OP7iILlybFyA.Style"), function() {
                                            return ((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut) ? ("font-size-s") : ("font-size-xs"));
                                        }),
                                        value: model.variables.activeWalletVar.nameAttr,
                                        _idProps: {
                                            service: idService,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Expression, {
                                        extendedProperties: {
                                            style: "font-size: 18px;"
                                        },
                                        gridProperties: {
                                            marginLeft: "0px"
                                        },
                                        style: "font-bold heading5 full-width",
                                        value: model.variables.activeWalletVar.formattedBalanceAttr,
                                        _idProps: {
                                            service: idService,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "wallets-transaction-actions",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "display-flex flex-direction-column align-items-center",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Button, {
                                        enabled: true,
                                        isDefault: false,
                                        onClick: function() {
                                            return Promise.resolve().then(function() {
                                                var eventHandlerContext = callContext.clone();
                                                return controller.depositbtnOnClick$Action(controller.callContext(eventHandlerContext));
                                            });;
                                        },
                                        style: "wallet-header-btn wallet-header-btn-primary",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "DepositBtn2"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Image, {
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.plussmwhite.svg"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "12"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })), React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "font-size: 12px;"
                                        },
                                        style: "margin-top-xs",
                                        text: [$text(getTranslation("s9NNwNCXZ0CvWcJ5FqloYw#Value", "Deposit"))],
                                        _idProps: {
                                            service: idService,
                                            uuid: "13"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "display-flex flex-direction-column align-items-center",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "14"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Button, {
                                        enabled: true,
                                        extendedProperties: {
                                            style: "border-color: #101213; border-width: 1px; margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                                        },
                                        gridProperties: {
                                            marginLeft: "0px"
                                        },
                                        isDefault: false,
                                        onClick: function() {
                                            return Promise.resolve().then(function() {
                                                var eventHandlerContext = callContext.clone();
                                                return controller.withdrawbtnOnClick$Action(controller.callContext(eventHandlerContext));
                                            });;
                                        },
                                        style: "wallet-header-btn",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "WithdrawBtn3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Image, {
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.minussm.svg"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "16"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })), React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "font-size: 12px;"
                                        },
                                        style: "margin-top-xs",
                                        text: [$text(getTranslation("fCvYKaeAIkC05YQyQv5bfw#Value", "Withdraw"))],
                                        _idProps: {
                                            service: idService,
                                            uuid: "17"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "display-flex flex-direction-column align-items-center",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "18"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Button, {
                                        enabled: true,
                                        extendedProperties: {
                                            style: "border-color: #101213; border-width: 1px; padding: 0px 16px 0px 16px;"
                                        },
                                        isDefault: false,
                                        onClick: function() {
                                            try {
                                                OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "wallets/transactions", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), null, true);
                                            } catch (ex) {
                                                if (((ex.name) !== ("RedirectOccurredException"))) {
                                                    throw ex;
                                                }

                                            };
                                        },
                                        style: "wallet-header-btn",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "TransferBtn2"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Image, {
                                        extendedProperties: {
                                            style: "color: #222;"
                                        },
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.arrowuparrowdownsm.svg"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "20"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })), React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "font-size: 12px;"
                                        },
                                        style: "margin-top-xs",
                                        text: [$text(getTranslation("36I4v+f8ckKzWPDKEate7g#Value", "Transfer"))],
                                        _idProps: {
                                            service: idService,
                                            uuid: "21"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })))), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "TransactionsWrapper"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, $if(model.variables.isLoadingVar, false, this, function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "border-radius: 8px;"
                                            },
                                            style: "wallets-recent-transactions-skeleton wallet-skeleton margin-top",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "23"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        })];
                                    }, function() {
                                        return [$if(model.variables.transactionsVar.isEmpty, false, this, function() {
                                            return [React.createElement(OSWidgets.Container, {
                                                align: /*Default*/ 0,
                                                animate: false,
                                                style: "display-flex flex-direction-column align-items-center justify-content-center",
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    name: "EmptyTransactionContainer"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            }, React.createElement(OSWidgets.Container, {
                                                align: /*Default*/ 0,
                                                animate: false,
                                                extendedProperties: {
                                                    style: "text-align: center;"
                                                },
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "25"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            }, React.createElement(OSWidgets.Image, {
                                                gridProperties: {
                                                    width: "36px"
                                                },
                                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.warningneutral.svg"),
                                                style: "margin-bottom-base",
                                                type: /*Static*/ 0,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "26"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })), React.createElement(OSWidgets.Text, {
                                                extendedProperties: {
                                                    style: "font-size: 18px;"
                                                },
                                                style: "font-bold margin-bottom-s",
                                                text: [$text(getTranslation("K8vQm62PtEKjuxDpZl6z2Q#Value", "No transactions found"))],
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "27"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            }), React.createElement(OSWidgets.Text, {
                                                extendedProperties: {
                                                    style: "font-size: 16px;"
                                                },
                                                text: [$text(getTranslation("ZQ_nxfAG9UusGyQPWO49BA#Value", "Your transactions will appear here."))],
                                                _idProps: {
                                                    service: idService,
                                                    name: "EmptyTransactionContentContainer"
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
                                                    uuid: "29"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            }, React.createElement(OSWidgets.Text, {
                                                extendedProperties: {
                                                    style: "font-size: 16px;"
                                                },
                                                style: "font-bold",
                                                text: ["Transactions"],
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "30"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            }), React.createElement(OSWidgets.Container, {
                                                align: /*Default*/ 0,
                                                animate: false,
                                                style: "margin-top-base",
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "31"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            }, React.createElement(tradershub_WalletBlocks_WalletsTransaction_mvc_view, {
                                                getOwnerSpan: function() {
                                                    return _this.getChildSpan("render");
                                                },
                                                getOwnerDisposeSpan: function() {
                                                    return _this.getChildSpan("destroy");
                                                },
                                                inputs: {
                                                    TransactionsList: model.variables.transactionsVar
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
                                                    uuid: "32",
                                                    alias: "3"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider,
                                                _dependencies: []
                                            })))];
                                        })];
                                    })))];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.transactionsVar), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.activeWalletVar.formattedBalanceAttr), asPrimitiveValue(model.variables.activeWalletVar.nameAttr), asPrimitiveValue(model.variables.activeWalletVar.iconAttr)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.transactionsVar), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.activeWalletVar.formattedBalanceAttr), asPrimitiveValue(model.variables.activeWalletVar.iconAttr), asPrimitiveValue(model.variables.activeWalletVar.nameAttr)]
            }));
        }
    }

    return View;
});
define("tradershub.WalletFlows.WalletsRecentTransactions.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "RESTAPIWebsocketOfficial.model", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.WalletFlows.WalletsRecentTransactions.mvc$translationsResources", "tradershub.WalletFlows.controller", "tradershub.WalletFlows.WalletsRecentTransactions.mvc$controller.OnReady.MapTransactionsJS", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_98879cbf153f8de2b881b6fbde3b59bdStructure", "tradershub.model$RL_88c19a254c0070e215d8cb4352d11d8e", "tradershub.model$ST_3425849bb816196585dd6f07dbf2721dStructure", "tradershub.model$ST_fdf7cabb83e72ffff66e8d7681355660Structure", "RESTAPIWebsocketOfficial.model$ST_746d074ddcc08e0df3b269ffb1933d5aStructure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$GetAccountStatus2", "tradershub.model$RL_caf4f8b8680e835a8e4e4bea133e8365", "tradershub.controller$GetWalletsList", "tradershub.model$ST_290a67dab0570e5bf53bc562ec0f2742Structure", "tradershub.controller$Statement"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, RESTAPIWebsocketOfficialModel, tradershubLanguageResources, tradershubClientVariables, tradershub_WalletFlows_WalletsRecentTransactions_mvc_TranslationsResources, tradershub_WalletFlowsController, tradershub_WalletFlows_WalletsRecentTransactions_mvc_controller_OnReady_MapTransactionsJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, tradershub_WalletFlows_WalletsRecentTransactions_mvc_TranslationsResources);
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
            get _depositbtnOnClick$Action() {
                if (!(this.hasOwnProperty("__depositbtnOnClick$Action"))) {
                    this.__depositbtnOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("DepositbtnOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "DepositbtnOnClick");
                                span.setAttribute("outsystems.function.key", "55599c77-f67d-4742-934e-a2b7cea23339");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("DepositbtnOnClick");
                                callContext = controller.callContext(callContext);
                                var getAccountStatusVar = new OS.DataTypes.VariableHolder();
                                var accountStatusVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: GetAccountStatus
                                    model.flush();
                                    return tradershubController.default.getAccountStatus2$Action(callContext).then(function(value) {
                                        getAccountStatusVar.value = value;
                                    }).then(function() {
                                        // Execute Action: AccountStatus
                                        accountStatusVar.value = OS.SystemActions.listFilter(getAccountStatusVar.value.responseOut.getAccountStatusAttr.statusAttr, function(p) {
                                            return (p === "cashier_locked");
                                        }, callContext);

                                    }).then(function() {
                                        if (((accountStatusVar.value.filteredListOut.length > 0))) {
                                            // Destination: /tradershub/WalletDisableDeposit
                                            return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "wallets/deposit/disable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                        } else {
                                            if (((model.variables.activeWalletVar.currency_typeAttr === "fiat"))) {
                                                // Destination: /tradershub/WalletsFiatDeposit
                                                return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "wallets/deposit/fiat", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                            } else {
                                                // Destination: /tradershub/WalletsCryptoOptionDeposit
                                                return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "wallets/deposit/crypto", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                            }

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

                return this.__depositbtnOnClick$Action;
            }
            set _depositbtnOnClick$Action(value) {
                this.__depositbtnOnClick$Action = value;
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
                                span.setAttribute("outsystems.function.key", "b73a1376-9602-49de-8fb3-41cb4767b1ed");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var getWalletsListVar = new OS.DataTypes.VariableHolder();
                                var statementVar = new OS.DataTypes.VariableHolder();
                                var mapTransactionsJSResult = new OS.DataTypes.VariableHolder();
                                var jSONSerializeWalletsListVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONSerializeTransactionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var serializeActiveWalletVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_3425849bb816196585dd6f07dbf2721dStructure))());
                                var jSONDeserializeFormattedTransactionItemListVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_88c19a254c0070e215d8cb4352d11d8e))());
                                return OS.Flow.executeAsyncFlow(function() {
                                    return OS.Flow.executeSequence(function() {
                                        if ((!(model.variables.isLoadingVar))) {
                                            // IsLoading = True
                                            model.variables.isLoadingVar = true;
                                            // JSON Deserialize: SerializeActiveWallet
                                            serializeActiveWalletVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(tradershubClientVariables.getActiveWallet(), tradershubModel.ST_3425849bb816196585dd6f07dbf2721dStructure, false);
                                            // ActiveWallet = SerializeActiveWallet.Data
                                            model.variables.activeWalletVar = serializeActiveWalletVar.value.dataOut;
                                            // Execute Action: Statement
                                            model.flush();
                                            return tradershubController.default.statement$Action("", "", callContext).then(function(value) {
                                                statementVar.value = value;
                                            }).then(function() {
                                                // Execute Action: GetWalletsList
                                                model.flush();
                                                return tradershubController.default.getWalletsList$Action(callContext).then(function(value) {
                                                    getWalletsListVar.value = value;
                                                });
                                            }).then(function() {
                                                // JSON Serialize: JSONSerializeWalletsList
                                                jSONSerializeWalletsListVar.value.jSONOut = OS.JSONUtils.serializeToJSON(getWalletsListVar.value.walletsListOut, false, false);
                                                // JSON Serialize: JSONSerializeTransactions
                                                jSONSerializeTransactionsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(statementVar.value.responseOut.statementAttr.transactionsAttr, false, false);
                                                mapTransactionsJSResult.value = OS.Logger.startActiveSpan("MapTransactions", function(span) {
                                                    if (span) {
                                                        span.setAttribute("code.function", "MapTransactions");
                                                        span.setAttribute("outsystems.function.key", "e24569a6-bb66-4dde-a3bd-721cc79fa4aa");
                                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                                    }

                                                    try {
                                                        return controller.safeExecuteJSNode(tradershub_WalletFlows_WalletsRecentTransactions_mvc_controller_OnReady_MapTransactionsJS, "MapTransactions", "OnReady", {
                                                            WalletsList: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeWalletsListVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                            Transactions: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeTransactionsVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                            DatesList: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                                            FormattedTransactions: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                                        }, function($parameters) {
                                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsRecentTransactions.OnReady$mapTransactionsJSResult"))();
                                                            jsNodeResult.datesListOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DatesList, OS.DataTypes.DataTypes.Text);
                                                            jsNodeResult.formattedTransactionsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FormattedTransactions, OS.DataTypes.DataTypes.Text);
                                                            return jsNodeResult;
                                                        }, {}, {});
                                                    } finally {
                                                        if (span) {
                                                            span.end();
                                                        }

                                                    }

                                                }, 1);
                                                // JSON Deserialize: JSONDeserializeFormattedTransactionItemList
                                                jSONDeserializeFormattedTransactionItemListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(mapTransactionsJSResult.value.formattedTransactionsOut, tradershubModel.RL_88c19a254c0070e215d8cb4352d11d8e, false);
                                                // Transactions = JSONDeserializeFormattedTransactionItemList.Data
                                                model.variables.transactionsVar = jSONDeserializeFormattedTransactionItemListVar.value.dataOut;
                                                // IsLoading = False
                                                model.variables.isLoadingVar = false;
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

                return this.__onReady$Action;
            }
            set _onReady$Action(value) {
                this.__onReady$Action = value;
            }

            get _withdrawbtnOnClick$Action() {
                if (!(this.hasOwnProperty("__withdrawbtnOnClick$Action"))) {
                    this.__withdrawbtnOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("WithdrawbtnOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "WithdrawbtnOnClick");
                                span.setAttribute("outsystems.function.key", "bc93fae8-9a73-40ab-a8ce-82d29e6c9363");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("WithdrawbtnOnClick");
                                callContext = controller.callContext(callContext);
                                var accountStatusListVar = new OS.DataTypes.VariableHolder();
                                var getAccountStatus2Var = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: GetAccountStatus2
                                    model.flush();
                                    return tradershubController.default.getAccountStatus2$Action(callContext).then(function(value) {
                                        getAccountStatus2Var.value = value;
                                    }).then(function() {
                                        // Execute Action: AccountStatusList
                                        accountStatusListVar.value = OS.SystemActions.listFilter(getAccountStatus2Var.value.responseOut.getAccountStatusAttr.statusAttr, function(p) {
                                            return (p === "cashier_locked");
                                        }, callContext);

                                    }).then(function() {
                                        if (((accountStatusListVar.value.filteredListOut.length > 0))) {
                                            // Destination: /tradershub/WalletsDisableWithdrawal
                                            return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "wallets/withdrawal/disable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                        } else {
                                            if ((model.variables.activeWalletVar.balanceAttr.gt(OS.BuiltinFunctions.integerToDecimal(0)))) {
                                                // Destination: /tradershub/WalletsUserVerificationWithdrawal
                                                return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "wallets/withdrawal/user-verification", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                            } else {
                                                // Destination: /tradershub/WalletsNoBalanceWithdrawal
                                                return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "wallets/withdrawal/no-balance", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                            }

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

                return this.__withdrawbtnOnClick$Action;
            }
            set _withdrawbtnOnClick$Action(value) {
                this.__withdrawbtnOnClick$Action = value;
            }


            depositbtnOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("DepositbtnOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "DepositbtnOnClick");
                        span.setAttribute("outsystems.function.key", "55599c77-f67d-4742-934e-a2b7cea23339");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._depositbtnOnClick$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "b73a1376-9602-49de-8fb3-41cb4767b1ed");
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

            withdrawbtnOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("WithdrawbtnOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "WithdrawbtnOnClick");
                        span.setAttribute("outsystems.function.key", "bc93fae8-9a73-40ab-a8ce-82d29e6c9363");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._withdrawbtnOnClick$Action, callContext);
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
        Controller.registerVariableGroupType("tradershub.WalletFlows.WalletsRecentTransactions.OnReady$mapTransactionsJSResult", [{
            name: "DatesList",
            attrName: "datesListOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "FormattedTransactions",
            attrName: "formattedTransactionsOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.WalletFlows.WalletsRecentTransactions.mvc$controller.OnReady.MapTransactionsJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const walletList = JSON.parse($parameters.WalletsList);
        const transactions = JSON.parse($parameters.Transactions);

        function formatDate(unixTimestamp) {
            const date = new Date(unixTimestamp * 1000);
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            };
            return date.toLocaleDateString(undefined, options);
        }

        const platformMapper = {
            dtrade: "Options trading",
            dxtrade: "Deriv X",
            mt5: "Deriv MT5",
            ctrader: "Deriv cTrader"
        };

        const getPlatform = (loginId = '') => {
            if (!loginId) return "";

            if (loginId.startsWith("CRW")) {
                const wallet = walletList.find(w => w.loginid === loginId);
                return wallet ? wallet.name : "";
            }

            if (loginId.startsWith('CR')) {
                return platformMapper.dtrade;
            }

            if (loginId.startsWith('CTR')) {
                return platformMapper.ctrader;
            }

            if (loginId.startsWith('CXR')) {
                return platformMapper.dxtrade;
            }

            if (loginId.startsWith('MTR')) {
                return platformMapper.mt5;
            }

            return "";
        };

        const formattedTransactions = transactions.reduce((acc, transaction) => {
            // Filter out 'buy' and 'sell' action types
            if (transaction.action_type === 'buy' || transaction.action_type === 'sell') {
                return acc;
            }

            // Create a new transaction object with the formatted date
            const t = {
                ...transaction,
                date: formatDate(transaction.transaction_time)
            };

            // Assign platform for 'from' field if it exists
            if (transaction.from) {
                t.from.platform = getPlatform(transaction.from.loginid);
            }

            // Assign platform for 'to' field if it exists
            if (transaction.to) {
                t.to.platform = getPlatform(transaction.to.loginid);
            }

            // Push the modified transaction into the result array
            acc.push(t);
            return acc;
        }, []);

        $parameters.FormattedTransactions = JSON.stringify(formattedTransactions);

    };
});


define("tradershub.WalletFlows.WalletsRecentTransactions.mvc$translationsResources.fr-FR", [], function() {
    return {
        "ZQ_nxfAG9UusGyQPWO49BA#Value": "Vos transactions apparaîtront ici.",
        "K8vQm62PtEKjuxDpZl6z2Q#Value": "Aucune transaction trouvée",
        "36I4v+f8ckKzWPDKEate7g#Value": "Transférer",
        "fCvYKaeAIkC05YQyQv5bfw#Value": "Retirer",
        "s9NNwNCXZ0CvWcJ5FqloYw#Value": "Dépôt"
    };
});

define("tradershub.WalletFlows.WalletsRecentTransactions.mvc$translationsResources", ["exports", "tradershub.WalletFlows.WalletsRecentTransactions.mvc$translationsResources.fr-FR"], function(exports, tradershub_WalletFlows_WalletsRecentTransactions_mvc_translationsResources_frFR) {
    return {
        "fr-FR": {
            "translations": tradershub_WalletFlows_WalletsRecentTransactions_mvc_translationsResources_frFR,
            "isRTL": false
        }
    };
});