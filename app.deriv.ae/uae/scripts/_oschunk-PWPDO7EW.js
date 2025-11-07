import {
    a as Y
} from "./_oschunk-6MV3R6MR.js";
import {
    a as G
} from "./_oschunk-4ZYYVQOE.js";
import {
    a as q
} from "./_oschunk-QCFSGDDS.js";
import {
    a as Z
} from "./_oschunk-SNXHD6UR.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import {
    a as K
} from "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as L,
    f as m,
    h as H,
    i as be,
    l as j,
    m as Ee,
    n as T,
    o as Ce,
    r as J,
    t as Se,
    u as C
} from "./_oschunk-VR5BNL2K.js";
import {
    a as he,
    g as R,
    m as U,
    n as ge,
    o as pe,
    q as M,
    r as D,
    s as W,
    t as P
} from "./_oschunk-4VHUVDBV.js";
import {
    a as x
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Qb as ye,
    Sb as O,
    X as S,
    Y as B,
    ub as _e
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as fe,
    W as b,
    c as a,
    e as de,
    m as V,
    n as N,
    p as I,
    v as me,
    w as ve
} from "./_oschunk-M5BUVJ72.js";
var xe = {
        "l2lZtKO920GFmyZAjIrPXg#Value": "\u0625\u0644\u063A\u0627\u0621",
        "QFa_qI7wP0SLgGWcXFJ9yQ#Value": "\u0625\u0632\u0627\u0644\u0629",
        "mttqTuCxEE2M_MqvMCRNOg#Value": "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u0625\u0632\u0627\u0644\u0629 \u0647\u0630\u0647 \u0627\u0644\u0628\u0635\u0645\u0627\u062A \u0627\u0644\u062D\u064A\u0648\u064A\u0629\u061F",
        "IST5GZO5JEqFrsratnqeEQ#ValueExpression.-1538478084.1": "\u0625\u0632\u0627\u0644\u0629",
        "IST5GZO5JEqFrsratnqeEQ#ValueExpression.285666.1": "\u201D?",
        "IST5GZO5JEqFrsratnqeEQ#ValueExpression.8220.1": "\u201C",
        "ZcPArNgZNkiYM1gIT1hjkw#Value": "\u062D\u0641\u0638 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A",
        "mqUYWqmNqUiWQPlnMgvw0Q#Value": "\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0633\u0645\u064A\u0629",
        "1o7cZ8nBvEm45bUIMWuUAA#Value": "\u0627\u0644\u0645\u0642\u0627\u064A\u064A\u0633 \u0627\u0644\u062D\u064A\u0648\u064A\u0629"
    },
    Oe = {
        "ar-001": {
            translations: xe,
            isRTL: !0
        }
    };
var u = b; {
    let c = class c extends u.Controller.BaseViewController {
        constructor(e, t, r) {
            super(e, t, r, Oe);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get getBiometricsList$ServerAction() {
            return this.hasOwnProperty("_getBiometricsList$ServerAction") || (this._getBiometricsList$ServerAction = function(e, t, r) {
                var i = this.controller;
                return u.Logger.startActiveSpan("GetBiometricsList", function(n) {
                    return n && (n.setAttribute("code.function", "GetBiometricsList"), n.setAttribute("outsystems.function.key", "321069c0-1b01-4b0b-b035-eb99915ff4e3"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), u.Flow.tryFinally(function() {
                        var d = {
                            domain: u.DataConversion.ServerDataConverter.to(e, u.DataTypes.DataTypes.Text),
                            authorization: u.DataConversion.ServerDataConverter.to(t, u.DataTypes.DataTypes.Text)
                        };
                        return i.callServerAction("GetBiometricsList", "screenservices/uae/Biometrics/BiometricsList/ActionGetBiometricsList", "wSPOPhtPvrk9t11YWgjjaA", d, i.callContext(r), void 0, void 0, !0).then(function(h) {
                            var o = new(i.constructor.getVariableGroupType("uae.Biometrics.BiometricsList$ActionGetBiometricsList"));
                            return o.responseOut = u.DataConversion.ServerDataConverter.from(h.Response, B), o
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 0)
            }), this._getBiometricsList$ServerAction
        }
        set getBiometricsList$ServerAction(e) {
            this._getBiometricsList$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _cancelOnClick$Action() {
            return this.hasOwnProperty("__cancelOnClick$Action") || (this.__cancelOnClick$Action = function(e, t) {
                var r = this.model,
                    i = this.controller,
                    n = this.idService;
                return u.Logger.startActiveSpan("CancelOnClick", function(d) {
                    d && (d.setAttribute("code.function", "CancelOnClick"), d.setAttribute("outsystems.function.key", "108e4357-5a40-4aa0-8e6d-0b096679c423"), d.setAttribute("outsystems.function.owner.name", "uae"), d.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("CancelOnClick"), t = i.callContext(t);
                        var h = new u.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("uae.Biometrics.BiometricsList.CancelOnClick$vars")));
                        h.value.typeInLocal = e, h.value.typeInLocal === "rename" ? r.variables.showRenamePopupVar = !1 : r.variables.showRemovePopupVar = !1
                    } finally {
                        d && d.end()
                    }
                }, 1)
            }), this.__cancelOnClick$Action
        }
        set _cancelOnClick$Action(e) {
            this.__cancelOnClick$Action = e
        }
        get _saveChangesOnClick$Action() {
            return this.hasOwnProperty("__saveChangesOnClick$Action") || (this.__saveChangesOnClick$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    i = this.idService;
                return u.Logger.startActiveSpan("SaveChangesOnClick", function(n) {
                    n && (n.setAttribute("code.function", "SaveChangesOnClick"), n.setAttribute("outsystems.function.key", "1370f8c1-7b7e-48b8-8d88-5f7ae3494530"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("SaveChangesOnClick"), e = r.callContext(e), t.widgets.get(i.getId("Form")).validAttr
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__saveChangesOnClick$Action
        }
        set _saveChangesOnClick$Action(e) {
            this.__saveChangesOnClick$Action = e
        }
        get _clearInput$Action() {
            return this.hasOwnProperty("__clearInput$Action") || (this.__clearInput$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    i = this.idService;
                return u.Logger.startActiveSpan("ClearInput", function(n) {
                    n && (n.setAttribute("code.function", "ClearInput"), n.setAttribute("outsystems.function.key", "9c65b04d-50e4-4ab9-81cb-e4892cb84be9"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("ClearInput"), e = r.callContext(e), t.variables.biometricNameVar = ""
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__clearInput$Action
        }
        set _clearInput$Action(e) {
            this.__clearInput$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    i = this.idService;
                return u.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "c15a5728-b02e-4dc8-a434-5bdc432c65ea"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnInitialize"), e = r.callContext(e), t.variables.isLoadingVar = !0
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    i = this.idService;
                return u.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "d1ce5082-8af0-4753-bdd4-d4e0fbd648f8"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                        r.ensureControllerAlive("OnReady"), e = r.callContext(e);
                        var d = new u.DataTypes.VariableHolder,
                            h = new u.DataTypes.VariableHolder;
                        return u.Flow.executeAsyncFlow(function() {
                            return h.value = O.getAuth$Action(e), t.flush(), r.getBiometricsList$ServerAction(O.getDomain$Action(e).domainOut, h.value.tokenOut, e).then(function(o) {
                                d.value = o
                            }).then(function() {
                                t.variables.biometricListVar = d.value.responseOut.biometricsAttr, t.variables.isLoadingVar = !1
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
        cancelOnClick$Action(e, t) {
            var r = this.controller;
            return u.Logger.startActiveSpan("CancelOnClick__proxy", function(i) {
                i && (i.setAttribute("code.function", "CancelOnClick"), i.setAttribute("outsystems.function.key", "108e4357-5a40-4aa0-8e6d-0b096679c423"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._cancelOnClick$Action, t, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        saveChangesOnClick$Action(e) {
            var t = this.controller;
            return u.Logger.startActiveSpan("SaveChangesOnClick__proxy", function(r) {
                r && (r.setAttribute("code.function", "SaveChangesOnClick"), r.setAttribute("outsystems.function.key", "1370f8c1-7b7e-48b8-8d88-5f7ae3494530"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._saveChangesOnClick$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        clearInput$Action(e) {
            var t = this.controller;
            return u.Logger.startActiveSpan("ClearInput__proxy", function(r) {
                r && (r.setAttribute("code.function", "ClearInput"), r.setAttribute("outsystems.function.key", "9c65b04d-50e4-4ab9-81cb-e4892cb84be9"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._clearInput$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var t = this.controller;
            return u.Logger.startActiveSpan("OnInitialize__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "c15a5728-b02e-4dc8-a434-5bdc432c65ea"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onInitialize$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return u.Logger.startActiveSpan("OnReady__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "d1ce5082-8af0-4753-bdd4-d4e0fbd648f8"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var t = this.controller,
                    r = this.model,
                    i = this.idService;
                return t.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var t = this.controller,
                    r = this.model,
                    i = this.idService;
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
                return q.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return O.defaultTimeout
        }
    };
    a(c, "ControllerInner");
    let _ = c;
    F = _, F.registerVariableGroupType("uae.Biometrics.BiometricsList$ActionGetBiometricsList", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: u.DataTypes.DataTypes.Record,
        defaultValue: a(function() {
            return new B
        }, "defaultValue"),
        complexType: B
    }]), F.registerVariableGroupType("uae.Biometrics.BiometricsList.CancelOnClick$vars", [{
        name: "Type",
        attrName: "typeInLocal",
        mandatory: !0,
        dataType: u.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }])
}
var F, X = new u.Controller.ControllerFactory(F, x);
var l = de(he());
var y = b,
    re = class re extends y.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("BiometricList", "biometricListVar", "BiometricList", !0, !1, y.DataTypes.DataTypes.RecordList, function() {
                return y.DataTypes.ImmutableBase.getData(new(y.GenericTypeCache.getGenericList(S)))
            }, !1, y.GenericTypeCache.getGenericList(S)), this.attr("showRenamePopup", "showRenamePopupVar", "showRenamePopup", !0, !1, y.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("showRemovePopup", "showRemovePopupVar", "showRemovePopup", !0, !1, y.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("BiometricName", "biometricNameVar", "BiometricName", !0, !1, y.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, y.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(y.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(re, "VariablesRecord");
var k = re;
k.init();
var ne = class ne extends y.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form: y.Model.ValidationWidgetRecord,
            Input_BiometricName: y.Model.ValidationWidgetRecord,
            Form2: y.Model.ValidationWidgetRecord
        }
    }
};
a(ne, "WidgetsRecord");
var ee = ne,
    ie = class ie extends y.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return k
        }
        static getWidgetsRecordConstructor() {
            return ee
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(c) {}
    };
a(ie, "Model");
var $ = ie;
$._hasValidationWidgetsValue = void 0;
var te = new y.Model.ModelFactory($);
var v = de(he());
var E = b,
    ae = class ae extends E.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("BiometicData", "biometicDataIn", "BiometicData", !0, !1, E.DataTypes.DataTypes.Record, function() {
                return E.DataTypes.ImmutableBase.getData(new S)
            }, !1, S), this.attr("_biometicDataInDataFetchStatus", "_biometicDataInDataFetchStatus", "_biometicDataInDataFetchStatus", !0, !1, E.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(E.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(ae, "VariablesRecord");
var z = ae;
z.init();
var se = class se extends E.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(se, "WidgetsRecord");
var oe = se,
    w = class w extends E.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return z
        }
        static getWidgetsRecordConstructor() {
            return oe
        }
        static get hasValidationWidgets() {
            return w._hasValidationWidgetsValue === void 0 && (w._hasValidationWidgetsValue = void 0), w._hasValidationWidgetsValue
        }
        setInputs(c) {
            "BiometicData" in c && (this.variables.biometicDataIn = c.BiometicData, "_biometicDataInDataFetchStatus" in c && (this.variables._biometicDataInDataFetchStatus = c._biometicDataInDataFetchStatus))
        }
    };
a(w, "Model");
var Q = w;
Q._hasValidationWidgetsValue = void 0;
var Ae = new E.Model.ModelFactory(Q);
var Me = {
        "vKphnONJjUeOFwjmnlT0Ow#Value": "\u0625\u0632\u0627\u0644\u0629",
        "DN3vUWMluUyIz94lp0_+EQ#Value": "\u0625\u0639\u0627\u062F\u0629 \u062A\u0633\u0645\u064A\u0629",
        "WNMuUpx1yUCTr48hJEgMnQ#Value": "\u0625\u0632\u0627\u0644\u0629",
        "nvbsMztbB0Cshortg3I78Q#Value": "\u0625\u0639\u0627\u062F\u0629 \u062A\u0633\u0645\u064A\u0629"
    },
    De = {
        "vKphnONJjUeOFwjmnlT0Ow#Value": "\u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09C1\u09A8",
        "DN3vUWMluUyIz94lp0_+EQ#Value": "\u09A8\u09BE\u09AE \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09C1\u09A8",
        "WNMuUpx1yUCTr48hJEgMnQ#Value": "\u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09C1\u09A8",
        "nvbsMztbB0Cshortg3I78Q#Value": "\u09A8\u09BE\u09AE \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09C1\u09A8"
    },
    We = {
        "vKphnONJjUeOFwjmnlT0Ow#Value": "Entfernen",
        "DN3vUWMluUyIz94lp0_+EQ#Value": "Umbenennen",
        "WNMuUpx1yUCTr48hJEgMnQ#Value": "Entfernen",
        "nvbsMztbB0Cshortg3I78Q#Value": "Umbenennen"
    },
    Le = {
        "vKphnONJjUeOFwjmnlT0Ow#Value": "Eliminar",
        "DN3vUWMluUyIz94lp0_+EQ#Value": "Renombrar",
        "WNMuUpx1yUCTr48hJEgMnQ#Value": "Eliminar",
        "nvbsMztbB0Cshortg3I78Q#Value": "Renombrar"
    },
    He = {
        "vKphnONJjUeOFwjmnlT0Ow#Value": "Supprimer",
        "DN3vUWMluUyIz94lp0_+EQ#Value": "Renommer",
        "WNMuUpx1yUCTr48hJEgMnQ#Value": "Supprimer",
        "nvbsMztbB0Cshortg3I78Q#Value": "Renommer"
    },
    Fe = {
        "vKphnONJjUeOFwjmnlT0Ow#Value": "Rimuovi",
        "DN3vUWMluUyIz94lp0_+EQ#Value": "Rinomina",
        "WNMuUpx1yUCTr48hJEgMnQ#Value": "Rimuovi",
        "nvbsMztbB0Cshortg3I78Q#Value": "Rinomina"
    },
    ke = {
        "vKphnONJjUeOFwjmnlT0Ow#Value": "\u17A2\u17BC\u179F\u1785\u17C1\u1789",
        "DN3vUWMluUyIz94lp0_+EQ#Value": "\u179A\u17C0\u1794\u1785\u17C6\u17B1\u17D2\u1799\u1790\u17D2\u1798\u17B8",
        "WNMuUpx1yUCTr48hJEgMnQ#Value": "\u17A2\u17BC\u179F\u1785\u17C1\u1789",
        "nvbsMztbB0Cshortg3I78Q#Value": "\u179A\u17C0\u1794\u1785\u17C6\u17B1\u17D2\u1799\u1790\u17D2\u1798\u17B8"
    },
    $e = {
        "vKphnONJjUeOFwjmnlT0Ow#Value": "\uC81C\uAC70",
        "DN3vUWMluUyIz94lp0_+EQ#Value": "\uC774\uB984 \uBC14\uAFB8\uAE30",
        "WNMuUpx1yUCTr48hJEgMnQ#Value": "\uC81C\uAC70",
        "nvbsMztbB0Cshortg3I78Q#Value": "\uC774\uB984 \uBC14\uAFB8\uAE30"
    },
    ze = {
        "vKphnONJjUeOFwjmnlT0Ow#Value": "Usu\u0144",
        "DN3vUWMluUyIz94lp0_+EQ#Value": "Zmie\u0144 nazw\u0119",
        "WNMuUpx1yUCTr48hJEgMnQ#Value": "Usu\u0144",
        "nvbsMztbB0Cshortg3I78Q#Value": "Zmie\u0144 nazw\u0119"
    },
    Qe = {
        "vKphnONJjUeOFwjmnlT0Ow#Value": "Remover",
        "DN3vUWMluUyIz94lp0_+EQ#Value": "Renomear",
        "WNMuUpx1yUCTr48hJEgMnQ#Value": "Remover",
        "nvbsMztbB0Cshortg3I78Q#Value": "Renomear"
    },
    je = {
        "vKphnONJjUeOFwjmnlT0Ow#Value": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
        "DN3vUWMluUyIz94lp0_+EQ#Value": "\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C",
        "WNMuUpx1yUCTr48hJEgMnQ#Value": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
        "nvbsMztbB0Cshortg3I78Q#Value": "\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C"
    },
    Je = {
        "vKphnONJjUeOFwjmnlT0Ow#Value": "\u0D89\u0DC0\u0DAD\u0DCA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
        "DN3vUWMluUyIz94lp0_+EQ#Value": "\u0DB1\u0DB8 \u0DC0\u0DD9\u0DB1\u0DC3\u0DCA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
        "WNMuUpx1yUCTr48hJEgMnQ#Value": "\u0D89\u0DC0\u0DAD\u0DCA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
        "nvbsMztbB0Cshortg3I78Q#Value": "\u0DB1\u0DB8 \u0DC0\u0DD9\u0DB1\u0DC3\u0DCA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1"
    },
    Ke = {
        "vKphnONJjUeOFwjmnlT0Ow#Value": "Ondoa",
        "DN3vUWMluUyIz94lp0_+EQ#Value": "Badili jina",
        "WNMuUpx1yUCTr48hJEgMnQ#Value": "Ondoa",
        "nvbsMztbB0Cshortg3I78Q#Value": "Badili jina"
    },
    Ge = {
        "vKphnONJjUeOFwjmnlT0Ow#Value": "\u0E25\u0E1A",
        "DN3vUWMluUyIz94lp0_+EQ#Value": "\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E0A\u0E37\u0E48\u0E2D",
        "WNMuUpx1yUCTr48hJEgMnQ#Value": "\u0E25\u0E1A",
        "nvbsMztbB0Cshortg3I78Q#Value": "\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E0A\u0E37\u0E48\u0E2D"
    },
    qe = {
        "vKphnONJjUeOFwjmnlT0Ow#Value": "Kald\u0131r",
        "DN3vUWMluUyIz94lp0_+EQ#Value": "Yeniden adland\u0131r",
        "WNMuUpx1yUCTr48hJEgMnQ#Value": "Kald\u0131r",
        "nvbsMztbB0Cshortg3I78Q#Value": "Yeniden adland\u0131r"
    },
    Ze = {
        "vKphnONJjUeOFwjmnlT0Ow#Value": "O'chirish",
        "DN3vUWMluUyIz94lp0_+EQ#Value": "Qayta nomlash",
        "WNMuUpx1yUCTr48hJEgMnQ#Value": "O'chirish",
        "nvbsMztbB0Cshortg3I78Q#Value": "Qayta nomlash"
    },
    Ye = {
        "vKphnONJjUeOFwjmnlT0Ow#Value": "X\xF3a",
        "DN3vUWMluUyIz94lp0_+EQ#Value": "\u0110\u1ED5i t\xEAn",
        "WNMuUpx1yUCTr48hJEgMnQ#Value": "X\xF3a",
        "nvbsMztbB0Cshortg3I78Q#Value": "\u0110\u1ED5i t\xEAn"
    },
    Xe = {
        "vKphnONJjUeOFwjmnlT0Ow#Value": "\u79FB\u9664",
        "DN3vUWMluUyIz94lp0_+EQ#Value": "\u91CD\u547D\u540D",
        "WNMuUpx1yUCTr48hJEgMnQ#Value": "\u79FB\u9664",
        "nvbsMztbB0Cshortg3I78Q#Value": "\u91CD\u547D\u540D"
    },
    et = {
        "vKphnONJjUeOFwjmnlT0Ow#Value": "\u79FB\u9664",
        "DN3vUWMluUyIz94lp0_+EQ#Value": "\u91CD\u547D\u540D",
        "WNMuUpx1yUCTr48hJEgMnQ#Value": "\u79FB\u9664",
        "nvbsMztbB0Cshortg3I78Q#Value": "\u91CD\u547D\u540D"
    },
    Ie = {
        "ar-001": {
            translations: Me,
            isRTL: !0
        },
        "bn-BD": {
            translations: De,
            isRTL: !1
        },
        "de-DE": {
            translations: We,
            isRTL: !1
        },
        "es-ES": {
            translations: Le,
            isRTL: !1
        },
        "fr-FR": {
            translations: He,
            isRTL: !1
        },
        "it-IT": {
            translations: Fe,
            isRTL: !1
        },
        "km-KH": {
            translations: ke,
            isRTL: !1
        },
        "ko-KR": {
            translations: $e,
            isRTL: !1
        },
        "pl-PL": {
            translations: ze,
            isRTL: !1
        },
        "pt-PT": {
            translations: Qe,
            isRTL: !1
        },
        "ru-RU": {
            translations: je,
            isRTL: !1
        },
        "si-LK": {
            translations: Je,
            isRTL: !1
        },
        "sw-KE": {
            translations: Ke,
            isRTL: !1
        },
        "th-TH": {
            translations: Ge,
            isRTL: !1
        },
        "tr-TR": {
            translations: qe,
            isRTL: !1
        },
        "uz-UZ": {
            translations: Ze,
            isRTL: !1
        },
        "vi-VN": {
            translations: Ye,
            isRTL: !1
        },
        "zh-CN": {
            translations: Xe,
            isRTL: !1
        },
        "zh-TW": {
            translations: et,
            isRTL: !1
        }
    };
var A = b; {
    let c = class c extends A.Controller.BaseViewController {
        constructor(e, t, r) {
            super(e, t, r, Ie);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onRename$Action() {
            return this.hasOwnProperty("__onRename$Action") || (this.__onRename$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    i = this.idService;
                return A.Logger.startActiveSpan("OnRename", function(n) {
                    n && (n.setAttribute("code.function", "OnRename"), n.setAttribute("outsystems.function.key", "25579e83-c878-4028-a1e9-352d635bcfeb"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnRename"), e = r.callContext(e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onRename$Action
        }
        set _onRename$Action(e) {
            this.__onRename$Action = e
        }
        get _onRemove$Action() {
            return this.hasOwnProperty("__onRemove$Action") || (this.__onRemove$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    i = this.idService;
                return A.Logger.startActiveSpan("OnRemove", function(n) {
                    n && (n.setAttribute("code.function", "OnRemove"), n.setAttribute("outsystems.function.key", "a8420c67-f275-4d3a-a2b3-306fc2c4fd4d"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnRemove"), e = r.callContext(e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onRemove$Action
        }
        set _onRemove$Action(e) {
            this.__onRemove$Action = e
        }
        onRename$Action(e) {
            var t = this.controller;
            return A.Logger.startActiveSpan("OnRename__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnRename"), r.setAttribute("outsystems.function.key", "25579e83-c878-4028-a1e9-352d635bcfeb"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onRename$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onRemove$Action(e) {
            var t = this.controller;
            return A.Logger.startActiveSpan("OnRemove__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnRemove"), r.setAttribute("outsystems.function.key", "a8420c67-f275-4d3a-a2b3-306fc2c4fd4d"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onRemove$Action, e)
                } finally {
                    r && r.end()
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
            return O.defaultTimeout
        }
    };
    a(c, "ControllerInner");
    let _ = c;
    Pe = _
}
var Pe, Te = new A.Controller.ControllerFactory(Pe, x);
var Ve = R.PlaceholderContent,
    Ft = R.IteratorPlaceholderContent,
    nt = a(function() {
        var _ = pe(function(c) {
            var f = c.model,
                e = c.controller,
                t = c.controller.idService,
                r = e.validationService,
                i = e.callContext(),
                n = W,
                d = P,
                h = {
                    props: c,
                    validateWidget: a(function(s) {
                        c.validateWidget(c, s)
                    }, "validateWidget")
                },
                o = f,
                ue = D,
                g = M,
                p = U();
            return v.createElement("div", c.rootNodeProperties, v.createElement(m, {
                align: 0,
                animate: !1,
                style: "display-flex full-width column-gap-base padding-base align-items-center passkey-item",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "Item"
                },
                _widgetRecordProvider: o
            }, v.createElement(m, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: t,
                    name: "Icon"
                },
                _widgetRecordProvider: o
            }, v.createElement(T, {
                image: I.VersionedURL.getVersionedUrl("img/uae.passkey.svg"),
                type: 0,
                _idProps: {
                    service: t,
                    uuid: "2"
                },
                _widgetRecordProvider: o
            })), v.createElement(m, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column section-grow",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "Details"
                },
                _widgetRecordProvider: o
            }, v.createElement(H, {
                extendedProperties: {
                    style: "line-height: 24px;"
                },
                style: "heading6 font-regular",
                value: f.variables.biometicDataIn.nameAttr,
                _idProps: {
                    service: t,
                    uuid: "4"
                },
                _widgetRecordProvider: o,
                value_dataFetchStatus: fe.calculateDataFetchStatus(f.variables._biometicDataInDataFetchStatus)
            })), v.createElement(m, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: t,
                    name: "Action"
                },
                _widgetRecordProvider: o
            }, ue(ye.isDesktop$Action(i).isDesktopOut, !1, this, function() {
                return [v.createElement(m, {
                    align: 0,
                    animate: !1,
                    style: "display-flex align-items-center",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "6"
                    },
                    _widgetRecordProvider: o
                }, v.createElement(m, {
                    align: 0,
                    animate: !1,
                    extendedEvents: {
                        onClick: a(function() {
                            var s = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                            e.onRemove$Action(e.callContext(s))
                        }, "onClick")
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "7"
                    },
                    _widgetRecordProvider: o
                }, v.createElement(C, {
                    style: "passkeys-action__item--text font-bold",
                    text: [g(d("nvbsMztbB0Cshortg3I78Q#Value", "Rename"))],
                    _idProps: {
                        service: t,
                        uuid: "8"
                    },
                    _widgetRecordProvider: o
                })), v.createElement(Y, {
                    getOwnerSpan: a(function() {
                        return p.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return p.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        IsVertical: !0
                    },
                    events: {
                        _handleError: a(function(s) {
                            e.handleError(s)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: t,
                        uuid: "9",
                        alias: "1"
                    },
                    _widgetRecordProvider: o,
                    _dependencies: []
                }), v.createElement(m, {
                    align: 0,
                    animate: !1,
                    extendedEvents: {
                        onClick: a(function() {
                            var s = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                            e.onRename$Action(e.callContext(s))
                        }, "onClick")
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "10"
                    },
                    _widgetRecordProvider: o
                }, v.createElement(C, {
                    style: "passkeys-action__item--text font-bold passkeys-action__item--text-remove",
                    text: [g(d("WNMuUpx1yUCTr48hJEgMnQ#Value", "Remove"))],
                    _idProps: {
                        service: t,
                        uuid: "11"
                    },
                    _widgetRecordProvider: o
                })))]
            }, function() {
                return [v.createElement(Se, {
                    popoverWidth: 168,
                    style: "popover passkeys-action",
                    _idProps: {
                        service: t,
                        uuid: "12"
                    },
                    _widgetRecordProvider: o,
                    placeholders: {
                        topContent: new Ve(function() {
                            return [v.createElement(Ee, {
                                icon: "ellipsis-v",
                                iconSize: 0,
                                style: "icon",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "13"
                                },
                                _widgetRecordProvider: o
                            })]
                        }),
                        bottomContent: new Ve(function() {
                            return [v.createElement(m, {
                                align: 0,
                                animate: !1,
                                style: "item-color",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "14"
                                },
                                _widgetRecordProvider: o
                            }, v.createElement(m, {
                                align: 0,
                                animate: !1,
                                extendedEvents: {
                                    onClick: a(function() {
                                        var s = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                        e.onRename$Action(e.callContext(s))
                                    }, "onClick")
                                },
                                style: "passkeys-action__item",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "RenameBtn"
                                },
                                _widgetRecordProvider: o
                            }, g(d("DN3vUWMluUyIz94lp0_+EQ#Value", "Rename"))), v.createElement(m, {
                                align: 0,
                                animate: !1,
                                extendedEvents: {
                                    onClick: a(function() {
                                        var s = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                        e.onRemove$Action(e.callContext(s))
                                    }, "onClick")
                                },
                                style: "passkeys-action__item",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "RemoveBtn"
                                },
                                _widgetRecordProvider: o
                            }, g(d("vKphnONJjUeOFwjmnlT0Ow#Value", "Remove"))))]
                        })
                    }
                })]
            }))))
        }, {
            topLevelComponent: !1,
            getAttributes: a(function() {
                return {
                    codeFunction: "BiometricItem",
                    functionKey: "fea3c123-f5cf-4123-a7b8-dbf86d68c18f",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Biometrics.BiometricItem",
            modelFactory: Ae,
            controllerFactory: Te
        });
        return _.getCssDependencies = function() {
            return ["css/uae.Biometrics.BiometricItem.css", "css/OutSystemsReactWidgets.css"]
        }, _.getJsDependencies = function() {
            return []
        }, _.getBlocks = function() {
            return [Y]
        }, _
    }, "componentFactory"),
    le = nt();
var ce = R.PlaceholderContent,
    it = R.IteratorPlaceholderContent,
    ot = a(function() {
        var _ = ge(function(c) {
            var f = c.model,
                e = c.controller,
                t = c.controller.idService,
                r = e.validationService,
                i = e.callContext(),
                n = W,
                d = P,
                h = {
                    props: c,
                    validateWidget: a(function(s) {
                        c.validateWidget(c, s)
                    }, "validateWidget")
                },
                o = f,
                ue = D,
                g = M,
                p = U();
            return l.createElement("div", c.rootNodeProperties, l.createElement(K, {
                getOwnerSpan: a(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: a(function(s) {
                        e.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: t,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: o,
                _dependencies: []
            }), l.createElement(Z, {
                getOwnerSpan: a(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ShowClosebutton: !0,
                    ShowInfoButton: !1,
                    ShowBackbutton: !1
                },
                events: {
                    _handleError: a(function(s) {
                        e.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: t,
                    uuid: "1",
                    alias: "2"
                },
                _widgetRecordProvider: o,
                placeholders: {
                    contentbody: new ce(function() {
                        return [l.createElement(m, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "2"
                            },
                            _widgetRecordProvider: o
                        }, l.createElement(m, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "3"
                            },
                            _widgetRecordProvider: o
                        }, l.createElement(C, {
                            style: "biometric-verification-title",
                            text: [g(d("1o7cZ8nBvEm45bUIMWuUAA#Value", "Biometrics"))],
                            _idProps: {
                                service: t,
                                uuid: "4"
                            },
                            _widgetRecordProvider: o
                        })), l.createElement(be, {
                            animateItems: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mode: 0,
                            source: f.variables.biometricListVar,
                            style: "list list-group",
                            tag: "div",
                            _idProps: {
                                service: t,
                                uuid: "5"
                            },
                            _widgetRecordProvider: o,
                            placeholders: {
                                content: new it(function(s, Ne) {
                                    return [l.createElement(le, {
                                        getOwnerSpan: a(function() {
                                            return p.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: a(function() {
                                            return p.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            BiometicData: f.variables.biometricListVar.getCurrent(Ne.iterationContext)
                                        },
                                        events: {
                                            _handleError: a(function(Be) {
                                                e.handleError(Be)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: r
                                        },
                                        _idProps: {
                                            service: s,
                                            uuid: "6",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: o,
                                        _dependencies: []
                                    })]
                                }, i, t, "1")
                            },
                            _dependencies: []
                        }))]
                    })
                },
                _dependencies: [n(f.variables.biometricListVar)]
            }), l.createElement(J, {
                showPopup: f.variables.showRenamePopupVar,
                style: "popup-dialog",
                _idProps: {
                    service: t,
                    name: "Rename"
                },
                _widgetRecordProvider: o
            }, l.createElement(j, {
                _validationProps: {
                    validationService: r
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: "form display-flex flex-direction-column row-gap-m",
                _idProps: {
                    service: t,
                    name: "Form"
                },
                _widgetRecordProvider: o
            }, l.createElement(m, {
                align: 0,
                animate: !1,
                style: "display-flex justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "9"
                },
                _widgetRecordProvider: o
            }, l.createElement(C, {
                style: "font-bold biometric-popup-title",
                text: [g(d("mqUYWqmNqUiWQPlnMgvw0Q#Value", "Rename"))],
                _idProps: {
                    service: t,
                    uuid: "10"
                },
                _widgetRecordProvider: o
            }), l.createElement(T, {
                extendedEvents: {
                    onClick: a(function() {
                        var s = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                        e.cancelOnClick$Action("rename", e.callContext(s))
                    }, "onClick")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: I.VersionedURL.getVersionedUrl("img/uae.iconclose.svg"),
                style: "cursor-pointer",
                type: 0,
                _idProps: {
                    service: t,
                    uuid: "11"
                },
                _widgetRecordProvider: o
            })), l.createElement(m, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "12"
                },
                _widgetRecordProvider: o
            }, l.createElement(G, {
                getOwnerSpan: a(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    AlignIconRight: _e.getlanguage() === "en-US"
                },
                events: {
                    _handleError: a(function(s) {
                        e.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r,
                    validationParentId: t.getId("Form")
                },
                _idProps: {
                    service: t,
                    uuid: "13",
                    alias: "4"
                },
                _widgetRecordProvider: o,
                placeholders: {
                    icon: new ce(function() {
                        return [l.createElement(m, {
                            align: 0,
                            animate: !0,
                            visible: f.getCachedValue(t.getId("7sNrvKBeuEyZ6Bt3dxmm0Q.Visible"), function() {
                                return ve.length(f.variables.biometricNameVar) > 1
                            }, function() {
                                return f.variables.biometricNameVar
                            }),
                            _idProps: {
                                service: t,
                                uuid: "14"
                            },
                            _widgetRecordProvider: o
                        }, l.createElement(T, {
                            extendedEvents: {
                                onClick: a(function() {
                                    var s = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                    e.clearInput$Action(e.callContext(s))
                                }, "onClick")
                            },
                            image: I.VersionedURL.getVersionedUrl("img/uae.clearbiometric.svg"),
                            style: "cursor-pointer",
                            type: 0,
                            _idProps: {
                                service: t,
                                uuid: "15"
                            },
                            _widgetRecordProvider: o
                        }))]
                    }),
                    input: new ce(function() {
                        return [l.createElement(Ce, {
                            _validationProps: {
                                validationService: r,
                                validationParentId: t.getId("Form")
                            },
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 0,
                            mandatory: !1,
                            maxLength: 50,
                            style: "form-control",
                            variable: f.createVariable(me.DataTypes.Text, f.variables.biometricNameVar, function(s) {
                                f.variables.biometricNameVar = s
                            }),
                            _idProps: {
                                service: t,
                                name: "Input_BiometricName"
                            },
                            _widgetRecordProvider: o
                        })]
                    })
                },
                _dependencies: [n(f.variables.biometricNameVar)]
            })), l.createElement(m, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "17"
                },
                _widgetRecordProvider: o
            }, l.createElement(L, {
                enabled: !0,
                isDefault: !0,
                onClick: a(function() {
                    h.validateWidget(t.getId("Form"));
                    var s = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                    e.saveChangesOnClick$Action(e.callContext(s))
                }, "onClick"),
                style: "btn btn-primary action-button full-width",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "18"
                },
                _widgetRecordProvider: o
            }, g(d("ZcPArNgZNkiYM1gIT1hjkw#Value", "Save changes")))))), l.createElement(J, {
                showPopup: f.variables.showRemovePopupVar,
                style: "popup-dialog",
                _idProps: {
                    service: t,
                    name: "RemovePopup"
                },
                _widgetRecordProvider: o
            }, l.createElement(j, {
                _validationProps: {
                    validationService: r
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: "form display-flex flex-direction-column row-gap-m",
                _idProps: {
                    service: t,
                    name: "Form2"
                },
                _widgetRecordProvider: o
            }, l.createElement(m, {
                align: 0,
                animate: !1,
                style: "display-flex justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "21"
                },
                _widgetRecordProvider: o
            }, l.createElement(H, {
                style: "font-bold biometric-popup-title",
                value: V.resolve(N.TranslationsService).getMessage("IST5GZO5JEqFrsratnqeEQ#ValueExpression.-1538478084.1", "Remove ") + V.resolve(N.TranslationsService).getMessage("IST5GZO5JEqFrsratnqeEQ#ValueExpression.8220.1", "\u201C") + f.variables.biometricNameVar + V.resolve(N.TranslationsService).getMessage("IST5GZO5JEqFrsratnqeEQ#ValueExpression.285666.1", " \u201D?"),
                _idProps: {
                    service: t,
                    uuid: "22"
                },
                _widgetRecordProvider: o
            })), l.createElement(m, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "23"
                },
                _widgetRecordProvider: o
            }, l.createElement(C, {
                style: "font-size-base",
                text: [g(d("mttqTuCxEE2M_MqvMCRNOg#Value", "Are you sure you want to remove this biometrics?"))],
                _idProps: {
                    service: t,
                    uuid: "24"
                },
                _widgetRecordProvider: o
            })), l.createElement(m, {
                align: 0,
                animate: !1,
                style: "display-flex row-gap-s flex-direction-column biometric-popup",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "25"
                },
                _widgetRecordProvider: o
            }, l.createElement(L, {
                enabled: !0,
                isDefault: !0,
                onClick: a(function() {
                    h.validateWidget(t.getId("Form2"));
                    var s = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                    e.saveChangesOnClick$Action(e.callContext(s))
                }, "onClick"),
                style: "btn btn-primary action-button full-width",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "26"
                },
                _widgetRecordProvider: o
            }, g(d("QFa_qI7wP0SLgGWcXFJ9yQ#Value", "Remove"))), l.createElement(L, {
                enabled: !0,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                isDefault: !1,
                onClick: a(function() {
                    h.validateWidget(t.getId("Form2"));
                    var s = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                    e.cancelOnClick$Action("remove", e.callContext(s))
                }, "onClick"),
                style: "btn secondary-button full-width",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "27"
                },
                _widgetRecordProvider: o
            }, g(d("l2lZtKO920GFmyZAjIrPXg#Value", "Cancel")))))))
        }, {
            topLevelComponent: !0,
            getAttributes: a(function() {
                return {
                    codeFunction: "BiometricsList",
                    functionKey: "b3b64fdf-933b-44d0-8912-d178be13dadb",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Biometrics.BiometricsList",
            modelFactory: te,
            controllerFactory: X,
            getTitle: a(function() {
                return P("30+2szuT0ESJEtF4vhPa2w#Title", "BiometricsList")
            }, "getTitle")
        });
        return _.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.Biometrics.BiometricsList.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, _.getJsDependencies = function() {
            return []
        }, _.getBlocks = function() {
            return [K, Z, le, G]
        }, _
    }, "componentFactory"),
    at = ot();
export {
    X as controllerModule, te as modelModule, at as viewModule, q as webFlowControllerModule
};