define("tradershub.TradingAssessmentFlow.TradingAssessmentStepLast.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.controller", "OutSystemsUI.controller$IsPhone", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure"], function (OSRuntimeCore, tradershubModel, OutSystemsUIController) {
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

define("tradershub.TradingAssessmentFlow.TradingAssessmentStepLast.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "tradershub.TradingAssessmentFlow.TradingAssessmentStepLast.mvc$model", "tradershub.TradingAssessmentFlow.TradingAssessmentStepLast.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.RealAccountCreationLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.TradingAssessmentFlow.TradingAssessmentTitleBar.mvc$view", "OutSystemsUI.controller$IsPhone", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure"], function (OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, React, OSView, tradershub_TradingAssessmentFlow_TradingAssessmentStepLast_mvc_model, tradershub_TradingAssessmentFlow_TradingAssessmentStepLast_mvc_controller, tradershubClientVariables, tradershub_Layouts_RealAccountCreationLayout_mvc_view, OSWidgets, tradershub_TradingAssessmentFlow_TradingAssessmentTitleBar_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() { return "TradingAssessmentFlow.TradingAssessmentStepLast"; }

        static getAttributes() { return {
codeFunction: "TradingAssessmentStepLast",
functionKey: "ba00dc20-683e-4dcc-af47-f7e144518147",
functionOwnerName: "tradershub",
functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.TradingAssessmentFlow.TradingAssessmentStepLast.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_RealAccountCreationLayout_mvc_view, tradershub_TradingAssessmentFlow_TradingAssessmentTitleBar_mvc_view];
        }

        get modelFactory() {
            return tradershub_TradingAssessmentFlow_TradingAssessmentStepLast_mvc_model;
        }

        get controllerFactory() {
            return tradershub_TradingAssessmentFlow_TradingAssessmentStepLast_mvc_controller;
        }

        get title() {
            

            return OSView.BaseView.BaseWebScreen.getTranslation("INwAuj5ozE2vR_fhRFGBRw#Title", "TradingAssessmentStepLast");
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
HideTitle: model.getCachedValue(idService.getId("e0v1zOeTokO5p7p0g39EXQ.HideTitle"), function () {
return OutSystemsUIController.default.isPhone$Action(callContext).isPhoneOut;
}),
Title: "Trading Assesment"
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
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("kVE4Gz3kPkKFkQUfZmaT0g.Style"), function () {
return ("display-flex flex-direction-column " + ((OutSystemsUIController.default.isPhone$Action(callContext).isPhoneOut) ? ("gap-base") : ("gap-m")));
}),
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(tradershub_TradingAssessmentFlow_TradingAssessmentTitleBar_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Step: "10"
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
uuid: "2",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex align-items-center justify-content-space-between trading-assessment-steps__desktop",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold;"
},
style: "trading-assessment-steps__desktop",
text: [$text(getTranslation("eUjnOmdC8U6iP568fVBU+g#Value", "10/10"))],
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("g84iS+4CeEG4a1ycKgT+fw.Style"), function () {
return ("display-flex flex-direction-column " + ((OutSystemsUIController.default.isPhone$Action(callContext).isPhoneOut) ? ("gap-base") : ("gap-m")));
}),
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.isRequiredVar, false, this, function () {
return [React.createElement(OSWidgets.Text, {
style: "text-error display-block",
text: [$text(getTranslation("1I+UMKI5rUKpLMA8FWKF2w#Value", "* This is required."))],
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 16px;"
},
text: [$text(getTranslation("CeAiAxURt0+Io030q4CvMQ#Value", "When are you required to pay an initial margin?"))],
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "9"
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
variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getInitialMargin(), function (value) {
tradershubClientVariables.setInitialMargin(value);
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
value: "When opening a leveraged CFD trade.",
visible: true,
_idProps: {
service: idService,
name: "A"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("RxBG7mSHAkWxwNVdWLjcyQ#Value", "When opening a leveraged CFD trade."))), React.createElement(OSWidgets.RadioButton, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
style: "radio-button",
value: "When trading multipliers.",
visible: true,
_idProps: {
service: idService,
name: "B"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("KTh+4DRTEkKyPjN7LZnxaw#Value", "When trading multipliers."))), React.createElement(OSWidgets.RadioButton, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
style: "radio-button",
value: "When buying shares of a company.",
visible: true,
_idProps: {
service: idService,
name: "C"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("YUQNTqtA2Eeq0U_5Qxs3VA#Value", "When buying shares of a company."))), React.createElement(OSWidgets.RadioButton, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
style: "radio-button",
value: "All of the above.",
visible: true,
_idProps: {
service: idService,
name: "D"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("cs5ANllQhkCgcApdtJOk4Q#Value", "All of the above."))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: right;"
},
style: "btn-container",
visible: true,
_idProps: {
service: idService,
uuid: "15"
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
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-family: \"Roboto\", sans-serif; font-weight: 500;"
},
style: "roboto-medium",
text: [$text(getTranslation("68dZI0WdbkCekiAObcC18g#Value", "Next"))],
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
})))))];
})
},
_dependencies: [asPrimitiveValue(tradershubClientVariables.getInitialMargin()), asPrimitiveValue(model.variables.isRequiredVar)]
}));
        }
    }

    return View;
});
define("tradershub.TradingAssessmentFlow.TradingAssessmentStepLast.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.TradingAssessmentFlow.TradingAssessmentStepLast.mvc$translationsResources", "tradershub.TradingAssessmentFlow.controller", "OutSystemsUI.controller$IsPhone", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure"], function (OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, tradershubLanguageResources, tradershubClientVariables, tradershub_TradingAssessmentFlow_TradingAssessmentStepLast_mvc_TranslationsResources, tradershub_TradingAssessmentFlowController) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, tradershub_TradingAssessmentFlow_TradingAssessmentStepLast_mvc_TranslationsResources);
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
span.setAttribute("outsystems.function.key", "325f0826-cc9a-47af-a921-3e75e6f0a720");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("NextOnClick");
callContext = controller.callContext(callContext);
if(((tradershubClientVariables.getInitialMargin() === OS.BuiltinFunctions.nullTextIdentifier()))) {
// IsRequired = True
model.variables.isRequiredVar = true;
} else {
// Destination: /tradershub/IncomeSource
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "financial-assessment/source-of-income", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
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
span.setAttribute("outsystems.function.key", "325f0826-cc9a-47af-a921-3e75e6f0a720");
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
return tradershub_TradingAssessmentFlowController.default.handleError(ex, this.callContext());
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


define("tradershub.TradingAssessmentFlow.TradingAssessmentStepLast.mvc$translationsResources.fr-FR", [], function () {
return {
"68dZI0WdbkCekiAObcC18g#Value": "Suivant",
"cs5ANllQhkCgcApdtJOk4Q#Value": "Tout ce qui précède.",
"YUQNTqtA2Eeq0U_5Qxs3VA#Value": "Lors de l\'achat d\'actions d\'une entreprise.",
"KTh+4DRTEkKyPjN7LZnxaw#Value": "Lorsqu\'on négocie des multiplicateurs.",
"RxBG7mSHAkWxwNVdWLjcyQ#Value": "Lors de l\'ouverture d\'un trade CFD avec effet de levier.",
"CeAiAxURt0+Io030q4CvMQ#Value": "Quand devez-vous payer une marge initiale ?",
"1I+UMKI5rUKpLMA8FWKF2w#Value": "Ceci est requis.",
"eUjnOmdC8U6iP568fVBU+g#Value": "Jeu 10 oct. 2024 15:00:00 GMT+0800 (heure normale de Singapour)"
};
});

define("tradershub.TradingAssessmentFlow.TradingAssessmentStepLast.mvc$translationsResources", ["exports", "tradershub.TradingAssessmentFlow.TradingAssessmentStepLast.mvc$translationsResources.fr-FR"], function (exports, tradershub_TradingAssessmentFlow_TradingAssessmentStepLast_mvc_translationsResources_frFR) {
return {
"fr-FR": {
"translations": tradershub_TradingAssessmentFlow_TradingAssessmentStepLast_mvc_translationsResources_frFR,
"isRTL": false
}
};
});

