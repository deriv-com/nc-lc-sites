import {
    c as d
} from "./_oschunk-DOFMR6EA.js";
import {
    ia as l
} from "./_oschunk-2JKANR6M.js";
import {
    c as i
} from "./_oschunk-DVBKI63I.js";

function u(E, r, c) {
    window.location.reload()
}
i(u, "default");
var f = {};
var t = l,
    a = class a extends t.Controller.BaseController {
        getDefaultTimeout() {
            return d.defaultTimeout
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(r, c) {
                var b = this.controller;
                return t.Logger.startActiveSpan("OnException", function(o) {
                    o && (o.setAttribute("code.function", "OnException"), o.setAttribute("outsystems.function.key", "b5b6ef3a-3588-4eee-a332-e490d5ffcd42.#FlowExceptionHandler"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                    try {
                        var m = new t.DataTypes.VariableHolder(new t.DataTypes.ErrorHandlerOutputType);
                        try {
                            if (t.Logger.debug("RealAccountCreationMobile.OnException", t.Exceptions.getMessage(r)), t.Exceptions.isInstanceOf(r, t.Exceptions.Exceptions.CommunicationException)) return t.Logger.error(null, r, null, null, 1), m.value.exceptionMessageAttr = t.Exceptions.getMessage(r), t.Logger.startActiveSpan("CommunicationException", function(e) {
                                e && (e.setAttribute("code.function", "CommunicationException"), e.setAttribute("outsystems.function.key", "b93f01e3-b3ed-4b9f-a5a2-844fd24c5735"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                                try {
                                    t.Logger.startActiveSpan("ReloadWindow", function(n) {
                                        n && (n.setAttribute("code.function", "ReloadWindow"), n.setAttribute("outsystems.function.key", "51a64457-5636-4130-b3e5-8a6f3f5be3eb"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "JAVASCRIPT"));
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