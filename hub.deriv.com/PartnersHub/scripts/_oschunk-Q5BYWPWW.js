import {
    q as l
} from "./_oschunk-BDI2RWOA.js";
import {
    ia as n
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var s = {};
var r = n,
    t = class t extends r.Controller.BaseController {
        getDefaultTimeout() {
            return l.defaultTimeout
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e, i) {
                var m = this.controller;
                r.Logger.debug("PhNavigation", r.Exceptions.getMessage(e));
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
    c = new o(s);
export {
    c as a
};