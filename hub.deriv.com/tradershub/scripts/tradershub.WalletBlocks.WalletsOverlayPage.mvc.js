﻿define("tradershub.WalletBlocks.WalletsOverlayPage.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.controller", "tradershub.WalletBlocks.WalletsCashierHeader.mvc$model", "tradershub.Common.LoaderBlock.mvc$model", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (OSRuntimeCore, tradershubModel, OutSystemsUIController, tradershub_WalletBlocks_WalletsCashierHeader_mvcModel, tradershub_Common_LoaderBlock_mvcModel) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("IsLoading", "isLoadingIn", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("HideBackButton", "hideBackButtonIn", "HideBackButton", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_hideBackButtonInDataFetchStatus", "_hideBackButtonInDataFetchStatus", "_hideBackButtonInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("PageTitle", "pageTitleIn", "PageTitle", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_pageTitleInDataFetchStatus", "_pageTitleInDataFetchStatus", "_pageTitleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("HideWalletHeader", "hideWalletHeaderIn", "HideWalletHeader", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_hideWalletHeaderInDataFetchStatus", "_hideWalletHeaderInDataFetchStatus", "_hideWalletHeaderInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("HideCloseButton", "hideCloseButtonIn", "HideCloseButton", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_hideCloseButtonInDataFetchStatus", "_hideCloseButtonInDataFetchStatus", "_hideCloseButtonInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (tradershub_WalletBlocks_WalletsCashierHeader_mvcModel.hasValidationWidgets || tradershub_Common_LoaderBlock_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
if("IsLoading" in inputs) {
this.variables.isLoadingIn = inputs.IsLoading;
if("_isLoadingInDataFetchStatus" in inputs) {
this.variables._isLoadingInDataFetchStatus = inputs._isLoadingInDataFetchStatus;
}

}

if("HideBackButton" in inputs) {
this.variables.hideBackButtonIn = inputs.HideBackButton;
if("_hideBackButtonInDataFetchStatus" in inputs) {
this.variables._hideBackButtonInDataFetchStatus = inputs._hideBackButtonInDataFetchStatus;
}

}

if("PageTitle" in inputs) {
this.variables.pageTitleIn = inputs.PageTitle;
if("_pageTitleInDataFetchStatus" in inputs) {
this.variables._pageTitleInDataFetchStatus = inputs._pageTitleInDataFetchStatus;
}

}

if("HideWalletHeader" in inputs) {
this.variables.hideWalletHeaderIn = inputs.HideWalletHeader;
if("_hideWalletHeaderInDataFetchStatus" in inputs) {
this.variables._hideWalletHeaderInDataFetchStatus = inputs._hideWalletHeaderInDataFetchStatus;
}

}

if("HideCloseButton" in inputs) {
this.variables.hideCloseButtonIn = inputs.HideCloseButton;
if("_hideCloseButtonInDataFetchStatus" in inputs) {
this.variables._hideCloseButtonInDataFetchStatus = inputs._hideCloseButtonInDataFetchStatus;
}

}

}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("tradershub.WalletBlocks.WalletsOverlayPage.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "tradershub.WalletBlocks.WalletsOverlayPage.mvc$model", "tradershub.WalletBlocks.WalletsOverlayPage.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js", "tradershub.WalletBlocks.WalletsCashierHeader.mvc$view", "tradershub.Common.LoaderBlock.mvc$view", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, React, OSView, tradershub_WalletBlocks_WalletsOverlayPage_mvc_model, tradershub_WalletBlocks_WalletsOverlayPage_mvc_controller, tradershubClientVariables, OSWidgets, tradershub_WalletBlocks_WalletsCashierHeader_mvc_view, tradershub_Common_LoaderBlock_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "WalletBlocks.WalletsOverlayPage"; }

        static getAttributes() { return {
codeFunction: "WalletsOverlayPage",
functionKey: "932c55d3-3f02-4046-9648-043994771643",
functionOwnerName: "tradershub",
functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.WalletBlocks.WalletsOverlayPage.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_WalletBlocks_WalletsCashierHeader_mvc_view, tradershub_Common_LoaderBlock_mvc_view];
        }

        get modelFactory() {
            return tradershub_WalletBlocks_WalletsOverlayPage_mvc_model;
        }

        get controllerFactory() {
            return tradershub_WalletBlocks_WalletsOverlayPage_mvc_controller;
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
style: "wallet-overlay-container",
visible: true,
_idProps: {
service: idService,
name: "MainWrapper"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wallet-title-container",
visible: true,
_idProps: {
service: idService,
name: "TitleWrapper"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.hideBackButtonIn, false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Image, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.backBtnOnClick$Action(controller.callContext(eventHandlerContext));

;
}
},
extendedProperties: {
style: "font-size: 16px;"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.backicon2.png"),
style: "cursor-pointer",
type: /*Static*/ 0,
_idProps: {
service: idService,
name: "BackBtn"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width1"
},
style: "flex-1",
visible: true,
_idProps: {
service: idService,
name: "TitleContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 18px; font-weight: bold;"
},
value: model.variables.pageTitleIn,
_idProps: {
service: idService,
name: "OverlayTItle"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._pageTitleInDataFetchStatus)
})), $if(model.variables.hideCloseButtonIn, false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Image, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.closeBtnOnClick$Action(controller.callContext(eventHandlerContext));

;
}
},
extendedProperties: {
style: "font-size: 16px; padding: 0px 6px 0px 0px;"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.close.png"),
style: "cursor-pointer",
type: /*Static*/ 0,
_idProps: {
service: idService,
name: "CloseBtn"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-right: (Auto);"
},
style: "wallet-overlay-content",
visible: true,
_idProps: {
service: idService,
name: "ContentWrapper"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.hideWalletHeaderIn, false, this, function () {
return [];
}, function () {
return [React.createElement(tradershub_WalletBlocks_WalletsCashierHeader_mvc_view, {
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
uuid: "7",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}), $if(model.variables.isLoadingIn, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wallet-loading-container",
visible: true,
_idProps: {
service: idService,
uuid: "8"
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
uuid: "9",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.walletOverlayPageContent,
style: model.getCachedValue(idService.getId("WalletOverlayPageContent.Style"), function () {
return ("full-width " + ((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut) ? ("margin-top-m") : ("margin-top-s")));
}),
_idProps: {
service: idService,
name: "WalletOverlayPageContent"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wallet-overlay-footer",
visible: true,
_idProps: {
service: idService,
name: "FooterWrapper"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.mobileFooterContent,
_idProps: {
service: idService,
name: "MobileFooterContent"
},
_widgetRecordProvider: widgetsRecordProvider
}))));
        }
    }

    return View;
});
define("tradershub.WalletBlocks.WalletsOverlayPage.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.WalletBlocks.WalletsOverlayPage.mvc$translationsResources", "tradershub.WalletBlocks.WalletsOverlayPage.mvc$controller.OnReady.JavaScript1JS", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, tradershubLanguageResources, tradershubClientVariables, tradershub_WalletBlocks_WalletsOverlayPage_mvc_TranslationsResources, tradershub_WalletBlocks_WalletsOverlayPage_mvc_controller_OnReady_JavaScript1JS) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, tradershub_WalletBlocks_WalletsOverlayPage_mvc_TranslationsResources);
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
get _closeBtnOnClick$Action() {if(!(this.hasOwnProperty("__closeBtnOnClick$Action"))) {
this.__closeBtnOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("CloseBtnOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "CloseBtnOnClick");
span.setAttribute("outsystems.function.key", "055ef609-a027-4acf-b7dc-4bc57ce327b1");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("CloseBtnOnClick");
callContext = controller.callContext(callContext);
// Destination: /tradershub/Wallets
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "wallets", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__closeBtnOnClick$Action;
}set _closeBtnOnClick$Action(value) {this.__closeBtnOnClick$Action = value;
}

get _onReady$Action() {if(!(this.hasOwnProperty("__onReady$Action"))) {
this.__onReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnReady", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "54868f08-a655-4c83-81f8-1f83ca99905f");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
OS.Logger.startActiveSpan("JavaScript1", function (span) {
if(span) {
span.setAttribute("code.function", "JavaScript1");
span.setAttribute("outsystems.function.key", "75b438e0-180d-4a3d-bd31-1db07a24b738");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_WalletBlocks_WalletsOverlayPage_mvc_controller_OnReady_JavaScript1JS, "JavaScript1", "OnReady", {
Id: OS.DataConversion.JSNodeParamConverter.to(idService.getId("ContentWrapper"), OS.DataTypes.DataTypes.Text)
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

return this.__onReady$Action;
}set _onReady$Action(value) {this.__onReady$Action = value;
}

get _backBtnOnClick$Action() {if(!(this.hasOwnProperty("__backBtnOnClick$Action"))) {
this.__backBtnOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("BackBtnOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "BackBtnOnClick");
span.setAttribute("outsystems.function.key", "e1b08f55-26ec-4299-aa92-2784af3e1ebc");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("BackBtnOnClick");
callContext = controller.callContext(callContext);
// Destination: (PreviousScreen)
return OS.Navigation.navigateBack(null, callContext, true);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__backBtnOnClick$Action;
}set _backBtnOnClick$Action(value) {this.__backBtnOnClick$Action = value;
}


closeBtnOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("CloseBtnOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "CloseBtnOnClick");
span.setAttribute("outsystems.function.key", "055ef609-a027-4acf-b7dc-4bc57ce327b1");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._closeBtnOnClick$Action, callContext);
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
span.setAttribute("outsystems.function.key", "54868f08-a655-4c83-81f8-1f83ca99905f");
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

backBtnOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("BackBtnOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "BackBtnOnClick");
span.setAttribute("outsystems.function.key", "e1b08f55-26ec-4299-aa92-2784af3e1ebc");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._backBtnOnClick$Action, callContext);
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

}
return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.WalletBlocks.WalletsOverlayPage.mvc$controller.OnReady.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
document.getElementById($parameters.Id)
};
});


define("tradershub.WalletBlocks.WalletsOverlayPage.mvc$translationsResources", ["exports"], function (exports) {
return {};
});
