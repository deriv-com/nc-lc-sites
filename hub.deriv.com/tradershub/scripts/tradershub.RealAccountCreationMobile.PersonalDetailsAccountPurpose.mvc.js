define("tradershub.RealAccountCreationMobile.PersonalDetailsAccountPurpose.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.Layouts.RealAccountCreationLayout.mvc$model", "tradershub.model$EN_3e32e8f97f4a30dd16a3843f28450f43EntityRecord", "tradershub.model$RL_dd299c02eac5eb3e7ba5132848a21b2a", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure", "tradershub.controller$FetchAccountPurposeList"], function (OSRuntimeCore, tradershubModel, tradershubController, tradershub_Layouts_RealAccountCreationLayout_mvcModel) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("AccountPurposeList", "accountPurposeListVar", "AccountPurposeList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_dd299c02eac5eb3e7ba5132848a21b2a());
}, false, tradershubModel.RL_dd299c02eac5eb3e7ba5132848a21b2a)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new VariablesRecord(new VariablesRecord.RecordClass({
accountPurposeListVar: OS.DataTypes.ImmutableBase.getData(str)
}));
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
OS.Model.BaseViewModel {
static getVariablesRecordConstructor() {
return VariablesRecord;
}

static getWidgetsRecordConstructor() {
return WidgetsRecord;
}

static get hasValidationWidgets() {if((Model._hasValidationWidgetsValue === undefined)) {
Model._hasValidationWidgetsValue = tradershub_Layouts_RealAccountCreationLayout_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("tradershub.RealAccountCreationMobile.PersonalDetailsAccountPurpose.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.RealAccountCreationMobile.PersonalDetailsAccountPurpose.mvc$model", "tradershub.RealAccountCreationMobile.PersonalDetailsAccountPurpose.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.RealAccountCreationLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.model$EN_3e32e8f97f4a30dd16a3843f28450f43EntityRecord", "tradershub.model$RL_dd299c02eac5eb3e7ba5132848a21b2a", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure", "tradershub.controller$FetchAccountPurposeList"], function (OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_RealAccountCreationMobile_PersonalDetailsAccountPurpose_mvc_model, tradershub_RealAccountCreationMobile_PersonalDetailsAccountPurpose_mvc_controller, tradershubClientVariables, tradershub_Layouts_RealAccountCreationLayout_mvc_view, OSWidgets) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() { return "RealAccountCreationMobile.PersonalDetailsAccountPurpose"; }

        static getAttributes() { return {
codeFunction: "PersonalDetailsAccountPurpose",
functionKey: "ae14d2e6-5127-45ac-8a1f-8eec0453e09a",
functionOwnerName: "tradershub",
functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.RealAccountCreationMobile.PersonalDetailsAccountPurpose.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_RealAccountCreationLayout_mvc_view];
        }

        get modelFactory() {
            return tradershub_RealAccountCreationMobile_PersonalDetailsAccountPurpose_mvc_model;
        }

        get controllerFactory() {
            return tradershub_RealAccountCreationMobile_PersonalDetailsAccountPurpose_mvc_controller;
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
            

            return OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("5tIUridRrEWKH47sBFPgmg#TitleExpression.-545367396.1", "Personal details | Deriv");
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
Analytics: model.getCachedValue(idService.getId("MdGYiAATDkiqhs7AD2BdqA.Analytics"), function () {
return function () {
var rec = new tradershubModel.ST_0dd6e149ce474591a764bb53175023a1Structure();
rec.stepCodenameAttr = "personal_details";
rec.stepNumberAttr = "1";
return rec;
}();
}),
Title: "Personal details"
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
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("magvm8LDEkqQTh5s_xxCVQ#Value", "Select your account purpose"))), React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
style: "margin-top: 16px;"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.accountPurposeListVar,
style: "list list-group display-flex flex-direction-column gap-base",
tag: "div",
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.ListItem, {
extendedProperties: {
style: "background-color: #F8F9FA; border-color: #F1F3F5; border-radius: 4px; border-style: solid; border-width: 1px; cursor: pointer; padding: 16px;"
},
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.listItemOnClick$Action(model.variables.accountPurposeListVar.getCurrent(callContext.iterationContext), controller.callContext(eventHandlerContext));

;
},
style: "list-item",
triggerActionOnFullSwipeLeft: false,
triggerActionOnFullSwipeRight: false,
_idProps: {
service: idService,
name: "AccountPurposeListItem"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftActions: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex justify-content-space-between align-items-center ",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-weight: 500;"
},
gridProperties: {
classes: "OSFillParent"
},
value: model.variables.accountPurposeListVar.getCurrent(callContext.iterationContext).labelAttr,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.iconarrow.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
rightActions: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.accountPurposeListVar.getCurrent(callContext.iterationContext).labelAttr)]
})];
}, callContext, idService, "1")
},
_dependencies: []
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.accountPurposeListVar)]
}));
        }
    }

    return View;
});
define("tradershub.RealAccountCreationMobile.PersonalDetailsAccountPurpose.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.RealAccountCreationMobile.PersonalDetailsAccountPurpose.mvc$translationsResources", "tradershub.RealAccountCreationMobile.controller", "tradershub.RealAccountCreationMobile.PersonalDetailsAccountPurpose.mvc$controller.ListItemOnClick.RudderStackJS", "tradershub.model$EN_3e32e8f97f4a30dd16a3843f28450f43EntityRecord", "tradershub.model$RL_dd299c02eac5eb3e7ba5132848a21b2a", "tradershub.model$ST_0dd6e149ce474591a764bb53175023a1Structure", "tradershub.controller$FetchAccountPurposeList"], function (OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_RealAccountCreationMobile_PersonalDetailsAccountPurpose_mvc_TranslationsResources, tradershub_RealAccountCreationMobileController, tradershub_RealAccountCreationMobile_PersonalDetailsAccountPurpose_mvc_controller_ListItemOnClick_RudderStackJS) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, tradershub_RealAccountCreationMobile_PersonalDetailsAccountPurpose_mvc_TranslationsResources);
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
get _onReady$Action() {if(!(this.hasOwnProperty("__onReady$Action"))) {
this.__onReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnReady", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "a24804e9-cdb5-44d9-a05b-1bc622018700");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var fetchAccountPurposeListVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: FetchAccountPurposeList
model.flush();
return tradershubController.default.fetchAccountPurposeList$Action(callContext).then(function (value) {
fetchAccountPurposeListVar.value = value;
}).then(function () {
// AccountPurposeList = FetchAccountPurposeList.AccontPurposeList
model.variables.accountPurposeListVar = fetchAccountPurposeListVar.value.accontPurposeListOut;
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

get _listItemOnClick$Action() {if(!(this.hasOwnProperty("__listItemOnClick$Action"))) {
this.__listItemOnClick$Action = function (accountPurposeIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("ListItemOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "ListItemOnClick");
span.setAttribute("outsystems.function.key", "a3d08d88-d74c-470a-9a9b-f2011ca81592");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("ListItemOnClick");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("tradershub.RealAccountCreationMobile.PersonalDetailsAccountPurpose.ListItemOnClick$vars"))());
vars.value.accountPurposeInLocal = accountPurposeIn.clone();
OS.Logger.startActiveSpan("RudderStack", function (span) {
if(span) {
span.setAttribute("code.function", "RudderStack");
span.setAttribute("outsystems.function.key", "06a6c557-ac8d-49e5-8731-832bf3d49709");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_RealAccountCreationMobile_PersonalDetailsAccountPurpose_mvc_controller_ListItemOnClick_RudderStackJS, "RudderStack", "ListItemOnClick", null, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// RealSignupAccountOpeningReason = AccountPurpose.Value
tradershubClientVariables.setRealSignupAccountOpeningReason(vars.value.accountPurposeInLocal.valueAttr);
// RealSignupPassedStepCount = 2
tradershubClientVariables.setRealSignupPassedStepCount(2);
if((tradershubClientVariables.getRealSignupIsIDVSupported())) {
// Destination: /tradershub/IdentityVerification
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "identity-verification", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
// Destination: /tradershub/EmploymentDetails
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "employment-details", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__listItemOnClick$Action;
}set _listItemOnClick$Action(value) {this.__listItemOnClick$Action = value;
}


onReady$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnReady__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "a24804e9-cdb5-44d9-a05b-1bc622018700");
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

listItemOnClick$Action(accountPurposeIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("ListItemOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "ListItemOnClick");
span.setAttribute("outsystems.function.key", "a3d08d88-d74c-470a-9a9b-f2011ca81592");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._listItemOnClick$Action, callContext, accountPurposeIn);
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
return tradershub_RealAccountCreationMobileController.default.handleError(ex, this.callContext());
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
Controller.registerVariableGroupType("tradershub.RealAccountCreationMobile.PersonalDetailsAccountPurpose.ListItemOnClick$vars", [{
name: "AccountPurpose",
attrName: "accountPurposeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new tradershubModel.EN_3e32e8f97f4a30dd16a3843f28450f43EntityRecord();
},
complexType: tradershubModel.EN_3e32e8f97f4a30dd16a3843f28450f43EntityRecord
}]);

}
return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.RealAccountCreationMobile.PersonalDetailsAccountPurpose.mvc$controller.ListItemOnClick.RudderStackJS", [], function () {
return function ($actions, $roles, $public) {
cacheTrackEvents.track({
    name: "ce_real_account_signup_form",
    properties: {
        action: "step_passed",
        step_num: 1,
        step_codename: "personal_details",
        form_name: "real_account_signup_form_outsystems"
    }
});
};
});


define("tradershub.RealAccountCreationMobile.PersonalDetailsAccountPurpose.mvc$translationsResources.fr-FR", [], function () {
return {
"magvm8LDEkqQTh5s_xxCVQ#Value": "Sélectionnez l\'objectif de votre compte",
"5tIUridRrEWKH47sBFPgmg#Title": "Détails personnels | Deriv",
"5tIUridRrEWKH47sBFPgmg#TitleExpression.-545367396.1": "Détails personnels | Deriv"
};
});

define("tradershub.RealAccountCreationMobile.PersonalDetailsAccountPurpose.mvc$translationsResources", ["exports", "tradershub.RealAccountCreationMobile.PersonalDetailsAccountPurpose.mvc$translationsResources.fr-FR"], function (exports, tradershub_RealAccountCreationMobile_PersonalDetailsAccountPurpose_mvc_translationsResources_frFR) {
return {
"fr-FR": {
"translations": tradershub_RealAccountCreationMobile_PersonalDetailsAccountPurpose_mvc_translationsResources_frFR,
"isRTL": false
}
};
});

