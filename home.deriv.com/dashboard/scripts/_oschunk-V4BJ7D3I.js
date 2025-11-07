import {
    Ka as n
} from "./_oschunk-WCMQG33O.js";
import {
    X as l,
    c as u
} from "./_oschunk-DFKJJKI4.js";
var d = {};
var t = l,
    s = class s extends t.Controller.BaseController {
        getDefaultTimeout() {
            return n.defaultTimeout
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(o, a) {
                var f = this.controller;
                return t.Logger.startActiveSpan("OnException", function(r) {
                    r && (r.setAttribute("code.function", "OnException"), r.setAttribute("outsystems.function.key", "b3496b7d-e59e-4a23-824e-5c24703a310c.#FlowExceptionHandler"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                    try {
                        var c = new t.DataTypes.VariableHolder(new t.DataTypes.ErrorHandlerOutputType);
                        try {
                            if (t.Logger.debug("MainFlow.OnException", t.Exceptions.getMessage(o)), t.Exceptions.isInstanceOf(o, t.Exceptions.Exceptions.UserException, "dashboard.Unauthorized")) return t.Logger.error(null, o, null, null, 1), c.value.exceptionMessageAttr = t.Exceptions.getMessage(o), t.Logger.startActiveSpan("Unauthorized", function(e) {
                                e && (e.setAttribute("code.function", "Unauthorized"), e.setAttribute("outsystems.function.key", "3ef0d118-0158-45c4-9ee1-2b8378bc300c"), e.setAttribute("outsystems.function.owner.name", "dashboard"), e.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), e.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                                try {
                                    n.client_Logout$Action(a);
                                    return
                                } finally {
                                    e && e.end()
                                }
                            }, 1);
                            throw o
                        } catch (e) {
                            var b = t.Injector.resolve(t.ServiceNames.GlobalExceptionHandler);
                            return b(e, a)
                        }
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this._handleError
        }
        set handleError(o) {
            this._handleError = o
        }
    };
u(s, "Controller");
var i = s,
    w = new i(d);
export {
    w as a
};