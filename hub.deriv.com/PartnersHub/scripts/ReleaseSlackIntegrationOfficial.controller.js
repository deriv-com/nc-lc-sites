﻿define("ReleaseSlackIntegrationOfficial.controller", ["exports", "@outsystems/runtime-core-js", "ReleaseSlackIntegrationOfficial.model"], function (exports, OSRuntimeCore, ReleaseSlackIntegrationOfficialModel) {
var OS = OSRuntimeCore;
var ReleaseSlackIntegrationOfficialController = exports;
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
return ReleaseSlackIntegrationOfficialController.default.defaultTimeout;
}

}

ReleaseSlackIntegrationOfficialController.default = new Controller();
});
