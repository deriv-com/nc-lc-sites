import {
    $ as L,
    $a as Fr,
    $c as z,
    $d as tt,
    $e as pe,
    A as E,
    Aa as wr,
    Ab as ep,
    Ae as ha,
    B as Bt,
    Ba as Pr,
    Bb as Fe,
    Bc as Je,
    Be as La,
    Bf as Se,
    C as Qd,
    Ca as Cr,
    Cb as H,
    Cc as Ue,
    Cd as np,
    Cf as Ga,
    D as Le,
    Da as Kd,
    Db as F,
    Dc as ya,
    Dd as Ye,
    Df as be,
    E as $t,
    Ea as k,
    Eb as Zr,
    Ec as Sa,
    Ed as ee,
    Ee as ne,
    F as qt,
    Fb as M,
    Fe as ce,
    G as Jt,
    Ga as Er,
    Gb as ea,
    Gc as ba,
    H as Ut,
    Ha as N,
    Hd as g,
    He as Va,
    I as zt,
    Ia as ke,
    Id as Ra,
    J as jt,
    Ja as hr,
    Jc as ze,
    Jd as Ee,
    Je as at,
    K as Xt,
    Ka as Lr,
    Kb as xe,
    Ke as ue,
    L as Qt,
    Lb as ta,
    Ld as Ke,
    Lf as De,
    M as Yt,
    Mb as ra,
    Mc as Da,
    Md as te,
    N as Kt,
    Na as vt,
    Nb as aa,
    Nc as rp,
    O as Zt,
    Ob as Me,
    Oc as P,
    Oe as ie,
    P as er,
    Pa as Ne,
    Pc as Oa,
    Pe as ot,
    Q as tr,
    Qa as Vr,
    Qc as Aa,
    Qe as le,
    R as rr,
    Ra as G,
    Rd as Ze,
    S as ar,
    Sa as W,
    Sc as je,
    Sd as Ia,
    T as or,
    Td as wa,
    U as sr,
    Ua as kr,
    Ub as oa,
    Ud as C,
    V as nr,
    Va as Zd,
    Vb as Oe,
    Vd as cp,
    Ve as fe,
    W as cr,
    Wa as Nr,
    Wc as ap,
    We as de,
    X as ur,
    Xa as Gr,
    Xb as Be,
    Xc as U,
    Xd as et,
    Y as ut,
    Ya as Wr,
    Yb as $e,
    Yc as Xe,
    Yd as ge,
    Ye as st,
    Z as h,
    Za as _r,
    Zb as sa,
    Zd as R,
    _a as Hr,
    _b as B,
    aa as ir,
    ab as Mr,
    ac as $,
    ad as va,
    b as It,
    ba as lr,
    bb as Br,
    bc as na,
    bd as ga,
    c as wt,
    ca as fr,
    cb as $r,
    cc as ca,
    cd as op,
    d as Pt,
    da as dr,
    db as qr,
    dc as ua,
    dd as j,
    de as re,
    df as Te,
    e as Ct,
    eb as Jr,
    ee as gt,
    f as Et,
    fb as Ur,
    gb as zr,
    gc as tp,
    gd as X,
    ha as Yd,
    hb as w,
    hd as Q,
    hf as me,
    i as ht,
    ia as pr,
    ib as Ge,
    ic as ia,
    ie as ae,
    ja as Tr,
    jb as _,
    je as oe,
    jf as ye,
    k as zd,
    kc as la,
    kf as ka,
    l as Lt,
    lb as We,
    lc as q,
    m as Vt,
    ma as Ve,
    mb as jr,
    n as kt,
    na as mr,
    nb as Xr,
    nc as Ae,
    nd as sp,
    ne as se,
    nf as nt,
    o as Nt,
    oa as V,
    ob as Qr,
    oc as ve,
    oe as up,
    p as jd,
    pa as yr,
    pb as Yr,
    pc as Rt,
    pd as Y,
    q as Gt,
    qa as Sr,
    qc as qe,
    r as Wt,
    ra as br,
    rc as fa,
    s as _t,
    sa as Dr,
    sc as da,
    sd as Qe,
    se as rt,
    sf as Na,
    t as Ht,
    ta as Or,
    tc as pa,
    td as K,
    u as Ft,
    ua as Ar,
    ub as _e,
    uc as Ta,
    v as Xd,
    va as vr,
    vb as Kr,
    vc as J,
    vd as Ce,
    vf as ct,
    wa as gr,
    wd as xa,
    wf as x,
    xa as xr,
    xc as ma,
    xe as Pa,
    y as Mt,
    ya as Rr,
    yb as He,
    ye as Ca,
    za as Ir,
    zd as Z,
    ze as Ea
} from "./_oschunk-5FYEKNKX.js";
import {
    ia as n,
    v as t
} from "./_oschunk-5KJVGEL7.js";
import {
    a as X7,
    c as r,
    i as ip
} from "./_oschunk-QHO7QY6K.js";
var mu = {
    staticEntities: {}
};
mu.staticEntities.consoleErrorType = {};
Object.defineProperty(mu.staticEntities.consoleErrorType, "error", {
    get: r(function() {
        return 2
    }, "get")
});
Object.defineProperty(mu.staticEntities.consoleErrorType, "warning", {
    get: r(function() {
        return 1
    }, "get")
});
Object.defineProperty(mu.staticEntities.consoleErrorType, "information", {
    get: r(function() {
        return 0
    }, "get")
});
var Q7 = mu.staticEntities;
var yu = class yu extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetAccountStatus", "getAccountStatusAttr", "GetAccountStatus", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Et)
        }, !0, Et)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new yu(new yu.RecordClass({
            getAccountStatusAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "3183b1f3-faf6-969c-32d1-f8eb3c0f8d02"
    }
};
r(yu, "RC_3183b1f3faf6969c32d1f8eb3c0f8d02");
var Wa = yu;
Wa.init();
var fp = class fp extends t.GenericRecordList {
    static getItemType() {
        return Wa
    }
};
r(fp, "RL_004e51f9bad0ff9671e9f54d029f6acd");
var lp = fp;
var pp = class pp extends t.GenericRecordList {
    static getItemType() {
        return ht
    }
};
r(pp, "RL_00e1daf27d32b8b4e98978c4e9e58544");
var dp = pp;
var mp = class mp extends t.GenericRecordList {
    static getItemType() {
        return Lt
    }
};
r(mp, "RL_00f6e92c07403e159ff2340d01820a0d");
var Tp = mp;
var Su = class Su extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Postcode", "postcodeAttr", "Postcode", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Vt)
        }, !0, Vt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Su(new Su.RecordClass({
            postcodeAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "012b2720-fb0d-cd44-2416-908af4498cef"
    }
};
r(Su, "RC_012b2720fb0dcd442416908af4498cef");
var _a = Su;
_a.init();
var bu = class bu extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Statement", "statementAttr", "Statement", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Gt)
        }, !0, Gt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new bu(new bu.RecordClass({
            statementAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "37b9abdf-c568-1e06-0cfc-cd92139f3527"
    }
};
r(bu, "RC_37b9abdfc5681e060cfccd92139f3527");
var Ha = bu;
Ha.init();
var Sp = class Sp extends t.GenericRecordList {
    static getItemType() {
        return Ha
    }
};
r(Sp, "RL_016b438202bb8683ed0088796cbdae5f");
var yp = Sp;
var Dp = class Dp extends t.GenericRecordList {
    static getItemType() {
        return Mt
    }
};
r(Dp, "RL_0253348eb22ed9882ec1d8af3ef0b76e");
var bp = Dp;
var Ap = class Ap extends t.GenericRecordList {
    static getItemType() {
        return E
    }
};
r(Ap, "RL_02995be0d4089fecb83f5ff06bf3de7f");
var Op = Ap;
var Du = class Du extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("SupportedDocuments", "supportedDocumentsAttr", "SupportedDocuments", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Qd)
        }, !0, Qd)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Du(new Du.RecordClass({
            supportedDocumentsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "02b3156d-da71-1037-d0bf-0bf8ba2d349b"
    }
};
r(Du, "RC_02b3156dda711037d0bf0bf8ba2d349b");
var Fa = Du;
Fa.init();
var Ou = class Ou extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetLandingCompanyResponse", "getLandingCompanyResponseAttr", "GetLandingCompanyResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new h)
        }, !0, h)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ou(new Ou.RecordClass({
            getLandingCompanyResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e16346b0-5b03-d5a8-388d-39bb24b7660c"
    }
};
r(Ou, "RC_e16346b05b03d5a8388d39bb24b7660c");
var Ma = Ou;
Ma.init();
var gp = class gp extends t.GenericRecordList {
    static getItemType() {
        return Ma
    }
};
r(gp, "RL_02c7187c7ba98cee9be98803b8e6dc25");
var vp = gp;
var Au = class Au extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderDisputeResponse", "p2POrderDisputeResponseAttr", "P2POrderDisputeResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new L)
        }, !0, L)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Au(new Au.RecordClass({
            p2POrderDisputeResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "52cd3192-fe25-a809-00d1-3891f43fdafe"
    }
};
r(Au, "RC_52cd3192fe25a80900d13891f43fdafe");
var Ba = Au;
Ba.init();
var Rp = class Rp extends t.GenericRecordList {
    static getItemType() {
        return Ba
    }
};
r(Rp, "RL_02db0f35ddb2c08edb356b6a4e1e4b4a");
var xp = Rp;
var vu = class vu extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("KYCAuthStatus", "kYCAuthStatusAttr", "KYCAuthStatus", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new dr)
        }, !0, dr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new vu(new vu.RecordClass({
            kYCAuthStatusAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f5490f87-f20f-2000-0a36-a875dced4a8f"
    }
};
r(vu, "RC_f5490f87f20f20000a36a875dced4a8f");
var $a = vu;
$a.init();
var wp = class wp extends t.GenericRecordList {
    static getItemType() {
        return $a
    }
};
r(wp, "RL_02fe2e113b5eb9c675da8b940dcff7a8");
var Ip = wp;
var gu = class gu extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Partner_account", "partner_accountAttr", "Partner_account", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Tr)
        }, !0, Tr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new gu(new gu.RecordClass({
            partner_accountAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0340cb56-c492-8ed7-e579-290b842d6376"
    }
};
r(gu, "RC_0340cb56c4928ed7e579290b842d6376");
var qa = gu;
qa.init();
var Cp = class Cp extends t.GenericRecordList {
    static getItemType() {
        return Xt
    }
};
r(Cp, "RL_03ad86d8c1630b012ffc7d14eb428cff");
var Pp = Cp;
var hp = class hp extends t.GenericRecordList {
    static getItemType() {
        return Ve
    }
};
r(hp, "RL_04d18d7e4131a1487094ff1d381d4a05");
var Ep = hp;
var Lp = class Lp extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Name", "nameAttr", "Name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Value", "valueAttr", "Value", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
r(Lp, "ST_057fc2ec8b30a53f3233d84a70e95aabStructure");
var it = Lp;
it.init();
var xu = class xu extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetAccountStatusRes", "getAccountStatusResAttr", "GetAccountStatusRes", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new E)
        }, !0, E)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new xu(new xu.RecordClass({
            getAccountStatusResAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e70e9077-4605-2ce9-2e69-1c25e5a4ffd3"
    }
};
r(xu, "RC_e70e907746052ce92e691c25e5a4ffd3");
var Ja = xu;
Ja.init();
var kp = class kp extends t.GenericRecordList {
    static getItemType() {
        return Ja
    }
};
r(kp, "RL_05831c3634322d723355d086c3117149");
var Vp = kp;
var Np = class Np extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Totp_action", "totp_actionAttr", "totp_action", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Otp", "otpAttr", "otp", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
r(Np, "ST_5a159cc5be8e634acb29553c8cfadd94Structure");
var lt = Np;
lt.init();
var Ru = class Ru extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("TwoFactorAuthenticationRequest", "twoFactorAuthenticationRequestAttr", "TwoFactorAuthenticationRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new lt)
        }, !0, lt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ru(new Ru.RecordClass({
            twoFactorAuthenticationRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "05c66842-1528-bd01-61c3-ba0fb51ccbfb"
    }
};
r(Ru, "RC_05c668421528bd0161c3ba0fb51ccbfb");
var Ua = Ru;
Ua.init();
var Iu = class Iu extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertListResponse", "p2PAdvertListResponseAttr", "P2PAdvertListResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new V)
        }, !0, V)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Iu(new Iu.RecordClass({
            p2PAdvertListResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "aaae25c6-5f55-ba27-fa3b-d1194aa7adb1"
    }
};
r(Iu, "RC_aaae25c65f55ba27fa3bd1194aa7adb1");
var za = Iu;
za.init();
var Wp = class Wp extends t.GenericRecordList {
    static getItemType() {
        return za
    }
};
r(Wp, "RL_0603e4560918555f40e94b916d53c558");
var Gp = Wp;
var wu = class wu extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetResidenceListResponse", "getResidenceListResponseAttr", "GetResidenceListResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new k)
        }, !0, k)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new wu(new wu.RecordClass({
            getResidenceListResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0a5ac308-5c04-4e0c-9df1-51a275033fc0"
    }
};
r(wu, "RC_0a5ac3085c044e0c9df151a275033fc0");
var ja = wu;
ja.init();
var Hp = class Hp extends t.GenericRecordList {
    static getItemType() {
        return ja
    }
};
r(Hp, "RL_06044e18a6adcb4a057162249eab9621");
var _p = Hp;
var Mp = class Mp extends t.GenericRecordList {
    static getItemType() {
        return N
    }
};
r(Mp, "RL_06622fbce6cdd9c0cef8e5e1e42d7483");
var Fp = Mp;
var Pu = class Pu extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Common_reporting_standard", "common_reporting_standardAttr", "Common_reporting_standard", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Dr)
        }, !0, Dr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Pu(new Pu.RecordClass({
            common_reporting_standardAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7501a1e5-9336-7174-3a2b-bef56326a047"
    }
};
r(Pu, "RC_7501a1e5933671743a2bbef56326a047");
var Xa = Pu;
Xa.init();
var $p = class $p extends t.GenericRecordList {
    static getItemType() {
        return Xa
    }
};
r($p, "RL_06ad8081ecdd4854820e95cbc9df15a8");
var Bp = $p;
var Cu = class Cu extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertCreateRequest", "p2PAdvertCreateRequestAttr", "P2PAdvertCreateRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ke)
        }, !0, ke)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Cu(new Cu.RecordClass({
            p2PAdvertCreateRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "78c58bb8-00be-d93f-ede1-f23d20908730"
    }
};
r(Cu, "RC_78c58bb800bed93fede1f23d20908730");
var Qa = Cu;
Qa.init();
var Jp = class Jp extends t.GenericRecordList {
    static getItemType() {
        return Qa
    }
};
r(Jp, "RL_06babe1eae4ab7ef44e040e05b96ad18");
var qp = Jp;
var Eu = class Eu extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Transfer_between_account", "transfer_between_accountAttr", "Transfer_between_account", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Lr)
        }, !0, Lr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Eu(new Eu.RecordClass({
            transfer_between_accountAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "08d13aa3-0e14-041e-8a41-4b5d62b51845"
    }
};
r(Eu, "RC_08d13aa30e14041e8a414b5d62b51845");
var Ya = Eu;
Ya.init();
var zp = class zp extends t.GenericRecordList {
    static getItemType() {
        return Ya
    }
};
r(zp, "RL_0706637a7e12b34ea54e4ad5e3fa7774");
var Up = zp;
var hu = class hu extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostTradingPlatformPasswordResetRequest", "postTradingPlatformPasswordResetRequestAttr", "PostTradingPlatformPasswordResetRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new vt)
        }, !0, vt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new hu(new hu.RecordClass({
            postTradingPlatformPasswordResetRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b95c380c-099a-10aa-1c6c-66ff29a6b5ad"
    }
};
r(hu, "RC_b95c380c099a10aa1c6c66ff29a6b5ad");
var Ka = hu;
Ka.init();
var Xp = class Xp extends t.GenericRecordList {
    static getItemType() {
        return Ka
    }
};
r(Xp, "RL_0755631e3e89e106d6250421ad51275f");
var jp = Xp;
var Yp = class Yp extends t.GenericRecordList {
    static getItemType() {
        return G
    }
};
r(Yp, "RL_07d4f66324fea8299f2f66d1b9c5293b");
var Qp = Yp;
var Lu = class Lu extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderInfoResponse", "p2POrderInfoResponseAttr", "P2POrderInfoResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new W)
        }, !0, W)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Lu(new Lu.RecordClass({
            p2POrderInfoResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "9fa0982e-2ffd-4315-2927-0d85cdcda612"
    }
};
r(Lu, "RC_9fa0982e2ffd431529270d85cdcda612");
var Za = Lu;
Za.init();
var Zp = class Zp extends t.GenericRecordList {
    static getItemType() {
        return Za
    }
};
r(Zp, "RL_0801fe4c458fcd2bde490e69fb5c203d");
var Kp = Zp;
var tT = class tT extends t.GenericRecordList {
    static getItemType() {
        return Ut
    }
};
r(tT, "RL_08493c76d04a33db201691368d61ec98");
var eT = tT;
var aT = class aT extends t.GenericRecordList {
    static getItemType() {
        return Or
    }
};
r(aT, "RL_085f95fe6d8c0993316da931c0bd457a");
var rT = aT;
var Vu = class Vu extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("KYC_Identity", "kYC_IdentityAttr", "KYC_Identity", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new fr)
        }, !0, fr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Vu(new Vu.RecordClass({
            kYC_IdentityAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b654e7cd-3dd9-ac2b-1fbd-d9af9d59a56a"
    }
};
r(Vu, "RC_b654e7cd3dd9ac2b1fbdd9af9d59a56a");
var eo = Vu;
eo.init();
var sT = class sT extends t.GenericRecordList {
    static getItemType() {
        return eo
    }
};
r(sT, "RL_08d09f34c86e6f5622489301d79ff8a8");
var oT = sT;
var ku = class ku extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req10", "echo_req10Attr", "Echo_req10", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new kr)
        }, !0, kr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ku(new ku.RecordClass({
            echo_req10Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "832614e4-42cb-2846-7f1d-84472c884ebb"
    }
};
r(ku, "RC_832614e442cb28467f1d84472c884ebb");
var to = ku;
to.init();
var cT = class cT extends t.GenericRecordList {
    static getItemType() {
        return to
    }
};
r(cT, "RL_08ec9fd9082ce97be1a7ef16873ad7f8");
var nT = cT;
var Nu = class Nu extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetWebsiteStatusResponse", "getWebsiteStatusResponseAttr", "GetWebsiteStatusResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new w)
        }, !0, w)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Nu(new Nu.RecordClass({
            getWebsiteStatusResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "09124448-3290-da76-33fe-64666de188c0"
    }
};
r(Nu, "RC_091244483290da7633fe64666de188c0");
var ro = Nu;
ro.init();
var iT = class iT extends t.GenericRecordList {
    static getItemType() {
        return _
    }
};
r(iT, "RL_098222569d614b59c720a7d15f2e16c6");
var uT = iT;
var Gu = class Gu extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("NonParticipatingJurisdiction_LandingCompany", "nonParticipatingJurisdiction_LandingCompanyAttr", "NonParticipatingJurisdiction_LandingCompany", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new yr)
        }, !0, yr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Gu(new Gu.RecordClass({
            nonParticipatingJurisdiction_LandingCompanyAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "8e2ccc4c-b2bb-c580-c7d8-c36277a3970f"
    }
};
r(Gu, "RC_8e2ccc4cb2bbc580c7d8c36277a3970f");
var ao = Gu;
ao.init();
var fT = class fT extends t.GenericRecordList {
    static getItemType() {
        return ao
    }
};
r(fT, "RL_09aadf2f3a6cc14ff58d7e91ed9aa591");
var lT = fT;
var Wu = class Wu extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertInfoRequest", "p2PAdvertInfoRequestAttr", "P2PAdvertInfoRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new We)
        }, !0, We)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Wu(new Wu.RecordClass({
            p2PAdvertInfoRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0a9739b2-dd1c-62d5-697e-ad34293597d7"
    }
};
r(Wu, "RC_0a9739b2dd1c62d5697ead34293597d7");
var oo = Wu;
oo.init();
var _u = class _u extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Dxtrade_all_company", "dxtrade_all_companyAttr", "Dxtrade_all_company", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new rr)
        }, !0, rr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new _u(new _u.RecordClass({
            dxtrade_all_companyAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0af1f162-a4f1-17f1-f3e8-ae4dce5af0db"
    }
};
r(_u, "RC_0af1f162a4f117f1f3e8ae4dce5af0db");
var so = _u;
so.init();
var Hu = class Hu extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ServiceToken", "serviceTokenAttr", "ServiceToken", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Qr)
        }, !0, Qr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Hu(new Hu.RecordClass({
            serviceTokenAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0b060544-2077-afaf-f405-34ee187e6408"
    }
};
r(Hu, "RC_0b0605442077afaff40534ee187e6408");
var no = Hu;
no.init();
var Fu = class Fu extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req5", "echo_req5Attr", "Echo_req5", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Yr)
        }, !0, Yr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Fu(new Fu.RecordClass({
            echo_req5Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "177ce791-066f-e3e5-2ef3-d9c99be27198"
    }
};
r(Fu, "RC_177ce791066fe3e52ef3d9c99be27198");
var co = Fu;
co.init();
var pT = class pT extends t.GenericRecordList {
    static getItemType() {
        return co
    }
};
r(pT, "RL_0b481988946c6f5bbb65b67a84007644");
var dT = pT;
var Mu = class Mu extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("SendbirdService", "sendbirdServiceAttr", "SendbirdService", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Xr)
        }, !0, Xr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Mu(new Mu.RecordClass({
            sendbirdServiceAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d44f16e3-0a06-0986-4b9b-1cd234f36b0d"
    }
};
r(Mu, "RC_d44f16e30a0609864b9b1cd234f36b0d");
var uo = Mu;
uo.init();
var mT = class mT extends t.GenericRecordList {
    static getItemType() {
        return uo
    }
};
r(mT, "RL_0bdff19b177f7c68e65187599418c3f6");
var TT = mT;
var Bu = class Bu extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetLandingCompanyRequest", "getLandingCompanyRequestAttr", "GetLandingCompanyRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Le)
        }, !0, Le)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Bu(new Bu.RecordClass({
            getLandingCompanyRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "fbe47240-f7e3-e380-42a8-c23b7b2b02e0"
    }
};
r(Bu, "RC_fbe47240f7e3e38042a8c23b7b2b02e0");
var io = Bu;
io.init();
var ST = class ST extends t.GenericRecordList {
    static getItemType() {
        return io
    }
};
r(ST, "RL_0c13bf82c0e754513401b974c717dc2b");
var yT = ST;
var DT = class DT extends t.GenericRecordList {
    static getItemType() {
        return _e
    }
};
r(DT, "RL_0c323972ef75bc243979fff356a6bb1c");
var bT = DT;
var OT = class OT extends t.GenericRecordList {
    static getItemType() {
        return it
    }
};
r(OT, "RL_0c35eb12ceba02e474ddb698ce43b328");
var ft = OT;
var vT = class vT extends t.GenericRecordList {
    static getItemType() {
        return Wt
    }
};
r(vT, "RL_0c71b2fc045fad5c4e0f7f80c50bd453");
var AT = vT;
var $u = class $u extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req2", "echo_req2Attr", "Echo_req2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Kr)
        }, !0, Kr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new $u(new $u.RecordClass({
            echo_req2Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0d71b623-ce5a-409a-df80-e6d9d4a7031e"
    }
};
r($u, "RC_0d71b623ce5a409adf80e6d9d4a7031e");
var lo = $u;
lo.init();
var qu = class qu extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DocumentUploadRequest", "documentUploadRequestAttr", "DocumentUploadRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new He)
        }, !0, He)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new qu(new qu.RecordClass({
            documentUploadRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "20eb62e8-6c4b-f568-3a13-4577868b24d1"
    }
};
r(qu, "RC_20eb62e86c4bf5683a134577868b24d1");
var fo = qu;
fo.init();
var xT = class xT extends t.GenericRecordList {
    static getItemType() {
        return fo
    }
};
r(xT, "RL_0db7fd9e745d38c354f97f0b888be6d8");
var gT = xT;
var Ju = class Ju extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Trading_platform_available_accountItemCtrader", "trading_platform_available_accountItemCtraderAttr", "Trading_platform_available_accountItemCtrader", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ep)
        }, !0, ep)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ju(new Ju.RecordClass({
            trading_platform_available_accountItemCtraderAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6bc4d289-68c6-b7a4-6635-811add966ded"
    }
};
r(Ju, "RC_6bc4d28968c6b7a46635811add966ded");
var po = Ju;
po.init();
var IT = class IT extends t.GenericRecordList {
    static getItemType() {
        return po
    }
};
r(IT, "RL_0e22e79825d574ddeb21017d3fee72f5");
var RT = IT;
var Uu = class Uu extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserUpdateRequest", "p2PAdvertiserUpdateRequestAttr", "P2PAdvertiserUpdateRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Fe)
        }, !0, Fe)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Uu(new Uu.RecordClass({
            p2PAdvertiserUpdateRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0e4c0f67-b048-5239-6e81-eab6b78286b5"
    }
};
r(Uu, "RC_0e4c0f67b04852396e81eab6b78286b5");
var To = Uu;
To.init();
var wT = class wT extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Account_type", "account_typeAttr", "account_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Market_type", "market_typeAttr", "market_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Password", "passwordAttr", "password", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Platform", "platformAttr", "platform", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Trading_platform_new_account", "trading_platform_new_accountAttr", "trading_platform_new_account", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
r(wT, "ST_1e55b9312d5404a0508ab79716f991e5Structure");
var Re = wT;
Re.init();
var zu = class zu extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req14", "echo_req14Attr", "Echo_req14", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Re)
        }, !0, Re)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new zu(new zu.RecordClass({
            echo_req14Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "bd7a94a1-cdde-e2bb-163a-6d780a4a63d5"
    }
};
r(zu, "RC_bd7a94a1cddee2bb163a6d780a4a63d5");
var mo = zu;
mo.init();
var CT = class CT extends t.GenericRecordList {
    static getItemType() {
        return mo
    }
};
r(CT, "RL_0e99725e97ba854e0e2876195405ac16");
var PT = CT;
var ju = class ju extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Nik", "nikAttr", "Nik", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new $t)
        }, !0, $t)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ju(new ju.RecordClass({
            nikAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5a174d68-7425-3917-600b-578d844943be"
    }
};
r(ju, "RC_5a174d6874253917600b578d844943be");
var yo = ju;
yo.init();
var hT = class hT extends t.GenericRecordList {
    static getItemType() {
        return yo
    }
};
r(hT, "RL_0ebbc09ab880f9576c75a250e0dd80b4");
var ET = hT;
var Xu = class Xu extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserListResponse", "p2PAdvertiserListResponseAttr", "P2PAdvertiserListResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new H)
        }, !0, H)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Xu(new Xu.RecordClass({
            p2PAdvertiserListResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0eea76ca-7a3d-c279-121f-6b469bc38e1e"
    }
};
r(Xu, "RC_0eea76ca7a3dc279121f6b469bc38e1e");
var So = Xu;
So.init();
var VT = class VT extends t.GenericRecordList {
    static getItemType() {
        return F
    }
};
r(VT, "RL_0f70af24101cfcf6a86201a88d67a596");
var LT = VT;
var kT = class kT extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Trading_platform_new_account", "trading_platform_new_accountAttr", "trading_platform_new_account", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Account_type", "account_typeAttr", "account_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Market_type", "market_typeAttr", "market_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Password", "passwordAttr", "password", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Platform", "platformAttr", "platform", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
r(kT, "ST_0f7be4ac68673923b2b4b44ce40dcec1Structure");
var dt = kT;
dt.init();
var GT = class GT extends t.GenericRecordList {
    static getItemType() {
        return M
    }
};
r(GT, "RL_0fd675088573602f70fccecb4a8edbc5");
var NT = GT;
var Qu = class Qu extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req13", "echo_req13Attr", "Echo_req13", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ea)
        }, !0, ea)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Qu(new Qu.RecordClass({
            echo_req13Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "644701ec-7e0c-c471-c137-db9f55944f2f"
    }
};
r(Qu, "RC_644701ec7e0cc471c137db9f55944f2f");
var bo = Qu;
bo.init();
var _T = class _T extends t.GenericRecordList {
    static getItemType() {
        return bo
    }
};
r(_T, "RL_10077f623e910c5c644432e024b51bb7");
var WT = _T;
var FT = class FT extends t.GenericRecordList {
    static getItemType() {
        return Fa
    }
};
r(FT, "RL_10f2dc321384405a2c0e9f4711d0d4de");
var HT = FT;
var MT = class MT extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Name", "nameAttr", "Name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Value", "valueAttr", "Value", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
r(MT, "ST_e570cde2d15d2cadea5c6f746eaeeeafStructure");
var pt = MT;
pt.init();
var Yu = class Yu extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("HTTPHeader2", "hTTPHeader2Attr", "HTTPHeader2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new pt)
        }, !0, pt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Yu(new Yu.RecordClass({
            hTTPHeader2Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "72dda278-92f0-9ec6-8682-0cd810b01561"
    }
};
r(Yu, "RC_72dda27892f09ec686820cd810b01561");
var Do = Yu;
Do.init();
var $T = class $T extends t.GenericRecordList {
    static getItemType() {
        return Do
    }
};
r($T, "RL_1111f5cfe9205761667c09780a933db7");
var BT = $T;
var JT = class JT extends t.GenericRecordList {
    static getItemType() {
        return xe
    }
};
r(JT, "RL_11d6eb7e137d31b8bce20a34fef0d788");
var qT = JT;
var zT = class zT extends t.GenericRecordList {
    static getItemType() {
        return _r
    }
};
r(zT, "RL_126434276122aa915715df7da7c75609");
var UT = zT;
var Ku = class Ku extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req6", "echo_req6Attr", "Echo_req6", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ta)
        }, !0, ta)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ku(new Ku.RecordClass({
            echo_req6Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "127d33c3-734e-3f0c-ecd5-3087584e156c"
    }
};
r(Ku, "RC_127d33c3734e3f0cecd53087584e156c");
var Oo = Ku;
Oo.init();
var XT = class XT extends t.GenericRecordList {
    static getItemType() {
        return ra
    }
};
r(XT, "RL_12d1ba6d0f7dc76efbcc2fac29abf585");
var jT = XT;
var Zu = class Zu extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("AUD", "aUDAttr", "AUD", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Kt)
        }, !0, Kt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Zu(new Zu.RecordClass({
            aUDAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "334ec8eb-11cb-b1f9-00eb-82a622de6be5"
    }
};
r(Zu, "RC_334ec8eb11cbb1f900eb82a622de6be5");
var Ao = Zu;
Ao.init();
var YT = class YT extends t.GenericRecordList {
    static getItemType() {
        return Ao
    }
};
r(YT, "RL_130306c98b85aa803514000e3331edb0");
var QT = YT;
var ei = class ei extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Currency_config2", "currency_config2Attr", "Currency_config2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new or)
        }, !0, or)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ei(new ei.RecordClass({
            currency_config2Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "131ec4af-e292-e506-94c2-940b1e3c9a73"
    }
};
r(ei, "RC_131ec4afe292e50694c2940b1e3c9a73");
var vo = ei;
vo.init();
var ZT = class ZT extends t.GenericRecordList {
    static getItemType() {
        return Me
    }
};
r(ZT, "RL_1333403c8473cebcdce283d3f038a58c");
var KT = ZT;
var ti = class ti extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Trading", "tradingAttr", "Trading", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Vr)
        }, !0, Vr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ti(new ti.RecordClass({
            tradingAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d54336ec-6049-dff9-c99f-14fd62e782c4"
    }
};
r(ti, "RC_d54336ec6049dff9c99f14fd62e782c4");
var go = ti;
go.init();
var tm = class tm extends t.GenericRecordList {
    static getItemType() {
        return go
    }
};
r(tm, "RL_13576b5dee00a62e9c40a0c658db0a38");
var em = tm;
var am = class am extends t.GenericRecordList {
    static getItemType() {
        return Vt
    }
};
r(am, "RL_13f4e7ea22b9e316259c119567103cf9");
var rm = am;
var sm = class sm extends t.GenericRecordList {
    static getItemType() {
        return rr
    }
};
r(sm, "RL_143abbfebca3c373ef0923e4c8b26336");
var om = sm;
var cm = class cm extends t.GenericRecordList {
    static getItemType() {
        return vr
    }
};
r(cm, "RL_14c5bb80b83da1321f2059f42deabf95");
var nm = cm;
var im = class im extends t.GenericRecordList {
    static getItemType() {
        return oa
    }
};
r(im, "RL_1659ef22005bb5893eb1c95011619009");
var um = im;
var ri = class ri extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserCreateResponse", "p2PAdvertiserCreateResponseAttr", "P2PAdvertiserCreateResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Oe)
        }, !0, Oe)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ri(new ri.RecordClass({
            p2PAdvertiserCreateResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "169ba1f5-7e05-3870-b84c-de6379a8d367"
    }
};
r(ri, "RC_169ba1f57e053870b84cde6379a8d367");
var xo = ri;
xo.init();
var ai = class ai extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Platform_url", "platform_urlAttr", "Platform_url", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new pr)
        }, !0, pr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ai(new ai.RecordClass({
            platform_urlAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "31f62058-9c23-b6cb-76ee-cd5ffbdcff89"
    }
};
r(ai, "RC_31f620589c23b6cb76eecd5ffbdcff89");
var Ro = ai;
Ro.init();
var fm = class fm extends t.GenericRecordList {
    static getItemType() {
        return Ro
    }
};
r(fm, "RL_170db2205fb819d098837fbce8de05cd");
var lm = fm;
var oi = class oi extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderInfoRequest", "p2POrderInfoRequestAttr", "P2POrderInfoRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Be)
        }, !0, Be)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new oi(new oi.RecordClass({
            p2POrderInfoRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "172b8dd4-a9be-ebc4-b3ea-80a0def2b2fe"
    }
};
r(oi, "RC_172b8dd4a9beebc4b3ea80a0def2b2fe");
var Io = oi;
Io.init();
var si = class si extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("LoginHistoryRequest", "loginHistoryRequestAttr", "LoginHistoryRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new $e)
        }, !0, $e)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new si(new si.RecordClass({
            loginHistoryRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2b9ce541-263d-e6cf-9008-8eb6665236ea"
    }
};
r(si, "RC_2b9ce541263de6cf90088eb6665236ea");
var wo = si;
wo.init();
var pm = class pm extends t.GenericRecordList {
    static getItemType() {
        return wo
    }
};
r(pm, "RL_17364cfe47b7832a9885e85b408e32b2");
var dm = pm;
var Tm = class Tm extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req", "echo_reqAttr", "echo_req", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Re)
        }, !0, Re), this.attr("Error", "errorAttr", "error", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ut)
        }, !0, ut), this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Trading_platform_new_account", "trading_platform_new_accountAttr", "trading_platform_new_account", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Rt)
        }, !0, Rt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
r(Tm, "ST_17a41c5de85fc25b7713c6576534b176Structure");
var Tt = Tm;
Tt.init();
var ym = class ym extends t.GenericRecordList {
    static getItemType() {
        return B
    }
};
r(ym, "RL_17c1c88f1431ca6ce7bfc6ae6eb41ed4");
var mm = ym;
var bm = class bm extends t.GenericRecordList {
    static getItemType() {
        return er
    }
};
r(bm, "RL_18994bd1cd31a465f2635a0d68fa478a");
var Sm = bm;
var ni = class ni extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserInfoResponse", "p2PAdvertiserInfoResponseAttr", "P2PAdvertiserInfoResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new $)
        }, !0, $)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ni(new ni.RecordClass({
            p2PAdvertiserInfoResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "dfbe7737-63c5-31fd-0720-12a9fe708316"
    }
};
r(ni, "RC_dfbe773763c531fd072012a9fe708316");
var Po = ni;
Po.init();
var Om = class Om extends t.GenericRecordList {
    static getItemType() {
        return Po
    }
};
r(Om, "RL_18a059102e367451eb780e1388f118f5");
var Dm = Om;
var Am = class Am extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Name", "nameAttr", "Name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Value", "valueAttr", "Value", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
r(Am, "ST_47cb5eee6d4ef4327d9bcca9c13fccceStructure");
var mt = Am;
mt.init();
var vm = class vm extends t.GenericRecordList {
    static getItemType() {
        return mt
    }
};
r(vm, "RL_3d3500211cb1b36e6cbf60493db1facb");
var Co = vm;
var gm = class gm extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("BaseURL", "baseURLAttr", "BaseURL", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("URLPath", "uRLPathAttr", "URLPath", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("URLQueryParameters", "uRLQueryParametersAttr", "URLQueryParameters", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new Co)
        }, !0, Co), this.attr("HTTPMethod", "hTTPMethodAttr", "HTTPMethod", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Headers", "headersAttr", "Headers", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new ft)
        }, !0, ft), this.attr("RequestText", "requestTextAttr", "RequestText", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("RequestBinary", "requestBinaryAttr", "RequestBinary", !1, !1, t.DataTypes.BinaryData, function() {
            return t.BinaryData.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
r(gm, "ST_18a578e4f8f25852aec011d4055e28d1Structure");
var yt = gm;
yt.init();
var ci = class ci extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Product_detail", "product_detailAttr", "Product_detail", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ft)
        }, !0, Ft)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ci(new ci.RecordClass({
            product_detailAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "18cf7a63-3c2e-b19c-8f4a-71d50c228fa8"
    }
};
r(ci, "RC_18cf7a633c2eb19c8f4a71d50c228fa8");
var Eo = ci;
Eo.init();
var ui = class ui extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req4", "echo_req4Attr", "Echo_req4", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new na)
        }, !0, na)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ui(new ui.RecordClass({
            echo_req4Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d748f9b2-c205-0386-4494-73bdb4b3b0cb"
    }
};
r(ui, "RC_d748f9b2c2050386449473bdb4b3b0cb");
var ho = ui;
ho.init();
var Rm = class Rm extends t.GenericRecordList {
    static getItemType() {
        return ho
    }
};
r(Rm, "RL_18e77429a52b049bf869659c0cf9f64f");
var xm = Rm;
var ii = class ii extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StateListRequest", "stateListRequestAttr", "StateListRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ca)
        }, !0, ca)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ii(new ii.RecordClass({
            stateListRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "18ece4d5-d5de-8052-51b5-b7c411edc0a0"
    }
};
r(ii, "RC_18ece4d5d5de805251b5b7c411edc0a0");
var Lo = ii;
Lo.init();
var li = class li extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Dxtrade_status", "dxtrade_statusAttr", "Dxtrade_status", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new $r)
        }, !0, $r)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new li(new li.RecordClass({
            dxtrade_statusAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "191172c9-4e64-292c-8bf1-a2dce4b5e876"
    }
};
r(li, "RC_191172c94e64292c8bf1a2dce4b5e876");
var Vo = li;
Vo.init();
var fi = class fi extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Tax", "taxAttr", "Tax", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new br)
        }, !0, br)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new fi(new fi.RecordClass({
            taxAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "19aa8964-1c73-98ce-acf4-370c69126f64"
    }
};
r(fi, "RC_19aa89641c7398ceacf4370c69126f64");
var ko = fi;
ko.init();
var di = class di extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IDR2", "iDR2Attr", "IDR2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ua)
        }, !0, ua)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new di(new di.RecordClass({
            iDR2Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "19cbceda-d67b-422e-c73a-8118b5b40a41"
    }
};
r(di, "RC_19cbcedad67b422ec73a8118b5b40a41");
var No = di;
No.init();
var wm = class wm extends t.GenericRecordList {
    static getItemType() {
        return qa
    }
};
r(wm, "RL_19fdcf365ab6aa26528a4b518cbfcf32");
var Im = wm;
var pi = class pi extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Mt_financial_company", "mt_financial_companyAttr", "Mt_financial_company", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new cr)
        }, !0, cr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new pi(new pi.RecordClass({
            mt_financial_companyAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "39bf756e-3f16-0420-2cf1-d7ac5fb3b260"
    }
};
r(pi, "RC_39bf756e3f1604202cf1d7ac5fb3b260");
var Go = pi;
Go.init();
var Cm = class Cm extends t.GenericRecordList {
    static getItemType() {
        return Go
    }
};
r(Cm, "RL_1a2d97d3def0e6b808795f4f98a3a588");
var Pm = Cm;
var hm = class hm extends t.GenericRecordList {
    static getItemType() {
        return Oe
    }
};
r(hm, "RL_1ad625019f4848d09f7266282d4e315e");
var Em = hm;
var Ti = class Ti extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Feature_flag", "feature_flagAttr", "Feature_flag", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ia)
        }, !0, ia)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ti(new Ti.RecordClass({
            feature_flagAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "1b2532ef-629f-2b32-59be-b09a3dc495b4"
    }
};
r(Ti, "RC_1b2532ef629f2b3259beb09a3dc495b4");
var Wo = Ti;
Wo.init();
var mi = class mi extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Turnover", "turnoverAttr", "Turnover", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Pr)
        }, !0, Pr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new mi(new mi.RecordClass({
            turnoverAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "ea9565dd-c265-550c-2d38-c39dc154035f"
    }
};
r(mi, "RC_ea9565ddc265550c2d38c39dc154035f");
var _o = mi;
_o.init();
var Vm = class Vm extends t.GenericRecordList {
    static getItemType() {
        return _o
    }
};
r(Vm, "RL_1b71a02dea96d4cd97c73eba8bb674c6");
var Lm = Vm;
var Nm = class Nm extends t.GenericRecordList {
    static getItemType() {
        return q
    }
};
r(Nm, "RL_1c3088abbab1e36a4992a44ac6444a28");
var km = Nm;
var Wm = class Wm extends t.GenericRecordList {
    static getItemType() {
        return ve
    }
};
r(Wm, "RL_1d3883baf2a25f26e9aa7de12c9a4468");
var Gm = Wm;
var Hm = class Hm extends t.GenericRecordList {
    static getItemType() {
        return qe
    }
};
r(Hm, "RL_1dae29f574cdcca95ce8a85935b8f3fa");
var _m = Hm;
var yi = class yi extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("URLQueryParameter", "uRLQueryParameterAttr", "URLQueryParameter", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new mt)
        }, !0, mt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new yi(new yi.RecordClass({
            uRLQueryParameterAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "abb03290-3fc2-fb13-ecee-dc8d229aaabf"
    }
};
r(yi, "RC_abb032903fc2fb13eceedc8d229aaabf");
var Ho = yi;
Ho.init();
var Mm = class Mm extends t.GenericRecordList {
    static getItemType() {
        return Ho
    }
};
r(Mm, "RL_1dbda2318f3d93e22905fba5e14b0956");
var Fm = Mm;
var $m = class $m extends t.GenericRecordList {
    static getItemType() {
        return _t
    }
};
r($m, "RL_1dc527401e57829601dc86609514b95f");
var Bm = $m;
var Si = class Si extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DemoItem", "demoItemAttr", "DemoItem", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Zd)
        }, !0, Zd)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Si(new Si.RecordClass({
            demoItemAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f643b3ac-fc27-a4fe-cd1e-2e4d216ea947"
    }
};
r(Si, "RC_f643b3acfc27a4fecd1e2e4d216ea947");
var Fo = Si;
Fo.init();
var Jm = class Jm extends t.GenericRecordList {
    static getItemType() {
        return Fo
    }
};
r(Jm, "RL_1dea2ab8630085ef26828f80f7648065");
var qm = Jm;
var bi = class bi extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetGetSettingsResponse", "getGetSettingsResponseAttr", "GetGetSettingsResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new J)
        }, !0, J)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new bi(new bi.RecordClass({
            getGetSettingsResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a1310fc4-b666-4d1d-807e-e5336bf20c28"
    }
};
r(bi, "RC_a1310fc4b6664d1d807ee5336bf20c28");
var Mo = bi;
Mo.init();
var zm = class zm extends t.GenericRecordList {
    static getItemType() {
        return Mo
    }
};
r(zm, "RL_1e027ac5f8769ea4d4adbbcc7903f418");
var Um = zm;
var Di = class Di extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertInfo", "p2PAdvertInfoAttr", "P2PAdvertInfo", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new la)
        }, !0, la)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Di(new Di.RecordClass({
            p2PAdvertInfoAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "1e93678e-eb2c-f74d-c2fe-ef60cb655062"
    }
};
r(Di, "RC_1e93678eeb2cf74dc2feef60cb655062");
var Bo = Di;
Bo.init();
var Xm = class Xm extends t.GenericRecordList {
    static getItemType() {
        return Le
    }
};
r(Xm, "RL_1ee2701fb233e597575036a6d1cfcb5b");
var jm = Xm;
var Oi = class Oi extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Trading_experience_regulated", "trading_experience_regulatedAttr", "Trading_experience_regulated", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ma)
        }, !0, ma)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Oi(new Oi.RecordClass({
            trading_experience_regulatedAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "602d30d2-5172-58c1-7f17-cacc00827d33"
    }
};
r(Oi, "RC_602d30d2517258c17f17cacc00827d33");
var $o = Oi;
$o.init();
var Ym = class Ym extends t.GenericRecordList {
    static getItemType() {
        return $o
    }
};
r(Ym, "RL_1f4f73f3e46b4a334991485ac13ee1d2");
var Qm = Ym;
var Ai = class Ai extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserCreateRequest", "p2PAdvertiserCreateRequestAttr", "P2PAdvertiserCreateRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Je)
        }, !0, Je)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ai(new Ai.RecordClass({
            p2PAdvertiserCreateRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c42160ad-5158-80f4-7b5a-0f78fe1a495c"
    }
};
r(Ai, "RC_c42160ad515880f47b5a0f78fe1a495c");
var qo = Ai;
qo.init();
var Zm = class Zm extends t.GenericRecordList {
    static getItemType() {
        return qo
    }
};
r(Zm, "RL_2053af017804ccdd2b9c3428357fafcc");
var Km = Zm;
var vi = class vi extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserInfoRequest", "p2PAdvertiserInfoRequestAttr", "P2PAdvertiserInfoRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ue)
        }, !0, Ue)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new vi(new vi.RecordClass({
            p2PAdvertiserInfoRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2058a904-a5af-7403-07bc-28a7bafc955c"
    }
};
r(vi, "RC_2058a904a5af740307bc28a7bafc955c");
var Jo = vi;
Jo.init();
var gi = class gi extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Local_currency2", "local_currency2Attr", "Local_currency2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ya)
        }, !0, ya)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new gi(new gi.RecordClass({
            local_currency2Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2081831f-b79d-9a80-56f0-4161074e9cd5"
    }
};
r(gi, "RC_2081831fb79d9a8056f04161074e9cd5");
var Uo = gi;
Uo.init();
var xi = class xi extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("After_first_deposit", "after_first_depositAttr", "After_first_deposit", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Wt)
        }, !0, Wt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new xi(new xi.RecordClass({
            after_first_depositAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a336dc96-fafc-2e7f-fdb8-8fdcc24fe482"
    }
};
r(xi, "RC_a336dc96fafc2e7ffdb88fdcc24fe482");
var zo = xi;
zo.init();
var ty = class ty extends t.GenericRecordList {
    static getItemType() {
        return zo
    }
};
r(ty, "RL_2083bc83b9d077075ef50c2bd63b6965");
var ey = ty;
var ry = class ry extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Account_turnover", "account_turnoverAttr", "account_turnover", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Binary_options_trading_experience", "binary_options_trading_experienceAttr", "binary_options_trading_experience", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Binary_options_trading_frequency", "binary_options_trading_frequencyAttr", "binary_options_trading_frequency", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Cfd_experience", "cfd_experienceAttr", "cfd_experience", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Cfd_frequency", "cfd_frequencyAttr", "cfd_frequency", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Cfd_score", "cfd_scoreAttr", "cfd_score", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Cfd_trading_definition", "cfd_trading_definitionAttr", "cfd_trading_definition", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Cfd_trading_experience", "cfd_trading_experienceAttr", "cfd_trading_experience", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Cfd_trading_frequency", "cfd_trading_frequencyAttr", "cfd_trading_frequency", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Education_level", "education_levelAttr", "education_level", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Employment_industry", "employment_industryAttr", "employment_industry", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Employment_status", "employment_statusAttr", "employment_status", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Estimated_worth", "estimated_worthAttr", "estimated_worth", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Financial_information_score", "financial_information_scoreAttr", "financial_information_score", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Forex_trading_experience", "forex_trading_experienceAttr", "forex_trading_experience", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Forex_trading_frequency", "forex_trading_frequencyAttr", "forex_trading_frequency", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Income_source", "income_sourceAttr", "income_source", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Leverage_impact_trading", "leverage_impact_tradingAttr", "leverage_impact_trading", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Leverage_trading_high_risk_stop_loss", "leverage_trading_high_risk_stop_lossAttr", "leverage_trading_high_risk_stop_loss", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Net_income", "net_incomeAttr", "net_income", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Occupation", "occupationAttr", "occupation", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Other_instruments_trading_experience", "other_instruments_trading_experienceAttr", "other_instruments_trading_experience", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Other_instruments_trading_frequency", "other_instruments_trading_frequencyAttr", "other_instruments_trading_frequency", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Required_initial_margin", "required_initial_marginAttr", "required_initial_margin", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Risk_tolerance", "risk_toleranceAttr", "risk_tolerance", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Source_of_experience", "source_of_experienceAttr", "source_of_experience", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Source_of_wealth", "source_of_wealthAttr", "source_of_wealth", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Total_score", "total_scoreAttr", "total_score", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Trading_experience_financial_instruments", "trading_experience_financial_instrumentsAttr", "trading_experience_financial_instruments", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Trading_frequency_financial_instruments", "trading_frequency_financial_instrumentsAttr", "trading_frequency_financial_instruments", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Trading_score", "trading_scoreAttr", "trading_score", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
r(ry, "ST_208e1267462dd33d72d9f93fbdadf43aStructure");
var Ie = ry;
Ie.init();
var oy = class oy extends t.GenericRecordList {
    static getItemType() {
        return Ua
    }
};
r(oy, "RL_20b2cecd28cd80176a8fad0613d319b3");
var ay = oy;
var Ri = class Ri extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Mt5_new_accountItem", "mt5_new_accountItemAttr", "Mt5_new_accountItem", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Sa)
        }, !0, Sa)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ri(new Ri.RecordClass({
            mt5_new_accountItemAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "210d3c7c-0382-d69c-0f14-edb5d1eb7d2c"
    }
};
r(Ri, "RC_210d3c7c0382d69c0f14edb5d1eb7d2c");
var jo = Ri;
jo.init();
var ny = class ny extends t.GenericRecordList {
    static getItemType() {
        return jo
    }
};
r(ny, "RL_21a53417044e5801f591fd68a063d1de");
var sy = ny;
var Ii = class Ii extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Onfido", "onfidoAttr", "Onfido", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new vr)
        }, !0, vr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ii(new Ii.RecordClass({
            onfidoAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6da37637-b059-3f4e-c39c-bdb7fca0818f"
    }
};
r(Ii, "RC_6da37637b0593f4ec39cbdb7fca0818f");
var Xo = Ii;
Xo.init();
var uy = class uy extends t.GenericRecordList {
    static getItemType() {
        return Xo
    }
};
r(uy, "RL_21aa582dbaa7e503639ee59cca230a00");
var cy = uy;
var wi = class wi extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Jurisdiction_risk_assessment", "jurisdiction_risk_assessmentAttr", "Jurisdiction_risk_assessment", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Cr)
        }, !0, Cr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new wi(new wi.RecordClass({
            jurisdiction_risk_assessmentAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "30490951-2908-54c2-926b-2cf8ec7b4a20"
    }
};
r(wi, "RC_30490951290854c2926b2cf8ec7b4a20");
var Qo = wi;
Qo.init();
var ly = class ly extends t.GenericRecordList {
    static getItemType() {
        return Qo
    }
};
r(ly, "RL_222c4cca834a8b261e24304f207bc884");
var iy = ly;
var dy = class dy extends t.GenericRecordList {
    static getItemType() {
        return ba
    }
};
r(dy, "RL_2249cd644da747f0537bdd3570d34b56");
var fy = dy;
var Pi = class Pi extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Max_requestes_general", "max_requestes_generalAttr", "Max_requestes_general", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Wr)
        }, !0, Wr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Pi(new Pi.RecordClass({
            max_requestes_generalAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "224fc997-0e96-93b0-73b4-9748bfa1459a"
    }
};
r(Pi, "RC_224fc9970e9693b073b49748bfa1459a");
var Yo = Pi;
Yo.init();
var Ci = class Ci extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Platform", "platformAttr", "Platform", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Hr)
        }, !0, Hr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ci(new Ci.RecordClass({
            platformAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2296852f-b68f-fc0d-98bf-144361127c38"
    }
};
r(Ci, "RC_2296852fb68ffc0d98bf144361127c38");
var Ko = Ci;
Ko.init();
var Ei = class Ei extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostAuthorizeRequest", "postAuthorizeRequestAttr", "PostAuthorizeRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ze)
        }, !0, ze)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ei(new Ei.RecordClass({
            postAuthorizeRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "236b9780-ed98-eefd-23c7-d452d5b32785"
    }
};
r(Ei, "RC_236b9780ed98eefd23c7d452d5b32785");
var Zo = Ei;
Zo.init();
var hi = class hi extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Get_financial_assessment", "get_financial_assessmentAttr", "Get_financial_assessment", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ie)
        }, !0, Ie)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new hi(new hi.RecordClass({
            get_financial_assessmentAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "239599f6-248b-b8d7-ef24-6b2e5fd1c9f4"
    }
};
r(hi, "RC_239599f6248bb8d7ef246b2e5fd1c9f4");
var es = hi;
es.init();
var Ty = class Ty extends t.GenericRecordList {
    static getItemType() {
        return Kr
    }
};
r(Ty, "RL_23c5170e5cae92676806075f1dc0926f");
var py = Ty;
var yy = class yy extends t.GenericRecordList {
    static getItemType() {
        return P
    }
};
r(yy, "RL_24d00c079b23f7e47e2ee86991545c06");
var my = yy;
var Li = class Li extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ChatResponse", "chatResponseAttr", "ChatResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Oa)
        }, !0, Oa)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Li(new Li.RecordClass({
            chatResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f67acfc2-edb3-49f3-9f53-1637fcf64924"
    }
};
r(Li, "RC_f67acfc2edb349f39f531637fcf64924");
var ts = Li;
ts.init();
var by = class by extends t.GenericRecordList {
    static getItemType() {
        return ts
    }
};
r(by, "RL_24d759ee687c211ac7033a77a13d226f");
var Sy = by;
var Oy = class Oy extends t.GenericRecordList {
    static getItemType() {
        return Jt
    }
};
r(Oy, "RL_25008888c069155597e1a02e1b9ea813");
var Dy = Oy;
var Vi = class Vi extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostNewAccountVirtualResponse", "postNewAccountVirtualResponseAttr", "PostNewAccountVirtualResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new G)
        }, !0, G)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Vi(new Vi.RecordClass({
            postNewAccountVirtualResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "96175866-bef7-bdbf-7496-5597575b319c"
    }
};
r(Vi, "RC_96175866bef7bdbf74965597575b319c");
var rs = Vi;
rs.init();
var vy = class vy extends t.GenericRecordList {
    static getItemType() {
        return rs
    }
};
r(vy, "RL_2567d50fd0e540a33e71ee0dd4edef5d");
var Ay = vy;
var ki = class ki extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StateList2", "stateList2Attr", "StateList2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ba)
        }, !0, ba)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ki(new ki.RecordClass({
            stateList2Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e8ee0dbc-2253-234a-59bc-e144fb184297"
    }
};
r(ki, "RC_e8ee0dbc2253234a59bce144fb184297");
var as = ki;
as.init();
var xy = class xy extends t.GenericRecordList {
    static getItemType() {
        return as
    }
};
r(xy, "RL_25c69d60a99eff98bc1861f4dbb035a0");
var gy = xy;
var Ni = class Ni extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Landing_company", "landing_companyAttr", "Landing_company", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ur)
        }, !0, ur)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ni(new Ni.RecordClass({
            landing_companyAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e1b3eaed-bd13-3d4e-bfdb-497dc119e9c1"
    }
};
r(Ni, "RC_e1b3eaedbd133d4ebfdb497dc119e9c1");
var os = Ni;
os.init();
var Iy = class Iy extends t.GenericRecordList {
    static getItemType() {
        return os
    }
};
r(Iy, "RL_25ca4d2fe256f651a7214d9f28b70caa");
var Ry = Iy;
var Py = class Py extends t.GenericRecordList {
    static getItemType() {
        return Aa
    }
};
r(Py, "RL_260232560d4d04c2013fce278e787f24");
var wy = Py;
var Gi = class Gi extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("KYCAuthStatusRequest", "kYCAuthStatusRequestAttr", "KYCAuthStatusRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new je)
        }, !0, je)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Gi(new Gi.RecordClass({
            kYCAuthStatusRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "264d82ff-2942-8f3c-d43e-be0810111d5a"
    }
};
r(Gi, "RC_264d82ff29428f3cd43ebe0810111d5a");
var ss = Gi;
ss.init();
var Wi = class Wi extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostTradingPlatformNewAccountRequest", "postTradingPlatformNewAccountRequestAttr", "PostTradingPlatformNewAccountRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new dt)
        }, !0, dt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Wi(new Wi.RecordClass({
            postTradingPlatformNewAccountRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "27f77107-e985-9b58-a9ad-44fa7a42ad70"
    }
};
r(Wi, "RC_27f77107e9859b58a9ad44fa7a42ad70");
var ns = Wi;
ns.init();
var _i = class _i extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Currencies_config", "currencies_configAttr", "Currencies_config", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Br)
        }, !0, Br)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new _i(new _i.RecordClass({
            currencies_configAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2827a9b1-8791-37de-b3aa-a08d45397068"
    }
};
r(_i, "RC_2827a9b1879137deb3aaa08d45397068");
var cs = _i;
cs.init();
var Hi = class Hi extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetAssetIndexResponse", "getAssetIndexResponseAttr", "GetAssetIndexResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new U)
        }, !0, U)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Hi(new Hi.RecordClass({
            getAssetIndexResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2838f738-beb9-0761-e9ec-634e42207f58"
    }
};
r(Hi, "RC_2838f738beb90761e9ec634e42207f58");
var us = Hi;
us.init();
var Fi = class Fi extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Document", "documentAttr", "Document", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new wt)
        }, !0, wt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Fi(new Fi.RecordClass({
            documentAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "288f369a-ef43-887c-2cd0-e3a40ac97aef"
    }
};
r(Fi, "RC_288f369aef43887c2cd0e3a40ac97aef");
var is = Fi;
is.init();
var Mi = class Mi extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderCancelRequest", "p2POrderCancelRequestAttr", "P2POrderCancelRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Xe)
        }, !0, Xe)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Mi(new Mi.RecordClass({
            p2POrderCancelRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "31374cc3-19a3-3edc-2c32-77744eb207a6"
    }
};
r(Mi, "RC_31374cc319a33edc2c3277744eb207a6");
var ls = Mi;
ls.init();
var Ey = class Ey extends t.GenericRecordList {
    static getItemType() {
        return ls
    }
};
r(Ey, "RL_28998766f8c046c9335904011fbbefd7");
var Cy = Ey;
var Bi = class Bi extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("National_identity_card", "national_identity_cardAttr", "National_identity_card", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Or)
        }, !0, Or)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Bi(new Bi.RecordClass({
            national_identity_cardAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "82e915cb-6126-9c2e-1fb3-0ed84469e07b"
    }
};
r(Bi, "RC_82e915cb61269c2e1fb30ed84469e07b");
var fs = Bi;
fs.init();
var Ly = class Ly extends t.GenericRecordList {
    static getItemType() {
        return fs
    }
};
r(Ly, "RL_29080a69ee1ce69b9b697bf94281f9ff");
var hy = Ly;
var $i = class $i extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Non_participating_jurisdiction", "non_participating_jurisdictionAttr", "Non_participating_jurisdiction", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Sr)
        }, !0, Sr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new $i(new $i.RecordClass({
            non_participating_jurisdictionAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "cd5e42a0-793d-8eb6-9fbc-5056fff3f372"
    }
};
r($i, "RC_cd5e42a0793d8eb69fbc5056fff3f372");
var ds = $i;
ds.init();
var ky = class ky extends t.GenericRecordList {
    static getItemType() {
        return ds
    }
};
r(ky, "RL_296c80117ea3feed92d93a9342c06001");
var Vy = ky;
var Ny = class Ny extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StatusCode", "statusCodeAttr", "StatusCode", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("StatusLine", "statusLineAttr", "StatusLine", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Headers", "headersAttr", "Headers", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new ft)
        }, !0, ft), this.attr("ResponseText", "responseTextAttr", "ResponseText", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("ResponseBinary", "responseBinaryAttr", "ResponseBinary", !1, !1, t.DataTypes.BinaryData, function() {
            return t.BinaryData.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
r(Ny, "ST_d521c1d83421a832ffbd8b853bf43c98Structure");
var St = Ny;
St.init();
var Wy = class Wy extends t.GenericRecordList {
    static getItemType() {
        return St
    }
};
r(Wy, "RL_2b07530ab95955b415e0d47b20046870");
var Gy = Wy;
var Hy = class Hy extends t.GenericRecordList {
    static getItemType() {
        return Yt
    }
};
r(Hy, "RL_2b1a3419eafdbc343d89f210b76f82c7");
var _y = Hy;
var qi = class qi extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ServiceTokenResponse", "serviceTokenResponseAttr", "ServiceTokenResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new z)
        }, !0, z)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new qi(new qi.RecordClass({
            serviceTokenResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2b27eac2-43a7-0dcd-c8d6-ad57a1a8b8af"
    }
};
r(qi, "RC_2b27eac243a70dcdc8d6ad57a1a8b8af");
var ps = qi;
ps.init();
var Ji = class Ji extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetMT5LoginListResponse", "getMT5LoginListResponseAttr", "GetMT5LoginListResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new j)
        }, !0, j)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ji(new Ji.RecordClass({
            getMT5LoginListResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5c073669-af4d-1bb9-a059-222c06ae3a49"
    }
};
r(Ji, "RC_5c073669af4d1bb9a059222c06ae3a49");
var Ts = Ji;
Ts.init();
var My = class My extends t.GenericRecordList {
    static getItemType() {
        return Ts
    }
};
r(My, "RL_2bc6600c37d3f99d4190f0fccf1bad67");
var Fy = My;
var Ui = class Ui extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Asset_indexItem", "asset_indexItemAttr", "Asset_indexItem", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ap)
        }, !0, ap)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ui(new Ui.RecordClass({
            asset_indexItemAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2bf25d62-d530-e43a-49ce-5fb7ed436ea0"
    }
};
r(Ui, "RC_2bf25d62d530e43a49ce5fb7ed436ea0");
var ms = Ui;
ms.init();
var $y = class $y extends t.GenericRecordList {
    static getItemType() {
        return No
    }
};
r($y, "RL_2bf38081f793cc6bdbb750e00466b9fc");
var By = $y;
var Jy = class Jy extends t.GenericRecordList {
    static getItemType() {
        return Uo
    }
};
r(Jy, "RL_2c050584f5f999c4a429248dacf4dd97");
var qy = Jy;
var zi = class zi extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderConfirmResponse", "p2POrderConfirmResponseAttr", "P2POrderConfirmResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new X)
        }, !0, X)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new zi(new zi.RecordClass({
            p2POrderConfirmResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2ccf07e5-bcc4-c939-49f8-4625930efb62"
    }
};
r(zi, "RC_2ccf07e5bcc4c93949f84625930efb62");
var ys = zi;
ys.init();
var ji = class ji extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostTradingPlatformAvailableAccountResponseCtrader", "postTradingPlatformAvailableAccountResponseCtraderAttr", "PostTradingPlatformAvailableAccountResponseCtrader", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new P)
        }, !0, P)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ji(new ji.RecordClass({
            postTradingPlatformAvailableAccountResponseCtraderAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f4690c82-1393-576c-d1cd-e60070daa64f"
    }
};
r(ji, "RC_f4690c821393576cd1cde60070daa64f");
var Ss = ji;
Ss.init();
var zy = class zy extends t.GenericRecordList {
    static getItemType() {
        return Ss
    }
};
r(zy, "RL_2d46a49728c41d7be4ec88ca0d4e8266");
var Uy = zy;
var Xi = class Xi extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Limit", "limitAttr", "Limit", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new hr)
        }, !0, hr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Xi(new Xi.RecordClass({
            limitAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "441f684d-3efb-a387-3565-54fe17c62bec"
    }
};
r(Xi, "RC_441f684d3efba387356554fe17c62bec");
var bs = Xi;
bs.init();
var Xy = class Xy extends t.GenericRecordList {
    static getItemType() {
        return bs
    }
};
r(Xy, "RL_2d74cc19c3ab1a029c34be65ea3b289a");
var jy = Xy;
var Yy = class Yy extends t.GenericRecordList {
    static getItemType() {
        return da
    }
};
r(Yy, "RL_2e550e70d4f60fcf474568418d9dcf73");
var Qy = Yy;
var Qi = class Qi extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Fiat", "fiatAttr", "Fiat", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Fr)
        }, !0, Fr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Qi(new Qi.RecordClass({
            fiatAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2e6da4a8-98d5-5ae9-6aab-51b6e09d6a22"
    }
};
r(Qi, "RC_2e6da4a898d55ae96aab51b6e09d6a22");
var Ds = Qi;
Ds.init();
var Zy = class Zy extends t.GenericRecordList {
    static getItemType() {
        return ps
    }
};
r(Zy, "RL_2e8ff77664b8f7bc11c223ef3badd7c7");
var Ky = Zy;
var Yi = class Yi extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("KYCAuthStatusResponse", "kYCAuthStatusResponseAttr", "KYCAuthStatusResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Q)
        }, !0, Q)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Yi(new Yi.RecordClass({
            kYCAuthStatusResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "98e502ff-c9bd-2440-1241-ef277fce403c"
    }
};
r(Yi, "RC_98e502ffc9bd24401241ef277fce403c");
var Os = Yi;
Os.init();
var tS = class tS extends t.GenericRecordList {
    static getItemType() {
        return Os
    }
};
r(tS, "RL_2f1c969e24c9ba731c5c1c39ceea50ec");
var eS = tS;
var Ki = class Ki extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Max_proposal_subscription", "max_proposal_subscriptionAttr", "Max_proposal_subscription", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Gr)
        }, !0, Gr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ki(new Ki.RecordClass({
            max_proposal_subscriptionAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "71e7722a-7761-502e-1fc1-ee9175838bd9"
    }
};
r(Ki, "RC_71e7722a7761502e1fc1ee9175838bd9");
var As = Ki;
As.init();
var aS = class aS extends t.GenericRecordList {
    static getItemType() {
        return As
    }
};
r(aS, "RL_2f43bfa975a498b49479ea4ecbc98b48");
var rS = aS;
var Zi = class Zi extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Mt5_status", "mt5_statusAttr", "Mt5_status", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new qr)
        }, !0, qr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Zi(new Zi.RecordClass({
            mt5_statusAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7a9f1d8f-cf08-e196-ae4f-cb70fce3ae4d"
    }
};
r(Zi, "RC_7a9f1d8fcf08e196ae4fcb70fce3ae4d");
var vs = Zi;
vs.init();
var sS = class sS extends t.GenericRecordList {
    static getItemType() {
        return vs
    }
};
r(sS, "RL_30996d47f459830cdd860ac4090ef40a");
var oS = sS;
var el = class el extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostTradingPlatformNewAccountResponse", "postTradingPlatformNewAccountResponseAttr", "PostTradingPlatformNewAccountResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Tt)
        }, !0, Tt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new el(new el.RecordClass({
            postTradingPlatformNewAccountResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "9eb8d65b-d2ac-d82d-7d61-9cde9470b633"
    }
};
r(el, "RC_9eb8d65bd2acd82d7d619cde9470b633");
var gs = el;
gs.init();
var cS = class cS extends t.GenericRecordList {
    static getItemType() {
        return gs
    }
};
r(cS, "RL_30e322a3cf46f048dc55f756d0478593");
var nS = cS;
var tl = class tl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostResetPasswordResponse", "postResetPasswordResponseAttr", "PostResetPasswordResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new _)
        }, !0, _)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new tl(new tl.RecordClass({
            postResetPasswordResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "30f7e77f-4f85-f62f-55a7-49d558899db1"
    }
};
r(tl, "RC_30f7e77f4f85f62f55a749d558899db1");
var xs = tl;
xs.init();
var rl = class rl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Url_parameter", "url_parameterAttr", "Url_parameter", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ht)
        }, !0, ht)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new rl(new rl.RecordClass({
            url_parameterAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "31254dd0-eceb-66de-83ea-4d3f76038ef7"
    }
};
r(rl, "RC_31254dd0eceb66de83ea4d3f76038ef7");
var Rs = rl;
Rs.init();
var al = class al extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PChatCreateResponse", "p2PChatCreateResponseAttr", "P2PChatCreateResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Y)
        }, !0, Y)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new al(new al.RecordClass({
            p2PChatCreateResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f5d4a2f5-a332-d76f-5ccc-15cdf118da23"
    }
};
r(al, "RC_f5d4a2f5a332d76f5ccc15cdf118da23");
var Is = al;
Is.init();
var iS = class iS extends t.GenericRecordList {
    static getItemType() {
        return Is
    }
};
r(iS, "RL_33edd9b86cc900a5c27fee339170b32d");
var uS = iS;
var ol = class ol extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderCreateRequest", "p2POrderCreateRequestAttr", "P2POrderCreateRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Qe)
        }, !0, Qe)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ol(new ol.RecordClass({
            p2POrderCreateRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "905c1d78-5335-0013-6fba-e2d1469b85c5"
    }
};
r(ol, "RC_905c1d78533500136fbae2d1469b85c5");
var ws = ol;
ws.init();
var fS = class fS extends t.GenericRecordList {
    static getItemType() {
        return ws
    }
};
r(fS, "RL_34e8557baae595dff1b0bd54b344a395");
var lS = fS;
var pS = class pS extends t.GenericRecordList {
    static getItemType() {
        return K
    }
};
r(pS, "RL_351ccc651b9c0a8538ed48a164756a75");
var dS = pS;
var sl = class sl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Requirement", "requirementAttr", "Requirement", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ht)
        }, !0, Ht)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new sl(new sl.RecordClass({
            requirementAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e693c35b-4813-1a7d-9d29-6aba5185b8c6"
    }
};
r(sl, "RC_e693c35b48131a7d9d296aba5185b8c6");
var Ps = sl;
Ps.init();
var mS = class mS extends t.GenericRecordList {
    static getItemType() {
        return Ps
    }
};
r(mS, "RL_354382860a4523a089cd5a3761912fe2");
var TS = mS;
var SS = class SS extends t.GenericRecordList {
    static getItemType() {
        return Ar
    }
};
r(SS, "RL_357030bc20ba450abe6756927d50ad98");
var yS = SS;
var DS = class DS extends t.GenericRecordList {
    static getItemType() {
        return $
    }
};
r(DS, "RL_35a3e1f455c3dbbaa14c7a628aaa1ba3");
var bS = DS;
var AS = class AS extends t.GenericRecordList {
    static getItemType() {
        return Ce
    }
};
r(AS, "RL_35e2cb93968d7c489481f7d30eeb5afd");
var OS = AS;
var gS = class gS extends t.GenericRecordList {
    static getItemType() {
        return Sa
    }
};
r(gS, "RL_35f83b3d4ef557b9a9bf6629bdb261f7");
var vS = gS;
var RS = class RS extends t.GenericRecordList {
    static getItemType() {
        return xa
    }
};
r(RS, "RL_360fcdf4e596d82c75762f808854a5a1");
var xS = RS;
var wS = class wS extends t.GenericRecordList {
    static getItemType() {
        return je
    }
};
r(wS, "RL_36ff7df6547fc6551e99dc50dec2ec00");
var IS = wS;
var CS = class CS extends t.GenericRecordList {
    static getItemType() {
        return ir
    }
};
r(CS, "RL_37550157d48087a2b4e428de3d9521d0");
var PS = CS;
var nl = class nl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserAdvertsResponse", "p2PAdvertiserAdvertsResponseAttr", "P2PAdvertiserAdvertsResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Z)
        }, !0, Z)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new nl(new nl.RecordClass({
            p2PAdvertiserAdvertsResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5709f0ba-27cf-be0e-e5ee-bb438acbd667"
    }
};
r(nl, "RC_5709f0ba27cfbe0ee5eebb438acbd667");
var Cs = nl;
Cs.init();
var hS = class hS extends t.GenericRecordList {
    static getItemType() {
        return Cs
    }
};
r(hS, "RL_37f2873798bf421962ea50333055fbe6");
var ES = hS;
var cl = class cl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("KYC_Address", "kYC_AddressAttr", "KYC_Address", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new lr)
        }, !0, lr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new cl(new cl.RecordClass({
            kYC_AddressAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "60071085-ccdc-1a93-9c98-b76e05aec53e"
    }
};
r(cl, "RC_60071085ccdc1a939c98b76e05aec53e");
var Es = cl;
Es.init();
var VS = class VS extends t.GenericRecordList {
    static getItemType() {
        return Es
    }
};
r(VS, "RL_3860d269e9dd680bb74541283f709b44");
var LS = VS;
var NS = class NS extends t.GenericRecordList {
    static getItemType() {
        return Dr
    }
};
r(NS, "RL_386f6a281c08d72d0376417e02fe0b4b");
var kS = NS;
var ul = class ul extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("HTTPResponse", "hTTPResponseAttr", "HTTPResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new St)
        }, !0, St)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ul(new ul.RecordClass({
            hTTPResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6868d986-09c1-4050-d7d7-3f2cb7e44e62"
    }
};
r(ul, "RC_6868d98609c14050d7d73f2cb7e44e62");
var hs = ul;
hs.init();
var WS = class WS extends t.GenericRecordList {
    static getItemType() {
        return hs
    }
};
r(WS, "RL_38e2f6aea80afed1f36b3e2c097d68ac");
var GS = WS;
var il = class il extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("LoginHistory", "loginHistoryAttr", "LoginHistory", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new np)
        }, !0, np)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new il(new il.RecordClass({
            loginHistoryAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "3a05443c-535c-9845-39df-34bdb9b3f117"
    }
};
r(il, "RC_3a05443c535c984539df34bdb9b3f117");
var Ls = il;
Ls.init();
var ll = class ll extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Api_call_limit", "api_call_limitAttr", "Api_call_limit", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new _r)
        }, !0, _r)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ll(new ll.RecordClass({
            api_call_limitAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "3a2d986a-770a-9c3e-6f10-96b16961e5a9"
    }
};
r(ll, "RC_3a2d986a770a9c3e6f1096b16961e5a9");
var Vs = ll;
Vs.init();
var HS = class HS extends t.GenericRecordList {
    static getItemType() {
        return z
    }
};
r(HS, "RL_3a9fb32bad24cac6334039ea3a90ab41");
var _S = HS;
var fl = class fl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IDVDocumentAddRequest", "iDVDocumentAddRequestAttr", "IDVDocumentAddRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ye)
        }, !0, Ye)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new fl(new fl.RecordClass({
            iDVDocumentAddRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "ee45c2d9-55f3-8571-a263-1cf48c22c217"
    }
};
r(fl, "RC_ee45c2d955f38571a2631cf48c22c217");
var ks = fl;
ks.init();
var MS = class MS extends t.GenericRecordList {
    static getItemType() {
        return ks
    }
};
r(MS, "RL_3aafd554dca4ac72ea77647f2a1258e3");
var FS = MS;
var $S = class $S extends t.GenericRecordList {
    static getItemType() {
        return ee
    }
};
r($S, "RL_3adc943e052fb4ede1c36a156e01df95");
var BS = $S;
var dl = class dl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Config", "configAttr", "Config", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new jt)
        }, !0, jt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new dl(new dl.RecordClass({
            configAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "3c60a184-6470-070c-1bba-e2a1d22163d2"
    }
};
r(dl, "RC_3c60a1846470070c1bbae2a1d22163d2");
var Ns = dl;
Ns.init();
var pl = class pl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("SetSettingsRequest", "setSettingsRequestAttr", "SetSettingsRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new _e)
        }, !0, _e)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new pl(new pl.RecordClass({
            setSettingsRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "73205161-18aa-6508-370e-b4c09e583c84"
    }
};
r(pl, "RC_7320516118aa6508370eb4c09e583c84");
var Gs = pl;
Gs.init();
var JS = class JS extends t.GenericRecordList {
    static getItemType() {
        return Gs
    }
};
r(JS, "RL_3c898c4aa1038e5ba7cd2e3e10d93b3d");
var qS = JS;
var US = class US extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Secret_key", "secret_keyAttr", "secret_key", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("IsEnabled", "isEnabledAttr", "is_enabled", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
r(US, "ST_95059c38875a3b2411ec7f8d7e1989c3Structure");
var we = US;
we.init();
var Tl = class Tl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Totp", "totpAttr", "totp", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new we)
        }, !0, we)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Tl(new Tl.RecordClass({
            totpAttr: t.ImmutableBase.getData(a)
        }))
    }
};
r(Tl, "ST_ae775a2cc2e18d8759296014d000a6f9Structure");
var Pe = Tl;
Pe.init();
var ml = class ml extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Account_security", "account_securityAttr", "account_security", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Pe)
        }, !0, Pe)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ml(new ml.RecordClass({
            account_securityAttr: t.ImmutableBase.getData(a)
        }))
    }
};
r(ml, "ST_de93cbce08f69d33a4b34a41c51d08a2Structure");
var bt = ml;
bt.init();
var jS = class jS extends t.GenericRecordList {
    static getItemType() {
        return bt
    }
};
r(jS, "RL_3cd453b73b850c0baf7ea6a4b0ebe3d0");
var zS = jS;
var yl = class yl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("TradingPlatformAvailableAccounts", "tradingPlatformAvailableAccountsAttr", "TradingPlatformAvailableAccounts", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ra)
        }, !0, Ra)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new yl(new yl.RecordClass({
            tradingPlatformAvailableAccountsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "deb49656-ca36-ac30-3bff-f5ecbe52b196"
    }
};
r(yl, "RC_deb49656ca36ac303bfff5ecbe52b196");
var Ws = yl;
Ws.init();
var QS = class QS extends t.GenericRecordList {
    static getItemType() {
        return Ws
    }
};
r(QS, "RL_3cdb40add777d21caa9a01b033bdd702");
var XS = QS;
var Sl = class Sl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostTradingPlatformAccountsResponse", "postTradingPlatformAccountsResponseAttr", "PostTradingPlatformAccountsResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ee)
        }, !0, Ee)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Sl(new Sl.RecordClass({
            postTradingPlatformAccountsResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "3ce5a011-7187-c9d1-b6ee-0d6f65f07553"
    }
};
r(Sl, "RC_3ce5a0117187c9d1b6ee0d6f65f07553");
var _s = Sl;
_s.init();
var KS = class KS extends t.GenericRecordList {
    static getItemType() {
        return zr
    }
};
r(KS, "RL_3da257b38954975290536b7e144f85a1");
var YS = KS;
var eb = class eb extends t.GenericRecordList {
    static getItemType() {
        return Ur
    }
};
r(eb, "RL_3dd031951f15020fcf2011e126c45859");
var ZS = eb;
var rb = class rb extends t.GenericRecordList {
    static getItemType() {
        return Pr
    }
};
r(rb, "RL_3ddab8163c31ef065226c1ec689ad1e9");
var tb = rb;
var ob = class ob extends t.GenericRecordList {
    static getItemType() {
        return Ke
    }
};
r(ob, "RL_3e24cd4a78a15b6185b1b9dd6cb6a553");
var ab = ob;
var bl = class bl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Account_listItem2", "account_listItem2Attr", "Account_listItem2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new sp)
        }, !0, sp)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new bl(new bl.RecordClass({
            account_listItem2Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "3e628d7d-792d-29fe-0a1a-8c7463cb9df4"
    }
};
r(bl, "RC_3e628d7d792d29fe0a1a8c7463cb9df4");
var Hs = bl;
Hs.init();
var Dl = class Dl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("LoginHistoryResponse", "loginHistoryResponseAttr", "LoginHistoryResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new te)
        }, !0, te)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Dl(new Dl.RecordClass({
            loginHistoryResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "97911e72-0405-71d3-4b10-f1ecb9e4b4ab"
    }
};
r(Dl, "RC_97911e72040571d34b10f1ecb9e4b4ab");
var Fs = Dl;
Fs.init();
var nb = class nb extends t.GenericRecordList {
    static getItemType() {
        return Fs
    }
};
r(nb, "RL_3eb3396269cac08cf750e4a2b75c6321");
var sb = nb;
var ub = class ub extends t.GenericRecordList {
    static getItemType() {
        return H
    }
};
r(ub, "RL_3f2ac242127a6c8f8eecade02bd1a934");
var cb = ub;
var Ol = class Ol extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Documents_supported2", "documents_supported2Attr", "Documents_supported2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ar)
        }, !0, Ar)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ol(new Ol.RecordClass({
            documents_supported2Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "3f4d741c-30bd-5473-dc9c-679433c442c3"
    }
};
r(Ol, "RC_3f4d741c30bd5473dc9c679433c442c3");
var Ms = Ol;
Ms.init();
var lb = class lb extends t.GenericRecordList {
    static getItemType() {
        return dt
    }
};
r(lb, "RL_3ffb39714a28628874cb1e11f1dbd5e4");
var ib = lb;
var Al = class Al extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertList", "p2PAdvertListAttr", "P2PAdvertList", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new mr)
        }, !0, mr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Al(new Al.RecordClass({
            p2PAdvertListAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "403419e7-2476-e3a4-7280-a2d420ccc9e0"
    }
};
r(Al, "RC_403419e72476e3a47280a2d420ccc9e0");
var Bs = Al;
Bs.init();
var db = class db extends t.GenericRecordList {
    static getItemType() {
        return Ae
    }
};
r(db, "RL_409d5d24f3ff15709c6eb8292127d3ba");
var fb = db;
var vl = class vl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("FetchStatesListRequest", "fetchStatesListRequestAttr", "FetchStatesListRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ze)
        }, !0, Ze)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new vl(new vl.RecordClass({
            fetchStatesListRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "40eef503-a8ea-72db-a0e9-29f47890471d"
    }
};
r(vl, "RC_40eef503a8ea72dba0e929f47890471d");
var $s = vl;
$s.init();
var Tb = class Tb extends t.GenericRecordList {
    static getItemType() {
        return ko
    }
};
r(Tb, "RL_4153455d8943850f971d65d82f35900b");
var pb = Tb;
var yb = class yb extends t.GenericRecordList {
    static getItemType() {
        return Yo
    }
};
r(yb, "RL_41e67aa458234493e723d2243db01144");
var mb = yb;
var Sb = class Sb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Label", "labelAttr", "Label", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Order", "orderAttr", "Order", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Is_Active", "is_ActiveAttr", "Is_Active", !0, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
r(Sb, "EN_95096fd7ce0528eba549110f4ff009ffEntityRecord");
var xt = Sb;
xt.init();
var gl = class gl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ConsoleErrorType", "consoleErrorTypeAttr", "ConsoleErrorType", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new xt)
        }, !0, xt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new gl(new gl.RecordClass({
            consoleErrorTypeAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5e259c61-591c-7234-3b58-87d8b4ce62b5"
    }
};
r(gl, "RC_5e259c61591c72343b5887d8b4ce62b5");
var qs = gl;
qs.init();
var Db = class Db extends t.GenericRecordList {
    static getItemType() {
        return qs
    }
};
r(Db, "RL_422c5cc1eb56f188f2e407af881395ae");
var bb = Db;
var xl = class xl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostCashierCryptoResponse", "postCashierCryptoResponseAttr", "PostCashierCryptoResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new C)
        }, !0, C)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new xl(new xl.RecordClass({
            postCashierCryptoResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c0258e0f-6ca8-7b3e-5e39-e33c3e5f0c77"
    }
};
r(xl, "RC_c0258e0f6ca87b3e5e39e33c3e5f0c77");
var Js = xl;
Js.init();
var Ab = class Ab extends t.GenericRecordList {
    static getItemType() {
        return Js
    }
};
r(Ab, "RL_42ae10f2ee499169129a9427d0491b08");
var Ob = Ab;
var Rl = class Rl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Crypto", "cryptoAttr", "Crypto", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Mr)
        }, !0, Mr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Rl(new Rl.RecordClass({
            cryptoAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "72576653-6428-f476-02ca-54f05f55b577"
    }
};
r(Rl, "RC_725766536428f47602ca54f05f55b577");
var Us = Rl;
Us.init();
var gb = class gb extends t.GenericRecordList {
    static getItemType() {
        return Us
    }
};
r(gb, "RL_43065d40fb42cf2e1c75ff4cebf95a65");
var vb = gb;
var Il = class Il extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Documents_supported", "documents_supportedAttr", "Documents_supported", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ut)
        }, !0, Ut)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Il(new Il.RecordClass({
            documents_supportedAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "655de439-743f-6ef6-6e4c-426b009f58b1"
    }
};
r(Il, "RC_655de439743f6ef66e4c426b009f58b1");
var zs = Il;
zs.init();
var Rb = class Rb extends t.GenericRecordList {
    static getItemType() {
        return zs
    }
};
r(Rb, "RL_431a1d9d775d905a0fa33726ccc368ad");
var xb = Rb;
var wb = class wb extends t.GenericRecordList {
    static getItemType() {
        return h
    }
};
r(wb, "RL_43c33c0f3b9a2eb3199ef87eb6b6c7b3");
var Ib = wb;
var wl = class wl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Disclaimer", "disclaimerAttr", "Disclaimer", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Rr)
        }, !0, Rr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new wl(new wl.RecordClass({
            disclaimerAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d5f1faf2-f682-624c-1c27-e7a932faee50"
    }
};
r(wl, "RC_d5f1faf2f682624c1c27e7a932faee50");
var js = wl;
js.init();
var Cb = class Cb extends t.GenericRecordList {
    static getItemType() {
        return js
    }
};
r(Cb, "RL_44cebee119c996a470fbff1d981600f0");
var Pb = Cb;
var hb = class hb extends t.GenericRecordList {
    static getItemType() {
        return is
    }
};
r(hb, "RL_44fa669238d0e932bda1a17383c85231");
var Eb = hb;
var Pl = class Pl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertUpdateRequest", "p2PAdvertUpdateRequestAttr", "P2PAdvertUpdateRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new et)
        }, !0, et)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Pl(new Pl.RecordClass({
            p2PAdvertUpdateRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "45556c10-a150-2a71-7de4-1a97a7e0de1e"
    }
};
r(Pl, "RC_45556c10a1502a717de41a97a7e0de1e");
var Xs = Pl;
Xs.init();
var Cl = class Cl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req9", "echo_req9Attr", "Echo_req9", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Da)
        }, !0, Da)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Cl(new Cl.RecordClass({
            echo_req9Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "99c00189-36e3-cec1-2f03-7bf056295951"
    }
};
r(Cl, "RC_99c0018936e3cec12f037bf056295951");
var Qs = Cl;
Qs.init();
var Vb = class Vb extends t.GenericRecordList {
    static getItemType() {
        return Qs
    }
};
r(Vb, "RL_458a7ae223160b2af1e7ca666afa22e4");
var Lb = Vb;
var Nb = class Nb extends t.GenericRecordList {
    static getItemType() {
        return Ns
    }
};
r(Nb, "RL_45f425cbfe3f41d3fac973fe3238818f");
var kb = Nb;
var El = class El extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostVerifyEmailResponse", "postVerifyEmailResponseAttr", "PostVerifyEmailResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new R)
        }, !0, R)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new El(new El.RecordClass({
            postVerifyEmailResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f6746cbb-50b7-a6a3-6f45-4937aab260b0"
    }
};
r(El, "RC_f6746cbb50b7a6a36f454937aab260b0");
var Ys = El;
Ys.init();
var Wb = class Wb extends t.GenericRecordList {
    static getItemType() {
        return Ys
    }
};
r(Wb, "RL_466fd140517db96d071045e35052d015");
var Gb = Wb;
var hl = class hl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Get_setting", "get_settingAttr", "Get_setting", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ta)
        }, !0, Ta)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new hl(new hl.RecordClass({
            get_settingAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "47772cad-80dc-4a78-7d65-fd52470ca2cd"
    }
};
r(hl, "RC_47772cad80dc4a787d65fd52470ca2cd");
var Ks = hl;
Ks.init();
var Ll = class Ll extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("From", "fromAttr", "From", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Nt)
        }, !0, Nt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ll(new Ll.RecordClass({
            fromAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "99e19ace-3996-a5f3-b75c-a1e86886d33d"
    }
};
r(Ll, "RC_99e19ace3996a5f3b75ca1e86886d33d");
var Zs = Ll;
Zs.init();
var Hb = class Hb extends t.GenericRecordList {
    static getItemType() {
        return Zs
    }
};
r(Hb, "RL_47976f4a0ffd4defdfe43b4b464cb87c");
var _b = Hb;
var Fb = class Fb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Action_type", "action_typeAttr", "action_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Description", "descriptionAttr", "description", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Limit", "limitAttr", "limit", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
r(Fb, "ST_aebb52c5d802a6aaa646a74179c770faStructure");
var Dt = Fb;
Dt.init();
var Vl = class Vl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Api2", "api2Attr", "Api2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Dt)
        }, !0, Dt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Vl(new Vl.RecordClass({
            api2Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "47cbcea3-7f93-8309-4a9a-cfdb35413d95"
    }
};
r(Vl, "RC_47cbcea37f9383094a9acfdb35413d95");
var en = Vl;
en.init();
var kl = class kl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderReviewRequest", "p2POrderReviewRequestAttr", "P2POrderReviewRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new tt)
        }, !0, tt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new kl(new kl.RecordClass({
            p2POrderReviewRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5df5d94c-6805-d6c9-59ff-b69a06f0b3f5"
    }
};
r(kl, "RC_5df5d94c6805d6c959ffb69a06f0b3f5");
var tn = kl;
tn.init();
var Bb = class Bb extends t.GenericRecordList {
    static getItemType() {
        return tn
    }
};
r(Bb, "RL_48101f5eb21d918bcd9ac61785b18853");
var Mb = Bb;
var Nl = class Nl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Changeable_field", "changeable_fieldAttr", "Changeable_field", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Yt)
        }, !0, Yt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Nl(new Nl.RecordClass({
            changeable_fieldAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d4bf765d-f28d-c44c-fc97-7eebedb13ed3"
    }
};
r(Nl, "RC_d4bf765df28dc44cfc977eebedb13ed3");
var rn = Nl;
rn.init();
var qb = class qb extends t.GenericRecordList {
    static getItemType() {
        return rn
    }
};
r(qb, "RL_481ef41ed0fae7f08c6f7bee79db99dc");
var $b = qb;
var Ub = class Ub extends t.GenericRecordList {
    static getItemType() {
        return Hr
    }
};
r(Ub, "RL_4887faff529164a4e041bdf0dc5e469f");
var Jb = Ub;
var Gl = class Gl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("TradingAssessmentRequest", "tradingAssessmentRequestAttr", "TradingAssessmentRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ke)
        }, !0, Ke)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Gl(new Gl.RecordClass({
            tradingAssessmentRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f0f17bd3-ffd9-2654-92a6-5f2a59166722"
    }
};
r(Gl, "RC_f0f17bd3ffd9265492a65f2a59166722");
var an = Gl;
an.init();
var jb = class jb extends t.GenericRecordList {
    static getItemType() {
        return an
    }
};
r(jb, "RL_4902441390afa821483ceed9dce30aad");
var zb = jb;
var Wl = class Wl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostMT5NewAccountRequest", "postMT5NewAccountRequestAttr", "PostMT5NewAccountRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ce)
        }, !0, Ce)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Wl(new Wl.RecordClass({
            postMT5NewAccountRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "49154554-e74c-2f48-646b-2e0ec7eb74a6"
    }
};
r(Wl, "RC_49154554e74c2f48646b2e0ec7eb74a6");
var on = Wl;
on.init();
var _l = class _l extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PSettingsResponse", "p2PSettingsResponseAttr", "P2PSettingsResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new re)
        }, !0, re)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new _l(new _l.RecordClass({
            p2PSettingsResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "4930d0ff-5274-fa4a-3e2b-1c3a57449104"
    }
};
r(_l, "RC_4930d0ff5274fa4a3e2b1c3a57449104");
var sn = _l;
sn.init();
var Hl = class Hl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostTradingPlatformAccountsRequest", "postTradingPlatformAccountsRequestAttr", "PostTradingPlatformAccountsRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new gt)
        }, !0, gt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Hl(new Hl.RecordClass({
            postTradingPlatformAccountsRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "8349a704-d7e4-5979-09be-fcd4d12d85b4"
    }
};
r(Hl, "RC_8349a704d7e4597909befcd4d12d85b4");
var nn = Hl;
nn.init();
var Qb = class Qb extends t.GenericRecordList {
    static getItemType() {
        return nn
    }
};
r(Qb, "RL_495e996e3e491370fac39f81d4d0c440");
var Xb = Qb;
var Fl = class Fl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Idv", "idvAttr", "Idv", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new zt)
        }, !0, zt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Fl(new Fl.RecordClass({
            idvAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5e1b44d0-3865-4ac1-9cd2-18a2a7d6a6b8"
    }
};
r(Fl, "RC_5e1b44d038654ac19cd218a2a7d6a6b8");
var cn = Fl;
cn.init();
var Kb = class Kb extends t.GenericRecordList {
    static getItemType() {
        return cn
    }
};
r(Kb, "RL_49a4d531de393d17563dea4ec0d88883");
var Yb = Kb;
var eD = class eD extends t.GenericRecordList {
    static getItemType() {
        return oo
    }
};
r(eD, "RL_49ccc40ded7b810643f52a486f4c18ba");
var Zb = eD;
var Ml = class Ml extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Financial_assessment", "financial_assessmentAttr", "Financial_assessment", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new da)
        }, !0, da)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ml(new Ml.RecordClass({
            financial_assessmentAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "4a76c214-f34f-eb84-1d0c-1a2d8cdbec01"
    }
};
r(Ml, "RC_4a76c214f34feb841d0c1a2d8cdbec01");
var un = Ml;
un.init();
var Bl = class Bl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DocumentUploadResponse", "documentUploadResponseAttr", "DocumentUploadResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new B)
        }, !0, B)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Bl(new Bl.RecordClass({
            documentUploadResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "fe323b94-d86a-33a2-36dd-565a79123960"
    }
};
r(Bl, "RC_fe323b94d86a33a236dd565a79123960");
var ln = Bl;
ln.init();
var rD = class rD extends t.GenericRecordList {
    static getItemType() {
        return ln
    }
};
r(rD, "RL_4bc0edb5a2f27a4baa3999fdb6172ba5");
var tD = rD;
var oD = class oD extends t.GenericRecordList {
    static getItemType() {
        return We
    }
};
r(oD, "RL_4cb4fe0818ecc772f4186b3d75c995e2");
var aD = oD;
var $l = class $l extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertUpdateResponse", "p2PAdvertUpdateResponseAttr", "P2PAdvertUpdateResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ae)
        }, !0, ae)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new $l(new $l.RecordClass({
            p2PAdvertUpdateResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "4d9da0dd-8267-6f0a-214b-72ed70ed22f4"
    }
};
r($l, "RC_4d9da0dd82676f0a214b72ed70ed22f4");
var fn = $l;
fn.init();
var ql = class ql extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderCancelResponse", "p2POrderCancelResponseAttr", "P2POrderCancelResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new oe)
        }, !0, oe)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ql(new ql.RecordClass({
            p2POrderCancelResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e68e51e7-06a4-0174-8c06-1e6ee756eb05"
    }
};
r(ql, "RC_e68e51e706a401748c061e6ee756eb05");
var dn = ql;
dn.init();
var nD = class nD extends t.GenericRecordList {
    static getItemType() {
        return dn
    }
};
r(nD, "RL_4e3b331f6df36e10312e1d92651799b7");
var sD = nD;
var uD = class uD extends t.GenericRecordList {
    static getItemType() {
        return Jo
    }
};
r(uD, "RL_4e8f077e202afd0a501d7855e9111a4f");
var cD = uD;
var lD = class lD extends t.GenericRecordList {
    static getItemType() {
        return Oo
    }
};
r(lD, "RL_4e941b17c99d61ac0f67eb4722e53670");
var iD = lD;
var Jl = class Jl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("NotificationEventRequest", "notificationEventRequestAttr", "NotificationEventRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Me)
        }, !0, Me)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Jl(new Jl.RecordClass({
            notificationEventRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "4f8f859a-92cd-f3a7-b0ae-8abf2e183a70"
    }
};
r(Jl, "RC_4f8f859a92cdf3a7b0ae8abf2e183a70");
var pn = Jl;
pn.init();
var dD = class dD extends t.GenericRecordList {
    static getItemType() {
        return gr
    }
};
r(dD, "RL_4f9f1230897f0a3e8b129024e1de623d");
var fD = dD;
var Ul = class Ul extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Initial_deposit_per_country", "initial_deposit_per_countryAttr", "Initial_deposit_per_country", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Jr)
        }, !0, Jr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ul(new Ul.RecordClass({
            initial_deposit_per_countryAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "50444655-28c9-4ee4-68cc-97cee02c2f31"
    }
};
r(Ul, "RC_5044465528c94ee468cc97cee02c2f31");
var Tn = Ul;
Tn.init();
var TD = class TD extends t.GenericRecordList {
    static getItemType() {
        return Tn
    }
};
r(TD, "RL_4faa698f8fe1178a7e2d85375093f6ee");
var pD = TD;
var yD = class yD extends t.GenericRecordList {
    static getItemType() {
        return yr
    }
};
r(yD, "RL_508855d25108765122be317d42e36c82");
var mD = yD;
var zl = class zl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DocumentUpload", "documentUploadAttr", "DocumentUpload", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new sa)
        }, !0, sa)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new zl(new zl.RecordClass({
            documentUploadAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "50f2a392-2a1e-7010-2f05-77d9e1e336c7"
    }
};
r(zl, "RC_50f2a3922a1e70102f0577d9e1e336c7");
var mn = zl;
mn.init();
var jl = class jl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Get_financial_assessment", "get_financial_assessmentAttr", "get_financial_assessment", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ie)
        }, !0, Ie)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new jl(new jl.RecordClass({
            get_financial_assessmentAttr: t.ImmutableBase.getData(a)
        }))
    }
};
r(jl, "ST_5d5e0bd79da65148b96277a6afd52864Structure");
var I = jl;
I.init();
var Xl = class Xl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetFinancialAssessmentResponse", "getFinancialAssessmentResponseAttr", "GetFinancialAssessmentResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new I)
        }, !0, I)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Xl(new Xl.RecordClass({
            getFinancialAssessmentResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c14c3de5-ac4f-d24a-1fc2-9c0c5c4a762b"
    }
};
r(Xl, "RC_c14c3de5ac4fd24a1fc29c0c5c4a762b");
var yn = Xl;
yn.init();
var bD = class bD extends t.GenericRecordList {
    static getItemType() {
        return yn
    }
};
r(bD, "RL_51bf88f776fdd354edc5d7c0f5e439e8");
var SD = bD;
var Ql = class Ql extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Fee", "feeAttr", "Fee", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Mt)
        }, !0, Mt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ql(new Ql.RecordClass({
            feeAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a77cae61-9f7a-824f-faa6-e30caf3829e5"
    }
};
r(Ql, "RC_a77cae619f7a824ffaa6e30caf3829e5");
var Sn = Ql;
Sn.init();
var OD = class OD extends t.GenericRecordList {
    static getItemType() {
        return Sn
    }
};
r(OD, "RL_51c36384638fb46b29235e79e23007b4");
var DD = OD;
var Yl = class Yl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Identity", "identityAttr", "Identity", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new xr)
        }, !0, xr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Yl(new Yl.RecordClass({
            identityAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "51c73f64-1f2d-0554-0b68-c15e7660196f"
    }
};
r(Yl, "RC_51c73f641f2d05540b68c15e7660196f");
var bn = Yl;
bn.init();
var vD = class vD extends t.GenericRecordList {
    static getItemType() {
        return $r
    }
};
r(vD, "RL_51cb6ee93d723ed4d67f527a1090ade3");
var AD = vD;
var Kl = class Kl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostMT5NewAccountResponse", "postMT5NewAccountResponseAttr", "PostMT5NewAccountResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new se)
        }, !0, se)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Kl(new Kl.RecordClass({
            postMT5NewAccountResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "51e680c6-048a-c999-ddcf-2924d0b41c65"
    }
};
r(Kl, "RC_51e680c6048ac999ddcf2924d0b41c65");
var Dn = Kl;
Dn.init();
var xD = class xD extends t.GenericRecordList {
    static getItemType() {
        return Ta
    }
};
r(xD, "RL_53248a1b8ab3b0462ffd76c73f4f1eba");
var gD = xD;
var ID = class ID extends t.GenericRecordList {
    static getItemType() {
        return Ct
    }
};
r(ID, "RL_538ff2f1d030482c84c803644c8c1240");
var RD = ID;
var Zl = class Zl extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Mt_all_company", "mt_all_companyAttr", "Mt_all_company", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new nr)
        }, !0, nr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Zl(new Zl.RecordClass({
            mt_all_companyAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "cb3c04d8-8b11-4a07-5539-728cafcde6e0"
    }
};
r(Zl, "RC_cb3c04d88b114a075539728cafcde6e0");
var On = Zl;
On.init();
var PD = class PD extends t.GenericRecordList {
    static getItemType() {
        return On
    }
};
r(PD, "RL_53c372dc61bea6ee9ca5f8120f4350e8");
var wD = PD;
var ef = class ef extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req3", "echo_req3Attr", "Echo_req3", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Nr)
        }, !0, Nr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ef(new ef.RecordClass({
            echo_req3Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "9156a578-055c-e3e9-05fa-78bea04b423e"
    }
};
r(ef, "RC_9156a578055ce3e905fa78bea04b423e");
var An = ef;
An.init();
var ED = class ED extends t.GenericRecordList {
    static getItemType() {
        return An
    }
};
r(ED, "RL_541d7d6fd4a21fe8865c00049e5532a0");
var CD = ED;
var LD = class LD extends t.GenericRecordList {
    static getItemType() {
        return _a
    }
};
r(LD, "RL_545c5578385333732449204f3e942ed0");
var hD = LD;
var kD = class kD extends t.GenericRecordList {
    static getItemType() {
        return rt
    }
};
r(kD, "RL_546e1909ff09813803e242c5d08fbfa6");
var VD = kD;
var GD = class GD extends t.GenericRecordList {
    static getItemType() {
        return Ze
    }
};
r(GD, "RL_55379448d5b56a955b8b1cc39ca50913");
var ND = GD;
var tf = class tf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderCreateResponse", "p2POrderCreateResponseAttr", "P2POrderCreateResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new M)
        }, !0, M)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new tf(new tf.RecordClass({
            p2POrderCreateResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5556936b-5229-2543-d97d-2fca85735389"
    }
};
r(tf, "RC_5556936b52292543d97d2fca85735389");
var vn = tf;
vn.init();
var _D = class _D extends t.GenericRecordList {
    static getItemType() {
        return Je
    }
};
r(_D, "RL_556e855874a9b6c53a4ae07106497cfa");
var WD = _D;
var FD = class FD extends t.GenericRecordList {
    static getItemType() {
        return cs
    }
};
r(FD, "RL_560d4c8f65a370a0f5f40af5ea7ad8af");
var HD = FD;
var BD = class BD extends t.GenericRecordList {
    static getItemType() {
        return qt
    }
};
r(BD, "RL_5615c834166e52223964bada9f9f6329");
var MD = BD;
var rf = class rf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Payment_agent", "payment_agentAttr", "Payment_agent", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ur)
        }, !0, Ur)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new rf(new rf.RecordClass({
            payment_agentAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "56c6ce1b-0108-db2c-43eb-2e512b9aa7da"
    }
};
r(rf, "RC_56c6ce1b0108db2c43eb2e512b9aa7da");
var gn = rf;
gn.init();
var af = class af extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Trading_platform_accountItem", "trading_platform_accountItemAttr", "Trading_platform_accountItem", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Rt)
        }, !0, Rt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new af(new af.RecordClass({
            trading_platform_accountItemAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b7e52722-439a-b79f-06cc-9b853e2e0eda"
    }
};
r(af, "RC_b7e52722439ab79f06cc9b853e2e0eda");
var xn = af;
xn.init();
var qD = class qD extends t.GenericRecordList {
    static getItemType() {
        return xn
    }
};
r(qD, "RL_57698c22786db8cfbee18c9cbf33ed66");
var $D = qD;
var UD = class UD extends t.GenericRecordList {
    static getItemType() {
        return mn
    }
};
r(UD, "RL_59f6c38878962f59e9d822ce8cc295b2");
var JD = UD;
var jD = class jD extends t.GenericRecordList {
    static getItemType() {
        return Ms
    }
};
r(jD, "RL_5a17cb0f64de6697951894cea5524431");
var zD = jD;
var QD = class QD extends t.GenericRecordList {
    static getItemType() {
        return Fe
    }
};
r(QD, "RL_5ad725bb1f834f208aba441411dfb7ce");
var XD = QD;
var of = class of extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("KYC_AdditionalDocument", "kYC_AdditionalDocumentAttr", "KYC_AdditionalDocument", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Bt)
        }, !0, Bt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new of (new of .RecordClass({
            kYC_AdditionalDocumentAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5b83aabb-b0d4-2636-22ef-07d7fe4b2ce0"
    }
};
r( of , "RC_5b83aabbb0d4263622ef07d7fe4b2ce0");
var Rn = of ;
Rn.init();
var sf = class sf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StatementResponse", "statementResponseAttr", "StatementResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ca)
        }, !0, Ca)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new sf(new sf.RecordClass({
            statementResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "905d6976-00d1-c54d-4a69-5286706965fc"
    }
};
r(sf, "RC_905d697600d1c54d4a695286706965fc");
var In = sf;
In.init();
var KD = class KD extends t.GenericRecordList {
    static getItemType() {
        return In
    }
};
r(KD, "RL_5c7e4c6a39ce75c4706471fcf0bc97b4");
var YD = KD;
var nf = class nf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertCreate", "p2PAdvertCreateAttr", "P2PAdvertCreate", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Lt)
        }, !0, Lt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new nf(new nf.RecordClass({
            p2PAdvertCreateAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5cf1b34e-d2ad-7e7e-10f9-b1f73ac14122"
    }
};
r(nf, "RC_5cf1b34ed2ad7e7e10f9b1f73ac14122");
var wn = nf;
wn.init();
var eO = class eO extends t.GenericRecordList {
    static getItemType() {
        return gn
    }
};
r(eO, "RL_5db208bc12424f6e7604bf538be9d9a9");
var ZD = eO;
var rO = class rO extends t.GenericRecordList {
    static getItemType() {
        return La
    }
};
r(rO, "RL_5e5ec69271e920fb7cafebfca681f7d6");
var tO = rO;
var oO = class oO extends t.GenericRecordList {
    static getItemType() {
        return ze
    }
};
r(oO, "RL_5f96baf85bbca68a104650af9c95a482");
var aO = oO;
var nO = class nO extends t.GenericRecordList {
    static getItemType() {
        return Zr
    }
};
r(nO, "RL_5fd11e861ff8404974ab23ab133b96b9");
var sO = nO;
var uO = class uO extends t.GenericRecordList {
    static getItemType() {
        return ne
    }
};
r(uO, "RL_602374ca64bbf9e26533dca6775aa750");
var cO = uO;
var lO = class lO extends t.GenericRecordList {
    static getItemType() {
        return ce
    }
};
r(lO, "RL_60aa1ccd6c64fd81d5fcb96f2a83dfd1");
var iO = lO;
var cf = class cf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserRelationsResponse", "p2PAdvertiserRelationsResponseAttr", "P2PAdvertiserRelationsResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ce)
        }, !0, ce)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new cf(new cf.RecordClass({
            p2PAdvertiserRelationsResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c3c26eca-f28f-4142-ec61-613a2af66795"
    }
};
r(cf, "RC_c3c26ecaf28f4142ec61613a2af66795");
var Pn = cf;
Pn.init();
var dO = class dO extends t.GenericRecordList {
    static getItemType() {
        return Pn
    }
};
r(dO, "RL_60cd4e292ea47ae7340affa43c25fbca");
var fO = dO;
var uf = class uf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Partner_settingItem", "partner_settingItemAttr", "Partner_settingItem", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Yd)
        }, !0, Yd)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new uf(new uf.RecordClass({
            partner_settingItemAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "af41a824-8bec-9d37-1332-c6d1030994d1"
    }
};
r(uf, "RC_af41a8248bec9d371332c6d1030994d1");
var Cn = uf;
Cn.init();
var TO = class TO extends t.GenericRecordList {
    static getItemType() {
        return Cn
    }
};
r(TO, "RL_61663a8f8c45cf7747ae131a649be82c");
var pO = TO;
var yO = class yO extends t.GenericRecordList {
    static getItemType() {
        return pa
    }
};
r(yO, "RL_617ce086b197e1cd7e2af2a1c0d1c20b");
var mO = yO;
var lf = class lf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Local_currency", "local_currencyAttr", "Local_currency", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Va)
        }, !0, Va)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new lf(new lf.RecordClass({
            local_currencyAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "61df84f9-9699-2899-1e57-5f5d3cdeb6cf"
    }
};
r(lf, "RC_61df84f9969928991e575f5d3cdeb6cf");
var En = lf;
En.init();
var ff = class ff extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Server_info", "server_infoAttr", "Server_info", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Aa)
        }, !0, Aa)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ff(new ff.RecordClass({
            server_infoAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "61e849a6-b27c-65d4-f84d-a11bc7fcd961"
    }
};
r(ff, "RC_61e849a6b27c65d4f84da11bc7fcd961");
var hn = ff;
hn.init();
var df = class df extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req", "echo_reqAttr", "Echo_req", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new fa)
        }, !0, fa)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new df(new df.RecordClass({
            echo_reqAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "623a04a7-e1c6-88b7-ec13-3f2b7ca28f8e"
    }
};
r(df, "RC_623a04a7e1c688b7ec133f2b7ca28f8e");
var Ln = df;
Ln.init();
var bO = class bO extends t.GenericRecordList {
    static getItemType() {
        return ga
    }
};
r(bO, "RL_6389593f218720e640897f2a30c71a02");
var SO = bO;
var pf = class pf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Authorize3", "authorize3Attr", "Authorize3", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ha)
        }, !0, ha)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new pf(new pf.RecordClass({
            authorize3Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "642aabe8-5fdb-3eb2-ce28-228a997dfa13"
    }
};
r(pf, "RC_642aabe85fdb3eb2ce28228a997dfa13");
var Vn = pf;
Vn.init();
var Tf = class Tf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PChatCreateRequest", "p2PChatCreateRequestAttr", "P2PChatCreateRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new at)
        }, !0, at)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Tf(new Tf.RecordClass({
            p2PChatCreateRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6554cbff-778b-b836-f708-19c17df738b2"
    }
};
r(Tf, "RC_6554cbff778bb836f70819c17df738b2");
var kn = Tf;
kn.init();
var OO = class OO extends t.GenericRecordList {
    static getItemType() {
        return fa
    }
};
r(OO, "RL_66079fd510547022662fad21af9161f1");
var DO = OO;
var mf = class mf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Account_listItem", "account_listItemAttr", "Account_listItem", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new cp)
        }, !0, cp)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new mf(new mf.RecordClass({
            account_listItemAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f481c39b-6dc5-7144-1408-fc418f17e793"
    }
};
r(mf, "RC_f481c39b6dc571441408fc418f17e793");
var Nn = mf;
Nn.init();
var vO = class vO extends t.GenericRecordList {
    static getItemType() {
        return Nn
    }
};
r(vO, "RL_6611d2d9fcbfcbfe8fb57800c9eecc82");
var AO = vO;
var yf = class yf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostTradingPlatformPasswordChangeResponse", "postTradingPlatformPasswordChangeResponseAttr", "PostTradingPlatformPasswordChangeResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ue)
        }, !0, ue)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new yf(new yf.RecordClass({
            postTradingPlatformPasswordChangeResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6ff4ee45-dfc9-2afe-92e4-874530f95001"
    }
};
r(yf, "RC_6ff4ee45dfc92afe92e4874530f95001");
var Gn = yf;
Gn.init();
var xO = class xO extends t.GenericRecordList {
    static getItemType() {
        return Gn
    }
};
r(xO, "RL_66125dc2e07150403638a7f77e4d88ff");
var gO = xO;
var Sf = class Sf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("All", "allAttr", "All", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Xt)
        }, !0, Xt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Sf(new Sf.RecordClass({
            allAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "fb91f9ea-b17d-1348-84b2-213f47fb4a68"
    }
};
r(Sf, "RC_fb91f9eab17d134884b2213f47fb4a68");
var Wn = Sf;
Wn.init();
var IO = class IO extends t.GenericRecordList {
    static getItemType() {
        return Wn
    }
};
r(IO, "RL_6742097cd0e1b80b9f740ab5594fc0b1");
var RO = IO;
var PO = class PO extends t.GenericRecordList {
    static getItemType() {
        return vt
    }
};
r(PO, "RL_67903d82f67a613e6457850e3fe75a1b");
var wO = PO;
var EO = class EO extends t.GenericRecordList {
    static getItemType() {
        return qr
    }
};
r(EO, "RL_687d5246fd214b4298d42d80fa4abd54");
var CO = EO;
var LO = class LO extends t.GenericRecordList {
    static getItemType() {
        return ge
    }
};
r(LO, "RL_68d94344bca87ca3c6e8048bda3cfcff");
var hO = LO;
var bf = class bf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertCreateResponse", "p2PAdvertCreateResponseAttr", "P2PAdvertCreateResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new F)
        }, !0, F)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new bf(new bf.RecordClass({
            p2PAdvertCreateResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b0469763-808d-c073-8ee5-33d3241a3fc4"
    }
};
r(bf, "RC_b0469763808dc0738ee533d3241a3fc4");
var _n = bf;
_n.init();
var kO = class kO extends t.GenericRecordList {
    static getItemType() {
        return _n
    }
};
r(kO, "RL_69045c5eb3eae12903ebdf79ae78ffdb");
var VO = kO;
var GO = class GO extends t.GenericRecordList {
    static getItemType() {
        return $s
    }
};
r(GO, "RL_69ca4bc8038345e2219991dcaa3abf35");
var NO = GO;
var _O = class _O extends t.GenericRecordList {
    static getItemType() {
        return ta
    }
};
r(_O, "RL_6a09e143d0e4a59a21ce23725d2e887e");
var WO = _O;
var FO = class FO extends t.GenericRecordList {
    static getItemType() {
        return cr
    }
};
r(FO, "RL_6a534bbcb28aa4f96e8b5853e0208016");
var HO = FO;
var Df = class Df extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Identity2", "identity2Attr", "Identity2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Pt)
        }, !0, Pt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Df(new Df.RecordClass({
            identity2Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6a71f9dc-e751-66d7-6993-18075e64be6d"
    }
};
r(Df, "RC_6a71f9dce75166d7699318075e64be6d");
var Hn = Df;
Hn.init();
var Of = class Of extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderListResponse", "p2POrderListResponseAttr", "P2POrderListResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ie)
        }, !0, ie)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Of(new Of.RecordClass({
            p2POrderListResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6ad9207e-51a4-b642-b6e1-db89f79e31b5"
    }
};
r(Of, "RC_6ad9207e51a4b642b6e1db89f79e31b5");
var Fn = Of;
Fn.init();
var BO = class BO extends t.GenericRecordList {
    static getItemType() {
        return ot
    }
};
r(BO, "RL_6adb6e7c3b995869d80f7cca91748aa8");
var MO = BO;
var qO = class qO extends t.GenericRecordList {
    static getItemType() {
        return Q
    }
};
r(qO, "RL_6aefb6b34ff9f8b6e1084c5b438522bb");
var $O = qO;
var Af = class Af extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Authentication", "authenticationAttr", "Authentication", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ct)
        }, !0, Ct)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Af(new Af.RecordClass({
            authenticationAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6afb7faf-6b2a-5fdc-14e3-fd34318f5ba5"
    }
};
r(Af, "RC_6afb7faf6b2a5fdc14e3fd34318f5ba5");
var Mn = Af;
Mn.init();
var vf = class vf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Website_status", "website_statusAttr", "Website_status", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new zr)
        }, !0, zr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new vf(new vf.RecordClass({
            website_statusAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6bf0b0ff-c630-1cb0-6881-8135121fba90"
    }
};
r(vf, "RC_6bf0b0ffc6301cb068818135121fba90");
var Bn = vf;
Bn.init();
var UO = class UO extends t.GenericRecordList {
    static getItemType() {
        return nr
    }
};
r(UO, "RL_6c06f81aeda50ab8c2d5788ceef7d4fc");
var JO = UO;
var jO = class jO extends t.GenericRecordList {
    static getItemType() {
        return W
    }
};
r(jO, "RL_6c516272c5b3311f4dfc181117b96b16");
var zO = jO;
var QO = class QO extends t.GenericRecordList {
    static getItemType() {
        return Ko
    }
};
r(QO, "RL_6cc055cc55710603767f0fd9910db36c");
var XO = QO;
var KO = class KO extends t.GenericRecordList {
    static getItemType() {
        return sn
    }
};
r(KO, "RL_6cc6cf468d4e55dff2682f40779f25aa");
var YO = KO;
var eA = class eA extends t.GenericRecordList {
    static getItemType() {
        return Vr
    }
};
r(eA, "RL_6d35299704f3eec23ed812a5a367da37");
var ZO = eA;
var rA = class rA extends t.GenericRecordList {
    static getItemType() {
        return le
    }
};
r(rA, "RL_6d8078983e84d9f62576b9b597c42453");
var tA = rA;
var oA = class oA extends t.GenericRecordList {
    static getItemType() {
        return Lr
    }
};
r(oA, "RL_6daa7fd7043bd22e153f9e359a31e19f");
var aA = oA;
var nA = class nA extends t.GenericRecordList {
    static getItemType() {
        return xs
    }
};
r(nA, "RL_6ded88896f4420155f9228fa8926d25d");
var sA = nA;
var uA = class uA extends t.GenericRecordList {
    static getItemType() {
        return Yr
    }
};
r(uA, "RL_6e4709c964d7b46a3afebff315d0d559");
var cA = uA;
var lA = class lA extends t.GenericRecordList {
    static getItemType() {
        return Pt
    }
};
r(lA, "RL_6fc3333f685ab59772d893597401dc0f");
var iA = lA;
var dA = class dA extends t.GenericRecordList {
    static getItemType() {
        return xo
    }
};
r(dA, "RL_6fd5ceba4a344fe3bd560a02ec48fa9b");
var fA = dA;
var gf = class gf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Service", "serviceAttr", "Service", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new gr)
        }, !0, gr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new gf(new gf.RecordClass({
            serviceAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7096ca00-9972-8124-fcaf-f6ac0bf8440c"
    }
};
r(gf, "RC_7096ca0099728124fcaff6ac0bf8440c");
var $n = gf;
$n.init();
var TA = class TA extends t.GenericRecordList {
    static getItemType() {
        return Vn
    }
};
r(TA, "RL_70cbcd4f3fa22ae115b8f290ce9c0859");
var pA = TA;
var mA = class mA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Name", "nameAttr", "Name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Value", "valueAttr", "Value", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
r(mA, "ST_914bc56c582d6b8ecb447d4f264116a5Structure");
var Ot = mA;
Ot.init();
var yA = class yA extends t.GenericRecordList {
    static getItemType() {
        return Ot
    }
};
r(yA, "RL_ec897e844fea3d1af8ca2f93825826e8");
var qn = yA;
var SA = class SA extends t.GenericRecordList {
    static getItemType() {
        return pt
    }
};
r(SA, "RL_bd8baa4f319b21ee2970fb4d1ea66bc3");
var Jn = SA;
var bA = class bA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("BaseURL", "baseURLAttr", "BaseURL", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("URLPath", "uRLPathAttr", "URLPath", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("URLQueryParameters", "uRLQueryParametersAttr", "URLQueryParameters", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new qn)
        }, !0, qn), this.attr("HTTPMethod", "hTTPMethodAttr", "HTTPMethod", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Headers", "headersAttr", "Headers", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new Jn)
        }, !0, Jn), this.attr("RequestText", "requestTextAttr", "RequestText", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("RequestBinary", "requestBinaryAttr", "RequestBinary", !1, !1, t.DataTypes.BinaryData, function() {
            return t.BinaryData.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
r(bA, "ST_777cb9fd3a5270d1c4f4fb5c135ce52fStructure");
var At = bA;
At.init();
var OA = class OA extends t.GenericRecordList {
    static getItemType() {
        return At
    }
};
r(OA, "RL_70ce87a32945cdfa70c1987b8cb33dcb");
var DA = OA;
var vA = class vA extends t.GenericRecordList {
    static getItemType() {
        return Nt
    }
};
r(vA, "RL_720c5f8bdedf3ce92188a2fbe493fa9c");
var AA = vA;
var xf = class xf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Residence_listItem", "residence_listItemAttr", "Residence_listItem", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Kd)
        }, !0, Kd)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new xf(new xf.RecordClass({
            residence_listItemAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "72deccc4-588d-d4c5-9ea2-12c47055f933"
    }
};
r(xf, "RC_72deccc4588dd4c59ea212c47055f933");
var Un = xf;
Un.init();
var xA = class xA extends t.GenericRecordList {
    static getItemType() {
        return He
    }
};
r(xA, "RL_7545ab9c9158f795c77f16f31b0fc3cd");
var gA = xA;
var IA = class IA extends t.GenericRecordList {
    static getItemType() {
        return we
    }
};
r(IA, "RL_7640021b876c49648ad252836a2f71a9");
var RA = IA;
var PA = class PA extends t.GenericRecordList {
    static getItemType() {
        return kr
    }
};
r(PA, "RL_7649b6f3b5d31da383ad943effdeab99");
var wA = PA;
var Rf = class Rf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Totp", "totpAttr", "Totp", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new we)
        }, !0, we)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Rf(new Rf.RecordClass({
            totpAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "768bc2c6-dfeb-6c5c-2e7b-54cb6ae79e68"
    }
};
r(Rf, "RC_768bc2c6dfeb6c5c2e7b54cb6ae79e68");
var zn = Rf;
zn.init();
var If = class If extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Compliance", "complianceAttr", "Compliance", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new _t)
        }, !0, _t)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new If(new If.RecordClass({
            complianceAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "769b74cf-243b-ca7e-23f6-d8b3e094aafe"
    }
};
r(If, "RC_769b74cf243bca7e23f6d8b3e094aafe");
var jn = If;
jn.init();
var EA = class EA extends t.GenericRecordList {
    static getItemType() {
        return wa
    }
};
r(EA, "RL_76a4a5b2c454ce7cb9d8436e9849949e");
var CA = EA;
var wf = class wf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserUpdateResponse", "p2PAdvertiserUpdateResponseAttr", "P2PAdvertiserUpdateResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new fe)
        }, !0, fe)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new wf(new wf.RecordClass({
            p2PAdvertiserUpdateResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "76c3b37a-218d-89cb-61ba-aeeb835fdcd7"
    }
};
r(wf, "RC_76c3b37a218d89cb61baaeeb835fdcd7");
var Xn = wf;
Xn.init();
var Pf = class Pf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IDVDocumentAddResponse", "iDVDocumentAddResponseAttr", "IDVDocumentAddResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new de)
        }, !0, de)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Pf(new Pf.RecordClass({
            iDVDocumentAddResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f2634b8e-faff-648b-1462-2bd5b25d8167"
    }
};
r(Pf, "RC_f2634b8efaff648b14622bd5b25d8167");
var Qn = Pf;
Qn.init();
var LA = class LA extends t.GenericRecordList {
    static getItemType() {
        return Qn
    }
};
r(LA, "RL_7780b2a9492505990d4a901334a00d28");
var hA = LA;
var Cf = class Cf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Error", "errorAttr", "Error", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ut)
        }, !0, ut)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Cf(new Cf.RecordClass({
            errorAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "854dbd28-04fb-b731-b146-8b879331bbde"
    }
};
r(Cf, "RC_854dbd2804fbb731b1468b879331bbde");
var Yn = Cf;
Yn.init();
var kA = class kA extends t.GenericRecordList {
    static getItemType() {
        return Yn
    }
};
r(kA, "RL_77d062a6109acd64f7dab8d805a7e390");
var VA = kA;
var GA = class GA extends t.GenericRecordList {
    static getItemType() {
        return Io
    }
};
r(GA, "RL_7887e44cb06676c07450b33a89d88acf");
var NA = GA;
var _A = class _A extends t.GenericRecordList {
    static getItemType() {
        return on
    }
};
r(_A, "RL_797ea25955211e661a31ab21177322ea");
var WA = _A;
var FA = class FA extends t.GenericRecordList {
    static getItemType() {
        return Ne
    }
};
r(FA, "RL_79e5f7b3f667162d18056364b5add7d4");
var HA = FA;
var BA = class BA extends t.GenericRecordList {
    static getItemType() {
        return Wr
    }
};
r(BA, "RL_7a119d08ddaa03a9adb755d998da5288");
var MA = BA;
var Ef = class Ef extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderDisputeRequest", "p2POrderDisputeRequestAttr", "P2POrderDisputeRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new st)
        }, !0, st)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ef(new Ef.RecordClass({
            p2POrderDisputeRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7a45e74e-27c6-f71f-6317-3a4101e26602"
    }
};
r(Ef, "RC_7a45e74e27c6f71f63173a4101e26602");
var Kn = Ef;
Kn.init();
var qA = class qA extends t.GenericRecordList {
    static getItemType() {
        return Ir
    }
};
r(qA, "RL_7a61959884cd1d97a8df26308775a5c7");
var $A = qA;
var UA = class UA extends t.GenericRecordList {
    static getItemType() {
        return Br
    }
};
r(UA, "RL_7aafab926cc9835b50687e3590d16e83");
var JA = UA;
var hf = class hf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Trading_platform_statusItem", "trading_platform_statusItemAttr", "Trading_platform_statusItem", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new up)
        }, !0, up)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new hf(new hf.RecordClass({
            trading_platform_statusItemAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7b274cb5-f96a-8ac2-97db-685000547ab1"
    }
};
r(hf, "RC_7b274cb5f96a8ac297db685000547ab1");
var Zn = hf;
Zn.init();
var jA = class jA extends t.GenericRecordList {
    static getItemType() {
        return Lo
    }
};
r(jA, "RL_7c61a4d6660756cbdce1ad8d8a460eb6");
var zA = jA;
var Lf = class Lf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Geolocation", "geolocationAttr", "Geolocation", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ra)
        }, !0, ra)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Lf(new Lf.RecordClass({
            geolocationAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7c67e52a-2329-c05d-78ed-79fcc452835e"
    }
};
r(Lf, "RC_7c67e52a2329c05d78ed79fcc452835e");
var ec = Lf;
ec.init();
var QA = class QA extends t.GenericRecordList {
    static getItemType() {
        return jt
    }
};
r(QA, "RL_7c9f790fa5c2ed1fbdf0de41347402fa");
var XA = QA;
var Vf = class Vf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StateList", "stateListAttr", "StateList", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new tp)
        }, !0, tp)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Vf(new Vf.RecordClass({
            stateListAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7cea7a7f-a663-9b24-1a75-c9e6bd8028d0"
    }
};
r(Vf, "RC_7cea7a7fa6639b241a75c9e6bd8028d0");
var tc = Vf;
tc.init();
var kf = class kf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("NotificationEventArgs", "notificationEventArgsAttr", "NotificationEventArgs", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new aa)
        }, !0, aa)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new kf(new kf.RecordClass({
            notificationEventArgsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d4e53cdc-7541-b46b-3d5d-c63fe53b6ea7"
    }
};
r(kf, "RC_d4e53cdc7541b46b3d5dc63fe53b6ea7");
var rc = kf;
rc.init();
var KA = class KA extends t.GenericRecordList {
    static getItemType() {
        return rc
    }
};
r(KA, "RL_7dbc7753dcc77f4ba03f73d24b5f31fa");
var YA = KA;
var Nf = class Nf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Trading_platform_available_accountItemMT5", "trading_platform_available_accountItemMT5Attr", "Trading_platform_available_accountItemMT5", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Xd)
        }, !0, Xd)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Nf(new Nf.RecordClass({
            trading_platform_available_accountItemMT5Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7de6f1e2-c998-00d3-c6e1-aaeb14f3afdd"
    }
};
r(Nf, "RC_7de6f1e2c99800d3c6e1aaeb14f3afdd");
var ac = Nf;
ac.init();
var ev = class ev extends t.GenericRecordList {
    static getItemType() {
        return ss
    }
};
r(ev, "RL_7e823839a7f836a297fa8d09d5b77858");
var ZA = ev;
var rv = class rv extends t.GenericRecordList {
    static getItemType() {
        return Sr
    }
};
r(rv, "RL_7ea0e409b1b42e8e6d7ca54869209a73");
var tv = rv;
var ov = class ov extends t.GenericRecordList {
    static getItemType() {
        return tr
    }
};
r(ov, "RL_7ec701d4086b9503e816fe47fc7b3996");
var av = ov;
var Gf = class Gf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Cashier", "cashierAttr", "Cashier", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new wa)
        }, !0, wa)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Gf(new Gf.RecordClass({
            cashierAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7f36dbf2-6349-b8c7-8224-f133e993735e"
    }
};
r(Gf, "RC_7f36dbf26349b8c78224f133e993735e");
var oc = Gf;
oc.init();
var Wf = class Wf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostTradingPlatformPasswordResetResponse", "postTradingPlatformPasswordResetResponseAttr", "PostTradingPlatformPasswordResetResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new le)
        }, !0, le)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Wf(new Wf.RecordClass({
            postTradingPlatformPasswordResetResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "86cda441-e1db-9e62-e574-ab54636ea9ea"
    }
};
r(Wf, "RC_86cda441e1db9e62e574ab54636ea9ea");
var sc = Wf;
sc.init();
var nv = class nv extends t.GenericRecordList {
    static getItemType() {
        return sc
    }
};
r(nv, "RL_7f64f8c0aaa300d34c79a90785135151");
var sv = nv;
var uv = class uv extends t.GenericRecordList {
    static getItemType() {
        return us
    }
};
r(uv, "RL_802322074908177d1de132f062300275");
var cv = uv;
var lv = class lv extends t.GenericRecordList {
    static getItemType() {
        return xr
    }
};
r(lv, "RL_81d2bc71eb1c605f53ae134ad3caa1c0");
var iv = lv;
var _f = class _f extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("OnfidoService", "onfidoServiceAttr", "OnfidoService", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new jr)
        }, !0, jr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new _f(new _f.RecordClass({
            onfidoServiceAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "81d96dbb-343b-41f5-5c20-2064ee7f136d"
    }
};
r(_f, "RC_81d96dbb343b41f55c202064ee7f136d");
var nc = _f;
nc.init();
var dv = class dv extends t.GenericRecordList {
    static getItemType() {
        return vn
    }
};
r(dv, "RL_82612f53b8d711fd3715db0c86244345");
var fv = dv;
var Hf = class Hf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderReviewResponse", "p2POrderReviewResponseAttr", "P2POrderReviewResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new pe)
        }, !0, pe)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Hf(new Hf.RecordClass({
            p2POrderReviewResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "8274740c-430e-d1e3-9b7a-1549b09d4ca3"
    }
};
r(Hf, "RC_8274740c430ed1e39b7a1549b09d4ca3");
var cc = Hf;
cc.init();
var Tv = class Tv extends t.GenericRecordList {
    static getItemType() {
        return en
    }
};
r(Tv, "RL_827e6062dd8814ace80f2a3f1a613f76");
var pv = Tv;
var Ff = class Ff extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("RiskLevel_LandingCompany", "riskLevel_LandingCompanyAttr", "RiskLevel_LandingCompany", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ir)
        }, !0, Ir)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ff(new Ff.RecordClass({
            riskLevel_LandingCompanyAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "890f16fe-63a6-b66b-2130-ac1a285dc1bf"
    }
};
r(Ff, "RC_890f16fe63a6b66b2130ac1a285dc1bf");
var uc = Ff;
uc.init();
var yv = class yv extends t.GenericRecordList {
    static getItemType() {
        return uc
    }
};
r(yv, "RL_855c9279ae87db4555d2fbb8ba90afc5");
var mv = yv;
var Mf = class Mf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("HTTPHeader", "hTTPHeaderAttr", "HTTPHeader", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new it)
        }, !0, it)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Mf(new Mf.RecordClass({
            hTTPHeaderAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e03efdb9-5c63-1545-332d-9962dd0402d3"
    }
};
r(Mf, "RC_e03efdb95c631545332d9962dd0402d3");
var ic = Mf;
ic.init();
var bv = class bv extends t.GenericRecordList {
    static getItemType() {
        return ic
    }
};
r(bv, "RL_85edf15715c5108a5315d804754ce1b4");
var Sv = bv;
var Bf = class Bf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Account_opening", "account_openingAttr", "Account_opening", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ge)
        }, !0, ge)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Bf(new Bf.RecordClass({
            account_openingAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "8688a658-a83b-6884-b85d-11d8db4546d3"
    }
};
r(Bf, "RC_8688a658a83b6884b85d11d8db4546d3");
var lc = Bf;
lc.init();
var Ov = class Ov extends t.GenericRecordList {
    static getItemType() {
        return lr
    }
};
r(Ov, "RL_87e06844679358e0f8214e75ce605df1");
var Dv = Ov;
var vv = class vv extends t.GenericRecordList {
    static getItemType() {
        return ue
    }
};
r(vv, "RL_87e64e62a021a7f641dffaaa73541aa5");
var Av = vv;
var xv = class xv extends t.GenericRecordList {
    static getItemType() {
        return ec
    }
};
r(xv, "RL_881e0bd330dc44a0f930b17dfa132522");
var gv = xv;
var Iv = class Iv extends t.GenericRecordList {
    static getItemType() {
        return Jr
    }
};
r(Iv, "RL_88893b2b6478ca91e7c481f161053cfa");
var Rv = Iv;
var $f = class $f extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ServiceTokenRequest", "serviceTokenRequestAttr", "ServiceTokenRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new rt)
        }, !0, rt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new $f(new $f.RecordClass({
            serviceTokenRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c6db6e25-83d5-8b1f-7d91-b76a532e7eb0"
    }
};
r($f, "RC_c6db6e2583d58b1f7d91b76a532e7eb0");
var fc = $f;
fc.init();
var Pv = class Pv extends t.GenericRecordList {
    static getItemType() {
        return fc
    }
};
r(Pv, "RL_88d704bede9d351ca8b921e5d8b5e60c");
var wv = Pv;
var Ev = class Ev extends t.GenericRecordList {
    static getItemType() {
        return lo
    }
};
r(Ev, "RL_8972d3be5f5c984833af7ea32d6710e8");
var Cv = Ev;
var Lv = class Lv extends t.GenericRecordList {
    static getItemType() {
        return ut
    }
};
r(Lv, "RL_89efb8ec15cf4e133db42b43e8a70d31");
var hv = Lv;
var qf = class qf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("SetSettingsResponse", "setSettingsResponseAttr", "SetSettingsResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Te)
        }, !0, Te)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new qf(new qf.RecordClass({
            setSettingsResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a5a2375a-3e91-041c-bcce-ac771e133575"
    }
};
r(qf, "RC_a5a2375a3e91041cbcceac771e133575");
var dc = qf;
dc.init();
var kv = class kv extends t.GenericRecordList {
    static getItemType() {
        return dc
    }
};
r(kv, "RL_8b2f8ecc4ceeaac972acb8a50205485d");
var Vv = kv;
var Gv = class Gv extends t.GenericRecordList {
    static getItemType() {
        return zt
    }
};
r(Gv, "RL_8b3193777919a00b12740a1aa0e7a669");
var Nv = Gv;
var Jf = class Jf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req8", "echo_req8Attr", "Echo_req8", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Er)
        }, !0, Er)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Jf(new Jf.RecordClass({
            echo_req8Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "8b362302-b596-6ced-d4e8-c7c42d7e46f8"
    }
};
r(Jf, "RC_8b362302b5966cedd4e8c7c42d7e46f8");
var pc = Jf;
pc.init();
var _v = class _v extends t.GenericRecordList {
    static getItemType() {
        return se
    }
};
r(_v, "RL_8bede31a859ddf52ef4cc59746531ef8");
var Wv = _v;
var Fv = class Fv extends t.GenericRecordList {
    static getItemType() {
        return kn
    }
};
r(Fv, "RL_8c761c273f71d4bef4e43f7373a08758");
var Hv = Fv;
var Uf = class Uf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Passport", "passportAttr", "Passport", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Jt)
        }, !0, Jt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Uf(new Uf.RecordClass({
            passportAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "8ccc0915-7954-5400-bb55-58b597337647"
    }
};
r(Uf, "RC_8ccc091579545400bb5558b597337647");
var Tc = Uf;
Tc.init();
var zf = class zf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserRelationsRequest", "p2PAdvertiserRelationsRequestAttr", "P2PAdvertiserRelationsRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ve)
        }, !0, Ve)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new zf(new zf.RecordClass({
            p2PAdvertiserRelationsRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "aa38f0f8-6a36-8b5a-a97d-09652c85df95"
    }
};
r(zf, "RC_aa38f0f86a368b5aa97d09652c85df95");
var mc = zf;
mc.init();
var Bv = class Bv extends t.GenericRecordList {
    static getItemType() {
        return mc
    }
};
r(Bv, "RL_8d1eec609ccea2aa18ac0df726cafa33");
var Mv = Bv;
var qv = class qv extends t.GenericRecordList {
    static getItemType() {
        return X
    }
};
r(qv, "RL_8d376ab44b9f0e7b6d06a6332f1483f2");
var $v = qv;
var Uv = class Uv extends t.GenericRecordList {
    static getItemType() {
        return Te
    }
};
r(Uv, "RL_8d67858abdde3dd334c892c5fd9176b4");
var Jv = Uv;
var jf = class jf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StatementFee", "statementFeeAttr", "StatementFee", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new kt)
        }, !0, kt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new jf(new jf.RecordClass({
            statementFeeAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "955ccd26-a5d9-8bb4-3926-051cccd6f301"
    }
};
r(jf, "RC_955ccd26a5d98bb43926051cccd6f301");
var yc = jf;
yc.init();
var jv = class jv extends t.GenericRecordList {
    static getItemType() {
        return yc
    }
};
r(jv, "RL_8d98f970a808a859e46d763c2a9f5e6c");
var zv = jv;
var Qv = class Qv extends t.GenericRecordList {
    static getItemType() {
        return pr
    }
};
r(Qv, "RL_8e09be908eb2289212bd0eb58ad9bdb1");
var Xv = Qv;
var Kv = class Kv extends t.GenericRecordList {
    static getItemType() {
        return Vs
    }
};
r(Kv, "RL_8e38afd3984d04ce643edcb181b91ae7");
var Yv = Kv;
var eg = class eg extends t.GenericRecordList {
    static getItemType() {
        return Re
    }
};
r(eg, "RL_8f0d9e710ce4ee39ba867cfafefd52db");
var Zv = eg;
var Xf = class Xf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Right", "rightAttr", "Right", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new va)
        }, !0, va)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Xf(new Xf.RecordClass({
            rightAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "8f3efc29-bef9-11e7-4df2-22fdba36c135"
    }
};
r(Xf, "RC_8f3efc29bef911e74df222fdba36c135");
var Sc = Xf;
Sc.init();
var Qf = class Qf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("FetchStatesListResponse", "fetchStatesListResponseAttr", "FetchStatesListResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ee)
        }, !0, ee)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Qf(new Qf.RecordClass({
            fetchStatesListResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "900ac3fb-84b1-d9ad-8b5d-550f75e57f07"
    }
};
r(Qf, "RC_900ac3fb84b1d9ad8b5d550f75e57f07");
var bc = Qf;
bc.init();
var rg = class rg extends t.GenericRecordList {
    static getItemType() {
        return so
    }
};
r(rg, "RL_904325e5d042a099908ed28253c5b8a6");
var tg = rg;
var og = class og extends t.GenericRecordList {
    static getItemType() {
        return ia
    }
};
r(og, "RL_90dfebee20aff7c26e30042add874567");
var ag = og;
var ng = class ng extends t.GenericRecordList {
    static getItemType() {
        return Qt
    }
};
r(ng, "RL_91f3ef19dd1007f7116bdf96cd006384");
var sg = ng;
var ug = class ug extends t.GenericRecordList {
    static getItemType() {
        return pc
    }
};
r(ug, "RL_9238bba5cbd10e6024ffc4f7cd576720");
var cg = ug;
var lg = class lg extends t.GenericRecordList {
    static getItemType() {
        return te
    }
};
r(lg, "RL_92402dd058de79af9f22de1380779555");
var ig = lg;
var dg = class dg extends t.GenericRecordList {
    static getItemType() {
        return So
    }
};
r(dg, "RL_925417f32894fd9622f9ac4a0f6d3848");
var fg = dg;
var Tg = class Tg extends t.GenericRecordList {
    static getItemType() {
        return Ds
    }
};
r(Tg, "RL_93708d7bb7d0fbdca673f09a924bcdb7");
var pg = Tg;
var yg = class yg extends t.GenericRecordList {
    static getItemType() {
        return ya
    }
};
r(yg, "RL_93a1caf6b09cfa25aafd4d96e7527613");
var mg = yg;
var Yf = class Yf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Detail", "detailAttr", "Detail", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new zd)
        }, !0, zd)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Yf(new Yf.RecordClass({
            detailAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "9469645a-6983-eeba-9173-683938b54abe"
    }
};
r(Yf, "RC_9469645a6983eeba9173683938b54abe");
var Dc = Yf;
Dc.init();
var bg = class bg extends t.GenericRecordList {
    static getItemType() {
        return It
    }
};
r(bg, "RL_94cd9fdaaf1a67a3bfa0e32663c1fe70");
var Sg = bg;
var Og = class Og extends t.GenericRecordList {
    static getItemType() {
        return me
    }
};
r(Og, "RL_954847ed7a29426b04fcc994e669e176");
var Dg = Og;
var vg = class vg extends t.GenericRecordList {
    static getItemType() {
        return un
    }
};
r(vg, "RL_958ee6d9719c17433ce81822ca60f4a2");
var Ag = vg;
var xg = class xg extends t.GenericRecordList {
    static getItemType() {
        return Tc
    }
};
r(xg, "RL_97e8f3375611a96a6012eed05d91f59d");
var gg = xg;
var Ig = class Ig extends t.GenericRecordList {
    static getItemType() {
        return Zo
    }
};
r(Ig, "RL_98f3b8624fe7a466ac7ebfc153dac373");
var Rg = Ig;
var Pg = class Pg extends t.GenericRecordList {
    static getItemType() {
        return Bt
    }
};
r(Pg, "RL_995adbfa0595ff6f2931f3c493a96ab6");
var wg = Pg;
var Eg = class Eg extends t.GenericRecordList {
    static getItemType() {
        return Eo
    }
};
r(Eg, "RL_996bbb10b9805c390cf8671b30f6d3a4");
var Cg = Eg;
var Lg = class Lg extends t.GenericRecordList {
    static getItemType() {
        return Gr
    }
};
r(Lg, "RL_9a37b428e209f265109cf020c957ba69");
var hg = Lg;
var kg = class kg extends t.GenericRecordList {
    static getItemType() {
        return at
    }
};
r(kg, "RL_9b308ec16292e64220de49e79891128d");
var Vg = kg;
var Gg = class Gg extends t.GenericRecordList {
    static getItemType() {
        return de
    }
};
r(Gg, "RL_9b333bac761e70e0fa5925ace6c6b732");
var Ng = Gg;
var _g = class _g extends t.GenericRecordList {
    static getItemType() {
        return ye
    }
};
r(_g, "RL_9b5ff325fa2b1963afc7ac5fe1fefcac");
var Wg = _g;
var Kf = class Kf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderConfirmRequest", "p2POrderConfirmRequestAttr", "P2POrderConfirmRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ot)
        }, !0, ot)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Kf(new Kf.RecordClass({
            p2POrderConfirmRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "9b6a5f6a-0f99-ac90-86bb-3ba26d838bf1"
    }
};
r(Kf, "RC_9b6a5f6a0f99ac9086bb3ba26d838bf1");
var Oc = Kf;
Oc.init();
var Zf = class Zf extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Currency_config", "currency_configAttr", "Currency_config", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new er)
        }, !0, er)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Zf(new Zf.RecordClass({
            currency_configAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "fed8226e-0551-19cd-a977-5f74ac223ef2"
    }
};
r(Zf, "RC_fed8226e055119cda9775f74ac223ef2");
var Ac = Zf;
Ac.init();
var Fg = class Fg extends t.GenericRecordList {
    static getItemType() {
        return Ac
    }
};
r(Fg, "RL_9b9241a2f74aae5dad6a96c423cf89d8");
var Hg = Fg;
var Bg = class Bg extends t.GenericRecordList {
    static getItemType() {
        return ka
    }
};
r(Bg, "RL_9ba938eac8f7611815bf878625e7d65e");
var Mg = Bg;
var qg = class qg extends t.GenericRecordList {
    static getItemType() {
        return wn
    }
};
r(qg, "RL_9baf947baad965c500c2d89efd8d1d67");
var $g = qg;
var Ug = class Ug extends t.GenericRecordList {
    static getItemType() {
        return bn
    }
};
r(Ug, "RL_9bbf3501c857fa771241aed7c9717166");
var Jg = Ug;
var jg = class jg extends t.GenericRecordList {
    static getItemType() {
        return lc
    }
};
r(jg, "RL_9c3b367f2c06676be4f28fe9c7a59a38");
var zg = jg;
var Qg = class Qg extends t.GenericRecordList {
    static getItemType() {
        return xt
    }
};
r(Qg, "RL_9cb00801b4a261afbddde8f0eaaf25f3");
var Xg = Qg;
var Kg = class Kg extends t.GenericRecordList {
    static getItemType() {
        return Fn
    }
};
r(Kg, "RL_9d3186e90bc9d9c992bd1289281160e2");
var Yg = Kg;
var ex = class ex extends t.GenericRecordList {
    static getItemType() {
        return or
    }
};
r(ex, "RL_9d69b2d3ce2ad95c00706adc74706b15");
var Zg = ex;
var rx = class rx extends t.GenericRecordList {
    static getItemType() {
        return Pa
    }
};
r(rx, "RL_9da5c6764fa38cdbc45ffab2fe9a4d33");
var tx = rx;
var ox = class ox extends t.GenericRecordList {
    static getItemType() {
        return nt
    }
};
r(ox, "RL_9e08984c04aa3363c26f26b284faa96b");
var ax = ox;
var ed = class ed extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Deposit", "depositAttr", "Deposit", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ia)
        }, !0, Ia)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ed(new ed.RecordClass({
            depositAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "9ea5c08a-e168-00a6-4582-da5745fe48cf"
    }
};
r(ed, "RC_9ea5c08ae16800a64582da5745fe48cf");
var vc = ed;
vc.init();
var nx = class nx extends t.GenericRecordList {
    static getItemType() {
        return vc
    }
};
r(nx, "RL_9e1ff0949548eb09d4dbb455a422d959");
var sx = nx;
var ux = class ux extends t.GenericRecordList {
    static getItemType() {
        return fe
    }
};
r(ux, "RL_9e58d9497ee0afabaafd8b106b944074");
var cx = ux;
var lx = class lx extends t.GenericRecordList {
    static getItemType() {
        return ns
    }
};
r(lx, "RL_9e6427a18f69ae9bc484388b785b5c9d");
var ix = lx;
var td = class td extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("NilooAuthorize2Response", "nilooAuthorize2ResponseAttr", "NilooAuthorize2Response", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new La)
        }, !0, La)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new td(new td.RecordClass({
            nilooAuthorize2ResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "9edae87b-d34d-57fa-71f2-a72c0cc57e1a"
    }
};
r(td, "RC_9edae87bd34d57fa71f2a72c0cc57e1a");
var gc = td;
gc.init();
var dx = class dx extends t.GenericRecordList {
    static getItemType() {
        return nc
    }
};
r(dx, "RL_9f08b56176d33deee65495f413d78949");
var fx = dx;
var Tx = class Tx extends t.GenericRecordList {
    static getItemType() {
        return Wo
    }
};
r(Tx, "RL_9f7e64e3acb92ada6c7cc1def60ee7ce");
var px = Tx;
var rd = class rd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Phone_number_verification", "phone_number_verificationAttr", "Phone_number_verification", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new pa)
        }, !0, pa)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new rd(new rd.RecordClass({
            phone_number_verificationAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "9fdefb14-23ae-0af9-c1d3-21109b8695e4"
    }
};
r(rd, "RC_9fdefb1423ae0af9c1d321109b8695e4");
var xc = rd;
xc.init();
var yx = class yx extends t.GenericRecordList {
    static getItemType() {
        return ua
    }
};
r(yx, "RL_a20cf7a86706288fea479fd0bec09085");
var mx = yx;
var ad = class ad extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserPaymentMethodsResponse", "p2PAdvertiserPaymentMethodsResponseAttr", "P2PAdvertiserPaymentMethodsResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new xe)
        }, !0, xe)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ad(new ad.RecordClass({
            p2PAdvertiserPaymentMethodsResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a246c61e-9fab-a433-ef6d-84fa27cfa397"
    }
};
r(ad, "RC_a246c61e9faba433ef6d84fa27cfa397");
var Rc = ad;
Rc.init();
var od = class od extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("URLQueryParameter2", "uRLQueryParameter2Attr", "URLQueryParameter2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ot)
        }, !0, Ot)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new od(new od.RecordClass({
            uRLQueryParameter2Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c221a268-5264-ea66-58ff-10f85ac0a996"
    }
};
r(od, "RC_c221a2685264ea6658ff10f85ac0a996");
var Ic = od;
Ic.init();
var bx = class bx extends t.GenericRecordList {
    static getItemType() {
        return Ic
    }
};
r(bx, "RL_a2526d86090f1f32edaaf7a1f751365f");
var Sx = bx;
var Ox = class Ox extends t.GenericRecordList {
    static getItemType() {
        return Rs
    }
};
r(Ox, "RL_a269dfd9a948aad7cbddba837f8c095f");
var Dx = Ox;
var vx = class vx extends t.GenericRecordList {
    static getItemType() {
        return xc
    }
};
r(vx, "RL_a2a3d623cff8db0b23d39b4d88a9486f");
var Ax = vx;
var sd = class sd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("LastRejected", "lastRejectedAttr", "LastRejected", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ir)
        }, !0, ir)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new sd(new sd.RecordClass({
            lastRejectedAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a51985e6-b89e-e511-d2ab-23981acd721e"
    }
};
r(sd, "RC_a51985e6b89ee511d2ab23981acd721e");
var wc = sd;
wc.init();
var xx = class xx extends t.GenericRecordList {
    static getItemType() {
        return zn
    }
};
r(xx, "RL_a5368373add5981513452f7884c60452");
var gx = xx;
var Ix = class Ix extends t.GenericRecordList {
    static getItemType() {
        return aa
    }
};
r(Ix, "RL_a5d549866b2ac93eae1f3fb2e43c0bf7");
var Rx = Ix;
var nd = class nd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostNewAccountVirtualRequest", "postNewAccountVirtualRequestAttr", "PostNewAccountVirtualRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ne)
        }, !0, Ne)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new nd(new nd.RecordClass({
            postNewAccountVirtualRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a5fc3d62-312a-89b3-2ae3-93e0571bcad7"
    }
};
r(nd, "RC_a5fc3d62312a89b32ae393e0571bcad7");
var Pc = nd;
Pc.init();
var Px = class Px extends t.GenericRecordList {
    static getItemType() {
        return Na
    }
};
r(Px, "RL_a6ed4fd2e7e0b79f06fecc8c65713a43");
var wx = Px;
var Ex = class Ex extends t.GenericRecordList {
    static getItemType() {
        return ro
    }
};
r(Ex, "RL_a7094b4040c9bc1f29f799c201256c99");
var Cx = Ex;
var cd = class cd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("TransactionItem", "transactionItemAttr", "TransactionItem", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new jd)
        }, !0, jd)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new cd(new cd.RecordClass({
            transactionItemAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a83c5350-1675-e1b1-a92d-ce121c194a38"
    }
};
r(cd, "RC_a83c53501675e1b1a92dce121c194a38");
var Cc = cd;
Cc.init();
var Lx = class Lx extends t.GenericRecordList {
    static getItemType() {
        return dr
    }
};
r(Lx, "RL_a85951adc11db15827205a4c30d6e88f");
var hx = Lx;
var ud = class ud extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IDR", "iDRAttr", "IDR", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new oa)
        }, !0, oa)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ud(new ud.RecordClass({
            iDRAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a8681099-a96d-9738-6677-79eaaccedc4a"
    }
};
r(ud, "RC_a8681099a96d9738667779eaaccedc4a");
var Ec = ud;
Ec.init();
var kx = class kx extends t.GenericRecordList {
    static getItemType() {
        return Ks
    }
};
r(kx, "RL_a8b7c276560c35af141714ac8a51d257");
var Vx = kx;
var Gx = class Gx extends t.GenericRecordList {
    static getItemType() {
        return jr
    }
};
r(Gx, "RL_a8d533a0f4e6b4998d1e5475942bbcf3");
var Nx = Gx;
var id = class id extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostResetPasswordRequest", "postResetPasswordRequestAttr", "PostResetPasswordRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ge)
        }, !0, Ge)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new id(new id.RecordClass({
            postResetPasswordRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a9755f38-b054-2dfb-6acd-d8617637c169"
    }
};
r(id, "RC_a9755f38b0542dfb6acdd8617637c169");
var hc = id;
hc.init();
var _x = class _x extends t.GenericRecordList {
    static getItemType() {
        return To
    }
};
r(_x, "RL_a9afb210b5496f25c21da21e788199b5");
var Wx = _x;
var Fx = class Fx extends t.GenericRecordList {
    static getItemType() {
        return Ht
    }
};
r(Fx, "RL_a9ea31b939f652b4b427fa383c80cdbb");
var Hx = Fx;
var ld = class ld extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostTradingPlatformPasswordChangeRequest", "postTradingPlatformPasswordChangeRequestAttr", "PostTradingPlatformPasswordChangeRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ct)
        }, !0, ct)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ld(new ld.RecordClass({
            postTradingPlatformPasswordChangeRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b7ccb1d3-7481-9fab-b1f3-fad7a6c0dd99"
    }
};
r(ld, "RC_b7ccb1d374819fabb1f3fad7a6c0dd99");
var Lc = ld;
Lc.init();
var Bx = class Bx extends t.GenericRecordList {
    static getItemType() {
        return Lc
    }
};
r(Bx, "RL_aa768f1f5f08fea3fa4adb58f7814e07");
var Mx = Bx;
var qx = class qx extends t.GenericRecordList {
    static getItemType() {
        return es
    }
};
r(qx, "RL_aa9a39a9d3a53c692e9cbcbac7f37610");
var $x = qx;
var Ux = class Ux extends t.GenericRecordList {
    static getItemType() {
        return Ia
    }
};
r(Ux, "RL_aae9a3766bc818ac211c0ea434d05161");
var Jx = Ux;
var jx = class jx extends t.GenericRecordList {
    static getItemType() {
        return pe
    }
};
r(jx, "RL_ab5f17238b4d916b868f1aadc23a7d36");
var zx = jx;
var Qx = class Qx extends t.GenericRecordList {
    static getItemType() {
        return Xe
    }
};
r(Qx, "RL_ab79e9426faff446a04dca332793c58f");
var Xx = Qx;
var Kx = class Kx extends t.GenericRecordList {
    static getItemType() {
        return J
    }
};
r(Kx, "RL_abbb06caa2dc3007694c8b499e93ac42");
var Yx = Kx;
var eR = class eR extends t.GenericRecordList {
    static getItemType() {
        return L
    }
};
r(eR, "RL_ac654ecd19209e7187154374b6dafe24");
var Zx = eR;
var fd = class fd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Standard", "standardAttr", "Standard", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new tr)
        }, !0, tr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new fd(new fd.RecordClass({
            standardAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "aca073df-88d4-0d31-252f-a904cba1bb39"
    }
};
r(fd, "RC_aca073df88d40d31252fa904cba1bb39");
var Vc = fd;
Vc.init();
var dd = class dd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostCashierFiatResponse", "postCashierFiatResponseAttr", "PostCashierFiatResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ve)
        }, !0, ve)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new dd(new dd.RecordClass({
            postCashierFiatResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "ad1368b4-9b01-cac1-05fa-b51dcf07c686"
    }
};
r(dd, "RC_ad1368b49b01cac105fab51dcf07c686");
var kc = dd;
kc.init();
var pd = class pd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostTradingPlatformAvailableAccountResponseMT5", "postTradingPlatformAvailableAccountResponseMT5Attr", "PostTradingPlatformAvailableAccountResponseMT5", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new x)
        }, !0, x)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new pd(new pd.RecordClass({
            postTradingPlatformAvailableAccountResponseMT5Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "ad160031-f42d-1788-0074-48cccfc906ac"
    }
};
r(pd, "RC_ad160031f42d1788007448cccfc906ac");
var Nc = pd;
Nc.init();
var Td = class Td extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Zero_spread", "zero_spreadAttr", "Zero_spread", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new sr)
        }, !0, sr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Td(new Td.RecordClass({
            zero_spreadAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "ada7ae2f-7fca-dfe9-ad4c-b9dbd1c4caf8"
    }
};
r(Td, "RC_ada7ae2f7fcadfe9ad4cb9dbd1c4caf8");
var Gc = Td;
Gc.init();
var rR = class rR extends t.GenericRecordList {
    static getItemType() {
        return Hn
    }
};
r(rR, "RL_ae4b771a164f6684a9910e7d97abd12c");
var tR = rR;
var md = class md extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Commodity", "commodityAttr", "Commodity", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Zt)
        }, !0, Zt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new md(new md.RecordClass({
            commodityAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e62fa91c-e8ed-0a38-e810-cad8c726da2f"
    }
};
r(md, "RC_e62fa91ce8ed0a38e810cad8c726da2f");
var Wc = md;
Wc.init();
var oR = class oR extends t.GenericRecordList {
    static getItemType() {
        return Wc
    }
};
r(oR, "RL_aecf700fcd9c0ef5df9dda4dac8947af");
var aR = oR;
var nR = class nR extends t.GenericRecordList {
    static getItemType() {
        return oc
    }
};
r(nR, "RL_b045e9b0e4d1bde192865267e3d1c52b");
var sR = nR;
var uR = class uR extends t.GenericRecordList {
    static getItemType() {
        return ea
    }
};
r(uR, "RL_b0a8bd7843abab931adac2b23c884550");
var cR = uR;
var lR = class lR extends t.GenericRecordList {
    static getItemType() {
        return br
    }
};
r(lR, "RL_b12f7a71666929e6ceec6559f200d213");
var iR = lR;
var dR = class dR extends t.GenericRecordList {
    static getItemType() {
        return R
    }
};
r(dR, "RL_b15112cdeeac0d3ba922a9de50cd9ca3");
var fR = dR;
var yd = class yd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req7", "echo_req7Attr", "Echo_req7", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new xa)
        }, !0, xa)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new yd(new yd.RecordClass({
            echo_req7Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b17c3526-d6de-ec2e-a51f-e6ca6895e3ea"
    }
};
r(yd, "RC_b17c3526d6deec2ea51fe6ca6895e3ea");
var _c = yd;
_c.init();
var Sd = class Sd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostTradingPlatformAvailableAccountsRequest", "postTradingPlatformAvailableAccountsRequestAttr", "PostTradingPlatformAvailableAccountsRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new g)
        }, !0, g)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Sd(new Sd.RecordClass({
            postTradingPlatformAvailableAccountsRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f1102e0e-903c-36b8-9dd3-a8ad41701e5f"
    }
};
r(Sd, "RC_f1102e0e903c36b89dd3a8ad41701e5f");
var Hc = Sd;
Hc.init();
var TR = class TR extends t.GenericRecordList {
    static getItemType() {
        return Hc
    }
};
r(TR, "RL_b180a59f8f5def3150ec40c96b1bacf2");
var pR = TR;
var bd = class bd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("AllAccountTypePlatforms", "allAccountTypePlatformsAttr", "AllAccountTypePlatforms", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Qt)
        }, !0, Qt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new bd(new bd.RecordClass({
            allAccountTypePlatformsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b1f9a62a-a1eb-0e79-79aa-ceb89243cea9"
    }
};
r(bd, "RC_b1f9a62aa1eb0e7979aaceb89243cea9");
var Fc = bd;
Fc.init();
var yR = class yR extends t.GenericRecordList {
    static getItemType() {
        return ac
    }
};
r(yR, "RL_b2061216c3d82010dc8c3226204dac46");
var mR = yR;
var bR = class bR extends t.GenericRecordList {
    static getItemType() {
        return Ee
    }
};
r(bR, "RL_b2117356ef65d3231f992a69f03538c4");
var SR = bR;
var OR = class OR extends t.GenericRecordList {
    static getItemType() {
        return Dc
    }
};
r(OR, "RL_b25c3a0fcffbc750be1c6409a1753ee3");
var DR = OR;
var vR = class vR extends t.GenericRecordList {
    static getItemType() {
        return Zn
    }
};
r(vR, "RL_b36cbf00535b19d854633a6aebe03044");
var AR = vR;
var xR = class xR extends t.GenericRecordList {
    static getItemType() {
        return Vo
    }
};
r(xR, "RL_b412922a0a29f17092810fe62dd48743");
var gR = xR;
var IR = class IR extends t.GenericRecordList {
    static getItemType() {
        return $e
    }
};
r(IR, "RL_b41818dfe314f17b4b47c38bc584ee3d");
var RR = IR;
var PR = class PR extends t.GenericRecordList {
    static getItemType() {
        return Rc
    }
};
r(PR, "RL_b4a5c9d3dcebe6413a999de1e05b8c08");
var wR = PR;
var Dd = class Dd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetPartnerAccountResponse", "getPartnerAccountResponseAttr", "GetPartnerAccountResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new K)
        }, !0, K)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Dd(new Dd.RecordClass({
            getPartnerAccountResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c8e982ea-92b4-7c78-8902-752bff73a401"
    }
};
r(Dd, "RC_c8e982ea92b47c788902752bff73a401");
var Mc = Dd;
Mc.init();
var ER = class ER extends t.GenericRecordList {
    static getItemType() {
        return Mc
    }
};
r(ER, "RL_b4f9773535cc09d3c6dd55ec7a4df8d1");
var CR = ER;
var LR = class LR extends t.GenericRecordList {
    static getItemType() {
        return ct
    }
};
r(LR, "RL_b50ecc69bf1d35f5563a812d2e69bf9c");
var hR = LR;
var Od = class Od extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderCreate", "p2POrderCreateAttr", "P2POrderCreate", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Zr)
        }, !0, Zr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Od(new Od.RecordClass({
            p2POrderCreateAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f327fc16-005a-306a-d5fb-3f70f9f60d4b"
    }
};
r(Od, "RC_f327fc16005a306ad5fb3f70f9f60d4b");
var Bc = Od;
Bc.init();
var kR = class kR extends t.GenericRecordList {
    static getItemType() {
        return Bc
    }
};
r(kR, "RL_b5bd9751396d473958f1150970a30598");
var VR = kR;
var GR = class GR extends t.GenericRecordList {
    static getItemType() {
        return ur
    }
};
r(GR, "RL_b60c30f70d5c7d39a851eeb74ad499d4");
var NR = GR;
var Ad = class Ad extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req11", "echo_req11Attr", "Echo_req11", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new qe)
        }, !0, qe)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ad(new Ad.RecordClass({
            echo_req11Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b66f106f-fca3-ec8b-9893-c19faf2ae442"
    }
};
r(Ad, "RC_b66f106ffca3ec8b9893c19faf2ae442");
var $c = Ad;
$c.init();
var _R = class _R extends t.GenericRecordList {
    static getItemType() {
        return Dt
    }
};
r(_R, "RL_b6f673b4dc1f733bcacc3d98d65cf048");
var WR = _R;
var FR = class FR extends t.GenericRecordList {
    static getItemType() {
        return _s
    }
};
r(FR, "RL_b7369d5f4cafbbcd5483c083235b9d49");
var HR = FR;
var BR = class BR extends t.GenericRecordList {
    static getItemType() {
        return V
    }
};
r(BR, "RL_b78395d0ac2f16e352960c06dc226372");
var MR = BR;
var qR = class qR extends t.GenericRecordList {
    static getItemType() {
        return Cr
    }
};
r(qR, "RL_b7a05579761da982186db0cb56ca5900");
var $R = qR;
var vd = class vd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("HTTPRequest", "hTTPRequestAttr", "HTTPRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new yt)
        }, !0, yt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new vd(new vd.RecordClass({
            hTTPRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b7f1349c-e556-88cb-c04c-b6b803b689dd"
    }
};
r(vd, "RC_b7f1349ce55688cbc04cb6b803b689dd");
var qc = vd;
qc.init();
var gd = class gd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Ownership", "ownershipAttr", "Ownership", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new It)
        }, !0, It)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new gd(new gd.RecordClass({
            ownershipAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b8272ebc-b560-c4fc-5c96-482b705582ba"
    }
};
r(gd, "RC_b8272ebcb560c4fc5c96482b705582ba");
var Jc = gd;
Jc.init();
var UR = class UR extends t.GenericRecordList {
    static getItemType() {
        return Zt
    }
};
r(UR, "RL_b88c0ed17712805463deb6be1a1ca760");
var JR = UR;
var jR = class jR extends t.GenericRecordList {
    static getItemType() {
        return la
    }
};
r(jR, "RL_b89c914195d1eb859bace1db1e3d63f3");
var zR = jR;
var QR = class QR extends t.GenericRecordList {
    static getItemType() {
        return Se
    }
};
r(QR, "RL_b903ad96980478d7874f689155c88d6c");
var XR = QR;
var KR = class KR extends t.GenericRecordList {
    static getItemType() {
        return ha
    }
};
r(KR, "RL_ba16f8261986c6b18df245be53196ced");
var YR = KR;
var xd = class xd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("AssessmentResponse", "assessmentResponseAttr", "AssessmentResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new be)
        }, !0, be)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new xd(new xd.RecordClass({
            assessmentResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "bb0ca189-1ae5-9927-0dda-01dce8b71766"
    }
};
r(xd, "RC_bb0ca1891ae599270dda01dce8b71766");
var Uc = xd;
Uc.init();
var eI = class eI extends t.GenericRecordList {
    static getItemType() {
        return cc
    }
};
r(eI, "RL_bb3acec9ee51c7f4799aac90c90128ef");
var ZR = eI;
var Rd = class Rd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Api", "apiAttr", "Api", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ae)
        }, !0, Ae)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Rd(new Rd.RecordClass({
            apiAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "cdef44d8-6581-2d5f-122c-87c3e4a61605"
    }
};
r(Rd, "RC_cdef44d865812d5f122c87c3e4a61605");
var zc = Rd;
zc.init();
var rI = class rI extends t.GenericRecordList {
    static getItemType() {
        return zc
    }
};
r(rI, "RL_bbe2c440b74c8377ca81d2556840a89a");
var tI = rI;
var oI = class oI extends t.GenericRecordList {
    static getItemType() {
        return yt
    }
};
r(oI, "RL_bc8fce7a43e25a8fbc78edae6c3b327a");
var aI = oI;
var nI = class nI extends t.GenericRecordList {
    static getItemType() {
        return Pe
    }
};
r(nI, "RL_bd7d45ac87faf455bc6e5f941988350a");
var sI = nI;
var uI = class uI extends t.GenericRecordList {
    static getItemType() {
        return Bn
    }
};
r(uI, "RL_be5a886e16881f9049697d324754da74");
var cI = uI;
var lI = class lI extends t.GenericRecordList {
    static getItemType() {
        return Tr
    }
};
r(lI, "RL_bf51b2a749ab1c5a248d7019c556ff5a");
var iI = lI;
var Id = class Id extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Set_Financial_Assessment", "set_Financial_AssessmentAttr", "Set_Financial_Assessment", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ga)
        }, !0, Ga)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Id(new Id.RecordClass({
            set_Financial_AssessmentAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f3f53373-0e3b-38e3-3f51-970def154551"
    }
};
r(Id, "RC_f3f533730e3b38e33f51970def154551");
var jc = Id;
jc.init();
var dI = class dI extends t.GenericRecordList {
    static getItemType() {
        return jc
    }
};
r(dI, "RL_bf9d4b591d666db95ff5f8501490c138");
var fI = dI;
var TI = class TI extends t.GenericRecordList {
    static getItemType() {
        return En
    }
};
r(TI, "RL_bfdb0a00a150c65e1e25049482edba6b");
var pI = TI;
var yI = class yI extends t.GenericRecordList {
    static getItemType() {
        return Ga
    }
};
r(yI, "RL_c10d98e0396eaff1d08672f779ec63cb");
var mI = yI;
var bI = class bI extends t.GenericRecordList {
    static getItemType() {
        return Pc
    }
};
r(bI, "RL_c1b551b639cf44782c03b977f31ed021");
var SI = bI;
var wd = class wd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("NotificationEventResponse", "notificationEventResponseAttr", "NotificationEventResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ne)
        }, !0, ne)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new wd(new wd.RecordClass({
            notificationEventResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "cdd09318-1252-d8c3-9658-eb7271017441"
    }
};
r(wd, "RC_cdd093181252d8c39658eb7271017441");
var Xc = wd;
Xc.init();
var OI = class OI extends t.GenericRecordList {
    static getItemType() {
        return Xc
    }
};
r(OI, "RL_c1fc2d91a927b6c04c65f17fe69d7364");
var DI = OI;
var vI = class vI extends t.GenericRecordList {
    static getItemType() {
        return sa
    }
};
r(vI, "RL_c228801268cde38f697e01100ad11a20");
var AI = vI;
var xI = class xI extends t.GenericRecordList {
    static getItemType() {
        return Er
    }
};
r(xI, "RL_c229edfd5a861b3989c3898b88a89f90");
var gI = xI;
var Pd = class Pd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Mt5_login_listItem", "mt5_login_listItemAttr", "Mt5_login_listItem", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new op)
        }, !0, op)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Pd(new Pd.RecordClass({
            mt5_login_listItemAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e3b76e5c-6918-ce63-091a-cb36b11f3fe2"
    }
};
r(Pd, "RC_e3b76e5c6918ce63091acb36b11f3fe2");
var Qc = Pd;
Qc.init();
var II = class II extends t.GenericRecordList {
    static getItemType() {
        return Qc
    }
};
r(II, "RL_c2ff81a5529fadc0682cd0e233934577");
var RI = II;
var PI = class PI extends t.GenericRecordList {
    static getItemType() {
        return Ec
    }
};
r(PI, "RL_c336d58dd96d2c1d5470075e96b2dfe2");
var wI = PI;
var EI = class EI extends t.GenericRecordList {
    static getItemType() {
        return fr
    }
};
r(EI, "RL_c35bbded731f8ecb695157b429b6b213");
var CI = EI;
var Cd = class Cd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Account_security", "account_securityAttr", "Account_security", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Pe)
        }, !0, Pe)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Cd(new Cd.RecordClass({
            account_securityAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "dc5fb195-19d8-d4c0-a547-bf0995552cb0"
    }
};
r(Cd, "RC_dc5fb19519d8d4c0a547bf0995552cb0");
var Yc = Cd;
Yc.init();
var LI = class LI extends t.GenericRecordList {
    static getItemType() {
        return Yc
    }
};
r(LI, "RL_c3a97eff9e3bc13da29bed8d716cc4ea");
var hI = LI;
var kI = class kI extends t.GenericRecordList {
    static getItemType() {
        return qc
    }
};
r(kI, "RL_c4fc3be75543c3c7832c730391e11388");
var VI = kI;
var Ed = class Ed extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostAccountListResponse", "postAccountListResponseAttr", "PostAccountListResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ye)
        }, !0, ye)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ed(new Ed.RecordClass({
            postAccountListResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c567cbac-2969-babe-c315-08d5ba9b8248"
    }
};
r(Ed, "RC_c567cbac2969babec31508d5ba9b8248");
var Kc = Ed;
Kc.init();
var GI = class GI extends t.GenericRecordList {
    static getItemType() {
        return Fc
    }
};
r(GI, "RL_c5909a8b1377430a2e36d2ce210bb739");
var NI = GI;
var _I = class _I extends t.GenericRecordList {
    static getItemType() {
        return C
    }
};
r(_I, "RL_c5c6c21effa285fee00f8dc17d9ba72f");
var WI = _I;
var FI = class FI extends t.GenericRecordList {
    static getItemType() {
        return ie
    }
};
r(FI, "RL_c6a47a1068f494ccd422ebb6efa80b1c");
var HI = FI;
var BI = class BI extends t.GenericRecordList {
    static getItemType() {
        return Xr
    }
};
r(BI, "RL_c6c5bbed4698a9104285c2ffcc29f228");
var MI = BI;
var qI = class qI extends t.GenericRecordList {
    static getItemType() {
        return Ie
    }
};
r(qI, "RL_c6cf49242e4ce0d88ad753b21a86fe81");
var $I = qI;
var UI = class UI extends t.GenericRecordList {
    static getItemType() {
        return Ca
    }
};
r(UI, "RL_c7f26a72e57a4dddb6b0448d22dc5863");
var JI = UI;
var jI = class jI extends t.GenericRecordList {
    static getItemType() {
        return ms
    }
};
r(jI, "RL_c8ec1067f658d445cb4bb406a536d6e4");
var zI = jI;
var QI = class QI extends t.GenericRecordList {
    static getItemType() {
        return x
    }
};
r(QI, "RL_c9802391ccf1fcf76850377db0a5a2bd");
var XI = QI;
var hd = class hd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Authorize2", "authorize2Attr", "Authorize2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ea)
        }, !0, Ea)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new hd(new hd.RecordClass({
            authorize2Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "ca29307c-32c3-b6ee-4bca-4fca61db0923"
    }
};
r(hd, "RC_ca29307c32c3b6ee4bca4fca61db0923");
var Zc = hd;
Zc.init();
var KI = class KI extends t.GenericRecordList {
    static getItemType() {
        return Gt
    }
};
r(KI, "RL_cad88a69fdf904df26f5066dd5cffb79");
var YI = KI;
var ew = class ew extends t.GenericRecordList {
    static getItemType() {
        return Kn
    }
};
r(ew, "RL_cb7a85895e8c7191ce89431d283aecb7");
var ZI = ew;
var rw = class rw extends t.GenericRecordList {
    static getItemType() {
        return U
    }
};
r(rw, "RL_cb7f36c20c1100a526f054e4bd5ee331");
var tw = rw;
var ow = class ow extends t.GenericRecordList {
    static getItemType() {
        return et
    }
};
r(ow, "RL_cbaa449aac56180c04dc0dfa93e6b55e");
var aw = ow;
var nw = class nw extends t.GenericRecordList {
    static getItemType() {
        return De
    }
};
r(nw, "RL_cbd45ffb64bc9c47450a3b6cf63434c5");
var sw = nw;
var Ld = class Ld extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("TwoFactorAuthenticationResponse", "twoFactorAuthenticationResponseAttr", "TwoFactorAuthenticationResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new bt)
        }, !0, bt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ld(new Ld.RecordClass({
            twoFactorAuthenticationResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "ccb4c76c-14de-9c39-ae17-466ff73095d4"
    }
};
r(Ld, "RC_ccb4c76c14de9c39ae17466ff73095d4");
var eu = Ld;
eu.init();
var uw = class uw extends t.GenericRecordList {
    static getItemType() {
        return Zc
    }
};
r(uw, "RL_cd7aae7110549eb2398675e1d9a7e14e");
var cw = uw;
var lw = class lw extends t.GenericRecordList {
    static getItemType() {
        return Fr
    }
};
r(lw, "RL_cead5d196d772d870bc3f7d4fa164d8c");
var iw = lw;
var dw = class dw extends t.GenericRecordList {
    static getItemType() {
        return kt
    }
};
r(dw, "RL_ceeb5cf67227d230352f98416e3a5708");
var fw = dw;
var Tw = class Tw extends t.GenericRecordList {
    static getItemType() {
        return mr
    }
};
r(Tw, "RL_cf17f57129ad6a4c2ec02e2afc77ae2b");
var pw = Tw;
var yw = class yw extends t.GenericRecordList {
    static getItemType() {
        return re
    }
};
r(yw, "RL_cf3e55591f725fd3bc6b2d0d3ee5730f");
var mw = yw;
var Vd = class Vd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("HTTPRequest2", "hTTPRequest2Attr", "HTTPRequest2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new At)
        }, !0, At)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Vd(new Vd.RecordClass({
            hTTPRequest2Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d01c18b7-748c-c78e-8ded-cb8dbb27bfa9"
    }
};
r(Vd, "RC_d01c18b7748cc78e8dedcb8dbb27bfa9");
var tu = Vd;
tu.init();
var bw = class bw extends t.GenericRecordList {
    static getItemType() {
        return wr
    }
};
r(bw, "RL_d020274c0ef0b03336f86133d39e8e5d");
var Sw = bw;
var Ow = class Ow extends t.GenericRecordList {
    static getItemType() {
        return Jc
    }
};
r(Ow, "RL_d085e8d032d69f30c1ff1fcbd1a431a3");
var Dw = Ow;
var kd = class kd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PPaymentMethodsResponse", "p2PPaymentMethodsResponseAttr", "P2PPaymentMethodsResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new nt)
        }, !0, nt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new kd(new kd.RecordClass({
            p2PPaymentMethodsResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "fbe26d11-e9d7-e815-ab8f-8d312685ebe8"
    }
};
r(kd, "RC_fbe26d11e9d7e815ab8f8d312685ebe8");
var ru = kd;
ru.init();
var vw = class vw extends t.GenericRecordList {
    static getItemType() {
        return ru
    }
};
r(vw, "RL_d169ac2c2610bcd30201dd6066aabbc8");
var Aw = vw;
var xw = class xw extends t.GenericRecordList {
    static getItemType() {
        return Nc
    }
};
r(xw, "RL_d170df24c2e1d399274b953b3ea7ee8d");
var gw = xw;
var Iw = class Iw extends t.GenericRecordList {
    static getItemType() {
        return na
    }
};
r(Iw, "RL_d1730959bead5ace9709263653c5c805");
var Rw = Iw;
var Pw = class Pw extends t.GenericRecordList {
    static getItemType() {
        return w
    }
};
r(Pw, "RL_d2789538425b9b75ea10631ae0abd383");
var ww = Pw;
var Ew = class Ew extends t.GenericRecordList {
    static getItemType() {
        return j
    }
};
r(Ew, "RL_d2d0068f3a07cb94ca20f9308415ffee");
var Cw = Ew;
var Nd = class Nd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertInfoResponse", "p2PAdvertInfoResponseAttr", "P2PAdvertInfoResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new q)
        }, !0, q)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Nd(new Nd.RecordClass({
            p2PAdvertInfoResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d33f8c00-9e3e-781c-ecef-ae4af6e8d57d"
    }
};
r(Nd, "RC_d33f8c009e3e781cecefae4af6e8d57d");
var au = Nd;
au.init();
var Lw = class Lw extends t.GenericRecordList {
    static getItemType() {
        return Va
    }
};
r(Lw, "RL_d3a7744852f4b782bcbb3dc9b2b5a3a2");
var hw = Lw;
var Gd = class Gd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Risk_level", "risk_levelAttr", "Risk_level", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new wr)
        }, !0, wr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Gd(new Gd.RecordClass({
            risk_levelAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "da31320f-8816-6d86-4fc3-96c0fddbecc9"
    }
};
r(Gd, "RC_da31320f88166d864fc396c0fddbecc9");
var ou = Gd;
ou.init();
var kw = class kw extends t.GenericRecordList {
    static getItemType() {
        return ou
    }
};
r(kw, "RL_d40367d2d21dcbcbaa0f7166365925a3");
var Vw = kw;
var Wd = class Wd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Forex", "forexAttr", "Forex", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ar)
        }, !0, ar)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Wd(new Wd.RecordClass({
            forexAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d509bf89-cda0-9ba7-8055-eb96d496078b"
    }
};
r(Wd, "RC_d509bf89cda09ba78055eb96d496078b");
var su = Wd;
su.init();
var Gw = class Gw extends t.GenericRecordList {
    static getItemType() {
        return Uc
    }
};
r(Gw, "RL_d5159c26a8f588daf2427ff93eedcebd");
var Nw = Gw;
var _d = class _d extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostLogoutResponse", "postLogoutResponseAttr", "PostLogoutResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new N)
        }, !0, N)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new _d(new _d.RecordClass({
            postLogoutResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f0c73e6d-bd84-2809-86cd-2f30c5ab1891"
    }
};
r(_d, "RC_f0c73e6dbd84280986cd2f30c5ab1891");
var nu = _d;
nu.init();
var _w = class _w extends t.GenericRecordList {
    static getItemType() {
        return nu
    }
};
r(_w, "RL_d6c2b0b2d82cc83f0e12ff8864bc303a");
var Ww = _w;
var Fw = class Fw extends t.GenericRecordList {
    static getItemType() {
        return Mr
    }
};
r(Fw, "RL_d7120c737b749736ea0a72e73d61514e");
var Hw = Fw;
var Bw = class Bw extends t.GenericRecordList {
    static getItemType() {
        return _c
    }
};
r(Bw, "RL_d7b37aab928d287662d2a0dadc210fec");
var Mw = Bw;
var qw = class qw extends t.GenericRecordList {
    static getItemType() {
        return vo
    }
};
r(qw, "RL_d7c25a5fb9a8943a745839a83027088a");
var $w = qw;
var Uw = class Uw extends t.GenericRecordList {
    static getItemType() {
        return $c
    }
};
r(Uw, "RL_d879fd0f70d45798161ae7b5ea69146c");
var Jw = Uw;
var jw = class jw extends t.GenericRecordList {
    static getItemType() {
        return Be
    }
};
r(jw, "RL_d9225646df1b3ea490560d0f68cd306f");
var zw = jw;
var Hd = class Hd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PCountryListResponse", "p2PCountryListResponseAttr", "P2PCountryListResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new me)
        }, !0, me)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Hd(new Hd.RecordClass({
            p2PCountryListResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "eb80e7f8-6333-4c54-8fcb-a763018eae6f"
    }
};
r(Hd, "RC_eb80e7f863334c548fcba763018eae6f");
var cu = Hd;
cu.init();
var Qw = class Qw extends t.GenericRecordList {
    static getItemType() {
        return cu
    }
};
r(Qw, "RL_d999f9e69b527a00490f20d6bcd32988");
var Xw = Qw;
var Kw = class Kw extends t.GenericRecordList {
    static getItemType() {
        return Ft
    }
};
r(Kw, "RL_da6c5178f53e986289bf2ed71791858d");
var Yw = Kw;
var e2 = class e2 extends t.GenericRecordList {
    static getItemType() {
        return ca
    }
};
r(e2, "RL_da97e9972bbc2e3a4820944c29604e6f");
var Zw = e2;
var r2 = class r2 extends t.GenericRecordList {
    static getItemType() {
        return Ln
    }
};
r(r2, "RL_da9f97f6a3c8b98228b608b130222591");
var t2 = r2;
var o2 = class o2 extends t.GenericRecordList {
    static getItemType() {
        return tc
    }
};
r(o2, "RL_db8c7152c23e79d6b562599761b9fd23");
var a2 = o2;
var n2 = class n2 extends t.GenericRecordList {
    static getItemType() {
        return $t
    }
};
r(n2, "RL_dba1429f774712c36d3ea0b48ab6b63d");
var s2 = n2;
var u2 = class u2 extends t.GenericRecordList {
    static getItemType() {
        return Cc
    }
};
r(u2, "RL_dd08ea713bebe4875033a5f91c469c77");
var c2 = u2;
var Fd = class Fd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("White_label_link", "white_label_linkAttr", "White_label_link", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ga)
        }, !0, ga)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Fd(new Fd.RecordClass({
            white_label_linkAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "dd79bf27-114c-bc81-0592-c451d8bd2280"
    }
};
r(Fd, "RC_dd79bf27114cbc810592c451d8bd2280");
var uu = Fd;
uu.init();
var l2 = class l2 extends t.GenericRecordList {
    static getItemType() {
        return Bs
    }
};
r(l2, "RL_de09afc3e002b5b30d13a4761423fa1e");
var i2 = l2;
var d2 = class d2 extends t.GenericRecordList {
    static getItemType() {
        return Ea
    }
};
r(d2, "RL_df2c3a1ff9c9b2892bfd0324597f5d4e");
var f2 = d2;
var T2 = class T2 extends t.GenericRecordList {
    static getItemType() {
        return sr
    }
};
r(T2, "RL_dfdebdca8e822b537628659338ad0660");
var p2 = T2;
var Md = class Md extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostAuthorizeResponse", "postAuthorizeResponseAttr", "PostAuthorizeResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new De)
        }, !0, De)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Md(new Md.RecordClass({
            postAuthorizeResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "dfe43d1a-19f2-f910-9388-05ce519a6be0"
    }
};
r(Md, "RC_dfe43d1a19f2f910938805ce519a6be0");
var iu = Md;
iu.init();
var Bd = class Bd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Document_type", "document_typeAttr", "Document_type", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new qt)
        }, !0, qt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Bd(new Bd.RecordClass({
            document_typeAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e0e41cb9-4b03-3378-d915-3e95b9660ef9"
    }
};
r(Bd, "RC_e0e41cb94b033378d9153e95b9660ef9");
var lu = Bd;
lu.init();
var y2 = class y2 extends t.GenericRecordList {
    static getItemType() {
        return Ge
    }
};
r(y2, "RL_e1278fe9427d99d4150ff61ea3f65e79");
var m2 = y2;
var b2 = class b2 extends t.GenericRecordList {
    static getItemType() {
        return ar
    }
};
r(b2, "RL_e14755a881df87b3e885c798489a1f9a");
var S2 = b2;
var O2 = class O2 extends t.GenericRecordList {
    static getItemType() {
        return Rr
    }
};
r(O2, "RL_e17c98c9ebad9849b38663a52005be50");
var D2 = O2;
var v2 = class v2 extends t.GenericRecordList {
    static getItemType() {
        return Z
    }
};
r(v2, "RL_e262f34e8ebc580be4a46070104de21e");
var A2 = v2;
var x2 = class x2 extends t.GenericRecordList {
    static getItemType() {
        return gt
    }
};
r(x2, "RL_e27fd9e7224bf0c7e999a01ff4028f6a");
var g2 = x2;
var I2 = class I2 extends t.GenericRecordList {
    static getItemType() {
        return Un
    }
};
r(I2, "RL_e377a277aec73abf25e2c35110f340eb");
var R2 = I2;
var P2 = class P2 extends t.GenericRecordList {
    static getItemType() {
        return kc
    }
};
r(P2, "RL_e40d2b9c559a333983e00711676426d8");
var w2 = P2;
var E2 = class E2 extends t.GenericRecordList {
    static getItemType() {
        return ys
    }
};
r(E2, "RL_e42c760f113562d06aa40fd3c0801719");
var C2 = E2;
var L2 = class L2 extends t.GenericRecordList {
    static getItemType() {
        return hr
    }
};
r(L2, "RL_e4cc4242bd1a5b513b2d0e5945f5ee99");
var h2 = L2;
var k2 = class k2 extends t.GenericRecordList {
    static getItemType() {
        return bc
    }
};
r(k2, "RL_e53ad3844d662ab92dd8c87975a2786f");
var V2 = k2;
var G2 = class G2 extends t.GenericRecordList {
    static getItemType() {
        return Mn
    }
};
r(G2, "RL_e5d4eff1d9ba5ba2377f189321ef5ca3");
var N2 = G2;
var _2 = class _2 extends t.GenericRecordList {
    static getItemType() {
        return lt
    }
};
r(_2, "RL_e5e7b4dd8f5c5a9e7fa56b5fcf3926f6");
var W2 = _2;
var F2 = class F2 extends t.GenericRecordList {
    static getItemType() {
        return gc
    }
};
r(F2, "RL_e689b1d5e863d2210639c8b8940a0d2e");
var H2 = F2;
var B2 = class B2 extends t.GenericRecordList {
    static getItemType() {
        return Xs
    }
};
r(B2, "RL_e6e5069f4a35d175fdfe79a6d3342703");
var M2 = B2;
var q2 = class q2 extends t.GenericRecordList {
    static getItemType() {
        return Vc
    }
};
r(q2, "RL_e6eb0a62197c37db299beb6105b3c02d");
var $2 = q2;
var U2 = class U2 extends t.GenericRecordList {
    static getItemType() {
        return Nr
    }
};
r(U2, "RL_e76c00ddf7abece102174559911adf6e");
var J2 = U2;
var j2 = class j2 extends t.GenericRecordList {
    static getItemType() {
        return Ra
    }
};
r(j2, "RL_e80a0f2e1d0d40303b1a689b4ad27a7b");
var z2 = j2;
var Q2 = class Q2 extends t.GenericRecordList {
    static getItemType() {
        return Bo
    }
};
r(Q2, "RL_e84e513163ad816621561ddde34cafa3");
var X2 = Q2;
var $d = class $d extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetTradingPlatformStatusResponse", "getTradingPlatformStatusResponseAttr", "GetTradingPlatformStatusResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Se)
        }, !0, Se)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new $d(new $d.RecordClass({
            getTradingPlatformStatusResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "ee239f88-c5d7-794f-e9f6-9be69a94411a"
    }
};
r($d, "RC_ee239f88c5d7794fe9f69be69a94411a");
var fu = $d;
fu.init();
var K2 = class K2 extends t.GenericRecordList {
    static getItemType() {
        return fu
    }
};
r(K2, "RL_e87e0e80051f6c55e06e3dcb63f790d9");
var Y2 = K2;
var eP = class eP extends t.GenericRecordList {
    static getItemType() {
        return ma
    }
};
r(eP, "RL_e8c7c8d9b0c15a0f31835e82c0493c59");
var Z2 = eP;
var rP = class rP extends t.GenericRecordList {
    static getItemType() {
        return Qe
    }
};
r(rP, "RL_e9493e2064d4adee404db0ec2ed9ea58");
var tP = rP;
var oP = class oP extends t.GenericRecordList {
    static getItemType() {
        return hn
    }
};
r(oP, "RL_e9715121ffbe4e5204c4a1c3804c7361");
var aP = oP;
var nP = class nP extends t.GenericRecordList {
    static getItemType() {
        return ke
    }
};
r(nP, "RL_e97ff3c0bfb989f1940aae6c80a5b4e2");
var sP = nP;
var uP = class uP extends t.GenericRecordList {
    static getItemType() {
        return Tt
    }
};
r(uP, "RL_e99c0d7d3b8c4842b2cb397266586399");
var cP = uP;
var lP = class lP extends t.GenericRecordList {
    static getItemType() {
        return Et
    }
};
r(lP, "RL_e9b4b68e021e5613bf728dccd1cf9139");
var iP = lP;
var dP = class dP extends t.GenericRecordList {
    static getItemType() {
        return be
    }
};
r(dP, "RL_e9b8e0faabc7236ff8432ae937c37582");
var fP = dP;
var TP = class TP extends t.GenericRecordList {
    static getItemType() {
        return Ue
    }
};
r(TP, "RL_ea01f38fd4ed134d9fe25df7dd6868c6");
var pP = TP;
var yP = class yP extends t.GenericRecordList {
    static getItemType() {
        return va
    }
};
r(yP, "RL_ea69c6358f758ea1e34787db7dc19db9");
var mP = yP;
var bP = class bP extends t.GenericRecordList {
    static getItemType() {
        return Hs
    }
};
r(bP, "RL_ea6b4a7a90122a1598d490842491288c");
var SP = bP;
var qd = class qd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StatementRequest", "statementRequestAttr", "StatementRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Pa)
        }, !0, Pa)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new qd(new qd.RecordClass({
            statementRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f9632cc2-4336-eb4b-b7e5-e5f64f7de5b5"
    }
};
r(qd, "RC_f9632cc24336eb4bb7e5e5f64f7de5b5");
var du = qd;
du.init();
var OP = class OP extends t.GenericRecordList {
    static getItemType() {
        return du
    }
};
r(OP, "RL_ea81ff3a6f3a76c2ed12260f624c4969");
var DP = OP;
var vP = class vP extends t.GenericRecordList {
    static getItemType() {
        return au
    }
};
r(vP, "RL_eba0c4cf72b2b3e62c746cfba3f154a7");
var AP = vP;
var xP = class xP extends t.GenericRecordList {
    static getItemType() {
        return ae
    }
};
r(xP, "RL_ebfadc626673a2cb97eaa02a96c0f7b1");
var gP = xP;
var IP = class IP extends t.GenericRecordList {
    static getItemType() {
        return wc
    }
};
r(IP, "RL_ec22c8a81ca6b85273257f4da311b491");
var RP = IP;
var PP = class PP extends t.GenericRecordList {
    static getItemType() {
        return uu
    }
};
r(PP, "RL_ece3ed6e115187092667bb2ed6368718");
var wP = PP;
var EP = class EP extends t.GenericRecordList {
    static getItemType() {
        return Oa
    }
};
r(EP, "RL_ece7ed41a3f28d1c15291a0f58620332");
var CP = EP;
var LP = class LP extends t.GenericRecordList {
    static getItemType() {
        return no
    }
};
r(LP, "RL_ed046b9a00e90447bae294a818054036");
var hP = LP;
var kP = class kP extends t.GenericRecordList {
    static getItemType() {
        return Dn
    }
};
r(kP, "RL_ed077587a2a2ae91a6da402a7068b922");
var VP = kP;
var GP = class GP extends t.GenericRecordList {
    static getItemType() {
        return Ls
    }
};
r(GP, "RL_efa24a85b9574efa4fcc498bf948428b");
var NP = GP;
var _P = class _P extends t.GenericRecordList {
    static getItemType() {
        return g
    }
};
r(_P, "RL_f078853eb4e1ea502520482773117b08");
var WP = _P;
var FP = class FP extends t.GenericRecordList {
    static getItemType() {
        return Da
    }
};
r(FP, "RL_f09c659879e2269528f7b678199b971f");
var HP = FP;
var Jd = class Jd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req12", "echo_req12Attr", "Echo_req12", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Na)
        }, !0, Na)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Jd(new Jd.RecordClass({
            echo_req12Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "fcf4341f-7efd-9506-f671-d9240030f6a0"
    }
};
r(Jd, "RC_fcf4341f7efd9506f671d9240030f6a0");
var pu = Jd;
pu.init();
var BP = class BP extends t.GenericRecordList {
    static getItemType() {
        return pu
    }
};
r(BP, "RL_f11b3648faafeee87f9baa4118b19aeb");
var MP = BP;
var qP = class qP extends t.GenericRecordList {
    static getItemType() {
        return $n
    }
};
r(qP, "RL_f15b302598caef69c6cdd4e0690795f9");
var $P = qP;
var UP = class UP extends t.GenericRecordList {
    static getItemType() {
        return wt
    }
};
r(UP, "RL_f3b2e91fdf0a2323522d24198d2308a9");
var JP = UP;
var jP = class jP extends t.GenericRecordList {
    static getItemType() {
        return Y
    }
};
r(jP, "RL_f3d5e0456ba6498c43c176da8eb24aac");
var zP = jP;
var QP = class QP extends t.GenericRecordList {
    static getItemType() {
        return st
    }
};
r(QP, "RL_f4798657318ea5aa25857d23b6f4d362");
var XP = QP;
var KP = class KP extends t.GenericRecordList {
    static getItemType() {
        return Sc
    }
};
r(KP, "RL_f565e985301ac9dd26dbfb84b70bf745");
var YP = KP;
var e7 = class e7 extends t.GenericRecordList {
    static getItemType() {
        return Rn
    }
};
r(e7, "RL_f6031c1bbdf2129f541b15130dcc6f35");
var ZP = e7;
var r7 = class r7 extends t.GenericRecordList {
    static getItemType() {
        return Gc
    }
};
r(r7, "RL_f63f2b83c2121dc349d7190f0745a6cf");
var t7 = r7;
var o7 = class o7 extends t.GenericRecordList {
    static getItemType() {
        return Xn
    }
};
r(o7, "RL_f7fbc672dcb160d0968ff55ca529958c");
var a7 = o7;
var n7 = class n7 extends t.GenericRecordList {
    static getItemType() {
        return I
    }
};
r(n7, "RL_f86ebd36d4538e51189d94807b597707");
var s7 = n7;
var u7 = class u7 extends t.GenericRecordList {
    static getItemType() {
        return iu
    }
};
r(u7, "RL_f898b92d666caff04b8ec558b53a2f60");
var c7 = u7;
var l7 = class l7 extends t.GenericRecordList {
    static getItemType() {
        return k
    }
};
r(l7, "RL_f8eb431cfa3719b526bb3d4eaa81a60a");
var i7 = l7;
var d7 = class d7 extends t.GenericRecordList {
    static getItemType() {
        return Ye
    }
};
r(d7, "RL_f905ae60fd778c280a86f4a55692cd45");
var f7 = d7;
var Ud = class Ud extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Authorize", "authorizeAttr", "Authorize", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ka)
        }, !0, ka)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ud(new Ud.RecordClass({
            authorizeAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f92c9dfd-eaab-a0d0-6f3a-62c3b604cf58"
    }
};
r(Ud, "RC_f92c9dfdeaaba0d06f3a62c3b604cf58");
var Tu = Ud;
Tu.init();
var T7 = class T7 extends t.GenericRecordList {
    static getItemType() {
        return Oc
    }
};
r(T7, "RL_f97a03a16fd2375285dc3e9458533295");
var p7 = T7;
var y7 = class y7 extends t.GenericRecordList {
    static getItemType() {
        return lu
    }
};
r(y7, "RL_f9cd69a99a23afb6393c39463c23b25f");
var m7 = y7;
var b7 = class b7 extends t.GenericRecordList {
    static getItemType() {
        return pn
    }
};
r(b7, "RL_f9cefb8116fef94f410821fd0b26bf72");
var S7 = b7;
var O7 = class O7 extends t.GenericRecordList {
    static getItemType() {
        return jn
    }
};
r(O7, "RL_fa00e44a222cdab3fe910e0337033680");
var D7 = O7;
var v7 = class v7 extends t.GenericRecordList {
    static getItemType() {
        return Qr
    }
};
r(v7, "RL_fa0811c05f47ad6ac421ba30d6fabadb");
var A7 = v7;
var x7 = class x7 extends t.GenericRecordList {
    static getItemType() {
        return Kc
    }
};
r(x7, "RL_fa7dab07e8682b9feaee7f3f61a4e712");
var g7 = x7;
var I7 = class I7 extends t.GenericRecordList {
    static getItemType() {
        return Kt
    }
};
r(I7, "RL_fbb2fb86c40f3e5602392d2ab7885f06");
var R7 = I7;
var P7 = class P7 extends t.GenericRecordList {
    static getItemType() {
        return oe
    }
};
r(P7, "RL_fbf59dcc654f2f0b7a14e0b382f6c6e6");
var w7 = P7;
var E7 = class E7 extends t.GenericRecordList {
    static getItemType() {
        return tu
    }
};
r(E7, "RL_fbfbc317c1e9a42a1150b702e238264d");
var C7 = E7;
var L7 = class L7 extends t.GenericRecordList {
    static getItemType() {
        return tt
    }
};
r(L7, "RL_fc49c3d0746a5ddcc900872f9c42917c");
var h7 = L7;
var k7 = class k7 extends t.GenericRecordList {
    static getItemType() {
        return Tu
    }
};
r(k7, "RL_fca3607c6d54863878369f2fe3a05b5b");
var V7 = k7;
var G7 = class G7 extends t.GenericRecordList {
    static getItemType() {
        return hc
    }
};
r(G7, "RL_fced28719a91c598d8625322837974e1");
var N7 = G7;
var _7 = class _7 extends t.GenericRecordList {
    static getItemType() {
        return fn
    }
};
r(_7, "RL_fdb8336efd8c04b2985357fda051ffd2");
var W7 = _7;
var F7 = class F7 extends t.GenericRecordList {
    static getItemType() {
        return eu
    }
};
r(F7, "RL_ffc322e565b2a052306b5285b03169dc");
var H7 = F7;
var B7 = class B7 extends t.GenericRecordList {
    static getItemType() {
        return su
    }
};
r(B7, "RL_fff77ec615be0e1e441a98afc10c6f02");
var M7 = B7;

function $7(l, a, f, i) {
    return new Promise(function(c, o) {
        function s(v) {
            return ip(this, arguments, function*(S, O = {}) {
                try {
                    let A = yield fetch(S, O);
                    return A.ok || (console.error(new Error(`HTTP error! Status: ${A.status}`)), c()), yield A.json()
                } catch (A) {
                    console.error(new Error("Errors: " + A))
                }
            })
        }
        r(s, "fetchHandler"), r(() => ip(this, null, function*() {
            let S = l.Host,
                O = l.AppId,
                v = l.Language,
                A = l.APIName,
                b = `https://${S}/websockets/${A}?app_id=${O}&l=${v}&brand=deriv`;
            try {
                let y = new Headers;
                y.append("Content-Type", "application/json"), l.AuthToken && y.append("X-Token", l.AuthToken);
                let p = X7({
                        headers: y,
                        method: l.Method
                    }, l.RequestBody ? {
                        body: l.RequestBody
                    } : {}),
                    T = yield s(b, p);
                l.Response = JSON.stringify(T), c()
            } catch (y) {
                console.error(y), c()
            }
        }), "fetchData")()
    })
}
r($7, "default");

function q7(l, a, f, i) {
    console.log("=====>", JSON.parse(l.In1))
}
r(q7, "default");

function J7(l, a, f, i) {
    console.log(l.In1)
}
r(J7, "default");

function U7(l, a, f, i) {
    console.log(l.In1)
}
r(U7, "default");
var e = n,
    j7 = class j7 extends e.Controller.BaseModuleController {
        constructor(a, f, i, c) {
            super(a, f, i, c)
        }
        get clientActionProxies() {
            return this.hasOwnProperty("_clientActionProxies") || (this._clientActionProxies = {}), this._clientActionProxies
        }
        set clientActionProxies(a) {
            this._clientActionProxies = a
        }
        get roles() {
            return this.hasOwnProperty("_roles") || (this._roles = {}), this._roles
        }
        set roles(a) {
            this._roles = a
        }
        get defaultTimeout() {
            return this.hasOwnProperty("_defaultTimeout") || (this._defaultTimeout = 10), this._defaultTimeout
        }
        set defaultTimeout(a) {
            this._defaultTimeout = a
        }
        getDefaultTimeout() {
            return this.defaultTimeout
        }
    };
r(j7, "Controller");
var z7 = j7,
    d = new z7,
    m = d;
d.accountList$Action = function(l, a, f, i, c) {
    return e.Logger.startActiveSpan("AccountList", function(o) {
        return o && (o.setAttribute("code.function", "AccountList"), o.setAttribute("outsystems.function.key", "f56c9e06-ce5f-4221-81a4-40ffce3bb9b4"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            c = m.callContext(c);
            var s = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.AccountList$vars")));
            s.value.appIdInLocal = l, s.value.languageInLocal = a, s.value.authorizeTokenInLocal = f, s.value.hostInLocal = i;
            var u = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                S = new e.DataTypes.VariableHolder,
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                b = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(ye))),
                y = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.AccountList$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return O.value = d.default.checkHost$Action(s.value.hostInLocal, c), e.Flow.executeSequence(function() {
                    return O.value.isGreenOut ? m.postAccountList$ServerAction(s.value.appIdInLocal, s.value.languageInLocal, s.value.authorizeTokenInLocal, c).then(function(p) {
                        S.value = p
                    }).then(function() {
                        y.value.responseOut = S.value.responseOut
                    }) : (A.value.jSONOut = e.JSONUtils.serializeToJSON(y.value.responseOut, !1, !1), d.default.fetchData$Action(s.value.appIdInLocal, s.value.languageInLocal, A.value.jSONOut, s.value.hostInLocal, "POST", "account_list", "", c).then(function(p) {
                        v.value = p
                    }).then(function() {
                        b.value.dataOut = e.JSONUtils.deserializeFromJSON(v.value.responseOut, ye, !1), y.value.responseOut = b.value.dataOut
                    }))
                })
            }).catch(function(p) {
                if (e.Logger.debug("AccountList.AccountList", e.Exceptions.getMessage(p)), e.Exceptions.isInstanceOf(p, e.Exceptions.Exceptions.CommunicationException)) return e.Logger.error(null, p, null, null, 1), u.value.exceptionMessageAttr = e.Exceptions.getMessage(p), e.Logger.startActiveSpan("CommunicationException", function(T) {
                    return T && (T.setAttribute("code.function", "CommunicationException"), T.setAttribute("outsystems.function.key", "505a36b2-55a5-4204-af9b-e943a420e7a9"), T.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), T.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), T.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return y.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(y.value)
                        })
                    }, function() {
                        T && T.end()
                    })
                }, 1);
                throw p
            }).then(function() {
                return y.value
            })
        }, function() {
            o && o.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.AccountList$vars", [{
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "AuthorizeToken",
    attrName: "authorizeTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.AccountList$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new ye
    }, "defaultValue"),
    complexType: ye
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.accountList$Action = function(l, a, f, i) {
    return l = l === void 0 ? 1 : l, a = a === void 0 ? "en" : a, f = f === void 0 ? "" : f, i = i === void 0 ? "" : i, m.executeActionInsideJSNode(d.default.accountList$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            Response: c.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(c.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.assetIndex$Action = function(l, a, f, i) {
    return e.Logger.startActiveSpan("AssetIndex", function(c) {
        return c && (c.setAttribute("code.function", "AssetIndex"), c.setAttribute("outsystems.function.key", "7c17fad8-1027-47f6-8f4c-72c039662d3b"), c.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), c.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), c.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            i = m.callContext(i);
            var o = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.AssetIndex$vars")));
            o.value.hostInLocal = l, o.value.appIdInLocal = a, o.value.languageInLocal = f;
            var s = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                u = new e.DataTypes.VariableHolder,
                S = new e.DataTypes.VariableHolder,
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(U))),
                A = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.AssetIndex$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return O.value = d.default.checkHost$Action(o.value.hostInLocal, i), e.Flow.executeSequence(function() {
                    return O.value.isGreenOut ? m.getAssetIndex$ServerAction(o.value.appIdInLocal, o.value.languageInLocal, i).then(function(b) {
                        u.value = b
                    }).then(function() {
                        A.value.responseOut = u.value.responseOut
                    }) : d.default.fetchData$Action(o.value.appIdInLocal, o.value.languageInLocal, "", o.value.hostInLocal, "GET", "get_settings", "", i).then(function(b) {
                        S.value = b
                    }).then(function() {
                        v.value.dataOut = e.JSONUtils.deserializeFromJSON(S.value.responseOut, U, !1), A.value.responseOut = v.value.dataOut
                    })
                })
            }).catch(function(b) {
                if (e.Logger.debug("AssetIndex.AssetIndex", e.Exceptions.getMessage(b)), !e.Exceptions.isSystem(b)) return e.Logger.error(null, b, null, null, 1), s.value.exceptionMessageAttr = e.Exceptions.getMessage(b), e.Logger.startActiveSpan("AllExceptions", function(y) {
                    return y && (y.setAttribute("code.function", "AllExceptions"), y.setAttribute("outsystems.function.key", "571385a5-9f7b-478b-9204-9bdef995fb94"), y.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), y.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), y.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return A.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(A.value)
                        })
                    }, function() {
                        y && y.end()
                    })
                }, 1);
                throw b
            }).then(function() {
                return A.value
            })
        }, function() {
            c && c.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.AssetIndex$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.AssetIndex$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new U
    }, "defaultValue"),
    complexType: U
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.assetIndex$Action = function(l, a, f) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? 1 : a, f = f === void 0 ? "en" : f, m.executeActionInsideJSNode(d.default.assetIndex$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(i) {
        return {
            Response: i.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(i.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.authorize$Action = function(l, a, f, i, c) {
    return e.Logger.startActiveSpan("Authorize", function(o) {
        return o && (o.setAttribute("code.function", "Authorize"), o.setAttribute("outsystems.function.key", "ca75e3f6-bdd2-4188-9963-d3e5b700ea32"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            c = m.callContext(c);
            var s = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.Authorize$vars")));
            s.value.requestInLocal = l.clone(), s.value.hostInLocal = a, s.value.appIdInLocal = f, s.value.languageInLocal = i;
            var u = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                S = new e.DataTypes.VariableHolder,
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                b = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(De))),
                y = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.Authorize$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return O.value = d.default.checkHost$Action(s.value.hostInLocal, c), e.Flow.executeSequence(function() {
                    return O.value.isGreenOut ? m.authorize$ServerAction(s.value.appIdInLocal, s.value.languageInLocal, s.value.requestInLocal, c).then(function(p) {
                        S.value = p
                    }).then(function() {
                        y.value.responseOut = S.value.responseOut
                    }) : (A.value.jSONOut = e.JSONUtils.serializeToJSON(s.value.requestInLocal, !1, !1), d.default.fetchData$Action(s.value.appIdInLocal, s.value.languageInLocal, A.value.jSONOut, s.value.hostInLocal, "POST", "authorize", "", c).then(function(p) {
                        v.value = p
                    }).then(function() {
                        b.value.dataOut = e.JSONUtils.deserializeFromJSON(v.value.responseOut, De, !1), y.value.responseOut = b.value.dataOut
                    }))
                })
            }).catch(function(p) {
                if (e.Logger.debug("Authorize.Authorize", e.Exceptions.getMessage(p)), !e.Exceptions.isSystem(p)) return e.Logger.error(null, p, null, null, 1), u.value.exceptionMessageAttr = e.Exceptions.getMessage(p), e.Logger.startActiveSpan("AllExceptions", function(T) {
                    return T && (T.setAttribute("code.function", "AllExceptions"), T.setAttribute("outsystems.function.key", "d80958c6-7d1d-4277-b4e0-6ab8428a6d24"), T.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), T.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), T.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return y.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(y.value)
                        })
                    }, function() {
                        T && T.end()
                    })
                }, 1);
                throw p
            }).then(function() {
                return y.value
            })
        }, function() {
            o && o.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.Authorize$vars", [{
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new ze
    }, "defaultValue"),
    complexType: ze
}, {
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.Authorize$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new De
    }, "defaultValue"),
    complexType: De
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.authorize$Action = function(l, a, f, i) {
    return l = l === void 0 ? new ze : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, m.executeActionInsideJSNode(d.default.authorize$Action.bind(m, l, e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            Response: c.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(c.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.cashierCrypto$Action = function(l, a, f, i, c, o) {
    return e.Logger.startActiveSpan("CashierCrypto", function(s) {
        return s && (s.setAttribute("code.function", "CashierCrypto"), s.setAttribute("outsystems.function.key", "83086d82-6a3b-47aa-afc6-4473dac85368"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            o = m.callContext(o);
            var u = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.CashierCrypto$vars")));
            u.value.hostInLocal = l, u.value.appIdInLocal = a, u.value.languageInLocal = f, u.value.authTokenInLocal = i, u.value.requestInLocal = c.clone();
            var S = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder,
                b = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(C))),
                y = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.CashierCrypto$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return v.value = d.default.checkHost$Action(u.value.hostInLocal, o), e.Flow.executeSequence(function() {
                    return v.value.isGreenOut ? m.postCashierCrypto$ServerAction(u.value.appIdInLocal, u.value.languageInLocal, u.value.authTokenInLocal, u.value.requestInLocal, o).then(function(p) {
                        O.value = p
                    }).then(function() {
                        y.value.responseOut = O.value.responseOut
                    }) : d.default.fetchData$Action(u.value.appIdInLocal, u.value.languageInLocal, "", u.value.hostInLocal, "POST", "cashier", "", o).then(function(p) {
                        A.value = p
                    }).then(function() {
                        b.value.dataOut = e.JSONUtils.deserializeFromJSON(A.value.responseOut, C, !1), y.value.responseOut = b.value.dataOut
                    })
                })
            }).catch(function(p) {
                if (e.Logger.debug("CashierCrypto.CashierCrypto", e.Exceptions.getMessage(p)), !e.Exceptions.isSystem(p)) return e.Logger.error(null, p, null, null, 1), S.value.exceptionMessageAttr = e.Exceptions.getMessage(p), e.Logger.startActiveSpan("AllExceptions", function(T) {
                    return T && (T.setAttribute("code.function", "AllExceptions"), T.setAttribute("outsystems.function.key", "e5e689c4-5e2a-44fc-afed-6677daac8c4d"), T.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), T.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), T.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return y.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(y.value)
                        })
                    }, function() {
                        T && T.end()
                    })
                }, 1);
                throw p
            }).then(function() {
                return y.value
            })
        }, function() {
            s && s.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.CashierCrypto$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Ae
    }, "defaultValue"),
    complexType: Ae
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.CashierCrypto$outVars", [{
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}, {
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new C
    }, "defaultValue"),
    complexType: C
}]);
d.clientActionProxies.cashierCrypto$Action = function(l, a, f, i, c) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? 1 : a, f = f === void 0 ? "en" : f, i = i === void 0 ? "" : i, c = c === void 0 ? new Ae : c, m.executeActionInsideJSNode(d.default.cashierCrypto$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text), c), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(o.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean),
            Response: o.responseOut
        }
    })
};
d.cashierFIAT$Action = function(l, a, f, i, c, o) {
    return e.Logger.startActiveSpan("CashierFIAT", function(s) {
        return s && (s.setAttribute("code.function", "CashierFIAT"), s.setAttribute("outsystems.function.key", "2c0521d7-ed3d-4025-b8ec-6985d22e2e58"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            o = m.callContext(o);
            var u = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.CashierFIAT$vars")));
            u.value.hostInLocal = l, u.value.appIdInLocal = a, u.value.languageInLocal = f, u.value.authTokenInLocal = i, u.value.requestInLocal = c.clone();
            var S = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder,
                b = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(C))),
                y = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.CashierFIAT$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return v.value = d.default.checkHost$Action(u.value.hostInLocal, o), e.Flow.executeSequence(function() {
                    return v.value.isGreenOut ? m.postCashierFiat$ServerAction(u.value.appIdInLocal, u.value.languageInLocal, u.value.authTokenInLocal, u.value.requestInLocal, o).then(function(p) {
                        O.value = p
                    }).then(function() {
                        y.value.responseOut = O.value.responseOut
                    }) : d.default.fetchData$Action(u.value.appIdInLocal, u.value.languageInLocal, "", u.value.hostInLocal, "POST", "cashier", "", o).then(function(p) {
                        A.value = p
                    }).then(function() {
                        b.value.dataOut = e.JSONUtils.deserializeFromJSON(A.value.responseOut, C, !1), y.value.responseOut = e.DataConversion.JSConversions.typeConvertRecord(b.value.dataOut, new ve, function(p, T) {
                            return T.cashierAttr = p.echo_reqAttr.cashierAttr, T.echo_reqAttr = p.echo_reqAttr, T.msg_typeAttr = p.msg_typeAttr, T.errorAttr = p.errorAttr, T
                        })
                    })
                })
            }).catch(function(p) {
                if (e.Logger.debug("CashierFIAT.CashierFIAT", e.Exceptions.getMessage(p)), !e.Exceptions.isSystem(p)) return e.Logger.error(null, p, null, null, 1), S.value.exceptionMessageAttr = e.Exceptions.getMessage(p), e.Logger.startActiveSpan("AllExceptions", function(T) {
                    return T && (T.setAttribute("code.function", "AllExceptions"), T.setAttribute("outsystems.function.key", "402fc91c-42fe-4728-a6f6-6f156a518627"), T.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), T.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), T.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return y.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(y.value)
                        })
                    }, function() {
                        T && T.end()
                    })
                }, 1);
                throw p
            }).then(function() {
                return y.value
            })
        }, function() {
            s && s.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.CashierFIAT$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Ae
    }, "defaultValue"),
    complexType: Ae
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.CashierFIAT$outVars", [{
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}, {
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new ve
    }, "defaultValue"),
    complexType: ve
}]);
d.clientActionProxies.cashierFIAT$Action = function(l, a, f, i, c) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? 1 : a, f = f === void 0 ? "en" : f, i = i === void 0 ? "" : i, c = c === void 0 ? new Ae : c, m.executeActionInsideJSNode(d.default.cashierFIAT$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text), c), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(o.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean),
            Response: o.responseOut
        }
    })
};
d.checkHost$Action = function(l, a) {
    return e.Logger.startActiveSpan("CheckHost", function(f) {
        f && (f.setAttribute("code.function", "CheckHost"), f.setAttribute("outsystems.function.key", "00c7c9fc-93e6-4532-a9d6-a1fbe8c30ede"), f.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), f.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), f.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            a = m.callContext(a);
            var i = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.CheckHost$vars")));
            i.value.hostInLocal = l;
            var c = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.CheckHost$outVars")));
            return i.value.hostInLocal === "green.derivws.com" ? c.value.isGreenOut = !0 : c.value.isGreenOut = !1, c.value
        } finally {
            f && f.end()
        }
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.CheckHost$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.CheckHost$outVars", [{
    name: "IsGreen",
    attrName: "isGreenOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.checkHost$Action = function(l) {
    return l = l === void 0 ? "" : l, m.executeActionInsideJSNode(d.default.checkHost$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(a) {
        return {
            IsGreen: e.DataConversion.JSNodeParamConverter.to(a.isGreenOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.fetchData$Action = function(l, a, f, i, c, o, s, u) {
    return e.Logger.startActiveSpan("FetchData", function(S) {
        return S && (S.setAttribute("code.function", "FetchData"), S.setAttribute("outsystems.function.key", "609da849-9d35-475b-a2a5-a06f1c7be78c"), S.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), S.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), S.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            u = m.callContext(u);
            var O = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.FetchData$vars")));
            O.value.appIdInLocal = l, O.value.languageInLocal = a, O.value.requestBodyInLocal = f, O.value.hostInLocal = i, O.value.methodInLocal = c, O.value.aPINameInLocal = o, O.value.authTokenInLocal = s;
            var v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.FetchData$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return e.Logger.startActiveSpan("Fetch", function(b) {
                    b && (b.setAttribute("code.function", "Fetch"), b.setAttribute("outsystems.function.key", "78a698e2-c952-415a-bb6d-d1198adb66b2"), b.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), b.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), b.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return m.safeExecuteAsyncJSNode($7, "Fetch", "FetchData", {
                            APIName: e.DataConversion.JSNodeParamConverter.to(O.value.aPINameInLocal, e.DataTypes.DataTypes.Text),
                            Method: e.DataConversion.JSNodeParamConverter.to(O.value.methodInLocal, e.DataTypes.DataTypes.Text),
                            RequestBody: e.DataConversion.JSNodeParamConverter.to(O.value.requestBodyInLocal, e.DataTypes.DataTypes.Text),
                            AuthToken: e.DataConversion.JSNodeParamConverter.to(O.value.authTokenInLocal, e.DataTypes.DataTypes.Text),
                            Host: e.DataConversion.JSNodeParamConverter.to(O.value.hostInLocal, e.DataTypes.DataTypes.Text),
                            Language: e.DataConversion.JSNodeParamConverter.to(O.value.languageInLocal, e.DataTypes.DataTypes.Text),
                            AppId: e.DataConversion.JSNodeParamConverter.to(O.value.appIdInLocal, e.DataTypes.DataTypes.Text),
                            Response: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                        }, function(y) {
                            var p = new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.FetchData$fetchJSResult"));
                            return p.responseOut = e.DataConversion.JSNodeParamConverter.from(y.Response, e.DataTypes.DataTypes.Text), p
                        }, {}, {})
                    } finally {
                        b && b.end()
                    }
                }, 1).then(function(b) {
                    v.value = b
                }).then(function() {
                    A.value.responseOut = v.value.responseOut
                })
            }).then(function() {
                return A.value
            })
        }, function() {
            S && S.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.FetchData$vars", [{
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "EN"
    }, "defaultValue")
}, {
    name: "RequestBody",
    attrName: "requestBodyInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Method",
    attrName: "methodInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "APIName",
    attrName: "aPINameInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.FetchData$fetchJSResult", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.FetchData$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
d.clientActionProxies.fetchData$Action = function(l, a, f, i, c, o, s) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "EN" : a, f = f === void 0 ? "" : f, i = i === void 0 ? "" : i, c = c === void 0 ? "" : c, o = o === void 0 ? "" : o, s = s === void 0 ? "" : s, m.executeActionInsideJSNode(d.default.fetchData$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(c, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(o, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(s, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(u) {
        return {
            Response: e.DataConversion.JSNodeParamConverter.to(u.responseOut, e.DataTypes.DataTypes.Text)
        }
    })
};
d.fetchLoginHistory$Action = function(l, a, f, i, c, o) {
    return e.Logger.startActiveSpan("FetchLoginHistory", function(s) {
        return s && (s.setAttribute("code.function", "FetchLoginHistory"), s.setAttribute("outsystems.function.key", "3a68a6be-e574-4706-8e9a-c79c06909260"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            o = m.callContext(o);
            var u = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.FetchLoginHistory$vars")));
            u.value.hostInLocal = l, u.value.authTokenInLocal = a, u.value.appIdInLocal = f, u.value.languageInLocal = i, u.value.requestInLocal = c.clone();
            var S = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder,
                b = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                y = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(te))),
                p = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.FetchLoginHistory$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return A.value = d.default.checkHost$Action(u.value.hostInLocal, o), e.Flow.executeSequence(function() {
                    return A.value.isGreenOut ? m.loginHistory$ServerAction(u.value.appIdInLocal, u.value.languageInLocal, u.value.requestInLocal, u.value.authTokenInLocal, o).then(function(T) {
                        O.value = T
                    }).then(function() {
                        p.value.responseOut = O.value.responseOut
                    }) : (b.value.jSONOut = e.JSONUtils.serializeToJSON(u.value.requestInLocal, !1, !1), d.default.fetchData$Action(u.value.appIdInLocal, u.value.languageInLocal, b.value.jSONOut, u.value.hostInLocal, "POST", "login_history", u.value.authTokenInLocal, o).then(function(T) {
                        v.value = T
                    }).then(function() {
                        y.value.dataOut = e.JSONUtils.deserializeFromJSON(v.value.responseOut, te, !0), p.value.responseOut = y.value.dataOut
                    }))
                })
            }).catch(function(T) {
                if (e.Logger.debug("FetchLoginHistory.FetchLoginHistory", e.Exceptions.getMessage(T)), !e.Exceptions.isSystem(T)) return e.Logger.error(null, T, null, null, 1), S.value.exceptionMessageAttr = e.Exceptions.getMessage(T), e.Logger.startActiveSpan("AllExceptions", function(D) {
                    return D && (D.setAttribute("code.function", "AllExceptions"), D.setAttribute("outsystems.function.key", "8c5f8524-7915-4034-8489-6a04dc35f762"), D.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), D.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), D.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return p.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(p.value)
                        })
                    }, function() {
                        D && D.end()
                    })
                }, 1);
                throw T
            }).then(function() {
                return p.value
            })
        }, function() {
            s && s.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.FetchLoginHistory$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new $e
    }, "defaultValue"),
    complexType: $e
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.FetchLoginHistory$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new te
    }, "defaultValue"),
    complexType: te
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.fetchLoginHistory$Action = function(l, a, f, i, c) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, c = c === void 0 ? new $e : c, m.executeActionInsideJSNode(d.default.fetchLoginHistory$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text), c), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Response: o.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(o.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.fetchServiceToken$Action = function(l, a, f, i, c, o) {
    return e.Logger.startActiveSpan("FetchServiceToken", function(s) {
        return s && (s.setAttribute("code.function", "FetchServiceToken"), s.setAttribute("outsystems.function.key", "d48c223b-94f3-426f-a7cc-2f5a5f28b8da"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            o = m.callContext(o);
            var u = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.FetchServiceToken$vars")));
            u.value.hostInLocal = l, u.value.authTokenInLocal = a, u.value.appIdInLocal = f, u.value.languageInLocal = i, u.value.requestInLocal = c.clone();
            var S = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder,
                b = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                y = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(z))),
                p = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.FetchServiceToken$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return v.value = d.default.checkHost$Action(u.value.hostInLocal, o), e.Flow.executeSequence(function() {
                    return v.value.isGreenOut ? m.fetchServiceToken$ServerAction(u.value.appIdInLocal, u.value.languageInLocal, u.value.requestInLocal, u.value.authTokenInLocal, o).then(function(T) {
                        O.value = T
                    }).then(function() {
                        p.value.responseOut = O.value.responseOut
                    }) : (b.value.jSONOut = e.JSONUtils.serializeToJSON(u.value.requestInLocal, !1, !1), d.default.fetchData$Action(u.value.appIdInLocal, u.value.languageInLocal, b.value.jSONOut, u.value.hostInLocal, "POST", "service_token", u.value.authTokenInLocal, o).then(function(T) {
                        A.value = T
                    }).then(function() {
                        y.value.dataOut = e.JSONUtils.deserializeFromJSON(A.value.responseOut, z, !1), p.value.responseOut = y.value.dataOut
                    }))
                })
            }).catch(function(T) {
                if (e.Logger.debug("FetchServiceToken.FetchServiceToken", e.Exceptions.getMessage(T)), !e.Exceptions.isSystem(T)) return e.Logger.error(null, T, null, null, 1), S.value.exceptionMessageAttr = e.Exceptions.getMessage(T), e.Logger.startActiveSpan("AllExceptions", function(D) {
                    return D && (D.setAttribute("code.function", "AllExceptions"), D.setAttribute("outsystems.function.key", "47f501e3-a057-414a-b091-5e391a3987f1"), D.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), D.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), D.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return p.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(p.value)
                        })
                    }, function() {
                        D && D.end()
                    })
                }, 1);
                throw T
            }).then(function() {
                return p.value
            })
        }, function() {
            s && s.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.FetchServiceToken$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new rt
    }, "defaultValue"),
    complexType: rt
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.FetchServiceToken$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new z
    }, "defaultValue"),
    complexType: z
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.fetchServiceToken$Action = function(l, a, f, i, c) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, c = c === void 0 ? new rt : c, m.executeActionInsideJSNode(d.default.fetchServiceToken$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text), c), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Response: o.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(o.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.getAccountStatus$Action = function(l, a, f, i, c) {
    return e.Logger.startActiveSpan("GetAccountStatus", function(o) {
        return o && (o.setAttribute("code.function", "GetAccountStatus"), o.setAttribute("outsystems.function.key", "1a5ea6f7-dfb8-42e1-a995-9c5e2b5c4367"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            c = m.callContext(c);
            var s = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetAccountStatus$vars")));
            s.value.hostInLocal = l, s.value.authTokenInLocal = a, s.value.appIdInLocal = f, s.value.languageInLocal = i;
            var u = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                S = new e.DataTypes.VariableHolder,
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(E))),
                b = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetAccountStatus$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return v.value = d.default.checkHost$Action(s.value.hostInLocal, c), e.Flow.executeSequence(function() {
                    return v.value.isGreenOut ? m.getAccountStatus$ServerAction(s.value.appIdInLocal, s.value.languageInLocal, s.value.authTokenInLocal, c).then(function(y) {
                        S.value = y
                    }).then(function() {
                        b.value.responseOut = S.value.responseOut
                    }) : d.default.fetchData$Action(s.value.appIdInLocal, s.value.languageInLocal, "", s.value.hostInLocal, "GET", "get_account_status", s.value.authTokenInLocal, c).then(function(y) {
                        O.value = y
                    }).then(function() {
                        A.value.dataOut = e.JSONUtils.deserializeFromJSON(O.value.responseOut, E, !1), b.value.responseOut = A.value.dataOut
                    })
                })
            }).catch(function(y) {
                if (e.Logger.debug("GetAccountStatus.GetAccountStatus", e.Exceptions.getMessage(y)), !e.Exceptions.isSystem(y)) return e.Logger.error(null, y, null, null, 1), u.value.exceptionMessageAttr = e.Exceptions.getMessage(y), e.Logger.startActiveSpan("AllExceptions", function(p) {
                    return p && (p.setAttribute("code.function", "AllExceptions"), p.setAttribute("outsystems.function.key", "02987aae-11f1-4075-a0a3-8cd18ea7acde"), p.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), p.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), p.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return b.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(b.value)
                        })
                    }, function() {
                        p && p.end()
                    })
                }, 1);
                throw y
            }).then(function() {
                return b.value
            })
        }, function() {
            o && o.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetAccountStatus$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetAccountStatus$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new E
    }, "defaultValue"),
    complexType: E
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.getAccountStatus$Action = function(l, a, f, i) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, m.executeActionInsideJSNode(d.default.getAccountStatus$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            Response: c.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(c.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.getFinancialAssessement$Action = function(l, a, f, i, c) {
    return e.Logger.startActiveSpan("GetFinancialAssessement", function(o) {
        return o && (o.setAttribute("code.function", "GetFinancialAssessement"), o.setAttribute("outsystems.function.key", "f0905615-1d95-4e61-8ca5-8a1a9647e4ee"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            c = m.callContext(c);
            var s = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetFinancialAssessement$vars")));
            s.value.hostInLocal = l, s.value.authTokenInLocal = a, s.value.appIdInLocal = f, s.value.languageInLocal = i;
            var u = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                S = new e.DataTypes.VariableHolder,
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(I))),
                b = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetFinancialAssessement$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return v.value = d.default.checkHost$Action(s.value.hostInLocal, c), e.Flow.executeSequence(function() {
                    return v.value.isGreenOut ? m.getFinancialAssessment$ServerAction(s.value.appIdInLocal, s.value.languageInLocal, s.value.authTokenInLocal, c).then(function(y) {
                        S.value = y
                    }).then(function() {
                        b.value.responseOut = S.value.responseOut
                    }) : d.default.fetchData$Action(s.value.appIdInLocal, s.value.languageInLocal, "", s.value.hostInLocal, "GET", "get_financial_assessment", s.value.authTokenInLocal, c).then(function(y) {
                        O.value = y
                    }).then(function() {
                        A.value.dataOut = e.JSONUtils.deserializeFromJSON(O.value.responseOut, I, !1), b.value.responseOut = A.value.dataOut
                    })
                })
            }).catch(function(y) {
                if (e.Logger.debug("GetFinancialAssessement.GetFinancialAssessement", e.Exceptions.getMessage(y)), !e.Exceptions.isSystem(y)) return e.Logger.error(null, y, null, null, 1), u.value.exceptionMessageAttr = e.Exceptions.getMessage(y), e.Logger.startActiveSpan("AllExceptions", function(p) {
                    return p && (p.setAttribute("code.function", "AllExceptions"), p.setAttribute("outsystems.function.key", "2da800ae-f64e-423f-bdb0-d2eefb506d2f"), p.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), p.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), p.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return b.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(b.value)
                        })
                    }, function() {
                        p && p.end()
                    })
                }, 1);
                throw y
            }).then(function() {
                return b.value
            })
        }, function() {
            o && o.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetFinancialAssessement$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetFinancialAssessement$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new I
    }, "defaultValue"),
    complexType: I
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.getFinancialAssessement$Action = function(l, a, f, i) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, m.executeActionInsideJSNode(d.default.getFinancialAssessement$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            Response: c.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(c.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.getMt5LoginList$Action = function(l, a, f, i, c) {
    return e.Logger.startActiveSpan("GetMt5LoginList", function(o) {
        return o && (o.setAttribute("code.function", "GetMt5LoginList"), o.setAttribute("outsystems.function.key", "117b3aa6-4772-4586-8615-7354e8063167"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            c = m.callContext(c);
            var s = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetMt5LoginList$vars")));
            s.value.hostInLocal = l, s.value.authTokenInLocal = a, s.value.appIdInLocal = f, s.value.languageInLocal = i;
            var u = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                S = new e.DataTypes.VariableHolder,
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(j))),
                b = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetMt5LoginList$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return v.value = d.default.checkHost$Action(s.value.hostInLocal, c), e.Flow.executeSequence(function() {
                    return v.value.isGreenOut ? m.getMT5LoginList$ServerAction(s.value.appIdInLocal, s.value.languageInLocal, s.value.authTokenInLocal, c).then(function(y) {
                        S.value = y
                    }).then(function() {
                        b.value.responseOut = S.value.responseOut
                    }) : d.default.fetchData$Action(s.value.appIdInLocal, s.value.languageInLocal, "", s.value.hostInLocal, "GET", "mt5_login_list", s.value.authTokenInLocal, c).then(function(y) {
                        O.value = y
                    }).then(function() {
                        A.value.dataOut = e.JSONUtils.deserializeFromJSON(O.value.responseOut, j, !1), b.value.responseOut = A.value.dataOut
                    })
                })
            }).catch(function(y) {
                if (e.Logger.debug("GetMt5LoginList.GetMt5LoginList", e.Exceptions.getMessage(y)), !e.Exceptions.isSystem(y)) return e.Logger.error(null, y, null, null, 1), u.value.exceptionMessageAttr = e.Exceptions.getMessage(y), e.Logger.startActiveSpan("AllExceptions", function(p) {
                    return p && (p.setAttribute("code.function", "AllExceptions"), p.setAttribute("outsystems.function.key", "481ebedc-ca57-4c8a-8a01-e6c1527985e5"), p.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), p.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), p.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return b.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(b.value)
                        })
                    }, function() {
                        p && p.end()
                    })
                }, 1);
                throw y
            }).then(function() {
                return b.value
            })
        }, function() {
            o && o.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetMt5LoginList$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetMt5LoginList$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new j
    }, "defaultValue"),
    complexType: j
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.getMt5LoginList$Action = function(l, a, f, i) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, m.executeActionInsideJSNode(d.default.getMt5LoginList$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            Response: c.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(c.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.getP2pAdvertInfo$Action = function(l, a, f, i, c, o) {
    return e.Logger.startActiveSpan("GetP2pAdvertInfo", function(s) {
        return s && (s.setAttribute("code.function", "GetP2pAdvertInfo"), s.setAttribute("outsystems.function.key", "43774149-4139-4b35-8b5c-e9d9692a680e"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            o = m.callContext(o);
            var u = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertInfo$vars")));
            u.value.hostInLocal = l, u.value.authTokenInLocal = a, u.value.appIdInLocal = f, u.value.languageInLocal = i, u.value.requestInLocal = c.clone();
            var S = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder,
                b = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                y = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(q))),
                p = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertInfo$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return v.value = d.default.checkHost$Action(u.value.hostInLocal, o), e.Flow.executeSequence(function() {
                    return v.value.isGreenOut ? m.getP2pAdvertInfo$ServerAction(u.value.appIdInLocal, u.value.languageInLocal, u.value.requestInLocal, o).then(function(T) {
                        O.value = T
                    }).then(function() {
                        p.value.responseOut = O.value.responseOut
                    }) : (b.value.jSONOut = e.JSONUtils.serializeToJSON(u.value.requestInLocal, !1, !1), d.default.fetchData$Action(u.value.appIdInLocal, u.value.languageInLocal, b.value.jSONOut, u.value.hostInLocal, "POST", "p2p_advert_info", u.value.authTokenInLocal, o).then(function(T) {
                        A.value = T
                    }).then(function() {
                        y.value.dataOut = e.JSONUtils.deserializeFromJSON(A.value.responseOut, q, !1), p.value.responseOut = y.value.dataOut
                    }))
                })
            }).catch(function(T) {
                if (e.Logger.debug("GetP2pAdvertInfo.GetP2pAdvertInfo", e.Exceptions.getMessage(T)), !e.Exceptions.isSystem(T)) return e.Logger.error(null, T, null, null, 1), S.value.exceptionMessageAttr = e.Exceptions.getMessage(T), e.Logger.startActiveSpan("AllExceptions", function(D) {
                    return D && (D.setAttribute("code.function", "AllExceptions"), D.setAttribute("outsystems.function.key", "0ace2493-1cfb-4ce4-a138-af27437bf5c4"), D.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), D.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), D.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return p.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(p.value)
                        })
                    }, function() {
                        D && D.end()
                    })
                }, 1);
                throw T
            }).then(function() {
                return p.value
            })
        }, function() {
            s && s.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertInfo$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new We
    }, "defaultValue"),
    complexType: We
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertInfo$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new q
    }, "defaultValue"),
    complexType: q
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.getP2pAdvertInfo$Action = function(l, a, f, i, c) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, c = c === void 0 ? new We : c, m.executeActionInsideJSNode(d.default.getP2pAdvertInfo$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text), c), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Response: o.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(o.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.getP2pAdvertiserAdverts$Action = function(l, a, f, i, c) {
    return e.Logger.startActiveSpan("GetP2pAdvertiserAdverts", function(o) {
        return o && (o.setAttribute("code.function", "GetP2pAdvertiserAdverts"), o.setAttribute("outsystems.function.key", "715d7081-b741-4e5a-af4c-304e4482bb19"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            c = m.callContext(c);
            var s = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertiserAdverts$vars")));
            s.value.hostInLocal = l, s.value.authTokenInLocal = a, s.value.appIdInLocal = f, s.value.languageInLocal = i;
            var u = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                S = new e.DataTypes.VariableHolder,
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(Z))),
                b = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertiserAdverts$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return v.value = d.default.checkHost$Action(s.value.hostInLocal, c), e.Flow.executeSequence(function() {
                    return v.value.isGreenOut ? m.getP2pAdvertiserAdverts$ServerAction(s.value.appIdInLocal, s.value.languageInLocal, c).then(function(y) {
                        S.value = y
                    }).then(function() {
                        b.value.responseOut = S.value.responseOut
                    }) : d.default.fetchData$Action(s.value.appIdInLocal, s.value.languageInLocal, "", s.value.hostInLocal, "POST", "p2p_advertiser_adverts", s.value.authTokenInLocal, c).then(function(y) {
                        O.value = y
                    }).then(function() {
                        A.value.dataOut = e.JSONUtils.deserializeFromJSON(O.value.responseOut, Z, !1), b.value.responseOut = A.value.dataOut
                    })
                })
            }).catch(function(y) {
                if (e.Logger.debug("GetP2pAdvertiserAdverts.GetP2pAdvertiserAdverts", e.Exceptions.getMessage(y)), !e.Exceptions.isSystem(y)) return e.Logger.error(null, y, null, null, 1), u.value.exceptionMessageAttr = e.Exceptions.getMessage(y), e.Logger.startActiveSpan("AllExceptions", function(p) {
                    return p && (p.setAttribute("code.function", "AllExceptions"), p.setAttribute("outsystems.function.key", "7ff60e09-1ea9-4e29-a5de-d95c346088ea"), p.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), p.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), p.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return b.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(b.value)
                        })
                    }, function() {
                        p && p.end()
                    })
                }, 1);
                throw y
            }).then(function() {
                return b.value
            })
        }, function() {
            o && o.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertiserAdverts$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertiserAdverts$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Z
    }, "defaultValue"),
    complexType: Z
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.getP2pAdvertiserAdverts$Action = function(l, a, f, i) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, m.executeActionInsideJSNode(d.default.getP2pAdvertiserAdverts$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            Response: c.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(c.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.getP2pAdvertiserInfo$Action = function(l, a, f, i, c, o) {
    return e.Logger.startActiveSpan("GetP2pAdvertiserInfo", function(s) {
        return s && (s.setAttribute("code.function", "GetP2pAdvertiserInfo"), s.setAttribute("outsystems.function.key", "6834ebd6-5041-4bc4-a3e2-cd732b79ef87"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            o = m.callContext(o);
            var u = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertiserInfo$vars")));
            u.value.hostInLocal = l, u.value.authTokenInLocal = a, u.value.appIdInLocal = f, u.value.languageInLocal = i, u.value.requestInLocal = c.clone();
            var S = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder,
                b = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                y = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType($))),
                p = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertiserInfo$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return v.value = d.default.checkHost$Action(u.value.hostInLocal, o), e.Flow.executeSequence(function() {
                    return v.value.isGreenOut ? m.getP2pAdvertiserInfo$ServerAction(u.value.appIdInLocal, u.value.languageInLocal, u.value.requestInLocal, o).then(function(T) {
                        O.value = T
                    }).then(function() {
                        p.value.responseOut = O.value.responseOut
                    }) : (b.value.jSONOut = e.JSONUtils.serializeToJSON(u.value.requestInLocal, !1, !1), d.default.fetchData$Action(u.value.appIdInLocal, u.value.languageInLocal, b.value.jSONOut, u.value.hostInLocal, "POST", "p2p_advertiser_info", u.value.authTokenInLocal, o).then(function(T) {
                        A.value = T
                    }).then(function() {
                        y.value.dataOut = e.JSONUtils.deserializeFromJSON(A.value.responseOut, $, !1), p.value.responseOut = y.value.dataOut
                    }))
                })
            }).catch(function(T) {
                if (e.Logger.debug("GetP2pAdvertiserInfo.GetP2pAdvertiserInfo", e.Exceptions.getMessage(T)), !e.Exceptions.isSystem(T)) return e.Logger.error(null, T, null, null, 1), S.value.exceptionMessageAttr = e.Exceptions.getMessage(T), e.Logger.startActiveSpan("AllExceptions", function(D) {
                    return D && (D.setAttribute("code.function", "AllExceptions"), D.setAttribute("outsystems.function.key", "14abeaec-af14-41ce-9fd6-65b3491fe935"), D.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), D.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), D.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return p.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(p.value)
                        })
                    }, function() {
                        D && D.end()
                    })
                }, 1);
                throw T
            }).then(function() {
                return p.value
            })
        }, function() {
            s && s.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertiserInfo$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Ue
    }, "defaultValue"),
    complexType: Ue
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertiserInfo$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new $
    }, "defaultValue"),
    complexType: $
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.getP2pAdvertiserInfo$Action = function(l, a, f, i, c) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, c = c === void 0 ? new Ue : c, m.executeActionInsideJSNode(d.default.getP2pAdvertiserInfo$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text), c), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Response: o.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(o.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.getP2pAdvertiserList$Action = function(l, a, f, i, c) {
    return e.Logger.startActiveSpan("GetP2pAdvertiserList", function(o) {
        return o && (o.setAttribute("code.function", "GetP2pAdvertiserList"), o.setAttribute("outsystems.function.key", "0071cda5-9bec-477c-bdab-435a30275c2e"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            c = m.callContext(c);
            var s = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertiserList$vars")));
            s.value.hostInLocal = l, s.value.authTokenInLocal = a, s.value.appIdInLocal = f, s.value.languageInLocal = i;
            var u = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                S = new e.DataTypes.VariableHolder,
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(H))),
                b = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertiserList$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return O.value = d.default.checkHost$Action(s.value.hostInLocal, c), e.Flow.executeSequence(function() {
                    return O.value.isGreenOut ? m.getP2pAdvertiserList$ServerAction(s.value.appIdInLocal, s.value.languageInLocal, c).then(function(y) {
                        S.value = y
                    }).then(function() {
                        b.value.responseOut = S.value.responseOut
                    }) : d.default.fetchData$Action(s.value.appIdInLocal, s.value.languageInLocal, "", s.value.hostInLocal, "POST", "p2p_advertiser_list", s.value.authTokenInLocal, c).then(function(y) {
                        v.value = y
                    }).then(function() {
                        A.value.dataOut = e.JSONUtils.deserializeFromJSON(v.value.responseOut, H, !1), b.value.responseOut = A.value.dataOut
                    })
                })
            }).catch(function(y) {
                if (e.Logger.debug("GetP2pAdvertiserList.GetP2pAdvertiserList", e.Exceptions.getMessage(y)), !e.Exceptions.isSystem(y)) return e.Logger.error(null, y, null, null, 1), u.value.exceptionMessageAttr = e.Exceptions.getMessage(y), e.Logger.startActiveSpan("AllExceptions", function(p) {
                    return p && (p.setAttribute("code.function", "AllExceptions"), p.setAttribute("outsystems.function.key", "e31af192-0428-4dd1-8be6-162606a7a1a6"), p.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), p.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), p.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return b.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(b.value)
                        })
                    }, function() {
                        p && p.end()
                    })
                }, 1);
                throw y
            }).then(function() {
                return b.value
            })
        }, function() {
            o && o.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertiserList$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertiserList$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new H
    }, "defaultValue"),
    complexType: H
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.getP2pAdvertiserList$Action = function(l, a, f, i) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, m.executeActionInsideJSNode(d.default.getP2pAdvertiserList$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            Response: c.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(c.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.getP2pAdvertList$Action = function(l, a, f, i, c) {
    return e.Logger.startActiveSpan("GetP2pAdvertList", function(o) {
        return o && (o.setAttribute("code.function", "GetP2pAdvertList"), o.setAttribute("outsystems.function.key", "2df80b92-4a5b-4e29-8d2f-98e85cf094a8"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            c = m.callContext(c);
            var s = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertList$vars")));
            s.value.hostInLocal = l, s.value.authTokenInLocal = a, s.value.appIdInLocal = f, s.value.languageInLocal = i;
            var u = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                S = new e.DataTypes.VariableHolder,
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(V))),
                b = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertList$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return O.value = d.default.checkHost$Action(s.value.hostInLocal, c), e.Flow.executeSequence(function() {
                    return O.value.isGreenOut ? m.getP2pAdvertList$ServerAction(s.value.appIdInLocal, s.value.languageInLocal, c).then(function(y) {
                        S.value = y
                    }).then(function() {
                        b.value.responseOut = S.value.responseOut
                    }) : d.default.fetchData$Action(s.value.appIdInLocal, s.value.languageInLocal, "", s.value.hostInLocal, "POST", "p2p_advert_list", s.value.authTokenInLocal, c).then(function(y) {
                        v.value = y
                    }).then(function() {
                        A.value.dataOut = e.JSONUtils.deserializeFromJSON(v.value.responseOut, V, !1), b.value.responseOut = A.value.dataOut
                    })
                })
            }).catch(function(y) {
                if (e.Logger.debug("GetP2pAdvertList.GetP2pAdvertList", e.Exceptions.getMessage(y)), !e.Exceptions.isSystem(y)) return e.Logger.error(null, y, null, null, 1), u.value.exceptionMessageAttr = e.Exceptions.getMessage(y), e.Logger.startActiveSpan("AllExceptions", function(p) {
                    return p && (p.setAttribute("code.function", "AllExceptions"), p.setAttribute("outsystems.function.key", "28059899-0d2a-4ac3-b7c1-9a1173b03f52"), p.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), p.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), p.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return b.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(b.value)
                        })
                    }, function() {
                        p && p.end()
                    })
                }, 1);
                throw y
            }).then(function() {
                return b.value
            })
        }, function() {
            o && o.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertList$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pAdvertList$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new V
    }, "defaultValue"),
    complexType: V
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.getP2pAdvertList$Action = function(l, a, f, i) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, m.executeActionInsideJSNode(d.default.getP2pAdvertList$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            Response: c.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(c.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.getP2pCountryList$Action = function(l, a, f, i, c) {
    return e.Logger.startActiveSpan("GetP2pCountryList", function(o) {
        return o && (o.setAttribute("code.function", "GetP2pCountryList"), o.setAttribute("outsystems.function.key", "0bd34a40-0a06-4fd4-b82c-dc2256fd41e5"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            c = m.callContext(c);
            var s = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pCountryList$vars")));
            s.value.hostInLocal = l, s.value.authTokenInLocal = a, s.value.appIdInLocal = f, s.value.languageInLocal = i;
            var u = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                S = new e.DataTypes.VariableHolder,
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(me))),
                b = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pCountryList$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return O.value = d.default.checkHost$Action(s.value.hostInLocal, c), e.Flow.executeSequence(function() {
                    return O.value.isGreenOut ? m.getP2pCountryList$ServerAction(s.value.appIdInLocal, s.value.languageInLocal, c).then(function(y) {
                        S.value = y
                    }).then(function() {
                        b.value.responseOut = S.value.responseOut
                    }) : d.default.fetchData$Action(s.value.appIdInLocal, s.value.languageInLocal, "", s.value.hostInLocal, "POST", "p2p_country_list", s.value.authTokenInLocal, c).then(function(y) {
                        v.value = y
                    }).then(function() {
                        A.value.dataOut = e.JSONUtils.deserializeFromJSON(v.value.responseOut, me, !1), b.value.responseOut = A.value.dataOut
                    })
                })
            }).catch(function(y) {
                if (e.Logger.debug("GetP2pCountryList.GetP2pCountryList", e.Exceptions.getMessage(y)), !e.Exceptions.isSystem(y)) return e.Logger.error(null, y, null, null, 1), u.value.exceptionMessageAttr = e.Exceptions.getMessage(y), e.Logger.startActiveSpan("AllExceptions", function(p) {
                    return p && (p.setAttribute("code.function", "AllExceptions"), p.setAttribute("outsystems.function.key", "0da79e36-6883-44ab-a2ac-6a6b1a85bf29"), p.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), p.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), p.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return b.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(b.value)
                        })
                    }, function() {
                        p && p.end()
                    })
                }, 1);
                throw y
            }).then(function() {
                return b.value
            })
        }, function() {
            o && o.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pCountryList$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pCountryList$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new me
    }, "defaultValue"),
    complexType: me
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.getP2pCountryList$Action = function(l, a, f, i) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, m.executeActionInsideJSNode(d.default.getP2pCountryList$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            Response: c.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(c.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.getP2pOrderInfo$Action = function(l, a, f, i, c, o) {
    return e.Logger.startActiveSpan("GetP2pOrderInfo", function(s) {
        return s && (s.setAttribute("code.function", "GetP2pOrderInfo"), s.setAttribute("outsystems.function.key", "923f0db9-180a-4536-ad97-fdc020cd41a2"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            o = m.callContext(o);
            var u = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pOrderInfo$vars")));
            u.value.hostInLocal = l, u.value.authTokenInLocal = a, u.value.appIdInLocal = f, u.value.languageInLocal = i, u.value.requestInLocal = c.clone();
            var S = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder,
                b = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                y = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(W))),
                p = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pOrderInfo$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return A.value = d.default.checkHost$Action(u.value.hostInLocal, o), e.Flow.executeSequence(function() {
                    return A.value.isGreenOut ? m.getP2pOrderInfo$ServerAction(u.value.appIdInLocal, u.value.languageInLocal, u.value.requestInLocal, o).then(function(T) {
                        O.value = T
                    }).then(function() {
                        p.value.responseOut = O.value.responseOut
                    }) : (b.value.jSONOut = e.JSONUtils.serializeToJSON(u.value.requestInLocal, !1, !1), d.default.fetchData$Action(u.value.appIdInLocal, u.value.languageInLocal, b.value.jSONOut, u.value.hostInLocal, "POST", "p2p_order_info", u.value.authTokenInLocal, o).then(function(T) {
                        v.value = T
                    }).then(function() {
                        y.value.dataOut = e.JSONUtils.deserializeFromJSON(v.value.responseOut, W, !1), p.value.responseOut = y.value.dataOut
                    }))
                })
            }).catch(function(T) {
                if (e.Logger.debug("GetP2pOrderInfo.GetP2pOrderInfo", e.Exceptions.getMessage(T)), !e.Exceptions.isSystem(T)) return e.Logger.error(null, T, null, null, 1), S.value.exceptionMessageAttr = e.Exceptions.getMessage(T), e.Logger.startActiveSpan("AllExceptions", function(D) {
                    return D && (D.setAttribute("code.function", "AllExceptions"), D.setAttribute("outsystems.function.key", "0384af5e-a8b1-4a46-a4b6-542f1e5a29b9"), D.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), D.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), D.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return p.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(p.value)
                        })
                    }, function() {
                        D && D.end()
                    })
                }, 1);
                throw T
            }).then(function() {
                return p.value
            })
        }, function() {
            s && s.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pOrderInfo$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Be
    }, "defaultValue"),
    complexType: Be
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pOrderInfo$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new W
    }, "defaultValue"),
    complexType: W
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.getP2pOrderInfo$Action = function(l, a, f, i, c) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, c = c === void 0 ? new Be : c, m.executeActionInsideJSNode(d.default.getP2pOrderInfo$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text), c), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Response: o.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(o.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.getP2pOrderList$Action = function(l, a, f, i, c) {
    return e.Logger.startActiveSpan("GetP2pOrderList", function(o) {
        return o && (o.setAttribute("code.function", "GetP2pOrderList"), o.setAttribute("outsystems.function.key", "e896894b-01e8-47b7-b237-373e07e8c4ce"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            c = m.callContext(c);
            var s = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pOrderList$vars")));
            s.value.hostInLocal = l, s.value.authTokenInLocal = a, s.value.appIdInLocal = f, s.value.languageInLocal = i;
            var u = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                S = new e.DataTypes.VariableHolder,
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(ie))),
                b = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pOrderList$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return O.value = d.default.checkHost$Action(s.value.hostInLocal, c), e.Flow.executeSequence(function() {
                    return O.value.isGreenOut ? m.getP2pOrderList$ServerAction(s.value.appIdInLocal, s.value.languageInLocal, c).then(function(y) {
                        S.value = y
                    }).then(function() {
                        b.value.responseOut = S.value.responseOut
                    }) : d.default.fetchData$Action(s.value.appIdInLocal, s.value.languageInLocal, "", s.value.hostInLocal, "POST", "p2p_order_list", s.value.authTokenInLocal, c).then(function(y) {
                        v.value = y
                    }).then(function() {
                        A.value.dataOut = e.JSONUtils.deserializeFromJSON(v.value.responseOut, ie, !1), b.value.responseOut = A.value.dataOut
                    })
                })
            }).catch(function(y) {
                if (e.Logger.debug("GetP2pOrderList.GetP2pOrderList", e.Exceptions.getMessage(y)), !e.Exceptions.isSystem(y)) return e.Logger.error(null, y, null, null, 1), u.value.exceptionMessageAttr = e.Exceptions.getMessage(y), e.Logger.startActiveSpan("AllExceptions", function(p) {
                    return p && (p.setAttribute("code.function", "AllExceptions"), p.setAttribute("outsystems.function.key", "9aee0d2a-2c84-4acc-bb0b-b650ab5273e6"), p.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), p.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), p.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return b.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(b.value)
                        })
                    }, function() {
                        p && p.end()
                    })
                }, 1);
                throw y
            }).then(function() {
                return b.value
            })
        }, function() {
            o && o.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pOrderList$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pOrderList$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new ie
    }, "defaultValue"),
    complexType: ie
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.getP2pOrderList$Action = function(l, a, f, i) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, m.executeActionInsideJSNode(d.default.getP2pOrderList$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            Response: c.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(c.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.getP2pPaymentMethods$Action = function(l, a, f, i, c) {
    return e.Logger.startActiveSpan("GetP2pPaymentMethods", function(o) {
        return o && (o.setAttribute("code.function", "GetP2pPaymentMethods"), o.setAttribute("outsystems.function.key", "e97da8f3-e2df-4a7c-90f0-06b7e890000c"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            c = m.callContext(c);
            var s = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pPaymentMethods$vars")));
            s.value.hostInLocal = l, s.value.authTokenInLocal = a, s.value.appIdInLocal = f, s.value.languageInLocal = i;
            var u = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                S = new e.DataTypes.VariableHolder,
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                b = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pPaymentMethods$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return O.value = d.default.checkHost$Action(s.value.hostInLocal, c), e.Flow.executeSequence(function() {
                    return O.value.isGreenOut ? m.getP2pPaymentMethods$ServerAction(s.value.appIdInLocal, s.value.languageInLocal, c).then(function(y) {
                        S.value = y
                    }).then(function() {
                        A.value.jSONOut = e.JSONUtils.serializeToJSON(S.value.responseOut, !1, !1), b.value.responseOut = A.value.jSONOut
                    }) : d.default.fetchData$Action(s.value.appIdInLocal, s.value.languageInLocal, "", s.value.hostInLocal, "GET", "p2p_payment_methods", s.value.authTokenInLocal, c).then(function(y) {
                        v.value = y
                    }).then(function() {
                        b.value.responseOut = v.value.responseOut
                    })
                })
            }).catch(function(y) {
                if (e.Logger.debug("GetP2pPaymentMethods.GetP2pPaymentMethods", e.Exceptions.getMessage(y)), !e.Exceptions.isSystem(y)) return e.Logger.error(null, y, null, null, 1), u.value.exceptionMessageAttr = e.Exceptions.getMessage(y), e.Logger.startActiveSpan("AllExceptions", function(p) {
                    return p && (p.setAttribute("code.function", "AllExceptions"), p.setAttribute("outsystems.function.key", "a5c89621-717a-47d7-a02f-3839081549e2"), p.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), p.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), p.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return b.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(b.value)
                        })
                    }, function() {
                        p && p.end()
                    })
                }, 1);
                throw y
            }).then(function() {
                return b.value
            })
        }, function() {
            o && o.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pPaymentMethods$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pPaymentMethods$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.getP2pPaymentMethods$Action = function(l, a, f, i) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, m.executeActionInsideJSNode(d.default.getP2pPaymentMethods$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            Response: e.DataConversion.JSNodeParamConverter.to(c.responseOut, e.DataTypes.DataTypes.Text),
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(c.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.getP2pSettings$Action = function(l, a, f, i, c) {
    return e.Logger.startActiveSpan("GetP2pSettings", function(o) {
        return o && (o.setAttribute("code.function", "GetP2pSettings"), o.setAttribute("outsystems.function.key", "f6b943ca-6027-41fa-b033-cfd63d7594ab"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            c = m.callContext(c);
            var s = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pSettings$vars")));
            s.value.hostInLocal = l, s.value.authTokenInLocal = a, s.value.appIdInLocal = f, s.value.languageInLocal = i;
            var u = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                S = new e.DataTypes.VariableHolder,
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(re))),
                b = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetP2pSettings$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return O.value = d.default.checkHost$Action(s.value.hostInLocal, c), e.Flow.executeSequence(function() {
                    return O.value.isGreenOut ? m.getP2pSettings$ServerAction(s.value.appIdInLocal, s.value.languageInLocal, c).then(function(y) {
                        S.value = y
                    }).then(function() {
                        b.value.responseOut = S.value.responseOut
                    }) : d.default.fetchData$Action(s.value.appIdInLocal, s.value.languageInLocal, "", s.value.hostInLocal, "POST", "p2p_settings", s.value.authTokenInLocal, c).then(function(y) {
                        v.value = y
                    }).then(function() {
                        A.value.dataOut = e.JSONUtils.deserializeFromJSON(v.value.responseOut, re, !1), b.value.responseOut = A.value.dataOut
                    })
                })
            }).catch(function(y) {
                if (e.Logger.debug("GetP2pSettings.GetP2pSettings", e.Exceptions.getMessage(y)), !e.Exceptions.isSystem(y)) return e.Logger.error(null, y, null, null, 1), u.value.exceptionMessageAttr = e.Exceptions.getMessage(y), e.Logger.startActiveSpan("AllExceptions", function(p) {
                    return p && (p.setAttribute("code.function", "AllExceptions"), p.setAttribute("outsystems.function.key", "b4695201-e0c0-4ec9-99e0-60281fd8a75b"), p.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), p.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), p.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return b.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(b.value)
                        })
                    }, function() {
                        p && p.end()
                    })
                }, 1);
                throw y
            }).then(function() {
                return b.value
            })
        }, function() {
            o && o.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pSettings$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetP2pSettings$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new re
    }, "defaultValue"),
    complexType: re
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.getP2pSettings$Action = function(l, a, f, i) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, m.executeActionInsideJSNode(d.default.getP2pSettings$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            Response: c.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(c.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.getPartnerAccount$Action = function(l, a, f, i, c) {
    return e.Logger.startActiveSpan("GetPartnerAccount", function(o) {
        return o && (o.setAttribute("code.function", "GetPartnerAccount"), o.setAttribute("outsystems.function.key", "92db5b2d-76a6-42c4-b6d0-97af9c26b448"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            c = m.callContext(c);
            var s = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetPartnerAccount$vars")));
            s.value.hostInLocal = l, s.value.authTokenInLocal = a, s.value.appIdInLocal = f, s.value.languageInLocal = i;
            var u = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                S = new e.DataTypes.VariableHolder,
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(K))),
                b = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetPartnerAccount$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return v.value = d.default.checkHost$Action(s.value.hostInLocal, c), e.Flow.executeSequence(function() {
                    return v.value.isGreenOut ? m.partnerAccount$ServerAction(s.value.appIdInLocal, s.value.languageInLocal, s.value.authTokenInLocal, c).then(function(y) {
                        S.value = y
                    }).then(function() {
                        b.value.responseOut = S.value.responseOut
                    }) : d.default.fetchData$Action(s.value.appIdInLocal, s.value.languageInLocal, "", s.value.hostInLocal, "GET", "partner_accounts", s.value.authTokenInLocal, c).then(function(y) {
                        O.value = y
                    }).then(function() {
                        A.value.dataOut = e.JSONUtils.deserializeFromJSON(O.value.responseOut, K, !1), b.value.responseOut = A.value.dataOut
                    })
                })
            }).catch(function(y) {
                if (e.Logger.debug("GetPartnerAccount.GetPartnerAccount", e.Exceptions.getMessage(y)), !e.Exceptions.isSystem(y)) return e.Logger.error(null, y, null, null, 1), u.value.exceptionMessageAttr = e.Exceptions.getMessage(y), e.Logger.startActiveSpan("AllExceptions", function(p) {
                    return p && (p.setAttribute("code.function", "AllExceptions"), p.setAttribute("outsystems.function.key", "835f855d-2889-4f5d-b898-d643fab7aeba"), p.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), p.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), p.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return b.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(b.value)
                        })
                    }, function() {
                        p && p.end()
                    })
                }, 1);
                throw y
            }).then(function() {
                return b.value
            })
        }, function() {
            o && o.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetPartnerAccount$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetPartnerAccount$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new K
    }, "defaultValue"),
    complexType: K
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.getPartnerAccount$Action = function(l, a, f, i) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, m.executeActionInsideJSNode(d.default.getPartnerAccount$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            Response: c.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(c.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.getSettings$Action = function(l, a, f, i, c) {
    return e.Logger.startActiveSpan("GetSettings", function(o) {
        return o && (o.setAttribute("code.function", "GetSettings"), o.setAttribute("outsystems.function.key", "0fa4225e-5367-4fbf-b85e-87a5f0ca0e54"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            c = m.callContext(c);
            var s = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetSettings$vars")));
            s.value.hostInLocal = l, s.value.authTokenInLocal = a, s.value.appIdInLocal = f, s.value.languageInLocal = i;
            var u = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                S = new e.DataTypes.VariableHolder,
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(J))),
                b = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetSettings$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return v.value = d.default.checkHost$Action(s.value.hostInLocal, c), e.Flow.executeSequence(function() {
                    return v.value.isGreenOut ? m.getSettings$ServerAction(s.value.appIdInLocal, s.value.languageInLocal, s.value.authTokenInLocal, c).then(function(y) {
                        S.value = y
                    }).then(function() {
                        b.value.responseOut = S.value.responseOut
                    }) : d.default.fetchData$Action(s.value.appIdInLocal, s.value.languageInLocal, "", s.value.hostInLocal, "GET", "get_settings", s.value.authTokenInLocal, c).then(function(y) {
                        O.value = y
                    }).then(function() {
                        A.value.dataOut = e.JSONUtils.deserializeFromJSON(O.value.responseOut, J, !1), b.value.responseOut = A.value.dataOut
                    })
                })
            }).catch(function(y) {
                if (e.Logger.debug("GetSettings.GetSettings", e.Exceptions.getMessage(y)), !e.Exceptions.isSystem(y)) return e.Logger.error(null, y, null, null, 1), u.value.exceptionMessageAttr = e.Exceptions.getMessage(y), e.Logger.startActiveSpan("AllExceptions", function(p) {
                    return p && (p.setAttribute("code.function", "AllExceptions"), p.setAttribute("outsystems.function.key", "a0f43956-c791-4f0c-8b7b-3442bb6ca6c5"), p.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), p.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), p.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return b.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(b.value)
                        })
                    }, function() {
                        p && p.end()
                    })
                }, 1);
                throw y
            }).then(function() {
                return b.value
            })
        }, function() {
            o && o.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetSettings$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetSettings$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new J
    }, "defaultValue"),
    complexType: J
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.getSettings$Action = function(l, a, f, i) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, m.executeActionInsideJSNode(d.default.getSettings$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            Response: c.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(c.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.getStatesList$Action = function(l, a, f, i, c) {
    return e.Logger.startActiveSpan("GetStatesList", function(o) {
        return o && (o.setAttribute("code.function", "GetStatesList"), o.setAttribute("outsystems.function.key", "abf2ab9b-5700-4caa-9b02-7bf051ca43af"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            c = m.callContext(c);
            var s = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetStatesList$vars")));
            s.value.hostInLocal = l, s.value.appIdInLocal = a, s.value.languageInLocal = f, s.value.requestInLocal = i.clone();
            var u = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                S = new e.DataTypes.VariableHolder,
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                b = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(ee))),
                y = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetStatesList$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return O.value = d.default.checkHost$Action(s.value.hostInLocal, c), e.Flow.executeSequence(function() {
                    return O.value.isGreenOut ? m.fetchStatesList$ServerAction(s.value.appIdInLocal, s.value.languageInLocal, s.value.requestInLocal, c).then(function(p) {
                        S.value = p
                    }).then(function() {
                        y.value.responseOut = S.value.responseOut
                    }) : (A.value.jSONOut = e.JSONUtils.serializeToJSON(s.value.requestInLocal, !1, !1), d.default.fetchData$Action(s.value.appIdInLocal, s.value.languageInLocal, A.value.jSONOut, s.value.hostInLocal, "POST", "states_list", "", c).then(function(p) {
                        v.value = p
                    }).then(function() {
                        b.value.dataOut = e.JSONUtils.deserializeFromJSON(v.value.responseOut, ee, !1), y.value.responseOut = b.value.dataOut
                    }))
                })
            }).catch(function(p) {
                if (e.Logger.debug("GetStatesList.GetStatesList", e.Exceptions.getMessage(p)), !e.Exceptions.isSystem(p)) return e.Logger.error(null, p, null, null, 1), u.value.exceptionMessageAttr = e.Exceptions.getMessage(p), e.Logger.startActiveSpan("AllExceptions", function(T) {
                    return T && (T.setAttribute("code.function", "AllExceptions"), T.setAttribute("outsystems.function.key", "8eb0a522-9da5-455b-9020-b98d5867a0e0"), T.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), T.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), T.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return y.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(y.value)
                        })
                    }, function() {
                        T && T.end()
                    })
                }, 1);
                throw p
            }).then(function() {
                return y.value
            })
        }, function() {
            o && o.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetStatesList$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Ze
    }, "defaultValue"),
    complexType: Ze
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetStatesList$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new ee
    }, "defaultValue"),
    complexType: ee
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.getStatesList$Action = function(l, a, f, i) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? 1 : a, f = f === void 0 ? "en" : f, i = i === void 0 ? new Ze : i, m.executeActionInsideJSNode(d.default.getStatesList$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), i), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            Response: c.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(c.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.getTradingPlatformStatus$Action = function(l, a, f, i, c) {
    return e.Logger.startActiveSpan("GetTradingPlatformStatus", function(o) {
        return o && (o.setAttribute("code.function", "GetTradingPlatformStatus"), o.setAttribute("outsystems.function.key", "f0e28096-fa5a-4c0c-b746-782cb78ec899"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            c = m.callContext(c);
            var s = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetTradingPlatformStatus$vars")));
            s.value.hostInLocal = l, s.value.authTokenInLocal = a, s.value.appIdInLocal = f, s.value.languageInLocal = i;
            var u = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                S = new e.DataTypes.VariableHolder,
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(Se))),
                b = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetTradingPlatformStatus$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return O.value = d.default.checkHost$Action(s.value.hostInLocal, c), e.Flow.executeSequence(function() {
                    return O.value.isGreenOut ? m.getTradingPlatformStatus$ServerAction(s.value.appIdInLocal, s.value.languageInLocal, s.value.authTokenInLocal, c).then(function(y) {
                        S.value = y
                    }).then(function() {
                        b.value.responseOut = S.value.responseOut
                    }) : d.default.fetchData$Action(s.value.appIdInLocal, s.value.languageInLocal, "", s.value.hostInLocal, "GET", "trading_platform_status", "", c).then(function(y) {
                        v.value = y
                    }).then(function() {
                        A.value.dataOut = e.JSONUtils.deserializeFromJSON(v.value.responseOut, Se, !1), b.value.responseOut = A.value.dataOut
                    })
                })
            }).catch(function(y) {
                if (e.Logger.debug("GetTradingPlatformStatus.GetTradingPlatformStatus", e.Exceptions.getMessage(y)), !e.Exceptions.isSystem(y)) return e.Logger.error(null, y, null, null, 1), u.value.exceptionMessageAttr = e.Exceptions.getMessage(y), e.Logger.startActiveSpan("AllExceptions", function(p) {
                    return p && (p.setAttribute("code.function", "AllExceptions"), p.setAttribute("outsystems.function.key", "69eae721-72eb-4d0c-b2ec-e8a365fee6c4"), p.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), p.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), p.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return b.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(b.value)
                        })
                    }, function() {
                        p && p.end()
                    })
                }, 1);
                throw y
            }).then(function() {
                return b.value
            })
        }, function() {
            o && o.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetTradingPlatformStatus$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetTradingPlatformStatus$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Se
    }, "defaultValue"),
    complexType: Se
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.getTradingPlatformStatus$Action = function(l, a, f, i) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, m.executeActionInsideJSNode(d.default.getTradingPlatformStatus$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            Response: c.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(c.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.getVerifyEmail$Action = function(l, a, f, i, c) {
    return e.Logger.startActiveSpan("GetVerifyEmail", function(o) {
        return o && (o.setAttribute("code.function", "GetVerifyEmail"), o.setAttribute("outsystems.function.key", "67863067-9852-4e97-82d7-5cc48f4c431f"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            c = m.callContext(c);
            var s = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetVerifyEmail$vars")));
            s.value.requestInLocal = l.clone(), s.value.hostInLocal = a, s.value.appIdInLocal = f, s.value.languageInLocal = i;
            var u = new e.DataTypes.VariableHolder,
                S = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                O = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(R))),
                v = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetVerifyEmail$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return S.value.jSONOut = e.JSONUtils.serializeToJSON(s.value.requestInLocal, !1, !1), d.default.fetchData$Action(s.value.appIdInLocal, s.value.languageInLocal, S.value.jSONOut, s.value.hostInLocal, "POST", "verify_email", "", c).then(function(A) {
                    u.value = A
                }).then(function() {
                    O.value.dataOut = e.JSONUtils.deserializeFromJSON(u.value.responseOut, R, !1), v.value.responseOut = O.value.dataOut
                })
            }).then(function() {
                return v.value
            })
        }, function() {
            o && o.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetVerifyEmail$vars", [{
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new ge
    }, "defaultValue"),
    complexType: ge
}, {
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetVerifyEmail$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new R
    }, "defaultValue"),
    complexType: R
}]);
d.clientActionProxies.getVerifyEmail$Action = function(l, a, f, i) {
    return l = l === void 0 ? new ge : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, m.executeActionInsideJSNode(d.default.getVerifyEmail$Action.bind(m, l, e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            Response: c.responseOut
        }
    })
};
d.getWebsiteStatus$Action = function(l, a, f, i) {
    return e.Logger.startActiveSpan("GetWebsiteStatus", function(c) {
        return c && (c.setAttribute("code.function", "GetWebsiteStatus"), c.setAttribute("outsystems.function.key", "dd3cfa93-6782-4c32-ba93-15448b31f9f1"), c.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), c.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), c.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            i = m.callContext(i);
            var o = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetWebsiteStatus$vars")));
            o.value.hostInLocal = l, o.value.appIdInLocal = a, o.value.languageInLocal = f;
            var s = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                u = new e.DataTypes.VariableHolder,
                S = new e.DataTypes.VariableHolder,
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(w))),
                A = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.GetWebsiteStatus$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return O.value = d.default.checkHost$Action(o.value.hostInLocal, i), e.Flow.executeSequence(function() {
                    return O.value.isGreenOut ? m.getWebsiteStatus$ServerAction(o.value.appIdInLocal, o.value.languageInLocal, i).then(function(b) {
                        u.value = b
                    }).then(function() {
                        A.value.responseOut = u.value.responseOut
                    }) : d.default.fetchData$Action(o.value.appIdInLocal, o.value.languageInLocal, "", o.value.hostInLocal, "GET", "website_status", "", i).then(function(b) {
                        S.value = b
                    }).then(function() {
                        v.value.dataOut = e.JSONUtils.deserializeFromJSON(S.value.responseOut, w, !1), A.value.responseOut = v.value.dataOut
                    })
                })
            }).catch(function(b) {
                if (e.Logger.debug("GetWebsiteStatus.GetWebsiteStatus", e.Exceptions.getMessage(b)), !e.Exceptions.isSystem(b)) return e.Logger.error(null, b, null, null, 1), s.value.exceptionMessageAttr = e.Exceptions.getMessage(b), e.Logger.startActiveSpan("AllExceptions", function(y) {
                    return y && (y.setAttribute("code.function", "AllExceptions"), y.setAttribute("outsystems.function.key", "ca2e85d5-dec5-4248-8736-203fc102fb86"), y.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), y.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), y.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return A.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(A.value)
                        })
                    }, function() {
                        y && y.end()
                    })
                }, 1);
                throw b
            }).then(function() {
                return A.value
            })
        }, function() {
            c && c.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetWebsiteStatus$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.GetWebsiteStatus$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new w
    }, "defaultValue"),
    complexType: w
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.getWebsiteStatus$Action = function(l, a, f) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? 1 : a, f = f === void 0 ? "en" : f, m.executeActionInsideJSNode(d.default.getWebsiteStatus$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(i) {
        return {
            Response: i.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(i.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.iDVDocumentAdd$Action = function(l, a, f, i, c, o) {
    return e.Logger.startActiveSpan("IDVDocumentAdd", function(s) {
        return s && (s.setAttribute("code.function", "IDVDocumentAdd"), s.setAttribute("outsystems.function.key", "62bab220-3c6d-4647-907e-7160f9696af7"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            o = m.callContext(o);
            var u = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.IDVDocumentAdd$vars")));
            u.value.hostInLocal = l, u.value.authTokenInLocal = a, u.value.appIdInLocal = f, u.value.languageInLocal = i, u.value.requestInLocal = c.clone();
            var S = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder,
                b = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                y = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(de))),
                p = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.IDVDocumentAdd$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return A.value = d.default.checkHost$Action(u.value.hostInLocal, o), e.Flow.executeSequence(function() {
                    return A.value.isGreenOut ? m.iDVDocumentAdd$ServerAction(u.value.appIdInLocal, u.value.languageInLocal, u.value.requestInLocal, u.value.authTokenInLocal, o).then(function(T) {
                        O.value = T
                    }).then(function() {
                        p.value.responseOut = O.value.responseOut
                    }) : (b.value.jSONOut = e.JSONUtils.serializeToJSON(u.value.requestInLocal, !1, !1), d.default.fetchData$Action(u.value.appIdInLocal, u.value.languageInLocal, b.value.jSONOut, u.value.hostInLocal, "POST", "identity_verification_document_add", u.value.authTokenInLocal, o).then(function(T) {
                        v.value = T
                    }).then(function() {
                        y.value.dataOut = e.JSONUtils.deserializeFromJSON(v.value.responseOut, de, !1), p.value.responseOut = y.value.dataOut
                    }))
                })
            }).catch(function(T) {
                if (e.Logger.debug("IDVDocumentAdd.IDVDocumentAdd", e.Exceptions.getMessage(T)), !e.Exceptions.isSystem(T)) return e.Logger.error(null, T, null, null, 1), S.value.exceptionMessageAttr = e.Exceptions.getMessage(T), e.Logger.startActiveSpan("AllExceptions", function(D) {
                    return D && (D.setAttribute("code.function", "AllExceptions"), D.setAttribute("outsystems.function.key", "9735440e-a02b-46ff-80ed-f79aa071c5c0"), D.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), D.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), D.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return p.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(p.value)
                        })
                    }, function() {
                        D && D.end()
                    })
                }, 1);
                throw T
            }).then(function() {
                return p.value
            })
        }, function() {
            s && s.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.IDVDocumentAdd$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Ye
    }, "defaultValue"),
    complexType: Ye
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.IDVDocumentAdd$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new de
    }, "defaultValue"),
    complexType: de
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.iDVDocumentAdd$Action = function(l, a, f, i, c) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, c = c === void 0 ? new Ye : c, m.executeActionInsideJSNode(d.default.iDVDocumentAdd$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text), c), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Response: o.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(o.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.kYCAuthStatus$Action = function(l, a, f, i, c, o) {
    return e.Logger.startActiveSpan("KYCAuthStatus", function(s) {
        return s && (s.setAttribute("code.function", "KYCAuthStatus"), s.setAttribute("outsystems.function.key", "8c350f3a-3893-4d71-b7de-fcdba5c439ce"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            o = m.callContext(o);
            var u = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.KYCAuthStatus$vars")));
            u.value.hostInLocal = l, u.value.authTokenInLocal = a, u.value.appIdInLocal = f, u.value.languageInLocal = i, u.value.requestInLocal = c.clone();
            var S = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder,
                b = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                y = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(Q))),
                p = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.KYCAuthStatus$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return v.value = d.default.checkHost$Action(u.value.hostInLocal, o), e.Flow.executeSequence(function() {
                    return v.value.isGreenOut ? m.getKYCAuthStatus$ServerAction(u.value.authTokenInLocal, u.value.appIdInLocal, u.value.languageInLocal, u.value.requestInLocal, o).then(function(T) {
                        O.value = T
                    }).then(function() {
                        p.value.responseOut = O.value.responseOut
                    }) : (b.value.jSONOut = e.JSONUtils.serializeToJSON(u.value.requestInLocal, !1, !1), d.default.fetchData$Action(u.value.appIdInLocal, u.value.languageInLocal, b.value.jSONOut, u.value.hostInLocal, "POST", "kyc_auth_status", u.value.authTokenInLocal, o).then(function(T) {
                        A.value = T
                    }).then(function() {
                        y.value.dataOut = e.JSONUtils.deserializeFromJSON(A.value.responseOut, Q, !1), p.value.responseOut = y.value.dataOut
                    }))
                })
            }).catch(function(T) {
                if (e.Logger.debug("KYCAuthStatus.KYCAuthStatus", e.Exceptions.getMessage(T)), !e.Exceptions.isSystem(T)) return e.Logger.error(null, T, null, null, 1), S.value.exceptionMessageAttr = e.Exceptions.getMessage(T), e.Logger.startActiveSpan("AllExceptions", function(D) {
                    return D && (D.setAttribute("code.function", "AllExceptions"), D.setAttribute("outsystems.function.key", "d604933a-e1fc-481c-9210-5b97482f9206"), D.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), D.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), D.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return p.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(p.value)
                        })
                    }, function() {
                        D && D.end()
                    })
                }, 1);
                throw T
            }).then(function() {
                return p.value
            })
        }, function() {
            s && s.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.KYCAuthStatus$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new je
    }, "defaultValue"),
    complexType: je
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.KYCAuthStatus$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Q
    }, "defaultValue"),
    complexType: Q
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.kYCAuthStatus$Action = function(l, a, f, i, c) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, c = c === void 0 ? new je : c, m.executeActionInsideJSNode(d.default.kYCAuthStatus$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text), c), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Response: o.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(o.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.landingCompany$Action = function(l, a, f, i, c) {
    return e.Logger.startActiveSpan("LandingCompany", function(o) {
        return o && (o.setAttribute("code.function", "LandingCompany"), o.setAttribute("outsystems.function.key", "c0d48f63-deca-48f5-bfe3-2cf8d70902dd"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            c = m.callContext(c);
            var s = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.LandingCompany$vars")));
            s.value.landingCompanyRequestInLocal = l.clone(), s.value.hostInLocal = a, s.value.appIdInLocal = f, s.value.languageInLocal = i;
            var u = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                S = new e.DataTypes.VariableHolder,
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                b = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(h))),
                y = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.LandingCompany$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return v.value = d.default.checkHost$Action(s.value.hostInLocal, c), e.Flow.executeSequence(function() {
                    return v.value.isGreenOut ? m.getLandingCompany$ServerAction(s.value.appIdInLocal, s.value.languageInLocal, s.value.landingCompanyRequestInLocal, c).then(function(p) {
                        S.value = p
                    }).then(function() {
                        y.value.responseOut = S.value.responseOut
                    }) : (A.value.jSONOut = e.JSONUtils.serializeToJSON(s.value.landingCompanyRequestInLocal, !1, !1), d.default.fetchData$Action(s.value.appIdInLocal, s.value.languageInLocal, A.value.jSONOut, s.value.hostInLocal, "GET", "landing_company", "", c).then(function(p) {
                        O.value = p
                    }).then(function() {
                        b.value.dataOut = e.JSONUtils.deserializeFromJSON(O.value.responseOut, h, !1), y.value.responseOut = b.value.dataOut
                    }))
                })
            }).catch(function(p) {
                if (e.Logger.debug("LandingCompany.LandingCompany", e.Exceptions.getMessage(p)), !e.Exceptions.isSystem(p)) return e.Logger.error(null, p, null, null, 1), u.value.exceptionMessageAttr = e.Exceptions.getMessage(p), e.Logger.startActiveSpan("AllExceptions", function(T) {
                    return T && (T.setAttribute("code.function", "AllExceptions"), T.setAttribute("outsystems.function.key", "1a2aaafd-a2bf-4e13-9861-75c4282efc9b"), T.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), T.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), T.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return y.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(y.value)
                        })
                    }, function() {
                        T && T.end()
                    })
                }, 1);
                throw p
            }).then(function() {
                return y.value
            })
        }, function() {
            o && o.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.LandingCompany$vars", [{
    name: "LandingCompanyRequest",
    attrName: "landingCompanyRequestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Le
    }, "defaultValue"),
    complexType: Le
}, {
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.LandingCompany$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new h
    }, "defaultValue"),
    complexType: h
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.landingCompany$Action = function(l, a, f, i) {
    return l = l === void 0 ? new Le : l, a = a === void 0 ? "" : a, f = f === void 0 ? "1" : f, i = i === void 0 ? "en" : i, m.executeActionInsideJSNode(d.default.landingCompany$Action.bind(m, l, e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            Response: c.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(c.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.newAccountVirtual$Action = function(l, a, f, i, c) {
    return e.Logger.startActiveSpan("NewAccountVirtual", function(o) {
        return o && (o.setAttribute("code.function", "NewAccountVirtual"), o.setAttribute("outsystems.function.key", "7ffbfda9-1620-414c-ae12-08510cf908ec"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            c = m.callContext(c);
            var s = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.NewAccountVirtual$vars")));
            s.value.newAccountVirtualRequestInLocal = l.clone(), s.value.hostInLocal = a, s.value.appIdInLocal = f, s.value.languageInLocal = i;
            var u = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                S = new e.DataTypes.VariableHolder,
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                b = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(G))),
                y = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.NewAccountVirtual$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return v.value = d.default.checkHost$Action(s.value.hostInLocal, c), e.Flow.executeSequence(function() {
                    return v.value.isGreenOut ? m.postNewAccountVirtual$ServerAction(s.value.appIdInLocal, s.value.newAccountVirtualRequestInLocal, s.value.languageInLocal, c).then(function(p) {
                        S.value = p
                    }).then(function() {
                        y.value.responseOut = S.value.responseOut
                    }) : (A.value.jSONOut = e.JSONUtils.serializeToJSON(s.value.newAccountVirtualRequestInLocal, !1, !1), d.default.fetchData$Action(s.value.appIdInLocal, s.value.languageInLocal, A.value.jSONOut, s.value.hostInLocal, "POST", "new_account_virtual", "", c).then(function(p) {
                        O.value = p
                    }).then(function() {
                        b.value.dataOut = e.JSONUtils.deserializeFromJSON(O.value.responseOut, G, !1), y.value.responseOut = b.value.dataOut
                    }))
                })
            }).catch(function(p) {
                if (e.Logger.debug("NewAccountVirtual.NewAccountVirtual", e.Exceptions.getMessage(p)), !e.Exceptions.isSystem(p)) return e.Logger.error(null, p, null, null, 1), u.value.exceptionMessageAttr = e.Exceptions.getMessage(p), e.Logger.startActiveSpan("AllExceptions", function(T) {
                    return T && (T.setAttribute("code.function", "AllExceptions"), T.setAttribute("outsystems.function.key", "29458d22-ea3d-4c10-ad92-5bfd690d0db8"), T.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), T.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), T.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return y.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(y.value)
                        })
                    }, function() {
                        T && T.end()
                    })
                }, 1);
                throw p
            }).then(function() {
                return y.value
            })
        }, function() {
            o && o.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.NewAccountVirtual$vars", [{
    name: "NewAccountVirtualRequest",
    attrName: "newAccountVirtualRequestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Ne
    }, "defaultValue"),
    complexType: Ne
}, {
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.NewAccountVirtual$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new G
    }, "defaultValue"),
    complexType: G
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.newAccountVirtual$Action = function(l, a, f, i) {
    return l = l === void 0 ? new Ne : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, m.executeActionInsideJSNode(d.default.newAccountVirtual$Action.bind(m, l, e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            Response: c.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(c.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.postMT5NewAccount$Action = function(l, a, f, i, c, o) {
    return e.Logger.startActiveSpan("PostMT5NewAccount", function(s) {
        return s && (s.setAttribute("code.function", "PostMT5NewAccount"), s.setAttribute("outsystems.function.key", "765a1df6-4fdd-4eca-bec6-6007f32b8ad0"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            o = m.callContext(o);
            var u = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostMT5NewAccount$vars")));
            u.value.requestInLocal = l.clone(), u.value.authTokenInLocal = a, u.value.appIdInLocal = f, u.value.languageInLocal = i, u.value.hostInLocal = c;
            var S = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder,
                b = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                y = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(se))),
                p = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostMT5NewAccount$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return A.value = d.default.checkHost$Action(u.value.hostInLocal, o), e.Flow.executeSequence(function() {
                    return A.value.isGreenOut ? m.postMT5NewAccount$ServerAction(u.value.appIdInLocal, "EN", u.value.authTokenInLocal, function() {
                        var T = new Ce;
                        return T.mt5_new_accountAttr = "1", T.account_typeAttr = u.value.requestInLocal.account_typeAttr, T.nameAttr = u.value.requestInLocal.nameAttr, T.emailAttr = u.value.requestInLocal.emailAttr, T.leverageAttr = u.value.requestInLocal.leverageAttr, T.mainPasswordAttr = u.value.requestInLocal.mainPasswordAttr, T.productAttr = u.value.requestInLocal.productAttr, T
                    }(), o).then(function(T) {
                        O.value = T
                    }).then(function() {
                        p.value.responseOut = O.value.responseOut
                    }) : (b.value.jSONOut = e.JSONUtils.serializeToJSON(u.value.requestInLocal, !1, !1), d.default.fetchData$Action(u.value.appIdInLocal, u.value.languageInLocal, b.value.jSONOut, u.value.hostInLocal, "POST", "mt5_new_account", u.value.authTokenInLocal, o).then(function(T) {
                        v.value = T
                    }).then(function() {
                        y.value.dataOut = e.JSONUtils.deserializeFromJSON(v.value.responseOut, se, !1), p.value.responseOut = y.value.dataOut
                    }))
                })
            }).catch(function(T) {
                if (e.Logger.debug("PostMT5NewAccount.PostMT5NewAccount", e.Exceptions.getMessage(T)), !e.Exceptions.isSystem(T)) return e.Logger.error(null, T, null, null, 1), S.value.exceptionMessageAttr = e.Exceptions.getMessage(T), e.Logger.startActiveSpan("AllExceptions", function(D) {
                    return D && (D.setAttribute("code.function", "AllExceptions"), D.setAttribute("outsystems.function.key", "13e8f3a4-8c34-43b9-8713-9bd40501cca4"), D.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), D.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), D.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return p.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(p.value)
                        })
                    }, function() {
                        D && D.end()
                    })
                }, 1);
                throw T
            }).then(function() {
                return p.value
            })
        }, function() {
            s && s.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostMT5NewAccount$vars", [{
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Ce
    }, "defaultValue"),
    complexType: Ce
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostMT5NewAccount$outVars", [{
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}, {
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new se
    }, "defaultValue"),
    complexType: se
}]);
d.clientActionProxies.postMT5NewAccount$Action = function(l, a, f, i, c) {
    return l = l === void 0 ? new Ce : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, c = c === void 0 ? "" : c, m.executeActionInsideJSNode(d.default.postMT5NewAccount$Action.bind(m, l, e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(c, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(o.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean),
            Response: o.responseOut
        }
    })
};
d.postNotificationEvents$Action = function(l, a, f, i, c, o) {
    return e.Logger.startActiveSpan("PostNotificationEvents", function(s) {
        return s && (s.setAttribute("code.function", "PostNotificationEvents"), s.setAttribute("outsystems.function.key", "ea1d3dbd-65b8-4712-a9dd-5df1b7c79ab2"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            o = m.callContext(o);
            var u = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostNotificationEvents$vars")));
            u.value.hostInLocal = l, u.value.authTokenInLocal = a, u.value.appIdInLocal = f, u.value.languageInLocal = i, u.value.requestInLocal = c.clone();
            var S = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder,
                b = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                y = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(ne))),
                p = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostNotificationEvents$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return A.value = d.default.checkHost$Action(u.value.hostInLocal, o), e.Flow.executeSequence(function() {
                    return A.value.isGreenOut ? m.postNotificationEvents$ServerAction(u.value.appIdInLocal, u.value.languageInLocal, u.value.requestInLocal, u.value.authTokenInLocal, o).then(function(T) {
                        O.value = T
                    }).then(function() {
                        p.value.responseOut = O.value.responseOut
                    }) : (b.value.jSONOut = e.JSONUtils.serializeToJSON(u.value.requestInLocal, !1, !1), d.default.fetchData$Action(u.value.appIdInLocal, u.value.languageInLocal, b.value.jSONOut, u.value.hostInLocal, "POST", "notification_event", u.value.authTokenInLocal, o).then(function(T) {
                        v.value = T
                    }).then(function() {
                        e.Logger.startActiveSpan("JavaScript1", function(T) {
                            T && (T.setAttribute("code.function", "JavaScript1"), T.setAttribute("outsystems.function.key", "06553b98-b281-4c15-8311-a3dd47f48742"), T.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), T.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), T.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return m.safeExecuteJSNode(q7, "JavaScript1", "PostNotificationEvents", {
                                    In1: e.DataConversion.JSNodeParamConverter.to(v.value.responseOut, e.DataTypes.DataTypes.Text)
                                }, function(D) {}, {}, {})
                            } finally {
                                T && T.end()
                            }
                        }, 1), y.value.dataOut = e.JSONUtils.deserializeFromJSON(v.value.responseOut, ne, !1), p.value.responseOut = y.value.dataOut
                    }))
                })
            }).catch(function(T) {
                if (e.Logger.debug("PostNotificationEvents.PostNotificationEvents", e.Exceptions.getMessage(T)), !e.Exceptions.isSystem(T)) return e.Logger.error(null, T, null, null, 1), S.value.exceptionMessageAttr = e.Exceptions.getMessage(T), e.Logger.startActiveSpan("AllExceptions", function(D) {
                    return D && (D.setAttribute("code.function", "AllExceptions"), D.setAttribute("outsystems.function.key", "42549d3f-0d7e-494d-9302-308f15c007f2"), D.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), D.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), D.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return p.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(p.value)
                        })
                    }, function() {
                        D && D.end()
                    })
                }, 1);
                throw T
            }).then(function() {
                return p.value
            })
        }, function() {
            s && s.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostNotificationEvents$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Me
    }, "defaultValue"),
    complexType: Me
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostNotificationEvents$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new ne
    }, "defaultValue"),
    complexType: ne
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.postNotificationEvents$Action = function(l, a, f, i, c) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, c = c === void 0 ? new Me : c, m.executeActionInsideJSNode(d.default.postNotificationEvents$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text), c), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Response: o.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(o.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.postP2pAdvertCreate$Action = function(l, a, f, i, c, o) {
    return e.Logger.startActiveSpan("PostP2pAdvertCreate", function(s) {
        return s && (s.setAttribute("code.function", "PostP2pAdvertCreate"), s.setAttribute("outsystems.function.key", "e33f5eed-d169-4363-b18f-197e0a05af70"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            o = m.callContext(o);
            var u = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertCreate$vars")));
            u.value.hostInLocal = l, u.value.authTokenInLocal = a, u.value.appIdInLocal = f, u.value.languageInLocal = i, u.value.requestInLocal = c.clone();
            var S = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder,
                b = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                y = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(F))),
                p = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertCreate$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return A.value = d.default.checkHost$Action(u.value.hostInLocal, o), e.Flow.executeSequence(function() {
                    return A.value.isGreenOut ? m.postP2pAdvertCreate$ServerAction(u.value.appIdInLocal, u.value.languageInLocal, u.value.requestInLocal, o).then(function(T) {
                        O.value = T
                    }).then(function() {
                        p.value.responseOut = O.value.responseOut
                    }) : (b.value.jSONOut = e.JSONUtils.serializeToJSON(u.value.requestInLocal, !1, !1), d.default.fetchData$Action(u.value.appIdInLocal, u.value.languageInLocal, b.value.jSONOut, u.value.hostInLocal, "POST", "p2p_advert_create", u.value.authTokenInLocal, o).then(function(T) {
                        v.value = T
                    }).then(function() {
                        y.value.dataOut = e.JSONUtils.deserializeFromJSON(v.value.responseOut, F, !1), p.value.responseOut = y.value.dataOut
                    }))
                })
            }).catch(function(T) {
                if (e.Logger.debug("PostP2pAdvertCreate.PostP2pAdvertCreate", e.Exceptions.getMessage(T)), !e.Exceptions.isSystem(T)) return e.Logger.error(null, T, null, null, 1), S.value.exceptionMessageAttr = e.Exceptions.getMessage(T), e.Logger.startActiveSpan("AllExceptions", function(D) {
                    return D && (D.setAttribute("code.function", "AllExceptions"), D.setAttribute("outsystems.function.key", "0662e33d-1b28-4758-a72f-978184908dab"), D.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), D.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), D.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return p.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(p.value)
                        })
                    }, function() {
                        D && D.end()
                    })
                }, 1);
                throw T
            }).then(function() {
                return p.value
            })
        }, function() {
            s && s.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertCreate$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new ke
    }, "defaultValue"),
    complexType: ke
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertCreate$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new F
    }, "defaultValue"),
    complexType: F
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.postP2pAdvertCreate$Action = function(l, a, f, i, c) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, c = c === void 0 ? new ke : c, m.executeActionInsideJSNode(d.default.postP2pAdvertCreate$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text), c), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Response: o.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(o.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.postP2pAdvertiserCreate$Action = function(l, a, f, i, c, o) {
    return e.Logger.startActiveSpan("PostP2pAdvertiserCreate", function(s) {
        return s && (s.setAttribute("code.function", "PostP2pAdvertiserCreate"), s.setAttribute("outsystems.function.key", "1666a8e1-537e-4a9f-9756-031bef0a6880"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            o = m.callContext(o);
            var u = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertiserCreate$vars")));
            u.value.hostInLocal = l, u.value.authTokenInLocal = a, u.value.appIdInLocal = f, u.value.languageInLocal = i, u.value.requestInLocal = c.clone();
            var S = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder,
                b = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(xe))),
                y = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertiserCreate$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return A.value = d.default.checkHost$Action(u.value.hostInLocal, o), e.Flow.executeSequence(function() {
                    return A.value.isGreenOut ? m.postP2pAdvertiserCreate$ServerAction(u.value.appIdInLocal, u.value.languageInLocal, u.value.requestInLocal, o).then(function(p) {
                        O.value = p
                    }).then(function() {
                        y.value.responseOut = O.value.responseOut
                    }) : d.default.fetchData$Action(u.value.appIdInLocal, u.value.languageInLocal, "", u.value.hostInLocal, "POST", "p2p_advertiser_create", u.value.authTokenInLocal, o).then(function(p) {
                        v.value = p
                    }).then(function() {
                        b.value.dataOut = e.JSONUtils.deserializeFromJSON(v.value.responseOut, xe, !1), y.value.responseOut = e.DataConversion.JSConversions.typeConvertRecord(b.value.dataOut, new Oe, function(p, T) {
                            return T.msg_typeAttr = p.msg_typeAttr, T
                        })
                    })
                })
            }).catch(function(p) {
                if (e.Logger.debug("PostP2pAdvertiserCreate.PostP2pAdvertiserCreate", e.Exceptions.getMessage(p)), !e.Exceptions.isSystem(p)) return e.Logger.error(null, p, null, null, 1), S.value.exceptionMessageAttr = e.Exceptions.getMessage(p), e.Logger.startActiveSpan("AllExceptions", function(T) {
                    return T && (T.setAttribute("code.function", "AllExceptions"), T.setAttribute("outsystems.function.key", "9603a430-4264-4dbb-91fe-f18ce7644e4b"), T.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), T.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), T.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return y.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(y.value)
                        })
                    }, function() {
                        T && T.end()
                    })
                }, 1);
                throw p
            }).then(function() {
                return y.value
            })
        }, function() {
            s && s.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertiserCreate$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Je
    }, "defaultValue"),
    complexType: Je
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertiserCreate$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Oe
    }, "defaultValue"),
    complexType: Oe
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.postP2pAdvertiserCreate$Action = function(l, a, f, i, c) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, c = c === void 0 ? new Je : c, m.executeActionInsideJSNode(d.default.postP2pAdvertiserCreate$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text), c), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Response: o.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(o.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.postP2pAdvertiserPaymentMethods$Action = function(l, a, f, i, c, o) {
    return e.Logger.startActiveSpan("PostP2pAdvertiserPaymentMethods", function(s) {
        return s && (s.setAttribute("code.function", "PostP2pAdvertiserPaymentMethods"), s.setAttribute("outsystems.function.key", "61cc178c-7fb6-4848-abe2-f742c4bd9087"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            o = m.callContext(o);
            var u = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertiserPaymentMethods$vars")));
            u.value.hostInLocal = l, u.value.authTokenInLocal = a, u.value.appIdInLocal = f, u.value.languageInLocal = i, u.value.requestInLocal = c;
            var S = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder,
                b = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                y = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertiserPaymentMethods$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return v.value = d.default.checkHost$Action(u.value.hostInLocal, o), e.Flow.executeSequence(function() {
                    return v.value.isGreenOut ? m.postP2pAdvertiserPaymentMethods$ServerAction(u.value.appIdInLocal, u.value.languageInLocal, o).then(function(p) {
                        O.value = p
                    }).then(function() {
                        b.value.jSONOut = e.JSONUtils.serializeToJSON(O.value.responseOut, !1, !1), y.value.responseOut = O.value.responseOut.errorAttr.detailsAttr.fieldAttr
                    }) : d.default.fetchData$Action(u.value.appIdInLocal, u.value.languageInLocal, u.value.requestInLocal, u.value.hostInLocal, "POST", "p2p_advertiser_payment_methods", u.value.authTokenInLocal, o).then(function(p) {
                        A.value = p
                    }).then(function() {
                        y.value.responseOut = A.value.responseOut
                    })
                })
            }).catch(function(p) {
                if (e.Logger.debug("PostP2pAdvertiserPaymentMethods.PostP2pAdvertiserPaymentMethods", e.Exceptions.getMessage(p)), !e.Exceptions.isSystem(p)) return e.Logger.error(null, p, null, null, 1), S.value.exceptionMessageAttr = e.Exceptions.getMessage(p), e.Logger.startActiveSpan("AllExceptions", function(T) {
                    return T && (T.setAttribute("code.function", "AllExceptions"), T.setAttribute("outsystems.function.key", "53d63144-f09d-46ba-a8e9-224f5a766ed1"), T.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), T.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), T.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return y.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(y.value)
                        })
                    }, function() {
                        T && T.end()
                    })
                }, 1);
                throw p
            }).then(function() {
                return y.value
            })
        }, function() {
            s && s.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertiserPaymentMethods$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertiserPaymentMethods$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.postP2pAdvertiserPaymentMethods$Action = function(l, a, f, i, c) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, c = c === void 0 ? "" : c, m.executeActionInsideJSNode(d.default.postP2pAdvertiserPaymentMethods$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(c, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Response: e.DataConversion.JSNodeParamConverter.to(o.responseOut, e.DataTypes.DataTypes.Text),
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(o.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.postP2pAdvertiserRelations$Action = function(l, a, f, i, c, o) {
    return e.Logger.startActiveSpan("PostP2pAdvertiserRelations", function(s) {
        return s && (s.setAttribute("code.function", "PostP2pAdvertiserRelations"), s.setAttribute("outsystems.function.key", "1dac4fad-7a09-44cf-9b35-acfd95f19cf9"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            o = m.callContext(o);
            var u = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertiserRelations$vars")));
            u.value.hostInLocal = l, u.value.authTokenInLocal = a, u.value.appIdInLocal = f, u.value.languageInLocal = i, u.value.requestInLocal = c.clone();
            var S = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder,
                b = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                y = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(ce))),
                p = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertiserRelations$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return A.value = d.default.checkHost$Action(u.value.hostInLocal, o), e.Flow.executeSequence(function() {
                    return A.value.isGreenOut ? m.postP2pAdvertiserRelations$ServerAction(u.value.appIdInLocal, u.value.languageInLocal, u.value.requestInLocal, o).then(function(T) {
                        O.value = T
                    }).then(function() {
                        p.value.responseOut = O.value.responseOut
                    }) : (b.value.jSONOut = e.JSONUtils.serializeToJSON(u.value.requestInLocal, !1, !1), d.default.fetchData$Action(u.value.appIdInLocal, u.value.languageInLocal, b.value.jSONOut, u.value.hostInLocal, "POST", "p2p_advertiser_relations", u.value.authTokenInLocal, o).then(function(T) {
                        v.value = T
                    }).then(function() {
                        y.value.dataOut = e.JSONUtils.deserializeFromJSON(v.value.responseOut, ce, !1), p.value.responseOut = y.value.dataOut
                    }))
                })
            }).catch(function(T) {
                if (e.Logger.debug("PostP2pAdvertiserRelations.PostP2pAdvertiserRelations", e.Exceptions.getMessage(T)), !e.Exceptions.isSystem(T)) return e.Logger.error(null, T, null, null, 1), S.value.exceptionMessageAttr = e.Exceptions.getMessage(T), e.Logger.startActiveSpan("AllExceptions", function(D) {
                    return D && (D.setAttribute("code.function", "AllExceptions"), D.setAttribute("outsystems.function.key", "a2296fc8-9f6c-4ce4-9184-15d6f4e6d17d"), D.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), D.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), D.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return p.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(p.value)
                        })
                    }, function() {
                        D && D.end()
                    })
                }, 1);
                throw T
            }).then(function() {
                return p.value
            })
        }, function() {
            s && s.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertiserRelations$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Ve
    }, "defaultValue"),
    complexType: Ve
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertiserRelations$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new ce
    }, "defaultValue"),
    complexType: ce
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.postP2pAdvertiserRelations$Action = function(l, a, f, i, c) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, c = c === void 0 ? new Ve : c, m.executeActionInsideJSNode(d.default.postP2pAdvertiserRelations$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text), c), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Response: o.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(o.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.postP2pAdvertiserUpdate$Action = function(l, a, f, i, c, o) {
    return e.Logger.startActiveSpan("PostP2pAdvertiserUpdate", function(s) {
        return s && (s.setAttribute("code.function", "PostP2pAdvertiserUpdate"), s.setAttribute("outsystems.function.key", "eeaaf802-96b5-45db-a16a-7479755d02a5"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            o = m.callContext(o);
            var u = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertiserUpdate$vars")));
            u.value.hostInLocal = l, u.value.authTokenInLocal = a, u.value.appIdInLocal = f, u.value.languageInLocal = i, u.value.requestInLocal = c.clone();
            var S = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder,
                b = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                y = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(fe))),
                p = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertiserUpdate$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return A.value = d.default.checkHost$Action(u.value.hostInLocal, o), e.Flow.executeSequence(function() {
                    return A.value.isGreenOut ? m.postP2pAdvertiserUpdate$ServerAction(u.value.appIdInLocal, u.value.languageInLocal, u.value.requestInLocal, o).then(function(T) {
                        O.value = T
                    }).then(function() {
                        p.value.responseOut = O.value.responseOut
                    }) : (b.value.jSONOut = e.JSONUtils.serializeToJSON(u.value.requestInLocal, !1, !1), d.default.fetchData$Action(u.value.appIdInLocal, u.value.languageInLocal, b.value.jSONOut, u.value.hostInLocal, "POST", "p2p_advertiser_update", u.value.authTokenInLocal, o).then(function(T) {
                        v.value = T
                    }).then(function() {
                        y.value.dataOut = e.JSONUtils.deserializeFromJSON(v.value.responseOut, fe, !1), p.value.responseOut = y.value.dataOut
                    }))
                })
            }).catch(function(T) {
                if (e.Logger.debug("PostP2pAdvertiserUpdate.PostP2pAdvertiserUpdate", e.Exceptions.getMessage(T)), !e.Exceptions.isSystem(T)) return e.Logger.error(null, T, null, null, 1), S.value.exceptionMessageAttr = e.Exceptions.getMessage(T), e.Logger.startActiveSpan("AllExceptions", function(D) {
                    return D && (D.setAttribute("code.function", "AllExceptions"), D.setAttribute("outsystems.function.key", "c04434de-293b-4349-84bb-671130875c58"), D.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), D.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), D.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return p.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(p.value)
                        })
                    }, function() {
                        D && D.end()
                    })
                }, 1);
                throw T
            }).then(function() {
                return p.value
            })
        }, function() {
            s && s.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertiserUpdate$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Fe
    }, "defaultValue"),
    complexType: Fe
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertiserUpdate$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new fe
    }, "defaultValue"),
    complexType: fe
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.postP2pAdvertiserUpdate$Action = function(l, a, f, i, c) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, c = c === void 0 ? new Fe : c, m.executeActionInsideJSNode(d.default.postP2pAdvertiserUpdate$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text), c), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Response: o.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(o.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.postP2pAdvertUpdate$Action = function(l, a, f, i, c, o) {
    return e.Logger.startActiveSpan("PostP2pAdvertUpdate", function(s) {
        return s && (s.setAttribute("code.function", "PostP2pAdvertUpdate"), s.setAttribute("outsystems.function.key", "839bf6e9-5ae4-4b26-be39-80c0386e87ab"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            o = m.callContext(o);
            var u = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertUpdate$vars")));
            u.value.hostInLocal = l, u.value.authTokenInLocal = a, u.value.appIdInLocal = f, u.value.languageInLocal = i, u.value.requestInLocal = c.clone();
            var S = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder,
                b = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                y = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(ae))),
                p = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertUpdate$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return A.value = d.default.checkHost$Action(u.value.hostInLocal, o), e.Flow.executeSequence(function() {
                    return A.value.isGreenOut ? m.postP2pAdvertUpdate$ServerAction(u.value.appIdInLocal, u.value.languageInLocal, u.value.requestInLocal, o).then(function(T) {
                        O.value = T
                    }).then(function() {
                        p.value.responseOut = O.value.responseOut
                    }) : (b.value.jSONOut = e.JSONUtils.serializeToJSON(u.value.requestInLocal, !1, !1), d.default.fetchData$Action(u.value.appIdInLocal, u.value.languageInLocal, b.value.jSONOut, u.value.hostInLocal, "POST", "p2p_advert_update", u.value.authTokenInLocal, o).then(function(T) {
                        v.value = T
                    }).then(function() {
                        y.value.dataOut = e.JSONUtils.deserializeFromJSON(v.value.responseOut, ae, !1), p.value.responseOut = y.value.dataOut
                    }))
                })
            }).catch(function(T) {
                if (e.Logger.debug("PostP2pAdvertUpdate.PostP2pAdvertUpdate", e.Exceptions.getMessage(T)), !e.Exceptions.isSystem(T)) return e.Logger.error(null, T, null, null, 1), S.value.exceptionMessageAttr = e.Exceptions.getMessage(T), e.Logger.startActiveSpan("AllExceptions", function(D) {
                    return D && (D.setAttribute("code.function", "AllExceptions"), D.setAttribute("outsystems.function.key", "ae3610de-a0c5-44ef-99a5-70529c650e81"), D.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), D.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), D.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return p.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(p.value)
                        })
                    }, function() {
                        D && D.end()
                    })
                }, 1);
                throw T
            }).then(function() {
                return p.value
            })
        }, function() {
            s && s.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertUpdate$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new et
    }, "defaultValue"),
    complexType: et
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pAdvertUpdate$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new ae
    }, "defaultValue"),
    complexType: ae
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.postP2pAdvertUpdate$Action = function(l, a, f, i, c) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, c = c === void 0 ? new et : c, m.executeActionInsideJSNode(d.default.postP2pAdvertUpdate$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text), c), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Response: o.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(o.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.postP2pChatCreate$Action = function(l, a, f, i, c, o) {
    return e.Logger.startActiveSpan("PostP2pChatCreate", function(s) {
        return s && (s.setAttribute("code.function", "PostP2pChatCreate"), s.setAttribute("outsystems.function.key", "d3f906c2-98ad-4b3d-a82d-319795aa328a"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            o = m.callContext(o);
            var u = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pChatCreate$vars")));
            u.value.hostInLocal = l, u.value.authTokenInLocal = a, u.value.appIdInLocal = f, u.value.languageInLocal = i, u.value.requestInLocal = c.clone();
            var S = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder,
                b = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                y = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(Y))),
                p = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pChatCreate$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return A.value = d.default.checkHost$Action(u.value.hostInLocal, o), e.Flow.executeSequence(function() {
                    return A.value.isGreenOut ? m.postP2pChatCreate$ServerAction(u.value.appIdInLocal, u.value.languageInLocal, u.value.requestInLocal, o).then(function(T) {
                        O.value = T
                    }).then(function() {
                        p.value.responseOut = O.value.responseOut
                    }) : (b.value.jSONOut = e.JSONUtils.serializeToJSON(u.value.requestInLocal, !1, !1), d.default.fetchData$Action(u.value.appIdInLocal, u.value.languageInLocal, b.value.jSONOut, u.value.hostInLocal, "POST", "p2p_chat_create", u.value.authTokenInLocal, o).then(function(T) {
                        v.value = T
                    }).then(function() {
                        y.value.dataOut = e.JSONUtils.deserializeFromJSON(v.value.responseOut, Y, !1), p.value.responseOut = y.value.dataOut
                    }))
                })
            }).catch(function(T) {
                if (e.Logger.debug("PostP2pChatCreate.PostP2pChatCreate", e.Exceptions.getMessage(T)), !e.Exceptions.isSystem(T)) return e.Logger.error(null, T, null, null, 1), S.value.exceptionMessageAttr = e.Exceptions.getMessage(T), e.Logger.startActiveSpan("AllExceptions", function(D) {
                    return D && (D.setAttribute("code.function", "AllExceptions"), D.setAttribute("outsystems.function.key", "791711bc-6393-41a9-9376-c28cf196541a"), D.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), D.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), D.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return p.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(p.value)
                        })
                    }, function() {
                        D && D.end()
                    })
                }, 1);
                throw T
            }).then(function() {
                return p.value
            })
        }, function() {
            s && s.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pChatCreate$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new at
    }, "defaultValue"),
    complexType: at
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pChatCreate$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Y
    }, "defaultValue"),
    complexType: Y
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.postP2pChatCreate$Action = function(l, a, f, i, c) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, c = c === void 0 ? new at : c, m.executeActionInsideJSNode(d.default.postP2pChatCreate$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text), c), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Response: o.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(o.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.postP2pOrderCancel$Action = function(l, a, f, i, c, o) {
    return e.Logger.startActiveSpan("PostP2pOrderCancel", function(s) {
        return s && (s.setAttribute("code.function", "PostP2pOrderCancel"), s.setAttribute("outsystems.function.key", "5a5c4e73-518e-4856-8bc7-277baeadfb47"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            o = m.callContext(o);
            var u = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pOrderCancel$vars")));
            u.value.hostInLocal = l, u.value.authTokenInLocal = a, u.value.appIdInLocal = f, u.value.languageInLocal = i, u.value.requestInLocal = c.clone();
            var S = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder,
                b = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                y = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(oe))),
                p = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pOrderCancel$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return v.value = d.default.checkHost$Action(u.value.hostInLocal, o), e.Flow.executeSequence(function() {
                    return v.value.isGreenOut ? m.postP2pOrderCancel$ServerAction(u.value.appIdInLocal, u.value.languageInLocal, u.value.requestInLocal, o).then(function(T) {
                        O.value = T
                    }).then(function() {
                        p.value.responseOut = O.value.responseOut
                    }) : (b.value.jSONOut = e.JSONUtils.serializeToJSON(u.value.requestInLocal, !1, !1), d.default.fetchData$Action(u.value.appIdInLocal, u.value.languageInLocal, b.value.jSONOut, u.value.hostInLocal, "POST", "p2p_order_cancel", u.value.authTokenInLocal, o).then(function(T) {
                        A.value = T
                    }).then(function() {
                        y.value.dataOut = e.JSONUtils.deserializeFromJSON(A.value.responseOut, oe, !1), p.value.responseOut = y.value.dataOut
                    }))
                })
            }).catch(function(T) {
                if (e.Logger.debug("PostP2pOrderCancel.PostP2pOrderCancel", e.Exceptions.getMessage(T)), !e.Exceptions.isSystem(T)) return e.Logger.error(null, T, null, null, 1), S.value.exceptionMessageAttr = e.Exceptions.getMessage(T), e.Logger.startActiveSpan("AllExceptions", function(D) {
                    return D && (D.setAttribute("code.function", "AllExceptions"), D.setAttribute("outsystems.function.key", "20d88a49-67e6-4e16-bdb8-755199518015"), D.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), D.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), D.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return p.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(p.value)
                        })
                    }, function() {
                        D && D.end()
                    })
                }, 1);
                throw T
            }).then(function() {
                return p.value
            })
        }, function() {
            s && s.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pOrderCancel$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Xe
    }, "defaultValue"),
    complexType: Xe
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pOrderCancel$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new oe
    }, "defaultValue"),
    complexType: oe
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.postP2pOrderCancel$Action = function(l, a, f, i, c) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, c = c === void 0 ? new Xe : c, m.executeActionInsideJSNode(d.default.postP2pOrderCancel$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text), c), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Response: o.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(o.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.postP2pOrderConfirm$Action = function(l, a, f, i, c, o) {
    return e.Logger.startActiveSpan("PostP2pOrderConfirm", function(s) {
        return s && (s.setAttribute("code.function", "PostP2pOrderConfirm"), s.setAttribute("outsystems.function.key", "d25647fb-9cee-47aa-aac8-cbdca3a11976"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            o = m.callContext(o);
            var u = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pOrderConfirm$vars")));
            u.value.hostInLocal = l, u.value.authTokenInLocal = a, u.value.appIdInLocal = f, u.value.languageInLocal = i, u.value.requestInLocal = c.clone();
            var S = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder,
                b = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                y = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(X))),
                p = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pOrderConfirm$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return A.value = d.default.checkHost$Action(u.value.hostInLocal, o), e.Flow.executeSequence(function() {
                    return A.value.isGreenOut ? m.postP2pOrderConfirm$ServerAction(u.value.appIdInLocal, u.value.languageInLocal, u.value.requestInLocal, o).then(function(T) {
                        O.value = T
                    }).then(function() {
                        p.value.responseOut = O.value.responseOut
                    }) : (b.value.jSONOut = e.JSONUtils.serializeToJSON(u.value.requestInLocal, !1, !1), d.default.fetchData$Action(u.value.appIdInLocal, u.value.languageInLocal, b.value.jSONOut, u.value.hostInLocal, "POST", "p2p_order_confirm", u.value.authTokenInLocal, o).then(function(T) {
                        v.value = T
                    }).then(function() {
                        y.value.dataOut = e.JSONUtils.deserializeFromJSON(v.value.responseOut, X, !1), p.value.responseOut = y.value.dataOut
                    }))
                })
            }).catch(function(T) {
                if (e.Logger.debug("PostP2pOrderConfirm.PostP2pOrderConfirm", e.Exceptions.getMessage(T)), !e.Exceptions.isSystem(T)) return e.Logger.error(null, T, null, null, 1), S.value.exceptionMessageAttr = e.Exceptions.getMessage(T), e.Logger.startActiveSpan("AllExceptions", function(D) {
                    return D && (D.setAttribute("code.function", "AllExceptions"), D.setAttribute("outsystems.function.key", "67929772-33df-4261-90cd-6ae2e9cac1d8"), D.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), D.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), D.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return p.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(p.value)
                        })
                    }, function() {
                        D && D.end()
                    })
                }, 1);
                throw T
            }).then(function() {
                return p.value
            })
        }, function() {
            s && s.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pOrderConfirm$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new ot
    }, "defaultValue"),
    complexType: ot
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pOrderConfirm$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new X
    }, "defaultValue"),
    complexType: X
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.postP2pOrderConfirm$Action = function(l, a, f, i, c) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, c = c === void 0 ? new ot : c, m.executeActionInsideJSNode(d.default.postP2pOrderConfirm$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text), c), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Response: o.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(o.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.postP2pOrderCreate$Action = function(l, a, f, i, c, o) {
    return e.Logger.startActiveSpan("PostP2pOrderCreate", function(s) {
        return s && (s.setAttribute("code.function", "PostP2pOrderCreate"), s.setAttribute("outsystems.function.key", "eaecebdc-2c04-4b72-8f04-6b180e79ca26"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            o = m.callContext(o);
            var u = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pOrderCreate$vars")));
            u.value.hostInLocal = l, u.value.authTokenInLocal = a, u.value.appIdInLocal = f, u.value.languageInLocal = i, u.value.requestInLocal = c.clone();
            var S = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder,
                b = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                y = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(M))),
                p = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pOrderCreate$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return A.value = d.default.checkHost$Action(u.value.hostInLocal, o), e.Flow.executeSequence(function() {
                    return A.value.isGreenOut ? m.postP2pOrderCreate$ServerAction(u.value.appIdInLocal, u.value.languageInLocal, u.value.requestInLocal, o).then(function(T) {
                        O.value = T
                    }).then(function() {
                        p.value.responseOut = O.value.responseOut
                    }) : (b.value.jSONOut = e.JSONUtils.serializeToJSON(u.value.requestInLocal, !1, !1), d.default.fetchData$Action(u.value.appIdInLocal, u.value.languageInLocal, b.value.jSONOut, u.value.hostInLocal, "POST", "p2p_order_create", u.value.authTokenInLocal, o).then(function(T) {
                        v.value = T
                    }).then(function() {
                        y.value.dataOut = e.JSONUtils.deserializeFromJSON(v.value.responseOut, M, !1), p.value.responseOut = y.value.dataOut
                    }))
                })
            }).catch(function(T) {
                if (e.Logger.debug("PostP2pOrderCreate.PostP2pOrderCreate", e.Exceptions.getMessage(T)), !e.Exceptions.isSystem(T)) return e.Logger.error(null, T, null, null, 1), S.value.exceptionMessageAttr = e.Exceptions.getMessage(T), e.Logger.startActiveSpan("AllExceptions", function(D) {
                    return D && (D.setAttribute("code.function", "AllExceptions"), D.setAttribute("outsystems.function.key", "beade141-b798-4b94-b7a6-91cccbe414be"), D.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), D.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), D.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return p.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(p.value)
                        })
                    }, function() {
                        D && D.end()
                    })
                }, 1);
                throw T
            }).then(function() {
                return p.value
            })
        }, function() {
            s && s.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pOrderCreate$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Qe
    }, "defaultValue"),
    complexType: Qe
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pOrderCreate$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new M
    }, "defaultValue"),
    complexType: M
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.postP2pOrderCreate$Action = function(l, a, f, i, c) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, c = c === void 0 ? new Qe : c, m.executeActionInsideJSNode(d.default.postP2pOrderCreate$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text), c), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Response: o.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(o.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.postP2pOrderDispute$Action = function(l, a, f, i, c, o) {
    return e.Logger.startActiveSpan("PostP2pOrderDispute", function(s) {
        return s && (s.setAttribute("code.function", "PostP2pOrderDispute"), s.setAttribute("outsystems.function.key", "33695815-0c6c-4993-92bc-e09211db0c15"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            o = m.callContext(o);
            var u = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pOrderDispute$vars")));
            u.value.hostInLocal = l, u.value.authTokenInLocal = a, u.value.appIdInLocal = f, u.value.languageInLocal = i, u.value.requestInLocal = c.clone();
            var S = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder,
                b = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                y = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(L))),
                p = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2pOrderDispute$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return A.value = d.default.checkHost$Action(u.value.hostInLocal, o), e.Flow.executeSequence(function() {
                    return A.value.isGreenOut ? m.postP2pOrderDispute$ServerAction(u.value.appIdInLocal, u.value.languageInLocal, u.value.requestInLocal, o).then(function(T) {
                        O.value = T
                    }).then(function() {
                        p.value.responseOut = O.value.responseOut
                    }) : (b.value.jSONOut = e.JSONUtils.serializeToJSON(u.value.requestInLocal, !1, !1), d.default.fetchData$Action(u.value.appIdInLocal, u.value.languageInLocal, b.value.jSONOut, u.value.hostInLocal, "POST", "p2p_order_dispute", u.value.authTokenInLocal, o).then(function(T) {
                        v.value = T
                    }).then(function() {
                        y.value.dataOut = e.JSONUtils.deserializeFromJSON(v.value.responseOut, L, !1), p.value.responseOut = y.value.dataOut
                    }))
                })
            }).catch(function(T) {
                if (e.Logger.debug("PostP2pOrderDispute.PostP2pOrderDispute", e.Exceptions.getMessage(T)), !e.Exceptions.isSystem(T)) return e.Logger.error(null, T, null, null, 1), S.value.exceptionMessageAttr = e.Exceptions.getMessage(T), e.Logger.startActiveSpan("AllExceptions", function(D) {
                    return D && (D.setAttribute("code.function", "AllExceptions"), D.setAttribute("outsystems.function.key", "002de8d0-0d0b-4365-a985-ee08ab25c638"), D.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), D.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), D.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return p.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(p.value)
                        })
                    }, function() {
                        D && D.end()
                    })
                }, 1);
                throw T
            }).then(function() {
                return p.value
            })
        }, function() {
            s && s.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pOrderDispute$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new st
    }, "defaultValue"),
    complexType: st
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2pOrderDispute$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new L
    }, "defaultValue"),
    complexType: L
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.postP2pOrderDispute$Action = function(l, a, f, i, c) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, c = c === void 0 ? new st : c, m.executeActionInsideJSNode(d.default.postP2pOrderDispute$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text), c), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Response: o.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(o.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.postP2POrderReview$Action = function(l, a, f, i, c, o) {
    return e.Logger.startActiveSpan("PostP2POrderReview", function(s) {
        return s && (s.setAttribute("code.function", "PostP2POrderReview"), s.setAttribute("outsystems.function.key", "f83bda43-ac96-42e6-aa36-04b2f2705a0d"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            o = m.callContext(o);
            var u = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2POrderReview$vars")));
            u.value.hostInLocal = l, u.value.authTokenInLocal = a, u.value.appIdInLocal = f, u.value.languageInLocal = i, u.value.requestInLocal = c.clone();
            var S = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder,
                b = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                y = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(pe))),
                p = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostP2POrderReview$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return v.value = d.default.checkHost$Action(u.value.hostInLocal, o), e.Flow.executeSequence(function() {
                    return v.value.isGreenOut ? m.postP2pOrderReview$ServerAction(u.value.appIdInLocal, u.value.languageInLocal, u.value.requestInLocal, o).then(function(T) {
                        O.value = T
                    }).then(function() {
                        p.value.responseOut = O.value.responseOut
                    }) : (b.value.jSONOut = e.JSONUtils.serializeToJSON(u.value.requestInLocal, !1, !1), d.default.fetchData$Action(u.value.appIdInLocal, u.value.languageInLocal, b.value.jSONOut, u.value.hostInLocal, "POST", "p2p_order_review", u.value.authTokenInLocal, o).then(function(T) {
                        A.value = T
                    }).then(function() {
                        y.value.dataOut = e.JSONUtils.deserializeFromJSON(A.value.responseOut, pe, !1), p.value.responseOut = y.value.dataOut
                    }))
                })
            }).catch(function(T) {
                if (e.Logger.debug("PostP2POrderReview.PostP2POrderReview", e.Exceptions.getMessage(T)), !e.Exceptions.isSystem(T)) return e.Logger.error(null, T, null, null, 1), S.value.exceptionMessageAttr = e.Exceptions.getMessage(T), e.Logger.startActiveSpan("AllExceptions", function(D) {
                    return D && (D.setAttribute("code.function", "AllExceptions"), D.setAttribute("outsystems.function.key", "04bfad6f-27b8-4220-8be8-1a80a3894472"), D.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), D.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), D.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return p.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(p.value)
                        })
                    }, function() {
                        D && D.end()
                    })
                }, 1);
                throw T
            }).then(function() {
                return p.value
            })
        }, function() {
            s && s.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2POrderReview$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new tt
    }, "defaultValue"),
    complexType: tt
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostP2POrderReview$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new pe
    }, "defaultValue"),
    complexType: pe
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.postP2POrderReview$Action = function(l, a, f, i, c) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, c = c === void 0 ? new tt : c, m.executeActionInsideJSNode(d.default.postP2POrderReview$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text), c), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Response: o.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(o.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.postTradingPlatformAccounts$Action = function(l, a, f, i, c, o) {
    return e.Logger.startActiveSpan("PostTradingPlatformAccounts", function(s) {
        return s && (s.setAttribute("code.function", "PostTradingPlatformAccounts"), s.setAttribute("outsystems.function.key", "071ec432-55f0-4936-ad93-a77edf7641dd"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            o = m.callContext(o);
            var u = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostTradingPlatformAccounts$vars")));
            u.value.hostInLocal = l, u.value.authTokenInLocal = a, u.value.appIdInLocal = f, u.value.languageInLocal = i, u.value.platformInLocal = c;
            var S = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder,
                b = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(Ee))),
                y = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostTradingPlatformAccounts$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return v.value = d.default.checkHost$Action(u.value.hostInLocal, o), e.Flow.executeSequence(function() {
                    return v.value.isGreenOut ? m.postTradingPlatformAccounts$ServerAction(u.value.appIdInLocal, u.value.languageInLocal, function() {
                        var p = new gt;
                        return p.platformAttr = u.value.platformInLocal, p
                    }(), u.value.authTokenInLocal, "application/json", o).then(function(p) {
                        O.value = p
                    }) : d.default.fetchData$Action(u.value.appIdInLocal, u.value.languageInLocal, "", u.value.hostInLocal, "POST", "trading_platform_accounts", u.value.authTokenInLocal, o).then(function(p) {
                        A.value = p
                    }).then(function() {
                        b.value.dataOut = e.JSONUtils.deserializeFromJSON(A.value.responseOut, Ee, !1), y.value.responseOut = b.value.dataOut
                    })
                })
            }).catch(function(p) {
                if (e.Logger.debug("PostTradingPlatformAccounts.PostTradingPlatformAccounts", e.Exceptions.getMessage(p)), !e.Exceptions.isSystem(p)) return e.Logger.error(null, p, null, null, 1), S.value.exceptionMessageAttr = e.Exceptions.getMessage(p), e.Logger.startActiveSpan("AllExceptions", function(T) {
                    return T && (T.setAttribute("code.function", "AllExceptions"), T.setAttribute("outsystems.function.key", "86bfe18e-7764-4afe-ad93-e36dd03c5393"), T.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), T.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), T.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return y.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(y.value)
                        })
                    }, function() {
                        T && T.end()
                    })
                }, 1);
                throw p
            }).then(function() {
                return y.value
            })
        }, function() {
            s && s.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostTradingPlatformAccounts$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "Platform",
    attrName: "platformInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostTradingPlatformAccounts$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Ee
    }, "defaultValue"),
    complexType: Ee
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.postTradingPlatformAccounts$Action = function(l, a, f, i, c) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, c = c === void 0 ? "" : c, m.executeActionInsideJSNode(d.default.postTradingPlatformAccounts$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(c, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Response: o.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(o.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.postTradingPlatformPasswordChange$Action = function(l, a, f, i, c, o) {
    return e.Logger.startActiveSpan("PostTradingPlatformPasswordChange", function(s) {
        return s && (s.setAttribute("code.function", "PostTradingPlatformPasswordChange"), s.setAttribute("outsystems.function.key", "6804ba22-7664-40fe-9b1b-993020605e3f"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            o = m.callContext(o);
            var u = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostTradingPlatformPasswordChange$vars")));
            u.value.hostInLocal = l, u.value.requestInLocal = a.clone(), u.value.authTokenInLocal = f, u.value.appIdInLocal = i, u.value.languageInLocal = c;
            var S = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder,
                b = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                y = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(ue))),
                p = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostTradingPlatformPasswordChange$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return v.value = d.default.checkHost$Action(u.value.hostInLocal, o), e.Flow.executeSequence(function() {
                    return v.value.isGreenOut ? m.postTradingPlatformPasswordChange$ServerAction(u.value.appIdInLocal, u.value.languageInLocal, u.value.authTokenInLocal, u.value.requestInLocal, "application/json", o).then(function(T) {
                        O.value = T
                    }).then(function() {
                        p.value.responseOut = O.value.responseOut
                    }) : (b.value.jSONOut = e.JSONUtils.serializeToJSON(u.value.requestInLocal, !1, !1), d.default.fetchData$Action(u.value.appIdInLocal, u.value.languageInLocal, b.value.jSONOut, u.value.hostInLocal, "POST", "trading_platform_password_change", u.value.authTokenInLocal, o).then(function(T) {
                        A.value = T
                    }).then(function() {
                        y.value.dataOut = e.JSONUtils.deserializeFromJSON(A.value.responseOut, ue, !1), p.value.responseOut = y.value.dataOut
                    }))
                })
            }).catch(function(T) {
                if (e.Logger.debug("PostTradingPlatformPasswordChange.PostTradingPlatformPasswordChange", e.Exceptions.getMessage(T)), !e.Exceptions.isSystem(T)) return e.Logger.error(null, T, null, null, 1), S.value.exceptionMessageAttr = e.Exceptions.getMessage(T), e.Logger.startActiveSpan("AllExceptions", function(D) {
                    return D && (D.setAttribute("code.function", "AllExceptions"), D.setAttribute("outsystems.function.key", "07aac954-855e-45aa-959d-2b496fad2468"), D.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), D.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), D.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return p.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(p.value)
                        })
                    }, function() {
                        D && D.end()
                    })
                }, 1);
                throw T
            }).then(function() {
                return p.value
            })
        }, function() {
            s && s.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostTradingPlatformPasswordChange$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new ct
    }, "defaultValue"),
    complexType: ct
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostTradingPlatformPasswordChange$outVars", [{
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}, {
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new ue
    }, "defaultValue"),
    complexType: ue
}]);
d.clientActionProxies.postTradingPlatformPasswordChange$Action = function(l, a, f, i, c) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? new ct : a, f = f === void 0 ? "" : f, i = i === void 0 ? 1 : i, c = c === void 0 ? "en" : c, m.executeActionInsideJSNode(d.default.postTradingPlatformPasswordChange$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), a, e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(c, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(o.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean),
            Response: o.responseOut
        }
    })
};
d.postTradingPlatformPasswordReset$Action = function(l, a, f, i) {
    return e.Logger.startActiveSpan("PostTradingPlatformPasswordReset", function(c) {
        return c && (c.setAttribute("code.function", "PostTradingPlatformPasswordReset"), c.setAttribute("outsystems.function.key", "55d3f82d-c76a-44bf-9e52-67b98fe24e20"), c.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), c.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), c.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            i = m.callContext(i);
            var o = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostTradingPlatformPasswordReset$vars")));
            o.value.hostInLocal = l, o.value.appIdInLocal = a, o.value.languageInLocal = f;
            var s = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                u = new e.DataTypes.VariableHolder,
                S = new e.DataTypes.VariableHolder,
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(le))),
                A = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostTradingPlatformPasswordReset$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return O.value = d.default.checkHost$Action(o.value.hostInLocal, i), e.Flow.executeSequence(function() {
                    return O.value.isGreenOut ? m.postTradingPlatformPasswordReset$ServerAction(o.value.appIdInLocal, o.value.languageInLocal, function() {
                        var b = new vt;
                        return b
                    }(), i).then(function(b) {
                        u.value = b
                    }).then(function() {
                        A.value.responseOut = u.value.responseOut
                    }) : d.default.fetchData$Action(o.value.appIdInLocal, o.value.languageInLocal, "", o.value.hostInLocal, "POST", "trading_platform_password_reset", "", i).then(function(b) {
                        S.value = b
                    }).then(function() {
                        v.value.dataOut = e.JSONUtils.deserializeFromJSON(S.value.responseOut, le, !1), A.value.responseOut = v.value.dataOut
                    })
                })
            }).catch(function(b) {
                if (e.Logger.debug("PostTradingPlatformPasswordReset.PostTradingPlatformPasswordReset", e.Exceptions.getMessage(b)), !e.Exceptions.isSystem(b)) return e.Logger.error(null, b, null, null, 1), s.value.exceptionMessageAttr = e.Exceptions.getMessage(b), e.Logger.startActiveSpan("AllExceptions", function(y) {
                    return y && (y.setAttribute("code.function", "AllExceptions"), y.setAttribute("outsystems.function.key", "663efc9c-2393-4195-afcf-7e88c8ad5e5b"), y.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), y.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), y.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return A.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(A.value)
                        })
                    }, function() {
                        y && y.end()
                    })
                }, 1);
                throw b
            }).then(function() {
                return A.value
            })
        }, function() {
            c && c.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostTradingPlatformPasswordReset$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostTradingPlatformPasswordReset$outVars", [{
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}, {
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new le
    }, "defaultValue"),
    complexType: le
}]);
d.clientActionProxies.postTradingPlatformPasswordReset$Action = function(l, a, f) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? 1 : a, f = f === void 0 ? "en" : f, m.executeActionInsideJSNode(d.default.postTradingPlatformPasswordReset$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(i) {
        return {
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(i.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean),
            Response: i.responseOut
        }
    })
};
d.postVerifyEmail$Action = function(l, a, f, i, c) {
    return e.Logger.startActiveSpan("PostVerifyEmail", function(o) {
        return o && (o.setAttribute("code.function", "PostVerifyEmail"), o.setAttribute("outsystems.function.key", "d3d62953-6b58-44e5-a02e-9584c5169d5d"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            c = m.callContext(c);
            var s = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostVerifyEmail$vars")));
            s.value.requestInLocal = l.clone(), s.value.hostInLocal = a, s.value.appIdInLocal = f, s.value.languageInLocal = i;
            var u = new e.DataTypes.VariableHolder,
                S = new e.DataTypes.VariableHolder,
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                A = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(w))),
                b = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.PostVerifyEmail$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return O.value = d.default.checkHost$Action(s.value.hostInLocal, c), e.Flow.executeSequence(function() {
                    return O.value.isGreenOut ? m.postVerifyEmail$ServerAction(s.value.appIdInLocal, s.value.languageInLocal, s.value.requestInLocal, c).then(function(y) {
                        u.value = y
                    }).then(function() {
                        b.value.responseOut = u.value.responseOut
                    }) : (v.value.jSONOut = e.JSONUtils.serializeToJSON(s.value.requestInLocal, !1, !1), d.default.fetchData$Action(s.value.appIdInLocal, s.value.languageInLocal, v.value.jSONOut, s.value.hostInLocal, "POST", "verify_email", "", c).then(function(y) {
                        S.value = y
                    }).then(function() {
                        A.value.dataOut = e.JSONUtils.deserializeFromJSON(S.value.responseOut, w, !1), b.value.responseOut = e.DataConversion.JSConversions.typeConvertRecord(A.value.dataOut, new R, function(y, p) {
                            return p.msg_typeAttr = y.msg_typeAttr, p
                        })
                    }))
                })
            }).then(function() {
                return b.value
            })
        }, function() {
            o && o.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostVerifyEmail$vars", [{
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new ge
    }, "defaultValue"),
    complexType: ge
}, {
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.PostVerifyEmail$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new R
    }, "defaultValue"),
    complexType: R
}]);
d.clientActionProxies.postVerifyEmail$Action = function(l, a, f, i) {
    return l = l === void 0 ? new ge : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, m.executeActionInsideJSNode(d.default.postVerifyEmail$Action.bind(m, l, e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            Response: c.responseOut
        }
    })
};
d.resetPassword$Action = function(l, a, f, i, c) {
    return e.Logger.startActiveSpan("ResetPassword", function(o) {
        return o && (o.setAttribute("code.function", "ResetPassword"), o.setAttribute("outsystems.function.key", "7eb7952d-cd4f-4e4b-8862-07037e0acfb3"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            c = m.callContext(c);
            var s = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.ResetPassword$vars")));
            s.value.requestInLocal = l.clone(), s.value.hostInLocal = a, s.value.appIdInLocal = f, s.value.languageInLocal = i;
            var u = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                S = new e.DataTypes.VariableHolder,
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                b = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(_))),
                y = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.ResetPassword$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return v.value = d.default.checkHost$Action(s.value.hostInLocal, c), e.Flow.executeSequence(function() {
                    return v.value.isGreenOut ? m.postResetPassword$ServerAction(s.value.appIdInLocal, s.value.languageInLocal, s.value.requestInLocal, c).then(function(p) {
                        S.value = p
                    }).then(function() {
                        y.value.responseOut = S.value.responseOut
                    }) : (A.value.jSONOut = e.JSONUtils.serializeToJSON(s.value.requestInLocal, !1, !1), d.default.fetchData$Action(s.value.appIdInLocal, s.value.languageInLocal, A.value.jSONOut, s.value.hostInLocal, "POST", "reset_password", "", c).then(function(p) {
                        O.value = p
                    }).then(function() {
                        b.value.dataOut = e.JSONUtils.deserializeFromJSON(O.value.responseOut, _, !1), y.value.responseOut = b.value.dataOut
                    }))
                })
            }).catch(function(p) {
                if (e.Logger.debug("ResetPassword.ResetPassword", e.Exceptions.getMessage(p)), !e.Exceptions.isSystem(p)) return e.Logger.error(null, p, null, null, 1), u.value.exceptionMessageAttr = e.Exceptions.getMessage(p), e.Logger.startActiveSpan("AllExceptions", function(T) {
                    return T && (T.setAttribute("code.function", "AllExceptions"), T.setAttribute("outsystems.function.key", "9e33b41d-1aa3-422e-9b5b-76578be5581d"), T.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), T.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), T.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return y.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(y.value)
                        })
                    }, function() {
                        T && T.end()
                    })
                }, 1);
                throw p
            }).then(function() {
                return y.value
            })
        }, function() {
            o && o.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.ResetPassword$vars", [{
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Ge
    }, "defaultValue"),
    complexType: Ge
}, {
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.ResetPassword$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new _
    }, "defaultValue"),
    complexType: _
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.resetPassword$Action = function(l, a, f, i) {
    return l = l === void 0 ? new Ge : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, m.executeActionInsideJSNode(d.default.resetPassword$Action.bind(m, l, e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            Response: c.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(c.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.residenceList$Action = function(l, a, f, i) {
    return e.Logger.startActiveSpan("ResidenceList", function(c) {
        return c && (c.setAttribute("code.function", "ResidenceList"), c.setAttribute("outsystems.function.key", "c055e2ed-1519-4726-8d98-9d18058b0fbd"), c.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), c.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), c.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            i = m.callContext(i);
            var o = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.ResidenceList$vars")));
            o.value.hostInLocal = l, o.value.appIdInLocal = a, o.value.languageInLocal = f;
            var s = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                u = new e.DataTypes.VariableHolder,
                S = new e.DataTypes.VariableHolder,
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(k))),
                A = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.ResidenceList$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return S.value = d.default.checkHost$Action(o.value.hostInLocal, i), e.Flow.executeSequence(function() {
                    return S.value.isGreenOut ? m.getResidenceList$ServerAction(o.value.appIdInLocal, o.value.languageInLocal, i).then(function(b) {
                        u.value = b
                    }).then(function() {
                        A.value.responseOut = u.value.responseOut
                    }) : d.default.fetchData$Action(o.value.appIdInLocal, o.value.languageInLocal, "", o.value.hostInLocal, "GET", "residence_list", "", i).then(function(b) {
                        O.value = b
                    }).then(function() {
                        v.value.dataOut = e.JSONUtils.deserializeFromJSON(O.value.responseOut, k, !1), A.value.responseOut = v.value.dataOut
                    })
                })
            }).catch(function(b) {
                if (e.Logger.debug("ResidenceList.ResidenceList", e.Exceptions.getMessage(b)), !e.Exceptions.isSystem(b)) return e.Logger.error(null, b, null, null, 1), s.value.exceptionMessageAttr = e.Exceptions.getMessage(b), e.Logger.startActiveSpan("AllExceptions", function(y) {
                    return y && (y.setAttribute("code.function", "AllExceptions"), y.setAttribute("outsystems.function.key", "f53eb755-5870-4a99-a0b3-99f2880036b0"), y.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), y.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), y.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return A.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(A.value)
                        })
                    }, function() {
                        y && y.end()
                    })
                }, 1);
                throw b
            }).then(function() {
                return A.value
            })
        }, function() {
            c && c.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.ResidenceList$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.ResidenceList$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new k
    }, "defaultValue"),
    complexType: k
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.residenceList$Action = function(l, a, f) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? 1 : a, f = f === void 0 ? "en" : f, m.executeActionInsideJSNode(d.default.residenceList$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(i) {
        return {
            Response: i.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(i.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.setSettings$Action = function(l, a, f, i, c, o) {
    return e.Logger.startActiveSpan("SetSettings", function(s) {
        return s && (s.setAttribute("code.function", "SetSettings"), s.setAttribute("outsystems.function.key", "90909ab1-6d57-4853-8a73-21e1a85ab1fb"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            o = m.callContext(o);
            var u = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.SetSettings$vars")));
            u.value.hostInLocal = l, u.value.authTokenInLocal = a, u.value.appIdInLocal = f, u.value.languageInLocal = i, u.value.requestInLocal = c.clone();
            var S = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder,
                b = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                y = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(Te))),
                p = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.SetSettings$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return v.value = d.default.checkHost$Action(u.value.hostInLocal, o), e.Flow.executeSequence(function() {
                    return v.value.isGreenOut ? m.postSetSettings$ServerAction(u.value.appIdInLocal, u.value.languageInLocal, u.value.requestInLocal, u.value.authTokenInLocal, o).then(function(T) {
                        O.value = T
                    }).then(function() {
                        p.value.responseOut = O.value.responseOut
                    }) : (b.value.jSONOut = e.JSONUtils.serializeToJSON(u.value.requestInLocal, !1, !1), d.default.fetchData$Action(u.value.appIdInLocal, u.value.languageInLocal, b.value.jSONOut, u.value.hostInLocal, "POST", "set_settings", u.value.authTokenInLocal, o).then(function(T) {
                        A.value = T
                    }).then(function() {
                        y.value.dataOut = e.JSONUtils.deserializeFromJSON(A.value.responseOut, Te, !1), p.value.responseOut = y.value.dataOut
                    }))
                })
            }).catch(function(T) {
                if (e.Logger.debug("SetSettings.SetSettings", e.Exceptions.getMessage(T)), !e.Exceptions.isSystem(T)) return e.Logger.error(null, T, null, null, 1), S.value.exceptionMessageAttr = e.Exceptions.getMessage(T), e.Logger.startActiveSpan("AllExceptions", function(D) {
                    return D && (D.setAttribute("code.function", "AllExceptions"), D.setAttribute("outsystems.function.key", "2df83cba-f8b8-4c72-8f92-c4d183b1772a"), D.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), D.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), D.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return p.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(p.value)
                        })
                    }, function() {
                        D && D.end()
                    })
                }, 1);
                throw T
            }).then(function() {
                return p.value
            })
        }, function() {
            s && s.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.SetSettings$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new _e
    }, "defaultValue"),
    complexType: _e
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.SetSettings$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Te
    }, "defaultValue"),
    complexType: Te
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.setSettings$Action = function(l, a, f, i, c) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, c = c === void 0 ? new _e : c, m.executeActionInsideJSNode(d.default.setSettings$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text), c), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Response: o.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(o.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.tradingAssessment$Action = function(l, a, f, i, c, o) {
    return e.Logger.startActiveSpan("TradingAssessment", function(s) {
        return s && (s.setAttribute("code.function", "TradingAssessment"), s.setAttribute("outsystems.function.key", "f352023e-f337-45a6-9e1c-bd1e718d2441"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            o = m.callContext(o);
            var u = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.TradingAssessment$vars")));
            u.value.hostInLocal = l, u.value.authTokenInLocal = a, u.value.appIdInLocal = f, u.value.languageInLocal = i, u.value.requestInLocal = c.clone();
            var S = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder,
                b = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                y = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(be))),
                p = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.TradingAssessment$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return v.value = d.default.checkHost$Action(u.value.hostInLocal, o), e.Flow.executeSequence(function() {
                    return v.value.isGreenOut ? m.tradingAssessment$ServerAction(u.value.appIdInLocal, u.value.languageInLocal, u.value.requestInLocal, u.value.authTokenInLocal, o).then(function(T) {
                        O.value = T
                    }).then(function() {
                        p.value.responseOut = O.value.responseOut
                    }) : (b.value.jSONOut = e.JSONUtils.serializeToJSON(u.value.requestInLocal, !1, !1), d.default.fetchData$Action(u.value.appIdInLocal, u.value.languageInLocal, b.value.jSONOut, u.value.hostInLocal, "POST", "set_financial_assessment", u.value.authTokenInLocal, o).then(function(T) {
                        A.value = T
                    }).then(function() {
                        y.value.dataOut = e.JSONUtils.deserializeFromJSON(A.value.responseOut, be, !1), p.value.responseOut = y.value.dataOut
                    }))
                })
            }).catch(function(T) {
                if (e.Logger.debug("TradingAssessment.TradingAssessment", e.Exceptions.getMessage(T)), !e.Exceptions.isSystem(T)) return e.Logger.error(null, T, null, null, 1), S.value.exceptionMessageAttr = e.Exceptions.getMessage(T), e.Logger.startActiveSpan("AllExceptions", function(D) {
                    return D && (D.setAttribute("code.function", "AllExceptions"), D.setAttribute("outsystems.function.key", "fd23725b-99a8-438d-ba93-eacaad40cbb4"), D.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), D.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), D.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return p.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(p.value)
                        })
                    }, function() {
                        D && D.end()
                    })
                }, 1);
                throw T
            }).then(function() {
                return p.value
            })
        }, function() {
            s && s.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.TradingAssessment$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Ke
    }, "defaultValue"),
    complexType: Ke
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.TradingAssessment$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new be
    }, "defaultValue"),
    complexType: be
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.tradingAssessment$Action = function(l, a, f, i, c) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, c = c === void 0 ? new Ke : c, m.executeActionInsideJSNode(d.default.tradingAssessment$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text), c), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Response: o.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(o.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.tradingPlatformAvailableAccounts$Action = function(l, a, f, i, c, o) {
    return e.Logger.startActiveSpan("TradingPlatformAvailableAccounts", function(s) {
        return s && (s.setAttribute("code.function", "TradingPlatformAvailableAccounts"), s.setAttribute("outsystems.function.key", "f99dd5bc-3409-4627-a70d-9c93cca98124"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            o = m.callContext(o);
            var u = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformAvailableAccounts$vars")));
            u.value.hostInLocal = l, u.value.authTokenInLocal = a, u.value.appIdInLocal = f, u.value.languageInLocal = i, u.value.requestInLocal = c.clone();
            var S = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder,
                b = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(x))),
                y = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(P))),
                p = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformAvailableAccounts$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return A.value = d.default.checkHost$Action(u.value.hostInLocal, o), e.Flow.executeSequence(function() {
                    return A.value.isGreenOut ? m.postTradingPlatformAvailableAccountsMt5$ServerAction(u.value.appIdInLocal, u.value.languageInLocal, u.value.authTokenInLocal, function() {
                        var T = new g;
                        return T.platformAttr = u.value.requestInLocal.platformAttr, T.country_codeAttr = u.value.requestInLocal.country_codeAttr, T
                    }(), o).then(function(T) {
                        O.value = T
                    }) : d.default.fetchData$Action(u.value.appIdInLocal, u.value.languageInLocal, "", u.value.hostInLocal, "POST", "trading_platform_available_accounts", u.value.authTokenInLocal, o).then(function(T) {
                        v.value = T
                    }).then(function() {
                        u.value.requestInLocal.platformAttr === "mt5" ? (b.value.dataOut = e.JSONUtils.deserializeFromJSON(v.value.responseOut, x, !1), p.value.responseMT5Out = b.value.dataOut) : (y.value.dataOut = e.JSONUtils.deserializeFromJSON(v.value.responseOut, P, !1), p.value.responseCtraderOut = y.value.dataOut)
                    })
                })
            }).catch(function(T) {
                if (e.Logger.debug("TradingPlatformAvailableAccounts.TradingPlatformAvailableAccounts", e.Exceptions.getMessage(T)), !e.Exceptions.isSystem(T)) return e.Logger.error(null, T, null, null, 1), S.value.exceptionMessageAttr = e.Exceptions.getMessage(T), e.Logger.startActiveSpan("AllExceptions", function(D) {
                    return D && (D.setAttribute("code.function", "AllExceptions"), D.setAttribute("outsystems.function.key", "ec55ee31-21a4-4213-834f-e59a543a254a"), D.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), D.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), D.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return p.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(p.value)
                        })
                    }, function() {
                        D && D.end()
                    })
                }, 1);
                throw T
            }).then(function() {
                return p.value
            })
        }, function() {
            s && s.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformAvailableAccounts$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new g
    }, "defaultValue"),
    complexType: g
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformAvailableAccounts$outVars", [{
    name: "ResponseMT5",
    attrName: "responseMT5Out",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new x
    }, "defaultValue"),
    complexType: x
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}, {
    name: "ResponseCtrader",
    attrName: "responseCtraderOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new P
    }, "defaultValue"),
    complexType: P
}]);
d.clientActionProxies.tradingPlatformAvailableAccounts$Action = function(l, a, f, i, c) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, c = c === void 0 ? new g : c, m.executeActionInsideJSNode(d.default.tradingPlatformAvailableAccounts$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text), c), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            ResponseMT5: o.responseMT5Out,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(o.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean),
            ResponseCtrader: o.responseCtraderOut
        }
    })
};
d.tradingPlatformAvailableAccountsCtrader$Action = function(l, a, f, i, c, o) {
    return e.Logger.startActiveSpan("TradingPlatformAvailableAccountsCtrader", function(s) {
        return s && (s.setAttribute("code.function", "TradingPlatformAvailableAccountsCtrader"), s.setAttribute("outsystems.function.key", "af107889-871a-4605-aef2-a06568f78f49"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            o = m.callContext(o);
            var u = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformAvailableAccountsCtrader$vars")));
            u.value.hostInLocal = l, u.value.authTokenInLocal = a, u.value.appIdInLocal = f, u.value.languageInLocal = i, u.value.requestInLocal = c.clone();
            var S = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder,
                b = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                y = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                p = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(P))),
                T = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformAvailableAccountsCtrader$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return A.value = d.default.checkHost$Action(u.value.hostInLocal, o), e.Flow.executeSequence(function() {
                    return A.value.isGreenOut ? m.postTradingPlatformAvailableAccountsCtrader$ServerAction(u.value.appIdInLocal, u.value.languageInLocal, u.value.authTokenInLocal, function() {
                        var D = new g;
                        return D.platformAttr = u.value.requestInLocal.platformAttr, D.country_codeAttr = u.value.requestInLocal.country_codeAttr, D
                    }(), o).then(function(D) {
                        O.value = D
                    }).then(function() {
                        b.value.jSONOut = e.JSONUtils.serializeToJSON(O.value.responseOut, !1, !1), e.Logger.startActiveSpan("JavaScript1", function(D) {
                            D && (D.setAttribute("code.function", "JavaScript1"), D.setAttribute("outsystems.function.key", "ce87cb83-8827-41c6-94aa-4275b7107c9c"), D.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), D.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), D.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return m.safeExecuteJSNode(U7, "JavaScript1", "TradingPlatformAvailableAccountsCtrader", {
                                    In1: e.DataConversion.JSNodeParamConverter.to(b.value.jSONOut, e.DataTypes.DataTypes.Text)
                                }, function(he) {}, {}, {})
                            } finally {
                                D && D.end()
                            }
                        }, 1), T.value.responseCtraderOut = O.value.responseOut.trading_platform_available_accountsAttr, y.value.jSONOut = e.JSONUtils.serializeToJSON(T.value.responseCtraderOut, !1, !1), e.Logger.startActiveSpan("JavaScript2", function(D) {
                            D && (D.setAttribute("code.function", "JavaScript2"), D.setAttribute("outsystems.function.key", "cd7e76ce-ac76-4461-8480-1f13161fd0f9"), D.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), D.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), D.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return m.safeExecuteJSNode(J7, "JavaScript2", "TradingPlatformAvailableAccountsCtrader", {
                                    In1: e.DataConversion.JSNodeParamConverter.to(y.value.jSONOut, e.DataTypes.DataTypes.Text)
                                }, function(he) {}, {}, {})
                            } finally {
                                D && D.end()
                            }
                        }, 1)
                    }) : d.default.fetchData$Action(u.value.appIdInLocal, u.value.languageInLocal, "", u.value.hostInLocal, "POST", "trading_platform_available_accounts", u.value.authTokenInLocal, o).then(function(D) {
                        v.value = D
                    }).then(function() {
                        p.value.dataOut = e.JSONUtils.deserializeFromJSON(v.value.responseOut, P, !1), T.value.responseCtraderOut = p.value.dataOut.trading_platform_available_accountsAttr
                    })
                })
            }).catch(function(D) {
                if (e.Logger.debug("TradingPlatformAvailableAccountsCtrader.TradingPlatformAvailableAccountsCtrader", e.Exceptions.getMessage(D)), !e.Exceptions.isSystem(D)) return e.Logger.error(null, D, null, null, 1), S.value.exceptionMessageAttr = e.Exceptions.getMessage(D), e.Logger.startActiveSpan("AllExceptions", function(he) {
                    return he && (he.setAttribute("code.function", "AllExceptions"), he.setAttribute("outsystems.function.key", "7d4c275b-7cb5-4509-a80c-ef03d6a7ef33"), he.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), he.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), he.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return T.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(T.value)
                        })
                    }, function() {
                        he && he.end()
                    })
                }, 1);
                throw D
            }).then(function() {
                return T.value
            })
        }, function() {
            s && s.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformAvailableAccountsCtrader$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new g
    }, "defaultValue"),
    complexType: g
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformAvailableAccountsCtrader$outVars", [{
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}, {
    name: "ResponseCtrader",
    attrName: "responseCtraderOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.RecordList,
    defaultValue: r(function() {
        return new rp
    }, "defaultValue"),
    complexType: rp
}]);
d.clientActionProxies.tradingPlatformAvailableAccountsCtrader$Action = function(l, a, f, i, c) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, c = c === void 0 ? new g : c, m.executeActionInsideJSNode(d.default.tradingPlatformAvailableAccountsCtrader$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text), c), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(o.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean),
            ResponseCtrader: o.responseCtraderOut
        }
    })
};
d.tradingPlatformAvailableAccountsMt5$Action = function(l, a, f, i, c, o) {
    return e.Logger.startActiveSpan("TradingPlatformAvailableAccountsMt5", function(s) {
        return s && (s.setAttribute("code.function", "TradingPlatformAvailableAccountsMt5"), s.setAttribute("outsystems.function.key", "e8e62775-314d-4423-9081-983a59129193"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            o = m.callContext(o);
            var u = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformAvailableAccountsMt5$vars")));
            u.value.hostInLocal = l, u.value.authTokenInLocal = a, u.value.appIdInLocal = f, u.value.languageInLocal = i, u.value.requestInLocal = c.clone();
            var S = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder,
                b = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(x))),
                y = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformAvailableAccountsMt5$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return A.value = d.default.checkHost$Action(u.value.hostInLocal, o), e.Flow.executeSequence(function() {
                    return A.value.isGreenOut ? m.postTradingPlatformAvailableAccountsMt5$ServerAction(u.value.appIdInLocal, u.value.languageInLocal, u.value.authTokenInLocal, function() {
                        var p = new g;
                        return p.platformAttr = u.value.requestInLocal.platformAttr, p.country_codeAttr = u.value.requestInLocal.country_codeAttr, p
                    }(), o).then(function(p) {
                        O.value = p
                    }).then(function() {
                        y.value.responseMT5Out = O.value.responseOut
                    }) : d.default.fetchData$Action(u.value.appIdInLocal, u.value.languageInLocal, "", u.value.hostInLocal, "POST", "trading_platform_available_accounts", u.value.authTokenInLocal, o).then(function(p) {
                        v.value = p
                    }).then(function() {
                        b.value.dataOut = e.JSONUtils.deserializeFromJSON(v.value.responseOut, x, !1), y.value.responseMT5Out = b.value.dataOut
                    })
                })
            }).catch(function(p) {
                if (e.Logger.debug("TradingPlatformAvailableAccountsMt5.TradingPlatformAvailableAccountsMt5", e.Exceptions.getMessage(p)), !e.Exceptions.isSystem(p)) return e.Logger.error(null, p, null, null, 1), S.value.exceptionMessageAttr = e.Exceptions.getMessage(p), e.Logger.startActiveSpan("AllExceptions", function(T) {
                    return T && (T.setAttribute("code.function", "AllExceptions"), T.setAttribute("outsystems.function.key", "f9523870-00d9-4e7a-8803-9cece360d41a"), T.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), T.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), T.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return y.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(y.value)
                        })
                    }, function() {
                        T && T.end()
                    })
                }, 1);
                throw p
            }).then(function() {
                return y.value
            })
        }, function() {
            s && s.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformAvailableAccountsMt5$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new g
    }, "defaultValue"),
    complexType: g
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.TradingPlatformAvailableAccountsMt5$outVars", [{
    name: "ResponseMT5",
    attrName: "responseMT5Out",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new x
    }, "defaultValue"),
    complexType: x
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.tradingPlatformAvailableAccountsMt5$Action = function(l, a, f, i, c) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, c = c === void 0 ? new g : c, m.executeActionInsideJSNode(d.default.tradingPlatformAvailableAccountsMt5$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text), c), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            ResponseMT5: o.responseMT5Out,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(o.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.uploadDocument$Action = function(l, a, f, i, c, o) {
    return e.Logger.startActiveSpan("UploadDocument", function(s) {
        return s && (s.setAttribute("code.function", "UploadDocument"), s.setAttribute("outsystems.function.key", "ea4c6f5e-6358-432e-b534-cfe3cfe12625"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            o = m.callContext(o);
            var u = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.UploadDocument$vars")));
            u.value.hostInLocal = l, u.value.authTokenInLocal = a, u.value.appIdInLocal = f, u.value.languageInLocal = i, u.value.requestInLocal = c.clone();
            var S = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder,
                b = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                y = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(B))),
                p = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.UploadDocument$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return A.value = d.default.checkHost$Action(u.value.hostInLocal, o), e.Flow.executeSequence(function() {
                    return A.value.isGreenOut ? m.uploadDocument$ServerAction(u.value.appIdInLocal, u.value.languageInLocal, u.value.requestInLocal, u.value.authTokenInLocal, o).then(function(T) {
                        O.value = T
                    }).then(function() {
                        p.value.responseOut = O.value.responseOut
                    }) : (b.value.jSONOut = e.JSONUtils.serializeToJSON(u.value.requestInLocal, !1, !1), d.default.fetchData$Action(u.value.appIdInLocal, u.value.languageInLocal, b.value.jSONOut, u.value.hostInLocal, "POST", "document_upload", u.value.authTokenInLocal, o).then(function(T) {
                        v.value = T
                    }).then(function() {
                        y.value.dataOut = e.JSONUtils.deserializeFromJSON(v.value.responseOut, B, !1), p.value.responseOut = y.value.dataOut
                    }))
                })
            }).catch(function(T) {
                if (e.Logger.debug("UploadDocument.UploadDocument", e.Exceptions.getMessage(T)), !e.Exceptions.isSystem(T)) return e.Logger.error(null, T, null, null, 1), S.value.exceptionMessageAttr = e.Exceptions.getMessage(T), e.Logger.startActiveSpan("AllExceptions", function(D) {
                    return D && (D.setAttribute("code.function", "AllExceptions"), D.setAttribute("outsystems.function.key", "1095d67c-de54-4cb7-84b2-640db164d96d"), D.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), D.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), D.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return p.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(p.value)
                        })
                    }, function() {
                        D && D.end()
                    })
                }, 1);
                throw T
            }).then(function() {
                return p.value
            })
        }, function() {
            s && s.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.UploadDocument$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "Request",
    attrName: "requestInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new He
    }, "defaultValue"),
    complexType: He
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.UploadDocument$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new B
    }, "defaultValue"),
    complexType: B
}, {
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
d.clientActionProxies.uploadDocument$Action = function(l, a, f, i, c) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? "" : a, f = f === void 0 ? 1 : f, i = i === void 0 ? "en" : i, c = c === void 0 ? new He : c, m.executeActionInsideJSNode(d.default.uploadDocument$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text), c), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Response: o.responseOut,
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(o.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
d.websocketLogout$Action = function(l, a, f, i, c) {
    return e.Logger.startActiveSpan("WebsocketLogout", function(o) {
        return o && (o.setAttribute("code.function", "WebsocketLogout"), o.setAttribute("outsystems.function.key", "8c887304-99a1-4885-a288-0265539f3ed8"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            c = m.callContext(c);
            var s = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.WebsocketLogout$vars")));
            s.value.hostInLocal = l, s.value.appIdInLocal = a, s.value.languageInLocal = f, s.value.authTokenInLocal = i;
            var u = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                S = new e.DataTypes.VariableHolder,
                O = new e.DataTypes.VariableHolder,
                v = new e.DataTypes.VariableHolder,
                A = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(N))),
                b = new e.DataTypes.VariableHolder(new(m.constructor.getVariableGroupType("RESTAPIWebsocketOfficial.WebsocketLogout$outVars")));
            return e.Flow.executeAsyncFlow(function() {
                return O.value = d.default.checkHost$Action(s.value.hostInLocal, c), e.Flow.executeSequence(function() {
                    return O.value.isGreenOut ? m.postLogout$ServerAction(s.value.appIdInLocal, s.value.languageInLocal, s.value.authTokenInLocal, c).then(function(y) {
                        S.value = y
                    }).then(function() {
                        b.value.responseOut = S.value.responseOut
                    }) : d.default.fetchData$Action(s.value.appIdInLocal, s.value.languageInLocal, "", s.value.hostInLocal, "GET", "logout", s.value.authTokenInLocal, c).then(function(y) {
                        v.value = y
                    }).then(function() {
                        A.value.dataOut = e.JSONUtils.deserializeFromJSON(v.value.responseOut, N, !1), b.value.responseOut = A.value.dataOut
                    })
                })
            }).catch(function(y) {
                if (e.Logger.debug("WebsocketLogout.WebsocketLogout", e.Exceptions.getMessage(y)), !e.Exceptions.isSystem(y)) return e.Logger.error(null, y, null, null, 1), u.value.exceptionMessageAttr = e.Exceptions.getMessage(y), e.Logger.startActiveSpan("AllExceptions", function(p) {
                    return p && (p.setAttribute("code.function", "AllExceptions"), p.setAttribute("outsystems.function.key", "277c59fd-49c6-4d19-b6ba-66d8e305cc7b"), p.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), p.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), p.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                        return e.Flow.executeAsyncFlow(function() {
                            return b.value.hasNetworkErrorOut = !0, e.Flow.returnAsync(b.value)
                        })
                    }, function() {
                        p && p.end()
                    })
                }, 1);
                throw y
            }).then(function() {
                return b.value
            })
        }, function() {
            o && o.end()
        })
    }, 1)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.WebsocketLogout$vars", [{
    name: "Host",
    attrName: "hostInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "1"
    }, "defaultValue")
}, {
    name: "Language",
    attrName: "languageInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en"
    }, "defaultValue")
}, {
    name: "AuthToken",
    attrName: "authTokenInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial.WebsocketLogout$outVars", [{
    name: "HasNetworkError",
    attrName: "hasNetworkErrorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}, {
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new N
    }, "defaultValue"),
    complexType: N
}]);
d.clientActionProxies.websocketLogout$Action = function(l, a, f, i) {
    return l = l === void 0 ? "" : l, a = a === void 0 ? 1 : a, f = f === void 0 ? "en" : f, i = i === void 0 ? "" : i, m.executeActionInsideJSNode(d.default.websocketLogout$Action.bind(m, e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            HasNetworkError: e.DataConversion.JSNodeParamConverter.to(c.hasNetworkErrorOut, e.DataTypes.DataTypes.Boolean),
            Response: c.responseOut
        }
    })
};
d.authorize$ServerAction = function(l, a, f, i) {
    var c = this.controller;
    return e.Logger.startActiveSpan("Authorize", function(o) {
        return o && (o.setAttribute("code.function", "Authorize"), o.setAttribute("outsystems.function.key", "7cbda02f-f943-4782-912c-ed335770551a"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var s = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Record)
            };
            return c.callServerAction("Authorize", "screenservices/RESTAPIWebsocketOfficial/ActionAuthorize", "ksZNnduFHUqgTxUSUZ0tnw", s, c.callContext(i), void 0, void 0, !1).then(function(u) {
                var S = new(c.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionAuthorize"));
                return S.responseOut = e.DataConversion.ServerDataConverter.from(u.Response, De), S
            })
        }, function() {
            o && o.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionAuthorize", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new De
    }, "defaultValue"),
    complexType: De
}]);
d.fetchServiceToken$ServerAction = function(l, a, f, i, c) {
    var o = this.controller;
    return e.Logger.startActiveSpan("FetchServiceToken", function(s) {
        return s && (s.setAttribute("code.function", "FetchServiceToken"), s.setAttribute("outsystems.function.key", "ab32ddab-485b-43eb-ac26-66aa83dd005a"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var u = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Record),
                XToken: e.DataConversion.ServerDataConverter.to(i, e.DataTypes.DataTypes.Text)
            };
            return o.callServerAction("FetchServiceToken", "screenservices/RESTAPIWebsocketOfficial/ActionFetchServiceToken", "c_UldUfWkW0NZY14pFRsNA", u, o.callContext(c), void 0, void 0, !1).then(function(S) {
                var O = new(o.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionFetchServiceToken"));
                return O.responseOut = e.DataConversion.ServerDataConverter.from(S.Response, z), O
            })
        }, function() {
            s && s.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionFetchServiceToken", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new z
    }, "defaultValue"),
    complexType: z
}]);
d.fetchStatesList$ServerAction = function(l, a, f, i) {
    var c = this.controller;
    return e.Logger.startActiveSpan("FetchStatesList", function(o) {
        return o && (o.setAttribute("code.function", "FetchStatesList"), o.setAttribute("outsystems.function.key", "19b70e4c-e7bd-40f4-bb80-55f8259dec90"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var s = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Record)
            };
            return c.callServerAction("FetchStatesList", "screenservices/RESTAPIWebsocketOfficial/ActionFetchStatesList", "OOJfHG_sLvBETPnKU3DIJQ", s, c.callContext(i), void 0, void 0, !1).then(function(u) {
                var S = new(c.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionFetchStatesList"));
                return S.responseOut = e.DataConversion.ServerDataConverter.from(u.Response, ee), S
            })
        }, function() {
            o && o.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionFetchStatesList", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new ee
    }, "defaultValue"),
    complexType: ee
}]);
d.getAccountStatus$ServerAction = function(l, a, f, i) {
    var c = this.controller;
    return e.Logger.startActiveSpan("GetAccountStatus", function(o) {
        return o && (o.setAttribute("code.function", "GetAccountStatus"), o.setAttribute("outsystems.function.key", "6c15520c-1a30-44a4-9c45-61e8c4084c59"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var s = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                AuthToken: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Text)
            };
            return c.callServerAction("GetAccountStatus", "screenservices/RESTAPIWebsocketOfficial/ActionGetAccountStatus", "mDTz1dv6LjT723BRXOgTLA", s, c.callContext(i), void 0, void 0, !1).then(function(u) {
                var S = new(c.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetAccountStatus"));
                return S.responseOut = e.DataConversion.ServerDataConverter.from(u.Response, E), S
            })
        }, function() {
            o && o.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetAccountStatus", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new E
    }, "defaultValue"),
    complexType: E
}]);
d.getAssetIndex$ServerAction = function(l, a, f) {
    var i = this.controller;
    return e.Logger.startActiveSpan("GetAssetIndex", function(c) {
        return c && (c.setAttribute("code.function", "GetAssetIndex"), c.setAttribute("outsystems.function.key", "288c5241-f103-4a6d-ae56-6df8bf4176ac"), c.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), c.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), c.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var o = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text)
            };
            return i.callServerAction("GetAssetIndex", "screenservices/RESTAPIWebsocketOfficial/ActionGetAssetIndex", "yfmGUL6x+sYNoIEi3xi0uw", o, i.callContext(f), void 0, void 0, !1).then(function(s) {
                var u = new(i.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetAssetIndex"));
                return u.responseOut = e.DataConversion.ServerDataConverter.from(s.Response, U), u
            })
        }, function() {
            c && c.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetAssetIndex", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new U
    }, "defaultValue"),
    complexType: U
}]);
d.getFinancialAssessment$ServerAction = function(l, a, f, i) {
    var c = this.controller;
    return e.Logger.startActiveSpan("GetFinancialAssessment", function(o) {
        return o && (o.setAttribute("code.function", "GetFinancialAssessment"), o.setAttribute("outsystems.function.key", "9dc1f0ef-0a48-464d-9fdb-590b8d300cf0"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var s = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                AuthToken: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Text)
            };
            return c.callServerAction("GetFinancialAssessment", "screenservices/RESTAPIWebsocketOfficial/ActionGetFinancialAssessment", "vMFSuDTCW17AZpOCJNqhFA", s, c.callContext(i), void 0, void 0, !1).then(function(u) {
                var S = new(c.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetFinancialAssessment"));
                return S.responseOut = e.DataConversion.ServerDataConverter.from(u.Response, I), S
            })
        }, function() {
            o && o.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetFinancialAssessment", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new I
    }, "defaultValue"),
    complexType: I
}]);
d.getKYCAuthStatus$ServerAction = function(l, a, f, i, c) {
    var o = this.controller;
    return e.Logger.startActiveSpan("GetKYCAuthStatus", function(s) {
        return s && (s.setAttribute("code.function", "GetKYCAuthStatus"), s.setAttribute("outsystems.function.key", "e304136f-94fa-4111-b150-32708b9c5c8d"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var u = {
                AuthToken: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                AppId: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(i, e.DataTypes.DataTypes.Record)
            };
            return o.callServerAction("GetKYCAuthStatus", "screenservices/RESTAPIWebsocketOfficial/ActionGetKYCAuthStatus", "XWih4EUgG6AEA4FgnSMo9Q", u, o.callContext(c), void 0, void 0, !1).then(function(S) {
                var O = new(o.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetKYCAuthStatus"));
                return O.responseOut = e.DataConversion.ServerDataConverter.from(S.Response, Q), O
            })
        }, function() {
            s && s.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetKYCAuthStatus", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Q
    }, "defaultValue"),
    complexType: Q
}]);
d.getLandingCompany$ServerAction = function(l, a, f, i) {
    var c = this.controller;
    return e.Logger.startActiveSpan("GetLandingCompany", function(o) {
        return o && (o.setAttribute("code.function", "GetLandingCompany"), o.setAttribute("outsystems.function.key", "2afa81a6-9312-47c9-8f1f-024e35c0121d"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var s = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Record)
            };
            return c.callServerAction("GetLandingCompany", "screenservices/RESTAPIWebsocketOfficial/ActionGetLandingCompany", "LRDV7GKyC7fi4aQElzXL_A", s, c.callContext(i), void 0, void 0, !1).then(function(u) {
                var S = new(c.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetLandingCompany"));
                return S.responseOut = e.DataConversion.ServerDataConverter.from(u.Response, h), S
            })
        }, function() {
            o && o.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetLandingCompany", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new h
    }, "defaultValue"),
    complexType: h
}]);
d.getMT5LoginList$ServerAction = function(l, a, f, i) {
    var c = this.controller;
    return e.Logger.startActiveSpan("GetMT5LoginList", function(o) {
        return o && (o.setAttribute("code.function", "GetMT5LoginList"), o.setAttribute("outsystems.function.key", "066791a7-277c-441b-b2c6-4e2f9a36e3a9"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var s = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                XToken: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Text)
            };
            return c.callServerAction("GetMT5LoginList", "screenservices/RESTAPIWebsocketOfficial/ActionGetMT5LoginList", "gl+mJEaWD3KcQL+WL0P7VA", s, c.callContext(i), void 0, void 0, !1).then(function(u) {
                var S = new(c.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetMT5LoginList"));
                return S.responseOut = e.DataConversion.ServerDataConverter.from(u.Response, j), S
            })
        }, function() {
            o && o.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetMT5LoginList", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new j
    }, "defaultValue"),
    complexType: j
}]);
d.getP2pAdvertInfo$ServerAction = function(l, a, f, i) {
    var c = this.controller;
    return e.Logger.startActiveSpan("GetP2pAdvertInfo", function(o) {
        return o && (o.setAttribute("code.function", "GetP2pAdvertInfo"), o.setAttribute("outsystems.function.key", "2c062866-af7e-404c-914d-77e6dacea060"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var s = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Record)
            };
            return c.callServerAction("GetP2pAdvertInfo", "screenservices/RESTAPIWebsocketOfficial/ActionGetP2pAdvertInfo", "OIsK36yEP7Sefy3DhhIXZw", s, c.callContext(i), void 0, void 0, !1).then(function(u) {
                var S = new(c.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pAdvertInfo"));
                return S.responseOut = e.DataConversion.ServerDataConverter.from(u.Response, q), S
            })
        }, function() {
            o && o.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pAdvertInfo", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new q
    }, "defaultValue"),
    complexType: q
}]);
d.getP2pAdvertiserAdverts$ServerAction = function(l, a, f) {
    var i = this.controller;
    return e.Logger.startActiveSpan("GetP2pAdvertiserAdverts", function(c) {
        return c && (c.setAttribute("code.function", "GetP2pAdvertiserAdverts"), c.setAttribute("outsystems.function.key", "4925f8bc-0f09-4520-9eb9-1b32d1a29f9e"), c.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), c.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), c.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var o = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text)
            };
            return i.callServerAction("GetP2pAdvertiserAdverts", "screenservices/RESTAPIWebsocketOfficial/ActionGetP2pAdvertiserAdverts", "Q0VQLHWFWKR3Zfa+KkVMJQ", o, i.callContext(f), void 0, void 0, !1).then(function(s) {
                var u = new(i.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pAdvertiserAdverts"));
                return u.responseOut = e.DataConversion.ServerDataConverter.from(s.Response, Z), u
            })
        }, function() {
            c && c.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pAdvertiserAdverts", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Z
    }, "defaultValue"),
    complexType: Z
}]);
d.getP2pAdvertiserInfo$ServerAction = function(l, a, f, i) {
    var c = this.controller;
    return e.Logger.startActiveSpan("GetP2pAdvertiserInfo", function(o) {
        return o && (o.setAttribute("code.function", "GetP2pAdvertiserInfo"), o.setAttribute("outsystems.function.key", "4dcb3aa1-edef-4345-9763-83489de27bcb"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var s = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Record)
            };
            return c.callServerAction("GetP2pAdvertiserInfo", "screenservices/RESTAPIWebsocketOfficial/ActionGetP2pAdvertiserInfo", "4aU3YDCs_pLvqsWZc7U5kg", s, c.callContext(i), void 0, void 0, !1).then(function(u) {
                var S = new(c.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pAdvertiserInfo"));
                return S.responseOut = e.DataConversion.ServerDataConverter.from(u.Response, $), S
            })
        }, function() {
            o && o.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pAdvertiserInfo", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new $
    }, "defaultValue"),
    complexType: $
}]);
d.getP2pAdvertiserList$ServerAction = function(l, a, f) {
    var i = this.controller;
    return e.Logger.startActiveSpan("GetP2pAdvertiserList", function(c) {
        return c && (c.setAttribute("code.function", "GetP2pAdvertiserList"), c.setAttribute("outsystems.function.key", "d30b4f91-db4a-4657-b28c-f1d3dcc03ca8"), c.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), c.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), c.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var o = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text)
            };
            return i.callServerAction("GetP2pAdvertiserList", "screenservices/RESTAPIWebsocketOfficial/ActionGetP2pAdvertiserList", "dThOz2A+YFgmVHk6wzwdlQ", o, i.callContext(f), void 0, void 0, !1).then(function(s) {
                var u = new(i.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pAdvertiserList"));
                return u.responseOut = e.DataConversion.ServerDataConverter.from(s.Response, H), u
            })
        }, function() {
            c && c.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pAdvertiserList", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new H
    }, "defaultValue"),
    complexType: H
}]);
d.getP2pAdvertList$ServerAction = function(l, a, f) {
    var i = this.controller;
    return e.Logger.startActiveSpan("GetP2pAdvertList", function(c) {
        return c && (c.setAttribute("code.function", "GetP2pAdvertList"), c.setAttribute("outsystems.function.key", "d0ce1bff-7aed-47ec-af00-07bcf739eacf"), c.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), c.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), c.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var o = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text)
            };
            return i.callServerAction("GetP2pAdvertList", "screenservices/RESTAPIWebsocketOfficial/ActionGetP2pAdvertList", "_DCg_QqXiBEGKR+iLcMisg", o, i.callContext(f), void 0, void 0, !1).then(function(s) {
                var u = new(i.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pAdvertList"));
                return u.responseOut = e.DataConversion.ServerDataConverter.from(s.Response, V), u
            })
        }, function() {
            c && c.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pAdvertList", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new V
    }, "defaultValue"),
    complexType: V
}]);
d.getP2pCountryList$ServerAction = function(l, a, f) {
    var i = this.controller;
    return e.Logger.startActiveSpan("GetP2pCountryList", function(c) {
        return c && (c.setAttribute("code.function", "GetP2pCountryList"), c.setAttribute("outsystems.function.key", "3b7ec1f2-ca0e-40a3-9f0e-cdd280c76c87"), c.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), c.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), c.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var o = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text)
            };
            return i.callServerAction("GetP2pCountryList", "screenservices/RESTAPIWebsocketOfficial/ActionGetP2pCountryList", "VTem+x1QptkcegBKTAFERQ", o, i.callContext(f), void 0, void 0, !1).then(function(s) {
                var u = new(i.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pCountryList"));
                return u.responseOut = e.DataConversion.ServerDataConverter.from(s.Response, me), u
            })
        }, function() {
            c && c.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pCountryList", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new me
    }, "defaultValue"),
    complexType: me
}]);
d.getP2pOrderInfo$ServerAction = function(l, a, f, i) {
    var c = this.controller;
    return e.Logger.startActiveSpan("GetP2pOrderInfo", function(o) {
        return o && (o.setAttribute("code.function", "GetP2pOrderInfo"), o.setAttribute("outsystems.function.key", "d7e4959e-6c5e-4274-9e3e-5af9149d17b1"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var s = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Record)
            };
            return c.callServerAction("GetP2pOrderInfo", "screenservices/RESTAPIWebsocketOfficial/ActionGetP2pOrderInfo", "oE22n9gjZ+G7XOSzArtpUQ", s, c.callContext(i), void 0, void 0, !1).then(function(u) {
                var S = new(c.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pOrderInfo"));
                return S.responseOut = e.DataConversion.ServerDataConverter.from(u.Response, W), S
            })
        }, function() {
            o && o.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pOrderInfo", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new W
    }, "defaultValue"),
    complexType: W
}]);
d.getP2pOrderList$ServerAction = function(l, a, f) {
    var i = this.controller;
    return e.Logger.startActiveSpan("GetP2pOrderList", function(c) {
        return c && (c.setAttribute("code.function", "GetP2pOrderList"), c.setAttribute("outsystems.function.key", "84cecca6-7662-460c-94bb-5a53d6395ad6"), c.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), c.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), c.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var o = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text)
            };
            return i.callServerAction("GetP2pOrderList", "screenservices/RESTAPIWebsocketOfficial/ActionGetP2pOrderList", "tmR6RgIHF1o0HDd4OuoCMQ", o, i.callContext(f), void 0, void 0, !1).then(function(s) {
                var u = new(i.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pOrderList"));
                return u.responseOut = e.DataConversion.ServerDataConverter.from(s.Response, ie), u
            })
        }, function() {
            c && c.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pOrderList", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new ie
    }, "defaultValue"),
    complexType: ie
}]);
d.getP2pPaymentMethods$ServerAction = function(l, a, f) {
    var i = this.controller;
    return e.Logger.startActiveSpan("GetP2pPaymentMethods", function(c) {
        return c && (c.setAttribute("code.function", "GetP2pPaymentMethods"), c.setAttribute("outsystems.function.key", "30b4a88a-d53d-486e-bf89-d1d1280dd230"), c.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), c.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), c.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var o = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text)
            };
            return i.callServerAction("GetP2pPaymentMethods", "screenservices/RESTAPIWebsocketOfficial/ActionGetP2pPaymentMethods", "8bqDI_zPBkp_1Vehs_ZrQQ", o, i.callContext(f), void 0, void 0, !1).then(function(s) {
                var u = new(i.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pPaymentMethods"));
                return u.responseOut = e.DataConversion.ServerDataConverter.from(s.Response, nt), u
            })
        }, function() {
            c && c.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pPaymentMethods", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new nt
    }, "defaultValue"),
    complexType: nt
}]);
d.getP2pSettings$ServerAction = function(l, a, f) {
    var i = this.controller;
    return e.Logger.startActiveSpan("GetP2pSettings", function(c) {
        return c && (c.setAttribute("code.function", "GetP2pSettings"), c.setAttribute("outsystems.function.key", "e7c13628-d07b-44d2-8895-94bc6c7ea7f2"), c.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), c.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), c.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var o = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text)
            };
            return i.callServerAction("GetP2pSettings", "screenservices/RESTAPIWebsocketOfficial/ActionGetP2pSettings", "7lZG2TLPPF9nVecPzpG85Q", o, i.callContext(f), void 0, void 0, !1).then(function(s) {
                var u = new(i.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pSettings"));
                return u.responseOut = e.DataConversion.ServerDataConverter.from(s.Response, re), u
            })
        }, function() {
            c && c.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetP2pSettings", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new re
    }, "defaultValue"),
    complexType: re
}]);
d.getResidenceList$ServerAction = function(l, a, f) {
    var i = this.controller;
    return e.Logger.startActiveSpan("GetResidenceList", function(c) {
        return c && (c.setAttribute("code.function", "GetResidenceList"), c.setAttribute("outsystems.function.key", "8c19c48f-d810-43dd-9ec4-ffb170bba99a"), c.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), c.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), c.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var o = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text)
            };
            return i.callServerAction("GetResidenceList", "screenservices/RESTAPIWebsocketOfficial/ActionGetResidenceList", "6sSLuFymgvTqC0L1B1Kf2g", o, i.callContext(f), void 0, void 0, !1).then(function(s) {
                var u = new(i.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetResidenceList"));
                return u.responseOut = e.DataConversion.ServerDataConverter.from(s.Response, k), u
            })
        }, function() {
            c && c.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetResidenceList", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new k
    }, "defaultValue"),
    complexType: k
}]);
d.getSettings$ServerAction = function(l, a, f, i) {
    var c = this.controller;
    return e.Logger.startActiveSpan("GetSettings", function(o) {
        return o && (o.setAttribute("code.function", "GetSettings"), o.setAttribute("outsystems.function.key", "26276e4b-083d-4411-99d7-ca6d86b2e9e2"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var s = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                AuthToken: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Text)
            };
            return c.callServerAction("GetSettings", "screenservices/RESTAPIWebsocketOfficial/ActionGetSettings", "D8VnLDA+O3wSucpRe3t9Uw", s, c.callContext(i), void 0, void 0, !1).then(function(u) {
                var S = new(c.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetSettings"));
                return S.responseOut = e.DataConversion.ServerDataConverter.from(u.Response, J), S
            })
        }, function() {
            o && o.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetSettings", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new J
    }, "defaultValue"),
    complexType: J
}]);
d.getTradingPlatformStatus$ServerAction = function(l, a, f, i) {
    var c = this.controller;
    return e.Logger.startActiveSpan("GetTradingPlatformStatus", function(o) {
        return o && (o.setAttribute("code.function", "GetTradingPlatformStatus"), o.setAttribute("outsystems.function.key", "6792e1ab-e429-4d13-9a5f-c08bed222ad6"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var s = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                XToken: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Text)
            };
            return c.callServerAction("GetTradingPlatformStatus", "screenservices/RESTAPIWebsocketOfficial/ActionGetTradingPlatformStatus", "xGQZHKfy8aa9rDRMThToTw", s, c.callContext(i), void 0, void 0, !1).then(function(u) {
                var S = new(c.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetTradingPlatformStatus"));
                return S.responseOut = e.DataConversion.ServerDataConverter.from(u.Response, Se), S
            })
        }, function() {
            o && o.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetTradingPlatformStatus", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Se
    }, "defaultValue"),
    complexType: Se
}]);
d.getWebsiteStatus$ServerAction = function(l, a, f) {
    var i = this.controller;
    return e.Logger.startActiveSpan("GetWebsiteStatus", function(c) {
        return c && (c.setAttribute("code.function", "GetWebsiteStatus"), c.setAttribute("outsystems.function.key", "56cefcb5-f65e-4296-82bc-70df55499da4"), c.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), c.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), c.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var o = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text)
            };
            return i.callServerAction("GetWebsiteStatus", "screenservices/RESTAPIWebsocketOfficial/ActionGetWebsiteStatus", "ZQfe+zIvokmbpKUT+M3ucA", o, i.callContext(f), void 0, void 0, !1).then(function(s) {
                var u = new(i.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionGetWebsiteStatus"));
                return u.responseOut = e.DataConversion.ServerDataConverter.from(s.Response, w), u
            })
        }, function() {
            c && c.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionGetWebsiteStatus", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new w
    }, "defaultValue"),
    complexType: w
}]);
d.iDVDocumentAdd$ServerAction = function(l, a, f, i, c) {
    var o = this.controller;
    return e.Logger.startActiveSpan("IDVDocumentAdd", function(s) {
        return s && (s.setAttribute("code.function", "IDVDocumentAdd"), s.setAttribute("outsystems.function.key", "b5218152-d1fa-485e-85b7-c89ae2da1825"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var u = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Record),
                XToken: e.DataConversion.ServerDataConverter.to(i, e.DataTypes.DataTypes.Text)
            };
            return o.callServerAction("IDVDocumentAdd", "screenservices/RESTAPIWebsocketOfficial/ActionIDVDocumentAdd", "xB2Q01S8Mg0pjdHZC2hGpQ", u, o.callContext(c), void 0, void 0, !1).then(function(S) {
                var O = new(o.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionIDVDocumentAdd"));
                return O.responseOut = e.DataConversion.ServerDataConverter.from(S.Response, de), O
            })
        }, function() {
            s && s.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionIDVDocumentAdd", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new de
    }, "defaultValue"),
    complexType: de
}]);
d.loginHistory$ServerAction = function(l, a, f, i, c) {
    var o = this.controller;
    return e.Logger.startActiveSpan("LoginHistory", function(s) {
        return s && (s.setAttribute("code.function", "LoginHistory"), s.setAttribute("outsystems.function.key", "3b07dfab-bead-4591-859a-fc9788c9c7fb"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var u = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Record),
                AuthToken: e.DataConversion.ServerDataConverter.to(i, e.DataTypes.DataTypes.Text)
            };
            return o.callServerAction("LoginHistory", "screenservices/RESTAPIWebsocketOfficial/ActionLoginHistory", "Kmsu0h1YpYsVXcBcGbbJEw", u, o.callContext(c), void 0, void 0, !1).then(function(S) {
                var O = new(o.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionLoginHistory"));
                return O.responseOut = e.DataConversion.ServerDataConverter.from(S.Response, te), O
            })
        }, function() {
            s && s.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionLoginHistory", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new te
    }, "defaultValue"),
    complexType: te
}]);
d.partnerAccount$ServerAction = function(l, a, f, i) {
    var c = this.controller;
    return e.Logger.startActiveSpan("PartnerAccount", function(o) {
        return o && (o.setAttribute("code.function", "PartnerAccount"), o.setAttribute("outsystems.function.key", "4f820605-ab9f-41f9-9ac0-7be161924514"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var s = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                AuthToken: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Text)
            };
            return c.callServerAction("PartnerAccount", "screenservices/RESTAPIWebsocketOfficial/ActionPartnerAccount", "+wAUdIale3LGIFyQ1CldzA", s, c.callContext(i), void 0, void 0, !1).then(function(u) {
                var S = new(c.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPartnerAccount"));
                return S.responseOut = e.DataConversion.ServerDataConverter.from(u.Response, K), S
            })
        }, function() {
            o && o.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPartnerAccount", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new K
    }, "defaultValue"),
    complexType: K
}]);
d.postAccountList$ServerAction = function(l, a, f, i) {
    var c = this.controller;
    return e.Logger.startActiveSpan("PostAccountList", function(o) {
        return o && (o.setAttribute("code.function", "PostAccountList"), o.setAttribute("outsystems.function.key", "3cc84d5e-492a-4e65-98d6-d0d5a3c81037"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var s = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Xtoken: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Text)
            };
            return c.callServerAction("PostAccountList", "screenservices/RESTAPIWebsocketOfficial/ActionPostAccountList", "TCIJWGZ1nxGpg8j7asqDrg", s, c.callContext(i), void 0, void 0, !1).then(function(u) {
                var S = new(c.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostAccountList"));
                return S.responseOut = e.DataConversion.ServerDataConverter.from(u.Response, ye), S
            })
        }, function() {
            o && o.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostAccountList", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new ye
    }, "defaultValue"),
    complexType: ye
}]);
d.postCashierCrypto$ServerAction = function(l, a, f, i, c) {
    var o = this.controller;
    return e.Logger.startActiveSpan("PostCashierCrypto", function(s) {
        return s && (s.setAttribute("code.function", "PostCashierCrypto"), s.setAttribute("outsystems.function.key", "3eae3dd1-78ab-4d29-8608-fea61ad3ffb5"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var u = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                XToken: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(i, e.DataTypes.DataTypes.Record)
            };
            return o.callServerAction("PostCashierCrypto", "screenservices/RESTAPIWebsocketOfficial/ActionPostCashierCrypto", "i1OI5PvDX5X_W4VuCw4Tnw", u, o.callContext(c), void 0, void 0, !1).then(function(S) {
                var O = new(o.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostCashierCrypto"));
                return O.responseOut = e.DataConversion.ServerDataConverter.from(S.Response, C), O
            })
        }, function() {
            s && s.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostCashierCrypto", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new C
    }, "defaultValue"),
    complexType: C
}]);
d.postCashierFiat$ServerAction = function(l, a, f, i, c) {
    var o = this.controller;
    return e.Logger.startActiveSpan("PostCashierFiat", function(s) {
        return s && (s.setAttribute("code.function", "PostCashierFiat"), s.setAttribute("outsystems.function.key", "c01a4e81-9a04-40fb-9c3d-bd84d65bd21e"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var u = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                XToken: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(i, e.DataTypes.DataTypes.Record)
            };
            return o.callServerAction("PostCashierFiat", "screenservices/RESTAPIWebsocketOfficial/ActionPostCashierFiat", "IfK1VZS9KNQdJowcVu+T9Q", u, o.callContext(c), void 0, void 0, !1).then(function(S) {
                var O = new(o.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostCashierFiat"));
                return O.responseOut = e.DataConversion.ServerDataConverter.from(S.Response, ve), O
            })
        }, function() {
            s && s.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostCashierFiat", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new ve
    }, "defaultValue"),
    complexType: ve
}]);
d.postLogout$ServerAction = function(l, a, f, i) {
    var c = this.controller;
    return e.Logger.startActiveSpan("PostLogout", function(o) {
        return o && (o.setAttribute("code.function", "PostLogout"), o.setAttribute("outsystems.function.key", "3e20ea78-d706-47eb-8972-b68e7d0ea2b7"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var s = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Xtoken: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Text)
            };
            return c.callServerAction("PostLogout", "screenservices/RESTAPIWebsocketOfficial/ActionPostLogout", "4UL4VUJsNsIziBQRC1f2HA", s, c.callContext(i), void 0, void 0, !1).then(function(u) {
                var S = new(c.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostLogout"));
                return S.responseOut = e.DataConversion.ServerDataConverter.from(u.Response, N), S
            })
        }, function() {
            o && o.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostLogout", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new N
    }, "defaultValue"),
    complexType: N
}]);
d.postMT5NewAccount$ServerAction = function(l, a, f, i, c) {
    var o = this.controller;
    return e.Logger.startActiveSpan("PostMT5NewAccount", function(s) {
        return s && (s.setAttribute("code.function", "PostMT5NewAccount"), s.setAttribute("outsystems.function.key", "ab549bab-1f22-4b5c-8a1d-09750811b1dc"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var u = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Xtoken: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(i, e.DataTypes.DataTypes.Record)
            };
            return o.callServerAction("PostMT5NewAccount", "screenservices/RESTAPIWebsocketOfficial/ActionPostMT5NewAccount", "OIXTQInlUWWstswRuTbEig", u, o.callContext(c), void 0, void 0, !1).then(function(S) {
                var O = new(o.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostMT5NewAccount"));
                return O.responseOut = e.DataConversion.ServerDataConverter.from(S.Response, se), O
            })
        }, function() {
            s && s.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostMT5NewAccount", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new se
    }, "defaultValue"),
    complexType: se
}]);
d.postNewAccountVirtual$ServerAction = function(l, a, f, i) {
    var c = this.controller;
    return e.Logger.startActiveSpan("PostNewAccountVirtual", function(o) {
        return o && (o.setAttribute("code.function", "PostNewAccountVirtual"), o.setAttribute("outsystems.function.key", "51842f76-c323-4e2e-b4a4-38f1dc1e0842"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var s = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Record),
                Language: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Text)
            };
            return c.callServerAction("PostNewAccountVirtual", "screenservices/RESTAPIWebsocketOfficial/ActionPostNewAccountVirtual", "_+E+tx4Xw3dYS4qzEn6wZA", s, c.callContext(i), void 0, void 0, !1).then(function(u) {
                var S = new(c.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostNewAccountVirtual"));
                return S.responseOut = e.DataConversion.ServerDataConverter.from(u.Response, G), S
            })
        }, function() {
            o && o.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostNewAccountVirtual", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new G
    }, "defaultValue"),
    complexType: G
}]);
d.postNotificationEvents$ServerAction = function(l, a, f, i, c) {
    var o = this.controller;
    return e.Logger.startActiveSpan("PostNotificationEvents", function(s) {
        return s && (s.setAttribute("code.function", "PostNotificationEvents"), s.setAttribute("outsystems.function.key", "dd9f25b1-5da1-4be0-be96-ac2f1369d587"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var u = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Record),
                XToken: e.DataConversion.ServerDataConverter.to(i, e.DataTypes.DataTypes.Text)
            };
            return o.callServerAction("PostNotificationEvents", "screenservices/RESTAPIWebsocketOfficial/ActionPostNotificationEvents", "uNwQ1n+mLUgH6AQmHXqPzg", u, o.callContext(c), void 0, void 0, !1).then(function(S) {
                var O = new(o.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostNotificationEvents"));
                return O.responseOut = e.DataConversion.ServerDataConverter.from(S.Response, ne), O
            })
        }, function() {
            s && s.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostNotificationEvents", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new ne
    }, "defaultValue"),
    complexType: ne
}]);
d.postP2pAdvertCreate$ServerAction = function(l, a, f, i) {
    var c = this.controller;
    return e.Logger.startActiveSpan("PostP2pAdvertCreate", function(o) {
        return o && (o.setAttribute("code.function", "PostP2pAdvertCreate"), o.setAttribute("outsystems.function.key", "7e56cb3d-edb0-4759-9689-1d38c1e47373"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var s = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Record)
            };
            return c.callServerAction("PostP2pAdvertCreate", "screenservices/RESTAPIWebsocketOfficial/ActionPostP2pAdvertCreate", "L0hikLYWauA5hh22X+fRsg", s, c.callContext(i), void 0, void 0, !1).then(function(u) {
                var S = new(c.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pAdvertCreate"));
                return S.responseOut = e.DataConversion.ServerDataConverter.from(u.Response, F), S
            })
        }, function() {
            o && o.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pAdvertCreate", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new F
    }, "defaultValue"),
    complexType: F
}]);
d.postP2pAdvertiserCreate$ServerAction = function(l, a, f, i) {
    var c = this.controller;
    return e.Logger.startActiveSpan("PostP2pAdvertiserCreate", function(o) {
        return o && (o.setAttribute("code.function", "PostP2pAdvertiserCreate"), o.setAttribute("outsystems.function.key", "8276f352-ed73-4ef0-9a6a-bf5c5b6c8cc5"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var s = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Record)
            };
            return c.callServerAction("PostP2pAdvertiserCreate", "screenservices/RESTAPIWebsocketOfficial/ActionPostP2pAdvertiserCreate", "OQes5yIRHCqo8JbEQQPX0g", s, c.callContext(i), void 0, void 0, !1).then(function(u) {
                var S = new(c.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pAdvertiserCreate"));
                return S.responseOut = e.DataConversion.ServerDataConverter.from(u.Response, Oe), S
            })
        }, function() {
            o && o.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pAdvertiserCreate", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Oe
    }, "defaultValue"),
    complexType: Oe
}]);
d.postP2pAdvertiserPaymentMethods$ServerAction = function(l, a, f) {
    var i = this.controller;
    return e.Logger.startActiveSpan("PostP2pAdvertiserPaymentMethods", function(c) {
        return c && (c.setAttribute("code.function", "PostP2pAdvertiserPaymentMethods"), c.setAttribute("outsystems.function.key", "77a2a90e-503b-4f08-81c2-0255cb842be4"), c.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), c.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), c.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var o = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text)
            };
            return i.callServerAction("PostP2pAdvertiserPaymentMethods", "screenservices/RESTAPIWebsocketOfficial/ActionPostP2pAdvertiserPaymentMethods", "D8MyO_q6wdc2e05Z7yaa3Q", o, i.callContext(f), void 0, void 0, !1).then(function(s) {
                var u = new(i.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pAdvertiserPaymentMethods"));
                return u.responseOut = e.DataConversion.ServerDataConverter.from(s.Response, xe), u
            })
        }, function() {
            c && c.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pAdvertiserPaymentMethods", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new xe
    }, "defaultValue"),
    complexType: xe
}]);
d.postP2pAdvertiserRelations$ServerAction = function(l, a, f, i) {
    var c = this.controller;
    return e.Logger.startActiveSpan("PostP2pAdvertiserRelations", function(o) {
        return o && (o.setAttribute("code.function", "PostP2pAdvertiserRelations"), o.setAttribute("outsystems.function.key", "06d70b96-e543-4b8b-a310-4a921aadb630"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var s = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Record)
            };
            return c.callServerAction("PostP2pAdvertiserRelations", "screenservices/RESTAPIWebsocketOfficial/ActionPostP2pAdvertiserRelations", "BeZSyT54pBGW2WZ29iZa2A", s, c.callContext(i), void 0, void 0, !1).then(function(u) {
                var S = new(c.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pAdvertiserRelations"));
                return S.responseOut = e.DataConversion.ServerDataConverter.from(u.Response, ce), S
            })
        }, function() {
            o && o.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pAdvertiserRelations", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new ce
    }, "defaultValue"),
    complexType: ce
}]);
d.postP2pAdvertiserUpdate$ServerAction = function(l, a, f, i) {
    var c = this.controller;
    return e.Logger.startActiveSpan("PostP2pAdvertiserUpdate", function(o) {
        return o && (o.setAttribute("code.function", "PostP2pAdvertiserUpdate"), o.setAttribute("outsystems.function.key", "121f02bd-8de0-4ab8-b2fa-e567c73ee7d2"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var s = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Record)
            };
            return c.callServerAction("PostP2pAdvertiserUpdate", "screenservices/RESTAPIWebsocketOfficial/ActionPostP2pAdvertiserUpdate", "ATUmsGWyJljxAxY_kWUpbg", s, c.callContext(i), void 0, void 0, !1).then(function(u) {
                var S = new(c.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pAdvertiserUpdate"));
                return S.responseOut = e.DataConversion.ServerDataConverter.from(u.Response, fe), S
            })
        }, function() {
            o && o.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pAdvertiserUpdate", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new fe
    }, "defaultValue"),
    complexType: fe
}]);
d.postP2pAdvertUpdate$ServerAction = function(l, a, f, i) {
    var c = this.controller;
    return e.Logger.startActiveSpan("PostP2pAdvertUpdate", function(o) {
        return o && (o.setAttribute("code.function", "PostP2pAdvertUpdate"), o.setAttribute("outsystems.function.key", "f3100a8f-ebae-48f9-a062-63a0c583cc1b"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var s = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Record)
            };
            return c.callServerAction("PostP2pAdvertUpdate", "screenservices/RESTAPIWebsocketOfficial/ActionPostP2pAdvertUpdate", "m_vr48T_+d58BdvtedqJ3g", s, c.callContext(i), void 0, void 0, !1).then(function(u) {
                var S = new(c.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pAdvertUpdate"));
                return S.responseOut = e.DataConversion.ServerDataConverter.from(u.Response, ae), S
            })
        }, function() {
            o && o.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pAdvertUpdate", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new ae
    }, "defaultValue"),
    complexType: ae
}]);
d.postP2pChatCreate$ServerAction = function(l, a, f, i) {
    var c = this.controller;
    return e.Logger.startActiveSpan("PostP2pChatCreate", function(o) {
        return o && (o.setAttribute("code.function", "PostP2pChatCreate"), o.setAttribute("outsystems.function.key", "f0098f00-25d2-469f-bbfe-0650eb21d57b"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var s = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Record)
            };
            return c.callServerAction("PostP2pChatCreate", "screenservices/RESTAPIWebsocketOfficial/ActionPostP2pChatCreate", "TSZV7UMoXdi8uePOTJKOUg", s, c.callContext(i), void 0, void 0, !1).then(function(u) {
                var S = new(c.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pChatCreate"));
                return S.responseOut = e.DataConversion.ServerDataConverter.from(u.Response, Y), S
            })
        }, function() {
            o && o.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pChatCreate", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Y
    }, "defaultValue"),
    complexType: Y
}]);
d.postP2pOrderCancel$ServerAction = function(l, a, f, i) {
    var c = this.controller;
    return e.Logger.startActiveSpan("PostP2pOrderCancel", function(o) {
        return o && (o.setAttribute("code.function", "PostP2pOrderCancel"), o.setAttribute("outsystems.function.key", "83c1a2df-37c0-4285-978a-3eafc92004ce"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var s = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Record)
            };
            return c.callServerAction("PostP2pOrderCancel", "screenservices/RESTAPIWebsocketOfficial/ActionPostP2pOrderCancel", "FzKfPHaHaKIZKd1oOfKbfg", s, c.callContext(i), void 0, void 0, !1).then(function(u) {
                var S = new(c.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pOrderCancel"));
                return S.responseOut = e.DataConversion.ServerDataConverter.from(u.Response, oe), S
            })
        }, function() {
            o && o.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pOrderCancel", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new oe
    }, "defaultValue"),
    complexType: oe
}]);
d.postP2pOrderConfirm$ServerAction = function(l, a, f, i) {
    var c = this.controller;
    return e.Logger.startActiveSpan("PostP2pOrderConfirm", function(o) {
        return o && (o.setAttribute("code.function", "PostP2pOrderConfirm"), o.setAttribute("outsystems.function.key", "de151021-7c9b-49ef-a50e-bdc95c7ccbf6"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var s = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Record)
            };
            return c.callServerAction("PostP2pOrderConfirm", "screenservices/RESTAPIWebsocketOfficial/ActionPostP2pOrderConfirm", "zpwS5K3hSazbMyaqwLEOhg", s, c.callContext(i), void 0, void 0, !1).then(function(u) {
                var S = new(c.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pOrderConfirm"));
                return S.responseOut = e.DataConversion.ServerDataConverter.from(u.Response, X), S
            })
        }, function() {
            o && o.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pOrderConfirm", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new X
    }, "defaultValue"),
    complexType: X
}]);
d.postP2pOrderCreate$ServerAction = function(l, a, f, i) {
    var c = this.controller;
    return e.Logger.startActiveSpan("PostP2pOrderCreate", function(o) {
        return o && (o.setAttribute("code.function", "PostP2pOrderCreate"), o.setAttribute("outsystems.function.key", "f11f6472-594f-4b59-9174-c7a93c688779"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var s = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Record)
            };
            return c.callServerAction("PostP2pOrderCreate", "screenservices/RESTAPIWebsocketOfficial/ActionPostP2pOrderCreate", "IZwbNNzDsQb5z9mSHsFCvA", s, c.callContext(i), void 0, void 0, !1).then(function(u) {
                var S = new(c.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pOrderCreate"));
                return S.responseOut = e.DataConversion.ServerDataConverter.from(u.Response, M), S
            })
        }, function() {
            o && o.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pOrderCreate", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new M
    }, "defaultValue"),
    complexType: M
}]);
d.postP2pOrderDispute$ServerAction = function(l, a, f, i) {
    var c = this.controller;
    return e.Logger.startActiveSpan("PostP2pOrderDispute", function(o) {
        return o && (o.setAttribute("code.function", "PostP2pOrderDispute"), o.setAttribute("outsystems.function.key", "c439aff0-123f-48ee-b093-f1e3581c76f1"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var s = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Record)
            };
            return c.callServerAction("PostP2pOrderDispute", "screenservices/RESTAPIWebsocketOfficial/ActionPostP2pOrderDispute", "qOIbNrVJSSIe+74v5WvHEg", s, c.callContext(i), void 0, void 0, !1).then(function(u) {
                var S = new(c.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pOrderDispute"));
                return S.responseOut = e.DataConversion.ServerDataConverter.from(u.Response, L), S
            })
        }, function() {
            o && o.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pOrderDispute", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new L
    }, "defaultValue"),
    complexType: L
}]);
d.postP2pOrderReview$ServerAction = function(l, a, f, i) {
    var c = this.controller;
    return e.Logger.startActiveSpan("PostP2pOrderReview", function(o) {
        return o && (o.setAttribute("code.function", "PostP2pOrderReview"), o.setAttribute("outsystems.function.key", "61c12d6f-3077-4b4e-8b9e-3aa8fbbfa3db"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var s = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Record)
            };
            return c.callServerAction("PostP2pOrderReview", "screenservices/RESTAPIWebsocketOfficial/ActionPostP2pOrderReview", "XZluhgvNP6Oy82Ob5Q0aQQ", s, c.callContext(i), void 0, void 0, !1).then(function(u) {
                var S = new(c.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pOrderReview"));
                return S.responseOut = e.DataConversion.ServerDataConverter.from(u.Response, pe), S
            })
        }, function() {
            o && o.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostP2pOrderReview", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new pe
    }, "defaultValue"),
    complexType: pe
}]);
d.postResetPassword$ServerAction = function(l, a, f, i) {
    var c = this.controller;
    return e.Logger.startActiveSpan("PostResetPassword", function(o) {
        return o && (o.setAttribute("code.function", "PostResetPassword"), o.setAttribute("outsystems.function.key", "c22736a7-1e6e-49bd-bfbf-bf68e02c715f"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var s = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Record)
            };
            return c.callServerAction("PostResetPassword", "screenservices/RESTAPIWebsocketOfficial/ActionPostResetPassword", "C3k2N5ff4XWdwN0wMsB0EA", s, c.callContext(i), void 0, void 0, !1).then(function(u) {
                var S = new(c.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostResetPassword"));
                return S.responseOut = e.DataConversion.ServerDataConverter.from(u.Response, _), S
            })
        }, function() {
            o && o.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostResetPassword", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new _
    }, "defaultValue"),
    complexType: _
}]);
d.postSetSettings$ServerAction = function(l, a, f, i, c) {
    var o = this.controller;
    return e.Logger.startActiveSpan("PostSetSettings", function(s) {
        return s && (s.setAttribute("code.function", "PostSetSettings"), s.setAttribute("outsystems.function.key", "3c1776c3-2ae3-412b-b542-35d09cadec3f"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var u = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Record),
                XToken: e.DataConversion.ServerDataConverter.to(i, e.DataTypes.DataTypes.Text)
            };
            return o.callServerAction("PostSetSettings", "screenservices/RESTAPIWebsocketOfficial/ActionPostSetSettings", "kEP8m8h+07AxT883E99RsQ", u, o.callContext(c), void 0, void 0, !1).then(function(S) {
                var O = new(o.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostSetSettings"));
                return O.responseOut = e.DataConversion.ServerDataConverter.from(S.Response, Te), O
            })
        }, function() {
            s && s.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostSetSettings", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Te
    }, "defaultValue"),
    complexType: Te
}]);
d.postTradingPlatformAccounts$ServerAction = function(l, a, f, i, c, o) {
    var s = this.controller;
    return e.Logger.startActiveSpan("PostTradingPlatformAccounts", function(u) {
        return u && (u.setAttribute("code.function", "PostTradingPlatformAccounts"), u.setAttribute("outsystems.function.key", "f45a72fc-b40f-4e92-a802-e485ce1f7330"), u.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), u.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), u.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var S = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Record),
                Xtoken: e.DataConversion.ServerDataConverter.to(i, e.DataTypes.DataTypes.Text),
                ContentType: e.DataConversion.ServerDataConverter.to(c, e.DataTypes.DataTypes.Text)
            };
            return s.callServerAction("PostTradingPlatformAccounts", "screenservices/RESTAPIWebsocketOfficial/ActionPostTradingPlatformAccounts", "egJtt89otOwIcBjYp5oSdw", S, s.callContext(o), void 0, void 0, !1).then(function(O) {
                var v = new(s.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostTradingPlatformAccounts"));
                return v.responseOut = e.DataConversion.ServerDataConverter.from(O.Response, qe), v
            })
        }, function() {
            u && u.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostTradingPlatformAccounts", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new qe
    }, "defaultValue"),
    complexType: qe
}]);
d.postTradingPlatformAvailableAccountsCtrader$ServerAction = function(l, a, f, i, c) {
    var o = this.controller;
    return e.Logger.startActiveSpan("PostTradingPlatformAvailableAccountsCtrader", function(s) {
        return s && (s.setAttribute("code.function", "PostTradingPlatformAvailableAccountsCtrader"), s.setAttribute("outsystems.function.key", "90147649-4680-4e2b-82ab-e3f49fe031db"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var u = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Xtoken: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(i, e.DataTypes.DataTypes.Record)
            };
            return o.callServerAction("PostTradingPlatformAvailableAccountsCtrader", "screenservices/RESTAPIWebsocketOfficial/ActionPostTradingPlatformAvailableAccountsCtrader", "Wr29UWZ_9GPr9+NHvasNeQ", u, o.callContext(c), void 0, void 0, !1).then(function(S) {
                var O = new(o.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostTradingPlatformAvailableAccountsCtrader"));
                return O.responseOut = e.DataConversion.ServerDataConverter.from(S.Response, P), O
            })
        }, function() {
            s && s.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostTradingPlatformAvailableAccountsCtrader", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new P
    }, "defaultValue"),
    complexType: P
}]);
d.postTradingPlatformAvailableAccountsMt5$ServerAction = function(l, a, f, i, c) {
    var o = this.controller;
    return e.Logger.startActiveSpan("PostTradingPlatformAvailableAccountsMt5", function(s) {
        return s && (s.setAttribute("code.function", "PostTradingPlatformAvailableAccountsMt5"), s.setAttribute("outsystems.function.key", "cc39bb68-b9ab-4d98-8f3b-f953e5865894"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var u = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Xtoken: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(i, e.DataTypes.DataTypes.Record)
            };
            return o.callServerAction("PostTradingPlatformAvailableAccountsMt5", "screenservices/RESTAPIWebsocketOfficial/ActionPostTradingPlatformAvailableAccountsMt5", "y0BK6FVI9T0Zpc1SJeBH7A", u, o.callContext(c), void 0, void 0, !1).then(function(S) {
                var O = new(o.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostTradingPlatformAvailableAccountsMt5"));
                return O.responseOut = e.DataConversion.ServerDataConverter.from(S.Response, x), O
            })
        }, function() {
            s && s.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostTradingPlatformAvailableAccountsMt5", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new x
    }, "defaultValue"),
    complexType: x
}]);
d.postTradingPlatformPasswordChange$ServerAction = function(l, a, f, i, c, o) {
    var s = this.controller;
    return e.Logger.startActiveSpan("PostTradingPlatformPasswordChange", function(u) {
        return u && (u.setAttribute("code.function", "PostTradingPlatformPasswordChange"), u.setAttribute("outsystems.function.key", "025eb13d-dcd9-42bc-b20a-926aa7ca3a63"), u.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), u.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), u.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var S = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Xtoken: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(i, e.DataTypes.DataTypes.Record),
                ContentType: e.DataConversion.ServerDataConverter.to(c, e.DataTypes.DataTypes.Text)
            };
            return s.callServerAction("PostTradingPlatformPasswordChange", "screenservices/RESTAPIWebsocketOfficial/ActionPostTradingPlatformPasswordChange", "Dka7dZ7u_CQXm4irGtaVlQ", S, s.callContext(o), void 0, void 0, !1).then(function(O) {
                var v = new(s.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostTradingPlatformPasswordChange"));
                return v.responseOut = e.DataConversion.ServerDataConverter.from(O.Response, ue), v
            })
        }, function() {
            u && u.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostTradingPlatformPasswordChange", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new ue
    }, "defaultValue"),
    complexType: ue
}]);
d.postTradingPlatformPasswordReset$ServerAction = function(l, a, f, i) {
    var c = this.controller;
    return e.Logger.startActiveSpan("PostTradingPlatformPasswordReset", function(o) {
        return o && (o.setAttribute("code.function", "PostTradingPlatformPasswordReset"), o.setAttribute("outsystems.function.key", "5656afeb-9c6d-4d21-ab74-2ca3acee0362"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var s = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Record)
            };
            return c.callServerAction("PostTradingPlatformPasswordReset", "screenservices/RESTAPIWebsocketOfficial/ActionPostTradingPlatformPasswordReset", "0evXY6ViyzwtVDH2+g2xyQ", s, c.callContext(i), void 0, void 0, !1).then(function(u) {
                var S = new(c.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostTradingPlatformPasswordReset"));
                return S.responseOut = e.DataConversion.ServerDataConverter.from(u.Response, le), S
            })
        }, function() {
            o && o.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostTradingPlatformPasswordReset", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new le
    }, "defaultValue"),
    complexType: le
}]);
d.postVerifyEmail$ServerAction = function(l, a, f, i) {
    var c = this.controller;
    return e.Logger.startActiveSpan("PostVerifyEmail", function(o) {
        return o && (o.setAttribute("code.function", "PostVerifyEmail"), o.setAttribute("outsystems.function.key", "415b5de1-68fd-4d46-b7b1-6e83ec77e4e9"), o.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), o.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var s = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Record)
            };
            return c.callServerAction("PostVerifyEmail", "screenservices/RESTAPIWebsocketOfficial/ActionPostVerifyEmail", "anV42cLGQHo8B+8aNPmjvg", s, c.callContext(i), void 0, void 0, !1).then(function(u) {
                var S = new(c.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionPostVerifyEmail"));
                return S.responseOut = e.DataConversion.ServerDataConverter.from(u.Response, R), S
            })
        }, function() {
            o && o.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionPostVerifyEmail", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new R
    }, "defaultValue"),
    complexType: R
}]);
d.tradingAssessment$ServerAction = function(l, a, f, i, c) {
    var o = this.controller;
    return e.Logger.startActiveSpan("TradingAssessment", function(s) {
        return s && (s.setAttribute("code.function", "TradingAssessment"), s.setAttribute("outsystems.function.key", "df4a128f-0958-4339-b27a-2a16660d2c23"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var u = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Record),
                AuthToken: e.DataConversion.ServerDataConverter.to(i, e.DataTypes.DataTypes.Text)
            };
            return o.callServerAction("TradingAssessment", "screenservices/RESTAPIWebsocketOfficial/ActionTradingAssessment", "SiB4DqttMupNNqQKPtz0SA", u, o.callContext(c), void 0, void 0, !1).then(function(S) {
                var O = new(o.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionTradingAssessment"));
                return O.responseOut = e.DataConversion.ServerDataConverter.from(S.Response, be), O
            })
        }, function() {
            s && s.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionTradingAssessment", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new be
    }, "defaultValue"),
    complexType: be
}]);
d.uploadDocument$ServerAction = function(l, a, f, i, c) {
    var o = this.controller;
    return e.Logger.startActiveSpan("UploadDocument", function(s) {
        return s && (s.setAttribute("code.function", "UploadDocument"), s.setAttribute("outsystems.function.key", "b5d0a4ce-8ba6-44e1-b60a-036ce7bb4242"), s.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocketOfficial"), s.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"), s.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
            var u = {
                AppId: e.DataConversion.ServerDataConverter.to(l, e.DataTypes.DataTypes.Text),
                Language: e.DataConversion.ServerDataConverter.to(a, e.DataTypes.DataTypes.Text),
                Request: e.DataConversion.ServerDataConverter.to(f, e.DataTypes.DataTypes.Record),
                XToken: e.DataConversion.ServerDataConverter.to(i, e.DataTypes.DataTypes.Text)
            };
            return o.callServerAction("UploadDocument", "screenservices/RESTAPIWebsocketOfficial/ActionUploadDocument", "HgwdFwbtpuTHfxCtnlVsnQ", u, o.callContext(c), void 0, void 0, !1).then(function(S) {
                var O = new(o.constructor.getVariableGroupType("RESTAPIWebsocketOfficial$ActionUploadDocument"));
                return O.responseOut = e.DataConversion.ServerDataConverter.from(S.Response, B), O
            })
        }, function() {
            s && s.end()
        })
    }, 0)
};
d.constructor.registerVariableGroupType("RESTAPIWebsocketOfficial$ActionUploadDocument", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new B
    }, "defaultValue"),
    complexType: B
}]);
var nIe = d;
export {
    nIe as a
};