define("OutSystemsUI.Interaction.ScrollableArea.mvc$model", ["@outsystems/runtime-core-js", "OutSystemsUI.model"], function (OSRuntimeCore, OutSystemsUIModel) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Orientation", "orientationIn", "Orientation", true, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUIModel.staticEntities.orientation.horizontal;
}, false), 
this.attr("_orientationInDataFetchStatus", "_orientationInDataFetchStatus", "_orientationInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Height", "heightIn", "Height", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_heightInDataFetchStatus", "_heightInDataFetchStatus", "_heightInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Width", "widthIn", "Width", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_widthInDataFetchStatus", "_widthInDataFetchStatus", "_widthInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ScrollbarStyle", "scrollbarStyleIn", "ScrollbarStyle", true, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUIModel.staticEntities.scrollbarStyle.default;
}, false), 
this.attr("_scrollbarStyleInDataFetchStatus", "_scrollbarStyleInDataFetchStatus", "_scrollbarStyleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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

static get hasValidationWidgets() {return false;
}
setInputs(inputs) {
if("Orientation" in inputs) {
this.variables.orientationIn = inputs.Orientation;
if("_orientationInDataFetchStatus" in inputs) {
this.variables._orientationInDataFetchStatus = inputs._orientationInDataFetchStatus;
}

}

if("Height" in inputs) {
this.variables.heightIn = inputs.Height;
if("_heightInDataFetchStatus" in inputs) {
this.variables._heightInDataFetchStatus = inputs._heightInDataFetchStatus;
}

}

if("Width" in inputs) {
this.variables.widthIn = inputs.Width;
if("_widthInDataFetchStatus" in inputs) {
this.variables._widthInDataFetchStatus = inputs._widthInDataFetchStatus;
}

}

if("ScrollbarStyle" in inputs) {
this.variables.scrollbarStyleIn = inputs.ScrollbarStyle;
if("_scrollbarStyleInDataFetchStatus" in inputs) {
this.variables._scrollbarStyleInDataFetchStatus = inputs._scrollbarStyleInDataFetchStatus;
}

}

if("ExtendedClass" in inputs) {
this.variables.extendedClassIn = inputs.ExtendedClass;
if("_extendedClassInDataFetchStatus" in inputs) {
this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
}

}

}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("OutSystemsUI.Interaction.ScrollableArea.mvc$view", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "OutSystemsUI.Interaction.ScrollableArea.mvc$model", "OutSystemsUI.Interaction.ScrollableArea.mvc$controller", "@outsystems/runtime-widgets-js"], function (OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Interaction_ScrollableArea_mvc_model, OutSystemsUI_Interaction_ScrollableArea_mvc_controller, OSWidgets) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "Interaction.ScrollableArea"; }

        static getAttributes() { return {
codeFunction: "ScrollableArea",
functionKey: "52c33e9f-72b4-4d92-9f0c-01c51e409a2b",
functionOwnerName: "OutSystemsUI",
functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return OutSystemsUI_Interaction_ScrollableArea_mvc_model;
        }

        get controllerFactory() {
            return OutSystemsUI_Interaction_ScrollableArea_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.content,
gridProperties: {
classes: "OSInline"
},
style: model.getCachedValue(idService.getId("Content.Style"), function () {
return (((("scrollable-area-content " + model.variables.orientationIn) + "-scroll ") + (((model.variables.scrollbarStyleIn === OutSystemsUIModel.staticEntities.scrollbarStyle.compact)) ? ("compact") : ((((model.variables.scrollbarStyleIn === OutSystemsUIModel.staticEntities.scrollbarStyle.none)) ? ("none") : (""))))) + (((model.variables.extendedClassIn === "")) ? ("") : ((" " + model.variables.extendedClassIn))));
}, function () {
return model.variables.orientationIn;
}, function () {
return model.variables.scrollbarStyleIn;
}, function () {
return model.variables.extendedClassIn;
}),
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._orientationInDataFetchStatus, model.variables._scrollbarStyleInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
}));
        }
    }

    return View;
});
define("OutSystemsUI.Interaction.ScrollableArea.mvc$controller", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Interaction.ScrollableArea.mvc$translationsResources", "OutSystemsUI.Interaction.ScrollableArea.mvc$controller.OnReady.SetClassesJS"], function (OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Interaction_ScrollableArea_mvc_TranslationsResources, OutSystemsUI_Interaction_ScrollableArea_mvc_controller_OnReady_SetClassesJS) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, OutSystemsUI_Interaction_ScrollableArea_mvc_TranslationsResources);
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
get _onParametersChanged$Action() {if(!(this.hasOwnProperty("__onParametersChanged$Action"))) {
this.__onParametersChanged$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnParametersChanged", function (span) {
if(span) {
span.setAttribute("code.function", "OnParametersChanged");
span.setAttribute("outsystems.function.key", "78c192e4-849b-47de-b80d-468eddc930ca");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
// Execute Action: SetClasses
controller._onReady$Action(callContext);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onParametersChanged$Action;
}set _onParametersChanged$Action(value) {this.__onParametersChanged$Action = value;
}

get _onReady$Action() {if(!(this.hasOwnProperty("__onReady$Action"))) {
this.__onReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnReady", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "a6ace38b-3765-45d8-9109-f6f321e459b8");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
OS.Logger.startActiveSpan("SetClasses", function (span) {
if(span) {
span.setAttribute("code.function", "SetClasses");
span.setAttribute("outsystems.function.key", "2e878d6a-5e78-44ab-9ac8-9d78395bf8f1");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Interaction_ScrollableArea_mvc_controller_OnReady_SetClassesJS, "SetClasses", "OnReady", {
Height: OS.DataConversion.JSNodeParamConverter.to(model.variables.heightIn, OS.DataTypes.DataTypes.Text),
Width: OS.DataConversion.JSNodeParamConverter.to(model.variables.widthIn, OS.DataTypes.DataTypes.Text),
WidgetId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Content"), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onReady$Action;
}set _onReady$Action(value) {this.__onReady$Action = value;
}


onParametersChanged$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnParametersChanged__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnParametersChanged");
span.setAttribute("outsystems.function.key", "78c192e4-849b-47de-b80d-468eddc930ca");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);
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
span.setAttribute("outsystems.function.key", "a6ace38b-3765-45d8-9109-f6f321e459b8");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onReady$Action, callContext);
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
this._onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onParametersChanged$Action(callContext);

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
return OutSystemsUIController.default.defaultTimeout;
}

}

var Controller = ControllerInner;
// Server Actions - Variables

// Client Actions - Variables

}
return new OS.Controller.ControllerFactory(Controller, OutSystemsUILanguageResources);
});

define("OutSystemsUI.Interaction.ScrollableArea.mvc$controller.OnReady.SetClassesJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var widget = document.getElementById($parameters.WidgetId);

var checkIfIsInteger = function(value) {
  var x;
  if (isNaN(value)) {
    return false;
  }
  x = parseFloat(value);
  return (x | 0) === x;
};

// If is integer we will add 'px' to the variable
var height = checkIfIsInteger($parameters.Height) ? $parameters.Height + 'px' : $parameters.Height;
var width = checkIfIsInteger($parameters.Width) ? $parameters.Width + 'px' : $parameters.Width;

/* Set classes */
if($parameters.Width !== '' || typeof $parameters.Width != 'undefined') {
    widget.style.setProperty('--scrollable-area-width', width);
}

if($parameters.Height !== '' || typeof $parameters.Height != 'undefined') {
    widget.style.setProperty('--scrollable-area-height', height);
}
};
});


define("OutSystemsUI.Interaction.ScrollableArea.mvc$translationsResources", ["exports"], function (exports) {
return {};
});

