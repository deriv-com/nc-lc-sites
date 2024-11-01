define("PartnersHub.Common.CFDCommissionsModal.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.model$ST_0314d78ca6806dcc3e7ca8803a68ff6aStructure"], function(OSRuntimeCore, PartnersHubModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("userInput", "userInputVar", "userInput", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("cfdCommissionsPasswordErrors", "cfdCommissionsPasswordErrorsVar", "cfdCommissionsPasswordErrors", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.ST_0314d78ca6806dcc3e7ca8803a68ff6aStructure());
                    }, false, PartnersHubModel.ST_0314d78ca6806dcc3e7ca8803a68ff6aStructure),
                    this.attr("requiredInputError", "requiredInputErrorVar", "requiredInputError", true, false, OS.DataTypes.DataTypes.Boolean, function() {
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
                CFDPasswordInput: OS.Model.ValidationWidgetRecord
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

define("PartnersHub.Common.CFDCommissionsModal.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Common.CFDCommissionsModal.mvc$model", "PartnersHub.Common.CFDCommissionsModal.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Utilities.InlineSVG.mvc$view", "CustomComponentsOfficial.ButtonVariants.PrimaryButton.mvc$view", "PartnersHub.model$ST_0314d78ca6806dcc3e7ca8803a68ff6aStructure"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_Common_CFDCommissionsModal_mvc_model, PartnersHub_Common_CFDCommissionsModal_mvc_controller, PartnersHubClientVariables, OSWidgets, OutSystemsUI_Utilities_InlineSVG_mvc_view, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Common.CFDCommissionsModal";
        }

        static getAttributes() {
            return {
                codeFunction: "CFDCommissionsModal",
                functionKey: "79f7b6d0-e884-4e66-8e61-7fa9de160bf1",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Common.CFDCommissionsModal.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Utilities_InlineSVG_mvc_view, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Common_CFDCommissionsModal_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Common_CFDCommissionsModal_mvc_controller;
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
                style: "absolute-left absolute-top fixed full-width-vw full-height-vh popup-backdrop cfd-commissions-modal",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "CFDCommissionModalDesktopContainer"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "cfd-commissions-modal-dialog",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "dialog"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "cfd-commissions-modal-header",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "header"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                style: "ph-section-title",
                text: ["Enable CFDs commissions"],
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.AdvancedHtml, {
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.closeButtonOnClick$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                extendedProperties: {
                    className: "cfd-commissions-modal-close"
                },
                tag: "button",
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OutSystemsUI_Utilities_InlineSVG_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    SVGCode: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M16.125 16.875L12 12.7188L7.84375 16.875C7.65625 17.0625 7.34375 17.0625 7.125 16.875C6.9375 16.6562 6.9375 16.3438 7.125 16.1562L11.2812 12L7.15625 7.875C6.9375 7.6875 6.9375 7.375 7.15625 7.15625C7.34375 6.96875 7.65625 6.96875 7.84375 7.15625L12 11.3125L16.125 7.15625C16.3125 6.96875 16.625 6.96875 16.8438 7.15625C17.0312 7.375 17.0312 7.6875 16.8438 7.875L12.6875 12L16.8438 16.1562C17.0312 16.3438 17.0312 16.6562 16.8438 16.875C16.625 17.0625 16.3125 17.0625 16.125 16.875Z\" fill=\"black\" fill-opacity=\"0.72\"/>\r\n</svg>"
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
                    uuid: "5",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "cfd-commissions-modal-body",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "body"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "cfd-commissions-modal-content",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "content"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                style: "cfd-commissions-modal-text font-size-s display-block",
                text: ["Your MT5 account is ready for receiving commissions. Set a password to enable it."],
                _idProps: {
                    service: idService,
                    uuid: "8"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Label, {
                extendedProperties: {
                    className: "font-size-s margin-bottom-s password-input-label"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: idService,
                    uuid: "9"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                text: ["Password"],
                _idProps: {
                    service: idService,
                    name: "InputLabel"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.AdvancedHtml, {
                extendedProperties: {
                    className: "password-input"
                },
                tag: "div",
                _idProps: {
                    service: idService,
                    name: "InputField"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Input, {
                _validationProps: {
                    validationService: validationService
                },
                enabled: true,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: /*Password*/ 1,
                mandatory: true,
                maxLength: 25,
                prompt: "Enter your password",
                style: model.getCachedValue(idService.getId("CFDPasswordInput.Style"), function() {
                    return ((model.variables.requiredInputErrorVar) ? ("form-control padding-right-xxl not-valid") : ("form-control padding-right-xxl"));
                }, function() {
                    return model.variables.requiredInputErrorVar;
                }),
                variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.userInputVar, function(value) {
                    model.variables.userInputVar = value;
                }),
                _idProps: {
                    service: idService,
                    name: "CFDPasswordInput"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.AdvancedHtml, {
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.buttonOnClick$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                extendedProperties: {
                    className: "password-input-button"
                },
                tag: "button",
                _idProps: {
                    service: idService,
                    name: "EyeButton"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.AdvancedHtml, {
                extendedProperties: {
                    className: "hidden"
                },
                tag: "span",
                _idProps: {
                    service: idService,
                    name: "HidePassword"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OutSystemsUI_Utilities_InlineSVG_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    SVGCode: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" width=\"24px\" height=\"24px\" role=\"img\"><path d=\"M9.32 11.813C7.64 13.375 6.508 15.25 6 16.5c.508 1.25 1.64 3.125 3.32 4.688S13.227 24 16 24c2.734 0 4.96-1.25 6.64-2.812 1.68-1.563 2.813-3.438 3.36-4.688-.547-1.25-1.68-3.125-3.36-4.687S18.735 9 16 9c-2.773 0-5 1.25-6.68 2.813M16 7.75c3.125 0 5.664 1.445 7.5 3.164 1.836 1.68 3.047 3.711 3.633 5.117a1.4 1.4 0 0 1 0 .977c-.586 1.367-1.797 3.398-3.633 5.117S19.125 25.25 16 25.25c-3.164 0-5.703-1.406-7.54-3.125-1.835-1.719-3.046-3.75-3.632-5.117a1.4 1.4 0 0 1 0-.977c.586-1.406 1.797-3.437 3.633-5.117C10.297 9.195 12.836 7.75 16 7.75m-3.75 8.75c0 1.367.703 2.578 1.875 3.281 1.133.664 2.578.664 3.75 0 1.133-.703 1.875-1.914 1.875-3.281 0-1.328-.742-2.54-1.875-3.242-1.172-.664-2.617-.664-3.75 0-1.172.703-1.875 1.914-1.875 3.242m8.75 0c0 1.797-.977 3.438-2.5 4.336-1.562.898-3.477.898-5 0A4.97 4.97 0 0 1 11 16.5c0-1.758.938-3.398 2.5-4.297 1.523-.898 3.438-.898 5 0 1.523.899 2.5 2.54 2.5 4.297\"></path></svg>"
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
                    uuid: "15",
                    alias: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            })), React.createElement(OSWidgets.AdvancedHtml, {
                tag: "span",
                _idProps: {
                    service: idService,
                    name: "ShowPassword"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OutSystemsUI_Utilities_InlineSVG_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    SVGCode: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" width=\"24px\" height=\"24px\" role=\"img\"><path d=\"m4.477 6.656 23.789 18.75c.234.196.312.625.078.86a.584.584 0 0 1-.86.117L3.734 7.633c-.273-.195-.351-.625-.117-.86.196-.273.625-.351.86-.117m22.656 10.352c-.39.937-1.094 2.226-2.11 3.476l-.976-.78A14.4 14.4 0 0 0 26 16.5c-.547-1.25-1.68-3.125-3.36-4.687S18.735 9 16 9c-1.562 0-2.969.43-4.18 1.055l-1.054-.86C12.25 8.335 13.969 7.75 16 7.75c3.125 0 5.664 1.445 7.5 3.164 1.836 1.68 3.047 3.711 3.633 5.117a1.4 1.4 0 0 1 0 .977M6.938 12.555l.976.78A12.6 12.6 0 0 0 6 16.5c.508 1.25 1.64 3.125 3.32 4.688S13.227 24 16 24c1.523 0 2.93-.39 4.14-1.016l1.055.86A10.1 10.1 0 0 1 16 25.25c-3.164 0-5.703-1.406-7.54-3.125-1.835-1.719-3.046-3.75-3.632-5.117a1.4 1.4 0 0 1 0-.977c.39-.937 1.094-2.226 2.11-3.476M16 21.5c-2.773 0-5-2.227-5-5 0-.234 0-.469.04-.703l1.21.937A3.73 3.73 0 0 0 16 20.25c.195 0 .43 0 .625-.04l1.21.938A5 5 0 0 1 16 21.5m5-5v.04c0 .233-.04.468-.078.702l-1.211-.937c-.117-1.992-1.719-3.516-3.711-3.516-.234 0-.469 0-.664.04l-1.211-.938c.586-.235 1.21-.391 1.875-.391 2.734 0 5 2.266 5 5\"></path></svg>"
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
                    uuid: "17",
                    alias: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            })))), $if(model.variables.requiredInputErrorVar, false, this, function() {
                return [React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        className: "font-size-xs margin-top-s display-block password-input-error"
                    },
                    text: ["Password is required."],
                    _idProps: {
                        service: idService,
                        name: "RequiredErrorOnSubmit"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }, function() {
                return [];
            }), React.createElement(OSWidgets.AdvancedHtml, {
                extendedProperties: {
                    className: "cfd-commissions-password-policy"
                },
                tag: "ul",
                _idProps: {
                    service: idService,
                    name: "Validations"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.AdvancedHtml, {
                extendedProperties: {
                    className: "display-flex align-items-center gap-s"
                },
                tag: "li",
                _idProps: {
                    service: idService,
                    uuid: "20"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OutSystemsUI_Utilities_InlineSVG_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    SVGCode: "<svg width=\"12\" height=\"13\" viewBox=\"0 0 12 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM4.10156 4.60156C3.86719 4.83594 3.86719 5.1875 4.10156 5.39844L5.20312 6.5L4.10156 7.60156C3.86719 7.83594 3.86719 8.1875 4.10156 8.39844C4.3125 8.63281 4.66406 8.63281 4.875 8.39844L5.97656 7.29688L7.07812 8.39844C7.3125 8.63281 7.66406 8.63281 7.875 8.39844C8.10938 8.1875 8.10938 7.83594 7.875 7.60156L6.77344 6.5L7.875 5.39844C8.10938 5.1875 8.10938 4.83594 7.875 4.60156C7.66406 4.39062 7.3125 4.39062 7.07812 4.60156L5.97656 5.70312L4.875 4.60156C4.66406 4.39062 4.3125 4.39062 4.10156 4.60156Z\" fill=\"#DC2020\"/>\r\n</svg>"
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
                    name: "ErrorIcon",
                    alias: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), React.createElement(OutSystemsUI_Utilities_InlineSVG_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    SVGCode: "<svg width=\"12\" height=\"13\" viewBox=\"0 0 12 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM8.64844 5.39844H8.625C8.85938 5.1875 8.85938 4.83594 8.625 4.60156C8.41406 4.39062 8.0625 4.39062 7.85156 4.60156L5.25 7.22656L4.14844 6.125C3.91406 5.89062 3.5625 5.89062 3.35156 6.125C3.11719 6.33594 3.11719 6.6875 3.35156 6.89844L4.85156 8.39844C5.0625 8.63281 5.41406 8.63281 5.64844 8.39844L8.64844 5.39844Z\" fill=\"#29823B\"/>\r\n</svg>"
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
                    name: "SuccessIcon",
                    alias: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), React.createElement(OutSystemsUI_Utilities_InlineSVG_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    SVGCode: "<svg width=\"12\" height=\"13\" viewBox=\"0 0 12 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M10.875 6.5C10.875 4.76562 9.9375 3.17188 8.4375 2.28125C6.91406 1.41406 5.0625 1.41406 3.5625 2.28125C2.03906 3.17188 1.125 4.76562 1.125 6.5C1.125 8.25781 2.03906 9.85156 3.5625 10.7422C5.0625 11.6094 6.91406 11.6094 8.4375 10.7422C9.9375 9.85156 10.875 8.25781 10.875 6.5ZM0 6.5C0 4.36719 1.125 2.39844 3 1.32031C4.85156 0.242188 7.125 0.242188 9 1.32031C10.8516 2.39844 12 4.36719 12 6.5C12 8.65625 10.8516 10.625 9 11.7031C7.125 12.7812 4.85156 12.7812 3 11.7031C1.125 10.625 0 8.65625 0 6.5Z\" fill=\"black\" fill-opacity=\"0.72\"/>\r\n</svg>"
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
                    name: "OutlineIcon",
                    alias: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), React.createElement(OSWidgets.AdvancedHtml, {
                extendedProperties: {
                    className: "font-size-xs margin-none"
                },
                tag: "p",
                _idProps: {
                    service: idService,
                    uuid: "24"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, "8–25 characters long")), React.createElement(OSWidgets.AdvancedHtml, {
                extendedProperties: {
                    className: "display-flex align-items-center gap-s"
                },
                tag: "li",
                _idProps: {
                    service: idService,
                    uuid: "25"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OutSystemsUI_Utilities_InlineSVG_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    SVGCode: "<svg width=\"12\" height=\"13\" viewBox=\"0 0 12 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM4.10156 4.60156C3.86719 4.83594 3.86719 5.1875 4.10156 5.39844L5.20312 6.5L4.10156 7.60156C3.86719 7.83594 3.86719 8.1875 4.10156 8.39844C4.3125 8.63281 4.66406 8.63281 4.875 8.39844L5.97656 7.29688L7.07812 8.39844C7.3125 8.63281 7.66406 8.63281 7.875 8.39844C8.10938 8.1875 8.10938 7.83594 7.875 7.60156L6.77344 6.5L7.875 5.39844C8.10938 5.1875 8.10938 4.83594 7.875 4.60156C7.66406 4.39062 7.3125 4.39062 7.07812 4.60156L5.97656 5.70312L4.875 4.60156C4.66406 4.39062 4.3125 4.39062 4.10156 4.60156Z\" fill=\"#DC2020\"/>\r\n</svg>"
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
                    name: "ErrorIcon2",
                    alias: "7"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), React.createElement(OutSystemsUI_Utilities_InlineSVG_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    SVGCode: "<svg width=\"12\" height=\"13\" viewBox=\"0 0 12 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM8.64844 5.39844H8.625C8.85938 5.1875 8.85938 4.83594 8.625 4.60156C8.41406 4.39062 8.0625 4.39062 7.85156 4.60156L5.25 7.22656L4.14844 6.125C3.91406 5.89062 3.5625 5.89062 3.35156 6.125C3.11719 6.33594 3.11719 6.6875 3.35156 6.89844L4.85156 8.39844C5.0625 8.63281 5.41406 8.63281 5.64844 8.39844L8.64844 5.39844Z\" fill=\"#29823B\"/>\r\n</svg>"
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
                    name: "SuccessIcon2",
                    alias: "8"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), React.createElement(OutSystemsUI_Utilities_InlineSVG_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    SVGCode: "<svg width=\"12\" height=\"13\" viewBox=\"0 0 12 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M10.875 6.5C10.875 4.76562 9.9375 3.17188 8.4375 2.28125C6.91406 1.41406 5.0625 1.41406 3.5625 2.28125C2.03906 3.17188 1.125 4.76562 1.125 6.5C1.125 8.25781 2.03906 9.85156 3.5625 10.7422C5.0625 11.6094 6.91406 11.6094 8.4375 10.7422C9.9375 9.85156 10.875 8.25781 10.875 6.5ZM0 6.5C0 4.36719 1.125 2.39844 3 1.32031C4.85156 0.242188 7.125 0.242188 9 1.32031C10.8516 2.39844 12 4.36719 12 6.5C12 8.65625 10.8516 10.625 9 11.7031C7.125 12.7812 4.85156 12.7812 3 11.7031C1.125 10.625 0 8.65625 0 6.5Z\" fill=\"black\" fill-opacity=\"0.72\"/>\r\n</svg>"
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
                    name: "OutlineIcon2",
                    alias: "9"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), React.createElement(OSWidgets.AdvancedHtml, {
                extendedProperties: {
                    className: "font-size-xs margin-none"
                },
                tag: "p",
                _idProps: {
                    service: idService,
                    uuid: "29"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, "At least one uppercase and one lowercase letter")), React.createElement(OSWidgets.AdvancedHtml, {
                extendedProperties: {
                    className: "display-flex align-items-center gap-s"
                },
                tag: "li",
                _idProps: {
                    service: idService,
                    uuid: "30"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OutSystemsUI_Utilities_InlineSVG_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    SVGCode: "<svg width=\"12\" height=\"13\" viewBox=\"0 0 12 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM4.10156 4.60156C3.86719 4.83594 3.86719 5.1875 4.10156 5.39844L5.20312 6.5L4.10156 7.60156C3.86719 7.83594 3.86719 8.1875 4.10156 8.39844C4.3125 8.63281 4.66406 8.63281 4.875 8.39844L5.97656 7.29688L7.07812 8.39844C7.3125 8.63281 7.66406 8.63281 7.875 8.39844C8.10938 8.1875 8.10938 7.83594 7.875 7.60156L6.77344 6.5L7.875 5.39844C8.10938 5.1875 8.10938 4.83594 7.875 4.60156C7.66406 4.39062 7.3125 4.39062 7.07812 4.60156L5.97656 5.70312L4.875 4.60156C4.66406 4.39062 4.3125 4.39062 4.10156 4.60156Z\" fill=\"#DC2020\"/>\r\n</svg>"
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
                    name: "ErrorIcon3",
                    alias: "10"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), React.createElement(OutSystemsUI_Utilities_InlineSVG_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    SVGCode: "<svg width=\"12\" height=\"13\" viewBox=\"0 0 12 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM8.64844 5.39844H8.625C8.85938 5.1875 8.85938 4.83594 8.625 4.60156C8.41406 4.39062 8.0625 4.39062 7.85156 4.60156L5.25 7.22656L4.14844 6.125C3.91406 5.89062 3.5625 5.89062 3.35156 6.125C3.11719 6.33594 3.11719 6.6875 3.35156 6.89844L4.85156 8.39844C5.0625 8.63281 5.41406 8.63281 5.64844 8.39844L8.64844 5.39844Z\" fill=\"#29823B\"/>\r\n</svg>"
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
                    name: "SuccessIcon3",
                    alias: "11"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), React.createElement(OutSystemsUI_Utilities_InlineSVG_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    SVGCode: "<svg width=\"12\" height=\"13\" viewBox=\"0 0 12 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M10.875 6.5C10.875 4.76562 9.9375 3.17188 8.4375 2.28125C6.91406 1.41406 5.0625 1.41406 3.5625 2.28125C2.03906 3.17188 1.125 4.76562 1.125 6.5C1.125 8.25781 2.03906 9.85156 3.5625 10.7422C5.0625 11.6094 6.91406 11.6094 8.4375 10.7422C9.9375 9.85156 10.875 8.25781 10.875 6.5ZM0 6.5C0 4.36719 1.125 2.39844 3 1.32031C4.85156 0.242188 7.125 0.242188 9 1.32031C10.8516 2.39844 12 4.36719 12 6.5C12 8.65625 10.8516 10.625 9 11.7031C7.125 12.7812 4.85156 12.7812 3 11.7031C1.125 10.625 0 8.65625 0 6.5Z\" fill=\"black\" fill-opacity=\"0.72\"/>\r\n</svg>"
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
                    name: "OutlineIcon3",
                    alias: "12"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), React.createElement(OSWidgets.AdvancedHtml, {
                extendedProperties: {
                    className: "font-size-xs margin-none"
                },
                tag: "p",
                _idProps: {
                    service: idService,
                    uuid: "34"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, "At least one number")), React.createElement(OSWidgets.AdvancedHtml, {
                extendedProperties: {
                    className: "display-flex align-items-center gap-s"
                },
                tag: "li",
                _idProps: {
                    service: idService,
                    uuid: "35"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OutSystemsUI_Utilities_InlineSVG_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    SVGCode: "<svg width=\"12\" height=\"13\" viewBox=\"0 0 12 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM4.10156 4.60156C3.86719 4.83594 3.86719 5.1875 4.10156 5.39844L5.20312 6.5L4.10156 7.60156C3.86719 7.83594 3.86719 8.1875 4.10156 8.39844C4.3125 8.63281 4.66406 8.63281 4.875 8.39844L5.97656 7.29688L7.07812 8.39844C7.3125 8.63281 7.66406 8.63281 7.875 8.39844C8.10938 8.1875 8.10938 7.83594 7.875 7.60156L6.77344 6.5L7.875 5.39844C8.10938 5.1875 8.10938 4.83594 7.875 4.60156C7.66406 4.39062 7.3125 4.39062 7.07812 4.60156L5.97656 5.70312L4.875 4.60156C4.66406 4.39062 4.3125 4.39062 4.10156 4.60156Z\" fill=\"#DC2020\"/>\r\n</svg>"
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
                    name: "ErrorIcon4",
                    alias: "13"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), React.createElement(OutSystemsUI_Utilities_InlineSVG_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    SVGCode: "<svg width=\"12\" height=\"13\" viewBox=\"0 0 12 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM8.64844 5.39844H8.625C8.85938 5.1875 8.85938 4.83594 8.625 4.60156C8.41406 4.39062 8.0625 4.39062 7.85156 4.60156L5.25 7.22656L4.14844 6.125C3.91406 5.89062 3.5625 5.89062 3.35156 6.125C3.11719 6.33594 3.11719 6.6875 3.35156 6.89844L4.85156 8.39844C5.0625 8.63281 5.41406 8.63281 5.64844 8.39844L8.64844 5.39844Z\" fill=\"#29823B\"/>\r\n</svg>"
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
                    name: "SuccessIcon4",
                    alias: "14"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), React.createElement(OutSystemsUI_Utilities_InlineSVG_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    SVGCode: "<svg width=\"12\" height=\"13\" viewBox=\"0 0 12 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M10.875 6.5C10.875 4.76562 9.9375 3.17188 8.4375 2.28125C6.91406 1.41406 5.0625 1.41406 3.5625 2.28125C2.03906 3.17188 1.125 4.76562 1.125 6.5C1.125 8.25781 2.03906 9.85156 3.5625 10.7422C5.0625 11.6094 6.91406 11.6094 8.4375 10.7422C9.9375 9.85156 10.875 8.25781 10.875 6.5ZM0 6.5C0 4.36719 1.125 2.39844 3 1.32031C4.85156 0.242188 7.125 0.242188 9 1.32031C10.8516 2.39844 12 4.36719 12 6.5C12 8.65625 10.8516 10.625 9 11.7031C7.125 12.7812 4.85156 12.7812 3 11.7031C1.125 10.625 0 8.65625 0 6.5Z\" fill=\"black\" fill-opacity=\"0.72\"/>\r\n</svg>"
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
                    name: "OutlineIcon4",
                    alias: "15"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), React.createElement(OSWidgets.AdvancedHtml, {
                extendedProperties: {
                    className: "font-size-xs margin-none"
                },
                tag: "p",
                _idProps: {
                    service: idService,
                    uuid: "39"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, "At least one special character")))), React.createElement(OSWidgets.AdvancedHtml, {
                extendedProperties: {
                    className: "cfd-commissions-modal-footer"
                },
                tag: "div",
                _idProps: {
                    service: idService,
                    name: "footer"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    Width: "100%",
                    title: "Set up password",
                    borderRadius: "35px"
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onClick$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.footerButtonOnClickHandler$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                _validationProps: {
                    validationService: validationService
                },
                _idProps: {
                    service: idService,
                    uuid: "41",
                    alias: "16"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }))))));
        }
    }

    return View;
});
define("PartnersHub.Common.CFDCommissionsModal.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Common.CFDCommissionsModal.mvc$translationsResources", "PartnersHub.Common.CFDCommissionsModal.mvc$controller.ButtonOnClick.JavaScript1JS", "PartnersHub.Common.CFDCommissionsModal.mvc$controller.CloseButtonOnClick.JavaScript1JS", "PartnersHub.model$ST_0314d78ca6806dcc3e7ca8803a68ff6aStructure"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Common_CFDCommissionsModal_mvc_TranslationsResources, PartnersHub_Common_CFDCommissionsModal_mvc_controller_ButtonOnClick_JavaScript1JS, PartnersHub_Common_CFDCommissionsModal_mvc_controller_CloseButtonOnClick_JavaScript1JS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Common_CFDCommissionsModal_mvc_TranslationsResources);
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
            get _buttonOnClick$Action() {
                if (!(this.hasOwnProperty("__buttonOnClick$Action"))) {
                    this.__buttonOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ButtonOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ButtonOnClick");
                                span.setAttribute("outsystems.function.key", "10e80d12-44c2-4963-a129-6873b4b99ba5");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("ButtonOnClick");
                                callContext = controller.callContext(callContext);
                                OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "JavaScript1");
                                        span.setAttribute("outsystems.function.key", "b30871fe-c97e-4880-9c9e-7d8148a93498");
                                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(PartnersHub_Common_CFDCommissionsModal_mvc_controller_ButtonOnClick_JavaScript1JS, "JavaScript1", "ButtonOnClick", {
                                            passwordVisibleIcon: OS.DataConversion.JSNodeParamConverter.to(idService.getId("ShowPassword"), OS.DataTypes.DataTypes.Text),
                                            passwordInputId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("CFDPasswordInput"), OS.DataTypes.DataTypes.Text),
                                            passwordHiddenIcon: OS.DataConversion.JSNodeParamConverter.to(idService.getId("HidePassword"), OS.DataTypes.DataTypes.Text),
                                            eyeButtonId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("EyeButton"), OS.DataTypes.DataTypes.Text)
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

                return this.__buttonOnClick$Action;
            }
            set _buttonOnClick$Action(value) {
                this.__buttonOnClick$Action = value;
            }

            get _footerButtonOnClickHandler$Action() {
                if (!(this.hasOwnProperty("__footerButtonOnClickHandler$Action"))) {
                    this.__footerButtonOnClickHandler$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("FooterButtonOnClickHandler", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "FooterButtonOnClickHandler");
                                span.setAttribute("outsystems.function.key", "8c6b76d9-4275-4f3b-8658-1be696701c82");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("FooterButtonOnClickHandler");
                                callContext = controller.callContext(callContext);
                                // Input's length check
                                if ((!((OS.BuiltinFunctions.length(model.variables.userInputVar) > 0)))) {
                                    // requiredInputError = True
                                    model.variables.requiredInputErrorVar = true;
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__footerButtonOnClickHandler$Action;
            }
            set _footerButtonOnClickHandler$Action(value) {
                this.__footerButtonOnClickHandler$Action = value;
            }

            get _cFDPasswordInputOnChange$Action() {
                if (!(this.hasOwnProperty("__cFDPasswordInputOnChange$Action"))) {
                    this.__cFDPasswordInputOnChange$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("CFDPasswordInputOnChange", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "CFDPasswordInputOnChange");
                                span.setAttribute("outsystems.function.key", "a1c2f66b-5af9-4a2a-90ff-56857ca61b6c");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("CFDPasswordInputOnChange");
                                callContext = controller.callContext(callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__cFDPasswordInputOnChange$Action;
            }
            set _cFDPasswordInputOnChange$Action(value) {
                this.__cFDPasswordInputOnChange$Action = value;
            }

            get _closeButtonOnClick$Action() {
                if (!(this.hasOwnProperty("__closeButtonOnClick$Action"))) {
                    this.__closeButtonOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("CloseButtonOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "CloseButtonOnClick");
                                span.setAttribute("outsystems.function.key", "eb2baca7-48d4-45f7-99a0-de25814e37ae");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("CloseButtonOnClick");
                                callContext = controller.callContext(callContext);
                                OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "JavaScript1");
                                        span.setAttribute("outsystems.function.key", "8f1f8902-4d26-4683-901c-5250b1c667ce");
                                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(PartnersHub_Common_CFDCommissionsModal_mvc_controller_CloseButtonOnClick_JavaScript1JS, "JavaScript1", "CloseButtonOnClick", {
                                            containerId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("CFDCommissionModalDesktopContainer"), OS.DataTypes.DataTypes.Text)
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

                return this.__closeButtonOnClick$Action;
            }
            set _closeButtonOnClick$Action(value) {
                this.__closeButtonOnClick$Action = value;
            }


            buttonOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ButtonOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ButtonOnClick");
                        span.setAttribute("outsystems.function.key", "10e80d12-44c2-4963-a129-6873b4b99ba5");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._buttonOnClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            footerButtonOnClickHandler$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("FooterButtonOnClickHandler__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "FooterButtonOnClickHandler");
                        span.setAttribute("outsystems.function.key", "8c6b76d9-4275-4f3b-8658-1be696701c82");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._footerButtonOnClickHandler$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            cFDPasswordInputOnChange$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("CFDPasswordInputOnChange__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "CFDPasswordInputOnChange");
                        span.setAttribute("outsystems.function.key", "a1c2f66b-5af9-4a2a-90ff-56857ca61b6c");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._cFDPasswordInputOnChange$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            closeButtonOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("CloseButtonOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "CloseButtonOnClick");
                        span.setAttribute("outsystems.function.key", "eb2baca7-48d4-45f7-99a0-de25814e37ae");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._closeButtonOnClick$Action, callContext);
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

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.Common.CFDCommissionsModal.mvc$controller.ButtonOnClick.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const eyeButton = document.getElementById($parameters.eyeButtonId);
        const input = document.getElementById($parameters.passwordInputId);
        const passwordHiddenIcon = document.getElementById($parameters.passwordHiddenIcon);
        const passwordVisibleIcon = document.getElementById($parameters.passwordVisibleIcon);

        if (input.type === "text") {
            input.type = "password"
            passwordVisibleIcon.classList.remove("hidden");
            passwordHiddenIcon.classList.add("hidden");
        } else {
            input.type = "text"
            passwordVisibleIcon.classList.add("hidden");
            passwordHiddenIcon.classList.remove("hidden");
        }

        console.log("==>", eyeButton, input)


    };
});

define("PartnersHub.Common.CFDCommissionsModal.mvc$controller.CloseButtonOnClick.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const container = document.getElementById($parameters.containerId);
        container.classList.add("hidden")
    };
});


define("PartnersHub.Common.CFDCommissionsModal.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});