import {
    a as b
} from "./_oschunk-KWWRRBN4.js";
import {
    A as g,
    V as u,
    ba as O,
    e as f,
    h as S,
    i as h,
    r as p
} from "./_oschunk-NTQBNJ73.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var l;
(function(r) {
    r[r.Normal = 0] = "Normal", r[r.AtFunctionReturn = 1] = "AtFunctionReturn", r[r.BetweenAssignments = 2] = "BetweenAssignments"
})(l || (l = {}));
var m = class m {
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
    continueToHere(e, t) {}
    stepInto(e) {}
    stepOver(e) {}
    stepOut(e) {}
    pauseOnAllExceptions(e) {}
    evaluateVariable(e, t, n, i, s, o) {
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
    processResponseHeaders(e, t) {}
    setThreadStartName(e, t) {}
    push(e, t, n, i, s, o) {}
    pop(e, t) {}
    handleFunctionCall(e, t, n) {
        return e()
    }
    handleBreakpoint(e, t, n, i) {
        return l.Normal, !0
    }
    handleException(e, t) {}
    parse(e) {
        return null
    }
    get BreakpointType() {
        return l
    }
};
a(m, "n");
var d = m,
    w = "6.20.5";
f.registerPackage("client-runtime-core", w);
(typeof window != "undefined" ? window : global).OutSystemsDebugger = new d;
Promise.all([u.default.initialize(b, h.Application.InitializationType.Full, new p.DateTimeFormatInfo("yyyy-MM-dd", "HH:mm:ss"), new p.NumberFormatInfo(".", ""), function() {
    return Promise.all(["scripts/tradershub.UserScripts.FeatureFlags.js", "scripts/tradershub.UserScripts.DerivUTM.js", "scripts/tradershub.UserScripts.ReconnectingWebsocket.js", "scripts/tradershub.UserScripts.DerivAPIBasic.js", "scripts/tradershub.UserScripts.CachingScript.js", "scripts/tradershub.UserScripts.DerivAnalytics.js"].map(function(r) {
        return O.requireScript(r)
    }))
}).then(function(r) {
    if (r) {
        let e = function() {
                return new Promise(function(n) {
                    Promise.all([import("./_oschunk-YTS7NVFC.js")]).then(function(i) {
                        var s = i[0];
                        u.default.registerDefaultErrorHandler(function() {
                            return function(o, c) {
                                return s.default.handleError(o, c)
                            }
                        }), n()
                    })
                })
            },
            t = function() {
                return S.promise(function(n, i) {
                    Promise.all([import("./_oschunk-32GJFEW4.js")]).then(function(s) {
                        var o = s[0];
                        try {
                            o.Router.load(u.default), n()
                        } catch (c) {
                            i(c)
                        }
                    })
                })
            };
        return a(e, "initGlobalExceptionHandler"), a(t, "initView"), e().then(t)
    }
})]).catch(function(r) {
    g.handleError(r)
});