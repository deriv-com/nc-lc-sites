define("PartnersHub.Common.NewHeaderTitleBlock.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.Common.TitleBlock.mvc$model"], function (OSRuntimeCore, PartnersHubModel, PartnersHub_Common_TitleBlock_mvcModel) {
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
Model._hasValidationWidgetsValue = PartnersHub_Common_TitleBlock_mvcModel.hasValidationWidgets;
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

define("PartnersHub.Common.NewHeaderTitleBlock.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Common.NewHeaderTitleBlock.mvc$model", "PartnersHub.Common.NewHeaderTitleBlock.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "PartnersHub.Common.TitleBlock.mvc$view"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_Common_NewHeaderTitleBlock_mvc_model, PartnersHub_Common_NewHeaderTitleBlock_mvc_controller, PartnersHubClientVariables, OSWidgets, PartnersHub_Common_TitleBlock_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "Common.NewHeaderTitleBlock"; }

        static getAttributes() { return {
codeFunction: "NewHeaderTitleBlock",
functionKey: "bae5d7e4-a65c-483b-8ecd-35cf70dbb6c0",
functionOwnerName: "PartnersHub",
functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Common.NewHeaderTitleBlock.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [PartnersHub_Common_TitleBlock_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Common_NewHeaderTitleBlock_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Common_NewHeaderTitleBlock_mvc_controller;
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
style: "ph-new-title-block-container",
visible: true,
_idProps: {
service: idService,
uuid: "0"
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
Title: model.variables.titleIn,
_titleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleInDataFetchStatus),
ShowCloseButton: model.variables.showCloseButtonIn,
_showCloseButtonInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._showCloseButtonInDataFetchStatus),
ShowPreviousButton: model.variables.showPreviousButtonIn,
_showPreviousButtonInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._showPreviousButtonInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
backButtonAction$Action: function () {
var eventHandlerContext = callContext.clone();
controller.onClickBackButton$Action(controller.callContext(eventHandlerContext));

;
},
closeButtonAction$Action: function () {
var eventHandlerContext = callContext.clone();
controller.onClickCloseButton$Action(controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "1",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})));
        }
    }

    return View;
});
define("PartnersHub.Common.NewHeaderTitleBlock.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Common.NewHeaderTitleBlock.mvc$translationsResources"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Common_NewHeaderTitleBlock_mvc_TranslationsResources) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, PartnersHub_Common_NewHeaderTitleBlock_mvc_TranslationsResources);
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

get onClickBackButton$Action() {if(!(this.hasOwnProperty("_onClickBackButton$Action"))) {
this._onClickBackButton$Action = function () {
return Promise.resolve();
};
}

return this._onClickBackButton$Action;
}set onClickBackButton$Action(value) {this._onClickBackButton$Action = value;
}

get onClickCloseButton$Action() {if(!(this.hasOwnProperty("_onClickCloseButton$Action"))) {
this._onClickCloseButton$Action = function () {
return Promise.resolve();
};
}

return this._onClickCloseButton$Action;
}set onClickCloseButton$Action(value) {this._onClickCloseButton$Action = value;
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


define("PartnersHub.Common.NewHeaderTitleBlock.mvc$translationsResources", ["exports"], function (exports) {
return {};
});

