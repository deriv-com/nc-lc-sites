define("PartnersHub.Common.TitleBlock.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "OutSystemsUI.Utilities.InlineSVG.mvc$model"], function (OSRuntimeCore, PartnersHubModel, OutSystemsUI_Utilities_InlineSVG_mvcModel) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Title", "titleIn", "Title", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ShowPreviousButton", "showPreviousButtonIn", "ShowPreviousButton", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_showPreviousButtonInDataFetchStatus", "_showPreviousButtonInDataFetchStatus", "_showPreviousButtonInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ShowCloseButton", "showCloseButtonIn", "ShowCloseButton", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("_showCloseButtonInDataFetchStatus", "_showCloseButtonInDataFetchStatus", "_showCloseButtonInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = OutSystemsUI_Utilities_InlineSVG_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
if("Title" in inputs) {
this.variables.titleIn = inputs.Title;
if("_titleInDataFetchStatus" in inputs) {
this.variables._titleInDataFetchStatus = inputs._titleInDataFetchStatus;
}

}

if("ShowPreviousButton" in inputs) {
this.variables.showPreviousButtonIn = inputs.ShowPreviousButton;
if("_showPreviousButtonInDataFetchStatus" in inputs) {
this.variables._showPreviousButtonInDataFetchStatus = inputs._showPreviousButtonInDataFetchStatus;
}

}

if("ShowCloseButton" in inputs) {
this.variables.showCloseButtonIn = inputs.ShowCloseButton;
if("_showCloseButtonInDataFetchStatus" in inputs) {
this.variables._showCloseButtonInDataFetchStatus = inputs._showCloseButtonInDataFetchStatus;
}

}

}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Common.TitleBlock.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Common.TitleBlock.mvc$model", "PartnersHub.Common.TitleBlock.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Utilities.InlineSVG.mvc$view"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_Common_TitleBlock_mvc_model, PartnersHub_Common_TitleBlock_mvc_controller, PartnersHubClientVariables, OSWidgets, OutSystemsUI_Utilities_InlineSVG_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "Common.TitleBlock"; }

        static getAttributes() { return {
codeFunction: "TitleBlock",
functionKey: "74ea9030-1992-4562-872b-8ca2e4a9e63c",
functionOwnerName: "PartnersHub",
functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Common.TitleBlock.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Utilities_InlineSVG_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Common_TitleBlock_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Common_TitleBlock_mvc_controller;
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
style: "custom-title-container",
visible: true,
_idProps: {
service: idService,
name: "Container"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.backButtonAction$Action(controller.callContext(eventHandlerContext));

;
}
},
visible: model.variables.showPreviousButtonIn,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._showPreviousButtonInDataFetchStatus)
}, React.createElement(OutSystemsUI_Utilities_InlineSVG_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
SVGCode: "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M0.125 6.65625L5.625 1.15625C5.8125 0.96875 6.15625 0.96875 6.34375 1.15625C6.53125 1.34375 6.53125 1.6875 6.34375 1.875L1.6875 6.5H13.5C13.75 6.5 14 6.75 14 7C14 7.28125 13.75 7.5 13.5 7.5H1.6875L6.34375 12.1562C6.53125 12.3438 6.53125 12.6875 6.34375 12.875C6.15625 13.0625 5.8125 13.0625 5.625 12.875L0.125 7.375C-0.0625 7.1875 -0.0625 6.84375 0.125 6.65625Z\" fill=\"#101213\"/>\r\n</svg>",
ExtendedClass: "custom-svg"
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
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "title",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.titleIn,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.closeButtonAction$Action(controller.callContext(eventHandlerContext));

;
}
},
extendedProperties: {
style: "cursor: pointer;"
},
visible: model.variables.showCloseButtonIn,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._showCloseButtonInDataFetchStatus)
}, React.createElement(OutSystemsUI_Utilities_InlineSVG_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
SVGCode: "<svg width=\"14\" height=\"13\" viewBox=\"0 0 14 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M12.1562 12.5938L7 7.39844L1.80469 12.5938C1.57031 12.8281 1.17969 12.8281 0.90625 12.5938C0.671875 12.3203 0.671875 11.9297 0.90625 11.6953L6.10156 6.5L0.945312 1.34375C0.671875 1.10938 0.671875 0.71875 0.945312 0.445312C1.17969 0.210938 1.57031 0.210938 1.80469 0.445312L7 5.64062L12.1562 0.445312C12.3906 0.210938 12.7812 0.210938 13.0547 0.445312C13.2891 0.71875 13.2891 1.10938 13.0547 1.34375L7.85938 6.5L13.0547 11.6953C13.2891 11.9297 13.2891 12.3203 13.0547 12.5938C12.7812 12.8281 12.3906 12.8281 12.1562 12.5938Z\" fill=\"#101213\"/>\r\n</svg>\r\n",
ExtendedClass: "custom-svg"
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
uuid: "6",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))));
        }
    }

    return View;
});
define("PartnersHub.Common.TitleBlock.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Common.TitleBlock.mvc$translationsResources"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Common_TitleBlock_mvc_TranslationsResources) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, PartnersHub_Common_TitleBlock_mvc_TranslationsResources);
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

get backButtonAction$Action() {if(!(this.hasOwnProperty("_backButtonAction$Action"))) {
this._backButtonAction$Action = function () {
return Promise.resolve();
};
}

return this._backButtonAction$Action;
}set backButtonAction$Action(value) {this._backButtonAction$Action = value;
}

get closeButtonAction$Action() {if(!(this.hasOwnProperty("_closeButtonAction$Action"))) {
this._closeButtonAction$Action = function () {
return Promise.resolve();
};
}

return this._closeButtonAction$Action;
}set closeButtonAction$Action(value) {this._closeButtonAction$Action = value;
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

}
return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});


define("PartnersHub.Common.TitleBlock.mvc$translationsResources", ["exports"], function (exports) {
return {};
});

