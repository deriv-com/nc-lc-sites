define("PartnersHub.Common.CFDCommissionsModal.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "PartnersHub.model$ST_0314d78ca6806dcc3e7ca8803a68ff6aStructure", "RESTAPIWebsocketOfficial.model$ST_d1246d83c419f598cf8e4e18d5276097Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_e184b5e893ff6633d3c7357dd29941faStructure", "RESTAPIWebsocketOfficial.controller$PostTradingPlatformPasswordChange", "RESTAPIWebsocketOfficial.model$ST_c7e48234a44c41827c7b70f1ea8aa0b1Structure", "RESTAPIWebsocketOfficial.model$ST_78c818dad6d0af8d67b898e33e5a3dfbStructure", "RESTAPIWebsocketOfficial.controller$PostMT5NewAccount"], function (OSRuntimeCore, PartnersHubModel, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("userInput", "userInputVar", "userInput", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("cfdCommissionsPasswordErrors", "cfdCommissionsPasswordErrorsVar", "cfdCommissionsPasswordErrors", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.ST_0314d78ca6806dcc3e7ca8803a68ff6aStructure());
}, false, PartnersHubModel.ST_0314d78ca6806dcc3e7ca8803a68ff6aStructure), 
this.attr("requiredInputError", "requiredInputErrorVar", "requiredInputError", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
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
return {
CFDPasswordInput: OS.Model.ValidationWidgetRecord
};
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

static get hasValidationWidgets() {return true;
}
setInputs(inputs) {
}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Common.CFDCommissionsModal.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Common.CFDCommissionsModal.mvc$model", "PartnersHub.Common.CFDCommissionsModal.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Utilities.InlineSVG.mvc$view", "CustomComponentsOfficial.ButtonVariants.PrimaryButton.mvc$view", "PartnersHub.model$ST_0314d78ca6806dcc3e7ca8803a68ff6aStructure", "RESTAPIWebsocketOfficial.model$ST_d1246d83c419f598cf8e4e18d5276097Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_e184b5e893ff6633d3c7357dd29941faStructure", "RESTAPIWebsocketOfficial.controller$PostTradingPlatformPasswordChange", "RESTAPIWebsocketOfficial.model$ST_c7e48234a44c41827c7b70f1ea8aa0b1Structure", "RESTAPIWebsocketOfficial.model$ST_78c818dad6d0af8d67b898e33e5a3dfbStructure", "RESTAPIWebsocketOfficial.controller$PostMT5NewAccount"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, React, OSView, PartnersHub_Common_CFDCommissionsModal_mvc_model, PartnersHub_Common_CFDCommissionsModal_mvc_controller, PartnersHubClientVariables, OSWidgets, OutSystemsUI_Utilities_InlineSVG_mvc_view, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "Common.CFDCommissionsModal"; }

        static getAttributes() { return {
codeFunction: "CFDCommissionsModal",
functionKey: "79f7b6d0-e884-4e66-8e61-7fa9de160bf1",
functionOwnerName: "PartnersHub",
functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Common.CFDCommissionsModal.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Utilities_InlineSVG_mvc_view, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Common_CFDCommissionsModal_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Common_CFDCommissionsModal_mvc_controller;
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
animate: true,
style: "absolute-left absolute-top fixed full-width-vw full-height-vh popup-backdrop cfd-commissions-modal",
visible: (PartnersHubClientVariables.getisCFDCommissionsPlanFormEnabledFF() && PartnersHubClientVariables.getshowCFDCommissionModal()),
_idProps: {
service: idService,
name: "CFDCommissionModalContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "cfd-commissions-modal-dialog",
visible: true,
_idProps: {
service: idService,
name: "dialog"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "cfd-commissions-modal-header",
visible: true,
_idProps: {
service: idService,
name: "header"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "ph-section-title",
text: ["Enable CFDs commissions"],
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.AdvancedHtml, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.closeButtonHandler$Action(controller.callContext(eventHandlerContext));

;
}
},
extendedProperties: {
className: "cfd-commissions-modal-close"
},
tag: "button",
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
SVGCode: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M16.125 16.875L12 12.7188L7.84375 16.875C7.65625 17.0625 7.34375 17.0625 7.125 16.875C6.9375 16.6562 6.9375 16.3438 7.125 16.1562L11.2812 12L7.15625 7.875C6.9375 7.6875 6.9375 7.375 7.15625 7.15625C7.34375 6.96875 7.65625 6.96875 7.84375 7.15625L12 11.3125L16.125 7.15625C16.3125 6.96875 16.625 6.96875 16.8438 7.15625C17.0312 7.375 17.0312 7.6875 16.8438 7.875L12.6875 12L16.8438 16.1562C17.0312 16.3438 17.0312 16.6562 16.8438 16.875C16.625 17.0625 16.3125 17.0625 16.125 16.875Z\" fill=\"black\" fill-opacity=\"0.72\"/>\r\n</svg>"
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
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "cfd-commissions-modal-body",
visible: true,
_idProps: {
service: idService,
name: "body"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "cfd-commissions-modal-content",
visible: true,
_idProps: {
service: idService,
name: "content"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: model.getCachedValue(idService.getId("PasswordScreen.class"), function () {
return ((((PartnersHubClientVariables.getisCFDPasswordCreationFailed() === true) || (PartnersHubClientVariables.getisCFDPasswordCreationSucceeded() === true))) ? ("hidden") : (""));
}, function () {
return PartnersHubClientVariables.getisCFDPasswordCreationFailed();
}, function () {
return PartnersHubClientVariables.getisCFDPasswordCreationSucceeded();
})
},
tag: "div",
_idProps: {
service: idService,
name: "PasswordScreen"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "cfd-commissions-modal-text font-size-s display-block",
text: ["Your MT5 account is ready for receiving commissions. Set a password to enable it."],
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Label, {
extendedProperties: {
className: "font-size-s margin-bottom-s password-input-label"
},
gridProperties: {
classes: "OSFillParent"
},
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
text: ["Password"],
_idProps: {
service: idService,
name: "InputLabel"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "password-input"
},
tag: "div",
_idProps: {
service: idService,
name: "InputField"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Password*/ 1,
mandatory: true,
maxLength: 25,
onChange: function () {
var eventHandlerContext = callContext.clone();
controller.cFDPasswordInputOnChange$Action(controller.callContext(eventHandlerContext));

;
},
prompt: "Enter your password",
style: model.getCachedValue(idService.getId("CFDPasswordInput.Style"), function () {
return ((model.variables.requiredInputErrorVar) ? ("form-control padding-right-xxl not-valid") : ("form-control padding-right-xxl"));
}, function () {
return model.variables.requiredInputErrorVar;
}),
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.userInputVar, function (value) {
model.variables.userInputVar = value;
}),
_idProps: {
service: idService,
name: "CFDPasswordInput"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.AdvancedHtml, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.eyeButtonHandler$Action(controller.callContext(eventHandlerContext));

;
}
},
extendedProperties: {
className: "password-input-button"
},
tag: "button",
_idProps: {
service: idService,
name: "EyeButton"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "hidden"
},
tag: "span",
_idProps: {
service: idService,
name: "HidePassword"
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
SVGCode: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" width=\"24px\" height=\"24px\" role=\"img\"><path d=\"M9.32 11.813C7.64 13.375 6.508 15.25 6 16.5c.508 1.25 1.64 3.125 3.32 4.688S13.227 24 16 24c2.734 0 4.96-1.25 6.64-2.812 1.68-1.563 2.813-3.438 3.36-4.688-.547-1.25-1.68-3.125-3.36-4.687S18.735 9 16 9c-2.773 0-5 1.25-6.68 2.813M16 7.75c3.125 0 5.664 1.445 7.5 3.164 1.836 1.68 3.047 3.711 3.633 5.117a1.4 1.4 0 0 1 0 .977c-.586 1.367-1.797 3.398-3.633 5.117S19.125 25.25 16 25.25c-3.164 0-5.703-1.406-7.54-3.125-1.835-1.719-3.046-3.75-3.632-5.117a1.4 1.4 0 0 1 0-.977c.586-1.406 1.797-3.437 3.633-5.117C10.297 9.195 12.836 7.75 16 7.75m-3.75 8.75c0 1.367.703 2.578 1.875 3.281 1.133.664 2.578.664 3.75 0 1.133-.703 1.875-1.914 1.875-3.281 0-1.328-.742-2.54-1.875-3.242-1.172-.664-2.617-.664-3.75 0-1.172.703-1.875 1.914-1.875 3.242m8.75 0c0 1.797-.977 3.438-2.5 4.336-1.562.898-3.477.898-5 0A4.97 4.97 0 0 1 11 16.5c0-1.758.938-3.398 2.5-4.297 1.523-.898 3.438-.898 5 0 1.523.899 2.5 2.54 2.5 4.297\"></path></svg>"
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
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.AdvancedHtml, {
tag: "span",
_idProps: {
service: idService,
name: "ShowPassword"
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
SVGCode: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" width=\"24px\" height=\"24px\" role=\"img\"><path d=\"m4.477 6.656 23.789 18.75c.234.196.312.625.078.86a.584.584 0 0 1-.86.117L3.734 7.633c-.273-.195-.351-.625-.117-.86.196-.273.625-.351.86-.117m22.656 10.352c-.39.937-1.094 2.226-2.11 3.476l-.976-.78A14.4 14.4 0 0 0 26 16.5c-.547-1.25-1.68-3.125-3.36-4.687S18.735 9 16 9c-1.562 0-2.969.43-4.18 1.055l-1.054-.86C12.25 8.335 13.969 7.75 16 7.75c3.125 0 5.664 1.445 7.5 3.164 1.836 1.68 3.047 3.711 3.633 5.117a1.4 1.4 0 0 1 0 .977M6.938 12.555l.976.78A12.6 12.6 0 0 0 6 16.5c.508 1.25 1.64 3.125 3.32 4.688S13.227 24 16 24c1.523 0 2.93-.39 4.14-1.016l1.055.86A10.1 10.1 0 0 1 16 25.25c-3.164 0-5.703-1.406-7.54-3.125-1.835-1.719-3.046-3.75-3.632-5.117a1.4 1.4 0 0 1 0-.977c.39-.937 1.094-2.226 2.11-3.476M16 21.5c-2.773 0-5-2.227-5-5 0-.234 0-.469.04-.703l1.21.937A3.73 3.73 0 0 0 16 20.25c.195 0 .43 0 .625-.04l1.21.938A5 5 0 0 1 16 21.5m5-5v.04c0 .233-.04.468-.078.702l-1.211-.937c-.117-1.992-1.719-3.516-3.711-3.516-.234 0-.469 0-.664.04l-1.211-.938c.586-.235 1.21-.391 1.875-.391 2.734 0 5 2.266 5 5\"></path></svg>"
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
uuid: "18",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})))), $if(model.variables.requiredInputErrorVar, false, this, function () {
return [React.createElement(OSWidgets.Text, {
extendedProperties: {
className: "font-size-xs margin-top-s display-block password-input-error"
},
text: ["Password is required."],
_idProps: {
service: idService,
name: "RequiredErrorOnSubmit"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "cfd-commissions-password-policy"
},
tag: "ul",
_idProps: {
service: idService,
name: "Validations"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: model.getCachedValue(idService.getId("9btDZAIVhUi0K2cF2_7eyg.class"), function () {
return (((model.variables.cfdCommissionsPasswordErrorsVar.lengthAttr === "false")) ? ("cfd-input-validation valid") : ((((model.variables.cfdCommissionsPasswordErrorsVar.lengthAttr === "true")) ? ("cfd-input-validation not-valid") : ("cfd-input-validation"))));
}, function () {
return model.variables.cfdCommissionsPasswordErrorsVar.lengthAttr;
})
},
tag: "li",
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: model.getCachedValue(idService.getId("ErrorIcon.class"), function () {
return (((model.variables.cfdCommissionsPasswordErrorsVar.lengthAttr === "true")) ? ("display-block") : ("hidden"));
}, function () {
return model.variables.cfdCommissionsPasswordErrorsVar.lengthAttr;
})
},
tag: "span",
_idProps: {
service: idService,
name: "ErrorIcon"
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
SVGCode: "<svg width=\"12\" height=\"13\" viewBox=\"0 0 12 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM4.10156 4.60156C3.86719 4.83594 3.86719 5.1875 4.10156 5.39844L5.20312 6.5L4.10156 7.60156C3.86719 7.83594 3.86719 8.1875 4.10156 8.39844C4.3125 8.63281 4.66406 8.63281 4.875 8.39844L5.97656 7.29688L7.07812 8.39844C7.3125 8.63281 7.66406 8.63281 7.875 8.39844C8.10938 8.1875 8.10938 7.83594 7.875 7.60156L6.77344 6.5L7.875 5.39844C8.10938 5.1875 8.10938 4.83594 7.875 4.60156C7.66406 4.39062 7.3125 4.39062 7.07812 4.60156L5.97656 5.70312L4.875 4.60156C4.66406 4.39062 4.3125 4.39062 4.10156 4.60156Z\" fill=\"#DC2020\"/>\r\n</svg>"
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
uuid: "23",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: model.getCachedValue(idService.getId("SuccessIcon.class"), function () {
return (((model.variables.cfdCommissionsPasswordErrorsVar.lengthAttr === "false")) ? ("display-block") : ("hidden"));
}, function () {
return model.variables.cfdCommissionsPasswordErrorsVar.lengthAttr;
})
},
tag: "span",
_idProps: {
service: idService,
name: "SuccessIcon"
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
SVGCode: "<svg width=\"12\" height=\"13\" viewBox=\"0 0 12 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM8.64844 5.39844H8.625C8.85938 5.1875 8.85938 4.83594 8.625 4.60156C8.41406 4.39062 8.0625 4.39062 7.85156 4.60156L5.25 7.22656L4.14844 6.125C3.91406 5.89062 3.5625 5.89062 3.35156 6.125C3.11719 6.33594 3.11719 6.6875 3.35156 6.89844L4.85156 8.39844C5.0625 8.63281 5.41406 8.63281 5.64844 8.39844L8.64844 5.39844Z\" fill=\"#29823B\"/>\r\n</svg>"
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
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: model.getCachedValue(idService.getId("OutlineIcon.class"), function () {
return (((OS.BuiltinFunctions.length(model.variables.cfdCommissionsPasswordErrorsVar.lengthAttr) === 0)) ? ("display-block") : ("hidden"));
}, function () {
return model.variables.cfdCommissionsPasswordErrorsVar.lengthAttr;
})
},
tag: "span",
_idProps: {
service: idService,
name: "OutlineIcon"
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
SVGCode: "<svg width=\"12\" height=\"13\" viewBox=\"0 0 12 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M10.875 6.5C10.875 4.76562 9.9375 3.17188 8.4375 2.28125C6.91406 1.41406 5.0625 1.41406 3.5625 2.28125C2.03906 3.17188 1.125 4.76562 1.125 6.5C1.125 8.25781 2.03906 9.85156 3.5625 10.7422C5.0625 11.6094 6.91406 11.6094 8.4375 10.7422C9.9375 9.85156 10.875 8.25781 10.875 6.5ZM0 6.5C0 4.36719 1.125 2.39844 3 1.32031C4.85156 0.242188 7.125 0.242188 9 1.32031C10.8516 2.39844 12 4.36719 12 6.5C12 8.65625 10.8516 10.625 9 11.7031C7.125 12.7812 4.85156 12.7812 3 11.7031C1.125 10.625 0 8.65625 0 6.5Z\" fill=\"black\" fill-opacity=\"0.72\"/>\r\n</svg>"
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
uuid: "27",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "font-size-xs margin-none"
},
tag: "p",
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, "8–25 characters long")), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: model.getCachedValue(idService.getId("XQJAJ73C+ESA1lMuxSPoFw.class"), function () {
return (((model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr === "false")) ? ("cfd-input-validation valid") : ((((model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr === "true")) ? ("cfd-input-validation not-valid") : ("cfd-input-validation"))));
}, function () {
return model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr;
})
},
tag: "li",
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: model.getCachedValue(idService.getId("ErrorIcon2.class"), function () {
return (((model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr === "true")) ? ("display-block") : ("hidden"));
}, function () {
return model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr;
})
},
tag: "span",
_idProps: {
service: idService,
name: "ErrorIcon2"
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
SVGCode: "<svg width=\"12\" height=\"13\" viewBox=\"0 0 12 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM4.10156 4.60156C3.86719 4.83594 3.86719 5.1875 4.10156 5.39844L5.20312 6.5L4.10156 7.60156C3.86719 7.83594 3.86719 8.1875 4.10156 8.39844C4.3125 8.63281 4.66406 8.63281 4.875 8.39844L5.97656 7.29688L7.07812 8.39844C7.3125 8.63281 7.66406 8.63281 7.875 8.39844C8.10938 8.1875 8.10938 7.83594 7.875 7.60156L6.77344 6.5L7.875 5.39844C8.10938 5.1875 8.10938 4.83594 7.875 4.60156C7.66406 4.39062 7.3125 4.39062 7.07812 4.60156L5.97656 5.70312L4.875 4.60156C4.66406 4.39062 4.3125 4.39062 4.10156 4.60156Z\" fill=\"#DC2020\"/>\r\n</svg>"
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
uuid: "31",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: model.getCachedValue(idService.getId("SuccessIcon2.class"), function () {
return (((model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr === "false")) ? ("display-block") : ("hidden"));
}, function () {
return model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr;
})
},
tag: "span",
_idProps: {
service: idService,
name: "SuccessIcon2"
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
SVGCode: "<svg width=\"12\" height=\"13\" viewBox=\"0 0 12 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM8.64844 5.39844H8.625C8.85938 5.1875 8.85938 4.83594 8.625 4.60156C8.41406 4.39062 8.0625 4.39062 7.85156 4.60156L5.25 7.22656L4.14844 6.125C3.91406 5.89062 3.5625 5.89062 3.35156 6.125C3.11719 6.33594 3.11719 6.6875 3.35156 6.89844L4.85156 8.39844C5.0625 8.63281 5.41406 8.63281 5.64844 8.39844L8.64844 5.39844Z\" fill=\"#29823B\"/>\r\n</svg>"
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
uuid: "33",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: model.getCachedValue(idService.getId("OutlineIcon2.class"), function () {
return (((OS.BuiltinFunctions.length(model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr) === 0)) ? ("display-block") : ("hidden"));
}, function () {
return model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr;
})
},
tag: "span",
_idProps: {
service: idService,
name: "OutlineIcon2"
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
SVGCode: "<svg width=\"12\" height=\"13\" viewBox=\"0 0 12 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M10.875 6.5C10.875 4.76562 9.9375 3.17188 8.4375 2.28125C6.91406 1.41406 5.0625 1.41406 3.5625 2.28125C2.03906 3.17188 1.125 4.76562 1.125 6.5C1.125 8.25781 2.03906 9.85156 3.5625 10.7422C5.0625 11.6094 6.91406 11.6094 8.4375 10.7422C9.9375 9.85156 10.875 8.25781 10.875 6.5ZM0 6.5C0 4.36719 1.125 2.39844 3 1.32031C4.85156 0.242188 7.125 0.242188 9 1.32031C10.8516 2.39844 12 4.36719 12 6.5C12 8.65625 10.8516 10.625 9 11.7031C7.125 12.7812 4.85156 12.7812 3 11.7031C1.125 10.625 0 8.65625 0 6.5Z\" fill=\"black\" fill-opacity=\"0.72\"/>\r\n</svg>"
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
uuid: "35",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "font-size-xs margin-none"
},
tag: "p",
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
}, "At least one uppercase and one lowercase letter")), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: model.getCachedValue(idService.getId("umoSJMOu+EGo2dtUQlWQAw.class"), function () {
return (((model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr === "false")) ? ("cfd-input-validation valid") : ((((model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr === "true")) ? ("cfd-input-validation not-valid") : ("cfd-input-validation"))));
}, function () {
return model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr;
})
},
tag: "li",
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: model.getCachedValue(idService.getId("ErrorIcon3.class"), function () {
return (((model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr === "true")) ? ("display-block") : ("hidden"));
}, function () {
return model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr;
})
},
tag: "span",
_idProps: {
service: idService,
name: "ErrorIcon3"
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
SVGCode: "<svg width=\"12\" height=\"13\" viewBox=\"0 0 12 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM4.10156 4.60156C3.86719 4.83594 3.86719 5.1875 4.10156 5.39844L5.20312 6.5L4.10156 7.60156C3.86719 7.83594 3.86719 8.1875 4.10156 8.39844C4.3125 8.63281 4.66406 8.63281 4.875 8.39844L5.97656 7.29688L7.07812 8.39844C7.3125 8.63281 7.66406 8.63281 7.875 8.39844C8.10938 8.1875 8.10938 7.83594 7.875 7.60156L6.77344 6.5L7.875 5.39844C8.10938 5.1875 8.10938 4.83594 7.875 4.60156C7.66406 4.39062 7.3125 4.39062 7.07812 4.60156L5.97656 5.70312L4.875 4.60156C4.66406 4.39062 4.3125 4.39062 4.10156 4.60156Z\" fill=\"#DC2020\"/>\r\n</svg>"
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
uuid: "39",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: model.getCachedValue(idService.getId("SuccessIcon3.class"), function () {
return (((model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr === "false")) ? ("display-block") : ("hidden"));
}, function () {
return model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr;
})
},
tag: "span",
_idProps: {
service: idService,
name: "SuccessIcon3"
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
SVGCode: "<svg width=\"12\" height=\"13\" viewBox=\"0 0 12 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM8.64844 5.39844H8.625C8.85938 5.1875 8.85938 4.83594 8.625 4.60156C8.41406 4.39062 8.0625 4.39062 7.85156 4.60156L5.25 7.22656L4.14844 6.125C3.91406 5.89062 3.5625 5.89062 3.35156 6.125C3.11719 6.33594 3.11719 6.6875 3.35156 6.89844L4.85156 8.39844C5.0625 8.63281 5.41406 8.63281 5.64844 8.39844L8.64844 5.39844Z\" fill=\"#29823B\"/>\r\n</svg>"
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
uuid: "41",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: model.getCachedValue(idService.getId("OutlineIcon3.class"), function () {
return (((OS.BuiltinFunctions.length(model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr) === 0)) ? ("display-block") : ("hidden"));
}, function () {
return model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr;
})
},
tag: "span",
_idProps: {
service: idService,
name: "OutlineIcon3"
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
SVGCode: "<svg width=\"12\" height=\"13\" viewBox=\"0 0 12 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M10.875 6.5C10.875 4.76562 9.9375 3.17188 8.4375 2.28125C6.91406 1.41406 5.0625 1.41406 3.5625 2.28125C2.03906 3.17188 1.125 4.76562 1.125 6.5C1.125 8.25781 2.03906 9.85156 3.5625 10.7422C5.0625 11.6094 6.91406 11.6094 8.4375 10.7422C9.9375 9.85156 10.875 8.25781 10.875 6.5ZM0 6.5C0 4.36719 1.125 2.39844 3 1.32031C4.85156 0.242188 7.125 0.242188 9 1.32031C10.8516 2.39844 12 4.36719 12 6.5C12 8.65625 10.8516 10.625 9 11.7031C7.125 12.7812 4.85156 12.7812 3 11.7031C1.125 10.625 0 8.65625 0 6.5Z\" fill=\"black\" fill-opacity=\"0.72\"/>\r\n</svg>"
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
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "font-size-xs margin-none"
},
tag: "p",
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider
}, "At least one number")), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: model.getCachedValue(idService.getId("OPVjyA7S20aZWRfndL24mQ.class"), function () {
return (((model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr === "false")) ? ("cfd-input-validation valid") : ((((model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr === "true")) ? ("cfd-input-validation not-valid") : ("cfd-input-validation"))));
}, function () {
return model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr;
})
},
tag: "li",
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: model.getCachedValue(idService.getId("ErrorIcon4.class"), function () {
return (((model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr === "true")) ? ("display-block") : ("hidden"));
}, function () {
return model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr;
})
},
tag: "span",
_idProps: {
service: idService,
name: "ErrorIcon4"
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
SVGCode: "<svg width=\"12\" height=\"13\" viewBox=\"0 0 12 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM4.10156 4.60156C3.86719 4.83594 3.86719 5.1875 4.10156 5.39844L5.20312 6.5L4.10156 7.60156C3.86719 7.83594 3.86719 8.1875 4.10156 8.39844C4.3125 8.63281 4.66406 8.63281 4.875 8.39844L5.97656 7.29688L7.07812 8.39844C7.3125 8.63281 7.66406 8.63281 7.875 8.39844C8.10938 8.1875 8.10938 7.83594 7.875 7.60156L6.77344 6.5L7.875 5.39844C8.10938 5.1875 8.10938 4.83594 7.875 4.60156C7.66406 4.39062 7.3125 4.39062 7.07812 4.60156L5.97656 5.70312L4.875 4.60156C4.66406 4.39062 4.3125 4.39062 4.10156 4.60156Z\" fill=\"#DC2020\"/>\r\n</svg>"
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
uuid: "47",
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: model.getCachedValue(idService.getId("SuccessIcon4.class"), function () {
return (((model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr === "false")) ? ("display-block") : ("hidden"));
}, function () {
return model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr;
})
},
tag: "span",
_idProps: {
service: idService,
name: "SuccessIcon4"
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
SVGCode: "<svg width=\"12\" height=\"13\" viewBox=\"0 0 12 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM8.64844 5.39844H8.625C8.85938 5.1875 8.85938 4.83594 8.625 4.60156C8.41406 4.39062 8.0625 4.39062 7.85156 4.60156L5.25 7.22656L4.14844 6.125C3.91406 5.89062 3.5625 5.89062 3.35156 6.125C3.11719 6.33594 3.11719 6.6875 3.35156 6.89844L4.85156 8.39844C5.0625 8.63281 5.41406 8.63281 5.64844 8.39844L8.64844 5.39844Z\" fill=\"#29823B\"/>\r\n</svg>"
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
alias: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: model.getCachedValue(idService.getId("OutlineIcon4.class"), function () {
return (((OS.BuiltinFunctions.length(model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr) === 0)) ? ("display-block") : ("hidden"));
}, function () {
return model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr;
})
},
tag: "span",
_idProps: {
service: idService,
name: "OutlineIcon4"
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
SVGCode: "<svg width=\"12\" height=\"13\" viewBox=\"0 0 12 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M10.875 6.5C10.875 4.76562 9.9375 3.17188 8.4375 2.28125C6.91406 1.41406 5.0625 1.41406 3.5625 2.28125C2.03906 3.17188 1.125 4.76562 1.125 6.5C1.125 8.25781 2.03906 9.85156 3.5625 10.7422C5.0625 11.6094 6.91406 11.6094 8.4375 10.7422C9.9375 9.85156 10.875 8.25781 10.875 6.5ZM0 6.5C0 4.36719 1.125 2.39844 3 1.32031C4.85156 0.242188 7.125 0.242188 9 1.32031C10.8516 2.39844 12 4.36719 12 6.5C12 8.65625 10.8516 10.625 9 11.7031C7.125 12.7812 4.85156 12.7812 3 11.7031C1.125 10.625 0 8.65625 0 6.5Z\" fill=\"black\" fill-opacity=\"0.72\"/>\r\n</svg>"
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
uuid: "51",
alias: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "font-size-xs margin-none"
},
tag: "p",
_idProps: {
service: idService,
uuid: "52"
},
_widgetRecordProvider: widgetsRecordProvider
}, "At least one special character")))), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: model.getCachedValue(idService.getId("FailedScreen.class"), function () {
return (((PartnersHubClientVariables.getisCFDPasswordCreationFailed() === true)) ? ("cfd-commissions-modal-screen") : ("hidden"));
}, function () {
return PartnersHubClientVariables.getisCFDPasswordCreationFailed();
})
},
tag: "div",
_idProps: {
service: idService,
name: "FailedScreen"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedProperties: {
className: "cfd-commissions-modal-screen-img"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.SpreadRisks.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "54"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "cfd-commissions-modal-screen-heading"
},
tag: "h4",
_idProps: {
service: idService,
uuid: "55"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Password creation failed"), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "cfd-commissions-modal-screen-text"
},
tag: "p",
_idProps: {
service: idService,
uuid: "56"
},
_widgetRecordProvider: widgetsRecordProvider
}, "There was an issue creating your password.")), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: model.getCachedValue(idService.getId("SuccessScreen.class"), function () {
return (((PartnersHubClientVariables.getisCFDPasswordCreationSucceeded() === true)) ? ("cfd-commissions-modal-screen") : ("hidden"));
}, function () {
return PartnersHubClientVariables.getisCFDPasswordCreationSucceeded();
})
},
tag: "div",
_idProps: {
service: idService,
name: "SuccessScreen"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedProperties: {
className: "cfd-commissions-modal-screen-img"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.twentyfourhourstrading.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "58"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "cfd-commissions-modal-screen-heading"
},
tag: "h4",
_idProps: {
service: idService,
uuid: "59"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Almost there"), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "cfd-commissions-modal-screen-text"
},
tag: "p",
_idProps: {
service: idService,
uuid: "60"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Your account manager will contact you soon."))), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "cfd-commissions-modal-footer"
},
tag: "div",
_idProps: {
service: idService,
name: "footer"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(((PartnersHubClientVariables.getisCFDPasswordCreationFailed() === false) && (PartnersHubClientVariables.getisCFDPasswordCreationSucceeded() === false)), false, this, function () {
return [React.createElement(CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Width: "100%",
borderRadius: "35px",
title: "Set up password"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.submitHandler$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
name: "SubmitButton",
alias: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), $if((PartnersHubClientVariables.getisCFDPasswordCreationFailed() === true), false, this, function () {
return [React.createElement(CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
title: "Try again",
borderRadius: "35px",
Width: "100%"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClick$Action: function () {
var eventHandlerContext = callContext.clone();
controller.tryAgainHandler$Action(controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
name: "TryAgainButton",
alias: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), $if((PartnersHubClientVariables.getisCFDPasswordCreationSucceeded() === true), false, this, function () {
return [React.createElement(CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
borderRadius: "35px",
Width: "100%",
title: "OK"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClick$Action: function () {
var eventHandlerContext = callContext.clone();
controller.okHandler$Action(controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
name: "OkButton",
alias: "18"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}))))));
        }
    }

    return View;
});
define("PartnersHub.Common.CFDCommissionsModal.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Common.CFDCommissionsModal.mvc$translationsResources", "PartnersHub.Common.CFDCommissionsModal.mvc$controller.EyeButtonHandler.JavaScript1JS", "PartnersHub.Common.CFDCommissionsModal.mvc$controller.SubmitHandler.JavaScript2JS", "PartnersHub.Common.CFDCommissionsModal.mvc$controller.SubmitHandler.JavaScript1JS", "PartnersHub.Common.CFDCommissionsModal.mvc$controller.CFDPasswordInputOnChange.JavaScript1JS", "PartnersHub.model$ST_0314d78ca6806dcc3e7ca8803a68ff6aStructure", "RESTAPIWebsocketOfficial.model$ST_d1246d83c419f598cf8e4e18d5276097Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocketOfficial", "RESTAPIWebsocketOfficial.model$ST_e184b5e893ff6633d3c7357dd29941faStructure", "RESTAPIWebsocketOfficial.controller$PostTradingPlatformPasswordChange", "RESTAPIWebsocketOfficial.model$ST_c7e48234a44c41827c7b70f1ea8aa0b1Structure", "RESTAPIWebsocketOfficial.model$ST_78c818dad6d0af8d67b898e33e5a3dfbStructure", "RESTAPIWebsocketOfficial.controller$PostMT5NewAccount"], function (OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketOfficialModel, RESTAPIWebsocketOfficialController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Common_CFDCommissionsModal_mvc_TranslationsResources, PartnersHub_Common_CFDCommissionsModal_mvc_controller_EyeButtonHandler_JavaScript1JS, PartnersHub_Common_CFDCommissionsModal_mvc_controller_SubmitHandler_JavaScript2JS, PartnersHub_Common_CFDCommissionsModal_mvc_controller_SubmitHandler_JavaScript1JS, PartnersHub_Common_CFDCommissionsModal_mvc_controller_CFDPasswordInputOnChange_JavaScript1JS) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, PartnersHub_Common_CFDCommissionsModal_mvc_TranslationsResources);
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
get _eyeButtonHandler$Action() {if(!(this.hasOwnProperty("__eyeButtonHandler$Action"))) {
this.__eyeButtonHandler$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("EyeButtonHandler", function (span) {
if(span) {
span.setAttribute("code.function", "EyeButtonHandler");
span.setAttribute("outsystems.function.key", "10e80d12-44c2-4963-a129-6873b4b99ba5");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("EyeButtonHandler");
callContext = controller.callContext(callContext);
OS.Logger.startActiveSpan("JavaScript1", function (span) {
if(span) {
span.setAttribute("code.function", "JavaScript1");
span.setAttribute("outsystems.function.key", "b30871fe-c97e-4880-9c9e-7d8148a93498");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(PartnersHub_Common_CFDCommissionsModal_mvc_controller_EyeButtonHandler_JavaScript1JS, "JavaScript1", "EyeButtonHandler", {
passwordVisibleIcon: OS.DataConversion.JSNodeParamConverter.to(idService.getId("ShowPassword"), OS.DataTypes.DataTypes.Text),
passwordInputId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("CFDPasswordInput"), OS.DataTypes.DataTypes.Text),
passwordHiddenIcon: OS.DataConversion.JSNodeParamConverter.to(idService.getId("HidePassword"), OS.DataTypes.DataTypes.Text),
eyeButtonId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("EyeButton"), OS.DataTypes.DataTypes.Text)
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

return this.__eyeButtonHandler$Action;
}set _eyeButtonHandler$Action(value) {this.__eyeButtonHandler$Action = value;
}

get _okHandler$Action() {if(!(this.hasOwnProperty("__okHandler$Action"))) {
this.__okHandler$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OkHandler", function (span) {
if(span) {
span.setAttribute("code.function", "OkHandler");
span.setAttribute("outsystems.function.key", "2b78deb1-8d7b-45bd-a8c3-70a8a80e87b1");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OkHandler");
callContext = controller.callContext(callContext);
// isCFDPasswordCreationSucceeded = False
PartnersHubClientVariables.setisCFDPasswordCreationSucceeded(false);
// showCFDCommissionModal = False
PartnersHubClientVariables.setshowCFDCommissionModal(false);
// showCFDCommisionBanner = False
PartnersHubClientVariables.setshowCFDCommisionBanner(false);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__okHandler$Action;
}set _okHandler$Action(value) {this.__okHandler$Action = value;
}

get _submitHandler$Action() {if(!(this.hasOwnProperty("__submitHandler$Action"))) {
this.__submitHandler$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("SubmitHandler", function (span) {
if(span) {
span.setAttribute("code.function", "SubmitHandler");
span.setAttribute("outsystems.function.key", "8c6b76d9-4275-4f3b-8658-1be696701c82");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("SubmitHandler");
callContext = controller.callContext(callContext);
var postTradingPlatformPasswordChangeVar = new OS.DataTypes.VariableHolder();
var postCreateMT5AccountVar = new OS.DataTypes.VariableHolder();
var javaScript2JSResult = new OS.DataTypes.VariableHolder();
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
return OS.Flow.executeAsyncFlow(function () {
// HasInput
return OS.Flow.executeSequence(function () {
if(((OS.BuiltinFunctions.length(model.variables.userInputVar) > 0))) {
// HasAnyInputError
return OS.Flow.executeSequence(function () {
if(!(((((model.variables.cfdCommissionsPasswordErrorsVar.lengthAttr === "true") || (model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr === "true")) || (model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr === "true"))))) {
javaScript1JSResult.value = OS.Logger.startActiveSpan("JavaScript1", function (span) {
if(span) {
span.setAttribute("code.function", "JavaScript1");
span.setAttribute("outsystems.function.key", "f120356a-8fce-4a1e-b3bd-dcc463570474");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(PartnersHub_Common_CFDCommissionsModal_mvc_controller_SubmitHandler_JavaScript1JS, "JavaScript1", "SubmitHandler", {
AuthToken: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("PartnersHub.Common.CFDCommissionsModal.SubmitHandler$javaScript1JSResult"))();
jsNodeResult.authTokenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.AuthToken, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// Execute Action: PostTradingPlatformPasswordChange
model.flush();
return RESTAPIWebsocketOfficialController.default.postTradingPlatformPasswordChange$Action(PartnersHubClientVariables.getServer(), function () {
var rec = new RESTAPIWebsocketOfficialModel.ST_d1246d83c419f598cf8e4e18d5276097Structure();
rec.new_passwordAttr = model.variables.userInputVar;
rec.platformAttr = "mt5";
return rec;
}(), javaScript1JSResult.value.authTokenOut, PartnersHubClientVariables.getAppId(), "EN", callContext).then(function (value) {
postTradingPlatformPasswordChangeVar.value = value;
}).then(function () {
// Execute Action: PostCreateMT5Account
model.flush();
return RESTAPIWebsocketOfficialController.default.postMT5NewAccount$Action(function () {
var rec = new RESTAPIWebsocketOfficialModel.ST_c7e48234a44c41827c7b70f1ea8aa0b1Structure();
rec.mt5_new_accountAttr = "1";
rec.account_typeAttr = "gaming";
rec.nameAttr = PartnersHubClientVariables.getname();
rec.emailAttr = PartnersHubClientVariables.getemail();
rec.leverageAttr = OS.BuiltinFunctions.integerToLongInteger(500);
rec.mainPasswordAttr = model.variables.userInputVar;
rec.productAttr = "standard";
return rec;
}(), javaScript1JSResult.value.authTokenOut, PartnersHubClientVariables.getAppId(), "EN", PartnersHubClientVariables.getServer(), callContext).then(function (value) {
postCreateMT5AccountVar.value = value;
});
}).then(function () {
// JSON Serialize: JSONSerialize1
jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(postCreateMT5AccountVar.value.responseOut, false, false);
javaScript2JSResult.value = OS.Logger.startActiveSpan("JavaScript2", function (span) {
if(span) {
span.setAttribute("code.function", "JavaScript2");
span.setAttribute("outsystems.function.key", "34237c21-e0e8-4dc0-bf09-3acdfd69a87b");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(PartnersHub_Common_CFDCommissionsModal_mvc_controller_SubmitHandler_JavaScript2JS, "JavaScript2", "SubmitHandler", {
Response: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize1Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
isCFDPasswordCreationFailed: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("PartnersHub.Common.CFDCommissionsModal.SubmitHandler$javaScript2JSResult"))();
jsNodeResult.isCFDPasswordCreationFailedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.isCFDPasswordCreationFailed, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
}).then(function () {
// isCFDPasswordCreationSucessed
if(((javaScript2JSResult.value.isCFDPasswordCreationFailedOut === false))) {
// CFD Password Creation Succeeded
// isCFDPasswordCreationSucceeded = True
PartnersHubClientVariables.setisCFDPasswordCreationSucceeded(true);
} else {
// CFD Password Creation Failed
// isCFDPasswordCreationFailed = True
PartnersHubClientVariables.setisCFDPasswordCreationFailed(true);
}

});
}

});
} else {
// requiredInputError = True
model.variables.requiredInputErrorVar = true;
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

return this.__submitHandler$Action;
}set _submitHandler$Action(value) {this.__submitHandler$Action = value;
}

get _cFDPasswordInputOnChange$Action() {if(!(this.hasOwnProperty("__cFDPasswordInputOnChange$Action"))) {
this.__cFDPasswordInputOnChange$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("CFDPasswordInputOnChange", function (span) {
if(span) {
span.setAttribute("code.function", "CFDPasswordInputOnChange");
span.setAttribute("outsystems.function.key", "a1c2f66b-5af9-4a2a-90ff-56857ca61b6c");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("CFDPasswordInputOnChange");
callContext = controller.callContext(callContext);
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
javaScript1JSResult.value = OS.Logger.startActiveSpan("JavaScript1", function (span) {
if(span) {
span.setAttribute("code.function", "JavaScript1");
span.setAttribute("outsystems.function.key", "637064bb-864a-4559-9053-f0bef07a7842");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(PartnersHub_Common_CFDCommissionsModal_mvc_controller_CFDPasswordInputOnChange_JavaScript1JS, "JavaScript1", "CFDPasswordInputOnChange", {
password: OS.DataConversion.JSNodeParamConverter.to(model.variables.userInputVar, OS.DataTypes.DataTypes.Text),
LengthError: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
UppercaseAndLowercaseError: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
NumberError: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
SpecialCharacterError: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
RequiredError: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("PartnersHub.Common.CFDCommissionsModal.CFDPasswordInputOnChange$javaScript1JSResult"))();
jsNodeResult.lengthErrorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.LengthError, OS.DataTypes.DataTypes.Text);
jsNodeResult.uppercaseAndLowercaseErrorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.UppercaseAndLowercaseError, OS.DataTypes.DataTypes.Text);
jsNodeResult.numberErrorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.NumberError, OS.DataTypes.DataTypes.Text);
jsNodeResult.specialCharacterErrorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SpecialCharacterError, OS.DataTypes.DataTypes.Text);
jsNodeResult.requiredErrorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.RequiredError, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// cfdCommissionsPasswordErrors.Length = JavaScript1.LengthError
model.variables.cfdCommissionsPasswordErrorsVar.lengthAttr = javaScript1JSResult.value.lengthErrorOut;
// cfdCommissionsPasswordErrors.HasAtLeastOneUppercaseAndOneLowercase = JavaScript1.UppercaseAndLowercaseError
model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr = javaScript1JSResult.value.uppercaseAndLowercaseErrorOut;
// cfdCommissionsPasswordErrors.HasAtLeastOneNumber = JavaScript1.NumberError
model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr = javaScript1JSResult.value.numberErrorOut;
// cfdCommissionsPasswordErrors.HasAtLeastOneSpecialCharacter = JavaScript1.SpecialCharacterError
model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr = javaScript1JSResult.value.specialCharacterErrorOut;
// requiredInputError = JavaScript1.RequiredError
model.variables.requiredInputErrorVar = javaScript1JSResult.value.requiredErrorOut;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__cFDPasswordInputOnChange$Action;
}set _cFDPasswordInputOnChange$Action(value) {this.__cFDPasswordInputOnChange$Action = value;
}

get _tryAgainHandler$Action() {if(!(this.hasOwnProperty("__tryAgainHandler$Action"))) {
this.__tryAgainHandler$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("TryAgainHandler", function (span) {
if(span) {
span.setAttribute("code.function", "TryAgainHandler");
span.setAttribute("outsystems.function.key", "b42a406c-d09a-4270-b443-2dc0b40c5c0e");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("TryAgainHandler");
callContext = controller.callContext(callContext);
// isCFDPasswordCreationFailed = False
PartnersHubClientVariables.setisCFDPasswordCreationFailed(false);
// userInput = ""
model.variables.userInputVar = "";
// cfdCommissionsPasswordErrors.Length = ""
model.variables.cfdCommissionsPasswordErrorsVar.lengthAttr = "";
// cfdCommissionsPasswordErrors.HasAtLeastOneUppercaseAndOneLowercase = ""
model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr = "";
// cfdCommissionsPasswordErrors.HasAtLeastOneNumber = ""
model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr = "";
// cfdCommissionsPasswordErrors.HasAtLeastOneSpecialCharacter = ""
model.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr = "";
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__tryAgainHandler$Action;
}set _tryAgainHandler$Action(value) {this.__tryAgainHandler$Action = value;
}

get _closeButtonHandler$Action() {if(!(this.hasOwnProperty("__closeButtonHandler$Action"))) {
this.__closeButtonHandler$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("CloseButtonHandler", function (span) {
if(span) {
span.setAttribute("code.function", "CloseButtonHandler");
span.setAttribute("outsystems.function.key", "eb2baca7-48d4-45f7-99a0-de25814e37ae");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("CloseButtonHandler");
callContext = controller.callContext(callContext);
// showCFDCommissionModal = False
PartnersHubClientVariables.setshowCFDCommissionModal(false);
// showCFDCommisionBanner = If
PartnersHubClientVariables.setshowCFDCommisionBanner((((PartnersHubClientVariables.getisCFDPasswordCreationSucceeded() === true)) ? (false) : (true)));
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__closeButtonHandler$Action;
}set _closeButtonHandler$Action(value) {this.__closeButtonHandler$Action = value;
}


eyeButtonHandler$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("EyeButtonHandler__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "EyeButtonHandler");
span.setAttribute("outsystems.function.key", "10e80d12-44c2-4963-a129-6873b4b99ba5");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._eyeButtonHandler$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

okHandler$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OkHandler__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OkHandler");
span.setAttribute("outsystems.function.key", "2b78deb1-8d7b-45bd-a8c3-70a8a80e87b1");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._okHandler$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

submitHandler$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("SubmitHandler__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "SubmitHandler");
span.setAttribute("outsystems.function.key", "8c6b76d9-4275-4f3b-8658-1be696701c82");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._submitHandler$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

cFDPasswordInputOnChange$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("CFDPasswordInputOnChange__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "CFDPasswordInputOnChange");
span.setAttribute("outsystems.function.key", "a1c2f66b-5af9-4a2a-90ff-56857ca61b6c");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._cFDPasswordInputOnChange$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

tryAgainHandler$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("TryAgainHandler__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "TryAgainHandler");
span.setAttribute("outsystems.function.key", "b42a406c-d09a-4270-b443-2dc0b40c5c0e");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._tryAgainHandler$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

closeButtonHandler$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("CloseButtonHandler__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "CloseButtonHandler");
span.setAttribute("outsystems.function.key", "eb2baca7-48d4-45f7-99a0-de25814e37ae");
span.setAttribute("outsystems.function.owner.name", "PartnersHub");
span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._closeButtonHandler$Action, callContext);
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
Controller.registerVariableGroupType("PartnersHub.Common.CFDCommissionsModal.SubmitHandler$javaScript2JSResult", [{
name: "isCFDPasswordCreationFailed",
attrName: "isCFDPasswordCreationFailedOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.registerVariableGroupType("PartnersHub.Common.CFDCommissionsModal.SubmitHandler$javaScript1JSResult", [{
name: "AuthToken",
attrName: "authTokenOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("PartnersHub.Common.CFDCommissionsModal.CFDPasswordInputOnChange$javaScript1JSResult", [{
name: "LengthError",
attrName: "lengthErrorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "UppercaseAndLowercaseError",
attrName: "uppercaseAndLowercaseErrorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NumberError",
attrName: "numberErrorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SpecialCharacterError",
attrName: "specialCharacterErrorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "RequiredError",
attrName: "requiredErrorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

}
return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.Common.CFDCommissionsModal.mvc$controller.EyeButtonHandler.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const eyeButton = document.getElementById($parameters.eyeButtonId);
const input = document.getElementById($parameters.passwordInputId);
const passwordHiddenIcon = document.getElementById($parameters.passwordHiddenIcon);
const passwordVisibleIcon = document.getElementById($parameters.passwordVisibleIcon);

if(input.type === "text") {
    input.type = "password"
    passwordVisibleIcon.classList.remove("hidden");
    passwordHiddenIcon.classList.add("hidden");
} else {
    input.type = "text"
    passwordVisibleIcon.classList.add("hidden");
    passwordHiddenIcon.classList.remove("hidden");
}


};
});

define("PartnersHub.Common.CFDCommissionsModal.mvc$controller.SubmitHandler.JavaScript2JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const response = JSON.parse($parameters.Response);

if(!!response?.Error || !!response?.error){
    $parameters.isCFDPasswordCreationFailed = true;
} else {
    $parameters.isCFDPasswordCreationFailed = false;
}
};
});

define("PartnersHub.Common.CFDCommissionsModal.mvc$controller.SubmitHandler.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const localToken = localStorage.getItem("token")
if(localToken) $parameters.AuthToken = localToken

};
});

define("PartnersHub.Common.CFDCommissionsModal.mvc$controller.CFDPasswordInputOnChange.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {

const payload = {
    LengthCheck: $parameters.password,
    UpperAndLowerCaseCheck: $parameters.password,
    NumberCheck: $parameters.password,
    SpecialCharacterCheck: $parameters.password,
    RequiredCheck: $parameters.password
}

const validationSchema = yup.object().shape({
    UpperAndLowerCaseCheck: yup.string().matches(
            /(?=.*[A-Z])(?=.*[a-z])/,
            "HasAtLeastOneUppercaseAndOneLowercase"
        ),
    LengthCheck: yup.string()
        .min(8, 'minLength')
        .max(25, "maxLength"),
    NumberCheck: yup.string().matches(/[0-9]/, 'HasAtLeastOneNumber'),
    SpecialCharacterCheck: yup.string().matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/, 'HasAtLeastOneSpecialCharacter'),
    RequiredCheck: yup.string().required()
})

const { errors } = validate(validationSchema, payload);

$parameters.LengthError = errors.LengthCheck ? "true" : "false"
$parameters.UppercaseAndLowercaseError = errors.UpperAndLowerCaseCheck ? "true" : "false"
$parameters.NumberError = errors.NumberCheck ? "true" : "false"
$parameters.SpecialCharacterError = errors.SpecialCharacterCheck ? "true" : "false"
$parameters.RequiredError = errors.RequiredCheck ? true : false

};
});


define("PartnersHub.Common.CFDCommissionsModal.mvc$translationsResources", ["exports"], function (exports) {
return {};
});

