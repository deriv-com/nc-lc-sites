define("tradershub.Signup.EUSignup.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.controller", "tradershub.controller", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.controller$DerivApiSendMessage", "tradershub.controller$RedirectToExternalURL"], function (OSRuntimeCore, tradershubModel, OutSystemsUIController, tradershubController) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("IsSubmitting", "isSubmittingVar", "IsSubmitting", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new VariablesRecord(new VariablesRecord.RecordClass({
isSubmittingVar: OS.DataTypes.ImmutableBase.getData(str)
}));
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
Input_Email: OS.Model.ValidationWidgetRecord
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

define("tradershub.Signup.EUSignup.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "tradershub.Signup.EUSignup.mvc$model", "tradershub.Signup.EUSignup.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.SignupLayoutTopMenu.mvc$view", "@outsystems/runtime-widgets-js", "OutSystemsUI.Utilities.ButtonLoading.mvc$view", "OutSystemsUI.Utilities.Separator.mvc$view", "tradershub.Signup.SocialLogin.mvc$view", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.controller$DerivApiSendMessage", "tradershub.controller$RedirectToExternalURL"], function (OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, React, OSView, tradershub_Signup_EUSignup_mvc_model, tradershub_Signup_EUSignup_mvc_controller, tradershubClientVariables, tradershub_Layouts_SignupLayoutTopMenu_mvc_view, OSWidgets, OutSystemsUI_Utilities_ButtonLoading_mvc_view, OutSystemsUI_Utilities_Separator_mvc_view, tradershub_Signup_SocialLogin_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() { return "Signup.EUSignup"; }

        static getAttributes() { return {
codeFunction: "EUSignup",
functionKey: "a8054016-31cd-4e13-b9f9-016532625872",
functionOwnerName: "tradershub",
functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.Signup.EUSignup.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_SignupLayoutTopMenu_mvc_view, OutSystemsUI_Utilities_ButtonLoading_mvc_view, OutSystemsUI_Utilities_Separator_mvc_view, tradershub_Signup_SocialLogin_mvc_view];
        }

        get modelFactory() {
            return tradershub_Signup_EUSignup_mvc_model;
        }

        get controllerFactory() {
            return tradershub_Signup_EUSignup_mvc_controller;
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
            

            return OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("FkAFqM0xE065+QFlMmJYcg#TitleExpression.2133226043.1", "Easy And Free Sign Up | Online Trading | Hub.Deriv.com");
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
inputs: {
HasLink: true,
ClientCountry: tradershubClientVariables.getClientCountry()
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
mainContent: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "color: #414652; font-size: 14px; margin-bottom: 0px; margin-right: 0px; margin-top: 0px; padding: 16px; text-align: left;"
},
gridProperties: {
marginLeft: "0"
},
style: "main-container full-width",
visible: true,
_idProps: {
service: idService,
name: "MainContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
style: "font-size: 16px;"
},
gridProperties: {
classes: "OSInline",
width: "486px"
},
style: "content-container",
visible: model.getCachedValue(idService.getId("ContentContainer.Visible"), function () {
return OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut;
}),
_idProps: {
service: idService,
name: "ContentContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column gap-base ",
visible: true,
_idProps: {
service: idService,
name: "ContentWrapper"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-family: \'Ubuntu\'; font-size: 32px; font-weight: bold; margin-bottom: 0px;"
},
text: [$text(getTranslation("F64XxsEC80ypnRKs+2DXOQ#Value", "Trusted for 25 years"))],
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-right: 0px; padding: 0px;"
},
visible: true,
_idProps: {
service: idService,
name: "IconListContainer2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedProperties: {
style: "height: 16px; margin-right: 8px;"
},
gridProperties: {
width: "16px"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.checkmark.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 16px;"
},
text: [$text(getTranslation("jArPalEju0eZL+HgJ5ymVA#Value", "Unique trade types"))],
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-right: 0px; padding: 0px;"
},
visible: true,
_idProps: {
service: idService,
name: "IconListContainer3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedProperties: {
style: "height: 16px; margin-right: 8px;"
},
gridProperties: {
width: "16px"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.checkmark.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 16px;"
},
text: [$text(getTranslation("r7rG1gEr7kSsy7JKpLm4Fw#Value", "Hundreds of instruments"))],
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-right: 0px; padding: 0px;"
},
visible: true,
_idProps: {
service: idService,
name: "IconListContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedProperties: {
style: "height: 16px; margin-right: 8px;"
},
gridProperties: {
width: "16px"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.checkmark.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 16px;"
},
text: [$text(getTranslation("GFsgudxbk0q6DwAHVnmXHQ#Value", "Financial and derived markets"))],
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 20px;"
},
text: [$text(getTranslation("JDNCstSMOEmuqZa708daBw#Value", "Trade anywhere, anytime. \n"))],
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "font-size: 20px; font-weight: bold;"
},
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("eJ_8ZW44tECsuVJyhA8MBA#Value", "Get your free demo account today. "))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: left;"
},
gridProperties: {
classes: "OSInline",
width: "486px"
},
style: "sign-up-container",
visible: true,
_idProps: {
service: idService,
name: "SignUpContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: 700; margin-bottom: 0px;"
},
style: "sign-up-header",
text: [$text(getTranslation("ELYPhzuj3k+9yt5SFTagNw#Value", "Join over 2.5 million traders\n"))],
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Form, {
_validationProps: {
validationService: validationService
},
extendedProperties: {
style: "margin-top: 16px;"
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
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
extendedProperties: {
style: "margin-bottom: 8px;"
},
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
targetWidget: "Input_Email",
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("WRRMOhzgcUGfKMbStruX_A#Value", "Email"))), React.createElement(OSWidgets.Input, {
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
style: "height: 40px; padding: 0px 16px 0px 16px;"
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: true,
maxLength: 0,
prompt: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("yF8cEKbcxUaOlH9ylne2QQ#ValueExpression.-374653993.1", "Enter your email"),
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getSignupEmail(), function (value) {
tradershubClientVariables.setSignupEmail(value);
}),
_idProps: {
service: idService,
name: "Input_Email"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 16px;"
},
style: "",
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 12px;"
},
style: "text-neutral-9",
text: [$text(getTranslation("rXtNkvhkaEaHS7yFhnwtFg#Value", "By creating an account, you confirm you are 18+ and understand we may send you updates and marketing materials (see "))],
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
onClick: function () {
_this.validateWidget(idService.getId("Form"));
var eventHandlerContext = callContext.clone();
controller.linkOnClick$Action(controller.callContext(eventHandlerContext));


;
},
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 12px; font-weight: bold; text-decoration: underline;"
},
style: "text-neutral-9",
value: "Security and privacy policy",
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 12px;"
},
style: "text-neutral-9",
text: [$text(getTranslation("2fJvOwaWWUmrhLCTXpGdjQ#Value", "). Unsubscribe in your account settings anytime.\nBy signing up, you agree to our "))],
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Link, {
enabled: true,
extendedProperties: {
target: "_blank",
style: "font-size: 12px;"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: "text-neutral-9",
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("https://deriv.com/terms-and-conditions/#clients", {}),
visible: true,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #272B30; font-weight: bold; text-decoration: underline;"
},
style: "text-neutral-9",
text: [$text(getTranslation("fETa_D8xhkG3TyJDcHNr+w#Value", "Terms and conditions"))],
_idProps: {
service: idService,
name: "ClientTncLink"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Text, {
style: "text-neutral-9",
text: [$text(getTranslation("Wlh71Z9bc0KUSa4kmDKh_g#Value", "."))],
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "",
visible: true,
_idProps: {
service: idService,
uuid: "33"
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
IsLoading: model.variables.isSubmittingVar,
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
uuid: "34",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: !(model.variables.isSubmittingVar),
extendedProperties: {
style: "border-radius: 100px; height: 40px; margin-top: 24px;"
},
gridProperties: {
classes: "OSFillParent"
},
isDefault: true,
onClick: function () {
_this.validateWidget(idService.getId("Form"));
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.submitOnClick$Action(controller.callContext(eventHandlerContext));
});

;
},
style: "btn btn-primary full-width",
visible: true,
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "font-size: 14px;"
},
style: "osui-btn-loading__spinner-animation",
visible: true,
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 14px;"
},
text: [$text(getTranslation("3naFX9uKU0aE8_79mMTKag#Value", "Create account"))],
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.isSubmittingVar)]
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-right: 0px; margin-top: 24px; padding: 0px;"
},
style: "display-flex align-items-center",
visible: true,
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "flex-1",
visible: true,
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_Utilities_Separator_mvc_view, {
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
uuid: "40",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 12px; margin-left: 16px; margin-right: 16px;"
},
text: [$text(getTranslation("O56+jipAfE+aU6be+VlLfQ#Value", "Or sign up with"))],
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "flex-1",
visible: true,
_idProps: {
service: idService,
uuid: "42"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_Utilities_Separator_mvc_view, {
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
uuid: "43",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-bottom: 24px; margin-top: 24px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(tradershub_Signup_SocialLogin_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
showPasskey: false
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
uuid: "45",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "46"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("flfhQzisOk+ZymHc1m3y_w#Value", "Already have an account? ")), React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("https://oauth.deriv.com/oauth2/authorize?app_id=16929&l=en&brand=deriv&platform=", {}),
visible: true,
_idProps: {
service: idService,
name: "LoginLink"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #101213; font-weight: bold; text-decoration: underline;"
},
text: [$text(getTranslation("d34maTX7wE28Z5PYuw9DRA#Value", "Log in"))],
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider
})))))];
})
},
_dependencies: [asPrimitiveValue(model.variables.isSubmittingVar), asPrimitiveValue(tradershubClientVariables.getSignupEmail())]
}));
        }
    }

    return View;
});
define("tradershub.Signup.EUSignup.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.Signup.EUSignup.mvc$translationsResources", "tradershub.Signup.controller", "tradershub.Signup.EUSignup.mvc$controller.Validate.ValidateEmailJS", "tradershub.Signup.EUSignup.mvc$controller.SendVerifyEmail.RudderStackJS", "tradershub.Signup.EUSignup.mvc$controller.SendVerifyEmail.VerifyEmailPayloadJS", "tradershub.Signup.EUSignup.mvc$controller.SendVerifyEmail.RudderStackErrorJS", "tradershub.Signup.EUSignup.mvc$controller.SubmitOnClick.RudderStackJS", "tradershub.Signup.EUSignup.mvc$controller.OnReady.RudderStackJS", "tradershub.Signup.EUSignup.mvc$controller.OnReady.CheckAuthURLParamJS", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.controller$DerivApiSendMessage", "tradershub.controller$RedirectToExternalURL"], function (OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, tradershubLanguageResources, tradershubClientVariables, tradershub_Signup_EUSignup_mvc_TranslationsResources, tradershub_SignupController, tradershub_Signup_EUSignup_mvc_controller_Validate_ValidateEmailJS, tradershub_Signup_EUSignup_mvc_controller_SendVerifyEmail_RudderStackJS, tradershub_Signup_EUSignup_mvc_controller_SendVerifyEmail_VerifyEmailPayloadJS, tradershub_Signup_EUSignup_mvc_controller_SendVerifyEmail_RudderStackErrorJS, tradershub_Signup_EUSignup_mvc_controller_SubmitOnClick_RudderStackJS, tradershub_Signup_EUSignup_mvc_controller_OnReady_RudderStackJS, tradershub_Signup_EUSignup_mvc_controller_OnReady_CheckAuthURLParamJS) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, tradershub_Signup_EUSignup_mvc_TranslationsResources);
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
get _onInitialize$Action() {if(!(this.hasOwnProperty("__onInitialize$Action"))) {
this.__onInitialize$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnInitialize", function (span) {
if(span) {
span.setAttribute("code.function", "OnInitialize");
span.setAttribute("outsystems.function.key", "19dae12c-a515-439b-8e28-5ea8ec4b1f33");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
// IsSubmitting = False
model.variables.isSubmittingVar = false;
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

get _validate$Action() {if(!(this.hasOwnProperty("__validate$Action"))) {
this.__validate$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("Validate", function (span) {
if(span) {
span.setAttribute("code.function", "Validate");
span.setAttribute("outsystems.function.key", "1fb5dd34-767b-4397-b460-9f33a93c8998");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("Validate");
callContext = controller.callContext(callContext);
var validateEmailJSResult = new OS.DataTypes.VariableHolder();
validateEmailJSResult.value = OS.Logger.startActiveSpan("ValidateEmail", function (span) {
if(span) {
span.setAttribute("code.function", "ValidateEmail");
span.setAttribute("outsystems.function.key", "ace2bd61-e214-43c3-9cee-e1756f182fb1");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_Signup_EUSignup_mvc_controller_Validate_ValidateEmailJS, "ValidateEmail", "Validate", {
Email: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getSignupEmail(), OS.DataTypes.DataTypes.Email),
IsEmailValid: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ValidationError: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.Signup.EUSignup.Validate$validateEmailJSResult"))();
jsNodeResult.isEmailValidOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsEmailValid, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.validationErrorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ValidationError, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// Input_Email.Valid = ValidateEmail.IsEmailValid
model.widgets.get(idService.getId("Input_Email")).validAttr = validateEmailJSResult.value.isEmailValidOut;
// Input_Email.ValidationMessage = ValidateEmail.ValidationError
model.widgets.get(idService.getId("Input_Email")).validationMessageAttr = validateEmailJSResult.value.validationErrorOut;
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

get _sendVerifyEmail$Action() {if(!(this.hasOwnProperty("__sendVerifyEmail$Action"))) {
this.__sendVerifyEmail$Action = function (userEmailIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("SendVerifyEmail", function (span) {
if(span) {
span.setAttribute("code.function", "SendVerifyEmail");
span.setAttribute("outsystems.function.key", "68a24437-507c-4979-89b7-f40ce225c6db");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("SendVerifyEmail");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("tradershub.Signup.EUSignup.SendVerifyEmail$vars"))());
vars.value.userEmailInLocal = userEmailIn;
var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
var verifyEmailPayloadJSResult = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
verifyEmailPayloadJSResult.value = OS.Logger.startActiveSpan("VerifyEmailPayload", function (span) {
if(span) {
span.setAttribute("code.function", "VerifyEmailPayload");
span.setAttribute("outsystems.function.key", "585e5e70-8fd1-4084-b7ac-c95284bf91df");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_Signup_EUSignup_mvc_controller_SendVerifyEmail_VerifyEmailPayloadJS, "VerifyEmailPayload", "SendVerifyEmail", {
UserEmail: OS.DataConversion.JSNodeParamConverter.to(vars.value.userEmailInLocal, OS.DataTypes.DataTypes.Email),
Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.Signup.EUSignup.SendVerifyEmail$verifyEmailPayloadJSResult"))();
jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// Execute Action: DerivApiSendMessage
model.flush();
return tradershubController.default.derivApiSendMessage$Action(verifyEmailPayloadJSResult.value.payloadOut, "", false, callContext).then(function (value) {
derivApiSendMessageVar.value = value;
}).then(function () {
if((derivApiSendMessageVar.value.isErrorOut)) {
// IsSubmitting = False
model.variables.isSubmittingVar = false;
OS.Logger.startActiveSpan("RudderStackError", function (span) {
if(span) {
span.setAttribute("code.function", "RudderStackError");
span.setAttribute("outsystems.function.key", "807818b6-6572-439f-898f-1c866e6c696d");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_Signup_EUSignup_mvc_controller_SendVerifyEmail_RudderStackErrorJS, "RudderStackError", "SendVerifyEmail", null, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
OS.FeedbackMessageService.showFeedbackMessage((((derivApiSendMessageVar.value.errorCodeOut === "RateLimit")) ? (OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("irrPcCB+h0m7iZuyy8DxPw#Message.1785918141.1", "Maximum resend attempts reached. Try again in a few minutes.")) : ("Something went wrong. Please try reloading the page!")), /*Error*/ 3);
} else {
OS.Logger.startActiveSpan("RudderStack", function (span) {
if(span) {
span.setAttribute("code.function", "RudderStack");
span.setAttribute("outsystems.function.key", "25f89adf-3fd7-4452-b61b-1729dedea4bb");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_Signup_EUSignup_mvc_controller_SendVerifyEmail_RudderStackJS, "RudderStack", "SendVerifyEmail", null, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// Destination: /tradershub/EmailSentScreen
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "signup/email-verification", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
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

return this.__sendVerifyEmail$Action;
}set _sendVerifyEmail$Action(value) {this.__sendVerifyEmail$Action = value;
}

get _submitOnClick$Action() {if(!(this.hasOwnProperty("__submitOnClick$Action"))) {
this.__submitOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("SubmitOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "SubmitOnClick");
span.setAttribute("outsystems.function.key", "88292a94-49bb-4ff8-9dc6-f039899f2d1b");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("SubmitOnClick");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Validate
controller._validate$Action(callContext);
return OS.Flow.executeSequence(function () {
if((model.widgets.get(idService.getId("Form")).validAttr)) {
// IsSubmitting = True
model.variables.isSubmittingVar = true;
// Execute Action: SendVerifyEmail
return controller._sendVerifyEmail$Action(tradershubClientVariables.getSignupEmail(), callContext);
} else {
OS.Logger.startActiveSpan("RudderStack", function (span) {
if(span) {
span.setAttribute("code.function", "RudderStack");
span.setAttribute("outsystems.function.key", "68ce2e3a-6d81-47db-b2c7-bda7b3458460");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_Signup_EUSignup_mvc_controller_SubmitOnClick_RudderStackJS, "RudderStack", "SubmitOnClick", null, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// IsSubmitting = False
model.variables.isSubmittingVar = false;
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

return this.__submitOnClick$Action;
}set _submitOnClick$Action(value) {this.__submitOnClick$Action = value;
}

get _onReady$Action() {if(!(this.hasOwnProperty("__onReady$Action"))) {
this.__onReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnReady", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "c05eb112-ca29-47cf-9984-d6fe8f12c02c");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var checkAuthURLParamJSResult = new OS.DataTypes.VariableHolder();
checkAuthURLParamJSResult.value = OS.Logger.startActiveSpan("CheckAuthURLParam", function (span) {
if(span) {
span.setAttribute("code.function", "CheckAuthURLParam");
span.setAttribute("outsystems.function.key", "40f5af77-7810-4a12-9cf1-0915ced8216d");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_Signup_EUSignup_mvc_controller_OnReady_CheckAuthURLParamJS, "CheckAuthURLParam", "OnReady", {
LoginID: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
AuthToken: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
LoginIDTokenPairs: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.Signup.EUSignup.OnReady$checkAuthURLParamJSResult"))();
jsNodeResult.loginIDOut = OS.DataConversion.JSNodeParamConverter.from($parameters.LoginID, OS.DataTypes.DataTypes.Text);
jsNodeResult.authTokenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.AuthToken, OS.DataTypes.DataTypes.Text);
jsNodeResult.loginIDTokenPairsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.LoginIDTokenPairs, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
if((((checkAuthURLParamJSResult.value.authTokenOut) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
// ActiveLoginId = CheckAuthURLParam.LoginID
tradershubClientVariables.setActiveLoginId(checkAuthURLParamJSResult.value.loginIDOut);
// AuthToken = CheckAuthURLParam.AuthToken
tradershubClientVariables.setAuthToken(checkAuthURLParamJSResult.value.authTokenOut);
// Destination: /tradershub/Options
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "options", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
// SignupEmail = ""
tradershubClientVariables.setSignupEmail("");
OS.Logger.startActiveSpan("RudderStack", function (span) {
if(span) {
span.setAttribute("code.function", "RudderStack");
span.setAttribute("outsystems.function.key", "3b959c08-c736-4073-86b4-deb517d8a5d7");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_Signup_EUSignup_mvc_controller_OnReady_RudderStackJS, "RudderStack", "OnReady", null, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
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

get _linkOnClick$Action() {if(!(this.hasOwnProperty("__linkOnClick$Action"))) {
this.__linkOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("LinkOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "LinkOnClick");
span.setAttribute("outsystems.function.key", "d738fccc-83a9-403e-84e8-eb9f4a86c683");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("LinkOnClick");
callContext = controller.callContext(callContext);
// Execute Action: RedirectToExternalURL
tradershubController.default.redirectToExternalURL$Action("https://docs.deriv.com/tnc/eu/security-and-privacy.pdf", true, callContext);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__linkOnClick$Action;
}set _linkOnClick$Action(value) {this.__linkOnClick$Action = value;
}


onInitialize$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnInitialize__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnInitialize");
span.setAttribute("outsystems.function.key", "19dae12c-a515-439b-8e28-5ea8ec4b1f33");
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

validate$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("Validate__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "Validate");
span.setAttribute("outsystems.function.key", "1fb5dd34-767b-4397-b460-9f33a93c8998");
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

sendVerifyEmail$Action(userEmailIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("SendVerifyEmail__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "SendVerifyEmail");
span.setAttribute("outsystems.function.key", "68a24437-507c-4979-89b7-f40ce225c6db");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._sendVerifyEmail$Action, callContext, userEmailIn);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

submitOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("SubmitOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "SubmitOnClick");
span.setAttribute("outsystems.function.key", "88292a94-49bb-4ff8-9dc6-f039899f2d1b");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._submitOnClick$Action, callContext);
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
span.setAttribute("outsystems.function.key", "c05eb112-ca29-47cf-9984-d6fe8f12c02c");
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

linkOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("LinkOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "LinkOnClick");
span.setAttribute("outsystems.function.key", "d738fccc-83a9-403e-84e8-eb9f4a86c683");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._linkOnClick$Action, callContext);
} finally {
if(span) {
span.end();
}

}

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
Controller.registerVariableGroupType("tradershub.Signup.EUSignup.Validate$validateEmailJSResult", [{
name: "IsEmailValid",
attrName: "isEmailValidOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ValidationError",
attrName: "validationErrorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.Signup.EUSignup.SendVerifyEmail$vars", [{
name: "UserEmail",
attrName: "userEmailInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Email,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.Signup.EUSignup.SendVerifyEmail$verifyEmailPayloadJSResult", [{
name: "Payload",
attrName: "payloadOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.Signup.EUSignup.OnReady$checkAuthURLParamJSResult", [{
name: "LoginID",
attrName: "loginIDOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "AuthToken",
attrName: "authTokenOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "LoginIDTokenPairs",
attrName: "loginIDTokenPairsOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

}
return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.Signup.EUSignup.mvc$controller.Validate.ValidateEmailJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/;
const errors = {
    Email: ""
};
const validFields = {
    Email: true
};
if (!$parameters.Email) {
    errors.Email = "Email is required.";
    validFields.Email = false;
} else if (!emailRegex.test($parameters.Email)) {
    errors.Email = "That doesn't look like an email address.";
    validFields.Email = false;
}

$parameters.IsEmailValid = validFields.Email;
$parameters.ValidationError = errors.Email;
};
});

define("tradershub.Signup.EUSignup.mvc$controller.SendVerifyEmail.RudderStackJS", [], function () {
return function ($actions, $roles, $public) {
cacheTrackEvents.track({
    name: "ce_virtual_signup_form",
    properties: {
        action: "started",
        signup_provider: "email",
        form_name: "virtual_signup_form_outsystems"
    }
});
cacheTrackEvents.track({
    name: "ce_virtual_signup_form",
    properties: {
        action: "email_confirmation_sent",
        form_name: "virtual_signup_form_outsystems"
    }
});
};
});

define("tradershub.Signup.EUSignup.mvc$controller.SendVerifyEmail.VerifyEmailPayloadJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const cookies = window.getCookiesFields()
const cookies_objects = window.getCookiesObject(cookies)
const cookies_value = window.getDataObjFromCookies(cookies_objects, cookies)
const affiliate_token = window.getCookieValue('affiliate_tracking')

$parameters.Payload = JSON.stringify({
    verify_email: $parameters.UserEmail,
    type: 'account_opening',
    url_parameters: {
        ...cookies_value,
         affiliate_token,
    }
})

};
});

define("tradershub.Signup.EUSignup.mvc$controller.SendVerifyEmail.RudderStackErrorJS", [], function () {
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

define("tradershub.Signup.EUSignup.mvc$controller.SubmitOnClick.RudderStackJS", [], function () {
return function ($actions, $roles, $public) {
cacheTrackEvents.track({
    name: "ce_virtual_signup_form",
    properties: {
        action: "continue_attempt",
        signup_provider: "email",
        form_name: "virtual_signup_form_outsystems"
    }
}); 
};
});

define("tradershub.Signup.EUSignup.mvc$controller.OnReady.RudderStackJS", [], function () {
return function ($actions, $roles, $public) {
window.cacheTrackEvents.track({
    name: "ce_virtual_signup_form",
    properties: {
        action: "open",
        form_name: "virtual_signup_form_outsystems"
    }
}, true);
};
});

define("tradershub.Signup.EUSignup.mvc$controller.OnReady.CheckAuthURLParamJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const params = new URLSearchParams(window.location.search)

if (params.has("token1") && params.has("acct1")) {
    const result = {};

    const accounts = {};
    const tokens = {};
    for (let param of params) {
        if (param[0].startsWith('acct')) {
            accounts[param[0]] = param[1];
        } else if (param[0].startsWith('token')) {
            tokens[param[0]] = param[1];
        }
    }
    // Match accounts with tokens
    Object.keys(accounts).forEach(key => {
        const tokenKey = 'token' + key.slice(4);
        result[accounts[key]] = { token: tokens[tokenKey] };
    });


    localStorage.setItem("accountsList", JSON.stringify(result))
    localStorage.setItem("client.accounts", JSON.stringify(result))
    $parameters.LoginIDTokenPairs = JSON.stringify(result)
    $parameters.LoginID = params.get("acct1");
    $parameters.AuthToken = params.get("token1")
}
};
});


define("tradershub.Signup.EUSignup.mvc$translationsResources.fr-FR", [], function () {
return {
"d34maTX7wE28Z5PYuw9DRA#Value": "Connexion",
"flfhQzisOk+ZymHc1m3y_w#Value": "Vous avez déjà un compte? ",
"O56+jipAfE+aU6be+VlLfQ#Value": "Ou inscrivez-vous avec",
"3naFX9uKU0aE8_79mMTKag#Value": "Créer des comptes",
"Wlh71Z9bc0KUSa4kmDKh_g#Value": ".",
"fETa_D8xhkG3TyJDcHNr+w#Value": "Termes et conditions",
"2fJvOwaWWUmrhLCTXpGdjQ#Value": "Vous pouvez vous désinscrire à tout moment dans les paramètres de votre compte. En vous inscrivant, vous acceptez nos",
"rXtNkvhkaEaHS7yFhnwtFg#Value": "En créant un compte, vous confirmez que vous avez plus de 18 ans et comprenez que nous pouvons vous envoyer des mises à jour et des supports marketing (voir",
"yF8cEKbcxUaOlH9ylne2QQ#ValueExpression.-374653993.1": "Entrez votre email",
"WRRMOhzgcUGfKMbStruX_A#Value": "Email",
"ELYPhzuj3k+9yt5SFTagNw#Value": "Rejoignez plus de 2,5 millions de traders",
"eJ_8ZW44tECsuVJyhA8MBA#Value": "Obtenez votre compte de démonstration gratuit aujourd\'hui.",
"JDNCstSMOEmuqZa708daBw#Value": "Tradez n\'importe où, à tout moment.",
"GFsgudxbk0q6DwAHVnmXHQ#Value": "Marchés financiers et dérivés",
"r7rG1gEr7kSsy7JKpLm4Fw#Value": "Des centaines d\'instruments",
"jArPalEju0eZL+HgJ5ymVA#Value": "Types de trade uniques",
"F64XxsEC80ypnRKs+2DXOQ#Value": "Fiable depuis 25 ans",
"irrPcCB+h0m7iZuyy8DxPw#Message.1785918141.1": "Nombre maximum de tentatives de renvoi atteint. Réessayez dans quelques minutes.",
"FkAFqM0xE065+QFlMmJYcg#Title": "Inscription facile et gratuite | Trading en ligne | Hub.Deriv.com",
"FkAFqM0xE065+QFlMmJYcg#TitleExpression.2133226043.1": "Inscription facile et gratuite | Trading en ligne | Hub.Deriv.com"
};
});

define("tradershub.Signup.EUSignup.mvc$translationsResources", ["exports", "tradershub.Signup.EUSignup.mvc$translationsResources.fr-FR"], function (exports, tradershub_Signup_EUSignup_mvc_translationsResources_frFR) {
return {
"fr-FR": {
"translations": tradershub_Signup_EUSignup_mvc_translationsResources_frFR,
"isRTL": false
}
};
});

