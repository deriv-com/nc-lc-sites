import {
    Sb as n
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as l,
    c as a
} from "./_oschunk-M5BUVJ72.js";
var i = {};
var r = l,
    t = class t extends r.Controller.BaseController {
        getDefaultTimeout() {
            return n.defaultTimeout
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e, s) {
                var d = this.controller;
                r.Logger.debug("OnboardingFlow", r.Exceptions.getMessage(e));
                var u = r.Injector.resolve(r.ServiceNames.GlobalExceptionHandler);
                return u(e, s), r.ErrorHandling.UNHANDLED_ERROR_RESULT
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
    };
a(t, "Controller");
var o = t,
    _ = new o(i);
export {
    _ as a
};