import {
    a as _
} from "./_oschunk-XTWMU4PO.js";
import {
    a as d
} from "./_oschunk-6WALBPGV.js";
import {
    p as c
} from "./_oschunk-DW3HXDMW.js";
import {
    ia as u
} from "./_oschunk-5KJVGEL7.js";
import {
    c as l
} from "./_oschunk-QHO7QY6K.js";
var C = {
        "aC4kQT+wFEeu8+08_0GxHw#ValueExpression.-1076200185.1": "\u064A\u062A\u0645 \u0639\u0631\u0636 \u062C\u0645\u064A\u0639 \u0645\u0639\u062F\u0644\u0627\u062A \u0627\u0644\u0639\u0645\u0648\u0644\u0629 \u0628\u0627\u0644\u062F\u0648\u0644\u0627\u0631 \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A \u0644\u0643\u0644 \u0635\u0641\u0642\u0629 \u0643\u0627\u0645\u0644\u0629"
    },
    m = {
        "aC4kQT+wFEeu8+08_0GxHw#ValueExpression.-1076200185.1": "Alle Provisionss\xE4tze werden in USD pro Round-Trade angegeben"
    },
    v = {
        "aC4kQT+wFEeu8+08_0GxHw#ValueExpression.-1076200185.1": "Todas las tasas de comisi\xF3n se cotizan en USD, por operaci\xF3n redonda"
    },
    E = {
        "aC4kQT+wFEeu8+08_0GxHw#ValueExpression.-1076200185.1": "Tous les taux de commission sont indiqu\xE9s en USD, par transaction aller-retour"
    },
    y = {
        "aC4kQT+wFEeu8+08_0GxHw#ValueExpression.-1076200185.1": "Tutte le commissioni sono espresse in USD, per operazione completa"
    },
    k = {
        "aC4kQT+wFEeu8+08_0GxHw#ValueExpression.-1076200185.1": "Wszystkie stawki prowizji s\u0105 podane w USD za uko\u0144czon\u0105 operacj\u0119"
    },
    H = {
        "aC4kQT+wFEeu8+08_0GxHw#ValueExpression.-1076200185.1": "Todas as taxas de comiss\xE3o s\xE3o cotadas em USD, por transa\xE7\xE3o completa"
    },
    b = {
        "aC4kQT+wFEeu8+08_0GxHw#ValueExpression.-1076200185.1": "\u0412\u0441\u0435 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438 \u0443\u043A\u0430\u0437\u0430\u043D\u044B \u0432 USD \u0437\u0430 \u043F\u043E\u043B\u043D\u044B\u0439 \u0446\u0438\u043A\u043B \u0441\u0434\u0435\u043B\u043A\u0438."
    },
    f = {
        "ar-001": {
            translations: C,
            isRTL: !0
        },
        "de-DE": {
            translations: m,
            isRTL: !1
        },
        "es-ES": {
            translations: v,
            isRTL: !1
        },
        "fr-FR": {
            translations: E,
            isRTL: !1
        },
        "it-IT": {
            translations: y,
            isRTL: !1
        },
        "pl-PL": {
            translations: k,
            isRTL: !1
        },
        "pt-PT": {
            translations: H,
            isRTL: !1
        },
        "ru-RU": {
            translations: b,
            isRTL: !1
        }
    };
var r = u; {
    let i = class i extends r.Controller.BaseViewController {
        constructor(t, o, e) {
            super(t, o, e, f);
            var a = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onClickBackButton$Action() {
            return this.hasOwnProperty("__onClickBackButton$Action") || (this.__onClickBackButton$Action = function(t) {
                var o = this.model,
                    e = this.controller,
                    a = this.idService;
                return r.Logger.startActiveSpan("OnClickBackButton", function(n) {
                    n && (n.setAttribute("code.function", "OnClickBackButton"), n.setAttribute("outsystems.function.key", "38bd2f3f-1c7f-4fb6-949c-e0cc5067fa9a"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return e.ensureControllerAlive("OnClickBackButton"), t = e.callContext(t), r.Navigation.navigateBack(r.Transitions.createTransition(r.Transitions.TransitionAnimation.None), t, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onClickBackButton$Action
        }
        set _onClickBackButton$Action(t) {
            this.__onClickBackButton$Action = t
        }
        get _onClickCloseButton$Action() {
            return this.hasOwnProperty("__onClickCloseButton$Action") || (this.__onClickCloseButton$Action = function(t) {
                var o = this.model,
                    e = this.controller,
                    a = this.idService;
                return r.Logger.startActiveSpan("OnClickCloseButton", function(n) {
                    n && (n.setAttribute("code.function", "OnClickCloseButton"), n.setAttribute("outsystems.function.key", "a37f280f-a34d-4717-839f-994f1555bfd3"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return e.ensureControllerAlive("OnClickCloseButton"), t = e.callContext(t), r.Navigation.navigateTo(r.Navigation.generateScreenURL("PartnersHub", "PartnersHubDashboard", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.None), t, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onClickCloseButton$Action
        }
        set _onClickCloseButton$Action(t) {
            this.__onClickCloseButton$Action = t
        }
        onClickBackButton$Action(t) {
            var o = this.controller;
            return r.Logger.startActiveSpan("OnClickBackButton__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnClickBackButton"), e.setAttribute("outsystems.function.key", "38bd2f3f-1c7f-4fb6-949c-e0cc5067fa9a"), e.setAttribute("outsystems.function.owner.name", "PartnersHub"), e.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._onClickBackButton$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onClickCloseButton$Action(t) {
            var o = this.controller;
            return r.Logger.startActiveSpan("OnClickCloseButton__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnClickCloseButton"), e.setAttribute("outsystems.function.key", "a37f280f-a34d-4717-839f-994f1555bfd3"), e.setAttribute("outsystems.function.owner.name", "PartnersHub"), e.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._onClickCloseButton$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
        }
        set onReadyEventHandler(t) {
            this._onReadyEventHandler = t
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(t) {
            this._onRenderEventHandler = t
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(t) {
            this._onDestroyEventHandler = t
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(t) {
            this._onParametersChangedEventHandler = t
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(t) {
                return _.default.handleError(t, this.callContext())
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return c.defaultTimeout
        }
    };
    l(i, "ControllerInner");
    let s = i;
    h = s
}
var h, p = new r.Controller.ControllerFactory(h, d);
export {
    p as a
};