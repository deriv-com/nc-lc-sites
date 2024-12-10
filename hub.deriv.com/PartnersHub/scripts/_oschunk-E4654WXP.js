import {
    p as l
} from "./_oschunk-FZ6FUHBV.js";
import {
    ia as a
} from "./_oschunk-5KJVGEL7.js";
import {
    c as n
} from "./_oschunk-QHO7QY6K.js";
var s = {};
var r = a,
    t = class t extends r.Controller.BaseController {
        getDefaultTimeout() {
            return l.defaultTimeout
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e, i) {
                var u = this.controller;
                r.Logger.debug("Home", r.Exceptions.getMessage(e));
                var m = r.Injector.resolve(r.ServiceNames.GlobalExceptionHandler);
                return m(e, i), r.ErrorHandling.UNHANDLED_ERROR_RESULT
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
    };
n(t, "Controller");
var o = t,
    c = new o(s);
export {
    c as a
};