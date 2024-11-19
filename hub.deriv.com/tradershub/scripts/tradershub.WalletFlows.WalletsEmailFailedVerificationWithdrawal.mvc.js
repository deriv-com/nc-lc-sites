define("tradershub.WalletFlows.WalletsEmailFailedVerificationWithdrawal.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.controller", "RESTAPIWebsocketOfficial.model", "tradershub.controller", "tradershub.Layouts.MainLayout.mvc$model", "tradershub.WalletBlocks.WalletsOverlayPage.mvc$model", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "RESTAPIWebsocketOfficial.model$ST_b5532fbd5672db40752d556a46e96eaeStructure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$VerifyEmail"], function (OSRuntimeCore, tradershubModel, OutSystemsUIController, RESTAPIWebsocketOfficialModel, tradershubController, tradershub_Layouts_MainLayout_mvcModel, tradershub_WalletBlocks_WalletsOverlayPage_mvcModel) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Email", "emailIn", "Email", true, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, false), 
this.attr("_emailInDataFetchStatus", "_emailInDataFetchStatus", "_emailInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (tradershub_Layouts_MainLayout_mvcModel.hasValidationWidgets || tradershub_WalletBlocks_WalletsOverlayPage_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
if("Email" in inputs) {
this.variables.emailIn = OS.DataConversion.ServerDataConverter.from(inputs.Email, OS.DataTypes.DataTypes.Email);
}

}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("tradershub.WalletFlows.WalletsEmailFailedVerificationWithdrawal.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "RESTAPIWebsocketOfficial.model", "react", "@outsystems/runtime-view-js", "tradershub.WalletFlows.WalletsEmailFailedVerificationWithdrawal.mvc$model", "tradershub.WalletFlows.WalletsEmailFailedVerificationWithdrawal.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.MainLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.WalletBlocks.WalletsOverlayPage.mvc$view", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "RESTAPIWebsocketOfficial.model$ST_b5532fbd5672db40752d556a46e96eaeStructure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$VerifyEmail"], function (OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, RESTAPIWebsocketOfficialModel, React, OSView, tradershub_WalletFlows_WalletsEmailFailedVerificationWithdrawal_mvc_model, tradershub_WalletFlows_WalletsEmailFailedVerificationWithdrawal_mvc_controller, tradershubClientVariables, tradershub_Layouts_MainLayout_mvc_view, OSWidgets, tradershub_WalletBlocks_WalletsOverlayPage_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() { return "WalletFlows.WalletsEmailFailedVerificationWithdrawal"; }

        static getAttributes() { return {
codeFunction: "WalletsEmailFailedVerificationWithdrawal",
functionKey: "5065f5a4-2ffe-47dc-8c10-fd4edcd4b447",
functionOwnerName: "tradershub",
functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_MainLayout_mvc_view, tradershub_WalletBlocks_WalletsOverlayPage_mvc_view];
        }

        get modelFactory() {
            return tradershub_WalletFlows_WalletsEmailFailedVerificationWithdrawal_mvc_model;
        }

        get controllerFactory() {
            return tradershub_WalletFlows_WalletsEmailFailedVerificationWithdrawal_mvc_controller;
        }

        get title() {
            

            return OSView.BaseView.BaseWebScreen.getTranslation("pPVlUP4v3EeMEP1O3NS0Rw#Title", "WalletsEmailFailedVerificationWithdrawal");
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
return [React.createElement(tradershub_WalletBlocks_WalletsOverlayPage_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
HideBackButton: true,
PageTitle: "Withdraw",
HideWalletHeader: false
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
walletOverlayPageContent: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column justify-content-center align-items-center full-width gap-m",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.Wallets_fail_email_verification.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column gap-s text-align-center",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: model.getCachedValue(idService.getId("ZMrYkBmxZ0qqFhgYBdciYA.Style"), function () {
return ("font-bold " + ((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut) ? ("heading5") : ("heading4")));
}),
text: [$text(getTranslation("ZMrYkBmxZ0qqFhgYBdciYA#Value", "Email verification failed"))],
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}), $text(getTranslation("qLcKKra05E6HKYefG2t6dA#Value", "The verification link you used is invalid or expired. Please request for a new one."))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: model.getCachedValue(idService.getId("FlWDzbeg00uk59SIhWYPyQ.Visible"), function () {
return OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut;
}),
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
gridProperties: {
marginLeft: "0"
},
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.resendEmailOnClick$Action(controller.callContext(eventHandlerContext));
});
;
},
style: model.getCachedValue(idService.getId("4Yezkg3ODke8mbAq_5iRPQ.Style"), function () {
return ("btn btn-primary " + ((OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut) ? ("") : ("full-width")));
}),
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 14px;"
},
text: [$text(getTranslation("D6m0mm4TN0GPFyjvuLFTqA#Value", "Resend email"))],
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}))))];
}),
mobileFooterContent: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "border-top: 1px solid var(--color-neutral-3);"
},
style: "padding-base",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
isDefault: false,
onClick: function () {
try {OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "wallets/withdrawal/disable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), null, true);
} catch (ex) {
if(((ex.name) !== ("RedirectOccurredException"))) {
throw ex;
}

}
;
},
style: "btn btn-primary full-width",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Resend email"))];
})
},
_dependencies: []
})];
})
},
_dependencies: []
}));
        }
    }

    return View;
});
define("tradershub.WalletFlows.WalletsEmailFailedVerificationWithdrawal.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "RESTAPIWebsocketOfficial.model", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.WalletFlows.WalletsEmailFailedVerificationWithdrawal.mvc$translationsResources", "tradershub.WalletFlows.controller", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "RESTAPIWebsocketOfficial.model$ST_b5532fbd5672db40752d556a46e96eaeStructure", "tradershub.referencesHealth$RESTAPIWebsocketOfficial", "tradershub.controller$VerifyEmail"], function (OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, RESTAPIWebsocketOfficialModel, tradershubLanguageResources, tradershubClientVariables, tradershub_WalletFlows_WalletsEmailFailedVerificationWithdrawal_mvc_TranslationsResources, tradershub_WalletFlowsController) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, tradershub_WalletFlows_WalletsEmailFailedVerificationWithdrawal_mvc_TranslationsResources);
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
span.setAttribute("outsystems.function.key", "57a67421-18fe-485d-be59-8ec4e96e5e2c");
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
return tradershubController.default.verifyEmail$Action("payment_withdraw", model.variables.emailIn, callContext).then(function (value) {
verifyEmailVar.value = value;
}).then(function () {
if((verifyEmailVar.value.isErrorOut)) {
OS.FeedbackMessageService.showFeedbackMessage("Please try again.", /*Error*/ 3);
} else {
OS.FeedbackMessageService.showFeedbackMessage("Email sent.", /*Success*/ 1);
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

return this.__resendEmailOnClick$Action;
}set _resendEmailOnClick$Action(value) {this.__resendEmailOnClick$Action = value;
}


resendEmailOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("ResendEmailOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "ResendEmailOnClick");
span.setAttribute("outsystems.function.key", "57a67421-18fe-485d-be59-8ec4e96e5e2c");
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

}
return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});


define("tradershub.WalletFlows.WalletsEmailFailedVerificationWithdrawal.mvc$translationsResources.fr-FR", [], function () {
return {
"D6m0mm4TN0GPFyjvuLFTqA#Value": "Renvoie l\'email",
"qLcKKra05E6HKYefG2t6dA#Value": "Le lien de vérification que vous avez utilisé est invalide ou a expiré. Veuillez en demander un nouveau.",
"ZMrYkBmxZ0qqFhgYBdciYA#Value": "Échec de la vérification de l\'e-mail"
};
});

define("tradershub.WalletFlows.WalletsEmailFailedVerificationWithdrawal.mvc$translationsResources", ["exports", "tradershub.WalletFlows.WalletsEmailFailedVerificationWithdrawal.mvc$translationsResources.fr-FR"], function (exports, tradershub_WalletFlows_WalletsEmailFailedVerificationWithdrawal_mvc_translationsResources_frFR) {
return {
"fr-FR": {
"translations": tradershub_WalletFlows_WalletsEmailFailedVerificationWithdrawal_mvc_translationsResources_frFR,
"isRTL": false
}
};
});

