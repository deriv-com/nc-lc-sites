import {
    a as h
} from "./_oschunk-B7RGCJGD.js";
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
        "vLdDY7l8jU6wEETuUPfh_g#Value": "Suivant",
        "m3kSpucmpk6VXkCimyb6PA#Value": "\xC9tudiants",
        "fPT9HQ6t9UuY3HVCkJ5C_A#Value": "Forces arm\xE9es",
        "5e7uSzZH4E6krCobCB1k9w#Value": "Travailleurs de l'exploitation mini\xE8re, de la construction, de la fabrication et du transport",
        "bb25E8_mVU6SBk4q6xkVNQ#Value": "Nettoyeurs et Aides",
        "MPgcLZ2VlkKKkXXne3SNBA#Value": "Op\xE9rateurs de machines et assembleurs",
        "kn9OUs6VxkyRoA8budlF6w#Value": "Ouvriers du b\xE2timent, des m\xE9taux, de l'\xE9lectricit\xE9 et de l'\xE9lectronique",
        "2nlqzhx2UE+5bYGEpX_1Jg#Value": "Travailleurs agricoles, forestiers et de la p\xEAche",
        "Ert2K_areUyrLSzCPdowJQ#Value": "Travailleurs de la vente et du service \xE0 la client\xE8le",
        "DZvYVsxP00W2wpvBwQ5y5A#Value": "Greffiers",
        "kNCjwfeMtkaZ23bg0ZoEhw#Value": "Professionnels",
        "gc0aeYH1OUuvG0MsFJ7XnQ#Value": "Gestionnaires",
        "Fcf3VdGnIUuCVSQx27Eumg#Value": "Chefs d'entreprise, hauts fonctionnaires et l\xE9gislateurs"
    },
    f = {
        "fr-FR": {
            translations: _,
            isRTL: !1
        }
    };
var n = l; {
    let s = class s extends n.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, f);
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
                    r && (r.setAttribute("code.function", "NextOnClick"), r.setAttribute("outsystems.function.key", "3914997f-f7a4-4dda-9dba-be060750f96c"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (t.ensureControllerAlive("NextOnClick"), e = t.callContext(e), d.getFinancialAssessmentOccupation() === n.BuiltinFunctions.nullTextIdentifier()) i.variables.isRequiredVar = !0;
                        else return n.Navigation.navigateTo(n.Navigation.generateScreenURL("tradershub", "financial-assessment/source-of-wealth", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), e, !0)
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
                t && (t.setAttribute("code.function", "NextOnClick"), t.setAttribute("outsystems.function.key", "3914997f-f7a4-4dda-9dba-be060750f96c"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
    o(s, "ControllerInner");
    let a = s;
    m = a
}
var m, O = new n.Controller.ControllerFactory(m, c);
export {
    O as a
};