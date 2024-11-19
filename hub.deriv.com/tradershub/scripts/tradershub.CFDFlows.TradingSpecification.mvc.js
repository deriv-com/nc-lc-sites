define("tradershub.CFDFlows.TradingSpecification.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.model", "tradershub.Layouts.MainLayout.mvc$model", "OutSystemsUI.Interaction.Carousel.mvc$model", "CustomComponentsOfficial.ButtonVariants.PrimaryButton.mvc$model", "OutSystemsUI.model$ST_660adb7a9db48bff1b12c6e03515b415Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.model$ST_7d99fd1de65649f174aff6854b052539Structure", "tradershub.model$RC_07be8d7193ba16b1cc9d953b8fa48e9d", "tradershub.model$RL_ee1664da44e6893a731536d754684359"], function (OSRuntimeCore, tradershubModel, OutSystemsUIModel, tradershub_Layouts_MainLayout_mvcModel, OutSystemsUI_Interaction_Carousel_mvcModel, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvcModel) {
var OS = OSRuntimeCore;
{class GetCfdProductConfigsAggrRecInner extends 
OS.Model.AggregateRecord {
static attributesToDeclare() {
return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new GetCfdProductConfigsAggrRec(new GetCfdProductConfigsAggrRec.RecordClass({
RecordListType: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

GetCfdProductConfigsAggrRecInner.RecordListType = tradershubModel.RL_ee1664da44e6893a731536d754684359;
var GetCfdProductConfigsAggrRec = GetCfdProductConfigsAggrRecInner;
GetCfdProductConfigsAggrRec.init();
}


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("GetCfdProductConfigs", "getCfdProductConfigsAggr", "GetCfdProductConfigs", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetCfdProductConfigsAggrRec());
}, true, GetCfdProductConfigsAggrRec)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new VariablesRecord(new VariablesRecord.RecordClass({
getCfdProductConfigsAggr: OS.DataTypes.ImmutableBase.getData(str)
}));
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
Model._hasValidationWidgetsValue = ((tradershub_Layouts_MainLayout_mvcModel.hasValidationWidgets || OutSystemsUI_Interaction_Carousel_mvcModel.hasValidationWidgets) || CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("tradershub.CFDFlows.TradingSpecification.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.model", "react", "@outsystems/runtime-view-js", "tradershub.CFDFlows.TradingSpecification.mvc$model", "tradershub.CFDFlows.TradingSpecification.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.MainLayout.mvc$view", "@outsystems/runtime-widgets-js", "OutSystemsUI.Interaction.Carousel.mvc$view", "CustomComponentsOfficial.ButtonVariants.PrimaryButton.mvc$view", "OutSystemsUI.model$ST_660adb7a9db48bff1b12c6e03515b415Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.model$ST_7d99fd1de65649f174aff6854b052539Structure", "tradershub.model$RC_07be8d7193ba16b1cc9d953b8fa48e9d", "tradershub.model$RL_ee1664da44e6893a731536d754684359"], function (OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIModel, React, OSView, tradershub_CFDFlows_TradingSpecification_mvc_model, tradershub_CFDFlows_TradingSpecification_mvc_controller, tradershubClientVariables, tradershub_Layouts_MainLayout_mvc_view, OSWidgets, OutSystemsUI_Interaction_Carousel_mvc_view, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() { return "CFDFlows.TradingSpecification"; }

        static getAttributes() { return {
codeFunction: "TradingSpecification",
functionKey: "fa795d7e-919e-4b78-8964-2b562f57564b",
functionOwnerName: "tradershub",
functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_MainLayout_mvc_view, OutSystemsUI_Interaction_Carousel_mvc_view, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view];
        }

        get modelFactory() {
            return tradershub_CFDFlows_TradingSpecification_mvc_model;
        }

        get controllerFactory() {
            return tradershub_CFDFlows_TradingSpecification_mvc_controller;
        }

        get title() {
            

            return OSView.BaseView.BaseWebScreen.getTranslation("fl15+p6ReEuJZCtWL1dWSw#Title", "TradingSpecification");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(tradershub_Layouts_MainLayout_mvc_view, {
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
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.headerOnClick$Action(controller.callContext(eventHandlerContext));

;
}
},
extendedProperties: {
style: "height: 28px; margin-bottom: 16px; margin-top: 32px;"
},
style: "display-flex gap-s align-items-center",
visible: true,
_idProps: {
service: idService,
name: "Header"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "font-size: 18px;"
},
icon: "arrow-left",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 18px; font-weight: bold;"
},
text: [$text(getTranslation("SbVXh8kRtUqMVuQsr5qcnw#Value", "Account specifications"))],
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OutSystemsUI_Interaction_Carousel_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
OptionalConfigs: model.getCachedValue(idService.getId("gardOEb3zEa1uS4nl4AMpQ.OptionalConfigs"), function () {
return function () {
var rec = new OutSystemsUIModel.ST_7d99fd1de65649f174aff6854b052539Structure();
rec.autoPlayAttr = true;
rec.loopAttr = false;
return rec;
}();
}),
Navigation: tradershubModel.staticEntities.carouselNavigation.both,
ItemsPerSlide: model.getCachedValue(idService.getId("gardOEb3zEa1uS4nl4AMpQ.ItemsPerSlide"), function () {
return function () {
var rec = new OutSystemsUIModel.ST_660adb7a9db48bff1b12c6e03515b415Structure();
rec.desktopAttr = 3;
rec.tabletAttr = 2;
rec.phoneAttr = 1;
return rec;
}();
})
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
uuid: "4",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
carouselItems: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.List, {
animateItems: false,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.getCfdProductConfigsAggr.listOut,
style: "list list-group column-gap-m",
tag: "div",
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCfdProductConfigsAggr.dataFetchStatusAttr),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "border-color: #dee2e6; border-radius: 8px; border-style: solid; border-width: 1px; height: auto; padding: 16px;"
},
gridProperties: {
classes: "OSInline",
width: "352px",
marginLeft: "0"
},
style: "display-flex flex-direction-column row-gap-m",
visible: true,
_idProps: {
service: idService,
name: "Container"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(tradershubClientVariables.getAuthToken()), asPrimitiveValue(model.variables.getCfdProductConfigsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getCfdProductConfigsAggr.listOut.getCurrent(callContext.iterationContext).cfdProductConfigAttr.isAddedAttr), asPrimitiveValue(model.variables.getCfdProductConfigsAggr.listOut.getCurrent(callContext.iterationContext).cfdProductConfigAttr.assetsClassesAttr), asPrimitiveValue(model.variables.getCfdProductConfigsAggr.listOut.getCurrent(callContext.iterationContext).cfdProductConfigAttr.minimumDepositAttr), asPrimitiveValue(model.variables.getCfdProductConfigsAggr.listOut.getCurrent(callContext.iterationContext).cfdProductConfigAttr.commissionAttr), asPrimitiveValue(model.variables.getCfdProductConfigsAggr.listOut.getCurrent(callContext.iterationContext).cfdProductConfigAttr.spreadsAttr), asPrimitiveValue(model.variables.getCfdProductConfigsAggr.listOut.getCurrent(callContext.iterationContext).cfdProductConfigAttr.descriptionAttr), asPrimitiveValue(model.variables.getCfdProductConfigsAggr.listOut.getCurrent(callContext.iterationContext).cfdProductConfigAttr.titleAttr), asPrimitiveValue(model.variables.getCfdProductConfigsAggr.listOut.getCurrent(callContext.iterationContext).cfdProductConfigAttr.iconAttr)]
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column row-gap-s",
visible: true,
_idProps: {
service: idService,
name: "TradingSpecificationHeader"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex align-items-center",
visible: true,
_idProps: {
service: idService,
name: "ProductIconAndName"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedProperties: {
style: "height: 32px; margin-right: 16px;"
},
gridProperties: {
width: "32px"
},
style: "display-flex ",
type: /*External*/ 1,
url: model.variables.getCfdProductConfigsAggr.listOut.getCurrent(callContext.iterationContext).cfdProductConfigAttr.iconAttr,
_idProps: {
service: idService,
name: "Icon"
},
_widgetRecordProvider: widgetsRecordProvider,
url_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCfdProductConfigsAggr.dataFetchStatusAttr)
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 18px; font-weight: bold;"
},
gridProperties: {
marginLeft: "0"
},
value: model.variables.getCfdProductConfigsAggr.listOut.getCurrent(callContext.iterationContext).cfdProductConfigAttr.titleAttr,
_idProps: {
service: idService,
name: "Product"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCfdProductConfigsAggr.dataFetchStatusAttr)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "ProductDescriptionContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 12px;"
},
gridProperties: {
marginLeft: "0"
},
value: model.variables.getCfdProductConfigsAggr.listOut.getCurrent(callContext.iterationContext).cfdProductConfigAttr.descriptionAttr,
_idProps: {
service: idService,
name: "Description"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCfdProductConfigsAggr.dataFetchStatusAttr)
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column row-gap-s",
visible: true,
_idProps: {
service: idService,
name: "TradingSpecificationContent"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "background-color: #f3f6f8; border-color: #dee2e6; border-radius: 8px; border-style: solid; border-width: 0px; font-size: 12px; height: 42px; padding: 16px;"
},
style: "display-flex justify-content-space-between align-items-center",
visible: true,
_idProps: {
service: idService,
name: "SpreadsRow"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-weight: bold;"
},
gridProperties: {
marginLeft: "0"
},
value: "Spreads",
_idProps: {
service: idService,
name: "DynamicSpreadsLabel"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
marginLeft: "0"
},
value: model.getCachedValue(idService.getId("DynamicSpreads.Value"), function () {
return ((((!(model.variables.getCfdProductConfigsAggr.listOut.getCurrent(callContext.iterationContext).cfdProductConfigAttr.spreadsAttr.equals(OS.BuiltinFunctions.integerToDecimal(0)))) ? ("From ") : ("")) + OS.BuiltinFunctions.decimalToText(model.variables.getCfdProductConfigsAggr.listOut.getCurrent(callContext.iterationContext).cfdProductConfigAttr.spreadsAttr)) + " pips");
}, function () {
return model.variables.getCfdProductConfigsAggr.listOut.getCurrent(callContext.iterationContext).cfdProductConfigAttr.spreadsAttr;
}),
_idProps: {
service: idService,
name: "DynamicSpreads"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCfdProductConfigsAggr.dataFetchStatusAttr)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "background-color: #f3f6f8; border-color: #dee2e6; border-radius: 8px; border-style: solid; border-width: 0px; font-size: 12px; height: 42px; padding: 16px;"
},
style: "display-flex justify-content-space-between align-items-center",
visible: true,
_idProps: {
service: idService,
name: "CommissionRow"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-weight: bold;"
},
gridProperties: {
marginLeft: "0"
},
value: "Commission",
_idProps: {
service: idService,
name: "DynamicCommissionLabel"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
marginLeft: "0"
},
value: model.getCachedValue(idService.getId("DynamicCommission.Value"), function () {
return ((model.variables.getCfdProductConfigsAggr.listOut.getCurrent(callContext.iterationContext).cfdProductConfigAttr.commissionAttr) ? ("Yes") : ("No"));
}, function () {
return model.variables.getCfdProductConfigsAggr.listOut.getCurrent(callContext.iterationContext).cfdProductConfigAttr.commissionAttr;
}),
_idProps: {
service: idService,
name: "DynamicCommission"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCfdProductConfigsAggr.dataFetchStatusAttr)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "background-color: #f3f6f8; border-color: #dee2e6; border-radius: 8px; border-style: solid; border-width: 0px; font-size: 12px; height: 42px; padding: 16px;"
},
style: "display-flex justify-content-space-between align-items-center",
visible: true,
_idProps: {
service: idService,
name: "MinimumDepositRow"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-weight: bold;"
},
gridProperties: {
marginLeft: "0"
},
value: "Minimum deposit",
_idProps: {
service: idService,
name: "MinimumDepositLabel"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
marginLeft: "0"
},
value: model.getCachedValue(idService.getId("MinimumDeposit.Value"), function () {
return ((model.variables.getCfdProductConfigsAggr.listOut.getCurrent(callContext.iterationContext).cfdProductConfigAttr.minimumDepositAttr) ? ("Yes") : ("No"));
}, function () {
return model.variables.getCfdProductConfigsAggr.listOut.getCurrent(callContext.iterationContext).cfdProductConfigAttr.minimumDepositAttr;
}),
_idProps: {
service: idService,
name: "MinimumDeposit"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCfdProductConfigsAggr.dataFetchStatusAttr)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "background-color: #f3f6f8; border-color: #dee2e6; border-radius: 8px; border-style: solid; border-width: 0px; font-size: 12px; height: 100px; padding: 16px;"
},
style: "display-flex flex-direction-column row-gap-xs",
visible: true,
_idProps: {
service: idService,
name: "AssetClassesRow"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-weight: bold;"
},
gridProperties: {
marginLeft: "0"
},
value: "Asset classes",
_idProps: {
service: idService,
name: "AssetClassesLabel"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
marginLeft: "0"
},
value: model.variables.getCfdProductConfigsAggr.listOut.getCurrent(callContext.iterationContext).cfdProductConfigAttr.assetsClassesAttr,
_idProps: {
service: idService,
name: "AssetClasses"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCfdProductConfigsAggr.dataFetchStatusAttr)
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "TradingSpecificationFooter"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "CTAButtonContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(((tradershubClientVariables.getAuthToken()) !== ("")), false, this, function () {
return [$if((model.variables.getCfdProductConfigsAggr.listOut.getCurrent(callContext.iterationContext).cfdProductConfigAttr.isAddedAttr === true), false, this, function () {
return [React.createElement(CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Width: "100%",
title: "Added",
enabled: false,
borderRadius: "100"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClick$Action: function () {
var eventHandlerContext = callContext.clone();
controller.cTAOnClick$Action(controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "28",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [React.createElement(CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Width: "100%",
title: "Get account",
borderRadius: "100"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClick$Action: function () {
var eventHandlerContext = callContext.clone();
controller.cTAOnClick$Action(controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
name: "GetAccountButton",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
}, function () {
return [React.createElement(CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Width: "100%",
title: "Trade now",
borderRadius: "100"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClick$Action: function () {
var eventHandlerContext = callContext.clone();
controller.cTAOnClick$Action(controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "30",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}))))];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(tradershubClientVariables.getAuthToken()), asPrimitiveValue(model.variables.getCfdProductConfigsAggr.dataFetchStatusAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(tradershubClientVariables.getAuthToken()), asPrimitiveValue(model.variables.getCfdProductConfigsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getCfdProductConfigsAggr.listOut)]
})];
})
},
_dependencies: [asPrimitiveValue(tradershubClientVariables.getAuthToken()), asPrimitiveValue(model.variables.getCfdProductConfigsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getCfdProductConfigsAggr.listOut)]
}));
        }
    }

    return View;
});
define("tradershub.CFDFlows.TradingSpecification.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.model", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.CFDFlows.TradingSpecification.mvc$translationsResources", "tradershub.CFDFlows.controller", "OutSystemsUI.model$ST_660adb7a9db48bff1b12c6e03515b415Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.model$ST_7d99fd1de65649f174aff6854b052539Structure", "tradershub.model$RC_07be8d7193ba16b1cc9d953b8fa48e9d", "tradershub.model$RL_ee1664da44e6893a731536d754684359"], function (OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIModel, tradershubLanguageResources, tradershubClientVariables, tradershub_CFDFlows_TradingSpecification_mvc_TranslationsResources, tradershub_CFDFlowsController) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, tradershub_CFDFlows_TradingSpecification_mvc_TranslationsResources);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getCfdProductConfigs$AggrRefresh: 0
};
this.dataFetchDependentsGraph = {
getCfdProductConfigs$AggrRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}

// Server Actions - Methods

// Aggregates and Data Actions
get getCfdProductConfigs$AggrRefresh() {if(!(this.hasOwnProperty("_getCfdProductConfigs$AggrRefresh"))) {
this._getCfdProductConfigs$AggrRefresh = function () {
var innerBody = function (maxRecords, startIndex, callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetCfdProductConfigs", "screenservices/tradershub/CFDFlows/TradingSpecification/ScreenDataSetGetCfdProductConfigs", "LlZVAbpFH1HzLCMuLpgPnQ", maxRecords, startIndex, function (b) {
model.variables.getCfdProductConfigsAggr.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getCfdProductConfigsAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getCfdProductConfigsAggr.constructor));
}, undefined, undefined, undefined, callContext, undefined, true);
}.bind(this);
return OS.Logger.startActiveSpan("GetCfdProductConfigs", function (span) {
if(span) {
span.setAttribute("code.function", "GetCfdProductConfigs");
span.setAttribute("outsystems.function.key", "74dbdfa7-43c6-4868-8e48-952b95d166cd");
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

return this._getCfdProductConfigs$AggrRefresh;
}set getCfdProductConfigs$AggrRefresh(value) {this._getCfdProductConfigs$AggrRefresh = value;
}


get dataFetchActionNames() {if(!(this.hasOwnProperty("_dataFetchActionNames"))) {
this._dataFetchActionNames = ["getCfdProductConfigs$AggrRefresh"];
}

return this._dataFetchActionNames;
}set dataFetchActionNames(value) {this._dataFetchActionNames = value;
}

// Client Actions - Methods
get _headerOnClick$Action() {if(!(this.hasOwnProperty("__headerOnClick$Action"))) {
this.__headerOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("HeaderOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "HeaderOnClick");
span.setAttribute("outsystems.function.key", "4deedc55-e208-48fb-8d93-597144211d68");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("HeaderOnClick");
callContext = controller.callContext(callContext);
// Destination: /tradershub/CFDs
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "cfds", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__headerOnClick$Action;
}set _headerOnClick$Action(value) {this.__headerOnClick$Action = value;
}

get _cTAOnClick$Action() {if(!(this.hasOwnProperty("__cTAOnClick$Action"))) {
this.__cTAOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("CTAOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "CTAOnClick");
span.setAttribute("outsystems.function.key", "f64b5b22-fb7f-4483-9ab0-a9ec39e536da");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("CTAOnClick");
callContext = controller.callContext(callContext);
// Destination: /tradershub/CFDs
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "cfds", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__cTAOnClick$Action;
}set _cTAOnClick$Action(value) {this.__cTAOnClick$Action = value;
}


headerOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("HeaderOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "HeaderOnClick");
span.setAttribute("outsystems.function.key", "4deedc55-e208-48fb-8d93-597144211d68");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._headerOnClick$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

cTAOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("CTAOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "CTAOnClick");
span.setAttribute("outsystems.function.key", "f64b5b22-fb7f-4483-9ab0-a9ec39e536da");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._cTAOnClick$Action, callContext);
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
return tradershub_CFDFlowsController.default.handleError(ex, this.callContext());
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


define("tradershub.CFDFlows.TradingSpecification.mvc$translationsResources.fr-FR", [], function () {
return {
"SbVXh8kRtUqMVuQsr5qcnw#Value": "Spécifications du compte"
};
});

define("tradershub.CFDFlows.TradingSpecification.mvc$translationsResources", ["exports", "tradershub.CFDFlows.TradingSpecification.mvc$translationsResources.fr-FR"], function (exports, tradershub_CFDFlows_TradingSpecification_mvc_translationsResources_frFR) {
return {
"fr-FR": {
"translations": tradershub_CFDFlows_TradingSpecification_mvc_translationsResources_frFR,
"isRTL": false
}
};
});

