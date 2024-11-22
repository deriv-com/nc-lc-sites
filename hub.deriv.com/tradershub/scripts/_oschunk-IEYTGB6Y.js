import {
    a as m
} from "./_oschunk-UK73WSZT.js";
import {
    a as f
} from "./_oschunk-Y45M2O2K.js";
import {
    a as c,
    d as h
} from "./_oschunk-27GDEXUT.js";
import {
    oc as s
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as u
} from "./_oschunk-NTQBNJ73.js";
import {
    c as d
} from "./_oschunk-DVBKI63I.js";
var y = {
        "SLcjXZbMpEScscntKKD3kw#Value": "Faites un d\xE9p\xF4t",
        "u8bRYj2AjUmGSYQ++Wwucw#Value": "Transf\xE9rer des fonds",
        "IJvkxuQfT02m5I_2VNSZvA#Value": "Effectuez un d\xE9p\xF4t ou transf\xE9rez des fonds d'un autre compte.",
        "Nns+JaALTUi4i4cdCikCRw#Value": "Vous n'avez pas de fonds dans votre portefeuille !"
    },
    v = {
        "fr-FR": {
            translations: y,
            isRTL: !1
        }
    };
var t = u; {
    let o = class o extends t.Controller.BaseViewController {
        constructor(e, a, r) {
            super(e, a, r, v);
            var A = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _makeADepositOnClick$Action() {
            return this.hasOwnProperty("__makeADepositOnClick$Action") || (this.__makeADepositOnClick$Action = function(e) {
                var a = this.model,
                    r = this.controller,
                    A = this.idService;
                return t.Logger.startActiveSpan("MakeADepositOnClick", function(n) {
                    n && (n.setAttribute("code.function", "MakeADepositOnClick"), n.setAttribute("outsystems.function.key", "ef8c6ead-2ca0-43f1-a8db-389cec02b4ef"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("MakeADepositOnClick"), e = r.callContext(e);
                        var l = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(s)));
                        return l.value.dataOut = t.JSONUtils.deserializeFromJSON(c.getActiveWallet(), s, !1), l.value.dataOut.currency_typeAttr === "fiat" ? t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "wallets/deposit/fiat", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0) : t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "wallets/deposit/deposit-crypto", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__makeADepositOnClick$Action
        }
        set _makeADepositOnClick$Action(e) {
            this.__makeADepositOnClick$Action = e
        }
        makeADepositOnClick$Action(e) {
            var a = this.controller;
            return t.Logger.startActiveSpan("MakeADepositOnClick__proxy", function(r) {
                r && (r.setAttribute("code.function", "MakeADepositOnClick"), r.setAttribute("outsystems.function.key", "ef8c6ead-2ca0-43f1-a8db-389cec02b4ef"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._makeADepositOnClick$Action, e)
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
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return m.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return h.defaultTimeout
        }
    };
    d(o, "ControllerInner");
    let i = o;
    _ = i
}
var _, D = new t.Controller.ControllerFactory(_, f);
export {
    D as a
};