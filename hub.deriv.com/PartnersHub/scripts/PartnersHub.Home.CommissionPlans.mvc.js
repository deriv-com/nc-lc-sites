define("PartnersHub.Home.CommissionPlans.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "OutSystemsUI.model", "PartnersHub.controller", "OutSystemsUI.Utilities.Separator.mvc$model", "OutSystemsUI.Adaptive.DisplayOnDevice.mvc$model", "OutSystemsUI.Interaction.Carousel.mvc$model", "PartnersHub.Home.CommissionBanner.mvc$model", "OutSystemsUI.model$ST_660adb7a9db48bff1b12c6e03515b415Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.model$ST_7d99fd1de65649f174aff6854b052539Structure", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "PartnersHub.controller$RedirectToExternalNewTab"], function(OSRuntimeCore, PartnersHubModel, OutSystemsUIModel, PartnersHubController, OutSystemsUI_Utilities_Separator_mvcModel, OutSystemsUI_Adaptive_DisplayOnDevice_mvcModel, OutSystemsUI_Interaction_Carousel_mvcModel, PartnersHub_Home_CommissionBanner_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
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
    OS.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return VariablesRecord;
        }

        static getWidgetsRecordConstructor() {
            return WidgetsRecord;
        }

        static get hasValidationWidgets() {
            if ((Model._hasValidationWidgetsValue === undefined)) {
                Model._hasValidationWidgetsValue = (((OutSystemsUI_Utilities_Separator_mvcModel.hasValidationWidgets || OutSystemsUI_Adaptive_DisplayOnDevice_mvcModel.hasValidationWidgets) || OutSystemsUI_Interaction_Carousel_mvcModel.hasValidationWidgets) || PartnersHub_Home_CommissionBanner_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Home.CommissionPlans.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "react", "@outsystems/runtime-view-js", "PartnersHub.Home.CommissionPlans.mvc$model", "PartnersHub.Home.CommissionPlans.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Utilities.Separator.mvc$view", "OutSystemsUI.Adaptive.DisplayOnDevice.mvc$view", "OutSystemsUI.Interaction.Carousel.mvc$view", "PartnersHub.Home.CommissionBanner.mvc$view", "OutSystemsUI.model$ST_660adb7a9db48bff1b12c6e03515b415Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.model$ST_7d99fd1de65649f174aff6854b052539Structure", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "PartnersHub.controller$RedirectToExternalNewTab"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, React, OSView, PartnersHub_Home_CommissionPlans_mvc_model, PartnersHub_Home_CommissionPlans_mvc_controller, PartnersHubClientVariables, OSWidgets, OutSystemsUI_Utilities_Separator_mvc_view, OutSystemsUI_Adaptive_DisplayOnDevice_mvc_view, OutSystemsUI_Interaction_Carousel_mvc_view, PartnersHub_Home_CommissionBanner_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Home.CommissionPlans";
        }

        static getAttributes() {
            return {
                codeFunction: "CommissionPlans",
                functionKey: "5fa3ec0e-e03b-4ce3-90a7-e6d76785291b",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Home.CommissionPlans.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Utilities_Separator_mvc_view, OutSystemsUI_Adaptive_DisplayOnDevice_mvc_view, OutSystemsUI_Interaction_Carousel_mvc_view, PartnersHub_Home_CommissionBanner_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Home_CommissionPlans_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Home_CommissionPlans_mvc_controller;
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
                animate: true,
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                visible: (PartnersHubClientVariables.getisCommisionsPlansEnabledFF() === true),
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "border: 1px solid #DEE2E6; border-radius: 8px; gap: 16px; padding: 16px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 16px;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.AdvancedHtml, {
                tag: "h5",
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    "OSTagName": "h5"
                },
                style: "container-title",
                text: [$text(getTranslation("7KaXe6C0nEqxpykIt84DYA#Value", "You can earn commissions from"))],
                _idProps: {
                    service: idService,
                    name: "Youcanearncommissionsfrom"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "cfd-container",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.AdvancedHtml, {
                extendedProperties: {
                    value: "CFDs"
                },
                tag: "h6",
                _idProps: {
                    service: idService,
                    uuid: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                style: "section-subtitle",
                text: [$text(getTranslation("sHFYNLZu_0WxTchJzBk4Kw#Value", "CFDs trading"))],
                _idProps: {
                    service: idService,
                    uuid: "7"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Label, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: idService,
                    uuid: "8"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                style: "description",
                text: [$text(getTranslation("NpVN_qK5Ukq96BzyPFgppw#Value", "Earn with our instrument-based commission plan."))],
                _idProps: {
                    service: idService,
                    uuid: "9"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.AdvancedHtml, {
                extendedEvents: {
                    onClick: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return controller.onClickToCFDs$Action(controller.callContext(eventHandlerContext));
                        });;
                    }
                },
                tag: "span",
                _idProps: {
                    service: idService,
                    uuid: "10"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "color: #222; cursor: pointer; font-weight: bold; margin-left: 4px; text-decoration: underline;"
                },
                style: "learn-more",
                text: [$text(getTranslation("V1v8Zxvrd0S2qgA4Mc58lg#Value", "Learn more"))],
                _idProps: {
                    service: idService,
                    uuid: "11"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })))), React.createElement(OutSystemsUI_Utilities_Separator_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    Space: PartnersHubModel.staticEntities.space.small
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
                    uuid: "12",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 8px;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "13"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.AdvancedHtml, {
                tag: "h6",
                _idProps: {
                    service: idService,
                    uuid: "14"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                style: "section-subtitle",
                text: [$text(getTranslation("KiD9uiu9wka+5H5+rFqK_w#Value", "Options trading"))],
                _idProps: {
                    service: idService,
                    uuid: "15"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OutSystemsUI_Adaptive_DisplayOnDevice_mvc_view, {
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
                    uuid: "16",
                    alias: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    onDesktop: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "display: flex; gap: 8px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "17"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            gridProperties: {
                                classes: "OSInline"
                            },
                            style: "options-trading-container",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "RevShare"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "padding: 0;"
                            },
                            style: "ph-card-title",
                            text: [$text(getTranslation("4plaLNKz2Ua1ALgzrQoy+w#Value", "RevShare plan"))],
                            _idProps: {
                                service: idService,
                                uuid: "19"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "20"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            extendedProperties: {
                                style: "display: flex; flex-direction: column;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: idService,
                                uuid: "21"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            style: "description",
                            text: [$text(getTranslation("gt+H5N_aHkSBMLkdMCYkSA#Value", "Earn up to 40% commissions from client trades. "))],
                            _idProps: {
                                service: idService,
                                uuid: "22"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.onClickToRevShare$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "23"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "color: #222; cursor: pointer; font-weight: bold; text-decoration: underline;"
                            },
                            style: "learn-more",
                            text: [$text(getTranslation("COWaVbW+50GxFaXvTDnLMA#Value", "Learn more"))],
                            _idProps: {
                                service: idService,
                                uuid: "24"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            gridProperties: {
                                classes: "OSInline"
                            },
                            style: "options-trading-container",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "Turnover"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-weight: 700;"
                            },
                            style: "ph-card-title",
                            text: [$text(getTranslation("KF6rxhiQHUCPZlhucSkXHA#Value", "Turnover plan"))],
                            _idProps: {
                                service: idService,
                                uuid: "26"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "27"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: idService,
                                uuid: "28"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            style: "description",
                            text: [$text(getTranslation("BJnUP6H85k6qK5QbrgKnDw#Value", "Earn based on each contract\'s payout probability. "))],
                            _idProps: {
                                service: idService,
                                uuid: "29"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.onClickToTurnoverPlan$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "30"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "color: #222; cursor: pointer; font-weight: bold; text-decoration: underline;"
                            },
                            style: "learn-more",
                            text: [$text(getTranslation("6Mkcfp682kiVuIVLeuwJpQ#Value", "Learn more"))],
                            _idProps: {
                                service: idService,
                                uuid: "31"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))))))];
                    }),
                    onTablet: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "display: flex; gap: 8px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "32"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            gridProperties: {
                                classes: "OSInline"
                            },
                            style: "options-trading-container",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "RevShare3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "padding: 0px;"
                            },
                            style: "ph-card-title",
                            text: [$text(getTranslation("9MGEQFYinUuqv5ONJSug6Q#Value", "RevShare plan"))],
                            _idProps: {
                                service: idService,
                                uuid: "34"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "35"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            extendedProperties: {
                                style: "display: flex; flex-direction: column;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: idService,
                                uuid: "36"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            style: "description",
                            text: [$text(getTranslation("kmLWI2Fj3UyyvaId+Ka4qw#Value", "Earn up to 40% commissions from client trades. "))],
                            _idProps: {
                                service: idService,
                                uuid: "37"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.onClickToRevShare$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "38"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "width: 400px;"
                            },
                            style: "learn-more",
                            text: [$text(getTranslation("H_8s8y5W7k6nFr07OnjdOA#Value", "Learn more"))],
                            _idProps: {
                                service: idService,
                                uuid: "39"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            gridProperties: {
                                classes: "OSInline"
                            },
                            style: "options-trading-container",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "Turnover3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "padding: 0px;"
                            },
                            style: "ph-card-title",
                            text: [$text(getTranslation("G25Euvj6_Uiu0ay3U5QIGw#Value", "Turnover plan"))],
                            _idProps: {
                                service: idService,
                                uuid: "41"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "42"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: idService,
                                uuid: "43"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            style: "description",
                            text: [$text(getTranslation("7BbYgbOM4UC5hZ4RnciyGQ#Value", "Earn based on each contract\'s payout probability. "))],
                            _idProps: {
                                service: idService,
                                uuid: "44"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.onClickToTurnoverPlan$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "45"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            style: "learn-more",
                            text: [$text(getTranslation("O8vDF2sCDEeEVUOi5iDjBg#Value", "Learn more"))],
                            _idProps: {
                                service: idService,
                                uuid: "46"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))))))];
                    }),
                    onPhone: new PlaceholderContent(function() {
                        return [React.createElement(OutSystemsUI_Interaction_Carousel_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                Navigation: PartnersHubModel.staticEntities.carouselNavigation.dots,
                                OptionalConfigs: model.getCachedValue(idService.getId("FIJ+qVw8rE+BqY_qAAmVGA.OptionalConfigs"), function() {
                                    return function() {
                                        var rec = new OutSystemsUIModel.ST_7d99fd1de65649f174aff6854b052539Structure();
                                        rec.autoPlayAttr = false;
                                        rec.loopAttr = false;
                                        rec.itemsGapAttr = "8px";
                                        return rec;
                                    }();
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
                                uuid: "47",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                carouselItems: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        gridProperties: {
                                            classes: "OSInline"
                                        },
                                        style: "options-trading-container",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "RevShare2"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "padding: 0px;"
                                        },
                                        style: "ph-card-title",
                                        text: [$text(getTranslation("OT+Q+aNlZ0ubjTn64bCXPA#Value", "RevShare plan"))],
                                        _idProps: {
                                            service: idService,
                                            uuid: "49"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "50"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.AdvancedHtml, {
                                        tag: "span",
                                        _idProps: {
                                            service: idService,
                                            uuid: "51"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        style: "description",
                                        text: [$text(getTranslation("oWQ91TdGnUW2up+5zWhM5A#Value", "Earn up to 40% commissions from client trades. "))],
                                        _idProps: {
                                            service: idService,
                                            uuid: "52"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.AdvancedHtml, {
                                        extendedEvents: {
                                            onClick: function() {
                                                var eventHandlerContext = callContext.clone();
                                                controller.onClickToRevShare$Action(controller.callContext(eventHandlerContext));

                                                ;
                                            }
                                        },
                                        tag: "span",
                                        _idProps: {
                                            service: idService,
                                            uuid: "53"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        style: "learn-more",
                                        text: [$text(getTranslation("XpuhnUJZhkCOJWwxhQRimA#Value", "Learn more"))],
                                        _idProps: {
                                            service: idService,
                                            uuid: "54"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))))), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        gridProperties: {
                                            classes: "OSInline"
                                        },
                                        style: "options-trading-container",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "Turnover2"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "padding: 0px;"
                                        },
                                        style: "ph-card-title",
                                        text: [$text(getTranslation("r5_UelL9JEKc+uItVIcsvw#Value", "Turnover plan"))],
                                        _idProps: {
                                            service: idService,
                                            uuid: "56"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "57"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.AdvancedHtml, {
                                        tag: "span",
                                        _idProps: {
                                            service: idService,
                                            uuid: "58"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        style: "description",
                                        text: [$text(getTranslation("NxZlgZbZfkeVBUD_LTGhyQ#Value", "Earn based on each contract\'s payout probability. "))],
                                        _idProps: {
                                            service: idService,
                                            uuid: "59"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.AdvancedHtml, {
                                        extendedEvents: {
                                            onClick: function() {
                                                var eventHandlerContext = callContext.clone();
                                                controller.onClickToTurnoverPlan$Action(controller.callContext(eventHandlerContext));

                                                ;
                                            }
                                        },
                                        tag: "span",
                                        _idProps: {
                                            service: idService,
                                            uuid: "60"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        style: "learn-more",
                                        text: [$text(getTranslation("+5Z65b9NU0+2VfiXdsB0Ug#Value", "Learn more"))],
                                        _idProps: {
                                            service: idService,
                                            uuid: "61"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })))))];
                                })
                            },
                            _dependencies: []
                        })];
                    })
                },
                _dependencies: []
            }))))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: true,
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                visible: (PartnersHubClientVariables.getisCommisionsPlansEnabledFF() === false),
                _idProps: {
                    service: idService,
                    uuid: "62"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(PartnersHub_Home_CommissionBanner_mvc_view, {
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
                    uuid: "63",
                    alias: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            })));
        }
    }

    return View;
});
define("PartnersHub.Home.CommissionPlans.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Home.CommissionPlans.mvc$translationsResources", "OutSystemsUI.model$ST_660adb7a9db48bff1b12c6e03515b415Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.model$ST_7d99fd1de65649f174aff6854b052539Structure", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "PartnersHub.controller$RedirectToExternalNewTab"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Home_CommissionPlans_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Home_CommissionPlans_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {};
                this.dataFetchDependentsGraph = {};
                this.shouldSendClientVarsToDataSources = false;
            }

            // Server Actions - Methods
            get getBDEnableCFDScreens$ServerAction() {
                if (!(this.hasOwnProperty("_getBDEnableCFDScreens$ServerAction"))) {
                    this._getBDEnableCFDScreens$ServerAction = function(callContext) {
                        var controller = this.controller;
                        return OS.Logger.startActiveSpan("GetBDEnableCFDScreens", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetBDEnableCFDScreens");
                                span.setAttribute("outsystems.function.key", "7eca81a1-5ec3-449c-b6ab-0bca5f9ecfbf");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
                            }

                            return OS.Flow.tryFinally(function() {
                                return controller.callServerAction("GetBDEnableCFDScreens", "screenservices/PartnersHub/Home/CommissionPlans/ActionGetBDEnableCFDScreens", "LjNg3yE0AdZRJluRGkzpGw", {}, controller.callContext(callContext), undefined, undefined, true).then(function(outputs) {
                                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("PartnersHub.Home.CommissionPlans$ActionGetBDEnableCFDScreens"))();
                                    executeServerActionResult.enableCFDScreensOut = OS.DataConversion.ServerDataConverter.from(outputs.EnableCFDScreens, OS.DataTypes.DataTypes.Boolean);
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

                return this._getBDEnableCFDScreens$ServerAction;
            }
            set getBDEnableCFDScreens$ServerAction(value) {
                this._getBDEnableCFDScreens$ServerAction = value;
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
            get _onClickToTurnoverPlan$Action() {
                if (!(this.hasOwnProperty("__onClickToTurnoverPlan$Action"))) {
                    this.__onClickToTurnoverPlan$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickToTurnoverPlan", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickToTurnoverPlan");
                                span.setAttribute("outsystems.function.key", "57fb401e-36c4-4e08-a29c-be8dbd1c9419");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickToTurnoverPlan");
                                callContext = controller.callContext(callContext);
                                // Execute Action: RudderstackTrackEvent
                                PartnersHubController.default.rudderstackTrackEvent$Action(function() {
                                    var rec = new PartnersHubModel.ST_23ff1d290ec4691b1c668ad437100cd0Structure();
                                    rec.actionAttr = "click_cta";
                                    rec.cta_nameAttr = "Learn more";
                                    rec.cta_placementAttr = "commission plans turnover section";
                                    rec.timestampAttr = OS.BuiltinFunctions.dateTimeToText(OS.BuiltinFunctions.currDateTime());
                                    rec.show_user_idAttr = false;
                                    return rec;
                                }(), "ce_partnershub_form", callContext);
                                // Destination: /PartnersHub/Turnover
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "Turnover", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.None), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickToTurnoverPlan$Action;
            }
            set _onClickToTurnoverPlan$Action(value) {
                this.__onClickToTurnoverPlan$Action = value;
            }

            get _onClickToCFDs$Action() {
                if (!(this.hasOwnProperty("__onClickToCFDs$Action"))) {
                    this.__onClickToCFDs$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickToCFDs", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickToCFDs");
                                span.setAttribute("outsystems.function.key", "59f039cc-eec2-4cf6-a669-07d1e80b0dd9");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnClickToCFDs");
                                callContext = controller.callContext(callContext);
                                var getBDEnableCFDScreensVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: RudderstackTrackEvent
                                    PartnersHubController.default.rudderstackTrackEvent$Action(function() {
                                        var rec = new PartnersHubModel.ST_23ff1d290ec4691b1c668ad437100cd0Structure();
                                        rec.actionAttr = "click_cta";
                                        rec.cta_nameAttr = "Learn more";
                                        rec.cta_placementAttr = "commission plans cfds section";
                                        rec.timestampAttr = OS.BuiltinFunctions.dateTimeToText(OS.BuiltinFunctions.currDateTime());
                                        rec.show_user_idAttr = false;
                                        return rec;
                                    }(), "ce_partnershub_form", callContext);
                                    // Execute Action: GetBDEnableCFDScreens
                                    model.flush();
                                    return controller.getBDEnableCFDScreens$ServerAction(callContext).then(function(value) {
                                        getBDEnableCFDScreensVar.value = value;
                                    }).then(function() {
                                        if ((getBDEnableCFDScreensVar.value.enableCFDScreensOut)) {
                                            // Destination: /PartnersHub/CFDs
                                            return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "CFDs", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.None), callContext, true));
                                        } else {
                                            // Execute Action: RedirectToExternalNewTab
                                            PartnersHubController.default.redirectToExternalNewTab$Action("https://docs.deriv.com/partners/ib-cfds-commissions-table.pdf", callContext);
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

                return this.__onClickToCFDs$Action;
            }
            set _onClickToCFDs$Action(value) {
                this.__onClickToCFDs$Action = value;
            }

            get _onClickToRevShare$Action() {
                if (!(this.hasOwnProperty("__onClickToRevShare$Action"))) {
                    this.__onClickToRevShare$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickToRevShare", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickToRevShare");
                                span.setAttribute("outsystems.function.key", "694bcb0b-945e-486a-bcf0-267063a408cd");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickToRevShare");
                                callContext = controller.callContext(callContext);
                                // Execute Action: RudderstackTrackEvent
                                PartnersHubController.default.rudderstackTrackEvent$Action(function() {
                                    var rec = new PartnersHubModel.ST_23ff1d290ec4691b1c668ad437100cd0Structure();
                                    rec.actionAttr = "click_cta";
                                    rec.cta_nameAttr = "Learn more";
                                    rec.cta_placementAttr = "commission plans revshare section";
                                    rec.timestampAttr = OS.BuiltinFunctions.dateTimeToText(OS.BuiltinFunctions.currDateTime());
                                    rec.show_user_idAttr = false;
                                    return rec;
                                }(), "ce_partnershub_form", callContext);
                                // Destination: /PartnersHub/RevShare
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "RevShare", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.None), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickToRevShare$Action;
            }
            set _onClickToRevShare$Action(value) {
                this.__onClickToRevShare$Action = value;
            }


            onClickToTurnoverPlan$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickToTurnoverPlan__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickToTurnoverPlan");
                        span.setAttribute("outsystems.function.key", "57fb401e-36c4-4e08-a29c-be8dbd1c9419");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickToTurnoverPlan$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onClickToCFDs$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickToCFDs__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickToCFDs");
                        span.setAttribute("outsystems.function.key", "59f039cc-eec2-4cf6-a669-07d1e80b0dd9");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onClickToCFDs$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            onClickToRevShare$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickToRevShare__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickToRevShare");
                        span.setAttribute("outsystems.function.key", "694bcb0b-945e-486a-bcf0-267063a408cd");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickToRevShare$Action, callContext);
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
        Controller.registerVariableGroupType("PartnersHub.Home.CommissionPlans$ActionGetBDEnableCFDScreens", [{
            name: "EnableCFDScreens",
            attrName: "enableCFDScreensOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);

        // Client Actions - Variables

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});


define("PartnersHub.Home.CommissionPlans.mvc$translationsResources.ar-001", [], function() {
    return {
        "+5Z65b9NU0+2VfiXdsB0Ug#Value": "تعرف على المزيد",
        "NxZlgZbZfkeVBUD_LTGhyQ#Value": "اربح بناءً على احتمالية دفع كل عقد.",
        "r5_UelL9JEKc+uItVIcsvw#Value": "خطة دوران",
        "XpuhnUJZhkCOJWwxhQRimA#Value": "تعرف أكثر",
        "oWQ91TdGnUW2up+5zWhM5A#Value": "اربح ما يصل إلى 40% من عمولات تداول العملاء.",
        "OT+Q+aNlZ0ubjTn64bCXPA#Value": "خطة RevShare",
        "O8vDF2sCDEeEVUOi5iDjBg#Value": "تعرف على المزيد",
        "7BbYgbOM4UC5hZ4RnciyGQ#Value": "اربح بناءً على احتمالية دفع كل عقد.",
        "G25Euvj6_Uiu0ay3U5QIGw#Value": "خطة دوران",
        "H_8s8y5W7k6nFr07OnjdOA#Value": "تعرف على المزيد",
        "kmLWI2Fj3UyyvaId+Ka4qw#Value": "اربح ما يصل إلى 40% عمولات من تداولات العملاء.",
        "9MGEQFYinUuqv5ONJSug6Q#Value": "خطة RevShare",
        "6Mkcfp682kiVuIVLeuwJpQ#Value": "تعلّم المزيد",
        "BJnUP6H85k6qK5QbrgKnDw#Value": "كسب بناءً على احتمالية دفع كل عقد.",
        "KF6rxhiQHUCPZlhucSkXHA#Value": "خطة العائدات",
        "COWaVbW+50GxFaXvTDnLMA#Value": "تعرف على المزيد",
        "gt+H5N_aHkSBMLkdMCYkSA#Value": "احصل على عمولات تصل إلى 40% من تداولات العملاء.",
        "4plaLNKz2Ua1ALgzrQoy+w#Value": "خطة RevShare",
        "KiD9uiu9wka+5H5+rFqK_w#Value": "تداول الخيارات",
        "V1v8Zxvrd0S2qgA4Mc58lg#Value": "تعرف على المزيد",
        "NpVN_qK5Ukq96BzyPFgppw#Value": "اربح مع خطة العمولة المستندة إلى الأدوات لدينا.",
        "sHFYNLZu_0WxTchJzBk4Kw#Value": "تداول العقود مقابل الفروقات",
        "7KaXe6C0nEqxpykIt84DYA#Value": "يمكنك كسب عمولات من"
    };
});

define("PartnersHub.Home.CommissionPlans.mvc$translationsResources.de-DE", [], function() {
    return {
        "+5Z65b9NU0+2VfiXdsB0Ug#Value": "Mehr erfahren",
        "NxZlgZbZfkeVBUD_LTGhyQ#Value": "Verdienen Sie basierend auf der Auszahlungswahrscheinlichkeit jedes Vertrags.",
        "r5_UelL9JEKc+uItVIcsvw#Value": "Umsatzplan",
        "XpuhnUJZhkCOJWwxhQRimA#Value": "Mehr erfahren",
        "oWQ91TdGnUW2up+5zWhM5A#Value": "Verdienen Sie bis zu 40 % Provisionen aus den Handelsgeschäften Ihrer Kunden.",
        "OT+Q+aNlZ0ubjTn64bCXPA#Value": "RevShare-Plan",
        "O8vDF2sCDEeEVUOi5iDjBg#Value": "Mehr erfahren",
        "7BbYgbOM4UC5hZ4RnciyGQ#Value": "Verdienen Sie basierend auf der Auszahlungswahrscheinlichkeit jedes Vertrags.",
        "G25Euvj6_Uiu0ay3U5QIGw#Value": "Umsatzplan",
        "H_8s8y5W7k6nFr07OnjdOA#Value": "Erfahren Sie mehr",
        "kmLWI2Fj3UyyvaId+Ka4qw#Value": "Verdienen Sie bis zu 40 % Provisionen aus den Trades von Kunden.",
        "9MGEQFYinUuqv5ONJSug6Q#Value": "RevShare-Plan",
        "6Mkcfp682kiVuIVLeuwJpQ#Value": "Mehr erfahren",
        "BJnUP6H85k6qK5QbrgKnDw#Value": "Verdienen Sie basierend auf der Auszahlungwahrscheinlichkeit jedes Vertrags.",
        "KF6rxhiQHUCPZlhucSkXHA#Value": "Umsatzplan",
        "COWaVbW+50GxFaXvTDnLMA#Value": "Mehr erfahren",
        "gt+H5N_aHkSBMLkdMCYkSA#Value": "Verdienen Sie bis zu 40 % Provisionen aus den Trades Ihrer Kunden.",
        "4plaLNKz2Ua1ALgzrQoy+w#Value": "RevShare-Plan",
        "KiD9uiu9wka+5H5+rFqK_w#Value": "Optionenhandel",
        "V1v8Zxvrd0S2qgA4Mc58lg#Value": "Mehr erfahren",
        "NpVN_qK5Ukq96BzyPFgppw#Value": "Verdienen Sie mit unserem instrumentenbasierten Provisionsplan.",
        "sHFYNLZu_0WxTchJzBk4Kw#Value": "CFDs",
        "7KaXe6C0nEqxpykIt84DYA#Value": "Sie können Provisionen von verdienen"
    };
});

define("PartnersHub.Home.CommissionPlans.mvc$translationsResources.es-ES", [], function() {
    return {
        "+5Z65b9NU0+2VfiXdsB0Ug#Value": "Aprende más",
        "NxZlgZbZfkeVBUD_LTGhyQ#Value": "Gana según la probabilidad de pago de cada contrato.",
        "r5_UelL9JEKc+uItVIcsvw#Value": "Plan de volumen",
        "XpuhnUJZhkCOJWwxhQRimA#Value": "Aprende más",
        "oWQ91TdGnUW2up+5zWhM5A#Value": "Gane hasta un 40% de comisiones por las operaciones de los clientes.",
        "OT+Q+aNlZ0ubjTn64bCXPA#Value": "Plan de RevShare",
        "O8vDF2sCDEeEVUOi5iDjBg#Value": "Aprender más",
        "7BbYgbOM4UC5hZ4RnciyGQ#Value": "Gana según la probabilidad de pago de cada contrato.",
        "G25Euvj6_Uiu0ay3U5QIGw#Value": "Plan de facturación",
        "H_8s8y5W7k6nFr07OnjdOA#Value": "Aprende más",
        "kmLWI2Fj3UyyvaId+Ka4qw#Value": "Gana hasta un 40 % de comisiones por las operaciones de los clientes.",
        "9MGEQFYinUuqv5ONJSug6Q#Value": "Plan de RevShare",
        "6Mkcfp682kiVuIVLeuwJpQ#Value": "Aprende más",
        "BJnUP6H85k6qK5QbrgKnDw#Value": "Gana según la probabilidad de pago de cada contrato.",
        "KF6rxhiQHUCPZlhucSkXHA#Value": "Plan de facturación",
        "COWaVbW+50GxFaXvTDnLMA#Value": "Aprende más",
        "gt+H5N_aHkSBMLkdMCYkSA#Value": "Gana hasta un 40% de comisiones por las operaciones de los clientes.",
        "4plaLNKz2Ua1ALgzrQoy+w#Value": "Plan de RevShare",
        "KiD9uiu9wka+5H5+rFqK_w#Value": "comercio de opciones",
        "V1v8Zxvrd0S2qgA4Mc58lg#Value": "Aprende más",
        "NpVN_qK5Ukq96BzyPFgppw#Value": "Gana con nuestro plan de comisiones basado en instrumentos.",
        "sHFYNLZu_0WxTchJzBk4Kw#Value": "CFDs",
        "7KaXe6C0nEqxpykIt84DYA#Value": "Puedes ganar comisiones de"
    };
});

define("PartnersHub.Home.CommissionPlans.mvc$translationsResources.fr-FR", [], function() {
    return {
        "+5Z65b9NU0+2VfiXdsB0Ug#Value": "En savoir plus",
        "NxZlgZbZfkeVBUD_LTGhyQ#Value": "Gagnez en fonction de la probabilité de paiement de chaque contrat.",
        "r5_UelL9JEKc+uItVIcsvw#Value": "Plan de chiffre d\'affaires",
        "XpuhnUJZhkCOJWwxhQRimA#Value": "En savoir plus",
        "oWQ91TdGnUW2up+5zWhM5A#Value": "Gagnez jusqu\'à 40 % de commissions sur les transactions des clients.",
        "OT+Q+aNlZ0ubjTn64bCXPA#Value": "Plan RevShare",
        "O8vDF2sCDEeEVUOi5iDjBg#Value": "En savoir plus",
        "7BbYgbOM4UC5hZ4RnciyGQ#Value": "Gagnez en fonction de la probabilité de paiement de chaque contrat.",
        "G25Euvj6_Uiu0ay3U5QIGw#Value": "Plan de chiffre d\'affaires",
        "H_8s8y5W7k6nFr07OnjdOA#Value": "En savoir plus",
        "kmLWI2Fj3UyyvaId+Ka4qw#Value": "Gagnez jusqu\'à 40 % de commissions sur les transactions des clients.",
        "9MGEQFYinUuqv5ONJSug6Q#Value": "Plan RevShare",
        "6Mkcfp682kiVuIVLeuwJpQ#Value": "En savoir plus",
        "BJnUP6H85k6qK5QbrgKnDw#Value": "Gagnez en fonction de la probabilité de paiement de chaque contrat.",
        "KF6rxhiQHUCPZlhucSkXHA#Value": "Plan de chiffre d\'affaires",
        "COWaVbW+50GxFaXvTDnLMA#Value": "En savoir plus",
        "gt+H5N_aHkSBMLkdMCYkSA#Value": "Gagnez jusqu\'à 40 % de commissions sur les transactions des clients.",
        "4plaLNKz2Ua1ALgzrQoy+w#Value": "Plan RevShare",
        "KiD9uiu9wka+5H5+rFqK_w#Value": "trading d\'options",
        "V1v8Zxvrd0S2qgA4Mc58lg#Value": "En savoir plus",
        "NpVN_qK5Ukq96BzyPFgppw#Value": "Gagnez avec notre plan de commission basé sur les instruments.",
        "sHFYNLZu_0WxTchJzBk4Kw#Value": "CFDs",
        "7KaXe6C0nEqxpykIt84DYA#Value": "Vous pouvez gagner des commissions de"
    };
});

define("PartnersHub.Home.CommissionPlans.mvc$translationsResources.it-IT", [], function() {
    return {
        "+5Z65b9NU0+2VfiXdsB0Ug#Value": "Scopri di più",
        "NxZlgZbZfkeVBUD_LTGhyQ#Value": "Guadagna in base alla probabilità di pagamento di ciascun contratto.",
        "r5_UelL9JEKc+uItVIcsvw#Value": "Piano di fatturato",
        "XpuhnUJZhkCOJWwxhQRimA#Value": "Scopri di più",
        "oWQ91TdGnUW2up+5zWhM5A#Value": "Guadagna fino al 40% di commissioni dalle operazioni dei clienti.",
        "OT+Q+aNlZ0ubjTn64bCXPA#Value": "Piano RevShare",
        "O8vDF2sCDEeEVUOi5iDjBg#Value": "Scopri di più",
        "7BbYgbOM4UC5hZ4RnciyGQ#Value": "Guadagna in base alla probabilità di pagamento di ciascun contratto.",
        "G25Euvj6_Uiu0ay3U5QIGw#Value": "Piano di fatturato",
        "H_8s8y5W7k6nFr07OnjdOA#Value": "Scopri di più",
        "kmLWI2Fj3UyyvaId+Ka4qw#Value": "Guadagna fino al 40% di commissioni dai trade dei clienti.",
        "9MGEQFYinUuqv5ONJSug6Q#Value": "Piano RevShare",
        "6Mkcfp682kiVuIVLeuwJpQ#Value": "Scopri di più",
        "BJnUP6H85k6qK5QbrgKnDw#Value": "Guadagna in base alla probabilità di pagamento di ciascun contratto.",
        "KF6rxhiQHUCPZlhucSkXHA#Value": "Piano di fatturato",
        "COWaVbW+50GxFaXvTDnLMA#Value": "Scopri di più",
        "gt+H5N_aHkSBMLkdMCYkSA#Value": "Guadagna fino al 40% di commissioni dai trade dei tuoi clienti.",
        "4plaLNKz2Ua1ALgzrQoy+w#Value": "Piano RevShare",
        "KiD9uiu9wka+5H5+rFqK_w#Value": "trading di opzioni",
        "V1v8Zxvrd0S2qgA4Mc58lg#Value": "Scopri di più",
        "NpVN_qK5Ukq96BzyPFgppw#Value": "Guadagna con il nostro piano commissionale basato sugli strumenti.",
        "sHFYNLZu_0WxTchJzBk4Kw#Value": "CFDs",
        "7KaXe6C0nEqxpykIt84DYA#Value": "Puoi guadagnare commissioni da"
    };
});

define("PartnersHub.Home.CommissionPlans.mvc$translationsResources.pl-PL", [], function() {
    return {
        "+5Z65b9NU0+2VfiXdsB0Ug#Value": "Dowiedz się więcej",
        "NxZlgZbZfkeVBUD_LTGhyQ#Value": "Zarabiaj w oparciu o prawdopodobieństwo wypłaty każdego kontraktu.",
        "r5_UelL9JEKc+uItVIcsvw#Value": "Plan obrotu",
        "XpuhnUJZhkCOJWwxhQRimA#Value": "Dowiedz się więcej",
        "oWQ91TdGnUW2up+5zWhM5A#Value": "Zarabiaj do 40% prowizji od transakcji klientów.",
        "OT+Q+aNlZ0ubjTn64bCXPA#Value": "Plan RevShare",
        "O8vDF2sCDEeEVUOi5iDjBg#Value": "Dowiedz się więcej",
        "7BbYgbOM4UC5hZ4RnciyGQ#Value": "Zarabiaj na podstawie prawdopodobieństwa wypłaty każdego kontraktu.",
        "G25Euvj6_Uiu0ay3U5QIGw#Value": "Plan obrotu",
        "H_8s8y5W7k6nFr07OnjdOA#Value": "Dowiedz się więcej",
        "kmLWI2Fj3UyyvaId+Ka4qw#Value": "Zarabiaj do 40% prowizji od transakcji klientów.",
        "9MGEQFYinUuqv5ONJSug6Q#Value": "Plan RevShare",
        "6Mkcfp682kiVuIVLeuwJpQ#Value": "Dowiedz się więcej",
        "BJnUP6H85k6qK5QbrgKnDw#Value": "Zarabiaj w oparciu o prawdopodobieństwo wypłaty każdego kontraktu.",
        "KF6rxhiQHUCPZlhucSkXHA#Value": "Plan obrotu",
        "COWaVbW+50GxFaXvTDnLMA#Value": "Dowiedz się więcej",
        "gt+H5N_aHkSBMLkdMCYkSA#Value": "Zarabiaj do 40% prowizji od transakcji klientów.",
        "4plaLNKz2Ua1ALgzrQoy+w#Value": "Plan RevShare",
        "KiD9uiu9wka+5H5+rFqK_w#Value": "handel opcjami",
        "V1v8Zxvrd0S2qgA4Mc58lg#Value": "Dowiedz się więcej",
        "NpVN_qK5Ukq96BzyPFgppw#Value": "Zarabiaj z naszym planem prowizyjnym opartym na instrumentach.",
        "sHFYNLZu_0WxTchJzBk4Kw#Value": "CFDs",
        "7KaXe6C0nEqxpykIt84DYA#Value": "Możesz zarabiać prowizje z"
    };
});

define("PartnersHub.Home.CommissionPlans.mvc$translationsResources.pt-PT", [], function() {
    return {
        "+5Z65b9NU0+2VfiXdsB0Ug#Value": "Saiba mais",
        "NxZlgZbZfkeVBUD_LTGhyQ#Value": "Ganhe com base na probabilidade de pagamento de cada contrato.",
        "r5_UelL9JEKc+uItVIcsvw#Value": "Plano de faturamento",
        "XpuhnUJZhkCOJWwxhQRimA#Value": "Saiba mais",
        "oWQ91TdGnUW2up+5zWhM5A#Value": "Ganhe até 40% de comissões nas operações dos clientes.",
        "OT+Q+aNlZ0ubjTn64bCXPA#Value": "Plano RevShare",
        "O8vDF2sCDEeEVUOi5iDjBg#Value": "Saber mais",
        "7BbYgbOM4UC5hZ4RnciyGQ#Value": "Ganhe com base na probabilidade de pagamento de cada contrato.",
        "G25Euvj6_Uiu0ay3U5QIGw#Value": "Plano de faturamento",
        "H_8s8y5W7k6nFr07OnjdOA#Value": "Saiba mais",
        "kmLWI2Fj3UyyvaId+Ka4qw#Value": "Ganhe até 40% de comissões com as operações dos clientes.",
        "9MGEQFYinUuqv5ONJSug6Q#Value": "Plano RevShare",
        "6Mkcfp682kiVuIVLeuwJpQ#Value": "Saiba mais",
        "BJnUP6H85k6qK5QbrgKnDw#Value": "Ganhe com base na probabilidade de pagamento de cada contrato.",
        "KF6rxhiQHUCPZlhucSkXHA#Value": "Plano de faturamento",
        "COWaVbW+50GxFaXvTDnLMA#Value": "Saiba mais",
        "gt+H5N_aHkSBMLkdMCYkSA#Value": "Ganhe até 40% de comissões com as operações dos clientes.",
        "4plaLNKz2Ua1ALgzrQoy+w#Value": "Plano RevShare",
        "KiD9uiu9wka+5H5+rFqK_w#Value": "negociação de opções",
        "V1v8Zxvrd0S2qgA4Mc58lg#Value": "Saiba mais",
        "NpVN_qK5Ukq96BzyPFgppw#Value": "Ganhe com o nosso plano de comissões baseado em instrumentos.",
        "sHFYNLZu_0WxTchJzBk4Kw#Value": "CFDs",
        "7KaXe6C0nEqxpykIt84DYA#Value": "Você pode ganhar comissões de"
    };
});

define("PartnersHub.Home.CommissionPlans.mvc$translationsResources.ru-RU", [], function() {
    return {
        "+5Z65b9NU0+2VfiXdsB0Ug#Value": "Узнать больше",
        "NxZlgZbZfkeVBUD_LTGhyQ#Value": "Зарабатывайте в зависимости от вероятности выплаты по каждому контракту.",
        "r5_UelL9JEKc+uItVIcsvw#Value": "План оборота",
        "XpuhnUJZhkCOJWwxhQRimA#Value": "Узнать больше",
        "oWQ91TdGnUW2up+5zWhM5A#Value": "Зарабатывайте до 40% комиссий от сделок клиентов.",
        "OT+Q+aNlZ0ubjTn64bCXPA#Value": "План RevShare",
        "O8vDF2sCDEeEVUOi5iDjBg#Value": "Узнать больше",
        "7BbYgbOM4UC5hZ4RnciyGQ#Value": "Зарабатывайте в зависимости от вероятности выплаты по каждому контракту.",
        "G25Euvj6_Uiu0ay3U5QIGw#Value": "План оборота",
        "H_8s8y5W7k6nFr07OnjdOA#Value": "Узнать больше",
        "kmLWI2Fj3UyyvaId+Ka4qw#Value": "Зарабатывайте до 40% комиссий с торгов клиентов.",
        "9MGEQFYinUuqv5ONJSug6Q#Value": "План RevShare",
        "6Mkcfp682kiVuIVLeuwJpQ#Value": "Узнать больше",
        "BJnUP6H85k6qK5QbrgKnDw#Value": "Зарабатывайте на основе вероятности выплаты по каждому контракту.",
        "KF6rxhiQHUCPZlhucSkXHA#Value": "План оборота",
        "COWaVbW+50GxFaXvTDnLMA#Value": "Узнать больше",
        "gt+H5N_aHkSBMLkdMCYkSA#Value": "Зарабатывайте до 40% комиссий с торгов клиентов.",
        "4plaLNKz2Ua1ALgzrQoy+w#Value": "План RevShare",
        "KiD9uiu9wka+5H5+rFqK_w#Value": "торговля опционами",
        "V1v8Zxvrd0S2qgA4Mc58lg#Value": "Узнать больше",
        "NpVN_qK5Ukq96BzyPFgppw#Value": "Зарабатывайте с нашим комиссионным планом, основанным на инструментах.",
        "sHFYNLZu_0WxTchJzBk4Kw#Value": "CFDs",
        "7KaXe6C0nEqxpykIt84DYA#Value": "Вы можете зарабатывать комиссионные от"
    };
});

define("PartnersHub.Home.CommissionPlans.mvc$translationsResources", ["exports", "PartnersHub.Home.CommissionPlans.mvc$translationsResources.ar-001", "PartnersHub.Home.CommissionPlans.mvc$translationsResources.de-DE", "PartnersHub.Home.CommissionPlans.mvc$translationsResources.es-ES", "PartnersHub.Home.CommissionPlans.mvc$translationsResources.fr-FR", "PartnersHub.Home.CommissionPlans.mvc$translationsResources.it-IT", "PartnersHub.Home.CommissionPlans.mvc$translationsResources.pl-PL", "PartnersHub.Home.CommissionPlans.mvc$translationsResources.pt-PT", "PartnersHub.Home.CommissionPlans.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_Home_CommissionPlans_mvc_translationsResources_ar001, PartnersHub_Home_CommissionPlans_mvc_translationsResources_deDE, PartnersHub_Home_CommissionPlans_mvc_translationsResources_esES, PartnersHub_Home_CommissionPlans_mvc_translationsResources_frFR, PartnersHub_Home_CommissionPlans_mvc_translationsResources_itIT, PartnersHub_Home_CommissionPlans_mvc_translationsResources_plPL, PartnersHub_Home_CommissionPlans_mvc_translationsResources_ptPT, PartnersHub_Home_CommissionPlans_mvc_translationsResources_ruRU) {
    return {
        "ar-001": {
            "translations": PartnersHub_Home_CommissionPlans_mvc_translationsResources_ar001,
            "isRTL": true
        },
        "de-DE": {
            "translations": PartnersHub_Home_CommissionPlans_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_Home_CommissionPlans_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_Home_CommissionPlans_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_Home_CommissionPlans_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_Home_CommissionPlans_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_Home_CommissionPlans_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_Home_CommissionPlans_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});