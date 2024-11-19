define("tradershub.Signup.CreatePassword.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "tradershub.controller$PostSignupActions", "tradershub.controller$GBFeatureFlagValue", "tradershub.controller$CleanupAfterRealSignup", "tradershub.controller$DerivApiSendMessage", "tradershub.model$ST_eb286c497eeb9a2ab2c838f3628b06e8Structure", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetFocus"], function (OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIModel, OutSystemsUIController) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Password", "passwordVar", "Password", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("showPassword", "showPasswordVar", "showPassword", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsPasswordValid", "isPasswordValidVar", "IsPasswordValid", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsExecuting", "isExecutingVar", "IsExecuting", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
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
Form: OS.Model.ValidationWidgetRecord,
Input_password: OS.Model.ValidationWidgetRecord
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

define("tradershub.Signup.CreatePassword.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "tradershub.Signup.CreatePassword.mvc$model", "tradershub.Signup.CreatePassword.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.SignupLayoutTopMenu.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.Common.PasswordPolicy.mvc$view", "OutSystemsUI.Utilities.ButtonLoading.mvc$view", "tradershub.controller$PostSignupActions", "tradershub.controller$GBFeatureFlagValue", "tradershub.controller$CleanupAfterRealSignup", "tradershub.controller$DerivApiSendMessage", "tradershub.model$ST_eb286c497eeb9a2ab2c838f3628b06e8Structure", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetFocus"], function (OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIModel, OutSystemsUIController, React, OSView, tradershub_Signup_CreatePassword_mvc_model, tradershub_Signup_CreatePassword_mvc_controller, tradershubClientVariables, tradershub_Layouts_SignupLayoutTopMenu_mvc_view, OSWidgets, tradershub_Common_PasswordPolicy_mvc_view, OutSystemsUI_Utilities_ButtonLoading_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() { return "Signup.CreatePassword"; }

        static getAttributes() { return {
codeFunction: "CreatePassword",
functionKey: "609944cc-98be-46ba-b99c-ba649bf86e17",
functionOwnerName: "tradershub",
functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.Signup.CreatePassword.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return ["scripts/tradershub.JSCookie.js"];
        }

        static getBlocks() {
            return [tradershub_Layouts_SignupLayoutTopMenu_mvc_view, tradershub_Common_PasswordPolicy_mvc_view, OutSystemsUI_Utilities_ButtonLoading_mvc_view];
        }

        get modelFactory() {
            return tradershub_Signup_CreatePassword_mvc_model;
        }

        get controllerFactory() {
            return tradershub_Signup_CreatePassword_mvc_controller;
        }

        get title() {
            
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            var validationService = controller.validationService;
            var callContext = controller.callContext();
            var asPrimitiveValue = View.asPrimitiveValue;
            var getTranslation = View.getTranslation;
            var _this = this;
            

            return OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("zESZYL6Yuka5nLpkm_huFw#TitleExpression.-1261959591.1", "Create Password | Deriv");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(tradershub_Layouts_SignupLayoutTopMenu_mvc_view, {
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
mainContent: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "main-container",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "deriv-25years-logo-container",
visible: true,
_idProps: {
service: idService,
name: "LeftSideContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.deriv25years.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width11"
},
style: "password-container",
visible: true,
_idProps: {
service: idService,
name: "RightSideContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "content-container",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "back-arrow-container",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
extendedProperties: {
style: "height: 20px;"
},
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("tradershub", "signup/citizenship", {}),
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedProperties: {
style: "height: 24px; margin-top: 0px;"
},
gridProperties: {
width: "24px"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.leftArrow.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "header-content-container",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-right: 16px;"
},
gridProperties: {
marginLeft: "16px"
},
style: "display-flex align-items-center gap-s",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
style: "back-arrow-mobile display-flex",
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("tradershub", "signup/citizenship", {}),
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedProperties: {
style: "height: 24px; margin-top: 0px;"
},
gridProperties: {
width: "24px"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.leftArrow.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 20px; font-weight: bold; margin-left: 0px;"
},
style: "password-title",
text: [$text(getTranslation("YJKZmdYnkk6t92M0SJoU_g#Value", "Password"))],
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "color: #F1F3F5; height: 2px; margin-bottom: 12px; margin-top: 12px;"
},
style: "border-bottom-s divider",
visible: true,
_idProps: {
service: idService,
name: "Divider"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-right: 16px;"
},
gridProperties: {
marginLeft: "16px"
},
style: "display-flex flex-direction-column gap-m",
visible: true,
_idProps: {
service: idService,
name: "ContentContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Form, {
_validationProps: {
validationService: validationService
},
extendedProperties: {
style: "border-width: 0px; margin-top: 8px; padding: 0px;"
},
gridProperties: {
classes: "OSFillParent"
},
style: "\"form card\"",
_idProps: {
service: idService,
name: "Form"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 0px;"
},
style: model.getCachedValue(idService.getId("Oo_E6oDIh0+hYMfdnKKmWA.Style"), function () {
return ((model.widgets.get(idService.getId("Input_password")).validAttr) ? ("") : ("margin-bottom-l"));
}, function () {
return model.widgets.get(idService.getId("Input_password")).validAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "position-relative",
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form")
},
enabled: true,
extendedEvents: {
onBlur: function () {
var eventHandlerContext = callContext.clone();
controller.validate$Action(controller.callContext(eventHandlerContext));

;
}
},
extendedProperties: {
type: model.getCachedValue(idService.getId("Input_password.type"), function () {
return ((model.variables.showPasswordVar) ? ("text") : ("password"));
}, function () {
return model.variables.showPasswordVar;
})
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Password*/ 1,
mandatory: true,
maxLength: 50,
prompt: "Enter your password",
style: model.getCachedValue(idService.getId("Input_password.Style"), function () {
return (((model.widgets.get(idService.getId("Input_password")).validAttr === false)) ? ("form-control input-field-error") : ("form-control input-field input-field"));
}, function () {
return model.widgets.get(idService.getId("Input_password")).validAttr;
}),
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.passwordVar, function (value) {
model.variables.passwordVar = value;
}),
_idProps: {
service: idService,
name: "Input_password"
},
_widgetRecordProvider: widgetsRecordProvider
}), $if(model.variables.showPasswordVar, false, this, function () {
return [React.createElement(OSWidgets.Image, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.onClickShowPassword$Action(controller.callContext(eventHandlerContext));

;
}
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.eyeunsplash.svg"),
style: model.getCachedValue(idService.getId("d6TDXpmCeU+W0c1mnu6JnA.Style"), function () {
return (((model.widgets.get(idService.getId("Input_password")).validAttr === false)) ? ("position-absolute absolute-center-right eye-image-style-error") : ("position-absolute absolute-center-right eye-image-style"));
}, function () {
return model.widgets.get(idService.getId("Input_password")).validAttr;
}),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Image, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.onClickShowPassword$Action(controller.callContext(eventHandlerContext));

;
}
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.eyeslashsm.svg"),
style: model.getCachedValue(idService.getId("C3W+6SAd5EiPTMhEB_W9Kw.Style"), function () {
return (((model.widgets.get(idService.getId("Input_password")).validAttr === false)) ? ("position-absolute absolute-center-right eye-image-style-error") : ("position-absolute absolute-center-right eye-image-style"));
}, function () {
return model.widgets.get(idService.getId("Input_password")).validAttr;
}),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline",
width: "fill"
},
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(tradershub_Common_PasswordPolicy_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Length: 8,
Type: "CREATE",
Password: model.variables.passwordVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
compliant$Action: function (isValidIn) {
var eventHandlerContext = callContext.clone();
controller.passwordPolicyCompliant$Action(isValidIn, controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form")
},
_idProps: {
service: idService,
uuid: "24",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 24px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_Utilities_ButtonLoading_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
IsLoading: model.variables.isExecutingVar,
ExtendedClass: "full-width",
ShowLabelOnLoading: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form")
},
_idProps: {
service: idService,
uuid: "26",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: !(model.variables.isExecutingVar),
gridProperties: {
classes: "OSFillParent"
},
isDefault: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.createPasswordOnClick$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary full-width",
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "osui-btn-loading__spinner-animation",
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 16px;"
},
text: [$text(getTranslation("4Fz_roe66ka8TosagmeQgg#Value", "Create password"))],
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.isExecutingVar)]
}))))))))];
})
},
_dependencies: [asPrimitiveValue(model.variables.isExecutingVar), asPrimitiveValue(model.variables.showPasswordVar), asPrimitiveValue(model.variables.passwordVar), asPrimitiveValue(model.widgets.get(idService.getId("Input_password")).validAttr)]
}));
        }
    }

    return View;
});
define("tradershub.Signup.CreatePassword.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.Signup.CreatePassword.mvc$translationsResources", "tradershub.Signup.controller", "tradershub.Signup.CreatePassword.mvc$controller.CreateVirtualAccount.RudderStackSuccessJS", "tradershub.Signup.CreatePassword.mvc$controller.CreateVirtualAccount.NewAccountVirtualPayloadJS", "tradershub.Signup.CreatePassword.mvc$controller.CreateVirtualAccount.RudderStackErrorJS", "tradershub.Signup.CreatePassword.mvc$controller.CreateVirtualAccount.LandingCompanyPayloadJS", "tradershub.Signup.CreatePassword.mvc$controller.OnReady.RudderStackJS", "tradershub.controller$PostSignupActions", "tradershub.controller$GBFeatureFlagValue", "tradershub.controller$CleanupAfterRealSignup", "tradershub.controller$DerivApiSendMessage", "tradershub.model$ST_eb286c497eeb9a2ab2c838f3628b06e8Structure", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetFocus"], function (OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIModel, OutSystemsUIController, tradershubLanguageResources, tradershubClientVariables, tradershub_Signup_CreatePassword_mvc_TranslationsResources, tradershub_SignupController, tradershub_Signup_CreatePassword_mvc_controller_CreateVirtualAccount_RudderStackSuccessJS, tradershub_Signup_CreatePassword_mvc_controller_CreateVirtualAccount_NewAccountVirtualPayloadJS, tradershub_Signup_CreatePassword_mvc_controller_CreateVirtualAccount_RudderStackErrorJS, tradershub_Signup_CreatePassword_mvc_controller_CreateVirtualAccount_LandingCompanyPayloadJS, tradershub_Signup_CreatePassword_mvc_controller_OnReady_RudderStackJS) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, tradershub_Signup_CreatePassword_mvc_TranslationsResources);
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
get _createVirtualAccount$Action() {if(!(this.hasOwnProperty("__createVirtualAccount$Action"))) {
this.__createVirtualAccount$Action = function (newPasswordIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("CreateVirtualAccount", function (span) {
if(span) {
span.setAttribute("code.function", "CreateVirtualAccount");
span.setAttribute("outsystems.function.key", "02f3d37e-3e5a-4e6a-a74e-66780ce5b354");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("CreateVirtualAccount");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("tradershub.Signup.CreatePassword.CreateVirtualAccount$vars"))());
vars.value.newPasswordInLocal = newPasswordIn;
var postSignupActions2Var = new OS.DataTypes.VariableHolder();
var gBRedirectToDerivAppVar = new OS.DataTypes.VariableHolder();
var postSignupActionsVar = new OS.DataTypes.VariableHolder();
var landingCompanyAPIVar = new OS.DataTypes.VariableHolder();
var newAccountVirtualAPIVar = new OS.DataTypes.VariableHolder();
var newAccountVirtualPayloadJSResult = new OS.DataTypes.VariableHolder();
var landingCompanyPayloadJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeNewAccountVirtualResponseVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_eb286c497eeb9a2ab2c838f3628b06e8Structure))());
return OS.Flow.executeAsyncFlow(function () {
newAccountVirtualPayloadJSResult.value = OS.Logger.startActiveSpan("NewAccountVirtualPayload", function (span) {
if(span) {
span.setAttribute("code.function", "NewAccountVirtualPayload");
span.setAttribute("outsystems.function.key", "7f8a0ecf-49d7-47c5-ab81-17ec901aec0f");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_Signup_CreatePassword_mvc_controller_CreateVirtualAccount_NewAccountVirtualPayloadJS, "NewAccountVirtualPayload", "CreateVirtualAccount", {
Residence: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getSelectedResidence(), OS.DataTypes.DataTypes.Text),
NewPassword: OS.DataConversion.JSNodeParamConverter.to(vars.value.newPasswordInLocal, OS.DataTypes.DataTypes.Text),
VerificationCode: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getCode(), OS.DataTypes.DataTypes.Text),
Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.Signup.CreatePassword.CreateVirtualAccount$newAccountVirtualPayloadJSResult"))();
jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// Execute Action: NewAccountVirtualAPI
model.flush();
return tradershubController.default.derivApiSendMessage$Action(newAccountVirtualPayloadJSResult.value.payloadOut, "new_account_virtual", false, callContext).then(function (value) {
newAccountVirtualAPIVar.value = value;
}).then(function () {
// JSON Deserialize: JSONDeserializeNewAccountVirtualResponse
jSONDeserializeNewAccountVirtualResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(newAccountVirtualAPIVar.value.responseOut, tradershubModel.ST_eb286c497eeb9a2ab2c838f3628b06e8Structure, false);
}).then(function () {
return OS.Flow.executeSequence(function () {
if((newAccountVirtualAPIVar.value.isErrorOut)) {
OS.Logger.startActiveSpan("RudderStackError", function (span) {
if(span) {
span.setAttribute("code.function", "RudderStackError");
span.setAttribute("outsystems.function.key", "d5276b04-e76f-4adf-ad68-f23d0807177e");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_Signup_CreatePassword_mvc_controller_CreateVirtualAccount_RudderStackErrorJS, "RudderStackError", "CreateVirtualAccount", null, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// Destination: /tradershub/VerificationLinkExpired
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "link-expired", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
OS.Logger.startActiveSpan("RudderStackSuccess", function (span) {
if(span) {
span.setAttribute("code.function", "RudderStackSuccess");
span.setAttribute("outsystems.function.key", "17b9bbe4-fb0b-4645-9c86-8500dafdbf2c");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_Signup_CreatePassword_mvc_controller_CreateVirtualAccount_RudderStackSuccessJS, "RudderStackSuccess", "CreateVirtualAccount", null, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// ActiveLoginId = JSONDeserializeNewAccountVirtualResponse.Data.New_account_virtual.Client_id
tradershubClientVariables.setActiveLoginId(jSONDeserializeNewAccountVirtualResponseVar.value.dataOut.new_account_virtualAttr.client_idAttr);
// AuthToken = JSONDeserializeNewAccountVirtualResponse.Data.New_account_virtual.Oauth_token
tradershubClientVariables.setAuthToken(jSONDeserializeNewAccountVirtualResponseVar.value.dataOut.new_account_virtualAttr.oauth_tokenAttr);
// Execute Action: CleanStartForRealAccountCreation
tradershubController.default.cleanupAfterRealSignup$Action(callContext);
// Execute Action: GBRedirectToDerivApp
gBRedirectToDerivAppVar.value = tradershubController.default.gBFeatureFlagValue$Action("trigger_real_account_creation_highcode", callContext);

// RedirectToDerivApp
return OS.Flow.executeSequence(function () {
if((gBRedirectToDerivAppVar.value.isEnabledOut)) {
// InitializeRealSignup = False
tradershubClientVariables.setInitializeRealSignup(false);
// Execute Action: PostSignupActions
model.flush();
return tradershubController.default.postSignupActions$Action(true, callContext).then(function (value) {
postSignupActionsVar.value = value;
});
} else {
// Execute Action: PostSignupActions2
model.flush();
return tradershubController.default.postSignupActions$Action(false, callContext).then(function (value) {
postSignupActions2Var.value = value;
}).then(function () {
landingCompanyPayloadJSResult.value = OS.Logger.startActiveSpan("LandingCompanyPayload", function (span) {
if(span) {
span.setAttribute("code.function", "LandingCompanyPayload");
span.setAttribute("outsystems.function.key", "e8048d56-fd9e-4c92-90b3-8e640a7747bf");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_Signup_CreatePassword_mvc_controller_CreateVirtualAccount_LandingCompanyPayloadJS, "LandingCompanyPayload", "CreateVirtualAccount", {
CountryCode: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getSelectedResidence(), OS.DataTypes.DataTypes.Text),
Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.Signup.CreatePassword.CreateVirtualAccount$landingCompanyPayloadJSResult"))();
jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// Execute Action: LandingCompanyAPI
model.flush();
return tradershubController.default.derivApiSendMessage$Action(landingCompanyPayloadJSResult.value.payloadOut, "", false, callContext).then(function (value) {
landingCompanyAPIVar.value = value;
});
}).then(function () {
// RawLandingCompanyResponse = LandingCompanyAPI.Response
tradershubClientVariables.setRawLandingCompanyResponse(landingCompanyAPIVar.value.responseOut);
// InitializeRealSignup = True
tradershubClientVariables.setInitializeRealSignup(true);
// Destination: /tradershub/CurrencySelection
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "currency-selection", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}

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

return this.__createVirtualAccount$Action;
}set _createVirtualAccount$Action(value) {this.__createVirtualAccount$Action = value;
}

get _onReady$Action() {if(!(this.hasOwnProperty("__onReady$Action"))) {
this.__onReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnReady", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "3b5bc8cf-17ae-41c0-979b-4d62c2605259");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var setFocusVar = new OS.DataTypes.VariableHolder();
OS.Logger.startActiveSpan("RudderStack", function (span) {
if(span) {
span.setAttribute("code.function", "RudderStack");
span.setAttribute("outsystems.function.key", "d7a0432b-99d1-4d09-8e4f-b2ca958acb1a");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_Signup_CreatePassword_mvc_controller_OnReady_RudderStackJS, "RudderStack", "OnReady", null, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// Execute Action: SetFocus
setFocusVar.value = OutSystemsUIController.default.setFocus$Action(idService.getId("Input_password"), callContext);

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

get _onClickShowPassword$Action() {if(!(this.hasOwnProperty("__onClickShowPassword$Action"))) {
this.__onClickShowPassword$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnClickShowPassword", function (span) {
if(span) {
span.setAttribute("code.function", "OnClickShowPassword");
span.setAttribute("outsystems.function.key", "a098d53c-07b5-40ea-9fd8-5290365e2319");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnClickShowPassword");
callContext = controller.callContext(callContext);
if((model.variables.showPasswordVar)) {
// showPassword = False
model.variables.showPasswordVar = false;
} else {
// showPassword = True
model.variables.showPasswordVar = true;
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onClickShowPassword$Action;
}set _onClickShowPassword$Action(value) {this.__onClickShowPassword$Action = value;
}

get _passwordPolicyCompliant$Action() {if(!(this.hasOwnProperty("__passwordPolicyCompliant$Action"))) {
this.__passwordPolicyCompliant$Action = function (isValidIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("PasswordPolicyCompliant", function (span) {
if(span) {
span.setAttribute("code.function", "PasswordPolicyCompliant");
span.setAttribute("outsystems.function.key", "a1ea7e37-49ab-4844-a6de-d443e484b7c7");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("PasswordPolicyCompliant");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("tradershub.Signup.CreatePassword.PasswordPolicyCompliant$vars"))());
vars.value.isValidInLocal = isValidIn;
// IsPasswordValid = IsValid
model.variables.isPasswordValidVar = vars.value.isValidInLocal;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__passwordPolicyCompliant$Action;
}set _passwordPolicyCompliant$Action(value) {this.__passwordPolicyCompliant$Action = value;
}

get _validate$Action() {if(!(this.hasOwnProperty("__validate$Action"))) {
this.__validate$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("Validate", function (span) {
if(span) {
span.setAttribute("code.function", "Validate");
span.setAttribute("outsystems.function.key", "a2f07463-7344-4627-95ab-4c1e49fbc859");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("Validate");
callContext = controller.callContext(callContext);
if(((model.variables.passwordVar === ""))) {
// Input_password.Valid = False
model.widgets.get(idService.getId("Input_password")).validAttr = false;
// Input_password.ValidationMessage = "Password is required."
model.widgets.get(idService.getId("Input_password")).validationMessageAttr = "Password is required.";
} else {
// Input_password.Valid = True
model.widgets.get(idService.getId("Input_password")).validAttr = true;
// Input_password.ValidationMessage = NullTextIdentifier
model.widgets.get(idService.getId("Input_password")).validationMessageAttr = OS.BuiltinFunctions.nullTextIdentifier();
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__validate$Action;
}set _validate$Action(value) {this.__validate$Action = value;
}

get _onInitialize$Action() {if(!(this.hasOwnProperty("__onInitialize$Action"))) {
this.__onInitialize$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnInitialize", function (span) {
if(span) {
span.setAttribute("code.function", "OnInitialize");
span.setAttribute("outsystems.function.key", "b566eb52-9293-4511-b255-066e99e607b0");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
if((((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
// Destination: /tradershub/
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://app.deriv.com", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onInitialize$Action;
}set _onInitialize$Action(value) {this.__onInitialize$Action = value;
}

get _createPasswordOnClick$Action() {if(!(this.hasOwnProperty("__createPasswordOnClick$Action"))) {
this.__createPasswordOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("CreatePasswordOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "CreatePasswordOnClick");
span.setAttribute("outsystems.function.key", "d87d49c9-4381-4bd4-b196-8fd5e529e06b");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("CreatePasswordOnClick");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((!(model.variables.isExecutingVar))) {
return OS.Flow.executeSequence(function () {
if((model.variables.isPasswordValidVar)) {
// IsExecuting = True
model.variables.isExecutingVar = true;
// Execute Action: CreateVirtualAccount
return controller._createVirtualAccount$Action(model.variables.passwordVar, callContext);
} else {
if(((model.variables.passwordVar === ""))) {
// Input_password.Valid = False
model.widgets.get(idService.getId("Input_password")).validAttr = false;
// Input_password.ValidationMessage = "Password is required."
model.widgets.get(idService.getId("Input_password")).validationMessageAttr = "Password is required.";
}

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

return this.__createPasswordOnClick$Action;
}set _createPasswordOnClick$Action(value) {this.__createPasswordOnClick$Action = value;
}


createVirtualAccount$Action(newPasswordIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("CreateVirtualAccount__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "CreateVirtualAccount");
span.setAttribute("outsystems.function.key", "02f3d37e-3e5a-4e6a-a74e-66780ce5b354");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._createVirtualAccount$Action, callContext, newPasswordIn);
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
span.setAttribute("outsystems.function.key", "3b5bc8cf-17ae-41c0-979b-4d62c2605259");
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

onClickShowPassword$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnClickShowPassword__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnClickShowPassword");
span.setAttribute("outsystems.function.key", "a098d53c-07b5-40ea-9fd8-5290365e2319");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onClickShowPassword$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

passwordPolicyCompliant$Action(isValidIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("PasswordPolicyCompliant__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "PasswordPolicyCompliant");
span.setAttribute("outsystems.function.key", "a1ea7e37-49ab-4844-a6de-d443e484b7c7");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._passwordPolicyCompliant$Action, callContext, isValidIn);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

validate$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("Validate__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "Validate");
span.setAttribute("outsystems.function.key", "a2f07463-7344-4627-95ab-4c1e49fbc859");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._validate$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

onInitialize$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnInitialize__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnInitialize");
span.setAttribute("outsystems.function.key", "b566eb52-9293-4511-b255-066e99e607b0");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

createPasswordOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("CreatePasswordOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "CreatePasswordOnClick");
span.setAttribute("outsystems.function.key", "d87d49c9-4381-4bd4-b196-8fd5e529e06b");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._createPasswordOnClick$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}


// Event Handler Actions
get onInitializeEventHandler() {if(!(this.hasOwnProperty("_onInitializeEventHandler"))) {
this._onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onInitialize$Action(callContext);

};
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
return tradershub_SignupController.default.handleError(ex, this.callContext());
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
Controller.registerVariableGroupType("tradershub.Signup.CreatePassword.CreateVirtualAccount$vars", [{
name: "NewPassword",
attrName: "newPasswordInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.Signup.CreatePassword.CreateVirtualAccount$newAccountVirtualPayloadJSResult", [{
name: "Payload",
attrName: "payloadOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.Signup.CreatePassword.CreateVirtualAccount$landingCompanyPayloadJSResult", [{
name: "Payload",
attrName: "payloadOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.Signup.CreatePassword.PasswordPolicyCompliant$vars", [{
name: "IsValid",
attrName: "isValidInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

}
return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.Signup.CreatePassword.mvc$controller.CreateVirtualAccount.RudderStackSuccessJS", [], function () {
return function ($actions, $roles, $public) {
    cacheTrackEvents.track({
    name: "ce_virtual_signup_form",
    properties: {
        action: "signup_done",
        signup_provider: "email",
        form_name: "virtual_signup_form_outsystems"
    }
});

window?.dataLayer.push({
    event: 'virtual_signup',
})

};
});

define("tradershub.Signup.CreatePassword.mvc$controller.CreateVirtualAccount.NewAccountVirtualPayloadJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const cookies = getCookiesFields()
const cookies_objects = window.getCookiesObject(cookies)
const cookies_value = getDataObjFromCookies(cookies_objects, cookies)
const affiliate_token = getCookieValue('affiliate_tracking')

$parameters.Payload = JSON.stringify({
    client_password: $parameters.NewPassword,
    verification_code: $parameters.VerificationCode,
    type: "trading",
    residence: $parameters.Residence,
    affiliate_token,
    ...cookies_value
});

};
});

define("tradershub.Signup.CreatePassword.mvc$controller.CreateVirtualAccount.RudderStackErrorJS", [], function () {
return function ($actions, $roles, $public) {
cacheTrackEvents.track({
    name: "ce_virtual_signup_form",
    properties: {
        action: "signup_flow_error",
        form_name: "virtual_signup_form_outsystems",
        error_message: "account_creation_failed"
    }
});
};
});

define("tradershub.Signup.CreatePassword.mvc$controller.CreateVirtualAccount.LandingCompanyPayloadJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Payload = JSON.stringify({
    landing_company: $parameters.CountryCode
});

};
});

define("tradershub.Signup.CreatePassword.mvc$controller.OnReady.RudderStackJS", [], function () {
return function ($actions, $roles, $public) {
cacheTrackEvents.track({
    name: "ce_virtual_signup_form",
    properties: {
        action: "password_screen_opened",
        form_name: "virtual_signup_form_outsystems"
    }
});
};
});


define("tradershub.Signup.CreatePassword.mvc$translationsResources.fr-FR", [], function () {
return {
"4Fz_roe66ka8TosagmeQgg#Value": "Créer un mot de passe",
"YJKZmdYnkk6t92M0SJoU_g#Value": "Mot de passe",
"zESZYL6Yuka5nLpkm_huFw#Title": "Créer un mot de passe | Deriv",
"zESZYL6Yuka5nLpkm_huFw#TitleExpression.-1261959591.1": "Créer un mot de passe | Deriv"
};
});

define("tradershub.Signup.CreatePassword.mvc$translationsResources", ["exports", "tradershub.Signup.CreatePassword.mvc$translationsResources.fr-FR"], function (exports, tradershub_Signup_CreatePassword_mvc_translationsResources_frFR) {
return {
"fr-FR": {
"translations": tradershub_Signup_CreatePassword_mvc_translationsResources_frFR,
"isRTL": false
}
};
});

