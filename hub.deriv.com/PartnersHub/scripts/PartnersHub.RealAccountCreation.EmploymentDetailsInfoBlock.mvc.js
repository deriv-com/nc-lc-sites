define("PartnersHub.RealAccountCreation.EmploymentDetailsInfoBlock.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.model$ST_ed25c05f01c113e76dce143270b6165eStructure", "PartnersHub.model$ST_46d2d4840819045971995a2d73a31f87Structure"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
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
TaxInfoForm: OS.Model.ValidationWidgetRecord,
Input1: OS.Model.ValidationWidgetRecord,
TaxIdentificationNumber: OS.Model.ValidationWidgetRecord,
Checkbox1: OS.Model.ValidationWidgetRecord
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

static get hasValidationWidgets() {return true;
}
setInputs(inputs) {
}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.RealAccountCreation.EmploymentDetailsInfoBlock.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreation.EmploymentDetailsInfoBlock.mvc$model", "PartnersHub.RealAccountCreation.EmploymentDetailsInfoBlock.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Interaction.InputWithIcon.mvc$view", "CustomComponentsOfficial.ButtonVariants.PrimaryButton.mvc$view", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.model$ST_ed25c05f01c113e76dce143270b6165eStructure", "PartnersHub.model$ST_46d2d4840819045971995a2d73a31f87Structure"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_RealAccountCreation_EmploymentDetailsInfoBlock_mvc_model, PartnersHub_RealAccountCreation_EmploymentDetailsInfoBlock_mvc_controller, PartnersHubClientVariables, OSWidgets, OutSystemsUI_Interaction_InputWithIcon_mvc_view, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "RealAccountCreation.EmploymentDetailsInfoBlock"; }

        static getAttributes() { return {
codeFunction: "EmploymentDetailsInfoBlock",
functionKey: "10f4ff8b-c560-4f8f-b663-dd23a6fcde23",
functionOwnerName: "PartnersHub",
functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Interaction_InputWithIcon_mvc_view, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreation_EmploymentDetailsInfoBlock_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreation_EmploymentDetailsInfoBlock_mvc_controller;
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
visible: true,
_idProps: {
service: idService,
name: "EmploymentDetailsTaxInfo"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Form, {
_validationProps: {
validationService: validationService
},
extendedProperties: {
style: "display: flex; flex-direction: column; gap: 16px;"
},
gridProperties: {
classes: "OSFillParent"
},
style: "\"form card\"",
_idProps: {
service: idService,
name: "TaxInfoForm"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-bottom: 6px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
extendedProperties: {
style: "margin-bottom: 6px;"
},
gridProperties: {
classes: "OSFillParent"
},
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("QY+1cGF0pUyCF+5li2602w#Value", "Country of tax residence"))), React.createElement(OutSystemsUI_Interaction_InputWithIcon_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
AlignIconRight: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("TaxInfoForm")
},
_idProps: {
service: idService,
uuid: "4",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Icon, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.openResidenceList$Action(controller.callContext(eventHandlerContext));

;
}
},
extendedProperties: {
style: "cursor: pointer; font-size: 24px;"
},
gridProperties: {
marginLeft: "0"
},
icon: "angle-down",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
input: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("TaxInfoForm")
},
enabled: true,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.openResidenceList$Action(controller.callContext(eventHandlerContext));

;
}
},
extendedProperties: {
style: "cursor: pointer;"
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: true,
maxLength: 50,
prompt: "Select your tax residence",
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupTaxResidence(), function (value) {
PartnersHubClientVariables.setRealSignupTaxResidence(value);
}),
_idProps: {
service: idService,
name: "Input1"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupTaxResidence())]
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
extendedProperties: {
style: "margin-bottom: 6px;"
},
gridProperties: {
classes: "OSFillParent"
},
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("NGxSo6UUakOX_x3wq9OBhg#Value", "Tax identification number (optional)"))), React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("TaxInfoForm")
},
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: false,
maxLength: 50,
onChange: function () {
var eventHandlerContext = callContext.clone();
controller.taxIdentificationNumberOnChange$Action(controller.callContext(eventHandlerContext));

;
},
prompt: "Enter your tax identification number",
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupTaxIdentificationNumber(), function (value) {
PartnersHubClientVariables.setRealSignupTaxIdentificationNumber(value);
}),
_idProps: {
service: idService,
name: "TaxIdentificationNumber"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
style: "align-items: center; display: flex; gap: 8px;"
},
visible: ((PartnersHubClientVariables.getRealSignupTaxIdentificationNumber()) !== ("")),
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Checkbox, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("TaxInfoForm")
},
enabled: true,
style: model.getCachedValue(idService.getId("Checkbox1.Style"), function () {
return ((PartnersHubClientVariables.getRealSignupisCheckboxError()) ? ("error-checkbox") : ("checkbox"));
}, function () {
return PartnersHubClientVariables.getRealSignupisCheckboxError();
}),
variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, PartnersHubClientVariables.getRealSignupTINCheckbox(), function (value) {
PartnersHubClientVariables.setRealSignupTINCheckbox(value);
}),
_idProps: {
service: idService,
name: "Checkbox1"
},
_widgetRecordProvider: widgetsRecordProvider
}), $text(getTranslation("FdJbWgH3KkyZryOZMik7nw#Value", "I confirm that my tax information is accurate and complete. "))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: (PartnersHubClientVariables.getRealSignupisCheckboxError() === true),
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #DC2020;"
},
text: [$text(getTranslation("EstHv0UX0kSZJz+BwhQxqw#Value", "This is required."))],
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
title: "Next",
Width: "100%"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClick$Action: function () {
var eventHandlerContext = callContext.clone();
controller.primaryButtononClick$Action(controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("TaxInfoForm")
},
_idProps: {
service: idService,
uuid: "15",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})))));
        }
    }

    return View;
});
define("PartnersHub.RealAccountCreation.EmploymentDetailsInfoBlock.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreation.EmploymentDetailsInfoBlock.mvc$translationsResources", "PartnersHub.RealAccountCreation.EmploymentDetailsInfoBlock.mvc$controller.PrimaryButtononClick.ValidateJS", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.model$ST_ed25c05f01c113e76dce143270b6165eStructure", "PartnersHub.model$ST_46d2d4840819045971995a2d73a31f87Structure"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreation_EmploymentDetailsInfoBlock_mvc_TranslationsResources, PartnersHub_RealAccountCreation_EmploymentDetailsInfoBlock_mvc_controller_PrimaryButtononClick_ValidateJS) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, PartnersHub_RealAccountCreation_EmploymentDetailsInfoBlock_mvc_TranslationsResources);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = true;
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
get _primaryButtononClick$Action() {if(!(this.hasOwnProperty("__primaryButtononClick$Action"))) {
this.__primaryButtononClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("PrimaryButtononClick", function (span) {
if(span) {
span.setAttribute("code.function", "PrimaryButtononClick");
span.setAttribute("outsystems.function.key", "a07b1949-fc66-43a0-88c2-964d652933d5");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("PrimaryButtononClick");
callContext = controller.callContext(callContext);
var validateJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializePersonalDetailsValidFieldsVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_ed25c05f01c113e76dce143270b6165eStructure))());
var jSONDeserializePersonalDetailsValidationErrorVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_46d2d4840819045971995a2d73a31f87Structure))());
validateJSResult.value = OS.Logger.startActiveSpan("Validate", function (span) {
if(span) {
span.setAttribute("code.function", "Validate");
span.setAttribute("outsystems.function.key", "cad99e95-ff32-4d20-9212-4db20489ac3f");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(PartnersHub_RealAccountCreation_EmploymentDetailsInfoBlock_mvc_controller_PrimaryButtononClick_ValidateJS, "Validate", "PrimaryButtononClick", {
TaxResidence: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getRealSignupTaxResidence(), OS.DataTypes.DataTypes.Text),
ValidationErrors: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ValidFields: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.EmploymentDetailsInfoBlock.PrimaryButtononClick$validateJSResult"))();
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
// JSON Deserialize: JSONDeserializePersonalDetailsValidationError
jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateJSResult.value.validationErrorsOut, PartnersHubModel.ST_46d2d4840819045971995a2d73a31f87Structure, false);
// JSON Deserialize: JSONDeserializePersonalDetailsValidFields
jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateJSResult.value.validFieldsOut, PartnersHubModel.ST_ed25c05f01c113e76dce143270b6165eStructure, false);
// Input1.Valid = JSONDeserializePersonalDetailsValidFields.Data.TaxResidence
model.widgets.get(idService.getId("Input1")).validAttr = jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut.taxResidenceAttr;
// Input1.ValidationMessage = JSONDeserializePersonalDetailsValidationError.Data.TaxResidence
model.widgets.get(idService.getId("Input1")).validationMessageAttr = jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut.taxResidenceAttr;
if((((PartnersHubClientVariables.getRealSignupTINCheckbox() === false) && ((PartnersHubClientVariables.getRealSignupTaxIdentificationNumber()) !== (""))))) {
// RealSignupisCheckboxError = True
PartnersHubClientVariables.setRealSignupisCheckboxError(true);
} else {
if(((((PartnersHubClientVariables.getRealSignupTINCheckbox() === true) || (PartnersHubClientVariables.getRealSignupisCheckboxError() === false)) || (PartnersHubClientVariables.getRealSignupTaxIdentificationNumber() === "")))) {
if((model.widgets.get(idService.getId("TaxInfoForm")).validAttr)) {
// Execute Action: RealSignupNextStep
PartnersHubController.default.realSignupNextStep$Action(1, callContext);
// Execute Action: GetHeaderTitle
PartnersHubController.default.getHeaderTitle$Action(callContext);
// Destination: /PartnersHub/AddressDetailsScreen
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "AddressDetailsScreen", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

}

}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__primaryButtononClick$Action;
}set _primaryButtononClick$Action(value) {this.__primaryButtononClick$Action = value;
}

get _taxIdentificationNumberOnChange$Action() {if(!(this.hasOwnProperty("__taxIdentificationNumberOnChange$Action"))) {
this.__taxIdentificationNumberOnChange$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("TaxIdentificationNumberOnChange", function (span) {
if(span) {
span.setAttribute("code.function", "TaxIdentificationNumberOnChange");
span.setAttribute("outsystems.function.key", "cf03505c-875b-4e53-9e2b-80e15113a6d0");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("TaxIdentificationNumberOnChange");
callContext = controller.callContext(callContext);
if(((PartnersHubClientVariables.getRealSignupTaxIdentificationNumber() === ""))) {
// RealSignupisCheckboxError = False
PartnersHubClientVariables.setRealSignupisCheckboxError(false);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__taxIdentificationNumberOnChange$Action;
}set _taxIdentificationNumberOnChange$Action(value) {this.__taxIdentificationNumberOnChange$Action = value;
}

get _openResidenceList$Action() {if(!(this.hasOwnProperty("__openResidenceList$Action"))) {
this.__openResidenceList$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OpenResidenceList", function (span) {
if(span) {
span.setAttribute("code.function", "OpenResidenceList");
span.setAttribute("outsystems.function.key", "e8e241ef-4ec9-4b5d-8841-cb9b9a4b95f4");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OpenResidenceList");
callContext = controller.callContext(callContext);
// Destination: /PartnersHub/TaxCountryResidence
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "TaxCountryResidence", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__openResidenceList$Action;
}set _openResidenceList$Action(value) {this.__openResidenceList$Action = value;
}


primaryButtononClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("PrimaryButtononClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "PrimaryButtononClick");
span.setAttribute("outsystems.function.key", "a07b1949-fc66-43a0-88c2-964d652933d5");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._primaryButtononClick$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

taxIdentificationNumberOnChange$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("TaxIdentificationNumberOnChange__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "TaxIdentificationNumberOnChange");
span.setAttribute("outsystems.function.key", "cf03505c-875b-4e53-9e2b-80e15113a6d0");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._taxIdentificationNumberOnChange$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

openResidenceList$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OpenResidenceList__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OpenResidenceList");
span.setAttribute("outsystems.function.key", "e8e241ef-4ec9-4b5d-8841-cb9b9a4b95f4");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._openResidenceList$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}


// Event Handler Actions
get onInitializeEventHandler() {if(!(this.hasOwnProperty("_onInitializeEventHandler"))) {
this._onInitializeEventHandler = null;
}

return this._onInitializeEventHandler;
}set onInitializeEventHandler(value) {this._onInitializeEventHandler = value;
}

get onReadyEventHandler() {if(!(this.hasOwnProperty("_onReadyEventHandler"))) {
this._onReadyEventHandler = null;
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
return controller.handleError(ex);
};
}

return this._handleError;
}set handleError(value) {this._handleError = value;
}

static checkPermissions() {
}

getDefaultTimeout() {
return PartnersHubController.default.defaultTimeout;
}

}

var Controller = ControllerInner;
// Server Actions - Variables

// Client Actions - Variables
Controller.registerVariableGroupType("PartnersHub.RealAccountCreation.EmploymentDetailsInfoBlock.PrimaryButtononClick$validateJSResult", [{
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

}
return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.RealAccountCreation.EmploymentDetailsInfoBlock.mvc$controller.PrimaryButtononClick.ValidateJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const payload = {
    TaxResidence: $parameters.TaxResidence,
}

const validationSchema = yup.object().shape({
    TaxResidence: yup.string()
    .required('Tax residence is required.')
    .noConsecutiveSpaces('Tax residence must not contain consecutive spaces.')
    .validCharacters('Tax residence can only include letters, spaces, apostrophes, periods, and hyphens.')
    .max(50, 'Tax residence must be at most 50 characters long.')
});

// Assuming validate is a function that validates
const { errors, validFields } = validate(validationSchema, payload)

$parameters.ValidationErrors = JSON.stringify(errors)
$parameters.ValidFields = JSON.stringify(validFields)
};
});


define("PartnersHub.RealAccountCreation.EmploymentDetailsInfoBlock.mvc$translationsResources.ar-001", [], function () {
return {
"EstHv0UX0kSZJz+BwhQxqw#Value": "هذا مطلوب.",
"FdJbWgH3KkyZryOZMik7nw#Value": "أؤكد أن معلوماتي الضريبية دقيقة وكاملة.",
"NGxSo6UUakOX_x3wq9OBhg#Value": "رقم التعريف الضريبي (اختياري)",
"QY+1cGF0pUyCF+5li2602w#Value": "بلد الإقامة الضريبية"
};
});

define("PartnersHub.RealAccountCreation.EmploymentDetailsInfoBlock.mvc$translationsResources.de-DE", [], function () {
return {
"EstHv0UX0kSZJz+BwhQxqw#Value": "Dies ist erforderlich.",
"FdJbWgH3KkyZryOZMik7nw#Value": "Ich bestätige, dass meine Steuerinformationen genau und vollständig sind.",
"NGxSo6UUakOX_x3wq9OBhg#Value": "Steueridentifikationsnummer (optional)",
"QY+1cGF0pUyCF+5li2602w#Value": "Wohnsitzland für steuerliche Zwecke"
};
});

define("PartnersHub.RealAccountCreation.EmploymentDetailsInfoBlock.mvc$translationsResources.es-ES", [], function () {
return {
"EstHv0UX0kSZJz+BwhQxqw#Value": "Esto es requerido.",
"FdJbWgH3KkyZryOZMik7nw#Value": "Confirmo que mi información fiscal es precisa y completa.",
"NGxSo6UUakOX_x3wq9OBhg#Value": "Número de identificación fiscal (opcional)",
"QY+1cGF0pUyCF+5li2602w#Value": "País de residencia fiscal"
};
});

define("PartnersHub.RealAccountCreation.EmploymentDetailsInfoBlock.mvc$translationsResources.fr-FR", [], function () {
return {
"EstHv0UX0kSZJz+BwhQxqw#Value": "Ceci est requis.",
"FdJbWgH3KkyZryOZMik7nw#Value": "Je confirme que mes informations fiscales sont exactes et complètes.",
"NGxSo6UUakOX_x3wq9OBhg#Value": "Numéro d\'identification fiscale (facultatif)",
"QY+1cGF0pUyCF+5li2602w#Value": "Pays de résidence fiscale"
};
});

define("PartnersHub.RealAccountCreation.EmploymentDetailsInfoBlock.mvc$translationsResources.it-IT", [], function () {
return {
"EstHv0UX0kSZJz+BwhQxqw#Value": "Questo è richiesto.",
"FdJbWgH3KkyZryOZMik7nw#Value": "Confermo che le mie informazioni fiscali sono accurate e complete.",
"NGxSo6UUakOX_x3wq9OBhg#Value": "Numero di identificazione fiscale (opzionale)",
"QY+1cGF0pUyCF+5li2602w#Value": "Paese di residenza fiscale"
};
});

define("PartnersHub.RealAccountCreation.EmploymentDetailsInfoBlock.mvc$translationsResources.pl-PL", [], function () {
return {
"EstHv0UX0kSZJz+BwhQxqw#Value": "To jest wymagane.",
"FdJbWgH3KkyZryOZMik7nw#Value": "Potwierdzam, że moje informacje podatkowe są dokładne i kompletne.",
"NGxSo6UUakOX_x3wq9OBhg#Value": "Numer identyfikacji podatkowej (opcjonalnie)",
"QY+1cGF0pUyCF+5li2602w#Value": "Kraj rezydencji podatkowej"
};
});

define("PartnersHub.RealAccountCreation.EmploymentDetailsInfoBlock.mvc$translationsResources.pt-PT", [], function () {
return {
"EstHv0UX0kSZJz+BwhQxqw#Value": "Isto é necessário.",
"FdJbWgH3KkyZryOZMik7nw#Value": "Confirmo que a minha informação fiscal é precisa e completa.",
"NGxSo6UUakOX_x3wq9OBhg#Value": "Número de identificação fiscal (opcional)",
"QY+1cGF0pUyCF+5li2602w#Value": "País de residência fiscal"
};
});

define("PartnersHub.RealAccountCreation.EmploymentDetailsInfoBlock.mvc$translationsResources.ru-RU", [], function () {
return {
"EstHv0UX0kSZJz+BwhQxqw#Value": "Это требуется.",
"FdJbWgH3KkyZryOZMik7nw#Value": "Я подтверждаю, что моя налоговая информация точна и полна.",
"NGxSo6UUakOX_x3wq9OBhg#Value": "Идентификационный номер налогоплательщика (по желанию)",
"QY+1cGF0pUyCF+5li2602w#Value": "Страна налогового резиденства"
};
});

define("PartnersHub.RealAccountCreation.EmploymentDetailsInfoBlock.mvc$translationsResources", ["exports", "PartnersHub.RealAccountCreation.EmploymentDetailsInfoBlock.mvc$translationsResources.ar-001", "PartnersHub.RealAccountCreation.EmploymentDetailsInfoBlock.mvc$translationsResources.de-DE", "PartnersHub.RealAccountCreation.EmploymentDetailsInfoBlock.mvc$translationsResources.es-ES", "PartnersHub.RealAccountCreation.EmploymentDetailsInfoBlock.mvc$translationsResources.fr-FR", "PartnersHub.RealAccountCreation.EmploymentDetailsInfoBlock.mvc$translationsResources.it-IT", "PartnersHub.RealAccountCreation.EmploymentDetailsInfoBlock.mvc$translationsResources.pl-PL", "PartnersHub.RealAccountCreation.EmploymentDetailsInfoBlock.mvc$translationsResources.pt-PT", "PartnersHub.RealAccountCreation.EmploymentDetailsInfoBlock.mvc$translationsResources.ru-RU"], function (exports, PartnersHub_RealAccountCreation_EmploymentDetailsInfoBlock_mvc_translationsResources_ar001, PartnersHub_RealAccountCreation_EmploymentDetailsInfoBlock_mvc_translationsResources_deDE, PartnersHub_RealAccountCreation_EmploymentDetailsInfoBlock_mvc_translationsResources_esES, PartnersHub_RealAccountCreation_EmploymentDetailsInfoBlock_mvc_translationsResources_frFR, PartnersHub_RealAccountCreation_EmploymentDetailsInfoBlock_mvc_translationsResources_itIT, PartnersHub_RealAccountCreation_EmploymentDetailsInfoBlock_mvc_translationsResources_plPL, PartnersHub_RealAccountCreation_EmploymentDetailsInfoBlock_mvc_translationsResources_ptPT, PartnersHub_RealAccountCreation_EmploymentDetailsInfoBlock_mvc_translationsResources_ruRU) {
return {
"ar-001": {
"translations": PartnersHub_RealAccountCreation_EmploymentDetailsInfoBlock_mvc_translationsResources_ar001,
"isRTL": true
},
"de-DE": {
"translations": PartnersHub_RealAccountCreation_EmploymentDetailsInfoBlock_mvc_translationsResources_deDE,
"isRTL": false
},
"es-ES": {
"translations": PartnersHub_RealAccountCreation_EmploymentDetailsInfoBlock_mvc_translationsResources_esES,
"isRTL": false
},
"fr-FR": {
"translations": PartnersHub_RealAccountCreation_EmploymentDetailsInfoBlock_mvc_translationsResources_frFR,
"isRTL": false
},
"it-IT": {
"translations": PartnersHub_RealAccountCreation_EmploymentDetailsInfoBlock_mvc_translationsResources_itIT,
"isRTL": false
},
"pl-PL": {
"translations": PartnersHub_RealAccountCreation_EmploymentDetailsInfoBlock_mvc_translationsResources_plPL,
"isRTL": false
},
"pt-PT": {
"translations": PartnersHub_RealAccountCreation_EmploymentDetailsInfoBlock_mvc_translationsResources_ptPT,
"isRTL": false
},
"ru-RU": {
"translations": PartnersHub_RealAccountCreation_EmploymentDetailsInfoBlock_mvc_translationsResources_ruRU,
"isRTL": false
}
};
});

