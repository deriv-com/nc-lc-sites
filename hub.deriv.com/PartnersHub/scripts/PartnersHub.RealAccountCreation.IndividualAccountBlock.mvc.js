define("PartnersHub.RealAccountCreation.IndividualAccountBlock.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.model$ST_644b44fa626b6f737fea986b5d6b3b48Structure", "PartnersHub.model$ST_e96a6519d80d7a16349a873d1506dd8bStructure"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController) {
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
IndividualForm: OS.Model.ValidationWidgetRecord,
IndividualWebsite: OS.Model.ValidationWidgetRecord
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

define("PartnersHub.RealAccountCreation.IndividualAccountBlock.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreation.IndividualAccountBlock.mvc$model", "PartnersHub.RealAccountCreation.IndividualAccountBlock.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.model$ST_644b44fa626b6f737fea986b5d6b3b48Structure", "PartnersHub.model$ST_e96a6519d80d7a16349a873d1506dd8bStructure"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_RealAccountCreation_IndividualAccountBlock_mvc_model, PartnersHub_RealAccountCreation_IndividualAccountBlock_mvc_controller, PartnersHubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "RealAccountCreation.IndividualAccountBlock"; }

        static getAttributes() { return {
codeFunction: "IndividualAccountBlock",
functionKey: "3027d0f8-72ee-4b2a-8801-4955a75d325b",
functionOwnerName: "PartnersHub",
functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.RealAccountCreation.IndividualAccountBlock.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreation_IndividualAccountBlock_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreation_IndividualAccountBlock_mvc_controller;
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
extendedProperties: {
style: "display: flex; flex-direction: column; gap: 16px;"
},
visible: true,
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
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #272B30; font-size: 16px;"
},
text: ["Share the website URL you\'ll use for promoting our services."],
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "display: flex; flex-direction: column; gap: 8px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Your website"), React.createElement(OSWidgets.Form, {
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
name: "IndividualForm"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("IndividualForm")
},
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: false,
maxLength: 50,
prompt: "Enter your website address",
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupIndividualWebsite(), function (value) {
PartnersHubClientVariables.setRealSignupIndividualWebsite(value);
}),
_idProps: {
service: idService,
name: "IndividualWebsite"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "real-signup-next-button-individual-screen",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
isDefault: false,
onClick: function () {
_this.validateWidget(idService.getId("IndividualForm"));
var eventHandlerContext = callContext.clone();
controller.nextOnClick$Action(controller.callContext(eventHandlerContext));


;
},
style: "real-signup-individual-next-button",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #f3f6f8; font-size: 16px; font-weight: bold;"
},
text: [$text(getTranslation("Uz2McX9gT0e5iVjHfJ9Drw#Value", "Next"))],
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
})))))));
        }
    }

    return View;
});
define("PartnersHub.RealAccountCreation.IndividualAccountBlock.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreation.IndividualAccountBlock.mvc$translationsResources", "PartnersHub.RealAccountCreation.IndividualAccountBlock.mvc$controller.NextOnClick.ValidateJS", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.model$ST_644b44fa626b6f737fea986b5d6b3b48Structure", "PartnersHub.model$ST_e96a6519d80d7a16349a873d1506dd8bStructure"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreation_IndividualAccountBlock_mvc_TranslationsResources, PartnersHub_RealAccountCreation_IndividualAccountBlock_mvc_controller_NextOnClick_ValidateJS) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, PartnersHub_RealAccountCreation_IndividualAccountBlock_mvc_TranslationsResources);
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
span.setAttribute("outsystems.function.key", "5bb106e1-5933-4e39-a861-b40c925f83ce");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("NextOnClick");
callContext = controller.callContext(callContext);
var validateJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializePersonalDetailsValidationErrorVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_644b44fa626b6f737fea986b5d6b3b48Structure))());
var jSONDeserializePersonalDetailsValidFieldsVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_e96a6519d80d7a16349a873d1506dd8bStructure))());
validateJSResult.value = OS.Logger.startActiveSpan("Validate", function (span) {
if(span) {
span.setAttribute("code.function", "Validate");
span.setAttribute("outsystems.function.key", "f334991e-d777-4ce0-8901-b84bc8324e6f");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(PartnersHub_RealAccountCreation_IndividualAccountBlock_mvc_controller_NextOnClick_ValidateJS, "Validate", "NextOnClick", {
Website: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getRealSignupIndividualWebsite(), OS.DataTypes.DataTypes.Text),
ValidationErrors: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ValidFields: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.IndividualAccountBlock.NextOnClick$validateJSResult"))();
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
jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateJSResult.value.validationErrorsOut, PartnersHubModel.ST_644b44fa626b6f737fea986b5d6b3b48Structure, false);
// JSON Deserialize: JSONDeserializePersonalDetailsValidFields
jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateJSResult.value.validFieldsOut, PartnersHubModel.ST_e96a6519d80d7a16349a873d1506dd8bStructure, false);
// IndividualWebsite.Valid = JSONDeserializePersonalDetailsValidFields.Data.Website
model.widgets.get(idService.getId("IndividualWebsite")).validAttr = jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut.websiteAttr;
// IndividualWebsite.ValidationMessage = JSONDeserializePersonalDetailsValidationError.Data.Website
model.widgets.get(idService.getId("IndividualWebsite")).validationMessageAttr = jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut.websiteAttr;
if((model.widgets.get(idService.getId("IndividualForm")).validAttr)) {
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
span.setAttribute("outsystems.function.key", "5bb106e1-5933-4e39-a861-b40c925f83ce");
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
Controller.registerVariableGroupType("PartnersHub.RealAccountCreation.IndividualAccountBlock.NextOnClick$validateJSResult", [{
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

define("PartnersHub.RealAccountCreation.IndividualAccountBlock.mvc$controller.NextOnClick.ValidateJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const payload = {
    Website: $parameters.Website,
}

const validationSchema = yup.object().shape({
    Website: yup.string()
        .required('Website is required.')
        .max(100, 'Website must be at most 100 characters long.')
        .matches(/^(https?:\/\/.+|www\..+)$/, 'Website must be a valid URL starting with http, https, or www. Example: https://example.com or www.example.com.')
        .url('Website must be a valid URL.') // Keep the .url() check for additional validation
});

// Assuming validate is a function that validates
const { errors, validFields } = validate(validationSchema, payload)

$parameters.ValidationErrors = JSON.stringify(errors)
$parameters.ValidFields = JSON.stringify(validFields)
};
});


define("PartnersHub.RealAccountCreation.IndividualAccountBlock.mvc$translationsResources.ar-001", [], function () {
return {
"Uz2McX9gT0e5iVjHfJ9Drw#Value": "التالي"
};
});

define("PartnersHub.RealAccountCreation.IndividualAccountBlock.mvc$translationsResources.de-DE", [], function () {
return {
"Uz2McX9gT0e5iVjHfJ9Drw#Value": "Nächste"
};
});

define("PartnersHub.RealAccountCreation.IndividualAccountBlock.mvc$translationsResources.es-ES", [], function () {
return {
"Uz2McX9gT0e5iVjHfJ9Drw#Value": "Siguiente"
};
});

define("PartnersHub.RealAccountCreation.IndividualAccountBlock.mvc$translationsResources.fr-FR", [], function () {
return {
"Uz2McX9gT0e5iVjHfJ9Drw#Value": "Suivant"
};
});

define("PartnersHub.RealAccountCreation.IndividualAccountBlock.mvc$translationsResources.it-IT", [], function () {
return {
"Uz2McX9gT0e5iVjHfJ9Drw#Value": "Prossimo"
};
});

define("PartnersHub.RealAccountCreation.IndividualAccountBlock.mvc$translationsResources.pl-PL", [], function () {
return {
"Uz2McX9gT0e5iVjHfJ9Drw#Value": "Następny"
};
});

define("PartnersHub.RealAccountCreation.IndividualAccountBlock.mvc$translationsResources.pt-PT", [], function () {
return {
"Uz2McX9gT0e5iVjHfJ9Drw#Value": "Próximo"
};
});

define("PartnersHub.RealAccountCreation.IndividualAccountBlock.mvc$translationsResources.ru-RU", [], function () {
return {
"Uz2McX9gT0e5iVjHfJ9Drw#Value": "Следующий"
};
});

define("PartnersHub.RealAccountCreation.IndividualAccountBlock.mvc$translationsResources", ["exports", "PartnersHub.RealAccountCreation.IndividualAccountBlock.mvc$translationsResources.ar-001", "PartnersHub.RealAccountCreation.IndividualAccountBlock.mvc$translationsResources.de-DE", "PartnersHub.RealAccountCreation.IndividualAccountBlock.mvc$translationsResources.es-ES", "PartnersHub.RealAccountCreation.IndividualAccountBlock.mvc$translationsResources.fr-FR", "PartnersHub.RealAccountCreation.IndividualAccountBlock.mvc$translationsResources.it-IT", "PartnersHub.RealAccountCreation.IndividualAccountBlock.mvc$translationsResources.pl-PL", "PartnersHub.RealAccountCreation.IndividualAccountBlock.mvc$translationsResources.pt-PT", "PartnersHub.RealAccountCreation.IndividualAccountBlock.mvc$translationsResources.ru-RU"], function (exports, PartnersHub_RealAccountCreation_IndividualAccountBlock_mvc_translationsResources_ar001, PartnersHub_RealAccountCreation_IndividualAccountBlock_mvc_translationsResources_deDE, PartnersHub_RealAccountCreation_IndividualAccountBlock_mvc_translationsResources_esES, PartnersHub_RealAccountCreation_IndividualAccountBlock_mvc_translationsResources_frFR, PartnersHub_RealAccountCreation_IndividualAccountBlock_mvc_translationsResources_itIT, PartnersHub_RealAccountCreation_IndividualAccountBlock_mvc_translationsResources_plPL, PartnersHub_RealAccountCreation_IndividualAccountBlock_mvc_translationsResources_ptPT, PartnersHub_RealAccountCreation_IndividualAccountBlock_mvc_translationsResources_ruRU) {
return {
"ar-001": {
"translations": PartnersHub_RealAccountCreation_IndividualAccountBlock_mvc_translationsResources_ar001,
"isRTL": true
},
"de-DE": {
"translations": PartnersHub_RealAccountCreation_IndividualAccountBlock_mvc_translationsResources_deDE,
"isRTL": false
},
"es-ES": {
"translations": PartnersHub_RealAccountCreation_IndividualAccountBlock_mvc_translationsResources_esES,
"isRTL": false
},
"fr-FR": {
"translations": PartnersHub_RealAccountCreation_IndividualAccountBlock_mvc_translationsResources_frFR,
"isRTL": false
},
"it-IT": {
"translations": PartnersHub_RealAccountCreation_IndividualAccountBlock_mvc_translationsResources_itIT,
"isRTL": false
},
"pl-PL": {
"translations": PartnersHub_RealAccountCreation_IndividualAccountBlock_mvc_translationsResources_plPL,
"isRTL": false
},
"pt-PT": {
"translations": PartnersHub_RealAccountCreation_IndividualAccountBlock_mvc_translationsResources_ptPT,
"isRTL": false
},
"ru-RU": {
"translations": PartnersHub_RealAccountCreation_IndividualAccountBlock_mvc_translationsResources_ruRU,
"isRTL": false
}
};
});

