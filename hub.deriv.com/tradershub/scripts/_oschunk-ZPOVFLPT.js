import {
    Bi as o,
    xk as i
} from "./_oschunk-MSUVGI3L.js";
import {
    v as t
} from "./_oschunk-2JKANR6M.js";
import {
    c as e
} from "./_oschunk-DVBKI63I.js";
var D = {
        staticEntities: {}
    },
    O = D.staticEntities;
var n = class n extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PasswordComplexityPolicy", "passwordComplexityPolicyAttr", "PasswordComplexityPolicy", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new o)
        }, !0, o)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(p) {
        return new n(new n.RecordClass({
            passwordComplexityPolicyAttr: t.ImmutableBase.getData(p)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "4d77cfdd-567b-2086-8037-7834fc8205a2"
    }
};
e(n, "RC_4d77cfdd567b208680377834fc8205a2");
var r = n;
r.init();
var l = class l extends t.GenericRecordList {
    static getItemType() {
        return r
    }
};
e(l, "RL_919d8bc896529858c8cc8f0f3e5cb019");
var m = l;
var c = class c extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PasswordValidationResult", "passwordValidationResultAttr", "PasswordValidationResult", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new i)
        }, !0, i)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(p) {
        return new c(new c.RecordClass({
            passwordValidationResultAttr: t.ImmutableBase.getData(p)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b27f0b96-8b0f-7cea-6150-6ac9d6ee7c27"
    }
};
e(c, "RC_b27f0b968b0f7cea61506ac9d6ee7c27");
var a = c;
a.init();
var d = class d extends t.GenericRecordList {
    static getItemType() {
        return a
    }
};
e(d, "RL_ca4befaa7d5de5d9bbcd4bf59c44b15c");
var u = d;
var x = class x extends t.GenericRecordList {
    static getItemType() {
        return i
    }
};
e(x, "RL_e57523dcca7e6d3766c4721a0ef109ee");
var y = x;
var S = class S extends t.GenericRecordList {
    static getItemType() {
        return o
    }
};
e(S, "RL_f50879d0da007880fcd304f3378f0a9e");
var f = S;