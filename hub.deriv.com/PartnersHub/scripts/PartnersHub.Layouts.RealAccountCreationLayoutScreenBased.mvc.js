define("PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "OutSystemsUI.model", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "OutSystemsUI.controller", "PartnersHub.controller", "OutSystemsUI.Navigation.Wizard.mvc$model", "OutSystemsUI.Navigation.WizardItem.mvc$model", "OutSystemsUI.Numbers.ProgressBar.mvc$model", "CustomComponentsOfficial.ButtonVariants.PrimaryButton.mvc$model", "CustomComponentsOfficial.ButtonVariants.SecondaryButton.mvc$model", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "RESTAPIWebsocketOfficial.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.controller$GetSettings", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "OutSystemsUI.controller$AddFavicon", "PartnersHub.controller$GetToken", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure", "RESTAPIWebsocketOfficial.controller$ResidenceList"], function (OSRuntimeCore, PartnersHubModel, OutSystemsUIModel, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, OutSystemsUIController, PartnersHubController, OutSystemsUI_Navigation_Wizard_mvcModel, OutSystemsUI_Navigation_WizardItem_mvcModel, OutSystemsUI_Numbers_ProgressBar_mvcModel, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvcModel, CustomComponentsOfficial_ButtonVariants_SecondaryButton_mvcModel) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("isExitModalOpen", "isExitModalOpenVar", "isExitModalOpen", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new VariablesRecord(new VariablesRecord.RecordClass({
isExitModalOpenVar: OS.DataTypes.ImmutableBase.getData(str)
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
Model._hasValidationWidgetsValue = ((((OutSystemsUI_Navigation_Wizard_mvcModel.hasValidationWidgets || OutSystemsUI_Navigation_WizardItem_mvcModel.hasValidationWidgets) || OutSystemsUI_Numbers_ProgressBar_mvcModel.hasValidationWidgets) || CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvcModel.hasValidationWidgets) || CustomComponentsOfficial_ButtonVariants_SecondaryButton_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.mvc$model", "PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Navigation.Wizard.mvc$view", "OutSystemsUI.Navigation.WizardItem.mvc$view", "OutSystemsUI.Numbers.ProgressBar.mvc$view", "CustomComponentsOfficial.ButtonVariants.PrimaryButton.mvc$view", "CustomComponentsOfficial.ButtonVariants.SecondaryButton.mvc$view", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "RESTAPIWebsocketOfficial.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.controller$GetSettings", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "OutSystemsUI.controller$AddFavicon", "PartnersHub.controller$GetToken", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure", "RESTAPIWebsocketOfficial.controller$ResidenceList"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, OutSystemsUIController, React, OSView, PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvc_model, PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvc_controller, PartnersHubClientVariables, OSWidgets, OutSystemsUI_Navigation_Wizard_mvc_view, OutSystemsUI_Navigation_WizardItem_mvc_view, OutSystemsUI_Numbers_ProgressBar_mvc_view, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view, CustomComponentsOfficial_ButtonVariants_SecondaryButton_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "Layouts.RealAccountCreationLayoutScreenBased"; }

        static getAttributes() { return {
codeFunction: "RealAccountCreationLayoutScreenBased",
functionKey: "7dc3e6f7-1bd3-49f5-8740-1f8fd6ab8311",
functionOwnerName: "PartnersHub",
functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Navigation_Wizard_mvc_view, OutSystemsUI_Navigation_WizardItem_mvc_view, OutSystemsUI_Numbers_ProgressBar_mvc_view, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view, CustomComponentsOfficial_ButtonVariants_SecondaryButton_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvc_controller;
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
style: "display-flex",
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
style: "background-color: #F2F3F4; height: 100vh; padding: 48px 24px 0px 24px;"
},
gridProperties: {
classes: "OSInline",
width: "fit-content"
},
style: "real-account-signup-sidebar",
visible: true,
_idProps: {
service: idService,
name: "SidebarMenu"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
extendedProperties: {
style: "margin-bottom: 24px;"
},
gridProperties: {
classes: "OSFillParent"
},
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #222; font-size: 20px; font-weight: bold; text-wrap: nowrap;"
},
text: [$text(getTranslation("Q97Ng7SjeEiC8mERYbqfcg#Value", "Add a real account"))],
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OutSystemsUI_Navigation_Wizard_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
IsVertical: true,
ExtendedClass: "real-account-signup-layout"
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
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [$if(PartnersHubClientVariables.getRealSignupIsIDVSupported(), false, this, function () {
return [React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Status: model.getCachedValue(idService.getId("3GNbWv9310qbnWLGy3_0pA.Status"), function () {
return (((PartnersHubClientVariables.getRealSignupCurrentStep() === 1)) ? (PartnersHubModel.staticEntities.steps.active) : (PartnersHubModel.staticEntities.steps.past));
}, function () {
return PartnersHubClientVariables.getRealSignupCurrentStep();
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
uuid: "5",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [$if((PartnersHubClientVariables.getRealSignupCurrentStep() > 1), false, this, function () {
return [React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "font-size: 12px;"
},
icon: "check",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
})];
}),
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: left;"
},
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #222;"
},
text: [$text(getTranslation("uDtOUtEJWECyil1CXTP2lQ#Value", "Account type"))],
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep())]
}), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Status: model.getCachedValue(idService.getId("fK+Xc0pbwE2LA+vSoTt0lA.Status"), function () {
return (((PartnersHubClientVariables.getRealSignupCurrentStep() === 2)) ? (PartnersHubModel.staticEntities.steps.active) : ((((PartnersHubClientVariables.getRealSignupCurrentStep() < 2)) ? (PartnersHubModel.staticEntities.steps.next) : (PartnersHubModel.staticEntities.steps.past))));
}, function () {
return PartnersHubClientVariables.getRealSignupCurrentStep();
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
uuid: "9",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [$if((PartnersHubClientVariables.getRealSignupCurrentStep() > 2), false, this, function () {
return [React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "font-size: 12px;"
},
icon: "check",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
})];
}),
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: left;"
},
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #222;"
},
text: [$text(getTranslation("TWj_ZoCp+UK698mivgVm1g#Value", "Account currency"))],
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep())]
}), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Status: model.getCachedValue(idService.getId("rOXbX75agEWct_Kp382Skg.Status"), function () {
return (((PartnersHubClientVariables.getRealSignupCurrentStep() === 3)) ? (PartnersHubModel.staticEntities.steps.active) : ((((PartnersHubClientVariables.getRealSignupCurrentStep() < 3)) ? (PartnersHubModel.staticEntities.steps.next) : (PartnersHubModel.staticEntities.steps.past))));
}, function () {
return PartnersHubClientVariables.getRealSignupCurrentStep();
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
uuid: "13",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [$if((PartnersHubClientVariables.getRealSignupCurrentStep() > 3), false, this, function () {
return [React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "font-size: 12px;"
},
icon: "check",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
})];
}),
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: left;"
},
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("mExEMCPefESrzYfCDsOapg#Value", "Personal details")))];
})
},
_dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep())]
}), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Status: model.getCachedValue(idService.getId("1TATBLEh8UGHAH2vjtKfiQ.Status"), function () {
return (((PartnersHubClientVariables.getRealSignupCurrentStep() === 4)) ? (PartnersHubModel.staticEntities.steps.active) : ((((PartnersHubClientVariables.getRealSignupCurrentStep() < 4)) ? (PartnersHubModel.staticEntities.steps.next) : (PartnersHubModel.staticEntities.steps.past))));
}, function () {
return PartnersHubClientVariables.getRealSignupCurrentStep();
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
uuid: "16",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [$if((PartnersHubClientVariables.getRealSignupCurrentStep() > 4), false, this, function () {
return [React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "font-size: 12px;"
},
icon: "check",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
})];
}),
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: left;"
},
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("yOp15loU80ChvPofJNiUjw#Value", "Identity verification")))];
})
},
_dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep())]
}), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Status: model.getCachedValue(idService.getId("T+EnjpzFVUuy6JU4qVBhtg.Status"), function () {
return (((PartnersHubClientVariables.getRealSignupCurrentStep() === 5)) ? (PartnersHubModel.staticEntities.steps.active) : ((((PartnersHubClientVariables.getRealSignupCurrentStep() < 5)) ? (PartnersHubModel.staticEntities.steps.next) : (PartnersHubModel.staticEntities.steps.past))));
}, function () {
return PartnersHubClientVariables.getRealSignupCurrentStep();
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
uuid: "19",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [$if((PartnersHubClientVariables.getRealSignupCurrentStep() > 5), false, this, function () {
return [React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "font-size: 12px;"
},
icon: "check",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
})];
}),
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: left;"
},
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("v+h_lQVWt06O6N5EaUse_g#Value", "Employment details")))];
})
},
_dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep())]
}), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Status: model.getCachedValue(idService.getId("ErEAGCkGUEKZDVTOu7ouOg.Status"), function () {
return (((PartnersHubClientVariables.getRealSignupCurrentStep() === 6)) ? (PartnersHubModel.staticEntities.steps.active) : ((((PartnersHubClientVariables.getRealSignupCurrentStep() < 6)) ? (PartnersHubModel.staticEntities.steps.next) : (PartnersHubModel.staticEntities.steps.past))));
}, function () {
return PartnersHubClientVariables.getRealSignupCurrentStep();
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
uuid: "22",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [$if((PartnersHubClientVariables.getRealSignupCurrentStep() > 6), false, this, function () {
return [React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "font-size: 12px;"
},
icon: "check",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
})];
}),
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: left;"
},
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("Ji4ZjuscLUqjnyHBW5nerw#Value", "Address details")))];
})
},
_dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep())]
}), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Status: model.getCachedValue(idService.getId("7Y1zOzFTbEuJV4SlCnynmA.Status"), function () {
return (((PartnersHubClientVariables.getRealSignupCurrentStep() === 7)) ? (PartnersHubModel.staticEntities.steps.active) : ((((PartnersHubClientVariables.getRealSignupCurrentStep() < 7)) ? (PartnersHubModel.staticEntities.steps.next) : (PartnersHubModel.staticEntities.steps.past))));
}, function () {
return PartnersHubClientVariables.getRealSignupCurrentStep();
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
uuid: "25",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [$if((PartnersHubClientVariables.getRealSignupCurrentStep() > 7), false, this, function () {
return [React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "font-size: 12px;"
},
icon: "check",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
})];
}),
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: left;"
},
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("xvmMZEzl50OreHMTPCda5w.Value"), function () {
return (((PartnersHubClientVariables.getSelectedAccountType() === "Individual")) ? ("Promotional platforms") : ("Company details"));
}, function () {
return PartnersHubClientVariables.getSelectedAccountType();
}),
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(PartnersHubClientVariables.getSelectedAccountType()), asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep())]
}), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Status: model.getCachedValue(idService.getId("mWhYeAtQVEKu5b0mz+sviQ.Status"), function () {
return (((PartnersHubClientVariables.getRealSignupCurrentStep() === 8)) ? (PartnersHubModel.staticEntities.steps.active) : ((((PartnersHubClientVariables.getRealSignupCurrentStep() < 8)) ? (PartnersHubModel.staticEntities.steps.next) : (PartnersHubModel.staticEntities.steps.past))));
}, function () {
return PartnersHubClientVariables.getRealSignupCurrentStep();
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
uuid: "29",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [$if((PartnersHubClientVariables.getRealSignupCurrentStep() > 8), false, this, function () {
return [React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "font-size: 12px;"
},
icon: "check",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
})];
}),
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: left;"
},
visible: true,
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("hGRCEt80Lk20RurWnAhIHQ#Value", "Terms of use")))];
})
},
_dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep())]
})];
}, function () {
return [React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Status: model.getCachedValue(idService.getId("oxFffSRRfEed5TcHV2qmbg.Status"), function () {
return (((PartnersHubClientVariables.getRealSignupCurrentStep() === 1)) ? (PartnersHubModel.staticEntities.steps.active) : (PartnersHubModel.staticEntities.steps.past));
}, function () {
return PartnersHubClientVariables.getRealSignupCurrentStep();
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
uuid: "32",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [$if((PartnersHubClientVariables.getRealSignupCurrentStep() > 1), false, this, function () {
return [React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "font-size: 12px;"
},
icon: "check",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
})];
}),
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: left;"
},
visible: true,
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #222;"
},
text: [$text(getTranslation("pSVxkBEh2U6GVxk7DMkoEg#Value", "Account type"))],
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep())]
}), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Status: model.getCachedValue(idService.getId("w6Dczl2pIkOjtwxFFxoo_Q.Status"), function () {
return (((PartnersHubClientVariables.getRealSignupCurrentStep() === 2)) ? (PartnersHubModel.staticEntities.steps.active) : ((((PartnersHubClientVariables.getRealSignupCurrentStep() < 2)) ? (PartnersHubModel.staticEntities.steps.next) : (PartnersHubModel.staticEntities.steps.past))));
}, function () {
return PartnersHubClientVariables.getRealSignupCurrentStep();
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
uuid: "36",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [$if((PartnersHubClientVariables.getRealSignupCurrentStep() > 2), false, this, function () {
return [React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "font-size: 12px;"
},
icon: "check",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
})];
}),
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: left;"
},
visible: true,
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #222;"
},
text: [$text(getTranslation("jMl9S6tJRkyFkcHxcPefug#Value", "Account currency"))],
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep())]
}), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Status: model.getCachedValue(idService.getId("w5hUwm33Z0uCNmTmiFcDjg.Status"), function () {
return (((PartnersHubClientVariables.getRealSignupCurrentStep() === 3)) ? (PartnersHubModel.staticEntities.steps.active) : ((((PartnersHubClientVariables.getRealSignupCurrentStep() < 3)) ? (PartnersHubModel.staticEntities.steps.next) : (PartnersHubModel.staticEntities.steps.past))));
}, function () {
return PartnersHubClientVariables.getRealSignupCurrentStep();
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
uuid: "40",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [$if((PartnersHubClientVariables.getRealSignupCurrentStep() > 3), false, this, function () {
return [React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "font-size: 12px;"
},
icon: "check",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
})];
}),
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: left;"
},
visible: true,
_idProps: {
service: idService,
uuid: "42"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("w0sRnWut+kGkH5xudrrCeA#Value", "Personal details")))];
})
},
_dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep())]
}), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Status: model.getCachedValue(idService.getId("43fQh46WYUqvK5hlFz9JgA.Status"), function () {
return (((PartnersHubClientVariables.getRealSignupCurrentStep() === 4)) ? (PartnersHubModel.staticEntities.steps.active) : ((((PartnersHubClientVariables.getRealSignupCurrentStep() < 4)) ? (PartnersHubModel.staticEntities.steps.next) : (PartnersHubModel.staticEntities.steps.past))));
}, function () {
return PartnersHubClientVariables.getRealSignupCurrentStep();
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
uuid: "43",
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [$if((PartnersHubClientVariables.getRealSignupCurrentStep() > 4), false, this, function () {
return [React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "font-size: 12px;"
},
icon: "check",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
})];
}),
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: left;"
},
visible: true,
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("HJY6QS2I40mmjGEDoliyag#Value", "Employment details")))];
})
},
_dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep())]
}), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Status: model.getCachedValue(idService.getId("SO74IQR18kKGWsSlj+IQCw.Status"), function () {
return (((PartnersHubClientVariables.getRealSignupCurrentStep() === 5)) ? (PartnersHubModel.staticEntities.steps.active) : ((((PartnersHubClientVariables.getRealSignupCurrentStep() < 5)) ? (PartnersHubModel.staticEntities.steps.next) : (PartnersHubModel.staticEntities.steps.past))));
}, function () {
return PartnersHubClientVariables.getRealSignupCurrentStep();
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
uuid: "46",
alias: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [$if((PartnersHubClientVariables.getRealSignupCurrentStep() > 5), false, this, function () {
return [React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "font-size: 12px;"
},
icon: "check",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "47"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
})];
}),
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: left;"
},
visible: true,
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("zxBmeAArFkuVFby3uoNpEw#Value", "Address details")))];
})
},
_dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep())]
}), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Status: model.getCachedValue(idService.getId("SD_vMUa9xk2WfuYMTvSsFg.Status"), function () {
return (((PartnersHubClientVariables.getRealSignupCurrentStep() === 6)) ? (PartnersHubModel.staticEntities.steps.active) : ((((PartnersHubClientVariables.getRealSignupCurrentStep() < 6)) ? (PartnersHubModel.staticEntities.steps.next) : (PartnersHubModel.staticEntities.steps.past))));
}, function () {
return PartnersHubClientVariables.getRealSignupCurrentStep();
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
uuid: "49",
alias: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [$if((PartnersHubClientVariables.getRealSignupCurrentStep() > 6), false, this, function () {
return [React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "font-size: 12px;"
},
icon: "check",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "50"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
})];
}),
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: left;"
},
visible: true,
_idProps: {
service: idService,
uuid: "51"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("L4FutAYOw0iVAKRbrVupiQ.Value"), function () {
return (((PartnersHubClientVariables.getSelectedAccountType() === "Individual")) ? ("Promotional platforms") : ("Company details"));
}, function () {
return PartnersHubClientVariables.getSelectedAccountType();
}),
_idProps: {
service: idService,
uuid: "52"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(PartnersHubClientVariables.getSelectedAccountType()), asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep())]
}), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Status: model.getCachedValue(idService.getId("0vdL3DKadkiwhJAmQyvveg.Status"), function () {
return (((PartnersHubClientVariables.getRealSignupCurrentStep() === 7)) ? (PartnersHubModel.staticEntities.steps.active) : ((((PartnersHubClientVariables.getRealSignupCurrentStep() < 7)) ? (PartnersHubModel.staticEntities.steps.next) : (PartnersHubModel.staticEntities.steps.past))));
}, function () {
return PartnersHubClientVariables.getRealSignupCurrentStep();
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
uuid: "53",
alias: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [$if((PartnersHubClientVariables.getRealSignupCurrentStep() > 7), false, this, function () {
return [React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "font-size: 12px;"
},
icon: "check",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "54"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
})];
}),
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: left;"
},
visible: true,
_idProps: {
service: idService,
uuid: "55"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("Xjyhk61g2keveaMnv0pMjg#Value", "Terms of use")))];
})
},
_dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep())]
})];
})];
})
},
_dependencies: [asPrimitiveValue(PartnersHubClientVariables.getSelectedAccountType()), asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep()), asPrimitiveValue(PartnersHubClientVariables.getRealSignupIsIDVSupported())]
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline",
width: "100%"
},
style: "display-flex flex-direction-column",
visible: true,
_idProps: {
service: idService,
uuid: "56"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline",
width: "100%"
},
style: "real-account-signup-progressbar",
visible: true,
_idProps: {
service: idService,
uuid: "57"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "align-items: center; background: #fff; border-bottom: 2px solid #F1F3F5; display: flex; justify-content: space-between; padding: 0px 16px;"
},
gridProperties: {
classes: "OSInline"
},
visible: true,
_idProps: {
service: idService,
name: "ProgressBarMobileHeader"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: ((PartnersHubClientVariables.getRealSignupCurrentStep()) !== (1)),
_idProps: {
service: idService,
uuid: "59"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.onClickBack$Action(controller.callContext(eventHandlerContext));
});
;
}
},
extendedProperties: {
style: "cursor: pointer;"
},
gridProperties: {
marginLeft: "0"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.backicon2.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "60"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "background: #fff; padding: 16px;"
},
gridProperties: {
classes: "OSInline",
width: "95%"
},
visible: true,
_idProps: {
service: idService,
uuid: "61"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_Numbers_ProgressBar_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Thickness: 9,
Progress: PartnersHubClientVariables.getProgressBarLength(),
ProgressColor: PartnersHubModel.staticEntities.color.primary
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
uuid: "62",
alias: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: PlaceholderContent.Empty
},
_dependencies: []
})), React.createElement(OSWidgets.Image, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.onClickClose$Action(controller.callContext(eventHandlerContext));

;
}
},
extendedProperties: {
style: "cursor: pointer; font-weight: normal; margin-right: 0px; margin-top: 0px;"
},
gridProperties: {
marginLeft: "0"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.closenormal.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "63"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "real-account-signup-layout__content",
visible: true,
_idProps: {
service: idService,
uuid: "64"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "real-account-creation-content-container",
visible: true,
_idProps: {
service: idService,
uuid: "65"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
style: "align-items: center; display: flex; justify-content: space-between;"
},
visible: PartnersHubClientVariables.getIsMobile(),
_idProps: {
service: idService,
uuid: "66"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 18px; font-weight: bold;"
},
value: PartnersHubClientVariables.getCurrentStepTitle(),
_idProps: {
service: idService,
uuid: "67"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.onClickSkipFunction$Action(controller.callContext(eventHandlerContext));
});
;
}
},
visible: (PartnersHubClientVariables.getRealSignupCurrentStep() === 4),
_idProps: {
service: idService,
uuid: "68"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #333; font-weight: bold; text-decoration: underline;"
},
text: ["Skip"],
_idProps: {
service: idService,
uuid: "69"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
style: "align-items: center; display: flex; justify-content: space-between; min-width: 800px;"
},
gridProperties: {
classes: "OSInline"
},
style: "title-container",
visible: PartnersHubClientVariables.getIsDesktop(),
_idProps: {
service: idService,
name: "TitleContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "71"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if((PartnersHubClientVariables.getRealSignupCurrentStep() > 1), false, this, function () {
return [React.createElement(OSWidgets.Image, {
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.onClickBack$Action(controller.callContext(eventHandlerContext));
});
;
}
},
extendedProperties: {
style: "cursor: pointer;"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.arrowleft.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "72"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
})), React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 20px; font-weight: bold;"
},
value: PartnersHubClientVariables.getCurrentStepTitle(),
_idProps: {
service: idService,
uuid: "73"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.onClickClose$Action(controller.callContext(eventHandlerContext));

;
}
},
extendedProperties: {
style: "cursor: pointer;"
},
visible: true,
_idProps: {
service: idService,
uuid: "74"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedProperties: {
style: "height: 14px;"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.closenormal.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "75"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.content,
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider
}))))), React.createElement(OSWidgets.Popup, {
extendedProperties: {
style: "border-radius: 8px; max-width: 400px; padding: 16px;"
},
showPopup: model.variables.isExitModalOpenVar,
style: "popup-dialog",
_idProps: {
service: idService,
uuid: "77"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "gap: 16px;"
},
style: "display-flex flex-direction-column",
visible: true,
_idProps: {
service: idService,
uuid: "78"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex align-items-center justify-content-space-between",
visible: true,
_idProps: {
service: idService,
uuid: "79"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-size: 16px; font-weight: bold;"
},
text: [$text(getTranslation("osYDuBCJKEGqpYxflRPNgA#Value", "Exit profile setup?"))],
_idProps: {
service: idService,
uuid: "80"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Image, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.primaryButtononClick$Action(controller.callContext(eventHandlerContext));

;
}
},
extendedProperties: {
style: "cursor: pointer;"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.closenormal.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "81"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "82"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("cUdxsFP7fkuymApx3+aRNQ#Value", "Complete the setup to access custom commission plans."))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "display: flex; flex-direction: column; gap: 8px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "83"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "84"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Width: "100%",
height: "40px",
title: "Finish setup",
enabled: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClick$Action: function () {
var eventHandlerContext = callContext.clone();
controller.primaryButtononClick$Action(controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "85",
alias: "18"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "86"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(CustomComponentsOfficial_ButtonVariants_SecondaryButton_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
title: "Exit",
BorderColor: "#FF444F",
TextColor: "FF444F",
Width: "100%",
height: "40px"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClick$Action: function () {
var eventHandlerContext = callContext.clone();
controller.secondaryButtononClick$Action(controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "87",
alias: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))))));
        }
    }

    return View;
});
define("PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "OutSystemsUI.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.mvc$translationsResources", "PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.mvc$controller.OnReady.CheckIfIDVIsSupportedJSJS", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "RESTAPIWebsocketOfficial.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.controller$GetSettings", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "OutSystemsUI.controller$AddFavicon", "PartnersHub.controller$GetToken", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure", "RESTAPIWebsocketOfficial.controller$ResidenceList"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, OutSystemsUIController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvc_TranslationsResources, PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvc_controller_OnReady_CheckIfIDVIsSupportedJSJS) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvc_TranslationsResources);
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
get _onClickClose$Action() {if(!(this.hasOwnProperty("__onClickClose$Action"))) {
this.__onClickClose$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnClickClose", function (span) {
if(span) {
span.setAttribute("code.function", "OnClickClose");
span.setAttribute("outsystems.function.key", "14fa3404-976f-4add-95f2-ec7794298c6c");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnClickClose");
callContext = controller.callContext(callContext);
// isExitModalOpen = True
model.variables.isExitModalOpenVar = true;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onClickClose$Action;
}set _onClickClose$Action(value) {this.__onClickClose$Action = value;
}

get _onClickBack$Action() {if(!(this.hasOwnProperty("__onClickBack$Action"))) {
this.__onClickBack$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnClickBack", function (span) {
if(span) {
span.setAttribute("code.function", "OnClickBack");
span.setAttribute("outsystems.function.key", "4da19396-e810-478c-b7e0-990dedfaea7e");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnClickBack");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: onClickBack2
return controller.onClickBack2$Action(callContext);
});
}, function () {
if(span) {
span.end();
}

});
}, 1);
};
}

return this.__onClickBack$Action;
}set _onClickBack$Action(value) {this.__onClickBack$Action = value;
}

get _onClickSkipFunction$Action() {if(!(this.hasOwnProperty("__onClickSkipFunction$Action"))) {
this.__onClickSkipFunction$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnClickSkipFunction", function (span) {
if(span) {
span.setAttribute("code.function", "OnClickSkipFunction");
span.setAttribute("outsystems.function.key", "a8281d15-f4e2-4136-ad6e-ad2efafb5f0c");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnClickSkipFunction");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: OnClickSkip
return controller.onClickSkip$Action(callContext);
});
}, function () {
if(span) {
span.end();
}

});
}, 1);
};
}

return this.__onClickSkipFunction$Action;
}set _onClickSkipFunction$Action(value) {this.__onClickSkipFunction$Action = value;
}

get _secondaryButtononClick$Action() {if(!(this.hasOwnProperty("__secondaryButtononClick$Action"))) {
this.__secondaryButtononClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("SecondaryButtononClick", function (span) {
if(span) {
span.setAttribute("code.function", "SecondaryButtononClick");
span.setAttribute("outsystems.function.key", "c9e182c0-063f-4e57-80b0-7b5fb92647d5");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("SecondaryButtononClick");
callContext = controller.callContext(callContext);
// isExitModalOpen = False
model.variables.isExitModalOpenVar = false;
// isCompleteMyProfileEnabledFF = True
PartnersHubClientVariables.setisCompleteMyProfileEnabledFF(true);
// Destination: /PartnersHub/PartnersHubDashboard
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "PartnersHubDashboard", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade), callContext, true);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__secondaryButtononClick$Action;
}set _secondaryButtononClick$Action(value) {this.__secondaryButtononClick$Action = value;
}

get _onReady$Action() {if(!(this.hasOwnProperty("__onReady$Action"))) {
this.__onReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnReady", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "d1c69043-8032-4df3-abb0-32c947865792");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var getSettingsVar = new OS.DataTypes.VariableHolder();
var addFaviconVar = new OS.DataTypes.VariableHolder();
var getTokenVar = new OS.DataTypes.VariableHolder();
var residenceListVar = new OS.DataTypes.VariableHolder();
var checkIfIDVIsSupportedJSJSResult = new OS.DataTypes.VariableHolder();
var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: GetToken
getTokenVar.value = PartnersHubController.default.getToken$Action(callContext);

// Execute Action: AddFavicon
addFaviconVar.value = OutSystemsUIController.default.addFavicon$Action("favicon.ico", callContext);

// Execute Action: ResidenceList
model.flush();
return RESTAPIWebsocketOfficialController.default.residenceList$Action(PartnersHubClientVariables.getServer(), "1", "en", callContext).then(function (value) {
residenceListVar.value = value;
}).then(function () {
// Execute Action: GetSettings
model.flush();
return RESTAPIWebsocketOfficialController.default.getSettings$Action(PartnersHubClientVariables.getServer(), getTokenVar.value.tokenOut, "1", "en", callContext).then(function (value) {
getSettingsVar.value = value;
});
}).then(function () {
// JSON Serialize: JSONSerialize1
jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(residenceListVar.value.responseOut, false, false);
checkIfIDVIsSupportedJSJSResult.value = OS.Logger.startActiveSpan("CheckIfIDVIsSupportedJS", function (span) {
if(span) {
span.setAttribute("code.function", "CheckIfIDVIsSupportedJS");
span.setAttribute("outsystems.function.key", "121b8526-b3d8-4e74-9899-bb5fc1a0f166");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvc_controller_OnReady_CheckIfIDVIsSupportedJSJS, "CheckIfIDVIsSupportedJS", "OnReady", {
ResidenceList: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize1Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
SelectedCitizenship: OS.DataConversion.JSNodeParamConverter.to(getSettingsVar.value.responseOut.get_settingsAttr.citizenAttr, OS.DataTypes.DataTypes.Text),
isIDVSupported: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.OnReady$checkIfIDVIsSupportedJSJSResult"))();
jsNodeResult.isIDVSupportedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.isIDVSupported, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// RealSignupIsIDVSupported = CheckIfIDVIsSupportedJS.isIDVSupported
PartnersHubClientVariables.setRealSignupIsIDVSupported(checkIfIDVIsSupportedJSJSResult.value.isIDVSupportedOut);
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

get _primaryButtononClick$Action() {if(!(this.hasOwnProperty("__primaryButtononClick$Action"))) {
this.__primaryButtononClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("PrimaryButtononClick", function (span) {
if(span) {
span.setAttribute("code.function", "PrimaryButtononClick");
span.setAttribute("outsystems.function.key", "d8325d47-d9e3-4945-a865-7f165f39faa9");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("PrimaryButtononClick");
callContext = controller.callContext(callContext);
// isExitModalOpen = False
model.variables.isExitModalOpenVar = false;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__primaryButtononClick$Action;
}set _primaryButtononClick$Action(value) {this.__primaryButtononClick$Action = value;
}


onClickClose$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnClickClose__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnClickClose");
span.setAttribute("outsystems.function.key", "14fa3404-976f-4add-95f2-ec7794298c6c");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onClickClose$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

onClickBack$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnClickBack__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnClickBack");
span.setAttribute("outsystems.function.key", "4da19396-e810-478c-b7e0-990dedfaea7e");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._onClickBack$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

onClickSkipFunction$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnClickSkipFunction__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnClickSkipFunction");
span.setAttribute("outsystems.function.key", "a8281d15-f4e2-4136-ad6e-ad2efafb5f0c");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._onClickSkipFunction$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

secondaryButtononClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("SecondaryButtononClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "SecondaryButtononClick");
span.setAttribute("outsystems.function.key", "c9e182c0-063f-4e57-80b0-7b5fb92647d5");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._secondaryButtononClick$Action, callContext);
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
span.setAttribute("outsystems.function.key", "d1c69043-8032-4df3-abb0-32c947865792");
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

primaryButtononClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("PrimaryButtononClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "PrimaryButtononClick");
span.setAttribute("outsystems.function.key", "d8325d47-d9e3-4945-a865-7f165f39faa9");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._primaryButtononClick$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

get onClickSkip$Action() {if(!(this.hasOwnProperty("_onClickSkip$Action"))) {
this._onClickSkip$Action = function () {
return Promise.resolve();
};
}

return this._onClickSkip$Action;
}set onClickSkip$Action(value) {this._onClickSkip$Action = value;
}

get onClickBack2$Action() {if(!(this.hasOwnProperty("_onClickBack2$Action"))) {
this._onClickBack2$Action = function () {
return Promise.resolve();
};
}

return this._onClickBack2$Action;
}set onClickBack2$Action(value) {this._onClickBack2$Action = value;
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

// Client Actions - Variables
Controller.registerVariableGroupType("PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.OnReady$checkIfIDVIsSupportedJSJSResult", [{
name: "isIDVSupported",
attrName: "isIDVSupportedOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

}
return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.mvc$controller.OnReady.CheckIfIDVIsSupportedJSJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const country = JSON.parse($parameters.ResidenceList || JSON.stringify([])).residence_list.find(c => c.value == $parameters.SelectedCitizenship)

$parameters.isIDVSupported = Boolean(country?.identity?.services?.idv?.is_country_supported)


};
});


define("PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.mvc$translationsResources.ar-001", [], function () {
return {
"cUdxsFP7fkuymApx3+aRNQ#Value": "أكمل الإعداد للوصول إلى خطط العمولة المخصصة.",
"osYDuBCJKEGqpYxflRPNgA#Value": "إعداد ملف الخروج؟",
"Xjyhk61g2keveaMnv0pMjg#Value": "شروط الاستخدام",
"zxBmeAArFkuVFby3uoNpEw#Value": "تفاصيل العنوان",
"HJY6QS2I40mmjGEDoliyag#Value": "تفاصيل التوظيف",
"w0sRnWut+kGkH5xudrrCeA#Value": "التفاصيل الشخصية",
"jMl9S6tJRkyFkcHxcPefug#Value": "عملة الحساب",
"pSVxkBEh2U6GVxk7DMkoEg#Value": "نوع الحساب",
"hGRCEt80Lk20RurWnAhIHQ#Value": "شروط الاستخدام",
"Ji4ZjuscLUqjnyHBW5nerw#Value": "تفاصيل العنوان",
"v+h_lQVWt06O6N5EaUse_g#Value": "تفاصيل التوظيف",
"yOp15loU80ChvPofJNiUjw#Value": "التحقق من الهوية",
"mExEMCPefESrzYfCDsOapg#Value": "التفاصيل الشخصية",
"TWj_ZoCp+UK698mivgVm1g#Value": "عملة الحساب",
"uDtOUtEJWECyil1CXTP2lQ#Value": "نوع الحساب",
"Q97Ng7SjeEiC8mERYbqfcg#Value": "إضافة حساب حقيقي"
};
});

define("PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.mvc$translationsResources.de-DE", [], function () {
return {
"cUdxsFP7fkuymApx3+aRNQ#Value": "Schließen Sie die Einrichtung ab, um auf benutzerdefinierte Provisionspläne zuzugreifen.",
"osYDuBCJKEGqpYxflRPNgA#Value": "Profilausgang einrichten?",
"Xjyhk61g2keveaMnv0pMjg#Value": "Nutzungsbedingungen",
"zxBmeAArFkuVFby3uoNpEw#Value": "Adressdetails",
"HJY6QS2I40mmjGEDoliyag#Value": "Beschäftigungsdetails",
"w0sRnWut+kGkH5xudrrCeA#Value": "Persönliche Daten",
"jMl9S6tJRkyFkcHxcPefug#Value": "Kontowährung",
"pSVxkBEh2U6GVxk7DMkoEg#Value": "Kontotyp",
"hGRCEt80Lk20RurWnAhIHQ#Value": "Nutzungsbedingungen",
"Ji4ZjuscLUqjnyHBW5nerw#Value": "Adressdetails",
"v+h_lQVWt06O6N5EaUse_g#Value": "Beschäftigungsdetails",
"yOp15loU80ChvPofJNiUjw#Value": "Identitätsverifizierung",
"mExEMCPefESrzYfCDsOapg#Value": "Persönliche Daten",
"TWj_ZoCp+UK698mivgVm1g#Value": "Kontowährung",
"uDtOUtEJWECyil1CXTP2lQ#Value": "Kontotyp",
"Q97Ng7SjeEiC8mERYbqfcg#Value": "Ein echtes Konto hinzufügen"
};
});

define("PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.mvc$translationsResources.es-ES", [], function () {
return {
"cUdxsFP7fkuymApx3+aRNQ#Value": "Completa la configuración para acceder a planes de comisión personalizados.",
"osYDuBCJKEGqpYxflRPNgA#Value": "¿Configurar perfil de salida?",
"Xjyhk61g2keveaMnv0pMjg#Value": "Términos de uso",
"zxBmeAArFkuVFby3uoNpEw#Value": "Detalles de la dirección",
"HJY6QS2I40mmjGEDoliyag#Value": "Detalles de empleo",
"w0sRnWut+kGkH5xudrrCeA#Value": "Datos personales",
"jMl9S6tJRkyFkcHxcPefug#Value": "Moneda de la cuenta",
"pSVxkBEh2U6GVxk7DMkoEg#Value": "Tipo de cuenta",
"hGRCEt80Lk20RurWnAhIHQ#Value": "Términos de uso",
"Ji4ZjuscLUqjnyHBW5nerw#Value": "Detalles de dirección",
"v+h_lQVWt06O6N5EaUse_g#Value": "Detalles del empleo",
"yOp15loU80ChvPofJNiUjw#Value": "Verificación de identidad",
"mExEMCPefESrzYfCDsOapg#Value": "Detalles personales",
"TWj_ZoCp+UK698mivgVm1g#Value": "Moneda de la cuenta",
"uDtOUtEJWECyil1CXTP2lQ#Value": "Tipo de cuenta",
"Q97Ng7SjeEiC8mERYbqfcg#Value": "Agregar una cuenta real"
};
});

define("PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.mvc$translationsResources.fr-FR", [], function () {
return {
"cUdxsFP7fkuymApx3+aRNQ#Value": "Complétez la configuration pour accéder aux plans de commission personnalisés.",
"osYDuBCJKEGqpYxflRPNgA#Value": "Configuration du profil de sortie ?",
"Xjyhk61g2keveaMnv0pMjg#Value": "Conditions d\'utilisation",
"zxBmeAArFkuVFby3uoNpEw#Value": "Détails de l\'adresse",
"HJY6QS2I40mmjGEDoliyag#Value": "Détails de l\'emploi",
"w0sRnWut+kGkH5xudrrCeA#Value": "Détails personnels",
"jMl9S6tJRkyFkcHxcPefug#Value": "Devise du compte",
"pSVxkBEh2U6GVxk7DMkoEg#Value": "Type de compte",
"hGRCEt80Lk20RurWnAhIHQ#Value": "Conditions d\'utilisation",
"Ji4ZjuscLUqjnyHBW5nerw#Value": "Détails de l\'adresse",
"v+h_lQVWt06O6N5EaUse_g#Value": "Détails de l\'emploi",
"yOp15loU80ChvPofJNiUjw#Value": "Vérification d\'identité",
"mExEMCPefESrzYfCDsOapg#Value": "Détails personnels",
"TWj_ZoCp+UK698mivgVm1g#Value": "Devise du compte",
"uDtOUtEJWECyil1CXTP2lQ#Value": "Type de compte",
"Q97Ng7SjeEiC8mERYbqfcg#Value": "Ajouter un compte réel"
};
});

define("PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.mvc$translationsResources.it-IT", [], function () {
return {
"cUdxsFP7fkuymApx3+aRNQ#Value": "Completa la configurazione per accedere ai piani di commissione personalizzati.",
"osYDuBCJKEGqpYxflRPNgA#Value": "Configurazione del profilo di uscita?",
"Xjyhk61g2keveaMnv0pMjg#Value": "Termini di utilizzo",
"zxBmeAArFkuVFby3uoNpEw#Value": "Dettagli dell\'indirizzo",
"HJY6QS2I40mmjGEDoliyag#Value": "Dettagli sull\'occupazione",
"w0sRnWut+kGkH5xudrrCeA#Value": "Dettagli personali",
"jMl9S6tJRkyFkcHxcPefug#Value": "Valuta del conto",
"pSVxkBEh2U6GVxk7DMkoEg#Value": "Tipo di conto",
"hGRCEt80Lk20RurWnAhIHQ#Value": "Termini di utilizzo",
"Ji4ZjuscLUqjnyHBW5nerw#Value": "Dettagli dell\'indirizzo",
"v+h_lQVWt06O6N5EaUse_g#Value": "Dettagli sull\'impiego",
"yOp15loU80ChvPofJNiUjw#Value": "Verifica dell\'identità",
"mExEMCPefESrzYfCDsOapg#Value": "Dati personali",
"TWj_ZoCp+UK698mivgVm1g#Value": "Valuta del conto",
"uDtOUtEJWECyil1CXTP2lQ#Value": "Tipo di conto",
"Q97Ng7SjeEiC8mERYbqfcg#Value": "Aggiungi un conto reale"
};
});

define("PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.mvc$translationsResources.pl-PL", [], function () {
return {
"cUdxsFP7fkuymApx3+aRNQ#Value": "Zakończ konfigurację, aby uzyskać dostęp do niestandardowych planów prowizji.",
"osYDuBCJKEGqpYxflRPNgA#Value": "Ustawienia profilu wyjściowego?",
"Xjyhk61g2keveaMnv0pMjg#Value": "Warunki użytkowania",
"zxBmeAArFkuVFby3uoNpEw#Value": "Szczegóły adresu",
"HJY6QS2I40mmjGEDoliyag#Value": "Szczegóły zatrudnienia",
"w0sRnWut+kGkH5xudrrCeA#Value": "Dane osobowe",
"jMl9S6tJRkyFkcHxcPefug#Value": "Waluta konta",
"pSVxkBEh2U6GVxk7DMkoEg#Value": "Typ konta",
"hGRCEt80Lk20RurWnAhIHQ#Value": "Warunki użytkowania",
"Ji4ZjuscLUqjnyHBW5nerw#Value": "Szczegóły adresu",
"v+h_lQVWt06O6N5EaUse_g#Value": "Szczegóły zatrudnienia",
"yOp15loU80ChvPofJNiUjw#Value": "Weryfikacja tożsamości",
"mExEMCPefESrzYfCDsOapg#Value": "Szczegóły osobowe",
"TWj_ZoCp+UK698mivgVm1g#Value": "Waluta konta",
"uDtOUtEJWECyil1CXTP2lQ#Value": "Typ konta",
"Q97Ng7SjeEiC8mERYbqfcg#Value": "Dodaj prawdziwe konto"
};
});

define("PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.mvc$translationsResources.pt-PT", [], function () {
return {
"cUdxsFP7fkuymApx3+aRNQ#Value": "Complete a configuração para aceder a planos de comissão personalizados.",
"osYDuBCJKEGqpYxflRPNgA#Value": "Configuração do perfil de saída?",
"Xjyhk61g2keveaMnv0pMjg#Value": "Termos de uso",
"zxBmeAArFkuVFby3uoNpEw#Value": "Detalhes do endereço",
"HJY6QS2I40mmjGEDoliyag#Value": "Detalhes de emprego",
"w0sRnWut+kGkH5xudrrCeA#Value": "Dados pessoais",
"jMl9S6tJRkyFkcHxcPefug#Value": "Moeda da conta",
"pSVxkBEh2U6GVxk7DMkoEg#Value": "Tipo de conta",
"hGRCEt80Lk20RurWnAhIHQ#Value": "Termos de uso",
"Ji4ZjuscLUqjnyHBW5nerw#Value": "Detalhes do endereço",
"v+h_lQVWt06O6N5EaUse_g#Value": "Detalhes de emprego",
"yOp15loU80ChvPofJNiUjw#Value": "Verificação de identidade",
"mExEMCPefESrzYfCDsOapg#Value": "Dados pessoais",
"TWj_ZoCp+UK698mivgVm1g#Value": "Moeda da conta",
"uDtOUtEJWECyil1CXTP2lQ#Value": "Tipo de conta",
"Q97Ng7SjeEiC8mERYbqfcg#Value": "Adicionar uma conta real"
};
});

define("PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.mvc$translationsResources.ru-RU", [], function () {
return {
"cUdxsFP7fkuymApx3+aRNQ#Value": "Завершите настройку, чтобы получить доступ к пользовательским планам комиссий.",
"osYDuBCJKEGqpYxflRPNgA#Value": "Настройка профиля выхода?",
"Xjyhk61g2keveaMnv0pMjg#Value": "Условия использования",
"zxBmeAArFkuVFby3uoNpEw#Value": "Адресные данные",
"HJY6QS2I40mmjGEDoliyag#Value": "Подробности о трудоустройстве",
"w0sRnWut+kGkH5xudrrCeA#Value": "Личные данные",
"jMl9S6tJRkyFkcHxcPefug#Value": "Валюта аккаунта",
"pSVxkBEh2U6GVxk7DMkoEg#Value": "Тип счета",
"hGRCEt80Lk20RurWnAhIHQ#Value": "Условия использования",
"Ji4ZjuscLUqjnyHBW5nerw#Value": "Детали адреса",
"v+h_lQVWt06O6N5EaUse_g#Value": "Подробности о трудоустройстве",
"yOp15loU80ChvPofJNiUjw#Value": "Проверка личности",
"mExEMCPefESrzYfCDsOapg#Value": "Личные данные",
"TWj_ZoCp+UK698mivgVm1g#Value": "Валюта счета",
"uDtOUtEJWECyil1CXTP2lQ#Value": "Тип аккаунта",
"Q97Ng7SjeEiC8mERYbqfcg#Value": "Добавить реальный счет"
};
});

define("PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.mvc$translationsResources", ["exports", "PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.mvc$translationsResources.ar-001", "PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.mvc$translationsResources.de-DE", "PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.mvc$translationsResources.es-ES", "PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.mvc$translationsResources.fr-FR", "PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.mvc$translationsResources.it-IT", "PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.mvc$translationsResources.pl-PL", "PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.mvc$translationsResources.pt-PT", "PartnersHub.Layouts.RealAccountCreationLayoutScreenBased.mvc$translationsResources.ru-RU"], function (exports, PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvc_translationsResources_ar001, PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvc_translationsResources_deDE, PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvc_translationsResources_esES, PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvc_translationsResources_frFR, PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvc_translationsResources_itIT, PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvc_translationsResources_plPL, PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvc_translationsResources_ptPT, PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvc_translationsResources_ruRU) {
return {
"ar-001": {
"translations": PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvc_translationsResources_ar001,
"isRTL": true
},
"de-DE": {
"translations": PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvc_translationsResources_deDE,
"isRTL": false
},
"es-ES": {
"translations": PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvc_translationsResources_esES,
"isRTL": false
},
"fr-FR": {
"translations": PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvc_translationsResources_frFR,
"isRTL": false
},
"it-IT": {
"translations": PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvc_translationsResources_itIT,
"isRTL": false
},
"pl-PL": {
"translations": PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvc_translationsResources_plPL,
"isRTL": false
},
"pt-PT": {
"translations": PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvc_translationsResources_ptPT,
"isRTL": false
},
"ru-RU": {
"translations": PartnersHub_Layouts_RealAccountCreationLayoutScreenBased_mvc_translationsResources_ruRU,
"isRTL": false
}
};
});

