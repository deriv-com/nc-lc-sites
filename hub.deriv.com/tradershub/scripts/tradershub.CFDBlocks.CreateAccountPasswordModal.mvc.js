define("tradershub.CFDBlocks.CreateAccountPasswordModal.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.model$ST_148480cbe068b64f08f2cd9823941166Structure", "tradershub.model$ST_9aff8863a6e9bf91c18ba9445f806cc7Structure", "tradershub.controller$MT5NewAccount", "tradershub.model$ST_7c6f1aa8afe53291591b30baa5b69641Structure", "tradershub.controller$TradingPlatformNewAccount", "tradershub.model$ST_5ac3ea1985fc9113c0222eb9ee2fcb49Structure", "tradershub.controller$TradingPlatformPasswordChange"], function (OSRuntimeCore, tradershubModel, tradershubController) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("PasswordInputValue", "passwordInputValueVar", "PasswordInputValue", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsVisible", "isVisibleIn", "IsVisible", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", "_isVisibleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("isPasswordSet", "isPasswordSetIn", "isPasswordSet", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isPasswordSetInDataFetchStatus", "_isPasswordSetInDataFetchStatus", "_isPasswordSetInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("SelectedAccount", "selectedAccountIn", "SelectedAccount", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_148480cbe068b64f08f2cd9823941166Structure());
}, false, tradershubModel.ST_148480cbe068b64f08f2cd9823941166Structure), 
this.attr("_selectedAccountInDataFetchStatus", "_selectedAccountInDataFetchStatus", "_selectedAccountInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
return {
PasswordInput4: OS.Model.ValidationWidgetRecord,
PasswordInput7: OS.Model.ValidationWidgetRecord
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
if("IsVisible" in inputs) {
this.variables.isVisibleIn = inputs.IsVisible;
if("_isVisibleInDataFetchStatus" in inputs) {
this.variables._isVisibleInDataFetchStatus = inputs._isVisibleInDataFetchStatus;
}

}

if("isPasswordSet" in inputs) {
this.variables.isPasswordSetIn = inputs.isPasswordSet;
if("_isPasswordSetInDataFetchStatus" in inputs) {
this.variables._isPasswordSetInDataFetchStatus = inputs._isPasswordSetInDataFetchStatus;
}

}

if("SelectedAccount" in inputs) {
this.variables.selectedAccountIn = inputs.SelectedAccount;
if("_selectedAccountInDataFetchStatus" in inputs) {
this.variables._selectedAccountInDataFetchStatus = inputs._selectedAccountInDataFetchStatus;
}

}

}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("tradershub.CFDBlocks.CreateAccountPasswordModal.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.CFDBlocks.CreateAccountPasswordModal.mvc$model", "tradershub.CFDBlocks.CreateAccountPasswordModal.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js", "CustomComponentsOfficial.PasswordPolicy.PasswordPolicy.mvc$view", "tradershub.model$ST_148480cbe068b64f08f2cd9823941166Structure", "tradershub.model$ST_9aff8863a6e9bf91c18ba9445f806cc7Structure", "tradershub.controller$MT5NewAccount", "tradershub.model$ST_7c6f1aa8afe53291591b30baa5b69641Structure", "tradershub.controller$TradingPlatformNewAccount", "tradershub.model$ST_5ac3ea1985fc9113c0222eb9ee2fcb49Structure", "tradershub.controller$TradingPlatformPasswordChange"], function (OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_CFDBlocks_CreateAccountPasswordModal_mvc_model, tradershub_CFDBlocks_CreateAccountPasswordModal_mvc_controller, tradershubClientVariables, OSWidgets, CustomComponentsOfficial_PasswordPolicy_PasswordPolicy_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "CFDBlocks.CreateAccountPasswordModal"; }

        static getAttributes() { return {
codeFunction: "CreateAccountPasswordModal",
functionKey: "53e37419-74a6-48a1-868f-55c9df17f185",
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
            return [CustomComponentsOfficial_PasswordPolicy_PasswordPolicy_mvc_view];
        }

        get modelFactory() {
            return tradershub_CFDBlocks_CreateAccountPasswordModal_mvc_model;
        }

        get controllerFactory() {
            return tradershub_CFDBlocks_CreateAccountPasswordModal_mvc_controller;
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
style: "height: 100%; margin-top: 0px; padding: 16px;"
},
showPopup: model.variables.isVisibleIn,
style: "full-height-popup display-flex flex-direction-column gap-m",
_idProps: {
service: idService,
name: "PopupWrapper"
},
_widgetRecordProvider: widgetsRecordProvider,
showPopup_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isVisibleInDataFetchStatus)
}, $if(model.variables.isPasswordSetIn, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.closeOnClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
extendedProperties: {
style: "padding: 16px;"
},
style: "display-flex justify-content-space-between align-items-center",
visible: true,
_idProps: {
service: idService,
name: "ModalHeader"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 18px; font-weight: bold;"
},
value: model.getCachedValue(idService.getId("AddAnAccount.Value"), function () {
return (("Add " + (((model.variables.selectedAccountIn.platformAttr === "dxtrade")) ? ("a DerivX") : ("an MT5"))) + " account");
}, function () {
return model.variables.selectedAccountIn.platformAttr;
}),
_idProps: {
service: idService,
name: "AddAnAccount"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._selectedAccountInDataFetchStatus)
}), React.createElement(OSWidgets.Icon, {
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.closeOnClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
extendedProperties: {
style: "font-size: 18px;"
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
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 16px;"
},
style: "display-flex flex-direction-column display-flex flex-1 gap-m",
visible: true,
_idProps: {
service: idService,
name: "ModalContent"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
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
name: "PasswordDescription2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("8_srWwO1LEyQdG1nxz6xsQ.Value"), function () {
return (((("Enter your Deriv " + (((model.variables.selectedAccountIn.platformAttr === "dxtrade")) ? ("DerivX") : (model.variables.selectedAccountIn.platformAttr))) + " password to enable your ") + tradershubClientVariables.getAccountType()) + " account.");
}, function () {
return model.variables.selectedAccountIn.platformAttr;
}, function () {
return tradershubClientVariables.getAccountType();
}),
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._selectedAccountInDataFetchStatus)
})), React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: !(model.variables.isLoadingVar),
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Password*/ 1,
mandatory: false,
maxLength: 16,
prompt: "Enter your password",
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.passwordInputValueVar, function (value) {
model.variables.passwordInputValueVar = value;
}),
_idProps: {
service: idService,
name: "PasswordInput4"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: right;"
},
visible: true,
_idProps: {
service: idService,
name: "ForgotPasswordContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.forgotPasswordOnClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
gridProperties: {
classes: "OSInline",
width: "auto"
},
visible: true,
_idProps: {
service: idService,
name: "ForgotPasswordRow"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 12px; font-weight: normal; text-decoration: underline;"
},
style: "cursor-pointer",
text: [$text(getTranslation("GOR6BjVlpk6AeyGimn2gQQ#Value", "Forgot password?"))],
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 16px;"
},
style: "cfd-modal-sticky-footer",
visible: true,
_idProps: {
service: idService,
name: "ModalFooter"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: !(model.variables.isLoadingVar),
gridProperties: {
classes: "OSFillParent"
},
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.addAccountOnClick$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
name: "AddAccount"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Add account",
_idProps: {
service: idService,
uuid: "14"
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
return controller.closeOnClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
extendedProperties: {
style: "padding: 16px;"
},
style: "display-flex justify-content-space-between align-items-center",
visible: true,
_idProps: {
service: idService,
name: "ModalHeader2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 18px; font-weight: bold;"
},
value: model.getCachedValue(idService.getId("SetUpPassword2.Value"), function () {
return (("Set up your " + (((model.variables.selectedAccountIn.platformAttr === "dxtrade")) ? ("DerivX") : (model.variables.selectedAccountIn.platformAttr))) + " password");
}, function () {
return model.variables.selectedAccountIn.platformAttr;
}),
_idProps: {
service: idService,
name: "SetUpPassword2"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._selectedAccountInDataFetchStatus)
}), React.createElement(OSWidgets.Icon, {
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.closeOnClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
extendedProperties: {
style: "font-size: 18px;"
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
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 16px;"
},
style: "display-flex flex-direction-column display-flex flex-1 gap-m",
visible: true,
_idProps: {
service: idService,
name: "ModalContent2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column display-flex gap-m",
visible: true,
_idProps: {
service: idService,
name: "CreatePasswordContent3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "DescriptionContainer4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("MEi7xO4uS0OgW1GcHI7F9A.Value"), function () {
return (((("Enable your Deriv " + (((model.variables.selectedAccountIn.platformAttr === "dxtrade")) ? ("X") : (model.variables.selectedAccountIn.platformAttr))) + " account by setting a password. Use this password for all your ") + (((model.variables.selectedAccountIn.platformAttr === "dxtrade")) ? ("DerivX") : (model.variables.selectedAccountIn.platformAttr))) + " accounts.");
}, function () {
return model.variables.selectedAccountIn.platformAttr;
}),
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._selectedAccountInDataFetchStatus)
})), React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: !(model.variables.isLoadingVar),
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Password*/ 1,
mandatory: false,
maxLength: 16,
prompt: "Enter your password",
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.passwordInputValueVar, function (value) {
model.variables.passwordInputValueVar = value;
}),
_idProps: {
service: idService,
name: "PasswordInput7"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column",
visible: true,
_idProps: {
service: idService,
name: "LiveCheckboxContainer5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(CustomComponentsOfficial_PasswordPolicy_PasswordPolicy_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Password: model.variables.passwordInputValueVar,
Length: 8
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
uuid: "24",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 16px;"
},
style: "cfd-modal-sticky-footer",
visible: true,
_idProps: {
service: idService,
name: "ModalFooter2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "border-radius: 5px; padding: 10px;"
},
style: "background-blue-lightest",
visible: true,
_idProps: {
service: idService,
name: "RegulatoryInfoContainer5"
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
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "padding: 10px;"
},
text: [$text(getTranslation("F1Qij8tE9Ui7CrFdwqfKgw#Value", "[placeholder for regulatory information]"))],
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "TncContainer5"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("DFhidqh5J0mr6smBIBF+aw#Value", "By clicking \"Set up password\", I accept Deriv [Jurisdiction] Ltd\'s terms and conditions."))), React.createElement(OSWidgets.Button, {
enabled: !(model.variables.isLoadingVar),
gridProperties: {
classes: "OSFillParent"
},
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.setPasswordOnClick$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
name: "SetUpPassword"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Set up password",
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
})));
        }
    }

    return View;
});
define("tradershub.CFDBlocks.CreateAccountPasswordModal.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.CFDBlocks.CreateAccountPasswordModal.mvc$translationsResources", "tradershub.model$ST_148480cbe068b64f08f2cd9823941166Structure", "tradershub.model$ST_9aff8863a6e9bf91c18ba9445f806cc7Structure", "tradershub.controller$MT5NewAccount", "tradershub.model$ST_7c6f1aa8afe53291591b30baa5b69641Structure", "tradershub.controller$TradingPlatformNewAccount", "tradershub.model$ST_5ac3ea1985fc9113c0222eb9ee2fcb49Structure", "tradershub.controller$TradingPlatformPasswordChange"], function (OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_CFDBlocks_CreateAccountPasswordModal_mvc_TranslationsResources) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, tradershub_CFDBlocks_CreateAccountPasswordModal_mvc_TranslationsResources);
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
get _addAccountOnClick$Action() {if(!(this.hasOwnProperty("__addAccountOnClick$Action"))) {
this.__addAccountOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("AddAccountOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "AddAccountOnClick");
span.setAttribute("outsystems.function.key", "38705109-adbe-4569-b38f-367b31b71405");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("AddAccountOnClick");
callContext = controller.callContext(callContext);
var mT5NewAccountVar = new OS.DataTypes.VariableHolder();
var tradingPlatformNewAccountVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
return OS.Flow.executeSequence(function () {
if(((model.variables.selectedAccountIn.platformAttr === "mt5"))) {
// Execute Action: MT5NewAccount
model.flush();
return tradershubController.default.mT5NewAccount$Action(model.variables.passwordInputValueVar, tradershubClientVariables.getSignupEmail(), tradershubClientVariables.getUserName(), model.variables.selectedAccountIn.productAttr, callContext).then(function (value) {
mT5NewAccountVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if(((mT5NewAccountVar.value.responseOut.msg_typeAttr === OS.BuiltinFunctions.nullTextIdentifier()))) {
// IsLoading = False
model.variables.isLoadingVar = false;
return OS.Flow.returnAsync();

} else {
// Trigger Event: RefetchMT5Event
return controller.refetchMT5Event$Action(callContext);
}

});
});
} else {
// Execute Action: TradingPlatformNewAccount
model.flush();
return tradershubController.default.tradingPlatformNewAccount$Action("all", model.variables.passwordInputValueVar, model.variables.selectedAccountIn.platformAttr, callContext).then(function (value) {
tradingPlatformNewAccountVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if(((tradingPlatformNewAccountVar.value.responseOut.msg_typeAttr === OS.BuiltinFunctions.nullTextIdentifier()))) {
// IsLoading = False
model.variables.isLoadingVar = false;
return OS.Flow.returnAsync();

} else {
// Trigger Event: RefetchDxtradeEvent
return controller.refetchDxtradeEvent$Action(callContext);
}

});
});
}

}).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
// PasswordInputValue = ""
model.variables.passwordInputValueVar = "";
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

return this.__addAccountOnClick$Action;
}set _addAccountOnClick$Action(value) {this.__addAccountOnClick$Action = value;
}

get _setPasswordOnClick$Action() {if(!(this.hasOwnProperty("__setPasswordOnClick$Action"))) {
this.__setPasswordOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("SetPasswordOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "SetPasswordOnClick");
span.setAttribute("outsystems.function.key", "45cc1744-92ff-4c58-8c38-be10958c7543");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("SetPasswordOnClick");
callContext = controller.callContext(callContext);
var tradingPlatformPasswordChangeVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: TradingPlatformPasswordChange
model.flush();
return tradershubController.default.tradingPlatformPasswordChange$Action("", model.variables.selectedAccountIn.platformAttr, model.variables.passwordInputValueVar, callContext).then(function (value) {
tradingPlatformPasswordChangeVar.value = value;
}).then(function () {
// Execute Action: AddAccountOnClick
return controller._addAccountOnClick$Action(callContext);
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

return this.__setPasswordOnClick$Action;
}set _setPasswordOnClick$Action(value) {this.__setPasswordOnClick$Action = value;
}

get _forgotPasswordOnClick$Action() {if(!(this.hasOwnProperty("__forgotPasswordOnClick$Action"))) {
this.__forgotPasswordOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("ForgotPasswordOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "ForgotPasswordOnClick");
span.setAttribute("outsystems.function.key", "4eba8086-80bd-43e8-88ef-03149d3491b2");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("ForgotPasswordOnClick");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: ForgotPasswordEvent
return controller.forgotPasswordEvent$Action(callContext);
});
}, function () {
if(span) {
span.end();
}

});
}, 1);
};
}

return this.__forgotPasswordOnClick$Action;
}set _forgotPasswordOnClick$Action(value) {this.__forgotPasswordOnClick$Action = value;
}

get _closeOnClick$Action() {if(!(this.hasOwnProperty("__closeOnClick$Action"))) {
this.__closeOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("CloseOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "CloseOnClick");
span.setAttribute("outsystems.function.key", "98b33e72-ea9f-4fc5-94c7-b779de152e50");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("CloseOnClick");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: CloseEvent
return controller.closeEvent$Action(callContext).then(function () {
// PasswordInputValue = ""
model.variables.passwordInputValueVar = "";
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

return this.__closeOnClick$Action;
}set _closeOnClick$Action(value) {this.__closeOnClick$Action = value;
}


addAccountOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("AddAccountOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "AddAccountOnClick");
span.setAttribute("outsystems.function.key", "38705109-adbe-4569-b38f-367b31b71405");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._addAccountOnClick$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

setPasswordOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("SetPasswordOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "SetPasswordOnClick");
span.setAttribute("outsystems.function.key", "45cc1744-92ff-4c58-8c38-be10958c7543");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._setPasswordOnClick$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

forgotPasswordOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("ForgotPasswordOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "ForgotPasswordOnClick");
span.setAttribute("outsystems.function.key", "4eba8086-80bd-43e8-88ef-03149d3491b2");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._forgotPasswordOnClick$Action, callContext);
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
span.setAttribute("outsystems.function.key", "98b33e72-ea9f-4fc5-94c7-b779de152e50");
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

get forgotPasswordEvent$Action() {if(!(this.hasOwnProperty("_forgotPasswordEvent$Action"))) {
this._forgotPasswordEvent$Action = function () {
return Promise.resolve();
};
}

return this._forgotPasswordEvent$Action;
}set forgotPasswordEvent$Action(value) {this._forgotPasswordEvent$Action = value;
}

get closeEvent$Action() {if(!(this.hasOwnProperty("_closeEvent$Action"))) {
this._closeEvent$Action = function () {
return Promise.resolve();
};
}

return this._closeEvent$Action;
}set closeEvent$Action(value) {this._closeEvent$Action = value;
}

get refetchMT5Event$Action() {if(!(this.hasOwnProperty("_refetchMT5Event$Action"))) {
this._refetchMT5Event$Action = function () {
return Promise.resolve();
};
}

return this._refetchMT5Event$Action;
}set refetchMT5Event$Action(value) {this._refetchMT5Event$Action = value;
}

get refetchDxtradeEvent$Action() {if(!(this.hasOwnProperty("_refetchDxtradeEvent$Action"))) {
this._refetchDxtradeEvent$Action = function () {
return Promise.resolve();
};
}

return this._refetchDxtradeEvent$Action;
}set refetchDxtradeEvent$Action(value) {this._refetchDxtradeEvent$Action = value;
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


define("tradershub.CFDBlocks.CreateAccountPasswordModal.mvc$translationsResources.fr-FR", [], function () {
return {
"DFhidqh5J0mr6smBIBF+aw#Value": "En cliquant sur \"Configurer le mot de passe\", j\'accepte les termes et conditions de Deriv [Jurisdiction] Ltd.",
"F1Qij8tE9Ui7CrFdwqfKgw#Value": "[espace réservé pour les informations réglementaires]",
"GOR6BjVlpk6AeyGimn2gQQ#Value": "Mot de passe oublié ?"
};
});

define("tradershub.CFDBlocks.CreateAccountPasswordModal.mvc$translationsResources", ["exports", "tradershub.CFDBlocks.CreateAccountPasswordModal.mvc$translationsResources.fr-FR"], function (exports, tradershub_CFDBlocks_CreateAccountPasswordModal_mvc_translationsResources_frFR) {
return {
"fr-FR": {
"translations": tradershub_CFDBlocks_CreateAccountPasswordModal_mvc_translationsResources_frFR,
"isRTL": false
}
};
});

