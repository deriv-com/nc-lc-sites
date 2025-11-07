import {
    a as X
} from "./_oschunk-ACEDINHZ.js";
import {
    a as Y
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as J
} from "./_oschunk-SNXHD6UR.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as V,
    f as v,
    h as S,
    n as W,
    u as H
} from "./_oschunk-VR5BNL2K.js";
import {
    a as ve,
    g as P,
    m as F,
    n as ge,
    o as ye,
    q as M,
    r as N,
    s as R,
    t as T
} from "./_oschunk-4VHUVDBV.js";
import {
    a as I
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    A as fe,
    Qb as me,
    Sb as E,
    Ua as G,
    _a as Q,
    a as K,
    t as q,
    ub as Z
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as h,
    c as a,
    e as ue,
    m as g,
    n as y,
    p as k,
    w as x
} from "./_oschunk-M5BUVJ72.js";
var we = {
        "v+CPGYED8kW1f4eKjKqTQQ#Title": "\u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u062D\u0648\u064A\u0644 | Deriv",
        "v+CPGYED8kW1f4eKjKqTQQ#TitleExpression.-959039807.1": "\u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u062D\u0648\u064A\u0644 | Deriv"
    },
    pe = {
        "ar-001": {
            translations: we,
            isRTL: !0
        }
    };
var L = h; {
    let o = class o extends L.Controller.BaseViewController {
        constructor(e, t, r) {
            super(e, t, r, pe);
            var c = this.controller;
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
                var t = this.model,
                    r = this.controller,
                    c = this.idService;
                return L.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "8aafbd88-de4c-4ae6-97c2-897358047edd"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnReady"), e = r.callContext(e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        onReady$Action(e) {
            var t = this.controller;
            return L.Logger.startActiveSpan("OnReady__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "8aafbd88-de4c-4ae6-97c2-897358047edd"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
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
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var t = this.controller,
                    r = this.model,
                    c = this.idService;
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
                return X.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return E.defaultTimeout
        }
    };
    a(o, "ControllerInner");
    let f = o;
    _e = f
}
var _e, ee = new L.Controller.ControllerFactory(_e, I);
var b = ue(ve());
var p = h,
    ne = class ne extends p.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("transfer_response", "transfer_responseVar", "transfer_response", !0, !1, p.DataTypes.DataTypes.Record, function() {
                return p.DataTypes.ImmutableBase.getData(new q)
            }, !1, q), this.attr("transfer_data", "transfer_dataVar", "transfer_data", !0, !1, p.DataTypes.DataTypes.Record, function() {
                return p.DataTypes.ImmutableBase.getData(new Q)
            }, !1, Q), this.attr("error_message", "error_messageVar", "error_message", !0, !1, p.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("is_daily_limit_error", "is_daily_limit_errorVar", "is_daily_limit_error", !0, !1, p.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(p.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(ne, "VariablesRecord");
var B = ne;
B.init();
var ae = class ae extends p.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(ae, "WidgetsRecord");
var te = ae,
    ie = class ie extends p.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return B
        }
        static getWidgetsRecordConstructor() {
            return te
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(o) {}
    };
a(ie, "Model");
var $ = ie;
$._hasValidationWidgetsValue = void 0;
var he = new p.Model.ModelFactory($);
var D = h,
    le = class le extends D.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(D.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(le, "VariablesRecord");
var z = le;
z.init();
var de = class de extends D.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(de, "WidgetsRecord");
var oe = de,
    w = class w extends D.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return z
        }
        static getWidgetsRecordConstructor() {
            return oe
        }
        static get hasValidationWidgets() {
            return w._hasValidationWidgetsValue === void 0 && (w._hasValidationWidgetsValue = void 0 || void 0 || void 0), w._hasValidationWidgetsValue
        }
        setInputs(o) {}
    };
a(w, "Model");
var U = w;
U._hasValidationWidgetsValue = void 0;
var se = new D.Model.ModelFactory(U);
var s = ue(ve());
var xe = {
        "Qzeq7vlSMEiJLwHB1vuNPQ#Value": "\u062D\u0633\u0646\u064B\u0627",
        "Zgn8rwVaX0C645tEuMmnRg#Value": "\u0644\u064A\u0633 \u0627\u0644\u0622\u0646",
        "dvqa8Gr4y0uwmXmMt46V1g#Value": "\u062D\u0627\u0648\u0644 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649",
        "W5Dfyna6ckiYJpkbhFbx0w#ValueExpression.140529138.1": "\u0641\u0634\u0644 \u0627\u0644\u062A\u062D\u0648\u064A\u0644",
        "vEb+5zDuh06JdrnXobPRsQ#Value": "\u062A\u0645",
        "K0BZsrMeF0Kwjbs9aUFTIw#ValueExpression.-2002514104.1": "\u0633\u064A\u062A\u0645 \u0627\u0639\u062A\u0645\u0627\u062F \u0627\u0644\u0645\u0628\u0644\u063A \u0641\u064A ",
        "K0BZsrMeF0Kwjbs9aUFTIw#ValueExpression.1493631867.1": "\u062D\u0633\u0627\u0628 MT5",
        "K0BZsrMeF0Kwjbs9aUFTIw#ValueExpression.1929313670.1": " \u0641\u0648\u0631 \u0625\u062A\u0645\u0627\u0645 \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u062A\u062D\u0648\u064A\u0644.",
        "_kqkMuXyFEe6uGHR1CHfsg#ValueExpression.-1235542230.1": "\u0642\u064A\u062F \u0627\u0644\u062A\u0646\u0641\u064A\u0630",
        "+d4BfSaqNES2q+5qqzj64w#ValueExpression.1359424991.1": "\u062A\u062D\u0648\u064A\u0644\u0643 \u0644\u0640",
        "4+uhgeVo5EuPZTBGD1Vh8Q#ValueExpression.1062498408.1": "\u0625\u0644\u0649 ",
        "zA0GwzZYEU+lGuRmkDSMIw#ValueExpression.-2105887533.1": "\u0644\u0642\u062F \u0642\u0645\u062A \u0628\u0627\u0644\u062A\u062D\u0648\u064A\u0644",
        "3gBzhkg2BUq7t8iYkyC1vw#Value.-619201290.1": "\u0644\u0645 \u0646\u062A\u0645\u0643\u0646 \u0645\u0646 \u0645\u0639\u0627\u0644\u062C\u0629 \u0637\u0644\u0628 \u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643. \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649."
    },
    Ee = {
        "ar-001": {
            translations: xe,
            isRTL: !0
        }
    };
var d = h; {
    let o = class o extends d.Controller.BaseViewController {
        constructor(e, t, r) {
            super(e, t, r, Ee);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _doneOnClick$Action() {
            return this.hasOwnProperty("__doneOnClick$Action") || (this.__doneOnClick$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    c = this.idService;
                return d.Logger.startActiveSpan("DoneOnClick", function(n) {
                    n && (n.setAttribute("code.function", "DoneOnClick"), n.setAttribute("outsystems.function.key", "3e51dfd8-3e05-45e2-9ccf-72761982fed6"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("DoneOnClick"), e = r.callContext(e);
                        var m = new d.DataTypes.VariableHolder(new(d.Controller.BaseController.getJSONDeserializeOutputType(G)));
                        return m.value.dataOut = d.JSONUtils.deserializeFromJSON(Z.gettransfer_init(), G, !1), m.value.dataOut.wallet_idAttr.gt(d.BuiltinFunctions.integerToLongInteger(0)) ? d.Navigation.navigateTo(d.Navigation.generateScreenURL("uae", "wallet", {}), d.Transitions.createTransition(d.Transitions.TransitionAnimation.Default), e, !0) : (E.setAccountDetailsInputs$Action((function() {
                            var _ = new fe;
                            return _.mt5_typeAttr = (Z.getSelectedMT5AccountType() === "standard" ? K.mT5Types.standard : K.mT5Types.swapFree).toString(), _.is_demoAttr = !1, _.account_idAttr = t.variables.transfer_responseVar.dataAttr.length > 0 ? t.variables.transfer_responseVar.dataAttr.getCurrent(e.iterationContext).account_idAttr : m.value.dataOut.account_idAttr, _
                        })(), e), d.Navigation.navigateTo(d.Navigation.generateScreenURL("uae", "mt5/account-details", {
                            is_demo: d.DataConversion.ServerDataConverter.to(!1, d.DataTypes.DataTypes.Boolean)
                        }), d.Transitions.createTransition(d.Transitions.TransitionAnimation.Default), e, !0))
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__doneOnClick$Action
        }
        set _doneOnClick$Action(e) {
            this.__doneOnClick$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    c = this.idService;
                return d.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "54212c2e-6150-4cd3-b4a0-07f8dc027f89"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnReady"), e = r.callContext(e);
                        var m = new d.DataTypes.VariableHolder,
                            _ = new d.DataTypes.VariableHolder;
                        _.value = E.getTransferData$Action(e), t.variables.transfer_dataVar = _.value.transfer_dataOut, m.value = E.getTransferResponse$Action(e), t.variables.transfer_responseVar = m.value.transfer_responseOut, t.variables.is_daily_limit_errorVar = t.variables.transfer_responseVar.errorsAttr.length > 0 && t.variables.transfer_responseVar.errorsAttr.getItem(0).codeAttr === "DailyLimitError", t.variables.transfer_responseVar.errorsAttr.length > 0 && (t.variables.transfer_responseVar.errorsAttr.getItem(0).codeAttr === "ExchangeRateError" || t.variables.transfer_responseVar.errorsAttr.getItem(0).codeAttr === "DailyLimitError") ? t.variables.error_messageVar = t.variables.transfer_responseVar.errorsAttr.getItem(0).messageAttr : t.variables.error_messageVar = d.Injector.resolve(d.ServiceNames.TranslationsService).getMessage("3gBzhkg2BUq7t8iYkyC1vw#Value.-619201290.1", "We couldn\u2019t process your transfer. Please try again.")
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _tryAgainOnClick$Action() {
            return this.hasOwnProperty("__tryAgainOnClick$Action") || (this.__tryAgainOnClick$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    c = this.idService;
                return d.Logger.startActiveSpan("TryAgainOnClick", function(n) {
                    n && (n.setAttribute("code.function", "TryAgainOnClick"), n.setAttribute("outsystems.function.key", "a26d635e-e7ca-4a45-99cc-40a1a097784c"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return r.ensureControllerAlive("TryAgainOnClick"), e = r.callContext(e), d.Navigation.navigateTo(d.Navigation.generateScreenURL("uae", "transfer-amount", {}), d.Transitions.createTransition(d.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__tryAgainOnClick$Action
        }
        set _tryAgainOnClick$Action(e) {
            this.__tryAgainOnClick$Action = e
        }
        doneOnClick$Action(e) {
            var t = this.controller;
            return d.Logger.startActiveSpan("DoneOnClick__proxy", function(r) {
                r && (r.setAttribute("code.function", "DoneOnClick"), r.setAttribute("outsystems.function.key", "3e51dfd8-3e05-45e2-9ccf-72761982fed6"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._doneOnClick$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return d.Logger.startActiveSpan("OnReady__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "54212c2e-6150-4cd3-b4a0-07f8dc027f89"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        tryAgainOnClick$Action(e) {
            var t = this.controller;
            return d.Logger.startActiveSpan("TryAgainOnClick__proxy", function(r) {
                r && (r.setAttribute("code.function", "TryAgainOnClick"), r.setAttribute("outsystems.function.key", "a26d635e-e7ca-4a45-99cc-40a1a097784c"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._tryAgainOnClick$Action, e)
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
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var t = this.controller,
                    r = this.model,
                    c = this.idService;
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
            return E.defaultTimeout
        }
    };
    a(o, "ControllerInner");
    let f = o;
    be = f
}
var be, Pe = new d.Controller.ControllerFactory(be, I);
var ut = P.PlaceholderContent,
    ft = P.IteratorPlaceholderContent,
    Ve = a(function() {
        var f = ye(function(o) {
            var l = o.model,
                e = o.controller,
                t = o.controller.idService,
                r = e.validationService,
                c = e.callContext(),
                n = R,
                m = T,
                _ = {
                    props: o,
                    validateWidget: a(function(u) {
                        o.validateWidget(o, u)
                    }, "validateWidget")
                },
                i = l,
                O = N,
                C = M,
                A = F();
            return s.createElement("div", o.rootNodeProperties, O(l.variables.transfer_responseVar.dataAttr.length > 0 && (l.variables.transfer_responseVar.dataAttr.getItem(0).statusAttr === "pending" || l.variables.transfer_responseVar.dataAttr.getItem(0).statusAttr === "completed"), !1, this, function() {
                return [s.createElement(v, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "display: flex; flex-direction: column; height: 100%;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "100%"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "0"
                    },
                    _widgetRecordProvider: i
                }, O(l.variables.transfer_responseVar.dataAttr.getItem(0).statusAttr === "completed", !1, this, function() {
                    return [s.createElement(v, {
                        align: 0,
                        animate: !1,
                        extendedProperties: {
                            style: "align-items: center; align-self: stretch; display: flex; flex: 1 0 0; flex-direction: column; gap: 24px; height: 100%; justify-content: start; padding-bottom: 24px;"
                        },
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "1"
                        },
                        _widgetRecordProvider: i
                    }, s.createElement(W, {
                        extendedProperties: {
                            style: "align-items: center; display: flex; height: 96px; justify-content: center; padding: 0px 16px;"
                        },
                        gridProperties: {
                            width: "96px"
                        },
                        image: k.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                        type: 0,
                        _idProps: {
                            service: t,
                            uuid: "2"
                        },
                        _widgetRecordProvider: i
                    }), s.createElement(v, {
                        align: 0,
                        animate: !1,
                        extendedProperties: {
                            style: "align-items: center; align-self: stretch; display: flex; flex-direction: column; gap: 8px;"
                        },
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "3"
                        },
                        _widgetRecordProvider: i
                    }, s.createElement(S, {
                        extendedProperties: {
                            style: "color: var(--text-brandPrimaryProminent, #00375C); font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                        },
                        gridProperties: {
                            marginLeft: "0"
                        },
                        value: g.resolve(y.TranslationsService).getMessage("zA0GwzZYEU+lGuRmkDSMIw#ValueExpression.-2105887533.1", "You've transfered"),
                        _idProps: {
                            service: t,
                            uuid: "4"
                        },
                        _widgetRecordProvider: i
                    }), s.createElement(S, {
                        extendedProperties: {
                            style: "color: var(--text-brandPrimaryProminent, #00375C); font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                        },
                        gridProperties: {
                            marginLeft: "0"
                        },
                        value: l.getCachedValue(t.getId("Q7qFLaw7Fk2seFD3ZHBkmA.Value"), function() {
                            return (l.variables.transfer_responseVar.dataAttr.getItem(0).metadataAttr.metadataAttr.toAttr.currencyAttr === "AED" || l.variables.transfer_responseVar.dataAttr.getItem(0).metadataAttr.metadataAttr.toAttr.currencyAttr === "USD" ? x.formatCurrency(l.variables.transfer_responseVar.dataAttr.getItem(0).metadataAttr.metadataAttr.toAttr.amountAttr, "", 2, ".", ",") : x.formatCurrency(l.variables.transfer_responseVar.dataAttr.getItem(0).metadataAttr.metadataAttr.toAttr.amountAttr, "", 8, ".", ",")) + " " + l.variables.transfer_responseVar.dataAttr.getItem(0).metadataAttr.metadataAttr.toAttr.currencyAttr
                        }, function() {
                            return l.variables.transfer_responseVar.dataAttr.getItem(0).metadataAttr.metadataAttr.toAttr.currencyAttr
                        }, function() {
                            return l.variables.transfer_responseVar.dataAttr.getItem(0).metadataAttr.metadataAttr.toAttr.amountAttr
                        }),
                        _idProps: {
                            service: t,
                            uuid: "5"
                        },
                        _widgetRecordProvider: i
                    }), s.createElement(S, {
                        extendedProperties: {
                            style: "---comment-7: /* 150% */; color: var(--text-brandPrimaryProminent, #00375C); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px; text-align: center;"
                        },
                        gridProperties: {
                            marginLeft: "0"
                        },
                        value: g.resolve(y.TranslationsService).getMessage("4+uhgeVo5EuPZTBGD1Vh8Q#ValueExpression.1062498408.1", "to your ") + l.variables.transfer_responseVar.dataAttr.getItem(0).metadataAttr.metadataAttr.toAttr.nameAttr + ".",
                        _idProps: {
                            service: t,
                            uuid: "6"
                        },
                        _widgetRecordProvider: i
                    })))]
                }, function() {
                    return [s.createElement(v, {
                        align: 0,
                        animate: !1,
                        extendedProperties: {
                            style: "align-items: center; align-self: stretch; display: flex; flex: 1 0 0; flex-direction: column; gap: 24px; height: 100%; justify-content: start; padding-bottom: 24px;"
                        },
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "7"
                        },
                        _widgetRecordProvider: i
                    }, s.createElement(W, {
                        extendedProperties: {
                            style: "align-items: center; display: flex; height: 96px; justify-content: center; padding: 0px 16px;"
                        },
                        gridProperties: {
                            width: "96px"
                        },
                        image: k.VersionedURL.getVersionedUrl("img/uae.wait.svg"),
                        type: 0,
                        _idProps: {
                            service: t,
                            uuid: "8"
                        },
                        _widgetRecordProvider: i
                    }), s.createElement(v, {
                        align: 0,
                        animate: !1,
                        extendedProperties: {
                            style: "align-items: center; align-self: stretch; display: flex; flex-direction: column; gap: 8px;"
                        },
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "9"
                        },
                        _widgetRecordProvider: i
                    }, s.createElement(S, {
                        extendedProperties: {
                            style: "color: var(--text-brandPrimaryProminent, #00375C); font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                        },
                        gridProperties: {
                            marginLeft: "0"
                        },
                        value: g.resolve(y.TranslationsService).getMessage("+d4BfSaqNES2q+5qqzj64w#ValueExpression.1359424991.1", "Your transfer of"),
                        _idProps: {
                            service: t,
                            uuid: "10"
                        },
                        _widgetRecordProvider: i
                    }), s.createElement(S, {
                        extendedProperties: {
                            style: "color: var(--text-brandPrimaryProminent, #00375C); font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                        },
                        gridProperties: {
                            marginLeft: "0"
                        },
                        value: l.getCachedValue(t.getId("+KYK9xBLh06dpWLODSQEXw.Value"), function() {
                            return (l.variables.transfer_responseVar.dataAttr.getItem(0).metadataAttr.metadataAttr.toAttr.currencyAttr === "AED" || l.variables.transfer_responseVar.dataAttr.getItem(0).metadataAttr.metadataAttr.toAttr.currencyAttr === "USD" ? x.formatCurrency(l.variables.transfer_responseVar.dataAttr.getItem(0).metadataAttr.metadataAttr.toAttr.amountAttr, "", 2, ".", ",") : x.formatCurrency(l.variables.transfer_responseVar.dataAttr.getItem(0).metadataAttr.metadataAttr.toAttr.amountAttr, "", 8, ".", ",")) + " " + l.variables.transfer_responseVar.dataAttr.getItem(0).metadataAttr.metadataAttr.toAttr.currencyAttr
                        }, function() {
                            return l.variables.transfer_responseVar.dataAttr.getItem(0).metadataAttr.metadataAttr.toAttr.currencyAttr
                        }, function() {
                            return l.variables.transfer_responseVar.dataAttr.getItem(0).metadataAttr.metadataAttr.toAttr.amountAttr
                        }),
                        _idProps: {
                            service: t,
                            uuid: "11"
                        },
                        _widgetRecordProvider: i
                    }), s.createElement(S, {
                        extendedProperties: {
                            style: "color: var(--text-brandPrimaryProminent, #00375C); font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                        },
                        gridProperties: {
                            marginLeft: "0"
                        },
                        value: g.resolve(y.TranslationsService).getMessage("_kqkMuXyFEe6uGHR1CHfsg#ValueExpression.-1235542230.1", "is in process"),
                        _idProps: {
                            service: t,
                            uuid: "12"
                        },
                        _widgetRecordProvider: i
                    }), s.createElement(S, {
                        extendedProperties: {
                            style: "---comment-7: /* 150% */; color: var(--text-brandPrimaryProminent, #00375C); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px; text-align: center;"
                        },
                        gridProperties: {
                            marginLeft: "0"
                        },
                        value: l.getCachedValue(t.getId("X8qONuLD0kSOwnK44jMslA.Value"), function() {
                            return g.resolve(y.TranslationsService).getMessage("K0BZsrMeF0Kwjbs9aUFTIw#ValueExpression.-2002514104.1", "The amount will be credited to your ") + (l.variables.transfer_responseVar.dataAttr.getItem(0).metadataAttr.metadataAttr.toAttr.typeAttr === "wallet" ? "wallet" : g.resolve(y.TranslationsService).getMessage("K0BZsrMeF0Kwjbs9aUFTIw#ValueExpression.1493631867.1", "MT5 account")) + g.resolve(y.TranslationsService).getMessage("K0BZsrMeF0Kwjbs9aUFTIw#ValueExpression.1929313670.1", " once the transfer is complete.")
                        }, function() {
                            return l.variables.transfer_responseVar.dataAttr.getItem(0).metadataAttr.metadataAttr.toAttr.typeAttr
                        }),
                        _idProps: {
                            service: t,
                            uuid: "13"
                        },
                        _widgetRecordProvider: i
                    })))]
                }), s.createElement(V, {
                    enabled: !0,
                    extendedProperties: {
                        style: "margin-top: 16px;"
                    },
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    isDefault: !1,
                    onClick: a(function() {
                        var u = typeof c != "undefined" && c !== null ? c.clone() : e.callContext().clone();
                        e.doneOnClick$Action(e.callContext(u))
                    }, "onClick"),
                    style: "btn btn-primary action-button",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "14"
                    },
                    _widgetRecordProvider: i
                }, s.createElement(H, {
                    extendedProperties: {
                        style: "font-size: 16px; font-weight: bold;"
                    },
                    text: [C(m("vEb+5zDuh06JdrnXobPRsQ#Value", "Done"))],
                    _idProps: {
                        service: t,
                        uuid: "15"
                    },
                    _widgetRecordProvider: i
                })))]
            }, function() {
                return [s.createElement(v, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "display: flex; flex-direction: column; height: 100%;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "100%"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "16"
                    },
                    _widgetRecordProvider: i
                }, s.createElement(v, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; align-self: stretch; display: flex; flex: 1 0 0; flex-direction: column; gap: 24px; height: 100%; justify-content: center; padding-bottom: 24px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "17"
                    },
                    _widgetRecordProvider: i
                }, s.createElement(W, {
                    image: k.VersionedURL.getVersionedUrl("img/uae.error.svg"),
                    type: 0,
                    _idProps: {
                        service: t,
                        uuid: "18"
                    },
                    _widgetRecordProvider: i
                }), s.createElement(v, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; align-self: stretch; display: flex; flex-direction: column; gap: 8px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "19"
                    },
                    _widgetRecordProvider: i
                }, s.createElement(S, {
                    extendedProperties: {
                        style: "color: var(--text-brandPrimaryProminent, #00375C); font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                    },
                    gridProperties: {
                        marginLeft: "0"
                    },
                    value: g.resolve(y.TranslationsService).getMessage("W5Dfyna6ckiYJpkbhFbx0w#ValueExpression.140529138.1", "Transfer failed"),
                    _idProps: {
                        service: t,
                        uuid: "20"
                    },
                    _widgetRecordProvider: i
                }), s.createElement(S, {
                    extendedProperties: {
                        style: "---comment-7: /* 150% */; color: var(--text-brandPrimaryProminent, #00375C); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px; text-align: center;"
                    },
                    gridProperties: {
                        marginLeft: "0"
                    },
                    value: l.variables.error_messageVar,
                    _idProps: {
                        service: t,
                        uuid: "21"
                    },
                    _widgetRecordProvider: i
                }))), s.createElement(v, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; align-self: stretch; display: flex; flex-direction: column; gap: 8px; justify-content: center; margin-top: 16px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "100%"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "22"
                    },
                    _widgetRecordProvider: i
                }, O(!l.variables.is_daily_limit_errorVar, !1, this, function() {
                    return [s.createElement(V, {
                        enabled: !0,
                        isDefault: !1,
                        onClick: a(function() {
                            var u = typeof c != "undefined" && c !== null ? c.clone() : e.callContext().clone();
                            e.tryAgainOnClick$Action(e.callContext(u))
                        }, "onClick"),
                        style: "btn btn-primary action-button w-full",
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "23"
                        },
                        _widgetRecordProvider: i
                    }, s.createElement(H, {
                        extendedProperties: {
                            style: "font-size: 16px; font-weight: bold;"
                        },
                        text: [C(m("dvqa8Gr4y0uwmXmMt46V1g#Value", "Try again"))],
                        _idProps: {
                            service: t,
                            uuid: "24"
                        },
                        _widgetRecordProvider: i
                    })), s.createElement(V, {
                        enabled: !0,
                        gridProperties: {
                            marginLeft: "0"
                        },
                        isDefault: !1,
                        onClick: a(function() {
                            var u = typeof c != "undefined" && c !== null ? c.clone() : e.callContext().clone();
                            e.doneOnClick$Action(e.callContext(u))
                        }, "onClick"),
                        style: "btn btn-cancel secondary-button",
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "25"
                        },
                        _widgetRecordProvider: i
                    }, s.createElement(H, {
                        extendedProperties: {
                            style: "font-size: 16px; font-weight: bold;"
                        },
                        text: [C(m("Zgn8rwVaX0C645tEuMmnRg#Value", "Not now"))],
                        _idProps: {
                            service: t,
                            uuid: "26"
                        },
                        _widgetRecordProvider: i
                    }))]
                }, function() {
                    return [s.createElement(V, {
                        enabled: !0,
                        gridProperties: {
                            classes: "OSFillParent"
                        },
                        isDefault: !1,
                        onClick: a(function() {
                            var u = typeof c != "undefined" && c !== null ? c.clone() : e.callContext().clone();
                            e.doneOnClick$Action(e.callContext(u))
                        }, "onClick"),
                        style: "btn btn-primary action-button",
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "27"
                        },
                        _widgetRecordProvider: i
                    }, s.createElement(H, {
                        extendedProperties: {
                            style: "font-size: 16px; font-weight: bold;"
                        },
                        text: [C(m("Qzeq7vlSMEiJLwHB1vuNPQ#Value", "Okay"))],
                        _idProps: {
                            service: t,
                            uuid: "28"
                        },
                        _widgetRecordProvider: i
                    }))]
                })))]
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: a(function() {
                return {
                    codeFunction: "TransferStatusBlock",
                    functionKey: "e7e31eaa-eac0-4cea-b384-67edb763966a",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "TransferFlow.TransferStatusBlock",
            modelFactory: he,
            controllerFactory: Pe
        });
        return f.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, f.getJsDependencies = function() {
            return []
        }, f.getBlocks = function() {
            return []
        }, f
    }, "componentFactory"),
    j = Ve();
var ce = P.PlaceholderContent,
    Ot = P.IteratorPlaceholderContent,
    He = a(function() {
        var f = ge(function(o) {
            var l = o.model,
                e = o.controller,
                t = o.controller.idService,
                r = e.validationService,
                c = e.callContext(),
                n = R,
                m = T,
                _ = {
                    props: o,
                    validateWidget: a(function(u) {
                        o.validateWidget(o, u)
                    }, "validateWidget")
                },
                i = l,
                O = N,
                C = M,
                A = F();
            return b.createElement("div", o.rootNodeProperties, O(me.isDesktop$Action(c).isDesktopOut, !1, this, function() {
                return [b.createElement(J, {
                    getOwnerSpan: a(function() {
                        return A.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return A.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ShowClosebutton: !1,
                        ShowBackbutton: !1
                    },
                    events: {
                        _handleError: a(function(u) {
                            e.handleError(u)
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
                    _widgetRecordProvider: i,
                    placeholders: {
                        contentbody: new ce(function() {
                            return [b.createElement(v, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "padding-top: 24px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: i
                            }, b.createElement(j, {
                                getOwnerSpan: a(function() {
                                    return A.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: a(function() {
                                    return A.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
                                events: {
                                    _handleError: a(function(u) {
                                        e.handleError(u)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "2",
                                    alias: "2"
                                },
                                _widgetRecordProvider: i,
                                _dependencies: []
                            }))]
                        })
                    },
                    _dependencies: []
                })]
            }, function() {
                return [b.createElement(Y, {
                    getOwnerSpan: a(function() {
                        return A.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return A.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        has_back_button: !1
                    },
                    events: {
                        _handleError: a(function(u) {
                            e.handleError(u)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: t,
                        uuid: "3",
                        alias: "3"
                    },
                    _widgetRecordProvider: i,
                    placeholders: {
                        content: new ce(function() {
                            return [b.createElement(j, {
                                getOwnerSpan: a(function() {
                                    return A.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: a(function() {
                                    return A.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
                                events: {
                                    _handleError: a(function(u) {
                                        e.handleError(u)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "4",
                                    alias: "4"
                                },
                                _widgetRecordProvider: i,
                                _dependencies: []
                            })]
                        }),
                        footer: ce.Empty
                    },
                    _dependencies: []
                })]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: a(function() {
                return {
                    codeFunction: "TransferStatus",
                    functionKey: "198fe0bf-0381-45f2-b57f-878a8caa9341",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "TransferFlow.TransferStatus",
            modelFactory: se,
            controllerFactory: ee,
            getTitle: a(function(o) {
                var l = o.model,
                    e = o.controller,
                    t = o.controller.idService,
                    r = e.validationService,
                    c = e.callContext(),
                    n = R,
                    m = T,
                    _ = {
                        props: o,
                        validateWidget: a(function(i) {
                            o.validateWidget(o, i)
                        }, "validateWidget")
                    };
                return g.resolve(y.TranslationsService).getMessage("v+CPGYED8kW1f4eKjKqTQQ#TitleExpression.-959039807.1", "Transfer status | Deriv")
            }, "getTitle")
        });
        return f.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.TransferFlow.TransferStatus.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, f.getJsDependencies = function() {
            return []
        }, f.getBlocks = function() {
            return [J, j, Y]
        }, f
    }, "componentFactory"),
    De = He();
export {
    ee as controllerModule, se as modelModule, De as viewModule, X as webFlowControllerModule
};