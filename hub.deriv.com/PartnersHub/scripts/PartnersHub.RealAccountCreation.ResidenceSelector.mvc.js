define("PartnersHub.RealAccountCreation.ResidenceSelector.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "PartnersHub.model$ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure", "PartnersHub.model$RL_ad0d7e810e49e61265e2d337c04416fc", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.controller$ResidenceList", "RESTAPIWebsocketOfficial.model$ST_c864353821feed79663806f3e445d40eStructure", "RESTAPIWebsocketOfficial.controller$GetWebsiteStatus", "RESTAPIWebsocketOfficial.model$ST_bf5d4ab423fae3ff38a977653adc8398Structure", "PartnersHub.model$RL_071a5687136a6dbeecb0a0d193c188a2", "PartnersHub.model$ST_dbace2176e52429900d8209086350204Structure", "PartnersHub.model$ST_0be4704c381e15995202804b221a5e3aStructure"], function (OSRuntimeCore, PartnersHubModel, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("FilteredResidenceList", "filteredResidenceListVar", "FilteredResidenceList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.RL_ad0d7e810e49e61265e2d337c04416fc());
}, false, PartnersHubModel.RL_ad0d7e810e49e61265e2d337c04416fc), 
this.attr("SearchedResidence", "searchedResidenceVar", "SearchedResidence", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("CurrentResidence", "currentResidenceVar", "CurrentResidence", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("SortedResidenceList", "sortedResidenceListVar", "SortedResidenceList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.RL_ad0d7e810e49e61265e2d337c04416fc());
}, false, PartnersHubModel.RL_ad0d7e810e49e61265e2d337c04416fc), 
this.attr("Subtitle", "subtitleIn", "Subtitle", true, false, OS.DataTypes.DataTypes.Text, function () {
return "Current location";
}, false), 
this.attr("_subtitleInDataFetchStatus", "_subtitleInDataFetchStatus", "_subtitleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Input_SearchedItem: OS.Model.ValidationWidgetRecord
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
if("Subtitle" in inputs) {
this.variables.subtitleIn = inputs.Subtitle;
if("_subtitleInDataFetchStatus" in inputs) {
this.variables._subtitleInDataFetchStatus = inputs._subtitleInDataFetchStatus;
}

}

}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.RealAccountCreation.ResidenceSelector.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreation.ResidenceSelector.mvc$model", "PartnersHub.RealAccountCreation.ResidenceSelector.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Interaction.Search.mvc$view", "PartnersHub.model$ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure", "PartnersHub.model$RL_ad0d7e810e49e61265e2d337c04416fc", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.controller$ResidenceList", "RESTAPIWebsocketOfficial.model$ST_c864353821feed79663806f3e445d40eStructure", "RESTAPIWebsocketOfficial.controller$GetWebsiteStatus", "RESTAPIWebsocketOfficial.model$ST_bf5d4ab423fae3ff38a977653adc8398Structure", "PartnersHub.model$RL_071a5687136a6dbeecb0a0d193c188a2", "PartnersHub.model$ST_dbace2176e52429900d8209086350204Structure", "PartnersHub.model$ST_0be4704c381e15995202804b221a5e3aStructure"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, React, OSView, PartnersHub_RealAccountCreation_ResidenceSelector_mvc_model, PartnersHub_RealAccountCreation_ResidenceSelector_mvc_controller, PartnersHubClientVariables, OSWidgets, OutSystemsUI_Interaction_Search_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "RealAccountCreation.ResidenceSelector"; }

        static getAttributes() { return {
codeFunction: "ResidenceSelector",
functionKey: "502d31df-3057-4dfa-a393-1b3b8435bbfd",
functionOwnerName: "PartnersHub",
functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.RealAccountCreation.ResidenceSelector.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Interaction_Search_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreation_ResidenceSelector_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreation_ResidenceSelector_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "background-color: #fff; height: 100vh;"
},
visible: true,
_idProps: {
service: idService,
uuid: "0"
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
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_Interaction_Search_mvc_view, {
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
uuid: "2",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
input: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: true,
extendedProperties: {
style: "font-size: 14px; height: 40px; margin-bottom: 16px; margin-right: 0px; margin-top: 0px; padding: 0px 0px 0px 38px;"
},
gridProperties: {
classes: "OSFillParent",
marginLeft: "0px"
},
inputType: /*Search*/ 8,
mandatory: false,
maxLength: 0,
onChange: function () {
var eventHandlerContext = callContext.clone();
controller.onSearch$Action(model.variables.searchedResidenceVar, controller.callContext(eventHandlerContext));

;
},
prompt: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("+52G+A0_7Eq8rgCUpryQRA#ValueExpression.-1822469688.1", "Search"),
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.searchedResidenceVar, function (value) {
model.variables.searchedResidenceVar = value;
}),
_idProps: {
service: idService,
name: "Input_SearchedItem"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.searchedResidenceVar)]
})), $if((OS.BuiltinFunctions.length(model.variables.subtitleIn) > 0), false, this, function () {
return [React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "color: #222; font-size: 14px; margin-right: 16px;"
},
gridProperties: {
marginLeft: "16px"
},
value: model.variables.subtitleIn,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._subtitleInDataFetchStatus)
})];
}, function () {
return [];
}), $if(((model.variables.filteredResidenceListVar.length > 0) && !(model.variables.filteredResidenceListVar.isEmpty)), false, this, function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.filteredResidenceListVar,
style: "list list-group residence-list",
tag: "div",
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(PartnersHubClientVariables.getIsCountryUnavailable()), asPrimitiveValue(model.variables.currentResidenceVar), asPrimitiveValue(model.variables.filteredResidenceListVar.getCurrent(callContext.iterationContext).textAttr), asPrimitiveValue(model.variables.filteredResidenceListVar.getCurrent(callContext.iterationContext).valueAttr)]
}, $if((model.variables.filteredResidenceListVar.getCurrent(callContext.iterationContext).valueAttr === model.variables.currentResidenceVar), false, this, function () {
return [React.createElement(OSWidgets.ListItem, {
extendedProperties: {
style: "cursor: pointer; height: fit-content; margin-bottom: 0px; margin-top: 0px;"
},
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.onClickCountry$Action(model.variables.filteredResidenceListVar.getCurrent(callContext.iterationContext), controller.callContext(eventHandlerContext));

;
},
style: "list-item residence-item",
triggerActionOnFullSwipeLeft: true,
triggerActionOnFullSwipeRight: true,
_idProps: {
service: idService,
name: "CurrentCountryItem"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftActions: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "border-color: #e9ecef; border-style: none none solid none; border-width: 0px 0px 2px 0px; padding: 12px 0px 12px 0px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "align-items: center; display: flex; justify-content: space-between; margin-bottom: 0px; margin-right: 16px; margin-top: 0px;"
},
gridProperties: {
marginLeft: "16px"
},
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
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
style: "border-color: #e9ecef; border-style: solid; border-width: 0px; padding: 12px 0px 12px 0px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "align-items: center; display: flex; font-size: 18px; font-weight: bold; height: fit-content; justify-content: space-between;"
},
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "align-items: center; display: flex; gap: 8px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 18px; font-weight: 700;"
},
style: model.getCachedValue(idService.getId("QfA3x+7CbUarWL_o7M9Tmg.Style"), function () {
return (((model.variables.filteredResidenceListVar.getCurrent(callContext.iterationContext).valueAttr === model.variables.currentResidenceVar)) ? ("current-country") : ("country-list"));
}, function () {
return model.variables.filteredResidenceListVar.getCurrent(callContext.iterationContext).valueAttr;
}, function () {
return model.variables.currentResidenceVar;
}),
value: model.variables.filteredResidenceListVar.getCurrent(callContext.iterationContext).textAttr,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}))))), React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "cursor: pointer;"
},
icon: "angle-right",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}),
rightActions: PlaceholderContent.Empty
}
})];
}, function () {
return [React.createElement(OSWidgets.ListItem, {
extendedProperties: {
style: "cursor: pointer; height: fit-content; margin-bottom: 0px; margin-top: 0px;"
},
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.onClickCountry$Action(model.variables.filteredResidenceListVar.getCurrent(callContext.iterationContext), controller.callContext(eventHandlerContext));

;
},
style: model.getCachedValue(idService.getId("ListItem1.Style"), function () {
return (((model.variables.filteredResidenceListVar.getCurrent(callContext.iterationContext).valueAttr === model.variables.currentResidenceVar)) ? (((PartnersHubClientVariables.getIsCountryUnavailable()) ? ("list-item current-residence-item no-select") : ("list-item current-residence-item"))) : ("list-item residence-item"));
}, function () {
return model.variables.filteredResidenceListVar.getCurrent(callContext.iterationContext).valueAttr;
}, function () {
return model.variables.currentResidenceVar;
}, function () {
return PartnersHubClientVariables.getIsCountryUnavailable();
}),
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
style: "align-items: center; display: flex; justify-content: space-between; margin-bottom: 0px; margin-right: 0px; margin-top: 0px; padding: 16px;"
},
gridProperties: {
marginLeft: "0px"
},
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "align-items: center; display: flex; font-size: 18px; font-weight: bold; height: fit-content; justify-content: space-between;"
},
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "align-items: center; display: flex; gap: 8px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 15px;"
},
gridProperties: {
marginLeft: "0px"
},
style: model.getCachedValue(idService.getId("R6PU7_wpl0KQx+d+deVYXw.Style"), function () {
return (((model.variables.filteredResidenceListVar.getCurrent(callContext.iterationContext).valueAttr === model.variables.currentResidenceVar)) ? ("current-country") : ("country-list"));
}, function () {
return model.variables.filteredResidenceListVar.getCurrent(callContext.iterationContext).valueAttr;
}, function () {
return model.variables.currentResidenceVar;
}),
value: model.variables.filteredResidenceListVar.getCurrent(callContext.iterationContext).textAttr,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "cursor: pointer;"
},
icon: "angle-right",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
rightActions: PlaceholderContent.Empty
}
})];
}))];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(PartnersHubClientVariables.getIsCountryUnavailable()), asPrimitiveValue(model.variables.currentResidenceVar)]
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 12px; text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #222; font-size: 16px;"
},
text: [$text(getTranslation("Pq_nLXnMW0yDEm8xRV0uRg#Value", "Services not available"))],
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
})));
        }
    }

    return View;
});
define("PartnersHub.RealAccountCreation.ResidenceSelector.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreation.ResidenceSelector.mvc$translationsResources", "PartnersHub.RealAccountCreation.ResidenceSelector.mvc$controller.OnReady.JavaScript1JS", "PartnersHub.RealAccountCreation.ResidenceSelector.mvc$controller.OnSearch.JavaScript1JS", "PartnersHub.model$ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure", "PartnersHub.model$RL_ad0d7e810e49e61265e2d337c04416fc", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.controller$ResidenceList", "RESTAPIWebsocketOfficial.model$ST_c864353821feed79663806f3e445d40eStructure", "RESTAPIWebsocketOfficial.controller$GetWebsiteStatus", "RESTAPIWebsocketOfficial.model$ST_bf5d4ab423fae3ff38a977653adc8398Structure", "PartnersHub.model$RL_071a5687136a6dbeecb0a0d193c188a2", "PartnersHub.model$ST_dbace2176e52429900d8209086350204Structure", "PartnersHub.model$ST_0be4704c381e15995202804b221a5e3aStructure"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreation_ResidenceSelector_mvc_TranslationsResources, PartnersHub_RealAccountCreation_ResidenceSelector_mvc_controller_OnReady_JavaScript1JS, PartnersHub_RealAccountCreation_ResidenceSelector_mvc_controller_OnSearch_JavaScript1JS) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, PartnersHub_RealAccountCreation_ResidenceSelector_mvc_TranslationsResources);
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
span.setAttribute("outsystems.function.key", "5e7ff0b0-163e-412e-bf00-eb1db69521e2");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var residenceList2Var = new OS.DataTypes.VariableHolder();
var getWebsiteStatusVar = new OS.DataTypes.VariableHolder();
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONDeserializeResidenceListResponseVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketOfficialModel.ST_63a473e932ef99f5271718b62399e682Structure))());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: GetWebsiteStatus
model.flush();
return RESTAPIWebsocketOfficialController.default.getWebsiteStatus$Action(PartnersHubClientVariables.getServer(), "1", "en", callContext).then(function (value) {
getWebsiteStatusVar.value = value;
}).then(function () {
// Execute Action: ResidenceList2
model.flush();
return RESTAPIWebsocketOfficialController.default.residenceList$Action(PartnersHubClientVariables.getServer(), "1", "en", callContext).then(function (value) {
residenceList2Var.value = value;
});
}).then(function () {
// JSON Serialize: JSONSerialize1
jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(residenceList2Var.value.responseOut, false, false);
javaScript1JSResult.value = OS.Logger.startActiveSpan("JavaScript1", function (span) {
if(span) {
span.setAttribute("code.function", "JavaScript1");
span.setAttribute("outsystems.function.key", "39b374c0-43ae-4922-9c38-8194659a328d");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(PartnersHub_RealAccountCreation_ResidenceSelector_mvc_controller_OnReady_JavaScript1JS, "JavaScript1", "OnReady", {
CurrentResidence: OS.DataConversion.JSNodeParamConverter.to(getWebsiteStatusVar.value.responseOut.website_statusAttr.clients_countryAttr, OS.DataTypes.DataTypes.Text),
ResidenceList: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize1Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
SortedResidenceList: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.ResidenceSelector.OnReady$javaScript1JSResult"))();
jsNodeResult.sortedResidenceListOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SortedResidenceList, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeResidenceListResponse
jSONDeserializeResidenceListResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(javaScript1JSResult.value.sortedResidenceListOut, RESTAPIWebsocketOfficialModel.ST_63a473e932ef99f5271718b62399e682Structure, false);
// FilteredResidenceList = JSONDeserializeResidenceListResponse.Data.Residence_list
model.variables.filteredResidenceListVar = OS.DataConversion.JSConversions.typeConvertRecordList(jSONDeserializeResidenceListResponseVar.value.dataOut.residence_listAttr, new PartnersHubModel.RL_ad0d7e810e49e61265e2d337c04416fc(), function (source, target) {
target.phone_iddAttr = source.phone_iddAttr;
target.textAttr = source.textAttr;
target.valueAttr = source.valueAttr;
target.tin_formatAttr = source.tin_formatAttr;
target.disabledAttr = source.disabledAttr;
target.selectedAttr = source.selectedAttr;
target.account_opening_self_declaration_requiredAttr = source.account_opening_self_declaration_requiredAttr;
return target;
});
// SortedResidenceList = JSONDeserializeResidenceListResponse.Data.Residence_list
model.variables.sortedResidenceListVar = OS.DataConversion.JSConversions.typeConvertRecordList(jSONDeserializeResidenceListResponseVar.value.dataOut.residence_listAttr, new PartnersHubModel.RL_ad0d7e810e49e61265e2d337c04416fc(), function (source, target) {
target.phone_iddAttr = source.phone_iddAttr;
target.textAttr = source.textAttr;
target.valueAttr = source.valueAttr;
target.tin_formatAttr = source.tin_formatAttr;
target.disabledAttr = source.disabledAttr;
target.selectedAttr = source.selectedAttr;
target.account_opening_self_declaration_requiredAttr = source.account_opening_self_declaration_requiredAttr;
return target;
});
// CurrentResidence = GetWebsiteStatus.Response.Website_status.Clients_country
model.variables.currentResidenceVar = getWebsiteStatusVar.value.responseOut.website_statusAttr.clients_countryAttr;
// ClientCountry = GetWebsiteStatus.Response.Website_status.Clients_country
PartnersHubClientVariables.setClientCountry(getWebsiteStatusVar.value.responseOut.website_statusAttr.clients_countryAttr);
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

get _onSearch$Action() {if(!(this.hasOwnProperty("__onSearch$Action"))) {
this.__onSearch$Action = function (searchedItemArgIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnSearch", function (span) {
if(span) {
span.setAttribute("code.function", "OnSearch");
span.setAttribute("outsystems.function.key", "62348fe3-970d-43c6-9cc4-17e6bfb0ee74");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnSearch");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.ResidenceSelector.OnSearch$vars"))());
vars.value.searchedItemArgInLocal = searchedItemArgIn;
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
var serializeFilteredResidenceListVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONDeserializeResidenceListResponseVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_0be4704c381e15995202804b221a5e3aStructure))());
if(((OS.BuiltinFunctions.length(vars.value.searchedItemArgInLocal) > 0))) {
// JSON Serialize: SerializeFilteredResidenceList
serializeFilteredResidenceListVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.filteredResidenceListVar, false, false);
javaScript1JSResult.value = OS.Logger.startActiveSpan("JavaScript1", function (span) {
if(span) {
span.setAttribute("code.function", "JavaScript1");
span.setAttribute("outsystems.function.key", "475cf908-8076-419a-87d7-e5be1ec66c7f");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(PartnersHub_RealAccountCreation_ResidenceSelector_mvc_controller_OnSearch_JavaScript1JS, "JavaScript1", "OnSearch", {
SearchedResidence: OS.DataConversion.JSNodeParamConverter.to(vars.value.searchedItemArgInLocal, OS.DataTypes.DataTypes.Text),
ResidenceList: OS.DataConversion.JSNodeParamConverter.to(serializeFilteredResidenceListVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
FilteredResidenceList: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.ResidenceSelector.OnSearch$javaScript1JSResult"))();
jsNodeResult.filteredResidenceListOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FilteredResidenceList, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeResidenceListResponse
jSONDeserializeResidenceListResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(javaScript1JSResult.value.filteredResidenceListOut, PartnersHubModel.ST_0be4704c381e15995202804b221a5e3aStructure, false);
// FilteredResidenceList = JSONDeserializeResidenceListResponse.Data.Residence_list
model.variables.filteredResidenceListVar = jSONDeserializeResidenceListResponseVar.value.dataOut.residence_listAttr;
} else {
// FilteredResidenceList = SortedResidenceList
model.variables.filteredResidenceListVar = model.variables.sortedResidenceListVar;
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onSearch$Action;
}set _onSearch$Action(value) {this.__onSearch$Action = value;
}


onReady$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnReady__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "5e7ff0b0-163e-412e-bf00-eb1db69521e2");
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

onSearch$Action(searchedItemArgIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnSearch__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnSearch");
span.setAttribute("outsystems.function.key", "62348fe3-970d-43c6-9cc4-17e6bfb0ee74");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onSearch$Action, callContext, searchedItemArgIn);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

get onClickBack$Action() {if(!(this.hasOwnProperty("_onClickBack$Action"))) {
this._onClickBack$Action = function () {
return Promise.resolve();
};
}

return this._onClickBack$Action;
}set onClickBack$Action(value) {this._onClickBack$Action = value;
}

get onClickCountry$Action() {if(!(this.hasOwnProperty("_onClickCountry$Action"))) {
this._onClickCountry$Action = function () {
return Promise.resolve();
};
}

return this._onClickCountry$Action;
}set onClickCountry$Action(value) {this._onClickCountry$Action = value;
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
this._onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onReady$Action(callContext);

};
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
Controller.registerVariableGroupType("PartnersHub.RealAccountCreation.ResidenceSelector.OnReady$javaScript1JSResult", [{
name: "SortedResidenceList",
attrName: "sortedResidenceListOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("PartnersHub.RealAccountCreation.ResidenceSelector.OnSearch$vars", [{
name: "SearchedItemArg",
attrName: "searchedItemArgInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("PartnersHub.RealAccountCreation.ResidenceSelector.OnSearch$javaScript1JSResult", [{
name: "FilteredResidenceList",
attrName: "filteredResidenceListOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

}
return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.RealAccountCreation.ResidenceSelector.mvc$controller.OnReady.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const residenceList = JSON.parse($parameters.ResidenceList)
residenceList.residence_list.sort((a, _) => a.value === $parameters.CurrentResidence ? -1 : 1)
$parameters.SortedResidenceList = JSON.stringify(residenceList)

};
});

define("PartnersHub.RealAccountCreation.ResidenceSelector.mvc$controller.OnSearch.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const residenceListResponse = JSON.parse($parameters.ResidenceList)

const filteredResidenceListResponse = JSON.stringify({
    ...residenceListResponse,
    residence_list: residenceListResponse.filter(country => country["text"].toLowerCase().startsWith($parameters.SearchedResidence.toLowerCase()))
});

$parameters.FilteredResidenceList = filteredResidenceListResponse
};
});


define("PartnersHub.RealAccountCreation.ResidenceSelector.mvc$translationsResources.ar-001", [], function () {
return {
"Pq_nLXnMW0yDEm8xRV0uRg#Value": "الخدمات غير متاحة",
"+52G+A0_7Eq8rgCUpryQRA#ValueExpression.-1822469688.1": "بحث"
};
});

define("PartnersHub.RealAccountCreation.ResidenceSelector.mvc$translationsResources.de-DE", [], function () {
return {
"Pq_nLXnMW0yDEm8xRV0uRg#Value": "Dienste nicht verfügbar",
"+52G+A0_7Eq8rgCUpryQRA#ValueExpression.-1822469688.1": "Suche"
};
});

define("PartnersHub.RealAccountCreation.ResidenceSelector.mvc$translationsResources.es-ES", [], function () {
return {
"Pq_nLXnMW0yDEm8xRV0uRg#Value": "Servicios no disponibles",
"+52G+A0_7Eq8rgCUpryQRA#ValueExpression.-1822469688.1": "Buscar"
};
});

define("PartnersHub.RealAccountCreation.ResidenceSelector.mvc$translationsResources.fr-FR", [], function () {
return {
"Pq_nLXnMW0yDEm8xRV0uRg#Value": "Services non disponibles",
"+52G+A0_7Eq8rgCUpryQRA#ValueExpression.-1822469688.1": "Recherche"
};
});

define("PartnersHub.RealAccountCreation.ResidenceSelector.mvc$translationsResources.it-IT", [], function () {
return {
"Pq_nLXnMW0yDEm8xRV0uRg#Value": "Servizi non disponibili",
"+52G+A0_7Eq8rgCUpryQRA#ValueExpression.-1822469688.1": "Cerca"
};
});

define("PartnersHub.RealAccountCreation.ResidenceSelector.mvc$translationsResources.pl-PL", [], function () {
return {
"Pq_nLXnMW0yDEm8xRV0uRg#Value": "Usługi niedostępne",
"+52G+A0_7Eq8rgCUpryQRA#ValueExpression.-1822469688.1": "Szukaj"
};
});

define("PartnersHub.RealAccountCreation.ResidenceSelector.mvc$translationsResources.pt-PT", [], function () {
return {
"Pq_nLXnMW0yDEm8xRV0uRg#Value": "Serviços não disponíveis",
"+52G+A0_7Eq8rgCUpryQRA#ValueExpression.-1822469688.1": "Pesquisar"
};
});

define("PartnersHub.RealAccountCreation.ResidenceSelector.mvc$translationsResources.ru-RU", [], function () {
return {
"Pq_nLXnMW0yDEm8xRV0uRg#Value": "Услуги недоступны",
"+52G+A0_7Eq8rgCUpryQRA#ValueExpression.-1822469688.1": "Поиск"
};
});

define("PartnersHub.RealAccountCreation.ResidenceSelector.mvc$translationsResources", ["exports", "PartnersHub.RealAccountCreation.ResidenceSelector.mvc$translationsResources.ar-001", "PartnersHub.RealAccountCreation.ResidenceSelector.mvc$translationsResources.de-DE", "PartnersHub.RealAccountCreation.ResidenceSelector.mvc$translationsResources.es-ES", "PartnersHub.RealAccountCreation.ResidenceSelector.mvc$translationsResources.fr-FR", "PartnersHub.RealAccountCreation.ResidenceSelector.mvc$translationsResources.it-IT", "PartnersHub.RealAccountCreation.ResidenceSelector.mvc$translationsResources.pl-PL", "PartnersHub.RealAccountCreation.ResidenceSelector.mvc$translationsResources.pt-PT", "PartnersHub.RealAccountCreation.ResidenceSelector.mvc$translationsResources.ru-RU"], function (exports, PartnersHub_RealAccountCreation_ResidenceSelector_mvc_translationsResources_ar001, PartnersHub_RealAccountCreation_ResidenceSelector_mvc_translationsResources_deDE, PartnersHub_RealAccountCreation_ResidenceSelector_mvc_translationsResources_esES, PartnersHub_RealAccountCreation_ResidenceSelector_mvc_translationsResources_frFR, PartnersHub_RealAccountCreation_ResidenceSelector_mvc_translationsResources_itIT, PartnersHub_RealAccountCreation_ResidenceSelector_mvc_translationsResources_plPL, PartnersHub_RealAccountCreation_ResidenceSelector_mvc_translationsResources_ptPT, PartnersHub_RealAccountCreation_ResidenceSelector_mvc_translationsResources_ruRU) {
return {
"ar-001": {
"translations": PartnersHub_RealAccountCreation_ResidenceSelector_mvc_translationsResources_ar001,
"isRTL": true
},
"de-DE": {
"translations": PartnersHub_RealAccountCreation_ResidenceSelector_mvc_translationsResources_deDE,
"isRTL": false
},
"es-ES": {
"translations": PartnersHub_RealAccountCreation_ResidenceSelector_mvc_translationsResources_esES,
"isRTL": false
},
"fr-FR": {
"translations": PartnersHub_RealAccountCreation_ResidenceSelector_mvc_translationsResources_frFR,
"isRTL": false
},
"it-IT": {
"translations": PartnersHub_RealAccountCreation_ResidenceSelector_mvc_translationsResources_itIT,
"isRTL": false
},
"pl-PL": {
"translations": PartnersHub_RealAccountCreation_ResidenceSelector_mvc_translationsResources_plPL,
"isRTL": false
},
"pt-PT": {
"translations": PartnersHub_RealAccountCreation_ResidenceSelector_mvc_translationsResources_ptPT,
"isRTL": false
},
"ru-RU": {
"translations": PartnersHub_RealAccountCreation_ResidenceSelector_mvc_translationsResources_ruRU,
"isRTL": false
}
};
});

