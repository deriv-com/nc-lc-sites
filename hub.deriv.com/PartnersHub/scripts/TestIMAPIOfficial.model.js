define("TestIMAPIOfficial.model$ST_ea8a5b552e6867ec254c90e9d858cc93Structure", ["exports", "@outsystems/runtime-core-js", "TestIMAPIOfficial.model"], function (exports, OSRuntimeCore, TestIMAPIOfficialModel) {
var OS = OSRuntimeCore;
{class ST_ea8a5b552e6867ec254c90e9d858cc93StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Id", "idAttr", "id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Link", "linkAttr", "link", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

TestIMAPIOfficialModel.ST_ea8a5b552e6867ec254c90e9d858cc93Structure = ST_ea8a5b552e6867ec254c90e9d858cc93StructureInner;

var ST_ea8a5b552e6867ec254c90e9d858cc93Structure = ST_ea8a5b552e6867ec254c90e9d858cc93StructureInner;
ST_ea8a5b552e6867ec254c90e9d858cc93Structure.init();
}
});

define("TestIMAPIOfficial.model$RL_0715dddce4dc71206268eca3f2bfe194", ["exports", "@outsystems/runtime-core-js", "TestIMAPIOfficial.model", "TestIMAPIOfficial.model$ST_ea8a5b552e6867ec254c90e9d858cc93Structure"], function (exports, OSRuntimeCore, TestIMAPIOfficialModel) {
var OS = OSRuntimeCore;
class RL_0715dddce4dc71206268eca3f2bfe194 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return TestIMAPIOfficialModel.ST_ea8a5b552e6867ec254c90e9d858cc93Structure;
}

}

TestIMAPIOfficialModel.RL_0715dddce4dc71206268eca3f2bfe194 = RL_0715dddce4dc71206268eca3f2bfe194;

});

define("TestIMAPIOfficial.model$ST_905231b0a989fd7194489d4fd56d2382Structure", ["exports", "@outsystems/runtime-core-js", "TestIMAPIOfficial.model"], function (exports, OSRuntimeCore, TestIMAPIOfficialModel) {
var OS = OSRuntimeCore;
{class ST_905231b0a989fd7194489d4fd56d2382StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("RequestId", "requestIdAttr", "requestId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentRequestCount", "currentRequestCountAttr", "currentRequestCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MonthlyRequestLimit", "monthlyRequestLimitAttr", "monthlyRequestLimit", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

TestIMAPIOfficialModel.ST_905231b0a989fd7194489d4fd56d2382Structure = ST_905231b0a989fd7194489d4fd56d2382StructureInner;

var ST_905231b0a989fd7194489d4fd56d2382Structure = ST_905231b0a989fd7194489d4fd56d2382StructureInner;
ST_905231b0a989fd7194489d4fd56d2382Structure.init();
}
});

define("TestIMAPIOfficial.model$ST_0cbd27f3f37d67634546c1cc70cd2310Structure", ["exports", "@outsystems/runtime-core-js", "TestIMAPIOfficial.model", "TestIMAPIOfficial.model$ST_905231b0a989fd7194489d4fd56d2382Structure"], function (exports, OSRuntimeCore, TestIMAPIOfficialModel) {
var OS = OSRuntimeCore;
{class ST_0cbd27f3f37d67634546c1cc70cd2310StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("ExecutionId", "executionIdAttr", "executionId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MetaData", "metaDataAttr", "metaData", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new TestIMAPIOfficialModel.ST_905231b0a989fd7194489d4fd56d2382Structure());
}, true, TestIMAPIOfficialModel.ST_905231b0a989fd7194489d4fd56d2382Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

TestIMAPIOfficialModel.ST_0cbd27f3f37d67634546c1cc70cd2310Structure = ST_0cbd27f3f37d67634546c1cc70cd2310StructureInner;

var ST_0cbd27f3f37d67634546c1cc70cd2310Structure = ST_0cbd27f3f37d67634546c1cc70cd2310StructureInner;
ST_0cbd27f3f37d67634546c1cc70cd2310Structure.init();
}
});

define("TestIMAPIOfficial.model$RL_1c9df6292bc01420d5e585cf483a3f07", ["exports", "@outsystems/runtime-core-js", "TestIMAPIOfficial.model", "TestIMAPIOfficial.model$ST_0cbd27f3f37d67634546c1cc70cd2310Structure"], function (exports, OSRuntimeCore, TestIMAPIOfficialModel) {
var OS = OSRuntimeCore;
class RL_1c9df6292bc01420d5e585cf483a3f07 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return TestIMAPIOfficialModel.ST_0cbd27f3f37d67634546c1cc70cd2310Structure;
}

}

TestIMAPIOfficialModel.RL_1c9df6292bc01420d5e585cf483a3f07 = RL_1c9df6292bc01420d5e585cf483a3f07;

});

define("TestIMAPIOfficial.model$RC_3ac77d195404c60db3e99e071fb2d3f7", ["exports", "@outsystems/runtime-core-js", "TestIMAPIOfficial.model", "TestIMAPIOfficial.model$ST_905231b0a989fd7194489d4fd56d2382Structure"], function (exports, OSRuntimeCore, TestIMAPIOfficialModel) {
var OS = OSRuntimeCore;
{class RC_3ac77d195404c60db3e99e071fb2d3f7Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("MetaDatum", "metaDatumAttr", "MetaDatum", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new TestIMAPIOfficialModel.ST_905231b0a989fd7194489d4fd56d2382Structure());
}, true, TestIMAPIOfficialModel.ST_905231b0a989fd7194489d4fd56d2382Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_3ac77d195404c60db3e99e071fb2d3f7(new RC_3ac77d195404c60db3e99e071fb2d3f7.RecordClass({
metaDatumAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

TestIMAPIOfficialModel.RC_3ac77d195404c60db3e99e071fb2d3f7 = RC_3ac77d195404c60db3e99e071fb2d3f7Inner;

RC_3ac77d195404c60db3e99e071fb2d3f7Inner._isAnonymousRecord = true;
RC_3ac77d195404c60db3e99e071fb2d3f7Inner.UniqueId = "3ac77d19-5404-c60d-b3e9-9e071fb2d3f7";
var RC_3ac77d195404c60db3e99e071fb2d3f7 = RC_3ac77d195404c60db3e99e071fb2d3f7Inner;
RC_3ac77d195404c60db3e99e071fb2d3f7.init();
}
});

define("TestIMAPIOfficial.model$RL_4eaa50c04057336ddc344ca84d0b7464", ["exports", "@outsystems/runtime-core-js", "TestIMAPIOfficial.model", "TestIMAPIOfficial.model$ST_905231b0a989fd7194489d4fd56d2382Structure"], function (exports, OSRuntimeCore, TestIMAPIOfficialModel) {
var OS = OSRuntimeCore;
class RL_4eaa50c04057336ddc344ca84d0b7464 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return TestIMAPIOfficialModel.ST_905231b0a989fd7194489d4fd56d2382Structure;
}

}

TestIMAPIOfficialModel.RL_4eaa50c04057336ddc344ca84d0b7464 = RL_4eaa50c04057336ddc344ca84d0b7464;

});

define("TestIMAPIOfficial.model$RC_5241236a152a2af51c043097ec227ddd", ["exports", "@outsystems/runtime-core-js", "TestIMAPIOfficial.model", "TestIMAPIOfficial.model$ST_0cbd27f3f37d67634546c1cc70cd2310Structure"], function (exports, OSRuntimeCore, TestIMAPIOfficialModel) {
var OS = OSRuntimeCore;
{class RC_5241236a152a2af51c043097ec227dddInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("PostPlanRunResponse", "postPlanRunResponseAttr", "PostPlanRunResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new TestIMAPIOfficialModel.ST_0cbd27f3f37d67634546c1cc70cd2310Structure());
}, true, TestIMAPIOfficialModel.ST_0cbd27f3f37d67634546c1cc70cd2310Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_5241236a152a2af51c043097ec227ddd(new RC_5241236a152a2af51c043097ec227ddd.RecordClass({
postPlanRunResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

TestIMAPIOfficialModel.RC_5241236a152a2af51c043097ec227ddd = RC_5241236a152a2af51c043097ec227dddInner;

RC_5241236a152a2af51c043097ec227dddInner._isAnonymousRecord = true;
RC_5241236a152a2af51c043097ec227dddInner.UniqueId = "5241236a-152a-2af5-1c04-3097ec227ddd";
var RC_5241236a152a2af51c043097ec227ddd = RC_5241236a152a2af51c043097ec227dddInner;
RC_5241236a152a2af51c043097ec227ddd.init();
}
});

define("TestIMAPIOfficial.model$RC_7a7f4e3a127348469560ba4d7074c0f9", ["exports", "@outsystems/runtime-core-js", "TestIMAPIOfficial.model", "TestIMAPIOfficial.model$ST_ea8a5b552e6867ec254c90e9d858cc93Structure"], function (exports, OSRuntimeCore, TestIMAPIOfficialModel) {
var OS = OSRuntimeCore;
{class RC_7a7f4e3a127348469560ba4d7074c0f9Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("TestPlanItem", "testPlanItemAttr", "TestPlanItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new TestIMAPIOfficialModel.ST_ea8a5b552e6867ec254c90e9d858cc93Structure());
}, true, TestIMAPIOfficialModel.ST_ea8a5b552e6867ec254c90e9d858cc93Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_7a7f4e3a127348469560ba4d7074c0f9(new RC_7a7f4e3a127348469560ba4d7074c0f9.RecordClass({
testPlanItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

TestIMAPIOfficialModel.RC_7a7f4e3a127348469560ba4d7074c0f9 = RC_7a7f4e3a127348469560ba4d7074c0f9Inner;

RC_7a7f4e3a127348469560ba4d7074c0f9Inner._isAnonymousRecord = true;
RC_7a7f4e3a127348469560ba4d7074c0f9Inner.UniqueId = "7a7f4e3a-1273-4846-9560-ba4d7074c0f9";
var RC_7a7f4e3a127348469560ba4d7074c0f9 = RC_7a7f4e3a127348469560ba4d7074c0f9Inner;
RC_7a7f4e3a127348469560ba4d7074c0f9.init();
}
});

define("TestIMAPIOfficial.model$RL_56c1f4a22ef29f366042d0c186fb36fa", ["exports", "@outsystems/runtime-core-js", "TestIMAPIOfficial.model", "TestIMAPIOfficial.model$RC_7a7f4e3a127348469560ba4d7074c0f9"], function (exports, OSRuntimeCore, TestIMAPIOfficialModel) {
var OS = OSRuntimeCore;
class RL_56c1f4a22ef29f366042d0c186fb36fa extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return TestIMAPIOfficialModel.RC_7a7f4e3a127348469560ba4d7074c0f9;
}

}

TestIMAPIOfficialModel.RL_56c1f4a22ef29f366042d0c186fb36fa = RL_56c1f4a22ef29f366042d0c186fb36fa;

});

define("TestIMAPIOfficial.model$ST_87d48b4b7c0b379943dcee59095bbdd5Structure", ["exports", "@outsystems/runtime-core-js", "TestIMAPIOfficial.model", "TestIMAPIOfficial.model$ST_ea8a5b552e6867ec254c90e9d858cc93Structure", "TestIMAPIOfficial.model$RL_0715dddce4dc71206268eca3f2bfe194", "TestIMAPIOfficial.model$ST_905231b0a989fd7194489d4fd56d2382Structure"], function (exports, OSRuntimeCore, TestIMAPIOfficialModel) {
var OS = OSRuntimeCore;
{class ST_87d48b4b7c0b379943dcee59095bbdd5StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("TestPlans", "testPlansAttr", "testPlans", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new TestIMAPIOfficialModel.RL_0715dddce4dc71206268eca3f2bfe194());
}, true, TestIMAPIOfficialModel.RL_0715dddce4dc71206268eca3f2bfe194), 
this.attr("MetaData", "metaDataAttr", "metaData", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new TestIMAPIOfficialModel.ST_905231b0a989fd7194489d4fd56d2382Structure());
}, true, TestIMAPIOfficialModel.ST_905231b0a989fd7194489d4fd56d2382Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

TestIMAPIOfficialModel.ST_87d48b4b7c0b379943dcee59095bbdd5Structure = ST_87d48b4b7c0b379943dcee59095bbdd5StructureInner;

var ST_87d48b4b7c0b379943dcee59095bbdd5Structure = ST_87d48b4b7c0b379943dcee59095bbdd5StructureInner;
ST_87d48b4b7c0b379943dcee59095bbdd5Structure.init();
}
});

define("TestIMAPIOfficial.model$RC_73c61ca7f65d872a1eebbd91126c43f2", ["exports", "@outsystems/runtime-core-js", "TestIMAPIOfficial.model", "TestIMAPIOfficial.model$ST_87d48b4b7c0b379943dcee59095bbdd5Structure"], function (exports, OSRuntimeCore, TestIMAPIOfficialModel) {
var OS = OSRuntimeCore;
{class RC_73c61ca7f65d872a1eebbd91126c43f2Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("GetPlanSearchResponse", "getPlanSearchResponseAttr", "GetPlanSearchResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new TestIMAPIOfficialModel.ST_87d48b4b7c0b379943dcee59095bbdd5Structure());
}, true, TestIMAPIOfficialModel.ST_87d48b4b7c0b379943dcee59095bbdd5Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_73c61ca7f65d872a1eebbd91126c43f2(new RC_73c61ca7f65d872a1eebbd91126c43f2.RecordClass({
getPlanSearchResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

TestIMAPIOfficialModel.RC_73c61ca7f65d872a1eebbd91126c43f2 = RC_73c61ca7f65d872a1eebbd91126c43f2Inner;

RC_73c61ca7f65d872a1eebbd91126c43f2Inner._isAnonymousRecord = true;
RC_73c61ca7f65d872a1eebbd91126c43f2Inner.UniqueId = "73c61ca7-f65d-872a-1eeb-bd91126c43f2";
var RC_73c61ca7f65d872a1eebbd91126c43f2 = RC_73c61ca7f65d872a1eebbd91126c43f2Inner;
RC_73c61ca7f65d872a1eebbd91126c43f2.init();
}
});

define("TestIMAPIOfficial.model$RL_953e04cab396096bc5ddcbafa1a5cb78", ["exports", "@outsystems/runtime-core-js", "TestIMAPIOfficial.model", "TestIMAPIOfficial.model$RC_5241236a152a2af51c043097ec227ddd"], function (exports, OSRuntimeCore, TestIMAPIOfficialModel) {
var OS = OSRuntimeCore;
class RL_953e04cab396096bc5ddcbafa1a5cb78 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return TestIMAPIOfficialModel.RC_5241236a152a2af51c043097ec227ddd;
}

}

TestIMAPIOfficialModel.RL_953e04cab396096bc5ddcbafa1a5cb78 = RL_953e04cab396096bc5ddcbafa1a5cb78;

});

define("TestIMAPIOfficial.model$RL_bff307d70f446f7253411514e4792551", ["exports", "@outsystems/runtime-core-js", "TestIMAPIOfficial.model", "TestIMAPIOfficial.model$RC_3ac77d195404c60db3e99e071fb2d3f7"], function (exports, OSRuntimeCore, TestIMAPIOfficialModel) {
var OS = OSRuntimeCore;
class RL_bff307d70f446f7253411514e4792551 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return TestIMAPIOfficialModel.RC_3ac77d195404c60db3e99e071fb2d3f7;
}

}

TestIMAPIOfficialModel.RL_bff307d70f446f7253411514e4792551 = RL_bff307d70f446f7253411514e4792551;

});

define("TestIMAPIOfficial.model$RL_df3a12aa8bf53bae5ba1e12561771888", ["exports", "@outsystems/runtime-core-js", "TestIMAPIOfficial.model", "TestIMAPIOfficial.model$RC_73c61ca7f65d872a1eebbd91126c43f2"], function (exports, OSRuntimeCore, TestIMAPIOfficialModel) {
var OS = OSRuntimeCore;
class RL_df3a12aa8bf53bae5ba1e12561771888 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return TestIMAPIOfficialModel.RC_73c61ca7f65d872a1eebbd91126c43f2;
}

}

TestIMAPIOfficialModel.RL_df3a12aa8bf53bae5ba1e12561771888 = RL_df3a12aa8bf53bae5ba1e12561771888;

});

define("TestIMAPIOfficial.model$RL_ebe915073624a927cad5ecba5b3b8f0d", ["exports", "@outsystems/runtime-core-js", "TestIMAPIOfficial.model", "TestIMAPIOfficial.model$ST_87d48b4b7c0b379943dcee59095bbdd5Structure"], function (exports, OSRuntimeCore, TestIMAPIOfficialModel) {
var OS = OSRuntimeCore;
class RL_ebe915073624a927cad5ecba5b3b8f0d extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return TestIMAPIOfficialModel.ST_87d48b4b7c0b379943dcee59095bbdd5Structure;
}

}

TestIMAPIOfficialModel.RL_ebe915073624a927cad5ecba5b3b8f0d = RL_ebe915073624a927cad5ecba5b3b8f0d;

});

define("TestIMAPIOfficial.model", ["exports", "@outsystems/runtime-core-js"], function (exports, OSRuntimeCore) {
var OS = OSRuntimeCore;
var TestIMAPIOfficialModel = exports;
Object.defineProperty(TestIMAPIOfficialModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["d057c5c0-3714-4dc5-bf74-99334c71bf1f"];
}
});

TestIMAPIOfficialModel.staticEntities = {};
});

