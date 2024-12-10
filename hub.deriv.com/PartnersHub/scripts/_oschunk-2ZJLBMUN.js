import {
    a as m
} from "./_oschunk-ACHUDQUN.js";
import {
    a as v
} from "./_oschunk-6WALBPGV.js";
import {
    a as c,
    p as a
} from "./_oschunk-FZ6FUHBV.js";
import {
    Ib as y
} from "./_oschunk-5FYEKNKX.js";
import {
    ia as h
} from "./_oschunk-5KJVGEL7.js";
import {
    c as f
} from "./_oschunk-QHO7QY6K.js";
var E = {};
var i = h; {
    let u = class u extends i.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, E);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "378d9c64-af72-4be7-8d28-adf534c2565f"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e), a.mountDerivAPIClient$Action(e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "8a3dfc56-e38a-4f94-bc60-f46adc435df1"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), a.useDevice$Action(e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _reSendEmailEvent$Action() {
            return this.hasOwnProperty("__reSendEmailEvent$Action") || (this.__reSendEmailEvent$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("ReSendEmailEvent", function(n) {
                    return n && (n.setAttribute("code.function", "ReSendEmailEvent"), n.setAttribute("outsystems.function.key", "d3f59e2c-e08c-4f11-84fd-b8cd1136fdf7"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        t.ensureControllerAlive("ReSendEmailEvent"), e = t.callContext(e);
                        var d = new i.DataTypes.VariableHolder;
                        return i.Flow.executeAsyncFlow(function() {
                            return r.flush(), a.sendVerifyEmail$Action(function() {
                                var s = new y;
                                return s.verify_emailAttr = c.getResetEmail(), s.typeAttr = "reset_password", s
                            }(), e).then(function(s) {
                                d.value = s
                            }).then(function() {
                                d.value.isErrorOut ? (c.setIsResetEmailSent(!1), i.FeedbackMessageService.showFeedbackMessage(d.value.errorMessageOut, 3)) : (c.setIsResetEmailSent(!0), i.FeedbackMessageService.showFeedbackMessage("Email sent.", 1))
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__reSendEmailEvent$Action
        }
        set _reSendEmailEvent$Action(e) {
            this.__reSendEmailEvent$Action = e
        }
        onInitialize$Action(e) {
            var r = this.controller;
            return i.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "378d9c64-af72-4be7-8d28-adf534c2565f"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return i.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "8a3dfc56-e38a-4f94-bc60-f46adc435df1"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        reSendEmailEvent$Action(e) {
            var r = this.controller;
            return i.Logger.startActiveSpan("ReSendEmailEvent__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ReSendEmailEvent"), t.setAttribute("outsystems.function.key", "d3f59e2c-e08c-4f11-84fd-b8cd1136fdf7"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._reSendEmailEvent$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    o = this.idService;
                return r.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    o = this.idService;
                return r.onReady$Action(e)
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
                return m.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return a.defaultTimeout
        }
    };
    f(u, "ControllerInner");
    let l = u;
    A = l
}
var A, P = new i.Controller.ControllerFactory(A, v);
export {
    P as a
};