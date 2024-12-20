import {
    Dc as K,
    Gf as J,
    Ne as k,
    Qe as H,
    Qf as Q,
    Xe as z,
    Ye as W,
    Zc as q,
    _c as j,
    eg as X,
    fc as C,
    gc as N,
    jc as V,
    se as M
} from "./_oschunk-KG7LSUIA.js";
import {
    v as t,
    x as i
} from "./_oschunk-5EPHB76O.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var s = {
    staticEntities: {}
};
s.staticEntities.runtimeType = {};
Object.defineProperty(s.staticEntities.runtimeType, "mobile", {
    get: e(function() {
        return "Mobile"
    }, "get")
});
Object.defineProperty(s.staticEntities.runtimeType, "mobileLibrary", {
    get: e(function() {
        return "MobileLibrary"
    }, "get")
});
Object.defineProperty(s.staticEntities.runtimeType, "service", {
    get: e(function() {
        return "Service"
    }, "get")
});
Object.defineProperty(s.staticEntities.runtimeType, "reactive", {
    get: e(function() {
        return "Reactive"
    }, "get")
});
Object.defineProperty(s.staticEntities.runtimeType, "unknown", {
    get: e(function() {
        return "Unknown"
    }, "get")
});
Object.defineProperty(s.staticEntities.runtimeType, "reactiveLibrary", {
    get: e(function() {
        return "ReactiveLibrary"
    }, "get")
});
s.staticEntities.processStatus = {};
Object.defineProperty(s.staticEntities.processStatus, "active", {
    get: e(function() {
        return i.integerToLongInteger(1)
    }, "get")
});
Object.defineProperty(s.staticEntities.processStatus, "activeWithErrors", {
    get: e(function() {
        return i.integerToLongInteger(2)
    }, "get")
});
Object.defineProperty(s.staticEntities.processStatus, "terminated", {
    get: e(function() {
        return i.integerToLongInteger(4)
    }, "get")
});
Object.defineProperty(s.staticEntities.processStatus, "done", {
    get: e(function() {
        return i.integerToLongInteger(3)
    }, "get")
});
s.staticEntities.activityStatus = {};
Object.defineProperty(s.staticEntities.activityStatus, "running", {
    get: e(function() {
        return i.integerToLongInteger(2)
    }, "get")
});
Object.defineProperty(s.staticEntities.activityStatus, "terminated", {
    get: e(function() {
        return i.integerToLongInteger(4)
    }, "get")
});
Object.defineProperty(s.staticEntities.activityStatus, "waiting", {
    get: e(function() {
        return i.integerToLongInteger(1)
    }, "get")
});
Object.defineProperty(s.staticEntities.activityStatus, "open", {
    get: e(function() {
        return i.integerToLongInteger(6)
    }, "get")
});
Object.defineProperty(s.staticEntities.activityStatus, "error", {
    get: e(function() {
        return i.integerToLongInteger(5)
    }, "get")
});
Object.defineProperty(s.staticEntities.activityStatus, "completed", {
    get: e(function() {
        return i.integerToLongInteger(3)
    }, "get")
});
s.staticEntities.activityKind = {};
Object.defineProperty(s.staticEntities.activityKind, "end", {
    get: e(function() {
        return i.integerToLongInteger(5)
    }, "get")
});
Object.defineProperty(s.staticEntities.activityKind, "decision", {
    get: e(function() {
        return i.integerToLongInteger(4)
    }, "get")
});
Object.defineProperty(s.staticEntities.activityKind, "humanActivity", {
    get: e(function() {
        return i.integerToLongInteger(3)
    }, "get")
});
Object.defineProperty(s.staticEntities.activityKind, "automaticActivity", {
    get: e(function() {
        return i.integerToLongInteger(2)
    }, "get")
});
Object.defineProperty(s.staticEntities.activityKind, "start", {
    get: e(function() {
        return i.integerToLongInteger(1)
    }, "get")
});
var xi = s.staticEntities;
var Be = class Be extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Name", "nameAttr", "Name", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("ApplicationId", "applicationIdAttr", "ApplicationId", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("IsStatic", "isStaticAttr", "IsStatic", !0, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("PrimaryKeyAttribute", "primaryKeyAttributeAttr", "PrimaryKeyAttribute", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Be, "ENEntityEntityRecord");
var c = Be;
c.init();
var Pe = class Pe extends t.GenericRecordList {
    static getItemType() {
        return c
    }
};
e(Pe, "RLEntityList");
var Ee = Pe;
var qt = class qt extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Entity", "entityAttr", "Entity", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new c)
        }, !0, c)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new qt(new qt.RecordClass({
            entityAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "05f199cf-8f73-4662-fa6e-aa91568947ff"
    }
};
e(qt, "RC_05f199cf8f734662fa6eaa91568947ff");
var Y = qt;
Y.init();
var Fe = class Fe extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("InvalidEmail", "invalidEmailAttr", "InvalidEmail", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("InvalidName", "invalidNameAttr", "InvalidName", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("UserAlreadyRegistered", "userAlreadyRegisteredAttr", "UserAlreadyRegistered", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Fe, "StartUserRegistrationFailureReasonRec");
var o = Fe;
o.init();
var jt = class jt extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StartUserRegistrationFailureReason", "startUserRegistrationFailureReasonAttr", "StartUserRegistrationFailureReason", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new o)
        }, !0, o)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new jt(new jt.RecordClass({
            startUserRegistrationFailureReasonAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "3c619bc2-cefd-7ed2-68d8-1977413e1480"
    }
};
e(jt, "RC_3c619bc2cefd7ed268d81977413e1480");
var Z = jt;
Z.init();
var Ce = class Ce extends t.GenericRecordList {
    static getItemType() {
        return Z
    }
};
e(Ce, "RL_089f77c93d3ce6afa3f16b6014987fb9");
var Le = Ce;
var Mt = class Mt extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Mt(new Mt.RecordClass({
            idAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(Mt, "ENRoleEntityRecord");
var u = Mt;
u.init();
var Ne = class Ne extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("ActivityId", "activityIdAttr", "ActivityId", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("OutputDefinitionId", "outputDefinitionIdAttr", "OutputDefinitionId", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("OutputDefinitionKey", "outputDefinitionKeyAttr", "OutputDefinitionKey", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Name", "nameAttr", "Name", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("DataType", "dataTypeAttr", "DataType", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("OutputValue", "outputValueAttr", "OutputValue", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("ForeignKeyEntityId", "foreignKeyEntityIdAttr", "ForeignKeyEntityId", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Ne, "ENActivityOutputEntityRecord");
var p = Ne;
p.init();
var Ve = class Ve extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Name", "nameAttr", "Name", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Ve, "ENTenantEntityRecord");
var m = Ve;
m.init();
var kt = class kt extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Tenant", "tenantAttr", "Tenant", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new m)
        }, !0, m)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new kt(new kt.RecordClass({
            tenantAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "40d0f5c5-ba63-0b10-5850-cead15ae2223"
    }
};
e(kt, "RC_40d0f5c5ba630b105850cead15ae2223");
var $ = kt;
$.init();
var qe = class qe extends t.GenericRecordList {
    static getItemType() {
        return $
    }
};
e(qe, "RL_1021a34c12afbc1ae6d31ca4929b6091");
var Ke = qe;
var je = class je extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Name", "nameAttr", "Name", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(je, "ENActivityKindEntityRecord");
var l = je;
l.init();
var Ht = class Ht extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ActivityKind", "activityKindAttr", "ActivityKind", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new l)
        }, !0, l)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ht(new Ht.RecordClass({
            activityKindAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "99e7afb0-bae5-55fc-f70d-1cd06f23ae14"
    }
};
e(Ht, "RC_99e7afb0bae555fcf70d1cd06f23ae14");
var _ = Ht;
_.init();
var ke = class ke extends t.GenericRecordList {
    static getItemType() {
        return _
    }
};
e(ke, "RL_12438f333dd1f8c1a50e2396d5890dd1");
var Me = ke;
var zt = class zt extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Role", "roleAttr", "Role", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new u)
        }, !0, u)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new zt(new zt.RecordClass({
            roleAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "13630884-b629-a3a5-9e92-9e1cdea42eb1"
    }
};
e(zt, "RC_13630884b629a3a59e929e1cdea42eb1");
var tt = zt;
tt.init();
var Wt = class Wt extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("UserLoginResult", "userLoginResultAttr", "UserLoginResult", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new N)
        }, !0, N)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Wt(new Wt.RecordClass({
            userLoginResultAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f9a589fe-5b81-c3bd-a7db-0e574d5d11fb"
    }
};
e(Wt, "RC_f9a589fe5b81c3bda7db0e574d5d11fb");
var et = Wt;
et.init();
var ze = class ze extends t.GenericRecordList {
    static getItemType() {
        return et
    }
};
e(ze, "RL_137c1fde2390fc7845ae92a0265be990");
var He = ze;
var Je = class Je extends t.GenericRecordList {
    static getItemType() {
        return p
    }
};
e(Je, "RLActivityOutputList");
var We = Je;
var Jt = class Jt extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("UserInfo", "userInfoAttr", "UserInfo", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new V)
        }, !0, V)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Jt(new Jt.RecordClass({
            userInfoAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "79f003ba-a030-e546-826e-d42c3962f582"
    }
};
e(Jt, "RC_79f003baa030e546826ed42c3962f582");
var rt = Jt;
rt.init();
var Xe = class Xe extends t.GenericRecordList {
    static getItemType() {
        return rt
    }
};
e(Xe, "RL_1503951706c05a1675ae923dc239c757");
var Qe = Xe;
var Qt = class Qt extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("FinishResetPasswordFailureReason", "finishResetPasswordFailureReasonAttr", "FinishResetPasswordFailureReason", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new K)
        }, !0, K)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Qt(new Qt.RecordClass({
            finishResetPasswordFailureReasonAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "1ba3db8c-7175-cd09-5b4f-1a36c3a1e53d"
    }
};
e(Qt, "RC_1ba3db8c7175cd095b4f1a36c3a1e53d");
var at = Qt;
at.init();
var Xt = class Xt extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("UpdateUserResult", "updateUserResultAttr", "UpdateUserResult", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new j)
        }, !0, j)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Xt(new Xt.RecordClass({
            updateUserResultAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "bd573fb2-cb52-1691-dc6a-8c4b02eeb054"
    }
};
e(Xt, "RC_bd573fb2cb521691dc6a8c4b02eeb054");
var st = Xt;
st.init();
var Ze = class Ze extends t.GenericRecordList {
    static getItemType() {
        return st
    }
};
e(Ze, "RL_201410915258bdd92387bbd4bec2a7bb");
var Ye = Ze;
var $e = class $e extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ActivityInstanceId", "activityInstanceIdAttr", "ActivityInstanceId", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("RoleId", "roleIdAttr", "RoleId", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e($e, "ENHumanActivityRoleEntityRecord");
var f = $e;
f.init();
var Yt = class Yt extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("HumanActivityRole", "humanActivityRoleAttr", "HumanActivityRole", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new f)
        }, !0, f)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Yt(new Yt.RecordClass({
            humanActivityRoleAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "87c777c3-7ddf-7c13-55ed-bd72c4b71391"
    }
};
e(Yt, "RC_87c777c37ddf7c1355edbd72c4b71391");
var it = Yt;
it.init();
var tr = class tr extends t.GenericRecordList {
    static getItemType() {
        return it
    }
};
e(tr, "RL_205f290c854bc0e1aa93388e5772d11f");
var _e = tr;
var er = class er extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Name", "nameAttr", "Name", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(er, "ENActivityStatusEntityRecord");
var y = er;
y.init();
var Zt = class Zt extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ActivityStatus", "activityStatusAttr", "ActivityStatus", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new y)
        }, !0, y)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Zt(new Zt.RecordClass({
            activityStatusAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "36a7d485-75a5-5c39-ace8-b7f6b0cd3ac4"
    }
};
e(Zt, "RC_36a7d48575a55c39ace8b7f6b0cd3ac4");
var ot = Zt;
ot.init();
var ar = class ar extends t.GenericRecordList {
    static getItemType() {
        return ot
    }
};
e(ar, "RL_20bf822013f9723d57d50b23f1a33f26");
var rr = ar;
var ir = class ir extends t.GenericRecordList {
    static getItemType() {
        return f
    }
};
e(ir, "RLHumanActivityRoleList");
var sr = ir;
var or = class or extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Key", "keyAttr", "Key", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Name", "nameAttr", "Name", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Description", "descriptionAttr", "Description", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("ActivityDefinitionId", "activityDefinitionIdAttr", "ActivityDefinitionId", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("IsActive", "isActiveAttr", "IsActive", !0, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("DataType", "dataTypeAttr", "DataType", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("IsInput", "isInputAttr", "IsInput", !0, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("IsMandatory", "isMandatoryAttr", "IsMandatory", !0, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("DefaultValue", "defaultValueAttr", "DefaultValue", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("ForeignKeyEntityId", "foreignKeyEntityIdAttr", "ForeignKeyEntityId", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(or, "ENActivityOutputDefinitionEntityRecord");
var T = or;
T.init();
var cr = class cr extends t.GenericRecordList {
    static getItemType() {
        return T
    }
};
e(cr, "RLActivityOutputDefinitionList");
var nr = cr;
var ur = class ur extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("ProcessDefinitionId", "processDefinitionIdAttr", "ProcessDefinitionId", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Status", "statusAttr", "Status", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("StartedOn", "startedOnAttr", "StartedOn", !1, !1, t.DataTypes.DateTime, function() {
            return t.DateTime.defaultValue
        }, !0), this.attr("LastModifiedOn", "lastModifiedOnAttr", "LastModifiedOn", !1, !1, t.DataTypes.DateTime, function() {
            return t.DateTime.defaultValue
        }, !0), this.attr("Label", "labelAttr", "Label", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(ur, "ENProcessInstanceEntityRecord");
var D = ur;
D.init();
var $t = class $t extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ProcessInstance", "processInstanceAttr", "ProcessInstance", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new D)
        }, !0, D)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new $t(new $t.RecordClass({
            processInstanceAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c2c51a49-c601-586c-1a14-3904ac6893f9"
    }
};
e($t, "RC_c2c51a49c601586c1a143904ac6893f9");
var nt = $t;
nt.init();
var mr = class mr extends t.GenericRecordList {
    static getItemType() {
        return nt
    }
};
e(mr, "RL_247a9c7809b4893cc7a21d0914d69e61");
var pr = mr;
var _t = class _t extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ActivityOutput", "activityOutputAttr", "ActivityOutput", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new p)
        }, !0, p)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new _t(new _t.RecordClass({
            activityOutputAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "24e87e1f-1de2-97ca-8a69-1099e40c22ed"
    }
};
e(_t, "RC_24e87e1f1de297ca8a691099e40c22ed");
var ct = _t;
ct.init();
var lr = class lr extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("RoleId", "roleIdAttr", "RoleId", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("ActivityDefinitionId", "activityDefinitionIdAttr", "ActivityDefinitionId", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(lr, "ENActivityDefinitionRoleEntityRecord");
var d = lr;
d.init();
var yr = class yr extends t.GenericRecordList {
    static getItemType() {
        return d
    }
};
e(yr, "RLActivityDefinitionRoleList");
var fr = yr;
var Dr = class Dr extends t.GenericRecordList {
    static getItemType() {
        return ct
    }
};
e(Dr, "RL_28fc2381cbc1135b5eb41ae627dcd287");
var Tr = Dr;
var dr = class dr extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Name", "nameAttr", "Name", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("EntityId", "entityIdAttr", "EntityId", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("DataType", "dataTypeAttr", "DataType", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Length", "lengthAttr", "Length", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Decimals", "decimalsAttr", "Decimals", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("IsMandatory", "isMandatoryAttr", "IsMandatory", !0, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("IsAutoGenerated", "isAutoGeneratedAttr", "IsAutoGenerated", !0, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Label", "labelAttr", "Label", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("OrderNumber", "orderNumberAttr", "OrderNumber", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("ForeignKeyEntityId", "foreignKeyEntityIdAttr", "ForeignKeyEntityId", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(dr, "ENEntityAttributeEntityRecord");
var S = dr;
S.init();
var te = class te extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("EntityAttribute", "entityAttributeAttr", "EntityAttribute", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new S)
        }, !0, S)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new te(new te.RecordClass({
            entityAttributeAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2efffbee-03fc-cc31-484e-893e007e6c9a"
    }
};
e(te, "RC_2efffbee03fccc31484e893e007e6c9a");
var ut = te;
ut.init();
var Sr = class Sr extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Name", "nameAttr", "Name", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Sr, "ENProcessStatusEntityRecord");
var O = Sr;
O.init();
var xr = class xr extends t.GenericRecordList {
    static getItemType() {
        return O
    }
};
e(xr, "RLProcessStatusList");
var Or = xr;
var Ir = class Ir extends t.GenericRecordList {
    static getItemType() {
        return K
    }
};
e(Ir, "RL_31d7615454c0155a64f826d4e0cf4cb5");
var gr = Ir;
var Rr = class Rr extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Label", "labelAttr", "Label", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Order", "orderAttr", "Order", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("IsActive", "isActiveAttr", "IsActive", !0, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Rr, "ENRuntimeTypeEntityRecord");
var x = Rr;
x.init();
var ee = class ee extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("RuntimeType", "runtimeTypeAttr", "RuntimeType", !0, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new x)
        }, !0, x)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ee(new ee.RecordClass({
            runtimeTypeAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "3251af6c-799b-185d-408b-7cad31be3454"
    }
};
e(ee, "RC_3251af6c799b185d408b7cad31be3454");
var pt = ee;
pt.init();
var Ar = class Ar extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Size", "sizeAttr", "Size", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Ar, "ENEmailEntityRecord");
var g = Ar;
g.init();
var br = class br extends t.GenericRecordList {
    static getItemType() {
        return g
    }
};
e(br, "RLEmailList");
var hr = br;
var Gr = class Gr extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Key", "keyAttr", "Key", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Name", "nameAttr", "Name", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Revision", "revisionAttr", "Revision", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Gr, "ENProcessDefinitionEntityRecord");
var I = Gr;
I.init();
var Ur = class Ur extends t.GenericRecordList {
    static getItemType() {
        return x
    }
};
e(Ur, "RLRuntimeTypeList");
var wr = Ur;
var Br = class Br extends t.GenericRecordList {
    static getItemType() {
        return j
    }
};
e(Br, "RL_36d4d7e2109bafadf398450826580bed");
var vr = Br;
var Er = class Er extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("SourceActivityDefinitionId", "sourceActivityDefinitionIdAttr", "SourceActivityDefinitionId", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("TargetActivityDefinitionId", "targetActivityDefinitionIdAttr", "TargetActivityDefinitionId", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("IsActive", "isActiveAttr", "IsActive", !0, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Outcome", "outcomeAttr", "Outcome", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Er, "ENActivityDefinitionLinkEntityRecord");
var R = Er;
R.init();
var Fr = class Fr extends t.GenericRecordList {
    static getItemType() {
        return R
    }
};
e(Fr, "RLActivityDefinitionLinkList");
var Pr = Fr;
var Lr = class Lr extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Success", "successAttr", "Success", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("StartUserRegistrationFailureReason", "startUserRegistrationFailureReasonAttr", "StartUserRegistrationFailureReason", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new o)
        }, !0, o), this.attr("VerificationCode", "verificationCodeAttr", "VerificationCode", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("UserId", "userIdAttr", "UserId", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Lr, "StartUserRegistrationResultRec");
var A = Lr;
A.init();
var re = class re extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StartUserRegistrationResult", "startUserRegistrationResultAttr", "StartUserRegistrationResult", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new A)
        }, !0, A)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new re(new re.RecordClass({
            startUserRegistrationResultAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "37cfc11a-ad68-902b-9d78-f57915b7ae79"
    }
};
e(re, "RC_37cfc11aad68902b9d78f57915b7ae79");
var mt = re;
mt.init();
var ae = class ae extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ActivityOutputDefinition", "activityOutputDefinitionAttr", "ActivityOutputDefinition", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new T)
        }, !0, T)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ae(new ae.RecordClass({
            activityOutputDefinitionAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "8535fa70-cf0b-fd6f-a50f-69a53d3b4ae1"
    }
};
e(ae, "RC_8535fa70cf0bfd6fa50f69a53d3b4ae1");
var lt = ae;
lt.init();
var Nr = class Nr extends t.GenericRecordList {
    static getItemType() {
        return lt
    }
};
e(Nr, "RL_382066feb08849f8e2adc5062ac75efa");
var Cr = Nr;
var Kr = class Kr extends t.GenericRecordList {
    static getItemType() {
        return C
    }
};
e(Kr, "RL_3b8feaa11cc930133dbb7eecb085b527");
var Vr = Kr;
var qr = class qr extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Name", "nameAttr", "Name", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Type", "typeAttr", "Type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(qr, "ENApplicationEntityRecord");
var h = qr;
h.init();
var jr = class jr extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Key", "keyAttr", "Key", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("ProcessDefinitionId", "processDefinitionIdAttr", "ProcessDefinitionId", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Name", "nameAttr", "Name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Kind", "kindAttr", "Kind", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(jr, "ENActivityDefinitionEntityRecord");
var b = jr;
b.init();
var se = class se extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ActivityDefinition", "activityDefinitionAttr", "ActivityDefinition", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new b)
        }, !0, b)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new se(new se.RecordClass({
            activityDefinitionAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a04f94cf-d410-c813-b8de-e156f64b6537"
    }
};
e(se, "RC_a04f94cfd410c813b8dee156f64b6537");
var ft = se;
ft.init();
var kr = class kr extends t.GenericRecordList {
    static getItemType() {
        return ft
    }
};
e(kr, "RL_3e3c312f4b244ea01713a0fa4a15518a");
var Mr = kr;
var ie = class ie extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("FinishResetPasswordResult", "finishResetPasswordResultAttr", "FinishResetPasswordResult", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new M)
        }, !0, M)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ie(new ie.RecordClass({
            finishResetPasswordResultAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "9817a574-7e4b-09aa-3a6a-7eb35ce9f66e"
    }
};
e(ie, "RC_9817a5747e4b09aa3a6a7eb35ce9f66e");
var yt = ie;
yt.init();
var zr = class zr extends t.GenericRecordList {
    static getItemType() {
        return yt
    }
};
e(zr, "RL_3f7b36d8bbcf12054b7e2f49497f214f");
var Hr = zr;
var Wr = class Wr extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("ActivityDefinitionId", "activityDefinitionIdAttr", "ActivityDefinitionId", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Locale", "localeAttr", "Locale", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Label", "labelAttr", "Label", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("InboxInstructions", "inboxInstructionsAttr", "InboxInstructions", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Wr, "ENActivityDefinitionLanguageEntityRecord");
var G = Wr;
G.init();
var Qr = class Qr extends t.GenericRecordList {
    static getItemType() {
        return G
    }
};
e(Qr, "RLActivityDefinitionLanguageList");
var Jr = Qr;
var Xr = class Xr extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("ProcessId", "processIdAttr", "ProcessId", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("InputDefinitionId", "inputDefinitionIdAttr", "InputDefinitionId", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("InputDefinitionKey", "inputDefinitionKeyAttr", "InputDefinitionKey", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Name", "nameAttr", "Name", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("DataType", "dataTypeAttr", "DataType", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("InputValue", "inputValueAttr", "InputValue", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("ForeignKeyEntityId", "foreignKeyEntityIdAttr", "ForeignKeyEntityId", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Xr, "ENProcessInputEntityRecord");
var w = Xr;
w.init();
var Zr = class Zr extends t.GenericRecordList {
    static getItemType() {
        return w
    }
};
e(Zr, "RLProcessInputList");
var Yr = Zr;
var _r = class _r extends t.GenericRecordList {
    static getItemType() {
        return at
    }
};
e(_r, "RL_47595c6744be14d2bd677fd05324180f");
var $r = _r;
var ta = class ta extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("ProcessDefinitionId", "processDefinitionIdAttr", "ProcessDefinitionId", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Locale", "localeAttr", "Locale", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Label", "labelAttr", "Label", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(ta, "ENProcessDefinitionLanguageEntityRecord");
var U = ta;
U.init();
var oe = class oe extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ProcessDefinitionLanguage", "processDefinitionLanguageAttr", "ProcessDefinitionLanguage", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new U)
        }, !0, U)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new oe(new oe.RecordClass({
            processDefinitionLanguageAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b1f889a3-5d23-518b-fa5a-b890a96efb52"
    }
};
e(oe, "RC_b1f889a35d23518bfa5ab890a96efb52");
var Tt = oe;
Tt.init();
var ra = class ra extends t.GenericRecordList {
    static getItemType() {
        return Tt
    }
};
e(ra, "RL_4bc987bb2bbc5a9c083569aa81631f7e");
var ea = ra;
var ne = class ne extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PasswordComplexityPolicy", "passwordComplexityPolicyAttr", "PasswordComplexityPolicy", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new k)
        }, !0, k)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ne(new ne.RecordClass({
            passwordComplexityPolicyAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "4d77cfdd-567b-2086-8037-7834fc8205a2"
    }
};
e(ne, "RC_4d77cfdd567b208680377834fc8205a2");
var Dt = ne;
Dt.init();
var sa = class sa extends t.GenericRecordList {
    static getItemType() {
        return H
    }
};
e(sa, "RL_4e4931d865c8789e9e6ef1d8540ae228");
var aa = sa;
var oa = class oa extends t.GenericRecordList {
    static getItemType() {
        return b
    }
};
e(oa, "RLActivityDefinitionList");
var ia = oa;
var na = class na extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Name", "nameAttr", "Name", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Description", "descriptionAttr", "Description", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("ProcessDefinitionId", "processDefinitionIdAttr", "ProcessDefinitionId", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("IsActive", "isActiveAttr", "IsActive", !0, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("DataType", "dataTypeAttr", "DataType", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("DefaultValue", "defaultValueAttr", "DefaultValue", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("ForeignKeyEntityId", "foreignKeyEntityIdAttr", "ForeignKeyEntityId", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(na, "ENProcessOutputDefinitionEntityRecord");
var v = na;
v.init();
var ce = class ce extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ProcessOutputDefinition", "processOutputDefinitionAttr", "ProcessOutputDefinition", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new v)
        }, !0, v)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ce(new ce.RecordClass({
            processOutputDefinitionAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "fd7c0ec5-e9d4-fd6a-4a9a-332d3e175dd4"
    }
};
e(ce, "RC_fd7c0ec5e9d4fd6a4a9a332d3e175dd4");
var dt = ce;
dt.init();
var ua = class ua extends t.GenericRecordList {
    static getItemType() {
        return dt
    }
};
e(ua, "RL_52acedf8b6208b104cbd689064facc6a");
var ca = ua;
var ue = class ue extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ChangePasswordResult", "changePasswordResultAttr", "ChangePasswordResult", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new W)
        }, !0, W)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ue(new ue.RecordClass({
            changePasswordResultAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "53d49141-7faf-149f-9fb8-a0dda9c12d06"
    }
};
e(ue, "RC_53d491417faf149f9fb8a0dda9c12d06");
var St = ue;
St.init();
var ma = class ma extends t.GenericRecordList {
    static getItemType() {
        return V
    }
};
e(ma, "RL_54fab648630d41e343fad35c1143481d");
var pa = ma;
var fa = class fa extends t.GenericRecordList {
    static getItemType() {
        return l
    }
};
e(fa, "RLActivityKindList");
var la = fa;
var Ta = class Ta extends t.GenericRecordList {
    static getItemType() {
        return ut
    }
};
e(Ta, "RL_582b59adcb0660dd0915958cbaffea77");
var ya = Ta;
var da = class da extends t.GenericRecordList {
    static getItemType() {
        return pt
    }
};
e(da, "RL_599ab6c06883c99851f6aa769853530c");
var Da = da;
var pe = class pe extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("UpdateUserFailureReason", "updateUserFailureReasonAttr", "UpdateUserFailureReason", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new q)
        }, !0, q)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new pe(new pe.RecordClass({
            updateUserFailureReasonAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5d4c0a98-b977-3e48-9e7e-27bfe5360793"
    }
};
e(pe, "RC_5d4c0a98b9773e489e7e27bfe5360793");
var Ot = pe;
Ot.init();
var Sa = class Sa extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("ProcessId", "processIdAttr", "ProcessId", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("OutputDefinitionId", "outputDefinitionIdAttr", "OutputDefinitionId", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("OutputDefinitionKey", "outputDefinitionKeyAttr", "OutputDefinitionKey", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Name", "nameAttr", "Name", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("DataType", "dataTypeAttr", "DataType", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("OutputValue", "outputValueAttr", "OutputValue", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("ForeignKeyEntityId", "foreignKeyEntityIdAttr", "ForeignKeyEntityId", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Sa, "ENProcessOutputEntityRecord");
var B = Sa;
B.init();
var xa = class xa extends t.GenericRecordList {
    static getItemType() {
        return B
    }
};
e(xa, "RLProcessOutputList");
var Oa = xa;
var ga = class ga extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("InvalidVerificationCode", "invalidVerificationCodeAttr", "InvalidVerificationCode", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("PasswordComplexityPolicyFailed", "passwordComplexityPolicyFailedAttr", "PasswordComplexityPolicyFailed", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("InvalidEmail", "invalidEmailAttr", "InvalidEmail", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(ga, "FinishUserRegistrationFailureReasonRec");
var n = ga;
n.init();
var Ra = class Ra extends t.GenericRecordList {
    static getItemType() {
        return h
    }
};
e(Ra, "RLApplicationList");
var Ia = Ra;
var ha = class ha extends t.GenericRecordList {
    static getItemType() {
        return M
    }
};
e(ha, "RL_68be9dd68c0e161ac2c65c1092c999e6");
var Aa = ha;
var Ga = class Ga extends t.GenericRecordList {
    static getItemType() {
        return I
    }
};
e(Ga, "RLProcessDefinitionList");
var ba = Ga;
var wa = class wa extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Success", "successAttr", "Success", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("UserId", "userIdAttr", "UserId", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("FinishUserRegistrationFailureReason", "finishUserRegistrationFailureReasonAttr", "FinishUserRegistrationFailureReason", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new n)
        }, !0, n)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(wa, "FinishUserRegistrationResultRec");
var E = wa;
E.init();
var va = class va extends t.GenericRecordList {
    static getItemType() {
        return y
    }
};
e(va, "RLActivityStatusList");
var Ua = va;
var Ea = class Ea extends t.GenericRecordList {
    static getItemType() {
        return D
    }
};
e(Ea, "RLProcessInstanceList");
var Ba = Ea;
var Fa = class Fa extends t.GenericRecordList {
    static getItemType() {
        return m
    }
};
e(Fa, "RLTenantList");
var Pa = Fa;
var Ca = class Ca extends t.GenericRecordList {
    static getItemType() {
        return U
    }
};
e(Ca, "RLProcessDefinitionLanguageList");
var La = Ca;
var me = class me extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Application", "applicationAttr", "Application", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new h)
        }, !0, h)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new me(new me.RecordClass({
            applicationAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a702e171-772a-9b89-c17e-2544ab6d1d29"
    }
};
e(me, "RC_a702e171772a9b89c17e2544ab6d1d29");
var xt = me;
xt.init();
var Va = class Va extends t.GenericRecordList {
    static getItemType() {
        return xt
    }
};
e(Va, "RL_77de0cb9f6a169c5c7917faf23aa1522");
var Na = Va;
var Ka = class Ka extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("ActivityDefinitionId", "activityDefinitionIdAttr", "ActivityDefinitionId", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("ProcessInstanceId", "processInstanceIdAttr", "ProcessInstanceId", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("ProcessDefinitionId", "processDefinitionIdAttr", "ProcessDefinitionId", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Status", "statusAttr", "Status", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("StartedOn", "startedOnAttr", "StartedOn", !1, !1, t.DataTypes.DateTime, function() {
            return t.DateTime.defaultValue
        }, !0), this.attr("LastModifiedOn", "lastModifiedOnAttr", "LastModifiedOn", !1, !1, t.DataTypes.DateTime, function() {
            return t.DateTime.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Ka, "ENActivityInstanceEntityRecord");
var P = Ka;
P.init();
var ja = class ja extends t.GenericRecordList {
    static getItemType() {
        return P
    }
};
e(ja, "RLActivityInstanceList");
var qa = ja;
var le = class le extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("FinishUserRegistrationFailureReason", "finishUserRegistrationFailureReasonAttr", "FinishUserRegistrationFailureReason", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new n)
        }, !0, n)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new le(new le.RecordClass({
            finishUserRegistrationFailureReasonAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "78fc3f34-c3c6-8c7b-3604-ba4da3920682"
    }
};
e(le, "RC_78fc3f34c3c68c7b3604ba4da3920682");
var gt = le;
gt.init();
var Ma = class Ma extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Key", "keyAttr", "Key", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Name", "nameAttr", "Name", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Description", "descriptionAttr", "Description", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("ProcessDefinitionId", "processDefinitionIdAttr", "ProcessDefinitionId", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("IsActive", "isActiveAttr", "IsActive", !0, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("DataType", "dataTypeAttr", "DataType", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("DefaultValue", "defaultValueAttr", "DefaultValue", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("IsMandatory", "isMandatoryAttr", "IsMandatory", !0, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("ForeignKeyEntityId", "foreignKeyEntityIdAttr", "ForeignKeyEntityId", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Ma, "ENProcessInputDefinitionEntityRecord");
var F = Ma;
F.init();
var fe = class fe extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ProcessInputDefinition", "processInputDefinitionAttr", "ProcessInputDefinition", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new F)
        }, !0, F)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new fe(new fe.RecordClass({
            processInputDefinitionAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "cbc07de8-2512-4506-4bd8-f80b6b35c7f6"
    }
};
e(fe, "RC_cbc07de8251245064bd8f80b6b35c7f6");
var It = fe;
It.init();
var Ha = class Ha extends t.GenericRecordList {
    static getItemType() {
        return It
    }
};
e(Ha, "RL_7a20bba9a4dcbce87cc868fa1eaca840");
var ka = Ha;
var ye = class ye extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ProcessDefinition", "processDefinitionAttr", "ProcessDefinition", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new I)
        }, !0, I)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ye(new ye.RecordClass({
            processDefinitionAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "80c865cc-f1b0-df95-3918-17b0ddc45e18"
    }
};
e(ye, "RC_80c865ccf1b0df95391817b0ddc45e18");
var Rt = ye;
Rt.init();
var Te = class Te extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("User", "userAttr", "User", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new J)
        }, !0, J)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Te(new Te.RecordClass({
            userAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "ced01335-8a82-a813-f1d9-a5108f17ce79"
    }
};
e(Te, "RC_ced013358a82a813f1d9a5108f17ce79");
var At = Te;
At.init();
var Wa = class Wa extends t.GenericRecordList {
    static getItemType() {
        return At
    }
};
e(Wa, "RL_8430333e95ceffc00def96d8abb01f75");
var za = Wa;
var De = class De extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ActivityDefinitionLanguage", "activityDefinitionLanguageAttr", "ActivityDefinitionLanguage", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new G)
        }, !0, G)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new De(new De.RecordClass({
            activityDefinitionLanguageAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "eb90da5b-3472-4818-e840-08409205001c"
    }
};
e(De, "RC_eb90da5b34724818e84008409205001c");
var ht = De;
ht.init();
var Qa = class Qa extends t.GenericRecordList {
    static getItemType() {
        return ht
    }
};
e(Qa, "RL_84cf1463cd1d81cde9e2c5c4a48cc763");
var Ja = Qa;
var Ya = class Ya extends t.GenericRecordList {
    static getItemType() {
        return u
    }
};
e(Ya, "RLRoleList");
var Xa = Ya;
var Za = class Za extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ActivityInstanceId", "activityInstanceIdAttr", "ActivityInstanceId", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("AssignedUserId", "assignedUserIdAttr", "AssignedUserId", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Message", "messageAttr", "Message", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("URL", "uRLAttr", "URL", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Za, "ENHumanActivityInstanceEntityRecord");
var L = Za;
L.init();
var de = class de extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("HumanActivityInstance", "humanActivityInstanceAttr", "HumanActivityInstance", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new L)
        }, !0, L)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new de(new de.RecordClass({
            humanActivityInstanceAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "880f0b08-a77c-1575-f19f-408e1fddc8c6"
    }
};
e(de, "RC_880f0b08a77c1575f19f408e1fddc8c6");
var bt = de;
bt.init();
var Se = class Se extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("FinishUserRegistrationResult", "finishUserRegistrationResultAttr", "FinishUserRegistrationResult", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new E)
        }, !0, E)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Se(new Se.RecordClass({
            finishUserRegistrationResultAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "8a5dc374-bf93-6f41-e6af-63789db6143f"
    }
};
e(Se, "RC_8a5dc374bf936f41e6af63789db6143f");
var Gt = Se;
Gt.init();
var _a = class _a extends t.GenericRecordList {
    static getItemType() {
        return q
    }
};
e(_a, "RL_8b34cec2d3a4e3170e329009c7e2bef8");
var $a = _a;
var Oe = class Oe extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StartResetPasswordResult", "startResetPasswordResultAttr", "StartResetPasswordResult", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new H)
        }, !0, H)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Oe(new Oe.RecordClass({
            startResetPasswordResultAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "8f8c9b77-bcc0-9965-64fe-bb7d38ea930a"
    }
};
e(Oe, "RC_8f8c9b77bcc0996564febb7d38ea930a");
var wt = Oe;
wt.init();
var es = class es extends t.GenericRecordList {
    static getItemType() {
        return wt
    }
};
e(es, "RL_8c6f3d2b086b4a75242a7e7c084f1692");
var ts = es;
var as = class as extends t.GenericRecordList {
    static getItemType() {
        return Dt
    }
};
e(as, "RL_919d8bc896529858c8cc8f0f3e5cb019");
var rs = as;
var xe = class xe extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ActivityDefinitionLink", "activityDefinitionLinkAttr", "ActivityDefinitionLink", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new R)
        }, !0, R)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new xe(new xe.RecordClass({
            activityDefinitionLinkAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c97a9c0c-b896-c874-168b-02efa3e48866"
    }
};
e(xe, "RC_c97a9c0cb896c874168b02efa3e48866");
var Ut = xe;
Ut.init();
var is = class is extends t.GenericRecordList {
    static getItemType() {
        return Ut
    }
};
e(is, "RL_9587436fe4e8f406175a43d163260035");
var ss = is;
var ns = class ns extends t.GenericRecordList {
    static getItemType() {
        return L
    }
};
e(ns, "RLHumanActivityInstanceList");
var os = ns;
var ge = class ge extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ActivityDefinitionRole", "activityDefinitionRoleAttr", "ActivityDefinitionRole", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new d)
        }, !0, d)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ge(new ge.RecordClass({
            activityDefinitionRoleAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e6ef33ef-6256-e74a-2c6e-9f5dbfecc6ae"
    }
};
e(ge, "RC_e6ef33ef6256e74a2c6e9f5dbfecc6ae");
var vt = ge;
vt.init();
var us = class us extends t.GenericRecordList {
    static getItemType() {
        return vt
    }
};
e(us, "RL_998b7e962bf7fec9cf03c9baf25fb2da");
var cs = us;
var ms = class ms extends t.GenericRecordList {
    static getItemType() {
        return Q
    }
};
e(ms, "RL_9ab59cf1963fbe94eddb7ebb18232c35");
var ps = ms;
var fs = class fs extends t.GenericRecordList {
    static getItemType() {
        return Ot
    }
};
e(fs, "RL_9bba1220f91628d35d17687902f382ad");
var ls = fs;
var Ts = class Ts extends t.GenericRecordList {
    static getItemType() {
        return gt
    }
};
e(Ts, "RL_9cf7ac5f0e0e6764a1fd30a6b5272901");
var ys = Ts;
var ds = class ds extends t.GenericRecordList {
    static getItemType() {
        return E
    }
};
e(ds, "RL_9eba70ecf7dd38d3ed1fcfec91b187a8");
var Ds = ds;
var Ie = class Ie extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("UserUpdateInfo", "userUpdateInfoAttr", "UserUpdateInfo", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Q)
        }, !0, Q)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ie(new Ie.RecordClass({
            userUpdateInfoAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a582d846-34a3-0a3a-3b1e-61cbfd3db9de"
    }
};
e(Ie, "RC_a582d84634a30a3a3b1e61cbfd3db9de");
var Bt = Ie;
Bt.init();
var Os = class Os extends t.GenericRecordList {
    static getItemType() {
        return Bt
    }
};
e(Os, "RL_a5b6b975942e234f0350205b728240be");
var Ss = Os;
var gs = class gs extends t.GenericRecordList {
    static getItemType() {
        return z
    }
};
e(gs, "RL_a60626c1780bfe250dcef75d5dfa5fd1");
var xs = gs;
var Re = class Re extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ProcessStatus", "processStatusAttr", "ProcessStatus", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new O)
        }, !0, O)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Re(new Re.RecordClass({
            processStatusAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a7be5795-c4af-08fa-8098-110e55d36aff"
    }
};
e(Re, "RC_a7be5795c4af08fa8098110e55d36aff");
var Et = Re;
Et.init();
var Rs = class Rs extends t.GenericRecordList {
    static getItemType() {
        return Gt
    }
};
e(Rs, "RL_a7ed37c4ad7efcace07e2b019a1eb3fb");
var Is = Rs;
var hs = class hs extends t.GenericRecordList {
    static getItemType() {
        return o
    }
};
e(hs, "RL_aad032b1e33509d2ba60156a32583c0e");
var As = hs;
var Gs = class Gs extends t.GenericRecordList {
    static getItemType() {
        return bt
    }
};
e(Gs, "RL_b1951e6718fee0cfdfe159a4bfc6a006");
var bs = Gs;
var Ae = class Ae extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PasswordValidationResult", "passwordValidationResultAttr", "PasswordValidationResult", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new X)
        }, !0, X)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ae(new Ae.RecordClass({
            passwordValidationResultAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b27f0b96-8b0f-7cea-6150-6ac9d6ee7c27"
    }
};
e(Ae, "RC_b27f0b968b0f7cea61506ac9d6ee7c27");
var Pt = Ae;
Pt.init();
var he = class he extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ChangePasswordFailureReason", "changePasswordFailureReasonAttr", "ChangePasswordFailureReason", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new z)
        }, !0, z)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new he(new he.RecordClass({
            changePasswordFailureReasonAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e5c662d4-06f8-3f7f-791b-d7e5c8b0c543"
    }
};
e(he, "RC_e5c662d406f83f7f791bd7e5c8b0c543");
var Ft = he;
Ft.init();
var Us = class Us extends t.GenericRecordList {
    static getItemType() {
        return Ft
    }
};
e(Us, "RL_b6f4bbf36a4770c53788c60d2b555d3c");
var ws = Us;
var Bs = class Bs extends t.GenericRecordList {
    static getItemType() {
        return S
    }
};
e(Bs, "RLEntityAttributeList");
var vs = Bs;
var be = class be extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ProcessOutput", "processOutputAttr", "ProcessOutput", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new B)
        }, !0, B)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new be(new be.RecordClass({
            processOutputAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d5e6f13d-187b-5006-f9f8-8b20f576700b"
    }
};
e(be, "RC_d5e6f13d187b5006f9f88b20f576700b");
var Lt = be;
Lt.init();
var Ps = class Ps extends t.GenericRecordList {
    static getItemType() {
        return Lt
    }
};
e(Ps, "RL_bc43d11ed6e576c35db6fd694bd47a1e");
var Es = Ps;
var Ls = class Ls extends t.GenericRecordList {
    static getItemType() {
        return N
    }
};
e(Ls, "RL_bfe5e088b2f6df6ae697d4a263069bca");
var Fs = Ls;
var Ge = class Ge extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Email", "emailAttr", "Email", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new g)
        }, !0, g)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ge(new Ge.RecordClass({
            emailAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c25115a8-4bc2-1f80-350d-8ea6536353ed"
    }
};
e(Ge, "RC_c25115a84bc21f80350d8ea6536353ed");
var Ct = Ge;
Ct.init();
var Ns = class Ns extends t.GenericRecordList {
    static getItemType() {
        return Pt
    }
};
e(Ns, "RL_ca4befaa7d5de5d9bbcd4bf59c44b15c");
var Cs = Ns;
var Ks = class Ks extends t.GenericRecordList {
    static getItemType() {
        return mt
    }
};
e(Ks, "RL_cc1e5a7165115293b327c74187de23a0");
var Vs = Ks;
var js = class js extends t.GenericRecordList {
    static getItemType() {
        return v
    }
};
e(js, "RLProcessOutputDefinitionList");
var qs = js;
var we = class we extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ProcessInput", "processInputAttr", "ProcessInput", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new w)
        }, !0, w)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new we(new we.RecordClass({
            processInputAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d43fed74-d167-8e95-4ae3-786a22cd1029"
    }
};
e(we, "RC_d43fed74d1678e954ae3786a22cd1029");
var Nt = we;
Nt.init();
var ks = class ks extends t.GenericRecordList {
    static getItemType() {
        return Nt
    }
};
e(ks, "RL_d3784dc8f20ed95f2aa0989c41c24312");
var Ms = ks;
var zs = class zs extends t.GenericRecordList {
    static getItemType() {
        return Rt
    }
};
e(zs, "RL_d68e5346549cf39dd97c26423ec75146");
var Hs = zs;
var Js = class Js extends t.GenericRecordList {
    static getItemType() {
        return tt
    }
};
e(Js, "RL_db06c2b916049d1c72db56f953d2667f");
var Ws = Js;
var Xs = class Xs extends t.GenericRecordList {
    static getItemType() {
        return A
    }
};
e(Xs, "RL_e03caeb3051b63201fbde73f1c69f75b");
var Qs = Xs;
var Ue = class Ue extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ActivityInstance", "activityInstanceAttr", "ActivityInstance", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new P)
        }, !0, P)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ue(new Ue.RecordClass({
            activityInstanceAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "faf38c2d-2aee-e71f-293a-d23cd32fa7e2"
    }
};
e(Ue, "RC_faf38c2d2aeee71f293ad23cd32fa7e2");
var Vt = Ue;
Vt.init();
var Zs = class Zs extends t.GenericRecordList {
    static getItemType() {
        return Vt
    }
};
e(Zs, "RL_e4683611f40e200d3ecdb101fca93d6d");
var Ys = Zs;
var _s = class _s extends t.GenericRecordList {
    static getItemType() {
        return X
    }
};
e(_s, "RL_e57523dcca7e6d3766c4721a0ef109ee");
var $s = _s;
var ei = class ei extends t.GenericRecordList {
    static getItemType() {
        return F
    }
};
e(ei, "RLProcessInputDefinitionList");
var ti = ei;
var ai = class ai extends t.GenericRecordList {
    static getItemType() {
        return Y
    }
};
e(ai, "RL_eba0e3b376adecb3137463bf4c64acb3");
var ri = ai;
var ii = class ii extends t.GenericRecordList {
    static getItemType() {
        return St
    }
};
e(ii, "RL_f07d4ee6d8af2ad822d0947b26fdf6f3");
var si = ii;
var ni = class ni extends t.GenericRecordList {
    static getItemType() {
        return n
    }
};
e(ni, "RL_f1cba7c926c1338911619f0bbdd18e16");
var oi = ni;
var ui = class ui extends t.GenericRecordList {
    static getItemType() {
        return J
    }
};
e(ui, "RLUserList");
var ci = ui;
var mi = class mi extends t.GenericRecordList {
    static getItemType() {
        return k
    }
};
e(mi, "RL_f50879d0da007880fcd304f3378f0a9e");
var pi = mi;
var ve = class ve extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("UserLoginFailureReason", "userLoginFailureReasonAttr", "UserLoginFailureReason", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new C)
        }, !0, C)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ve(new ve.RecordClass({
            userLoginFailureReasonAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f61c868e-f053-db94-121c-e89ee15a14fe"
    }
};
e(ve, "RC_f61c868ef053db94121ce89ee15a14fe");
var Kt = ve;
Kt.init();
var fi = class fi extends t.GenericRecordList {
    static getItemType() {
        return Kt
    }
};
e(fi, "RL_fbc9fc52e3cef45822e06efc69df5a4a");
var li = fi;
var Ti = class Ti extends t.GenericRecordList {
    static getItemType() {
        return W
    }
};
e(Ti, "RL_fc9a0541e530960ed38d7662d5b2141b");
var yi = Ti;
var di = class di extends t.GenericRecordList {
    static getItemType() {
        return Ct
    }
};
e(di, "RL_fd604259751c80eed887a8f5a0f5dc23");
var Di = di;
var Oi = class Oi extends t.GenericRecordList {
    static getItemType() {
        return Et
    }
};
e(Oi, "RL_fdf787b37ceb8d49d68d7ae5649f3b09");
var Si = Oi;