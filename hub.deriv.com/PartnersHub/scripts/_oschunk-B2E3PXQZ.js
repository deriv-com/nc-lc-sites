import {
    a as c
} from "./_oschunk-LDM77VCP.js";
import {
    a as d
} from "./_oschunk-6WALBPGV.js";
import {
    p as s
} from "./_oschunk-FZ6FUHBV.js";
import {
    ia as u
} from "./_oschunk-5KJVGEL7.js";
import {
    c as l
} from "./_oschunk-QHO7QY6K.js";
var h = {};
var o = u; {
    let a = class a extends o.Controller.BaseViewController {
        constructor(t, r, e) {
            super(t, r, e, h);
            var f = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _buttonOnClick$Action() {
            return this.hasOwnProperty("__buttonOnClick$Action") || (this.__buttonOnClick$Action = function(t) {
                var r = this.model,
                    e = this.controller,
                    f = this.idService;
                return o.Logger.startActiveSpan("ButtonOnClick", function(n) {
                    n && (n.setAttribute("code.function", "ButtonOnClick"), n.setAttribute("outsystems.function.key", "9b0bc1bd-0a37-4c1d-b871-817044c3939d"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("ButtonOnClick"), t = e.callContext(t), s.fetchWellKnownConfiguration$Action(t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__buttonOnClick$Action
        }
        set _buttonOnClick$Action(t) {
            this.__buttonOnClick$Action = t
        }
        buttonOnClick$Action(t) {
            var r = this.controller;
            return o.Logger.startActiveSpan("ButtonOnClick__proxy", function(e) {
                e && (e.setAttribute("code.function", "ButtonOnClick"), e.setAttribute("outsystems.function.key", "9b0bc1bd-0a37-4c1d-b871-817044c3939d"), e.setAttribute("outsystems.function.owner.name", "PartnersHub"), e.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._buttonOnClick$Action, t)
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
                return c.default.handleError(t, this.callContext())
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return s.defaultTimeout
        }
    };
    l(a, "ControllerInner");
    let i = a;
    _ = i
}
var _, O = new o.Controller.ControllerFactory(_, d);
export {
    O as a
};