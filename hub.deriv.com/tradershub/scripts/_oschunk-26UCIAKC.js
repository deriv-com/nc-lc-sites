import {
    d as l
} from "./_oschunk-XMOR6XCC.js";
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
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e, i) {
                var m = this.controller;
                r.Logger.debug("TradingAssessmentFlow", r.Exceptions.getMessage(e));
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
    c = new o(n);
export {
    c as a
};