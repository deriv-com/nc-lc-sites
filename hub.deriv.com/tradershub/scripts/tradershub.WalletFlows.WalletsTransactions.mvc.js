define("tradershub.WalletFlows.WalletsTransactions.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.model$ST_98879cbf153f8de2b881b6fbde3b59bdStructure", "tradershub.model$RL_88c19a254c0070e215d8cb4352d11d8e", "tradershub.model$ST_fdf7cabb83e72ffff66e8d7681355660Structure", "tradershub.model$ST_3425849bb816196585dd6f07dbf2721dStructure", "tradershub.model$RL_caf4f8b8680e835a8e4e4bea133e8365", "tradershub.controller$GetWalletsList", "tradershub.model$ST_290a67dab0570e5bf53bc562ec0f2742Structure", "tradershub.controller$Statement"], function (OSRuntimeCore, tradershubModel, tradershubController) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Transactions", "transactionsVar", "Transactions", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_88c19a254c0070e215d8cb4352d11d8e());
}, false, tradershubModel.RL_88c19a254c0070e215d8cb4352d11d8e), 
this.attr("DatesList", "datesListVar", "DatesList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, false, OS.DataTypes.TextList), 
this.attr("IsExecuting", "isExecutingVar", "IsExecuting", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("ActionTypeValue", "actionTypeValueVar", "ActionTypeValue", true, false, OS.DataTypes.DataTypes.Text, function () {
return "all";
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
return {
ButtonGroup: OS.Model.ValidationWidgetRecord
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

define("tradershub.WalletFlows.WalletsTransactions.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.WalletFlows.WalletsTransactions.mvc$model", "tradershub.WalletFlows.WalletsTransactions.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.MainLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.WalletBlocks.WalletsOverlayPage.mvc$view", "tradershub.Common.LoaderBlock.mvc$view", "tradershub.WalletBlocks.WalletsTransationsListByDate.mvc$view", "tradershub.model$ST_98879cbf153f8de2b881b6fbde3b59bdStructure", "tradershub.model$RL_88c19a254c0070e215d8cb4352d11d8e", "tradershub.model$ST_fdf7cabb83e72ffff66e8d7681355660Structure", "tradershub.model$ST_3425849bb816196585dd6f07dbf2721dStructure", "tradershub.model$RL_caf4f8b8680e835a8e4e4bea133e8365", "tradershub.controller$GetWalletsList", "tradershub.model$ST_290a67dab0570e5bf53bc562ec0f2742Structure", "tradershub.controller$Statement"], function (OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_WalletFlows_WalletsTransactions_mvc_model, tradershub_WalletFlows_WalletsTransactions_mvc_controller, tradershubClientVariables, tradershub_Layouts_MainLayout_mvc_view, OSWidgets, tradershub_WalletBlocks_WalletsOverlayPage_mvc_view, tradershub_Common_LoaderBlock_mvc_view, tradershub_WalletBlocks_WalletsTransationsListByDate_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() { return "WalletFlows.WalletsTransactions"; }

        static getAttributes() { return {
codeFunction: "WalletsTransactions",
functionKey: "035747a7-df9a-41dc-b635-462b6bb04fdf",
functionOwnerName: "tradershub",
functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.WalletFlows.WalletsTransactions.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_MainLayout_mvc_view, tradershub_WalletBlocks_WalletsOverlayPage_mvc_view, tradershub_Common_LoaderBlock_mvc_view, tradershub_WalletBlocks_WalletsTransationsListByDate_mvc_view];
        }

        get modelFactory() {
            return tradershub_WalletFlows_WalletsTransactions_mvc_model;
        }

        get controllerFactory() {
            return tradershub_WalletFlows_WalletsTransactions_mvc_controller;
        }

        get title() {
            

            return OSView.BaseView.BaseWebScreen.getTranslation("p0dXA5rf3EG2NUYra7BP3w#Title", "WalletsTransactions");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(tradershub_Layouts_MainLayout_mvc_view, {
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
return [React.createElement(tradershub_WalletBlocks_WalletsOverlayPage_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
PageTitle: "Recent Transactions"
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
walletOverlayPageContent: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column",
visible: true,
_idProps: {
service: idService,
name: "TransactionsMainContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 16px; font-weight: bold;"
},
text: [$text(getTranslation("y0td2RELukOpHNdWu7Z0Pw#Value", "Transactions"))],
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex gap-s full-width margin-top-base",
visible: true,
_idProps: {
service: idService,
name: "TransactionFilterContainer2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.ButtonGroup, {
_validationProps: {
validationService: validationService
},
enabled: true,
mandatory: false,
onChange: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.fetchTransactions$Action(model.variables.actionTypeValueVar, "", controller.callContext(eventHandlerContext));
});
;
},
style: "\"button-group\"",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.actionTypeValueVar, function (value) {
model.variables.actionTypeValueVar = value;
}),
_idProps: {
service: idService,
name: "ButtonGroup"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.ButtonGroupItem, {
enabled: !(model.variables.isExecutingVar),
extendedProperties: {
style: "margin-left: 0px;"
},
style: "btn wallet-transaction-btn btn-small",
value: "all",
visible: true,
_idProps: {
service: idService,
name: "All"
},
_widgetRecordProvider: widgetsRecordProvider
}, "All"), React.createElement(OSWidgets.ButtonGroupItem, {
enabled: !(model.variables.isExecutingVar),
extendedProperties: {
style: "margin-left: 8px;"
},
style: "btn wallet-transaction-btn btn-small",
value: "deposit",
visible: true,
_idProps: {
service: idService,
name: "Deposit"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Deposit"), React.createElement(OSWidgets.ButtonGroupItem, {
enabled: !(model.variables.isExecutingVar),
extendedProperties: {
style: "margin-left: 8px;"
},
style: "btn wallet-transaction-btn btn-small",
value: "withdraw",
visible: true,
_idProps: {
service: idService,
name: "Withdraw"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Withdraw"), React.createElement(OSWidgets.ButtonGroupItem, {
enabled: !(model.variables.isExecutingVar),
extendedProperties: {
style: "margin-left: 8px;"
},
style: "btn wallet-transaction-btn btn-small",
value: "transfer",
visible: true,
_idProps: {
service: idService,
name: "Transfer"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Transfer"))), $if(model.variables.isExecutingVar, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wallet-loading-container",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(tradershub_Common_LoaderBlock_mvc_view, {
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
uuid: "11",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "TransactionListContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if((model.variables.transactionsVar.length < 1), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wallet-loading-container display-flex align-items-center justify-content-center",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column align-items-center justify-content-center",
visible: true,
_idProps: {
service: idService,
name: "EmptyTransactionContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
gridProperties: {
width: "36px"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.warningneutral.svg"),
style: "margin-bottom-base",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 18px;"
},
style: "font-bold margin-bottom-s",
text: [$text(getTranslation("R5vETfYBYUWiCHLBsjKLqA#Value", "No transactions found"))],
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 16px;"
},
text: [$text(getTranslation("M4rt3Iir10eX40aqD1n_lA#Value", "Your transactions will appear here."))],
_idProps: {
service: idService,
name: "EmptyTransactionContentContainer"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}, function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
style: "border-radius: 8px;"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.datesListVar,
style: "display-flex flex-direction-column gap-base",
tag: "div",
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.ListItem, {
style: "\"list-item\"",
triggerActionOnFullSwipeLeft: false,
triggerActionOnFullSwipeRight: false,
_idProps: {
service: idService,
name: "ListItem"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftActions: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column gap-s",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 14px;"
},
value: model.variables.datesListVar.getCurrent(callContext.iterationContext),
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column",
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(tradershub_WalletBlocks_WalletsTransationsListByDate_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
TransactionsList: model.variables.transactionsVar,
TransationsDate: model.variables.datesListVar.getCurrent(callContext.iterationContext)
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
uuid: "24",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})))];
}),
rightActions: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.transactionsVar), asPrimitiveValue(model.variables.datesListVar.getCurrent(callContext.iterationContext))]
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.transactionsVar)]
})];
}))];
}))];
}),
mobileFooterContent: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.datesListVar), asPrimitiveValue(model.variables.transactionsVar), asPrimitiveValue(model.variables.isExecutingVar), asPrimitiveValue(model.variables.actionTypeValueVar)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.datesListVar), asPrimitiveValue(model.variables.transactionsVar), asPrimitiveValue(model.variables.isExecutingVar), asPrimitiveValue(model.variables.actionTypeValueVar)]
}));
        }
    }

    return View;
});
define("tradershub.WalletFlows.WalletsTransactions.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.WalletFlows.WalletsTransactions.mvc$translationsResources", "tradershub.WalletFlows.controller", "tradershub.WalletFlows.WalletsTransactions.mvc$controller.FetchTransactions.MapTransactionsJS", "tradershub.model$ST_98879cbf153f8de2b881b6fbde3b59bdStructure", "tradershub.model$RL_88c19a254c0070e215d8cb4352d11d8e", "tradershub.model$ST_fdf7cabb83e72ffff66e8d7681355660Structure", "tradershub.model$ST_3425849bb816196585dd6f07dbf2721dStructure", "tradershub.model$RL_caf4f8b8680e835a8e4e4bea133e8365", "tradershub.controller$GetWalletsList", "tradershub.model$ST_290a67dab0570e5bf53bc562ec0f2742Structure", "tradershub.controller$Statement"], function (OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_WalletFlows_WalletsTransactions_mvc_TranslationsResources, tradershub_WalletFlowsController, tradershub_WalletFlows_WalletsTransactions_mvc_controller_FetchTransactions_MapTransactionsJS) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, tradershub_WalletFlows_WalletsTransactions_mvc_TranslationsResources);
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
get _fetchTransactions$Action() {if(!(this.hasOwnProperty("__fetchTransactions$Action"))) {
this.__fetchTransactions$Action = function (actionTypeIn, limitIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("FetchTransactions", function (span) {
if(span) {
span.setAttribute("code.function", "FetchTransactions");
span.setAttribute("outsystems.function.key", "74f1f199-4a46-47af-bdd7-4903701e6e4c");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("FetchTransactions");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransactions.FetchTransactions$vars"))());
vars.value.actionTypeInLocal = actionTypeIn;
vars.value.limitInLocal = limitIn;
var getWalletsListVar = new OS.DataTypes.VariableHolder();
var statementVar = new OS.DataTypes.VariableHolder();
var mapTransactionsJSResult = new OS.DataTypes.VariableHolder();
var jSONSerializeTransactionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONSerializeWalletsListVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONDeserializeTextListVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OS.DataTypes.TextList))());
var jSONDeserializeFormattedTransactionItemListVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_88c19a254c0070e215d8cb4352d11d8e))());
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((!(model.variables.isExecutingVar))) {
// IsExecuting = True
model.variables.isExecutingVar = true;
// Execute Action: Statement
model.flush();
return tradershubController.default.statement$Action((((vars.value.actionTypeInLocal === "all")) ? (OS.BuiltinFunctions.nullTextIdentifier()) : (vars.value.actionTypeInLocal)), vars.value.limitInLocal, callContext).then(function (value) {
statementVar.value = value;
}).then(function () {
// Execute Action: GetWalletsList
model.flush();
return tradershubController.default.getWalletsList$Action(callContext).then(function (value) {
getWalletsListVar.value = value;
});
}).then(function () {
// JSON Serialize: JSONSerializeWalletsList
jSONSerializeWalletsListVar.value.jSONOut = OS.JSONUtils.serializeToJSON(getWalletsListVar.value.walletsListOut, false, false);
// JSON Serialize: JSONSerializeTransactions
jSONSerializeTransactionsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(statementVar.value.responseOut.statementAttr.transactionsAttr, false, false);
mapTransactionsJSResult.value = OS.Logger.startActiveSpan("MapTransactions", function (span) {
if(span) {
span.setAttribute("code.function", "MapTransactions");
span.setAttribute("outsystems.function.key", "6e13d519-bafa-4255-b10d-b808a1cd36a6");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_WalletFlows_WalletsTransactions_mvc_controller_FetchTransactions_MapTransactionsJS, "MapTransactions", "FetchTransactions", {
Transactions: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeTransactionsVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
WalletsList: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeWalletsListVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
DatesList: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
FormattedTransactions: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransactions.FetchTransactions$mapTransactionsJSResult"))();
jsNodeResult.datesListOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DatesList, OS.DataTypes.DataTypes.Text);
jsNodeResult.formattedTransactionsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FormattedTransactions, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeFormattedTransactionItemList
jSONDeserializeFormattedTransactionItemListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(mapTransactionsJSResult.value.formattedTransactionsOut, tradershubModel.RL_88c19a254c0070e215d8cb4352d11d8e, false);
// JSON Deserialize: JSONDeserializeTextList
jSONDeserializeTextListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(mapTransactionsJSResult.value.datesListOut, OS.DataTypes.TextList, false);
// DatesList = JSONDeserializeTextList.Data
model.variables.datesListVar = jSONDeserializeTextListVar.value.dataOut;
// Transactions = JSONDeserializeFormattedTransactionItemList.Data
model.variables.transactionsVar = jSONDeserializeFormattedTransactionItemListVar.value.dataOut;
// IsExecuting = False
model.variables.isExecutingVar = false;
});
}

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

return this.__fetchTransactions$Action;
}set _fetchTransactions$Action(value) {this.__fetchTransactions$Action = value;
}


fetchTransactions$Action(actionTypeIn, limitIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("FetchTransactions__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "FetchTransactions");
span.setAttribute("outsystems.function.key", "74f1f199-4a46-47af-bdd7-4903701e6e4c");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._fetchTransactions$Action, callContext, actionTypeIn, limitIn);
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

return controller.fetchTransactions$Action("", "", callContext);

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
return tradershub_WalletFlowsController.default.handleError(ex, this.callContext());
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
Controller.registerVariableGroupType("tradershub.WalletFlows.WalletsTransactions.FetchTransactions$vars", [{
name: "ActionType",
attrName: "actionTypeInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Limit",
attrName: "limitInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.WalletFlows.WalletsTransactions.FetchTransactions$mapTransactionsJSResult", [{
name: "DatesList",
attrName: "datesListOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "FormattedTransactions",
attrName: "formattedTransactionsOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

}
return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.WalletFlows.WalletsTransactions.mvc$controller.FetchTransactions.MapTransactionsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const walletList = JSON.parse($parameters.WalletsList);
window.__wallets = walletList
const transactions = JSON.parse($parameters.Transactions);

function formatDate(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}

const platformMapper = {
    dtrade: "Options trading",
    dxtrade: "Deriv X",
    mt5: "Deriv MT5",
    ctrader: "Deriv cTrader"
};

function groupTransactionsByDate(transactions) {
    const getPlatform = (loginId = '') => {
        if (!loginId) return;

        if (loginId.startsWith("CRW")) {
            const wallet = walletList.find(w => w.loginid === loginId);
            return wallet ? wallet.name : "";
        }

        if(loginId.startsWith('CR')) {
            return platformMapper.dtrade
        }

        if(loginId.startsWith('CTR')) {
            return platformMapper.ctrader
        }

        if(loginId.startsWith('CXR')) {
            return platformMapper.dxtrade
        }

        if(loginId.startsWith('MTR')) {
            return platformMapper.mt5
        }
        return "";
    };

    return transactions.reduce((acc, transaction) => {
        // Filter out 'buy' and 'sell' action types
        if (transaction.action_type === 'buy' || transaction.action_type === 'sell') {
            return acc;
        }

        // Format date
        const date = formatDate(transaction.transaction_time);
        if (!acc[date]) {
            acc[date] = [];
        }
        // Create a new transaction object with the formatted date
        const t = { ...transaction, date };

        // Assign platform for 'from' field if it exists
        if (transaction.from) {
            t.from.platform = getPlatform(transaction.from.loginid);
        }

        // Assign platform for 'to' field if it exists
        if (transaction.to) {
            t.to.platform = getPlatform(transaction.to.loginid);
        }

        // Push the modified transaction into the appropriate date array
        acc[date].push(t);
        return acc;
    }, {});
}

const groupedTransactions = groupTransactionsByDate(transactions)

const dates = Object.keys(groupedTransactions)
const formattedTransactions = Object.values(groupedTransactions).flat()

$parameters.DatesList = JSON.stringify(dates)
$parameters.FormattedTransactions = JSON.stringify(formattedTransactions)
};
});


define("tradershub.WalletFlows.WalletsTransactions.mvc$translationsResources.fr-FR", [], function () {
return {
"M4rt3Iir10eX40aqD1n_lA#Value": "Vos transactions apparaîtront ici.",
"R5vETfYBYUWiCHLBsjKLqA#Value": "Aucune transaction trouvée",
"y0td2RELukOpHNdWu7Z0Pw#Value": "Transactions"
};
});

define("tradershub.WalletFlows.WalletsTransactions.mvc$translationsResources", ["exports", "tradershub.WalletFlows.WalletsTransactions.mvc$translationsResources.fr-FR"], function (exports, tradershub_WalletFlows_WalletsTransactions_mvc_translationsResources_frFR) {
return {
"fr-FR": {
"translations": tradershub_WalletFlows_WalletsTransactions_mvc_translationsResources_frFR,
"isRTL": false
}
};
});

