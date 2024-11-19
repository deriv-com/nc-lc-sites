define("tradershub.CFDBlocks.AccountDetailsPopup.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "BrowserConsoleLogging.controller", "tradershub.model$ST_148480cbe068b64f08f2cd9823941166Structure", "BrowserConsoleLogging.controller$ConsoleLog", "tradershub.referencesHealth", "tradershub.referencesHealth$BrowserConsoleLogging"], function (OSRuntimeCore, tradershubModel, BrowserConsoleLoggingController) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("IsVisible", "isVisibleIn", "IsVisible", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("AccountData", "accountDataIn", "AccountData", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_148480cbe068b64f08f2cd9823941166Structure());
}, false, tradershubModel.ST_148480cbe068b64f08f2cd9823941166Structure), 
this.attr("_accountDataInDataFetchStatus", "_accountDataInDataFetchStatus", "_accountDataInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("IsVisible" in inputs) {
this.variables.isVisibleIn = inputs.IsVisible;
if("_isVisibleInDataFetchStatus" in inputs) {
this.variables._isVisibleInDataFetchStatus = inputs._isVisibleInDataFetchStatus;
}

}

if("AccountData" in inputs) {
this.variables.accountDataIn = inputs.AccountData;
if("_accountDataInDataFetchStatus" in inputs) {
this.variables._accountDataInDataFetchStatus = inputs._accountDataInDataFetchStatus;
}

}

}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("tradershub.CFDBlocks.AccountDetailsPopup.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "BrowserConsoleLogging.controller", "react", "@outsystems/runtime-view-js", "tradershub.CFDBlocks.AccountDetailsPopup.mvc$model", "tradershub.CFDBlocks.AccountDetailsPopup.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js", "tradershub.model$ST_148480cbe068b64f08f2cd9823941166Structure", "BrowserConsoleLogging.controller$ConsoleLog", "tradershub.referencesHealth", "tradershub.referencesHealth$BrowserConsoleLogging"], function (OSRuntimeCore, tradershubModel, tradershubController, BrowserConsoleLoggingController, React, OSView, tradershub_CFDBlocks_AccountDetailsPopup_mvc_model, tradershub_CFDBlocks_AccountDetailsPopup_mvc_controller, tradershubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "CFDBlocks.AccountDetailsPopup"; }

        static getAttributes() { return {
codeFunction: "AccountDetailsPopup",
functionKey: "dd07aa38-3181-41cc-b28e-b0a37340e48e",
functionOwnerName: "tradershub",
functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.CFDBlocks.AccountDetailsPopup.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return tradershub_CFDBlocks_AccountDetailsPopup_mvc_model;
        }

        get controllerFactory() {
            return tradershub_CFDBlocks_AccountDetailsPopup_mvc_controller;
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
showPopup: model.variables.isVisibleIn,
style: "popup-dialog full-height-popup",
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
showPopup_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isVisibleInDataFetchStatus)
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
name: "Header"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 18px; font-weight: bold;"
},
text: ["Account details"],
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Image, {
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.onClose$Action(controller.callContext(eventHandlerContext));
});
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
type: /*External*/ 1,
url: model.variables.accountDataIn.iconAttr,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
url_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._accountDataInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
marginLeft: "16px"
},
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 16px; font-weight: bold;"
},
style: "display-block",
value: model.variables.accountDataIn.labelAttr,
_idProps: {
service: idService,
name: "ProductName"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._accountDataInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
value: model.variables.accountDataIn.display_balanceAttr,
_idProps: {
service: idService,
name: "Balance"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._accountDataInDataFetchStatus)
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
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.StandaloneSMArrowUpArrowDown.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
style: "",
text: [$text(getTranslation("ZwgGiK+z9UyfQPxD1cn6sg#Value", "Transfer"))],
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.content,
extendedProperties: {
style: "padding: 16px;"
},
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider
})));
        }
    }

    return View;
});
define("tradershub.CFDBlocks.AccountDetailsPopup.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "BrowserConsoleLogging.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.CFDBlocks.AccountDetailsPopup.mvc$translationsResources", "tradershub.model$ST_148480cbe068b64f08f2cd9823941166Structure", "BrowserConsoleLogging.controller$ConsoleLog", "tradershub.referencesHealth", "tradershub.referencesHealth$BrowserConsoleLogging"], function (OSRuntimeCore, tradershubModel, tradershubController, BrowserConsoleLoggingController, tradershubLanguageResources, tradershubClientVariables, tradershub_CFDBlocks_AccountDetailsPopup_mvc_TranslationsResources) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, tradershub_CFDBlocks_AccountDetailsPopup_mvc_TranslationsResources);
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
get _onClose$Action() {if(!(this.hasOwnProperty("__onClose$Action"))) {
this.__onClose$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnClose", function (span) {
if(span) {
span.setAttribute("code.function", "OnClose");
span.setAttribute("outsystems.function.key", "4f93e8a3-4e45-4572-afb4-fcd278f45cb3");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnClose");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: CloseEvent
return controller.closeEvent$Action(callContext);
});
}, function () {
if(span) {
span.end();
}

});
}, 1);
};
}

return this.__onClose$Action;
}set _onClose$Action(value) {this.__onClose$Action = value;
}

get _onParametersChanged$Action() {if(!(this.hasOwnProperty("__onParametersChanged$Action"))) {
this.__onParametersChanged$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnParametersChanged", function (span) {
if(span) {
span.setAttribute("code.function", "OnParametersChanged");
span.setAttribute("outsystems.function.key", "9d0431cb-451a-427e-bae4-e3ee0049f249");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
// Execute Action: ConsoleLog
BrowserConsoleLoggingController.default.consoleLog$Action(model.variables.accountDataIn.productAttr, 0, callContext);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onParametersChanged$Action;
}set _onParametersChanged$Action(value) {this.__onParametersChanged$Action = value;
}


onClose$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnClose__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnClose");
span.setAttribute("outsystems.function.key", "4f93e8a3-4e45-4572-afb4-fcd278f45cb3");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._onClose$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

onParametersChanged$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnParametersChanged__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnParametersChanged");
span.setAttribute("outsystems.function.key", "9d0431cb-451a-427e-bae4-e3ee0049f249");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

get closeEvent$Action() {if(!(this.hasOwnProperty("_closeEvent$Action"))) {
this._closeEvent$Action = function () {
return Promise.resolve();
};
}

return this._closeEvent$Action;
}set closeEvent$Action(value) {this._closeEvent$Action = value;
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

}
return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});


define("tradershub.CFDBlocks.AccountDetailsPopup.mvc$translationsResources.fr-FR", [], function () {
return {
"ZwgGiK+z9UyfQPxD1cn6sg#Value": "Transfert"
};
});

define("tradershub.CFDBlocks.AccountDetailsPopup.mvc$translationsResources", ["exports", "tradershub.CFDBlocks.AccountDetailsPopup.mvc$translationsResources.fr-FR"], function (exports, tradershub_CFDBlocks_AccountDetailsPopup_mvc_translationsResources_frFR) {
return {
"fr-FR": {
"translations": tradershub_CFDBlocks_AccountDetailsPopup_mvc_translationsResources_frFR,
"isRTL": false
}
};
});

