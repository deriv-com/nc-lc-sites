define("tradershub.RealAccountCreation.TermsOfUse.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.controller", "tradershub.controller", "OutSystemsUI.controller$IsPhone", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_bc7a92cde0807afeabb9fb7ba2ef9c4cStructure", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure", "tradershub.controller$SyncAccountInfo", "tradershub.controller$NewAccountReal"], function(OSRuntimeCore, tradershubModel, OutSystemsUIController, tradershubController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PEP", "pEPVar", "PEP", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("AgreeToTerms", "agreeToTermsVar", "AgreeToTerms", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("ValidFields", "validFieldsVar", "ValidFields", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_bc7a92cde0807afeabb9fb7ba2ef9c4cStructure());
                    }, false, tradershubModel.ST_bc7a92cde0807afeabb9fb7ba2ef9c4cStructure),
                    this.attr("IsDuplicateAccount", "isDuplicateAccountVar", "IsDuplicateAccount", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("IsExecuting", "isExecutingVar", "IsExecuting", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("SpainAgreement", "spainAgreementVar", "SpainAgreement", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
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
            return {
                FatcaDeclaration: OS.Model.ValidationWidgetRecord,
                Checkbox_PEP: OS.Model.ValidationWidgetRecord,
                Checkbox_AgreeToTerm: OS.Model.ValidationWidgetRecord,
                Checkbox_Spain: OS.Model.ValidationWidgetRecord
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

define("tradershub.RealAccountCreation.TermsOfUse.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "tradershub.RealAccountCreation.TermsOfUse.mvc$model", "tradershub.RealAccountCreation.TermsOfUse.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.RealAccountCreationLayout.mvc$view", "@outsystems/runtime-widgets-js", "OutSystemsUI.Utilities.Separator.mvc$view", "OutSystemsUI.Utilities.ButtonLoading.mvc$view", "OutSystemsUI.controller$IsPhone", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_bc7a92cde0807afeabb9fb7ba2ef9c4cStructure", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure", "tradershub.controller$SyncAccountInfo", "tradershub.controller$NewAccountReal"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, React, OSView, tradershub_RealAccountCreation_TermsOfUse_mvc_model, tradershub_RealAccountCreation_TermsOfUse_mvc_controller, tradershubClientVariables, tradershub_Layouts_RealAccountCreationLayout_mvc_view, OSWidgets, OutSystemsUI_Utilities_Separator_mvc_view, OutSystemsUI_Utilities_ButtonLoading_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreation.TermsOfUse";
        }

        static getAttributes() {
            return {
                codeFunction: "TermsOfUse",
                functionKey: "0adda923-6a4f-4926-a000-15897ab1cfc3",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.RealAccountCreation.TermsOfUse.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return ["scripts/tradershub.CachingScript.js"];
        }

        static getBlocks() {
            return [tradershub_Layouts_RealAccountCreationLayout_mvc_view, OutSystemsUI_Utilities_Separator_mvc_view, OutSystemsUI_Utilities_ButtonLoading_mvc_view];
        }

        get modelFactory() {
            return tradershub_RealAccountCreation_TermsOfUse_mvc_model;
        }

        get controllerFactory() {
            return tradershub_RealAccountCreation_TermsOfUse_mvc_controller;
        }

        get title() {

            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            var validationService = controller.validationService;
            var callContext = controller.callContext();
            var asPrimitiveValue = View.asPrimitiveValue;
            var getTranslation = View.getTranslation;
            var _this = this;


            return OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("I6ndCk9qJkmgABWJerHPww#TitleExpression.-1562683983.1", "Terms of use | Deriv");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(tradershub_Layouts_RealAccountCreationLayout_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    Title: "Terms of use",
                    Analytics: model.getCachedValue(idService.getId("VOwsODUdaUKApwXhNIgypg.Analytics"), function() {
                        return function() {
                            var rec = new tradershubModel.ST_0dd6e149ce474591a764bb53175023a1Structure();
                            rec.stepCodenameAttr = "terms_of_use";
                            rec.stepNumberAttr = "4";
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "height: auto;"
                            },
                            style: "full-width",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex flex-direction-column",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold; margin-bottom: 8px;"
                            },
                            text: [$text(getTranslation("VusAJHa2gUa7fnWF5noIAg#Value", "Jurisdiction and choice of law"))],
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), $text(getTranslation("I3sTK7Z6wE6FTk5+eCFklw#Value", "Your account will be opened with Deriv (SVG) LLC, and will be subject to the laws of Saint Vincent and the Grenadines.")), React.createElement(OutSystemsUI_Utilities_Separator_mvc_view, {
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
                                uuid: "4",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex flex-direction-column",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold; margin-bottom: 8px;"
                            },
                            text: [$text(getTranslation("eXC3CAxTc0+k6VK++rLwlQ#Value", "Risk warning"))],
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), $text(getTranslation("_x0u+xX_Pk+f6Z01UcVt1g#Value", "The financial trading services offered on this site are only suitable for customers who accept the possibility of losing all the money they invest and who understand and have experience of the risk involved in the purchase of financial contracts. Transactions in financial contracts carry a high degree of risk. If the contracts you purchased expire as worthless, you will lose all your investment, which includes the contract premium.")), React.createElement(OutSystemsUI_Utilities_Separator_mvc_view, {
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
                                uuid: "7",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex flex-direction-column",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "8"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold; margin-bottom: 8px;"
                            },
                            text: [$text(getTranslation("ym785UB6uEOv0LxAxfmlwg#Value", "FATCA declaration"))],
                            _idProps: {
                                service: idService,
                                uuid: "9"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.AdvancedHtml, {
                            tag: "ol",
                            _idProps: {
                                service: idService,
                                uuid: "10"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.AdvancedHtml, {
                            tag: "li",
                            _idProps: {
                                service: idService,
                                uuid: "11"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $text(getTranslation("BMx7bOIxzUezmaiP7uJzNA#Value", "US citizenship or lawful permanent resident (green card) status"))), React.createElement(OSWidgets.AdvancedHtml, {
                            tag: "li",
                            _idProps: {
                                service: idService,
                                uuid: "12"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $text(getTranslation("91iofZa7LUu0QF2w2HZr5g#Value", "A US birthplace"))), React.createElement(OSWidgets.AdvancedHtml, {
                            tag: "li",
                            _idProps: {
                                service: idService,
                                uuid: "13"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $text(getTranslation("UDoEQvO1_UiDZGRjPCadow#Value", "A US residence address or a US correspondence address (including a US PO box)"))), React.createElement(OSWidgets.AdvancedHtml, {
                            tag: "li",
                            _idProps: {
                                service: idService,
                                uuid: "14"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $text(getTranslation("hOVLqMM7LUC4cFFFmAzhDQ#Value", "Standing instructions to transfer funds to an account maintained in the United States, or directions regularly received from a US address"))), React.createElement(OSWidgets.AdvancedHtml, {
                            tag: "li",
                            _idProps: {
                                service: idService,
                                uuid: "15"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $text(getTranslation("7he_rjhVW0WJl65CjTu67g#Value", "An “in care of” address or a “hold mail” address that is the sole address with respect to the client"))), React.createElement(OSWidgets.AdvancedHtml, {
                            tag: "li",
                            _idProps: {
                                service: idService,
                                uuid: "16"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $text(getTranslation("RquJsScZek2gVLMPonVWtg#Value", "A power of attorney or signatory authority granted to a person with a US address")))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "17"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $text(getTranslation("Yt8YpD6lJUyGEx4M60aN1g#Value", "If any of the above applies to you, select ")), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-weight: bold;"
                            },
                            text: [$text(getTranslation("NJ4r1N8vaEm5zYwJXiea9A#Value", "Yes"))],
                            _idProps: {
                                service: idService,
                                uuid: "18"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), $text(getTranslation("5qoceU1ez0yLpAeHjUX7RQ#Value", ". Otherwise, select ")), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-weight: bold;"
                            },
                            text: [$text(getTranslation("4gpmc3q+30WgOIUdx+UR+A#Value", "No"))],
                            _idProps: {
                                service: idService,
                                uuid: "19"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), $text(getTranslation("xJFBmj1O3U6dwarP4LsyLQ#Value", "."))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: left;"
                            },
                            style: "",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "20"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.RadioGroup, {
                            _validationProps: {
                                validationService: validationService
                            },
                            enabled: true,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: false,
                            style: "radio-group",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getRealSignupFatcaDeclaration(), function(value) {
                                tradershubClientVariables.setRealSignupFatcaDeclaration(value);
                            }),
                            _idProps: {
                                service: idService,
                                name: "FatcaDeclaration"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.RadioButton, {
                            enabled: true,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "1",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "Yes"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $text(getTranslation("pRjPQzGlgUSZxMS3u7A8+w#Value", "Yes"))), React.createElement(OSWidgets.RadioButton, {
                            enabled: true,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "0",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "No"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $text(getTranslation("WZWbOH6yRkai3UAR8iY76A#Value", "No")))), $if(model.variables.validFieldsVar.fatcaDeclareAttr, false, this, function() {
                            return [];
                        }, function() {
                            return [React.createElement(OSWidgets.Expression, {
                                style: "text-primary",
                                value: "This is required.",
                                _idProps: {
                                    service: idService,
                                    uuid: "24"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        })), React.createElement(OutSystemsUI_Utilities_Separator_mvc_view, {
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
                                uuid: "25",
                                alias: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex flex-direction-column",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "26"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold; margin-bottom: 8px;"
                            },
                            text: [$text(getTranslation("r2Yxl65wUk+wtwYbEcyPGw#Value", "Real accounts are not available to politically exposed persons (PEPs)"))],
                            _idProps: {
                                service: idService,
                                uuid: "27"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), $text(getTranslation("pO86_0W3HUmaXyUXXwdp8Q#Value", "A politically exposed person (PEP) is someone appointed with a prominent public position. Close associates and family members of a PEP are also considered to be PEPs.")), React.createElement(OutSystemsUI_Utilities_Separator_mvc_view, {
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
                                uuid: "28",
                                alias: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-bottom: 16px;"
                            },
                            style: "display-flex flex-direction-column",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "29"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-bottom: 0px;"
                            },
                            style: "display-flex align-items-center gap-s checkbox-container",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "30"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Checkbox, {
                            _validationProps: {
                                validationService: validationService
                            },
                            enabled: true,
                            style: "checkbox",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, model.variables.pEPVar, function(value) {
                                model.variables.pEPVar = value;
                            }),
                            _idProps: {
                                service: idService,
                                name: "Checkbox_PEP"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Label, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "text-neutral-9",
                            targetWidget: "Checkbox_PEP",
                            _idProps: {
                                service: idService,
                                uuid: "32"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            style: "text-neutral-9",
                            text: [$text(getTranslation("fzXmFrM4eE6Ln7yxgEEoYA#Value", "I am not a PEP and have never been a PEP."))],
                            _idProps: {
                                service: idService,
                                uuid: "33"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), $if(model.variables.validFieldsVar.pEPAttr, false, this, function() {
                            return [];
                        }, function() {
                            return [React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "margin-top: 8px;"
                                },
                                style: "text-primary",
                                text: [$text(getTranslation("xMC4dNCQPU2RdjpgCxCsqQ#Value", "This is required."))],
                                _idProps: {
                                    service: idService,
                                    uuid: "34"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex align-items-center gap-s checkbox-container",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "35"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Checkbox, {
                            _validationProps: {
                                validationService: validationService
                            },
                            enabled: true,
                            style: "checkbox",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, model.variables.agreeToTermsVar, function(value) {
                                model.variables.agreeToTermsVar = value;
                            }),
                            _idProps: {
                                service: idService,
                                name: "Checkbox_AgreeToTerm"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex align-items-center",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "37"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            style: "text-neutral-9",
                            text: [$text(getTranslation("QOwN3wQrYEW0TKYCWSMUpQ#Value", "I agree to the"))],
                            _idProps: {
                                service: idService,
                                uuid: "38"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Link, {
                            enabled: true,
                            extendedProperties: {
                                target: "_blank"
                            },
                            gridProperties: {
                                marginLeft: "4px"
                            },
                            style: "text-neutral-9",
                            transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                            url: OS.Navigation.generateScreenURL("https://deriv.com/terms-and-conditions#clients", {}),
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "39"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "color: #272B30; font-weight: bold; text-decoration: underline;"
                            },
                            style: "text-neutral-9",
                            text: [$text(getTranslation("JPwweFvZvkOanle2ZaHzsQ#Value", "terms and conditions"))],
                            _idProps: {
                                service: idService,
                                uuid: "40"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Text, {
                            style: "text-neutral-9",
                            text: [$text(getTranslation("phRFM74P5EuqgZwaULHEhw#Value", "."))],
                            _idProps: {
                                service: idService,
                                uuid: "41"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), $if(model.variables.validFieldsVar.agreeToTermsAttr, false, this, function() {
                            return [];
                        }, function() {
                            return [React.createElement(OSWidgets.Expression, {
                                extendedProperties: {
                                    style: "margin-top: 8px;"
                                },
                                style: "text-primary",
                                value: "This is required.",
                                _idProps: {
                                    service: idService,
                                    uuid: "42"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }), $if(tradershubClientVariables.getIsSpain(), false, this, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "margin-bottom: 16px;"
                                },
                                style: "display-flex flex-direction-column",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "43"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "margin-bottom: 0px; margin-top: 16px;"
                                },
                                style: "display-flex align-items-center gap-s checkbox-container",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "44"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Checkbox, {
                                _validationProps: {
                                    validationService: validationService
                                },
                                enabled: true,
                                style: "checkbox",
                                variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, model.variables.spainAgreementVar, function(value) {
                                    model.variables.spainAgreementVar = value;
                                }),
                                _idProps: {
                                    service: idService,
                                    name: "Checkbox_Spain"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Label, {
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                targetWidget: "Checkbox_Spain",
                                _idProps: {
                                    service: idService,
                                    uuid: "46"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                style: "text-neutral-9",
                                text: [$text(getTranslation("bfzheCJXeUKMukyaueftxg#Value", "I hereby confirm that my request for opening an account with Deriv Investments (Europe) Ltd is made on my own initiative."))],
                                _idProps: {
                                    service: idService,
                                    uuid: "47"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }))), $if(model.variables.validFieldsVar.spainAgreementAttr, false, this, function() {
                                return [];
                            }, function() {
                                return [React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "margin-top: 8px;"
                                    },
                                    style: "text-primary",
                                    text: [$text(getTranslation("UjFQ4fTUAkOlO+3KUyUAHQ#Value", "This is required."))],
                                    _idProps: {
                                        service: idService,
                                        uuid: "48"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })];
                            }))];
                        }, function() {
                            return [];
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: right;"
                            },
                            style: "btn-container margin-top-base",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "49"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OutSystemsUI_Utilities_ButtonLoading_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                ShowLabelOnLoading: true,
                                IsLoading: model.variables.isExecutingVar
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
                                uuid: "50",
                                alias: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                button: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Button, {
                                        enabled: !(model.variables.isExecutingVar),
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        isDefault: false,
                                        onClick: function() {
                                            return Promise.resolve().then(function() {
                                                var eventHandlerContext = callContext.clone();
                                                return controller.buttonOnClick$Action(controller.callContext(eventHandlerContext));
                                            });;
                                        },
                                        style: "btn btn-primary",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "51"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "osui-btn-loading__spinner-animation",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "52"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), $text(getTranslation("BWpnlDXN0EGrgGtZ3b9AKw#Value", "Create account")))];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.isExecutingVar)]
                        }))), React.createElement(OSWidgets.Popup, {
                            extendedProperties: {
                                style: "border-radius: 8px; padding: 0px;"
                            },
                            showPopup: model.variables.isDuplicateAccountVar,
                            style: "popup-dialog popup_account-already-exists",
                            _idProps: {
                                service: idService,
                                uuid: "53"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: ("padding: 24px; text-align: center;" + ((OutSystemsUIController.default.isPhone$Action(callContext).isPhoneOut) ? (" text-align: center;\r\n  padding: 16px;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  min-height: 0;\r\n  max-height: 100%;\r\n  ") : ("")))
                            },
                            style: "full-width full-height",
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
                                style: "margin-bottom: 24px; text-align: right;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "55"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Link, {
                            enabled: true,
                            onClick: function() {
                                var eventHandlerContext = callContext.clone();
                                controller.closeDuplicateAccountPopup$Action(controller.callContext(eventHandlerContext));

                                ;
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "56"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneMDClose.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "57"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            visible: model.getCachedValue(idService.getId("ieja6jvSJEmadJWTrtmDlg.Visible"), function() {
                                return OutSystemsUIController.default.isPhone$Action(callContext).isPhoneOut;
                            }),
                            _idProps: {
                                service: idService,
                                uuid: "58"
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
                                Space: tradershubModel.staticEntities.space.small
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
                                alias: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "60"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-bottom: 24px; text-align: center;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "61"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.illustration.svg"),
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
                                style: "margin-bottom: 24px;"
                            },
                            style: "display-flex flex-direction-column gap-s",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "63"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 18px; font-weight: bold;"
                            },
                            text: [$text(getTranslation("PwNGqEkCGECFPIKR3FeqVg#Value", "Account already exists"))],
                            _idProps: {
                                service: idService,
                                uuid: "64"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), $text(getTranslation("UmktsKX6n0KmYFqdW2oPjA#Value", "If you think this is a mistake, contact us via live chat.")))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex flex-direction-column gap-s",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "65"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            visible: model.getCachedValue(idService.getId("xrIGUibJAEeW4EpJFzC7Ag.Visible"), function() {
                                return OutSystemsUIController.default.isPhone$Action(callContext).isPhoneOut;
                            }),
                            _idProps: {
                                service: idService,
                                uuid: "66"
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
                                Space: tradershubModel.staticEntities.space.small
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
                                uuid: "67",
                                alias: "8"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })), React.createElement(OSWidgets.Button, {
                            enabled: true,
                            extendedProperties: {
                                style: "height: 40px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            isDefault: false,
                            onClick: function() {
                                try {
                                    OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "personal-details", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade), null, true);
                                } catch (ex) {
                                    if (((ex.name) !== ("RedirectOccurredException"))) {
                                        throw ex;
                                    }

                                };
                            },
                            style: "btn btn-primary full-width",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "68"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-weight: 500;"
                            },
                            text: [$text(getTranslation("MuFyNHS4c0+5HdSI5jqy+Q#Value", "Try again"))],
                            _idProps: {
                                service: idService,
                                uuid: "69"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Button, {
                            enabled: true,
                            extendedProperties: {
                                style: "height: 40px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent",
                                marginLeft: "0"
                            },
                            isDefault: false,
                            onClick: function() {
                                var eventHandlerContext = callContext.clone();
                                controller.liveChatOnClick$Action(controller.callContext(eventHandlerContext));

                                ;
                            },
                            style: "btn full-width",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "70"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-weight: 500;"
                            },
                            text: [$text(getTranslation("QfmkX07qmkClBghhnPprPA#Value", "Live chat"))],
                            _idProps: {
                                service: idService,
                                uuid: "71"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })))))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.isDuplicateAccountVar), asPrimitiveValue(model.variables.isExecutingVar), asPrimitiveValue(model.variables.spainAgreementVar), asPrimitiveValue(tradershubClientVariables.getIsSpain()), asPrimitiveValue(model.variables.agreeToTermsVar), asPrimitiveValue(model.variables.pEPVar), asPrimitiveValue(model.variables.validFieldsVar.spainAgreementAttr), asPrimitiveValue(model.variables.validFieldsVar.agreeToTermsAttr), asPrimitiveValue(model.variables.validFieldsVar.pEPAttr), asPrimitiveValue(model.variables.validFieldsVar.fatcaDeclareAttr), asPrimitiveValue(tradershubClientVariables.getRealSignupFatcaDeclaration())]
            }));
        }
    }

    return View;
});
define("tradershub.RealAccountCreation.TermsOfUse.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.RealAccountCreation.TermsOfUse.mvc$translationsResources", "tradershub.RealAccountCreation.controller", "tradershub.RealAccountCreation.TermsOfUse.mvc$controller.ButtonOnClick.RudderStackFailureJS", "tradershub.RealAccountCreation.TermsOfUse.mvc$controller.ButtonOnClick.ValidateJS", "tradershub.RealAccountCreation.TermsOfUse.mvc$controller.ButtonOnClick.RudderStackSuccessJS", "tradershub.RealAccountCreation.TermsOfUse.mvc$controller.LiveChatOnClick.SyncLocalStorageJS", "OutSystemsUI.controller$IsPhone", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_bc7a92cde0807afeabb9fb7ba2ef9c4cStructure", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure", "tradershub.controller$SyncAccountInfo", "tradershub.controller$NewAccountReal"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, tradershubLanguageResources, tradershubClientVariables, tradershub_RealAccountCreation_TermsOfUse_mvc_TranslationsResources, tradershub_RealAccountCreationController, tradershub_RealAccountCreation_TermsOfUse_mvc_controller_ButtonOnClick_RudderStackFailureJS, tradershub_RealAccountCreation_TermsOfUse_mvc_controller_ButtonOnClick_ValidateJS, tradershub_RealAccountCreation_TermsOfUse_mvc_controller_ButtonOnClick_RudderStackSuccessJS, tradershub_RealAccountCreation_TermsOfUse_mvc_controller_LiveChatOnClick_SyncLocalStorageJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, tradershub_RealAccountCreation_TermsOfUse_mvc_TranslationsResources);
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
            get _onReady$Action() {
                if (!(this.hasOwnProperty("__onReady$Action"))) {
                    this.__onReady$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnReady", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnReady");
                                span.setAttribute("outsystems.function.key", "3244f80f-f7c9-4a3e-be98-bb55bd75cc60");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
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

            get _closeDuplicateAccountPopup$Action() {
                if (!(this.hasOwnProperty("__closeDuplicateAccountPopup$Action"))) {
                    this.__closeDuplicateAccountPopup$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("CloseDuplicateAccountPopup", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "CloseDuplicateAccountPopup");
                                span.setAttribute("outsystems.function.key", "ab14818b-172f-4895-be1e-925fcd7653b6");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("CloseDuplicateAccountPopup");
                                callContext = controller.callContext(callContext);
                                // IsDuplicateAccount = False
                                model.variables.isDuplicateAccountVar = false;
                                // Execute Action: SyncAccountInfo
                                tradershubController.default.syncAccountInfo$Action(callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__closeDuplicateAccountPopup$Action;
            }
            set _closeDuplicateAccountPopup$Action(value) {
                this.__closeDuplicateAccountPopup$Action = value;
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
                                span.setAttribute("outsystems.function.key", "d14e61b8-2103-479e-bf5a-8982bde3717b");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                // RealSignupCurrentStep = If
                                tradershubClientVariables.setRealSignupCurrentStep(((tradershubClientVariables.getRealSignupIsIDVSupported()) ? (6) : (5)));
                                // RealSignupFatcaDeclaration = 0
                                tradershubClientVariables.setRealSignupFatcaDeclaration("0");
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

            get _buttonOnClick$Action() {
                if (!(this.hasOwnProperty("__buttonOnClick$Action"))) {
                    this.__buttonOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ButtonOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ButtonOnClick");
                                span.setAttribute("outsystems.function.key", "d6772da2-9f7d-470e-9a68-97fe262db5c7");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("ButtonOnClick");
                                callContext = controller.callContext(callContext);
                                var newAccountRealVar = new OS.DataTypes.VariableHolder();
                                var validateJSResult = new OS.DataTypes.VariableHolder();
                                var jSONDeserializeTermsOfUseValidFieldVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_bc7a92cde0807afeabb9fb7ba2ef9c4cStructure))());
                                return OS.Flow.executeAsyncFlow(function() {
                                    return OS.Logger.startActiveSpan("Validate", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "Validate");
                                            span.setAttribute("outsystems.function.key", "cc797232-d2b4-47a8-abc8-c095915dd0b9");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteAsyncJSNode(tradershub_RealAccountCreation_TermsOfUse_mvc_controller_ButtonOnClick_ValidateJS, "Validate", "ButtonOnClick", {
                                                FatcaDeclare: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupFatcaDeclaration(), OS.DataTypes.DataTypes.Text),
                                                AgreeToTerms: OS.DataConversion.JSNodeParamConverter.to(model.variables.agreeToTermsVar, OS.DataTypes.DataTypes.Boolean),
                                                PEP: OS.DataConversion.JSNodeParamConverter.to(model.variables.pEPVar, OS.DataTypes.DataTypes.Boolean),
                                                SpainAgreement: OS.DataConversion.JSNodeParamConverter.to(model.variables.spainAgreementVar, OS.DataTypes.DataTypes.Boolean),
                                                ValidFields: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                                IsValid: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                                            }, function($parameters) {
                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.RealAccountCreation.TermsOfUse.ButtonOnClick$validateJSResult"))();
                                                jsNodeResult.validFieldsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ValidFields, OS.DataTypes.DataTypes.Text);
                                                jsNodeResult.isValidOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsValid, OS.DataTypes.DataTypes.Boolean);
                                                return jsNodeResult;
                                            }, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1).then(function(results) {
                                        validateJSResult.value = results;
                                    }).then(function() {
                                        return OS.Flow.executeSequence(function() {
                                            if ((validateJSResult.value.isValidOut)) {
                                                // ValidFields.FatcaDeclare = True
                                                model.variables.validFieldsVar.fatcaDeclareAttr = true;
                                                // ValidFields.AgreeToTerms = True
                                                model.variables.validFieldsVar.agreeToTermsAttr = true;
                                                // ValidFields.PEP = True
                                                model.variables.validFieldsVar.pEPAttr = true;
                                                // IsExecuting = True
                                                model.variables.isExecutingVar = true;
                                                // ValidFields.SpainAgreement = True
                                                model.variables.validFieldsVar.spainAgreementAttr = true;
                                                // RealSignupCurrentStep = 7
                                                tradershubClientVariables.setRealSignupCurrentStep(7);
                                                OS.Logger.startActiveSpan("RudderStackSuccess", function(span) {
                                                    if (span) {
                                                        span.setAttribute("code.function", "RudderStackSuccess");
                                                        span.setAttribute("outsystems.function.key", "dc630acf-8b92-4c80-8122-fff598089c6e");
                                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                                    }

                                                    try {
                                                        return controller.safeExecuteJSNode(tradershub_RealAccountCreation_TermsOfUse_mvc_controller_ButtonOnClick_RudderStackSuccessJS, "RudderStackSuccess", "ButtonOnClick", null, function($parameters) {}, {}, {});
                                                    } finally {
                                                        if (span) {
                                                            span.end();
                                                        }

                                                    }

                                                }, 1);
                                                // Execute Action: NewAccountReal
                                                model.flush();
                                                return tradershubController.default.newAccountReal$Action(callContext).then(function(value) {
                                                    newAccountRealVar.value = value;
                                                }).then(function() {
                                                    if ((newAccountRealVar.value.isSuccessOut)) {
                                                        // IsExecuting = False
                                                        model.variables.isExecutingVar = false;
                                                    } else {
                                                        OS.Logger.startActiveSpan("RudderStackFailure", function(span) {
                                                            if (span) {
                                                                span.setAttribute("code.function", "RudderStackFailure");
                                                                span.setAttribute("outsystems.function.key", "cb30d76f-9c0a-493c-a247-a724bb4f9078");
                                                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                                            }

                                                            try {
                                                                return controller.safeExecuteJSNode(tradershub_RealAccountCreation_TermsOfUse_mvc_controller_ButtonOnClick_RudderStackFailureJS, "RudderStackFailure", "ButtonOnClick", null, function($parameters) {}, {}, {});
                                                            } finally {
                                                                if (span) {
                                                                    span.end();
                                                                }

                                                            }

                                                        }, 1);
                                                        // IsDuplicateAccount = NewAccountReal.ErrorCode = "DuplicateAccount"
                                                        model.variables.isDuplicateAccountVar = (newAccountRealVar.value.errorCodeOut === "DuplicateAccount");
                                                        // IsExecuting = False
                                                        model.variables.isExecutingVar = false;
                                                        if ((((newAccountRealVar.value.errorCodeOut) !== ("DuplicateAccount")))) {
                                                            OS.FeedbackMessageService.showFeedbackMessage(newAccountRealVar.value.errorMessageOut, /*Info*/ 0);
                                                        }

                                                    }

                                                });
                                            } else {
                                                // JSON Deserialize: JSONDeserializeTermsOfUseValidField
                                                jSONDeserializeTermsOfUseValidFieldVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateJSResult.value.validFieldsOut, tradershubModel.ST_bc7a92cde0807afeabb9fb7ba2ef9c4cStructure, false);
                                                // ValidFields.FatcaDeclare = JSONDeserializeTermsOfUseValidField.Data.FatcaDeclare
                                                model.variables.validFieldsVar.fatcaDeclareAttr = jSONDeserializeTermsOfUseValidFieldVar.value.dataOut.fatcaDeclareAttr;
                                                // ValidFields.AgreeToTerms = JSONDeserializeTermsOfUseValidField.Data.AgreeToTerms
                                                model.variables.validFieldsVar.agreeToTermsAttr = jSONDeserializeTermsOfUseValidFieldVar.value.dataOut.agreeToTermsAttr;
                                                // ValidFields.PEP = JSONDeserializeTermsOfUseValidField.Data.PEP
                                                model.variables.validFieldsVar.pEPAttr = jSONDeserializeTermsOfUseValidFieldVar.value.dataOut.pEPAttr;
                                                // ValidFields.SpainAgreement = JSONDeserializeTermsOfUseValidField.Data.SpainAgreement
                                                model.variables.validFieldsVar.spainAgreementAttr = jSONDeserializeTermsOfUseValidFieldVar.value.dataOut.spainAgreementAttr;
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

                return this.__buttonOnClick$Action;
            }
            set _buttonOnClick$Action(value) {
                this.__buttonOnClick$Action = value;
            }

            get _liveChatOnClick$Action() {
                if (!(this.hasOwnProperty("__liveChatOnClick$Action"))) {
                    this.__liveChatOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("LiveChatOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "LiveChatOnClick");
                                span.setAttribute("outsystems.function.key", "f81585c3-6c8f-475a-b6a4-ebd5f7a661d0");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("LiveChatOnClick");
                                callContext = controller.callContext(callContext);
                                OS.Logger.startActiveSpan("SyncLocalStorage", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "SyncLocalStorage");
                                        span.setAttribute("outsystems.function.key", "475a539b-46b2-452a-9a6d-4e3e9f5d464b");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_RealAccountCreation_TermsOfUse_mvc_controller_LiveChatOnClick_SyncLocalStorageJS, "SyncLocalStorage", "LiveChatOnClick", {
                                            ActiveLoginId: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getActiveLoginId(), OS.DataTypes.DataTypes.Text)
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

                return this.__liveChatOnClick$Action;
            }
            set _liveChatOnClick$Action(value) {
                this.__liveChatOnClick$Action = value;
            }


            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "3244f80f-f7c9-4a3e-be98-bb55bd75cc60");
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

            closeDuplicateAccountPopup$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("CloseDuplicateAccountPopup__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "CloseDuplicateAccountPopup");
                        span.setAttribute("outsystems.function.key", "ab14818b-172f-4895-be1e-925fcd7653b6");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._closeDuplicateAccountPopup$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "d14e61b8-2103-479e-bf5a-8982bde3717b");
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

            buttonOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ButtonOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ButtonOnClick");
                        span.setAttribute("outsystems.function.key", "d6772da2-9f7d-470e-9a68-97fe262db5c7");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._buttonOnClick$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            liveChatOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("LiveChatOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "LiveChatOnClick");
                        span.setAttribute("outsystems.function.key", "f81585c3-6c8f-475a-b6a4-ebd5f7a661d0");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._liveChatOnClick$Action, callContext);
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
                        return tradershub_RealAccountCreationController.default.handleError(ex, this.callContext());
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
        Controller.registerVariableGroupType("tradershub.RealAccountCreation.TermsOfUse.ButtonOnClick$validateJSResult", [{
            name: "ValidFields",
            attrName: "validFieldsOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "IsValid",
            attrName: "isValidOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.RealAccountCreation.TermsOfUse.mvc$controller.ButtonOnClick.RudderStackFailureJS", [], function() {
    return function($actions, $roles, $public) {
        cacheTrackEvents.track({
            name: "ce_real_account_signup_form",
            properties: {
                action: "real_signup_error",
                step_num: 4,
                step_codename: "terms_of_use",
                form_name: "real_account_signup_form_outsystems"
            }
        });
    };
});

define("tradershub.RealAccountCreation.TermsOfUse.mvc$controller.ButtonOnClick.ValidateJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        return new Promise(function($resolve, $reject) {
            const payload = {
                FatcaDeclare: $parameters.FatcaDeclare,
                PEP: $parameters.PEP,
                AgreeToTerms: $parameters.AgreeToTerms,
                // SpainAgreement: $parameters.SpainAgreement
            }


            const validationSchema = yup.object().shape({
                FatcaDeclare: yup.string().required("This is required"),
                PEP: yup.bool().oneOf([true], 'This is required'),
                AgreeToTerms: yup.bool().oneOf([true], 'This is required'),
                // SpainAgreement: yup.bool().oneOf([true], 'This is required'),

            });

            const {
                validFields
            } = validate(validationSchema, payload)
            $parameters.ValidFields = JSON.stringify(validFields)
            $parameters.IsValid = Object.values(validFields).every(v => v)
            $resolve()
        });
    };
});

define("tradershub.RealAccountCreation.TermsOfUse.mvc$controller.ButtonOnClick.RudderStackSuccessJS", [], function() {
    return function($actions, $roles, $public) {
        cacheTrackEvents.track({
            name: "ce_real_account_signup_form",
            properties: {
                action: "step_passed",
                form_name: "real_account_signup_form_outsystems",
                step_num: 4,
                step_codename: "terms_and_conditions",
            }
        });
    };
});

define("tradershub.RealAccountCreation.TermsOfUse.mvc$controller.LiveChatOnClick.SyncLocalStorageJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        let origin = `https://app.deriv.com`

        if (window.location.hostname !== "hub.deriv.com") {
            origin = `https://staging-app.deriv.com`
        }

        const iframe = document.getElementById('localstorage-sync');
        if (iframe) {
            iframe?.contentWindow.postMessage({
                    key: 'client.accounts',
                    value: localStorage.getItem('client.accounts'),
                },
                origin
            );

            iframe?.contentWindow.postMessage({
                    key: 'active_loginid',
                    value: $parameters.ActiveLoginId,
                },
                origin
            );
        }


        if (window.JSCookies) {
            // expiry time in minutes
            const inOneMinute = new Date(new Date().getTime() + 1 * 60 * 1000);

            JSCookies.set('client.accounts', localStorage.getItem('client.accounts'), {
                domain: ".deriv.com",
                expires: inOneMinute,
                secure: true
            })
            JSCookies.set('active_loginid', $parameters.ActiveLoginId, {
                domain: ".deriv.com",
                expires: inOneMinute,
                secure: true
            })
        }

        setTimeout(() => {
            const hostname = window.location.hostname;
            if (hostname === "hub.deriv.com") {
                return window.open('https://app.deriv.com/redirect?action=livechat', '_blank', 'noopener, noreferrer');
            }

            window.open('https://staging-app.deriv.com/redirect?action=livechat', '_blank', 'noopener, noreferrer');
        }, 100)


    };
});


define("tradershub.RealAccountCreation.TermsOfUse.mvc$translationsResources.fr-FR", [], function() {
    return {
        "QfmkX07qmkClBghhnPprPA#Value": "Chat en direct",
        "MuFyNHS4c0+5HdSI5jqy+Q#Value": "Réessayez",
        "UmktsKX6n0KmYFqdW2oPjA#Value": "Si vous pensez qu\'il s\'agit d\'une erreur, contactez-nous via le chat en direct.",
        "PwNGqEkCGECFPIKR3FeqVg#Value": "Un compte existe déjà",
        "BWpnlDXN0EGrgGtZ3b9AKw#Value": "Créer un compte",
        "UjFQ4fTUAkOlO+3KUyUAHQ#Value": "Ceci est requis.",
        "bfzheCJXeUKMukyaueftxg#Value": "Je confirme par la présente que ma demande d\'ouverture d\'un compte avec Deriv Investments (Europe) Ltd est faite de ma propre initiative.",
        "phRFM74P5EuqgZwaULHEhw#Value": ".",
        "JPwweFvZvkOanle2ZaHzsQ#Value": "termes et conditions",
        "QOwN3wQrYEW0TKYCWSMUpQ#Value": "J\'accepte les",
        "xMC4dNCQPU2RdjpgCxCsqQ#Value": "Ceci est requis.",
        "fzXmFrM4eE6Ln7yxgEEoYA#Value": "Je ne suis pas un PEP et je n\'ai jamais été un PEP.",
        "pO86_0W3HUmaXyUXXwdp8Q#Value": "Une personne politiquement exposée (PEP) est quelqu\'un qui occupe une fonction publique importante. Les proches et les membres de la famille d\'une PEP sont également considérés comme des PEP.",
        "r2Yxl65wUk+wtwYbEcyPGw#Value": "Les comptes réels ne sont pas disponibles pour les personnes politiquement exposées (PEP)",
        "WZWbOH6yRkai3UAR8iY76A#Value": "Non",
        "pRjPQzGlgUSZxMS3u7A8+w#Value": "Oui",
        "xJFBmj1O3U6dwarP4LsyLQ#Value": ".",
        "4gpmc3q+30WgOIUdx+UR+A#Value": "Non",
        "5qoceU1ez0yLpAeHjUX7RQ#Value": "Sinon, sélectionnez",
        "NJ4r1N8vaEm5zYwJXiea9A#Value": "Oui",
        "Yt8YpD6lJUyGEx4M60aN1g#Value": "Si l\'un des éléments ci-dessus vous concerne, sélectionnez",
        "RquJsScZek2gVLMPonVWtg#Value": "Une procuration ou autorité signataire accordée à une personne ayant une adresse aux États-Unis",
        "7he_rjhVW0WJl65CjTu67g#Value": "Une adresse \"à l\'attention de\" ou une adresse \"de rétention de courrier\" qui est la seule adresse concernant le client",
        "hOVLqMM7LUC4cFFFmAzhDQ#Value": "Instructions permanentes pour transférer des fonds vers un compte maintenu aux États-Unis, ou directives régulièrement reçues d\'une adresse américaine",
        "UDoEQvO1_UiDZGRjPCadow#Value": "Une adresse de résidence aux États-Unis ou une adresse de correspondance aux États-Unis (y compris une boîte postale aux États-Unis)",
        "91iofZa7LUu0QF2w2HZr5g#Value": "Un lieu de naissance aux États-Unis",
        "BMx7bOIxzUezmaiP7uJzNA#Value": "statut de citoyen américain ou de résident permanent légal (carte verte)",
        "ym785UB6uEOv0LxAxfmlwg#Value": "Déclaration FATCA",
        "_x0u+xX_Pk+f6Z01UcVt1g#Value": "Les services de trading financier offerts sur ce site ne conviennent qu\'aux clients qui acceptent la possibilité de perdre tout l\'argent qu\'ils investissent et qui comprennent et ont de l\'expérience avec les risques liés à l\'achat de contrats financiers. Les transactions dans des contrats financiers comportent un degré de risque élevé. Si les contrats que vous avez achetés arrivent à expiration sans valeur, vous perdrez l\'intégralité de votre investissement, y compris la prime du contrat.",
        "eXC3CAxTc0+k6VK++rLwlQ#Value": "Avertissement sur les risques",
        "I3sTK7Z6wE6FTk5+eCFklw#Value": "Votre compte sera ouvert auprès de Deriv (SVG) LLC et sera soumis aux lois de Saint-Vincent-et-les-Grenadines.",
        "VusAJHa2gUa7fnWF5noIAg#Value": "Juridiction et choix de la loi",
        "I6ndCk9qJkmgABWJerHPww#Title": "Conditions d\'utilisation | Deriv",
        "I6ndCk9qJkmgABWJerHPww#TitleExpression.-1562683983.1": "Conditions d\'utilisation | Deriv"
    };
});

define("tradershub.RealAccountCreation.TermsOfUse.mvc$translationsResources", ["exports", "tradershub.RealAccountCreation.TermsOfUse.mvc$translationsResources.fr-FR"], function(exports, tradershub_RealAccountCreation_TermsOfUse_mvc_translationsResources_frFR) {
    return {
        "fr-FR": {
            "translations": tradershub_RealAccountCreation_TermsOfUse_mvc_translationsResources_frFR,
            "isRTL": false
        }
    };
});