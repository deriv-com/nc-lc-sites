import {
    a as Qi,
    b as Yi
} from "./_oschunk-4YFBPYRH.js";
import {
    d as y,
    f as Zi,
    m as T,
    u as dt
} from "./_oschunk-5HXBKFJV.js";
import {
    a as en,
    g as $i,
    i as Ye
} from "./_oschunk-2Q3BG5XZ.js";
import {
    Af as lt,
    Nd as st,
    Pb as X,
    Qb as _,
    Sb as tt,
    bf as ut,
    he as it,
    if as pt,
    jc as et,
    ke as nt,
    qe as ot,
    re as ct,
    yc as rt,
    zc as at
} from "./_oschunk-5FYEKNKX.js";
import {
    ia as r,
    v as t,
    x as f
} from "./_oschunk-5KJVGEL7.js";
import {
    c as e,
    h as tn
} from "./_oschunk-QHO7QY6K.js";
var p = {
    staticEntities: {}
};
p.staticEntities.runtimeType = {};
Object.defineProperty(p.staticEntities.runtimeType, "mobile", {
    get: e(function() {
        return "Mobile"
    }, "get")
});
Object.defineProperty(p.staticEntities.runtimeType, "mobileLibrary", {
    get: e(function() {
        return "MobileLibrary"
    }, "get")
});
Object.defineProperty(p.staticEntities.runtimeType, "service", {
    get: e(function() {
        return "Service"
    }, "get")
});
Object.defineProperty(p.staticEntities.runtimeType, "reactive", {
    get: e(function() {
        return "Reactive"
    }, "get")
});
Object.defineProperty(p.staticEntities.runtimeType, "unknown", {
    get: e(function() {
        return "Unknown"
    }, "get")
});
Object.defineProperty(p.staticEntities.runtimeType, "reactiveLibrary", {
    get: e(function() {
        return "ReactiveLibrary"
    }, "get")
});
p.staticEntities.processStatus = {};
Object.defineProperty(p.staticEntities.processStatus, "active", {
    get: e(function() {
        return f.integerToLongInteger(1)
    }, "get")
});
Object.defineProperty(p.staticEntities.processStatus, "activeWithErrors", {
    get: e(function() {
        return f.integerToLongInteger(2)
    }, "get")
});
Object.defineProperty(p.staticEntities.processStatus, "terminated", {
    get: e(function() {
        return f.integerToLongInteger(4)
    }, "get")
});
Object.defineProperty(p.staticEntities.processStatus, "done", {
    get: e(function() {
        return f.integerToLongInteger(3)
    }, "get")
});
p.staticEntities.activityStatus = {};
Object.defineProperty(p.staticEntities.activityStatus, "running", {
    get: e(function() {
        return f.integerToLongInteger(2)
    }, "get")
});
Object.defineProperty(p.staticEntities.activityStatus, "terminated", {
    get: e(function() {
        return f.integerToLongInteger(4)
    }, "get")
});
Object.defineProperty(p.staticEntities.activityStatus, "waiting", {
    get: e(function() {
        return f.integerToLongInteger(1)
    }, "get")
});
Object.defineProperty(p.staticEntities.activityStatus, "open", {
    get: e(function() {
        return f.integerToLongInteger(6)
    }, "get")
});
Object.defineProperty(p.staticEntities.activityStatus, "error", {
    get: e(function() {
        return f.integerToLongInteger(5)
    }, "get")
});
Object.defineProperty(p.staticEntities.activityStatus, "completed", {
    get: e(function() {
        return f.integerToLongInteger(3)
    }, "get")
});
p.staticEntities.activityKind = {};
Object.defineProperty(p.staticEntities.activityKind, "end", {
    get: e(function() {
        return f.integerToLongInteger(5)
    }, "get")
});
Object.defineProperty(p.staticEntities.activityKind, "decision", {
    get: e(function() {
        return f.integerToLongInteger(4)
    }, "get")
});
Object.defineProperty(p.staticEntities.activityKind, "humanActivity", {
    get: e(function() {
        return f.integerToLongInteger(3)
    }, "get")
});
Object.defineProperty(p.staticEntities.activityKind, "automaticActivity", {
    get: e(function() {
        return f.integerToLongInteger(2)
    }, "get")
});
Object.defineProperty(p.staticEntities.activityKind, "start", {
    get: e(function() {
        return f.integerToLongInteger(1)
    }, "get")
});
var rn = p.staticEntities;
var Xe = class Xe extends t.GenericRecord {
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
e(Xe, "ENEntityEntityRecord");
var g = Xe;
g.init();
var tr = class tr extends t.GenericRecordList {
    static getItemType() {
        return g
    }
};
e(tr, "RLEntityList");
var _e = tr;
var ae = class ae extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Entity", "entityAttr", "Entity", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new g)
        }, !0, g)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ae(new ae.RecordClass({
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
e(ae, "RC_05f199cf8f734662fa6eaa91568947ff");
var mt = ae;
mt.init();
var er = class er extends t.GenericRecord {
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
e(er, "StartUserRegistrationFailureReasonRec");
var S = er;
S.init();
var se = class se extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StartUserRegistrationFailureReason", "startUserRegistrationFailureReasonAttr", "StartUserRegistrationFailureReason", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new S)
        }, !0, S)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new se(new se.RecordClass({
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
e(se, "RC_3c619bc2cefd7ed268d81977413e1480");
var ft = se;
ft.init();
var ar = class ar extends t.GenericRecordList {
    static getItemType() {
        return ft
    }
};
e(ar, "RL_089f77c93d3ce6afa3f16b6014987fb9");
var rr = ar;
var ie = class ie extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ie(new ie.RecordClass({
            idAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(ie, "ENRoleEntityRecord");
var x = ie;
x.init();
var sr = class sr extends t.GenericRecord {
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
e(sr, "ENActivityOutputEntityRecord");
var h = sr;
h.init();
var ir = class ir extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Name", "nameAttr", "Name", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(ir, "ENTenantEntityRecord");
var R = ir;
R.init();
var ne = class ne extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Tenant", "tenantAttr", "Tenant", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new R)
        }, !0, R)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ne(new ne.RecordClass({
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
e(ne, "RC_40d0f5c5ba630b105850cead15ae2223");
var yt = ne;
yt.init();
var or = class or extends t.GenericRecordList {
    static getItemType() {
        return yt
    }
};
e(or, "RL_1021a34c12afbc1ae6d31ca4929b6091");
var nr = or;
var cr = class cr extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Name", "nameAttr", "Name", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(cr, "ENActivityKindEntityRecord");
var I = cr;
I.init();
var oe = class oe extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ActivityKind", "activityKindAttr", "ActivityKind", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new I)
        }, !0, I)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new oe(new oe.RecordClass({
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
e(oe, "RC_99e7afb0bae555fcf70d1cd06f23ae14");
var Dt = oe;
Dt.init();
var pr = class pr extends t.GenericRecordList {
    static getItemType() {
        return Dt
    }
};
e(pr, "RL_12438f333dd1f8c1a50e2396d5890dd1");
var ur = pr;
var ce = class ce extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Role", "roleAttr", "Role", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new x)
        }, !0, x)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ce(new ce.RecordClass({
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
e(ce, "RC_13630884b629a3a59e929e1cdea42eb1");
var Tt = ce;
Tt.init();
var ue = class ue extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("UserLoginResult", "userLoginResultAttr", "UserLoginResult", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new _)
        }, !0, _)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ue(new ue.RecordClass({
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
e(ue, "RC_f9a589fe5b81c3bda7db0e574d5d11fb");
var St = ue;
St.init();
var dr = class dr extends t.GenericRecordList {
    static getItemType() {
        return St
    }
};
e(dr, "RL_137c1fde2390fc7845ae92a0265be990");
var lr = dr;
var fr = class fr extends t.GenericRecordList {
    static getItemType() {
        return h
    }
};
e(fr, "RLActivityOutputList");
var mr = fr;
var pe = class pe extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("UserInfo", "userInfoAttr", "UserInfo", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new tt)
        }, !0, tt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new pe(new pe.RecordClass({
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
e(pe, "RC_79f003baa030e546826ed42c3962f582");
var Ot = pe;
Ot.init();
var Dr = class Dr extends t.GenericRecordList {
    static getItemType() {
        return Ot
    }
};
e(Dr, "RL_1503951706c05a1675ae923dc239c757");
var yr = Dr;
var le = class le extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("FinishResetPasswordFailureReason", "finishResetPasswordFailureReasonAttr", "FinishResetPasswordFailureReason", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new et)
        }, !0, et)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new le(new le.RecordClass({
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
e(le, "RC_1ba3db8c7175cd095b4f1a36c3a1e53d");
var gt = le;
gt.init();
var de = class de extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("UpdateUserResult", "updateUserResultAttr", "UpdateUserResult", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new at)
        }, !0, at)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new de(new de.RecordClass({
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
e(de, "RC_bd573fb2cb521691dc6a8c4b02eeb054");
var xt = de;
xt.init();
var Sr = class Sr extends t.GenericRecordList {
    static getItemType() {
        return xt
    }
};
e(Sr, "RL_201410915258bdd92387bbd4bec2a7bb");
var Tr = Sr;
var Or = class Or extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ActivityInstanceId", "activityInstanceIdAttr", "ActivityInstanceId", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("RoleId", "roleIdAttr", "RoleId", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Or, "ENHumanActivityRoleEntityRecord");
var A = Or;
A.init();
var me = class me extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("HumanActivityRole", "humanActivityRoleAttr", "HumanActivityRole", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new A)
        }, !0, A)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new me(new me.RecordClass({
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
e(me, "RC_87c777c37ddf7c1355edbd72c4b71391");
var ht = me;
ht.init();
var xr = class xr extends t.GenericRecordList {
    static getItemType() {
        return ht
    }
};
e(xr, "RL_205f290c854bc0e1aa93388e5772d11f");
var gr = xr;
var hr = class hr extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Name", "nameAttr", "Name", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(hr, "ENActivityStatusEntityRecord");
var b = hr;
b.init();
var fe = class fe extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ActivityStatus", "activityStatusAttr", "ActivityStatus", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new b)
        }, !0, b)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new fe(new fe.RecordClass({
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
e(fe, "RC_36a7d48575a55c39ace8b7f6b0cd3ac4");
var Rt = fe;
Rt.init();
var Ir = class Ir extends t.GenericRecordList {
    static getItemType() {
        return Rt
    }
};
e(Ir, "RL_20bf822013f9723d57d50b23f1a33f26");
var Rr = Ir;
var br = class br extends t.GenericRecordList {
    static getItemType() {
        return A
    }
};
e(br, "RLHumanActivityRoleList");
var Ar = br;
var vr = class vr extends t.GenericRecord {
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
e(vr, "ENActivityOutputDefinitionEntityRecord");
var v = vr;
v.init();
var Pr = class Pr extends t.GenericRecordList {
    static getItemType() {
        return v
    }
};
e(Pr, "RLActivityOutputDefinitionList");
var wr = Pr;
var Cr = class Cr extends t.GenericRecord {
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
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Cr, "ENProcessInstanceEntityRecord");
var w = Cr;
w.init();
var ye = class ye extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ProcessInstance", "processInstanceAttr", "ProcessInstance", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new w)
        }, !0, w)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ye(new ye.RecordClass({
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
e(ye, "RC_c2c51a49c601586c1a143904ac6893f9");
var It = ye;
It.init();
var Er = class Er extends t.GenericRecordList {
    static getItemType() {
        return It
    }
};
e(Er, "RL_247a9c7809b4893cc7a21d0914d69e61");
var Gr = Er;
var De = class De extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ActivityOutput", "activityOutputAttr", "ActivityOutput", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new h)
        }, !0, h)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new De(new De.RecordClass({
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
e(De, "RC_24e87e1f1de297ca8a691099e40c22ed");
var At = De;
At.init();
var Lr = class Lr extends t.GenericRecord {
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
e(Lr, "ENActivityDefinitionRoleEntityRecord");
var P = Lr;
P.init();
var Ur = class Ur extends t.GenericRecordList {
    static getItemType() {
        return P
    }
};
e(Ur, "RLActivityDefinitionRoleList");
var Vr = Ur;
var Fr = class Fr extends t.GenericRecordList {
    static getItemType() {
        return At
    }
};
e(Fr, "RL_28fc2381cbc1135b5eb41ae627dcd287");
var Br = Fr;
var Nr = class Nr extends t.GenericRecord {
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
e(Nr, "ENEntityAttributeEntityRecord");
var C = Nr;
C.init();
var Te = class Te extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("EntityAttribute", "entityAttributeAttr", "EntityAttribute", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new C)
        }, !0, C)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Te(new Te.RecordClass({
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
e(Te, "RC_2efffbee03fccc31484e893e007e6c9a");
var bt = Te;
bt.init();
var qr = class qr extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Name", "nameAttr", "Name", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(qr, "ENProcessStatusEntityRecord");
var G = qr;
G.init();
var Kr = class Kr extends t.GenericRecordList {
    static getItemType() {
        return G
    }
};
e(Kr, "RLProcessStatusList");
var Hr = Kr;
var Wr = class Wr extends t.GenericRecordList {
    static getItemType() {
        return et
    }
};
e(Wr, "RL_31d7615454c0155a64f826d4e0cf4cb5");
var zr = Wr;
var kr = class kr extends t.GenericRecord {
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
e(kr, "ENRuntimeTypeEntityRecord");
var E = kr;
E.init();
var Se = class Se extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("RuntimeType", "runtimeTypeAttr", "RuntimeType", !0, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new E)
        }, !0, E)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Se(new Se.RecordClass({
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
e(Se, "RC_3251af6c799b185d408b7cad31be3454");
var vt = Se;
vt.init();
var Mr = class Mr extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Size", "sizeAttr", "Size", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Mr, "ENEmailEntityRecord");
var L = Mr;
L.init();
var jr = class jr extends t.GenericRecordList {
    static getItemType() {
        return L
    }
};
e(jr, "RLEmailList");
var Jr = jr;
var $r = class $r extends t.GenericRecord {
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
e($r, "ENProcessDefinitionEntityRecord");
var V = $r;
V.init();
var Qr = class Qr extends t.GenericRecordList {
    static getItemType() {
        return E
    }
};
e(Qr, "RLRuntimeTypeList");
var Zr = Qr;
var Xr = class Xr extends t.GenericRecordList {
    static getItemType() {
        return at
    }
};
e(Xr, "RL_36d4d7e2109bafadf398450826580bed");
var Yr = Xr;
var _r = class _r extends t.GenericRecord {
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
e(_r, "ENActivityDefinitionLinkEntityRecord");
var U = _r;
U.init();
var ea = class ea extends t.GenericRecordList {
    static getItemType() {
        return U
    }
};
e(ea, "RLActivityDefinitionLinkList");
var ta = ea;
var ra = class ra extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Success", "successAttr", "Success", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("StartUserRegistrationFailureReason", "startUserRegistrationFailureReasonAttr", "StartUserRegistrationFailureReason", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new S)
        }, !0, S), this.attr("VerificationCode", "verificationCodeAttr", "VerificationCode", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("UserId", "userIdAttr", "UserId", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(ra, "StartUserRegistrationResultRec");
var B = ra;
B.init();
var Oe = class Oe extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StartUserRegistrationResult", "startUserRegistrationResultAttr", "StartUserRegistrationResult", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new B)
        }, !0, B)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Oe(new Oe.RecordClass({
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
e(Oe, "RC_37cfc11aad68902b9d78f57915b7ae79");
var wt = Oe;
wt.init();
var ge = class ge extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ActivityOutputDefinition", "activityOutputDefinitionAttr", "ActivityOutputDefinition", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new v)
        }, !0, v)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ge(new ge.RecordClass({
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
e(ge, "RC_8535fa70cf0bfd6fa50f69a53d3b4ae1");
var Pt = ge;
Pt.init();
var sa = class sa extends t.GenericRecordList {
    static getItemType() {
        return Pt
    }
};
e(sa, "RL_382066feb08849f8e2adc5062ac75efa");
var aa = sa;
var na = class na extends t.GenericRecordList {
    static getItemType() {
        return X
    }
};
e(na, "RL_3b8feaa11cc930133dbb7eecb085b527");
var ia = na;
var oa = class oa extends t.GenericRecord {
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
e(oa, "ENApplicationEntityRecord");
var F = oa;
F.init();
var ca = class ca extends t.GenericRecord {
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
e(ca, "ENActivityDefinitionEntityRecord");
var N = ca;
N.init();
var xe = class xe extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ActivityDefinition", "activityDefinitionAttr", "ActivityDefinition", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new N)
        }, !0, N)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new xe(new xe.RecordClass({
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
e(xe, "RC_a04f94cfd410c813b8dee156f64b6537");
var Ct = xe;
Ct.init();
var pa = class pa extends t.GenericRecordList {
    static getItemType() {
        return Ct
    }
};
e(pa, "RL_3e3c312f4b244ea01713a0fa4a15518a");
var ua = pa;
var he = class he extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("FinishResetPasswordResult", "finishResetPasswordResultAttr", "FinishResetPasswordResult", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new st)
        }, !0, st)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new he(new he.RecordClass({
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
e(he, "RC_9817a5747e4b09aa3a6a7eb35ce9f66e");
var Gt = he;
Gt.init();
var da = class da extends t.GenericRecordList {
    static getItemType() {
        return Gt
    }
};
e(da, "RL_3f7b36d8bbcf12054b7e2f49497f214f");
var la = da;
var ma = class ma extends t.GenericRecord {
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
e(ma, "ENActivityDefinitionLanguageEntityRecord");
var q = ma;
q.init();
var ya = class ya extends t.GenericRecordList {
    static getItemType() {
        return q
    }
};
e(ya, "RLActivityDefinitionLanguageList");
var fa = ya;
var Da = class Da extends t.GenericRecord {
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
e(Da, "ENProcessInputEntityRecord");
var H = Da;
H.init();
var Sa = class Sa extends t.GenericRecordList {
    static getItemType() {
        return H
    }
};
e(Sa, "RLProcessInputList");
var Ta = Sa;
var ga = class ga extends t.GenericRecordList {
    static getItemType() {
        return gt
    }
};
e(ga, "RL_47595c6744be14d2bd677fd05324180f");
var Oa = ga;
var xa = class xa extends t.GenericRecord {
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
e(xa, "ENProcessDefinitionLanguageEntityRecord");
var K = xa;
K.init();
var Re = class Re extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ProcessDefinitionLanguage", "processDefinitionLanguageAttr", "ProcessDefinitionLanguage", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new K)
        }, !0, K)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Re(new Re.RecordClass({
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
e(Re, "RC_b1f889a35d23518bfa5ab890a96efb52");
var Et = Re;
Et.init();
var Ra = class Ra extends t.GenericRecordList {
    static getItemType() {
        return Et
    }
};
e(Ra, "RL_4bc987bb2bbc5a9c083569aa81631f7e");
var ha = Ra;
var Ie = class Ie extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PasswordComplexityPolicy", "passwordComplexityPolicyAttr", "PasswordComplexityPolicy", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new it)
        }, !0, it)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ie(new Ie.RecordClass({
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
e(Ie, "RC_4d77cfdd567b208680377834fc8205a2");
var Lt = Ie;
Lt.init();
var Aa = class Aa extends t.GenericRecordList {
    static getItemType() {
        return nt
    }
};
e(Aa, "RL_4e4931d865c8789e9e6ef1d8540ae228");
var Ia = Aa;
var va = class va extends t.GenericRecordList {
    static getItemType() {
        return N
    }
};
e(va, "RLActivityDefinitionList");
var ba = va;
var wa = class wa extends t.GenericRecord {
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
e(wa, "ENProcessOutputDefinitionEntityRecord");
var z = wa;
z.init();
var Ae = class Ae extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ProcessOutputDefinition", "processOutputDefinitionAttr", "ProcessOutputDefinition", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new z)
        }, !0, z)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ae(new Ae.RecordClass({
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
e(Ae, "RC_fd7c0ec5e9d4fd6a4a9a332d3e175dd4");
var Vt = Ae;
Vt.init();
var Ca = class Ca extends t.GenericRecordList {
    static getItemType() {
        return Vt
    }
};
e(Ca, "RL_52acedf8b6208b104cbd689064facc6a");
var Pa = Ca;
var be = class be extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ChangePasswordResult", "changePasswordResultAttr", "ChangePasswordResult", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ct)
        }, !0, ct)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new be(new be.RecordClass({
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
e(be, "RC_53d491417faf149f9fb8a0dda9c12d06");
var Ut = be;
Ut.init();
var Ea = class Ea extends t.GenericRecordList {
    static getItemType() {
        return tt
    }
};
e(Ea, "RL_54fab648630d41e343fad35c1143481d");
var Ga = Ea;
var Va = class Va extends t.GenericRecordList {
    static getItemType() {
        return I
    }
};
e(Va, "RLActivityKindList");
var La = Va;
var Ba = class Ba extends t.GenericRecordList {
    static getItemType() {
        return bt
    }
};
e(Ba, "RL_582b59adcb0660dd0915958cbaffea77");
var Ua = Ba;
var Na = class Na extends t.GenericRecordList {
    static getItemType() {
        return vt
    }
};
e(Na, "RL_599ab6c06883c99851f6aa769853530c");
var Fa = Na;
var ve = class ve extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("UpdateUserFailureReason", "updateUserFailureReasonAttr", "UpdateUserFailureReason", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new rt)
        }, !0, rt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ve(new ve.RecordClass({
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
e(ve, "RC_5d4c0a98b9773e489e7e27bfe5360793");
var Bt = ve;
Bt.init();
var qa = class qa extends t.GenericRecord {
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
e(qa, "ENProcessOutputEntityRecord");
var W = qa;
W.init();
var Ka = class Ka extends t.GenericRecordList {
    static getItemType() {
        return W
    }
};
e(Ka, "RLProcessOutputList");
var Ha = Ka;
var za = class za extends t.GenericRecord {
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
e(za, "FinishUserRegistrationFailureReasonRec");
var O = za;
O.init();
var ka = class ka extends t.GenericRecordList {
    static getItemType() {
        return F
    }
};
e(ka, "RLApplicationList");
var Wa = ka;
var Ja = class Ja extends t.GenericRecordList {
    static getItemType() {
        return st
    }
};
e(Ja, "RL_68be9dd68c0e161ac2c65c1092c999e6");
var Ma = Ja;
var $a = class $a extends t.GenericRecordList {
    static getItemType() {
        return V
    }
};
e($a, "RLProcessDefinitionList");
var ja = $a;
var Za = class Za extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Success", "successAttr", "Success", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("UserId", "userIdAttr", "UserId", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("FinishUserRegistrationFailureReason", "finishUserRegistrationFailureReasonAttr", "FinishUserRegistrationFailureReason", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new O)
        }, !0, O)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Za, "FinishUserRegistrationResultRec");
var k = Za;
k.init();
var Ya = class Ya extends t.GenericRecordList {
    static getItemType() {
        return b
    }
};
e(Ya, "RLActivityStatusList");
var Qa = Ya;
var _a = class _a extends t.GenericRecordList {
    static getItemType() {
        return w
    }
};
e(_a, "RLProcessInstanceList");
var Xa = _a;
var es = class es extends t.GenericRecordList {
    static getItemType() {
        return R
    }
};
e(es, "RLTenantList");
var ts = es;
var as = class as extends t.GenericRecordList {
    static getItemType() {
        return K
    }
};
e(as, "RLProcessDefinitionLanguageList");
var rs = as;
var we = class we extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Application", "applicationAttr", "Application", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new F)
        }, !0, F)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new we(new we.RecordClass({
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
e(we, "RC_a702e171772a9b89c17e2544ab6d1d29");
var Ft = we;
Ft.init();
var is = class is extends t.GenericRecordList {
    static getItemType() {
        return Ft
    }
};
e(is, "RL_77de0cb9f6a169c5c7917faf23aa1522");
var ss = is;
var ns = class ns extends t.GenericRecord {
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
e(ns, "ENActivityInstanceEntityRecord");
var M = ns;
M.init();
var cs = class cs extends t.GenericRecordList {
    static getItemType() {
        return M
    }
};
e(cs, "RLActivityInstanceList");
var os = cs;
var Pe = class Pe extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("FinishUserRegistrationFailureReason", "finishUserRegistrationFailureReasonAttr", "FinishUserRegistrationFailureReason", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new O)
        }, !0, O)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Pe(new Pe.RecordClass({
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
e(Pe, "RC_78fc3f34c3c68c7b3604ba4da3920682");
var Nt = Pe;
Nt.init();
var us = class us extends t.GenericRecord {
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
e(us, "ENProcessInputDefinitionEntityRecord");
var J = us;
J.init();
var Ce = class Ce extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ProcessInputDefinition", "processInputDefinitionAttr", "ProcessInputDefinition", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new J)
        }, !0, J)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ce(new Ce.RecordClass({
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
e(Ce, "RC_cbc07de8251245064bd8f80b6b35c7f6");
var qt = Ce;
qt.init();
var ls = class ls extends t.GenericRecordList {
    static getItemType() {
        return qt
    }
};
e(ls, "RL_7a20bba9a4dcbce87cc868fa1eaca840");
var ps = ls;
var Ge = class Ge extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ProcessDefinition", "processDefinitionAttr", "ProcessDefinition", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new V)
        }, !0, V)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ge(new Ge.RecordClass({
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
e(Ge, "RC_80c865ccf1b0df95391817b0ddc45e18");
var Ht = Ge;
Ht.init();
var Ee = class Ee extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("User", "userAttr", "User", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ut)
        }, !0, ut)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ee(new Ee.RecordClass({
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
e(Ee, "RC_ced013358a82a813f1d9a5108f17ce79");
var Kt = Ee;
Kt.init();
var ms = class ms extends t.GenericRecordList {
    static getItemType() {
        return Kt
    }
};
e(ms, "RL_8430333e95ceffc00def96d8abb01f75");
var ds = ms;
var Le = class Le extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ActivityDefinitionLanguage", "activityDefinitionLanguageAttr", "ActivityDefinitionLanguage", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new q)
        }, !0, q)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Le(new Le.RecordClass({
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
e(Le, "RC_eb90da5b34724818e84008409205001c");
var zt = Le;
zt.init();
var ys = class ys extends t.GenericRecordList {
    static getItemType() {
        return zt
    }
};
e(ys, "RL_84cf1463cd1d81cde9e2c5c4a48cc763");
var fs = ys;
var Ts = class Ts extends t.GenericRecordList {
    static getItemType() {
        return x
    }
};
e(Ts, "RLRoleList");
var Ds = Ts;
var Ss = class Ss extends t.GenericRecord {
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
e(Ss, "ENHumanActivityInstanceEntityRecord");
var j = Ss;
j.init();
var Ve = class Ve extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("HumanActivityInstance", "humanActivityInstanceAttr", "HumanActivityInstance", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new j)
        }, !0, j)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ve(new Ve.RecordClass({
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
e(Ve, "RC_880f0b08a77c1575f19f408e1fddc8c6");
var Wt = Ve;
Wt.init();
var Ue = class Ue extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("FinishUserRegistrationResult", "finishUserRegistrationResultAttr", "FinishUserRegistrationResult", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new k)
        }, !0, k)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ue(new Ue.RecordClass({
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
e(Ue, "RC_8a5dc374bf936f41e6af63789db6143f");
var kt = Ue;
kt.init();
var gs = class gs extends t.GenericRecordList {
    static getItemType() {
        return rt
    }
};
e(gs, "RL_8b34cec2d3a4e3170e329009c7e2bef8");
var Os = gs;
var Be = class Be extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StartResetPasswordResult", "startResetPasswordResultAttr", "StartResetPasswordResult", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new nt)
        }, !0, nt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Be(new Be.RecordClass({
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
e(Be, "RC_8f8c9b77bcc0996564febb7d38ea930a");
var Mt = Be;
Mt.init();
var hs = class hs extends t.GenericRecordList {
    static getItemType() {
        return Mt
    }
};
e(hs, "RL_8c6f3d2b086b4a75242a7e7c084f1692");
var xs = hs;
var Is = class Is extends t.GenericRecordList {
    static getItemType() {
        return Lt
    }
};
e(Is, "RL_919d8bc896529858c8cc8f0f3e5cb019");
var Rs = Is;
var Fe = class Fe extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ActivityDefinitionLink", "activityDefinitionLinkAttr", "ActivityDefinitionLink", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new U)
        }, !0, U)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Fe(new Fe.RecordClass({
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
e(Fe, "RC_c97a9c0cb896c874168b02efa3e48866");
var Jt = Fe;
Jt.init();
var bs = class bs extends t.GenericRecordList {
    static getItemType() {
        return Jt
    }
};
e(bs, "RL_9587436fe4e8f406175a43d163260035");
var As = bs;
var ws = class ws extends t.GenericRecordList {
    static getItemType() {
        return j
    }
};
e(ws, "RLHumanActivityInstanceList");
var vs = ws;
var Ne = class Ne extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ActivityDefinitionRole", "activityDefinitionRoleAttr", "ActivityDefinitionRole", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new P)
        }, !0, P)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ne(new Ne.RecordClass({
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
e(Ne, "RC_e6ef33ef6256e74a2c6e9f5dbfecc6ae");
var jt = Ne;
jt.init();
var Cs = class Cs extends t.GenericRecordList {
    static getItemType() {
        return jt
    }
};
e(Cs, "RL_998b7e962bf7fec9cf03c9baf25fb2da");
var Ps = Cs;
var Es = class Es extends t.GenericRecordList {
    static getItemType() {
        return pt
    }
};
e(Es, "RL_9ab59cf1963fbe94eddb7ebb18232c35");
var Gs = Es;
var Vs = class Vs extends t.GenericRecordList {
    static getItemType() {
        return Bt
    }
};
e(Vs, "RL_9bba1220f91628d35d17687902f382ad");
var Ls = Vs;
var Bs = class Bs extends t.GenericRecordList {
    static getItemType() {
        return Nt
    }
};
e(Bs, "RL_9cf7ac5f0e0e6764a1fd30a6b5272901");
var Us = Bs;
var Ns = class Ns extends t.GenericRecordList {
    static getItemType() {
        return k
    }
};
e(Ns, "RL_9eba70ecf7dd38d3ed1fcfec91b187a8");
var Fs = Ns;
var qe = class qe extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("UserUpdateInfo", "userUpdateInfoAttr", "UserUpdateInfo", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new pt)
        }, !0, pt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new qe(new qe.RecordClass({
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
e(qe, "RC_a582d84634a30a3a3b1e61cbfd3db9de");
var $t = qe;
$t.init();
var Hs = class Hs extends t.GenericRecordList {
    static getItemType() {
        return $t
    }
};
e(Hs, "RL_a5b6b975942e234f0350205b728240be");
var qs = Hs;
var zs = class zs extends t.GenericRecordList {
    static getItemType() {
        return ot
    }
};
e(zs, "RL_a60626c1780bfe250dcef75d5dfa5fd1");
var Ks = zs;
var He = class He extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ProcessStatus", "processStatusAttr", "ProcessStatus", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new G)
        }, !0, G)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new He(new He.RecordClass({
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
e(He, "RC_a7be5795c4af08fa8098110e55d36aff");
var Zt = He;
Zt.init();
var ks = class ks extends t.GenericRecordList {
    static getItemType() {
        return kt
    }
};
e(ks, "RL_a7ed37c4ad7efcace07e2b019a1eb3fb");
var Ws = ks;
var Js = class Js extends t.GenericRecordList {
    static getItemType() {
        return S
    }
};
e(Js, "RL_aad032b1e33509d2ba60156a32583c0e");
var Ms = Js;
var $s = class $s extends t.GenericRecordList {
    static getItemType() {
        return Wt
    }
};
e($s, "RL_b1951e6718fee0cfdfe159a4bfc6a006");
var js = $s;
var Ke = class Ke extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PasswordValidationResult", "passwordValidationResultAttr", "PasswordValidationResult", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new lt)
        }, !0, lt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ke(new Ke.RecordClass({
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
e(Ke, "RC_b27f0b968b0f7cea61506ac9d6ee7c27");
var Qt = Ke;
Qt.init();
var ze = class ze extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ChangePasswordFailureReason", "changePasswordFailureReasonAttr", "ChangePasswordFailureReason", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ot)
        }, !0, ot)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ze(new ze.RecordClass({
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
e(ze, "RC_e5c662d406f83f7f791bd7e5c8b0c543");
var Yt = ze;
Yt.init();
var Qs = class Qs extends t.GenericRecordList {
    static getItemType() {
        return Yt
    }
};
e(Qs, "RL_b6f4bbf36a4770c53788c60d2b555d3c");
var Zs = Qs;
var Xs = class Xs extends t.GenericRecordList {
    static getItemType() {
        return C
    }
};
e(Xs, "RLEntityAttributeList");
var Ys = Xs;
var We = class We extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ProcessOutput", "processOutputAttr", "ProcessOutput", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new W)
        }, !0, W)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new We(new We.RecordClass({
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
e(We, "RC_d5e6f13d187b5006f9f88b20f576700b");
var Xt = We;
Xt.init();
var ti = class ti extends t.GenericRecordList {
    static getItemType() {
        return Xt
    }
};
e(ti, "RL_bc43d11ed6e576c35db6fd694bd47a1e");
var _s = ti;
var ri = class ri extends t.GenericRecordList {
    static getItemType() {
        return _
    }
};
e(ri, "RL_bfe5e088b2f6df6ae697d4a263069bca");
var ei = ri;
var ke = class ke extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Email", "emailAttr", "Email", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new L)
        }, !0, L)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ke(new ke.RecordClass({
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
e(ke, "RC_c25115a84bc21f80350d8ea6536353ed");
var _t = ke;
_t.init();
var si = class si extends t.GenericRecordList {
    static getItemType() {
        return Qt
    }
};
e(si, "RL_ca4befaa7d5de5d9bbcd4bf59c44b15c");
var ai = si;
var ni = class ni extends t.GenericRecordList {
    static getItemType() {
        return wt
    }
};
e(ni, "RL_cc1e5a7165115293b327c74187de23a0");
var ii = ni;
var ci = class ci extends t.GenericRecordList {
    static getItemType() {
        return z
    }
};
e(ci, "RLProcessOutputDefinitionList");
var oi = ci;
var Me = class Me extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ProcessInput", "processInputAttr", "ProcessInput", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new H)
        }, !0, H)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Me(new Me.RecordClass({
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
e(Me, "RC_d43fed74d1678e954ae3786a22cd1029");
var te = Me;
te.init();
var pi = class pi extends t.GenericRecordList {
    static getItemType() {
        return te
    }
};
e(pi, "RL_d3784dc8f20ed95f2aa0989c41c24312");
var ui = pi;
var di = class di extends t.GenericRecordList {
    static getItemType() {
        return Ht
    }
};
e(di, "RL_d68e5346549cf39dd97c26423ec75146");
var li = di;
var fi = class fi extends t.GenericRecordList {
    static getItemType() {
        return Tt
    }
};
e(fi, "RL_db06c2b916049d1c72db56f953d2667f");
var mi = fi;
var Di = class Di extends t.GenericRecordList {
    static getItemType() {
        return B
    }
};
e(Di, "RL_e03caeb3051b63201fbde73f1c69f75b");
var yi = Di;
var Je = class Je extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ActivityInstance", "activityInstanceAttr", "ActivityInstance", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new M)
        }, !0, M)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Je(new Je.RecordClass({
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
e(Je, "RC_faf38c2d2aeee71f293ad23cd32fa7e2");
var ee = Je;
ee.init();
var Si = class Si extends t.GenericRecordList {
    static getItemType() {
        return ee
    }
};
e(Si, "RL_e4683611f40e200d3ecdb101fca93d6d");
var Ti = Si;
var gi = class gi extends t.GenericRecordList {
    static getItemType() {
        return lt
    }
};
e(gi, "RL_e57523dcca7e6d3766c4721a0ef109ee");
var Oi = gi;
var hi = class hi extends t.GenericRecordList {
    static getItemType() {
        return J
    }
};
e(hi, "RLProcessInputDefinitionList");
var xi = hi;
var Ii = class Ii extends t.GenericRecordList {
    static getItemType() {
        return mt
    }
};
e(Ii, "RL_eba0e3b376adecb3137463bf4c64acb3");
var Ri = Ii;
var bi = class bi extends t.GenericRecordList {
    static getItemType() {
        return Ut
    }
};
e(bi, "RL_f07d4ee6d8af2ad822d0947b26fdf6f3");
var Ai = bi;
var wi = class wi extends t.GenericRecordList {
    static getItemType() {
        return O
    }
};
e(wi, "RL_f1cba7c926c1338911619f0bbdd18e16");
var vi = wi;
var Ci = class Ci extends t.GenericRecordList {
    static getItemType() {
        return ut
    }
};
e(Ci, "RLUserList");
var Pi = Ci;
var Ei = class Ei extends t.GenericRecordList {
    static getItemType() {
        return it
    }
};
e(Ei, "RL_f50879d0da007880fcd304f3378f0a9e");
var Gi = Ei;
var je = class je extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("UserLoginFailureReason", "userLoginFailureReasonAttr", "UserLoginFailureReason", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new X)
        }, !0, X)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new je(new je.RecordClass({
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
e(je, "RC_f61c868ef053db94121ce89ee15a14fe");
var re = je;
re.init();
var Vi = class Vi extends t.GenericRecordList {
    static getItemType() {
        return re
    }
};
e(Vi, "RL_fbc9fc52e3cef45822e06efc69df5a4a");
var Li = Vi;
var Bi = class Bi extends t.GenericRecordList {
    static getItemType() {
        return ct
    }
};
e(Bi, "RL_fc9a0541e530960ed38d7662d5b2141b");
var Ui = Bi;
var Ni = class Ni extends t.GenericRecordList {
    static getItemType() {
        return _t
    }
};
e(Ni, "RL_fd604259751c80eed887a8f5a0f5dc23");
var Fi = Ni;
var Hi = class Hi extends t.GenericRecordList {
    static getItemType() {
        return Zt
    }
};
e(Hi, "RL_fdf787b37ceb8d49d68d7ae5649f3b09");
var qi = Hi;
var c = tn(en());
var l = r,
    zi = class zi extends l.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("PasswordValidationResult", "passwordValidationResultVar", "PasswordValidationResult", !0, !1, l.DataTypes.DataTypes.Record, function() {
                return l.DataTypes.ImmutableBase.getData(new l.SystemStructures.PasswordValidationResultRec)
            }, !1, l.SystemStructures.PasswordValidationResultRec), this.attr("IsValidPassword", "isValidPasswordVar", "IsValidPassword", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("PasswordComplexityPolicy", "passwordComplexityPolicyVar", "PasswordComplexityPolicy", !0, !1, l.DataTypes.DataTypes.Record, function() {
                return l.DataTypes.ImmutableBase.getData(new l.SystemStructures.PasswordComplexityPolicyRec)
            }, !1, l.SystemStructures.PasswordComplexityPolicyRec), this.attr("IsPasswordEmpty", "isPasswordEmptyVar", "IsPasswordEmpty", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("Password", "passwordIn", "Password", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_passwordInDataFetchStatus", "_passwordInDataFetchStatus", "_passwordInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Length", "lengthIn", "Length", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("_lengthInDataFetchStatus", "_lengthInDataFetchStatus", "_lengthInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasAtLeastUppercaseAndLowercase", "hasAtLeastUppercaseAndLowercaseIn", "HasAtLeastUppercaseAndLowercase", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasAtLeastUppercaseAndLowercaseInDataFetchStatus", "_hasAtLeastUppercaseAndLowercaseInDataFetchStatus", "_hasAtLeastUppercaseAndLowercaseInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasAtLeastOneNumber", "hasAtLeastOneNumberIn", "HasAtLeastOneNumber", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasAtLeastOneNumberInDataFetchStatus", "_hasAtLeastOneNumberInDataFetchStatus", "_hasAtLeastOneNumberInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasAtLeastOneSpecialCharacter", "hasAtLeastOneSpecialCharacterIn", "HasAtLeastOneSpecialCharacter", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasAtLeastOneSpecialCharacterInDataFetchStatus", "_hasAtLeastOneSpecialCharacterInDataFetchStatus", "_hasAtLeastOneSpecialCharacterInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(l.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(zi, "VariablesRecord");
var $e = zi;
$e.init();
var Wi = class Wi extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(Wi, "WidgetsRecord");
var Ki = Wi,
    ki = class ki extends l.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return $e
        }
        static getWidgetsRecordConstructor() {
            return Ki
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(a) {
            "Password" in a && (this.variables.passwordIn = a.Password, "_passwordInDataFetchStatus" in a && (this.variables._passwordInDataFetchStatus = a._passwordInDataFetchStatus)), "Length" in a && (this.variables.lengthIn = a.Length, "_lengthInDataFetchStatus" in a && (this.variables._lengthInDataFetchStatus = a._lengthInDataFetchStatus)), "HasAtLeastUppercaseAndLowercase" in a && (this.variables.hasAtLeastUppercaseAndLowercaseIn = a.HasAtLeastUppercaseAndLowercase, "_hasAtLeastUppercaseAndLowercaseInDataFetchStatus" in a && (this.variables._hasAtLeastUppercaseAndLowercaseInDataFetchStatus = a._hasAtLeastUppercaseAndLowercaseInDataFetchStatus)), "HasAtLeastOneNumber" in a && (this.variables.hasAtLeastOneNumberIn = a.HasAtLeastOneNumber, "_hasAtLeastOneNumberInDataFetchStatus" in a && (this.variables._hasAtLeastOneNumberInDataFetchStatus = a._hasAtLeastOneNumberInDataFetchStatus)), "HasAtLeastOneSpecialCharacter" in a && (this.variables.hasAtLeastOneSpecialCharacterIn = a.HasAtLeastOneSpecialCharacter, "_hasAtLeastOneSpecialCharacterInDataFetchStatus" in a && (this.variables._hasAtLeastOneSpecialCharacterInDataFetchStatus = a._hasAtLeastOneSpecialCharacterInDataFetchStatus))
        }
    };
e(ki, "Model");
var Ze = ki;
Ze._hasValidationWidgetsValue = void 0;
var Xi = new l.Model.ModelFactory(Ze);

function Mi(d, a, Qe, s) {
    function o(m) {
        return m.toUpperCase() != m
    }
    e(o, "hasLowerCase");

    function i(m) {
        return /[A-Z]/.test(m)
    }
    e(i, "containsUppercase");

    function Z(m) {
        return /\d/.test(m)
    }
    e(Z, "hasNumber");

    function u(m) {
        return m.length >= d.Length
    }
    e(u, "hasGoodLength");

    function D(m) {
        var $ = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return $.test(m)
    }
    e(D, "hasSpecialChar"), d.HasLowerCase = d.RequiresLowerCaseAndUpperCase ? o(d.String) : !0, d.HasUpperCase = d.RequiresLowerCaseAndUpperCase ? i(d.String) : !0, d.HasNumber = d.RequiresNumber ? Z(d.String) : !0, d.hasGoodLength = d.RequiresNumber ? u(d.String) : !0, d.hasSpecialChar = d.RequiresSpecialChar ? D(d.String) : !0
}
e(Mi, "default");
var n = r; {
    let a = class a extends n.Controller.BaseViewController {
        constructor(s, o, i) {
            super(s, o, i);
            var Z = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(s) {
            this._dataFetchActionNames = s
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(s) {
                var o = this.model,
                    i = this.controller,
                    Z = this.idService;
                return n.Logger.startActiveSpan("OnInitialize", function(u) {
                    u && (u.setAttribute("code.function", "OnInitialize"), u.setAttribute("outsystems.function.key", "1debce88-cb2e-4f11-9869-0fd78206eba4"), u.setAttribute("outsystems.function.owner.name", "CustomComponentsOfficial"), u.setAttribute("outsystems.function.owner.key", "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnInitialize"), s = i.callContext(s), o.variables.passwordComplexityPolicyVar.minimumLengthAttr = o.variables.lengthIn, o.variables.passwordComplexityPolicyVar.upperCaseLetterRequiredAttr = o.variables.hasAtLeastUppercaseAndLowercaseIn, o.variables.passwordComplexityPolicyVar.lowerCaseLetterRequiredAttr = o.variables.hasAtLeastUppercaseAndLowercaseIn, o.variables.passwordComplexityPolicyVar.numberRequiredAttr = o.variables.hasAtLeastOneNumberIn, o.variables.passwordComplexityPolicyVar.specialCharacterRequiredAttr = o.variables.hasAtLeastOneSpecialCharacterIn
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(s) {
            this.__onInitialize$Action = s
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(s) {
                var o = this.model,
                    i = this.controller,
                    Z = this.idService;
                return n.Logger.startActiveSpan("OnParametersChanged", function(u) {
                    return u && (u.setAttribute("code.function", "OnParametersChanged"), u.setAttribute("outsystems.function.key", "d04d1920-a487-41a3-b3e6-a8d1aa85abff"), u.setAttribute("outsystems.function.owner.name", "CustomComponentsOfficial"), u.setAttribute("outsystems.function.owner.key", "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        i.ensureControllerAlive("OnParametersChanged"), s = i.callContext(s);
                        var D = new n.DataTypes.VariableHolder;
                        return n.Flow.executeAsyncFlow(function() {
                            if (o.variables.isPasswordEmptyVar = n.BuiltinFunctions.length(o.variables.passwordIn) === 0, D.value = n.Logger.startActiveSpan("checkValid", function(m) {
                                    m && (m.setAttribute("code.function", "checkValid"), m.setAttribute("outsystems.function.key", "2db79931-6cd1-41a6-a1b1-6c0293e23188"), m.setAttribute("outsystems.function.owner.name", "CustomComponentsOfficial"), m.setAttribute("outsystems.function.owner.key", "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69"), m.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return i.safeExecuteJSNode(Mi, "checkValid", "OnParametersChanged", {
                                            RequiresSpecialChar: n.DataConversion.JSNodeParamConverter.to(o.variables.hasAtLeastOneSpecialCharacterIn, n.DataTypes.DataTypes.Boolean),
                                            RequiresNumber: n.DataConversion.JSNodeParamConverter.to(o.variables.hasAtLeastOneNumberIn, n.DataTypes.DataTypes.Boolean),
                                            Length: n.DataConversion.JSNodeParamConverter.to(o.variables.lengthIn, n.DataTypes.DataTypes.Integer),
                                            RequiresLowerCaseAndUpperCase: n.DataConversion.JSNodeParamConverter.to(o.variables.hasAtLeastUppercaseAndLowercaseIn, n.DataTypes.DataTypes.Boolean),
                                            String: n.DataConversion.JSNodeParamConverter.to(o.variables.passwordIn, n.DataTypes.DataTypes.Text),
                                            HasLowerCase: n.DataConversion.JSNodeParamConverter.to(!1, n.DataTypes.DataTypes.Boolean),
                                            HasUpperCase: n.DataConversion.JSNodeParamConverter.to(!1, n.DataTypes.DataTypes.Boolean),
                                            HasNumber: n.DataConversion.JSNodeParamConverter.to(!1, n.DataTypes.DataTypes.Boolean),
                                            hasGoodLength: n.DataConversion.JSNodeParamConverter.to(!1, n.DataTypes.DataTypes.Boolean),
                                            hasSpecialChar: n.DataConversion.JSNodeParamConverter.to(!1, n.DataTypes.DataTypes.Boolean)
                                        }, function($) {
                                            var Q = new(i.constructor.getVariableGroupType("CustomComponentsOfficial.PasswordPolicy.PasswordPolicy.OnParametersChanged$checkValidJSResult"));
                                            return Q.hasLowerCaseOut = n.DataConversion.JSNodeParamConverter.from($.HasLowerCase, n.DataTypes.DataTypes.Boolean), Q.hasUpperCaseOut = n.DataConversion.JSNodeParamConverter.from($.HasUpperCase, n.DataTypes.DataTypes.Boolean), Q.hasNumberOut = n.DataConversion.JSNodeParamConverter.from($.HasNumber, n.DataTypes.DataTypes.Boolean), Q.hasGoodLengthOut = n.DataConversion.JSNodeParamConverter.from($.hasGoodLength, n.DataTypes.DataTypes.Boolean), Q.hasSpecialCharOut = n.DataConversion.JSNodeParamConverter.from($.hasSpecialChar, n.DataTypes.DataTypes.Boolean), Q
                                        }, {}, {})
                                    } finally {
                                        m && m.end()
                                    }
                                }, 1), o.variables.passwordValidationResultVar.isValidAttr = D.value.hasLowerCaseOut && D.value.hasUpperCaseOut && D.value.hasNumberOut && D.value.hasGoodLengthOut && D.value.hasSpecialCharOut, o.variables.passwordValidationResultVar.missingLowerCaseLetterAttr = !D.value.hasLowerCaseOut, o.variables.passwordValidationResultVar.missingMinimumLengthAttr = !D.value.hasGoodLengthOut, o.variables.passwordValidationResultVar.missingUpperCaseLetterAttr = !D.value.hasUpperCaseOut, o.variables.passwordValidationResultVar.missingNumberAttr = !D.value.hasNumberOut, o.variables.passwordValidationResultVar.missingSpecialCharacterAttr = !D.value.hasSpecialCharOut, o.variables.passwordValidationResultVar.isValidAttr) {
                                if (o.variables.isValidPasswordVar) return n.Flow.returnAsync();
                                o.variables.isValidPasswordVar = !0
                            } else if (o.variables.isValidPasswordVar) o.variables.isValidPasswordVar = !1;
                            else return n.Flow.returnAsync();
                            return i.compliant$Action(o.variables.passwordValidationResultVar.isValidAttr, s)
                        })
                    }, function() {
                        u && u.end()
                    })
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(s) {
            this.__onParametersChanged$Action = s
        }
        onInitialize$Action(s) {
            var o = this.controller;
            return n.Logger.startActiveSpan("OnInitialize__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnInitialize"), i.setAttribute("outsystems.function.key", "1debce88-cb2e-4f11-9869-0fd78206eba4"), i.setAttribute("outsystems.function.owner.name", "CustomComponentsOfficial"), i.setAttribute("outsystems.function.owner.key", "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._onInitialize$Action, s)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        onParametersChanged$Action(s) {
            var o = this.controller;
            return n.Logger.startActiveSpan("OnParametersChanged__proxy", function(i) {
                return i && (i.setAttribute("code.function", "OnParametersChanged"), i.setAttribute("outsystems.function.key", "d04d1920-a487-41a3-b3e6-a8d1aa85abff"), i.setAttribute("outsystems.function.owner.name", "CustomComponentsOfficial"), i.setAttribute("outsystems.function.owner.key", "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._onParametersChanged$Action, s)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        get compliant$Action() {
            return this.hasOwnProperty("_compliant$Action") || (this._compliant$Action = function() {
                return Promise.resolve()
            }), this._compliant$Action
        }
        set compliant$Action(s) {
            this._compliant$Action = s
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(s) {
                var o = this.controller,
                    i = this.model,
                    Z = this.idService;
                return o.onInitialize$Action(s)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(s) {
            this._onInitializeEventHandler = s
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
        }
        set onReadyEventHandler(s) {
            this._onReadyEventHandler = s
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(s) {
            this._onRenderEventHandler = s
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(s) {
            this._onDestroyEventHandler = s
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(s) {
                var o = this.controller,
                    i = this.model,
                    Z = this.idService;
                return o.onParametersChanged$Action(s)
            }), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(s) {
            this._onParametersChangedEventHandler = s
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(s) {
                return controller.handleError(s)
            }), this._handleError
        }
        set handleError(s) {
            this._handleError = s
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return Qi.defaultTimeout
        }
    };
    e(a, "ControllerInner");
    let d = a;
    Ji = d, Ji.registerVariableGroupType("CustomComponentsOfficial.PasswordPolicy.PasswordPolicy.OnParametersChanged$checkValidJSResult", [{
        name: "HasLowerCase",
        attrName: "hasLowerCaseOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Boolean,
        defaultValue: e(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "HasUpperCase",
        attrName: "hasUpperCaseOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Boolean,
        defaultValue: e(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "HasNumber",
        attrName: "hasNumberOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Boolean,
        defaultValue: e(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "hasGoodLength",
        attrName: "hasGoodLengthOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Boolean,
        defaultValue: e(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "hasSpecialChar",
        attrName: "hasSpecialCharOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Boolean,
        defaultValue: e(function() {
            return !1
        }, "defaultValue")
    }])
}
var Ji, _i = new n.Controller.ControllerFactory(Ji, Yi);
var IS = Ye.PlaceholderContent,
    AS = Ye.IteratorPlaceholderContent,
    Y = class Y extends $i.BaseWebBlock {
        static get displayName() {
            return "PasswordPolicy.PasswordPolicy"
        }
        static getAttributes() {
            return {
                codeFunction: "PasswordPolicy",
                functionKey: "ea1033a7-cc02-4c18-a11c-706fa5848aae",
                functionOwnerName: "CustomComponentsOfficial",
                functionOwnerKey: "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/CustomComponentsOfficial.PasswordPolicy.PasswordPolicy.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return Xi
        }
        get controllerFactory() {
            return _i
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                Qe = this.controller,
                s = this.idService,
                o = Qe.validationService,
                i = this.widgetsRecordProvider,
                Z = Qe.callContext(),
                u = Y.ifWidget,
                D = Y.textWidget,
                m = Y.asPrimitiveValue,
                $ = Y.getTranslation,
                Q = this;
            return c.createElement("div", this.getRootNodeProperties(), c.createElement(y, {
                align: 0,
                animate: !1,
                style: "font-size-xs",
                visible: !0,
                _idProps: {
                    service: s,
                    uuid: "0"
                },
                _widgetRecordProvider: i
            }, c.createElement(y, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 6px;"
                },
                visible: !0,
                _idProps: {
                    service: s,
                    uuid: "1"
                },
                _widgetRecordProvider: i
            }, u(a.variables.passwordComplexityPolicyVar.numberRequiredAttr, !1, this, function() {
                return [c.createElement(y, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; display: flex; gap: 8px; text-align: left;"
                    },
                    visible: !0,
                    _idProps: {
                        service: s,
                        uuid: "2"
                    },
                    _widgetRecordProvider: i
                }, c.createElement(y, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline",
                        marginLeft: "0"
                    },
                    visible: !0,
                    _idProps: {
                        service: s,
                        uuid: "3"
                    },
                    _widgetRecordProvider: i
                }, u(a.variables.isPasswordEmptyVar, !1, this, function() {
                    return [c.createElement(T, {
                        extendedProperties: {
                            style: "color: #6A7178; font-size: 15px; height: 15px; padding: 0px; width: 15px;"
                        },
                        icon: "circle-thin",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: s,
                            uuid: "4"
                        },
                        _widgetRecordProvider: i
                    })]
                }, function() {
                    return [u(a.variables.passwordValidationResultVar.missingMinimumLengthAttr, !1, this, function() {
                        return [c.createElement(T, {
                            extendedProperties: {
                                style: "color: #dc2020; font-size: 15px; height: 15px; width: 15px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            icon: "times-circle",
                            iconSize: 0,
                            style: "icon",
                            visible: !0,
                            _idProps: {
                                service: s,
                                uuid: "5"
                            },
                            _widgetRecordProvider: i
                        })]
                    }, function() {
                        return [c.createElement(T, {
                            extendedProperties: {
                                style: "color: #29823b; font-size: 15px; height: 15px; width: 15px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            icon: "check-circle",
                            iconSize: 0,
                            style: "icon",
                            visible: !0,
                            _idProps: {
                                service: s,
                                uuid: "6"
                            },
                            _widgetRecordProvider: i
                        })]
                    })]
                })), c.createElement(y, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline",
                        marginLeft: "0"
                    },
                    style: a.getCachedValue(s.getId("W2WQgo1KZ0W9aSiNkHstVg.Style"), function() {
                        return a.variables.isPasswordEmptyVar ? "" : a.variables.passwordValidationResultVar.missingMinimumLengthAttr ? "password-policy__rule--error" : "password-policy__rule--success"
                    }, function() {
                        return a.variables.isPasswordEmptyVar
                    }, function() {
                        return a.variables.passwordValidationResultVar.missingMinimumLengthAttr
                    }),
                    visible: !0,
                    _idProps: {
                        service: s,
                        uuid: "7"
                    },
                    _widgetRecordProvider: i
                }, c.createElement(dt, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 15px;"
                    },
                    text: ["At least "],
                    _idProps: {
                        service: s,
                        uuid: "8"
                    },
                    _widgetRecordProvider: i
                }), c.createElement(Zi, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 15px;"
                    },
                    gridProperties: {
                        marginLeft: "0"
                    },
                    value: a.variables.passwordComplexityPolicyVar.minimumLengthAttr.toString(),
                    _idProps: {
                        service: s,
                        uuid: "9"
                    },
                    _widgetRecordProvider: i
                }), c.createElement(dt, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 15px;"
                    },
                    text: ["\xA0characters"],
                    _idProps: {
                        service: s,
                        uuid: "10"
                    },
                    _widgetRecordProvider: i
                })))]
            }, function() {
                return []
            }), u(a.variables.passwordComplexityPolicyVar.upperCaseLetterRequiredAttr && a.variables.passwordComplexityPolicyVar.lowerCaseLetterRequiredAttr, !1, this, function() {
                return [c.createElement(y, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; display: flex; gap: 8px; text-align: left;"
                    },
                    visible: !0,
                    _idProps: {
                        service: s,
                        uuid: "11"
                    },
                    _widgetRecordProvider: i
                }, c.createElement(y, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline",
                        marginLeft: "0"
                    },
                    visible: !0,
                    _idProps: {
                        service: s,
                        uuid: "12"
                    },
                    _widgetRecordProvider: i
                }, u(a.variables.isPasswordEmptyVar, !1, this, function() {
                    return [c.createElement(T, {
                        extendedProperties: {
                            style: "color: #6A7178; font-size: 15px; height: 15px; padding: 0px; width: 15px;"
                        },
                        icon: "circle-thin",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: s,
                            uuid: "13"
                        },
                        _widgetRecordProvider: i
                    })]
                }, function() {
                    return [u(a.variables.passwordValidationResultVar.missingUpperCaseLetterAttr || a.variables.passwordValidationResultVar.missingLowerCaseLetterAttr, !1, this, function() {
                        return [c.createElement(T, {
                            extendedProperties: {
                                style: "color: #dc2020; font-size: 15px; width: 15px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            icon: "times-circle",
                            iconSize: 0,
                            style: "icon",
                            visible: !0,
                            _idProps: {
                                service: s,
                                uuid: "14"
                            },
                            _widgetRecordProvider: i
                        })]
                    }, function() {
                        return [c.createElement(T, {
                            extendedProperties: {
                                style: "color: #29823b; font-size: 15px; height: 15px; width: 15px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            icon: "check-circle",
                            iconSize: 0,
                            style: "icon",
                            visible: !0,
                            _idProps: {
                                service: s,
                                uuid: "15"
                            },
                            _widgetRecordProvider: i
                        })]
                    })]
                })), c.createElement(y, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: a.getCachedValue(s.getId("wS63C2AnqkiB2hn+etNgfQ.Style"), function() {
                        return a.variables.isPasswordEmptyVar ? "" : a.variables.passwordValidationResultVar.missingLowerCaseLetterAttr || a.variables.passwordValidationResultVar.missingUpperCaseLetterAttr ? "password-policy__rule--error" : "password-policy__rule--success"
                    }, function() {
                        return a.variables.isPasswordEmptyVar
                    }, function() {
                        return a.variables.passwordValidationResultVar.missingLowerCaseLetterAttr
                    }, function() {
                        return a.variables.passwordValidationResultVar.missingUpperCaseLetterAttr
                    }),
                    visible: !0,
                    _idProps: {
                        service: s,
                        uuid: "16"
                    },
                    _widgetRecordProvider: i
                }, c.createElement(dt, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 15px;"
                    },
                    text: ["At least one uppercase letter and one lowercase letter"],
                    _idProps: {
                        service: s,
                        uuid: "17"
                    },
                    _widgetRecordProvider: i
                })))]
            }, function() {
                return []
            }), u(a.variables.passwordComplexityPolicyVar.numberRequiredAttr, !1, this, function() {
                return [c.createElement(y, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; display: flex; gap: 8px; text-align: left;"
                    },
                    visible: !0,
                    _idProps: {
                        service: s,
                        uuid: "18"
                    },
                    _widgetRecordProvider: i
                }, c.createElement(y, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline",
                        marginLeft: "0"
                    },
                    visible: !0,
                    _idProps: {
                        service: s,
                        uuid: "19"
                    },
                    _widgetRecordProvider: i
                }, u(a.variables.isPasswordEmptyVar, !1, this, function() {
                    return [c.createElement(T, {
                        extendedProperties: {
                            style: "color: #6A7178; font-size: 15px; height: 15px; padding: 0px; width: 15px;"
                        },
                        icon: "circle-thin",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: s,
                            uuid: "20"
                        },
                        _widgetRecordProvider: i
                    })]
                }, function() {
                    return [u(a.variables.passwordValidationResultVar.missingNumberAttr, !1, this, function() {
                        return [c.createElement(T, {
                            extendedProperties: {
                                style: "color: #dc2020; font-size: 15px; width: 15px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            icon: "times-circle",
                            iconSize: 0,
                            style: "icon",
                            visible: !0,
                            _idProps: {
                                service: s,
                                uuid: "21"
                            },
                            _widgetRecordProvider: i
                        })]
                    }, function() {
                        return [c.createElement(T, {
                            extendedProperties: {
                                style: "color: #29823b; font-size: 15px; height: 15px; width: 15px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            icon: "check-circle",
                            iconSize: 0,
                            style: "icon",
                            visible: !0,
                            _idProps: {
                                service: s,
                                uuid: "22"
                            },
                            _widgetRecordProvider: i
                        })]
                    })]
                })), c.createElement(y, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: a.getCachedValue(s.getId("AFlsfhJmA0CeXZDlx_IIzg.Style"), function() {
                        return a.variables.isPasswordEmptyVar ? "" : a.variables.passwordValidationResultVar.missingNumberAttr ? "password-policy__rule--error" : "password-policy__rule--success"
                    }, function() {
                        return a.variables.isPasswordEmptyVar
                    }, function() {
                        return a.variables.passwordValidationResultVar.missingNumberAttr
                    }),
                    visible: !0,
                    _idProps: {
                        service: s,
                        uuid: "23"
                    },
                    _widgetRecordProvider: i
                }, c.createElement(dt, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 15px;"
                    },
                    text: ["At least one number"],
                    _idProps: {
                        service: s,
                        uuid: "24"
                    },
                    _widgetRecordProvider: i
                })))]
            }, function() {
                return []
            }), u(a.variables.passwordComplexityPolicyVar.specialCharacterRequiredAttr, !1, this, function() {
                return [c.createElement(y, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; display: flex; gap: 8px; text-align: left;"
                    },
                    visible: !0,
                    _idProps: {
                        service: s,
                        uuid: "25"
                    },
                    _widgetRecordProvider: i
                }, c.createElement(y, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline",
                        marginLeft: "0"
                    },
                    visible: !0,
                    _idProps: {
                        service: s,
                        uuid: "26"
                    },
                    _widgetRecordProvider: i
                }, u(a.variables.isPasswordEmptyVar, !1, this, function() {
                    return [c.createElement(T, {
                        extendedProperties: {
                            style: "color: #6A7178; font-size: 15px; height: 15px; padding: 0px; width: 15px;"
                        },
                        icon: "circle-thin",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: s,
                            uuid: "27"
                        },
                        _widgetRecordProvider: i
                    })]
                }, function() {
                    return [u(a.variables.passwordValidationResultVar.missingSpecialCharacterAttr, !1, this, function() {
                        return [c.createElement(T, {
                            extendedProperties: {
                                style: "color: #dc2020; font-size: 15px; width: 15px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            icon: "times-circle",
                            iconSize: 0,
                            style: "icon",
                            visible: !0,
                            _idProps: {
                                service: s,
                                uuid: "28"
                            },
                            _widgetRecordProvider: i
                        })]
                    }, function() {
                        return [c.createElement(T, {
                            extendedProperties: {
                                style: "color: #29823b; font-size: 15px; height: 15px; width: 15px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            icon: "check-circle",
                            iconSize: 0,
                            style: "icon",
                            visible: !0,
                            _idProps: {
                                service: s,
                                uuid: "29"
                            },
                            _widgetRecordProvider: i
                        })]
                    })]
                })), c.createElement(y, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: a.getCachedValue(s.getId("cEfQZ9nEOkWYb+Y6Pe1s7w.Style"), function() {
                        return a.variables.isPasswordEmptyVar ? "" : a.variables.passwordValidationResultVar.missingSpecialCharacterAttr ? "password-policy__rule--error" : "password-policy__rule--success"
                    }, function() {
                        return a.variables.isPasswordEmptyVar
                    }, function() {
                        return a.variables.passwordValidationResultVar.missingSpecialCharacterAttr
                    }),
                    visible: !0,
                    _idProps: {
                        service: s,
                        uuid: "30"
                    },
                    _widgetRecordProvider: i
                }, c.createElement(dt, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 15px;"
                    },
                    text: ["At least one special character"],
                    _idProps: {
                        service: s,
                        uuid: "31"
                    },
                    _widgetRecordProvider: i
                })))]
            }, function() {
                return []
            }))))
        }
    };
e(Y, "View");
var ji = Y,
    bS = ji;
export {
    bS as a
};