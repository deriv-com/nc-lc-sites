define("PartnersHub.RealAccountCreation.EmploymentDetailsList.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.Layouts.DeviceLayout.mvc$model", "PartnersHub.RealAccountCreation.EmploymentDetailsDesktopBlock.mvc$model", "PartnersHub.controller$NextStepReal", "PartnersHub.model$RC_4535b2a68fa04382d8868d60004b6438", "PartnersHub.model$RL_117c7b7da327962152f7a4113c25ca3f"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHub_Layouts_DeviceLayout_mvcModel, PartnersHub_RealAccountCreation_EmploymentDetailsDesktopBlock_mvcModel) {
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
this.attr("isTaxInfoModalOpen", "isTaxInfoModalOpenVar", "isTaxInfoModalOpen", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
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
Model._hasValidationWidgetsValue = (PartnersHub_Layouts_DeviceLayout_mvcModel.hasValidationWidgets || PartnersHub_RealAccountCreation_EmploymentDetailsDesktopBlock_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.RealAccountCreation.EmploymentDetailsList.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreation.EmploymentDetailsList.mvc$model", "PartnersHub.RealAccountCreation.EmploymentDetailsList.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Layouts.DeviceLayout.mvc$view", "@outsystems/runtime-widgets-js", "PartnersHub.RealAccountCreation.EmploymentDetailsDesktopBlock.mvc$view", "PartnersHub.controller$NextStepReal", "PartnersHub.model$RC_4535b2a68fa04382d8868d60004b6438", "PartnersHub.model$RL_117c7b7da327962152f7a4113c25ca3f"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_RealAccountCreation_EmploymentDetailsList_mvc_model, PartnersHub_RealAccountCreation_EmploymentDetailsList_mvc_controller, PartnersHubClientVariables, PartnersHub_Layouts_DeviceLayout_mvc_view, OSWidgets, PartnersHub_RealAccountCreation_EmploymentDetailsDesktopBlock_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "RealAccountCreation.EmploymentDetailsList"; }

        static getAttributes() { return {
codeFunction: "EmploymentDetailsList",
functionKey: "7b445e1d-40b1-48db-902f-85b094160ded",
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
            return [PartnersHub_Layouts_DeviceLayout_mvc_view, PartnersHub_RealAccountCreation_EmploymentDetailsDesktopBlock_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreation_EmploymentDetailsList_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreation_EmploymentDetailsList_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(PartnersHub_Layouts_DeviceLayout_mvc_view, {
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
desktopContent: new PlaceholderContent(function () {
return [React.createElement(PartnersHub_RealAccountCreation_EmploymentDetailsDesktopBlock_mvc_view, {
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
tabletContent: PlaceholderContent.Empty,
mobileContent: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "display-flex flex-direction-column",
visible: (PartnersHubClientVariables.getRealSignupEmploymentDetailMobileScreen() === "status_list"),
_idProps: {
service: idService,
name: "EmploymentStatusList"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("JgPVr_4R3k2+qwgjjvCPpw#Value", "Select your employment status")), React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
style: "display: flex; flex-direction: column; gap: 16px;"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.getEmploymentStatusesAggr.listOut,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEmploymentStatusesAggr.dataFetchStatusAttr),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.ListItem, {
extendedProperties: {
style: "align-items: center; background: var(--Neutral-Neutral-1, #F8F9FA); border: 1px solid var(--Neutral-Neutral-2, #F1F3F5); border-radius: 4px; cursor: pointer; display: flex; padding: 16px; width: 100%;"
},
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.listItem1OnClick$Action(model.variables.getEmploymentStatusesAggr.listOut.getCurrent(callContext.iterationContext).employmentStatusAttr.statusAttr, controller.callContext(eventHandlerContext));

;
},
style: "",
triggerActionOnFullSwipeLeft: true,
triggerActionOnFullSwipeRight: true,
_idProps: {
service: idService,
name: "ListItem2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftActions: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "align-items: center; display: flex; justify-content: space-between;"
},
gridProperties: {
classes: "OSInline",
width: "100%"
},
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "color: var(--Neutral-Neutral-10, #101213); font-size: 14px; font-style: normal; font-weight: 700; line-height: 21px;"
},
value: model.variables.getEmploymentStatusesAggr.listOut.getCurrent(callContext.iterationContext).employmentStatusAttr.statusAttr,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEmploymentStatusesAggr.dataFetchStatusAttr)
}), React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.rightIcon.png"),
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
_dependencies: [asPrimitiveValue(model.variables.getEmploymentStatusesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getEmploymentStatusesAggr.listOut.getCurrent(callContext.iterationContext).employmentStatusAttr.statusAttr)]
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.getEmploymentStatusesAggr.dataFetchStatusAttr)]
})), React.createElement(OSWidgets.Popup, {
extendedProperties: {
style: "border-radius: 8px; padding: 16px;"
},
showPopup: model.variables.isTaxInfoModalOpenVar,
style: "\"popup-dialog\"",
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "align-items: center; display: flex; justify-content: space-between; margin-bottom: 16px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 16px; font-weight: bold;"
},
text: [$text(getTranslation("PZgQ9FI7QEebir7RQtmuwQ#Value", "Tax information"))],
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Image, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.closeTaxInfoModal$Action(controller.callContext(eventHandlerContext));

;
}
},
extendedProperties: {
style: "cursor: pointer;"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.closenormal.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("xLQsltViYk2NXYn27hGxLA#Value", "Do you have a tax indentification?"))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "align-items: center; display: flex; flex-direction: column; gap: 16px; justify-content: center; margin-top: 20px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: "align-items: center; background: var(--core-color-solid-coral-700, #FF444F); border: none; border-radius: 100px; cursor: pointer; display: flex; gap: 8px; height: 38px; justify-content: center; padding: 12px 28px;"
},
gridProperties: {
width: "100%",
marginLeft: "0"
},
isDefault: false,
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.nextStep$Action(controller.callContext(eventHandlerContext));

;
},
style: "",
visible: true,
_idProps: {
service: idService,
name: "YeButton2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #f3f6f8; font-weight: bold;"
},
text: [$text(getTranslation("i1Orieh4oUyaIOTDYPCGeQ#Value", "Yes"))],
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: "align-items: center; background: var(--Neutral-Neutral-0, #FFF); border: 1px solid var(--Brand-Secondary-Base, #FF444F); border-radius: 100px; cursor: pointer; display: flex; gap: 8px; height: 38px; justify-content: center; padding: 12px 28px;"
},
gridProperties: {
width: "100%",
marginLeft: "0"
},
isDefault: false,
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.goToAddressDetails$Action(controller.callContext(eventHandlerContext));

;
},
style: "",
visible: true,
_idProps: {
service: idService,
name: "NoButton2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #FF444F;"
},
text: [$text(getTranslation("n5BZZLjpjE28YoXAvFgp9w#Value", "No"))],
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}))))];
})
},
_dependencies: [asPrimitiveValue(model.variables.isTaxInfoModalOpenVar), asPrimitiveValue(model.variables.getEmploymentStatusesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getEmploymentStatusesAggr.listOut), asPrimitiveValue(PartnersHubClientVariables.getRealSignupEmploymentDetailMobileScreen())]
}));
        }
    }

    return View;
});
define("PartnersHub.RealAccountCreation.EmploymentDetailsList.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreation.EmploymentDetailsList.mvc$translationsResources", "PartnersHub.controller$NextStepReal", "PartnersHub.model$RC_4535b2a68fa04382d8868d60004b6438", "PartnersHub.model$RL_117c7b7da327962152f7a4113c25ca3f"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreation_EmploymentDetailsList_mvc_TranslationsResources) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, PartnersHub_RealAccountCreation_EmploymentDetailsList_mvc_TranslationsResources);
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
return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetEmploymentStatuses", "screenservices/PartnersHub/RealAccountCreation/EmploymentDetailsList/ScreenDataSetGetEmploymentStatuses", "OMyidYGqb_lsx3H6Y6vNEQ", maxRecords, startIndex, function (b) {
model.variables.getEmploymentStatusesAggr.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getEmploymentStatusesAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getEmploymentStatusesAggr.constructor));
}, undefined, undefined, undefined, callContext, PartnersHubClientVariables, true);
}.bind(this);
return OS.Logger.startActiveSpan("GetEmploymentStatuses", function (span) {
if(span) {
span.setAttribute("code.function", "GetEmploymentStatuses");
span.setAttribute("outsystems.function.key", "59691cba-ddab-41f1-8a4b-38b763206c48");
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
get _listItem1OnClick$Action() {if(!(this.hasOwnProperty("__listItem1OnClick$Action"))) {
this.__listItem1OnClick$Action = function (statusIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("ListItem1OnClick", function (span) {
if(span) {
span.setAttribute("code.function", "ListItem1OnClick");
span.setAttribute("outsystems.function.key", "4c08cac3-a9b5-4123-ae72-60d0057ff8d8");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("ListItem1OnClick");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.EmploymentDetailsList.ListItem1OnClick$vars"))());
vars.value.statusInLocal = statusIn;
// RealSignupEmploymentStatus = Status
PartnersHubClientVariables.setRealSignupEmploymentStatus(vars.value.statusInLocal);
if((((vars.value.statusInLocal === "Student") || (vars.value.statusInLocal === "Unemployed")))) {
// isTaxInfoModalOpen = True
model.variables.isTaxInfoModalOpenVar = true;
} else {
// Destination: /PartnersHub/EmploymentDetailsInfoScreen
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "EmploymentDetailsInfoScreen", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__listItem1OnClick$Action;
}set _listItem1OnClick$Action(value) {this.__listItem1OnClick$Action = value;
}

get _closeTaxInfoModal$Action() {if(!(this.hasOwnProperty("__closeTaxInfoModal$Action"))) {
this.__closeTaxInfoModal$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("CloseTaxInfoModal", function (span) {
if(span) {
span.setAttribute("code.function", "CloseTaxInfoModal");
span.setAttribute("outsystems.function.key", "630fc1a5-b643-4660-aef7-2f510adb63f8");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("CloseTaxInfoModal");
callContext = controller.callContext(callContext);
// isTaxInfoModalOpen = False
model.variables.isTaxInfoModalOpenVar = false;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__closeTaxInfoModal$Action;
}set _closeTaxInfoModal$Action(value) {this.__closeTaxInfoModal$Action = value;
}

get _nextStep$Action() {if(!(this.hasOwnProperty("__nextStep$Action"))) {
this.__nextStep$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("NextStep", function (span) {
if(span) {
span.setAttribute("code.function", "NextStep");
span.setAttribute("outsystems.function.key", "70ec7f17-b4fd-4a72-9ec3-8416e0987eda");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("NextStep");
callContext = controller.callContext(callContext);
// isTaxInfoModalOpen = False
model.variables.isTaxInfoModalOpenVar = false;
// RealSignupEmploymentDetailMobileScreen = "employment_details"
PartnersHubClientVariables.setRealSignupEmploymentDetailMobileScreen("employment_details");
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__nextStep$Action;
}set _nextStep$Action(value) {this.__nextStep$Action = value;
}

get _goToAddressDetails$Action() {if(!(this.hasOwnProperty("__goToAddressDetails$Action"))) {
this.__goToAddressDetails$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("GoToAddressDetails", function (span) {
if(span) {
span.setAttribute("code.function", "GoToAddressDetails");
span.setAttribute("outsystems.function.key", "eb69ef8d-5f69-4c2a-8a10-c8fa793118c5");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("GoToAddressDetails");
callContext = controller.callContext(callContext);
// Execute Action: NextStepReal
PartnersHubController.default.nextStepReal$Action(1, 12, callContext);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__goToAddressDetails$Action;
}set _goToAddressDetails$Action(value) {this.__goToAddressDetails$Action = value;
}


listItem1OnClick$Action(statusIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("ListItem1OnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "ListItem1OnClick");
span.setAttribute("outsystems.function.key", "4c08cac3-a9b5-4123-ae72-60d0057ff8d8");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._listItem1OnClick$Action, callContext, statusIn);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

closeTaxInfoModal$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("CloseTaxInfoModal__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "CloseTaxInfoModal");
span.setAttribute("outsystems.function.key", "630fc1a5-b643-4660-aef7-2f510adb63f8");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._closeTaxInfoModal$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

nextStep$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("NextStep__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "NextStep");
span.setAttribute("outsystems.function.key", "70ec7f17-b4fd-4a72-9ec3-8416e0987eda");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._nextStep$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

goToAddressDetails$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("GoToAddressDetails__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "GoToAddressDetails");
span.setAttribute("outsystems.function.key", "eb69ef8d-5f69-4c2a-8a10-c8fa793118c5");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._goToAddressDetails$Action, callContext);
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
Controller.registerVariableGroupType("PartnersHub.RealAccountCreation.EmploymentDetailsList.ListItem1OnClick$vars", [{
name: "Status",
attrName: "statusInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

}
return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});


define("PartnersHub.RealAccountCreation.EmploymentDetailsList.mvc$translationsResources.ar-001", [], function () {
return {
"n5BZZLjpjE28YoXAvFgp9w#Value": "لا",
"i1Orieh4oUyaIOTDYPCGeQ#Value": "نعم",
"xLQsltViYk2NXYn27hGxLA#Value": "هل لديك رقم تعريف ضريبي؟",
"PZgQ9FI7QEebir7RQtmuwQ#Value": "معلومات الضرائب",
"JgPVr_4R3k2+qwgjjvCPpw#Value": "اختر الحالة الوظيفية"
};
});

define("PartnersHub.RealAccountCreation.EmploymentDetailsList.mvc$translationsResources.de-DE", [], function () {
return {
"n5BZZLjpjE28YoXAvFgp9w#Value": "Nein",
"i1Orieh4oUyaIOTDYPCGeQ#Value": "Ja",
"xLQsltViYk2NXYn27hGxLA#Value": "Haben Sie eine Steueridentifikationsnummer?",
"PZgQ9FI7QEebir7RQtmuwQ#Value": "Steuerinformationen",
"JgPVr_4R3k2+qwgjjvCPpw#Value": "Wählen Sie Ihren Beschäftigungsstatus aus"
};
});

define("PartnersHub.RealAccountCreation.EmploymentDetailsList.mvc$translationsResources.es-ES", [], function () {
return {
"n5BZZLjpjE28YoXAvFgp9w#Value": "No",
"i1Orieh4oUyaIOTDYPCGeQ#Value": "Sí",
"xLQsltViYk2NXYn27hGxLA#Value": "¿Tienes un número de identificación fiscal?",
"PZgQ9FI7QEebir7RQtmuwQ#Value": "Información fiscal",
"JgPVr_4R3k2+qwgjjvCPpw#Value": "Selecciona tu estado de empleo"
};
});

define("PartnersHub.RealAccountCreation.EmploymentDetailsList.mvc$translationsResources.fr-FR", [], function () {
return {
"n5BZZLjpjE28YoXAvFgp9w#Value": "Non",
"i1Orieh4oUyaIOTDYPCGeQ#Value": "Oui",
"xLQsltViYk2NXYn27hGxLA#Value": "Avez-vous un numéro d\'identification fiscale ?",
"PZgQ9FI7QEebir7RQtmuwQ#Value": "Informations fiscales",
"JgPVr_4R3k2+qwgjjvCPpw#Value": "Sélectionnez votre statut d\'emploi"
};
});

define("PartnersHub.RealAccountCreation.EmploymentDetailsList.mvc$translationsResources.it-IT", [], function () {
return {
"n5BZZLjpjE28YoXAvFgp9w#Value": "No",
"i1Orieh4oUyaIOTDYPCGeQ#Value": "Sì",
"xLQsltViYk2NXYn27hGxLA#Value": "Hai un numero di identificazione fiscale?",
"PZgQ9FI7QEebir7RQtmuwQ#Value": "Informazioni fiscali",
"JgPVr_4R3k2+qwgjjvCPpw#Value": "Seleziona il tuo stato di occupazione"
};
});

define("PartnersHub.RealAccountCreation.EmploymentDetailsList.mvc$translationsResources.pl-PL", [], function () {
return {
"n5BZZLjpjE28YoXAvFgp9w#Value": "Nie",
"i1Orieh4oUyaIOTDYPCGeQ#Value": "Tak",
"xLQsltViYk2NXYn27hGxLA#Value": "Czy masz numer identyfikacji podatkowej?",
"PZgQ9FI7QEebir7RQtmuwQ#Value": "Informacje podatkowe",
"JgPVr_4R3k2+qwgjjvCPpw#Value": "Wybierz swój status zatrudnienia"
};
});

define("PartnersHub.RealAccountCreation.EmploymentDetailsList.mvc$translationsResources.pt-PT", [], function () {
return {
"n5BZZLjpjE28YoXAvFgp9w#Value": "Não",
"i1Orieh4oUyaIOTDYPCGeQ#Value": "Sim",
"xLQsltViYk2NXYn27hGxLA#Value": "Você tem um número de identificação fiscal?",
"PZgQ9FI7QEebir7RQtmuwQ#Value": "Informação fiscal",
"JgPVr_4R3k2+qwgjjvCPpw#Value": "Selecione o seu estado de emprego"
};
});

define("PartnersHub.RealAccountCreation.EmploymentDetailsList.mvc$translationsResources.ru-RU", [], function () {
return {
"n5BZZLjpjE28YoXAvFgp9w#Value": "Нет",
"i1Orieh4oUyaIOTDYPCGeQ#Value": "Да",
"xLQsltViYk2NXYn27hGxLA#Value": "У вас есть налоговый идентификатор?",
"PZgQ9FI7QEebir7RQtmuwQ#Value": "Налоговая информация",
"JgPVr_4R3k2+qwgjjvCPpw#Value": "Выберите свой статус занятости"
};
});

define("PartnersHub.RealAccountCreation.EmploymentDetailsList.mvc$translationsResources", ["exports", "PartnersHub.RealAccountCreation.EmploymentDetailsList.mvc$translationsResources.ar-001", "PartnersHub.RealAccountCreation.EmploymentDetailsList.mvc$translationsResources.de-DE", "PartnersHub.RealAccountCreation.EmploymentDetailsList.mvc$translationsResources.es-ES", "PartnersHub.RealAccountCreation.EmploymentDetailsList.mvc$translationsResources.fr-FR", "PartnersHub.RealAccountCreation.EmploymentDetailsList.mvc$translationsResources.it-IT", "PartnersHub.RealAccountCreation.EmploymentDetailsList.mvc$translationsResources.pl-PL", "PartnersHub.RealAccountCreation.EmploymentDetailsList.mvc$translationsResources.pt-PT", "PartnersHub.RealAccountCreation.EmploymentDetailsList.mvc$translationsResources.ru-RU"], function (exports, PartnersHub_RealAccountCreation_EmploymentDetailsList_mvc_translationsResources_ar001, PartnersHub_RealAccountCreation_EmploymentDetailsList_mvc_translationsResources_deDE, PartnersHub_RealAccountCreation_EmploymentDetailsList_mvc_translationsResources_esES, PartnersHub_RealAccountCreation_EmploymentDetailsList_mvc_translationsResources_frFR, PartnersHub_RealAccountCreation_EmploymentDetailsList_mvc_translationsResources_itIT, PartnersHub_RealAccountCreation_EmploymentDetailsList_mvc_translationsResources_plPL, PartnersHub_RealAccountCreation_EmploymentDetailsList_mvc_translationsResources_ptPT, PartnersHub_RealAccountCreation_EmploymentDetailsList_mvc_translationsResources_ruRU) {
return {
"ar-001": {
"translations": PartnersHub_RealAccountCreation_EmploymentDetailsList_mvc_translationsResources_ar001,
"isRTL": true
},
"de-DE": {
"translations": PartnersHub_RealAccountCreation_EmploymentDetailsList_mvc_translationsResources_deDE,
"isRTL": false
},
"es-ES": {
"translations": PartnersHub_RealAccountCreation_EmploymentDetailsList_mvc_translationsResources_esES,
"isRTL": false
},
"fr-FR": {
"translations": PartnersHub_RealAccountCreation_EmploymentDetailsList_mvc_translationsResources_frFR,
"isRTL": false
},
"it-IT": {
"translations": PartnersHub_RealAccountCreation_EmploymentDetailsList_mvc_translationsResources_itIT,
"isRTL": false
},
"pl-PL": {
"translations": PartnersHub_RealAccountCreation_EmploymentDetailsList_mvc_translationsResources_plPL,
"isRTL": false
},
"pt-PT": {
"translations": PartnersHub_RealAccountCreation_EmploymentDetailsList_mvc_translationsResources_ptPT,
"isRTL": false
},
"ru-RU": {
"translations": PartnersHub_RealAccountCreation_EmploymentDetailsList_mvc_translationsResources_ruRU,
"isRTL": false
}
};
});

