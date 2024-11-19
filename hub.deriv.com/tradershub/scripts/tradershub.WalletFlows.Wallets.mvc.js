define("tradershub.WalletFlows.Wallets.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.controller", "tradershub.controller", "RESTAPIWebsocketOfficial.model", "tradershub.Layouts.MainLayout.mvc$model", "tradershub.WalletBlocks.WalletsAddMoreSection.mvc$model", "tradershub.WalletBlocks.WalletsTransaction.mvc$model", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_3425849bb816196585dd6f07dbf2721dStructure", "tradershub.model$ST_98879cbf153f8de2b881b6fbde3b59bdStructure", "tradershub.model$RL_88c19a254c0070e215d8cb4352d11d8e", "tradershub.model$RL_caf4f8b8680e835a8e4e4bea133e8365", "tradershub.model$ST_8d13a623b49206489b5e6a1ae6e8f83bStructure", "tradershub.model$RL_b77379af5af37780f732b1c31400a3ed", "tradershub.model$ST_fdf7cabb83e72ffff66e8d7681355660Structure", "tradershub.controller$GetWalletsList", "tradershub.model$ST_290a67dab0570e5bf53bc562ec0f2742Structure", "tradershub.controller$Statement", "tradershub.controller$GetCurrencyIcon", "tradershub.model$RC_6a44851bc01e80a885c4aa0ae740b8fc", "tradershub.model$RL_5ee36d8deb03b51810340e621ea66d4b", "RESTAPIWebsocketOfficial.model$ST_746d074ddcc08e0df3b269ffb1933d5aStructure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$GetAccountStatus2"], function (OSRuntimeCore, tradershubModel, OutSystemsUIController, tradershubController, RESTAPIWebsocketOfficialModel, tradershub_Layouts_MainLayout_mvcModel, tradershub_WalletBlocks_WalletsAddMoreSection_mvcModel, tradershub_WalletBlocks_WalletsTransaction_mvcModel) {
var OS = OSRuntimeCore;
{class GetCurrenciesByCodeAggrRecInner extends 
OS.Model.AggregateRecord {
static attributesToDeclare() {
return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new GetCurrenciesByCodeAggrRec(new GetCurrenciesByCodeAggrRec.RecordClass({
RecordListType: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

GetCurrenciesByCodeAggrRecInner.RecordListType = tradershubModel.RL_5ee36d8deb03b51810340e621ea66d4b;
var GetCurrenciesByCodeAggrRec = GetCurrenciesByCodeAggrRecInner;
GetCurrenciesByCodeAggrRec.init();
}


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("ActiveWallet", "activeWalletVar", "ActiveWallet", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_3425849bb816196585dd6f07dbf2721dStructure());
}, false, tradershubModel.ST_3425849bb816196585dd6f07dbf2721dStructure), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("Transactions", "transactionsVar", "Transactions", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_88c19a254c0070e215d8cb4352d11d8e());
}, false, tradershubModel.RL_88c19a254c0070e215d8cb4352d11d8e), 
this.attr("WalletsAccountList", "walletsAccountListVar", "WalletsAccountList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_caf4f8b8680e835a8e4e4bea133e8365());
}, false, tradershubModel.RL_caf4f8b8680e835a8e4e4bea133e8365), 
this.attr("GetCurrenciesByCode", "getCurrenciesByCodeAggr", "GetCurrenciesByCode", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetCurrenciesByCodeAggrRec());
}, true, GetCurrenciesByCodeAggrRec)
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
Model._hasValidationWidgetsValue = ((tradershub_Layouts_MainLayout_mvcModel.hasValidationWidgets || tradershub_WalletBlocks_WalletsAddMoreSection_mvcModel.hasValidationWidgets) || tradershub_WalletBlocks_WalletsTransaction_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("tradershub.WalletFlows.Wallets.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "RESTAPIWebsocketOfficial.model", "react", "@outsystems/runtime-view-js", "tradershub.WalletFlows.Wallets.mvc$model", "tradershub.WalletFlows.Wallets.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.MainLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.WalletBlocks.WalletsAddMoreSection.mvc$view", "tradershub.WalletBlocks.WalletsTransaction.mvc$view", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_3425849bb816196585dd6f07dbf2721dStructure", "tradershub.model$ST_98879cbf153f8de2b881b6fbde3b59bdStructure", "tradershub.model$RL_88c19a254c0070e215d8cb4352d11d8e", "tradershub.model$RL_caf4f8b8680e835a8e4e4bea133e8365", "tradershub.model$ST_8d13a623b49206489b5e6a1ae6e8f83bStructure", "tradershub.model$RL_b77379af5af37780f732b1c31400a3ed", "tradershub.model$ST_fdf7cabb83e72ffff66e8d7681355660Structure", "tradershub.controller$GetWalletsList", "tradershub.model$ST_290a67dab0570e5bf53bc562ec0f2742Structure", "tradershub.controller$Statement", "tradershub.controller$GetCurrencyIcon", "tradershub.model$RC_6a44851bc01e80a885c4aa0ae740b8fc", "tradershub.model$RL_5ee36d8deb03b51810340e621ea66d4b", "RESTAPIWebsocketOfficial.model$ST_746d074ddcc08e0df3b269ffb1933d5aStructure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$GetAccountStatus2"], function (OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, RESTAPIWebsocketOfficialModel, React, OSView, tradershub_WalletFlows_Wallets_mvc_model, tradershub_WalletFlows_Wallets_mvc_controller, tradershubClientVariables, tradershub_Layouts_MainLayout_mvc_view, OSWidgets, tradershub_WalletBlocks_WalletsAddMoreSection_mvc_view, tradershub_WalletBlocks_WalletsTransaction_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() { return "WalletFlows.Wallets"; }

        static getAttributes() { return {
codeFunction: "Wallets",
functionKey: "1089ee43-f5d0-45b1-99c6-5fafb2195171",
functionOwnerName: "tradershub",
functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.WalletFlows.Wallets.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_MainLayout_mvc_view, tradershub_WalletBlocks_WalletsAddMoreSection_mvc_view, tradershub_WalletBlocks_WalletsTransaction_mvc_view];
        }

        get modelFactory() {
            return tradershub_WalletFlows_Wallets_mvc_model;
        }

        get controllerFactory() {
            return tradershub_WalletFlows_Wallets_mvc_controller;
        }

        get title() {
            

            return OSView.BaseView.BaseWebScreen.getTranslation("Q+6JEND1sUWZxl+vshlRcQ#Title", "Wallets");
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
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wallet-heading-container",
visible: true,
_idProps: {
service: idService,
name: "WalletSwitcher"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "wallet-heading-title",
text: ["My Wallets"],
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wallet-container",
visible: true,
_idProps: {
service: idService,
name: "WalletContent"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wallet-left-side",
visible: true,
_idProps: {
service: idService,
name: "LeftContent"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.isLoadingVar, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wallet-header-skeleton wallet-skeleton",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wallet-header wallet-header-primary",
visible: true,
_idProps: {
service: idService,
name: "WalletHeader"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wallet-header-info-wrapper",
visible: true,
_idProps: {
service: idService,
name: "WalletHeaderInfoWrapper"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wallet-header-currency-icon",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
type: /*External*/ 1,
url: model.variables.activeWalletVar.iconAttr,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "flex-1",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("1ukwUKv2zkW0DNrTl4JakQ.Style"), function () {
return ((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut) ? ("font-size-s") : ("font-size-xs"));
}),
value: model.variables.activeWalletVar.nameAttr,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 20px;"
},
gridProperties: {
marginLeft: "0px"
},
style: "font-bold heading5 full-width",
value: model.variables.activeWalletVar.formattedBalanceAttr,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: model.getCachedValue(idService.getId("VFwAheGyjku4M5hTVBQ+XA.Visible"), function () {
return !(OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut);
}),
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.onClick$Action(controller.callContext(eventHandlerContext));

;
}
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
style: "cursor-pointer",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wallet-header-actions",
visible: true,
_idProps: {
service: idService,
name: "WalletHeaderActions"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column align-items-center",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.depositbtnOnClick$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "wallet-header-btn wallet-header-btn-primary",
visible: true,
_idProps: {
service: idService,
name: "DepositBtn2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.plussmwhite.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 12px;"
},
style: "margin-top-xs",
text: [$text(getTranslation("gcJUiGquMUWqpLcbsdW73w#Value", "Deposit"))],
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column align-items-center",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: "border-color: #101213; border-width: 1px; margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
},
gridProperties: {
marginLeft: "0px"
},
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.withdrawbtnOnClick$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "wallet-header-btn",
visible: true,
_idProps: {
service: idService,
name: "WithdrawBtn3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.minussm.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 12px;"
},
style: "margin-top-xs",
text: [$text(getTranslation("TQspuQyAvkSRgErcd8fcBA#Value", "Withdraw"))],
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column align-items-center",
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: "border-color: #101213; border-width: 1px; padding: 0px 16px 0px 16px;"
},
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
style: "wallet-header-btn",
visible: true,
_idProps: {
service: idService,
name: "TransferBtn2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedProperties: {
style: "color: #222;"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.arrowuparrowdownsm.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 12px;"
},
style: "margin-top-xs",
text: [$text(getTranslation("SdHIl6tDZEWkp0OR+ao6XQ#Value", "Transfer"))],
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: model.getCachedValue(idService.getId("u+fJY0xzhECxkM21RmE4lQ.Visible"), function () {
return OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut;
}),
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.onClick$Action(controller.callContext(eventHandlerContext));

;
}
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
style: "cursor-pointer",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}))))];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "MoreWallet"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 16px; font-weight: bold;"
},
text: ["More wallets"],
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width full-height margin-top-base",
visible: true,
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.isLoadingVar, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wallets-add-more-section",
visible: true,
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "border-radius: 8px;"
},
style: "wallets-add-more-cards wallet-skeleton",
visible: true,
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "border-radius: 8px;"
},
style: "wallets-add-more-cards wallet-skeleton",
visible: true,
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
style: "border-radius: 8px;"
},
style: "wallets-add-more-cards wallet-skeleton",
visible: model.getCachedValue(idService.getId("tch6qJCeQ0el1kK45s1D5w.Visible"), function () {
return OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut;
}),
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
style: "border-radius: 8px;"
},
style: "wallets-add-more-cards wallet-skeleton",
visible: model.getCachedValue(idService.getId("289t+knnd0OXMgxXG1ojcg.Visible"), function () {
return OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut;
}),
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
style: "border-radius: 8px;"
},
style: "wallets-add-more-cards wallet-skeleton",
visible: model.getCachedValue(idService.getId("aexT2FMH0EyT6eUnH661xw.Visible"), function () {
return OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut;
}),
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
style: "border-radius: 8px;"
},
style: "wallets-add-more-cards wallet-skeleton",
visible: model.getCachedValue(idService.getId("w3t8jPiAKk6e14CPw4xj1A.Visible"), function () {
return OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut;
}),
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, function () {
return [React.createElement(tradershub_WalletBlocks_WalletsAddMoreSection_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
WalletsAccountList: model.variables.walletsAccountListVar
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
uuid: "41",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wallets-recent-transactions",
visible: true,
_idProps: {
service: idService,
name: "WalletRecentTransaction"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "TransactionsWrapper"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 16px;"
},
style: "font-bold",
text: ["Recent transactions"],
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-top-base",
visible: true,
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.isLoadingVar, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "border-radius: 8px;"
},
style: "wallets-recent-transactions-skeleton wallet-skeleton",
visible: true,
_idProps: {
service: idService,
uuid: "46"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [$if(model.variables.transactionsVar.isEmpty, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column align-items-center justify-content-center",
visible: true,
_idProps: {
service: idService,
name: "EmptyTransactionContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "border-color: #6a7178; font-size: 14px;"
},
text: [$text(getTranslation("0N1NgjOCaEauNiGFFzpGqA#Value", "No transactions found"))],
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, function () {
return [React.createElement(tradershub_WalletBlocks_WalletsTransaction_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
TransactionsList: model.variables.transactionsVar
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
uuid: "49",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
})))))];
})
},
_dependencies: [asPrimitiveValue(model.variables.transactionsVar), asPrimitiveValue(model.variables.walletsAccountListVar), asPrimitiveValue(model.variables.activeWalletVar.formattedBalanceAttr), asPrimitiveValue(model.variables.activeWalletVar.nameAttr), asPrimitiveValue(model.variables.activeWalletVar.iconAttr), asPrimitiveValue(model.variables.isLoadingVar)]
}));
        }
    }

    return View;
});
define("tradershub.WalletFlows.Wallets.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "RESTAPIWebsocketOfficial.model", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.WalletFlows.Wallets.mvc$translationsResources", "tradershub.WalletFlows.controller", "tradershub.WalletFlows.Wallets.mvc$controller.OnReady.MapTransactionsJS", "tradershub.WalletFlows.Wallets.mvc$controller.OnReady.GetWalletIconJS", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_3425849bb816196585dd6f07dbf2721dStructure", "tradershub.model$ST_98879cbf153f8de2b881b6fbde3b59bdStructure", "tradershub.model$RL_88c19a254c0070e215d8cb4352d11d8e", "tradershub.model$RL_caf4f8b8680e835a8e4e4bea133e8365", "tradershub.model$ST_8d13a623b49206489b5e6a1ae6e8f83bStructure", "tradershub.model$RL_b77379af5af37780f732b1c31400a3ed", "tradershub.model$ST_fdf7cabb83e72ffff66e8d7681355660Structure", "tradershub.controller$GetWalletsList", "tradershub.model$ST_290a67dab0570e5bf53bc562ec0f2742Structure", "tradershub.controller$Statement", "tradershub.controller$GetCurrencyIcon", "tradershub.model$RC_6a44851bc01e80a885c4aa0ae740b8fc", "tradershub.model$RL_5ee36d8deb03b51810340e621ea66d4b", "RESTAPIWebsocketOfficial.model$ST_746d074ddcc08e0df3b269ffb1933d5aStructure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$GetAccountStatus2"], function (OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, RESTAPIWebsocketOfficialModel, tradershubLanguageResources, tradershubClientVariables, tradershub_WalletFlows_Wallets_mvc_TranslationsResources, tradershub_WalletFlowsController, tradershub_WalletFlows_Wallets_mvc_controller_OnReady_MapTransactionsJS, tradershub_WalletFlows_Wallets_mvc_controller_OnReady_GetWalletIconJS) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, tradershub_WalletFlows_Wallets_mvc_TranslationsResources);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getCurrenciesByCode$AggrRefresh: 0
};
this.dataFetchDependentsGraph = {
getCurrenciesByCode$AggrRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}

// Server Actions - Methods

// Aggregates and Data Actions
get getCurrenciesByCode$AggrRefresh() {if(!(this.hasOwnProperty("_getCurrenciesByCode$AggrRefresh"))) {
this._getCurrenciesByCode$AggrRefresh = function () {
var innerBody = function (maxRecords, startIndex, callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetCurrenciesByCode", "screenservices/tradershub/WalletFlows/Wallets/ScreenDataSetGetCurrenciesByCode", "VYo+3uArs1A1OaLtqWcwfg", maxRecords, startIndex, function (b) {
model.variables.getCurrenciesByCodeAggr.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getCurrenciesByCodeAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getCurrenciesByCodeAggr.constructor));
}, undefined, undefined, undefined, callContext, undefined, true).then(function () {
return controller._onReady$Action(controller.callContext(callContext));
});
}.bind(this);
return OS.Logger.startActiveSpan("GetCurrenciesByCode", function (span) {
if(span) {
span.setAttribute("code.function", "GetCurrenciesByCode");
span.setAttribute("outsystems.function.key", "4b2c963b-8d82-433c-9589-08746a327840");
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

return this._getCurrenciesByCode$AggrRefresh;
}set getCurrenciesByCode$AggrRefresh(value) {this._getCurrenciesByCode$AggrRefresh = value;
}


get dataFetchActionNames() {if(!(this.hasOwnProperty("_dataFetchActionNames"))) {
this._dataFetchActionNames = ["getCurrenciesByCode$AggrRefresh"];
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
span.setAttribute("outsystems.function.key", "0cc02097-4ce0-4ede-8f47-494b4f8b014b");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var listFilterVar = new OS.DataTypes.VariableHolder();
var getWalletsListVar = new OS.DataTypes.VariableHolder();
var statementVar = new OS.DataTypes.VariableHolder();
var mapTransactionsJSResult = new OS.DataTypes.VariableHolder();
var getWalletIconJSResult = new OS.DataTypes.VariableHolder();
var jSONSerializeCurrencyListVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONSerializeWalletsListVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONSerializeTransactionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var serializeActiveWalletVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONDeserializeFormattedTransactionItemListVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_88c19a254c0070e215d8cb4352d11d8e))());
var jSONDeserializeWalletsAccountListVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_caf4f8b8680e835a8e4e4bea133e8365))());
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: GetWalletsList
model.flush();
return tradershubController.default.getWalletsList$Action(callContext).then(function (value) {
getWalletsListVar.value = value;
}).then(function () {
// Execute Action: Statement
model.flush();
return tradershubController.default.statement$Action("", "", callContext).then(function (value) {
statementVar.value = value;
});
}).then(function () {
// JSON Serialize: JSONSerializeWalletsList
jSONSerializeWalletsListVar.value.jSONOut = OS.JSONUtils.serializeToJSON(getWalletsListVar.value.walletsListOut, false, false);
// JSON Serialize: JSONSerializeCurrencyList
jSONSerializeCurrencyListVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.getCurrenciesByCodeAggr.listOut, false, false);
// JSON Serialize: JSONSerializeTransactions
jSONSerializeTransactionsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(statementVar.value.responseOut.statementAttr.transactionsAttr, false, false);
getWalletIconJSResult.value = OS.Logger.startActiveSpan("GetWalletIcon", function (span) {
if(span) {
span.setAttribute("code.function", "GetWalletIcon");
span.setAttribute("outsystems.function.key", "d9d4f0eb-b1c1-4138-9b76-86aa1b57d77d");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_WalletFlows_Wallets_mvc_controller_OnReady_GetWalletIconJS, "GetWalletIcon", "OnReady", {
CurrencyList: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeCurrencyListVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
WalletAccountsList: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeWalletsListVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
WalletAccountsListWithIcon: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.WalletFlows.Wallets.OnReady$getWalletIconJSResult"))();
jsNodeResult.walletAccountsListWithIconOut = OS.DataConversion.JSNodeParamConverter.from($parameters.WalletAccountsListWithIcon, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {
GetCurrencyIcon: tradershubController.default.clientActionProxies.getCurrencyIcon$Action
}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
mapTransactionsJSResult.value = OS.Logger.startActiveSpan("MapTransactions", function (span) {
if(span) {
span.setAttribute("code.function", "MapTransactions");
span.setAttribute("outsystems.function.key", "5ef9e4c4-751f-4056-aaec-8b3656a939c4");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_WalletFlows_Wallets_mvc_controller_OnReady_MapTransactionsJS, "MapTransactions", "OnReady", {
Transactions: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeTransactionsVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
WalletsList: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeWalletsListVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
FormattedTransactions: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.WalletFlows.Wallets.OnReady$mapTransactionsJSResult"))();
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
// JSON Deserialize: JSONDeserializeWalletsAccountList
jSONDeserializeWalletsAccountListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(getWalletIconJSResult.value.walletAccountsListWithIconOut, tradershubModel.RL_caf4f8b8680e835a8e4e4bea133e8365, false);
// Transactions = JSONDeserializeFormattedTransactionItemList.Data
model.variables.transactionsVar = jSONDeserializeFormattedTransactionItemListVar.value.dataOut;
// WalletsAccountList = JSONDeserializeWalletsAccountList.Data
model.variables.walletsAccountListVar = jSONDeserializeWalletsAccountListVar.value.dataOut;
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: ListFilter
listFilterVar.value = OS.SystemActions.listFilter(model.variables.walletsAccountListVar, function (p) {
return (p.is_selectedAttr === true);
}, callContext);

// ActiveWallet = ListFilter.FilteredList.Current
model.variables.activeWalletVar = listFilterVar.value.filteredListOut.getCurrent(callContext.iterationContext);
// JSON Serialize: SerializeActiveWallet
serializeActiveWalletVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.activeWalletVar, false, false);
// ActiveWallet = SerializeActiveWallet.JSON
tradershubClientVariables.setActiveWallet(serializeActiveWalletVar.value.jSONOut);
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

get _onClick$Action() {if(!(this.hasOwnProperty("__onClick$Action"))) {
this.__onClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnClick", function (span) {
if(span) {
span.setAttribute("code.function", "OnClick");
span.setAttribute("outsystems.function.key", "1ee8c892-2e72-4cf7-84b0-9b852aafa55c");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnClick");
callContext = controller.callContext(callContext);
// Destination: /tradershub/WalletsRecentTransactions
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "wallets/recent-transactions", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onClick$Action;
}set _onClick$Action(value) {this.__onClick$Action = value;
}

get _withdrawbtnOnClick$Action() {if(!(this.hasOwnProperty("__withdrawbtnOnClick$Action"))) {
this.__withdrawbtnOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("WithdrawbtnOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "WithdrawbtnOnClick");
span.setAttribute("outsystems.function.key", "3daf9e51-bbee-431d-9940-8c0753c70291");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("WithdrawbtnOnClick");
callContext = controller.callContext(callContext);
var getAccountStatus2Var = new OS.DataTypes.VariableHolder();
var accountStatusListVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: GetAccountStatus2
model.flush();
return tradershubController.default.getAccountStatus2$Action(callContext).then(function (value) {
getAccountStatus2Var.value = value;
}).then(function () {
// Execute Action: AccountStatusList
accountStatusListVar.value = OS.SystemActions.listFilter(getAccountStatus2Var.value.responseOut.getAccountStatusAttr.statusAttr, function (p) {
return (p === "cashier_locked");
}, callContext);

}).then(function () {
if(((accountStatusListVar.value.filteredListOut.length > 0))) {
// Destination: /tradershub/WalletsDisableWithdrawal
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "wallets/withdrawal/disable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
if((model.variables.activeWalletVar.balanceAttr.gt(OS.BuiltinFunctions.integerToDecimal(0)))) {
// Destination: /tradershub/WalletsUserVerificationWithdrawal
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "wallets/withdrawal/user-verification", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// Destination: /tradershub/WalletsNoBalanceWithdrawal
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "wallets/withdrawal/no-balance", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

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

return this.__withdrawbtnOnClick$Action;
}set _withdrawbtnOnClick$Action(value) {this.__withdrawbtnOnClick$Action = value;
}

get _depositbtnOnClick$Action() {if(!(this.hasOwnProperty("__depositbtnOnClick$Action"))) {
this.__depositbtnOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("DepositbtnOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "DepositbtnOnClick");
span.setAttribute("outsystems.function.key", "f10c1bd2-8027-41af-947d-693bb6f11308");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("DepositbtnOnClick");
callContext = controller.callContext(callContext);
var getAccountStatusVar = new OS.DataTypes.VariableHolder();
var accountStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: GetAccountStatus
model.flush();
return tradershubController.default.getAccountStatus2$Action(callContext).then(function (value) {
getAccountStatusVar.value = value;
}).then(function () {
// Execute Action: AccountStatus
accountStatusVar.value = OS.SystemActions.listFilter(getAccountStatusVar.value.responseOut.getAccountStatusAttr.statusAttr, function (p) {
return (p === "cashier_locked");
}, callContext);

}).then(function () {
if(((accountStatusVar.value.filteredListOut.length > 0))) {
// Destination: /tradershub/WalletsDisableDeposit
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "wallets/deposit/disable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
if(((model.variables.activeWalletVar.currency_typeAttr === "fiat"))) {
// Destination: /tradershub/WalletsFiatDeposit
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "wallets/deposit/fiat", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// Destination: /tradershub/WalletsCryptoOptionDeposit
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "wallets/deposit/crypto", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

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

return this.__depositbtnOnClick$Action;
}set _depositbtnOnClick$Action(value) {this.__depositbtnOnClick$Action = value;
}


onReady$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnReady__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "0cc02097-4ce0-4ede-8f47-494b4f8b014b");
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

onClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnClick");
span.setAttribute("outsystems.function.key", "1ee8c892-2e72-4cf7-84b0-9b852aafa55c");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onClick$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

withdrawbtnOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("WithdrawbtnOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "WithdrawbtnOnClick");
span.setAttribute("outsystems.function.key", "3daf9e51-bbee-431d-9940-8c0753c70291");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._withdrawbtnOnClick$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

depositbtnOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("DepositbtnOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "DepositbtnOnClick");
span.setAttribute("outsystems.function.key", "f10c1bd2-8027-41af-947d-693bb6f11308");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._depositbtnOnClick$Action, callContext);
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
Controller.registerVariableGroupType("tradershub.WalletFlows.Wallets.OnReady$mapTransactionsJSResult", [{
name: "FormattedTransactions",
attrName: "formattedTransactionsOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.WalletFlows.Wallets.OnReady$getWalletIconJSResult", [{
name: "WalletAccountsListWithIcon",
attrName: "walletAccountsListWithIconOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

}
return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.WalletFlows.Wallets.mvc$controller.OnReady.MapTransactionsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const walletList = JSON.parse($parameters.WalletsList);
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

const getPlatform = (loginId = '') => {
    if (!loginId) return "";

    if (loginId.startsWith("CRW")) {
        const wallet = walletList.find(w => w.loginid === loginId);
        return wallet ? wallet.name : "";
    }

    if (loginId.startsWith('CR')) {
        return platformMapper.dtrade;
    }

    if (loginId.startsWith('CTR')) {
        return platformMapper.ctrader;
    }

    if (loginId.startsWith('CXR')) {
        return platformMapper.dxtrade;
    }

    if (loginId.startsWith('MTR')) {
        return platformMapper.mt5;
    }
    
    return "";
};

const formattedTransactions = transactions.reduce((acc, transaction) => {
    // Filter out 'buy' and 'sell' action types
    if (transaction.action_type === 'buy' || transaction.action_type === 'sell') {
        return acc;
    }

    // Create a new transaction object with the formatted date
    const t = { ...transaction, date: formatDate(transaction.transaction_time) };

    // Assign platform for 'from' field if it exists
    if (transaction.from) {
        t.from.platform = getPlatform(transaction.from.loginid);
    }

    // Assign platform for 'to' field if it exists
    if (transaction.to) {
        t.to.platform = getPlatform(transaction.to.loginid);
    }

    // Push the modified transaction into the result array
    acc.push(t);
    return acc;
}, []);

$parameters.FormattedTransactions = JSON.stringify(formattedTransactions);

};
});

define("tradershub.WalletFlows.Wallets.mvc$controller.OnReady.GetWalletIconJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const walletList = JSON.parse($parameters.WalletAccountsList);

$parameters.WalletAccountsListWithIcon = JSON.stringify(walletList.map(wallet => {
    const currency = wallet.currency;
    const icon = $actions.GetCurrencyIcon(currency, $parameters.CurrencyList)?.CurrencyIcon;
    
    return {
        ...wallet,
        icon,
    }
}))
};
});


define("tradershub.WalletFlows.Wallets.mvc$translationsResources.fr-FR", [], function () {
return {
"0N1NgjOCaEauNiGFFzpGqA#Value": "Aucune transaction trouvée",
"SdHIl6tDZEWkp0OR+ao6XQ#Value": "Transférer",
"TQspuQyAvkSRgErcd8fcBA#Value": "Retirer",
"gcJUiGquMUWqpLcbsdW73w#Value": "Dépôt"
};
});

define("tradershub.WalletFlows.Wallets.mvc$translationsResources", ["exports", "tradershub.WalletFlows.Wallets.mvc$translationsResources.fr-FR"], function (exports, tradershub_WalletFlows_Wallets_mvc_translationsResources_frFR) {
return {
"fr-FR": {
"translations": tradershub_WalletFlows_Wallets_mvc_translationsResources_frFR,
"isRTL": false
}
};
});

