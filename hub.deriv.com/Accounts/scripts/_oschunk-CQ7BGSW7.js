import {
    a as A
} from "./_oschunk-FX7ZCYVH.js";
import {
    a as m
} from "./_oschunk-NQZZDANH.js";
import {
    o as y
} from "./_oschunk-KZFTAIEG.js";
import {
    ia as h
} from "./_oschunk-3RH6DZJJ.js";
import {
    c,
    i as u
} from "./_oschunk-QHO7QY6K.js";

function f(l, d, v) {
    let t = c(() => u(this, null, function*() {
            let o = {};
            o.cache = "no-cache", o.mode = "cors", o.headers = {
                Accept: "application/json",
                "Content-Type": "application/json"
            }, o.body = JSON.stringify({
                partner_id: "1091",
                product: "doc_verification"
            }), o.method = "POST";
            let n = "https://smile-qa63.k8s.deriv.dev/token";
            try {
                let r = yield fetch(n, o);
                if (r.status === 201) {
                    let a = yield r.json();
                    if (a.error) throw new Error(a.error);
                    return a
                }
            } catch (r) {
                let a = r;
                throw console.log(`API: ${a.name}, ${a.message}`), a
            }
        }), "getWebToken"),
        i = c(o => {
            SmileIdentity({
                token: o,
                product: "doc_verification",
                callback_url: "https://webhook.site/14d55a9e-29c2-40a9-864e-3dd3cf2a3632",
                environment: "sandbox",
                partner_details: {
                    partner_id: "1091",
                    name: "Deriv",
                    theme_color: "#000"
                },
                id_selection: {
                    AO: ["DRIVERS_LICENSE"]
                },
                onSuccess: c(() => {
                    console.log("SmileIdentityWebIntegration: onSuccess")
                }, "onSuccess"),
                onClose: c(() => {
                    console.log("SmileIdentityWebIntegration: onClose")
                }, "onClose"),
                onError: c(() => {
                    console.log("SmileIdentityWebIntegration: onError")
                }, "onError")
            })
        }, "configureSmileIdentityWebIntegration");
    c(() => u(this, null, function*() {
        let o = yield t("doc_verification");
        console.log("==>", o), i(o.token, "doc_verification")
    }), "initSmileIdentity")()
}
c(f, "default");
var s = h; {
    let d = class d extends s.Controller.BaseViewController {
        constructor(t, i, e) {
            super(t, i, e);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onClickButton$Action() {
            return this.hasOwnProperty("__onClickButton$Action") || (this.__onClickButton$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    o = this.idService;
                return s.Logger.startActiveSpan("onClickButton", function(n) {
                    n && (n.setAttribute("code.function", "onClickButton"), n.setAttribute("outsystems.function.key", "9ed29d86-e483-49d9-b5a4-42560dc2981b"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("onClickButton"), t = e.callContext(t), s.Logger.startActiveSpan("InitializeSmileid", function(r) {
                            r && (r.setAttribute("code.function", "InitializeSmileid"), r.setAttribute("outsystems.function.key", "21ac3c4c-d3a7-4336-83cc-b52ef5dbb80a"), r.setAttribute("outsystems.function.owner.name", "Accounts"), r.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), r.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(f, "InitializeSmileid", "onClickButton", null, function(a) {}, {}, {})
                            } finally {
                                r && r.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onClickButton$Action
        }
        set _onClickButton$Action(t) {
            this.__onClickButton$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    o = this.idService;
                return s.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "e5cdca1d-1b53-46f2-9232-23fbd6557eb0"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("OnReady"), t = e.callContext(t), s.Flow.executeAsyncFlow(function() {
                            return i.flush(), s.SystemActions.requireScript("https://cdn.smileidentity.com/inline/v1/js/script.min.js", t)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        onClickButton$Action(t) {
            var i = this.controller;
            return s.Logger.startActiveSpan("onClickButton__proxy", function(e) {
                e && (e.setAttribute("code.function", "onClickButton"), e.setAttribute("outsystems.function.key", "9ed29d86-e483-49d9-b5a4-42560dc2981b"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onClickButton$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var i = this.controller;
            return s.Logger.startActiveSpan("OnReady__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "e5cdca1d-1b53-46f2-9232-23fbd6557eb0"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onReady$Action, t)
                }, function() {
                    e && e.end()
                })
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
                var i = this.controller,
                    e = this.model,
                    o = this.idService;
                return i.onReady$Action(t)
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
                return A.default.handleError(t, this.callContext())
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return y.defaultTimeout
        }
    };
    c(d, "ControllerInner");
    let l = d;
    _ = l
}
var _, H = new s.Controller.ControllerFactory(_, m);
export {
    H as a
};