import {
    a as w
} from "./_oschunk-VYXP2FQN.js";
import {
    A as h,
    V as u,
    ba as O,
    e as f,
    h as S,
    i as g,
    r as c
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
    continueToHere(e, r) {}
    stepInto(e) {}
    stepOver(e) {}
    stepOut(e) {}
    pauseOnAllExceptions(e) {}
    evaluateVariable(e, r, n, i, o, a) {
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
    processResponseHeaders(e, r) {}
    setThreadStartName(e, r) {}
    push(e, r, n, i, o, a) {}
    pop(e, r) {}
    handleFunctionCall(e, r, n) {
        return e()
    }
    handleBreakpoint(e, r, n, i) {
        return l.Normal, !0
    }
    handleException(e, r) {}
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
Promise.all([u.default.initialize(w, g.Application.InitializationType.Full, new c.DateTimeFormatInfo("yyyy-MM-dd", "HH:mm:ss"), new c.NumberFormatInfo(".", ""), function() {
    return Promise.all(["scripts/PartnersHub.UserScripts.yupumd.js", "scripts/PartnersHub.UserScripts.CacheScript.js"].map(function(t) {
        return O.requireScript(t)
    }))
}).then(function(t) {
    if (t) {
        let e = function() {
                return new Promise(function(n) {
                    Promise.all([import("./_oschunk-H34GABYZ.js")]).then(function(i) {
                        var o = i[0];
                        u.default.registerDefaultErrorHandler(function() {
                            return function(a, p) {
                                return o.default.handleError(a, p)
                            }
                        }), n()
                    })
                })
            },
            r = function() {
                return S.promise(function(n, i) {
                    Promise.all([import("./_oschunk-35GRVNTS.js")]).then(function(o) {
                        var a = o[0];
                        try {
                            a.Router.load(u.default), n()
                        } catch (p) {
                            i(p)
                        }
                    })
                })
            };
        return s(e, "initGlobalExceptionHandler"), s(r, "initView"), e().then(r)
    }
})]).catch(function(t) {
    h.handleError(t)
});