import {
    d as l
} from "./_oschunk-27GDEXUT.js";
import {
    ia as s
} from "./_oschunk-NTQBNJ73.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var n = {};
var r = s,
    t = class t extends r.Controller.BaseController {
        getDefaultTimeout() {
            return l.defaultTimeout
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e, d) {
                var u = this.controller;
                r.Logger.debug("ForgotAndResetPassword", r.Exceptions.getMessage(e));
                var i = r.Injector.resolve(r.ServiceNames.GlobalExceptionHandler);
                return i(e, d), r.ErrorHandling.UNHANDLED_ERROR_RESULT
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
    };
a(t, "Controller");
var o = t,
    c = new o(n);
export {
    c as a
};