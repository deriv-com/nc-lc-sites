import {
    Ka as n
} from "./_oschunk-WCMQG33O.js";
import {
    X as l,
    c as a
} from "./_oschunk-DFKJJKI4.js";
var s = {};
var r = l,
    t = class t extends r.Controller.BaseController {
        getDefaultTimeout() {
            return n.defaultTimeout
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(o, d) {
                var h = this.controller;
                r.Logger.debug("Portfolio", r.Exceptions.getMessage(o));
                var i = r.Injector.resolve(r.ServiceNames.GlobalExceptionHandler);
                return i(o, d), r.ErrorHandling.UNHANDLED_ERROR_RESULT
            }), this._handleError
        }
        set handleError(o) {
            this._handleError = o
        }
    };
a(t, "Controller");
var e = t,
    g = new e(s);
export {
    g as a
};