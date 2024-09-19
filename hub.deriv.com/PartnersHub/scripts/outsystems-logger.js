! function(t, e) {
    if ("function" == typeof define && define.amd) define("@outsystems/logger-js", ["exports", "@outsystems/settings-js", "@outsystems/communication-js"], e);
    else if ("undefined" != typeof exports) e(exports, require("@outsystems/settings-js"), require("@outsystems/communication-js"));
    else {
        var n = {
            exports: {}
        };
        e(n.exports, t.settingsJs, t.communicationJs), t.outsystemsLoggerJs = n.exports
    }
}("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : this, (function(t, e, n) {
    "use strict";

    function r(t, e, n, r) {
        return new(n || (n = Promise))((function(o, i) {
            function s(t) {
                try {
                    u(r.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function a(t) {
                try {
                    u(r.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                var e;
                t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                    t(e)
                }))).then(s, a)
            }
            u((r = r.apply(t, e || [])).next())
        }))
    }

    function o(t, e, n, r) {
        if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof e ? t !== e || !r : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === n ? r : "a" === n ? r.call(t) : r ? r.value : e.get(t)
    }

    function i(t, e, n, r, o) {
        if ("m" === r) throw new TypeError("Private method is not writable");
        if ("a" === r && !o) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === r ? o.call(t, n) : o ? o.value = n : e.set(t, n), n
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Visibility = t.Version = t.Tracer = t.SpanKind = t.Logger = t.LogType = t.Log = t.KnownAttributes = t.InstrumentationFactory = void 0, "function" == typeof SuppressedError && SuppressedError;
    var s = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : "object" == typeof window ? window : "object" == typeof global ? global : {},
        a = "1.9.0",
        u = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
    var c = function(t) {
            var e = new Set([t]),
                n = new Set,
                r = t.match(u);
            if (!r) return function() {
                return !1
            };
            var o = +r[1],
                i = +r[2],
                s = +r[3];
            if (null != r[4]) return function(e) {
                return e === t
            };

            function a(t) {
                return n.add(t), !1
            }

            function c(t) {
                return e.add(t), !0
            }
            return function(t) {
                if (e.has(t)) return !0;
                if (n.has(t)) return !1;
                var r = t.match(u);
                if (!r) return a(t);
                var l = +r[1],
                    f = +r[2],
                    p = +r[3];
                return null != r[4] || o !== l ? a(t) : 0 === o ? i === f && s <= p ? c(t) : a(t) : i <= f ? c(t) : a(t)
            }
        }(a),
        l = a.split(".")[0],
        f = Symbol.for("opentelemetry.js.api." + l),
        p = s;

    function h(t, e, n, r) {
        var o;
        void 0 === r && (r = !1);
        var i = p[f] = null !== (o = p[f]) && void 0 !== o ? o : {
            version: a
        };
        if (!r && i[t]) {
            var s = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + t);
            return n.error(s.stack || s.message), !1
        }
        if (i.version !== a) {
            s = new Error("@opentelemetry/api: Registration of version v" + i.version + " for " + t + " does not match previously registered API v" + a);
            return n.error(s.stack || s.message), !1
        }
        return i[t] = e, n.debug("@opentelemetry/api: Registered a global for " + t + " v" + a + "."), !0
    }

    function d(t) {
        var e, n, r = null === (e = p[f]) || void 0 === e ? void 0 : e.version;
        if (r && c(r)) return null === (n = p[f]) || void 0 === n ? void 0 : n[t]
    }

    function g(t, e) {
        e.debug("@opentelemetry/api: Unregistering a global for " + t + " v" + a + ".");
        var n = p[f];
        n && delete n[t]
    }
    var v, _ = function(t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n) return t;
            var r, o, i = n.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(r = i.next()).done;) s.push(r.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o) throw o.error
                }
            }
            return s
        },
        y = function(t, e, n) {
            if (n || 2 === arguments.length)
                for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
            return t.concat(r || Array.prototype.slice.call(e))
        },
        m = function() {
            function t(t) {
                this._namespace = t.namespace || "DiagComponentLogger"
            }
            return t.prototype.debug = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return T("debug", this._namespace, t)
            }, t.prototype.error = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return T("error", this._namespace, t)
            }, t.prototype.info = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return T("info", this._namespace, t)
            }, t.prototype.warn = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return T("warn", this._namespace, t)
            }, t.prototype.verbose = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return T("verbose", this._namespace, t)
            }, t
        }();

    function T(t, e, n) {
        var r = d("diag");
        if (r) return n.unshift(e), r[t].apply(r, y([], _(n), !1))
    }! function(t) {
        t[t.NONE = 0] = "NONE", t[t.ERROR = 30] = "ERROR", t[t.WARN = 50] = "WARN", t[t.INFO = 60] = "INFO", t[t.DEBUG = 70] = "DEBUG", t[t.VERBOSE = 80] = "VERBOSE", t[t.ALL = 9999] = "ALL"
    }(v || (v = {}));
    var b = function(t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n) return t;
            var r, o, i = n.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(r = i.next()).done;) s.push(r.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o) throw o.error
                }
            }
            return s
        },
        E = function(t, e, n) {
            if (n || 2 === arguments.length)
                for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
            return t.concat(r || Array.prototype.slice.call(e))
        },
        S = function() {
            function t() {
                function t(t) {
                    return function() {
                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                        var r = d("diag");
                        if (r) return r[t].apply(r, E([], b(e), !1))
                    }
                }
                var e = this;
                e.setLogger = function(t, n) {
                    var r, o, i;
                    if (void 0 === n && (n = {
                            logLevel: v.INFO
                        }), t === e) {
                        var s = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                        return e.error(null !== (r = s.stack) && void 0 !== r ? r : s.message), !1
                    }
                    "number" == typeof n && (n = {
                        logLevel: n
                    });
                    var a = d("diag"),
                        u = function(t, e) {
                            function n(n, r) {
                                var o = e[n];
                                return "function" == typeof o && t >= r ? o.bind(e) : function() {}
                            }
                            return t < v.NONE ? t = v.NONE : t > v.ALL && (t = v.ALL), e = e || {}, {
                                error: n("error", v.ERROR),
                                warn: n("warn", v.WARN),
                                info: n("info", v.INFO),
                                debug: n("debug", v.DEBUG),
                                verbose: n("verbose", v.VERBOSE)
                            }
                        }(null !== (o = n.logLevel) && void 0 !== o ? o : v.INFO, t);
                    if (a && !n.suppressOverrideMessage) {
                        var c = null !== (i = (new Error).stack) && void 0 !== i ? i : "<failed to generate stacktrace>";
                        a.warn("Current logger will be overwritten from " + c), u.warn("Current logger will overwrite one already registered from " + c)
                    }
                    return h("diag", u, e, !0)
                }, e.disable = function() {
                    g("diag", e)
                }, e.createComponentLogger = function(t) {
                    return new m(t)
                }, e.verbose = t("verbose"), e.debug = t("debug"), e.info = t("info"), e.warn = t("warn"), e.error = t("error")
            }
            return t.instance = function() {
                return this._instance || (this._instance = new t), this._instance
            }, t
        }(),
        O = function(t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n) return t;
            var r, o, i = n.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(r = i.next()).done;) s.push(r.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o) throw o.error
                }
            }
            return s
        },
        w = function(t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                n = e && t[e],
                r = 0;
            if (n) return n.call(t);
            if (t && "number" == typeof t.length) return {
                next: function() {
                    return t && r >= t.length && (t = void 0), {
                        value: t && t[r++],
                        done: !t
                    }
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        A = function() {
            function t(t) {
                this._entries = t ? new Map(t) : new Map
            }
            return t.prototype.getEntry = function(t) {
                var e = this._entries.get(t);
                if (e) return Object.assign({}, e)
            }, t.prototype.getAllEntries = function() {
                return Array.from(this._entries.entries()).map((function(t) {
                    var e = O(t, 2);
                    return [e[0], e[1]]
                }))
            }, t.prototype.setEntry = function(e, n) {
                var r = new t(this._entries);
                return r._entries.set(e, n), r
            }, t.prototype.removeEntry = function(e) {
                var n = new t(this._entries);
                return n._entries.delete(e), n
            }, t.prototype.removeEntries = function() {
                for (var e, n, r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
                var i = new t(this._entries);
                try {
                    for (var s = w(r), a = s.next(); !a.done; a = s.next()) {
                        var u = a.value;
                        i._entries.delete(u)
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        a && !a.done && (n = s.return) && n.call(s)
                    } finally {
                        if (e) throw e.error
                    }
                }
                return i
            }, t.prototype.clear = function() {
                return new t
            }, t
        }(),
        L = Symbol("BaggageEntryMetadata"),
        k = S.instance();

    function I(t) {
        return void 0 === t && (t = {}), new A(new Map(Object.entries(t)))
    }

    function P(t) {
        return Symbol.for(t)
    }
    var R, C, N = function t(e) {
            var n = this;
            n._currentContext = e ? new Map(e) : new Map, n.getValue = function(t) {
                return n._currentContext.get(t)
            }, n.setValue = function(e, r) {
                var o = new t(n._currentContext);
                return o._currentContext.set(e, r), o
            }, n.deleteValue = function(e) {
                var r = new t(n._currentContext);
                return r._currentContext.delete(e), r
            }
        },
        x = new N,
        j = (R = function(t, e) {
            return R = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, R(t, e)
        }, function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }
            R(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        M = function() {
            function t() {}
            return t.prototype.createGauge = function(t, e) {
                return $
            }, t.prototype.createHistogram = function(t, e) {
                return q
            }, t.prototype.createCounter = function(t, e) {
                return X
            }, t.prototype.createUpDownCounter = function(t, e) {
                return K
            }, t.prototype.createObservableGauge = function(t, e) {
                return Q
            }, t.prototype.createObservableCounter = function(t, e) {
                return Y
            }, t.prototype.createObservableUpDownCounter = function(t, e) {
                return J
            }, t.prototype.addBatchObservableCallback = function(t, e) {}, t.prototype.removeBatchObservableCallback = function(t) {}, t
        }(),
        D = function() {},
        B = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return j(e, t), e.prototype.add = function(t, e) {}, e
        }(D),
        U = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return j(e, t), e.prototype.add = function(t, e) {}, e
        }(D),
        W = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return j(e, t), e.prototype.record = function(t, e) {}, e
        }(D),
        z = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return j(e, t), e.prototype.record = function(t, e) {}, e
        }(D),
        F = function() {
            function t() {}
            return t.prototype.addCallback = function(t) {}, t.prototype.removeCallback = function(t) {}, t
        }(),
        Z = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return j(e, t), e
        }(F),
        V = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return j(e, t), e
        }(F),
        G = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return j(e, t), e
        }(F),
        H = new M,
        X = new B,
        $ = new W,
        q = new z,
        K = new U,
        Y = new Z,
        Q = new V,
        J = new G,
        tt = {
            get: function(t, e) {
                if (null != t) return t[e]
            },
            keys: function(t) {
                return null == t ? [] : Object.keys(t)
            }
        },
        et = {
            set: function(t, e, n) {
                null != t && (t[e] = n)
            }
        },
        nt = function(t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n) return t;
            var r, o, i = n.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(r = i.next()).done;) s.push(r.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o) throw o.error
                }
            }
            return s
        },
        rt = function(t, e, n) {
            if (n || 2 === arguments.length)
                for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
            return t.concat(r || Array.prototype.slice.call(e))
        },
        ot = function() {
            function t() {}
            return t.prototype.active = function() {
                return x
            }, t.prototype.with = function(t, e, n) {
                for (var r = [], o = 3; o < arguments.length; o++) r[o - 3] = arguments[o];
                return e.call.apply(e, rt([n], nt(r), !1))
            }, t.prototype.bind = function(t, e) {
                return e
            }, t.prototype.enable = function() {
                return this
            }, t.prototype.disable = function() {
                return this
            }, t
        }(),
        it = function(t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n) return t;
            var r, o, i = n.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(r = i.next()).done;) s.push(r.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o) throw o.error
                }
            }
            return s
        },
        st = function(t, e, n) {
            if (n || 2 === arguments.length)
                for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
            return t.concat(r || Array.prototype.slice.call(e))
        },
        at = "context",
        ut = new ot,
        ct = function() {
            function t() {}
            return t.getInstance = function() {
                return this._instance || (this._instance = new t), this._instance
            }, t.prototype.setGlobalContextManager = function(t) {
                return h(at, t, S.instance())
            }, t.prototype.active = function() {
                return this._getContextManager().active()
            }, t.prototype.with = function(t, e, n) {
                for (var r, o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i];
                return (r = this._getContextManager()).with.apply(r, st([t, e, n], it(o), !1))
            }, t.prototype.bind = function(t, e) {
                return this._getContextManager().bind(t, e)
            }, t.prototype._getContextManager = function() {
                return d(at) || ut
            }, t.prototype.disable = function() {
                this._getContextManager().disable(), g(at, S.instance())
            }, t
        }();
    ! function(t) {
        t[t.NONE = 0] = "NONE", t[t.SAMPLED = 1] = "SAMPLED"
    }(C || (C = {}));
    var lt = "0000000000000000",
        ft = "00000000000000000000000000000000",
        pt = {
            traceId: ft,
            spanId: lt,
            traceFlags: C.NONE
        },
        ht = function() {
            function t(t) {
                void 0 === t && (t = pt), this._spanContext = t
            }
            return t.prototype.spanContext = function() {
                return this._spanContext
            }, t.prototype.setAttribute = function(t, e) {
                return this
            }, t.prototype.setAttributes = function(t) {
                return this
            }, t.prototype.addEvent = function(t, e) {
                return this
            }, t.prototype.addLink = function(t) {
                return this
            }, t.prototype.addLinks = function(t) {
                return this
            }, t.prototype.setStatus = function(t) {
                return this
            }, t.prototype.updateName = function(t) {
                return this
            }, t.prototype.end = function(t) {}, t.prototype.isRecording = function() {
                return !1
            }, t.prototype.recordException = function(t, e) {}, t
        }(),
        dt = P("OpenTelemetry Context Key SPAN");

    function gt(t) {
        return t.getValue(dt) || void 0
    }

    function vt() {
        return gt(ct.getInstance().active())
    }

    function _t(t, e) {
        return t.setValue(dt, e)
    }

    function yt(t) {
        return t.deleteValue(dt)
    }

    function mt(t, e) {
        return _t(t, new ht(e))
    }

    function Tt(t) {
        var e;
        return null === (e = gt(t)) || void 0 === e ? void 0 : e.spanContext()
    }
    var bt = /^([0-9a-f]{32})$/i,
        Et = /^[0-9a-f]{16}$/i;

    function St(t) {
        return bt.test(t) && t !== ft
    }

    function Ot(t) {
        return St(t.traceId) && (e = t.spanId, Et.test(e) && e !== lt);
        var e
    }

    function wt(t) {
        return new ht(t)
    }
    var At = ct.getInstance(),
        Lt = function() {
            function t() {}
            return t.prototype.startSpan = function(t, e, n) {
                if (void 0 === n && (n = At.active()), Boolean(null == e ? void 0 : e.root)) return new ht;
                var r, o = n && Tt(n);
                return "object" == typeof(r = o) && "string" == typeof r.spanId && "string" == typeof r.traceId && "number" == typeof r.traceFlags && Ot(o) ? new ht(o) : new ht
            }, t.prototype.startActiveSpan = function(t, e, n, r) {
                var o, i, s;
                if (!(arguments.length < 2)) {
                    2 === arguments.length ? s = e : 3 === arguments.length ? (o = e, s = n) : (o = e, i = n, s = r);
                    var a = null != i ? i : At.active(),
                        u = this.startSpan(t, o, a),
                        c = _t(a, u);
                    return At.with(c, s, void 0, u)
                }
            }, t
        }();
    var kt, It, Pt, Rt = new Lt,
        Ct = function() {
            function t(t, e, n, r) {
                this._provider = t, this.name = e, this.version = n, this.options = r
            }
            return t.prototype.startSpan = function(t, e, n) {
                return this._getTracer().startSpan(t, e, n)
            }, t.prototype.startActiveSpan = function(t, e, n, r) {
                var o = this._getTracer();
                return Reflect.apply(o.startActiveSpan, o, arguments)
            }, t.prototype._getTracer = function() {
                if (this._delegate) return this._delegate;
                var t = this._provider.getDelegateTracer(this.name, this.version, this.options);
                return t ? (this._delegate = t, this._delegate) : Rt
            }, t
        }(),
        Nt = new(function() {
            function t() {}
            return t.prototype.getTracer = function(t, e, n) {
                return new Lt
            }, t
        }()),
        xt = function() {
            function t() {}
            return t.prototype.getTracer = function(t, e, n) {
                var r;
                return null !== (r = this.getDelegateTracer(t, e, n)) && void 0 !== r ? r : new Ct(this, t, e, n)
            }, t.prototype.getDelegate = function() {
                var t;
                return null !== (t = this._delegate) && void 0 !== t ? t : Nt
            }, t.prototype.setDelegate = function(t) {
                this._delegate = t
            }, t.prototype.getDelegateTracer = function(t, e, n) {
                var r;
                return null === (r = this._delegate) || void 0 === r ? void 0 : r.getTracer(t, e, n)
            }, t
        }();
    ! function(t) {
        t[t.NOT_RECORD = 0] = "NOT_RECORD", t[t.RECORD = 1] = "RECORD", t[t.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED"
    }(kt || (kt = {})),
    function(t) {
        t[t.INTERNAL = 0] = "INTERNAL", t[t.SERVER = 1] = "SERVER", t[t.CLIENT = 2] = "CLIENT", t[t.PRODUCER = 3] = "PRODUCER", t[t.CONSUMER = 4] = "CONSUMER"
    }(It || (It = {})),
    function(t) {
        t[t.UNSET = 0] = "UNSET", t[t.OK = 1] = "OK", t[t.ERROR = 2] = "ERROR"
    }(Pt || (Pt = {}));
    var jt = ct.getInstance(),
        Mt = S.instance(),
        Dt = new(function() {
            function t() {}
            return t.prototype.getMeter = function(t, e, n) {
                return H
            }, t
        }()),
        Bt = "metrics",
        Ut = function() {
            function t() {}
            return t.getInstance = function() {
                return this._instance || (this._instance = new t), this._instance
            }, t.prototype.setGlobalMeterProvider = function(t) {
                return h(Bt, t, S.instance())
            }, t.prototype.getMeterProvider = function() {
                return d(Bt) || Dt
            }, t.prototype.getMeter = function(t, e, n) {
                return this.getMeterProvider().getMeter(t, e, n)
            }, t.prototype.disable = function() {
                g(Bt, S.instance())
            }, t
        }().getInstance(),
        Wt = function() {
            function t() {}
            return t.prototype.inject = function(t, e) {}, t.prototype.extract = function(t, e) {
                return t
            }, t.prototype.fields = function() {
                return []
            }, t
        }(),
        zt = P("OpenTelemetry Baggage Key");

    function Ft(t) {
        return t.getValue(zt) || void 0
    }

    function Zt() {
        return Ft(ct.getInstance().active())
    }

    function Vt(t, e) {
        return t.setValue(zt, e)
    }

    function Gt(t) {
        return t.deleteValue(zt)
    }
    var Ht = "propagation",
        Xt = new Wt,
        $t = function() {
            function t() {
                this.createBaggage = I, this.getBaggage = Ft, this.getActiveBaggage = Zt, this.setBaggage = Vt, this.deleteBaggage = Gt
            }
            return t.getInstance = function() {
                return this._instance || (this._instance = new t), this._instance
            }, t.prototype.setGlobalPropagator = function(t) {
                return h(Ht, t, S.instance())
            }, t.prototype.inject = function(t, e, n) {
                return void 0 === n && (n = et), this._getGlobalPropagator().inject(t, e, n)
            }, t.prototype.extract = function(t, e, n) {
                return void 0 === n && (n = tt), this._getGlobalPropagator().extract(t, e, n)
            }, t.prototype.fields = function() {
                return this._getGlobalPropagator().fields()
            }, t.prototype.disable = function() {
                g(Ht, S.instance())
            }, t.prototype._getGlobalPropagator = function() {
                return d(Ht) || Xt
            }, t
        }(),
        qt = $t.getInstance(),
        Kt = "trace",
        Yt = function() {
            function t() {
                this._proxyTracerProvider = new xt, this.wrapSpanContext = wt, this.isSpanContextValid = Ot, this.deleteSpan = yt, this.getSpan = gt, this.getActiveSpan = vt, this.getSpanContext = Tt, this.setSpan = _t, this.setSpanContext = mt
            }
            return t.getInstance = function() {
                return this._instance || (this._instance = new t), this._instance
            }, t.prototype.setGlobalTracerProvider = function(t) {
                var e = h(Kt, this._proxyTracerProvider, S.instance());
                return e && this._proxyTracerProvider.setDelegate(t), e
            }, t.prototype.getTracerProvider = function() {
                return d(Kt) || this._proxyTracerProvider
            }, t.prototype.getTracer = function(t, e) {
                return this.getTracerProvider().getTracer(t, e)
            }, t.prototype.disable = function() {
                g(Kt, S.instance()), this._proxyTracerProvider = new xt
            }, t
        }().getInstance(),
        Qt = P("OpenTelemetry SDK Context Key SUPPRESS_TRACING");

    function Jt(t) {
        return !0 === t.getValue(Qt)
    }
    var te = "baggage",
        ee = function(t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n) return t;
            var r, o, i = n.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(r = i.next()).done;) s.push(r.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o) throw o.error
                }
            }
            return s
        };

    function ne(t) {
        var e = t.split(";");
        if (!(e.length <= 0)) {
            var n = e.shift();
            if (n) {
                var r = n.indexOf("=");
                if (!(r <= 0)) {
                    var o, i, s = decodeURIComponent(n.substring(0, r).trim()),
                        a = decodeURIComponent(n.substring(r + 1).trim());
                    return e.length > 0 && ("string" != typeof(i = e.join(";")) && (k.error("Cannot create baggage metadata from unknown type: " + typeof i), i = ""), o = {
                        __TYPE__: L,
                        toString: function() {
                            return i
                        }
                    }), {
                        key: s,
                        value: a,
                        metadata: o
                    }
                }
            }
        }
    }
    var re = function() {
            function t() {}
            return t.prototype.inject = function(t, e, n) {
                var r = qt.getBaggage(t);
                if (r && !Jt(t)) {
                    var o = function(t) {
                            return t.getAllEntries().map((function(t) {
                                var e = ee(t, 2),
                                    n = e[0],
                                    r = e[1],
                                    o = encodeURIComponent(n) + "=" + encodeURIComponent(r.value);
                                return void 0 !== r.metadata && (o += ";" + r.metadata.toString()), o
                            }))
                        }(r).filter((function(t) {
                            return t.length <= 4096
                        })).slice(0, 180),
                        i = function(t) {
                            return t.reduce((function(t, e) {
                                var n = t + ("" !== t ? "," : "") + e;
                                return n.length > 8192 ? t : n
                            }), "")
                        }(o);
                    i.length > 0 && n.set(e, te, i)
                }
            }, t.prototype.extract = function(t, e, n) {
                var r = n.get(e, te),
                    o = Array.isArray(r) ? r.join(",") : r;
                if (!o) return t;
                var i = {};
                return 0 === o.length ? t : (o.split(",").forEach((function(t) {
                    var e = ne(t);
                    if (e) {
                        var n = {
                            value: e.value
                        };
                        e.metadata && (n.metadata = e.metadata), i[e.key] = n
                    }
                })), 0 === Object.entries(i).length ? t : qt.setBaggage(t, qt.createBaggage(i)))
            }, t.prototype.fields = function() {
                return [te]
            }, t
        }(),
        oe = function(t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                n = e && t[e],
                r = 0;
            if (n) return n.call(t);
            if (t && "number" == typeof t.length) return {
                next: function() {
                    return t && r >= t.length && (t = void 0), {
                        value: t && t[r++],
                        done: !t
                    }
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        ie = function(t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n) return t;
            var r, o, i = n.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(r = i.next()).done;) s.push(r.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o) throw o.error
                }
            }
            return s
        };

    function se(t) {
        var e, n, r = {};
        if ("object" != typeof t || null == t) return r;
        try {
            for (var o = oe(Object.entries(t)), i = o.next(); !i.done; i = o.next()) {
                var s = ie(i.value, 2),
                    a = s[0],
                    u = s[1];
                ae(a) ? ue(u) ? Array.isArray(u) ? r[a] = u.slice() : r[a] = u : Mt.warn("Invalid attribute value set for key: " + a) : Mt.warn("Invalid attribute key: " + a)
            }
        } catch (t) {
            e = {
                error: t
            }
        } finally {
            try {
                i && !i.done && (n = o.return) && n.call(o)
            } finally {
                if (e) throw e.error
            }
        }
        return r
    }

    function ae(t) {
        return "string" == typeof t && t.length > 0
    }

    function ue(t) {
        return null == t || (Array.isArray(t) ? function(t) {
            var e, n, r;
            try {
                for (var o = oe(t), i = o.next(); !i.done; i = o.next()) {
                    var s = i.value;
                    if (null != s) {
                        if (!r) {
                            if (ce(s)) {
                                r = typeof s;
                                continue
                            }
                            return !1
                        }
                        if (typeof s !== r) return !1
                    }
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    i && !i.done && (n = o.return) && n.call(o)
                } finally {
                    if (e) throw e.error
                }
            }
            return !0
        }(t) : ce(t))
    }

    function ce(t) {
        switch (typeof t) {
            case "number":
            case "boolean":
            case "string":
                return !0
        }
        return !1
    }
    var le, fe = function(t) {
        Mt.error(function(t) {
            return "string" == typeof t ? t : JSON.stringify(function(t) {
                for (var e = {}, n = t; null !== n;) Object.getOwnPropertyNames(n).forEach((function(t) {
                    if (!e[t]) {
                        var r = n[t];
                        r && (e[t] = String(r))
                    }
                })), n = Object.getPrototypeOf(n);
                return e
            }(t))
        }(t))
    };

    function pe(t) {
        try {
            fe(t)
        } catch (t) {}
    }! function(t) {
        t.AlwaysOff = "always_off", t.AlwaysOn = "always_on", t.ParentBasedAlwaysOff = "parentbased_always_off", t.ParentBasedAlwaysOn = "parentbased_always_on", t.ParentBasedTraceIdRatio = "parentbased_traceidratio", t.TraceIdRatio = "traceidratio"
    }(le || (le = {}));
    var he = ",",
        de = ["OTEL_SDK_DISABLED"];

    function ge(t) {
        return de.indexOf(t) > -1
    }
    var ve = ["OTEL_BSP_EXPORT_TIMEOUT", "OTEL_BSP_MAX_EXPORT_BATCH_SIZE", "OTEL_BSP_MAX_QUEUE_SIZE", "OTEL_BSP_SCHEDULE_DELAY", "OTEL_BLRP_EXPORT_TIMEOUT", "OTEL_BLRP_MAX_EXPORT_BATCH_SIZE", "OTEL_BLRP_MAX_QUEUE_SIZE", "OTEL_BLRP_SCHEDULE_DELAY", "OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_ATTRIBUTE_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT", "OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT", "OTEL_SPAN_EVENT_COUNT_LIMIT", "OTEL_SPAN_LINK_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT", "OTEL_EXPORTER_OTLP_TIMEOUT", "OTEL_EXPORTER_OTLP_TRACES_TIMEOUT", "OTEL_EXPORTER_OTLP_METRICS_TIMEOUT", "OTEL_EXPORTER_OTLP_LOGS_TIMEOUT", "OTEL_EXPORTER_JAEGER_AGENT_PORT"];

    function _e(t) {
        return ve.indexOf(t) > -1
    }
    var ye = ["OTEL_NO_PATCH_MODULES", "OTEL_PROPAGATORS"];

    function me(t) {
        return ye.indexOf(t) > -1
    }
    var Te = 1 / 0,
        be = 128,
        Ee = {
            OTEL_SDK_DISABLED: !1,
            CONTAINER_NAME: "",
            ECS_CONTAINER_METADATA_URI_V4: "",
            ECS_CONTAINER_METADATA_URI: "",
            HOSTNAME: "",
            KUBERNETES_SERVICE_HOST: "",
            NAMESPACE: "",
            OTEL_BSP_EXPORT_TIMEOUT: 3e4,
            OTEL_BSP_MAX_EXPORT_BATCH_SIZE: 512,
            OTEL_BSP_MAX_QUEUE_SIZE: 2048,
            OTEL_BSP_SCHEDULE_DELAY: 5e3,
            OTEL_BLRP_EXPORT_TIMEOUT: 3e4,
            OTEL_BLRP_MAX_EXPORT_BATCH_SIZE: 512,
            OTEL_BLRP_MAX_QUEUE_SIZE: 2048,
            OTEL_BLRP_SCHEDULE_DELAY: 5e3,
            OTEL_EXPORTER_JAEGER_AGENT_HOST: "",
            OTEL_EXPORTER_JAEGER_AGENT_PORT: 6832,
            OTEL_EXPORTER_JAEGER_ENDPOINT: "",
            OTEL_EXPORTER_JAEGER_PASSWORD: "",
            OTEL_EXPORTER_JAEGER_USER: "",
            OTEL_EXPORTER_OTLP_ENDPOINT: "",
            OTEL_EXPORTER_OTLP_TRACES_ENDPOINT: "",
            OTEL_EXPORTER_OTLP_METRICS_ENDPOINT: "",
            OTEL_EXPORTER_OTLP_LOGS_ENDPOINT: "",
            OTEL_EXPORTER_OTLP_HEADERS: "",
            OTEL_EXPORTER_OTLP_TRACES_HEADERS: "",
            OTEL_EXPORTER_OTLP_METRICS_HEADERS: "",
            OTEL_EXPORTER_OTLP_LOGS_HEADERS: "",
            OTEL_EXPORTER_OTLP_TIMEOUT: 1e4,
            OTEL_EXPORTER_OTLP_TRACES_TIMEOUT: 1e4,
            OTEL_EXPORTER_OTLP_METRICS_TIMEOUT: 1e4,
            OTEL_EXPORTER_OTLP_LOGS_TIMEOUT: 1e4,
            OTEL_EXPORTER_ZIPKIN_ENDPOINT: "http://localhost:9411/api/v2/spans",
            OTEL_LOG_LEVEL: v.INFO,
            OTEL_NO_PATCH_MODULES: [],
            OTEL_PROPAGATORS: ["tracecontext", "baggage"],
            OTEL_RESOURCE_ATTRIBUTES: "",
            OTEL_SERVICE_NAME: "",
            OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT: Te,
            OTEL_ATTRIBUTE_COUNT_LIMIT: be,
            OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT: Te,
            OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT: be,
            OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT: Te,
            OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT: be,
            OTEL_SPAN_EVENT_COUNT_LIMIT: 128,
            OTEL_SPAN_LINK_COUNT_LIMIT: 128,
            OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT: 128,
            OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT: 128,
            OTEL_TRACES_EXPORTER: "",
            OTEL_TRACES_SAMPLER: le.ParentBasedAlwaysOn,
            OTEL_TRACES_SAMPLER_ARG: "",
            OTEL_LOGS_EXPORTER: "",
            OTEL_EXPORTER_OTLP_INSECURE: "",
            OTEL_EXPORTER_OTLP_TRACES_INSECURE: "",
            OTEL_EXPORTER_OTLP_METRICS_INSECURE: "",
            OTEL_EXPORTER_OTLP_LOGS_INSECURE: "",
            OTEL_EXPORTER_OTLP_CERTIFICATE: "",
            OTEL_EXPORTER_OTLP_TRACES_CERTIFICATE: "",
            OTEL_EXPORTER_OTLP_METRICS_CERTIFICATE: "",
            OTEL_EXPORTER_OTLP_LOGS_CERTIFICATE: "",
            OTEL_EXPORTER_OTLP_COMPRESSION: "",
            OTEL_EXPORTER_OTLP_TRACES_COMPRESSION: "",
            OTEL_EXPORTER_OTLP_METRICS_COMPRESSION: "",
            OTEL_EXPORTER_OTLP_LOGS_COMPRESSION: "",
            OTEL_EXPORTER_OTLP_CLIENT_KEY: "",
            OTEL_EXPORTER_OTLP_TRACES_CLIENT_KEY: "",
            OTEL_EXPORTER_OTLP_METRICS_CLIENT_KEY: "",
            OTEL_EXPORTER_OTLP_LOGS_CLIENT_KEY: "",
            OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE: "",
            OTEL_EXPORTER_OTLP_TRACES_CLIENT_CERTIFICATE: "",
            OTEL_EXPORTER_OTLP_METRICS_CLIENT_CERTIFICATE: "",
            OTEL_EXPORTER_OTLP_LOGS_CLIENT_CERTIFICATE: "",
            OTEL_EXPORTER_OTLP_PROTOCOL: "http/protobuf",
            OTEL_EXPORTER_OTLP_TRACES_PROTOCOL: "http/protobuf",
            OTEL_EXPORTER_OTLP_METRICS_PROTOCOL: "http/protobuf",
            OTEL_EXPORTER_OTLP_LOGS_PROTOCOL: "http/protobuf",
            OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: "cumulative"
        };

    function Se(t, e, n) {
        if (void 0 !== n[t]) {
            var r = String(n[t]);
            e[t] = "true" === r.toLowerCase()
        }
    }

    function Oe(t, e, n, r, o) {
        if (void 0 === r && (r = -1 / 0), void 0 === o && (o = 1 / 0), void 0 !== n[t]) {
            var i = Number(n[t]);
            isNaN(i) || (e[t] = i < r ? r : i > o ? o : i)
        }
    }

    function we(t, e, n, r) {
        void 0 === r && (r = he);
        var o = n[t];
        "string" == typeof o && (e[t] = o.split(r).map((function(t) {
            return t.trim()
        })))
    }
    var Ae = {
        ALL: v.ALL,
        VERBOSE: v.VERBOSE,
        DEBUG: v.DEBUG,
        INFO: v.INFO,
        WARN: v.WARN,
        ERROR: v.ERROR,
        NONE: v.NONE
    };

    function Le(t, e, n) {
        var r = n[t];
        if ("string" == typeof r) {
            var o = Ae[r.toUpperCase()];
            null != o && (e[t] = o)
        }
    }

    function ke(t) {
        var e = {};
        for (var n in Ee) {
            var r = n;
            if ("OTEL_LOG_LEVEL" === r) Le(r, e, t);
            else if (ge(r)) Se(r, e, t);
            else if (_e(r)) Oe(r, e, t);
            else if (me(r)) we(r, e, t);
            else {
                var o = t[r];
                null != o && (e[r] = String(o))
            }
        }
        return e
    }
    var Ie = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : "object" == typeof window ? window : "object" == typeof global ? global : {};

    function Pe() {
        var t = ke(Ie);
        return Object.assign({}, Ee, t)
    }
    var Re, Ce = performance,
        Ne = "exception.type",
        xe = "exception.message",
        je = "telemetry.sdk.name",
        Me = "telemetry.sdk.language",
        De = "telemetry.sdk.version",
        Be = ((Re = {})[je] = "opentelemetry", Re["process.runtime.name"] = "browser", Re[Me] = "webjs", Re[De] = "1.25.1", Re);
    var Ue, We = Math.pow(10, 6),
        ze = Math.pow(10, 9);

    function Fe(t) {
        var e = t / 1e3;
        return [Math.trunc(e), Math.round(t % 1e3 * We)]
    }

    function Ze() {
        var t = Ce.timeOrigin;
        if ("number" != typeof t) {
            var e = Ce;
            t = e.timing && e.timing.fetchStart
        }
        return t
    }

    function Ve(t) {
        return qe(Fe(Ze()), Fe("number" == typeof t ? t : Ce.now()))
    }

    function Ge(t) {
        if (Xe(t)) return t;
        if ("number" == typeof t) return t < Ze() ? Ve(t) : Fe(t);
        if (t instanceof Date) return Fe(t.getTime());
        throw TypeError("Invalid input type")
    }

    function He(t) {
        return t[0] * ze + t[1]
    }

    function Xe(t) {
        return Array.isArray(t) && 2 === t.length && "number" == typeof t[0] && "number" == typeof t[1]
    }

    function $e(t) {
        return Xe(t) || "number" == typeof t || t instanceof Date
    }

    function qe(t, e) {
        var n = [t[0] + e[0], t[1] + e[1]];
        return n[1] >= ze && (n[1] -= ze, n[0] += 1), n
    }! function(t) {
        t[t.SUCCESS = 0] = "SUCCESS", t[t.FAILED = 1] = "FAILED"
    }(Ue || (Ue = {}));
    var Ke = function(t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                n = e && t[e],
                r = 0;
            if (n) return n.call(t);
            if (t && "number" == typeof t.length) return {
                next: function() {
                    return t && r >= t.length && (t = void 0), {
                        value: t && t[r++],
                        done: !t
                    }
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        Ye = function() {
            function t(t) {
                var e;
                void 0 === t && (t = {}), this._propagators = null !== (e = t.propagators) && void 0 !== e ? e : [], this._fields = Array.from(new Set(this._propagators.map((function(t) {
                    return "function" == typeof t.fields ? t.fields() : []
                })).reduce((function(t, e) {
                    return t.concat(e)
                }), [])))
            }
            return t.prototype.inject = function(t, e, n) {
                var r, o;
                try {
                    for (var i = Ke(this._propagators), s = i.next(); !s.done; s = i.next()) {
                        var a = s.value;
                        try {
                            a.inject(t, e, n)
                        } catch (t) {
                            Mt.warn("Failed to inject with " + a.constructor.name + ". Err: " + t.message)
                        }
                    }
                } catch (t) {
                    r = {
                        error: t
                    }
                } finally {
                    try {
                        s && !s.done && (o = i.return) && o.call(i)
                    } finally {
                        if (r) throw r.error
                    }
                }
            }, t.prototype.extract = function(t, e, n) {
                return this._propagators.reduce((function(t, r) {
                    try {
                        return r.extract(t, e, n)
                    } catch (t) {
                        Mt.warn("Failed to inject with " + r.constructor.name + ". Err: " + t.message)
                    }
                    return t
                }), t)
            }, t.prototype.fields = function() {
                return this._fields.slice()
            }, t
        }(),
        Qe = "[_0-9a-z-*/]",
        Je = new RegExp("^(?:" + ("[a-z]" + Qe + "{0,255}") + "|" + ("[a-z0-9]" + Qe + "{0,240}@[a-z]" + Qe + "{0,13}") + ")$"),
        tn = /^[ -~]{0,255}[!-~]$/,
        en = /,|=/;
    var nn = function() {
            function t(t) {
                this._internalState = new Map, t && this._parse(t)
            }
            return t.prototype.set = function(t, e) {
                var n = this._clone();
                return n._internalState.has(t) && n._internalState.delete(t), n._internalState.set(t, e), n
            }, t.prototype.unset = function(t) {
                var e = this._clone();
                return e._internalState.delete(t), e
            }, t.prototype.get = function(t) {
                return this._internalState.get(t)
            }, t.prototype.serialize = function() {
                var t = this;
                return this._keys().reduce((function(e, n) {
                    return e.push(n + "=" + t.get(n)), e
                }), []).join(",")
            }, t.prototype._parse = function(t) {
                t.length > 512 || (this._internalState = t.split(",").reverse().reduce((function(t, e) {
                    var n = e.trim(),
                        r = n.indexOf("=");
                    if (-1 !== r) {
                        var o = n.slice(0, r),
                            i = n.slice(r + 1, e.length);
                        (function(t) {
                            return Je.test(t)
                        })(o) && function(t) {
                            return tn.test(t) && !en.test(t)
                        }(i) && t.set(o, i)
                    }
                    return t
                }), new Map), this._internalState.size > 32 && (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, 32))))
            }, t.prototype._keys = function() {
                return Array.from(this._internalState.keys()).reverse()
            }, t.prototype._clone = function() {
                var e = new t;
                return e._internalState = new Map(this._internalState), e
            }, t
        }(),
        rn = "traceparent",
        on = "tracestate",
        sn = new RegExp("^\\s?((?!ff)[\\da-f]{2})-((?![0]{32})[\\da-f]{32})-((?![0]{16})[\\da-f]{16})-([\\da-f]{2})(-.*)?\\s?$");
    var an, un, cn = function() {
            function t() {}
            return t.prototype.inject = function(t, e, n) {
                var r = Yt.getSpanContext(t);
                if (r && !Jt(t) && Ot(r)) {
                    var o = "00-" + r.traceId + "-" + r.spanId + "-0" + Number(r.traceFlags || C.NONE).toString(16);
                    n.set(e, rn, o), r.traceState && n.set(e, on, r.traceState.serialize())
                }
            }, t.prototype.extract = function(t, e, n) {
                var r = n.get(e, rn);
                if (!r) return t;
                var o = Array.isArray(r) ? r[0] : r;
                if ("string" != typeof o) return t;
                var i = function(t) {
                    var e = sn.exec(t);
                    return e ? "00" === e[1] && e[5] ? null : {
                        traceId: e[2],
                        spanId: e[3],
                        traceFlags: parseInt(e[4], 16)
                    } : null
                }(o);
                if (!i) return t;
                i.isRemote = !0;
                var s = n.get(e, on);
                if (s) {
                    var a = Array.isArray(s) ? s.join(",") : s;
                    i.traceState = new nn("string" == typeof a ? a : void 0)
                }
                return Yt.setSpanContext(t, i)
            }, t.prototype.fields = function() {
                return [rn, on]
            }, t
        }(),
        ln = "[object Object]",
        fn = "[object Null]",
        pn = "[object Undefined]",
        hn = Function.prototype.toString,
        dn = hn.call(Object),
        gn = (an = Object.getPrototypeOf, un = Object, function(t) {
            return an(un(t))
        }),
        vn = Object.prototype,
        _n = vn.hasOwnProperty,
        yn = Symbol ? Symbol.toStringTag : void 0,
        mn = vn.toString;

    function Tn(t) {
        if (! function(t) {
                return null != t && "object" == typeof t
            }(t) || function(t) {
                if (null == t) return void 0 === t ? pn : fn;
                return yn && yn in Object(t) ? function(t) {
                    var e = _n.call(t, yn),
                        n = t[yn],
                        r = !1;
                    try {
                        t[yn] = void 0, r = !0
                    } catch (t) {}
                    var o = mn.call(t);
                    r && (e ? t[yn] = n : delete t[yn]);
                    return o
                }(t) : function(t) {
                    return mn.call(t)
                }(t)
            }(t) !== ln) return !1;
        var e = gn(t);
        if (null === e) return !0;
        var n = _n.call(e, "constructor") && e.constructor;
        return "function" == typeof n && n instanceof n && hn.call(n) === dn
    }
    var bn = 20;

    function En(t) {
        return wn(t) ? t.slice() : t
    }

    function Sn(t, e, n, r) {
        var o;
        if (void 0 === n && (n = 0), !(n > bn)) {
            if (n++, kn(t) || kn(e) || An(e)) o = En(e);
            else if (wn(t)) {
                if (o = t.slice(), wn(e))
                    for (var i = 0, s = e.length; i < s; i++) o.push(En(e[i]));
                else if (Ln(e))
                    for (i = 0, s = (a = Object.keys(e)).length; i < s; i++) {
                        o[u = a[i]] = En(e[u])
                    }
            } else if (Ln(t))
                if (Ln(e)) {
                    if (! function(t, e) {
                            if (!Tn(t) || !Tn(e)) return !1;
                            return !0
                        }(t, e)) return e;
                    o = Object.assign({}, t);
                    var a;
                    for (i = 0, s = (a = Object.keys(e)).length; i < s; i++) {
                        var u, c = e[u = a[i]];
                        if (kn(c)) void 0 === c ? delete o[u] : o[u] = c;
                        else {
                            var l = o[u],
                                f = c;
                            if (On(t, u, r) || On(e, u, r)) delete o[u];
                            else {
                                if (Ln(l) && Ln(f)) {
                                    var p = r.get(l) || [],
                                        h = r.get(f) || [];
                                    p.push({
                                        obj: t,
                                        key: u
                                    }), h.push({
                                        obj: e,
                                        key: u
                                    }), r.set(l, p), r.set(f, h)
                                }
                                o[u] = Sn(o[u], c, n, r)
                            }
                        }
                    }
                } else o = e;
            return o
        }
    }

    function On(t, e, n) {
        for (var r = n.get(t[e]) || [], o = 0, i = r.length; o < i; o++) {
            var s = r[o];
            if (s.key === e && s.obj === t) return !0
        }
        return !1
    }

    function wn(t) {
        return Array.isArray(t)
    }

    function An(t) {
        return "function" == typeof t
    }

    function Ln(t) {
        return !kn(t) && !wn(t) && !An(t) && "object" == typeof t
    }

    function kn(t) {
        return "string" == typeof t || "number" == typeof t || "boolean" == typeof t || void 0 === t || t instanceof Date || t instanceof RegExp || null === t
    }
    var In = function(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
            n = e && t[e],
            r = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length) return {
            next: function() {
                return t && r >= t.length && (t = void 0), {
                    value: t && t[r++],
                    done: !t
                }
            }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
    };

    function Pn(t, e) {
        return "string" == typeof e ? t === e : !!t.match(e)
    }
    var Rn = function() {
            function t() {
                var t = this;
                this._promise = new Promise((function(e, n) {
                    t._resolve = e, t._reject = n
                }))
            }
            return Object.defineProperty(t.prototype, "promise", {
                get: function() {
                    return this._promise
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.resolve = function(t) {
                this._resolve(t)
            }, t.prototype.reject = function(t) {
                this._reject(t)
            }, t
        }(),
        Cn = function(t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n) return t;
            var r, o, i = n.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(r = i.next()).done;) s.push(r.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o) throw o.error
                }
            }
            return s
        },
        Nn = function(t, e, n) {
            if (n || 2 === arguments.length)
                for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
            return t.concat(r || Array.prototype.slice.call(e))
        },
        xn = function() {
            function t(t, e) {
                this._callback = t, this._that = e, this._isCalled = !1, this._deferred = new Rn
            }
            return Object.defineProperty(t.prototype, "isCalled", {
                get: function() {
                    return this._isCalled
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "promise", {
                get: function() {
                    return this._deferred.promise
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.call = function() {
                for (var t, e = this, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                if (!this._isCalled) {
                    this._isCalled = !0;
                    try {
                        Promise.resolve((t = this._callback).call.apply(t, Nn([this._that], Cn(n), !1))).then((function(t) {
                            return e._deferred.resolve(t)
                        }), (function(t) {
                            return e._deferred.reject(t)
                        }))
                    } catch (t) {
                        this._deferred.reject(t)
                    }
                }
                return this._deferred.promise
            }, t
        }();
    class jn {
        constructor() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ve();
            this.instant = t
        }
        static toISOString(t) {
            return e = t.instant, n = "" + "0".repeat(9) + e[1] + "Z", r = n.substr(n.length - 9 - 1), new Date(1e3 * e[0]).toISOString().replace("000Z", r);
            var e, n, r
        }
        static toNanoSeconds(t) {
            return He(t.instant)
        }
    }
    var Mn, Dn, Bn, Un, Wn, zn = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        Fn = {
            exports: {}
        },
        Zn = {
            exports: {}
        };

    function Vn() {
        return Mn || (Mn = 1, Zn.exports = function() {
            function t(t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            }

            function e(t) {
                return t.charAt(0).toUpperCase() + t.substring(1)
            }

            function n(t) {
                return function() {
                    return this[t]
                }
            }
            var r = ["isConstructor", "isEval", "isNative", "isToplevel"],
                o = ["columnNumber", "lineNumber"],
                i = ["fileName", "functionName", "source"],
                s = ["args"],
                a = ["evalOrigin"],
                u = r.concat(o, i, s, a);

            function c(t) {
                if (t)
                    for (var n = 0; n < u.length; n++) void 0 !== t[u[n]] && this["set" + e(u[n])](t[u[n]])
            }
            c.prototype = {
                getArgs: function() {
                    return this.args
                },
                setArgs: function(t) {
                    if ("[object Array]" !== Object.prototype.toString.call(t)) throw new TypeError("Args must be an Array");
                    this.args = t
                },
                getEvalOrigin: function() {
                    return this.evalOrigin
                },
                setEvalOrigin: function(t) {
                    if (t instanceof c) this.evalOrigin = t;
                    else {
                        if (!(t instanceof Object)) throw new TypeError("Eval Origin must be an Object or StackFrame");
                        this.evalOrigin = new c(t)
                    }
                },
                toString: function() {
                    var t = this.getFileName() || "",
                        e = this.getLineNumber() || "",
                        n = this.getColumnNumber() || "",
                        r = this.getFunctionName() || "";
                    return this.getIsEval() ? t ? "[eval] (" + t + ":" + e + ":" + n + ")" : "[eval]:" + e + ":" + n : r ? r + " (" + t + ":" + e + ":" + n + ")" : t + ":" + e + ":" + n
                }
            }, c.fromString = function(t) {
                var e = t.indexOf("("),
                    n = t.lastIndexOf(")"),
                    r = t.substring(0, e),
                    o = t.substring(e + 1, n).split(","),
                    i = t.substring(n + 1);
                if (0 === i.indexOf("@")) var s = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(i, ""),
                    a = s[1],
                    u = s[2],
                    l = s[3];
                return new c({
                    functionName: r,
                    args: o || void 0,
                    fileName: a,
                    lineNumber: u || void 0,
                    columnNumber: l || void 0
                })
            };
            for (var l = 0; l < r.length; l++) c.prototype["get" + e(r[l])] = n(r[l]), c.prototype["set" + e(r[l])] = function(t) {
                return function(e) {
                    this[t] = Boolean(e)
                }
            }(r[l]);
            for (var f = 0; f < o.length; f++) c.prototype["get" + e(o[f])] = n(o[f]), c.prototype["set" + e(o[f])] = function(e) {
                return function(n) {
                    if (!t(n)) throw new TypeError(e + " must be a Number");
                    this[e] = Number(n)
                }
            }(o[f]);
            for (var p = 0; p < i.length; p++) c.prototype["get" + e(i[p])] = n(i[p]), c.prototype["set" + e(i[p])] = function(t) {
                return function(e) {
                    this[t] = String(e)
                }
            }(i[p]);
            return c
        }()), Zn.exports
    }
    Fn.exports = (Dn = Vn(), Bn = /(^|@)\S+:\d+/, Un = /^\s*at .*(\S+:\d+|\(native\))/m, Wn = /^(eval@)?(\[native code])?$/, {
        parse: function(t) {
            if (void 0 !== t.stacktrace || void 0 !== t["opera#sourceloc"]) return this.parseOpera(t);
            if (t.stack && t.stack.match(Un)) return this.parseV8OrIE(t);
            if (t.stack) return this.parseFFOrSafari(t);
            throw new Error("Cannot parse given Error object")
        },
        extractLocation: function(t) {
            if (-1 === t.indexOf(":")) return [t];
            var e = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(t.replace(/[()]/g, ""));
            return [e[1], e[2] || void 0, e[3] || void 0]
        },
        parseV8OrIE: function(t) {
            return t.stack.split("\n").filter((function(t) {
                return !!t.match(Un)
            }), this).map((function(t) {
                t.indexOf("(eval ") > -1 && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
                var e = t.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, ""),
                    n = e.match(/ (\(.+\)$)/);
                e = n ? e.replace(n[0], "") : e;
                var r = this.extractLocation(n ? n[1] : e),
                    o = n && e || void 0,
                    i = ["eval", "<anonymous>"].indexOf(r[0]) > -1 ? void 0 : r[0];
                return new Dn({
                    functionName: o,
                    fileName: i,
                    lineNumber: r[1],
                    columnNumber: r[2],
                    source: t
                })
            }), this)
        },
        parseFFOrSafari: function(t) {
            return t.stack.split("\n").filter((function(t) {
                return !t.match(Wn)
            }), this).map((function(t) {
                if (t.indexOf(" > eval") > -1 && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === t.indexOf("@") && -1 === t.indexOf(":")) return new Dn({
                    functionName: t
                });
                var e = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                    n = t.match(e),
                    r = n && n[1] ? n[1] : void 0,
                    o = this.extractLocation(t.replace(e, ""));
                return new Dn({
                    functionName: r,
                    fileName: o[0],
                    lineNumber: o[1],
                    columnNumber: o[2],
                    source: t
                })
            }), this)
        },
        parseOpera: function(t) {
            return !t.stacktrace || t.message.indexOf("\n") > -1 && t.message.split("\n").length > t.stacktrace.split("\n").length ? this.parseOpera9(t) : t.stack ? this.parseOpera11(t) : this.parseOpera10(t)
        },
        parseOpera9: function(t) {
            for (var e = /Line (\d+).*script (?:in )?(\S+)/i, n = t.message.split("\n"), r = [], o = 2, i = n.length; o < i; o += 2) {
                var s = e.exec(n[o]);
                s && r.push(new Dn({
                    fileName: s[2],
                    lineNumber: s[1],
                    source: n[o]
                }))
            }
            return r
        },
        parseOpera10: function(t) {
            for (var e = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, n = t.stacktrace.split("\n"), r = [], o = 0, i = n.length; o < i; o += 2) {
                var s = e.exec(n[o]);
                s && r.push(new Dn({
                    functionName: s[3] || void 0,
                    fileName: s[2],
                    lineNumber: s[1],
                    source: n[o]
                }))
            }
            return r
        },
        parseOpera11: function(t) {
            return t.stack.split("\n").filter((function(t) {
                return !!t.match(Bn) && !t.match(/^Error created at/)
            }), this).map((function(t) {
                var e, n = t.split("@"),
                    r = this.extractLocation(n.pop()),
                    o = n.shift() || "",
                    i = o.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0;
                o.match(/\(([^)]*)\)/) && (e = o.replace(/^[^(]+\(([^)]*)\)$/, "$1"));
                var s = void 0 === e || "[arguments not available]" === e ? void 0 : e.split(",");
                return new Dn({
                    functionName: i,
                    args: s,
                    fileName: r[0],
                    lineNumber: r[1],
                    columnNumber: r[2],
                    source: t
                })
            }), this)
        }
    });
    var Gn, Hn, Xn, $n, qn, Kn, Yn, Qn = Fn.exports;
    class Jn {
        constructor(t) {
            this.name = t.name, this.message = t.message, t.stack && (this.stack = o(Gn, Gn, "m", Hn).call(Gn, t))
        }
    }
    Gn = Jn, Hn = function(t) {
        const e = Qn.parse(t),
            n = t,
            r = (null == n ? void 0 : n.extraStack) ? `ExtraStack: ${n.extraStack}` : "",
            o = e.map((t => t.source)).join("\n");
        return `${t.name}: ${t.message}\n${o}\n${r}`
    };
    class tr {
        constructor(t) {
            let {
                type: e,
                category: n,
                message: r,
                error: o,
                visibility: i,
                timestamp: s = new jn,
                span: a,
                errorCode: u,
                attributes: c
            } = t;
            this.type = e, this.category = n, this.message = r, o && (this.error = new Jn(o)), this.visibility = i, this.timestamp = s, this.span = a, this.errorCode = u, this.attributes = c
        }
    }
    t.Log = tr;
    class er {
        constructor() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Map;
            Xn.add(this), $n.set(this, void 0), i(this, $n, t, "f")
        }
        closeCircuit(t) {
            o(this, $n, "f").delete(t)
        }
        run(t, e) {
            return r(this, void 0, void 0, (function*() {
                const n = o(this, $n, "f").get(t);
                return void 0 === n ? o(this, Xn, "m", Kn).call(this, t, e) : n.iterationsUntilRetry > 0 ? (n.iterationsUntilRetry--, 2) : o(this, Xn, "m", Yn).call(this, t, n, e)
            }))
        }
    }
    $n = new WeakMap, Xn = new WeakSet, qn = function(t) {
        o(this, $n, "f").set(t, {
            retriesFailed: 0,
            iterationsUntilRetry: 5
        })
    }, Kn = function(t, e) {
        return r(this, void 0, void 0, (function*() {
            try {
                return yield e(), 0
            } catch (e) {
                return o(this, Xn, "m", qn).call(this, t), console.debug(`Circuit breaker ${t} was opened: ${e}`), 1
            }
        }))
    }, Yn = function(t, e, n) {
        return r(this, void 0, void 0, (function*() {
            try {
                return yield n(), this.closeCircuit(t), console.debug(`Circuit breaker ${t} was closed`), 0
            } catch (t) {
                return e.retriesFailed++, e.iterationsUntilRetry = Math.min(5 * e.retriesFailed, 10), 1
            }
        }))
    };
    const nr = new Error("request for lock canceled");
    var rr = function(t, e, n, r) {
        return new(n || (n = Promise))((function(o, i) {
            function s(t) {
                try {
                    u(r.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function a(t) {
                try {
                    u(r.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                var e;
                t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                    t(e)
                }))).then(s, a)
            }
            u((r = r.apply(t, e || [])).next())
        }))
    };
    class or {
        constructor(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nr;
            this._value = t, this._cancelError = e, this._queue = [], this._weightedWaiters = []
        }
        acquire() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            if (t <= 0) throw new Error(`invalid weight ${t}: must be positive`);
            return new Promise(((n, r) => {
                const o = {
                        resolve: n,
                        reject: r,
                        weight: t,
                        priority: e
                    },
                    i = ir(this._queue, (t => e <= t.priority)); - 1 === i && t <= this._value ? this._dispatchItem(o) : this._queue.splice(i + 1, 0, o)
            }))
        }
        runExclusive(t) {
            return rr(this, arguments, void 0, (function(t) {
                var e = this;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                return function*() {
                    const [o, i] = yield e.acquire(n, r);
                    try {
                        return yield t(o)
                    } finally {
                        i()
                    }
                }()
            }))
        }
        waitForUnlock() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            if (t <= 0) throw new Error(`invalid weight ${t}: must be positive`);
            return this._couldLockImmediately(t, e) ? Promise.resolve() : new Promise((n => {
                this._weightedWaiters[t - 1] || (this._weightedWaiters[t - 1] = []),
                    function(t, e) {
                        const n = ir(t, (t => e.priority <= t.priority));
                        t.splice(n + 1, 0, e)
                    }(this._weightedWaiters[t - 1], {
                        resolve: n,
                        priority: e
                    })
            }))
        }
        isLocked() {
            return this._value <= 0
        }
        getValue() {
            return this._value
        }
        setValue(t) {
            this._value = t, this._dispatchQueue()
        }
        release() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (t <= 0) throw new Error(`invalid weight ${t}: must be positive`);
            this._value += t, this._dispatchQueue()
        }
        cancel() {
            this._queue.forEach((t => t.reject(this._cancelError))), this._queue = []
        }
        _dispatchQueue() {
            for (this._drainUnlockWaiters(); this._queue.length > 0 && this._queue[0].weight <= this._value;) this._dispatchItem(this._queue.shift()), this._drainUnlockWaiters()
        }
        _dispatchItem(t) {
            const e = this._value;
            this._value -= t.weight, t.resolve([e, this._newReleaser(t.weight)])
        }
        _newReleaser(t) {
            let e = !1;
            return () => {
                e || (e = !0, this.release(t))
            }
        }
        _drainUnlockWaiters() {
            if (0 === this._queue.length)
                for (let t = this._value; t > 0; t--) {
                    const e = this._weightedWaiters[t - 1];
                    e && (e.forEach((t => t.resolve())), this._weightedWaiters[t - 1] = [])
                } else {
                    const t = this._queue[0].priority;
                    for (let e = this._value; e > 0; e--) {
                        const n = this._weightedWaiters[e - 1];
                        if (!n) continue;
                        const r = n.findIndex((e => e.priority <= t));
                        (-1 === r ? n : n.splice(0, r)).forEach((t => t.resolve()))
                    }
                }
        }
        _couldLockImmediately(t, e) {
            return (0 === this._queue.length || this._queue[0].priority < e) && t <= this._value
        }
    }

    function ir(t, e) {
        for (let n = t.length - 1; n >= 0; n--)
            if (e(t[n])) return n;
        return -1
    }
    var sr, ar = function(t, e, n, r) {
        return new(n || (n = Promise))((function(o, i) {
            function s(t) {
                try {
                    u(r.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function a(t) {
                try {
                    u(r.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                var e;
                t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                    t(e)
                }))).then(s, a)
            }
            u((r = r.apply(t, e || [])).next())
        }))
    };
    class ur {
        constructor(t) {
            this._semaphore = new or(1, t)
        }
        acquire() {
            return ar(this, arguments, void 0, (function() {
                var t = this;
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return function*() {
                    const [, n] = yield t._semaphore.acquire(1, e);
                    return n
                }()
            }))
        }
        runExclusive(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return this._semaphore.runExclusive((() => t()), 1, e)
        }
        isLocked() {
            return this._semaphore.isLocked()
        }
        waitForUnlock() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return this._semaphore.waitForUnlock(1, t)
        }
        release() {
            this._semaphore.isLocked() && this._semaphore.release()
        }
        cancel() {
            return this._semaphore.cancel()
        }
    }! function(t) {
        t[t.Debug = 1] = "Debug", t[t.Info = 2] = "Info", t[t.Warning = 3] = "Warning", t[t.Error = 4] = "Error", t[t.Trace = 5] = "Trace"
    }(sr || (sr = {}));
    const cr = {
        Debug: sr.Debug,
        Info: sr.Info,
        Warning: sr.Warning,
        Error: sr.Error,
        Trace: sr.Trace
    };
    var lr = t.LogType = sr;
    class fr {
        constructor(t, e, n, r) {
            this.logId = t, this.log = e, this.logType = n, this.transportId = r
        }
    }
    const pr = "logger-offline-db",
        hr = "byTransportId",
        dr = "transportId",
        gr = (t, e) => e.some((e => t instanceof e));
    let vr, _r;
    const yr = new WeakMap,
        mr = new WeakMap,
        Tr = new WeakMap,
        br = new WeakMap,
        Er = new WeakMap;
    let Sr = {
        get(t, e, n) {
            if (t instanceof IDBTransaction) {
                if ("done" === e) return mr.get(t);
                if ("objectStoreNames" === e) return t.objectStoreNames || Tr.get(t);
                if ("store" === e) return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
            }
            return Ar(t[e])
        },
        set: (t, e, n) => (t[e] = n, !0),
        has: (t, e) => t instanceof IDBTransaction && ("done" === e || "store" === e) || e in t
    };

    function Or(t) {
        return t !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (_r || (_r = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(t) ? function() {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return t.apply(Lr(this), n), Ar(yr.get(this))
        } : function() {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return Ar(t.apply(Lr(this), n))
        } : function(e) {
            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
            const i = t.call(Lr(this), e, ...r);
            return Tr.set(i, e.sort ? e.sort() : [e]), Ar(i)
        }
    }

    function wr(t) {
        return "function" == typeof t ? Or(t) : (t instanceof IDBTransaction && function(t) {
            if (mr.has(t)) return;
            const e = new Promise(((e, n) => {
                const r = () => {
                        t.removeEventListener("complete", o), t.removeEventListener("error", i), t.removeEventListener("abort", i)
                    },
                    o = () => {
                        e(), r()
                    },
                    i = () => {
                        n(t.error || new DOMException("AbortError", "AbortError")), r()
                    };
                t.addEventListener("complete", o), t.addEventListener("error", i), t.addEventListener("abort", i)
            }));
            mr.set(t, e)
        }(t), gr(t, vr || (vr = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])) ? new Proxy(t, Sr) : t)
    }

    function Ar(t) {
        if (t instanceof IDBRequest) return function(t) {
            const e = new Promise(((e, n) => {
                const r = () => {
                        t.removeEventListener("success", o), t.removeEventListener("error", i)
                    },
                    o = () => {
                        e(Ar(t.result)), r()
                    },
                    i = () => {
                        n(t.error), r()
                    };
                t.addEventListener("success", o), t.addEventListener("error", i)
            }));
            return e.then((e => {
                e instanceof IDBCursor && yr.set(e, t)
            })).catch((() => {})), Er.set(e, t), e
        }(t);
        if (br.has(t)) return br.get(t);
        const e = wr(t);
        return e !== t && (br.set(t, e), Er.set(e, t)), e
    }
    const Lr = t => Er.get(t);
    const kr = ["get", "getKey", "getAll", "getAllKeys", "count"],
        Ir = ["put", "add", "delete", "clear"],
        Pr = new Map;

    function Rr(t, e) {
        if (!(t instanceof IDBDatabase) || e in t || "string" != typeof e) return;
        if (Pr.get(e)) return Pr.get(e);
        const n = e.replace(/FromIndex$/, ""),
            r = e !== n,
            o = Ir.includes(n);
        if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !o && !kr.includes(n)) return;
        const i = async function(t) {
            const e = this.transaction(t, o ? "readwrite" : "readonly");
            let i = e.store;
            for (var s = arguments.length, a = new Array(s > 1 ? s - 1 : 0), u = 1; u < s; u++) a[u - 1] = arguments[u];
            return r && (i = i.index(a.shift())), (await Promise.all([i[n](...a), o && e.done]))[0]
        };
        return Pr.set(e, i), i
    }
    var Cr, Nr, xr, jr, Mr, Dr, Br, Ur, Wr;
    Sr = (t => ({
        ...t,
        get: (e, n, r) => Rr(e, n) || t.get(e, n, r),
        has: (e, n) => !!Rr(e, n) || t.has(e, n)
    }))(Sr);
    const zr = 100,
        Fr = "next";
    class Zr {
        constructor(t) {
            let {
                dbName: e,
                tableName: n,
                version: r,
                indices: o,
                cursorToRecord: s,
                propertyKey: a
            } = t;
            Cr.add(this), Nr.set(this, void 0), xr.set(this, void 0), jr.set(this, void 0), Mr.set(this, void 0), Dr.set(this, void 0), Br.set(this, void 0), i(this, Nr, e, "f"), i(this, xr, n, "f"), i(this, Mr, r, "f"), i(this, Dr, o, "f"), i(this, Br, s, "f"), i(this, jr, a, "f")
        }
        open() {
            return r(this, void 0, void 0, (function*() {
                const t = o(this, xr, "f"),
                    e = o(this, Dr, "f"),
                    n = {
                        keyPath: o(this, jr, "f"),
                        autoIncrement: !o(this, jr, "f")
                    };
                return function(t, e) {
                    let {
                        blocked: n,
                        upgrade: r,
                        blocking: o,
                        terminated: i
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    const s = indexedDB.open(t, e),
                        a = Ar(s);
                    return r && s.addEventListener("upgradeneeded", (t => {
                        r(Ar(s.result), t.oldVersion, t.newVersion, Ar(s.transaction), t)
                    })), n && s.addEventListener("blocked", (t => n(t.oldVersion, t.newVersion, t))), a.then((t => {
                        i && t.addEventListener("close", (() => i())), o && t.addEventListener("versionchange", (t => o(t.oldVersion, t.newVersion, t)))
                    })).catch((() => {})), a
                }(o(this, Nr, "f"), o(this, Mr, "f"), {
                    upgrade(r, o) {
                        if (o < 1) {
                            const o = r.createObjectStore(t, n);
                            for (const t of e) o.createIndex(t.name, t.field)
                        }
                    }
                })
            }))
        }
        getAll() {
            return r(this, arguments, void 0, (function() {
                var t = this;
                let {
                    maxRecords: e = zr,
                    sortAsc: n = !0
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return function*() {
                    const r = yield t.open();
                    try {
                        const i = r.transaction(o(t, xr, "f")).objectStore(o(t, xr, "f"));
                        return yield o(t, Cr, "m", Ur).call(t, yield i.openCursor(null, n ? Fr : "prev"), e)
                    } finally {
                        r.close()
                    }
                }()
            }))
        }
        getByIndex(t, e) {
            return r(this, arguments, void 0, (function(t, e) {
                var n = this;
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zr,
                    i = arguments.length > 3 ? arguments[3] : void 0;
                return function*() {
                    const s = yield n.open();
                    try {
                        const a = s.transaction(o(n, xr, "f")).objectStore(o(n, xr, "f"));
                        return yield o(n, Cr, "m", Ur).call(n, yield a.index(t).openCursor(e), r, i)
                    } finally {
                        s.close()
                    }
                }()
            }))
        }
        put(t) {
            return r(this, void 0, void 0, (function*() {
                const e = yield this.open();
                try {
                    const n = e.transaction(o(this, xr, "f"), "readwrite").objectStore(o(this, xr, "f"));
                    for (const e of t) yield n.put(e)
                } finally {
                    e.close()
                }
            }))
        }
        count() {
            return r(this, void 0, void 0, (function*() {
                const t = yield this.open();
                try {
                    return yield t.count(o(this, xr, "f"))
                } finally {
                    t.close()
                }
            }))
        }
        delete(t) {
            return r(this, void 0, void 0, (function*() {
                const e = yield this.open();
                try {
                    yield e.delete(o(this, xr, "f"), t)
                } finally {
                    e.close()
                }
            }))
        }
        deleteMultiple(t) {
            return r(this, void 0, void 0, (function*() {
                const e = yield this.open();
                try {
                    const n = t.map((t => e.delete(o(this, xr, "f"), t)));
                    yield Promise.all(n)
                } finally {
                    e.close()
                }
            }))
        }
        deleteByIndex(t, e) {
            return r(this, arguments, void 0, (function(t, e) {
                var n = this;
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zr;
                return function*() {
                    const i = yield n.open();
                    try {
                        const s = i.transaction(o(n, xr, "f"), "readwrite").objectStore(o(n, xr, "f"));
                        return yield o(n, Cr, "m", Wr).call(n, yield s.index(t).openCursor(e), r)
                    } finally {
                        i.close()
                    }
                }()
            }))
        }
        deleteRecords() {
            return r(this, arguments, void 0, (function() {
                var t = this;
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zr;
                return function*() {
                    const n = yield t.open();
                    try {
                        const r = n.transaction(o(t, xr, "f"), "readwrite").objectStore(o(t, xr, "f"));
                        return yield o(t, Cr, "m", Wr).call(t, yield r.openCursor(null, Fr), e)
                    } finally {
                        n.close()
                    }
                }()
            }))
        }
    }
    Nr = new WeakMap, xr = new WeakMap, jr = new WeakMap, Mr = new WeakMap, Dr = new WeakMap, Br = new WeakMap, Cr = new WeakSet, Ur = function(t) {
        return r(this, arguments, void 0, (function(t) {
            var e = this;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zr,
                r = arguments.length > 2 ? arguments[2] : void 0;
            return function*() {
                const i = [];
                for (; t && i.length < n;) {
                    const n = o(e, Br, "f").call(e, t);
                    r && !r(n) || i.push(n), t = yield t.continue()
                }
                return i
            }()
        }))
    }, Wr = function(t, e) {
        return r(this, void 0, void 0, (function*() {
            let n = 0;
            for (; t && n < e;) yield t.delete(), n++, t = yield t.continue();
            return n
        }))
    };
    class Vr extends Zr {
        constructor() {
            super({
                dbName: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pr,
                tableName: "logs",
                cursorToRecord: t => new fr(t.primaryKey, t.value.log, t.value.logType, t.value.transportId),
                indices: [{
                    name: hr,
                    field: dr
                }, {
                    name: "byLogType",
                    field: "logType"
                }],
                version: 1
            })
        }
        getByTransportId(t, e) {
            return r(this, void 0, void 0, (function*() {
                return this.getByIndex("byTransportId", t, e)
            }))
        }
        getByLogType(t, e) {
            return r(this, void 0, void 0, (function*() {
                return this.getByIndex("byLogType", t, e)
            }))
        }
        putLog(t, e) {
            return r(this, void 0, void 0, (function*() {
                return this.put([{
                    log: t,
                    logType: t.type,
                    transportId: e
                }])
            }))
        }
        deleteByLogType(t, e) {
            return r(this, void 0, void 0, (function*() {
                return this.deleteByIndex("byLogType", t, e)
            }))
        }
    }
    var Gr;
    class Hr {
        constructor(t) {
            let {
                databaseName: e,
                database: n = new Vr(e)
            } = t;
            Gr.set(this, void 0), i(this, Gr, n, "f")
        }
        readLogs(t) {
            return r(this, void 0, void 0, (function*() {
                return o(this, Gr, "f").getAll({
                    sortAsc: !0,
                    maxRecords: t
                })
            }))
        }
        readLogsByTransport(t, e) {
            return r(this, void 0, void 0, (function*() {
                return o(this, Gr, "f").getByTransportId(t, e)
            }))
        }
        removeLogs(t) {
            return r(this, void 0, void 0, (function*() {
                return o(this, Gr, "f").deleteMultiple(t)
            }))
        }
        insertLog(t, e) {
            return r(this, void 0, void 0, (function*() {
                return o(this, Gr, "f").putLog(t, e)
            }))
        }
        countLogs() {
            return r(this, void 0, void 0, (function*() {
                return o(this, Gr, "f").count()
            }))
        }
        isFull() {
            return r(this, void 0, void 0, (function*() {
                return (yield o(this, Gr, "f").count()) >= 1e4
            }))
        }
        discardLogs() {
            return r(this, arguments, void 0, (function() {
                var t = this;
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 200;
                return function*() {
                    const n = Object.keys(lr).filter((t => isNaN(Number(t))));
                    let r = e;
                    for (const e of n) {
                        const n = cr[e];
                        if (r -= (yield o(t, Gr, "f").deleteByLogType(n, r)), r <= 0) break
                    }
                    return r
                }()
            }))
        }
    }
    Gr = new WeakMap;
    var Xr, $r, qr = {
        exports: {}
    };
    ! function(t, e) {
        ! function(t) {
            function e(t, e, n, r) {
                function o(t) {
                    return t instanceof n ? t : new n((function(e) {
                        e(t)
                    }))
                }
                return new(n || (n = Promise))((function(n, i) {
                    function s(t) {
                        try {
                            u(r.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function a(t) {
                        try {
                            u(r.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function u(t) {
                        t.done ? n(t.value) : o(t.value).then(s, a)
                    }
                    u((r = r.apply(t, e || [])).next())
                }))
            }

            function n(t, e, n, r) {
                if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof e ? t !== e || !r : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? r : "a" === n ? r.call(t) : r ? r.value : e.get(t)
            }

            function r(t, e, n, r, o) {
                if ("m" === r) throw new TypeError("Private method is not writable");
                if ("a" === r && !o) throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === r ? o.call(t, n) : o ? o.value = n : e.set(t, n), n
            }
            var o;
            t.AggregationAttributes = void 0, (o = t.AggregationAttributes || (t.AggregationAttributes = {})).IsAggregateProxy = "outsystems.aggregation.proxy", o.AggregationSize = "outsystems.aggregation.size", o.IsOutlier = "outsystems.aggregation.outlier", o.AverageDuration = "outsystems.aggregation.duration.average", o.MaxDuration = "outsystems.aggregation.duration.max", o.MinDuration = "outsystems.aggregation.duration.min", o.IsNonAggregable = "osinternal.spanIsNonAggregable", o.ChildrenNames = "osinternal.childrenNames", o.functionKey = "outsystems.function.key";
            const i = "NonAggregable";

            function s(t, e) {
                return t < e ? -1 : e < t ? 1 : 0
            }

            function a(e) {
                return e.attributes[t.AggregationAttributes.functionKey]
            }

            function u(e, n, r) {
                var o;
                const a = e.name,
                    u = null == r ? void 0 : r(e),
                    c = null !== (o = e.attributes[t.AggregationAttributes.ChildrenNames]) && void 0 !== o ? o : [];
                return c.sort(s), `${e.attributes[t.AggregationAttributes.IsNonAggregable]?`${i}.`:""}${n}.${a}.${u}(${c.join(",")})`
            }

            function c(e, n) {
                return !(e.attributes[t.AggregationAttributes.IsNonAggregable] || n.some((e => e.attributes[t.AggregationAttributes.IsNonAggregable])))
            }
            const l = {
                absolute: (t, e) => {
                    let {
                        min: n,
                        max: r
                    } = t;
                    return "number" == typeof n && e < n || "number" == typeof r && e > r
                },
                relative: (t, e, n) => {
                    let {
                        min: r,
                        max: o
                    } = t;
                    return l.absolute({
                        min: "number" == typeof r ? n + r : void 0,
                        max: "number" == typeof o ? n + o : void 0
                    }, e)
                },
                ratio: (t, e, n) => {
                    let {
                        lower: r,
                        upper: o,
                        max: i,
                        min: s
                    } = t;
                    return l.relative({
                        min: "number" == typeof r ? Math.min(n * r, null != s ? s : 1 / 0) : void 0,
                        max: "number" == typeof o ? Math.max(n * o, null != i ? i : -1 / 0) : void 0
                    }, e, n)
                }
            };

            function f(t, e, n) {
                return l[t.type](t, e, n)
            }
            var p, h, d, g, v, _, y, m, T, b, E;
            class S {
                constructor(t) {
                    p.set(this, void 0), r(this, p, t, "f")
                }
                isOutlier(t, e) {
                    for (const [r, o] of Object.entries(n(this, p, "f"))) {
                        const n = t.attributes[r],
                            i = e.attributes[r];
                        if ((void 0 !== n || void 0 !== i) && (void 0 === n || void 0 === i || f(o, n, i))) return !0
                    }
                    return !1
                }
            }
            p = new WeakMap;
            class O {
                constructor(e) {
                    let {
                        storage: n,
                        outlierDetector: o = new S({
                            [t.AggregationAttributes.AverageDuration]: {
                                type: "ratio",
                                upper: .1,
                                max: 5e7
                            }
                        }),
                        getSpanObjectId: i = a
                    } = e;
                    h.add(this), d.set(this, void 0), g.set(this, void 0), v.set(this, void 0), r(this, d, n, "f"), r(this, g, o, "f"), r(this, v, i, "f")
                }
                aggregate(t, r) {
                    return e(this, void 0, void 0, (function*() {
                        const e = yield n(this, d, "f").readSpansByParentId(t.spanId), o = n(this, h, "m", m).call(this, t);
                        if (!c(o, e)) return void(yield n(this, d, "f").insertSpans([n(this, h, "m", b).call(this, o)], r));
                        const i = yield n(this, h, "m", _).call(this, o, r);
                        if (i)
                            if (n(this, g, "f").isOutlier(o, i)) yield n(this, d, "f").insertSpans([n(this, h, "m", T).call(this, o)], r);
                            else {
                                const o = n(this, h, "m", y).call(this, t, i),
                                    s = n(this, h, "m", E).call(this, e, o);
                                yield n(this, d, "f").insertSpans([o, ...s], r)
                            }
                        else yield n(this, d, "f").insertSpans([o], r)
                    }))
                }
            }
            d = new WeakMap, g = new WeakMap, v = new WeakMap, h = new WeakSet, _ = function(t, r) {
                return e(this, void 0, void 0, (function*() {
                    const e = u(t, r, n(this, v, "f")),
                        [o] = yield n(this, d, "f").readSpansByAggregateSignature(e);
                    return o
                }))
            }, y = function(e, n) {
                var r;
                const o = null !== (r = n.attributes[t.AggregationAttributes.AggregationSize]) && void 0 !== r ? r : 1,
                    i = n.attributes[t.AggregationAttributes.AverageDuration],
                    s = n.attributes[t.AggregationAttributes.MaxDuration],
                    a = n.attributes[t.AggregationAttributes.MinDuration],
                    u = e.endTimeUnixNano - e.startTimeUnixNano;
                return Object.assign(Object.assign({}, n), {
                    attributes: Object.assign(Object.assign({}, n.attributes), {
                        [t.AggregationAttributes.IsAggregateProxy]: !0,
                        [t.AggregationAttributes.AggregationSize]: o + 1,
                        [t.AggregationAttributes.AverageDuration]: (i * o + u) / (o + 1),
                        [t.AggregationAttributes.MaxDuration]: Math.max(s, u),
                        [t.AggregationAttributes.MinDuration]: Math.min(a, u)
                    }),
                    parentSpanId: n.parentSpanId === e.spanId ? e.parentSpanId : n.parentSpanId
                })
            }, m = function(e) {
                const n = e.endTimeUnixNano - e.startTimeUnixNano;
                return Object.assign(Object.assign({}, e), {
                    attributes: Object.assign(Object.assign({}, e.attributes), {
                        [t.AggregationAttributes.IsAggregateProxy]: !1,
                        [t.AggregationAttributes.AverageDuration]: n,
                        [t.AggregationAttributes.MaxDuration]: n,
                        [t.AggregationAttributes.MinDuration]: n
                    })
                })
            }, T = function(e) {
                return Object.assign(Object.assign({}, e), {
                    attributes: Object.assign(Object.assign({}, e.attributes), {
                        [t.AggregationAttributes.IsOutlier]: !0,
                        [t.AggregationAttributes.IsNonAggregable]: !0
                    })
                })
            }, b = function(e) {
                return Object.assign(Object.assign({}, e), {
                    attributes: Object.assign(Object.assign({}, e.attributes), {
                        [t.AggregationAttributes.IsNonAggregable]: !0
                    })
                })
            }, E = function(t, e) {
                return t.flatMap((t => t.spanId !== e.spanId ? [Object.assign(Object.assign({}, t), {
                    parentSpanId: e.spanId
                })] : []))
            };
            const w = "1.3.1";
            t.SpanAggregator = O, t.ThresholdOutlierDetector = S, t.Version = w, t.makeAggregateSignature = u, Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }(e)
    }(0, qr.exports);
    class Kr {
        constructor(t) {
            let {
                spanId: e,
                span: n,
                transportId: r,
                aggregateSignature: o
            } = t;
            this.spanId = e, this.span = n, this.transportId = r, this.parentId = n.parentSpanId, this.aggregateSignature = null != o ? o : ""
        }
    }
    class Yr extends Zr {
        constructor() {
            super({
                dbName: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pr,
                tableName: "spans",
                version: 1,
                propertyKey: arguments.length > 1 ? arguments[1] : void 0,
                cursorToRecord: t => new Kr({
                    spanId: t.primaryKey,
                    span: t.value.span,
                    transportId: t.value.transportId,
                    aggregateSignature: t.value.aggregateSignature
                }),
                indices: [{
                    name: hr,
                    field: dr
                }, {
                    name: "byAggregateSignature",
                    field: "aggregateSignature"
                }, {
                    name: "byParentId",
                    field: "parentId"
                }]
            }), Xr.add(this)
        }
        getByAggregateSignature(t, e) {
            return this.getByIndex("byAggregateSignature", t, e)
        }
        getByParentId(t, e) {
            return this.getByIndex("byParentId", t, e)
        }
        getByTransportId(t, e) {
            return this.getByIndex("byTransportId", t, e)
        }
        getTopLevelByTransportId(t, e) {
            return this.getByIndex("byTransportId", t, e, (t => void 0 === t.parentId))
        }
        putSpans(t, e) {
            return this.put(t.map((t => o(this, Xr, "m", $r).call(this, t, e))))
        }
    }
    var Qr;
    Xr = new WeakSet, $r = function(t, e) {
        return {
            span: t,
            transportId: e,
            spanId: t.spanId,
            aggregateSignature: qr.exports.makeAggregateSignature(t, e, (t => t.attributes["outsystems.function.key"])),
            parentId: t.parentSpanId
        }
    };
    class Jr {
        constructor(t) {
            let {
                databaseName: e,
                autoincrement: n = !0,
                database: r = (n ? new Yr(e) : new Yr(e, "spanId"))
            } = t;
            Qr.set(this, void 0), i(this, Qr, r, "f")
        }
        readSpans(t) {
            return r(this, void 0, void 0, (function*() {
                return o(this, Qr, "f").getAll({
                    sortAsc: !0,
                    maxRecords: t
                })
            }))
        }
        readSpansByTransport(t, e) {
            return r(this, void 0, void 0, (function*() {
                const n = yield o(this, Qr, "f").getTopLevelByTransportId(t, e);
                return n.length > 0 ? n : o(this, Qr, "f").getByTransportId(t, e)
            }))
        }
        readSpansByParentId(t, e) {
            return r(this, void 0, void 0, (function*() {
                return o(this, Qr, "f").getByParentId(t, e)
            }))
        }
        readSpansByAggregateSignature(t, e) {
            return r(this, void 0, void 0, (function*() {
                return o(this, Qr, "f").getByAggregateSignature(t, e)
            }))
        }
        removeSpans(t) {
            return r(this, void 0, void 0, (function*() {
                return o(this, Qr, "f").deleteMultiple(t)
            }))
        }
        insertSpan(t, e) {
            return r(this, void 0, void 0, (function*() {
                return o(this, Qr, "f").putSpans([t], e)
            }))
        }
        insertSerializableSpans(t, e) {
            return r(this, void 0, void 0, (function*() {
                return o(this, Qr, "f").putSpans(t, e)
            }))
        }
        countSpans() {
            return r(this, void 0, void 0, (function*() {
                return o(this, Qr, "f").count()
            }))
        }
        isFull() {
            return r(this, void 0, void 0, (function*() {
                return (yield o(this, Qr, "f").count()) >= 1e4
            }))
        }
        discardSpans() {
            return r(this, arguments, void 0, (function() {
                var t = this;
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 200;
                return function*() {
                    return o(t, Qr, "f").deleteRecords(e)
                }()
            }))
        }
    }

    function to(t) {
        return new qr.exports.SpanAggregator({
            storage: {
                insertSpans: (e, n) => r(this, void 0, void 0, (function*() {
                    yield t.insertSerializableSpans(e, n)
                })),
                readSpansByAggregateSignature: e => r(this, void 0, void 0, (function*() {
                    return (yield t.readSpansByAggregateSignature(e)).map((t => t.span))
                })),
                readSpansByParentId: e => r(this, void 0, void 0, (function*() {
                    return (yield t.readSpansByParentId(e)).map((t => t.span))
                }))
            },
            getSpanObjectId: t => t.attributes["outsystems.function.key"]
        })
    }
    var eo, no, ro, oo, io, so, ao, uo, co;
    Qr = new WeakMap;
    const lo = 1e3,
        fo = new ur,
        po = new ur,
        ho = "logs",
        go = "spans_v2",
        vo = "spans";
    class _o {
        constructor(t) {
            let {
                databaseNameSuffix: e,
                isOnline: n = (() => !0),
                offlineLogsStorage: r = new Hr({
                    databaseName: `${ho}-${e}`
                }),
                offlineTracesStorage: o = new Jr({
                    databaseName: `${go}-${e}`,
                    autoincrement: !1
                }),
                legacyOfflineTracesStorage: s = new Jr({
                    databaseName: `${vo}-${e}`
                }),
                flushLegacyTraces: a = !1,
                aggregateSpans: u = !1,
                spanAggregator: c = to(o),
                mutexDispatchLogs: l = fo,
                mutexDispatchSpans: f = po
            } = t;
            eo.set(this, void 0), no.set(this, void 0), ro.set(this, void 0), oo.set(this, !0), io.set(this, void 0), so.set(this, void 0), ao.set(this, void 0), uo.set(this, void 0), co.set(this, void 0), i(this, eo, r, "f"), i(this, no, o, "f"), i(this, ro, s, "f"), i(this, io, n, "f"), i(this, oo, a, "f"), i(this, so, u, "f"), i(this, ao, c, "f"), i(this, co, l, "f"), i(this, uo, f, "f")
        }
        setAggregateSpansStatus(t) {
            i(this, so, t, "f")
        }
        writeLog(t, e) {
            return r(this, arguments, void 0, (function(t, e) {
                var n = this;
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
                return function*() {
                    try {
                        (yield o(n, eo, "f").isFull()) && (yield o(n, eo, "f").discardLogs()), yield o(n, eo, "f").insertLog(t, e.getTransportId()), (yield o(n, eo, "f").countLogs()) >= r && (yield n.flushTransportLogs(e))
                    } catch (t) {
                        console.debug("Error writing log to storage", t)
                    }
                }()
            }))
        }
        writeSpan(t, e) {
            return r(this, arguments, void 0, (function(t, e) {
                var n = this;
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lo;
                return function*() {
                    try {
                        (yield o(n, no, "f").isFull()) && (yield o(n, no, "f").discardSpans()), yield o(n, uo, "f").runExclusive((() => r(n, void 0, void 0, (function*() {
                            o(this, so, "f") ? yield o(this, ao, "f").aggregate(t, e.getTransportId()): yield o(this, no, "f").insertSpan(t, e.getTransportId())
                        })))), (yield o(n, no, "f").countSpans()) >= i && (yield n.flushTransportSpans(e))
                    } catch (t) {
                        console.debug("Error writing trace to storage", t)
                    }
                }()
            }))
        }
        processTransportLogs(t) {
            return r(this, arguments, void 0, (function(t) {
                var e = this;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                return function*() {
                    yield o(e, co, "f").runExclusive((() => r(e, void 0, void 0, (function*() {
                        yield this.internalLogProcess(t, n, !0)
                    }))))
                }()
            }))
        }
        flushTransportLogs(t) {
            return r(this, arguments, void 0, (function(t) {
                var e = this;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                return function*() {
                    yield o(e, co, "f").runExclusive((() => r(e, void 0, void 0, (function*() {
                        yield this.internalLogProcess(t, n, !1)
                    }))))
                }()
            }))
        }
        internalLogProcess(t, e, n) {
            return r(this, void 0, void 0, (function*() {
                if (!t.requiresConnectivity() || o(this, io, "f").call(this)) try {
                    const r = n ? e : 1;
                    let i = yield o(this, eo, "f").readLogsByTransport(t.getTransportId(), e);
                    for (; i.length >= r;) yield t.writeAll(i.map((t => t.log))), yield o(this, eo, "f").removeLogs(i.map((t => t.logId))), i = yield o(this, eo, "f").readLogsByTransport(t.getTransportId(), e)
                } catch (t) {
                    throw console.debug("Error in internal log processing", t), t
                }
            }))
        }
        processTransportSpans(t) {
            return r(this, arguments, void 0, (function(t) {
                var e = this;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lo;
                return function*() {
                    yield o(e, uo, "f").runExclusive((() => r(e, void 0, void 0, (function*() {
                        yield this.internalSpanProcess(t, n, !0)
                    }))))
                }()
            }))
        }
        flushTransportSpans(t) {
            return r(this, arguments, void 0, (function(t) {
                var e = this;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lo;
                return function*() {
                    yield o(e, uo, "f").runExclusive((() => r(e, void 0, void 0, (function*() {
                        yield this.internalSpanProcess(t, n, !1)
                    }))))
                }()
            }))
        }
        internalSpanProcess(t, e, n) {
            return r(this, void 0, void 0, (function*() {
                if (!t.requiresConnectivity() || o(this, io, "f").call(this)) {
                    if (o(this, oo, "f")) try {
                        const n = yield this.writeSpansToTransport({
                            transport: t,
                            spansBatchSize: e,
                            storage: o(this, ro, "f"),
                            processCompleteBatchOnly: !1
                        });
                        i(this, oo, n > 0, "f")
                    } catch (t) {
                        console.warn("Error in processing legacy spans", t)
                    }
                    yield this.writeSpansToTransport({
                        transport: t,
                        spansBatchSize: e,
                        processCompleteBatchOnly: n,
                        storage: o(this, no, "f")
                    })
                }
            }))
        }
        writeSpansToTransport(t) {
            return r(this, arguments, void 0, (function(t) {
                let {
                    transport: e,
                    spansBatchSize: n,
                    processCompleteBatchOnly: r,
                    storage: o
                } = t;
                return function*() {
                    try {
                        const t = r ? n : 1;
                        let i = yield o.readSpansByTransport(e.getTransportId(), n);
                        if (0 === i.length) return 0;
                        for (; i.length >= t;) yield e.writeAll(i.map((t => t.span))), yield o.removeSpans(i.map((t => t.spanId))), i = yield o.readSpansByTransport(e.getTransportId(), n);
                        return yield o.countSpans()
                    } catch (t) {
                        throw console.debug("Error processing spans", t), t
                    }
                }()
            }))
        }
    }
    eo = new WeakMap, no = new WeakMap, ro = new WeakMap, oo = new WeakMap, io = new WeakMap, so = new WeakMap, ao = new WeakMap, uo = new WeakMap, co = new WeakMap;
    class yo {
        constructor() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6e4;
            this.timerInterval = t, this.tasksToRun = new Map
        }
        scheduleNextRun() {
            this.currentTaskTimeout && clearTimeout(this.currentTaskTimeout), this.currentTaskTimeout = setTimeout((() => this.runTask()), this.timerInterval)
        }
        runTask() {
            return r(this, void 0, void 0, (function*() {
                if (this.currentTaskTimeout) {
                    this.stop();
                    const t = Array.from(this.tasksToRun.values()).map((t => t()));
                    yield Promise.all(t), this.scheduleNextRun()
                }
            }))
        }
        start() {
            this.scheduleNextRun()
        }
        stop() {
            this.currentTaskTimeout && (clearTimeout(this.currentTaskTimeout), this.currentTaskTimeout = void 0)
        }
        addTask(t, e) {
            this.tasksToRun.set(t, e)
        }
        deleteTask(t) {
            this.tasksToRun.delete(t)
        }
        getTask(t) {
            return this.tasksToRun.get(t)
        }
        setTimerInterval(t) {
            this.timerInterval = t, this.start()
        }
    }
    class mo {
        constructor(t) {
            let {
                logTransports: e = [],
                traceTransports: n = [],
                databaseNameSuffix: o,
                isOnline: i,
                aggregateSpans: s,
                offlineManager: a = new _o({
                    databaseNameSuffix: o,
                    isOnline: i,
                    flushLegacyTraces: !0,
                    aggregateSpans: s
                }),
                taskScheduler: u = new yo,
                circuitBreakerRunner: c = new er
            } = t;
            this.logTransports = e, this.traceTransports = n, this.offlineManager = a, this.taskScheduler = u, this.circuitBreakerRunner = c, this.taskScheduler.addTask("flush-logs", (() => r(this, void 0, void 0, (function*() {
                return this.flushLogs()
            })))), this.taskScheduler.addTask("flush-spans", (() => r(this, void 0, void 0, (function*() {
                return this.flushSpans()
            })))), this.taskScheduler.start()
        }
        addLogTransport(t) {
            const e = t.getTransportId();
            this.logTransports.some((t => t.getTransportId() === e)) || this.logTransports.push(t)
        }
        addTraceTransport(t) {
            const e = t.getTransportId();
            this.traceTransports.some((t => t.getTransportId() === e)) || this.traceTransports.push(t)
        }
        removeLogTransport(t) {
            const e = this.logTransports.findIndex((e => e.getTransportId() === t)); - 1 !== e && (this.logTransports.splice(e, 1), this.circuitBreakerRunner.closeCircuit(t))
        }
        removeTraceTransport(t) {
            const e = this.traceTransports.findIndex((e => e.getTransportId() === t)); - 1 !== e && (this.traceTransports.splice(e, 1), this.circuitBreakerRunner.closeCircuit(t))
        }
        setAllLogTypeBaselines(t) {
            for (const e of this.logTransports) e.setLogTypeBaseline(t)
        }
        setTagId(t) {
            var e, n;
            for (const n of this.traceTransports) null === (e = n.setTagId) || void 0 === e || e.call(n, t);
            for (const e of this.logTransports) null === (n = e.setTagId) || void 0 === n || n.call(e, t)
        }
        setResourceAttributes(t) {
            var e, n;
            for (const n of this.traceTransports) null === (e = n.setResourceAttributes) || void 0 === e || e.call(n, t);
            for (const e of this.logTransports) null === (n = e.setResourceAttributes) || void 0 === n || n.call(e, t)
        }
        enableTracing() {
            for (const t of this.traceTransports) t.enableTracing()
        }
        disableTracing() {
            for (const t of this.traceTransports) t.disableTracing()
        }
        flushLogs() {
            return r(this, void 0, void 0, (function*() {
                const t = this.logTransports.map((t => r(this, void 0, void 0, (function*() {
                    const e = t.getTransportId();
                    yield this.circuitBreakerRunner.run(e, (() => this.offlineManager.flushTransportLogs(t)))
                }))));
                yield Promise.all(t)
            }))
        }
        flushSpans() {
            return r(this, void 0, void 0, (function*() {
                const t = this.traceTransports.map((t => r(this, void 0, void 0, (function*() {
                    const e = t.getTransportId();
                    yield this.circuitBreakerRunner.run(e, (() => t.hasWriteBuffer() || "function" != typeof t.flush ? this.offlineManager.flushTransportSpans(t) : t.flush()))
                }))));
                yield Promise.all(t)
            }))
        }
        processLog(t) {
            return r(this, void 0, void 0, (function*() {
                const e = this.logTransports.filter((e => e.getLogTypeBaseline() <= t.type));
                for (const n of e)
                    if (n.hasWriteBuffer()) yield this.offlineManager.writeLog(t, n);
                    else {
                        const e = n.getTransportId();
                        0 !== (yield this.circuitBreakerRunner.run(e, (() => n.write(t)))) && (yield this.offlineManager.writeLog(t, n))
                    }
            }))
        }
        processSpan(t) {
            return r(this, void 0, void 0, (function*() {
                const e = this.traceTransports.filter((t => t.isTracingEnabled()));
                for (const n of e)
                    if (n.hasWriteBuffer()) yield this.offlineManager.writeSpan(t, n);
                    else {
                        const e = n.getTransportId();
                        0 !== (yield this.circuitBreakerRunner.run(e, (() => n.write(t)))) && (yield this.offlineManager.writeSpan(t, n))
                    }
            }))
        }
        setSchedulerTimerInterval(t) {
            this.taskScheduler.setTimerInterval(t)
        }
        setAggregateSpansStatus(t) {
            this.offlineManager.setAggregateSpansStatus(t)
        }
    }
    var To;
    ! function(t) {
        t[t.Internal = 0] = "Internal", t[t.External = 1] = "External", t[t.Client = 2] = "Client"
    }(To || (To = {}));
    var bo = t.Visibility = To,
        Eo = "object" == typeof zn && zn && zn.Object === Object && zn,
        So = Eo,
        Oo = "object" == typeof self && self && self.Object === Object && self,
        wo = So || Oo || Function("return this")(),
        Ao = wo.Symbol,
        Lo = Ao,
        ko = Object.prototype,
        Io = ko.hasOwnProperty,
        Po = ko.toString,
        Ro = Lo ? Lo.toStringTag : void 0;
    var Co = function(t) {
            var e = Io.call(t, Ro),
                n = t[Ro];
            try {
                t[Ro] = void 0;
                var r = !0
            } catch (t) {}
            var o = Po.call(t);
            return r && (e ? t[Ro] = n : delete t[Ro]), o
        },
        No = Object.prototype.toString;
    var xo = Co,
        jo = function(t) {
            return No.call(t)
        },
        Mo = Ao ? Ao.toStringTag : void 0;
    var Do = function(t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : Mo && Mo in Object(t) ? xo(t) : jo(t)
    };
    var Bo = function(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e)
        },
        Uo = Do,
        Wo = Bo;
    var zo, Fo = function(t) {
            if (!Wo(t)) return !1;
            var e = Uo(t);
            return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
        },
        Zo = wo["__core-js_shared__"],
        Vo = (zo = /[^.]+$/.exec(Zo && Zo.keys && Zo.keys.IE_PROTO || "")) ? "Symbol(src)_1." + zo : "";
    var Go = function(t) {
            return !!Vo && Vo in t
        },
        Ho = Function.prototype.toString;
    var Xo = function(t) {
            if (null != t) {
                try {
                    return Ho.call(t)
                } catch (t) {}
                try {
                    return t + ""
                } catch (t) {}
            }
            return ""
        },
        $o = Fo,
        qo = Go,
        Ko = Bo,
        Yo = Xo,
        Qo = /^\[object .+?Constructor\]$/,
        Jo = Function.prototype,
        ti = Object.prototype,
        ei = Jo.toString,
        ni = ti.hasOwnProperty,
        ri = RegExp("^" + ei.call(ni).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    var oi = function(t) {
            return !(!Ko(t) || qo(t)) && ($o(t) ? ri : Qo).test(Yo(t))
        },
        ii = function(t, e) {
            return null == t ? void 0 : t[e]
        };
    var si = function(t, e) {
            var n = ii(t, e);
            return oi(n) ? n : void 0
        },
        ai = si,
        ui = function() {
            try {
                var t = ai(Object, "defineProperty");
                return t({}, "", {}), t
            } catch (t) {}
        }(),
        ci = ui;
    var li = function(t, e, n) {
        "__proto__" == e && ci ? ci(t, e, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : t[e] = n
    };
    var fi = function(t) {
        return function(e, n, r) {
            for (var o = -1, i = Object(e), s = r(e), a = s.length; a--;) {
                var u = s[t ? a : ++o];
                if (!1 === n(i[u], u, i)) break
            }
            return e
        }
    }();
    var pi = function(t, e) {
        for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
        return r
    };
    var hi = function(t) {
            return null != t && "object" == typeof t
        },
        di = Do,
        gi = hi;
    var vi = function(t) {
            return gi(t) && "[object Arguments]" == di(t)
        },
        _i = hi,
        yi = Object.prototype,
        mi = yi.hasOwnProperty,
        Ti = yi.propertyIsEnumerable,
        bi = vi(function() {
            return arguments
        }()) ? vi : function(t) {
            return _i(t) && mi.call(t, "callee") && !Ti.call(t, "callee")
        },
        Ei = bi,
        Si = Array.isArray,
        Oi = {
            exports: {}
        };
    var wi = function() {
        return !1
    };
    ! function(t, e) {
        var n = wo,
            r = wi,
            o = e && !e.nodeType && e,
            i = o && t && !t.nodeType && t,
            s = i && i.exports === o ? n.Buffer : void 0,
            a = (s ? s.isBuffer : void 0) || r;
        t.exports = a
    }(Oi, Oi.exports);
    var Ai = /^(?:0|[1-9]\d*)$/;
    var Li = function(t, e) {
        var n = typeof t;
        return !!(e = null == e ? 9007199254740991 : e) && ("number" == n || "symbol" != n && Ai.test(t)) && t > -1 && t % 1 == 0 && t < e
    };
    var ki = function(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
        },
        Ii = Do,
        Pi = ki,
        Ri = hi,
        Ci = {};
    Ci["[object Float32Array]"] = Ci["[object Float64Array]"] = Ci["[object Int8Array]"] = Ci["[object Int16Array]"] = Ci["[object Int32Array]"] = Ci["[object Uint8Array]"] = Ci["[object Uint8ClampedArray]"] = Ci["[object Uint16Array]"] = Ci["[object Uint32Array]"] = !0, Ci["[object Arguments]"] = Ci["[object Array]"] = Ci["[object ArrayBuffer]"] = Ci["[object Boolean]"] = Ci["[object DataView]"] = Ci["[object Date]"] = Ci["[object Error]"] = Ci["[object Function]"] = Ci["[object Map]"] = Ci["[object Number]"] = Ci["[object Object]"] = Ci["[object RegExp]"] = Ci["[object Set]"] = Ci["[object String]"] = Ci["[object WeakMap]"] = !1;
    var Ni = function(t) {
        return Ri(t) && Pi(t.length) && !!Ci[Ii(t)]
    };
    var xi = function(t) {
            return function(e) {
                return t(e)
            }
        },
        ji = {
            exports: {}
        };
    ! function(t, e) {
        var n = Eo,
            r = e && !e.nodeType && e,
            o = r && t && !t.nodeType && t,
            i = o && o.exports === r && n.process,
            s = function() {
                try {
                    var t = o && o.require && o.require("util").types;
                    return t || i && i.binding && i.binding("util")
                } catch (t) {}
            }();
        t.exports = s
    }(ji, ji.exports);
    var Mi = Ni,
        Di = xi,
        Bi = ji.exports,
        Ui = Bi && Bi.isTypedArray,
        Wi = Ui ? Di(Ui) : Mi,
        zi = pi,
        Fi = Ei,
        Zi = Si,
        Vi = Oi.exports,
        Gi = Li,
        Hi = Wi,
        Xi = Object.prototype.hasOwnProperty;
    var $i = function(t, e) {
            var n = Zi(t),
                r = !n && Fi(t),
                o = !n && !r && Vi(t),
                i = !n && !r && !o && Hi(t),
                s = n || r || o || i,
                a = s ? zi(t.length, String) : [],
                u = a.length;
            for (var c in t) !e && !Xi.call(t, c) || s && ("length" == c || o && ("offset" == c || "parent" == c) || i && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || Gi(c, u)) || a.push(c);
            return a
        },
        qi = Object.prototype;
    var Ki = function(t) {
        var e = t && t.constructor;
        return t === ("function" == typeof e && e.prototype || qi)
    };
    var Yi = function(t, e) {
            return function(n) {
                return t(e(n))
            }
        },
        Qi = Yi(Object.keys, Object),
        Ji = Ki,
        ts = Qi,
        es = Object.prototype.hasOwnProperty;
    var ns = Fo,
        rs = ki;
    var os = function(t) {
            return null != t && rs(t.length) && !ns(t)
        },
        is = $i,
        ss = function(t) {
            if (!Ji(t)) return ts(t);
            var e = [];
            for (var n in Object(t)) es.call(t, n) && "constructor" != n && e.push(n);
            return e
        },
        as = os;
    var us = function(t) {
            return as(t) ? is(t) : ss(t)
        },
        cs = fi,
        ls = us;
    var fs = function(t, e) {
        return t && cs(t, e, ls)
    };
    var ps = function() {
        this.__data__ = [], this.size = 0
    };
    var hs = function(t, e) {
            return t === e || t != t && e != e
        },
        ds = hs;
    var gs = function(t, e) {
            for (var n = t.length; n--;)
                if (ds(t[n][0], e)) return n;
            return -1
        },
        vs = gs,
        _s = Array.prototype.splice;
    var ys = gs;
    var ms = gs;
    var Ts = gs;
    var bs = ps,
        Es = function(t) {
            var e = this.__data__,
                n = vs(e, t);
            return !(n < 0) && (n == e.length - 1 ? e.pop() : _s.call(e, n, 1), --this.size, !0)
        },
        Ss = function(t) {
            var e = this.__data__,
                n = ys(e, t);
            return n < 0 ? void 0 : e[n][1]
        },
        Os = function(t) {
            return ms(this.__data__, t) > -1
        },
        ws = function(t, e) {
            var n = this.__data__,
                r = Ts(n, t);
            return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this
        };

    function As(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    As.prototype.clear = bs, As.prototype.delete = Es, As.prototype.get = Ss, As.prototype.has = Os, As.prototype.set = ws;
    var Ls = As,
        ks = Ls;
    var Is = function() {
        this.__data__ = new ks, this.size = 0
    };
    var Ps = function(t) {
        var e = this.__data__,
            n = e.delete(t);
        return this.size = e.size, n
    };
    var Rs = function(t) {
        return this.__data__.get(t)
    };
    var Cs = function(t) {
            return this.__data__.has(t)
        },
        Ns = si(wo, "Map"),
        xs = si(Object, "create"),
        js = xs;
    var Ms = function() {
        this.__data__ = js ? js(null) : {}, this.size = 0
    };
    var Ds = function(t) {
            var e = this.has(t) && delete this.__data__[t];
            return this.size -= e ? 1 : 0, e
        },
        Bs = xs,
        Us = Object.prototype.hasOwnProperty;
    var Ws = function(t) {
            var e = this.__data__;
            if (Bs) {
                var n = e[t];
                return "__lodash_hash_undefined__" === n ? void 0 : n
            }
            return Us.call(e, t) ? e[t] : void 0
        },
        zs = xs,
        Fs = Object.prototype.hasOwnProperty;
    var Zs = xs;
    var Vs = Ms,
        Gs = Ds,
        Hs = Ws,
        Xs = function(t) {
            var e = this.__data__;
            return zs ? void 0 !== e[t] : Fs.call(e, t)
        },
        $s = function(t, e) {
            var n = this.__data__;
            return this.size += this.has(t) ? 0 : 1, n[t] = Zs && void 0 === e ? "__lodash_hash_undefined__" : e, this
        };

    function qs(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    qs.prototype.clear = Vs, qs.prototype.delete = Gs, qs.prototype.get = Hs, qs.prototype.has = Xs, qs.prototype.set = $s;
    var Ks = qs,
        Ys = Ls,
        Qs = Ns;
    var Js = function(t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
    };
    var ta = function(t, e) {
            var n = t.__data__;
            return Js(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
        },
        ea = ta;
    var na = ta;
    var ra = ta;
    var oa = ta;
    var ia = function() {
            this.size = 0, this.__data__ = {
                hash: new Ks,
                map: new(Qs || Ys),
                string: new Ks
            }
        },
        sa = function(t) {
            var e = ea(this, t).delete(t);
            return this.size -= e ? 1 : 0, e
        },
        aa = function(t) {
            return na(this, t).get(t)
        },
        ua = function(t) {
            return ra(this, t).has(t)
        },
        ca = function(t, e) {
            var n = oa(this, t),
                r = n.size;
            return n.set(t, e), this.size += n.size == r ? 0 : 1, this
        };

    function la(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    la.prototype.clear = ia, la.prototype.delete = sa, la.prototype.get = aa, la.prototype.has = ua, la.prototype.set = ca;
    var fa = la,
        pa = Ls,
        ha = Ns,
        da = fa;
    var ga = Ls,
        va = Is,
        _a = Ps,
        ya = Rs,
        ma = Cs,
        Ta = function(t, e) {
            var n = this.__data__;
            if (n instanceof pa) {
                var r = n.__data__;
                if (!ha || r.length < 199) return r.push([t, e]), this.size = ++n.size, this;
                n = this.__data__ = new da(r)
            }
            return n.set(t, e), this.size = n.size, this
        };

    function ba(t) {
        var e = this.__data__ = new ga(t);
        this.size = e.size
    }
    ba.prototype.clear = va, ba.prototype.delete = _a, ba.prototype.get = ya, ba.prototype.has = ma, ba.prototype.set = Ta;
    var Ea = ba;
    var Sa = fa,
        Oa = function(t) {
            return this.__data__.set(t, "__lodash_hash_undefined__"), this
        },
        wa = function(t) {
            return this.__data__.has(t)
        };

    function Aa(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.__data__ = new Sa; ++e < n;) this.add(t[e])
    }
    Aa.prototype.add = Aa.prototype.push = Oa, Aa.prototype.has = wa;
    var La = Aa,
        ka = function(t, e) {
            for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
                if (e(t[n], n, t)) return !0;
            return !1
        },
        Ia = function(t, e) {
            return t.has(e)
        };
    var Pa = function(t, e, n, r, o, i) {
        var s = 1 & n,
            a = t.length,
            u = e.length;
        if (a != u && !(s && u > a)) return !1;
        var c = i.get(t),
            l = i.get(e);
        if (c && l) return c == e && l == t;
        var f = -1,
            p = !0,
            h = 2 & n ? new La : void 0;
        for (i.set(t, e), i.set(e, t); ++f < a;) {
            var d = t[f],
                g = e[f];
            if (r) var v = s ? r(g, d, f, e, t, i) : r(d, g, f, t, e, i);
            if (void 0 !== v) {
                if (v) continue;
                p = !1;
                break
            }
            if (h) {
                if (!ka(e, (function(t, e) {
                        if (!Ia(h, e) && (d === t || o(d, t, n, r, i))) return h.push(e)
                    }))) {
                    p = !1;
                    break
                }
            } else if (d !== g && !o(d, g, n, r, i)) {
                p = !1;
                break
            }
        }
        return i.delete(t), i.delete(e), p
    };
    var Ra = wo.Uint8Array,
        Ca = hs,
        Na = Pa,
        xa = function(t) {
            var e = -1,
                n = Array(t.size);
            return t.forEach((function(t, r) {
                n[++e] = [r, t]
            })), n
        },
        ja = function(t) {
            var e = -1,
                n = Array(t.size);
            return t.forEach((function(t) {
                n[++e] = t
            })), n
        },
        Ma = Ao ? Ao.prototype : void 0,
        Da = Ma ? Ma.valueOf : void 0;
    var Ba = function(t, e, n, r, o, i, s) {
        switch (n) {
            case "[object DataView]":
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                t = t.buffer, e = e.buffer;
            case "[object ArrayBuffer]":
                return !(t.byteLength != e.byteLength || !i(new Ra(t), new Ra(e)));
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
                return Ca(+t, +e);
            case "[object Error]":
                return t.name == e.name && t.message == e.message;
            case "[object RegExp]":
            case "[object String]":
                return t == e + "";
            case "[object Map]":
                var a = xa;
            case "[object Set]":
                var u = 1 & r;
                if (a || (a = ja), t.size != e.size && !u) return !1;
                var c = s.get(t);
                if (c) return c == e;
                r |= 2, s.set(t, e);
                var l = Na(a(t), a(e), r, o, i, s);
                return s.delete(t), l;
            case "[object Symbol]":
                if (Da) return Da.call(t) == Da.call(e)
        }
        return !1
    };
    var Ua = function(t, e) {
            for (var n = -1, r = e.length, o = t.length; ++n < r;) t[o + n] = e[n];
            return t
        },
        Wa = Ua,
        za = Si;
    var Fa = function(t, e, n) {
        var r = e(t);
        return za(t) ? r : Wa(r, n(t))
    };
    var Za = function() {
            return []
        },
        Va = function(t, e) {
            for (var n = -1, r = null == t ? 0 : t.length, o = 0, i = []; ++n < r;) {
                var s = t[n];
                e(s, n, t) && (i[o++] = s)
            }
            return i
        },
        Ga = Za,
        Ha = Object.prototype.propertyIsEnumerable,
        Xa = Object.getOwnPropertySymbols,
        $a = Xa ? function(t) {
            return null == t ? [] : (t = Object(t), Va(Xa(t), (function(e) {
                return Ha.call(t, e)
            })))
        } : Ga,
        qa = Fa,
        Ka = $a,
        Ya = us;
    var Qa = function(t) {
            return qa(t, Ya, Ka)
        },
        Ja = Object.prototype.hasOwnProperty;
    var tu = function(t, e, n, r, o, i) {
            var s = 1 & n,
                a = Qa(t),
                u = a.length;
            if (u != Qa(e).length && !s) return !1;
            for (var c = u; c--;) {
                var l = a[c];
                if (!(s ? l in e : Ja.call(e, l))) return !1
            }
            var f = i.get(t),
                p = i.get(e);
            if (f && p) return f == e && p == t;
            var h = !0;
            i.set(t, e), i.set(e, t);
            for (var d = s; ++c < u;) {
                var g = t[l = a[c]],
                    v = e[l];
                if (r) var _ = s ? r(v, g, l, e, t, i) : r(g, v, l, t, e, i);
                if (!(void 0 === _ ? g === v || o(g, v, n, r, i) : _)) {
                    h = !1;
                    break
                }
                d || (d = "constructor" == l)
            }
            if (h && !d) {
                var y = t.constructor,
                    m = e.constructor;
                y == m || !("constructor" in t) || !("constructor" in e) || "function" == typeof y && y instanceof y && "function" == typeof m && m instanceof m || (h = !1)
            }
            return i.delete(t), i.delete(e), h
        },
        eu = si(wo, "DataView"),
        nu = Ns,
        ru = si(wo, "Promise"),
        ou = si(wo, "Set"),
        iu = si(wo, "WeakMap"),
        su = Do,
        au = Xo,
        uu = "[object Map]",
        cu = "[object Promise]",
        lu = "[object Set]",
        fu = "[object WeakMap]",
        pu = "[object DataView]",
        hu = au(eu),
        du = au(nu),
        gu = au(ru),
        vu = au(ou),
        _u = au(iu),
        yu = su;
    (eu && yu(new eu(new ArrayBuffer(1))) != pu || nu && yu(new nu) != uu || ru && yu(ru.resolve()) != cu || ou && yu(new ou) != lu || iu && yu(new iu) != fu) && (yu = function(t) {
        var e = su(t),
            n = "[object Object]" == e ? t.constructor : void 0,
            r = n ? au(n) : "";
        if (r) switch (r) {
            case hu:
                return pu;
            case du:
                return uu;
            case gu:
                return cu;
            case vu:
                return lu;
            case _u:
                return fu
        }
        return e
    });
    var mu = Ea,
        Tu = Pa,
        bu = Ba,
        Eu = tu,
        Su = yu,
        Ou = Si,
        wu = Oi.exports,
        Au = Wi,
        Lu = "[object Arguments]",
        ku = "[object Array]",
        Iu = "[object Object]",
        Pu = Object.prototype.hasOwnProperty;
    var Ru = function(t, e, n, r, o, i) {
            var s = Ou(t),
                a = Ou(e),
                u = s ? ku : Su(t),
                c = a ? ku : Su(e),
                l = (u = u == Lu ? Iu : u) == Iu,
                f = (c = c == Lu ? Iu : c) == Iu,
                p = u == c;
            if (p && wu(t)) {
                if (!wu(e)) return !1;
                s = !0, l = !1
            }
            if (p && !l) return i || (i = new mu), s || Au(t) ? Tu(t, e, n, r, o, i) : bu(t, e, u, n, r, o, i);
            if (!(1 & n)) {
                var h = l && Pu.call(t, "__wrapped__"),
                    d = f && Pu.call(e, "__wrapped__");
                if (h || d) {
                    var g = h ? t.value() : t,
                        v = d ? e.value() : e;
                    return i || (i = new mu), o(g, v, n, r, i)
                }
            }
            return !!p && (i || (i = new mu), Eu(t, e, n, r, o, i))
        },
        Cu = hi;
    var Nu = function t(e, n, r, o, i) {
            return e === n || (null == e || null == n || !Cu(e) && !Cu(n) ? e != e && n != n : Ru(e, n, r, o, t, i))
        },
        xu = Ea,
        ju = Nu;
    var Mu = Bo;
    var Du = function(t) {
            return t == t && !Mu(t)
        },
        Bu = Du,
        Uu = us;
    var Wu = function(t, e) {
            return function(n) {
                return null != n && (n[t] === e && (void 0 !== e || t in Object(n)))
            }
        },
        zu = function(t, e, n, r) {
            var o = n.length,
                i = o,
                s = !r;
            if (null == t) return !i;
            for (t = Object(t); o--;) {
                var a = n[o];
                if (s && a[2] ? a[1] !== t[a[0]] : !(a[0] in t)) return !1
            }
            for (; ++o < i;) {
                var u = (a = n[o])[0],
                    c = t[u],
                    l = a[1];
                if (s && a[2]) {
                    if (void 0 === c && !(u in t)) return !1
                } else {
                    var f = new xu;
                    if (r) var p = r(c, l, u, t, e, f);
                    if (!(void 0 === p ? ju(l, c, 3, r, f) : p)) return !1
                }
            }
            return !0
        },
        Fu = function(t) {
            for (var e = Uu(t), n = e.length; n--;) {
                var r = e[n],
                    o = t[r];
                e[n] = [r, o, Bu(o)]
            }
            return e
        },
        Zu = Wu;
    var Vu = function(t) {
            var e = Fu(t);
            return 1 == e.length && e[0][2] ? Zu(e[0][0], e[0][1]) : function(n) {
                return n === t || zu(n, t, e)
            }
        },
        Gu = Do,
        Hu = hi;
    var Xu = function(t) {
            return "symbol" == typeof t || Hu(t) && "[object Symbol]" == Gu(t)
        },
        $u = Si,
        qu = Xu,
        Ku = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        Yu = /^\w*$/;
    var Qu = function(t, e) {
            if ($u(t)) return !1;
            var n = typeof t;
            return !("number" != n && "symbol" != n && "boolean" != n && null != t && !qu(t)) || (Yu.test(t) || !Ku.test(t) || null != e && t in Object(e))
        },
        Ju = fa;

    function tc(t, e) {
        if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError("Expected a function");
        var n = function() {
            var r = arguments,
                o = e ? e.apply(this, r) : r[0],
                i = n.cache;
            if (i.has(o)) return i.get(o);
            var s = t.apply(this, r);
            return n.cache = i.set(o, s) || i, s
        };
        return n.cache = new(tc.Cache || Ju), n
    }
    tc.Cache = Ju;
    var ec = tc;
    var nc = function(t) {
            var e = ec(t, (function(t) {
                    return 500 === n.size && n.clear(), t
                })),
                n = e.cache;
            return e
        },
        rc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        oc = /\\(\\)?/g,
        ic = nc((function(t) {
            var e = [];
            return 46 === t.charCodeAt(0) && e.push(""), t.replace(rc, (function(t, n, r, o) {
                e.push(r ? o.replace(oc, "$1") : n || t)
            })), e
        }));
    var sc = function(t, e) {
            for (var n = -1, r = null == t ? 0 : t.length, o = Array(r); ++n < r;) o[n] = e(t[n], n, t);
            return o
        },
        ac = sc,
        uc = Si,
        cc = Xu,
        lc = Ao ? Ao.prototype : void 0,
        fc = lc ? lc.toString : void 0;
    var pc = function t(e) {
            if ("string" == typeof e) return e;
            if (uc(e)) return ac(e, t) + "";
            if (cc(e)) return fc ? fc.call(e) : "";
            var n = e + "";
            return "0" == n && 1 / e == -Infinity ? "-0" : n
        },
        hc = pc;
    var dc = Si,
        gc = Qu,
        vc = ic,
        _c = function(t) {
            return null == t ? "" : hc(t)
        };
    var yc = function(t, e) {
            return dc(t) ? t : gc(t, e) ? [t] : vc(_c(t))
        },
        mc = Xu;
    var Tc = function(t) {
            if ("string" == typeof t || mc(t)) return t;
            var e = t + "";
            return "0" == e && 1 / t == -Infinity ? "-0" : e
        },
        bc = yc,
        Ec = Tc;
    var Sc = function(t, e) {
            for (var n = 0, r = (e = bc(e, t)).length; null != t && n < r;) t = t[Ec(e[n++])];
            return n && n == r ? t : void 0
        },
        Oc = Sc;
    var wc = yc,
        Ac = Ei,
        Lc = Si,
        kc = Li,
        Ic = ki,
        Pc = Tc;
    var Rc = function(t, e) {
            return null != t && e in Object(t)
        },
        Cc = function(t, e, n) {
            for (var r = -1, o = (e = wc(e, t)).length, i = !1; ++r < o;) {
                var s = Pc(e[r]);
                if (!(i = null != t && n(t, s))) break;
                t = t[s]
            }
            return i || ++r != o ? i : !!(o = null == t ? 0 : t.length) && Ic(o) && kc(s, o) && (Lc(t) || Ac(t))
        };
    var Nc = Nu,
        xc = function(t, e, n) {
            var r = null == t ? void 0 : Oc(t, e);
            return void 0 === r ? n : r
        },
        jc = function(t, e) {
            return null != t && Cc(t, e, Rc)
        },
        Mc = Qu,
        Dc = Du,
        Bc = Wu,
        Uc = Tc;
    var Wc = Sc;
    var zc = function(t) {
            return function(e) {
                return null == e ? void 0 : e[t]
            }
        },
        Fc = function(t) {
            return function(e) {
                return Wc(e, t)
            }
        },
        Zc = Qu,
        Vc = Tc;
    var Gc = Vu,
        Hc = function(t, e) {
            return Mc(t) && Dc(e) ? Bc(Uc(t), e) : function(n) {
                var r = xc(n, t);
                return void 0 === r && r === e ? jc(n, t) : Nc(e, r, 3)
            }
        },
        Xc = function(t) {
            return t
        },
        $c = Si,
        qc = function(t) {
            return Zc(t) ? zc(Vc(t)) : Fc(t)
        };
    var Kc = function(t) {
            return "function" == typeof t ? t : null == t ? Xc : "object" == typeof t ? $c(t) ? Hc(t[0], t[1]) : Gc(t) : qc(t)
        },
        Yc = li,
        Qc = fs,
        Jc = Kc;
    var tl = function(t, e) {
            var n = {};
            return e = Jc(e), Qc(t, (function(t, r, o) {
                Yc(n, r, e(t, r, o))
            })), n
        },
        el = li,
        nl = hs,
        rl = Object.prototype.hasOwnProperty;
    var ol = function(t, e, n) {
            var r = t[e];
            rl.call(t, e) && nl(r, n) && (void 0 !== n || e in t) || el(t, e, n)
        },
        il = yc,
        sl = Li,
        al = Bo,
        ul = Tc;
    var cl = Sc,
        ll = function(t, e, n, r) {
            if (!al(t)) return t;
            for (var o = -1, i = (e = il(e, t)).length, s = i - 1, a = t; null != a && ++o < i;) {
                var u = ul(e[o]),
                    c = n;
                if ("__proto__" === u || "constructor" === u || "prototype" === u) return t;
                if (o != s) {
                    var l = a[u];
                    void 0 === (c = r ? r(l, u, a) : void 0) && (c = al(l) ? l : sl(e[o + 1]) ? [] : {})
                }
                ol(a, u, c), a = a[u]
            }
            return t
        },
        fl = yc;
    var pl = function(t, e, n) {
            for (var r = -1, o = e.length, i = {}; ++r < o;) {
                var s = e[r],
                    a = cl(t, s);
                n(a, s) && ll(i, fl(s, t), a)
            }
            return i
        },
        hl = Yi(Object.getPrototypeOf, Object),
        dl = Ua,
        gl = hl,
        vl = $a,
        _l = Za,
        yl = Object.getOwnPropertySymbols ? function(t) {
            for (var e = []; t;) dl(e, vl(t)), t = gl(t);
            return e
        } : _l;
    var ml = Bo,
        Tl = Ki,
        bl = function(t) {
            var e = [];
            if (null != t)
                for (var n in Object(t)) e.push(n);
            return e
        },
        El = Object.prototype.hasOwnProperty;
    var Sl = $i,
        Ol = function(t) {
            if (!ml(t)) return bl(t);
            var e = Tl(t),
                n = [];
            for (var r in t)("constructor" != r || !e && El.call(t, r)) && n.push(r);
            return n
        },
        wl = os;
    var Al = Fa,
        Ll = yl,
        kl = function(t) {
            return wl(t) ? Sl(t, !0) : Ol(t)
        };
    var Il = sc,
        Pl = Kc,
        Rl = pl,
        Cl = function(t) {
            return Al(t, kl, Ll)
        };
    var Nl = function(t, e) {
        if (null == t) return {};
        var n = Il(Cl(t), (function(t) {
            return [t]
        }));
        return e = Pl(e), Rl(t, n, (function(t, n) {
            return e(t, n[0])
        }))
    };
    const xl = "OS-CLRT-00000",
        jl = t => {
            const e = tl(t, (t => t()));
            return Nl(e, (t => null != t))
        },
        Ml = {
            [bo.Internal]: 1,
            [bo.External]: 2,
            [bo.Client]: 3
        },
        Dl = t => {
            var e, n, r;
            const o = {};
            return t.type === lr.Error && t.error && (o["exception.type"] = t.error.name, o["exception.message"] = Wl(t.error.message), o["exception.stacktrace"] = null !== (e = t.error.stack) && void 0 !== e ? e : "", o["outsystems.error.code"] = null !== (r = null === (n = t.errorCode) || void 0 === n ? void 0 : n.toString()) && void 0 !== r ? r : xl.toString()), o
        },
        Bl = t => {
            const e = t => "boolean" == typeof t ? "boolValue" : "number" == typeof t ? t % 1 == 0 ? "intValue" : "doubleValue" : "stringValue";
            return Object.entries(t).map((t => {
                let [n, r] = t;
                return {
                    key: n,
                    value: {
                        [e(r)]: r
                    }
                }
            }))
        },
        Ul = t => (t["http.url"] && (t["http.url"] = Wl(t["http.url"])), t),
        Wl = t => t.replace(/((outsystems|https|http):\/\/[^ ]*?)\?[^ ]*/g, "$1");
    var zl, Fl, Zl;
    class Vl {
        constructor(t) {
            let {
                baseAttributes: e = {},
                transportManager: n,
                getTimestamp: r
            } = t;
            zl.set(this, void 0), Fl.set(this, void 0), Zl.set(this, void 0), i(this, zl, n, "f"), i(this, Fl, r, "f"), i(this, Zl, e, "f")
        }
        static build(t) {
            return r(this, arguments, void 0, (function(t) {
                let {
                    transports: e = [],
                    baseAttributes: n,
                    databaseNameSuffix: r,
                    transportManager: o = new mo({
                        databaseNameSuffix: r,
                        logTransports: e
                    }),
                    getTimestamp: i = (() => new jn)
                } = t;
                return function*() {
                    return new Vl({
                        baseAttributes: n,
                        transportManager: o,
                        getTimestamp: i
                    })
                }()
            }))
        }
        addTransport(t) {
            o(this, zl, "f").addLogTransport(t)
        }
        removeTransport(t) {
            o(this, zl, "f").removeLogTransport(t)
        }
        setLogTypeBaseline() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lr.Error;
            o(this, zl, "f").setAllLogTypeBaselines(t)
        }
        flush() {
            return r(this, void 0, void 0, (function*() {
                o(this, zl, "f").flushLogs()
            }))
        }
        setSchedulerTimerInterval(t) {
            o(this, zl, "f").setSchedulerTimerInterval(t)
        }
        error(t) {
            let {
                category: e,
                message: n,
                error: r,
                errorCode: i,
                visibility: s = bo.Internal,
                span: a,
                attributes: u
            } = t;
            const c = new tr({
                type: lr.Error,
                category: e,
                message: n,
                error: r,
                visibility: s,
                timestamp: o(this, Fl, "f").call(this),
                errorCode: i,
                span: a,
                attributes: Object.assign(Object.assign({}, jl(o(this, Zl, "f"))), u)
            });
            o(this, zl, "f").processLog(c)
        }
        warning(t) {
            let {
                category: e,
                message: n,
                visibility: r = bo.Internal,
                span: i,
                attributes: s
            } = t;
            const a = new tr({
                type: lr.Warning,
                category: e,
                message: n,
                visibility: r,
                timestamp: o(this, Fl, "f").call(this),
                span: i,
                attributes: Object.assign(Object.assign({}, jl(o(this, Zl, "f"))), s)
            });
            o(this, zl, "f").processLog(a)
        }
        info(t) {
            let {
                category: e,
                message: n,
                visibility: r = bo.External,
                span: i,
                attributes: s
            } = t;
            const a = new tr({
                type: lr.Info,
                category: e,
                message: n,
                visibility: r,
                timestamp: o(this, Fl, "f").call(this),
                span: i,
                attributes: Object.assign(Object.assign({}, jl(o(this, Zl, "f"))), s)
            });
            o(this, zl, "f").processLog(a)
        }
        debug(t) {
            let {
                category: e,
                message: n,
                visibility: r = bo.Internal,
                span: i,
                attributes: s
            } = t;
            const a = new tr({
                type: lr.Debug,
                category: e,
                message: n,
                visibility: r,
                timestamp: o(this, Fl, "f").call(this),
                span: i,
                attributes: Object.assign(Object.assign({}, jl(o(this, Zl, "f"))), s)
            });
            o(this, zl, "f").processLog(a)
        }
        log(t) {
            return r(this, void 0, void 0, (function*() {
                yield o(this, zl, "f").processLog(t)
            }))
        }
    }
    t.Logger = Vl, zl = new WeakMap, Fl = new WeakMap, Zl = new WeakMap;
    var Gl = "OT_ZONE_CONTEXT",
        Hl = function() {
            function t() {
                this._enabled = !1, this._zoneCounter = 0
            }
            return t.prototype._activeContextFromZone = function(t) {
                return t && t.get(Gl) || x
            }, t.prototype._bindFunction = function(t, e) {
                var n = this,
                    r = function() {
                        for (var r = this, o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i];
                        return n.with(t, (function() {
                            return e.apply(r, o)
                        }))
                    };
                return Object.defineProperty(r, "length", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !1,
                    value: e.length
                }), r
            }, t.prototype._bindListener = function(t, e) {
                var n = e;
                return void 0 !== n.__ot_listeners || (n.__ot_listeners = {}, "function" == typeof n.addEventListener && (n.addEventListener = this._patchAddEventListener(n, n.addEventListener, t)), "function" == typeof n.removeEventListener && (n.removeEventListener = this._patchRemoveEventListener(n, n.removeEventListener))), e
            }, t.prototype._createZoneName = function() {
                this._zoneCounter++;
                var t = Math.random();
                return this._zoneCounter + "-" + t
            }, t.prototype._createZone = function(t, e) {
                var n;
                return Zone.current.fork({
                    name: t,
                    properties: (n = {}, n[Gl] = e, n)
                })
            }, t.prototype._getActiveZone = function() {
                return Zone.current
            }, t.prototype._patchAddEventListener = function(t, e, n) {
                var r = this;
                return function(o, i, s) {
                    void 0 === t.__ot_listeners && (t.__ot_listeners = {});
                    var a = t.__ot_listeners[o];
                    void 0 === a && (a = new WeakMap, t.__ot_listeners[o] = a);
                    var u = r.bind(n, i);
                    return a.set(i, u), e.call(this, o, u, s)
                }
            }, t.prototype._patchRemoveEventListener = function(t, e) {
                return function(n, r) {
                    if (void 0 === t.__ot_listeners || void 0 === t.__ot_listeners[n]) return e.call(this, n, r);
                    var o = t.__ot_listeners[n],
                        i = o.get(r);
                    return o.delete(r), e.call(this, n, i || r)
                }
            }, t.prototype.active = function() {
                if (!this._enabled) return x;
                var t = this._getActiveZone(),
                    e = this._activeContextFromZone(t);
                return e || x
            }, t.prototype.bind = function(t, e) {
                return void 0 === t && (t = this.active()), "function" == typeof e ? this._bindFunction(t, e) : (void 0 === (n = e) && (n = {}), "function" == typeof n.addEventListener && "function" == typeof n.removeEventListener && this._bindListener(t, e), e);
                var n
            }, t.prototype.disable = function() {
                return this._enabled = !1, this
            }, t.prototype.enable = function() {
                return this._enabled = !0, this
            }, t.prototype.with = function(t, e, n) {
                for (var r = [], o = 3; o < arguments.length; o++) r[o - 3] = arguments[o];
                var i = this._createZoneName();
                return this._createZone(i, t).run(e, n, r)
            }, t
        }();
    /**
     * @license Angular v<unknown>
     * (c) 2010-2024 Google LLC. https://angular.io/
     * License: MIT
     */
    const Xl = globalThis;

    function $l(t) {
        return (Xl.__Zone_symbol_prefix || "__zone_symbol__") + t
    }
    const ql = Object.getOwnPropertyDescriptor,
        Kl = Object.defineProperty,
        Yl = Object.getPrototypeOf,
        Ql = Object.create,
        Jl = Array.prototype.slice,
        tf = "addEventListener",
        ef = "removeEventListener",
        nf = $l(tf),
        rf = $l(ef),
        of = "true",
        sf = "false",
        af = $l("");

    function uf(t, e) {
        return Zone.current.wrap(t, e)
    }

    function cf(t, e, n, r, o) {
        return Zone.current.scheduleMacroTask(t, e, n, r, o)
    }
    const lf = $l,
        ff = "undefined" != typeof window,
        pf = ff ? window : void 0,
        hf = ff && pf || globalThis,
        df = "removeAttribute";

    function gf(t, e) {
        for (let n = t.length - 1; n >= 0; n--) "function" == typeof t[n] && (t[n] = uf(t[n], e + "_" + n));
        return t
    }

    function vf(t) {
        return !t || !1 !== t.writable && !("function" == typeof t.get && void 0 === t.set)
    }
    const _f = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope,
        yf = !("nw" in hf) && void 0 !== hf.process && "[object process]" === hf.process.toString(),
        mf = !yf && !_f && !(!ff || !pf.HTMLElement),
        Tf = void 0 !== hf.process && "[object process]" === hf.process.toString() && !_f && !(!ff || !pf.HTMLElement),
        bf = {},
        Ef = lf("enable_beforeunload"),
        Sf = function(t) {
            if (!(t = t || hf.event)) return;
            let e = bf[t.type];
            e || (e = bf[t.type] = lf("ON_PROPERTY" + t.type));
            const n = this || t.target || hf,
                r = n[e];
            let o;
            if (mf && n === pf && "error" === t.type) {
                const e = t;
                o = r && r.call(this, e.message, e.filename, e.lineno, e.colno, e.error), !0 === o && t.preventDefault()
            } else o = r && r.apply(this, arguments), "beforeunload" === t.type && hf[Ef] && "string" == typeof o ? t.returnValue = o : null == o || o || t.preventDefault();
            return o
        };

    function Of(t, e, n) {
        let r = ql(t, e);
        if (!r && n) {
            ql(n, e) && (r = {
                enumerable: !0,
                configurable: !0
            })
        }
        if (!r || !r.configurable) return;
        const o = lf("on" + e + "patched");
        if (t.hasOwnProperty(o) && t[o]) return;
        delete r.writable, delete r.value;
        const i = r.get,
            s = r.set,
            a = e.slice(2);
        let u = bf[a];
        u || (u = bf[a] = lf("ON_PROPERTY" + a)), r.set = function(e) {
            let n = this;
            if (n || t !== hf || (n = hf), !n) return;
            "function" == typeof n[u] && n.removeEventListener(a, Sf), s && s.call(n, null), n[u] = e, "function" == typeof e && n.addEventListener(a, Sf, !1)
        }, r.get = function() {
            let n = this;
            if (n || t !== hf || (n = hf), !n) return null;
            const o = n[u];
            if (o) return o;
            if (i) {
                let t = i.call(this);
                if (t) return r.set.call(this, t), "function" == typeof n[df] && n.removeAttribute(e), t
            }
            return null
        }, Kl(t, e, r), t[o] = !0
    }

    function wf(t, e, n) {
        if (e)
            for (let r = 0; r < e.length; r++) Of(t, "on" + e[r], n);
        else {
            const e = [];
            for (const n in t) "on" == n.slice(0, 2) && e.push(n);
            for (let r = 0; r < e.length; r++) Of(t, e[r], n)
        }
    }
    const Af = lf("originalInstance");

    function Lf(t) {
        const e = hf[t];
        if (!e) return;
        hf[lf(t)] = e, hf[t] = function() {
            const n = gf(arguments, t);
            switch (n.length) {
                case 0:
                    this[Af] = new e;
                    break;
                case 1:
                    this[Af] = new e(n[0]);
                    break;
                case 2:
                    this[Af] = new e(n[0], n[1]);
                    break;
                case 3:
                    this[Af] = new e(n[0], n[1], n[2]);
                    break;
                case 4:
                    this[Af] = new e(n[0], n[1], n[2], n[3]);
                    break;
                default:
                    throw new Error("Arg list too long.")
            }
        }, Pf(hf[t], e);
        const n = new e((function() {}));
        let r;
        for (r in n) "XMLHttpRequest" === t && "responseBlob" === r || function(e) {
            "function" == typeof n[e] ? hf[t].prototype[e] = function() {
                return this[Af][e].apply(this[Af], arguments)
            } : Kl(hf[t].prototype, e, {
                set: function(n) {
                    "function" == typeof n ? (this[Af][e] = uf(n, t + "." + e), Pf(this[Af][e], n)) : this[Af][e] = n
                },
                get: function() {
                    return this[Af][e]
                }
            })
        }(r);
        for (r in e) "prototype" !== r && e.hasOwnProperty(r) && (hf[t][r] = e[r])
    }

    function kf(t, e, n) {
        let r = t;
        for (; r && !r.hasOwnProperty(e);) r = Yl(r);
        !r && t[e] && (r = t);
        const o = lf(e);
        let i = null;
        if (r && (!(i = r[o]) || !r.hasOwnProperty(o))) {
            i = r[o] = r[e];
            if (vf(r && ql(r, e))) {
                const t = n(i, o, e);
                r[e] = function() {
                    return t(this, arguments)
                }, Pf(r[e], i)
            }
        }
        return i
    }

    function If(t, e, n) {
        let r = null;

        function o(t) {
            const e = t.data;
            return e.args[e.cbIdx] = function() {
                t.invoke.apply(this, arguments)
            }, r.apply(e.target, e.args), t
        }
        r = kf(t, e, (t => function(e, r) {
            const i = n(e, r);
            return i.cbIdx >= 0 && "function" == typeof r[i.cbIdx] ? cf(i.name, r[i.cbIdx], i, o) : t.apply(e, r)
        }))
    }

    function Pf(t, e) {
        t[lf("OriginalDelegate")] = e
    }
    let Rf = !1,
        Cf = !1;

    function Nf() {
        try {
            const t = pf.navigator.userAgent;
            if (-1 !== t.indexOf("MSIE ") || -1 !== t.indexOf("Trident/")) return !0
        } catch (t) {}
        return !1
    }

    function xf() {
        if (Rf) return Cf;
        Rf = !0;
        try {
            const t = pf.navigator.userAgent; - 1 === t.indexOf("MSIE ") && -1 === t.indexOf("Trident/") && -1 === t.indexOf("Edge/") || (Cf = !0)
        } catch (t) {}
        return Cf
    }

    function jf(t) {
        return "function" == typeof t
    }

    function Mf(t) {
        return "number" == typeof t
    }
    let Df = !1;
    if ("undefined" != typeof window) try {
        const t = Object.defineProperty({}, "passive", {
            get: function() {
                Df = !0
            }
        });
        window.addEventListener("test", t, t), window.removeEventListener("test", t, t)
    } catch (t) {
        Df = !1
    }
    const Bf = {
            useG: !0
        },
        Uf = {},
        Wf = {},
        zf = new RegExp("^" + af + "(\\w+)(true|false)$"),
        Ff = lf("propagationStopped");

    function Zf(t, e) {
        const n = (e ? e(t) : t) + sf,
            r = (e ? e(t) : t) + of ,
            o = af + n,
            i = af + r;
        Uf[t] = {}, Uf[t][sf] = o, Uf[t][ of ] = i
    }

    function Vf(t, e, n, r) {
        const o = r && r.add || tf,
            i = r && r.rm || ef,
            s = r && r.listeners || "eventListeners",
            a = r && r.rmAll || "removeAllListeners",
            u = lf(o),
            c = "." + o + ":",
            l = "prependListener",
            f = "." + l + ":",
            p = function(t, e, n) {
                if (t.isRemoved) return;
                const r = t.callback;
                let o;
                "object" == typeof r && r.handleEvent && (t.callback = t => r.handleEvent(t), t.originalDelegate = r);
                try {
                    t.invoke(t, e, [n])
                } catch (t) {
                    o = t
                }
                const s = t.options;
                if (s && "object" == typeof s && s.once) {
                    const r = t.originalDelegate ? t.originalDelegate : t.callback;
                    e[i].call(e, n.type, r, s)
                }
                return o
            };

        function h(n, r, o) {
            if (!(r = r || t.event)) return;
            const i = n || r.target || t,
                s = i[Uf[r.type][o ? of : sf]];
            if (s) {
                const t = [];
                if (1 === s.length) {
                    const e = p(s[0], i, r);
                    e && t.push(e)
                } else {
                    const e = s.slice();
                    for (let n = 0; n < e.length && (!r || !0 !== r[Ff]); n++) {
                        const o = p(e[n], i, r);
                        o && t.push(o)
                    }
                }
                if (1 === t.length) throw t[0];
                for (let n = 0; n < t.length; n++) {
                    const r = t[n];
                    e.nativeScheduleMicroTask((() => {
                        throw r
                    }))
                }
            }
        }
        const d = function(t) {
                return h(this, t, !1)
            },
            g = function(t) {
                return h(this, t, !0)
            };

        function v(e, n) {
            if (!e) return !1;
            let r = !0;
            n && void 0 !== n.useG && (r = n.useG);
            const p = n && n.vh;
            let h = !0;
            n && void 0 !== n.chkDup && (h = n.chkDup);
            let v = !1;
            n && void 0 !== n.rt && (v = n.rt);
            let _ = e;
            for (; _ && !_.hasOwnProperty(o);) _ = Yl(_);
            if (!_ && e[o] && (_ = e), !_) return !1;
            if (_[u]) return !1;
            const y = n && n.eventNameToString,
                m = {},
                T = _[u] = _[o],
                b = _[lf(i)] = _[i],
                E = _[lf(s)] = _[s],
                S = _[lf(a)] = _[a];
            let O;
            n && n.prepend && (O = _[lf(n.prepend)] = _[n.prepend]);
            const w = function(t) {
                    return O.call(m.target, m.eventName, t.invoke, m.options)
                },
                A = r ? function(t) {
                    if (!m.isExisting) return T.call(m.target, m.eventName, m.capture ? g : d, m.options)
                } : function(t) {
                    return T.call(m.target, m.eventName, t.invoke, m.options)
                },
                L = r ? function(t) {
                    if (!t.isRemoved) {
                        const e = Uf[t.eventName];
                        let n;
                        e && (n = e[t.capture ? of : sf]);
                        const r = n && t.target[n];
                        if (r)
                            for (let e = 0; e < r.length; e++) {
                                if (r[e] === t) {
                                    r.splice(e, 1), t.isRemoved = !0, t.removeAbortListener && (t.removeAbortListener(), t.removeAbortListener = null), 0 === r.length && (t.allRemoved = !0, t.target[n] = null);
                                    break
                                }
                            }
                    }
                    if (t.allRemoved) return b.call(t.target, t.eventName, t.capture ? g : d, t.options)
                } : function(t) {
                    return b.call(t.target, t.eventName, t.invoke, t.options)
                },
                k = n && n.diff ? n.diff : function(t, e) {
                    const n = typeof e;
                    return "function" === n && t.callback === e || "object" === n && t.originalDelegate === e
                },
                I = Zone[lf("UNPATCHED_EVENTS")],
                P = t[lf("PASSIVE_EVENTS")];
            const R = function(e, o, i, s) {
                let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    u = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                return function() {
                    const c = this || t;
                    let l = arguments[0];
                    n && n.transferEventName && (l = n.transferEventName(l));
                    let f = arguments[1];
                    if (!f) return e.apply(this, arguments);
                    if (yf && "uncaughtException" === l) return e.apply(this, arguments);
                    let d = !1;
                    if ("function" != typeof f) {
                        if (!f.handleEvent) return e.apply(this, arguments);
                        d = !0
                    }
                    if (p && !p(e, f, c, arguments)) return;
                    const g = Df && !!P && -1 !== P.indexOf(l),
                        v = function(t) {
                            if ("object" == typeof t && null !== t) {
                                const e = {
                                    ...t
                                };
                                return t.signal && (e.signal = t.signal), e
                            }
                            return t
                        }(function(t, e) {
                            return !Df && "object" == typeof t && t ? !!t.capture : Df && e ? "boolean" == typeof t ? {
                                capture: t,
                                passive: !0
                            } : t ? "object" == typeof t && !1 !== t.passive ? {
                                ...t,
                                passive: !0
                            } : t : {
                                passive: !0
                            } : t
                        }(arguments[2], g)),
                        _ = null == v ? void 0 : v.signal;
                    if (null != _ && _.aborted) return;
                    if (I)
                        for (let t = 0; t < I.length; t++)
                            if (l === I[t]) return g ? e.call(c, l, f, v) : e.apply(this, arguments);
                    const T = !!v && ("boolean" == typeof v || v.capture),
                        b = !(!v || "object" != typeof v) && v.once,
                        E = Zone.current;
                    let S = Uf[l];
                    S || (Zf(l, y), S = Uf[l]);
                    const O = S[T ? of : sf];
                    let w, A = c[O],
                        L = !1;
                    if (A) {
                        if (L = !0, h)
                            for (let t = 0; t < A.length; t++)
                                if (k(A[t], f)) return
                    } else A = c[O] = [];
                    const R = c.constructor.name,
                        C = Wf[R];
                    C && (w = C[l]), w || (w = R + o + (y ? y(l) : l)), m.options = v, b && (m.options.once = !1), m.target = c, m.capture = T, m.eventName = l, m.isExisting = L;
                    const N = r ? Bf : void 0;
                    N && (N.taskData = m), _ && (m.options.signal = void 0);
                    const x = E.scheduleEventTask(w, f, N, i, s);
                    if (_) {
                        m.options.signal = _;
                        const t = () => x.zone.cancelTask(x);
                        e.call(_, "abort", t, {
                            once: !0
                        }), x.removeAbortListener = () => _.removeEventListener("abort", t)
                    }
                    return m.target = null, N && (N.taskData = null), b && (m.options.once = !0), (Df || "boolean" != typeof x.options) && (x.options = v), x.target = c, x.capture = T, x.eventName = l, d && (x.originalDelegate = f), u ? A.unshift(x) : A.push(x), a ? c : void 0
                }
            };
            return _[o] = R(T, c, A, L, v), O && (_[l] = R(O, f, w, L, v, !0)), _[i] = function() {
                const e = this || t;
                let r = arguments[0];
                n && n.transferEventName && (r = n.transferEventName(r));
                const o = arguments[2],
                    i = !!o && ("boolean" == typeof o || o.capture),
                    s = arguments[1];
                if (!s) return b.apply(this, arguments);
                if (p && !p(b, s, e, arguments)) return;
                const a = Uf[r];
                let u;
                a && (u = a[i ? of : sf]);
                const c = u && e[u];
                if (c)
                    for (let t = 0; t < c.length; t++) {
                        const n = c[t];
                        if (k(n, s)) {
                            if (c.splice(t, 1), n.isRemoved = !0, 0 === c.length && (n.allRemoved = !0, e[u] = null, !i && "string" == typeof r)) {
                                e[af + "ON_PROPERTY" + r] = null
                            }
                            return n.zone.cancelTask(n), v ? e : void 0
                        }
                    }
                return b.apply(this, arguments)
            }, _[s] = function() {
                const e = this || t;
                let r = arguments[0];
                n && n.transferEventName && (r = n.transferEventName(r));
                const o = [],
                    i = Gf(e, y ? y(r) : r);
                for (let t = 0; t < i.length; t++) {
                    const e = i[t];
                    let n = e.originalDelegate ? e.originalDelegate : e.callback;
                    o.push(n)
                }
                return o
            }, _[a] = function() {
                const e = this || t;
                let r = arguments[0];
                if (r) {
                    n && n.transferEventName && (r = n.transferEventName(r));
                    const t = Uf[r];
                    if (t) {
                        const n = t[sf],
                            o = t[ of ],
                            s = e[n],
                            a = e[o];
                        if (s) {
                            const t = s.slice();
                            for (let e = 0; e < t.length; e++) {
                                const n = t[e];
                                let o = n.originalDelegate ? n.originalDelegate : n.callback;
                                this[i].call(this, r, o, n.options)
                            }
                        }
                        if (a) {
                            const t = a.slice();
                            for (let e = 0; e < t.length; e++) {
                                const n = t[e];
                                let o = n.originalDelegate ? n.originalDelegate : n.callback;
                                this[i].call(this, r, o, n.options)
                            }
                        }
                    }
                } else {
                    const t = Object.keys(e);
                    for (let e = 0; e < t.length; e++) {
                        const n = t[e],
                            r = zf.exec(n);
                        let o = r && r[1];
                        o && "removeListener" !== o && this[a].call(this, o)
                    }
                    this[a].call(this, "removeListener")
                }
                if (v) return this
            }, Pf(_[o], T), Pf(_[i], b), S && Pf(_[a], S), E && Pf(_[s], E), !0
        }
        let _ = [];
        for (let t = 0; t < n.length; t++) _[t] = v(n[t], r);
        return _
    }

    function Gf(t, e) {
        if (!e) {
            const n = [];
            for (let r in t) {
                const o = zf.exec(r);
                let i = o && o[1];
                if (i && (!e || i === e)) {
                    const e = t[r];
                    if (e)
                        for (let t = 0; t < e.length; t++) n.push(e[t])
                }
            }
            return n
        }
        let n = Uf[e];
        n || (Zf(e), n = Uf[e]);
        const r = t[n[sf]],
            o = t[n[ of ]];
        return r ? o ? r.concat(o) : r.slice() : o ? o.slice() : []
    }

    function Hf(t, e) {
        const n = t.Event;
        n && n.prototype && e.patchMethod(n.prototype, "stopImmediatePropagation", (t => function(e, n) {
            e[Ff] = !0, t && t.apply(e, n)
        }))
    }

    function Xf(t, e) {
        e.patchMethod(t, "queueMicrotask", (t => function(t, e) {
            Zone.current.scheduleMicroTask("queueMicrotask", e[0])
        }))
    }
    const $f = lf("zoneTask");

    function qf(t, e, n, r) {
        let o = null,
            i = null;
        n += r;
        const s = {};

        function a(e) {
            const n = e.data;
            n.args[0] = function() {
                return e.invoke.apply(this, arguments)
            };
            const r = o.apply(t, n.args);
            return Mf(r) ? n.handleId = r : (n.handle = r, n.isRefreshable = jf(r.refresh)), e
        }

        function u(e) {
            const {
                handle: n,
                handleId: r
            } = e.data;
            return i.call(t, null != n ? n : r)
        }
        o = kf(t, e += r, (n => function(o, i) {
            if (jf(i[0])) {
                var c;
                const t = {
                        isRefreshable: !1,
                        isPeriodic: "Interval" === r,
                        delay: "Timeout" === r || "Interval" === r ? i[1] || 0 : void 0,
                        args: i
                    },
                    n = i[0];
                i[0] = function() {
                    try {
                        return n.apply(this, arguments)
                    } finally {
                        const {
                            handle: e,
                            handleId: n,
                            isPeriodic: r,
                            isRefreshable: o
                        } = t;
                        r || o || (n ? delete s[n] : e && (e[$f] = null))
                    }
                };
                const o = cf(e, i[0], t, a, u);
                if (!o) return o;
                const {
                    handleId: l,
                    handle: f,
                    isRefreshable: p,
                    isPeriodic: h
                } = o.data;
                if (l) s[l] = o;
                else if (f && (f[$f] = o, p && !h)) {
                    const t = f.refresh;
                    f.refresh = function() {
                        const {
                            zone: e,
                            state: n
                        } = o;
                        return "notScheduled" === n ? (o._state = "scheduled", e._updateTaskCount(o, 1)) : "running" === n && (o._state = "scheduling"), t.call(this)
                    }
                }
                return null !== (c = null != f ? f : l) && void 0 !== c ? c : o
            }
            return n.apply(t, i)
        })), i = kf(t, n, (e => function(n, r) {
            var o;
            const i = r[0];
            let a;
            Mf(i) ? (a = s[i], delete s[i]) : (a = null == i ? void 0 : i[$f], a ? i[$f] = null : a = i), null !== (o = a) && void 0 !== o && o.type ? a.cancelFn && a.zone.cancelTask(a) : e.apply(t, r)
        }))
    }

    function Kf(t, e) {
        if (Zone[e.symbol("patchEventTarget")]) return;
        const {
            eventNames: n,
            zoneSymbolEventNames: r,
            TRUE_STR: o,
            FALSE_STR: i,
            ZONE_SYMBOL_PREFIX: s
        } = e.getGlobalObjects();
        for (let t = 0; t < n.length; t++) {
            const e = n[t],
                a = s + (e + i),
                u = s + (e + o);
            r[e] = {}, r[e][i] = a, r[e][o] = u
        }
        const a = t.EventTarget;
        return a && a.prototype ? (e.patchEventTarget(t, e, [a && a.prototype]), !0) : void 0
    }

    function Yf(t, e, n) {
        if (!n || 0 === n.length) return e;
        const r = n.filter((e => e.target === t));
        if (!r || 0 === r.length) return e;
        const o = r[0].ignoreProperties;
        return e.filter((t => -1 === o.indexOf(t)))
    }

    function Qf(t, e, n, r) {
        if (!t) return;
        wf(t, Yf(t, e, n), r)
    }

    function Jf(t) {
        return Object.getOwnPropertyNames(t).filter((t => t.startsWith("on") && t.length > 2)).map((t => t.substring(2)))
    }

    function tp(t, e) {
        if (yf && !Tf) return;
        if (Zone[t.symbol("patchEvents")]) return;
        const n = e.__Zone_ignore_on_properties;
        let r = [];
        if (mf) {
            const t = window;
            r = r.concat(["Document", "SVGElement", "Element", "HTMLElement", "HTMLBodyElement", "HTMLMediaElement", "HTMLFrameSetElement", "HTMLFrameElement", "HTMLIFrameElement", "HTMLMarqueeElement", "Worker"]);
            const e = Nf() ? [{
                target: t,
                ignoreProperties: ["error"]
            }] : [];
            Qf(t, Jf(t), n ? n.concat(e) : n, Yl(t))
        }
        r = r.concat(["XMLHttpRequest", "XMLHttpRequestEventTarget", "IDBIndex", "IDBRequest", "IDBOpenDBRequest", "IDBDatabase", "IDBTransaction", "IDBCursor", "WebSocket"]);
        for (let t = 0; t < r.length; t++) {
            const o = e[r[t]];
            o && o.prototype && Qf(o.prototype, Jf(o.prototype), n)
        }
    }

    function ep(t) {
        t.__load_patch("ZoneAwarePromise", ((t, e, n) => {
            const r = Object.getOwnPropertyDescriptor,
                o = Object.defineProperty;
            const i = n.symbol,
                s = [],
                a = !1 !== t[i("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],
                u = i("Promise"),
                c = i("then"),
                l = "__creationTrace__";
            n.onUnhandledError = t => {
                if (n.showUncaughtError()) {
                    const e = t && t.rejection;
                    e ? console.error("Unhandled Promise rejection:", e instanceof Error ? e.message : e, "; Zone:", t.zone.name, "; Task:", t.task && t.task.source, "; Value:", e, e instanceof Error ? e.stack : void 0) : console.error(t)
                }
            }, n.microtaskDrainDone = () => {
                for (; s.length;) {
                    const t = s.shift();
                    try {
                        t.zone.runGuarded((() => {
                            if (t.throwOriginal) throw t.rejection;
                            throw t
                        }))
                    } catch (t) {
                        p(t)
                    }
                }
            };
            const f = i("unhandledPromiseRejectionHandler");

            function p(t) {
                n.onUnhandledError(t);
                try {
                    const n = e[f];
                    "function" == typeof n && n.call(this, t)
                } catch (t) {}
            }

            function h(t) {
                return t && t.then
            }

            function d(t) {
                return t
            }

            function g(t) {
                return M.reject(t)
            }
            const v = i("state"),
                _ = i("value"),
                y = i("finally"),
                m = i("parentPromiseValue"),
                T = i("parentPromiseState"),
                b = "Promise.then",
                E = null,
                S = !0,
                O = !1,
                w = 0;

            function A(t, e) {
                return n => {
                    try {
                        P(t, e, n)
                    } catch (e) {
                        P(t, !1, e)
                    }
                }
            }
            const L = function() {
                    let t = !1;
                    return function(e) {
                        return function() {
                            t || (t = !0, e.apply(null, arguments))
                        }
                    }
                },
                k = "Promise resolved with itself",
                I = i("currentTaskTrace");

            function P(t, r, i) {
                const u = L();
                if (t === i) throw new TypeError(k);
                if (t[v] === E) {
                    let c = null;
                    try {
                        "object" != typeof i && "function" != typeof i || (c = i && i.then)
                    } catch (e) {
                        return u((() => {
                            P(t, !1, e)
                        }))(), t
                    }
                    if (r !== O && i instanceof M && i.hasOwnProperty(v) && i.hasOwnProperty(_) && i[v] !== E) C(i), P(t, i[v], i[_]);
                    else if (r !== O && "function" == typeof c) try {
                        c.call(i, u(A(t, r)), u(A(t, !1)))
                    } catch (e) {
                        u((() => {
                            P(t, !1, e)
                        }))()
                    } else {
                        t[v] = r;
                        const u = t[_];
                        if (t[_] = i, t[y] === y && r === S && (t[v] = t[T], t[_] = t[m]), r === O && i instanceof Error) {
                            const t = e.currentTask && e.currentTask.data && e.currentTask.data[l];
                            t && o(i, I, {
                                configurable: !0,
                                enumerable: !1,
                                writable: !0,
                                value: t
                            })
                        }
                        for (let e = 0; e < u.length;) N(t, u[e++], u[e++], u[e++], u[e++]);
                        if (0 == u.length && r == O) {
                            t[v] = w;
                            let r = i;
                            try {
                                throw new Error("Uncaught (in promise): " + function(t) {
                                    if (t && t.toString === Object.prototype.toString) {
                                        return (t.constructor && t.constructor.name || "") + ": " + JSON.stringify(t)
                                    }
                                    return t ? t.toString() : Object.prototype.toString.call(t)
                                }(i) + (i && i.stack ? "\n" + i.stack : ""))
                            } catch (t) {
                                r = t
                            }
                            a && (r.throwOriginal = !0), r.rejection = i, r.promise = t, r.zone = e.current, r.task = e.currentTask, s.push(r), n.scheduleMicroTask()
                        }
                    }
                }
                return t
            }
            const R = i("rejectionHandledHandler");

            function C(t) {
                if (t[v] === w) {
                    try {
                        const n = e[R];
                        n && "function" == typeof n && n.call(this, {
                            rejection: t[_],
                            promise: t
                        })
                    } catch (t) {}
                    t[v] = O;
                    for (let e = 0; e < s.length; e++) t === s[e].promise && s.splice(e, 1)
                }
            }

            function N(t, e, n, r, o) {
                C(t);
                const i = t[v],
                    s = i ? "function" == typeof r ? r : d : "function" == typeof o ? o : g;
                e.scheduleMicroTask(b, (() => {
                    try {
                        const r = t[_],
                            o = !!n && y === n[y];
                        o && (n[m] = r, n[T] = i);
                        const a = e.run(s, void 0, o && s !== g && s !== d ? [] : [r]);
                        P(n, !0, a)
                    } catch (t) {
                        P(n, !1, t)
                    }
                }), n)
            }
            const x = function() {},
                j = t.AggregateError;
            class M {
                static toString() {
                    return "function ZoneAwarePromise() { [native code] }"
                }
                static resolve(t) {
                    return t instanceof M ? t : P(new this(null), S, t)
                }
                static reject(t) {
                    return P(new this(null), O, t)
                }
                static withResolvers() {
                    const t = {};
                    return t.promise = new M(((e, n) => {
                        t.resolve = e, t.reject = n
                    })), t
                }
                static any(t) {
                    if (!t || "function" != typeof t[Symbol.iterator]) return Promise.reject(new j([], "All promises were rejected"));
                    const e = [];
                    let n = 0;
                    try {
                        for (let r of t) n++, e.push(M.resolve(r))
                    } catch (t) {
                        return Promise.reject(new j([], "All promises were rejected"))
                    }
                    if (0 === n) return Promise.reject(new j([], "All promises were rejected"));
                    let r = !1;
                    const o = [];
                    return new M(((t, i) => {
                        for (let s = 0; s < e.length; s++) e[s].then((e => {
                            r || (r = !0, t(e))
                        }), (t => {
                            o.push(t), n--, 0 === n && (r = !0, i(new j(o, "All promises were rejected")))
                        }))
                    }))
                }
                static race(t) {
                    let e, n, r = new this(((t, r) => {
                        e = t, n = r
                    }));

                    function o(t) {
                        e(t)
                    }

                    function i(t) {
                        n(t)
                    }
                    for (let e of t) h(e) || (e = this.resolve(e)), e.then(o, i);
                    return r
                }
                static all(t) {
                    return M.allWithCallback(t)
                }
                static allSettled(t) {
                    return (this && this.prototype instanceof M ? this : M).allWithCallback(t, {
                        thenCallback: t => ({
                            status: "fulfilled",
                            value: t
                        }),
                        errorCallback: t => ({
                            status: "rejected",
                            reason: t
                        })
                    })
                }
                static allWithCallback(t, e) {
                    let n, r, o = new this(((t, e) => {
                            n = t, r = e
                        })),
                        i = 2,
                        s = 0;
                    const a = [];
                    for (let o of t) {
                        h(o) || (o = this.resolve(o));
                        const t = s;
                        try {
                            o.then((r => {
                                a[t] = e ? e.thenCallback(r) : r, i--, 0 === i && n(a)
                            }), (o => {
                                e ? (a[t] = e.errorCallback(o), i--, 0 === i && n(a)) : r(o)
                            }))
                        } catch (t) {
                            r(t)
                        }
                        i++, s++
                    }
                    return i -= 2, 0 === i && n(a), o
                }
                constructor(t) {
                    const e = this;
                    if (!(e instanceof M)) throw new Error("Must be an instanceof Promise.");
                    e[v] = E, e[_] = [];
                    try {
                        const n = L();
                        t && t(n(A(e, S)), n(A(e, O)))
                    } catch (t) {
                        P(e, !1, t)
                    }
                }
                get[Symbol.toStringTag]() {
                    return "Promise"
                }
                get[Symbol.species]() {
                    return M
                }
                then(t, n) {
                    var r;
                    let o = null === (r = this.constructor) || void 0 === r ? void 0 : r[Symbol.species];
                    o && "function" == typeof o || (o = this.constructor || M);
                    const i = new o(x),
                        s = e.current;
                    return this[v] == E ? this[_].push(s, i, t, n) : N(this, s, i, t, n), i
                } catch (t) {
                    return this.then(null, t)
                } finally(t) {
                    var n;
                    let r = null === (n = this.constructor) || void 0 === n ? void 0 : n[Symbol.species];
                    r && "function" == typeof r || (r = M);
                    const o = new r(x);
                    o[y] = y;
                    const i = e.current;
                    return this[v] == E ? this[_].push(i, o, t, t) : N(this, i, o, t, t), o
                }
            }
            M.resolve = M.resolve, M.reject = M.reject, M.race = M.race, M.all = M.all;
            const D = t[u] = t.Promise;
            t.Promise = M;
            const B = i("thenPatched");

            function U(t) {
                const e = t.prototype,
                    n = r(e, "then");
                if (n && (!1 === n.writable || !n.configurable)) return;
                const o = e.then;
                e[c] = o, t.prototype.then = function(t, e) {
                    return new M(((t, e) => {
                        o.call(this, t, e)
                    })).then(t, e)
                }, t[B] = !0
            }
            return n.patchThen = U, D && (U(D), kf(t, "fetch", (t => {
                return e = t,
                    function(t, n) {
                        let r = e.apply(t, n);
                        if (r instanceof M) return r;
                        let o = r.constructor;
                        return o[B] || U(o), r
                    };
                var e
            }))), Promise[e.__symbol__("uncaughtPromiseErrors")] = s, M
        }))
    }

    function np(t, e, n, r, o) {
        const i = Zone.__symbol__(r);
        if (e[i]) return;
        const s = e[i] = e[r];
        e[r] = function(i, a, u) {
            return a && a.prototype && o.forEach((function(e) {
                const o = `${n}.${r}::` + e,
                    i = a.prototype;
                try {
                    if (i.hasOwnProperty(e)) {
                        const n = t.ObjectGetOwnPropertyDescriptor(i, e);
                        n && n.value ? (n.value = t.wrapWithCurrentZone(n.value, o), t._redefineProperty(a.prototype, e, n)) : i[e] && (i[e] = t.wrapWithCurrentZone(i[e], o))
                    } else i[e] && (i[e] = t.wrapWithCurrentZone(i[e], o))
                } catch {}
            })), s.call(e, i, a, u)
        }, t.attachOriginToPatched(e[r], s)
    }
    const rp = function() {
        var t;
        const e = globalThis,
            n = !0 === e[$l("forceDuplicateZoneCheck")];
        if (e.Zone && (n || "function" != typeof e.Zone.__symbol__)) throw new Error("Zone already loaded.");
        return null !== (t = e["Zone"]) && void 0 !== t || (e.Zone = function() {
            const t = Xl.performance;

            function e(e) {
                t && t.mark && t.mark(e)
            }

            function n(e, n) {
                t && t.measure && t.measure(e, n)
            }
            e("Zone");
            class r {
                static assertZonePatched() {
                    if (Xl.Promise !== A.ZoneAwarePromise) throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")
                }
                static get root() {
                    let t = r.current;
                    for (; t.parent;) t = t.parent;
                    return t
                }
                static get current() {
                    return k.zone
                }
                static get currentTask() {
                    return I
                }
                static __load_patch(t, o) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (A.hasOwnProperty(t)) {
                        const e = !0 === Xl[$l("forceDuplicateZoneCheck")];
                        if (!i && e) throw Error("Already loaded patch: " + t)
                    } else if (!Xl["__Zone_disable_" + t]) {
                        const i = "Zone:" + t;
                        e(i), A[t] = o(Xl, r, L), n(i, i)
                    }
                }
                get parent() {
                    return this._parent
                }
                get name() {
                    return this._name
                }
                constructor(t, e) {
                    this._parent = t, this._name = e ? e.name || "unnamed" : "<root>", this._properties = e && e.properties || {}, this._zoneDelegate = new i(this, this._parent && this._parent._zoneDelegate, e)
                }
                get(t) {
                    const e = this.getZoneWith(t);
                    if (e) return e._properties[t]
                }
                getZoneWith(t) {
                    let e = this;
                    for (; e;) {
                        if (e._properties.hasOwnProperty(t)) return e;
                        e = e._parent
                    }
                    return null
                }
                fork(t) {
                    if (!t) throw new Error("ZoneSpec required!");
                    return this._zoneDelegate.fork(this, t)
                }
                wrap(t, e) {
                    if ("function" != typeof t) throw new Error("Expecting function got: " + t);
                    const n = this._zoneDelegate.intercept(this, t, e),
                        r = this;
                    return function() {
                        return r.runGuarded(n, this, arguments, e)
                    }
                }
                run(t, e, n, r) {
                    k = {
                        parent: k,
                        zone: this
                    };
                    try {
                        return this._zoneDelegate.invoke(this, t, e, n, r)
                    } finally {
                        k = k.parent
                    }
                }
                runGuarded(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        r = arguments.length > 3 ? arguments[3] : void 0;
                    k = {
                        parent: k,
                        zone: this
                    };
                    try {
                        try {
                            return this._zoneDelegate.invoke(this, t, e, n, r)
                        } catch (t) {
                            if (this._zoneDelegate.handleError(this, t)) throw t
                        }
                    } finally {
                        k = k.parent
                    }
                }
                runTask(t, e, n) {
                    if (t.zone != this) throw new Error("A task can only be run in the zone of creation! (Creation: " + (t.zone || v).name + "; Execution: " + this.name + ")");
                    const r = t,
                        {
                            type: o,
                            data: {
                                isPeriodic: i = !1,
                                isRefreshable: s = !1
                            } = {}
                        } = t;
                    if (t.state === _ && (o === w || o === O)) return;
                    const a = t.state != T;
                    a && r._transitionTo(T, m);
                    const u = I;
                    I = r, k = {
                        parent: k,
                        zone: this
                    };
                    try {
                        o != O || !t.data || i || s || (t.cancelFn = void 0);
                        try {
                            return this._zoneDelegate.invokeTask(this, r, e, n)
                        } catch (t) {
                            if (this._zoneDelegate.handleError(this, t)) throw t
                        }
                    } finally {
                        const e = t.state;
                        if (e !== _ && e !== E)
                            if (o == w || i || s && e === y) a && r._transitionTo(m, T, y);
                            else {
                                const t = r._zoneDelegates;
                                this._updateTaskCount(r, -1), a && r._transitionTo(_, T, _), s && (r._zoneDelegates = t)
                            } k = k.parent, I = u
                    }
                }
                scheduleTask(t) {
                    if (t.zone && t.zone !== this) {
                        let e = this;
                        for (; e;) {
                            if (e === t.zone) throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${t.zone.name}`);
                            e = e.parent
                        }
                    }
                    t._transitionTo(y, _);
                    const e = [];
                    t._zoneDelegates = e, t._zone = this;
                    try {
                        t = this._zoneDelegate.scheduleTask(this, t)
                    } catch (e) {
                        throw t._transitionTo(E, y, _), this._zoneDelegate.handleError(this, e), e
                    }
                    return t._zoneDelegates === e && this._updateTaskCount(t, 1), t.state == y && t._transitionTo(m, y), t
                }
                scheduleMicroTask(t, e, n, r) {
                    return this.scheduleTask(new s(S, t, e, n, r, void 0))
                }
                scheduleMacroTask(t, e, n, r, o) {
                    return this.scheduleTask(new s(O, t, e, n, r, o))
                }
                scheduleEventTask(t, e, n, r, o) {
                    return this.scheduleTask(new s(w, t, e, n, r, o))
                }
                cancelTask(t) {
                    if (t.zone != this) throw new Error("A task can only be cancelled in the zone of creation! (Creation: " + (t.zone || v).name + "; Execution: " + this.name + ")");
                    if (t.state === m || t.state === T) {
                        t._transitionTo(b, m, T);
                        try {
                            this._zoneDelegate.cancelTask(this, t)
                        } catch (e) {
                            throw t._transitionTo(E, b), this._zoneDelegate.handleError(this, e), e
                        }
                        return this._updateTaskCount(t, -1), t._transitionTo(_, b), t.runCount = -1, t
                    }
                }
                _updateTaskCount(t, e) {
                    const n = t._zoneDelegates; - 1 == e && (t._zoneDelegates = null);
                    for (let r = 0; r < n.length; r++) n[r]._updateTaskCount(t.type, e)
                }
            }
            r.__symbol__ = $l;
            const o = {
                name: "",
                onHasTask: (t, e, n, r) => t.hasTask(n, r),
                onScheduleTask: (t, e, n, r) => t.scheduleTask(n, r),
                onInvokeTask: (t, e, n, r, o, i) => t.invokeTask(n, r, o, i),
                onCancelTask: (t, e, n, r) => t.cancelTask(n, r)
            };
            class i {
                get zone() {
                    return this._zone
                }
                constructor(t, e, n) {
                    this._taskCounts = {
                        microTask: 0,
                        macroTask: 0,
                        eventTask: 0
                    }, this._zone = t, this._parentDelegate = e, this._forkZS = n && (n && n.onFork ? n : e._forkZS), this._forkDlgt = n && (n.onFork ? e : e._forkDlgt), this._forkCurrZone = n && (n.onFork ? this._zone : e._forkCurrZone), this._interceptZS = n && (n.onIntercept ? n : e._interceptZS), this._interceptDlgt = n && (n.onIntercept ? e : e._interceptDlgt), this._interceptCurrZone = n && (n.onIntercept ? this._zone : e._interceptCurrZone), this._invokeZS = n && (n.onInvoke ? n : e._invokeZS), this._invokeDlgt = n && (n.onInvoke ? e : e._invokeDlgt), this._invokeCurrZone = n && (n.onInvoke ? this._zone : e._invokeCurrZone), this._handleErrorZS = n && (n.onHandleError ? n : e._handleErrorZS), this._handleErrorDlgt = n && (n.onHandleError ? e : e._handleErrorDlgt), this._handleErrorCurrZone = n && (n.onHandleError ? this._zone : e._handleErrorCurrZone), this._scheduleTaskZS = n && (n.onScheduleTask ? n : e._scheduleTaskZS), this._scheduleTaskDlgt = n && (n.onScheduleTask ? e : e._scheduleTaskDlgt), this._scheduleTaskCurrZone = n && (n.onScheduleTask ? this._zone : e._scheduleTaskCurrZone), this._invokeTaskZS = n && (n.onInvokeTask ? n : e._invokeTaskZS), this._invokeTaskDlgt = n && (n.onInvokeTask ? e : e._invokeTaskDlgt), this._invokeTaskCurrZone = n && (n.onInvokeTask ? this._zone : e._invokeTaskCurrZone), this._cancelTaskZS = n && (n.onCancelTask ? n : e._cancelTaskZS), this._cancelTaskDlgt = n && (n.onCancelTask ? e : e._cancelTaskDlgt), this._cancelTaskCurrZone = n && (n.onCancelTask ? this._zone : e._cancelTaskCurrZone), this._hasTaskZS = null, this._hasTaskDlgt = null, this._hasTaskDlgtOwner = null, this._hasTaskCurrZone = null;
                    const r = n && n.onHasTask,
                        i = e && e._hasTaskZS;
                    (r || i) && (this._hasTaskZS = r ? n : o, this._hasTaskDlgt = e, this._hasTaskDlgtOwner = this, this._hasTaskCurrZone = this._zone, n.onScheduleTask || (this._scheduleTaskZS = o, this._scheduleTaskDlgt = e, this._scheduleTaskCurrZone = this._zone), n.onInvokeTask || (this._invokeTaskZS = o, this._invokeTaskDlgt = e, this._invokeTaskCurrZone = this._zone), n.onCancelTask || (this._cancelTaskZS = o, this._cancelTaskDlgt = e, this._cancelTaskCurrZone = this._zone))
                }
                fork(t, e) {
                    return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, t, e) : new r(t, e)
                }
                intercept(t, e, n) {
                    return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, t, e, n) : e
                }
                invoke(t, e, n, r, o) {
                    return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, t, e, n, r, o) : e.apply(n, r)
                }
                handleError(t, e) {
                    return !this._handleErrorZS || this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, t, e)
                }
                scheduleTask(t, e) {
                    let n = e;
                    if (this._scheduleTaskZS) this._hasTaskZS && n._zoneDelegates.push(this._hasTaskDlgtOwner), n = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, t, e), n || (n = e);
                    else if (e.scheduleFn) e.scheduleFn(e);
                    else {
                        if (e.type != S) throw new Error("Task is missing scheduleFn.");
                        d(e)
                    }
                    return n
                }
                invokeTask(t, e, n, r) {
                    return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, t, e, n, r) : e.callback.apply(n, r)
                }
                cancelTask(t, e) {
                    let n;
                    if (this._cancelTaskZS) n = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, t, e);
                    else {
                        if (!e.cancelFn) throw Error("Task is not cancelable");
                        n = e.cancelFn(e)
                    }
                    return n
                }
                hasTask(t, e) {
                    try {
                        this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, t, e)
                    } catch (e) {
                        this.handleError(t, e)
                    }
                }
                _updateTaskCount(t, e) {
                    const n = this._taskCounts,
                        r = n[t],
                        o = n[t] = r + e;
                    if (o < 0) throw new Error("More tasks executed then were scheduled.");
                    if (0 == r || 0 == o) {
                        const e = {
                            microTask: n.microTask > 0,
                            macroTask: n.macroTask > 0,
                            eventTask: n.eventTask > 0,
                            change: t
                        };
                        this.hasTask(this._zone, e)
                    }
                }
            }
            class s {
                constructor(t, e, n, r, o, i) {
                    if (this._zone = null, this.runCount = 0, this._zoneDelegates = null, this._state = "notScheduled", this.type = t, this.source = e, this.data = r, this.scheduleFn = o, this.cancelFn = i, !n) throw new Error("callback is not defined");
                    this.callback = n;
                    const a = this;
                    t === w && r && r.useG ? this.invoke = s.invokeTask : this.invoke = function() {
                        return s.invokeTask.call(Xl, a, this, arguments)
                    }
                }
                static invokeTask(t, e, n) {
                    t || (t = this), P++;
                    try {
                        return t.runCount++, t.zone.runTask(t, e, n)
                    } finally {
                        1 == P && g(), P--
                    }
                }
                get zone() {
                    return this._zone
                }
                get state() {
                    return this._state
                }
                cancelScheduleRequest() {
                    this._transitionTo(_, y)
                }
                _transitionTo(t, e, n) {
                    if (this._state !== e && this._state !== n) throw new Error(`${this.type} '${this.source}': can not transition to '${t}', expecting state '${e}'${n?" or '"+n+"'":""}, was '${this._state}'.`);
                    this._state = t, t == _ && (this._zoneDelegates = null)
                }
                toString() {
                    return this.data && void 0 !== this.data.handleId ? this.data.handleId.toString() : Object.prototype.toString.call(this)
                }
                toJSON() {
                    return {
                        type: this.type,
                        state: this.state,
                        source: this.source,
                        zone: this.zone.name,
                        runCount: this.runCount
                    }
                }
            }
            const a = $l("setTimeout"),
                u = $l("Promise"),
                c = $l("then");
            let l, f = [],
                p = !1;

            function h(t) {
                if (l || Xl[u] && (l = Xl[u].resolve(0)), l) {
                    let e = l[c];
                    e || (e = l.then), e.call(l, t)
                } else Xl[a](t, 0)
            }

            function d(t) {
                0 === P && 0 === f.length && h(g), t && f.push(t)
            }

            function g() {
                if (!p) {
                    for (p = !0; f.length;) {
                        const t = f;
                        f = [];
                        for (let e = 0; e < t.length; e++) {
                            const n = t[e];
                            try {
                                n.zone.runTask(n, null, null)
                            } catch (t) {
                                L.onUnhandledError(t)
                            }
                        }
                    }
                    L.microtaskDrainDone(), p = !1
                }
            }
            const v = {
                    name: "NO ZONE"
                },
                _ = "notScheduled",
                y = "scheduling",
                m = "scheduled",
                T = "running",
                b = "canceling",
                E = "unknown",
                S = "microTask",
                O = "macroTask",
                w = "eventTask",
                A = {},
                L = {
                    symbol: $l,
                    currentZoneFrame: () => k,
                    onUnhandledError: R,
                    microtaskDrainDone: R,
                    scheduleMicroTask: d,
                    showUncaughtError: () => !r[$l("ignoreConsoleErrorUncaughtError")],
                    patchEventTarget: () => [],
                    patchOnProperties: R,
                    patchMethod: () => R,
                    bindArguments: () => [],
                    patchThen: () => R,
                    patchMacroTask: () => R,
                    patchEventPrototype: () => R,
                    isIEOrEdge: () => !1,
                    getGlobalObjects: () => {},
                    ObjectDefineProperty: () => R,
                    ObjectGetOwnPropertyDescriptor: () => {},
                    ObjectCreate: () => {},
                    ArraySlice: () => [],
                    patchClass: () => R,
                    wrapWithCurrentZone: () => R,
                    filterProperties: () => [],
                    attachOriginToPatched: () => R,
                    _redefineProperty: () => R,
                    patchCallbacks: () => R,
                    nativeScheduleMicroTask: h
                };
            let k = {
                    parent: null,
                    zone: new r(null, null)
                },
                I = null,
                P = 0;

            function R() {}
            return n("Zone", "Zone"), r
        }()), e.Zone
    }();
    ! function(t) {
        ep(t),
            function(t) {
                t.__load_patch("toString", (t => {
                    const e = Function.prototype.toString,
                        n = lf("OriginalDelegate"),
                        r = lf("Promise"),
                        o = lf("Error"),
                        i = function() {
                            if ("function" == typeof this) {
                                const i = this[n];
                                if (i) return "function" == typeof i ? e.call(i) : Object.prototype.toString.call(i);
                                if (this === Promise) {
                                    const n = t[r];
                                    if (n) return e.call(n)
                                }
                                if (this === Error) {
                                    const n = t[o];
                                    if (n) return e.call(n)
                                }
                            }
                            return e.call(this)
                        };
                    i[n] = e, Function.prototype.toString = i;
                    const s = Object.prototype.toString;
                    Object.prototype.toString = function() {
                        return "function" == typeof Promise && this instanceof Promise ? "[object Promise]" : s.call(this)
                    }
                }))
            }(t),
            function(t) {
                t.__load_patch("util", ((t, e, n) => {
                    const r = Jf(t);
                    n.patchOnProperties = wf, n.patchMethod = kf, n.bindArguments = gf, n.patchMacroTask = If;
                    const o = e.__symbol__("BLACK_LISTED_EVENTS"),
                        i = e.__symbol__("UNPATCHED_EVENTS");
                    t[i] && (t[o] = t[i]), t[o] && (e[o] = e[i] = t[o]), n.patchEventPrototype = Hf, n.patchEventTarget = Vf, n.isIEOrEdge = xf, n.ObjectDefineProperty = Kl, n.ObjectGetOwnPropertyDescriptor = ql, n.ObjectCreate = Ql, n.ArraySlice = Jl, n.patchClass = Lf, n.wrapWithCurrentZone = uf, n.filterProperties = Yf, n.attachOriginToPatched = Pf, n._redefineProperty = Object.defineProperty, n.patchCallbacks = np, n.getGlobalObjects = () => ({
                        globalSources: Wf,
                        zoneSymbolEventNames: Uf,
                        eventNames: r,
                        isBrowser: mf,
                        isMix: Tf,
                        isNode: yf,
                        TRUE_STR: of ,
                        FALSE_STR: sf,
                        ZONE_SYMBOL_PREFIX: af,
                        ADD_EVENT_LISTENER_STR: tf,
                        REMOVE_EVENT_LISTENER_STR: ef
                    })
                }))
            }(t)
    }(rp),
    function(t) {
        t.__load_patch("legacy", (e => {
            const n = e[t.__symbol__("legacyPatch")];
            n && n()
        })), t.__load_patch("timers", (t => {
            const e = "set",
                n = "clear";
            qf(t, e, n, "Timeout"), qf(t, e, n, "Interval"), qf(t, e, n, "Immediate")
        })), t.__load_patch("requestAnimationFrame", (t => {
            qf(t, "request", "cancel", "AnimationFrame"), qf(t, "mozRequest", "mozCancel", "AnimationFrame"), qf(t, "webkitRequest", "webkitCancel", "AnimationFrame")
        })), t.__load_patch("blocking", ((t, e) => {
            const n = ["alert", "prompt", "confirm"];
            for (let r = 0; r < n.length; r++) {
                kf(t, n[r], ((n, r, o) => function(r, i) {
                    return e.current.run(n, t, i, o)
                }))
            }
        })), t.__load_patch("EventTarget", ((t, e, n) => {
            ! function(t, e) {
                e.patchEventPrototype(t, e)
            }(t, n), Kf(t, n);
            const r = t.XMLHttpRequestEventTarget;
            r && r.prototype && n.patchEventTarget(t, n, [r.prototype])
        })), t.__load_patch("MutationObserver", ((t, e, n) => {
            Lf("MutationObserver"), Lf("WebKitMutationObserver")
        })), t.__load_patch("IntersectionObserver", ((t, e, n) => {
            Lf("IntersectionObserver")
        })), t.__load_patch("FileReader", ((t, e, n) => {
            Lf("FileReader")
        })), t.__load_patch("on_property", ((t, e, n) => {
            tp(n, t)
        })), t.__load_patch("customElements", ((t, e, n) => {
            ! function(t, e) {
                const {
                    isBrowser: n,
                    isMix: r
                } = e.getGlobalObjects();
                if (!n && !r || !t.customElements || !("customElements" in t)) return;
                e.patchCallbacks(e, t.customElements, "customElements", "define", ["connectedCallback", "disconnectedCallback", "adoptedCallback", "attributeChangedCallback", "formAssociatedCallback", "formDisabledCallback", "formResetCallback", "formStateRestoreCallback"])
            }(t, n)
        })), t.__load_patch("XHR", ((t, e) => {
            ! function(t) {
                const u = t.XMLHttpRequest;
                if (!u) return;
                const c = u.prototype;
                let l = c[nf],
                    f = c[rf];
                if (!l) {
                    const e = t.XMLHttpRequestEventTarget;
                    if (e) {
                        const t = e.prototype;
                        l = t[nf], f = t[rf]
                    }
                }
                const p = "readystatechange",
                    h = "scheduled";

                function d(t) {
                    const r = t.data,
                        s = r.target;
                    s[i] = !1, s[a] = !1;
                    const u = s[o];
                    l || (l = s[nf], f = s[rf]), u && f.call(s, p, u);
                    const c = s[o] = () => {
                        if (s.readyState === s.DONE)
                            if (!r.aborted && s[i] && t.state === h) {
                                const n = s[e.__symbol__("loadfalse")];
                                if (0 !== s.status && n && n.length > 0) {
                                    const o = t.invoke;
                                    t.invoke = function() {
                                        const n = s[e.__symbol__("loadfalse")];
                                        for (let e = 0; e < n.length; e++) n[e] === t && n.splice(e, 1);
                                        r.aborted || t.state !== h || o.call(t)
                                    }, n.push(t)
                                } else t.invoke()
                            } else r.aborted || !1 !== s[i] || (s[a] = !0)
                    };
                    l.call(s, p, c);
                    return s[n] || (s[n] = t), T.apply(s, r.args), s[i] = !0, t
                }

                function g() {}

                function v(t) {
                    const e = t.data;
                    return e.aborted = !0, b.apply(e.target, e.args)
                }
                const _ = kf(c, "open", (() => function(t, e) {
                        return t[r] = 0 == e[2], t[s] = e[1], _.apply(t, e)
                    })),
                    y = lf("fetchTaskAborting"),
                    m = lf("fetchTaskScheduling"),
                    T = kf(c, "send", (() => function(t, n) {
                        if (!0 === e.current[m]) return T.apply(t, n);
                        if (t[r]) return T.apply(t, n); {
                            const e = {
                                    target: t,
                                    url: t[s],
                                    isPeriodic: !1,
                                    args: n,
                                    aborted: !1
                                },
                                r = cf("XMLHttpRequest.send", g, e, d, v);
                            t && !0 === t[a] && !e.aborted && r.state === h && r.invoke()
                        }
                    })),
                    b = kf(c, "abort", (() => function(t, r) {
                        const o = t[n];
                        if (o && "string" == typeof o.type) {
                            if (null == o.cancelFn || o.data && o.data.aborted) return;
                            o.zone.cancelTask(o)
                        } else if (!0 === e.current[y]) return b.apply(t, r)
                    }))
            }(t);
            const n = lf("xhrTask"),
                r = lf("xhrSync"),
                o = lf("xhrListener"),
                i = lf("xhrScheduled"),
                s = lf("xhrURL"),
                a = lf("xhrErrorBeforeScheduled")
        })), t.__load_patch("geolocation", (t => {
            t.navigator && t.navigator.geolocation && function(t, e) {
                const n = t.constructor.name;
                for (let r = 0; r < e.length; r++) {
                    const o = e[r],
                        i = t[o];
                    if (i) {
                        if (!vf(ql(t, o))) continue;
                        t[o] = (t => {
                            const e = function() {
                                return t.apply(this, gf(arguments, n + "." + o))
                            };
                            return Pf(e, t), e
                        })(i)
                    }
                }
            }(t.navigator.geolocation, ["getCurrentPosition", "watchPosition"])
        })), t.__load_patch("PromiseRejectionEvent", ((t, e) => {
            function n(e) {
                return function(n) {
                    Gf(t, e).forEach((r => {
                        const o = t.PromiseRejectionEvent;
                        if (o) {
                            const t = new o(e, {
                                promise: n.promise,
                                reason: n.rejection
                            });
                            r.invoke(t)
                        }
                    }))
                }
            }
            t.PromiseRejectionEvent && (e[lf("unhandledPromiseRejectionHandler")] = n("unhandledrejection"), e[lf("rejectionHandledHandler")] = n("rejectionhandled"))
        })), t.__load_patch("queueMicrotask", ((t, e, n) => {
            Xf(t, n)
        }))
    }(rp);
    var op = function() {
            function t() {}
            return t.prototype.emit = function(t) {}, t
        }(),
        ip = new(function() {
            function t() {}
            return t.prototype.getLogger = function(t, e, n) {
                return new op
            }, t
        }()),
        sp = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : "object" == typeof window ? window : "object" == typeof global ? global : {},
        ap = Symbol.for("io.opentelemetry.js.api.logs"),
        up = sp;
    var cp = function() {
            function t() {}
            return t.getInstance = function() {
                return this._instance || (this._instance = new t), this._instance
            }, t.prototype.setGlobalLoggerProvider = function(t) {
                return up[ap] ? this.getLoggerProvider() : (up[ap] = (e = 1, n = t, r = ip, function(t) {
                    return t === e ? n : r
                }), t);
                var e, n, r
            }, t.prototype.getLoggerProvider = function() {
                var t, e;
                return null !== (e = null === (t = up[ap]) || void 0 === t ? void 0 : t.call(up, 1)) && void 0 !== e ? e : ip
            }, t.prototype.getLogger = function(t, e, n) {
                return this.getLoggerProvider().getLogger(t, e, n)
            }, t.prototype.disable = function() {
                delete up[ap]
            }, t
        }(),
        lp = cp.getInstance();

    function fp(t) {
        return "function" == typeof t
    }
    var pp = console.error.bind(console);

    function hp(t, e, n) {
        var r = !!t[e] && t.propertyIsEnumerable(e);
        Object.defineProperty(t, e, {
            configurable: !0,
            enumerable: r,
            writable: !0,
            value: n
        })
    }

    function dp(t) {
        t && t.logger && (fp(t.logger) ? pp = t.logger : pp("new logger isn't a function, not replacing"))
    }

    function gp(t, e, n) {
        if (t && t[e]) {
            if (!n) return pp("no wrapper function"), void pp((new Error).stack);
            if (fp(t[e]) && fp(n)) {
                var r = t[e],
                    o = n(r, e);
                return hp(o, "__original", r), hp(o, "__unwrap", (function() {
                    t[e] === o && hp(t, e, r)
                })), hp(o, "__wrapped", !0), hp(t, e, o), o
            }
            pp("original object and wrapper must be functions")
        } else pp("no original function " + e + " to wrap")
    }

    function vp(t, e) {
        return t && t[e] ? t[e].__unwrap ? t[e].__unwrap() : void pp("no original to unwrap to -- has " + e + " already been unwrapped?") : (pp("no function to unwrap."), void pp((new Error).stack))
    }
    dp.wrap = gp, dp.massWrap = function(t, e, n) {
        if (!t) return pp("must provide one or more modules to patch"), void pp((new Error).stack);
        Array.isArray(t) || (t = [t]), e && Array.isArray(e) ? t.forEach((function(t) {
            e.forEach((function(e) {
                gp(t, e, n)
            }))
        })) : pp("must provide one or more functions to wrap on modules")
    }, dp.unwrap = vp, dp.massUnwrap = function(t, e) {
        if (!t) return pp("must provide one or more modules to patch"), void pp((new Error).stack);
        Array.isArray(t) || (t = [t]), e && Array.isArray(e) ? t.forEach((function(t) {
            e.forEach((function(e) {
                vp(t, e)
            }))
        })) : pp("must provide one or more functions to unwrap on modules")
    };
    var _p = dp,
        yp = function() {
            return yp = Object.assign || function(t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }, yp.apply(this, arguments)
        },
        mp = function() {
            function t(t, e, n) {
                this.instrumentationName = t, this.instrumentationVersion = e, this._wrap = _p.wrap, this._unwrap = _p.unwrap, this._massWrap = _p.massWrap, this._massUnwrap = _p.massUnwrap, this._config = yp({
                    enabled: !0
                }, n), this._diag = Mt.createComponentLogger({
                    namespace: t
                }), this._tracer = Yt.getTracer(t, e), this._meter = Ut.getMeter(t, e), this._logger = lp.getLogger(t, e), this._updateMetricInstruments()
            }
            return Object.defineProperty(t.prototype, "meter", {
                get: function() {
                    return this._meter
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.setMeterProvider = function(t) {
                this._meter = t.getMeter(this.instrumentationName, this.instrumentationVersion), this._updateMetricInstruments()
            }, Object.defineProperty(t.prototype, "logger", {
                get: function() {
                    return this._logger
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.setLoggerProvider = function(t) {
                this._logger = t.getLogger(this.instrumentationName, this.instrumentationVersion)
            }, t.prototype.getModuleDefinitions = function() {
                var t, e = null !== (t = this.init()) && void 0 !== t ? t : [];
                return Array.isArray(e) ? e : [e]
            }, t.prototype._updateMetricInstruments = function() {}, t.prototype.getConfig = function() {
                return this._config
            }, t.prototype.setConfig = function(t) {
                this._config = yp({}, t)
            }, t.prototype.setTracerProvider = function(t) {
                this._tracer = t.getTracer(this.instrumentationName, this.instrumentationVersion)
            }, Object.defineProperty(t.prototype, "tracer", {
                get: function() {
                    return this._tracer
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype._runSpanCustomizationHook = function(t, e, n, r) {
                if (t) try {
                    t(n, r)
                } catch (t) {
                    this._diag.error("Error running span customization hook due to exception in handler", {
                        triggerName: e
                    }, t)
                }
            }, t
        }(),
        Tp = function() {
            var t = function(e, n) {
                return t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                }, t(e, n)
            };
            return function(e, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                function r() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }(),
        bp = function(t) {
            function e(e, n, r) {
                var o = t.call(this, e, n, r) || this;
                return o._config.enabled && o.enable(), o
            }
            return Tp(e, t), e
        }(mp);
    var Ep, Sp = function(t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                n = e && t[e],
                r = 0;
            if (n) return n.call(t);
            if (t && "number" == typeof t.length) return {
                next: function() {
                    return t && r >= t.length && (t = void 0), {
                        value: t && t[r++],
                        done: !t
                    }
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        Op = function(t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n) return t;
            var r, o, i = n.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(r = i.next()).done;) s.push(r.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o) throw o.error
                }
            }
            return s
        },
        wp = function(t, e, n) {
            if (n || 2 === arguments.length)
                for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
            return t.concat(r || Array.prototype.slice.call(e))
        },
        Ap = function() {
            function t(t, e, n, r, o, i, s, a, u, c) {
                void 0 === s && (s = []), this.attributes = {}, this.links = [], this.events = [], this._droppedAttributesCount = 0, this._droppedEventsCount = 0, this._droppedLinksCount = 0, this.status = {
                    code: Pt.UNSET
                }, this.endTime = [0, 0], this._ended = !1, this._duration = [-1, -1], this.name = n, this._spanContext = r, this.parentSpanId = i, this.kind = o, this.links = s;
                var l = Date.now();
                this._performanceStartTime = Ce.now(), this._performanceOffset = l - (this._performanceStartTime + Ze()), this._startTimeProvided = null != a, this.startTime = this._getTime(null != a ? a : l), this.resource = t.resource, this.instrumentationLibrary = t.instrumentationLibrary, this._spanLimits = t.getSpanLimits(), this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit || 0, null != c && this.setAttributes(c), this._spanProcessor = t.getActiveSpanProcessor(), this._spanProcessor.onStart(this, e)
            }
            return t.prototype.spanContext = function() {
                return this._spanContext
            }, t.prototype.setAttribute = function(t, e) {
                return null == e || this._isSpanEnded() ? this : 0 === t.length ? (Mt.warn("Invalid attribute key: " + t), this) : ue(e) ? Object.keys(this.attributes).length >= this._spanLimits.attributeCountLimit && !Object.prototype.hasOwnProperty.call(this.attributes, t) ? (this._droppedAttributesCount++, this) : (this.attributes[t] = this._truncateToSize(e), this) : (Mt.warn("Invalid attribute value set for key: " + t), this)
            }, t.prototype.setAttributes = function(t) {
                var e, n;
                try {
                    for (var r = Sp(Object.entries(t)), o = r.next(); !o.done; o = r.next()) {
                        var i = Op(o.value, 2),
                            s = i[0],
                            a = i[1];
                        this.setAttribute(s, a)
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        o && !o.done && (n = r.return) && n.call(r)
                    } finally {
                        if (e) throw e.error
                    }
                }
                return this
            }, t.prototype.addEvent = function(t, e, n) {
                if (this._isSpanEnded()) return this;
                if (0 === this._spanLimits.eventCountLimit) return Mt.warn("No events allowed."), this._droppedEventsCount++, this;
                this.events.length >= this._spanLimits.eventCountLimit && (0 === this._droppedEventsCount && Mt.debug("Dropping extra events."), this.events.shift(), this._droppedEventsCount++), $e(e) && ($e(n) || (n = e), e = void 0);
                var r = se(e);
                return this.events.push({
                    name: t,
                    attributes: r,
                    time: this._getTime(n),
                    droppedAttributesCount: 0
                }), this
            }, t.prototype.addLink = function(t) {
                return this.links.push(t), this
            }, t.prototype.addLinks = function(t) {
                var e;
                return (e = this.links).push.apply(e, wp([], Op(t), !1)), this
            }, t.prototype.setStatus = function(t) {
                return this._isSpanEnded() || (this.status = t), this
            }, t.prototype.updateName = function(t) {
                return this._isSpanEnded() || (this.name = t), this
            }, t.prototype.end = function(t) {
                this._isSpanEnded() ? Mt.error(this.name + " " + this._spanContext.traceId + "-" + this._spanContext.spanId + " - You can only call end() on a span once.") : (this._ended = !0, this.endTime = this._getTime(t), this._duration = function(t, e) {
                    var n = e[0] - t[0],
                        r = e[1] - t[1];
                    return r < 0 && (n -= 1, r += ze), [n, r]
                }(this.startTime, this.endTime), this._duration[0] < 0 && (Mt.warn("Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.", this.startTime, this.endTime), this.endTime = this.startTime.slice(), this._duration = [0, 0]), this._droppedEventsCount > 0 && Mt.warn("Dropped " + this._droppedEventsCount + " events because eventCountLimit reached"), this._spanProcessor.onEnd(this))
            }, t.prototype._getTime = function(t) {
                if ("number" == typeof t && t < Ce.now()) return Ve(t + this._performanceOffset);
                if ("number" == typeof t) return Fe(t);
                if (t instanceof Date) return Fe(t.getTime());
                if (Xe(t)) return t;
                if (this._startTimeProvided) return Fe(Date.now());
                var e = Ce.now() - this._performanceStartTime;
                return qe(this.startTime, Fe(e))
            }, t.prototype.isRecording = function() {
                return !1 === this._ended
            }, t.prototype.recordException = function(t, e) {
                var n = {};
                "string" == typeof t ? n[xe] = t : t && (t.code ? n[Ne] = t.code.toString() : t.name && (n[Ne] = t.name), t.message && (n[xe] = t.message), t.stack && (n["exception.stacktrace"] = t.stack)), n[Ne] || n[xe] ? this.addEvent("exception", n, e) : Mt.warn("Failed to record an exception " + t)
            }, Object.defineProperty(t.prototype, "duration", {
                get: function() {
                    return this._duration
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "ended", {
                get: function() {
                    return this._ended
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "droppedAttributesCount", {
                get: function() {
                    return this._droppedAttributesCount
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "droppedEventsCount", {
                get: function() {
                    return this._droppedEventsCount
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "droppedLinksCount", {
                get: function() {
                    return this._droppedLinksCount
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype._isSpanEnded = function() {
                return this._ended && Mt.warn("Can not execute the operation on ended Span {traceId: " + this._spanContext.traceId + ", spanId: " + this._spanContext.spanId + "}"), this._ended
            }, t.prototype._truncateToLimitUtil = function(t, e) {
                return t.length <= e ? t : t.substr(0, e)
            }, t.prototype._truncateToSize = function(t) {
                var e = this,
                    n = this._attributeValueLengthLimit;
                return n <= 0 ? (Mt.warn("Attribute value limit must be positive, got " + n), t) : "string" == typeof t ? this._truncateToLimitUtil(t, n) : Array.isArray(t) ? t.map((function(t) {
                    return "string" == typeof t ? e._truncateToLimitUtil(t, n) : t
                })) : t
            }, t
        }();
    ! function(t) {
        t[t.NOT_RECORD = 0] = "NOT_RECORD", t[t.RECORD = 1] = "RECORD", t[t.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED"
    }(Ep || (Ep = {}));
    var Lp = function() {
            function t() {}
            return t.prototype.shouldSample = function() {
                return {
                    decision: Ep.NOT_RECORD
                }
            }, t.prototype.toString = function() {
                return "AlwaysOffSampler"
            }, t
        }(),
        kp = function() {
            function t() {}
            return t.prototype.shouldSample = function() {
                return {
                    decision: Ep.RECORD_AND_SAMPLED
                }
            }, t.prototype.toString = function() {
                return "AlwaysOnSampler"
            }, t
        }(),
        Ip = function() {
            function t(t) {
                var e, n, r, o;
                this._root = t.root, this._root || (pe(new Error("ParentBasedSampler must have a root sampler configured")), this._root = new kp), this._remoteParentSampled = null !== (e = t.remoteParentSampled) && void 0 !== e ? e : new kp, this._remoteParentNotSampled = null !== (n = t.remoteParentNotSampled) && void 0 !== n ? n : new Lp, this._localParentSampled = null !== (r = t.localParentSampled) && void 0 !== r ? r : new kp, this._localParentNotSampled = null !== (o = t.localParentNotSampled) && void 0 !== o ? o : new Lp
            }
            return t.prototype.shouldSample = function(t, e, n, r, o, i) {
                var s = Yt.getSpanContext(t);
                return s && Ot(s) ? s.isRemote ? s.traceFlags & C.SAMPLED ? this._remoteParentSampled.shouldSample(t, e, n, r, o, i) : this._remoteParentNotSampled.shouldSample(t, e, n, r, o, i) : s.traceFlags & C.SAMPLED ? this._localParentSampled.shouldSample(t, e, n, r, o, i) : this._localParentNotSampled.shouldSample(t, e, n, r, o, i) : this._root.shouldSample(t, e, n, r, o, i)
            }, t.prototype.toString = function() {
                return "ParentBased{root=" + this._root.toString() + ", remoteParentSampled=" + this._remoteParentSampled.toString() + ", remoteParentNotSampled=" + this._remoteParentNotSampled.toString() + ", localParentSampled=" + this._localParentSampled.toString() + ", localParentNotSampled=" + this._localParentNotSampled.toString() + "}"
            }, t
        }(),
        Pp = function() {
            function t(t) {
                void 0 === t && (t = 0), this._ratio = t, this._ratio = this._normalize(t), this._upperBound = Math.floor(4294967295 * this._ratio)
            }
            return t.prototype.shouldSample = function(t, e) {
                return {
                    decision: St(e) && this._accumulate(e) < this._upperBound ? Ep.RECORD_AND_SAMPLED : Ep.NOT_RECORD
                }
            }, t.prototype.toString = function() {
                return "TraceIdRatioBased{" + this._ratio + "}"
            }, t.prototype._normalize = function(t) {
                return "number" != typeof t || isNaN(t) ? 0 : t >= 1 ? 1 : t <= 0 ? 0 : t
            }, t.prototype._accumulate = function(t) {
                for (var e = 0, n = 0; n < t.length / 8; n++) {
                    var r = 8 * n;
                    e = (e ^ parseInt(t.slice(r, r + 8), 16)) >>> 0
                }
                return e
            }, t
        }(),
        Rp = Pe(),
        Cp = le.AlwaysOn,
        Np = 1;

    function xp() {
        return {
            sampler: jp(Rp),
            forceFlushTimeoutMillis: 3e4,
            generalLimits: {
                attributeValueLengthLimit: Pe().OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT,
                attributeCountLimit: Pe().OTEL_ATTRIBUTE_COUNT_LIMIT
            },
            spanLimits: {
                attributeValueLengthLimit: Pe().OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT,
                attributeCountLimit: Pe().OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT,
                linkCountLimit: Pe().OTEL_SPAN_LINK_COUNT_LIMIT,
                eventCountLimit: Pe().OTEL_SPAN_EVENT_COUNT_LIMIT,
                attributePerEventCountLimit: Pe().OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT,
                attributePerLinkCountLimit: Pe().OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT
            }
        }
    }

    function jp(t) {
        switch (void 0 === t && (t = Pe()), t.OTEL_TRACES_SAMPLER) {
            case le.AlwaysOn:
                return new kp;
            case le.AlwaysOff:
                return new Lp;
            case le.ParentBasedAlwaysOn:
                return new Ip({
                    root: new kp
                });
            case le.ParentBasedAlwaysOff:
                return new Ip({
                    root: new Lp
                });
            case le.TraceIdRatio:
                return new Pp(Mp(t));
            case le.ParentBasedTraceIdRatio:
                return new Ip({
                    root: new Pp(Mp(t))
                });
            default:
                return Mt.error('OTEL_TRACES_SAMPLER value "' + t.OTEL_TRACES_SAMPLER + " invalid, defaulting to " + Cp + '".'), new kp
        }
    }

    function Mp(t) {
        if (void 0 === t.OTEL_TRACES_SAMPLER_ARG || "" === t.OTEL_TRACES_SAMPLER_ARG) return Mt.error("OTEL_TRACES_SAMPLER_ARG is blank, defaulting to " + Np + "."), Np;
        var e = Number(t.OTEL_TRACES_SAMPLER_ARG);
        return isNaN(e) ? (Mt.error("OTEL_TRACES_SAMPLER_ARG=" + t.OTEL_TRACES_SAMPLER_ARG + " was given, but it is invalid, defaulting to " + Np + "."), Np) : e < 0 || e > 1 ? (Mt.error("OTEL_TRACES_SAMPLER_ARG=" + t.OTEL_TRACES_SAMPLER_ARG + " was given, but it is out of range ([0..1]), defaulting to " + Np + "."), Np) : e
    }

    function Dp(t) {
        var e, n, r, o, i, s, a, u, c, l, f, p, h = Object.assign({}, t.spanLimits),
            d = ke(Ie);
        return h.attributeCountLimit = null !== (s = null !== (i = null !== (o = null !== (n = null === (e = t.spanLimits) || void 0 === e ? void 0 : e.attributeCountLimit) && void 0 !== n ? n : null === (r = t.generalLimits) || void 0 === r ? void 0 : r.attributeCountLimit) && void 0 !== o ? o : d.OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT) && void 0 !== i ? i : d.OTEL_ATTRIBUTE_COUNT_LIMIT) && void 0 !== s ? s : be, h.attributeValueLengthLimit = null !== (p = null !== (f = null !== (l = null !== (u = null === (a = t.spanLimits) || void 0 === a ? void 0 : a.attributeValueLengthLimit) && void 0 !== u ? u : null === (c = t.generalLimits) || void 0 === c ? void 0 : c.attributeValueLengthLimit) && void 0 !== l ? l : d.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT) && void 0 !== f ? f : d.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT) && void 0 !== p ? p : Te, Object.assign({}, t, {
            spanLimits: h
        })
    }
    var Bp = function() {
            function t(t, e) {
                this._exporter = t, this._isExporting = !1, this._finishedSpans = [], this._droppedSpansCount = 0;
                var n = Pe();
                this._maxExportBatchSize = "number" == typeof(null == e ? void 0 : e.maxExportBatchSize) ? e.maxExportBatchSize : n.OTEL_BSP_MAX_EXPORT_BATCH_SIZE, this._maxQueueSize = "number" == typeof(null == e ? void 0 : e.maxQueueSize) ? e.maxQueueSize : n.OTEL_BSP_MAX_QUEUE_SIZE, this._scheduledDelayMillis = "number" == typeof(null == e ? void 0 : e.scheduledDelayMillis) ? e.scheduledDelayMillis : n.OTEL_BSP_SCHEDULE_DELAY, this._exportTimeoutMillis = "number" == typeof(null == e ? void 0 : e.exportTimeoutMillis) ? e.exportTimeoutMillis : n.OTEL_BSP_EXPORT_TIMEOUT, this._shutdownOnce = new xn(this._shutdown, this), this._maxExportBatchSize > this._maxQueueSize && (Mt.warn("BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize"), this._maxExportBatchSize = this._maxQueueSize)
            }
            return t.prototype.forceFlush = function() {
                return this._shutdownOnce.isCalled ? this._shutdownOnce.promise : this._flushAll()
            }, t.prototype.onStart = function(t, e) {}, t.prototype.onEnd = function(t) {
                this._shutdownOnce.isCalled || t.spanContext().traceFlags & C.SAMPLED && this._addToBuffer(t)
            }, t.prototype.shutdown = function() {
                return this._shutdownOnce.call()
            }, t.prototype._shutdown = function() {
                var t = this;
                return Promise.resolve().then((function() {
                    return t.onShutdown()
                })).then((function() {
                    return t._flushAll()
                })).then((function() {
                    return t._exporter.shutdown()
                }))
            }, t.prototype._addToBuffer = function(t) {
                if (this._finishedSpans.length >= this._maxQueueSize) return 0 === this._droppedSpansCount && Mt.debug("maxQueueSize reached, dropping spans"), void this._droppedSpansCount++;
                this._droppedSpansCount > 0 && (Mt.warn("Dropped " + this._droppedSpansCount + " spans because maxQueueSize reached"), this._droppedSpansCount = 0), this._finishedSpans.push(t), this._maybeStartTimer()
            }, t.prototype._flushAll = function() {
                var t = this;
                return new Promise((function(e, n) {
                    for (var r = [], o = 0, i = Math.ceil(t._finishedSpans.length / t._maxExportBatchSize); o < i; o++) r.push(t._flushOneBatch());
                    Promise.all(r).then((function() {
                        e()
                    })).catch(n)
                }))
            }, t.prototype._flushOneBatch = function() {
                var t = this;
                return this._clearTimer(), 0 === this._finishedSpans.length ? Promise.resolve() : new Promise((function(e, n) {
                    var r = setTimeout((function() {
                        n(new Error("Timeout"))
                    }), t._exportTimeoutMillis);
                    jt.with(function(t) {
                        return t.setValue(Qt, !0)
                    }(jt.active()), (function() {
                        var o;
                        t._finishedSpans.length <= t._maxExportBatchSize ? (o = t._finishedSpans, t._finishedSpans = []) : o = t._finishedSpans.splice(0, t._maxExportBatchSize);
                        for (var i = function() {
                                return t._exporter.export(o, (function(t) {
                                    var o;
                                    clearTimeout(r), t.code === Ue.SUCCESS ? e() : n(null !== (o = t.error) && void 0 !== o ? o : new Error("BatchSpanProcessor: span export failed"))
                                }))
                            }, s = null, a = 0, u = o.length; a < u; a++) {
                            var c = o[a];
                            c.resource.asyncAttributesPending && c.resource.waitForAsyncAttributes && (null != s || (s = []), s.push(c.resource.waitForAsyncAttributes()))
                        }
                        null === s ? i() : Promise.all(s).then(i, (function(t) {
                            pe(t), n(t)
                        }))
                    }))
                }))
            }, t.prototype._maybeStartTimer = function() {
                var t = this;
                if (!this._isExporting) {
                    var e = function() {
                        t._isExporting = !0, t._flushOneBatch().finally((function() {
                            t._isExporting = !1, t._finishedSpans.length > 0 && (t._clearTimer(), t._maybeStartTimer())
                        })).catch((function(e) {
                            t._isExporting = !1, pe(e)
                        }))
                    };
                    if (this._finishedSpans.length >= this._maxExportBatchSize) return e();
                    void 0 === this._timer && (this._timer = setTimeout((function() {
                        return e()
                    }), this._scheduledDelayMillis), this._timer)
                }
            }, t.prototype._clearTimer = function() {
                void 0 !== this._timer && (clearTimeout(this._timer), this._timer = void 0)
            }, t
        }(),
        Up = function() {
            var t = function(e, n) {
                return t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                }, t(e, n)
            };
            return function(e, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                function r() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }(),
        Wp = function(t) {
            function e(e, n) {
                var r = t.call(this, e, n) || this;
                return r.onInit(n), r
            }
            return Up(e, t), e.prototype.onInit = function(t) {
                var e = this;
                !0 !== (null == t ? void 0 : t.disableAutoFlushOnDocumentHide) && "undefined" != typeof document && (this._visibilityChangeListener = function() {
                    "hidden" === document.visibilityState && e.forceFlush()
                }, this._pageHideListener = function() {
                    e.forceFlush()
                }, document.addEventListener("visibilitychange", this._visibilityChangeListener), document.addEventListener("pagehide", this._pageHideListener))
            }, e.prototype.onShutdown = function() {
                "undefined" != typeof document && (this._visibilityChangeListener && document.removeEventListener("visibilitychange", this._visibilityChangeListener), this._pageHideListener && document.removeEventListener("pagehide", this._pageHideListener))
            }, e
        }(Bp),
        zp = function() {
            this.generateTraceId = Zp(16), this.generateSpanId = Zp(8)
        },
        Fp = Array(32);

    function Zp(t) {
        return function() {
            for (var e = 0; e < 2 * t; e++) Fp[e] = Math.floor(16 * Math.random()) + 48, Fp[e] >= 58 && (Fp[e] += 39);
            return String.fromCharCode.apply(null, Fp.slice(0, 2 * t))
        }
    }
    var Vp = function() {
        function t(t, e, n) {
            this._tracerProvider = n;
            var r, o, i, s, a = (r = e, o = {
                sampler: jp()
            }, i = xp(), (s = Object.assign({}, i, o, r)).generalLimits = Object.assign({}, i.generalLimits, r.generalLimits || {}), s.spanLimits = Object.assign({}, i.spanLimits, r.spanLimits || {}), s);
            this._sampler = a.sampler, this._generalLimits = a.generalLimits, this._spanLimits = a.spanLimits, this._idGenerator = e.idGenerator || new zp, this.resource = n.resource, this.instrumentationLibrary = t
        }
        return t.prototype.startSpan = function(t, e, n) {
            var r, o, i;
            void 0 === e && (e = {}), void 0 === n && (n = jt.active()), e.root && (n = Yt.deleteSpan(n));
            var s = Yt.getSpan(n);
            if (Jt(n)) return Mt.debug("Instrumentation suppressed, returning Noop Span"), Yt.wrapSpanContext(pt);
            var a, u, c, l = null == s ? void 0 : s.spanContext(),
                f = this._idGenerator.generateSpanId();
            l && Yt.isSpanContextValid(l) ? (a = l.traceId, u = l.traceState, c = l.spanId) : a = this._idGenerator.generateTraceId();
            var p = null !== (r = e.kind) && void 0 !== r ? r : It.INTERNAL,
                h = (null !== (o = e.links) && void 0 !== o ? o : []).map((function(t) {
                    return {
                        context: t.context,
                        attributes: se(t.attributes)
                    }
                })),
                d = se(e.attributes),
                g = this._sampler.shouldSample(n, a, t, p, d, h);
            u = null !== (i = g.traceState) && void 0 !== i ? i : u;
            var v = {
                traceId: a,
                spanId: f,
                traceFlags: g.decision === kt.RECORD_AND_SAMPLED ? C.SAMPLED : C.NONE,
                traceState: u
            };
            if (g.decision === kt.NOT_RECORD) return Mt.debug("Recording is off, propagating context in a non-recording span"), Yt.wrapSpanContext(v);
            var _ = se(Object.assign(d, g.attributes));
            return new Ap(this, n, t, v, p, c, h, e.startTime, void 0, _)
        }, t.prototype.startActiveSpan = function(t, e, n, r) {
            var o, i, s;
            if (!(arguments.length < 2)) {
                2 === arguments.length ? s = e : 3 === arguments.length ? (o = e, s = n) : (o = e, i = n, s = r);
                var a = null != i ? i : jt.active(),
                    u = this.startSpan(t, o, a),
                    c = Yt.setSpan(a, u);
                return jt.with(c, s, void 0, u)
            }
        }, t.prototype.getGeneralLimits = function() {
            return this._generalLimits
        }, t.prototype.getSpanLimits = function() {
            return this._spanLimits
        }, t.prototype.getActiveSpanProcessor = function() {
            return this._tracerProvider.getActiveSpanProcessor()
        }, t
    }();
    var Gp, Hp = function() {
            return Hp = Object.assign || function(t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }, Hp.apply(this, arguments)
        },
        Xp = function(t, e, n, r) {
            return new(n || (n = Promise))((function(o, i) {
                function s(t) {
                    try {
                        u(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function a(t) {
                    try {
                        u(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function u(t) {
                    var e;
                    t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                        t(e)
                    }))).then(s, a)
                }
                u((r = r.apply(t, e || [])).next())
            }))
        },
        $p = function(t, e) {
            var n, r, o, i, s = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }), i;

            function a(i) {
                return function(a) {
                    return function(i) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < o[1]) {
                                        s.label = o[1], o = i;
                                        break
                                    }
                                    if (o && s.label < o[2]) {
                                        s.label = o[2], s.ops.push(i);
                                        break
                                    }
                                    o[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            i = e.call(t, s)
                        } catch (t) {
                            i = [6, t], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, a])
                }
            }
        },
        qp = function(t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n) return t;
            var r, o, i = n.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(r = i.next()).done;) s.push(r.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o) throw o.error
                }
            }
            return s
        },
        Kp = function() {
            function t(t, e) {
                var n, r = this;
                this._attributes = t, this.asyncAttributesPending = null != e, this._syncAttributes = null !== (n = this._attributes) && void 0 !== n ? n : {}, this._asyncAttributesPromise = null == e ? void 0 : e.then((function(t) {
                    return r._attributes = Object.assign({}, r._attributes, t), r.asyncAttributesPending = !1, t
                }), (function(t) {
                    return Mt.debug("a resource's async attributes promise rejected: %s", t), r.asyncAttributesPending = !1, {}
                }))
            }
            return t.empty = function() {
                return t.EMPTY
            }, t.default = function() {
                var e;
                return new t(((e = {})["service.name"] = "unknown_service", e[Me] = Be[Me], e[je] = Be[je], e[De] = Be[De], e))
            }, Object.defineProperty(t.prototype, "attributes", {
                get: function() {
                    var t;
                    return this.asyncAttributesPending && Mt.error("Accessing resource attributes before async attributes settled"), null !== (t = this._attributes) && void 0 !== t ? t : {}
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.waitForAsyncAttributes = function() {
                return Xp(this, void 0, void 0, (function() {
                    return $p(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return this.asyncAttributesPending ? [4, this._asyncAttributesPromise] : [3, 2];
                            case 1:
                                t.sent(), t.label = 2;
                            case 2:
                                return [2]
                        }
                    }))
                }))
            }, t.prototype.merge = function(e) {
                var n, r = this;
                if (!e) return this;
                var o = Hp(Hp({}, this._syncAttributes), null !== (n = e._syncAttributes) && void 0 !== n ? n : e.attributes);
                if (!this._asyncAttributesPromise && !e._asyncAttributesPromise) return new t(o);
                var i = Promise.all([this._asyncAttributesPromise, e._asyncAttributesPromise]).then((function(t) {
                    var n, o = qp(t, 2),
                        i = o[0],
                        s = o[1];
                    return Hp(Hp(Hp(Hp({}, r._syncAttributes), i), null !== (n = e._syncAttributes) && void 0 !== n ? n : e.attributes), s)
                }));
                return new t(o, i)
            }, t.EMPTY = new t({}), t
        }(),
        Yp = function(t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                n = e && t[e],
                r = 0;
            if (n) return n.call(t);
            if (t && "number" == typeof t.length) return {
                next: function() {
                    return t && r >= t.length && (t = void 0), {
                        value: t && t[r++],
                        done: !t
                    }
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        Qp = function() {
            function t(t) {
                this._spanProcessors = t
            }
            return t.prototype.forceFlush = function() {
                var t, e, n = [];
                try {
                    for (var r = Yp(this._spanProcessors), o = r.next(); !o.done; o = r.next()) {
                        var i = o.value;
                        n.push(i.forceFlush())
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        o && !o.done && (e = r.return) && e.call(r)
                    } finally {
                        if (t) throw t.error
                    }
                }
                return new Promise((function(t) {
                    Promise.all(n).then((function() {
                        t()
                    })).catch((function(e) {
                        pe(e || new Error("MultiSpanProcessor: forceFlush failed")), t()
                    }))
                }))
            }, t.prototype.onStart = function(t, e) {
                var n, r;
                try {
                    for (var o = Yp(this._spanProcessors), i = o.next(); !i.done; i = o.next()) {
                        i.value.onStart(t, e)
                    }
                } catch (t) {
                    n = {
                        error: t
                    }
                } finally {
                    try {
                        i && !i.done && (r = o.return) && r.call(o)
                    } finally {
                        if (n) throw n.error
                    }
                }
            }, t.prototype.onEnd = function(t) {
                var e, n;
                try {
                    for (var r = Yp(this._spanProcessors), o = r.next(); !o.done; o = r.next()) {
                        o.value.onEnd(t)
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        o && !o.done && (n = r.return) && n.call(r)
                    } finally {
                        if (e) throw e.error
                    }
                }
            }, t.prototype.shutdown = function() {
                var t, e, n = [];
                try {
                    for (var r = Yp(this._spanProcessors), o = r.next(); !o.done; o = r.next()) {
                        var i = o.value;
                        n.push(i.shutdown())
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        o && !o.done && (e = r.return) && e.call(r)
                    } finally {
                        if (t) throw t.error
                    }
                }
                return new Promise((function(t, e) {
                    Promise.all(n).then((function() {
                        t()
                    }), e)
                }))
            }, t
        }(),
        Jp = function() {
            function t() {}
            return t.prototype.onStart = function(t, e) {}, t.prototype.onEnd = function(t) {}, t.prototype.shutdown = function() {
                return Promise.resolve()
            }, t.prototype.forceFlush = function() {
                return Promise.resolve()
            }, t
        }();
    ! function(t) {
        t[t.resolved = 0] = "resolved", t[t.timeout = 1] = "timeout", t[t.error = 2] = "error", t[t.unresolved = 3] = "unresolved"
    }(Gp || (Gp = {}));
    var th, eh, nh, rh = function() {
            function t(t) {
                var e;
                void 0 === t && (t = {}), this._registeredSpanProcessors = [], this._tracers = new Map;
                var n = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    for (var n = t.shift(), r = new WeakMap; t.length > 0;) n = Sn(n, t.shift(), 0, r);
                    return n
                }({}, xp(), Dp(t));
                this.resource = null !== (e = n.resource) && void 0 !== e ? e : Kp.empty(), this.resource = Kp.default().merge(this.resource), this._config = Object.assign({}, n, {
                    resource: this.resource
                });
                var r = this._buildExporterFromEnv();
                if (void 0 !== r) {
                    var o = new Wp(r);
                    this.activeSpanProcessor = o
                } else this.activeSpanProcessor = new Jp
            }
            return t.prototype.getTracer = function(t, e, n) {
                var r = t + "@" + (e || "") + ":" + ((null == n ? void 0 : n.schemaUrl) || "");
                return this._tracers.has(r) || this._tracers.set(r, new Vp({
                    name: t,
                    version: e,
                    schemaUrl: null == n ? void 0 : n.schemaUrl
                }, this._config, this)), this._tracers.get(r)
            }, t.prototype.addSpanProcessor = function(t) {
                0 === this._registeredSpanProcessors.length && this.activeSpanProcessor.shutdown().catch((function(t) {
                    return Mt.error("Error while trying to shutdown current span processor", t)
                })), this._registeredSpanProcessors.push(t), this.activeSpanProcessor = new Qp(this._registeredSpanProcessors)
            }, t.prototype.getActiveSpanProcessor = function() {
                return this.activeSpanProcessor
            }, t.prototype.register = function(t) {
                void 0 === t && (t = {}), Yt.setGlobalTracerProvider(this), void 0 === t.propagator && (t.propagator = this._buildPropagatorFromEnv()), t.contextManager && jt.setGlobalContextManager(t.contextManager), t.propagator && qt.setGlobalPropagator(t.propagator)
            }, t.prototype.forceFlush = function() {
                var t = this._config.forceFlushTimeoutMillis,
                    e = this._registeredSpanProcessors.map((function(e) {
                        return new Promise((function(n) {
                            var r, o = setTimeout((function() {
                                n(new Error("Span processor did not completed within timeout period of " + t + " ms")), r = Gp.timeout
                            }), t);
                            e.forceFlush().then((function() {
                                clearTimeout(o), r !== Gp.timeout && (r = Gp.resolved, n(r))
                            })).catch((function(t) {
                                clearTimeout(o), r = Gp.error, n(t)
                            }))
                        }))
                    }));
                return new Promise((function(t, n) {
                    Promise.all(e).then((function(e) {
                        var r = e.filter((function(t) {
                            return t !== Gp.resolved
                        }));
                        r.length > 0 ? n(r) : t()
                    })).catch((function(t) {
                        return n([t])
                    }))
                }))
            }, t.prototype.shutdown = function() {
                return this.activeSpanProcessor.shutdown()
            }, t.prototype._getPropagator = function(t) {
                var e;
                return null === (e = this.constructor._registeredPropagators.get(t)) || void 0 === e ? void 0 : e()
            }, t.prototype._getSpanExporter = function(t) {
                var e;
                return null === (e = this.constructor._registeredExporters.get(t)) || void 0 === e ? void 0 : e()
            }, t.prototype._buildPropagatorFromEnv = function() {
                var t = this,
                    e = Array.from(new Set(Pe().OTEL_PROPAGATORS)),
                    n = e.map((function(e) {
                        var n = t._getPropagator(e);
                        return n || Mt.warn('Propagator "' + e + '" requested through environment variable is unavailable.'), n
                    })).reduce((function(t, e) {
                        return e && t.push(e), t
                    }), []);
                return 0 === n.length ? void 0 : 1 === e.length ? n[0] : new Ye({
                    propagators: n
                })
            }, t.prototype._buildExporterFromEnv = function() {
                var t = Pe().OTEL_TRACES_EXPORTER;
                if ("none" !== t && "" !== t) {
                    var e = this._getSpanExporter(t);
                    return e || Mt.error('Exporter "' + t + '" requested through environment variable is unavailable.'), e
                }
            }, t._registeredPropagators = new Map([
                ["tracecontext", function() {
                    return new cn
                }],
                ["baggage", function() {
                    return new re
                }]
            ]), t._registeredExporters = new Map, t
        }(),
        oh = function(t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n) return t;
            var r, o, i = n.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(r = i.next()).done;) s.push(r.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o) throw o.error
                }
            }
            return s
        },
        ih = function(t, e, n) {
            if (n || 2 === arguments.length)
                for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
            return t.concat(r || Array.prototype.slice.call(e))
        },
        sh = function() {
            function t() {
                this._enabled = !1, this._currentContext = x
            }
            return t.prototype._bindFunction = function(t, e) {
                void 0 === t && (t = x);
                var n = this,
                    r = function() {
                        for (var r = this, o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i];
                        return n.with(t, (function() {
                            return e.apply(r, o)
                        }))
                    };
                return Object.defineProperty(r, "length", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !1,
                    value: e.length
                }), r
            }, t.prototype.active = function() {
                return this._currentContext
            }, t.prototype.bind = function(t, e) {
                return void 0 === t && (t = this.active()), "function" == typeof e ? this._bindFunction(t, e) : e
            }, t.prototype.disable = function() {
                return this._currentContext = x, this._enabled = !1, this
            }, t.prototype.enable = function() {
                return this._enabled || (this._enabled = !0, this._currentContext = x), this
            }, t.prototype.with = function(t, e, n) {
                for (var r = [], o = 3; o < arguments.length; o++) r[o - 3] = arguments[o];
                var i = this._currentContext;
                this._currentContext = t || x;
                try {
                    return e.call.apply(e, ih([n], oh(r), !1))
                } finally {
                    this._currentContext = i
                }
            }, t
        }(),
        ah = function() {
            var t = function(e, n) {
                return t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                }, t(e, n)
            };
            return function(e, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                function r() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }(),
        uh = function(t) {
            function e(e) {
                void 0 === e && (e = {});
                var n = t.call(this, e) || this;
                if (e.contextManager) throw "contextManager should be defined in register method not in constructor";
                if (e.propagator) throw "propagator should be defined in register method not in constructor";
                return n
            }
            return ah(e, t), e.prototype.register = function(e) {
                void 0 === e && (e = {}), void 0 === e.contextManager && (e.contextManager = new sh), e.contextManager && e.contextManager.enable(), t.prototype.register.call(this, e)
            }, e
        }(rh);

    function ch(t, e) {
        return e in t
    }

    function lh(t, e, n, r) {
        var o = void 0,
            i = void 0;
        ch(n, e) && "number" == typeof n[e] && (o = n[e]);
        var s = r || th.FETCH_START;
        if (ch(n, s) && "number" == typeof n[s] && (i = n[s]), void 0 !== o && void 0 !== i && o >= i) return t.addEvent(e, o), t
    }

    function fh(t, e) {
        lh(t, th.FETCH_START, e), lh(t, th.DOMAIN_LOOKUP_START, e), lh(t, th.DOMAIN_LOOKUP_END, e), lh(t, th.CONNECT_START, e), ch(e, "name") && e.name.startsWith("https:") && lh(t, th.SECURE_CONNECTION_START, e), lh(t, th.CONNECT_END, e), lh(t, th.REQUEST_START, e), lh(t, th.RESPONSE_START, e), lh(t, th.RESPONSE_END, e);
        var n = e[th.ENCODED_BODY_SIZE];
        void 0 !== n && t.setAttribute("http.response_content_length", n);
        var r = e[th.DECODED_BODY_SIZE];
        void 0 !== r && n !== r && t.setAttribute("http.response_content_length_uncompressed", r)
    }

    function ph() {
        return "undefined" != typeof location ? location.origin : void 0
    }

    function hh(t, e, n, r, o, i) {
        void 0 === o && (o = new WeakSet);
        var s = dh(t),
            a = function(t, e, n, r, o, i) {
                var s = He(e),
                    a = He(n),
                    u = r.filter((function(e) {
                        var n = He(Ge(e[th.FETCH_START])),
                            r = He(Ge(e[th.RESPONSE_END]));
                        return e.initiatorType.toLowerCase() === (i || "xmlhttprequest") && e.name === t && n >= s && r <= a
                    }));
                u.length > 0 && (u = u.filter((function(t) {
                    return !o.has(t)
                })));
                return u
            }(t = s.toString(), e, n, r, o, i);
        if (0 === a.length) return {
            mainRequest: void 0
        };
        if (1 === a.length) return {
            mainRequest: a[0]
        };
        var u = function(t) {
            return t.slice().sort((function(t, e) {
                var n = t[th.FETCH_START],
                    r = e[th.FETCH_START];
                return n > r ? 1 : n < r ? -1 : 0
            }))
        }(a);
        if (s.origin !== ph() && u.length > 1) {
            var c = u[0],
                l = function(t, e, n) {
                    for (var r, o = He(n), i = He(Ge(e)), s = t[1], a = t.length, u = 1; u < a; u++) {
                        var c = t[u],
                            l = He(Ge(c[th.FETCH_START])),
                            f = o - He(Ge(c[th.RESPONSE_END]));
                        l >= i && (!r || f < r) && (r = f, s = c)
                    }
                    return s
                }(u, c[th.RESPONSE_END], n),
                f = c[th.RESPONSE_END];
            return l[th.FETCH_START] < f && (l = c, c = void 0), {
                corsPreFlightRequest: c,
                mainRequest: l
            }
        }
        return {
            mainRequest: a[0]
        }
    }

    function dh(t) {
        if ("function" == typeof URL) return new URL(t, "undefined" != typeof document ? document.baseURI : "undefined" != typeof location ? location.href : void 0);
        var e = (eh || (eh = document.createElement("a")), eh);
        return e.href = t, e
    }! function(t) {
        t.CONNECT_END = "connectEnd", t.CONNECT_START = "connectStart", t.DECODED_BODY_SIZE = "decodedBodySize", t.DOM_COMPLETE = "domComplete", t.DOM_CONTENT_LOADED_EVENT_END = "domContentLoadedEventEnd", t.DOM_CONTENT_LOADED_EVENT_START = "domContentLoadedEventStart", t.DOM_INTERACTIVE = "domInteractive", t.DOMAIN_LOOKUP_END = "domainLookupEnd", t.DOMAIN_LOOKUP_START = "domainLookupStart", t.ENCODED_BODY_SIZE = "encodedBodySize", t.FETCH_START = "fetchStart", t.LOAD_EVENT_END = "loadEventEnd", t.LOAD_EVENT_START = "loadEventStart", t.NAVIGATION_START = "navigationStart", t.REDIRECT_END = "redirectEnd", t.REDIRECT_START = "redirectStart", t.REQUEST_START = "requestStart", t.RESPONSE_END = "responseEnd", t.RESPONSE_START = "responseStart", t.SECURE_CONNECTION_START = "secureConnectionStart", t.UNLOAD_EVENT_END = "unloadEventEnd", t.UNLOAD_EVENT_START = "unloadEventStart"
    }(th || (th = {})),
    function(t) {
        t.COMPONENT = "component", t.HTTP_ERROR_NAME = "http.error_name", t.HTTP_STATUS_TEXT = "http.status_text"
    }(nh || (nh = {}));
    var gh, vh, _h, yh, mh, Th, bh, Eh = "0.52.1",
        Sh = function() {
            var t = function(e, n) {
                return t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                }, t(e, n)
            };
            return function(e, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                function r() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }(),
        Oh = "object" == typeof process && "node" === (null === (gh = process.release) || void 0 === gh ? void 0 : gh.name),
        wh = function(t) {
            function e(e) {
                void 0 === e && (e = {});
                var n = t.call(this, "@opentelemetry/instrumentation-fetch", Eh, e) || this;
                return n.component = "fetch", n.version = Eh, n.moduleName = n.component, n._usedResources = new WeakSet, n._tasksCount = 0, n
            }
            return Sh(e, t), e.prototype.init = function() {}, e.prototype._addChildSpan = function(t, e) {
                var n = this.tracer.startSpan("CORS Preflight", {
                    startTime: e[th.FETCH_START]
                }, Yt.setSpan(jt.active(), t));
                this.getConfig().ignoreNetworkEvents || fh(n, e), n.end(e[th.RESPONSE_END])
            }, e.prototype._addFinalSpanAttributes = function(t, e) {
                var n = dh(e.url);
                t.setAttribute("http.status_code", e.status), null != e.statusText && t.setAttribute(nh.HTTP_STATUS_TEXT, e.statusText), t.setAttribute("http.host", n.host), t.setAttribute("http.scheme", n.protocol.replace(":", "")), "undefined" != typeof navigator && t.setAttribute("http.user_agent", navigator.userAgent)
            }, e.prototype._addHeaders = function(t, e) {
                if (! function(t, e) {
                        var n = e || [];
                        return ("string" == typeof n || n instanceof RegExp) && (n = [n]), dh(t).origin === ph() || n.some((function(e) {
                            return Pn(t, e)
                        }))
                    }(e, this.getConfig().propagateTraceHeaderCorsUrls)) {
                    var n = {};
                    return qt.inject(jt.active(), n), void(Object.keys(n).length > 0 && this._diag.debug("headers inject skipped due to CORS policy"))
                }
                if (t instanceof Request) qt.inject(jt.active(), t.headers, {
                    set: function(t, e, n) {
                        return t.set(e, "string" == typeof n ? n : String(n))
                    }
                });
                else if (t.headers instanceof Headers) qt.inject(jt.active(), t.headers, {
                    set: function(t, e, n) {
                        return t.set(e, "string" == typeof n ? n : String(n))
                    }
                });
                else if (t.headers instanceof Map) qt.inject(jt.active(), t.headers, {
                    set: function(t, e, n) {
                        return t.set(e, "string" == typeof n ? n : String(n))
                    }
                });
                else {
                    n = {};
                    qt.inject(jt.active(), n), t.headers = Object.assign({}, n, t.headers || {})
                }
            }, e.prototype._clearResources = function() {
                0 === this._tasksCount && this.getConfig().clearTimingResources && (performance.clearResourceTimings(), this._usedResources = new WeakSet)
            }, e.prototype._createSpan = function(t, e) {
                var n;
                if (void 0 === e && (e = {}), ! function(t, e) {
                        var n, r;
                        if (!e) return !1;
                        try {
                            for (var o = In(e), i = o.next(); !i.done; i = o.next())
                                if (Pn(t, i.value)) return !0
                        } catch (t) {
                            n = {
                                error: t
                            }
                        } finally {
                            try {
                                i && !i.done && (r = o.return) && r.call(o)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        return !1
                    }(t, this.getConfig().ignoreUrls)) {
                    var r = (e.method || "GET").toUpperCase(),
                        o = "HTTP " + r;
                    return this.tracer.startSpan(o, {
                        kind: It.CLIENT,
                        attributes: (n = {}, n[nh.COMPONENT] = this.moduleName, n["http.method"] = r, n["http.url"] = t, n)
                    })
                }
                this._diag.debug("ignoring span as url matches ignored url")
            }, e.prototype._findResourceAndAddNetworkEvents = function(t, e, n) {
                var r = e.entries;
                if (!r.length) {
                    if (!performance.getEntriesByType) return;
                    r = performance.getEntriesByType("resource")
                }
                var o = hh(e.spanUrl, e.startTime, n, r, this._usedResources, "fetch");
                if (o.mainRequest) {
                    var i = o.mainRequest;
                    this._markResourceAsUsed(i);
                    var s = o.corsPreFlightRequest;
                    s && (this._addChildSpan(t, s), this._markResourceAsUsed(s)), this.getConfig().ignoreNetworkEvents || fh(t, i)
                }
            }, e.prototype._markResourceAsUsed = function(t) {
                this._usedResources.add(t)
            }, e.prototype._endSpan = function(t, e, n) {
                var r = this,
                    o = Fe(Date.now()),
                    i = Ve();
                this._addFinalSpanAttributes(t, n), setTimeout((function() {
                    var n;
                    null === (n = e.observer) || void 0 === n || n.disconnect(), r._findResourceAndAddNetworkEvents(t, e, i), r._tasksCount--, r._clearResources(), t.end(o)
                }), 300)
            }, e.prototype._patchConstructor = function() {
                var t = this;
                return function(e) {
                    var n = t;
                    return function() {
                        for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                        var o = this,
                            i = dh(t[0] instanceof Request ? t[0].url : String(t[0])).href,
                            s = t[0] instanceof Request ? t[0] : t[1] || {},
                            a = n._createSpan(i, s);
                        if (!a) return e.apply(this, t);
                        var u = n._prepareSpanData(i);

                        function c(t, e) {
                            n._applyAttributesAfterFetch(t, s, e), n._endSpan(t, u, {
                                status: e.status || 0,
                                statusText: e.message,
                                url: i
                            })
                        }

                        function l(t, e) {
                            n._applyAttributesAfterFetch(t, s, e), e.status >= 200 && e.status < 400 ? n._endSpan(t, u, e) : n._endSpan(t, u, {
                                status: e.status,
                                statusText: e.statusText,
                                url: i
                            })
                        }

                        function f(t, e, n) {
                            try {
                                var r = n.clone(),
                                    o = n.clone(),
                                    i = r.body;
                                if (i) {
                                    var s = i.getReader(),
                                        a = function() {
                                            s.read().then((function(e) {
                                                e.done ? l(t, o) : a()
                                            }), (function(e) {
                                                c(t, e)
                                            }))
                                        };
                                    a()
                                } else l(t, n)
                            } finally {
                                e(n)
                            }
                        }

                        function p(t, e, n) {
                            try {
                                c(t, n)
                            } finally {
                                e(n)
                            }
                        }
                        return new Promise((function(t, r) {
                            return jt.with(Yt.setSpan(jt.active(), a), (function() {
                                return n._addHeaders(s, i), n._tasksCount++, e.apply(o, s instanceof Request ? [s] : [i, s]).then(f.bind(o, a, t), p.bind(o, a, r))
                            }))
                        }))
                    }
                }
            }, e.prototype._applyAttributesAfterFetch = function(t, e, n) {
                var r = this,
                    o = this.getConfig().applyCustomAttributesOnSpan;
                o && function(t, e, n) {
                    var r, o;
                    try {
                        o = t()
                    } catch (t) {
                        r = t
                    } finally {
                        if (e(r, o), r && !n) throw r;
                        return o
                    }
                }((function() {
                    return o(t, e, n)
                }), (function(t) {
                    t && r._diag.error("applyCustomAttributesOnSpan", t)
                }), !0)
            }, e.prototype._prepareSpanData = function(t) {
                var e = Ve(),
                    n = [];
                if ("function" != typeof PerformanceObserver) return {
                    entries: n,
                    startTime: e,
                    spanUrl: t
                };
                var r = new PerformanceObserver((function(e) {
                    e.getEntries().forEach((function(e) {
                        "fetch" === e.initiatorType && e.name === t && n.push(e)
                    }))
                }));
                return r.observe({
                    entryTypes: ["resource"]
                }), {
                    entries: n,
                    observer: r,
                    startTime: e,
                    spanUrl: t
                }
            }, e.prototype.enable = function() {
                Oh ? this._diag.warn("this instrumentation is intended for web usage only, it does not instrument Node.js's fetch()") : (function(t) {
                    return "function" == typeof t && "function" == typeof t.__original && "function" == typeof t.__unwrap && !0 === t.__wrapped
                }(fetch) && (this._unwrap(Ie, "fetch"), this._diag.debug("removing previous patch for constructor")), this._wrap(Ie, "fetch", this._patchConstructor()))
            }, e.prototype.disable = function() {
                Oh || (this._unwrap(Ie, "fetch"), this._usedResources = new WeakSet)
            }, e
        }(bp);

    function Ah(t) {
        const e = t.getSpanInformation(),
            n = t.getContext();
        return {
            traceId: n.traceId,
            spanId: n.spanId,
            parentSpanId: e.parentSpanId,
            name: e.name,
            startTimeUnixNano: e.startTime,
            endTimeUnixNano: e.endTime,
            attributes: n.attributes,
            kind: e.kind,
            status: e.status
        }
    }
    class Lh {
        constructor(t) {
            let {
                transportManager: e,
                promiseMap: n = new Map,
                tracer: r
            } = t;
            vh.add(this), _h.set(this, void 0), yh.set(this, void 0), mh.set(this, 0), Th.set(this, void 0), i(this, _h, e, "f"), i(this, yh, n, "f"), i(this, Th, r, "f")
        }
        shutdown() {
            return r(this, void 0, void 0, (function*() {
                yield Promise.all(o(this, yh, "f").values())
            }))
        }
        forceFlush() {
            return r(this, void 0, void 0, (function*() {
                yield Promise.all(o(this, yh, "f").values())
            }))
        }
        onStart() {}
        onEnd(t) {
            const e = o(this, Th, "f").fromOTSpan(t);
            o(this, vh, "m", bh).call(this, e)
        }
    }
    _h = new WeakMap, yh = new WeakMap, mh = new WeakMap, Th = new WeakMap, vh = new WeakSet, bh = function(t) {
        var e, n;
        const s = (i(this, mh, (n = o(this, mh, "f"), e = n++, n), "f"), e),
            a = Ah(t);
        o(this, yh, "f").set(s, (() => r(this, void 0, void 0, (function*() {
            yield o(this, _h, "f").processSpan(a), o(this, yh, "f").delete(s)
        })))())
    };
    const kh = t.KnownAttributes = {
            Tag: "outsystems.log.message.tag",
            Visibility: "outsystems.otel.access.visibility",
            AccessType: "outsystems.otel.access.type",
            ChildrenNames: qr.exports.AggregationAttributes.ChildrenNames,
            IsNonAggregable: qr.exports.AggregationAttributes.IsNonAggregable
        },
        Ih = [kh.IsNonAggregable, kh.ChildrenNames];
    var Ph, Rh, Ch, Nh, xh, jh, Mh, Dh, Bh, Uh, Wh, zh, Fh, Zh, Vh, Gh, Hh, Xh;
    class $h {
        constructor(t) {
            let {
                visibility: e,
                attributes: n = {},
                span: r,
                activateSpan: s,
                explicitChildren: a = []
            } = t;
            Ph.set(this, void 0), Rh.set(this, void 0), Ch.set(this, void 0), Nh.set(this, void 0), i(this, Ph, r, "f"), i(this, Rh, s, "f"), i(this, Nh, a, "f"), void 0 !== e && o(this, Ph, "f").setAttribute(kh.Visibility, Ml[e]), o(this, Ph, "f").setAttributes(n), this.ended = new Promise((t => {
                i(this, Ch, t, "f")
            }))
        }
        setAttribute(t, e) {
            o(this, Ph, "f").setAttribute(t, e)
        }
        setStatus(t, e) {
            o(this, Ph, "f").setStatus({
                code: t,
                message: e
            })
        }
        raiseError(t, e) {
            o(this, Ph, "f").recordException(t), this.setStatus(2, e)
        }
        getContext() {
            const t = o(this, Ph, "f").spanContext();
            return {
                spanId: t.spanId,
                traceId: t.traceId,
                attributes: o(this, Ph, "f").attributes,
                sampled: Boolean(1 & t.traceFlags)
            }
        }
        addEvent(t, e) {
            o(this, Ph, "f").addEvent(t, e)
        }
        end() {
            return r(this, void 0, void 0, (function*() {
                var t;
                yield Promise.all(o(this, Nh, "f").map((t => t.ended))), o(this, Ph, "f").end(), null === (t = o(this, Ch, "f")) || void 0 === t || t.call(this)
            }))
        }
        fail() {
            o(this, Ph, "f").setStatus({
                code: Pt.ERROR
            })
        }
        getSpanInformation() {
            return {
                name: o(this, Ph, "f").name,
                kind: o(this, Ph, "f").kind,
                status: o(this, Ph, "f").status.code,
                parentSpanId: o(this, Ph, "f").parentSpanId,
                startTime: jn.toNanoSeconds(new jn(o(this, Ph, "f").startTime)),
                endTime: jn.toNanoSeconds(new jn(o(this, Ph, "f").endTime)),
                childrenNames: o(this, Ph, "f").attributes[qr.exports.AggregationAttributes.ChildrenNames]
            }
        }
        activate() {
            return o(this, Rh, "f").call(this)
        }
        addExplicitChild(t) {
            o(this, Nh, "f").push(t)
        }
    }
    Ph = new WeakMap, Rh = new WeakMap, Ch = new WeakMap, Nh = new WeakMap;
    class qh {
        constructor(t) {
            let {
                transports: e,
                baseAttributes: n = {},
                staticAttributes: r = [],
                databaseNameSuffix: s,
                transportManager: a = new mo({
                    traceTransports: e,
                    databaseNameSuffix: s
                }),
                tracerProvider: u = new uh,
                contextManager: c = new Hl,
                tracer: l = u.getTracer("@outsystems/logger-js", "2.18.12"),
                exporter: f,
                enabled: p = !0,
                getActiveSpan: h = (() => Yt.getActiveSpan()),
                setSpan: d = ((t, e) => Yt.setSpan(t, e))
            } = t;
            xh.add(this), jh.set(this, void 0), Mh.set(this, void 0), Dh.set(this, void 0), Bh.set(this, void 0), Uh.set(this, void 0), Wh.set(this, void 0), zh.set(this, void 0), Fh.set(this, void 0), Zh.set(this, void 0), i(this, jh, a, "f"), i(this, Bh, l, "f"), i(this, Dh, p, "f"), i(this, Wh, h, "f"), i(this, Mh, u, "f"), i(this, zh, d, "f"), i(this, Uh, c, "f"), i(this, Fh, n, "f"), i(this, Zh, r, "f");
            const g = null != f ? f : new Lh({
                transportManager: a,
                tracer: this
            });
            o(this, Mh, "f").register({
                contextManager: c
            }), o(this, Mh, "f").addSpanProcessor(g)
        }
        addTransport(t) {
            o(this, jh, "f").addTraceTransport(t)
        }
        removeTransport(t) {
            o(this, jh, "f").removeTraceTransport(t)
        }
        startSpan(t, e, n, r) {
            if (o(this, Dh, "f")) {
                ! function(t, e) {
                    var n, r;
                    if (e) {
                        const o = null !== (r = null === (n = e.getSpanInformation()) || void 0 === n ? void 0 : n.childrenNames) && void 0 !== r ? r : [];
                        o.push(t), e.setAttribute(qr.exports.AggregationAttributes.ChildrenNames, o)
                    }
                }(t, null != n ? n : o(this, Wh, "f").call(this) ? this.fromOTSpan(o(this, Wh, "f").call(this)) : void 0);
                const i = n ? o(this, Bh, "f").startSpan(t, {
                        attributes: {},
                        kind: r
                    }, n.activate()) : o(this, Bh, "f").startSpan(t, {
                        kind: r
                    }),
                    s = this.fromOTSpan(i, e);
                return null == n || n.addExplicitChild(s), s
            }
        }
        startActiveSpan(t, e, n, r, i) {
            if (o(this, Dh, "f")) {
                const s = t => {
                    const o = this.fromOTSpan(t, n);
                    return null == r || r.addExplicitChild(o), e(o)
                };
                return r ? o(this, Bh, "f").startActiveSpan(t, {
                    attributes: {},
                    kind: i
                }, r.activate(), s) : o(this, Bh, "f").startActiveSpan(t, {
                    kind: i
                }, s)
            }
            return e(void 0)
        }
        getActiveSpan() {
            const t = o(this, Wh, "f").call(this);
            return t ? this.fromOTSpan(t) : void 0
        }
        setStatus(t) {
            i(this, Dh, t, "f")
        }
        addBaseSpanAttributes(t) {
            i(this, Fh, Object.assign(Object.assign({}, o(this, Fh, "f")), t), "f")
        }
        enableFetchInstrumentation() {
            (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new wh).setTracerProvider(o(this, Mh, "f"))
        }
        span(t) {
            return r(this, void 0, void 0, (function*() {
                yield o(this, jh, "f").processSpan(t)
            }))
        }
        flush() {
            return r(this, void 0, void 0, (function*() {
                o(this, jh, "f").flushSpans()
            }))
        }
        setSchedulerTimerInterval(t) {
            o(this, jh, "f").setSchedulerTimerInterval(t)
        }
        fromOTSpan(t, e) {
            const n = o(this, xh, "m", Vh).call(this, t);
            return new $h({
                span: t,
                attributes: jl(n),
                activateSpan: () => o(this, zh, "f").call(this, o(this, Uh, "f").active(), t),
                visibility: e
            })
        }
    }
    t.Tracer = qh, jh = new WeakMap, Mh = new WeakMap, Dh = new WeakMap, Bh = new WeakMap, Uh = new WeakMap, Wh = new WeakMap, zh = new WeakMap, Fh = new WeakMap, Zh = new WeakMap, xh = new WeakSet, Vh = function(t) {
        const e = Object.assign({}, o(this, Fh, "f"));
        return void 0 === t.parentSpanId || Object.keys(e).forEach((t => {
            o(this, Zh, "f").includes(t) && delete e[t]
        })), e
    };
    class Kh {
        constructor(t) {
            let {
                transportId: e,
                logTypeBaseline: n = lr.Debug,
                formatter: r,
                transportConsole: o = console,
                shouldWriteLogsOnConsoles: s = (() => !1)
            } = t;
            Gh.add(this), Hh.set(this, void 0), this.formatConsoleLog = t => {
                var e, n, r, o;
                const i = t.type === lr.Error ? null !== (e = t.errorCode) && void 0 !== e ? e : xl : void 0,
                    s = null !== (n = t.category) && void 0 !== n ? n : "Application",
                    a = null !== (o = null === (r = null == t ? void 0 : t.error) || void 0 === r ? void 0 : r.message) && void 0 !== o ? o : t.message;
                return `${jn.toISOString(t.timestamp)}:${i?" "+i:""} [${s}] ${a}`
            }, this.transportId = e, this.logTypeBaseline = n, this.formatter = r, this.transportConsole = o, i(this, Hh, s, "f")
        }
        getTransportId() {
            return this.transportId
        }
        requiresConnectivity() {
            return !1
        }
        hasWriteBuffer() {
            return !1
        }
        getLogTypeBaseline() {
            return this.logTypeBaseline
        }
        setLogTypeBaseline(t) {
            this.logTypeBaseline = t
        }
        write(t) {
            return r(this, void 0, void 0, (function*() {
                if (!o(this, Gh, "m", Xh).call(this, t)) return;
                const e = this.formatter ? this.formatter.format(t) : this.formatConsoleLog(t);
                switch (t.type) {
                    case lr.Debug:
                        this.transportConsole.debug(e);
                        break;
                    case lr.Info:
                        this.transportConsole.log(e);
                        break;
                    case lr.Warning:
                        this.transportConsole.warn(e);
                        break;
                    case lr.Error:
                        this.transportConsole.error(e, t.error);
                        break;
                    default:
                        this.transportConsole.log(e)
                }
            }))
        }
        writeAll(t) {
            return r(this, void 0, void 0, (function*() {
                for (const e of t) yield this.write(e)
            }))
        }
    }

    function Yh(t) {
        const e = {};
        return t.category && (e[kh.Tag] = t.category), e
    }
    Hh = new WeakMap, Gh = new WeakSet, Xh = function(t) {
        return t.visibility === bo.External || o(this, Hh, "f").call(this)
    };
    class Qh {
        format(t) {
            var e, n;
            const r = null !== (e = t.visibility) && void 0 !== e ? e : bo.External,
                o = Dl(t),
                i = Yh(t),
                s = Object.assign(Object.assign(Object.assign({
                    [kh.Visibility]: Ml[r]
                }, o), i), t.attributes),
                a = Ul(s),
                u = jn.toISOString(t.timestamp);
            return {
                message: null !== (n = t.message) && void 0 !== n ? n : "",
                attributes: a,
                instant: u
            }
        }
    }
    const Jh = {
        [lr.Debug]: "logDebug",
        [lr.Info]: "logInfo",
        [lr.Warning]: "logWarning",
        [lr.Error]: "logError",
        [lr.Trace]: "logTrace"
    };
    class td {
        constructor(t) {
            let {
                transportId: e,
                logTypeBaseline: n,
                nativeLoggerV2: r,
                formatter: o = new Qh
            } = t;
            this.transportId = e, this.logTypeBaseline = n, this.nativeLoggerV2 = r, this.formatter = o
        }
        getTransportId() {
            return this.transportId
        }
        requiresConnectivity() {
            return !1
        }
        hasWriteBuffer() {
            return !1
        }
        getLogTypeBaseline() {
            return this.logTypeBaseline
        }
        setLogTypeBaseline(t) {
            this.logTypeBaseline = t
        }
        write(t) {
            return r(this, void 0, void 0, (function*() {
                const e = this.formatter.format(t),
                    n = Jh[t.type];
                return this.nativeLoggerV2[n](e)
            }))
        }
        writeAll(t) {
            return r(this, void 0, void 0, (function*() {
                for (const e of t) yield this.write(e)
            }))
        }
    }
    var ed, nd;
    const rd = {
            [lr.Trace]: 1,
            [lr.Debug]: 5,
            [lr.Info]: 9,
            [lr.Warning]: 13,
            [lr.Error]: 17
        },
        od = {
            [lr.Debug]: "Debug",
            [lr.Info]: "Information",
            [lr.Warning]: "Warning",
            [lr.Error]: "Error",
            [lr.Trace]: "Trace"
        };
    class id {
        constructor(t) {
            let {
                resourceAttributes: e = {},
                formatVersion: n = "v1"
            } = t;
            ed.set(this, void 0), nd.set(this, void 0), i(this, ed, e, "f"), i(this, nd, n, "f")
        }
        setResourceAttributes(t) {
            i(this, ed, null != t ? t : {}, "f")
        }
        format(t) {
            return this.formatAll([t])
        }
        formatAll(t) {
            const e = Object.assign({
                    [kh.AccessType]: 3
                }, o(this, ed, "f")),
                n = Bl(e),
                r = t.map((t => function(t) {
                    var e;
                    const n = null !== (e = t.visibility) && void 0 !== e ? e : bo.External,
                        r = Dl(t),
                        o = (t => {
                            const e = {},
                                n = t.span;
                            return n && (e.traceId = n.traceId, e.spanId = n.spanId), e
                        })(t),
                        i = Yh(t),
                        s = Object.assign(Object.assign(Object.assign({
                            [kh.Visibility]: Ml[n]
                        }, r), i), t.attributes),
                        a = Ul(s),
                        u = Bl(a),
                        c = rd[t.type],
                        l = od[t.type],
                        f = jn.toNanoSeconds(t.timestamp),
                        p = (t => {
                            const e = {
                                body: {
                                    stringValue: ""
                                }
                            };
                            if (t.message) {
                                const n = t.message.length > 2e3 ? `${t.message.substring(0,1997)}...` : t.message;
                                e.body = {
                                    stringValue: n
                                }
                            }
                            return e
                        })(t);
                    return Object.assign(Object.assign(Object.assign({}, p), o), {
                        timeUnixNano: f,
                        severityNumber: c,
                        severityText: l,
                        attributes: u
                    })
                }(t)));
            return "v1" === o(this, nd, "f") ? function(t, e) {
                return {
                    resourceLogs: [{
                        resource: {
                            attributes: e
                        },
                        instrumentationLibraryLogs: [{
                            instrumentationLibrary: {
                                name: "@outsystems/logger-js",
                                version: "2.18.12"
                            },
                            logs: t
                        }]
                    }]
                }
            }(r, n) : function(t, e) {
                return {
                    resourceLogs: [{
                        resource: {
                            attributes: e
                        },
                        scopeLogs: [{
                            scope: {
                                name: "@outsystems/logger-js",
                                version: "2.18.12"
                            },
                            logRecords: t
                        }]
                    }]
                }
            }(r, n)
        }
    }
    var sd, ad, ud, cd;
    ed = new WeakMap, nd = new WeakMap;
    const ld = "/v1/logs",
        fd = "/v2/logs";
    class pd {
        constructor(t) {
            let {
                transportId: e,
                resourceAttributes: r,
                logTypeBaseline: o,
                formatVersion: s = "v1",
                logsEndpoint: a = ("v1" === s ? ld : fd),
                logsCollectorBaseUrl: u,
                tagId: c,
                enableWriteBuffer: l = !0,
                httpClient: f = new n.HttpClient({
                    baseUrl: u,
                    headers: c ? {
                        "api-key": c,
                        "tag-id": c
                    } : {}
                }),
                formatter: p = new id({
                    resourceAttributes: r,
                    formatVersion: s
                })
            } = t;
            sd.add(this), ad.set(this, void 0), ud.set(this, void 0), this.transportId = e, this.logTypeBaseline = o, this.logsEndpoint = a, this.enableWriteBuffer = l, this.httpClient = f, this.formatter = p, i(this, ad, c, "f"), i(this, ud, u, "f")
        }
        getTransportId() {
            return this.transportId
        }
        requiresConnectivity() {
            return !0
        }
        hasWriteBuffer() {
            return this.enableWriteBuffer
        }
        getLogTypeBaseline() {
            return this.logTypeBaseline
        }
        setLogTypeBaseline(t) {
            this.logTypeBaseline = t
        }
        setTagId(t) {
            i(this, ad, t, "f")
        }
        setResourceAttributes(t) {
            var e, n;
            null === (n = (e = this.formatter).setResourceAttributes) || void 0 === n || n.call(e, t)
        }
        write(t) {
            return r(this, void 0, void 0, (function*() {
                return o(this, sd, "m", cd).call(this, this.formatter.format(t))
            }))
        }
        writeAll(t) {
            return r(this, void 0, void 0, (function*() {
                return o(this, sd, "m", cd).call(this, this.formatter.formatAll(t))
            }))
        }
    }
    var hd, dd, gd, vd, _d, yd, md, Td, bd;
    ad = new WeakMap, ud = new WeakMap, sd = new WeakSet, cd = function(t) {
        return r(this, void 0, void 0, (function*() {
            return this.httpClient.post({
                url: this.logsEndpoint,
                payload: t,
                contentType: n.ContentType.Json,
                headers: o(this, ad, "f") ? {
                    "api-key": o(this, ad, "f"),
                    "tag-id": o(this, ad, "f")
                } : {},
                baseURL: o(this, ud, "f")
            })
        }))
    };
    class Ed {
        constructor() {
            let {
                resourceAttributes: t = {},
                formatVersion: e = "v1"
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            hd.add(this), dd.set(this, void 0), gd.set(this, void 0), i(this, dd, t, "f"), i(this, gd, e, "f")
        }
        setResourceAttributes(t) {
            i(this, dd, null != t ? t : {}, "f")
        }
        format(t) {
            return this.formatAll([t])
        }
        formatAll(t) {
            const e = Object.assign({
                    [kh.AccessType]: 3
                }, o(this, dd, "f")),
                n = Bl(e),
                r = t.map((t => {
                    const e = Object.assign({
                            [kh.Visibility]: Ml[bo.External]
                        }, o(this, hd, "m", vd).call(this, t.attributes)),
                        n = Ul(e),
                        r = Bl(n);
                    return Object.assign({
                        traceId: t.traceId,
                        spanId: t.spanId,
                        parentSpanId: t.parentSpanId,
                        name: t.name,
                        startTimeUnixNano: t.startTimeUnixNano,
                        endTimeUnixNano: t.endTimeUnixNano,
                        status: {
                            code: 0 !== t.status ? t.status : 1
                        },
                        attributes: r
                    }, t.kind ? {
                        kind: t.kind
                    } : {})
                }));
            return "v1" === o(this, gd, "f") ? function(t, e) {
                return {
                    resourceSpans: [{
                        resource: {
                            attributes: e
                        },
                        instrumentationLibrarySpans: [{
                            instrumentationLibrary: {
                                name: "@outsystems/logger-js",
                                version: "2.18.12"
                            },
                            spans: t
                        }]
                    }]
                }
            }(r, n) : function(t, e) {
                return {
                    resourceSpans: [{
                        resource: {
                            attributes: e
                        },
                        scopeSpans: [{
                            scope: {
                                name: "@outsystems/logger-js",
                                version: "2.18.12"
                            },
                            spans: t
                        }]
                    }]
                }
            }(r, n)
        }
    }
    dd = new WeakMap, gd = new WeakMap, hd = new WeakSet, vd = function(t) {
        return Object.entries(t).reduce(((t, e) => {
            let [n, r] = e;
            return Ih.includes(n) || (t[n] = r), t
        }), {})
    };
    const Sd = "/v1/traces",
        Od = "/v2/traces";
    class wd {
        constructor(t) {
            let {
                transportId: e,
                resourceAttributes: r,
                enabled: o = !0,
                formatVersion: s = "v1",
                tracesEndpoint: a = ("v1" === s ? Sd : Od),
                tracesCollectorBaseUrl: u,
                tagId: c,
                enableWriteBuffer: l = !0,
                httpClient: f = new n.HttpClient({
                    baseUrl: u,
                    headers: c ? {
                        "api-key": c,
                        "tag-id": c
                    } : {}
                }),
                formatter: p = new Ed({
                    resourceAttributes: r,
                    formatVersion: s
                })
            } = t;
            _d.add(this), yd.set(this, void 0), md.set(this, void 0), Td.set(this, void 0), this.transportId = e, i(this, yd, o, "f"), this.tracesEndpoint = a, this.enableWriteBuffer = l, this.httpClient = f, this.formatter = p, i(this, md, c, "f"), i(this, Td, u, "f")
        }
        getTransportId() {
            return this.transportId
        }
        isTracingEnabled() {
            return o(this, yd, "f")
        }
        enableTracing() {
            i(this, yd, !0, "f")
        }
        disableTracing() {
            i(this, yd, !1, "f")
        }
        requiresConnectivity() {
            return !0
        }
        hasWriteBuffer() {
            return this.enableWriteBuffer
        }
        setTagId(t) {
            i(this, md, t, "f")
        }
        setResourceAttributes(t) {
            var e, n;
            null === (n = (e = this.formatter).setResourceAttributes) || void 0 === n || n.call(e, t)
        }
        write(t) {
            return r(this, void 0, void 0, (function*() {
                return o(this, _d, "m", bd).call(this, this.formatter.format(t))
            }))
        }
        writeAll(t) {
            return r(this, void 0, void 0, (function*() {
                return o(this, _d, "m", bd).call(this, this.formatter.formatAll(t))
            }))
        }
    }
    var Ad, Ld, kd, Id, Pd, Rd, Cd, Nd, xd, jd, Md, Dd, Bd, Ud, Wd, zd, Fd, Zd, Vd, Gd, Hd, Xd, $d, qd;
    yd = new WeakMap, md = new WeakMap, Td = new WeakMap, _d = new WeakSet, bd = function(t) {
        return r(this, void 0, void 0, (function*() {
            return this.httpClient.post({
                url: this.tracesEndpoint,
                payload: t,
                contentType: n.ContentType.Json,
                headers: o(this, md, "f") ? {
                    "api-key": o(this, md, "f"),
                    "tag-id": o(this, md, "f")
                } : {},
                baseURL: o(this, Td, "f")
            })
        }))
    };
    class Kd {
        constructor() {
            let {
                sw: t,
                container: e = navigator.serviceWorker
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            var n;
            if (Ad.set(this, void 0), Ld.set(this, void 0), kd.set(this, []), Id.set(this, !1), !e) throw new Error("No service worker container available");
            i(this, Ad, null !== (n = null != t ? t : null == e ? void 0 : e.controller) && void 0 !== n ? n : void 0, "f"), i(this, Ld, e, "f"), this.waitForSW()
        }
        get pendingMessages() {
            return o(this, kd, "f")
        }
        isServiceWorkerAvailable() {
            return !!o(this, Ad, "f") && "activated" === o(this, Ad, "f").state
        }
        send(t, e) {
            this.sendMessage({
                kind: t,
                data: e
            })
        }
        sendMessage(t, e) {
            var n;
            this.isServiceWorkerAvailable() ? null === (n = o(this, Ad, "f")) || void 0 === n || n.postMessage(t, e) : (o(this, kd, "f").push({
                message: t,
                options: e
            }), this.waitForSW())
        }
        waitForSW() {
            return r(this, void 0, void 0, (function*() {
                if (this.isServiceWorkerAvailable() || o(this, Id, "f")) return;
                i(this, Id, !0, "f");
                const {
                    active: t
                } = yield o(this, Ld, "f").ready;
                i(this, Ad, null != t ? t : void 0, "f"), i(this, Id, !1, "f"), this.flushMessages()
            }))
        }
        flushMessages() {
            var t;
            if (this.isServiceWorkerAvailable()) {
                for (const {
                        message: e,
                        options: n
                    } of o(this, kd, "f")) null === (t = o(this, Ad, "f")) || void 0 === t || t.postMessage(e, n);
                i(this, kd, [], "f")
            } else this.waitForSW()
        }
    }
    Ad = new WeakMap, Ld = new WeakMap, kd = new WeakMap, Id = new WeakMap;
    class Yd {
        constructor(t) {
            let {
                transportId: e,
                tagId: n,
                collectorBaseUrl: r,
                databaseSuffix: o,
                swTransport: s = new Kd,
                enabled: a = !0,
                attributes: u = {},
                aggregateSpans: c = !1,
                formatVersion: l = "v1"
            } = t;
            Pd.set(this, void 0), Rd.set(this, void 0), Cd.set(this, void 0), Nd.set(this, void 0), xd.set(this, void 0), jd.set(this, void 0), Md.set(this, void 0), Dd.set(this, void 0), Bd.set(this, void 0), i(this, Pd, e, "f"), i(this, Rd, s, "f"), i(this, Bd, a, "f"), i(this, Cd, u, "f"), i(this, Nd, n, "f"), i(this, xd, r, "f"), i(this, jd, o, "f"), i(this, Md, c, "f"), i(this, Dd, l, "f")
        }
        getTransportId() {
            return o(this, Pd, "f")
        }
        requiresConnectivity() {
            return !1
        }
        isTracingEnabled() {
            return o(this, Bd, "f")
        }
        enableTracing() {
            i(this, Bd, !0, "f")
        }
        disableTracing() {
            i(this, Bd, !1, "f")
        }
        hasWriteBuffer() {
            return !1
        }
        write(t) {
            return o(this, Rd, "f").send("Span", t), Promise.resolve()
        }
        writeAll(t) {
            for (const e of t) o(this, Rd, "f").send("Span", e);
            return Promise.resolve()
        }
        flush() {
            return o(this, Rd, "f").send("Flush", {
                kind: "Spans"
            }), Promise.resolve()
        }
        initialize() {
            o(this, Rd, "f").send("SpansInitialization", {
                databaseSuffix: o(this, jd, "f"),
                resourceAttributes: o(this, Cd, "f"),
                collectorBaseUrl: o(this, xd, "f"),
                apiKey: o(this, Nd, "f"),
                aggregateSpans: o(this, Md, "f"),
                formatVersion: o(this, Dd, "f")
            })
        }
    }
    Pd = new WeakMap, Rd = new WeakMap, Cd = new WeakMap, Nd = new WeakMap, xd = new WeakMap, jd = new WeakMap, Md = new WeakMap, Dd = new WeakMap, Bd = new WeakMap;
    t.InstrumentationFactory = class {
            constructor(t) {
                let {
                    databaseNameSuffix: n,
                    logTransports: r,
                    traceTransports: o,
                    baseLogAttributes: s = {},
                    baseSpanAttributes: a = {},
                    staticSpanAttributes: u = [],
                    isOnline: c,
                    aggregateSpans: l,
                    transportManager: f = new mo({
                        databaseNameSuffix: n,
                        logTransports: r,
                        traceTransports: o,
                        isOnline: c,
                        aggregateSpans: l
                    }),
                    tracerInstance: p,
                    loggerInstance: h
                } = t;
                Ud.add(this), Wd.set(this, void 0), zd.set(this, void 0), Fd.set(this, void 0), Zd.set(this, void 0), Vd.set(this, void 0), Gd.set(this, void 0), Hd.set(this, void 0), Xd.set(this, void 0), i(this, Wd, f, "f"), i(this, zd, p, "f"), i(this, Fd, h, "f"), i(this, Zd, (() => e.FeaturesManager.isEnabled(e.FeatureKeys.WriteLogsOnConsoles)), "f"), i(this, Vd, s, "f"), i(this, Gd, a, "f"), i(this, Hd, u, "f"), i(this, Xd, n, "f")
            }
            init() {
                return r(this, void 0, void 0, (function*() {
                    yield this.getLogger(), this.getTracer()
                }))
            }
            getLogger() {
                return r(this, void 0, void 0, (function*() {
                    return o(this, Fd, "f") || i(this, Fd, yield Vl.build({
                        transportManager: o(this, Wd, "f"),
                        baseAttributes: o(this, Vd, "f")
                    }), "f"), o(this, Fd, "f")
                }))
            }
            getTracer() {
                return o(this, zd, "f") || i(this, zd, new qh({
                    transportManager: o(this, Wd, "f"),
                    baseAttributes: o(this, Gd, "f"),
                    staticAttributes: o(this, Hd, "f")
                }), "f"), o(this, zd, "f")
            }
            useNativeLoggerTransport(t) {
                return r(this, arguments, void 0, (function(t) {
                    var e = this;
                    let {
                        plugin: n,
                        logTypeBaseline: r
                    } = t;
                    return function*() {
                        (yield e.getLogger()).addTransport(new td({
                            transportId: "native-logger-transport",
                            nativeLoggerV2: n,
                            logTypeBaseline: r
                        }))
                    }()
                }))
            }
            useOpenTelemetryLoggerTransport(t) {
                return r(this, arguments, void 0, (function(t) {
                    var e = this;
                    let {
                        resourceAttributes: n,
                        logTypeBaseline: r,
                        collectorBaseUrl: o,
                        tagId: i,
                        httpClient: s,
                        formatVersion: a
                    } = t;
                    return function*() {
                        (yield e.getLogger()).addTransport(new pd({
                            transportId: "otel-logger-transport",
                            resourceAttributes: n,
                            logTypeBaseline: r,
                            logsCollectorBaseUrl: o,
                            tagId: i,
                            httpClient: s,
                            formatVersion: a
                        }))
                    }()
                }))
            }
            useConsoleLoggerTransport(t) {
                return r(this, void 0, void 0, (function*() {
                    (yield this.getLogger()).addTransport(new Kh({
                        transportId: "console-transport",
                        logTypeBaseline: t,
                        shouldWriteLogsOnConsoles: o(this, Zd, "f")
                    }))
                }))
            }
            useServiceWorkerTracerTransport(t) {
                let {
                    resourceAttributes: e,
                    enabled: n = !0,
                    collectorBaseUrl: r,
                    tagId: i,
                    swTransport: s,
                    aggregateSpans: a = !1,
                    formatVersion: u = "v1"
                } = t;
                const c = this.getTracer(),
                    l = new Yd({
                        transportId: "sw-tracer-transport",
                        attributes: e,
                        enabled: n,
                        tagId: i,
                        collectorBaseUrl: r,
                        databaseSuffix: o(this, Xd, "f"),
                        swTransport: s,
                        aggregateSpans: a,
                        formatVersion: u
                    });
                l.initialize(), c.addTransport(l)
            }
            useOpenTelemetryTracerTransport(t) {
                let {
                    resourceAttributes: e,
                    enabled: n = !0,
                    collectorBaseUrl: r,
                    tagId: o,
                    httpClient: i,
                    formatVersion: s
                } = t;
                const a = this.getTracer(),
                    u = new wd({
                        transportId: "otel-tracer-transport",
                        resourceAttributes: e,
                        enabled: n,
                        tagId: o,
                        tracesCollectorBaseUrl: r,
                        httpClient: i,
                        formatVersion: s
                    });
                a.addTransport(u)
            }
            useConsoleTracerTransport() {
                return r(this, void 0, void 0, (function*() {
                    throw new Error("Not implemented")
                }))
            }
            useFetchInstrumentation() {
                this.getTracer().enableFetchInstrumentation()
            }
            setLogLevel(t) {
                o(this, Wd, "f").setAllLogTypeBaselines(t)
            }
            setTracerStatus(t) {
                this.getTracer().setStatus(t)
            }
            setTagId(t) {
                o(this, Wd, "f").setTagId(t)
            }
            setAggregateSpansStatus(t) {
                o(this, Wd, "f").setAggregateSpansStatus(t)
            }
            setResourceAttributes(t) {
                o(this, Wd, "f").setResourceAttributes(t)
            }
            setSchedulerTimerInterval(t) {
                o(this, Wd, "f").setSchedulerTimerInterval(t)
            }
            flushInstrumentationData() {
                return r(this, void 0, void 0, (function*() {
                    yield Promise.all([o(this, Wd, "f").flushLogs(), o(this, Wd, "f").flushSpans()])
                }))
            }
            logError(t) {
                return r(this, arguments, void 0, (function(t) {
                    var e = this;
                    let {
                        category: n,
                        message: r,
                        error: i,
                        errorCode: s,
                        visibility: a,
                        failSpan: u = !0,
                        attributes: c
                    } = t;
                    return function*() {
                        if (u) {
                            const t = e.getTracer().getActiveSpan();
                            null == t || t.fail()
                        }(yield e.getLogger()).error({
                            category: n,
                            message: r,
                            error: i,
                            errorCode: s,
                            visibility: a,
                            span: o(e, Ud, "m", $d).call(e),
                            attributes: c
                        })
                    }()
                }))
            }
            logWarning(t) {
                return r(this, arguments, void 0, (function(t) {
                    var e = this;
                    let {
                        category: n,
                        message: r,
                        visibility: i,
                        attributes: s
                    } = t;
                    return function*() {
                        (yield e.getLogger()).warning({
                            category: n,
                            message: r,
                            visibility: i,
                            span: o(e, Ud, "m", $d).call(e),
                            attributes: s
                        })
                    }()
                }))
            }
            logInfo(t) {
                return r(this, arguments, void 0, (function(t) {
                    var e = this;
                    let {
                        category: n,
                        message: r,
                        visibility: i,
                        attributes: s
                    } = t;
                    return function*() {
                        (yield e.getLogger()).info({
                            category: n,
                            message: r,
                            visibility: i,
                            span: o(e, Ud, "m", $d).call(e),
                            attributes: s
                        })
                    }()
                }))
            }
            logDebug(t) {
                return r(this, arguments, void 0, (function(t) {
                    var e = this;
                    let {
                        category: n,
                        message: r,
                        visibility: i,
                        attributes: s
                    } = t;
                    return function*() {
                        (yield e.getLogger()).debug({
                            category: n,
                            message: r,
                            visibility: i,
                            span: o(e, Ud, "m", $d).call(e),
                            attributes: s
                        })
                    }()
                }))
            }
            log(t) {
                return r(this, void 0, void 0, (function*() {
                    const e = yield this.getLogger();
                    yield e.log(t)
                }))
            }
            span(t) {
                return r(this, void 0, void 0, (function*() {
                    const e = this.getTracer();
                    yield e.span(t)
                }))
            }
            flushLogs() {
                return r(this, void 0, void 0, (function*() {
                    yield o(this, Wd, "f").flushLogs()
                }))
            }
            flushSpans() {
                return r(this, void 0, void 0, (function*() {
                    yield o(this, Wd, "f").flushSpans()
                }))
            }
            startSpan(t, e, n, r) {
                return this.getTracer().startSpan(t, e, n, r)
            }
            startActiveSpan(t, e, n, r, o) {
                return this.getTracer().startActiveSpan(t, e, n, r, o)
            }
            getActiveSpan() {
                return this.getTracer().getActiveSpan()
            }
        }, Wd = new WeakMap, zd = new WeakMap, Fd = new WeakMap, Zd = new WeakMap, Vd = new WeakMap, Gd = new WeakMap, Hd = new WeakMap, Xd = new WeakMap, Ud = new WeakSet, $d = function() {
            const t = this.getTracer().getActiveSpan();
            return t ? Ah(t) : void 0
        },
        function(t) {
            t[t.Internal = 0] = "Internal", t[t.Client = 2] = "Client"
        }(qd || (t.SpanKind = qd = {}));
    t.Version = "2.18.12"
}));