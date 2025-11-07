import {
    a as de
} from "./_oschunk-X7XKSCB7.js";
import {
    a as le
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as J
} from "./_oschunk-6MV3R6MR.js";
import {
    a as ue
} from "./_oschunk-SNXHD6UR.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import {
    a as ce
} from "./_oschunk-HFW3V2GI.js";
import {
    a as We
} from "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    a as ke,
    b as $e,
    f as h,
    h as P,
    n as se,
    u as Ne
} from "./_oschunk-VR5BNL2K.js";
import {
    a as ae,
    g as R,
    m as $,
    n as He,
    o as j,
    q as N,
    r as W,
    s as V,
    t as F
} from "./_oschunk-4VHUVDBV.js";
import {
    a as k
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    F as G,
    H,
    Qb as Fe,
    Sb as C,
    a as Ve,
    mb as U,
    ub as x,
    ya as L
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as oe,
    W as A,
    c as o,
    e as ie,
    m as w,
    n as O,
    p as Le,
    w as z
} from "./_oschunk-M5BUVJ72.js";
var tt = {
        "YPRXgfzFr0+AbtFxr9IUsg#Title": "\u0625\u064A\u062F\u0627\u0639 | Deriv",
        "YPRXgfzFr0+AbtFxr9IUsg#TitleExpression.-1003252584.1": "\u0625\u064A\u062F\u0627\u0639 | Deriv"
    },
    Be = {
        "ar-001": {
            translations: tt,
            isRTL: !0
        }
    };
var m = A; {
    let s = class s extends m.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Be);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get getCurrencyConfig$ServerAction() {
            return this.hasOwnProperty("_getCurrencyConfig$ServerAction") || (this._getCurrencyConfig$ServerAction = function(e, r) {
                var t = this.controller;
                return m.Logger.startActiveSpan("GetCurrencyConfig", function(i) {
                    return i && (i.setAttribute("code.function", "GetCurrencyConfig"), i.setAttribute("outsystems.function.key", "344935f9-bf5b-4634-aba2-db4c51ac12e2"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), m.Flow.tryFinally(function() {
                        var n = {
                            currency: m.DataConversion.ServerDataConverter.to(e, m.DataTypes.DataTypes.Text)
                        };
                        return t.callServerAction("GetCurrencyConfig", "screenservices/uae/DepositFlow/Deposit/ActionGetCurrencyConfig", "auneRzUWYP17IvRUyOP08Q", n, t.callContext(r), void 0, void 0, !0).then(function(c) {
                            var v = new(t.constructor.getVariableGroupType("uae.DepositFlow.Deposit$ActionGetCurrencyConfig"));
                            return v.responseOut = m.DataConversion.ServerDataConverter.from(c.Response, U), v
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 0)
            }), this._getCurrencyConfig$ServerAction
        }
        set getCurrencyConfig$ServerAction(e) {
            this._getCurrencyConfig$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return m.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "19cfe316-d5aa-45ff-ac2e-e58e74e88cca"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), m.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var c = new m.DataTypes.VariableHolder,
                            v = new m.DataTypes.VariableHolder,
                            a = new m.DataTypes.VariableHolder,
                            y = new m.DataTypes.VariableHolder,
                            b = new m.DataTypes.VariableHolder;
                        return m.Flow.executeAsyncFlow(function() {
                            return r.variables.is_loadingVar = !0, y.value = C.getAuth$Action(e), r.flush(), C.getWalletListCache$Action(e).then(function(p) {
                                v.value = p
                            }).then(function() {
                                return a.value = m.SystemActions.listIndexOf(v.value.wallet_listOut, function(p) {
                                    return m.BuiltinFunctions.longIntegerToText(p.idAttr) === r.variables.wallet_idIn
                                }, e), r.flush(), t.getCurrencyConfig$ServerAction(v.value.wallet_listOut.getItem(a.value.positionOut).currencyAttr, e).then(function(p) {
                                    c.value = p
                                })
                            }).then(function() {
                                r.variables.currency_configVar = c.value.responseOut.dataAttr.getCurrent(e.iterationContext)
                            }).then(function() {
                                c.value.responseOut.dataAttr.length > 0 && c.value.responseOut.dataAttr.getItem(0).cashiersAttr.length > 0 && (b.value = m.SystemActions.listIndexOf(c.value.responseOut.dataAttr.getItem(0).cashiersAttr, function(p) {
                                    return p === "premier_cashier"
                                }, e), r.variables.is_fiat_depositVar = b.value.positionOut > -1, r.variables.has_close_iconIn = r.variables.is_fiat_depositVar, r.variables.is_loadingVar = !1)
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _setLoading$Action() {
            return this.hasOwnProperty("__setLoading$Action") || (this.__setLoading$Action = function(e, r) {
                var t = this.model,
                    i = this.controller,
                    n = this.idService;
                return m.Logger.startActiveSpan("SetLoading", function(c) {
                    c && (c.setAttribute("code.function", "SetLoading"), c.setAttribute("outsystems.function.key", "352eb8e2-4212-44d1-b3d5-08f68bba5ce4"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("SetLoading"), r = i.callContext(r);
                        var v = new m.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("uae.DepositFlow.Deposit.SetLoading$vars")));
                        v.value.loadingInLocal = e, t.variables.is_internal_loadingVar = v.value.loadingInLocal
                    } finally {
                        c && c.end()
                    }
                }, 1)
            }), this.__setLoading$Action
        }
        set _setLoading$Action(e) {
            this.__setLoading$Action = e
        }
        get _desktopProcessLayoutBackBtnEvent$Action() {
            return this.hasOwnProperty("__desktopProcessLayoutBackBtnEvent$Action") || (this.__desktopProcessLayoutBackBtnEvent$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return m.Logger.startActiveSpan("DesktopProcessLayoutBackBtnEvent", function(n) {
                    n && (n.setAttribute("code.function", "DesktopProcessLayoutBackBtnEvent"), n.setAttribute("outsystems.function.key", "3c0dabe0-c757-4416-a1f6-d42cd5c40857"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("DesktopProcessLayoutBackBtnEvent"), e = t.callContext(e), m.Navigation.navigateBack(null, e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__desktopProcessLayoutBackBtnEvent$Action
        }
        set _desktopProcessLayoutBackBtnEvent$Action(e) {
            this.__desktopProcessLayoutBackBtnEvent$Action = e
        }
        get _desktopProcessLayoutCloseBtnEvent$Action() {
            return this.hasOwnProperty("__desktopProcessLayoutCloseBtnEvent$Action") || (this.__desktopProcessLayoutCloseBtnEvent$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return m.Logger.startActiveSpan("DesktopProcessLayoutCloseBtnEvent", function(n) {
                    n && (n.setAttribute("code.function", "DesktopProcessLayoutCloseBtnEvent"), n.setAttribute("outsystems.function.key", "f1466850-7635-46cd-9ca1-cf44f2cc7abc"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("DesktopProcessLayoutCloseBtnEvent"), e = t.callContext(e), m.Navigation.navigateTo(m.Navigation.generateScreenURL("uae", "wallet", {}), m.Transitions.createTransition(m.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__desktopProcessLayoutCloseBtnEvent$Action
        }
        set _desktopProcessLayoutCloseBtnEvent$Action(e) {
            this.__desktopProcessLayoutCloseBtnEvent$Action = e
        }
        onReady$Action(e) {
            var r = this.controller;
            return m.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "19cfe316-d5aa-45ff-ac2e-e58e74e88cca"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), m.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        setLoading$Action(e, r) {
            var t = this.controller;
            return m.Logger.startActiveSpan("SetLoading__proxy", function(i) {
                i && (i.setAttribute("code.function", "SetLoading"), i.setAttribute("outsystems.function.key", "352eb8e2-4212-44d1-b3d5-08f68bba5ce4"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._setLoading$Action, r, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        desktopProcessLayoutBackBtnEvent$Action(e) {
            var r = this.controller;
            return m.Logger.startActiveSpan("DesktopProcessLayoutBackBtnEvent__proxy", function(t) {
                t && (t.setAttribute("code.function", "DesktopProcessLayoutBackBtnEvent"), t.setAttribute("outsystems.function.key", "3c0dabe0-c757-4416-a1f6-d42cd5c40857"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._desktopProcessLayoutBackBtnEvent$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        desktopProcessLayoutCloseBtnEvent$Action(e) {
            var r = this.controller;
            return m.Logger.startActiveSpan("DesktopProcessLayoutCloseBtnEvent__proxy", function(t) {
                t && (t.setAttribute("code.function", "DesktopProcessLayoutCloseBtnEvent"), t.setAttribute("outsystems.function.key", "f1466850-7635-46cd-9ca1-cf44f2cc7abc"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._desktopProcessLayoutCloseBtnEvent$Action, e)
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
                var r = this.controller,
                    t = this.model,
                    i = this.idService;
                return r.onReady$Action(e)
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
                return de.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return C.defaultTimeout
        }
    };
    o(s, "ControllerInner");
    let g = s;
    X = g, X.registerVariableGroupType("uae.DepositFlow.Deposit$ActionGetCurrencyConfig", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: m.DataTypes.DataTypes.Record,
        defaultValue: o(function() {
            return new U
        }, "defaultValue"),
        complexType: U
    }]), X.registerVariableGroupType("uae.DepositFlow.Deposit.SetLoading$vars", [{
        name: "loading",
        attrName: "loadingInLocal",
        mandatory: !0,
        dataType: m.DataTypes.DataTypes.Boolean,
        defaultValue: o(function() {
            return !1
        }, "defaultValue")
    }])
}
var X, fe = new m.Controller.ControllerFactory(X, k);
var D = ie(ae());
var T = A,
    me = class me extends T.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("url", "urlVar", "url", !0, !1, T.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("wallet_id", "wallet_idIn", "wallet_id", !0, !1, T.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_wallet_idInDataFetchStatus", "_wallet_idInDataFetchStatus", "_wallet_idInDataFetchStatus", !0, !1, T.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(T.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(me, "VariablesRecord");
var K = me;
K.init();
var _e = class _e extends T.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(_e, "WidgetsRecord");
var ve = _e,
    ge = class ge extends T.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return K
        }
        static getWidgetsRecordConstructor() {
            return ve
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(s) {
            "wallet_id" in s && (this.variables.wallet_idIn = s.wallet_id, "_wallet_idInDataFetchStatus" in s && (this.variables._wallet_idInDataFetchStatus = s._wallet_idInDataFetchStatus))
        }
    };
o(ge, "Model");
var q = ge;
q._hasValidationWidgetsValue = void 0;
var ze = new T.Model.ModelFactory(q);
var E = A,
    be = class be extends E.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("wallet_address", "wallet_addressVar", "wallet_address", !0, !1, E.DataTypes.DataTypes.Record, function() {
                return E.DataTypes.ImmutableBase.getData(new L)
            }, !1, L), this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, E.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("currency_config", "currency_configIn", "currency_config", !0, !1, E.DataTypes.DataTypes.Record, function() {
                return E.DataTypes.ImmutableBase.getData(new H)
            }, !1, H), this.attr("_currency_configInDataFetchStatus", "_currency_configInDataFetchStatus", "_currency_configInDataFetchStatus", !0, !1, E.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(E.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(be, "VariablesRecord");
var Y = be;
Y.init();
var Se = class Se extends E.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(Se, "WidgetsRecord");
var pe = Se,
    B = class B extends E.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return Y
        }
        static getWidgetsRecordConstructor() {
            return pe
        }
        static get hasValidationWidgets() {
            return B._hasValidationWidgetsValue === void 0 && (B._hasValidationWidgetsValue = void 0 || void 0), B._hasValidationWidgetsValue
        }
        setInputs(s) {
            "currency_config" in s && (this.variables.currency_configIn = s.currency_config, "_currency_configInDataFetchStatus" in s && (this.variables._currency_configInDataFetchStatus = s._currency_configInDataFetchStatus))
        }
    };
o(B, "Model");
var Q = B;
Q._hasValidationWidgetsValue = void 0;
var je = new E.Model.ModelFactory(Q);
var S = A,
    Ee = class Ee extends S.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("currency_config", "currency_configVar", "currency_config", !0, !1, S.DataTypes.DataTypes.Record, function() {
                return S.DataTypes.ImmutableBase.getData(new H)
            }, !1, H), this.attr("is_fiat_deposit", "is_fiat_depositVar", "is_fiat_deposit", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("is_internal_loading", "is_internal_loadingVar", "is_internal_loading", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("has_close_icon", "has_close_iconIn", "has_close_icon", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_has_close_iconInDataFetchStatus", "_has_close_iconInDataFetchStatus", "_has_close_iconInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("wallet_id", "wallet_idIn", "wallet_id", !0, !1, S.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_wallet_idInDataFetchStatus", "_wallet_idInDataFetchStatus", "_wallet_idInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(S.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(Ee, "VariablesRecord");
var ee = Ee;
ee.init();
var we = class we extends S.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(we, "WidgetsRecord");
var Ae = we,
    M = class M extends S.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return ee
        }
        static getWidgetsRecordConstructor() {
            return Ae
        }
        static get hasValidationWidgets() {
            return M._hasValidationWidgetsValue === void 0 && (M._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0), M._hasValidationWidgetsValue
        }
        setInputs(s) {
            "has_close_icon" in s && (this.variables.has_close_iconIn = S.DataConversion.ServerDataConverter.from(s.has_close_icon, S.DataTypes.DataTypes.Boolean)), "wallet_id" in s && (this.variables.wallet_idIn = S.DataConversion.ServerDataConverter.from(s.wallet_id, S.DataTypes.DataTypes.Text))
        }
    };
o(M, "Model");
var te = M;
te._hasValidationWidgetsValue = void 0;
var Ce = new S.Model.ModelFactory(te);
var xe = ie(ae());
var Ze = {};

function Oe(g, s, d) {
    window.cashierIframeListener && (window.removeEventListener("message", window.cashierIframeListener), delete window.cashierIframeListener)
}
o(Oe, "default");

function Pe(g, s, d) {
    let e = document.getElementsByClassName("cashier-iframe");
    if (e.length > 0) {
        let r = e[0];
        window.cashierIframeListener = t => {
            var n, c;
            ["https://cashier.deriv.com", "https://doughflow-test.4x.my"].includes(t.origin) && (isNaN(t.data) || ((((c = (n = r.parentElement) == null ? void 0 : n.parentElement) == null ? void 0 : c.getBoundingClientRect().height) || 0) < +t.data ? r.style.height = +t.data + "px" : r.style.height = "100%"))
        }, window.addEventListener("message", window.cashierIframeListener), r.addEventListener("load", () => {
            g.OnIFrameLoad(), /iP(hone|od|ad)/.test(navigator.platform) && r.parentElement && (r.parentElement.scrollTop = 0)
        })
    }
}
o(Pe, "default");
var l = A; {
    let s = class s extends l.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Ze);
            var i = this.controller;
            this.clientActionProxies = {
                onIFrameLoad$Action: o(function() {
                    return i.executeActionInsideJSNode(i._onIFrameLoad$Action.bind(i), i.callContext(), function(n) {
                        return {}
                    }, function() {}, "OnIFrameLoad")
                }, "onIFrameLoad$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get getPaymenturl$ServerAction() {
            return this.hasOwnProperty("_getPaymenturl$ServerAction") || (this._getPaymenturl$ServerAction = function(e, r, t, i, n, c) {
                var v = this.controller;
                return l.Logger.startActiveSpan("GetPaymenturl", function(a) {
                    return a && (a.setAttribute("code.function", "GetPaymenturl"), a.setAttribute("outsystems.function.key", "2eb3ba6a-017d-41c2-a395-d0c66f5e7797"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), l.Flow.tryFinally(function() {
                        var y = {
                            Authorization: l.DataConversion.ServerDataConverter.to(e, l.DataTypes.DataTypes.Text),
                            action: l.DataConversion.ServerDataConverter.to(r, l.DataTypes.DataTypes.Text),
                            token: l.DataConversion.ServerDataConverter.to(t, l.DataTypes.DataTypes.Text),
                            wallet_id: l.DataConversion.ServerDataConverter.to(i, l.DataTypes.DataTypes.Text),
                            lang: l.DataConversion.ServerDataConverter.to(n, l.DataTypes.DataTypes.Text)
                        };
                        return v.callServerAction("GetPaymenturl", "screenservices/uae/DepositFlow/DespoitFiat/ActionGetPaymenturl", "jZ58DXVEO2cRnCanzEYphg", y, v.callContext(c), void 0, void 0, !0).then(function(b) {
                            var p = new(v.constructor.getVariableGroupType("uae.DepositFlow.DespoitFiat$ActionGetPaymenturl"));
                            return p.responseOut = l.DataConversion.ServerDataConverter.from(b.Response, G), p
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 0)
            }), this._getPaymenturl$ServerAction
        }
        set getPaymenturl$ServerAction(e) {
            this._getPaymenturl$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return l.Logger.startActiveSpan("OnDestroy", function(n) {
                    n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "0869793c-1907-46b8-8b1b-40389be0a802"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), l.Logger.startActiveSpan("RemoveListener", function(c) {
                            c && (c.setAttribute("code.function", "RemoveListener"), c.setAttribute("outsystems.function.key", "d502c89b-7fac-4576-88b3-1754e4bc7a61"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(Oe, "RemoveListener", "OnDestroy", null, function(v) {}, {}, {})
                            } finally {
                                c && c.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return l.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "7cef5b07-faa5-4b3c-98d0-54dac47bc411"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), l.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var c = new l.DataTypes.VariableHolder(new l.DataTypes.ErrorHandlerOutputType),
                            v = new l.DataTypes.VariableHolder,
                            a = new l.DataTypes.VariableHolder;
                        return l.Flow.executeAsyncFlow(function() {
                            return t.setLoading$Action(!0, e).then(function() {
                                return a.value = C.getAuth$Action(e), r.flush(), t.getPaymenturl$ServerAction(a.value.tokenOut, "deposit", "", r.variables.wallet_idIn, C.languageMapper$Action(e).charCodeOut, e).then(function(y) {
                                    v.value = y
                                })
                            }).then(function() {
                                return l.Flow.executeSequence(function() {
                                    if (v.value.responseOut.dataAttr.length > 0 && l.BuiltinFunctions.length(v.value.responseOut.dataAttr.getItem(0).redirect_urlAttr) > 0) l.Logger.startActiveSpan("IFrameScripts", function(y) {
                                        y && (y.setAttribute("code.function", "IFrameScripts"), y.setAttribute("outsystems.function.key", "ef7f19b1-edf8-4e64-b376-5683e69faa7d"), y.setAttribute("outsystems.function.owner.name", "uae"), y.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), y.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return t.safeExecuteJSNode(Pe, "IFrameScripts", "OnReady", null, function(b) {}, {
                                                OnIFrameLoad: t.clientActionProxies.onIFrameLoad$Action
                                            }, {})
                                        } finally {
                                            y && y.end()
                                        }
                                    }, 1), r.variables.urlVar = v.value.responseOut.dataAttr.getItem(0).redirect_urlAttr;
                                    else return t._onIFrameLoad$Action(e)
                                })
                            })
                        }).catch(function(y) {
                            if (l.Logger.debug("DespoitFiat.OnReady", l.Exceptions.getMessage(y)), l.Exceptions.isInstanceOf(y, l.Exceptions.Exceptions.CommunicationException)) return l.Logger.error(null, y, null, null, 1), c.value.exceptionMessageAttr = l.Exceptions.getMessage(y), l.Logger.startActiveSpan("CommunicationException", function(b) {
                                return b && (b.setAttribute("code.function", "CommunicationException"), b.setAttribute("outsystems.function.key", "cb453942-aeb6-41c1-bd06-c1ae4dd2a3d7"), b.setAttribute("outsystems.function.owner.name", "uae"), b.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), b.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), l.Flow.tryFinally(function() {
                                    return l.Flow.executeAsyncFlow(function() {
                                        return l.Flow.returnAsync()
                                    })
                                }, function() {
                                    b && b.end()
                                })
                            }, 1);
                            throw y
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onIFrameLoad$Action() {
            return this.hasOwnProperty("__onIFrameLoad$Action") || (this.__onIFrameLoad$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return l.Logger.startActiveSpan("OnIFrameLoad", function(n) {
                    return n && (n.setAttribute("code.function", "OnIFrameLoad"), n.setAttribute("outsystems.function.key", "b4763547-d09c-4c20-b85a-b83f0eb50ea8"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), l.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnIFrameLoad"), e = t.callContext(e), l.Flow.executeAsyncFlow(function() {
                            return t.setLoading$Action(!1, e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onIFrameLoad$Action
        }
        set _onIFrameLoad$Action(e) {
            this.__onIFrameLoad$Action = e
        }
        onDestroy$Action(e) {
            var r = this.controller;
            return l.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "0869793c-1907-46b8-8b1b-40389be0a802"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return l.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "7cef5b07-faa5-4b3c-98d0-54dac47bc411"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), l.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onIFrameLoad$Action(e) {
            var r = this.controller;
            return l.Logger.startActiveSpan("OnIFrameLoad__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnIFrameLoad"), t.setAttribute("outsystems.function.key", "b4763547-d09c-4c20-b85a-b83f0eb50ea8"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), l.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onIFrameLoad$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get setLoading$Action() {
            return this.hasOwnProperty("_setLoading$Action") || (this._setLoading$Action = function() {
                return Promise.resolve()
            }), this._setLoading$Action
        }
        set setLoading$Action(e) {
            this._setLoading$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    i = this.idService;
                return r.onReady$Action(e)
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
                var r = this.controller,
                    t = this.model,
                    i = this.idService;
                return r.onDestroy$Action(e)
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
            return C.defaultTimeout
        }
    };
    o(s, "ControllerInner");
    let g = s;
    De = g, De.registerVariableGroupType("uae.DepositFlow.DespoitFiat$ActionGetPaymenturl", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: l.DataTypes.DataTypes.Record,
        defaultValue: o(function() {
            return new G
        }, "defaultValue"),
        complexType: G
    }])
}
var De, Ke = new l.Controller.ControllerFactory(De, k);
var Kt = R.PlaceholderContent,
    qt = R.IteratorPlaceholderContent,
    rt = o(function() {
        var g = j(function(s) {
            var d = s.model,
                e = s.controller,
                r = s.controller.idService,
                t = e.validationService,
                i = e.callContext(),
                n = V,
                c = F,
                v = {
                    props: s,
                    validateWidget: o(function(f) {
                        s.validateWidget(s, f)
                    }, "validateWidget")
                },
                a = d,
                y = W,
                b = N,
                p = $();
            return xe.createElement("div", s.rootNodeProperties, xe.createElement(ke, {
                extendedProperties: {
                    src: d.variables.urlVar,
                    width: "100%",
                    height: "100%",
                    className: "cashier-iframe",
                    allow: "payment; camera; clipboard-read; clipboard-write"
                },
                tag: "iframe",
                _idProps: {
                    service: r,
                    uuid: "0"
                },
                _widgetRecordProvider: a
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: o(function() {
                return {
                    codeFunction: "DespoitFiat",
                    functionKey: "19076c93-28ef-4006-86e7-2f0b34b94881",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "DepositFlow.DespoitFiat",
            modelFactory: ze,
            controllerFactory: Ke
        });
        return g.getCssDependencies = function() {
            return ["css/uae.DepositFlow.DespoitFiat.css", "css/OutSystemsReactWidgets.css"]
        }, g.getJsDependencies = function() {
            return []
        }, g.getBlocks = function() {
            return []
        }, g
    }, "componentFactory"),
    re = rt();
var u = ie(ae());
var nt = {
        "6wH+9OseGEehgNMzcykruQ#Value": "\u062A\u0645",
        "Sq31MABFYUm7IVCF7ykbcA#ValueExpression.-738128788.1": "\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0644\u0644\u0625\u064A\u062F\u0627\u0639",
        "acGeYEEopEyTP7JNB3LqAA#ValueExpression.-786828786.1": "\u0634\u0628\u0643\u0629",
        "HL16LLRkIEeZs190eLHm6Q#ValueExpression.-1265068275.1": "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u062D\u0641\u0638\u0629",
        "eyBKysfcAEe0z_DZ9z_1Dw#ValueExpression.206939018.1": "\u0625\u0644\u0649 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u062D\u0641\u0638\u0629 \u0647\u0630\u0627",
        "eyBKysfcAEe0z_DZ9z_1Dw#ValueExpression.687980612.1": "\u0641\u0642\u0637 \u0623\u0631\u0633\u0644",
        "5sSt1uNjtUmux3hjp+mang#ValueExpression.939255872.1": "\u0644\u0627 \u064A\u0645\u0643\u0646 \u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u0625\u064A\u062F\u0627\u0639\u0627\u062A \u0627\u0644\u0623\u0642\u0644 \u0645\u0646 \u0627\u0644\u0645\u0628\u0644\u063A \u0627\u0644\u0623\u062F\u0646\u0649 \u0627\u0644\u0645\u0637\u0644\u0648\u0628 \u0648\u0633\u062A\u0643\u0648\u0646 \u063A\u064A\u0631 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0627\u0633\u062A\u0631\u062F\u0627\u062F.",
        "yUExM_s4xUO_X2beaq7k+g#ValueExpression.1398312035.1": "\u0627\u0644\u0625\u064A\u062F\u0627\u0639 \u0625\u0644\u0649",
        "vuXn4Ont0Uiaau5LkzgRtg#Value.-937116531.1": "\u062A\u0645 \u0646\u0633\u062E \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0625\u0644\u0649 \u0627\u0644\u062D\u0627\u0641\u0638\u0629."
    },
    Qe = {
        "ar-001": {
            translations: nt,
            isRTL: !0
        }
    };

function Re(g, s, d, e) {
    function r(t) {
        if (navigator.clipboard) navigator.clipboard.writeText(t).then(function() {}).catch(function(i) {
            console.error("Could not copy text: ", i)
        });
        else {
            let i = document.createElement("textarea");
            i.value = t, document.body.appendChild(i), i.select();
            try {
                document.execCommand("copy")
            } catch (n) {
                console.error("Fallback: Unable to copy text", n)
            }
            document.body.removeChild(i)
        }
    }
    o(r, "copyToClipboard"), r(g.text)
}
o(Re, "default");
var _ = A; {
    let s = class s extends _.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Qe);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get getAddress$ServerAction() {
            return this.hasOwnProperty("_getAddress$ServerAction") || (this._getAddress$ServerAction = function(e, r, t, i) {
                var n = this.controller;
                return _.Logger.startActiveSpan("GetAddress", function(c) {
                    return c && (c.setAttribute("code.function", "GetAddress"), c.setAttribute("outsystems.function.key", "110ac4cc-db90-4aa1-8a02-cdfc2557ba85"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), _.Flow.tryFinally(function() {
                        var v = {
                            Authorization: _.DataConversion.ServerDataConverter.to(e, _.DataTypes.DataTypes.Text),
                            xapikey: _.DataConversion.ServerDataConverter.to(r, _.DataTypes.DataTypes.Text),
                            currency: _.DataConversion.ServerDataConverter.to(t, _.DataTypes.DataTypes.Text)
                        };
                        return n.callServerAction("GetAddress", "screenservices/uae/DepositFlow/DepositCrypto/ActionGetAddress", "RD_n9X4gX5zoBEnjhN9+XA", v, n.callContext(i), void 0, void 0, !0).then(function(a) {
                            var y = new(n.constructor.getVariableGroupType("uae.DepositFlow.DepositCrypto$ActionGetAddress"));
                            return y.responseOut = _.DataConversion.ServerDataConverter.from(a.Response, L), y
                        })
                    }, function() {
                        c && c.end()
                    })
                }, 0)
            }), this._getAddress$ServerAction
        }
        set getAddress$ServerAction(e) {
            this._getAddress$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onClickCopy$Action() {
            return this.hasOwnProperty("__onClickCopy$Action") || (this.__onClickCopy$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return _.Logger.startActiveSpan("OnClickCopy", function(n) {
                    n && (n.setAttribute("code.function", "OnClickCopy"), n.setAttribute("outsystems.function.key", "0be5705d-6691-4559-b7e6-7709e75b4fb7"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnClickCopy"), e = t.callContext(e);
                        var c = new _.DataTypes.VariableHolder;
                        _.Logger.startActiveSpan("CopyToClipboard", function(v) {
                            v && (v.setAttribute("code.function", "CopyToClipboard"), v.setAttribute("outsystems.function.key", "fcdec4f5-7fb8-476a-88dc-aed1cad002ed"), v.setAttribute("outsystems.function.owner.name", "uae"), v.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), v.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(Re, "CopyToClipboard", "OnClickCopy", {
                                    text: _.DataConversion.JSNodeParamConverter.to(r.variables.wallet_addressVar.dataAttr.getCurrent(e.iterationContext).addressAttr, _.DataTypes.DataTypes.Text)
                                }, function(a) {}, {}, {})
                            } finally {
                                v && v.end()
                            }
                        }, 1), c.value = C.getToastConfig$Action(e), We.iziToast_Show$Action("", "BTC" + _.Injector.resolve(_.ServiceNames.TranslationsService).getMessage("vuXn4Ont0Uiaau5LkzgRtg#Value.-937116531.1", " address copied to clipboard."), Ve.iziToast_Position.topCenter, c.value.configOut, e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onClickCopy$Action
        }
        set _onClickCopy$Action(e) {
            this.__onClickCopy$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return _.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "b9eb9f15-ef70-49bf-b1d2-a1caeb806fb6"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), _.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var c = new _.DataTypes.VariableHolder,
                            v = new _.DataTypes.VariableHolder;
                        return _.Flow.executeAsyncFlow(function() {
                            return r.variables.is_loadingVar = !0, v.value = C.getAuth$Action(e), r.flush(), t.getAddress$ServerAction(v.value.tokenOut, x.getapi_key(), "BTC", e).then(function(a) {
                                c.value = a
                            }).then(function() {
                                r.variables.wallet_addressVar = c.value.responseOut, r.variables.is_loadingVar = !1
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onClickDone$Action() {
            return this.hasOwnProperty("__onClickDone$Action") || (this.__onClickDone$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return _.Logger.startActiveSpan("OnClickDone", function(n) {
                    n && (n.setAttribute("code.function", "OnClickDone"), n.setAttribute("outsystems.function.key", "bdbed41c-957e-4081-af9e-6cc6405b8066"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClickDone"), e = t.callContext(e), _.Navigation.navigateTo(_.Navigation.generateScreenURL("uae", "home", {}), _.Transitions.createTransition(_.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onClickDone$Action
        }
        set _onClickDone$Action(e) {
            this.__onClickDone$Action = e
        }
        onClickCopy$Action(e) {
            var r = this.controller;
            return _.Logger.startActiveSpan("OnClickCopy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickCopy"), t.setAttribute("outsystems.function.key", "0be5705d-6691-4559-b7e6-7709e75b4fb7"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onClickCopy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return _.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "b9eb9f15-ef70-49bf-b1d2-a1caeb806fb6"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), _.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onClickDone$Action(e) {
            var r = this.controller;
            return _.Logger.startActiveSpan("OnClickDone__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickDone"), t.setAttribute("outsystems.function.key", "bdbed41c-957e-4081-af9e-6cc6405b8066"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onClickDone$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get setLoading$Action() {
            return this.hasOwnProperty("_setLoading$Action") || (this._setLoading$Action = function() {
                return Promise.resolve()
            }), this._setLoading$Action
        }
        set setLoading$Action(e) {
            this._setLoading$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    i = this.idService;
                return r.onReady$Action(e)
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
            return C.defaultTimeout
        }
    };
    o(s, "ControllerInner");
    let g = s;
    Te = g, Te.registerVariableGroupType("uae.DepositFlow.DepositCrypto$ActionGetAddress", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: _.DataTypes.DataTypes.Record,
        defaultValue: o(function() {
            return new L
        }, "defaultValue"),
        complexType: L
    }])
}
var Te, et = new _.Controller.ControllerFactory(Te, k);
var br = R.PlaceholderContent,
    Sr = R.IteratorPlaceholderContent,
    it = o(function() {
        var g = j(function(s) {
            var d = s.model,
                e = s.controller,
                r = s.controller.idService,
                t = e.validationService,
                i = e.callContext(),
                n = V,
                c = F,
                v = {
                    props: s,
                    validateWidget: o(function(f) {
                        s.validateWidget(s, f)
                    }, "validateWidget")
                },
                a = d,
                y = W,
                b = N,
                p = $();
            return u.createElement("div", s.rootNodeProperties, u.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "display: flex; flex: 1 0 0; flex-direction: column; gap: 24px;"
                },
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "0"
                },
                _widgetRecordProvider: a
            }, u.createElement(P, {
                extendedProperties: {
                    style: "color: var(--text-brandPrimaryProminent, #00375C); font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                },
                value: d.getCachedValue(r.getId("911Zj4tM2Ui++jal5_CmWA.Value"), function() {
                    return w.resolve(O.TranslationsService).getMessage("yUExM_s4xUO_X2beaq7k+g#ValueExpression.1398312035.1", "Deposit to ") + (x.getcurrency() !== z.nullTextIdentifier() ? x.getcurrency() : "BTC") + " wallet"
                }, function() {
                    return x.getcurrency()
                }),
                _idProps: {
                    service: r,
                    uuid: "1"
                },
                _widgetRecordProvider: a
            }), u.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; background: rgba(255, 156, 19, 0.08); border-radius: 16px; display: flex; gap: 8px; padding: 16px;"
                },
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "2"
                },
                _widgetRecordProvider: a
            }, u.createElement(se, {
                image: Le.VersionedURL.getVersionedUrl("img/uae.ic_warning_orange.svg"),
                type: 0,
                _idProps: {
                    service: r,
                    uuid: "3"
                },
                _widgetRecordProvider: a
            }), u.createElement(P, {
                extendedProperties: {
                    style: "---comment-6: /* 150% */; color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                value: w.resolve(O.TranslationsService).getMessage("5sSt1uNjtUmux3hjp+mang#ValueExpression.939255872.1", "Deposits below the minimum amount cannot be processed and will be unrecoverable."),
                _idProps: {
                    service: r,
                    uuid: "4"
                },
                _widgetRecordProvider: a
            })), u.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; display: flex; flex-direction: column; gap: 8px; justify-content: center; padding: 16px;"
                },
                gridProperties: {
                    classes: "OSInline"
                },
                style: "flex flex-col gap-y-6",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "5"
                },
                _widgetRecordProvider: a
            }, u.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: 183px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "180px"
                },
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "6"
                },
                _widgetRecordProvider: a
            }, y(d.variables.is_loadingVar, !1, this, function() {
                return [u.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; display: flex; flex-direction: column; gap: 8px; height: 100%;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "animate-pulse w-full currency list-container",
                    visible: !0,
                    _idProps: {
                        service: r,
                        name: "LoaderContainer"
                    },
                    _widgetRecordProvider: a
                }, u.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background: #e5e7eb; height: 100%;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "w-full",
                    visible: !0,
                    _idProps: {
                        service: r,
                        name: "ListItemPlaceholder"
                    },
                    _widgetRecordProvider: a
                }))]
            }, function() {
                return [u.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "border: 1px solid var(--field-default-border-default, rgba(0, 0, 0, 0.08)); border-radius: 16px; height: 100%; padding: 8px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: r,
                        name: "QRCODE"
                    },
                    _widgetRecordProvider: a
                }, u.createElement(se, {
                    type: 1,
                    url: d.variables.wallet_addressVar.dataAttr.getCurrent(i.iterationContext).qr_codeAttr,
                    _idProps: {
                        service: r,
                        uuid: "10"
                    },
                    _widgetRecordProvider: a
                }))]
            })), u.createElement(h, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "11"
                },
                _widgetRecordProvider: a
            }, u.createElement(P, {
                extendedProperties: {
                    style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 12px;"
                },
                value: w.resolve(O.TranslationsService).getMessage("eyBKysfcAEe0z_DZ9z_1Dw#ValueExpression.687980612.1", "Only send ") + "BTC" + w.resolve(O.TranslationsService).getMessage("eyBKysfcAEe0z_DZ9z_1Dw#ValueExpression.206939018.1", " to this wallet address"),
                _idProps: {
                    service: r,
                    uuid: "12"
                },
                _widgetRecordProvider: a
            }))), u.createElement(h, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "13"
                },
                _widgetRecordProvider: a
            }, u.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; align-self: stretch; display: flex; gap: 16px;"
                },
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "14"
                },
                _widgetRecordProvider: a
            }, u.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; display: flex; flex: 1 0 0; flex-direction: column; gap: 4px;"
                },
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "15"
                },
                _widgetRecordProvider: a
            }, u.createElement(P, {
                extendedProperties: {
                    style: "---comment-6: /* 157.143% */; color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 14px; font-style: normal; font-weight: 400; line-height: 22px;"
                },
                value: d.getCachedValue(r.getId("oqWMZkud9kWF+j6EcRwzsg.Value"), function() {
                    return (x.getcurrency() !== z.nullTextIdentifier() ? x.getcurrency() : "BTC") + w.resolve(O.TranslationsService).getMessage("HL16LLRkIEeZs190eLHm6Q#ValueExpression.-1265068275.1", " Wallet address")
                }, function() {
                    return x.getcurrency()
                }),
                _idProps: {
                    service: r,
                    uuid: "16"
                },
                _widgetRecordProvider: a
            }), u.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "flex: 1;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "17"
                },
                _widgetRecordProvider: a
            }, y(d.variables.is_loadingVar, !1, this, function() {
                return [u.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; display: flex; flex-direction: column; gap: 8px; height: 100%;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "animate-pulse w-full currency list-container",
                    visible: !0,
                    _idProps: {
                        service: r,
                        name: "LoaderContainer2"
                    },
                    _widgetRecordProvider: a
                }, u.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background: #e5e7eb; height: 20px;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "w-full",
                    visible: !0,
                    _idProps: {
                        service: r,
                        name: "ListItemPlaceholder2"
                    },
                    _widgetRecordProvider: a
                }))]
            }, function() {
                return [u.createElement(h, {
                    align: 0,
                    animate: !1,
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "20"
                    },
                    _widgetRecordProvider: a
                }, u.createElement(P, {
                    extendedProperties: {
                        style: "---comment-6: /* 150% */; color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px; overflow-wrap: break-word; word-break: break-word; word-wrap: break-word;"
                    },
                    value: d.variables.wallet_addressVar.dataAttr.getCurrent(i.iterationContext).addressAttr,
                    _idProps: {
                        service: r,
                        uuid: "21"
                    },
                    _widgetRecordProvider: a
                }))]
            }))), u.createElement(h, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: o(function() {
                        var f = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                        e.onClickCopy$Action(e.callContext(f))
                    }, "onClick")
                },
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "22"
                },
                _widgetRecordProvider: a
            }, u.createElement(ce, {
                getOwnerSpan: o(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: `<svg width='18' height='21' viewBox='0 0 18 21' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M8.375 0.5H13.2188C13.6875 0.5 14.1953 0.734375 14.5469 1.08594L17.1641 3.70312C17.5156 4.05469 17.75 4.5625 17.75 5.03125V13.625C17.75 14.6797 16.8906 15.5 15.875 15.5H8.375C7.32031 15.5 6.5 14.6797 6.5 13.625V2.375C6.5 1.35938 7.32031 0.5 8.375 0.5ZM2.125 5.5H5.25V8H2.75V18H10.25V16.75H12.75V18.625C12.75 19.6797 11.8906 20.5 10.875 20.5H2.125C1.07031 20.5 0.25 19.6797 0.25 18.625V7.375C0.25 6.35938 1.07031 5.5 2.125 5.5Z' fill='black' fill-opacity='0.72'/>\r
</svg>`
                },
                events: {
                    _handleError: o(function(f) {
                        e.handleError(f)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: r,
                    uuid: "23",
                    alias: "1"
                },
                _widgetRecordProvider: a,
                _dependencies: []
            }))), u.createElement(J, {
                getOwnerSpan: o(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: o(function(f) {
                        e.handleError(f)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: r,
                    uuid: "24",
                    alias: "2"
                },
                _widgetRecordProvider: a,
                _dependencies: []
            }), u.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; display: flex; flex: 1 0 0; flex-direction: column; gap: 4px;"
                },
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "25"
                },
                _widgetRecordProvider: a
            }, u.createElement(P, {
                extendedProperties: {
                    style: "---comment-6: /* 157.143% */; color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 14px; font-style: normal; font-weight: 400; line-height: 22px;"
                },
                value: w.resolve(O.TranslationsService).getMessage("acGeYEEopEyTP7JNB3LqAA#ValueExpression.-786828786.1", "Network"),
                _idProps: {
                    service: r,
                    uuid: "26"
                },
                _widgetRecordProvider: a
            }), u.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "flex: 1;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "27"
                },
                _widgetRecordProvider: a
            }, y(d.variables.is_loadingVar, !1, this, function() {
                return [u.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; display: flex; flex-direction: column; gap: 8px; height: 100%;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "animate-pulse w-full currency list-container",
                    visible: !0,
                    _idProps: {
                        service: r,
                        name: "LoaderContainer3"
                    },
                    _widgetRecordProvider: a
                }, u.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background: #e5e7eb; height: 20px;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "w-full",
                    visible: !0,
                    _idProps: {
                        service: r,
                        name: "ListItemPlaceholder3"
                    },
                    _widgetRecordProvider: a
                }))]
            }, function() {
                return [u.createElement(h, {
                    align: 0,
                    animate: !1,
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "30"
                    },
                    _widgetRecordProvider: a
                }, u.createElement(P, {
                    extendedProperties: {
                        style: "---comment-6: /* 150% */; color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                    },
                    value: d.variables.currency_configIn.labelAttr,
                    _idProps: {
                        service: r,
                        uuid: "31"
                    },
                    _widgetRecordProvider: a,
                    value_dataFetchStatus: oe.calculateDataFetchStatus(d.variables._currency_configInDataFetchStatus)
                }))]
            }))), u.createElement(J, {
                getOwnerSpan: o(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: o(function(f) {
                        e.handleError(f)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: r,
                    uuid: "32",
                    alias: "3"
                },
                _widgetRecordProvider: a,
                _dependencies: []
            }), u.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; display: flex; flex: 1 0 0; flex-direction: column; gap: 4px;"
                },
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "33"
                },
                _widgetRecordProvider: a
            }, u.createElement(P, {
                extendedProperties: {
                    style: "---comment-6: /* 157.143% */; color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 14px; font-style: normal; font-weight: 400; line-height: 22px;"
                },
                value: w.resolve(O.TranslationsService).getMessage("Sq31MABFYUm7IVCF7ykbcA#ValueExpression.-738128788.1", "Minimum deposit"),
                _idProps: {
                    service: r,
                    uuid: "34"
                },
                _widgetRecordProvider: a
            }), u.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "flex: 1;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "35"
                },
                _widgetRecordProvider: a
            }, y(d.variables.is_loadingVar, !1, this, function() {
                return [u.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; display: flex; flex-direction: column; gap: 8px; height: 100%;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "animate-pulse w-full currency list-container",
                    visible: !0,
                    _idProps: {
                        service: r,
                        name: "LoaderContainer4"
                    },
                    _widgetRecordProvider: a
                }, u.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background: #e5e7eb; height: 20px;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "w-full",
                    visible: !0,
                    _idProps: {
                        service: r,
                        name: "ListItemPlaceholder4"
                    },
                    _widgetRecordProvider: a
                }))]
            }, function() {
                return [u.createElement(h, {
                    align: 0,
                    animate: !1,
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "38"
                    },
                    _widgetRecordProvider: a
                }, u.createElement(P, {
                    extendedProperties: {
                        style: "---comment-6: /* 150% */; color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                    },
                    value: z.decimalToText(d.variables.currency_configIn.limitAttr.depositAttr.min_amount_in_base_currencyAttr) + " BTC",
                    _idProps: {
                        service: r,
                        uuid: "39"
                    },
                    _widgetRecordProvider: a,
                    value_dataFetchStatus: oe.calculateDataFetchStatus(d.variables._currency_configInDataFetchStatus)
                }))]
            }))))), u.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "background: white; padding: 16px;"
                },
                style: "fixed bottom-0 left-0 w-full flex justify-center",
                visible: !0,
                _idProps: {
                    service: r,
                    name: "ActionButton"
                },
                _widgetRecordProvider: a
            }, u.createElement($e, {
                enabled: !0,
                isDefault: !1,
                onClick: o(function() {
                    var f = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                    e.onClickDone$Action(e.callContext(f))
                }, "onClick"),
                style: "btn btn-primary action-button",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "41"
                },
                _widgetRecordProvider: a
            }, u.createElement(Ne, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: bold;"
                },
                text: [b(c("6wH+9OseGEehgNMzcykruQ#Value", "Done"))],
                _idProps: {
                    service: r,
                    uuid: "42"
                },
                _widgetRecordProvider: a
            }))))
        }, {
            topLevelComponent: !1,
            getAttributes: o(function() {
                return {
                    codeFunction: "DepositCrypto",
                    functionKey: "161ac891-f6b1-43f1-9905-972ff05f6469",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "DepositFlow.DepositCrypto",
            modelFactory: je,
            controllerFactory: et
        });
        return g.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, g.getJsDependencies = function() {
            return []
        }, g.getBlocks = function() {
            return [ce, J]
        }, g
    }, "componentFactory"),
    ne = it();
var Ie = R.PlaceholderContent,
    Hr = R.IteratorPlaceholderContent,
    ot = o(function() {
        var g = He(function(s) {
            var d = s.model,
                e = s.controller,
                r = s.controller.idService,
                t = e.validationService,
                i = e.callContext(),
                n = V,
                c = F,
                v = {
                    props: s,
                    validateWidget: o(function(f) {
                        s.validateWidget(s, f)
                    }, "validateWidget")
                },
                a = d,
                y = W,
                b = N,
                p = $();
            return D.createElement("div", s.rootNodeProperties, y(Fe.isDesktop$Action(i).isDesktopOut, !1, this, function() {
                return [D.createElement(ue, {
                    getOwnerSpan: o(function() {
                        return p.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: o(function() {
                        return p.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ShowBackbutton: !1,
                        ShowLoader: d.variables.is_loadingVar || d.variables.is_internal_loadingVar,
                        ShowClosebutton: !0
                    },
                    events: {
                        _handleError: o(function(f) {
                            e.handleError(f)
                        }, "_handleError"),
                        closeBtnEvent$Action: o(function() {
                            var f = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                            e.desktopProcessLayoutCloseBtnEvent$Action(e.callContext(f))
                        }, "closeBtnEvent$Action"),
                        backBtnEvent$Action: o(function() {
                            var f = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                            e.desktopProcessLayoutBackBtnEvent$Action(e.callContext(f))
                        }, "backBtnEvent$Action")
                    },
                    _validationProps: {
                        validationService: t
                    },
                    _idProps: {
                        service: r,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: a,
                    placeholders: {
                        contentbody: new Ie(function() {
                            return [D.createElement(h, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "height: calc(100vh - 32px - 21px - 56px - 24px); padding-top: 24px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: a
                            }, y(d.variables.is_loadingVar, !1, this, function() {
                                return []
                            }, function() {
                                return [y(d.variables.is_fiat_depositVar, !1, this, function() {
                                    return [D.createElement(re, {
                                        getOwnerSpan: o(function() {
                                            return p.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: o(function() {
                                            return p.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            wallet_id: d.variables.wallet_idIn
                                        },
                                        events: {
                                            _handleError: o(function(f) {
                                                e.handleError(f)
                                            }, "_handleError"),
                                            setLoading$Action: o(function(f) {
                                                var I = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                                e.setLoading$Action(f, e.callContext(I))
                                            }, "setLoading$Action")
                                        },
                                        _validationProps: {
                                            validationService: t
                                        },
                                        _idProps: {
                                            service: r,
                                            uuid: "2",
                                            alias: "2"
                                        },
                                        _widgetRecordProvider: a,
                                        _dependencies: []
                                    })]
                                }, function() {
                                    return [D.createElement(ne, {
                                        getOwnerSpan: o(function() {
                                            return p.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: o(function() {
                                            return p.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            currency_config: d.variables.currency_configVar
                                        },
                                        events: {
                                            _handleError: o(function(f) {
                                                e.handleError(f)
                                            }, "_handleError"),
                                            setLoading$Action: o(function(f) {
                                                var I = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                                e.setLoading$Action(f, e.callContext(I))
                                            }, "setLoading$Action")
                                        },
                                        _validationProps: {
                                            validationService: t
                                        },
                                        _idProps: {
                                            service: r,
                                            uuid: "3",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: a,
                                        _dependencies: []
                                    })]
                                })]
                            }))]
                        })
                    },
                    _dependencies: [n(d.variables.currency_configVar), n(d.variables.wallet_idIn), n(d.variables.is_fiat_depositVar), n(d.variables.is_loadingVar)]
                })]
            }, function() {
                return [D.createElement(le, {
                    getOwnerSpan: o(function() {
                        return p.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: o(function() {
                        return p.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        has_back_button: !1,
                        show_loader: d.variables.is_loadingVar || d.variables.is_internal_loadingVar,
                        has_close_icon: !0
                    },
                    events: {
                        _handleError: o(function(f) {
                            e.handleError(f)
                        }, "_handleError"),
                        closeEvent$Action: o(function() {
                            var f = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                            e.desktopProcessLayoutCloseBtnEvent$Action(e.callContext(f))
                        }, "closeEvent$Action")
                    },
                    _validationProps: {
                        validationService: t
                    },
                    _idProps: {
                        service: r,
                        uuid: "4",
                        alias: "4"
                    },
                    _widgetRecordProvider: a,
                    placeholders: {
                        content: new Ie(function() {
                            return [D.createElement(h, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "height: calc(100vh - 56px - 24px - 24px);"
                                },
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: a
                            }, y(d.variables.is_loadingVar, !1, this, function() {
                                return []
                            }, function() {
                                return [y(d.variables.is_fiat_depositVar, !1, this, function() {
                                    return [D.createElement(re, {
                                        getOwnerSpan: o(function() {
                                            return p.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: o(function() {
                                            return p.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            wallet_id: d.variables.wallet_idIn
                                        },
                                        events: {
                                            _handleError: o(function(f) {
                                                e.handleError(f)
                                            }, "_handleError"),
                                            setLoading$Action: o(function(f) {
                                                var I = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                                e.setLoading$Action(f, e.callContext(I))
                                            }, "setLoading$Action")
                                        },
                                        _validationProps: {
                                            validationService: t
                                        },
                                        _idProps: {
                                            service: r,
                                            uuid: "6",
                                            alias: "5"
                                        },
                                        _widgetRecordProvider: a,
                                        _dependencies: []
                                    })]
                                }, function() {
                                    return [D.createElement(ne, {
                                        getOwnerSpan: o(function() {
                                            return p.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: o(function() {
                                            return p.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            currency_config: d.variables.currency_configVar
                                        },
                                        events: {
                                            _handleError: o(function(f) {
                                                e.handleError(f)
                                            }, "_handleError"),
                                            setLoading$Action: o(function(f) {
                                                var I = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                                e.setLoading$Action(f, e.callContext(I))
                                            }, "setLoading$Action")
                                        },
                                        _validationProps: {
                                            validationService: t
                                        },
                                        _idProps: {
                                            service: r,
                                            uuid: "7",
                                            alias: "6"
                                        },
                                        _widgetRecordProvider: a,
                                        _dependencies: []
                                    })]
                                })]
                            }))]
                        }),
                        footer: Ie.Empty
                    },
                    _dependencies: [n(d.variables.currency_configVar), n(d.variables.wallet_idIn), n(d.variables.is_fiat_depositVar), n(d.variables.is_loadingVar)]
                })]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: o(function() {
                return {
                    codeFunction: "Deposit",
                    functionKey: "8157f460-c5fc-4faf-806e-d171afd214b2",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "DepositFlow.Deposit",
            modelFactory: Ce,
            controllerFactory: fe,
            getTitle: o(function(s) {
                var d = s.model,
                    e = s.controller,
                    r = s.controller.idService,
                    t = e.validationService,
                    i = e.callContext(),
                    n = V,
                    c = F,
                    v = {
                        props: s,
                        validateWidget: o(function(a) {
                            s.validateWidget(s, a)
                        }, "validateWidget")
                    };
                return w.resolve(O.TranslationsService).getMessage("YPRXgfzFr0+AbtFxr9IUsg#TitleExpression.-1003252584.1", "Deposit | Deriv")
            }, "getTitle")
        });
        return g.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.DepositFlow.Deposit.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, g.getJsDependencies = function() {
            return []
        }, g.getBlocks = function() {
            return [ue, re, ne, le]
        }, g
    }, "componentFactory"),
    at = ot();
export {
    fe as controllerModule, Ce as modelModule, at as viewModule, de as webFlowControllerModule
};