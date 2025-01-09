import {
    Of as i
} from "./_oschunk-UATY3RVV.js";
import {
    v as t
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as e
} from "./_oschunk-QHO7QY6K.js";
var p = {
    staticEntities: {}
};
p.staticEntities.messageType = {};
Object.defineProperty(p.staticEntities.messageType, "info", {
    get: e(function() {
        return "Info"
    }, "get")
});
Object.defineProperty(p.staticEntities.messageType, "error", {
    get: e(function() {
        return "Error"
    }, "get")
});
var x = p.staticEntities;
var n = class n extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage_OSUI", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new i)
        }, !0, i)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(m) {
        return new n(new n.RecordClass({
            errorMessageAttr: t.ImmutableBase.getData(m)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "27b5a164-e828-de9b-9068-6831c7908b4a"
    }
};
e(n, "RC_27b5a164e828de9b90686831c7908b4a");
var s = n;
s.init();
var u = class u extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Icon", "iconAttr", "Icon", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(u, "EN_e7a8809b26383e0f98ffb8822bdf2638EntityRecord");
var r = u;
r.init();
var f = class f extends t.GenericRecordList {
    static getItemType() {
        return r
    }
};
e(f, "RL_2e7f9b87b340fb42afa92651ad0cfa61");
var T = f;
var S = class S extends t.GenericRecordList {
    static getItemType() {
        return i
    }
};
e(S, "RL_478659cf4d50eb426ae425e9399ed35f");
var y = S;
var c = class c extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("MessageType", "messageTypeAttr", "MessageType", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new r)
        }, !0, r)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(m) {
        return new c(new c.RecordClass({
            messageTypeAttr: t.ImmutableBase.getData(m)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b9b61698-16aa-2a2f-b02e-77a5e05b06e0"
    }
};
e(c, "RC_b9b6169816aa2a2fb02e77a5e05b06e0");
var o = c;
o.init();
var l = class l extends t.GenericRecordList {
    static getItemType() {
        return o
    }
};
e(l, "RL_7e7de9b632ae91058dd57cc64b59d318");
var d = l;
var O = class O extends t.GenericRecordList {
    static getItemType() {
        return s
    }
};
e(O, "RL_bf3bc554c395cc3dd0ab1a5b6ac5d91f");
var D = O;