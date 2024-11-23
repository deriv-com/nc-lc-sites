import {
    Xc as i,
    od as n,
    pd as u
} from "./_oschunk-JXJHSAQS.js";
import {
    v as t
} from "./_oschunk-5KJVGEL7.js";
import {
    c as e
} from "./_oschunk-QHO7QY6K.js";
var _ = {
        staticEntities: {}
    },
    tt = _.staticEntities;
var A = class A extends t.GenericRecordList {
    static getItemType() {
        return i
    }
};
e(A, "RL_2a382b66fe5d14d7973947bc856957a1");
var I = A;
var G = class G extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Name", "nameAttr", "Name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Value", "valueAttr", "Value", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(G, "ST_2d171ea14d84557a767b7307054e0631Structure");
var s = G;
s.init();
var O = class O extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("BucketObject", "bucketObjectAttr", "BucketObject", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new u)
        }, !0, u)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new O(new O.RecordClass({
            bucketObjectAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "859ef53f-d8ef-4c4c-a0ea-34f7cfc34868"
    }
};
e(O, "RC_859ef53fd8ef4c4ca0ea34f7cfc34868");
var m = O;
m.init();
var P = class P extends t.GenericRecordList {
    static getItemType() {
        return m
    }
};
e(P, "RL_3474e4700dc4926ae089c3343a57f059");
var B = P;
var w = class w extends t.GenericRecordList {
    static getItemType() {
        return s
    }
};
e(w, "RL_f8f2b796ce8b40bf1bf78faad76626c9");
var p = w;
var q = class q extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Name", "nameAttr", "Name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Value", "valueAttr", "Value", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(q, "ST_a242f5800ab7777e1cb686f9dd8624b1Structure");
var o = q;
o.init();
var L = class L extends t.GenericRecordList {
    static getItemType() {
        return o
    }
};
e(L, "RL_42a0c1b905de4a419375ec7d727f39fa");
var T = L;
var U = class U extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("BaseURL", "baseURLAttr", "BaseURL", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("URLPath", "uRLPathAttr", "URLPath", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("URLQueryParameters", "uRLQueryParametersAttr", "URLQueryParameters", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new p)
        }, !0, p), this.attr("HTTPMethod", "hTTPMethodAttr", "HTTPMethod", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Headers", "headersAttr", "Headers", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new T)
        }, !0, T), this.attr("RequestText", "requestTextAttr", "RequestText", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("RequestBinary", "requestBinaryAttr", "RequestBinary", !1, !1, t.DataTypes.BinaryData, function() {
            return t.BinaryData.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(U, "ST_3b82f4ed447da408d5c978025cbb10f3Structure");
var c = U;
c.init();
var v = class v extends t.GenericRecordList {
    static getItemType() {
        return n
    }
};
e(v, "RL_45cddd3c466123d5b32df09cbae54a1c");
var H = v;
var x = class x extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("HTTPRequest", "hTTPRequestAttr", "HTTPRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new c)
        }, !0, c)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new x(new x.RecordClass({
            hTTPRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "ee2b0c6a-3600-9347-dc4d-40e6f23de74d"
    }
};
e(x, "RC_ee2b0c6a36009347dc4d40e6f23de74d");
var f = x;
f.init();
var C = class C extends t.GenericRecordList {
    static getItemType() {
        return f
    }
};
e(C, "RL_58315d8514fbbc9bb2661d53c1a7af18");
var N = C;
var V = class V extends t.GenericRecordList {
    static getItemType() {
        return c
    }
};
e(V, "RL_664802a596e703d2c593010cbc833afd");
var E = V;
var R = class R extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("FileNames", "fileNamesAttr", "FileNames", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new n)
        }, !0, n)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new R(new R.RecordClass({
            fileNamesAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7c6222ad-af5e-347a-3ec1-46c0fb60e75c"
    }
};
e(R, "RC_7c6222adaf5e347a3ec146c0fb60e75c");
var l = R;
l.init();
var b = class b extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("EventImages", "eventImagesAttr", "EventImages", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new i)
        }, !0, i)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new b(new b.RecordClass({
            eventImagesAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a1594f19-c4bb-b962-af10-0318a59756da"
    }
};
e(b, "RC_a1594f19c4bbb962af100318a59756da");
var S = b;
S.init();
var g = class g extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("HTTPHeader", "hTTPHeaderAttr", "HTTPHeader", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new o)
        }, !0, o)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new g(new g.RecordClass({
            hTTPHeaderAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "aa55b22d-8e3b-3780-ee46-6b9f1c078d50"
    }
};
e(g, "RC_aa55b22d8e3b3780ee466b9f1c078d50");
var D = g;
D.init();
var j = class j extends t.GenericRecordList {
    static getItemType() {
        return D
    }
};
e(j, "RL_aca8a11067f2d020257cc4766ddc50f6");
var Q = j;
var h = class h extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("URLQueryParameter", "uRLQueryParameterAttr", "URLQueryParameter", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new s)
        }, !0, s)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new h(new h.RecordClass({
            uRLQueryParameterAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "dca22c02-c83f-a660-9e46-58be2dcc2979"
    }
};
e(h, "RC_dca22c02c83fa6609e4658be2dcc2979");
var y = h;
y.init();
var M = class M extends t.GenericRecordList {
    static getItemType() {
        return y
    }
};
e(M, "RL_bdac5e1ffb36666711bf9daaa39cd1f2");
var k = M;
var F = class F extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Name", "nameAttr", "Name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Value", "valueAttr", "Value", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "cddf704a-a3f0-60f9-6b1a-7542e1972a40"
    }
};
e(F, "RC_cddf704aa3f060f96b1a7542e1972a40");
var d = F;
d.init();
var z = class z extends t.GenericRecordList {
    static getItemType() {
        return S
    }
};
e(z, "RL_ce88911b84fc13ed7c43e363bec447f0");
var W = z;
var K = class K extends t.GenericRecordList {
    static getItemType() {
        return u
    }
};
e(K, "RL_dc64b7a82e1258fe9af8a4df56d80bc6");
var J = K;
var Y = class Y extends t.GenericRecordList {
    static getItemType() {
        return d
    }
};
e(Y, "RL_e04e4766a07df2f747be6ea6a7659074");
var X = Y;
var $ = class $ extends t.GenericRecordList {
    static getItemType() {
        return l
    }
};
e($, "RL_e37cdb444cc02303f6282ba8c5645353");
var Z = $;