import {
    a as de,
    b as ce
} from "./_oschunk-LLB25ACX.js";
import {
    a as se,
    h as f,
    i as X,
    p as le,
    q as Y,
    t as x,
    v as k,
    x as z
} from "./_oschunk-O5KC3WOL.js";
import {
    a as J,
    g as R,
    m as P,
    o as H,
    q as T,
    r as L,
    s as I,
    t as V
} from "./_oschunk-NVHFAAS2.js";
import {
    a as O
} from "./_oschunk-AW35UT34.js";
import {
    Ga as C,
    Ha as E,
    Ka as w,
    a as Fe
} from "./_oschunk-WCMQG33O.js";
import {
    J as ke,
    X as h,
    c as o,
    f as Z,
    i as M,
    n as Ie,
    o as Ve,
    q as $,
    x as j
} from "./_oschunk-DFKJJKI4.js";
var G = h,
    he = class he extends G.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(G.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(he, "VariablesRecord");
var Q = he;
Q.init();
var fe = class fe extends G.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(fe, "WidgetsRecord");
var ue = fe,
    ve = class ve extends G.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return Q
        }
        static getWidgetsRecordConstructor() {
            return ue
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(a) {}
    };
o(ve, "Model");
var ee = ve;
ee._hasValidationWidgetsValue = void 0;
var xe = new G.Model.ModelFactory(ee);
var B = h,
    be = class be extends B.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(B.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(be, "VariablesRecord");
var te = be;
te.init();
var Ee = class Ee extends B.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(Ee, "WidgetsRecord");
var _e = Ee,
    ge = class ge extends B.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return te
        }
        static getWidgetsRecordConstructor() {
            return _e
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(a) {}
    };
o(ge, "Model");
var ne = ge;
ne._hasValidationWidgetsValue = void 0;
var De = new B.Model.ModelFactory(ne);
var S = h,
    Ae = class Ae extends S.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("HasFixedHeader", "hasFixedHeaderIn", "HasFixedHeader", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasFixedHeaderInDataFetchStatus", "_hasFixedHeaderInDataFetchStatus", "_hasFixedHeaderInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("EnableAccessibilityFeatures", "enableAccessibilityFeaturesIn", "EnableAccessibilityFeatures", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, S.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(S.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(Ae, "VariablesRecord");
var re = Ae;
re.init();
var Se = class Se extends S.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(Se, "WidgetsRecord");
var Re = Se,
    D = class D extends S.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return re
        }
        static getWidgetsRecordConstructor() {
            return Re
        }
        static get hasValidationWidgets() {
            return D._hasValidationWidgetsValue === void 0 && (D._hasValidationWidgetsValue = void 0 || void 0 || void 0), D._hasValidationWidgetsValue
        }
        setInputs(a) {
            "HasFixedHeader" in a && (this.variables.hasFixedHeaderIn = a.HasFixedHeader, "_hasFixedHeaderInDataFetchStatus" in a && (this.variables._hasFixedHeaderInDataFetchStatus = a._hasFixedHeaderInDataFetchStatus)), "EnableAccessibilityFeatures" in a && (this.variables.enableAccessibilityFeaturesIn = a.EnableAccessibilityFeatures, "_enableAccessibilityFeaturesInDataFetchStatus" in a && (this.variables._enableAccessibilityFeaturesInDataFetchStatus = a._enableAccessibilityFeaturesInDataFetchStatus)), "ExtendedClass" in a && (this.variables.extendedClassIn = a.ExtendedClass, "_extendedClassInDataFetchStatus" in a && (this.variables._extendedClassInDataFetchStatus = a._extendedClassInDataFetchStatus))
        }
    };
o(D, "Model");
var ae = D;
ae._hasValidationWidgetsValue = void 0;
var Ne = new S.Model.ModelFactory(ae);
var K = h,
    Ce = class Ce extends K.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(K.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(Ce, "VariablesRecord");
var oe = Ce;
oe.init();
var we = class we extends K.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(we, "WidgetsRecord");
var pe = we,
    W = class W extends K.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return oe
        }
        static getWidgetsRecordConstructor() {
            return pe
        }
        static get hasValidationWidgets() {
            return W._hasValidationWidgetsValue === void 0 && (W._hasValidationWidgetsValue = void 0), W._hasValidationWidgetsValue
        }
        setInputs(a) {}
    };
o(W, "Model");
var ie = W;
ie._hasValidationWidgetsValue = void 0;
var Me = new K.Model.ModelFactory(ie);
var m = Z(J());
var et = {
        "mjrohuRrREqdE8Am2dRAOw#Value": "\u062A\u062E\u0637\u0649 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 (\u0627\u0636\u063A\u0637 Enter)"
    },
    tt = {
        "mjrohuRrREqdE8Am2dRAOw#Value": "\u09AC\u09BF\u09B7\u09AF\u09BC\u09AC\u09B8\u09CD\u09A4\u09C1\u09A4\u09C7 \u09B8\u09CD\u0995\u09BF\u09AA \u0995\u09B0\u09C1\u09A8 (Enter \u099A\u09BE\u09AA\u09C1\u09A8)"
    },
    nt = {
        "mjrohuRrREqdE8Am2dRAOw#Value": "Zum Inhalt \xFCberspringen (Enter dr\xFCcken)"
    },
    rt = {
        "mjrohuRrREqdE8Am2dRAOw#Value": "Saltar al contenido (Pulse Enter)"
    },
    at = {
        "mjrohuRrREqdE8Am2dRAOw#Value": "Passer au contenu (Appuyez sur Entr\xE9e)"
    },
    ot = {
        "mjrohuRrREqdE8Am2dRAOw#Value": "Salta al contenuto (Premi Invio)"
    },
    it = {
        "mjrohuRrREqdE8Am2dRAOw#Value": "\u179A\u17C6\u179B\u1784\u1791\u17C5\u1798\u17B6\u178F\u17B7\u1780\u17B6 (\u1785\u17BB\u1785 Enter)"
    },
    st = {
        "mjrohuRrREqdE8Am2dRAOw#Value": "\uCF58\uD150\uCE20\uB85C \uAC74\uB108\uB6F0\uAE30 (Enter \uB204\uB974\uAE30)"
    },
    lt = {
        "mjrohuRrREqdE8Am2dRAOw#Value": "\u0410\u0433\u0443\u0443\u043B\u0433\u0430 \u0440\u0443\u0443 \u0448\u0438\u043B\u0436\u0438\u0445 (Enter \u0434\u044D\u044D\u0440 \u0434\u0430\u0440\u043D\u0430 \u0443\u0443)"
    },
    dt = {
        "mjrohuRrREqdE8Am2dRAOw#Value": "Pomi\u0144 do tre\u015Bci (Naci\u015Bnij Enter)"
    },
    ct = {
        "mjrohuRrREqdE8Am2dRAOw#Value": "Pular para o conte\xFAdo (Pressione Enter)"
    },
    ut = {
        "mjrohuRrREqdE8Am2dRAOw#Value": "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u043C\u0443 (\u043D\u0430\u0436\u043C\u0438\u0442\u0435 Enter)"
    },
    mt = {
        "mjrohuRrREqdE8Am2dRAOw#Value": "\u0D85\u0DB1\u0DCA\u0DAD\u0DBB\u0DCA\u0D9C\u0DAD\u0DBA\u0DA7 \u0DBA\u0DB1\u0DCA\u0DB1 (Enter \u0D94\u0DB6\u0DB1\u0DCA\u0DB1)"
    },
    ht = {
        "mjrohuRrREqdE8Am2dRAOw#Value": "Ruka kwa Yaliyomo (Bonyeza Enter)"
    },
    ft = {
        "mjrohuRrREqdE8Am2dRAOw#Value": "\u0B89\u0BB3\u0BCD\u0BB3\u0B9F\u0B95\u0BCD\u0B95\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BA4\u0BBE\u0BA9\u0BCD\u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BB5\u0BC1\u0BAE\u0BCD (Enter \u0B85\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BB5\u0BC1\u0BAE\u0BCD)"
    },
    vt = {
        "mjrohuRrREqdE8Am2dRAOw#Value": "\u0E02\u0E49\u0E32\u0E21\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32 (\u0E01\u0E14 Enter)"
    },
    _t = {
        "mjrohuRrREqdE8Am2dRAOw#Value": "\u0130\xE7eri\u011Fe atla (Enter'a bas\u0131n)"
    },
    yt = {
        "mjrohuRrREqdE8Am2dRAOw#Value": "Kontentga o'tish (Enter bosing)"
    },
    bt = {
        "mjrohuRrREqdE8Am2dRAOw#Value": "Kontentga o'tish (Enter bosing)"
    },
    Et = {
        "mjrohuRrREqdE8Am2dRAOw#Value": "B\u1ECF qua n\u1ED9i dung (Nh\u1EA5n Enter)"
    },
    gt = {
        "mjrohuRrREqdE8Am2dRAOw#Value": "\u8DF3\u8F6C\u5230\u5185\u5BB9\uFF08\u6309 Enter\uFF09"
    },
    Rt = {
        "mjrohuRrREqdE8Am2dRAOw#Value": "\u8DF3\u8F49\u81F3\u5167\u5BB9\uFF08\u6309 Enter\uFF09"
    },
    $e = {
        "ar-001": {
            translations: et,
            isRTL: !0
        },
        "bn-BD": {
            translations: tt,
            isRTL: !1
        },
        "de-DE": {
            translations: nt,
            isRTL: !1
        },
        "es-ES": {
            translations: rt,
            isRTL: !1
        },
        "fr-FR": {
            translations: at,
            isRTL: !1
        },
        "it-IT": {
            translations: ot,
            isRTL: !1
        },
        "km-KH": {
            translations: it,
            isRTL: !1
        },
        "ko-KR": {
            translations: st,
            isRTL: !1
        },
        "mn-MN": {
            translations: lt,
            isRTL: !1
        },
        "pl-PL": {
            translations: dt,
            isRTL: !1
        },
        "pt-PT": {
            translations: ct,
            isRTL: !1
        },
        "ru-RU": {
            translations: ut,
            isRTL: !1
        },
        "si-LK": {
            translations: mt,
            isRTL: !1
        },
        "sw-KE": {
            translations: ht,
            isRTL: !1
        },
        "ta-IN": {
            translations: ft,
            isRTL: !1
        },
        "th-TH": {
            translations: vt,
            isRTL: !1
        },
        "tr-TR": {
            translations: _t,
            isRTL: !1
        },
        "uz-Latn-UZ": {
            translations: yt,
            isRTL: !1
        },
        "uz-UZ": {
            translations: bt,
            isRTL: !1
        },
        "vi-VN": {
            translations: Et,
            isRTL: !1
        },
        "zh-CN": {
            translations: gt,
            isRTL: !1
        },
        "zh-TW": {
            translations: Rt,
            isRTL: !1
        }
    };
var g = h; {
    let a = class a extends g.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, $e);
            var l = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _skipToContentOnClick$Action() {
            return this.hasOwnProperty("__skipToContentOnClick$Action") || (this.__skipToContentOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    l = this.idService;
                return g.Logger.startActiveSpan("SkipToContentOnClick", function(r) {
                    r && (r.setAttribute("code.function", "SkipToContentOnClick"), r.setAttribute("outsystems.function.key", "d3358d97-637f-414b-8164-7a1fd218a5a6"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("SkipToContentOnClick"), e = t.callContext(e);
                        var v = new g.DataTypes.VariableHolder;
                        v.value = C.skipToContent$Action(l.getId("MainContentWrapper"), e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__skipToContentOnClick$Action
        }
        set _skipToContentOnClick$Action(e) {
            this.__skipToContentOnClick$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    l = this.idService;
                return g.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "eea22139-79bd-48cd-8097-602c3071963b"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), g.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var v = new g.DataTypes.VariableHolder;
                        return g.Flow.executeAsyncFlow(function() {
                            return n.flush(), C.layoutReady$Action(e).then(function() {
                                v.value = C.setLang$Action("", e)
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    l = this.idService;
                return g.Logger.startActiveSpan("OnDestroy", function(r) {
                    r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "fccada4a-9eda-4de6-ab35-2a6a8582a236"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), C.layoutDestroy$Action(e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        skipToContentOnClick$Action(e) {
            var n = this.controller;
            return g.Logger.startActiveSpan("SkipToContentOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "SkipToContentOnClick"), t.setAttribute("outsystems.function.key", "d3358d97-637f-414b-8164-7a1fd218a5a6"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._skipToContentOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return g.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "eea22139-79bd-48cd-8097-602c3071963b"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), g.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onDestroy$Action(e) {
            var n = this.controller;
            return g.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "fccada4a-9eda-4de6-ab35-2a6a8582a236"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    l = this.idService;
                return n.onReady$Action(e)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(e) {
            this._onReadyEventHandler = e
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(e) {
            this._onRenderEventHandler = e
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    l = this.idService;
                return n.onDestroy$Action(e)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(e) {
            this._onParametersChangedEventHandler = e
        }
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(e) {
            this._onSyncStartEventHandler = e
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(e) {
            this._onSyncCompleteEventHandler = e
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(e) {
            this._onSyncErrorEventHandler = e
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return controller.handleError(e)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return w.defaultTimeout
        }
    };
    o(a, "ControllerInner");
    let s = a;
    je = s
}
var je, ze = new g.Controller.ControllerFactory(je, O);
var N = Z(J());
var St = {
        "mVd_z8GJI0e1Xo8+sk4hsw#Value.1915663098.1": "({{0}}) \u062B\u0627\u0646\u064A\u0629"
    },
    Ge = {
        "ar-001": {
            translations: St,
            isRTL: !0
        }
    };
var b = h; {
    let a = class a extends b.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, Ge);
            var l = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    l = this.idService;
                return b.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "4f2b7015-1940-48bb-959d-b100250e3f20"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), b.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var v = new b.DataTypes.VariableHolder;
                        return b.Flow.executeAsyncFlow(function() {
                            return n.flush(), C.setMenuIconListeners$Action(e).then(function(y) {
                                v.value = y
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onClick$Action() {
            return this.hasOwnProperty("__onClick$Action") || (this.__onClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    l = this.idService;
                return b.Logger.startActiveSpan("OnClick", function(r) {
                    return r && (r.setAttribute("code.function", "OnClick"), r.setAttribute("outsystems.function.key", "f374e41d-b8b1-43e6-9e4c-97174295b7b0"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), b.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnClick"), e = t.callContext(e);
                        var v = new b.DataTypes.VariableHolder;
                        return b.Flow.executeAsyncFlow(function() {
                            return n.flush(), C.toggleSideMenu$Action(e).then(function(y) {
                                v.value = y
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onClick$Action
        }
        set _onClick$Action(e) {
            this.__onClick$Action = e
        }
        onReady$Action(e) {
            var n = this.controller;
            return b.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "4f2b7015-1940-48bb-959d-b100250e3f20"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), b.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onClick$Action(e) {
            var n = this.controller;
            return b.Logger.startActiveSpan("OnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClick"), t.setAttribute("outsystems.function.key", "f374e41d-b8b1-43e6-9e4c-97174295b7b0"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), b.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    l = this.idService;
                return n.onReady$Action(e)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(e) {
            this._onReadyEventHandler = e
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(e) {
            this._onRenderEventHandler = e
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    l = this.idService;
                return n.onReady$Action(e)
            }), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(e) {
            this._onParametersChangedEventHandler = e
        }
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(e) {
            this._onSyncStartEventHandler = e
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(e) {
            this._onSyncCompleteEventHandler = e
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(e) {
            this._onSyncErrorEventHandler = e
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return controller.handleError(e)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return w.defaultTimeout
        }
    };
    o(a, "ControllerInner");
    let s = a;
    Be = s
}
var Be, Ke = new b.Controller.ControllerFactory(Be, O);
var zn = R.PlaceholderContent,
    Gn = R.IteratorPlaceholderContent,
    pt = o(function() {
        var s = H(function(a) {
            var u = a.model,
                e = a.controller,
                n = a.controller.idService,
                t = e.validationService,
                l = e.callContext(),
                r = I,
                v = V,
                y = {
                    props: a,
                    validateWidget: o(function(c) {
                        a.validateWidget(a, c)
                    }, "validateWidget")
                },
                i = u,
                U = L,
                F = T,
                A = P();
            return N.createElement("div", a.rootNodeProperties, N.createElement(f, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: o(function() {
                        return Promise.resolve().then(function() {
                            var c = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                            return e.onClick$Action(e.callContext(c))
                        })
                    }, "onClick")
                },
                extendedProperties: {
                    "aria-label": Ie.resolve(Ve.TranslationsService).getMessage("mVd_z8GJI0e1Xo8+sk4hsw#Value.1915663098.1", "Toggle the Menu"),
                    role: "button",
                    tabIndex: "0",
                    "aria-haspopup": "true"
                },
                style: "menu-icon",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "0"
                },
                _widgetRecordProvider: i
            }, N.createElement(f, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    "aria-hidden": "true"
                },
                style: "menu-icon-line",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "1"
                },
                _widgetRecordProvider: i
            }), N.createElement(f, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    "aria-hidden": "true"
                },
                style: "menu-icon-line",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "2"
                },
                _widgetRecordProvider: i
            }), N.createElement(f, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    "aria-hidden": "true"
                },
                style: "menu-icon-line",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "3"
                },
                _widgetRecordProvider: i
            })))
        }, {
            topLevelComponent: !1,
            getAttributes: o(function() {
                return {
                    codeFunction: "MenuIcon",
                    functionKey: "96fa937f-c17f-436d-845d-6f1a6c743802",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.MenuIcon",
            modelFactory: xe,
            controllerFactory: Ke
        });
        return s.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, s.getJsDependencies = function() {
            return []
        }, s.getBlocks = function() {
            return []
        }, s
    }, "componentFactory"),
    Te = pt();
var q = Z(J());
var qe = {};
var p = h; {
    let a = class a extends p.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, qe);
            var l = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _applicationNameOnClick$Action() {
            return this.hasOwnProperty("__applicationNameOnClick$Action") || (this.__applicationNameOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    l = this.idService;
                return p.Logger.startActiveSpan("ApplicationNameOnClick", function(r) {
                    r && (r.setAttribute("code.function", "ApplicationNameOnClick"), r.setAttribute("outsystems.function.key", "cc810bf7-d904-4d64-9043-7ed6198ce78b"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("ApplicationNameOnClick"), e = t.callContext(e), p.Navigation.navigateTo(p.Navigation.generateScreenURL(p.BuiltinFunctions.getOwnerURLPath(), {}), p.Transitions.createTransition(p.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__applicationNameOnClick$Action
        }
        set _applicationNameOnClick$Action(e) {
            this.__applicationNameOnClick$Action = e
        }
        applicationNameOnClick$Action(e) {
            var n = this.controller;
            return p.Logger.startActiveSpan("ApplicationNameOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "ApplicationNameOnClick"), t.setAttribute("outsystems.function.key", "cc810bf7-d904-4d64-9043-7ed6198ce78b"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._applicationNameOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
        }
        set onReadyEventHandler(e) {
            this._onReadyEventHandler = e
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(e) {
            this._onRenderEventHandler = e
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(e) {
            this._onParametersChangedEventHandler = e
        }
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(e) {
            this._onSyncStartEventHandler = e
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(e) {
            this._onSyncCompleteEventHandler = e
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(e) {
            this._onSyncErrorEventHandler = e
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return controller.handleError(e)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return w.defaultTimeout
        }
    };
    o(a, "ControllerInner");
    let s = a;
    Ze = s
}
var Ze, Je = new p.Controller.ControllerFactory(Ze, O);
var dr = R.PlaceholderContent,
    cr = R.IteratorPlaceholderContent,
    Ct = o(function() {
        var s = H(function(a) {
            var u = a.model,
                e = a.controller,
                n = a.controller.idService,
                t = e.validationService,
                l = e.callContext(),
                r = I,
                v = V,
                y = {
                    props: a,
                    validateWidget: o(function(c) {
                        a.validateWidget(a, c)
                    }, "validateWidget")
                },
                i = u,
                U = L,
                F = T,
                A = P();
            return q.createElement("div", a.rootNodeProperties, q.createElement(f, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: o(function() {
                        var c = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                        e.applicationNameOnClick$Action(e.callContext(c))
                    }, "onClick")
                },
                extendedProperties: {
                    role: "button",
                    tabIndex: "0"
                },
                style: "application-name display-flex align-items-center full-height",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "ApplicationTitleWrapper"
                },
                _widgetRecordProvider: i
            }, q.createElement(Y, {
                extendedProperties: {
                    alt: "",
                    style: "height: 32px;"
                },
                image: $.VersionedURL.getVersionedUrl("img/dashboard.Logo.png"),
                style: "app-logo",
                type: 0,
                _idProps: {
                    service: n,
                    name: "AppLogo"
                },
                _widgetRecordProvider: i
            }), q.createElement(X, {
                style: "",
                value: u.getCachedValue(n.getId("aZ+ALintY06glfRG8XzhyQ.Value"), function() {
                    return j.getAppName()
                }),
                _idProps: {
                    service: n,
                    uuid: "2"
                },
                _widgetRecordProvider: i
            })))
        }, {
            topLevelComponent: !1,
            getAttributes: o(function() {
                return {
                    codeFunction: "ApplicationTitle",
                    functionKey: "99261221-5631-4dea-b701-80292a8a29bf",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.ApplicationTitle",
            modelFactory: De,
            controllerFactory: Je
        });
        return s.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, s.getJsDependencies = function() {
            return []
        }, s.getBlocks = function() {
            return []
        }, s
    }, "componentFactory"),
    Le = Ct();
var Cr = R.PlaceholderContent,
    wr = R.IteratorPlaceholderContent,
    wt = o(function() {
        var s = H(function(a) {
            var u = a.model,
                e = a.controller,
                n = a.controller.idService,
                t = e.validationService,
                l = e.callContext(),
                r = I,
                v = V,
                y = {
                    props: a,
                    validateWidget: o(function(c) {
                        a.validateWidget(a, c)
                    }, "validateWidget")
                },
                i = u,
                U = L,
                F = T,
                A = P();
            return m.createElement("div", a.rootNodeProperties, m.createElement(ce, {
                getOwnerSpan: o(function() {
                    return A.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return A.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: o(function(c) {
                        e.handleError(c)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: n,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: i,
                _dependencies: []
            }), m.createElement(f, {
                align: 0,
                animate: !1,
                style: u.getCachedValue(n.getId("LayoutWrapper.Style"), function() {
                    return "layout layout-top" + (u.variables.hasFixedHeaderIn ? " fixed-header" : "") + (u.variables.enableAccessibilityFeaturesIn ? " has-accessible-features" : "") + (u.variables.extendedClassIn === "" ? "" : " " + u.variables.extendedClassIn)
                }, function() {
                    return u.variables.hasFixedHeaderIn
                }, function() {
                    return u.variables.enableAccessibilityFeaturesIn
                }, function() {
                    return u.variables.extendedClassIn
                }),
                visible: !0,
                _idProps: {
                    service: n,
                    name: "LayoutWrapper"
                },
                _widgetRecordProvider: i,
                style_dataFetchStatus: ke.calculateDataFetchStatus(u.variables._hasFixedHeaderInDataFetchStatus, u.variables._enableAccessibilityFeaturesInDataFetchStatus, u.variables._extendedClassInDataFetchStatus)
            }, m.createElement(f, {
                align: 0,
                animate: !1,
                style: "main",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "2"
                },
                _widgetRecordProvider: i
            }, m.createElement(se, {
                extendedProperties: {
                    role: "banner",
                    className: "header"
                },
                tag: "header",
                _idProps: {
                    service: n,
                    name: "Header2"
                },
                _widgetRecordProvider: i
            }, m.createElement(x, {
                enabled: !0,
                extendedProperties: {
                    "aria-label": "Skip to Content (Press Enter)",
                    "data-showskipcontent": u.getCachedValue(n.getId("VUCrXupa4kG8pPfT8AIZBg.data-showskipcontent"), function() {
                        return u.variables.enableAccessibilityFeaturesIn ? "true" : "false"
                    }, function() {
                        return u.variables.enableAccessibilityFeaturesIn
                    })
                },
                onClick: o(function() {
                    var c = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                    e.skipToContentOnClick$Action(e.callContext(c))
                }, "onClick"),
                style: "skip-nav",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "4"
                },
                _widgetRecordProvider: i
            }, m.createElement(z, {
                style: "font-size-xs",
                text: [F(v("mjrohuRrREqdE8Am2dRAOw#Value", "Skip to Content (Press Enter)"))],
                _idProps: {
                    service: n,
                    uuid: "5"
                },
                _widgetRecordProvider: i
            })), m.createElement(f, {
                align: 0,
                animate: !1,
                style: "header-top ThemeGrid_Container",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "6"
                },
                _widgetRecordProvider: i
            }, m.createElement(f, {
                align: 0,
                animate: !1,
                style: "header-content display-flex ",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "7"
                },
                _widgetRecordProvider: i
            }, m.createElement(Te, {
                getOwnerSpan: o(function() {
                    return A.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return A.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: o(function(c) {
                        e.handleError(c)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: n,
                    uuid: "8",
                    alias: "2"
                },
                _widgetRecordProvider: i,
                _dependencies: []
            }), m.createElement(Le, {
                getOwnerSpan: o(function() {
                    return A.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return A.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: o(function(c) {
                        e.handleError(c)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: n,
                    uuid: "9",
                    alias: "3"
                },
                _widgetRecordProvider: i,
                _dependencies: []
            }), m.createElement(k, {
                align: 0,
                content: y.props.placeholders.header,
                gridProperties: {
                    classes: "OSInline"
                },
                style: "header-navigation",
                _idProps: {
                    service: n,
                    name: "Header"
                },
                _widgetRecordProvider: i
            })))), m.createElement(f, {
                align: 0,
                animate: !1,
                style: "content",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "Content"
                },
                _widgetRecordProvider: i
            }, m.createElement(f, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    role: "main"
                },
                style: "main-content ThemeGrid_Container",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "MainContentWrapper"
                },
                _widgetRecordProvider: i
            }, m.createElement(k, {
                align: 0,
                content: y.props.placeholders.breadcrumbs,
                style: "content-breadcrumbs ph",
                _idProps: {
                    service: n,
                    name: "Breadcrumbs"
                },
                _widgetRecordProvider: i
            }), m.createElement(f, {
                align: 0,
                animate: !1,
                style: "content-top display-flex align-items-center",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "14"
                },
                _widgetRecordProvider: i
            }, m.createElement(k, {
                align: 0,
                content: y.props.placeholders.title,
                style: "content-top-title heading1 ph",
                _idProps: {
                    service: n,
                    name: "Title"
                },
                _widgetRecordProvider: i
            }), m.createElement(k, {
                align: 0,
                content: y.props.placeholders.actions,
                style: "content-top-actions ph",
                _idProps: {
                    service: n,
                    name: "Actions"
                },
                _widgetRecordProvider: i
            })), m.createElement(k, {
                align: 0,
                content: y.props.placeholders.mainContent,
                style: "content-middle",
                _idProps: {
                    service: n,
                    name: "MainContent"
                },
                _widgetRecordProvider: i
            })), m.createElement(se, {
                extendedProperties: {
                    role: "contentinfo",
                    className: "content-bottom"
                },
                tag: "footer",
                _idProps: {
                    service: n,
                    uuid: "18"
                },
                _widgetRecordProvider: i
            }, m.createElement(k, {
                align: 0,
                content: y.props.placeholders.footer,
                style: "footer ThemeGrid_Container ph",
                _idProps: {
                    service: n,
                    name: "Footer"
                },
                _widgetRecordProvider: i
            }))))))
        }, {
            topLevelComponent: !1,
            getAttributes: o(function() {
                return {
                    codeFunction: "LayoutTopMenu",
                    functionKey: "2cc2a24c-0ee3-4a4e-b7ef-32c7feff1982",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Layouts.LayoutTopMenu",
            modelFactory: Ne,
            controllerFactory: ze
        });
        return s.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, s.getJsDependencies = function() {
            return []
        }, s.getBlocks = function() {
            return [ce, Te, Le]
        }, s
    }, "componentFactory"),
    Or = wt();
var _ = Z(J());
var Ot = {
        "nej3A_4R7kaUkfwGE5ub6w#Value": "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644",
        "2Djm+3zPL0anWsH6xyInWg#Value": "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C"
    },
    Pt = {
        "nej3A_4R7kaUkfwGE5ub6w#Value": "\u09B2\u0997\u0987\u09A8",
        "2Djm+3zPL0anWsH6xyInWg#Value": "\u09B2\u0997 \u0986\u0989\u099F \u0995\u09B0\u09C1\u09A8"
    },
    Ht = {
        "nej3A_4R7kaUkfwGE5ub6w#Value": "Anmeldung",
        "2Djm+3zPL0anWsH6xyInWg#Value": "Abmelden"
    },
    Tt = {
        "nej3A_4R7kaUkfwGE5ub6w#Value": "Iniciar sesi\xF3n",
        "2Djm+3zPL0anWsH6xyInWg#Value": "Cerrar sesi\xF3n"
    },
    Lt = {
        "nej3A_4R7kaUkfwGE5ub6w#Value": "Se connecter",
        "2Djm+3zPL0anWsH6xyInWg#Value": "D\xE9connexion"
    },
    It = {
        "nej3A_4R7kaUkfwGE5ub6w#Value": "Accedi",
        "2Djm+3zPL0anWsH6xyInWg#Value": "Esci"
    },
    Vt = {
        "nej3A_4R7kaUkfwGE5ub6w#Value": "\u1785\u17BC\u179B\u1794\u17D2\u179A\u17BE\u1794\u17D2\u179A\u17B6\u179F\u17CB",
        "2Djm+3zPL0anWsH6xyInWg#Value": "\u1785\u17B6\u1780\u1785\u17C1\u1789"
    },
    kt = {
        "nej3A_4R7kaUkfwGE5ub6w#Value": "\uB85C\uADF8\uC778",
        "2Djm+3zPL0anWsH6xyInWg#Value": "\uB85C\uADF8\uC544\uC6C3"
    },
    Ft = {
        "nej3A_4R7kaUkfwGE5ub6w#Value": "\u041D\u044D\u0432\u0442\u0440\u044D\u0445",
        "2Djm+3zPL0anWsH6xyInWg#Value": "\u0413\u0430\u0440\u0430\u0445"
    },
    xt = {
        "nej3A_4R7kaUkfwGE5ub6w#Value": "Zaloguj si\u0119",
        "2Djm+3zPL0anWsH6xyInWg#Value": "Wyloguj si\u0119"
    },
    Dt = {
        "nej3A_4R7kaUkfwGE5ub6w#Value": "Entrar",
        "2Djm+3zPL0anWsH6xyInWg#Value": "Fazer logout"
    },
    Wt = {
        "nej3A_4R7kaUkfwGE5ub6w#Value": "\u0412\u043E\u0439\u0442\u0438",
        "2Djm+3zPL0anWsH6xyInWg#Value": "\u0412\u044B\u0439\u0442\u0438"
    },
    Nt = {
        "nej3A_4R7kaUkfwGE5ub6w#Value": "\u0DBD\u0DDC\u0D9C\u0DD2\u0DB1\u0DCA \u0DC0\u0DB1\u0DCA\u0DB1",
        "2Djm+3zPL0anWsH6xyInWg#Value": "\u0DB4\u0DD2\u0DA7\u0DC0\u0DD3\u0DB8"
    },
    Ut = {
        "nej3A_4R7kaUkfwGE5ub6w#Value": "Ingia",
        "2Djm+3zPL0anWsH6xyInWg#Value": "Toka nje"
    },
    Mt = {
        "nej3A_4R7kaUkfwGE5ub6w#Value": "\u0B89\u0BB3\u0BCD\u0BA8\u0BC1\u0BB4\u0BC8",
        "2Djm+3zPL0anWsH6xyInWg#Value": "\u0BB5\u0BC6\u0BB3\u0BBF\u0BAF\u0BC7\u0BB1\u0BC1"
    },
    $t = {
        "nej3A_4R7kaUkfwGE5ub6w#Value": "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A",
        "2Djm+3zPL0anWsH6xyInWg#Value": "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A"
    },
    jt = {
        "nej3A_4R7kaUkfwGE5ub6w#Value": "Giri\u015F Yap",
        "2Djm+3zPL0anWsH6xyInWg#Value": "\xC7\u0131k\u0131\u015F yap"
    },
    zt = {
        "nej3A_4R7kaUkfwGE5ub6w#Value": "Kirish",
        "2Djm+3zPL0anWsH6xyInWg#Value": "Chiqish"
    },
    Gt = {
        "nej3A_4R7kaUkfwGE5ub6w#Value": "Kirish",
        "2Djm+3zPL0anWsH6xyInWg#Value": "Chiqish"
    },
    Bt = {
        "nej3A_4R7kaUkfwGE5ub6w#Value": "\u0110\u0103ng nh\u1EADp",
        "2Djm+3zPL0anWsH6xyInWg#Value": "\u0110\u0103ng xu\u1EA5t"
    },
    Kt = {
        "nej3A_4R7kaUkfwGE5ub6w#Value": "\u767B\u5F55",
        "2Djm+3zPL0anWsH6xyInWg#Value": "\u9000\u51FA\u767B\u5F55"
    },
    qt = {
        "nej3A_4R7kaUkfwGE5ub6w#Value": "\u767B\u5165",
        "2Djm+3zPL0anWsH6xyInWg#Value": "\u767B\u51FA"
    },
    Xe = {
        "ar-001": {
            translations: Ot,
            isRTL: !0
        },
        "bn-BD": {
            translations: Pt,
            isRTL: !1
        },
        "de-DE": {
            translations: Ht,
            isRTL: !1
        },
        "es-ES": {
            translations: Tt,
            isRTL: !1
        },
        "fr-FR": {
            translations: Lt,
            isRTL: !1
        },
        "it-IT": {
            translations: It,
            isRTL: !1
        },
        "km-KH": {
            translations: Vt,
            isRTL: !1
        },
        "ko-KR": {
            translations: kt,
            isRTL: !1
        },
        "mn-MN": {
            translations: Ft,
            isRTL: !1
        },
        "pl-PL": {
            translations: xt,
            isRTL: !1
        },
        "pt-PT": {
            translations: Dt,
            isRTL: !1
        },
        "ru-RU": {
            translations: Wt,
            isRTL: !1
        },
        "si-LK": {
            translations: Nt,
            isRTL: !1
        },
        "sw-KE": {
            translations: Ut,
            isRTL: !1
        },
        "ta-IN": {
            translations: Mt,
            isRTL: !1
        },
        "th-TH": {
            translations: $t,
            isRTL: !1
        },
        "tr-TR": {
            translations: jt,
            isRTL: !1
        },
        "uz-Latn-UZ": {
            translations: zt,
            isRTL: !1
        },
        "uz-UZ": {
            translations: Gt,
            isRTL: !1
        },
        "vi-VN": {
            translations: Bt,
            isRTL: !1
        },
        "zh-CN": {
            translations: Kt,
            isRTL: !1
        },
        "zh-TW": {
            translations: qt,
            isRTL: !1
        }
    };
var d = h; {
    let a = class a extends d.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, Xe);
            var l = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _clientLogout$Action() {
            return this.hasOwnProperty("__clientLogout$Action") || (this.__clientLogout$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    l = this.idService;
                return d.Logger.startActiveSpan("ClientLogout", function(r) {
                    return r && (r.setAttribute("code.function", "ClientLogout"), r.setAttribute("outsystems.function.key", "16b8bb2e-2d06-444a-9efc-eb164c5727d8"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("ClientLogout"), e = t.callContext(e), d.Flow.executeAsyncFlow(function() {
                            return n.flush(), d.SystemActions.logout(e).then(function() {
                                return E.setUserName(""), E.setUserPhotoURL(""), E.setLastURL(""), d.Flow.returnAsync(d.Navigation.navigateTo(d.Navigation.generateScreenURL(d.BuiltinFunctions.getOwnerURLPath(), {}), d.Transitions.createTransition(d.Transitions.TransitionAnimation.Default), e, !0))
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__clientLogout$Action
        }
        set _clientLogout$Action(e) {
            this.__clientLogout$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    l = this.idService;
                return d.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "178caa22-4a4c-4694-b37a-07d6fef86df8"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnReady"), e = t.callContext(e), d.Flow.executeAsyncFlow(function() {
                            return t._getUsernameAndPhoto$Action(e)
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _getUsernameAndPhoto$Action() {
            return this.hasOwnProperty("__getUsernameAndPhoto$Action") || (this.__getUsernameAndPhoto$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    l = this.idService;
                return d.Logger.startActiveSpan("GetUsernameAndPhoto", function(r) {
                    return r && (r.setAttribute("code.function", "GetUsernameAndPhoto"), r.setAttribute("outsystems.function.key", "c78050da-d0b4-41e0-b4a6-d2d77ea57b9f"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                        t.ensureControllerAlive("GetUsernameAndPhoto"), e = t.callContext(e);
                        var v = new d.DataTypes.VariableHolder;
                        return d.Flow.executeAsyncFlow(function() {
                            return d.Flow.executeSequence(function() {
                                if (E.getUserName() === "" && d.BuiltinFunctions.getUserId().toString() !== d.BuiltinFunctions.nullTextIdentifier()) return n.flush(), d.SystemActions.getUserProfile(e).then(function(y) {
                                    v.value = y
                                }).then(function() {
                                    E.setUserName(v.value.userInfoOut.nameAttr), E.setUserPhotoURL(v.value.userInfoOut.photoURLAttr)
                                })
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__getUsernameAndPhoto$Action
        }
        set _getUsernameAndPhoto$Action(e) {
            this.__getUsernameAndPhoto$Action = e
        }
        clientLogout$Action(e) {
            var n = this.controller;
            return d.Logger.startActiveSpan("ClientLogout__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ClientLogout"), t.setAttribute("outsystems.function.key", "16b8bb2e-2d06-444a-9efc-eb164c5727d8"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._clientLogout$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return d.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "178caa22-4a4c-4694-b37a-07d6fef86df8"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        getUsernameAndPhoto$Action(e) {
            var n = this.controller;
            return d.Logger.startActiveSpan("GetUsernameAndPhoto__proxy", function(t) {
                return t && (t.setAttribute("code.function", "GetUsernameAndPhoto"), t.setAttribute("outsystems.function.key", "c78050da-d0b4-41e0-b4a6-d2d77ea57b9f"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._getUsernameAndPhoto$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    l = this.idService;
                return n.onReady$Action(e)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(e) {
            this._onReadyEventHandler = e
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(e) {
            this._onRenderEventHandler = e
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(e) {
            this._onParametersChangedEventHandler = e
        }
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(e) {
            this._onSyncStartEventHandler = e
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(e) {
            this._onSyncCompleteEventHandler = e
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(e) {
            this._onSyncErrorEventHandler = e
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return controller.handleError(e)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return w.defaultTimeout
        }
    };
    o(a, "ControllerInner");
    let s = a;
    Ye = s
}
var Ye, Qe = new d.Controller.ControllerFactory(Ye, O);
var Kr = R.PlaceholderContent,
    qr = R.IteratorPlaceholderContent,
    Zt = o(function() {
        var s = H(function(a) {
            var u = a.model,
                e = a.controller,
                n = a.controller.idService,
                t = e.validationService,
                l = e.callContext(),
                r = I,
                v = V,
                y = {
                    props: a,
                    validateWidget: o(function(c) {
                        a.validateWidget(a, c)
                    }, "validateWidget")
                },
                i = u,
                U = L,
                F = T,
                A = P();
            return _.createElement("div", a.rootNodeProperties, _.createElement(f, {
                align: 0,
                animate: !1,
                style: "user-info",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "0"
                },
                _widgetRecordProvider: i
            }, U(j.getUserId().toString() !== j.nullTextIdentifier(), !1, this, function() {
                return [_.createElement(f, {
                    align: 0,
                    animate: !1,
                    visible: !0,
                    _idProps: {
                        service: n,
                        uuid: "1"
                    },
                    _widgetRecordProvider: i
                }, U(E.getUserPhotoURL() !== "", !1, this, function() {
                    return [_.createElement(Y, {
                        extendedProperties: {
                            title: E.getUserName(),
                            alt: "User photo"
                        },
                        style: "avatar avatar-small border-radius-rounded",
                        type: 1,
                        url: E.getUserPhotoURL(),
                        _idProps: {
                            service: n,
                            uuid: "2"
                        },
                        _widgetRecordProvider: i
                    })]
                }, function() {
                    return [_.createElement(de, {
                        getOwnerSpan: o(function() {
                            return A.getChildSpan("render")
                        }, "getOwnerSpan"),
                        getOwnerDisposeSpan: o(function() {
                            return A.getChildSpan("destroy")
                        }, "getOwnerDisposeSpan"),
                        inputs: {
                            Size: Fe.size.small,
                            Name: E.getUserName()
                        },
                        events: {
                            _handleError: o(function(c) {
                                e.handleError(c)
                            }, "_handleError")
                        },
                        _validationProps: {
                            validationService: t
                        },
                        _idProps: {
                            service: n,
                            uuid: "3",
                            alias: "1"
                        },
                        _widgetRecordProvider: i,
                        _dependencies: []
                    })]
                }), _.createElement(f, {
                    align: 0,
                    animate: !1,
                    style: "margin-left-s",
                    visible: !0,
                    _idProps: {
                        service: n,
                        uuid: "4"
                    },
                    _widgetRecordProvider: i
                }, _.createElement(x, {
                    enabled: !0,
                    transition: M.createTransition(M.TransitionAnimation.Default),
                    url: $.generateScreenURL("dashboard", "profile", {}),
                    visible: !0,
                    _idProps: {
                        service: n,
                        uuid: "5"
                    },
                    _widgetRecordProvider: i
                }, _.createElement(X, {
                    value: E.getUserName(),
                    _idProps: {
                        service: n,
                        uuid: "6"
                    },
                    _widgetRecordProvider: i
                })))), _.createElement(f, {
                    align: 0,
                    animate: !1,
                    style: "margin-left-s",
                    visible: !0,
                    _idProps: {
                        service: n,
                        uuid: "7"
                    },
                    _widgetRecordProvider: i
                }, _.createElement(x, {
                    enabled: !0,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    onClick: o(function() {
                        return Promise.resolve().then(function() {
                            var c = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                            return e.clientLogout$Action(e.callContext(c))
                        })
                    }, "onClick"),
                    visible: !0,
                    _idProps: {
                        service: n,
                        uuid: "8"
                    },
                    _widgetRecordProvider: i
                }, _.createElement(le, {
                    icon: "sign-out",
                    iconSize: 0,
                    style: "icon",
                    visible: !0,
                    _idProps: {
                        service: n,
                        name: "Icon3"
                    },
                    _widgetRecordProvider: i
                }), _.createElement(z, {
                    style: "margin-left-s wcag-hide-text",
                    text: [F(v("2Djm+3zPL0anWsH6xyInWg#Value", "Log out"))],
                    _idProps: {
                        service: n,
                        uuid: "10"
                    },
                    _widgetRecordProvider: i
                })))]
            }, function() {
                return [_.createElement(x, {
                    enabled: !0,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    transition: M.createTransition(M.TransitionAnimation.Fade),
                    url: $.generateScreenURL("dashboard", "login", {}),
                    visible: !0,
                    _idProps: {
                        service: n,
                        uuid: "11"
                    },
                    _widgetRecordProvider: i
                }, _.createElement(le, {
                    icon: "sign-in",
                    iconSize: 0,
                    style: "icon",
                    visible: !0,
                    _idProps: {
                        service: n,
                        name: "Icon4"
                    },
                    _widgetRecordProvider: i
                }), _.createElement(z, {
                    style: "margin-left-s",
                    text: [F(v("nej3A_4R7kaUkfwGE5ub6w#Value", "Login"))],
                    _idProps: {
                        service: n,
                        uuid: "13"
                    },
                    _widgetRecordProvider: i
                }))]
            })))
        }, {
            topLevelComponent: !1,
            getAttributes: o(function() {
                return {
                    codeFunction: "UserInfo",
                    functionKey: "aff58ebe-2f28-4941-a4ac-832f90c8e43e",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.UserInfo",
            modelFactory: Me,
            controllerFactory: Qe
        });
        return s.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, s.getJsDependencies = function() {
            return []
        }, s.getBlocks = function() {
            return [de]
        }, s
    }, "componentFactory"),
    Zr = Zt();
export {
    Le as a, Or as b, Zr as c
};