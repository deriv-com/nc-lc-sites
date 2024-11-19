define("PartnersHub.RealAccountCreation.IdentityVerificationListBlock.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "RESTAPIWebsocketOfficial.model", "PartnersHub.controller", "RESTAPIWebsocketOfficial.controller", "PartnersHub.model$ST_9a29ef26037f71a833a7717922f3c172Structure", "PartnersHub.model$RL_d9adde0b03f648d52095292753e14389", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "PartnersHub.model$ST_3b8f7a9e49bbec7ed0ab55bd440bab7dStructure", "PartnersHub.model$ST_fd472dd876adddab32395354eb83b1e8Structure", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.controller$GetToken", "RESTAPIWebsocketOfficial.controller$GetSettings", "RESTAPIWebsocketOfficial.controller$ResidenceList"], function (OSRuntimeCore, PartnersHubModel, RESTAPIWebsocketOfficialModel, PartnersHubController, RESTAPIWebsocketOfficialController) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("SupportedDocuments", "supportedDocumentsVar", "SupportedDocuments", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.RL_d9adde0b03f648d52095292753e14389());
}, false, PartnersHubModel.RL_d9adde0b03f648d52095292753e14389), 
this.attr("ResidenceListResponse", "residenceListResponseVar", "ResidenceListResponse", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_63a473e932ef99f5271718b62399e682Structure());
}, false, RESTAPIWebsocketOfficialModel.ST_63a473e932ef99f5271718b62399e682Structure), 
this.attr("GetSettingsResponse", "getSettingsResponseVar", "GetSettingsResponse", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure());
}, false, RESTAPIWebsocketOfficialModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure), 
this.attr("AdditionalDocumentLabel", "additionalDocumentLabelVar", "AdditionalDocumentLabel", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
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
IDVDesktop: OS.Model.ValidationWidgetRecord,
Dropdown1: OS.Model.ValidationWidgetRecord,
Input_DocumentNumber: OS.Model.ValidationWidgetRecord,
Input_DocumentNumber2: OS.Model.ValidationWidgetRecord
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

define("PartnersHub.RealAccountCreation.IdentityVerificationListBlock.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreation.IdentityVerificationListBlock.mvc$model", "PartnersHub.RealAccountCreation.IdentityVerificationListBlock.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Layouts.DeviceLayout.mvc$view", "@outsystems/runtime-widgets-js", "CustomComponentsOfficial.ButtonVariants.PrimaryButton.mvc$view", "PartnersHub.Common.SkeletonLoader.mvc$view", "PartnersHub.model$ST_9a29ef26037f71a833a7717922f3c172Structure", "PartnersHub.model$RL_d9adde0b03f648d52095292753e14389", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "PartnersHub.model$ST_3b8f7a9e49bbec7ed0ab55bd440bab7dStructure", "PartnersHub.model$ST_fd472dd876adddab32395354eb83b1e8Structure", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.controller$GetToken", "RESTAPIWebsocketOfficial.controller$GetSettings", "RESTAPIWebsocketOfficial.controller$ResidenceList"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, React, OSView, PartnersHub_RealAccountCreation_IdentityVerificationListBlock_mvc_model, PartnersHub_RealAccountCreation_IdentityVerificationListBlock_mvc_controller, PartnersHubClientVariables, PartnersHub_Layouts_DeviceLayout_mvc_view, OSWidgets, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view, PartnersHub_Common_SkeletonLoader_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "RealAccountCreation.IdentityVerificationListBlock"; }

        static getAttributes() { return {
codeFunction: "IdentityVerificationListBlock",
functionKey: "7e40fbd8-675c-4f5a-94ab-2d32b45030ce",
functionOwnerName: "PartnersHub",
functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.RealAccountCreation.IdentityVerificationListBlock.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [PartnersHub_Layouts_DeviceLayout_mvc_view, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view, PartnersHub_Common_SkeletonLoader_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreation_IdentityVerificationListBlock_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreation_IdentityVerificationListBlock_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(PartnersHub_Layouts_DeviceLayout_mvc_view, {
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
desktopContent: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.onClickNext$Action(controller.callContext(eventHandlerContext));

;
}
},
extendedProperties: {
style: "display: flex; justify-content: flex-end; margin-top: 20px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-style: normal; font-weight: bold; text-decoration: underline;"
},
text: [$text(getTranslation("IbeY70bFwk+wGhMdJ5KQ5Q#Value", "Skip"))],
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Form, {
_validationProps: {
validationService: validationService
},
extendedProperties: {
style: "display: flex; flex-direction: column; gap: 16px; margin-top: 20px;"
},
gridProperties: {
classes: "OSFillParent"
},
style: "\"form card\"",
_idProps: {
service: idService,
name: "IDVDesktop"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("vY7c60w2M0i4Bs1j8s6ywA#Value", "Document type"))), React.createElement(OSWidgets.Dropdown, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("IDVDesktop")
},
dropdownMode: /*Custom*/ 1,
emptyValue: "-- Select your document type --",
enabled: true,
extendedProperties: {
style: "margin-top: 10px;"
},
list: model.variables.supportedDocumentsVar,
mandatory: true,
onChange: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.dropdown1OnChange$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "dropdown",
values: function (elem) {
return elem.display_nameAttr;
},
variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupIDVDocumentName(), function (value) {
PartnersHubClientVariables.setRealSignupIDVDocumentName(value);
}),
_idProps: {
service: idService,
name: "Dropdown1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Expression, {
value: model.variables.supportedDocumentsVar.getCurrent(callContext.iterationContext).display_nameAttr,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, callContext, idService, "1")
},
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 0px;"
},
style: model.getCachedValue(idService.getId("a3uZloQjQU65m51LIRnYsg.Style"), function () {
return ((model.widgets.get(idService.getId("Input_DocumentNumber")).validAttr) ? (OS.BuiltinFunctions.nullTextIdentifier()) : ("margin-bottom-l"));
}, function () {
return model.widgets.get(idService.getId("Input_DocumentNumber")).validAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
targetWidget: "Input_DocumentNumber",
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("QhwUhre5LE2M1HhTMjWvxw.Value"), function () {
return (((OS.BuiltinFunctions.length(PartnersHubClientVariables.getRealSignupIDVDocumentName()) > 0)) ? ((PartnersHubClientVariables.getRealSignupIDVDocumentName() + " number")) : ("Document number"));
}, function () {
return PartnersHubClientVariables.getRealSignupIDVDocumentName();
}),
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("IDVDesktop")
},
enabled: true,
extendedProperties: {
style: "margin-top: 10px;"
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: true,
maxLength: 50,
prompt: model.getCachedValue(idService.getId("Input_DocumentNumber.Prompt"), function () {
return (((OS.BuiltinFunctions.length(PartnersHubClientVariables.getRealSignupIDVDocumentName()) > 0)) ? ((("Enter your " + PartnersHubClientVariables.getRealSignupIDVDocumentName()) + " number")) : ("Enter your document number"));
}, function () {
return PartnersHubClientVariables.getRealSignupIDVDocumentName();
}),
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupIDVDocumentNumber(), function (value) {
PartnersHubClientVariables.setRealSignupIDVDocumentNumber(value);
}),
_idProps: {
service: idService,
name: "Input_DocumentNumber"
},
_widgetRecordProvider: widgetsRecordProvider
})), $if((OS.BuiltinFunctions.length(model.variables.additionalDocumentLabelVar) > 0), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 0px;"
},
style: model.getCachedValue(idService.getId("lspp8ZiGXU+BymU0YLvF_Q.Style"), function () {
return ((model.widgets.get(idService.getId("Input_DocumentNumber2")).validAttr) ? (OS.BuiltinFunctions.nullTextIdentifier()) : ("margin-bottom-l"));
}, function () {
return model.widgets.get(idService.getId("Input_DocumentNumber2")).validAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
targetWidget: "Input_DocumentNumber2",
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: (model.variables.additionalDocumentLabelVar + " number"),
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("IDVDesktop")
},
enabled: true,
extendedProperties: {
style: "margin-top: 10px;"
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: true,
maxLength: 0,
prompt: (("Enter your " + model.variables.additionalDocumentLabelVar) + " number"),
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupIDVAdditionalDocumentNumber(), function (value) {
PartnersHubClientVariables.setRealSignupIDVAdditionalDocumentNumber(value);
}),
_idProps: {
service: idService,
name: "Input_DocumentNumber2"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, function () {
return [];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 24px; text-align: right;"
},
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Width: "100px",
enabled: true,
title: "Next",
borderRadius: "100px"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.primaryButtononClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "18",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})))];
}),
tabletContent: PlaceholderContent.Empty,
mobileContent: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if((model.variables.supportedDocumentsVar.length > 0), false, this, function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
style: "display: flex; flex-direction: column; gap: 16px;"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.supportedDocumentsVar,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.ListItem, {
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.onClickDocumentType$Action(model.variables.supportedDocumentsVar.getCurrent(callContext.iterationContext).display_nameAttr, controller.callContext(eventHandlerContext));

;
},
style: "listitem1",
triggerActionOnFullSwipeLeft: true,
triggerActionOnFullSwipeRight: true,
_idProps: {
service: idService,
name: "ListItem1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftActions: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "align-items: center; display: flex; justify-content: space-between;"
},
gridProperties: {
classes: "OSInline",
width: "100%"
},
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "align-items: center; display: flex;"
},
gridProperties: {
classes: "OSInline",
width: "100% justify-content: space-between"
},
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 6px;"
},
gridProperties: {
classes: "OSInline"
},
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-weight: 700;"
},
value: model.variables.supportedDocumentsVar.getCurrent(callContext.iterationContext).display_nameAttr,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.rightIcon.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}),
rightActions: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.supportedDocumentsVar.getCurrent(callContext.iterationContext).display_nameAttr)]
})];
}, callContext, idService, "2")
},
_dependencies: []
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 10px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(PartnersHub_Common_SkeletonLoader_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
IsLoading: true
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
uuid: "30",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: PlaceholderContent.Empty
},
_dependencies: []
}))];
})))];
})
},
_dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupIDVAdditionalDocumentNumber()), asPrimitiveValue(model.widgets.get(idService.getId("Input_DocumentNumber2")).validAttr), asPrimitiveValue(model.variables.additionalDocumentLabelVar), asPrimitiveValue(PartnersHubClientVariables.getRealSignupIDVDocumentNumber()), asPrimitiveValue(model.widgets.get(idService.getId("Input_DocumentNumber")).validAttr), asPrimitiveValue(model.variables.supportedDocumentsVar), asPrimitiveValue(PartnersHubClientVariables.getRealSignupIDVDocumentName())]
}));
        }
    }

    return View;
});
define("PartnersHub.RealAccountCreation.IdentityVerificationListBlock.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreation.IdentityVerificationListBlock.mvc$translationsResources", "PartnersHub.RealAccountCreation.IdentityVerificationListBlock.mvc$controller.PrimaryButtononClick.ValidateTheIDVJS", "PartnersHub.RealAccountCreation.IdentityVerificationListBlock.mvc$controller.Dropdown1OnChange.JavaScript1JS", "PartnersHub.RealAccountCreation.IdentityVerificationListBlock.mvc$controller.OnReady.JavaScript1JS", "PartnersHub.model$ST_9a29ef26037f71a833a7717922f3c172Structure", "PartnersHub.model$RL_d9adde0b03f648d52095292753e14389", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "PartnersHub.model$ST_3b8f7a9e49bbec7ed0ab55bd440bab7dStructure", "PartnersHub.model$ST_fd472dd876adddab32395354eb83b1e8Structure", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.controller$GetToken", "RESTAPIWebsocketOfficial.controller$GetSettings", "RESTAPIWebsocketOfficial.controller$ResidenceList"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreation_IdentityVerificationListBlock_mvc_TranslationsResources, PartnersHub_RealAccountCreation_IdentityVerificationListBlock_mvc_controller_PrimaryButtononClick_ValidateTheIDVJS, PartnersHub_RealAccountCreation_IdentityVerificationListBlock_mvc_controller_Dropdown1OnChange_JavaScript1JS, PartnersHub_RealAccountCreation_IdentityVerificationListBlock_mvc_controller_OnReady_JavaScript1JS) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, PartnersHub_RealAccountCreation_IdentityVerificationListBlock_mvc_TranslationsResources);
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
get _primaryButtononClick$Action() {if(!(this.hasOwnProperty("__primaryButtononClick$Action"))) {
this.__primaryButtononClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("PrimaryButtononClick", function (span) {
if(span) {
span.setAttribute("code.function", "PrimaryButtononClick");
span.setAttribute("outsystems.function.key", "15d67213-ec78-40ab-8afe-f02d21e73ff7");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("PrimaryButtononClick");
callContext = controller.callContext(callContext);
var validateTheIDVJSResult = new OS.DataTypes.VariableHolder();
var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONDeserializeIDVValidFieldsVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_3b8f7a9e49bbec7ed0ab55bd440bab7dStructure))());
var jSONDeserializeIDVValidationErrorVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_fd472dd876adddab32395354eb83b1e8Structure))());
return OS.Flow.executeAsyncFlow(function () {
// JSON Serialize: JSONSerialize1
jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.supportedDocumentsVar, false, false);
return OS.Logger.startActiveSpan("ValidateTheIDV", function (span) {
if(span) {
span.setAttribute("code.function", "ValidateTheIDV");
span.setAttribute("outsystems.function.key", "2e81cf45-9538-43a1-a7f9-b6a6e46517be");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteAsyncJSNode(PartnersHub_RealAccountCreation_IdentityVerificationListBlock_mvc_controller_PrimaryButtononClick_ValidateTheIDVJS, "ValidateTheIDV", "PrimaryButtononClick", {
DocumentNumber: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getRealSignupIDVDocumentNumber(), OS.DataTypes.DataTypes.Text),
SelectedDocument: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getRealSignupIDVDocumentName(), OS.DataTypes.DataTypes.Text),
SupportedDocuments: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize1Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
AdditionalDocumentNumber: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getRealSignupIDVAdditionalDocumentNumber(), OS.DataTypes.DataTypes.Text),
ValidationErrors: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ValidFields: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.IdentityVerificationListBlock.PrimaryButtononClick$validateTheIDVJSResult"))();
jsNodeResult.validationErrorsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ValidationErrors, OS.DataTypes.DataTypes.Text);
jsNodeResult.validFieldsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ValidFields, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1).then(function (results) {
validateTheIDVJSResult.value = results;
}).then(function () {
// JSON Deserialize: JSONDeserializeIDVValidationError
jSONDeserializeIDVValidationErrorVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateTheIDVJSResult.value.validationErrorsOut, PartnersHubModel.ST_fd472dd876adddab32395354eb83b1e8Structure, false);
// JSON Deserialize: JSONDeserializeIDVValidFields
jSONDeserializeIDVValidFieldsVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateTheIDVJSResult.value.validFieldsOut, PartnersHubModel.ST_3b8f7a9e49bbec7ed0ab55bd440bab7dStructure, false);
// Input_DocumentNumber.Valid = JSONDeserializeIDVValidFields.Data.DocumentNumber
model.widgets.get(idService.getId("Input_DocumentNumber")).validAttr = jSONDeserializeIDVValidFieldsVar.value.dataOut.documentNumberAttr;
// Input_DocumentNumber.ValidationMessage = JSONDeserializeIDVValidationError.Data.DocumentNumber
model.widgets.get(idService.getId("Input_DocumentNumber")).validationMessageAttr = jSONDeserializeIDVValidationErrorVar.value.dataOut.documentNumberAttr;
// Input_DocumentNumber2.Valid = JSONDeserializeIDVValidFields.Data.AdditionalDocumentNumber
model.widgets.get(idService.getId("Input_DocumentNumber2")).validAttr = jSONDeserializeIDVValidFieldsVar.value.dataOut.additionalDocumentNumberAttr;
// Input_DocumentNumber2.ValidationMessage = JSONDeserializeIDVValidationError.Data.AdditionalDocumentNumber
model.widgets.get(idService.getId("Input_DocumentNumber2")).validationMessageAttr = jSONDeserializeIDVValidationErrorVar.value.dataOut.additionalDocumentNumberAttr;
// Dropdown1.Valid = JSONDeserializeIDVValidFields.Data.DocumentType
model.widgets.get(idService.getId("Dropdown1")).validAttr = jSONDeserializeIDVValidFieldsVar.value.dataOut.documentTypeAttr;
// Dropdown1.ValidationMessage = JSONDeserializeIDVValidationError.Data.DocumentType
model.widgets.get(idService.getId("Dropdown1")).validationMessageAttr = jSONDeserializeIDVValidationErrorVar.value.dataOut.documentTypeAttr;
}).then(function () {
if((model.widgets.get(idService.getId("IDVDesktop")).validAttr)) {
// Execute Action: OnClickNext
controller._onClickNext$Action(callContext);
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

return this.__primaryButtononClick$Action;
}set _primaryButtononClick$Action(value) {this.__primaryButtononClick$Action = value;
}

get _onClickNext$Action() {if(!(this.hasOwnProperty("__onClickNext$Action"))) {
this.__onClickNext$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnClickNext", function (span) {
if(span) {
span.setAttribute("code.function", "OnClickNext");
span.setAttribute("outsystems.function.key", "7a301e2e-a7bb-4bb6-b22f-150fb795c5ca");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnClickNext");
callContext = controller.callContext(callContext);
// Execute Action: RealSignupNextStep
PartnersHubController.default.realSignupNextStep$Action(1, callContext);
// Execute Action: GetHeaderTitle
PartnersHubController.default.getHeaderTitle$Action(callContext);
// Destination: /PartnersHub/EmploymentDetailsScreen
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "EmploymentDetailsScreen", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onClickNext$Action;
}set _onClickNext$Action(value) {this.__onClickNext$Action = value;
}

get _dropdown1OnChange$Action() {if(!(this.hasOwnProperty("__dropdown1OnChange$Action"))) {
this.__dropdown1OnChange$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("Dropdown1OnChange", function (span) {
if(span) {
span.setAttribute("code.function", "Dropdown1OnChange");
span.setAttribute("outsystems.function.key", "80db5dca-b907-4ba8-a632-35c461f8fc05");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("Dropdown1OnChange");
callContext = controller.callContext(callContext);
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
return OS.Flow.executeAsyncFlow(function () {
// JSON Serialize: JSONSerialize1
jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.supportedDocumentsVar, false, false);
return OS.Logger.startActiveSpan("JavaScript1", function (span) {
if(span) {
span.setAttribute("code.function", "JavaScript1");
span.setAttribute("outsystems.function.key", "fdc720f9-bd9a-4fd3-a1a5-6bfec404112c");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteAsyncJSNode(PartnersHub_RealAccountCreation_IdentityVerificationListBlock_mvc_controller_Dropdown1OnChange_JavaScript1JS, "JavaScript1", "Dropdown1OnChange", {
SelectedDocument: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getRealSignupIDVDocumentName(), OS.DataTypes.DataTypes.Text),
DocumentsList: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize1Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
AdditionalDocumentLabel: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.IdentityVerificationListBlock.Dropdown1OnChange$javaScript1JSResult"))();
jsNodeResult.additionalDocumentLabelOut = OS.DataConversion.JSNodeParamConverter.from($parameters.AdditionalDocumentLabel, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1).then(function (results) {
javaScript1JSResult.value = results;
}).then(function () {
// AdditionalDocumentLabel = JavaScript1.AdditionalDocumentLabel
model.variables.additionalDocumentLabelVar = javaScript1JSResult.value.additionalDocumentLabelOut;
// RealSignupIDVDocumentNumber = NullTextIdentifier
PartnersHubClientVariables.setRealSignupIDVDocumentNumber(OS.BuiltinFunctions.nullTextIdentifier());
// RealSignupIDVAdditionalDocumentNumber = NullTextIdentifier
PartnersHubClientVariables.setRealSignupIDVAdditionalDocumentNumber(OS.BuiltinFunctions.nullTextIdentifier());
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

return this.__dropdown1OnChange$Action;
}set _dropdown1OnChange$Action(value) {this.__dropdown1OnChange$Action = value;
}

get _onClickDocumentType$Action() {if(!(this.hasOwnProperty("__onClickDocumentType$Action"))) {
this.__onClickDocumentType$Action = function (documentTypeIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnClickDocumentType", function (span) {
if(span) {
span.setAttribute("code.function", "OnClickDocumentType");
span.setAttribute("outsystems.function.key", "c4cb3541-59c3-4b22-874c-60061f28ee42");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnClickDocumentType");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.IdentityVerificationListBlock.OnClickDocumentType$vars"))());
vars.value.documentTypeInLocal = documentTypeIn;
// RealSignupIDVDocumentName = DocumentType
PartnersHubClientVariables.setRealSignupIDVDocumentName(vars.value.documentTypeInLocal);
// Destination: /PartnersHub/IdentityVerificationDetailsScreen
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "IdentityVerificationDetailsScreen", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onClickDocumentType$Action;
}set _onClickDocumentType$Action(value) {this.__onClickDocumentType$Action = value;
}

get _onReady$Action() {if(!(this.hasOwnProperty("__onReady$Action"))) {
this.__onReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnReady", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "d71fc0a9-a571-4d19-a15b-f56385581d5e");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var getTokenVar = new OS.DataTypes.VariableHolder();
var getSettingsVar = new OS.DataTypes.VariableHolder();
var residenceListVar = new OS.DataTypes.VariableHolder();
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONDeserializeDocumentWithAdditionalDocumentsListVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.RL_d9adde0b03f648d52095292753e14389))());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: GetToken
getTokenVar.value = PartnersHubController.default.getToken$Action(callContext);

// Execute Action: GetSettings
model.flush();
return RESTAPIWebsocketOfficialController.default.getSettings$Action(PartnersHubClientVariables.getServer(), getTokenVar.value.tokenOut, "1", "en", callContext).then(function (value) {
getSettingsVar.value = value;
}).then(function () {
// Execute Action: ResidenceList
model.flush();
return RESTAPIWebsocketOfficialController.default.residenceList$Action(PartnersHubClientVariables.getServer(), "1", "en", callContext).then(function (value) {
residenceListVar.value = value;
});
}).then(function () {
// ResidenceListResponse = ResidenceList.Response
model.variables.residenceListResponseVar = residenceListVar.value.responseOut;
// GetSettingsResponse = GetSettings.Response
model.variables.getSettingsResponseVar = getSettingsVar.value.responseOut;
// JSON Serialize: JSONSerialize1
jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(residenceListVar.value.responseOut, false, false);
javaScript1JSResult.value = OS.Logger.startActiveSpan("JavaScript1", function (span) {
if(span) {
span.setAttribute("code.function", "JavaScript1");
span.setAttribute("outsystems.function.key", "8402b06a-b31f-405a-b52e-17f8655f7c6f");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(PartnersHub_RealAccountCreation_IdentityVerificationListBlock_mvc_controller_OnReady_JavaScript1JS, "JavaScript1", "OnReady", {
ResidenceList: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize1Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
Citizenship: OS.DataConversion.JSNodeParamConverter.to(getSettingsVar.value.responseOut.get_settingsAttr.citizenAttr, OS.DataTypes.DataTypes.Text),
supportedDocuments: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.IdentityVerificationListBlock.OnReady$javaScript1JSResult"))();
jsNodeResult.supportedDocumentsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.supportedDocuments, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeDocumentWithAdditionalDocumentsList
jSONDeserializeDocumentWithAdditionalDocumentsListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(javaScript1JSResult.value.supportedDocumentsOut, PartnersHubModel.RL_d9adde0b03f648d52095292753e14389, false);
// SupportedDocuments = JSONDeserializeDocumentWithAdditionalDocumentsList.Data
model.variables.supportedDocumentsVar = jSONDeserializeDocumentWithAdditionalDocumentsListVar.value.dataOut;
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


primaryButtononClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("PrimaryButtononClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "PrimaryButtononClick");
span.setAttribute("outsystems.function.key", "15d67213-ec78-40ab-8afe-f02d21e73ff7");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._primaryButtononClick$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

onClickNext$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnClickNext__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnClickNext");
span.setAttribute("outsystems.function.key", "7a301e2e-a7bb-4bb6-b22f-150fb795c5ca");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onClickNext$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

dropdown1OnChange$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("Dropdown1OnChange__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "Dropdown1OnChange");
span.setAttribute("outsystems.function.key", "80db5dca-b907-4ba8-a632-35c461f8fc05");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._dropdown1OnChange$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

onClickDocumentType$Action(documentTypeIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnClickDocumentType__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnClickDocumentType");
span.setAttribute("outsystems.function.key", "c4cb3541-59c3-4b22-874c-60061f28ee42");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onClickDocumentType$Action, callContext, documentTypeIn);
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
span.setAttribute("outsystems.function.key", "d71fc0a9-a571-4d19-a15b-f56385581d5e");
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
return controller.handleError(ex);
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
Controller.registerVariableGroupType("PartnersHub.RealAccountCreation.IdentityVerificationListBlock.PrimaryButtononClick$validateTheIDVJSResult", [{
name: "ValidationErrors",
attrName: "validationErrorsOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ValidFields",
attrName: "validFieldsOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("PartnersHub.RealAccountCreation.IdentityVerificationListBlock.Dropdown1OnChange$javaScript1JSResult", [{
name: "AdditionalDocumentLabel",
attrName: "additionalDocumentLabelOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("PartnersHub.RealAccountCreation.IdentityVerificationListBlock.OnClickDocumentType$vars", [{
name: "DocumentType",
attrName: "documentTypeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("PartnersHub.RealAccountCreation.IdentityVerificationListBlock.OnReady$javaScript1JSResult", [{
name: "supportedDocuments",
attrName: "supportedDocumentsOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

}
return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.RealAccountCreation.IdentityVerificationListBlock.mvc$controller.PrimaryButtononClick.ValidateTheIDVJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
function mergeSchema(...schemas) {
    const [first, ...rest] = schemas;

    const merged = rest.reduce(
        (mergedSchemas, schema) => mergedSchemas.concat(schema),
        first
    );

    return merged;
}

// Transform the flags to supported pattern (i.e "^(?i)G[a-zA-Z0-9]{7,9}$")
function transformedRegex(pattern) {
    const caseInsensitiveRegex = /\(\?i\)/i;
    const isCaseInsensitive = caseInsensitiveRegex.test(pattern);
    const transformedPattern = pattern.replace(caseInsensitiveRegex, '');
    const flags = isCaseInsensitive ? 'i' : '';

    return new RegExp(transformedPattern, flags);
}

let validationSchema;
let isAdditionalDocumentRequired;
let additionalDocumentValidationSchema;


if ($parameters.SelectedDocument) {
    const document = JSON.parse($parameters.SupportedDocuments ?? JSON.stringify([])).find(doc => doc.display_name === $parameters.SelectedDocument)
    
    validationSchema = yup.object().shape({
        DocumentType: yup.string().required("Document type is required."),
        DocumentNumber: yup.string().required(document.display_name + " number is requried.").matches(transformedRegex(document.format), document.display_name + " format is incorrect."),
    })
    isAdditionalDocumentRequired = Boolean(document?.additional)
    additionalDocumentValidationSchema = yup.object().shape({
        AdditionalDocumentNumber: yup.string().required(document?.additional?.display_name + " number is requried.").matches(transformedRegex(document?.additional?.format ?? ''), document?.additional?.display_name + " format is incorrect."),
    })
} else {
    validationSchema = yup.object().shape({
        DocumentType: yup.string().required("Document type is required."),
        DocumentNumber: yup.string().required("Document number is required.")
    })
}


const payload = {
    DocumentType: $parameters.SelectedDocument,
    DocumentNumber: $parameters.DocumentNumber
}

if (isAdditionalDocumentRequired) {
    payload.AdditionalDocumentNumber = $parameters.AdditionalDocumentNumber
}

const { errors, validFields } = validate(isAdditionalDocumentRequired ? mergeSchema(validationSchema, additionalDocumentValidationSchema) : validationSchema, payload)

$parameters.ValidationErrors = JSON.stringify(errors)

$parameters.ValidFields = JSON.stringify(validFields)
$resolve()
});
};
});

define("PartnersHub.RealAccountCreation.IdentityVerificationListBlock.mvc$controller.Dropdown1OnChange.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
const document = JSON.parse($parameters.DocumentsList ?? JSON.stringify([])).find(doc => doc.display_name === $parameters.SelectedDocument)
$parameters.AdditionalDocumentLabel = document?.additional?.display_name ?? ""

$resolve()
});
};
});

define("PartnersHub.RealAccountCreation.IdentityVerificationListBlock.mvc$controller.OnReady.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const currentCountry = JSON.parse($parameters.ResidenceList).residence_list.find(c => c.value === $parameters.Citizenship)

const supportedDocuments = Object.values(currentCountry.identity.services.idv.documents_supported)

$parameters.supportedDocuments = JSON.stringify(supportedDocuments)

};
});


define("PartnersHub.RealAccountCreation.IdentityVerificationListBlock.mvc$translationsResources.ar-001", [], function () {
return {
"vY7c60w2M0i4Bs1j8s6ywA#Value": "نوع الوثيقة",
"IbeY70bFwk+wGhMdJ5KQ5Q#Value": "تخطي"
};
});

define("PartnersHub.RealAccountCreation.IdentityVerificationListBlock.mvc$translationsResources.de-DE", [], function () {
return {
"vY7c60w2M0i4Bs1j8s6ywA#Value": "Dokumenttyp",
"IbeY70bFwk+wGhMdJ5KQ5Q#Value": "Überspringen"
};
});

define("PartnersHub.RealAccountCreation.IdentityVerificationListBlock.mvc$translationsResources.es-ES", [], function () {
return {
"vY7c60w2M0i4Bs1j8s6ywA#Value": "Tipo de documento",
"IbeY70bFwk+wGhMdJ5KQ5Q#Value": "Saltar"
};
});

define("PartnersHub.RealAccountCreation.IdentityVerificationListBlock.mvc$translationsResources.fr-FR", [], function () {
return {
"vY7c60w2M0i4Bs1j8s6ywA#Value": "Type de document",
"IbeY70bFwk+wGhMdJ5KQ5Q#Value": "Passer"
};
});

define("PartnersHub.RealAccountCreation.IdentityVerificationListBlock.mvc$translationsResources.it-IT", [], function () {
return {
"vY7c60w2M0i4Bs1j8s6ywA#Value": "Tipo di documento",
"IbeY70bFwk+wGhMdJ5KQ5Q#Value": "Salta"
};
});

define("PartnersHub.RealAccountCreation.IdentityVerificationListBlock.mvc$translationsResources.pl-PL", [], function () {
return {
"vY7c60w2M0i4Bs1j8s6ywA#Value": "Typ dokumentu",
"IbeY70bFwk+wGhMdJ5KQ5Q#Value": "Pomiń"
};
});

define("PartnersHub.RealAccountCreation.IdentityVerificationListBlock.mvc$translationsResources.pt-PT", [], function () {
return {
"vY7c60w2M0i4Bs1j8s6ywA#Value": "Tipo de documento",
"IbeY70bFwk+wGhMdJ5KQ5Q#Value": "Saltar"
};
});

define("PartnersHub.RealAccountCreation.IdentityVerificationListBlock.mvc$translationsResources.ru-RU", [], function () {
return {
"vY7c60w2M0i4Bs1j8s6ywA#Value": "Тип документа",
"IbeY70bFwk+wGhMdJ5KQ5Q#Value": "Пропустить"
};
});

define("PartnersHub.RealAccountCreation.IdentityVerificationListBlock.mvc$translationsResources", ["exports", "PartnersHub.RealAccountCreation.IdentityVerificationListBlock.mvc$translationsResources.ar-001", "PartnersHub.RealAccountCreation.IdentityVerificationListBlock.mvc$translationsResources.de-DE", "PartnersHub.RealAccountCreation.IdentityVerificationListBlock.mvc$translationsResources.es-ES", "PartnersHub.RealAccountCreation.IdentityVerificationListBlock.mvc$translationsResources.fr-FR", "PartnersHub.RealAccountCreation.IdentityVerificationListBlock.mvc$translationsResources.it-IT", "PartnersHub.RealAccountCreation.IdentityVerificationListBlock.mvc$translationsResources.pl-PL", "PartnersHub.RealAccountCreation.IdentityVerificationListBlock.mvc$translationsResources.pt-PT", "PartnersHub.RealAccountCreation.IdentityVerificationListBlock.mvc$translationsResources.ru-RU"], function (exports, PartnersHub_RealAccountCreation_IdentityVerificationListBlock_mvc_translationsResources_ar001, PartnersHub_RealAccountCreation_IdentityVerificationListBlock_mvc_translationsResources_deDE, PartnersHub_RealAccountCreation_IdentityVerificationListBlock_mvc_translationsResources_esES, PartnersHub_RealAccountCreation_IdentityVerificationListBlock_mvc_translationsResources_frFR, PartnersHub_RealAccountCreation_IdentityVerificationListBlock_mvc_translationsResources_itIT, PartnersHub_RealAccountCreation_IdentityVerificationListBlock_mvc_translationsResources_plPL, PartnersHub_RealAccountCreation_IdentityVerificationListBlock_mvc_translationsResources_ptPT, PartnersHub_RealAccountCreation_IdentityVerificationListBlock_mvc_translationsResources_ruRU) {
return {
"ar-001": {
"translations": PartnersHub_RealAccountCreation_IdentityVerificationListBlock_mvc_translationsResources_ar001,
"isRTL": true
},
"de-DE": {
"translations": PartnersHub_RealAccountCreation_IdentityVerificationListBlock_mvc_translationsResources_deDE,
"isRTL": false
},
"es-ES": {
"translations": PartnersHub_RealAccountCreation_IdentityVerificationListBlock_mvc_translationsResources_esES,
"isRTL": false
},
"fr-FR": {
"translations": PartnersHub_RealAccountCreation_IdentityVerificationListBlock_mvc_translationsResources_frFR,
"isRTL": false
},
"it-IT": {
"translations": PartnersHub_RealAccountCreation_IdentityVerificationListBlock_mvc_translationsResources_itIT,
"isRTL": false
},
"pl-PL": {
"translations": PartnersHub_RealAccountCreation_IdentityVerificationListBlock_mvc_translationsResources_plPL,
"isRTL": false
},
"pt-PT": {
"translations": PartnersHub_RealAccountCreation_IdentityVerificationListBlock_mvc_translationsResources_ptPT,
"isRTL": false
},
"ru-RU": {
"translations": PartnersHub_RealAccountCreation_IdentityVerificationListBlock_mvc_translationsResources_ruRU,
"isRTL": false
}
};
});

