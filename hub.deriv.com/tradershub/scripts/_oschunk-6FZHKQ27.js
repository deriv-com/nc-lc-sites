import {
    a as A
} from "./_oschunk-OOA3SUUU.js";
import {
    a as y
} from "./_oschunk-2M7PXTSQ.js";
import {
    a as m,
    c as f
} from "./_oschunk-DOFMR6EA.js";
import {
    Qh as _
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as b
} from "./_oschunk-2JKANR6M.js";
import {
    c as l
} from "./_oschunk-DVBKI63I.js";
var E = {
        "magvm8LDEkqQTh5s_xxCVQ#Value": "\u0627\u062E\u062A\u0631 \u0627\u0644\u063A\u0631\u0636 \u0645\u0646 \u062D\u0633\u0627\u0628\u0643",
        "5tIUridRrEWKH47sBFPgmg#Title": "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629 | Deriv",
        "5tIUridRrEWKH47sBFPgmg#TitleExpression.-545367396.1": "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629 | Deriv"
    },
    g = {
        "magvm8LDEkqQTh5s_xxCVQ#Value": "W\xE4hlen Sie den Zweck Ihres Kontos",
        "5tIUridRrEWKH47sBFPgmg#Title": "Pers\xF6nliche Daten | Deriv",
        "5tIUridRrEWKH47sBFPgmg#TitleExpression.-545367396.1": "Pers\xF6nliche Daten | Deriv"
    },
    p = {
        "magvm8LDEkqQTh5s_xxCVQ#Value": "Seleccione el prop\xF3sito de su cuenta",
        "5tIUridRrEWKH47sBFPgmg#Title": "Detalles personales | Deriv",
        "5tIUridRrEWKH47sBFPgmg#TitleExpression.-545367396.1": "Detalles personales | Deriv"
    },
    P = {
        "magvm8LDEkqQTh5s_xxCVQ#Value": "S\xE9lectionnez l'objectif de votre compte",
        "5tIUridRrEWKH47sBFPgmg#Title": "D\xE9tails personnels | Deriv",
        "5tIUridRrEWKH47sBFPgmg#TitleExpression.-545367396.1": "D\xE9tails personnels | Deriv"
    },
    T = {
        "magvm8LDEkqQTh5s_xxCVQ#Value": "Seleziona lo scopo del conto",
        "5tIUridRrEWKH47sBFPgmg#Title": "Dettagli personali | Deriv",
        "5tIUridRrEWKH47sBFPgmg#TitleExpression.-545367396.1": "Dettagli personali | Deriv"
    },
    D = {
        "magvm8LDEkqQTh5s_xxCVQ#Value": "Wybierz cel swojego konta",
        "5tIUridRrEWKH47sBFPgmg#Title": "Dane osobowe | Deriv",
        "5tIUridRrEWKH47sBFPgmg#TitleExpression.-545367396.1": "Dane osobowe | Deriv"
    },
    C = {
        "magvm8LDEkqQTh5s_xxCVQ#Value": "Selecione o objetivo da sua conta",
        "5tIUridRrEWKH47sBFPgmg#Title": "Dados pessoais | Deriv",
        "5tIUridRrEWKH47sBFPgmg#TitleExpression.-545367396.1": "Dados pessoais | Deriv"
    },
    I = {
        "magvm8LDEkqQTh5s_xxCVQ#Value": "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432\u0430\u0448\u0435\u0439 \u0443\u0447\u0435\u0442\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438",
        "5tIUridRrEWKH47sBFPgmg#Title": "\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 | Deriv",
        "5tIUridRrEWKH47sBFPgmg#TitleExpression.-545367396.1": "\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 | Deriv"
    },
    R = {
        "ar-001": {
            translations: E,
            isRTL: !0
        },
        "de-DE": {
            translations: g,
            isRTL: !1
        },
        "es-ES": {
            translations: p,
            isRTL: !1
        },
        "fr-FR": {
            translations: P,
            isRTL: !1
        },
        "it-IT": {
            translations: T,
            isRTL: !1
        },
        "pl-PL": {
            translations: D,
            isRTL: !1
        },
        "pt-PT": {
            translations: C,
            isRTL: !1
        },
        "ru-RU": {
            translations: I,
            isRTL: !1
        }
    };

function h(c, u, H) {
    cacheTrackEvents.track({
        name: "ce_real_account_signup_form",
        properties: {
            action: "step_passed",
            step_num: 1,
            step_codename: "personal_details",
            form_name: "real_account_signup_form_outsystems"
        }
    })
}
l(h, "default");
var t = b; {
    let u = class u extends t.Controller.BaseViewController {
        constructor(e, n, r) {
            super(e, n, r, R);
            var i = this.controller;
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
                var n = this.model,
                    r = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("OnReady", function(s) {
                    return s && (s.setAttribute("code.function", "OnReady"), s.setAttribute("outsystems.function.key", "a24804e9-cdb5-44d9-a05b-1bc622018700"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        r.ensureControllerAlive("OnReady"), e = r.callContext(e);
                        var o = new t.DataTypes.VariableHolder;
                        return t.Flow.executeAsyncFlow(function() {
                            return n.flush(), f.fetchAccountPurposeList$Action(e).then(function(d) {
                                o.value = d
                            }).then(function() {
                                n.variables.accountPurposeListVar = o.value.accontPurposeListOut
                            })
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _listItemOnClick$Action() {
            return this.hasOwnProperty("__listItemOnClick$Action") || (this.__listItemOnClick$Action = function(e, n) {
                var r = this.model,
                    i = this.controller,
                    s = this.idService;
                return t.Logger.startActiveSpan("ListItemOnClick", function(o) {
                    o && (o.setAttribute("code.function", "ListItemOnClick"), o.setAttribute("outsystems.function.key", "a3d08d88-d74c-470a-9a9b-f2011ca81592"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("ListItemOnClick"), n = i.callContext(n);
                        var d = new t.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("tradershub.RealAccountCreationMobile.PersonalDetailsAccountPurpose.ListItemOnClick$vars")));
                        return d.value.accountPurposeInLocal = e.clone(), t.Logger.startActiveSpan("RudderStack", function(a) {
                            a && (a.setAttribute("code.function", "RudderStack"), a.setAttribute("outsystems.function.key", "06a6c557-ac8d-49e5-8731-832bf3d49709"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return i.safeExecuteJSNode(h, "RudderStack", "ListItemOnClick", null, function(L) {}, {}, {})
                            } finally {
                                a && a.end()
                            }
                        }, 1), m.setRealSignupAccountOpeningReason(d.value.accountPurposeInLocal.valueAttr), m.setRealSignupPassedStepCount(2), m.getRealSignupIsIDVSupported() ? t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "identity-verification", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), n, !0) : t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "employment-details", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), n, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__listItemOnClick$Action
        }
        set _listItemOnClick$Action(e) {
            this.__listItemOnClick$Action = e
        }
        onReady$Action(e) {
            var n = this.controller;
            return t.Logger.startActiveSpan("OnReady__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "a24804e9-cdb5-44d9-a05b-1bc622018700"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        listItemOnClick$Action(e, n) {
            var r = this.controller;
            return t.Logger.startActiveSpan("ListItemOnClick__proxy", function(i) {
                i && (i.setAttribute("code.function", "ListItemOnClick"), i.setAttribute("outsystems.function.key", "a3d08d88-d74c-470a-9a9b-f2011ca81592"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._listItemOnClick$Action, n, e)
                } finally {
                    i && i.end()
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
                var n = this.controller,
                    r = this.model,
                    i = this.idService;
                return n.onReady$Action(e)
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
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return A.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return f.defaultTimeout
        }
    };
    l(u, "ControllerInner");
    let c = u;
    v = c, v.registerVariableGroupType("tradershub.RealAccountCreationMobile.PersonalDetailsAccountPurpose.ListItemOnClick$vars", [{
        name: "AccountPurpose",
        attrName: "accountPurposeInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Record,
        defaultValue: l(function() {
            return new _
        }, "defaultValue"),
        complexType: _
    }])
}
var v, W = new t.Controller.ControllerFactory(v, y);
export {
    W as a
};