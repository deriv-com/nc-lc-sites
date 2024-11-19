define("tradershub.FinancialAssessmentFlow.IncomeSource.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure"], function (OSRuntimeCore, tradershubModel) {
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

define("tradershub.FinancialAssessmentFlow.IncomeSource.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.FinancialAssessmentFlow.IncomeSource.mvc$model", "tradershub.FinancialAssessmentFlow.IncomeSource.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.RealAccountCreationLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.FinancialAssessmentFlow.AssessmentBlock.mvc$view", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure"], function (OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_FinancialAssessmentFlow_IncomeSource_mvc_model, tradershub_FinancialAssessmentFlow_IncomeSource_mvc_controller, tradershubClientVariables, tradershub_Layouts_RealAccountCreationLayout_mvc_view, OSWidgets, tradershub_FinancialAssessmentFlow_AssessmentBlock_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() { return "FinancialAssessmentFlow.IncomeSource"; }

        static getAttributes() { return {
codeFunction: "IncomeSource",
functionKey: "cccb920d-8f3b-4d0e-a56d-73c34c79ab55",
functionOwnerName: "tradershub",
functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.FinancialAssessmentFlow.IncomeSource.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_RealAccountCreationLayout_mvc_view, tradershub_FinancialAssessmentFlow_AssessmentBlock_mvc_view];
        }

        get modelFactory() {
            return tradershub_FinancialAssessmentFlow_IncomeSource_mvc_model;
        }

        get controllerFactory() {
            return tradershub_FinancialAssessmentFlow_IncomeSource_mvc_controller;
        }

        get title() {
            

            return OSView.BaseView.BaseWebScreen.getTranslation("DZLLzDuPDk2lbXPDTHmrVQ#Title", "IncomeSource");
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
HideQuestion: true,
IsRequired: model.variables.isRequiredVar,
Page: "1/8",
QuestionText: "Source of income"
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
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 16px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "question",
text: [$text(getTranslation("FIJo0xP_o0Ol1pn8R5hwJA#Value", "We collect information about your employment as part of our due diligence obligations, as required by anti-money laundering legislation."))],
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "question-container",
visible: true,
_idProps: {
service: idService,
name: "Question"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.isRequiredVar, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "required-container",
visible: true,
_idProps: {
service: idService,
name: "Required"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #EC3F3F;"
},
text: [$text(getTranslation("lV4LP_nMCE64a04g24YLdg#Value", "* This is required."))],
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, function () {
return [];
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #333333;"
},
text: [$text(getTranslation("qIsn3PprSkmGoujBJOftkw#Value", "Source of income"))],
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.RadioGroup, {
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
variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getFinancialAssessmentIncomeSource(), function (value) {
tradershubClientVariables.setFinancialAssessmentIncomeSource(value);
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
value: "Salaried Employee",
visible: true,
_idProps: {
service: idService,
name: "SalariedEmployee"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("iB1x390ah0KsMFScAXSLkg#Value", "Salaried-employee"))), React.createElement(OSWidgets.RadioButton, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
style: "radio-button",
value: "Self-Employed",
visible: true,
_idProps: {
service: idService,
name: "SelfEmployed"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("e+e4AYFzF0imTjQ+1ILQZQ#Value", "Self-employed"))), React.createElement(OSWidgets.RadioButton, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
style: "radio-button",
value: "Investments & Dividends",
visible: true,
_idProps: {
service: idService,
name: "InvestmentsDividends"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("yICHWcJy_0GJFrpLd+iW4A#Value", "Investments and dividends"))), React.createElement(OSWidgets.RadioButton, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
style: "radio-button",
value: "Pension",
visible: true,
_idProps: {
service: idService,
name: "Pension"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("YHBvAW73k0GgZYi9yMz3vQ#Value", "Pension"))), React.createElement(OSWidgets.RadioButton, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
style: "radio-button",
value: "State Benefits",
visible: true,
_idProps: {
service: idService,
name: "StateBenefits"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("u0QOSW8MPUyOng5BhrlEgw#Value", "State benefits"))), React.createElement(OSWidgets.RadioButton, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
style: "radio-button",
value: "Savings & Inheritance",
visible: true,
_idProps: {
service: idService,
name: "SavingsInheritance"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("PAVKPgJP60WpoGaiydVfHg#Value", "Savings and inheritance")))), React.createElement(OSWidgets.Container, {
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
}, $text(getTranslation("kO0CxcAkp0+4T8RcVhMfww#Value", "Next"))))];
})
},
_dependencies: [asPrimitiveValue(tradershubClientVariables.getFinancialAssessmentIncomeSource()), asPrimitiveValue(model.variables.isRequiredVar)]
})];
})
},
_dependencies: [asPrimitiveValue(tradershubClientVariables.getFinancialAssessmentIncomeSource()), asPrimitiveValue(model.variables.isRequiredVar)]
}));
        }
    }

    return View;
});
define("tradershub.FinancialAssessmentFlow.IncomeSource.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.FinancialAssessmentFlow.IncomeSource.mvc$translationsResources", "tradershub.FinancialAssessmentFlow.controller", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure"], function (OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_FinancialAssessmentFlow_IncomeSource_mvc_TranslationsResources, tradershub_FinancialAssessmentFlowController) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, tradershub_FinancialAssessmentFlow_IncomeSource_mvc_TranslationsResources);
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
span.setAttribute("outsystems.function.key", "0b30302a-ce69-442f-a704-cc50be402e45");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("NextOnClick");
callContext = controller.callContext(callContext);
if(((tradershubClientVariables.getFinancialAssessmentIncomeSource() === OS.BuiltinFunctions.nullTextIdentifier()))) {
// IsRequired = True
model.variables.isRequiredVar = true;
} else {
// Destination: /tradershub/EmploymentIndustry
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "financial-assessment/employment-industry", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
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
span.setAttribute("outsystems.function.key", "0b30302a-ce69-442f-a704-cc50be402e45");
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


define("tradershub.FinancialAssessmentFlow.IncomeSource.mvc$translationsResources.fr-FR", [], function () {
return {
"kO0CxcAkp0+4T8RcVhMfww#Value": "Suivant",
"PAVKPgJP60WpoGaiydVfHg#Value": "Épargne et héritage",
"u0QOSW8MPUyOng5BhrlEgw#Value": "Prestations sociales",
"YHBvAW73k0GgZYi9yMz3vQ#Value": "Pension",
"yICHWcJy_0GJFrpLd+iW4A#Value": "Investissements et dividendes",
"e+e4AYFzF0imTjQ+1ILQZQ#Value": "Travailleur indépendant",
"iB1x390ah0KsMFScAXSLkg#Value": "Employé salarié",
"qIsn3PprSkmGoujBJOftkw#Value": "Source de revenu",
"lV4LP_nMCE64a04g24YLdg#Value": "C\'est requis.",
"FIJo0xP_o0Ol1pn8R5hwJA#Value": "Nous collectons des informations sur votre emploi dans le cadre de nos obligations de diligence raisonnable, comme l\'exige la législation sur la lutte contre le blanchiment d\'argent."
};
});

define("tradershub.FinancialAssessmentFlow.IncomeSource.mvc$translationsResources", ["exports", "tradershub.FinancialAssessmentFlow.IncomeSource.mvc$translationsResources.fr-FR"], function (exports, tradershub_FinancialAssessmentFlow_IncomeSource_mvc_translationsResources_frFR) {
return {
"fr-FR": {
"translations": tradershub_FinancialAssessmentFlow_IncomeSource_mvc_translationsResources_frFR,
"isRTL": false
}
};
});

