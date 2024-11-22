import {
    a as h
} from "./_oschunk-TOVPNB4I.js";
import {
    a as u
} from "./_oschunk-Y45M2O2K.js";
import {
    a as d,
    d as c
} from "./_oschunk-27GDEXUT.js";
import {
    ia as l
} from "./_oschunk-NTQBNJ73.js";
import {
    c as o
} from "./_oschunk-DVBKI63I.js";
var v = {
        "OSYAkKbxmkSP61DAdyA6mQ#Value": "Suivant",
        "tOVawln2DkmldN9+eMjcXg#Value": "Je n'ai aucune connaissance ni exp\xE9rience dans le trading.",
        "2JI3JF+6dEWqVn4Ajxiy_A#Value": "Je m'int\xE9resse au trading mais j'ai tr\xE8s peu d'exp\xE9rience.",
        "e87vR5cZ4kKs1LnOgCl6KQ#Value": "J'ai assist\xE9 \xE0 des s\xE9minaires, des formations et/ou des ateliers li\xE9s au trading.",
        "szxSrhoPBkiV5cirwIf+RQ#Value": "Je trade r\xE9guli\xE8rement des CFDs forex et d'autres instruments financiers complexes sur d'autres plateformes.",
        "9FpGVDsgmUORhWcCtnlktw#Value": "J'ai un dipl\xF4me universitaire, une certification professionnelle et/ou une exp\xE9rience professionnelle li\xE9e aux services financiers.",
        "5pVkQZgBDE6kx+kb9XGmdQ#Value": "Quelle est votre connaissance et votre exp\xE9rience en mati\xE8re de trading en ligne ?",
        "cizIPtCQWkm763_wpzyEbA#Value": "Cela est requis."
    },
    f = {
        "fr-FR": {
            translations: v,
            isRTL: !1
        }
    };
var n = l; {
    let a = class a extends n.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, f);
            var _ = this.controller;
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
                    _ = this.idService;
                return n.Logger.startActiveSpan("NextOnClick", function(r) {
                    r && (r.setAttribute("code.function", "NextOnClick"), r.setAttribute("outsystems.function.key", "0fa0fcc9-c681-4ff8-995d-15ec18641d25"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (t.ensureControllerAlive("NextOnClick"), e = t.callContext(e), d.getKnowledgeAnExperience() === n.BuiltinFunctions.nullTextIdentifier()) i.variables.isRequiredVar = !0;
                        else return n.Navigation.navigateTo(n.Navigation.generateScreenURL("tradershub", "trading-assessment/step-three", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), e, !0)
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
                t && (t.setAttribute("code.function", "NextOnClick"), t.setAttribute("outsystems.function.key", "0fa0fcc9-c681-4ff8-995d-15ec18641d25"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
            return c.defaultTimeout
        }
    };
    o(a, "ControllerInner");
    let s = a;
    m = s
}
var m, H = new n.Controller.ControllerFactory(m, u);
export {
    H as a
};