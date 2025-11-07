import {
    Sb as n
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as l,
    c as a
} from "./_oschunk-M5BUVJ72.js";
var s = {};
var r = l,
    t = class t extends r.Controller.BaseController {
        getDefaultTimeout() {
            return n.defaultTimeout
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e, i) {
                var m = this.controller;
                r.Logger.debug("TransferFlow", r.Exceptions.getMessage(e));
                var u = r.Injector.resolve(r.ServiceNames.GlobalExceptionHandler);
                return u(e, i), r.ErrorHandling.UNHANDLED_ERROR_RESULT
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
    };
a(t, "Controller");
var o = t,
    _ = new o(s);
export {
    _ as a
};