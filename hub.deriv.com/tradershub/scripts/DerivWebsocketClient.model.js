define("DerivWebsocketClient.model$ST_0d9a0becf267d208d00fb57c93984547Structure", ["exports", "@outsystems/runtime-core-js", "DerivWebsocketClient.model"], function (exports, OSRuntimeCore, DerivWebsocketClientModel) {
var OS = OSRuntimeCore;
{class ST_0d9a0becf267d208d00fb57c93984547StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("message", "messageAttr", "message", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("code", "codeAttr", "code", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

DerivWebsocketClientModel.ST_0d9a0becf267d208d00fb57c93984547Structure = ST_0d9a0becf267d208d00fb57c93984547StructureInner;

var ST_0d9a0becf267d208d00fb57c93984547Structure = ST_0d9a0becf267d208d00fb57c93984547StructureInner;
ST_0d9a0becf267d208d00fb57c93984547Structure.init();
}
});

define("DerivWebsocketClient.model$RL_08b8efcce1f07e1f206022138d0e7dbe", ["exports", "@outsystems/runtime-core-js", "DerivWebsocketClient.model", "DerivWebsocketClient.model$ST_0d9a0becf267d208d00fb57c93984547Structure"], function (exports, OSRuntimeCore, DerivWebsocketClientModel) {
var OS = OSRuntimeCore;
class RL_08b8efcce1f07e1f206022138d0e7dbe extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return DerivWebsocketClientModel.ST_0d9a0becf267d208d00fb57c93984547Structure;
}

}

DerivWebsocketClientModel.RL_08b8efcce1f07e1f206022138d0e7dbe = RL_08b8efcce1f07e1f206022138d0e7dbe;

});

define("DerivWebsocketClient.model$RC_e59ac64ca581bf8d429ea9dd0774df34", ["exports", "@outsystems/runtime-core-js", "DerivWebsocketClient.model", "DerivWebsocketClient.model$ST_0d9a0becf267d208d00fb57c93984547Structure"], function (exports, OSRuntimeCore, DerivWebsocketClientModel) {
var OS = OSRuntimeCore;
{class RC_e59ac64ca581bf8d429ea9dd0774df34Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("error", "errorAttr", "error", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new DerivWebsocketClientModel.ST_0d9a0becf267d208d00fb57c93984547Structure());
}, true, DerivWebsocketClientModel.ST_0d9a0becf267d208d00fb57c93984547Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_e59ac64ca581bf8d429ea9dd0774df34(new RC_e59ac64ca581bf8d429ea9dd0774df34.RecordClass({
errorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

DerivWebsocketClientModel.RC_e59ac64ca581bf8d429ea9dd0774df34 = RC_e59ac64ca581bf8d429ea9dd0774df34Inner;

RC_e59ac64ca581bf8d429ea9dd0774df34Inner._isAnonymousRecord = true;
RC_e59ac64ca581bf8d429ea9dd0774df34Inner.UniqueId = "e59ac64c-a581-bf8d-429e-a9dd0774df34";
var RC_e59ac64ca581bf8d429ea9dd0774df34 = RC_e59ac64ca581bf8d429ea9dd0774df34Inner;
RC_e59ac64ca581bf8d429ea9dd0774df34.init();
}
});

define("DerivWebsocketClient.model$RL_550c332d8aea69689fd6b9ea05314500", ["exports", "@outsystems/runtime-core-js", "DerivWebsocketClient.model", "DerivWebsocketClient.model$RC_e59ac64ca581bf8d429ea9dd0774df34"], function (exports, OSRuntimeCore, DerivWebsocketClientModel) {
var OS = OSRuntimeCore;
class RL_550c332d8aea69689fd6b9ea05314500 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return DerivWebsocketClientModel.RC_e59ac64ca581bf8d429ea9dd0774df34;
}

}

DerivWebsocketClientModel.RL_550c332d8aea69689fd6b9ea05314500 = RL_550c332d8aea69689fd6b9ea05314500;

});

define("DerivWebsocketClient.model", ["exports", "@outsystems/runtime-core-js"], function (exports, OSRuntimeCore) {
var OS = OSRuntimeCore;
var DerivWebsocketClientModel = exports;
Object.defineProperty(DerivWebsocketClientModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["ccff153e-36bc-40c3-8607-ee97fafdba62"];
}
});

DerivWebsocketClientModel.staticEntities = {};
});

