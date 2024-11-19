define("PartnersHub.CommissionPlans.CFDs.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "OutSystemsUI.model", "PartnersHub.controller", "PartnersHub.Layouts.LayoutWithLoaderBlock.mvc$model", "PartnersHub.Common.TitleBlock.mvc$model", "PartnersHub.Common.SkeletonLoader.mvc$model", "OutSystemsUI.Navigation.Tabs.mvc$model", "OutSystemsUI.Navigation.TabsHeaderItem.mvc$model", "OutSystemsUI.Navigation.TabsContentItem.mvc$model", "OutSystemsUI.Utilities.InlineSVG.mvc$model", "PartnersHub.CommissionPlans.ActionBox.mvc$model", "PartnersHub.CommissionPlans.CFDsTab.mvc$model", "OutSystemsUI.model$ST_e3f9af4171d5e4a41700770295d05c77Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "PartnersHub.model$EN_88a0b98029aeb361728476a53c43c460EntityRecord", "PartnersHub.model$RL_9d46439f193576489847e7629b97a4f1", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "PartnersHub.model$RC_267bfdc597ed31281a85e5f086e458b7", "PartnersHub.model$RL_16ee1202e8f0deac948d800309773e12"], function (OSRuntimeCore, PartnersHubModel, OutSystemsUIModel, PartnersHubController, PartnersHub_Layouts_LayoutWithLoaderBlock_mvcModel, PartnersHub_Common_TitleBlock_mvcModel, PartnersHub_Common_SkeletonLoader_mvcModel, OutSystemsUI_Navigation_Tabs_mvcModel, OutSystemsUI_Navigation_TabsHeaderItem_mvcModel, OutSystemsUI_Navigation_TabsContentItem_mvcModel, OutSystemsUI_Utilities_InlineSVG_mvcModel, PartnersHub_CommissionPlans_ActionBox_mvcModel, PartnersHub_CommissionPlans_CFDsTab_mvcModel) {
var OS = OSRuntimeCore;
{class GetCFDsTabInfoAggrRecInner extends 
OS.Model.AggregateRecord {
static attributesToDeclare() {
return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new GetCFDsTabInfoAggrRec(new GetCFDsTabInfoAggrRec.RecordClass({
RecordListType: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

GetCFDsTabInfoAggrRecInner.RecordListType = PartnersHubModel.RL_16ee1202e8f0deac948d800309773e12;
var GetCFDsTabInfoAggrRec = GetCFDsTabInfoAggrRecInner;
GetCFDsTabInfoAggrRec.init();
}


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("ActiveTab1", "activeTab1Var", "ActiveTab1", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("GetCFDsTabInfo", "getCFDsTabInfoAggr", "GetCFDsTabInfo", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetCFDsTabInfoAggrRec());
}, true, GetCFDsTabInfoAggrRec)
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
Model._hasValidationWidgetsValue = ((((((((PartnersHub_Layouts_LayoutWithLoaderBlock_mvcModel.hasValidationWidgets || PartnersHub_Common_TitleBlock_mvcModel.hasValidationWidgets) || PartnersHub_Common_SkeletonLoader_mvcModel.hasValidationWidgets) || OutSystemsUI_Navigation_Tabs_mvcModel.hasValidationWidgets) || OutSystemsUI_Navigation_TabsHeaderItem_mvcModel.hasValidationWidgets) || OutSystemsUI_Navigation_TabsContentItem_mvcModel.hasValidationWidgets) || OutSystemsUI_Utilities_InlineSVG_mvcModel.hasValidationWidgets) || PartnersHub_CommissionPlans_ActionBox_mvcModel.hasValidationWidgets) || PartnersHub_CommissionPlans_CFDsTab_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.CommissionPlans.CFDs.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "react", "@outsystems/runtime-view-js", "PartnersHub.CommissionPlans.CFDs.mvc$model", "PartnersHub.CommissionPlans.CFDs.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Layouts.LayoutWithLoaderBlock.mvc$view", "@outsystems/runtime-widgets-js", "PartnersHub.Common.TitleBlock.mvc$view", "PartnersHub.Common.SkeletonLoader.mvc$view", "OutSystemsUI.Navigation.Tabs.mvc$view", "OutSystemsUI.Navigation.TabsHeaderItem.mvc$view", "OutSystemsUI.Navigation.TabsContentItem.mvc$view", "OutSystemsUI.Utilities.InlineSVG.mvc$view", "PartnersHub.CommissionPlans.ActionBox.mvc$view", "PartnersHub.CommissionPlans.CFDsTab.mvc$view", "OutSystemsUI.model$ST_e3f9af4171d5e4a41700770295d05c77Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "PartnersHub.model$EN_88a0b98029aeb361728476a53c43c460EntityRecord", "PartnersHub.model$RL_9d46439f193576489847e7629b97a4f1", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "PartnersHub.model$RC_267bfdc597ed31281a85e5f086e458b7", "PartnersHub.model$RL_16ee1202e8f0deac948d800309773e12"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, React, OSView, PartnersHub_CommissionPlans_CFDs_mvc_model, PartnersHub_CommissionPlans_CFDs_mvc_controller, PartnersHubClientVariables, PartnersHub_Layouts_LayoutWithLoaderBlock_mvc_view, OSWidgets, PartnersHub_Common_TitleBlock_mvc_view, PartnersHub_Common_SkeletonLoader_mvc_view, OutSystemsUI_Navigation_Tabs_mvc_view, OutSystemsUI_Navigation_TabsHeaderItem_mvc_view, OutSystemsUI_Navigation_TabsContentItem_mvc_view, OutSystemsUI_Utilities_InlineSVG_mvc_view, PartnersHub_CommissionPlans_ActionBox_mvc_view, PartnersHub_CommissionPlans_CFDsTab_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() { return "CommissionPlans.CFDs"; }

        static getAttributes() { return {
codeFunction: "CFDs",
functionKey: "dc84b70f-206a-4d60-bd43-e0a2711b7cf5",
functionOwnerName: "PartnersHub",
functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.CommissionPlans.CFDs.css", "css/PartnersHub.PHubTest.extra.css"];
        }

        static getJsDependencies() {
            return ["scripts/PartnersHub.DerivAnalytics.js"];
        }

        static getBlocks() {
            return [PartnersHub_Layouts_LayoutWithLoaderBlock_mvc_view, PartnersHub_Common_TitleBlock_mvc_view, PartnersHub_Common_SkeletonLoader_mvc_view, OutSystemsUI_Navigation_Tabs_mvc_view, OutSystemsUI_Navigation_TabsHeaderItem_mvc_view, OutSystemsUI_Navigation_TabsContentItem_mvc_view, OutSystemsUI_Utilities_InlineSVG_mvc_view, PartnersHub_CommissionPlans_ActionBox_mvc_view, PartnersHub_CommissionPlans_CFDsTab_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_CommissionPlans_CFDs_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_CommissionPlans_CFDs_mvc_controller;
        }

        get title() {
            

            return OSView.BaseView.BaseWebScreen.getTranslation("D7eE3GogYE29Q+CicRt89Q#Title", "CFDs");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(PartnersHub_Layouts_LayoutWithLoaderBlock_mvc_view, {
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
placeholders: {
placeholder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
className: "partners-hub-dashboard"
},
gridProperties: {
classes: "OSInline"
},
visible: true,
_idProps: {
service: idService,
uuid: "1"
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
Title: "CFDs",
ShowPreviousButton: false
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
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
uuid: "2",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(PartnersHub_Common_SkeletonLoader_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
IsLoading: model.variables.isLoadingVar
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
uuid: "3",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUI_Navigation_Tabs_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
StartingTab: model.variables.activeTab1Var
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onTabChange$Action: function (tabsIdIn, activeTabIn) {
var eventHandlerContext = callContext.clone();
controller.onTabChange$Action(activeTabIn, controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "4",
alias: "4"
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
source: model.variables.getCFDsTabInfoAggr.listOut,
style: "custom-tab-header",
tag: "div",
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCFDsTabInfoAggr.dataFetchStatusAttr),
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
uuid: "6",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: model.variables.getCFDsTabInfoAggr.listOut.getCurrent(callContext.iterationContext).cFDsTabInfoAttr.tabsAttr,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCFDsTabInfoAggr.dataFetchStatusAttr)
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getCFDsTabInfoAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getCFDsTabInfoAggr.listOut.getCurrent(callContext.iterationContext).cFDsTabInfoAttr.tabsAttr)]
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.getCFDsTabInfoAggr.dataFetchStatusAttr)]
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
source: model.variables.getCFDsTabInfoAggr.listOut,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCFDsTabInfoAggr.dataFetchStatusAttr),
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
uuid: "9",
alias: "6"
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
uuid: "10"
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
uuid: "11"
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
ExtendedClass: "custom-svg",
SVGCode: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 5.5C9.65625 5.5 7.53125 6.75 6.34375 8.75C5.1875 10.7812 5.1875 13.25 6.34375 15.25C7.53125 17.2812 9.65625 18.5 12 18.5C14.3125 18.5 16.4375 17.2812 17.625 15.25C18.7812 13.25 18.7812 10.7812 17.625 8.75C16.4375 6.75 14.3125 5.5 12 5.5ZM12 20C9.125 20 6.5 18.5 5.0625 16C3.625 13.5312 3.625 10.5 5.0625 8C6.5 5.53125 9.125 4 12 4C14.8438 4 17.4688 5.53125 18.9062 8C20.3438 10.5 20.3438 13.5312 18.9062 16C17.4688 18.5 14.8438 20 12 20ZM10.75 14.5H11.5V12.5H10.75C10.3125 12.5 10 12.1875 10 11.75C10 11.3438 10.3125 11 10.75 11H12.25C12.6562 11 13 11.3438 13 11.75V14.5H13.25C13.6562 14.5 14 14.8438 14 15.25C14 15.6875 13.6562 16 13.25 16H10.75C10.3125 16 10 15.6875 10 15.25C10 14.8438 10.3125 14.5 10.75 14.5ZM12 10C11.4375 10 11 9.5625 11 9C11 8.46875 11.4375 8 12 8C12.5312 8 13 8.46875 13 9C13 9.5625 12.5312 10 12 10Z\" fill=\"#017AAD\"/></svg>"
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
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Text, {
style: "to-description",
text: [$text(getTranslation("NICzHwuOdE6bB6Y_yndHiQ#Value", "If your CFDs commissions aren’t activated, contact your account manager."))],
_idProps: {
service: idService,
uuid: "13"
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
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "to-description",
value: ((OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("Qb27PET050OY1Flxp96nsg#ValueExpression.-486072707.1", "Earn when your clients trade on a ") + model.variables.getCFDsTabInfoAggr.listOut.getCurrent(callContext.iterationContext).cFDsTabInfoAttr.tabsAttr) + OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("Qb27PET050OY1Flxp96nsg#ValueExpression.153852865.1", " account.")),
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCFDsTabInfoAggr.dataFetchStatusAttr)
})), React.createElement(PartnersHub_CommissionPlans_ActionBox_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
PlanId: model.variables.getCFDsTabInfoAggr.listOut.getCurrent(callContext.iterationContext).cFDsTabInfoAttr.idAttr,
_planIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCFDsTabInfoAggr.dataFetchStatusAttr)
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
uuid: "16",
alias: "8"
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
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "to-subtitle",
text: [$text(getTranslation("iOfsmBYxGEa8DKR5xjdxbQ#Value", "Disclaimer: "))],
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "disclaimer"
},
tag: "ul",
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("UsWwYOVIS0ShP4gJ7G1PPw#Value", "This plan is not available for partners who promote to clients residing in the EU."))))))];
})
},
_dependencies: [asPrimitiveValue(model.variables.getCFDsTabInfoAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getCFDsTabInfoAggr.listOut.getCurrent(callContext.iterationContext).cFDsTabInfoAttr.idAttr), asPrimitiveValue(model.variables.getCFDsTabInfoAggr.listOut.getCurrent(callContext.iterationContext).cFDsTabInfoAttr.tabsAttr)]
})];
}, callContext, idService, "2")
},
_dependencies: [asPrimitiveValue(model.variables.getCFDsTabInfoAggr.dataFetchStatusAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getCFDsTabInfoAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getCFDsTabInfoAggr.listOut)]
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width1 ThemeGrid_MarginGutter"
},
visible: false,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(PartnersHub_CommissionPlans_CFDsTab_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
TabData: model.getCachedValue(idService.getId("v3lfUW0IgE+PQgxOavj6xQ.TabData"), function () {
return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getCFDsTabInfoAggr.listOut, new PartnersHubModel.RL_9d46439f193576489847e7629b97a4f1(), function (source, target) {
target = source.cFDsTabInfoAttr;
return target;
});
}, function () {
return model.variables.getCFDsTabInfoAggr.listOut;
}),
_tabDataInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCFDsTabInfoAggr.dataFetchStatusAttr),
ActiveTab: model.variables.activeTab1Var
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onTabChange$Action: function () {
var eventHandlerContext = callContext.clone();
controller.onTabChange$Action(model.variables.activeTab1Var, controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "22",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.getCFDsTabInfoAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getCFDsTabInfoAggr.listOut), asPrimitiveValue(model.variables.activeTab1Var)]
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.getCFDsTabInfoAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getCFDsTabInfoAggr.listOut), asPrimitiveValue(model.variables.activeTab1Var), asPrimitiveValue(model.variables.isLoadingVar)]
}));
        }
    }

    return View;
});
define("PartnersHub.CommissionPlans.CFDs.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.CommissionPlans.CFDs.mvc$translationsResources", "PartnersHub.CommissionPlans.controller", "OutSystemsUI.model$ST_e3f9af4171d5e4a41700770295d05c77Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "PartnersHub.model$EN_88a0b98029aeb361728476a53c43c460EntityRecord", "PartnersHub.model$RL_9d46439f193576489847e7629b97a4f1", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "PartnersHub.model$RC_267bfdc597ed31281a85e5f086e458b7", "PartnersHub.model$RL_16ee1202e8f0deac948d800309773e12"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_CommissionPlans_CFDs_mvc_TranslationsResources, PartnersHub_CommissionPlansController) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, PartnersHub_CommissionPlans_CFDs_mvc_TranslationsResources);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getCFDsTabInfo$AggrRefresh: -1
};
this.dataFetchDependentsGraph = {
getCFDsTabInfo$AggrRefresh: []
};
this.shouldSendClientVarsToDataSources = true;
}

// Server Actions - Methods

// Aggregates and Data Actions
get getCFDsTabInfo$AggrRefresh() {if(!(this.hasOwnProperty("_getCFDsTabInfo$AggrRefresh"))) {
this._getCFDsTabInfo$AggrRefresh = function () {
var innerBody = function (maxRecords, startIndex, callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetCFDsTabInfo", "screenservices/PartnersHub/CommissionPlans/CFDs/ScreenDataSetGetCFDsTabInfo", "QIoScmYxpDIJBgyUVbX5kg", maxRecords, startIndex, function (b) {
model.variables.getCFDsTabInfoAggr.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getCFDsTabInfoAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getCFDsTabInfoAggr.constructor));
}, undefined, undefined, undefined, callContext, PartnersHubClientVariables, true).then(function () {
controller._setIsLoading$Action(false, controller.callContext(callContext));
});
}.bind(this);
return OS.Logger.startActiveSpan("GetCFDsTabInfo", function (span) {
if(span) {
span.setAttribute("code.function", "GetCFDsTabInfo");
span.setAttribute("outsystems.function.key", "f0f2c933-c532-42e6-96f0-6329e1df786f");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
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

return this._getCFDsTabInfo$AggrRefresh;
}set getCFDsTabInfo$AggrRefresh(value) {this._getCFDsTabInfo$AggrRefresh = value;
}


get dataFetchActionNames() {if(!(this.hasOwnProperty("_dataFetchActionNames"))) {
this._dataFetchActionNames = ["getCFDsTabInfo$AggrRefresh"];
}

return this._dataFetchActionNames;
}set dataFetchActionNames(value) {this._dataFetchActionNames = value;
}

// Client Actions - Methods
get _onInitialize$Action() {if(!(this.hasOwnProperty("__onInitialize$Action"))) {
this.__onInitialize$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnInitialize", function (span) {
if(span) {
span.setAttribute("code.function", "OnInitialize");
span.setAttribute("outsystems.function.key", "1eba4f81-9fbc-44c0-97e1-bcfe981adaff");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Refresh Query: GetCFDsTabInfo
var result = controller.getCFDsTabInfo$AggrRefresh(50, 0, callContext);
model.flush();
return result;
});
}, function () {
if(span) {
span.end();
}

});
}, 1);
};
}

return this.__onInitialize$Action;
}set _onInitialize$Action(value) {this.__onInitialize$Action = value;
}

get _setIsLoading$Action() {if(!(this.hasOwnProperty("__setIsLoading$Action"))) {
this.__setIsLoading$Action = function (valueIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("SetIsLoading", function (span) {
if(span) {
span.setAttribute("code.function", "SetIsLoading");
span.setAttribute("outsystems.function.key", "65440272-3062-4fd6-b1d9-c6e4b6ae1cb1");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("SetIsLoading");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PartnersHub.CommissionPlans.CFDs.SetIsLoading$vars"))());
vars.value.valueInLocal = valueIn;
// IsLoading
// IsLoading = Value
model.variables.isLoadingVar = vars.value.valueInLocal;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__setIsLoading$Action;
}set _setIsLoading$Action(value) {this.__setIsLoading$Action = value;
}

get _onTabChange$Action() {if(!(this.hasOwnProperty("__onTabChange$Action"))) {
this.__onTabChange$Action = function (activeTabIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnTabChange", function (span) {
if(span) {
span.setAttribute("code.function", "OnTabChange");
span.setAttribute("outsystems.function.key", "80f571c3-6813-44f9-80a7-356c100168d8");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnTabChange");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PartnersHub.CommissionPlans.CFDs.OnTabChange$vars"))());
vars.value.activeTabInLocal = activeTabIn;
var listFilterVar = new OS.DataTypes.VariableHolder();
// Execute Action: ListFilter
listFilterVar.value = OS.SystemActions.listFilter(model.variables.getCFDsTabInfoAggr.listOut, function (p) {
return (OS.BuiltinFunctions.identifierToInteger(p.cFDsTabInfoAttr.idAttr) === (vars.value.activeTabInLocal + 1));
}, callContext);

// Execute Action: RudderstackTrackEvent
PartnersHubController.default.rudderstackTrackEvent$Action(function () {
var rec = new PartnersHubModel.ST_23ff1d290ec4691b1c668ad437100cd0Structure();
rec.actionAttr = "click_cta";
rec.cta_nameAttr = ((listFilterVar.value.filteredListOut.getCurrent(callContext.iterationContext).cFDsTabInfoAttr.tabsAttr + " ") + "Tab");
rec.cta_placementAttr = "CFDs tab section";
return rec;
}(), "ce_partnershub_form", callContext);
// ActiveTab1 = ActiveTab
model.variables.activeTab1Var = vars.value.activeTabInLocal;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onTabChange$Action;
}set _onTabChange$Action(value) {this.__onTabChange$Action = value;
}

get _onClickCloseButton$Action() {if(!(this.hasOwnProperty("__onClickCloseButton$Action"))) {
this.__onClickCloseButton$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnClickCloseButton", function (span) {
if(span) {
span.setAttribute("code.function", "OnClickCloseButton");
span.setAttribute("outsystems.function.key", "8e6a8b19-bb48-4123-8bd5-5bb7fc772b22");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnClickCloseButton");
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

return this.__onClickCloseButton$Action;
}set _onClickCloseButton$Action(value) {this.__onClickCloseButton$Action = value;
}


onInitialize$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnInitialize__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnInitialize");
span.setAttribute("outsystems.function.key", "1eba4f81-9fbc-44c0-97e1-bcfe981adaff");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

setIsLoading$Action(valueIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("SetIsLoading__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "SetIsLoading");
span.setAttribute("outsystems.function.key", "65440272-3062-4fd6-b1d9-c6e4b6ae1cb1");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._setIsLoading$Action, callContext, valueIn);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

onTabChange$Action(activeTabIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnTabChange__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnTabChange");
span.setAttribute("outsystems.function.key", "80f571c3-6813-44f9-80a7-356c100168d8");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onTabChange$Action, callContext, activeTabIn);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

onClickCloseButton$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnClickCloseButton__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnClickCloseButton");
span.setAttribute("outsystems.function.key", "8e6a8b19-bb48-4123-8bd5-5bb7fc772b22");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onClickCloseButton$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}


// Event Handler Actions
get onInitializeEventHandler() {if(!(this.hasOwnProperty("_onInitializeEventHandler"))) {
this._onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onInitialize$Action(callContext);

};
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
return PartnersHub_CommissionPlansController.default.handleError(ex, this.callContext());
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
Controller.registerVariableGroupType("PartnersHub.CommissionPlans.CFDs.SetIsLoading$vars", [{
name: "Value",
attrName: "valueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.registerVariableGroupType("PartnersHub.CommissionPlans.CFDs.OnTabChange$vars", [{
name: "ActiveTab",
attrName: "activeTabInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);

}
return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});


define("PartnersHub.CommissionPlans.CFDs.mvc$translationsResources.ar-001", [], function () {
return {
"UsWwYOVIS0ShP4gJ7G1PPw#Value": "هذه الخطة غير متاحة للشركاء الذين يروجون للعملاء المقيمين في الاتحاد الأوروبي.",
"iOfsmBYxGEa8DKR5xjdxbQ#Value": "تنبيه:",
"Qb27PET050OY1Flxp96nsg#ValueExpression.-486072707.1": "اربح عندما يتداول عملاؤك على",
"Qb27PET050OY1Flxp96nsg#ValueExpression.153852865.1": "منصة.",
"NICzHwuOdE6bB6Y_yndHiQ#Value": "إذا لم تكن عمولات عقود الفروقات لديك مفعّلة، تواصل مع مدير حسابك."
};
});

define("PartnersHub.CommissionPlans.CFDs.mvc$translationsResources.de-DE", [], function () {
return {
"UsWwYOVIS0ShP4gJ7G1PPw#Value": "Dieser Plan ist nicht für Partner verfügbar, die Kunden mit Wohnsitz in der EU anwerben.",
"iOfsmBYxGEa8DKR5xjdxbQ#Value": "Haftungsausschluss:",
"Qb27PET050OY1Flxp96nsg#ValueExpression.-486072707.1": "Verdienen Sie, wenn Ihre Kunden mit einem",
"NICzHwuOdE6bB6Y_yndHiQ#Value": "Falls Ihr Turnover-Plan nicht aktiviert ist, wenden Sie sich an Ihren Kundenbetreuer."
};
});

define("PartnersHub.CommissionPlans.CFDs.mvc$translationsResources.es-ES", [], function () {
return {
"UsWwYOVIS0ShP4gJ7G1PPw#Value": "Este plan no está disponible para socios que promocionen a clientes residentes en la UE.",
"iOfsmBYxGEa8DKR5xjdxbQ#Value": "Deslinde de responsabilidad:",
"Qb27PET050OY1Flxp96nsg#ValueExpression.-486072707.1": "Gana cuando tus clientes operan en una",
"Qb27PET050OY1Flxp96nsg#ValueExpression.153852865.1": "cuenta",
"NICzHwuOdE6bB6Y_yndHiQ#Value": "Si tu plan de volumen de ventas no está activado, contacta a tu gerente de cuenta."
};
});

define("PartnersHub.CommissionPlans.CFDs.mvc$translationsResources.fr-FR", [], function () {
return {
"UsWwYOVIS0ShP4gJ7G1PPw#Value": "Ce plan n\'est pas disponible pour les partenaires qui font la promotion à des clients résidant dans l\'UE.",
"iOfsmBYxGEa8DKR5xjdxbQ#Value": "Avertissement :",
"Qb27PET050OY1Flxp96nsg#ValueExpression.-486072707.1": "Faites des gains lorsque vos clients tradent sur un",
"NICzHwuOdE6bB6Y_yndHiQ#Value": "Si vous ne recevez pas de commissions sur les CFD, contactez votre gestionnaire de compte."
};
});

define("PartnersHub.CommissionPlans.CFDs.mvc$translationsResources.it-IT", [], function () {
return {
"UsWwYOVIS0ShP4gJ7G1PPw#Value": "Questo piano non è disponibile per i partner che fanno promozione a clienti residenti nell\'UE.",
"iOfsmBYxGEa8DKR5xjdxbQ#Value": "Dichiarazione di non responsabilità:",
"Qb27PET050OY1Flxp96nsg#ValueExpression.-486072707.1": "Guadagna quando i tuoi clienti fanno trading su",
"NICzHwuOdE6bB6Y_yndHiQ#Value": "Se le commissioni per CFD non sono attivata, contatta il tuo account manager."
};
});

define("PartnersHub.CommissionPlans.CFDs.mvc$translationsResources.pl-PL", [], function () {
return {
"UsWwYOVIS0ShP4gJ7G1PPw#Value": "Ten plan nie jest dostępny dla partnerów, którzy promują klientów zamieszkałych w UE.",
"iOfsmBYxGEa8DKR5xjdxbQ#Value": "Zastrzeżenie:",
"Qb27PET050OY1Flxp96nsg#ValueExpression.-486072707.1": "Zarabiaj, gdy Twoi klienci inwestują na",
"NICzHwuOdE6bB6Y_yndHiQ#Value": "Jeśli prowizje od kontraktów CFD nie są aktywowane, skontaktuj się ze swoim menedżerem konta."
};
});

define("PartnersHub.CommissionPlans.CFDs.mvc$translationsResources.pt-PT", [], function () {
return {
"UsWwYOVIS0ShP4gJ7G1PPw#Value": "Este plano não está disponível para parceiros que promovam a clientes residentes na UE.",
"iOfsmBYxGEa8DKR5xjdxbQ#Value": "Isenção de responsabilidade:",
"Qb27PET050OY1Flxp96nsg#ValueExpression.-486072707.1": "Ganhe quando os seus clientes negociarem numa",
"NICzHwuOdE6bB6Y_yndHiQ#Value": "Se o plano de Volume de Negócios não estiver ativo, contacte o seu gestor de conta."
};
});

define("PartnersHub.CommissionPlans.CFDs.mvc$translationsResources.ru-RU", [], function () {
return {
"UsWwYOVIS0ShP4gJ7G1PPw#Value": "Этот план недоступен для партнеров, которые привлекают клиентов из ЕС.",
"iOfsmBYxGEa8DKR5xjdxbQ#Value": "Отказ от ответственности:",
"Qb27PET050OY1Flxp96nsg#ValueExpression.-486072707.1": "Зарабатывайте, когда ваши клиенты торгуют на",
"NICzHwuOdE6bB6Y_yndHiQ#Value": "Если комиссии по CFD не активированы, свяжитесь с вашим менеджером."
};
});

define("PartnersHub.CommissionPlans.CFDs.mvc$translationsResources", ["exports", "PartnersHub.CommissionPlans.CFDs.mvc$translationsResources.ar-001", "PartnersHub.CommissionPlans.CFDs.mvc$translationsResources.de-DE", "PartnersHub.CommissionPlans.CFDs.mvc$translationsResources.es-ES", "PartnersHub.CommissionPlans.CFDs.mvc$translationsResources.fr-FR", "PartnersHub.CommissionPlans.CFDs.mvc$translationsResources.it-IT", "PartnersHub.CommissionPlans.CFDs.mvc$translationsResources.pl-PL", "PartnersHub.CommissionPlans.CFDs.mvc$translationsResources.pt-PT", "PartnersHub.CommissionPlans.CFDs.mvc$translationsResources.ru-RU"], function (exports, PartnersHub_CommissionPlans_CFDs_mvc_translationsResources_ar001, PartnersHub_CommissionPlans_CFDs_mvc_translationsResources_deDE, PartnersHub_CommissionPlans_CFDs_mvc_translationsResources_esES, PartnersHub_CommissionPlans_CFDs_mvc_translationsResources_frFR, PartnersHub_CommissionPlans_CFDs_mvc_translationsResources_itIT, PartnersHub_CommissionPlans_CFDs_mvc_translationsResources_plPL, PartnersHub_CommissionPlans_CFDs_mvc_translationsResources_ptPT, PartnersHub_CommissionPlans_CFDs_mvc_translationsResources_ruRU) {
return {
"ar-001": {
"translations": PartnersHub_CommissionPlans_CFDs_mvc_translationsResources_ar001,
"isRTL": true
},
"de-DE": {
"translations": PartnersHub_CommissionPlans_CFDs_mvc_translationsResources_deDE,
"isRTL": false
},
"es-ES": {
"translations": PartnersHub_CommissionPlans_CFDs_mvc_translationsResources_esES,
"isRTL": false
},
"fr-FR": {
"translations": PartnersHub_CommissionPlans_CFDs_mvc_translationsResources_frFR,
"isRTL": false
},
"it-IT": {
"translations": PartnersHub_CommissionPlans_CFDs_mvc_translationsResources_itIT,
"isRTL": false
},
"pl-PL": {
"translations": PartnersHub_CommissionPlans_CFDs_mvc_translationsResources_plPL,
"isRTL": false
},
"pt-PT": {
"translations": PartnersHub_CommissionPlans_CFDs_mvc_translationsResources_ptPT,
"isRTL": false
},
"ru-RU": {
"translations": PartnersHub_CommissionPlans_CFDs_mvc_translationsResources_ruRU,
"isRTL": false
}
};
});

