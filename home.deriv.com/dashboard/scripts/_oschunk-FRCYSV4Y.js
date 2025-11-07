import {
    a as ae
} from "./_oschunk-T7TDWU5Q.js";
import {
    a as be
} from "./_oschunk-4INYM4LX.js";
import {
    a as pe
} from "./_oschunk-UCREYJML.js";
import {
    a as _e
} from "./_oschunk-OSUI2M44.js";
import {
    a as ne
} from "./_oschunk-V2GLUWLZ.js";
import {
    a as K
} from "./_oschunk-O3C4A522.js";
import {
    h as v,
    i as T,
    j,
    k as Fe,
    q as P,
    r as Q,
    s as re,
    x as ve
} from "./_oschunk-O5KC3WOL.js";
import {
    a as fe,
    g as N,
    m as W,
    o as z,
    q as J,
    r as B,
    s as q,
    t as M
} from "./_oschunk-NVHFAAS2.js";
import {
    a as F
} from "./_oschunk-AW35UT34.js";
import {
    F as O,
    Ga as C,
    Ha as R,
    Ka as L,
    S as ge,
    a as te
} from "./_oschunk-WCMQG33O.js";
import {
    J as H,
    X as A,
    a as Ue,
    b as $e,
    c as i,
    f as he,
    n as Y,
    o as ee,
    q as w,
    w as $
} from "./_oschunk-DFKJJKI4.js";
var S = he(fe());
var V = A,
    Se = class Se extends V.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("SupportedLanguages", "supportedLanguagesVar", "SupportedLanguages", !0, !1, V.DataTypes.DataTypes.RecordList, function() {
                return V.DataTypes.ImmutableBase.getData(new(V.GenericTypeCache.getGenericList(ge)))
            }, !1, V.GenericTypeCache.getGenericList(ge)), this.attr("CurrentLanguage", "currentLanguageVar", "CurrentLanguage", !0, !1, V.DataTypes.DataTypes.Text, function() {
                return "EN"
            }, !1), this.attr("LanguageSwitcherEnabled", "languageSwitcherEnabledVar", "LanguageSwitcherEnabled", !0, !1, V.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShowLanguageSwitcher", "showLanguageSwitcherIn", "ShowLanguageSwitcher", !0, !1, V.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_showLanguageSwitcherInDataFetchStatus", "_showLanguageSwitcherInDataFetchStatus", "_showLanguageSwitcherInDataFetchStatus", !0, !1, V.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(V.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
i(Se, "VariablesRecord");
var oe = Se;
oe.init();
var Ce = class Ce extends V.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
i(Ce, "WidgetsRecord");
var ye = Ce,
    G = class G extends V.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return oe
        }
        static getWidgetsRecordConstructor() {
            return ye
        }
        static get hasValidationWidgets() {
            return G._hasValidationWidgetsValue === void 0 && (G._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0), G._hasValidationWidgetsValue
        }
        setInputs(u) {
            "ShowLanguageSwitcher" in u && (this.variables.showLanguageSwitcherIn = u.ShowLanguageSwitcher, "_showLanguageSwitcherInDataFetchStatus" in u && (this.variables._showLanguageSwitcherInDataFetchStatus = u._showLanguageSwitcherInDataFetchStatus))
        }
    };
i(G, "Model");
var ie = G;
ie._hasValidationWidgetsValue = void 0;
var qe = new V.Model.ModelFactory(ie);
var at = {
        "B8KB8hhzAEqzsi2No479Ig#Value": "\u0627\u0644\u0644\u063A\u0629",
        "69qUw+I_PEan1pUNeiDVbA#Value": "\u0627\u0644\u0644\u063A\u0629"
    },
    ot = {
        "B8KB8hhzAEqzsi2No479Ig#Value": "\u09AD\u09BE\u09B7\u09BE",
        "69qUw+I_PEan1pUNeiDVbA#Value": "\u09AD\u09BE\u09B7\u09BE"
    },
    it = {
        "B8KB8hhzAEqzsi2No479Ig#Value": "Sprache",
        "69qUw+I_PEan1pUNeiDVbA#Value": "Sprache"
    },
    st = {
        "B8KB8hhzAEqzsi2No479Ig#Value": "Idioma",
        "69qUw+I_PEan1pUNeiDVbA#Value": "Idioma"
    },
    lt = {
        "B8KB8hhzAEqzsi2No479Ig#Value": "Langue",
        "69qUw+I_PEan1pUNeiDVbA#Value": "Langue"
    },
    dt = {
        "B8KB8hhzAEqzsi2No479Ig#Value": "Lingua",
        "69qUw+I_PEan1pUNeiDVbA#Value": "Lingua"
    },
    ct = {
        "B8KB8hhzAEqzsi2No479Ig#Value": "\u1797\u17B6\u179F\u17B6",
        "69qUw+I_PEan1pUNeiDVbA#Value": "\u1797\u17B6\u179F\u17B6"
    },
    ut = {
        "B8KB8hhzAEqzsi2No479Ig#Value": "\uC5B8\uC5B4",
        "69qUw+I_PEan1pUNeiDVbA#Value": "\uC5B8\uC5B4"
    },
    mt = {
        "B8KB8hhzAEqzsi2No479Ig#Value": "\u0425\u044D\u043B",
        "69qUw+I_PEan1pUNeiDVbA#Value": "\u0425\u044D\u043B"
    },
    ht = {
        "B8KB8hhzAEqzsi2No479Ig#Value": "J\u0119zyk",
        "69qUw+I_PEan1pUNeiDVbA#Value": "J\u0119zyk"
    },
    gt = {
        "B8KB8hhzAEqzsi2No479Ig#Value": "L\xEDngua",
        "69qUw+I_PEan1pUNeiDVbA#Value": "L\xEDngua"
    },
    ft = {
        "B8KB8hhzAEqzsi2No479Ig#Value": "\u042F\u0437\u044B\u043A",
        "69qUw+I_PEan1pUNeiDVbA#Value": "\u042F\u0437\u044B\u043A"
    },
    vt = {
        "B8KB8hhzAEqzsi2No479Ig#Value": "\u0DB7\u0DCF\u0DC2\u0DCF\u0DC0",
        "69qUw+I_PEan1pUNeiDVbA#Value": "\u0DB7\u0DCF\u0DC2\u0DCF\u0DC0"
    },
    _t = {
        "B8KB8hhzAEqzsi2No479Ig#Value": "Lugha",
        "69qUw+I_PEan1pUNeiDVbA#Value": "Lugha"
    },
    pt = {
        "B8KB8hhzAEqzsi2No479Ig#Value": "\u0BAE\u0BCA\u0BB4\u0BBF",
        "69qUw+I_PEan1pUNeiDVbA#Value": "\u0BAE\u0BCA\u0BB4\u0BBF"
    },
    bt = {
        "B8KB8hhzAEqzsi2No479Ig#Value": "\u0E20\u0E32\u0E29\u0E32",
        "69qUw+I_PEan1pUNeiDVbA#Value": "\u0E20\u0E32\u0E29\u0E32"
    },
    yt = {
        "B8KB8hhzAEqzsi2No479Ig#Value": "Dil",
        "69qUw+I_PEan1pUNeiDVbA#Value": "Dil"
    },
    St = {
        "B8KB8hhzAEqzsi2No479Ig#Value": "Til",
        "69qUw+I_PEan1pUNeiDVbA#Value": "Til"
    },
    Ct = {
        "B8KB8hhzAEqzsi2No479Ig#Value": "Til",
        "69qUw+I_PEan1pUNeiDVbA#Value": "Til"
    },
    Et = {
        "B8KB8hhzAEqzsi2No479Ig#Value": "Ng\xF4n ng\u1EEF",
        "69qUw+I_PEan1pUNeiDVbA#Value": "Ng\xF4n ng\u1EEF"
    },
    At = {
        "B8KB8hhzAEqzsi2No479Ig#Value": "\u8BED\u8A00",
        "69qUw+I_PEan1pUNeiDVbA#Value": "\u8BED\u8A00"
    },
    wt = {
        "B8KB8hhzAEqzsi2No479Ig#Value": "\u8A9E\u8A00",
        "69qUw+I_PEan1pUNeiDVbA#Value": "\u8A9E\u8A00"
    },
    Me = {
        "ar-001": {
            translations: at,
            isRTL: !0
        },
        "bn-BD": {
            translations: ot,
            isRTL: !1
        },
        "de-DE": {
            translations: it,
            isRTL: !1
        },
        "es-ES": {
            translations: st,
            isRTL: !1
        },
        "fr-FR": {
            translations: lt,
            isRTL: !1
        },
        "it-IT": {
            translations: dt,
            isRTL: !1
        },
        "km-KH": {
            translations: ct,
            isRTL: !1
        },
        "ko-KR": {
            translations: ut,
            isRTL: !1
        },
        "mn-MN": {
            translations: mt,
            isRTL: !1
        },
        "pl-PL": {
            translations: ht,
            isRTL: !1
        },
        "pt-PT": {
            translations: gt,
            isRTL: !1
        },
        "ru-RU": {
            translations: ft,
            isRTL: !1
        },
        "si-LK": {
            translations: vt,
            isRTL: !1
        },
        "sw-KE": {
            translations: _t,
            isRTL: !1
        },
        "ta-IN": {
            translations: pt,
            isRTL: !1
        },
        "th-TH": {
            translations: bt,
            isRTL: !1
        },
        "tr-TR": {
            translations: yt,
            isRTL: !1
        },
        "uz-Latn-UZ": {
            translations: St,
            isRTL: !1
        },
        "uz-UZ": {
            translations: Ct,
            isRTL: !1
        },
        "vi-VN": {
            translations: Et,
            isRTL: !1
        },
        "zh-CN": {
            translations: At,
            isRTL: !1
        },
        "zh-TW": {
            translations: wt,
            isRTL: !1
        }
    };
var b = A; {
    let u = class u extends b.Controller.BaseViewController {
        constructor(e, t, r) {
            super(e, t, r, Me);
            var n = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _triggerLanguageSwitcher$Action() {
            return this.hasOwnProperty("__triggerLanguageSwitcher$Action") || (this.__triggerLanguageSwitcher$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return b.Logger.startActiveSpan("TriggerLanguageSwitcher", function(a) {
                    a && (a.setAttribute("code.function", "TriggerLanguageSwitcher"), a.setAttribute("outsystems.function.key", "0eef7450-b5be-4267-a203-fe8476ee0954"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("TriggerLanguageSwitcher"), e = r.callContext(e);
                        var s = new b.DataTypes.VariableHolder,
                            g = new b.DataTypes.VariableHolder;
                        C.isDesktop$Action(e).isDesktopOut ? g.value = C.sidebarOpen$Action(n.getId("LanguageSwitcherSidebar"), e) : s.value = C.bottomSheetOpen$Action(n.getId("LanguageSheet"), e)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__triggerLanguageSwitcher$Action
        }
        set _triggerLanguageSwitcher$Action(e) {
            this.__triggerLanguageSwitcher$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return b.Logger.startActiveSpan("OnReady", function(a) {
                    return a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "9da06d34-517c-4451-a97d-2a6902a2a672"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), b.Flow.tryFinally(function() {
                        r.ensureControllerAlive("OnReady"), e = r.callContext(e);
                        var s = new b.DataTypes.VariableHolder,
                            g = new b.DataTypes.VariableHolder;
                        return b.Flow.executeAsyncFlow(function() {
                            return L.bottomSheet_CloseOnClickOutside$Action(n.getId("LanguageSheet"), e), t.flush(), L.getSupportedLanguages$Action(e).then(function(o) {
                                g.value = o
                            }).then(function() {
                                return t.flush(), L.isLanguageSwitcherEnabled$Action(e).then(function(o) {
                                    s.value = o
                                })
                            }).then(function() {
                                t.variables.supportedLanguagesVar = g.value.languagesOut, t.variables.currentLanguageVar = R.getLanguage() === "zh-CN" || R.getLanguage() === "zh-TW" ? b.BuiltinFunctions.toUpper(R.getLanguage()) : b.BuiltinFunctions.toUpper(b.BuiltinFunctions.substr(R.getLanguage(), 0, 2)), t.variables.languageSwitcherEnabledVar = s.value.isEnabledOut
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onCloseSidebar$Action() {
            return this.hasOwnProperty("__onCloseSidebar$Action") || (this.__onCloseSidebar$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return b.Logger.startActiveSpan("OnCloseSidebar", function(a) {
                    a && (a.setAttribute("code.function", "OnCloseSidebar"), a.setAttribute("outsystems.function.key", "9f1cf266-9866-4b2a-8a5e-c9eb36c2aa49"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnCloseSidebar"), e = r.callContext(e);
                        var s = new b.DataTypes.VariableHolder;
                        s.value = C.sidebarClose$Action(n.getId("LanguageSwitcherSidebar"), e)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onCloseSidebar$Action
        }
        set _onCloseSidebar$Action(e) {
            this.__onCloseSidebar$Action = e
        }
        get _setLanguage$Action() {
            return this.hasOwnProperty("__setLanguage$Action") || (this.__setLanguage$Action = function(e, t) {
                var r = this.model,
                    n = this.controller,
                    a = this.idService;
                return b.Logger.startActiveSpan("SetLanguage", function(s) {
                    s && (s.setAttribute("code.function", "SetLanguage"), s.setAttribute("outsystems.function.key", "a39eeed3-208b-4b81-a8b3-5ee32b269f71"), s.setAttribute("outsystems.function.owner.name", "dashboard"), s.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("SetLanguage"), t = n.callContext(t);
                        var g = new b.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("dashboard.Common.SignUpLayout.SetLanguage$vars")));
                        g.value.languageCodeInLocal = e;
                        var o = new b.DataTypes.VariableHolder;
                        R.setLanguage(g.value.languageCodeInLocal), r.variables.currentLanguageVar = g.value.languageCodeInLocal === "zh-CN" || g.value.languageCodeInLocal === "zh-TW" ? b.BuiltinFunctions.toUpper(g.value.languageCodeInLocal) : b.BuiltinFunctions.toUpper(b.BuiltinFunctions.substr(g.value.languageCodeInLocal, 0, 2)), b.SystemActions.setCurrentLocale(g.value.languageCodeInLocal, t), o.value = C.bottomSheetClose$Action(a.getId("LanguageSheet"), t), n._onCloseSidebar$Action(t)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__setLanguage$Action
        }
        set _setLanguage$Action(e) {
            this.__setLanguage$Action = e
        }
        triggerLanguageSwitcher$Action(e) {
            var t = this.controller;
            return b.Logger.startActiveSpan("TriggerLanguageSwitcher__proxy", function(r) {
                r && (r.setAttribute("code.function", "TriggerLanguageSwitcher"), r.setAttribute("outsystems.function.key", "0eef7450-b5be-4267-a203-fe8476ee0954"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._triggerLanguageSwitcher$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return b.Logger.startActiveSpan("OnReady__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "9da06d34-517c-4451-a97d-2a6902a2a672"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), b.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        onCloseSidebar$Action(e) {
            var t = this.controller;
            return b.Logger.startActiveSpan("OnCloseSidebar__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnCloseSidebar"), r.setAttribute("outsystems.function.key", "9f1cf266-9866-4b2a-8a5e-c9eb36c2aa49"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onCloseSidebar$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        setLanguage$Action(e, t) {
            var r = this.controller;
            return b.Logger.startActiveSpan("SetLanguage__proxy", function(n) {
                n && (n.setAttribute("code.function", "SetLanguage"), n.setAttribute("outsystems.function.key", "a39eeed3-208b-4b81-a8b3-5ee32b269f71"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._setLanguage$Action, t, e)
                } finally {
                    n && n.end()
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
                var t = this.controller,
                    r = this.model,
                    n = this.idService;
                return t.onReady$Action(e)
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
            return L.defaultTimeout
        }
    };
    i(u, "ControllerInner");
    let m = u;
    Ee = m, Ee.registerVariableGroupType("dashboard.Common.SignUpLayout.SetLanguage$vars", [{
        name: "LanguageCode",
        attrName: "languageCodeInLocal",
        mandatory: !0,
        dataType: b.DataTypes.DataTypes.Text,
        defaultValue: i(function() {
            return ""
        }, "defaultValue")
    }])
}
var Ee, Ke = new b.Controller.ControllerFactory(Ee, F);
var Z = N.PlaceholderContent,
    Ge = N.IteratorPlaceholderContent,
    Pt = i(function() {
        var m = z(function(u) {
            var l = u.model,
                e = u.controller,
                t = u.controller.idService,
                r = e.validationService,
                n = e.callContext(),
                a = q,
                s = M,
                g = {
                    props: u,
                    validateWidget: i(function(c) {
                        u.validateWidget(u, c)
                    }, "validateWidget")
                },
                o = l,
                y = B,
                I = J,
                f = W();
            return S.createElement("div", u.rootNodeProperties, S.createElement(v, {
                align: 0,
                animate: !1,
                style: "header-align",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: o
            }, S.createElement(v, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "height: 24px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "148.57px"
                },
                visible: l.getCachedValue(t.getId("Logo.Visible"), function() {
                    return C.isPhone$Action(n).isPhoneOut
                }),
                _idProps: {
                    service: t,
                    name: "Logo"
                },
                _widgetRecordProvider: o
            }, S.createElement(P, {
                extendedProperties: {
                    style: "height: 24px;"
                },
                gridProperties: {
                    width: "72px"
                },
                image: w.VersionedURL.getVersionedUrl("img/dashboard.logo_1_2.png"),
                type: 0,
                _idProps: {
                    service: t,
                    uuid: "2"
                },
                _widgetRecordProvider: o
            })), S.createElement(be, {
                getOwnerSpan: i(function() {
                    return f.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return f.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    IsFromSignup: !0
                },
                events: {
                    _handleError: i(function(c) {
                        e.handleError(c)
                    }, "_handleError"),
                    triggerLanguageSwticher$Action: i(function() {
                        var c = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                        e.triggerLanguageSwitcher$Action(e.callContext(c))
                    }, "triggerLanguageSwticher$Action")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: t,
                    uuid: "3",
                    alias: "1"
                },
                _widgetRecordProvider: o,
                placeholders: {
                    content: new Z(function() {
                        return [S.createElement(v, {
                            align: 0,
                            animate: !0,
                            style: "lang-switch",
                            visible: l.variables.showLanguageSwitcherIn && l.variables.languageSwitcherEnabledVar,
                            _idProps: {
                                service: t,
                                name: "Language"
                            },
                            _widgetRecordProvider: o,
                            visible_dataFetchStatus: H.calculateDataFetchStatus(l.variables._showLanguageSwitcherInDataFetchStatus)
                        }, S.createElement(v, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "5"
                            },
                            _widgetRecordProvider: o
                        }, S.createElement(P, {
                            image: w.VersionedURL.getVersionedUrl("img/dashboard.boldGlobe.svg"),
                            style: "globe",
                            type: 0,
                            _idProps: {
                                service: t,
                                uuid: "6"
                            },
                            _widgetRecordProvider: o
                        })), S.createElement(v, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "7"
                            },
                            _widgetRecordProvider: o
                        }, S.createElement(T, {
                            extendedProperties: {
                                style: "font-size: 14px; font-weight: 800;"
                            },
                            style: "lang",
                            value: l.variables.currentLanguageVar,
                            _idProps: {
                                service: t,
                                uuid: "8"
                            },
                            _widgetRecordProvider: o
                        })))]
                    })
                },
                _dependencies: [a(l.variables.currentLanguageVar), a(l.variables._showLanguageSwitcherInDataFetchStatus), a(l.variables.languageSwitcherEnabledVar), a(l.variables.showLanguageSwitcherIn)]
            })), S.createElement(K, {
                getOwnerSpan: i(function() {
                    return f.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return f.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Shape: te.shape.rounded
                },
                events: {
                    _handleError: i(function(c) {
                        e.handleError(c)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: t,
                    name: "LanguageSheet",
                    alias: "2"
                },
                _widgetRecordProvider: o,
                placeholders: {
                    topBar: new Z(function() {
                        return [S.createElement(v, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "display: flex; justify-content: center;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "10"
                            },
                            _widgetRecordProvider: o
                        }, S.createElement(ve, {
                            extendedProperties: {
                                style: "font-size: 20px; font-weight: 800;"
                            },
                            text: [I(s("69qUw+I_PEan1pUNeiDVbA#Value", "Language"))],
                            _idProps: {
                                service: t,
                                uuid: "11"
                            },
                            _widgetRecordProvider: o
                        }))]
                    }),
                    content: new Z(function() {
                        return [S.createElement(j, {
                            animateItems: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mode: 0,
                            source: l.variables.supportedLanguagesVar,
                            style: "list list-group language-list",
                            tag: "div",
                            _idProps: {
                                service: t,
                                uuid: "12"
                            },
                            _widgetRecordProvider: o,
                            placeholders: {
                                content: new Ge(function(c, p) {
                                    return [S.createElement(ae, {
                                        getOwnerSpan: i(function() {
                                            return f.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: i(function() {
                                            return f.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            Name: l.variables.supportedLanguagesVar.getCurrent(p.iterationContext).nameAttr,
                                            FromSignupLanguage: !0,
                                            IsSelected: R.getLanguage() === l.variables.supportedLanguagesVar.getCurrent(p.iterationContext).codeAttr
                                        },
                                        events: {
                                            _handleError: i(function(x) {
                                                e.handleError(x)
                                            }, "_handleError"),
                                            setLanguage$Action: i(function() {
                                                var x = typeof p != "undefined" && p !== null ? p.clone() : e.callContext().clone();
                                                e.setLanguage$Action(l.variables.supportedLanguagesVar.getCurrent(p.iterationContext).codeAttr, e.callContext(x))
                                            }, "setLanguage$Action")
                                        },
                                        _validationProps: {
                                            validationService: r
                                        },
                                        _idProps: {
                                            service: c,
                                            uuid: "13",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: o,
                                        _dependencies: []
                                    })]
                                }, n, t, "1")
                            },
                            _dependencies: [a(R.getLanguage())]
                        })]
                    })
                },
                _dependencies: [a(R.getLanguage()), a(l.variables.supportedLanguagesVar)]
            }), S.createElement(pe, {
                getOwnerSpan: i(function() {
                    return f.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return f.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HasOverlay: !0
                },
                events: {
                    _handleError: i(function(c) {
                        e.handleError(c)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: t,
                    name: "LanguageSwitcherSidebar",
                    alias: "4"
                },
                _widgetRecordProvider: o,
                placeholders: {
                    header: new Z(function() {
                        return [S.createElement(v, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: center; display: flex; justify-content: space-between;"
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "15"
                            },
                            _widgetRecordProvider: o
                        }, S.createElement(ve, {
                            extendedProperties: {
                                style: "font-size: 20px; font-weight: 800;"
                            },
                            text: [I(s("B8KB8hhzAEqzsi2No479Ig#Value", "Language"))],
                            _idProps: {
                                service: t,
                                uuid: "16"
                            },
                            _widgetRecordProvider: o
                        }), S.createElement(P, {
                            extendedEvents: {
                                onClick: i(function() {
                                    var c = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                    e.onCloseSidebar$Action(e.callContext(c))
                                }, "onClick")
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            image: w.VersionedURL.getVersionedUrl("img/dashboard.close_dark.svg"),
                            style: "cursor-pointer",
                            type: 0,
                            _idProps: {
                                service: t,
                                uuid: "17"
                            },
                            _widgetRecordProvider: o
                        }))]
                    }),
                    content: new Z(function() {
                        return [S.createElement(j, {
                            animateItems: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mode: 0,
                            source: l.variables.supportedLanguagesVar,
                            style: "list list-group language-list",
                            tag: "div",
                            _idProps: {
                                service: t,
                                uuid: "18"
                            },
                            _widgetRecordProvider: o,
                            placeholders: {
                                content: new Ge(function(c, p) {
                                    return [S.createElement(ae, {
                                        getOwnerSpan: i(function() {
                                            return f.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: i(function() {
                                            return f.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            Name: l.variables.supportedLanguagesVar.getCurrent(p.iterationContext).nameAttr,
                                            FromSignupLanguage: !0,
                                            IsSelected: R.getLanguage() === l.variables.supportedLanguagesVar.getCurrent(p.iterationContext).codeAttr
                                        },
                                        events: {
                                            _handleError: i(function(x) {
                                                e.handleError(x)
                                            }, "_handleError"),
                                            setLanguage$Action: i(function() {
                                                var x = typeof p != "undefined" && p !== null ? p.clone() : e.callContext().clone();
                                                e.setLanguage$Action(l.variables.supportedLanguagesVar.getCurrent(p.iterationContext).codeAttr, e.callContext(x))
                                            }, "setLanguage$Action")
                                        },
                                        _validationProps: {
                                            validationService: r
                                        },
                                        _idProps: {
                                            service: c,
                                            uuid: "19",
                                            alias: "5"
                                        },
                                        _widgetRecordProvider: o,
                                        _dependencies: []
                                    })]
                                }, n, t, "2")
                            },
                            _dependencies: [a(R.getLanguage())]
                        })]
                    })
                },
                _dependencies: [a(R.getLanguage()), a(l.variables.supportedLanguagesVar)]
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: i(function() {
                return {
                    codeFunction: "SignUpLayout",
                    functionKey: "f9149a7f-64fb-4efe-9100-8790fc68f488",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.SignUpLayout",
            modelFactory: qe,
            controllerFactory: Ke
        });
        return m.getCssDependencies = function() {
            return ["css/dashboard.Common.SignUpLayout.css", "css/OutSystemsReactWidgets.css"]
        }, m.getJsDependencies = function() {
            return []
        }, m.getBlocks = function() {
            return [be, K, ae, pe]
        }, m
    }, "componentFactory"),
    Ar = Pt();
var h = he(fe());
var _ = A,
    we = class we extends _.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("FilteredResidenceList", "filteredResidenceListVar", "FilteredResidenceList", !0, !1, _.DataTypes.DataTypes.Record, function() {
                return _.DataTypes.ImmutableBase.getData(new O)
            }, !1, O), this.attr("SearchedResidence", "searchedResidenceVar", "SearchedResidence", !0, !1, _.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("SortedResidenceList", "sortedResidenceListVar", "SortedResidenceList", !0, !1, _.DataTypes.DataTypes.Record, function() {
                return _.DataTypes.ImmutableBase.getData(new O)
            }, !1, O), this.attr("InputState", "inputStateVar", "InputState", !0, !1, _.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("CountryShortCode", "countryShortCodeVar", "CountryShortCode", !0, !1, _.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("ResidenceList", "residenceListVar", "ResidenceList", !0, !1, _.DataTypes.DataTypes.Record, function() {
                return _.DataTypes.ImmutableBase.getData(new O)
            }, !1, O), this.attr("is_phone_mode", "is_phone_modeVar", "is_phone_mode", !0, !1, _.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("email_or_phone", "email_or_phoneVar", "email_or_phone", !0, !1, _.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("PhoneCode", "phoneCodeVar", "PhoneCode", !0, !1, _.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("ContextHeader", "contextHeaderIn", "ContextHeader", !0, !1, _.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_contextHeaderInDataFetchStatus", "_contextHeaderInDataFetchStatus", "_contextHeaderInDataFetchStatus", !0, !1, _.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("DropDownTitle", "dropDownTitleIn", "DropDownTitle", !0, !1, _.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_dropDownTitleInDataFetchStatus", "_dropDownTitleInDataFetchStatus", "_dropDownTitleInDataFetchStatus", !0, !1, _.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("DropDownTopBar", "dropDownTopBarIn", "DropDownTopBar", !0, !1, _.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_dropDownTopBarInDataFetchStatus", "_dropDownTopBarInDataFetchStatus", "_dropDownTopBarInDataFetchStatus", !0, !1, _.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ErrorMessage", "errorMessageIn", "ErrorMessage", !0, !1, _.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_errorMessageInDataFetchStatus", "_errorMessageInDataFetchStatus", "_errorMessageInDataFetchStatus", !0, !1, _.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(_.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
i(we, "VariablesRecord");
var de = we;
de.init();
var Pe = class Pe extends _.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Input_InputState2: _.Model.ValidationWidgetRecord,
            InputEmailPhone2: _.Model.ValidationWidgetRecord,
            Input_SearchedItem: _.Model.ValidationWidgetRecord,
            Input_InputState: _.Model.ValidationWidgetRecord,
            InputEmailPhone: _.Model.ValidationWidgetRecord
        }
    }
};
i(Pe, "WidgetsRecord");
var Ae = Pe,
    Re = class Re extends _.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return de
        }
        static getWidgetsRecordConstructor() {
            return Ae
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(u) {
            "ContextHeader" in u && (this.variables.contextHeaderIn = u.ContextHeader, "_contextHeaderInDataFetchStatus" in u && (this.variables._contextHeaderInDataFetchStatus = u._contextHeaderInDataFetchStatus)), "DropDownTitle" in u && (this.variables.dropDownTitleIn = u.DropDownTitle, "_dropDownTitleInDataFetchStatus" in u && (this.variables._dropDownTitleInDataFetchStatus = u._dropDownTitleInDataFetchStatus)), "DropDownTopBar" in u && (this.variables.dropDownTopBarIn = u.DropDownTopBar, "_dropDownTopBarInDataFetchStatus" in u && (this.variables._dropDownTopBarInDataFetchStatus = u._dropDownTopBarInDataFetchStatus)), "ErrorMessage" in u && (this.variables.errorMessageIn = u.ErrorMessage, "_errorMessageInDataFetchStatus" in u && (this.variables._errorMessageInDataFetchStatus = u._errorMessageInDataFetchStatus))
        }
    };
i(Re, "Model");
var ce = Re;
ce._hasValidationWidgetsValue = void 0;
var Xe = new _.Model.ModelFactory(ce);
var Rt = {
        "eqtj3t2bVkqmRXVskoDlQw#ValueExpression.-374653993.1": "\u0623\u062F\u062E\u0644 \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
        "erbc_PlJJ0+S3HpQWIODEw#ValueExpression.-1822469688.1": "\u0628\u062D\u062B",
        "93mJ3qz0l0mAwxZL4I9zTg#Value": "\u0645\u0631\u0628\u0639 \u0627\u0644\u0628\u062D\u062B",
        "bKJP8SClu0evQUA0WVxadQ#ValueExpression.-374653993.1": "\u0623\u062F\u062E\u0644 \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A"
    },
    Vt = {
        "eqtj3t2bVkqmRXVskoDlQw#ValueExpression.-374653993.1": "\u0986\u09AA\u09A8\u09BE\u09B0 \u0987\u09AE\u09C7\u0987\u09B2 \u09B2\u09BF\u0996\u09C1\u09A8",
        "erbc_PlJJ0+S3HpQWIODEw#ValueExpression.-1822469688.1": "\u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8",
        "93mJ3qz0l0mAwxZL4I9zTg#Value": "\u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8 \u0987\u09A8\u09AA\u09C1\u099F",
        "bKJP8SClu0evQUA0WVxadQ#ValueExpression.-374653993.1": "\u0986\u09AA\u09A8\u09BE\u09B0 \u0987\u09AE\u09C7\u0987\u09B2 \u09B2\u09BF\u0996\u09C1\u09A8"
    },
    It = {
        "eqtj3t2bVkqmRXVskoDlQw#ValueExpression.-374653993.1": "Deine E-Mail eingeben",
        "erbc_PlJJ0+S3HpQWIODEw#ValueExpression.-1822469688.1": "Suche",
        "93mJ3qz0l0mAwxZL4I9zTg#Value": "Sucheingabe",
        "bKJP8SClu0evQUA0WVxadQ#ValueExpression.-374653993.1": "Deine E-Mail eingeben"
    },
    Ot = {
        "eqtj3t2bVkqmRXVskoDlQw#ValueExpression.-374653993.1": "Ingresa tu correo electr\xF3nico",
        "erbc_PlJJ0+S3HpQWIODEw#ValueExpression.-1822469688.1": "Buscar",
        "93mJ3qz0l0mAwxZL4I9zTg#Value": "Entrada de b\xFAsqueda",
        "bKJP8SClu0evQUA0WVxadQ#ValueExpression.-374653993.1": "Ingresa tu correo electr\xF3nico"
    },
    Lt = {
        "eqtj3t2bVkqmRXVskoDlQw#ValueExpression.-374653993.1": "Entrez votre email",
        "erbc_PlJJ0+S3HpQWIODEw#ValueExpression.-1822469688.1": "Recherche",
        "93mJ3qz0l0mAwxZL4I9zTg#Value": "Saisie de recherche",
        "bKJP8SClu0evQUA0WVxadQ#ValueExpression.-374653993.1": "Entrez votre email"
    },
    Tt = {
        "eqtj3t2bVkqmRXVskoDlQw#ValueExpression.-374653993.1": "Inserisci la tua email",
        "erbc_PlJJ0+S3HpQWIODEw#ValueExpression.-1822469688.1": "Cerca",
        "93mJ3qz0l0mAwxZL4I9zTg#Value": "Input di ricerca",
        "bKJP8SClu0evQUA0WVxadQ#ValueExpression.-374653993.1": "Inserisci la tua email"
    },
    Dt = {
        "eqtj3t2bVkqmRXVskoDlQw#ValueExpression.-374653993.1": "\u1794\u1789\u17D2\u1785\u17BC\u179B\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793\u17A2\u17CA\u17B8\u1798\u17C2\u179B\u179A\u1794\u179F\u17CB\u17A2\u17D2\u1793\u1780",
        "erbc_PlJJ0+S3HpQWIODEw#ValueExpression.-1822469688.1": "\u179F\u17D2\u179C\u17C2\u1784\u179A\u1780",
        "93mJ3qz0l0mAwxZL4I9zTg#Value": "\u1794\u1789\u17D2\u1785\u17BC\u179B\u1780\u17B6\u179A\u179F\u17D2\u179C\u17C2\u1784\u179A\u1780",
        "bKJP8SClu0evQUA0WVxadQ#ValueExpression.-374653993.1": "\u1794\u1789\u17D2\u1785\u17BC\u179B\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793\u17A2\u17CA\u17B8\u1798\u17C2\u179B\u179A\u1794\u179F\u17CB\u17A2\u17D2\u1793\u1780"
    },
    xt = {
        "eqtj3t2bVkqmRXVskoDlQw#ValueExpression.-374653993.1": "\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD558\uC138\uC694",
        "erbc_PlJJ0+S3HpQWIODEw#ValueExpression.-1822469688.1": "\uAC80\uC0C9",
        "93mJ3qz0l0mAwxZL4I9zTg#Value": "\uAC80\uC0C9 \uC785\uB825",
        "bKJP8SClu0evQUA0WVxadQ#ValueExpression.-374653993.1": "\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD558\uC138\uC694"
    },
    Ht = {
        "eqtj3t2bVkqmRXVskoDlQw#ValueExpression.-374653993.1": "\u0422\u0430\u043D\u044B\u0445 \u0438\u043C\u044D\u0439\u043B\u044D\u044D \u043E\u0440\u0443\u0443\u043B\u0430\u0432",
        "erbc_PlJJ0+S3HpQWIODEw#ValueExpression.-1822469688.1": "\u0425\u0430\u0439\u0445",
        "93mJ3qz0l0mAwxZL4I9zTg#Value": "\u0425\u0430\u0439\u043B\u0442 \u043E\u0440\u0443\u0443\u043B\u0430\u0445",
        "bKJP8SClu0evQUA0WVxadQ#ValueExpression.-374653993.1": "\u0422\u0430\u043D\u044B \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D \u0437\u0430\u0445\u0438\u0430 \u0445\u0430\u044F\u0433"
    },
    Nt = {
        "eqtj3t2bVkqmRXVskoDlQw#ValueExpression.-374653993.1": "Wpisz sw\xF3j e-mail",
        "erbc_PlJJ0+S3HpQWIODEw#ValueExpression.-1822469688.1": "Szukaj",
        "93mJ3qz0l0mAwxZL4I9zTg#Value": "Wprowadzenie wyszukiwania",
        "bKJP8SClu0evQUA0WVxadQ#ValueExpression.-374653993.1": "Wpisz sw\xF3j e-mail"
    },
    kt = {
        "eqtj3t2bVkqmRXVskoDlQw#ValueExpression.-374653993.1": "Insira o seu email",
        "erbc_PlJJ0+S3HpQWIODEw#ValueExpression.-1822469688.1": "Pesquisar",
        "93mJ3qz0l0mAwxZL4I9zTg#Value": "Entrada de pesquisa",
        "bKJP8SClu0evQUA0WVxadQ#ValueExpression.-374653993.1": "Insira o seu email"
    },
    Ut = {
        "eqtj3t2bVkqmRXVskoDlQw#ValueExpression.-374653993.1": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 email",
        "erbc_PlJJ0+S3HpQWIODEw#ValueExpression.-1822469688.1": "\u041F\u043E\u0438\u0441\u043A",
        "93mJ3qz0l0mAwxZL4I9zTg#Value": "\u041F\u043E\u043B\u0435 \u043F\u043E\u0438\u0441\u043A\u0430",
        "bKJP8SClu0evQUA0WVxadQ#ValueExpression.-374653993.1": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 email"
    },
    $t = {
        "eqtj3t2bVkqmRXVskoDlQw#ValueExpression.-374653993.1": "\u0D94\u0DB6\u0DDA \u0DC0\u0DD2\u0DAF\u0DCA\u0DBA\u0DD4\u0DAD\u0DCA \u0DAD\u0DD0\u0DB4\u0DD1\u0DBD \u0D87\u0DAD\u0DD4\u0DC5\u0DAD\u0DCA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
        "erbc_PlJJ0+S3HpQWIODEw#ValueExpression.-1822469688.1": "\u0DC3\u0DD9\u0DC0\u0DD3\u0DB8",
        "93mJ3qz0l0mAwxZL4I9zTg#Value": "\u0DC3\u0DD9\u0DC0\u0DD4\u0DB8\u0DCA \u0D86\u0DAF\u0DCF\u0DB1\u0DBA",
        "bKJP8SClu0evQUA0WVxadQ#ValueExpression.-374653993.1": "\u0D94\u0DB6\u0DDA \u0DC0\u0DD2\u0DAF\u0DCA\u0DBA\u0DD4\u0DAD\u0DCA \u0DAD\u0DD0\u0DB4\u0DD1\u0DBD \u0D87\u0DAD\u0DD4\u0DC5\u0DAD\u0DCA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1"
    },
    Ft = {
        "eqtj3t2bVkqmRXVskoDlQw#ValueExpression.-374653993.1": "Weka barua pepe yako",
        "erbc_PlJJ0+S3HpQWIODEw#ValueExpression.-1822469688.1": "Tafuta",
        "93mJ3qz0l0mAwxZL4I9zTg#Value": "Ingizo la utafutaji",
        "bKJP8SClu0evQUA0WVxadQ#ValueExpression.-374653993.1": "Weka barua pepe yako"
    },
    Wt = {
        "eqtj3t2bVkqmRXVskoDlQw#ValueExpression.-374653993.1": "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B87-\u0BAE\u0BC6\u0BAF\u0BBF\u0BB2\u0BCD \u0BA4\u0B9F\u0BCD\u0B9F\u0B9A\u0BCD\u0B9A\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BB5\u0BC1\u0BAE\u0BCD",
        "erbc_PlJJ0+S3HpQWIODEw#ValueExpression.-1822469688.1": "\u0B9A\u0BCB\u0BA4\u0BBF",
        "93mJ3qz0l0mAwxZL4I9zTg#Value": "\u0BA4\u0BCD \u0BA4\u0BC7\u0B9F\u0BC1 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1",
        "bKJP8SClu0evQUA0WVxadQ#ValueExpression.-374653993.1": "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAE\u0BBF\u0BA9\u0BCD\u0BA9\u0B9E\u0BCD\u0B9A\u0BB2\u0BC8 \u0B8E\u0BB4\u0BC1\u0BA4\u0BB5\u0BC1\u0BAE\u0BCD"
    },
    zt = {
        "eqtj3t2bVkqmRXVskoDlQw#ValueExpression.-374653993.1": "\u0E1B\u0E49\u0E2D\u0E19\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
        "erbc_PlJJ0+S3HpQWIODEw#ValueExpression.-1822469688.1": "\u0E04\u0E49\u0E19\u0E2B\u0E32",
        "93mJ3qz0l0mAwxZL4I9zTg#Value": "\u0E0A\u0E48\u0E2D\u0E07\u0E1B\u0E49\u0E2D\u0E19\u0E04\u0E33\u0E04\u0E49\u0E19\u0E2B\u0E32",
        "bKJP8SClu0evQUA0WVxadQ#ValueExpression.-374653993.1": "\u0E1B\u0E49\u0E2D\u0E19\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13"
    },
    Jt = {
        "eqtj3t2bVkqmRXVskoDlQw#ValueExpression.-374653993.1": "E-posta adresinizi girin",
        "erbc_PlJJ0+S3HpQWIODEw#ValueExpression.-1822469688.1": "Ara",
        "93mJ3qz0l0mAwxZL4I9zTg#Value": "Arama giri\u015Fi",
        "bKJP8SClu0evQUA0WVxadQ#ValueExpression.-374653993.1": "E-posta adresinizi girin"
    },
    Bt = {
        "eqtj3t2bVkqmRXVskoDlQw#ValueExpression.-374653993.1": "Emailingizni kiriting",
        "erbc_PlJJ0+S3HpQWIODEw#ValueExpression.-1822469688.1": "Qidirish",
        "93mJ3qz0l0mAwxZL4I9zTg#Value": "Qidiruv maydoni",
        "bKJP8SClu0evQUA0WVxadQ#ValueExpression.-374653993.1": "Emailingizni kiriting"
    },
    qt = {
        "eqtj3t2bVkqmRXVskoDlQw#ValueExpression.-374653993.1": "Emailingizni kiriting",
        "erbc_PlJJ0+S3HpQWIODEw#ValueExpression.-1822469688.1": "Qidirish",
        "93mJ3qz0l0mAwxZL4I9zTg#Value": "Qidiruv maydoni",
        "bKJP8SClu0evQUA0WVxadQ#ValueExpression.-374653993.1": "Emailingizni kiriting"
    },
    Mt = {
        "eqtj3t2bVkqmRXVskoDlQw#ValueExpression.-374653993.1": "Nh\u1EADp email c\u1EE7a b\u1EA1n",
        "erbc_PlJJ0+S3HpQWIODEw#ValueExpression.-1822469688.1": "T\xECm ki\u1EBFm",
        "93mJ3qz0l0mAwxZL4I9zTg#Value": "\xD4 t\xECm ki\u1EBFm",
        "bKJP8SClu0evQUA0WVxadQ#ValueExpression.-374653993.1": "Nh\u1EADp email c\u1EE7a b\u1EA1n"
    },
    Qt = {
        "eqtj3t2bVkqmRXVskoDlQw#ValueExpression.-374653993.1": "\u8F93\u5165\u60A8\u7684\u7535\u5B50\u90AE\u4EF6",
        "erbc_PlJJ0+S3HpQWIODEw#ValueExpression.-1822469688.1": "\u641C\u7D22",
        "93mJ3qz0l0mAwxZL4I9zTg#Value": "\u641C\u7D22\u8F93\u5165",
        "bKJP8SClu0evQUA0WVxadQ#ValueExpression.-374653993.1": "\u8F93\u5165\u60A8\u7684\u7535\u5B50\u90AE\u4EF6"
    },
    Kt = {
        "eqtj3t2bVkqmRXVskoDlQw#ValueExpression.-374653993.1": "\u8F38\u5165\u60A8\u7684\u96FB\u5B50\u90F5\u4EF6",
        "erbc_PlJJ0+S3HpQWIODEw#ValueExpression.-1822469688.1": "\u641C\u5C0B",
        "93mJ3qz0l0mAwxZL4I9zTg#Value": "\u641C\u5C0B\u8F38\u5165",
        "bKJP8SClu0evQUA0WVxadQ#ValueExpression.-374653993.1": "\u8F38\u5165\u60A8\u7684\u96FB\u5B50\u90F5\u4EF6"
    },
    Gt = {
        "erbc_PlJJ0+S3HpQWIODEw#ValueExpression.-1822469688.1": "Qidirish",
        "93mJ3qz0l0mAwxZL4I9zTg#Value": "Qidirish maydoni"
    },
    Ye = {
        "ar-001": {
            translations: Rt,
            isRTL: !0
        },
        "bn-BD": {
            translations: Vt,
            isRTL: !1
        },
        "de-DE": {
            translations: It,
            isRTL: !1
        },
        "es-ES": {
            translations: Ot,
            isRTL: !1
        },
        "fr-FR": {
            translations: Lt,
            isRTL: !1
        },
        "it-IT": {
            translations: Tt,
            isRTL: !1
        },
        "km-KH": {
            translations: Dt,
            isRTL: !1
        },
        "ko-KR": {
            translations: xt,
            isRTL: !1
        },
        "mn-MN": {
            translations: Ht,
            isRTL: !1
        },
        "pl-PL": {
            translations: Nt,
            isRTL: !1
        },
        "pt-PT": {
            translations: kt,
            isRTL: !1
        },
        "ru-RU": {
            translations: Ut,
            isRTL: !1
        },
        "si-LK": {
            translations: $t,
            isRTL: !1
        },
        "sw-KE": {
            translations: Ft,
            isRTL: !1
        },
        "ta-IN": {
            translations: Wt,
            isRTL: !1
        },
        "th-TH": {
            translations: zt,
            isRTL: !1
        },
        "tr-TR": {
            translations: Jt,
            isRTL: !1
        },
        "uz-Latn-UZ": {
            translations: Bt,
            isRTL: !1
        },
        "uz-UZ": {
            translations: qt,
            isRTL: !1
        },
        "vi-VN": {
            translations: Mt,
            isRTL: !1
        },
        "zh-CN": {
            translations: Qt,
            isRTL: !1
        },
        "zh-TW": {
            translations: Kt,
            isRTL: !1
        },
        "uz-Latn": {
            translations: Gt,
            isRTL: !1
        }
    };

function Ve(m, u, l, e) {
    var a, s, g;
    let t = JSON.parse((a = m.ResidenceList) != null ? a : JSON.stringify({})),
        r = ((s = m.SearchedResidence) != null ? s : "").toLowerCase(),
        n = JSON.stringify($e(Ue({}, t), {
            data: ((g = t.data) != null ? g : []).filter(o => !!(typeof o.name == "string" && o.name.toLowerCase().includes(r) || Array.isArray(o.country_calling_codes) && o.country_calling_codes.some(y => (y != null ? y : "").toLowerCase().includes(r))))
        }));
    m.FilteredResidenceList = n
}
i(Ve, "default");

function Ie(m, u, l, e) {
    m.is_phone_mode = !1
}
i(Ie, "default");

function Oe(m, u, l, e) {
    var t = m.ErrorMessage,
        r = m.WidgetID;
    t ? e.Validation.setWidgetAsInvalid(r, t) : (m.ErrorMessage = "", e.Validation.setWidgetAsValid(r))
}
i(Oe, "default");

function Le(m, u, l, e) {
    var t = m.ErrorMessage,
        r = m.WidgetID;
    t ? e.Validation.setWidgetAsInvalid(r, t) : (m.ErrorMessage = "", e.Validation.setWidgetAsValid(r))
}
i(Le, "default");
var d = A; {
    let u = class u extends d.Controller.BaseViewController {
        constructor(e, t, r) {
            super(e, t, r, Ye);
            var n = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onSearch$Action() {
            return this.hasOwnProperty("__onSearch$Action") || (this.__onSearch$Action = function(e, t) {
                var r = this.model,
                    n = this.controller,
                    a = this.idService;
                return d.Logger.startActiveSpan("OnSearch", function(s) {
                    s && (s.setAttribute("code.function", "OnSearch"), s.setAttribute("outsystems.function.key", "1f3efc81-d42e-4215-a7e6-315176bc5f16"), s.setAttribute("outsystems.function.owner.name", "dashboard"), s.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnSearch"), t = n.callContext(t);
                        var g = new d.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("dashboard.Common.Email_Phone.OnSearch$vars")));
                        g.value.searchedItemArgInLocal = e;
                        var o = new d.DataTypes.VariableHolder,
                            y = new d.DataTypes.VariableHolder(new d.DataTypes.JSONSerializeOutputType),
                            I = new d.DataTypes.VariableHolder(new(d.Controller.BaseController.getJSONDeserializeOutputType(O)));
                        y.value.jSONOut = d.JSONUtils.serializeToJSON(r.variables.residenceListVar, !1, !1), d.BuiltinFunctions.length(g.value.searchedItemArgInLocal) > 0 ? (o.value = d.Logger.startActiveSpan("SearchCountry", function(f) {
                            f && (f.setAttribute("code.function", "SearchCountry"), f.setAttribute("outsystems.function.key", "acf139e0-f45b-4a63-8918-f0ff9f27b98d"), f.setAttribute("outsystems.function.owner.name", "dashboard"), f.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return n.safeExecuteJSNode(Ve, "SearchCountry", "OnSearch", {
                                    SearchedResidence: d.DataConversion.JSNodeParamConverter.to(g.value.searchedItemArgInLocal, d.DataTypes.DataTypes.Text),
                                    ResidenceList: d.DataConversion.JSNodeParamConverter.to(y.value.jSONOut, d.DataTypes.DataTypes.Text),
                                    FilteredResidenceList: d.DataConversion.JSNodeParamConverter.to("", d.DataTypes.DataTypes.Text)
                                }, function(c) {
                                    var p = new(n.constructor.getVariableGroupType("dashboard.Common.Email_Phone.OnSearch$searchCountryJSResult"));
                                    return p.filteredResidenceListOut = d.DataConversion.JSNodeParamConverter.from(c.FilteredResidenceList, d.DataTypes.DataTypes.Text), p
                                }, {}, {})
                            } finally {
                                f && f.end()
                            }
                        }, 1), I.value.dataOut = d.JSONUtils.deserializeFromJSON(o.value.filteredResidenceListOut, O, !1), r.variables.filteredResidenceListVar = I.value.dataOut) : r.variables.filteredResidenceListVar = r.variables.sortedResidenceListVar
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__onSearch$Action
        }
        set _onSearch$Action(e) {
            this.__onSearch$Action = e
        }
        get _input_FieldValueOnChange$Action() {
            return this.hasOwnProperty("__input_FieldValueOnChange$Action") || (this.__input_FieldValueOnChange$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return d.Logger.startActiveSpan("Input_FieldValueOnChange", function(a) {
                    return a && (a.setAttribute("code.function", "Input_FieldValueOnChange"), a.setAttribute("outsystems.function.key", "3a5dd0d2-b862-454a-bd38-950e4ab5c6ee"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                        return r.ensureControllerAlive("Input_FieldValueOnChange"), e = r.callContext(e), d.Flow.executeAsyncFlow(function() {
                            return r.fieldValueChangeEvent$Action(t.variables.email_or_phoneVar, t.variables.is_phone_modeVar, e)
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__input_FieldValueOnChange$Action
        }
        set _input_FieldValueOnChange$Action(e) {
            this.__input_FieldValueOnChange$Action = e
        }
        get _input_phone3OnChange$Action() {
            return this.hasOwnProperty("__input_phone3OnChange$Action") || (this.__input_phone3OnChange$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return d.Logger.startActiveSpan("Input_phone3OnChange", function(a) {
                    return a && (a.setAttribute("code.function", "Input_phone3OnChange"), a.setAttribute("outsystems.function.key", "3c588dcd-5be4-4c17-859e-c1c256f26ecb"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                        return r.ensureControllerAlive("Input_phone3OnChange"), e = r.callContext(e), d.Flow.executeAsyncFlow(function() {
                            return r._checkIfPhoneInput$Action(t.variables.email_or_phoneVar, e), r._input_FieldValueOnChange$Action(e)
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__input_phone3OnChange$Action
        }
        set _input_phone3OnChange$Action(e) {
            this.__input_phone3OnChange$Action = e
        }
        get _buttonOnClick$Action() {
            return this.hasOwnProperty("__buttonOnClick$Action") || (this.__buttonOnClick$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return d.Logger.startActiveSpan("ButtonOnClick", function(a) {
                    a && (a.setAttribute("code.function", "ButtonOnClick"), a.setAttribute("outsystems.function.key", "5ca6f4bf-eb1c-417e-9ceb-29e954485fa6"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("ButtonOnClick"), e = r.callContext(e);
                        var s = new d.DataTypes.VariableHolder;
                        s.value = C.bottomSheetOpen$Action(n.getId("Bottomsheet"), e)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__buttonOnClick$Action
        }
        set _buttonOnClick$Action(e) {
            this.__buttonOnClick$Action = e
        }
        get _checkIfPhoneInput$Action() {
            return this.hasOwnProperty("__checkIfPhoneInput$Action") || (this.__checkIfPhoneInput$Action = function(e, t) {
                var r = this.model,
                    n = this.controller,
                    a = this.idService;
                return d.Logger.startActiveSpan("CheckIfPhoneInput", function(s) {
                    s && (s.setAttribute("code.function", "CheckIfPhoneInput"), s.setAttribute("outsystems.function.key", "5f8fa549-582d-457a-a537-03f11826aec7"), s.setAttribute("outsystems.function.owner.name", "dashboard"), s.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("CheckIfPhoneInput"), t = n.callContext(t);
                        var g = new d.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("dashboard.Common.Email_Phone.CheckIfPhoneInput$vars")));
                        g.value.inputtextInLocal = e;
                        var o = new d.DataTypes.VariableHolder;
                        o.value = d.Logger.startActiveSpan("JavaScript1", function(y) {
                            y && (y.setAttribute("code.function", "JavaScript1"), y.setAttribute("outsystems.function.key", "909caaf3-f4f4-4a1a-bb5e-df4b23462a2c"), y.setAttribute("outsystems.function.owner.name", "dashboard"), y.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), y.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return n.safeExecuteJSNode(Ie, "JavaScript1", "CheckIfPhoneInput", {
                                    inputtext: d.DataConversion.JSNodeParamConverter.to(g.value.inputtextInLocal, d.DataTypes.DataTypes.Text),
                                    is_phone_mode: d.DataConversion.JSNodeParamConverter.to(!1, d.DataTypes.DataTypes.Boolean)
                                }, function(I) {
                                    var f = new(n.constructor.getVariableGroupType("dashboard.Common.Email_Phone.CheckIfPhoneInput$javaScript1JSResult"));
                                    return f.is_phone_modeOut = d.DataConversion.JSNodeParamConverter.from(I.is_phone_mode, d.DataTypes.DataTypes.Boolean), f
                                }, {}, {})
                            } finally {
                                y && y.end()
                            }
                        }, 1), r.variables.is_phone_modeVar = o.value.is_phone_modeOut
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__checkIfPhoneInput$Action
        }
        set _checkIfPhoneInput$Action(e) {
            this.__checkIfPhoneInput$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return d.Logger.startActiveSpan("OnReady", function(a) {
                    return a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "9f7c93f6-1621-4d60-b905-660fbff49e47"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                        r.ensureControllerAlive("OnReady"), e = r.callContext(e);
                        var s = new d.DataTypes.VariableHolder,
                            g = new d.DataTypes.VariableHolder;
                        return d.Flow.executeAsyncFlow(function() {
                            return t.flush(), L.gET_Countries$Action("", e).then(function(o) {
                                g.value = o
                            }).then(function() {
                                return t.variables.filteredResidenceListVar = g.value.responseOut, t.variables.residenceListVar = t.variables.filteredResidenceListVar, t.variables.phoneCodeVar = "", t.variables.is_phone_modeVar = !1, t.variables.email_or_phoneVar = "", t.variables.sortedResidenceListVar = t.variables.filteredResidenceListVar, r.inputEvent$Action(n.getId("InputEmailPhone"), e)
                            }).then(function() {
                                s.value = C.setFocus$Action(n.getId("InputEmailPhone"), e)
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _bottomSheetOnClickCountry$Action() {
            return this.hasOwnProperty("__bottomSheetOnClickCountry$Action") || (this.__bottomSheetOnClickCountry$Action = function(e, t, r, n) {
                var a = this.model,
                    s = this.controller,
                    g = this.idService;
                return d.Logger.startActiveSpan("BottomSheetOnClickCountry", function(o) {
                    return o && (o.setAttribute("code.function", "BottomSheetOnClickCountry"), o.setAttribute("outsystems.function.key", "c762bf2f-a271-4d44-b748-d30e931175b6"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                        s.ensureControllerAlive("BottomSheetOnClickCountry"), n = s.callContext(n);
                        var y = new d.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("dashboard.Common.Email_Phone.BottomSheetOnClickCountry$vars")));
                        y.value.residenceInLocal = e, y.value.shortCodeInLocal = t, y.value.dialingCode2InLocal = r;
                        var I = new d.DataTypes.VariableHolder;
                        return d.Flow.executeAsyncFlow(function() {
                            return a.variables.inputStateVar = y.value.residenceInLocal, a.variables.countryShortCodeVar = y.value.shortCodeInLocal, a.variables.errorMessageIn = "", a.variables.phoneCodeVar = y.value.dialingCode2InLocal, s._onParametersChanged$Action(n), s.dialingEvent$Action(y.value.dialingCode2InLocal, n).then(function() {
                                I.value = C.bottomSheetClose$Action(g.getId("Bottomsheet"), n)
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__bottomSheetOnClickCountry$Action
        }
        set _bottomSheetOnClickCountry$Action(e) {
            this.__bottomSheetOnClickCountry$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return d.Logger.startActiveSpan("OnParametersChanged", function(a) {
                    a && (a.setAttribute("code.function", "OnParametersChanged"), a.setAttribute("outsystems.function.key", "dcf97788-90a3-4353-bdef-6cfdbff52587"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnParametersChanged"), e = r.callContext(e), C.isDesktop$Action(e).isDesktopOut ? d.Logger.startActiveSpan("ValidateCountry2", function(s) {
                            s && (s.setAttribute("code.function", "ValidateCountry2"), s.setAttribute("outsystems.function.key", "199e7314-ee23-4e87-bd1d-bdb86c5506c1"), s.setAttribute("outsystems.function.owner.name", "dashboard"), s.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(Oe, "ValidateCountry2", "OnParametersChanged", {
                                    ErrorMessage: d.DataConversion.JSNodeParamConverter.to(t.variables.errorMessageIn, d.DataTypes.DataTypes.Text),
                                    WidgetID: d.DataConversion.JSNodeParamConverter.to(n.getId("InputEmailPhone2"), d.DataTypes.DataTypes.Text)
                                }, function(g) {}, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1) : d.Logger.startActiveSpan("ValidateCountry", function(s) {
                            s && (s.setAttribute("code.function", "ValidateCountry"), s.setAttribute("outsystems.function.key", "5b2d1d90-4a03-4253-9ea3-9079c42eb7c7"), s.setAttribute("outsystems.function.owner.name", "dashboard"), s.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(Le, "ValidateCountry", "OnParametersChanged", {
                                    ErrorMessage: d.DataConversion.JSNodeParamConverter.to(t.variables.errorMessageIn, d.DataTypes.DataTypes.Text),
                                    WidgetID: d.DataConversion.JSNodeParamConverter.to(n.getId("InputEmailPhone"), d.DataTypes.DataTypes.Text)
                                }, function(g) {}, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        onSearch$Action(e, t) {
            var r = this.controller;
            return d.Logger.startActiveSpan("OnSearch__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnSearch"), n.setAttribute("outsystems.function.key", "1f3efc81-d42e-4215-a7e6-315176bc5f16"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onSearch$Action, t, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        input_FieldValueOnChange$Action(e) {
            var t = this.controller;
            return d.Logger.startActiveSpan("Input_FieldValueOnChange__proxy", function(r) {
                return r && (r.setAttribute("code.function", "Input_FieldValueOnChange"), r.setAttribute("outsystems.function.key", "3a5dd0d2-b862-454a-bd38-950e4ab5c6ee"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._input_FieldValueOnChange$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        input_phone3OnChange$Action(e) {
            var t = this.controller;
            return d.Logger.startActiveSpan("Input_phone3OnChange__proxy", function(r) {
                return r && (r.setAttribute("code.function", "Input_phone3OnChange"), r.setAttribute("outsystems.function.key", "3c588dcd-5be4-4c17-859e-c1c256f26ecb"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._input_phone3OnChange$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        buttonOnClick$Action(e) {
            var t = this.controller;
            return d.Logger.startActiveSpan("ButtonOnClick__proxy", function(r) {
                r && (r.setAttribute("code.function", "ButtonOnClick"), r.setAttribute("outsystems.function.key", "5ca6f4bf-eb1c-417e-9ceb-29e954485fa6"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._buttonOnClick$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        checkIfPhoneInput$Action(e, t) {
            var r = this.controller;
            return d.Logger.startActiveSpan("CheckIfPhoneInput__proxy", function(n) {
                n && (n.setAttribute("code.function", "CheckIfPhoneInput"), n.setAttribute("outsystems.function.key", "5f8fa549-582d-457a-a537-03f11826aec7"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._checkIfPhoneInput$Action, t, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return d.Logger.startActiveSpan("OnReady__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "9f7c93f6-1621-4d60-b905-660fbff49e47"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        bottomSheetOnClickCountry$Action(e, t, r, n) {
            var a = this.controller;
            return d.Logger.startActiveSpan("BottomSheetOnClickCountry__proxy", function(s) {
                return s && (s.setAttribute("code.function", "BottomSheetOnClickCountry"), s.setAttribute("outsystems.function.key", "c762bf2f-a271-4d44-b748-d30e931175b6"), s.setAttribute("outsystems.function.owner.name", "dashboard"), s.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._bottomSheetOnClickCountry$Action, n, e, t, r)
                }, function() {
                    s && s.end()
                })
            }, 0)
        }
        onParametersChanged$Action(e) {
            var t = this.controller;
            return d.Logger.startActiveSpan("OnParametersChanged__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "dcf97788-90a3-4353-bdef-6cfdbff52587"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onParametersChanged$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        get fieldValueChangeEvent$Action() {
            return this.hasOwnProperty("_fieldValueChangeEvent$Action") || (this._fieldValueChangeEvent$Action = function() {
                return Promise.resolve()
            }), this._fieldValueChangeEvent$Action
        }
        set fieldValueChangeEvent$Action(e) {
            this._fieldValueChangeEvent$Action = e
        }
        get inputEvent$Action() {
            return this.hasOwnProperty("_inputEvent$Action") || (this._inputEvent$Action = function() {
                return Promise.resolve()
            }), this._inputEvent$Action
        }
        set inputEvent$Action(e) {
            this._inputEvent$Action = e
        }
        get dialingEvent$Action() {
            return this.hasOwnProperty("_dialingEvent$Action") || (this._dialingEvent$Action = function() {
                return Promise.resolve()
            }), this._dialingEvent$Action
        }
        set dialingEvent$Action(e) {
            this._dialingEvent$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var t = this.controller,
                    r = this.model,
                    n = this.idService;
                return t.onReady$Action(e)
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
                var t = this.controller,
                    r = this.model,
                    n = this.idService;
                return t.onParametersChanged$Action(e)
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
            return L.defaultTimeout
        }
    };
    i(u, "ControllerInner");
    let m = u;
    U = m, U.registerVariableGroupType("dashboard.Common.Email_Phone.OnSearch$vars", [{
        name: "SearchedItemArg",
        attrName: "searchedItemArgInLocal",
        mandatory: !0,
        dataType: d.DataTypes.DataTypes.Text,
        defaultValue: i(function() {
            return ""
        }, "defaultValue")
    }]), U.registerVariableGroupType("dashboard.Common.Email_Phone.OnSearch$searchCountryJSResult", [{
        name: "FilteredResidenceList",
        attrName: "filteredResidenceListOut",
        mandatory: !0,
        dataType: d.DataTypes.DataTypes.Text,
        defaultValue: i(function() {
            return ""
        }, "defaultValue")
    }]), U.registerVariableGroupType("dashboard.Common.Email_Phone.CheckIfPhoneInput$vars", [{
        name: "inputtext",
        attrName: "inputtextInLocal",
        mandatory: !0,
        dataType: d.DataTypes.DataTypes.Text,
        defaultValue: i(function() {
            return ""
        }, "defaultValue")
    }]), U.registerVariableGroupType("dashboard.Common.Email_Phone.CheckIfPhoneInput$javaScript1JSResult", [{
        name: "is_phone_mode",
        attrName: "is_phone_modeOut",
        mandatory: !0,
        dataType: d.DataTypes.DataTypes.Boolean,
        defaultValue: i(function() {
            return !1
        }, "defaultValue")
    }]), U.registerVariableGroupType("dashboard.Common.Email_Phone.BottomSheetOnClickCountry$vars", [{
        name: "Residence",
        attrName: "residenceInLocal",
        mandatory: !1,
        dataType: d.DataTypes.DataTypes.Text,
        defaultValue: i(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "ShortCode",
        attrName: "shortCodeInLocal",
        mandatory: !0,
        dataType: d.DataTypes.DataTypes.Text,
        defaultValue: i(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "DialingCode2",
        attrName: "dialingCode2InLocal",
        mandatory: !0,
        dataType: d.DataTypes.DataTypes.Text,
        defaultValue: i(function() {
            return ""
        }, "defaultValue")
    }])
}
var U, et = new d.Controller.ControllerFactory(U, F);
var D = N.PlaceholderContent,
    jt = N.IteratorPlaceholderContent,
    Zt = i(function() {
        var m = z(function(u) {
            var l = u.model,
                e = u.controller,
                t = u.controller.idService,
                r = e.validationService,
                n = e.callContext(),
                a = q,
                s = M,
                g = {
                    props: u,
                    validateWidget: i(function(c) {
                        u.validateWidget(u, c)
                    }, "validateWidget")
                },
                o = l,
                y = B,
                I = J,
                f = W();
            return h.createElement("div", u.rootNodeProperties, h.createElement(v, {
                align: 0,
                animate: !0,
                visible: l.getCachedValue(t.getId("DhY4yR98KUCz64q+OI9Rsg.Visible"), function() {
                    return !C.isPhone$Action(n).isPhoneOut
                }),
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: o
            }, h.createElement(v, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "1"
                },
                _widgetRecordProvider: o
            }, h.createElement(re, {
                extendedProperties: {
                    style: "font-family: 'Inter', Arial, sans-serif; font-size: 0.875rem; font-style: normal; font-weight: 400; letter-spacing: 0; line-height: 1.25rem;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: t,
                    name: "Label2"
                },
                _widgetRecordProvider: o
            }, h.createElement(T, {
                value: l.variables.contextHeaderIn,
                _idProps: {
                    service: t,
                    uuid: "3"
                },
                _widgetRecordProvider: o,
                value_dataFetchStatus: H.calculateDataFetchStatus(l.variables._contextHeaderInDataFetchStatus)
            })), h.createElement(v, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "gap: 8px;"
                },
                style: "full-width display-flex",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "PhoneOrEmail5"
                },
                _widgetRecordProvider: o
            }, h.createElement(v, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline"
                },
                style: "phone_dropdown",
                visible: !1,
                _idProps: {
                    service: t,
                    uuid: "5"
                },
                _widgetRecordProvider: o
            }, h.createElement(ne, {
                getOwnerSpan: i(function() {
                    return f.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return f.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    AlignIconRight: !0
                },
                events: {
                    _handleError: i(function(c) {
                        e.handleError(c)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: t,
                    uuid: "6",
                    alias: "1"
                },
                _widgetRecordProvider: o,
                placeholders: {
                    icon: new D(function() {
                        return [h.createElement(P, {
                            extendedEvents: {
                                onClick: i(function() {
                                    var c = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                    e.buttonOnClick$Action(e.callContext(c))
                                }, "onClick")
                            },
                            image: w.VersionedURL.getVersionedUrl("img/dashboard.iconchevron5.svg"),
                            style: "cursor-pointer",
                            type: 0,
                            _idProps: {
                                service: t,
                                uuid: "7"
                            },
                            _widgetRecordProvider: o
                        })]
                    }),
                    input: new D(function() {
                        return [h.createElement(Q, {
                            _validationProps: {
                                validationService: r
                            },
                            enabled: !0,
                            extendedEvents: {
                                onClick: i(function() {
                                    var c = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                    e.buttonOnClick$Action(e.callContext(c))
                                }, "onClick")
                            },
                            extendedProperties: {
                                readOnly: "True",
                                style: "font-size: 14px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 0,
                            mandatory: !1,
                            maxLength: 50,
                            prompt: l.variables.dropDownTitleIn,
                            style: "form-control",
                            variable: l.createVariable($.DataTypes.Text, l.variables.phoneCodeVar, function(c) {
                                l.variables.phoneCodeVar = c
                            }),
                            _idProps: {
                                service: t,
                                name: "Input_InputState2"
                            },
                            _widgetRecordProvider: o,
                            prompt_dataFetchStatus: H.calculateDataFetchStatus(l.variables._dropDownTitleInDataFetchStatus)
                        })]
                    })
                },
                _dependencies: [a(l.variables._dropDownTitleInDataFetchStatus), a(l.variables.dropDownTitleIn), a(l.variables.phoneCodeVar)]
            })), h.createElement(v, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-self: stretch; display: flex; flex-direction: column; gap: 4px;"
                },
                style: "full-width",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "9"
                },
                _widgetRecordProvider: o
            }, h.createElement(Q, {
                _validationProps: {
                    validationService: r
                },
                enabled: !0,
                extendedProperties: {
                    autoComplete: "False",
                    style: "height: 47px;"
                },
                inputType: 0,
                mandatory: !0,
                maxLength: 100,
                onChange: i(function() {
                    return Promise.resolve().then(function() {
                        var c = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                        return e.input_phone3OnChange$Action(e.callContext(c))
                    })
                }, "onChange"),
                prompt: Y.resolve(ee.TranslationsService).getMessage("bKJP8SClu0evQUA0WVxadQ#ValueExpression.-374653993.1", "Enter your email"),
                style: "form-control font-size-base full-width",
                variable: l.createVariable($.DataTypes.Text, l.variables.email_or_phoneVar, function(c) {
                    l.variables.email_or_phoneVar = c
                }),
                _idProps: {
                    service: t,
                    name: "InputEmailPhone2"
                },
                _widgetRecordProvider: o
            })))), h.createElement(v, {
                align: 0,
                animate: !1,
                visible: !1,
                _idProps: {
                    service: t,
                    uuid: "11"
                },
                _widgetRecordProvider: o
            }, h.createElement(K, {
                getOwnerSpan: i(function() {
                    return f.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return f.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Shape: te.shape.rounded,
                    ExtendedClass: "display-flex flex-direction-column gap-s"
                },
                events: {
                    _handleError: i(function(c) {
                        e.handleError(c)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: t,
                    name: "Bottomsheet",
                    alias: "2"
                },
                _widgetRecordProvider: o,
                placeholders: {
                    topBar: new D(function() {
                        return [h.createElement(T, {
                            extendedProperties: {
                                style: "font-family: var(--core-fontFamily-inter, 'Inter', system-ui, Arial, sans-serif); font-size: 20px; font-weight: 800; Height: 28px;"
                            },
                            gridProperties: {
                                width: "246px"
                            },
                            value: l.variables.dropDownTopBarIn,
                            _idProps: {
                                service: t,
                                uuid: "13"
                            },
                            _widgetRecordProvider: o,
                            value_dataFetchStatus: H.calculateDataFetchStatus(l.variables._dropDownTopBarInDataFetchStatus)
                        }), h.createElement(v, {
                            align: 0,
                            animate: !1,
                            style: "margin-top-s",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "14"
                            },
                            _widgetRecordProvider: o
                        }, h.createElement(_e, {
                            getOwnerSpan: i(function() {
                                return f.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: i(function() {
                                return f.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: i(function(c) {
                                    e.handleError(c)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: t,
                                uuid: "15",
                                alias: "3"
                            },
                            _widgetRecordProvider: o,
                            placeholders: {
                                input: new D(function() {
                                    return [h.createElement(re, {
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "wcag-hide-text",
                                        _idProps: {
                                            service: t,
                                            uuid: "16"
                                        },
                                        _widgetRecordProvider: o
                                    }, I(s("93mJ3qz0l0mAwxZL4I9zTg#Value", "Search input")), h.createElement(T, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        value: l.variables.dropDownTitleIn,
                                        _idProps: {
                                            service: t,
                                            uuid: "17"
                                        },
                                        _widgetRecordProvider: o,
                                        value_dataFetchStatus: H.calculateDataFetchStatus(l.variables._dropDownTitleInDataFetchStatus)
                                    })), h.createElement(Q, {
                                        _validationProps: {
                                            validationService: r
                                        },
                                        enabled: !0,
                                        extendedProperties: {
                                            style: "font-size: 14px; height: 32px; margin-bottom: 5px;"
                                        },
                                        gridProperties: {
                                            width: "340px"
                                        },
                                        inputType: 8,
                                        mandatory: !1,
                                        maxLength: 0,
                                        onChange: i(function() {
                                            var c = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                            e.onSearch$Action(l.variables.searchedResidenceVar, e.callContext(c))
                                        }, "onChange"),
                                        prompt: Y.resolve(ee.TranslationsService).getMessage("erbc_PlJJ0+S3HpQWIODEw#ValueExpression.-1822469688.1", "Search"),
                                        style: "form-control",
                                        variable: l.createVariable($.DataTypes.Text, l.variables.searchedResidenceVar, function(c) {
                                            l.variables.searchedResidenceVar = c
                                        }),
                                        _idProps: {
                                            service: t,
                                            name: "Input_SearchedItem"
                                        },
                                        _widgetRecordProvider: o
                                    })]
                                })
                            },
                            _dependencies: [a(l.variables.searchedResidenceVar), a(l.variables._dropDownTitleInDataFetchStatus), a(l.variables.dropDownTitleIn)]
                        }))]
                    }),
                    content: new D(function() {
                        return [h.createElement(j, {
                            animateItems: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mode: 0,
                            source: l.variables.filteredResidenceListVar.dataAttr,
                            style: "list list-group residence-list ",
                            tag: "div",
                            _idProps: {
                                service: t,
                                uuid: "19"
                            },
                            _widgetRecordProvider: o,
                            placeholders: {
                                content: new jt(function(c, p) {
                                    return [h.createElement(Fe, {
                                        extendedProperties: {
                                            style: "cursor: pointer; height: fit-content; padding-left: 16px;"
                                        },
                                        onClick: i(function() {
                                            return Promise.resolve().then(function() {
                                                var x = typeof p != "undefined" && p !== null ? p.clone() : e.callContext().clone();
                                                return e.bottomSheetOnClickCountry$Action(l.variables.filteredResidenceListVar.dataAttr.getCurrent(p.iterationContext).nameAttr, l.variables.filteredResidenceListVar.dataAttr.getCurrent(p.iterationContext).alpha2Attr, l.variables.filteredResidenceListVar.dataAttr.getCurrent(p.iterationContext).twilioAttr.dialing_codeAttr, e.callContext(x))
                                            })
                                        }, "onClick"),
                                        style: "margin-y-base",
                                        triggerActionOnFullSwipeLeft: !0,
                                        triggerActionOnFullSwipeRight: !0,
                                        _idProps: {
                                            service: c,
                                            name: "ListItem2"
                                        },
                                        _widgetRecordProvider: o,
                                        placeholders: {
                                            leftActions: D.Empty,
                                            content: new D(function() {
                                                return [h.createElement(v, {
                                                    align: 0,
                                                    animate: !1,
                                                    extendedProperties: {
                                                        style: "display: flex; font-size: 18px; font-weight: bold; gap: 8px; height: fit-content;"
                                                    },
                                                    visible: !0,
                                                    _idProps: {
                                                        service: c,
                                                        uuid: "21"
                                                    },
                                                    _widgetRecordProvider: o
                                                }, h.createElement(T, {
                                                    extendedProperties: {
                                                        style: "height: 16px;"
                                                    },
                                                    gridProperties: {
                                                        width: "24px"
                                                    },
                                                    value: l.variables.filteredResidenceListVar.dataAttr.getCurrent(p.iterationContext).emojiAttr,
                                                    _idProps: {
                                                        service: c,
                                                        uuid: "22"
                                                    },
                                                    _widgetRecordProvider: o
                                                }), h.createElement(v, {
                                                    align: 0,
                                                    animate: !1,
                                                    gridProperties: {
                                                        marginLeft: "4px"
                                                    },
                                                    style: "",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: c,
                                                        uuid: "23"
                                                    },
                                                    _widgetRecordProvider: o
                                                }, h.createElement(T, {
                                                    extendedProperties: {
                                                        style: "font-family: Inter; font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px; margin-right: 4px;"
                                                    },
                                                    value: l.variables.filteredResidenceListVar.dataAttr.getCurrent(p.iterationContext).nameAttr,
                                                    _idProps: {
                                                        service: c,
                                                        uuid: "24"
                                                    },
                                                    _widgetRecordProvider: o
                                                }), h.createElement(T, {
                                                    extendedProperties: {
                                                        style: "font-family: Inter; font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                                                    },
                                                    value: "(" + l.variables.filteredResidenceListVar.dataAttr.getCurrent(p.iterationContext).twilioAttr.dialing_codeAttr + ")",
                                                    _idProps: {
                                                        service: c,
                                                        uuid: "25"
                                                    },
                                                    _widgetRecordProvider: o
                                                })))]
                                            }),
                                            rightActions: D.Empty
                                        },
                                        _dependencies: [a(l.variables.filteredResidenceListVar.dataAttr.getCurrent(p.iterationContext).twilioAttr.dialing_codeAttr), a(l.variables.filteredResidenceListVar.dataAttr.getCurrent(p.iterationContext).nameAttr), a(l.variables.filteredResidenceListVar.dataAttr.getCurrent(p.iterationContext).emojiAttr)]
                                    })]
                                }, n, t, "1")
                            },
                            _dependencies: []
                        })]
                    })
                },
                _dependencies: [a(l.variables.filteredResidenceListVar.dataAttr), a(l.variables.searchedResidenceVar), a(l.variables.dropDownTitleIn), a(l.variables._dropDownTitleInDataFetchStatus), a(l.variables._dropDownTopBarInDataFetchStatus), a(l.variables.dropDownTopBarIn)]
            }))), h.createElement(v, {
                align: 0,
                animate: !0,
                visible: l.getCachedValue(t.getId("I6LTvM0rS0GfBEWxPakhOg.Visible"), function() {
                    return C.isPhone$Action(n).isPhoneOut
                }),
                _idProps: {
                    service: t,
                    uuid: "26"
                },
                _widgetRecordProvider: o
            }, h.createElement(v, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "27"
                },
                _widgetRecordProvider: o
            }, h.createElement(re, {
                extendedProperties: {
                    style: "font-family: 'Inter', Arial, sans-serif; font-size: 0.875rem; font-style: normal; font-weight: 400; letter-spacing: 0; line-height: 1.25rem;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: t,
                    name: "Label"
                },
                _widgetRecordProvider: o
            }, h.createElement(T, {
                value: l.variables.contextHeaderIn,
                _idProps: {
                    service: t,
                    uuid: "29"
                },
                _widgetRecordProvider: o,
                value_dataFetchStatus: H.calculateDataFetchStatus(l.variables._contextHeaderInDataFetchStatus)
            })), h.createElement(v, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "gap: 8px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                style: "full-width display-flex",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "PhoneOrEmail4"
                },
                _widgetRecordProvider: o
            }, h.createElement(v, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline",
                    width: "127px"
                },
                style: "phone_dropdown",
                visible: !1,
                _idProps: {
                    service: t,
                    uuid: "31"
                },
                _widgetRecordProvider: o
            }, h.createElement(ne, {
                getOwnerSpan: i(function() {
                    return f.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return f.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    AlignIconRight: !0
                },
                events: {
                    _handleError: i(function(c) {
                        e.handleError(c)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: t,
                    uuid: "32",
                    alias: "4"
                },
                _widgetRecordProvider: o,
                placeholders: {
                    icon: new D(function() {
                        return [h.createElement(P, {
                            extendedEvents: {
                                onClick: i(function() {
                                    var c = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                    e.buttonOnClick$Action(e.callContext(c))
                                }, "onClick")
                            },
                            image: w.VersionedURL.getVersionedUrl("img/dashboard.iconchevron5.svg"),
                            style: "cursor-pointer",
                            type: 0,
                            _idProps: {
                                service: t,
                                uuid: "33"
                            },
                            _widgetRecordProvider: o
                        })]
                    }),
                    input: new D(function() {
                        return [h.createElement(Q, {
                            _validationProps: {
                                validationService: r
                            },
                            enabled: !0,
                            extendedEvents: {
                                onClick: i(function() {
                                    var c = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                    e.buttonOnClick$Action(e.callContext(c))
                                }, "onClick")
                            },
                            extendedProperties: {
                                readOnly: "True",
                                style: "font-size: 14px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 0,
                            mandatory: !1,
                            maxLength: 50,
                            prompt: l.variables.dropDownTitleIn,
                            style: "form-control",
                            variable: l.createVariable($.DataTypes.Text, l.variables.phoneCodeVar, function(c) {
                                l.variables.phoneCodeVar = c
                            }),
                            _idProps: {
                                service: t,
                                name: "Input_InputState"
                            },
                            _widgetRecordProvider: o,
                            prompt_dataFetchStatus: H.calculateDataFetchStatus(l.variables._dropDownTitleInDataFetchStatus)
                        })]
                    })
                },
                _dependencies: [a(l.variables._dropDownTitleInDataFetchStatus), a(l.variables.dropDownTitleIn), a(l.variables.phoneCodeVar)]
            })), h.createElement(v, {
                align: 0,
                animate: !1,
                style: "full-width",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "35"
                },
                _widgetRecordProvider: o
            }, h.createElement(Q, {
                _validationProps: {
                    validationService: r
                },
                enabled: !0,
                extendedProperties: {
                    autoComplete: "False"
                },
                inputType: 0,
                mandatory: !0,
                maxLength: 100,
                onChange: i(function() {
                    return Promise.resolve().then(function() {
                        var c = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                        return e.input_phone3OnChange$Action(e.callContext(c))
                    })
                }, "onChange"),
                prompt: Y.resolve(ee.TranslationsService).getMessage("eqtj3t2bVkqmRXVskoDlQw#ValueExpression.-374653993.1", "Enter your email"),
                style: "form-control font-size-base full-width",
                variable: l.createVariable($.DataTypes.Text, l.variables.email_or_phoneVar, function(c) {
                    l.variables.email_or_phoneVar = c
                }),
                _idProps: {
                    service: t,
                    name: "InputEmailPhone"
                },
                _widgetRecordProvider: o
            }))))))
        }, {
            topLevelComponent: !1,
            getAttributes: i(function() {
                return {
                    codeFunction: "Email_Phone",
                    functionKey: "cece0b32-4645-476f-80fe-c70e289cd79a",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.Email_Phone",
            modelFactory: Xe,
            controllerFactory: et
        });
        return m.getCssDependencies = function() {
            return ["css/dashboard.Common.Email_Phone.css", "css/OutSystemsReactWidgets.css"]
        }, m.getJsDependencies = function() {
            return []
        }, m.getBlocks = function() {
            return [ne, K, _e]
        }, m
    }, "componentFactory"),
    un = Zt();
var E = he(fe());
var X = A,
    De = class De extends X.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(X.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
i(De, "VariablesRecord");
var ue = De;
ue.init();
var xe = class xe extends X.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
i(xe, "WidgetsRecord");
var Te = xe,
    He = class He extends X.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return ue
        }
        static getWidgetsRecordConstructor() {
            return Te
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(u) {}
    };
i(He, "Model");
var me = He;
me._hasValidationWidgetsValue = void 0;
var tt = new X.Model.ModelFactory(me);
var rt = {};

function Ne(m, u, l, e) {
    let t = new URL(window.location.href);
    if (console.log(t), t.origin === "https://staging-home.deriv.com") {
        let r = new URL("https://staging-hub.deriv.com/tradershub/SocialLogin");
        r.searchParams.set("provider", m.Provider), window.location.assign(r.toString())
    } else if (t.origin === "https://home.deriv.com") {
        let r = new URL("https://hub.deriv.com/tradershub/SocialLogin");
        r.searchParams.set("provider", m.Provider), window.location.assign(r.toString())
    } else if (t.origin === "https://dev-home.deriv.com") {
        let r = new URL("https://dev-hub.deriv.com/tradershub/SocialLogin");
        r.searchParams.set("provider", m.Provider), window.location.assign(r.toString())
    }
}
i(Ne, "default");
var k = A; {
    let u = class u extends k.Controller.BaseViewController {
        constructor(e, t, r) {
            super(e, t, r, rt);
            var n = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _getSocialLoginRedirectURL$Action() {
            return this.hasOwnProperty("__getSocialLoginRedirectURL$Action") || (this.__getSocialLoginRedirectURL$Action = function(e, t) {
                var r = this.model,
                    n = this.controller,
                    a = this.idService;
                return k.Logger.startActiveSpan("GetSocialLoginRedirectURL", function(s) {
                    s && (s.setAttribute("code.function", "GetSocialLoginRedirectURL"), s.setAttribute("outsystems.function.key", "d6e41394-0e51-4eb7-9b67-124db61cc3ce"), s.setAttribute("outsystems.function.owner.name", "dashboard"), s.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("GetSocialLoginRedirectURL"), t = n.callContext(t);
                        var g = new k.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("dashboard.Common.SocialLogin.GetSocialLoginRedirectURL$vars")));
                        g.value.providerInLocal = e, k.Logger.startActiveSpan("JavaScript1", function(o) {
                            o && (o.setAttribute("code.function", "JavaScript1"), o.setAttribute("outsystems.function.key", "1a46370e-825a-4a16-8712-abb38cd80d83"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return n.safeExecuteJSNode(Ne, "JavaScript1", "GetSocialLoginRedirectURL", {
                                    Provider: k.DataConversion.JSNodeParamConverter.to(g.value.providerInLocal, k.DataTypes.DataTypes.Text)
                                }, function(y) {}, {}, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__getSocialLoginRedirectURL$Action
        }
        set _getSocialLoginRedirectURL$Action(e) {
            this.__getSocialLoginRedirectURL$Action = e
        }
        getSocialLoginRedirectURL$Action(e, t) {
            var r = this.controller;
            return k.Logger.startActiveSpan("GetSocialLoginRedirectURL__proxy", function(n) {
                n && (n.setAttribute("code.function", "GetSocialLoginRedirectURL"), n.setAttribute("outsystems.function.key", "d6e41394-0e51-4eb7-9b67-124db61cc3ce"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._getSocialLoginRedirectURL$Action, t, e)
                } finally {
                    n && n.end()
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
            return L.defaultTimeout
        }
    };
    i(u, "ControllerInner");
    let m = u;
    ke = m, ke.registerVariableGroupType("dashboard.Common.SocialLogin.GetSocialLoginRedirectURL$vars", [{
        name: "Provider",
        attrName: "providerInLocal",
        mandatory: !0,
        dataType: k.DataTypes.DataTypes.Text,
        defaultValue: i(function() {
            return ""
        }, "defaultValue")
    }])
}
var ke, nt = new k.Controller.ControllerFactory(ke, F);
var $n = N.PlaceholderContent,
    Fn = N.IteratorPlaceholderContent,
    Xt = i(function() {
        var m = z(function(u) {
            var l = u.model,
                e = u.controller,
                t = u.controller.idService,
                r = e.validationService,
                n = e.callContext(),
                a = q,
                s = M,
                g = {
                    props: u,
                    validateWidget: i(function(c) {
                        u.validateWidget(u, c)
                    }, "validateWidget")
                },
                o = l,
                y = B,
                I = J,
                f = W();
            return E.createElement("div", u.rootNodeProperties, E.createElement(v, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "margin-bottom: 24px;"
                },
                style: "social-login-container display-flex justify-content-center margin-top-s gap-base",
                visible: l.getCachedValue(t.getId("Smallbtn.Visible"), function() {
                    return C.isPhone$Action(n).isPhoneOut
                }),
                _idProps: {
                    service: t,
                    name: "Smallbtn"
                },
                _widgetRecordProvider: o
            }, E.createElement(v, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: i(function() {
                        var c = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                        e.getSocialLoginRedirectURL$Action("google", e.callContext(c))
                    }, "onClick")
                },
                visible: !0,
                _idProps: {
                    service: t,
                    name: "Google"
                },
                _widgetRecordProvider: o
            }, E.createElement(P, {
                image: w.VersionedURL.getVersionedUrl("img/dashboard.socialiconbuttongoogle_1_.svg"),
                type: 0,
                _idProps: {
                    service: t,
                    uuid: "2"
                },
                _widgetRecordProvider: o
            })), E.createElement(v, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: i(function() {
                        var c = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                        e.getSocialLoginRedirectURL$Action("facebook", e.callContext(c))
                    }, "onClick")
                },
                visible: !0,
                _idProps: {
                    service: t,
                    name: "Facebook"
                },
                _widgetRecordProvider: o
            }, E.createElement(P, {
                image: w.VersionedURL.getVersionedUrl("img/dashboard.socialiconbuttonfacebook.svg"),
                type: 0,
                _idProps: {
                    service: t,
                    uuid: "4"
                },
                _widgetRecordProvider: o
            })), E.createElement(v, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: i(function() {
                        var c = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                        e.getSocialLoginRedirectURL$Action("apple", e.callContext(c))
                    }, "onClick")
                },
                visible: !0,
                _idProps: {
                    service: t,
                    name: "Apple"
                },
                _widgetRecordProvider: o
            }, E.createElement(P, {
                image: w.VersionedURL.getVersionedUrl("img/dashboard.socialiconbuttonapple.svg"),
                type: 0,
                _idProps: {
                    service: t,
                    uuid: "6"
                },
                _widgetRecordProvider: o
            }))), E.createElement(v, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "margin-bottom: 24px;"
                },
                style: "social-login-container display-flex justify-content-center margin-top-s gap-base",
                visible: l.getCachedValue(t.getId("Smallbtn2.Visible"), function() {
                    return !C.isPhone$Action(n).isPhoneOut
                }),
                _idProps: {
                    service: t,
                    name: "Smallbtn2"
                },
                _widgetRecordProvider: o
            }, E.createElement(v, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: i(function() {
                        var c = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                        e.getSocialLoginRedirectURL$Action("google", e.callContext(c))
                    }, "onClick")
                },
                gridProperties: {
                    classes: "OSInline"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    name: "Google2"
                },
                _widgetRecordProvider: o
            }, E.createElement(P, {
                extendedProperties: {
                    style: "height: 48px;"
                },
                gridProperties: {
                    width: "100%",
                    marginLeft: "0"
                },
                image: w.VersionedURL.getVersionedUrl("img/dashboard.socialiconbuttongoogle_1_.svg"),
                type: 0,
                _idProps: {
                    service: t,
                    uuid: "9"
                },
                _widgetRecordProvider: o
            })), E.createElement(v, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: i(function() {
                        var c = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                        e.getSocialLoginRedirectURL$Action("facebook", e.callContext(c))
                    }, "onClick")
                },
                gridProperties: {
                    classes: "OSInline"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    name: "Facebook2"
                },
                _widgetRecordProvider: o
            }, E.createElement(P, {
                extendedProperties: {
                    style: "height: 48px;"
                },
                gridProperties: {
                    width: "100%"
                },
                image: w.VersionedURL.getVersionedUrl("img/dashboard.socialiconbuttonfacebook.svg"),
                type: 0,
                _idProps: {
                    service: t,
                    uuid: "11"
                },
                _widgetRecordProvider: o
            })), E.createElement(v, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: i(function() {
                        var c = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                        e.getSocialLoginRedirectURL$Action("apple", e.callContext(c))
                    }, "onClick")
                },
                gridProperties: {
                    classes: "OSInline"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    name: "Apple2"
                },
                _widgetRecordProvider: o
            }, E.createElement(P, {
                extendedProperties: {
                    style: "height: 48px;"
                },
                gridProperties: {
                    width: "100%"
                },
                image: w.VersionedURL.getVersionedUrl("img/dashboard.socialiconbuttonapple.svg"),
                type: 0,
                _idProps: {
                    service: t,
                    uuid: "13"
                },
                _widgetRecordProvider: o
            }))))
        }, {
            topLevelComponent: !1,
            getAttributes: i(function() {
                return {
                    codeFunction: "SocialLogin",
                    functionKey: "45a4c5a5-2fa8-4087-8989-4ddfd39997b2",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.SocialLogin",
            modelFactory: tt,
            controllerFactory: nt
        });
        return m.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, m.getJsDependencies = function() {
            return []
        }, m.getBlocks = function() {
            return []
        }, m
    }, "componentFactory"),
    Wn = Xt();
export {
    Ar as a, un as b, Wn as c
};