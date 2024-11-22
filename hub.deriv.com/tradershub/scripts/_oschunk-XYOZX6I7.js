import {
    a as h
} from "./_oschunk-ILTRYJXV.js";
import {
    a as f
} from "./_oschunk-Y45M2O2K.js";
import {
    a as s,
    d as u
} from "./_oschunk-27GDEXUT.js";
import {
    ia as d
} from "./_oschunk-NTQBNJ73.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var v = {
        "NUHQO+NR7E6OnxSW9qi6RQ#Value": "O",
        "ZJI+okbpqUiMtDzKUBoxZA#Value": "Afin d'\xE9valuer votre exp\xE9rience de trading et de d\xE9terminer si nos produits vous conviennent, veuillez fournir des r\xE9ponses pr\xE9cises et compl\xE8tes. Vos r\xE9ponses peuvent influencer le r\xE9sultat de cette \xE9valuation.",
        "G4aw2ve2eU2cGgWRZh45ow#Value": "Afin d'\xE9valuer votre exp\xE9rience de trading et de d\xE9terminer si nos produits vous conviennent, veuillez fournir des r\xE9ponses pr\xE9cises et compl\xE8tes. Vos r\xE9ponses peuvent influencer le r\xE9sultat de cette \xE9valuation.",
        "n20JqgCw5kOe+FYG7j6OzA#Value": "Suivant",
        "pUstD2ryck+V9Dnzrgtmxw#Value": "Non",
        "TF+Sb+Z600qsauI0w8IuXg#Value": "Oui",
        "7tZL0ANaDkmPEdwEFUu74A#Value": "Comprenez-vous que vous pourriez potentiellement perdre 100 % de l'argent que vous utilisez pour trader ?",
        "K6Dt8OdqM0GMV3bwg5peGg#Value": "Ceci est requis.",
        "jUYWD6F4N0eByXMIJnY4Dg#Value": "Pourquoi collectons-nous cela ?",
        "4wYsnyxVo0SonHryyQHEXw#Value": "\xC9valuation de trading",
        "oaK9rkBXjUGMTzh_EGskIA#Value": "O",
        "qeoZZElf60aED+5ABLF_vQ#Value": "Afin d'\xE9valuer votre exp\xE9rience de trading et de d\xE9terminer si nos produits vous conviennent, veuillez fournir des r\xE9ponses pr\xE9cises et compl\xE8tes. Vos r\xE9ponses peuvent influencer le r\xE9sultat de cette \xE9valuation."
    },
    y = {
        "fr-FR": {
            translations: v,
            isRTL: !1
        }
    };
var r = d; {
    let l = class l extends r.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, y);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _whyDoWeCollectThis_OnClick$Action() {
            return this.hasOwnProperty("__whyDoWeCollectThis_OnClick$Action") || (this.__whyDoWeCollectThis_OnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("WhyDoWeCollectThis_OnClick", function(n) {
                    n && (n.setAttribute("code.function", "WhyDoWeCollectThis_OnClick"), n.setAttribute("outsystems.function.key", "2a533820-f2c5-485f-989e-588f520735d6"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("WhyDoWeCollectThis_OnClick"), e = t.callContext(e), i.variables.whyWeCollectPopupVar = !0
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__whyDoWeCollectThis_OnClick$Action
        }
        set _whyDoWeCollectThis_OnClick$Action(e) {
            this.__whyDoWeCollectThis_OnClick$Action = e
        }
        get _clickOk$Action() {
            return this.hasOwnProperty("__clickOk$Action") || (this.__clickOk$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("ClickOk", function(n) {
                    return n && (n.setAttribute("code.function", "ClickOk"), n.setAttribute("outsystems.function.key", "499c9fe7-288f-4f2f-9c93-72210ce16bca"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("ClickOk"), e = t.callContext(e);
                        var _ = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return i.variables.notUndrestandCfDLossPopUpVar = !1, i.flush(), u.maltainvestPayload$Action(e).then(function(b) {
                                _.value = b
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__clickOk$Action
        }
        set _clickOk$Action(e) {
            this.__clickOk$Action = e
        }
        get _okOnClick$Action() {
            return this.hasOwnProperty("__okOnClick$Action") || (this.__okOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OkOnClick", function(n) {
                    n && (n.setAttribute("code.function", "OkOnClick"), n.setAttribute("outsystems.function.key", "54e0e58b-62ed-433b-9c98-7372ef550ed6"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OkOnClick"), e = t.callContext(e), i.variables.whyWeCollectPopupVar = !1
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__okOnClick$Action
        }
        set _okOnClick$Action(e) {
            this.__okOnClick$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "78d938a9-33bc-406c-a65d-4541cef295d2"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _nextOnClick$Action() {
            return this.hasOwnProperty("__nextOnClick$Action") || (this.__nextOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("NextOnClick", function(n) {
                    n && (n.setAttribute("code.function", "NextOnClick"), n.setAttribute("outsystems.function.key", "b0deb323-c5fd-44e1-b76a-989266c435ac"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (t.ensureControllerAlive("NextOnClick"), e = t.callContext(e), s.getPotentialLost() === r.BuiltinFunctions.nullTextIdentifier()) i.variables.isRequiredVar = !0;
                        else if (s.getPotentialLost() === "No") i.variables.notUndrestandCfDLossPopUpVar = !0;
                        else return r.Navigation.navigateTo(r.Navigation.generateScreenURL("tradershub", "trading-assessment/knowledge", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__nextOnClick$Action
        }
        set _nextOnClick$Action(e) {
            this.__nextOnClick$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "dd8804a9-986e-49af-afe2-d4104e1c3183"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e), s.setRealSignupCurrentStep(5)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        whyDoWeCollectThis_OnClick$Action(e) {
            var i = this.controller;
            return r.Logger.startActiveSpan("WhyDoWeCollectThis_OnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "WhyDoWeCollectThis_OnClick"), t.setAttribute("outsystems.function.key", "2a533820-f2c5-485f-989e-588f520735d6"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._whyDoWeCollectThis_OnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        clickOk$Action(e) {
            var i = this.controller;
            return r.Logger.startActiveSpan("ClickOk__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ClickOk"), t.setAttribute("outsystems.function.key", "499c9fe7-288f-4f2f-9c93-72210ce16bca"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._clickOk$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        okOnClick$Action(e) {
            var i = this.controller;
            return r.Logger.startActiveSpan("OkOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "OkOnClick"), t.setAttribute("outsystems.function.key", "54e0e58b-62ed-433b-9c98-7372ef550ed6"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._okOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var i = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "78d938a9-33bc-406c-a65d-4541cef295d2"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        nextOnClick$Action(e) {
            var i = this.controller;
            return r.Logger.startActiveSpan("NextOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "NextOnClick"), t.setAttribute("outsystems.function.key", "b0deb323-c5fd-44e1-b76a-989266c435ac"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._nextOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var i = this.controller;
            return r.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "dd8804a9-986e-49af-afe2-d4104e1c3183"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var i = this.controller,
                    t = this.model,
                    o = this.idService;
                return i.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var i = this.controller,
                    t = this.model,
                    o = this.idService;
                return i.onReady$Action(e)
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
    a(l, "ControllerInner");
    let c = l;
    A = c
}
var A, T = new r.Controller.ControllerFactory(A, f);
export {
    T as a
};