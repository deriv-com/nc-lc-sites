define("PartnersHub.RealAccountCreation.CompanyAccountDetailsBlock.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.model$ST_d4a90cbee654cb75906c44b5d5aefa81Structure", "PartnersHub.model$ST_77e6801b182d5477e712105a2d67f02fStructure"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController) {
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
CompanyDetailsForm: OS.Model.ValidationWidgetRecord,
CompanyNameInput: OS.Model.ValidationWidgetRecord,
CompanyRegistrationNumberInput: OS.Model.ValidationWidgetRecord,
CompanyWebsiteInput: OS.Model.ValidationWidgetRecord
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

define("PartnersHub.RealAccountCreation.CompanyAccountDetailsBlock.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreation.CompanyAccountDetailsBlock.mvc$model", "PartnersHub.RealAccountCreation.CompanyAccountDetailsBlock.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.model$ST_d4a90cbee654cb75906c44b5d5aefa81Structure", "PartnersHub.model$ST_77e6801b182d5477e712105a2d67f02fStructure"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_RealAccountCreation_CompanyAccountDetailsBlock_mvc_model, PartnersHub_RealAccountCreation_CompanyAccountDetailsBlock_mvc_controller, PartnersHubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "RealAccountCreation.CompanyAccountDetailsBlock"; }

        static getAttributes() { return {
codeFunction: "CompanyAccountDetailsBlock",
functionKey: "15ef1809-b52e-4cbc-8968-7a4934be06b9",
functionOwnerName: "PartnersHub",
functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.RealAccountCreation.CompanyAccountDetailsBlock.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreation_CompanyAccountDetailsBlock_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreation_CompanyAccountDetailsBlock_mvc_controller;
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
uuid: "0"
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
name: "CompanyDetailsForm"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column gap-s",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Company name"), React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("CompanyDetailsForm")
},
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: false,
maxLength: 100,
prompt: "Enter your company name",
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupCompanyName(), function (value) {
PartnersHubClientVariables.setRealSignupCompanyName(value);
}),
_idProps: {
service: idService,
name: "CompanyNameInput"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column gap-s",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Company registration number"), React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("CompanyDetailsForm")
},
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: false,
maxLength: 0,
prompt: "Enter your company registration number",
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupCompanyRegistrationNumber(), function (value) {
PartnersHubClientVariables.setRealSignupCompanyRegistrationNumber(value);
}),
_idProps: {
service: idService,
name: "CompanyRegistrationNumberInput"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column gap-s",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Company website"), React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("CompanyDetailsForm")
},
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: false,
maxLength: 100,
prompt: "Enter your company website address",
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupCompanyWebsite(), function (value) {
PartnersHubClientVariables.setRealSignupCompanyWebsite(value);
}),
_idProps: {
service: idService,
name: "CompanyWebsiteInput"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "real-signup-next-button-company-screen",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
isDefault: false,
onClick: function () {
_this.validateWidget(idService.getId("CompanyDetailsForm"));
var eventHandlerContext = callContext.clone();
controller.nextOnClick$Action(controller.callContext(eventHandlerContext));


;
},
style: "real-signup-company-next-button",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #f3f6f8; font-size: 16px; font-weight: bold;"
},
text: [$text(getTranslation("3Q7iG50tnUKa2rhDgeMHgA#Value", "Next"))],
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}))))));
        }
    }

    return View;
});
define("PartnersHub.RealAccountCreation.CompanyAccountDetailsBlock.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreation.CompanyAccountDetailsBlock.mvc$translationsResources", "PartnersHub.RealAccountCreation.CompanyAccountDetailsBlock.mvc$controller.NextOnClick.ValidateJS", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.model$ST_d4a90cbee654cb75906c44b5d5aefa81Structure", "PartnersHub.model$ST_77e6801b182d5477e712105a2d67f02fStructure"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreation_CompanyAccountDetailsBlock_mvc_TranslationsResources, PartnersHub_RealAccountCreation_CompanyAccountDetailsBlock_mvc_controller_NextOnClick_ValidateJS) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, PartnersHub_RealAccountCreation_CompanyAccountDetailsBlock_mvc_TranslationsResources);
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
get _nextOnClick$Action() {if(!(this.hasOwnProperty("__nextOnClick$Action"))) {
this.__nextOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("NextOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "NextOnClick");
span.setAttribute("outsystems.function.key", "2f3a9cc0-f69b-4a4a-b8bf-ab6268989b6b");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("NextOnClick");
callContext = controller.callContext(callContext);
var validateJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializePersonalDetailsValidationErrorVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_d4a90cbee654cb75906c44b5d5aefa81Structure))());
var jSONDeserializePersonalDetailsValidFieldsVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_77e6801b182d5477e712105a2d67f02fStructure))());
validateJSResult.value = OS.Logger.startActiveSpan("Validate", function (span) {
if(span) {
span.setAttribute("code.function", "Validate");
span.setAttribute("outsystems.function.key", "85578e06-ed91-4862-b4cd-102680eab55f");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(PartnersHub_RealAccountCreation_CompanyAccountDetailsBlock_mvc_controller_NextOnClick_ValidateJS, "Validate", "NextOnClick", {
CompanyRegistrationNumber: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getRealSignupCompanyRegistrationNumber(), OS.DataTypes.DataTypes.Text),
CompanyWebsite: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getRealSignupCompanyWebsite(), OS.DataTypes.DataTypes.Text),
CompanyName: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getRealSignupCompanyName(), OS.DataTypes.DataTypes.Text),
ValidationErrors: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ValidFields: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.CompanyAccountDetailsBlock.NextOnClick$validateJSResult"))();
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
jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateJSResult.value.validationErrorsOut, PartnersHubModel.ST_d4a90cbee654cb75906c44b5d5aefa81Structure, false);
// JSON Deserialize: JSONDeserializePersonalDetailsValidFields
jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateJSResult.value.validFieldsOut, PartnersHubModel.ST_77e6801b182d5477e712105a2d67f02fStructure, false);
// CompanyNameInput.Valid = JSONDeserializePersonalDetailsValidFields.Data.CompanyName
model.widgets.get(idService.getId("CompanyNameInput")).validAttr = jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut.companyNameAttr;
// CompanyNameInput.ValidationMessage = JSONDeserializePersonalDetailsValidationError.Data.CompanyName
model.widgets.get(idService.getId("CompanyNameInput")).validationMessageAttr = jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut.companyNameAttr;
// CompanyRegistrationNumberInput.Valid = JSONDeserializePersonalDetailsValidFields.Data.CompanyRegistrationNumber
model.widgets.get(idService.getId("CompanyRegistrationNumberInput")).validAttr = jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut.companyRegistrationNumberAttr;
// CompanyRegistrationNumberInput.ValidationMessage = JSONDeserializePersonalDetailsValidationError.Data.CompanyRegistrationNumber
model.widgets.get(idService.getId("CompanyRegistrationNumberInput")).validationMessageAttr = jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut.companyRegistrationNumberAttr;
// CompanyWebsiteInput.Valid = JSONDeserializePersonalDetailsValidFields.Data.CompanyWebsite
model.widgets.get(idService.getId("CompanyWebsiteInput")).validAttr = jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut.companyWebsiteAttr;
// CompanyWebsiteInput.ValidationMessage = JSONDeserializePersonalDetailsValidationError.Data.CompanyWebsite
model.widgets.get(idService.getId("CompanyWebsiteInput")).validationMessageAttr = jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut.companyWebsiteAttr;
if((model.widgets.get(idService.getId("CompanyDetailsForm")).validAttr)) {
// Execute Action: RealSignupNextStep
PartnersHubController.default.realSignupNextStep$Action(1, callContext);
// Destination: /PartnersHub/TermsOfUseScreen
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "TermsOfUseScreen", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__nextOnClick$Action;
}set _nextOnClick$Action(value) {this.__nextOnClick$Action = value;
}


nextOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("NextOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "NextOnClick");
span.setAttribute("outsystems.function.key", "2f3a9cc0-f69b-4a4a-b8bf-ab6268989b6b");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._nextOnClick$Action, callContext);
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
Controller.registerVariableGroupType("PartnersHub.RealAccountCreation.CompanyAccountDetailsBlock.NextOnClick$validateJSResult", [{
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

define("PartnersHub.RealAccountCreation.CompanyAccountDetailsBlock.mvc$controller.NextOnClick.ValidateJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const payload = {
    CompanyName: $parameters.CompanyName,
    CompanyRegistrationNumber: $parameters.CompanyRegistrationNumber,
    CompanyWebsite: $parameters.CompanyWebsite
}

const validationSchema = yup.object().shape({
   CompanyName: yup.string()
    .required('Company name is required.')
    .noConsecutiveSpaces('Company name must not contain consecutive spaces.')
    .matches(/^[A-Za-z0-9\s\.\,\-\&]+$/, 'Company name can only include letters, numbers, spaces, commas, periods, hyphens, and ampersands (&).')
    .max(100, 'Company name must be at most 100 characters long.'),
    CompanyRegistrationNumber: yup.string()
    .required('Company registration number is required.')
    .matches(/^[A-Za-z0-9]+$/, 'Company registration number can only include letters and numbers.')
    .max(30, 'Company registration number must be at most 30 characters long.'),
    CompanyWebsite: yup.string()
    .required('Company website is required.')
    .url('Company website must be a valid URL starting with http or https. Example: https://example.com')
    .matches(/^https?:\/\/.+/, 'Company website must start with http or https. Example: https://example.com')
    .max(100, 'Company website must be at most 100 characters long.')
});

// Assuming validate is a function that validates
const { errors, validFields } = validate(validationSchema, payload)

$parameters.ValidationErrors = JSON.stringify(errors)
$parameters.ValidFields = JSON.stringify(validFields)
};
});


define("PartnersHub.RealAccountCreation.CompanyAccountDetailsBlock.mvc$translationsResources.ar-001", [], function () {
return {
"3Q7iG50tnUKa2rhDgeMHgA#Value": "التالي"
};
});

define("PartnersHub.RealAccountCreation.CompanyAccountDetailsBlock.mvc$translationsResources.de-DE", [], function () {
return {
"3Q7iG50tnUKa2rhDgeMHgA#Value": "Nächste"
};
});

define("PartnersHub.RealAccountCreation.CompanyAccountDetailsBlock.mvc$translationsResources.es-ES", [], function () {
return {
"3Q7iG50tnUKa2rhDgeMHgA#Value": "Siguiente"
};
});

define("PartnersHub.RealAccountCreation.CompanyAccountDetailsBlock.mvc$translationsResources.fr-FR", [], function () {
return {
"3Q7iG50tnUKa2rhDgeMHgA#Value": "Suivant"
};
});

define("PartnersHub.RealAccountCreation.CompanyAccountDetailsBlock.mvc$translationsResources.it-IT", [], function () {
return {
"3Q7iG50tnUKa2rhDgeMHgA#Value": "Prossimo"
};
});

define("PartnersHub.RealAccountCreation.CompanyAccountDetailsBlock.mvc$translationsResources.pl-PL", [], function () {
return {
"3Q7iG50tnUKa2rhDgeMHgA#Value": "Następny"
};
});

define("PartnersHub.RealAccountCreation.CompanyAccountDetailsBlock.mvc$translationsResources.pt-PT", [], function () {
return {
"3Q7iG50tnUKa2rhDgeMHgA#Value": "Próximo"
};
});

define("PartnersHub.RealAccountCreation.CompanyAccountDetailsBlock.mvc$translationsResources.ru-RU", [], function () {
return {
"3Q7iG50tnUKa2rhDgeMHgA#Value": "Следующий"
};
});

define("PartnersHub.RealAccountCreation.CompanyAccountDetailsBlock.mvc$translationsResources", ["exports", "PartnersHub.RealAccountCreation.CompanyAccountDetailsBlock.mvc$translationsResources.ar-001", "PartnersHub.RealAccountCreation.CompanyAccountDetailsBlock.mvc$translationsResources.de-DE", "PartnersHub.RealAccountCreation.CompanyAccountDetailsBlock.mvc$translationsResources.es-ES", "PartnersHub.RealAccountCreation.CompanyAccountDetailsBlock.mvc$translationsResources.fr-FR", "PartnersHub.RealAccountCreation.CompanyAccountDetailsBlock.mvc$translationsResources.it-IT", "PartnersHub.RealAccountCreation.CompanyAccountDetailsBlock.mvc$translationsResources.pl-PL", "PartnersHub.RealAccountCreation.CompanyAccountDetailsBlock.mvc$translationsResources.pt-PT", "PartnersHub.RealAccountCreation.CompanyAccountDetailsBlock.mvc$translationsResources.ru-RU"], function (exports, PartnersHub_RealAccountCreation_CompanyAccountDetailsBlock_mvc_translationsResources_ar001, PartnersHub_RealAccountCreation_CompanyAccountDetailsBlock_mvc_translationsResources_deDE, PartnersHub_RealAccountCreation_CompanyAccountDetailsBlock_mvc_translationsResources_esES, PartnersHub_RealAccountCreation_CompanyAccountDetailsBlock_mvc_translationsResources_frFR, PartnersHub_RealAccountCreation_CompanyAccountDetailsBlock_mvc_translationsResources_itIT, PartnersHub_RealAccountCreation_CompanyAccountDetailsBlock_mvc_translationsResources_plPL, PartnersHub_RealAccountCreation_CompanyAccountDetailsBlock_mvc_translationsResources_ptPT, PartnersHub_RealAccountCreation_CompanyAccountDetailsBlock_mvc_translationsResources_ruRU) {
return {
"ar-001": {
"translations": PartnersHub_RealAccountCreation_CompanyAccountDetailsBlock_mvc_translationsResources_ar001,
"isRTL": true
},
"de-DE": {
"translations": PartnersHub_RealAccountCreation_CompanyAccountDetailsBlock_mvc_translationsResources_deDE,
"isRTL": false
},
"es-ES": {
"translations": PartnersHub_RealAccountCreation_CompanyAccountDetailsBlock_mvc_translationsResources_esES,
"isRTL": false
},
"fr-FR": {
"translations": PartnersHub_RealAccountCreation_CompanyAccountDetailsBlock_mvc_translationsResources_frFR,
"isRTL": false
},
"it-IT": {
"translations": PartnersHub_RealAccountCreation_CompanyAccountDetailsBlock_mvc_translationsResources_itIT,
"isRTL": false
},
"pl-PL": {
"translations": PartnersHub_RealAccountCreation_CompanyAccountDetailsBlock_mvc_translationsResources_plPL,
"isRTL": false
},
"pt-PT": {
"translations": PartnersHub_RealAccountCreation_CompanyAccountDetailsBlock_mvc_translationsResources_ptPT,
"isRTL": false
},
"ru-RU": {
"translations": PartnersHub_RealAccountCreation_CompanyAccountDetailsBlock_mvc_translationsResources_ruRU,
"isRTL": false
}
};
});

