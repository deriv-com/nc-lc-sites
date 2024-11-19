define("PartnersHub.Events.EventListSection.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.Utilities.InlineSVG.mvc$model", "OutSystemsUI.Interaction.ScrollableArea.mvc$model", "PartnersHub.Events.EventList.mvc$model", "PartnersHub.model$ST_b779d4afe9996707919e755f24a47b3cStructure", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUI_Utilities_InlineSVG_mvcModel, OutSystemsUI_Interaction_ScrollableArea_mvcModel, PartnersHub_Events_EventList_mvcModel) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("NumberOfEvents", "numberOfEventsVar", "NumberOfEvents", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.ST_b779d4afe9996707919e755f24a47b3cStructure());
}, false, PartnersHubModel.ST_b779d4afe9996707919e755f24a47b3cStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new VariablesRecord(new VariablesRecord.RecordClass({
numberOfEventsVar: OS.DataTypes.ImmutableBase.getData(str)
}));
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
Model._hasValidationWidgetsValue = ((OutSystemsUI_Utilities_InlineSVG_mvcModel.hasValidationWidgets || OutSystemsUI_Interaction_ScrollableArea_mvcModel.hasValidationWidgets) || PartnersHub_Events_EventList_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Events.EventListSection.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Events.EventListSection.mvc$model", "PartnersHub.Events.EventListSection.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Utilities.InlineSVG.mvc$view", "OutSystemsUI.Interaction.ScrollableArea.mvc$view", "PartnersHub.Events.EventList.mvc$view", "PartnersHub.model$ST_b779d4afe9996707919e755f24a47b3cStructure", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_Events_EventListSection_mvc_model, PartnersHub_Events_EventListSection_mvc_controller, PartnersHubClientVariables, OSWidgets, OutSystemsUI_Utilities_InlineSVG_mvc_view, OutSystemsUI_Interaction_ScrollableArea_mvc_view, PartnersHub_Events_EventList_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "Events.EventListSection"; }

        static getAttributes() { return {
codeFunction: "EventListSection",
functionKey: "da2835a1-a2e9-4364-917e-3fb7ac76ea3d",
functionOwnerName: "PartnersHub",
functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Events.EventListSection.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Utilities_InlineSVG_mvc_view, OutSystemsUI_Interaction_ScrollableArea_mvc_view, PartnersHub_Events_EventList_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Events_EventListSection_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Events_EventListSection_mvc_controller;
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
style: "display: flex; flex-direction: column; gap: 16px;"
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
style: "align-items: center; display: flex; gap: 8px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_Utilities_InlineSVG_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
SVGCode: "<svg width=\"23\" height=\"24\" viewBox=\"0 0 23 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<g clip-path=\"url(#clip0_18405_12110)\">\r\n<path d=\"M6.625 2.5C6.9375 2.5 7.25 2.8125 7.25 3.125V5H14.75V3.125C14.75 2.8125 15.0234 2.5 15.375 2.5C15.6875 2.5 16 2.8125 16 3.125V5H17.25C18.6172 5 19.75 6.13281 19.75 7.5V8.75V10V20C19.75 21.4062 18.6172 22.5 17.25 22.5H4.75C3.34375 22.5 2.25 21.4062 2.25 20V10V8.75V7.5C2.25 6.13281 3.34375 5 4.75 5H6V3.125C6 2.8125 6.27344 2.5 6.625 2.5ZM18.5 10H3.5V20C3.5 20.7031 4.04688 21.25 4.75 21.25H17.25C17.9141 21.25 18.5 20.7031 18.5 20V10ZM17.25 6.25H4.75C4.04688 6.25 3.5 6.83594 3.5 7.5V8.75H18.5V7.5C18.5 6.83594 17.9141 6.25 17.25 6.25Z\" fill=\"#101213\"/>\r\n</g>\r\n<defs>\r\n<clipPath id=\"clip0_18405_12110\">\r\n<rect width=\"22.3448\" height=\"24\" fill=\"white\"/>\r\n</clipPath>\r\n</defs>\r\n</svg>"
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
uuid: "2",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
"OSTagName": "h5",
style: "flex-grow: 1; font-size: 20px; font-style: normal; font-weight: 700; line-height: 30px;"
},
style: "container-title",
text: [$text(getTranslation("JTUTHDwmmke37+oqdpbEoQ#Value", "Upcoming events"))],
_idProps: {
service: idService,
name: "Upcomingevents"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.seeallOnClick$Action(controller.callContext(eventHandlerContext));

;
},
visible: (model.variables.numberOfEventsVar.countNumberAttr > 3),
_idProps: {
service: idService,
name: "SeeAll"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "color: var(--Neutral-Neutral-10, #101213); font-size: 14px; font-weight: 400; line-height: 22px; text-decoration-line: underline;"
},
value: (((OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1", "See all") + "(") + (model.variables.numberOfEventsVar.countNumberAttr).toString()) + ")"),
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_Interaction_ScrollableArea_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
ExtendedClass: "ph-scrollable-events",
Orientation: PartnersHubModel.staticEntities.orientation.horizontal
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
uuid: "7",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(PartnersHub_Events_EventList_mvc_view, {
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
uuid: "8",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
}))));
        }
    }

    return View;
});
define("PartnersHub.Events.EventListSection.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Events.EventListSection.mvc$translationsResources", "PartnersHub.model$ST_b779d4afe9996707919e755f24a47b3cStructure", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Events_EventListSection_mvc_TranslationsResources) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, PartnersHub_Events_EventListSection_mvc_TranslationsResources);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = true;
}

// Server Actions - Methods
get countEvent$ServerAction() {if(!(this.hasOwnProperty("_countEvent$ServerAction"))) {
this._countEvent$ServerAction = function (showUnpublishEventIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("CountEvent", function (span) {
if(span) {
span.setAttribute("code.function", "CountEvent");
span.setAttribute("outsystems.function.key", "91a14e6c-7235-4a96-b4c1-a3167a52ecd7");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
}

return OS.Flow.tryFinally(function () {
var inputs = {
ShowUnpublishEvent: OS.DataConversion.ServerDataConverter.to(showUnpublishEventIn, OS.DataTypes.DataTypes.Boolean)
};
return controller.callServerAction("CountEvent", "screenservices/PartnersHub/Events/EventListSection/ActionCountEvent", "zV8oTZGzQLPEcc26KEGkxw", inputs, controller.callContext(callContext), undefined, undefined, true).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("PartnersHub.Events.EventListSection$ActionCountEvent"))();
executeServerActionResult.numberOfRowOut = OS.DataConversion.ServerDataConverter.from(outputs.NumberOfRow, PartnersHubModel.ST_b779d4afe9996707919e755f24a47b3cStructure);
return executeServerActionResult;
});
}, function () {
if(span) {
span.end();
}

});
}, 0);
};
}

return this._countEvent$ServerAction;
}set countEvent$ServerAction(value) {this._countEvent$ServerAction = value;
}


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
span.setAttribute("outsystems.function.key", "86118444-f0c3-4f79-86cd-41881b142cb4");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var countEventVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: CountEvent
model.flush();
return controller.countEvent$ServerAction(PartnersHubClientVariables.getshowUnpublishEventFF(), callContext).then(function (value) {
countEventVar.value = value;
}).then(function () {
// NumberOfEvents = CountEvent.NumberOfRow
model.variables.numberOfEventsVar = countEventVar.value.numberOfRowOut;
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

get _seeallOnClick$Action() {if(!(this.hasOwnProperty("__seeallOnClick$Action"))) {
this.__seeallOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("SeeallOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "SeeallOnClick");
span.setAttribute("outsystems.function.key", "aaf4a9a3-6859-4d89-baf7-bd1c0d7ab4d6");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("SeeallOnClick");
callContext = controller.callContext(callContext);
// Execute Action: RudderstackTrackEvent
PartnersHubController.default.rudderstackTrackEvent$Action(function () {
var rec = new PartnersHubModel.ST_23ff1d290ec4691b1c668ad437100cd0Structure();
rec.actionAttr = "click_cta";
rec.cta_nameAttr = "See all";
rec.cta_placementAttr = "see all in event section";
return rec;
}(), "ce_partnershub_form", callContext);
// Destination: /PartnersHub/AllEvent
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "AllEvent", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__seeallOnClick$Action;
}set _seeallOnClick$Action(value) {this.__seeallOnClick$Action = value;
}


onReady$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnReady__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "86118444-f0c3-4f79-86cd-41881b142cb4");
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

seeallOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("SeeallOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "SeeallOnClick");
span.setAttribute("outsystems.function.key", "aaf4a9a3-6859-4d89-baf7-bd1c0d7ab4d6");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._seeallOnClick$Action, callContext);
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
Controller.registerVariableGroupType("PartnersHub.Events.EventListSection$ActionCountEvent", [{
name: "NumberOfRow",
attrName: "numberOfRowOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new PartnersHubModel.ST_b779d4afe9996707919e755f24a47b3cStructure();
},
complexType: PartnersHubModel.ST_b779d4afe9996707919e755f24a47b3cStructure
}]);

// Client Actions - Variables

}
return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});


define("PartnersHub.Events.EventListSection.mvc$translationsResources.ar-001", [], function () {
return {
"tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1": "شاهد الكل",
"JTUTHDwmmke37+oqdpbEoQ#Value": "يمكنك كسب عمولات من"
};
});

define("PartnersHub.Events.EventListSection.mvc$translationsResources.de-DE", [], function () {
return {
"tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1": "Alle anzeigen",
"JTUTHDwmmke37+oqdpbEoQ#Value": "Sie können Provisionen von verdienen"
};
});

define("PartnersHub.Events.EventListSection.mvc$translationsResources.es-ES", [], function () {
return {
"tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1": "Ver todo",
"JTUTHDwmmke37+oqdpbEoQ#Value": "Puedes ganar comisiones de"
};
});

define("PartnersHub.Events.EventListSection.mvc$translationsResources.fr-FR", [], function () {
return {
"tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1": "Voir tout",
"JTUTHDwmmke37+oqdpbEoQ#Value": "Vous pouvez gagner des commissions de"
};
});

define("PartnersHub.Events.EventListSection.mvc$translationsResources.it-IT", [], function () {
return {
"tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1": "Vedi tutto",
"JTUTHDwmmke37+oqdpbEoQ#Value": "Puoi guadagnare commissioni da"
};
});

define("PartnersHub.Events.EventListSection.mvc$translationsResources.pl-PL", [], function () {
return {
"tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1": "Zobacz wszystko",
"JTUTHDwmmke37+oqdpbEoQ#Value": "Możesz zarabiać prowizje z"
};
});

define("PartnersHub.Events.EventListSection.mvc$translationsResources.pt-PT", [], function () {
return {
"tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1": "Ver tudo",
"JTUTHDwmmke37+oqdpbEoQ#Value": "Você pode ganhar comissões de"
};
});

define("PartnersHub.Events.EventListSection.mvc$translationsResources.ru-RU", [], function () {
return {
"tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1": "Показать все",
"JTUTHDwmmke37+oqdpbEoQ#Value": "Вы можете зарабатывать комиссионные от"
};
});

define("PartnersHub.Events.EventListSection.mvc$translationsResources", ["exports", "PartnersHub.Events.EventListSection.mvc$translationsResources.ar-001", "PartnersHub.Events.EventListSection.mvc$translationsResources.de-DE", "PartnersHub.Events.EventListSection.mvc$translationsResources.es-ES", "PartnersHub.Events.EventListSection.mvc$translationsResources.fr-FR", "PartnersHub.Events.EventListSection.mvc$translationsResources.it-IT", "PartnersHub.Events.EventListSection.mvc$translationsResources.pl-PL", "PartnersHub.Events.EventListSection.mvc$translationsResources.pt-PT", "PartnersHub.Events.EventListSection.mvc$translationsResources.ru-RU"], function (exports, PartnersHub_Events_EventListSection_mvc_translationsResources_ar001, PartnersHub_Events_EventListSection_mvc_translationsResources_deDE, PartnersHub_Events_EventListSection_mvc_translationsResources_esES, PartnersHub_Events_EventListSection_mvc_translationsResources_frFR, PartnersHub_Events_EventListSection_mvc_translationsResources_itIT, PartnersHub_Events_EventListSection_mvc_translationsResources_plPL, PartnersHub_Events_EventListSection_mvc_translationsResources_ptPT, PartnersHub_Events_EventListSection_mvc_translationsResources_ruRU) {
return {
"ar-001": {
"translations": PartnersHub_Events_EventListSection_mvc_translationsResources_ar001,
"isRTL": true
},
"de-DE": {
"translations": PartnersHub_Events_EventListSection_mvc_translationsResources_deDE,
"isRTL": false
},
"es-ES": {
"translations": PartnersHub_Events_EventListSection_mvc_translationsResources_esES,
"isRTL": false
},
"fr-FR": {
"translations": PartnersHub_Events_EventListSection_mvc_translationsResources_frFR,
"isRTL": false
},
"it-IT": {
"translations": PartnersHub_Events_EventListSection_mvc_translationsResources_itIT,
"isRTL": false
},
"pl-PL": {
"translations": PartnersHub_Events_EventListSection_mvc_translationsResources_plPL,
"isRTL": false
},
"pt-PT": {
"translations": PartnersHub_Events_EventListSection_mvc_translationsResources_ptPT,
"isRTL": false
},
"ru-RU": {
"translations": PartnersHub_Events_EventListSection_mvc_translationsResources_ruRU,
"isRTL": false
}
};
});

