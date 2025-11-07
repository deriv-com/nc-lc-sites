import {
    Ka as n
} from "./_oschunk-WCMQG33O.js";
import {
    X as d,
    c as u
} from "./_oschunk-DFKJJKI4.js";
var l = {};
var t = d,
    a = class a extends t.Controller.BaseController {
        getDefaultTimeout() {
            return n.defaultTimeout
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(o, s) {
                var f = this.controller;
                return t.Logger.startActiveSpan("OnException", function(r) {
                    r && (r.setAttribute("code.function", "OnException"), r.setAttribute("outsystems.function.key", "9f93259d-610b-4c76-8aca-072917b45b33.#FlowExceptionHandler"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                    try {
                        var b = new t.DataTypes.VariableHolder(new t.DataTypes.ErrorHandlerOutputType);
                        try {
                            if (t.Logger.debug("Onboarding.OnException", t.Exceptions.getMessage(o)), t.Exceptions.isInstanceOf(o, t.Exceptions.Exceptions.UserException, "dashboard.Unauthorized")) return t.Logger.error(null, o, null, null, 1), b.value.exceptionMessageAttr = t.Exceptions.getMessage(o), t.Logger.startActiveSpan("Unauthorized", function(e) {
                                e && (e.setAttribute("code.function", "Unauthorized"), e.setAttribute("outsystems.function.key", "0dbbb3ad-a662-41be-9e28-53d15245ce9d"), e.setAttribute("outsystems.function.owner.name", "dashboard"), e.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), e.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                                try {
                                    n.client_Logout$Action(s);
                                    return
                                } finally {
                                    e && e.end()
                                }
                            }, 1);
                            throw o
                        } catch (e) {
                            var c = t.Injector.resolve(t.ServiceNames.GlobalExceptionHandler);
                            return c(e, s)
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
u(a, "Controller");
var i = a,
    O = new i(l);
export {
    O as a
};