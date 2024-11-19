define("tradershub.Layouts.MainLayout.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.Navigation.BottomBarItem.mvc$model"], function (OSRuntimeCore, tradershubModel, OutSystemsUI_Navigation_BottomBarItem_mvcModel) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("ActiveTab", "activeTabVar", "ActiveTab", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new VariablesRecord(new VariablesRecord.RecordClass({
activeTabVar: OS.DataTypes.ImmutableBase.getData(str)
}));
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
Model._hasValidationWidgetsValue = OutSystemsUI_Navigation_BottomBarItem_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("tradershub.Layouts.MainLayout.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.Layouts.MainLayout.mvc$model", "tradershub.Layouts.MainLayout.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Navigation.BottomBarItem.mvc$view"], function (OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_Layouts_MainLayout_mvc_model, tradershub_Layouts_MainLayout_mvc_controller, tradershubClientVariables, OSWidgets, OutSystemsUI_Navigation_BottomBarItem_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "Layouts.MainLayout"; }

        static getAttributes() { return {
codeFunction: "MainLayout",
functionKey: "5bbb9b41-8e23-403f-8d60-0043ba3e67ab",
functionOwnerName: "tradershub",
functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.Layouts.MainLayout.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Navigation_BottomBarItem_mvc_view];
        }

        get modelFactory() {
            return tradershub_Layouts_MainLayout_mvc_model;
        }

        get controllerFactory() {
            return tradershub_Layouts_MainLayout_mvc_controller;
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
style: "header-wrapper",
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
name: "LeftContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
extendedProperties: {
target: "_blank"
},
style: "display-flex align-items-center",
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("https://deriv.com/", {}),
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.derivIcon.svg"),
style: "logo",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "tabs-wrapper",
visible: true,
_idProps: {
service: idService,
name: "Tabs"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "height: 56px;"
},
style: "tab",
visible: true,
_idProps: {
service: idService,
name: "Hub"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
style: "tab-link",
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("tradershub", "hub", {}),
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "tab-text",
text: [$text(getTranslation("sG7asUvVZE+3gG+tSpLo4g#Value", "Hub"))],
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "height: 56px; margin-right: 24px;"
},
gridProperties: {
marginLeft: "24px"
},
style: "tab",
visible: true,
_idProps: {
service: idService,
name: "CFDs"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
style: "tab-link",
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("tradershub", "cfds", {}),
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "tab-text",
text: [$text(getTranslation("kB7UxZmyl0y9giWJ7ErMdw#Value", "CFDs"))],
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "height: 56px;"
},
style: "tab",
visible: true,
_idProps: {
service: idService,
name: "Options"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
style: "tab-link",
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("tradershub", "options", {}),
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "tab-text",
text: [$text(getTranslation("wpOSZ2b4z0G9b+gZ0DgdAQ#Value", "Options"))],
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}))), $if(((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier())), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "height: 56px;"
},
gridProperties: {
marginLeft: "24px"
},
style: "tab",
visible: true,
_idProps: {
service: idService,
name: "Wallets"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
style: "tab-link",
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("tradershub", "wallets", {}),
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "tab-text",
text: [$text(getTranslation("61Sfqplm5ECuZ5_5FCkuwg#Value", "Wallets"))],
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}, function () {
return [];
}))), $if(((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier())), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex align-items-center justify-content-flex-end",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.bellMd.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
marginLeft: "24px"
},
style: "account-link",
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("tradershub", "Account", {}),
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.circleUserMd.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex align-items-center",
visible: true,
_idProps: {
service: idService,
name: "RightContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
isDefault: false,
onClick: function () {
try {OS.Navigation.navigateTo(OS.Navigation.generateScreenURL((((((("https://" + tradershubClientVariables.getURL()) + "/oauth2/authorize?app_id=") + tradershubClientVariables.getAppId()) + "&l=") + tradershubClientVariables.getLang()) + "&brand=deriv"), {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), null, true);
} catch (ex) {
if(((ex.name) !== ("RedirectOccurredException"))) {
throw ex;
}

}
;
},
style: "btn header-btn",
visible: true,
_idProps: {
service: idService,
name: "Login"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("9KT96p9skk2eY8FZoy2JcA#Value", "Log in"))), React.createElement(OSWidgets.Button, {
enabled: true,
gridProperties: {
marginLeft: "8px"
},
isDefault: false,
onClick: function () {
try {OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "signup", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), null, true);
} catch (ex) {
if(((ex.name) !== ("RedirectOccurredException"))) {
throw ex;
}

}
;
},
style: "btn btn-primary header-btn",
visible: true,
_idProps: {
service: idService,
name: "Signup"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("WQhzFWzrfEmZKoVwi_zfRA#Value", "Sign up"))))];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "content-wrapper",
visible: true,
_idProps: {
service: idService,
name: "contentContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.content,
gridProperties: {
classes: "ThemeGrid_Width10"
},
style: "content",
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "background-color: #FFF;"
},
style: "bottom-navigation",
visible: true,
_idProps: {
service: idService,
name: "BottomNavigation"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bottom-navigation-item",
visible: true,
_idProps: {
service: idService,
name: "HubContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("tradershub", "hub", {}),
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_Navigation_BottomBarItem_mvc_view, {
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
uuid: "29",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [$if((model.variables.activeTabVar === 0), false, this, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.HubActiveSm.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.HubSm.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})];
}),
text: new PlaceholderContent(function () {
return [$text(getTranslation("UzyMzzSKJUaoh_1XG8CiYg#Value", "Hub"))];
})
},
_dependencies: [asPrimitiveValue(model.variables.activeTabVar)]
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bottom-navigation-item",
visible: true,
_idProps: {
service: idService,
name: "CFDsContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("tradershub", "cfds", {}),
visible: true,
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_Navigation_BottomBarItem_mvc_view, {
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
uuid: "34",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [$if((model.variables.activeTabVar === 1), false, this, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.CfdActiveSm.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.CfdSm.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})];
}),
text: new PlaceholderContent(function () {
return [$text(getTranslation("23L1I2NBGEWdW_1td988fw#Value", "CFDs"))];
})
},
_dependencies: [asPrimitiveValue(model.variables.activeTabVar)]
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bottom-navigation-item",
visible: true,
_idProps: {
service: idService,
name: "OptionsContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("tradershub", "options", {}),
visible: true,
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_Navigation_BottomBarItem_mvc_view, {
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
uuid: "39",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [$if((model.variables.activeTabVar === 2), false, this, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.OptionsActiveSm.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.OptionsSm.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})];
}),
text: new PlaceholderContent(function () {
return [$text(getTranslation("3PrWmaocKES8BZp00psl3g#Value", "Options"))];
})
},
_dependencies: [asPrimitiveValue(model.variables.activeTabVar)]
}))), $if(((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier())), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bottom-navigation-item",
visible: true,
_idProps: {
service: idService,
name: "WalletsContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("tradershub", "wallets", {}),
visible: true,
_idProps: {
service: idService,
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_Navigation_BottomBarItem_mvc_view, {
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
uuid: "44",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [$if((model.variables.activeTabVar === 3), false, this, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.WalletsActiveSm.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.WalletsSm.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "46"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})];
}),
text: new PlaceholderContent(function () {
return [$text(getTranslation("mwg36cd2ykm8Lp2+ZuTyYg#Value", "Wallets"))];
})
},
_dependencies: [asPrimitiveValue(model.variables.activeTabVar)]
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bottom-navigation-item",
visible: true,
_idProps: {
service: idService,
name: "AccountContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("tradershub", "Account", {}),
visible: true,
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_Navigation_BottomBarItem_mvc_view, {
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
uuid: "49",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [$if((model.variables.activeTabVar === 4), false, this, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.AccountActiveSm.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "50"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.AccountSm.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "51"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})];
}),
text: new PlaceholderContent(function () {
return [$text(getTranslation("z3Xgo1EJ4U66TekcF3FtkQ#Value", "Account"))];
})
},
_dependencies: [asPrimitiveValue(model.variables.activeTabVar)]
})))];
}, function () {
return [];
})));
        }
    }

    return View;
});
define("tradershub.Layouts.MainLayout.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.Layouts.MainLayout.mvc$translationsResources", "tradershub.Layouts.MainLayout.mvc$controller.OnReady.AddActiveTabJS"], function (OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_Layouts_MainLayout_mvc_TranslationsResources, tradershub_Layouts_MainLayout_mvc_controller_OnReady_AddActiveTabJS) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, tradershub_Layouts_MainLayout_mvc_TranslationsResources);
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
get _onReady$Action() {if(!(this.hasOwnProperty("__onReady$Action"))) {
this.__onReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnReady", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "325a6041-9f39-4310-97ac-7308d7823b03");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var addActiveTabJSResult = new OS.DataTypes.VariableHolder();
addActiveTabJSResult.value = OS.Logger.startActiveSpan("AddActiveTab", function (span) {
if(span) {
span.setAttribute("code.function", "AddActiveTab");
span.setAttribute("outsystems.function.key", "2e50b9a3-6bd0-4482-b4a4-80eb6a95ec91");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_Layouts_MainLayout_mvc_controller_OnReady_AddActiveTabJS, "AddActiveTab", "OnReady", {
Active: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.Layouts.MainLayout.OnReady$addActiveTabJSResult"))();
jsNodeResult.activeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Active, OS.DataTypes.DataTypes.Integer);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// ActiveTab = AddActiveTab.Active
model.variables.activeTabVar = addActiveTabJSResult.value.activeOut;
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


onReady$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnReady__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "325a6041-9f39-4310-97ac-7308d7823b03");
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
Controller.registerVariableGroupType("tradershub.Layouts.MainLayout.OnReady$addActiveTabJSResult", [{
name: "Active",
attrName: "activeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);

}
return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.Layouts.MainLayout.mvc$controller.OnReady.AddActiveTabJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const urlPatterns = [
    '/hub',
    '/cfds',
    '/options',
    '/wallets'
];

let activeIndex = urlPatterns.findIndex(pattern => window.location.pathname.includes(pattern));
if (activeIndex === -1) activeIndex = 0;

const tabs = document.querySelectorAll('.tab');
const bottomTab = document.querySelectorAll('.bottom-navigation-item');

if(tabs.length > 0 && activeIndex < tabs.length) {
    const activeTab = tabs[activeIndex];
    const tabText = activeTab.querySelector('.tab-text');

    activeTab.classList.add('tab-active');
    tabText.classList.add('tab-text-active')
}

if(bottomTab.length > 0 && activeIndex < bottomTab.length) {
    const activeButtomTab = bottomTab[activeIndex];
    const bottomTabText = activeButtomTab.querySelector('.bottom-bar-item-text');

    bottomTabText.classList.add('bottom-bar-item-text-active');
}

$parameters.Active = activeIndex;

};
});


define("tradershub.Layouts.MainLayout.mvc$translationsResources.fr-FR", [], function () {
return {
"z3Xgo1EJ4U66TekcF3FtkQ#Value": "Compte",
"mwg36cd2ykm8Lp2+ZuTyYg#Value": "Portefeuilles",
"3PrWmaocKES8BZp00psl3g#Value": "Options",
"23L1I2NBGEWdW_1td988fw#Value": "CFD",
"UzyMzzSKJUaoh_1XG8CiYg#Value": "Hub",
"WQhzFWzrfEmZKoVwi_zfRA#Value": "Inscrivez-vous",
"9KT96p9skk2eY8FZoy2JcA#Value": "Se connecter",
"61Sfqplm5ECuZ5_5FCkuwg#Value": "Portefeuilles",
"wpOSZ2b4z0G9b+gZ0DgdAQ#Value": "Options",
"kB7UxZmyl0y9giWJ7ErMdw#Value": "CFD",
"sG7asUvVZE+3gG+tSpLo4g#Value": "Hub"
};
});

define("tradershub.Layouts.MainLayout.mvc$translationsResources", ["exports", "tradershub.Layouts.MainLayout.mvc$translationsResources.fr-FR"], function (exports, tradershub_Layouts_MainLayout_mvc_translationsResources_frFR) {
return {
"fr-FR": {
"translations": tradershub_Layouts_MainLayout_mvc_translationsResources_frFR,
"isRTL": false
}
};
});

