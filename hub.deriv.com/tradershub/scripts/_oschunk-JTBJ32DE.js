import {
    d as l
} from "./_oschunk-VADNKVBQ.js";
import {
    ia as d
} from "./_oschunk-5EPHB76O.js";
import {
    c as i
} from "./_oschunk-DVBKI63I.js";

function u(E, r, c) {
    window.location.reload()
}
i(u, "default");
var f = {};
var t = d,
    a = class a extends t.Controller.BaseController {
        getDefaultTimeout() {
            return l.defaultTimeout
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(r, c) {
                var b = this.controller;
                return t.Logger.startActiveSpan("OnException", function(o) {
                    o && (o.setAttribute("code.function", "OnException"), o.setAttribute("outsystems.function.key", "d95c2a12-d861-41fd-95f7-d2d139a2cef3.#FlowExceptionHandler"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                    try {
                        var m = new t.DataTypes.VariableHolder(new t.DataTypes.ErrorHandlerOutputType);
                        try {
                            if (t.Logger.debug("RealAccountCreation.OnException", t.Exceptions.getMessage(r)), t.Exceptions.isInstanceOf(r, t.Exceptions.Exceptions.CommunicationException)) return t.Logger.error(null, r, null, null, 1), m.value.exceptionMessageAttr = t.Exceptions.getMessage(r), t.Logger.startActiveSpan("CommunicationException", function(e) {
                                e && (e.setAttribute("code.function", "CommunicationException"), e.setAttribute("outsystems.function.key", "929b1aa9-7083-4ade-83e0-b06300a0835e"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                                try {
                                    t.Logger.startActiveSpan("ReloadWindow", function(n) {
                                        n && (n.setAttribute("code.function", "ReloadWindow"), n.setAttribute("outsystems.function.key", "7e4e5db9-27d3-4bfe-a2b3-1280925fab72"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return b.safeExecuteJSNode(u, "ReloadWindow", "OnException", null, function(A) {}, {}, {})
                                        } finally {
                                            n && n.end()
                                        }
                                    }, 1);
                                    return
                                } finally {
                                    e && e.end()
                                }
                            }, 1);
                            throw r
                        } catch (e) {
                            var y = t.Injector.resolve(t.ServiceNames.GlobalExceptionHandler);
                            return y(e, c)
                        }
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this._handleError
        }
        set handleError(r) {
            this._handleError = r
        }
    };
i(a, "Controller");
var s = a,
    T = new s(f);
export {
    T as a
};