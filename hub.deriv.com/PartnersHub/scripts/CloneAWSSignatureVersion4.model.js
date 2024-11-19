define("CloneAWSSignatureVersion4.model$ST_49dc3bc2d063241aae5dd3879dfa11a4Structure", ["exports", "@outsystems/runtime-core-js", "CloneAWSSignatureVersion4.model"], function (exports, OSRuntimeCore, CloneAWSSignatureVersion4Model) {
var OS = OSRuntimeCore;
{class ST_49dc3bc2d063241aae5dd3879dfa11a4StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("DesktopImage", "desktopImageAttr", "DesktopImage", false, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true), 
this.attr("MobileImage", "mobileImageAttr", "MobileImage", false, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

CloneAWSSignatureVersion4Model.ST_49dc3bc2d063241aae5dd3879dfa11a4Structure = ST_49dc3bc2d063241aae5dd3879dfa11a4StructureInner;

var ST_49dc3bc2d063241aae5dd3879dfa11a4Structure = ST_49dc3bc2d063241aae5dd3879dfa11a4StructureInner;
ST_49dc3bc2d063241aae5dd3879dfa11a4Structure.init();
}
});

define("CloneAWSSignatureVersion4.model$RL_2a382b66fe5d14d7973947bc856957a1", ["exports", "@outsystems/runtime-core-js", "CloneAWSSignatureVersion4.model", "CloneAWSSignatureVersion4.model$ST_49dc3bc2d063241aae5dd3879dfa11a4Structure"], function (exports, OSRuntimeCore, CloneAWSSignatureVersion4Model) {
var OS = OSRuntimeCore;
class RL_2a382b66fe5d14d7973947bc856957a1 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return CloneAWSSignatureVersion4Model.ST_49dc3bc2d063241aae5dd3879dfa11a4Structure;
}

}

CloneAWSSignatureVersion4Model.RL_2a382b66fe5d14d7973947bc856957a1 = RL_2a382b66fe5d14d7973947bc856957a1;

});

define("CloneAWSSignatureVersion4.model$ST_5aac4e0eb05c7f4c7f14409f9c2e3d4dStructure", ["exports", "@outsystems/runtime-core-js", "CloneAWSSignatureVersion4.model"], function (exports, OSRuntimeCore, CloneAWSSignatureVersion4Model) {
var OS = OSRuntimeCore;
{class ST_5aac4e0eb05c7f4c7f14409f9c2e3d4dStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("DesktopImageName", "desktopImageNameAttr", "DesktopImageName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MobileImageName", "mobileImageNameAttr", "MobileImageName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

CloneAWSSignatureVersion4Model.ST_5aac4e0eb05c7f4c7f14409f9c2e3d4dStructure = ST_5aac4e0eb05c7f4c7f14409f9c2e3d4dStructureInner;

var ST_5aac4e0eb05c7f4c7f14409f9c2e3d4dStructure = ST_5aac4e0eb05c7f4c7f14409f9c2e3d4dStructureInner;
ST_5aac4e0eb05c7f4c7f14409f9c2e3d4dStructure.init();
}
});

define("CloneAWSSignatureVersion4.model$ST_2a7ac328ca1ac01bfb70fc00237a0973Structure", ["exports", "@outsystems/runtime-core-js", "CloneAWSSignatureVersion4.model", "CloneAWSSignatureVersion4.model$ST_5aac4e0eb05c7f4c7f14409f9c2e3d4dStructure"], function (exports, OSRuntimeCore, CloneAWSSignatureVersion4Model) {
var OS = OSRuntimeCore;
{class ST_2a7ac328ca1ac01bfb70fc00237a0973StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("FileNames", "fileNamesAttr", "FileNames", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CloneAWSSignatureVersion4Model.ST_5aac4e0eb05c7f4c7f14409f9c2e3d4dStructure());
}, true, CloneAWSSignatureVersion4Model.ST_5aac4e0eb05c7f4c7f14409f9c2e3d4dStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

CloneAWSSignatureVersion4Model.ST_2a7ac328ca1ac01bfb70fc00237a0973Structure = ST_2a7ac328ca1ac01bfb70fc00237a0973StructureInner;

var ST_2a7ac328ca1ac01bfb70fc00237a0973Structure = ST_2a7ac328ca1ac01bfb70fc00237a0973StructureInner;
ST_2a7ac328ca1ac01bfb70fc00237a0973Structure.init();
}
});

define("CloneAWSSignatureVersion4.model$ST_2d171ea14d84557a767b7307054e0631Structure", ["exports", "@outsystems/runtime-core-js", "CloneAWSSignatureVersion4.model"], function (exports, OSRuntimeCore, CloneAWSSignatureVersion4Model) {
var OS = OSRuntimeCore;
{class ST_2d171ea14d84557a767b7307054e0631StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

CloneAWSSignatureVersion4Model.ST_2d171ea14d84557a767b7307054e0631Structure = ST_2d171ea14d84557a767b7307054e0631StructureInner;

var ST_2d171ea14d84557a767b7307054e0631Structure = ST_2d171ea14d84557a767b7307054e0631StructureInner;
ST_2d171ea14d84557a767b7307054e0631Structure.init();
}
});

define("CloneAWSSignatureVersion4.model$RC_859ef53fd8ef4c4ca0ea34f7cfc34868", ["exports", "@outsystems/runtime-core-js", "CloneAWSSignatureVersion4.model", "CloneAWSSignatureVersion4.model$ST_2a7ac328ca1ac01bfb70fc00237a0973Structure"], function (exports, OSRuntimeCore, CloneAWSSignatureVersion4Model) {
var OS = OSRuntimeCore;
{class RC_859ef53fd8ef4c4ca0ea34f7cfc34868Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("BucketObject", "bucketObjectAttr", "BucketObject", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CloneAWSSignatureVersion4Model.ST_2a7ac328ca1ac01bfb70fc00237a0973Structure());
}, true, CloneAWSSignatureVersion4Model.ST_2a7ac328ca1ac01bfb70fc00237a0973Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_859ef53fd8ef4c4ca0ea34f7cfc34868(new RC_859ef53fd8ef4c4ca0ea34f7cfc34868.RecordClass({
bucketObjectAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

CloneAWSSignatureVersion4Model.RC_859ef53fd8ef4c4ca0ea34f7cfc34868 = RC_859ef53fd8ef4c4ca0ea34f7cfc34868Inner;

RC_859ef53fd8ef4c4ca0ea34f7cfc34868Inner._isAnonymousRecord = true;
RC_859ef53fd8ef4c4ca0ea34f7cfc34868Inner.UniqueId = "859ef53f-d8ef-4c4c-a0ea-34f7cfc34868";
var RC_859ef53fd8ef4c4ca0ea34f7cfc34868 = RC_859ef53fd8ef4c4ca0ea34f7cfc34868Inner;
RC_859ef53fd8ef4c4ca0ea34f7cfc34868.init();
}
});

define("CloneAWSSignatureVersion4.model$RL_3474e4700dc4926ae089c3343a57f059", ["exports", "@outsystems/runtime-core-js", "CloneAWSSignatureVersion4.model", "CloneAWSSignatureVersion4.model$RC_859ef53fd8ef4c4ca0ea34f7cfc34868"], function (exports, OSRuntimeCore, CloneAWSSignatureVersion4Model) {
var OS = OSRuntimeCore;
class RL_3474e4700dc4926ae089c3343a57f059 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return CloneAWSSignatureVersion4Model.RC_859ef53fd8ef4c4ca0ea34f7cfc34868;
}

}

CloneAWSSignatureVersion4Model.RL_3474e4700dc4926ae089c3343a57f059 = RL_3474e4700dc4926ae089c3343a57f059;

});

define("CloneAWSSignatureVersion4.model$RL_f8f2b796ce8b40bf1bf78faad76626c9", ["exports", "@outsystems/runtime-core-js", "CloneAWSSignatureVersion4.model", "CloneAWSSignatureVersion4.model$ST_2d171ea14d84557a767b7307054e0631Structure"], function (exports, OSRuntimeCore, CloneAWSSignatureVersion4Model) {
var OS = OSRuntimeCore;
class RL_f8f2b796ce8b40bf1bf78faad76626c9 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return CloneAWSSignatureVersion4Model.ST_2d171ea14d84557a767b7307054e0631Structure;
}

}

CloneAWSSignatureVersion4Model.RL_f8f2b796ce8b40bf1bf78faad76626c9 = RL_f8f2b796ce8b40bf1bf78faad76626c9;

});

define("CloneAWSSignatureVersion4.model$ST_a242f5800ab7777e1cb686f9dd8624b1Structure", ["exports", "@outsystems/runtime-core-js", "CloneAWSSignatureVersion4.model"], function (exports, OSRuntimeCore, CloneAWSSignatureVersion4Model) {
var OS = OSRuntimeCore;
{class ST_a242f5800ab7777e1cb686f9dd8624b1StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

CloneAWSSignatureVersion4Model.ST_a242f5800ab7777e1cb686f9dd8624b1Structure = ST_a242f5800ab7777e1cb686f9dd8624b1StructureInner;

var ST_a242f5800ab7777e1cb686f9dd8624b1Structure = ST_a242f5800ab7777e1cb686f9dd8624b1StructureInner;
ST_a242f5800ab7777e1cb686f9dd8624b1Structure.init();
}
});

define("CloneAWSSignatureVersion4.model$RL_42a0c1b905de4a419375ec7d727f39fa", ["exports", "@outsystems/runtime-core-js", "CloneAWSSignatureVersion4.model", "CloneAWSSignatureVersion4.model$ST_a242f5800ab7777e1cb686f9dd8624b1Structure"], function (exports, OSRuntimeCore, CloneAWSSignatureVersion4Model) {
var OS = OSRuntimeCore;
class RL_42a0c1b905de4a419375ec7d727f39fa extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return CloneAWSSignatureVersion4Model.ST_a242f5800ab7777e1cb686f9dd8624b1Structure;
}

}

CloneAWSSignatureVersion4Model.RL_42a0c1b905de4a419375ec7d727f39fa = RL_42a0c1b905de4a419375ec7d727f39fa;

});

define("CloneAWSSignatureVersion4.model$ST_3b82f4ed447da408d5c978025cbb10f3Structure", ["exports", "@outsystems/runtime-core-js", "CloneAWSSignatureVersion4.model", "CloneAWSSignatureVersion4.model$ST_2d171ea14d84557a767b7307054e0631Structure", "CloneAWSSignatureVersion4.model$RL_f8f2b796ce8b40bf1bf78faad76626c9", "CloneAWSSignatureVersion4.model$ST_a242f5800ab7777e1cb686f9dd8624b1Structure", "CloneAWSSignatureVersion4.model$RL_42a0c1b905de4a419375ec7d727f39fa"], function (exports, OSRuntimeCore, CloneAWSSignatureVersion4Model) {
var OS = OSRuntimeCore;
{class ST_3b82f4ed447da408d5c978025cbb10f3StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("BaseURL", "baseURLAttr", "BaseURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("URLPath", "uRLPathAttr", "URLPath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("URLQueryParameters", "uRLQueryParametersAttr", "URLQueryParameters", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CloneAWSSignatureVersion4Model.RL_f8f2b796ce8b40bf1bf78faad76626c9());
}, true, CloneAWSSignatureVersion4Model.RL_f8f2b796ce8b40bf1bf78faad76626c9), 
this.attr("HTTPMethod", "hTTPMethodAttr", "HTTPMethod", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Headers", "headersAttr", "Headers", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CloneAWSSignatureVersion4Model.RL_42a0c1b905de4a419375ec7d727f39fa());
}, true, CloneAWSSignatureVersion4Model.RL_42a0c1b905de4a419375ec7d727f39fa), 
this.attr("RequestText", "requestTextAttr", "RequestText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RequestBinary", "requestBinaryAttr", "RequestBinary", false, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

CloneAWSSignatureVersion4Model.ST_3b82f4ed447da408d5c978025cbb10f3Structure = ST_3b82f4ed447da408d5c978025cbb10f3StructureInner;

var ST_3b82f4ed447da408d5c978025cbb10f3Structure = ST_3b82f4ed447da408d5c978025cbb10f3StructureInner;
ST_3b82f4ed447da408d5c978025cbb10f3Structure.init();
}
});

define("CloneAWSSignatureVersion4.model$RL_45cddd3c466123d5b32df09cbae54a1c", ["exports", "@outsystems/runtime-core-js", "CloneAWSSignatureVersion4.model", "CloneAWSSignatureVersion4.model$ST_5aac4e0eb05c7f4c7f14409f9c2e3d4dStructure"], function (exports, OSRuntimeCore, CloneAWSSignatureVersion4Model) {
var OS = OSRuntimeCore;
class RL_45cddd3c466123d5b32df09cbae54a1c extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return CloneAWSSignatureVersion4Model.ST_5aac4e0eb05c7f4c7f14409f9c2e3d4dStructure;
}

}

CloneAWSSignatureVersion4Model.RL_45cddd3c466123d5b32df09cbae54a1c = RL_45cddd3c466123d5b32df09cbae54a1c;

});

define("CloneAWSSignatureVersion4.model$RC_ee2b0c6a36009347dc4d40e6f23de74d", ["exports", "@outsystems/runtime-core-js", "CloneAWSSignatureVersion4.model", "CloneAWSSignatureVersion4.model$ST_3b82f4ed447da408d5c978025cbb10f3Structure"], function (exports, OSRuntimeCore, CloneAWSSignatureVersion4Model) {
var OS = OSRuntimeCore;
{class RC_ee2b0c6a36009347dc4d40e6f23de74dInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("HTTPRequest", "hTTPRequestAttr", "HTTPRequest", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CloneAWSSignatureVersion4Model.ST_3b82f4ed447da408d5c978025cbb10f3Structure());
}, true, CloneAWSSignatureVersion4Model.ST_3b82f4ed447da408d5c978025cbb10f3Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_ee2b0c6a36009347dc4d40e6f23de74d(new RC_ee2b0c6a36009347dc4d40e6f23de74d.RecordClass({
hTTPRequestAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

CloneAWSSignatureVersion4Model.RC_ee2b0c6a36009347dc4d40e6f23de74d = RC_ee2b0c6a36009347dc4d40e6f23de74dInner;

RC_ee2b0c6a36009347dc4d40e6f23de74dInner._isAnonymousRecord = true;
RC_ee2b0c6a36009347dc4d40e6f23de74dInner.UniqueId = "ee2b0c6a-3600-9347-dc4d-40e6f23de74d";
var RC_ee2b0c6a36009347dc4d40e6f23de74d = RC_ee2b0c6a36009347dc4d40e6f23de74dInner;
RC_ee2b0c6a36009347dc4d40e6f23de74d.init();
}
});

define("CloneAWSSignatureVersion4.model$RL_58315d8514fbbc9bb2661d53c1a7af18", ["exports", "@outsystems/runtime-core-js", "CloneAWSSignatureVersion4.model", "CloneAWSSignatureVersion4.model$RC_ee2b0c6a36009347dc4d40e6f23de74d"], function (exports, OSRuntimeCore, CloneAWSSignatureVersion4Model) {
var OS = OSRuntimeCore;
class RL_58315d8514fbbc9bb2661d53c1a7af18 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return CloneAWSSignatureVersion4Model.RC_ee2b0c6a36009347dc4d40e6f23de74d;
}

}

CloneAWSSignatureVersion4Model.RL_58315d8514fbbc9bb2661d53c1a7af18 = RL_58315d8514fbbc9bb2661d53c1a7af18;

});

define("CloneAWSSignatureVersion4.model$RL_664802a596e703d2c593010cbc833afd", ["exports", "@outsystems/runtime-core-js", "CloneAWSSignatureVersion4.model", "CloneAWSSignatureVersion4.model$ST_3b82f4ed447da408d5c978025cbb10f3Structure"], function (exports, OSRuntimeCore, CloneAWSSignatureVersion4Model) {
var OS = OSRuntimeCore;
class RL_664802a596e703d2c593010cbc833afd extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return CloneAWSSignatureVersion4Model.ST_3b82f4ed447da408d5c978025cbb10f3Structure;
}

}

CloneAWSSignatureVersion4Model.RL_664802a596e703d2c593010cbc833afd = RL_664802a596e703d2c593010cbc833afd;

});

define("CloneAWSSignatureVersion4.model$RC_7c6222adaf5e347a3ec146c0fb60e75c", ["exports", "@outsystems/runtime-core-js", "CloneAWSSignatureVersion4.model", "CloneAWSSignatureVersion4.model$ST_5aac4e0eb05c7f4c7f14409f9c2e3d4dStructure"], function (exports, OSRuntimeCore, CloneAWSSignatureVersion4Model) {
var OS = OSRuntimeCore;
{class RC_7c6222adaf5e347a3ec146c0fb60e75cInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("FileNames", "fileNamesAttr", "FileNames", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CloneAWSSignatureVersion4Model.ST_5aac4e0eb05c7f4c7f14409f9c2e3d4dStructure());
}, true, CloneAWSSignatureVersion4Model.ST_5aac4e0eb05c7f4c7f14409f9c2e3d4dStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_7c6222adaf5e347a3ec146c0fb60e75c(new RC_7c6222adaf5e347a3ec146c0fb60e75c.RecordClass({
fileNamesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

CloneAWSSignatureVersion4Model.RC_7c6222adaf5e347a3ec146c0fb60e75c = RC_7c6222adaf5e347a3ec146c0fb60e75cInner;

RC_7c6222adaf5e347a3ec146c0fb60e75cInner._isAnonymousRecord = true;
RC_7c6222adaf5e347a3ec146c0fb60e75cInner.UniqueId = "7c6222ad-af5e-347a-3ec1-46c0fb60e75c";
var RC_7c6222adaf5e347a3ec146c0fb60e75c = RC_7c6222adaf5e347a3ec146c0fb60e75cInner;
RC_7c6222adaf5e347a3ec146c0fb60e75c.init();
}
});

define("CloneAWSSignatureVersion4.model$RC_a1594f19c4bbb962af100318a59756da", ["exports", "@outsystems/runtime-core-js", "CloneAWSSignatureVersion4.model", "CloneAWSSignatureVersion4.model$ST_49dc3bc2d063241aae5dd3879dfa11a4Structure"], function (exports, OSRuntimeCore, CloneAWSSignatureVersion4Model) {
var OS = OSRuntimeCore;
{class RC_a1594f19c4bbb962af100318a59756daInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("EventImages", "eventImagesAttr", "EventImages", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CloneAWSSignatureVersion4Model.ST_49dc3bc2d063241aae5dd3879dfa11a4Structure());
}, true, CloneAWSSignatureVersion4Model.ST_49dc3bc2d063241aae5dd3879dfa11a4Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_a1594f19c4bbb962af100318a59756da(new RC_a1594f19c4bbb962af100318a59756da.RecordClass({
eventImagesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

CloneAWSSignatureVersion4Model.RC_a1594f19c4bbb962af100318a59756da = RC_a1594f19c4bbb962af100318a59756daInner;

RC_a1594f19c4bbb962af100318a59756daInner._isAnonymousRecord = true;
RC_a1594f19c4bbb962af100318a59756daInner.UniqueId = "a1594f19-c4bb-b962-af10-0318a59756da";
var RC_a1594f19c4bbb962af100318a59756da = RC_a1594f19c4bbb962af100318a59756daInner;
RC_a1594f19c4bbb962af100318a59756da.init();
}
});

define("CloneAWSSignatureVersion4.model$RC_aa55b22d8e3b3780ee466b9f1c078d50", ["exports", "@outsystems/runtime-core-js", "CloneAWSSignatureVersion4.model", "CloneAWSSignatureVersion4.model$ST_a242f5800ab7777e1cb686f9dd8624b1Structure"], function (exports, OSRuntimeCore, CloneAWSSignatureVersion4Model) {
var OS = OSRuntimeCore;
{class RC_aa55b22d8e3b3780ee466b9f1c078d50Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("HTTPHeader", "hTTPHeaderAttr", "HTTPHeader", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CloneAWSSignatureVersion4Model.ST_a242f5800ab7777e1cb686f9dd8624b1Structure());
}, true, CloneAWSSignatureVersion4Model.ST_a242f5800ab7777e1cb686f9dd8624b1Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_aa55b22d8e3b3780ee466b9f1c078d50(new RC_aa55b22d8e3b3780ee466b9f1c078d50.RecordClass({
hTTPHeaderAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

CloneAWSSignatureVersion4Model.RC_aa55b22d8e3b3780ee466b9f1c078d50 = RC_aa55b22d8e3b3780ee466b9f1c078d50Inner;

RC_aa55b22d8e3b3780ee466b9f1c078d50Inner._isAnonymousRecord = true;
RC_aa55b22d8e3b3780ee466b9f1c078d50Inner.UniqueId = "aa55b22d-8e3b-3780-ee46-6b9f1c078d50";
var RC_aa55b22d8e3b3780ee466b9f1c078d50 = RC_aa55b22d8e3b3780ee466b9f1c078d50Inner;
RC_aa55b22d8e3b3780ee466b9f1c078d50.init();
}
});

define("CloneAWSSignatureVersion4.model$RL_aca8a11067f2d020257cc4766ddc50f6", ["exports", "@outsystems/runtime-core-js", "CloneAWSSignatureVersion4.model", "CloneAWSSignatureVersion4.model$RC_aa55b22d8e3b3780ee466b9f1c078d50"], function (exports, OSRuntimeCore, CloneAWSSignatureVersion4Model) {
var OS = OSRuntimeCore;
class RL_aca8a11067f2d020257cc4766ddc50f6 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return CloneAWSSignatureVersion4Model.RC_aa55b22d8e3b3780ee466b9f1c078d50;
}

}

CloneAWSSignatureVersion4Model.RL_aca8a11067f2d020257cc4766ddc50f6 = RL_aca8a11067f2d020257cc4766ddc50f6;

});

define("CloneAWSSignatureVersion4.model$RC_dca22c02c83fa6609e4658be2dcc2979", ["exports", "@outsystems/runtime-core-js", "CloneAWSSignatureVersion4.model", "CloneAWSSignatureVersion4.model$ST_2d171ea14d84557a767b7307054e0631Structure"], function (exports, OSRuntimeCore, CloneAWSSignatureVersion4Model) {
var OS = OSRuntimeCore;
{class RC_dca22c02c83fa6609e4658be2dcc2979Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("URLQueryParameter", "uRLQueryParameterAttr", "URLQueryParameter", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CloneAWSSignatureVersion4Model.ST_2d171ea14d84557a767b7307054e0631Structure());
}, true, CloneAWSSignatureVersion4Model.ST_2d171ea14d84557a767b7307054e0631Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_dca22c02c83fa6609e4658be2dcc2979(new RC_dca22c02c83fa6609e4658be2dcc2979.RecordClass({
uRLQueryParameterAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

CloneAWSSignatureVersion4Model.RC_dca22c02c83fa6609e4658be2dcc2979 = RC_dca22c02c83fa6609e4658be2dcc2979Inner;

RC_dca22c02c83fa6609e4658be2dcc2979Inner._isAnonymousRecord = true;
RC_dca22c02c83fa6609e4658be2dcc2979Inner.UniqueId = "dca22c02-c83f-a660-9e46-58be2dcc2979";
var RC_dca22c02c83fa6609e4658be2dcc2979 = RC_dca22c02c83fa6609e4658be2dcc2979Inner;
RC_dca22c02c83fa6609e4658be2dcc2979.init();
}
});

define("CloneAWSSignatureVersion4.model$RL_bdac5e1ffb36666711bf9daaa39cd1f2", ["exports", "@outsystems/runtime-core-js", "CloneAWSSignatureVersion4.model", "CloneAWSSignatureVersion4.model$RC_dca22c02c83fa6609e4658be2dcc2979"], function (exports, OSRuntimeCore, CloneAWSSignatureVersion4Model) {
var OS = OSRuntimeCore;
class RL_bdac5e1ffb36666711bf9daaa39cd1f2 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return CloneAWSSignatureVersion4Model.RC_dca22c02c83fa6609e4658be2dcc2979;
}

}

CloneAWSSignatureVersion4Model.RL_bdac5e1ffb36666711bf9daaa39cd1f2 = RL_bdac5e1ffb36666711bf9daaa39cd1f2;

});

define("CloneAWSSignatureVersion4.model$RC_cddf704aa3f060f96b1a7542e1972a40", ["exports", "@outsystems/runtime-core-js", "CloneAWSSignatureVersion4.model"], function (exports, OSRuntimeCore, CloneAWSSignatureVersion4Model) {
var OS = OSRuntimeCore;
{class RC_cddf704aa3f060f96b1a7542e1972a40Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

CloneAWSSignatureVersion4Model.RC_cddf704aa3f060f96b1a7542e1972a40 = RC_cddf704aa3f060f96b1a7542e1972a40Inner;

RC_cddf704aa3f060f96b1a7542e1972a40Inner._isAnonymousRecord = true;
RC_cddf704aa3f060f96b1a7542e1972a40Inner.UniqueId = "cddf704a-a3f0-60f9-6b1a-7542e1972a40";
var RC_cddf704aa3f060f96b1a7542e1972a40 = RC_cddf704aa3f060f96b1a7542e1972a40Inner;
RC_cddf704aa3f060f96b1a7542e1972a40.init();
}
});

define("CloneAWSSignatureVersion4.model$RL_ce88911b84fc13ed7c43e363bec447f0", ["exports", "@outsystems/runtime-core-js", "CloneAWSSignatureVersion4.model", "CloneAWSSignatureVersion4.model$RC_a1594f19c4bbb962af100318a59756da"], function (exports, OSRuntimeCore, CloneAWSSignatureVersion4Model) {
var OS = OSRuntimeCore;
class RL_ce88911b84fc13ed7c43e363bec447f0 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return CloneAWSSignatureVersion4Model.RC_a1594f19c4bbb962af100318a59756da;
}

}

CloneAWSSignatureVersion4Model.RL_ce88911b84fc13ed7c43e363bec447f0 = RL_ce88911b84fc13ed7c43e363bec447f0;

});

define("CloneAWSSignatureVersion4.model$RL_dc64b7a82e1258fe9af8a4df56d80bc6", ["exports", "@outsystems/runtime-core-js", "CloneAWSSignatureVersion4.model", "CloneAWSSignatureVersion4.model$ST_2a7ac328ca1ac01bfb70fc00237a0973Structure"], function (exports, OSRuntimeCore, CloneAWSSignatureVersion4Model) {
var OS = OSRuntimeCore;
class RL_dc64b7a82e1258fe9af8a4df56d80bc6 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return CloneAWSSignatureVersion4Model.ST_2a7ac328ca1ac01bfb70fc00237a0973Structure;
}

}

CloneAWSSignatureVersion4Model.RL_dc64b7a82e1258fe9af8a4df56d80bc6 = RL_dc64b7a82e1258fe9af8a4df56d80bc6;

});

define("CloneAWSSignatureVersion4.model$RL_e04e4766a07df2f747be6ea6a7659074", ["exports", "@outsystems/runtime-core-js", "CloneAWSSignatureVersion4.model", "CloneAWSSignatureVersion4.model$RC_cddf704aa3f060f96b1a7542e1972a40"], function (exports, OSRuntimeCore, CloneAWSSignatureVersion4Model) {
var OS = OSRuntimeCore;
class RL_e04e4766a07df2f747be6ea6a7659074 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return CloneAWSSignatureVersion4Model.RC_cddf704aa3f060f96b1a7542e1972a40;
}

}

CloneAWSSignatureVersion4Model.RL_e04e4766a07df2f747be6ea6a7659074 = RL_e04e4766a07df2f747be6ea6a7659074;

});

define("CloneAWSSignatureVersion4.model$RL_e37cdb444cc02303f6282ba8c5645353", ["exports", "@outsystems/runtime-core-js", "CloneAWSSignatureVersion4.model", "CloneAWSSignatureVersion4.model$RC_7c6222adaf5e347a3ec146c0fb60e75c"], function (exports, OSRuntimeCore, CloneAWSSignatureVersion4Model) {
var OS = OSRuntimeCore;
class RL_e37cdb444cc02303f6282ba8c5645353 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return CloneAWSSignatureVersion4Model.RC_7c6222adaf5e347a3ec146c0fb60e75c;
}

}

CloneAWSSignatureVersion4Model.RL_e37cdb444cc02303f6282ba8c5645353 = RL_e37cdb444cc02303f6282ba8c5645353;

});

define("CloneAWSSignatureVersion4.model", ["exports", "@outsystems/runtime-core-js"], function (exports, OSRuntimeCore) {
var OS = OSRuntimeCore;
var CloneAWSSignatureVersion4Model = exports;
Object.defineProperty(CloneAWSSignatureVersion4Model, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["69899688-2c23-44ec-b8ed-f89cd6554fa2"];
}
});

CloneAWSSignatureVersion4Model.staticEntities = {};
});

