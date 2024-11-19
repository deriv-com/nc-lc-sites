define("PartnersHub.RealAccountCreation.AccountTypeScreen.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.mvc$model", "PartnersHub.RealAccountCreationFlow.AccountTypeBlock.mvc$model", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.controller$UseDevice"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvcModel, PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvcModel) {
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
Model._hasValidationWidgetsValue = (PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvcModel.hasValidationWidgets || PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.RealAccountCreation.AccountTypeScreen.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreation.AccountTypeScreen.mvc$model", "PartnersHub.RealAccountCreation.AccountTypeScreen.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.mvc$view", "@outsystems/runtime-widgets-js", "PartnersHub.RealAccountCreationFlow.AccountTypeBlock.mvc$view", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.controller$UseDevice"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_RealAccountCreation_AccountTypeScreen_mvc_model, PartnersHub_RealAccountCreation_AccountTypeScreen_mvc_controller, PartnersHubClientVariables, PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvc_view, OSWidgets, PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() { return "RealAccountCreation.AccountTypeScreen"; }

        static getAttributes() { return {
codeFunction: "AccountTypeScreen",
functionKey: "928b03ff-65f0-420b-b506-106b8e9bda09",
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
            return [PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvc_view, PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreation_AccountTypeScreen_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreation_AccountTypeScreen_mvc_controller;
        }

        get title() {
            

            return OSView.BaseView.BaseWebScreen.getTranslation("_wOLkvBlC0K1BhBrjpvaCQ#Title", "AccountTypeScreen");
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
return [React.createElement(PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvc_view, {
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
onClickEvent$Action: function () {
var eventHandlerContext = callContext.clone();
controller.accountTypeBlockOnClickEvent$Action(controller.callContext(eventHandlerContext));

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
define("PartnersHub.RealAccountCreation.AccountTypeScreen.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreation.AccountTypeScreen.mvc$translationsResources", "PartnersHub.RealAccountCreation.controller", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.controller$UseDevice"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreation_AccountTypeScreen_mvc_TranslationsResources, PartnersHub_RealAccountCreationController) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, PartnersHub_RealAccountCreation_AccountTypeScreen_mvc_TranslationsResources);
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
get _accountTypeBlockOnClickEvent$Action() {if(!(this.hasOwnProperty("__accountTypeBlockOnClickEvent$Action"))) {
this.__accountTypeBlockOnClickEvent$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("AccountTypeBlockOnClickEvent", function (span) {
if(span) {
span.setAttribute("code.function", "AccountTypeBlockOnClickEvent");
span.setAttribute("outsystems.function.key", "0cb7253d-1656-4cd3-b152-ad97072ad7dd");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("AccountTypeBlockOnClickEvent");
callContext = controller.callContext(callContext);
// Execute Action: RealSignupNextStep
PartnersHubController.default.realSignupNextStep$Action(1, callContext);
// Execute Action: GetHeaderTitle
PartnersHubController.default.getHeaderTitle$Action(callContext);
// Destination: /PartnersHub/AccountCurrencyScreen
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "AccountCurrencyScreen", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__accountTypeBlockOnClickEvent$Action;
}set _accountTypeBlockOnClickEvent$Action(value) {this.__accountTypeBlockOnClickEvent$Action = value;
}

get _onReady$Action() {if(!(this.hasOwnProperty("__onReady$Action"))) {
this.__onReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnReady", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "349c252d-1c7c-42b9-a911-139ec673b078");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
// Execute Action: UseDevice
PartnersHubController.default.useDevice$Action(callContext);
// ProgressBarLength = 12.5
PartnersHubClientVariables.setProgressBarLength(12);
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


accountTypeBlockOnClickEvent$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("AccountTypeBlockOnClickEvent__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "AccountTypeBlockOnClickEvent");
span.setAttribute("outsystems.function.key", "0cb7253d-1656-4cd3-b152-ad97072ad7dd");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._accountTypeBlockOnClickEvent$Action, callContext);
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
span.setAttribute("outsystems.function.key", "349c252d-1c7c-42b9-a911-139ec673b078");
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


define("PartnersHub.RealAccountCreation.AccountTypeScreen.mvc$translationsResources", ["exports"], function (exports) {
return {};
});

