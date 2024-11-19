define("tradershub.CFDBlocks.CFDTradingAppCard.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "RESTAPIWebsocketOfficial.model", "SharedUtilities.controller", "RESTAPIWebsocketOfficial.model$ST_2f457e0a5b13526850516eea23ae0e9aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_75725e65d106c1568a850780233a08baStructure", "SharedUtilities.controller$FormatMoney", "tradershub.referencesHealth$SharedUtilities"], function (OSRuntimeCore, tradershubModel, RESTAPIWebsocketOfficialModel, SharedUtilitiesController) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Balance", "balanceVar", "Balance", true, false, OS.DataTypes.DataTypes.Text, function () {
return "0";
}, false), 
this.attr("Login", "loginVar", "Login", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("Platform", "platformVar", "Platform", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("Currency", "currencyVar", "Currency", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("CtraderTotalBalance", "ctraderTotalBalanceVar", "CtraderTotalBalance", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("Name", "nameIn", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_nameInDataFetchStatus", "_nameInDataFetchStatus", "_nameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ProductDescription", "productDescriptionIn", "ProductDescription", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_productDescriptionInDataFetchStatus", "_productDescriptionInDataFetchStatus", "_productDescriptionInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ProductIcon", "productIconIn", "ProductIcon", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_productIconInDataFetchStatus", "_productIconInDataFetchStatus", "_productIconInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Variant", "variantIn", "Variant", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_variantInDataFetchStatus", "_variantInDataFetchStatus", "_variantInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("SelectedProductArg", "selectedProductArgIn", "SelectedProductArg", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_selectedProductArgInDataFetchStatus", "_selectedProductArgInDataFetchStatus", "_selectedProductArgInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("CreatedMt5Accounts", "createdMt5AccountsIn", "CreatedMt5Accounts", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_2f457e0a5b13526850516eea23ae0e9aStructure());
}, false, RESTAPIWebsocketOfficialModel.ST_2f457e0a5b13526850516eea23ae0e9aStructure), 
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

static get hasValidationWidgets() {return false;
}
setInputs(inputs) {
if("Name" in inputs) {
this.variables.nameIn = inputs.Name;
if("_nameInDataFetchStatus" in inputs) {
this.variables._nameInDataFetchStatus = inputs._nameInDataFetchStatus;
}

}

if("ProductDescription" in inputs) {
this.variables.productDescriptionIn = inputs.ProductDescription;
if("_productDescriptionInDataFetchStatus" in inputs) {
this.variables._productDescriptionInDataFetchStatus = inputs._productDescriptionInDataFetchStatus;
}

}

if("ProductIcon" in inputs) {
this.variables.productIconIn = inputs.ProductIcon;
if("_productIconInDataFetchStatus" in inputs) {
this.variables._productIconInDataFetchStatus = inputs._productIconInDataFetchStatus;
}

}

if("Variant" in inputs) {
this.variables.variantIn = inputs.Variant;
if("_variantInDataFetchStatus" in inputs) {
this.variables._variantInDataFetchStatus = inputs._variantInDataFetchStatus;
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

define("tradershub.CFDBlocks.CFDTradingAppCard.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "SharedUtilities.controller", "react", "@outsystems/runtime-view-js", "tradershub.CFDBlocks.CFDTradingAppCard.mvc$model", "tradershub.CFDBlocks.CFDTradingAppCard.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js", "RESTAPIWebsocketOfficial.model$ST_2f457e0a5b13526850516eea23ae0e9aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_75725e65d106c1568a850780233a08baStructure", "SharedUtilities.controller$FormatMoney", "tradershub.referencesHealth$SharedUtilities"], function (OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, SharedUtilitiesController, React, OSView, tradershub_CFDBlocks_CFDTradingAppCard_mvc_model, tradershub_CFDBlocks_CFDTradingAppCard_mvc_controller, tradershubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "CFDBlocks.CFDTradingAppCard"; }

        static getAttributes() { return {
codeFunction: "CFDTradingAppCard",
functionKey: "51e9b35b-d3d4-4d2c-9ea6-414d31cdfc68",
functionOwnerName: "tradershub",
functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.CFDBlocks.CFDTradingAppCard.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return tradershub_CFDBlocks_CFDTradingAppCard_mvc_model;
        }

        get controllerFactory() {
            return tradershub_CFDBlocks_CFDTradingAppCard_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if((model.variables.variantIn === "Small"), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.smallOnClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
style: "cfd-product-card cfd-product-card__small",
visible: true,
_idProps: {
service: idService,
name: "Small"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "ProductIconContainerSmall"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
gridProperties: {
width: "40px"
},
style: "display-flex ",
type: /*External*/ 1,
url: model.variables.productIconIn,
_idProps: {
service: idService,
name: "Icon"
},
_widgetRecordProvider: widgetsRecordProvider,
url_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._productIconInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 0 16px;"
},
gridProperties: {
classes: "OSInline"
},
visible: true,
_idProps: {
service: idService,
name: "ContentContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-weight: bold;"
},
style: "display-block",
value: model.variables.nameIn,
_idProps: {
service: idService,
name: "Product"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._nameInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "color: #101213; font-size: 12px; margin-top: 4px;"
},
value: model.variables.productDescriptionIn,
_idProps: {
service: idService,
name: "Description"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._productDescriptionInDataFetchStatus)
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex justify-content-center align-items-center",
visible: true,
_idProps: {
service: idService,
name: "IconContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.largeOnClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
gridProperties: {
classes: "OSInline"
},
style: "cfd-product-card cfd-product-card__large",
visible: true,
_idProps: {
service: idService,
name: "Large"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex align-items-center",
visible: true,
_idProps: {
service: idService,
name: "FirstRowContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "ProductImageContainer"
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
url: model.variables.productIconIn,
_idProps: {
service: idService,
name: "ProductImage"
},
_widgetRecordProvider: widgetsRecordProvider,
url_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._productIconInDataFetchStatus)
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 16px;"
},
style: "display-flex align-items-center justify-content-space-between",
visible: true,
_idProps: {
service: idService,
name: "DescriptionContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-block",
visible: true,
_idProps: {
service: idService,
name: "TextContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "display-block",
value: model.variables.nameIn,
_idProps: {
service: idService,
name: "ProductName"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._nameInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "color: #101213; font-size: 16px; font-weight: bold; margin-top: 4px;"
},
value: model.getCachedValue(idService.getId("LvereUG2dUqFdX0qsz06hQ.Value"), function () {
return (((((model.variables.platformVar === "ctrader")) ? (model.variables.ctraderTotalBalanceVar) : (model.variables.balanceVar)) + " ") + model.variables.currencyVar);
}, function () {
return model.variables.platformVar;
}, function () {
return model.variables.ctraderTotalBalanceVar;
}, function () {
return model.variables.balanceVar;
}, function () {
return model.variables.currencyVar;
}),
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex justify-content-center align-items-center",
visible: true,
_idProps: {
service: idService,
name: "ArrowIconContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}))))];
}));
        }
    }

    return View;
});
define("tradershub.CFDBlocks.CFDTradingAppCard.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "SharedUtilities.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.CFDBlocks.CFDTradingAppCard.mvc$translationsResources", "tradershub.CFDBlocks.CFDTradingAppCard.mvc$controller.OnReady.GetSelectedProductConfigJS", "tradershub.CFDBlocks.CFDTradingAppCard.mvc$controller.OnReady.Mt5PropsJS", "tradershub.CFDBlocks.CFDTradingAppCard.mvc$controller.OnReady.CtraderPropsJS", "tradershub.CFDBlocks.CFDTradingAppCard.mvc$controller.OnReady.DxtradePropsJS", "RESTAPIWebsocketOfficial.model$ST_2f457e0a5b13526850516eea23ae0e9aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_75725e65d106c1568a850780233a08baStructure", "SharedUtilities.controller$FormatMoney", "tradershub.referencesHealth$SharedUtilities"], function (OSRuntimeCore, tradershubModel, tradershubController, RESTAPIWebsocketOfficialModel, SharedUtilitiesController, tradershubLanguageResources, tradershubClientVariables, tradershub_CFDBlocks_CFDTradingAppCard_mvc_TranslationsResources, tradershub_CFDBlocks_CFDTradingAppCard_mvc_controller_OnReady_GetSelectedProductConfigJS, tradershub_CFDBlocks_CFDTradingAppCard_mvc_controller_OnReady_Mt5PropsJS, tradershub_CFDBlocks_CFDTradingAppCard_mvc_controller_OnReady_CtraderPropsJS, tradershub_CFDBlocks_CFDTradingAppCard_mvc_controller_OnReady_DxtradePropsJS) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, tradershub_CFDBlocks_CFDTradingAppCard_mvc_TranslationsResources);
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
get _smallOnClick$Action() {if(!(this.hasOwnProperty("__smallOnClick$Action"))) {
this.__smallOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("SmallOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "SmallOnClick");
span.setAttribute("outsystems.function.key", "3143018f-6d84-43bd-baa6-339a4a83f96c");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("SmallOnClick");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: OnClickAvailableAccount
return controller.onClickAvailableAccount$Action(callContext);
});
}, function () {
if(span) {
span.end();
}

});
}, 1);
};
}

return this.__smallOnClick$Action;
}set _smallOnClick$Action(value) {this.__smallOnClick$Action = value;
}

get _onReady$Action() {if(!(this.hasOwnProperty("__onReady$Action"))) {
this.__onReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnReady", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "a9a7db7e-dc09-4433-98f2-71721cac7866");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var formatMoneyVar = new OS.DataTypes.VariableHolder();
var formatMoney2Var = new OS.DataTypes.VariableHolder();
var formatMoney3Var = new OS.DataTypes.VariableHolder();
var getSelectedProductConfigJSResult = new OS.DataTypes.VariableHolder();
var mt5PropsJSResult = new OS.DataTypes.VariableHolder();
var ctraderPropsJSResult = new OS.DataTypes.VariableHolder();
var dxtradePropsJSResult = new OS.DataTypes.VariableHolder();
var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONSerialize3Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONSerialize2Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
getSelectedProductConfigJSResult.value = OS.Logger.startActiveSpan("GetSelectedProductConfig", function (span) {
if(span) {
span.setAttribute("code.function", "GetSelectedProductConfig");
span.setAttribute("outsystems.function.key", "0be0cbe8-6bcc-4b7f-a7a9-90e3e387fb7b");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_CFDBlocks_CFDTradingAppCard_mvc_controller_OnReady_GetSelectedProductConfigJS, "GetSelectedProductConfig", "OnReady", {
SelectedProduct: OS.DataConversion.JSNodeParamConverter.to(model.variables.selectedProductArgIn, OS.DataTypes.DataTypes.Text),
Platform: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.CFDBlocks.CFDTradingAppCard.OnReady$getSelectedProductConfigJSResult"))();
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
// isLargeTradingAppCard
if((((model.variables.variantIn) !== ("Small")))) {
// isMT5
if(((model.variables.platformVar === "mt5"))) {
// JSON Serialize: JSONSerialize1
jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.createdMt5AccountsIn, false, false);
mt5PropsJSResult.value = OS.Logger.startActiveSpan("Mt5Props", function (span) {
if(span) {
span.setAttribute("code.function", "Mt5Props");
span.setAttribute("outsystems.function.key", "46447f55-1524-4b5a-acc4-bc22a90b5ae3");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_CFDBlocks_CFDTradingAppCard_mvc_controller_OnReady_Mt5PropsJS, "Mt5Props", "OnReady", {
AccountType: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getAccountType(), OS.DataTypes.DataTypes.Text),
SelectedProduct: OS.DataConversion.JSNodeParamConverter.to(model.variables.selectedProductArgIn, OS.DataTypes.DataTypes.Text),
Mt5Res: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize1Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
Broker: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Server: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Login: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Balance: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Currency: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.CFDBlocks.CFDTradingAppCard.OnReady$mt5PropsJSResult"))();
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

// Login = Mt5Props.Login
model.variables.loginVar = mt5PropsJSResult.value.loginOut;
// Currency = Mt5Props.Currency
model.variables.currencyVar = mt5PropsJSResult.value.currencyOut;
// Balance = Mt5Props.Balance
model.variables.balanceVar = mt5PropsJSResult.value.balanceOut;
} else {
// isDxtrade
if(((model.variables.platformVar === "dxtrade"))) {
// JSON Serialize: JSONSerialize2
jSONSerialize2Var.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.createdDxtradeAccountsIn, false, false);
dxtradePropsJSResult.value = OS.Logger.startActiveSpan("DxtradeProps", function (span) {
if(span) {
span.setAttribute("code.function", "DxtradeProps");
span.setAttribute("outsystems.function.key", "c7b0fe42-35d7-4549-a218-8c53de1afd2d");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_CFDBlocks_CFDTradingAppCard_mvc_controller_OnReady_DxtradePropsJS, "DxtradeProps", "OnReady", {
DxRes: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize2Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
AccountType: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getAccountType(), OS.DataTypes.DataTypes.Text),
SelectedProduct: OS.DataConversion.JSNodeParamConverter.to(model.variables.selectedProductArgIn, OS.DataTypes.DataTypes.Text),
Balance: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Currency: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.CFDBlocks.CFDTradingAppCard.OnReady$dxtradePropsJSResult"))();
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
// Execute Action: FormatMoney2
formatMoney2Var.value = SharedUtilitiesController.default.formatMoney$Action(dxtradePropsJSResult.value.balanceOut, "USD", "en-US", "", callContext);

// Balance = FormatMoney2.FormattedNumber
model.variables.balanceVar = formatMoney2Var.value.formattedNumberOut;
// Currency = DxtradeProps.Currency
model.variables.currencyVar = dxtradePropsJSResult.value.currencyOut;
} else {
// JSON Serialize: JSONSerialize3
jSONSerialize3Var.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.createdCtraderAccountsIn, false, false);
ctraderPropsJSResult.value = OS.Logger.startActiveSpan("CtraderProps", function (span) {
if(span) {
span.setAttribute("code.function", "CtraderProps");
span.setAttribute("outsystems.function.key", "746b8bd5-0a25-4bc2-bdb2-2fe951bd5d40");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_CFDBlocks_CFDTradingAppCard_mvc_controller_OnReady_CtraderPropsJS, "CtraderProps", "OnReady", {
SelectedProduct: OS.DataConversion.JSNodeParamConverter.to(model.variables.selectedProductArgIn, OS.DataTypes.DataTypes.Text),
CtRes: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize3Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
AccountType: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getAccountType(), OS.DataTypes.DataTypes.Text),
Platform: OS.DataConversion.JSNodeParamConverter.to(model.variables.platformVar, OS.DataTypes.DataTypes.Text),
Balance: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Currency: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
TotalBalance: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.CFDBlocks.CFDTradingAppCard.OnReady$ctraderPropsJSResult"))();
jsNodeResult.balanceOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Balance, OS.DataTypes.DataTypes.Text);
jsNodeResult.currencyOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Currency, OS.DataTypes.DataTypes.Text);
jsNodeResult.totalBalanceOut = OS.DataConversion.JSNodeParamConverter.from($parameters.TotalBalance, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// Execute Action: FormatMoney
formatMoneyVar.value = SharedUtilitiesController.default.formatMoney$Action(ctraderPropsJSResult.value.totalBalanceOut, "USD", "en-US", "", callContext);

// Balance = CtraderProps.Balance
model.variables.balanceVar = ctraderPropsJSResult.value.balanceOut;
// Currency = CtraderProps.Currency
model.variables.currencyVar = ctraderPropsJSResult.value.currencyOut;
// CtraderTotalBalance = FormatMoney.FormattedNumber
model.variables.ctraderTotalBalanceVar = formatMoneyVar.value.formattedNumberOut;
}

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

return this.__onReady$Action;
}set _onReady$Action(value) {this.__onReady$Action = value;
}

get _largeOnClick$Action() {if(!(this.hasOwnProperty("__largeOnClick$Action"))) {
this.__largeOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("LargeOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "LargeOnClick");
span.setAttribute("outsystems.function.key", "e74f5277-0db8-4303-ab45-88220607483f");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("LargeOnClick");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: OnClickCreatedAccount
return controller.onClickCreatedAccount$Action(callContext);
});
}, function () {
if(span) {
span.end();
}

});
}, 1);
};
}

return this.__largeOnClick$Action;
}set _largeOnClick$Action(value) {this.__largeOnClick$Action = value;
}


smallOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("SmallOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "SmallOnClick");
span.setAttribute("outsystems.function.key", "3143018f-6d84-43bd-baa6-339a4a83f96c");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._smallOnClick$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

onReady$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnReady__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "a9a7db7e-dc09-4433-98f2-71721cac7866");
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

largeOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("LargeOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "LargeOnClick");
span.setAttribute("outsystems.function.key", "e74f5277-0db8-4303-ab45-88220607483f");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._largeOnClick$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

get onClickCreatedAccount$Action() {if(!(this.hasOwnProperty("_onClickCreatedAccount$Action"))) {
this._onClickCreatedAccount$Action = function () {
return Promise.resolve();
};
}

return this._onClickCreatedAccount$Action;
}set onClickCreatedAccount$Action(value) {this._onClickCreatedAccount$Action = value;
}

get onClickAvailableAccount$Action() {if(!(this.hasOwnProperty("_onClickAvailableAccount$Action"))) {
this._onClickAvailableAccount$Action = function () {
return Promise.resolve();
};
}

return this._onClickAvailableAccount$Action;
}set onClickAvailableAccount$Action(value) {this._onClickAvailableAccount$Action = value;
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
Controller.registerVariableGroupType("tradershub.CFDBlocks.CFDTradingAppCard.OnReady$getSelectedProductConfigJSResult", [{
name: "Platform",
attrName: "platformOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.CFDBlocks.CFDTradingAppCard.OnReady$mt5PropsJSResult", [{
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
Controller.registerVariableGroupType("tradershub.CFDBlocks.CFDTradingAppCard.OnReady$ctraderPropsJSResult", [{
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
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.CFDBlocks.CFDTradingAppCard.OnReady$dxtradePropsJSResult", [{
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

}
return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.CFDBlocks.CFDTradingAppCard.mvc$controller.OnReady.GetSelectedProductConfigJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const selectedProduct = $parameters.SelectedProduct
$parameters.Platform = selectedProduct.split('_')[0]
};
});

define("tradershub.CFDBlocks.CFDTradingAppCard.mvc$controller.OnReady.Mt5PropsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const mt5Response = JSON.parse($parameters.Mt5Res).mt5_login_list;
const selectedProduct = $parameters.SelectedProduct; // e.g., "mt5_swap_free"
const accountType = $parameters.AccountType // "real" | "demo"

const matchedObject = mt5Response.find(account => 
    `mt5_${account.product}` === selectedProduct && account.account_type === accountType
);

$parameters.Balance = matchedObject.display_balance
$parameters.Broker = matchedObject.landing_company
$parameters.Currency = matchedObject.currency
$parameters.Login = matchedObject.login
$parameters.Server = matchedObject.server_info.environment

console.log("matchedObject", matchedObject)
};
});

define("tradershub.CFDBlocks.CFDTradingAppCard.mvc$controller.OnReady.CtraderPropsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const ctraderRes = JSON.parse($parameters.CtRes);
const selectedProduct = $parameters.SelectedProduct; // e.g., "ctrader_standard"
const selectedPlatform = $parameters.Platform; // e.g., "ctrader"
const tradingPlatformAccounts = ctraderRes.trading_platform_accounts;
const accountType = $parameters.AccountType;

// Find the first object where the platform matches the selected platform
const matchedObject = tradingPlatformAccounts.find(item => 
    `${item.platform}` === selectedPlatform
);

const totalBalance = tradingPlatformAccounts.reduce((sum, account) => {
    return account.platform === selectedPlatform && account.account_type === accountType 
        ? sum + (account.balance || 0) 
        : sum;
}, 0);

// Set parameters based on the first matched object and total balance
$parameters.Balance = matchedObject.display_balance;
$parameters.Currency = matchedObject.currency;
$parameters.TotalBalance = JSON.stringify(totalBalance);
};
});

define("tradershub.CFDBlocks.CFDTradingAppCard.mvc$controller.OnReady.DxtradePropsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const dxTradeResponse = JSON.parse($parameters.DxRes).trading_platform_accounts;
const selectedProduct = $parameters.SelectedProduct; // e.g., "dxtrade_standard"
const accountType = $parameters.AccountType // "real" | "demo"

// Find the object where the concatenated platform+product matches ProductIdentifier 
const matchedObject = dxTradeResponse.find(account => 
    `${account.platform}_standard` === selectedProduct  && account.account_type === accountType
);

$parameters.Balance = matchedObject.display_balance
$parameters.Currency = matchedObject.currency;

console.log("dxTradeRes", dxTradeResponse, "selectedProduct", selectedProduct)
};
});


define("tradershub.CFDBlocks.CFDTradingAppCard.mvc$translationsResources", ["exports"], function (exports) {
return {};
});

