define("tradershub.WalletBlocks.WalletsTransaction.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "SharedUtilities.controller", "OutSystemsUI.Content.Tooltip.mvc$model", "OutSystemsUI.Utilities.Separator.mvc$model", "SharedUtilities.controller$FormatMoney", "tradershub.referencesHealth", "tradershub.referencesHealth$SharedUtilities", "tradershub.model$ST_3425849bb816196585dd6f07dbf2721dStructure", "tradershub.model$ST_98879cbf153f8de2b881b6fbde3b59bdStructure", "tradershub.model$RL_88c19a254c0070e215d8cb4352d11d8e"], function (OSRuntimeCore, tradershubModel, SharedUtilitiesController, OutSystemsUI_Content_Tooltip_mvcModel, OutSystemsUI_Utilities_Separator_mvcModel) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("ActiveWallet", "activeWalletVar", "ActiveWallet", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_3425849bb816196585dd6f07dbf2721dStructure());
}, false, tradershubModel.ST_3425849bb816196585dd6f07dbf2721dStructure), 
this.attr("RecentTransactionsList", "recentTransactionsListVar", "RecentTransactionsList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_88c19a254c0070e215d8cb4352d11d8e());
}, false, tradershubModel.RL_88c19a254c0070e215d8cb4352d11d8e), 
this.attr("TransactionsList", "transactionsListIn", "TransactionsList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_88c19a254c0070e215d8cb4352d11d8e());
}, false, tradershubModel.RL_88c19a254c0070e215d8cb4352d11d8e), 
this.attr("_transactionsListInDataFetchStatus", "_transactionsListInDataFetchStatus", "_transactionsListInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false)
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
Model._hasValidationWidgetsValue = (OutSystemsUI_Content_Tooltip_mvcModel.hasValidationWidgets || OutSystemsUI_Utilities_Separator_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
if("TransactionsList" in inputs) {
this.variables.transactionsListIn = inputs.TransactionsList;
if("_transactionsListInDataFetchStatus" in inputs) {
this.variables._transactionsListInDataFetchStatus = inputs._transactionsListInDataFetchStatus;
}

}

}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("tradershub.WalletBlocks.WalletsTransaction.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "SharedUtilities.controller", "react", "@outsystems/runtime-view-js", "tradershub.WalletBlocks.WalletsTransaction.mvc$model", "tradershub.WalletBlocks.WalletsTransaction.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Content.Tooltip.mvc$view", "OutSystemsUI.Utilities.Separator.mvc$view", "SharedUtilities.controller$FormatMoney", "tradershub.referencesHealth", "tradershub.referencesHealth$SharedUtilities", "tradershub.model$ST_3425849bb816196585dd6f07dbf2721dStructure", "tradershub.model$ST_98879cbf153f8de2b881b6fbde3b59bdStructure", "tradershub.model$RL_88c19a254c0070e215d8cb4352d11d8e"], function (OSRuntimeCore, tradershubModel, tradershubController, SharedUtilitiesController, React, OSView, tradershub_WalletBlocks_WalletsTransaction_mvc_model, tradershub_WalletBlocks_WalletsTransaction_mvc_controller, tradershubClientVariables, OSWidgets, OutSystemsUI_Content_Tooltip_mvc_view, OutSystemsUI_Utilities_Separator_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "WalletBlocks.WalletsTransaction"; }

        static getAttributes() { return {
codeFunction: "WalletsTransaction",
functionKey: "a35a5f01-4f55-4d47-967b-871f11552948",
functionOwnerName: "tradershub",
functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.WalletBlocks.WalletsTransaction.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Content_Tooltip_mvc_view, OutSystemsUI_Utilities_Separator_mvc_view];
        }

        get modelFactory() {
            return tradershub_WalletBlocks_WalletsTransaction_mvc_model;
        }

        get controllerFactory() {
            return tradershub_WalletBlocks_WalletsTransaction_mvc_controller;
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
}, React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.recentTransactionsListVar,
style: model.getCachedValue(idService.getId("5_O63ezXdkmP0UM+mKmzsg.Style"), function () {
return ("list list-group " + (((model.variables.transactionsListIn.length > 6)) ? ("wallet-transaction-container-no-border") : ("wallet-transaction-container-border")));
}, function () {
return model.variables.transactionsListIn.length;
}),
tag: "div",
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transactionsListInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables._transactionsListInDataFetchStatus), asPrimitiveValue(model.variables.transactionsListIn.getCurrent(callContext.iterationContext).amountAttr), asPrimitiveValue(model.variables.transactionsListIn.getCurrent(callContext.iterationContext).transaction_idAttr), asPrimitiveValue(model.variables.activeWalletVar.currencyAttr), asPrimitiveValue(model.variables.activeWalletVar.nameAttr), asPrimitiveValue(model.variables.activeWalletVar.loginidAttr), asPrimitiveValue(model.variables.recentTransactionsListVar.length), asPrimitiveValue(model.variables.recentTransactionsListVar.getCurrentRowNumber(callContext.iterationContext)), asPrimitiveValue(model.variables.recentTransactionsListVar.getCurrent(callContext.iterationContext).amountAttr), asPrimitiveValue(model.variables.recentTransactionsListVar.getCurrent(callContext.iterationContext).toAttr.platformAttr), asPrimitiveValue(model.variables.recentTransactionsListVar.getCurrent(callContext.iterationContext).transaction_idAttr), asPrimitiveValue(model.variables.recentTransactionsListVar.getCurrent(callContext.iterationContext).fromAttr.loginidAttr), asPrimitiveValue(model.variables.recentTransactionsListVar.getCurrent(callContext.iterationContext).action_typeAttr)]
}, React.createElement(OSWidgets.ListItem, {
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.listItem1OnClick$Action(controller.callContext(eventHandlerContext));

;
},
style: "wallet-transaction-item",
triggerActionOnFullSwipeLeft: false,
triggerActionOnFullSwipeRight: false,
_idProps: {
service: idService,
name: "ListItem1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftActions: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex justify-content-space-between",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "wallet-transaction-action-type",
value: model.getCachedValue(idService.getId("TMbZVntWukWA3_i9mwl6HA.Value"), function () {
return (((model.variables.recentTransactionsListVar.getCurrent(callContext.iterationContext).action_typeAttr === "transfer")) ? ((((model.variables.recentTransactionsListVar.getCurrent(callContext.iterationContext).fromAttr.loginidAttr === model.variables.activeWalletVar.loginidAttr)) ? ("Transfer to") : ("Transfer from"))) : (model.variables.recentTransactionsListVar.getCurrent(callContext.iterationContext).action_typeAttr));
}, function () {
return model.variables.recentTransactionsListVar.getCurrent(callContext.iterationContext).action_typeAttr;
}, function () {
return model.variables.recentTransactionsListVar.getCurrent(callContext.iterationContext).fromAttr.loginidAttr;
}, function () {
return model.variables.activeWalletVar.loginidAttr;
}),
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}), $if(!(model.variables.transactionsListIn.getCurrent(callContext.iterationContext).transaction_idAttr.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))), false, this, function () {
return [React.createElement(OutSystemsUI_Content_Tooltip_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Trigger: tradershubModel.staticEntities.trigger.onClick,
Position: tradershubModel.staticEntities.position.topLeft
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onToggle$Action: function (tooltipIdIn, isOpenedIn) {
var eventHandlerContext = callContext.clone();
controller.tooltipInitialized$Action(controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "7",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 12px;"
},
style: "wallet-transaction-action-type",
value: ("Ref.ID:" + OS.BuiltinFunctions.longIntegerToText(model.variables.recentTransactionsListVar.getCurrent(callContext.iterationContext).transaction_idAttr)),
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
tooltip: new PlaceholderContent(function () {
return ["Copied"];
})
},
_dependencies: [asPrimitiveValue(model.variables.recentTransactionsListVar.getCurrent(callContext.iterationContext).transaction_idAttr)]
})];
}, function () {
return [];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex justify-content-space-between",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("klKvUVNdiU6cALRzFBS10Q.Value"), function () {
return (((model.variables.recentTransactionsListVar.getCurrent(callContext.iterationContext).action_typeAttr === "transfer")) ? ((((model.variables.recentTransactionsListVar.getCurrent(callContext.iterationContext).fromAttr.loginidAttr === model.variables.activeWalletVar.loginidAttr)) ? (model.variables.recentTransactionsListVar.getCurrent(callContext.iterationContext).toAttr.platformAttr) : (model.variables.recentTransactionsListVar.getCurrent(callContext.iterationContext).toAttr.platformAttr))) : (model.variables.activeWalletVar.nameAttr));
}, function () {
return model.variables.recentTransactionsListVar.getCurrent(callContext.iterationContext).action_typeAttr;
}, function () {
return model.variables.recentTransactionsListVar.getCurrent(callContext.iterationContext).fromAttr.loginidAttr;
}, function () {
return model.variables.activeWalletVar.loginidAttr;
}, function () {
return model.variables.recentTransactionsListVar.getCurrent(callContext.iterationContext).toAttr.platformAttr;
}, function () {
return model.variables.activeWalletVar.nameAttr;
}),
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: model.getCachedValue(idService.getId("PHIxe3PQTE2tJzWD1HHQ_Q.Style"), function () {
return ((model.variables.transactionsListIn.getCurrent(callContext.iterationContext).amountAttr.gt(OS.BuiltinFunctions.integerToDecimal(0))) ? ("font-bold wallet-transaction-amount-positive") : ("font-bold wallet-transaction-amount-negative"));
}, function () {
return model.variables.transactionsListIn.getCurrent(callContext.iterationContext).amountAttr;
}),
value: model.getCachedValue(idService.getId("PHIxe3PQTE2tJzWD1HHQ_Q.Value"), function () {
return ((model.variables.recentTransactionsListVar.getCurrent(callContext.iterationContext).amountAttr.gt(OS.BuiltinFunctions.integerToDecimal(0))) ? (((("+" + SharedUtilitiesController.default.formatMoney$Action(OS.BuiltinFunctions.decimalToText(model.variables.recentTransactionsListVar.getCurrent(callContext.iterationContext).amountAttr), model.variables.activeWalletVar.currencyAttr, "en-US", "", callContext).formattedNumberOut) + " ") + model.variables.activeWalletVar.currencyAttr)) : (((SharedUtilitiesController.default.formatMoney$Action(OS.BuiltinFunctions.decimalToText(model.variables.recentTransactionsListVar.getCurrent(callContext.iterationContext).amountAttr), model.variables.activeWalletVar.currencyAttr, "en-US", "", callContext).formattedNumberOut + " ") + model.variables.activeWalletVar.currencyAttr)));
}, function () {
return model.variables.recentTransactionsListVar.getCurrent(callContext.iterationContext).amountAttr;
}, function () {
return model.variables.activeWalletVar.currencyAttr;
}),
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transactionsListInDataFetchStatus)
})))];
}),
rightActions: PlaceholderContent.Empty
}
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "padding-x-base background-neutral-1",
visible: ((model.variables.recentTransactionsListVar.getCurrentRowNumber(callContext.iterationContext)) !== ((model.variables.recentTransactionsListVar.length - 1))),
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_Utilities_Separator_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Space: tradershubModel.staticEntities.space.none,
Color: tradershubModel.staticEntities.color.neutral3
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
uuid: "13",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})))];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables._transactionsListInDataFetchStatus), asPrimitiveValue(model.variables.transactionsListIn.getCurrent(callContext.iterationContext).amountAttr), asPrimitiveValue(model.variables.transactionsListIn.getCurrent(callContext.iterationContext).transaction_idAttr), asPrimitiveValue(model.variables.activeWalletVar.currencyAttr), asPrimitiveValue(model.variables.activeWalletVar.nameAttr), asPrimitiveValue(model.variables.activeWalletVar.loginidAttr)]
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: (model.variables.transactionsListIn.length > 6),
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transactionsListInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "padding-x-base background-neutral-1",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_Utilities_Separator_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Color: tradershubModel.staticEntities.color.neutral3,
Space: tradershubModel.staticEntities.space.none
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
uuid: "16",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Button, {
enabled: true,
isDefault: false,
onClick: function () {
try {OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "wallets/transactions", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), null, true);
} catch (ex) {
if(((ex.name) !== ("RedirectOccurredException"))) {
throw ex;
}

}
;
},
style: "wallet-transaction-btn cursor-pointer",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex justify-content-center align-items-center",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #101213; font-size: 12px;"
},
text: ["See more"],
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Image, {
extendedProperties: {
style: "font-size: 10px; height: 10px;"
},
gridProperties: {
width: "7px",
marginLeft: "4.5px"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_sm.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}))))));
        }
    }

    return View;
});
define("tradershub.WalletBlocks.WalletsTransaction.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "SharedUtilities.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.WalletBlocks.WalletsTransaction.mvc$translationsResources", "tradershub.WalletBlocks.WalletsTransaction.mvc$controller.OnReady.ModifiedTransactionsListJS", "tradershub.WalletBlocks.WalletsTransaction.mvc$controller.TooltipInitialized.ClipboardActionJS", "SharedUtilities.controller$FormatMoney", "tradershub.referencesHealth", "tradershub.referencesHealth$SharedUtilities", "tradershub.model$ST_3425849bb816196585dd6f07dbf2721dStructure", "tradershub.model$ST_98879cbf153f8de2b881b6fbde3b59bdStructure", "tradershub.model$RL_88c19a254c0070e215d8cb4352d11d8e"], function (OSRuntimeCore, tradershubModel, tradershubController, SharedUtilitiesController, tradershubLanguageResources, tradershubClientVariables, tradershub_WalletBlocks_WalletsTransaction_mvc_TranslationsResources, tradershub_WalletBlocks_WalletsTransaction_mvc_controller_OnReady_ModifiedTransactionsListJS, tradershub_WalletBlocks_WalletsTransaction_mvc_controller_TooltipInitialized_ClipboardActionJS) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, tradershub_WalletBlocks_WalletsTransaction_mvc_TranslationsResources);
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
get _listItem1OnClick$Action() {if(!(this.hasOwnProperty("__listItem1OnClick$Action"))) {
this.__listItem1OnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("ListItem1OnClick", function (span) {
if(span) {
span.setAttribute("code.function", "ListItem1OnClick");
span.setAttribute("outsystems.function.key", "30063580-7acc-4337-8def-74612803a67c");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("ListItem1OnClick");
callContext = controller.callContext(callContext);
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

get _onReady$Action() {if(!(this.hasOwnProperty("__onReady$Action"))) {
this.__onReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnReady", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "629a299b-a189-445c-acc7-5656612a852a");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var modifiedTransactionsListJSResult = new OS.DataTypes.VariableHolder();
var serializeTransactionListVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONDeserializeFormattedTransactionItemListVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_88c19a254c0070e215d8cb4352d11d8e))());
var jSONDeserializeWalletsAccountVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_3425849bb816196585dd6f07dbf2721dStructure))());
// JSON Serialize: SerializeTransactionList
serializeTransactionListVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.transactionsListIn, false, false);
// JSON Deserialize: JSONDeserializeWalletsAccount
jSONDeserializeWalletsAccountVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(tradershubClientVariables.getActiveWallet(), tradershubModel.ST_3425849bb816196585dd6f07dbf2721dStructure, false);
// ActiveWallet = JSONDeserializeWalletsAccount.Data
model.variables.activeWalletVar = jSONDeserializeWalletsAccountVar.value.dataOut;
modifiedTransactionsListJSResult.value = OS.Logger.startActiveSpan("ModifiedTransactionsList", function (span) {
if(span) {
span.setAttribute("code.function", "ModifiedTransactionsList");
span.setAttribute("outsystems.function.key", "e2438b4a-16cb-4c52-8ed8-1e550f5c9fe6");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_WalletBlocks_WalletsTransaction_mvc_controller_OnReady_ModifiedTransactionsListJS, "ModifiedTransactionsList", "OnReady", {
TransactionsList: OS.DataConversion.JSNodeParamConverter.to(serializeTransactionListVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
RecentTransactionsList: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.WalletBlocks.WalletsTransaction.OnReady$modifiedTransactionsListJSResult"))();
jsNodeResult.recentTransactionsListOut = OS.DataConversion.JSNodeParamConverter.from($parameters.RecentTransactionsList, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeFormattedTransactionItemList
jSONDeserializeFormattedTransactionItemListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(modifiedTransactionsListJSResult.value.recentTransactionsListOut, tradershubModel.RL_88c19a254c0070e215d8cb4352d11d8e, false);
// RecentTransactionsList = JSONDeserializeFormattedTransactionItemList.Data
model.variables.recentTransactionsListVar = jSONDeserializeFormattedTransactionItemListVar.value.dataOut;
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

get _tooltipInitialized$Action() {if(!(this.hasOwnProperty("__tooltipInitialized$Action"))) {
this.__tooltipInitialized$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("TooltipInitialized", function (span) {
if(span) {
span.setAttribute("code.function", "TooltipInitialized");
span.setAttribute("outsystems.function.key", "ae311411-cb89-408e-b3be-d1537c7f4b4f");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("TooltipInitialized");
callContext = controller.callContext(callContext);
OS.Logger.startActiveSpan("ClipboardAction", function (span) {
if(span) {
span.setAttribute("code.function", "ClipboardAction");
span.setAttribute("outsystems.function.key", "67e6fc2e-7f48-48a9-8ecd-e438a59b62d8");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_WalletBlocks_WalletsTransaction_mvc_controller_TooltipInitialized_ClipboardActionJS, "ClipboardAction", "TooltipInitialized", {
TextToCopy: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.longIntegerToText(model.variables.transactionsListIn.getCurrent(callContext.iterationContext).transaction_idAttr), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__tooltipInitialized$Action;
}set _tooltipInitialized$Action(value) {this.__tooltipInitialized$Action = value;
}


listItem1OnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("ListItem1OnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "ListItem1OnClick");
span.setAttribute("outsystems.function.key", "30063580-7acc-4337-8def-74612803a67c");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._listItem1OnClick$Action, callContext);
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
span.setAttribute("outsystems.function.key", "629a299b-a189-445c-acc7-5656612a852a");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
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

tooltipInitialized$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("TooltipInitialized__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "TooltipInitialized");
span.setAttribute("outsystems.function.key", "ae311411-cb89-408e-b3be-d1537c7f4b4f");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._tooltipInitialized$Action, callContext);
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
this._onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onReady$Action(callContext);

};
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
return tradershubController.default.defaultTimeout;
}

}

var Controller = ControllerInner;
// Server Actions - Variables

// Client Actions - Variables
Controller.registerVariableGroupType("tradershub.WalletBlocks.WalletsTransaction.OnReady$modifiedTransactionsListJSResult", [{
name: "RecentTransactionsList",
attrName: "recentTransactionsListOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

}
return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.WalletBlocks.WalletsTransaction.mvc$controller.OnReady.ModifiedTransactionsListJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const transactionsList = JSON.parse($parameters.TransactionsList);


$parameters.RecentTransactionsList = JSON.stringify(transactionsList.slice(0, 5))
};
});

define("tradershub.WalletBlocks.WalletsTransaction.mvc$controller.TooltipInitialized.ClipboardActionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
navigator.clipboard.writeText($parameters.TextToCopy)
    .catch(err => {
        console.error('Failed to copy text: ', err);
    });

};
});


define("tradershub.WalletBlocks.WalletsTransaction.mvc$translationsResources", ["exports"], function (exports) {
return {};
});

