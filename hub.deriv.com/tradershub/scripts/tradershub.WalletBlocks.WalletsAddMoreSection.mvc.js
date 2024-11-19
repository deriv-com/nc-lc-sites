define("tradershub.WalletBlocks.WalletsAddMoreSection.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.model$ST_3425849bb816196585dd6f07dbf2721dStructure", "tradershub.model$RL_caf4f8b8680e835a8e4e4bea133e8365", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure", "tradershub.controller$SetTokenByLoginId"], function (OSRuntimeCore, tradershubModel, tradershubController) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("ModifiedWalletsAccountList", "modifiedWalletsAccountListVar", "ModifiedWalletsAccountList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_caf4f8b8680e835a8e4e4bea133e8365());
}, false, tradershubModel.RL_caf4f8b8680e835a8e4e4bea133e8365), 
this.attr("WalletsAccountList", "walletsAccountListIn", "WalletsAccountList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_caf4f8b8680e835a8e4e4bea133e8365());
}, false, tradershubModel.RL_caf4f8b8680e835a8e4e4bea133e8365), 
this.attr("_walletsAccountListInDataFetchStatus", "_walletsAccountListInDataFetchStatus", "_walletsAccountListInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("WalletsAccountList" in inputs) {
this.variables.walletsAccountListIn = inputs.WalletsAccountList;
if("_walletsAccountListInDataFetchStatus" in inputs) {
this.variables._walletsAccountListInDataFetchStatus = inputs._walletsAccountListInDataFetchStatus;
}

}

}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("tradershub.WalletBlocks.WalletsAddMoreSection.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.WalletBlocks.WalletsAddMoreSection.mvc$model", "tradershub.WalletBlocks.WalletsAddMoreSection.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js", "tradershub.model$ST_3425849bb816196585dd6f07dbf2721dStructure", "tradershub.model$RL_caf4f8b8680e835a8e4e4bea133e8365", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure", "tradershub.controller$SetTokenByLoginId"], function (OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_WalletBlocks_WalletsAddMoreSection_mvc_model, tradershub_WalletBlocks_WalletsAddMoreSection_mvc_controller, tradershubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "WalletBlocks.WalletsAddMoreSection"; }

        static getAttributes() { return {
codeFunction: "WalletsAddMoreSection",
functionKey: "5883783d-26de-46cb-a189-f2dfa2746c9b",
functionOwnerName: "tradershub",
functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.WalletBlocks.WalletsAddMoreSection.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return tradershub_WalletBlocks_WalletsAddMoreSection_mvc_model;
        }

        get controllerFactory() {
            return tradershub_WalletBlocks_WalletsAddMoreSection_mvc_controller;
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
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.modifiedWalletsAccountListVar,
style: "wallets-add-more-section",
tag: "div",
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.ListItem, {
extendedProperties: {
style: "border-color: #F1F3F5; border-radius: 8px; border-style: solid; border-width: 1px; font-size: 12px; font-weight: normal;"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.onClickWalletCard$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "\"list-item\"",
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
return [$if(model.variables.modifiedWalletsAccountListVar.getCurrent(callContext.iterationContext).is_addedAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "background-neutral-1 padding-base display-flex flex-direction-column gap-base wallets-add-more-cards cursor-pointer",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex justify-content-space-between align-items-center",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedProperties: {
style: "height: 24px;"
},
gridProperties: {
width: "24px"
},
type: /*External*/ 1,
url: model.variables.modifiedWalletsAccountListVar.getCurrent(callContext.iterationContext).iconAttr,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_sm.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column full-width",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 12px;"
},
value: model.variables.modifiedWalletsAccountListVar.getCurrent(callContext.iterationContext).nameAttr,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 12px; font-weight: bold;"
},
gridProperties: {
marginLeft: "0px"
},
value: model.variables.modifiedWalletsAccountListVar.getCurrent(callContext.iterationContext).formattedBalanceAttr,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "padding-base display-flex flex-direction-column gap-base wallets-add-more-cards cursor-pointer",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex justify-content-space-between align-items-center",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedProperties: {
style: "height: 24px;"
},
gridProperties: {
width: "24px"
},
type: /*External*/ 1,
url: model.variables.modifiedWalletsAccountListVar.getCurrent(callContext.iterationContext).iconAttr,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "ThemeGrid_MarginGutter",
width: "32px"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.circleplusmd.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column full-width",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 12px;"
},
value: model.variables.modifiedWalletsAccountListVar.getCurrent(callContext.iterationContext).nameAttr,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
})];
}),
rightActions: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.modifiedWalletsAccountListVar.getCurrent(callContext.iterationContext).formattedBalanceAttr), asPrimitiveValue(model.variables.modifiedWalletsAccountListVar.getCurrent(callContext.iterationContext).nameAttr), asPrimitiveValue(model.variables.modifiedWalletsAccountListVar.getCurrent(callContext.iterationContext).iconAttr), asPrimitiveValue(model.variables.modifiedWalletsAccountListVar.getCurrent(callContext.iterationContext).is_addedAttr)]
})];
}, callContext, idService, "1")
},
_dependencies: []
})));
        }
    }

    return View;
});
define("tradershub.WalletBlocks.WalletsAddMoreSection.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.WalletBlocks.WalletsAddMoreSection.mvc$translationsResources", "tradershub.model$ST_3425849bb816196585dd6f07dbf2721dStructure", "tradershub.model$RL_caf4f8b8680e835a8e4e4bea133e8365", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure", "tradershub.controller$SetTokenByLoginId"], function (OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_WalletBlocks_WalletsAddMoreSection_mvc_TranslationsResources) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, tradershub_WalletBlocks_WalletsAddMoreSection_mvc_TranslationsResources);
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
get _onClickWalletCard$Action() {if(!(this.hasOwnProperty("__onClickWalletCard$Action"))) {
this.__onClickWalletCard$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnClickWalletCard", function (span) {
if(span) {
span.setAttribute("code.function", "OnClickWalletCard");
span.setAttribute("outsystems.function.key", "c6d4cb37-3123-4ad8-a54f-ae5c7f086a46");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnClickWalletCard");
callContext = controller.callContext(callContext);
var setTokenByLoginIdVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((model.variables.walletsAccountListIn.getCurrent(callContext.iterationContext).is_addedAttr)) {
// Execute Action: SetTokenByLoginId
model.flush();
return tradershubController.default.setTokenByLoginId$Action(model.variables.walletsAccountListIn.getCurrent(callContext.iterationContext).loginidAttr, callContext).then(function (value) {
setTokenByLoginIdVar.value = value;
});
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

return this.__onClickWalletCard$Action;
}set _onClickWalletCard$Action(value) {this.__onClickWalletCard$Action = value;
}

get _onReady$Action() {if(!(this.hasOwnProperty("__onReady$Action"))) {
this.__onReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnReady", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "f52a3858-639d-404f-9593-5cf80410517c");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var listFilterVar = new OS.DataTypes.VariableHolder();
// Execute Action: ListFilter
listFilterVar.value = OS.SystemActions.listFilter(model.variables.walletsAccountListIn, function (p) {
return (p.is_selectedAttr === false);
}, callContext);

// ModifiedWalletsAccountList = ListFilter.FilteredList
model.variables.modifiedWalletsAccountListVar = listFilterVar.value.filteredListOut;
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


onClickWalletCard$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnClickWalletCard__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnClickWalletCard");
span.setAttribute("outsystems.function.key", "c6d4cb37-3123-4ad8-a54f-ae5c7f086a46");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._onClickWalletCard$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

onReady$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnReady__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "f52a3858-639d-404f-9593-5cf80410517c");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
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
return tradershubController.default.defaultTimeout;
}

}

var Controller = ControllerInner;
// Server Actions - Variables

// Client Actions - Variables

}
return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});


define("tradershub.WalletBlocks.WalletsAddMoreSection.mvc$translationsResources", ["exports"], function (exports) {
return {};
});

