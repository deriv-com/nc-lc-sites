define("tradershub.FinancialAssessmentFlow.EmploymentIndustry.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure"], function (OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("IsRequired", "isRequiredVar", "IsRequired", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new VariablesRecord(new VariablesRecord.RecordClass({
isRequiredVar: OS.DataTypes.ImmutableBase.getData(str)
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
RadioGroup: OS.Model.ValidationWidgetRecord
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

define("tradershub.FinancialAssessmentFlow.EmploymentIndustry.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.FinancialAssessmentFlow.EmploymentIndustry.mvc$model", "tradershub.FinancialAssessmentFlow.EmploymentIndustry.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.RealAccountCreationLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.FinancialAssessmentFlow.AssessmentBlock.mvc$view", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure"], function (OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_FinancialAssessmentFlow_EmploymentIndustry_mvc_model, tradershub_FinancialAssessmentFlow_EmploymentIndustry_mvc_controller, tradershubClientVariables, tradershub_Layouts_RealAccountCreationLayout_mvc_view, OSWidgets, tradershub_FinancialAssessmentFlow_AssessmentBlock_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() { return "FinancialAssessmentFlow.EmploymentIndustry"; }

        static getAttributes() { return {
codeFunction: "EmploymentIndustry",
functionKey: "4758cd4e-81de-4953-9c1d-3ed4cd6dd7e3",
functionOwnerName: "tradershub",
functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.FinancialAssessmentFlow.EmploymentIndustry.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_RealAccountCreationLayout_mvc_view, tradershub_FinancialAssessmentFlow_AssessmentBlock_mvc_view];
        }

        get modelFactory() {
            return tradershub_FinancialAssessmentFlow_EmploymentIndustry_mvc_model;
        }

        get controllerFactory() {
            return tradershub_FinancialAssessmentFlow_EmploymentIndustry_mvc_controller;
        }

        get title() {
            

            return OSView.BaseView.BaseWebScreen.getTranslation("Ts1YR96BU0mcHT7UzW3X4w#Title", "EmploymentIndustry");
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
HideTitle: true,
Title: "Financial assessment"
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
return [React.createElement(tradershub_FinancialAssessmentFlow_AssessmentBlock_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Page: "2/8",
IsRequired: model.variables.isRequiredVar,
QuestionText: "Employment industry"
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.RadioGroup, {
_validationProps: {
validationService: validationService
},
enabled: true,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.nextOnClick$Action(controller.callContext(eventHandlerContext));

;
}
},
gridProperties: {
classes: "OSFillParent"
},
mandatory: false,
style: "radio-group",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getFinancialAssessmentEmploymentIndustry(), function (value) {
tradershubClientVariables.setFinancialAssessmentEmploymentIndustry(value);
}),
_idProps: {
service: idService,
name: "RadioGroup"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.RadioButton, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
style: "radio-button",
value: "Construction",
visible: true,
_idProps: {
service: idService,
name: "Construction"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("xvUAsCqDVEaaD3RVnQLR+Q#Value", "Construction"))), React.createElement(OSWidgets.RadioButton, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
style: "radio-button",
value: "Education",
visible: true,
_idProps: {
service: idService,
name: "Education"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("RTO7XMI5MECNucE7X1Yalw#Value", "Education"))), React.createElement(OSWidgets.RadioButton, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
style: "radio-button",
value: "Finance",
visible: true,
_idProps: {
service: idService,
name: "Finance"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("xCvZ_gRiqUqq7EySzyw1Yw#Value", "Finance"))), React.createElement(OSWidgets.RadioButton, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
style: "radio-button",
value: "Health",
visible: true,
_idProps: {
service: idService,
name: "Health"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("1hNcnutiqkSM5maEmoL2nw#Value", "Health"))), React.createElement(OSWidgets.RadioButton, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
style: "radio-button",
value: "Tourism",
visible: true,
_idProps: {
service: idService,
name: "Tourism"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("Drs9c4vzeECR2gNmWHqv7w#Value", "Tourism"))), React.createElement(OSWidgets.RadioButton, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
style: "radio-button",
value: "Information & Communications Technology",
visible: true,
_idProps: {
service: idService,
name: "InformationCommunicationsTechnology"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("ITkUljOIUE++RSn6qeHPzw#Value", "Information & Communications Technology"))), React.createElement(OSWidgets.RadioButton, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
style: "radio-button",
value: "Science & Engineering",
visible: true,
_idProps: {
service: idService,
name: "ScienceEngineering"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("Hi1pXtNFMkKDQ127YldaEQ#Value", "Science & Engineering"))), React.createElement(OSWidgets.RadioButton, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
style: "radio-button",
value: "Legal",
visible: true,
_idProps: {
service: idService,
name: "Legal"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("PCwdh5yRJkWIl2zYlrRjtg#Value", "Legal"))), React.createElement(OSWidgets.RadioButton, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
style: "radio-button",
value: "Social & Cultural",
visible: true,
_idProps: {
service: idService,
name: "SocialCultural"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("+fsTzagydUW7RVZnM8Egng#Value", "Social & Cultural"))), React.createElement(OSWidgets.RadioButton, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
style: "radio-button",
value: "Real Estate",
visible: true,
_idProps: {
service: idService,
name: "RealEstate"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("O4k9Y65UUk6kDsYRlEWpZw#Value", "Real Estate"))), React.createElement(OSWidgets.RadioButton, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
style: "radio-button",
value: "Manufacturing",
visible: true,
_idProps: {
service: idService,
name: "Manufacturing"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("3KIzOASKZ0megMp4HSrftA#Value", "Manufacturing"))), React.createElement(OSWidgets.RadioButton, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
style: "radio-button",
value: "Unemployed",
visible: true,
_idProps: {
service: idService,
name: "Unemployed"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("LmtTAzg13ka03T5vWKPyNQ#Value", "Unemployed")))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "btn-container",
visible: true,
_idProps: {
service: idService,
name: "Next"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
isDefault: false,
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.nextOnClick$Action(controller.callContext(eventHandlerContext));

;
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("QSG_knSeeUilaZ5O6CZ_bg#Value", "Next"))))];
})
},
_dependencies: [asPrimitiveValue(tradershubClientVariables.getFinancialAssessmentEmploymentIndustry())]
})];
})
},
_dependencies: [asPrimitiveValue(tradershubClientVariables.getFinancialAssessmentEmploymentIndustry()), asPrimitiveValue(model.variables.isRequiredVar)]
}));
        }
    }

    return View;
});
define("tradershub.FinancialAssessmentFlow.EmploymentIndustry.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.FinancialAssessmentFlow.EmploymentIndustry.mvc$translationsResources", "tradershub.FinancialAssessmentFlow.controller", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure"], function (OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_FinancialAssessmentFlow_EmploymentIndustry_mvc_TranslationsResources, tradershub_FinancialAssessmentFlowController) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, tradershub_FinancialAssessmentFlow_EmploymentIndustry_mvc_TranslationsResources);
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
get _nextOnClick$Action() {if(!(this.hasOwnProperty("__nextOnClick$Action"))) {
this.__nextOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("NextOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "NextOnClick");
span.setAttribute("outsystems.function.key", "c756a53b-7ac3-4a7b-bcc1-8d5104856b8d");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("NextOnClick");
callContext = controller.callContext(callContext);
if(((tradershubClientVariables.getFinancialAssessmentEmploymentIndustry() === OS.BuiltinFunctions.nullTextIdentifier()))) {
// IsRequired = True
model.variables.isRequiredVar = true;
} else {
// Destination: /tradershub/Occupation
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "financial-assessment/occupation", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
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
span.setAttribute("outsystems.function.key", "c756a53b-7ac3-4a7b-bcc1-8d5104856b8d");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
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
return tradershub_FinancialAssessmentFlowController.default.handleError(ex, this.callContext());
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

}
return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});


define("tradershub.FinancialAssessmentFlow.EmploymentIndustry.mvc$translationsResources.fr-FR", [], function () {
return {
"QSG_knSeeUilaZ5O6CZ_bg#Value": "Suivant",
"LmtTAzg13ka03T5vWKPyNQ#Value": "Chômeur",
"3KIzOASKZ0megMp4HSrftA#Value": "Fabrication",
"O4k9Y65UUk6kDsYRlEWpZw#Value": "Immobilier",
"+fsTzagydUW7RVZnM8Egng#Value": "Social et culturel",
"PCwdh5yRJkWIl2zYlrRjtg#Value": "Juridique",
"Hi1pXtNFMkKDQ127YldaEQ#Value": "Science et ingénierie",
"ITkUljOIUE++RSn6qeHPzw#Value": "Technologies de l\'information et de la communication",
"Drs9c4vzeECR2gNmWHqv7w#Value": "Tourisme",
"1hNcnutiqkSM5maEmoL2nw#Value": "Santé",
"xCvZ_gRiqUqq7EySzyw1Yw#Value": "Finance",
"RTO7XMI5MECNucE7X1Yalw#Value": "Éducation",
"xvUAsCqDVEaaD3RVnQLR+Q#Value": "Construction"
};
});

define("tradershub.FinancialAssessmentFlow.EmploymentIndustry.mvc$translationsResources", ["exports", "tradershub.FinancialAssessmentFlow.EmploymentIndustry.mvc$translationsResources.fr-FR"], function (exports, tradershub_FinancialAssessmentFlow_EmploymentIndustry_mvc_translationsResources_frFR) {
return {
"fr-FR": {
"translations": tradershub_FinancialAssessmentFlow_EmploymentIndustry_mvc_translationsResources_frFR,
"isRTL": false
}
};
});

