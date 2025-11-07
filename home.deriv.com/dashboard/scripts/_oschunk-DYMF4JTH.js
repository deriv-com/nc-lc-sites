import {
    Ka as n
} from "./_oschunk-WCMQG33O.js";
import {
    X as l,
    c as t
} from "./_oschunk-DFKJJKI4.js";
var s = {};
var r = l,
    a = class a extends r.Controller.BaseController {
        getDefaultTimeout() {
            return n.defaultTimeout
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(o, d) {
                var h = this.controller;
                r.Logger.debug("GlobalLoginSignup", r.Exceptions.getMessage(o));
                var i = r.Injector.resolve(r.ServiceNames.GlobalExceptionHandler);
                return i(o, d), r.ErrorHandling.UNHANDLED_ERROR_RESULT
            }), this._handleError
        }
        set handleError(o) {
            this._handleError = o
        }
    };
t(a, "Controller");
var e = a,
    c = new e(s);
export {
    c as a
};