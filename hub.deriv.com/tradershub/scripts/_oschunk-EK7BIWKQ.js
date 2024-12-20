import {
    d as n
} from "./_oschunk-VADNKVBQ.js";
import {
    ia as a
} from "./_oschunk-5EPHB76O.js";
import {
    c as l
} from "./_oschunk-DVBKI63I.js";
var s = {};
var r = a,
    t = class t extends r.Controller.BaseController {
        getDefaultTimeout() {
            return n.defaultTimeout
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e, i) {
                var u = this.controller;
                r.Logger.debug("WalletFlows", r.Exceptions.getMessage(e));
                var d = r.Injector.resolve(r.ServiceNames.GlobalExceptionHandler);
                return d(e, i), r.ErrorHandling.UNHANDLED_ERROR_RESULT
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
    };
l(t, "Controller");
var o = t,
    g = new o(s);
export {
    g as a
};