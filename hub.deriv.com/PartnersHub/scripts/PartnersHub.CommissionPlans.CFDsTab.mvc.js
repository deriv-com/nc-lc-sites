define("PartnersHub.CommissionPlans.CFDsTab.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "OutSystemsUI.model", "OutSystemsUI.Navigation.Tabs.mvc$model", "OutSystemsUI.Navigation.TabsHeaderItem.mvc$model", "OutSystemsUI.Navigation.TabsContentItem.mvc$model", "OutSystemsUI.Utilities.InlineSVG.mvc$model", "PartnersHub.CommissionPlans.ActionBox.mvc$model", "PartnersHub.model$EN_88a0b98029aeb361728476a53c43c460EntityRecord", "PartnersHub.model$RL_9d46439f193576489847e7629b97a4f1", "OutSystemsUI.model$ST_e3f9af4171d5e4a41700770295d05c77Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI"], function (OSRuntimeCore, PartnersHubModel, OutSystemsUIModel, OutSystemsUI_Navigation_Tabs_mvcModel, OutSystemsUI_Navigation_TabsHeaderItem_mvcModel, OutSystemsUI_Navigation_TabsContentItem_mvcModel, OutSystemsUI_Utilities_InlineSVG_mvcModel, PartnersHub_CommissionPlans_ActionBox_mvcModel) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("TabData", "tabDataIn", "TabData", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.RL_9d46439f193576489847e7629b97a4f1());
}, false, PartnersHubModel.RL_9d46439f193576489847e7629b97a4f1), 
this.attr("_tabDataInDataFetchStatus", "_tabDataInDataFetchStatus", "_tabDataInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ActiveTab", "activeTabIn", "ActiveTab", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_activeTabInDataFetchStatus", "_activeTabInDataFetchStatus", "_activeTabInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((((OutSystemsUI_Navigation_Tabs_mvcModel.hasValidationWidgets || OutSystemsUI_Navigation_TabsHeaderItem_mvcModel.hasValidationWidgets) || OutSystemsUI_Navigation_TabsContentItem_mvcModel.hasValidationWidgets) || OutSystemsUI_Utilities_InlineSVG_mvcModel.hasValidationWidgets) || PartnersHub_CommissionPlans_ActionBox_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
if("TabData" in inputs) {
this.variables.tabDataIn = inputs.TabData;
if("_tabDataInDataFetchStatus" in inputs) {
this.variables._tabDataInDataFetchStatus = inputs._tabDataInDataFetchStatus;
}

}

if("ActiveTab" in inputs) {
this.variables.activeTabIn = inputs.ActiveTab;
if("_activeTabInDataFetchStatus" in inputs) {
this.variables._activeTabInDataFetchStatus = inputs._activeTabInDataFetchStatus;
}

}

}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.CommissionPlans.CFDsTab.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "react", "@outsystems/runtime-view-js", "PartnersHub.CommissionPlans.CFDsTab.mvc$model", "PartnersHub.CommissionPlans.CFDsTab.mvc$controller", "PartnersHub.clientVariables", "OutSystemsUI.Navigation.Tabs.mvc$view", "@outsystems/runtime-widgets-js", "OutSystemsUI.Navigation.TabsHeaderItem.mvc$view", "OutSystemsUI.Navigation.TabsContentItem.mvc$view", "OutSystemsUI.Utilities.InlineSVG.mvc$view", "PartnersHub.CommissionPlans.ActionBox.mvc$view", "PartnersHub.model$EN_88a0b98029aeb361728476a53c43c460EntityRecord", "PartnersHub.model$RL_9d46439f193576489847e7629b97a4f1", "OutSystemsUI.model$ST_e3f9af4171d5e4a41700770295d05c77Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, React, OSView, PartnersHub_CommissionPlans_CFDsTab_mvc_model, PartnersHub_CommissionPlans_CFDsTab_mvc_controller, PartnersHubClientVariables, OutSystemsUI_Navigation_Tabs_mvc_view, OSWidgets, OutSystemsUI_Navigation_TabsHeaderItem_mvc_view, OutSystemsUI_Navigation_TabsContentItem_mvc_view, OutSystemsUI_Utilities_InlineSVG_mvc_view, PartnersHub_CommissionPlans_ActionBox_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "CommissionPlans.CFDsTab"; }

        static getAttributes() { return {
codeFunction: "CFDsTab",
functionKey: "e3cfc581-ab9c-4b67-871f-8718546f538e",
functionOwnerName: "PartnersHub",
functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.CommissionPlans.CFDsTab.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Navigation_Tabs_mvc_view, OutSystemsUI_Navigation_TabsHeaderItem_mvc_view, OutSystemsUI_Navigation_TabsContentItem_mvc_view, OutSystemsUI_Utilities_InlineSVG_mvc_view, PartnersHub_CommissionPlans_ActionBox_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_CommissionPlans_CFDsTab_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_CommissionPlans_CFDsTab_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OutSystemsUI_Navigation_Tabs_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
StartingTab: model.variables.activeTabIn,
_startingTabInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._activeTabInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onTabChange$Action: function (tabsIdIn, activeTabIn) {
var eventHandlerContext = callContext.clone();
controller.onTabChange$Action(controller.callContext(eventHandlerContext));

;
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
return [React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.tabDataIn,
style: "custom-tab-header",
tag: "div",
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._tabDataInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OutSystemsUI_Navigation_TabsHeaderItem_mvc_view, {
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
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: model.variables.tabDataIn.getCurrent(callContext.iterationContext).tabsAttr,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._tabDataInDataFetchStatus)
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._tabDataInDataFetchStatus), asPrimitiveValue(model.variables.tabDataIn.getCurrent(callContext.iterationContext).tabsAttr)]
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables._tabDataInDataFetchStatus)]
})];
}),
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.tabDataIn,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._tabDataInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OutSystemsUI_Navigation_TabsContentItem_mvc_view, {
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
uuid: "5",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "display: flex; flex-direction: column; gap: 16px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "notification-banner",
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
SVGCode: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 5.5C9.65625 5.5 7.53125 6.75 6.34375 8.75C5.1875 10.7812 5.1875 13.25 6.34375 15.25C7.53125 17.2812 9.65625 18.5 12 18.5C14.3125 18.5 16.4375 17.2812 17.625 15.25C18.7812 13.25 18.7812 10.7812 17.625 8.75C16.4375 6.75 14.3125 5.5 12 5.5ZM12 20C9.125 20 6.5 18.5 5.0625 16C3.625 13.5312 3.625 10.5 5.0625 8C6.5 5.53125 9.125 4 12 4C14.8438 4 17.4688 5.53125 18.9062 8C20.3438 10.5 20.3438 13.5312 18.9062 16C17.4688 18.5 14.8438 20 12 20ZM10.75 14.5H11.5V12.5H10.75C10.3125 12.5 10 12.1875 10 11.75C10 11.3438 10.3125 11 10.75 11H12.25C12.6562 11 13 11.3438 13 11.75V14.5H13.25C13.6562 14.5 14 14.8438 14 15.25C14 15.6875 13.6562 16 13.25 16H10.75C10.3125 16 10 15.6875 10 15.25C10 14.8438 10.3125 14.5 10.75 14.5ZM12 10C11.4375 10 11 9.5625 11 9C11 8.46875 11.4375 8 12 8C12.5312 8 13 8.46875 13 9C13 9.5625 12.5312 10 12 10Z\" fill=\"#017AAD\"/></svg>",
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
uuid: "8",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Text, {
style: "to-description",
text: [$text(getTranslation("sQvdRiufbkqbBbseWgsSDg#Value", "If your CFDs commissions aren’t activated, contact your account manager."))],
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: left;"
},
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "to-description",
value: ((OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("+YlNXA3x3ECK3VjGGX+CEA#ValueExpression.-486072707.1", "Earn when your clients trade on a ") + model.variables.tabDataIn.getCurrent(callContext.iterationContext).tabsAttr) + OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("+YlNXA3x3ECK3VjGGX+CEA#ValueExpression.153852865.1", " account.")),
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._tabDataInDataFetchStatus)
})), React.createElement(PartnersHub_CommissionPlans_ActionBox_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
PlanId: model.variables.tabDataIn.getCurrent(callContext.iterationContext).idAttr,
_planIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._tabDataInDataFetchStatus)
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
uuid: "12",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "display: flex; flex-direction: column;"
},
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "to-subtitle",
text: [$text(getTranslation("HvaQTXeMqEy7LlNODOdKuQ#Value", "Disclaimer: "))],
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "disclaimer"
},
tag: "ul",
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("lGVMjowhlESn00LuWQ6SJg#Value", "This plan is not available for partners who promote to clients residing in the EU."))))))];
})
},
_dependencies: [asPrimitiveValue(model.variables._tabDataInDataFetchStatus), asPrimitiveValue(model.variables.tabDataIn.getCurrent(callContext.iterationContext).idAttr), asPrimitiveValue(model.variables.tabDataIn.getCurrent(callContext.iterationContext).tabsAttr)]
})];
}, callContext, idService, "2")
},
_dependencies: [asPrimitiveValue(model.variables._tabDataInDataFetchStatus)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._tabDataInDataFetchStatus), asPrimitiveValue(model.variables.tabDataIn)]
}));
        }
    }

    return View;
});
define("PartnersHub.CommissionPlans.CFDsTab.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.CommissionPlans.CFDsTab.mvc$translationsResources", "PartnersHub.model$EN_88a0b98029aeb361728476a53c43c460EntityRecord", "PartnersHub.model$RL_9d46439f193576489847e7629b97a4f1", "OutSystemsUI.model$ST_e3f9af4171d5e4a41700770295d05c77Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_CommissionPlans_CFDsTab_mvc_TranslationsResources) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, PartnersHub_CommissionPlans_CFDsTab_mvc_TranslationsResources);
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

get onTabChange$Action() {if(!(this.hasOwnProperty("_onTabChange$Action"))) {
this._onTabChange$Action = function () {
return Promise.resolve();
};
}

return this._onTabChange$Action;
}set onTabChange$Action(value) {this._onTabChange$Action = value;
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


define("PartnersHub.CommissionPlans.CFDsTab.mvc$translationsResources.ar-001", [], function () {
return {
"lGVMjowhlESn00LuWQ6SJg#Value": "هذه الخطة غير متاحة للشركاء الذين يروجون للعملاء المقيمين في الاتحاد الأوروبي.",
"HvaQTXeMqEy7LlNODOdKuQ#Value": "تنبيه:",
"+YlNXA3x3ECK3VjGGX+CEA#ValueExpression.-486072707.1": "اربح عندما يتداول عملاؤك على",
"+YlNXA3x3ECK3VjGGX+CEA#ValueExpression.153852865.1": "منصة.",
"sQvdRiufbkqbBbseWgsSDg#Value": "إذا كانت عمولات عقود الفروقات (CFDs) لديك غير مفعلة، تواصل مع مدير حسابك."
};
});

define("PartnersHub.CommissionPlans.CFDsTab.mvc$translationsResources.de-DE", [], function () {
return {
"lGVMjowhlESn00LuWQ6SJg#Value": "Dieser Plan ist für Partner, die Kunden mit Wohnsitz in der EU anwerben, nicht verfügbar.",
"HvaQTXeMqEy7LlNODOdKuQ#Value": "Haftungsausschluss:",
"+YlNXA3x3ECK3VjGGX+CEA#ValueExpression.-486072707.1": "Verdienen Sie, wenn Ihre Kunden mit einem",
"sQvdRiufbkqbBbseWgsSDg#Value": "Falls Ihre CFD-Provisionen nicht aktiviert sind, wenden Sie sich an Ihren Kundenbetreuer."
};
});

define("PartnersHub.CommissionPlans.CFDsTab.mvc$translationsResources.es-ES", [], function () {
return {
"lGVMjowhlESn00LuWQ6SJg#Value": "Este plan no está disponible para socios que promocionen a clientes residentes en la UE.",
"HvaQTXeMqEy7LlNODOdKuQ#Value": "Deslinde de responsabilidad:",
"+YlNXA3x3ECK3VjGGX+CEA#ValueExpression.-486072707.1": "Gana cuando tus clientes operan en una",
"+YlNXA3x3ECK3VjGGX+CEA#ValueExpression.153852865.1": "cuenta",
"sQvdRiufbkqbBbseWgsSDg#Value": "Si tu plan de volumen de ventas no está activado, contacta a tu gerente de cuenta."
};
});

define("PartnersHub.CommissionPlans.CFDsTab.mvc$translationsResources.fr-FR", [], function () {
return {
"lGVMjowhlESn00LuWQ6SJg#Value": "Ce plan n\'est pas disponible pour les partenaires qui font la promotion à des clients résidant dans l\'UE.",
"HvaQTXeMqEy7LlNODOdKuQ#Value": "Avertissement :",
"+YlNXA3x3ECK3VjGGX+CEA#ValueExpression.-486072707.1": "Faites des gains lorsque vos clients tradent sur un",
"sQvdRiufbkqbBbseWgsSDg#Value": "Si vous ne recevez pas de commissions sur les CFD, contactez votre gestionnaire de compte."
};
});

define("PartnersHub.CommissionPlans.CFDsTab.mvc$translationsResources.it-IT", [], function () {
return {
"lGVMjowhlESn00LuWQ6SJg#Value": "Questo piano non è disponibile per i partner che fanno promozione a clienti residenti nell\'UE.",
"HvaQTXeMqEy7LlNODOdKuQ#Value": "Dichiarazione di non responsabilità:",
"+YlNXA3x3ECK3VjGGX+CEA#ValueExpression.-486072707.1": "Guadagna quando i tuoi clienti fanno trading su",
"sQvdRiufbkqbBbseWgsSDg#Value": "Se le commissioni per CFD non sono attivata, contatta il tuo account manager."
};
});

define("PartnersHub.CommissionPlans.CFDsTab.mvc$translationsResources.pl-PL", [], function () {
return {
"lGVMjowhlESn00LuWQ6SJg#Value": "Ten plan nie jest dostępny dla partnerów, którzy promują klientów zamieszkałych w UE.",
"HvaQTXeMqEy7LlNODOdKuQ#Value": "Zastrzeżenie:",
"+YlNXA3x3ECK3VjGGX+CEA#ValueExpression.-486072707.1": "Zarabiaj, gdy Twoi klienci inwestują na",
"sQvdRiufbkqbBbseWgsSDg#Value": "Jeśli prowizje od kontraktów CFD nie są aktywowane, skontaktuj się ze swoim menedżerem konta."
};
});

define("PartnersHub.CommissionPlans.CFDsTab.mvc$translationsResources.pt-PT", [], function () {
return {
"lGVMjowhlESn00LuWQ6SJg#Value": "Este plano não está disponível para parceiros que promovam a clientes residentes na UE.",
"HvaQTXeMqEy7LlNODOdKuQ#Value": "Isenção de responsabilidade:",
"+YlNXA3x3ECK3VjGGX+CEA#ValueExpression.-486072707.1": "Ganhe quando os seus clientes negociarem numa",
"sQvdRiufbkqbBbseWgsSDg#Value": "Se o plano de Volume de Negócios não estiver ativo, contacte o seu gestor de conta."
};
});

define("PartnersHub.CommissionPlans.CFDsTab.mvc$translationsResources.ru-RU", [], function () {
return {
"lGVMjowhlESn00LuWQ6SJg#Value": "Этот план недоступен для партнеров, которые привлекают клиентов из ЕС.",
"HvaQTXeMqEy7LlNODOdKuQ#Value": "Отказ от ответственности:",
"+YlNXA3x3ECK3VjGGX+CEA#ValueExpression.-486072707.1": "Зарабатывайте, когда ваши клиенты торгуют на",
"sQvdRiufbkqbBbseWgsSDg#Value": "Если комиссии по CFD не активированы, свяжитесь с вашим менеджером."
};
});

define("PartnersHub.CommissionPlans.CFDsTab.mvc$translationsResources", ["exports", "PartnersHub.CommissionPlans.CFDsTab.mvc$translationsResources.ar-001", "PartnersHub.CommissionPlans.CFDsTab.mvc$translationsResources.de-DE", "PartnersHub.CommissionPlans.CFDsTab.mvc$translationsResources.es-ES", "PartnersHub.CommissionPlans.CFDsTab.mvc$translationsResources.fr-FR", "PartnersHub.CommissionPlans.CFDsTab.mvc$translationsResources.it-IT", "PartnersHub.CommissionPlans.CFDsTab.mvc$translationsResources.pl-PL", "PartnersHub.CommissionPlans.CFDsTab.mvc$translationsResources.pt-PT", "PartnersHub.CommissionPlans.CFDsTab.mvc$translationsResources.ru-RU"], function (exports, PartnersHub_CommissionPlans_CFDsTab_mvc_translationsResources_ar001, PartnersHub_CommissionPlans_CFDsTab_mvc_translationsResources_deDE, PartnersHub_CommissionPlans_CFDsTab_mvc_translationsResources_esES, PartnersHub_CommissionPlans_CFDsTab_mvc_translationsResources_frFR, PartnersHub_CommissionPlans_CFDsTab_mvc_translationsResources_itIT, PartnersHub_CommissionPlans_CFDsTab_mvc_translationsResources_plPL, PartnersHub_CommissionPlans_CFDsTab_mvc_translationsResources_ptPT, PartnersHub_CommissionPlans_CFDsTab_mvc_translationsResources_ruRU) {
return {
"ar-001": {
"translations": PartnersHub_CommissionPlans_CFDsTab_mvc_translationsResources_ar001,
"isRTL": true
},
"de-DE": {
"translations": PartnersHub_CommissionPlans_CFDsTab_mvc_translationsResources_deDE,
"isRTL": false
},
"es-ES": {
"translations": PartnersHub_CommissionPlans_CFDsTab_mvc_translationsResources_esES,
"isRTL": false
},
"fr-FR": {
"translations": PartnersHub_CommissionPlans_CFDsTab_mvc_translationsResources_frFR,
"isRTL": false
},
"it-IT": {
"translations": PartnersHub_CommissionPlans_CFDsTab_mvc_translationsResources_itIT,
"isRTL": false
},
"pl-PL": {
"translations": PartnersHub_CommissionPlans_CFDsTab_mvc_translationsResources_plPL,
"isRTL": false
},
"pt-PT": {
"translations": PartnersHub_CommissionPlans_CFDsTab_mvc_translationsResources_ptPT,
"isRTL": false
},
"ru-RU": {
"translations": PartnersHub_CommissionPlans_CFDsTab_mvc_translationsResources_ruRU,
"isRTL": false
}
};
});

