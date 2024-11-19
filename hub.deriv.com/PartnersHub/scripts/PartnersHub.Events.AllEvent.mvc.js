define("PartnersHub.Events.AllEvent.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.Layouts.LayoutContainer.mvc$model", "OutSystemsUI.Adaptive.DisplayOnDevice.mvc$model", "PartnersHub.Common.Headers.mvc$model", "PartnersHub.Common.NewHeaderTitleBlock.mvc$model", "PartnersHub.Common.TitleBlock.mvc$model", "PartnersHub.Events.EventList.mvc$model"], function (OSRuntimeCore, PartnersHubModel, PartnersHub_Layouts_LayoutContainer_mvcModel, OutSystemsUI_Adaptive_DisplayOnDevice_mvcModel, PartnersHub_Common_Headers_mvcModel, PartnersHub_Common_NewHeaderTitleBlock_mvcModel, PartnersHub_Common_TitleBlock_mvcModel, PartnersHub_Events_EventList_mvcModel) {
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
Model._hasValidationWidgetsValue = (((((PartnersHub_Layouts_LayoutContainer_mvcModel.hasValidationWidgets || OutSystemsUI_Adaptive_DisplayOnDevice_mvcModel.hasValidationWidgets) || PartnersHub_Common_Headers_mvcModel.hasValidationWidgets) || PartnersHub_Common_NewHeaderTitleBlock_mvcModel.hasValidationWidgets) || PartnersHub_Common_TitleBlock_mvcModel.hasValidationWidgets) || PartnersHub_Events_EventList_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Events.AllEvent.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Events.AllEvent.mvc$model", "PartnersHub.Events.AllEvent.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Layouts.LayoutContainer.mvc$view", "@outsystems/runtime-widgets-js", "OutSystemsUI.Adaptive.DisplayOnDevice.mvc$view", "PartnersHub.Common.Headers.mvc$view", "PartnersHub.Common.NewHeaderTitleBlock.mvc$view", "PartnersHub.Common.TitleBlock.mvc$view", "PartnersHub.Events.EventList.mvc$view"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_Events_AllEvent_mvc_model, PartnersHub_Events_AllEvent_mvc_controller, PartnersHubClientVariables, PartnersHub_Layouts_LayoutContainer_mvc_view, OSWidgets, OutSystemsUI_Adaptive_DisplayOnDevice_mvc_view, PartnersHub_Common_Headers_mvc_view, PartnersHub_Common_NewHeaderTitleBlock_mvc_view, PartnersHub_Common_TitleBlock_mvc_view, PartnersHub_Events_EventList_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() { return "Events.AllEvent"; }

        static getAttributes() { return {
codeFunction: "AllEvent",
functionKey: "3fa319a3-f0ca-4817-b843-e4df4ce2b2df",
functionOwnerName: "PartnersHub",
functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.Events.AllEvent.css", "css/PartnersHub.PHubTest.extra.css"];
        }

        static getJsDependencies() {
            return ["scripts/PartnersHub.DerivAnalytics.js"];
        }

        static getBlocks() {
            return [PartnersHub_Layouts_LayoutContainer_mvc_view, OutSystemsUI_Adaptive_DisplayOnDevice_mvc_view, PartnersHub_Common_Headers_mvc_view, PartnersHub_Common_NewHeaderTitleBlock_mvc_view, PartnersHub_Common_TitleBlock_mvc_view, PartnersHub_Events_EventList_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Events_AllEvent_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Events_AllEvent_mvc_controller;
        }

        get title() {
            

            return OSView.BaseView.BaseWebScreen.getTranslation("oxmjP8rwF0i4Q+TfTOKy3w#Title", "AllEvent");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(PartnersHub_Layouts_LayoutContainer_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
StickyFooter: true
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
header: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUI_Adaptive_DisplayOnDevice_mvc_view, {
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
onDesktop: new PlaceholderContent(function () {
return [React.createElement(PartnersHub_Common_Headers_mvc_view, {
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
onTablet: new PlaceholderContent(function () {
return [React.createElement(PartnersHub_Common_NewHeaderTitleBlock_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Title: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("wgaot0vCu0ycXS3erNt_Qw#Value.-1578876803.1", "Upcoming events"),
ShowCloseButton: false,
ShowPreviousButton: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClickBackButton$Action: function () {
var eventHandlerContext = callContext.clone();
controller.titleBlockBackButtonAction$Action(controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "3",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
onPhone: new PlaceholderContent(function () {
return [React.createElement(PartnersHub_Common_NewHeaderTitleBlock_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
ShowCloseButton: false,
ShowPreviousButton: true,
Title: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("cCoC_ME_P0+J45JhXbasig#Value.-1578876803.1", "Upcoming events")
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClickBackButton$Action: function () {
var eventHandlerContext = callContext.clone();
controller.titleBlockBackButtonAction$Action(controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "4",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
})];
}),
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column gap-m",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ph-event-details-header-block",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(PartnersHub_Common_TitleBlock_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Title: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("muwNnIDZBke8+ajTN9r64w#Value.-1578876803.1", "Upcoming events"),
ShowCloseButton: false,
ShowPreviousButton: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
backButtonAction$Action: function () {
var eventHandlerContext = callContext.clone();
controller.titleBlockBackButtonAction$Action(controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "7",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(PartnersHub_Events_EventList_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
MaxEvents: 50
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
uuid: "8",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}),
footer: PlaceholderContent.Empty
},
_dependencies: []
}));
        }
    }

    return View;
});
define("PartnersHub.Events.AllEvent.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Events.AllEvent.mvc$translationsResources", "PartnersHub.Events.controller"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Events_AllEvent_mvc_TranslationsResources, PartnersHub_EventsController) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, PartnersHub_Events_AllEvent_mvc_TranslationsResources);
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
get _titleBlockBackButtonAction$Action() {if(!(this.hasOwnProperty("__titleBlockBackButtonAction$Action"))) {
this.__titleBlockBackButtonAction$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("TitleBlockBackButtonAction", function (span) {
if(span) {
span.setAttribute("code.function", "TitleBlockBackButtonAction");
span.setAttribute("outsystems.function.key", "551ed8f2-9780-4229-8daf-b15bf3bbf681");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("TitleBlockBackButtonAction");
callContext = controller.callContext(callContext);
// Destination: /PartnersHub/PartnersHubDashboard
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "PartnersHubDashboard", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.None), callContext, true);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__titleBlockBackButtonAction$Action;
}set _titleBlockBackButtonAction$Action(value) {this.__titleBlockBackButtonAction$Action = value;
}


titleBlockBackButtonAction$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("TitleBlockBackButtonAction__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "TitleBlockBackButtonAction");
span.setAttribute("outsystems.function.key", "551ed8f2-9780-4229-8daf-b15bf3bbf681");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._titleBlockBackButtonAction$Action, callContext);
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
return PartnersHub_EventsController.default.handleError(ex, this.callContext());
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


define("PartnersHub.Events.AllEvent.mvc$translationsResources.ar-001", [], function () {
return {
"muwNnIDZBke8+ajTN9r64w#Value.-1578876803.1": "يمكنك كسب عمولات من",
"cCoC_ME_P0+J45JhXbasig#Value.-1578876803.1": "يمكنك كسب عمولات من",
"wgaot0vCu0ycXS3erNt_Qw#Value.-1578876803.1": "يمكنك كسب عمولات من"
};
});

define("PartnersHub.Events.AllEvent.mvc$translationsResources.de-DE", [], function () {
return {
"muwNnIDZBke8+ajTN9r64w#Value.-1578876803.1": "Sie können Provisionen von verdienen",
"cCoC_ME_P0+J45JhXbasig#Value.-1578876803.1": "Sie können Provisionen von verdienen",
"wgaot0vCu0ycXS3erNt_Qw#Value.-1578876803.1": "Sie können Provisionen von verdienen"
};
});

define("PartnersHub.Events.AllEvent.mvc$translationsResources.es-ES", [], function () {
return {
"muwNnIDZBke8+ajTN9r64w#Value.-1578876803.1": "Puedes ganar comisiones de",
"cCoC_ME_P0+J45JhXbasig#Value.-1578876803.1": "Puedes ganar comisiones de",
"wgaot0vCu0ycXS3erNt_Qw#Value.-1578876803.1": "Puedes ganar comisiones de"
};
});

define("PartnersHub.Events.AllEvent.mvc$translationsResources.fr-FR", [], function () {
return {
"muwNnIDZBke8+ajTN9r64w#Value.-1578876803.1": "Vous pouvez gagner des commissions de",
"cCoC_ME_P0+J45JhXbasig#Value.-1578876803.1": "Vous pouvez gagner des commissions de",
"wgaot0vCu0ycXS3erNt_Qw#Value.-1578876803.1": "Vous pouvez gagner des commissions de"
};
});

define("PartnersHub.Events.AllEvent.mvc$translationsResources.it-IT", [], function () {
return {
"muwNnIDZBke8+ajTN9r64w#Value.-1578876803.1": "Puoi guadagnare commissioni da",
"cCoC_ME_P0+J45JhXbasig#Value.-1578876803.1": "Puoi guadagnare commissioni da",
"wgaot0vCu0ycXS3erNt_Qw#Value.-1578876803.1": "Puoi guadagnare commissioni da"
};
});

define("PartnersHub.Events.AllEvent.mvc$translationsResources.pl-PL", [], function () {
return {
"muwNnIDZBke8+ajTN9r64w#Value.-1578876803.1": "Możesz zarabiać prowizje z",
"cCoC_ME_P0+J45JhXbasig#Value.-1578876803.1": "Możesz zarabiać prowizje z",
"wgaot0vCu0ycXS3erNt_Qw#Value.-1578876803.1": "Możesz zarabiać prowizje z"
};
});

define("PartnersHub.Events.AllEvent.mvc$translationsResources.pt-PT", [], function () {
return {
"muwNnIDZBke8+ajTN9r64w#Value.-1578876803.1": "Você pode ganhar comissões de",
"cCoC_ME_P0+J45JhXbasig#Value.-1578876803.1": "Você pode ganhar comissões de",
"wgaot0vCu0ycXS3erNt_Qw#Value.-1578876803.1": "Você pode ganhar comissões de"
};
});

define("PartnersHub.Events.AllEvent.mvc$translationsResources.ru-RU", [], function () {
return {
"muwNnIDZBke8+ajTN9r64w#Value.-1578876803.1": "Вы можете зарабатывать комиссионные от",
"cCoC_ME_P0+J45JhXbasig#Value.-1578876803.1": "Вы можете зарабатывать комиссионные от",
"wgaot0vCu0ycXS3erNt_Qw#Value.-1578876803.1": "Вы можете зарабатывать комиссионные от"
};
});

define("PartnersHub.Events.AllEvent.mvc$translationsResources", ["exports", "PartnersHub.Events.AllEvent.mvc$translationsResources.ar-001", "PartnersHub.Events.AllEvent.mvc$translationsResources.de-DE", "PartnersHub.Events.AllEvent.mvc$translationsResources.es-ES", "PartnersHub.Events.AllEvent.mvc$translationsResources.fr-FR", "PartnersHub.Events.AllEvent.mvc$translationsResources.it-IT", "PartnersHub.Events.AllEvent.mvc$translationsResources.pl-PL", "PartnersHub.Events.AllEvent.mvc$translationsResources.pt-PT", "PartnersHub.Events.AllEvent.mvc$translationsResources.ru-RU"], function (exports, PartnersHub_Events_AllEvent_mvc_translationsResources_ar001, PartnersHub_Events_AllEvent_mvc_translationsResources_deDE, PartnersHub_Events_AllEvent_mvc_translationsResources_esES, PartnersHub_Events_AllEvent_mvc_translationsResources_frFR, PartnersHub_Events_AllEvent_mvc_translationsResources_itIT, PartnersHub_Events_AllEvent_mvc_translationsResources_plPL, PartnersHub_Events_AllEvent_mvc_translationsResources_ptPT, PartnersHub_Events_AllEvent_mvc_translationsResources_ruRU) {
return {
"ar-001": {
"translations": PartnersHub_Events_AllEvent_mvc_translationsResources_ar001,
"isRTL": true
},
"de-DE": {
"translations": PartnersHub_Events_AllEvent_mvc_translationsResources_deDE,
"isRTL": false
},
"es-ES": {
"translations": PartnersHub_Events_AllEvent_mvc_translationsResources_esES,
"isRTL": false
},
"fr-FR": {
"translations": PartnersHub_Events_AllEvent_mvc_translationsResources_frFR,
"isRTL": false
},
"it-IT": {
"translations": PartnersHub_Events_AllEvent_mvc_translationsResources_itIT,
"isRTL": false
},
"pl-PL": {
"translations": PartnersHub_Events_AllEvent_mvc_translationsResources_plPL,
"isRTL": false
},
"pt-PT": {
"translations": PartnersHub_Events_AllEvent_mvc_translationsResources_ptPT,
"isRTL": false
},
"ru-RU": {
"translations": PartnersHub_Events_AllEvent_mvc_translationsResources_ruRU,
"isRTL": false
}
};
});

