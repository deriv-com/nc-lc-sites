define("PartnersHub.Signup.Signup.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "PartnersHub.controller", "RESTAPIWebsocketOfficial.model$ST_89d14f8b4008cb2b12eb9082eeeb95a6Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_b5532fbd5672db40752d556a46e96eaeStructure", "RESTAPIWebsocketOfficial.controller$PostVerifyEmail", "PartnersHub.controller$RedirectToOauth", "PartnersHub.controller$UseDevice"], function(OSRuntimeCore, PartnersHubModel, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, PartnersHubController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("isCreateAccountLoading", "isCreateAccountLoadingVar", "isCreateAccountLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new VariablesRecord(new VariablesRecord.RecordClass({
                    isCreateAccountLoadingVar: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        var VariablesRecord = VariablesRecordInner;
        VariablesRecord.init();
    }
    class WidgetsRecord extends
    OS.Model.BaseWidgetRecordMap {
        static getWidgetsType() {
            return {
                Form3: OS.Model.ValidationWidgetRecord,
                Email3: OS.Model.ValidationWidgetRecord,
                Form2: OS.Model.ValidationWidgetRecord,
                Email2: OS.Model.ValidationWidgetRecord
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

define("PartnersHub.Signup.Signup.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Signup.Signup.mvc$model", "PartnersHub.Signup.Signup.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Layouts.LayoutSignup.mvc$view", "@outsystems/runtime-widgets-js", "OutSystemsUI.Utilities.ButtonLoading.mvc$view", "CustomComponentsOfficial.ButtonVariants.PrimaryButton.mvc$view", "RESTAPIWebsocketOfficial.model$ST_89d14f8b4008cb2b12eb9082eeeb95a6Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_b5532fbd5672db40752d556a46e96eaeStructure", "RESTAPIWebsocketOfficial.controller$PostVerifyEmail", "PartnersHub.controller$RedirectToOauth", "PartnersHub.controller$UseDevice"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, React, OSView, PartnersHub_Signup_Signup_mvc_model, PartnersHub_Signup_Signup_mvc_controller, PartnersHubClientVariables, PartnersHub_Layouts_LayoutSignup_mvc_view, OSWidgets, OutSystemsUI_Utilities_ButtonLoading_mvc_view, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "Signup.Signup";
        }

        static getAttributes() {
            return {
                codeFunction: "Signup",
                functionKey: "7409996c-f250-4bc9-85ba-321f8f6c0516",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.Signup.Signup.css", "css/PartnersHub.PHubTest.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [PartnersHub_Layouts_LayoutSignup_mvc_view, OutSystemsUI_Utilities_ButtonLoading_mvc_view, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Signup_Signup_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Signup_Signup_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("bJkJdFDyyUuFujIfj2wFFg#Title", "Signup");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(PartnersHub_Layouts_LayoutSignup_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    BackgroundColor: "white"
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
                    mainContent: new PlaceholderContent(function() {
                        return [$if(PartnersHubClientVariables.getIsDesktop(), false, this, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "margin-top: 0px;"
                                },
                                style: "login-screen",
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
                                    style: "margin-right: 16px; max-width: 486px;"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "color: #414652; font-size: 32px; font-style: normal; font-weight: 700; line-height: 40px;"
                                },
                                text: [$text(getTranslation("H5ORjX4MREGP9PO_Fsleqw#Value", "Join a global network of over 60,000 partners today!"))],
                                _idProps: {
                                    service: idService,
                                    uuid: "3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "margin-bottom: 16px; margin-top: 16px;"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.checkmark.svg"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "color: #414652; font-size: 16px; margin-left: 8px;"
                                },
                                text: [$text(getTranslation("cm5WkDzsTUGV432ue4a_Mw#Value", "USD 47m+ paid out, withdraw anytime"))],
                                _idProps: {
                                    service: idService,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.checkmark.svg"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "9"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "color: #414652; font-size: 16px; margin-left: 8px;"
                                },
                                text: [$text(getTranslation("HFo2TwnWNkq34L7I6n52ag#Value", "1m+ clients across 190 countries"))],
                                _idProps: {
                                    service: idService,
                                    uuid: "10"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.checkmark.svg"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "12"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "color: #414652; font-size: 16px; margin-left: 8px;"
                                },
                                text: [$text(getTranslation("8emUWCB8GkGEI0nX00eBAA#Value", "24/7 support, whenever you need it"))],
                                _idProps: {
                                    service: idService,
                                    uuid: "13"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }))), React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "color: #414652; font-size: 20px; font-style: normal; font-weight: 700; line-height: 30px;"
                                },
                                text: [$text(getTranslation("dqQQL1AfRkWrhX_057RFtQ#Value", "Refer traders and earn up to 45% commissions."))],
                                _idProps: {
                                    service: idService,
                                    uuid: "14"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "max-width: 486px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "486px"
                                },
                                style: "signup",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "15"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Form, {
                                _validationProps: {
                                    validationService: validationService
                                },
                                extendedProperties: {
                                    style: "align-items: flex-start; display: flex; flex-direction: column; gap: 24px; padding: 16px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                style: "",
                                _idProps: {
                                    service: idService,
                                    name: "Form3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "color: #414652; font-size: 24px; font-weight: bold;"
                                },
                                text: [$text(getTranslation("xKYtyF2ZAEC5BFyvUCEUZQ#Value", "Become a Deriv partner"))],
                                _idProps: {
                                    service: idService,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "display: flex; flex-direction: column; gap: 8px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "18"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "color: #4F575E;"
                                },
                                text: [$text(getTranslation("rds1k5TSDES69x+yqh7kWw#Value", "Email"))],
                                _idProps: {
                                    service: idService,
                                    uuid: "19"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Input, {
                                _validationProps: {
                                    validationService: validationService,
                                    validationParentId: idService.getId("Form3")
                                },
                                enabled: true,
                                extendedProperties: {
                                    style: "font-size: 16px; height: 48px;"
                                },
                                gridProperties: {
                                    width: "100%"
                                },
                                inputType: /*Text*/ 0,
                                mandatory: true,
                                maxLength: 50,
                                prompt: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("djEM5nSQdEuRP1YwHhFkfA#ValueExpression.-374653993.1", "Enter your email"),
                                style: "form-control",
                                variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getSignupEmail(), function(value) {
                                    PartnersHubClientVariables.setSignupEmail(value);
                                }),
                                _idProps: {
                                    service: idService,
                                    name: "Email3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "21"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                style: "ph-terms",
                                text: [$text(getTranslation("0L9t5V69GUWqH4EBUFv2IA#Value", "By creating an account, you confirm you are 18+ and understand we may send you updates and marketing materials (see "))],
                                _idProps: {
                                    service: idService,
                                    uuid: "22"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.AdvancedHtml, {
                                extendedProperties: {
                                    href: "https://docs.deriv.com/tnc/security-and-privacy.pdf",
                                    target: "_blank"
                                },
                                tag: "a",
                                _idProps: {
                                    service: idService,
                                    uuid: "23"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                style: "ph-terms-link",
                                text: ["Security and privacy"],
                                _idProps: {
                                    service: idService,
                                    uuid: "24"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Text, {
                                style: "ph-terms",
                                text: ["). Unsubscribe in your account settings anytime.\u2028By signing up, you agree to our "],
                                _idProps: {
                                    service: idService,
                                    uuid: "25"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.AdvancedHtml, {
                                extendedProperties: {
                                    href: "https://deriv.com/terms-and-conditions#clients",
                                    target: "_blank"
                                },
                                tag: "a",
                                _idProps: {
                                    service: idService,
                                    uuid: "26"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                style: "ph-terms-link",
                                text: ["Terms and conditions"],
                                _idProps: {
                                    service: idService,
                                    uuid: "27"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Text, {
                                style: "ph-terms",
                                text: [$text(getTranslation("05+Idh4XEUuXubQDn_Jaqw#Value", "."))],
                                _idProps: {
                                    service: idService,
                                    uuid: "28"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OutSystemsUI_Utilities_ButtonLoading_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    IsLoading: model.variables.isCreateAccountLoadingVar
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    }
                                },
                                _validationProps: {
                                    validationService: validationService,
                                    validationParentId: idService.getId("Form3")
                                },
                                _idProps: {
                                    service: idService,
                                    uuid: "29",
                                    alias: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    button: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Button, {
                                            enabled: true,
                                            extendedProperties: {
                                                style: "border-radius: 100px; height: 48px;"
                                            },
                                            gridProperties: {
                                                width: "100%"
                                            },
                                            isDefault: false,
                                            onClick: function() {
                                                _this.validateWidget(idService.getId("Form3"));
                                                return Promise.resolve().then(function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    return controller.createPartnerAccountOnClick$Action(controller.callContext(eventHandlerContext));
                                                });

                                                ;
                                            },
                                            style: "btn btn-primary primary-button",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "30"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            style: "osui-btn-loading__spinner-animation",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "31"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }), $text(getTranslation("viLAwbFCgEykFfLz6nIlEw#Value", "Continue")))];
                                    })
                                },
                                _dependencies: []
                            }), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "align-items: center; display: flex; justify-content: center;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
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
                                extendedProperties: {
                                    style: "background: #6A7178; height: 1px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "33"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "color: #6A7178; text-align: center; width: 100%;"
                                },
                                text: [$text(getTranslation("sk9Hv6_X+UaRUOHB88t1Hg#Value", "Or sign up with"))],
                                _idProps: {
                                    service: idService,
                                    uuid: "34"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "background: #6A7178; height: 1px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "35"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "align-items: center; display: flex; justify-content: center;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "36"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "align-items: center; border: 0.5px solid #414652; border-radius: 100px; display: flex; flex-shrink: 0; gap: 8px; height: 48px; justify-content: center; padding: 8px 16px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "72px"
                                },
                                style: "social-btn",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "37"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.google_md.png"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "38"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "align-items: center; border: 0.5px solid #414652; border-radius: 100px; display: flex; flex-shrink: 0; gap: 8px; height: 48px; justify-content: center; margin-right: 16px; padding: 8px 16px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "72px",
                                    marginLeft: "16px"
                                },
                                style: "social-btn",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "39"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.facebook_md.png"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "40"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "align-items: center; border: 0.5px solid #414652; border-radius: 100px; display: flex; flex-shrink: 0; gap: 8px; height: 48px; justify-content: center; padding: 8px 16px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "72px"
                                },
                                style: "social-btn",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "41"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.apple_md.png"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "42"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }))), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "text-align: center;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "43"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, $text(getTranslation("4SgkofLBVkmPS+sdVNO+ew#Value", "Already have an account?")), React.createElement(OSWidgets.Link, {
                                enabled: true,
                                extendedProperties: {
                                    style: "border: none; color: #000; font-weight: bold; text-decoration: underline;"
                                },
                                gridProperties: {
                                    classes: "ThemeGrid_MarginGutter"
                                },
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.redirectOAuth$Action(controller.callContext(eventHandlerContext));

                                    ;
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "44"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, $text(getTranslation("nkGOS_qDGke94U1sfqY2Bw#Value", "Log in")))))))];
                        }, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "45"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Form, {
                                _validationProps: {
                                    validationService: validationService
                                },
                                extendedProperties: {
                                    style: "align-items: flex-start; display: flex; flex-direction: column; gap: 24px; padding: 16px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                style: "",
                                _idProps: {
                                    service: idService,
                                    name: "Form2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "color: #222; font-size: 20px; font-weight: bold; margin-top: -8px;"
                                },
                                text: [$text(getTranslation("JFUJhSppXkCG+NL7xoSBoA#Value", "Become a Deriv partner"))],
                                _idProps: {
                                    service: idService,
                                    uuid: "47"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "display: flex; flex-direction: column;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "48"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-size: 16px; margin-bottom: 8px;"
                                },
                                text: [$text(getTranslation("YLEukSC4ZkC9qdBghyW4Gg#Value", "Email"))],
                                _idProps: {
                                    service: idService,
                                    uuid: "49"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Input, {
                                _validationProps: {
                                    validationService: validationService,
                                    validationParentId: idService.getId("Form2")
                                },
                                enabled: true,
                                extendedProperties: {
                                    style: "font-size: 16px; height: 48px;"
                                },
                                gridProperties: {
                                    width: "100%"
                                },
                                inputType: /*Text*/ 0,
                                mandatory: true,
                                maxLength: 50,
                                prompt: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("_CmBqDw0B0GBdlmS6oCbwA#ValueExpression.-374653993.1", "Enter your email"),
                                style: "form-control",
                                variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getSignupEmail(), function(value) {
                                    PartnersHubClientVariables.setSignupEmail(value);
                                }),
                                _idProps: {
                                    service: idService,
                                    name: "Email2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "51"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, $text(getTranslation("wCzi7gRCQUixy+Qxm4YQ7g#Value", "By pressing “Create account”, I agree to the")), React.createElement(OSWidgets.Link, {
                                enabled: true,
                                extendedProperties: {
                                    target: "_blank",
                                    rel: "noopener",
                                    style: "border: none; color: #000; font-weight: bold; text-decoration: underline;"
                                },
                                gridProperties: {
                                    classes: "ThemeGrid_MarginGutter"
                                },
                                transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                                url: OS.Navigation.generateScreenURL("https://deriv.com/terms-and-conditions#clients", {}),
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "52"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, $text(getTranslation("WAJkSKH+U0CFX3WEtz2o2w#Value", "terms and conditions.")))), React.createElement(CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    title: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("N4BuCTIOUEychHYpQGiLkg#Value.-1386031319.1", "Create account"),
                                    Width: "100%",
                                    isLoading: model.variables.isCreateAccountLoadingVar
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    onClick$Action: function() {
                                        return Promise.resolve().then(function() {
                                            var eventHandlerContext = callContext.clone();
                                            return controller.createPartnerAccountOnClick$Action(controller.callContext(eventHandlerContext));
                                        });;
                                    }
                                },
                                _validationProps: {
                                    validationService: validationService,
                                    validationParentId: idService.getId("Form2")
                                },
                                _idProps: {
                                    service: idService,
                                    uuid: "53",
                                    alias: "3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            }), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "align-items: center; display: flex; justify-content: center;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "54"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "background: #6A7178; height: 1px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "55"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "color: #6A7178; text-align: center; width: 100%;"
                                },
                                text: [$text(getTranslation("0zW1LO+dMEyUa1rhdaLzGA#Value", "Or sign up with"))],
                                _idProps: {
                                    service: idService,
                                    uuid: "56"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "background: #6A7178; height: 1px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "57"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "align-items: center; display: flex; justify-content: center;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "58"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "align-items: flex-start; border: 0.5px solid #414652; border-radius: 100px; display: flex; flex-shrink: 0; gap: 8px; justify-content: center; padding: 8px 16px;"
                                },
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "59"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.google_md.png"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "60"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "align-items: flex-start; border: 0.5px solid #414652; border-radius: 100px; display: flex; flex-shrink: 0; gap: 8px; justify-content: center; margin-right: 24px; padding: 8px 16px;"
                                },
                                gridProperties: {
                                    marginLeft: "24px"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "61"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.facebook_md.png"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "62"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "align-items: flex-start; border: 0.5px solid #414652; border-radius: 100px; display: flex; flex-shrink: 0; gap: 8px; justify-content: center; padding: 8px 16px;"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "63"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.apple_md.png"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "64"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }))), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "text-align: center;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "65"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, $text(getTranslation("slSCZLC1Ck+qFlC2cFbkcg#Value", "Already have an account?")), React.createElement(OSWidgets.Link, {
                                enabled: true,
                                extendedProperties: {
                                    style: "border: none; color: #000; font-weight: bold; text-decoration: underline;"
                                },
                                gridProperties: {
                                    classes: "ThemeGrid_MarginGutter"
                                },
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.redirectOAuth$Action(controller.callContext(eventHandlerContext));

                                    ;
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "66"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, $text(getTranslation("lmOiOFXHYUe5iEXKvSI4+Q#Value", "Log in"))))))];
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.isCreateAccountLoadingVar), asPrimitiveValue(PartnersHubClientVariables.getSignupEmail()), asPrimitiveValue(PartnersHubClientVariables.getIsDesktop())]
            }));
        }
    }

    return View;
});
define("PartnersHub.Signup.Signup.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Signup.Signup.mvc$translationsResources", "PartnersHub.Signup.controller", "PartnersHub.Signup.Signup.mvc$controller.CreatePartnerAccountOnClick.EmailCheckJS", "RESTAPIWebsocketOfficial.model$ST_89d14f8b4008cb2b12eb9082eeeb95a6Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_b5532fbd5672db40752d556a46e96eaeStructure", "RESTAPIWebsocketOfficial.controller$PostVerifyEmail", "PartnersHub.controller$RedirectToOauth", "PartnersHub.controller$UseDevice"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Signup_Signup_mvc_TranslationsResources, PartnersHub_SignupController, PartnersHub_Signup_Signup_mvc_controller_CreatePartnerAccountOnClick_EmailCheckJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Signup_Signup_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {};
                this.dataFetchDependentsGraph = {};
                this.shouldSendClientVarsToDataSources = true;
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
            get _onInitialize$Action() {
                if (!(this.hasOwnProperty("__onInitialize$Action"))) {
                    this.__onInitialize$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnInitialize", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnInitialize");
                                span.setAttribute("outsystems.function.key", "1f7c4084-ee19-436f-bf5c-47e1e2337ea1");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                // SignupEmail = ""
                                PartnersHubClientVariables.setSignupEmail("");
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

            get _createPartnerAccountOnClick$Action() {
                if (!(this.hasOwnProperty("__createPartnerAccountOnClick$Action"))) {
                    this.__createPartnerAccountOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("CreatePartnerAccountOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "CreatePartnerAccountOnClick");
                                span.setAttribute("outsystems.function.key", "263c2f9e-5cd9-44cf-9cdc-14979d368907");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("CreatePartnerAccountOnClick");
                                callContext = controller.callContext(callContext);
                                var postVerifyEmailVar = new OS.DataTypes.VariableHolder();
                                var emailCheckJSResult = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // isCreateAccountLoading = True
                                    model.variables.isCreateAccountLoadingVar = true;
                                    return OS.Flow.executeSequence(function() {
                                        if ((((PartnersHubClientVariables.getSignupEmail()) !== ("")))) {
                                            emailCheckJSResult.value = OS.Logger.startActiveSpan("EmailCheck", function(span) {
                                                if (span) {
                                                    span.setAttribute("code.function", "EmailCheck");
                                                    span.setAttribute("outsystems.function.key", "8ca5ed4d-3f41-4754-a4d0-d7501df1f8aa");
                                                    span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                                    span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                                }

                                                try {
                                                    return controller.safeExecuteJSNode(PartnersHub_Signup_Signup_mvc_controller_CreatePartnerAccountOnClick_EmailCheckJS, "EmailCheck", "CreatePartnerAccountOnClick", {
                                                        email: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getSignupEmail(), OS.DataTypes.DataTypes.Text),
                                                        isValid: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                                                    }, function($parameters) {
                                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.Signup.Signup.CreatePartnerAccountOnClick$emailCheckJSResult"))();
                                                        jsNodeResult.isValidOut = OS.DataConversion.JSNodeParamConverter.from($parameters.isValid, OS.DataTypes.DataTypes.Boolean);
                                                        return jsNodeResult;
                                                    }, {}, {});
                                                } finally {
                                                    if (span) {
                                                        span.end();
                                                    }

                                                }

                                            }, 1);
                                            return OS.Flow.executeSequence(function() {
                                                if ((emailCheckJSResult.value.isValidOut)) {
                                                    // Execute Action: PostVerifyEmail
                                                    model.flush();
                                                    return RESTAPIWebsocketOfficialController.default.postVerifyEmail$Action(function() {
                                                        var rec = new RESTAPIWebsocketOfficialModel.ST_89d14f8b4008cb2b12eb9082eeeb95a6Structure();
                                                        rec.verify_emailAttr = PartnersHubClientVariables.getSignupEmail();
                                                        rec.typeAttr = "account_opening";
                                                        return rec;
                                                    }(), PartnersHubClientVariables.getServer(), PartnersHubClientVariables.getAppId(), "EN", callContext).then(function(value) {
                                                        postVerifyEmailVar.value = value;
                                                    }).then(function() {
                                                        // isCreateAccountLoading = False
                                                        model.variables.isCreateAccountLoadingVar = false;
                                                        // Destination: /PartnersHub/EmailVerification
                                                        return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "EmailVerification", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                                    });
                                                } else {
                                                    // Email2.Valid = False
                                                    model.widgets.get(idService.getId("Email2")).validAttr = false;
                                                    // Email3.Valid = False
                                                    model.widgets.get(idService.getId("Email3")).validAttr = false;
                                                    // Email2.ValidationMessage = "That doesn't look like an email address"
                                                    model.widgets.get(idService.getId("Email2")).validationMessageAttr = "That doesn\'t look like an email address";
                                                    // Email3.ValidationMessage = "That doesn't look like an email address"
                                                    model.widgets.get(idService.getId("Email3")).validationMessageAttr = "That doesn\'t look like an email address";
                                                    // isCreateAccountLoading = False
                                                    model.variables.isCreateAccountLoadingVar = false;
                                                }

                                            });
                                        } else {
                                            // Set isCreateAccountLoading
                                            // isCreateAccountLoading = False
                                            model.variables.isCreateAccountLoadingVar = false;
                                            // Email2.Valid = False
                                            model.widgets.get(idService.getId("Email2")).validAttr = false;
                                            // Email3.Valid = False
                                            model.widgets.get(idService.getId("Email3")).validAttr = false;
                                            // Email2.ValidationMessage = "Email is required"
                                            model.widgets.get(idService.getId("Email2")).validationMessageAttr = "Email is required";
                                            // Email3.ValidationMessage = "Email is required"
                                            model.widgets.get(idService.getId("Email3")).validationMessageAttr = "Email is required";
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

                return this.__createPartnerAccountOnClick$Action;
            }
            set _createPartnerAccountOnClick$Action(value) {
                this.__createPartnerAccountOnClick$Action = value;
            }

            get _redirectOAuth$Action() {
                if (!(this.hasOwnProperty("__redirectOAuth$Action"))) {
                    this.__redirectOAuth$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("RedirectOAuth", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "RedirectOAuth");
                                span.setAttribute("outsystems.function.key", "3c2fce89-d091-4979-be81-7672e2fd2413");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("RedirectOAuth");
                                callContext = controller.callContext(callContext);
                                // Execute Action: RedirectToOauth
                                PartnersHubController.default.redirectToOauth$Action(callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__redirectOAuth$Action;
            }
            set _redirectOAuth$Action(value) {
                this.__redirectOAuth$Action = value;
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
                                span.setAttribute("outsystems.function.key", "60672cab-1505-4dc9-af74-c1ff79516d5f");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                // Execute Action: UseDevice
                                PartnersHubController.default.useDevice$Action(callContext);
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


            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "1f7c4084-ee19-436f-bf5c-47e1e2337ea1");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
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

            createPartnerAccountOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("CreatePartnerAccountOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "CreatePartnerAccountOnClick");
                        span.setAttribute("outsystems.function.key", "263c2f9e-5cd9-44cf-9cdc-14979d368907");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._createPartnerAccountOnClick$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            redirectOAuth$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("RedirectOAuth__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "RedirectOAuth");
                        span.setAttribute("outsystems.function.key", "3c2fce89-d091-4979-be81-7672e2fd2413");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._redirectOAuth$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "60672cab-1505-4dc9-af74-c1ff79516d5f");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
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
                        return PartnersHub_SignupController.default.handleError(ex, this.callContext());
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
        Controller.registerVariableGroupType("PartnersHub.Signup.Signup.CreatePartnerAccountOnClick$emailCheckJSResult", [{
            name: "isValid",
            attrName: "isValidOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.Signup.Signup.mvc$controller.CreatePartnerAccountOnClick.EmailCheckJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.isValid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/.test($parameters.email)
    };
});


define("PartnersHub.Signup.Signup.mvc$translationsResources.ar-001", [], function() {
    return {
        "lmOiOFXHYUe5iEXKvSI4+Q#Value": "تسجيل الدخول",
        "slSCZLC1Ck+qFlC2cFbkcg#Value": "هل لديك حساب بالفعل؟",
        "0zW1LO+dMEyUa1rhdaLzGA#Value": "أو سجّل باستخدام",
        "N4BuCTIOUEychHYpQGiLkg#Value.-1386031319.1": "إنشاء حساب",
        "WAJkSKH+U0CFX3WEtz2o2w#Value": "الشروط والأحكام",
        "wCzi7gRCQUixy+Qxm4YQ7g#Value": "بالضغط على \"إنشاء حساب\"، أوافق على",
        "_CmBqDw0B0GBdlmS6oCbwA#ValueExpression.-374653993.1": "أدخل بريدك الإلكتروني",
        "YLEukSC4ZkC9qdBghyW4Gg#Value": "بريد إلكتروني",
        "JFUJhSppXkCG+NL7xoSBoA#Value": "كن شريكًا في Deriv",
        "nkGOS_qDGke94U1sfqY2Bw#Value": "تسجيل الدخول",
        "4SgkofLBVkmPS+sdVNO+ew#Value": "لديك حساب بالفعل؟",
        "sk9Hv6_X+UaRUOHB88t1Hg#Value": "أو قم بالتسجيل باستخدام",
        "viLAwbFCgEykFfLz6nIlEw#Value": "متابعة",
        "05+Idh4XEUuXubQDn_Jaqw#Value": "بالضغط على \"متابعة\"، أوافق على",
        "0L9t5V69GUWqH4EBUFv2IA#Value": "بالضغط على \"متابعة\"، أوافق على",
        "djEM5nSQdEuRP1YwHhFkfA#ValueExpression.-374653993.1": "أدخل بريدك الإلكتروني",
        "rds1k5TSDES69x+yqh7kWw#Value": "بريد إلكتروني",
        "xKYtyF2ZAEC5BFyvUCEUZQ#Value": "كن شريكًا في Deriv",
        "dqQQL1AfRkWrhX_057RFtQ#Value": "قم بإحالة المتداولين واحصل على عمولات تصل إلى 45%.",
        "8emUWCB8GkGEI0nX00eBAA#Value": "دعم متاح على مدار الساعة، متى ما احتجت إليه",
        "HFo2TwnWNkq34L7I6n52ag#Value": "أكثر من 1 مليون عميل في 190 دولة",
        "cm5WkDzsTUGV432ue4a_Mw#Value": "تم دفع أكثر من 47 مليون دولار، يمكنك السحب في أي وقت",
        "H5ORjX4MREGP9PO_Fsleqw#Value": "انضم إلى شبكة عالمية تضم أكثر من 60,000 شريك اليوم!"
    };
});

define("PartnersHub.Signup.Signup.mvc$translationsResources.de-DE", [], function() {
    return {
        "lmOiOFXHYUe5iEXKvSI4+Q#Value": "Einloggen",
        "slSCZLC1Ck+qFlC2cFbkcg#Value": "Haben Sie bereits ein Konto?",
        "0zW1LO+dMEyUa1rhdaLzGA#Value": "Oder melden Sie sich an mit",
        "N4BuCTIOUEychHYpQGiLkg#Value.-1386031319.1": "Konto erstellen",
        "WAJkSKH+U0CFX3WEtz2o2w#Value": "Allgemeine Geschäftsbedingungen",
        "wCzi7gRCQUixy+Qxm4YQ7g#Value": "Durch Drücken von „Konto erstellen“ stimme ich zu",
        "_CmBqDw0B0GBdlmS6oCbwA#ValueExpression.-374653993.1": "Geben Sie Ihre E-Mail-Adresse ein",
        "YLEukSC4ZkC9qdBghyW4Gg#Value": "E-Mail",
        "JFUJhSppXkCG+NL7xoSBoA#Value": "Werden Sie ein Deriv-Partner",
        "nkGOS_qDGke94U1sfqY2Bw#Value": "Anmeldung",
        "4SgkofLBVkmPS+sdVNO+ew#Value": "Haben Sie bereits ein Konto?",
        "sk9Hv6_X+UaRUOHB88t1Hg#Value": "Oder melden Sie sich an mit",
        "viLAwbFCgEykFfLz6nIlEw#Value": "Fortfahren",
        "05+Idh4XEUuXubQDn_Jaqw#Value": "Durch Drücken von „Weiter“ stimme ich zu, dass die",
        "0L9t5V69GUWqH4EBUFv2IA#Value": "Durch Drücken von „Weiter“ stimme ich zu, dass die",
        "djEM5nSQdEuRP1YwHhFkfA#ValueExpression.-374653993.1": "Geben Sie Ihre E-Mail-Adresse ein",
        "rds1k5TSDES69x+yqh7kWw#Value": "E-Mail",
        "xKYtyF2ZAEC5BFyvUCEUZQ#Value": "Werde ein Deriv-Partner",
        "dqQQL1AfRkWrhX_057RFtQ#Value": "Empfehlen Sie Händler und verdienen Sie bis zu 45 % Provisionen.",
        "8emUWCB8GkGEI0nX00eBAA#Value": "24/7 Unterstützung, wann immer Sie sie benötigen",
        "HFo2TwnWNkq34L7I6n52ag#Value": "Über 1 Million Kunden in 190 Ländern",
        "cm5WkDzsTUGV432ue4a_Mw#Value": "Über 47 Millionen USD ausgezahlt, jederzeit abheben",
        "H5ORjX4MREGP9PO_Fsleqw#Value": "Treten Sie noch heute einem globalen Netzwerk von über 60.000 Partnern bei!"
    };
});

define("PartnersHub.Signup.Signup.mvc$translationsResources.es-ES", [], function() {
    return {
        "lmOiOFXHYUe5iEXKvSI4+Q#Value": "Iniciar sesión",
        "slSCZLC1Ck+qFlC2cFbkcg#Value": "¿Ya tienes una cuenta?",
        "0zW1LO+dMEyUa1rhdaLzGA#Value": "O regístrate con",
        "N4BuCTIOUEychHYpQGiLkg#Value.-1386031319.1": "crear cuenta",
        "WAJkSKH+U0CFX3WEtz2o2w#Value": "Términos y condiciones",
        "wCzi7gRCQUixy+Qxm4YQ7g#Value": "Al presionar \"Crear cuenta\", acepto",
        "_CmBqDw0B0GBdlmS6oCbwA#ValueExpression.-374653993.1": "Introduce tu correo electrónico",
        "YLEukSC4ZkC9qdBghyW4Gg#Value": "Correo electrónico",
        "JFUJhSppXkCG+NL7xoSBoA#Value": "Conviértete en un Deriv partner",
        "nkGOS_qDGke94U1sfqY2Bw#Value": "Iniciar sesión",
        "4SgkofLBVkmPS+sdVNO+ew#Value": "¿Ya tienes una cuenta?",
        "sk9Hv6_X+UaRUOHB88t1Hg#Value": "O regístrate con",
        "viLAwbFCgEykFfLz6nIlEw#Value": "Continuar",
        "05+Idh4XEUuXubQDn_Jaqw#Value": "Al presionar \"Continuar\", acepto que la",
        "0L9t5V69GUWqH4EBUFv2IA#Value": "Al presionar \"Continuar\", acepto que la",
        "djEM5nSQdEuRP1YwHhFkfA#ValueExpression.-374653993.1": "Introduzca su correo electrónico",
        "rds1k5TSDES69x+yqh7kWw#Value": "Correo electrónico",
        "xKYtyF2ZAEC5BFyvUCEUZQ#Value": "Conviértete en un Deriv Partner",
        "dqQQL1AfRkWrhX_057RFtQ#Value": "Recomienda traders y gana hasta un 45% de comisiones.",
        "8emUWCB8GkGEI0nX00eBAA#Value": "Soporte 24/7, cuando lo necesites",
        "HFo2TwnWNkq34L7I6n52ag#Value": "Más de 1 millón de clientes en 190 países",
        "cm5WkDzsTUGV432ue4a_Mw#Value": "Más de 47 millones USD pagados, retira en cualquier momento",
        "H5ORjX4MREGP9PO_Fsleqw#Value": "¡Únete hoy a una red global de más de 60,000 socios!"
    };
});

define("PartnersHub.Signup.Signup.mvc$translationsResources.fr-FR", [], function() {
    return {
        "lmOiOFXHYUe5iEXKvSI4+Q#Value": "Se connecter",
        "slSCZLC1Ck+qFlC2cFbkcg#Value": "Vous avez déjà un compte ?",
        "0zW1LO+dMEyUa1rhdaLzGA#Value": "Ou inscrivez-vous avec",
        "N4BuCTIOUEychHYpQGiLkg#Value.-1386031319.1": "créer un compte",
        "WAJkSKH+U0CFX3WEtz2o2w#Value": "Conditions générales",
        "wCzi7gRCQUixy+Qxm4YQ7g#Value": "En appuyant sur « Créer un compte », j\'accepte",
        "_CmBqDw0B0GBdlmS6oCbwA#ValueExpression.-374653993.1": "Entrez votre e-mail",
        "YLEukSC4ZkC9qdBghyW4Gg#Value": "E-mail",
        "JFUJhSppXkCG+NL7xoSBoA#Value": "Devenez un Deriv partenaire",
        "nkGOS_qDGke94U1sfqY2Bw#Value": "Connexion",
        "4SgkofLBVkmPS+sdVNO+ew#Value": "Vous avez déjà un compte ?",
        "sk9Hv6_X+UaRUOHB88t1Hg#Value": "Ou inscrivez-vous avec",
        "viLAwbFCgEykFfLz6nIlEw#Value": "Continuer",
        "05+Idh4XEUuXubQDn_Jaqw#Value": "En appuyant sur \"Continuer\", j\'accepte que la",
        "0L9t5V69GUWqH4EBUFv2IA#Value": "En appuyant sur \"Continuer\", j\'accepte que la",
        "djEM5nSQdEuRP1YwHhFkfA#ValueExpression.-374653993.1": "Entrez votre e-mail",
        "rds1k5TSDES69x+yqh7kWw#Value": "E-mail",
        "xKYtyF2ZAEC5BFyvUCEUZQ#Value": "Devenez partenaire Deriv",
        "dqQQL1AfRkWrhX_057RFtQ#Value": "Référez des traders et gagnez jusqu\'à 45 % de commissions.",
        "8emUWCB8GkGEI0nX00eBAA#Value": "Support 24/7, quand vous en avez besoin",
        "HFo2TwnWNkq34L7I6n52ag#Value": "Plus de 1 million de clients dans 190 pays",
        "cm5WkDzsTUGV432ue4a_Mw#Value": "Plus de 47 millions USD versés, retirez à tout moment",
        "H5ORjX4MREGP9PO_Fsleqw#Value": "Rejoignez dès aujourd\'hui un réseau mondial de plus de 60 000 partenaires !"
    };
});

define("PartnersHub.Signup.Signup.mvc$translationsResources.it-IT", [], function() {
    return {
        "lmOiOFXHYUe5iEXKvSI4+Q#Value": "Accedi",
        "slSCZLC1Ck+qFlC2cFbkcg#Value": "Hai già un account?",
        "0zW1LO+dMEyUa1rhdaLzGA#Value": "O registrati con",
        "N4BuCTIOUEychHYpQGiLkg#Value.-1386031319.1": "crea account",
        "WAJkSKH+U0CFX3WEtz2o2w#Value": "Termini e condizioni",
        "wCzi7gRCQUixy+Qxm4YQ7g#Value": "Premendo \"Crea account\", accetto",
        "_CmBqDw0B0GBdlmS6oCbwA#ValueExpression.-374653993.1": "Inserisci la tua email",
        "YLEukSC4ZkC9qdBghyW4Gg#Value": "Email",
        "JFUJhSppXkCG+NL7xoSBoA#Value": "Diventa un Deriv partner",
        "nkGOS_qDGke94U1sfqY2Bw#Value": "Accedi",
        "4SgkofLBVkmPS+sdVNO+ew#Value": "Hai già un account?",
        "sk9Hv6_X+UaRUOHB88t1Hg#Value": "Oppure registrati con",
        "viLAwbFCgEykFfLz6nIlEw#Value": "Continuare",
        "05+Idh4XEUuXubQDn_Jaqw#Value": "Premendo \"Continua\", accetto che la",
        "0L9t5V69GUWqH4EBUFv2IA#Value": "Premendo \"Continua\", accetto che la",
        "djEM5nSQdEuRP1YwHhFkfA#ValueExpression.-374653993.1": "Inserisci la tua email",
        "rds1k5TSDES69x+yqh7kWw#Value": "Email",
        "xKYtyF2ZAEC5BFyvUCEUZQ#Value": "Diventa un Deriv partner",
        "dqQQL1AfRkWrhX_057RFtQ#Value": "Riferisci trader e guadagna fino al 45% di commissioni.",
        "8emUWCB8GkGEI0nX00eBAA#Value": "Assistenza 24/7, ogni volta che ne hai bisogno",
        "HFo2TwnWNkq34L7I6n52ag#Value": "Oltre 1 milione di clienti in 190 paesi",
        "cm5WkDzsTUGV432ue4a_Mw#Value": "Oltre 47 milioni di USD pagati, prelievo in qualsiasi momento",
        "H5ORjX4MREGP9PO_Fsleqw#Value": "Unisciti oggi a una rete globale di oltre 60.000 partner!"
    };
});

define("PartnersHub.Signup.Signup.mvc$translationsResources.pl-PL", [], function() {
    return {
        "lmOiOFXHYUe5iEXKvSI4+Q#Value": "Zaloguj się",
        "slSCZLC1Ck+qFlC2cFbkcg#Value": "Masz już konto?",
        "0zW1LO+dMEyUa1rhdaLzGA#Value": "Lub zarejestruj się z",
        "N4BuCTIOUEychHYpQGiLkg#Value.-1386031319.1": "utwórz konto",
        "WAJkSKH+U0CFX3WEtz2o2w#Value": "Warunki i zasady",
        "wCzi7gRCQUixy+Qxm4YQ7g#Value": "Naciskając \"Utwórz konto\", zgadzam się",
        "_CmBqDw0B0GBdlmS6oCbwA#ValueExpression.-374653993.1": "Wprowadź swój adres e-mail",
        "YLEukSC4ZkC9qdBghyW4Gg#Value": "E-mail",
        "JFUJhSppXkCG+NL7xoSBoA#Value": "Zostań partnerem Deriv",
        "nkGOS_qDGke94U1sfqY2Bw#Value": "Zaloguj się",
        "4SgkofLBVkmPS+sdVNO+ew#Value": "Masz już konto?",
        "sk9Hv6_X+UaRUOHB88t1Hg#Value": "Lub zarejestruj się z",
        "viLAwbFCgEykFfLz6nIlEw#Value": "Kontynuować",
        "05+Idh4XEUuXubQDn_Jaqw#Value": "Naciskając „Kontynuuj”, zgadzam się, że",
        "0L9t5V69GUWqH4EBUFv2IA#Value": "Naciskając „Kontynuuj”, zgadzam się, że",
        "djEM5nSQdEuRP1YwHhFkfA#ValueExpression.-374653993.1": "Wprowadź swój adres e-mail",
        "rds1k5TSDES69x+yqh7kWw#Value": "E-mail",
        "xKYtyF2ZAEC5BFyvUCEUZQ#Value": "Zostań partnerem Deriv",
        "dqQQL1AfRkWrhX_057RFtQ#Value": "Polecaj traderów i zarabiaj do 45% prowizji.",
        "8emUWCB8GkGEI0nX00eBAA#Value": "Wsparcie 24/7, kiedy tylko go potrzebujesz",
        "HFo2TwnWNkq34L7I6n52ag#Value": "Ponad 1 milion klientów w 190 krajach",
        "cm5WkDzsTUGV432ue4a_Mw#Value": "Wypłacono ponad 47 milionów USD, wypłata w dowolnym momencie",
        "H5ORjX4MREGP9PO_Fsleqw#Value": "Dołącz już dziś do globalnej sieci ponad 60 000 partnerów!"
    };
});

define("PartnersHub.Signup.Signup.mvc$translationsResources.pt-PT", [], function() {
    return {
        "lmOiOFXHYUe5iEXKvSI4+Q#Value": "Iniciar sessão",
        "slSCZLC1Ck+qFlC2cFbkcg#Value": "Já tem uma conta?",
        "0zW1LO+dMEyUa1rhdaLzGA#Value": "Ou inscreva-se com",
        "N4BuCTIOUEychHYpQGiLkg#Value.-1386031319.1": "Criar conta",
        "WAJkSKH+U0CFX3WEtz2o2w#Value": "Termos e condições",
        "wCzi7gRCQUixy+Qxm4YQ7g#Value": "Ao pressionar \"Criar conta\", concordo",
        "_CmBqDw0B0GBdlmS6oCbwA#ValueExpression.-374653993.1": "Insira o seu e-mail",
        "YLEukSC4ZkC9qdBghyW4Gg#Value": "E-mail",
        "JFUJhSppXkCG+NL7xoSBoA#Value": "Torne-se um Deriv partner",
        "nkGOS_qDGke94U1sfqY2Bw#Value": "Iniciar sessão",
        "4SgkofLBVkmPS+sdVNO+ew#Value": "Já tem uma conta?",
        "sk9Hv6_X+UaRUOHB88t1Hg#Value": "Ou inscreva-se com",
        "viLAwbFCgEykFfLz6nIlEw#Value": "Continuar",
        "05+Idh4XEUuXubQDn_Jaqw#Value": "Ao pressionar \"Continuar\", concordo que a",
        "0L9t5V69GUWqH4EBUFv2IA#Value": "Ao pressionar \"Continuar\", concordo que a",
        "djEM5nSQdEuRP1YwHhFkfA#ValueExpression.-374653993.1": "Insira o seu e-mail",
        "rds1k5TSDES69x+yqh7kWw#Value": "E-mail",
        "xKYtyF2ZAEC5BFyvUCEUZQ#Value": "Torne-se um Deriv partner",
        "dqQQL1AfRkWrhX_057RFtQ#Value": "Recomende traders e ganhe até 45% de comissões.",
        "8emUWCB8GkGEI0nX00eBAA#Value": "Suporte 24/7, sempre que precisar",
        "HFo2TwnWNkq34L7I6n52ag#Value": "Mais de 1 milhão de clientes em 190 países",
        "cm5WkDzsTUGV432ue4a_Mw#Value": "Mais de 47 milhões USD pagos, retire a qualquer momento",
        "H5ORjX4MREGP9PO_Fsleqw#Value": "Junte-se hoje a uma rede global de mais de 60.000 parceiros!"
    };
});

define("PartnersHub.Signup.Signup.mvc$translationsResources.ru-RU", [], function() {
    return {
        "lmOiOFXHYUe5iEXKvSI4+Q#Value": "Войти",
        "slSCZLC1Ck+qFlC2cFbkcg#Value": "У вас уже есть аккаунт?",
        "0zW1LO+dMEyUa1rhdaLzGA#Value": "Или зарегистрируйтесь с",
        "N4BuCTIOUEychHYpQGiLkg#Value.-1386031319.1": "открыть счет",
        "WAJkSKH+U0CFX3WEtz2o2w#Value": "Условия и положения",
        "wCzi7gRCQUixy+Qxm4YQ7g#Value": "Нажимая \"Создать аккаунт\", я согласен",
        "_CmBqDw0B0GBdlmS6oCbwA#ValueExpression.-374653993.1": "Введите ваш адрес электронной почты",
        "YLEukSC4ZkC9qdBghyW4Gg#Value": "Электронная почта",
        "JFUJhSppXkCG+NL7xoSBoA#Value": "Станьте партнером Deriv",
        "nkGOS_qDGke94U1sfqY2Bw#Value": "Вход",
        "4SgkofLBVkmPS+sdVNO+ew#Value": "У вас уже есть аккаунт?",
        "sk9Hv6_X+UaRUOHB88t1Hg#Value": "Или зарегистрируйтесь с",
        "viLAwbFCgEykFfLz6nIlEw#Value": "Продолжить",
        "05+Idh4XEUuXubQDn_Jaqw#Value": "Нажимая \"Продолжить\", я согласен с тем, что",
        "0L9t5V69GUWqH4EBUFv2IA#Value": "Нажимая \"Продолжить\", я согласен с тем, что",
        "djEM5nSQdEuRP1YwHhFkfA#ValueExpression.-374653993.1": "Введите ваш адрес электронной почты",
        "rds1k5TSDES69x+yqh7kWw#Value": "Электронная почта",
        "xKYtyF2ZAEC5BFyvUCEUZQ#Value": "Станьте партнером Deriv",
        "dqQQL1AfRkWrhX_057RFtQ#Value": "Рекомендуйте трейдеров и зарабатывайте до 45% комиссий.",
        "8emUWCB8GkGEI0nX00eBAA#Value": "Поддержка 24/7, когда вам это нужно",
        "HFo2TwnWNkq34L7I6n52ag#Value": "Более 1 миллиона клиентов в 190 странах",
        "cm5WkDzsTUGV432ue4a_Mw#Value": "Более 47 миллионов USD выплачено, выводите в любое время",
        "H5ORjX4MREGP9PO_Fsleqw#Value": "Присоединяйтесь к глобальной сети из более чем 60 000 партнеров уже сегодня!"
    };
});

define("PartnersHub.Signup.Signup.mvc$translationsResources", ["exports", "PartnersHub.Signup.Signup.mvc$translationsResources.ar-001", "PartnersHub.Signup.Signup.mvc$translationsResources.de-DE", "PartnersHub.Signup.Signup.mvc$translationsResources.es-ES", "PartnersHub.Signup.Signup.mvc$translationsResources.fr-FR", "PartnersHub.Signup.Signup.mvc$translationsResources.it-IT", "PartnersHub.Signup.Signup.mvc$translationsResources.pl-PL", "PartnersHub.Signup.Signup.mvc$translationsResources.pt-PT", "PartnersHub.Signup.Signup.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_Signup_Signup_mvc_translationsResources_ar001, PartnersHub_Signup_Signup_mvc_translationsResources_deDE, PartnersHub_Signup_Signup_mvc_translationsResources_esES, PartnersHub_Signup_Signup_mvc_translationsResources_frFR, PartnersHub_Signup_Signup_mvc_translationsResources_itIT, PartnersHub_Signup_Signup_mvc_translationsResources_plPL, PartnersHub_Signup_Signup_mvc_translationsResources_ptPT, PartnersHub_Signup_Signup_mvc_translationsResources_ruRU) {
    return {
        "ar-001": {
            "translations": PartnersHub_Signup_Signup_mvc_translationsResources_ar001,
            "isRTL": true
        },
        "de-DE": {
            "translations": PartnersHub_Signup_Signup_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_Signup_Signup_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_Signup_Signup_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_Signup_Signup_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_Signup_Signup_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_Signup_Signup_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_Signup_Signup_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});