define("tradershub.RealAccountCreation.PersonalDetails.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.controller", "OutSystemsUI.model", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "OutSystemsUI.controller$SetFocus", "OutSystemsUI.controller$FocusFirstInvalidInput"], function(OSRuntimeCore, tradershubModel, OutSystemsUIController, OutSystemsUIModel) {
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
            return {
                salutation: OS.Model.ValidationWidgetRecord,
                DesktopForm: OS.Model.ValidationWidgetRecord,
                Input_FirstName: OS.Model.ValidationWidgetRecord,
                Input_LastName: OS.Model.ValidationWidgetRecord,
                Input_Date: OS.Model.ValidationWidgetRecord
            };
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
            return true;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.RealAccountCreation.PersonalDetails.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "OutSystemsUI.model", "react", "@outsystems/runtime-view-js", "tradershub.RealAccountCreation.PersonalDetails.mvc$model", "tradershub.RealAccountCreation.PersonalDetails.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.RealAccountCreationLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.RealAccountCreationBlocks.PersonalDetailsMobile.mvc$view", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "OutSystemsUI.controller$SetFocus", "OutSystemsUI.controller$FocusFirstInvalidInput"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, OutSystemsUIModel, React, OSView, tradershub_RealAccountCreation_PersonalDetails_mvc_model, tradershub_RealAccountCreation_PersonalDetails_mvc_controller, tradershubClientVariables, tradershub_Layouts_RealAccountCreationLayout_mvc_view, OSWidgets, tradershub_RealAccountCreationBlocks_PersonalDetailsMobile_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreation.PersonalDetails";
        }

        static getAttributes() {
            return {
                codeFunction: "PersonalDetails",
                functionKey: "1fc65b5f-a963-48e3-a979-461b18005b67",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.RealAccountCreation.PersonalDetails.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_RealAccountCreationLayout_mvc_view, tradershub_RealAccountCreationBlocks_PersonalDetailsMobile_mvc_view];
        }

        get modelFactory() {
            return tradershub_RealAccountCreation_PersonalDetails_mvc_model;
        }

        get controllerFactory() {
            return tradershub_RealAccountCreation_PersonalDetails_mvc_controller;
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


            return OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("X1vGH2Op40ipeUYbGABbZw#TitleExpression.-545367396.1", "Personal details | Deriv");
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
                    Analytics: model.getCachedValue(idService.getId("cctcHV2MfkKJDt67Hgs5TA.Analytics"), function() {
                        return function() {
                            var rec = new tradershubModel.ST_0dd6e149ce474591a764bb53175023a1Structure();
                            rec.stepCodenameAttr = "personal_details_1";
                            rec.stepNumberAttr = "0.25";
                            return rec;
                        }();
                    }),
                    Title: "Personal details"
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
                            animate: true,
                            style: "full-width personal-details-section__desktop ",
                            visible: model.getCachedValue(idService.getId("wyspHXC0QECSxiMx+W123w.Visible"), function() {
                                return OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut;
                            }),
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "background-color: #E5F5FC; border-radius: 4px; height: 54px; padding: 16px;"
                            },
                            style: "display-flex align-items-center",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "BlueContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_black.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            gridProperties: {
                                marginLeft: "7px"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 12px;"
                            },
                            text: [$text(getTranslation("qCkbiF5mmEmfN1dAd5fEEQ#Value", "Enter your "))],
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 12px; font-weight: bold;"
                            },
                            text: [$text(getTranslation("ZE4ihfYDwUGA+3lD68twQg#Value", "name"))],
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 12px;"
                            },
                            text: [$text(getTranslation("9vFpd9z6yE2EOaqTW3jrhQ#Value", " and "))],
                            _idProps: {
                                service: idService,
                                uuid: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 12px; font-weight: bold;"
                            },
                            text: [$text(getTranslation("aWWMvx89EkSvdbAnWPKLxQ#Value", "date of birth"))],
                            _idProps: {
                                service: idService,
                                uuid: "8"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 12px;"
                            },
                            text: [$text(getTranslation("Q4lyuhnNSEqoHjQAqLgX7w#Value", " exactly as it appears on your identity document."))],
                            _idProps: {
                                service: idService,
                                uuid: "9"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), $if(tradershubClientVariables.getIsEuUser(), false, this, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "text-align: left;"
                                },
                                style: "",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "10"
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
                                variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getSalutation(), function(value) {
                                    tradershubClientVariables.setSalutation(value);
                                }),
                                _idProps: {
                                    service: idService,
                                    name: "salutation"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.RadioButton, {
                                enabled: true,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                style: "radio-button",
                                value: "Mr",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "Mr"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, $text(getTranslation("RIXFfJtQLE2NpEEP8WlAPQ#Value", "Mr"))), React.createElement(OSWidgets.RadioButton, {
                                enabled: true,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                style: "radio-button",
                                value: "Ms",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "Ms"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, $text(getTranslation("qq6Km8_IEkuiasFzTgXf+g#Value", "Ms")))))];
                        }, function() {
                            return [];
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "FormContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Form, {
                            _validationProps: {
                                validationService: validationService
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "",
                            _idProps: {
                                service: idService,
                                name: "DesktopForm"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex align-items-center justify-content-space-between",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "Form"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "gap: 16px;"
                            },
                            style: "display-flex flex-direction-column flex-1",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "17"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "FirstName"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: true,
                            targetWidget: "Input_FirstName",
                            _idProps: {
                                service: idService,
                                uuid: "19"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [$text(getTranslation("clYNjfu1dkOhXZJB3r4UgA#Value", "First (and middle) name"))],
                            _idProps: {
                                service: idService,
                                uuid: "20"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Input, {
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("DesktopForm")
                            },
                            enabled: true,
                            extendedProperties: {
                                style: "font-size: 16px; height: 48px; margin-top: 8px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: /*Text*/ 0,
                            mandatory: true,
                            maxLength: 50,
                            prompt: "Enter your first (and middle) name",
                            style: "form-control",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getRealSignupFirstName(), function(value) {
                                tradershubClientVariables.setRealSignupFirstName(value);
                            }),
                            _idProps: {
                                service: idService,
                                name: "Input_FirstName"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 0px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "LastName"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: true,
                            targetWidget: "Input_LastName",
                            _idProps: {
                                service: idService,
                                uuid: "23"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [$text(getTranslation("F2iGiak390yOUQ_i6I53Wg#Value", "Last name"))],
                            _idProps: {
                                service: idService,
                                uuid: "24"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Input, {
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("DesktopForm")
                            },
                            enabled: true,
                            extendedProperties: {
                                style: "font-size: 16px; height: 48px; margin-top: 8px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: /*Text*/ 0,
                            mandatory: true,
                            maxLength: 50,
                            prompt: "Enter your last name",
                            style: "form-control",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getRealSignupLastName(), function(value) {
                                tradershubClientVariables.setRealSignupLastName(value);
                            }),
                            _idProps: {
                                service: idService,
                                name: "Input_LastName"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 0px;"
                            },
                            style: "display-flex flex-direction-column gap-s position-relative date-input",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "Birthdate"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: true,
                            targetWidget: "Input_Date",
                            _idProps: {
                                service: idService,
                                uuid: "27"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [$text(getTranslation("OjWV19XHkke+IHNk9a6DPA#Value", "Date of birth"))],
                            _idProps: {
                                service: idService,
                                uuid: "28"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "input-flatpickr position-relative",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "29"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Input, {
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("DesktopForm")
                            },
                            enabled: true,
                            extendedProperties: {
                                style: "font-size: 16px; height: 48px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: /*Text*/ 0,
                            mandatory: true,
                            maxLength: 0,
                            prompt: "dd/mm/yyyy",
                            style: "form-control input_dateofbirth",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getRealSignupDateofBirth(), function(value) {
                                tradershubClientVariables.setRealSignupDateofBirth(value);
                            }),
                            _idProps: {
                                service: idService,
                                name: "Input_Date"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Link, {
                            enabled: true,
                            onClick: function() {
                                var eventHandlerContext = callContext.clone();
                                controller.iconOnClick$Action(controller.callContext(eventHandlerContext));

                                ;
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "31"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            extendedProperties: {
                                style: "right: 16px; top: 12px;"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.calendar.svg"),
                            style: "position-absolute cursor-pointer",
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "32"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            gridProperties: {
                                marginLeft: "24px"
                            },
                            style: "display-flex align-items-center justify-content-center flex-1",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "33"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.namedob2.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "34"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            style: "display-flex justify-content-flex-end",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "35"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Button, {
                            enabled: true,
                            extendedProperties: {
                                style: "border-radius: 100px; border-width: 0px;"
                            },
                            gridProperties: {
                                width: "100px"
                            },
                            isDefault: true,
                            onClick: function() {
                                _this.validateWidget(idService.getId("DesktopForm"));
                                var eventHandlerContext = callContext.clone();
                                controller.saveOnClick$Action(controller.callContext(eventHandlerContext));


                                ;
                            },
                            style: "btn btn-primary",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "36"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $text(getTranslation("X78ePeC7k0+pE9zc8bR0qA#Value", "Next"))))))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            style: "full-width personal-details-section__mobile",
                            visible: model.getCachedValue(idService.getId("LifJMx9T4kq6GQm0jnLl7g.Visible"), function() {
                                return !(OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut);
                            }),
                            _idProps: {
                                service: idService,
                                uuid: "37"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(tradershub_RealAccountCreationBlocks_PersonalDetailsMobile_mvc_view, {
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
                                uuid: "38",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }))];
                    })
                },
                _dependencies: [asPrimitiveValue(tradershubClientVariables.getRealSignupDateofBirth()), asPrimitiveValue(tradershubClientVariables.getRealSignupLastName()), asPrimitiveValue(tradershubClientVariables.getRealSignupFirstName()), asPrimitiveValue(tradershubClientVariables.getSalutation()), asPrimitiveValue(tradershubClientVariables.getIsEuUser())]
            }));
        }
    }

    return View;
});
define("tradershub.RealAccountCreation.PersonalDetails.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "OutSystemsUI.model", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.RealAccountCreation.PersonalDetails.mvc$translationsResources", "tradershub.RealAccountCreation.controller", "tradershub.RealAccountCreation.PersonalDetails.mvc$controller.IconOnClick.OpenDatePickerJS", "tradershub.RealAccountCreation.PersonalDetails.mvc$controller.OnReady.InitializeFlatpickrJS", "tradershub.RealAccountCreation.PersonalDetails.mvc$controller.SaveOnClick.RudderStackJS", "tradershub.RealAccountCreation.PersonalDetails.mvc$controller.SaveOnClick.ValidateJS", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "OutSystemsUI.controller$SetFocus", "OutSystemsUI.controller$FocusFirstInvalidInput"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, OutSystemsUIModel, tradershubLanguageResources, tradershubClientVariables, tradershub_RealAccountCreation_PersonalDetails_mvc_TranslationsResources, tradershub_RealAccountCreationController, tradershub_RealAccountCreation_PersonalDetails_mvc_controller_IconOnClick_OpenDatePickerJS, tradershub_RealAccountCreation_PersonalDetails_mvc_controller_OnReady_InitializeFlatpickrJS, tradershub_RealAccountCreation_PersonalDetails_mvc_controller_SaveOnClick_RudderStackJS, tradershub_RealAccountCreation_PersonalDetails_mvc_controller_SaveOnClick_ValidateJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, tradershub_RealAccountCreation_PersonalDetails_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {
                    datePickerOnSelected$Action: function(selectedDateTimeIn) {
                        selectedDateTimeIn = (selectedDateTimeIn === undefined) ? "" : selectedDateTimeIn;
                        return controller.executeActionInsideJSNode(controller._datePickerOnSelected$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(selectedDateTimeIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function(actionResults) {
                            return {};
                        }, function() {
                            return;
                        }, "DatePickerOnSelected");
                    }
                };
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
            get _datePickerOnSelected$Action() {
                if (!(this.hasOwnProperty("__datePickerOnSelected$Action"))) {
                    this.__datePickerOnSelected$Action = function(selectedDateTimeIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("DatePickerOnSelected", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "DatePickerOnSelected");
                                span.setAttribute("outsystems.function.key", "068b843a-9009-4c8d-93d8-c73f2d859495");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("DatePickerOnSelected");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.RealAccountCreation.PersonalDetails.DatePickerOnSelected$vars"))());
                                vars.value.selectedDateTimeInLocal = selectedDateTimeIn;
                                // RealSignupDateofBirth = If
                                tradershubClientVariables.setRealSignupDateofBirth((((vars.value.selectedDateTimeInLocal === OS.BuiltinFunctions.nullTextIdentifier())) ? (OS.BuiltinFunctions.nullTextIdentifier()) : (vars.value.selectedDateTimeInLocal)));
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__datePickerOnSelected$Action;
            }
            set _datePickerOnSelected$Action(value) {
                this.__datePickerOnSelected$Action = value;
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
                                span.setAttribute("outsystems.function.key", "100a36e0-a410-49e2-8a9c-9833cde84b88");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                // RealSignupCurrentStep = 2
                                tradershubClientVariables.setRealSignupCurrentStep(2);
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

            get _iconOnClick$Action() {
                if (!(this.hasOwnProperty("__iconOnClick$Action"))) {
                    this.__iconOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("IconOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "IconOnClick");
                                span.setAttribute("outsystems.function.key", "134e1f49-eb4a-4f38-a928-464d7a8c0d00");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("IconOnClick");
                                callContext = controller.callContext(callContext);
                                OS.Logger.startActiveSpan("OpenDatePicker", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "OpenDatePicker");
                                        span.setAttribute("outsystems.function.key", "7f0a9091-99eb-4d34-98d5-2345c0378e1e");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_RealAccountCreation_PersonalDetails_mvc_controller_IconOnClick_OpenDatePickerJS, "OpenDatePicker", "IconOnClick", null, function($parameters) {}, {}, {});
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

                return this.__iconOnClick$Action;
            }
            set _iconOnClick$Action(value) {
                this.__iconOnClick$Action = value;
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
                                span.setAttribute("outsystems.function.key", "3509508d-1e90-4cd2-832c-62b725f57f20");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var setFocusVar = new OS.DataTypes.VariableHolder();
                                // Execute Action: SetFocus
                                setFocusVar.value = OutSystemsUIController.default.setFocus$Action(idService.getId("Input_FirstName"), callContext);

                                if ((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut)) {
                                    OS.Logger.startActiveSpan("InitializeFlatpickr", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "InitializeFlatpickr");
                                            span.setAttribute("outsystems.function.key", "702dfc7d-f688-453f-af2d-4047eddd24c6");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(tradershub_RealAccountCreation_PersonalDetails_mvc_controller_OnReady_InitializeFlatpickrJS, "InitializeFlatpickr", "OnReady", {
                                                Date: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupDateofBirth(), OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {}, {
                                                DatePickerOnSelected: controller.clientActionProxies.datePickerOnSelected$Action
                                            }, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                }

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

            get _saveOnClick$Action() {
                if (!(this.hasOwnProperty("__saveOnClick$Action"))) {
                    this.__saveOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SaveOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SaveOnClick");
                                span.setAttribute("outsystems.function.key", "552a1e9e-dd29-4979-9c1e-505af5b57cbb");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SaveOnClick");
                                callContext = controller.callContext(callContext);
                                var focusFirstInvalidInputVar = new OS.DataTypes.VariableHolder();
                                OS.Logger.startActiveSpan("Validate", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "Validate");
                                        span.setAttribute("outsystems.function.key", "d6e47b07-5527-488c-956b-6461b8200a89");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_RealAccountCreation_PersonalDetails_mvc_controller_SaveOnClick_ValidateJS, "Validate", "SaveOnClick", {
                                            InputDateOfBirthWidgetId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Input_Date"), OS.DataTypes.DataTypes.Text),
                                            DateOfBirth: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupDateofBirth(), OS.DataTypes.DataTypes.Text),
                                            InputFirstNameWidgetId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Input_FirstName"), OS.DataTypes.DataTypes.Text),
                                            FirstName: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupFirstName(), OS.DataTypes.DataTypes.Text),
                                            LastName: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupLastName(), OS.DataTypes.DataTypes.Text),
                                            InputLastNameWidgetId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Input_LastName"), OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {}, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                if ((model.widgets.get(idService.getId("DesktopForm")).validAttr)) {
                                    OS.Logger.startActiveSpan("RudderStack", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "RudderStack");
                                            span.setAttribute("outsystems.function.key", "532db969-8e06-4e6a-b559-11bf23ccad06");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(tradershub_RealAccountCreation_PersonalDetails_mvc_controller_SaveOnClick_RudderStackJS, "RudderStack", "SaveOnClick", null, function($parameters) {}, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                    // RealSignupPassedStepCount = 2
                                    tradershubClientVariables.setRealSignupPassedStepCount(2);
                                    // Destination: /tradershub/PersonalDetailsAdditional
                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "personal-details/additional", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                } else {
                                    // Execute Action: FocusFirstInvalidInput
                                    focusFirstInvalidInputVar.value = OutSystemsUIController.default.focusFirstInvalidInput$Action(idService.getId("DesktopForm"), true, "", callContext);

                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__saveOnClick$Action;
            }
            set _saveOnClick$Action(value) {
                this.__saveOnClick$Action = value;
            }


            datePickerOnSelected$Action(selectedDateTimeIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("DatePickerOnSelected__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "DatePickerOnSelected");
                        span.setAttribute("outsystems.function.key", "068b843a-9009-4c8d-93d8-c73f2d859495");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._datePickerOnSelected$Action, callContext, selectedDateTimeIn);
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
                        span.setAttribute("outsystems.function.key", "100a36e0-a410-49e2-8a9c-9833cde84b88");
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

            iconOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("IconOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "IconOnClick");
                        span.setAttribute("outsystems.function.key", "134e1f49-eb4a-4f38-a928-464d7a8c0d00");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._iconOnClick$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "3509508d-1e90-4cd2-832c-62b725f57f20");
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

            saveOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SaveOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SaveOnClick");
                        span.setAttribute("outsystems.function.key", "552a1e9e-dd29-4979-9c1e-505af5b57cbb");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._saveOnClick$Action, callContext);
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
        Controller.registerVariableGroupType("tradershub.RealAccountCreation.PersonalDetails.DatePickerOnSelected$vars", [{
            name: "SelectedDateTime",
            attrName: "selectedDateTimeInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.RealAccountCreation.PersonalDetails.mvc$controller.IconOnClick.OpenDatePickerJS", [], function() {
    return function($actions, $roles, $public) {
        if (window.fp && window.fp.open) {
            !fp.isOpen && fp.open()
        }
    };
});

define("tradershub.RealAccountCreation.PersonalDetails.mvc$controller.OnReady.InitializeFlatpickrJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        // Create a new Date object for the current date
        var currentDate = new Date();

        // Subtract 18 years from the current date
        currentDate.setFullYear(currentDate.getFullYear() - 18);

        function formatDate(date) {
            // Extract the day, month, and year from the date object
            let day = date.getDate();
            let month = date.getMonth() + 1; // Months are zero-based in JavaScript
            let year = date.getFullYear();

            // Add leading zero to day and month if needed
            if (day < 10) {
                day = '0' + day;
            }
            if (month < 10) {
                month = '0' + month;
            }

            // Format the date in dd/mm/yyyy
            return day + '/' + month + '/' + year;
        }

        if (flatpickr && document.getElementsByClassName("input_dateofbirth").length) {
            window.fp = flatpickr(".input-flatpickr", {
                disableMobile: "true",
                yearSelectorType: "select",
                maxDate: currentDate.toISOString(),
                positionElement: document.getElementsByClassName("input_dateofbirth")[0],
                dateFormat: "d/m/Y",
                altFormat: "d/m/Y",
                defaultDate: $parameters.Date,
                onChange: function(selectedDate) {
                    $actions.DatePickerOnSelected(formatDate(selectedDate[0]))
                },
                allowInput: true
            });
        }
    };
});

define("tradershub.RealAccountCreation.PersonalDetails.mvc$controller.SaveOnClick.RudderStackJS", [], function() {
    return function($actions, $roles, $public) {
        cacheTrackEvents.track({
            name: "ce_real_account_signup_form",
            properties: {
                action: "step_passed",
                step_num: 0.25,
                step_codename: "personal_details_1",
                form_name: "real_account_signup_form_outsystems"
            }
        });
    };
});

define("tradershub.RealAccountCreation.PersonalDetails.mvc$controller.SaveOnClick.ValidateJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const payload = {
            FirstName: $parameters.FirstName,
            LastName: $parameters.LastName,
            DateOfBirth: $parameters.DateOfBirth
        }

        // Define a helper function to check if a date is valid
        function isValidDate(day, month, year) {
            const date = new Date(year, month - 1, day);
            return (
                date.getFullYear() === year &&
                date.getMonth() === month - 1 &&
                date.getDate() === day
            );
        }

        // Calculate the date 18 years ago from today
        const today = new Date();
        const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

        const validationSchema = yup.object().shape({
            FirstName: yup.string()
                .noConsecutiveSpaces('First name must not contain consecutive spaces.')
                .validCharacters('First name can only include letters, spaces, apostrophes, periods, and hyphens.')
                .max(50, 'First name must be at most 50 characters long.')
                .required('First (and middle) name is required.'),
            LastName: yup.string()
                .noConsecutiveSpaces('Last name must not contain consecutive spaces.')
                .validCharacters('Last name can only include letters, spaces, apostrophes, periods, and hyphens.')
                .max(50, 'Last name must be at most 50 characters long.')
                .required('Last name is required.'),
            DateOfBirth: yup.string()
                .required('Date of birth is required.')
                .trim()
                .matches(
                    /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
                    'Date of birth must be in the dd/mm/yyyy format.'
                )
                .test(
                    'is-valid-date',
                    'Date of birth is not a valid calendar date.',
                    function(value) {
                        if (!value) return false;
                        const [day, month, year] = value.split('/').map(Number);
                        return isValidDate(day, month, year);
                    }
                )
                .test(
                    'min-year',
                    'Year of birth must be 1924 or later.',
                    function(value) {
                        if (!value) return false;
                        const [, , year] = value.split('/').map(Number);
                        return year >= 1924;
                    }
                )
                .test(
                    'is-18-years-old',
                    'You must be at least 18 years old.',
                    function(value) {
                        if (!value) return false; // already handled by required
                        const [day, month, year] = value.split('/').map(Number);
                        const dateOfBirth = new Date(year, month - 1, day);
                        return dateOfBirth <= eighteenYearsAgo;
                    }
                ),
        });
        const {
            errors,
            validFields
        } = validate(validationSchema, payload)

        errors.FirstName && $public.Validation.setWidgetAsInvalid($parameters.InputFirstNameWidgetId, errors.FirstName)
        errors.LastName && $public.Validation.setWidgetAsInvalid($parameters.InputLastNameWidgetId, errors.LastName)
        errors.DateOfBirth && $public.Validation.setWidgetAsInvalid($parameters.InputDateOfBirthWidgetId, errors.DateOfBirth)
    };
});


define("tradershub.RealAccountCreation.PersonalDetails.mvc$translationsResources.fr-FR", [], function() {
    return {
        "X78ePeC7k0+pE9zc8bR0qA#Value": "Suivant",
        "OjWV19XHkke+IHNk9a6DPA#Value": "Date de naissance",
        "F2iGiak390yOUQ_i6I53Wg#Value": "Nom de famille",
        "clYNjfu1dkOhXZJB3r4UgA#Value": "Prénom (et nom de famille)",
        "qq6Km8_IEkuiasFzTgXf+g#Value": "Non",
        "RIXFfJtQLE2NpEEP8WlAPQ#Value": "Oui",
        "Q4lyuhnNSEqoHjQAqLgX7w#Value": "exactement comme il apparaît sur votre document d\'identité.",
        "aWWMvx89EkSvdbAnWPKLxQ#Value": "date de naissance",
        "9vFpd9z6yE2EOaqTW3jrhQ#Value": "et",
        "ZE4ihfYDwUGA+3lD68twQg#Value": "nom",
        "qCkbiF5mmEmfN1dAd5fEEQ#Value": "Entrez votre",
        "X1vGH2Op40ipeUYbGABbZw#Title": "Détails personnels | Deriv",
        "X1vGH2Op40ipeUYbGABbZw#TitleExpression.-545367396.1": "Détails personnels | Deriv"
    };
});

define("tradershub.RealAccountCreation.PersonalDetails.mvc$translationsResources", ["exports", "tradershub.RealAccountCreation.PersonalDetails.mvc$translationsResources.fr-FR"], function(exports, tradershub_RealAccountCreation_PersonalDetails_mvc_translationsResources_frFR) {
    return {
        "fr-FR": {
            "translations": tradershub_RealAccountCreation_PersonalDetails_mvc_translationsResources_frFR,
            "isRTL": false
        }
    };
});