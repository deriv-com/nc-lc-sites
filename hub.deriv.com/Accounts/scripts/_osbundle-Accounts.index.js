import {
    a as w
} from "./_oschunk-Z3M37P36.js";
import {
    A as h,
    V as u,
    ba as O,
    e as f,
    h as S,
    i as g,
    r as p
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as s
} from "./_oschunk-QHO7QY6K.js";
var l;
(function(t) {
    t[t.Normal = 0] = "Normal", t[t.AtFunctionReturn = 1] = "AtFunctionReturn", t[t.BetweenAssignments = 2] = "BetweenAssignments"
})(l || (l = {}));
var d = class d {
    startSession() {}
    endSession() {}
    getThreadStack(e) {
        return null
    }
    addBreakpoint(e) {}
    addBreakpoints(e) {}
    allowBreakpointsFromModule(e) {}
    removeBreakpoint(e) {}
    clearBreakpoints() {}
    continue (e) {}
    continueToHere(e, n) {}
    stepInto(e) {}
    stepOver(e) {}
    stepOut(e) {}
    pauseOnAllExceptions(e) {}
    evaluateVariable(e, n, r, i, o, a) {
        return null
    }
    get version() {
        return 0
    }
    isSessionActive() {
        return !1
    }
    isPausedOnException() {
        return !1
    }
    getExceptionMessage(e) {
        return null
    }
    getThreadStartName(e) {
        return null
    }
    initialize(e) {
        return Promise.resolve()
    }
    registerMetaInfo(e) {}
    getRequestHeaders(e) {
        return null
    }
    processResponseHeaders(e, n) {}
    setThreadStartName(e, n) {}
    push(e, n, r, i, o, a) {}
    pop(e, n) {}
    handleFunctionCall(e, n, r) {
        return e()
    }
    handleBreakpoint(e, n, r, i) {
        return l.Normal, !0
    }
    handleException(e, n) {}
    parse(e) {
        return null
    }
    get BreakpointType() {
        return l
    }
};
s(d, "n");
var m = d,
    A = "6.21.0";
f.registerPackage("client-runtime-core", A);
(typeof window != "undefined" ? window : global).OutSystemsDebugger = new m;
Promise.all([u.default.initialize(w, g.Application.InitializationType.Full, new p.DateTimeFormatInfo("yyyy-MM-dd", "HH:mm:ss"), new p.NumberFormatInfo(".", ""), function() {
    return Promise.all(["scripts/Accounts.UserScripts.yupumd.js"].map(function(t) {
        return O.requireScript(t)
    }))
}).then(function(t) {
    if (t) {
        let e = function() {
                return new Promise(function(r) {
                    Promise.all([import("./_oschunk-I3EZSXGI.js")]).then(function(i) {
                        var o = i[0];
                        u.default.registerDefaultErrorHandler(function() {
                            return function(a, c) {
                                return o.default.handleError(a, c)
                            }
                        }), r()
                    })
                })
            },
            n = function() {
                return S.promise(function(r, i) {
                    Promise.all([import("./_oschunk-35GRVNTS.js")]).then(function(o) {
                        var a = o[0];
                        try {
                            a.Router.load(u.default), r()
                        } catch (c) {
                            i(c)
                        }
                    })
                })
            };
        return s(e, "initGlobalExceptionHandler"), s(n, "initView"), e().then(n)
    }
})]).catch(function(t) {
    h.handleError(t)
});