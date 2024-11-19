define("PartnersHub.Home.NonPartnerAccount.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.Layouts.LayoutSignup.mvc$model", "CustomComponentsOfficial.ButtonVariants.PrimaryButton.mvc$model", "CustomComponentsOfficial.ButtonVariants.SecondaryButton.mvc$model", "PartnersHub.controller$RedirectToOauth", "PartnersHub.controller$UseDevice"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHub_Layouts_LayoutSignup_mvcModel, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvcModel, CustomComponentsOfficial_ButtonVariants_SecondaryButton_mvcModel) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
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
OS.Model.VariablelessViewModel {
static getVariablesRecordConstructor() {
return VariablesRecord;
}

static getWidgetsRecordConstructor() {
return WidgetsRecord;
}

static get hasValidationWidgets() {if((Model._hasValidationWidgetsValue === undefined)) {
Model._hasValidationWidgetsValue = ((PartnersHub_Layouts_LayoutSignup_mvcModel.hasValidationWidgets || CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvcModel.hasValidationWidgets) || CustomComponentsOfficial_ButtonVariants_SecondaryButton_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Home.NonPartnerAccount.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Home.NonPartnerAccount.mvc$model", "PartnersHub.Home.NonPartnerAccount.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Layouts.LayoutSignup.mvc$view", "@outsystems/runtime-widgets-js", "CustomComponentsOfficial.ButtonVariants.PrimaryButton.mvc$view", "CustomComponentsOfficial.ButtonVariants.SecondaryButton.mvc$view", "PartnersHub.controller$RedirectToOauth", "PartnersHub.controller$UseDevice"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_Home_NonPartnerAccount_mvc_model, PartnersHub_Home_NonPartnerAccount_mvc_controller, PartnersHubClientVariables, PartnersHub_Layouts_LayoutSignup_mvc_view, OSWidgets, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view, CustomComponentsOfficial_ButtonVariants_SecondaryButton_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() { return "Home.NonPartnerAccount"; }

        static getAttributes() { return {
codeFunction: "NonPartnerAccount",
functionKey: "d681fd12-042f-4a14-80ba-42fd0360c053",
functionOwnerName: "PartnersHub",
functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.Home.NonPartnerAccount.css", "css/PartnersHub.PHubTest.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [PartnersHub_Layouts_LayoutSignup_mvc_view, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view, CustomComponentsOfficial_ButtonVariants_SecondaryButton_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Home_NonPartnerAccount_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Home_NonPartnerAccount_mvc_controller;
        }

        get title() {
            

            return OSView.BaseView.BaseWebScreen.getTranslation("Ev2B1i8EFEqAukL9A2DAUw#Title", "NonPartnerAccount");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(PartnersHub_Layouts_LayoutSignup_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
NoRedirect: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event$Action: function () {
var eventHandlerContext = callContext.clone();
controller.closePage$Action(controller.callContext(eventHandlerContext));

;
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
style: "background-color: #ffffff;"
},
style: "login-screen",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "align-items: center; border-radius: 8px; display: flex; flex-direction: column; gap: 24px; justify-content: center; max-width: 368px; padding: 0 16px; text-align: center;"
},
gridProperties: {
classes: "OSInline"
},
style: "signup",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
gridProperties: {
width: "73px"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.warning.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 16px;"
},
text: [$text(getTranslation("GSXpn47RvUqEYNp1DnG_0Q#Value", "We couldn’t find a partner account with this email address."))],
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Width: "100%",
borderRadius: "100px",
title: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("tVgE7jGJE0Oq21D8rvGSew#Value.-1386031319.1", "Create account")
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClick$Action: function () {
var eventHandlerContext = callContext.clone();
controller.createAccount$Action(controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "5",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(CustomComponentsOfficial_ButtonVariants_SecondaryButton_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Width: "100%",
borderRadius: "100px",
title: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("Yazb6YJMUkSyFpO67JmetQ#Value.1229945724.1", "Go to Trader\'s Hub"),
BorderColor: "#FF444F",
TextColor: "#FF444F"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClick$Action: function () {
var eventHandlerContext = callContext.clone();
controller.goToTradersHub$Action(controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "6",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})))];
})
},
_dependencies: []
}));
        }
    }

    return View;
});
define("PartnersHub.Home.NonPartnerAccount.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Home.NonPartnerAccount.mvc$translationsResources", "PartnersHub.Home.controller", "PartnersHub.controller$RedirectToOauth", "PartnersHub.controller$UseDevice"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Home_NonPartnerAccount_mvc_TranslationsResources, PartnersHub_HomeController) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, PartnersHub_Home_NonPartnerAccount_mvc_TranslationsResources);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = true;
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
get _goToTradersHub$Action() {if(!(this.hasOwnProperty("__goToTradersHub$Action"))) {
this.__goToTradersHub$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("GoToTradersHub", function (span) {
if(span) {
span.setAttribute("code.function", "GoToTradersHub");
span.setAttribute("outsystems.function.key", "22990f98-8462-4f55-a491-f5f10c5ae6d1");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("GoToTradersHub");
callContext = controller.callContext(callContext);
// Destination: /PartnersHub/
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://app.deriv.com/", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__goToTradersHub$Action;
}set _goToTradersHub$Action(value) {this.__goToTradersHub$Action = value;
}

get _createAccount$Action() {if(!(this.hasOwnProperty("__createAccount$Action"))) {
this.__createAccount$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("CreateAccount", function (span) {
if(span) {
span.setAttribute("code.function", "CreateAccount");
span.setAttribute("outsystems.function.key", "5c59a1ee-e70c-449c-a948-43e8af6a158e");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("CreateAccount");
callContext = controller.callContext(callContext);
// Destination: /PartnersHub/
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://signup.deriv.com/signup-affiliates", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__createAccount$Action;
}set _createAccount$Action(value) {this.__createAccount$Action = value;
}

get _closePage$Action() {if(!(this.hasOwnProperty("__closePage$Action"))) {
this.__closePage$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("ClosePage", function (span) {
if(span) {
span.setAttribute("code.function", "ClosePage");
span.setAttribute("outsystems.function.key", "c12d3763-ef21-4004-8324-e13705845611");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("ClosePage");
callContext = controller.callContext(callContext);
// Execute Action: RedirectToOauth
PartnersHubController.default.redirectToOauth$Action(callContext);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__closePage$Action;
}set _closePage$Action(value) {this.__closePage$Action = value;
}

get _onReady$Action() {if(!(this.hasOwnProperty("__onReady$Action"))) {
this.__onReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnReady", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "c73544bc-f636-4b08-a366-4423a79fd892");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
// Execute Action: UseDevice
PartnersHubController.default.useDevice$Action(callContext);
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


goToTradersHub$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("GoToTradersHub__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "GoToTradersHub");
span.setAttribute("outsystems.function.key", "22990f98-8462-4f55-a491-f5f10c5ae6d1");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._goToTradersHub$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

createAccount$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("CreateAccount__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "CreateAccount");
span.setAttribute("outsystems.function.key", "5c59a1ee-e70c-449c-a948-43e8af6a158e");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._createAccount$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

closePage$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("ClosePage__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "ClosePage");
span.setAttribute("outsystems.function.key", "c12d3763-ef21-4004-8324-e13705845611");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._closePage$Action, callContext);
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
span.setAttribute("outsystems.function.key", "c73544bc-f636-4b08-a366-4423a79fd892");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
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
return PartnersHub_HomeController.default.handleError(ex, this.callContext());
};
}

return this._handleError;
}set handleError(value) {this._handleError = value;
}

static checkPermissions() {
}

getDefaultTimeout() {
return PartnersHubController.default.defaultTimeout;
}

}

var Controller = ControllerInner;
// Server Actions - Variables

// Client Actions - Variables

}
return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});


define("PartnersHub.Home.NonPartnerAccount.mvc$translationsResources.ar-001", [], function () {
return {
"Yazb6YJMUkSyFpO67JmetQ#Value.1229945724.1": "اذهب إلى Trader\'s Hub",
"tVgE7jGJE0Oq21D8rvGSew#Value.-1386031319.1": "إنشاء حساب",
"GSXpn47RvUqEYNp1DnG_0Q#Value": "لم نتمكن من العثور على حساب شريك مرتبط مع هذا البريد الإلكتروني."
};
});

define("PartnersHub.Home.NonPartnerAccount.mvc$translationsResources.de-DE", [], function () {
return {
"Yazb6YJMUkSyFpO67JmetQ#Value.1229945724.1": "Gehe zum Trader\'s Hub",
"tVgE7jGJE0Oq21D8rvGSew#Value.-1386031319.1": "Konto erstellen",
"GSXpn47RvUqEYNp1DnG_0Q#Value": "Wir konnten kein Partnerkonto mit dieser E-Mail-Adresse finden."
};
});

define("PartnersHub.Home.NonPartnerAccount.mvc$translationsResources.es-ES", [], function () {
return {
"Yazb6YJMUkSyFpO67JmetQ#Value.1229945724.1": "ir al Trader\'s Hub",
"tVgE7jGJE0Oq21D8rvGSew#Value.-1386031319.1": "crear cuenta",
"GSXpn47RvUqEYNp1DnG_0Q#Value": "No pudimos encontrar una cuenta de socio con esta dirección de correo electrónico."
};
});

define("PartnersHub.Home.NonPartnerAccount.mvc$translationsResources.fr-FR", [], function () {
return {
"Yazb6YJMUkSyFpO67JmetQ#Value.1229945724.1": "aller au Trader\'s Hub",
"tVgE7jGJE0Oq21D8rvGSew#Value.-1386031319.1": "créer un compte",
"GSXpn47RvUqEYNp1DnG_0Q#Value": "Nous n\'avons pas pu trouver de compte partenaire correspondant à cette adresse e-mail."
};
});

define("PartnersHub.Home.NonPartnerAccount.mvc$translationsResources.it-IT", [], function () {
return {
"Yazb6YJMUkSyFpO67JmetQ#Value.1229945724.1": "vai al Trader\'s Hub",
"tVgE7jGJE0Oq21D8rvGSew#Value.-1386031319.1": "crea account",
"GSXpn47RvUqEYNp1DnG_0Q#Value": "Non siamo riusciti a trovare un account partner con questo indirizzo email."
};
});

define("PartnersHub.Home.NonPartnerAccount.mvc$translationsResources.pl-PL", [], function () {
return {
"Yazb6YJMUkSyFpO67JmetQ#Value.1229945724.1": "przejdź do Trader\'s Hub",
"tVgE7jGJE0Oq21D8rvGSew#Value.-1386031319.1": "utwórz konto",
"GSXpn47RvUqEYNp1DnG_0Q#Value": "Nie mogliśmy znaleźć konta partnerskiego powiązanego z tym adresem e-mail."
};
});

define("PartnersHub.Home.NonPartnerAccount.mvc$translationsResources.pt-PT", [], function () {
return {
"Yazb6YJMUkSyFpO67JmetQ#Value.1229945724.1": "Aceder ao Trader\'s Hub",
"tVgE7jGJE0Oq21D8rvGSew#Value.-1386031319.1": "Criar conta",
"GSXpn47RvUqEYNp1DnG_0Q#Value": "Não conseguimos localizar uma conta de parceiro associada a este endereço de e-mail."
};
});

define("PartnersHub.Home.NonPartnerAccount.mvc$translationsResources.ru-RU", [], function () {
return {
"Yazb6YJMUkSyFpO67JmetQ#Value.1229945724.1": "перейти в Trader\'s Hub",
"tVgE7jGJE0Oq21D8rvGSew#Value.-1386031319.1": "открыть счет",
"GSXpn47RvUqEYNp1DnG_0Q#Value": "Мы не смогли найти партнерский аккаунт с этим адресом электронной почты."
};
});

define("PartnersHub.Home.NonPartnerAccount.mvc$translationsResources", ["exports", "PartnersHub.Home.NonPartnerAccount.mvc$translationsResources.ar-001", "PartnersHub.Home.NonPartnerAccount.mvc$translationsResources.de-DE", "PartnersHub.Home.NonPartnerAccount.mvc$translationsResources.es-ES", "PartnersHub.Home.NonPartnerAccount.mvc$translationsResources.fr-FR", "PartnersHub.Home.NonPartnerAccount.mvc$translationsResources.it-IT", "PartnersHub.Home.NonPartnerAccount.mvc$translationsResources.pl-PL", "PartnersHub.Home.NonPartnerAccount.mvc$translationsResources.pt-PT", "PartnersHub.Home.NonPartnerAccount.mvc$translationsResources.ru-RU"], function (exports, PartnersHub_Home_NonPartnerAccount_mvc_translationsResources_ar001, PartnersHub_Home_NonPartnerAccount_mvc_translationsResources_deDE, PartnersHub_Home_NonPartnerAccount_mvc_translationsResources_esES, PartnersHub_Home_NonPartnerAccount_mvc_translationsResources_frFR, PartnersHub_Home_NonPartnerAccount_mvc_translationsResources_itIT, PartnersHub_Home_NonPartnerAccount_mvc_translationsResources_plPL, PartnersHub_Home_NonPartnerAccount_mvc_translationsResources_ptPT, PartnersHub_Home_NonPartnerAccount_mvc_translationsResources_ruRU) {
return {
"ar-001": {
"translations": PartnersHub_Home_NonPartnerAccount_mvc_translationsResources_ar001,
"isRTL": true
},
"de-DE": {
"translations": PartnersHub_Home_NonPartnerAccount_mvc_translationsResources_deDE,
"isRTL": false
},
"es-ES": {
"translations": PartnersHub_Home_NonPartnerAccount_mvc_translationsResources_esES,
"isRTL": false
},
"fr-FR": {
"translations": PartnersHub_Home_NonPartnerAccount_mvc_translationsResources_frFR,
"isRTL": false
},
"it-IT": {
"translations": PartnersHub_Home_NonPartnerAccount_mvc_translationsResources_itIT,
"isRTL": false
},
"pl-PL": {
"translations": PartnersHub_Home_NonPartnerAccount_mvc_translationsResources_plPL,
"isRTL": false
},
"pt-PT": {
"translations": PartnersHub_Home_NonPartnerAccount_mvc_translationsResources_ptPT,
"isRTL": false
},
"ru-RU": {
"translations": PartnersHub_Home_NonPartnerAccount_mvc_translationsResources_ruRU,
"isRTL": false
}
};
});

