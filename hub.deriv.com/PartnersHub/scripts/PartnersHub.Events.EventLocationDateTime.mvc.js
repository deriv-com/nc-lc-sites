define("PartnersHub.Events.EventLocationDateTime.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "OutSystemsUI.Utilities.InlineSVG.mvc$model", "PartnersHub.model$ST_9f1e67525baf02c5f10f80cc2f462aacStructure"], function (OSRuntimeCore, PartnersHubModel, OutSystemsUI_Utilities_InlineSVG_mvcModel) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Data", "dataIn", "Data", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.ST_9f1e67525baf02c5f10f80cc2f462aacStructure());
}, false, PartnersHubModel.ST_9f1e67525baf02c5f10f80cc2f462aacStructure), 
this.attr("_dataInDataFetchStatus", "_dataInDataFetchStatus", "_dataInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("Data" in inputs) {
this.variables.dataIn = inputs.Data;
if("_dataInDataFetchStatus" in inputs) {
this.variables._dataInDataFetchStatus = inputs._dataInDataFetchStatus;
}

}

}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Events.EventLocationDateTime.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Events.EventLocationDateTime.mvc$model", "PartnersHub.Events.EventLocationDateTime.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Utilities.InlineSVG.mvc$view", "PartnersHub.model$ST_9f1e67525baf02c5f10f80cc2f462aacStructure"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_Events_EventLocationDateTime_mvc_model, PartnersHub_Events_EventLocationDateTime_mvc_controller, PartnersHubClientVariables, OSWidgets, OutSystemsUI_Utilities_InlineSVG_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "Events.EventLocationDateTime"; }

        static getAttributes() { return {
codeFunction: "EventLocationDateTime",
functionKey: "78424b30-bacc-4809-bfb6-fcbbfcf3e00e",
functionOwnerName: "PartnersHub",
functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Events.EventLocationDateTime.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Utilities_InlineSVG_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Events_EventLocationDateTime_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Events_EventLocationDateTime_mvc_controller;
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
style: "ph-location-block-container",
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
SVGCode: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M12.7188 19.625C12.3438 20.0938 11.625 20.0938 11.25 19.625C9.65625 17.5938 6 12.75 6 10C6 6.6875 8.6875 4 12 4C15.3125 4 18 6.6875 18 10C18 12.75 14.3438 17.5938 12.7188 19.625ZM12 8C11.2812 8 10.625 8.40625 10.25 9C9.90625 9.625 9.90625 10.4062 10.25 11C10.625 11.625 11.2812 12 12 12C12.6875 12 13.3438 11.625 13.7188 11C14.0625 10.4062 14.0625 9.625 13.7188 9C13.3438 8.40625 12.6875 8 12 8Z\" fill=\"#101213\"/>\r\n</svg>\r\n",
ExtendedClass: "display-flex justify-content-center"
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
}), React.createElement(OSWidgets.Expression, {
style: "ph-location-label",
value: model.variables.dataIn.locationAttr,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._dataInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "align-items: center; display: flex; gap: 8px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "4"
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
ExtendedClass: "display-flex justify-content-center",
SVGCode: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M8 5C8 4.46875 8.4375 4 9 4C9.53125 4 10 4.46875 10 5V6H14V5C14 4.46875 14.4375 4 15 4C15.5312 4 16 4.46875 16 5V6H17.5C18.3125 6 19 6.6875 19 7.5V9H5V7.5C5 6.6875 5.65625 6 6.5 6H8V5ZM19 10V18.5C19 19.3438 18.3125 20 17.5 20H6.5C5.65625 20 5 19.3438 5 18.5V10H19Z\" fill=\"#101213\"/>\r\n</svg>"
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
uuid: "5",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Expression, {
style: "ph-location-label",
value: model.getCachedValue(idService.getId("iTLus9UpD0awN5y_gleOLg.Value"), function () {
return OS.BuiltinFunctions.formatDateTime(model.variables.dataIn.dateTimeAttr, "dddd, MMMM d");
}, function () {
return model.variables.dataIn.dateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._dataInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "align-items: center; display: flex; gap: 8px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "7"
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
ExtendedClass: "display-flex justify-content-center",
SVGCode: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M12 4C14.8438 4 17.4688 5.53125 18.9062 8C20.3438 10.5 20.3438 13.5312 18.9062 16C17.4688 18.5 14.8438 20 12 20C9.125 20 6.5 18.5 5.0625 16C3.625 13.5312 3.625 10.5 5.0625 8C6.5 5.53125 9.125 4 12 4ZM11.25 7.75V12C11.25 12.4375 11.5625 12.75 12 12.75H15.25C15.6562 12.75 16 12.4375 16 12C16 11.5938 15.6562 11.25 15.25 11.25H12.75V7.75C12.75 7.34375 12.4062 7 12 7C11.5625 7 11.25 7.34375 11.25 7.75Z\" fill=\"#101213\"/>\r\n</svg>\r\n"
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Expression, {
style: "ph-location-label",
value: model.getCachedValue(idService.getId("wTn8fIUgQU+o5HcvsRAdGg.Value"), function () {
return ((OS.BuiltinFunctions.formatDateTime(model.variables.dataIn.dateTimeAttr, "HH:mm") + " ") + model.variables.dataIn.timeZoneAttr);
}, function () {
return model.variables.dataIn.dateTimeAttr;
}, function () {
return model.variables.dataIn.timeZoneAttr;
}),
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._dataInDataFetchStatus)
}))));
        }
    }

    return View;
});
define("PartnersHub.Events.EventLocationDateTime.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Events.EventLocationDateTime.mvc$translationsResources", "PartnersHub.model$ST_9f1e67525baf02c5f10f80cc2f462aacStructure"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Events_EventLocationDateTime_mvc_TranslationsResources) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, PartnersHub_Events_EventLocationDateTime_mvc_TranslationsResources);
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


define("PartnersHub.Events.EventLocationDateTime.mvc$translationsResources", ["exports"], function (exports) {
return {};
});

