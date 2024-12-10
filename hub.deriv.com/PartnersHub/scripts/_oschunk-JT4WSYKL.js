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
    o = class o extends r.Controller.BaseController {
        getDefaultTimeout() {
            return l.defaultTimeout
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e, i) {
                var m = this.controller;
                r.Logger.debug("Events", r.Exceptions.getMessage(e));
                var u = r.Injector.resolve(r.ServiceNames.GlobalExceptionHandler);
                return u(e, i), r.ErrorHandling.UNHANDLED_ERROR_RESULT
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
    };
n(o, "Controller");
var t = o,
    H = new t(s);
export {
    H as a
};