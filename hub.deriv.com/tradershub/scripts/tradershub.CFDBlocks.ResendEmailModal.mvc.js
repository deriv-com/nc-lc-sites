define("tradershub.CFDBlocks.ResendEmailModal.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.controller", "RESTAPIWebsocketOfficial.model", "tradershub.controller", "OutSystemsUI.controller$IsPhone", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "RESTAPIWebsocketOfficial.model$ST_b5532fbd5672db40752d556a46e96eaeStructure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$VerifyEmail"], function (OSRuntimeCore, tradershubModel, OutSystemsUIController, RESTAPIWebsocketOfficialModel, tradershubController) {
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

}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("tradershub.CFDBlocks.ResendEmailModal.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "RESTAPIWebsocketOfficial.model", "react", "@outsystems/runtime-view-js", "tradershub.CFDBlocks.ResendEmailModal.mvc$model", "tradershub.CFDBlocks.ResendEmailModal.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.controller$IsPhone", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "RESTAPIWebsocketOfficial.model$ST_b5532fbd5672db40752d556a46e96eaeStructure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$VerifyEmail"], function (OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, RESTAPIWebsocketOfficialModel, React, OSView, tradershub_CFDBlocks_ResendEmailModal_mvc_model, tradershub_CFDBlocks_ResendEmailModal_mvc_controller, tradershubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "CFDBlocks.ResendEmailModal"; }

        static getAttributes() { return {
codeFunction: "ResendEmailModal",
functionKey: "92343ed3-e206-49ef-97f8-b76302ae890d",
functionOwnerName: "tradershub",
functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return tradershub_CFDBlocks_ResendEmailModal_mvc_model;
        }

        get controllerFactory() {
            return tradershub_CFDBlocks_ResendEmailModal_mvc_controller;
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
showPopup: model.variables.isVisibleIn,
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
style: "border-color: #E9ECEF; border-style: none none solid none; border-width: 0px 0px 1px 0px; padding: 14px 16px;"
},
style: "display-flex align-items-center justify-content-space-between",
visible: true,
_idProps: {
service: idService,
name: "ForgotPasswordModalHeader"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 18px; font-weight: bold;"
},
text: ["Forgot password"],
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
return controller.closeOnClick$Action(controller.callContext(eventHandlerContext));
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
style: "height: auto; margin-top: 129px; padding: 16px;"
},
style: "display-flex flex-direction-column display-flex gap-m justify-content-center align-items-center",
visible: true,
_idProps: {
service: idService,
name: "ForgotPasswordModalContent"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
},
gridProperties: {
marginLeft: "0px"
},
visible: true,
_idProps: {
service: idService,
name: "VerificationLinkImage"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.email2.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
visible: true,
_idProps: {
service: idService,
name: "VerificationLinkDescription"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 18px; font-weight: bold;"
},
value: ("We’ve sent a verification link to " + tradershubClientVariables.getSignupEmail()),
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "background-color: #e5f5fc; border-color: #017AAD; border-radius: 8px; border-style: solid; border-width: 0px; margin-bottom: 16px; margin-right: 16px; margin-top: 16px; padding: 16px;"
},
gridProperties: {
marginLeft: "16px"
},
style: "display-flex column-gap-s align-items-flex-start",
visible: true,
_idProps: {
service: idService,
name: "InfoBox"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_blue.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "margin-bottom: 10px;"
},
text: ["Didn\'t get an email? "],
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "margin-left: 10px;"
},
text: ["- Check your spam folder."],
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "margin-left: 10px;"
},
text: ["- Make sure the email isn’t blocked by firewalls or filters."],
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: "background-color: #fff; border-width: 1px; bottom: 0; color: #ff4450; font-weight: normal; height: 48px; margin-bottom: 0px; margin-right: 0px; margin-top: 0px; padding: 16px; position: absolute;"
},
gridProperties: {
width: "100%",
marginLeft: "0px"
},
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.resendEmailOnClick$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
name: "ResendEmailButton"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 14px; font-weight: 500; margin-bottom: 0px; margin-right: 0px; margin-top: 0px; wi: ;"
},
gridProperties: {
classes: "OSFillParent",
marginLeft: "0px"
},
value: "Resend email",
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}))));
        }
    }

    return View;
});
define("tradershub.CFDBlocks.ResendEmailModal.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "RESTAPIWebsocketOfficial.model", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.CFDBlocks.ResendEmailModal.mvc$translationsResources", "OutSystemsUI.controller$IsPhone", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "RESTAPIWebsocketOfficial.model$ST_b5532fbd5672db40752d556a46e96eaeStructure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$VerifyEmail"], function (OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, RESTAPIWebsocketOfficialModel, tradershubLanguageResources, tradershubClientVariables, tradershub_CFDBlocks_ResendEmailModal_mvc_TranslationsResources) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, tradershub_CFDBlocks_ResendEmailModal_mvc_TranslationsResources);
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
get _resendEmailOnClick$Action() {if(!(this.hasOwnProperty("__resendEmailOnClick$Action"))) {
this.__resendEmailOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("ResendEmailOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "ResendEmailOnClick");
span.setAttribute("outsystems.function.key", "12dbf9df-2a06-494a-9fe0-1ee5b84baecc");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("ResendEmailOnClick");
callContext = controller.callContext(callContext);
var verifyEmailVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: VerifyEmail
model.flush();
return tradershubController.default.verifyEmail$Action("trading_platform_mt5_password_reset", tradershubClientVariables.getSignupEmail(), callContext).then(function (value) {
verifyEmailVar.value = value;
}).then(function () {
// Trigger Event: ResendEmailEvent
return controller.resendEmailEvent$Action(callContext);
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

return this.__resendEmailOnClick$Action;
}set _resendEmailOnClick$Action(value) {this.__resendEmailOnClick$Action = value;
}

get _closeOnClick$Action() {if(!(this.hasOwnProperty("__closeOnClick$Action"))) {
this.__closeOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("CloseOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "CloseOnClick");
span.setAttribute("outsystems.function.key", "f0b3eb48-02f8-4159-96d6-a543ffb6bcb2");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("CloseOnClick");
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

return this.__closeOnClick$Action;
}set _closeOnClick$Action(value) {this.__closeOnClick$Action = value;
}


resendEmailOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("ResendEmailOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "ResendEmailOnClick");
span.setAttribute("outsystems.function.key", "12dbf9df-2a06-494a-9fe0-1ee5b84baecc");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._resendEmailOnClick$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

closeOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("CloseOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "CloseOnClick");
span.setAttribute("outsystems.function.key", "f0b3eb48-02f8-4159-96d6-a543ffb6bcb2");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._closeOnClick$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
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

get resendEmailEvent$Action() {if(!(this.hasOwnProperty("_resendEmailEvent$Action"))) {
this._resendEmailEvent$Action = function () {
return Promise.resolve();
};
}

return this._resendEmailEvent$Action;
}set resendEmailEvent$Action(value) {this._resendEmailEvent$Action = value;
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


define("tradershub.CFDBlocks.ResendEmailModal.mvc$translationsResources", ["exports"], function (exports) {
return {};
});

