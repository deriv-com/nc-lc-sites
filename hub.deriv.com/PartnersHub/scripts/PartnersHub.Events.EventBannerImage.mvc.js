define("PartnersHub.Events.EventBannerImage.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "CloneAWSSignatureVersion4.model", "PartnersHub.Common.SkeletonLoader.mvc$model", "CloneAWSSignatureVersion4.model$ST_49dc3bc2d063241aae5dd3879dfa11a4Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$CloneAWSSignatureVersion4", "CloneAWSSignatureVersion4.model$ST_2a7ac328ca1ac01bfb70fc00237a0973Structure", "CloneAWSSignatureVersion4.model$ST_5aac4e0eb05c7f4c7f14409f9c2e3d4dStructure"], function (OSRuntimeCore, PartnersHubModel, CloneAWSSignatureVersion4Model, PartnersHub_Common_SkeletonLoader_mvcModel) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("EventImages", "eventImagesVar", "EventImages", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CloneAWSSignatureVersion4Model.ST_49dc3bc2d063241aae5dd3879dfa11a4Structure());
}, false, CloneAWSSignatureVersion4Model.ST_49dc3bc2d063241aae5dd3879dfa11a4Structure), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("EventDetails", "eventDetailsIn", "EventDetails", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CloneAWSSignatureVersion4Model.ST_2a7ac328ca1ac01bfb70fc00237a0973Structure());
}, false, CloneAWSSignatureVersion4Model.ST_2a7ac328ca1ac01bfb70fc00237a0973Structure), 
this.attr("_eventDetailsInDataFetchStatus", "_eventDetailsInDataFetchStatus", "_eventDetailsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = PartnersHub_Common_SkeletonLoader_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
if("EventDetails" in inputs) {
this.variables.eventDetailsIn = inputs.EventDetails;
if("_eventDetailsInDataFetchStatus" in inputs) {
this.variables._eventDetailsInDataFetchStatus = inputs._eventDetailsInDataFetchStatus;
}

}

}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Events.EventBannerImage.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "CloneAWSSignatureVersion4.model", "react", "@outsystems/runtime-view-js", "PartnersHub.Events.EventBannerImage.mvc$model", "PartnersHub.Events.EventBannerImage.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Common.SkeletonLoader.mvc$view", "@outsystems/runtime-widgets-js", "CloneAWSSignatureVersion4.model$ST_49dc3bc2d063241aae5dd3879dfa11a4Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$CloneAWSSignatureVersion4", "CloneAWSSignatureVersion4.model$ST_2a7ac328ca1ac01bfb70fc00237a0973Structure", "CloneAWSSignatureVersion4.model$ST_5aac4e0eb05c7f4c7f14409f9c2e3d4dStructure"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, CloneAWSSignatureVersion4Model, React, OSView, PartnersHub_Events_EventBannerImage_mvc_model, PartnersHub_Events_EventBannerImage_mvc_controller, PartnersHubClientVariables, PartnersHub_Common_SkeletonLoader_mvc_view, OSWidgets) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "Events.EventBannerImage"; }

        static getAttributes() { return {
codeFunction: "EventBannerImage",
functionKey: "0eee1dbe-5cb3-43bc-b84b-c57a97a31b50",
functionOwnerName: "PartnersHub",
functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Events.EventBannerImage.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [PartnersHub_Common_SkeletonLoader_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Events_EventBannerImage_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Events_EventBannerImage_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(PartnersHub_Common_SkeletonLoader_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
IsLoading: model.variables.isLoadingVar,
ClassName: "ph-event-image",
SkeletonHeight: "154px"
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
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
imageContent: model.variables.eventImagesVar.mobileImageAttr,
style: "ph-event-card-image",
type: /*Binary*/ 2,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.eventImagesVar.mobileImageAttr)]
}));
        }
    }

    return View;
});
define("PartnersHub.Events.EventBannerImage.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "CloneAWSSignatureVersion4.model", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Events.EventBannerImage.mvc$translationsResources", "CloneAWSSignatureVersion4.model$ST_49dc3bc2d063241aae5dd3879dfa11a4Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$CloneAWSSignatureVersion4", "CloneAWSSignatureVersion4.model$ST_2a7ac328ca1ac01bfb70fc00237a0973Structure", "CloneAWSSignatureVersion4.model$ST_5aac4e0eb05c7f4c7f14409f9c2e3d4dStructure"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, CloneAWSSignatureVersion4Model, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Events_EventBannerImage_mvc_TranslationsResources) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, PartnersHub_Events_EventBannerImage_mvc_TranslationsResources);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = true;
}

// Server Actions - Methods
get getImage$ServerAction() {if(!(this.hasOwnProperty("_getImage$ServerAction"))) {
this._getImage$ServerAction = function (bucketObjectIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("GetImage", function (span) {
if(span) {
span.setAttribute("code.function", "GetImage");
span.setAttribute("outsystems.function.key", "e685222a-663e-4f5c-820d-16fd548ee409");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
}

return OS.Flow.tryFinally(function () {
var inputs = {
BucketObject: OS.DataConversion.ServerDataConverter.to(bucketObjectIn, OS.DataTypes.DataTypes.Record)
};
return controller.callServerAction("GetImage", "screenservices/PartnersHub/Events/EventBannerImage/ActionGetImage", "ULoHOeBreyU_Ww8a99xVaw", inputs, controller.callContext(callContext), undefined, undefined, true).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("PartnersHub.Events.EventBannerImage$ActionGetImage"))();
executeServerActionResult.eventImagesOut = OS.DataConversion.ServerDataConverter.from(outputs.EventImages, CloneAWSSignatureVersion4Model.ST_49dc3bc2d063241aae5dd3879dfa11a4Structure);
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

return this._getImage$ServerAction;
}set getImage$ServerAction(value) {this._getImage$ServerAction = value;
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
span.setAttribute("outsystems.function.key", "9c87b409-78ec-49ba-908b-4668c0c0b2b4");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var getImageVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: GetImage
model.flush();
return controller.getImage$ServerAction(function () {
var rec = new CloneAWSSignatureVersion4Model.ST_2a7ac328ca1ac01bfb70fc00237a0973Structure();
rec.idAttr = model.variables.eventDetailsIn.idAttr;
rec.fileNamesAttr = function () {
var rec = new CloneAWSSignatureVersion4Model.ST_5aac4e0eb05c7f4c7f14409f9c2e3d4dStructure();
rec.desktopImageNameAttr = model.variables.eventDetailsIn.fileNamesAttr.desktopImageNameAttr;
rec.mobileImageNameAttr = model.variables.eventDetailsIn.fileNamesAttr.mobileImageNameAttr;
return rec;
}();
return rec;
}(), callContext).then(function (value) {
getImageVar.value = value;
}).then(function () {
// EventImages = GetImage.EventImages
model.variables.eventImagesVar = getImageVar.value.eventImagesOut;
// IsLoading = False
model.variables.isLoadingVar = false;
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


onReady$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnReady__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "9c87b409-78ec-49ba-908b-4668c0c0b2b4");
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
Controller.registerVariableGroupType("PartnersHub.Events.EventBannerImage$ActionGetImage", [{
name: "EventImages",
attrName: "eventImagesOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new CloneAWSSignatureVersion4Model.ST_49dc3bc2d063241aae5dd3879dfa11a4Structure();
},
complexType: CloneAWSSignatureVersion4Model.ST_49dc3bc2d063241aae5dd3879dfa11a4Structure
}]);

// Client Actions - Variables

}
return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});


define("PartnersHub.Events.EventBannerImage.mvc$translationsResources", ["exports"], function (exports) {
return {};
});

