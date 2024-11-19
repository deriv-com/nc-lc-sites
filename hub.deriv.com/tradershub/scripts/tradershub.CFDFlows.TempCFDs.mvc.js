define("tradershub.CFDFlows.TempCFDs.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "RESTAPIWebsocketOfficial.model", "tradershub.controller", "BrowserConsoleLogging.controller", "tradershub.Layouts.MainLayout.mvc$model", "tradershub.MainFlowBlocks.LoggedOutBanner.mvc$model", "OutSystemsUI.Content.Tooltip.mvc$model", "tradershub.MainFlowBlocks.RealDemoSwitcher.mvc$model", "tradershub.CFDBlocks.MyAccountCard.mvc$model", "tradershub.CFDBlocks.AvailableAccountCard.mvc$model", "tradershub.MainFlowBlocks.EmptyPlatformModal.mvc$model", "tradershub.model$EN_8212284ed6913c62a123b32716b72fbaEntityRecord", "tradershub.model$RL_9eb97ad6cb81943972e368260e0cb936", "tradershub.model$ST_305c8a51ef2a193d12ca546593f55e60Structure", "RESTAPIWebsocketOfficial.model$ST_75725e65d106c1568a850780233a08baStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.model$ST_3c6ba624991ba71a1d179d7c7ef27261Structure", "tradershub.controller$DxtradeAvailableAccounts", "tradershub.controller$CTraderAvailableAccounts", "tradershub.model$ST_8907948f85abfce9f41b7aac6149d55eStructure", "tradershub.controller$MT5AvailableAccounts", "tradershub.model$RC_07be8d7193ba16b1cc9d953b8fa48e9d", "tradershub.model$RL_ee1664da44e6893a731536d754684359", "tradershub.controller$TradingPlatformAccounts", "tradershub.controller$MT5LoginList", "RESTAPIWebsocketOfficial.model$ST_746d074ddcc08e0df3b269ffb1933d5aStructure", "tradershub.controller$GetAccountStatus2", "tradershub.controller$DerivApiSendMessage", "BrowserConsoleLogging.controller$ConsoleLog", "tradershub.referencesHealth$BrowserConsoleLogging", "tradershub.controller$GetWebsiteStatus"], function (OSRuntimeCore, tradershubModel, RESTAPIWebsocketOfficialModel, tradershubController, BrowserConsoleLoggingController, tradershub_Layouts_MainLayout_mvcModel, tradershub_MainFlowBlocks_LoggedOutBanner_mvcModel, OutSystemsUI_Content_Tooltip_mvcModel, tradershub_MainFlowBlocks_RealDemoSwitcher_mvcModel, tradershub_CFDBlocks_MyAccountCard_mvcModel, tradershub_CFDBlocks_AvailableAccountCard_mvcModel, tradershub_MainFlowBlocks_EmptyPlatformModal_mvcModel) {
var OS = OSRuntimeCore;
{class GetCfdProductConfigsAggrRecInner extends 
OS.Model.AggregateRecord {
static attributesToDeclare() {
return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new GetCfdProductConfigsAggrRec(new GetCfdProductConfigsAggrRec.RecordClass({
RecordListType: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

GetCfdProductConfigsAggrRecInner.RecordListType = tradershubModel.RL_ee1664da44e6893a731536d754684359;
var GetCfdProductConfigsAggrRec = GetCfdProductConfigsAggrRecInner;
GetCfdProductConfigsAggrRec.init();
}


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("AvailableCFDAccounts", "availableCFDAccountsVar", "AvailableCFDAccounts", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936());
}, false, tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936), 
this.attr("CreatedCFDAccounts", "createdCFDAccountsVar", "CreatedCFDAccounts", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936());
}, false, tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936), 
this.attr("CreatedMT5Accounts", "createdMT5AccountsVar", "CreatedMT5Accounts", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_305c8a51ef2a193d12ca546593f55e60Structure());
}, false, tradershubModel.ST_305c8a51ef2a193d12ca546593f55e60Structure), 
this.attr("CreatedCTraderAccounts", "createdCTraderAccountsVar", "CreatedCTraderAccounts", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_75725e65d106c1568a850780233a08baStructure());
}, false, RESTAPIWebsocketOfficialModel.ST_75725e65d106c1568a850780233a08baStructure), 
this.attr("CreatedDXTradeAccounts", "createdDXTradeAccountsVar", "CreatedDXTradeAccounts", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_75725e65d106c1568a850780233a08baStructure());
}, false, RESTAPIWebsocketOfficialModel.ST_75725e65d106c1568a850780233a08baStructure), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("ShowWarningPopup", "showWarningPopupVar", "ShowWarningPopup", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("ShowPasswordPopup", "showPasswordPopupVar", "ShowPasswordPopup", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("ShowTradePopup", "showTradePopupVar", "ShowTradePopup", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("SelectedProduct", "selectedProductVar", "SelectedProduct", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("SelectedPlatform", "selectedPlatformVar", "SelectedPlatform", true, false, OS.DataTypes.DataTypes.Text, function () {
return "mt5";
}, false), 
this.attr("IsPasswordSet", "isPasswordSetVar", "IsPasswordSet", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("ShowCtraderImportantNotes", "showCtraderImportantNotesVar", "ShowCtraderImportantNotes", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("SelectedProductIdentifier", "selectedProductIdentifierVar", "SelectedProductIdentifier", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("GetCfdProductConfigs", "getCfdProductConfigsAggr", "GetCfdProductConfigs", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetCfdProductConfigsAggrRec());
}, true, GetCfdProductConfigsAggrRec)
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
Model._hasValidationWidgetsValue = ((((((tradershub_Layouts_MainLayout_mvcModel.hasValidationWidgets || tradershub_MainFlowBlocks_LoggedOutBanner_mvcModel.hasValidationWidgets) || OutSystemsUI_Content_Tooltip_mvcModel.hasValidationWidgets) || tradershub_MainFlowBlocks_RealDemoSwitcher_mvcModel.hasValidationWidgets) || tradershub_CFDBlocks_MyAccountCard_mvcModel.hasValidationWidgets) || tradershub_CFDBlocks_AvailableAccountCard_mvcModel.hasValidationWidgets) || tradershub_MainFlowBlocks_EmptyPlatformModal_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("tradershub.CFDFlows.TempCFDs.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "BrowserConsoleLogging.controller", "react", "@outsystems/runtime-view-js", "tradershub.CFDFlows.TempCFDs.mvc$model", "tradershub.CFDFlows.TempCFDs.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.MainLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.MainFlowBlocks.LoggedOutBanner.mvc$view", "OutSystemsUI.Content.Tooltip.mvc$view", "tradershub.MainFlowBlocks.RealDemoSwitcher.mvc$view", "tradershub.CFDBlocks.MyAccountCard.mvc$view", "tradershub.CFDBlocks.AvailableAccountCard.mvc$view", "tradershub.MainFlowBlocks.EmptyPlatformModal.mvc$view", "tradershub.model$EN_8212284ed6913c62a123b32716b72fbaEntityRecord", "tradershub.model$RL_9eb97ad6cb81943972e368260e0cb936", "tradershub.model$ST_305c8a51ef2a193d12ca546593f55e60Structure", "RESTAPIWebsocketOfficial.model$ST_75725e65d106c1568a850780233a08baStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.model$ST_3c6ba624991ba71a1d179d7c7ef27261Structure", "tradershub.controller$DxtradeAvailableAccounts", "tradershub.controller$CTraderAvailableAccounts", "tradershub.model$ST_8907948f85abfce9f41b7aac6149d55eStructure", "tradershub.controller$MT5AvailableAccounts", "tradershub.model$RC_07be8d7193ba16b1cc9d953b8fa48e9d", "tradershub.model$RL_ee1664da44e6893a731536d754684359", "tradershub.controller$TradingPlatformAccounts", "tradershub.controller$MT5LoginList", "RESTAPIWebsocketOfficial.model$ST_746d074ddcc08e0df3b269ffb1933d5aStructure", "tradershub.controller$GetAccountStatus2", "tradershub.controller$DerivApiSendMessage", "BrowserConsoleLogging.controller$ConsoleLog", "tradershub.referencesHealth$BrowserConsoleLogging", "tradershub.controller$GetWebsiteStatus"], function (OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, BrowserConsoleLoggingController, React, OSView, tradershub_CFDFlows_TempCFDs_mvc_model, tradershub_CFDFlows_TempCFDs_mvc_controller, tradershubClientVariables, tradershub_Layouts_MainLayout_mvc_view, OSWidgets, tradershub_MainFlowBlocks_LoggedOutBanner_mvc_view, OutSystemsUI_Content_Tooltip_mvc_view, tradershub_MainFlowBlocks_RealDemoSwitcher_mvc_view, tradershub_CFDBlocks_MyAccountCard_mvc_view, tradershub_CFDBlocks_AvailableAccountCard_mvc_view, tradershub_MainFlowBlocks_EmptyPlatformModal_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() { return "CFDFlows.TempCFDs"; }

        static getAttributes() { return {
codeFunction: "TempCFDs",
functionKey: "7108fbb3-e7a5-4b8f-b71d-9d3c16481dcf",
functionOwnerName: "tradershub",
functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.CFDFlows.TempCFDs.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_MainLayout_mvc_view, tradershub_MainFlowBlocks_LoggedOutBanner_mvc_view, OutSystemsUI_Content_Tooltip_mvc_view, tradershub_MainFlowBlocks_RealDemoSwitcher_mvc_view, tradershub_CFDBlocks_MyAccountCard_mvc_view, tradershub_CFDBlocks_AvailableAccountCard_mvc_view, tradershub_MainFlowBlocks_EmptyPlatformModal_mvc_view];
        }

        get modelFactory() {
            return tradershub_CFDFlows_TempCFDs_mvc_model;
        }

        get controllerFactory() {
            return tradershub_CFDFlows_TempCFDs_mvc_controller;
        }

        get title() {
            

            return OSView.BaseView.BaseWebScreen.getTranslation("s_sIcaXnj0u3HZ08Fkgdzw#Title", "TempCFDs");
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
text: [$text(getTranslation("JvXT8FKvAkWxHS2WJzwefA#Value", "CFDs trading"))],
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
text: [$text(getTranslation("O8yi9AoC902qkI0zwyvByg#Value", "Trade bigger positions with less capital on a wide range of global markets."))],
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
demoClickEvent$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.setDemoValue$Action(controller.callContext(eventHandlerContext));
});
;
},
realClickEvent$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.setRealValue$Action(controller.callContext(eventHandlerContext));
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
text: [$text(getTranslation("3E3EKYyTeEK5jsW9c49Gbw#Value", "My accounts"))],
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
ProductIcon: model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).iconAttr,
Balance: ((model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).balance1Attr + " ") + model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).currency1Attr),
Name: model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).titleAttr
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClickEvent$Action: function () {
var eventHandlerContext = callContext.clone();
controller.onClickCreatedAccount$Action(model.variables.createdCFDAccountsVar.getCurrent(callContext.iterationContext).productIdentifierAttr, controller.callContext(eventHandlerContext));

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
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
style: "margin-top: 24px;"
},
style: "display-flex align-items-center justify-content-space-between",
visible: (model.variables.availableCFDAccountsVar.length > 0),
_idProps: {
service: idService,
name: "AvailableAccountsHeader"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 16px; font-weight: bold;"
},
text: [$text(getTranslation("liMEncvkU0aUQH4HeQjtxA#Value", "Available accounts"))],
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.viewSpecificationsOnClick$Action(controller.callContext(eventHandlerContext));

;
}
},
gridProperties: {
classes: "ThemeGrid_Width6"
},
style: "display-flex align-items-center justify-content-flex-end cursor-pointer",
visible: true,
_idProps: {
service: idService,
name: "ViewSpecifications"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 12px;"
},
text: [$text(getTranslation("5ihTwb73tkaxj7MjBx1lcQ#Value", "View specifications"))],
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Icon, {
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
}))), React.createElement(OSWidgets.List, {
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
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).marketsTypeAttr), asPrimitiveValue(model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).productIdentifierAttr), asPrimitiveValue(model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).iconAttr), asPrimitiveValue(model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).descriptionAttr), asPrimitiveValue(model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).titleAttr), asPrimitiveValue(model.variables.isLoadingVar)]
}, $if(model.variables.isLoadingVar, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "skeleton available-accounts-loader",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(tradershub_CFDBlocks_AvailableAccountCard_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
ProductName: model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).titleAttr,
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
return controller.onClickAvailableAccount$Action(model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).productIdentifierAttr, model.variables.availableCFDAccountsVar.getCurrent(callContext.iterationContext).marketsTypeAttr, controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "22",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}))];
}, callContext, idService, "2")
},
_dependencies: [asPrimitiveValue(model.variables.isLoadingVar)]
}), React.createElement(tradershub_MainFlowBlocks_EmptyPlatformModal_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
IsVisible: model.variables.showWarningPopupVar
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
uuid: "23",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.showWarningPopupVar), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.availableCFDAccountsVar), asPrimitiveValue(model.variables.createdCFDAccountsVar), asPrimitiveValue(tradershubClientVariables.getAuthToken())]
}));
        }
    }

    return View;
});
define("tradershub.CFDFlows.TempCFDs.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "BrowserConsoleLogging.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.CFDFlows.TempCFDs.mvc$translationsResources", "tradershub.CFDFlows.controller", "tradershub.CFDFlows.TempCFDs.mvc$controller.OnClickCreatedAccount.JavaScript1JS", "tradershub.CFDFlows.TempCFDs.mvc$controller.GetAvailableCFDAccounts.ModifyDataJS", "tradershub.CFDFlows.TempCFDs.mvc$controller.CopyToClipboard.JavaScript1JS", "tradershub.CFDFlows.TempCFDs.mvc$controller.GetCreatedCFDAccounts.ModifyDataJS", "tradershub.CFDFlows.TempCFDs.mvc$controller.OnClickAvailableAccount.CheckIsPasswordSetJS", "tradershub.CFDFlows.TempCFDs.mvc$controller.OnClickAvailableAccount.GetSelectedPlatformJS", "tradershub.CFDFlows.TempCFDs.mvc$controller.CTraderAccountCreation.GeneratePayloadJS", "tradershub.model$EN_8212284ed6913c62a123b32716b72fbaEntityRecord", "tradershub.model$RL_9eb97ad6cb81943972e368260e0cb936", "tradershub.model$ST_305c8a51ef2a193d12ca546593f55e60Structure", "RESTAPIWebsocketOfficial.model$ST_75725e65d106c1568a850780233a08baStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.model$ST_3c6ba624991ba71a1d179d7c7ef27261Structure", "tradershub.controller$DxtradeAvailableAccounts", "tradershub.controller$CTraderAvailableAccounts", "tradershub.model$ST_8907948f85abfce9f41b7aac6149d55eStructure", "tradershub.controller$MT5AvailableAccounts", "tradershub.model$RC_07be8d7193ba16b1cc9d953b8fa48e9d", "tradershub.model$RL_ee1664da44e6893a731536d754684359", "tradershub.controller$TradingPlatformAccounts", "tradershub.controller$MT5LoginList", "RESTAPIWebsocketOfficial.model$ST_746d074ddcc08e0df3b269ffb1933d5aStructure", "tradershub.controller$GetAccountStatus2", "tradershub.controller$DerivApiSendMessage", "BrowserConsoleLogging.controller$ConsoleLog", "tradershub.referencesHealth$BrowserConsoleLogging", "tradershub.controller$GetWebsiteStatus"], function (OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, BrowserConsoleLoggingController, tradershubLanguageResources, tradershubClientVariables, tradershub_CFDFlows_TempCFDs_mvc_TranslationsResources, tradershub_CFDFlowsController, tradershub_CFDFlows_TempCFDs_mvc_controller_OnClickCreatedAccount_JavaScript1JS, tradershub_CFDFlows_TempCFDs_mvc_controller_GetAvailableCFDAccounts_ModifyDataJS, tradershub_CFDFlows_TempCFDs_mvc_controller_CopyToClipboard_JavaScript1JS, tradershub_CFDFlows_TempCFDs_mvc_controller_GetCreatedCFDAccounts_ModifyDataJS, tradershub_CFDFlows_TempCFDs_mvc_controller_OnClickAvailableAccount_CheckIsPasswordSetJS, tradershub_CFDFlows_TempCFDs_mvc_controller_OnClickAvailableAccount_GetSelectedPlatformJS, tradershub_CFDFlows_TempCFDs_mvc_controller_CTraderAccountCreation_GeneratePayloadJS) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, tradershub_CFDFlows_TempCFDs_mvc_TranslationsResources);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getCfdProductConfigs$AggrRefresh: 0
};
this.dataFetchDependentsGraph = {
getCfdProductConfigs$AggrRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}

// Server Actions - Methods

// Aggregates and Data Actions
get getCfdProductConfigs$AggrRefresh() {if(!(this.hasOwnProperty("_getCfdProductConfigs$AggrRefresh"))) {
this._getCfdProductConfigs$AggrRefresh = function () {
var innerBody = function (maxRecords, startIndex, callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetCfdProductConfigs", "screenservices/tradershub/CFDFlows/TempCFDs/ScreenDataSetGetCfdProductConfigs", "LlZVAbpFH1HzLCMuLpgPnQ", maxRecords, startIndex, function (b) {
model.variables.getCfdProductConfigsAggr.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getCfdProductConfigsAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getCfdProductConfigsAggr.constructor));
}, undefined, undefined, undefined, callContext, undefined, true).then(function () {
return controller._onAfterFetch$Action(controller.callContext(callContext));
});
}.bind(this);
return OS.Logger.startActiveSpan("GetCfdProductConfigs", function (span) {
if(span) {
span.setAttribute("code.function", "GetCfdProductConfigs");
span.setAttribute("outsystems.function.key", "8d0dfedd-94be-4b16-80e6-9d1adf836ca0");
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

return this._getCfdProductConfigs$AggrRefresh;
}set getCfdProductConfigs$AggrRefresh(value) {this._getCfdProductConfigs$AggrRefresh = value;
}


get dataFetchActionNames() {if(!(this.hasOwnProperty("_dataFetchActionNames"))) {
this._dataFetchActionNames = ["getCfdProductConfigs$AggrRefresh"];
}

return this._dataFetchActionNames;
}set dataFetchActionNames(value) {this._dataFetchActionNames = value;
}

// Client Actions - Methods
get _viewSpecificationsOnClick$Action() {if(!(this.hasOwnProperty("__viewSpecificationsOnClick$Action"))) {
this.__viewSpecificationsOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("ViewSpecificationsOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "ViewSpecificationsOnClick");
span.setAttribute("outsystems.function.key", "077da328-3dc3-48d3-b151-a640489c825f");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("ViewSpecificationsOnClick");
callContext = controller.callContext(callContext);
// Destination: /tradershub/TradingSpecification
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "TradingSpecification", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__viewSpecificationsOnClick$Action;
}set _viewSpecificationsOnClick$Action(value) {this.__viewSpecificationsOnClick$Action = value;
}

get _onClickCreatedAccount$Action() {if(!(this.hasOwnProperty("__onClickCreatedAccount$Action"))) {
this.__onClickCreatedAccount$Action = function (platformProductIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnClickCreatedAccount", function (span) {
if(span) {
span.setAttribute("code.function", "OnClickCreatedAccount");
span.setAttribute("outsystems.function.key", "1e2c6c73-4a87-464e-8f6b-91b40b77bd56");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnClickCreatedAccount");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("tradershub.CFDFlows.TempCFDs.OnClickCreatedAccount$vars"))());
vars.value.platformProductInLocal = platformProductIn;
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
javaScript1JSResult.value = OS.Logger.startActiveSpan("JavaScript1", function (span) {
if(span) {
span.setAttribute("code.function", "JavaScript1");
span.setAttribute("outsystems.function.key", "724c7452-0f62-4df7-a613-3a2c0abbbc0c");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_CFDFlows_TempCFDs_mvc_controller_OnClickCreatedAccount_JavaScript1JS, "JavaScript1", "OnClickCreatedAccount", {
In1: OS.DataConversion.JSNodeParamConverter.to(vars.value.platformProductInLocal, OS.DataTypes.DataTypes.Text),
Out1: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.CFDFlows.TempCFDs.OnClickCreatedAccount$javaScript1JSResult"))();
jsNodeResult.out1Out = OS.DataConversion.JSNodeParamConverter.from($parameters.Out1, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// SetSelectedPlatform
// SelectedPlatform = JavaScript1.Out1
model.variables.selectedPlatformVar = javaScript1JSResult.value.out1Out;
// SelectedProduct = SelectedProduct
tradershubClientVariables.setSelectedProduct(model.variables.selectedProductVar);
// SelectedProductIdentifier = PlatformProduct
model.variables.selectedProductIdentifierVar = vars.value.platformProductInLocal;
// ToggleTradeModal
// ShowTradePopup = True
model.variables.showTradePopupVar = true;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onClickCreatedAccount$Action;
}set _onClickCreatedAccount$Action(value) {this.__onClickCreatedAccount$Action = value;
}

get _closePasswordModal$Action() {if(!(this.hasOwnProperty("__closePasswordModal$Action"))) {
this.__closePasswordModal$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("ClosePasswordModal", function (span) {
if(span) {
span.setAttribute("code.function", "ClosePasswordModal");
span.setAttribute("outsystems.function.key", "2252844b-a8c3-4f3b-ab4a-567e8093097f");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("ClosePasswordModal");
callContext = controller.callContext(callContext);
// ShowPasswordPopup = False
model.variables.showPasswordPopupVar = false;
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

get _setCreatedCFDAccounts$Action() {if(!(this.hasOwnProperty("__setCreatedCFDAccounts$Action"))) {
this.__setCreatedCFDAccounts$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("SetCreatedCFDAccounts", function (span) {
if(span) {
span.setAttribute("code.function", "SetCreatedCFDAccounts");
span.setAttribute("outsystems.function.key", "4feb00b4-f0a0-44b7-9b6e-62f2f9f1c8b8");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("SetCreatedCFDAccounts");
callContext = controller.callContext(callContext);
var jSONDeserializeDemoResponseVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936))());
var jSONDeserializeRealResponseVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936))());
// JSON Deserialize: JSONDeserializeRealResponse
jSONDeserializeRealResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(tradershubClientVariables.getCreatedCFDRealAccounts(), tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936, false);
// JSON Deserialize: JSONDeserializeDemoResponse
jSONDeserializeDemoResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(tradershubClientVariables.getCreatedCFDDemoAccounts(), tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936, false);
// IsRealAccount
if(((tradershubClientVariables.getAccountType() === "real"))) {
// CreatedCFDAccounts = JSONDeserializeRealResponse.Data
model.variables.createdCFDAccountsVar = jSONDeserializeRealResponseVar.value.dataOut;
} else {
// CreatedCFDAccounts = JSONDeserializeDemoResponse.Data
model.variables.createdCFDAccountsVar = jSONDeserializeDemoResponseVar.value.dataOut;
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__setCreatedCFDAccounts$Action;
}set _setCreatedCFDAccounts$Action(value) {this.__setCreatedCFDAccounts$Action = value;
}

get _getAvailableCFDAccounts$Action() {if(!(this.hasOwnProperty("__getAvailableCFDAccounts$Action"))) {
this.__getAvailableCFDAccounts$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("GetAvailableCFDAccounts", function (span) {
if(span) {
span.setAttribute("code.function", "GetAvailableCFDAccounts");
span.setAttribute("outsystems.function.key", "624a0b3d-391b-4ecf-b1bf-6d139a3821cd");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("GetAvailableCFDAccounts");
callContext = controller.callContext(callContext);
var dxtradeAvailableAccountsVar = new OS.DataTypes.VariableHolder();
var cTraderAvailableAccountsVar = new OS.DataTypes.VariableHolder();
var mT5AvailableAccountsVar = new OS.DataTypes.VariableHolder();
var modifyDataJSResult = new OS.DataTypes.VariableHolder();
var jSONSerializeMT5Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var createdCFDAccountVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var cfdProductConfigsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONSerializeCTraderVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONSerializeDxtradeVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONDeserializeModifyDataVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936))());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: MT5AvailableAccounts
model.flush();
return tradershubController.default.mT5AvailableAccounts$Action(callContext).then(function (value) {
mT5AvailableAccountsVar.value = value;
}).then(function () {
// JSON Serialize: JSONSerializeMT5
jSONSerializeMT5Var.value.jSONOut = OS.JSONUtils.serializeToJSON(mT5AvailableAccountsVar.value.responseOut, false, false);
// Execute Action: CTraderAvailableAccounts
model.flush();
return tradershubController.default.cTraderAvailableAccounts$Action(callContext).then(function (value) {
cTraderAvailableAccountsVar.value = value;
});
}).then(function () {
// JSON Serialize: JSONSerializeCTrader
jSONSerializeCTraderVar.value.jSONOut = OS.JSONUtils.serializeToJSON(cTraderAvailableAccountsVar.value.responseOut, false, false);
// Execute Action: DxtradeAvailableAccounts
model.flush();
return tradershubController.default.dxtradeAvailableAccounts$Action(callContext).then(function (value) {
dxtradeAvailableAccountsVar.value = value;
});
}).then(function () {
// JSON Serialize: JSONSerializeDxtrade
jSONSerializeDxtradeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(dxtradeAvailableAccountsVar.value.responseOut, false, false);
// JSON Serialize: CfdProductConfigs
cfdProductConfigsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.getCfdProductConfigsAggr.listOut, false, false);
// JSON Serialize: CreatedCFDAccount
createdCFDAccountVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.createdCFDAccountsVar, false, false);
modifyDataJSResult.value = OS.Logger.startActiveSpan("ModifyData", function (span) {
if(span) {
span.setAttribute("code.function", "ModifyData");
span.setAttribute("outsystems.function.key", "db2cca34-9ec6-4f4b-afd0-95d457a3f332");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_CFDFlows_TempCFDs_mvc_controller_GetAvailableCFDAccounts_ModifyDataJS, "ModifyData", "GetAvailableCFDAccounts", {
CreatedAccounts: OS.DataConversion.JSNodeParamConverter.to(createdCFDAccountVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
DxtradeResponse: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeDxtradeVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
CTraderResponse: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeCTraderVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
CFDConfig: OS.DataConversion.JSNodeParamConverter.to(cfdProductConfigsVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
MT5Response: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeMT5Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
FilteredAvailableAccounts: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.CFDFlows.TempCFDs.GetAvailableCFDAccounts$modifyDataJSResult"))();
jsNodeResult.filteredAvailableAccountsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FilteredAvailableAccounts, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeModifyData
jSONDeserializeModifyDataVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(modifyDataJSResult.value.filteredAvailableAccountsOut, tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936, false);
// AvailableCFDAccounts = JSONDeserializeModifyData.Data
model.variables.availableCFDAccountsVar = jSONDeserializeModifyDataVar.value.dataOut;
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

return this.__getAvailableCFDAccounts$Action;
}set _getAvailableCFDAccounts$Action(value) {this.__getAvailableCFDAccounts$Action = value;
}

get _ctImportantNotesOnClick$Action() {if(!(this.hasOwnProperty("__ctImportantNotesOnClick$Action"))) {
this.__ctImportantNotesOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("CtImportantNotesOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "CtImportantNotesOnClick");
span.setAttribute("outsystems.function.key", "752745a8-1263-4d69-acfe-f3769337a202");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("CtImportantNotesOnClick");
callContext = controller.callContext(callContext);
// ShowCtraderImportantNotes = notShowCtraderImportantNotes
model.variables.showCtraderImportantNotesVar = !(model.variables.showCtraderImportantNotesVar);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__ctImportantNotesOnClick$Action;
}set _ctImportantNotesOnClick$Action(value) {this.__ctImportantNotesOnClick$Action = value;
}

get _copyToClipboard$Action() {if(!(this.hasOwnProperty("__copyToClipboard$Action"))) {
this.__copyToClipboard$Action = function (textToCopyIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("CopyToClipboard", function (span) {
if(span) {
span.setAttribute("code.function", "CopyToClipboard");
span.setAttribute("outsystems.function.key", "923e8634-50c6-4453-ab24-bdd97b1dc412");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("CopyToClipboard");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("tradershub.CFDFlows.TempCFDs.CopyToClipboard$vars"))());
vars.value.textToCopyInLocal = textToCopyIn;
OS.Logger.startActiveSpan("JavaScript1", function (span) {
if(span) {
span.setAttribute("code.function", "JavaScript1");
span.setAttribute("outsystems.function.key", "f7d0cae1-630a-4c54-ad01-af63f6ac3415");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_CFDFlows_TempCFDs_mvc_controller_CopyToClipboard_JavaScript1JS, "JavaScript1", "CopyToClipboard", {
TextToCopy: OS.DataConversion.JSNodeParamConverter.to(vars.value.textToCopyInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
OS.FeedbackMessageService.showFeedbackMessage("Copied!", /*Info*/ 0);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__copyToClipboard$Action;
}set _copyToClipboard$Action(value) {this.__copyToClipboard$Action = value;
}

get _cFDTradeModalOnCloseClick$Action() {if(!(this.hasOwnProperty("__cFDTradeModalOnCloseClick$Action"))) {
this.__cFDTradeModalOnCloseClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("CFDTradeModalOnCloseClick", function (span) {
if(span) {
span.setAttribute("code.function", "CFDTradeModalOnCloseClick");
span.setAttribute("outsystems.function.key", "a06f4a18-3ebe-4684-8949-34427d116ff9");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("CFDTradeModalOnCloseClick");
callContext = controller.callContext(callContext);
// ShowTradePopup = notShowTradePopup
model.variables.showTradePopupVar = !(model.variables.showTradePopupVar);
// SelectedProduct = ""
model.variables.selectedProductVar = "";
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__cFDTradeModalOnCloseClick$Action;
}set _cFDTradeModalOnCloseClick$Action(value) {this.__cFDTradeModalOnCloseClick$Action = value;
}

get _getCreatedCFDAccounts$Action() {if(!(this.hasOwnProperty("__getCreatedCFDAccounts$Action"))) {
this.__getCreatedCFDAccounts$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("GetCreatedCFDAccounts", function (span) {
if(span) {
span.setAttribute("code.function", "GetCreatedCFDAccounts");
span.setAttribute("outsystems.function.key", "a5b02261-96bd-4099-b0da-06ec07e00231");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("GetCreatedCFDAccounts");
callContext = controller.callContext(callContext);
var cTraderTradingPlatformAccountsVar = new OS.DataTypes.VariableHolder();
var dxtradeTradingPlatformAccountsVar = new OS.DataTypes.VariableHolder();
var mT5LoginListVar = new OS.DataTypes.VariableHolder();
var modifyDataJSResult = new OS.DataTypes.VariableHolder();
var jSONSerializeCFDConfigVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONSerializeDXTradingVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONSerializeMT5LoginListVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONSerializeCTraderVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: MT5LoginList
model.flush();
return tradershubController.default.mT5LoginList$Action(callContext).then(function (value) {
mT5LoginListVar.value = value;
}).then(function () {
// JSON Serialize: JSONSerializeMT5LoginList
jSONSerializeMT5LoginListVar.value.jSONOut = OS.JSONUtils.serializeToJSON(mT5LoginListVar.value.responseOut, false, false);
// Execute Action: CTraderTradingPlatformAccounts
model.flush();
return tradershubController.default.tradingPlatformAccounts$Action("ctrader", callContext).then(function (value) {
cTraderTradingPlatformAccountsVar.value = value;
});
}).then(function () {
// JSON Serialize: JSONSerializeCTrader
jSONSerializeCTraderVar.value.jSONOut = OS.JSONUtils.serializeToJSON(cTraderTradingPlatformAccountsVar.value.responseOut, false, false);
// Execute Action: DxtradeTradingPlatformAccounts
model.flush();
return tradershubController.default.tradingPlatformAccounts$Action("dxtrade", callContext).then(function (value) {
dxtradeTradingPlatformAccountsVar.value = value;
});
}).then(function () {
// JSON Serialize: JSONSerializeDXTrading
jSONSerializeDXTradingVar.value.jSONOut = OS.JSONUtils.serializeToJSON(dxtradeTradingPlatformAccountsVar.value.responseOut, false, false);
// CreatedMT5Accounts = MT5LoginList.Response
model.variables.createdMT5AccountsVar = mT5LoginListVar.value.responseOut;
// CreatedCTraderAccounts = CTraderTradingPlatformAccounts.Response
model.variables.createdCTraderAccountsVar = cTraderTradingPlatformAccountsVar.value.responseOut;
// CreatedDXTradeAccounts = DxtradeTradingPlatformAccounts.Response
model.variables.createdDXTradeAccountsVar = dxtradeTradingPlatformAccountsVar.value.responseOut;
// JSON Serialize: JSONSerializeCFDConfig
jSONSerializeCFDConfigVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.getCfdProductConfigsAggr.listOut, false, false);
modifyDataJSResult.value = OS.Logger.startActiveSpan("ModifyData", function (span) {
if(span) {
span.setAttribute("code.function", "ModifyData");
span.setAttribute("outsystems.function.key", "d012363d-2c84-4ec7-b284-4509968a3ad5");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_CFDFlows_TempCFDs_mvc_controller_GetCreatedCFDAccounts_ModifyDataJS, "ModifyData", "GetCreatedCFDAccounts", {
MT5Response: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeMT5LoginListVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
CTraderResponse: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeCTraderVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
DXTradeResponse: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeDXTradingVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
CFDConfig: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeCFDConfigVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
RealResponse: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
DemoResponse: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.CFDFlows.TempCFDs.GetCreatedCFDAccounts$modifyDataJSResult"))();
jsNodeResult.realResponseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.RealResponse, OS.DataTypes.DataTypes.Text);
jsNodeResult.demoResponseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DemoResponse, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// CreatedCFDRealAccounts = ModifyData.RealResponse
tradershubClientVariables.setCreatedCFDRealAccounts(modifyDataJSResult.value.realResponseOut);
// CreatedCFDDemoAccounts = ModifyData.DemoResponse
tradershubClientVariables.setCreatedCFDDemoAccounts(modifyDataJSResult.value.demoResponseOut);
// Execute Action: SetCreatedCFDAccounts
controller._setCreatedCFDAccounts$Action(callContext);
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

return this.__getCreatedCFDAccounts$Action;
}set _getCreatedCFDAccounts$Action(value) {this.__getCreatedCFDAccounts$Action = value;
}

get _accountCreated$Action() {if(!(this.hasOwnProperty("__accountCreated$Action"))) {
this.__accountCreated$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("AccountCreated", function (span) {
if(span) {
span.setAttribute("code.function", "AccountCreated");
span.setAttribute("outsystems.function.key", "b0fc76c0-dbcf-4382-ae6b-fb90435f277d");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("AccountCreated");
callContext = controller.callContext(callContext);
// ShowPasswordPopup = False
model.variables.showPasswordPopupVar = false;
// ShowTradePopup = True
model.variables.showTradePopupVar = true;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__accountCreated$Action;
}set _accountCreated$Action(value) {this.__accountCreated$Action = value;
}

get _setRealValue$Action() {if(!(this.hasOwnProperty("__setRealValue$Action"))) {
this.__setRealValue$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("SetRealValue", function (span) {
if(span) {
span.setAttribute("code.function", "SetRealValue");
span.setAttribute("outsystems.function.key", "be52f52f-2747-421f-9fcb-06cd2a0cb329");
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
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: SetCreatedCFDAccounts
controller._setCreatedCFDAccounts$Action(callContext);
// Execute Action: GetAvailableCFDAccounts
return controller._getAvailableCFDAccounts$Action(callContext).then(function () {
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

get _onClickAvailableAccount$Action() {if(!(this.hasOwnProperty("__onClickAvailableAccount$Action"))) {
this.__onClickAvailableAccount$Action = function (platformProductIn, marketTypeIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnClickAvailableAccount", function (span) {
if(span) {
span.setAttribute("code.function", "OnClickAvailableAccount");
span.setAttribute("outsystems.function.key", "c19ed181-251d-4ec2-aab7-7c90026b0511");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnClickAvailableAccount");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("tradershub.CFDFlows.TempCFDs.OnClickAvailableAccount$vars"))());
vars.value.platformProductInLocal = platformProductIn;
vars.value.marketTypeInLocal = marketTypeIn;
var getAccountStatusVar = new OS.DataTypes.VariableHolder();
var checkIsPasswordSetJSResult = new OS.DataTypes.VariableHolder();
var getSelectedPlatformJSResult = new OS.DataTypes.VariableHolder();
var jSONSerializeAccountStatusResponseVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
return OS.Flow.executeAsyncFlow(function () {
// IsLoggedIn
return OS.Flow.executeSequence(function () {
if((((tradershubClientVariables.getAuthToken()) !== ("")))) {
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
span.setAttribute("outsystems.function.key", "aa953f54-bb86-45ee-bb3a-fe63d188a88f");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_CFDFlows_TempCFDs_mvc_controller_OnClickAvailableAccount_CheckIsPasswordSetJS, "CheckIsPasswordSet", "OnClickAvailableAccount", {
AccountStatusResponse: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeAccountStatusResponseVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
IsMT5PasswordSet: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
IsDxtradePasswordSet: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.CFDFlows.TempCFDs.OnClickAvailableAccount$checkIsPasswordSetJSResult"))();
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
getSelectedPlatformJSResult.value = OS.Logger.startActiveSpan("GetSelectedPlatform", function (span) {
if(span) {
span.setAttribute("code.function", "GetSelectedPlatform");
span.setAttribute("outsystems.function.key", "d6cfb98d-d098-4c22-89e8-9c17bd507db5");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_CFDFlows_TempCFDs_mvc_controller_OnClickAvailableAccount_GetSelectedPlatformJS, "GetSelectedPlatform", "OnClickAvailableAccount", {
SelectedPlatformInput: OS.DataConversion.JSNodeParamConverter.to(vars.value.platformProductInLocal, OS.DataTypes.DataTypes.Text),
Platform: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Product: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.CFDFlows.TempCFDs.OnClickAvailableAccount$getSelectedPlatformJSResult"))();
jsNodeResult.platformOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Platform, OS.DataTypes.DataTypes.Text);
jsNodeResult.productOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Product, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// SelectedPlatform = GetSelectedPlatform.Platform
model.variables.selectedPlatformVar = getSelectedPlatformJSResult.value.platformOut;
// SelectedProduct = GetSelectedPlatform.Product
model.variables.selectedProductVar = getSelectedPlatformJSResult.value.productOut;
// IsPasswordSet = If
model.variables.isPasswordSetVar = (((model.variables.selectedPlatformVar === "mt5")) ? (checkIsPasswordSetJSResult.value.isMT5PasswordSetOut) : (checkIsPasswordSetJSResult.value.isDxtradePasswordSetOut));
}).then(function () {
// isCtrader?
return OS.Flow.executeSequence(function () {
if(((getSelectedPlatformJSResult.value.platformOut === "ctrader"))) {
// Execute Action: CTraderAccountCreation
return controller._cTraderAccountCreation$Action(vars.value.marketTypeInLocal, callContext);
} else {
// TogglePasswordModal
// ShowPasswordPopup = notShowPasswordPopup
model.variables.showPasswordPopupVar = !(model.variables.showPasswordPopupVar);
}

});
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

return this.__onClickAvailableAccount$Action;
}set _onClickAvailableAccount$Action(value) {this.__onClickAvailableAccount$Action = value;
}

get _confirmedNotResidentOnClick$Action() {if(!(this.hasOwnProperty("__confirmedNotResidentOnClick$Action"))) {
this.__confirmedNotResidentOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("ConfirmedNotResidentOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "ConfirmedNotResidentOnClick");
span.setAttribute("outsystems.function.key", "e21c28ab-f6b8-4a0f-9d4e-d81bddface77");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("ConfirmedNotResidentOnClick");
callContext = controller.callContext(callContext);
// ConfirmedNotResident = True
tradershubClientVariables.setConfirmedNotResident(true);
// ShowWarningPopup = False
model.variables.showWarningPopupVar = false;
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

get _setDemoValue$Action() {if(!(this.hasOwnProperty("__setDemoValue$Action"))) {
this.__setDemoValue$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("SetDemoValue", function (span) {
if(span) {
span.setAttribute("code.function", "SetDemoValue");
span.setAttribute("outsystems.function.key", "e40b2890-34ea-4ee3-96da-83830f977c54");
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
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: SetCreatedCFDAccounts
controller._setCreatedCFDAccounts$Action(callContext);
// Execute Action: GetAvailableCFDAccounts
return controller._getAvailableCFDAccounts$Action(callContext).then(function () {
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

get _cTraderAccountCreation$Action() {if(!(this.hasOwnProperty("__cTraderAccountCreation$Action"))) {
this.__cTraderAccountCreation$Action = function (marketTypeIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("CTraderAccountCreation", function (span) {
if(span) {
span.setAttribute("code.function", "CTraderAccountCreation");
span.setAttribute("outsystems.function.key", "fc214357-8301-46a7-9723-493fce2365a1");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("CTraderAccountCreation");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("tradershub.CFDFlows.TempCFDs.CTraderAccountCreation$vars"))());
vars.value.marketTypeInLocal = marketTypeIn;
var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
var generatePayloadJSResult = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
generatePayloadJSResult.value = OS.Logger.startActiveSpan("GeneratePayload", function (span) {
if(span) {
span.setAttribute("code.function", "GeneratePayload");
span.setAttribute("outsystems.function.key", "927d6811-23f5-4efe-b24f-773a5f0f73fb");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_CFDFlows_TempCFDs_mvc_controller_CTraderAccountCreation_GeneratePayloadJS, "GeneratePayload", "CTraderAccountCreation", {
AccountType: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getAccountType(), OS.DataTypes.DataTypes.Text),
MarketType: OS.DataConversion.JSNodeParamConverter.to(vars.value.marketTypeInLocal, OS.DataTypes.DataTypes.Text),
Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.CFDFlows.TempCFDs.CTraderAccountCreation$generatePayloadJSResult"))();
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
// Execute Action: ConsoleLog
BrowserConsoleLoggingController.default.consoleLog$Action(derivApiSendMessageVar.value.responseOut, 0, callContext);
// Execute Action: GetAvailableCFDAccounts
return controller._getAvailableCFDAccounts$Action(callContext).then(function () {
// Execute Action: GetCreatedCFDAccounts
return controller._getCreatedCFDAccounts$Action(callContext);
}).then(function () {
// ShowTradePopup = True
model.variables.showTradePopupVar = true;
OS.FeedbackMessageService.showFeedbackMessage("Your cTrader account is ready.", /*Success*/ 1);
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

get _onAfterFetch$Action() {if(!(this.hasOwnProperty("__onAfterFetch$Action"))) {
this.__onAfterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnAfterFetch", function (span) {
if(span) {
span.setAttribute("code.function", "OnAfterFetch");
span.setAttribute("outsystems.function.key", "fe302c81-a015-42e1-9727-ef0c5e9fec81");
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
// AvailableCFDAccounts = GetCfdProductConfigs.List
model.variables.availableCFDAccountsVar = OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getCfdProductConfigsAggr.listOut, new tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936(), function (source, target) {
target = source.cfdProductConfigAttr;
return target;
});
// HasToken
return OS.Flow.executeSequence(function () {
if((((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
// Execute Action: GetCreatedCFDAccounts
return controller._getCreatedCFDAccounts$Action(callContext);
} else {
// Execute Action: GetWebsiteStatus
model.flush();
return tradershubController.default.getWebsiteStatus$Action(callContext);
}

}).then(function () {
// Execute Action: GetAvailableCFDAccounts
return controller._getAvailableCFDAccounts$Action(callContext);
}).then(function () {
if(((model.variables.availableCFDAccountsVar.isEmpty && (tradershubClientVariables.getAuthToken() === OS.BuiltinFunctions.nullTextIdentifier())))) {
// AvailableCFDAccounts = GetCfdProductConfigs.List
model.variables.availableCFDAccountsVar = OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getCfdProductConfigsAggr.listOut, new tradershubModel.RL_9eb97ad6cb81943972e368260e0cb936(), function (source, target) {
target = source.cfdProductConfigAttr;
return target;
});
if((!(tradershubClientVariables.getConfirmedNotResident()))) {
// ShowWarningPopup = True
model.variables.showWarningPopupVar = true;
}

// IsLoading = False
model.variables.isLoadingVar = false;
} else {
// IsLoading = False
model.variables.isLoadingVar = false;
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


viewSpecificationsOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("ViewSpecificationsOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "ViewSpecificationsOnClick");
span.setAttribute("outsystems.function.key", "077da328-3dc3-48d3-b151-a640489c825f");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._viewSpecificationsOnClick$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

onClickCreatedAccount$Action(platformProductIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnClickCreatedAccount__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnClickCreatedAccount");
span.setAttribute("outsystems.function.key", "1e2c6c73-4a87-464e-8f6b-91b40b77bd56");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onClickCreatedAccount$Action, callContext, platformProductIn);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

closePasswordModal$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("ClosePasswordModal__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "ClosePasswordModal");
span.setAttribute("outsystems.function.key", "2252844b-a8c3-4f3b-ab4a-567e8093097f");
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

setCreatedCFDAccounts$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("SetCreatedCFDAccounts__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "SetCreatedCFDAccounts");
span.setAttribute("outsystems.function.key", "4feb00b4-f0a0-44b7-9b6e-62f2f9f1c8b8");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._setCreatedCFDAccounts$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

getAvailableCFDAccounts$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("GetAvailableCFDAccounts__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "GetAvailableCFDAccounts");
span.setAttribute("outsystems.function.key", "624a0b3d-391b-4ecf-b1bf-6d139a3821cd");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._getAvailableCFDAccounts$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

ctImportantNotesOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("CtImportantNotesOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "CtImportantNotesOnClick");
span.setAttribute("outsystems.function.key", "752745a8-1263-4d69-acfe-f3769337a202");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._ctImportantNotesOnClick$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

copyToClipboard$Action(textToCopyIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("CopyToClipboard__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "CopyToClipboard");
span.setAttribute("outsystems.function.key", "923e8634-50c6-4453-ab24-bdd97b1dc412");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._copyToClipboard$Action, callContext, textToCopyIn);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

cFDTradeModalOnCloseClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("CFDTradeModalOnCloseClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "CFDTradeModalOnCloseClick");
span.setAttribute("outsystems.function.key", "a06f4a18-3ebe-4684-8949-34427d116ff9");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._cFDTradeModalOnCloseClick$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

getCreatedCFDAccounts$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("GetCreatedCFDAccounts__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "GetCreatedCFDAccounts");
span.setAttribute("outsystems.function.key", "a5b02261-96bd-4099-b0da-06ec07e00231");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._getCreatedCFDAccounts$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

accountCreated$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("AccountCreated__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "AccountCreated");
span.setAttribute("outsystems.function.key", "b0fc76c0-dbcf-4382-ae6b-fb90435f277d");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._accountCreated$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

setRealValue$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("SetRealValue__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "SetRealValue");
span.setAttribute("outsystems.function.key", "be52f52f-2747-421f-9fcb-06cd2a0cb329");
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

onClickAvailableAccount$Action(platformProductIn, marketTypeIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnClickAvailableAccount__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnClickAvailableAccount");
span.setAttribute("outsystems.function.key", "c19ed181-251d-4ec2-aab7-7c90026b0511");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._onClickAvailableAccount$Action, callContext, platformProductIn, marketTypeIn);
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
span.setAttribute("outsystems.function.key", "e21c28ab-f6b8-4a0f-9d4e-d81bddface77");
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

setDemoValue$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("SetDemoValue__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "SetDemoValue");
span.setAttribute("outsystems.function.key", "e40b2890-34ea-4ee3-96da-83830f977c54");
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

cTraderAccountCreation$Action(marketTypeIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("CTraderAccountCreation__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "CTraderAccountCreation");
span.setAttribute("outsystems.function.key", "fc214357-8301-46a7-9723-493fce2365a1");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._cTraderAccountCreation$Action, callContext, marketTypeIn);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

onAfterFetch$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnAfterFetch__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnAfterFetch");
span.setAttribute("outsystems.function.key", "fe302c81-a015-42e1-9727-ef0c5e9fec81");
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
Controller.registerVariableGroupType("tradershub.CFDFlows.TempCFDs.OnClickCreatedAccount$vars", [{
name: "PlatformProduct",
attrName: "platformProductInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.CFDFlows.TempCFDs.OnClickCreatedAccount$javaScript1JSResult", [{
name: "Out1",
attrName: "out1Out",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.CFDFlows.TempCFDs.GetAvailableCFDAccounts$modifyDataJSResult", [{
name: "FilteredAvailableAccounts",
attrName: "filteredAvailableAccountsOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.CFDFlows.TempCFDs.CopyToClipboard$vars", [{
name: "TextToCopy",
attrName: "textToCopyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.CFDFlows.TempCFDs.GetCreatedCFDAccounts$modifyDataJSResult", [{
name: "RealResponse",
attrName: "realResponseOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DemoResponse",
attrName: "demoResponseOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.CFDFlows.TempCFDs.OnClickAvailableAccount$vars", [{
name: "PlatformProduct",
attrName: "platformProductInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MarketType",
attrName: "marketTypeInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.CFDFlows.TempCFDs.OnClickAvailableAccount$checkIsPasswordSetJSResult", [{
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
Controller.registerVariableGroupType("tradershub.CFDFlows.TempCFDs.OnClickAvailableAccount$getSelectedPlatformJSResult", [{
name: "Platform",
attrName: "platformOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Product",
attrName: "productOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.CFDFlows.TempCFDs.CTraderAccountCreation$vars", [{
name: "MarketType",
attrName: "marketTypeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.CFDFlows.TempCFDs.CTraderAccountCreation$generatePayloadJSResult", [{
name: "Payload",
attrName: "payloadOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

}
return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.CFDFlows.TempCFDs.mvc$controller.OnClickCreatedAccount.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Out1 =  $parameters.In1.split('_')[0];
};
});

define("tradershub.CFDFlows.TempCFDs.mvc$controller.GetAvailableCFDAccounts.ModifyDataJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const mt5Accounts = JSON.parse($parameters.MT5Response).trading_platform_available_accounts || [];
const cTraderAccounts = JSON.parse($parameters.CTraderResponse).trading_platform_available_accounts || [];
const dxtradeAccounts = JSON.parse($parameters.DxtradeResponse).trading_platform_available_accounts || [];

const cfdConfig = JSON.parse($parameters.CFDConfig);
const createdAccounts = JSON.parse($parameters.CreatedAccounts);

const modifyAccounts = (accounts) => accounts.map(account => ({
    ...account,
    identifier: `${account.platform}_${account.product}`
}));

const combinedPlatforms = [
    ...modifyAccounts(mt5Accounts),
    ...modifyAccounts(cTraderAccounts),
    ...modifyAccounts(dxtradeAccounts)
];

const mappedResult = combinedPlatforms.reduce((acc, platform) => {
    const matchedConfig = cfdConfig.find(config => config.CfdProductConfig.ProductIdentifier === platform.identifier);
    
    if (matchedConfig && !acc.some(item => item.ProductIdentifier === matchedConfig.CfdProductConfig.ProductIdentifier)) {
        acc.push({
            ...matchedConfig.CfdProductConfig,
            MarketsType: platform.market_type,
            IsAdded: false,
        });
    }
    
    return acc;
}, []);

const filteredAvailableAccounts = mappedResult.filter(account => 
    !createdAccounts.some(createdAccount => createdAccount.ProductIdentifier === account.ProductIdentifier)
);

$parameters.FilteredAvailableAccounts = JSON.stringify(filteredAvailableAccounts);

};
});

define("tradershub.CFDFlows.TempCFDs.mvc$controller.CopyToClipboard.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
navigator.clipboard.writeText($parameters.TextToCopy);
};
});

define("tradershub.CFDFlows.TempCFDs.mvc$controller.GetCreatedCFDAccounts.ModifyDataJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const mt5Accounts = JSON.parse($parameters.MT5Response).mt5_login_list || [];
const cTraderAccounts = JSON.parse($parameters.CTraderResponse).trading_platform_accounts || [];
const dxTradeAccounts = JSON.parse($parameters.DXTradeResponse).trading_platform_accounts || [];
const cfdConfig = JSON.parse($parameters.CFDConfig);

function modifyAccounts(accounts, type, platform) {
    return accounts.filter(account => account.account_type === type).map(account => {
        return {
            ...account,
            balance: account.balance,
            currency: account.currency,
            identifier: platform + '_' + (account.product || 'standard')
        };
    });
}

function calculateCTraderBalance(accounts, type) {
    return accounts.reduce((sum, account) => {
        return account.account_type === type
            ? sum + (account.balance || 0)
            : sum;
    }, 0);
}

const totalCTraderBalanceReal = calculateCTraderBalance(cTraderAccounts, 'real');
const totalCTraderBalanceDemo = calculateCTraderBalance(cTraderAccounts, 'demo');

const realAccounts = [
    ...modifyAccounts(mt5Accounts, 'real', 'mt5'),
    ...modifyAccounts(cTraderAccounts, 'real', 'ctrader'),
    ...modifyAccounts(dxTradeAccounts, 'real', 'dxtrade')
];

const demoAccounts = [
    ...modifyAccounts(mt5Accounts, 'demo', 'mt5'),
    ...modifyAccounts(cTraderAccounts, 'demo', 'ctrader'),
    ...modifyAccounts(dxTradeAccounts, 'demo', 'dxtrade')
];

function aggregateAccounts(accounts, cTraderBalance) {
    return accounts.reduce((acc, item) => {
        const matchedConfig = cfdConfig.find(c => c.CfdProductConfig.ProductIdentifier === item.identifier);

        if (matchedConfig && !acc.some(result => result.ProductIdentifier === matchedConfig.CfdProductConfig.ProductIdentifier)) {
            acc.push({
                ...matchedConfig.CfdProductConfig,
                TotalCTraderBalance: cTraderBalance,
                Balance1: item.display_balance || 0,
                Currency1: item.currency || "USD",
                Broker1: item.broker || "",
                Server1: item.server || "",
                Login1: item.login.replace(/^MTR/, '') || "",
                IsAdded: true,
            });
        }

        return acc;
    }, []);
}

const realAccountsResponse = aggregateAccounts(realAccounts, totalCTraderBalanceReal);
const demoAccountsResponse = aggregateAccounts(demoAccounts, totalCTraderBalanceDemo);

console.log("realAccountsResponse", realAccountsResponse);

$parameters.RealResponse = JSON.stringify(realAccountsResponse);
$parameters.DemoResponse = JSON.stringify(demoAccountsResponse);

};
});

define("tradershub.CFDFlows.TempCFDs.mvc$controller.OnClickAvailableAccount.CheckIsPasswordSetJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const accountStatus = JSON.parse($parameters.AccountStatusResponse);
const statuses = accountStatus?.get_account_status?.status || [];

$parameters.IsMT5PasswordSet = !statuses.includes("mt5_password_not_set");
$parameters.IsDxtradePasswordSet = !statuses.includes("dxtrade_password_not_set");

};
});

define("tradershub.CFDFlows.TempCFDs.mvc$controller.OnClickAvailableAccount.GetSelectedPlatformJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const splitResult = $parameters.SelectedPlatformInput.split('_');
$parameters.Platform = splitResult[0]; 
$parameters.Product = splitResult.slice(1).join('_');

};
});

define("tradershub.CFDFlows.TempCFDs.mvc$controller.CTraderAccountCreation.GeneratePayloadJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Payload = JSON.stringify({
    "platform": "ctrader",
    "account_type": $parameters.AccountType,
    "market_type": $parameters.MarketType,
    "company": "svg"
})

};
});


define("tradershub.CFDFlows.TempCFDs.mvc$translationsResources.fr-FR", [], function () {
return {
"5ihTwb73tkaxj7MjBx1lcQ#Value": "Voir les spécifications",
"liMEncvkU0aUQH4HeQjtxA#Value": "Comptes disponibles",
"3E3EKYyTeEK5jsW9c49Gbw#Value": "Mes comptes",
"O8yi9AoC902qkI0zwyvByg#Value": "Tradez des positions plus importantes avec moins de capital sur un large éventail de marchés mondiaux.",
"JvXT8FKvAkWxHS2WJzwefA#Value": "trading de CFD"
};
});

define("tradershub.CFDFlows.TempCFDs.mvc$translationsResources", ["exports", "tradershub.CFDFlows.TempCFDs.mvc$translationsResources.fr-FR"], function (exports, tradershub_CFDFlows_TempCFDs_mvc_translationsResources_frFR) {
return {
"fr-FR": {
"translations": tradershub_CFDFlows_TempCFDs_mvc_translationsResources_frFR,
"isRTL": false
}
};
});

