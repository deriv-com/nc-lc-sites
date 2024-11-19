define("tradershub.CFDBlocks.TempCFDTradeModal.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.controller", "RESTAPIWebsocketOfficial.model", "SharedUtilities.controller", "OutSystemsUI.controller$IsPhone", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$IsDesktop", "tradershub.model$ST_305c8a51ef2a193d12ca546593f55e60Structure", "RESTAPIWebsocketOfficial.model$ST_75725e65d106c1568a850780233a08baStructure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "SharedUtilities.controller$FormatMoney", "tradershub.referencesHealth$SharedUtilities", "OutSystemsUI.controller$GetOS", "tradershub.model$RC_07be8d7193ba16b1cc9d953b8fa48e9d", "tradershub.model$RL_ee1664da44e6893a731536d754684359", "tradershub.model$RC_d63c71568ad59ee17d766d503a162ca6", "tradershub.model$RL_030016655dc986d68e79b8c56a17e0d5"], function (OSRuntimeCore, tradershubModel, OutSystemsUIController, RESTAPIWebsocketOfficialModel, SharedUtilitiesController) {
var OS = OSRuntimeCore;
{class GetProductByProductIdentifierAggrRecInner extends 
OS.Model.AggregateRecord {
static attributesToDeclare() {
return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new GetProductByProductIdentifierAggrRec(new GetProductByProductIdentifierAggrRec.RecordClass({
RecordListType: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

GetProductByProductIdentifierAggrRecInner.RecordListType = tradershubModel.RL_ee1664da44e6893a731536d754684359;
var GetProductByProductIdentifierAggrRec = GetProductByProductIdentifierAggrRecInner;
GetProductByProductIdentifierAggrRec.init();
}
{class GetLinksByPlatformAggrRecInner extends 
OS.Model.AggregateRecord {
static attributesToDeclare() {
return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new GetLinksByPlatformAggrRec(new GetLinksByPlatformAggrRec.RecordClass({
RecordListType: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

GetLinksByPlatformAggrRecInner.RecordListType = tradershubModel.RL_030016655dc986d68e79b8c56a17e0d5;
var GetLinksByPlatformAggrRec = GetLinksByPlatformAggrRecInner;
GetLinksByPlatformAggrRec.init();
}


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Platform", "platformVar", "Platform", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("ShowCtraderImportantNotes", "showCtraderImportantNotesVar", "ShowCtraderImportantNotes", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("Broker", "brokerVar", "Broker", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("Server", "serverVar", "Server", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("Login", "loginVar", "Login", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("Balance", "balanceVar", "Balance", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("Currency", "currencyVar", "Currency", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("CtraderTotalBalance", "ctraderTotalBalanceVar", "CtraderTotalBalance", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("IsVisible", "isVisibleIn", "IsVisible", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("SelectedProductArg", "selectedProductArgIn", "SelectedProductArg", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_selectedProductArgInDataFetchStatus", "_selectedProductArgInDataFetchStatus", "_selectedProductArgInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("CreatedMt5Accounts", "createdMt5AccountsIn", "CreatedMt5Accounts", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_305c8a51ef2a193d12ca546593f55e60Structure());
}, false, tradershubModel.ST_305c8a51ef2a193d12ca546593f55e60Structure), 
this.attr("_createdMt5AccountsInDataFetchStatus", "_createdMt5AccountsInDataFetchStatus", "_createdMt5AccountsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("CreatedCtraderAccounts", "createdCtraderAccountsIn", "CreatedCtraderAccounts", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_75725e65d106c1568a850780233a08baStructure());
}, false, RESTAPIWebsocketOfficialModel.ST_75725e65d106c1568a850780233a08baStructure), 
this.attr("_createdCtraderAccountsInDataFetchStatus", "_createdCtraderAccountsInDataFetchStatus", "_createdCtraderAccountsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("CreatedDxtradeAccounts", "createdDxtradeAccountsIn", "CreatedDxtradeAccounts", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_75725e65d106c1568a850780233a08baStructure());
}, false, RESTAPIWebsocketOfficialModel.ST_75725e65d106c1568a850780233a08baStructure), 
this.attr("_createdDxtradeAccountsInDataFetchStatus", "_createdDxtradeAccountsInDataFetchStatus", "_createdDxtradeAccountsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("GetProductByProductIdentifier", "getProductByProductIdentifierAggr", "GetProductByProductIdentifier", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetProductByProductIdentifierAggrRec());
}, true, GetProductByProductIdentifierAggrRec), 
this.attr("GetLinksByPlatform", "getLinksByPlatformAggr", "GetLinksByPlatform", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetLinksByPlatformAggrRec());
}, true, GetLinksByPlatformAggrRec)
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

static get hasValidationWidgets() {return false;
}
setInputs(inputs) {
if("IsVisible" in inputs) {
this.variables.isVisibleIn = inputs.IsVisible;
if("_isVisibleInDataFetchStatus" in inputs) {
this.variables._isVisibleInDataFetchStatus = inputs._isVisibleInDataFetchStatus;
}

}

if("SelectedProductArg" in inputs) {
this.variables.selectedProductArgIn = inputs.SelectedProductArg;
if("_selectedProductArgInDataFetchStatus" in inputs) {
this.variables._selectedProductArgInDataFetchStatus = inputs._selectedProductArgInDataFetchStatus;
}

}

if("CreatedMt5Accounts" in inputs) {
this.variables.createdMt5AccountsIn = inputs.CreatedMt5Accounts;
if("_createdMt5AccountsInDataFetchStatus" in inputs) {
this.variables._createdMt5AccountsInDataFetchStatus = inputs._createdMt5AccountsInDataFetchStatus;
}

}

if("CreatedCtraderAccounts" in inputs) {
this.variables.createdCtraderAccountsIn = inputs.CreatedCtraderAccounts;
if("_createdCtraderAccountsInDataFetchStatus" in inputs) {
this.variables._createdCtraderAccountsInDataFetchStatus = inputs._createdCtraderAccountsInDataFetchStatus;
}

}

if("CreatedDxtradeAccounts" in inputs) {
this.variables.createdDxtradeAccountsIn = inputs.CreatedDxtradeAccounts;
if("_createdDxtradeAccountsInDataFetchStatus" in inputs) {
this.variables._createdDxtradeAccountsInDataFetchStatus = inputs._createdDxtradeAccountsInDataFetchStatus;
}

}

}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("tradershub.CFDBlocks.TempCFDTradeModal.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "RESTAPIWebsocketOfficial.model", "SharedUtilities.controller", "react", "@outsystems/runtime-view-js", "tradershub.CFDBlocks.TempCFDTradeModal.mvc$model", "tradershub.CFDBlocks.TempCFDTradeModal.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.controller$IsPhone", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$IsDesktop", "tradershub.model$ST_305c8a51ef2a193d12ca546593f55e60Structure", "RESTAPIWebsocketOfficial.model$ST_75725e65d106c1568a850780233a08baStructure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "SharedUtilities.controller$FormatMoney", "tradershub.referencesHealth$SharedUtilities", "OutSystemsUI.controller$GetOS", "tradershub.model$RC_07be8d7193ba16b1cc9d953b8fa48e9d", "tradershub.model$RL_ee1664da44e6893a731536d754684359", "tradershub.model$RC_d63c71568ad59ee17d766d503a162ca6", "tradershub.model$RL_030016655dc986d68e79b8c56a17e0d5"], function (OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, RESTAPIWebsocketOfficialModel, SharedUtilitiesController, React, OSView, tradershub_CFDBlocks_TempCFDTradeModal_mvc_model, tradershub_CFDBlocks_TempCFDTradeModal_mvc_controller, tradershubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "CFDBlocks.TempCFDTradeModal"; }

        static getAttributes() { return {
codeFunction: "TempCFDTradeModal",
functionKey: "5a13979a-0141-4001-bed1-57167d3a44f8",
functionOwnerName: "tradershub",
functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.CFDBlocks.TempCFDTradeModal.css"];
        }

        static getJsDependencies() {
            return ["scripts/tradershub.QRCodeJS.js"];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return tradershub_CFDBlocks_TempCFDTradeModal_mvc_model;
        }

        get controllerFactory() {
            return tradershub_CFDBlocks_TempCFDTradeModal_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Popup, {
extendedProperties: {
style: ("height: 100vh; padding: 16px;" + ((OutSystemsUIController.default.isPhone$Action(callContext).isPhoneOut) ? ("") : ("overflow:scroll")))
},
showPopup: (model.variables.isVisibleIn && model.variables.getProductByProductIdentifierAggr.isDataFetchedAttr),
style: "full-height-popup",
_idProps: {
service: idService,
name: "PopupWrapper"
},
_widgetRecordProvider: widgetsRecordProvider,
showPopup_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isVisibleInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "background-color: #fff; padding: 16px;"
},
style: "display-flex align-items-center",
visible: true,
_idProps: {
service: idService,
name: "Header"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.triggerCloseEvent$Action(controller.callContext(eventHandlerContext));
});
;
}
},
extendedProperties: {
style: "font-size: 18px;"
},
icon: "arrow-left",
iconSize: /*FontSize*/ 0,
style: "icon cursor-pointer",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.triggerCloseEvent$Action(controller.callContext(eventHandlerContext));
});
;
}
},
extendedProperties: {
style: "font-size: 18px; font-weight: bold;"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
value: "Account details",
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: ("padding: 16px;" + ((OutSystemsUIController.default.isPhone$Action(callContext).isPhoneOut) ? ("overflow: scroll; height: calc(100vh - 200px);") : ("")))
},
style: "display-flex flex-direction-column display-flex flex-1 gap-m",
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
style: "border-color: #dee2e6; border-radius: 8px; border-style: solid; border-width: 0px; padding: 0px;"
},
style: "display-flex justify-content-space-between align-items-center",
visible: true,
_idProps: {
service: idService,
name: "ProductRow"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex align-items-center flex-1",
visible: true,
_idProps: {
service: idService,
name: "IconAndText"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedProperties: {
style: "height: 40px; margin-right: 16px;"
},
gridProperties: {
width: "40px"
},
style: "display-flex ",
type: /*External*/ 1,
url: model.variables.getProductByProductIdentifierAggr.listOut.getCurrent(callContext.iterationContext).cfdProductConfigAttr.iconAttr,
_idProps: {
service: idService,
name: "ProductIcon"
},
_widgetRecordProvider: widgetsRecordProvider,
url_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductByProductIdentifierAggr.dataFetchStatusAttr)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline",
width: "100%"
},
visible: true,
_idProps: {
service: idService,
name: "ProductNameBalanceContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 16px; font-weight: bold;"
},
gridProperties: {
marginLeft: "0"
},
value: model.variables.getProductByProductIdentifierAggr.listOut.getCurrent(callContext.iterationContext).cfdProductConfigAttr.titleAttr,
_idProps: {
service: idService,
name: "ProductName"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductByProductIdentifierAggr.dataFetchStatusAttr)
}), React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
_idProps: {
service: idService,
name: "ProductBalanceLabel"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("TotalBalance.Value"), function () {
return (((OS.BuiltinFunctions.index(model.variables.selectedProductArgIn, "ctrader", 0, false, true) > -1)) ? ("Total balance: ") : (""));
}, function () {
return model.variables.selectedProductArgIn;
}),
_idProps: {
service: idService,
name: "TotalBalance"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._selectedProductArgInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
marginLeft: "0"
},
value: model.getCachedValue(idService.getId("ProductBalance.Value"), function () {
return (((model.variables.platformVar === "ctrader")) ? (model.variables.ctraderTotalBalanceVar) : (model.variables.balanceVar));
}, function () {
return model.variables.platformVar;
}, function () {
return model.variables.ctraderTotalBalanceVar;
}, function () {
return model.variables.balanceVar;
}),
_idProps: {
service: idService,
name: "ProductBalance"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
marginLeft: "0"
},
value: model.variables.currencyVar,
_idProps: {
service: idService,
name: "ProductCurrency"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: "background-color: #ff4450;"
},
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.triggerCloseEvent$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn gap-s",
visible: true,
_idProps: {
service: idService,
name: "TransferButton"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "color: #f3f6f8; font-style: normal; font-weight: normal; margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
},
gridProperties: {
marginLeft: "0px"
},
icon: "exchange",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #f3f6f8; font-size: 12px; font-weight: bold;"
},
text: [$text(getTranslation("xO3hRYYNVEO4wyld11azGA#Value", "Transfer"))],
_idProps: {
service: idService,
name: "TransferText"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column gap-s",
visible: true,
_idProps: {
service: idService,
name: "AccountInfoRow"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
style: "background-color: #f3f6f8; border-color: #dee2e6; border-radius: 8px; border-style: solid; border-width: 0px; height: 42px; padding: 16px;"
},
style: "display-flex justify-content-space-between align-items-center",
visible: (model.variables.platformVar === "dxtrade"),
_idProps: {
service: idService,
name: "DxUserRow"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width4"
},
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 12px;"
},
gridProperties: {
marginLeft: "0"
},
value: "Username",
_idProps: {
service: idService,
name: "UsernameLabel"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: right;"
},
gridProperties: {
classes: "ThemeGrid_Width8"
},
style: "display-flex align-items-center justify-content-flex-end",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 12px;"
},
gridProperties: {
marginLeft: "0"
},
value: model.variables.loginVar,
_idProps: {
service: idService,
name: "DynamicUsernameLabel"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Icon, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.copyToClipboard$Action(model.variables.loginVar, controller.callContext(eventHandlerContext));

;
}
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
icon: "clone",
iconSize: /*FontSize*/ 0,
style: "icon cursor-pointer",
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
style: "background-color: #f3f6f8; border-color: #dee2e6; border-radius: 8px; border-style: solid; border-width: 0px; height: 42px; padding: 16px;"
},
style: "display-flex justify-content-space-between align-items-center",
visible: (model.variables.platformVar === "mt5"),
_idProps: {
service: idService,
name: "MtBrokerRow"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width4"
},
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 12px;"
},
gridProperties: {
marginLeft: "0"
},
value: "Broker",
_idProps: {
service: idService,
name: "BrokerLabel"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: right;"
},
gridProperties: {
classes: "ThemeGrid_Width8"
},
style: "display-flex align-items-center justify-content-flex-end",
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 12px;"
},
gridProperties: {
marginLeft: "0"
},
value: model.variables.brokerVar,
_idProps: {
service: idService,
name: "DynamicBrokerLabel"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Icon, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.copyToClipboard$Action(model.variables.brokerVar, controller.callContext(eventHandlerContext));

;
}
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
icon: "clone",
iconSize: /*FontSize*/ 0,
style: "icon cursor-pointer",
visible: true,
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
style: "background-color: #f3f6f8; border-color: #dee2e6; border-radius: 8px; border-style: solid; border-width: 0px; height: 42px; padding: 16px;"
},
style: "display-flex justify-content-space-between align-items-center",
visible: (model.variables.platformVar === "mt5"),
_idProps: {
service: idService,
name: "MtServerRow"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width4"
},
visible: true,
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 12px;"
},
gridProperties: {
marginLeft: "0"
},
value: "Server",
_idProps: {
service: idService,
name: "ServerLabel"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: right;"
},
gridProperties: {
classes: "ThemeGrid_Width8"
},
style: "display-flex align-items-center justify-content-flex-end",
visible: true,
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 12px;"
},
gridProperties: {
marginLeft: "0"
},
value: model.variables.serverVar,
_idProps: {
service: idService,
name: "DynamicServerLabel"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Icon, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.copyToClipboard$Action(model.variables.serverVar, controller.callContext(eventHandlerContext));

;
}
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
icon: "clone",
iconSize: /*FontSize*/ 0,
style: "icon cursor-pointer",
visible: true,
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
style: "background-color: #f3f6f8; border-color: #dee2e6; border-radius: 8px; border-style: solid; border-width: 0px; height: 42px; padding: 16px;"
},
style: "display-flex justify-content-space-between align-items-center",
visible: (model.variables.platformVar === "mt5"),
_idProps: {
service: idService,
name: "MtLoginIdRow"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width4"
},
visible: true,
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 12px;"
},
gridProperties: {
marginLeft: "0"
},
value: "Login ID",
_idProps: {
service: idService,
name: "LoginIdLabel"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: right;"
},
gridProperties: {
classes: "ThemeGrid_Width8"
},
style: "display-flex align-items-center justify-content-flex-end",
visible: true,
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 12px;"
},
gridProperties: {
marginLeft: "0"
},
value: model.variables.loginVar,
_idProps: {
service: idService,
name: "DynamicLoginIdLabel"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Icon, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.copyToClipboard$Action(model.variables.loginVar, controller.callContext(eventHandlerContext));

;
}
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
icon: "clone",
iconSize: /*FontSize*/ 0,
style: "icon cursor-pointer",
visible: true,
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.createdCtraderAccountsIn.trading_platform_accountsAttr,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
name: "CtLoginBalanceRow"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._createdCtraderAccountsInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
style: "background-color: #fff; border-color: #f3f6f8; border-radius: 8px; border-style: solid; border-width: 1px; font-size: 12px; height: 42px; padding: 16px; text-align: right;"
},
style: "display-flex justify-content-space-between align-items-center",
visible: ((model.variables.platformVar === "ctrader") && (model.variables.createdCtraderAccountsIn.trading_platform_accountsAttr.getCurrent(callContext.iterationContext).account_typeAttr === tradershubClientVariables.getAccountType())),
_idProps: {
service: idService,
name: "CtLoginBalanceContainer"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._createdCtraderAccountsInDataFetchStatus),
_dependencies: [asPrimitiveValue(model.variables._createdCtraderAccountsInDataFetchStatus), asPrimitiveValue(model.variables.createdCtraderAccountsIn.trading_platform_accountsAttr.getCurrent(callContext.iterationContext).currencyAttr), asPrimitiveValue(model.variables.createdCtraderAccountsIn.trading_platform_accountsAttr.getCurrent(callContext.iterationContext).display_balanceAttr), asPrimitiveValue(model.variables.createdCtraderAccountsIn.trading_platform_accountsAttr.getCurrent(callContext.iterationContext).loginAttr)]
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-weight: normal;"
},
gridProperties: {
marginLeft: "0"
},
value: model.variables.createdCtraderAccountsIn.trading_platform_accountsAttr.getCurrent(callContext.iterationContext).loginAttr,
_idProps: {
service: idService,
name: "CtLoginId"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._createdCtraderAccountsInDataFetchStatus)
}), React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
_idProps: {
service: idService,
name: "CtBalance"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 12px;"
},
gridProperties: {
marginLeft: "0"
},
value: model.variables.createdCtraderAccountsIn.trading_platform_accountsAttr.getCurrent(callContext.iterationContext).display_balanceAttr,
_idProps: {
service: idService,
name: "ProductBalance2"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._createdCtraderAccountsInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 12px;"
},
gridProperties: {
marginLeft: "0"
},
value: model.variables.createdCtraderAccountsIn.trading_platform_accountsAttr.getCurrent(callContext.iterationContext).currencyAttr,
_idProps: {
service: idService,
name: "ProductCurrency2"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._createdCtraderAccountsInDataFetchStatus)
})))];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables._createdCtraderAccountsInDataFetchStatus), asPrimitiveValue(tradershubClientVariables.getAccountType()), asPrimitiveValue(model.variables.platformVar)]
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
style: "background-color: #fff; border-color: #222; border-radius: 8px; border-style: solid; border-width: 1px; height: 42px; padding: 16px;"
},
style: "display-flex justify-content-center align-items-center gap-s",
visible: (model.variables.platformVar === "ctrader"),
_idProps: {
service: idService,
name: "CtGetAnotherAccountRow"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "font-weight: normal;"
},
icon: "plus-circle",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-weight: normal;"
},
gridProperties: {
marginLeft: "0"
},
value: "Get another cTrader account",
_idProps: {
service: idService,
name: "GetAnotherAccountLabel"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "background-color: #f3f6f8; border-radius: 8px;"
},
visible: true,
_idProps: {
service: idService,
name: "CtImportantNotesContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.ctImportantNotesOnClick$Action(controller.callContext(eventHandlerContext));

;
}
},
extendedProperties: {
style: "border-bottom-left-radius: ; border-bottom-right-radius: ; border-color: #dee2e6; border-style: solid; border-top-left-radius: ; border-top-right-radius: ; border-width: 0px; height: 42px; padding: 16px;"
},
style: "display-flex justify-content-space-between align-items-center",
visible: (model.variables.platformVar === "ctrader"),
_idProps: {
service: idService,
name: "CtImportantNotes"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-weight: bold;"
},
gridProperties: {
marginLeft: "0"
},
value: "Important notes",
_idProps: {
service: idService,
name: "ImportantNotesLabel"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Icon, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
icon: "angle-down",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "54"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
style: "border-bottom-left-radius: ; border-bottom-right-radius: ; border-top-left-radius: ; border-top-right-radius: ; font-size: 12px; padding: 12px; position: relative; top: -12px;"
},
style: "display-flex flex-direction-column row-gap-xs",
visible: model.variables.showCtraderImportantNotesVar,
_idProps: {
service: idService,
name: "NotesContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("tj+ylJ9hSk6L1TXMOQH8bA#Value", "1. Log in to cTrader with your Deriv account email and password.")), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 12px;"
},
text: [$text(getTranslation("4XAj5bchLESQ+mQpXFd3RA#Value", "2. You can have up to 5 Deriv cTrader accounts."))],
_idProps: {
service: idService,
uuid: "56"
},
_widgetRecordProvider: widgetsRecordProvider
}), $text(getTranslation("SCqzdIXv2E+oyuWJTPJ3mA#Value", "3. You can make any cTrader account a strategy provider account. This change is permanent.")), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 12px;"
},
text: [$text(getTranslation("xQj2se9gI06AOCrpnUgeyw#Value", "4. If your strategy remains inactive for 30 days, it will be deleted automatically. You can create a new strategy on the same account afterwards."))],
_idProps: {
service: idService,
uuid: "57"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 12px;"
},
text: [$text(getTranslation("aXbc+fHYAUCNb3IZmfJMlw#Value", "5. You can impose fees when setting up a strategy."))],
_idProps: {
service: idService,
uuid: "58"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 12px;"
},
text: [$text(getTranslation("ZMe9061BXkqLtngTw+EMoA#Value", "6. Assign one of your existing accounts to process fees. The same \"Account for Fees\" can support multiple fee-based strategies."))],
_idProps: {
service: idService,
uuid: "59"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 12px;"
},
text: [$text(getTranslation("ZtDqnwn2lkSXtEc0Mgr50w#Value", "7. Free strategies do not require an \"Account for Fees\"."))],
_idProps: {
service: idService,
uuid: "60"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Label, {
extendedProperties: {
style: "margin-bottom: 0px; margin-right: 0px; margin-top: 12px; padding: 0px;"
},
gridProperties: {
classes: "OSFillParent",
marginLeft: "0px"
},
_idProps: {
service: idService,
name: "Footnote"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 12px;"
},
text: ["Note: An account "],
_idProps: {
service: idService,
uuid: "62"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 12px; font-weight: bold;"
},
text: [$text(getTranslation("C5X2lLmIpkOIqO4yZh28zg#Value", "can\'t be "))],
_idProps: {
service: idService,
uuid: "63"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 12px;"
},
text: [$text(getTranslation("YUIkAYjcVES_jEAFFuEZnA#Value", "both a strategy provider and a fee collection account. "))],
_idProps: {
service: idService,
uuid: "64"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 12px; font-weight: bold;"
},
text: [$text(getTranslation("ubxHpq+T40eMoeA9_8XDUw#Value", "Keep at least one account free from being a strategy provider "))],
_idProps: {
service: idService,
uuid: "65"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 12px;"
},
text: [$text(getTranslation("o3BMQQ6+gECaWGyoyrzgpg#Value", " to manage fee-based strategies effectively. "))],
_idProps: {
service: idService,
uuid: "66"
},
_widgetRecordProvider: widgetsRecordProvider
}))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
style: "text-align: right;"
},
visible: ((model.variables.platformVar) !== ("ctrader")),
_idProps: {
service: idService,
name: "ForgotPasswordRow"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 12px; font-weight: bold; text-decoration: underline;"
},
style: "cursor-pointer",
text: [$text(getTranslation("b5EJ1CtsTEyXNVQmCQmrpQ#Value", "Forgot password?"))],
_idProps: {
service: idService,
uuid: "68"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "border-color: #f3f6f8; border-radius: 8px; border-style: solid; border-width: 1px; padding: 16px;"
},
style: "display-flex gap-s",
visible: true,
_idProps: {
service: idService,
name: "MaintenanceNotesRow"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "color: #1a78cb; font-weight: normal; padding: 5px 0px 0px 0px;"
},
icon: "info-circle",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "70"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 12px;"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
value: model.getCachedValue(idService.getId("64wjQsoZMkmfBCdmWrUIoQ.Value"), function () {
return ((((model.variables.platformVar === "mt5")) ? ("Weekly maintenance: Sundays at 01:00 GMT for up to 2 hours.") : ((((model.variables.platformVar === "dxtrade")) ? ("Weekly maintenance: Sundays at 06:00 GMT for up to 2 hours.") : ("Scheduled downtime: Monthly on the first Saturday, 07:00-10:00 GMT.")))) + " Service may be affected.");
}, function () {
return model.variables.platformVar;
}),
_idProps: {
service: idService,
uuid: "71"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
className: model.getCachedValue(idService.getId("StickyFooter.class"), function () {
return ((OutSystemsUIController.default.isPhone$Action(callContext).isPhoneOut) ? ("cfd-modal-sticky-footer") : (""));
}),
style: "font-weight: bold; padding: 16px; text-align: center;"
},
gridProperties: {
classes: "ThemeGrid_Width12"
},
style: "display-flex flex-direction-column align-items-center justify-content-space-between gap-m",
visible: true,
_idProps: {
service: idService,
name: "StickyFooter"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column gap-s",
visible: true,
_idProps: {
service: idService,
name: "CTAButtonsContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: ("background-color: #1a78cb; color: #f3f6f8; font-weight: normal; height: 48px; padding: 16px;" + (((model.variables.platformVar === "mt5")) ? ("background:#1a78cb") : ("background:#ff4450")))
},
gridProperties: {
classes: "OSFillParent",
marginLeft: "0"
},
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.triggerCloseEvent$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary",
visible: model.getCachedValue(idService.getId("MobileDownloadAppLink.Visible"), function () {
return OutSystemsUIController.default.isPhone$Action(callContext).isPhoneOut;
}),
_idProps: {
service: idService,
name: "MobileDownloadAppLink"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "mobile",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "75"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 16px;"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter",
width: "auto"
},
value: model.getCachedValue(idService.getId("0fJ2fSSHWUSW3rg1KPyipA.Value"), function () {
return ((((model.variables.platformVar === "mt5")) ? ("MetaTrader 5") : ((((model.variables.platformVar === "dxtrade")) ? ("DerivX") : ("cTrader")))) + " app");
}, function () {
return model.variables.platformVar;
}),
_idProps: {
service: idService,
uuid: "76"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: ("border-radius: 100px; font-weight: normal; height: 48px; padding: 16px;" + ((OutSystemsUIController.default.isPhone$Action(callContext).isPhoneOut) ? ("background:#f3f6f8") : ((((model.variables.platformVar === "mt5")) ? ("background:#1a78cb") : ("background:#ff4450")))))
},
gridProperties: {
classes: "OSFillParent",
marginLeft: "0"
},
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.onClickWebterminal$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
name: "WebTerminalLink"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: model.getCachedValue(idService.getId("dKoNqf2Dg0ym5_cJCkR_iw.style"), function () {
return ((OutSystemsUIController.default.isPhone$Action(callContext).isPhoneOut) ? ("color:black") : ("color:white"));
})
},
icon: "globe",
iconSize: /*FontSize*/ 0,
style: "\"icon\"",
visible: true,
_idProps: {
service: idService,
uuid: "78"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: ("font-size: 16px;" + ((OutSystemsUIController.default.isPhone$Action(callContext).isPhoneOut) ? ("color:black") : ("color:white")))
},
gridProperties: {
classes: "ThemeGrid_MarginGutter",
width: "auto"
},
value: model.getCachedValue(idService.getId("c3XbLmUbGU2ZAxpri1gUfw.Value"), function () {
return ((((model.variables.platformVar === "mt5")) ? ("MetaTrader 5") : ((((model.variables.platformVar === "dxtrade")) ? ("DerivX") : ("cTrader")))) + " web terminal");
}, function () {
return model.variables.platformVar;
}),
_idProps: {
service: idService,
uuid: "79"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: "background-color: #f3f6f8; color: #222; font-weight: normal; height: 48px; padding: 16px;"
},
gridProperties: {
classes: "OSFillParent",
marginLeft: "0"
},
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.triggerCloseEvent$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary",
visible: model.getCachedValue(idService.getId("DesktopDownloadAppLink.Visible"), function () {
return OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut;
}),
_idProps: {
service: idService,
name: "DesktopDownloadAppLink"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "desktop",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "81"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 16px;"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter",
width: "auto"
},
value: model.getCachedValue(idService.getId("JB1ZgyFNuk2M_LWU4IjoPQ.Value"), function () {
return ((((model.variables.platformVar === "mt5")) ? ("MetaTrader 5") : ((((model.variables.platformVar === "dxtrade")) ? ("DerivX") : ("cTrader")))) + " app");
}, function () {
return model.variables.platformVar;
}),
_idProps: {
service: idService,
uuid: "82"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
style: "margin-bottom: 16px; margin-top: 16px; text-align: center;"
},
style: "display-flex justify-content-center column-gap-xs",
visible: model.getCachedValue(idService.getId("AvailableForMacOSAndLinuxText.Visible"), function () {
return (OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut && (model.variables.platformVar === "mt5"));
}, function () {
return model.variables.platformVar;
}),
_idProps: {
service: idService,
name: "AvailableForMacOSAndLinuxText"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "Availablefor"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 12px; font-weight: normal;"
},
text: [$text(getTranslation("we741TFz1EasmL0oN57fAg#Value", "Available for"))],
_idProps: {
service: idService,
uuid: "85"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.triggerCloseEvent$Action(controller.callContext(eventHandlerContext));
});
;
}
},
visible: true,
_idProps: {
service: idService,
name: "MacOS"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 12px; font-weight: normal; text-decoration: underline;"
},
style: "cursor-pointer",
text: [$text(getTranslation("qJrvDlW_Jk+7MFJ3VifMAQ#Value", "macOS"))],
_idProps: {
service: idService,
uuid: "87"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "and2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 12px; font-weight: normal;"
},
text: [$text(getTranslation("gK8lNr2D+kmMZS05OAhRRA#Value", " and "))],
_idProps: {
service: idService,
uuid: "89"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.triggerCloseEvent$Action(controller.callContext(eventHandlerContext));
});
;
}
},
visible: true,
_idProps: {
service: idService,
name: "Linux"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 12px; font-weight: normal; text-decoration: underline;"
},
style: " cursor-pointer",
text: [$text(getTranslation("CjVwwt8KLESYO_3XnqT0BQ#Value", "Linux."))],
_idProps: {
service: idService,
uuid: "91"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
style: "border-color: #f3f6f8; border-radius: 4px; border-style: solid; border-width: 1px; margin-right: auto; padding: 8px; text-align: center;"
},
gridProperties: {
classes: "ThemeGrid_Width8",
marginLeft: "auto"
},
style: "display-flex flex-direction-column justify-content-center align-items-center align-self-center gap-s",
visible: model.getCachedValue(idService.getId("QRCode.Visible"), function () {
return (OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut && ((model.variables.platformVar) !== ("ctrader")));
}, function () {
return model.variables.platformVar;
}),
_idProps: {
service: idService,
name: "QRCode"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
gridProperties: {
width: "80px"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.qr_code.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "93"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 12px; font-weight: normal;"
},
text: [$text(getTranslation("jKi0Tz0wXU6fFqIvervMMA#Value", "Scan to download the mobile app."))],
_idProps: {
service: idService,
name: "ScanToDownloadText"
},
_widgetRecordProvider: widgetsRecordProvider
})))));
        }
    }

    return View;
});
define("tradershub.CFDBlocks.TempCFDTradeModal.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "RESTAPIWebsocketOfficial.model", "SharedUtilities.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.CFDBlocks.TempCFDTradeModal.mvc$translationsResources", "tradershub.CFDBlocks.TempCFDTradeModal.mvc$controller.CopyToClipboard.JavaScript1JS", "tradershub.CFDBlocks.TempCFDTradeModal.mvc$controller.OnParametersChanged.CtraderPropsJS", "tradershub.CFDBlocks.TempCFDTradeModal.mvc$controller.OnParametersChanged.GetSelectedProductConfigJS", "tradershub.CFDBlocks.TempCFDTradeModal.mvc$controller.OnParametersChanged.DxtradePropsJS", "tradershub.CFDBlocks.TempCFDTradeModal.mvc$controller.OnParametersChanged.Mt5PropsJS", "tradershub.CFDBlocks.TempCFDTradeModal.mvc$controller.OnClickWebterminal.RedirectDemoJS", "tradershub.CFDBlocks.TempCFDTradeModal.mvc$controller.OnClickWebterminal.RedirectLiveJS", "tradershub.CFDBlocks.TempCFDTradeModal.mvc$controller.OnClickWebterminal.RedirectWebTerminalJS", "OutSystemsUI.controller$IsPhone", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$IsDesktop", "tradershub.model$ST_305c8a51ef2a193d12ca546593f55e60Structure", "RESTAPIWebsocketOfficial.model$ST_75725e65d106c1568a850780233a08baStructure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "SharedUtilities.controller$FormatMoney", "tradershub.referencesHealth$SharedUtilities", "OutSystemsUI.controller$GetOS", "tradershub.model$RC_07be8d7193ba16b1cc9d953b8fa48e9d", "tradershub.model$RL_ee1664da44e6893a731536d754684359", "tradershub.model$RC_d63c71568ad59ee17d766d503a162ca6", "tradershub.model$RL_030016655dc986d68e79b8c56a17e0d5"], function (OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, RESTAPIWebsocketOfficialModel, SharedUtilitiesController, tradershubLanguageResources, tradershubClientVariables, tradershub_CFDBlocks_TempCFDTradeModal_mvc_TranslationsResources, tradershub_CFDBlocks_TempCFDTradeModal_mvc_controller_CopyToClipboard_JavaScript1JS, tradershub_CFDBlocks_TempCFDTradeModal_mvc_controller_OnParametersChanged_CtraderPropsJS, tradershub_CFDBlocks_TempCFDTradeModal_mvc_controller_OnParametersChanged_GetSelectedProductConfigJS, tradershub_CFDBlocks_TempCFDTradeModal_mvc_controller_OnParametersChanged_DxtradePropsJS, tradershub_CFDBlocks_TempCFDTradeModal_mvc_controller_OnParametersChanged_Mt5PropsJS, tradershub_CFDBlocks_TempCFDTradeModal_mvc_controller_OnClickWebterminal_RedirectDemoJS, tradershub_CFDBlocks_TempCFDTradeModal_mvc_controller_OnClickWebterminal_RedirectLiveJS, tradershub_CFDBlocks_TempCFDTradeModal_mvc_controller_OnClickWebterminal_RedirectWebTerminalJS) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, tradershub_CFDBlocks_TempCFDTradeModal_mvc_TranslationsResources);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getProductByProductIdentifier$AggrRefresh: -1,
getLinksByPlatform$AggrRefresh: 0
};
this.dataFetchDependentsGraph = {
getProductByProductIdentifier$AggrRefresh: [],
getLinksByPlatform$AggrRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}

// Server Actions - Methods

// Aggregates and Data Actions
get getProductByProductIdentifier$AggrRefresh() {if(!(this.hasOwnProperty("_getProductByProductIdentifier$AggrRefresh"))) {
this._getProductByProductIdentifier$AggrRefresh = function () {
var innerBody = function (maxRecords, startIndex, callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetProductByProductIdentifier", "screenservices/tradershub/CFDBlocks/TempCFDTradeModal/ScreenDataSetGetProductByProductIdentifier", "n6ArNfQMgyeTTnbGEedyBg", maxRecords, startIndex, function (b) {
model.variables.getProductByProductIdentifierAggr.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getProductByProductIdentifierAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getProductByProductIdentifierAggr.constructor));
}, undefined, undefined, undefined, callContext, undefined, true);
}.bind(this);
return OS.Logger.startActiveSpan("GetProductByProductIdentifier", function (span) {
if(span) {
span.setAttribute("code.function", "GetProductByProductIdentifier");
span.setAttribute("outsystems.function.key", "7f2bd152-2bc8-4496-a96c-a984605300e9");
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

return this._getProductByProductIdentifier$AggrRefresh;
}set getProductByProductIdentifier$AggrRefresh(value) {this._getProductByProductIdentifier$AggrRefresh = value;
}

get getLinksByPlatform$AggrRefresh() {if(!(this.hasOwnProperty("_getLinksByPlatform$AggrRefresh"))) {
this._getLinksByPlatform$AggrRefresh = function () {
var innerBody = function (maxRecords, startIndex, callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetLinksByPlatform", "screenservices/tradershub/CFDBlocks/TempCFDTradeModal/ScreenDataSetGetLinksByPlatform", "ERChAMPp4mcU0_YuaxNNXg", maxRecords, startIndex, function (b) {
model.variables.getLinksByPlatformAggr.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getLinksByPlatformAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getLinksByPlatformAggr.constructor));
}, undefined, undefined, undefined, callContext, undefined, true);
}.bind(this);
return OS.Logger.startActiveSpan("GetLinksByPlatform", function (span) {
if(span) {
span.setAttribute("code.function", "GetLinksByPlatform");
span.setAttribute("outsystems.function.key", "acb0ffcb-62f9-4ef3-a35f-a99bc5536ec4");
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

return this._getLinksByPlatform$AggrRefresh;
}set getLinksByPlatform$AggrRefresh(value) {this._getLinksByPlatform$AggrRefresh = value;
}


get dataFetchActionNames() {if(!(this.hasOwnProperty("_dataFetchActionNames"))) {
this._dataFetchActionNames = ["getProductByProductIdentifier$AggrRefresh", "getLinksByPlatform$AggrRefresh"];
}

return this._dataFetchActionNames;
}set dataFetchActionNames(value) {this._dataFetchActionNames = value;
}

// Client Actions - Methods
get _copyToClipboard$Action() {if(!(this.hasOwnProperty("__copyToClipboard$Action"))) {
this.__copyToClipboard$Action = function (textToCopyIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("CopyToClipboard", function (span) {
if(span) {
span.setAttribute("code.function", "CopyToClipboard");
span.setAttribute("outsystems.function.key", "10432ebf-75d1-491a-b051-8b83a260804e");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("CopyToClipboard");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("tradershub.CFDBlocks.TempCFDTradeModal.CopyToClipboard$vars"))());
vars.value.textToCopyInLocal = textToCopyIn;
OS.Logger.startActiveSpan("JavaScript1", function (span) {
if(span) {
span.setAttribute("code.function", "JavaScript1");
span.setAttribute("outsystems.function.key", "c078fb90-8be6-4239-b9cb-001032672aaa");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_CFDBlocks_TempCFDTradeModal_mvc_controller_CopyToClipboard_JavaScript1JS, "JavaScript1", "CopyToClipboard", {
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

get _ctImportantNotesOnClick$Action() {if(!(this.hasOwnProperty("__ctImportantNotesOnClick$Action"))) {
this.__ctImportantNotesOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("CtImportantNotesOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "CtImportantNotesOnClick");
span.setAttribute("outsystems.function.key", "39d83a7b-1708-4345-bae4-93130b8eead3");
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

get _onParametersChanged$Action() {if(!(this.hasOwnProperty("__onParametersChanged$Action"))) {
this.__onParametersChanged$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnParametersChanged", function (span) {
if(span) {
span.setAttribute("code.function", "OnParametersChanged");
span.setAttribute("outsystems.function.key", "5775e686-042b-4193-b30d-773c1db3bcf4");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
var formatMoneyVar = new OS.DataTypes.VariableHolder();
var formatMoney3Var = new OS.DataTypes.VariableHolder();
var formatMoney2Var = new OS.DataTypes.VariableHolder();
var ctraderPropsJSResult = new OS.DataTypes.VariableHolder();
var getSelectedProductConfigJSResult = new OS.DataTypes.VariableHolder();
var dxtradePropsJSResult = new OS.DataTypes.VariableHolder();
var mt5PropsJSResult = new OS.DataTypes.VariableHolder();
var jSONSerializeCtradeResVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONSerializeDxtradeResVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONSerializeMT5ResVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Check if IsVisible
return OS.Flow.executeSequence(function () {
if(((model.variables.isVisibleIn === true))) {
// Refresh Query: GetProductByProductIdentifier
var result = controller.getProductByProductIdentifier$AggrRefresh(50, 0, callContext);
model.flush();
return result.then(function () {
getSelectedProductConfigJSResult.value = OS.Logger.startActiveSpan("GetSelectedProductConfig", function (span) {
if(span) {
span.setAttribute("code.function", "GetSelectedProductConfig");
span.setAttribute("outsystems.function.key", "7ad79238-9d48-4cba-a176-eeb34031893e");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_CFDBlocks_TempCFDTradeModal_mvc_controller_OnParametersChanged_GetSelectedProductConfigJS, "GetSelectedProductConfig", "OnParametersChanged", {
SelectedProduct: OS.DataConversion.JSNodeParamConverter.to(model.variables.selectedProductArgIn, OS.DataTypes.DataTypes.Text),
Platform: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.CFDBlocks.TempCFDTradeModal.OnParametersChanged$getSelectedProductConfigJSResult"))();
jsNodeResult.platformOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Platform, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// Platform = GetSelectedProductConfig.Platform
model.variables.platformVar = getSelectedProductConfigJSResult.value.platformOut;
// Refresh Query: GetLinksByPlatform
var result = controller.getLinksByPlatform$AggrRefresh(50, 0, callContext);
model.flush();
return result;
}).then(function () {
// isMT5
if(((model.variables.platformVar === "mt5"))) {
// JSON Serialize: JSONSerializeMT5Res
jSONSerializeMT5ResVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.createdMt5AccountsIn, false, false);
mt5PropsJSResult.value = OS.Logger.startActiveSpan("Mt5Props", function (span) {
if(span) {
span.setAttribute("code.function", "Mt5Props");
span.setAttribute("outsystems.function.key", "a7d5b9c3-824d-4853-8bb9-a375bc15be6f");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_CFDBlocks_TempCFDTradeModal_mvc_controller_OnParametersChanged_Mt5PropsJS, "Mt5Props", "OnParametersChanged", {
SelectedProduct: OS.DataConversion.JSNodeParamConverter.to(model.variables.selectedProductArgIn, OS.DataTypes.DataTypes.Text),
Mt5Res: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeMT5ResVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
Broker: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Server: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Login: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Balance: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Currency: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.CFDBlocks.TempCFDTradeModal.OnParametersChanged$mt5PropsJSResult"))();
jsNodeResult.brokerOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Broker, OS.DataTypes.DataTypes.Text);
jsNodeResult.serverOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Server, OS.DataTypes.DataTypes.Text);
jsNodeResult.loginOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Login, OS.DataTypes.DataTypes.Text);
jsNodeResult.balanceOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Balance, OS.DataTypes.DataTypes.Text);
jsNodeResult.currencyOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Currency, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// Execute Action: FormatMoney3
formatMoney3Var.value = SharedUtilitiesController.default.formatMoney$Action(mt5PropsJSResult.value.balanceOut, "USD", "en-US", "", callContext);

// Broker = Mt5Props.Broker
model.variables.brokerVar = mt5PropsJSResult.value.brokerOut;
// Server = Mt5Props.Server
model.variables.serverVar = mt5PropsJSResult.value.serverOut;
// Login = Mt5Props.Login
model.variables.loginVar = mt5PropsJSResult.value.loginOut;
// Currency = Mt5Props.Currency
model.variables.currencyVar = mt5PropsJSResult.value.currencyOut;
// Balance = Mt5Props.Balance
model.variables.balanceVar = mt5PropsJSResult.value.balanceOut;
} else {
// isDxtrade
if(((model.variables.platformVar === "dxtrade"))) {
// JSON Serialize: JSONSerializeDxtradeRes
jSONSerializeDxtradeResVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.createdDxtradeAccountsIn, false, false);
dxtradePropsJSResult.value = OS.Logger.startActiveSpan("DxtradeProps", function (span) {
if(span) {
span.setAttribute("code.function", "DxtradeProps");
span.setAttribute("outsystems.function.key", "8f9b5059-9b2a-4b91-ae84-96df0c8d288e");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_CFDBlocks_TempCFDTradeModal_mvc_controller_OnParametersChanged_DxtradePropsJS, "DxtradeProps", "OnParametersChanged", {
AccountType: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getAccountType(), OS.DataTypes.DataTypes.Text),
SelectedProduct: OS.DataConversion.JSNodeParamConverter.to(model.variables.selectedProductArgIn, OS.DataTypes.DataTypes.Text),
DxRes: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeDxtradeResVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
Balance: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Currency: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Login: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.CFDBlocks.TempCFDTradeModal.OnParametersChanged$dxtradePropsJSResult"))();
jsNodeResult.balanceOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Balance, OS.DataTypes.DataTypes.Text);
jsNodeResult.currencyOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Currency, OS.DataTypes.DataTypes.Text);
jsNodeResult.loginOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Login, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// Execute Action: FormatMoney2
formatMoney2Var.value = SharedUtilitiesController.default.formatMoney$Action(dxtradePropsJSResult.value.balanceOut, "USD", "en-US", "", callContext);

// Balance = FormatMoney2.FormattedNumber
model.variables.balanceVar = formatMoney2Var.value.formattedNumberOut;
// Currency = DxtradeProps.Currency
model.variables.currencyVar = dxtradePropsJSResult.value.currencyOut;
// Login = DxtradeProps.Login
model.variables.loginVar = dxtradePropsJSResult.value.loginOut;
} else {
// JSON Serialize: JSONSerializeCtradeRes
jSONSerializeCtradeResVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.createdCtraderAccountsIn, false, false);
ctraderPropsJSResult.value = OS.Logger.startActiveSpan("CtraderProps", function (span) {
if(span) {
span.setAttribute("code.function", "CtraderProps");
span.setAttribute("outsystems.function.key", "5e7faef6-cce7-4b85-afa3-ad309561c2e4");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_CFDBlocks_TempCFDTradeModal_mvc_controller_OnParametersChanged_CtraderPropsJS, "CtraderProps", "OnParametersChanged", {
SelectedProduct: OS.DataConversion.JSNodeParamConverter.to(model.variables.selectedProductArgIn, OS.DataTypes.DataTypes.Text),
AccountType: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getAccountType(), OS.DataTypes.DataTypes.Text),
CtRes: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeCtradeResVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
Platform: OS.DataConversion.JSNodeParamConverter.to(model.variables.platformVar, OS.DataTypes.DataTypes.Text),
Login: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Balance: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Currency: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
TotalBalance: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.Decimal.defaultValue, OS.DataTypes.DataTypes.Decimal)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.CFDBlocks.TempCFDTradeModal.OnParametersChanged$ctraderPropsJSResult"))();
jsNodeResult.loginOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Login, OS.DataTypes.DataTypes.Text);
jsNodeResult.balanceOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Balance, OS.DataTypes.DataTypes.Text);
jsNodeResult.currencyOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Currency, OS.DataTypes.DataTypes.Text);
jsNodeResult.totalBalanceOut = OS.DataConversion.JSNodeParamConverter.from($parameters.TotalBalance, OS.DataTypes.DataTypes.Decimal);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// Execute Action: FormatMoney
formatMoneyVar.value = SharedUtilitiesController.default.formatMoney$Action(OS.BuiltinFunctions.decimalToText(ctraderPropsJSResult.value.totalBalanceOut), "USD", "en-US", "", callContext);

// Login = CtraderProps.Login
model.variables.loginVar = ctraderPropsJSResult.value.loginOut;
// Balance = CtraderProps.Balance
model.variables.balanceVar = ctraderPropsJSResult.value.balanceOut;
// Currency = CtraderProps.Currency
model.variables.currencyVar = ctraderPropsJSResult.value.currencyOut;
// CtraderTotalBalance = FormatMoney.FormattedNumber
model.variables.ctraderTotalBalanceVar = formatMoneyVar.value.formattedNumberOut;
}

}

// Refresh Query: GetLinksByPlatform
var result = controller.getLinksByPlatform$AggrRefresh(50, 0, callContext);
model.flush();
return result;
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

return this.__onParametersChanged$Action;
}set _onParametersChanged$Action(value) {this.__onParametersChanged$Action = value;
}

get _onClickWebterminal$Action() {if(!(this.hasOwnProperty("__onClickWebterminal$Action"))) {
this.__onClickWebterminal$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnClickWebterminal", function (span) {
if(span) {
span.setAttribute("code.function", "OnClickWebterminal");
span.setAttribute("outsystems.function.key", "6f5e3e67-24f0-4071-beee-9dbc6499ae3b");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnClickWebterminal");
callContext = controller.callContext(callContext);
var redirectWebTerminalJSResult = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
if(((model.variables.platformVar === "mt5"))) {
redirectWebTerminalJSResult.value = OS.Logger.startActiveSpan("RedirectWebTerminal", function (span) {
if(span) {
span.setAttribute("code.function", "RedirectWebTerminal");
span.setAttribute("outsystems.function.key", "e0b55310-b45e-4a32-a80a-cbfccde38544");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_CFDBlocks_TempCFDTradeModal_mvc_controller_OnClickWebterminal_RedirectWebTerminalJS, "RedirectWebTerminal", "OnClickWebterminal", {
AccountType: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getAccountType(), OS.DataTypes.DataTypes.Text),
Login: OS.DataConversion.JSNodeParamConverter.to(model.variables.loginVar, OS.DataTypes.DataTypes.Text),
Server: OS.DataConversion.JSNodeParamConverter.to(model.variables.serverVar, OS.DataTypes.DataTypes.Text),
Link: OS.DataConversion.JSNodeParamConverter.to(model.variables.getLinksByPlatformAggr.listOut.getCurrent(callContext.iterationContext).cfdWhiteLabelLinksAttr.webTerminalAttr, OS.DataTypes.DataTypes.Text),
userAgent: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.CFDBlocks.TempCFDTradeModal.OnClickWebterminal$redirectWebTerminalJSResult"))();
jsNodeResult.userAgentOut = OS.DataConversion.JSNodeParamConverter.from($parameters.userAgent, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {
GetOS: OutSystemsUIController.default.clientActionProxies.getOS$Action
}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
} else {
if(((tradershubClientVariables.getAccountType() === "real"))) {
OS.Logger.startActiveSpan("RedirectLive", function (span) {
if(span) {
span.setAttribute("code.function", "RedirectLive");
span.setAttribute("outsystems.function.key", "a92cb423-8502-4111-add6-322cd32ae6b7");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_CFDBlocks_TempCFDTradeModal_mvc_controller_OnClickWebterminal_RedirectLiveJS, "RedirectLive", "OnClickWebterminal", {
Link: OS.DataConversion.JSNodeParamConverter.to(model.variables.getLinksByPlatformAggr.listOut.getCurrent(callContext.iterationContext).cfdWhiteLabelLinksAttr.liveAttr, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
} else {
OS.Logger.startActiveSpan("RedirectDemo", function (span) {
if(span) {
span.setAttribute("code.function", "RedirectDemo");
span.setAttribute("outsystems.function.key", "38c9f993-e1ca-45bf-8ba1-607f7030bf7f");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_CFDBlocks_TempCFDTradeModal_mvc_controller_OnClickWebterminal_RedirectDemoJS, "RedirectDemo", "OnClickWebterminal", {
Link: OS.DataConversion.JSNodeParamConverter.to(model.variables.getLinksByPlatformAggr.listOut.getCurrent(callContext.iterationContext).cfdWhiteLabelLinksAttr.demoAttr, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
}

}

// Execute Action: TriggerCloseEvent
return controller._triggerCloseEvent$Action(callContext);
});
}, function () {
if(span) {
span.end();
}

});
}, 1);
};
}

return this.__onClickWebterminal$Action;
}set _onClickWebterminal$Action(value) {this.__onClickWebterminal$Action = value;
}

get _triggerCloseEvent$Action() {if(!(this.hasOwnProperty("__triggerCloseEvent$Action"))) {
this.__triggerCloseEvent$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("TriggerCloseEvent", function (span) {
if(span) {
span.setAttribute("code.function", "TriggerCloseEvent");
span.setAttribute("outsystems.function.key", "d4dfc4dd-630e-40f4-a2a9-a1837f581dd0");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("TriggerCloseEvent");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// SelectedProductArg = ""
model.variables.selectedProductArgIn = "";
// SelectedProduct = ""
tradershubClientVariables.setSelectedProduct("");
// ShowCtraderImportantNotes = False
model.variables.showCtraderImportantNotesVar = false;
// Trigger Event: OnCloseClick
return controller.onCloseClick$Action(callContext);
});
}, function () {
if(span) {
span.end();
}

});
}, 1);
};
}

return this.__triggerCloseEvent$Action;
}set _triggerCloseEvent$Action(value) {this.__triggerCloseEvent$Action = value;
}


copyToClipboard$Action(textToCopyIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("CopyToClipboard__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "CopyToClipboard");
span.setAttribute("outsystems.function.key", "10432ebf-75d1-491a-b051-8b83a260804e");
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

ctImportantNotesOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("CtImportantNotesOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "CtImportantNotesOnClick");
span.setAttribute("outsystems.function.key", "39d83a7b-1708-4345-bae4-93130b8eead3");
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

onParametersChanged$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnParametersChanged__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnParametersChanged");
span.setAttribute("outsystems.function.key", "5775e686-042b-4193-b30d-773c1db3bcf4");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

onClickWebterminal$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnClickWebterminal__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnClickWebterminal");
span.setAttribute("outsystems.function.key", "6f5e3e67-24f0-4071-beee-9dbc6499ae3b");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._onClickWebterminal$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

triggerCloseEvent$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("TriggerCloseEvent__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "TriggerCloseEvent");
span.setAttribute("outsystems.function.key", "d4dfc4dd-630e-40f4-a2a9-a1837f581dd0");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._triggerCloseEvent$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

get onCloseClick$Action() {if(!(this.hasOwnProperty("_onCloseClick$Action"))) {
this._onCloseClick$Action = function () {
return Promise.resolve();
};
}

return this._onCloseClick$Action;
}set onCloseClick$Action(value) {this._onCloseClick$Action = value;
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
this._onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onParametersChanged$Action(callContext);

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
Controller.registerVariableGroupType("tradershub.CFDBlocks.TempCFDTradeModal.CopyToClipboard$vars", [{
name: "TextToCopy",
attrName: "textToCopyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.CFDBlocks.TempCFDTradeModal.OnParametersChanged$ctraderPropsJSResult", [{
name: "Login",
attrName: "loginOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Balance",
attrName: "balanceOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Currency",
attrName: "currencyOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "TotalBalance",
attrName: "totalBalanceOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
Controller.registerVariableGroupType("tradershub.CFDBlocks.TempCFDTradeModal.OnParametersChanged$getSelectedProductConfigJSResult", [{
name: "Platform",
attrName: "platformOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.CFDBlocks.TempCFDTradeModal.OnParametersChanged$dxtradePropsJSResult", [{
name: "Balance",
attrName: "balanceOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Currency",
attrName: "currencyOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Login",
attrName: "loginOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.CFDBlocks.TempCFDTradeModal.OnParametersChanged$mt5PropsJSResult", [{
name: "Broker",
attrName: "brokerOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Server",
attrName: "serverOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Login",
attrName: "loginOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Balance",
attrName: "balanceOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Currency",
attrName: "currencyOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.CFDBlocks.TempCFDTradeModal.OnClickWebterminal$redirectWebTerminalJSResult", [{
name: "userAgent",
attrName: "userAgentOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

}
return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.CFDBlocks.TempCFDTradeModal.mvc$controller.CopyToClipboard.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
navigator.clipboard.writeText($parameters.TextToCopy);
};
});

define("tradershub.CFDBlocks.TempCFDTradeModal.mvc$controller.OnParametersChanged.CtraderPropsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const ctraderRes = JSON.parse($parameters.CtRes);
const selectedProduct = $parameters.SelectedProduct; // e.g., "ctrader_standard"
const selectedPlatform = $parameters.Platform; // e.g., "ctrader"
const tradingPlatformAccounts = ctraderRes.trading_platform_accounts;
const accountType = $parameters.AccountType; // e.g., "demo", "real"

// Find the object where the platform matches the selected platform
const matchedObject = tradingPlatformAccounts.find(item => 
    `${item.platform}` === selectedPlatform
);

// Calculate the total balance for all accounts matching the selected platform
const totalBalance = tradingPlatformAccounts.reduce((sum, account) => {
    return account.platform === selectedPlatform && account.account_type === accountType 
        ? sum + (account.balance || 0) 
        : sum;
}, 0);

$parameters.Login = matchedObject.login;
$parameters.Balance = matchedObject.display_balance;
$parameters.Currency = matchedObject.currency;
$parameters.TotalBalance = totalBalance;

};
});

define("tradershub.CFDBlocks.TempCFDTradeModal.mvc$controller.OnParametersChanged.GetSelectedProductConfigJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const selectedProduct = $parameters.SelectedProduct // platform_product : mt5_standard, mt5_swap_free, ctrader_standard
$parameters.Platform = selectedProduct.split('_')[0] // platform: mt5 | ctrader |dxtrade
};
});

define("tradershub.CFDBlocks.TempCFDTradeModal.mvc$controller.OnParametersChanged.DxtradePropsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const dxTradeResponse = JSON.parse($parameters.DxRes).trading_platform_accounts;
const selectedProduct = $parameters.SelectedProduct; // e.g., "dxtrade_standard"
const accountType = $parameters.AccountType // "real" | "demo"

const matchedObject = dxTradeResponse.find(account => 
    `${account.platform}_standard` === selectedProduct  && account.account_type === accountType
);

$parameters.Balance = matchedObject.display_balance
$parameters.Currency = matchedObject.currency;
$parameters.Login = matchedObject.login;

console.log("dxTradeRes", dxTradeResponse, "selectedProduct", selectedProduct)
};
});

define("tradershub.CFDBlocks.TempCFDTradeModal.mvc$controller.OnParametersChanged.Mt5PropsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const Mt5Res = JSON.parse($parameters.Mt5Res);

const selectedProduct = $parameters.SelectedProduct; // e.g., "mt5_swap_free"
const mt5LoginList = Mt5Res.mt5_login_list; // [{login:'12345', platform:'mt5', product:'swap_free'...},{...},{...}]

// Find the object where the concatenated platform+product matches ProductIdentifier 
const matchedObject = mt5LoginList.find(item => 
    `mt5_${item.product}` === selectedProduct
);

$parameters.Balance = matchedObject.display_balance
$parameters.Broker = matchedObject.landing_company
$parameters.Currency = matchedObject.currency
$parameters.Login = matchedObject.login.replace(/^MTR/, '');
$parameters.Server = matchedObject.server_info.environment
};
});

define("tradershub.CFDBlocks.TempCFDTradeModal.mvc$controller.OnClickWebterminal.RedirectDemoJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.open($parameters.Link, '_blank')
};
});

define("tradershub.CFDBlocks.TempCFDTradeModal.mvc$controller.OnClickWebterminal.RedirectLiveJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.open($parameters.Link, '_blank')
};
});

define("tradershub.CFDBlocks.TempCFDTradeModal.mvc$controller.OnClickWebterminal.RedirectWebTerminalJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.userAgent =  navigator.userAgent
$actions.GetOS($parameters.userAgent)
console.log("userAgent", $actions.GetOS($parameters.userAgent))

$parameters.userAgent =  navigator.userAgent
$actions.GetOS($parameters.userAgent)
console.log("userAgent", $actions.GetOS($parameters.userAgent))

if($parameters.AccountType = "real") {
    window.open($parameters.Link + "?login=" + $parameters.Login + "&server=" + $parameters.Server, '_blank');
}  else { 
    window.open($parameters.Link, '_blank')
}
};
});


define("tradershub.CFDBlocks.TempCFDTradeModal.mvc$translationsResources.fr-FR", [], function () {
return {
"jKi0Tz0wXU6fFqIvervMMA#Value": "Scannez pour télécharger l\'application mobile.",
"CjVwwt8KLESYO_3XnqT0BQ#Value": "Linux",
"gK8lNr2D+kmMZS05OAhRRA#Value": "et",
"qJrvDlW_Jk+7MFJ3VifMAQ#Value": "macOS",
"we741TFz1EasmL0oN57fAg#Value": "Disponible pour",
"b5EJ1CtsTEyXNVQmCQmrpQ#Value": "Mot de passe oublié ?",
"o3BMQQ6+gECaWGyoyrzgpg#Value": "gérer efficacement les stratégies basées sur des frais.",
"ubxHpq+T40eMoeA9_8XDUw#Value": "Gardez au moins un compte libre d\'être un fournisseur de stratégie",
"YUIkAYjcVES_jEAFFuEZnA#Value": "à la fois un fournisseur de stratégies et un compte de collecte de frais.",
"C5X2lLmIpkOIqO4yZh28zg#Value": "ne peut pas",
"ZtDqnwn2lkSXtEc0Mgr50w#Value": "Les stratégies gratuites ne nécessitent pas de « Compte pour les frais ».",
"ZMe9061BXkqLtngTw+EMoA#Value": "6. Assignez l\'un de vos comptes existants pour traiter les frais. Le même \"Compte pour les Frais\" peut prendre en charge plusieurs stratégies basées sur les frais.",
"aXbc+fHYAUCNb3IZmfJMlw#Value": "Vous pouvez imposer des frais lors de la mise en place d\'une stratégie.",
"xQj2se9gI06AOCrpnUgeyw#Value": "Vous pouvez avoir jusqu\'à 5 comptes Deriv cTrader. Si votre stratégie reste inactive pendant 30 jours, elle sera supprimée automatiquement. Vous pourrez créer une nouvelle stratégie sur le même compte par la suite.",
"SCqzdIXv2E+oyuWJTPJ3mA#Value": "Vous pouvez transformer n\'importe quel compte cTrader en compte de fournisseur de stratégies. Ce changement est permanent.",
"4XAj5bchLESQ+mQpXFd3RA#Value": "Vous pouvez avoir jusqu\'à 5 comptes Deriv cTrader. Si votre stratégie reste inactive pendant 30 jours, elle sera supprimée automatiquement. Vous pourrez créer une nouvelle stratégie sur le même compte par la suite.",
"tj+ylJ9hSk6L1TXMOQH8bA#Value": "Connectez-vous à cTrader avec votre adresse e-mail et votre mot de passe de Deriv.",
"xO3hRYYNVEO4wyld11azGA#Value": "Transfert"
};
});

define("tradershub.CFDBlocks.TempCFDTradeModal.mvc$translationsResources", ["exports", "tradershub.CFDBlocks.TempCFDTradeModal.mvc$translationsResources.fr-FR"], function (exports, tradershub_CFDBlocks_TempCFDTradeModal_mvc_translationsResources_frFR) {
return {
"fr-FR": {
"translations": tradershub_CFDBlocks_TempCFDTradeModal_mvc_translationsResources_frFR,
"isRTL": false
}
};
});

