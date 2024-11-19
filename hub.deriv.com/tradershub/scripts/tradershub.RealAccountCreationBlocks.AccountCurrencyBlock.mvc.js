define("tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.Common.LoaderBlock.mvc$model", "tradershub.model$ST_8929e3c9fca60443ab65fcc0c5318922Structure", "tradershub.model$EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecord", "tradershub.model$RL_7f0ff0d0a70a4e41424efbf5ef899b8d", "tradershub.model$RC_6a44851bc01e80a885c4aa0ae740b8fc", "tradershub.model$RL_5ee36d8deb03b51810340e621ea66d4b", "tradershub.controller$DerivApiSendMessage", "tradershub.model$ST_bd2236af041a218c8fde06ca0065cfd9Structure", "tradershub.controller$SendGetSetting"], function (OSRuntimeCore, tradershubModel, tradershubController, tradershub_Common_LoaderBlock_mvcModel) {
var OS = OSRuntimeCore;
{class GetCurrenciesAggrRecInner extends 
OS.Model.AggregateRecord {
static attributesToDeclare() {
return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new GetCurrenciesAggrRec(new GetCurrenciesAggrRec.RecordClass({
RecordListType: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

GetCurrenciesAggrRecInner.RecordListType = tradershubModel.RL_5ee36d8deb03b51810340e621ea66d4b;
var GetCurrenciesAggrRec = GetCurrenciesAggrRecInner;
GetCurrenciesAggrRec.init();
}


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("LandingCompany", "landingCompanyVar", "LandingCompany", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_8929e3c9fca60443ab65fcc0c5318922Structure());
}, false, tradershubModel.ST_8929e3c9fca60443ab65fcc0c5318922Structure), 
this.attr("FilteredRecommendedCurrencies", "filteredRecommendedCurrenciesVar", "FilteredRecommendedCurrencies", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_7f0ff0d0a70a4e41424efbf5ef899b8d());
}, false, tradershubModel.RL_7f0ff0d0a70a4e41424efbf5ef899b8d), 
this.attr("FilteredOtherCurrencies", "filteredOtherCurrenciesVar", "FilteredOtherCurrencies", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_7f0ff0d0a70a4e41424efbf5ef899b8d());
}, false, tradershubModel.RL_7f0ff0d0a70a4e41424efbf5ef899b8d), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("GetCurrencies", "getCurrenciesAggr", "GetCurrencies", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetCurrenciesAggrRec());
}, true, GetCurrenciesAggrRec)
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
Model._hasValidationWidgetsValue = tradershub_Common_LoaderBlock_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.mvc$model", "tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.mvc$controller", "tradershub.clientVariables", "tradershub.Common.LoaderBlock.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.model$ST_8929e3c9fca60443ab65fcc0c5318922Structure", "tradershub.model$EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecord", "tradershub.model$RL_7f0ff0d0a70a4e41424efbf5ef899b8d", "tradershub.model$RC_6a44851bc01e80a885c4aa0ae740b8fc", "tradershub.model$RL_5ee36d8deb03b51810340e621ea66d4b", "tradershub.controller$DerivApiSendMessage", "tradershub.model$ST_bd2236af041a218c8fde06ca0065cfd9Structure", "tradershub.controller$SendGetSetting"], function (OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_RealAccountCreationBlocks_AccountCurrencyBlock_mvc_model, tradershub_RealAccountCreationBlocks_AccountCurrencyBlock_mvc_controller, tradershubClientVariables, tradershub_Common_LoaderBlock_mvc_view, OSWidgets) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "RealAccountCreationBlocks.AccountCurrencyBlock"; }

        static getAttributes() { return {
codeFunction: "AccountCurrencyBlock",
functionKey: "4ba5e16e-0d4e-4271-84fb-0cca46322ed7",
functionOwnerName: "tradershub",
functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Common_LoaderBlock_mvc_view];
        }

        get modelFactory() {
            return tradershub_RealAccountCreationBlocks_AccountCurrencyBlock_mvc_model;
        }

        get controllerFactory() {
            return tradershub_RealAccountCreationBlocks_AccountCurrencyBlock_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(model.variables.isLoadingVar, false, this, function () {
return [React.createElement(tradershub_Common_LoaderBlock_mvc_view, {
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
_dependencies: []
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "align-items: flex-start; display: flex; flex-direction: column; padding: 16px 0;"
},
style: "full-width",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #000; font-size: 16px;"
},
text: [$text(getTranslation("q+pIc5+TSUOaZ9OTkms5Kw#Value", "Recommended"))],
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.filteredRecommendedCurrenciesVar,
style: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("n3pa5MTfDEetDg1PJtKX5g#ValueExpression.-2051293826.1", "list list-group display-flex flex-direction-column gap-base"),
tag: "div",
_idProps: {
service: idService,
name: "RecommendedList"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.ListItem, {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.recommendedListItemOnClick$Action(controller.callContext(eventHandlerContext));
});
;
},
style: model.getCachedValue(idService.getId("RecommendedListItem.Style"), function () {
return (((model.variables.filteredRecommendedCurrenciesVar.getCurrent(callContext.iterationContext).codeAttr === tradershubClientVariables.getSelectedCurrencyCode())) ? (OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("_5HSw2yk80Gp68zgD06zPw#ValueExpression.1984615573.1", "currency-list--selected")) : (OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("_5HSw2yk80Gp68zgD06zPw#ValueExpression.1062814938.1", "currency-list")));
}, function () {
return model.variables.filteredRecommendedCurrenciesVar.getCurrent(callContext.iterationContext).codeAttr;
}, function () {
return tradershubClientVariables.getSelectedCurrencyCode();
}),
triggerActionOnFullSwipeLeft: false,
triggerActionOnFullSwipeRight: false,
_idProps: {
service: idService,
name: "RecommendedListItem"
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
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
style: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("SHEGKaeSAkCQXpegVzWyoA#ValueExpression.981163746.1", "display-flex align-items-center gap-s"),
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
gridProperties: {
width: "24px"
},
type: /*External*/ 1,
url: model.variables.filteredRecommendedCurrenciesVar.getCurrent(callContext.iterationContext).iconAttr,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Label, {
extendedProperties: {
style: "color: #101213; font-weight: 500;"
},
gridProperties: {
classes: "OSFillParent",
marginLeft: "16px"
},
style: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("dlFGRdnm5E+DRH45jd+8Fg#ValueExpression.726304834.1", "display-flex cursor-pointer"),
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "curreny-name",
value: model.variables.filteredRecommendedCurrenciesVar.getCurrent(callContext.iterationContext).nameAttr,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
marginLeft: "2px"
},
style: "curreny-name",
value: (("(" + model.variables.filteredRecommendedCurrenciesVar.getCurrent(callContext.iterationContext).codeAttr) + OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("Mw5eU0ONYECc9tOlfMaSig#ValueExpression.41.1", ")")),
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "list-item-icon display-flex",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if((tradershubClientVariables.getSelectedCurrencyCode() === model.variables.filteredRecommendedCurrenciesVar.getCurrent(callContext.iterationContext).codeAttr), false, this, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.roundedblackcheckmark.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.rightIcon.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})))];
}),
rightActions: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(tradershubClientVariables.getSelectedCurrencyCode()), asPrimitiveValue(model.variables.filteredRecommendedCurrenciesVar.getCurrent(callContext.iterationContext).codeAttr), asPrimitiveValue(model.variables.filteredRecommendedCurrenciesVar.getCurrent(callContext.iterationContext).nameAttr), asPrimitiveValue(model.variables.filteredRecommendedCurrenciesVar.getCurrent(callContext.iterationContext).iconAttr)]
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(tradershubClientVariables.getSelectedCurrencyCode())]
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #000; font-size: 16px;"
},
text: [$text(getTranslation("ib4gbC+_+0Gm2pyq1JbhWw#Value", "Other"))],
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.filteredOtherCurrenciesVar,
style: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("xjPip09n9kmLToW+POv3aw#ValueExpression.-2051293826.1", "list list-group display-flex flex-direction-column gap-base"),
tag: "div",
_idProps: {
service: idService,
name: "OtherCurrencies"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.ListItem, {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.otherCurrenciesItemOnClick$Action(controller.callContext(eventHandlerContext));
});
;
},
style: model.getCachedValue(idService.getId("OtherCurrenciesItem.Style"), function () {
return (((model.variables.filteredOtherCurrenciesVar.getCurrent(callContext.iterationContext).codeAttr === tradershubClientVariables.getSelectedCurrencyCode())) ? (OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("d4kNr3d4wE+cn3AGsBgjDw#ValueExpression.1984615573.1", "currency-list--selected")) : (OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("d4kNr3d4wE+cn3AGsBgjDw#ValueExpression.1062814938.1", "currency-list")));
}, function () {
return model.variables.filteredOtherCurrenciesVar.getCurrent(callContext.iterationContext).codeAttr;
}, function () {
return tradershubClientVariables.getSelectedCurrencyCode();
}),
triggerActionOnFullSwipeLeft: false,
triggerActionOnFullSwipeRight: false,
_idProps: {
service: idService,
name: "OtherCurrenciesItem"
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
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
style: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("W0OOhl_Fa0OoWuwTqqTBeg#ValueExpression.981163746.1", "display-flex align-items-center gap-s"),
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
gridProperties: {
width: "32px"
},
type: /*External*/ 1,
url: model.variables.filteredOtherCurrenciesVar.getCurrent(callContext.iterationContext).iconAttr,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Label, {
extendedProperties: {
style: "color: #101213; font-weight: 500;"
},
gridProperties: {
classes: "OSFillParent",
marginLeft: "16px"
},
style: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("IcuJleU_oEWQE_vGen_wOw#ValueExpression.1568682532.1", "display-flex"),
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "curreny-name cursor-pointer",
value: model.variables.filteredOtherCurrenciesVar.getCurrent(callContext.iterationContext).nameAttr,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
marginLeft: "2px"
},
style: "curreny-name",
value: (("(" + model.variables.filteredOtherCurrenciesVar.getCurrent(callContext.iterationContext).codeAttr) + OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("yJdrMF4dp0y2tWVSORVv_Q#ValueExpression.41.1", ")")),
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "list-item-icon display-flex",
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if((tradershubClientVariables.getSelectedCurrencyCode() === model.variables.filteredOtherCurrenciesVar.getCurrent(callContext.iterationContext).codeAttr), false, this, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.roundedblackcheckmark.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.rightIcon.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})))];
}),
rightActions: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(tradershubClientVariables.getSelectedCurrencyCode()), asPrimitiveValue(model.variables.filteredOtherCurrenciesVar.getCurrent(callContext.iterationContext).codeAttr), asPrimitiveValue(model.variables.filteredOtherCurrenciesVar.getCurrent(callContext.iterationContext).nameAttr), asPrimitiveValue(model.variables.filteredOtherCurrenciesVar.getCurrent(callContext.iterationContext).iconAttr)]
})];
}, callContext, idService, "2")
},
_dependencies: [asPrimitiveValue(tradershubClientVariables.getSelectedCurrencyCode())]
}))];
}));
        }
    }

    return View;
});
define("tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.mvc$translationsResources", "tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.mvc$controller.FilterCurrenciesFunction.JavaScript1JS", "tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.mvc$controller.RecommendedListItemOnClick.RudderStackJS", "tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.mvc$controller.OtherCurrenciesItemOnClick.RudderStackJS", "tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.mvc$controller.OnReady.LandingCompanyPayloadJS", "tradershub.model$ST_8929e3c9fca60443ab65fcc0c5318922Structure", "tradershub.model$EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecord", "tradershub.model$RL_7f0ff0d0a70a4e41424efbf5ef899b8d", "tradershub.model$RC_6a44851bc01e80a885c4aa0ae740b8fc", "tradershub.model$RL_5ee36d8deb03b51810340e621ea66d4b", "tradershub.controller$DerivApiSendMessage", "tradershub.model$ST_bd2236af041a218c8fde06ca0065cfd9Structure", "tradershub.controller$SendGetSetting"], function (OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_RealAccountCreationBlocks_AccountCurrencyBlock_mvc_TranslationsResources, tradershub_RealAccountCreationBlocks_AccountCurrencyBlock_mvc_controller_FilterCurrenciesFunction_JavaScript1JS, tradershub_RealAccountCreationBlocks_AccountCurrencyBlock_mvc_controller_RecommendedListItemOnClick_RudderStackJS, tradershub_RealAccountCreationBlocks_AccountCurrencyBlock_mvc_controller_OtherCurrenciesItemOnClick_RudderStackJS, tradershub_RealAccountCreationBlocks_AccountCurrencyBlock_mvc_controller_OnReady_LandingCompanyPayloadJS) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, tradershub_RealAccountCreationBlocks_AccountCurrencyBlock_mvc_TranslationsResources);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getCurrencies$AggrRefresh: 0
};
this.dataFetchDependentsGraph = {
getCurrencies$AggrRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}

// Server Actions - Methods

// Aggregates and Data Actions
get getCurrencies$AggrRefresh() {if(!(this.hasOwnProperty("_getCurrencies$AggrRefresh"))) {
this._getCurrencies$AggrRefresh = function () {
var innerBody = function (maxRecords, startIndex, callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetCurrencies", "screenservices/tradershub/RealAccountCreationBlocks/AccountCurrencyBlock/ScreenDataSetGetCurrencies", "npjMYW44GFvhkxw14gO3vA", maxRecords, startIndex, function (b) {
model.variables.getCurrenciesAggr.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getCurrenciesAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getCurrenciesAggr.constructor));
}, undefined, undefined, undefined, callContext, undefined, true).then(function () {
return controller._onReady$Action(controller.callContext(callContext));
});
}.bind(this);
return OS.Logger.startActiveSpan("GetCurrencies", function (span) {
if(span) {
span.setAttribute("code.function", "GetCurrencies");
span.setAttribute("outsystems.function.key", "64ea3413-5b85-45ea-a634-df484db4d1c0");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL");
}

return OS.Flow.tryFinally(function () {
return innerBody();
}, function () {
if(span) {
span.end();
}

});
}, 0);

};
}

return this._getCurrencies$AggrRefresh;
}set getCurrencies$AggrRefresh(value) {this._getCurrencies$AggrRefresh = value;
}


get dataFetchActionNames() {if(!(this.hasOwnProperty("_dataFetchActionNames"))) {
this._dataFetchActionNames = ["getCurrencies$AggrRefresh"];
}

return this._dataFetchActionNames;
}set dataFetchActionNames(value) {this._dataFetchActionNames = value;
}

// Client Actions - Methods
get _filterCurrenciesFunction$Action() {if(!(this.hasOwnProperty("__filterCurrenciesFunction$Action"))) {
this.__filterCurrenciesFunction$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("FilterCurrenciesFunction", function (span) {
if(span) {
span.setAttribute("code.function", "FilterCurrenciesFunction");
span.setAttribute("outsystems.function.key", "2c16e74d-90fa-4350-897f-94b5d2249055");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("FilterCurrenciesFunction");
callContext = controller.callContext(callContext);
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
var jSONSerializeCurrencyListVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONDeserializeOtherCurrenciesVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_7f0ff0d0a70a4e41424efbf5ef899b8d))());
var jSONDeserializeCurrenciesListVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_7f0ff0d0a70a4e41424efbf5ef899b8d))());
// JSON Serialize: JSONSerializeCurrencyList
jSONSerializeCurrencyListVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.getCurrenciesAggr.listOut, false, false);
javaScript1JSResult.value = OS.Logger.startActiveSpan("JavaScript1", function (span) {
if(span) {
span.setAttribute("code.function", "JavaScript1");
span.setAttribute("outsystems.function.key", "81b40fd3-0118-4533-b23b-a5fc55b06b83");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_RealAccountCreationBlocks_AccountCurrencyBlock_mvc_controller_FilterCurrenciesFunction_JavaScript1JS, "JavaScript1", "FilterCurrenciesFunction", {
IsEU: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getIsEuUser(), OS.DataTypes.DataTypes.Boolean),
LandingCompanyResponse: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRawLandingCompanyResponse(), OS.DataTypes.DataTypes.Text),
RawCurrenciesList: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeCurrencyListVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
RecommendedCurrencies: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
OtherCurrencies: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.FilterCurrenciesFunction$javaScript1JSResult"))();
jsNodeResult.recommendedCurrenciesOut = OS.DataConversion.JSNodeParamConverter.from($parameters.RecommendedCurrencies, OS.DataTypes.DataTypes.Text);
jsNodeResult.otherCurrenciesOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OtherCurrencies, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeCurrenciesList
jSONDeserializeCurrenciesListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(javaScript1JSResult.value.recommendedCurrenciesOut, tradershubModel.RL_7f0ff0d0a70a4e41424efbf5ef899b8d, false);
// JSON Deserialize: JSONDeserializeOtherCurrencies
jSONDeserializeOtherCurrenciesVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(javaScript1JSResult.value.otherCurrenciesOut, tradershubModel.RL_7f0ff0d0a70a4e41424efbf5ef899b8d, false);
// FilteredRecommendedCurrencies = JSONDeserializeCurrenciesList.Data
model.variables.filteredRecommendedCurrenciesVar = jSONDeserializeCurrenciesListVar.value.dataOut;
// FilteredOtherCurrencies = JSONDeserializeOtherCurrencies.Data
model.variables.filteredOtherCurrenciesVar = jSONDeserializeOtherCurrenciesVar.value.dataOut;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__filterCurrenciesFunction$Action;
}set _filterCurrenciesFunction$Action(value) {this.__filterCurrenciesFunction$Action = value;
}

get _recommendedListItemOnClick$Action() {if(!(this.hasOwnProperty("__recommendedListItemOnClick$Action"))) {
this.__recommendedListItemOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("RecommendedListItemOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "RecommendedListItemOnClick");
span.setAttribute("outsystems.function.key", "7bcd2bfc-11f4-411f-9f16-58032e0ee43f");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("RecommendedListItemOnClick");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// SelectedCurrencyCode = FilteredRecommendedCurrencies.Current.Code
tradershubClientVariables.setSelectedCurrencyCode(model.variables.filteredRecommendedCurrenciesVar.getCurrent(callContext.iterationContext).codeAttr);
OS.Logger.startActiveSpan("RudderStack", function (span) {
if(span) {
span.setAttribute("code.function", "RudderStack");
span.setAttribute("outsystems.function.key", "30475e20-91dc-4312-b42e-e64b4a7e78fc");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_RealAccountCreationBlocks_AccountCurrencyBlock_mvc_controller_RecommendedListItemOnClick_RudderStackJS, "RudderStack", "RecommendedListItemOnClick", null, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// Trigger Event: NextStepEvent
return controller.nextStepEvent$Action(callContext);
});
}, function () {
if(span) {
span.end();
}

});
}, 1);
};
}

return this.__recommendedListItemOnClick$Action;
}set _recommendedListItemOnClick$Action(value) {this.__recommendedListItemOnClick$Action = value;
}

get _otherCurrenciesItemOnClick$Action() {if(!(this.hasOwnProperty("__otherCurrenciesItemOnClick$Action"))) {
this.__otherCurrenciesItemOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OtherCurrenciesItemOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "OtherCurrenciesItemOnClick");
span.setAttribute("outsystems.function.key", "b838397e-9882-4c10-ae6f-4574c77ed208");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OtherCurrenciesItemOnClick");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// SelectedCurrencyCode = FilteredOtherCurrencies.Current.Code
tradershubClientVariables.setSelectedCurrencyCode(model.variables.filteredOtherCurrenciesVar.getCurrent(callContext.iterationContext).codeAttr);
OS.Logger.startActiveSpan("RudderStack", function (span) {
if(span) {
span.setAttribute("code.function", "RudderStack");
span.setAttribute("outsystems.function.key", "fc837aaa-b438-4fd9-9c3b-2a60d4f26403");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_RealAccountCreationBlocks_AccountCurrencyBlock_mvc_controller_OtherCurrenciesItemOnClick_RudderStackJS, "RudderStack", "OtherCurrenciesItemOnClick", null, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// Trigger Event: NextStepEvent
return controller.nextStepEvent$Action(callContext);
});
}, function () {
if(span) {
span.end();
}

});
}, 1);
};
}

return this.__otherCurrenciesItemOnClick$Action;
}set _otherCurrenciesItemOnClick$Action(value) {this.__otherCurrenciesItemOnClick$Action = value;
}

get _onReady$Action() {if(!(this.hasOwnProperty("__onReady$Action"))) {
this.__onReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnReady", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "db431d01-adee-411c-b3fe-ff29641ee35f");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
var sendGetSettingVar = new OS.DataTypes.VariableHolder();
var landingCompanyPayloadJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeLandingCompanyResponseVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_8929e3c9fca60443ab65fcc0c5318922Structure))());
var jSONDeserializeLandingCompanyResponse2Var = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_8929e3c9fca60443ab65fcc0c5318922Structure))());
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if(((tradershubClientVariables.getRawLandingCompanyResponse() === OS.BuiltinFunctions.nullTextIdentifier()))) {
return OS.Flow.executeSequence(function () {
if(((model.variables.landingCompanyVar.landing_companyAttr.gaming_companyAttr.legal_allowed_currenciesAttr.isEmpty && (OS.BuiltinFunctions.length(tradershubClientVariables.getAuthToken()) > 1)))) {
// Execute Action: SendGetSetting
model.flush();
return tradershubController.default.sendGetSetting$Action(callContext).then(function (value) {
sendGetSettingVar.value = value;
}).then(function () {
landingCompanyPayloadJSResult.value = OS.Logger.startActiveSpan("LandingCompanyPayload", function (span) {
if(span) {
span.setAttribute("code.function", "LandingCompanyPayload");
span.setAttribute("outsystems.function.key", "fb544b18-75a6-4f46-8802-c565a31ec661");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_RealAccountCreationBlocks_AccountCurrencyBlock_mvc_controller_OnReady_LandingCompanyPayloadJS, "LandingCompanyPayload", "OnReady", {
CountryCode: OS.DataConversion.JSNodeParamConverter.to(sendGetSettingVar.value.getSettingResponseOut.country_codeAttr, OS.DataTypes.DataTypes.Text),
Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.OnReady$landingCompanyPayloadJSResult"))();
jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// Execute Action: DerivApiSendMessage
model.flush();
return tradershubController.default.derivApiSendMessage$Action(landingCompanyPayloadJSResult.value.payloadOut, "", false, callContext).then(function (value) {
derivApiSendMessageVar.value = value;
});
}).then(function () {
// JSON Deserialize: JSONDeserializeLandingCompanyResponse
jSONDeserializeLandingCompanyResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(derivApiSendMessageVar.value.responseOut, tradershubModel.ST_8929e3c9fca60443ab65fcc0c5318922Structure, false);
// LandingCompany = JSONDeserializeLandingCompanyResponse.Data
model.variables.landingCompanyVar = jSONDeserializeLandingCompanyResponseVar.value.dataOut;
// RawLandingCompanyResponse = DerivApiSendMessage.Response
tradershubClientVariables.setRawLandingCompanyResponse(derivApiSendMessageVar.value.responseOut);
// SelectedCitizenship = SendGetSetting.GetSettingResponse.Citizen
tradershubClientVariables.setSelectedCitizenship(sendGetSettingVar.value.getSettingResponseOut.citizenAttr);
// Execute Action: FilterCurrenciesFunction
controller._filterCurrenciesFunction$Action(callContext);
});
} else {
return OS.Flow.returnAsync();

}

});
} else {
if(((model.variables.landingCompanyVar.landing_companyAttr.gaming_companyAttr.legal_allowed_currenciesAttr.isEmpty && (OS.BuiltinFunctions.length(tradershubClientVariables.getAuthToken()) > 1)))) {
// JSON Deserialize: JSONDeserializeLandingCompanyResponse2
jSONDeserializeLandingCompanyResponse2Var.value.dataOut = OS.JSONUtils.deserializeFromJSON(tradershubClientVariables.getRawLandingCompanyResponse(), tradershubModel.ST_8929e3c9fca60443ab65fcc0c5318922Structure, false);
// LandingCompany = JSONDeserializeLandingCompanyResponse2.Data
model.variables.landingCompanyVar = jSONDeserializeLandingCompanyResponse2Var.value.dataOut;
// Execute Action: FilterCurrenciesFunction2
controller._filterCurrenciesFunction$Action(callContext);
} else {
return OS.Flow.returnAsync();

}

}

}).then(function () {
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


filterCurrenciesFunction$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("FilterCurrenciesFunction__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "FilterCurrenciesFunction");
span.setAttribute("outsystems.function.key", "2c16e74d-90fa-4350-897f-94b5d2249055");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._filterCurrenciesFunction$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

recommendedListItemOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("RecommendedListItemOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "RecommendedListItemOnClick");
span.setAttribute("outsystems.function.key", "7bcd2bfc-11f4-411f-9f16-58032e0ee43f");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._recommendedListItemOnClick$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

otherCurrenciesItemOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OtherCurrenciesItemOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OtherCurrenciesItemOnClick");
span.setAttribute("outsystems.function.key", "b838397e-9882-4c10-ae6f-4574c77ed208");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._otherCurrenciesItemOnClick$Action, callContext);
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
span.setAttribute("outsystems.function.key", "db431d01-adee-411c-b3fe-ff29641ee35f");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
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

get nextStepEvent$Action() {if(!(this.hasOwnProperty("_nextStepEvent$Action"))) {
this._nextStepEvent$Action = function () {
return Promise.resolve();
};
}

return this._nextStepEvent$Action;
}set nextStepEvent$Action(value) {this._nextStepEvent$Action = value;
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
return tradershubController.default.defaultTimeout;
}

}

var Controller = ControllerInner;
// Server Actions - Variables

// Client Actions - Variables
Controller.registerVariableGroupType("tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.FilterCurrenciesFunction$javaScript1JSResult", [{
name: "RecommendedCurrencies",
attrName: "recommendedCurrenciesOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "OtherCurrencies",
attrName: "otherCurrenciesOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.OnReady$landingCompanyPayloadJSResult", [{
name: "Payload",
attrName: "payloadOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

}
return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.mvc$controller.FilterCurrenciesFunction.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const currencies = JSON.parse($parameters.RawCurrenciesList).map(i => i.Currencies);

const landingCompany = JSON.parse($parameters.LandingCompanyResponse || JSON.stringify({
    landing_company: {
        gaming_company: {
            legal_allowed_currencies: []
        },
        financial_company: {
            legal_allowed_currencies: []
        }
    }
}))
const legalAllowedCurrenciesGaming = landingCompany.landing_company?.gaming_company?.legal_allowed_currencies ?? []
const legalAllowedCurrenciesFinancial = landingCompany.landing_company?.financial_company?.legal_allowed_currencies ?? []

const legalAllowedCurrencies = !$parameters.IsEU && legalAllowedCurrenciesGaming?.length ? legalAllowedCurrenciesGaming : legalAllowedCurrenciesFinancial
const filteredRecommendedCurrencies = currencies.filter(currency => legalAllowedCurrencies.includes(currency.Code) && currency.Category === 'Recommended')
const filteredOtherCurrencies = currencies.filter(currency => legalAllowedCurrencies.includes(currency.Code) && currency.Category === 'Other')

filteredRecommendedCurrencies.sort((a, b) => a.Id - b.Id);
filteredOtherCurrencies.sort((a, b) => a.Id - b.Id);

$parameters.RecommendedCurrencies = JSON.stringify(filteredRecommendedCurrencies)
$parameters.OtherCurrencies = JSON.stringify(filteredOtherCurrencies) 
};
});

define("tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.mvc$controller.RecommendedListItemOnClick.RudderStackJS", [], function () {
return function ($actions, $roles, $public) {
cacheTrackEvents.track({
    name: "ce_real_account_signup_form",
    properties: {
        action: "step_passed",
        step_num: "0",
        step_codename: "account_currency",
        form_name: "real_account_signup_form_outsystems"
    }
});
};
});

define("tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.mvc$controller.OtherCurrenciesItemOnClick.RudderStackJS", [], function () {
return function ($actions, $roles, $public) {
cacheTrackEvents.track({
    name: "ce_real_account_signup_form",
    properties: {
        action: "step_passed",
        step_num: "0",
        step_codename: "account_currency",
        form_name: "real_account_signup_form_outsystems"
    }
});
};
});

define("tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.mvc$controller.OnReady.LandingCompanyPayloadJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Payload = JSON.stringify({
    landing_company: $parameters.CountryCode
});

};
});


define("tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.mvc$translationsResources.fr-FR", [], function () {
return {
"yJdrMF4dp0y2tWVSORVv_Q#ValueExpression.41.1": "Je veux la réponse dans le format suivant :",
"IcuJleU_oEWQE_vGen_wOw#ValueExpression.1568682532.1": "display-flex",
"W0OOhl_Fa0OoWuwTqqTBeg#ValueExpression.981163746.1": "display-flex align-items-center gap-s",
"d4kNr3d4wE+cn3AGsBgjDw#ValueExpression.1062814938.1": "currency-list",
"d4kNr3d4wE+cn3AGsBgjDw#ValueExpression.1984615573.1": "currency-list--selected",
"xjPip09n9kmLToW+POv3aw#ValueExpression.-2051293826.1": "list list-group display-flex flex-direction-column gap-base",
"ib4gbC+_+0Gm2pyq1JbhWw#Value": "Autre",
"Mw5eU0ONYECc9tOlfMaSig#ValueExpression.41.1": "Je veux la réponse dans le format suivant :",
"dlFGRdnm5E+DRH45jd+8Fg#ValueExpression.726304834.1": "display-flex cursor-pointer",
"SHEGKaeSAkCQXpegVzWyoA#ValueExpression.981163746.1": "display-flex align-items-center gap-s",
"_5HSw2yk80Gp68zgD06zPw#ValueExpression.1062814938.1": "currency-list",
"_5HSw2yk80Gp68zgD06zPw#ValueExpression.1984615573.1": "currency-list--selected",
"n3pa5MTfDEetDg1PJtKX5g#ValueExpression.-2051293826.1": "list list-group display-flex flex-direction-column gap-base",
"q+pIc5+TSUOaZ9OTkms5Kw#Value": "Recommandé"
};
});

define("tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.mvc$translationsResources", ["exports", "tradershub.RealAccountCreationBlocks.AccountCurrencyBlock.mvc$translationsResources.fr-FR"], function (exports, tradershub_RealAccountCreationBlocks_AccountCurrencyBlock_mvc_translationsResources_frFR) {
return {
"fr-FR": {
"translations": tradershub_RealAccountCreationBlocks_AccountCurrencyBlock_mvc_translationsResources_frFR,
"isRTL": false
}
};
});

