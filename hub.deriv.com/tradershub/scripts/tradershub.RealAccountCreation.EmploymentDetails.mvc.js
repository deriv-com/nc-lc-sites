define("tradershub.RealAccountCreation.EmploymentDetails.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.controller", "OutSystemsUI.model", "tradershub.controller", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$IsPhone", "OutSystemsUI.model$ST_3cb059eb7f6ed8c9a730f87011d5c0e0Structure", "tradershub.model$RL_bb23cfabef259372d4ccc6deba43b63b", "tradershub.model$ST_8011e4cc4d4f7bb6f204cedde99885f1Structure", "tradershub.model$EN_772522d7b54f56f59fb8e1e743f444ecEntityRecord", "tradershub.model$RL_af98e667e22024fcd3f4c2355613ad7f", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "tradershub.model$RL_c0f17d75c546075264f5d075e00ba65b", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure", "tradershub.model$ST_49ac18b2906d8a3118a829ab9f9f2a86Structure", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure", "tradershub.model$RL_10436c71a703b5c08e6ed74c34052e0a", "tradershub.model$ST_3d5602677826d8c01775c21c1065c8ceStructure", "tradershub.model$ST_ab9963fdfdd5d4ab71d52ec3f27aa094Structure", "tradershub.model$ST_2437043bbd31c030b06d37eb045b623aStructure", "tradershub.controller$FetchEmploymentStatusList", "tradershub.controller$TINValidations"], function (OSRuntimeCore, tradershubModel, OutSystemsUIController, OutSystemsUIModel, tradershubController) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("ResidenceList", "residenceListVar", "ResidenceList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_bb23cfabef259372d4ccc6deba43b63b());
}, false, tradershubModel.RL_bb23cfabef259372d4ccc6deba43b63b), 
this.attr("TINValidationsResponse", "tINValidationsResponseVar", "TINValidationsResponse", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_8011e4cc4d4f7bb6f204cedde99885f1Structure());
}, false, tradershubModel.ST_8011e4cc4d4f7bb6f204cedde99885f1Structure), 
this.attr("CanBypassTINStatus", "canBypassTINStatusVar", "CanBypassTINStatus", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("EmploymentStatusLIst", "employmentStatusLIstVar", "EmploymentStatusLIst", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_af98e667e22024fcd3f4c2355613ad7f());
}, false, tradershubModel.RL_af98e667e22024fcd3f4c2355613ad7f)
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
Form: OS.Model.ValidationWidgetRecord,
EmployementStatusDropdown: OS.Model.ValidationWidgetRecord,
NoTaxIDNumberAvailable: OS.Model.ValidationWidgetRecord,
Input_TIDNumber: OS.Model.ValidationWidgetRecord,
TaxIDConfirmationCheckbox: OS.Model.ValidationWidgetRecord
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

static get hasValidationWidgets() {return true;
}
setInputs(inputs) {
}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("tradershub.RealAccountCreation.EmploymentDetails.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "OutSystemsUI.model", "react", "@outsystems/runtime-view-js", "tradershub.RealAccountCreation.EmploymentDetails.mvc$model", "tradershub.RealAccountCreation.EmploymentDetails.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.RealAccountCreationLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.Common.LoaderBlock.mvc$view", "OutSystemsUI.Interaction.DropdownSearch.mvc$view", "tradershub.RealAccountCreationBlocks.EmploymentDetailsMobileBlock.mvc$view", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$IsPhone", "OutSystemsUI.model$ST_3cb059eb7f6ed8c9a730f87011d5c0e0Structure", "tradershub.model$RL_bb23cfabef259372d4ccc6deba43b63b", "tradershub.model$ST_8011e4cc4d4f7bb6f204cedde99885f1Structure", "tradershub.model$EN_772522d7b54f56f59fb8e1e743f444ecEntityRecord", "tradershub.model$RL_af98e667e22024fcd3f4c2355613ad7f", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "tradershub.model$RL_c0f17d75c546075264f5d075e00ba65b", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure", "tradershub.model$ST_49ac18b2906d8a3118a829ab9f9f2a86Structure", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure", "tradershub.model$RL_10436c71a703b5c08e6ed74c34052e0a", "tradershub.model$ST_3d5602677826d8c01775c21c1065c8ceStructure", "tradershub.model$ST_ab9963fdfdd5d4ab71d52ec3f27aa094Structure", "tradershub.model$ST_2437043bbd31c030b06d37eb045b623aStructure", "tradershub.controller$FetchEmploymentStatusList", "tradershub.controller$TINValidations"], function (OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, OutSystemsUIModel, React, OSView, tradershub_RealAccountCreation_EmploymentDetails_mvc_model, tradershub_RealAccountCreation_EmploymentDetails_mvc_controller, tradershubClientVariables, tradershub_Layouts_RealAccountCreationLayout_mvc_view, OSWidgets, tradershub_Common_LoaderBlock_mvc_view, OutSystemsUI_Interaction_DropdownSearch_mvc_view, tradershub_RealAccountCreationBlocks_EmploymentDetailsMobileBlock_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() { return "RealAccountCreation.EmploymentDetails"; }

        static getAttributes() { return {
codeFunction: "EmploymentDetails",
functionKey: "a130d4db-0e20-4fc9-bdc5-c91a5dcbe757",
functionOwnerName: "tradershub",
functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.RealAccountCreation.EmploymentDetails.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_RealAccountCreationLayout_mvc_view, tradershub_Common_LoaderBlock_mvc_view, OutSystemsUI_Interaction_DropdownSearch_mvc_view, tradershub_RealAccountCreationBlocks_EmploymentDetailsMobileBlock_mvc_view];
        }

        get modelFactory() {
            return tradershub_RealAccountCreation_EmploymentDetails_mvc_model;
        }

        get controllerFactory() {
            return tradershub_RealAccountCreation_EmploymentDetails_mvc_controller;
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
            

            return OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("29QwoSAOyU+9xckaXcvnVw#TitleExpression.1571453000.1", "Employment details | Deriv");
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
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Title: "Employment details",
Analytics: model.getCachedValue(idService.getId("7fJAmptkfkee4aRrg0ciVQ.Analytics"), function () {
return function () {
var rec = new tradershubModel.ST_0dd6e149ce474591a764bb53175023a1Structure();
rec.stepCodenameAttr = ((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut) ? ("employment_details") : ("employment_details_1"));
rec.stepNumberAttr = OS.BuiltinFunctions.decimalToText(((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut) ? (OS.BuiltinFunctions.integerToDecimal(2)) : ((new OS.DataTypes.Decimal("1.5")))));
return rec;
}();
}),
HideTitle: model.getCachedValue(idService.getId("7fJAmptkfkee4aRrg0ciVQ.HideTitle"), function () {
return OutSystemsUIController.default.isPhone$Action(callContext).isPhoneOut;
})
},
events: {
_handleError: function (ex) {
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
content: new PlaceholderContent(function () {
return [$if(model.variables.isLoadingVar, false, this, function () {
return [React.createElement(tradershub_Common_LoaderBlock_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {},
events: {
_handleError: function (ex) {
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
_dependencies: []
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "full-width employment-details-section__desktop",
visible: model.getCachedValue(idService.getId("msOK4dFT6U6zD5FQVOI44A.Visible"), function () {
return OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut;
}),
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Form, {
_validationProps: {
validationService: validationService
},
extendedProperties: {
style: "margin-top: 24px;"
},
gridProperties: {
classes: "OSFillParent"
},
style: "",
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
style: "",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "",
visible: true,
_idProps: {
service: idService,
name: "EmploymentStatus"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
extendedProperties: {
style: "font-size: 16px;"
},
mandatory: true,
targetWidget: "EmployementStatusDropdown",
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 16px;"
},
text: [$text(getTranslation("5SP7yQndiUK8ROjQz1PMNQ#Value", "Employment status"))],
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #DC2020; font-size: 16px;"
},
text: ["*"],
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Dropdown, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form")
},
dropdownMode: /*Custom*/ 1,
emptyValue: "Select your employment status",
enabled: true,
extendedProperties: {
style: "font-size: 16px; margin-top: 8px;"
},
list: model.variables.employmentStatusLIstVar,
mandatory: true,
onChange: function () {
var eventHandlerContext = callContext.clone();
controller.employementStatusDropdownOnChange$Action(false, controller.callContext(eventHandlerContext));

;
},
style: "dropdown",
values: function (elem) {
return elem.labelAttr;
},
variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getRealSignupEmployementStatus(), function (value) {
tradershubClientVariables.setRealSignupEmployementStatus(value);
}),
_idProps: {
service: idService,
name: "EmployementStatusDropdown"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 16px;"
},
value: model.variables.employmentStatusLIstVar.getCurrent(callContext.iterationContext).labelAttr,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, callContext, idService, "1")
},
_dependencies: []
})), $if(model.variables.canBypassTINStatusVar, true, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 24px;"
},
style: "display-flex align-items-center checkbox-container",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Checkbox, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form")
},
enabled: true,
onChange: function () {
var eventHandlerContext = callContext.clone();
controller.noTaxIDNumberAvailableOnChange$Action(controller.callContext(eventHandlerContext));

;
},
style: "checkbox",
variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, tradershubClientVariables.getRealSignupNoTaxInformation(), function (value) {
tradershubClientVariables.setRealSignupNoTaxInformation(value);
}),
_idProps: {
service: idService,
name: "NoTaxIDNumberAvailable"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent",
marginLeft: "8px"
},
style: "width-auto",
targetWidget: "NoTaxIDNumberAvailable",
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("2jh9BaauS0u3Lm1QnLKoaQ#Value", "I don\'t have tax identification number."))))];
}, function () {
return [];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 24px;"
},
style: "",
visible: true,
_idProps: {
service: idService,
name: "TaxResidence"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
extendedProperties: {
style: "font-size: 16px; margin-bottom: 8px;"
},
gridProperties: {
classes: "OSFillParent"
},
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "margin-bottom: 0px;"
},
text: [$text(getTranslation("lB26u5rlDUi74ywSgRgf4g#Value", "Country of tax residence"))],
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OutSystemsUI_Interaction_DropdownSearch_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
OptionsList: model.getCachedValue(idService.getId("ZDgxOoJ6BUGBMuO4tAjaWQ.OptionsList"), function () {
return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.residenceListVar, new tradershubModel.RL_c0f17d75c546075264f5d075e00ba65b(), function (source, target) {
target.valueAttr = source.valueAttr;
target.labelAttr = source.textAttr;
return target;
});
}, function () {
return model.variables.residenceListVar;
}),
StartingSelection: model.getCachedValue(idService.getId("ZDgxOoJ6BUGBMuO4tAjaWQ.StartingSelection"), function () {
return function () {
var list = new tradershubModel.RL_c0f17d75c546075264f5d075e00ba65b();
list.pushAll([function () {
var rec = new OutSystemsUIModel.ST_60f22bd2e9b10a22278b8afe6d7f601aStructure();
rec.valueAttr = ((((tradershubClientVariables.getRealSignupTaxResidence()) !== (OS.BuiltinFunctions.nullTextIdentifier()))) ? (tradershubClientVariables.getRealSignupTaxResidence()) : (tradershubClientVariables.getSelectedResidence()));
rec.labelAttr = ((((tradershubClientVariables.getRealSignupTaxResidenceLabel()) !== (OS.BuiltinFunctions.nullTextIdentifier()))) ? (tradershubClientVariables.getRealSignupTaxResidenceLabel()) : (tradershubClientVariables.getSelectedResidenceLabel()));
return rec;
}()]);
return list;
}();
}, function () {
return tradershubClientVariables.getRealSignupTaxResidence();
}, function () {
return tradershubClientVariables.getSelectedResidence();
}, function () {
return tradershubClientVariables.getRealSignupTaxResidenceLabel();
}, function () {
return tradershubClientVariables.getSelectedResidenceLabel();
}),
OptionalConfigs: model.getCachedValue(idService.getId("ZDgxOoJ6BUGBMuO4tAjaWQ.OptionalConfigs"), function () {
return function () {
var rec = new OutSystemsUIModel.ST_4e53cb8815b86020ced1d2f2652c9b1dStructure();
rec.allowMultipleSelectionAttr = false;
rec.isDisabledAttr = tradershubClientVariables.getRealSignupNoTaxInformation();
rec.noResultsTextAttr = "Nothing to show";
rec.searchPromptAttr = "Search";
rec.noOptionsTextAttr = "There are no options to show";
return rec;
}();
}, function () {
return tradershubClientVariables.getRealSignupNoTaxInformation();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onChanged$Action: function (dropdownSearchIdIn, selectedOptionListIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.dropdownSearchOnChanged$Action(selectedOptionListIn, controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form")
},
_idProps: {
service: idService,
uuid: "17",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 24px;"
},
style: "",
visible: true,
_idProps: {
service: idService,
name: "TaxIdentificationNumber"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
mandatory: false,
targetWidget: "Input_TIDNumber",
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 16px;"
},
text: [$text(getTranslation("AocUpANsh0W_CWSiruK04Q#Value", "Tax identification number"))],
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form")
},
enabled: !(tradershubClientVariables.getRealSignupNoTaxInformation()),
extendedProperties: {
style: "font-size: 16px; height: 48px; margin-top: 8px;"
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: false,
maxLength: 50,
onChange: function () {
var eventHandlerContext = callContext.clone();
controller.input_TIDNumberOnChange$Action(controller.callContext(eventHandlerContext));

;
},
prompt: "Enter your tax identification number",
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getRealSignupTIDNumber(), function (value) {
tradershubClientVariables.setRealSignupTIDNumber(value);
}),
_idProps: {
service: idService,
name: "Input_TIDNumber"
},
_widgetRecordProvider: widgetsRecordProvider
}))), $if((((tradershubClientVariables.getRealSignupTIDNumber()) !== (OS.BuiltinFunctions.nullTextIdentifier())) && !(tradershubClientVariables.getRealSignupNoTaxInformation())), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 24px;"
},
style: "display-flex gap-s align-items-center checkbox-container",
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Checkbox, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form")
},
enabled: true,
style: "checkbox",
variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, tradershubClientVariables.getRealSignupTaxIDConfirmation(), function (value) {
tradershubClientVariables.setRealSignupTaxIDConfirmation(value);
}),
_idProps: {
service: idService,
name: "TaxIDConfirmationCheckbox"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
style: "width-auto",
targetWidget: "TaxIDConfirmationCheckbox",
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("GPnJGrYvDkSxDs3mRu7vfQ#Value", "I confirm that my tax information is accurate and complete.")))), $if(!(model.widgets.get(idService.getId("TaxIDConfirmationCheckbox")).validAttr), false, this, function () {
return [React.createElement(OSWidgets.Text, {
style: "text-primary",
text: [$text(getTranslation("ACqa4GSE9US9jN0w8J0CqQ#Value", "This is required."))],
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
})];
}, function () {
return [];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 24px;"
},
style: "display-flex justify-content-flex-end",
visible: true,
_idProps: {
service: idService,
uuid: "26"
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
onClick: function () {
_this.validateWidget(idService.getId("Form"));
var eventHandlerContext = callContext.clone();
controller.saveOnClick$Action(controller.callContext(eventHandlerContext));


;
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("wX+DwyzsU0W+0GXXbiOMiQ#Value", "Next")))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "full-width employment-details-section__mobile",
visible: model.getCachedValue(idService.getId("AUqJK2AJRUCSqsrK2QbmRw.Visible"), function () {
return !(OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut);
}),
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(tradershub_RealAccountCreationBlocks_EmploymentDetailsMobileBlock_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
EmploymentStatusList: model.variables.employmentStatusLIstVar,
TINValidationsResponse: model.variables.tINValidationsResponseVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "29",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.tINValidationsResponseVar), asPrimitiveValue(model.widgets.get(idService.getId("TaxIDConfirmationCheckbox")).validAttr), asPrimitiveValue(tradershubClientVariables.getRealSignupTaxIDConfirmation()), asPrimitiveValue(tradershubClientVariables.getRealSignupTIDNumber()), asPrimitiveValue(tradershubClientVariables.getSelectedResidenceLabel()), asPrimitiveValue(tradershubClientVariables.getRealSignupTaxResidenceLabel()), asPrimitiveValue(tradershubClientVariables.getSelectedResidence()), asPrimitiveValue(tradershubClientVariables.getRealSignupTaxResidence()), asPrimitiveValue(model.variables.residenceListVar), asPrimitiveValue(tradershubClientVariables.getRealSignupNoTaxInformation()), asPrimitiveValue(model.variables.canBypassTINStatusVar), asPrimitiveValue(model.variables.employmentStatusLIstVar), asPrimitiveValue(tradershubClientVariables.getRealSignupEmployementStatus()), asPrimitiveValue(model.variables.isLoadingVar)]
}));
        }
    }

    return View;
});
define("tradershub.RealAccountCreation.EmploymentDetails.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "OutSystemsUI.model", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.RealAccountCreation.EmploymentDetails.mvc$translationsResources", "tradershub.RealAccountCreation.controller", "tradershub.RealAccountCreation.EmploymentDetails.mvc$controller.SaveOnClick.ValidateJS", "tradershub.RealAccountCreation.EmploymentDetails.mvc$controller.SaveOnClick.RudderStackJS", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$IsPhone", "OutSystemsUI.model$ST_3cb059eb7f6ed8c9a730f87011d5c0e0Structure", "tradershub.model$RL_bb23cfabef259372d4ccc6deba43b63b", "tradershub.model$ST_8011e4cc4d4f7bb6f204cedde99885f1Structure", "tradershub.model$EN_772522d7b54f56f59fb8e1e743f444ecEntityRecord", "tradershub.model$RL_af98e667e22024fcd3f4c2355613ad7f", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "tradershub.model$RL_c0f17d75c546075264f5d075e00ba65b", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure", "tradershub.model$ST_49ac18b2906d8a3118a829ab9f9f2a86Structure", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure", "tradershub.model$RL_10436c71a703b5c08e6ed74c34052e0a", "tradershub.model$ST_3d5602677826d8c01775c21c1065c8ceStructure", "tradershub.model$ST_ab9963fdfdd5d4ab71d52ec3f27aa094Structure", "tradershub.model$ST_2437043bbd31c030b06d37eb045b623aStructure", "tradershub.controller$FetchEmploymentStatusList", "tradershub.controller$TINValidations"], function (OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, OutSystemsUIModel, tradershubLanguageResources, tradershubClientVariables, tradershub_RealAccountCreation_EmploymentDetails_mvc_TranslationsResources, tradershub_RealAccountCreationController, tradershub_RealAccountCreation_EmploymentDetails_mvc_controller_SaveOnClick_ValidateJS, tradershub_RealAccountCreation_EmploymentDetails_mvc_controller_SaveOnClick_RudderStackJS) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, tradershub_RealAccountCreation_EmploymentDetails_mvc_TranslationsResources);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = false;
}

// Server Actions - Methods

// Aggregates and Data Actions

get dataFetchActionNames() {if(!(this.hasOwnProperty("_dataFetchActionNames"))) {
this._dataFetchActionNames = [];
}

return this._dataFetchActionNames;
}set dataFetchActionNames(value) {this._dataFetchActionNames = value;
}

// Client Actions - Methods
get _onInitialize$Action() {if(!(this.hasOwnProperty("__onInitialize$Action"))) {
this.__onInitialize$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnInitialize", function (span) {
if(span) {
span.setAttribute("code.function", "OnInitialize");
span.setAttribute("outsystems.function.key", "12b91ec0-2b97-4a7b-850b-4422e6a0e893");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var jSONDeserializeResidenceListResponseVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_3d5602677826d8c01775c21c1065c8ceStructure))());
// RealSignupCurrentStep = If
tradershubClientVariables.setRealSignupCurrentStep(((tradershubClientVariables.getRealSignupIsIDVSupported()) ? (4) : (3)));
// IsLoading = True
model.variables.isLoadingVar = true;
if((!(OutSystemsUIController.default.isPhone$Action(callContext).isPhoneOut))) {
// JSON Deserialize: JSONDeserializeResidenceListResponse
jSONDeserializeResidenceListResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(tradershubClientVariables.getRawResidenceListResponse(), tradershubModel.ST_3d5602677826d8c01775c21c1065c8ceStructure, false);
// ResidenceList = JSONDeserializeResidenceListResponse.Data.Residence_list
model.variables.residenceListVar = OS.DataConversion.JSConversions.typeConvertRecordList(jSONDeserializeResidenceListResponseVar.value.dataOut.residence_listAttr, new tradershubModel.RL_bb23cfabef259372d4ccc6deba43b63b(), function (source, target) {
target.valueAttr = source.valueAttr;
target.textAttr = source.textAttr;
return target;
});
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onInitialize$Action;
}set _onInitialize$Action(value) {this.__onInitialize$Action = value;
}

get _noTaxIDNumberAvailableOnChange$Action() {if(!(this.hasOwnProperty("__noTaxIDNumberAvailableOnChange$Action"))) {
this.__noTaxIDNumberAvailableOnChange$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("NoTaxIDNumberAvailableOnChange", function (span) {
if(span) {
span.setAttribute("code.function", "NoTaxIDNumberAvailableOnChange");
span.setAttribute("outsystems.function.key", "25393702-4014-47c0-88a1-cbd8414c85ea");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("NoTaxIDNumberAvailableOnChange");
callContext = controller.callContext(callContext);
// RealSignupTIDNumber = NullTextIdentifier
tradershubClientVariables.setRealSignupTIDNumber(OS.BuiltinFunctions.nullTextIdentifier());
// RealSignupTaxIDConfirmation = False
tradershubClientVariables.setRealSignupTaxIDConfirmation(false);
// Input_TIDNumber.ValidationMessage = NullTextIdentifier
model.widgets.get(idService.getId("Input_TIDNumber")).validationMessageAttr = OS.BuiltinFunctions.nullTextIdentifier();
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__noTaxIDNumberAvailableOnChange$Action;
}set _noTaxIDNumberAvailableOnChange$Action(value) {this.__noTaxIDNumberAvailableOnChange$Action = value;
}

get _employementStatusDropdownOnChange$Action() {if(!(this.hasOwnProperty("__employementStatusDropdownOnChange$Action"))) {
this.__employementStatusDropdownOnChange$Action = function (onReadyIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("EmployementStatusDropdownOnChange", function (span) {
if(span) {
span.setAttribute("code.function", "EmployementStatusDropdownOnChange");
span.setAttribute("outsystems.function.key", "5c3fe63a-7063-4d2f-a968-f844c93ed07a");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("EmployementStatusDropdownOnChange");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("tradershub.RealAccountCreation.EmploymentDetails.EmployementStatusDropdownOnChange$vars"))());
vars.value.onReadyInLocal = onReadyIn;
var listIndexOfVar = new OS.DataTypes.VariableHolder();
// Execute Action: ListIndexOf
listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.tINValidationsResponseVar.tin_validationsAttr.tin_employment_status_bypassAttr, function (p) {
return (tradershubClientVariables.getRealSignupEmployementStatus() === p);
}, callContext);

if(((listIndexOfVar.value.positionOut > -1))) {
// RealSignupNoTaxInformation = If
tradershubClientVariables.setRealSignupNoTaxInformation((((tradershubClientVariables.getRealSignupNoTaxInformation() && vars.value.onReadyInLocal)) ? (tradershubClientVariables.getRealSignupNoTaxInformation()) : (false)));
// CanBypassTINStatus = True
model.variables.canBypassTINStatusVar = true;
} else {
// CanBypassTINStatus = False
model.variables.canBypassTINStatusVar = false;
// RealSignupNoTaxInformation = False
tradershubClientVariables.setRealSignupNoTaxInformation(false);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__employementStatusDropdownOnChange$Action;
}set _employementStatusDropdownOnChange$Action(value) {this.__employementStatusDropdownOnChange$Action = value;
}

get _saveOnClick$Action() {if(!(this.hasOwnProperty("__saveOnClick$Action"))) {
this.__saveOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("SaveOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "SaveOnClick");
span.setAttribute("outsystems.function.key", "967368aa-7881-4cf8-adf0-ca95a73bbf28");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("SaveOnClick");
callContext = controller.callContext(callContext);
var validateJSResult = new OS.DataTypes.VariableHolder();
var jSONSerializeTINValidationsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONDeserializeEmploymentStatusValidFieldsVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_ab9963fdfdd5d4ab71d52ec3f27aa094Structure))());
var jSONDeserializeEmploymentDetailsValidationErrorsVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_2437043bbd31c030b06d37eb045b623aStructure))());
// JSON Serialize: JSONSerializeTINValidations
jSONSerializeTINValidationsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.tINValidationsResponseVar, false, false);
validateJSResult.value = OS.Logger.startActiveSpan("Validate", function (span) {
if(span) {
span.setAttribute("code.function", "Validate");
span.setAttribute("outsystems.function.key", "0959b7e9-6afc-491f-9dd1-505db42f50fb");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_RealAccountCreation_EmploymentDetails_mvc_controller_SaveOnClick_ValidateJS, "Validate", "SaveOnClick", {
TaxResidenceCountry: OS.DataConversion.JSNodeParamConverter.to(((((tradershubClientVariables.getRealSignupTaxResidence()) !== (""))) ? (tradershubClientVariables.getRealSignupTaxResidence()) : (tradershubClientVariables.getSelectedResidence())), OS.DataTypes.DataTypes.Text),
TIDNumber: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupTIDNumber(), OS.DataTypes.DataTypes.Text),
TaxIDConfirmation: OS.DataConversion.JSNodeParamConverter.to((tradershubClientVariables.getRealSignupTaxIDConfirmation() ? "True" : "False"), OS.DataTypes.DataTypes.Text),
Validations: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeTINValidationsVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
EmployementStatus: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupEmployementStatus(), OS.DataTypes.DataTypes.Text),
ValidationErrors: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ValidFields: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.RealAccountCreation.EmploymentDetails.SaveOnClick$validateJSResult"))();
jsNodeResult.validationErrorsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ValidationErrors, OS.DataTypes.DataTypes.Text);
jsNodeResult.validFieldsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ValidFields, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeEmploymentDetailsValidationErrors
jSONDeserializeEmploymentDetailsValidationErrorsVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateJSResult.value.validationErrorsOut, tradershubModel.ST_2437043bbd31c030b06d37eb045b623aStructure, false);
// JSON Deserialize: JSONDeserializeEmploymentStatusValidFields
jSONDeserializeEmploymentStatusValidFieldsVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateJSResult.value.validFieldsOut, tradershubModel.ST_ab9963fdfdd5d4ab71d52ec3f27aa094Structure, false);
// EmployementStatusDropdown.Valid = JSONDeserializeEmploymentStatusValidFields.Data.EmployementStatus
model.widgets.get(idService.getId("EmployementStatusDropdown")).validAttr = jSONDeserializeEmploymentStatusValidFieldsVar.value.dataOut.employementStatusAttr;
// EmployementStatusDropdown.ValidationMessage = JSONDeserializeEmploymentDetailsValidationErrors.Data.EmployementStatus
model.widgets.get(idService.getId("EmployementStatusDropdown")).validationMessageAttr = jSONDeserializeEmploymentDetailsValidationErrorsVar.value.dataOut.employementStatusAttr;
// Input_TIDNumber.Valid = JSONDeserializeEmploymentStatusValidFields.Data.TIDNumber
model.widgets.get(idService.getId("Input_TIDNumber")).validAttr = jSONDeserializeEmploymentStatusValidFieldsVar.value.dataOut.tIDNumberAttr;
// Input_TIDNumber.ValidationMessage = JSONDeserializeEmploymentDetailsValidationErrors.Data.TIDNumber
model.widgets.get(idService.getId("Input_TIDNumber")).validationMessageAttr = jSONDeserializeEmploymentDetailsValidationErrorsVar.value.dataOut.tIDNumberAttr;
// TaxIDConfirmationCheckbox.Valid = JSONDeserializeEmploymentStatusValidFields.Data.TaxIDConfirmation
model.widgets.get(idService.getId("TaxIDConfirmationCheckbox")).validAttr = jSONDeserializeEmploymentStatusValidFieldsVar.value.dataOut.taxIDConfirmationAttr;
// TaxIDConfirmationCheckbox.ValidationMessage = NullTextIdentifier
model.widgets.get(idService.getId("TaxIDConfirmationCheckbox")).validationMessageAttr = OS.BuiltinFunctions.nullTextIdentifier();
if((model.widgets.get(idService.getId("Form")).validAttr)) {
OS.Logger.startActiveSpan("RudderStack", function (span) {
if(span) {
span.setAttribute("code.function", "RudderStack");
span.setAttribute("outsystems.function.key", "0e6d4c53-6f1f-4008-b8f6-c2c38220b9d8");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_RealAccountCreation_EmploymentDetails_mvc_controller_SaveOnClick_RudderStackJS, "RudderStack", "SaveOnClick", null, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// RealSignupPassedStepCount = If
tradershubClientVariables.setRealSignupPassedStepCount(((tradershubClientVariables.getRealSignupIsIDVSupported()) ? (4) : (3)));
// Destination: /tradershub/AddressDetails
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "address-details", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__saveOnClick$Action;
}set _saveOnClick$Action(value) {this.__saveOnClick$Action = value;
}

get _onReady$Action() {if(!(this.hasOwnProperty("__onReady$Action"))) {
this.__onReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnReady", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "b63b795c-2759-4212-8294-793275c1fd54");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var fetchEmploymentStatusListVar = new OS.DataTypes.VariableHolder();
var tINValidationsVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: FetchEmploymentStatusList
model.flush();
return tradershubController.default.fetchEmploymentStatusList$Action(callContext).then(function (value) {
fetchEmploymentStatusListVar.value = value;
}).then(function () {
// RealSignupTaxResidence = If
tradershubClientVariables.setRealSignupTaxResidence(((((tradershubClientVariables.getRealSignupTaxResidence()) !== (OS.BuiltinFunctions.nullTextIdentifier()))) ? (tradershubClientVariables.getRealSignupTaxResidence()) : (tradershubClientVariables.getSelectedResidence())));
// EmploymentStatusLIst = FetchEmploymentStatusList.EmploymentStatusList
model.variables.employmentStatusLIstVar = fetchEmploymentStatusListVar.value.employmentStatusListOut;
// Execute Action: TINValidations
model.flush();
return tradershubController.default.tINValidations$Action(tradershubClientVariables.getRealSignupTaxResidence(), callContext).then(function (value) {
tINValidationsVar.value = value;
});
}).then(function () {
// TINValidationsResponse = TINValidations.Response
model.variables.tINValidationsResponseVar = tINValidationsVar.value.responseOut;
}).then(function () {
if((((tradershubClientVariables.getRealSignupEmployementStatus()) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
// Execute Action: EmployementStatusDropdownOnChange
controller._employementStatusDropdownOnChange$Action(true, callContext);
}

// IsLoading = False
model.variables.isLoadingVar = false;
});
});
}, function () {
if(span) {
span.end();
}

});
}, 1);
};
}

return this.__onReady$Action;
}set _onReady$Action(value) {this.__onReady$Action = value;
}

get _dropdownSearchOnChanged$Action() {if(!(this.hasOwnProperty("__dropdownSearchOnChanged$Action"))) {
this.__dropdownSearchOnChanged$Action = function (selectedOptionListIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("DropdownSearchOnChanged", function (span) {
if(span) {
span.setAttribute("code.function", "DropdownSearchOnChanged");
span.setAttribute("outsystems.function.key", "de806b75-d72c-4699-92e5-0f8164bb29fe");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("DropdownSearchOnChanged");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("tradershub.RealAccountCreation.EmploymentDetails.DropdownSearchOnChanged$vars"))());
vars.value.selectedOptionListInLocal = selectedOptionListIn.clone();
var tINValidationsVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// RealSignupTaxResidenceLabel = SelectedOptionList.Current.Label
tradershubClientVariables.setRealSignupTaxResidenceLabel(vars.value.selectedOptionListInLocal.getCurrent(callContext.iterationContext).labelAttr);
// RealSignupTaxResidence = SelectedOptionList.Current.Value
tradershubClientVariables.setRealSignupTaxResidence(vars.value.selectedOptionListInLocal.getCurrent(callContext.iterationContext).valueAttr);
// Execute Action: TINValidations
model.flush();
return tradershubController.default.tINValidations$Action(tradershubClientVariables.getRealSignupTaxResidence(), callContext).then(function (value) {
tINValidationsVar.value = value;
}).then(function () {
// TINValidationsResponse = TINValidations.Response
model.variables.tINValidationsResponseVar = tINValidationsVar.value.responseOut;
}).then(function () {
if((((tradershubClientVariables.getRealSignupEmployementStatus()) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
// Execute Action: EmployementStatusDropdownOnChange
controller._employementStatusDropdownOnChange$Action(false, callContext);
}

// IsLoading = False
model.variables.isLoadingVar = false;
});
});
}, function () {
if(span) {
span.end();
}

});
}, 1);
};
}

return this.__dropdownSearchOnChanged$Action;
}set _dropdownSearchOnChanged$Action(value) {this.__dropdownSearchOnChanged$Action = value;
}

get _input_TIDNumberOnChange$Action() {if(!(this.hasOwnProperty("__input_TIDNumberOnChange$Action"))) {
this.__input_TIDNumberOnChange$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("Input_TIDNumberOnChange", function (span) {
if(span) {
span.setAttribute("code.function", "Input_TIDNumberOnChange");
span.setAttribute("outsystems.function.key", "ed32e0ce-3aa2-46f9-a6c3-1e676288e816");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("Input_TIDNumberOnChange");
callContext = controller.callContext(callContext);
if(((tradershubClientVariables.getRealSignupTIDNumber() === OS.BuiltinFunctions.nullTextIdentifier()))) {
// RealSignupTaxIDConfirmation = False
tradershubClientVariables.setRealSignupTaxIDConfirmation(false);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__input_TIDNumberOnChange$Action;
}set _input_TIDNumberOnChange$Action(value) {this.__input_TIDNumberOnChange$Action = value;
}


onInitialize$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnInitialize__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnInitialize");
span.setAttribute("outsystems.function.key", "12b91ec0-2b97-4a7b-850b-4422e6a0e893");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

noTaxIDNumberAvailableOnChange$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("NoTaxIDNumberAvailableOnChange__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "NoTaxIDNumberAvailableOnChange");
span.setAttribute("outsystems.function.key", "25393702-4014-47c0-88a1-cbd8414c85ea");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._noTaxIDNumberAvailableOnChange$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

employementStatusDropdownOnChange$Action(onReadyIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("EmployementStatusDropdownOnChange__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "EmployementStatusDropdownOnChange");
span.setAttribute("outsystems.function.key", "5c3fe63a-7063-4d2f-a968-f844c93ed07a");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._employementStatusDropdownOnChange$Action, callContext, onReadyIn);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

saveOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("SaveOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "SaveOnClick");
span.setAttribute("outsystems.function.key", "967368aa-7881-4cf8-adf0-ca95a73bbf28");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._saveOnClick$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

onReady$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnReady__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "b63b795c-2759-4212-8294-793275c1fd54");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

dropdownSearchOnChanged$Action(selectedOptionListIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("DropdownSearchOnChanged__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "DropdownSearchOnChanged");
span.setAttribute("outsystems.function.key", "de806b75-d72c-4699-92e5-0f8164bb29fe");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._dropdownSearchOnChanged$Action, callContext, selectedOptionListIn);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

input_TIDNumberOnChange$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("Input_TIDNumberOnChange__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "Input_TIDNumberOnChange");
span.setAttribute("outsystems.function.key", "ed32e0ce-3aa2-46f9-a6c3-1e676288e816");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._input_TIDNumberOnChange$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}


// Event Handler Actions
get onInitializeEventHandler() {if(!(this.hasOwnProperty("_onInitializeEventHandler"))) {
this._onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onInitialize$Action(callContext);

};
}

return this._onInitializeEventHandler;
}set onInitializeEventHandler(value) {this._onInitializeEventHandler = value;
}

get onReadyEventHandler() {if(!(this.hasOwnProperty("_onReadyEventHandler"))) {
this._onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onReady$Action(callContext);

};
}

return this._onReadyEventHandler;
}set onReadyEventHandler(value) {this._onReadyEventHandler = value;
}

get onRenderEventHandler() {if(!(this.hasOwnProperty("_onRenderEventHandler"))) {
this._onRenderEventHandler = null;
}

return this._onRenderEventHandler;
}set onRenderEventHandler(value) {this._onRenderEventHandler = value;
}

get onDestroyEventHandler() {if(!(this.hasOwnProperty("_onDestroyEventHandler"))) {
this._onDestroyEventHandler = null;
}

return this._onDestroyEventHandler;
}set onDestroyEventHandler(value) {this._onDestroyEventHandler = value;
}

get onParametersChangedEventHandler() {if(!(this.hasOwnProperty("_onParametersChangedEventHandler"))) {
this._onParametersChangedEventHandler = null;
}

return this._onParametersChangedEventHandler;
}set onParametersChangedEventHandler(value) {this._onParametersChangedEventHandler = value;
}

get handleError() {if(!(this.hasOwnProperty("_handleError"))) {
this._handleError = function (ex) {
return tradershub_RealAccountCreationController.default.handleError(ex, this.callContext());
};
}

return this._handleError;
}set handleError(value) {this._handleError = value;
}

static checkPermissions() {
}

getDefaultTimeout() {
return tradershubController.default.defaultTimeout;
}

}

var Controller = ControllerInner;
// Server Actions - Variables

// Client Actions - Variables
Controller.registerVariableGroupType("tradershub.RealAccountCreation.EmploymentDetails.EmployementStatusDropdownOnChange$vars", [{
name: "OnReady",
attrName: "onReadyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.registerVariableGroupType("tradershub.RealAccountCreation.EmploymentDetails.SaveOnClick$validateJSResult", [{
name: "ValidationErrors",
attrName: "validationErrorsOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ValidFields",
attrName: "validFieldsOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.RealAccountCreation.EmploymentDetails.DropdownSearchOnChanged$vars", [{
name: "SelectedOptionList",
attrName: "selectedOptionListInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new tradershubModel.RL_c0f17d75c546075264f5d075e00ba65b();
},
complexType: tradershubModel.RL_c0f17d75c546075264f5d075e00ba65b
}]);

}
return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.RealAccountCreation.EmploymentDetails.mvc$controller.SaveOnClick.ValidateJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const invalidPatterns = JSON.parse($parameters.Validations)?.tin_validations?.invalid_patterns ?? []
const tinFormat = JSON.parse($parameters.Validations)?.tin_validations?.tin_format ?? []

const payload = {
    TaxResidenceCountry: $parameters.TaxResidenceCountry,
    TIDNumber: $parameters.TIDNumber,
    EmployementStatus: $parameters.EmployementStatus,
    TaxIDConfirmation: $parameters.TaxIDConfirmation
}

const validationSchema = yup.object().shape({
    TaxResidenceCountry: yup.string().required('Tax residence country is required.'),
    TIDNumber: yup.string().max(25, "Tax Identification Number can't be longer than 25 characters.")
        .matches(/^(?!^$|\s+)[A-Za-z0-9.\/\s-]{0,25}$/, {
            excludeEmptyString: true,
            message: 'Only letters, numbers, space, hyphen, period, and forward slash are allowed.',
        })
        .test("tin-format", "Tax identification number format is incorrect.", value => {
            if (!value) return true;

            if (invalidPatterns.length && invalidPatterns.some(format => RegExp(format).test(value))) {
                return false
            }

            if (tinFormat.length) {
                return tinFormat.some(format => RegExp(format).test(value))
            }
            return true;
        }),
    EmployementStatus: yup.string().required('Employment status is required.'),
    TaxIDConfirmation: yup.bool().when('TIDNumber', (TIDNumber, schema) => {
        if (TIDNumber) {
            return schema.oneOf([true], "This is required.").required("This is required.")
        }

        return schema
    }),
});

const { errors, validFields } = validate(validationSchema, payload);
$parameters.ValidationErrors = JSON.stringify(errors)
$parameters.ValidFields = JSON.stringify(validFields)
};
});

define("tradershub.RealAccountCreation.EmploymentDetails.mvc$controller.SaveOnClick.RudderStackJS", [], function () {
return function ($actions, $roles, $public) {
cacheTrackEvents.track({
    name: "ce_real_account_signup_form",
    properties: {
        action: "step_passed",
        step_num: 2,
        step_codename: "employment_details",
        form_name: "real_account_signup_form_outsystems"
    }
});
};
});


define("tradershub.RealAccountCreation.EmploymentDetails.mvc$translationsResources.fr-FR", [], function () {
return {
"wX+DwyzsU0W+0GXXbiOMiQ#Value": "Suivant",
"ACqa4GSE9US9jN0w8J0CqQ#Value": "Cela est requis.",
"GPnJGrYvDkSxDs3mRu7vfQ#Value": "Je confirme que mes informations fiscales sont exactes et complètes.",
"AocUpANsh0W_CWSiruK04Q#Value": "Numéro d\'identification fiscale",
"lB26u5rlDUi74ywSgRgf4g#Value": "Pays de résidence fiscale",
"2jh9BaauS0u3Lm1QnLKoaQ#Value": "Je n\'ai pas de numéro d\'identification fiscale.",
"5SP7yQndiUK8ROjQz1PMNQ#Value": "Statut d\'emploi",
"29QwoSAOyU+9xckaXcvnVw#Title": "Détails de l\'emploi | Deriv",
"29QwoSAOyU+9xckaXcvnVw#TitleExpression.1571453000.1": "Détails de l\'emploi | Deriv"
};
});

define("tradershub.RealAccountCreation.EmploymentDetails.mvc$translationsResources", ["exports", "tradershub.RealAccountCreation.EmploymentDetails.mvc$translationsResources.fr-FR"], function (exports, tradershub_RealAccountCreation_EmploymentDetails_mvc_translationsResources_frFR) {
return {
"fr-FR": {
"translations": tradershub_RealAccountCreation_EmploymentDetails_mvc_translationsResources_frFR,
"isRTL": false
}
};
});

