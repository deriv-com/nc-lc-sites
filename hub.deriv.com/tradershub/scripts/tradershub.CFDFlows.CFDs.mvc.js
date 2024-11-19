define("tradershub.CFDFlows.CFDs.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "BrowserConsoleLogging.controller", "tradershub.Layouts.MainLayout.mvc$model", "tradershub.MainFlowBlocks.LoggedOutBanner.mvc$model", "OutSystemsUI.Content.Tooltip.mvc$model", "tradershub.MainFlowBlocks.RealDemoSwitcher.mvc$model", "tradershub.CFDBlocks.MyAccountCard.mvc$model", "tradershub.CFDBlocks.AvailableAccountCard.mvc$model", "tradershub.MainFlowBlocks.EmptyPlatformModal.mvc$model", "tradershub.CFDBlocks.CreateAccountPasswordModal.mvc$model", "tradershub.CFDBlocks.ResendEmailModal.mvc$model", "tradershub.CFDBlocks.ImportantNotes.mvc$model", "tradershub.CFDBlocks.MaintenanceMessage.mvc$model", "tradershub.CFDBlocks.DerivXTradeModal.mvc$model", "tradershub.CFDBlocks.MT5TradeModal.mvc$model", "tradershub.model$ST_872baf372e9fd7dec6105127915f0c6fStructure", "tradershub.model$RL_c5ae9e9ecf45b4babee4b8a8438d3faa", "tradershub.model$ST_148480cbe068b64f08f2cd9823941166Structure", "tradershub.model$RL_e90069e21a2026ded56bf74f4fa37235", "tradershub.model$ST_0c791f94256414cc9c4ca4b03a645eeeStructure", "tradershub.model$ST_d4d91c7891e5750aa551eef14bb529f7Structure", "tradershub.model$ST_0e7dcb74dbc6faaa0d9d3813e4ab03ceStructure", "tradershub.model$ST_a7441674ddaddf168d741a98c667b0e4Structure", "tradershub.controller$FilterAvailableAccounts", "tradershub.model$EN_951592e59194625ab2f46e72a884ba99EntityRecord", "tradershub.model$RL_f704dd0f97cbebb5d4f4586f373fbb9b", "tradershub.controller$CreatedDxTradeAccounts", "tradershub.controller$AvailableDxtradeAccounts", "tradershub.model$RC_0bdb8e5919db069891acca73ea4c745e", "tradershub.model$RL_12e1722f94ac9f508c0ce6facf0d383d", "tradershub.controller$FeatureFlagValueByName", "tradershub.model$ST_bd2236af041a218c8fde06ca0065cfd9Structure", "tradershub.controller$SendGetSetting", "RESTAPIWebsocketOfficial.model$ST_b5532fbd5672db40752d556a46e96eaeStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$VerifyEmail", "tradershub.controller$DerivApiSendMessage", "BrowserConsoleLogging.controller$ConsoleLog", "tradershub.referencesHealth$BrowserConsoleLogging", "tradershub.controller$CreatedCTraderAccounts", "tradershub.controller$AvailableCTraderAccounts", "tradershub.controller$CombineAvailableAccounts", "tradershub.controller$AvailableMT5Accounts", "tradershub.controller$GetWebsiteStatus", "tradershub.controller$CombineCreatedAccounts", "tradershub.controller$CreatedMT5Accounts", "RESTAPIWebsocketOfficial.model$ST_746d074ddcc08e0df3b269ffb1933d5aStructure", "tradershub.controller$GetAccountStatus2"], function (OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, BrowserConsoleLoggingController, tradershub_Layouts_MainLayout_mvcModel, tradershub_MainFlowBlocks_LoggedOutBanner_mvcModel, OutSystemsUI_Content_Tooltip_mvcModel, tradershub_MainFlowBlocks_RealDemoSwitcher_mvcModel, tradershub_CFDBlocks_MyAccountCard_mvcModel, tradershub_CFDBlocks_AvailableAccountCard_mvcModel, tradershub_MainFlowBlocks_EmptyPlatformModal_mvcModel, tradershub_CFDBlocks_CreateAccountPasswordModal_mvcModel, tradershub_CFDBlocks_ResendEmailModal_mvcModel, tradershub_CFDBlocks_ImportantNotes_mvcModel, tradershub_CFDBlocks_MaintenanceMessage_mvcModel, tradershub_CFDBlocks_DerivXTradeModal_mvcModel, tradershub_CFDBlocks_MT5TradeModal_mvcModel) {
var OS = OSRuntimeCore;
{class GetCFDAccountsAggrRecInner extends 
OS.Model.AggregateRecord {
static attributesToDeclare() {
return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new GetCFDAccountsAggrRec(new GetCFDAccountsAggrRec.RecordClass({
RecordListType: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

GetCFDAccountsAggrRecInner.RecordListType = tradershubModel.RL_12e1722f94ac9f508c0ce6facf0d383d;
var GetCFDAccountsAggrRec = GetCFDAccountsAggrRecInner;
GetCFDAccountsAggrRec.init();
}


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("AvailableMT5Accounts", "availableMT5AccountsVar", "AvailableMT5Accounts", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa());
}, false, tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa), 
this.attr("AvailableCTraderAccounts", "availableCTraderAccountsVar", "AvailableCTraderAccounts", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa());
}, false, tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa), 
this.attr("AvailableDXTraderAccounts", "availableDXTraderAccountsVar", "AvailableDXTraderAccounts", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa());
}, false, tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa), 
this.attr("AvailableCFDAccounts", "availableCFDAccountsVar", "AvailableCFDAccounts", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa());
}, false, tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa), 
this.attr("CreatedMT5Accounts", "createdMT5AccountsVar", "CreatedMT5Accounts", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_e90069e21a2026ded56bf74f4fa37235());
}, false, tradershubModel.RL_e90069e21a2026ded56bf74f4fa37235), 
this.attr("CreatedCTraderAccounts", "createdCTraderAccountsVar", "CreatedCTraderAccounts", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_e90069e21a2026ded56bf74f4fa37235());
}, false, tradershubModel.RL_e90069e21a2026ded56bf74f4fa37235), 
this.attr("CreatedDXTraderAccounts", "createdDXTraderAccountsVar", "CreatedDXTraderAccounts", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_e90069e21a2026ded56bf74f4fa37235());
}, false, tradershubModel.RL_e90069e21a2026ded56bf74f4fa37235), 
this.attr("CreatedCFDAccounts", "createdCFDAccountsVar", "CreatedCFDAccounts", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_e90069e21a2026ded56bf74f4fa37235());
}, false, tradershubModel.RL_e90069e21a2026ded56bf74f4fa37235), 
this.attr("SelectedAccount", "selectedAccountVar", "SelectedAccount", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_148480cbe068b64f08f2cd9823941166Structure());
}, false, tradershubModel.ST_148480cbe068b64f08f2cd9823941166Structure), 
this.attr("TotalCTraderBalance", "totalCTraderBalanceVar", "TotalCTraderBalance", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("ShowRestrictedCountryWarningModal", "showRestrictedCountryWarningModalVar", "ShowRestrictedCountryWarningModal", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("ShowCTraderTradeModal", "showCTraderTradeModalVar", "ShowCTraderTradeModal", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("ShowDxtradeTradeModal", "showDxtradeTradeModalVar", "ShowDxtradeTradeModal", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("ShowMT5TradeModal", "showMT5TradeModalVar", "ShowMT5TradeModal", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("ShowPasswordModal", "showPasswordModalVar", "ShowPasswordModal", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsEmpty", "isEmptyVar", "IsEmpty", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsMt5PasswordSet", "isMt5PasswordSetVar", "IsMt5PasswordSet", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsDxtradePasswordSet", "isDxtradePasswordSetVar", "IsDxtradePasswordSet", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("AccountType", "accountTypeVar", "AccountType", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("ShowForgotPasswordModal", "showForgotPasswordModalVar", "ShowForgotPasswordModal", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("CTraderAvailableAccountsCount", "cTraderAvailableAccountsCountVar", "CTraderAvailableAccountsCount", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("GetCFDAccounts", "getCFDAccountsAggr", "GetCFDAccounts", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetCFDAccountsAggrRec());
}, true, GetCFDAccountsAggrRec)
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
Model._hasValidationWidgetsValue = ((((((((((((tradershub_Layouts_MainLayout_mvcModel.hasValidationWidgets || tradershub_MainFlowBlocks_LoggedOutBanner_mvcModel.hasValidationWidgets) || OutSystemsUI_Content_Tooltip_mvcModel.hasValidationWidgets) || tradershub_MainFlowBlocks_RealDemoSwitcher_mvcModel.hasValidationWidgets) || tradershub_CFDBlocks_MyAccountCard_mvcModel.hasValidationWidgets) || tradershub_CFDBlocks_AvailableAccountCard_mvcModel.hasValidationWidgets) || tradershub_MainFlowBlocks_EmptyPlatformModal_mvcModel.hasValidationWidgets) || tradershub_CFDBlocks_CreateAccountPasswordModal_mvcModel.hasValidationWidgets) || tradershub_CFDBlocks_ResendEmailModal_mvcModel.hasValidationWidgets) || tradershub_CFDBlocks_ImportantNotes_mvcModel.hasValidationWidgets) || tradershub_CFDBlocks_MaintenanceMessage_mvcModel.hasValidationWidgets) || tradershub_CFDBlocks_DerivXTradeModal_mvcModel.hasValidationWidgets) || tradershub_CFDBlocks_MT5TradeModal_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("tradershub.CFDFlows.CFDs.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "BrowserConsoleLogging.controller", "react", "@outsystems/runtime-view-js", "tradershub.CFDFlows.CFDs.mvc$model", "tradershub.CFDFlows.CFDs.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.MainLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.MainFlowBlocks.LoggedOutBanner.mvc$view", "OutSystemsUI.Content.Tooltip.mvc$view", "tradershub.MainFlowBlocks.RealDemoSwitcher.mvc$view", "tradershub.CFDBlocks.MyAccountCard.mvc$view", "tradershub.CFDBlocks.AvailableAccountCard.mvc$view", "tradershub.MainFlowBlocks.EmptyPlatformModal.mvc$view", "tradershub.CFDBlocks.CreateAccountPasswordModal.mvc$view", "tradershub.CFDBlocks.ResendEmailModal.mvc$view", "tradershub.CFDBlocks.ImportantNotes.mvc$view", "tradershub.CFDBlocks.MaintenanceMessage.mvc$view", "tradershub.CFDBlocks.DerivXTradeModal.mvc$view", "tradershub.CFDBlocks.MT5TradeModal.mvc$view", "tradershub.model$ST_872baf372e9fd7dec6105127915f0c6fStructure", "tradershub.model$RL_c5ae9e9ecf45b4babee4b8a8438d3faa", "tradershub.model$ST_148480cbe068b64f08f2cd9823941166Structure", "tradershub.model$RL_e90069e21a2026ded56bf74f4fa37235", "tradershub.model$ST_0c791f94256414cc9c4ca4b03a645eeeStructure", "tradershub.model$ST_d4d91c7891e5750aa551eef14bb529f7Structure", "tradershub.model$ST_0e7dcb74dbc6faaa0d9d3813e4ab03ceStructure", "tradershub.model$ST_a7441674ddaddf168d741a98c667b0e4Structure", "tradershub.controller$FilterAvailableAccounts", "tradershub.model$EN_951592e59194625ab2f46e72a884ba99EntityRecord", "tradershub.model$RL_f704dd0f97cbebb5d4f4586f373fbb9b", "tradershub.controller$CreatedDxTradeAccounts", "tradershub.controller$AvailableDxtradeAccounts", "tradershub.model$RC_0bdb8e5919db069891acca73ea4c745e", "tradershub.model$RL_12e1722f94ac9f508c0ce6facf0d383d", "tradershub.controller$FeatureFlagValueByName", "tradershub.model$ST_bd2236af041a218c8fde06ca0065cfd9Structure", "tradershub.controller$SendGetSetting", "RESTAPIWebsocketOfficial.model$ST_b5532fbd5672db40752d556a46e96eaeStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$VerifyEmail", "tradershub.controller$DerivApiSendMessage", "BrowserConsoleLogging.controller$ConsoleLog", "tradershub.referencesHealth$BrowserConsoleLogging", "tradershub.controller$CreatedCTraderAccounts", "tradershub.controller$AvailableCTraderAccounts", "tradershub.controller$CombineAvailableAccounts", "tradershub.controller$AvailableMT5Accounts", "tradershub.controller$GetWebsiteStatus", "tradershub.controller$CombineCreatedAccounts", "tradershub.controller$CreatedMT5Accounts", "RESTAPIWebsocketOfficial.model$ST_746d074ddcc08e0df3b269ffb1933d5aStructure", "tradershub.controller$GetAccountStatus2"], function (OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, BrowserConsoleLoggingController, React, OSView, tradershub_CFDFlows_CFDs_mvc_model, tradershub_CFDFlows_CFDs_mvc_controller, tradershubClientVariables, tradershub_Layouts_MainLayout_mvc_view, OSWidgets, tradershub_MainFlowBlocks_LoggedOutBanner_mvc_view, OutSystemsUI_Content_Tooltip_mvc_view, tradershub_MainFlowBlocks_RealDemoSwitcher_mvc_view, tradershub_CFDBlocks_MyAccountCard_mvc_view, tradershub_CFDBlocks_AvailableAccountCard_mvc_view, tradershub_MainFlowBlocks_EmptyPlatformModal_mvc_view, tradershub_CFDBlocks_CreateAccountPasswordModal_mvc_view, tradershub_CFDBlocks_ResendEmailModal_mvc_view, tradershub_CFDBlocks_ImportantNotes_mvc_view, tradershub_CFDBlocks_MaintenanceMessage_mvc_view, tradershub_CFDBlocks_DerivXTradeModal_mvc_view, tradershub_CFDBlocks_MT5TradeModal_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() { return "CFDFlows.CFDs"; }

        static getAttributes() { return {
codeFunction: "CFDs",
functionKey: "fbf7d1b9-f76f-4b1f-bad1-5f8f38e21344",
functionOwnerName: "tradershub",
functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.CFDFlows.CFDs.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_MainLayout_mvc_view, tradershub_MainFlowBlocks_LoggedOutBanner_mvc_view, OutSystemsUI_Content_Tooltip_mvc_view, tradershub_MainFlowBlocks_RealDemoSwitcher_mvc_view, tradershub_CFDBlocks_MyAccountCard_mvc_view, tradershub_CFDBlocks_AvailableAccountCard_mvc_view, tradershub_MainFlowBlocks_EmptyPlatformModal_mvc_view, tradershub_CFDBlocks_CreateAccountPasswordModal_mvc_view, tradershub_CFDBlocks_ResendEmailModal_mvc_view, tradershub_CFDBlocks_ImportantNotes_mvc_view, tradershub_CFDBlocks_MaintenanceMessage_mvc_view, tradershub_CFDBlocks_DerivXTradeModal_mvc_view, tradershub_CFDBlocks_MT5TradeModal_mvc_view];
        }

        get modelFactory() {
            return tradershub_CFDFlows_CFDs_mvc_model;
        }

        get controllerFactory() {
            return tradershub_CFDFlows_CFDs_mvc_controller;
        }

        get title() {
            

            return OSView.BaseView.BaseWebScreen.getTranslation("udH3+2_3H0u60V+POOITRA#Title", "CFDs");
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
return [React.createElement(tradershub_MainFlowBlocks_LoggedOutBanner_mvc_view, {
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
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-bottom: 0px;"
},
style: "header-container",
visible: true,
_idProps: {
service: idService,
name: "Header"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex align-items-center",
visible: true,
_idProps: {
service: idService,
name: "Title"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "main-title",
text: [$text(getTranslation("wDlKcbQEL0SpHAWlCti6Kw#Value", "CFDs trading"))],
_idProps: {
service: idService,
name: "CFDsTrading"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OutSystemsUI_Content_Tooltip_mvc_view, {
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
uuid: "5",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 8px;"
},
gridProperties: {
marginLeft: "8px"
},
style: "display-flex align-items-center justify-content-center",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
tooltip: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "line-height: 21px;"
},
text: [$text(getTranslation("gcgQSS26UkK60r3pOIaf5g#Value", "Trade bigger positions with less capital on a wide range of global markets."))],
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: []
})), React.createElement(tradershub_MainFlowBlocks_RealDemoSwitcher_mvc_view, {
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
realClickEvent$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.setRealValue$Action(controller.callContext(eventHandlerContext));
});
;
},
demoClickEvent$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.setDemoValue$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "9",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
style: "margin-top: 24px;"
},
visible: model.getCachedValue(idService.getId("MyAccountsContainer.Visible"), function () {
return (((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier())) && (model.variables.createdCFDAccountsVar.length > 0));
}, function () {
return tradershubClientVariables.getAuthToken();
}, function () {
return model.variables.createdCFDAccountsVar.length;
}),
_idProps: {
service: idService,
name: "MyAccountsContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 16px; font-weight: bold;"
},
text: [$text(getTranslation("K34fG267aE23l2enpmqezA#Value", "My accounts"))],
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.List, {
animateItems: false,
extendedProperties: {
"disable-virtualization": "True"
},
mode: /*Default*/ 0,
source: model.variables.createdCFDAccountsVar,
style: "available-accounts__container",
tag: "div",
_idProps: {
service: idService,
name: "MyAccountsCardsList"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(tradershub_CFDBlocks_MyAccountCard_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Balance: model.getCachedValue(idService.getId("+cyJRwvwIEifFU_sHiJ5yg.Balance"), function () {
return (((((model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).identifierAttr === "ctrader_standard")) ? (model.variables.totalCTraderBalanceVar) : (model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).display_balanceAttr)) + " ") + model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).currencyAttr);
}, function () {
return model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).identifierAttr;
}, function () {
return model.variables.totalCTraderBalanceVar;
}, function () {
return model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).display_balanceAttr;
}, function () {
return model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).currencyAttr;
}),
Name: model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).labelAttr,
ProductIcon: model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).iconAttr
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClickEvent$Action: function () {
var eventHandlerContext = callContext.clone();
controller.createdAccountOnClick$Action(controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "13",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.totalCTraderBalanceVar)]
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
style: "margin-top: 24px;"
},
style: "display-flex align-items-center justify-content-space-between",
visible: model.getCachedValue(idService.getId("AvailableAccountsHeader.Visible"), function () {
return ((model.variables.isEmptyVar) ? (true) : ((model.variables.availableCFDAccountsVar.length > 0)));
}, function () {
return model.variables.isEmptyVar;
}, function () {
return model.variables.availableCFDAccountsVar.length;
}),
_idProps: {
service: idService,
name: "AvailableAccountsHeader"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 16px; font-weight: bold;"
},
text: [$text(getTranslation("6IiGdsEYP06nsIpsfm4H7Q#Value", "Available accounts"))],
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Link, {
enabled: true,
style: "display-flex align-items-center justify-content-center",
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("tradershub", "TradingSpecification", {}),
visible: ((tradershubClientVariables.getAuthToken()) !== ("")),
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #101213; font-size: 12px;"
},
text: [$text(getTranslation("uPBzeqBKgE69LZnOCO4bew#Value", "View specifications"))],
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "color: #101213;"
},
gridProperties: {
marginLeft: "4.5px"
},
icon: "angle-right",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}))), $if(model.variables.isLoadingVar, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "skeleton available-accounts-loader",
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [$if(model.variables.isEmptyVar, false, this, function () {
return [React.createElement(OSWidgets.List, {
animateItems: false,
extendedProperties: {
"disable-virtualization": "True"
},
mode: /*Default*/ 0,
source: model.variables.getCFDAccountsAggr.listOut,
style: "available-accounts__container",
tag: "div",
_idProps: {
service: idService,
name: "EmptyAvailableAccountsCardsList"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCFDAccountsAggr.dataFetchStatusAttr),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(tradershub_CFDBlocks_AvailableAccountCard_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
ProductIcon: model.variables.getCFDAccountsAggr.listOut.getCurrent(callContext.iterationContext).cFDAccountsAttr.iconAttr,
_productIconInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCFDAccountsAggr.dataFetchStatusAttr),
ProductName: model.variables.getCFDAccountsAggr.listOut.getCurrent(callContext.iterationContext).cFDAccountsAttr.labelAttr,
_productNameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCFDAccountsAggr.dataFetchStatusAttr),
ProductDescription: model.variables.getCFDAccountsAggr.listOut.getCurrent(callContext.iterationContext).cFDAccountsAttr.descriptionAttr,
_productDescriptionInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCFDAccountsAggr.dataFetchStatusAttr)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClickEvent$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.availableAccountOnClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "21",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, callContext, idService, "2")
},
_dependencies: [asPrimitiveValue(model.variables.getCFDAccountsAggr.dataFetchStatusAttr)]
})];
}, function () {
return [React.createElement(OSWidgets.List, {
animateItems: false,
extendedProperties: {
"disable-virtualization": "True"
},
mode: /*Default*/ 0,
source: model.variables.availableCFDAccountsVar,
style: "available-accounts__container",
tag: "div",
_idProps: {
service: idService,
name: "AvailableAccountsCardsList"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(tradershub_CFDBlocks_AvailableAccountCard_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
ProductName: model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).labelAttr,
ProductDescription: model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).descriptionAttr,
ProductIcon: model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).iconAttr
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClickEvent$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.availableAccountOnClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "23",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, callContext, idService, "3")
},
_dependencies: []
})];
})];
}), React.createElement(tradershub_MainFlowBlocks_EmptyPlatformModal_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
IsVisible: model.variables.showRestrictedCountryWarningModalVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onCloseClick$Action: function () {
var eventHandlerContext = callContext.clone();
controller.confirmedNotResidentOnClick$Action(controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "24",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(tradershub_CFDBlocks_CreateAccountPasswordModal_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
SelectedAccount: model.variables.selectedAccountVar,
isPasswordSet: model.getCachedValue(idService.getId("oVu8K6jS1US34nVXGRpTMw.isPasswordSet"), function () {
return (((model.variables.selectedAccountVar.platformAttr === "mt5")) ? (model.variables.isMt5PasswordSetVar) : (model.variables.isDxtradePasswordSetVar));
}, function () {
return model.variables.selectedAccountVar.platformAttr;
}, function () {
return model.variables.isMt5PasswordSetVar;
}, function () {
return model.variables.isDxtradePasswordSetVar;
}),
IsVisible: model.variables.showPasswordModalVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
refetchMT5Event$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.refetchMT5$Action(controller.callContext(eventHandlerContext));
});
;
},
forgotPasswordEvent$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.handleForgotPassword$Action(controller.callContext(eventHandlerContext));
});
;
},
refetchDxtradeEvent$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.refetchDxtrade$Action(controller.callContext(eventHandlerContext));
});
;
},
closeEvent$Action: function () {
var eventHandlerContext = callContext.clone();
controller.closePasswordModal$Action(controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "25",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(tradershub_CFDBlocks_ResendEmailModal_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
IsVisible: model.variables.showForgotPasswordModalVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
closeEvent$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.handleForgotPassword$Action(controller.callContext(eventHandlerContext));
});
;
},
resendEmailEvent$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.handleForgotPassword$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "26",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Popup, {
extendedProperties: {
style: "padding: 16px;"
},
showPopup: model.variables.showCTraderTradeModalVar,
style: "popup-dialog full-height-popup position-relative",
_idProps: {
service: idService,
name: "CTraderTradeModal"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "border-color: #E9ECEF; border-style: none none solid none; border-width: 0px 0px 1px 0px; padding: 14px 16px;"
},
style: "display-flex align-items-center justify-content-space-between",
visible: true,
_idProps: {
service: idService,
name: "CTraderModalHeader"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 18px; font-weight: bold;"
},
text: ["Account details"],
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Image, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.onCloseCTraderModal$Action(controller.callContext(eventHandlerContext));

;
}
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
name: "CloseIcon"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 16px;"
},
style: "vertical-scroll",
visible: true,
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 16px 0;"
},
style: "display-flex align-items-center justify-content-space-between",
visible: true,
_idProps: {
service: idService,
name: "ProductDetailsContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex align-items-center",
visible: true,
_idProps: {
service: idService,
name: "LeftSide"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "height: 32px;"
},
gridProperties: {
classes: "OSInline",
width: "32px"
},
visible: true,
_idProps: {
service: idService,
name: "Icon"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.derivctrader.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
marginLeft: "16px"
},
visible: true,
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 16px; font-weight: bold;"
},
style: "display-block",
value: "Deriv cTrader",
_idProps: {
service: idService,
name: "ProductName"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
value: ("Total balance: " + model.variables.totalCTraderBalanceVar),
_idProps: {
service: idService,
name: "Balance"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "RightSide"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
isDefault: false,
onClick: function () {
try {OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "wallets", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade), null, true);
} catch (ex) {
if(((ex.name) !== ("RedirectOccurredException"))) {
throw ex;
}

}
;
},
style: "btn-primary transfer-btn",
visible: true,
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.StandaloneSMArrowUpArrowDown.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
style: "",
text: [$text(getTranslation("tk2AVO3sjUu0VGDL_Ce+jA#Value", "Transfer"))],
_idProps: {
service: idService,
uuid: "42"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.createdCTraderAccountsVar,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ctrader-list-item",
visible: true,
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.createdCTraderAccountsVar.getCurrent(callContext.iterationContext).currencyAttr), asPrimitiveValue(model.variables.createdCTraderAccountsVar.getCurrent(callContext.iterationContext).display_balanceAttr), asPrimitiveValue(model.variables.createdCTraderAccountsVar.getCurrent(callContext.iterationContext).loginAttr)]
}, React.createElement(OSWidgets.Expression, {
value: model.variables.createdCTraderAccountsVar.getCurrent(callContext.iterationContext).loginAttr,
_idProps: {
service: idService,
name: "AccountId"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
value: ((model.variables.createdCTraderAccountsVar.getCurrent(callContext.iterationContext).display_balanceAttr + " ") + model.variables.createdCTraderAccountsVar.getCurrent(callContext.iterationContext).currencyAttr),
_idProps: {
service: idService,
name: "Balance2"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, callContext, idService, "4")
},
_dependencies: []
}), $if((model.variables.cTraderAvailableAccountsCountVar > 0), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.cTraderAccountCreation$Action(model.variables.createdCTraderAccountsVar.getCurrent(callContext.iterationContext).market_typeAttr, "svg", controller.callContext(eventHandlerContext));
});
;
}
},
style: "add-another-account",
visible: true,
_idProps: {
service: idService,
name: "AddAnotherAccount"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.StandaloneSMCirclePlus.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 12px; margin-left: 8px;"
},
text: ["Get another cTrader account"],
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, function () {
return [];
}), React.createElement(tradershub_CFDBlocks_ImportantNotes_mvc_view, {
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
uuid: "50",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(tradershub_CFDBlocks_MaintenanceMessage_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
InfoMessage: "Scheduled downtime: Monthly on the first Saturday, 07:00-10:00 GMT. Service may be affected."
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
uuid: "51",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ctrader-redirections-desktop",
visible: true,
_idProps: {
service: idService,
name: "DesktopView"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
isDefault: false,
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.ctraderWebTerminalOnClick$Action(controller.callContext(eventHandlerContext));

;
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
uuid: "53"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.GlobeSM.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "54"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 16px; margin-left: 8px;"
},
text: ["cTrader web terminal"],
_idProps: {
service: idService,
uuid: "55"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: "background-color: #F1F3F5; border-color: #F1F3F5; margin-top: 16px;"
},
gridProperties: {
classes: "OSFillParent",
marginLeft: "0"
},
isDefault: false,
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.ctraderAppOnClick$Action(controller.callContext(eventHandlerContext));

;
},
style: "btn",
visible: true,
_idProps: {
service: idService,
uuid: "56"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.LaptopSM.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "57"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #101213; font-size: 16px; margin-left: 8px; margin-top: 1px;"
},
text: ["cTrader app"],
_idProps: {
service: idService,
uuid: "58"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 16px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "59"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #101213; font-size: 12px;"
},
text: ["Available for "],
_idProps: {
service: idService,
uuid: "60"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #101213; font-size: 12px; text-decoration: underline;"
},
text: ["macOS"],
_idProps: {
service: idService,
uuid: "61"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #101213; font-size: 12px;"
},
text: ["."],
_idProps: {
service: idService,
uuid: "62"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "border-color: #F1F3F5; border-radius: 4px; border-style: solid; border-width: 1px; margin-top: 16px; padding: 8px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "63"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #333333; font-size: 12px; margin-top: 8px;"
},
text: ["Scan to download the mobile app."],
_idProps: {
service: idService,
uuid: "64"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mobile-btn",
visible: true,
_idProps: {
service: idService,
name: "MobileView"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
isDefault: false,
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.ctraderAppOnClick2$Action(controller.callContext(eventHandlerContext));

;
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
uuid: "66"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.MobileNotchSM.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "67"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 16px; margin-left: 8px;"
},
text: ["cTrader app"],
_idProps: {
service: idService,
uuid: "68"
},
_widgetRecordProvider: widgetsRecordProvider
}))))), React.createElement(tradershub_CFDBlocks_DerivXTradeModal_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
IsVisible: model.variables.showDxtradeTradeModalVar,
SelectedAccount: model.variables.selectedAccountVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
closeEvent$Action: function () {
var eventHandlerContext = callContext.clone();
controller.closeTradeModal$Action(controller.callContext(eventHandlerContext));

;
},
forgotPasswordEvent$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.handleForgotPassword$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "69",
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(tradershub_CFDBlocks_MT5TradeModal_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
IsVisible: model.variables.showMT5TradeModalVar,
SelectedAccount: model.variables.selectedAccountVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
closeEvent$Action: function () {
var eventHandlerContext = callContext.clone();
controller.closeTradeModal$Action(controller.callContext(eventHandlerContext));

;
},
forgotPasswordEvent$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.handleForgotPassword$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "70",
alias: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.showMT5TradeModalVar), asPrimitiveValue(model.variables.showDxtradeTradeModalVar), asPrimitiveValue(model.variables.cTraderAvailableAccountsCountVar), asPrimitiveValue(model.variables.createdCTraderAccountsVar), asPrimitiveValue(model.variables.showCTraderTradeModalVar), asPrimitiveValue(model.variables.showForgotPasswordModalVar), asPrimitiveValue(model.variables.showPasswordModalVar), asPrimitiveValue(model.variables.isDxtradePasswordSetVar), asPrimitiveValue(model.variables.isMt5PasswordSetVar), asPrimitiveValue(model.variables.selectedAccountVar), asPrimitiveValue(model.variables.showRestrictedCountryWarningModalVar), asPrimitiveValue(model.variables.getCFDAccountsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getCFDAccountsAggr.listOut), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.availableCFDAccountsVar), asPrimitiveValue(model.variables.isEmptyVar), asPrimitiveValue(model.variables.totalCTraderBalanceVar), asPrimitiveValue(model.variables.createdCFDAccountsVar), asPrimitiveValue(tradershubClientVariables.getAuthToken())]
}));
        }
    }

    return View;
});
define("tradershub.CFDFlows.CFDs.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "BrowserConsoleLogging.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.CFDFlows.CFDs.mvc$translationsResources", "tradershub.CFDFlows.controller", "tradershub.CFDFlows.CFDs.mvc$controller.RefetchMT5.FilterDataJS", "tradershub.CFDFlows.CFDs.mvc$controller.CTraderAccountCreation.GeneratePayloadJS", "tradershub.CFDFlows.CFDs.mvc$controller.RefetchDxtrade.FilterDataJS", "tradershub.CFDFlows.CFDs.mvc$controller.CheckAccountStatus.CheckIsPasswordSetJS", "tradershub.model$ST_872baf372e9fd7dec6105127915f0c6fStructure", "tradershub.model$RL_c5ae9e9ecf45b4babee4b8a8438d3faa", "tradershub.model$ST_148480cbe068b64f08f2cd9823941166Structure", "tradershub.model$RL_e90069e21a2026ded56bf74f4fa37235", "tradershub.model$ST_0c791f94256414cc9c4ca4b03a645eeeStructure", "tradershub.model$ST_d4d91c7891e5750aa551eef14bb529f7Structure", "tradershub.model$ST_0e7dcb74dbc6faaa0d9d3813e4ab03ceStructure", "tradershub.model$ST_a7441674ddaddf168d741a98c667b0e4Structure", "tradershub.controller$FilterAvailableAccounts", "tradershub.model$EN_951592e59194625ab2f46e72a884ba99EntityRecord", "tradershub.model$RL_f704dd0f97cbebb5d4f4586f373fbb9b", "tradershub.controller$CreatedDxTradeAccounts", "tradershub.controller$AvailableDxtradeAccounts", "tradershub.model$RC_0bdb8e5919db069891acca73ea4c745e", "tradershub.model$RL_12e1722f94ac9f508c0ce6facf0d383d", "tradershub.controller$FeatureFlagValueByName", "tradershub.model$ST_bd2236af041a218c8fde06ca0065cfd9Structure", "tradershub.controller$SendGetSetting", "RESTAPIWebsocketOfficial.model$ST_b5532fbd5672db40752d556a46e96eaeStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$VerifyEmail", "tradershub.controller$DerivApiSendMessage", "BrowserConsoleLogging.controller$ConsoleLog", "tradershub.referencesHealth$BrowserConsoleLogging", "tradershub.controller$CreatedCTraderAccounts", "tradershub.controller$AvailableCTraderAccounts", "tradershub.controller$CombineAvailableAccounts", "tradershub.controller$AvailableMT5Accounts", "tradershub.controller$GetWebsiteStatus", "tradershub.controller$CombineCreatedAccounts", "tradershub.controller$CreatedMT5Accounts", "RESTAPIWebsocketOfficial.model$ST_746d074ddcc08e0df3b269ffb1933d5aStructure", "tradershub.controller$GetAccountStatus2"], function (OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, BrowserConsoleLoggingController, tradershubLanguageResources, tradershubClientVariables, tradershub_CFDFlows_CFDs_mvc_TranslationsResources, tradershub_CFDFlowsController, tradershub_CFDFlows_CFDs_mvc_controller_RefetchMT5_FilterDataJS, tradershub_CFDFlows_CFDs_mvc_controller_CTraderAccountCreation_GeneratePayloadJS, tradershub_CFDFlows_CFDs_mvc_controller_RefetchDxtrade_FilterDataJS, tradershub_CFDFlows_CFDs_mvc_controller_CheckAccountStatus_CheckIsPasswordSetJS) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, tradershub_CFDFlows_CFDs_mvc_TranslationsResources);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getCFDAccounts$AggrRefresh: 0
};
this.dataFetchDependentsGraph = {
getCFDAccounts$AggrRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}

// Server Actions - Methods

// Aggregates and Data Actions
get getCFDAccounts$AggrRefresh() {if(!(this.hasOwnProperty("_getCFDAccounts$AggrRefresh"))) {
this._getCFDAccounts$AggrRefresh = function () {
var innerBody = function (maxRecords, startIndex, callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetCFDAccounts", "screenservices/tradershub/CFDFlows/CFDs/ScreenDataSetGetCFDAccounts", "VnYmJ6KKx+VyocmuEreP4w", maxRecords, startIndex, function (b) {
model.variables.getCFDAccountsAggr.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getCFDAccountsAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getCFDAccountsAggr.constructor));
}, undefined, undefined, undefined, callContext, undefined, true).then(function () {
return controller._onAfterFetch$Action(controller.callContext(callContext));
});
}.bind(this);
return OS.Logger.startActiveSpan("GetCFDAccounts", function (span) {
if(span) {
span.setAttribute("code.function", "GetCFDAccounts");
span.setAttribute("outsystems.function.key", "6b0f180b-c987-4938-886f-58b238635e58");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
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

return this._getCFDAccounts$AggrRefresh;
}set getCFDAccounts$AggrRefresh(value) {this._getCFDAccounts$AggrRefresh = value;
}


get dataFetchActionNames() {if(!(this.hasOwnProperty("_dataFetchActionNames"))) {
this._dataFetchActionNames = ["getCFDAccounts$AggrRefresh"];
}

return this._dataFetchActionNames;
}set dataFetchActionNames(value) {this._dataFetchActionNames = value;
}

// Client Actions - Methods
get _getDXTradeAccounts$Action() {if(!(this.hasOwnProperty("__getDXTradeAccounts$Action"))) {
this.__getDXTradeAccounts$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("GetDXTradeAccounts", function (span) {
if(span) {
span.setAttribute("code.function", "GetDXTradeAccounts");
span.setAttribute("outsystems.function.key", "05583aba-2b30-4976-8d88-b5faf4ed05da");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("GetDXTradeAccounts");
callContext = controller.callContext(callContext);
var filterAvailableAccountsVar = new OS.DataTypes.VariableHolder();
var createdDxTradeAccountsVar = new OS.DataTypes.VariableHolder();
var availableDxtradeAccountsVar = new OS.DataTypes.VariableHolder();
var jSONDeserializeCreatedCFDAccountListVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_e90069e21a2026ded56bf74f4fa37235))());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: CreatedDxTradeAccounts
model.flush();
return tradershubController.default.createdDxTradeAccounts$Action(OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getCFDAccountsAggr.listOut, new tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b(), function (source, target) {
target = source.cFDAccountsAttr;
return target;
}), model.variables.accountTypeVar, callContext).then(function (value) {
createdDxTradeAccountsVar.value = value;
}).then(function () {
// JSON Deserialize: JSONDeserializeCreatedCFDAccountList
jSONDeserializeCreatedCFDAccountListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(createdDxTradeAccountsVar.value.responseOut, tradershubModel.RL_e90069e21a2026ded56bf74f4fa37235, false);
// Execute Action: AvailableDxtradeAccounts
model.flush();
return tradershubController.default.availableDxtradeAccounts$Action(OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getCFDAccountsAggr.listOut, new tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b(), function (source, target) {
target = source.cFDAccountsAttr;
return target;
}), callContext).then(function (value) {
availableDxtradeAccountsVar.value = value;
});
}).then(function () {
// Execute Action: FilterAvailableAccounts
filterAvailableAccountsVar.value = tradershubController.default.filterAvailableAccounts$Action(availableDxtradeAccountsVar.value.responseOut, createdDxTradeAccountsVar.value.responseOut, callContext);

// CreatedDXTraderAccounts = JSONDeserializeCreatedCFDAccountList.Data
model.variables.createdDXTraderAccountsVar = jSONDeserializeCreatedCFDAccountListVar.value.dataOut;
// AvailableDXTraderAccounts = FilterAvailableAccounts.FilteredAvailableAccounts
model.variables.availableDXTraderAccountsVar = filterAvailableAccountsVar.value.filteredAvailableAccountsOut;
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

return this.__getDXTradeAccounts$Action;
}set _getDXTradeAccounts$Action(value) {this.__getDXTradeAccounts$Action = value;
}

get _ctraderAppOnClick2$Action() {if(!(this.hasOwnProperty("__ctraderAppOnClick2$Action"))) {
this.__ctraderAppOnClick2$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("CtraderAppOnClick2", function (span) {
if(span) {
span.setAttribute("code.function", "CtraderAppOnClick2");
span.setAttribute("outsystems.function.key", "09eb41b7-2401-4e6d-8353-61def7203af3");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("CtraderAppOnClick2");
callContext = controller.callContext(callContext);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__ctraderAppOnClick2$Action;
}set _ctraderAppOnClick2$Action(value) {this.__ctraderAppOnClick2$Action = value;
}

get _onInitialize$Action() {if(!(this.hasOwnProperty("__onInitialize$Action"))) {
this.__onInitialize$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnInitialize", function (span) {
if(span) {
span.setAttribute("code.function", "OnInitialize");
span.setAttribute("outsystems.function.key", "1f4db8e7-7535-4034-b3ea-f7c82a09a160");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var featureFlagValueByNameVar = new OS.DataTypes.VariableHolder();
// Execute Action: FeatureFlagValueByName
featureFlagValueByNameVar.value = tradershubController.default.featureFlagValueByName$Action("Options", callContext);

if((!(featureFlagValueByNameVar.value.isEnabledOut))) {
// Destination: /tradershub/
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://app.deriv.com", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onInitialize$Action;
}set _onInitialize$Action(value) {this.__onInitialize$Action = value;
}

get _availableAccountOnClick$Action() {if(!(this.hasOwnProperty("__availableAccountOnClick$Action"))) {
this.__availableAccountOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("AvailableAccountOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "AvailableAccountOnClick");
span.setAttribute("outsystems.function.key", "432a04cd-6269-4401-b5dc-957f8e8f2fa1");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("AvailableAccountOnClick");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// IsLoggedIn
return OS.Flow.executeSequence(function () {
if((((tradershubClientVariables.getAuthToken()) !== ("")))) {
return OS.Flow.executeSequence(function () {
if(((model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).identifierAttr === "ctrader_standard"))) {
// Execute Action: CTraderAccountCreation
return controller._cTraderAccountCreation$Action(model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).market_typeAttr, model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).shortcodeAttr, callContext);
} else {
// Execute Action: CheckAccountStatus
return controller._checkAccountStatus$Action(callContext).then(function () {
// ShowPasswordModal = True
model.variables.showPasswordModalVar = true;
// SelectedAccount = AvailableCFDAccounts.Current
model.variables.selectedAccountVar = OS.DataConversion.JSConversions.typeConvertRecord(model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext), new tradershubModel.ST_148480cbe068b64f08f2cd9823941166Structure(), function (source, target) {
target.market_typeAttr = source.market_typeAttr;
target.platformAttr = source.platformAttr;
target.nameAttr = source.nameAttr;
target.productAttr = source.productAttr;
target.sub_account_typeAttr = source.sub_account_typeAttr;
target.identifierAttr = source.identifierAttr;
target.iconAttr = source.iconAttr;
target.labelAttr = source.labelAttr;
target.descriptionAttr = source.descriptionAttr;
return target;
});
});
}

});
} else {
// Destination: /tradershub/TradingSpecification
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "TradingSpecification", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
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

return this.__availableAccountOnClick$Action;
}set _availableAccountOnClick$Action(value) {this.__availableAccountOnClick$Action = value;
}

get _ctraderAppOnClick$Action() {if(!(this.hasOwnProperty("__ctraderAppOnClick$Action"))) {
this.__ctraderAppOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("CtraderAppOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "CtraderAppOnClick");
span.setAttribute("outsystems.function.key", "51dcf5eb-d7ff-48bf-b00f-8eebaaa1074a");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("CtraderAppOnClick");
callContext = controller.callContext(callContext);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__ctraderAppOnClick$Action;
}set _ctraderAppOnClick$Action(value) {this.__ctraderAppOnClick$Action = value;
}

get _onCloseCTraderModal$Action() {if(!(this.hasOwnProperty("__onCloseCTraderModal$Action"))) {
this.__onCloseCTraderModal$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnCloseCTraderModal", function (span) {
if(span) {
span.setAttribute("code.function", "OnCloseCTraderModal");
span.setAttribute("outsystems.function.key", "6c00d251-2954-43db-8662-c5f34d1d98fe");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnCloseCTraderModal");
callContext = controller.callContext(callContext);
// ShowCTraderTradeModal = False
model.variables.showCTraderTradeModalVar = false;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onCloseCTraderModal$Action;
}set _onCloseCTraderModal$Action(value) {this.__onCloseCTraderModal$Action = value;
}

get _refetchMT5$Action() {if(!(this.hasOwnProperty("__refetchMT5$Action"))) {
this.__refetchMT5$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("RefetchMT5", function (span) {
if(span) {
span.setAttribute("code.function", "RefetchMT5");
span.setAttribute("outsystems.function.key", "6cfe143e-35b7-4b0a-9d05-500893ef2d1e");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("RefetchMT5");
callContext = controller.callContext(callContext);
var filterDataJSResult = new OS.DataTypes.VariableHolder();
var jSONSerializeCreatedCfdAccountVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONSerializeSelectedAccountVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONDeserializeFilterDataVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_148480cbe068b64f08f2cd9823941166Structure))());
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: GetMT5Accounts
return controller._getMT5Accounts$Action(callContext).then(function () {
// Execute Action: CombineAccounts
controller._combineAccounts$Action(callContext);
// JSON Serialize: JSONSerializeSelectedAccount
jSONSerializeSelectedAccountVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.selectedAccountVar, false, false);
// JSON Serialize: JSONSerializeCreatedCfdAccount
jSONSerializeCreatedCfdAccountVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.createdCFDAccountsVar, false, false);
filterDataJSResult.value = OS.Logger.startActiveSpan("FilterData", function (span) {
if(span) {
span.setAttribute("code.function", "FilterData");
span.setAttribute("outsystems.function.key", "b7893c33-397c-4237-a078-98738b89fe14");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_CFDFlows_CFDs_mvc_controller_RefetchMT5_FilterDataJS, "FilterData", "RefetchMT5", {
SelectedAccount: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeSelectedAccountVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
CreatedAccounts: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeCreatedCfdAccountVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
FilteredData: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.CFDFlows.CFDs.RefetchMT5$filterDataJSResult"))();
jsNodeResult.filteredDataOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FilteredData, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeFilterData
jSONDeserializeFilterDataVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(filterDataJSResult.value.filteredDataOut, tradershubModel.ST_148480cbe068b64f08f2cd9823941166Structure, false);
// HidePasswordModal
// ShowPasswordModal = False
model.variables.showPasswordModalVar = false;
OS.FeedbackMessageService.showFeedbackMessage("Your Deriv MT5 account is ready.", /*Success*/ 1);
// ShowTradeModal
// SelectedAccount = JSONDeserializeFilterData.Data
model.variables.selectedAccountVar = jSONDeserializeFilterDataVar.value.dataOut;
// ShowMT5TradeModal = True
model.variables.showMT5TradeModalVar = true;
// IsLoading = False
model.variables.isLoadingVar = false;
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

return this.__refetchMT5$Action;
}set _refetchMT5$Action(value) {this.__refetchMT5$Action = value;
}

get _handleForgotPassword$Action() {if(!(this.hasOwnProperty("__handleForgotPassword$Action"))) {
this.__handleForgotPassword$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("HandleForgotPassword", function (span) {
if(span) {
span.setAttribute("code.function", "HandleForgotPassword");
span.setAttribute("outsystems.function.key", "7279c1fe-8a35-4a1a-9e16-b3b3cdcdb85f");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("HandleForgotPassword");
callContext = controller.callContext(callContext);
var sendGetSettingVar = new OS.DataTypes.VariableHolder();
var verifyEmailVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: SendGetSetting
model.flush();
return tradershubController.default.sendGetSetting$Action(callContext).then(function (value) {
sendGetSettingVar.value = value;
}).then(function () {
// Execute Action: VerifyEmail
model.flush();
return tradershubController.default.verifyEmail$Action((((model.variables.selectedAccountVar.platformAttr === "mt5")) ? ("trading_platform_mt5_password_reset") : ("trading_platform_dxtrade_password_reset")), sendGetSettingVar.value.getSettingResponseOut.emailAttr, callContext).then(function (value) {
verifyEmailVar.value = value;
});
}).then(function () {
// HandleModals
// ShowPasswordModal = False
model.variables.showPasswordModalVar = false;
// ShowMT5TradeModal = False
model.variables.showMT5TradeModalVar = false;
// ShowDxtradeTradeModal = False
model.variables.showDxtradeTradeModalVar = false;
// SignupEmail = SendGetSetting.GetSettingResponse.Email
tradershubClientVariables.setSignupEmail(sendGetSettingVar.value.getSettingResponseOut.emailAttr);
// ShowForgotPasswordModal = notShowForgotPasswordModal
model.variables.showForgotPasswordModalVar = !(model.variables.showForgotPasswordModalVar);
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

return this.__handleForgotPassword$Action;
}set _handleForgotPassword$Action(value) {this.__handleForgotPassword$Action = value;
}

get _cTraderAccountCreation$Action() {if(!(this.hasOwnProperty("__cTraderAccountCreation$Action"))) {
this.__cTraderAccountCreation$Action = function (marketTypeIn, shortcodeIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("CTraderAccountCreation", function (span) {
if(span) {
span.setAttribute("code.function", "CTraderAccountCreation");
span.setAttribute("outsystems.function.key", "7b200fc3-08db-4662-8039-bc73c4e85a67");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("CTraderAccountCreation");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("tradershub.CFDFlows.CFDs.CTraderAccountCreation$vars"))());
vars.value.marketTypeInLocal = marketTypeIn;
vars.value.shortcodeInLocal = shortcodeIn;
var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
var generatePayloadJSResult = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
generatePayloadJSResult.value = OS.Logger.startActiveSpan("GeneratePayload", function (span) {
if(span) {
span.setAttribute("code.function", "GeneratePayload");
span.setAttribute("outsystems.function.key", "240a2495-8603-41a8-8449-cf99465ddfaa");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_CFDFlows_CFDs_mvc_controller_CTraderAccountCreation_GeneratePayloadJS, "GeneratePayload", "CTraderAccountCreation", {
AccountType: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getAccountType(), OS.DataTypes.DataTypes.Text),
Shortcode: OS.DataConversion.JSNodeParamConverter.to(vars.value.shortcodeInLocal, OS.DataTypes.DataTypes.Text),
MarketType: OS.DataConversion.JSNodeParamConverter.to(vars.value.marketTypeInLocal, OS.DataTypes.DataTypes.Text),
Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.CFDFlows.CFDs.CTraderAccountCreation$generatePayloadJSResult"))();
jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// Execute Action: DerivApiSendMessage
model.flush();
return tradershubController.default.derivApiSendMessage$Action(generatePayloadJSResult.value.payloadOut, "trading_platform_new_account", true, callContext).then(function (value) {
derivApiSendMessageVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((derivApiSendMessageVar.value.isErrorOut)) {
OS.FeedbackMessageService.showFeedbackMessage(derivApiSendMessageVar.value.errorMessageOut, /*Error*/ 3);
} else {
// Execute Action: GetCTraderAccounts
return controller._getCTraderAccounts$Action(callContext).then(function () {
// Execute Action: CombineAccounts
controller._combineAccounts$Action(callContext);
OS.FeedbackMessageService.showFeedbackMessage("Your cTrader account is ready.", /*Success*/ 1);
// Execute Action: ConsoleLog
BrowserConsoleLoggingController.default.consoleLog$Action((model.variables.cTraderAvailableAccountsCountVar).toString(), 0, callContext);
// ShowCTraderTradeModal = True
model.variables.showCTraderTradeModalVar = true;
// IsLoading = False
model.variables.isLoadingVar = false;
});
}

});
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

return this.__cTraderAccountCreation$Action;
}set _cTraderAccountCreation$Action(value) {this.__cTraderAccountCreation$Action = value;
}

get _getCTraderAccounts$Action() {if(!(this.hasOwnProperty("__getCTraderAccounts$Action"))) {
this.__getCTraderAccounts$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("GetCTraderAccounts", function (span) {
if(span) {
span.setAttribute("code.function", "GetCTraderAccounts");
span.setAttribute("outsystems.function.key", "a14f502c-5fee-4da4-9343-80ca7006980e");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("GetCTraderAccounts");
callContext = controller.callContext(callContext);
var createdCTraderAccounts2Var = new OS.DataTypes.VariableHolder();
var availableCTraderAccounts2Var = new OS.DataTypes.VariableHolder();
var filterAvailableAccountsVar = new OS.DataTypes.VariableHolder();
var jSONDeserializeCreatedCFDAccountListVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_e90069e21a2026ded56bf74f4fa37235))());
var jSONDeserializeAvailableAccountListVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa))());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: CreatedCTraderAccounts2
model.flush();
return tradershubController.default.createdCTraderAccounts$Action(OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getCFDAccountsAggr.listOut, new tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b(), function (source, target) {
target = source.cFDAccountsAttr;
return target;
}), model.variables.accountTypeVar, callContext).then(function (value) {
createdCTraderAccounts2Var.value = value;
}).then(function () {
// JSON Deserialize: JSONDeserializeCreatedCFDAccountList
jSONDeserializeCreatedCFDAccountListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(createdCTraderAccounts2Var.value.responseOut, tradershubModel.RL_e90069e21a2026ded56bf74f4fa37235, false);
// Execute Action: AvailableCTraderAccounts2
model.flush();
return tradershubController.default.availableCTraderAccounts$Action(OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getCFDAccountsAggr.listOut, new tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b(), function (source, target) {
target = source.cFDAccountsAttr;
return target;
}), callContext).then(function (value) {
availableCTraderAccounts2Var.value = value;
});
}).then(function () {
// JSON Deserialize: JSONDeserializeAvailableAccountList
jSONDeserializeAvailableAccountListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(availableCTraderAccounts2Var.value.responseOut, tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa, false);
// Execute Action: FilterAvailableAccounts
filterAvailableAccountsVar.value = tradershubController.default.filterAvailableAccounts$Action(availableCTraderAccounts2Var.value.responseOut, createdCTraderAccounts2Var.value.responseOut, callContext);

// CreatedCTraderAccounts = JSONDeserializeCreatedCFDAccountList.Data
model.variables.createdCTraderAccountsVar = jSONDeserializeCreatedCFDAccountListVar.value.dataOut;
// AvailableCTraderAccounts = FilterAvailableAccounts.FilteredAvailableAccounts
model.variables.availableCTraderAccountsVar = filterAvailableAccountsVar.value.filteredAvailableAccountsOut;
// TotalCTraderBalance = CreatedCTraderAccounts2.TotalCTraderBalance
model.variables.totalCTraderBalanceVar = createdCTraderAccounts2Var.value.totalCTraderBalanceOut;
// CTraderAvailableAccountsCount = JSONDeserializeAvailableAccountList.Data.Current.Available_count
model.variables.cTraderAvailableAccountsCountVar = jSONDeserializeAvailableAccountListVar.value.dataOut.getCurrent(callContext.iterationContext).available_countAttr;
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

return this.__getCTraderAccounts$Action;
}set _getCTraderAccounts$Action(value) {this.__getCTraderAccounts$Action = value;
}

get _closeTradeModal$Action() {if(!(this.hasOwnProperty("__closeTradeModal$Action"))) {
this.__closeTradeModal$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("CloseTradeModal", function (span) {
if(span) {
span.setAttribute("code.function", "CloseTradeModal");
span.setAttribute("outsystems.function.key", "a8948abb-9cae-4d7a-a32d-f53a5a570768");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("CloseTradeModal");
callContext = controller.callContext(callContext);
// CloseTradeModals
// ShowMT5TradeModal = False
model.variables.showMT5TradeModalVar = false;
// ShowCTraderTradeModal = False
model.variables.showCTraderTradeModalVar = false;
// ShowDxtradeTradeModal = False
model.variables.showDxtradeTradeModalVar = false;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__closeTradeModal$Action;
}set _closeTradeModal$Action(value) {this.__closeTradeModal$Action = value;
}

get _getLoggedOutData$Action() {if(!(this.hasOwnProperty("__getLoggedOutData$Action"))) {
this.__getLoggedOutData$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("GetLoggedOutData", function (span) {
if(span) {
span.setAttribute("code.function", "GetLoggedOutData");
span.setAttribute("outsystems.function.key", "aa97f3e9-6a02-4723-b9af-2b2c14946dfc");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("GetLoggedOutData");
callContext = controller.callContext(callContext);
var combineAvailableAccountsVar = new OS.DataTypes.VariableHolder();
var availableDxtradeAccountsVar = new OS.DataTypes.VariableHolder();
var availableMT5Accounts2Var = new OS.DataTypes.VariableHolder();
var availableCTraderAccounts2Var = new OS.DataTypes.VariableHolder();
var jSONDeserializeDXTradeVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa))());
var jSONDeserializeMT5Var = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa))());
var jSONDeserializeCTraderVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa))());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: GetWebsiteStatus
model.flush();
return tradershubController.default.getWebsiteStatus$Action(callContext).then(function () {
// Execute Action: AvailableMT5Accounts2
model.flush();
return tradershubController.default.availableMT5Accounts$Action(OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getCFDAccountsAggr.listOut, new tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b(), function (source, target) {
target = source.cFDAccountsAttr;
return target;
}), callContext).then(function (value) {
availableMT5Accounts2Var.value = value;
});
}).then(function () {
// JSON Deserialize: JSONDeserializeMT5
jSONDeserializeMT5Var.value.dataOut = OS.JSONUtils.deserializeFromJSON(availableMT5Accounts2Var.value.responseOut, tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa, false);
// Execute Action: AvailableDxtradeAccounts
model.flush();
return tradershubController.default.availableDxtradeAccounts$Action(OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getCFDAccountsAggr.listOut, new tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b(), function (source, target) {
target = source.cFDAccountsAttr;
return target;
}), callContext).then(function (value) {
availableDxtradeAccountsVar.value = value;
});
}).then(function () {
// JSON Deserialize: JSONDeserializeDXTrade
jSONDeserializeDXTradeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(availableDxtradeAccountsVar.value.responseOut, tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa, false);
// Execute Action: AvailableCTraderAccounts2
model.flush();
return tradershubController.default.availableCTraderAccounts$Action(OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getCFDAccountsAggr.listOut, new tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b(), function (source, target) {
target = source.cFDAccountsAttr;
return target;
}), callContext).then(function (value) {
availableCTraderAccounts2Var.value = value;
});
}).then(function () {
// JSON Deserialize: JSONDeserializeCTrader
jSONDeserializeCTraderVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(availableCTraderAccounts2Var.value.responseOut, tradershubModel.RL_c5ae9e9ecf45b4babee4b8a8438d3faa, false);
}).then(function () {
// IsEmpty
if((((jSONDeserializeMT5Var.value.dataOut.isEmpty && jSONDeserializeDXTradeVar.value.dataOut.isEmpty) && jSONDeserializeCTraderVar.value.dataOut.isEmpty))) {
if((!(tradershubClientVariables.getConfirmedNotResident()))) {
// ShowRestrictedCountryWarningModal = True
model.variables.showRestrictedCountryWarningModalVar = true;
}

// IsEmpty = True
model.variables.isEmptyVar = true;
} else {
// Execute Action: CombineAvailableAccounts
combineAvailableAccountsVar.value = tradershubController.default.combineAvailableAccounts$Action(jSONDeserializeMT5Var.value.dataOut, jSONDeserializeCTraderVar.value.dataOut, jSONDeserializeDXTradeVar.value.dataOut, callContext);

// AvailableCFDAccounts = CombineAvailableAccounts.CombinedList
model.variables.availableCFDAccountsVar = combineAvailableAccountsVar.value.combinedListOut;
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

return this.__getLoggedOutData$Action;
}set _getLoggedOutData$Action(value) {this.__getLoggedOutData$Action = value;
}

get _confirmedNotResidentOnClick$Action() {if(!(this.hasOwnProperty("__confirmedNotResidentOnClick$Action"))) {
this.__confirmedNotResidentOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("ConfirmedNotResidentOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "ConfirmedNotResidentOnClick");
span.setAttribute("outsystems.function.key", "b379ea35-bfa0-41b2-9d53-4259899971c7");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("ConfirmedNotResidentOnClick");
callContext = controller.callContext(callContext);
// ConfirmedNotResident = True
tradershubClientVariables.setConfirmedNotResident(true);
// ShowRestrictedCountryWarningModal = False
model.variables.showRestrictedCountryWarningModalVar = false;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__confirmedNotResidentOnClick$Action;
}set _confirmedNotResidentOnClick$Action(value) {this.__confirmedNotResidentOnClick$Action = value;
}

get _refetchDxtrade$Action() {if(!(this.hasOwnProperty("__refetchDxtrade$Action"))) {
this.__refetchDxtrade$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("RefetchDxtrade", function (span) {
if(span) {
span.setAttribute("code.function", "RefetchDxtrade");
span.setAttribute("outsystems.function.key", "cf58ed9a-1c00-4186-b77e-278d209ea59a");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("RefetchDxtrade");
callContext = controller.callContext(callContext);
var filterDataJSResult = new OS.DataTypes.VariableHolder();
var jSONSerializeSelectedAccountVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONSerializeCreatedCfdAccountVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONDeserializeFilterDataVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_148480cbe068b64f08f2cd9823941166Structure))());
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: GetDXTradeAccounts
return controller._getDXTradeAccounts$Action(callContext).then(function () {
// Execute Action: CombineAccounts
controller._combineAccounts$Action(callContext);
// JSON Serialize: JSONSerializeSelectedAccount
jSONSerializeSelectedAccountVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.selectedAccountVar, false, false);
// JSON Serialize: JSONSerializeCreatedCfdAccount
jSONSerializeCreatedCfdAccountVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.createdCFDAccountsVar, false, false);
filterDataJSResult.value = OS.Logger.startActiveSpan("FilterData", function (span) {
if(span) {
span.setAttribute("code.function", "FilterData");
span.setAttribute("outsystems.function.key", "68e5b46a-5d2d-43d7-93d8-47ecd40af8ed");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_CFDFlows_CFDs_mvc_controller_RefetchDxtrade_FilterDataJS, "FilterData", "RefetchDxtrade", {
CreatedAccounts: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeCreatedCfdAccountVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
SelectedAccount: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeSelectedAccountVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
FilteredData: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.CFDFlows.CFDs.RefetchDxtrade$filterDataJSResult"))();
jsNodeResult.filteredDataOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FilteredData, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeFilterData
jSONDeserializeFilterDataVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(filterDataJSResult.value.filteredDataOut, tradershubModel.ST_148480cbe068b64f08f2cd9823941166Structure, false);
// HidePasswordModal
// ShowPasswordModal = False
model.variables.showPasswordModalVar = false;
OS.FeedbackMessageService.showFeedbackMessage("Your DerivX account is ready.", /*Success*/ 1);
// ShowTradeModal
// ShowDxtradeTradeModal = True
model.variables.showDxtradeTradeModalVar = true;
// IsLoading = False
model.variables.isLoadingVar = false;
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

return this.__refetchDxtrade$Action;
}set _refetchDxtrade$Action(value) {this.__refetchDxtrade$Action = value;
}

get _createdAccountOnClick$Action() {if(!(this.hasOwnProperty("__createdAccountOnClick$Action"))) {
this.__createdAccountOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("CreatedAccountOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "CreatedAccountOnClick");
span.setAttribute("outsystems.function.key", "d47b0d56-61e1-4f48-820c-04520b7fd5d3");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("CreatedAccountOnClick");
callContext = controller.callContext(callContext);
// IsCTrader
if(((model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).platformAttr === "ctrader"))) {
// ShowCTraderTradeModal = True
model.variables.showCTraderTradeModalVar = true;
} else {
// isDxtrade
if(((model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).platformAttr === "dxtrade"))) {
// ShowDxtradeTradeModal
// SelectedAccount = CreatedCFDAccounts.Current
model.variables.selectedAccountVar = model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext);
// ShowDxtradeTradeModal = True
model.variables.showDxtradeTradeModalVar = true;
} else {
// ShowMT5TradeModal
// SelectedAccount = CreatedCFDAccounts.Current
model.variables.selectedAccountVar = model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext);
// ShowMT5TradeModal = True
model.variables.showMT5TradeModalVar = true;
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

return this.__createdAccountOnClick$Action;
}set _createdAccountOnClick$Action(value) {this.__createdAccountOnClick$Action = value;
}

get _onAfterFetch$Action() {if(!(this.hasOwnProperty("__onAfterFetch$Action"))) {
this.__onAfterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnAfterFetch", function (span) {
if(span) {
span.setAttribute("code.function", "OnAfterFetch");
span.setAttribute("outsystems.function.key", "dc79af1d-7223-4912-9628-348ff0978d89");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnAfterFetch");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// IsEmpty = False
model.variables.isEmptyVar = false;
// AccountType = AccountType
model.variables.accountTypeVar = tradershubClientVariables.getAccountType();
// HasToken
return OS.Flow.executeSequence(function () {
if((((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
// Execute Action: GetMT5Accounts
return controller._getMT5Accounts$Action(callContext).then(function () {
// Execute Action: GetDXTradeAccounts
return controller._getDXTradeAccounts$Action(callContext);
}).then(function () {
// Execute Action: GetCTraderAccounts
return controller._getCTraderAccounts$Action(callContext);
}).then(function () {
// Execute Action: CombineAccounts
controller._combineAccounts$Action(callContext);
// IsLoading = False
model.variables.isLoadingVar = false;
});
} else {
// Execute Action: GetLoggedOutData
return controller._getLoggedOutData$Action(callContext).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
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

return this.__onAfterFetch$Action;
}set _onAfterFetch$Action(value) {this.__onAfterFetch$Action = value;
}

get _combineAccounts$Action() {if(!(this.hasOwnProperty("__combineAccounts$Action"))) {
this.__combineAccounts$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("CombineAccounts", function (span) {
if(span) {
span.setAttribute("code.function", "CombineAccounts");
span.setAttribute("outsystems.function.key", "e0cf216f-3e80-4bf9-a71f-3e4b159f30a7");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("CombineAccounts");
callContext = controller.callContext(callContext);
var combineCreatedAccountsVar = new OS.DataTypes.VariableHolder();
var combineAvailableAccountsVar = new OS.DataTypes.VariableHolder();
// Execute Action: CombineAvailableAccounts
combineAvailableAccountsVar.value = tradershubController.default.combineAvailableAccounts$Action(model.variables.availableMT5AccountsVar, model.variables.availableCTraderAccountsVar, model.variables.availableDXTraderAccountsVar, callContext);

// Execute Action: CombineCreatedAccounts
combineCreatedAccountsVar.value = tradershubController.default.combineCreatedAccounts$Action(model.variables.createdMT5AccountsVar, model.variables.createdCTraderAccountsVar, model.variables.createdDXTraderAccountsVar, callContext);

// AvailableCFDAccounts = CombineAvailableAccounts.CombinedList
model.variables.availableCFDAccountsVar = combineAvailableAccountsVar.value.combinedListOut;
// CreatedCFDAccounts = CombineCreatedAccounts.CombinedList
model.variables.createdCFDAccountsVar = combineCreatedAccountsVar.value.combinedListOut;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__combineAccounts$Action;
}set _combineAccounts$Action(value) {this.__combineAccounts$Action = value;
}

get _setDemoValue$Action() {if(!(this.hasOwnProperty("__setDemoValue$Action"))) {
this.__setDemoValue$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("SetDemoValue", function (span) {
if(span) {
span.setAttribute("code.function", "SetDemoValue");
span.setAttribute("outsystems.function.key", "e69d1594-184e-4f7f-ae0d-f7fb9f9a773a");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("SetDemoValue");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// AccountType = "demo"
tradershubClientVariables.setAccountType("demo");
// AccountType = "demo"
model.variables.accountTypeVar = "demo";
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: GetMT5Accounts
return controller._getMT5Accounts$Action(callContext).then(function () {
// Execute Action: GetDXTradeAccounts
return controller._getDXTradeAccounts$Action(callContext);
}).then(function () {
// Execute Action: GetCTraderAccounts
return controller._getCTraderAccounts$Action(callContext);
}).then(function () {
// Execute Action: CombineAccounts
controller._combineAccounts$Action(callContext);
// IsLoading = False
model.variables.isLoadingVar = false;
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

return this.__setDemoValue$Action;
}set _setDemoValue$Action(value) {this.__setDemoValue$Action = value;
}

get _setRealValue$Action() {if(!(this.hasOwnProperty("__setRealValue$Action"))) {
this.__setRealValue$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("SetRealValue", function (span) {
if(span) {
span.setAttribute("code.function", "SetRealValue");
span.setAttribute("outsystems.function.key", "ecd6bab1-70f8-432d-b7d7-df892473d0b6");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("SetRealValue");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// AccountType = "real"
tradershubClientVariables.setAccountType("real");
// DemoLoginId = ""
tradershubClientVariables.setDemoLoginId("");
// AccountType = "real"
model.variables.accountTypeVar = "real";
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: GetMT5Accounts
return controller._getMT5Accounts$Action(callContext).then(function () {
// Execute Action: GetDXTradeAccounts
return controller._getDXTradeAccounts$Action(callContext);
}).then(function () {
// Execute Action: GetCTraderAccounts
return controller._getCTraderAccounts$Action(callContext);
}).then(function () {
// Execute Action: CombineAccounts
controller._combineAccounts$Action(callContext);
// IsLoading = False
model.variables.isLoadingVar = false;
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

return this.__setRealValue$Action;
}set _setRealValue$Action(value) {this.__setRealValue$Action = value;
}

get _getMT5Accounts$Action() {if(!(this.hasOwnProperty("__getMT5Accounts$Action"))) {
this.__getMT5Accounts$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("GetMT5Accounts", function (span) {
if(span) {
span.setAttribute("code.function", "GetMT5Accounts");
span.setAttribute("outsystems.function.key", "ed6cc09a-0eeb-4e1c-bad3-d9efd7925770");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("GetMT5Accounts");
callContext = controller.callContext(callContext);
var availableMT5Accounts2Var = new OS.DataTypes.VariableHolder();
var createdMT5Accounts2Var = new OS.DataTypes.VariableHolder();
var filterAvailableAccountsVar = new OS.DataTypes.VariableHolder();
var jSONDeserializeCreatedCFDAccountListVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_e90069e21a2026ded56bf74f4fa37235))());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: CreatedMT5Accounts2
model.flush();
return tradershubController.default.createdMT5Accounts$Action(OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getCFDAccountsAggr.listOut, new tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b(), function (source, target) {
target = source.cFDAccountsAttr;
return target;
}), model.variables.accountTypeVar, callContext).then(function (value) {
createdMT5Accounts2Var.value = value;
}).then(function () {
// Execute Action: AvailableMT5Accounts2
model.flush();
return tradershubController.default.availableMT5Accounts$Action(OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getCFDAccountsAggr.listOut, new tradershubModel.RL_f704dd0f97cbebb5d4f4586f373fbb9b(), function (source, target) {
target = source.cFDAccountsAttr;
return target;
}), callContext).then(function (value) {
availableMT5Accounts2Var.value = value;
});
}).then(function () {
// Execute Action: FilterAvailableAccounts
filterAvailableAccountsVar.value = tradershubController.default.filterAvailableAccounts$Action(availableMT5Accounts2Var.value.responseOut, createdMT5Accounts2Var.value.responseOut, callContext);

// JSON Deserialize: JSONDeserializeCreatedCFDAccountList
jSONDeserializeCreatedCFDAccountListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(createdMT5Accounts2Var.value.responseOut, tradershubModel.RL_e90069e21a2026ded56bf74f4fa37235, false);
// AvailableMT5Accounts = FilterAvailableAccounts.FilteredAvailableAccounts
model.variables.availableMT5AccountsVar = filterAvailableAccountsVar.value.filteredAvailableAccountsOut;
// CreatedMT5Accounts = JSONDeserializeCreatedCFDAccountList.Data
model.variables.createdMT5AccountsVar = jSONDeserializeCreatedCFDAccountListVar.value.dataOut;
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

return this.__getMT5Accounts$Action;
}set _getMT5Accounts$Action(value) {this.__getMT5Accounts$Action = value;
}

get _checkAccountStatus$Action() {if(!(this.hasOwnProperty("__checkAccountStatus$Action"))) {
this.__checkAccountStatus$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("CheckAccountStatus", function (span) {
if(span) {
span.setAttribute("code.function", "CheckAccountStatus");
span.setAttribute("outsystems.function.key", "f5b9a00e-cf1e-4340-9e69-06cac42896d1");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("CheckAccountStatus");
callContext = controller.callContext(callContext);
var getAccountStatusVar = new OS.DataTypes.VariableHolder();
var checkIsPasswordSetJSResult = new OS.DataTypes.VariableHolder();
var jSONSerializeAccountStatusResponseVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: GetAccountStatus
model.flush();
return tradershubController.default.getAccountStatus2$Action(callContext).then(function (value) {
getAccountStatusVar.value = value;
}).then(function () {
// JSON Serialize: JSONSerializeAccountStatusResponse
jSONSerializeAccountStatusResponseVar.value.jSONOut = OS.JSONUtils.serializeToJSON(getAccountStatusVar.value.responseOut, false, false);
checkIsPasswordSetJSResult.value = OS.Logger.startActiveSpan("CheckIsPasswordSet", function (span) {
if(span) {
span.setAttribute("code.function", "CheckIsPasswordSet");
span.setAttribute("outsystems.function.key", "6bbdcd05-65dc-42d3-a4e6-4b890871964b");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_CFDFlows_CFDs_mvc_controller_CheckAccountStatus_CheckIsPasswordSetJS, "CheckIsPasswordSet", "CheckAccountStatus", {
AccountStatusResponse: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeAccountStatusResponseVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
IsMT5PasswordSet: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
IsDxtradePasswordSet: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.CFDFlows.CFDs.CheckAccountStatus$checkIsPasswordSetJSResult"))();
jsNodeResult.isMT5PasswordSetOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsMT5PasswordSet, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.isDxtradePasswordSetOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsDxtradePasswordSet, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// IsMt5PasswordSet = CheckIsPasswordSet.IsMT5PasswordSet
model.variables.isMt5PasswordSetVar = checkIsPasswordSetJSResult.value.isMT5PasswordSetOut;
// IsDxtradePasswordSet = CheckIsPasswordSet.IsDxtradePasswordSet
model.variables.isDxtradePasswordSetVar = checkIsPasswordSetJSResult.value.isDxtradePasswordSetOut;
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

return this.__checkAccountStatus$Action;
}set _checkAccountStatus$Action(value) {this.__checkAccountStatus$Action = value;
}

get _closePasswordModal$Action() {if(!(this.hasOwnProperty("__closePasswordModal$Action"))) {
this.__closePasswordModal$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("ClosePasswordModal", function (span) {
if(span) {
span.setAttribute("code.function", "ClosePasswordModal");
span.setAttribute("outsystems.function.key", "f646a659-0623-406f-be14-efe2f58dd9a0");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("ClosePasswordModal");
callContext = controller.callContext(callContext);
// ShowPasswordModal = False
model.variables.showPasswordModalVar = false;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__closePasswordModal$Action;
}set _closePasswordModal$Action(value) {this.__closePasswordModal$Action = value;
}

get _ctraderWebTerminalOnClick$Action() {if(!(this.hasOwnProperty("__ctraderWebTerminalOnClick$Action"))) {
this.__ctraderWebTerminalOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("CtraderWebTerminalOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "CtraderWebTerminalOnClick");
span.setAttribute("outsystems.function.key", "fda7275a-dbc8-45ab-bbb3-d0cea7cee65a");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("CtraderWebTerminalOnClick");
callContext = controller.callContext(callContext);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__ctraderWebTerminalOnClick$Action;
}set _ctraderWebTerminalOnClick$Action(value) {this.__ctraderWebTerminalOnClick$Action = value;
}


getDXTradeAccounts$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("GetDXTradeAccounts__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "GetDXTradeAccounts");
span.setAttribute("outsystems.function.key", "05583aba-2b30-4976-8d88-b5faf4ed05da");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._getDXTradeAccounts$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

ctraderAppOnClick2$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("CtraderAppOnClick2__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "CtraderAppOnClick2");
span.setAttribute("outsystems.function.key", "09eb41b7-2401-4e6d-8353-61def7203af3");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._ctraderAppOnClick2$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

onInitialize$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnInitialize__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnInitialize");
span.setAttribute("outsystems.function.key", "1f4db8e7-7535-4034-b3ea-f7c82a09a160");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

availableAccountOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("AvailableAccountOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "AvailableAccountOnClick");
span.setAttribute("outsystems.function.key", "432a04cd-6269-4401-b5dc-957f8e8f2fa1");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._availableAccountOnClick$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

ctraderAppOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("CtraderAppOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "CtraderAppOnClick");
span.setAttribute("outsystems.function.key", "51dcf5eb-d7ff-48bf-b00f-8eebaaa1074a");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._ctraderAppOnClick$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

onCloseCTraderModal$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnCloseCTraderModal__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnCloseCTraderModal");
span.setAttribute("outsystems.function.key", "6c00d251-2954-43db-8662-c5f34d1d98fe");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onCloseCTraderModal$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

refetchMT5$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("RefetchMT5__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "RefetchMT5");
span.setAttribute("outsystems.function.key", "6cfe143e-35b7-4b0a-9d05-500893ef2d1e");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._refetchMT5$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

handleForgotPassword$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("HandleForgotPassword__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "HandleForgotPassword");
span.setAttribute("outsystems.function.key", "7279c1fe-8a35-4a1a-9e16-b3b3cdcdb85f");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._handleForgotPassword$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

cTraderAccountCreation$Action(marketTypeIn, shortcodeIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("CTraderAccountCreation__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "CTraderAccountCreation");
span.setAttribute("outsystems.function.key", "7b200fc3-08db-4662-8039-bc73c4e85a67");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._cTraderAccountCreation$Action, callContext, marketTypeIn, shortcodeIn);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

getCTraderAccounts$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("GetCTraderAccounts__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "GetCTraderAccounts");
span.setAttribute("outsystems.function.key", "a14f502c-5fee-4da4-9343-80ca7006980e");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._getCTraderAccounts$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

closeTradeModal$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("CloseTradeModal__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "CloseTradeModal");
span.setAttribute("outsystems.function.key", "a8948abb-9cae-4d7a-a32d-f53a5a570768");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._closeTradeModal$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

getLoggedOutData$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("GetLoggedOutData__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "GetLoggedOutData");
span.setAttribute("outsystems.function.key", "aa97f3e9-6a02-4723-b9af-2b2c14946dfc");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._getLoggedOutData$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

confirmedNotResidentOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("ConfirmedNotResidentOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "ConfirmedNotResidentOnClick");
span.setAttribute("outsystems.function.key", "b379ea35-bfa0-41b2-9d53-4259899971c7");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._confirmedNotResidentOnClick$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

refetchDxtrade$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("RefetchDxtrade__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "RefetchDxtrade");
span.setAttribute("outsystems.function.key", "cf58ed9a-1c00-4186-b77e-278d209ea59a");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._refetchDxtrade$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

createdAccountOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("CreatedAccountOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "CreatedAccountOnClick");
span.setAttribute("outsystems.function.key", "d47b0d56-61e1-4f48-820c-04520b7fd5d3");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._createdAccountOnClick$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

onAfterFetch$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnAfterFetch__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnAfterFetch");
span.setAttribute("outsystems.function.key", "dc79af1d-7223-4912-9628-348ff0978d89");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._onAfterFetch$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

combineAccounts$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("CombineAccounts__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "CombineAccounts");
span.setAttribute("outsystems.function.key", "e0cf216f-3e80-4bf9-a71f-3e4b159f30a7");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._combineAccounts$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

setDemoValue$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("SetDemoValue__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "SetDemoValue");
span.setAttribute("outsystems.function.key", "e69d1594-184e-4f7f-ae0d-f7fb9f9a773a");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._setDemoValue$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

setRealValue$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("SetRealValue__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "SetRealValue");
span.setAttribute("outsystems.function.key", "ecd6bab1-70f8-432d-b7d7-df892473d0b6");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._setRealValue$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

getMT5Accounts$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("GetMT5Accounts__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "GetMT5Accounts");
span.setAttribute("outsystems.function.key", "ed6cc09a-0eeb-4e1c-bad3-d9efd7925770");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._getMT5Accounts$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

checkAccountStatus$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("CheckAccountStatus__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "CheckAccountStatus");
span.setAttribute("outsystems.function.key", "f5b9a00e-cf1e-4340-9e69-06cac42896d1");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._checkAccountStatus$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

closePasswordModal$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("ClosePasswordModal__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "ClosePasswordModal");
span.setAttribute("outsystems.function.key", "f646a659-0623-406f-be14-efe2f58dd9a0");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._closePasswordModal$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

ctraderWebTerminalOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("CtraderWebTerminalOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "CtraderWebTerminalOnClick");
span.setAttribute("outsystems.function.key", "fda7275a-dbc8-45ab-bbb3-d0cea7cee65a");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._ctraderWebTerminalOnClick$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}


// Event Handler Actions
get onInitializeEventHandler() {if(!(this.hasOwnProperty("_onInitializeEventHandler"))) {
this._onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onInitialize$Action(callContext);

};
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
return tradershub_CFDFlowsController.default.handleError(ex, this.callContext());
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
Controller.registerVariableGroupType("tradershub.CFDFlows.CFDs.RefetchMT5$filterDataJSResult", [{
name: "FilteredData",
attrName: "filteredDataOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.CFDFlows.CFDs.CTraderAccountCreation$vars", [{
name: "MarketType",
attrName: "marketTypeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Shortcode",
attrName: "shortcodeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.CFDFlows.CFDs.CTraderAccountCreation$generatePayloadJSResult", [{
name: "Payload",
attrName: "payloadOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.CFDFlows.CFDs.RefetchDxtrade$filterDataJSResult", [{
name: "FilteredData",
attrName: "filteredDataOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.CFDFlows.CFDs.CheckAccountStatus$checkIsPasswordSetJSResult", [{
name: "IsMT5PasswordSet",
attrName: "isMT5PasswordSetOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IsDxtradePasswordSet",
attrName: "isDxtradePasswordSetOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

}
return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.CFDFlows.CFDs.mvc$controller.RefetchMT5.FilterDataJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.FilteredData = JSON.stringify(
    JSON.parse($parameters.CreatedAccounts).find(
        account => account.identifier === JSON.parse($parameters.SelectedAccount).identifier
    )
);
};
});

define("tradershub.CFDFlows.CFDs.mvc$controller.CTraderAccountCreation.GeneratePayloadJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Payload = JSON.stringify({
    "platform": "ctrader",
    "account_type": $parameters.AccountType,
    "market_type": $parameters.MarketType,
    "company": $parameters.Shortcode
})

};
});

define("tradershub.CFDFlows.CFDs.mvc$controller.RefetchDxtrade.FilterDataJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.FilteredData = JSON.stringify(
    JSON.parse($parameters.CreatedAccounts).find(
        account => account.identifier === JSON.parse($parameters.SelectedAccount).identifier
    )
);
};
});

define("tradershub.CFDFlows.CFDs.mvc$controller.CheckAccountStatus.CheckIsPasswordSetJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const accountStatus = JSON.parse($parameters.AccountStatusResponse);
const statuses = accountStatus?.get_account_status?.status || [];

$parameters.IsMT5PasswordSet = !statuses.includes("mt5_password_not_set");
$parameters.IsDxtradePasswordSet = !statuses.includes("dxtrade_password_not_set");

};
});


define("tradershub.CFDFlows.CFDs.mvc$translationsResources.fr-FR", [], function () {
return {
"tk2AVO3sjUu0VGDL_Ce+jA#Value": "Transfert",
"uPBzeqBKgE69LZnOCO4bew#Value": "Voir les spécifications",
"6IiGdsEYP06nsIpsfm4H7Q#Value": "Comptes disponibles",
"K34fG267aE23l2enpmqezA#Value": "Mes comptes",
"gcgQSS26UkK60r3pOIaf5g#Value": "Tradez des positions plus importantes avec moins de capital sur un large éventail de marchés mondiaux.",
"wDlKcbQEL0SpHAWlCti6Kw#Value": "trading de CFD"
};
});

define("tradershub.CFDFlows.CFDs.mvc$translationsResources", ["exports", "tradershub.CFDFlows.CFDs.mvc$translationsResources.fr-FR"], function (exports, tradershub_CFDFlows_CFDs_mvc_translationsResources_frFR) {
return {
"fr-FR": {
"translations": tradershub_CFDFlows_CFDs_mvc_translationsResources_frFR,
"isRTL": false
}
};
});

