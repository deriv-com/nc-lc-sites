define("tradershub.Layouts.SignupLayoutTopMenu.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.controller", "BrowserConsoleLogging.controller", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "OutSystemsUI.Adaptive.DisplayOnDevice.mvc$model", "OutSystemsUI.controller$IsPhone", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "BrowserConsoleLogging.controller$ConsoleLog", "tradershub.referencesHealth$BrowserConsoleLogging", "tradershub.controller$TextToBoolean", "tradershub.controller$RedirectToExternalURL", "OutSystemsUI.controller$LayoutDestroy", "tradershub.controller$SetEUTrackingCookies", "tradershub.controller$CheckEUTrackingCookies", "RESTAPIWebsocketOfficial.model$ST_c864353821feed79663806f3e445d40eStructure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.model$RC_798951e34838fcc1a6b9e0aaf476e075", "tradershub.model$RL_8c0999ad77575572f51b9e9cbec474aa"], function(OSRuntimeCore, tradershubModel, OutSystemsUIController, BrowserConsoleLoggingController, tradershubController, RESTAPIWebsocketOfficialModel, OutSystemsUI_Adaptive_DisplayOnDevice_mvcModel) {
    var OS = OSRuntimeCore; {
        class GetEUCountriesAggrRecInner extends
        OS.Model.AggregateRecord {
            static attributesToDeclare() {
                return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new GetEUCountriesAggrRec(new GetEUCountriesAggrRec.RecordClass({
                    RecordListType: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        GetEUCountriesAggrRecInner.RecordListType = tradershubModel.RL_8c0999ad77575572f51b9e9cbec474aa;
        var GetEUCountriesAggrRec = GetEUCountriesAggrRecInner;
        GetEUCountriesAggrRec.init();
    }


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IsTopDisclaimerExpanded", "isTopDisclaimerExpandedVar", "IsTopDisclaimerExpanded", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("ShowCookieConcent", "showCookieConcentVar", "ShowCookieConcent", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("RiskWarning", "riskWarningVar", "RiskWarning", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "The products offered on our website are complex derivative products that carry a significant risk of potential loss. CFDs are complex instruments with a high risk of losing money rapidly due to leverage. 70.84% of retail investor accounts lose money when trading CFDs with this provider. You should consider whether you understand how these products work and whether you can afford to take the high risk of losing your money.";
                    }, false),
                    this.attr("IsEU", "isEUVar", "IsEU", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("HasFixedHeader", "hasFixedHeaderIn", "HasFixedHeader", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, false),
                    this.attr("_hasFixedHeaderInDataFetchStatus", "_hasFixedHeaderInDataFetchStatus", "_hasFixedHeaderInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("EnableAccessibilityFeatures", "enableAccessibilityFeaturesIn", "EnableAccessibilityFeatures", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("NoContentMiddle", "noContentMiddleIn", "NoContentMiddle", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_noContentMiddleInDataFetchStatus", "_noContentMiddleInDataFetchStatus", "_noContentMiddleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("HasLink", "hasLinkIn", "HasLink", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_hasLinkInDataFetchStatus", "_hasLinkInDataFetchStatus", "_hasLinkInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("ClientCountry", "clientCountryIn", "ClientCountry", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_clientCountryInDataFetchStatus", "_clientCountryInDataFetchStatus", "_clientCountryInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("GetEUCountries", "getEUCountriesAggr", "GetEUCountries", true, true, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new GetEUCountriesAggrRec());
                    }, true, GetEUCountriesAggrRec)
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
                Model._hasValidationWidgetsValue = OutSystemsUI_Adaptive_DisplayOnDevice_mvcModel.hasValidationWidgets;
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {
            if ("HasFixedHeader" in inputs) {
                this.variables.hasFixedHeaderIn = inputs.HasFixedHeader;
                if ("_hasFixedHeaderInDataFetchStatus" in inputs) {
                    this.variables._hasFixedHeaderInDataFetchStatus = inputs._hasFixedHeaderInDataFetchStatus;
                }

            }

            if ("EnableAccessibilityFeatures" in inputs) {
                this.variables.enableAccessibilityFeaturesIn = inputs.EnableAccessibilityFeatures;
                if ("_enableAccessibilityFeaturesInDataFetchStatus" in inputs) {
                    this.variables._enableAccessibilityFeaturesInDataFetchStatus = inputs._enableAccessibilityFeaturesInDataFetchStatus;
                }

            }

            if ("ExtendedClass" in inputs) {
                this.variables.extendedClassIn = inputs.ExtendedClass;
                if ("_extendedClassInDataFetchStatus" in inputs) {
                    this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
                }

            }

            if ("NoContentMiddle" in inputs) {
                this.variables.noContentMiddleIn = inputs.NoContentMiddle;
                if ("_noContentMiddleInDataFetchStatus" in inputs) {
                    this.variables._noContentMiddleInDataFetchStatus = inputs._noContentMiddleInDataFetchStatus;
                }

            }

            if ("HasLink" in inputs) {
                this.variables.hasLinkIn = inputs.HasLink;
                if ("_hasLinkInDataFetchStatus" in inputs) {
                    this.variables._hasLinkInDataFetchStatus = inputs._hasLinkInDataFetchStatus;
                }

            }

            if ("ClientCountry" in inputs) {
                this.variables.clientCountryIn = inputs.ClientCountry;
                if ("_clientCountryInDataFetchStatus" in inputs) {
                    this.variables._clientCountryInDataFetchStatus = inputs._clientCountryInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.Layouts.SignupLayoutTopMenu.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "BrowserConsoleLogging.controller", "RESTAPIWebsocketOfficial.model", "react", "@outsystems/runtime-view-js", "tradershub.Layouts.SignupLayoutTopMenu.mvc$model", "tradershub.Layouts.SignupLayoutTopMenu.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Adaptive.DisplayOnDevice.mvc$view", "OutSystemsUI.controller$IsPhone", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "BrowserConsoleLogging.controller$ConsoleLog", "tradershub.referencesHealth$BrowserConsoleLogging", "tradershub.controller$TextToBoolean", "tradershub.controller$RedirectToExternalURL", "OutSystemsUI.controller$LayoutDestroy", "tradershub.controller$SetEUTrackingCookies", "tradershub.controller$CheckEUTrackingCookies", "RESTAPIWebsocketOfficial.model$ST_c864353821feed79663806f3e445d40eStructure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.model$RC_798951e34838fcc1a6b9e0aaf476e075", "tradershub.model$RL_8c0999ad77575572f51b9e9cbec474aa"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, BrowserConsoleLoggingController, RESTAPIWebsocketOfficialModel, React, OSView, tradershub_Layouts_SignupLayoutTopMenu_mvc_model, tradershub_Layouts_SignupLayoutTopMenu_mvc_controller, tradershubClientVariables, OSWidgets, OutSystemsUI_Adaptive_DisplayOnDevice_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Layouts.SignupLayoutTopMenu";
        }

        static getAttributes() {
            return {
                codeFunction: "SignupLayoutTopMenu",
                functionKey: "01086c7f-d882-4603-8f4c-fb6f48272f94",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.Layouts.SignupLayoutTopMenu.css"];
        }

        static getJsDependencies() {
            return ["scripts/tradershub.DerivUTM.js", "scripts/tradershub.JSCookie.js"];
        }

        static getBlocks() {
            return [OutSystemsUI_Adaptive_DisplayOnDevice_mvc_view];
        }

        get modelFactory() {
            return tradershub_Layouts_SignupLayoutTopMenu_mvc_model;
        }

        get controllerFactory() {
            return tradershub_Layouts_SignupLayoutTopMenu_mvc_controller;
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
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.toggleTopDisclaimerOnClick$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                extendedProperties: {
                    style: "color: rgba(0, 0, 0, 0.72); padding-bottom: 0;"
                },
                style: "background-neutral-2 full-width padding-base padding-bottom-none",
                visible: model.getCachedValue(idService.getId("cwffvAeq8EuomzWt9UYMOw.Visible"), function() {
                    return (OutSystemsUIController.default.isPhone$Action(callContext).isPhoneOut && model.variables.isEUVar);
                }, function() {
                    return model.variables.isEUVar;
                }),
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
            }, $if(model.variables.isTopDisclaimerExpandedVar, false, this, function() {
                return [React.createElement(OSWidgets.Expression, {
                    value: model.variables.riskWarningVar,
                    _idProps: {
                        service: idService,
                        uuid: "2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }, function() {
                return [React.createElement(OSWidgets.Expression, {
                    style: "",
                    value: model.getCachedValue(idService.getId("xK7pr_cPA0qMfJK4ofGUIA.Value"), function() {
                        return OS.BuiltinFunctions.substr(model.variables.riskWarningVar, 0, 116);
                    }, function() {
                        return model.variables.riskWarningVar;
                    }),
                    _idProps: {
                        service: idService,
                        uuid: "3"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "text-align: center;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $if(model.variables.isTopDisclaimerExpandedVar, false, this, function() {
                return [React.createElement(OSWidgets.Image, {
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.chevronupmd.svg"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "5"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }, function() {
                return [React.createElement(OSWidgets.Image, {
                    extendedProperties: {
                        style: "transform: rotateX(180deg);"
                    },
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.chevronupmd.svg"),
                    style: "",
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "6"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: model.getCachedValue(idService.getId("LayoutWrapper.Style"), function() {
                    return ((("layout layout-top" + ((model.variables.hasFixedHeaderIn) ? (" fixed-header") : (""))) + ((!(model.variables.enableAccessibilityFeaturesIn)) ? ("") : (" has-accessible-features"))) + (((model.variables.extendedClassIn === "")) ? ("") : ((" " + model.variables.extendedClassIn))));
                }, function() {
                    return model.variables.hasFixedHeaderIn;
                }, function() {
                    return model.variables.enableAccessibilityFeaturesIn;
                }, function() {
                    return model.variables.extendedClassIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    name: "LayoutWrapper"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hasFixedHeaderInDataFetchStatus, model.variables._enableAccessibilityFeaturesInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "background-color: #fff;"
                },
                style: "main",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "8"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.AdvancedHtml, {
                extendedProperties: {
                    role: "banner"
                },
                tag: "header",
                _idProps: {
                    service: idService,
                    name: "Header2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "margin-bottom: 16px; margin-top: 16px;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "10"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OutSystemsUI_Adaptive_DisplayOnDevice_mvc_view, {
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
                    uuid: "11",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    onDesktop: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            style: "desktop-signup-layout-container",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "12"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.onLogoClick$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.deriv25years.svg"),
                            style: model.getCachedValue(idService.getId("n81waxLPr0uB25twmSJo5w.Style"), function() {
                                return ((model.variables.hasLinkIn) ? ("cursor-pointer") : (""));
                            }, function() {
                                return model.variables.hasLinkIn;
                            }),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "13"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hasLinkInDataFetchStatus)
                        }))];
                    }),
                    onTablet: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "14"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.onLogoClick$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.deriv25yearsresponsive.svg"),
                            style: model.getCachedValue(idService.getId("UNBD65eZPUar2QzZj7SNmQ.Style"), function() {
                                return ((model.variables.hasLinkIn) ? ("cursor-pointer") : (""));
                            }, function() {
                                return model.variables.hasLinkIn;
                            }),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "15"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hasLinkInDataFetchStatus)
                        }))];
                    }),
                    onPhone: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "16"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.onLogoClick$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.deriv25yearsresponsive.svg"),
                            style: model.getCachedValue(idService.getId("CHJ8CvjrvEenNG7AaWbimA.Style"), function() {
                                return ((model.variables.hasLinkIn) ? ("cursor-pointer") : (""));
                            }, function() {
                                return model.variables.hasLinkIn;
                            }),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "17"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hasLinkInDataFetchStatus)
                        }))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables._hasLinkInDataFetchStatus), asPrimitiveValue(model.variables.hasLinkIn)]
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: (("content layout-main-content" + " ") + model.variables.extendedClassIn),
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Content"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassInDataFetchStatus)
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    role: "main",
                    style: "padding: 0px;"
                },
                style: "main-content ThemeGrid_Container",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "MainContentWrapper"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.mainContent,
                extendedProperties: {
                    style: "height: 100%;"
                },
                style: model.getCachedValue(idService.getId("MainContent.Style"), function() {
                    return (((model.variables.noContentMiddleIn) ? ("") : ("content-middle")) + " signup-layout-content-container");
                }, function() {
                    return model.variables.noContentMiddleIn;
                }),
                _idProps: {
                    service: idService,
                    name: "MainContent"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._noContentMiddleInDataFetchStatus)
            }), " ")))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: true,
                style: "background-neutral-2 padding-base cookie-concent-bottom-banner display-flex flex-direction-column gap-base a",
                visible: model.getCachedValue(idService.getId("TTOKgrjjw0K0YP5fyo6iKQ.Visible"), function() {
                    return ((OutSystemsUIController.default.isPhone$Action(callContext).isPhoneOut && model.variables.isEUVar) && model.variables.showCookieConcentVar);
                }, function() {
                    return model.variables.isEUVar;
                }, function() {
                    return model.variables.showCookieConcentVar;
                }),
                _idProps: {
                    service: idService,
                    uuid: "21"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "22"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "color: rgba(0, 0, 0, 0.72);"
                },
                style: "",
                text: ["We use cookies to improve and personalise your experience. By clicking Accept, you agree to our cookie use. "],
                _idProps: {
                    service: idService,
                    uuid: "23"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Expression, {
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.onClickPolicy$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                extendedProperties: {
                    style: "text-decoration: underline;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                style: "cursor-pointer",
                value: "See our policy.",
                _idProps: {
                    service: idService,
                    uuid: "24"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "display-flex align-items-center column-gap-s",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "25"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Button, {
                enabled: true,
                extendedProperties: {
                    style: "background-color: transparent; height: 32px;"
                },
                isDefault: false,
                onClick: function() {
                    var eventHandlerContext = callContext.clone();
                    controller.buttonOnClick$Action(true, controller.callContext(eventHandlerContext));

                    ;
                },
                style: "btn full-width",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "26"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-weight: 500;"
                },
                style: "font-size-xs",
                text: ["Accept"],
                _idProps: {
                    service: idService,
                    uuid: "27"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Button, {
                enabled: true,
                extendedProperties: {
                    style: "background-color: transparent; height: 32px; margin-top: 0px;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                isDefault: false,
                onClick: function() {
                    var eventHandlerContext = callContext.clone();
                    controller.buttonOnClick$Action(false, controller.callContext(eventHandlerContext));

                    ;
                },
                style: "btn full-width",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "28"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-weight: 500;"
                },
                style: "font-size-xs",
                text: ["Reject"],
                _idProps: {
                    service: idService,
                    uuid: "29"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: true,
                extendedProperties: {
                    style: "min-height: 110px; text-align: center;"
                },
                style: "background-neutral-2 padding-base cookie-concent-bottom-banner display-flex flex-direction-column gap-base align-items-center justify-content-center",
                visible: model.getCachedValue(idService.getId("ojBJ_16l20OX_encdCrpdw.Visible"), function() {
                    return (!(OutSystemsUIController.default.isPhone$Action(callContext).isPhoneOut) && model.variables.isEUVar);
                }, function() {
                    return model.variables.isEUVar;
                }),
                _idProps: {
                    service: idService,
                    uuid: "30"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $if(model.variables.showCookieConcentVar, false, this, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "31"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "color: rgba(0, 0, 0, 0.72);"
                    },
                    style: "",
                    text: ["We use cookies to improve and personalise your experience. By clicking Accept, you agree to our cookie use. "],
                    _idProps: {
                        service: idService,
                        uuid: "32"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }), React.createElement(OSWidgets.Expression, {
                    extendedEvents: {
                        onClick: function() {
                            var eventHandlerContext = callContext.clone();
                            controller.onClickPolicy$Action(controller.callContext(eventHandlerContext));

                            ;
                        }
                    },
                    extendedProperties: {
                        style: "text-decoration: underline;"
                    },
                    gridProperties: {
                        classes: "ThemeGrid_MarginGutter"
                    },
                    style: "cursor-pointer",
                    value: "See our policy.",
                    _idProps: {
                        service: idService,
                        uuid: "33"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "display-flex align-items-center column-gap-s justify-content-center",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "34"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Button, {
                    enabled: true,
                    extendedProperties: {
                        style: "background-color: transparent;"
                    },
                    gridProperties: {
                        width: "136px"
                    },
                    isDefault: false,
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.buttonOnClick$Action(true, controller.callContext(eventHandlerContext));

                        ;
                    },
                    style: "btn ",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "35"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "font-weight: 500;"
                    },
                    style: "font-size-xs",
                    text: ["Accept"],
                    _idProps: {
                        service: idService,
                        uuid: "36"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })), React.createElement(OSWidgets.Button, {
                    enabled: true,
                    extendedProperties: {
                        style: "background-color: transparent; margin-top: 0px;"
                    },
                    gridProperties: {
                        classes: "ThemeGrid_MarginGutter",
                        width: "136px"
                    },
                    isDefault: false,
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.buttonOnClick$Action(false, controller.callContext(eventHandlerContext));

                        ;
                    },
                    style: "btn ",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "37"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "font-weight: 500;"
                    },
                    style: "font-size-xs",
                    text: ["Reject"],
                    _idProps: {
                        service: idService,
                        uuid: "38"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })))];
            }, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "max-width: 985px; text-align: left;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "39"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Expression, {
                    value: model.variables.riskWarningVar,
                    _idProps: {
                        service: idService,
                        uuid: "40"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }))];
            })));
        }
    }

    return View;
});
define("tradershub.Layouts.SignupLayoutTopMenu.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "BrowserConsoleLogging.controller", "RESTAPIWebsocketOfficial.model", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.Layouts.SignupLayoutTopMenu.mvc$translationsResources", "OutSystemsUI.controller$IsPhone", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "BrowserConsoleLogging.controller$ConsoleLog", "tradershub.referencesHealth$BrowserConsoleLogging", "tradershub.controller$TextToBoolean", "tradershub.controller$RedirectToExternalURL", "OutSystemsUI.controller$LayoutDestroy", "tradershub.controller$SetEUTrackingCookies", "tradershub.controller$CheckEUTrackingCookies", "RESTAPIWebsocketOfficial.model$ST_c864353821feed79663806f3e445d40eStructure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.model$RC_798951e34838fcc1a6b9e0aaf476e075", "tradershub.model$RL_8c0999ad77575572f51b9e9cbec474aa"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, BrowserConsoleLoggingController, RESTAPIWebsocketOfficialModel, tradershubLanguageResources, tradershubClientVariables, tradershub_Layouts_SignupLayoutTopMenu_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, tradershub_Layouts_SignupLayoutTopMenu_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {
                    getEUCountries$AggrRefresh: 0
                };
                this.dataFetchDependentsGraph = {
                    getEUCountries$AggrRefresh: []
                };
                this.shouldSendClientVarsToDataSources = false;
            }

            // Server Actions - Methods

            // Aggregates and Data Actions
            get getEUCountries$AggrRefresh() {
                if (!(this.hasOwnProperty("_getEUCountries$AggrRefresh"))) {
                    this._getEUCountries$AggrRefresh = function() {
                        var innerBody = function(maxRecords, startIndex, callContext) {
                            var model = this.model;
                            var controller = this.controller;
                            var callContext = controller.callContext(callContext);
                            return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetEUCountries", "screenservices/tradershub/Layouts/SignupLayoutTopMenu/ScreenDataSetGetEUCountries", "F1VjkazjO8NBvKDTxwWdCA", maxRecords, startIndex, function(b) {
                                model.variables.getEUCountriesAggr.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.getEUCountriesAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getEUCountriesAggr.constructor));
                            }, undefined, undefined, undefined, callContext, undefined, true).then(function() {
                                controller._getEUCountriesOnAfterFetch$Action(controller.callContext(callContext));
                            });
                        }.bind(this);
                        return OS.Logger.startActiveSpan("GetEUCountries", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetEUCountries");
                                span.setAttribute("outsystems.function.key", "01a85540-6e89-4ded-a165-af682e5344dc");
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

                return this._getEUCountries$AggrRefresh;
            }
            set getEUCountries$AggrRefresh(value) {
                this._getEUCountries$AggrRefresh = value;
            }


            get dataFetchActionNames() {
                if (!(this.hasOwnProperty("_dataFetchActionNames"))) {
                    this._dataFetchActionNames = ["getEUCountries$AggrRefresh"];
                }

                return this._dataFetchActionNames;
            }
            set dataFetchActionNames(value) {
                this._dataFetchActionNames = value;
            }

            // Client Actions - Methods
            get _onParametersChanged$Action() {
                if (!(this.hasOwnProperty("__onParametersChanged$Action"))) {
                    this.__onParametersChanged$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnParametersChanged", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnParametersChanged");
                                span.setAttribute("outsystems.function.key", "0e7d004b-2499-4727-be88-d20a593be567");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnParametersChanged");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: ConsoleLog
                                    BrowserConsoleLoggingController.default.consoleLog$Action(model.variables.clientCountryIn, 0, callContext);
                                    return OS.Flow.executeSequence(function() {
                                        if ((tradershubController.default.textToBoolean$Action(model.variables.clientCountryIn, true, callContext).resultOut)) {
                                            // Execute Action: GetEUCountriesOnAfterFetch
                                            controller._getEUCountriesOnAfterFetch$Action(callContext);
                                            // Refresh Query: GetEUCountries
                                            var result = controller.getEUCountries$AggrRefresh(1, 0, callContext);
                                            model.flush();
                                            return result;
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

                return this.__onParametersChanged$Action;
            }
            set _onParametersChanged$Action(value) {
                this.__onParametersChanged$Action = value;
            }

            get _toggleTopDisclaimerOnClick$Action() {
                if (!(this.hasOwnProperty("__toggleTopDisclaimerOnClick$Action"))) {
                    this.__toggleTopDisclaimerOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ToggleTopDisclaimerOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ToggleTopDisclaimerOnClick");
                                span.setAttribute("outsystems.function.key", "38fa1510-1b13-48cd-aed5-dbe1c10e1d94");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("ToggleTopDisclaimerOnClick");
                                callContext = controller.callContext(callContext);
                                // IsTopDisclaimerExpanded = notIsTopDisclaimerExpanded
                                model.variables.isTopDisclaimerExpandedVar = !(model.variables.isTopDisclaimerExpandedVar);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__toggleTopDisclaimerOnClick$Action;
            }
            set _toggleTopDisclaimerOnClick$Action(value) {
                this.__toggleTopDisclaimerOnClick$Action = value;
            }

            get _onLogoClick$Action() {
                if (!(this.hasOwnProperty("__onLogoClick$Action"))) {
                    this.__onLogoClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnLogoClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnLogoClick");
                                span.setAttribute("outsystems.function.key", "49b8119d-aaa7-4369-811b-950faa5f175f");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnLogoClick");
                                callContext = controller.callContext(callContext);
                                if ((model.variables.hasLinkIn)) {
                                    // Destination: /tradershub/
                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://deriv.com", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onLogoClick$Action;
            }
            set _onLogoClick$Action(value) {
                this.__onLogoClick$Action = value;
            }

            get _onClickPolicy$Action() {
                if (!(this.hasOwnProperty("__onClickPolicy$Action"))) {
                    this.__onClickPolicy$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickPolicy", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickPolicy");
                                span.setAttribute("outsystems.function.key", "81d9e60f-72c7-49d2-b751-12399bc13859");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickPolicy");
                                callContext = controller.callContext(callContext);
                                // Execute Action: RedirectToExternalURL
                                tradershubController.default.redirectToExternalURL$Action("https://docs.deriv.com/tnc/eu/security-and-privacy.pdf", true, callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickPolicy$Action;
            }
            set _onClickPolicy$Action(value) {
                this.__onClickPolicy$Action = value;
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
                                span.setAttribute("outsystems.function.key", "8416e772-06fc-4f38-af2b-0c0e899244e0");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnDestroy");
                                callContext = controller.callContext(callContext);
                                // Execute Action: LayoutDestroy
                                OutSystemsUIController.default.layoutDestroy$Action(callContext);
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

            get _buttonOnClick$Action() {
                if (!(this.hasOwnProperty("__buttonOnClick$Action"))) {
                    this.__buttonOnClick$Action = function(agreeIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ButtonOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ButtonOnClick");
                                span.setAttribute("outsystems.function.key", "c21c0c5a-70be-4995-b5d0-73039266c95e");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("ButtonOnClick");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.Layouts.SignupLayoutTopMenu.ButtonOnClick$vars"))());
                                vars.value.agreeInLocal = agreeIn;
                                // Execute Action: SetEUTrackingCookies
                                tradershubController.default.setEUTrackingCookies$Action(vars.value.agreeInLocal, callContext);
                                // ShowCookieConcent = False
                                model.variables.showCookieConcentVar = false;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__buttonOnClick$Action;
            }
            set _buttonOnClick$Action(value) {
                this.__buttonOnClick$Action = value;
            }

            get _getEUCountriesOnAfterFetch$Action() {
                if (!(this.hasOwnProperty("__getEUCountriesOnAfterFetch$Action"))) {
                    this.__getEUCountriesOnAfterFetch$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("GetEUCountriesOnAfterFetch", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetEUCountriesOnAfterFetch");
                                span.setAttribute("outsystems.function.key", "e0e40948-87da-4c68-a8bd-5b74475f3ce4");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("GetEUCountriesOnAfterFetch");
                                callContext = controller.callContext(callContext);
                                var checkEUTrackingCookiesVar = new OS.DataTypes.VariableHolder();
                                var jSONDeserializeGetWebsiteStatusResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_c864353821feed79663806f3e445d40eStructure))());
                                if ((tradershubController.default.textToBoolean$Action(model.variables.clientCountryIn, true, callContext).resultOut)) {
                                    // JSON Deserialize: JSONDeserializeGetWebsiteStatusResponse
                                    jSONDeserializeGetWebsiteStatusResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(tradershubClientVariables.getRawWebsiteStatusResponse(), RESTAPIWebsocketOfficialModel.ST_c864353821feed79663806f3e445d40eStructure, false);
                                    // IsEU = GetEUCountries.Count > 0
                                    model.variables.isEUVar = model.variables.getEUCountriesAggr.countOut.gt(OS.BuiltinFunctions.integerToLongInteger(0));
                                    if ((model.variables.getEUCountriesAggr.countOut.gt(OS.BuiltinFunctions.integerToLongInteger(0)))) {
                                        // Execute Action: CheckEUTrackingCookies
                                        checkEUTrackingCookiesVar.value = tradershubController.default.checkEUTrackingCookies$Action(callContext);

                                        // ShowCookieConcent = notCheckEUTrackingCookies.IsAvailable
                                        model.variables.showCookieConcentVar = !(checkEUTrackingCookiesVar.value.isAvailableOut);
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

                return this.__getEUCountriesOnAfterFetch$Action;
            }
            set _getEUCountriesOnAfterFetch$Action(value) {
                this.__getEUCountriesOnAfterFetch$Action = value;
            }


            onParametersChanged$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnParametersChanged__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnParametersChanged");
                        span.setAttribute("outsystems.function.key", "0e7d004b-2499-4727-be88-d20a593be567");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            toggleTopDisclaimerOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ToggleTopDisclaimerOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ToggleTopDisclaimerOnClick");
                        span.setAttribute("outsystems.function.key", "38fa1510-1b13-48cd-aed5-dbe1c10e1d94");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._toggleTopDisclaimerOnClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onLogoClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnLogoClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnLogoClick");
                        span.setAttribute("outsystems.function.key", "49b8119d-aaa7-4369-811b-950faa5f175f");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onLogoClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onClickPolicy$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickPolicy__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickPolicy");
                        span.setAttribute("outsystems.function.key", "81d9e60f-72c7-49d2-b751-12399bc13859");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickPolicy$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "8416e772-06fc-4f38-af2b-0c0e899244e0");
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

            buttonOnClick$Action(agreeIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ButtonOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ButtonOnClick");
                        span.setAttribute("outsystems.function.key", "c21c0c5a-70be-4995-b5d0-73039266c95e");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._buttonOnClick$Action, callContext, agreeIn);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            getEUCountriesOnAfterFetch$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("GetEUCountriesOnAfterFetch__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "GetEUCountriesOnAfterFetch");
                        span.setAttribute("outsystems.function.key", "e0e40948-87da-4c68-a8bd-5b74475f3ce4");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._getEUCountriesOnAfterFetch$Action, callContext);
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
        Controller.registerVariableGroupType("tradershub.Layouts.SignupLayoutTopMenu.ButtonOnClick$vars", [{
            name: "Agree",
            attrName: "agreeInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});


define("tradershub.Layouts.SignupLayoutTopMenu.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});