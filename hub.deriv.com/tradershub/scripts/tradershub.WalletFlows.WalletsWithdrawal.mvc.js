define("tradershub.WalletFlows.WalletsWithdrawal.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.controller", "YupValidationsOfficial.controller", "BrowserConsoleLogging.controller", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_3425849bb816196585dd6f07dbf2721dStructure", "tradershub.model$ST_a2aeee4ca5ab4ed88d1373d8beda118bStructure", "YupValidationsOfficial.controller$YupValidate", "tradershub.referencesHealth$YupValidationsOfficial", "BrowserConsoleLogging.controller$ConsoleLog", "tradershub.referencesHealth$BrowserConsoleLogging", "tradershub.controller$ExchangeRates", "tradershub.model$RL_caf4f8b8680e835a8e4e4bea133e8365", "tradershub.controller$GetWalletsList", "tradershub.controller$CryptoConfig", "RESTAPIWebsocketOfficial.model$ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$PostCashierFiat", "RESTAPIWebsocketOfficial.model$ST_2f46c6fecf81fe9d91763f789141eec9Structure", "tradershub.controller$PostCashierCryptoWithdraw", "tradershub.controller$CryptoEstimations"], function (OSRuntimeCore, tradershubModel, OutSystemsUIController, YupValidationsOfficialController, BrowserConsoleLoggingController, tradershubController, RESTAPIWebsocketOfficialModel) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("ActiveWallet", "activeWalletVar", "ActiveWallet", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_3425849bb816196585dd6f07dbf2721dStructure());
}, false, tradershubModel.ST_3425849bb816196585dd6f07dbf2721dStructure), 
this.attr("IframeUrl", "iframeUrlVar", "IframeUrl", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("CryptoAddress", "cryptoAddressVar", "CryptoAddress", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("WithdrawalAmount", "withdrawalAmountVar", "WithdrawalAmount", true, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, false), 
this.attr("CryptoPriorityWithdrawal", "cryptoPriorityWithdrawalVar", "CryptoPriorityWithdrawal", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("CryptoMinimumWthdrawalAmount", "cryptoMinimumWthdrawalAmountVar", "CryptoMinimumWthdrawalAmount", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("ExchangeRate", "exchangeRateVar", "ExchangeRate", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("SerializePriorityWithdrawalInfo", "serializePriorityWithdrawalInfoVar", "SerializePriorityWithdrawalInfo", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("FinalCryptoAmount", "finalCryptoAmountVar", "FinalCryptoAmount", true, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, false), 
this.attr("FinalConvertedAmount", "finalConvertedAmountVar", "FinalConvertedAmount", true, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, false), 
this.attr("RateTimer", "rateTimerVar", "RateTimer", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("PriorityWithdrawalTimer", "priorityWithdrawalTimerVar", "PriorityWithdrawalTimer", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("DeserializePriorityWithdrawalInfo", "deserializePriorityWithdrawalInfoVar", "DeserializePriorityWithdrawalInfo", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_a2aeee4ca5ab4ed88d1373d8beda118bStructure());
}, false, tradershubModel.ST_a2aeee4ca5ab4ed88d1373d8beda118bStructure), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("CurrencySwitcher", "currencySwitcherVar", "CurrencySwitcher", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("WithdrawalAmountInCrypto", "withdrawalAmountInCryptoVar", "WithdrawalAmountInCrypto", true, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, false), 
this.attr("WithdrawalAmountInFiat", "withdrawalAmountInFiatVar", "WithdrawalAmountInFiat", true, false, OS.DataTypes.DataTypes.Currency, function () {
return OS.DataTypes.Decimal.defaultValue;
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
Form1: OS.Model.ValidationWidgetRecord,
Input_CryptoAddress: OS.Model.ValidationWidgetRecord,
ButtonGroup: OS.Model.ValidationWidgetRecord,
Input_CryptoAmount: OS.Model.ValidationWidgetRecord,
ExchangeRateSwitcher: OS.Model.ValidationWidgetRecord,
Checkbox1: OS.Model.ValidationWidgetRecord
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

define("tradershub.WalletFlows.WalletsWithdrawal.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "YupValidationsOfficial.controller", "BrowserConsoleLogging.controller", "RESTAPIWebsocketOfficial.model", "react", "@outsystems/runtime-view-js", "tradershub.WalletFlows.WalletsWithdrawal.mvc$model", "tradershub.WalletFlows.WalletsWithdrawal.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.MainLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.WalletBlocks.WalletsOverlayPageWithPopup.mvc$view", "OutSystemsUI.Content.Tooltip.mvc$view", "OutSystemsUI.Utilities.Separator.mvc$view", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_3425849bb816196585dd6f07dbf2721dStructure", "tradershub.model$ST_a2aeee4ca5ab4ed88d1373d8beda118bStructure", "YupValidationsOfficial.controller$YupValidate", "tradershub.referencesHealth$YupValidationsOfficial", "BrowserConsoleLogging.controller$ConsoleLog", "tradershub.referencesHealth$BrowserConsoleLogging", "tradershub.controller$ExchangeRates", "tradershub.model$RL_caf4f8b8680e835a8e4e4bea133e8365", "tradershub.controller$GetWalletsList", "tradershub.controller$CryptoConfig", "RESTAPIWebsocketOfficial.model$ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$PostCashierFiat", "RESTAPIWebsocketOfficial.model$ST_2f46c6fecf81fe9d91763f789141eec9Structure", "tradershub.controller$PostCashierCryptoWithdraw", "tradershub.controller$CryptoEstimations"], function (OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, YupValidationsOfficialController, BrowserConsoleLoggingController, RESTAPIWebsocketOfficialModel, React, OSView, tradershub_WalletFlows_WalletsWithdrawal_mvc_model, tradershub_WalletFlows_WalletsWithdrawal_mvc_controller, tradershubClientVariables, tradershub_Layouts_MainLayout_mvc_view, OSWidgets, tradershub_WalletBlocks_WalletsOverlayPageWithPopup_mvc_view, OutSystemsUI_Content_Tooltip_mvc_view, OutSystemsUI_Utilities_Separator_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() { return "WalletFlows.WalletsWithdrawal"; }

        static getAttributes() { return {
codeFunction: "WalletsWithdrawal",
functionKey: "97bad0a0-2ffc-4c16-9cd0-e3e220356024",
functionOwnerName: "tradershub",
functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.WalletFlows.WalletsWithdrawal.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return ["scripts/tradershub.yupumd.js"];
        }

        static getBlocks() {
            return [tradershub_Layouts_MainLayout_mvc_view, tradershub_WalletBlocks_WalletsOverlayPageWithPopup_mvc_view, OutSystemsUI_Content_Tooltip_mvc_view, OutSystemsUI_Utilities_Separator_mvc_view];
        }

        get modelFactory() {
            return tradershub_WalletFlows_WalletsWithdrawal_mvc_model;
        }

        get controllerFactory() {
            return tradershub_WalletFlows_WalletsWithdrawal_mvc_controller;
        }

        get title() {
            

            return OSView.BaseView.BaseWebScreen.getTranslation("oNC6l_wvFkyc0OPiIDVgJA#Title", "WalletsWithdrawal");
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
return [React.createElement(tradershub_WalletBlocks_WalletsOverlayPageWithPopup_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
PageTitle: "Withdraw",
IsLoading: model.variables.isLoadingVar
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
return [$if(model.variables.activeWalletVar.isCrpytoAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column",
visible: true,
_idProps: {
service: idService,
name: "WithdrawalCryptoContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "border-radius: 8px;"
},
style: "padding-base background-warning-light display-flex gap-s align-items-flex-start",
visible: true,
_idProps: {
service: idService,
name: "WithdrawalDisclaimerMessage"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
gridProperties: {
width: "24px"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.WarningLight.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 12px;"
},
text: ["Do not use initial coin offering (ICO) linked addresses. ICO tokens will not be credited to this wallet."],
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-top-m",
visible: true,
_idProps: {
service: idService,
name: "WithdrawalCryptoForm"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Form, {
_validationProps: {
validationService: validationService
},
gridProperties: {
classes: "OSFillParent"
},
style: "display-flex flex-direction-column gap-m",
_idProps: {
service: idService,
name: "Form1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "CryptoAddressContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: false,
style: "margin-bottom-s",
targetWidget: "Input_CryptoAddress",
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 16px;"
},
value: (("Your " + model.variables.activeWalletVar.currencyAttr) + " wallet address"),
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form1")
},
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: false,
maxLength: 50,
onChange: function () {
var eventHandlerContext = callContext.clone();
controller.onChangeAddressInput$Action(controller.callContext(eventHandlerContext));

;
},
prompt: "Enter the address",
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.cryptoAddressVar, function (value) {
model.variables.cryptoAddressVar = value;
}),
_idProps: {
service: idService,
name: "Input_CryptoAddress"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 10px;"
},
style: "display-flex flex-direction-column",
visible: true,
_idProps: {
service: idService,
name: "CryptoAmountContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: false,
targetWidget: "Input_CryptoAmount",
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 16px;"
},
text: ["Amount"],
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.ButtonGroup, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form1")
},
enabled: true,
mandatory: false,
onChange: function () {
var eventHandlerContext = callContext.clone();
controller.onChangeAmountInput$Action(controller.callContext(eventHandlerContext));

;
},
style: "margin-y-base",
variable: model.createVariable(OS.DataTypes.DataTypes.Decimal, model.variables.withdrawalAmountVar, function (value) {
model.variables.withdrawalAmountVar = value;
}),
_idProps: {
service: idService,
name: "ButtonGroup"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.ButtonGroupItem, {
enabled: true,
style: "wallets-crypto-amount-btn",
value: (new OS.DataTypes.Decimal("0.25")).times(model.variables.activeWalletVar.balanceAttr),
visible: true,
_idProps: {
service: idService,
name: "ButtonGroupItem1"
},
_widgetRecordProvider: widgetsRecordProvider
}, "25%"), React.createElement(OSWidgets.ButtonGroupItem, {
enabled: true,
style: "wallets-crypto-amount-btn margin-left-s",
value: (new OS.DataTypes.Decimal("0.50")).times(model.variables.activeWalletVar.balanceAttr),
visible: true,
_idProps: {
service: idService,
name: "ButtonGroupItem2"
},
_widgetRecordProvider: widgetsRecordProvider
}, "50%"), React.createElement(OSWidgets.ButtonGroupItem, {
enabled: true,
style: "wallets-crypto-amount-btn margin-left-s",
value: (new OS.DataTypes.Decimal("0.75")).times(model.variables.activeWalletVar.balanceAttr),
visible: true,
_idProps: {
service: idService,
name: "ButtonGroupItem3"
},
_widgetRecordProvider: widgetsRecordProvider
}, "75%"), React.createElement(OSWidgets.ButtonGroupItem, {
enabled: true,
style: "wallets-crypto-amount-btn margin-left-s",
value: (new OS.DataTypes.Decimal("1.0")).times(model.variables.activeWalletVar.balanceAttr),
visible: true,
_idProps: {
service: idService,
name: "ButtonGroupItem4"
},
_widgetRecordProvider: widgetsRecordProvider
}, "100%")), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex gap-s full-width align-items-flex-start",
visible: true,
_idProps: {
service: idService,
name: "InputAmountContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form1")
},
enabled: true,
extendedProperties: {
"data-dirty": "False"
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Number*/ 2,
mandatory: false,
maxLength: 0,
onChange: function () {
var eventHandlerContext = callContext.clone();
controller.onChangeAmountInput$Action(controller.callContext(eventHandlerContext));

;
},
prompt: "0.00000000",
style: "form-control full-height",
variable: model.createVariable(OS.DataTypes.DataTypes.Decimal, model.variables.withdrawalAmountVar, function (value) {
model.variables.withdrawalAmountVar = value;
}),
_idProps: {
service: idService,
name: "Input_CryptoAmount"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.ButtonGroup, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form1")
},
enabled: model.getCachedValue(idService.getId("ExchangeRateSwitcher.Enabled"), function () {
return ((model.variables.exchangeRateVar) !== ((OS.BuiltinFunctions.nullIdentifier()).toString()));
}, function () {
return model.variables.exchangeRateVar;
}),
mandatory: false,
onChange: function () {
var eventHandlerContext = callContext.clone();
controller.onChangeAmountInput$Action(controller.callContext(eventHandlerContext));

;
},
style: "real-demo-switcher",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.currencySwitcherVar, function (value) {
model.variables.currencySwitcherVar = value;
}),
_idProps: {
service: idService,
name: "ExchangeRateSwitcher"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.ButtonGroupItem, {
enabled: true,
style: "real-demo-switcher-item",
value: model.variables.activeWalletVar.currencyAttr,
visible: true,
_idProps: {
service: idService,
name: "CryptoSwithcer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.activeWalletVar.currencyAttr,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.ButtonGroupItem, {
enabled: true,
style: "real-demo-switcher-item",
value: "USD",
visible: true,
_idProps: {
service: idService,
name: "USDSwithcer"
},
_widgetRecordProvider: widgetsRecordProvider
}, "USD")))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex align-items-center",
visible: true,
_idProps: {
service: idService,
name: "CheckboxContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-right-s",
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Checkbox, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form1")
},
enabled: true,
extendedProperties: {
style: "height: 24px; width: 24px;"
},
gridProperties: {
marginLeft: "0px"
},
onChange: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.onPriorityCheck$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "checkbox",
variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, model.variables.cryptoPriorityWithdrawalVar, function (value) {
model.variables.cryptoPriorityWithdrawalVar = value;
}),
_idProps: {
service: idService,
name: "Checkbox1"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
style: "margin-right-s",
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Priority withdrawal"), React.createElement(OutSystemsUI_Content_Tooltip_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Trigger: tradershubModel.staticEntities.trigger.onHover,
Position: tradershubModel.staticEntities.position.top
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form1")
},
_idProps: {
service: idService,
uuid: "30",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width auto-height display-flex justify-content-center align-items-center",
visible: true,
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
gridProperties: {
width: "14px"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.information.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
tooltip: new PlaceholderContent(function () {
return ["Pay a small fee to prioritise your withdrawal. The fee will be deducted from the withdrawal amount."];
})
},
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "display-flex flex-direction-column gap-base margin-y-base",
visible: model.getCachedValue(idService.getId("BottomContainer.Visible"), function () {
return OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut;
}),
_idProps: {
service: idService,
name: "BottomContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex justify-content-space-between",
visible: true,
_idProps: {
service: idService,
name: "WithdrawalTextContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "text-neutral-8 full-width",
text: ["Withdrawal amount"],
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: right;"
},
style: "full-width",
visible: true,
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "margin-right-s",
value: (((((((OS.BuiltinFunctions.decimalToText(model.variables.withdrawalAmountInCryptoVar) + " ") + model.variables.activeWalletVar.currencyAttr) + " ≈ $") + OS.BuiltinFunctions.decimalToText(model.variables.withdrawalAmountInFiatVar)) + " (") + (model.variables.rateTimerVar).toString()) + "s)"),
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "display-flex justify-content-space-between",
visible: model.variables.cryptoPriorityWithdrawalVar,
_idProps: {
service: idService,
name: "PriorityWithdrawalFee"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width",
visible: true,
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "text-neutral-8",
text: ["Transaction fee"],
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
value: ((" (" + (model.variables.priorityWithdrawalTimerVar).toString()) + "s)"),
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: right;"
},
style: "full-width",
visible: true,
_idProps: {
service: idService,
uuid: "42"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "margin-right-s",
value: ((("- " + OS.BuiltinFunctions.decimalToText(model.variables.deserializePriorityWithdrawalInfoVar.valueAttr)) + " ") + model.variables.activeWalletVar.currencyAttr),
_idProps: {
service: idService,
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: model.variables.cryptoPriorityWithdrawalVar,
_idProps: {
service: idService,
uuid: "44"
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
Color: tradershubModel.staticEntities.color.neutral2,
Space: tradershubModel.staticEntities.space.small
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form1")
},
_idProps: {
service: idService,
uuid: "45",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "display-flex justify-content-space-between",
visible: model.variables.cryptoPriorityWithdrawalVar,
_idProps: {
service: idService,
name: "FinalWithdrawalAmount"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "text-neutral-8 full-width",
text: ["Amount received"],
_idProps: {
service: idService,
uuid: "47"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: right;"
},
style: "full-width",
visible: true,
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "margin-right-s",
value: model.getCachedValue(idService.getId("OHI9tPGW2ESEe+2jW9pXzA.Value"), function () {
return (((((((OS.BuiltinFunctions.decimalToText(((model.variables.withdrawalAmountVar.equals(OS.BuiltinFunctions.integerToDecimal(0))) ? ((OS.DataTypes.Decimal.defaultValue)) : (model.variables.withdrawalAmountVar))) + " ") + model.variables.activeWalletVar.currencyAttr) + " ≈ $") + OS.BuiltinFunctions.decimalToText(model.variables.withdrawalAmountInFiatVar)) + " (") + (model.variables.rateTimerVar).toString()) + "s)");
}, function () {
return model.variables.withdrawalAmountVar;
}, function () {
return model.variables.activeWalletVar.currencyAttr;
}, function () {
return model.variables.withdrawalAmountInFiatVar;
}, function () {
return model.variables.rateTimerVar;
}),
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
marginLeft: "Auto"
},
visible: true,
_idProps: {
service: idService,
name: "WithdrawalButtonContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: model.getCachedValue(idService.getId("TbUHtV+5ZUGHfWAHw9w8YQ.Enabled"), function () {
return !((((model.widgets.get(idService.getId("Input_CryptoAddress")).validAttr || model.widgets.get(idService.getId("Input_CryptoAmount")).validAttr) || (model.variables.cryptoAddressVar === OS.BuiltinFunctions.nullTextIdentifier())) || model.variables.withdrawalAmountVar.equals(OS.BuiltinFunctions.integerToDecimal(0))));
}, function () {
return model.widgets.get(idService.getId("Input_CryptoAddress")).validAttr;
}, function () {
return model.widgets.get(idService.getId("Input_CryptoAmount")).validAttr;
}, function () {
return model.variables.cryptoAddressVar;
}, function () {
return model.variables.withdrawalAmountVar;
}),
isDefault: true,
onClick: function () {
_this.validateWidget(idService.getId("Form1"));
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.withdrawOnClick$Action(controller.callContext(eventHandlerContext));
});

;
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
uuid: "51"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Withdraw"))))))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width",
visible: true,
_idProps: {
service: idService,
name: "IframeContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
src: model.variables.iframeUrlVar
},
tag: "iframe",
_idProps: {
service: idService,
name: "WithdrawalIframe"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})];
}),
mobileFooterContent: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "border-top: 1px solid var(--color-neutral-3);"
},
style: "padding-base background-neutral-0",
visible: true,
_idProps: {
service: idService,
uuid: "54"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column gap- margin-bottom-base",
visible: true,
_idProps: {
service: idService,
name: "BottomContainer2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex justify-content-space-between",
visible: true,
_idProps: {
service: idService,
name: "WithdrawalTextContainer2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: model.getCachedValue(idService.getId("IjKVD0JsykyUrHSmpLRZxw.Style"), function () {
return ("text-neutral-8 full-width " + ((model.variables.cryptoPriorityWithdrawalVar) ? ("font-size-xs") : ("font-size-s")));
}, function () {
return model.variables.cryptoPriorityWithdrawalVar;
}),
text: ["Withdrawal amount"],
_idProps: {
service: idService,
uuid: "57"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column align-items-flex-end full-width",
visible: true,
_idProps: {
service: idService,
uuid: "58"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "margin-right: 0px;"
},
style: model.getCachedValue(idService.getId("KVdeA+yLoUyi98IMj_VS8w.Style"), function () {
return (((model.variables.cryptoPriorityWithdrawalVar === true)) ? ("font-size-xs") : ("font-size-s"));
}, function () {
return model.variables.cryptoPriorityWithdrawalVar;
}),
value: ((OS.BuiltinFunctions.decimalToText(model.variables.withdrawalAmountInCryptoVar) + " ") + model.variables.activeWalletVar.currencyAttr),
_idProps: {
service: idService,
uuid: "59"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 12px;"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: model.getCachedValue(idService.getId("4tmEVDfe3k+ZzMXE3dC0Sw.Style"), function () {
return (((model.variables.cryptoPriorityWithdrawalVar === true)) ? ("display-none") : ("display-block"));
}, function () {
return model.variables.cryptoPriorityWithdrawalVar;
}),
value: ((((" ≈ $" + OS.BuiltinFunctions.decimalToText(model.variables.withdrawalAmountInFiatVar)) + " (") + (model.variables.rateTimerVar).toString()) + "s)"),
_idProps: {
service: idService,
uuid: "60"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "display-flex justify-content-space-between",
visible: model.variables.cryptoPriorityWithdrawalVar,
_idProps: {
service: idService,
name: "PriorityWithdrawalFee2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex margin-right-xs full-width",
visible: true,
_idProps: {
service: idService,
uuid: "62"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 12px;"
},
style: "text-neutral-8",
text: ["Transaction fee"],
_idProps: {
service: idService,
uuid: "63"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 12px;"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
value: ((" (" + (model.variables.priorityWithdrawalTimerVar).toString()) + "s)"),
_idProps: {
service: idService,
uuid: "64"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: right;"
},
style: "full-width",
visible: true,
_idProps: {
service: idService,
uuid: "65"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 12px;"
},
value: ((("- " + OS.BuiltinFunctions.decimalToText(model.variables.deserializePriorityWithdrawalInfoVar.valueAttr)) + " ") + model.variables.activeWalletVar.currencyAttr),
_idProps: {
service: idService,
uuid: "66"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: model.variables.cryptoPriorityWithdrawalVar,
_idProps: {
service: idService,
uuid: "67"
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
Space: tradershubModel.staticEntities.space.small,
Color: tradershubModel.staticEntities.color.neutral2
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
uuid: "68",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "display-flex justify-content-space-between",
visible: model.variables.cryptoPriorityWithdrawalVar,
_idProps: {
service: idService,
name: "FinalWithdrawalAmount2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "text-neutral-8 full-width",
text: ["Amount received"],
_idProps: {
service: idService,
uuid: "70"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column align-items-flex-end full-width",
visible: true,
_idProps: {
service: idService,
uuid: "71"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
marginLeft: "0px"
},
style: "margin-right-s",
value: ((OS.BuiltinFunctions.decimalToText(model.variables.finalCryptoAmountVar) + " ") + model.variables.activeWalletVar.currencyAttr),
_idProps: {
service: idService,
uuid: "72"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 12px;"
},
gridProperties: {
marginLeft: "0px"
},
value: (((("≈ $" + OS.BuiltinFunctions.decimalToText(model.variables.finalConvertedAmountVar)) + " (") + (model.variables.rateTimerVar).toString()) + "s)"),
_idProps: {
service: idService,
uuid: "73"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Button, {
enabled: model.getCachedValue(idService.getId("6umDgojwqEmJOA_S2bj7Hw.Enabled"), function () {
return !((((model.widgets.get(idService.getId("Input_CryptoAddress")).validAttr || model.widgets.get(idService.getId("Input_CryptoAmount")).validAttr) || (model.variables.cryptoAddressVar === OS.BuiltinFunctions.nullTextIdentifier())) || model.variables.withdrawalAmountVar.equals(OS.BuiltinFunctions.integerToDecimal(0))));
}, function () {
return model.widgets.get(idService.getId("Input_CryptoAddress")).validAttr;
}, function () {
return model.widgets.get(idService.getId("Input_CryptoAmount")).validAttr;
}, function () {
return model.variables.cryptoAddressVar;
}, function () {
return model.variables.withdrawalAmountVar;
}),
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.withdrawOnClick$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary full-width",
visible: true,
_idProps: {
service: idService,
uuid: "74"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Withdraw"))];
})
},
_dependencies: [asPrimitiveValue(model.variables.finalConvertedAmountVar), asPrimitiveValue(model.variables.finalCryptoAmountVar), asPrimitiveValue(model.variables.iframeUrlVar), asPrimitiveValue(model.widgets.get(idService.getId("Input_CryptoAmount")).validAttr), asPrimitiveValue(model.widgets.get(idService.getId("Input_CryptoAddress")).validAttr), asPrimitiveValue(model.variables.deserializePriorityWithdrawalInfoVar.valueAttr), asPrimitiveValue(model.variables.priorityWithdrawalTimerVar), asPrimitiveValue(model.variables.rateTimerVar), asPrimitiveValue(model.variables.withdrawalAmountInFiatVar), asPrimitiveValue(model.variables.withdrawalAmountInCryptoVar), asPrimitiveValue(model.variables.cryptoPriorityWithdrawalVar), asPrimitiveValue(model.variables.exchangeRateVar), asPrimitiveValue(model.variables.currencySwitcherVar), asPrimitiveValue(model.variables.withdrawalAmountVar), asPrimitiveValue(model.variables.cryptoAddressVar), asPrimitiveValue(model.variables.activeWalletVar.balanceAttr), asPrimitiveValue(model.variables.activeWalletVar.currencyAttr), asPrimitiveValue(model.variables.activeWalletVar.isCrpytoAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.finalConvertedAmountVar), asPrimitiveValue(model.variables.finalCryptoAmountVar), asPrimitiveValue(model.variables.iframeUrlVar), asPrimitiveValue(model.widgets.get(idService.getId("Input_CryptoAmount")).validAttr), asPrimitiveValue(model.widgets.get(idService.getId("Input_CryptoAddress")).validAttr), asPrimitiveValue(model.variables.deserializePriorityWithdrawalInfoVar.valueAttr), asPrimitiveValue(model.variables.priorityWithdrawalTimerVar), asPrimitiveValue(model.variables.rateTimerVar), asPrimitiveValue(model.variables.withdrawalAmountInFiatVar), asPrimitiveValue(model.variables.withdrawalAmountInCryptoVar), asPrimitiveValue(model.variables.cryptoPriorityWithdrawalVar), asPrimitiveValue(model.variables.exchangeRateVar), asPrimitiveValue(model.variables.currencySwitcherVar), asPrimitiveValue(model.variables.withdrawalAmountVar), asPrimitiveValue(model.variables.cryptoAddressVar), asPrimitiveValue(model.variables.activeWalletVar.balanceAttr), asPrimitiveValue(model.variables.activeWalletVar.currencyAttr), asPrimitiveValue(model.variables.activeWalletVar.isCrpytoAttr), asPrimitiveValue(model.variables.isLoadingVar)]
}));
        }
    }

    return View;
});
define("tradershub.WalletFlows.WalletsWithdrawal.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "YupValidationsOfficial.controller", "BrowserConsoleLogging.controller", "RESTAPIWebsocketOfficial.model", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.WalletFlows.WalletsWithdrawal.mvc$translationsResources", "tradershub.WalletFlows.controller", "tradershub.WalletFlows.WalletsWithdrawal.mvc$controller.OnChangeAddressInput.CryptoAddressValidationJS", "tradershub.WalletFlows.WalletsWithdrawal.mvc$controller.ConvertFiatToCrypto.ConvertCryptoToFiatJS", "tradershub.WalletFlows.WalletsWithdrawal.mvc$controller.OnChangeAmountInput.CryptoAmountValidationJS", "tradershub.WalletFlows.WalletsWithdrawal.mvc$controller.OnChangeAmountInput.TriggerExchangeRateJS", "tradershub.WalletFlows.WalletsWithdrawal.mvc$controller.GetExchangeRate.InitExchangeRateJS", "tradershub.WalletFlows.WalletsWithdrawal.mvc$controller.OnDestroy.JSDisposeTimerExchangeRateJS", "tradershub.WalletFlows.WalletsWithdrawal.mvc$controller.OnReady.SortConfigJS", "tradershub.WalletFlows.WalletsWithdrawal.mvc$controller.OnPriorityCheck.CalculateFinalCryptoAmountJS", "tradershub.WalletFlows.WalletsWithdrawal.mvc$controller.OnPriorityCheck.ConvertCryptoToFiatJS", "tradershub.WalletFlows.WalletsWithdrawal.mvc$controller.GetPriorityWithdrawalInfo.InitPriorityWithdrawalInfoJS", "tradershub.WalletFlows.WalletsWithdrawal.mvc$controller.ConvertCryptoToFiat.ConvertCryptoToFiatJS", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_3425849bb816196585dd6f07dbf2721dStructure", "tradershub.model$ST_a2aeee4ca5ab4ed88d1373d8beda118bStructure", "YupValidationsOfficial.controller$YupValidate", "tradershub.referencesHealth$YupValidationsOfficial", "BrowserConsoleLogging.controller$ConsoleLog", "tradershub.referencesHealth$BrowserConsoleLogging", "tradershub.controller$ExchangeRates", "tradershub.model$RL_caf4f8b8680e835a8e4e4bea133e8365", "tradershub.controller$GetWalletsList", "tradershub.controller$CryptoConfig", "RESTAPIWebsocketOfficial.model$ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$PostCashierFiat", "RESTAPIWebsocketOfficial.model$ST_2f46c6fecf81fe9d91763f789141eec9Structure", "tradershub.controller$PostCashierCryptoWithdraw", "tradershub.controller$CryptoEstimations"], function (OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, YupValidationsOfficialController, BrowserConsoleLoggingController, RESTAPIWebsocketOfficialModel, tradershubLanguageResources, tradershubClientVariables, tradershub_WalletFlows_WalletsWithdrawal_mvc_TranslationsResources, tradershub_WalletFlowsController, tradershub_WalletFlows_WalletsWithdrawal_mvc_controller_OnChangeAddressInput_CryptoAddressValidationJS, tradershub_WalletFlows_WalletsWithdrawal_mvc_controller_ConvertFiatToCrypto_ConvertCryptoToFiatJS, tradershub_WalletFlows_WalletsWithdrawal_mvc_controller_OnChangeAmountInput_CryptoAmountValidationJS, tradershub_WalletFlows_WalletsWithdrawal_mvc_controller_OnChangeAmountInput_TriggerExchangeRateJS, tradershub_WalletFlows_WalletsWithdrawal_mvc_controller_GetExchangeRate_InitExchangeRateJS, tradershub_WalletFlows_WalletsWithdrawal_mvc_controller_OnDestroy_JSDisposeTimerExchangeRateJS, tradershub_WalletFlows_WalletsWithdrawal_mvc_controller_OnReady_SortConfigJS, tradershub_WalletFlows_WalletsWithdrawal_mvc_controller_OnPriorityCheck_CalculateFinalCryptoAmountJS, tradershub_WalletFlows_WalletsWithdrawal_mvc_controller_OnPriorityCheck_ConvertCryptoToFiatJS, tradershub_WalletFlows_WalletsWithdrawal_mvc_controller_GetPriorityWithdrawalInfo_InitPriorityWithdrawalInfoJS, tradershub_WalletFlows_WalletsWithdrawal_mvc_controller_ConvertCryptoToFiat_ConvertCryptoToFiatJS) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, tradershub_WalletFlows_WalletsWithdrawal_mvc_TranslationsResources);
var controller = this.controller;
this.clientActionProxies = {
assignWithdrawalAmountInFiat$Action: function (assignWithdrawalAmountInFiatIn) {
assignWithdrawalAmountInFiatIn = (assignWithdrawalAmountInFiatIn === undefined) ? OS.DataTypes.Decimal.defaultValue : assignWithdrawalAmountInFiatIn;
return controller.executeActionInsideJSNode(controller._assignWithdrawalAmountInFiat$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(assignWithdrawalAmountInFiatIn, OS.DataTypes.DataTypes.Decimal)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "AssignWithdrawalAmountInFiat");
},
assignWithdrawalAmountInCrypto$Action: function (assignWithdrawalAmountInCryptoIn) {
assignWithdrawalAmountInCryptoIn = (assignWithdrawalAmountInCryptoIn === undefined) ? OS.DataTypes.Decimal.defaultValue : assignWithdrawalAmountInCryptoIn;
return controller.executeActionInsideJSNode(controller._assignWithdrawalAmountInCrypto$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(assignWithdrawalAmountInCryptoIn, OS.DataTypes.DataTypes.Decimal)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "AssignWithdrawalAmountInCrypto");
},
getExchangeRate$Action: function () {
return controller.executeActionInsideJSNode(controller._getExchangeRate$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "GetExchangeRate");
},
assignExchangeRate$Action: function (ratefromAPIIn) {
ratefromAPIIn = (ratefromAPIIn === undefined) ? "" : ratefromAPIIn;
return controller.executeActionInsideJSNode(controller._assignExchangeRate$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(ratefromAPIIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "AssignExchangeRate");
},
assignExchangeRateCountdownTimer$Action: function (countdownTimerIn) {
countdownTimerIn = (countdownTimerIn === undefined) ? 0 : countdownTimerIn;
return controller.executeActionInsideJSNode(controller._assignExchangeRateCountdownTimer$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(countdownTimerIn, OS.DataTypes.DataTypes.Integer)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "AssignExchangeRateCountdownTimer");
},
assignPriorityWithdrawalInfo$Action: function (priorityWithdrawalInfoObjIn) {
priorityWithdrawalInfoObjIn = (priorityWithdrawalInfoObjIn === undefined) ? "" : priorityWithdrawalInfoObjIn;
return controller.executeActionInsideJSNode(controller._assignPriorityWithdrawalInfo$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(priorityWithdrawalInfoObjIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "AssignPriorityWithdrawalInfo");
},
assignPriorityWithdrawalInfoCountdownTimer$Action: function (countdownTimerIn) {
countdownTimerIn = (countdownTimerIn === undefined) ? 0 : countdownTimerIn;
return controller.executeActionInsideJSNode(controller._assignPriorityWithdrawalInfoCountdownTimer$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(countdownTimerIn, OS.DataTypes.DataTypes.Integer)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "AssignPriorityWithdrawalInfoCountdownTimer");
}
};
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
get _onChangeAddressInput$Action() {if(!(this.hasOwnProperty("__onChangeAddressInput$Action"))) {
this.__onChangeAddressInput$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnChangeAddressInput", function (span) {
if(span) {
span.setAttribute("code.function", "OnChangeAddressInput");
span.setAttribute("outsystems.function.key", "0a476f32-b4f0-41a5-bc08-13a5e21440c9");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnChangeAddressInput");
callContext = controller.callContext(callContext);
OS.Logger.startActiveSpan("CryptoAddressValidation", function (span) {
if(span) {
span.setAttribute("code.function", "CryptoAddressValidation");
span.setAttribute("outsystems.function.key", "664f2905-e8d5-4848-80ea-da4067c19955");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_WalletFlows_WalletsWithdrawal_mvc_controller_OnChangeAddressInput_CryptoAddressValidationJS, "CryptoAddressValidation", "OnChangeAddressInput", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Input_CryptoAddress"), OS.DataTypes.DataTypes.Text),
CryptoAddress: OS.DataConversion.JSNodeParamConverter.to(model.variables.cryptoAddressVar, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {
YupValidate: YupValidationsOfficialController.default.clientActionProxies.yupValidate$Action
}, {});
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

return this.__onChangeAddressInput$Action;
}set _onChangeAddressInput$Action(value) {this.__onChangeAddressInput$Action = value;
}

get _convertFiatToCrypto$Action() {if(!(this.hasOwnProperty("__convertFiatToCrypto$Action"))) {
this.__convertFiatToCrypto$Action = function (latestRateIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("ConvertFiatToCrypto", function (span) {
if(span) {
span.setAttribute("code.function", "ConvertFiatToCrypto");
span.setAttribute("outsystems.function.key", "15e9eae6-6984-4b11-a4ef-3992ce49aedf");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("ConvertFiatToCrypto");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.ConvertFiatToCrypto$vars"))());
vars.value.latestRateInLocal = latestRateIn;
OS.Logger.startActiveSpan("ConvertCryptoToFiat", function (span) {
if(span) {
span.setAttribute("code.function", "ConvertCryptoToFiat");
span.setAttribute("outsystems.function.key", "3d694d27-e122-4c34-b22f-228ade7c2b2d");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_WalletFlows_WalletsWithdrawal_mvc_controller_ConvertFiatToCrypto_ConvertCryptoToFiatJS, "ConvertCryptoToFiat", "ConvertFiatToCrypto", {
ExchangeRates: OS.DataConversion.JSNodeParamConverter.to(vars.value.latestRateInLocal, OS.DataTypes.DataTypes.Text),
FiatAmount: OS.DataConversion.JSNodeParamConverter.to(model.variables.withdrawalAmountInCryptoVar, OS.DataTypes.DataTypes.Decimal)
}, function ($parameters) {
}, {
AssignWithdrawalAmountInFiat: controller.clientActionProxies.assignWithdrawalAmountInFiat$Action,
AssignWithdrawalAmountInCrypto: controller.clientActionProxies.assignWithdrawalAmountInCrypto$Action
}, {});
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

return this.__convertFiatToCrypto$Action;
}set _convertFiatToCrypto$Action(value) {this.__convertFiatToCrypto$Action = value;
}

get _onChangeAmountInput$Action() {if(!(this.hasOwnProperty("__onChangeAmountInput$Action"))) {
this.__onChangeAmountInput$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnChangeAmountInput", function (span) {
if(span) {
span.setAttribute("code.function", "OnChangeAmountInput");
span.setAttribute("outsystems.function.key", "408025f4-061f-4a09-9523-263ca04340df");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnChangeAmountInput");
callContext = controller.callContext(callContext);
OS.Logger.startActiveSpan("TriggerExchangeRate", function (span) {
if(span) {
span.setAttribute("code.function", "TriggerExchangeRate");
span.setAttribute("outsystems.function.key", "feb3af39-368b-4340-bf64-df165cdfc8f1");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_WalletFlows_WalletsWithdrawal_mvc_controller_OnChangeAmountInput_TriggerExchangeRateJS, "TriggerExchangeRate", "OnChangeAmountInput", {
InputId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Input_CryptoAmount"), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {
GetExchangeRate: controller.clientActionProxies.getExchangeRate$Action
}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// Execute Action: ConvertCryptoToFiat
controller._convertCryptoToFiat$Action(model.variables.exchangeRateVar, callContext);
// Execute Action: ConsoleLog
BrowserConsoleLoggingController.default.consoleLog$Action((((("fiat: " + OS.BuiltinFunctions.decimalToText(model.variables.withdrawalAmountInFiatVar)) + "===============================") + "crypto: ") + OS.BuiltinFunctions.decimalToText(model.variables.withdrawalAmountInCryptoVar)), 0, callContext);
if(((model.variables.currencySwitcherVar === model.variables.activeWalletVar.currencyAttr))) {
OS.Logger.startActiveSpan("CryptoAmountValidation", function (span) {
if(span) {
span.setAttribute("code.function", "CryptoAmountValidation");
span.setAttribute("outsystems.function.key", "ad5e806d-dbdf-4d11-9a47-3ecc98450efa");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_WalletFlows_WalletsWithdrawal_mvc_controller_OnChangeAmountInput_CryptoAmountValidationJS, "CryptoAmountValidation", "OnChangeAmountInput", {
WalletBalance: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.decimalToText(model.variables.activeWalletVar.balanceAttr), OS.DataTypes.DataTypes.Text),
MinimumWithdrawal: OS.DataConversion.JSNodeParamConverter.to(model.variables.cryptoMinimumWthdrawalAmountVar, OS.DataTypes.DataTypes.Text),
CryptoAmount: OS.DataConversion.JSNodeParamConverter.to(model.variables.withdrawalAmountVar, OS.DataTypes.DataTypes.Decimal),
Currency: OS.DataConversion.JSNodeParamConverter.to(model.variables.activeWalletVar.currencyAttr, OS.DataTypes.DataTypes.Text),
WidgetId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Input_CryptoAmount"), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {
YupValidate: YupValidationsOfficialController.default.clientActionProxies.yupValidate$Action
}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// Execute Action: AssignWithdrawalAmountInCrypto
controller._assignWithdrawalAmountInCrypto$Action(model.variables.withdrawalAmountVar, callContext);
} else {
// WithdrawalAmount = WithdrawalAmountInFiat
model.variables.withdrawalAmountVar = model.variables.withdrawalAmountInFiatVar;
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onChangeAmountInput$Action;
}set _onChangeAmountInput$Action(value) {this.__onChangeAmountInput$Action = value;
}

get _assignPriorityWithdrawalInfoCountdownTimer$Action() {if(!(this.hasOwnProperty("__assignPriorityWithdrawalInfoCountdownTimer$Action"))) {
this.__assignPriorityWithdrawalInfoCountdownTimer$Action = function (countdownTimerIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("AssignPriorityWithdrawalInfoCountdownTimer", function (span) {
if(span) {
span.setAttribute("code.function", "AssignPriorityWithdrawalInfoCountdownTimer");
span.setAttribute("outsystems.function.key", "43ec3a56-8414-4766-bbb8-b849bfa273f1");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("AssignPriorityWithdrawalInfoCountdownTimer");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.AssignPriorityWithdrawalInfoCountdownTimer$vars"))());
vars.value.countdownTimerInLocal = countdownTimerIn;
// PriorityWithdrawalTimer = CountdownTimer
model.variables.priorityWithdrawalTimerVar = vars.value.countdownTimerInLocal;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__assignPriorityWithdrawalInfoCountdownTimer$Action;
}set _assignPriorityWithdrawalInfoCountdownTimer$Action(value) {this.__assignPriorityWithdrawalInfoCountdownTimer$Action = value;
}

get _assignWithdrawalAmountInCrypto$Action() {if(!(this.hasOwnProperty("__assignWithdrawalAmountInCrypto$Action"))) {
this.__assignWithdrawalAmountInCrypto$Action = function (assignWithdrawalAmountInCryptoIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("AssignWithdrawalAmountInCrypto", function (span) {
if(span) {
span.setAttribute("code.function", "AssignWithdrawalAmountInCrypto");
span.setAttribute("outsystems.function.key", "4ffe8a9b-5083-4b84-91db-adbf073c6a32");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("AssignWithdrawalAmountInCrypto");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.AssignWithdrawalAmountInCrypto$vars"))());
vars.value.assignWithdrawalAmountInCryptoInLocal = assignWithdrawalAmountInCryptoIn;
// WithdrawalAmountInCrypto = AssignWithdrawalAmountInCrypto
model.variables.withdrawalAmountInCryptoVar = vars.value.assignWithdrawalAmountInCryptoInLocal;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__assignWithdrawalAmountInCrypto$Action;
}set _assignWithdrawalAmountInCrypto$Action(value) {this.__assignWithdrawalAmountInCrypto$Action = value;
}

get _getExchangeRate$Action() {if(!(this.hasOwnProperty("__getExchangeRate$Action"))) {
this.__getExchangeRate$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("GetExchangeRate", function (span) {
if(span) {
span.setAttribute("code.function", "GetExchangeRate");
span.setAttribute("outsystems.function.key", "50b90231-50ce-49f7-a8fa-f5316eded1d7");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("GetExchangeRate");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
return OS.Logger.startActiveSpan("InitExchangeRate", function (span) {
if(span) {
span.setAttribute("code.function", "InitExchangeRate");
span.setAttribute("outsystems.function.key", "d8d83704-73a0-48b8-a33a-5607b420b558");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteAsyncJSNode(tradershub_WalletFlows_WalletsWithdrawal_mvc_controller_GetExchangeRate_InitExchangeRateJS, "InitExchangeRate", "GetExchangeRate", {
TargetCurrency: OS.DataConversion.JSNodeParamConverter.to(model.variables.activeWalletVar.currencyAttr, OS.DataTypes.DataTypes.Text),
LoginId: OS.DataConversion.JSNodeParamConverter.to(model.variables.activeWalletVar.loginidAttr, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {
ExchangeRates: tradershubController.default.clientActionProxies.exchangeRates$Action,
AssignExchangeRate: controller.clientActionProxies.assignExchangeRate$Action,
AssignExchangeRateCountdownTimer: controller.clientActionProxies.assignExchangeRateCountdownTimer$Action
}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
});
}, function () {
if(span) {
span.end();
}

});
}, 1);
};
}

return this.__getExchangeRate$Action;
}set _getExchangeRate$Action(value) {this.__getExchangeRate$Action = value;
}

get _onDestroy$Action() {if(!(this.hasOwnProperty("__onDestroy$Action"))) {
this.__onDestroy$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnDestroy", function (span) {
if(span) {
span.setAttribute("code.function", "OnDestroy");
span.setAttribute("outsystems.function.key", "85eadef0-ce93-4a97-ab41-6b3483906d25");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
OS.Logger.startActiveSpan("JSDisposeTimerExchangeRate", function (span) {
if(span) {
span.setAttribute("code.function", "JSDisposeTimerExchangeRate");
span.setAttribute("outsystems.function.key", "1b09f50c-4838-4939-a718-a117de17eda2");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_WalletFlows_WalletsWithdrawal_mvc_controller_OnDestroy_JSDisposeTimerExchangeRateJS, "JSDisposeTimerExchangeRate", "OnDestroy", null, function ($parameters) {
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

return this.__onDestroy$Action;
}set _onDestroy$Action(value) {this.__onDestroy$Action = value;
}

get _onReady$Action() {if(!(this.hasOwnProperty("__onReady$Action"))) {
this.__onReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnReady", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "ab26ba76-7de9-4941-8bf7-73bde8185cd0");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var listFilterVar = new OS.DataTypes.VariableHolder();
var getWalletsListVar = new OS.DataTypes.VariableHolder();
var cryptoConfigVar = new OS.DataTypes.VariableHolder();
var postCashierFiatVar = new OS.DataTypes.VariableHolder();
var postCashierCryptoWithdrawVar = new OS.DataTypes.VariableHolder();
var sortConfigJSResult = new OS.DataTypes.VariableHolder();
var jSONSerializeActiveWalletVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: GetWalletsList
model.flush();
return tradershubController.default.getWalletsList$Action(callContext).then(function (value) {
getWalletsListVar.value = value;
}).then(function () {
// Execute Action: ListFilter
listFilterVar.value = OS.SystemActions.listFilter(getWalletsListVar.value.walletsListOut, function (p) {
return p.is_selectedAttr;
}, callContext);

// ActiveWallet = ListFilter.FilteredList.Current
model.variables.activeWalletVar = listFilterVar.value.filteredListOut.getCurrent(callContext.iterationContext);
// JSON Serialize: JSONSerializeActiveWallet
jSONSerializeActiveWalletVar.value.jSONOut = OS.JSONUtils.serializeToJSON(listFilterVar.value.filteredListOut, false, false);
// ActiveWallet = JSONSerializeActiveWallet.JSON
tradershubClientVariables.setActiveWallet(jSONSerializeActiveWalletVar.value.jSONOut);
}).then(function () {
return OS.Flow.executeSequence(function () {
if((model.variables.activeWalletVar.isCrpytoAttr)) {
// Execute Action: PostCashierCryptoWithdraw
model.flush();
return tradershubController.default.postCashierCryptoWithdraw$Action(tradershubClientVariables.getCode(), "", OS.DataTypes.Decimal.defaultValue, "", true, callContext).then(function (value) {
postCashierCryptoWithdrawVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if(((postCashierCryptoWithdrawVar.value.responseOut.errorAttr.codeAttr === "InvalidToken"))) {
// Destination: /tradershub/Wallets
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "wallets", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// Execute Action: CryptoConfig
model.flush();
return tradershubController.default.cryptoConfig$Action(callContext).then(function (value) {
cryptoConfigVar.value = value;
}).then(function () {
sortConfigJSResult.value = OS.Logger.startActiveSpan("SortConfig", function (span) {
if(span) {
span.setAttribute("code.function", "SortConfig");
span.setAttribute("outsystems.function.key", "53b3ef5a-0563-4841-b1c9-918d88a2aa43");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_WalletFlows_WalletsWithdrawal_mvc_controller_OnReady_SortConfigJS, "SortConfig", "OnReady", {
ActiveWalletCrypto: OS.DataConversion.JSNodeParamConverter.to(model.variables.activeWalletVar.currencyAttr, OS.DataTypes.DataTypes.Text),
CryptoConfigList: OS.DataConversion.JSNodeParamConverter.to(cryptoConfigVar.value.responseOut, OS.DataTypes.DataTypes.Text),
MinimumWithdrawal: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.OnReady$sortConfigJSResult"))();
jsNodeResult.minimumWithdrawalOut = OS.DataConversion.JSNodeParamConverter.from($parameters.MinimumWithdrawal, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// CryptoMinimumWthdrawalAmount = SortConfig.MinimumWithdrawal
model.variables.cryptoMinimumWthdrawalAmountVar = sortConfigJSResult.value.minimumWithdrawalOut;
// IsLoading = False
model.variables.isLoadingVar = false;
// CurrencySwitcher = ActiveWallet.Currency
model.variables.currencySwitcherVar = model.variables.activeWalletVar.currencyAttr;
});
}

});
});
} else {
// Execute Action: PostCashierFiat
model.flush();
return tradershubController.default.postCashierFiat$Action("withdraw", tradershubClientVariables.getCode(), callContext).then(function (value) {
postCashierFiatVar.value = value;
}).then(function () {
// IframeUrl = PostCashierFiat.Response.Cashier
model.variables.iframeUrlVar = postCashierFiatVar.value.responseOut.cashierAttr;
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

return this.__onReady$Action;
}set _onReady$Action(value) {this.__onReady$Action = value;
}

get _onPriorityCheck$Action() {if(!(this.hasOwnProperty("__onPriorityCheck$Action"))) {
this.__onPriorityCheck$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnPriorityCheck", function (span) {
if(span) {
span.setAttribute("code.function", "OnPriorityCheck");
span.setAttribute("outsystems.function.key", "c414b116-f0be-4c8b-822e-eb4563dbef67");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnPriorityCheck");
callContext = controller.callContext(callContext);
var calculateFinalCryptoAmountJSResult = new OS.DataTypes.VariableHolder();
var convertCryptoToFiatJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeWithdrawal_feeVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_a2aeee4ca5ab4ed88d1373d8beda118bStructure))());
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((model.variables.cryptoPriorityWithdrawalVar)) {
// Execute Action: GetPriorityWithdrawalInfo
return controller._getPriorityWithdrawalInfo$Action(callContext).then(function () {
// JSON Deserialize: JSONDeserializeWithdrawal_fee
jSONDeserializeWithdrawal_feeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(model.variables.serializePriorityWithdrawalInfoVar, tradershubModel.ST_a2aeee4ca5ab4ed88d1373d8beda118bStructure, false);
// DeserializePriorityWithdrawalInfo = JSONDeserializeWithdrawal_fee.Data
model.variables.deserializePriorityWithdrawalInfoVar = jSONDeserializeWithdrawal_feeVar.value.dataOut;
calculateFinalCryptoAmountJSResult.value = OS.Logger.startActiveSpan("CalculateFinalCryptoAmount", function (span) {
if(span) {
span.setAttribute("code.function", "CalculateFinalCryptoAmount");
span.setAttribute("outsystems.function.key", "22d8ad73-2d91-4a89-b431-2b1e10106d90");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_WalletFlows_WalletsWithdrawal_mvc_controller_OnPriorityCheck_CalculateFinalCryptoAmountJS, "CalculateFinalCryptoAmount", "OnPriorityCheck", {
TransactionFees: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.decimalToText(model.variables.deserializePriorityWithdrawalInfoVar.valueAttr), OS.DataTypes.DataTypes.Text),
CryptoAmount: OS.DataConversion.JSNodeParamConverter.to(model.variables.withdrawalAmountVar, OS.DataTypes.DataTypes.Decimal),
FinalAmount: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.Decimal.defaultValue, OS.DataTypes.DataTypes.Decimal)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.OnPriorityCheck$calculateFinalCryptoAmountJSResult"))();
jsNodeResult.finalAmountOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FinalAmount, OS.DataTypes.DataTypes.Decimal);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// FinalCryptoAmount = CalculateFinalCryptoAmount.FinalAmount
model.variables.finalCryptoAmountVar = calculateFinalCryptoAmountJSResult.value.finalAmountOut;
convertCryptoToFiatJSResult.value = OS.Logger.startActiveSpan("ConvertCryptoToFiat", function (span) {
if(span) {
span.setAttribute("code.function", "ConvertCryptoToFiat");
span.setAttribute("outsystems.function.key", "bc75d33b-05d8-4a3c-92b4-255f1e2466c6");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_WalletFlows_WalletsWithdrawal_mvc_controller_OnPriorityCheck_ConvertCryptoToFiatJS, "ConvertCryptoToFiat", "OnPriorityCheck", {
CryptoAmount: OS.DataConversion.JSNodeParamConverter.to(model.variables.finalCryptoAmountVar, OS.DataTypes.DataTypes.Decimal),
ExchangeRates: OS.DataConversion.JSNodeParamConverter.to(model.variables.exchangeRateVar, OS.DataTypes.DataTypes.Text),
ConvertedAmount: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.Decimal.defaultValue, OS.DataTypes.DataTypes.Decimal)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.OnPriorityCheck$convertCryptoToFiatJSResult"))();
jsNodeResult.convertedAmountOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ConvertedAmount, OS.DataTypes.DataTypes.Decimal);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// FinalConvertedAmount = ConvertCryptoToFiat.ConvertedAmount
model.variables.finalConvertedAmountVar = convertCryptoToFiatJSResult.value.convertedAmountOut;
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

return this.__onPriorityCheck$Action;
}set _onPriorityCheck$Action(value) {this.__onPriorityCheck$Action = value;
}

get _withdrawOnClick$Action() {if(!(this.hasOwnProperty("__withdrawOnClick$Action"))) {
this.__withdrawOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("WithdrawOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "WithdrawOnClick");
span.setAttribute("outsystems.function.key", "c4a029a2-74f4-4056-8f09-3e6837f1ec30");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("WithdrawOnClick");
callContext = controller.callContext(callContext);
var postCashierCryptoWithdrawVar = new OS.DataTypes.VariableHolder();
var postCashierCryptoPriorityWithdrawVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((model.widgets.get(idService.getId("Form1")).validAttr)) {
return OS.Flow.executeSequence(function () {
if((model.variables.cryptoPriorityWithdrawalVar)) {
// Execute Action: PostCashierCryptoPriorityWithdraw
model.flush();
return tradershubController.default.postCashierCryptoWithdraw$Action(tradershubClientVariables.getCode(), model.variables.cryptoAddressVar, model.variables.withdrawalAmountInCryptoVar, model.variables.deserializePriorityWithdrawalInfoVar.unique_idAttr, false, callContext).then(function (value) {
postCashierCryptoPriorityWithdrawVar.value = value;
});
} else {
// Execute Action: PostCashierCryptoWithdraw
model.flush();
return tradershubController.default.postCashierCryptoWithdraw$Action(tradershubClientVariables.getCode(), model.variables.cryptoAddressVar, model.variables.withdrawalAmountInCryptoVar, "", false, callContext).then(function (value) {
postCashierCryptoWithdrawVar.value = value;
}).then(function () {
if((!(postCashierCryptoWithdrawVar.value.isErrorOut))) {
// Destination: /tradershub/WalletsReceiptWithdrawal
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "WalletsReceiptWithdrawal", {
CryptoAddress: OS.DataConversion.ServerDataConverter.to(model.variables.cryptoAddressVar, OS.DataTypes.DataTypes.Text),
CryptoCurrency: OS.DataConversion.ServerDataConverter.to(model.variables.activeWalletVar.currencyAttr, OS.DataTypes.DataTypes.Text),
CryptoAmount: OS.DataConversion.ServerDataConverter.to(model.variables.withdrawalAmountVar, OS.DataTypes.DataTypes.Decimal)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
}

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

return this.__withdrawOnClick$Action;
}set _withdrawOnClick$Action(value) {this.__withdrawOnClick$Action = value;
}

get _assignExchangeRate$Action() {if(!(this.hasOwnProperty("__assignExchangeRate$Action"))) {
this.__assignExchangeRate$Action = function (ratefromAPIIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("AssignExchangeRate", function (span) {
if(span) {
span.setAttribute("code.function", "AssignExchangeRate");
span.setAttribute("outsystems.function.key", "c5246b56-6f85-44d7-bcd5-a5b94f42a371");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("AssignExchangeRate");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.AssignExchangeRate$vars"))());
vars.value.ratefromAPIInLocal = ratefromAPIIn;
// ExchangeRate = RatefromAPI
model.variables.exchangeRateVar = vars.value.ratefromAPIInLocal;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__assignExchangeRate$Action;
}set _assignExchangeRate$Action(value) {this.__assignExchangeRate$Action = value;
}

get _assignWithdrawalAmountInFiat$Action() {if(!(this.hasOwnProperty("__assignWithdrawalAmountInFiat$Action"))) {
this.__assignWithdrawalAmountInFiat$Action = function (assignWithdrawalAmountInFiatIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("AssignWithdrawalAmountInFiat", function (span) {
if(span) {
span.setAttribute("code.function", "AssignWithdrawalAmountInFiat");
span.setAttribute("outsystems.function.key", "cad6f440-8885-4398-85af-15c632aafb9c");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("AssignWithdrawalAmountInFiat");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.AssignWithdrawalAmountInFiat$vars"))());
vars.value.assignWithdrawalAmountInFiatInLocal = assignWithdrawalAmountInFiatIn;
// WithdrawalAmountInFiat = AssignWithdrawalAmountInFiat
model.variables.withdrawalAmountInFiatVar = vars.value.assignWithdrawalAmountInFiatInLocal;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__assignWithdrawalAmountInFiat$Action;
}set _assignWithdrawalAmountInFiat$Action(value) {this.__assignWithdrawalAmountInFiat$Action = value;
}

get _assignPriorityWithdrawalInfo$Action() {if(!(this.hasOwnProperty("__assignPriorityWithdrawalInfo$Action"))) {
this.__assignPriorityWithdrawalInfo$Action = function (priorityWithdrawalInfoObjIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("AssignPriorityWithdrawalInfo", function (span) {
if(span) {
span.setAttribute("code.function", "AssignPriorityWithdrawalInfo");
span.setAttribute("outsystems.function.key", "f21c7944-2ad4-4122-b71b-633a305b7c83");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("AssignPriorityWithdrawalInfo");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.AssignPriorityWithdrawalInfo$vars"))());
vars.value.priorityWithdrawalInfoObjInLocal = priorityWithdrawalInfoObjIn;
// SerializePriorityWithdrawalInfo = PriorityWithdrawalInfoObj
model.variables.serializePriorityWithdrawalInfoVar = vars.value.priorityWithdrawalInfoObjInLocal;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__assignPriorityWithdrawalInfo$Action;
}set _assignPriorityWithdrawalInfo$Action(value) {this.__assignPriorityWithdrawalInfo$Action = value;
}

get _getPriorityWithdrawalInfo$Action() {if(!(this.hasOwnProperty("__getPriorityWithdrawalInfo$Action"))) {
this.__getPriorityWithdrawalInfo$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("GetPriorityWithdrawalInfo", function (span) {
if(span) {
span.setAttribute("code.function", "GetPriorityWithdrawalInfo");
span.setAttribute("outsystems.function.key", "f8eafddc-12b2-44d7-a100-2cf6a71e4828");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("GetPriorityWithdrawalInfo");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
return OS.Logger.startActiveSpan("InitPriorityWithdrawalInfo", function (span) {
if(span) {
span.setAttribute("code.function", "InitPriorityWithdrawalInfo");
span.setAttribute("outsystems.function.key", "5d9ec4d3-2fc8-4259-87ab-a4363981cd2e");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteAsyncJSNode(tradershub_WalletFlows_WalletsWithdrawal_mvc_controller_GetPriorityWithdrawalInfo_InitPriorityWithdrawalInfoJS, "InitPriorityWithdrawalInfo", "GetPriorityWithdrawalInfo", {
Currency: OS.DataConversion.JSNodeParamConverter.to(model.variables.activeWalletVar.currencyAttr, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {
CryptoEstimations: tradershubController.default.clientActionProxies.cryptoEstimations$Action,
AssignPriorityWithdrawalInfo: controller.clientActionProxies.assignPriorityWithdrawalInfo$Action,
AssignPriorityWithdrawalInfoCountdownTimer: controller.clientActionProxies.assignPriorityWithdrawalInfoCountdownTimer$Action
}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
});
}, function () {
if(span) {
span.end();
}

});
}, 1);
};
}

return this.__getPriorityWithdrawalInfo$Action;
}set _getPriorityWithdrawalInfo$Action(value) {this.__getPriorityWithdrawalInfo$Action = value;
}

get _convertCryptoToFiat$Action() {if(!(this.hasOwnProperty("__convertCryptoToFiat$Action"))) {
this.__convertCryptoToFiat$Action = function (latestRateIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("ConvertCryptoToFiat", function (span) {
if(span) {
span.setAttribute("code.function", "ConvertCryptoToFiat");
span.setAttribute("outsystems.function.key", "fa4703a4-bd69-4e87-a64d-f00be92b104c");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("ConvertCryptoToFiat");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.ConvertCryptoToFiat$vars"))());
vars.value.latestRateInLocal = latestRateIn;
OS.Logger.startActiveSpan("ConvertCryptoToFiat", function (span) {
if(span) {
span.setAttribute("code.function", "ConvertCryptoToFiat");
span.setAttribute("outsystems.function.key", "14787770-22d8-4b42-845d-508db203d99a");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_WalletFlows_WalletsWithdrawal_mvc_controller_ConvertCryptoToFiat_ConvertCryptoToFiatJS, "ConvertCryptoToFiat", "ConvertCryptoToFiat", {
ExchangeRates: OS.DataConversion.JSNodeParamConverter.to(vars.value.latestRateInLocal, OS.DataTypes.DataTypes.Text),
CryptoAmount: OS.DataConversion.JSNodeParamConverter.to(model.variables.withdrawalAmountInCryptoVar, OS.DataTypes.DataTypes.Decimal)
}, function ($parameters) {
}, {
AssignWithdrawalAmountInCrypto: controller.clientActionProxies.assignWithdrawalAmountInCrypto$Action,
AssignWithdrawalAmountInFiat: controller.clientActionProxies.assignWithdrawalAmountInFiat$Action
}, {});
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

return this.__convertCryptoToFiat$Action;
}set _convertCryptoToFiat$Action(value) {this.__convertCryptoToFiat$Action = value;
}

get _assignExchangeRateCountdownTimer$Action() {if(!(this.hasOwnProperty("__assignExchangeRateCountdownTimer$Action"))) {
this.__assignExchangeRateCountdownTimer$Action = function (countdownTimerIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("AssignExchangeRateCountdownTimer", function (span) {
if(span) {
span.setAttribute("code.function", "AssignExchangeRateCountdownTimer");
span.setAttribute("outsystems.function.key", "fae7e59c-e28b-47a9-ad4f-309fa7f17d44");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("AssignExchangeRateCountdownTimer");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.AssignExchangeRateCountdownTimer$vars"))());
vars.value.countdownTimerInLocal = countdownTimerIn;
// RateTimer = CountdownTimer
model.variables.rateTimerVar = vars.value.countdownTimerInLocal;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__assignExchangeRateCountdownTimer$Action;
}set _assignExchangeRateCountdownTimer$Action(value) {this.__assignExchangeRateCountdownTimer$Action = value;
}


onChangeAddressInput$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnChangeAddressInput__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnChangeAddressInput");
span.setAttribute("outsystems.function.key", "0a476f32-b4f0-41a5-bc08-13a5e21440c9");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onChangeAddressInput$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

convertFiatToCrypto$Action(latestRateIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("ConvertFiatToCrypto__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "ConvertFiatToCrypto");
span.setAttribute("outsystems.function.key", "15e9eae6-6984-4b11-a4ef-3992ce49aedf");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._convertFiatToCrypto$Action, callContext, latestRateIn);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

onChangeAmountInput$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnChangeAmountInput__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnChangeAmountInput");
span.setAttribute("outsystems.function.key", "408025f4-061f-4a09-9523-263ca04340df");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onChangeAmountInput$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

assignPriorityWithdrawalInfoCountdownTimer$Action(countdownTimerIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("AssignPriorityWithdrawalInfoCountdownTimer__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "AssignPriorityWithdrawalInfoCountdownTimer");
span.setAttribute("outsystems.function.key", "43ec3a56-8414-4766-bbb8-b849bfa273f1");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._assignPriorityWithdrawalInfoCountdownTimer$Action, callContext, countdownTimerIn);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

assignWithdrawalAmountInCrypto$Action(assignWithdrawalAmountInCryptoIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("AssignWithdrawalAmountInCrypto__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "AssignWithdrawalAmountInCrypto");
span.setAttribute("outsystems.function.key", "4ffe8a9b-5083-4b84-91db-adbf073c6a32");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._assignWithdrawalAmountInCrypto$Action, callContext, assignWithdrawalAmountInCryptoIn);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

getExchangeRate$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("GetExchangeRate__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "GetExchangeRate");
span.setAttribute("outsystems.function.key", "50b90231-50ce-49f7-a8fa-f5316eded1d7");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._getExchangeRate$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

onDestroy$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnDestroy__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnDestroy");
span.setAttribute("outsystems.function.key", "85eadef0-ce93-4a97-ab41-6b3483906d25");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);
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
span.setAttribute("outsystems.function.key", "ab26ba76-7de9-4941-8bf7-73bde8185cd0");
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

onPriorityCheck$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnPriorityCheck__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnPriorityCheck");
span.setAttribute("outsystems.function.key", "c414b116-f0be-4c8b-822e-eb4563dbef67");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._onPriorityCheck$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

withdrawOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("WithdrawOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "WithdrawOnClick");
span.setAttribute("outsystems.function.key", "c4a029a2-74f4-4056-8f09-3e6837f1ec30");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._withdrawOnClick$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

assignExchangeRate$Action(ratefromAPIIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("AssignExchangeRate__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "AssignExchangeRate");
span.setAttribute("outsystems.function.key", "c5246b56-6f85-44d7-bcd5-a5b94f42a371");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._assignExchangeRate$Action, callContext, ratefromAPIIn);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

assignWithdrawalAmountInFiat$Action(assignWithdrawalAmountInFiatIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("AssignWithdrawalAmountInFiat__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "AssignWithdrawalAmountInFiat");
span.setAttribute("outsystems.function.key", "cad6f440-8885-4398-85af-15c632aafb9c");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._assignWithdrawalAmountInFiat$Action, callContext, assignWithdrawalAmountInFiatIn);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

assignPriorityWithdrawalInfo$Action(priorityWithdrawalInfoObjIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("AssignPriorityWithdrawalInfo__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "AssignPriorityWithdrawalInfo");
span.setAttribute("outsystems.function.key", "f21c7944-2ad4-4122-b71b-633a305b7c83");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._assignPriorityWithdrawalInfo$Action, callContext, priorityWithdrawalInfoObjIn);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

getPriorityWithdrawalInfo$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("GetPriorityWithdrawalInfo__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "GetPriorityWithdrawalInfo");
span.setAttribute("outsystems.function.key", "f8eafddc-12b2-44d7-a100-2cf6a71e4828");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._getPriorityWithdrawalInfo$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

convertCryptoToFiat$Action(latestRateIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("ConvertCryptoToFiat__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "ConvertCryptoToFiat");
span.setAttribute("outsystems.function.key", "fa4703a4-bd69-4e87-a64d-f00be92b104c");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._convertCryptoToFiat$Action, callContext, latestRateIn);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

assignExchangeRateCountdownTimer$Action(countdownTimerIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("AssignExchangeRateCountdownTimer__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "AssignExchangeRateCountdownTimer");
span.setAttribute("outsystems.function.key", "fae7e59c-e28b-47a9-ad4f-309fa7f17d44");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._assignExchangeRateCountdownTimer$Action, callContext, countdownTimerIn);
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
this._onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onDestroy$Action(callContext);

};
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
Controller.registerVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.ConvertFiatToCrypto$vars", [{
name: "LatestRate",
attrName: "latestRateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.AssignPriorityWithdrawalInfoCountdownTimer$vars", [{
name: "CountdownTimer",
attrName: "countdownTimerInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.registerVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.AssignWithdrawalAmountInCrypto$vars", [{
name: "AssignWithdrawalAmountInCrypto",
attrName: "assignWithdrawalAmountInCryptoInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
Controller.registerVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.OnReady$sortConfigJSResult", [{
name: "MinimumWithdrawal",
attrName: "minimumWithdrawalOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.OnPriorityCheck$calculateFinalCryptoAmountJSResult", [{
name: "FinalAmount",
attrName: "finalAmountOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
Controller.registerVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.OnPriorityCheck$convertCryptoToFiatJSResult", [{
name: "ConvertedAmount",
attrName: "convertedAmountOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
Controller.registerVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.AssignExchangeRate$vars", [{
name: "RatefromAPI",
attrName: "ratefromAPIInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.AssignWithdrawalAmountInFiat$vars", [{
name: "AssignWithdrawalAmountInFiat",
attrName: "assignWithdrawalAmountInFiatInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
Controller.registerVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.AssignPriorityWithdrawalInfo$vars", [{
name: "PriorityWithdrawalInfoObj",
attrName: "priorityWithdrawalInfoObjInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.ConvertCryptoToFiat$vars", [{
name: "LatestRate",
attrName: "latestRateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.AssignExchangeRateCountdownTimer$vars", [{
name: "CountdownTimer",
attrName: "countdownTimerInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);

}
return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.WalletFlows.WalletsWithdrawal.mvc$controller.OnChangeAddressInput.CryptoAddressValidationJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const payload = {
    CryptoAddress: $parameters.CryptoAddress
}

const CryptoAddressSchema = yup.object().shape({
  CryptoAddress: yup
    .string()
    .matches(/^[A-Za-z0-9]{25,64}$/, "Enter 25 to 64 letters and numbers. No spaces or special characters.")
});

const errors = $actions.YupValidate(CryptoAddressSchema, payload).Errors;

errors.CryptoAddress != "" ? $public.Validation.setWidgetAsInvalid($parameters.WidgetId, errors.CryptoAddress) : $public.Validation.setWidgetAsValid($parameters.WidgetId)
};
});

define("tradershub.WalletFlows.WalletsWithdrawal.mvc$controller.ConvertFiatToCrypto.ConvertCryptoToFiatJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const data = $parameters.ExchangeRates
const fiatAmount = $parameters.FiatAmount;
if (fiatAmount) {
    $actions.AssignWithdrawalAmountInFiat(fiatAmount)
}

const getConvertedCryptoAmount = (fiatInput) => {
    const rate = typeof data === 'string' ? parseFloat(data) : data;
    const convertedValue = fiatInput && rate ? (fiatInput * rate).toFixed(2) : 0;
    return parseFloat(convertedValue);
};

const cryptoAmount = getConvertedCryptoAmount(fiatAmount);
$actions.AssignWithdrawalAmountInCrypto(cryptoAmount)
};
});

define("tradershub.WalletFlows.WalletsWithdrawal.mvc$controller.OnChangeAmountInput.CryptoAmountValidationJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const payload = {
    CryptoAmount: $parameters.CryptoAmount
};

const minWithdrawalAmount = parseFloat($parameters.MinimumWithdrawal);
const currency = $parameters.Currency

const CryptoAmountSchema = yup.object().shape({
  CryptoAmount: yup.number()
    .test(
      "exceed-balance",
      "Insufficient funds",
      function (value) {
        return value <= $parameters.WalletBalance;
      }
    )
    .test(
      "min-withdrawal",
      `Minimum withdrawal amount is ${minWithdrawalAmount} ${currency}`,
      function (value) {
        return value >= minWithdrawalAmount;
      }
    )
});

const errors = $actions.YupValidate(CryptoAmountSchema, payload).Errors;

errors.CryptoAmount != "" ? $public.Validation.setWidgetAsInvalid($parameters.WidgetId, errors.CryptoAmount) : $public.Validation.setWidgetAsValid($parameters.WidgetId)

};
});

define("tradershub.WalletFlows.WalletsWithdrawal.mvc$controller.OnChangeAmountInput.TriggerExchangeRateJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
let inputFieldId = $parameters.InputId;

const node = document.getElementById(inputFieldId);
if (node) {
    const isDirty = node.getAttribute("data-dirty")
    if (isDirty === "False") {
        $actions.GetExchangeRate()
        node.setAttribute('data-dirty', "True")
    }
}
};
});

define("tradershub.WalletFlows.WalletsWithdrawal.mvc$controller.GetExchangeRate.InitExchangeRateJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
let countdown = 59;
window.timerInterval = null;
window.exchangeInterval = null;

window.getExchangeRate = async () => {
    let data = await $actions.ExchangeRates("USD", $parameters.TargetCurrency, $parameters.LoginId);
    let parsedResponse = JSON.parse(data.Response);
    const rate = parsedResponse.exchange_rates.rates[$parameters.TargetCurrency].toFixed(8);
    $actions.AssignExchangeRate(rate);
    countdown = 59;
    $resolve();
};

window.startCountdown = () => {
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    timerInterval = setInterval(() => {
        if (countdown > 0) {
            countdown--;
        }
        $actions.AssignExchangeRateCountdownTimer(countdown);
    }, 1000);

    return timerInterval;
};

window.cleanup = () => {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    if (exchangeInterval) {
        clearInterval(exchangeInterval);
        exchangeInterval = null;
    }
};

window.getExchangeRate().then(() => {
    window.timerIntervalRef = startCountdown();
    exchangeInterval = setInterval(getExchangeRate, 60000);
});
});
};
});

define("tradershub.WalletFlows.WalletsWithdrawal.mvc$controller.OnDestroy.JSDisposeTimerExchangeRateJS", [], function () {
return function ($actions, $roles, $public) {
window.clearInterval(window.timerInterval)
window.clearInterval(window.exchangeInterval)
window.clearInterval(window.priorityWithdrawalInterval)
window.clearInterval(window.cryptoPriorityWithdrawalInterval)
};
});

define("tradershub.WalletFlows.WalletsWithdrawal.mvc$controller.OnReady.SortConfigJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const cryptoConfigList = JSON.parse($parameters.CryptoConfigList);
const currency = $parameters.ActiveWalletCrypto;
const currencyConfig = cryptoConfigList.crypto_config.currencies_config;
$parameters.MinimumWithdrawal = JSON.stringify(currencyConfig[currency].minimum_withdrawal)

};
});

define("tradershub.WalletFlows.WalletsWithdrawal.mvc$controller.OnPriorityCheck.CalculateFinalCryptoAmountJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const crpytoAmount = $parameters.CryptoAmount;
const transactionFees = $parameters.TransactionFees

const finalCryptoAmount =  crpytoAmount - transactionFees
$parameters.FinalAmount = Number(finalCryptoAmount.toFixed(8));
};
});

define("tradershub.WalletFlows.WalletsWithdrawal.mvc$controller.OnPriorityCheck.ConvertCryptoToFiatJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const data = $parameters.ExchangeRates;

const getConvertedFiatAmount = (cryptoInput) => {
    const rate = typeof data === 'string' ? parseFloat(data) : data;
    cryptoInput = typeof cryptoInput === 'string' ? parseFloat(cryptoInput) : cryptoInput;
    const convertedValue = cryptoInput && rate ? (cryptoInput / rate).toFixed(2) : 0;
    return Number(convertedValue);
};

$parameters.ConvertedAmount = getConvertedFiatAmount($parameters.CryptoAmount);
};
});

define("tradershub.WalletFlows.WalletsWithdrawal.mvc$controller.GetPriorityWithdrawalInfo.InitPriorityWithdrawalInfoJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
let countdown = 59;
window.priorityWithdrawalInterval = null;
window.cryptoPriorityWithdrawalInterval = null;

window.getCryptoWithdrawalFees = async () => {
    let data = await $actions.CryptoEstimations($parameters.Currency);
    let parsedResponse = JSON.parse(data.Response);
    const withdrawalInfo = parsedResponse.crypto_estimations[$parameters.Currency].withdrawal_fee;
    const formattedWithdrawalInfo = {
        ...withdrawalInfo,
        value: withdrawalInfo.value.toFixed(8)
    }
    $actions.AssignPriorityWithdrawalInfo(JSON.stringify(formattedWithdrawalInfo));
    countdown = 59;
    $resolve();
};

window.startCountdown = () => {
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    timerInterval = setInterval(() => {
        if (countdown > 0) {
            countdown--;
        }
         $actions.AssignPriorityWithdrawalInfoCountdownTimer(countdown);
    }, 1000);

    return timerInterval;
};

window.cleanup = () => {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    if (cryptoPriorityWithdrawalInterval) {
        clearInterval(cryptoPriorityWithdrawalInterval);
        cryptoPriorityWithdrawalInterval = null;
    }
};

getCryptoWithdrawalFees().then(() => {
    window.priorityWithdrawalInterval = startCountdown();
    window.cryptoPriorityWithdrawalInterval = setInterval(getCryptoWithdrawalFees, 60000)
})
});
};
});

define("tradershub.WalletFlows.WalletsWithdrawal.mvc$controller.ConvertCryptoToFiat.ConvertCryptoToFiatJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const data = $parameters.ExchangeRates
const crptoAmount = $parameters.CryptoAmount
if (crptoAmount) {
    $actions.AssignWithdrawalAmountInCrypto(crptoAmount)
}

const getConvertedFiatAmount = (cryptoInput) => {
    const rate = typeof data === 'string' ? parseFloat(data) : data;
    const convertedValue = cryptoInput && rate ? (cryptoInput/rate).toFixed(2) : 0;
    return parseFloat(convertedValue);
};

const fiatAmount = getConvertedFiatAmount(crptoAmount);
$actions.AssignWithdrawalAmountInFiat(fiatAmount);
};
});


define("tradershub.WalletFlows.WalletsWithdrawal.mvc$translationsResources", ["exports"], function (exports) {
return {};
});

