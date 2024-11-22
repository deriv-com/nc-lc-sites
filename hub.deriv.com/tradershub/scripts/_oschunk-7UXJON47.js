import {
    a as h
} from "./_oschunk-TOVPNB4I.js";
import {
    a as c
} from "./_oschunk-Y45M2O2K.js";
import {
    a as d,
    d as u
} from "./_oschunk-27GDEXUT.js";
import {
    ia as l
} from "./_oschunk-NTQBNJ73.js";
import {
    c as o
} from "./_oschunk-DVBKI63I.js";
var _ = {
        "fOqnLCbG6UqdbCnzWq7tCA#Value": "Suivant",
        "qgLWumCBI0Wo6ilynXrMRA#Value": "R\xE9alisez un profit garanti sur votre trade.",
        "3ajtRoM6e0eDIDOxf0pe5w#Value": "Fermez votre trade automatiquement lorsque le profit est \xE9gal ou sup\xE9rieur \xE0 un montant sp\xE9cifi\xE9, tant qu'il y a une liquidit\xE9 de march\xE9 ad\xE9quate.",
        "k_rqwowylUiKGTwa9TdX4A#Value": "Fermez votre trade automatiquement lorsque la perte est \xE9gale ou sup\xE9rieure \xE0 un montant sp\xE9cifi\xE9, tant qu'il y a une liquidit\xE9 de march\xE9 ad\xE9quate.",
        "ZQ9Na4t30kWoQBj66ezbaw#Value": "Annulez votre transaction \xE0 tout moment dans un d\xE9lai sp\xE9cifi\xE9.",
        "lIDTnAWQhEiGOHfJ6Uj8XQ#Value": "Le trading \xE0 effet de levier pr\xE9sente des risques \xE9lev\xE9s, il est donc conseill\xE9 d'utiliser des fonctions de gestion des risques telles que le stop loss. Le stop loss vous permet de :",
        "Fun9OLd4NEOB_6Swxqtppg#Value": "Ceci est requis."
    },
    m = {
        "fr-FR": {
            translations: _,
            isRTL: !1
        }
    };
var n = l; {
    let a = class a extends n.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, m);
            var v = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _nextOnClick$Action() {
            return this.hasOwnProperty("__nextOnClick$Action") || (this.__nextOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    v = this.idService;
                return n.Logger.startActiveSpan("NextOnClick", function(r) {
                    r && (r.setAttribute("code.function", "NextOnClick"), r.setAttribute("outsystems.function.key", "6e0478f1-e63e-4463-80a2-59a3049b38c4"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (t.ensureControllerAlive("NextOnClick"), e = t.callContext(e), d.getRiskManagement() === n.BuiltinFunctions.nullTextIdentifier()) i.variables.isRequiredVar = !0;
                        else return n.Navigation.navigateTo(n.Navigation.generateScreenURL("tradershub", "trading-assessment/last-step", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__nextOnClick$Action
        }
        set _nextOnClick$Action(e) {
            this.__nextOnClick$Action = e
        }
        nextOnClick$Action(e) {
            var i = this.controller;
            return n.Logger.startActiveSpan("NextOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "NextOnClick"), t.setAttribute("outsystems.function.key", "6e0478f1-e63e-4463-80a2-59a3049b38c4"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._nextOnClick$Action, e)
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
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return h.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return u.defaultTimeout
        }
    };
    o(a, "ControllerInner");
    let s = a;
    f = s
}
var f, R = new n.Controller.ControllerFactory(f, c);
export {
    R as a
};