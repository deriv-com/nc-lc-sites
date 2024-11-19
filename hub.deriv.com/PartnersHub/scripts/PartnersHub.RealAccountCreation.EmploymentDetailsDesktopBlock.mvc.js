define("PartnersHub.RealAccountCreation.EmploymentDetailsDesktopBlock.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "RESTAPIWebsocketOfficial.model", "PartnersHub.controller", "RESTAPIWebsocketOfficial.controller", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.model$ST_7fbab05f3644735e219d7d120bd6a352Structure", "PartnersHub.model$ST_b5dd817fa61c45f96c6cb802ea7c9118Structure", "PartnersHub.controller$UseDevice", "RESTAPIWebsocketOfficial.controller$ResidenceList", "PartnersHub.model$RC_4535b2a68fa04382d8868d60004b6438", "PartnersHub.model$RL_117c7b7da327962152f7a4113c25ca3f"], function (OSRuntimeCore, PartnersHubModel, RESTAPIWebsocketOfficialModel, PartnersHubController, RESTAPIWebsocketOfficialController) {
var OS = OSRuntimeCore;
{class GetEmploymentStatusesAggrRecInner extends 
OS.Model.AggregateRecord {
static attributesToDeclare() {
return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new GetEmploymentStatusesAggrRec(new GetEmploymentStatusesAggrRec.RecordClass({
RecordListType: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

GetEmploymentStatusesAggrRecInner.RecordListType = PartnersHubModel.RL_117c7b7da327962152f7a4113c25ca3f;
var GetEmploymentStatusesAggrRec = GetEmploymentStatusesAggrRecInner;
GetEmploymentStatusesAggrRec.init();
}


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("NoTaxIdentificationNumber", "noTaxIdentificationNumberVar", "NoTaxIdentificationNumber", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("ResidenceListResponse", "residenceListResponseVar", "ResidenceListResponse", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_63a473e932ef99f5271718b62399e682Structure());
}, false, RESTAPIWebsocketOfficialModel.ST_63a473e932ef99f5271718b62399e682Structure), 
this.attr("GetEmploymentStatuses", "getEmploymentStatusesAggr", "GetEmploymentStatuses", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetEmploymentStatusesAggrRec());
}, true, GetEmploymentStatusesAggrRec)
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
Form1: OS.Model.ValidationWidgetRecord,
Dropdown1: OS.Model.ValidationWidgetRecord,
Checkbox1: OS.Model.ValidationWidgetRecord,
TaxResidence: OS.Model.ValidationWidgetRecord,
TaxIdentificationNumber: OS.Model.ValidationWidgetRecord,
Checkbox2: OS.Model.ValidationWidgetRecord
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

define("PartnersHub.RealAccountCreation.EmploymentDetailsDesktopBlock.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreation.EmploymentDetailsDesktopBlock.mvc$model", "PartnersHub.RealAccountCreation.EmploymentDetailsDesktopBlock.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "CustomComponentsOfficial.ButtonVariants.PrimaryButton.mvc$view", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.model$ST_7fbab05f3644735e219d7d120bd6a352Structure", "PartnersHub.model$ST_b5dd817fa61c45f96c6cb802ea7c9118Structure", "PartnersHub.controller$UseDevice", "RESTAPIWebsocketOfficial.controller$ResidenceList", "PartnersHub.model$RC_4535b2a68fa04382d8868d60004b6438", "PartnersHub.model$RL_117c7b7da327962152f7a4113c25ca3f"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, React, OSView, PartnersHub_RealAccountCreation_EmploymentDetailsDesktopBlock_mvc_model, PartnersHub_RealAccountCreation_EmploymentDetailsDesktopBlock_mvc_controller, PartnersHubClientVariables, OSWidgets, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "RealAccountCreation.EmploymentDetailsDesktopBlock"; }

        static getAttributes() { return {
codeFunction: "EmploymentDetailsDesktopBlock",
functionKey: "33eca26f-53f4-40df-bf87-7ed247390cb6",
functionOwnerName: "PartnersHub",
functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.RealAccountCreation.EmploymentDetailsDesktopBlock.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreation_EmploymentDetailsDesktopBlock_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreation_EmploymentDetailsDesktopBlock_mvc_controller;
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
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "1"
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
name: "Form1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "EmploymentStatusContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
extendedProperties: {
style: "margin-bottom: 8px;"
},
gridProperties: {
classes: "OSFillParent"
},
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("376FLsqCZkC7RsXHMdUlgw#Value", "Employment status"))), React.createElement(OSWidgets.Dropdown, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form1")
},
dropdownMode: /*Custom*/ 1,
emptyValue: "-- Select your Employment Status --",
enabled: true,
list: model.variables.getEmploymentStatusesAggr.listOut,
mandatory: true,
onChange: function () {
var eventHandlerContext = callContext.clone();
controller.dropdown1OnChange$Action(controller.callContext(eventHandlerContext));

;
},
style: "dropdown",
values: function (elem) {
return elem.employmentStatusAttr.statusAttr;
},
variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupEmploymentStatus(), function (value) {
PartnersHubClientVariables.setRealSignupEmploymentStatus(value);
}),
_idProps: {
service: idService,
name: "Dropdown1"
},
_widgetRecordProvider: widgetsRecordProvider,
list_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEmploymentStatusesAggr.dataFetchStatusAttr),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Expression, {
value: model.variables.getEmploymentStatusesAggr.listOut.getCurrent(callContext.iterationContext).employmentStatusAttr.statusAttr,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEmploymentStatusesAggr.dataFetchStatusAttr),
_dependencies: []
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.getEmploymentStatusesAggr.dataFetchStatusAttr)]
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "display-flex gap-s flex-direction-column",
visible: ((PartnersHubClientVariables.getRealSignupEmploymentStatus() === "Student") || (PartnersHubClientVariables.getRealSignupEmploymentStatus() === "Unemployed")),
_idProps: {
service: idService,
name: "NoTaxIdentificationCheckbox"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex align-items-center gap-s",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Checkbox, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form1")
},
enabled: true,
style: "checkbox",
variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, PartnersHubClientVariables.getRealSignupNoTaxIdentificationNumber(), function (value) {
PartnersHubClientVariables.setRealSignupNoTaxIdentificationNumber(value);
}),
_idProps: {
service: idService,
name: "Checkbox1"
},
_widgetRecordProvider: widgetsRecordProvider
}), $text(getTranslation("4PLT8LjYlEKUqQ5oSZL91w#Value", "I don\'t have my tax identification number"))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: ((PartnersHubClientVariables.getRealSignupNoTaxIdentificationNumber() === false) && (PartnersHubClientVariables.getRealSignupTINCheckboxError() === true)),
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #DC2020;"
},
text: [$text(getTranslation("DUWmg6Ux60ii0nwcLZdVjA#Value", "This is required."))],
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "TaxResidenceContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
extendedProperties: {
style: "margin-bottom: 8px;"
},
gridProperties: {
classes: "OSFillParent"
},
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("X4XPodNkekOnfeAKdawWKg#Value", "Tax residence"))), React.createElement(OSWidgets.Dropdown, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form1")
},
dropdownMode: /*Custom*/ 1,
emptyValue: "-- Select your tax residence --",
enabled: ((model.variables.residenceListResponseVar.residence_listAttr.length > 0) && (PartnersHubClientVariables.getRealSignupNoTaxIdentificationNumber() === false)),
list: model.variables.residenceListResponseVar.residence_listAttr,
mandatory: false,
style: "dropdown",
values: function (elem) {
return elem.valueAttr;
},
variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupTaxResidence(), function (value) {
PartnersHubClientVariables.setRealSignupTaxResidence(value);
}),
_idProps: {
service: idService,
name: "TaxResidence"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Expression, {
value: model.variables.residenceListResponseVar.residence_listAttr.getCurrent(callContext.iterationContext).textAttr,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, callContext, idService, "2")
},
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "TINContainer"
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
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("wQn2p+HWs0GpHSjojm0f6A#Value", "Tax identification number (optional)"))), React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form1")
},
enabled: (PartnersHubClientVariables.getRealSignupNoTaxIdentificationNumber() === false),
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
animate: false,
visible: true,
_idProps: {
service: idService,
name: "ConfirmTaxInfoCheckbox"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
style: "align-items: center; display: flex; gap: 8px;"
},
visible: ((PartnersHubClientVariables.getRealSignupTaxIdentificationNumber()) !== ("")),
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Checkbox, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form1")
},
enabled: true,
onChange: function () {
var eventHandlerContext = callContext.clone();
controller.checkbox2OnChange$Action(controller.callContext(eventHandlerContext));

;
},
style: model.getCachedValue(idService.getId("Checkbox2.Style"), function () {
return ((PartnersHubClientVariables.getRealSignupisCheckboxError()) ? ("error-checkbox") : ("checkbox"));
}, function () {
return PartnersHubClientVariables.getRealSignupisCheckboxError();
}),
variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, PartnersHubClientVariables.getRealSignupTINCheckbox(), function (value) {
PartnersHubClientVariables.setRealSignupTINCheckbox(value);
}),
_idProps: {
service: idService,
name: "Checkbox2"
},
_widgetRecordProvider: widgetsRecordProvider
}), $text(getTranslation("tEfFIqNqmUmjwA2mS9dplA#Value", "I confirm that my tax information is accurate and complete. "))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: (((PartnersHubClientVariables.getRealSignupisCheckboxError() === true) && (PartnersHubClientVariables.getRealSignupNoTaxIdentificationNumber() === false)) && ((PartnersHubClientVariables.getRealSignupTaxIdentificationNumber()) !== (""))),
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #DC2020;"
},
text: [$text(getTranslation("ud1WDOZJNEu8Mm3ggIEYCQ#Value", "This is required."))],
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 24px; text-align: right;"
},
visible: true,
_idProps: {
service: idService,
uuid: "24"
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
borderRadius: "100px",
Width: "100px",
enabled: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClick$Action: function () {
var eventHandlerContext = callContext.clone();
controller.nextOnClick$Action(controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form1")
},
_idProps: {
service: idService,
uuid: "25",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))))));
        }
    }

    return View;
});
define("PartnersHub.RealAccountCreation.EmploymentDetailsDesktopBlock.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreation.EmploymentDetailsDesktopBlock.mvc$translationsResources", "PartnersHub.RealAccountCreation.EmploymentDetailsDesktopBlock.mvc$controller.NextOnClick.ValidateJS", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.model$ST_7fbab05f3644735e219d7d120bd6a352Structure", "PartnersHub.model$ST_b5dd817fa61c45f96c6cb802ea7c9118Structure", "PartnersHub.controller$UseDevice", "RESTAPIWebsocketOfficial.controller$ResidenceList", "PartnersHub.model$RC_4535b2a68fa04382d8868d60004b6438", "PartnersHub.model$RL_117c7b7da327962152f7a4113c25ca3f"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreation_EmploymentDetailsDesktopBlock_mvc_TranslationsResources, PartnersHub_RealAccountCreation_EmploymentDetailsDesktopBlock_mvc_controller_NextOnClick_ValidateJS) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, PartnersHub_RealAccountCreation_EmploymentDetailsDesktopBlock_mvc_TranslationsResources);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getEmploymentStatuses$AggrRefresh: 0
};
this.dataFetchDependentsGraph = {
getEmploymentStatuses$AggrRefresh: []
};
this.shouldSendClientVarsToDataSources = true;
}

// Server Actions - Methods

// Aggregates and Data Actions
get getEmploymentStatuses$AggrRefresh() {if(!(this.hasOwnProperty("_getEmploymentStatuses$AggrRefresh"))) {
this._getEmploymentStatuses$AggrRefresh = function () {
var innerBody = function (maxRecords, startIndex, callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetEmploymentStatuses", "screenservices/PartnersHub/RealAccountCreation/EmploymentDetailsDesktopBlock/ScreenDataSetGetEmploymentStatuses", "OMyidYGqb_lsx3H6Y6vNEQ", maxRecords, startIndex, function (b) {
model.variables.getEmploymentStatusesAggr.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getEmploymentStatusesAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getEmploymentStatusesAggr.constructor));
}, undefined, undefined, undefined, callContext, PartnersHubClientVariables, true);
}.bind(this);
return OS.Logger.startActiveSpan("GetEmploymentStatuses", function (span) {
if(span) {
span.setAttribute("code.function", "GetEmploymentStatuses");
span.setAttribute("outsystems.function.key", "5876c9f4-a210-40fc-b372-4b3a201a952c");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL");
}

return OS.Flow.tryFinally(function () {
return innerBody();
}, function () {
if(span) {
span.end();
}

});
}, 0);

};
}

return this._getEmploymentStatuses$AggrRefresh;
}set getEmploymentStatuses$AggrRefresh(value) {this._getEmploymentStatuses$AggrRefresh = value;
}


get dataFetchActionNames() {if(!(this.hasOwnProperty("_dataFetchActionNames"))) {
this._dataFetchActionNames = ["getEmploymentStatuses$AggrRefresh"];
}

return this._dataFetchActionNames;
}set dataFetchActionNames(value) {this._dataFetchActionNames = value;
}

// Client Actions - Methods
get _checkbox2OnChange$Action() {if(!(this.hasOwnProperty("__checkbox2OnChange$Action"))) {
this.__checkbox2OnChange$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("Checkbox2OnChange", function (span) {
if(span) {
span.setAttribute("code.function", "Checkbox2OnChange");
span.setAttribute("outsystems.function.key", "01281872-566f-4b6d-b59e-3c857b7cbf34");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("Checkbox2OnChange");
callContext = controller.callContext(callContext);
if(((PartnersHubClientVariables.getRealSignupTINCheckbox() === true))) {
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

return this.__checkbox2OnChange$Action;
}set _checkbox2OnChange$Action(value) {this.__checkbox2OnChange$Action = value;
}

get _taxIdentificationNumberOnChange$Action() {if(!(this.hasOwnProperty("__taxIdentificationNumberOnChange$Action"))) {
this.__taxIdentificationNumberOnChange$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("TaxIdentificationNumberOnChange", function (span) {
if(span) {
span.setAttribute("code.function", "TaxIdentificationNumberOnChange");
span.setAttribute("outsystems.function.key", "3bcf3063-6ada-42db-b38e-b85cc52b61b9");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("TaxIdentificationNumberOnChange");
callContext = controller.callContext(callContext);
if(((PartnersHubClientVariables.getRealSignupTaxIdentificationNumber() === ""))) {
// RealSignupisCheckboxError = False
PartnersHubClientVariables.setRealSignupisCheckboxError(false);
// RealSignupTINCheckbox = False
PartnersHubClientVariables.setRealSignupTINCheckbox(false);
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

get _dropdown1OnChange$Action() {if(!(this.hasOwnProperty("__dropdown1OnChange$Action"))) {
this.__dropdown1OnChange$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("Dropdown1OnChange", function (span) {
if(span) {
span.setAttribute("code.function", "Dropdown1OnChange");
span.setAttribute("outsystems.function.key", "8b075070-7b0c-4d31-8976-64dc7a20aff6");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("Dropdown1OnChange");
callContext = controller.callContext(callContext);
if((((PartnersHubClientVariables.getRealSignupEmploymentStatus()) !== ("Student")))) {
// NoTaxIdentificationNumber = False
model.variables.noTaxIdentificationNumberVar = false;
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__dropdown1OnChange$Action;
}set _dropdown1OnChange$Action(value) {this.__dropdown1OnChange$Action = value;
}

get _nextOnClick$Action() {if(!(this.hasOwnProperty("__nextOnClick$Action"))) {
this.__nextOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("NextOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "NextOnClick");
span.setAttribute("outsystems.function.key", "e0735205-6ca5-41b2-92da-0a90728a4e34");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("NextOnClick");
callContext = controller.callContext(callContext);
var validateJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializePersonalDetailsValidationErrorVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_7fbab05f3644735e219d7d120bd6a352Structure))());
var jSONDeserializePersonalDetailsValidFieldsVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_b5dd817fa61c45f96c6cb802ea7c9118Structure))());
validateJSResult.value = OS.Logger.startActiveSpan("Validate", function (span) {
if(span) {
span.setAttribute("code.function", "Validate");
span.setAttribute("outsystems.function.key", "fbeb2a12-5819-4ae9-98f8-6428b60add64");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(PartnersHub_RealAccountCreation_EmploymentDetailsDesktopBlock_mvc_controller_NextOnClick_ValidateJS, "Validate", "NextOnClick", {
TaxResidence: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getRealSignupTaxResidence(), OS.DataTypes.DataTypes.Text),
EmploymentStatus: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getRealSignupEmploymentStatus(), OS.DataTypes.DataTypes.Text),
TaxIdentificationNumber: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getRealSignupTaxIdentificationNumber(), OS.DataTypes.DataTypes.Text),
ValidationErrors: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ValidFields: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.EmploymentDetailsDesktopBlock.NextOnClick$validateJSResult"))();
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
jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateJSResult.value.validationErrorsOut, PartnersHubModel.ST_7fbab05f3644735e219d7d120bd6a352Structure, false);
// JSON Deserialize: JSONDeserializePersonalDetailsValidFields
jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateJSResult.value.validFieldsOut, PartnersHubModel.ST_b5dd817fa61c45f96c6cb802ea7c9118Structure, false);
// Dropdown1.Valid = JSONDeserializePersonalDetailsValidFields.Data.EmploymentStatus
model.widgets.get(idService.getId("Dropdown1")).validAttr = jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut.employmentStatusAttr;
// Dropdown1.ValidationMessage = JSONDeserializePersonalDetailsValidationError.Data.EmploymentStatus
model.widgets.get(idService.getId("Dropdown1")).validationMessageAttr = jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut.employmentStatusAttr;
// TaxResidence.Valid = JSONDeserializePersonalDetailsValidFields.Data.TaxResidence
model.widgets.get(idService.getId("TaxResidence")).validAttr = jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut.taxResidenceAttr;
// TaxResidence.ValidationMessage = JSONDeserializePersonalDetailsValidationError.Data.TaxResidence
model.widgets.get(idService.getId("TaxResidence")).validationMessageAttr = jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut.taxResidenceAttr;
// TaxIdentificationNumber.Valid = JSONDeserializePersonalDetailsValidFields.Data.TaxIdentificationNumber
model.widgets.get(idService.getId("TaxIdentificationNumber")).validAttr = jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut.taxIdentificationNumberAttr;
// TaxIdentificationNumber.ValidationMessage = JSONDeserializePersonalDetailsValidationError.Data.TaxIdentificationNumber
model.widgets.get(idService.getId("TaxIdentificationNumber")).validationMessageAttr = jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut.taxIdentificationNumberAttr;
if((model.widgets.get(idService.getId("Form1")).validAttr)) {
if(((((PartnersHubClientVariables.getRealSignupEmploymentStatus() === "Unemployed") || (PartnersHubClientVariables.getRealSignupEmploymentStatus() === "Student")) && (PartnersHubClientVariables.getRealSignupNoTaxIdentificationNumber() === false)))) {
// RealSignupTINCheckboxError = True
PartnersHubClientVariables.setRealSignupTINCheckboxError(true);
} else {
if(((((PartnersHubClientVariables.getRealSignupTaxIdentificationNumber()) !== ("")) && (PartnersHubClientVariables.getRealSignupTINCheckbox() === false)))) {
// RealSignupisCheckboxError = True
PartnersHubClientVariables.setRealSignupisCheckboxError(true);
} else {
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

return this.__nextOnClick$Action;
}set _nextOnClick$Action(value) {this.__nextOnClick$Action = value;
}

get _onReady$Action() {if(!(this.hasOwnProperty("__onReady$Action"))) {
this.__onReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnReady", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "e5bd04bc-3626-46a4-8aa9-dd6a281d3654");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var residenceListVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: UseDevice
PartnersHubController.default.useDevice$Action(callContext);
// Execute Action: ResidenceList
model.flush();
return RESTAPIWebsocketOfficialController.default.residenceList$Action(PartnersHubClientVariables.getServer(), "1", "en", callContext).then(function (value) {
residenceListVar.value = value;
}).then(function () {
// ResidenceListResponse = ResidenceList.Response
model.variables.residenceListResponseVar = residenceListVar.value.responseOut;
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


checkbox2OnChange$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("Checkbox2OnChange__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "Checkbox2OnChange");
span.setAttribute("outsystems.function.key", "01281872-566f-4b6d-b59e-3c857b7cbf34");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._checkbox2OnChange$Action, callContext);
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
span.setAttribute("outsystems.function.key", "3bcf3063-6ada-42db-b38e-b85cc52b61b9");
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

dropdown1OnChange$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("Dropdown1OnChange__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "Dropdown1OnChange");
span.setAttribute("outsystems.function.key", "8b075070-7b0c-4d31-8976-64dc7a20aff6");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._dropdown1OnChange$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

nextOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("NextOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "NextOnClick");
span.setAttribute("outsystems.function.key", "e0735205-6ca5-41b2-92da-0a90728a4e34");
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

onReady$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnReady__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "e5bd04bc-3626-46a4-8aa9-dd6a281d3654");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
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


// Event Handler Actions
get onInitializeEventHandler() {if(!(this.hasOwnProperty("_onInitializeEventHandler"))) {
this._onInitializeEventHandler = null;
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
Controller.registerVariableGroupType("PartnersHub.RealAccountCreation.EmploymentDetailsDesktopBlock.NextOnClick$validateJSResult", [{
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

define("PartnersHub.RealAccountCreation.EmploymentDetailsDesktopBlock.mvc$controller.NextOnClick.ValidateJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const payload = {
    EmploymentStatus: $parameters.EmploymentStatus,
    TaxResidence: $parameters.TaxResidence,
    TaxIdentificationNumber: $parameters.TaxIdentificationNumber
}

const validationSchema = yup.object().shape({
    EmploymentStatus: yup.string()
        .required('Employment status is required.')
        .max(100, 'Employment status must be at most 100 characters long.'),
    TaxResidence: yup.string()
        .required('Tax residence is required.')
        .max(50, 'Tax residence must be at most 50 characters long.'),
    TaxIdentificationNumber: yup.string()
        .nullable()
        .transform(value => (value === '' ? undefined : value))
        .max(50, 'Tax identification number must be at most 50 characters long.') // Optional field
        .matches(/^[A-Za-z0-9-]+$/, 'Tax identification number can only include letters, numbers, and hyphens.')
});

// Assuming validate is a function that validates
const { errors, validFields } = validate(validationSchema, payload)

$parameters.ValidationErrors = JSON.stringify(errors)
$parameters.ValidFields = JSON.stringify(validFields)
};
});


define("PartnersHub.RealAccountCreation.EmploymentDetailsDesktopBlock.mvc$translationsResources.ar-001", [], function () {
return {
"ud1WDOZJNEu8Mm3ggIEYCQ#Value": "هذا مطلوب.",
"tEfFIqNqmUmjwA2mS9dplA#Value": "أؤكد أن معلوماتي الضريبية دقيقة وكاملة.",
"wQn2p+HWs0GpHSjojm0f6A#Value": "رقم التعريف الضريبي (اختياري)",
"X4XPodNkekOnfeAKdawWKg#Value": "محل الإقامة الضريبي",
"DUWmg6Ux60ii0nwcLZdVjA#Value": "هذا مطلوب.",
"4PLT8LjYlEKUqQ5oSZL91w#Value": "ليس لدي رقم التعريف الضريبي الخاص بي",
"376FLsqCZkC7RsXHMdUlgw#Value": "الحالة الوظيفية"
};
});

define("PartnersHub.RealAccountCreation.EmploymentDetailsDesktopBlock.mvc$translationsResources.de-DE", [], function () {
return {
"ud1WDOZJNEu8Mm3ggIEYCQ#Value": "Dies ist erforderlich.",
"tEfFIqNqmUmjwA2mS9dplA#Value": "Ich bestätige, dass meine Steuerinformationen genau und vollständig sind.",
"wQn2p+HWs0GpHSjojm0f6A#Value": "Steueridentifikationsnummer (optional)",
"X4XPodNkekOnfeAKdawWKg#Value": "Steueransässigkeit",
"DUWmg6Ux60ii0nwcLZdVjA#Value": "Dies ist erforderlich.",
"4PLT8LjYlEKUqQ5oSZL91w#Value": "Ich habe meine Steueridentifikationsnummer nicht.",
"376FLsqCZkC7RsXHMdUlgw#Value": "Beschäftigungsstatus"
};
});

define("PartnersHub.RealAccountCreation.EmploymentDetailsDesktopBlock.mvc$translationsResources.es-ES", [], function () {
return {
"ud1WDOZJNEu8Mm3ggIEYCQ#Value": "Esto es necesario.",
"tEfFIqNqmUmjwA2mS9dplA#Value": "Confirmo que mi información fiscal es precisa y completa.",
"wQn2p+HWs0GpHSjojm0f6A#Value": "Número de identificación fiscal (opcional)",
"X4XPodNkekOnfeAKdawWKg#Value": "Residencia fiscal",
"DUWmg6Ux60ii0nwcLZdVjA#Value": "Esto es necesario.",
"4PLT8LjYlEKUqQ5oSZL91w#Value": "No tengo mi número de identificación fiscal.",
"376FLsqCZkC7RsXHMdUlgw#Value": "Estado de empleo"
};
});

define("PartnersHub.RealAccountCreation.EmploymentDetailsDesktopBlock.mvc$translationsResources.fr-FR", [], function () {
return {
"ud1WDOZJNEu8Mm3ggIEYCQ#Value": "Ceci est obligatoire.",
"tEfFIqNqmUmjwA2mS9dplA#Value": "Je confirme que mes informations fiscales sont exactes et complètes.",
"wQn2p+HWs0GpHSjojm0f6A#Value": "Numéro d\'identification fiscale (facultatif)",
"X4XPodNkekOnfeAKdawWKg#Value": "Résidence fiscale",
"DUWmg6Ux60ii0nwcLZdVjA#Value": "Ceci est obligatoire.",
"4PLT8LjYlEKUqQ5oSZL91w#Value": "Je n\'ai pas mon numéro d\'identification fiscale.",
"376FLsqCZkC7RsXHMdUlgw#Value": "Statut d\'emploi"
};
});

define("PartnersHub.RealAccountCreation.EmploymentDetailsDesktopBlock.mvc$translationsResources.it-IT", [], function () {
return {
"ud1WDOZJNEu8Mm3ggIEYCQ#Value": "Questo campo è obbligatorio.",
"tEfFIqNqmUmjwA2mS9dplA#Value": "Confermo che le mie informazioni fiscali sono accurate e complete.",
"wQn2p+HWs0GpHSjojm0f6A#Value": "Numero di identificazione fiscale (opzionale)",
"X4XPodNkekOnfeAKdawWKg#Value": "Residenza fiscale",
"DUWmg6Ux60ii0nwcLZdVjA#Value": "Questo campo è obbligatorio.",
"4PLT8LjYlEKUqQ5oSZL91w#Value": "Non ho il mio numero di identificazione fiscale.",
"376FLsqCZkC7RsXHMdUlgw#Value": "Stato occupazionale"
};
});

define("PartnersHub.RealAccountCreation.EmploymentDetailsDesktopBlock.mvc$translationsResources.pl-PL", [], function () {
return {
"ud1WDOZJNEu8Mm3ggIEYCQ#Value": "Wymagane.",
"tEfFIqNqmUmjwA2mS9dplA#Value": "Potwierdzam, że moje informacje podatkowe są prawidłowe i kompletne.",
"wQn2p+HWs0GpHSjojm0f6A#Value": "Numer identyfikacji podatkowej (opcjonalnie)",
"X4XPodNkekOnfeAKdawWKg#Value": "Miejsce zamieszkania do celów podatkowych",
"DUWmg6Ux60ii0nwcLZdVjA#Value": "Wymagane.",
"4PLT8LjYlEKUqQ5oSZL91w#Value": "Nie znam mojego numeru identyfikacji podatkowej.",
"376FLsqCZkC7RsXHMdUlgw#Value": "Status zatrudnienia"
};
});

define("PartnersHub.RealAccountCreation.EmploymentDetailsDesktopBlock.mvc$translationsResources.pt-PT", [], function () {
return {
"ud1WDOZJNEu8Mm3ggIEYCQ#Value": "Este campo é de preenchimento obrigatório.",
"tEfFIqNqmUmjwA2mS9dplA#Value": "Confirmo que a minha informação fiscal é precisa e completa.",
"wQn2p+HWs0GpHSjojm0f6A#Value": "Número de identificação fiscal (opcional)",
"X4XPodNkekOnfeAKdawWKg#Value": "Residência fiscal",
"DUWmg6Ux60ii0nwcLZdVjA#Value": "Este campo é de preenchimento obrigatório.",
"4PLT8LjYlEKUqQ5oSZL91w#Value": "Não tenho o meu número de identificação fiscal.",
"376FLsqCZkC7RsXHMdUlgw#Value": "Situação profissional"
};
});

define("PartnersHub.RealAccountCreation.EmploymentDetailsDesktopBlock.mvc$translationsResources.ru-RU", [], function () {
return {
"ud1WDOZJNEu8Mm3ggIEYCQ#Value": "Это обязательно.",
"tEfFIqNqmUmjwA2mS9dplA#Value": "Я подтверждаю, что моя налоговая информация точна и полна.",
"wQn2p+HWs0GpHSjojm0f6A#Value": "Идентификационный номер налогоплательщика (по желанию)",
"X4XPodNkekOnfeAKdawWKg#Value": "Налоговое резидентство",
"DUWmg6Ux60ii0nwcLZdVjA#Value": "Это обязательно.",
"4PLT8LjYlEKUqQ5oSZL91w#Value": "У меня нет моего налогового идентификационного номера",
"376FLsqCZkC7RsXHMdUlgw#Value": "Статус занятости"
};
});

define("PartnersHub.RealAccountCreation.EmploymentDetailsDesktopBlock.mvc$translationsResources", ["exports", "PartnersHub.RealAccountCreation.EmploymentDetailsDesktopBlock.mvc$translationsResources.ar-001", "PartnersHub.RealAccountCreation.EmploymentDetailsDesktopBlock.mvc$translationsResources.de-DE", "PartnersHub.RealAccountCreation.EmploymentDetailsDesktopBlock.mvc$translationsResources.es-ES", "PartnersHub.RealAccountCreation.EmploymentDetailsDesktopBlock.mvc$translationsResources.fr-FR", "PartnersHub.RealAccountCreation.EmploymentDetailsDesktopBlock.mvc$translationsResources.it-IT", "PartnersHub.RealAccountCreation.EmploymentDetailsDesktopBlock.mvc$translationsResources.pl-PL", "PartnersHub.RealAccountCreation.EmploymentDetailsDesktopBlock.mvc$translationsResources.pt-PT", "PartnersHub.RealAccountCreation.EmploymentDetailsDesktopBlock.mvc$translationsResources.ru-RU"], function (exports, PartnersHub_RealAccountCreation_EmploymentDetailsDesktopBlock_mvc_translationsResources_ar001, PartnersHub_RealAccountCreation_EmploymentDetailsDesktopBlock_mvc_translationsResources_deDE, PartnersHub_RealAccountCreation_EmploymentDetailsDesktopBlock_mvc_translationsResources_esES, PartnersHub_RealAccountCreation_EmploymentDetailsDesktopBlock_mvc_translationsResources_frFR, PartnersHub_RealAccountCreation_EmploymentDetailsDesktopBlock_mvc_translationsResources_itIT, PartnersHub_RealAccountCreation_EmploymentDetailsDesktopBlock_mvc_translationsResources_plPL, PartnersHub_RealAccountCreation_EmploymentDetailsDesktopBlock_mvc_translationsResources_ptPT, PartnersHub_RealAccountCreation_EmploymentDetailsDesktopBlock_mvc_translationsResources_ruRU) {
return {
"ar-001": {
"translations": PartnersHub_RealAccountCreation_EmploymentDetailsDesktopBlock_mvc_translationsResources_ar001,
"isRTL": true
},
"de-DE": {
"translations": PartnersHub_RealAccountCreation_EmploymentDetailsDesktopBlock_mvc_translationsResources_deDE,
"isRTL": false
},
"es-ES": {
"translations": PartnersHub_RealAccountCreation_EmploymentDetailsDesktopBlock_mvc_translationsResources_esES,
"isRTL": false
},
"fr-FR": {
"translations": PartnersHub_RealAccountCreation_EmploymentDetailsDesktopBlock_mvc_translationsResources_frFR,
"isRTL": false
},
"it-IT": {
"translations": PartnersHub_RealAccountCreation_EmploymentDetailsDesktopBlock_mvc_translationsResources_itIT,
"isRTL": false
},
"pl-PL": {
"translations": PartnersHub_RealAccountCreation_EmploymentDetailsDesktopBlock_mvc_translationsResources_plPL,
"isRTL": false
},
"pt-PT": {
"translations": PartnersHub_RealAccountCreation_EmploymentDetailsDesktopBlock_mvc_translationsResources_ptPT,
"isRTL": false
},
"ru-RU": {
"translations": PartnersHub_RealAccountCreation_EmploymentDetailsDesktopBlock_mvc_translationsResources_ruRU,
"isRTL": false
}
};
});

