define("PartnersHub.RealAccountCreation.PlaceOfBirthCountrySelector.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "CustomComponentsOfficial.FullScreenMobileModal.FullScreenMobileModal.mvc$model", "PartnersHub.RealAccountCreation.ResidenceSelector.mvc$model", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_c864353821feed79663806f3e445d40eStructure", "RESTAPIWebsocketOfficial.controller$ResidenceList", "RESTAPIWebsocketOfficial.controller$GetWebsiteStatus", "PartnersHub.model$ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure"], function (OSRuntimeCore, PartnersHubModel, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, CustomComponentsOfficial_FullScreenMobileModal_FullScreenMobileModal_mvcModel, PartnersHub_RealAccountCreation_ResidenceSelector_mvcModel) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("ResidenceListResponse", "residenceListResponseVar", "ResidenceListResponse", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_63a473e932ef99f5271718b62399e682Structure());
}, false, RESTAPIWebsocketOfficialModel.ST_63a473e932ef99f5271718b62399e682Structure), 
this.attr("WebsiteStatusResponse", "websiteStatusResponseVar", "WebsiteStatusResponse", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_c864353821feed79663806f3e445d40eStructure());
}, false, RESTAPIWebsocketOfficialModel.ST_c864353821feed79663806f3e445d40eStructure)
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
Model._hasValidationWidgetsValue = (CustomComponentsOfficial_FullScreenMobileModal_FullScreenMobileModal_mvcModel.hasValidationWidgets || PartnersHub_RealAccountCreation_ResidenceSelector_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.RealAccountCreation.PlaceOfBirthCountrySelector.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreation.PlaceOfBirthCountrySelector.mvc$model", "PartnersHub.RealAccountCreation.PlaceOfBirthCountrySelector.mvc$controller", "PartnersHub.clientVariables", "CustomComponentsOfficial.FullScreenMobileModal.FullScreenMobileModal.mvc$view", "@outsystems/runtime-widgets-js", "PartnersHub.RealAccountCreation.ResidenceSelector.mvc$view", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_c864353821feed79663806f3e445d40eStructure", "RESTAPIWebsocketOfficial.controller$ResidenceList", "RESTAPIWebsocketOfficial.controller$GetWebsiteStatus", "PartnersHub.model$ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, React, OSView, PartnersHub_RealAccountCreation_PlaceOfBirthCountrySelector_mvc_model, PartnersHub_RealAccountCreation_PlaceOfBirthCountrySelector_mvc_controller, PartnersHubClientVariables, CustomComponentsOfficial_FullScreenMobileModal_FullScreenMobileModal_mvc_view, OSWidgets, PartnersHub_RealAccountCreation_ResidenceSelector_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() { return "RealAccountCreation.PlaceOfBirthCountrySelector"; }

        static getAttributes() { return {
codeFunction: "PlaceOfBirthCountrySelector",
functionKey: "4c9b464d-d57d-490f-a0c5-0a55eb8da090",
functionOwnerName: "PartnersHub",
functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.PHubTest.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [CustomComponentsOfficial_FullScreenMobileModal_FullScreenMobileModal_mvc_view, PartnersHub_RealAccountCreation_ResidenceSelector_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreation_PlaceOfBirthCountrySelector_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreation_PlaceOfBirthCountrySelector_mvc_controller;
        }

        get title() {
            

            return OSView.BaseView.BaseWebScreen.getTranslation("TUabTH3VD0mgxQpV642gkA#Title", "PlaceOfBirthCountrySelector");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(CustomComponentsOfficial_FullScreenMobileModal_FullScreenMobileModal_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Title: "Place of birth",
HasCloseIcon: false,
HasBackButton: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onBack$Action: function () {
var eventHandlerContext = callContext.clone();
controller.fullScreenMobileModalOnBack$Action(controller.callContext(eventHandlerContext));

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
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 10px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(PartnersHub_RealAccountCreation_ResidenceSelector_mvc_view, {
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
},
onClickCountry$Action: function (selectedCountryIn) {
var eventHandlerContext = callContext.clone();
controller.residenceSelectorOnClickCountry$Action(selectedCountryIn, controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "2",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
})
},
_dependencies: []
}));
        }
    }

    return View;
});
define("PartnersHub.RealAccountCreation.PlaceOfBirthCountrySelector.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreation.PlaceOfBirthCountrySelector.mvc$translationsResources", "PartnersHub.RealAccountCreation.controller", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_c864353821feed79663806f3e445d40eStructure", "RESTAPIWebsocketOfficial.controller$ResidenceList", "RESTAPIWebsocketOfficial.controller$GetWebsiteStatus", "PartnersHub.model$ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreation_PlaceOfBirthCountrySelector_mvc_TranslationsResources, PartnersHub_RealAccountCreationController) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, PartnersHub_RealAccountCreation_PlaceOfBirthCountrySelector_mvc_TranslationsResources);
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
get _onReady$Action() {if(!(this.hasOwnProperty("__onReady$Action"))) {
this.__onReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnReady", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "2f473701-20e4-411e-bb45-5f3732b29ddb");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var residenceListVar = new OS.DataTypes.VariableHolder();
var getWebsiteStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: ResidenceList
model.flush();
return RESTAPIWebsocketOfficialController.default.residenceList$Action(PartnersHubClientVariables.getServer(), "1", "en", callContext).then(function (value) {
residenceListVar.value = value;
}).then(function () {
// Execute Action: GetWebsiteStatus
model.flush();
return RESTAPIWebsocketOfficialController.default.getWebsiteStatus$Action(PartnersHubClientVariables.getServer(), "1", "en", callContext).then(function (value) {
getWebsiteStatusVar.value = value;
});
}).then(function () {
// ResidenceListResponse = ResidenceList.Response
model.variables.residenceListResponseVar = residenceListVar.value.responseOut;
// WebsiteStatusResponse = GetWebsiteStatus.Response
model.variables.websiteStatusResponseVar = getWebsiteStatusVar.value.responseOut;
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

return this.__onReady$Action;
}set _onReady$Action(value) {this.__onReady$Action = value;
}

get _fullScreenMobileModalOnBack$Action() {if(!(this.hasOwnProperty("__fullScreenMobileModalOnBack$Action"))) {
this.__fullScreenMobileModalOnBack$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("FullScreenMobileModalOnBack", function (span) {
if(span) {
span.setAttribute("code.function", "FullScreenMobileModalOnBack");
span.setAttribute("outsystems.function.key", "4255e566-ed21-4c10-9d58-e805b0b064db");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("FullScreenMobileModalOnBack");
callContext = controller.callContext(callContext);
// Destination: /PartnersHub/PlaceOfBirthScreen
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "PlaceOfBirthScreen", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__fullScreenMobileModalOnBack$Action;
}set _fullScreenMobileModalOnBack$Action(value) {this.__fullScreenMobileModalOnBack$Action = value;
}

get _residenceSelectorOnClickCountry$Action() {if(!(this.hasOwnProperty("__residenceSelectorOnClickCountry$Action"))) {
this.__residenceSelectorOnClickCountry$Action = function (selectedCountryIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("ResidenceSelectorOnClickCountry", function (span) {
if(span) {
span.setAttribute("code.function", "ResidenceSelectorOnClickCountry");
span.setAttribute("outsystems.function.key", "7e4e0bd9-70b2-4a8c-a1d5-7a94add9bb1b");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("ResidenceSelectorOnClickCountry");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.PlaceOfBirthCountrySelector.ResidenceSelectorOnClickCountry$vars"))());
vars.value.selectedCountryInLocal = selectedCountryIn.clone();
// RealSignupPlaceOfBirth = SelectedCountry.Text
PartnersHubClientVariables.setRealSignupPlaceOfBirth(vars.value.selectedCountryInLocal.textAttr);
// Destination: /PartnersHub/PlaceOfBirthScreen
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "PlaceOfBirthScreen", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__residenceSelectorOnClickCountry$Action;
}set _residenceSelectorOnClickCountry$Action(value) {this.__residenceSelectorOnClickCountry$Action = value;
}


onReady$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnReady__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "2f473701-20e4-411e-bb45-5f3732b29ddb");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

fullScreenMobileModalOnBack$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("FullScreenMobileModalOnBack__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "FullScreenMobileModalOnBack");
span.setAttribute("outsystems.function.key", "4255e566-ed21-4c10-9d58-e805b0b064db");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._fullScreenMobileModalOnBack$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

residenceSelectorOnClickCountry$Action(selectedCountryIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("ResidenceSelectorOnClickCountry__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "ResidenceSelectorOnClickCountry");
span.setAttribute("outsystems.function.key", "7e4e0bd9-70b2-4a8c-a1d5-7a94add9bb1b");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._residenceSelectorOnClickCountry$Action, callContext, selectedCountryIn);
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
return PartnersHub_RealAccountCreationController.default.handleError(ex, this.callContext());
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
Controller.registerVariableGroupType("PartnersHub.RealAccountCreation.PlaceOfBirthCountrySelector.ResidenceSelectorOnClickCountry$vars", [{
name: "SelectedCountry",
attrName: "selectedCountryInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new PartnersHubModel.ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure();
},
complexType: PartnersHubModel.ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure
}]);

}
return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});


define("PartnersHub.RealAccountCreation.PlaceOfBirthCountrySelector.mvc$translationsResources", ["exports"], function (exports) {
return {};
});

