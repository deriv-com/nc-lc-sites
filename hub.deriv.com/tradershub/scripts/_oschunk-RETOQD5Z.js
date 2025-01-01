import {
    c as n
} from "./_oschunk-DOFMR6EA.js";
import {
    ia as l
} from "./_oschunk-2JKANR6M.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var s = {};
var r = l,
    t = class t extends r.Controller.BaseController {
        getDefaultTimeout() {
            return n.defaultTimeout
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e, i) {
                var u = this.controller;
                r.Logger.debug("Signup", r.Exceptions.getMessage(e));
                var d = r.Injector.resolve(r.ServiceNames.GlobalExceptionHandler);
                return d(e, i), r.ErrorHandling.UNHANDLED_ERROR_RESULT
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
    };
a(t, "Controller");
var o = t,
    c = new o(s);
export {
    c as a
};