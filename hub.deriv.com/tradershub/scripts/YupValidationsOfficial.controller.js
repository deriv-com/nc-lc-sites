define("YupValidationsOfficial.controller$LoadYupScript", ["exports", "@outsystems/runtime-core-js", "YupValidationsOfficial.model", "YupValidationsOfficial.controller"], function (exports, OSRuntimeCore, YupValidationsOfficialModel, YupValidationsOfficialController) {
var OS = OSRuntimeCore;
YupValidationsOfficialController.default.loadYupScript$Action = function (callContext) {
return OS.Logger.startActiveSpan("LoadYupScript", function (span) {
if(span) {
span.setAttribute("code.function", "LoadYupScript");
span.setAttribute("outsystems.function.key", "e4a3aa27-a622-4822-a173-473a566ba622");
span.setAttribute("outsystems.function.owner.name", "YupValidationsOfficial");
span.setAttribute("outsystems.function.owner.key", "e0162685-1b92-40fe-8f15-36b54a7b8361");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

return OS.Flow.tryFinally(function () {
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: RequireScript
return OS.SystemActions.requireScript(OS.Navigation.VersionedURL.getVersionedUrl("scripts/YupValidationsOfficial.YupUMD.js"), callContext);
}).then(function () {
return ;
});
}, function () {
if(span) {
span.end();
}

});
}, 1);
};
var controller = YupValidationsOfficialController.default;
YupValidationsOfficialController.default.clientActionProxies.loadYupScript$Action = function () {
return controller.executeActionInsideJSNode(YupValidationsOfficialController.default.loadYupScript$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("YupValidationsOfficial.controller$YupValidate", ["exports", "@outsystems/runtime-core-js", "YupValidationsOfficial.model", "YupValidationsOfficial.controller", "YupValidationsOfficial.controller$YupValidate.ValidateJS"], function (exports, OSRuntimeCore, YupValidationsOfficialModel, YupValidationsOfficialController, YupValidationsOfficial_controller_YupValidate_ValidateJS) {
var OS = OSRuntimeCore;
YupValidationsOfficialController.default.yupValidate$Action = function (validationSchemaIn, payloadIn, callContext) {
return OS.Logger.startActiveSpan("YupValidate", function (span) {
if(span) {
span.setAttribute("code.function", "YupValidate");
span.setAttribute("outsystems.function.key", "d03fbead-a852-4d7b-b9dd-85a2c74ba758");
span.setAttribute("outsystems.function.owner.name", "YupValidationsOfficial");
span.setAttribute("outsystems.function.owner.key", "e0162685-1b92-40fe-8f15-36b54a7b8361");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("YupValidationsOfficial.YupValidate$vars"))());
vars.value.validationSchemaInLocal = validationSchemaIn;
vars.value.payloadInLocal = payloadIn;
var validateJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("YupValidationsOfficial.YupValidate$outVars"))());
validateJSResult.value = OS.Logger.startActiveSpan("Validate", function (span) {
if(span) {
span.setAttribute("code.function", "Validate");
span.setAttribute("outsystems.function.key", "c339f52b-28cd-4561-a726-8a039e8626da");
span.setAttribute("outsystems.function.owner.name", "YupValidationsOfficial");
span.setAttribute("outsystems.function.owner.key", "e0162685-1b92-40fe-8f15-36b54a7b8361");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(YupValidationsOfficial_controller_YupValidate_ValidateJS, "Validate", "YupValidate", {
Payload: OS.DataConversion.JSNodeParamConverter.to(vars.value.payloadInLocal, OS.DataTypes.DataTypes.Object),
ValidationSchema: OS.DataConversion.JSNodeParamConverter.to(vars.value.validationSchemaInLocal, OS.DataTypes.DataTypes.Object),
Errors: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("YupValidationsOfficial.YupValidate$validateJSResult"))();
jsNodeResult.errorsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Errors, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// Errors = Validate.Errors
outVars.value.errorsOut = validateJSResult.value.errorsOut;
return outVars.value;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = YupValidationsOfficialController.default;
YupValidationsOfficialController.default.constructor.registerVariableGroupType("YupValidationsOfficial.YupValidate$vars", [{
name: "ValidationSchema",
attrName: "validationSchemaInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "Payload",
attrName: "payloadInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
YupValidationsOfficialController.default.constructor.registerVariableGroupType("YupValidationsOfficial.YupValidate$validateJSResult", [{
name: "Errors",
attrName: "errorsOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
YupValidationsOfficialController.default.constructor.registerVariableGroupType("YupValidationsOfficial.YupValidate$outVars", [{
name: "Errors",
attrName: "errorsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
YupValidationsOfficialController.default.clientActionProxies.yupValidate$Action = function (validationSchemaIn, payloadIn) {
validationSchemaIn = (validationSchemaIn === undefined) ? null : validationSchemaIn;
payloadIn = (payloadIn === undefined) ? null : payloadIn;
return controller.executeActionInsideJSNode(YupValidationsOfficialController.default.yupValidate$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(validationSchemaIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(payloadIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Errors: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorsOut, OS.DataTypes.DataTypes.Object)
};
});
};
});

define("YupValidationsOfficial.controller$YupValidate.ValidateJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const {errors} = window.validate($parameters.ValidationSchema, $parameters.Payload)
$parameters.Errors = errors
};
});


define("YupValidationsOfficial.controller", ["exports", "@outsystems/runtime-core-js", "YupValidationsOfficial.model"], function (exports, OSRuntimeCore, YupValidationsOfficialModel) {
var OS = OSRuntimeCore;
var YupValidationsOfficialController = exports;
class Controller extends 
OS.Controller.BaseModuleController {
constructor(model, messagesProvider, idService, translationResources) {
super(model, messagesProvider, idService, translationResources);
}

get clientActionProxies() {if(!(this.hasOwnProperty("_clientActionProxies"))) {
this._clientActionProxies = {};
}

return this._clientActionProxies;
}set clientActionProxies(value) {this._clientActionProxies = value;
}


get roles() {if(!(this.hasOwnProperty("_roles"))) {
this._roles = {};
}

return this._roles;
}set roles(value) {this._roles = value;
}

get defaultTimeout() {if(!(this.hasOwnProperty("_defaultTimeout"))) {
this._defaultTimeout = 10;
}

return this._defaultTimeout;
}set defaultTimeout(value) {this._defaultTimeout = value;
}

getDefaultTimeout() {
return YupValidationsOfficialController.default.defaultTimeout;
}

}

YupValidationsOfficialController.default = new Controller();
});

