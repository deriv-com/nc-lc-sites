define("tradershub.CFDBlocks.CfdPasswordModal.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model"], function (OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("HasExistingPassword", "hasExistingPasswordVar", "HasExistingPassword", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("PasswordValue", "passwordValueVar", "PasswordValue", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("PasswordRegex", "passwordRegexVar", "PasswordRegex", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
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
PasswordInput2: OS.Model.ValidationWidgetRecord,
PasswordInput: OS.Model.ValidationWidgetRecord,
Checkbox1: OS.Model.ValidationWidgetRecord,
Checkbox2: OS.Model.ValidationWidgetRecord,
Checkbox3: OS.Model.ValidationWidgetRecord,
Checkbox4: OS.Model.ValidationWidgetRecord
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

define("tradershub.CFDBlocks.CfdPasswordModal.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.CFDBlocks.CfdPasswordModal.mvc$model", "tradershub.CFDBlocks.CfdPasswordModal.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js"], function (OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_CFDBlocks_CfdPasswordModal_mvc_model, tradershub_CFDBlocks_CfdPasswordModal_mvc_controller, tradershubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "CFDBlocks.CfdPasswordModal"; }

        static getAttributes() { return {
codeFunction: "CfdPasswordModal",
functionKey: "5468a8b0-9625-49f8-b31c-ed5db244c0f7",
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
            return tradershub_CFDBlocks_CfdPasswordModal_mvc_model;
        }

        get controllerFactory() {
            return tradershub_CFDBlocks_CfdPasswordModal_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(model.variables.hasExistingPasswordVar, true, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 16px;"
},
style: "display-flex flex-direction-column gap-m",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex justify-content-space-between align-items-center",
visible: true,
_idProps: {
service: idService,
name: "EnterPasswordHeader"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 18px; font-style: normal; font-weight: bold;"
},
text: ["Add an MT5 Account"],
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Icon, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
icon: "times",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column display-flex gap-m",
visible: true,
_idProps: {
service: idService,
name: "EnterPasswordContent"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "DescriptionContainer2"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Enter your Deriv MT5 password to enable your [Account type] account."), React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Password*/ 1,
mandatory: false,
maxLength: 16,
prompt: "Enter your password",
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.passwordValueVar, function (value) {
model.variables.passwordValueVar = value;
}),
_idProps: {
service: idService,
name: "PasswordInput2"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "EnterPasswordFooter"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: model.getCachedValue(idService.getId("AddAdAccount.Enabled"), function () {
return ((((model.variables.passwordValueVar) !== (""))) ? (true) : (false));
}, function () {
return model.variables.passwordValueVar;
}),
gridProperties: {
classes: "OSFillParent"
},
isDefault: false,
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.setUpPasswordOnClick$Action(controller.callContext(eventHandlerContext));

;
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
name: "AddAdAccount"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Add account")))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 16px;"
},
style: "display-flex flex-direction-column gap-m",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex justify-content-space-between align-items-center",
visible: true,
_idProps: {
service: idService,
name: "CreatePasswordHeader"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 18px; font-weight: bold;"
},
text: ["Set up your MT5 password "],
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Icon, {
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.onClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
icon: "times",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column display-flex gap-m",
visible: true,
_idProps: {
service: idService,
name: "CreatePasswordContent"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "DescriptionContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Enable your Deriv MT5 account by setting a password. Use this password for all your MT5 accounts."), React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Password*/ 1,
mandatory: false,
maxLength: 16,
prompt: "Enter your password",
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.passwordValueVar, function (value) {
model.variables.passwordValueVar = value;
}),
_idProps: {
service: idService,
name: "PasswordInput"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column",
visible: true,
_idProps: {
service: idService,
name: "LiveCheckboxContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "HasProperLength"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Checkbox, {
_validationProps: {
validationService: validationService
},
enabled: false,
style: "checkbox",
variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, model.variables.passwordRegexVar, function (value) {
model.variables.passwordRegexVar = value;
}),
_idProps: {
service: idService,
name: "Checkbox1"
},
_widgetRecordProvider: widgetsRecordProvider
}), "8–25 characters long"), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "HasUppercaseLowercase"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Checkbox, {
_validationProps: {
validationService: validationService
},
enabled: false,
style: "checkbox",
variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, model.variables.passwordRegexVar, function (value) {
model.variables.passwordRegexVar = value;
}),
_idProps: {
service: idService,
name: "Checkbox2"
},
_widgetRecordProvider: widgetsRecordProvider
}), "At least one uppercase and one lowercase letter"), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "HasNumber"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Checkbox, {
_validationProps: {
validationService: validationService
},
enabled: false,
style: "checkbox",
variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, model.variables.passwordRegexVar, function (value) {
model.variables.passwordRegexVar = value;
}),
_idProps: {
service: idService,
name: "Checkbox3"
},
_widgetRecordProvider: widgetsRecordProvider
}), "At least one number"), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "HasSpecialCharacter"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Checkbox, {
_validationProps: {
validationService: validationService
},
enabled: false,
style: "checkbox",
variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, model.variables.passwordRegexVar, function (value) {
model.variables.passwordRegexVar = value;
}),
_idProps: {
service: idService,
name: "Checkbox4"
},
_widgetRecordProvider: widgetsRecordProvider
}), "At least one special character")), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "border-radius: 5px; padding: 10px;"
},
style: "background-blue-lightest",
visible: true,
_idProps: {
service: idService,
name: "RegulatoryInfoContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "height: 10px; width: 10px;"
},
icon: "info-circle",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "padding: 10px;"
},
text: ["[placeholder for regulatory information]"],
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "TncContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, "By clicking \"Set up password\", I accept Deriv [Jurisdiction] Ltd\'s terms and conditions.")), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "CreatePasswordFooter"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: model.getCachedValue(idService.getId("SetUpPassword.Enabled"), function () {
return ((((model.variables.passwordValueVar) !== (""))) ? (true) : (false));
}, function () {
return model.variables.passwordValueVar;
}),
gridProperties: {
classes: "OSFillParent"
},
isDefault: false,
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.setUpPasswordOnClick$Action(controller.callContext(eventHandlerContext));

;
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
name: "SetUpPassword"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Set Up Password")))];
}));
        }
    }

    return View;
});
define("tradershub.CFDBlocks.CfdPasswordModal.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables"], function (OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService);
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
get _onClick$Action() {if(!(this.hasOwnProperty("__onClick$Action"))) {
this.__onClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnClick", function (span) {
if(span) {
span.setAttribute("code.function", "OnClick");
span.setAttribute("outsystems.function.key", "cf24d195-0e36-4ff2-9a8c-f76a196f7940");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnClick");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
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

return this.__onClick$Action;
}set _onClick$Action(value) {this.__onClick$Action = value;
}

get _setUpPasswordOnClick$Action() {if(!(this.hasOwnProperty("__setUpPasswordOnClick$Action"))) {
this.__setUpPasswordOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("SetUpPasswordOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "SetUpPasswordOnClick");
span.setAttribute("outsystems.function.key", "d65f8c59-dbee-470f-812a-bf13690e7d1f");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("SetUpPasswordOnClick");
callContext = controller.callContext(callContext);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__setUpPasswordOnClick$Action;
}set _setUpPasswordOnClick$Action(value) {this.__setUpPasswordOnClick$Action = value;
}


onClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnClick");
span.setAttribute("outsystems.function.key", "cf24d195-0e36-4ff2-9a8c-f76a196f7940");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._onClick$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

setUpPasswordOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("SetUpPasswordOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "SetUpPasswordOnClick");
span.setAttribute("outsystems.function.key", "d65f8c59-dbee-470f-812a-bf13690e7d1f");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._setUpPasswordOnClick$Action, callContext);
} finally {
if(span) {
span.end();
}

}

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


