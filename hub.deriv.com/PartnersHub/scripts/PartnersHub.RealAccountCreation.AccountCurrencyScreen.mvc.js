define("PartnersHub.RealAccountCreation.AccountCurrencyScreen.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.mvc$model", "PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.mvc$model", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.controller$UseDevice", "PartnersHub.controller$RealSignupPreviousStep"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvcModel, PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvcModel) {
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
return {};
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

static get hasValidationWidgets() {if((Model._hasValidationWidgetsValue === undefined)) {
Model._hasValidationWidgetsValue = (PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvcModel.hasValidationWidgets || PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.RealAccountCreation.AccountCurrencyScreen.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreation.AccountCurrencyScreen.mvc$model", "PartnersHub.RealAccountCreation.AccountCurrencyScreen.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.mvc$view", "@outsystems/runtime-widgets-js", "PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.mvc$view", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.controller$UseDevice", "PartnersHub.controller$RealSignupPreviousStep"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_RealAccountCreation_AccountCurrencyScreen_mvc_model, PartnersHub_RealAccountCreation_AccountCurrencyScreen_mvc_controller, PartnersHubClientVariables, PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvc_view, OSWidgets, PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() { return "RealAccountCreation.AccountCurrencyScreen"; }

        static getAttributes() { return {
codeFunction: "AccountCurrencyScreen",
functionKey: "f8009d0d-3ea3-4b6a-958b-5fdbd9bd4ca8",
functionOwnerName: "PartnersHub",
functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.PHubTest.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvc_view, PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreation_AccountCurrencyScreen_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreation_AccountCurrencyScreen_mvc_controller;
        }

        get title() {
            

            return OSView.BaseView.BaseWebScreen.getTranslation("DZ0A+KM+akuVi1_b2b1MqA#Title", "AccountCurrencyScreen");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvc_view, {
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
},
onClickBack2$Action: function () {
var eventHandlerContext = callContext.clone();
controller.realAccountCreationLayoutScreenBasedonClickBack2$Action(controller.callContext(eventHandlerContext));

;
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
return [React.createElement(PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_view, {
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
},
nextStepEvent$Action: function () {
var eventHandlerContext = callContext.clone();
controller.accountCurrencyBlockNextStepEvent$Action(controller.callContext(eventHandlerContext));

;
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
})
},
_dependencies: []
}));
        }
    }

    return View;
});
define("PartnersHub.RealAccountCreation.AccountCurrencyScreen.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreation.AccountCurrencyScreen.mvc$translationsResources", "PartnersHub.RealAccountCreation.controller", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.controller$UseDevice", "PartnersHub.controller$RealSignupPreviousStep"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreation_AccountCurrencyScreen_mvc_TranslationsResources, PartnersHub_RealAccountCreationController) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, PartnersHub_RealAccountCreation_AccountCurrencyScreen_mvc_TranslationsResources);
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
get _accountCurrencyBlockNextStepEvent$Action() {if(!(this.hasOwnProperty("__accountCurrencyBlockNextStepEvent$Action"))) {
this.__accountCurrencyBlockNextStepEvent$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("AccountCurrencyBlockNextStepEvent", function (span) {
if(span) {
span.setAttribute("code.function", "AccountCurrencyBlockNextStepEvent");
span.setAttribute("outsystems.function.key", "4cc715c4-40a8-458d-bd6a-5610fd271475");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("AccountCurrencyBlockNextStepEvent");
callContext = controller.callContext(callContext);
// Execute Action: RealSignupNextStep
PartnersHubController.default.realSignupNextStep$Action(1, callContext);
// Execute Action: GetHeaderTitle
PartnersHubController.default.getHeaderTitle$Action(callContext);
// Destination: /PartnersHub/PersonalDetailsScreen
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "PersonalDetailsScreen", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__accountCurrencyBlockNextStepEvent$Action;
}set _accountCurrencyBlockNextStepEvent$Action(value) {this.__accountCurrencyBlockNextStepEvent$Action = value;
}

get _onReady$Action() {if(!(this.hasOwnProperty("__onReady$Action"))) {
this.__onReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnReady", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "94cf08ac-de35-49b2-970f-476898393b80");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
// Execute Action: UseDevice
PartnersHubController.default.useDevice$Action(callContext);
// ProgressBarLength = 25
PartnersHubClientVariables.setProgressBarLength(25);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onReady$Action;
}set _onReady$Action(value) {this.__onReady$Action = value;
}

get _realAccountCreationLayoutScreenBasedonClickBack2$Action() {if(!(this.hasOwnProperty("__realAccountCreationLayoutScreenBasedonClickBack2$Action"))) {
this.__realAccountCreationLayoutScreenBasedonClickBack2$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("RealAccountCreationLayoutScreenBasedonClickBack2", function (span) {
if(span) {
span.setAttribute("code.function", "RealAccountCreationLayoutScreenBasedonClickBack2");
span.setAttribute("outsystems.function.key", "ee2d4378-a08f-463e-a862-33d06850aff4");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("RealAccountCreationLayoutScreenBasedonClickBack2");
callContext = controller.callContext(callContext);
// Execute Action: RealSignupPreviousStep
PartnersHubController.default.realSignupPreviousStep$Action(1, callContext);
// Execute Action: GetHeaderTitle
PartnersHubController.default.getHeaderTitle$Action(callContext);
// Destination: /PartnersHub/AccountTypeScreen
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "AccountTypeScreen", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__realAccountCreationLayoutScreenBasedonClickBack2$Action;
}set _realAccountCreationLayoutScreenBasedonClickBack2$Action(value) {this.__realAccountCreationLayoutScreenBasedonClickBack2$Action = value;
}


accountCurrencyBlockNextStepEvent$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("AccountCurrencyBlockNextStepEvent__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "AccountCurrencyBlockNextStepEvent");
span.setAttribute("outsystems.function.key", "4cc715c4-40a8-458d-bd6a-5610fd271475");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._accountCurrencyBlockNextStepEvent$Action, callContext);
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
span.setAttribute("outsystems.function.key", "94cf08ac-de35-49b2-970f-476898393b80");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onReady$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

realAccountCreationLayoutScreenBasedonClickBack2$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("RealAccountCreationLayoutScreenBasedonClickBack2__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "RealAccountCreationLayoutScreenBasedonClickBack2");
span.setAttribute("outsystems.function.key", "ee2d4378-a08f-463e-a862-33d06850aff4");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._realAccountCreationLayoutScreenBasedonClickBack2$Action, callContext);
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
return PartnersHub_RealAccountCreationController.default.handleError(ex, this.callContext());
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

}
return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});


define("PartnersHub.RealAccountCreation.AccountCurrencyScreen.mvc$translationsResources", ["exports"], function (exports) {
return {};
});

