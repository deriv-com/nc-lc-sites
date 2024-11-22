import {
    a as v
} from "./_oschunk-FCTT25EN.js";
import {
    a as A
} from "./_oschunk-Y45M2O2K.js";
import {
    a as f,
    d as m
} from "./_oschunk-27GDEXUT.js";
import {
    Sd as h
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as b
} from "./_oschunk-NTQBNJ73.js";
import {
    c
} from "./_oschunk-DVBKI63I.js";
var R = {
        "magvm8LDEkqQTh5s_xxCVQ#Value": "S\xE9lectionnez l'objectif de votre compte",
        "5tIUridRrEWKH47sBFPgmg#Title": "D\xE9tails personnels | Deriv",
        "5tIUridRrEWKH47sBFPgmg#TitleExpression.-545367396.1": "D\xE9tails personnels | Deriv"
    },
    E = {
        "fr-FR": {
            translations: R,
            isRTL: !1
        }
    };

function y(u, l, C) {
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
c(y, "default");
var e = b; {
    let l = class l extends e.Controller.BaseViewController {
        constructor(t, r, n) {
            super(t, r, n, E);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var r = this.model,
                    n = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnReady", function(a) {
                    return a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "a24804e9-cdb5-44d9-a05b-1bc622018700"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        n.ensureControllerAlive("OnReady"), t = n.callContext(t);
                        var i = new e.DataTypes.VariableHolder;
                        return e.Flow.executeAsyncFlow(function() {
                            return r.flush(), m.fetchAccountPurposeList$Action(t).then(function(d) {
                                i.value = d
                            }).then(function() {
                                r.variables.accountPurposeListVar = i.value.accontPurposeListOut
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _listItemOnClick$Action() {
            return this.hasOwnProperty("__listItemOnClick$Action") || (this.__listItemOnClick$Action = function(t, r) {
                var n = this.model,
                    o = this.controller,
                    a = this.idService;
                return e.Logger.startActiveSpan("ListItemOnClick", function(i) {
                    i && (i.setAttribute("code.function", "ListItemOnClick"), i.setAttribute("outsystems.function.key", "a3d08d88-d74c-470a-9a9b-f2011ca81592"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("ListItemOnClick"), r = o.callContext(r);
                        var d = new e.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.RealAccountCreationMobile.PersonalDetailsAccountPurpose.ListItemOnClick$vars")));
                        return d.value.accountPurposeInLocal = t.clone(), e.Logger.startActiveSpan("RudderStack", function(s) {
                            s && (s.setAttribute("code.function", "RudderStack"), s.setAttribute("outsystems.function.key", "06a6c557-ac8d-49e5-8731-832bf3d49709"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return o.safeExecuteJSNode(y, "RudderStack", "ListItemOnClick", null, function(g) {}, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), f.setRealSignupAccountOpeningReason(d.value.accountPurposeInLocal.valueAttr), f.setRealSignupPassedStepCount(2), f.getRealSignupIsIDVSupported() ? e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "identity-verification", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), r, !0) : e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "employment-details", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), r, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__listItemOnClick$Action
        }
        set _listItemOnClick$Action(t) {
            this.__listItemOnClick$Action = t
        }
        onReady$Action(t) {
            var r = this.controller;
            return e.Logger.startActiveSpan("OnReady__proxy", function(n) {
                return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "a24804e9-cdb5-44d9-a05b-1bc622018700"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, t)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        listItemOnClick$Action(t, r) {
            var n = this.controller;
            return e.Logger.startActiveSpan("ListItemOnClick__proxy", function(o) {
                o && (o.setAttribute("code.function", "ListItemOnClick"), o.setAttribute("outsystems.function.key", "a3d08d88-d74c-470a-9a9b-f2011ca81592"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._listItemOnClick$Action, r, t)
                } finally {
                    o && o.end()
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
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var r = this.controller,
                    n = this.model,
                    o = this.idService;
                return r.onReady$Action(t)
            }), this._onReadyEventHandler
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
                return v.default.handleError(t, this.callContext())
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return m.defaultTimeout
        }
    };
    c(l, "ControllerInner");
    let u = l;
    _ = u, _.registerVariableGroupType("tradershub.RealAccountCreationMobile.PersonalDetailsAccountPurpose.ListItemOnClick$vars", [{
        name: "AccountPurpose",
        attrName: "accountPurposeInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Record,
        defaultValue: c(function() {
            return new h
        }, "defaultValue"),
        complexType: h
    }])
}
var _, D = new e.Controller.ControllerFactory(_, A);
export {
    D as a
};