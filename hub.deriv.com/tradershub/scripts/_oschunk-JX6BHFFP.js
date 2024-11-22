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
        "QSG_knSeeUilaZ5O6CZ_bg#Value": "Suivant",
        "LmtTAzg13ka03T5vWKPyNQ#Value": "Ch\xF4meur",
        "3KIzOASKZ0megMp4HSrftA#Value": "Fabrication",
        "O4k9Y65UUk6kDsYRlEWpZw#Value": "Immobilier",
        "+fsTzagydUW7RVZnM8Egng#Value": "Social et culturel",
        "PCwdh5yRJkWIl2zYlrRjtg#Value": "Juridique",
        "Hi1pXtNFMkKDQ127YldaEQ#Value": "Science et ing\xE9nierie",
        "ITkUljOIUE++RSn6qeHPzw#Value": "Technologies de l'information et de la communication",
        "Drs9c4vzeECR2gNmWHqv7w#Value": "Tourisme",
        "1hNcnutiqkSM5maEmoL2nw#Value": "Sant\xE9",
        "xCvZ_gRiqUqq7EySzyw1Yw#Value": "Finance",
        "RTO7XMI5MECNucE7X1Yalw#Value": "\xC9ducation",
        "xvUAsCqDVEaaD3RVnQLR+Q#Value": "Construction"
    },
    m = {
        "fr-FR": {
            translations: _,
            isRTL: !1
        }
    };
var n = l; {
    let s = class s extends n.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, m);
            var E = this.controller;
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
                    E = this.idService;
                return n.Logger.startActiveSpan("NextOnClick", function(r) {
                    r && (r.setAttribute("code.function", "NextOnClick"), r.setAttribute("outsystems.function.key", "c756a53b-7ac3-4a7b-bcc1-8d5104856b8d"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (t.ensureControllerAlive("NextOnClick"), e = t.callContext(e), d.getFinancialAssessmentEmploymentIndustry() === n.BuiltinFunctions.nullTextIdentifier()) i.variables.isRequiredVar = !0;
                        else return n.Navigation.navigateTo(n.Navigation.generateScreenURL("tradershub", "financial-assessment/occupation", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), e, !0)
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
                t && (t.setAttribute("code.function", "NextOnClick"), t.setAttribute("outsystems.function.key", "c756a53b-7ac3-4a7b-bcc1-8d5104856b8d"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
    f = a
}
var f, R = new n.Controller.ControllerFactory(f, c);
export {
    R as a
};