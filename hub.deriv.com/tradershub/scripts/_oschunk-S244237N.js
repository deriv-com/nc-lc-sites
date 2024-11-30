import {
    b as c,
    d
} from "./_oschunk-XMOR6XCC.js";
import {
    ia as a
} from "./_oschunk-NTQBNJ73.js";
import {
    c as l
} from "./_oschunk-DVBKI63I.js";
var f = {};
var t = a,
    i = class i extends t.Controller.BaseController {
        getDefaultTimeout() {
            return d.defaultTimeout
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(o, s) {
                var b = this.controller;
                return t.Logger.startActiveSpan("OnException", function(r) {
                    r && (r.setAttribute("code.function", "OnException"), r.setAttribute("outsystems.function.key", "b3496b7d-e59e-4a23-824e-5c24703a310c.#FlowExceptionHandler"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                    try {
                        var u = new t.DataTypes.VariableHolder(new t.DataTypes.ErrorHandlerOutputType);
                        try {
                            if (t.Logger.debug("MainFlow.OnException", t.Exceptions.getMessage(o)), t.Exceptions.isInstanceOf(o, t.Exceptions.Exceptions.CommunicationException)) return t.Logger.error(null, o, null, null, 1), u.value.exceptionMessageAttr = t.Exceptions.getMessage(o), t.Logger.startActiveSpan("CommunicationException", function(e) {
                                e && (e.setAttribute("code.function", "CommunicationException"), e.setAttribute("outsystems.function.key", "be69fff7-4715-4621-ab0b-9d02cb2d371e"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                                try {
                                    c.consoleLog$Action(u.value.exceptionMessageAttr, 0, s);
                                    return
                                } finally {
                                    e && e.end()
                                }
                            }, 1);
                            throw o
                        } catch (e) {
                            var m = t.Injector.resolve(t.ServiceNames.GlobalExceptionHandler);
                            return m(e, s)
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
l(i, "Controller");
var n = i,
    L = new n(f);
export {
    L as a
};