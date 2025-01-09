import {
    o as a
} from "./_oschunk-KZFTAIEG.js";
import {
    ia as l
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as n
} from "./_oschunk-QHO7QY6K.js";
var r = l,
    t = class t extends r.Controller.BaseController {
        getDefaultTimeout() {
            return a.defaultTimeout
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(o, s) {
                var c = this.controller;
                r.Logger.debug("MainFlow", r.Exceptions.getMessage(o));
                var i = r.Injector.resolve(r.ServiceNames.GlobalExceptionHandler);
                return i(o, s), r.ErrorHandling.UNHANDLED_ERROR_RESULT
            }), this._handleError
        }
        set handleError(o) {
            this._handleError = o
        }
    };
n(t, "Controller");
var e = t,
    f = new e;
export {
    f as a
};