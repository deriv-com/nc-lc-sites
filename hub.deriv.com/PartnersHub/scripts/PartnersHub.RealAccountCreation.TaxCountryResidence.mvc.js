define("PartnersHub.RealAccountCreation.TaxCountryResidence.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "PartnersHub.controller", "CustomComponentsOfficial.FullScreenMobileModal.FullScreenMobileModal.mvc$model", "PartnersHub.Common.ResidenceList.mvc$model", "RESTAPIWebsocketOfficial.model$ST_c864353821feed79663806f3e445d40eStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure", "PartnersHub.model$ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure", "PartnersHub.model$RL_ad0d7e810e49e61265e2d337c04416fc", "PartnersHub.model$ST_b4cd08f1a2e52c6c30b2b1fd8abf3029Structure", "PartnersHub.model$ST_dbace2176e52429900d8209086350204Structure", "PartnersHub.model$ST_0c954cdeca234316306bb67c6b24f05bStructure", "PartnersHub.model$ST_b539dd26c0de381503da71ca2655394fStructure", "PartnersHub.model$ST_eda668e7f210db3d136460db1684b63bStructure", "PartnersHub.model$ST_6d2f2a84ec0b7321167e27d19b6d33f8Structure", "PartnersHub.model$RL_72539fe43229e47c6f0bb03bc660d8fe", "PartnersHub.model$ST_8c2ccdb8651c27e0fadf6d9395795b9fStructure", "PartnersHub.model$ST_537325baeed781544ed9f203cd7f9384Structure", "PartnersHub.model$ST_4fc107f3f00705667fa092c970065f35Structure", "PartnersHub.model$ST_141ef15563438703b2e42d78c6c7aefeStructure", "PartnersHub.model$ST_c2546146ca44bb59a2a2de5acfe0b484Structure", "PartnersHub.model$ST_e422048bbd3aba1526832ee4606bb980Structure", "PartnersHub.model$ST_f85e728670d653d5fa01ee2557e6e730Structure", "PartnersHub.model$ST_2b2fc63a2c5dd19a88c97ed75635ef82Structure", "PartnersHub.model$ST_b81b243ca5642018a62b9438e213af08Structure", "PartnersHub.model$ST_2a14839a43e1fca3e50600e797d0e612Structure", "PartnersHub.model$ST_8b8a7d131f11e4011391f72ed3597a0eStructure", "PartnersHub.model$ST_e9aa881415a78b4026eaae8ff05abb61Structure", "PartnersHub.model$ST_f20c843fba72b4c6aef8e435f175a9e5Structure", "PartnersHub.model$ST_66479ac0d3a37fcf31e7645e323ef0e1Structure", "PartnersHub.model$ST_46f1b4e2ecb4e84910e0b09c3d82ea15Structure", "PartnersHub.model$RL_d4fccd3e80d193e265d34ff56d4a302a", "PartnersHub.model$ST_c7bba0c276d724a640fd9ae5d39aa04eStructure", "PartnersHub.model$ST_9b7c28a3650c4dbadc24c2da4c77a3f5Structure", "RESTAPIWebsocketOfficial.controller$GetWebsiteStatus", "PartnersHub.controller$UseDevice", "RESTAPIWebsocketOfficial.controller$ResidenceList"], function (OSRuntimeCore, PartnersHubModel, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, PartnersHubController, CustomComponentsOfficial_FullScreenMobileModal_FullScreenMobileModal_mvcModel, PartnersHub_Common_ResidenceList_mvcModel) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("WebsiteStatusResponse", "websiteStatusResponseVar", "WebsiteStatusResponse", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_c864353821feed79663806f3e445d40eStructure());
}, false, RESTAPIWebsocketOfficialModel.ST_c864353821feed79663806f3e445d40eStructure), 
this.attr("ResidenceListResponse", "residenceListResponseVar", "ResidenceListResponse", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_63a473e932ef99f5271718b62399e682Structure());
}, false, RESTAPIWebsocketOfficialModel.ST_63a473e932ef99f5271718b62399e682Structure)
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
Model._hasValidationWidgetsValue = (CustomComponentsOfficial_FullScreenMobileModal_FullScreenMobileModal_mvcModel.hasValidationWidgets || PartnersHub_Common_ResidenceList_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.RealAccountCreation.TaxCountryResidence.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreation.TaxCountryResidence.mvc$model", "PartnersHub.RealAccountCreation.TaxCountryResidence.mvc$controller", "PartnersHub.clientVariables", "CustomComponentsOfficial.FullScreenMobileModal.FullScreenMobileModal.mvc$view", "@outsystems/runtime-widgets-js", "PartnersHub.Common.ResidenceList.mvc$view", "RESTAPIWebsocketOfficial.model$ST_c864353821feed79663806f3e445d40eStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure", "PartnersHub.model$ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure", "PartnersHub.model$RL_ad0d7e810e49e61265e2d337c04416fc", "PartnersHub.model$ST_b4cd08f1a2e52c6c30b2b1fd8abf3029Structure", "PartnersHub.model$ST_dbace2176e52429900d8209086350204Structure", "PartnersHub.model$ST_0c954cdeca234316306bb67c6b24f05bStructure", "PartnersHub.model$ST_b539dd26c0de381503da71ca2655394fStructure", "PartnersHub.model$ST_eda668e7f210db3d136460db1684b63bStructure", "PartnersHub.model$ST_6d2f2a84ec0b7321167e27d19b6d33f8Structure", "PartnersHub.model$RL_72539fe43229e47c6f0bb03bc660d8fe", "PartnersHub.model$ST_8c2ccdb8651c27e0fadf6d9395795b9fStructure", "PartnersHub.model$ST_537325baeed781544ed9f203cd7f9384Structure", "PartnersHub.model$ST_4fc107f3f00705667fa092c970065f35Structure", "PartnersHub.model$ST_141ef15563438703b2e42d78c6c7aefeStructure", "PartnersHub.model$ST_c2546146ca44bb59a2a2de5acfe0b484Structure", "PartnersHub.model$ST_e422048bbd3aba1526832ee4606bb980Structure", "PartnersHub.model$ST_f85e728670d653d5fa01ee2557e6e730Structure", "PartnersHub.model$ST_2b2fc63a2c5dd19a88c97ed75635ef82Structure", "PartnersHub.model$ST_b81b243ca5642018a62b9438e213af08Structure", "PartnersHub.model$ST_2a14839a43e1fca3e50600e797d0e612Structure", "PartnersHub.model$ST_8b8a7d131f11e4011391f72ed3597a0eStructure", "PartnersHub.model$ST_e9aa881415a78b4026eaae8ff05abb61Structure", "PartnersHub.model$ST_f20c843fba72b4c6aef8e435f175a9e5Structure", "PartnersHub.model$ST_66479ac0d3a37fcf31e7645e323ef0e1Structure", "PartnersHub.model$ST_46f1b4e2ecb4e84910e0b09c3d82ea15Structure", "PartnersHub.model$RL_d4fccd3e80d193e265d34ff56d4a302a", "PartnersHub.model$ST_c7bba0c276d724a640fd9ae5d39aa04eStructure", "PartnersHub.model$ST_9b7c28a3650c4dbadc24c2da4c77a3f5Structure", "RESTAPIWebsocketOfficial.controller$GetWebsiteStatus", "PartnersHub.controller$UseDevice", "RESTAPIWebsocketOfficial.controller$ResidenceList"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, React, OSView, PartnersHub_RealAccountCreation_TaxCountryResidence_mvc_model, PartnersHub_RealAccountCreation_TaxCountryResidence_mvc_controller, PartnersHubClientVariables, CustomComponentsOfficial_FullScreenMobileModal_FullScreenMobileModal_mvc_view, OSWidgets, PartnersHub_Common_ResidenceList_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() { return "RealAccountCreation.TaxCountryResidence"; }

        static getAttributes() { return {
codeFunction: "TaxCountryResidence",
functionKey: "e8af1951-644b-409c-abf7-e0bc97b96af8",
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
            return [CustomComponentsOfficial_FullScreenMobileModal_FullScreenMobileModal_mvc_view, PartnersHub_Common_ResidenceList_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreation_TaxCountryResidence_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreation_TaxCountryResidence_mvc_controller;
        }

        get title() {
            

            return OSView.BaseView.BaseWebScreen.getTranslation("URmv6EtknECr9+C8l7lq+A#Title", "TaxCountryResidence");
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
HasBackButton: true,
Title: "Country of tax residence"
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
}, React.createElement(PartnersHub_Common_ResidenceList_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
WebsiteStatus: model.getCachedValue(idService.getId("TuvSb3HNr0GD_VOBxPNm4g.WebsiteStatus"), function () {
return OS.DataConversion.JSConversions.typeConvertRecord(model.variables.websiteStatusResponseVar.website_statusAttr, new PartnersHubModel.ST_4fc107f3f00705667fa092c970065f35Structure(), function (source, target) {
target.broker_codesAttr = source.broker_codesAttr;
target.clients_countryAttr = source.clients_countryAttr;
target.dxtrade_statusAttr.allAttr = source.dxtrade_statusAttr.allAttr;
target.dxtrade_statusAttr.demoAttr = source.dxtrade_statusAttr.demoAttr;
target.dxtrade_statusAttr.realAttr = source.dxtrade_statusAttr.realAttr;
target.supported_languagesAttr = source.supported_languagesAttr;
target.terms_conditions_versionAttr = source.terms_conditions_versionAttr;
return target;
});
}, function () {
return model.variables.websiteStatusResponseVar.website_statusAttr;
}),
ResidenceList: model.getCachedValue(idService.getId("TuvSb3HNr0GD_VOBxPNm4g.ResidenceList"), function () {
return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.residenceListResponseVar.residence_listAttr, new PartnersHubModel.RL_ad0d7e810e49e61265e2d337c04416fc(), function (source, target) {
target.phone_iddAttr = source.phone_iddAttr;
target.textAttr = source.textAttr;
target.valueAttr = source.valueAttr;
target.tin_formatAttr = source.tin_formatAttr;
target.disabledAttr = source.disabledAttr;
target.selectedAttr = source.selectedAttr;
target.account_opening_self_declaration_requiredAttr = source.account_opening_self_declaration_requiredAttr;
return target;
});
}, function () {
return model.variables.residenceListResponseVar.residence_listAttr;
})
},
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
_dependencies: [asPrimitiveValue(model.variables.residenceListResponseVar.residence_listAttr), asPrimitiveValue(model.variables.websiteStatusResponseVar.website_statusAttr)]
}));
        }
    }

    return View;
});
define("PartnersHub.RealAccountCreation.TaxCountryResidence.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreation.TaxCountryResidence.mvc$translationsResources", "PartnersHub.RealAccountCreation.controller", "RESTAPIWebsocketOfficial.model$ST_c864353821feed79663806f3e445d40eStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure", "PartnersHub.model$ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure", "PartnersHub.model$RL_ad0d7e810e49e61265e2d337c04416fc", "PartnersHub.model$ST_b4cd08f1a2e52c6c30b2b1fd8abf3029Structure", "PartnersHub.model$ST_dbace2176e52429900d8209086350204Structure", "PartnersHub.model$ST_0c954cdeca234316306bb67c6b24f05bStructure", "PartnersHub.model$ST_b539dd26c0de381503da71ca2655394fStructure", "PartnersHub.model$ST_eda668e7f210db3d136460db1684b63bStructure", "PartnersHub.model$ST_6d2f2a84ec0b7321167e27d19b6d33f8Structure", "PartnersHub.model$RL_72539fe43229e47c6f0bb03bc660d8fe", "PartnersHub.model$ST_8c2ccdb8651c27e0fadf6d9395795b9fStructure", "PartnersHub.model$ST_537325baeed781544ed9f203cd7f9384Structure", "PartnersHub.model$ST_4fc107f3f00705667fa092c970065f35Structure", "PartnersHub.model$ST_141ef15563438703b2e42d78c6c7aefeStructure", "PartnersHub.model$ST_c2546146ca44bb59a2a2de5acfe0b484Structure", "PartnersHub.model$ST_e422048bbd3aba1526832ee4606bb980Structure", "PartnersHub.model$ST_f85e728670d653d5fa01ee2557e6e730Structure", "PartnersHub.model$ST_2b2fc63a2c5dd19a88c97ed75635ef82Structure", "PartnersHub.model$ST_b81b243ca5642018a62b9438e213af08Structure", "PartnersHub.model$ST_2a14839a43e1fca3e50600e797d0e612Structure", "PartnersHub.model$ST_8b8a7d131f11e4011391f72ed3597a0eStructure", "PartnersHub.model$ST_e9aa881415a78b4026eaae8ff05abb61Structure", "PartnersHub.model$ST_f20c843fba72b4c6aef8e435f175a9e5Structure", "PartnersHub.model$ST_66479ac0d3a37fcf31e7645e323ef0e1Structure", "PartnersHub.model$ST_46f1b4e2ecb4e84910e0b09c3d82ea15Structure", "PartnersHub.model$RL_d4fccd3e80d193e265d34ff56d4a302a", "PartnersHub.model$ST_c7bba0c276d724a640fd9ae5d39aa04eStructure", "PartnersHub.model$ST_9b7c28a3650c4dbadc24c2da4c77a3f5Structure", "RESTAPIWebsocketOfficial.controller$GetWebsiteStatus", "PartnersHub.controller$UseDevice", "RESTAPIWebsocketOfficial.controller$ResidenceList"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreation_TaxCountryResidence_mvc_TranslationsResources, PartnersHub_RealAccountCreationController) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, PartnersHub_RealAccountCreation_TaxCountryResidence_mvc_TranslationsResources);
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
get _residenceSelectorOnClickCountry$Action() {if(!(this.hasOwnProperty("__residenceSelectorOnClickCountry$Action"))) {
this.__residenceSelectorOnClickCountry$Action = function (selectedCountryIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("ResidenceSelectorOnClickCountry", function (span) {
if(span) {
span.setAttribute("code.function", "ResidenceSelectorOnClickCountry");
span.setAttribute("outsystems.function.key", "12da125f-cdb5-4a4b-b493-46f8d82c7ea7");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("ResidenceSelectorOnClickCountry");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.TaxCountryResidence.ResidenceSelectorOnClickCountry$vars"))());
vars.value.selectedCountryInLocal = selectedCountryIn.clone();
// RealSignupTaxResidence = SelectedCountry.Text
PartnersHubClientVariables.setRealSignupTaxResidence(vars.value.selectedCountryInLocal.textAttr);
// Destination: /PartnersHub/EmploymentDetailsInfoScreen
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "EmploymentDetailsInfoScreen", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
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

get _onReady$Action() {if(!(this.hasOwnProperty("__onReady$Action"))) {
this.__onReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnReady", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "657c55cc-f129-4753-bc8f-8545aaf6eb30");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var getWebsiteStatusVar = new OS.DataTypes.VariableHolder();
var residenceListVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: UseDevice
PartnersHubController.default.useDevice$Action(callContext);
// Execute Action: GetWebsiteStatus
model.flush();
return RESTAPIWebsocketOfficialController.default.getWebsiteStatus$Action(PartnersHubClientVariables.getServer(), PartnersHubClientVariables.getAppId(), "en", callContext).then(function (value) {
getWebsiteStatusVar.value = value;
}).then(function () {
// Execute Action: ResidenceList
model.flush();
return RESTAPIWebsocketOfficialController.default.residenceList$Action(PartnersHubClientVariables.getServer(), "1", "en", callContext).then(function (value) {
residenceListVar.value = value;
});
}).then(function () {
// WebsiteStatusResponse = GetWebsiteStatus.Response
model.variables.websiteStatusResponseVar = getWebsiteStatusVar.value.responseOut;
// ResidenceListResponse = ResidenceList.Response
model.variables.residenceListResponseVar = residenceListVar.value.responseOut;
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
span.setAttribute("outsystems.function.key", "c9e96f9e-02b4-4ae7-86e3-cdbdcd094f1c");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("FullScreenMobileModalOnBack");
callContext = controller.callContext(callContext);
// Destination: /PartnersHub/EmploymentDetailsInfoScreen
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "EmploymentDetailsInfoScreen", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
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


residenceSelectorOnClickCountry$Action(selectedCountryIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("ResidenceSelectorOnClickCountry__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "ResidenceSelectorOnClickCountry");
span.setAttribute("outsystems.function.key", "12da125f-cdb5-4a4b-b493-46f8d82c7ea7");
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

onReady$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnReady__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "657c55cc-f129-4753-bc8f-8545aaf6eb30");
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
span.setAttribute("outsystems.function.key", "c9e96f9e-02b4-4ae7-86e3-cdbdcd094f1c");
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
Controller.registerVariableGroupType("PartnersHub.RealAccountCreation.TaxCountryResidence.ResidenceSelectorOnClickCountry$vars", [{
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


define("PartnersHub.RealAccountCreation.TaxCountryResidence.mvc$translationsResources", ["exports"], function (exports) {
return {};
});

